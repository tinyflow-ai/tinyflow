import { defineComponent as cf, ref as df, onMounted as ff, onUnmounted as vf, createElementBlock as gf, openBlock as hf, normalizeStyle as pf, normalizeClass as mf } from "vue";
var yf = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, wf = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mt = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Wl("Cannot " + n), lt = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), bf = (e, t, n) => (Za(e, t, "access private method"), n);
const xf = "5";
var Os;
typeof window < "u" && ((Os = window.__svelte ?? (window.__svelte = {})).v ?? (Os.v = /* @__PURE__ */ new Set())).add(xf);
let Br = !1, $f = !1;
function Cf() {
  Br = !0;
}
Cf();
const Ba = 1, Ra = 2, Kl = 4, _f = 8, kf = 16, Ef = 1, Sf = 2, ql = 4, Pf = 8, Hf = 16, jl = 1, Mf = 2, Xa = "[", Ya = "[!", Wa = "]", $r = {}, Pt = Symbol(), Vf = "http://www.w3.org/1999/xhtml", zf = "http://www.w3.org/2000/svg", Nf = !1;
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var _o = Array.isArray, Of = Array.prototype.indexOf, Ka = Array.from, ri = Object.keys, ao = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, Df = Object.prototype, Lf = Array.prototype, qa = Object.getPrototypeOf, Ds = Object.isExtensible;
function Fr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Tf(e) {
  return e();
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const sn = 2, Gl = 4, Mi = 8, ja = 16, Tn = 32, vr = 64, oi = 128, Bt = 256, ii = 512, kt = 1024, wn = 2048, Jn = 4096, zn = 8192, Vi = 16384, If = 32768, Rr = 65536, Af = 1 << 17, Zf = 1 << 19, Ul = 1 << 20, ga = 1 << 21, Wn = Symbol("$state"), Fa = Symbol("legacy props"), Bf = Symbol("");
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
function At(e) {
  Ee = e;
}
let Te;
function _t(e) {
  if (e === null)
    throw zi(), $r;
  return Te = e;
}
function bn() {
  return _t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ kn(Te)
  );
}
function X(e) {
  if (Ee) {
    if (/* @__PURE__ */ kn(Te) !== null)
      throw zi(), $r;
    Te = e;
  }
}
function Me(e = 1) {
  if (Ee) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ kn(n);
    Te = n;
  }
}
function ha() {
  for (var e = 0, t = Te; ; ) {
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
            a(() => /* @__PURE__ */ xt(Pt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && F(c, d);
          }
          F(u, Pt), Ls(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Wn)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Vn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ xt(Ft(f ? s[l] : Pt))), n.set(l, d)), d !== void 0) {
          var v = g(d);
          return v === Pt ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Pt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Vn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ xt(d ? Ft(s[l]) : Pt)), n.set(l, c));
          var f = g(c);
          if (f === Pt)
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
            b !== void 0 ? F(b, Pt) : w in s && (b = a(() => /* @__PURE__ */ xt(Pt)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Vn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ xt(void 0)), F(
          f,
          a(() => Ft(u))
        ), n.set(l, f)) : (v = f.v !== Pt, F(
          f,
          a(() => Ft(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= _.v && F(_, h + 1);
          }
          Ls(o);
        }
        return !0;
      },
      ownKeys(s) {
        g(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Pt;
        });
        for (var [u, c] of n)
          c.v !== Pt && !(u in s) && l.push(u);
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
var Ht, Ql, Jl, eu;
function pa() {
  if (Ht === void 0) {
    Ht = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Jl = Vn(t, "firstChild").get, eu = Vn(t, "nextSibling").get, Ds(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ds(n) && (n.__t = void 0);
  }
}
function On(e = "") {
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
  if (!Ee)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(Te)
  );
  if (n === null)
    n = Te.appendChild(On());
  else if (t && n.nodeType !== 3) {
    var r = On();
    return n == null || n.before(r), _t(r), r;
  }
  return _t(n), n;
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
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ kn(n) : n;
  }
  return Te;
}
function Z(e, t = 1, n = !1) {
  let r = Ee ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ kn(r);
  if (!Ee)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = On();
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
function Pr(e) {
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
  const t = /* @__PURE__ */ Pr(e);
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Pr(e);
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
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = hu());
}
function iu(e) {
  je === null && qe === null && Yf(), qe !== null && qe.f & Bt && je === null && Xf(), Eo && Rf();
}
function Qf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
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
      Oi(i), i.f |= If;
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
  const t = gr(Mi, null, !1);
  return Jt(t, kt), t.teardown = e, t;
}
function Fn(e) {
  iu();
  var t = je !== null && (je.f & Tn) !== 0 && Ye !== null && !Ye.m;
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
    var r = It(e);
    return r;
  }
}
function Jf(e) {
  return iu(), Xr(e);
}
function e1(e) {
  const t = gr(vr, e, !0);
  return () => {
    Qt(t);
  };
}
function t1(e) {
  const t = gr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Qt(t), r(void 0);
    }) : (Qt(t), r(void 0));
  });
}
function It(e) {
  return gr(Gl, e, !1);
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
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & kt && Jt(n, Jn), Yr(n) && Oi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Xr(e) {
  return gr(Mi, e, !0);
}
function ke(e, t = [], n = Pr) {
  const r = t.map(n);
  return hr(() => e(...r.map(g)));
}
function hr(e, t = 0) {
  return gr(Mi | ja | t, e, !0);
}
function Dn(e, t = !0) {
  return gr(Mi | Tn, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Eo, r = qe;
    Is(!0), xn(null);
    try {
      t.call(null);
    } finally {
      Is(n), xn(r);
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
    t.f & Tn || Qt(t), t = n;
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
function Hr(e, t) {
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
  if (!(e.f & zn)) {
    if (e.f ^= zn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & Tn) !== 0;
      es(r, t, i ? n : !1), r = o;
    }
  }
}
function lo(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & zn) {
    e.f ^= zn, e.f & kt || (e.f ^= kt), Yr(e) && (Jt(e, wn), Di(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & Tn) !== 0;
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
function Ts() {
  uo.length > 0 && du(), co.length > 0 && fu();
}
let jo = !1, ai = !1, si = null, ir = !1, Eo = !1;
function Is(e) {
  Eo = e;
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
  qe !== null && qe.f & ga && (Ut === null ? i1([e]) : Ut.push(e));
}
let bt = null, Tt = 0, jt = null;
function a1(e) {
  jt = e;
}
let gu = 1, li = 0, Xn = !1;
function hu() {
  return ++gu;
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
function Ni(e, t, n, r) {
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
  var t, n = bt, r = Tt, o = jt, i = qe, a = Xn, s = Ut, l = Ye, u = pn, c = e.f;
  bt = /** @type {null | Value[]} */
  null, Tt = 0, jt = null, Xn = (c & Bt) !== 0 && (pn || !ir || qe === null), qe = c & (Tn | vr) ? null : e, Ut = null, Zs(e.ctx), pn = !1, li++, e.f |= ga;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (bt !== null) {
      var v;
      if (ui(e, Tt), f !== null && Tt > 0)
        for (f.length = Tt + bt.length, v = 0; v < bt.length; v++)
          f[Tt + v] = bt[v];
      else
        e.deps = f = bt;
      if (!Xn)
        for (v = Tt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Tt < f.length && (ui(e, Tt), f.length = Tt);
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
    bt = n, Tt = r, jt = o, qe = i, Xn = a, Ut = s, Zs(l), pn = u, e.f ^= ga;
  }
}
function u1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Of.call(n, e);
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
function Oi(e) {
  var t = e.f;
  if (!(t & Vi)) {
    Jt(e, kt);
    var n = je, r = Ye, o = ir;
    je = e, ir = !0;
    try {
      t & ja ? n1(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = gu;
      var a = e.deps, s;
      Nf && $f && e.f & wn;
    } catch (l) {
      Ni(l, e, n, r || e.ctx);
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
      if (!(r.f & (Vi | zn)))
        try {
          Yr(r) && (Oi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          Ni(o, r, null, r.ctx);
        }
    }
}
function Di(e) {
  ai || (ai = !0, queueMicrotask(yu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | Tn)) {
      if (!(n & kt)) return;
      t.f ^= kt;
    }
  }
  ro.push(t);
}
function f1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Tn | vr)) !== 0, i = o && (r & kt) !== 0;
    if (!i && !(r & zn)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= kt;
      else {
        var a = qe;
        try {
          qe = n, Yr(n) && Oi(n);
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
  for (Ts(); ro.length > 0; )
    ai = !0, yu(), Ts();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & sn) !== 0;
  if (qe !== null && !pn) {
    if (!(Ut != null && Ut.includes(e))) {
      var r = qe.deps;
      e.rv < li && (e.rv = li, bt === null && r !== null && r[Tt] === e ? Tt++ : bt === null ? bt = [e] : (!Xn || !bt.includes(e)) && bt.push(e));
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
  e, Yr(o) && ou(o)), Eo && fo.has(e) ? fo.get(e) : e.v;
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
function Mr(e, t) {
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
  const n = Mr(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t = !1) {
  var n;
  const r = Mr(e);
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
    Eo ? fo.set(e, t) : fo.set(e, n), e.v = t, e.f & sn && (e.f & wn && ru(
      /** @type {Derived} */
      e
    ), Jt(e, e.f & Bt ? Jn : kt)), e.wv = hu(), wu(e, wn), Li() && je !== null && je.f & kt && !(je.f & (Tn | vr)) && (jt === null ? a1([e]) : jt.push(e));
  }
  return t;
}
function As(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
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
function g1(e) {
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
    r2: Mr(!1)
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
          Gn(i.effect), xn(i.reaction), It(i.fn);
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
  return Ye === null && Hi(), Ye.c ?? (Ye.c = new Map(h1(Ye) || void 0));
}
function h1(e) {
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
function E1(e) {
  Ee && /* @__PURE__ */ Ct(e) !== null && Ga(e);
}
let Bs = !1;
function S1() {
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
function P1(e) {
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
      return P1(() => n == null ? void 0 : n.call(this, i));
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
function Ti(e) {
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
              var [_, ...h] = x;
              _.apply(a, [e, ...h]);
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
  var n = (t & jl) !== 0, r = (t & Mf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ee)
      return zt(Te, null), Te;
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
    if (Ee)
      return zt(Te, null), Te;
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
  if (!Ee) {
    var t = On(e + "");
    return zt(t, t), t;
  }
  var n = Te;
  return n.nodeType !== 3 && (n.before(n = On()), _t(n)), zt(n, n), n;
}
function et() {
  if (Ee)
    return zt(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), zt(t, n), e;
}
function T(e, t) {
  if (Ee) {
    je.nodes_end = Te, bn();
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
function H1(e, t) {
  pa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ee, o = Te;
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
    At(!0), _t(
      /** @type {Comment} */
      i
    ), bn();
    const a = Cu(e, { ...t, anchor: i });
    if (Te === null || Te.nodeType !== 8 || /** @type {Comment} */
    Te.data !== Wa)
      throw zi(), $r;
    return At(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && Kf(), pa(), Ga(n), At(!1), $u(e, t);
    throw a;
  } finally {
    At(r), _t(o);
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
    var d = n ?? t.appendChild(On());
    return Dn(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Ye
        );
        f.c = i;
      }
      o && (r.$$events = o), Ee && zt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ee && (je.nodes_end = Te), i && fe();
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
function M1(e, t) {
  const n = ba.get(e);
  return n ? (ba.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Ee && n === 0 && bn();
  var o = e, i = null, a = null, s = Pt, l = n > 0 ? Rr : 0, u = !1;
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
      !!s === b && (o = ha(), _t(o), At(!1), w = !0, r = -1);
    }
    s ? (i ? lo(i) : v && (i = Dn(() => v(o))), a && Hr(a, () => {
      a = null;
    })) : (a ? lo(a) : v && (a = Dn(() => v(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), w && At(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ee && (o = Te);
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
function Nt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Ee ? _t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(On());
  }
  Ee && bn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var v = n();
    return _o(v) ? v : v == null ? [] : Ka(v);
  });
  hr(() => {
    var v = g(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Ee) {
      var x = (
        /** @type {Comment} */
        a.data === Ya
      );
      x !== (w === 0) && (a = ha(), _t(a), At(!1), b = !0);
    }
    if (Ee) {
      for (var _ = null, h, C = 0; C < w; C++) {
        if (Te.nodeType === 8 && /** @type {Comment} */
        Te.data === Wa) {
          a = /** @type {Comment} */
          Te, b = !0, At(!1);
          break;
        }
        var y = v[C], k = r(y, C);
        h = _u(
          Te,
          s,
          _,
          null,
          y,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), _ = h;
      }
      w > 0 && _t(ha());
    }
    Ee || z1(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? lo(c) : c = Dn(() => i(a)) : c !== null && Hr(c, () => {
      c = null;
    })), b && At(!0), g(f);
  }), Ee && (a = Te);
}
function z1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & _f) !== 0, f = (o & (Ba | Ra)) !== 0, v = e.length, w = t.items, b = t.first, x = b, _, h = null, C, y = [], k = [], E, S, M, V;
  if (d)
    for (V = 0; V < v; V += 1)
      E = e[V], S = i(E, V), M = w.get(S), M !== void 0 && ((s = M.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(M));
  for (V = 0; V < v; V += 1) {
    if (E = e[V], S = i(E, V), M = w.get(S), M === void 0) {
      var O = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = _u(
        O,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        S,
        V,
        r,
        o,
        a
      ), w.set(S, h), y = [], k = [], x = h.next;
      continue;
    }
    if (f && N1(M, E, V, o), M.e.f & zn && (lo(M.e), d && ((l = M.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(M))), M !== x) {
      if (_ !== void 0 && _.has(M)) {
        if (y.length < k.length) {
          var L = k[0], D;
          h = L.prev;
          var A = y[0], P = y[y.length - 1];
          for (D = 0; D < y.length; D += 1)
            Rs(y[D], L, n);
          for (D = 0; D < k.length; D += 1)
            _.delete(k[D]);
          Bn(t, A.prev, P.next), Bn(t, h, A), Bn(t, P, L), x = L, h = P, V -= 1, y = [], k = [];
        } else
          _.delete(M), Rs(M, x, n), Bn(t, M.prev, M.next), Bn(t, M, h === null ? t.first : h.next), Bn(t, h, M), h = M;
        continue;
      }
      for (y = [], k = []; x !== null && x.k !== S; )
        x.e.f & zn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      M = x;
    }
    y.push(M), h = M, x = M.next;
  }
  if (x !== null || _ !== void 0) {
    for (var N = _ === void 0 ? [] : Ka(_); x !== null; )
      x.e.f & zn || N.push(x), x = x.next;
    var $ = N.length;
    if ($ > 0) {
      var H = o & Kl && v === 0 ? n : null;
      if (d) {
        for (V = 0; V < $; V += 1)
          (u = N[V].a) == null || u.measure();
        for (V = 0; V < $; V += 1)
          (c = N[V].a) == null || c.fix();
      }
      V1(t, N, H, w);
    }
  }
  d && ko(() => {
    var z;
    if (C !== void 0)
      for (M of C)
        (z = M.a) == null || z.apply();
  }), je.first = t.first && t.first.e, je.last = h && h.e;
}
function N1(e, t, n, r) {
  r & Ba && ya(e.v, t), r & Ra ? ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function _u(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ba) !== 0, d = (l & kf) === 0, f = c ? d ? /* @__PURE__ */ ne(o) : Mr(o) : o, v = l & Ra ? Mr(a) : a, w = {
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
    return w.e = Dn(() => s(e, f, v, u), Ee), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
  hr(() => {
    if (a === (a = t() ?? "")) {
      Ee && bn();
      return;
    }
    s !== void 0 && (Qt(s), s = void 0), a !== "" && (s = Dn(() => {
      if (Ee) {
        Te.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ kn(l);
        if (l === null)
          throw zi(), $r;
        zt(Te, u), i = _t(l);
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
  Ee && bn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function O1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = ft, i;
  hr(() => {
    o !== (o = t()) && (i && (Qt(i), i = null), i = Dn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Ee && (r = Te);
}
function ku(e, t, n) {
  Ee && bn();
  var r = e, o, i;
  hr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = Dn(() => n(r, o))));
  }, Rr), Ee && (r = Te);
}
function D1(e, t, n, r, o, i) {
  let a = Ee;
  Ee && bn();
  var s, l, u = null;
  Ee && Te.nodeType === 1 && (u = /** @type {Element} */
  Te, bn());
  var c = (
    /** @type {TemplateNode} */
    Ee ? Te : e
  ), d;
  hr(() => {
    const f = t() || null;
    var v = f === "svg" ? zf : null;
    f !== s && (d && (f === null ? Hr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Qt(d)), f && f !== l && (d = Dn(() => {
      if (u = Ee ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), zt(u, u), r) {
        Ee && _1(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Ee ? /* @__PURE__ */ Ct(u) : u.appendChild(On())
        );
        Ee && (w === null ? At(!1) : _t(w)), r(u, w);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Rr), a && (At(!0), _t(c));
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
function ht(e, t, n) {
  It(() => {
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
function Eu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Eu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function L1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Eu(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? L1(e) : e ?? "";
}
const Xs = [...` 	
\r\f \v\uFEFF`];
function T1(e, t, n) {
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
function I1(e, t) {
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
    var s = T1(n, r, i);
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
    var i = I1(t, r);
    (!Ee || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n == null ? void 0 : n[0], r[0]), ta(e, n == null ? void 0 : n[1], r[1], "important")) : ta(e, n, r));
  return r;
}
const Gr = Symbol("class"), nr = Symbol("style"), Su = Symbol("is custom element"), Pu = Symbol("is html");
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
    e.__on_r = n, o1(n), S1();
  }
}
function na(e, t) {
  var n = os(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function A1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = os(e);
  Ee && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Bf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = os(e), a = i[Su], s = !i[Pu];
  let l = Ee && a;
  l && At(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = fn(n.class) : (r || n[Gr]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
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
          const k = {}, E = "$$" + C;
          let S = C.slice(2);
          var x = y1(S);
          if (p1(S) && (S = S.slice(0, -7), k.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(S, u[E], k), u[E] = null;
          }
          if (y != null)
            if (x)
              e[`__${S}`] = y, Ti([S]);
            else {
              let M = function(V) {
                u[C].call(this, V);
              };
              u[E] = xu(S, e, M, k);
            }
          else x && (e[`__${S}`] = void 0);
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
          A1(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var _ = C;
          s || (_ = b1(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !a && !h)
            if (i[C] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (_ === "value") {
                let S = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = S, k.value = k.__value = E ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = S, k.checked = E ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else h || f.includes(_) && (a || typeof y != "string") ? e[_] = y : typeof y != "function" && ye(e, _, y);
        }
    }
  }
  return l && At(!0), u;
}
function os(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Su]: e.nodeName.includes("-"),
      [Pu]: e.namespaceURI === Vf
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
var rr, io, Fo, xa, Mu;
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
    return r.add(n), lt(this, rr).set(t, r), bf(this, xa, Mu).call(this).observe(t, lt(this, Fo)), () => {
      var o = lt(this, rr).get(t);
      o.delete(n), o.size === 0 && (lt(this, rr).delete(t), lt(this, io).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakSet(), Mu = function() {
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
Mt($a, "entries", /* @__PURE__ */ new WeakMap());
let Z1 = $a;
var B1 = /* @__PURE__ */ new Z1({
  box: "border-box"
});
function Ks(e, t, n) {
  var r = B1.observe(e, () => n(e[t]));
  It(() => ($n(() => n(e[t])), r));
}
function qs(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function Cn(e = {}, t, n, r) {
  return It(() => {
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
function Oe(e = !1) {
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
    const a = /* @__PURE__ */ Pr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && Jf(() => {
    js(t, r), so(n.b);
  }), Fn(() => {
    const o = $n(() => n.m.map(Tf));
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
    for (const n of e.l.s) g(n);
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
  Ye === null && Hi(), Br && Ye.l !== null ? X1(Ye).m.push(e) : Fn(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Ye === null && Hi(), Wt(() => () => $n(e));
}
function R1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ii() {
  const e = Ye;
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
  return e && Ca in n ? q(e) : g(r.source);
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Mr(0) }, q1);
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
  var o, i = (n & Ef) !== 0, a = !Br || (n & Sf) !== 0, s = (n & Pf) !== 0, l = (n & Hf) !== 0, u = !1, c;
  s ? [c, u] = W1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Wn in e || Fa in e, f = s && (((o = Vn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
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
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (w = !0, b = !1, S);
    };
  else {
    var h = (i ? Pr : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Af, _ = () => {
      var S = g(h);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if (!(n & ql))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(S, M) {
      return arguments.length > 0 ? ((!a || !M || C || u) && f(M ? _() : S), S) : _();
    };
  }
  var y = !1, k = /* @__PURE__ */ ne(c), E = /* @__PURE__ */ Pr(() => {
    var S = _(), M = g(k);
    return y ? (y = !1, M) : k.v = S;
  });
  return s && g(E), i || (E.equals = Qa), function(S, M) {
    if (arguments.length > 0) {
      const V = M ? g(E) : a && s ? Ft(S) : S;
      if (!E.equals(V)) {
        if (y = !0, F(k, V), b && v !== void 0 && (v = V), Fs(E))
          return S;
        $n(() => g(E));
      }
      return S;
    }
    return Fs(E) ? E.v : g(E);
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
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Fa ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return F(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ni(this, rn, (t.hydrate ? H1 : $u)(t.component, {
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
      M1(lt(this, rn));
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
    super(), Mt(this, "$$ctor"), Mt(this, "$$s"), Mt(this, "$$c"), Mt(this, "$$cn", !1), Mt(this, "$$d", {}), Mt(this, "$$r", !1), Mt(this, "$$p_d", {}), Mt(this, "$$l", {}), Mt(this, "$$l_u", /* @__PURE__ */ new Map()), Mt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), T(o, i);
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
function Ai() {
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
Uo.prototype = Ai.prototype = {
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
function zu(e) {
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
function Nu(e) {
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
  typeof e == "function" ? e = sv(e) : e = Nu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Yt(r, o);
}
function Ou(e) {
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
function gv() {
  return Array.from(this.children);
}
function hv(e) {
  return function() {
    return vv.call(this.children, e);
  };
}
function pv(e) {
  return this.selectAll(e == null ? gv : hv(typeof e == "function" ? e : Du(e)));
}
function mv(e) {
  typeof e != "function" && (e = Ou(e));
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
    for (var h = 0, C = 0, y, k; h < w; ++h)
      if (y = b[h]) {
        for (h >= C && (C = h + 1); !(k = x[C]) && ++C < w; ) ;
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
function Ev(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Sv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Yt(s, this._parents);
}
function Pv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Hv(e) {
  e || (e = Mv);
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
function Mv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function zv() {
  return Array.from(this);
}
function Nv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function Ov() {
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
function Tv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Iv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Av(e, t) {
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
  return this.each((t == null ? n.local ? Iv : Tv : typeof t == "function" ? n.local ? Rv : Bv : n.local ? Zv : Av)(n, t));
}
function Tu(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Yv : typeof t == "function" ? Kv : Wv)(e, t, n ?? "")) : zr(this.node(), e);
}
function zr(e, t) {
  return e.style.getPropertyValue(t) || Tu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Iu(e) {
  return e.trim().split(/^|\s+/);
}
function ls(e) {
  return e.classList || new Au(e);
}
function Au(e) {
  this._node = e, this._names = Iu(e.getAttribute("class") || "");
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
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Bu)(this, e);
  };
}
function tg(e, t) {
  var n = Iu(e + "");
  if (arguments.length < 2) {
    for (var r = ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? eg : t ? Qv : Jv)(n, t));
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
function Eg(e, t, n) {
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
function Sg(e, t, n) {
  var r = _g(e + ""), o, i = r.length, a;
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
  for (s = t ? Eg : kg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Ru(e, t, n) {
  var r = Tu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return Ru(this, e, t);
  };
}
function Hg(e, t) {
  return function() {
    return Ru(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Hg : Pg)(e, t));
}
function* Vg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Xu = [null];
function Yt(e, t) {
  this._groups = e, this._parents = t;
}
function So() {
  return new Yt([[document.documentElement]], Xu);
}
function zg() {
  return this;
}
Yt.prototype = So.prototype = {
  constructor: Yt,
  select: ov,
  selectAll: lv,
  selectChild: fv,
  selectChildren: pv,
  filter: mv,
  data: Cv,
  enter: yv,
  exit: kv,
  join: Ev,
  merge: Sv,
  selection: zg,
  order: Pv,
  sort: Hv,
  call: Vv,
  nodes: zv,
  node: Nv,
  size: Ov,
  empty: Dv,
  each: Lv,
  attr: Xv,
  style: qv,
  property: Uv,
  classed: tg,
  text: ig,
  html: ug,
  raise: dg,
  lower: vg,
  append: gg,
  insert: pg,
  remove: yg,
  clone: xg,
  datum: $g,
  on: Sg,
  dispatch: Mg,
  [Symbol.iterator]: Vg
};
function Gt(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], Xu);
}
function Ng(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = Ng(e), t === void 0 && (t = e.currentTarget), t) {
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
function Yu(e) {
  var t = e.document.documentElement, n = Gt(e).on("dragstart.drag", Cr, go);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, go) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wu(e, t) {
  var n = e.document.documentElement, r = Gt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, go), setTimeout(function() {
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
function Dg(e) {
  return !e.ctrlKey && !e.button;
}
function Lg() {
  return this.parentNode;
}
function Tg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ig() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ag() {
  var e = Dg, t = Lg, n = Tg, r = Ig, o = {}, i = Ai("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Og).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, k) {
    if (!(c || !e.call(this, y, k))) {
      var E = C(this, t.call(this, y, k), y, k, "mouse");
      E && (Gt(y.view).on("mousemove.drag", w, go).on("mouseup.drag", b, go), Yu(y.view), oa(y), u = !1, s = y.clientX, l = y.clientY, E("start", y));
    }
  }
  function w(y) {
    if (Cr(y), !u) {
      var k = y.clientX - s, E = y.clientY - l;
      u = k * k + E * E > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    Gt(y.view).on("mousemove.drag mouseup.drag", null), Wu(y.view, u), Cr(y), o.mouse("end", y);
  }
  function x(y, k) {
    if (e.call(this, y, k)) {
      var E = y.changedTouches, S = t.call(this, y, k), M = E.length, V, O;
      for (V = 0; V < M; ++V)
        (O = C(this, S, y, k, E[V].identifier, E[V])) && (oa(y), O("start", y, E[V]));
    }
  }
  function _(y) {
    var k = y.changedTouches, E = k.length, S, M;
    for (S = 0; S < E; ++S)
      (M = o[k[S].identifier]) && (Cr(y), M("drag", y, k[S]));
  }
  function h(y) {
    var k = y.changedTouches, E = k.length, S, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < E; ++S)
      (M = o[k[S].identifier]) && (oa(y), M("end", y, k[S]));
  }
  function C(y, k, E, S, M, V) {
    var O = i.copy(), L = on(V || E, k), D, A, P;
    if ((P = n.call(y, new ka("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: M,
      active: a,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), S)) != null)
      return D = P.x - L[0] || 0, A = P.y - L[1] || 0, function N($, H, z) {
        var I = L, B;
        switch ($) {
          case "start":
            o[M] = N, B = a++;
            break;
          case "end":
            delete o[M], --a;
          // falls through
          case "drag":
            L = on(z || H, k), B = a;
            break;
        }
        O.call(
          $,
          y,
          new ka($, {
            sourceEvent: H,
            subject: P,
            target: f,
            identifier: M,
            active: B,
            x: L[0] + D,
            y: L[1] + A,
            dx: L[0] - I[0],
            dy: L[1] - I[1],
            dispatch: O
          }),
          S
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
function Po() {
}
var ho = 0.7, fi = 1 / ho, _r = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Bg = new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`), Rg = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Xg = new RegExp(`^rgba\\(${_r},${_r},${_r},${po}\\)$`), Yg = new RegExp(`^rgba\\(${mn},${mn},${mn},${po}\\)$`), Wg = new RegExp(`^hsl\\(${po},${mn},${mn}\\)$`), Kg = new RegExp(`^hsla\\(${po},${mn},${mn},${po}\\)$`), Qs = {
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
us(Po, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Js,
  // Deprecated! Use color.formatHex.
  formatHex: Js,
  formatHex8: qg,
  formatHsl: jg,
  formatRgb: el,
  toString: el
});
function Js() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function jg() {
  return qu(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bg.exec(e)) ? new Vt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new Vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Xg.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Qs.hasOwnProperty(e) ? tl(Qs[e]) : e === "transparent" ? new Vt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Vt(e, t, n, r);
}
function Fg(e) {
  return e instanceof Po || (e = mo(e)), e ? (e = e.rgb(), new Vt(e.r, e.g, e.b, e.opacity)) : new Vt();
}
function Ea(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(Vt, Ea, Ku(Po, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Vt(ar(this.r), ar(this.g), ar(this.b), vi(this.opacity));
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
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Gg() {
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
  if (e instanceof Po || (e = mo(e)), !e) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new an(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? qu(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(an, Ug, Ku(Po, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Vt(
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
function Qg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Jg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eh(e) {
  return (e = +e) == 1 ? Fu : function(t, n) {
    return n - t ? Jg(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Qg(e, n) : ju(isNaN(e) ? t : e);
}
const al = function e(t) {
  var n = eh(t);
  function r(o, i) {
    var a = n((o = Ea(o)).r, (i = Ea(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Fu(o.opacity, i.opacity);
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
var Sa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Sa.source, "g");
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
  var n = Sa.lastIndex = aa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Sa.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Rn(r, o) })), n = aa.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? nh(l[0].x) : th(t) : (t = l.length, function(u) {
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
function oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Gu : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ih(e) {
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
var ah = Qu(oh, "px, ", "px)", "deg)"), sh = Qu(ih, ", ", ")", ")"), lh = 1e-12;
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, x, _;
    if (b < lh)
      _ = Math.log(f / u) / t, x = function(S) {
        return [
          s + S * v,
          l + S * w,
          u * Math.exp(t * S * _)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), y = (f * f - u * u - r * b) / (2 * f * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), E = Math.log(Math.sqrt(y * y + 1) - y);
      _ = (E - k) / t, x = function(S) {
        var M = S * _, V = ll(k), O = u / (n * h) * (V * ch(t * M + k) - uh(k));
        return [
          s + O * v,
          l + O * w,
          u * V / ll(t * M + k)
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
var Nr = 0, eo = 0, Ur = 0, Ju = 1e3, gi, to, hi = 0, ur = 0, Bi = 0, yo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return ur || (ec(fh), ur = yo.now() + Bi);
}
function fh() {
  ur = 0;
}
function pi() {
  this._call = this._time = this._next = null;
}
pi.prototype = tc.prototype = {
  constructor: pi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && to !== this && (to ? to._next = this : gi = this, to = this), this._call = e, this._time = n, Pa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Pa());
  }
};
function tc(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function vh() {
  cs(), ++Nr;
  for (var e = gi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Nr;
}
function ul() {
  ur = (hi = yo.now()) + Bi, Nr = eo = 0;
  try {
    vh();
  } finally {
    Nr = 0, hh(), ur = 0;
  }
}
function gh() {
  var e = yo.now(), t = e - hi;
  t > Ju && (Bi -= t, hi = e);
}
function hh() {
  for (var e, t = gi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : gi = n);
  to = e, Pa(r);
}
function Pa(e) {
  if (!Nr) {
    eo && (eo = clearTimeout(eo));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ul, e - yo.now() - Bi)), Ur && (Ur = clearInterval(Ur))) : (Ur || (hi = yo.now(), Ur = setInterval(gh, Ju)), Nr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Ai("start", "end", "cancel", "interrupt"), mh = [], nc = 0, dl = 1, Ha = 2, Qo = 3, fl = 4, Ma = 5, Jo = 6;
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
    state: nc
  });
}
function ds(e, t) {
  var n = vn(e, t);
  if (n.state > nc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = vn(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function vn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function yh(e, t, n) {
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
    }), n.state = Ha, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ha) {
      for (n.state = Qo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ma, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ma && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ha && r.state < Ma, r.state = Jo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wh(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function bh(e, t) {
  var n, r;
  return function() {
    var o = En(this, e), i = o.tween;
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
function xh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = En(this, e), a = i.tween;
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
    for (var r = vn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? bh : xh)(n, e, t));
}
function fs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vn(o, r).value[t];
  };
}
function rc(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof mo ? al : (n = mo(t)) ? (t = n, al) : rh)(e, t);
}
function Ch(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _h(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function kh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Eh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Sh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ph(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Hh(e, t) {
  var n = Zi(e), r = n === "transform" ? sh : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ph : Sh)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? _h : Ch)(n) : (n.local ? Eh : kh)(n, r, t));
}
function Mh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Vh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function zh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Vh(e, i)), n;
  }
  return o._value = t, o;
}
function Nh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Mh(e, i)), n;
  }
  return o._value = t, o;
}
function Oh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? zh : Nh)(r, t));
}
function Dh(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Lh(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Th(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dh : Lh)(t, e)) : vn(this.node(), t).delay;
}
function Ih(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Ah(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Zh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ih : Ah)(t, e)) : vn(this.node(), t).duration;
}
function Bh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(Bh(t, e)) : vn(this.node(), t).ease;
}
function Xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Yh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Xh(this._id, e));
}
function Wh(e) {
  typeof e != "function" && (e = Ou(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Kh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Ln(a, this._parents, this._name, this._id);
}
function qh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jh(e, t, n) {
  var r, o, i = qh(t) ? ds : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(jh(n, e, t));
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
function Qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ss(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ri(u[f], t, n, f, u, vn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Jh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Nu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = vn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && Ri(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Ln(i, a, t, n);
}
var ep = So.prototype.constructor;
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
    var l = En(this, e), u = l.on, c = l.value[i] == null ? s || (s = oc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ap(e, t, n) {
  var r = (e += "") == "transform" ? ah : rc;
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
      var u = En(this, r), c = u.on;
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
var Pn = So.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Qh,
  selectAll: Jh,
  selectChild: Pn.selectChild,
  selectChildren: Pn.selectChildren,
  filter: Wh,
  merge: Kh,
  selection: tp,
  transition: pp,
  call: Pn.call,
  nodes: Pn.nodes,
  node: Pn.node,
  size: Pn.size,
  empty: Pn.empty,
  each: Pn.each,
  on: Fh,
  attr: Hh,
  attrTween: Oh,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Th,
  duration: Zh,
  ease: Rh,
  easeVarying: Yh,
  end: mp,
  [Symbol.iterator]: Pn[Symbol.iterator]
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
So.prototype.interrupt = wh;
So.prototype.transition = $p;
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
function Ep(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Sp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Pp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function sc() {
  var e = _p, t = kp, n = Pp, r = Ep, o = Sp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Ai("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function _(P) {
    P.property("__zoom", vl).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(P, N, $, H) {
    var z = P.selection ? P.selection() : P;
    z.property("__zoom", vl), P !== z ? k(P, N, $, H) : z.interrupt().each(function() {
      E(this, arguments).event(H).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, _.scaleBy = function(P, N, $, H) {
    _.scaleTo(P, function() {
      var z = this.__zoom.k, I = typeof N == "function" ? N.apply(this, arguments) : N;
      return z * I;
    }, $, H);
  }, _.scaleTo = function(P, N, $, H) {
    _.transform(P, function() {
      var z = t.apply(this, arguments), I = this.__zoom, B = $ == null ? y(z) : typeof $ == "function" ? $.apply(this, arguments) : $, K = I.invert(B), j = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(C(h(I, j), B, K), z, a);
    }, $, H);
  }, _.translateBy = function(P, N, $, H) {
    _.transform(P, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, H);
  }, _.translateTo = function(P, N, $, H, z) {
    _.transform(P, function() {
      var I = t.apply(this, arguments), B = this.__zoom, K = H == null ? y(I) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Xi.translate(K[0], K[1]).scale(B.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), I, a);
    }, H, z);
  };
  function h(P, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === P.k ? P : new Hn(N, P.x, P.y);
  }
  function C(P, N, $) {
    var H = N[0] - $[0] * P.k, z = N[1] - $[1] * P.k;
    return H === P.x && z === P.y ? P : new Hn(P.k, H, z);
  }
  function y(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, N, $, H) {
    P.on("start.zoom", function() {
      E(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var z = this, I = arguments, B = E(z, I).event(H), K = t.apply(z, I), j = $ == null ? y(K) : typeof $ == "function" ? $.apply(z, I) : $, ue = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Q = z.__zoom, W = typeof N == "function" ? N.apply(z, I) : N, ae = l(Q.invert(j).concat(ue / Q.k), W.invert(j).concat(ue / W.k));
      return function(he) {
        if (he === 1) he = W;
        else {
          var me = ae(he), ce = ue / me[2];
          he = new Hn(ce, j[0] - me[0] * ce, j[1] - me[1] * ce);
        }
        B.zoom(null, he);
      };
    });
  }
  function E(P, N, $) {
    return !$ && P.__zooming || new S(P, N);
  }
  function S(P, N) {
    this.that = P, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, N), this.taps = 0;
  }
  S.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, N) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var N = Gt(this.that).datum();
      u.call(
        P,
        this.that,
        new Cp(P, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function M(P, ...N) {
    if (!e.apply(this, arguments)) return;
    var $ = E(this, N).event(P), H = this.__zoom, z = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), I = on(P);
    if ($.wheel)
      ($.mouse[0][0] !== I[0] || $.mouse[0][1] !== I[1]) && ($.mouse[1] = H.invert($.mouse[0] = I)), clearTimeout($.wheel);
    else {
      if (H.k === z) return;
      $.mouse = [I, H.invert(I)], ei(this), $.start();
    }
    Qr(P), $.wheel = setTimeout(B, w), $.zoom("mouse", n(C(h(H, z), $.mouse[0], $.mouse[1]), $.extent, a));
    function B() {
      $.wheel = null, $.end();
    }
  }
  function V(P, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var $ = P.currentTarget, H = E(this, N, !0).event(P), z = Gt(P.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", ue, !0), I = on(P, $), B = P.clientX, K = P.clientY;
    Yu(P.view), sa(P), H.mouse = [I, this.__zoom.invert(I)], ei(this), H.start();
    function j(Q) {
      if (Qr(Q), !H.moved) {
        var W = Q.clientX - B, ae = Q.clientY - K;
        H.moved = W * W + ae * ae > b;
      }
      H.event(Q).zoom("mouse", n(C(H.that.__zoom, H.mouse[0] = on(Q, $), H.mouse[1]), H.extent, a));
    }
    function ue(Q) {
      z.on("mousemove.zoom mouseup.zoom", null), Wu(Q.view, H.moved), Qr(Q), H.event(Q).end();
    }
  }
  function O(P, ...N) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, H = on(P.changedTouches ? P.changedTouches[0] : P, this), z = $.invert(H), I = $.k * (P.shiftKey ? 0.5 : 2), B = n(C(h($, I), H, z), t.apply(this, N), a);
      Qr(P), s > 0 ? Gt(this).transition().duration(s).call(k, B, H, P) : Gt(this).call(_.transform, B, H, P);
    }
  }
  function L(P, ...N) {
    if (e.apply(this, arguments)) {
      var $ = P.touches, H = $.length, z = E(this, N, P.changedTouches.length === H).event(P), I, B, K, j;
      for (sa(P), B = 0; B < H; ++B)
        K = $[B], j = on(K, this), j = [j, this.__zoom.invert(j), K.identifier], z.touch0 ? !z.touch1 && z.touch0[2] !== j[2] && (z.touch1 = j, z.taps = 0) : (z.touch0 = j, I = !0, z.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (z.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), ei(this), z.start());
    }
  }
  function D(P, ...N) {
    if (this.__zooming) {
      var $ = E(this, N).event(P), H = P.changedTouches, z = H.length, I, B, K, j;
      for (Qr(P), I = 0; I < z; ++I)
        B = H[I], K = on(B, this), $.touch0 && $.touch0[2] === B.identifier ? $.touch0[0] = K : $.touch1 && $.touch1[2] === B.identifier && ($.touch1[0] = K);
      if (B = $.that.__zoom, $.touch1) {
        var ue = $.touch0[0], Q = $.touch0[1], W = $.touch1[0], ae = $.touch1[1], he = (he = W[0] - ue[0]) * he + (he = W[1] - ue[1]) * he, me = (me = ae[0] - Q[0]) * me + (me = ae[1] - Q[1]) * me;
        B = h(B, Math.sqrt(he / me)), K = [(ue[0] + W[0]) / 2, (ue[1] + W[1]) / 2], j = [(Q[0] + ae[0]) / 2, (Q[1] + ae[1]) / 2];
      } else if ($.touch0) K = $.touch0[0], j = $.touch0[1];
      else return;
      $.zoom("touch", n(C(B, K, j), $.extent, a));
    }
  }
  function A(P, ...N) {
    if (this.__zooming) {
      var $ = E(this, N).event(P), H = P.changedTouches, z = H.length, I, B;
      for (sa(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), I = 0; I < z; ++I)
        B = H[I], $.touch0 && $.touch0[2] === B.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === B.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (B = on(B, this), Math.hypot(d[0] - B[0], d[1] - B[1]) < x)) {
        var K = Gt(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Ko(+P), _) : r;
  }, _.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Ko(!!P), _) : e;
  }, _.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Ko(!!P), _) : o;
  }, _.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Ko([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), _) : t;
  }, _.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(P) {
    return arguments.length ? (a[0][0] = +P[0][0], a[1][0] = +P[1][0], a[0][1] = +P[0][1], a[1][1] = +P[1][1], _) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, _.constrain = function(P) {
    return arguments.length ? (n = P, _) : n;
  }, _.duration = function(P) {
    return arguments.length ? (s = +P, _) : s;
  }, _.interpolate = function(P) {
    return arguments.length ? (l = P, _) : l;
  }, _.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? _ : P;
  }, _.clickDistance = function(P) {
    return arguments.length ? (b = (P = +P) * P, _) : Math.sqrt(b);
  }, _.tapDistance = function(P) {
    return arguments.length ? (x = +P, _) : x;
  }, _;
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
const gl = {
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
function hl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Mp(e) {
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
}, Mo = (e, t = {}) => {
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
  const s = Mo(e), l = hs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Op({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Or.error005());
    else {
      const v = s.measured.width, w = s.measured.height;
      v && w && (d = [
        [l, u],
        [l + v, u + w]
      ]);
    }
  else s && Tr(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = Tr(d) ? dr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Or.error015())), {
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
}), Lr = (e, t = [0, 0]) => {
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
}, wl = (e) => Mn(e.width) && Mn(e.height) && Mn(e.x) && Mn(e.y), Mn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
}, gs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Vo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? gs(s, a) : s;
}, vc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), hs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Dr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, bi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Tr(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function gc(e) {
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
  const { x: i, y: a } = Nn(e), s = Vo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ps = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Tp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Ip = ["INPUT", "SELECT", "TEXTAREA"];
function Ap(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Ip.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const hc = (e) => "clientX" in e, Nn = (e, t) => {
  var n, r;
  const o = hc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
function Oa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, C, y, k] = mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? h, b = o.y ?? C;
    const E = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? E : S : v = d === "x" ? S : E;
  } else {
    const E = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? S : E : v = a.y === f ? E : S, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const A = Math.min(i - 1, i - D);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * A : _[d] = (u[d] > n[d] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", A = a[d] === s[D], P = l[D] > u[D], N = l[D] < u[D];
      (a[d] === 1 && (!A && P || A && N) || a[d] !== 1 && (!A && N || A && P)) && (v = d === "x" ? E : S);
    }
    const M = { x: l.x + x.x, y: l.y + x.y }, V = { x: u.x + _.x, y: u.y + _.y }, O = Math.max(Math.abs(M.x - v[0].x), Math.abs(V.x - v[0].x)), L = Math.max(Math.abs(M.y - v[0].y), Math.abs(V.y - v[0].y));
    O >= L ? (w = (M.x + V.x) / 2, b = v[0].y) : (w = v[0].x, b = (M.y + V.y) / 2);
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
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = jp(c[_ - 1], x, c[_ + 1], a) : h = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
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
  const o = n.internals.handleBounds || kl(n.handles), i = r.internals.handleBounds || kl(r.handles), a = El((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = El(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Or.error008(a ? "target" : "source", {
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
function El(e, t) {
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
      const i = Ho(o, r.nodeOrigin), a = Tr(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, er(o));
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
      const d = Ho(u, a.nodeOrigin), f = Tr(u.extent) ? u.extent : a.nodeExtent, v = dr(d, f, er(u));
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
  return (Mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = er(e), l = Ho(e, n), u = Tr(e.extent) ? dr(l, e.extent, s) : l;
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
    const d = l.internals.positionAbsolute, f = er(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (w > 0 || b > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + h,
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
        width: x + (w ? v[0] * w - h : 0),
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
      const x = f.nodeElement.getBoundingClientRect(), _ = Tr(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = cc(h, w, t.get(v.parentId)) : _ && (h = dr(h, _, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: h,
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
function Sl(e, t, n, r, o, i) {
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
    Sl("source", l, c, e, o, a), Sl("target", l, u, e, i, s), t.set(r.id, r);
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
function Pl(e, t, n) {
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
  function w({ noDragClassName: x, handleSelector: _, domNode: h, isSelectable: C, nodeId: y, nodeClickDistance: k = 0 }) {
    f = Gt(h);
    function E({ x: O, y: L }, D) {
      const { nodeLookup: A, nodeExtent: P, snapGrid: N, snapToGrid: $, nodeOrigin: H, onNodeDrag: z, onSelectionDrag: I, onError: B, updateNodePositions: K } = t();
      i = { x: O, y: L };
      let j = !1, ue = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = Mo(s);
        ue = Na(Q);
      }
      for (const [Q, W] of s) {
        if (!A.has(Q))
          continue;
        let ae = { x: O - W.distance.x, y: L - W.distance.y };
        $ && (ae = gs(ae, N));
        let he = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !W.extent) {
          const { positionAbsolute: Ve } = W.internals, oe = Ve.x - ue.x + P[0][0], ee = Ve.x + W.measured.width - ue.x2 + P[1][0], ze = Ve.y - ue.y + P[0][1], He = Ve.y + W.measured.height - ue.y2 + P[1][1];
          he = [
            [oe, ze],
            [ee, He]
          ];
        }
        const { position: me, positionAbsolute: ce } = Op({
          nodeId: Q,
          nextPosition: ae,
          nodeLookup: A,
          nodeExtent: he,
          nodeOrigin: H,
          onError: B
        });
        j = j || W.position.x !== me.x || W.position.y !== me.y, W.position = me, W.internals.positionAbsolute = ce;
      }
      if (j && (K(s, !0), D && (r || z || !y && I))) {
        const [Q, W] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: A
        });
        r == null || r(D, s, Q, W), z == null || z(D, Q, W), y || I == null || I(D, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: O, panBy: L, autoPanSpeed: D, autoPanOnNodeDrag: A } = t();
      if (!A) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [P, N] = dc(u, c, D);
      (P !== 0 || N !== 0) && (i.x = (i.x ?? 0) - P / O[2], i.y = (i.y ?? 0) - N / O[2], await L({ x: P, y: N }) && E(i, null)), a = requestAnimationFrame(S);
    }
    function M(O) {
      var L;
      const { nodeLookup: D, multiSelectionActive: A, nodesDraggable: P, transform: N, snapGrid: $, snapToGrid: H, selectNodesOnDrag: z, onNodeDragStart: I, onSelectionDragStart: B, unselectNodesAndEdges: K } = t();
      d = !0, (!z || !C) && !A && y && ((L = D.get(y)) != null && L.selected || K()), C && z && y && (e == null || e(y));
      const j = la(O.sourceEvent, { transform: N, snapGrid: $, snapToGrid: H, containerBounds: c });
      if (i = j, s = a0(D, P, j, y), s.size > 0 && (n || I || !y && B)) {
        const [ue, Q] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(O.sourceEvent, s, ue, Q), I == null || I(O.sourceEvent, ue, Q), y || B == null || B(O.sourceEvent, Q);
      }
    }
    const V = Ag().clickDistance(k).on("start", (O) => {
      const { domNode: L, nodeDragThreshold: D, transform: A, snapGrid: P, snapToGrid: N } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, v = !1, D === 0 && M(O), i = la(O.sourceEvent, { transform: A, snapGrid: P, snapToGrid: N, containerBounds: c }), u = Nn(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: L, transform: D, snapGrid: A, snapToGrid: P, nodeDragThreshold: N, nodeLookup: $ } = t(), H = la(O.sourceEvent, { transform: D, snapGrid: A, snapToGrid: P, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !$.has(y)) && (v = !0), !v) {
        if (!l && L && d && (l = !0, S()), !d) {
          const z = H.xSnapped - (i.x ?? 0), I = H.ySnapped - (i.y ?? 0);
          Math.sqrt(z * z + I * I) > N && M(O);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && s && d && (u = Nn(O.sourceEvent, c), E(H, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: L, updateNodePositions: D, onNodeDragStop: A, onSelectionDragStop: P } = t();
        if (D(s, !1), o || A || !y && P) {
          const [N, $] = ua({
            nodeId: y,
            dragItems: s,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(O.sourceEvent, s, N, $), A == null || A(O.sourceEvent, N, $), y || P == null || P(O.sourceEvent, $);
        }
      }
    }).filter((O) => {
      const L = O.target;
      return !O.button && (!x || !Pl(L, `.${x}`, h)) && (!_ || Pl(L, _, h));
    });
    f.call(V);
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
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: _ = _c, onReconnectEnd: h, updateConnection: C, getTransform: y, getFromHandle: k, autoPanSpeed: E }) {
  const S = Tp(e.target);
  let M = 0, V;
  const { x: O, y: L } = Nn(e), D = S == null ? void 0 : S.elementFromPoint(O, L), A = Cc(i, D), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !A)
    return;
  const N = $c(o, A, r, l, t);
  if (!N)
    return;
  let $ = Nn(e, P), H = !1, z = null, I = !1, B = null;
  function K() {
    if (!c || !P)
      return;
    const [me, ce] = dc($, P, E);
    f({ x: me, y: ce }), M = requestAnimationFrame(K);
  }
  const j = {
    ...N,
    nodeId: o,
    type: A,
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
    toPosition: gl[j.position],
    toNode: null
  };
  C(Q);
  let W = Q;
  w == null || w(e, { nodeId: o, handleId: r, handleType: A });
  function ae(me) {
    if (!k() || !j) {
      he(me);
      return;
    }
    const ce = y();
    $ = Nn(me, P), V = c0(Vo($, ce, !1, [1, 1]), n, l, j), H || (K(), H = !0);
    const Ve = kc(me, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: _,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    B = Ve.handleDomNode, z = Ve.connection, I = d0(!!V, Ve.isValid);
    const oe = {
      // from stays the same
      ...W,
      isValid: I,
      to: V && I ? vc({ x: V.x, y: V.y }, ce) : $,
      toHandle: Ve.toHandle,
      toPosition: I && Ve.toHandle ? Ve.toHandle.position : gl[j.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    I && V && W.toHandle && oe.toHandle && W.toHandle.type === oe.toHandle.type && W.toHandle.nodeId === oe.toHandle.nodeId && W.toHandle.id === oe.toHandle.id && W.to.x === oe.to.x && W.to.y === oe.to.y || (C(oe), W = oe);
  }
  function he(me) {
    (V || B) && z && I && (b == null || b(z));
    const { inProgress: ce, ...Ve } = W, oe = {
      ...Ve,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(me, oe), i && (h == null || h(me, oe)), v(), cancelAnimationFrame(M), H = !1, I = !1, z = null, B = null, S.removeEventListener("mousemove", ae), S.removeEventListener("mouseup", he), S.removeEventListener("touchmove", ae), S.removeEventListener("touchend", he);
  }
  S.addEventListener("mousemove", ae), S.addEventListener("mouseup", he), S.addEventListener("touchmove", ae), S.addEventListener("touchend", he);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = _c, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = Nn(e), b = a.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Cc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!C || !h)
      return _;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    _.connection = S;
    const M = k && E && (n === cr.Strict ? d && h === "source" || !d && h === "target" : C !== r || y !== o);
    _.isValid = M && u(S), _.toHandle = $c(C, h, y, c, n, !1);
  }
  return _;
}
const v0 = {
  onPointerDown: f0,
  isValid: kc
};
function g0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Gt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = y[2] * Math.pow(2, k);
      t.scaleTo(E);
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
      ], E = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), M = {
        x: y[0] - E[0] * S,
        y: y[1] - E[1] * S
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: y[2]
      }, V, s);
    }, h = sc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? w : null);
    o.call(h, {});
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
const h0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ca = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Ec = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Sc = (e) => {
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
      const x = on(c), _ = Sc(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, x, c);
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
    e.usedRightMouseButton = !!(n && Ec(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ki(i.transform)));
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Ec(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && h0(e.prevViewport, a.transform))) {
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
  }, d = e.getBoundingClientRect(), f = sc().clickDistance(!Mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = Gt(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: Dr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Sc);
  function x(D, A) {
    return v ? new Promise((P) => {
      f == null || f.transform(da(v, A == null ? void 0 : A.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: D, noPanClassName: A, onPaneContextMenu: P, userSelectionActive: N, panOnScroll: $, panOnDrag: H, panOnScrollMode: z, panOnScrollSpeed: I, preventScrolling: B, zoomOnPinch: K, zoomOnScroll: j, zoomOnDoubleClick: ue, zoomActivationKeyPressed: Q, lib: W, onTransformChange: ae }) {
    N && !c.isZoomingOrPanning && h();
    const he = $ && !Q && !N ? p0({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: I,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: D,
      preventScrolling: B,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", he, { passive: !1 }), !N) {
      const ce = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ce);
      const Ve = w0({
        zoomPanValues: c,
        panOnDrag: H,
        onPaneContextMenu: !!P,
        onPanZoom: a,
        onTransformChange: ae
      });
      f.on("zoom", Ve);
      const oe = b0({
        zoomPanValues: c,
        panOnDrag: H,
        panOnScroll: $,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const me = x0({
      zoomActivationKeyPressed: Q,
      panOnDrag: H,
      zoomOnScroll: j,
      panOnScroll: $,
      zoomOnDoubleClick: ue,
      zoomOnPinch: K,
      userSelectionActive: N,
      noPanClassName: A,
      noWheelClassName: D,
      lib: W
    });
    f.filter(me), ue ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(D, A, P) {
    const N = ca(D), $ = f == null ? void 0 : f.constrain()(N, A, P);
    return $ && await x($), new Promise((H) => H($));
  }
  async function y(D, A) {
    const P = ca(D);
    return await x(P, A), new Promise((N) => N(P));
  }
  function k(D) {
    if (v) {
      const A = ca(D), P = v.property("__zoom");
      (P.k !== D.zoom || P.x !== D.x || P.y !== D.y) && (f == null || f.transform(v, A, null, { sync: !0 }));
    }
  }
  function E() {
    const D = v ? ac(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function S(D, A) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(da(v, A == null ? void 0 : A.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function M(D, A) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(da(v, A == null ? void 0 : A.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function V(D) {
    f == null || f.scaleExtent(D);
  }
  function O(D) {
    f == null || f.translateExtent(D);
  }
  function L(D) {
    const A = !Mn(D) || D < 0 ? 0 : D;
    f == null || f.clickDistance(A);
  }
  return {
    update: _,
    destroy: h,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: E,
    scaleTo: S,
    scaleBy: M,
    setScaleExtent: V,
    setTranslateExtent: O,
    syncViewport: k,
    setClickDistance: L
  };
}
var Hl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Hl || (Hl = {}));
var C0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(ue, "$connectable", n), i = () => U(me, "$connectionRadius", n), a = () => U(ae, "$domNode", n), s = () => U(he, "$nodeLookup", n), l = () => U(W, "$connectionMode", n), u = () => U(oe, "$lib", n), c = () => U(We, "$autoPanOnConnect", n), d = () => U(Ne, "$flowId", n), f = () => U(Ve, "$isValidConnectionStore", n), v = () => U(ze, "$onedgecreate", n), w = () => U(le, "$onConnectAction", n), b = () => U(Ce, "$onConnectStartAction", n), x = () => U(Ke, "$onConnectEndAction", n), _ = () => U(ce, "$viewport", n), h = () => U(st, "$connection", n), C = () => U(Ue, "$edges", n), y = () => U(se, "$connectionLookup", n), k = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne(), O = /* @__PURE__ */ ne(), L = /* @__PURE__ */ ne(), D = /* @__PURE__ */ ne();
  let A = m(t, "id", 12, void 0), P = m(t, "type", 12, "source"), N = m(t, "position", 28, () => _e.Top), $ = m(t, "style", 12, void 0), H = m(t, "isValidConnection", 12, void 0), z = m(t, "onconnect", 12, void 0), I = m(t, "ondisconnect", 12, void 0), B = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const j = sr("svelteflow__node_id"), ue = sr("svelteflow__node_connectable"), Q = Ge(), {
    connectionMode: W,
    domNode: ae,
    nodeLookup: he,
    connectionRadius: me,
    viewport: ce,
    isValidConnection: Ve,
    lib: oe,
    addEdge: ee,
    onedgecreate: ze,
    panBy: He,
    cancelConnection: Re,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: se,
    onconnect: le,
    onconnectstart: Ce,
    onconnectend: Ke,
    flowId: Ne,
    connection: st
  } = Q;
  function it(Se) {
    const tt = hc(Se);
    (tt && Se.button === 0 || !tt) && v0.onPointerDown(Se, {
      handleId: g(S),
      nodeId: j,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: H() ?? f(),
      updateConnection: te,
      cancelConnection: Re,
      panBy: He,
      onConnect: (Ae) => {
        var De;
        const nt = v() ? v()(Ae) : Ae;
        nt && (ee(nt), (De = w()) == null || De(Ae));
      },
      onConnectStart: (Ae, De) => {
        var nt;
        (nt = b()) == null || nt(Ae, {
          nodeId: De.nodeId,
          handleId: De.handleId,
          handleType: De.handleType
        });
      },
      onConnectEnd: (Ae, De) => {
        var nt;
        (nt = x()) == null || nt(Ae, De);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let J = /* @__PURE__ */ ne(null), Ie = /* @__PURE__ */ ne();
  ve(() => G(P()), () => {
    F(k, P() === "target");
  }), ve(
    () => (G(B()), o()),
    () => {
      F(E, B() !== void 0 ? B() : o());
    }
  ), ve(() => G(A()), () => {
    F(S, A() || null);
  }), ve(
    () => (G(z()), G(I()), C(), y(), G(P()), G(A())),
    () => {
      (z() || I()) && (C(), F(Ie, y().get(`${j}-${P()}${A() ? `-${A()}` : ""}`)));
    }
  ), ve(
    () => (g(J), g(Ie), G(I()), G(z())),
    () => {
      if (g(J) && !Hp(g(Ie), g(J))) {
        const Se = g(Ie) ?? /* @__PURE__ */ new Map();
        hl(g(J), Se, I()), hl(Se, g(J), z());
      }
      F(J, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), ve(() => h(), () => {
    F(M, !!h().fromHandle);
  }), ve(
    () => (h(), G(P()), g(S)),
    () => {
      var Se, tt, Ae;
      F(V, ((Se = h().fromHandle) == null ? void 0 : Se.nodeId) === j && ((tt = h().fromHandle) == null ? void 0 : tt.type) === P() && ((Ae = h().fromHandle) == null ? void 0 : Ae.id) === g(S));
    }
  ), ve(
    () => (h(), G(P()), g(S)),
    () => {
      var Se, tt, Ae;
      F(O, ((Se = h().toHandle) == null ? void 0 : Se.nodeId) === j && ((tt = h().toHandle) == null ? void 0 : tt.type) === P() && ((Ae = h().toHandle) == null ? void 0 : Ae.id) === g(S));
    }
  ), ve(
    () => (l(), h(), G(P()), g(S)),
    () => {
      var Se, tt, Ae;
      F(L, l() === cr.Strict ? ((Se = h().fromHandle) == null ? void 0 : Se.type) !== P() : j !== ((tt = h().fromHandle) == null ? void 0 : tt.nodeId) || g(S) !== ((Ae = h().fromHandle) == null ? void 0 : Ae.id));
    }
  ), ve(() => (g(O), h()), () => {
    F(D, g(O) && h().isValid);
  }), vt(), Oe();
  var ge = C0();
  ye(ge, "data-nodeid", j);
  let en;
  var tn = Y(ge);
  pt(tn, t, "default", {}), X(ge), ke(
    (Se, tt) => {
      ye(ge, "data-handleid", g(S)), ye(ge, "data-handlepos", N()), ye(ge, "data-id", `${d() ?? ""}-${j ?? ""}-${A() || ""}-${P() ?? ""}`), en = mt(ge, 1, Se, null, en, tt), dt(ge, $());
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
        valid: g(D),
        connectingto: g(O),
        connectingfrom: g(V),
        source: !g(k),
        target: g(k),
        connectablestart: g(E),
        connectableend: g(E),
        connectable: g(E),
        connectionindicator: g(E) && (!g(M) || g(L))
      })
    ],
    pe
  ), Xe("mousedown", ge, it), Xe("touchstart", ge, it), T(e, ge);
  var hn = fe({
    get id() {
      return A();
    },
    set id(Se) {
      A(Se), p();
    },
    get type() {
      return P();
    },
    set type(Se) {
      P(Se), p();
    },
    get position() {
      return N();
    },
    set position(Se) {
      N(Se), p();
    },
    get style() {
      return $();
    },
    set style(Se) {
      $(Se), p();
    },
    get isValidConnection() {
      return H();
    },
    set isValidConnection(Se) {
      H(Se), p();
    },
    get onconnect() {
      return z();
    },
    set onconnect(Se) {
      z(Se), p();
    },
    get ondisconnect() {
      return I();
    },
    set ondisconnect(Se) {
      I(Se), p();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Se) {
      B(Se), p();
    },
    get class() {
      return K();
    },
    set class(Se) {
      K(Se), p();
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
  Oe();
  var a = _0(), s = be(a);
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
  }), ke(() => {
    var f;
    return Rt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), T(e, a), fe({
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
function Pc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Oe(), Me();
  var i = k0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), fe({
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
ie(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
var E0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Oe(), Me();
  var i = E0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  return Un(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), fe({
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
function Mc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ie(Mc, {}, [], [], !0);
function Ml(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ci(e, { target: t, domNode: n }) {
  return Ml(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ml(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var S0 = /* @__PURE__ */ re("<div><!></div>");
function Vc(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(i, "$domNode", n), { domNode: i } = Ge();
  Oe();
  var a = S0(), s = Y(a);
  pt(s, t, "default", {}), X(a), ht(a, (l, u) => Ci == null ? void 0 : Ci(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), T(e, a), fe(), r();
}
ie(Vc, {}, ["default"], [], !0);
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
var P0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Nc(e, t) {
  de(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = zc(), a = sr("svelteflow__edge_id");
  return Oe(), Vc(e, {
    children: (s, l) => {
      var u = P0();
      let c;
      var d = Y(u);
      pt(d, t, "default", {}), X(u), ke(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Xe("keyup", u, () => {
      }), Xe("click", u, () => {
        a && i(a);
      }), T(s, u);
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
ie(Nc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var H0 = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), M0 = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  de(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Oe();
  var w = M0(), b = be(w), x = Z(b);
  {
    var _ = (y) => {
      var k = H0();
      ye(k, "stroke-opacity", 0), ye(k, "stroke-width", v), ke(() => ye(k, "d", r())), T(y, k);
    };
    xe(x, (y) => {
      v && y(_);
    });
  }
  var h = Z(x);
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
        children: (k, E) => {
          Me();
          var S = Be();
          ke(() => Rt(S, o())), T(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    xe(h, (y) => {
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
  ), T(e, w), fe({
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
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(pc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Oe(), zo(e, {
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
  }), fe({
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return ve(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Oe(), zo(e, {
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
  }), fe({
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
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
    () => (g(r), g(o), g(i), G(f()), G(v()), G(w()), G(b())),
    () => {
      ((x) => (F(r, x[0]), F(o, x[1]), F(i, x[2])))(Oa({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), vt(), Oe(), zo(e, {
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
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), vt(), Oe(), zo(e, {
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
  }), fe({
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
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
}, O0 = (e, t, n, r = [0, 0], o = mi) => {
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
}, Tc = {
  input: Pc,
  output: Hc,
  default: $i,
  group: Mc
}, Ic = {
  straight: Dc,
  smoothstep: Oc,
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
    const w = Mo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = hs(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: O0(e, s, l, d, f),
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
    nodeTypes: we(Tc),
    edgeTypes: we(Ic),
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
function T0(e) {
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
function I0(e) {
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
function Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
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
      ...Tc,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...Ic,
      ...$
    });
  }
  function c($) {
    const H = q(s.edges);
    s.edges.set(Wp($, H));
  }
  const d = ($, H = !1) => {
    var z;
    const I = q(s.nodeLookup);
    for (const [B, K] of $) {
      const j = (z = I.get(B)) == null ? void 0 : z.internals.userNode;
      j && (j.position = K.position, j.dragging = H);
    }
    s.nodes.update((B) => B);
  };
  function f($) {
    var H, z, I;
    const B = q(s.nodeLookup), K = q(s.parentLookup), { changes: j, updatedInternals: ue } = r0($, B, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ue) {
      if (Jp(B, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), W = w({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of j) {
        const W = (H = B.get(Q.id)) == null ? void 0 : H.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const ae = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((z = Q.dimensions) == null ? void 0 : z.width) ?? W.width, W.height = ((I = Q.dimensions) == null ? void 0 : I.height) ?? W.height), W.measured = ae;
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
    const H = q(s.panZoom), z = q(s.domNode);
    if (!H || !z)
      return Promise.resolve(!1);
    const { width: I, height: B } = ps(z), K = pl(q(s.nodeLookup), $);
    return ml({
      nodes: K,
      width: I,
      height: B,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: H
    }, $);
  }
  function w($) {
    const H = q(s.panZoom);
    if (!H)
      return !1;
    const z = pl(q(s.nodeLookup), $);
    return ml({
      nodes: z,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: H
    }, $), z.size > 0;
  }
  function b($, H) {
    const z = q(s.panZoom);
    return z ? z.scaleBy($, H) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function _($) {
    return b(1 / 1.2, $);
  }
  function h($) {
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
  function k($) {
    let H = !1;
    return $.forEach((z) => {
      z.selected && (z.selected = !1, H = !0);
    }), H;
  }
  function E($) {
    var H;
    (H = q(s.panZoom)) == null || H.setClickDistance($);
  }
  function S($) {
    k(($ == null ? void 0 : $.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k(($ == null ? void 0 : $.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var H;
    if ($) {
      const z = q(s.nodes), I = q(s.edges), B = z.filter((Q) => Q.selected), K = I.filter((Q) => Q.selected), { nodes: j, edges: ue } = await uc({
        nodesToRemove: B,
        edgesToRemove: K,
        nodes: z,
        edges: I,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || ue.length) && (s.nodes.update((Q) => Q.filter((W) => !j.some((ae) => ae.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ue.some((ae) => ae.id === W.id))), (H = q(s.ondelete)) == null || H({
        nodes: j,
        edges: ue
      }));
    }
  });
  function M($) {
    const H = q(s.multiselectionKeyPressed);
    s.nodes.update((z) => z.map((I) => {
      const B = $.includes(I.id), K = H && I.selected || B;
      return I.selected = K, I;
    })), H || s.edges.update((z) => z.map((I) => (I.selected = !1, I)));
  }
  function V($) {
    const H = q(s.multiselectionKeyPressed);
    s.edges.update((z) => z.map((I) => {
      const B = $.includes(I.id), K = H && I.selected || B;
      return I.selected = K, I;
    })), H || s.nodes.update((z) => z.map((I) => (I.selected = !1, I)));
  }
  function O($) {
    var H;
    const z = (H = q(s.nodes)) == null ? void 0 : H.find((I) => I.id === $);
    if (!z) {
      console.warn("012", Or.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), z.selected ? z.selected && q(s.multiselectionKeyPressed) && S({ nodes: [z], edges: [] }) : M([$]);
  }
  function L($) {
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
  const D = we(Va), A = ($) => {
    D.set({ ...$ });
  };
  function P() {
    D.set(Va);
  }
  function N() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), S(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: T0(s),
    visibleNodes: I0(s),
    connection: Kn([D, s.viewport], ([$, H]) => $.inProgress ? {
      ...$,
      to: Vo($.to, [H.x, H.y, H.zoom])
    } : { ...$ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([$, H, z]) => Gp($, { defaultColor: H, id: z })),
    initialized: (() => {
      let $ = !1;
      const H = q(s.nodes).length, z = q(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([I, B, K]) => $ || (H === 0 ? $ = K : z === 0 ? $ = K && I : $ = K && I && B, $));
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
    zoomOut: _,
    fitView: ($) => v($),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: E,
    unselectNodesAndEdges: S,
    addSelectedNodes: M,
    addSelectedEdges: V,
    handleNodeSelection: O,
    panBy: L,
    updateConnection: A,
    cancelConnection: P,
    reset: N
  };
}
function Ge() {
  const e = sr(qi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function A0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
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
  const [n, r] = ot(), o = () => U(z, "$panActivationKeyPressed", n), i = () => U(A, "$minZoom", n), a = () => U(P, "$maxZoom", n), s = () => U(I, "$zoomActivationKeyPressed", n), l = () => U(D, "$selectionRect", n), u = () => U($, "$translateExtent", n), c = () => U(H, "$lib", n), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), _ = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), S = m(t, "panOnDrag", 12), M = m(t, "panOnScroll", 12), V = m(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: L,
    selectionRect: D,
    minZoom: A,
    maxZoom: P,
    dragging: N,
    translateExtent: $,
    lib: H,
    panActivationKeyPressed: z,
    zoomActivationKeyPressed: I,
    viewportInitialized: B
  } = Ge(), K = (W) => O.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Wt(() => {
    ci(B, !0);
  }), ve(() => G(w()), () => {
    F(d, w() || { x: 0, y: 0, zoom: 1 });
  }), ve(
    () => (o(), G(S())),
    () => {
      F(f, o() || S());
    }
  ), ve(
    () => (o(), G(M())),
    () => {
      F(v, o() || M());
    }
  ), vt(), Oe();
  var j = Z0(), ue = Y(j);
  pt(ue, t, "default", {}), X(j), ht(j, (W, ae) => Vl == null ? void 0 : Vl(W, ae), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: N,
    panZoom: L,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: E(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || qn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: K
  })), T(e, j);
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
      return h();
    },
    set panOnScrollMode(W) {
      h(W), p();
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
      return E();
    },
    set zoomOnPinch(W) {
      E(W), p();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), p();
    },
    get panOnScroll() {
      return M();
    },
    set panOnScroll(W) {
      M(W), p();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(W) {
      V(W), p();
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
var R0 = /* @__PURE__ */ re("<div><!></div>");
const X0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  de(t, !1), Je(e, X0);
  const [n, r] = ot(), o = () => U(P, "$panActivationKeyPressed", n), i = () => U(D, "$selectionKeyPressed", n), a = () => U(O, "$selectionRect", n), s = () => U(V, "$elementsSelectable", n), l = () => U(L, "$selectionRectMode", n), u = () => U(E, "$edges", n), c = () => U(k, "$nodeLookup", n), d = () => U(S, "$viewport", n), f = () => U(A, "$selectionMode", n), v = () => U(M, "$dragging", n), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne();
  let _ = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const C = Ii(), {
    nodes: y,
    nodeLookup: k,
    edges: E,
    viewport: S,
    dragging: M,
    elementsSelectable: V,
    selectionRect: O,
    selectionRectMode: L,
    selectionKeyPressed: D,
    selectionMode: A,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: N
  } = Ge();
  let $ = /* @__PURE__ */ ne(), H = null, z = [], I = !1;
  function B(oe) {
    if (I) {
      I = !1;
      return;
    }
    C("paneclick", { event: oe }), N(), L.set(null);
  }
  function K(oe) {
    var ee, ze;
    if (H = g($).getBoundingClientRect(), !V || !g(b) || oe.button !== 0 || oe.target !== g($) || !H)
      return;
    (ze = (ee = oe.target) == null ? void 0 : ee.setPointerCapture) == null || ze.call(ee, oe.pointerId);
    const { x: He, y: Re } = Nn(oe, H);
    N(), O.set({
      width: 0,
      height: 0,
      startX: He,
      startY: Re,
      x: He,
      y: Re
    });
  }
  function j(oe) {
    if (!g(b) || !H || !a())
      return;
    I = !0;
    const ee = Nn(oe, H), ze = a().startX ?? 0, He = a().startY ?? 0, Re = {
      ...a(),
      x: ee.x < ze ? ee.x : ze,
      y: ee.y < He ? ee.y : He,
      width: Math.abs(ee.x - ze),
      height: Math.abs(ee.y - He)
    }, te = z.map((le) => le.id), We = za(z, u()).map((le) => le.id);
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
    const Ue = za(z, u()).map((le) => le.id), se = z.map((le) => le.id);
    (te.length !== se.length || se.some((le) => !te.includes(le))) && y.update((le) => le.map(Nl(se))), (We.length !== Ue.length || Ue.some((le) => !We.includes(le))) && E.update((le) => le.map(Nl(Ue))), L.set("user"), O.set(Re);
  }
  function ue(oe) {
    var ee, ze;
    oe.button === 0 && ((ze = (ee = oe.target) == null ? void 0 : ee.releasePointerCapture) == null || ze.call(ee, oe.pointerId), !g(b) && l() === "user" && oe.target === g($) && (B == null || B(oe)), O.set(null), z.length > 0 && ci(L, "nodes"), i() && (I = !1));
  }
  const Q = (oe) => {
    var ee;
    if (Array.isArray(g(w)) && (ee = g(w)) != null && ee.includes(2)) {
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
    () => (i(), a(), G(h()), g(w)),
    () => {
      F(b, i() || a() || h() && g(w) !== !0);
    }
  ), ve(
    () => (s(), g(b), l()),
    () => {
      F(x, s() && (g(b) || l() === "user"));
    }
  ), vt(), Oe();
  var W = R0(), ae = /* @__PURE__ */ Pe(() => g(x) ? void 0 : zl(B, g($))), he = /* @__PURE__ */ Pe(() => zl(Q, g($)));
  let me;
  var ce = Y(W);
  pt(ce, t, "default", {}), X(W), Cn(W, (oe) => F($, oe), () => g($)), ke(
    (oe) => me = mt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, me, oe),
    [
      () => ({
        draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    pe
  ), Xe("click", W, function(...oe) {
    var ee;
    (ee = g(ae)) == null || ee.apply(this, oe);
  }), Xe("pointerdown", W, function(...oe) {
    var ee;
    (ee = g(x) ? K : void 0) == null || ee.apply(this, oe);
  }), Xe("pointermove", W, function(...oe) {
    var ee;
    (ee = g(x) ? j : void 0) == null || ee.apply(this, oe);
  }), Xe("pointerup", W, function(...oe) {
    var ee;
    (ee = g(x) ? ue : void 0) == null || ee.apply(this, oe);
  }), Xe("contextmenu", W, function(...oe) {
    var ee;
    (ee = g(he)) == null || ee.apply(this, oe);
  }), T(e, W);
  var Ve = fe({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(oe) {
      _(oe), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(oe) {
      h(oe), p();
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
  Oe();
  var a = Y0(), s = Y(a);
  pt(s, t, "default", {}), X(a), ke(() => dt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), T(e, a), fe(), r();
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
  const [n, r] = ot(), o = () => U(he, "$nodeTypes", n), i = () => U(ee, "$elementsSelectable", n), a = () => U(ze, "$nodesDraggable", n), s = () => U(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), _ = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), S = m(t, "style", 13, void 0), M = m(t, "type", 13, "default"), V = m(t, "isParent", 13, !1), O = m(t, "positionX", 13), L = m(t, "positionY", 13), D = m(t, "sourcePosition", 13, void 0), A = m(t, "targetPosition", 13, void 0), P = m(t, "zIndex", 13), N = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), H = m(t, "initialWidth", 13, void 0), z = m(t, "initialHeight", 13, void 0), I = m(t, "width", 13, void 0), B = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), ue = m(t, "parentId", 13, void 0), Q = m(t, "nodeClickDistance", 13, void 0), W = m(t, "class", 13, "");
  const ae = Ge(), {
    nodeTypes: he,
    nodeDragThreshold: me,
    selectNodesOnDrag: ce,
    handleNodeSelection: Ve,
    updateNodeInternals: oe,
    elementsSelectable: ee,
    nodesDraggable: ze
  } = ae;
  let He = /* @__PURE__ */ ne(void 0, !0), Re = /* @__PURE__ */ ne(null, !0);
  const te = Ii(), We = we(h());
  let Ue = /* @__PURE__ */ ne(void 0, !0), se = /* @__PURE__ */ ne(void 0, !0), le = /* @__PURE__ */ ne(void 0, !0);
  Vr("svelteflow__node_id", v()), Vr("svelteflow__node_connectable", We), is(() => {
    var J;
    g(Re) && ((J = E()) == null || J.unobserve(g(Re)));
  });
  function Ce(J) {
    _() && (!q(ce) || !x() || q(me) > 0) && Ve(v()), te("nodeclick", { node: f().internals.userNode, event: J });
  }
  ve(() => G(M()), () => {
    F(l, M() || "default");
  }), ve(() => (o(), g(l)), () => {
    F(u, !!o()[g(l)]);
  }), ve(
    () => (o(), g(l), $i),
    () => {
      F(c, o()[g(l)] || $i);
    }
  ), ve(
    () => (g(u), G(M())),
    () => {
      g(u) || console.warn("003", Or.error003(M()));
    }
  ), ve(
    () => (G(I()), G(B()), G(H()), G(z()), G(N()), G($())),
    () => {
      F(d, K0({
        width: I(),
        height: B(),
        initialWidth: H(),
        initialHeight: z(),
        measuredWidth: N(),
        measuredHeight: $()
      }));
    }
  ), ve(() => G(h()), () => {
    We.set(!!h());
  }), ve(
    () => (g(Ue), g(l), g(se), G(D()), g(le), G(A()), G(v()), g(He)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(se) && D() !== g(se) || g(le) && A() !== g(le)) && requestAnimationFrame(() => oe(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(He),
            force: !0
          }
        ]
      ]))), F(Ue, g(l)), F(se, D()), F(le, A());
    }
  ), ve(
    () => (G(E()), g(He), g(Re), G(j())),
    () => {
      E() && (g(He) !== g(Re) || !j()) && (g(Re) && E().unobserve(g(Re)), g(He) && E().observe(g(He)), F(Re, g(He)));
    }
  ), vt(), Oe(!0);
  var Ke = et(), Ne = be(Ke);
  {
    var st = (J) => {
      var Ie = q0();
      let ge, en;
      var tn = Y(Ie);
      const hn = /* @__PURE__ */ pe(() => b() ?? !1), Se = /* @__PURE__ */ pe(() => _() ?? i() ?? !0), tt = /* @__PURE__ */ pe(() => C() ?? !0), Ae = /* @__PURE__ */ pe(() => x() ?? a() ?? !0);
      ku(tn, () => g(c), (De, nt) => {
        nt(De, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(hn);
          },
          get selectable() {
            return g(Se);
          },
          get deletable() {
            return g(tt);
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return A();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Ae);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return ue();
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
            return L();
          },
          get width() {
            return I();
          },
          get height() {
            return B();
          }
        });
      }), X(Ie), ht(Ie, (De, nt) => ki == null ? void 0 : ki(De, nt), () => ({
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
      })), Cn(Ie, (De) => F(He, De), () => g(He)), It(() => Xe("click", Ie, Ce)), It(() => Xe("mouseenter", Ie, (De) => te("nodemouseenter", { node: f(), event: De }))), It(() => Xe("mouseleave", Ie, (De) => te("nodemouseleave", { node: f(), event: De }))), It(() => Xe("mousemove", Ie, (De) => te("nodemousemove", { node: f(), event: De }))), It(() => Xe("contextmenu", Ie, (De) => te("nodecontextmenu", { node: f(), event: De }))), ke(
        (De, nt) => {
          ye(Ie, "data-id", v()), ge = mt(Ie, 1, De, null, ge, nt), en = dt(Ie, `${S() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, en, {
            "z-index": P(),
            transform: `translate(${O() ?? ""}px, ${L() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => fn(Et([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: _(),
            nopan: x(),
            parent: V()
          })
        ],
        pe
      ), T(J, Ie);
    };
    xe(Ne, (J) => {
      y() || J(st);
    });
  }
  T(e, Ke);
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
      return h();
    },
    set connectable(J) {
      h(J), p();
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
      return E();
    },
    set resizeObserver(J) {
      E(J), p();
    },
    get style() {
      return S();
    },
    set style(J) {
      S(J), p();
    },
    get type() {
      return M();
    },
    set type(J) {
      M(J), p();
    },
    get isParent() {
      return V();
    },
    set isParent(J) {
      V(J), p();
    },
    get positionX() {
      return O();
    },
    set positionX(J) {
      O(J), p();
    },
    get positionY() {
      return L();
    },
    set positionY(J) {
      L(J), p();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(J) {
      D(J), p();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(J) {
      A(J), p();
    },
    get zIndex() {
      return P();
    },
    set zIndex(J) {
      P(J), p();
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
      return H();
    },
    set initialWidth(J) {
      H(J), p();
    },
    get initialHeight() {
      return z();
    },
    set initialHeight(J) {
      z(J), p();
    },
    get width() {
      return I();
    },
    set width(J) {
      I(J), p();
    },
    get height() {
      return B();
    },
    set height(J) {
      B(J), p();
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
      const E = k.target.getAttribute("data-id");
      y.set(E, { id: E, nodeElement: k.target, force: !0 });
    }), w(y);
  });
  is(() => {
    x == null || x.disconnect();
  }), Oe();
  var _ = j0();
  Nt(_, 5, o, (C) => C.id, (C, y) => {
    const k = /* @__PURE__ */ pe(() => !!g(y).selected), E = /* @__PURE__ */ pe(() => !!g(y).hidden), S = /* @__PURE__ */ pe(() => !!(g(y).draggable || i() && typeof g(y).draggable > "u")), M = /* @__PURE__ */ pe(() => !!(g(y).selectable || a() && typeof g(y).selectable > "u")), V = /* @__PURE__ */ pe(() => !!(g(y).connectable || s() && typeof g(y).connectable > "u")), O = /* @__PURE__ */ pe(() => g(y).deletable ?? !0), L = /* @__PURE__ */ pe(() => l().has(g(y).id)), D = /* @__PURE__ */ pe(() => g(y).type ?? "default"), A = /* @__PURE__ */ pe(() => g(y).internals.z ?? 0), P = /* @__PURE__ */ pe(() => gc(g(y)));
    Xc(C, {
      get node() {
        return g(y);
      },
      get id() {
        return g(y).id;
      },
      get data() {
        return g(y).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(E);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(M);
      },
      get connectable() {
        return g(V);
      },
      get deletable() {
        return g(O);
      },
      get positionX() {
        return g(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(L);
      },
      get style() {
        return g(y).style;
      },
      get class() {
        return g(y).class;
      },
      get type() {
        return g(D);
      },
      get sourcePosition() {
        return g(y).sourcePosition;
      },
      get targetPosition() {
        return g(y).targetPosition;
      },
      get dragging() {
        return g(y).dragging;
      },
      get zIndex() {
        return g(A);
      },
      get dragHandle() {
        return g(y).dragHandle;
      },
      get initialized() {
        return g(P);
      },
      get width() {
        return g(y).width;
      },
      get height() {
        return g(y).height;
      },
      get initialWidth() {
        return g(y).initialWidth;
      },
      get initialHeight() {
        return g(y).initialHeight;
      },
      get measuredWidth() {
        return g(y).measured.width;
      },
      get measuredHeight() {
        return g(y).measured.height;
      },
      get parentId() {
        return g(y).parentId;
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
  }), X(_), T(e, _);
  var h = fe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), p();
    }
  });
  return r(), h;
}
ie(Yc, { nodeClickDistance: {} }, [], [], !0);
var G0 = /* @__PURE__ */ $e('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(W, "$edgeTypes", n), i = () => U(ae, "$flowId", n), a = () => U(he, "$elementsSelectable", n), s = () => U(Q, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), _ = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), S = m(t, "deletable", 13, void 0), M = m(t, "hidden", 13, !1), V = m(t, "label", 13, void 0), O = m(t, "labelStyle", 13, void 0), L = m(t, "markerStart", 13, void 0), D = m(t, "markerEnd", 13, void 0), A = m(t, "sourceHandle", 13, void 0), P = m(t, "targetHandle", 13, void 0), N = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), H = m(t, "targetX", 13), z = m(t, "targetY", 13), I = m(t, "sourcePosition", 13), B = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), ue = m(t, "class", 13, "");
  Vr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: ae,
    elementsSelectable: he
  } = Ge(), me = Ii(), ce = zc();
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
    () => (o(), g(l), _i),
    () => {
      F(u, o()[g(l)] || _i);
    }
  ), ve(
    () => (G(L()), i()),
    () => {
      F(c, L() ? `url('#${Da(L(), i())}')` : void 0);
    }
  ), ve(
    () => (G(D()), i()),
    () => {
      F(d, D() ? `url('#${Da(D(), i())}')` : void 0);
    }
  ), ve(
    () => (G(E()), a()),
    () => {
      F(f, E() ?? a());
    }
  ), vt(), Oe(!0);
  var ee = et(), ze = be(ee);
  {
    var He = (te) => {
      var We = G0();
      let Ue;
      var se = Y(We);
      let le;
      var Ce = Y(se);
      const Ke = /* @__PURE__ */ pe(() => S() ?? !0);
      ku(Ce, () => g(u), (Ne, st) => {
        st(Ne, {
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
            return H();
          },
          get targetY() {
            return z();
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return y();
          },
          get selected() {
            return k();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return O();
          },
          get data() {
            return _();
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
            return A();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), X(se), X(We), ke(
        (Ne, st) => {
          Ue = dt(We, "", Ue, { "z-index": C() }), le = mt(se, 0, Ne, null, le, st), ye(se, "data-id", v()), ye(se, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => fn(Et(["svelte-flow__edge", ue()])),
          () => ({
            animated: y(),
            selected: k(),
            selectable: g(f)
          })
        ],
        pe
      ), Xe("click", se, Ve), Xe("contextmenu", se, (Ne) => {
        oe(Ne, "edgecontextmenu");
      }), Xe("mouseenter", se, (Ne) => {
        oe(Ne, "edgemouseenter");
      }), Xe("mouseleave", se, (Ne) => {
        oe(Ne, "edgemouseleave");
      }), T(te, We);
    };
    xe(ze, (te) => {
      M() || te(He);
    });
  }
  T(e, ee);
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
      return h();
    },
    set style(te) {
      h(te), p();
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
      return E();
    },
    set selectable(te) {
      E(te), p();
    },
    get deletable() {
      return S();
    },
    set deletable(te) {
      S(te), p();
    },
    get hidden() {
      return M();
    },
    set hidden(te) {
      M(te), p();
    },
    get label() {
      return V();
    },
    set label(te) {
      V(te), p();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(te) {
      O(te), p();
    },
    get markerStart() {
      return L();
    },
    set markerStart(te) {
      L(te), p();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(te) {
      D(te), p();
    },
    get sourceHandle() {
      return A();
    },
    set sourceHandle(te) {
      A(te), p();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(te) {
      P(te), p();
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
      return H();
    },
    set targetX(te) {
      H(te), p();
    },
    get targetY() {
      return z();
    },
    set targetY(te) {
      z(te), p();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(te) {
      I(te), p();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(te) {
      B(te), p();
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
  }), Oe(), fe({
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
  Oe();
  var a = U0();
  Nt(a, 5, o, (s) => s.id, (s, l) => {
    jc(s, ct(() => g(l)));
  }), X(a), T(e, a), fe(), r();
}
ie(qc, {}, [], [], !0);
var Q0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), J0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), em = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  de(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Oe();
  var c = em(), d = Y(c);
  {
    var f = (w) => {
      var b = Q0();
      ke(() => {
        ye(b, "stroke", l()), ye(b, "stroke-width", u());
      }), T(w, b);
    }, v = (w, b) => {
      {
        var x = (_) => {
          var h = J0();
          ke(() => {
            ye(h, "stroke", l()), ye(h, "stroke-width", u()), ye(h, "fill", l());
          }), T(_, h);
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
  }), T(e, c), fe({
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
  }), Oe();
  var d = tm(), f = Y(d), v = Y(f);
  qc(v, {}), X(f);
  var w = Z(f, 2);
  Nt(w, 1, o, (h) => h.id, (h, C) => {
    const y = /* @__PURE__ */ pe(() => g(C).selectable ?? i()), k = /* @__PURE__ */ pe(() => g(C).type || "default");
    Wc(h, {
      get id() {
        return g(C).id;
      },
      get source() {
        return g(C).source;
      },
      get target() {
        return g(C).target;
      },
      get data() {
        return g(C).data;
      },
      get style() {
        return g(C).style;
      },
      get animated() {
        return g(C).animated;
      },
      get selected() {
        return g(C).selected;
      },
      get selectable() {
        return g(y);
      },
      get deletable() {
        return g(C).deletable;
      },
      get hidden() {
        return g(C).hidden;
      },
      get label() {
        return g(C).label;
      },
      get labelStyle() {
        return g(C).labelStyle;
      },
      get markerStart() {
        return g(C).markerStart;
      },
      get markerEnd() {
        return g(C).markerEnd;
      },
      get sourceHandle() {
        return g(C).sourceHandle;
      },
      get targetHandle() {
        return g(C).targetHandle;
      },
      get sourceX() {
        return g(C).sourceX;
      },
      get sourceY() {
        return g(C).sourceY;
      },
      get targetX() {
        return g(C).targetX;
      },
      get targetY() {
        return g(C).targetY;
      },
      get sourcePosition() {
        return g(C).sourcePosition;
      },
      get targetPosition() {
        return g(C).targetPosition;
      },
      get ariaLabel() {
        return g(C).ariaLabel;
      },
      get interactionWidth() {
        return g(C).interactionWidth;
      },
      get class() {
        return g(C).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(E) {
          Le.call(this, t, E);
        },
        edgecontextmenu(E) {
          Le.call(this, t, E);
        },
        edgemouseenter(E) {
          Le.call(this, t, E);
        },
        edgemouseleave(E) {
          Le.call(this, t, E);
        }
      }
    });
  });
  var b = Z(w, 2);
  {
    var x = (h) => {
      Kc(h, {
        onMount: () => {
          ci(l, !0);
        },
        onDestroy: () => {
          ci(l, !1);
        }
      });
    };
    xe(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  X(d), T(e, d);
  var _ = fe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
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
      })), T(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return T(e, s), fe({
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
  Oe();
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
  const [n, r] = ot(), o = () => U(l, "$selectionRectMode", n), i = () => U(c, "$nodeLookup", n), a = () => U(u, "$nodes", n), s = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ii();
  let f = /* @__PURE__ */ ne(null);
  function v(h) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function w(h) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  ve(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, Mo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), vt(), Oe();
  var b = et(), x = be(b);
  {
    var _ = (h) => {
      var C = om(), y = Y(C);
      bs(y, { width: "100%", height: "100%", x: 0, y: 0 }), X(C), ht(C, (k, E) => ki == null ? void 0 : ki(k, E), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, E, S, M) => {
          d("nodedrag", { event: k, targetNode: null, nodes: M });
        },
        onDragStart: (k, E, S, M) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: M });
        },
        onDragStop: (k, E, S, M) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: M });
        }
      })), It(() => Xe("contextmenu", C, v)), It(() => Xe("click", C, w)), It(() => Xe("keyup", C, () => {
      })), ke(() => dt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), T(h, C);
    };
    xe(x, (h) => {
      o() === "nodes" && g(f) && Mn(g(f).x) && Mn(g(f).y) && h(_);
    });
  }
  T(e, b), fe(), r();
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
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function w(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((y) => {
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
  return Oe(), Xe("blur", Ht, _), Xe("contextmenu", Ht, _), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ap(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), fe({
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
    () => (o(), G(c()), i(), g(b), Oa),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: k, fromPosition: E, toPosition: S } = o(), M = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: E,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case kr.Bezier:
            ((V) => F(b, V[0]))(pc(M));
            break;
          case kr.Step:
            ((V) => F(b, V[0]))(xi({ ...M, borderRadius: 0 }));
            break;
          case kr.SmoothStep:
            ((V) => F(b, V[0]))(xi(M));
            break;
          default:
            ((V) => F(b, V[0]))(Oa(M));
        }
      }
    }
  ), vt(), Oe();
  var x = et(), _ = be(x);
  {
    var h = (y) => {
      var k = sm(), E = Y(k), S = Y(E);
      pt(S, t, "connectionLine", {});
      var M = Z(S);
      {
        var V = (O) => {
          var L = am();
          ke(() => {
            ye(L, "d", g(b)), dt(L, u());
          }), T(O, L);
        };
        xe(M, (O) => {
          c() || O(V);
        });
      }
      X(E), X(k), ke(
        (O) => {
          ye(k, "width", a()), ye(k, "height", s()), dt(k, l()), mt(E, 0, O);
        },
        [
          () => fn(Et([
            "svelte-flow__connection",
            Mp(o().isValid)
          ]))
        ],
        pe
      ), T(y, k);
    };
    xe(_, (y) => {
      o().inProgress && y(h);
    });
  }
  T(e, x);
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
function No(e, t) {
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
  }), vt(), Oe();
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
        ...g(s)
      ])
    ],
    pe
  ), T(e, f);
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
ie(No, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var um = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
  de(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Oe();
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
          T(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return T(e, o), fe({
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
var vm = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), gm = /* @__PURE__ */ re("<!> <!>", 1), hm = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const pm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
  const n = O1(t), r = at(t, [
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
  const [i, a] = ot(), s = () => U(C(), "$viewport", i), l = () => U(Qi, "$initialized", i), u = () => U(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), _ = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), S = m(t, "selectionMode", 12, void 0), M = m(t, "panActivationKey", 12, void 0), V = m(t, "multiSelectionKey", 12, void 0), O = m(t, "zoomActivationKey", 12, void 0), L = m(t, "nodesDraggable", 12, void 0), D = m(t, "nodesConnectable", 12, void 0), A = m(t, "nodeDragThreshold", 12, void 0), P = m(t, "elementsSelectable", 12, void 0), N = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), H = m(t, "connectionRadius", 12, void 0), z = m(t, "connectionLineType", 12, void 0), I = m(t, "connectionMode", 28, () => cr.Strict), B = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), ue = m(t, "onMove", 12, void 0), Q = m(t, "onMoveEnd", 12, void 0), W = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), he = m(t, "nodeExtent", 12, void 0), me = m(t, "onlyRenderVisibleElements", 12, void 0), ce = m(t, "panOnScrollMode", 28, () => qn.Free), Ve = m(t, "preventScrolling", 12, !0), oe = m(t, "zoomOnScroll", 12, !0), ee = m(t, "zoomOnDoubleClick", 12, !0), ze = m(t, "zoomOnPinch", 12, !0), He = m(t, "panOnScroll", 12, !1), Re = m(t, "panOnDrag", 12, !0), te = m(t, "selectionOnDrag", 12, void 0), We = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), se = m(t, "onerror", 12, void 0), le = m(t, "ondelete", 12, void 0), Ce = m(t, "onedgecreate", 12, void 0), Ke = m(t, "attributionPosition", 12, void 0), Ne = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), J = m(t, "height", 12, void 0), Ie = m(t, "colorMode", 12, "light"), ge = m(t, "onconnect", 12, void 0), en = m(t, "onconnectstart", 12, void 0), tn = m(t, "onconnectend", 12, void 0), hn = m(t, "onbeforedelete", 12, void 0), Se = m(t, "oninit", 12, void 0), tt = m(t, "nodeOrigin", 12, void 0), Ae = m(t, "paneClickDistance", 12, 0), De = m(t, "nodeClickDistance", 12, 0), nt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = m(t, "style", 12, void 0), Kt = m(t, "class", 12, void 0), Kr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), St = /* @__PURE__ */ ne();
  const mr = s() || h(), rt = g1(qi) ? Ge() : A0({
    nodes: q(f()),
    edges: q(v()),
    width: it(),
    height: J(),
    fitView: w(),
    nodeOrigin: tt(),
    nodeExtent: he()
  });
  Wt(() => (rt.width.set(g(wt)), rt.height.set(g(St)), rt.domNode.set(g(Kr)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport(C()), w() !== void 0 && rt.fitViewOnInit.set(w()), b() && rt.fitViewOptions.set(b()), Ol(rt, {
    nodeTypes: y(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: ae(),
    paneClickDistance: Ae()
  }), () => {
    rt.reset();
  }));
  const { initialized: Qi } = rt;
  let qr = /* @__PURE__ */ ne(!1);
  ve(
    () => (g(wt), g(St)),
    () => {
      g(wt) !== void 0 && g(St) !== void 0 && (rt.width.set(g(wt)), rt.height.set(g(St)));
    }
  ), ve(
    () => (g(qr), l(), G(Se())),
    () => {
      var R;
      !g(qr) && l() && ((R = Se()) == null || R(), F(qr, !0));
    }
  ), ve(
    () => (G(d()), G(z()), G(H()), G(S()), G(N()), G(nt()), G(L()), G(D()), G(P()), G(me()), G(W()), G(We()), G(Ue()), G(se()), G(le()), G(Ce()), G(I()), G(A()), G(ge()), G(en()), G(tn()), G(hn()), G(tt()), Dl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: z(),
        connectionRadius: H(),
        selectionMode: S(),
        snapGrid: N(),
        defaultMarkerColor: nt(),
        nodesDraggable: L(),
        nodesConnectable: D(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: me(),
        isValidConnection: W(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: se(),
        ondelete: le(),
        onedgecreate: Ce(),
        connectionMode: I(),
        nodeDragThreshold: A(),
        onconnect: ge(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: hn(),
        nodeOrigin: tt()
      };
      Dl(rt, R);
    }
  ), ve(
    () => (G(y()), G(k()), G(x()), G(_()), G(ae()), G(Ae())),
    () => {
      Ol(rt, {
        nodeTypes: y(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: ae(),
        paneClickDistance: Ae()
      });
    }
  ), ve(
    () => G(Ie()),
    () => {
      Y1(F(c, fm(Ie())), "$colorModeClass", i);
    }
  ), vt(), Oe();
  var Lt = hm();
  let Io;
  var Ao = Y(Lt);
  Qc(Ao, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return M();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return O();
    }
  });
  var Zo = Z(Ao, 2);
  const Ji = /* @__PURE__ */ pe(() => ce() === void 0 ? qn.Free : ce()), Fd = /* @__PURE__ */ pe(() => Ve() === void 0 ? !0 : Ve()), Gd = /* @__PURE__ */ pe(() => oe() === void 0 ? !0 : oe()), Ud = /* @__PURE__ */ pe(() => ee() === void 0 ? !0 : ee()), Qd = /* @__PURE__ */ pe(() => ze() === void 0 ? !0 : ze()), Jd = /* @__PURE__ */ pe(() => He() === void 0 ? !1 : He()), ef = /* @__PURE__ */ pe(() => Re() === void 0 ? !0 : Re()), tf = /* @__PURE__ */ pe(() => Ae() === void 0 ? 0 : Ae());
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
      return g(Ji);
    },
    get preventScrolling() {
      return g(Fd);
    },
    get zoomOnScroll() {
      return g(Gd);
    },
    get zoomOnDoubleClick() {
      return g(Ud);
    },
    get zoomOnPinch() {
      return g(Qd);
    },
    get panOnScroll() {
      return g(Jd);
    },
    get panOnDrag() {
      return g(ef);
    },
    get paneClickDistance() {
      return g(tf);
    },
    children: (R, Dw) => {
      const of = /* @__PURE__ */ pe(() => Re() === void 0 ? !0 : Re());
      Bc(R, {
        get panOnDrag() {
          return g(of);
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
          var Ss = gm(), Ps = be(Ss);
          Rc(Ps, {
            children: (sf, Tw) => {
              var Hs = vm(), Ms = be(Hs);
              Fc(Ms, {
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
              var Vs = Z(Ms, 2);
              Jc(Vs, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, Iw) => {
                    var Ns = et(), uf = be(Ns);
                    pt(uf, t, "connectionLine", {}), T(Ze, Ns);
                  }
                }
              });
              var zs = Z(Vs, 6);
              Yc(zs, {
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
              var lf = Z(zs, 2);
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
              }), T(sf, Hs);
            },
            $$slots: { default: !0 }
          });
          var af = Z(Ps, 2);
          Gc(af, {}), T(jr, Ss);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Es = Z(Zo, 2);
  ed(Es, {
    get proOptions() {
      return Ne();
    },
    get position() {
      return Ke();
    }
  });
  var nf = Z(Es, 2);
  pt(nf, t, "default", {}), X(Lt), Cn(Lt, (R) => F(Kr, R), () => g(Kr)), ke(
    (R) => Io = ln(
      Lt,
      Io,
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
  ), Ks(Lt, "clientWidth", (R) => F(wt, R)), Ks(Lt, "clientHeight", (R) => F(St, R)), Xe("dragover", Lt, function(R) {
    Le.call(this, t, R);
  }), Xe("drop", Lt, function(R) {
    Le.call(this, t, R);
  }), T(e, Lt);
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
      return h();
    },
    set initialViewport(R) {
      h(R), p();
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
      return E();
    },
    set selectionKey(R) {
      E(R), p();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(R) {
      S(R), p();
    },
    get panActivationKey() {
      return M();
    },
    set panActivationKey(R) {
      M(R), p();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(R) {
      V(R), p();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(R) {
      O(R), p();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(R) {
      L(R), p();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(R) {
      D(R), p();
    },
    get nodeDragThreshold() {
      return A();
    },
    set nodeDragThreshold(R) {
      A(R), p();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(R) {
      P(R), p();
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
      return H();
    },
    set connectionRadius(R) {
      H(R), p();
    },
    get connectionLineType() {
      return z();
    },
    set connectionLineType(R) {
      z(R), p();
    },
    get connectionMode() {
      return I();
    },
    set connectionMode(R) {
      I(R), p();
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
      return he();
    },
    set nodeExtent(R) {
      he(R), p();
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
      return ze();
    },
    set zoomOnPinch(R) {
      ze(R), p();
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
      return Ne();
    },
    set proOptions(R) {
      Ne(R), p();
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
      return Ie();
    },
    set colorMode(R) {
      Ie(R), p();
    },
    get onconnect() {
      return ge();
    },
    set onconnect(R) {
      ge(R), p();
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
      return Se();
    },
    set oninit(R) {
      Se(R), p();
    },
    get nodeOrigin() {
      return tt();
    },
    set nodeOrigin(R) {
      tt(R), p();
    },
    get paneClickDistance() {
      return Ae();
    },
    set paneClickDistance(R) {
      Ae(R), p();
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
  const l = Ac({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Vr(qi, { getStore: () => l }), is(() => {
    l.reset();
  }), Oe();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), T(e, u), fe({
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
  Oe();
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
  }), T(e, c), fe({
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
  T(e, t);
}
ie(rd, {}, [], [], !0);
var wm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = wm();
  T(e, t);
}
ie(od, {}, [], [], !0);
var bm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = bm();
  T(e, t);
}
ie(id, {}, [], [], !0);
var xm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = xm();
  T(e, t);
}
ie(ad, {}, [], [], !0);
var $m = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = $m();
  T(e, t);
}
ie(sd, {}, [], [], !0);
var Cm = /* @__PURE__ */ re("<!> <!>", 1), _m = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(z, "$nodesDraggable", n), i = () => U(I, "$nodesConnectable", n), a = () => U(B, "$elementsSelectable", n), s = () => U(N, "$viewport", n), l = () => U($, "$minZoom", n), u = () => U(H, "$maxZoom", n), c = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), _ = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), S = m(t, "ariaLabel", 12, void 0), M = m(t, "style", 12, void 0), V = m(t, "orientation", 12, "vertical"), O = m(t, "fitViewOptions", 12, void 0), L = m(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: A,
    fitView: P,
    viewport: N,
    minZoom: $,
    maxZoom: H,
    nodesDraggable: z,
    nodesConnectable: I,
    elementsSelectable: B
  } = Ge(), K = {
    bgColor: h(),
    bgColorHover: C(),
    color: y(),
    colorHover: k(),
    borderColor: E()
  }, j = () => {
    D();
  }, ue = () => {
    A();
  }, Q = () => {
    P(O());
  }, W = () => {
    F(c, !g(c)), z.set(g(c)), I.set(g(c)), B.set(g(c));
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
  }), ve(() => G(V()), () => {
    F(v, V() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Oe();
  const ae = /* @__PURE__ */ pe(() => Et([
    "svelte-flow__controls",
    g(v),
    L()
  ])), he = /* @__PURE__ */ pe(() => S() ?? "Svelte Flow controls");
  No(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(he);
    },
    get style() {
      return M();
    },
    children: (ce, Ve) => {
      var oe = _m(), ee = be(oe);
      pt(ee, t, "before", {});
      var ze = Z(ee, 2);
      {
        var He = (Ce) => {
          var Ke = Cm(), Ne = be(Ke);
          no(Ne, ct(
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
              children: (it, J) => {
                rd(it);
              },
              $$slots: { default: !0 }
            }
          ));
          var st = Z(Ne, 2);
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
              $$events: { click: ue },
              children: (it, J) => {
                od(it);
              },
              $$slots: { default: !0 }
            }
          )), T(Ce, Ke);
        };
        xe(ze, (Ce) => {
          b() && Ce(He);
        });
      }
      var Re = Z(ze, 2);
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
              children: (Ke, Ne) => {
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
      var We = Z(Re, 2);
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
              children: (Ke, Ne) => {
                var st = et(), it = be(st);
                {
                  var J = (ge) => {
                    sd(ge);
                  }, Ie = (ge) => {
                    ad(ge);
                  };
                  xe(it, (ge) => {
                    g(c) ? ge(J) : ge(Ie, !1);
                  });
                }
                T(Ke, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(We, (Ce) => {
          _() && Ce(Ue);
        });
      }
      var se = Z(We, 2);
      pt(se, t, "default", {});
      var le = Z(se, 2);
      pt(le, t, "after", {}), T(ce, oe);
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
      return h();
    },
    set buttonBgColor(ce) {
      h(ce), p();
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
      return E();
    },
    set buttonBorderColor(ce) {
      E(ce), p();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(ce) {
      S(ce), p();
    },
    get style() {
      return M();
    },
    set style(ce) {
      M(ce), p();
    },
    get orientation() {
      return V();
    },
    set orientation(ce) {
      V(ce), p();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(ce) {
      O(ce), p();
    },
    get class() {
      return L();
    },
    set class(ce) {
      L(ce), p();
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
  Oe();
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
  ), T(e, o), fe({
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
var Em = /* @__PURE__ */ $e("<path></path>");
function cd(e, t) {
  de(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Oe();
  var a = Em();
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
  ), T(e, a), fe({
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
const Sm = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var Pm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Hm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  de(t, !1), Je(e, Hm);
  const [n, r] = ot(), o = () => U(k, "$flowId", n), i = () => U(y, "$viewport", n), a = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), _ = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: k } = Ge(), E = w() || Sm[f()], S = f() === jn.Dots, M = f() === jn.Cross, V = Array.isArray(v()) ? v() : [v(), v()];
  ve(
    () => (o(), G(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ve(() => i(), () => {
    F(s, [
      V[0] * i().zoom || 1,
      V[1] * i().zoom || 1
    ]);
  }), ve(() => i(), () => {
    F(l, E * i().zoom);
  }), ve(() => (g(l), g(s)), () => {
    F(u, M ? [g(l), g(l)] : g(s));
  }), ve(
    () => (g(l), g(u)),
    () => {
      F(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), Oe();
  var O = Pm();
  let L;
  var D = Y(O), A = Y(D);
  {
    var P = (z) => {
      const I = /* @__PURE__ */ pe(() => g(l) / 2);
      ud(z, {
        get radius() {
          return g(I);
        },
        get class() {
          return h();
        }
      });
    }, N = (z) => {
      cd(z, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    xe(A, (z) => {
      S ? z(P) : z(N, !1);
    });
  }
  X(D);
  var $ = Z(D);
  X(O), ke(
    (z) => {
      mt(O, 0, z, "svelte-1r7pe8d"), L = dt(O, "", L, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": _()
      }), ye(D, "id", g(a)), ye(D, "x", i().x % g(s)[0]), ye(D, "y", i().y % g(s)[1]), ye(D, "width", g(s)[0]), ye(D, "height", g(s)[1]), ye(D, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ye($, "fill", `url(#${g(a)})`);
    },
    [
      () => fn(Et(["svelte-flow__background", C()]))
    ],
    pe
  ), T(e, O);
  var H = fe({
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
      return h();
    },
    set patternClass(z) {
      h(z), p();
    },
    get class() {
      return C();
    },
    set class(z) {
      C(z), p();
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
var Mm = /* @__PURE__ */ $e("<rect></rect>");
function fd(e, t) {
  de(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Oe();
  var v = Mm();
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
  ), T(e, v), fe({
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
var Vm = /* @__PURE__ */ $e("<title> </title>"), zm = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(Re, "$flowId", n), i = () => U(ee, "$viewport", n), a = () => U(ze, "$containerWidth", n), s = () => U(He, "$containerHeight", n), l = () => U(oe, "$nodeLookup", n), u = () => U(Ve, "$nodes", n), c = () => U(te, "$panZoom", n), d = () => U(We, "$translateExtent", n), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), y = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne();
  let V = m(t, "position", 12, "bottom-right"), O = m(t, "ariaLabel", 12, "Mini map"), L = m(t, "nodeStrokeColor", 12, "transparent"), D = m(t, "nodeColor", 12, void 0), A = m(t, "nodeClass", 12, ""), P = m(t, "nodeBorderRadius", 12, 5), N = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), H = m(t, "maskColor", 12, void 0), z = m(t, "maskStrokeColor", 12, void 0), I = m(t, "maskStrokeWidth", 12, void 0), B = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), ue = m(t, "zoomable", 12, !0), Q = m(t, "inversePan", 12, void 0), W = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), he = m(t, "class", 12, "");
  const me = 200, ce = 150, {
    nodes: Ve,
    nodeLookup: oe,
    viewport: ee,
    width: ze,
    height: He,
    flowId: Re,
    panZoom: te,
    translateExtent: We
  } = Ge(), Ue = D() === void 0 ? void 0 : fa(D()), se = fa(L()), le = fa(A()), Ce = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ke = `svelte-flow__minimap-desc-${o()}`;
  let Ne = /* @__PURE__ */ ne(g(f));
  const st = () => g(_);
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
    () => (l(), g(f), u()),
    () => {
      F(Ne, l().size > 0 ? fc(Mo(l()), g(f)) : g(f)), u();
    }
  ), ve(() => G(B()), () => {
    F(v, B() ?? me);
  }), ve(() => G(K()), () => {
    F(w, K() ?? ce);
  }), ve(
    () => (g(Ne), g(v)),
    () => {
      F(b, g(Ne).width / g(v));
    }
  ), ve(
    () => (g(Ne), g(w)),
    () => {
      F(x, g(Ne).height / g(w));
    }
  ), ve(
    () => (g(b), g(x)),
    () => {
      F(_, Math.max(g(b), g(x)));
    }
  ), ve(() => (g(_), g(v)), () => {
    F(h, g(_) * g(v));
  }), ve(
    () => (g(_), g(w)),
    () => {
      F(C, g(_) * g(w));
    }
  ), ve(() => g(_), () => {
    F(y, 5 * g(_));
  }), ve(
    () => (g(Ne), g(h), g(y)),
    () => {
      F(k, g(Ne).x - (g(h) - g(Ne).width) / 2 - g(y));
    }
  ), ve(
    () => (g(Ne), g(C), g(y)),
    () => {
      F(E, g(Ne).y - (g(C) - g(Ne).height) / 2 - g(y));
    }
  ), ve(() => (g(h), g(y)), () => {
    F(S, g(h) + g(y) * 2);
  }), ve(() => (g(C), g(y)), () => {
    F(M, g(C) + g(y) * 2);
  }), vt(), Oe();
  const it = /* @__PURE__ */ pe(() => ae() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), J = /* @__PURE__ */ pe(() => Et(["svelte-flow__minimap", he()]));
  No(e, {
    get position() {
      return V();
    },
    get style() {
      return g(it);
    },
    get class() {
      return g(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ge, en) => {
      var tn = et(), hn = be(tn);
      {
        var Se = (tt) => {
          var Ae = zm();
          ye(Ae, "aria-labelledby", Ke);
          let De;
          var nt = Y(Ae);
          {
            var nn = (wt) => {
              var St = Vm();
              ye(St, "id", Ke);
              var mr = Y(St, !0);
              X(St), ke(() => Rt(mr, O())), T(wt, St);
            };
            xe(nt, (wt) => {
              O() && wt(nn);
            });
          }
          var Kt = Z(nt);
          Nt(Kt, 1, u, (wt) => wt.id, (wt, St) => {
            var mr = et();
            const rt = /* @__PURE__ */ pe(() => l().get(g(St).id));
            var Qi = be(mr);
            {
              var qr = (Lt) => {
                const Io = /* @__PURE__ */ pe(() => er(g(rt))), Ao = /* @__PURE__ */ pe(() => Ue == null ? void 0 : Ue(g(rt))), Zo = /* @__PURE__ */ pe(() => se(g(rt))), Ji = /* @__PURE__ */ pe(() => le(g(rt)));
                fd(Lt, ct(
                  {
                    get x() {
                      return g(rt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(rt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Io),
                  {
                    get selected() {
                      return g(rt).selected;
                    },
                    get color() {
                      return g(Ao);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return g(Zo);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: Ce,
                    get class() {
                      return g(Ji);
                    }
                  }
                ));
              };
              xe(Qi, (Lt) => {
                g(rt) && gc(g(rt)) && Lt(qr);
              });
            }
            T(wt, mr);
          });
          var Kr = Z(Kt);
          X(Ae), ht(Ae, (wt, St) => Ll == null ? void 0 : Ll(wt, St), () => ({
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
            ye(Ae, "width", g(v)), ye(Ae, "height", g(w)), ye(Ae, "viewBox", `${g(k) ?? ""} ${g(E) ?? ""} ${g(S) ?? ""} ${g(M) ?? ""}`), De = dt(Ae, "", De, {
              "--xy-minimap-mask-background-color-props": H(),
              "--xy-minimap-mask-stroke-color-props": z(),
              "--xy-minimap-mask-stroke-width-props": I() ? I() * g(_) : void 0
            }), ye(Kr, "d", `M${g(k) - g(y)},${g(E) - g(y)}h${g(S) + g(y) * 2}v${g(M) + g(y) * 2}h${-g(S) - g(y) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), T(tt, Ae);
        };
        xe(hn, (tt) => {
          c() && tt(Se);
        });
      }
      T(ge, tn);
    },
    $$slots: { default: !0 }
  });
  var Ie = fe({
    get position() {
      return V();
    },
    set position(ge) {
      V(ge), p();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(ge) {
      O(ge), p();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ge) {
      L(ge), p();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(ge) {
      D(ge), p();
    },
    get nodeClass() {
      return A();
    },
    set nodeClass(ge) {
      A(ge), p();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(ge) {
      P(ge), p();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(ge) {
      N(ge), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(ge) {
      $(ge), p();
    },
    get maskColor() {
      return H();
    },
    set maskColor(ge) {
      H(ge), p();
    },
    get maskStrokeColor() {
      return z();
    },
    set maskStrokeColor(ge) {
      z(ge), p();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(ge) {
      I(ge), p();
    },
    get width() {
      return B();
    },
    set width(ge) {
      B(ge), p();
    },
    get height() {
      return K();
    },
    set height(ge) {
      K(ge), p();
    },
    get pannable() {
      return j();
    },
    set pannable(ge) {
      j(ge), p();
    },
    get zoomable() {
      return ue();
    },
    set zoomable(ge) {
      ue(ge), p();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ge) {
      Q(ge), p();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ge) {
      W(ge), p();
    },
    get style() {
      return ae();
    },
    set style(ge) {
      ae(ge), p();
    },
    get class() {
      return he();
    },
    set class(ge) {
      he(ge), p();
    }
  });
  return r(), Ie;
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
const Tl = (e) => zp(e);
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = Ge(), h = (k) => {
    var E, S;
    const M = q(w), V = Tl(k) ? k : M.get(k.id), O = V.parentId ? Lp(V.position, V.measured, V.parentId, M, q(b)) : V.position, L = {
      ...V,
      position: O,
      width: ((E = V.measured) == null ? void 0 : E.width) ?? V.width,
      height: ((S = V.measured) == null ? void 0 : S.height) ?? V.height
    };
    return Lr(L);
  }, C = (k, E, S = { replace: !1 }) => {
    var M;
    const V = (M = q(w).get(k)) == null ? void 0 : M.internals.userNode;
    if (!V)
      return;
    const O = typeof E == "function" ? E(V) : E;
    S.replace ? d.update((L) => L.map((D) => D.id === k ? Tl(O) ? O : { ...D, ...O } : D)) : (Object.assign(V, O), d.update((L) => L));
  }, y = (k) => q(w).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (k) => {
      var E;
      return (E = y(k)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : Il(q(w), k),
    getEdge: (k) => q(x).get(k),
    getEdges: (k) => k === void 0 ? q(f) : Il(q(x), k),
    setZoom: (k, E) => {
      const S = q(c);
      return S ? S.scaleTo(k, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, E) => {
      const S = q(i), M = q(c);
      return M ? (await M.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, E, S) => {
      const M = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : q(u), V = q(c);
      return V ? (await V.setViewport({
        x: q(a) / 2 - k * M,
        y: q(s) / 2 - E * M,
        zoom: M
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, E) => {
      const S = q(c);
      if (!S)
        return Promise.resolve(!1);
      const M = hs(k, q(a), q(s), q(l), q(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await S.setViewport(M, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, E = !0, S) => {
      const M = wl(k), V = M ? k : h(k);
      return V ? (S || q(d)).filter((O) => {
        const L = q(w).get(O.id);
        if (!L || !M && O.id === k.id)
          return !1;
        const D = Lr(L), A = bo(D, V);
        return E && A > 0 || A >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (k, E, S = !0) => {
      const M = wl(k) ? k : h(k);
      if (!M)
        return !1;
      const V = bo(M, E);
      return S && V > 0 || V >= M.width * M.height;
    },
    deleteElements: async ({ nodes: k = [], edges: E = [] }) => {
      const { nodes: S, edges: M } = await uc({
        nodesToRemove: k,
        edgesToRemove: E,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return S && d.update((V) => V.filter((O) => !S.some(({ id: L }) => L === O.id))), M && f.update((V) => V.filter((O) => !M.some(({ id: L }) => L === O.id))), {
        deletedNodes: S,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (k, E = { snapToGrid: !0 }) => {
      const S = q(v);
      if (!S)
        return k;
      const M = E.snapToGrid ? q(o) : !1, { x: V, y: O, zoom: L } = q(i), { x: D, y: A } = S.getBoundingClientRect(), P = {
        x: k.x - D,
        y: k.y - A
      };
      return Vo(P, [V, O, L], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const E = q(v);
      if (!E)
        return k;
      const { x: S, y: M, zoom: V } = q(i), { x: O, y: L } = E.getBoundingClientRect(), D = vc(k, [S, M, V]);
      return {
        x: D.x + O,
        y: D.y + L
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
    updateNodeData: (k, E, S) => {
      var M;
      const V = (M = q(w).get(k)) == null ? void 0 : M.internals.userNode;
      if (!V)
        return;
      const O = typeof E == "function" ? E(V) : E;
      V.data = S != null && S.replace ? O : { ...V.data, ...O }, d.update((L) => L);
    },
    getNodesBounds: (k) => {
      const E = q(w), S = q(b);
      return Np(k, { nodeLookup: E, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: E, nodeId: S }) => {
      var M;
      return Array.from(((M = q(_).get(`${S}-${k}-${E ?? null}`)) == null ? void 0 : M.values()) ?? []);
    },
    viewport: i
  };
}
function Il(e, t) {
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
var Nm = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function gd(e, t) {
  de(t, !1);
  const [n, r] = ot(), o = () => U(C, "$nodes", n), i = () => U(h, "$nodeLookup", n), a = () => U(_, "$viewport", n), s = () => U(x, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: h, nodes: C } = Ge(), { getNodesBounds: y } = Dt(), k = sr("svelteflow__node_id");
  let E = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne([]), M = w() !== void 0 ? w() : 10, V = f() !== void 0 ? f() : _e.Top, O = v() !== void 0 ? v() : "center";
  ve(
    () => (o(), G(d()), i()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || k];
      F(S, N.reduce(
        ($, H) => {
          const z = i().get(H);
          return z && $.push(z), $;
        },
        []
      ));
    }
  ), ve(
    () => (g(S), a()),
    () => {
      const N = y(g(S));
      N && F(E, Up(N, a(), V, M, O));
    }
  ), ve(() => g(S), () => {
    F(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((N) => (N.internals.z || 5) + 1)));
  }), ve(() => o(), () => {
    F(u, o().filter((N) => N.selected).length);
  }), ve(
    () => (G(b()), g(S), g(u)),
    () => {
      F(c, typeof b() == "boolean" ? b() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), vt(), Oe();
  var L = et(), D = be(L);
  {
    var A = (N) => {
      var $ = Nm();
      let H;
      var z = Y($);
      pt(z, t, "default", {}), X($), ht($, (I, B) => Ci == null ? void 0 : Ci(I, B), () => ({ domNode: s() })), ke(
        (I) => {
          ye($, "data-id", I), H = dt($, "", H, {
            position: "absolute",
            transform: g(E),
            "z-index": g(l)
          });
        },
        [
          () => g(S).reduce((I, B) => `${I}${B.id} `, "").trim()
        ],
        pe
      ), T(N, $);
    };
    xe(D, (N) => {
      s() && g(c) && g(S) && N(A);
    });
  }
  T(e, L);
  var P = fe({
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
  return r(), P;
}
ie(
  gd,
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
const Al = "tinyflow-component";
class Om {
  constructor(t) {
    if (Mt(this, "options"), Mt(this, "rootEl"), Mt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Al);
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
    const n = document.createElement(Al);
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
  })), T(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(Fe, { children: {} }, [], [], !0);
var Tm = /* @__PURE__ */ re("<input>");
function hd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Tm();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), T(e, r), fe();
}
ie(hd, {}, [], [], !0);
var Im = /* @__PURE__ */ re("<input>");
function $t(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Im();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), T(e, r), fe();
}
ie($t, {}, [], [], !0);
var Am = /* @__PURE__ */ re("<textarea></textarea>");
function Ot(e, t) {
  de(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Am();
  E1(o);
  let i;
  return ke(() => i = ln(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), T(e, o), fe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
ie(Ot, { value: {} }, [], [], !0);
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
  Oe();
  var l = Bm();
  let u;
  return Nt(l, 5, o, vo, (c, d, f) => {
    var v = Zm();
    ye(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var w = Y(v);
    {
      var b = (_) => {
        var h = Be();
        ke(() => Rt(h, g(d).label)), T(_, h);
      }, x = (_) => {
        var h = et(), C = be(h);
        lr(C, () => g(d).label ?? ft), T(_, h);
      };
      xe(w, (_) => {
        typeof g(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    X(v), ke(() => mt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), T(c, v);
  }), X(l), ke(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), T(e, l), fe({
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
Ti(["click", "keydown"]);
ie(pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(g(n)), Xm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
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
  return Nt(a, 21, n, vo, (s, l, u) => {
    var c = qm(), d = Y(c);
    ye(d, "tabindex", u), d.__click = [Rm, i, l], d.__keydown = [Xm, i, l];
    var f = Y(d);
    {
      var v = (y) => {
        var k = Ym(), E = Y(k);
        Yn(E, {
          get target() {
            return g(l).icon;
          }
        }), X(k), T(y, k);
      };
      xe(f, (y) => {
        g(l).icon && y(v);
      });
    }
    var w = Z(f, 2);
    Yn(w, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(w, 2);
    X(d);
    var x = Z(d, 2);
    {
      var _ = (y) => {
        var k = Wm(), E = Y(k);
        Yn(E, {
          get target() {
            return g(l).description;
          }
        }), X(k), T(y, k);
      };
      xe(x, (y) => {
        g(l).description && y(_);
      });
    }
    var h = Z(x, 2);
    {
      var C = (y) => {
        var k = Km(), E = Y(k);
        Yn(E, {
          get target() {
            return g(l).content;
          }
        }), X(k), T(y, k);
      };
      xe(h, (y) => {
        o().includes(g(l).key) && y(C);
      });
    }
    X(c), ke((y) => mt(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), T(s, c);
  }), X(a), ke(() => {
    dt(a, t.style), mt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), T(e, a), fe({
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
Ti(["click", "keydown"]);
ie(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  de(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (s) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? ft), T(s, l);
    }, a = (s) => {
      var l = et(), u = be(l);
      rs(u, n), T(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return T(e, r), fe({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ie(Yn, { target: {} }, [], [], !0);
var Gm = (e, t, n) => t(g(n)), Um = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Qm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), Jm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), e2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), t2 = /* @__PURE__ */ re("<!> <!>", 1), n2 = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), r2 = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), o2 = /* @__PURE__ */ re("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (C, y = ft) => {
    var k = et(), E = be(k);
    Nt(E, 19, y, (S, M) => `${M}_${S.value}`, (S, M) => {
      var V = Jm(), O = be(V);
      O.__click = [Gm, b, M];
      var L = Y(O), D = Y(L);
      {
        var A = (H) => {
          var z = Um();
          T(H, z);
        };
        xe(D, (H) => {
          g(M).children && g(M).children.length > 0 && H(A);
        });
      }
      X(L);
      var P = Z(L, 2);
      Yn(P, {
        get target() {
          return g(M).label;
        }
      }), X(O);
      var N = Z(O, 2);
      {
        var $ = (H) => {
          var z = Qm(), I = Y(z);
          n(I, () => g(M).children), X(z), T(H, z);
        };
        xe(N, (H) => {
          g(M).children && g(M).children.length > 0 && (l() || c().includes(g(M).value)) && H($);
        });
      }
      T(S, V);
    }), T(C, k);
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
      for (let E of k)
        a().length > 0 ? a().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && y(E.children);
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
  var h = Y(x);
  return Cn(
    To(h, {
      floating: (C) => {
        var y = e2(), k = Y(y);
        n(k, r), X(y), T(C, y);
      },
      children: (C, y) => {
        var k = r2();
        let E;
        var S = Y(k);
        Nt(
          S,
          23,
          () => g(v),
          (M, V) => `${V}_${M.value}`,
          (M, V, O) => {
            var L = et(), D = be(L);
            {
              var A = (N) => {
                var $ = et(), H = be($);
                {
                  var z = (I) => {
                    Yn(I, {
                      get target() {
                        return g(V).label;
                      }
                    });
                  };
                  xe(H, (I) => {
                    g(O) === 0 && I(z);
                  });
                }
                T(N, $);
              }, P = (N) => {
                var $ = t2(), H = be($);
                Yn(H, {
                  get target() {
                    return g(V).label;
                  }
                });
                var z = Z(H, 2);
                {
                  var I = (B) => {
                    var K = Be(",");
                    T(B, K);
                  };
                  xe(z, (B) => {
                    g(O) < g(v).length - 1 && B(I);
                  });
                }
                T(N, $);
              };
              xe(D, (N) => {
                u() ? N(P, !1) : N(A);
              });
            }
            T(M, L);
          },
          (M) => {
            var V = n2(), O = Y(V, !0);
            X(V), ke(() => Rt(O, d())), T(M, V);
          }
        ), X(S), Me(2), X(k), ke(() => E = ln(k, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), T(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), X(x), ke(() => _ = ln(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), T(e, x), fe({
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
Ti(["click"]);
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
const $o = Math.min, Er = Math.max, Ei = Math.round, yn = (e) => ({
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
  return Er(e, $o(t, n));
}
function Oo(e, t) {
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
function Ir(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function $s(e) {
  return yd(Ir(e));
}
function s2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = $s(e), i = xs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Si(a)), [a, Si(a)];
}
function l2(e) {
  const t = Si(e);
  return [Ta(e), t, Ta(t)];
}
function Ta(e) {
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
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Ta)))), i;
}
function Si(e) {
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
function Pi(e) {
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
  const i = Ir(t), a = $s(t), s = xs(a), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
      x: h,
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
    c = h ?? c, d = C ?? d, v = {
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
  } = Oo(t, e), w = wd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = Pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: h,
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
    } = Oo(e, t) || {};
    if (u == null)
      return {};
    const d = wd(c), f = {
      x: n,
      y: r
    }, v = $s(o), w = xs(v), b = await a.getDimensions(u), x = v === "y", _ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], k = f[v] - i.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = E ? E[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(E))) && (S = s.floating[C] || i.floating[w]);
    const M = y / 2 - k / 2, V = S / 2 - b[w] / 2 - 1, O = $o(d[_], V), L = $o(d[h], V), D = O, A = S - b[w] - L, P = S / 2 - b[w] / 2 + M, N = La(D, P, A), $ = !l.arrow && Do(o) != null && P !== N && i.reference[w] / 2 - (P < D ? O : L) - b[w] / 2 < 0, H = $ ? P < D ? P - D : P - A : 0;
    return {
      [v]: f[v] + H,
      data: {
        [v]: N,
        centerOffset: P - N - H,
        ...$ && {
          alignmentOffset: H
        }
      },
      reset: $
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
        fallbackAxisSideDirection: w = "none",
        flipAlignment: b = !0,
        ...x
      } = Oo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = fr(o), h = Ir(s), C = fr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (C || !b ? [Si(s)] : l2(s)), E = w !== "none";
      !f && E && k.push(...c2(s, b, w, y));
      const S = [s, ...k], M = await bd(t, x), V = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(M[_]), d) {
        const P = s2(o, a, y);
        V.push(M[P[0]], M[P[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: V
      }], !V.every((P) => P <= 0)) {
        var L, D;
        const P = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, N = S[P];
        if (N)
          return {
            data: {
              index: P,
              overflows: O
            },
            reset: {
              placement: N
            }
          };
        let $ = (D = O.filter((H) => H.overflows[0] <= 0).sort((H, z) => H.overflows[1] - z.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var A;
              const H = (A = O.filter((z) => {
                if (E) {
                  const I = Ir(z.placement);
                  return I === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)]).sort((z, I) => z[1] - I[1])[0]) == null ? void 0 : A[0];
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
async function h2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = Do(n), l = Ir(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Oo(t, e);
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
          fn: (x) => {
            let {
              x: _,
              y: h
            } = x;
            return {
              x: _,
              y: h
            };
          }
        },
        ...l
      } = Oo(e, t), u = {
        x: n,
        y: r
      }, c = await bd(t, l), d = Ir(fr(o)), f = yd(d);
      let v = u[f], w = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[x], C = v - c[_];
        v = La(h, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = w + c[x], C = w - c[_];
        w = La(h, w, C);
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
function In(e) {
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
  for (; _n(t) && !Ar(t); ) {
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
function Ar(e) {
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
    In(e)
  );
  return Bl(t) ? t.host : t;
}
function $d(e) {
  const t = Qn(e);
  return Ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Lo(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xt(o);
  return i ? (Ia(a), t.concat(a, a.visualViewport || [], Lo(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Ia(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _d(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ei(n) !== i || Ei(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function kd(e) {
  return cn(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = kd(e);
  if (!_n(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = _d(t);
  let a = (i ? Ei(n.width) : n.width) / r, s = (i ? Ei(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const b2 = /* @__PURE__ */ yn(0);
function Ed(e) {
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
  t && (r ? cn(r) && (a = Sr(r)) : a = Sr(e));
  const s = x2(i, n, r) ? Ed(i) : yn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Xt(i), v = r && cn(r) ? Xt(r) : r;
    let w = f, b = Ia(w);
    for (; b && r && v !== w; ) {
      const x = Sr(b), _ = b.getBoundingClientRect(), h = dn(b), C = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, y = _.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = Xt(b), b = Ia(w);
    }
  }
  return Pi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ks(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : Co(In(e)).left + n;
}
function Sd(e, t, n) {
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
  const i = o === "fixed", a = In(r), s = t ? Fi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = yn(1);
  const c = yn(0), d = _n(r);
  if ((d || !d && !i) && ((Wr(r) !== "body" || Lo(a)) && (l = Gi(r)), _n(r))) {
    const v = Co(r);
    u = Sr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Sd(a, l, !0) : yn(0);
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
  const t = In(e), n = Gi(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ks(e);
  const s = -n.scrollTop;
  return dn(r).direction === "rtl" && (a += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function k2(e, t) {
  const n = Xt(e), r = In(e), o = n.visualViewport;
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
function E2(e, t) {
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e) ? Sr(e) : yn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = _2(In(e));
  else if (cn(t))
    r = E2(t, n);
  else {
    const o = Ed(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(r);
}
function Pd(e, t) {
  const n = Qn(e);
  return n === t || !cn(n) || Ar(n) ? !1 : dn(n).position === "fixed" || Pd(n, t);
}
function S2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((s) => cn(s) && Wr(s) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let a = i ? Qn(e) : e;
  for (; cn(a) && !Ar(a); ) {
    const s = dn(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Lo(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Qn(a);
  }
  return t.set(e, r), r;
}
function P2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fi(t) ? [] : S2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Rl(t, u, o);
    return l.top = Er(c.top, l.top), l.right = $o(c.right, l.right), l.bottom = $o(c.bottom, l.bottom), l.left = Er(c.left, l.left), l;
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
  } = _d(e);
  return {
    width: t,
    height: n
  };
}
function M2(e, t, n) {
  const r = _n(t), o = In(t), i = n === "fixed", a = Co(e, !0, i, t);
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
  const u = o && !r && !i ? Sd(o, s) : yn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
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
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function Hd(e, t) {
  const n = Xt(e);
  if (Fi(e))
    return n;
  if (!_n(e)) {
    let o = Qn(e);
    for (; o && !Ar(o); ) {
      if (cn(o) && !va(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && y2(r) && va(r); )
    r = Xl(r, t);
  return r && Ar(r) && va(r) && !Cs(r) ? n : r || w2(e) || n;
}
const V2 = async function(e) {
  const t = this.getOffsetParent || Hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: M2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function z2(e) {
  return dn(e).direction === "rtl";
}
const N2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $2,
  getDocumentElement: In,
  getClippingRect: P2,
  getOffsetParent: Hd,
  getElementRects: V2,
  getClientRects: C2,
  getDimensions: H2,
  getScale: Sr,
  isElement: cn,
  isRTL: z2
}, O2 = p2, D2 = m2, L2 = g2, T2 = v2, I2 = (e, t, n) => {
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
}, A2 = ({
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
    I2(e, u, {
      placement: r,
      middleware: [
        O2(o),
        // 手动偏移配置
        L2(i),
        //自动翻转
        D2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [T2({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: E } = y.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
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
function To(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  Wt(() => (s = A2({
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
  var f = Z(c, 2), v = Y(f);
  return lr(v, r), X(f), Cn(f, (w) => a = w, () => a), X(u), T(e, u), fe({
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
ie(To, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
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
    lr(f, () => n() ?? ft), T(u, d);
  }), T(e, a), fe({
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
      T(r, i);
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
function gn(e, t) {
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
  ], { deleteNode: _ } = X2(), { copyNode: h } = Y2(), C = tr(), y = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var k = F2(), E = be(k);
  {
    var S = ($) => {
      gd($, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (H, z) => {
          var I = j2(), B = Y(I);
          {
            var K = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (he, me) => {
                  var ce = W2();
                  T(he, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(B, (ae) => {
              s() && ae(K);
            });
          }
          var j = Z(B, 2);
          {
            var ue = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (he, me) => {
                  var ce = K2();
                  T(he, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(j, (ae) => {
              l() && ae(ue);
            });
          }
          var Q = Z(j, 2);
          {
            var W = (ae) => {
              Fe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (he, me) => {
                  var ce = q2();
                  T(he, ce);
                },
                $$slots: { default: !0 }
              });
            };
            xe(Q, (ae) => {
              u() && ae(W);
            });
          }
          X(I), T(H, I);
        },
        $$slots: { default: !0 }
      });
    };
    xe(E, ($) => {
      (s() || l() || u()) && $(S);
    });
  }
  var M = Z(E, 2), V = Z(Y(M), 2), O = Y(V);
  md(O, {
    items: x,
    activeKeys: v,
    onChange: ($, H) => {
      var z;
      w(r(), { expand: H == null ? void 0 : H.includes("key") }), (z = f()) == null || z(H != null && H.includes("key") ? "key" : "");
    }
  }), X(V), X(M);
  var L = Z(M, 2);
  {
    var D = ($) => {
      Un($, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(L, ($) => {
      d() && $(D);
    });
  }
  var A = Z(L, 2);
  {
    var P = ($) => {
      Un($, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(A, ($) => {
      c() && $(P);
    });
  }
  var N = Z(A, 2);
  return lr(N, () => i() ?? ft), T(e, k), fe({
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
  gn,
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
  return sr("svelteflow__node_id");
}
const Md = [
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
  const [n, r] = ot(), o = () => U(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var V, O;
    return {
      ...i(),
      ...(O = (V = o()) == null ? void 0 : V.data) == null ? void 0 : O.parameters[a()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (V, O) => {
    c(s, (L) => {
      let D = L.data.parameters;
      return D[a()][V] = O, { parameters: D };
    });
  }, f = (V) => {
    const O = V.target.value;
    d("name", O);
  }, v = (V) => {
    const O = V.target.checked;
    d("required", O);
  }, w = (V) => {
    const O = V.value;
    O && d("dataType", O);
  };
  let b;
  const x = () => {
    c(s, (V) => {
      let O = V.data.parameters;
      return O.splice(a(), 1), { parameters: [...O] };
    }), b == null || b.hide();
  };
  var _ = ey(), h = be(_), C = Y(h);
  $t(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), X(h);
  var y = Z(h, 2), k = Y(y);
  hd(k, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), X(y);
  var E = Z(y, 2), S = Y(E);
  Cn(
    To(S, {
      placement: "bottom",
      floating: (V) => {
        var O = Q2(), L = Y(O), D = Z(Y(L));
        const A = /* @__PURE__ */ Pe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        un(D, {
          items: Md,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return g(A);
          }
        }), X(L);
        var P = Z(L, 2), N = Z(Y(P));
        Ot(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (B) => {
            const K = B.target.value;
            d("defaultValue", K);
          }
        }), X(P);
        var $ = Z(P, 2), H = Z(Y($));
        Ot(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (B) => {
            const K = B.target.value;
            d("description", K);
          }
        }), X($);
        var z = Z($, 2), I = Y(z);
        Fe(I, {
          onclick: x,
          children: (B, K) => {
            Me();
            var j = Be("删除");
            T(B, j);
          },
          $$slots: { default: !0 }
        }), X(z), X(O), T(V, O);
      },
      children: (V, O) => {
        Fe(V, {
          class: "input-btn-more",
          children: (L, D) => {
            var A = J2();
            T(L, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => b = V,
    () => b
  ), X(E), T(e, _);
  var M = fe({
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
ie(Vd, { parameter: {}, index: {} }, [], [], !0);
var ny = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  de(t, !0), Je(e, iy);
  const [n, r] = ot(), o = () => U(g(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Pe(() => pr(i)), s = /* @__PURE__ */ Pe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = oy(), u = Y(l);
  {
    var c = (f) => {
      var v = ny();
      Me(4), T(f, v);
    };
    xe(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  Nt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, w) => {
      Vd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(w);
        }
      });
    },
    (f) => {
      var v = ry();
      T(f, v);
    }
  ), X(l), T(e, l), fe(), r();
}
ie(zd, {}, [], [], !0);
const Nd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Nd(t.children);
  });
}, Sn = () => {
  const { updateNodeData: e } = Dt();
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
var ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  de(t, !0), Je(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn();
  return gn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = ay();
      T(a, s);
    },
    children: (a, s) => {
      var l = ly(), u = be(l), c = Y(u);
      Qe(c, {
        level: 3,
        children: (v, w) => {
          Me();
          var b = Be("输入参数");
          T(v, b);
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
        children: (v, w) => {
          var b = sy();
          T(v, b);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = Z(u, 2);
      zd(f, {}), T(a, l);
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
ie(Od, { data: {} }, [], [], !0);
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
  const t = gt(), n = pr(t), { nodes: r, edges: o } = Ge();
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
  const [n, r] = ot(), o = () => U(g(c), "$node", n), i = () => U(y, "$selectItems", n);
  Wt(() => {
    g(d).refType || _({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var N;
    return {
      ...a(),
      ...(N = o()) == null ? void 0 : N.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Dt(), v = (N, $) => {
    f(u, (H) => {
      let z = H.data[l()];
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
  let h;
  const C = () => {
    f(u, (N) => {
      let $ = N.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), h == null || h.hide();
  }, y = cy();
  var k = fy(), E = be(k), S = Y(E);
  $t(S, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), X(E);
  var M = Z(E, 2), V = Y(M);
  {
    var O = (N) => {
      $t(N, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, L = (N, $) => {
      {
        var H = (z) => {
          const I = /* @__PURE__ */ Pe(() => [g(d).ref]);
          un(z, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(I);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        xe(
          N,
          (z) => {
            g(d).refType !== "input" && z(H);
          },
          $
        );
      }
    };
    xe(V, (N) => {
      g(d).refType === "fixed" ? N(O) : N(L, !1);
    });
  }
  X(M);
  var D = Z(M, 2), A = Y(D);
  Cn(
    To(A, {
      placement: "bottom",
      floating: (N) => {
        var $ = dy(), H = Y($), z = Z(Y(H));
        const I = /* @__PURE__ */ Pe(() => g(d).refType ? [g(d).refType] : []);
        un(z, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(I);
          },
          onSelect: _
        }), X(H);
        var B = Z(H, 2), K = Z(Y(B));
        Ot(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const he = ae.target.value;
            v("defaultValue", he);
          }
        }), X(B);
        var j = Z(B, 2), ue = Z(Y(j));
        Ot(ue, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const he = ae.target.value;
            v("description", he);
          }
        }), X(j);
        var Q = Z(j, 2), W = Y(Q);
        Fe(W, {
          onclick: C,
          children: (ae, he) => {
            Me();
            var me = Be("删除");
            T(ae, me);
          },
          $$slots: { default: !0 }
        }), X(Q), X($), T(N, $);
      },
      children: (N, $) => {
        Ui(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => h = N,
    () => h
  ), X(D), T(e, k);
  var P = fe({
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
  return r(), P;
}
ie(Ld, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var gy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  de(t, !0), Je(e, my);
  const [n, r] = ot(), o = () => U(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = py(), d = Y(c);
  {
    var f = (b) => {
      var x = gy();
      Me(4), T(b, x);
    };
    xe(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  Nt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, _) => {
      Ld(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(_);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = hy(), _ = Y(x, !0);
      X(x), ke(() => Rt(_, i())), T(b, x);
    }
  ), X(c), T(e, c);
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
function Td(e, t) {
  de(t, !0), Je(e, xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn();
  return gn(e, ct(
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
        T(a, s);
      },
      children: (a, s) => {
        var l = by(), u = be(l), c = Y(u);
        Qe(c, {
          level: 3,
          children: (v, w) => {
            Me();
            var b = Be("输出参数");
            T(v, b);
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
          children: (v, w) => {
            var b = wy();
            T(v, b);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = Z(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), T(a, l);
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
ie(Td, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), _y = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ky = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ey = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  de(t, !0), Je(e, Ey);
  const [n, r] = ot(), o = () => U(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var H;
    let z = (H = o()) == null ? void 0 : H.data[s()], I;
    if (z && a().length > 0) {
      let B = z;
      for (let K = 0; K < a().length; K++) {
        const j = a()[K];
        K == a().length - 1 ? I = B[j] : B = B[j].children;
      }
    }
    return { ...i(), ...I };
  });
  const { updateNodeData: d } = Dt(), f = (H, z) => {
    d(l, (I) => {
      const B = I.data[s()];
      if (B && a().length > 0) {
        let K = B;
        for (let j = 0; j < a().length; j++) {
          const ue = a()[j];
          j == a().length - 1 ? K[ue] = { ...K[ue], [H]: z } : K = B[ue].children;
        }
      }
      return { [s()]: B };
    });
  }, v = (H) => {
    const z = H.target.value;
    f("name", z);
  }, w = (H) => {
    const z = H.value;
    f("dataType", z);
  };
  let b;
  const x = () => {
    d(l, (H) => {
      let z = H.data[s()];
      if (z && a().length > 0) {
        let I = z;
        for (let B = 0; B < a().length; B++) {
          const K = a()[B];
          B == a().length - 1 ? I.splice(K, 1) : I = I[K].children;
        }
      }
      return { [s()]: [...z] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (H) => {
      let z = H.data[s()];
      if (z && a().length > 0) {
        let I = z;
        for (let B = 0; B < a().length; B++) {
          const K = a()[B];
          B == a().length - 1 ? I[K].children ? I[K].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : I[K].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[K].children;
        }
      }
      return { [s()]: [...z] };
    });
  };
  var h = ky(), C = be(h), y = Y(C);
  {
    var k = (H) => {
      var z = et(), I = be(z);
      Nt(I, 17, a, vo, (B, K) => {
        Me();
        var j = Be(" ");
        T(B, j);
      }), T(H, z);
    };
    xe(y, (H) => {
      a().length > 1 && H(k);
    });
  }
  var E = Z(y, 2);
  const S = /* @__PURE__ */ Pe(() => g(c).nameDisabled === !0);
  $t(E, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(S);
    }
  }), X(C);
  var M = Z(C, 2), V = Y(M);
  const O = /* @__PURE__ */ Pe(() => g(c).dataType ? [g(c).dataType] : []), L = /* @__PURE__ */ Pe(() => g(c).dataTypeDisabled === !0);
  un(V, {
    items: Md,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(O);
    },
    get disabled() {
      return g(L);
    },
    onSelect: w
  });
  var D = Z(V, 2);
  {
    var A = (H) => {
      Fe(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (z, I) => {
          var B = $y();
          T(z, B);
        },
        $$slots: { default: !0 }
      });
    };
    xe(D, (H) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && H(A);
    });
  }
  X(M);
  var P = Z(M, 2), N = Y(P);
  Cn(
    To(N, {
      placement: "bottom",
      floating: (H) => {
        var z = _y(), I = Y(z), B = Z(Y(I));
        const K = /* @__PURE__ */ Pe(() => g(c).defaultValue || "");
        Ot(B, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(K);
          },
          onchange: (he) => {
            const me = he.target.value;
            f("defaultValue", me);
          }
        }), X(I);
        var j = Z(I, 2), ue = Z(Y(j));
        const Q = /* @__PURE__ */ Pe(() => g(c).description || "");
        Ot(ue, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(Q);
          },
          onchange: (he) => {
            const me = he.target.value;
            f("description", me);
          }
        }), X(j);
        var W = Z(j, 2);
        {
          var ae = (he) => {
            var me = Cy(), ce = Y(me);
            Fe(ce, {
              onclick: x,
              children: (Ve, oe) => {
                Me();
                var ee = Be("删除");
                T(Ve, ee);
              },
              $$slots: { default: !0 }
            }), X(me), T(he, me);
          };
          xe(W, (he) => {
            g(c).deleteDisabled !== !0 && he(ae);
          });
        }
        X(z), T(H, z);
      },
      children: (H, z) => {
        Ui(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => b = H,
    () => b
  ), X(P), T(e, h);
  var $ = fe({
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
ie(Id, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ re("<!> <!>", 1), Py = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Hy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function An(e, t) {
  de(t, !0), Je(e, Vy);
  const [n, r] = ot(), o = () => U(g(u), "$node", n), i = (x, _ = ft, h = ft) => {
    var C = et(), y = be(C);
    Nt(
      y,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, E, S) => {
        var M = Sy(), V = be(M);
        const O = /* @__PURE__ */ Pe(() => [...h(), g(S)]);
        Id(V, {
          get parameter() {
            return g(E);
          },
          get position() {
            return g(O);
          },
          get dataKeyName() {
            return s();
          }
        });
        var L = Z(V, 2);
        {
          var D = (A) => {
            var P = /* @__PURE__ */ pe(() => [...h(), g(S)]);
            i(A, () => g(E).children, () => g(P));
          };
          xe(L, (A) => {
            g(E).children && A(D);
          });
        }
        T(k, M);
      },
      (k) => {
        var E = et(), S = be(E);
        {
          var M = (V) => {
            var O = Py(), L = Y(O, !0);
            X(O), ke(() => Rt(L, a())), T(V, O);
          };
          xe(S, (V) => {
            h().length === 0 && V(M);
          });
        }
        T(k, E);
      }
    ), T(x, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = My(), f = Y(d);
  {
    var v = (x) => {
      var _ = Hy();
      Me(4), T(x, _);
    };
    xe(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var w = Z(f, 2);
  i(w, () => g(c) || [], () => []), X(d), T(e, d);
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
ie(An, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var zy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ re('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  de(t, !0), Je(e, Ly);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = zy();
        T(u, c);
      },
      children: (u, c) => {
        var d = Dy(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (ee, ze) => {
            Me();
            var He = Be("输入参数");
            T(ee, He);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ee, ze) => {
            var He = Ny();
            T(ee, He);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (ee, ze) => {
            Me();
            var He = Be("模型设置");
            T(ee, He);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ee) => {
            const ze = ee.value;
            l(o, () => ({ llmId: ze }));
          },
          get value() {
            return g(C);
          }
        });
        var y = Z(h, 2);
        Ui(y, {}), X(_);
        var k = Z(_, 4), E = Y(k), S = Y(E), M = Y(S);
        X(S);
        var V = Z(S, 2);
        oo(V), X(E), X(k);
        var O = Z(k, 2), L = Y(O), D = Y(L), A = Y(D);
        X(D);
        var P = Z(D, 2);
        oo(P), X(L), X(O);
        var N = Z(O, 2), $ = Y(N), H = Y($), z = Y(H);
        X(H);
        var I = Z(H, 2);
        oo(I), X($), X(N);
        var B = Z(N, 4), K = Y(B);
        const j = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        Ot(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (ee) => {
            l(o, { systemPrompt: ee.target.value });
          }
        }), X(B);
        var ue = Z(B, 4), Q = Y(ue);
        const W = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        Ot(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(W);
          },
          oninput: (ee) => {
            l(o, { userPrompt: ee.target.value });
          }
        }), X(ue);
        var ae = Z(ue, 2), he = Y(ae);
        Qe(he, {
          level: 3,
          mt: "10px",
          children: (ee, ze) => {
            Me();
            var He = Be("输出参数");
            T(ee, He);
          },
          $$slots: { default: !0 }
        });
        var me = Z(he, 2);
        const ce = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        un(me, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ee) => {
            const ze = ee.value;
            l(o, () => ({ outType: ze }));
          },
          get value() {
            return g(ce);
          }
        });
        var Ve = Z(me, 2);
        Fe(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ee, ze) => {
            var He = Oy();
            T(ee, He);
          },
          $$slots: { default: !0 }
        }), X(ae);
        var oe = Z(ae, 2);
        An(oe, {}), ke(() => {
          Rt(M, `Temperature: ${n().temperature ?? 0.5}`), na(V, n().temperature ?? 0.5), Rt(A, `Top P: ${n().topP ?? 0.9}`), na(P, n().topP ?? 0.9), Rt(z, `Top K: ${n().topK ?? 50}`), na(I, n().topK ?? 50);
        }), Xe("mousedown", V, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", V, (ee) => l(o, { temperature: parseFloat(ee.target.value) })), Xe("mousedown", P, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", P, (ee) => l(o, { topP: parseFloat(ee.target.value) })), Xe("mousedown", I, ra(function(ee) {
          Le.call(this, t, ee);
        })), Xe("input", I, (ee) => l(o, { topK: parseInt(ee.target.value) })), T(u, d);
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
ie(Ad, { data: {} }, [], [], !0);
var Ty = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
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
  const o = gt(), { addParameter: i } = Sn(), { updateNodeData: a } = Dt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ty();
        T(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = be(c), f = Y(d);
        Qe(f, {
          level: 3,
          children: (O, L) => {
            Me();
            var D = Be("输入参数");
            T(O, D);
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
          children: (O, L) => {
            var D = Iy();
            T(O, D);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = Z(d, 2);
        Zt(w, {});
        var b = Z(w, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (O, L) => {
            Me();
            var D = Be("代码");
            T(O, D);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 4), _ = Y(x);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        un(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (O) => {
            const L = O.value;
            a(o, () => ({ engine: L }));
          },
          get value() {
            return g(h);
          }
        }), X(x);
        var C = Z(x, 4), y = Y(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
        Ot(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (O) => {
            a(o, () => ({ code: O.target.value }));
          },
          get value() {
            return g(k);
          }
        }), X(C);
        var E = Z(C, 2), S = Y(E);
        Qe(S, {
          level: 3,
          mt: "10px",
          children: (O, L) => {
            Me();
            var D = Be("输出参数");
            T(O, D);
          },
          $$slots: { default: !0 }
        });
        var M = Z(S, 2);
        Fe(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (O, L) => {
            var D = Ay();
            T(O, D);
          },
          $$slots: { default: !0 }
        }), X(E);
        var V = Z(E, 2);
        An(V, {}), T(l, c);
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
  ]), o = gt(), { addParameter: i } = Sn(), { updateNodeData: a } = Dt();
  return Fn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Ry();
        T(s, l);
      },
      children: (s, l) => {
        var u = Yy(), c = be(u), d = Y(c);
        Qe(d, {
          level: 3,
          children: (k, E) => {
            Me();
            var S = Be("输入参数");
            T(k, S);
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
          children: (k, E) => {
            var S = Xy();
            T(k, S);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = Z(c, 2);
        Zt(v, {});
        var w = Z(v, 2);
        Qe(w, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Me();
            var S = Be("代码");
            T(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = Z(w, 4), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().template || "");
        Ot(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(_);
          }
        }), X(b);
        var h = Z(b, 2), C = Y(h);
        Qe(C, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Me();
            var S = Be("输出参数");
            T(k, S);
          },
          $$slots: { default: !0 }
        }), X(h);
        var y = Z(h, 2);
        An(y, {}), T(s, u);
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
  ], i = gt(), { addParameter: a } = Sn(), { updateNodeData: s } = Dt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        T(l, u);
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
            return g(w);
          }
        }), X(f);
        var b = Z(f, 2), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().url || "");
        $t(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return g(_);
          }
        }), X(b), X(d);
        var h = Z(d, 2), C = Y(h);
        Qe(C, {
          level: 3,
          children: (se, le) => {
            Me();
            var Ce = Be("Http 头信息");
            T(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var y = Z(C, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, le) => {
            var Ce = qy();
            T(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(h);
        var k = Z(h, 2);
        Zt(k, { dataKeyName: "headers" });
        var E = Z(k, 2), S = Y(E);
        Qe(S, {
          level: 3,
          children: (se, le) => {
            Me();
            var Ce = Be("参数");
            T(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var M = Z(S, 2);
        Fe(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (se, le) => {
            var Ce = jy();
            T(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(E);
        var V = Z(E, 2);
        Zt(V, { dataKeyName: "urlParameters" });
        var O = Z(V, 2);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Me();
            var Ce = Be("Body");
            T(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var L = Z(O, 2), D = Y(L), A = Y(D);
        const P = /* @__PURE__ */ Pe(() => !n().bodyType);
        $t(A, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(P);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "" });
          }
        }), Me(), X(D);
        var N = Z(D, 2), $ = Y(N);
        const H = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        $t($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(H);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "form-data" });
          }
        }), Me(), X(N);
        var z = Z(N, 2), I = Y(z);
        const B = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        $t(I, {
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
        }), Me(), X(z);
        var K = Z(z, 2), j = Y(K);
        const ue = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        $t(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(ue);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "json" });
          }
        }), Me(), X(K);
        var Q = Z(K, 2), W = Y(Q);
        const ae = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        $t(W, {
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
        }), Me(), X(Q), X(L);
        var he = Z(L, 2);
        {
          var me = (se) => {
            var le = Gy(), Ce = be(le), Ke = Y(Ce);
            Qe(Ke, {
              level: 3,
              children: (it, J) => {
                Me();
                var Ie = Be("参数");
                T(it, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ne = Z(Ke, 2);
            Fe(Ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, J) => {
                var Ie = Fy();
                T(it, Ie);
              },
              $$slots: { default: !0 }
            }), X(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromData" }), T(se, le);
          };
          xe(he, (se) => {
            n().bodyType === "form-data" && se(me);
          });
        }
        var ce = Z(he, 2);
        {
          var Ve = (se) => {
            var le = Qy(), Ce = be(le), Ke = Y(Ce);
            Qe(Ke, {
              level: 3,
              children: (it, J) => {
                Me();
                var Ie = Be("参数");
                T(it, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ne = Z(Ke, 2);
            Fe(Ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, J) => {
                var Ie = Uy();
                T(it, Ie);
              },
              $$slots: { default: !0 }
            }), X(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), T(se, le);
          };
          xe(ce, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(Ve);
          });
        }
        var oe = Z(ce, 2);
        {
          var ee = (se) => {
            var le = Jy(), Ce = Y(le);
            Ot(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ke) => {
                s(i, { bodyJson: Ke.target.value });
              }
            }), X(le), T(se, le);
          };
          xe(oe, (se) => {
            n().bodyType === "json" && se(ee);
          });
        }
        var ze = Z(oe, 2);
        {
          var He = (se) => {
            var le = ew(), Ce = Y(le);
            Ot(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ke) => {
                s(i, { bodyRaw: Ke.target.value });
              }
            }), X(le), T(se, le);
          };
          xe(ze, (se) => {
            n().bodyType === "raw" && se(He);
          });
        }
        var Re = Z(ze, 2), te = Y(Re);
        Qe(te, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Me();
            var Ce = Be("输出参数");
            T(se, Ce);
          },
          $$slots: { default: !0 }
        });
        var We = Z(te, 2);
        Fe(We, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, le) => {
            var Ce = tw();
            T(se, Ce);
          },
          $$slots: { default: !0 }
        }), X(Re);
        var Ue = Z(Re, 2);
        An(Ue, {}), T(l, c);
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
var ow = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), iw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
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
  ]), o = gt(), { addParameter: i } = Sn(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return Fn(() => {
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
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ow();
        T(u, c);
      },
      children: (u, c) => {
        var d = aw(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (D, A) => {
            Me();
            var P = Be("输入参数");
            T(D, P);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, A) => {
            var P = iw();
            T(D, P);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            Me();
            var P = Be("知识库设置");
            T(D, P);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const A = D.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return g(C);
          }
        }), X(_);
        var y = Z(_, 4), k = Y(y);
        $t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const A = D.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), X(y);
        var E = Z(y, 4), S = Y(E);
        const M = /* @__PURE__ */ Pe(() => n().limit || "");
        $t(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const A = D.target.value;
            l(o, () => ({ limit: A }));
          },
          get value() {
            return g(M);
          }
        }), X(E);
        var V = Z(E, 2), O = Y(V);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            Me();
            var P = Be("输出参数");
            T(D, P);
          },
          $$slots: { default: !0 }
        }), X(V);
        var L = Z(V, 2);
        An(L, {}), T(u, d);
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
var lw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), uw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
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
  ]), o = gt(), { addParameter: i } = Sn(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return Fn(() => {
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
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = lw();
        T(u, c);
      },
      children: (u, c) => {
        var d = cw(), f = be(d), v = Y(f);
        Qe(v, {
          level: 3,
          children: (L, D) => {
            Me();
            var A = Be("输入参数");
            T(L, A);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, D) => {
            var A = uw();
            T(L, A);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (L, D) => {
            Me();
            var A = Be("搜索引擎设置");
            T(L, A);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (L) => {
            const D = L.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return g(C);
          }
        }), X(_);
        var y = Z(_, 4), k = Y(y);
        $t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const D = L.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), X(y);
        var E = Z(y, 4), S = Y(E);
        $t(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (L) => {
            const D = L.target.value;
            l(o, () => ({ limit: D }));
          }
        }), X(E);
        var M = Z(E, 2), V = Y(M);
        Qe(V, {
          level: 3,
          mt: "10px",
          children: (L, D) => {
            Me();
            var A = Be("输出参数");
            T(L, A);
          },
          $$slots: { default: !0 }
        }), X(M);
        var O = Z(M, 2);
        An(O, {}), T(u, d);
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
var fw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), vw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const hw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  de(t, !0), Je(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  return Wt(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = fw();
        T(l, u);
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
        var c = gw(), d = be(c), f = Y(d);
        Qe(f, {
          level: 3,
          children: (h, C) => {
            Me();
            var y = Be("循环变量");
            T(h, y);
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
          children: (h, C) => {
            var y = vw();
            T(h, y);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = Z(d, 2);
        Zt(w, {});
        var b = Z(w, 2), x = Y(b);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (h, C) => {
            Me();
            var y = Be("输出参数");
            T(h, y);
          },
          $$slots: { default: !0 }
        }), X(b);
        var _ = Z(b, 2);
        An(_, {}), T(l, c);
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
  startNode: Od,
  codeNode: Zd,
  llmNode: Ad,
  templateNode: Bd,
  httpNode: Rd,
  knowledgeNode: Xd,
  searchEngineNode: Yd,
  loopNode: Wd,
  endNode: Td
};
var mw = /* @__PURE__ */ re("<!> ", 1);
function Aa(e, t) {
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
      var d = Z(c);
      ke(() => Rt(d, ` ${r() ?? ""}`)), T(s, u);
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
  Aa,
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
    const x = Object.keys(s).sort((_, h) => (s[_].sortNo || 0) - (s[h].sortNo || 0));
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
  var f = Z(c, 2), v = Y(f);
  Nt(v, 21, () => o, vo, (x, _) => {
    Aa(x, ct(() => g(_)));
  }), X(v);
  var w = Z(v, 2);
  Nt(w, 21, () => a, vo, (x, _) => {
    Aa(x, ct(() => g(_)));
  }), X(w), X(f), X(u);
  var b = Z(u, 2);
  Fe(b, {
    onclick: () => {
      F(r, g(r) ? "" : "show", !0);
    },
    children: (x, _) => {
      var h = et(), C = be(h);
      {
        var y = (E) => {
          var S = yw();
          T(E, S);
        }, k = (E) => {
          var S = ww();
          T(E, S);
        };
        xe(C, (E) => {
          g(r) === "show" ? E(y) : E(k, !1);
        });
      }
      T(x, h);
    },
    $$slots: { default: !0 }
  }), X(l), ke(() => {
    mt(l, 1, `tf-toolbar ${g(r) ?? ""}`), dt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), dt(w, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), T(e, l), fe();
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
var _w = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Ew = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ re("<!> <div></div> <!>", 1);
const Hw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  var n;
  de(t, !0), Je(e, Hw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = Sn(), s = Dt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = tr().customNodes[t.type];
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
  return gn(e, ct(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var w = et(), b = be(w);
        rs(b, () => c.icon), T(v, w);
      },
      children: (v, w) => {
        var b = Pw(), x = be(b);
        {
          var _ = (k) => {
            var E = kw(), S = be(E), M = Y(S);
            Qe(M, {
              level: 3,
              children: (L, D) => {
                Me();
                var A = Be("输入参数");
                T(L, A);
              },
              $$slots: { default: !0 }
            });
            var V = Z(M, 2);
            Fe(V, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (L, D) => {
                var A = _w();
                T(L, A);
              },
              $$slots: { default: !0 }
            }), X(S);
            var O = Z(S, 2);
            Zt(O, {}), T(k, E);
          };
          xe(x, (k) => {
            c.parametersEnable !== !1 && k(_);
          });
        }
        var h = Z(x, 2);
        Cn(h, (k) => d = k, () => d);
        var C = Z(h, 2);
        {
          var y = (k) => {
            var E = Sw(), S = be(E), M = Y(S);
            Qe(M, {
              level: 3,
              mt: "10px",
              children: (L, D) => {
                Me();
                var A = Be("输出参数");
                T(L, A);
              },
              $$slots: { default: !0 }
            });
            var V = Z(M, 2);
            Fe(V, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (L, D) => {
                var A = Ew();
                T(L, A);
              },
              $$slots: { default: !0 }
            }), X(S);
            var O = Z(S, 2);
            An(O, {}), T(k, E);
          };
          xe(C, (k) => {
            c.outputDefsEnable !== !1 && k(y);
          });
        }
        ke(() => {
          dt(h, c.rootStyle || ""), mt(h, 1, fn(c.rootClass), "svelte-c71dg3");
        }), T(v, b);
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
var Mw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Vw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), zw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Nw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function jd(e, t) {
  de(t, !0), Je(e, Nw);
  const n = m(t, "onInit", 7), r = Dt();
  n()(r);
  let o = /* @__PURE__ */ xt(!1);
  const i = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, a = (E) => {
    var S;
    E.preventDefault();
    const M = r.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), V = (S = E.dataTransfer) == null ? void 0 : S.getData("application/tinyflow"), O = V ? JSON.parse(V) : {}, L = {
      id: `node_${Zr()}`,
      position: M,
      data: {},
      ...O
    };
    ti.addNode(L), ti.selectNodeOnly(L.id);
  }, { getNode: s } = xw(), l = (E) => {
    const S = s(E.source), M = s(E.target);
    if (E.sourceHandle === "loop_handle" || S.parentId) {
      const V = r.getEdges();
      for (let O of V)
        if (O.target === E.target) {
          const L = s(O.source);
          if (E.sourceHandle === "loop_handle" && L.parentId !== S.id || S.parentId && L.parentId !== S.parentId)
            return !1;
        }
    }
    return !(!S.parentId && M.parentId && M.parentId !== S.id);
  }, { ensureParentInNodesBefore: u } = $w(), c = (E, S) => {
    if (!S.isValid)
      return;
    const M = S.toNode;
    if (M.parentId)
      return;
    const V = S.fromNode, O = S.fromHandle, L = { position: { ...M.position } };
    if (O.id === "loop_handle" ? L.parentId = V.id : V.parentId && (L.parentId = V.parentId), L.parentId) {
      const D = s(L.parentId);
      L.position = {
        x: M.position.x - D.position.x,
        y: M.position.y - D.position.y
      }, u(L.parentId, M.id), r.updateNode(M.id, L);
    }
  }, { getEdgesByTarget: d } = Cw(), f = (E) => {
    E.edges.forEach((S) => {
      const M = s(S.target);
      if (M.parentId) {
        const V = d(S.target), O = s(M.parentId);
        if (V.length === 0)
          r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + O.position.x,
              y: M.position.y + O.position.y
            }
          });
        else {
          let L = !1;
          for (let D = 0; D < V.length; D++) {
            const A = V[D], P = s(A.source);
            if (P.parentId || P.type === "loopNode") {
              L = !0;
              break;
            }
          }
          L || r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + O.position.x,
              y: M.position.y + O.position.y
            }
          });
        }
      }
    });
  }, v = (E, S) => {
  }, w = (E) => {
  }, b = {}, x = tr().customNodes;
  if (x)
    for (let E of Object.keys(x))
      b[E] = qd;
  var _ = zw(), h = Y(_);
  const C = /* @__PURE__ */ Pe(() => ({ ...pw, ...b })), y = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  td(h, ct(
    {
      get nodeTypes() {
        return g(C);
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
      onclick: (E) => {
        const S = E.target;
        S.classList.contains("svelte-flow__edge-interaction") || S.classList.contains("panel-content") || S.closest(".panel-content") || F(o, !1);
      },
      get defaultEdgeOptions() {
        return g(y);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          F(o, !0);
        }
      },
      children: (E, S) => {
        var M = Vw(), V = be(M);
        dd(V, {});
        var O = Z(V, 2);
        ld(O, {});
        var L = Z(O, 2);
        vd(L, {});
        var D = Z(L, 2);
        {
          var A = (P) => {
            No(P, {
              children: (N, $) => {
                var H = Mw(), z = Z(Y(H), 4), I = Y(z);
                Ot(I, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (B) => {
                  }
                }), X(z), X(H), T(N, H);
              },
              $$slots: { default: !0 }
            });
          };
          xe(D, (P) => {
            g(o) && P(A);
          });
        }
        T(E, M);
      },
      $$slots: { default: !0 }
    }
  ));
  var k = Z(h, 2);
  return Kd(k, {}), X(_), T(e, _), fe({
    get onInit() {
      return n();
    },
    set onInit(E) {
      n(E), p();
    }
  });
}
ie(jd, { onInit: {} }, [], [], !0);
function Ow(e, t) {
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
customElements.define("tinyflow-component", ie(Ow, { options: {}, onInit: {} }, [], [], !1));
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
      r.value && (o = new Om({
        ...n,
        element: r.value
      }));
    }), vf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (hf(), gf("div", {
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
