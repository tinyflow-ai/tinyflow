import { defineComponent as cf, ref as df, onMounted as ff, onUnmounted as vf, createElementBlock as hf, openBlock as gf, normalizeStyle as pf, normalizeClass as mf } from "vue";
var yf = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, wf = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vt = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Wl("Cannot " + n), lt = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), bf = (e, t, n) => (Za(e, t, "access private method"), n);
const xf = "5";
var Ts;
typeof window < "u" && ((Ts = window.__svelte ?? (window.__svelte = {})).v ?? (Ts.v = /* @__PURE__ */ new Set())).add(xf);
let Br = !1, $f = !1;
function Cf() {
  Br = !0;
}
Cf();
const Ba = 1, Ra = 2, Kl = 4, _f = 8, kf = 16, Sf = 1, Ef = 2, ql = 4, Hf = 8, Mf = 16, jl = 1, Pf = 2, Xa = "[", Ya = "[!", Wa = "]", $r = {}, Mt = Symbol(), Vf = "http://www.w3.org/1999/xhtml", Nf = "http://www.w3.org/2000/svg", zf = !1;
function Mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var _o = Array.isArray, Tf = Array.prototype.indexOf, Ka = Array.from, ri = Object.keys, ao = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, Df = Object.prototype, Lf = Array.prototype, qa = Object.getPrototypeOf, Ds = Object.isExtensible;
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
const sn = 2, Gl = 4, Pi = 8, ja = 16, On = 32, vr = 64, oi = 128, Bt = 256, ii = 512, kt = 1024, wn = 2048, Jn = 4096, Nn = 8192, Vi = 16384, Af = 32768, Rr = 65536, If = 1 << 17, Zf = 1 << 19, Ul = 1 << 20, ha = 1 << 21, Wn = Symbol("$state"), Fa = Symbol("legacy props"), Bf = Symbol("");
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
function Ni(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function It(e) {
  Se = e;
}
let Oe;
function _t(e) {
  if (e === null)
    throw Ni(), $r;
  return Oe = e;
}
function bn() {
  return _t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ kn(Oe)
  );
}
function X(e) {
  if (Se) {
    if (/* @__PURE__ */ kn(Oe) !== null)
      throw Ni(), $r;
    Oe = e;
  }
}
function Me(e = 1) {
  if (Se) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ kn(n);
    Oe = n;
  }
}
function ga() {
  for (var e = 0, t = Oe; ; ) {
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
      /* @__PURE__ */ kn(t)
    );
    t.remove(), t = r;
  }
}
function Ft(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = qa(e);
  if (t !== Df && t !== Lf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _o(e), o = /* @__PURE__ */ xt(0), i = qe, a = (s) => {
    var l = qe;
    xn(i);
    var u = s();
    return xn(l), u;
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
            a(() => /* @__PURE__ */ xt(Mt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && F(c, d);
          }
          F(u, Mt), Ls(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Wn)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Vn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ xt(Ft(f ? s[l] : Mt))), n.set(l, d)), d !== void 0) {
          var v = h(d);
          return v === Mt ? void 0 : v;
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
          if (d !== void 0 && f !== Mt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Mt || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Vn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ xt(d ? Ft(s[l]) : Mt)), n.set(l, c));
          var f = h(c);
          if (f === Mt)
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
            b !== void 0 ? F(b, Mt) : w in s && (b = a(() => /* @__PURE__ */ xt(Mt)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Vn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ xt(void 0)), F(
          f,
          a(() => Ft(u))
        ), n.set(l, f)) : (v = f.v !== Mt, F(
          f,
          a(() => Ft(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= _.v && F(_, g + 1);
          }
          Ls(o);
        }
        return !0;
      },
      ownKeys(s) {
        h(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Mt;
        });
        for (var [u, c] of n)
          c.v !== Mt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ff();
      }
    }
  );
}
function Ls(e, t = 1) {
  F(e, e.v + t);
}
var Pt, Ql, Jl, eu;
function pa() {
  if (Pt === void 0) {
    Pt = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Jl = Vn(t, "firstChild").get, eu = Vn(t, "nextSibling").get, Ds(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ds(n) && (n.__t = void 0);
  }
}
function Tn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return Jl.call(e);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return eu.call(e);
}
function Y(e, t) {
  if (!Se)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(Oe)
  );
  if (n === null)
    n = Oe.appendChild(Tn());
  else if (t && n.nodeType !== 3) {
    var r = Tn();
    return n == null || n.before(r), _t(r), r;
  }
  return _t(n), n;
}
function be(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ kn(n) : n;
  }
  return Oe;
}
function I(e, t = 1, n = !1) {
  let r = Se ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ kn(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Tn();
    return r === null ? o == null || o.after(a) : r.before(a), _t(a), a;
  }
  return _t(r), /** @type {TemplateNode} */
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
function Qa(e) {
  return !Ua(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  var t = sn | wn, n = qe !== null && qe.f & sn ? (
    /** @type {Derived} */
    qe
  ) : null;
  return je === null || n !== null && n.f & Bt ? t |= Bt : je.f |= Ul, {
    ctx: Ye,
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
  const t = /* @__PURE__ */ Hr(e);
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Hr(e);
  return t.equals = Qa, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Qt(
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
  var t = ru(e), n = (Xn || e.f & Bt) && e.deps !== null ? Jn : kt;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = gu());
}
function iu(e) {
  je === null && qe === null && Yf(), qe !== null && qe.f & Bt && je === null && Xf(), So && Rf();
}
function Qf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: Ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | wn,
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
      Ti(i), i.f |= Af;
    } catch (l) {
      throw Qt(i), l;
    }
  else t !== null && Di(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ul | oi)) === 0;
  if (!a && r && (o !== null && Qf(i, o), qe !== null && qe.f & sn)) {
    var s = (
      /** @type {Derived} */
      qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ja(e) {
  const t = hr(Pi, null, !1);
  return Jt(t, kt), t.teardown = e, t;
}
function Fn(e) {
  iu();
  var t = je !== null && (je.f & On) !== 0 && Ye !== null && !Ye.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ye
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
function Jf(e) {
  return iu(), Xr(e);
}
function e1(e) {
  const t = hr(vr, e, !0);
  return () => {
    Qt(t);
  };
}
function t1(e) {
  const t = hr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      Qt(t), r(void 0);
    }) : (Qt(t), r(void 0));
  });
}
function At(e) {
  return hr(Gl, e, !1);
}
function ve(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Xr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), $n(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ye
  );
  Xr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & kt && Jt(n, Jn), Yr(n) && Ti(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Xr(e) {
  return hr(Pi, e, !0);
}
function ke(e, t = [], n = Hr) {
  const r = t.map(n);
  return gr(() => e(...r.map(h)));
}
function gr(e, t = 0) {
  return hr(Pi | ja | t, e, !0);
}
function Dn(e, t = !0) {
  return hr(Pi | On, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = So, r = qe;
    As(!0), xn(null);
    try {
      t.call(null);
    } finally {
      As(n), xn(r);
    }
  }
}
function su(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & vr ? n.parent = null : Qt(n, t), n = r;
  }
}
function n1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || Qt(t), t = n;
  }
}
function Qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Zf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  su(e, t && !n), ui(e, 0), Jt(e, Vi);
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
function Mr(e, t) {
  var n = [];
  es(e, n, !0), uu(n, () => {
    Qt(e), t && t();
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
  if (!(e.f & Nn)) {
    if (e.f ^= Nn, e.transitions !== null)
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
  if (e.f & Nn) {
    e.f ^= Nn, e.f & kt || (e.f ^= kt), Yr(e) && (Jt(e, wn), Di(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & On) !== 0;
      cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const r1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let uo = [], co = [];
function du() {
  var e = uo;
  uo = [], so(e);
}
function fu() {
  var e = co;
  co = [], so(e);
}
function ko(e) {
  uo.length === 0 && queueMicrotask(du), uo.push(e);
}
function o1(e) {
  co.length === 0 && r1(fu), co.push(e);
}
function Os() {
  uo.length > 0 && du(), co.length > 0 && fu();
}
let jo = !1, ai = !1, si = null, ir = !1, So = !1;
function As(e) {
  So = e;
}
let ro = [], qe = null, pn = !1;
function xn(e) {
  qe = e;
}
let je = null;
function Gn(e) {
  je = e;
}
let Ut = null;
function i1(e) {
  Ut = e;
}
function vu(e) {
  qe !== null && qe.f & ha && (Ut === null ? i1([e]) : Ut.push(e));
}
let bt = null, Ot = 0, jt = null;
function a1(e) {
  jt = e;
}
let hu = 1, li = 0, Xn = !1;
function gu() {
  return ++hu;
}
function Yr(e) {
  var t, n = e.f;
  if (n & wn)
    return !0;
  if (n & Jn) {
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
    (!o || je !== null && !Xn) && Jt(e, kt);
  }
  return !1;
}
function s1(e, t) {
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
function l1(e) {
  return (e.f & Vi) === 0 && (e.parent === null || (e.parent.f & oi) === 0);
}
function zi(e, t, n, r) {
  if (jo) {
    if (n === null && (jo = !1), l1(t))
      throw e;
    return;
  }
  n !== null && (jo = !0);
  {
    s1(e, t);
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
      ) : t === i && (n ? Jt(i, wn) : i.f & kt && Jt(i, Jn), Di(
        /** @type {Effect} */
        i
      )));
    }
}
function mu(e) {
  var t, n = bt, r = Ot, o = jt, i = qe, a = Xn, s = Ut, l = Ye, u = pn, c = e.f;
  bt = /** @type {null | Value[]} */
  null, Ot = 0, jt = null, Xn = (c & Bt) !== 0 && (pn || !ir || qe === null), qe = c & (On | vr) ? null : e, Ut = null, Zs(e.ctx), pn = !1, li++, e.f |= ha;
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
    if (Li() && jt !== null && !pn && f !== null && !(e.f & (sn | Jn | wn)))
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
    bt = n, Ot = r, jt = o, qe = i, Xn = a, Ut = s, Zs(l), pn = u, e.f ^= ha;
  }
}
function u1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Tf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & sn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (bt === null || !bt.includes(t)) && (Jt(t, Jn), t.f & (Bt | ii) || (t.f ^= ii), nu(
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
      u1(e, n[r]);
}
function Ti(e) {
  var t = e.f;
  if (!(t & Vi)) {
    Jt(e, kt);
    var n = je, r = Ye, o = ir;
    je = e, ir = !0;
    try {
      t & ja ? n1(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      zf && $f && e.f & wn;
    } catch (l) {
      zi(l, e, n, r || e.ctx);
    } finally {
      ir = o, je = n;
    }
  }
}
function c1() {
  try {
    Wf();
  } catch (e) {
    if (si !== null)
      zi(e, si, null);
    else
      throw e;
  }
}
function yu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; ro.length > 0; ) {
      t++ > 1e3 && c1();
      var n = ro, r = n.length;
      ro = [];
      for (var o = 0; o < r; o++) {
        var i = f1(n[o]);
        d1(i);
      }
      fo.clear();
    }
  } finally {
    ai = !1, ir = e, si = null;
  }
}
function d1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Vi | Nn)))
        try {
          Yr(r) && (Ti(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          zi(o, r, null, r.ctx);
        }
    }
}
function Di(e) {
  ai || (ai = !0, queueMicrotask(yu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | On)) {
      if (!(n & kt)) return;
      t.f ^= kt;
    }
  }
  ro.push(t);
}
function f1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (On | vr)) !== 0, i = o && (r & kt) !== 0;
    if (!i && !(r & Nn)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= kt;
      else {
        var a = qe;
        try {
          qe = n, Yr(n) && Ti(n);
        } catch (u) {
          zi(u, n, null, n.ctx);
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
  if (qe !== null && !pn) {
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
function $n(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const v1 = -7169;
function Jt(e, t) {
  e.f = e.f & v1 | t;
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
function ne(e, t = !1) {
  var n;
  const r = Pr(e);
  return t || (r.equals = Qa), Br && Ye !== null && Ye.l !== null && ((n = Ye.l).s ?? (n.s = [])).push(r), r;
}
function F(e, t, n = !1) {
  qe !== null && !pn && Li() && qe.f & (sn | ja) && !(Ut != null && Ut.includes(e)) && Gf();
  let r = n ? Ft(t) : t;
  return ya(e, r);
}
function ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    So ? fo.set(e, t) : fo.set(e, n), e.v = t, e.f & sn && (e.f & wn && ru(
      /** @type {Derived} */
      e
    ), Jt(e, e.f & Bt ? Jn : kt)), e.wv = gu(), wu(e, wn), Li() && je !== null && je.f & kt && !(je.f & (On | vr)) && (jt === null ? a1([e]) : jt.push(e));
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
    for (var r = Li(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & wn || !r && a === je || (Jt(a, t), s & (kt | Bt) && (s & sn ? wu(
        /** @type {Derived} */
        a,
        Jn
      ) : Di(
        /** @type {Effect} */
        a
      )));
    }
}
let Ye = null;
function Zs(e) {
  Ye = e;
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
function h1(e) {
  return ts().has(e);
}
function de(e, t = !1, n) {
  var r = Ye = {
    p: Ye,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Br && !t && (Ye.l = {
    s: null,
    u: null,
    r1: [],
    r2: Pr(!1)
  }), Ja(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Ye;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = je, r = qe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Gn(i.effect), xn(i.reaction), At(i.fn);
        }
      } finally {
        Gn(n), xn(r);
      }
    }
    Ye = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Li() {
  return !Br || Ye !== null && Ye.l === null;
}
function ts(e) {
  return Ye === null && Mi(), Ye.c ?? (Ye.c = new Map(g1(Ye) || void 0));
}
function g1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function p1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const m1 = [
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
function y1(e) {
  return m1.includes(e);
}
const w1 = {
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
function b1(e) {
  return e = e.toLowerCase(), w1[e] ?? e;
}
const x1 = ["touchstart", "touchmove"];
function $1(e) {
  return x1.includes(e);
}
const C1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function _1(e) {
  return C1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function k1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function S1(e) {
  Se && /* @__PURE__ */ Ct(e) !== null && Ga(e);
}
let Bs = !1;
function E1() {
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
function H1(e) {
  var t = qe, n = je;
  xn(null), Gn(null);
  try {
    return e();
  } finally {
    xn(t), Gn(n);
  }
}
const bu = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Jr.call(t, i), !i.cancelBubble)
      return H1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Xe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = xu(e, t, n, i);
  (t === document.body || t === window || t === document) && Ja(() => {
    t.removeEventListener(e, a, i);
  });
}
function Oi(e) {
  for (var t = 0; t < e.length; t++)
    bu.add(e[t]);
  for (var n of wa)
    n(e);
}
function Jr(e) {
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
    xn(null), Gn(null);
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
            if (_o(x)) {
              var [_, ...g] = x;
              _.apply(a, [e, ...g]);
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
      e.__root = n, delete e.currentTarget, xn(d), Gn(f);
    }
  }
}
function ns(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function zt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & jl) !== 0, r = (t & Pf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return zt(Oe, null), Oe;
    o === void 0 && (o = ns(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ct(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      zt(s, l);
    } else
      zt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Se)
      return zt(Oe, null), Oe;
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
      zt(c, d);
    } else
      zt(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!Se) {
    var t = Tn(e + "");
    return zt(t, t), t;
  }
  var n = Oe;
  return n.nodeType !== 3 && (n.before(n = Tn()), _t(n)), zt(n, n), n;
}
function et() {
  if (Se)
    return zt(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
  return e.append(t, n), zt(t, n), e;
}
function D(e, t) {
  if (Se) {
    je.nodes_end = Oe, bn();
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
function M1(e, t) {
  pa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Oe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Xa); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ kn(i);
    if (!i)
      throw $r;
    It(!0), _t(
      /** @type {Comment} */
      i
    ), bn();
    const a = Cu(e, { ...t, anchor: i });
    if (Oe === null || Oe.nodeType !== 8 || /** @type {Comment} */
    Oe.data !== Wa)
      throw Ni(), $r;
    return It(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && Kf(), pa(), Ga(n), It(!1), $u(e, t);
    throw a;
  } finally {
    It(r), _t(o);
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
        var w = $1(v);
        t.addEventListener(v, Jr, { passive: w });
        var b = yr.get(v);
        b === void 0 ? (document.addEventListener(v, Jr, { passive: w }), yr.set(v, 1)) : yr.set(v, b + 1);
      }
    }
  };
  l(Ka(bu)), wa.add(l);
  var u = void 0, c = t1(() => {
    var d = n ?? t.appendChild(Tn());
    return Dn(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Ye
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && zt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Se && (je.nodes_end = Oe), i && fe();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Jr);
        var w = (
          /** @type {number} */
          yr.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, Jr), yr.delete(v)) : yr.set(v, w);
      }
      wa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return ba.set(u, c), u;
}
let ba = /* @__PURE__ */ new WeakMap();
function P1(e, t) {
  const n = ba.get(e);
  return n ? (ba.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && bn();
  var o = e, i = null, a = null, s = Mt, l = n > 0 ? Rr : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Xa ? r = 0 : x === Ya ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ga(), _t(o), It(!1), w = !0, r = -1);
    }
    s ? (i ? lo(i) : v && (i = Dn(() => v(o))), a && Mr(a, () => {
      a = null;
    })) : (a ? lo(a) : v && (a = Dn(() => v(o, [n + 1, r]))), i && Mr(i, () => {
      i = null;
    })), w && It(!0);
  };
  gr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Se && (o = Oe);
}
function vo(e, t) {
  return t;
}
function V1(e, t, n, r) {
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
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), Qt(c.e, !s);
    }
  });
}
function Tt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Se ? _t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(Tn());
  }
  Se && bn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var v = n();
    return _o(v) ? v : v == null ? [] : Ka(v);
  });
  gr(() => {
    var v = h(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Se) {
      var x = (
        /** @type {Comment} */
        a.data === Ya
      );
      x !== (w === 0) && (a = ga(), _t(a), It(!1), b = !0);
    }
    if (Se) {
      for (var _ = null, g, C = 0; C < w; C++) {
        if (Oe.nodeType === 8 && /** @type {Comment} */
        Oe.data === Wa) {
          a = /** @type {Comment} */
          Oe, b = !0, It(!1);
          break;
        }
        var y = v[C], k = r(y, C);
        g = _u(
          Oe,
          s,
          _,
          null,
          y,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, g), _ = g;
      }
      w > 0 && _t(ga());
    }
    Se || N1(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? lo(c) : c = Dn(() => i(a)) : c !== null && Mr(c, () => {
      c = null;
    })), b && It(!0), h(f);
  }), Se && (a = Oe);
}
function N1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & _f) !== 0, f = (o & (Ba | Ra)) !== 0, v = e.length, w = t.items, b = t.first, x = b, _, g = null, C, y = [], k = [], S, E, V, P;
  if (d)
    for (P = 0; P < v; P += 1)
      S = e[P], E = i(S, P), V = w.get(E), V !== void 0 && ((s = V.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(V));
  for (P = 0; P < v; P += 1) {
    if (S = e[P], E = i(S, P), V = w.get(E), V === void 0) {
      var T = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      g = _u(
        T,
        t,
        g,
        g === null ? t.first : g.next,
        S,
        E,
        P,
        r,
        o,
        a
      ), w.set(E, g), y = [], k = [], x = g.next;
      continue;
    }
    if (f && z1(V, S, P, o), V.e.f & Nn && (lo(V.e), d && ((l = V.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(V))), V !== x) {
      if (_ !== void 0 && _.has(V)) {
        if (y.length < k.length) {
          var A = k[0], L;
          g = A.prev;
          var B = y[0], H = y[y.length - 1];
          for (L = 0; L < y.length; L += 1)
            Rs(y[L], A, n);
          for (L = 0; L < k.length; L += 1)
            _.delete(k[L]);
          Bn(t, B.prev, H.next), Bn(t, g, B), Bn(t, H, A), x = A, g = H, P -= 1, y = [], k = [];
        } else
          _.delete(V), Rs(V, x, n), Bn(t, V.prev, V.next), Bn(t, V, g === null ? t.first : g.next), Bn(t, g, V), g = V;
        continue;
      }
      for (y = [], k = []; x !== null && x.k !== E; )
        x.e.f & Nn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      V = x;
    }
    y.push(V), g = V, x = V.next;
  }
  if (x !== null || _ !== void 0) {
    for (var N = _ === void 0 ? [] : Ka(_); x !== null; )
      x.e.f & Nn || N.push(x), x = x.next;
    var $ = N.length;
    if ($ > 0) {
      var M = o & Kl && v === 0 ? n : null;
      if (d) {
        for (P = 0; P < $; P += 1)
          (u = N[P].a) == null || u.measure();
        for (P = 0; P < $; P += 1)
          (c = N[P].a) == null || c.fix();
      }
      V1(t, N, M, w);
    }
  }
  d && ko(() => {
    var z;
    if (C !== void 0)
      for (V of C)
        (z = V.a) == null || z.apply();
  }), je.first = t.first && t.first.e, je.last = g && g.e;
}
function z1(e, t, n, r) {
  r & Ba && ya(e.v, t), r & Ra ? ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function _u(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ba) !== 0, d = (l & kf) === 0, f = c ? d ? /* @__PURE__ */ ne(o) : Pr(o) : o, v = l & Ra ? Pr(a) : a, w = {
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
    return w.e = Dn(() => s(e, f, v, u), Se), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
      /* @__PURE__ */ kn(i)
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
      Se && bn();
      return;
    }
    s !== void 0 && (Qt(s), s = void 0), a !== "" && (s = Dn(() => {
      if (Se) {
        Oe.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ kn(l);
        if (l === null)
          throw Ni(), $r;
        zt(Oe, u), i = _t(l);
        return;
      }
      var c = a + "", d = ns(c);
      zt(
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
  Se && bn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function T1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = ft, i;
  gr(() => {
    o !== (o = t()) && (i && (Qt(i), i = null), i = Dn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Se && (r = Oe);
}
function ku(e, t, n) {
  Se && bn();
  var r = e, o, i;
  gr(() => {
    o !== (o = t()) && (i && (Mr(i), i = null), o && (i = Dn(() => n(r, o))));
  }, Rr), Se && (r = Oe);
}
function D1(e, t, n, r, o, i) {
  let a = Se;
  Se && bn();
  var s, l, u = null;
  Se && Oe.nodeType === 1 && (u = /** @type {Element} */
  Oe, bn());
  var c = (
    /** @type {TemplateNode} */
    Se ? Oe : e
  ), d;
  gr(() => {
    const f = t() || null;
    var v = f === "svg" ? Nf : null;
    f !== s && (d && (f === null ? Mr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Qt(d)), f && f !== l && (d = Dn(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), zt(u, u), r) {
        Se && _1(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ Ct(u) : u.appendChild(Tn())
        );
        Se && (w === null ? It(!1) : _t(w)), r(u, w);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Rr), a && (It(!0), _t(c));
}
function Je(e, t) {
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
function gt(e, t, n) {
  At(() => {
    var r = $n(() => t(e, n == null ? void 0 : n()) || {});
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
function L1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Su(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? L1(e) : e ?? "";
}
const Xs = [...` 	
\r\f \v\uFEFF`];
function O1(e, t, n) {
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
function A1(e, t) {
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
  if (Se || a !== n || a === void 0) {
    var s = O1(n, r, i);
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
function dt(e, t, n, r) {
  var o = e.__style;
  if (Se || o !== t) {
    var i = A1(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n == null ? void 0 : n[0], r[0]), ta(e, n == null ? void 0 : n[1], r[1], "important")) : ta(e, n, r));
  return r;
}
const Gr = Symbol("class"), nr = Symbol("style"), Eu = Symbol("is custom element"), Hu = Symbol("is html");
function oo(e) {
  if (Se) {
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
    e.__on_r = n, o1(n), E1();
  }
}
function na(e, t) {
  var n = os(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function I1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = os(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Bf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = os(e), a = i[Eu], s = !i[Hu];
  let l = Se && a;
  l && It(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = fn(n.class) : (r || n[Gr]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var f = Mu(e);
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
          const k = {}, S = "$$" + C;
          let E = C.slice(2);
          var x = y1(E);
          if (p1(E) && (E = E.slice(0, -7), k.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(E, u[S], k), u[S] = null;
          }
          if (y != null)
            if (x)
              e[`__${E}`] = y, Oi([E]);
            else {
              let V = function(P) {
                u[C].call(this, P);
              };
              u[S] = xu(E, e, V, k);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (C === "style")
          ye(e, C, y);
        else if (C === "autofocus")
          k1(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (C === "__value" || C === "value" && y != null))
          e.value = e.__value = y;
        else if (C === "selected" && c)
          I1(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var _ = C;
          s || (_ = b1(_));
          var g = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !a && !g)
            if (i[C] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (_ === "value") {
                let E = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = E, k.value = k.__value = S ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = E, k.checked = S ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else g || f.includes(_) && (a || typeof y != "string") ? e[_] = y : typeof y != "function" && ye(e, _, y);
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
      [Hu]: e.namespaceURI === Vf
    })
  );
}
var Ws = /* @__PURE__ */ new Map();
function Mu(e) {
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
let Z1 = $a;
var B1 = /* @__PURE__ */ new Z1({
  box: "border-box"
});
function Ks(e, t, n) {
  var r = B1.observe(e, () => n(e[t]));
  At(() => ($n(() => n(e[t])), r));
}
function qs(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function Cn(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return Xr(() => {
      o = i, i = [], $n(() => {
        e !== n(...i) && (t(e, ...i), o && qs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ko(() => {
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
function Te(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Hr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => h(a);
  }
  n.b.length && Jf(() => {
    js(t, r), so(n.b);
  }), Fn(() => {
    const o = $n(() => n.m.map(Of));
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
function Le(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = _o(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Wt(e) {
  Ye === null && Mi(), Br && Ye.l !== null ? X1(Ye).m.push(e) : Fn(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Ye === null && Mi(), Wt(() => () => $n(e));
}
function R1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ai() {
  const e = Ye;
  return e === null && Mi(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = _o(i) ? i.slice() : [i], s = R1(
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
function X1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function as(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = $n(
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
    source: /* @__PURE__ */ ne(void 0),
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
function Y1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function ci(e, t) {
  return e.set(t), t;
}
function ot() {
  const e = {};
  function t() {
    Ja(() => {
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
function W1(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
  }
}
const K1 = {
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
    K1
  );
}
const q1 = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Pr(0) }, q1);
}
const j1 = {
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
  return new Proxy({ props: e }, j1);
}
function Fs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function m(e, t, n, r) {
  var o, i = (n & Sf) !== 0, a = !Br || (n & Ef) !== 0, s = (n & Hf) !== 0, l = (n & Mf) !== 0, u = !1, c;
  s ? [c, u] = W1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Wn in e || Fa in e, f = s && (((o = Vn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, x = () => (b = !0, w && (w = !1, l ? v = $n(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && qf(), c = x(), f && f(c));
  var _;
  if (a)
    _ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (w = !0, b = !1, E);
    };
  else {
    var g = (i ? Hr : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= If, _ = () => {
      var E = h(g);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & ql))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(E, V) {
      return arguments.length > 0 ? ((!a || !V || C || u) && f(V ? _() : E), E) : _();
    };
  }
  var y = !1, k = /* @__PURE__ */ ne(c), S = /* @__PURE__ */ Hr(() => {
    var E = _(), V = h(k);
    return y ? (y = !1, V) : k.v = E;
  });
  return s && h(S), i || (S.equals = Qa), function(E, V) {
    if (arguments.length > 0) {
      const P = V ? h(S) : a && s ? Ft(E) : E;
      if (!S.equals(P)) {
        if (y = !0, F(k, P), b && v !== void 0 && (v = P), Fs(S))
          return E;
        $n(() => h(S));
      }
      return E;
    }
    return Fs(S) ? S.v : h(S);
  };
}
function F1(e) {
  return new G1(e);
}
var Zn, rn;
class G1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    br(this, Zn), br(this, rn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ne(s);
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
    ni(this, rn, (t.hydrate ? M1 : $u)(t.component, {
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
      P1(lt(this, rn));
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
          r !== "default" && (i.name = r), D(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = U1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Go(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = F1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = e1(() => {
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
function U1(e) {
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
var Q1 = { value: () => {
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
function J1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Uo.prototype = Ii.prototype = {
  constructor: Uo,
  on: function(e, t) {
    var n = this._, r = J1(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = ev(n[o], e.name))) return o;
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
function ev(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Gs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Q1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var _a = "http://www.w3.org/1999/xhtml";
const Us = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _a,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Us.hasOwnProperty(t) ? { space: Us[t], local: e } : e;
}
function tv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === _a && t.documentElement.namespaceURI === _a ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function nv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Nu(e) {
  var t = Zi(e);
  return (t.local ? nv : tv)(t);
}
function rv() {
}
function ss(e) {
  return e == null ? rv : function() {
    return this.querySelector(e);
  };
}
function ov(e) {
  typeof e != "function" && (e = ss(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Yt(r, this._parents);
}
function iv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function av() {
  return [];
}
function zu(e) {
  return e == null ? av : function() {
    return this.querySelectorAll(e);
  };
}
function sv(e) {
  return function() {
    return iv(e.apply(this, arguments));
  };
}
function lv(e) {
  typeof e == "function" ? e = sv(e) : e = zu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Yt(r, o);
}
function Tu(e) {
  return function() {
    return this.matches(e);
  };
}
function Du(e) {
  return function(t) {
    return t.matches(e);
  };
}
var uv = Array.prototype.find;
function cv(e) {
  return function() {
    return uv.call(this.children, e);
  };
}
function dv() {
  return this.firstElementChild;
}
function fv(e) {
  return this.select(e == null ? dv : cv(typeof e == "function" ? e : Du(e)));
}
var vv = Array.prototype.filter;
function hv() {
  return Array.from(this.children);
}
function gv(e) {
  return function() {
    return vv.call(this.children, e);
  };
}
function pv(e) {
  return this.selectAll(e == null ? hv : gv(typeof e == "function" ? e : Du(e)));
}
function mv(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Yt(r, this._parents);
}
function Lu(e) {
  return new Array(e.length);
}
function yv() {
  return new Yt(this._enter || this._groups.map(Lu), this._parents);
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
function wv(e) {
  return function() {
    return e;
  };
}
function bv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function xv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new di(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function $v(e) {
  return e.__data__;
}
function Cv(e, t) {
  if (!arguments.length) return Array.from(this, $v);
  var n = t ? xv : bv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = wv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = _v(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), x = a[u] = new Array(w), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var g = 0, C = 0, y, k; g < w; ++g)
      if (y = b[g]) {
        for (g >= C && (C = g + 1); !(k = x[C]) && ++C < w; ) ;
        y._next = k || null;
      }
  }
  return a = new Yt(a, r), a._enter = s, a._exit = l, a;
}
function _v(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function kv() {
  return new Yt(this._exit || this._groups.map(Lu), this._parents);
}
function Sv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ev(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Yt(s, this._parents);
}
function Hv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Mv(e) {
  e || (e = Pv);
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
function Pv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Nv() {
  return Array.from(this);
}
function zv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function Tv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Dv() {
  return !this.node();
}
function Lv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Ov(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Av(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Iv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Zv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Bv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Rv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Xv(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Av : Ov : typeof t == "function" ? n.local ? Rv : Bv : n.local ? Zv : Iv)(n, t));
}
function Ou(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Yv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Wv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Kv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function qv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Yv : typeof t == "function" ? Kv : Wv)(e, t, n ?? "")) : Nr(this.node(), e);
}
function Nr(e, t) {
  return e.style.getPropertyValue(t) || Ou(e).getComputedStyle(e, null).getPropertyValue(t);
}
function jv(e) {
  return function() {
    delete this[e];
  };
}
function Fv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Gv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Uv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? jv : typeof t == "function" ? Gv : Fv)(e, t)) : this.node()[e];
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
function Qv(e) {
  return function() {
    Zu(this, e);
  };
}
function Jv(e) {
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
  return this.each((typeof t == "function" ? eh : t ? Qv : Jv)(n, t));
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
  var t = typeof e == "function" ? e : Nu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gh() {
  return null;
}
function ph(e, t) {
  var n = typeof e == "function" ? e : Nu(e), r = t == null ? gh : typeof t == "function" ? t : ss(t);
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
function _h(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function kh(e) {
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
  var r = _h(e + ""), o, i = r.length, a;
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
  for (s = t ? Sh : kh, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Ru(e, t, n) {
  var r = Ou(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hh(e, t) {
  return function() {
    return Ru(this, e, t);
  };
}
function Mh(e, t) {
  return function() {
    return Ru(this, e, t.apply(this, arguments));
  };
}
function Ph(e, t) {
  return this.each((typeof t == "function" ? Mh : Hh)(e, t));
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
function Nh() {
  return this;
}
Yt.prototype = Eo.prototype = {
  constructor: Yt,
  select: ov,
  selectAll: lv,
  selectChild: fv,
  selectChildren: pv,
  filter: mv,
  data: Cv,
  enter: yv,
  exit: kv,
  join: Sv,
  merge: Ev,
  selection: Nh,
  order: Hv,
  sort: Mv,
  call: Vv,
  nodes: Nv,
  node: zv,
  size: Tv,
  empty: Dv,
  each: Lv,
  attr: Xv,
  style: qv,
  property: Uv,
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
function zh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = zh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Th = { passive: !1 }, ho = { capture: !0, passive: !1 };
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
function ka(e, {
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
ka.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Dh(e) {
  return !e.ctrlKey && !e.button;
}
function Lh() {
  return this.parentNode;
}
function Oh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ah() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ih() {
  var e = Dh, t = Lh, n = Oh, r = Ah, o = {}, i = Ii("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Th).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, k) {
    if (!(c || !e.call(this, y, k))) {
      var S = C(this, t.call(this, y, k), y, k, "mouse");
      S && (Gt(y.view).on("mousemove.drag", w, ho).on("mouseup.drag", b, ho), Yu(y.view), oa(y), u = !1, s = y.clientX, l = y.clientY, S("start", y));
    }
  }
  function w(y) {
    if (Cr(y), !u) {
      var k = y.clientX - s, S = y.clientY - l;
      u = k * k + S * S > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    Gt(y.view).on("mousemove.drag mouseup.drag", null), Wu(y.view, u), Cr(y), o.mouse("end", y);
  }
  function x(y, k) {
    if (e.call(this, y, k)) {
      var S = y.changedTouches, E = t.call(this, y, k), V = S.length, P, T;
      for (P = 0; P < V; ++P)
        (T = C(this, E, y, k, S[P].identifier, S[P])) && (oa(y), T("start", y, S[P]));
    }
  }
  function _(y) {
    var k = y.changedTouches, S = k.length, E, V;
    for (E = 0; E < S; ++E)
      (V = o[k[E].identifier]) && (Cr(y), V("drag", y, k[E]));
  }
  function g(y) {
    var k = y.changedTouches, S = k.length, E, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < S; ++E)
      (V = o[k[E].identifier]) && (oa(y), V("end", y, k[E]));
  }
  function C(y, k, S, E, V, P) {
    var T = i.copy(), A = on(P || S, k), L, B, H;
    if ((H = n.call(y, new ka("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: V,
      active: a,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), E)) != null)
      return L = H.x - A[0] || 0, B = H.y - A[1] || 0, function N($, M, z) {
        var O = A, Z;
        switch ($) {
          case "start":
            o[V] = N, Z = a++;
            break;
          case "end":
            delete o[V], --a;
          // falls through
          case "drag":
            A = on(z || M, k), Z = a;
            break;
        }
        T.call(
          $,
          y,
          new ka($, {
            sourceEvent: M,
            subject: H,
            target: f,
            identifier: V,
            active: Z,
            x: A[0] + L,
            y: A[1] + B,
            dx: A[0] - O[0],
            dy: A[1] - O[1],
            dispatch: T
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
function Ho() {
}
var go = 0.7, fi = 1 / go, _r = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zh = /^#([0-9a-f]{3,8})$/, Bh = new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`), Rh = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Xh = new RegExp(`^rgba\\(${_r},${_r},${_r},${po}\\)$`), Yh = new RegExp(`^rgba\\(${mn},${mn},${mn},${po}\\)$`), Wh = new RegExp(`^hsl\\(${po},${mn},${mn}\\)$`), Kh = new RegExp(`^hsla\\(${po},${mn},${mn},${po}\\)$`), Qs = {
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
us(Ho, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Js,
  // Deprecated! Use color.formatHex.
  formatHex: Js,
  formatHex8: qh,
  formatHsl: jh,
  formatRgb: el,
  toString: el
});
function Js() {
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
  return e = (e + "").trim().toLowerCase(), (t = Zh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bh.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = Rh.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Xh.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Yh.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wh.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kh.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Qs.hasOwnProperty(e) ? tl(Qs[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Nt(e, t, n, r);
}
function Fh(e) {
  return e instanceof Ho || (e = mo(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Sa(e, t, n, r) {
  return arguments.length === 1 ? Fh(e) : new Nt(e, t, n, r ?? 1);
}
function Nt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(Nt, Sa, Ku(Ho, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(ar(this.r), ar(this.g), ar(this.b), vi(this.opacity));
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
  if (e instanceof Ho || (e = mo(e)), !e) return new an();
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
us(an, Uh, Ku(Ho, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Nt(
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
function Qh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Jh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eg(e) {
  return (e = +e) == 1 ? Fu : function(t, n) {
    return n - t ? Jh(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Qh(e, n) : ju(isNaN(e) ? t : e);
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
function Qu(e, t, n, r) {
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
var ag = Qu(og, "px, ", "px)", "deg)"), sg = Qu(ig, ", ", ")", ")"), lg = 1e-12;
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, x, _;
    if (b < lg)
      _ = Math.log(f / u) / t, x = function(E) {
        return [
          s + E * v,
          l + E * w,
          u * Math.exp(t * E * _)
        ];
      };
    else {
      var g = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * g), y = (f * f - u * u - r * b) / (2 * f * n * g), k = Math.log(Math.sqrt(C * C + 1) - C), S = Math.log(Math.sqrt(y * y + 1) - y);
      _ = (S - k) / t, x = function(E) {
        var V = E * _, P = ll(k), T = u / (n * g) * (P * cg(t * V + k) - ug(k));
        return [
          s + T * v,
          l + T * w,
          u * P / ll(t * V + k)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, eo = 0, Ur = 0, Ju = 1e3, hi, to, gi = 0, ur = 0, Bi = 0, yo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
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
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && to !== this && (to ? to._next = this : hi = this, to = this), this._call = e, this._time = n, Ha();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ha());
  }
};
function tc(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function vg() {
  cs(), ++zr;
  for (var e = hi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function ul() {
  ur = (gi = yo.now()) + Bi, zr = eo = 0;
  try {
    vg();
  } finally {
    zr = 0, gg(), ur = 0;
  }
}
function hg() {
  var e = yo.now(), t = e - gi;
  t > Ju && (Bi -= t, gi = e);
}
function gg() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  to = e, Ha(r);
}
function Ha(e) {
  if (!zr) {
    eo && (eo = clearTimeout(eo));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ul, e - yo.now() - Bi)), Ur && (Ur = clearInterval(Ur))) : (Ur || (gi = yo.now(), Ur = setInterval(hg, Ju)), zr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var pg = Ii("start", "end", "cancel", "interrupt"), mg = [], nc = 0, dl = 1, Ma = 2, Qo = 3, fl = 4, Pa = 5, Jo = 6;
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
  var n = vn(e, t);
  if (n.state > nc) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = vn(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function vn(e, t) {
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
        if (v.state === Qo) return cl(a);
        v.state === fl ? (v.state = Jo, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Jo, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (cl(function() {
      n.state === Qo && (n.state = fl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ma, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ma) {
      for (n.state = Qo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
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
    n.state = Jo, n.timer.stop(), delete r[t];
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
      o = r.state > Ma && r.state < Pa, r.state = Jo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
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
    for (var r = vn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
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
    return vn(o, r).value[t];
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
function _g(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function kg(e, t, n) {
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
function Hg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Mg(e, t) {
  var n = Zi(e), r = n === "transform" ? sg : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hg : Eg)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? _g : Cg)(n) : (n.local ? Sg : kg)(n, r, t));
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
function Ng(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Vg(e, i)), n;
  }
  return o._value = t, o;
}
function zg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pg(e, i)), n;
  }
  return o._value = t, o;
}
function Tg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? Ng : zg)(r, t));
}
function Dg(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Lg(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Og(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dg : Lg)(t, e)) : vn(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Ag : Ig)(t, e)) : vn(this.node(), t).duration;
}
function Bg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Rg(e) {
  var t = this._id;
  return arguments.length ? this.each(Bg(t, e)) : vn(this.node(), t).ease;
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
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Kg(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Ln(a, this._parents, this._name, this._id);
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
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(jg(n, e, t));
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
function Qg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ss(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ri(u[f], t, n, f, u, vn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Jg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = vn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && Ri(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Ln(i, a, t, n);
}
var ep = Eo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
  var n, r, o;
  return function() {
    var i = Nr(this, e), a = (this.style.removeProperty(e), Nr(this, e));
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
    var a = Nr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Nr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Nr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
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
        var c = vn(l, t);
        Ri(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
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
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++yp;
}
var Hn = Eo.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Qg,
  selectAll: Jg,
  selectChild: Hn.selectChild,
  selectChildren: Hn.selectChildren,
  filter: Wg,
  merge: Kg,
  selection: tp,
  transition: pp,
  call: Hn.call,
  nodes: Hn.nodes,
  node: Hn.node,
  size: Hn.size,
  empty: Hn.empty,
  each: Hn.each,
  on: Fg,
  attr: Mg,
  attrTween: Tg,
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
  [Symbol.iterator]: Hn[Symbol.iterator]
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
  e instanceof Ln ? (t = e._id, e = e._name) : (t = ic(), (n = bp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ri(l, e, t, u, a, n || xp(l, t));
  return new Ln(r, this._parents, e, t);
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
function Mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(e) {
    return e === 1 ? this : new Mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Xi = new Mn(1, 0, 0);
ac.prototype = Mn.prototype;
function ac(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Xi;
  return e.__zoom;
}
function sa(e) {
  e.stopImmediatePropagation();
}
function Qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function kp() {
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
function Hp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function sc() {
  var e = _p, t = kp, n = Hp, r = Sp, o = Ep, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dg, u = Ii("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function _(H) {
    H.property("__zoom", vl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(H, N, $, M) {
    var z = H.selection ? H.selection() : H;
    z.property("__zoom", vl), H !== z ? k(H, N, $, M) : z.interrupt().each(function() {
      S(this, arguments).event(M).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, _.scaleBy = function(H, N, $, M) {
    _.scaleTo(H, function() {
      var z = this.__zoom.k, O = typeof N == "function" ? N.apply(this, arguments) : N;
      return z * O;
    }, $, M);
  }, _.scaleTo = function(H, N, $, M) {
    _.transform(H, function() {
      var z = t.apply(this, arguments), O = this.__zoom, Z = $ == null ? y(z) : typeof $ == "function" ? $.apply(this, arguments) : $, K = O.invert(Z), j = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(C(g(O, j), Z, K), z, a);
    }, $, M);
  }, _.translateBy = function(H, N, $, M) {
    _.transform(H, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, M);
  }, _.translateTo = function(H, N, $, M, z) {
    _.transform(H, function() {
      var O = t.apply(this, arguments), Z = this.__zoom, K = M == null ? y(O) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(Xi.translate(K[0], K[1]).scale(Z.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), O, a);
    }, M, z);
  };
  function g(H, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === H.k ? H : new Mn(N, H.x, H.y);
  }
  function C(H, N, $) {
    var M = N[0] - $[0] * H.k, z = N[1] - $[1] * H.k;
    return M === H.x && z === H.y ? H : new Mn(H.k, M, z);
  }
  function y(H) {
    return [(+H[0][0] + +H[1][0]) / 2, (+H[0][1] + +H[1][1]) / 2];
  }
  function k(H, N, $, M) {
    H.on("start.zoom", function() {
      S(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var z = this, O = arguments, Z = S(z, O).event(M), K = t.apply(z, O), j = $ == null ? y(K) : typeof $ == "function" ? $.apply(z, O) : $, ue = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Q = z.__zoom, W = typeof N == "function" ? N.apply(z, O) : N, ae = l(Q.invert(j).concat(ue / Q.k), W.invert(j).concat(ue / W.k));
      return function(ge) {
        if (ge === 1) ge = W;
        else {
          var me = ae(ge), ce = ue / me[2];
          ge = new Mn(ce, j[0] - me[0] * ce, j[1] - me[1] * ce);
        }
        Z.zoom(null, ge);
      };
    });
  }
  function S(H, N, $) {
    return !$ && H.__zooming || new E(H, N);
  }
  function E(H, N) {
    this.that = H, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(H, N), this.taps = 0;
  }
  E.prototype = {
    event: function(H) {
      return H && (this.sourceEvent = H), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(H, N) {
      return this.mouse && H !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && H !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && H !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(H) {
      var N = Gt(this.that).datum();
      u.call(
        H,
        this.that,
        new Cp(H, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function V(H, ...N) {
    if (!e.apply(this, arguments)) return;
    var $ = S(this, N).event(H), M = this.__zoom, z = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), O = on(H);
    if ($.wheel)
      ($.mouse[0][0] !== O[0] || $.mouse[0][1] !== O[1]) && ($.mouse[1] = M.invert($.mouse[0] = O)), clearTimeout($.wheel);
    else {
      if (M.k === z) return;
      $.mouse = [O, M.invert(O)], ei(this), $.start();
    }
    Qr(H), $.wheel = setTimeout(Z, w), $.zoom("mouse", n(C(g(M, z), $.mouse[0], $.mouse[1]), $.extent, a));
    function Z() {
      $.wheel = null, $.end();
    }
  }
  function P(H, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var $ = H.currentTarget, M = S(this, N, !0).event(H), z = Gt(H.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", ue, !0), O = on(H, $), Z = H.clientX, K = H.clientY;
    Yu(H.view), sa(H), M.mouse = [O, this.__zoom.invert(O)], ei(this), M.start();
    function j(Q) {
      if (Qr(Q), !M.moved) {
        var W = Q.clientX - Z, ae = Q.clientY - K;
        M.moved = W * W + ae * ae > b;
      }
      M.event(Q).zoom("mouse", n(C(M.that.__zoom, M.mouse[0] = on(Q, $), M.mouse[1]), M.extent, a));
    }
    function ue(Q) {
      z.on("mousemove.zoom mouseup.zoom", null), Wu(Q.view, M.moved), Qr(Q), M.event(Q).end();
    }
  }
  function T(H, ...N) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, M = on(H.changedTouches ? H.changedTouches[0] : H, this), z = $.invert(M), O = $.k * (H.shiftKey ? 0.5 : 2), Z = n(C(g($, O), M, z), t.apply(this, N), a);
      Qr(H), s > 0 ? Gt(this).transition().duration(s).call(k, Z, M, H) : Gt(this).call(_.transform, Z, M, H);
    }
  }
  function A(H, ...N) {
    if (e.apply(this, arguments)) {
      var $ = H.touches, M = $.length, z = S(this, N, H.changedTouches.length === M).event(H), O, Z, K, j;
      for (sa(H), Z = 0; Z < M; ++Z)
        K = $[Z], j = on(K, this), j = [j, this.__zoom.invert(j), K.identifier], z.touch0 ? !z.touch1 && z.touch0[2] !== j[2] && (z.touch1 = j, z.taps = 0) : (z.touch0 = j, O = !0, z.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (z.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), ei(this), z.start());
    }
  }
  function L(H, ...N) {
    if (this.__zooming) {
      var $ = S(this, N).event(H), M = H.changedTouches, z = M.length, O, Z, K, j;
      for (Qr(H), O = 0; O < z; ++O)
        Z = M[O], K = on(Z, this), $.touch0 && $.touch0[2] === Z.identifier ? $.touch0[0] = K : $.touch1 && $.touch1[2] === Z.identifier && ($.touch1[0] = K);
      if (Z = $.that.__zoom, $.touch1) {
        var ue = $.touch0[0], Q = $.touch0[1], W = $.touch1[0], ae = $.touch1[1], ge = (ge = W[0] - ue[0]) * ge + (ge = W[1] - ue[1]) * ge, me = (me = ae[0] - Q[0]) * me + (me = ae[1] - Q[1]) * me;
        Z = g(Z, Math.sqrt(ge / me)), K = [(ue[0] + W[0]) / 2, (ue[1] + W[1]) / 2], j = [(Q[0] + ae[0]) / 2, (Q[1] + ae[1]) / 2];
      } else if ($.touch0) K = $.touch0[0], j = $.touch0[1];
      else return;
      $.zoom("touch", n(C(Z, K, j), $.extent, a));
    }
  }
  function B(H, ...N) {
    if (this.__zooming) {
      var $ = S(this, N).event(H), M = H.changedTouches, z = M.length, O, Z;
      for (sa(H), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), O = 0; O < z; ++O)
        Z = M[O], $.touch0 && $.touch0[2] === Z.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Z.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Z = on(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var K = Gt(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(H) {
    return arguments.length ? (r = typeof H == "function" ? H : Ko(+H), _) : r;
  }, _.filter = function(H) {
    return arguments.length ? (e = typeof H == "function" ? H : Ko(!!H), _) : e;
  }, _.touchable = function(H) {
    return arguments.length ? (o = typeof H == "function" ? H : Ko(!!H), _) : o;
  }, _.extent = function(H) {
    return arguments.length ? (t = typeof H == "function" ? H : Ko([[+H[0][0], +H[0][1]], [+H[1][0], +H[1][1]]]), _) : t;
  }, _.scaleExtent = function(H) {
    return arguments.length ? (i[0] = +H[0], i[1] = +H[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(H) {
    return arguments.length ? (a[0][0] = +H[0][0], a[1][0] = +H[1][0], a[0][1] = +H[0][1], a[1][1] = +H[1][1], _) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, _.constrain = function(H) {
    return arguments.length ? (n = H, _) : n;
  }, _.duration = function(H) {
    return arguments.length ? (s = +H, _) : s;
  }, _.interpolate = function(H) {
    return arguments.length ? (l = H, _) : l;
  }, _.on = function() {
    var H = u.on.apply(u, arguments);
    return H === u ? _ : H;
  }, _.clickDistance = function(H) {
    return arguments.length ? (b = (H = +H) * H, _) : Math.sqrt(b);
  }, _.tapDistance = function(H) {
    return arguments.length ? (x = +H, _) : x;
  }, _;
}
const Tr = {
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
var kr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(kr || (kr = {}));
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
function Mp(e, t) {
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
const Vp = (e) => "id" in e && "source" in e && "target" in e, Np = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Mo = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, zp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
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
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = bo(s, Lr(u)), x = (v ?? 0) * (w ?? 0), _ = i && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Na = (e, t) => {
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
function Tp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Tr.error005());
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
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Tr.error015())), {
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
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Na(a, l);
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
const Dr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Dr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Dr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function cc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: a } = n.internals.positionAbsolute;
  return dr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const yl = (e, t, n) => e < t ? Dr(Math.abs(e - t), 1, t) / t : e > n ? -Dr(Math.abs(e - n), 1, t) / t : 0, dc = (e, t, n = 15, r = 40) => {
  const o = yl(e.x, r, t.width - r) * n, i = yl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), za = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Wi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Lr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Mo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, wi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Mo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, fc = (e, t) => Wi(Yi(za(e), za(t))), bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
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
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Dr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
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
function Lp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function la(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = zn(e), s = Vo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? hs(s, t) : s;
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
const gc = (e) => "clientX" in e, zn = (e, t) => {
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
function Ta({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [g, C, y, k] = mc({
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
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const B = Math.min(i - 1, i - L);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * B : _[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", B = a[d] === s[L], H = l[L] > u[L], N = l[L] < u[L];
      (a[d] === 1 && (!B && H || B && N) || a[d] !== 1 && (!B && N || B && H)) && (v = d === "x" ? S : E);
    }
    const V = { x: l.x + x.x, y: l.y + x.y }, P = { x: u.x + _.x, y: u.y + _.y }, T = Math.max(Math.abs(V.x - v[0].x), Math.abs(P.x - v[0].x)), A = Math.max(Math.abs(V.y - v[0].y), Math.abs(P.y - v[0].y));
    T >= A ? (w = (V.x + P.x) / 2, b = v[0].y) : (w = v[0].x, b = (V.y + P.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], w, b, y, k];
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
  return [c.reduce((b, x, _) => {
    let g = "";
    return _ > 0 && _ < c.length - 1 ? g = jp(c[_ - 1], x, c[_ + 1], a) : g = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += g, b;
  }, ""), d, f, v, w];
}
function _l(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Fp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!_l(n) || !_l(r))
    return null;
  const o = n.internals.handleBounds || kl(n.handles), i = r.internals.handleBounds || kl(r.handles), a = Sl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Sl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Tr.error008(a ? "target" : "source", {
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
function kl(e) {
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
}, Qp = {
  ...ms,
  checkEquality: !0
};
function ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Jp(e, t, n) {
  const r = ys(ms, n);
  for (const o of e.values())
    if (o.parentId)
      ws(o, e, t, r);
    else {
      const i = Mo(o, r.nodeOrigin), a = Or(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, er(o));
      o.internals.positionAbsolute = s;
    }
}
function yc(e, t, n, r) {
  var o, i;
  const a = ys(Qp, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Mo(u, a.nodeOrigin), f = Or(u.extent) ? u.extent : a.nodeExtent, v = dr(d, f, er(u));
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
  const { x: i, y: a } = t.internals.positionAbsolute, s = er(e), l = Mo(e, n), u = Or(e.extent) ? dr(l, e.extent, s) : l;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Lr(l), c = fc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = er(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), g = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (w > 0 || b > 0 || g || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + g,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some((k) => k.id === y.id) || i.push({
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
        height: _ + (b ? v[1] * b - C : 0)
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
      const x = f.nodeElement.getBoundingClientRect(), _ = Or(v.extent) ? v.extent : i;
      let { positionAbsolute: g } = v.internals;
      v.parentId && v.extent === "parent" ? g = cc(g, w, t.get(v.parentId)) : _ && (g = dr(g, _, w));
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
        rect: Lr(C, o)
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
function Hl(e, t, n) {
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
  function w({ noDragClassName: x, handleSelector: _, domNode: g, isSelectable: C, nodeId: y, nodeClickDistance: k = 0 }) {
    f = Gt(g);
    function S({ x: T, y: A }, L) {
      const { nodeLookup: B, nodeExtent: H, snapGrid: N, snapToGrid: $, nodeOrigin: M, onNodeDrag: z, onSelectionDrag: O, onError: Z, updateNodePositions: K } = t();
      i = { x: T, y: A };
      let j = !1, ue = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && H) {
        const Q = Po(s);
        ue = za(Q);
      }
      for (const [Q, W] of s) {
        if (!B.has(Q))
          continue;
        let ae = { x: T - W.distance.x, y: A - W.distance.y };
        $ && (ae = hs(ae, N));
        let ge = [
          [H[0][0], H[0][1]],
          [H[1][0], H[1][1]]
        ];
        if (s.size > 1 && H && !W.extent) {
          const { positionAbsolute: Ve } = W.internals, oe = Ve.x - ue.x + H[0][0], ee = Ve.x + W.measured.width - ue.x2 + H[1][0], Ne = Ve.y - ue.y + H[0][1], He = Ve.y + W.measured.height - ue.y2 + H[1][1];
          ge = [
            [oe, Ne],
            [ee, He]
          ];
        }
        const { position: me, positionAbsolute: ce } = Tp({
          nodeId: Q,
          nextPosition: ae,
          nodeLookup: B,
          nodeExtent: ge,
          nodeOrigin: M,
          onError: Z
        });
        j = j || W.position.x !== me.x || W.position.y !== me.y, W.position = me, W.internals.positionAbsolute = ce;
      }
      if (j && (K(s, !0), L && (r || z || !y && O))) {
        const [Q, W] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(L, s, Q, W), z == null || z(L, Q, W), y || O == null || O(L, W);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: T, panBy: A, autoPanSpeed: L, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [H, N] = dc(u, c, L);
      (H !== 0 || N !== 0) && (i.x = (i.x ?? 0) - H / T[2], i.y = (i.y ?? 0) - N / T[2], await A({ x: H, y: N }) && S(i, null)), a = requestAnimationFrame(E);
    }
    function V(T) {
      var A;
      const { nodeLookup: L, multiSelectionActive: B, nodesDraggable: H, transform: N, snapGrid: $, snapToGrid: M, selectNodesOnDrag: z, onNodeDragStart: O, onSelectionDragStart: Z, unselectNodesAndEdges: K } = t();
      d = !0, (!z || !C) && !B && y && ((A = L.get(y)) != null && A.selected || K()), C && z && y && (e == null || e(y));
      const j = la(T.sourceEvent, { transform: N, snapGrid: $, snapToGrid: M, containerBounds: c });
      if (i = j, s = a0(L, H, j, y), s.size > 0 && (n || O || !y && Z)) {
        const [ue, Q] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(T.sourceEvent, s, ue, Q), O == null || O(T.sourceEvent, ue, Q), y || Z == null || Z(T.sourceEvent, Q);
      }
    }
    const P = Ih().clickDistance(k).on("start", (T) => {
      const { domNode: A, nodeDragThreshold: L, transform: B, snapGrid: H, snapToGrid: N } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, v = !1, L === 0 && V(T), i = la(T.sourceEvent, { transform: B, snapGrid: H, snapToGrid: N, containerBounds: c }), u = zn(T.sourceEvent, c);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: A, transform: L, snapGrid: B, snapToGrid: H, nodeDragThreshold: N, nodeLookup: $ } = t(), M = la(T.sourceEvent, { transform: L, snapGrid: B, snapToGrid: H, containerBounds: c });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !$.has(y)) && (v = !0), !v) {
        if (!l && A && d && (l = !0, E()), !d) {
          const z = M.xSnapped - (i.x ?? 0), O = M.ySnapped - (i.y ?? 0);
          Math.sqrt(z * z + O * O) > N && V(T);
        }
        (i.x !== M.xSnapped || i.y !== M.ySnapped) && s && d && (u = zn(T.sourceEvent, c), S(M, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: A, updateNodePositions: L, onNodeDragStop: B, onSelectionDragStop: H } = t();
        if (L(s, !1), o || B || !y && H) {
          const [N, $] = ua({
            nodeId: y,
            dragItems: s,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(T.sourceEvent, s, N, $), B == null || B(T.sourceEvent, N, $), y || H == null || H(T.sourceEvent, $);
        }
      }
    }).filter((T) => {
      const A = T.target;
      return !T.button && (!x || !Hl(A, `.${x}`, g)) && (!_ || Hl(A, _, g));
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
    bo(o, Lr(i)) > 0 && r.push(i);
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
const _c = () => !0;
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: _ = _c, onReconnectEnd: g, updateConnection: C, getTransform: y, getFromHandle: k, autoPanSpeed: S }) {
  const E = Op(e.target);
  let V = 0, P;
  const { x: T, y: A } = zn(e), L = E == null ? void 0 : E.elementFromPoint(T, A), B = Cc(i, L), H = s == null ? void 0 : s.getBoundingClientRect();
  if (!H || !B)
    return;
  const N = $c(o, B, r, l, t);
  if (!N)
    return;
  let $ = zn(e, H), M = !1, z = null, O = !1, Z = null;
  function K() {
    if (!c || !H)
      return;
    const [me, ce] = dc($, H, S);
    f({ x: me, y: ce }), V = requestAnimationFrame(K);
  }
  const j = {
    ...N,
    nodeId: o,
    type: B,
    position: N.position
  }, ue = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: xo(ue, j, _e.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: ue,
    to: $,
    toHandle: null,
    toPosition: hl[j.position],
    toNode: null
  };
  C(Q);
  let W = Q;
  w == null || w(e, { nodeId: o, handleId: r, handleType: B });
  function ae(me) {
    if (!k() || !j) {
      ge(me);
      return;
    }
    const ce = y();
    $ = zn(me, H), P = c0(Vo($, ce, !1, [1, 1]), n, l, j), M || (K(), M = !0);
    const Ve = kc(me, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: _,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = Ve.handleDomNode, z = Ve.connection, O = d0(!!P, Ve.isValid);
    const oe = {
      // from stays the same
      ...W,
      isValid: O,
      to: P && O ? vc({ x: P.x, y: P.y }, ce) : $,
      toHandle: Ve.toHandle,
      toPosition: O && Ve.toHandle ? Ve.toHandle.position : hl[j.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    O && P && W.toHandle && oe.toHandle && W.toHandle.type === oe.toHandle.type && W.toHandle.nodeId === oe.toHandle.nodeId && W.toHandle.id === oe.toHandle.id && W.to.x === oe.to.x && W.to.y === oe.to.y || (C(oe), W = oe);
  }
  function ge(me) {
    (P || Z) && z && O && (b == null || b(z));
    const { inProgress: ce, ...Ve } = W, oe = {
      ...Ve,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(me, oe), i && (g == null || g(me, oe)), v(), cancelAnimationFrame(V), M = !1, O = !1, z = null, Z = null, E.removeEventListener("mousemove", ae), E.removeEventListener("mouseup", ge), E.removeEventListener("touchmove", ae), E.removeEventListener("touchend", ge);
  }
  E.addEventListener("mousemove", ae), E.addEventListener("mouseup", ge), E.addEventListener("touchmove", ae), E.addEventListener("touchend", ge);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = _c, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = zn(e), b = a.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const g = Cc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), S = x.classList.contains("connectableend");
    if (!C || !g)
      return _;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    _.connection = E;
    const V = k && S && (n === cr.Strict ? d && g === "source" || !d && g === "target" : C !== r || y !== o);
    _.isValid = V && u(E), _.toHandle = $c(C, g, y, c, n, !1);
  }
  return _;
}
const v0 = {
  onPointerDown: f0,
  isValid: kc
};
function h0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Gt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = y[2] * Math.pow(2, k);
      t.scaleTo(S);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], S = [k[0] - b[0], k[1] - b[1]];
      b = k;
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
    }, g = sc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? w : null);
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
      const x = on(c), _ = Ec(c), g = d * Math.pow(2, _);
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
    zoom: Dr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Ec);
  function x(L, B) {
    return v ? new Promise((H) => {
      f == null || f.transform(da(v, B == null ? void 0 : B.duration, () => H(!0)), L);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: L, noPanClassName: B, onPaneContextMenu: H, userSelectionActive: N, panOnScroll: $, panOnDrag: M, panOnScrollMode: z, panOnScrollSpeed: O, preventScrolling: Z, zoomOnPinch: K, zoomOnScroll: j, zoomOnDoubleClick: ue, zoomActivationKeyPressed: Q, lib: W, onTransformChange: ae }) {
    N && !c.isZoomingOrPanning && g();
    const ge = $ && !Q && !N ? p0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: O,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: L,
      preventScrolling: Z,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", ge, { passive: !1 }), !N) {
      const ce = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ce);
      const Ve = w0({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!H,
        onPanZoom: a,
        onTransformChange: ae
      });
      f.on("zoom", Ve);
      const oe = b0({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: $,
        onPaneContextMenu: H,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const me = x0({
      zoomActivationKeyPressed: Q,
      panOnDrag: M,
      zoomOnScroll: j,
      panOnScroll: $,
      zoomOnDoubleClick: ue,
      zoomOnPinch: K,
      userSelectionActive: N,
      noPanClassName: B,
      noWheelClassName: L,
      lib: W
    });
    f.filter(me), ue ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function g() {
    f.on("zoom", null);
  }
  async function C(L, B, H) {
    const N = ca(L), $ = f == null ? void 0 : f.constrain()(N, B, H);
    return $ && await x($), new Promise((M) => M($));
  }
  async function y(L, B) {
    const H = ca(L);
    return await x(H, B), new Promise((N) => N(H));
  }
  function k(L) {
    if (v) {
      const B = ca(L), H = v.property("__zoom");
      (H.k !== L.zoom || H.x !== L.x || H.y !== L.y) && (f == null || f.transform(v, B, null, { sync: !0 }));
    }
  }
  function S() {
    const L = v ? ac(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function E(L, B) {
    return v ? new Promise((H) => {
      f == null || f.scaleTo(da(v, B == null ? void 0 : B.duration, () => H(!0)), L);
    }) : Promise.resolve(!1);
  }
  function V(L, B) {
    return v ? new Promise((H) => {
      f == null || f.scaleBy(da(v, B == null ? void 0 : B.duration, () => H(!0)), L);
    }) : Promise.resolve(!1);
  }
  function P(L) {
    f == null || f.scaleExtent(L);
  }
  function T(L) {
    f == null || f.translateExtent(L);
  }
  function A(L) {
    const B = !Pn(L) || L < 0 ? 0 : L;
    f == null || f.clickDistance(B);
  }
  return {
    update: _,
    destroy: g,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: S,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: P,
    setTranslateExtent: T,
    syncViewport: k,
    setClickDistance: A
  };
}
var Ml;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ml || (Ml = {}));
var C0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(ue, "$connectable", n), i = () => U(me, "$connectionRadius", n), a = () => U(ae, "$domNode", n), s = () => U(ge, "$nodeLookup", n), l = () => U(W, "$connectionMode", n), u = () => U(oe, "$lib", n), c = () => U(We, "$autoPanOnConnect", n), d = () => U(ze, "$flowId", n), f = () => U(Ve, "$isValidConnectionStore", n), v = () => U(Ne, "$onedgecreate", n), w = () => U(le, "$onConnectAction", n), b = () => U(Ce, "$onConnectStartAction", n), x = () => U(Ke, "$onConnectEndAction", n), _ = () => U(ce, "$viewport", n), g = () => U(st, "$connection", n), C = () => U(Ue, "$edges", n), y = () => U(se, "$connectionLookup", n), k = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne(), P = /* @__PURE__ */ ne(), T = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), L = /* @__PURE__ */ ne();
  let B = m(t, "id", 12, void 0), H = m(t, "type", 12, "source"), N = m(t, "position", 28, () => _e.Top), $ = m(t, "style", 12, void 0), M = m(t, "isValidConnection", 12, void 0), z = m(t, "onconnect", 12, void 0), O = m(t, "ondisconnect", 12, void 0), Z = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const j = sr("svelteflow__node_id"), ue = sr("svelteflow__node_connectable"), Q = Ge(), {
    connectionMode: W,
    domNode: ae,
    nodeLookup: ge,
    connectionRadius: me,
    viewport: ce,
    isValidConnection: Ve,
    lib: oe,
    addEdge: ee,
    onedgecreate: Ne,
    panBy: He,
    cancelConnection: Re,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: se,
    onconnect: le,
    onconnectstart: Ce,
    onconnectend: Ke,
    flowId: ze,
    connection: st
  } = Q;
  function it(Ee) {
    const tt = gc(Ee);
    (tt && Ee.button === 0 || !tt) && v0.onPointerDown(Ee, {
      handleId: h(E),
      nodeId: j,
      isTarget: h(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: M() ?? f(),
      updateConnection: te,
      cancelConnection: Re,
      panBy: He,
      onConnect: (Ie) => {
        var De;
        const nt = v() ? v()(Ie) : Ie;
        nt && (ee(nt), (De = w()) == null || De(Ie));
      },
      onConnectStart: (Ie, De) => {
        var nt;
        (nt = b()) == null || nt(Ie, {
          nodeId: De.nodeId,
          handleId: De.handleId,
          handleType: De.handleType
        });
      },
      onConnectEnd: (Ie, De) => {
        var nt;
        (nt = x()) == null || nt(Ie, De);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let J = /* @__PURE__ */ ne(null), Ae = /* @__PURE__ */ ne();
  ve(() => G(H()), () => {
    F(k, H() === "target");
  }), ve(
    () => (G(Z()), o()),
    () => {
      F(S, Z() !== void 0 ? Z() : o());
    }
  ), ve(() => G(B()), () => {
    F(E, B() || null);
  }), ve(
    () => (G(z()), G(O()), C(), y(), G(H()), G(B())),
    () => {
      (z() || O()) && (C(), F(Ae, y().get(`${j}-${H()}${B() ? `-${B()}` : ""}`)));
    }
  ), ve(
    () => (h(J), h(Ae), G(O()), G(z())),
    () => {
      if (h(J) && !Mp(h(Ae), h(J))) {
        const Ee = h(Ae) ?? /* @__PURE__ */ new Map();
        gl(h(J), Ee, O()), gl(Ee, h(J), z());
      }
      F(J, h(Ae) ?? /* @__PURE__ */ new Map());
    }
  ), ve(() => g(), () => {
    F(V, !!g().fromHandle);
  }), ve(
    () => (g(), G(H()), h(E)),
    () => {
      var Ee, tt, Ie;
      F(P, ((Ee = g().fromHandle) == null ? void 0 : Ee.nodeId) === j && ((tt = g().fromHandle) == null ? void 0 : tt.type) === H() && ((Ie = g().fromHandle) == null ? void 0 : Ie.id) === h(E));
    }
  ), ve(
    () => (g(), G(H()), h(E)),
    () => {
      var Ee, tt, Ie;
      F(T, ((Ee = g().toHandle) == null ? void 0 : Ee.nodeId) === j && ((tt = g().toHandle) == null ? void 0 : tt.type) === H() && ((Ie = g().toHandle) == null ? void 0 : Ie.id) === h(E));
    }
  ), ve(
    () => (l(), g(), G(H()), h(E)),
    () => {
      var Ee, tt, Ie;
      F(A, l() === cr.Strict ? ((Ee = g().fromHandle) == null ? void 0 : Ee.type) !== H() : j !== ((tt = g().fromHandle) == null ? void 0 : tt.nodeId) || h(E) !== ((Ie = g().fromHandle) == null ? void 0 : Ie.id));
    }
  ), ve(() => (h(T), g()), () => {
    F(L, h(T) && g().isValid);
  }), vt(), Te();
  var he = C0();
  ye(he, "data-nodeid", j);
  let en;
  var tn = Y(he);
  pt(tn, t, "default", {}), X(he), ke(
    (Ee, tt) => {
      ye(he, "data-handleid", h(E)), ye(he, "data-handlepos", N()), ye(he, "data-id", `${d() ?? ""}-${j ?? ""}-${B() || ""}-${H() ?? ""}`), en = mt(he, 1, Ee, null, en, tt), dt(he, $());
    },
    [
      () => fn(Et([
        "svelte-flow__handle",
        `svelte-flow__handle-${N()}`,
        "nodrag",
        "nopan",
        N(),
        K()
      ])),
      () => ({
        valid: h(L),
        connectingto: h(T),
        connectingfrom: h(P),
        source: !h(k),
        target: h(k),
        connectablestart: h(S),
        connectableend: h(S),
        connectable: h(S),
        connectionindicator: h(S) && (!h(V) || h(A))
      })
    ],
    pe
  ), Xe("mousedown", he, it), Xe("touchstart", he, it), D(e, he);
  var gn = fe({
    get id() {
      return B();
    },
    set id(Ee) {
      B(Ee), p();
    },
    get type() {
      return H();
    },
    set type(Ee) {
      H(Ee), p();
    },
    get position() {
      return N();
    },
    set position(Ee) {
      N(Ee), p();
    },
    get style() {
      return $();
    },
    set style(Ee) {
      $(Ee), p();
    },
    get isValidConnection() {
      return M();
    },
    set isValidConnection(Ee) {
      M(Ee), p();
    },
    get onconnect() {
      return z();
    },
    set onconnect(Ee) {
      z(Ee), p();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(Ee) {
      O(Ee), p();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Ee) {
      Z(Ee), p();
    },
    get class() {
      return K();
    },
    set class(Ee) {
      K(Ee), p();
    }
  });
  return r(), gn;
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
var _0 = /* @__PURE__ */ re("<!> <!>", 1);
function $i(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  Te();
  var a = _0(), s = be(a);
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
  }), ke(() => {
    var f;
    return Rt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, a), fe({
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
var k0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Te(), Me();
  var i = k0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return h(l);
    }
  }), ke(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), fe({
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
ie(Hc, { data: {}, sourcePosition: {} }, [], [], !0);
var S0 = /* @__PURE__ */ re(" <!>", 1);
function Mc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Te(), Me();
  var i = S0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  return Un(s, {
    type: "target",
    get position() {
      return h(l);
    }
  }), ke(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), fe({
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
ie(Mc, { data: {}, targetPosition: {} }, [], [], !0);
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
var E0 = /* @__PURE__ */ re("<div><!></div>");
function Vc(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(i, "$domNode", n), { domNode: i } = Ge();
  Te();
  var a = E0(), s = Y(a);
  pt(s, t, "default", {}), X(a), gt(a, (l, u) => Ci == null ? void 0 : Ci(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), fe(), r();
}
ie(Vc, {}, ["default"], [], !0);
function Nc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Ge();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Tr.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var H0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function zc(e, t) {
  de(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = Nc(), a = sr("svelteflow__edge_id");
  return Te(), Vc(e, {
    children: (s, l) => {
      var u = H0();
      let c;
      var d = Y(u);
      pt(d, t, "default", {}), X(u), ke(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Xe("keyup", u, () => {
      }), Xe("click", u, () => {
        a && i(a);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
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
ie(zc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var M0 = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), P0 = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function No(e, t) {
  de(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Te();
  var w = P0(), b = be(w), x = I(b);
  {
    var _ = (y) => {
      var k = M0();
      ye(k, "stroke-opacity", 0), ye(k, "stroke-width", v), ke(() => ye(k, "d", r())), D(y, k);
    };
    xe(x, (y) => {
      v && y(_);
    });
  }
  var g = I(x);
  {
    var C = (y) => {
      zc(y, {
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
          Me();
          var E = Be();
          ke(() => Rt(E, o())), D(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    xe(g, (y) => {
      o() && y(C);
    });
  }
  return ke(
    (y) => {
      ye(b, "id", n()), ye(b, "d", r()), mt(b, 0, y), ye(b, "marker-start", l()), ye(b, "marker-end", u()), dt(b, c());
    },
    [
      () => fn(Et(["svelte-flow__edge-path", f()]))
    ],
    pe
  ), D(e, w), fe({
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
function _i(e, t) {
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return ve(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(pc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Te(), No(e, {
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
  }), fe({
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
      return _();
    },
    set targetPosition(g) {
      _(g), p();
    }
  });
}
ie(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return ve(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Te(), No(e, {
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
  }), fe({
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
      return _();
    },
    set targetPosition(g) {
      _(g), p();
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
    "targetX",
    "targetY"
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return ve(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(w()), G(b())),
    () => {
      ((x) => (F(r, x[0]), F(o, x[1]), F(i, x[2])))(Ta({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), vt(), Te(), No(e, {
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
  }), fe({
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
    targetX: {},
    targetY: {}
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return ve(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), vt(), Te(), No(e, {
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
  }), fe({
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
      return _();
    },
    set targetPosition(g) {
      _(g), p();
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
function N0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const z0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, T0 = (e, t, n, r = [0, 0], o = mi) => {
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
}, D0 = (e, t, n, r) => {
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
  input: Hc,
  output: Mc,
  default: $i,
  group: Pc
}, Ac = {
  straight: Dc,
  smoothstep: Tc,
  default: _i,
  step: Lc
}, L0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
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
    nodes: T0(e, s, l, d, f),
    nodeLookup: qt(s),
    parentLookup: qt(l),
    edgeLookup: qt(c),
    visibleNodes: qt([]),
    edges: D0(t, u, c),
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
    connectionLineType: we(kr.Bezier),
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
    onerror: we(Dp),
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
  const s = L0({
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
    const M = q(s.edges);
    s.edges.set(Wp($, M));
  }
  const d = ($, M = !1) => {
    var z;
    const O = q(s.nodeLookup);
    for (const [Z, K] of $) {
      const j = (z = O.get(Z)) == null ? void 0 : z.internals.userNode;
      j && (j.position = K.position, j.dragging = M);
    }
    s.nodes.update((Z) => Z);
  };
  function f($) {
    var M, z, O;
    const Z = q(s.nodeLookup), K = q(s.parentLookup), { changes: j, updatedInternals: ue } = r0($, Z, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ue) {
      if (Jp(Z, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), W = w({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of j) {
        const W = (M = Z.get(Q.id)) == null ? void 0 : M.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const ae = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((z = Q.dimensions) == null ? void 0 : z.width) ?? W.width, W.height = ((O = Q.dimensions) == null ? void 0 : O.height) ?? W.height), W.measured = ae;
              break;
            }
            case "position":
              W.position = Q.position ?? W.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const M = q(s.panZoom), z = q(s.domNode);
    if (!M || !z)
      return Promise.resolve(!1);
    const { width: O, height: Z } = ps(z), K = pl(q(s.nodeLookup), $);
    return ml({
      nodes: K,
      width: O,
      height: Z,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: M
    }, $);
  }
  function w($) {
    const M = q(s.panZoom);
    if (!M)
      return !1;
    const z = pl(q(s.nodeLookup), $);
    return ml({
      nodes: z,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: M
    }, $), z.size > 0;
  }
  function b($, M) {
    const z = q(s.panZoom);
    return z ? z.scaleBy($, M) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function _($) {
    return b(1 / 1.2, $);
  }
  function g($) {
    const M = q(s.panZoom);
    M && (M.setScaleExtent([$, q(s.maxZoom)]), s.minZoom.set($));
  }
  function C($) {
    const M = q(s.panZoom);
    M && (M.setScaleExtent([q(s.minZoom), $]), s.maxZoom.set($));
  }
  function y($) {
    const M = q(s.panZoom);
    M && (M.setTranslateExtent($), s.translateExtent.set($));
  }
  function k($) {
    let M = !1;
    return $.forEach((z) => {
      z.selected && (z.selected = !1, M = !0);
    }), M;
  }
  function S($) {
    var M;
    (M = q(s.panZoom)) == null || M.setClickDistance($);
  }
  function E($) {
    k(($ == null ? void 0 : $.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k(($ == null ? void 0 : $.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var M;
    if ($) {
      const z = q(s.nodes), O = q(s.edges), Z = z.filter((Q) => Q.selected), K = O.filter((Q) => Q.selected), { nodes: j, edges: ue } = await uc({
        nodesToRemove: Z,
        edgesToRemove: K,
        nodes: z,
        edges: O,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || ue.length) && (s.nodes.update((Q) => Q.filter((W) => !j.some((ae) => ae.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ue.some((ae) => ae.id === W.id))), (M = q(s.ondelete)) == null || M({
        nodes: j,
        edges: ue
      }));
    }
  });
  function V($) {
    const M = q(s.multiselectionKeyPressed);
    s.nodes.update((z) => z.map((O) => {
      const Z = $.includes(O.id), K = M && O.selected || Z;
      return O.selected = K, O;
    })), M || s.edges.update((z) => z.map((O) => (O.selected = !1, O)));
  }
  function P($) {
    const M = q(s.multiselectionKeyPressed);
    s.edges.update((z) => z.map((O) => {
      const Z = $.includes(O.id), K = M && O.selected || Z;
      return O.selected = K, O;
    })), M || s.nodes.update((z) => z.map((O) => (O.selected = !1, O)));
  }
  function T($) {
    var M;
    const z = (M = q(s.nodes)) == null ? void 0 : M.find((O) => O.id === $);
    if (!z) {
      console.warn("012", Tr.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), z.selected ? z.selected && q(s.multiselectionKeyPressed) && E({ nodes: [z], edges: [] }) : V([$]);
  }
  function A($) {
    const M = q(s.viewport);
    return o0({
      delta: $,
      panZoom: q(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const L = we(Va), B = ($) => {
    L.set({ ...$ });
  };
  function H() {
    L.set(Va);
  }
  function N() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), H();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: O0(s),
    visibleNodes: A0(s),
    connection: Kn([L, s.viewport], ([$, M]) => $.inProgress ? {
      ...$,
      to: Vo($.to, [M.x, M.y, M.zoom])
    } : { ...$ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([$, M, z]) => Gp($, { defaultColor: M, id: z })),
    initialized: (() => {
      let $ = !1;
      const M = q(s.nodes).length, z = q(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([O, Z, K]) => $ || (M === 0 ? $ = K : z === 0 ? $ = K && O : $ = K && O && Z, $));
    })(),
    // actions
    syncNodeStores: ($) => V0(s.nodes, $),
    syncEdgeStores: ($) => N0(s.edges, $),
    syncViewport: ($) => z0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: _,
    fitView: ($) => v($),
    setMinZoom: g,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: S,
    unselectNodesAndEdges: E,
    addSelectedNodes: V,
    addSelectedEdges: P,
    handleNodeSelection: T,
    panBy: A,
    updateConnection: B,
    cancelConnection: H,
    reset: N
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
var Z0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const B0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  de(t, !1), Je(e, B0);
  const [n, r] = ot(), o = () => U(z, "$panActivationKeyPressed", n), i = () => U(B, "$minZoom", n), a = () => U(H, "$maxZoom", n), s = () => U(O, "$zoomActivationKeyPressed", n), l = () => U(L, "$selectionRect", n), u = () => U($, "$translateExtent", n), c = () => U(M, "$lib", n), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), _ = m(t, "onMoveEnd", 12, void 0), g = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), S = m(t, "zoomOnPinch", 12), E = m(t, "panOnDrag", 12), V = m(t, "panOnScroll", 12), P = m(t, "paneClickDistance", 12);
  const {
    viewport: T,
    panZoom: A,
    selectionRect: L,
    minZoom: B,
    maxZoom: H,
    dragging: N,
    translateExtent: $,
    lib: M,
    panActivationKeyPressed: z,
    zoomActivationKeyPressed: O,
    viewportInitialized: Z
  } = Ge(), K = (W) => T.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Wt(() => {
    ci(Z, !0);
  }), ve(() => G(w()), () => {
    F(d, w() || { x: 0, y: 0, zoom: 1 });
  }), ve(
    () => (o(), G(E())),
    () => {
      F(f, o() || E());
    }
  ), ve(
    () => (o(), G(V())),
    () => {
      F(v, o() || V());
    }
  ), vt(), Te();
  var j = Z0(), ue = Y(j);
  pt(ue, t, "default", {}), X(j), gt(j, (W, ae) => Vl == null ? void 0 : Vl(W, ae), () => ({
    viewport: T,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: h(d),
    dragging: N,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: k(),
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
  })), D(e, j);
  var Q = fe({
    get initialViewport() {
      return w();
    },
    set initialViewport(W) {
      w(W), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), p();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), p();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(W) {
      _(W), p();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(W) {
      g(W), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(W) {
      C(W), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(W) {
      y(W), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), p();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(W) {
      S(W), p();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(W) {
      E(W), p();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(W) {
      V(W), p();
    },
    get paneClickDistance() {
      return P();
    },
    set paneClickDistance(W) {
      P(W), p();
    }
  });
  return r(), Q;
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
function Nl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function zl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ re("<div><!></div>");
const X0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  de(t, !1), Je(e, X0);
  const [n, r] = ot(), o = () => U(H, "$panActivationKeyPressed", n), i = () => U(L, "$selectionKeyPressed", n), a = () => U(T, "$selectionRect", n), s = () => U(P, "$elementsSelectable", n), l = () => U(A, "$selectionRectMode", n), u = () => U(S, "$edges", n), c = () => U(k, "$nodeLookup", n), d = () => U(E, "$viewport", n), f = () => U(B, "$selectionMode", n), v = () => U(V, "$dragging", n), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne();
  let _ = m(t, "panOnDrag", 12, void 0), g = m(t, "selectionOnDrag", 12, void 0);
  const C = Ai(), {
    nodes: y,
    nodeLookup: k,
    edges: S,
    viewport: E,
    dragging: V,
    elementsSelectable: P,
    selectionRect: T,
    selectionRectMode: A,
    selectionKeyPressed: L,
    selectionMode: B,
    panActivationKeyPressed: H,
    unselectNodesAndEdges: N
  } = Ge();
  let $ = /* @__PURE__ */ ne(), M = null, z = [], O = !1;
  function Z(oe) {
    if (O) {
      O = !1;
      return;
    }
    C("paneclick", { event: oe }), N(), A.set(null);
  }
  function K(oe) {
    var ee, Ne;
    if (M = h($).getBoundingClientRect(), !P || !h(b) || oe.button !== 0 || oe.target !== h($) || !M)
      return;
    (Ne = (ee = oe.target) == null ? void 0 : ee.setPointerCapture) == null || Ne.call(ee, oe.pointerId);
    const { x: He, y: Re } = zn(oe, M);
    N(), T.set({
      width: 0,
      height: 0,
      startX: He,
      startY: Re,
      x: He,
      y: Re
    });
  }
  function j(oe) {
    if (!h(b) || !M || !a())
      return;
    O = !0;
    const ee = zn(oe, M), Ne = a().startX ?? 0, He = a().startY ?? 0, Re = {
      ...a(),
      x: ee.x < Ne ? ee.x : Ne,
      y: ee.y < He ? ee.y : He,
      width: Math.abs(ee.x - Ne),
      height: Math.abs(ee.y - He)
    }, te = z.map((le) => le.id), We = Na(z, u()).map((le) => le.id);
    z = lc(
      c(),
      Re,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === yi.Partial,
      !0
    );
    const Ue = Na(z, u()).map((le) => le.id), se = z.map((le) => le.id);
    (te.length !== se.length || se.some((le) => !te.includes(le))) && y.update((le) => le.map(zl(se))), (We.length !== Ue.length || Ue.some((le) => !We.includes(le))) && S.update((le) => le.map(zl(Ue))), A.set("user"), T.set(Re);
  }
  function ue(oe) {
    var ee, Ne;
    oe.button === 0 && ((Ne = (ee = oe.target) == null ? void 0 : ee.releasePointerCapture) == null || Ne.call(ee, oe.pointerId), !h(b) && l() === "user" && oe.target === h($) && (Z == null || Z(oe)), T.set(null), z.length > 0 && ci(A, "nodes"), i() && (O = !1));
  }
  const Q = (oe) => {
    var ee;
    if (Array.isArray(h(w)) && (ee = h(w)) != null && ee.includes(2)) {
      oe.preventDefault();
      return;
    }
    C("panecontextmenu", { event: oe });
  };
  ve(
    () => (o(), G(_())),
    () => {
      F(w, o() || _());
    }
  ), ve(
    () => (i(), a(), G(g()), h(w)),
    () => {
      F(b, i() || a() || g() && h(w) !== !0);
    }
  ), ve(
    () => (s(), h(b), l()),
    () => {
      F(x, s() && (h(b) || l() === "user"));
    }
  ), vt(), Te();
  var W = R0(), ae = /* @__PURE__ */ Pe(() => h(x) ? void 0 : Nl(Z, h($))), ge = /* @__PURE__ */ Pe(() => Nl(Q, h($)));
  let me;
  var ce = Y(W);
  pt(ce, t, "default", {}), X(W), Cn(W, (oe) => F($, oe), () => h($)), ke(
    (oe) => me = mt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, me, oe),
    [
      () => ({
        draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
        dragging: v(),
        selection: h(b)
      })
    ],
    pe
  ), Xe("click", W, function(...oe) {
    var ee;
    (ee = h(ae)) == null || ee.apply(this, oe);
  }), Xe("pointerdown", W, function(...oe) {
    var ee;
    (ee = h(x) ? K : void 0) == null || ee.apply(this, oe);
  }), Xe("pointermove", W, function(...oe) {
    var ee;
    (ee = h(x) ? j : void 0) == null || ee.apply(this, oe);
  }), Xe("pointerup", W, function(...oe) {
    var ee;
    (ee = h(x) ? ue : void 0) == null || ee.apply(this, oe);
  }), Xe("contextmenu", W, function(...oe) {
    var ee;
    (ee = h(ge)) == null || ee.apply(this, oe);
  }), D(e, W);
  var Ve = fe({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(oe) {
      _(oe), p();
    },
    get selectionOnDrag() {
      return g();
    },
    set selectionOnDrag(oe) {
      g(oe), p();
    }
  });
  return r(), Ve;
}
ie(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Y0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Rc(e, t) {
  de(t, !1), Je(e, W0);
  const [n, r] = ot(), o = () => U(i, "$viewport", n), { viewport: i } = Ge();
  Te();
  var a = Y0(), s = Y(a);
  pt(s, t, "default", {}), X(a), ke(() => dt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), fe(), r();
}
ie(Rc, {}, ["default"], [], !0);
function ki(e, t) {
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
var q0 = /* @__PURE__ */ re("<div><!></div>");
function Xc(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(ge, "$nodeTypes", n), i = () => U(ee, "$elementsSelectable", n), a = () => U(Ne, "$nodesDraggable", n), s = () => U(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), _ = m(t, "selectable", 13, void 0), g = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), S = m(t, "resizeObserver", 13, null), E = m(t, "style", 13, void 0), V = m(t, "type", 13, "default"), P = m(t, "isParent", 13, !1), T = m(t, "positionX", 13), A = m(t, "positionY", 13), L = m(t, "sourcePosition", 13, void 0), B = m(t, "targetPosition", 13, void 0), H = m(t, "zIndex", 13), N = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), M = m(t, "initialWidth", 13, void 0), z = m(t, "initialHeight", 13, void 0), O = m(t, "width", 13, void 0), Z = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), ue = m(t, "parentId", 13, void 0), Q = m(t, "nodeClickDistance", 13, void 0), W = m(t, "class", 13, "");
  const ae = Ge(), {
    nodeTypes: ge,
    nodeDragThreshold: me,
    selectNodesOnDrag: ce,
    handleNodeSelection: Ve,
    updateNodeInternals: oe,
    elementsSelectable: ee,
    nodesDraggable: Ne
  } = ae;
  let He = /* @__PURE__ */ ne(void 0, !0), Re = /* @__PURE__ */ ne(null, !0);
  const te = Ai(), We = we(g());
  let Ue = /* @__PURE__ */ ne(void 0, !0), se = /* @__PURE__ */ ne(void 0, !0), le = /* @__PURE__ */ ne(void 0, !0);
  Vr("svelteflow__node_id", v()), Vr("svelteflow__node_connectable", We), is(() => {
    var J;
    h(Re) && ((J = S()) == null || J.unobserve(h(Re)));
  });
  function Ce(J) {
    _() && (!q(ce) || !x() || q(me) > 0) && Ve(v()), te("nodeclick", { node: f().internals.userNode, event: J });
  }
  ve(() => G(V()), () => {
    F(l, V() || "default");
  }), ve(() => (o(), h(l)), () => {
    F(u, !!o()[h(l)]);
  }), ve(
    () => (o(), h(l), $i),
    () => {
      F(c, o()[h(l)] || $i);
    }
  ), ve(
    () => (h(u), G(V())),
    () => {
      h(u) || console.warn("003", Tr.error003(V()));
    }
  ), ve(
    () => (G(O()), G(Z()), G(M()), G(z()), G(N()), G($())),
    () => {
      F(d, K0({
        width: O(),
        height: Z(),
        initialWidth: M(),
        initialHeight: z(),
        measuredWidth: N(),
        measuredHeight: $()
      }));
    }
  ), ve(() => G(g()), () => {
    We.set(!!g());
  }), ve(
    () => (h(Ue), h(l), h(se), G(L()), h(le), G(B()), G(v()), h(He)),
    () => {
      (h(Ue) && h(l) !== h(Ue) || h(se) && L() !== h(se) || h(le) && B() !== h(le)) && requestAnimationFrame(() => oe(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: h(He),
            force: !0
          }
        ]
      ]))), F(Ue, h(l)), F(se, L()), F(le, B());
    }
  ), ve(
    () => (G(S()), h(He), h(Re), G(j())),
    () => {
      S() && (h(He) !== h(Re) || !j()) && (h(Re) && S().unobserve(h(Re)), h(He) && S().observe(h(He)), F(Re, h(He)));
    }
  ), vt(), Te(!0);
  var Ke = et(), ze = be(Ke);
  {
    var st = (J) => {
      var Ae = q0();
      let he, en;
      var tn = Y(Ae);
      const gn = /* @__PURE__ */ pe(() => b() ?? !1), Ee = /* @__PURE__ */ pe(() => _() ?? i() ?? !0), tt = /* @__PURE__ */ pe(() => C() ?? !0), Ie = /* @__PURE__ */ pe(() => x() ?? a() ?? !0);
      ku(tn, () => h(c), (De, nt) => {
        nt(De, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return h(gn);
          },
          get selectable() {
            return h(Ee);
          },
          get deletable() {
            return h(tt);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return H();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return h(Ie);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return ue();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return T();
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
      }), X(Ae), gt(Ae, (De, nt) => ki == null ? void 0 : ki(De, nt), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Ve,
        onDrag: (De, nt, nn, Kt) => {
          te("nodedrag", { event: De, targetNode: nn, nodes: Kt });
        },
        onDragStart: (De, nt, nn, Kt) => {
          te("nodedragstart", { event: De, targetNode: nn, nodes: Kt });
        },
        onDragStop: (De, nt, nn, Kt) => {
          te("nodedragstop", { event: De, targetNode: nn, nodes: Kt });
        },
        store: ae
      })), Cn(Ae, (De) => F(He, De), () => h(He)), At(() => Xe("click", Ae, Ce)), At(() => Xe("mouseenter", Ae, (De) => te("nodemouseenter", { node: f(), event: De }))), At(() => Xe("mouseleave", Ae, (De) => te("nodemouseleave", { node: f(), event: De }))), At(() => Xe("mousemove", Ae, (De) => te("nodemousemove", { node: f(), event: De }))), At(() => Xe("contextmenu", Ae, (De) => te("nodecontextmenu", { node: f(), event: De }))), ke(
        (De, nt) => {
          ye(Ae, "data-id", v()), he = mt(Ae, 1, De, null, he, nt), en = dt(Ae, `${E() ?? ""};${h(d).width ?? ""}${h(d).height ?? ""}`, en, {
            "z-index": H(),
            transform: `translate(${T() ?? ""}px, ${A() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => fn(Et([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: g(),
            selectable: _(),
            nopan: x(),
            parent: P()
          })
        ],
        pe
      ), D(J, Ae);
    };
    xe(ze, (J) => {
      y() || J(st);
    });
  }
  D(e, Ke);
  var it = fe({
    get node() {
      return f();
    },
    set node(J) {
      f(J), p();
    },
    get id() {
      return v();
    },
    set id(J) {
      v(J), p();
    },
    get data() {
      return w();
    },
    set data(J) {
      w(J), p();
    },
    get selected() {
      return b();
    },
    set selected(J) {
      b(J), p();
    },
    get draggable() {
      return x();
    },
    set draggable(J) {
      x(J), p();
    },
    get selectable() {
      return _();
    },
    set selectable(J) {
      _(J), p();
    },
    get connectable() {
      return g();
    },
    set connectable(J) {
      g(J), p();
    },
    get deletable() {
      return C();
    },
    set deletable(J) {
      C(J), p();
    },
    get hidden() {
      return y();
    },
    set hidden(J) {
      y(J), p();
    },
    get dragging() {
      return k();
    },
    set dragging(J) {
      k(J), p();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(J) {
      S(J), p();
    },
    get style() {
      return E();
    },
    set style(J) {
      E(J), p();
    },
    get type() {
      return V();
    },
    set type(J) {
      V(J), p();
    },
    get isParent() {
      return P();
    },
    set isParent(J) {
      P(J), p();
    },
    get positionX() {
      return T();
    },
    set positionX(J) {
      T(J), p();
    },
    get positionY() {
      return A();
    },
    set positionY(J) {
      A(J), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(J) {
      L(J), p();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(J) {
      B(J), p();
    },
    get zIndex() {
      return H();
    },
    set zIndex(J) {
      H(J), p();
    },
    get measuredWidth() {
      return N();
    },
    set measuredWidth(J) {
      N(J), p();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(J) {
      $(J), p();
    },
    get initialWidth() {
      return M();
    },
    set initialWidth(J) {
      M(J), p();
    },
    get initialHeight() {
      return z();
    },
    set initialHeight(J) {
      z(J), p();
    },
    get width() {
      return O();
    },
    set width(J) {
      O(J), p();
    },
    get height() {
      return Z();
    },
    set height(J) {
      Z(J), p();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(J) {
      K(J), p();
    },
    get initialized() {
      return j();
    },
    set initialized(J) {
      j(J), p();
    },
    get parentId() {
      return ue();
    },
    set parentId(J) {
      ue(J), p();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(J) {
      Q(J), p();
    },
    get class() {
      return W();
    },
    set class(J) {
      W(J), p();
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
var j0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const F0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Yc(e, t) {
  de(t, !1), Je(e, F0);
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
    C.forEach((k) => {
      const S = k.target.getAttribute("data-id");
      y.set(S, { id: S, nodeElement: k.target, force: !0 });
    }), w(y);
  });
  is(() => {
    x == null || x.disconnect();
  }), Te();
  var _ = j0();
  Tt(_, 5, o, (C) => C.id, (C, y) => {
    const k = /* @__PURE__ */ pe(() => !!h(y).selected), S = /* @__PURE__ */ pe(() => !!h(y).hidden), E = /* @__PURE__ */ pe(() => !!(h(y).draggable || i() && typeof h(y).draggable > "u")), V = /* @__PURE__ */ pe(() => !!(h(y).selectable || a() && typeof h(y).selectable > "u")), P = /* @__PURE__ */ pe(() => !!(h(y).connectable || s() && typeof h(y).connectable > "u")), T = /* @__PURE__ */ pe(() => h(y).deletable ?? !0), A = /* @__PURE__ */ pe(() => l().has(h(y).id)), L = /* @__PURE__ */ pe(() => h(y).type ?? "default"), B = /* @__PURE__ */ pe(() => h(y).internals.z ?? 0), H = /* @__PURE__ */ pe(() => hc(h(y)));
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
        return h(k);
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
        return h(T);
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
        return h(L);
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
        return h(H);
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
        nodeclick(N) {
          Le.call(this, t, N);
        },
        nodemouseenter(N) {
          Le.call(this, t, N);
        },
        nodemousemove(N) {
          Le.call(this, t, N);
        },
        nodemouseleave(N) {
          Le.call(this, t, N);
        },
        nodedrag(N) {
          Le.call(this, t, N);
        },
        nodedragstart(N) {
          Le.call(this, t, N);
        },
        nodedragstop(N) {
          Le.call(this, t, N);
        },
        nodecontextmenu(N) {
          Le.call(this, t, N);
        }
      }
    });
  }), X(_), D(e, _);
  var g = fe({
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
  de(t, !1);
  const [n, r] = ot(), o = () => U(W, "$edgeTypes", n), i = () => U(ae, "$flowId", n), a = () => U(ge, "$elementsSelectable", n), s = () => U(Q, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), _ = m(t, "data", 29, () => ({})), g = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), S = m(t, "selectable", 13, void 0), E = m(t, "deletable", 13, void 0), V = m(t, "hidden", 13, !1), P = m(t, "label", 13, void 0), T = m(t, "labelStyle", 13, void 0), A = m(t, "markerStart", 13, void 0), L = m(t, "markerEnd", 13, void 0), B = m(t, "sourceHandle", 13, void 0), H = m(t, "targetHandle", 13, void 0), N = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), M = m(t, "targetX", 13), z = m(t, "targetY", 13), O = m(t, "sourcePosition", 13), Z = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), ue = m(t, "class", 13, "");
  Vr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: ae,
    elementsSelectable: ge
  } = Ge(), me = Ai(), ce = Nc();
  function Ve(te) {
    const We = s().get(v());
    We && (ce(v()), me("edgeclick", { event: te, edge: We }));
  }
  function oe(te, We) {
    const Ue = s().get(v());
    Ue && me(We, { event: te, edge: Ue });
  }
  ve(() => G(w()), () => {
    F(l, w() || "default");
  }), ve(
    () => (o(), h(l), _i),
    () => {
      F(u, o()[h(l)] || _i);
    }
  ), ve(
    () => (G(A()), i()),
    () => {
      F(c, A() ? `url('#${Da(A(), i())}')` : void 0);
    }
  ), ve(
    () => (G(L()), i()),
    () => {
      F(d, L() ? `url('#${Da(L(), i())}')` : void 0);
    }
  ), ve(
    () => (G(S()), a()),
    () => {
      F(f, S() ?? a());
    }
  ), vt(), Te(!0);
  var ee = et(), Ne = be(ee);
  {
    var He = (te) => {
      var We = G0();
      let Ue;
      var se = Y(We);
      let le;
      var Ce = Y(se);
      const Ke = /* @__PURE__ */ pe(() => E() ?? !0);
      ku(Ce, () => h(u), (ze, st) => {
        st(ze, {
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
            return N();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return M();
          },
          get targetY() {
            return z();
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
            return k();
          },
          get label() {
            return P();
          },
          get labelStyle() {
            return T();
          },
          get data() {
            return _();
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
            return H();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(d);
          }
        });
      }), X(se), X(We), ke(
        (ze, st) => {
          Ue = dt(We, "", Ue, { "z-index": C() }), le = mt(se, 0, ze, null, le, st), ye(se, "data-id", v()), ye(se, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => fn(Et(["svelte-flow__edge", ue()])),
          () => ({
            animated: y(),
            selected: k(),
            selectable: h(f)
          })
        ],
        pe
      ), Xe("click", se, Ve), Xe("contextmenu", se, (ze) => {
        oe(ze, "edgecontextmenu");
      }), Xe("mouseenter", se, (ze) => {
        oe(ze, "edgemouseenter");
      }), Xe("mouseleave", se, (ze) => {
        oe(ze, "edgemouseleave");
      }), D(te, We);
    };
    xe(Ne, (te) => {
      V() || te(He);
    });
  }
  D(e, ee);
  var Re = fe({
    get id() {
      return v();
    },
    set id(te) {
      v(te), p();
    },
    get type() {
      return w();
    },
    set type(te) {
      w(te), p();
    },
    get source() {
      return b();
    },
    set source(te) {
      b(te), p();
    },
    get target() {
      return x();
    },
    set target(te) {
      x(te), p();
    },
    get data() {
      return _();
    },
    set data(te) {
      _(te), p();
    },
    get style() {
      return g();
    },
    set style(te) {
      g(te), p();
    },
    get zIndex() {
      return C();
    },
    set zIndex(te) {
      C(te), p();
    },
    get animated() {
      return y();
    },
    set animated(te) {
      y(te), p();
    },
    get selected() {
      return k();
    },
    set selected(te) {
      k(te), p();
    },
    get selectable() {
      return S();
    },
    set selectable(te) {
      S(te), p();
    },
    get deletable() {
      return E();
    },
    set deletable(te) {
      E(te), p();
    },
    get hidden() {
      return V();
    },
    set hidden(te) {
      V(te), p();
    },
    get label() {
      return P();
    },
    set label(te) {
      P(te), p();
    },
    get labelStyle() {
      return T();
    },
    set labelStyle(te) {
      T(te), p();
    },
    get markerStart() {
      return A();
    },
    set markerStart(te) {
      A(te), p();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(te) {
      L(te), p();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(te) {
      B(te), p();
    },
    get targetHandle() {
      return H();
    },
    set targetHandle(te) {
      H(te), p();
    },
    get sourceX() {
      return N();
    },
    set sourceX(te) {
      N(te), p();
    },
    get sourceY() {
      return $();
    },
    set sourceY(te) {
      $(te), p();
    },
    get targetX() {
      return M();
    },
    set targetX(te) {
      M(te), p();
    },
    get targetY() {
      return z();
    },
    set targetY(te) {
      z(te), p();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(te) {
      O(te), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(te) {
      Z(te), p();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(te) {
      K(te), p();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(te) {
      j(te), p();
    },
    get class() {
      return ue();
    },
    set class(te) {
      ue(te), p();
    }
  });
  return r(), Re;
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
  de(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Wt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Te(), fe({
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
  de(t, !1);
  const [n, r] = ot(), o = () => U(i, "$markers", n), { markers: i } = Ge();
  Te();
  var a = U0();
  Tt(a, 5, o, (s) => s.id, (s, l) => {
    jc(s, ct(() => h(l)));
  }), X(a), D(e, a), fe(), r();
}
ie(qc, {}, [], [], !0);
var Q0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), J0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), em = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  de(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Te();
  var c = em(), d = Y(c);
  {
    var f = (w) => {
      var b = Q0();
      ke(() => {
        ye(b, "stroke", l()), ye(b, "stroke-width", u());
      }), D(w, b);
    }, v = (w, b) => {
      {
        var x = (_) => {
          var g = J0();
          ke(() => {
            ye(g, "stroke", l()), ye(g, "stroke-width", u()), ye(g, "fill", l());
          }), D(_, g);
        };
        xe(
          w,
          (_) => {
            r() === wo.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    xe(d, (w) => {
      r() === wo.Arrow ? w(f) : w(v, !1);
    });
  }
  return X(c), ke(() => {
    ye(c, "id", n()), ye(c, "markerWidth", `${o()}`), ye(c, "markerHeight", `${i()}`), ye(c, "markerUnits", a()), ye(c, "orient", s());
  }), D(e, c), fe({
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
var tm = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Fc(e, t) {
  de(t, !1);
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
  }), Te();
  var d = tm(), f = Y(d), v = Y(f);
  qc(v, {}), X(f);
  var w = I(f, 2);
  Tt(w, 1, o, (g) => g.id, (g, C) => {
    const y = /* @__PURE__ */ pe(() => h(C).selectable ?? i()), k = /* @__PURE__ */ pe(() => h(C).type || "default");
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
        return h(k);
      },
      get zIndex() {
        return h(C).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Le.call(this, t, S);
        },
        edgecontextmenu(S) {
          Le.call(this, t, S);
        },
        edgemouseenter(S) {
          Le.call(this, t, S);
        },
        edgemouseleave(S) {
          Le.call(this, t, S);
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
  X(d), D(e, d);
  var _ = fe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), p();
    }
  });
  return r(), _;
}
ie(Fc, { defaultEdgeOptions: {} }, [], [], !0);
var nm = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const rm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function bs(e, t) {
  de(t, !1), Je(e, rm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = et(), l = be(s);
  {
    var u = (c) => {
      var d = nm();
      let f;
      ke(() => f = dt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return D(e, s), fe({
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
  de(t, !1);
  const [n, r] = ot(), o = () => U(a, "$selectionRect", n), i = () => U(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Ge();
  Te();
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
  }), fe(), r();
}
ie(Gc, {}, [], [], !0);
var om = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const im = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  de(t, !1), Je(e, im);
  const [n, r] = ot(), o = () => U(l, "$selectionRectMode", n), i = () => U(c, "$nodeLookup", n), a = () => U(u, "$nodes", n), s = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ai();
  let f = /* @__PURE__ */ ne(null);
  function v(g) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: g });
  }
  function w(g) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: g });
  }
  ve(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, Po(i(), { filter: (g) => !!g.selected })), a());
    }
  ), vt(), Te();
  var b = et(), x = be(b);
  {
    var _ = (g) => {
      var C = om(), y = Y(C);
      bs(y, { width: "100%", height: "100%", x: 0, y: 0 }), X(C), gt(C, (k, S) => ki == null ? void 0 : ki(k, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, S, E, V) => {
          d("nodedrag", { event: k, targetNode: null, nodes: V });
        },
        onDragStart: (k, S, E, V) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: V });
        },
        onDragStop: (k, S, E, V) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: V });
        }
      })), At(() => Xe("contextmenu", C, v)), At(() => Xe("click", C, w)), At(() => Xe("keyup", C, () => {
      })), ke(() => dt(C, `width: ${h(f).width ?? ""}px; height: ${h(f).height ?? ""}px; transform: translate(${h(f).x ?? ""}px, ${h(f).y ?? ""}px)`)), D(g, C);
    };
    xe(x, (g) => {
      o() === "nodes" && h(f) && Pn(h(f).x) && Pn(h(f).y) && g(_);
    });
  }
  D(e, b), fe(), r();
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
          (x) => x.every((_) => l[_])
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
function Qc(e, t) {
  de(t, !1);
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
      const k = b(y);
      return {
        key: k,
        modifier: w(y),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Te(), Xe("blur", Pt, _), Xe("contextmenu", Pt, _), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
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
  })), fe({
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
  Qc,
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
function Jc(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(v, "$connection", n), i = () => U(w, "$connectionLineType", n), a = () => U(d, "$width", n), s = () => U(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = Ge();
  let b = /* @__PURE__ */ ne(null);
  ve(
    () => (o(), G(c()), i(), h(b), Ta),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: k, fromPosition: S, toPosition: E } = o(), V = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: S,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case kr.Bezier:
            ((P) => F(b, P[0]))(pc(V));
            break;
          case kr.Step:
            ((P) => F(b, P[0]))(xi({ ...V, borderRadius: 0 }));
            break;
          case kr.SmoothStep:
            ((P) => F(b, P[0]))(xi(V));
            break;
          default:
            ((P) => F(b, P[0]))(Ta(V));
        }
      }
    }
  ), vt(), Te();
  var x = et(), _ = be(x);
  {
    var g = (y) => {
      var k = sm(), S = Y(k), E = Y(S);
      pt(E, t, "connectionLine", {});
      var V = I(E);
      {
        var P = (T) => {
          var A = am();
          ke(() => {
            ye(A, "d", h(b)), dt(A, u());
          }), D(T, A);
        };
        xe(V, (T) => {
          c() || T(P);
        });
      }
      X(S), X(k), ke(
        (T) => {
          ye(k, "width", a()), ye(k, "height", s()), dt(k, l()), mt(S, 0, T);
        },
        [
          () => fn(Et([
            "svelte-flow__connection",
            Pp(o().isValid)
          ]))
        ],
        pe
      ), D(y, k);
    };
    xe(_, (y) => {
      o().inProgress && y(g);
    });
  }
  D(e, x);
  var C = fe({
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
var lm = /* @__PURE__ */ re("<div><!></div>");
function zo(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = ot(), a = () => U(d, "$selectionRectMode", o), s = /* @__PURE__ */ ne();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ge();
  ve(() => G(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), Te();
  var f = lm();
  let v;
  var w = Y(f);
  pt(w, t, "default", {}), X(f), ke(
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
  ), D(e, f);
  var b = fe({
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
ie(zo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var um = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
  de(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Te();
  var o = et(), i = be(o);
  {
    var a = (s) => {
      zo(s, {
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
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return D(e, o), fe({
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
function Tl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
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
var vm = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), hm = /* @__PURE__ */ re("<!> <!>", 1), gm = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const pm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
  const n = T1(t), r = at(t, [
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
  de(t, !1), Je(e, pm);
  const [i, a] = ot(), s = () => U(C(), "$viewport", i), l = () => U(Qi, "$initialized", i), u = () => U(h(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), _ = m(t, "maxZoom", 12, void 0), g = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), S = m(t, "selectionKey", 12, void 0), E = m(t, "selectionMode", 12, void 0), V = m(t, "panActivationKey", 12, void 0), P = m(t, "multiSelectionKey", 12, void 0), T = m(t, "zoomActivationKey", 12, void 0), A = m(t, "nodesDraggable", 12, void 0), L = m(t, "nodesConnectable", 12, void 0), B = m(t, "nodeDragThreshold", 12, void 0), H = m(t, "elementsSelectable", 12, void 0), N = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), M = m(t, "connectionRadius", 12, void 0), z = m(t, "connectionLineType", 12, void 0), O = m(t, "connectionMode", 28, () => cr.Strict), Z = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), ue = m(t, "onMove", 12, void 0), Q = m(t, "onMoveEnd", 12, void 0), W = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), ge = m(t, "nodeExtent", 12, void 0), me = m(t, "onlyRenderVisibleElements", 12, void 0), ce = m(t, "panOnScrollMode", 28, () => qn.Free), Ve = m(t, "preventScrolling", 12, !0), oe = m(t, "zoomOnScroll", 12, !0), ee = m(t, "zoomOnDoubleClick", 12, !0), Ne = m(t, "zoomOnPinch", 12, !0), He = m(t, "panOnScroll", 12, !1), Re = m(t, "panOnDrag", 12, !0), te = m(t, "selectionOnDrag", 12, void 0), We = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), se = m(t, "onerror", 12, void 0), le = m(t, "ondelete", 12, void 0), Ce = m(t, "onedgecreate", 12, void 0), Ke = m(t, "attributionPosition", 12, void 0), ze = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), J = m(t, "height", 12, void 0), Ae = m(t, "colorMode", 12, "light"), he = m(t, "onconnect", 12, void 0), en = m(t, "onconnectstart", 12, void 0), tn = m(t, "onconnectend", 12, void 0), gn = m(t, "onbeforedelete", 12, void 0), Ee = m(t, "oninit", 12, void 0), tt = m(t, "nodeOrigin", 12, void 0), Ie = m(t, "paneClickDistance", 12, 0), De = m(t, "nodeClickDistance", 12, 0), nt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = m(t, "style", 12, void 0), Kt = m(t, "class", 12, void 0), Kr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), Ht = /* @__PURE__ */ ne();
  const mr = s() || g(), rt = h1(qi) ? Ge() : I0({
    nodes: q(f()),
    edges: q(v()),
    width: it(),
    height: J(),
    fitView: w(),
    nodeOrigin: tt(),
    nodeExtent: ge()
  });
  Wt(() => (rt.width.set(h(wt)), rt.height.set(h(Ht)), rt.domNode.set(h(Kr)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport(C()), w() !== void 0 && rt.fitViewOnInit.set(w()), b() && rt.fitViewOptions.set(b()), Tl(rt, {
    nodeTypes: y(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: ae(),
    paneClickDistance: Ie()
  }), () => {
    rt.reset();
  }));
  const { initialized: Qi } = rt;
  let qr = /* @__PURE__ */ ne(!1);
  ve(
    () => (h(wt), h(Ht)),
    () => {
      h(wt) !== void 0 && h(Ht) !== void 0 && (rt.width.set(h(wt)), rt.height.set(h(Ht)));
    }
  ), ve(
    () => (h(qr), l(), G(Ee())),
    () => {
      var R;
      !h(qr) && l() && ((R = Ee()) == null || R(), F(qr, !0));
    }
  ), ve(
    () => (G(d()), G(z()), G(M()), G(E()), G(N()), G(nt()), G(A()), G(L()), G(H()), G(me()), G(W()), G(We()), G(Ue()), G(se()), G(le()), G(Ce()), G(O()), G(B()), G(he()), G(en()), G(tn()), G(gn()), G(tt()), Dl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: z(),
        connectionRadius: M(),
        selectionMode: E(),
        snapGrid: N(),
        defaultMarkerColor: nt(),
        nodesDraggable: A(),
        nodesConnectable: L(),
        elementsSelectable: H(),
        onlyRenderVisibleElements: me(),
        isValidConnection: W(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: se(),
        ondelete: le(),
        onedgecreate: Ce(),
        connectionMode: O(),
        nodeDragThreshold: B(),
        onconnect: he(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: gn(),
        nodeOrigin: tt()
      };
      Dl(rt, R);
    }
  ), ve(
    () => (G(y()), G(k()), G(x()), G(_()), G(ae()), G(Ie())),
    () => {
      Tl(rt, {
        nodeTypes: y(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: ae(),
        paneClickDistance: Ie()
      });
    }
  ), ve(
    () => G(Ae()),
    () => {
      Y1(F(c, fm(Ae())), "$colorModeClass", i);
    }
  ), vt(), Te();
  var Lt = gm();
  let Ao;
  var Io = Y(Lt);
  Qc(Io, {
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
      return T();
    }
  });
  var Zo = I(Io, 2);
  const Ji = /* @__PURE__ */ pe(() => ce() === void 0 ? qn.Free : ce()), Fd = /* @__PURE__ */ pe(() => Ve() === void 0 ? !0 : Ve()), Gd = /* @__PURE__ */ pe(() => oe() === void 0 ? !0 : oe()), Ud = /* @__PURE__ */ pe(() => ee() === void 0 ? !0 : ee()), Qd = /* @__PURE__ */ pe(() => Ne() === void 0 ? !0 : Ne()), Jd = /* @__PURE__ */ pe(() => He() === void 0 ? !1 : He()), ef = /* @__PURE__ */ pe(() => Re() === void 0 ? !0 : Re()), tf = /* @__PURE__ */ pe(() => Ie() === void 0 ? 0 : Ie());
  Zc(Zo, {
    initialViewport: mr,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return ue();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return h(Ji);
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
      return h(Qd);
    },
    get panOnScroll() {
      return h(Jd);
    },
    get panOnDrag() {
      return h(ef);
    },
    get paneClickDistance() {
      return h(tf);
    },
    children: (R, Dw) => {
      const of = /* @__PURE__ */ pe(() => Re() === void 0 ? !0 : Re());
      Bc(R, {
        get panOnDrag() {
          return h(of);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(jr) {
            Le.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Le.call(this, t, jr);
          }
        },
        children: (jr, Lw) => {
          var Es = hm(), Hs = be(Es);
          Rc(Hs, {
            children: (sf, Ow) => {
              var Ms = vm(), Ps = be(Ms);
              Fc(Ps, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Ze) {
                    Le.call(this, t, Ze);
                  },
                  edgecontextmenu(Ze) {
                    Le.call(this, t, Ze);
                  },
                  edgemouseenter(Ze) {
                    Le.call(this, t, Ze);
                  },
                  edgemouseleave(Ze) {
                    Le.call(this, t, Ze);
                  }
                }
              });
              var Vs = I(Ps, 2);
              Jc(Vs, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, Aw) => {
                    var zs = et(), uf = be(zs);
                    pt(uf, t, "connectionLine", {}), D(Ze, zs);
                  }
                }
              });
              var Ns = I(Vs, 6);
              Yc(Ns, {
                get nodeClickDistance() {
                  return De();
                },
                $$events: {
                  nodeclick(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodemouseenter(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodemousemove(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodemouseleave(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodecontextmenu(Ze) {
                    Le.call(this, t, Ze);
                  }
                }
              });
              var lf = I(Ns, 2);
              Uc(lf, {
                $$events: {
                  selectionclick(Ze) {
                    Le.call(this, t, Ze);
                  },
                  selectioncontextmenu(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    Le.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    Le.call(this, t, Ze);
                  }
                }
              }), D(sf, Ms);
            },
            $$slots: { default: !0 }
          });
          var af = I(Hs, 2);
          Gc(af, {}), D(jr, Es);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = I(Zo, 2);
  ed(Ss, {
    get proOptions() {
      return ze();
    },
    get position() {
      return Ke();
    }
  });
  var nf = I(Ss, 2);
  pt(nf, t, "default", {}), X(Lt), Cn(Lt, (R) => F(Kr, R), () => h(Kr)), ke(
    (R) => Ao = ln(
      Lt,
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
  ), Ks(Lt, "clientWidth", (R) => F(wt, R)), Ks(Lt, "clientHeight", (R) => F(Ht, R)), Xe("dragover", Lt, function(R) {
    Le.call(this, t, R);
  }), Xe("drop", Lt, function(R) {
    Le.call(this, t, R);
  }), D(e, Lt);
  var rf = fe({
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
      return _();
    },
    set maxZoom(R) {
      _(R), p();
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
      return T();
    },
    set zoomActivationKey(R) {
      T(R), p();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(R) {
      A(R), p();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(R) {
      L(R), p();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(R) {
      B(R), p();
    },
    get elementsSelectable() {
      return H();
    },
    set elementsSelectable(R) {
      H(R), p();
    },
    get snapGrid() {
      return N();
    },
    set snapGrid(R) {
      N(R), p();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(R) {
      $(R), p();
    },
    get connectionRadius() {
      return M();
    },
    set connectionRadius(R) {
      M(R), p();
    },
    get connectionLineType() {
      return z();
    },
    set connectionLineType(R) {
      z(R), p();
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
      return ue();
    },
    set onMove(R) {
      ue(R), p();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(R) {
      Q(R), p();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(R) {
      W(R), p();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(R) {
      ae(R), p();
    },
    get nodeExtent() {
      return ge();
    },
    set nodeExtent(R) {
      ge(R), p();
    },
    get onlyRenderVisibleElements() {
      return me();
    },
    set onlyRenderVisibleElements(R) {
      me(R), p();
    },
    get panOnScrollMode() {
      return ce();
    },
    set panOnScrollMode(R) {
      ce(R), p();
    },
    get preventScrolling() {
      return Ve();
    },
    set preventScrolling(R) {
      Ve(R), p();
    },
    get zoomOnScroll() {
      return oe();
    },
    set zoomOnScroll(R) {
      oe(R), p();
    },
    get zoomOnDoubleClick() {
      return ee();
    },
    set zoomOnDoubleClick(R) {
      ee(R), p();
    },
    get zoomOnPinch() {
      return Ne();
    },
    set zoomOnPinch(R) {
      Ne(R), p();
    },
    get panOnScroll() {
      return He();
    },
    set panOnScroll(R) {
      He(R), p();
    },
    get panOnDrag() {
      return Re();
    },
    set panOnDrag(R) {
      Re(R), p();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(R) {
      te(R), p();
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
      return Ce();
    },
    set onedgecreate(R) {
      Ce(R), p();
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
      return J();
    },
    set height(R) {
      J(R), p();
    },
    get colorMode() {
      return Ae();
    },
    set colorMode(R) {
      Ae(R), p();
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
      return gn();
    },
    set onbeforedelete(R) {
      gn(R), p();
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
      return Ie();
    },
    set paneClickDistance(R) {
      Ie(R), p();
    },
    get nodeClickDistance() {
      return De();
    },
    set nodeClickDistance(R) {
      De(R), p();
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
  de(t, !1);
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
  }), Te();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), D(e, u), fe({
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
var mm = /* @__PURE__ */ re("<button><!></button>");
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
  de(t, !1);
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Te();
  var c = mm();
  let d;
  var f = Y(c);
  return pt(f, t, "default", { class: "button-svg" }), X(c), ke(
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
  ), Xe("click", c, function(v) {
    Le.call(this, t, v);
  }), D(e, c), fe({
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
  D(e, t);
}
ie(rd, {}, [], [], !0);
var wm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = wm();
  D(e, t);
}
ie(od, {}, [], [], !0);
var bm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = bm();
  D(e, t);
}
ie(id, {}, [], [], !0);
var xm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = xm();
  D(e, t);
}
ie(ad, {}, [], [], !0);
var $m = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = $m();
  D(e, t);
}
ie(sd, {}, [], [], !0);
var Cm = /* @__PURE__ */ re("<!> <!>", 1), _m = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(z, "$nodesDraggable", n), i = () => U(O, "$nodesConnectable", n), a = () => U(Z, "$elementsSelectable", n), s = () => U(N, "$viewport", n), l = () => U($, "$minZoom", n), u = () => U(M, "$maxZoom", n), c = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), _ = m(t, "showLock", 12, !0), g = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), S = m(t, "buttonBorderColor", 12, void 0), E = m(t, "ariaLabel", 12, void 0), V = m(t, "style", 12, void 0), P = m(t, "orientation", 12, "vertical"), T = m(t, "fitViewOptions", 12, void 0), A = m(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: B,
    fitView: H,
    viewport: N,
    minZoom: $,
    maxZoom: M,
    nodesDraggable: z,
    nodesConnectable: O,
    elementsSelectable: Z
  } = Ge(), K = {
    bgColor: g(),
    bgColorHover: C(),
    color: y(),
    colorHover: k(),
    borderColor: S()
  }, j = () => {
    L();
  }, ue = () => {
    B();
  }, Q = () => {
    H(T());
  }, W = () => {
    F(c, !h(c)), z.set(h(c)), O.set(h(c)), Z.set(h(c));
  };
  ve(
    () => (o(), i(), a()),
    () => {
      F(c, o() || i() || a());
    }
  ), ve(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), ve(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), ve(() => G(P()), () => {
    F(v, P() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Te();
  const ae = /* @__PURE__ */ pe(() => Et([
    "svelte-flow__controls",
    h(v),
    A()
  ])), ge = /* @__PURE__ */ pe(() => E() ?? "Svelte Flow controls");
  zo(e, {
    get class() {
      return h(ae);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(ge);
    },
    get style() {
      return V();
    },
    children: (ce, Ve) => {
      var oe = _m(), ee = be(oe);
      pt(ee, t, "before", {});
      var Ne = I(ee, 2);
      {
        var He = (Ce) => {
          var Ke = Cm(), ze = be(Ke);
          no(ze, ct(
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
              children: (it, J) => {
                rd(it);
              },
              $$slots: { default: !0 }
            }
          ));
          var st = I(ze, 2);
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
              $$events: { click: ue },
              children: (it, J) => {
                od(it);
              },
              $$slots: { default: !0 }
            }
          )), D(Ce, Ke);
        };
        xe(Ne, (Ce) => {
          b() && Ce(He);
        });
      }
      var Re = I(Ne, 2);
      {
        var te = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: Q },
              children: (Ke, ze) => {
                id(Ke);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Re, (Ce) => {
          x() && Ce(te);
        });
      }
      var We = I(Re, 2);
      {
        var Ue = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: W },
              children: (Ke, ze) => {
                var st = et(), it = be(st);
                {
                  var J = (he) => {
                    sd(he);
                  }, Ae = (he) => {
                    ad(he);
                  };
                  xe(it, (he) => {
                    h(c) ? he(J) : he(Ae, !1);
                  });
                }
                D(Ke, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(We, (Ce) => {
          _() && Ce(Ue);
        });
      }
      var se = I(We, 2);
      pt(se, t, "default", {});
      var le = I(se, 2);
      pt(le, t, "after", {}), D(ce, oe);
    },
    $$slots: { default: !0 }
  });
  var me = fe({
    get position() {
      return w();
    },
    set position(ce) {
      w(ce), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ce) {
      b(ce), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ce) {
      x(ce), p();
    },
    get showLock() {
      return _();
    },
    set showLock(ce) {
      _(ce), p();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(ce) {
      g(ce), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ce) {
      C(ce), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(ce) {
      y(ce), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ce) {
      k(ce), p();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(ce) {
      S(ce), p();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ce) {
      E(ce), p();
    },
    get style() {
      return V();
    },
    set style(ce) {
      V(ce), p();
    },
    get orientation() {
      return P();
    },
    set orientation(ce) {
      P(ce), p();
    },
    get fitViewOptions() {
      return T();
    },
    set fitViewOptions(ce) {
      T(ce), p();
    },
    get class() {
      return A();
    },
    set class(ce) {
      A(ce), p();
    }
  });
  return r(), me;
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
var km = /* @__PURE__ */ $e("<circle></circle>");
function ud(e, t) {
  de(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Te();
  var o = km();
  return ke(
    (i) => {
      ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, i);
    },
    [
      () => fn(Et([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    pe
  ), D(e, o), fe({
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
  de(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Te();
  var a = Sm();
  return ke(
    (s) => {
      ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(a, 0, s);
    },
    [
      () => fn(Et([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    pe
  ), D(e, a), fe({
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
var Hm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Mm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  de(t, !1), Je(e, Mm);
  const [n, r] = ot(), o = () => U(k, "$flowId", n), i = () => U(y, "$viewport", n), a = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), _ = m(t, "patternColor", 12, void 0), g = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: k } = Ge(), S = w() || Em[f()], E = f() === jn.Dots, V = f() === jn.Cross, P = Array.isArray(v()) ? v() : [v(), v()];
  ve(
    () => (o(), G(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ve(() => i(), () => {
    F(s, [
      P[0] * i().zoom || 1,
      P[1] * i().zoom || 1
    ]);
  }), ve(() => i(), () => {
    F(l, S * i().zoom);
  }), ve(() => (h(l), h(s)), () => {
    F(u, V ? [h(l), h(l)] : h(s));
  }), ve(
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
  ), vt(), Te();
  var T = Hm();
  let A;
  var L = Y(T), B = Y(L);
  {
    var H = (z) => {
      const O = /* @__PURE__ */ pe(() => h(l) / 2);
      ud(z, {
        get radius() {
          return h(O);
        },
        get class() {
          return g();
        }
      });
    }, N = (z) => {
      cd(z, {
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
    xe(B, (z) => {
      E ? z(H) : z(N, !1);
    });
  }
  X(L);
  var $ = I(L);
  X(T), ke(
    (z) => {
      mt(T, 0, z, "svelte-1r7pe8d"), A = dt(T, "", A, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": _()
      }), ye(L, "id", h(a)), ye(L, "x", i().x % h(s)[0]), ye(L, "y", i().y % h(s)[1]), ye(L, "width", h(s)[0]), ye(L, "height", h(s)[1]), ye(L, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ye($, "fill", `url(#${h(a)})`);
    },
    [
      () => fn(Et(["svelte-flow__background", C()]))
    ],
    pe
  ), D(e, T);
  var M = fe({
    get id() {
      return d();
    },
    set id(z) {
      d(z), p();
    },
    get variant() {
      return f();
    },
    set variant(z) {
      f(z), p();
    },
    get gap() {
      return v();
    },
    set gap(z) {
      v(z), p();
    },
    get size() {
      return w();
    },
    set size(z) {
      w(z), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(z) {
      b(z), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(z) {
      x(z), p();
    },
    get patternColor() {
      return _();
    },
    set patternColor(z) {
      _(z), p();
    },
    get patternClass() {
      return g();
    },
    set patternClass(z) {
      g(z), p();
    },
    get class() {
      return C();
    },
    set class(z) {
      C(z), p();
    }
  });
  return r(), M;
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
  de(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Te();
  var v = Pm();
  let w;
  return ke(
    (b, x) => {
      w = mt(v, 0, b, null, w, x), ye(v, "x", n()), ye(v, "y", r()), ye(v, "rx", a()), ye(v, "ry", a()), ye(v, "width", o()), ye(v, "height", i()), dt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ye(v, "shape-rendering", l());
    },
    [
      () => fn(Et(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    pe
  ), D(e, v), fe({
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
function Ll(e, t) {
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
var Vm = /* @__PURE__ */ $e("<title> </title>"), Nm = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(Re, "$flowId", n), i = () => U(ee, "$viewport", n), a = () => U(Ne, "$containerWidth", n), s = () => U(He, "$containerHeight", n), l = () => U(oe, "$nodeLookup", n), u = () => U(Ve, "$nodes", n), c = () => U(te, "$panZoom", n), d = () => U(We, "$translateExtent", n), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), g = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), y = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne();
  let P = m(t, "position", 12, "bottom-right"), T = m(t, "ariaLabel", 12, "Mini map"), A = m(t, "nodeStrokeColor", 12, "transparent"), L = m(t, "nodeColor", 12, void 0), B = m(t, "nodeClass", 12, ""), H = m(t, "nodeBorderRadius", 12, 5), N = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), M = m(t, "maskColor", 12, void 0), z = m(t, "maskStrokeColor", 12, void 0), O = m(t, "maskStrokeWidth", 12, void 0), Z = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), ue = m(t, "zoomable", 12, !0), Q = m(t, "inversePan", 12, void 0), W = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), ge = m(t, "class", 12, "");
  const me = 200, ce = 150, {
    nodes: Ve,
    nodeLookup: oe,
    viewport: ee,
    width: Ne,
    height: He,
    flowId: Re,
    panZoom: te,
    translateExtent: We
  } = Ge(), Ue = L() === void 0 ? void 0 : fa(L()), se = fa(A()), le = fa(B()), Ce = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ke = `svelte-flow__minimap-desc-${o()}`;
  let ze = /* @__PURE__ */ ne(h(f));
  const st = () => h(_);
  ve(
    () => (i(), a(), s()),
    () => {
      F(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ve(
    () => (l(), h(f), u()),
    () => {
      F(ze, l().size > 0 ? fc(Po(l()), h(f)) : h(f)), u();
    }
  ), ve(() => G(Z()), () => {
    F(v, Z() ?? me);
  }), ve(() => G(K()), () => {
    F(w, K() ?? ce);
  }), ve(
    () => (h(ze), h(v)),
    () => {
      F(b, h(ze).width / h(v));
    }
  ), ve(
    () => (h(ze), h(w)),
    () => {
      F(x, h(ze).height / h(w));
    }
  ), ve(
    () => (h(b), h(x)),
    () => {
      F(_, Math.max(h(b), h(x)));
    }
  ), ve(() => (h(_), h(v)), () => {
    F(g, h(_) * h(v));
  }), ve(
    () => (h(_), h(w)),
    () => {
      F(C, h(_) * h(w));
    }
  ), ve(() => h(_), () => {
    F(y, 5 * h(_));
  }), ve(
    () => (h(ze), h(g), h(y)),
    () => {
      F(k, h(ze).x - (h(g) - h(ze).width) / 2 - h(y));
    }
  ), ve(
    () => (h(ze), h(C), h(y)),
    () => {
      F(S, h(ze).y - (h(C) - h(ze).height) / 2 - h(y));
    }
  ), ve(() => (h(g), h(y)), () => {
    F(E, h(g) + h(y) * 2);
  }), ve(() => (h(C), h(y)), () => {
    F(V, h(C) + h(y) * 2);
  }), vt(), Te();
  const it = /* @__PURE__ */ pe(() => ae() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), J = /* @__PURE__ */ pe(() => Et(["svelte-flow__minimap", ge()]));
  zo(e, {
    get position() {
      return P();
    },
    get style() {
      return h(it);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (he, en) => {
      var tn = et(), gn = be(tn);
      {
        var Ee = (tt) => {
          var Ie = Nm();
          ye(Ie, "aria-labelledby", Ke);
          let De;
          var nt = Y(Ie);
          {
            var nn = (wt) => {
              var Ht = Vm();
              ye(Ht, "id", Ke);
              var mr = Y(Ht, !0);
              X(Ht), ke(() => Rt(mr, T())), D(wt, Ht);
            };
            xe(nt, (wt) => {
              T() && wt(nn);
            });
          }
          var Kt = I(nt);
          Tt(Kt, 1, u, (wt) => wt.id, (wt, Ht) => {
            var mr = et();
            const rt = /* @__PURE__ */ pe(() => l().get(h(Ht).id));
            var Qi = be(mr);
            {
              var qr = (Lt) => {
                const Ao = /* @__PURE__ */ pe(() => er(h(rt))), Io = /* @__PURE__ */ pe(() => Ue == null ? void 0 : Ue(h(rt))), Zo = /* @__PURE__ */ pe(() => se(h(rt))), Ji = /* @__PURE__ */ pe(() => le(h(rt)));
                fd(Lt, ct(
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
                      return H();
                    },
                    get strokeColor() {
                      return h(Zo);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: Ce,
                    get class() {
                      return h(Ji);
                    }
                  }
                ));
              };
              xe(Qi, (Lt) => {
                h(rt) && hc(h(rt)) && Lt(qr);
              });
            }
            D(wt, mr);
          });
          var Kr = I(Kt);
          X(Ie), gt(Ie, (wt, Ht) => Ll == null ? void 0 : Ll(wt, Ht), () => ({
            panZoom: c(),
            viewport: ee,
            getViewScale: st,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: j(),
            zoomable: ue()
          })), ke(() => {
            ye(Ie, "width", h(v)), ye(Ie, "height", h(w)), ye(Ie, "viewBox", `${h(k) ?? ""} ${h(S) ?? ""} ${h(E) ?? ""} ${h(V) ?? ""}`), De = dt(Ie, "", De, {
              "--xy-minimap-mask-background-color-props": M(),
              "--xy-minimap-mask-stroke-color-props": z(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * h(_) : void 0
            }), ye(Kr, "d", `M${h(k) - h(y)},${h(S) - h(y)}h${h(E) + h(y) * 2}v${h(V) + h(y) * 2}h${-h(E) - h(y) * 2}z
      M${h(f).x ?? ""},${h(f).y ?? ""}h${h(f).width ?? ""}v${h(f).height ?? ""}h${-h(f).width}z`);
          }), D(tt, Ie);
        };
        xe(gn, (tt) => {
          c() && tt(Ee);
        });
      }
      D(he, tn);
    },
    $$slots: { default: !0 }
  });
  var Ae = fe({
    get position() {
      return P();
    },
    set position(he) {
      P(he), p();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(he) {
      T(he), p();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(he) {
      A(he), p();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(he) {
      L(he), p();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(he) {
      B(he), p();
    },
    get nodeBorderRadius() {
      return H();
    },
    set nodeBorderRadius(he) {
      H(he), p();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(he) {
      N(he), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(he) {
      $(he), p();
    },
    get maskColor() {
      return M();
    },
    set maskColor(he) {
      M(he), p();
    },
    get maskStrokeColor() {
      return z();
    },
    set maskStrokeColor(he) {
      z(he), p();
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
      return ue();
    },
    set zoomable(he) {
      ue(he), p();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(he) {
      Q(he), p();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(he) {
      W(he), p();
    },
    get style() {
      return ae();
    },
    set style(he) {
      ae(he), p();
    },
    get class() {
      return ge();
    },
    set class(he) {
      ge(he), p();
    }
  });
  return r(), Ae;
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
const Ol = (e) => Np(e);
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = Ge(), g = (k) => {
    var S, E;
    const V = q(w), P = Ol(k) ? k : V.get(k.id), T = P.parentId ? Lp(P.position, P.measured, P.parentId, V, q(b)) : P.position, A = {
      ...P,
      position: T,
      width: ((S = P.measured) == null ? void 0 : S.width) ?? P.width,
      height: ((E = P.measured) == null ? void 0 : E.height) ?? P.height
    };
    return Lr(A);
  }, C = (k, S, E = { replace: !1 }) => {
    var V;
    const P = (V = q(w).get(k)) == null ? void 0 : V.internals.userNode;
    if (!P)
      return;
    const T = typeof S == "function" ? S(P) : S;
    E.replace ? d.update((A) => A.map((L) => L.id === k ? Ol(T) ? T : { ...L, ...T } : L)) : (Object.assign(P, T), d.update((A) => A));
  }, y = (k) => q(w).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (k) => {
      var S;
      return (S = y(k)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : Al(q(w), k),
    getEdge: (k) => q(x).get(k),
    getEdges: (k) => k === void 0 ? q(f) : Al(q(x), k),
    setZoom: (k, S) => {
      const E = q(c);
      return E ? E.scaleTo(k, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, S) => {
      const E = q(i), V = q(c);
      return V ? (await V.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, S, E) => {
      const V = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : q(u), P = q(c);
      return P ? (await P.setViewport({
        x: q(a) / 2 - k * V,
        y: q(s) / 2 - S * V,
        zoom: V
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, S) => {
      const E = q(c);
      if (!E)
        return Promise.resolve(!1);
      const V = gs(k, q(a), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await E.setViewport(V, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, S = !0, E) => {
      const V = wl(k), P = V ? k : g(k);
      return P ? (E || q(d)).filter((T) => {
        const A = q(w).get(T.id);
        if (!A || !V && T.id === k.id)
          return !1;
        const L = Lr(A), B = bo(L, P);
        return S && B > 0 || B >= P.width * P.height;
      }) : [];
    },
    isNodeIntersecting: (k, S, E = !0) => {
      const V = wl(k) ? k : g(k);
      if (!V)
        return !1;
      const P = bo(V, S);
      return E && P > 0 || P >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: S = [] }) => {
      const { nodes: E, edges: V } = await uc({
        nodesToRemove: k,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return E && d.update((P) => P.filter((T) => !E.some(({ id: A }) => A === T.id))), V && f.update((P) => P.filter((T) => !V.some(({ id: A }) => A === T.id))), {
        deletedNodes: E,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (k, S = { snapToGrid: !0 }) => {
      const E = q(v);
      if (!E)
        return k;
      const V = S.snapToGrid ? q(o) : !1, { x: P, y: T, zoom: A } = q(i), { x: L, y: B } = E.getBoundingClientRect(), H = {
        x: k.x - L,
        y: k.y - B
      };
      return Vo(H, [P, T, A], V !== null, V || [1, 1]);
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
      const { x: E, y: V, zoom: P } = q(i), { x: T, y: A } = S.getBoundingClientRect(), L = vc(k, [E, V, P]);
      return {
        x: L.x + T,
        y: L.y + A
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
    updateNode: C,
    updateNodeData: (k, S, E) => {
      var V;
      const P = (V = q(w).get(k)) == null ? void 0 : V.internals.userNode;
      if (!P)
        return;
      const T = typeof S == "function" ? S(P) : S;
      P.data = E != null && E.replace ? T : { ...P.data, ...T }, d.update((A) => A);
    },
    getNodesBounds: (k) => {
      const S = q(w), E = q(b);
      return zp(k, { nodeLookup: S, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: S, nodeId: E }) => {
      var V;
      return Array.from(((V = q(_).get(`${E}-${k}-${S ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var zm = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(C, "$nodes", n), i = () => U(g, "$nodeLookup", n), a = () => U(_, "$viewport", n), s = () => U(x, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: g, nodes: C } = Ge(), { getNodesBounds: y } = Dt(), k = sr("svelteflow__node_id");
  let S = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne([]), V = w() !== void 0 ? w() : 10, P = f() !== void 0 ? f() : _e.Top, T = v() !== void 0 ? v() : "center";
  ve(
    () => (o(), G(d()), i()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || k];
      F(E, N.reduce(
        ($, M) => {
          const z = i().get(M);
          return z && $.push(z), $;
        },
        []
      ));
    }
  ), ve(
    () => (h(E), a()),
    () => {
      const N = y(h(E));
      N && F(S, Up(N, a(), P, V, T));
    }
  ), ve(() => h(E), () => {
    F(l, h(E).length === 0 ? 1 : Math.max(...h(E).map((N) => (N.internals.z || 5) + 1)));
  }), ve(() => o(), () => {
    F(u, o().filter((N) => N.selected).length);
  }), ve(
    () => (G(b()), h(E), h(u)),
    () => {
      F(c, typeof b() == "boolean" ? b() : h(E).length === 1 && h(E)[0].selected && h(u) === 1);
    }
  ), vt(), Te();
  var A = et(), L = be(A);
  {
    var B = (N) => {
      var $ = zm();
      let M;
      var z = Y($);
      pt(z, t, "default", {}), X($), gt($, (O, Z) => Ci == null ? void 0 : Ci(O, Z), () => ({ domNode: s() })), ke(
        (O) => {
          ye($, "data-id", O), M = dt($, "", M, {
            position: "absolute",
            transform: h(S),
            "z-index": h(l)
          });
        },
        [
          () => h(E).reduce((O, Z) => `${O}${Z.id} `, "").trim()
        ],
        pe
      ), D(N, $);
    };
    xe(L, (N) => {
      s() && h(c) && h(E) && N(B);
    });
  }
  D(e, A);
  var H = fe({
    get nodeId() {
      return d();
    },
    set nodeId(N) {
      d(N), p();
    },
    get position() {
      return f();
    },
    set position(N) {
      f(N), p();
    },
    get align() {
      return v();
    },
    set align(N) {
      v(N), p();
    },
    get offset() {
      return w();
    },
    set offset(N) {
      w(N), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(N) {
      b(N), p();
    }
  });
  return r(), H;
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
class Tm {
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
const Dm = () => {
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
}, ti = Dm();
var Lm = /* @__PURE__ */ re("<button><!></button>");
function Fe(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Lm();
  let i;
  var a = Y(o);
  return lr(a, () => n() ?? ft), X(o), ke(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(Fe, { children: {} }, [], [], !0);
var Om = /* @__PURE__ */ re("<input>");
function gd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Om();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), fe();
}
ie(gd, {}, [], [], !0);
var Am = /* @__PURE__ */ re("<input>");
function $t(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Am();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), fe();
}
ie($t, {}, [], [], !0);
var Im = /* @__PURE__ */ re("<textarea></textarea>");
function St(e, t) {
  de(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Im();
  S1(o);
  let i;
  return ke(() => i = ln(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), fe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
ie(St, { value: {} }, [], [], !0);
var Zm = /* @__PURE__ */ re('<div role="button"><!></div>'), Bm = /* @__PURE__ */ re("<div></div>");
function pd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Te();
  var l = Bm();
  let u;
  return Tt(l, 5, o, vo, (c, d, f) => {
    var v = Zm();
    ye(v, "tabindex", f), v.__click = () => s(h(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(h(d), f));
    };
    var w = Y(v);
    {
      var b = (_) => {
        var g = Be();
        ke(() => Rt(g, h(d).label)), D(_, g);
      }, x = (_) => {
        var g = et(), C = be(g);
        lr(C, () => h(d).label ?? ft), D(_, g);
      };
      xe(w, (_) => {
        typeof h(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    X(v), ke(() => mt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), D(c, v);
  }), X(l), ke(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), fe({
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
}, Ym = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), Km = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), qm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), jm = /* @__PURE__ */ re("<div></div>");
const Fm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  de(t, !0), Je(e, Fm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Ft([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = jm();
  return Tt(a, 21, n, vo, (s, l, u) => {
    var c = qm(), d = Y(c);
    ye(d, "tabindex", u), d.__click = [Rm, i, l], d.__keydown = [Xm, i, l];
    var f = Y(d);
    {
      var v = (y) => {
        var k = Ym(), S = Y(k);
        Yn(S, {
          get target() {
            return h(l).icon;
          }
        }), X(k), D(y, k);
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
      var _ = (y) => {
        var k = Wm(), S = Y(k);
        Yn(S, {
          get target() {
            return h(l).description;
          }
        }), X(k), D(y, k);
      };
      xe(x, (y) => {
        h(l).description && y(_);
      });
    }
    var g = I(x, 2);
    {
      var C = (y) => {
        var k = Km(), S = Y(k);
        Yn(S, {
          get target() {
            return h(l).content;
          }
        }), X(k), D(y, k);
      };
      xe(g, (y) => {
        o().includes(h(l).key) && y(C);
      });
    }
    X(c), ke((y) => mt(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), X(a), ke(() => {
    dt(a, t.style), mt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, a), fe({
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
  de(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (s) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? ft), D(s, l);
    }, a = (s) => {
      var l = et(), u = be(l);
      rs(u, n), D(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return D(e, r), fe({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ie(Yn, { target: {} }, [], [], !0);
var Gm = (e, t, n) => t(h(n)), Um = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Qm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), Jm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), e2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), t2 = /* @__PURE__ */ re("<!> <!>", 1), n2 = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), r2 = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), o2 = /* @__PURE__ */ re("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (C, y = ft) => {
    var k = et(), S = be(k);
    Tt(S, 19, y, (E, V) => `${V}_${E.value}`, (E, V) => {
      var P = Jm(), T = be(P);
      T.__click = [Gm, b, V];
      var A = Y(T), L = Y(A);
      {
        var B = (M) => {
          var z = Um();
          D(M, z);
        };
        xe(L, (M) => {
          h(V).children && h(V).children.length > 0 && M(B);
        });
      }
      X(A);
      var H = I(A, 2);
      Yn(H, {
        get target() {
          return h(V).label;
        }
      }), X(T);
      var N = I(T, 2);
      {
        var $ = (M) => {
          var z = Qm(), O = Y(z);
          n(O, () => h(V).children), X(z), D(M, z);
        };
        xe(N, (M) => {
          h(V).children && h(V).children.length > 0 && (l() || c().includes(h(V).value)) && M($);
        });
      }
      D(E, P);
    }), D(C, k);
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
    const C = [], y = (k) => {
      for (let S of k)
        a().length > 0 ? a().includes(S.value) && C.push(S) : s().includes(S.value) && C.push(S), S.children && S.children.length > 0 && y(S.children);
    };
    return y(r()), C;
  }), w;
  function b(C) {
    var y, k;
    if (C.children && C.children.length > 0) {
      (y = o()) == null || y(C);
      return;
    } else
      w == null || w.hide(), (k = i()) == null || k(C);
  }
  var x = o2();
  let _;
  var g = Y(x);
  return Cn(
    Oo(g, {
      floating: (C) => {
        var y = e2(), k = Y(y);
        n(k, r), X(y), D(C, y);
      },
      children: (C, y) => {
        var k = r2();
        let S;
        var E = Y(k);
        Tt(
          E,
          23,
          () => h(v),
          (V, P) => `${P}_${V.value}`,
          (V, P, T) => {
            var A = et(), L = be(A);
            {
              var B = (N) => {
                var $ = et(), M = be($);
                {
                  var z = (O) => {
                    Yn(O, {
                      get target() {
                        return h(P).label;
                      }
                    });
                  };
                  xe(M, (O) => {
                    h(T) === 0 && O(z);
                  });
                }
                D(N, $);
              }, H = (N) => {
                var $ = t2(), M = be($);
                Yn(M, {
                  get target() {
                    return h(P).label;
                  }
                });
                var z = I(M, 2);
                {
                  var O = (Z) => {
                    var K = Be(",");
                    D(Z, K);
                  };
                  xe(z, (Z) => {
                    h(T) < h(v).length - 1 && Z(O);
                  });
                }
                D(N, $);
              };
              xe(L, (N) => {
                u() ? N(H, !1) : N(B);
              });
            }
            D(V, A);
          },
          (V) => {
            var P = n2(), T = Y(P, !0);
            X(P), ke(() => Rt(T, d())), D(V, P);
          }
        ), X(E), Me(2), X(k), ke(() => S = ln(k, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), X(x), ke(() => _ = ln(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, x), fe({
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
  un,
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
const $o = Math.min, Sr = Math.max, Si = Math.round, yn = (e) => ({
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
function La(e, t, n) {
  return Sr(e, $o(t, n));
}
function To(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Do(e) {
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
  const r = Do(e), o = $s(e), i = xs(o);
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
  const o = Do(e);
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
function Hi(e) {
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
  } = Zl(u, r, l), f = r, v = {}, w = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: _
    } = s[b], {
      x: g,
      y: C,
      data: y,
      reset: k
    } = await _({
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
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
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
  } = To(t, e), w = wd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
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
  }, y = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: g,
    strategy: l
  }) : _);
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
    } = To(e, t) || {};
    if (u == null)
      return {};
    const d = wd(c), f = {
      x: n,
      y: r
    }, v = $s(o), w = xs(v), b = await a.getDimensions(u), x = v === "y", _ = x ? "top" : "left", g = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], k = f[v] - i.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = S ? S[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(S))) && (E = s.floating[C] || i.floating[w]);
    const V = y / 2 - k / 2, P = E / 2 - b[w] / 2 - 1, T = $o(d[_], P), A = $o(d[g], P), L = T, B = E - b[w] - A, H = E / 2 - b[w] / 2 + V, N = La(L, H, B), $ = !l.arrow && Do(o) != null && H !== N && i.reference[w] / 2 - (H < L ? T : A) - b[w] / 2 < 0, M = $ ? H < L ? H - L : H - B : 0;
    return {
      [v]: f[v] + M,
      data: {
        [v]: N,
        centerOffset: H - N - M,
        ...$ && {
          alignmentOffset: M
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
      } = To(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = fr(o), g = Ar(s), C = fr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (C || !b ? [Ei(s)] : l2(s)), S = w !== "none";
      !f && S && k.push(...c2(s, b, w, y));
      const E = [s, ...k], V = await bd(t, x), P = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && P.push(V[_]), d) {
        const H = s2(o, a, y);
        P.push(V[H[0]], V[H[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: P
      }], !P.every((H) => H <= 0)) {
        var A, L;
        const H = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, N = E[H];
        if (N)
          return {
            data: {
              index: H,
              overflows: T
            },
            reset: {
              placement: N
            }
          };
        let $ = (L = T.filter((M) => M.overflows[0] <= 0).sort((M, z) => M.overflows[1] - z.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var B;
              const M = (B = T.filter((z) => {
                if (S) {
                  const O = Ar(z.placement);
                  return O === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((O) => O > 0).reduce((O, Z) => O + Z, 0)]).sort((z, O) => z[1] - O[1])[0]) == null ? void 0 : B[0];
              M && ($ = M);
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = Do(n), l = Ar(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = To(t, e);
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
              x: _,
              y: g
            } = x;
            return {
              x: _,
              y: g
            };
          }
        },
        ...l
      } = To(e, t), u = {
        x: n,
        y: r
      }, c = await bd(t, l), d = Ar(fr(o)), f = yd(d);
      let v = u[f], w = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", g = v + c[x], C = v - c[_];
        v = La(g, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", g = w + c[x], C = w - c[_];
        w = La(g, w, C);
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
function cn(e) {
  return ji() ? e instanceof Element || e instanceof Xt(e).Element : !1;
}
function _n(e) {
  return ji() ? e instanceof HTMLElement || e instanceof Xt(e).HTMLElement : !1;
}
function Bl(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function Lo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
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
  const t = _s(), n = cn(e) ? dn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function w2(e) {
  let t = Qn(e);
  for (; _n(t) && !Ir(t); ) {
    if (Cs(t))
      return t;
    if (Fi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function _s() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ir(e) {
  return ["html", "body", "#document"].includes(Wr(e));
}
function dn(e) {
  return Xt(e).getComputedStyle(e);
}
function Gi(e) {
  return cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
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
  const t = Qn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Lo(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xt(o);
  return i ? (Aa(a), t.concat(a, a.visualViewport || [], Lo(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Aa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _d(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Si(n) !== i || Si(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function kd(e) {
  return cn(e) ? e : e.contextElement;
}
function Er(e) {
  const t = kd(e);
  if (!_n(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = _d(t);
  let a = (i ? Si(n.width) : n.width) / r, s = (i ? Si(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const b2 = /* @__PURE__ */ yn(0);
function Sd(e) {
  const t = Xt(e);
  return !_s() || !t.visualViewport ? b2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Xt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = kd(e);
  let a = yn(1);
  t && (r ? cn(r) && (a = Er(r)) : a = Er(e));
  const s = x2(i, n, r) ? Sd(i) : yn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Xt(i), v = r && cn(r) ? Xt(r) : r;
    let w = f, b = Aa(w);
    for (; b && r && v !== w; ) {
      const x = Er(b), _ = b.getBoundingClientRect(), g = dn(b), C = _.left + (b.clientLeft + parseFloat(g.paddingLeft)) * x.x, y = _.top + (b.clientTop + parseFloat(g.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = Xt(b), b = Aa(w);
    }
  }
  return Hi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ks(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : Co(An(e)).left + n;
}
function Ed(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ks(e, r)
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
  }, u = yn(1);
  const c = yn(0), d = _n(r);
  if ((d || !d && !i) && ((Wr(r) !== "body" || Lo(a)) && (l = Gi(r)), _n(r))) {
    const v = Co(r);
    u = Er(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Ed(a, l, !0) : yn(0);
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
function _2(e) {
  const t = An(e), n = Gi(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ks(e);
  const s = -n.scrollTop;
  return dn(r).direction === "rtl" && (a += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function k2(e, t) {
  const n = Xt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = _s();
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
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e) ? Er(e) : yn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = k2(e, n);
  else if (t === "document")
    r = _2(An(e));
  else if (cn(t))
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
  return Hi(r);
}
function Hd(e, t) {
  const n = Qn(e);
  return n === t || !cn(n) || Ir(n) ? !1 : dn(n).position === "fixed" || Hd(n, t);
}
function E2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((s) => cn(s) && Wr(s) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let a = i ? Qn(e) : e;
  for (; cn(a) && !Ir(a); ) {
    const s = dn(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Lo(a) && !l && Hd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Qn(a);
  }
  return t.set(e, r), r;
}
function H2(e) {
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
function M2(e) {
  const {
    width: t,
    height: n
  } = _d(e);
  return {
    width: t,
    height: n
  };
}
function P2(e, t, n) {
  const r = _n(t), o = An(t), i = n === "fixed", a = Co(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((Wr(t) !== "body" || Lo(o)) && (s = Gi(t)), r) {
      const f = Co(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = ks(o));
  const u = o && !r && !i ? Ed(o, s) : yn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function va(e) {
  return dn(e).position === "static";
}
function Xl(e, t) {
  if (!_n(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Md(e, t) {
  const n = Xt(e);
  if (Fi(e))
    return n;
  if (!_n(e)) {
    let o = Qn(e);
    for (; o && !Ir(o); ) {
      if (cn(o) && !va(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && y2(r) && va(r); )
    r = Xl(r, t);
  return r && Ir(r) && va(r) && !Cs(r) ? n : r || w2(e) || n;
}
const V2 = async function(e) {
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
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
function N2(e) {
  return dn(e).direction === "rtl";
}
const z2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $2,
  getDocumentElement: An,
  getClippingRect: H2,
  getOffsetParent: Md,
  getElementRects: V2,
  getClientRects: C2,
  getDimensions: M2,
  getScale: Er,
  isElement: cn,
  isRTL: N2
}, T2 = p2, D2 = m2, L2 = h2, O2 = v2, A2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: z2,
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      u = _;
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
        T2(o),
        // 手动偏移配置
        L2(i),
        //自动翻转
        D2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [O2({ element: c })] : []
      ]
    }).then(({ x: _, y: g, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: S } = y.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
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
  function b(_) {
    _.stopPropagation(), f ? w() : v();
  }
  function x(_) {
    u.contains(_.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, b);
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
var Z2 = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Oo(e, t) {
  de(t, !0);
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
  var u = Z2(), c = Y(u), d = Y(c);
  lr(d, n), X(c), Cn(c, (w) => i = w, () => i);
  var f = I(c, 2), v = Y(f);
  return lr(v, r), X(f), Cn(f, (w) => a = w, () => a), X(u), D(e, u), fe({
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
function Qe(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = et(), s = be(a);
  return D1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = be(d);
    lr(f, () => n() ?? ft), D(u, d);
  }), D(e, a), fe({
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
ie(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var B2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ui(e, t) {
  de(t, !0), Je(e, R2);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = B2();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
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
var W2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), K2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), q2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), j2 = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), F2 = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const G2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function hn(e, t) {
  de(t, !0), Je(e, G2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Dt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: _ } = X2(), { copyNode: g } = Y2(), C = tr(), y = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var k = F2(), S = be(k);
  {
    var E = ($) => {
      hd($, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (M, z) => {
          var O = j2(), Z = Y(O);
          {
            var K = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (ge, me) => {
                  var ce = W2();
                  D(ge, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(Z, (ae) => {
              s() && ae(K);
            });
          }
          var j = I(Z, 2);
          {
            var ue = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: (ge, me) => {
                  var ce = K2();
                  D(ge, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(j, (ae) => {
              l() && ae(ue);
            });
          }
          var Q = I(j, 2);
          {
            var W = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ge, me) => {
                  var ce = q2();
                  D(ge, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(Q, (ae) => {
              u() && ae(W);
            });
          }
          X(O), D(M, O);
        },
        $$slots: { default: !0 }
      });
    };
    xe(S, ($) => {
      (s() || l() || u()) && $(E);
    });
  }
  var V = I(S, 2), P = I(Y(V), 2), T = Y(P);
  md(T, {
    items: x,
    activeKeys: v,
    onChange: ($, M) => {
      var z;
      w(r(), { expand: M == null ? void 0 : M.includes("key") }), (z = f()) == null || z(M != null && M.includes("key") ? "key" : "");
    }
  }), X(P), X(V);
  var A = I(V, 2);
  {
    var L = ($) => {
      Un($, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(A, ($) => {
      d() && $(L);
    });
  }
  var B = I(A, 2);
  {
    var H = ($) => {
      Un($, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(B, ($) => {
      c() && $(H);
    });
  }
  var N = I(B, 2);
  return lr(N, () => i() ?? ft), D(e, k), fe({
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
  hn,
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
var Q2 = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), J2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ey = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vd(e, t) {
  de(t, !0), Je(e, ty);
  const [n, r] = ot(), o = () => U(h(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var P, T;
    return {
      ...i(),
      ...(T = (P = o()) == null ? void 0 : P.data) == null ? void 0 : T.parameters[a()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (P, T) => {
    c(s, (A) => {
      let L = A.data.parameters;
      return L[a()][P] = T, { parameters: L };
    });
  }, f = (P) => {
    const T = P.target.value;
    d("name", T);
  }, v = (P) => {
    const T = P.target.checked;
    d("required", T);
  }, w = (P) => {
    const T = P.value;
    T && d("dataType", T);
  };
  let b;
  const x = () => {
    c(s, (P) => {
      let T = P.data.parameters;
      return T.splice(a(), 1), { parameters: [...T] };
    }), b == null || b.hide();
  };
  var _ = ey(), g = be(_), C = Y(g);
  $t(C, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), X(g);
  var y = I(g, 2), k = Y(y);
  gd(k, {
    get checked() {
      return h(u).required;
    },
    onchange: v
  }), X(y);
  var S = I(y, 2), E = Y(S);
  Cn(
    Oo(E, {
      placement: "bottom",
      floating: (P) => {
        var T = Q2(), A = Y(T), L = I(Y(A));
        const B = /* @__PURE__ */ Pe(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        un(L, {
          items: Pd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return h(B);
          }
        }), X(A);
        var H = I(A, 2), N = I(Y(H));
        St(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return h(u).defaultValue;
          },
          onchange: (Z) => {
            const K = Z.target.value;
            d("defaultValue", K);
          }
        }), X(H);
        var $ = I(H, 2), M = I(Y($));
        St(M, {
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
        var z = I($, 2), O = Y(z);
        Fe(O, {
          onclick: x,
          children: (Z, K) => {
            Me();
            var j = Be("删除");
            D(Z, j);
          },
          $$slots: { default: !0 }
        }), X(z), X(T), D(P, T);
      },
      children: (P, T) => {
        Fe(P, {
          class: "input-btn-more",
          children: (A, L) => {
            var B = J2();
            D(A, B);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), X(S), D(e, _);
  var V = fe({
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
var ny = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Nd(e, t) {
  de(t, !0), Je(e, iy);
  const [n, r] = ot(), o = () => U(h(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Pe(() => pr(i)), s = /* @__PURE__ */ Pe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = oy(), u = Y(l);
  {
    var c = (f) => {
      var v = ny();
      Me(4), D(f, v);
    };
    xe(u, (f) => {
      h(s).length !== 0 && f(c);
    });
  }
  var d = I(u, 2);
  Tt(
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
      D(f, v);
    }
  ), X(l), D(e, l), fe(), r();
}
ie(Nd, {}, [], [], !0);
const zd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), zd(t.children);
  });
}, En = () => {
  const { updateNodeData: e } = Dt();
  return {
    addParameter: (t, n = "parameters", r) => {
      zd(r == null ? void 0 : r.children);
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
var ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Td(e, t) {
  de(t, !0), Je(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, ct(() => r, {
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
      var l = ly(), u = be(l), c = Y(u);
      Qe(c, {
        level: 3,
        children: (v, w) => {
          Me();
          var b = Be("输入参数");
          D(v, b);
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
          D(v, b);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = I(u, 2);
      Nd(f, {}), D(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Td, { data: {} }, [], [], !0);
const Dd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Dd(e, r.source, n));
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
      Dd(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Yl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var dy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const vy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  de(t, !0), Je(e, vy);
  const [n, r] = ot(), o = () => U(h(c), "$node", n), i = () => U(y, "$selectItems", n);
  Wt(() => {
    h(d).refType || _({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var N;
    return {
      ...a(),
      ...(N = o()) == null ? void 0 : N.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Dt(), v = (N, $) => {
    f(u, (M) => {
      let z = M.data[l()];
      return z[s()] = { ...z[s()], [N]: $ }, { [l()]: z };
    });
  }, w = (N) => {
    const $ = N.target.value;
    v("name", $);
  }, b = (N) => {
    const $ = N.target.value;
    v("value", $);
  }, x = (N) => {
    const $ = N.value;
    v("ref", $);
  }, _ = (N) => {
    const $ = N.value;
    v("refType", $);
  };
  let g;
  const C = () => {
    f(u, (N) => {
      let $ = N.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), g == null || g.hide();
  }, y = cy();
  var k = fy(), S = be(k), E = Y(S);
  $t(E, {
    style: "width: 100%;",
    get value() {
      return h(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), X(S);
  var V = I(S, 2), P = Y(V);
  {
    var T = (N) => {
      $t(N, {
        get value() {
          return h(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (N, $) => {
      {
        var M = (z) => {
          const O = /* @__PURE__ */ Pe(() => [h(d).ref]);
          un(z, {
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
          N,
          (z) => {
            h(d).refType !== "input" && z(M);
          },
          $
        );
      }
    };
    xe(P, (N) => {
      h(d).refType === "fixed" ? N(T) : N(A, !1);
    });
  }
  X(V);
  var L = I(V, 2), B = Y(L);
  Cn(
    Oo(B, {
      placement: "bottom",
      floating: (N) => {
        var $ = dy(), M = Y($), z = I(Y(M));
        const O = /* @__PURE__ */ Pe(() => h(d).refType ? [h(d).refType] : []);
        un(z, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(O);
          },
          onSelect: _
        }), X(M);
        var Z = I(M, 2), K = I(Y(Z));
        St(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const ge = ae.target.value;
            v("defaultValue", ge);
          }
        }), X(Z);
        var j = I(Z, 2), ue = I(Y(j));
        St(ue, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const ge = ae.target.value;
            v("description", ge);
          }
        }), X(j);
        var Q = I(j, 2), W = Y(Q);
        Fe(W, {
          onclick: C,
          children: (ae, ge) => {
            Me();
            var me = Be("删除");
            D(ae, me);
          },
          $$slots: { default: !0 }
        }), X(Q), X($), D(N, $);
      },
      children: (N, $) => {
        Ui(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => g = N,
    () => g
  ), X(L), D(e, k);
  var H = fe({
    get parameter() {
      return a();
    },
    set parameter(N) {
      a(N), p();
    },
    get index() {
      return s();
    },
    set index(N) {
      s(N), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(N) {
      l(N), p();
    }
  });
  return r(), H;
}
ie(Ld, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), gy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  de(t, !0), Je(e, my);
  const [n, r] = ot(), o = () => U(h(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = ht(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = py(), d = Y(c);
  {
    var f = (b) => {
      var x = hy();
      Me(4), D(b, x);
    };
    xe(d, (b) => {
      h(u).length !== 0 && b(f);
    });
  }
  var v = I(d, 2);
  Tt(
    v,
    19,
    () => h(u),
    (b) => b.id,
    (b, x, _) => {
      Ld(b, {
        get parameter() {
          return h(x);
        },
        get index() {
          return h(_);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = gy(), _ = Y(x, !0);
      X(x), ke(() => Rt(_, i())), D(b, x);
    }
  ), X(c), D(e, c);
  var w = fe({
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
var yy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), wy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const xy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Od(e, t) {
  de(t, !0), Je(e, xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, ct(
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
        var l = by(), u = be(l), c = Y(u);
        Qe(c, {
          level: 3,
          children: (v, w) => {
            Me();
            var b = Be("输出参数");
            D(v, b);
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
            D(v, b);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = I(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Od, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), _y = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ky = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Sy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  de(t, !0), Je(e, Sy);
  const [n, r] = ot(), o = () => U(h(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var M;
    let z = (M = o()) == null ? void 0 : M.data[s()], O;
    if (z && a().length > 0) {
      let Z = z;
      for (let K = 0; K < a().length; K++) {
        const j = a()[K];
        K == a().length - 1 ? O = Z[j] : Z = Z[j].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Dt(), f = (M, z) => {
    d(l, (O) => {
      const Z = O.data[s()];
      if (Z && a().length > 0) {
        let K = Z;
        for (let j = 0; j < a().length; j++) {
          const ue = a()[j];
          j == a().length - 1 ? K[ue] = { ...K[ue], [M]: z } : K = Z[ue].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (M) => {
    const z = M.target.value;
    f("name", z);
  }, w = (M) => {
    const z = M.value;
    f("dataType", z);
  };
  let b;
  const x = () => {
    d(l, (M) => {
      let z = M.data[s()];
      if (z && a().length > 0) {
        let O = z;
        for (let Z = 0; Z < a().length; Z++) {
          const K = a()[Z];
          Z == a().length - 1 ? O.splice(K, 1) : O = O[K].children;
        }
      }
      return { [s()]: [...z] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (M) => {
      let z = M.data[s()];
      if (z && a().length > 0) {
        let O = z;
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
      return { [s()]: [...z] };
    });
  };
  var g = ky(), C = be(g), y = Y(C);
  {
    var k = (M) => {
      var z = et(), O = be(z);
      Tt(O, 17, a, vo, (Z, K) => {
        Me();
        var j = Be(" ");
        D(Z, j);
      }), D(M, z);
    };
    xe(y, (M) => {
      a().length > 1 && M(k);
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
  var V = I(C, 2), P = Y(V);
  const T = /* @__PURE__ */ Pe(() => h(c).dataType ? [h(c).dataType] : []), A = /* @__PURE__ */ Pe(() => h(c).dataTypeDisabled === !0);
  un(P, {
    items: Pd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(T);
    },
    get disabled() {
      return h(A);
    },
    onSelect: w
  });
  var L = I(P, 2);
  {
    var B = (M) => {
      Fe(M, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (z, O) => {
          var Z = $y();
          D(z, Z);
        },
        $$slots: { default: !0 }
      });
    };
    xe(L, (M) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && M(B);
    });
  }
  X(V);
  var H = I(V, 2), N = Y(H);
  Cn(
    Oo(N, {
      placement: "bottom",
      floating: (M) => {
        var z = _y(), O = Y(z), Z = I(Y(O));
        const K = /* @__PURE__ */ Pe(() => h(c).defaultValue || "");
        St(Z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return h(K);
          },
          onchange: (ge) => {
            const me = ge.target.value;
            f("defaultValue", me);
          }
        }), X(O);
        var j = I(O, 2), ue = I(Y(j));
        const Q = /* @__PURE__ */ Pe(() => h(c).description || "");
        St(ue, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return h(Q);
          },
          onchange: (ge) => {
            const me = ge.target.value;
            f("description", me);
          }
        }), X(j);
        var W = I(j, 2);
        {
          var ae = (ge) => {
            var me = Cy(), ce = Y(me);
            Fe(ce, {
              onclick: x,
              children: (Ve, oe) => {
                Me();
                var ee = Be("删除");
                D(Ve, ee);
              },
              $$slots: { default: !0 }
            }), X(me), D(ge, me);
          };
          xe(W, (ge) => {
            h(c).deleteDisabled !== !0 && ge(ae);
          });
        }
        X(z), D(M, z);
      },
      children: (M, z) => {
        Ui(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => b = M,
    () => b
  ), X(H), D(e, g);
  var $ = fe({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), p();
    },
    get position() {
      return a();
    },
    set position(M) {
      a(M), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(M) {
      s(M), p();
    }
  });
  return r(), $;
}
ie(Ad, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ re("<!> <!>", 1), Hy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), My = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Py = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  de(t, !0), Je(e, Vy);
  const [n, r] = ot(), o = () => U(h(u), "$node", n), i = (x, _ = ft, g = ft) => {
    var C = et(), y = be(C);
    Tt(
      y,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, S, E) => {
        var V = Ey(), P = be(V);
        const T = /* @__PURE__ */ Pe(() => [...g(), h(E)]);
        Ad(P, {
          get parameter() {
            return h(S);
          },
          get position() {
            return h(T);
          },
          get dataKeyName() {
            return s();
          }
        });
        var A = I(P, 2);
        {
          var L = (B) => {
            var H = /* @__PURE__ */ pe(() => [...g(), h(E)]);
            i(B, () => h(S).children, () => h(H));
          };
          xe(A, (B) => {
            h(S).children && B(L);
          });
        }
        D(k, V);
      },
      (k) => {
        var S = et(), E = be(S);
        {
          var V = (P) => {
            var T = Hy(), A = Y(T, !0);
            X(T), ke(() => Rt(A, a())), D(P, T);
          };
          xe(E, (P) => {
            g().length === 0 && P(V);
          });
        }
        D(k, S);
      }
    ), D(x, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Py(), f = Y(d);
  {
    var v = (x) => {
      var _ = My();
      Me(4), D(x, _);
    };
    xe(f, (x) => {
      h(c).length !== 0 && x(v);
    });
  }
  var w = I(f, 2);
  i(w, () => h(c) || [], () => []), X(d), D(e, d);
  var b = fe({
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
var Ny = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), zy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ re('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Id(e, t) {
  de(t, !0), Je(e, Ly);
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
  const { updateNodeData: l } = Dt();
  return hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ny();
        D(u, c);
      },
      children: (u, c) => {
        var d = Dy(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (ee, Ne) => {
            Me();
            var He = Be("输入参数");
            D(ee, He);
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
          children: (ee, Ne) => {
            var He = zy();
            D(ee, He);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (ee, Ne) => {
            Me();
            var He = Be("模型设置");
            D(ee, He);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), g = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        un(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ee) => {
            const Ne = ee.value;
            l(o, () => ({ llmId: Ne }));
          },
          get value() {
            return h(C);
          }
        });
        var y = I(g, 2);
        Ui(y, {}), X(_);
        var k = I(_, 4), S = Y(k), E = Y(S), V = Y(E);
        X(E);
        var P = I(E, 2);
        oo(P), X(S), X(k);
        var T = I(k, 2), A = Y(T), L = Y(A), B = Y(L);
        X(L);
        var H = I(L, 2);
        oo(H), X(A), X(T);
        var N = I(T, 2), $ = Y(N), M = Y($), z = Y(M);
        X(M);
        var O = I(M, 2);
        oo(O), X($), X(N);
        var Z = I(N, 4), K = Y(Z);
        const j = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        St(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(j);
          },
          oninput: (ee) => {
            l(o, { systemPrompt: ee.target.value });
          }
        }), X(Z);
        var ue = I(Z, 4), Q = Y(ue);
        const W = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        St(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(W);
          },
          oninput: (ee) => {
            l(o, { userPrompt: ee.target.value });
          }
        }), X(ue);
        var ae = I(ue, 2), ge = Y(ae);
        Qe(ge, {
          level: 3,
          mt: "10px",
          children: (ee, Ne) => {
            Me();
            var He = Be("输出参数");
            D(ee, He);
          },
          $$slots: { default: !0 }
        });
        var me = I(ge, 2);
        const ce = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        un(me, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ee) => {
            const Ne = ee.value;
            l(o, () => ({ outType: Ne }));
          },
          get value() {
            return h(ce);
          }
        });
        var Ve = I(me, 2);
        Fe(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ee, Ne) => {
            var He = Ty();
            D(ee, He);
          },
          $$slots: { default: !0 }
        }), X(ae);
        var oe = I(ae, 2);
        In(oe, {}), ke(() => {
          Rt(V, `Temperature: ${n().temperature ?? 0.5}`), na(P, n().temperature ?? 0.5), Rt(B, `Top P: ${n().topP ?? 0.9}`), na(H, n().topP ?? 0.9), Rt(z, `Top K: ${n().topK ?? 50}`), na(O, n().topK ?? 50);
        }), Xe("mousedown", P, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", P, (ee) => l(o, { temperature: parseFloat(ee.target.value) })), Xe("mousedown", H, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", H, (ee) => l(o, { topP: parseFloat(ee.target.value) })), Xe("mousedown", O, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", O, (ee) => l(o, { topK: parseInt(ee.target.value) })), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Id, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const By = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), Je(e, By);
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
  const o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Dt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Oy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = be(c), f = Y(d);
        Qe(f, {
          level: 3,
          children: (T, A) => {
            Me();
            var L = Be("输入参数");
            D(T, L);
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
          children: (T, A) => {
            var L = Ay();
            D(T, L);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = I(d, 2);
        Zt(w, {});
        var b = I(w, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Me();
            var L = Be("代码");
            D(T, L);
          },
          $$slots: { default: !0 }
        });
        var x = I(b, 4), _ = Y(x);
        const g = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        un(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (T) => {
            const A = T.value;
            a(o, () => ({ engine: A }));
          },
          get value() {
            return h(g);
          }
        }), X(x);
        var C = I(x, 4), y = Y(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
        St(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (T) => {
            a(o, () => ({ code: T.target.value }));
          },
          get value() {
            return h(k);
          }
        }), X(C);
        var S = I(C, 2), E = Y(S);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Me();
            var L = Be("输出参数");
            D(T, L);
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
          children: (T, A) => {
            var L = Iy();
            D(T, L);
          },
          $$slots: { default: !0 }
        }), X(S);
        var P = I(S, 2);
        In(P, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Zd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Xy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  de(t, !0), Je(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Dt();
  return Fn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), hn(e, ct(
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
        var u = Yy(), c = be(u), d = Y(c);
        Qe(d, {
          level: 3,
          children: (k, S) => {
            Me();
            var E = Be("输入参数");
            D(k, E);
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
          children: (k, S) => {
            var E = Xy();
            D(k, E);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = I(c, 2);
        Zt(v, {});
        var w = I(v, 2);
        Qe(w, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Me();
            var E = Be("代码");
            D(k, E);
          },
          $$slots: { default: !0 }
        });
        var b = I(w, 4), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().template || "");
        St(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return h(_);
          }
        }), X(b);
        var g = I(b, 2), C = Y(g);
        Qe(C, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Me();
            var E = Be("输出参数");
            D(k, E);
          },
          $$slots: { default: !0 }
        }), X(g);
        var y = I(g, 2);
        In(y, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(Bd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Jy = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), ew = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), tw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Rd(e, t) {
  de(t, !0), Je(e, rw);
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
  ], i = ht(), { addParameter: a } = En(), { updateNodeData: s } = Dt();
  return hn(e, ct(
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
        var c = nw(), d = be(c), f = Y(d), v = Y(f);
        const w = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        un(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const le = se.value;
            s(i, () => ({ method: le }));
          },
          get value() {
            return h(w);
          }
        }), X(f);
        var b = I(f, 2), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().url || "");
        $t(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return h(_);
          }
        }), X(b), X(d);
        var g = I(d, 2), C = Y(g);
        Qe(C, {
          level: 3,
          children: (se, le) => {
            Me();
            var Ce = Be("Http 头信息");
            D(se, Ce);
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
          children: (se, le) => {
            var Ce = qy();
            D(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(g);
        var k = I(g, 2);
        Zt(k, { dataKeyName: "headers" });
        var S = I(k, 2), E = Y(S);
        Qe(E, {
          level: 3,
          children: (se, le) => {
            Me();
            var Ce = Be("参数");
            D(se, Ce);
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
          children: (se, le) => {
            var Ce = jy();
            D(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(S);
        var P = I(S, 2);
        Zt(P, { dataKeyName: "urlParameters" });
        var T = I(P, 2);
        Qe(T, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Me();
            var Ce = Be("Body");
            D(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var A = I(T, 2), L = Y(A), B = Y(L);
        const H = /* @__PURE__ */ Pe(() => !n().bodyType);
        $t(B, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(H);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "" });
          }
        }), Me(), X(L);
        var N = I(L, 2), $ = Y(N);
        const M = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        $t($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(M);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "form-data" });
          }
        }), Me(), X(N);
        var z = I(N, 2), O = Y(z);
        const Z = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        $t(O, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(Z);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Me(), X(z);
        var K = I(z, 2), j = Y(K);
        const ue = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        $t(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(ue);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "json" });
          }
        }), Me(), X(K);
        var Q = I(K, 2), W = Y(Q);
        const ae = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        $t(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(ae);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "raw" });
          }
        }), Me(), X(Q), X(A);
        var ge = I(A, 2);
        {
          var me = (se) => {
            var le = Gy(), Ce = be(le), Ke = Y(Ce);
            Qe(Ke, {
              level: 3,
              children: (it, J) => {
                Me();
                var Ae = Be("参数");
                D(it, Ae);
              },
              $$slots: { default: !0 }
            });
            var ze = I(Ke, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, J) => {
                var Ae = Fy();
                D(it, Ae);
              },
              $$slots: { default: !0 }
            }), X(Ce);
            var st = I(Ce, 2);
            Zt(st, { dataKeyName: "fromData" }), D(se, le);
          };
          xe(ge, (se) => {
            n().bodyType === "form-data" && se(me);
          });
        }
        var ce = I(ge, 2);
        {
          var Ve = (se) => {
            var le = Qy(), Ce = be(le), Ke = Y(Ce);
            Qe(Ke, {
              level: 3,
              children: (it, J) => {
                Me();
                var Ae = Be("参数");
                D(it, Ae);
              },
              $$slots: { default: !0 }
            });
            var ze = I(Ke, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, J) => {
                var Ae = Uy();
                D(it, Ae);
              },
              $$slots: { default: !0 }
            }), X(Ce);
            var st = I(Ce, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), D(se, le);
          };
          xe(ce, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(Ve);
          });
        }
        var oe = I(ce, 2);
        {
          var ee = (se) => {
            var le = Jy(), Ce = Y(le);
            St(Ce, {
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
          xe(oe, (se) => {
            n().bodyType === "json" && se(ee);
          });
        }
        var Ne = I(oe, 2);
        {
          var He = (se) => {
            var le = ew(), Ce = Y(le);
            St(Ce, {
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
          xe(Ne, (se) => {
            n().bodyType === "raw" && se(He);
          });
        }
        var Re = I(Ne, 2), te = Y(Re);
        Qe(te, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Me();
            var Ce = Be("输出参数");
            D(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var We = I(te, 2);
        Fe(We, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, le) => {
            var Ce = tw();
            D(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(Re);
        var Ue = I(Re, 2);
        In(Ue, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Rd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), iw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  de(t, !0), Je(e, sw);
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
  const { updateNodeData: l } = Dt();
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
  }), hn(e, ct(
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
        var d = aw(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (P, T) => {
            Me();
            var A = Be("输入参数");
            D(P, A);
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
          children: (P, T) => {
            var A = iw();
            D(P, A);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (P, T) => {
            Me();
            var A = Be("知识库设置");
            D(P, A);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), g = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (P) => {
            const T = P.value;
            l(o, () => ({ knowledgeId: T }));
          },
          get value() {
            return h(C);
          }
        }), X(_);
        var y = I(_, 4), k = Y(y);
        $t(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(y);
        var S = I(y, 2), E = Y(S);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (P, T) => {
            Me();
            var A = Be("输出参数");
            D(P, A);
          },
          $$slots: { default: !0 }
        }), X(S);
        var V = I(S, 2);
        In(V, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Xd, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), uw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  de(t, !0), Je(e, dw);
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
  const { updateNodeData: l } = Dt();
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
  }), hn(e, ct(
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
        var d = cw(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (N, $) => {
            Me();
            var M = Be("输入参数");
            D(N, M);
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
          children: (N, $) => {
            var M = uw();
            D(N, M);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Me();
            var M = Be("搜索引擎设置");
            D(N, M);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), g = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (N) => {
            const $ = N.value;
            l(o, () => ({ knowledgeId: $ }));
          },
          get value() {
            return h(C);
          }
        }), X(_);
        var y = I(_, 4), k = Y(y);
        $t(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), X(y);
        var S = I(y, 4), E = Y(S);
        $t(E, { placeholder: "请输入关键字", style: "width: 100%" }), X(S);
        var V = I(S, 4), P = Y(V);
        $t(P, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(V);
        var T = I(V, 4), A = Y(T);
        St(A, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), X(T);
        var L = I(T, 2), B = Y(L);
        Qe(B, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Me();
            var M = Be("输出参数");
            D(N, M);
          },
          $$slots: { default: !0 }
        }), X(L);
        var H = I(L, 2);
        In(H, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Yd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), vw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const gw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  de(t, !0), Je(e, gw);
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
  }), hn(e, ct(
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
        var c = hw(), d = be(c), f = Y(d);
        Qe(f, {
          level: 3,
          children: (g, C) => {
            Me();
            var y = Be("循环变量");
            D(g, y);
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
            D(g, y);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = I(d, 2);
        Zt(w, {});
        var b = I(w, 2), x = Y(b);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (g, C) => {
            Me();
            var y = Be("输出参数");
            D(g, y);
          },
          $$slots: { default: !0 }
        }), X(b);
        var _ = I(b, 2);
        In(_, {}), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
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
  startNode: Td,
  codeNode: Zd,
  llmNode: Id,
  templateNode: Bd,
  httpNode: Rd,
  knowledgeNode: Xd,
  searchEngineNode: Yd,
  loopNode: Wd,
  endNode: Od
};
var mw = /* @__PURE__ */ re("<!> ", 1);
function Ia(e, t) {
  de(t, !0);
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
      ke(() => Rt(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
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
var yw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ww = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), bw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
  de(t, !0);
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
    const x = Object.keys(s).sort((_, g) => (s[_].sortNo || 0) - (s[g].sortNo || 0));
    for (let _ of x)
      a.push({
        icon: s[_].icon,
        title: s[_].title,
        type: _
      });
  }
  var l = bw(), u = Y(l), c = Y(u), d = Y(c);
  pd(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      F(n, x.value.toString(), !0);
    }
  }), X(c);
  var f = I(c, 2), v = Y(f);
  Tt(v, 21, () => o, vo, (x, _) => {
    Ia(x, ct(() => h(_)));
  }), X(v);
  var w = I(v, 2);
  Tt(w, 21, () => a, vo, (x, _) => {
    Ia(x, ct(() => h(_)));
  }), X(w), X(f), X(u);
  var b = I(u, 2);
  Fe(b, {
    onclick: () => {
      F(r, h(r) ? "" : "show", !0);
    },
    children: (x, _) => {
      var g = et(), C = be(g);
      {
        var y = (S) => {
          var E = yw();
          D(S, E);
        }, k = (S) => {
          var E = ww();
          D(S, E);
        };
        xe(C, (S) => {
          h(r) === "show" ? S(y) : S(k, !1);
        });
      }
      D(x, g);
    },
    $$slots: { default: !0 }
  }), X(l), ke(() => {
    mt(l, 1, `tf-toolbar ${h(r) ?? ""}`), dt(v, `display: ${(h(n) === "base" ? "flex" : "none") ?? ""}`), dt(w, `display: ${(h(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), D(e, l), fe();
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
var _w = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Sw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ re("<!> <div></div> <!>", 1);
const Mw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  var n;
  de(t, !0), Je(e, Mw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = En(), s = Dt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = tr().customNodes[t.type];
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
  return hn(e, ct(
    {
      get data() {
        return h(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var w = et(), b = be(w);
        rs(b, () => c.icon), D(v, w);
      },
      children: (v, w) => {
        var b = Hw(), x = be(b);
        {
          var _ = (k) => {
            var S = kw(), E = be(S), V = Y(E);
            Qe(V, {
              level: 3,
              children: (A, L) => {
                Me();
                var B = Be("输入参数");
                D(A, B);
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
              children: (A, L) => {
                var B = _w();
                D(A, B);
              },
              $$slots: { default: !0 }
            }), X(E);
            var T = I(E, 2);
            Zt(T, {}), D(k, S);
          };
          xe(x, (k) => {
            c.parametersEnable !== !1 && k(_);
          });
        }
        var g = I(x, 2);
        Cn(g, (k) => d = k, () => d);
        var C = I(g, 2);
        {
          var y = (k) => {
            var S = Ew(), E = be(S), V = Y(E);
            Qe(V, {
              level: 3,
              mt: "10px",
              children: (A, L) => {
                Me();
                var B = Be("输出参数");
                D(A, B);
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
              children: (A, L) => {
                var B = Sw();
                D(A, B);
              },
              $$slots: { default: !0 }
            }), X(E);
            var T = I(E, 2);
            In(T, {}), D(k, S);
          };
          xe(C, (k) => {
            c.outputDefsEnable !== !1 && k(y);
          });
        }
        ke(() => {
          dt(g, c.rootStyle || ""), mt(g, 1, fn(c.rootClass), "svelte-c71dg3");
        }), D(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
ie(qd, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Vw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Nw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const zw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function jd(e, t) {
  de(t, !0), Je(e, zw);
  const n = m(t, "onInit", 7), r = Dt();
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
    }), P = (E = S.dataTransfer) == null ? void 0 : E.getData("application/tinyflow"), T = P ? JSON.parse(P) : {}, A = {
      id: `node_${Zr()}`,
      position: V,
      data: {},
      ...T
    };
    ti.addNode(A), ti.selectNodeOnly(A.id);
  }, { getNode: s } = xw(), l = (S) => {
    const E = s(S.source), V = s(S.target);
    if (S.sourceHandle === "loop_handle" || E.parentId) {
      const P = r.getEdges();
      for (let T of P)
        if (T.target === S.target) {
          const A = s(T.source);
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
    const P = E.fromNode, T = E.fromHandle, A = { position: { ...V.position } };
    if (T.id === "loop_handle" ? A.parentId = P.id : P.parentId && (A.parentId = P.parentId), A.parentId) {
      const L = s(A.parentId);
      A.position = {
        x: V.position.x - L.position.x,
        y: V.position.y - L.position.y
      }, u(A.parentId, V.id), r.updateNode(V.id, A);
    }
  }, { getEdgesByTarget: d } = Cw(), f = (S) => {
    S.edges.forEach((E) => {
      const V = s(E.target);
      if (V.parentId) {
        const P = d(E.target), T = s(V.parentId);
        if (P.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + T.position.x,
              y: V.position.y + T.position.y
            }
          });
        else {
          let A = !1;
          for (let L = 0; L < P.length; L++) {
            const B = P[L], H = s(B.source);
            if (H.parentId || H.type === "loopNode") {
              A = !0;
              break;
            }
          }
          A || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + T.position.x,
              y: V.position.y + T.position.y
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
  var _ = Nw(), g = Y(_);
  Kd(g, {});
  var C = I(g, 2);
  const y = /* @__PURE__ */ Pe(() => ({ ...pw, ...b })), k = /* @__PURE__ */ Pe(() => ({
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
        return h(k);
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
        var T = I(P, 2);
        ld(T, {});
        var A = I(T, 2);
        vd(A, {});
        var L = I(A, 2);
        {
          var B = (H) => {
            zo(H, {
              children: (N, $) => {
                var M = Pw(), z = I(Y(M), 4), O = Y(z);
                St(O, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Z) => {
                  }
                }), X(z), X(M), D(N, M);
              },
              $$slots: { default: !0 }
            });
          };
          xe(L, (H) => {
            h(o) && H(B);
          });
        }
        D(S, V);
      },
      $$slots: { default: !0 }
    }
  )), X(_), D(e, _), fe({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), p();
    }
  });
}
ie(jd, { onInit: {} }, [], [], !0);
function Tw(e, t) {
  de(t, !0);
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
  }), fe({
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
customElements.define("tinyflow-component", ie(Tw, { options: {}, onInit: {} }, [], [], !1));
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
      r.value && (o = new Tm({
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
