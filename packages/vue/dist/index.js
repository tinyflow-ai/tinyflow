import { defineComponent as cf, ref as df, onMounted as ff, onUnmounted as vf, createElementBlock as gf, openBlock as hf, normalizeStyle as pf, normalizeClass as mf } from "vue";
var yf = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, wf = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ht = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Wl("Cannot " + n), lt = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), bf = (e, t, n) => (Za(e, t, "access private method"), n);
const xf = "5";
var Ts;
typeof window < "u" && ((Ts = window.__svelte ?? (window.__svelte = {})).v ?? (Ts.v = /* @__PURE__ */ new Set())).add(xf);
let Rr = !1, $f = !1;
function Cf() {
  Rr = !0;
}
Cf();
const Ra = 1, Ba = 2, Xl = 4, kf = 8, _f = 16, Sf = 1, Ef = 2, jl = 4, Pf = 8, Mf = 16, ql = 1, Hf = 2, Ya = "[", Ka = "[!", Wa = "]", $r = {}, Pt = Symbol(), Nf = "http://www.w3.org/1999/xhtml", Vf = "http://www.w3.org/2000/svg", zf = !1;
function Mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ko = Array.isArray, Tf = Array.prototype.indexOf, Xa = Array.from, ri = Object.keys, ao = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, Lf = Object.prototype, Df = Array.prototype, ja = Object.getPrototypeOf, Ls = Object.isExtensible;
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
const sn = 2, Gl = 4, Hi = 8, qa = 16, An = 32, vr = 64, oi = 128, Rt = 256, ii = 512, _t = 1024, wn = 2048, er = 4096, Vn = 8192, Ni = 16384, Af = 32768, Br = 65536, If = 1 << 17, Zf = 1 << 19, Ul = 1 << 20, ga = 1 << 21, Xn = Symbol("$state"), Fa = Symbol("legacy props"), Rf = Symbol("");
function Bf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function jf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function qf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function It(e) {
  Se = e;
}
let Oe;
function kt(e) {
  if (e === null)
    throw Vi(), $r;
  return Oe = e;
}
function bn() {
  return kt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _n(Oe)
  );
}
function K(e) {
  if (Se) {
    if (/* @__PURE__ */ _n(Oe) !== null)
      throw Vi(), $r;
    Oe = e;
  }
}
function He(e = 1) {
  if (Se) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(n);
    Oe = n;
  }
}
function ha() {
  for (var e = 0, t = Oe; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Wa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ya || n === Ka) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _n(t)
    );
    t.remove(), t = r;
  }
}
function Ft(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = ja(e);
  if (t !== Lf && t !== Df)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ko(e), o = /* @__PURE__ */ xt(0), i = je, a = (s) => {
    var l = je;
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && qf();
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
          F(u, Pt), Ds(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Xn)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Nn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ xt(Ft(f ? s[l] : Pt))), n.set(l, d)), d !== void 0) {
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
        if (l === Xn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(s, l);
        if (c !== void 0 || qe !== null && (!d || (u = Nn(s, l)) != null && u.writable)) {
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
        f === void 0 ? (!v || (d = Nn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ xt(void 0)), F(
          f,
          a(() => Ft(u))
        ), n.set(l, f)) : (v = f.v !== Pt, F(
          f,
          a(() => Ft(u))
        ));
        var $ = Reflect.getOwnPropertyDescriptor(s, l);
        if ($ != null && $.set && $.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var k = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= k.v && F(k, h + 1);
          }
          Ds(o);
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
function Ds(e, t = 1) {
  F(e, e.v + t);
}
var Mt, Jl, Ql, eu;
function pa() {
  if (Mt === void 0) {
    Mt = window, Jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ql = Nn(t, "firstChild").get, eu = Nn(t, "nextSibling").get, Ls(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ls(n) && (n.__t = void 0);
  }
}
function Tn(e = "") {
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
    return n == null || n.before(r), kt(r), r;
  }
  return kt(n), n;
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
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _n(n) : n;
  }
  return Oe;
}
function Z(e, t = 1, n = !1) {
  let r = Se ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ _n(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Tn();
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
function Pr(e) {
  var t = sn | wn, n = je !== null && je.f & sn ? (
    /** @type {Derived} */
    je
  ) : null;
  return qe === null || n !== null && n.f & Rt ? t |= Rt : qe.f |= Ul, {
    ctx: Ke,
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
    parent: n ?? qe
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Pr(e);
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Pr(e);
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
  var t, n = qe;
  Un(Uf(e));
  try {
    nu(e), t = mu(e);
  } finally {
    Un(n);
  }
  return t;
}
function ou(e) {
  var t = ru(e), n = (Kn || e.f & Rt) && e.deps !== null ? er : _t;
  Qt(e, n), e.equals(t) || (e.v = t, e.wv = hu());
}
function iu(e) {
  qe === null && je === null && Kf(), je !== null && je.f & Rt && qe === null && Yf(), So && Bf();
}
function Jf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = qe, i = {
    ctx: Ke,
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
      throw Jt(i), l;
    }
  else t !== null && Li(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ul | oi)) === 0;
  if (!a && r && (o !== null && Jf(i, o), je !== null && je.f & sn)) {
    var s = (
      /** @type {Derived} */
      je
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Qa(e) {
  const t = gr(Hi, null, !1);
  return Qt(t, _t), t.teardown = e, t;
}
function Gn(e) {
  iu();
  var t = qe !== null && (qe.f & An) !== 0 && Ke !== null && !Ke.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ke
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: qe,
      reaction: je
    });
  } else {
    var r = At(e);
    return r;
  }
}
function Qf(e) {
  return iu(), Yr(e);
}
function e1(e) {
  const t = gr(vr, e, !0);
  return () => {
    Jt(t);
  };
}
function t1(e) {
  const t = gr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      Jt(t), r(void 0);
    }) : (Jt(t), r(void 0));
  });
}
function At(e) {
  return gr(Gl, e, !1);
}
function ge(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), $n(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ke
  );
  Yr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & _t && Qt(n, er), Kr(n) && Ti(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return gr(Hi, e, !0);
}
function _e(e, t = [], n = Pr) {
  const r = t.map(n);
  return hr(() => e(...r.map(g)));
}
function hr(e, t = 0) {
  return gr(Hi | qa | t, e, !0);
}
function Ln(e, t = !0) {
  return gr(Hi | An, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = So, r = je;
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
    n.f & vr ? n.parent = null : Jt(n, t), n = r;
  }
}
function n1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & An || Jt(t), t = n;
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
  su(e, t && !n), ui(e, 0), Qt(e, Ni);
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
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Br) !== 0 || (r.f & An) !== 0;
      es(r, t, i ? n : !1), r = o;
    }
  }
}
function lo(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & _t || (e.f ^= _t), Kr(e) && (Qt(e, wn), Li(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Br) !== 0 || (n.f & An) !== 0;
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
function _o(e) {
  uo.length === 0 && queueMicrotask(du), uo.push(e);
}
function o1(e) {
  co.length === 0 && r1(fu), co.push(e);
}
function Os() {
  uo.length > 0 && du(), co.length > 0 && fu();
}
let qo = !1, ai = !1, si = null, ir = !1, So = !1;
function As(e) {
  So = e;
}
let ro = [], je = null, pn = !1;
function xn(e) {
  je = e;
}
let qe = null;
function Un(e) {
  qe = e;
}
let Ut = null;
function i1(e) {
  Ut = e;
}
function vu(e) {
  je !== null && je.f & ga && (Ut === null ? i1([e]) : Ut.push(e));
}
let bt = null, Ot = 0, qt = null;
function a1(e) {
  qt = e;
}
let gu = 1, li = 0, Kn = !1;
function hu() {
  return ++gu;
}
function Kr(e) {
  var t, n = e.f;
  if (n & wn)
    return !0;
  if (n & er) {
    var r = e.deps, o = (n & Rt) !== 0;
    if (r !== null) {
      var i, a, s = (n & ii) !== 0, l = o && qe !== null && !Kn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ii), l && d !== null && !(d.f & Rt) && (c.f ^= Rt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Kr(
          /** @type {Derived} */
          a
        ) && ou(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || qe !== null && !Kn) && Qt(e, _t);
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
  throw qo = !1, e;
}
function l1(e) {
  return (e.f & Ni) === 0 && (e.parent === null || (e.parent.f & oi) === 0);
}
function zi(e, t, n, r) {
  if (qo) {
    if (n === null && (qo = !1), l1(t))
      throw e;
    return;
  }
  n !== null && (qo = !0);
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
      ) : t === i && (n ? Qt(i, wn) : i.f & _t && Qt(i, er), Li(
        /** @type {Effect} */
        i
      )));
    }
}
function mu(e) {
  var t, n = bt, r = Ot, o = qt, i = je, a = Kn, s = Ut, l = Ke, u = pn, c = e.f;
  bt = /** @type {null | Value[]} */
  null, Ot = 0, qt = null, Kn = (c & Rt) !== 0 && (pn || !ir || je === null), je = c & (An | vr) ? null : e, Ut = null, Zs(e.ctx), pn = !1, li++, e.f |= ga;
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
      if (!Kn)
        for (v = Ot; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (ui(e, Ot), f.length = Ot);
    if (Di() && qt !== null && !pn && f !== null && !(e.f & (sn | er | wn)))
      for (v = 0; v < /** @type {Source[]} */
      qt.length; v++)
        pu(
          qt[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (li++, qt !== null && (o === null ? o = qt : o.push(.../** @type {Source[]} */
    qt))), d;
  } finally {
    bt = n, Ot = r, qt = o, je = i, Kn = a, Ut = s, Zs(l), pn = u, e.f ^= ga;
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
  (bt === null || !bt.includes(t)) && (Qt(t, er), t.f & (Rt | ii) || (t.f ^= ii), nu(
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
  if (!(t & Ni)) {
    Qt(e, _t);
    var n = qe, r = Ke, o = ir;
    qe = e, ir = !0;
    try {
      t & qa ? n1(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = gu;
      var a = e.deps, s;
      zf && $f && e.f & wn;
    } catch (l) {
      zi(l, e, n, r || e.ctx);
    } finally {
      ir = o, qe = n;
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
      if (!(r.f & (Ni | Vn)))
        try {
          Kr(r) && (Ti(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          zi(o, r, null, r.ctx);
        }
    }
}
function Li(e) {
  ai || (ai = !0, queueMicrotask(yu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | An)) {
      if (!(n & _t)) return;
      t.f ^= _t;
    }
  }
  ro.push(t);
}
function f1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (An | vr)) !== 0, i = o && (r & _t) !== 0;
    if (!i && !(r & Vn)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= _t;
      else {
        var a = je;
        try {
          je = n, Kr(n) && Ti(n);
        } catch (u) {
          zi(u, n, null, n.ctx);
        } finally {
          je = a;
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
function g(e) {
  var t = e.f, n = (t & sn) !== 0;
  if (je !== null && !pn) {
    if (!(Ut != null && Ut.includes(e))) {
      var r = je.deps;
      e.rv < li && (e.rv = li, bt === null && r !== null && r[Ot] === e ? Ot++ : bt === null ? bt = [e] : (!Kn || !bt.includes(e)) && bt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Rt) && (o.f ^= Rt);
  }
  return n && (o = /** @type {Derived} */
  e, Kr(o) && ou(o)), So && fo.has(e) ? fo.get(e) : e.v;
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
function Qt(e, t) {
  e.f = e.f & v1 | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      ma(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && ma(n);
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
    const n = ja(e);
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
function Hr(e, t) {
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
  const n = Hr(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t = !1) {
  var n;
  const r = Hr(e);
  return t || (r.equals = Ja), Rr && Ke !== null && Ke.l !== null && ((n = Ke.l).s ?? (n.s = [])).push(r), r;
}
function F(e, t, n = !1) {
  je !== null && !pn && Di() && je.f & (sn | qa) && !(Ut != null && Ut.includes(e)) && Gf();
  let r = n ? Ft(t) : t;
  return ya(e, r);
}
function ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    So ? fo.set(e, t) : fo.set(e, n), e.v = t, e.f & sn && (e.f & wn && ru(
      /** @type {Derived} */
      e
    ), Qt(e, e.f & Rt ? er : _t)), e.wv = hu(), wu(e, wn), Di() && qe !== null && qe.f & _t && !(qe.f & (An | vr)) && (qt === null ? a1([e]) : qt.push(e));
  }
  return t;
}
function Is(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function wu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Di(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & wn || !r && a === qe || (Qt(a, t), s & (_t | Rt) && (s & sn ? wu(
        /** @type {Derived} */
        a,
        er
      ) : Li(
        /** @type {Effect} */
        a
      )));
    }
}
let Ke = null;
function Zs(e) {
  Ke = e;
}
function sr(e) {
  return (
    /** @type {T} */
    ts().get(e)
  );
}
function Nr(e, t) {
  return ts().set(e, t), t;
}
function g1(e) {
  return ts().has(e);
}
function de(e, t = !1, n) {
  var r = Ke = {
    p: Ke,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Rr && !t && (Ke.l = {
    s: null,
    u: null,
    r1: [],
    r2: Hr(!1)
  }), Qa(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Ke;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = qe, r = je;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Un(i.effect), xn(i.reaction), At(i.fn);
        }
      } finally {
        Un(n), xn(r);
      }
    }
    Ke = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Di() {
  return !Rr || Ke !== null && Ke.l === null;
}
function ts(e) {
  return Ke === null && Mi(), Ke.c ?? (Ke.c = new Map(h1(Ke) || void 0));
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
function k1(e) {
  return C1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, _o(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function S1(e) {
  Se && /* @__PURE__ */ Ct(e) !== null && Ga(e);
}
let Rs = !1;
function E1() {
  Rs || (Rs = !0, document.addEventListener(
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
  var t = je, n = qe;
  xn(null), Un(null);
  try {
    return e();
  } finally {
    xn(t), Un(n);
  }
}
const bu = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Qr.call(t, i), !i.cancelBubble)
      return P1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? _o(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ye(e, t, n, r, o) {
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
    var d = je, f = qe;
    xn(null), Un(null);
    try {
      for (var v, w = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var $ = a["__" + o];
          if ($ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ko($)) {
              var [k, ...h] = $;
              k.apply(a, [e, ...h]);
            } else
              $.call(a, e);
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
      e.__root = n, delete e.currentTarget, xn(d), Un(f);
    }
  }
}
function ns(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Vt(e, t) {
  var n = (
    /** @type {Effect} */
    qe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & ql) !== 0, r = (t & Hf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Vt(Oe, null), Oe;
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
      Vt(s, l);
    } else
      Vt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & ql) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Se)
      return Vt(Oe, null), Oe;
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
      Vt(c, d);
    } else
      Vt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!Se) {
    var t = Tn(e + "");
    return Vt(t, t), t;
  }
  var n = Oe;
  return n.nodeType !== 3 && (n.before(n = Tn()), kt(n)), Vt(n, n), n;
}
function et() {
  if (Se)
    return Vt(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
  return e.append(t, n), Vt(t, n), e;
}
function O(e, t) {
  if (Se) {
    qe.nodes_end = Oe, bn();
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
    i.data !== Ya); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(i);
    if (!i)
      throw $r;
    It(!0), kt(
      /** @type {Comment} */
      i
    ), bn();
    const a = Cu(e, { ...t, anchor: i });
    if (Oe === null || Oe.nodeType !== 8 || /** @type {Comment} */
    Oe.data !== Wa)
      throw Vi(), $r;
    return It(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && Xf(), pa(), Ga(n), It(!1), $u(e, t);
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
        var w = $1(v);
        t.addEventListener(v, Qr, { passive: w });
        var b = yr.get(v);
        b === void 0 ? (document.addEventListener(v, Qr, { passive: w }), yr.set(v, 1)) : yr.set(v, b + 1);
      }
    }
  };
  l(Xa(bu)), wa.add(l);
  var u = void 0, c = t1(() => {
    var d = n ?? t.appendChild(Tn());
    return Ln(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Ke
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && Vt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Se && (qe.nodes_end = Oe), i && fe();
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
function H1(e, t) {
  const n = ba.get(e);
  return n ? (ba.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && bn();
  var o = e, i = null, a = null, s = Pt, l = n > 0 ? Br : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const $ = (
          /** @type {Comment} */
          o.data
        );
        $ === Ya ? r = 0 : $ === Ka ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ha(), kt(o), It(!1), w = !0, r = -1);
    }
    s ? (i ? lo(i) : v && (i = Ln(() => v(o))), a && Mr(a, () => {
      a = null;
    })) : (a ? lo(a) : v && (a = Ln(() => v(o, [n + 1, r]))), i && Mr(i, () => {
      i = null;
    })), w && It(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Se && (o = Oe);
}
function vo(e, t) {
  return t;
}
function N1(e, t, n, r) {
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
function zt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Xl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Se ? kt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(Tn());
  }
  Se && bn();
  var c = null, d = !1, f = /* @__PURE__ */ me(() => {
    var v = n();
    return ko(v) ? v : v == null ? [] : Xa(v);
  });
  hr(() => {
    var v = g(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Se) {
      var $ = (
        /** @type {Comment} */
        a.data === Ka
      );
      $ !== (w === 0) && (a = ha(), kt(a), It(!1), b = !0);
    }
    if (Se) {
      for (var k = null, h, C = 0; C < w; C++) {
        if (Oe.nodeType === 8 && /** @type {Comment} */
        Oe.data === Wa) {
          a = /** @type {Comment} */
          Oe, b = !0, It(!1);
          break;
        }
        var y = v[C], _ = r(y, C);
        h = ku(
          Oe,
          s,
          k,
          null,
          y,
          _,
          C,
          o,
          t,
          n
        ), s.items.set(_, h), k = h;
      }
      w > 0 && kt(ha());
    }
    Se || V1(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? lo(c) : c = Ln(() => i(a)) : c !== null && Mr(c, () => {
      c = null;
    })), b && It(!0), g(f);
  }), Se && (a = Oe);
}
function V1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & kf) !== 0, f = (o & (Ra | Ba)) !== 0, v = e.length, w = t.items, b = t.first, $ = b, k, h = null, C, y = [], _ = [], M, E, z, V;
  if (d)
    for (V = 0; V < v; V += 1)
      M = e[V], E = i(M, V), z = w.get(E), z !== void 0 && ((s = z.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(z));
  for (V = 0; V < v; V += 1) {
    if (M = e[V], E = i(M, V), z = w.get(E), z === void 0) {
      var D = $ ? (
        /** @type {TemplateNode} */
        $.e.nodes_start
      ) : n;
      h = ku(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        M,
        E,
        V,
        r,
        o,
        a
      ), w.set(E, h), y = [], _ = [], $ = h.next;
      continue;
    }
    if (f && z1(z, M, V, o), z.e.f & Vn && (lo(z.e), d && ((l = z.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(z))), z !== $) {
      if (k !== void 0 && k.has(z)) {
        if (y.length < _.length) {
          var A = _[0], T;
          h = A.prev;
          var R = y[0], S = y[y.length - 1];
          for (T = 0; T < y.length; T += 1)
            Bs(y[T], A, n);
          for (T = 0; T < _.length; T += 1)
            k.delete(_[T]);
          Bn(t, R.prev, S.next), Bn(t, h, R), Bn(t, S, A), $ = A, h = S, V -= 1, y = [], _ = [];
        } else
          k.delete(z), Bs(z, $, n), Bn(t, z.prev, z.next), Bn(t, z, h === null ? t.first : h.next), Bn(t, h, z), h = z;
        continue;
      }
      for (y = [], _ = []; $ !== null && $.k !== E; )
        $.e.f & Vn || (k ?? (k = /* @__PURE__ */ new Set())).add($), _.push($), $ = $.next;
      if ($ === null)
        continue;
      z = $;
    }
    y.push(z), h = z, $ = z.next;
  }
  if ($ !== null || k !== void 0) {
    for (var N = k === void 0 ? [] : Xa(k); $ !== null; )
      $.e.f & Vn || N.push($), $ = $.next;
    var x = N.length;
    if (x > 0) {
      var P = o & Xl && v === 0 ? n : null;
      if (d) {
        for (V = 0; V < x; V += 1)
          (u = N[V].a) == null || u.measure();
        for (V = 0; V < x; V += 1)
          (c = N[V].a) == null || c.fix();
      }
      N1(t, N, P, w);
    }
  }
  d && _o(() => {
    var H;
    if (C !== void 0)
      for (z of C)
        (H = z.a) == null || H.apply();
  }), qe.first = t.first && t.first.e, qe.last = h && h.e;
}
function z1(e, t, n, r) {
  r & Ra && ya(e.v, t), r & Ba ? ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ku(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ra) !== 0, d = (l & _f) === 0, f = c ? d ? /* @__PURE__ */ ne(o) : Hr(o) : o, v = l & Ba ? Hr(a) : a, w = {
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
    return w.e = Ln(() => s(e, f, v, u), Se), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
  } finally {
  }
}
function Bs(e, t, n) {
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
  hr(() => {
    if (a === (a = t() ?? "")) {
      Se && bn();
      return;
    }
    s !== void 0 && (Jt(s), s = void 0), a !== "" && (s = Ln(() => {
      if (Se) {
        Oe.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ _n(l);
        if (l === null)
          throw Vi(), $r;
        Vt(Oe, u), i = kt(l);
        return;
      }
      var c = a + "", d = ns(c);
      Vt(
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
  hr(() => {
    o !== (o = t()) && (i && (Jt(i), i = null), i = Ln(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Br), Se && (r = Oe);
}
function _u(e, t, n) {
  Se && bn();
  var r = e, o, i;
  hr(() => {
    o !== (o = t()) && (i && (Mr(i), i = null), o && (i = Ln(() => n(r, o))));
  }, Br), Se && (r = Oe);
}
function L1(e, t, n, r, o, i) {
  let a = Se;
  Se && bn();
  var s, l, u = null;
  Se && Oe.nodeType === 1 && (u = /** @type {Element} */
  Oe, bn());
  var c = (
    /** @type {TemplateNode} */
    Se ? Oe : e
  ), d;
  hr(() => {
    const f = t() || null;
    var v = f === "svg" ? Vf : null;
    f !== s && (d && (f === null ? Mr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Jt(d)), f && f !== l && (d = Ln(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Vt(u, u), r) {
        Se && k1(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ Ct(u) : u.appendChild(Tn())
        );
        Se && (w === null ? It(!1) : kt(w)), r(u, w);
      }
      qe.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Br), a && (It(!0), kt(c));
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
    var r = $n(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Yr(() => {
        var a = n();
        U(a), o && Ua(i, a) && (i = a, r.update(a));
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
function D1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Su(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? D1(e) : e ?? "";
}
const Ys = [...` 	
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
          (a === 0 || Ys.includes(r[a - 1])) && (s === r.length || Ys.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function Ks(e, t = !1) {
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
    return r && (n += Ks(r)), o && (n += Ks(o, !0)), n = n.trim(), n === "" ? null : n;
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
const Gr = Symbol("class"), nr = Symbol("style"), Eu = Symbol("is custom element"), Pu = Symbol("is html");
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
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Rf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = os(e), a = i[Eu], s = !i[Pu];
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
          const _ = {}, M = "$$" + C;
          let E = C.slice(2);
          var $ = y1(E);
          if (p1(E) && (E = E.slice(0, -7), _.capture = !0), !$ && w) {
            if (y != null) continue;
            e.removeEventListener(E, u[M], _), u[M] = null;
          }
          if (y != null)
            if ($)
              e[`__${E}`] = y, Oi([E]);
            else {
              let z = function(V) {
                u[C].call(this, V);
              };
              u[M] = xu(E, e, z, _);
            }
          else $ && (e[`__${E}`] = void 0);
        } else if (C === "style")
          ye(e, C, y);
        else if (C === "autofocus")
          _1(
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
          var k = C;
          s || (k = b1(k));
          var h = k === "defaultValue" || k === "defaultChecked";
          if (y == null && !a && !h)
            if (i[C] = null, k === "value" || k === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (k === "value") {
                let E = _.defaultValue;
                _.removeAttribute(k), _.defaultValue = E, _.value = _.__value = M ? E : null;
              } else {
                let E = _.defaultChecked;
                _.removeAttribute(k), _.defaultChecked = E, _.checked = M ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else h || f.includes(k) && (a || typeof y != "string") ? e[k] = y : typeof y != "function" && ye(e, k, y);
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
      [Pu]: e.namespaceURI === Nf
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
    r = ja(r);
  }
  return t;
}
var rr, io, Fo, xa, Hu;
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
    return r.add(n), lt(this, rr).set(t, r), bf(this, xa, Hu).call(this).observe(t, lt(this, Fo)), () => {
      var o = lt(this, rr).get(t);
      o.delete(n), o.size === 0 && (lt(this, rr).delete(t), lt(this, io).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakSet(), Hu = function() {
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
Ht($a, "entries", /* @__PURE__ */ new WeakMap());
let Z1 = $a;
var R1 = /* @__PURE__ */ new Z1({
  box: "border-box"
});
function Xs(e, t, n) {
  var r = R1.observe(e, () => n(e[t]));
  At(() => ($n(() => n(e[t])), r));
}
function js(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function Cn(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], $n(() => {
        e !== n(...i) && (t(e, ...i), o && js(n(...o), e) && t(null, ...o));
      });
    }), () => {
      _o(() => {
        i && js(n(...i), e) && t(null, ...i);
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
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => U(t.s);
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
  n.b.length && Qf(() => {
    qs(t, r), so(n.b);
  }), Gn(() => {
    const o = $n(() => n.m.map(Of));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Gn(() => {
    qs(t, r), so(n.a);
  });
}
function qs(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
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
  Ke === null && Mi(), Rr && Ke.l !== null ? Y1(Ke).m.push(e) : Gn(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Ke === null && Mi(), Wt(() => () => $n(e));
}
function B1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ai() {
  const e = Ke;
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
      const a = ko(i) ? i.slice() : [i], s = B1(
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
function Y1(e) {
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
function jt(e, t) {
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
function jn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return jt(n, (a, s) => {
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
        ($) => {
          u[b] = $, c &= ~(1 << b), l && f();
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
let Ro = !1, Ca = Symbol();
function J(e, t, n) {
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
function K1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function ci(e, t) {
  return e.set(t), t;
}
function tt() {
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
function W1(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const X1 = {
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
    X1
  );
}
const j1 = {
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
      jl
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Hr(0) }, j1);
}
const q1 = {
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
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Nn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Xn || t === Fa) return !1;
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
  return new Proxy({ props: e }, q1);
}
function Fs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function m(e, t, n, r) {
  var o, i = (n & Sf) !== 0, a = !Rr || (n & Ef) !== 0, s = (n & Pf) !== 0, l = (n & Mf) !== 0, u = !1, c;
  s ? [c, u] = W1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Xn in e || Fa in e, f = s && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, $ = () => (b = !0, w && (w = !1, l ? v = $n(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && jf(), c = $(), f && f(c));
  var k;
  if (a)
    k = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? $() : (w = !0, b = !1, E);
    };
  else {
    var h = (i ? Pr : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= If, k = () => {
      var E = g(h);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & jl))
    return k;
  if (f) {
    var C = e.$$legacy;
    return function(E, z) {
      return arguments.length > 0 ? ((!a || !z || C || u) && f(z ? k() : E), E) : k();
    };
  }
  var y = !1, _ = /* @__PURE__ */ ne(c), M = /* @__PURE__ */ Pr(() => {
    var E = k(), z = g(_);
    return y ? (y = !1, z) : _.v = E;
  });
  return s && g(M), i || (M.equals = Ja), function(E, z) {
    if (arguments.length > 0) {
      const V = z ? g(M) : a && s ? Ft(E) : E;
      if (!M.equals(V)) {
        if (y = !0, F(_, V), b && v !== void 0 && (v = V), Fs(M))
          return E;
        $n(() => g(M));
      }
      return E;
    }
    return Fs(M) ? M.v : g(M);
  };
}
function F1(e) {
  return new G1(e);
}
var Rn, rn;
class G1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    br(this, Rn), br(this, rn);
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
    ni(this, rn, (t.hydrate ? M1 : $u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ni(this, Rn, i.$$events);
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
      H1(lt(this, rn));
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
    lt(this, Rn)[t] = lt(this, Rn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Rn)[t].push(r), () => {
      lt(this, Rn)[t] = lt(this, Rn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, rn).$destroy();
  }
}
Rn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
let Nu;
typeof HTMLElement == "function" && (Nu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ht(this, "$$ctor"), Ht(this, "$$s"), Ht(this, "$$c"), Ht(this, "$$cn", !1), Ht(this, "$$d", {}), Ht(this, "$$r", !1), Ht(this, "$$p_d", {}), Ht(this, "$$l", {}), Ht(this, "$$l_u", /* @__PURE__ */ new Map()), Ht(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
        Yr(() => {
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
function ae(e, t, n, r, o, i) {
  let a = class extends Nu {
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
          var d = (u = Nn(c, s)) == null ? void 0 : u.get;
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
var J1 = { value: () => {
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
function Q1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Uo.prototype = Ii.prototype = {
  constructor: Uo,
  on: function(e, t) {
    var n = this._, r = Q1(e + "", n), o, i = -1, a = r.length;
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
      e[r] = J1, e = e.slice(0, r).concat(e.slice(r + 1));
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
function tv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ka && t.documentElement.namespaceURI === ka ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function nv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Vu(e) {
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
  return new Kt(r, this._parents);
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
  return new Kt(r, o);
}
function Tu(e) {
  return function() {
    return this.matches(e);
  };
}
function Lu(e) {
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
  return this.select(e == null ? dv : cv(typeof e == "function" ? e : Lu(e)));
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
  return this.selectAll(e == null ? gv : hv(typeof e == "function" ? e : Lu(e)));
}
function mv(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Kt(r, this._parents);
}
function Du(e) {
  return new Array(e.length);
}
function yv() {
  return new Kt(this._enter || this._groups.map(Du), this._parents);
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
    var c = r[u], d = o[u], f = d.length, v = kv(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), $ = a[u] = new Array(w), k = l[u] = new Array(f);
    n(c, d, b, $, k, v, t);
    for (var h = 0, C = 0, y, _; h < w; ++h)
      if (y = b[h]) {
        for (h >= C && (C = h + 1); !(_ = $[C]) && ++C < w; ) ;
        y._next = _ || null;
      }
  }
  return a = new Kt(a, r), a._enter = s, a._exit = l, a;
}
function kv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _v() {
  return new Kt(this._exit || this._groups.map(Du), this._parents);
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
  return new Kt(s, this._parents);
}
function Pv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Mv(e) {
  e || (e = Hv);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Kt(o, this._parents).order();
}
function Hv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Nv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Vv() {
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
function Lv() {
  return !this.node();
}
function Dv(e) {
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
function Rv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Bv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Yv(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Av : Ov : typeof t == "function" ? n.local ? Bv : Rv : n.local ? Zv : Iv)(n, t));
}
function Ou(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Kv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Wv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Xv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function jv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Kv : typeof t == "function" ? Xv : Wv)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || Ou(e).getComputedStyle(e, null).getPropertyValue(t);
}
function qv(e) {
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
  return arguments.length > 1 ? this.each((t == null ? qv : typeof t == "function" ? Gv : Fv)(e, t)) : this.node()[e];
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
function Ru(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Jv(e) {
  return function() {
    Zu(this, e);
  };
}
function Qv(e) {
  return function() {
    Ru(this, e);
  };
}
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Ru)(this, e);
  };
}
function tg(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? eg : t ? Jv : Qv)(n, t));
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
  var t = typeof e == "function" ? e : Vu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function pg(e, t) {
  var n = typeof e == "function" ? e : Vu(e), r = t == null ? hg : typeof t == "function" ? t : ss(t);
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
function Eg(e, t, n) {
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
  var r = Ou(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return Bu(this, e, t);
  };
}
function Mg(e, t) {
  return function() {
    return Bu(this, e, t.apply(this, arguments));
  };
}
function Hg(e, t) {
  return this.each((typeof t == "function" ? Mg : Pg)(e, t));
}
function* Ng() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Yu = [null];
function Kt(e, t) {
  this._groups = e, this._parents = t;
}
function Eo() {
  return new Kt([[document.documentElement]], Yu);
}
function Vg() {
  return this;
}
Kt.prototype = Eo.prototype = {
  constructor: Kt,
  select: ov,
  selectAll: lv,
  selectChild: fv,
  selectChildren: pv,
  filter: mv,
  data: Cv,
  enter: yv,
  exit: _v,
  join: Sv,
  merge: Ev,
  selection: Vg,
  order: Pv,
  sort: Mv,
  call: Nv,
  nodes: Vv,
  node: zv,
  size: Tv,
  empty: Lv,
  each: Dv,
  attr: Yv,
  style: jv,
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
  on: Eg,
  dispatch: Hg,
  [Symbol.iterator]: Ng
};
function Gt(e) {
  return typeof e == "string" ? new Kt([[document.querySelector(e)]], [document.documentElement]) : new Kt([[e]], Yu);
}
function zg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = zg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Tg = { passive: !1 }, go = { capture: !0, passive: !1 };
function oa(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ku(e) {
  var t = e.document.documentElement, n = Gt(e).on("dragstart.drag", Cr, go);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, go) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wu(e, t) {
  var n = e.document.documentElement, r = Gt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, go), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
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
function Lg(e) {
  return !e.ctrlKey && !e.button;
}
function Dg() {
  return this.parentNode;
}
function Og(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Lg, t = Dg, n = Og, r = Ag, o = {}, i = Ii("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", $).on("touchmove.drag", k, Tg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, _) {
    if (!(c || !e.call(this, y, _))) {
      var M = C(this, t.call(this, y, _), y, _, "mouse");
      M && (Gt(y.view).on("mousemove.drag", w, go).on("mouseup.drag", b, go), Ku(y.view), oa(y), u = !1, s = y.clientX, l = y.clientY, M("start", y));
    }
  }
  function w(y) {
    if (Cr(y), !u) {
      var _ = y.clientX - s, M = y.clientY - l;
      u = _ * _ + M * M > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    Gt(y.view).on("mousemove.drag mouseup.drag", null), Wu(y.view, u), Cr(y), o.mouse("end", y);
  }
  function $(y, _) {
    if (e.call(this, y, _)) {
      var M = y.changedTouches, E = t.call(this, y, _), z = M.length, V, D;
      for (V = 0; V < z; ++V)
        (D = C(this, E, y, _, M[V].identifier, M[V])) && (oa(y), D("start", y, M[V]));
    }
  }
  function k(y) {
    var _ = y.changedTouches, M = _.length, E, z;
    for (E = 0; E < M; ++E)
      (z = o[_[E].identifier]) && (Cr(y), z("drag", y, _[E]));
  }
  function h(y) {
    var _ = y.changedTouches, M = _.length, E, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < M; ++E)
      (z = o[_[E].identifier]) && (oa(y), z("end", y, _[E]));
  }
  function C(y, _, M, E, z, V) {
    var D = i.copy(), A = on(V || M, _), T, R, S;
    if ((S = n.call(y, new _a("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: z,
      active: a,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), E)) != null)
      return T = S.x - A[0] || 0, R = S.y - A[1] || 0, function N(x, P, H) {
        var L = A, I;
        switch (x) {
          case "start":
            o[z] = N, I = a++;
            break;
          case "end":
            delete o[z], --a;
          // falls through
          case "drag":
            A = on(H || P, _), I = a;
            break;
        }
        D.call(
          x,
          y,
          new _a(x, {
            sourceEvent: P,
            subject: S,
            target: f,
            identifier: z,
            active: I,
            x: A[0] + T,
            y: A[1] + R,
            dx: A[0] - L[0],
            dy: A[1] - L[1],
            dispatch: D
          }),
          E
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Bo(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Bo(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Bo(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Bo(!!y), f) : r;
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
function Xu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Po() {
}
var ho = 0.7, fi = 1 / ho, kr = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Rg = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Bg = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Yg = new RegExp(`^rgba\\(${kr},${kr},${kr},${po}\\)$`), Kg = new RegExp(`^rgba\\(${mn},${mn},${mn},${po}\\)$`), Wg = new RegExp(`^hsl\\(${po},${mn},${mn}\\)$`), Xg = new RegExp(`^hsla\\(${po},${mn},${mn},${po}\\)$`), Js = {
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
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: jg,
  formatHsl: qg,
  formatRgb: el,
  toString: el
});
function Qs() {
  return this.rgb().formatHex();
}
function jg() {
  return this.rgb().formatHex8();
}
function qg() {
  return ju(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Rg.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = Bg.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Yg.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Kg.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Js.hasOwnProperty(e) ? tl(Js[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Nt(e, t, n, r);
}
function Fg(e) {
  return e instanceof Po || (e = mo(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Sa(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new Nt(e, t, n, r ?? 1);
}
function Nt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(Nt, Sa, Xu(Po, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
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
function ju(e) {
  if (e instanceof an) return new an(e.h, e.s, e.l, e.opacity);
  if (e instanceof Po || (e = mo(e)), !e) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new an(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? ju(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(an, Ug, Xu(Po, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new an(this.h, this.s, this.l * e, this.opacity);
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
    return new an(il(this.h), Ko(this.s), Ko(this.l), vi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = vi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${il(this.h)}, ${Ko(this.s) * 100}%, ${Ko(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function il(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ko(e) {
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
  return (e = +e) == 1 ? Fu : function(t, n) {
    return n - t ? Qg(t, n, e) : qu(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : qu(isNaN(e) ? t : e);
}
const al = function e(t) {
  var n = eh(t);
  function r(o, i) {
    var a = n((o = Sa(o)).r, (i = Sa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Fu(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Yn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ea = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Ea.source, "g");
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
  var n = Ea.lastIndex = aa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ea.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Yn(r, o) })), n = aa.lastIndex;
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
function Ju(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      w.push({ i: b - 4, x: Yn(u, d) }, { i: b - 2, x: Yn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Yn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Yn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: Yn(u, d) }, { i: b - 2, x: Yn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, $; ++w < b; ) d[($ = f[w]).i] = $.x(v);
      return d.join("");
    };
  };
}
var ah = Ju(oh, "px, ", "px)", "deg)"), sh = Ju(ih, ", ", ")", ")"), lh = 1e-12;
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, $, k;
    if (b < lh)
      k = Math.log(f / u) / t, $ = function(E) {
        return [
          s + E * v,
          l + E * w,
          u * Math.exp(t * E * k)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), y = (f * f - u * u - r * b) / (2 * f * n * h), _ = Math.log(Math.sqrt(C * C + 1) - C), M = Math.log(Math.sqrt(y * y + 1) - y);
      k = (M - _) / t, $ = function(E) {
        var z = E * k, V = ll(_), D = u / (n * h) * (V * ch(t * z + _) - uh(_));
        return [
          s + D * v,
          l + D * w,
          u * V / ll(t * z + _)
        ];
      };
    }
    return $.duration = k * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, eo = 0, Ur = 0, Qu = 1e3, gi, to, hi = 0, ur = 0, Ri = 0, yo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return ur || (ec(fh), ur = yo.now() + Ri);
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
  cs(), ++zr;
  for (var e = gi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function ul() {
  ur = (hi = yo.now()) + Ri, zr = eo = 0;
  try {
    vh();
  } finally {
    zr = 0, hh(), ur = 0;
  }
}
function gh() {
  var e = yo.now(), t = e - hi;
  t > Qu && (Ri -= t, hi = e);
}
function hh() {
  for (var e, t = gi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : gi = n);
  to = e, Pa(r);
}
function Pa(e) {
  if (!zr) {
    eo && (eo = clearTimeout(eo));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ul, e - yo.now() - Ri)), Ur && (Ur = clearInterval(Ur))) : (Ur || (hi = yo.now(), Ur = setInterval(gh, Qu)), zr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Ii("start", "end", "cancel", "interrupt"), mh = [], nc = 0, dl = 1, Ma = 2, Jo = 3, fl = 4, Ha = 5, Qo = 6;
function Bi(e, t, n, r, o, i) {
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
function Sn(e, t) {
  var n = vn(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
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
        if (v.state === Jo) return cl(a);
        v.state === fl ? (v.state = Qo, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Qo, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (cl(function() {
      n.state === Jo && (n.state = fl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ma, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ma) {
      for (n.state = Jo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ha, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ha && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ma && r.state < Ha, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
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
function xh(e, t, n) {
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
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vn(o, r).value[t];
  };
}
function rc(e, t) {
  var n;
  return (typeof t == "number" ? Yn : t instanceof mo ? al : (n = mo(t)) ? (t = n, al) : rh)(e, t);
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
function Eh(e, t, n) {
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
function Mh(e, t) {
  var n = Zi(e), r = n === "transform" ? sh : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ph : Eh)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? kh : Ch)(n) : (n.local ? Sh : _h)(n, r, t));
}
function Hh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Nh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Vh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nh(e, i)), n;
  }
  return o._value = t, o;
}
function zh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hh(e, i)), n;
  }
  return o._value = t, o;
}
function Th(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? Vh : zh)(r, t));
}
function Lh(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Dh(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Oh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Lh : Dh)(t, e)) : vn(this.node(), t).delay;
}
function Ah(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Ih(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Zh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ah : Ih)(t, e)) : vn(this.node(), t).duration;
}
function Rh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Bh(e) {
  var t = this._id;
  return arguments.length ? this.each(Rh(t, e)) : vn(this.node(), t).ease;
}
function Yh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Kh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Yh(this._id, e));
}
function Wh(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Dn(r, this._parents, this._name, this._id);
}
function Xh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Dn(a, this._parents, this._name, this._id);
}
function jh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function qh(e, t, n) {
  var r, o, i = jh(t) ? ds : Sn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(qh(n, e, t));
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
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Bi(u[f], t, n, f, u, vn(c, n)));
  return new Dn(i, this._parents, t, n);
}
function Qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = vn(c, n), b = 0, $ = f.length; b < $; ++b)
          (v = f[b]) && Bi(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Dn(i, a, t, n);
}
var ep = Eo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
  var n, r, o;
  return function() {
    var i = Vr(this, e), a = (this.style.removeProperty(e), Vr(this, e));
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
    var a = Vr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Vr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Vr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
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
        Bi(l, e, n, u, a, {
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
      var u = Sn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var yp = 0;
function Dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++yp;
}
var Pn = Eo.prototype;
Dn.prototype = {
  constructor: Dn,
  select: Jh,
  selectAll: Qh,
  selectChild: Pn.selectChild,
  selectChildren: Pn.selectChildren,
  filter: Wh,
  merge: Xh,
  selection: tp,
  transition: pp,
  call: Pn.call,
  nodes: Pn.nodes,
  node: Pn.node,
  size: Pn.size,
  empty: Pn.empty,
  each: Pn.each,
  on: Fh,
  attr: Mh,
  attrTween: Th,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Oh,
  duration: Zh,
  ease: Bh,
  easeVarying: Kh,
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
  e instanceof Dn ? (t = e._id, e = e._name) : (t = ic(), (n = bp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Bi(l, e, t, u, a, n || xp(l, t));
  return new Dn(r, this._parents, e, t);
}
Eo.prototype.interrupt = wh;
Eo.prototype.transition = $p;
const Xo = (e) => () => e;
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
var Yi = new Mn(1, 0, 0);
ac.prototype = Mn.prototype;
function ac(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Yi;
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
  return this.__zoom || Yi;
}
function Sp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ep() {
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
  var e = kp, t = _p, n = Pp, r = Sp, o = Ep, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Ii("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, $ = 10;
  function k(S) {
    S.property("__zoom", vl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, N, x, P) {
    var H = S.selection ? S.selection() : S;
    H.property("__zoom", vl), S !== H ? _(S, N, x, P) : H.interrupt().each(function() {
      M(this, arguments).event(P).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, k.scaleBy = function(S, N, x, P) {
    k.scaleTo(S, function() {
      var H = this.__zoom.k, L = typeof N == "function" ? N.apply(this, arguments) : N;
      return H * L;
    }, x, P);
  }, k.scaleTo = function(S, N, x, P) {
    k.transform(S, function() {
      var H = t.apply(this, arguments), L = this.__zoom, I = x == null ? y(H) : typeof x == "function" ? x.apply(this, arguments) : x, Y = L.invert(I), j = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(C(h(L, j), I, Y), H, a);
    }, x, P);
  }, k.translateBy = function(S, N, x, P) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), a);
    }, null, P);
  }, k.translateTo = function(S, N, x, P, H) {
    k.transform(S, function() {
      var L = t.apply(this, arguments), I = this.__zoom, Y = P == null ? y(L) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Yi.translate(Y[0], Y[1]).scale(I.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), L, a);
    }, P, H);
  };
  function h(S, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === S.k ? S : new Mn(N, S.x, S.y);
  }
  function C(S, N, x) {
    var P = N[0] - x[0] * S.k, H = N[1] - x[1] * S.k;
    return P === S.x && H === S.y ? S : new Mn(S.k, P, H);
  }
  function y(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function _(S, N, x, P) {
    S.on("start.zoom", function() {
      M(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var H = this, L = arguments, I = M(H, L).event(P), Y = t.apply(H, L), j = x == null ? y(Y) : typeof x == "function" ? x.apply(H, L) : x, se = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), G = H.__zoom, X = typeof N == "function" ? N.apply(H, L) : N, oe = l(G.invert(j).concat(se / G.k), X.invert(j).concat(se / X.k));
      return function(ve) {
        if (ve === 1) ve = X;
        else {
          var pe = oe(ve), ue = se / pe[2];
          ve = new Mn(ue, j[0] - pe[0] * ue, j[1] - pe[1] * ue);
        }
        I.zoom(null, ve);
      };
    });
  }
  function M(S, N, x) {
    return !x && S.__zooming || new E(S, N);
  }
  function E(S, N) {
    this.that = S, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, N), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, N) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var N = Gt(this.that).datum();
      u.call(
        S,
        this.that,
        new Cp(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function z(S, ...N) {
    if (!e.apply(this, arguments)) return;
    var x = M(this, N).event(S), P = this.__zoom, H = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), L = on(S);
    if (x.wheel)
      (x.mouse[0][0] !== L[0] || x.mouse[0][1] !== L[1]) && (x.mouse[1] = P.invert(x.mouse[0] = L)), clearTimeout(x.wheel);
    else {
      if (P.k === H) return;
      x.mouse = [L, P.invert(L)], ei(this), x.start();
    }
    Jr(S), x.wheel = setTimeout(I, w), x.zoom("mouse", n(C(h(P, H), x.mouse[0], x.mouse[1]), x.extent, a));
    function I() {
      x.wheel = null, x.end();
    }
  }
  function V(S, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var x = S.currentTarget, P = M(this, N, !0).event(S), H = Gt(S.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", se, !0), L = on(S, x), I = S.clientX, Y = S.clientY;
    Ku(S.view), sa(S), P.mouse = [L, this.__zoom.invert(L)], ei(this), P.start();
    function j(G) {
      if (Jr(G), !P.moved) {
        var X = G.clientX - I, oe = G.clientY - Y;
        P.moved = X * X + oe * oe > b;
      }
      P.event(G).zoom("mouse", n(C(P.that.__zoom, P.mouse[0] = on(G, x), P.mouse[1]), P.extent, a));
    }
    function se(G) {
      H.on("mousemove.zoom mouseup.zoom", null), Wu(G.view, P.moved), Jr(G), P.event(G).end();
    }
  }
  function D(S, ...N) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, P = on(S.changedTouches ? S.changedTouches[0] : S, this), H = x.invert(P), L = x.k * (S.shiftKey ? 0.5 : 2), I = n(C(h(x, L), P, H), t.apply(this, N), a);
      Jr(S), s > 0 ? Gt(this).transition().duration(s).call(_, I, P, S) : Gt(this).call(k.transform, I, P, S);
    }
  }
  function A(S, ...N) {
    if (e.apply(this, arguments)) {
      var x = S.touches, P = x.length, H = M(this, N, S.changedTouches.length === P).event(S), L, I, Y, j;
      for (sa(S), I = 0; I < P; ++I)
        Y = x[I], j = on(Y, this), j = [j, this.__zoom.invert(j), Y.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== j[2] && (H.touch1 = j, H.taps = 0) : (H.touch0 = j, L = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (H.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), ei(this), H.start());
    }
  }
  function T(S, ...N) {
    if (this.__zooming) {
      var x = M(this, N).event(S), P = S.changedTouches, H = P.length, L, I, Y, j;
      for (Jr(S), L = 0; L < H; ++L)
        I = P[L], Y = on(I, this), x.touch0 && x.touch0[2] === I.identifier ? x.touch0[0] = Y : x.touch1 && x.touch1[2] === I.identifier && (x.touch1[0] = Y);
      if (I = x.that.__zoom, x.touch1) {
        var se = x.touch0[0], G = x.touch0[1], X = x.touch1[0], oe = x.touch1[1], ve = (ve = X[0] - se[0]) * ve + (ve = X[1] - se[1]) * ve, pe = (pe = oe[0] - G[0]) * pe + (pe = oe[1] - G[1]) * pe;
        I = h(I, Math.sqrt(ve / pe)), Y = [(se[0] + X[0]) / 2, (se[1] + X[1]) / 2], j = [(G[0] + oe[0]) / 2, (G[1] + oe[1]) / 2];
      } else if (x.touch0) Y = x.touch0[0], j = x.touch0[1];
      else return;
      x.zoom("touch", n(C(I, Y, j), x.extent, a));
    }
  }
  function R(S, ...N) {
    if (this.__zooming) {
      var x = M(this, N).event(S), P = S.changedTouches, H = P.length, L, I;
      for (sa(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), L = 0; L < H; ++L)
        I = P[L], x.touch0 && x.touch0[2] === I.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === I.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (I = on(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < $)) {
        var Y = Gt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Xo(+S), k) : r;
  }, k.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Xo(!!S), k) : e;
  }, k.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Xo(!!S), k) : o;
  }, k.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Xo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), k) : t;
  }, k.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], k) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, k.constrain = function(S) {
    return arguments.length ? (n = S, k) : n;
  }, k.duration = function(S) {
    return arguments.length ? (s = +S, k) : s;
  }, k.interpolate = function(S) {
    return arguments.length ? (l = S, k) : l;
  }, k.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? k : S;
  }, k.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, k) : Math.sqrt(b);
  }, k.tapDistance = function(S) {
    return arguments.length ? ($ = +S, k) : $;
  }, k;
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
const Na = {
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
var ke;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ke || (ke = {}));
const gl = {
  [ke.Left]: ke.Right,
  [ke.Right]: ke.Left,
  [ke.Top]: ke.Bottom,
  [ke.Bottom]: ke.Top
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
function hl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Hp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Np = (e) => "id" in e && "source" in e && "target" in e, Vp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Mo = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
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
    return Ki(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Wi(n);
}, Ho = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = wi(r);
      n = Ki(n, o);
    }
  }), Wi(n);
}, lc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...No(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = bo(s, Dr(u)), $ = (v ?? 0) * (w ?? 0), k = i && b > 0;
    (!u.internals.handleBounds || k || b >= $ || u.dragging) && l.push(u);
  }
  return l;
}, Va = (e, t) => {
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
  const s = Ho(e), l = hs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
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
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Va(a, l);
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
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return dr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const yl = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, dc = (e, t, n = 15, r = 40) => {
  const o = yl(e.x, r, t.width - r) * n, i = yl(e.y, r, t.height - r) * n;
  return [o, i];
}, Ki = (e, t) => ({
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
}), Dr = (e, t = [0, 0]) => {
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
}, fc = (e, t) => Wi(Ki(za(e), za(t))), bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Lp = (e, t) => {
}, gs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? gs(s, a) : s;
}, vc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), hs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Lr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, bi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Or(e) {
  return e !== void 0 && e !== "parent";
}
function tr(e) {
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
function Dp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function la(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = zn(e), s = No({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gs(s, t) : s;
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
const hc = (e) => "clientX" in e, zn = (e, t) => {
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
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function xl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ke.Left:
      return [t - jo(t - r, i), n];
    case ke.Right:
      return [t + jo(r - t, i), n];
    case ke.Top:
      return [t, n - jo(n - o, i)];
    case ke.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function pc({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, curvature: a = 0.25 }) {
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
function Rp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Bp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ki(wi(e), wi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return bo(a, Wi(i)) > 0;
}
const Yp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Kp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Wp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Np(e) ? n = { ...e } : n = {
    ...e,
    id: Yp(e)
  }, Kp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
  [ke.Left]: { x: -1, y: 0 },
  [ke.Right]: { x: 1, y: 0 },
  [ke.Top]: { x: 0, y: -1 },
  [ke.Bottom]: { x: 0, y: 1 }
}, Xp = ({ source: e, sourcePosition: t = ke.Bottom, target: n }) => t === ke.Left || t === ke.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Cl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function jp({ source: e, sourcePosition: t = ke.Bottom, target: n, targetPosition: r = ke.Top, center: o, offset: i }) {
  const a = $l[t], s = $l[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Xp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], w, b;
  const $ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [h, C, y, _] = mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? h, b = o.y ?? C;
    const M = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? M : E : v = d === "x" ? E : M;
  } else {
    const M = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? E : M : v = a.y === f ? M : E, t === r) {
      const T = Math.abs(e[d] - n[d]);
      if (T <= i) {
        const R = Math.min(i - 1, i - T);
        a[d] === f ? $[d] = (l[d] > e[d] ? -1 : 1) * R : k[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const T = d === "x" ? "y" : "x", R = a[d] === s[T], S = l[T] > u[T], N = l[T] < u[T];
      (a[d] === 1 && (!R && S || R && N) || a[d] !== 1 && (!R && N || R && S)) && (v = d === "x" ? M : E);
    }
    const z = { x: l.x + $.x, y: l.y + $.y }, V = { x: u.x + k.x, y: u.y + k.y }, D = Math.max(Math.abs(z.x - v[0].x), Math.abs(V.x - v[0].x)), A = Math.max(Math.abs(z.y - v[0].y), Math.abs(V.y - v[0].y));
    D >= A ? (w = (z.x + V.x) / 2, b = v[0].y) : (w = v[0].x, b = (z.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...v,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], w, b, y, _];
}
function qp(e, t, n, r) {
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
function xi({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = jp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, $, k) => {
    let h = "";
    return k > 0 && k < c.length - 1 ? h = qp(c[k - 1], $, c[k + 1], a) : h = `${k === 0 ? "M" : "L"}${$.x} ${$.y}`, b += h, b;
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
    return (t = e.onError) == null || t.call(e, "008", Tr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || ke.Bottom, u = (s == null ? void 0 : s.position) || ke.Top, c = xo(n, a, l), d = xo(r, s, u);
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
function xo(e, t, n = ke.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ke.Top:
      return { x: o + a / 2, y: i };
    case ke.Right:
      return { x: o + a, y: i + s / 2 };
    case ke.Bottom:
      return { x: o + a / 2, y: i + s };
    case ke.Left:
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
    case ke.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case ke.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case ke.Left:
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
      const i = Mo(o, r.nodeOrigin), a = Or(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, tr(o));
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
      const d = Mo(u, a.nodeOrigin), f = Or(u.extent) ? u.extent : a.nodeExtent, v = dr(d, f, tr(u));
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
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Mo(e, n), u = Or(e.extent) ? dr(l, e.extent, s) : l;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Dr(l), c = fc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = tr(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, $ = Math.max(f.width, Math.round(s.width)), k = Math.max(f.height, Math.round(s.height)), h = ($ - f.width) * v[0], C = (k - f.height) * v[1];
    (w > 0 || b > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + h,
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
        width: $ + (w ? v[0] * w - h : 0),
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
      const $ = f.nodeElement.getBoundingClientRect(), k = Or(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = cc(h, w, t.get(v.parentId)) : k && (h = dr(h, k, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: bl("source", f.nodeElement, $, c, v.id),
            target: bl("target", f.nodeElement, $, c, v.id)
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
        rect: Dr(C, o)
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
  function w({ noDragClassName: $, handleSelector: k, domNode: h, isSelectable: C, nodeId: y, nodeClickDistance: _ = 0 }) {
    f = Gt(h);
    function M({ x: D, y: A }, T) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: N, snapToGrid: x, nodeOrigin: P, onNodeDrag: H, onSelectionDrag: L, onError: I, updateNodePositions: Y } = t();
      i = { x: D, y: A };
      let j = !1, se = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const G = Ho(s);
        se = za(G);
      }
      for (const [G, X] of s) {
        if (!R.has(G))
          continue;
        let oe = { x: D - X.distance.x, y: A - X.distance.y };
        x && (oe = gs(oe, N));
        let ve = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !X.extent) {
          const { positionAbsolute: Ne } = X.internals, ie = Ne.x - se.x + S[0][0], ee = Ne.x + X.measured.width - se.x2 + S[1][0], Ve = Ne.y - se.y + S[0][1], Me = Ne.y + X.measured.height - se.y2 + S[1][1];
          ve = [
            [ie, Ve],
            [ee, Me]
          ];
        }
        const { position: pe, positionAbsolute: ue } = Tp({
          nodeId: G,
          nextPosition: oe,
          nodeLookup: R,
          nodeExtent: ve,
          nodeOrigin: P,
          onError: I
        });
        j = j || X.position.x !== pe.x || X.position.y !== pe.y, X.position = pe, X.internals.positionAbsolute = ue;
      }
      if (j && (Y(s, !0), T && (r || H || !y && L))) {
        const [G, X] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(T, s, G, X), H == null || H(T, G, X), y || L == null || L(T, X);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: D, panBy: A, autoPanSpeed: T, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, N] = dc(u, c, T);
      (S !== 0 || N !== 0) && (i.x = (i.x ?? 0) - S / D[2], i.y = (i.y ?? 0) - N / D[2], await A({ x: S, y: N }) && M(i, null)), a = requestAnimationFrame(E);
    }
    function z(D) {
      var A;
      const { nodeLookup: T, multiSelectionActive: R, nodesDraggable: S, transform: N, snapGrid: x, snapToGrid: P, selectNodesOnDrag: H, onNodeDragStart: L, onSelectionDragStart: I, unselectNodesAndEdges: Y } = t();
      d = !0, (!H || !C) && !R && y && ((A = T.get(y)) != null && A.selected || Y()), C && H && y && (e == null || e(y));
      const j = la(D.sourceEvent, { transform: N, snapGrid: x, snapToGrid: P, containerBounds: c });
      if (i = j, s = a0(T, S, j, y), s.size > 0 && (n || L || !y && I)) {
        const [se, G] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: T
        });
        n == null || n(D.sourceEvent, s, se, G), L == null || L(D.sourceEvent, se, G), y || I == null || I(D.sourceEvent, G);
      }
    }
    const V = Ig().clickDistance(_).on("start", (D) => {
      const { domNode: A, nodeDragThreshold: T, transform: R, snapGrid: S, snapToGrid: N } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, v = !1, T === 0 && z(D), i = la(D.sourceEvent, { transform: R, snapGrid: S, snapToGrid: N, containerBounds: c }), u = zn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: A, transform: T, snapGrid: R, snapToGrid: S, nodeDragThreshold: N, nodeLookup: x } = t(), P = la(D.sourceEvent, { transform: T, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !x.has(y)) && (v = !0), !v) {
        if (!l && A && d && (l = !0, E()), !d) {
          const H = P.xSnapped - (i.x ?? 0), L = P.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + L * L) > N && z(D);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && s && d && (u = zn(D.sourceEvent, c), M(P, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: A, updateNodePositions: T, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (T(s, !1), o || R || !y && S) {
          const [N, x] = ua({
            nodeId: y,
            dragItems: s,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, N, x), R == null || R(D.sourceEvent, N, x), y || S == null || S(D.sourceEvent, x);
        }
      }
    }).filter((D) => {
      const A = D.target;
      return !D.button && (!$ || !Pl(A, `.${$}`, h)) && (!k || Pl(A, k, h));
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
    bo(o, Dr(i)) > 0 && r.push(i);
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
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: $, isValidConnection: k = kc, onReconnectEnd: h, updateConnection: C, getTransform: y, getFromHandle: _, autoPanSpeed: M }) {
  const E = Op(e.target);
  let z = 0, V;
  const { x: D, y: A } = zn(e), T = E == null ? void 0 : E.elementFromPoint(D, A), R = Cc(i, T), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !R)
    return;
  const N = $c(o, R, r, l, t);
  if (!N)
    return;
  let x = zn(e, S), P = !1, H = null, L = !1, I = null;
  function Y() {
    if (!c || !S)
      return;
    const [pe, ue] = dc(x, S, M);
    f({ x: pe, y: ue }), z = requestAnimationFrame(Y);
  }
  const j = {
    ...N,
    nodeId: o,
    type: R,
    position: N.position
  }, se = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: xo(se, j, ke.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: se,
    to: x,
    toHandle: null,
    toPosition: gl[j.position],
    toNode: null
  };
  C(G);
  let X = G;
  w == null || w(e, { nodeId: o, handleId: r, handleType: R });
  function oe(pe) {
    if (!_() || !j) {
      ve(pe);
      return;
    }
    const ue = y();
    x = zn(pe, S), V = c0(No(x, ue, !1, [1, 1]), n, l, j), P || (Y(), P = !0);
    const Ne = _c(pe, {
      handle: V,
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
    I = Ne.handleDomNode, H = Ne.connection, L = d0(!!V, Ne.isValid);
    const ie = {
      // from stays the same
      ...X,
      isValid: L,
      to: V && L ? vc({ x: V.x, y: V.y }, ue) : x,
      toHandle: Ne.toHandle,
      toPosition: L && Ne.toHandle ? Ne.toHandle.position : gl[j.position],
      toNode: Ne.toHandle ? l.get(Ne.toHandle.nodeId) : null
    };
    L && V && X.toHandle && ie.toHandle && X.toHandle.type === ie.toHandle.type && X.toHandle.nodeId === ie.toHandle.nodeId && X.toHandle.id === ie.toHandle.id && X.to.x === ie.to.x && X.to.y === ie.to.y || (C(ie), X = ie);
  }
  function ve(pe) {
    (V || I) && H && L && (b == null || b(H));
    const { inProgress: ue, ...Ne } = X, ie = {
      ...Ne,
      toPosition: X.toHandle ? X.toPosition : null
    };
    $ == null || $(pe, ie), i && (h == null || h(pe, ie)), v(), cancelAnimationFrame(z), P = !1, L = !1, H = null, I = null, E.removeEventListener("mousemove", oe), E.removeEventListener("mouseup", ve), E.removeEventListener("touchmove", oe), E.removeEventListener("touchend", ve);
  }
  E.addEventListener("mousemove", oe), E.addEventListener("mouseup", ve), E.addEventListener("touchmove", oe), E.addEventListener("touchend", ve);
}
function _c(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = kc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = zn(e), b = a.elementFromPoint(v, w), $ = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, k = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const h = Cc(void 0, $), C = $.getAttribute("data-nodeid"), y = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), M = $.classList.contains("connectableend");
    if (!C || !h)
      return k;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    k.connection = E;
    const z = _ && M && (n === cr.Strict ? d && h === "source" || !d && h === "target" : C !== r || y !== o);
    k.isValid = z && u(E), k.toHandle = $c(C, h, y, c, n, !1);
  }
  return k;
}
const v0 = {
  onPointerDown: f0,
  isValid: _c
};
function g0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Gt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, M = y[2] * Math.pow(2, _);
      t.scaleTo(M);
    };
    let b = [0, 0];
    const $ = (C) => {
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
      ], M = [_[0] - b[0], _[1] - b[1]];
      b = _;
      const E = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), z = {
        x: y[0] - M[0] * E,
        y: y[1] - M[1] * E
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: y[2]
      }, V, s);
    }, h = sc().on("start", $).on("zoom", d ? k : null).on("zoom.wheel", f ? w : null);
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
const h0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Xi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ca = ({ x: e, y: t, zoom: n }) => Yi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Sc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), da = (e, t = 0, n = () => {
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
      const $ = on(c), k = Ec(c), h = d * Math.pow(2, k);
      r.scaleTo(n, h, $, c);
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
    const b = Xi(n.property("__zoom"));
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
    const s = Xi(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Sc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Xi(i.transform)));
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Sc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && h0(e.prevViewport, a.transform))) {
      const l = Xi(a.transform);
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
  }, d = e.getBoundingClientRect(), f = sc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = Gt(e).call(f);
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
  function $(T, R) {
    return v ? new Promise((S) => {
      f == null || f.transform(da(v, R == null ? void 0 : R.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: T, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: N, panOnScroll: x, panOnDrag: P, panOnScrollMode: H, panOnScrollSpeed: L, preventScrolling: I, zoomOnPinch: Y, zoomOnScroll: j, zoomOnDoubleClick: se, zoomActivationKeyPressed: G, lib: X, onTransformChange: oe }) {
    N && !c.isZoomingOrPanning && h();
    const ve = x && !G && !N ? p0({
      zoomPanValues: c,
      noWheelClassName: T,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: H,
      panOnScrollSpeed: L,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: T,
      preventScrolling: I,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", ve, { passive: !1 }), !N) {
      const ue = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ue);
      const Ne = w0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: oe
      });
      f.on("zoom", Ne);
      const ie = b0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: x,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const pe = x0({
      zoomActivationKeyPressed: G,
      panOnDrag: P,
      zoomOnScroll: j,
      panOnScroll: x,
      zoomOnDoubleClick: se,
      zoomOnPinch: Y,
      userSelectionActive: N,
      noPanClassName: R,
      noWheelClassName: T,
      lib: X
    });
    f.filter(pe), se ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(T, R, S) {
    const N = ca(T), x = f == null ? void 0 : f.constrain()(N, R, S);
    return x && await $(x), new Promise((P) => P(x));
  }
  async function y(T, R) {
    const S = ca(T);
    return await $(S, R), new Promise((N) => N(S));
  }
  function _(T) {
    if (v) {
      const R = ca(T), S = v.property("__zoom");
      (S.k !== T.zoom || S.x !== T.x || S.y !== T.y) && (f == null || f.transform(v, R, null, { sync: !0 }));
    }
  }
  function M() {
    const T = v ? ac(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function E(T, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(da(v, R == null ? void 0 : R.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function z(T, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(da(v, R == null ? void 0 : R.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function V(T) {
    f == null || f.scaleExtent(T);
  }
  function D(T) {
    f == null || f.translateExtent(T);
  }
  function A(T) {
    const R = !Hn(T) || T < 0 ? 0 : T;
    f == null || f.clickDistance(R);
  }
  return {
    update: k,
    destroy: h,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: M,
    scaleTo: E,
    scaleBy: z,
    setScaleExtent: V,
    setTranslateExtent: D,
    syncViewport: _,
    setClickDistance: A
  };
}
var Ml;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ml || (Ml = {}));
var C0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(se, "$connectable", n), i = () => J(pe, "$connectionRadius", n), a = () => J(oe, "$domNode", n), s = () => J(ve, "$nodeLookup", n), l = () => J(X, "$connectionMode", n), u = () => J(ie, "$lib", n), c = () => J(We, "$autoPanOnConnect", n), d = () => J(ze, "$flowId", n), f = () => J(Ne, "$isValidConnectionStore", n), v = () => J(Ve, "$onedgecreate", n), w = () => J(ce, "$onConnectAction", n), b = () => J(Ce, "$onConnectStartAction", n), $ = () => J(Xe, "$onConnectEndAction", n), k = () => J(ue, "$viewport", n), h = () => J(st, "$connection", n), C = () => J(Ue, "$edges", n), y = () => J(le, "$connectionLookup", n), _ = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne(), D = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), T = /* @__PURE__ */ ne();
  let R = m(t, "id", 12, void 0), S = m(t, "type", 12, "source"), N = m(t, "position", 28, () => ke.Top), x = m(t, "style", 12, void 0), P = m(t, "isValidConnection", 12, void 0), H = m(t, "onconnect", 12, void 0), L = m(t, "ondisconnect", 12, void 0), I = m(t, "isConnectable", 12, void 0), Y = m(t, "class", 12, void 0);
  const j = sr("svelteflow__node_id"), se = sr("svelteflow__node_connectable"), G = Fe(), {
    connectionMode: X,
    domNode: oe,
    nodeLookup: ve,
    connectionRadius: pe,
    viewport: ue,
    isValidConnection: Ne,
    lib: ie,
    addEdge: ee,
    onedgecreate: Ve,
    panBy: Me,
    cancelConnection: Be,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: le,
    onconnect: ce,
    onconnectstart: Ce,
    onconnectend: Xe,
    flowId: ze,
    connection: st
  } = G;
  function it(Ee) {
    const nt = hc(Ee);
    (nt && Ee.button === 0 || !nt) && v0.onPointerDown(Ee, {
      handleId: g(E),
      nodeId: j,
      isTarget: g(_),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: P() ?? f(),
      updateConnection: te,
      cancelConnection: Be,
      panBy: Me,
      onConnect: (Ie) => {
        var Le;
        const rt = v() ? v()(Ie) : Ie;
        rt && (ee(rt), (Le = w()) == null || Le(Ie));
      },
      onConnectStart: (Ie, Le) => {
        var rt;
        (rt = b()) == null || rt(Ie, {
          nodeId: Le.nodeId,
          handleId: Le.handleId,
          handleType: Le.handleType
        });
      },
      onConnectEnd: (Ie, Le) => {
        var rt;
        (rt = $()) == null || rt(Ie, Le);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let Q = /* @__PURE__ */ ne(null), Ae = /* @__PURE__ */ ne();
  ge(() => U(S()), () => {
    F(_, S() === "target");
  }), ge(
    () => (U(I()), o()),
    () => {
      F(M, I() !== void 0 ? I() : o());
    }
  ), ge(() => U(R()), () => {
    F(E, R() || null);
  }), ge(
    () => (U(H()), U(L()), C(), y(), U(S()), U(R())),
    () => {
      (H() || L()) && (C(), F(Ae, y().get(`${j}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), ge(
    () => (g(Q), g(Ae), U(L()), U(H())),
    () => {
      if (g(Q) && !Mp(g(Ae), g(Q))) {
        const Ee = g(Ae) ?? /* @__PURE__ */ new Map();
        hl(g(Q), Ee, L()), hl(Ee, g(Q), H());
      }
      F(Q, g(Ae) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => h(), () => {
    F(z, !!h().fromHandle);
  }), ge(
    () => (h(), U(S()), g(E)),
    () => {
      var Ee, nt, Ie;
      F(V, ((Ee = h().fromHandle) == null ? void 0 : Ee.nodeId) === j && ((nt = h().fromHandle) == null ? void 0 : nt.type) === S() && ((Ie = h().fromHandle) == null ? void 0 : Ie.id) === g(E));
    }
  ), ge(
    () => (h(), U(S()), g(E)),
    () => {
      var Ee, nt, Ie;
      F(D, ((Ee = h().toHandle) == null ? void 0 : Ee.nodeId) === j && ((nt = h().toHandle) == null ? void 0 : nt.type) === S() && ((Ie = h().toHandle) == null ? void 0 : Ie.id) === g(E));
    }
  ), ge(
    () => (l(), h(), U(S()), g(E)),
    () => {
      var Ee, nt, Ie;
      F(A, l() === cr.Strict ? ((Ee = h().fromHandle) == null ? void 0 : Ee.type) !== S() : j !== ((nt = h().fromHandle) == null ? void 0 : nt.nodeId) || g(E) !== ((Ie = h().fromHandle) == null ? void 0 : Ie.id));
    }
  ), ge(() => (g(D), h()), () => {
    F(T, g(D) && h().isValid);
  }), vt(), Te();
  var he = C0();
  ye(he, "data-nodeid", j);
  let en;
  var tn = W(he);
  pt(tn, t, "default", {}), K(he), _e(
    (Ee, nt) => {
      ye(he, "data-handleid", g(E)), ye(he, "data-handlepos", N()), ye(he, "data-id", `${d() ?? ""}-${j ?? ""}-${R() || ""}-${S() ?? ""}`), en = mt(he, 1, Ee, null, en, nt), dt(he, x());
    },
    [
      () => fn(St([
        "svelte-flow__handle",
        `svelte-flow__handle-${N()}`,
        "nodrag",
        "nopan",
        N(),
        Y()
      ])),
      () => ({
        valid: g(T),
        connectingto: g(D),
        connectingfrom: g(V),
        source: !g(_),
        target: g(_),
        connectablestart: g(M),
        connectableend: g(M),
        connectable: g(M),
        connectionindicator: g(M) && (!g(z) || g(A))
      })
    ],
    me
  ), Ye("mousedown", he, it), Ye("touchstart", he, it), O(e, he);
  var hn = fe({
    get id() {
      return R();
    },
    set id(Ee) {
      R(Ee), p();
    },
    get type() {
      return S();
    },
    set type(Ee) {
      S(Ee), p();
    },
    get position() {
      return N();
    },
    set position(Ee) {
      N(Ee), p();
    },
    get style() {
      return x();
    },
    set style(Ee) {
      x(Ee), p();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Ee) {
      P(Ee), p();
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
      return I();
    },
    set isConnectable(Ee) {
      I(Ee), p();
    },
    get class() {
      return Y();
    },
    set class(Ee) {
      Y(Ee), p();
    }
  });
  return r(), hn;
}
ae(
  Jn,
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
var k0 = /* @__PURE__ */ re("<!> <!>", 1);
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
  var a = k0(), s = be(a);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Top);
  Jn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ me(() => i() ?? ke.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), _e(() => {
    var f;
    return Bt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), O(e, a), fe({
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
ae(
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
var _0 = /* @__PURE__ */ re(" <!>", 1);
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
  Te(), He();
  var i = _0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Bottom);
  return Jn(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), _e(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
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
ae(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
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
  Te(), He();
  var i = S0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Top);
  return Jn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), _e(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
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
ae(Mc, { data: {}, targetPosition: {} }, [], [], !0);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ae(Hc, {}, [], [], !0);
function Hl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ci(e, { target: t, domNode: n }) {
  return Hl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Hl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var E0 = /* @__PURE__ */ re("<div><!></div>");
function Nc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(i, "$domNode", n), { domNode: i } = Fe();
  Te();
  var a = E0(), s = W(a);
  pt(s, t, "default", {}), K(a), ht(a, (l, u) => Ci == null ? void 0 : Ci(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, a), fe(), r();
}
ae(Nc, {}, ["default"], [], !0);
function Vc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Fe();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Tr.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var P0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function zc(e, t) {
  de(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = Vc(), a = sr("svelteflow__edge_id");
  return Te(), Nc(e, {
    children: (s, l) => {
      var u = P0();
      let c;
      var d = W(u);
      pt(d, t, "default", {}), K(u), _e(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ye("keyup", u, () => {
      }), Ye("click", u, () => {
        a && i(a);
      }), O(s, u);
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
ae(zc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var M0 = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), H0 = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function Vo(e, t) {
  de(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Te();
  var w = H0(), b = be(w), $ = Z(b);
  {
    var k = (y) => {
      var _ = M0();
      ye(_, "stroke-opacity", 0), ye(_, "stroke-width", v), _e(() => ye(_, "d", r())), O(y, _);
    };
    xe($, (y) => {
      v && y(k);
    });
  }
  var h = Z($);
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
        children: (_, M) => {
          He();
          var E = Re();
          _e(() => Bt(E, o())), O(_, E);
        },
        $$slots: { default: !0 }
      });
    };
    xe(h, (y) => {
      o() && y(C);
    });
  }
  return _e(
    (y) => {
      ye(b, "id", n()), ye(b, "d", r()), mt(b, 0, y), ye(b, "marker-start", l()), ye(b, "marker-end", u()), dt(b, c());
    },
    [
      () => fn(St(["svelte-flow__edge-path", f()]))
    ],
    me
  ), O(e, w), fe({
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
ae(
  Vo,
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(f()), U(v()), U(b()), U($()), U(w()), U(k())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(pc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: k()
      }));
    }
  ), vt(), Te(), Vo(e, {
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
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(h) {
      k(h), p();
    }
  });
}
ae(
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
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(f()), U(v()), U(b()), U($()), U(w()), U(k())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: k()
      }));
    }
  ), vt(), Te(), Vo(e, {
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
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(h) {
      k(h), p();
    }
  });
}
ae(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return ge(
    () => (g(r), g(o), g(i), U(f()), U(v()), U(w()), U(b())),
    () => {
      (($) => (F(r, $[0]), F(o, $[1]), F(i, $[2])))(Ta({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), vt(), Te(), Vo(e, {
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
    set label($) {
      a($), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle($) {
      s($), p();
    },
    get style() {
      return l();
    },
    set style($) {
      l($), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart($) {
      u($), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX($) {
      f($), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY($) {
      v($), p();
    },
    get targetX() {
      return w();
    },
    set targetX($) {
      w($), p();
    },
    get targetY() {
      return b();
    },
    set targetY($) {
      b($), p();
    }
  });
}
ae(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(f()), U(v()), U(b()), U($()), U(w()), U(k())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), vt(), Te(), Vo(e, {
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
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(h) {
      k(h), p();
    }
  });
}
ae(
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
function N0(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function V0(e, t) {
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
  input: Pc,
  output: Mc,
  default: $i,
  group: Hc
}, Ac = {
  straight: Lc,
  smoothstep: Tc,
  default: ki,
  step: Dc
}, D0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? mi;
  yc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), bc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Ho(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = hs(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: T0(e, s, l, d, f),
    nodeLookup: jt(s),
    parentLookup: jt(l),
    edgeLookup: jt(c),
    visibleNodes: jt([]),
    edges: L0(t, u, c),
    visibleEdges: jt([]),
    connectionLookup: jt(u),
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
    connection: jt(Na),
    connectionLineType: we(_r.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: jt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: jt("svelte"),
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
    initialized: jt(!1)
  };
};
function O0(e) {
  const t = jn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Bp({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return jn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
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
      zIndex: Rp({
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
  return jn([
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
const ji = Symbol();
function Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = D0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(x) {
    s.nodeTypes.set({
      ...Oc,
      ...x
    });
  }
  function u(x) {
    s.edgeTypes.set({
      ...Ac,
      ...x
    });
  }
  function c(x) {
    const P = q(s.edges);
    s.edges.set(Wp(x, P));
  }
  const d = (x, P = !1) => {
    var H;
    const L = q(s.nodeLookup);
    for (const [I, Y] of x) {
      const j = (H = L.get(I)) == null ? void 0 : H.internals.userNode;
      j && (j.position = Y.position, j.dragging = P);
    }
    s.nodes.update((I) => I);
  };
  function f(x) {
    var P, H, L;
    const I = q(s.nodeLookup), Y = q(s.parentLookup), { changes: j, updatedInternals: se } = r0(x, I, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (se) {
      if (Qp(I, Y, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const G = q(s.fitViewOptions), X = w({
          ...G,
          nodes: G == null ? void 0 : G.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const G of j) {
        const X = (P = I.get(G.id)) == null ? void 0 : P.internals.userNode;
        if (X)
          switch (G.type) {
            case "dimensions": {
              const oe = { ...X.measured, ...G.dimensions };
              G.setAttributes && (X.width = ((H = G.dimensions) == null ? void 0 : H.width) ?? X.width, X.height = ((L = G.dimensions) == null ? void 0 : L.height) ?? X.height), X.measured = oe;
              break;
            }
            case "position":
              X.position = G.position ?? X.position;
              break;
          }
      }
      s.nodes.update((G) => G), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(x) {
    const P = q(s.panZoom), H = q(s.domNode);
    if (!P || !H)
      return Promise.resolve(!1);
    const { width: L, height: I } = ps(H), Y = pl(q(s.nodeLookup), x);
    return ml({
      nodes: Y,
      width: L,
      height: I,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, x);
  }
  function w(x) {
    const P = q(s.panZoom);
    if (!P)
      return !1;
    const H = pl(q(s.nodeLookup), x);
    return ml({
      nodes: H,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, x), H.size > 0;
  }
  function b(x, P) {
    const H = q(s.panZoom);
    return H ? H.scaleBy(x, P) : Promise.resolve(!1);
  }
  function $(x) {
    return b(1.2, x);
  }
  function k(x) {
    return b(1 / 1.2, x);
  }
  function h(x) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([x, q(s.maxZoom)]), s.minZoom.set(x));
  }
  function C(x) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([q(s.minZoom), x]), s.maxZoom.set(x));
  }
  function y(x) {
    const P = q(s.panZoom);
    P && (P.setTranslateExtent(x), s.translateExtent.set(x));
  }
  function _(x) {
    let P = !1;
    return x.forEach((H) => {
      H.selected && (H.selected = !1, P = !0);
    }), P;
  }
  function M(x) {
    var P;
    (P = q(s.panZoom)) == null || P.setClickDistance(x);
  }
  function E(x) {
    _((x == null ? void 0 : x.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), _((x == null ? void 0 : x.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (x) => {
    var P;
    if (x) {
      const H = q(s.nodes), L = q(s.edges), I = H.filter((G) => G.selected), Y = L.filter((G) => G.selected), { nodes: j, edges: se } = await uc({
        nodesToRemove: I,
        edgesToRemove: Y,
        nodes: H,
        edges: L,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || se.length) && (s.nodes.update((G) => G.filter((X) => !j.some((oe) => oe.id === X.id))), s.edges.update((G) => G.filter((X) => !se.some((oe) => oe.id === X.id))), (P = q(s.ondelete)) == null || P({
        nodes: j,
        edges: se
      }));
    }
  });
  function z(x) {
    const P = q(s.multiselectionKeyPressed);
    s.nodes.update((H) => H.map((L) => {
      const I = x.includes(L.id), Y = P && L.selected || I;
      return L.selected = Y, L;
    })), P || s.edges.update((H) => H.map((L) => (L.selected = !1, L)));
  }
  function V(x) {
    const P = q(s.multiselectionKeyPressed);
    s.edges.update((H) => H.map((L) => {
      const I = x.includes(L.id), Y = P && L.selected || I;
      return L.selected = Y, L;
    })), P || s.nodes.update((H) => H.map((L) => (L.selected = !1, L)));
  }
  function D(x) {
    var P;
    const H = (P = q(s.nodes)) == null ? void 0 : P.find((L) => L.id === x);
    if (!H) {
      console.warn("012", Tr.error012(x));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), H.selected ? H.selected && q(s.multiselectionKeyPressed) && E({ nodes: [H], edges: [] }) : z([x]);
  }
  function A(x) {
    const P = q(s.viewport);
    return o0({
      delta: x,
      panZoom: q(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const T = we(Na), R = (x) => {
    T.set({ ...x });
  };
  function S() {
    T.set(Na);
  }
  function N() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: O0(s),
    visibleNodes: A0(s),
    connection: jn([T, s.viewport], ([x, P]) => x.inProgress ? {
      ...x,
      to: No(x.to, [P.x, P.y, P.zoom])
    } : { ...x }),
    markers: jn([s.edges, s.defaultMarkerColor, s.flowId], ([x, P, H]) => Gp(x, { defaultColor: P, id: H })),
    initialized: (() => {
      let x = !1;
      const P = q(s.nodes).length, H = q(s.edges).length;
      return jn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([L, I, Y]) => x || (P === 0 ? x = Y : H === 0 ? x = Y && L : x = Y && L && I, x));
    })(),
    // actions
    syncNodeStores: (x) => N0(s.nodes, x),
    syncEdgeStores: (x) => V0(s.edges, x),
    syncViewport: (x) => z0(s.panZoom, s.viewport, x),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: $,
    zoomOut: k,
    fitView: (x) => v(x),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: M,
    unselectNodesAndEdges: E,
    addSelectedNodes: z,
    addSelectedEdges: V,
    handleNodeSelection: D,
    panBy: A,
    updateConnection: R,
    cancelConnection: S,
    reset: N
  };
}
function Fe() {
  const e = sr(ji);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function I0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Nr(ji, {
    getStore: () => s
  }), s;
}
function Nl(e, t) {
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
const R0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  de(t, !1), Qe(e, R0);
  const [n, r] = tt(), o = () => J(H, "$panActivationKeyPressed", n), i = () => J(R, "$minZoom", n), a = () => J(S, "$maxZoom", n), s = () => J(L, "$zoomActivationKeyPressed", n), l = () => J(T, "$selectionRect", n), u = () => J(x, "$translateExtent", n), c = () => J(P, "$lib", n), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), $ = m(t, "onMove", 12, void 0), k = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), _ = m(t, "zoomOnDoubleClick", 12), M = m(t, "zoomOnPinch", 12), E = m(t, "panOnDrag", 12), z = m(t, "panOnScroll", 12), V = m(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: A,
    selectionRect: T,
    minZoom: R,
    maxZoom: S,
    dragging: N,
    translateExtent: x,
    lib: P,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: L,
    viewportInitialized: I
  } = Fe(), Y = (X) => D.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  Wt(() => {
    ci(I, !0);
  }), ge(() => U(w()), () => {
    F(d, w() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), U(E())),
    () => {
      F(f, o() || E());
    }
  ), ge(
    () => (o(), U(z())),
    () => {
      F(v, o() || z());
    }
  ), vt(), Te();
  var j = Z0(), se = W(j);
  pt(se, t, "default", {}), K(j), ht(j, (X, oe) => Nl == null ? void 0 : Nl(X, oe), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: N,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: $(),
    onPanZoomEnd: k(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: M(),
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
    onTransformChange: Y
  })), O(e, j);
  var G = fe({
    get initialViewport() {
      return w();
    },
    set initialViewport(X) {
      w(X), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), p();
    },
    get onMove() {
      return $();
    },
    set onMove(X) {
      $(X), p();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(X) {
      k(X), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(X) {
      C(X), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(X) {
      y(X), p();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(X) {
      _(X), p();
    },
    get zoomOnPinch() {
      return M();
    },
    set zoomOnPinch(X) {
      M(X), p();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(X) {
      E(X), p();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(X) {
      z(X), p();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(X) {
      V(X), p();
    }
  });
  return r(), G;
}
ae(
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
function Vl(e, t) {
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
var B0 = /* @__PURE__ */ re("<div><!></div>");
const Y0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Rc(e, t) {
  de(t, !1), Qe(e, Y0);
  const [n, r] = tt(), o = () => J(S, "$panActivationKeyPressed", n), i = () => J(T, "$selectionKeyPressed", n), a = () => J(D, "$selectionRect", n), s = () => J(V, "$elementsSelectable", n), l = () => J(A, "$selectionRectMode", n), u = () => J(M, "$edges", n), c = () => J(_, "$nodeLookup", n), d = () => J(E, "$viewport", n), f = () => J(R, "$selectionMode", n), v = () => J(z, "$dragging", n), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne();
  let k = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const C = Ai(), {
    nodes: y,
    nodeLookup: _,
    edges: M,
    viewport: E,
    dragging: z,
    elementsSelectable: V,
    selectionRect: D,
    selectionRectMode: A,
    selectionKeyPressed: T,
    selectionMode: R,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: N
  } = Fe();
  let x = /* @__PURE__ */ ne(), P = null, H = [], L = !1;
  function I(ie) {
    if (L) {
      L = !1;
      return;
    }
    C("paneclick", { event: ie }), N(), A.set(null);
  }
  function Y(ie) {
    var ee, Ve;
    if (P = g(x).getBoundingClientRect(), !V || !g(b) || ie.button !== 0 || ie.target !== g(x) || !P)
      return;
    (Ve = (ee = ie.target) == null ? void 0 : ee.setPointerCapture) == null || Ve.call(ee, ie.pointerId);
    const { x: Me, y: Be } = zn(ie, P);
    N(), D.set({
      width: 0,
      height: 0,
      startX: Me,
      startY: Be,
      x: Me,
      y: Be
    });
  }
  function j(ie) {
    if (!g(b) || !P || !a())
      return;
    L = !0;
    const ee = zn(ie, P), Ve = a().startX ?? 0, Me = a().startY ?? 0, Be = {
      ...a(),
      x: ee.x < Ve ? ee.x : Ve,
      y: ee.y < Me ? ee.y : Me,
      width: Math.abs(ee.x - Ve),
      height: Math.abs(ee.y - Me)
    }, te = H.map((ce) => ce.id), We = Va(H, u()).map((ce) => ce.id);
    H = lc(
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
    const Ue = Va(H, u()).map((ce) => ce.id), le = H.map((ce) => ce.id);
    (te.length !== le.length || le.some((ce) => !te.includes(ce))) && y.update((ce) => ce.map(zl(le))), (We.length !== Ue.length || Ue.some((ce) => !We.includes(ce))) && M.update((ce) => ce.map(zl(Ue))), A.set("user"), D.set(Be);
  }
  function se(ie) {
    var ee, Ve;
    ie.button === 0 && ((Ve = (ee = ie.target) == null ? void 0 : ee.releasePointerCapture) == null || Ve.call(ee, ie.pointerId), !g(b) && l() === "user" && ie.target === g(x) && (I == null || I(ie)), D.set(null), H.length > 0 && ci(A, "nodes"), i() && (L = !1));
  }
  const G = (ie) => {
    var ee;
    if (Array.isArray(g(w)) && (ee = g(w)) != null && ee.includes(2)) {
      ie.preventDefault();
      return;
    }
    C("panecontextmenu", { event: ie });
  };
  ge(
    () => (o(), U(k())),
    () => {
      F(w, o() || k());
    }
  ), ge(
    () => (i(), a(), U(h()), g(w)),
    () => {
      F(b, i() || a() || h() && g(w) !== !0);
    }
  ), ge(
    () => (s(), g(b), l()),
    () => {
      F($, s() && (g(b) || l() === "user"));
    }
  ), vt(), Te();
  var X = B0(), oe = /* @__PURE__ */ Pe(() => g($) ? void 0 : Vl(I, g(x))), ve = /* @__PURE__ */ Pe(() => Vl(G, g(x)));
  let pe;
  var ue = W(X);
  pt(ue, t, "default", {}), K(X), Cn(X, (ie) => F(x, ie), () => g(x)), _e(
    (ie) => pe = mt(X, 1, "svelte-flow__pane svelte-1esy7hx", null, pe, ie),
    [
      () => ({
        draggable: k() === !0 || Array.isArray(k()) && k().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    me
  ), Ye("click", X, function(...ie) {
    var ee;
    (ee = g(oe)) == null || ee.apply(this, ie);
  }), Ye("pointerdown", X, function(...ie) {
    var ee;
    (ee = g($) ? Y : void 0) == null || ee.apply(this, ie);
  }), Ye("pointermove", X, function(...ie) {
    var ee;
    (ee = g($) ? j : void 0) == null || ee.apply(this, ie);
  }), Ye("pointerup", X, function(...ie) {
    var ee;
    (ee = g($) ? se : void 0) == null || ee.apply(this, ie);
  }), Ye("contextmenu", X, function(...ie) {
    var ee;
    (ee = g(ve)) == null || ee.apply(this, ie);
  }), O(e, X);
  var Ne = fe({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(ie) {
      k(ie), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ie) {
      h(ie), p();
    }
  });
  return r(), Ne;
}
ae(Rc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var K0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Bc(e, t) {
  de(t, !1), Qe(e, W0);
  const [n, r] = tt(), o = () => J(i, "$viewport", n), { viewport: i } = Fe();
  Te();
  var a = K0(), s = W(a);
  pt(s, t, "default", {}), K(a), _e(() => dt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, a), fe(), r();
}
ae(Bc, {}, ["default"], [], !0);
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
function X0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var j0 = /* @__PURE__ */ re("<div><!></div>");
function Yc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(ve, "$nodeTypes", n), i = () => J(ee, "$elementsSelectable", n), a = () => J(Ve, "$nodesDraggable", n), s = () => J(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), $ = m(t, "draggable", 13, void 0), k = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), _ = m(t, "dragging", 13, !1), M = m(t, "resizeObserver", 13, null), E = m(t, "style", 13, void 0), z = m(t, "type", 13, "default"), V = m(t, "isParent", 13, !1), D = m(t, "positionX", 13), A = m(t, "positionY", 13), T = m(t, "sourcePosition", 13, void 0), R = m(t, "targetPosition", 13, void 0), S = m(t, "zIndex", 13), N = m(t, "measuredWidth", 13, void 0), x = m(t, "measuredHeight", 13, void 0), P = m(t, "initialWidth", 13, void 0), H = m(t, "initialHeight", 13, void 0), L = m(t, "width", 13, void 0), I = m(t, "height", 13, void 0), Y = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), se = m(t, "parentId", 13, void 0), G = m(t, "nodeClickDistance", 13, void 0), X = m(t, "class", 13, "");
  const oe = Fe(), {
    nodeTypes: ve,
    nodeDragThreshold: pe,
    selectNodesOnDrag: ue,
    handleNodeSelection: Ne,
    updateNodeInternals: ie,
    elementsSelectable: ee,
    nodesDraggable: Ve
  } = oe;
  let Me = /* @__PURE__ */ ne(void 0, !0), Be = /* @__PURE__ */ ne(null, !0);
  const te = Ai(), We = we(h());
  let Ue = /* @__PURE__ */ ne(void 0, !0), le = /* @__PURE__ */ ne(void 0, !0), ce = /* @__PURE__ */ ne(void 0, !0);
  Nr("svelteflow__node_id", v()), Nr("svelteflow__node_connectable", We), is(() => {
    var Q;
    g(Be) && ((Q = M()) == null || Q.unobserve(g(Be)));
  });
  function Ce(Q) {
    k() && (!q(ue) || !$() || q(pe) > 0) && Ne(v()), te("nodeclick", { node: f().internals.userNode, event: Q });
  }
  ge(() => U(z()), () => {
    F(l, z() || "default");
  }), ge(() => (o(), g(l)), () => {
    F(u, !!o()[g(l)]);
  }), ge(
    () => (o(), g(l), $i),
    () => {
      F(c, o()[g(l)] || $i);
    }
  ), ge(
    () => (g(u), U(z())),
    () => {
      g(u) || console.warn("003", Tr.error003(z()));
    }
  ), ge(
    () => (U(L()), U(I()), U(P()), U(H()), U(N()), U(x())),
    () => {
      F(d, X0({
        width: L(),
        height: I(),
        initialWidth: P(),
        initialHeight: H(),
        measuredWidth: N(),
        measuredHeight: x()
      }));
    }
  ), ge(() => U(h()), () => {
    We.set(!!h());
  }), ge(
    () => (g(Ue), g(l), g(le), U(T()), g(ce), U(R()), U(v()), g(Me)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(le) && T() !== g(le) || g(ce) && R() !== g(ce)) && requestAnimationFrame(() => ie(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Me),
            force: !0
          }
        ]
      ]))), F(Ue, g(l)), F(le, T()), F(ce, R());
    }
  ), ge(
    () => (U(M()), g(Me), g(Be), U(j())),
    () => {
      M() && (g(Me) !== g(Be) || !j()) && (g(Be) && M().unobserve(g(Be)), g(Me) && M().observe(g(Me)), F(Be, g(Me)));
    }
  ), vt(), Te(!0);
  var Xe = et(), ze = be(Xe);
  {
    var st = (Q) => {
      var Ae = j0();
      let he, en;
      var tn = W(Ae);
      const hn = /* @__PURE__ */ me(() => b() ?? !1), Ee = /* @__PURE__ */ me(() => k() ?? i() ?? !0), nt = /* @__PURE__ */ me(() => C() ?? !0), Ie = /* @__PURE__ */ me(() => $() ?? a() ?? !0);
      _u(tn, () => g(c), (Le, rt) => {
        rt(Le, {
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
            return g(Ee);
          },
          get deletable() {
            return g(nt);
          },
          get sourcePosition() {
            return T();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return g(Ie);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return se();
          },
          get type() {
            return g(l);
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
            return L();
          },
          get height() {
            return I();
          }
        });
      }), K(Ae), ht(Ae, (Le, rt) => _i == null ? void 0 : _i(Le, rt), () => ({
        nodeId: v(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Ne,
        onDrag: (Le, rt, nn, Xt) => {
          te("nodedrag", { event: Le, targetNode: nn, nodes: Xt });
        },
        onDragStart: (Le, rt, nn, Xt) => {
          te("nodedragstart", { event: Le, targetNode: nn, nodes: Xt });
        },
        onDragStop: (Le, rt, nn, Xt) => {
          te("nodedragstop", { event: Le, targetNode: nn, nodes: Xt });
        },
        store: oe
      })), Cn(Ae, (Le) => F(Me, Le), () => g(Me)), At(() => Ye("click", Ae, Ce)), At(() => Ye("mouseenter", Ae, (Le) => te("nodemouseenter", { node: f(), event: Le }))), At(() => Ye("mouseleave", Ae, (Le) => te("nodemouseleave", { node: f(), event: Le }))), At(() => Ye("mousemove", Ae, (Le) => te("nodemousemove", { node: f(), event: Le }))), At(() => Ye("contextmenu", Ae, (Le) => te("nodecontextmenu", { node: f(), event: Le }))), _e(
        (Le, rt) => {
          ye(Ae, "data-id", v()), he = mt(Ae, 1, Le, null, he, rt), en = dt(Ae, `${E() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, en, {
            "z-index": S(),
            transform: `translate(${D() ?? ""}px, ${A() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => fn(St([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])),
          () => ({
            dragging: _(),
            selected: b(),
            draggable: $(),
            connectable: h(),
            selectable: k(),
            nopan: $(),
            parent: V()
          })
        ],
        me
      ), O(Q, Ae);
    };
    xe(ze, (Q) => {
      y() || Q(st);
    });
  }
  O(e, Xe);
  var it = fe({
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
      return $();
    },
    set draggable(Q) {
      $(Q), p();
    },
    get selectable() {
      return k();
    },
    set selectable(Q) {
      k(Q), p();
    },
    get connectable() {
      return h();
    },
    set connectable(Q) {
      h(Q), p();
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
      return M();
    },
    set resizeObserver(Q) {
      M(Q), p();
    },
    get style() {
      return E();
    },
    set style(Q) {
      E(Q), p();
    },
    get type() {
      return z();
    },
    set type(Q) {
      z(Q), p();
    },
    get isParent() {
      return V();
    },
    set isParent(Q) {
      V(Q), p();
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
      return R();
    },
    set targetPosition(Q) {
      R(Q), p();
    },
    get zIndex() {
      return S();
    },
    set zIndex(Q) {
      S(Q), p();
    },
    get measuredWidth() {
      return N();
    },
    set measuredWidth(Q) {
      N(Q), p();
    },
    get measuredHeight() {
      return x();
    },
    set measuredHeight(Q) {
      x(Q), p();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(Q) {
      P(Q), p();
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
      return I();
    },
    set height(Q) {
      I(Q), p();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(Q) {
      Y(Q), p();
    },
    get initialized() {
      return j();
    },
    set initialized(Q) {
      j(Q), p();
    },
    get parentId() {
      return se();
    },
    set parentId(Q) {
      se(Q), p();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(Q) {
      G(Q), p();
    },
    get class() {
      return X();
    },
    set class(Q) {
      X(Q), p();
    }
  });
  return r(), it;
}
ae(
  Yc,
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
var q0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const F0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Kc(e, t) {
  de(t, !1), Qe(e, F0);
  const [n, r] = tt(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), a = () => J(v, "$elementsSelectable", n), s = () => J(f, "$nodesConnectable", n), l = () => J(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = Fe(), $ = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const y = /* @__PURE__ */ new Map();
    C.forEach((_) => {
      const M = _.target.getAttribute("data-id");
      y.set(M, { id: M, nodeElement: _.target, force: !0 });
    }), w(y);
  });
  is(() => {
    $ == null || $.disconnect();
  }), Te();
  var k = q0();
  zt(k, 5, o, (C) => C.id, (C, y) => {
    const _ = /* @__PURE__ */ me(() => !!g(y).selected), M = /* @__PURE__ */ me(() => !!g(y).hidden), E = /* @__PURE__ */ me(() => !!(g(y).draggable || i() && typeof g(y).draggable > "u")), z = /* @__PURE__ */ me(() => !!(g(y).selectable || a() && typeof g(y).selectable > "u")), V = /* @__PURE__ */ me(() => !!(g(y).connectable || s() && typeof g(y).connectable > "u")), D = /* @__PURE__ */ me(() => g(y).deletable ?? !0), A = /* @__PURE__ */ me(() => l().has(g(y).id)), T = /* @__PURE__ */ me(() => g(y).type ?? "default"), R = /* @__PURE__ */ me(() => g(y).internals.z ?? 0), S = /* @__PURE__ */ me(() => gc(g(y)));
    Yc(C, {
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
        return g(_);
      },
      get hidden() {
        return g(M);
      },
      get draggable() {
        return g(E);
      },
      get selectable() {
        return g(z);
      },
      get connectable() {
        return g(V);
      },
      get deletable() {
        return g(D);
      },
      get positionX() {
        return g(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(A);
      },
      get style() {
        return g(y).style;
      },
      get class() {
        return g(y).class;
      },
      get type() {
        return g(T);
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
        return g(R);
      },
      get dragHandle() {
        return g(y).dragHandle;
      },
      get initialized() {
        return g(S);
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
      resizeObserver: $,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(N) {
          De.call(this, t, N);
        },
        nodemouseenter(N) {
          De.call(this, t, N);
        },
        nodemousemove(N) {
          De.call(this, t, N);
        },
        nodemouseleave(N) {
          De.call(this, t, N);
        },
        nodedrag(N) {
          De.call(this, t, N);
        },
        nodedragstart(N) {
          De.call(this, t, N);
        },
        nodedragstop(N) {
          De.call(this, t, N);
        },
        nodecontextmenu(N) {
          De.call(this, t, N);
        }
      }
    });
  }), K(k), O(e, k);
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
ae(Kc, { nodeClickDistance: {} }, [], [], !0);
var G0 = /* @__PURE__ */ $e('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(X, "$edgeTypes", n), i = () => J(oe, "$flowId", n), a = () => J(ve, "$elementsSelectable", n), s = () => J(G, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), $ = m(t, "target", 13, ""), k = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), _ = m(t, "selected", 13, !1), M = m(t, "selectable", 13, void 0), E = m(t, "deletable", 13, void 0), z = m(t, "hidden", 13, !1), V = m(t, "label", 13, void 0), D = m(t, "labelStyle", 13, void 0), A = m(t, "markerStart", 13, void 0), T = m(t, "markerEnd", 13, void 0), R = m(t, "sourceHandle", 13, void 0), S = m(t, "targetHandle", 13, void 0), N = m(t, "sourceX", 13), x = m(t, "sourceY", 13), P = m(t, "targetX", 13), H = m(t, "targetY", 13), L = m(t, "sourcePosition", 13), I = m(t, "targetPosition", 13), Y = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), se = m(t, "class", 13, "");
  Nr("svelteflow__edge_id", v());
  const {
    edgeLookup: G,
    edgeTypes: X,
    flowId: oe,
    elementsSelectable: ve
  } = Fe(), pe = Ai(), ue = Vc();
  function Ne(te) {
    const We = s().get(v());
    We && (ue(v()), pe("edgeclick", { event: te, edge: We }));
  }
  function ie(te, We) {
    const Ue = s().get(v());
    Ue && pe(We, { event: te, edge: Ue });
  }
  ge(() => U(w()), () => {
    F(l, w() || "default");
  }), ge(
    () => (o(), g(l), ki),
    () => {
      F(u, o()[g(l)] || ki);
    }
  ), ge(
    () => (U(A()), i()),
    () => {
      F(c, A() ? `url('#${La(A(), i())}')` : void 0);
    }
  ), ge(
    () => (U(T()), i()),
    () => {
      F(d, T() ? `url('#${La(T(), i())}')` : void 0);
    }
  ), ge(
    () => (U(M()), a()),
    () => {
      F(f, M() ?? a());
    }
  ), vt(), Te(!0);
  var ee = et(), Ve = be(ee);
  {
    var Me = (te) => {
      var We = G0();
      let Ue;
      var le = W(We);
      let ce;
      var Ce = W(le);
      const Xe = /* @__PURE__ */ me(() => E() ?? !0);
      _u(Ce, () => g(u), (ze, st) => {
        st(ze, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return $();
          },
          get sourceX() {
            return N();
          },
          get sourceY() {
            return x();
          },
          get targetX() {
            return P();
          },
          get targetY() {
            return H();
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return I();
          },
          get animated() {
            return y();
          },
          get selected() {
            return _();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return k();
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
            return g(Xe);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), K(le), K(We), _e(
        (ze, st) => {
          Ue = dt(We, "", Ue, { "z-index": C() }), ce = mt(le, 0, ze, null, ce, st), ye(le, "data-id", v()), ye(le, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${b()} to ${$()}`);
        },
        [
          () => fn(St(["svelte-flow__edge", se()])),
          () => ({
            animated: y(),
            selected: _(),
            selectable: g(f)
          })
        ],
        me
      ), Ye("click", le, Ne), Ye("contextmenu", le, (ze) => {
        ie(ze, "edgecontextmenu");
      }), Ye("mouseenter", le, (ze) => {
        ie(ze, "edgemouseenter");
      }), Ye("mouseleave", le, (ze) => {
        ie(ze, "edgemouseleave");
      }), O(te, We);
    };
    xe(Ve, (te) => {
      z() || te(Me);
    });
  }
  O(e, ee);
  var Be = fe({
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
      return $();
    },
    set target(te) {
      $(te), p();
    },
    get data() {
      return k();
    },
    set data(te) {
      k(te), p();
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
      return _();
    },
    set selected(te) {
      _(te), p();
    },
    get selectable() {
      return M();
    },
    set selectable(te) {
      M(te), p();
    },
    get deletable() {
      return E();
    },
    set deletable(te) {
      E(te), p();
    },
    get hidden() {
      return z();
    },
    set hidden(te) {
      z(te), p();
    },
    get label() {
      return V();
    },
    set label(te) {
      V(te), p();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(te) {
      D(te), p();
    },
    get markerStart() {
      return A();
    },
    set markerStart(te) {
      A(te), p();
    },
    get markerEnd() {
      return T();
    },
    set markerEnd(te) {
      T(te), p();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(te) {
      R(te), p();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(te) {
      S(te), p();
    },
    get sourceX() {
      return N();
    },
    set sourceX(te) {
      N(te), p();
    },
    get sourceY() {
      return x();
    },
    set sourceY(te) {
      x(te), p();
    },
    get targetX() {
      return P();
    },
    set targetX(te) {
      P(te), p();
    },
    get targetY() {
      return H();
    },
    set targetY(te) {
      H(te), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(te) {
      L(te), p();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(te) {
      I(te), p();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(te) {
      Y(te), p();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(te) {
      j(te), p();
    },
    get class() {
      return se();
    },
    set class(te) {
      se(te), p();
    }
  });
  return r(), Be;
}
ae(
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
function Xc(e, t) {
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
ae(Xc, { onMount: {}, onDestroy: {} }, [], [], !0);
var U0 = /* @__PURE__ */ $e("<defs></defs>");
function jc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(i, "$markers", n), { markers: i } = Fe();
  Te();
  var a = U0();
  zt(a, 5, o, (s) => s.id, (s, l) => {
    qc(s, ct(() => g(l)));
  }), K(a), O(e, a), fe(), r();
}
ae(jc, {}, [], [], !0);
var J0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Q0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), em = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function qc(e, t) {
  de(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Te();
  var c = em(), d = W(c);
  {
    var f = (w) => {
      var b = J0();
      _e(() => {
        ye(b, "stroke", l()), ye(b, "stroke-width", u());
      }), O(w, b);
    }, v = (w, b) => {
      {
        var $ = (k) => {
          var h = Q0();
          _e(() => {
            ye(h, "stroke", l()), ye(h, "stroke-width", u()), ye(h, "fill", l());
          }), O(k, h);
        };
        xe(
          w,
          (k) => {
            r() === wo.ArrowClosed && k($);
          },
          b
        );
      }
    };
    xe(d, (w) => {
      r() === wo.Arrow ? w(f) : w(v, !1);
    });
  }
  return K(c), _e(() => {
    ye(c, "id", n()), ye(c, "markerWidth", `${o()}`), ye(c, "markerHeight", `${i()}`), ye(c, "markerUnits", a()), ye(c, "orient", s());
  }), O(e, c), fe({
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
ae(
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
var tm = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Fc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(s, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Fe();
  Wt(() => {
    a() && u(a());
  }), Te();
  var d = tm(), f = W(d), v = W(f);
  jc(v, {}), K(f);
  var w = Z(f, 2);
  zt(w, 1, o, (h) => h.id, (h, C) => {
    const y = /* @__PURE__ */ me(() => g(C).selectable ?? i()), _ = /* @__PURE__ */ me(() => g(C).type || "default");
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
        return g(_);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(M) {
          De.call(this, t, M);
        },
        edgecontextmenu(M) {
          De.call(this, t, M);
        },
        edgemouseenter(M) {
          De.call(this, t, M);
        },
        edgemouseleave(M) {
          De.call(this, t, M);
        }
      }
    });
  });
  var b = Z(w, 2);
  {
    var $ = (h) => {
      Xc(h, {
        onMount: () => {
          ci(l, !0);
        },
        onDestroy: () => {
          ci(l, !1);
        }
      });
    };
    xe(b, (h) => {
      o().length > 0 && h($);
    });
  }
  K(d), O(e, d);
  var k = fe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
    }
  });
  return r(), k;
}
ae(Fc, { defaultEdgeOptions: {} }, [], [], !0);
var nm = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const rm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function bs(e, t) {
  de(t, !1), Qe(e, rm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = et(), l = be(s);
  {
    var u = (c) => {
      var d = nm();
      let f;
      _e(() => f = dt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), O(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return O(e, s), fe({
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
ae(
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
  const [n, r] = tt(), o = () => J(a, "$selectionRect", n), i = () => J(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Fe();
  Te();
  const l = /* @__PURE__ */ me(() => !!(o() && i() === "user")), u = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ me(() => {
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
ae(Gc, {}, [], [], !0);
var om = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const im = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  de(t, !1), Qe(e, im);
  const [n, r] = tt(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), a = () => J(u, "$nodes", n), s = Fe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ai();
  let f = /* @__PURE__ */ ne(null);
  function v(h) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function w(h) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  ge(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, Ho(i(), { filter: (h) => !!h.selected })), a());
    }
  ), vt(), Te();
  var b = et(), $ = be(b);
  {
    var k = (h) => {
      var C = om(), y = W(C);
      bs(y, { width: "100%", height: "100%", x: 0, y: 0 }), K(C), ht(C, (_, M) => _i == null ? void 0 : _i(_, M), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, M, E, z) => {
          d("nodedrag", { event: _, targetNode: null, nodes: z });
        },
        onDragStart: (_, M, E, z) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: z });
        },
        onDragStop: (_, M, E, z) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: z });
        }
      })), At(() => Ye("contextmenu", C, v)), At(() => Ye("click", C, w)), At(() => Ye("keyup", C, () => {
      })), _e(() => dt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), O(h, C);
    };
    xe($, (h) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && h(k);
    });
  }
  O(e, b), fe(), r();
}
ae(Uc, {}, [], [], !0);
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
          ($) => typeof $ == "string" ? [$] : $
        ).some(
          ($) => $.every((k) => l[k])
        ))
          continue;
        if (a.key === f) {
          w && a.preventDefault();
          const $ = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), v == null || v($);
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
  de(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => bi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Fe();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function w(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function $(h, C) {
    return (Array.isArray(h) ? h : [h]).map((y) => {
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
  return Te(), Ye("blur", Mt, k), Ye("contextmenu", Mt, k), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ip(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(a(), () => d.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => ut == null ? void 0 : ut(h, C), () => ({
    trigger: $(a(), () => d.set(!1)),
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
ae(
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
  de(t, !1);
  const [n, r] = tt(), o = () => J(v, "$connection", n), i = () => J(w, "$connectionLineType", n), a = () => J(d, "$width", n), s = () => J(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = Fe();
  let b = /* @__PURE__ */ ne(null);
  ge(
    () => (o(), U(c()), i(), g(b), Ta),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: _, fromPosition: M, toPosition: E } = o(), z = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: M,
          targetX: _.x,
          targetY: _.y,
          targetPosition: E
        };
        switch (i()) {
          case _r.Bezier:
            ((V) => F(b, V[0]))(pc(z));
            break;
          case _r.Step:
            ((V) => F(b, V[0]))(xi({ ...z, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((V) => F(b, V[0]))(xi(z));
            break;
          default:
            ((V) => F(b, V[0]))(Ta(z));
        }
      }
    }
  ), vt(), Te();
  var $ = et(), k = be($);
  {
    var h = (y) => {
      var _ = sm(), M = W(_), E = W(M);
      pt(E, t, "connectionLine", {});
      var z = Z(E);
      {
        var V = (D) => {
          var A = am();
          _e(() => {
            ye(A, "d", g(b)), dt(A, u());
          }), O(D, A);
        };
        xe(z, (D) => {
          c() || D(V);
        });
      }
      K(M), K(_), _e(
        (D) => {
          ye(_, "width", a()), ye(_, "height", s()), dt(_, l()), mt(M, 0, D);
        },
        [
          () => fn(St([
            "svelte-flow__connection",
            Hp(o().isValid)
          ]))
        ],
        me
      ), O(y, _);
    };
    xe(k, (y) => {
      o().inProgress && y(h);
    });
  }
  O(e, $);
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
ae(
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
  const [o, i] = tt(), a = () => J(d, "$selectionRectMode", o), s = /* @__PURE__ */ ne();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = Fe();
  ge(() => U(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), Te();
  var f = lm();
  let v;
  var w = W(f);
  pt(w, t, "default", {}), K(f), _e(
    ($) => v = ln(f, v, {
      class: $,
      style: u(),
      ...r,
      [nr]: {
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
    me
  ), O(e, f);
  var b = fe({
    get position() {
      return l();
    },
    set position($) {
      l($), p();
    },
    get style() {
      return u();
    },
    set style($) {
      u($), p();
    },
    get class() {
      return c();
    },
    set class($) {
      c($), p();
    }
  });
  return i(), b;
}
ae(zo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
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
          O(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return O(e, o), fe({
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
ae(ed, { proOptions: {}, position: {} }, [], [], !0);
function Tl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
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
  return jt("light", (t) => {
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
  de(t, !1), Qe(e, pm);
  const [i, a] = tt(), s = () => J(C(), "$viewport", i), l = () => J(Ji, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), $ = m(t, "minZoom", 12, void 0), k = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), _ = m(t, "edgeTypes", 12, void 0), M = m(t, "selectionKey", 12, void 0), E = m(t, "selectionMode", 12, void 0), z = m(t, "panActivationKey", 12, void 0), V = m(t, "multiSelectionKey", 12, void 0), D = m(t, "zoomActivationKey", 12, void 0), A = m(t, "nodesDraggable", 12, void 0), T = m(t, "nodesConnectable", 12, void 0), R = m(t, "nodeDragThreshold", 12, void 0), S = m(t, "elementsSelectable", 12, void 0), N = m(t, "snapGrid", 12, void 0), x = m(t, "deleteKey", 12, void 0), P = m(t, "connectionRadius", 12, void 0), H = m(t, "connectionLineType", 12, void 0), L = m(t, "connectionMode", 28, () => cr.Strict), I = m(t, "connectionLineStyle", 12, ""), Y = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), se = m(t, "onMove", 12, void 0), G = m(t, "onMoveEnd", 12, void 0), X = m(t, "isValidConnection", 12, void 0), oe = m(t, "translateExtent", 12, void 0), ve = m(t, "nodeExtent", 12, void 0), pe = m(t, "onlyRenderVisibleElements", 12, void 0), ue = m(t, "panOnScrollMode", 28, () => qn.Free), Ne = m(t, "preventScrolling", 12, !0), ie = m(t, "zoomOnScroll", 12, !0), ee = m(t, "zoomOnDoubleClick", 12, !0), Ve = m(t, "zoomOnPinch", 12, !0), Me = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), te = m(t, "selectionOnDrag", 12, void 0), We = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), le = m(t, "onerror", 12, void 0), ce = m(t, "ondelete", 12, void 0), Ce = m(t, "onedgecreate", 12, void 0), Xe = m(t, "attributionPosition", 12, void 0), ze = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), Q = m(t, "height", 12, void 0), Ae = m(t, "colorMode", 12, "light"), he = m(t, "onconnect", 12, void 0), en = m(t, "onconnectstart", 12, void 0), tn = m(t, "onconnectend", 12, void 0), hn = m(t, "onbeforedelete", 12, void 0), Ee = m(t, "oninit", 12, void 0), nt = m(t, "nodeOrigin", 12, void 0), Ie = m(t, "paneClickDistance", 12, 0), Le = m(t, "nodeClickDistance", 12, 0), rt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = m(t, "style", 12, void 0), Xt = m(t, "class", 12, void 0), Xr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), Et = /* @__PURE__ */ ne();
  const mr = s() || h(), ot = g1(ji) ? Fe() : I0({
    nodes: q(f()),
    edges: q(v()),
    width: it(),
    height: Q(),
    fitView: w(),
    nodeOrigin: nt(),
    nodeExtent: ve()
  });
  Wt(() => (ot.width.set(g(wt)), ot.height.set(g(Et)), ot.domNode.set(g(Xr)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport(C()), w() !== void 0 && ot.fitViewOnInit.set(w()), b() && ot.fitViewOptions.set(b()), Tl(ot, {
    nodeTypes: y(),
    edgeTypes: _(),
    minZoom: $(),
    maxZoom: k(),
    translateExtent: oe(),
    paneClickDistance: Ie()
  }), () => {
    ot.reset();
  }));
  const { initialized: Ji } = ot;
  let jr = /* @__PURE__ */ ne(!1);
  ge(
    () => (g(wt), g(Et)),
    () => {
      g(wt) !== void 0 && g(Et) !== void 0 && (ot.width.set(g(wt)), ot.height.set(g(Et)));
    }
  ), ge(
    () => (g(jr), l(), U(Ee())),
    () => {
      var B;
      !g(jr) && l() && ((B = Ee()) == null || B(), F(jr, !0));
    }
  ), ge(
    () => (U(d()), U(H()), U(P()), U(E()), U(N()), U(rt()), U(A()), U(T()), U(S()), U(pe()), U(X()), U(We()), U(Ue()), U(le()), U(ce()), U(Ce()), U(L()), U(R()), U(he()), U(en()), U(tn()), U(hn()), U(nt()), Ll),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: H(),
        connectionRadius: P(),
        selectionMode: E(),
        snapGrid: N(),
        defaultMarkerColor: rt(),
        nodesDraggable: A(),
        nodesConnectable: T(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: pe(),
        isValidConnection: X(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: le(),
        ondelete: ce(),
        onedgecreate: Ce(),
        connectionMode: L(),
        nodeDragThreshold: R(),
        onconnect: he(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: hn(),
        nodeOrigin: nt()
      };
      Ll(ot, B);
    }
  ), ge(
    () => (U(y()), U(_()), U($()), U(k()), U(oe()), U(Ie())),
    () => {
      Tl(ot, {
        nodeTypes: y(),
        edgeTypes: _(),
        minZoom: $(),
        maxZoom: k(),
        translateExtent: oe(),
        paneClickDistance: Ie()
      });
    }
  ), ge(
    () => U(Ae()),
    () => {
      K1(F(c, fm(Ae())), "$colorModeClass", i);
    }
  ), vt(), Te();
  var Dt = hm();
  let Ao;
  var Io = W(Dt);
  Jc(Io, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return x();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Zo = Z(Io, 2);
  const Qi = /* @__PURE__ */ me(() => ue() === void 0 ? qn.Free : ue()), Fd = /* @__PURE__ */ me(() => Ne() === void 0 ? !0 : Ne()), Gd = /* @__PURE__ */ me(() => ie() === void 0 ? !0 : ie()), Ud = /* @__PURE__ */ me(() => ee() === void 0 ? !0 : ee()), Jd = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve()), Qd = /* @__PURE__ */ me(() => Me() === void 0 ? !1 : Me()), ef = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be()), tf = /* @__PURE__ */ me(() => Ie() === void 0 ? 0 : Ie());
  Zc(Zo, {
    initialViewport: mr,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return se();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return g(Qi);
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
      return g(Jd);
    },
    get panOnScroll() {
      return g(Qd);
    },
    get panOnDrag() {
      return g(ef);
    },
    get paneClickDistance() {
      return g(tf);
    },
    children: (B, Lw) => {
      const of = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be());
      Rc(B, {
        get panOnDrag() {
          return g(of);
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
        children: (qr, Dw) => {
          var Es = gm(), Ps = be(Es);
          Bc(Ps, {
            children: (sf, Ow) => {
              var Ms = vm(), Hs = be(Ms);
              Fc(Hs, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Ze) {
                    De.call(this, t, Ze);
                  },
                  edgecontextmenu(Ze) {
                    De.call(this, t, Ze);
                  },
                  edgemouseenter(Ze) {
                    De.call(this, t, Ze);
                  },
                  edgemouseleave(Ze) {
                    De.call(this, t, Ze);
                  }
                }
              });
              var Ns = Z(Hs, 2);
              Qc(Ns, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, Aw) => {
                    var zs = et(), uf = be(zs);
                    pt(uf, t, "connectionLine", {}), O(Ze, zs);
                  }
                }
              });
              var Vs = Z(Ns, 6);
              Kc(Vs, {
                get nodeClickDistance() {
                  return Le();
                },
                $$events: {
                  nodeclick(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodemouseenter(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodemousemove(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodemouseleave(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodecontextmenu(Ze) {
                    De.call(this, t, Ze);
                  }
                }
              });
              var lf = Z(Vs, 2);
              Uc(lf, {
                $$events: {
                  selectionclick(Ze) {
                    De.call(this, t, Ze);
                  },
                  selectioncontextmenu(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    De.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    De.call(this, t, Ze);
                  }
                }
              }), O(sf, Ms);
            },
            $$slots: { default: !0 }
          });
          var af = Z(Ps, 2);
          Gc(af, {}), O(qr, Es);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = Z(Zo, 2);
  ed(Ss, {
    get proOptions() {
      return ze();
    },
    get position() {
      return Xe();
    }
  });
  var nf = Z(Ss, 2);
  pt(nf, t, "default", {}), K(Dt), Cn(Dt, (B) => F(Xr, B), () => g(Xr)), _e(
    (B) => Ao = ln(
      Dt,
      Ao,
      {
        style: nn(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => St([
        "svelte-flow",
        Xt(),
        u()
      ])
    ],
    me
  ), Xs(Dt, "clientWidth", (B) => F(wt, B)), Xs(Dt, "clientHeight", (B) => F(Et, B)), Ye("dragover", Dt, function(B) {
    De.call(this, t, B);
  }), Ye("drop", Dt, function(B) {
    De.call(this, t, B);
  }), O(e, Dt);
  var rf = fe({
    get id() {
      return d();
    },
    set id(B) {
      d(B), p();
    },
    get nodes() {
      return f();
    },
    set nodes(B) {
      f(B), p();
    },
    get edges() {
      return v();
    },
    set edges(B) {
      v(B), p();
    },
    get fitView() {
      return w();
    },
    set fitView(B) {
      w(B), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(B) {
      b(B), p();
    },
    get minZoom() {
      return $();
    },
    set minZoom(B) {
      $(B), p();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(B) {
      k(B), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), p();
    },
    get viewport() {
      return C();
    },
    set viewport(B) {
      C(B), p();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(B) {
      y(B), p();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(B) {
      _(B), p();
    },
    get selectionKey() {
      return M();
    },
    set selectionKey(B) {
      M(B), p();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(B) {
      E(B), p();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(B) {
      z(B), p();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(B) {
      V(B), p();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(B) {
      D(B), p();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(B) {
      A(B), p();
    },
    get nodesConnectable() {
      return T();
    },
    set nodesConnectable(B) {
      T(B), p();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(B) {
      R(B), p();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(B) {
      S(B), p();
    },
    get snapGrid() {
      return N();
    },
    set snapGrid(B) {
      N(B), p();
    },
    get deleteKey() {
      return x();
    },
    set deleteKey(B) {
      x(B), p();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(B) {
      P(B), p();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(B) {
      H(B), p();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(B) {
      L(B), p();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(B) {
      I(B), p();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(B) {
      Y(B), p();
    },
    get onMoveStart() {
      return j();
    },
    set onMoveStart(B) {
      j(B), p();
    },
    get onMove() {
      return se();
    },
    set onMove(B) {
      se(B), p();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(B) {
      G(B), p();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(B) {
      X(B), p();
    },
    get translateExtent() {
      return oe();
    },
    set translateExtent(B) {
      oe(B), p();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(B) {
      ve(B), p();
    },
    get onlyRenderVisibleElements() {
      return pe();
    },
    set onlyRenderVisibleElements(B) {
      pe(B), p();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(B) {
      ue(B), p();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(B) {
      Ne(B), p();
    },
    get zoomOnScroll() {
      return ie();
    },
    set zoomOnScroll(B) {
      ie(B), p();
    },
    get zoomOnDoubleClick() {
      return ee();
    },
    set zoomOnDoubleClick(B) {
      ee(B), p();
    },
    get zoomOnPinch() {
      return Ve();
    },
    set zoomOnPinch(B) {
      Ve(B), p();
    },
    get panOnScroll() {
      return Me();
    },
    set panOnScroll(B) {
      Me(B), p();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(B) {
      Be(B), p();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(B) {
      te(B), p();
    },
    get autoPanOnConnect() {
      return We();
    },
    set autoPanOnConnect(B) {
      We(B), p();
    },
    get autoPanOnNodeDrag() {
      return Ue();
    },
    set autoPanOnNodeDrag(B) {
      Ue(B), p();
    },
    get onerror() {
      return le();
    },
    set onerror(B) {
      le(B), p();
    },
    get ondelete() {
      return ce();
    },
    set ondelete(B) {
      ce(B), p();
    },
    get onedgecreate() {
      return Ce();
    },
    set onedgecreate(B) {
      Ce(B), p();
    },
    get attributionPosition() {
      return Xe();
    },
    set attributionPosition(B) {
      Xe(B), p();
    },
    get proOptions() {
      return ze();
    },
    set proOptions(B) {
      ze(B), p();
    },
    get defaultEdgeOptions() {
      return st();
    },
    set defaultEdgeOptions(B) {
      st(B), p();
    },
    get width() {
      return it();
    },
    set width(B) {
      it(B), p();
    },
    get height() {
      return Q();
    },
    set height(B) {
      Q(B), p();
    },
    get colorMode() {
      return Ae();
    },
    set colorMode(B) {
      Ae(B), p();
    },
    get onconnect() {
      return he();
    },
    set onconnect(B) {
      he(B), p();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(B) {
      en(B), p();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(B) {
      tn(B), p();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(B) {
      hn(B), p();
    },
    get oninit() {
      return Ee();
    },
    set oninit(B) {
      Ee(B), p();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(B) {
      nt(B), p();
    },
    get paneClickDistance() {
      return Ie();
    },
    set paneClickDistance(B) {
      Ie(B), p();
    },
    get nodeClickDistance() {
      return Le();
    },
    set nodeClickDistance(B) {
      Le(B), p();
    },
    get defaultMarkerColor() {
      return rt();
    },
    set defaultMarkerColor(B) {
      rt(B), p();
    },
    get style() {
      return nn();
    },
    set style(B) {
      nn(B), p();
    },
    get class() {
      return Xt();
    },
    set class(B) {
      Xt(B), p();
    }
  });
  return a(), rf;
}
ae(
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
  Nr(ji, { getStore: () => l }), is(() => {
    l.reset();
  }), Te();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), O(e, u), fe({
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
ae(
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
  var f = W(c);
  return pt(f, t, "default", { class: "button-svg" }), K(c), _e(
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
      () => St([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    me
  ), Ye("click", c, function(v) {
    De.call(this, t, v);
  }), O(e, c), fe({
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
ae(
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
  O(e, t);
}
ae(rd, {}, [], [], !0);
var wm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = wm();
  O(e, t);
}
ae(od, {}, [], [], !0);
var bm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = bm();
  O(e, t);
}
ae(id, {}, [], [], !0);
var xm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = xm();
  O(e, t);
}
ae(ad, {}, [], [], !0);
var $m = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = $m();
  O(e, t);
}
ae(sd, {}, [], [], !0);
var Cm = /* @__PURE__ */ re("<!> <!>", 1), km = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(H, "$nodesDraggable", n), i = () => J(L, "$nodesConnectable", n), a = () => J(I, "$elementsSelectable", n), s = () => J(N, "$viewport", n), l = () => J(x, "$minZoom", n), u = () => J(P, "$maxZoom", n), c = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), $ = m(t, "showFitView", 12, !0), k = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), _ = m(t, "buttonColorHover", 12, void 0), M = m(t, "buttonBorderColor", 12, void 0), E = m(t, "ariaLabel", 12, void 0), z = m(t, "style", 12, void 0), V = m(t, "orientation", 12, "vertical"), D = m(t, "fitViewOptions", 12, void 0), A = m(t, "class", 12, "");
  const {
    zoomIn: T,
    zoomOut: R,
    fitView: S,
    viewport: N,
    minZoom: x,
    maxZoom: P,
    nodesDraggable: H,
    nodesConnectable: L,
    elementsSelectable: I
  } = Fe(), Y = {
    bgColor: h(),
    bgColorHover: C(),
    color: y(),
    colorHover: _(),
    borderColor: M()
  }, j = () => {
    T();
  }, se = () => {
    R();
  }, G = () => {
    S(D());
  }, X = () => {
    F(c, !g(c)), H.set(g(c)), L.set(g(c)), I.set(g(c));
  };
  ge(
    () => (o(), i(), a()),
    () => {
      F(c, o() || i() || a());
    }
  ), ge(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), ge(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), ge(() => U(V()), () => {
    F(v, V() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Te();
  const oe = /* @__PURE__ */ me(() => St([
    "svelte-flow__controls",
    g(v),
    A()
  ])), ve = /* @__PURE__ */ me(() => E() ?? "Svelte Flow controls");
  zo(e, {
    get class() {
      return g(oe);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return z();
    },
    children: (ue, Ne) => {
      var ie = km(), ee = be(ie);
      pt(ee, t, "before", {});
      var Ve = Z(ee, 2);
      {
        var Me = (Ce) => {
          var Xe = Cm(), ze = be(Xe);
          no(ze, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            Y,
            {
              $$events: { click: j },
              children: (it, Q) => {
                rd(it);
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
            Y,
            {
              $$events: { click: se },
              children: (it, Q) => {
                od(it);
              },
              $$slots: { default: !0 }
            }
          )), O(Ce, Xe);
        };
        xe(Ve, (Ce) => {
          b() && Ce(Me);
        });
      }
      var Be = Z(Ve, 2);
      {
        var te = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: G },
              children: (Xe, ze) => {
                id(Xe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Be, (Ce) => {
          $() && Ce(te);
        });
      }
      var We = Z(Be, 2);
      {
        var Ue = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: X },
              children: (Xe, ze) => {
                var st = et(), it = be(st);
                {
                  var Q = (he) => {
                    sd(he);
                  }, Ae = (he) => {
                    ad(he);
                  };
                  xe(it, (he) => {
                    g(c) ? he(Q) : he(Ae, !1);
                  });
                }
                O(Xe, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(We, (Ce) => {
          k() && Ce(Ue);
        });
      }
      var le = Z(We, 2);
      pt(le, t, "default", {});
      var ce = Z(le, 2);
      pt(ce, t, "after", {}), O(ue, ie);
    },
    $$slots: { default: !0 }
  });
  var pe = fe({
    get position() {
      return w();
    },
    set position(ue) {
      w(ue), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ue) {
      b(ue), p();
    },
    get showFitView() {
      return $();
    },
    set showFitView(ue) {
      $(ue), p();
    },
    get showLock() {
      return k();
    },
    set showLock(ue) {
      k(ue), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ue) {
      h(ue), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ue) {
      C(ue), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(ue) {
      y(ue), p();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(ue) {
      _(ue), p();
    },
    get buttonBorderColor() {
      return M();
    },
    set buttonBorderColor(ue) {
      M(ue), p();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ue) {
      E(ue), p();
    },
    get style() {
      return z();
    },
    set style(ue) {
      z(ue), p();
    },
    get orientation() {
      return V();
    },
    set orientation(ue) {
      V(ue), p();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(ue) {
      D(ue), p();
    },
    get class() {
      return A();
    },
    set class(ue) {
      A(ue), p();
    }
  });
  return r(), pe;
}
ae(
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
var Fn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Fn || (Fn = {}));
var _m = /* @__PURE__ */ $e("<circle></circle>");
function ud(e, t) {
  de(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Te();
  var o = _m();
  return _e(
    (i) => {
      ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, i);
    },
    [
      () => fn(St([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    me
  ), O(e, o), fe({
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
ae(ud, { radius: {}, class: {} }, [], [], !0);
var Sm = /* @__PURE__ */ $e("<path></path>");
function cd(e, t) {
  de(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Te();
  var a = Sm();
  return _e(
    (s) => {
      ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(a, 0, s);
    },
    [
      () => fn(St([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    me
  ), O(e, a), fe({
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
ae(
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
  [Fn.Dots]: 1,
  [Fn.Lines]: 1,
  [Fn.Cross]: 6
};
var Pm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Mm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  de(t, !1), Qe(e, Mm);
  const [n, r] = tt(), o = () => J(_, "$flowId", n), i = () => J(y, "$viewport", n), a = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => Fn.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), $ = m(t, "bgColor", 12, void 0), k = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: _ } = Fe(), M = w() || Em[f()], E = f() === Fn.Dots, z = f() === Fn.Cross, V = Array.isArray(v()) ? v() : [v(), v()];
  ge(
    () => (o(), U(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ge(() => i(), () => {
    F(s, [
      V[0] * i().zoom || 1,
      V[1] * i().zoom || 1
    ]);
  }), ge(() => i(), () => {
    F(l, M * i().zoom);
  }), ge(() => (g(l), g(s)), () => {
    F(u, z ? [g(l), g(l)] : g(s));
  }), ge(
    () => (g(l), g(u)),
    () => {
      F(c, E ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), Te();
  var D = Pm();
  let A;
  var T = W(D), R = W(T);
  {
    var S = (H) => {
      const L = /* @__PURE__ */ me(() => g(l) / 2);
      ud(H, {
        get radius() {
          return g(L);
        },
        get class() {
          return h();
        }
      });
    }, N = (H) => {
      cd(H, {
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
    xe(R, (H) => {
      E ? H(S) : H(N, !1);
    });
  }
  K(T);
  var x = Z(T);
  K(D), _e(
    (H) => {
      mt(D, 0, H, "svelte-1r7pe8d"), A = dt(D, "", A, {
        "--xy-background-color-props": $(),
        "--xy-background-pattern-color-props": k()
      }), ye(T, "id", g(a)), ye(T, "x", i().x % g(s)[0]), ye(T, "y", i().y % g(s)[1]), ye(T, "width", g(s)[0]), ye(T, "height", g(s)[1]), ye(T, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ye(x, "fill", `url(#${g(a)})`);
    },
    [
      () => fn(St(["svelte-flow__background", C()]))
    ],
    me
  ), O(e, D);
  var P = fe({
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
      return w();
    },
    set size(H) {
      w(H), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(H) {
      b(H), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(H) {
      $(H), p();
    },
    get patternColor() {
      return k();
    },
    set patternColor(H) {
      k(H), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(H) {
      h(H), p();
    },
    get class() {
      return C();
    },
    set class(H) {
      C(H), p();
    }
  });
  return r(), P;
}
ae(
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
var Hm = /* @__PURE__ */ $e("<rect></rect>");
function fd(e, t) {
  de(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Te();
  var v = Hm();
  let w;
  return _e(
    (b, $) => {
      w = mt(v, 0, b, null, w, $), ye(v, "x", n()), ye(v, "y", r()), ye(v, "rx", a()), ye(v, "ry", a()), ye(v, "width", o()), ye(v, "height", i()), dt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ye(v, "shape-rendering", l());
    },
    [
      () => fn(St(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    me
  ), O(e, v), fe({
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
ae(
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
function Dl(e, t) {
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
var Nm = /* @__PURE__ */ $e("<title> </title>"), Vm = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(Be, "$flowId", n), i = () => J(ee, "$viewport", n), a = () => J(Ve, "$containerWidth", n), s = () => J(Me, "$containerHeight", n), l = () => J(ie, "$nodeLookup", n), u = () => J(Ne, "$nodes", n), c = () => J(te, "$panZoom", n), d = () => J(We, "$translateExtent", n), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), w = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), y = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne();
  let V = m(t, "position", 12, "bottom-right"), D = m(t, "ariaLabel", 12, "Mini map"), A = m(t, "nodeStrokeColor", 12, "transparent"), T = m(t, "nodeColor", 12, void 0), R = m(t, "nodeClass", 12, ""), S = m(t, "nodeBorderRadius", 12, 5), N = m(t, "nodeStrokeWidth", 12, 2), x = m(t, "bgColor", 12, void 0), P = m(t, "maskColor", 12, void 0), H = m(t, "maskStrokeColor", 12, void 0), L = m(t, "maskStrokeWidth", 12, void 0), I = m(t, "width", 12, void 0), Y = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), se = m(t, "zoomable", 12, !0), G = m(t, "inversePan", 12, void 0), X = m(t, "zoomStep", 12, void 0), oe = m(t, "style", 12, ""), ve = m(t, "class", 12, "");
  const pe = 200, ue = 150, {
    nodes: Ne,
    nodeLookup: ie,
    viewport: ee,
    width: Ve,
    height: Me,
    flowId: Be,
    panZoom: te,
    translateExtent: We
  } = Fe(), Ue = T() === void 0 ? void 0 : fa(T()), le = fa(A()), ce = fa(R()), Ce = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Xe = `svelte-flow__minimap-desc-${o()}`;
  let ze = /* @__PURE__ */ ne(g(f));
  const st = () => g(k);
  ge(
    () => (i(), a(), s()),
    () => {
      F(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ge(
    () => (l(), g(f), u()),
    () => {
      F(ze, l().size > 0 ? fc(Ho(l()), g(f)) : g(f)), u();
    }
  ), ge(() => U(I()), () => {
    F(v, I() ?? pe);
  }), ge(() => U(Y()), () => {
    F(w, Y() ?? ue);
  }), ge(
    () => (g(ze), g(v)),
    () => {
      F(b, g(ze).width / g(v));
    }
  ), ge(
    () => (g(ze), g(w)),
    () => {
      F($, g(ze).height / g(w));
    }
  ), ge(
    () => (g(b), g($)),
    () => {
      F(k, Math.max(g(b), g($)));
    }
  ), ge(() => (g(k), g(v)), () => {
    F(h, g(k) * g(v));
  }), ge(
    () => (g(k), g(w)),
    () => {
      F(C, g(k) * g(w));
    }
  ), ge(() => g(k), () => {
    F(y, 5 * g(k));
  }), ge(
    () => (g(ze), g(h), g(y)),
    () => {
      F(_, g(ze).x - (g(h) - g(ze).width) / 2 - g(y));
    }
  ), ge(
    () => (g(ze), g(C), g(y)),
    () => {
      F(M, g(ze).y - (g(C) - g(ze).height) / 2 - g(y));
    }
  ), ge(() => (g(h), g(y)), () => {
    F(E, g(h) + g(y) * 2);
  }), ge(() => (g(C), g(y)), () => {
    F(z, g(C) + g(y) * 2);
  }), vt(), Te();
  const it = /* @__PURE__ */ me(() => oe() + (x() ? `;--xy-minimap-background-color-props:${x()}` : "")), Q = /* @__PURE__ */ me(() => St(["svelte-flow__minimap", ve()]));
  zo(e, {
    get position() {
      return V();
    },
    get style() {
      return g(it);
    },
    get class() {
      return g(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (he, en) => {
      var tn = et(), hn = be(tn);
      {
        var Ee = (nt) => {
          var Ie = Vm();
          ye(Ie, "aria-labelledby", Xe);
          let Le;
          var rt = W(Ie);
          {
            var nn = (wt) => {
              var Et = Nm();
              ye(Et, "id", Xe);
              var mr = W(Et, !0);
              K(Et), _e(() => Bt(mr, D())), O(wt, Et);
            };
            xe(rt, (wt) => {
              D() && wt(nn);
            });
          }
          var Xt = Z(rt);
          zt(Xt, 1, u, (wt) => wt.id, (wt, Et) => {
            var mr = et();
            const ot = /* @__PURE__ */ me(() => l().get(g(Et).id));
            var Ji = be(mr);
            {
              var jr = (Dt) => {
                const Ao = /* @__PURE__ */ me(() => tr(g(ot))), Io = /* @__PURE__ */ me(() => Ue == null ? void 0 : Ue(g(ot))), Zo = /* @__PURE__ */ me(() => le(g(ot))), Qi = /* @__PURE__ */ me(() => ce(g(ot)));
                fd(Dt, ct(
                  {
                    get x() {
                      return g(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Ao),
                  {
                    get selected() {
                      return g(ot).selected;
                    },
                    get color() {
                      return g(Io);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(Zo);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: Ce,
                    get class() {
                      return g(Qi);
                    }
                  }
                ));
              };
              xe(Ji, (Dt) => {
                g(ot) && gc(g(ot)) && Dt(jr);
              });
            }
            O(wt, mr);
          });
          var Xr = Z(Xt);
          K(Ie), ht(Ie, (wt, Et) => Dl == null ? void 0 : Dl(wt, Et), () => ({
            panZoom: c(),
            viewport: ee,
            getViewScale: st,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: X(),
            pannable: j(),
            zoomable: se()
          })), _e(() => {
            ye(Ie, "width", g(v)), ye(Ie, "height", g(w)), ye(Ie, "viewBox", `${g(_) ?? ""} ${g(M) ?? ""} ${g(E) ?? ""} ${g(z) ?? ""}`), Le = dt(Ie, "", Le, {
              "--xy-minimap-mask-background-color-props": P(),
              "--xy-minimap-mask-stroke-color-props": H(),
              "--xy-minimap-mask-stroke-width-props": L() ? L() * g(k) : void 0
            }), ye(Xr, "d", `M${g(_) - g(y)},${g(M) - g(y)}h${g(E) + g(y) * 2}v${g(z) + g(y) * 2}h${-g(E) - g(y) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), O(nt, Ie);
        };
        xe(hn, (nt) => {
          c() && nt(Ee);
        });
      }
      O(he, tn);
    },
    $$slots: { default: !0 }
  });
  var Ae = fe({
    get position() {
      return V();
    },
    set position(he) {
      V(he), p();
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
      return R();
    },
    set nodeClass(he) {
      R(he), p();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(he) {
      S(he), p();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(he) {
      N(he), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(he) {
      x(he), p();
    },
    get maskColor() {
      return P();
    },
    set maskColor(he) {
      P(he), p();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(he) {
      H(he), p();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(he) {
      L(he), p();
    },
    get width() {
      return I();
    },
    set width(he) {
      I(he), p();
    },
    get height() {
      return Y();
    },
    set height(he) {
      Y(he), p();
    },
    get pannable() {
      return j();
    },
    set pannable(he) {
      j(he), p();
    },
    get zoomable() {
      return se();
    },
    set zoomable(he) {
      se(he), p();
    },
    get inversePan() {
      return G();
    },
    set inversePan(he) {
      G(he), p();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(he) {
      X(he), p();
    },
    get style() {
      return oe();
    },
    set style(he) {
      oe(he), p();
    },
    get class() {
      return ve();
    },
    set class(he) {
      ve(he), p();
    }
  });
  return r(), Ae;
}
ae(
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
const Ol = (e) => Vp(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: $, connectionLookup: k } = Fe(), h = (_) => {
    var M, E;
    const z = q(w), V = Ol(_) ? _ : z.get(_.id), D = V.parentId ? Dp(V.position, V.measured, V.parentId, z, q(b)) : V.position, A = {
      ...V,
      position: D,
      width: ((M = V.measured) == null ? void 0 : M.width) ?? V.width,
      height: ((E = V.measured) == null ? void 0 : E.height) ?? V.height
    };
    return Dr(A);
  }, C = (_, M, E = { replace: !1 }) => {
    var z;
    const V = (z = q(w).get(_)) == null ? void 0 : z.internals.userNode;
    if (!V)
      return;
    const D = typeof M == "function" ? M(V) : M;
    E.replace ? d.update((A) => A.map((T) => T.id === _ ? Ol(D) ? D : { ...T, ...D } : T)) : (Object.assign(V, D), d.update((A) => A));
  }, y = (_) => q(w).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (_) => {
      var M;
      return (M = y(_)) == null ? void 0 : M.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? q(d) : Al(q(w), _),
    getEdge: (_) => q($).get(_),
    getEdges: (_) => _ === void 0 ? q(f) : Al(q($), _),
    setZoom: (_, M) => {
      const E = q(c);
      return E ? E.scaleTo(_, { duration: M == null ? void 0 : M.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (_, M) => {
      const E = q(i), z = q(c);
      return z ? (await z.setViewport({
        x: _.x ?? E.x,
        y: _.y ?? E.y,
        zoom: _.zoom ?? E.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (_, M, E) => {
      const z = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : q(u), V = q(c);
      return V ? (await V.setViewport({
        x: q(a) / 2 - _ * z,
        y: q(s) / 2 - M * z,
        zoom: z
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, M) => {
      const E = q(c);
      if (!E)
        return Promise.resolve(!1);
      const z = hs(_, q(a), q(s), q(l), q(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await E.setViewport(z, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, M = !0, E) => {
      const z = wl(_), V = z ? _ : h(_);
      return V ? (E || q(d)).filter((D) => {
        const A = q(w).get(D.id);
        if (!A || !z && D.id === _.id)
          return !1;
        const T = Dr(A), R = bo(T, V);
        return M && R > 0 || R >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (_, M, E = !0) => {
      const z = wl(_) ? _ : h(_);
      if (!z)
        return !1;
      const V = bo(z, M);
      return E && V > 0 || V >= z.width * z.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: M = [] }) => {
      const { nodes: E, edges: z } = await uc({
        nodesToRemove: _,
        edgesToRemove: M,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return E && d.update((V) => V.filter((D) => !E.some(({ id: A }) => A === D.id))), z && f.update((V) => V.filter((D) => !z.some(({ id: A }) => A === D.id))), {
        deletedNodes: E,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (_, M = { snapToGrid: !0 }) => {
      const E = q(v);
      if (!E)
        return _;
      const z = M.snapToGrid ? q(o) : !1, { x: V, y: D, zoom: A } = q(i), { x: T, y: R } = E.getBoundingClientRect(), S = {
        x: _.x - T,
        y: _.y - R
      };
      return No(S, [V, D, A], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const M = q(v);
      if (!M)
        return _;
      const { x: E, y: z, zoom: V } = q(i), { x: D, y: A } = M.getBoundingClientRect(), T = vc(_, [E, z, V]);
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
    updateNodeData: (_, M, E) => {
      var z;
      const V = (z = q(w).get(_)) == null ? void 0 : z.internals.userNode;
      if (!V)
        return;
      const D = typeof M == "function" ? M(V) : M;
      V.data = E != null && E.replace ? D : { ...V.data, ...D }, d.update((A) => A);
    },
    getNodesBounds: (_) => {
      const M = q(w), E = q(b);
      return zp(_, { nodeLookup: M, nodeOrigin: E });
    },
    getHandleConnections: ({ type: _, id: M, nodeId: E }) => {
      var z;
      return Array.from(((z = q(k).get(`${E}-${_}-${M ?? null}`)) == null ? void 0 : z.values()) ?? []);
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
function gd(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(C, "$nodes", n), i = () => J(h, "$nodeLookup", n), a = () => J(k, "$viewport", n), s = () => J($, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: $, viewport: k, nodeLookup: h, nodes: C } = Fe(), { getNodesBounds: y } = Lt(), _ = sr("svelteflow__node_id");
  let M = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne([]), z = w() !== void 0 ? w() : 10, V = f() !== void 0 ? f() : ke.Top, D = v() !== void 0 ? v() : "center";
  ge(
    () => (o(), U(d()), i()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || _];
      F(E, N.reduce(
        (x, P) => {
          const H = i().get(P);
          return H && x.push(H), x;
        },
        []
      ));
    }
  ), ge(
    () => (g(E), a()),
    () => {
      const N = y(g(E));
      N && F(M, Up(N, a(), V, z, D));
    }
  ), ge(() => g(E), () => {
    F(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((N) => (N.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    F(u, o().filter((N) => N.selected).length);
  }), ge(
    () => (U(b()), g(E), g(u)),
    () => {
      F(c, typeof b() == "boolean" ? b() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), vt(), Te();
  var A = et(), T = be(A);
  {
    var R = (N) => {
      var x = zm();
      let P;
      var H = W(x);
      pt(H, t, "default", {}), K(x), ht(x, (L, I) => Ci == null ? void 0 : Ci(L, I), () => ({ domNode: s() })), _e(
        (L) => {
          ye(x, "data-id", L), P = dt(x, "", P, {
            position: "absolute",
            transform: g(M),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((L, I) => `${L}${I.id} `, "").trim()
        ],
        me
      ), O(N, x);
    };
    xe(T, (N) => {
      s() && g(c) && g(E) && N(R);
    });
  }
  O(e, A);
  var S = fe({
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
  return r(), S;
}
ae(
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
  const { nodes: t, nodeLookup: n } = Fe();
  let r = [], o = !0;
  return jn([t, n], ([, i], a) => {
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
    if (Ht(this, "options"), Ht(this, "rootEl"), Ht(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
var Dm = /* @__PURE__ */ re("<button><!></button>");
function Ge(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Dm();
  let i;
  var a = W(o);
  return lr(a, () => n() ?? ft), K(o), _e(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), O(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ae(Ge, { children: {} }, [], [], !0);
var Om = /* @__PURE__ */ re("<input>");
function hd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Om();
  oo(r);
  let o;
  _e(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
ae(hd, {}, [], [], !0);
var Am = /* @__PURE__ */ re("<input>");
function $t(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Am();
  oo(r);
  let o;
  _e(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
ae($t, {}, [], [], !0);
var Im = /* @__PURE__ */ re("<textarea></textarea>");
function Tt(e, t) {
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
  return _e(() => i = ln(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), fe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
ae(Tt, { value: {} }, [], [], !0);
var Zm = /* @__PURE__ */ re('<div role="button"><!></div>'), Rm = /* @__PURE__ */ re("<div></div>");
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
  var l = Rm();
  let u;
  return zt(l, 5, o, vo, (c, d, f) => {
    var v = Zm();
    ye(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), s(g(d), f));
    };
    var w = W(v);
    {
      var b = (k) => {
        var h = Re();
        _e(() => Bt(h, g(d).label)), O(k, h);
      }, $ = (k) => {
        var h = et(), C = be(h);
        lr(C, () => g(d).label ?? ft), O(k, h);
      };
      xe(w, (k) => {
        typeof g(d).label == "string" ? k(b) : k($, !1);
      });
    }
    K(v), _e(() => mt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), O(c, v);
  }), K(l), _e(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), O(e, l), fe({
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
ae(pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Bm = (e, t, n) => t(g(n)), Ym = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Km = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), Xm = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), jm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), qm = /* @__PURE__ */ re("<div></div>");
const Fm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  de(t, !0), Qe(e, Fm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Ft([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = qm();
  return zt(a, 21, n, vo, (s, l, u) => {
    var c = jm(), d = W(c);
    ye(d, "tabindex", u), d.__click = [Bm, i, l], d.__keydown = [Ym, i, l];
    var f = W(d);
    {
      var v = (y) => {
        var _ = Km(), M = W(_);
        Wn(M, {
          get target() {
            return g(l).icon;
          }
        }), K(_), O(y, _);
      };
      xe(f, (y) => {
        g(l).icon && y(v);
      });
    }
    var w = Z(f, 2);
    Wn(w, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(w, 2);
    K(d);
    var $ = Z(d, 2);
    {
      var k = (y) => {
        var _ = Wm(), M = W(_);
        Wn(M, {
          get target() {
            return g(l).description;
          }
        }), K(_), O(y, _);
      };
      xe($, (y) => {
        g(l).description && y(k);
      });
    }
    var h = Z($, 2);
    {
      var C = (y) => {
        var _ = Xm(), M = W(_);
        Wn(M, {
          get target() {
            return g(l).content;
          }
        }), K(_), O(y, _);
      };
      xe(h, (y) => {
        o().includes(g(l).key) && y(C);
      });
    }
    K(c), _e((y) => mt(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), O(s, c);
  }), K(a), _e(() => {
    dt(a, t.style), mt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, a), fe({
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
ae(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  de(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (s) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? ft), O(s, l);
    }, a = (s) => {
      var l = et(), u = be(l);
      rs(u, n), O(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return O(e, r), fe({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ae(Wn, { target: {} }, [], [], !0);
var Gm = (e, t, n) => t(g(n)), Um = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Jm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), Qm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), e2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), t2 = /* @__PURE__ */ re("<!> <!>", 1), n2 = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), r2 = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), o2 = /* @__PURE__ */ re("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (C, y = ft) => {
    var _ = et(), M = be(_);
    zt(M, 19, y, (E, z) => `${z}_${E.value}`, (E, z) => {
      var V = Qm(), D = be(V);
      D.__click = [Gm, b, z];
      var A = W(D), T = W(A);
      {
        var R = (P) => {
          var H = Um();
          O(P, H);
        };
        xe(T, (P) => {
          g(z).children && g(z).children.length > 0 && P(R);
        });
      }
      K(A);
      var S = Z(A, 2);
      Wn(S, {
        get target() {
          return g(z).label;
        }
      }), K(D);
      var N = Z(D, 2);
      {
        var x = (P) => {
          var H = Jm(), L = W(H);
          n(L, () => g(z).children), K(H), O(P, H);
        };
        xe(N, (P) => {
          g(z).children && g(z).children.length > 0 && (l() || c().includes(g(z).value)) && P(x);
        });
      }
      O(E, V);
    }), O(C, _);
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
      for (let M of _)
        a().length > 0 ? a().includes(M.value) && C.push(M) : s().includes(M.value) && C.push(M), M.children && M.children.length > 0 && y(M.children);
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
  var $ = o2();
  let k;
  var h = W($);
  return Cn(
    Oo(h, {
      floating: (C) => {
        var y = e2(), _ = W(y);
        n(_, r), K(y), O(C, y);
      },
      children: (C, y) => {
        var _ = r2();
        let M;
        var E = W(_);
        zt(
          E,
          23,
          () => g(v),
          (z, V) => `${V}_${z.value}`,
          (z, V, D) => {
            var A = et(), T = be(A);
            {
              var R = (N) => {
                var x = et(), P = be(x);
                {
                  var H = (L) => {
                    Wn(L, {
                      get target() {
                        return g(V).label;
                      }
                    });
                  };
                  xe(P, (L) => {
                    g(D) === 0 && L(H);
                  });
                }
                O(N, x);
              }, S = (N) => {
                var x = t2(), P = be(x);
                Wn(P, {
                  get target() {
                    return g(V).label;
                  }
                });
                var H = Z(P, 2);
                {
                  var L = (I) => {
                    var Y = Re(",");
                    O(I, Y);
                  };
                  xe(H, (I) => {
                    g(D) < g(v).length - 1 && I(L);
                  });
                }
                O(N, x);
              };
              xe(T, (N) => {
                u() ? N(S, !1) : N(R);
              });
            }
            O(z, A);
          },
          (z) => {
            var V = n2(), D = W(V, !0);
            K(V), _e(() => Bt(D, d())), O(z, V);
          }
        ), K(E), He(2), K(_), _e(() => M = ln(_, M, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), O(C, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), K($), _e(() => k = ln($, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), O(e, $), fe({
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
ae(
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
function Da(e, t, n) {
  return Sr(e, $o(t, n));
}
function To(e, t) {
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
      name: $,
      fn: k
    } = s[b], {
      x: h,
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
    c = h ?? c, d = C ?? d, v = {
      ...v,
      [$]: {
        ...v[$],
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
  } = To(t, e), w = wd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], $ = Pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), k = d === "floating" ? {
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
    rect: k,
    offsetParent: h,
    strategy: l
  }) : k);
  return {
    top: ($.top - y.top + w.top) / C.y,
    bottom: (y.bottom - $.bottom + w.bottom) / C.y,
    left: ($.left - y.left + w.left) / C.x,
    right: (y.right - $.right + w.right) / C.x
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
    }, v = $s(o), w = xs(v), b = await a.getDimensions(u), $ = v === "y", k = $ ? "top" : "left", h = $ ? "bottom" : "right", C = $ ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], _ = f[v] - i.reference[v], M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = M ? M[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(M))) && (E = s.floating[C] || i.floating[w]);
    const z = y / 2 - _ / 2, V = E / 2 - b[w] / 2 - 1, D = $o(d[k], V), A = $o(d[h], V), T = D, R = E - b[w] - A, S = E / 2 - b[w] / 2 + z, N = Da(T, S, R), x = !l.arrow && Lo(o) != null && S !== N && i.reference[w] / 2 - (S < T ? D : A) - b[w] / 2 < 0, P = x ? S < T ? S - T : S - R : 0;
    return {
      [v]: f[v] + P,
      data: {
        [v]: N,
        centerOffset: S - N - P,
        ...x && {
          alignmentOffset: P
        }
      },
      reset: x
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
        ...$
      } = To(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = fr(o), h = Ar(s), C = fr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (C || !b ? [Ei(s)] : l2(s)), M = w !== "none";
      !f && M && _.push(...c2(s, b, w, y));
      const E = [s, ..._], z = await bd(t, $), V = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(z[k]), d) {
        const S = s2(o, a, y);
        V.push(z[S[0]], z[S[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: V
      }], !V.every((S) => S <= 0)) {
        var A, T;
        const S = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, N = E[S];
        if (N)
          return {
            data: {
              index: S,
              overflows: D
            },
            reset: {
              placement: N
            }
          };
        let x = (T = D.filter((P) => P.overflows[0] <= 0).sort((P, H) => P.overflows[1] - H.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!x)
          switch (v) {
            case "bestFit": {
              var R;
              const P = (R = D.filter((H) => {
                if (M) {
                  const L = Ar(H.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((L) => L > 0).reduce((L, I) => L + I, 0)]).sort((H, L) => H[1] - L[1])[0]) == null ? void 0 : R[0];
              P && (x = P);
              break;
            }
            case "initialPlacement":
              x = s;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = Lo(n), l = Ar(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = To(t, e);
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
          fn: ($) => {
            let {
              x: k,
              y: h
            } = $;
            return {
              x: k,
              y: h
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
        const $ = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", h = v + c[$], C = v - c[k];
        v = Da(h, v, C);
      }
      if (a) {
        const $ = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", h = w + c[$], C = w - c[k];
        w = Da(h, w, C);
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
function qi() {
  return typeof window < "u";
}
function Wr(e) {
  return xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xd(e) {
  return qi() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function cn(e) {
  return qi() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function kn(e) {
  return qi() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function Rl(e) {
  return !qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function Do(e) {
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
  const t = ks(), n = cn(e) ? dn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function w2(e) {
  let t = Qn(e);
  for (; kn(t) && !Ir(t); ) {
    if (Cs(t))
      return t;
    if (Fi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function ks() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ir(e) {
  return ["html", "body", "#document"].includes(Wr(e));
}
function dn(e) {
  return Yt(e).getComputedStyle(e);
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
    Rl(e) && e.host || // Fallback.
    In(e)
  );
  return Rl(t) ? t.host : t;
}
function $d(e) {
  const t = Qn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Do(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Yt(o);
  return i ? (Aa(a), t.concat(a, a.visualViewport || [], Do(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Aa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kd(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Si(n) !== i || Si(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function _d(e) {
  return cn(e) ? e : e.contextElement;
}
function Er(e) {
  const t = _d(e);
  if (!kn(t))
    return yn(1);
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
const b2 = /* @__PURE__ */ yn(0);
function Sd(e) {
  const t = Yt(e);
  return !ks() || !t.visualViewport ? b2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _d(e);
  let a = yn(1);
  t && (r ? cn(r) && (a = Er(r)) : a = Er(e));
  const s = x2(i, n, r) ? Sd(i) : yn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Yt(i), v = r && cn(r) ? Yt(r) : r;
    let w = f, b = Aa(w);
    for (; b && r && v !== w; ) {
      const $ = Er(b), k = b.getBoundingClientRect(), h = dn(b), C = k.left + (b.clientLeft + parseFloat(h.paddingLeft)) * $.x, y = k.top + (b.clientTop + parseFloat(h.paddingTop)) * $.y;
      l *= $.x, u *= $.y, c *= $.x, d *= $.y, l += C, u += y, w = Yt(b), b = Aa(w);
    }
  }
  return Pi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function _s(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : Co(In(e)).left + n;
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
  const i = o === "fixed", a = In(r), s = t ? Fi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = yn(1);
  const c = yn(0), d = kn(r);
  if ((d || !d && !i) && ((Wr(r) !== "body" || Do(a)) && (l = Gi(r)), kn(r))) {
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
function k2(e) {
  const t = In(e), n = Gi(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + _s(e);
  const s = -n.scrollTop;
  return dn(r).direction === "rtl" && (a += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function _2(e, t) {
  const n = Yt(e), r = In(e), o = n.visualViewport;
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
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Er(e) : yn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Bl(e, t, n) {
  let r;
  if (t === "viewport")
    r = _2(e, n);
  else if (t === "document")
    r = k2(In(e));
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
  return Pi(r);
}
function Pd(e, t) {
  const n = Qn(e);
  return n === t || !cn(n) || Ir(n) ? !1 : dn(n).position === "fixed" || Pd(n, t);
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
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Do(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Qn(a);
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
  const i = [...n === "clippingAncestors" ? Fi(t) ? [] : E2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Bl(t, u, o);
    return l.top = Sr(c.top, l.top), l.right = $o(c.right, l.right), l.bottom = $o(c.bottom, l.bottom), l.left = Sr(c.left, l.left), l;
  }, Bl(t, a, o));
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
  } = kd(e);
  return {
    width: t,
    height: n
  };
}
function H2(e, t, n) {
  const r = kn(t), o = In(t), i = n === "fixed", a = Co(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((Wr(t) !== "body" || Do(o)) && (s = Gi(t)), r) {
      const f = Co(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = _s(o));
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
function Yl(e, t) {
  if (!kn(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function Md(e, t) {
  const n = Yt(e);
  if (Fi(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !Ir(o); ) {
      if (cn(o) && !va(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Yl(e, t);
  for (; r && y2(r) && va(r); )
    r = Yl(r, t);
  return r && Ir(r) && va(r) && !Cs(r) ? n : r || w2(e) || n;
}
const N2 = async function(e) {
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: H2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function V2(e) {
  return dn(e).direction === "rtl";
}
const z2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $2,
  getDocumentElement: In,
  getClippingRect: P2,
  getOffsetParent: Md,
  getElementRects: N2,
  getClientRects: C2,
  getDimensions: M2,
  getScale: Er,
  isElement: cn,
  isRTL: V2
}, T2 = p2, L2 = m2, D2 = g2, O2 = v2, A2 = (e, t, n) => {
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
        T2(o),
        // 手动偏移配置
        D2(i),
        //自动翻转
        L2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [O2({ element: c })] : []
      ]
    }).then(({ x: k, y: h, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${h}px`
      }), l) {
        const { x: _, y: M } = y.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: M != null ? `${M}px` : "",
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
  function $(k) {
    u.contains(k.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, b);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, b);
      }), document.removeEventListener("click", $);
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
  var u = Z2(), c = W(u), d = W(c);
  lr(d, n), K(c), Cn(c, (w) => i = w, () => i);
  var f = Z(c, 2), v = W(f);
  return lr(v, r), K(f), Cn(f, (w) => a = w, () => a), K(u), O(e, u), fe({
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
ae(Oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = et(), s = be(a);
  return L1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    _e(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = be(d);
    lr(f, () => n() ?? ft), O(u, d);
  }), O(e, a), fe({
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
ae(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var R2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const B2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ui(e, t) {
  de(t, !0), Qe(e, B2);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ge(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = R2();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
ae(Ui, {}, [], [], !0);
const Y2 = () => {
  const e = Fe();
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
}, K2 = () => {
  const { nodes: e, nodeLookup: t } = Fe();
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
}, On = () => sr("tinyflow_options");
var W2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), X2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), j2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), q2 = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), F2 = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const G2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function gn(e, t) {
  de(t, !0), Qe(e, G2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Lt(), $ = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: k } = Y2(), { copyNode: h } = K2(), C = On(), y = () => {
    var x;
    (x = C.onNodeExecute) == null || x.call(C, b(r()));
  };
  var _ = F2(), M = be(_);
  {
    var E = (x) => {
      gd(x, {
        get position() {
          return ke.Top;
        },
        align: "end",
        children: (P, H) => {
          var L = q2(), I = W(L);
          {
            var Y = (oe) => {
              Ge(oe, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (ve, pe) => {
                  var ue = W2();
                  O(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            xe(I, (oe) => {
              s() && oe(Y);
            });
          }
          var j = Z(I, 2);
          {
            var se = (oe) => {
              Ge(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (ve, pe) => {
                  var ue = X2();
                  O(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            xe(j, (oe) => {
              l() && oe(se);
            });
          }
          var G = Z(j, 2);
          {
            var X = (oe) => {
              Ge(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ve, pe) => {
                  var ue = j2();
                  O(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            xe(G, (oe) => {
              u() && oe(X);
            });
          }
          K(L), O(P, L);
        },
        $$slots: { default: !0 }
      });
    };
    xe(M, (x) => {
      (s() || l() || u()) && x(E);
    });
  }
  var z = Z(M, 2), V = Z(W(z), 2), D = W(V);
  md(D, {
    items: $,
    activeKeys: v,
    onChange: (x, P) => {
      var H;
      w(r(), { expand: P == null ? void 0 : P.includes("key") }), (H = f()) == null || H(P != null && P.includes("key") ? "key" : "");
    }
  }), K(V), K(z);
  var A = Z(z, 2);
  {
    var T = (x) => {
      Jn(x, {
        type: "target",
        get position() {
          return ke.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(A, (x) => {
      d() && x(T);
    });
  }
  var R = Z(A, 2);
  {
    var S = (x) => {
      Jn(x, {
        type: "source",
        get position() {
          return ke.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(R, (x) => {
      c() && x(S);
    });
  }
  var N = Z(R, 2);
  return lr(N, () => i() ?? ft), O(e, _), fe({
    get data() {
      return n();
    },
    set data(x) {
      n(x), p();
    },
    get id() {
      return r();
    },
    set id(x = "") {
      r(x), p();
    },
    get icon() {
      return o();
    },
    set icon(x) {
      o(x), p();
    },
    get handle() {
      return i();
    },
    set handle(x) {
      i(x), p();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(x = !0) {
      s(x), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(x = !0) {
      l(x), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(x = !0) {
      u(x), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(x = !0) {
      c(x), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(x = !0) {
      d(x), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(x) {
      f(x), p();
    }
  });
}
ae(
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
const Hd = [
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
var J2 = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Q2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ey = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  de(t, !0), Qe(e, ty);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var V, D;
    return {
      ...i(),
      ...(D = (V = o()) == null ? void 0 : V.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: c } = Lt(), d = (V, D) => {
    c(s, (A) => {
      let T = A.data.parameters;
      return T[a()][V] = D, { parameters: T };
    });
  }, f = (V) => {
    const D = V.target.value;
    d("name", D);
  }, v = (V) => {
    const D = V.target.checked;
    d("required", D);
  }, w = (V) => {
    const D = V.value;
    D && d("dataType", D);
  };
  let b;
  const $ = () => {
    c(s, (V) => {
      let D = V.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), b == null || b.hide();
  };
  var k = ey(), h = be(k), C = W(h);
  $t(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), K(h);
  var y = Z(h, 2), _ = W(y);
  hd(_, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), K(y);
  var M = Z(y, 2), E = W(M);
  Cn(
    Oo(E, {
      placement: "bottom",
      floating: (V) => {
        var D = J2(), A = W(D), T = Z(W(A));
        const R = /* @__PURE__ */ Pe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        un(T, {
          items: Hd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return g(R);
          }
        }), K(A);
        var S = Z(A, 2), N = Z(W(S));
        Tt(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("defaultValue", Y);
          }
        }), K(S);
        var x = Z(S, 2), P = Z(W(x));
        Tt(P, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("description", Y);
          }
        }), K(x);
        var H = Z(x, 2), L = W(H);
        Ge(L, {
          onclick: $,
          children: (I, Y) => {
            He();
            var j = Re("删除");
            O(I, j);
          },
          $$slots: { default: !0 }
        }), K(H), K(D), O(V, D);
      },
      children: (V, D) => {
        Ge(V, {
          class: "input-btn-more",
          children: (A, T) => {
            var R = Q2();
            O(A, R);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => b = V,
    () => b
  ), K(M), O(e, k);
  var z = fe({
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
  return r(), z;
}
ae(Nd, { parameter: {}, index: {} }, [], [], !0);
var ny = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Vd(e, t) {
  de(t, !0), Qe(e, iy);
  const [n, r] = tt(), o = () => J(g(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Pe(() => pr(i)), s = /* @__PURE__ */ Pe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = oy(), u = W(l);
  {
    var c = (f) => {
      var v = ny();
      He(4), O(f, v);
    };
    xe(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  zt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, w) => {
      Nd(f, {
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
      O(f, v);
    }
  ), K(l), O(e, l), fe(), r();
}
ae(Vd, {}, [], [], !0);
const zd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), zd(t.children);
  });
}, En = () => {
  const { updateNodeData: e } = Lt();
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
  de(t, !0), Qe(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En();
  return gn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = ay();
      O(a, s);
    },
    children: (a, s) => {
      var l = ly(), u = be(l), c = W(u);
      Je(c, {
        level: 3,
        children: (v, w) => {
          He();
          var b = Re("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      Ge(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, w) => {
          var b = sy();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = Z(u, 2);
      Vd(f, {}), O(a, l);
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
ae(Td, { data: {} }, [], [], !0);
const Ld = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Ld(e, r.source, n));
}, Kl = (e, t) => {
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
  const t = gt(), n = pr(t), { nodes: r, edges: o } = Fe();
  return jn([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = Kl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Ld(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Kl(c, c.parentId === i.id);
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
function Dd(e, t) {
  de(t, !0), Qe(e, vy);
  const [n, r] = tt(), o = () => J(g(c), "$node", n), i = () => J(y, "$selectItems", n);
  Wt(() => {
    g(d).refType || k({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var N;
    return {
      ...a(),
      ...(N = o()) == null ? void 0 : N.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Lt(), v = (N, x) => {
    f(u, (P) => {
      let H = P.data[l()];
      return H[s()] = { ...H[s()], [N]: x }, { [l()]: H };
    });
  }, w = (N) => {
    const x = N.target.value;
    v("name", x);
  }, b = (N) => {
    const x = N.target.value;
    v("value", x);
  }, $ = (N) => {
    const x = N.value;
    v("ref", x);
  }, k = (N) => {
    const x = N.value;
    v("refType", x);
  };
  let h;
  const C = () => {
    f(u, (N) => {
      let x = N.data[l()];
      return x.splice(s(), 1), { [l()]: [...x] };
    }), h == null || h.hide();
  }, y = cy();
  var _ = fy(), M = be(_), E = W(M);
  $t(E, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), K(M);
  var z = Z(M, 2), V = W(z);
  {
    var D = (N) => {
      $t(N, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (N, x) => {
      {
        var P = (H) => {
          const L = /* @__PURE__ */ Pe(() => [g(d).ref]);
          un(H, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(L);
            },
            expandAll: !0,
            onSelect: $
          });
        };
        xe(
          N,
          (H) => {
            g(d).refType !== "input" && H(P);
          },
          x
        );
      }
    };
    xe(V, (N) => {
      g(d).refType === "fixed" ? N(D) : N(A, !1);
    });
  }
  K(z);
  var T = Z(z, 2), R = W(T);
  Cn(
    Oo(R, {
      placement: "bottom",
      floating: (N) => {
        var x = dy(), P = W(x), H = Z(W(P));
        const L = /* @__PURE__ */ Pe(() => g(d).refType ? [g(d).refType] : []);
        un(H, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: k
        }), K(P);
        var I = Z(P, 2), Y = Z(W(I));
        Tt(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (oe) => {
            const ve = oe.target.value;
            v("defaultValue", ve);
          }
        }), K(I);
        var j = Z(I, 2), se = Z(W(j));
        Tt(se, {
          rows: 3,
          style: "width: 100%;",
          onchange: (oe) => {
            const ve = oe.target.value;
            v("description", ve);
          }
        }), K(j);
        var G = Z(j, 2), X = W(G);
        Ge(X, {
          onclick: C,
          children: (oe, ve) => {
            He();
            var pe = Re("删除");
            O(oe, pe);
          },
          $$slots: { default: !0 }
        }), K(G), K(x), O(N, x);
      },
      children: (N, x) => {
        Ui(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => h = N,
    () => h
  ), K(T), O(e, _);
  var S = fe({
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
  return r(), S;
}
ae(Dd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var gy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  de(t, !0), Qe(e, my);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = py(), d = W(c);
  {
    var f = (b) => {
      var $ = gy();
      He(4), O(b, $);
    };
    xe(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  zt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, $, k) => {
      Dd(b, {
        get parameter() {
          return g($);
        },
        get index() {
          return g(k);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var $ = hy(), k = W($, !0);
      K($), _e(() => Bt(k, i())), O(b, $);
    }
  ), K(c), O(e, c);
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
ae(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), wy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const xy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Od(e, t) {
  de(t, !0), Qe(e, xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En();
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
        O(a, s);
      },
      children: (a, s) => {
        var l = by(), u = be(l), c = W(u);
        Je(c, {
          level: 3,
          children: (v, w) => {
            He();
            var b = Re("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        Ge(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, w) => {
            var b = wy();
            O(v, b);
          },
          $$slots: { default: !0 }
        }), K(u);
        var f = Z(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), O(a, l);
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
ae(Od, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), ky = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Sy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  de(t, !0), Qe(e, Sy);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var P;
    let H = (P = o()) == null ? void 0 : P.data[s()], L;
    if (H && a().length > 0) {
      let I = H;
      for (let Y = 0; Y < a().length; Y++) {
        const j = a()[Y];
        Y == a().length - 1 ? L = I[j] : I = I[j].children;
      }
    }
    return { ...i(), ...L };
  });
  const { updateNodeData: d } = Lt(), f = (P, H) => {
    d(l, (L) => {
      const I = L.data[s()];
      if (I && a().length > 0) {
        let Y = I;
        for (let j = 0; j < a().length; j++) {
          const se = a()[j];
          j == a().length - 1 ? Y[se] = { ...Y[se], [P]: H } : Y = I[se].children;
        }
      }
      return { [s()]: I };
    });
  }, v = (P) => {
    const H = P.target.value;
    f("name", H);
  }, w = (P) => {
    const H = P.value;
    f("dataType", H);
  };
  let b;
  const $ = () => {
    d(l, (P) => {
      let H = P.data[s()];
      if (H && a().length > 0) {
        let L = H;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? L.splice(Y, 1) : L = L[Y].children;
        }
      }
      return { [s()]: [...H] };
    }), b == null || b.hide();
  }, k = () => {
    d(l, (P) => {
      let H = P.data[s()];
      if (H && a().length > 0) {
        let L = H;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? L[Y].children ? L[Y].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : L[Y].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[Y].children;
        }
      }
      return { [s()]: [...H] };
    });
  };
  var h = _y(), C = be(h), y = W(C);
  {
    var _ = (P) => {
      var H = et(), L = be(H);
      zt(L, 17, a, vo, (I, Y) => {
        He();
        var j = Re(" ");
        O(I, j);
      }), O(P, H);
    };
    xe(y, (P) => {
      a().length > 1 && P(_);
    });
  }
  var M = Z(y, 2);
  const E = /* @__PURE__ */ Pe(() => g(c).nameDisabled === !0);
  $t(M, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(E);
    }
  }), K(C);
  var z = Z(C, 2), V = W(z);
  const D = /* @__PURE__ */ Pe(() => g(c).dataType ? [g(c).dataType] : []), A = /* @__PURE__ */ Pe(() => g(c).dataTypeDisabled === !0);
  un(V, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(D);
    },
    get disabled() {
      return g(A);
    },
    onSelect: w
  });
  var T = Z(V, 2);
  {
    var R = (P) => {
      Ge(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (H, L) => {
          var I = $y();
          O(H, I);
        },
        $$slots: { default: !0 }
      });
    };
    xe(T, (P) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && P(R);
    });
  }
  K(z);
  var S = Z(z, 2), N = W(S);
  Cn(
    Oo(N, {
      placement: "bottom",
      floating: (P) => {
        var H = ky(), L = W(H), I = Z(W(L));
        const Y = /* @__PURE__ */ Pe(() => g(c).defaultValue || "");
        Tt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(Y);
          },
          onchange: (ve) => {
            const pe = ve.target.value;
            f("defaultValue", pe);
          }
        }), K(L);
        var j = Z(L, 2), se = Z(W(j));
        const G = /* @__PURE__ */ Pe(() => g(c).description || "");
        Tt(se, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(G);
          },
          onchange: (ve) => {
            const pe = ve.target.value;
            f("description", pe);
          }
        }), K(j);
        var X = Z(j, 2);
        {
          var oe = (ve) => {
            var pe = Cy(), ue = W(pe);
            Ge(ue, {
              onclick: $,
              children: (Ne, ie) => {
                He();
                var ee = Re("删除");
                O(Ne, ee);
              },
              $$slots: { default: !0 }
            }), K(pe), O(ve, pe);
          };
          xe(X, (ve) => {
            g(c).deleteDisabled !== !0 && ve(oe);
          });
        }
        K(H), O(P, H);
      },
      children: (P, H) => {
        Ui(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), K(S), O(e, h);
  var x = fe({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), p();
    },
    get position() {
      return a();
    },
    set position(P) {
      a(P), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(P) {
      s(P), p();
    }
  });
  return r(), x;
}
ae(Ad, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ re("<!> <!>", 1), Py = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), My = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Hy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ny = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zn(e, t) {
  de(t, !0), Qe(e, Ny);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = ($, k = ft, h = ft) => {
    var C = et(), y = be(C);
    zt(
      y,
      19,
      k,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, M, E) => {
        var z = Ey(), V = be(z);
        const D = /* @__PURE__ */ Pe(() => [...h(), g(E)]);
        Ad(V, {
          get parameter() {
            return g(M);
          },
          get position() {
            return g(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var A = Z(V, 2);
        {
          var T = (R) => {
            var S = /* @__PURE__ */ me(() => [...h(), g(E)]);
            i(R, () => g(M).children, () => g(S));
          };
          xe(A, (R) => {
            g(M).children && R(T);
          });
        }
        O(_, z);
      },
      (_) => {
        var M = et(), E = be(M);
        {
          var z = (V) => {
            var D = Py(), A = W(D, !0);
            K(D), _e(() => Bt(A, a())), O(V, D);
          };
          xe(E, (V) => {
            h().length === 0 && V(z);
          });
        }
        O(_, M);
      }
    ), O($, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[s()]) || []];
  });
  var d = Hy(), f = W(d);
  {
    var v = ($) => {
      var k = My();
      He(4), O($, k);
    };
    xe(f, ($) => {
      g(c).length !== 0 && $(v);
    });
  }
  var w = Z(f, 2);
  i(w, () => g(c) || [], () => []), K(d), O(e, d);
  var b = fe({
    get noneParameterText() {
      return a();
    },
    set noneParameterText($ = "无输出参数") {
      a($), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName($ = "outputDefs") {
      s($), p();
    }
  });
  return r(), b;
}
ae(Zn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Vy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), zy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ re('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Id(e, t) {
  de(t, !0), Qe(e, Dy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En(), a = On();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Vy();
        O(u, c);
      },
      children: (u, c) => {
        var d = Ly(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (ee, Ve) => {
            He();
            var Me = Re("输入参数");
            O(ee, Me);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Ge(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ee, Ve) => {
            var Me = zy();
            O(ee, Me);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        Zt(b, {});
        var $ = Z(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (ee, Ve) => {
            He();
            var Me = Re("模型设置");
            O(ee, Me);
          },
          $$slots: { default: !0 }
        });
        var k = Z($, 4), h = W(k);
        const C = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ee) => {
            const Ve = ee.value;
            l(o, () => ({ llmId: Ve }));
          },
          get value() {
            return g(C);
          }
        });
        var y = Z(h, 2);
        Ui(y, {}), K(k);
        var _ = Z(k, 4), M = W(_), E = W(M), z = W(E);
        K(E);
        var V = Z(E, 2);
        oo(V), K(M), K(_);
        var D = Z(_, 2), A = W(D), T = W(A), R = W(T);
        K(T);
        var S = Z(T, 2);
        oo(S), K(A), K(D);
        var N = Z(D, 2), x = W(N), P = W(x), H = W(P);
        K(P);
        var L = Z(P, 2);
        oo(L), K(x), K(N);
        var I = Z(N, 4), Y = W(I);
        const j = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        Tt(Y, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (ee) => {
            l(o, { systemPrompt: ee.target.value });
          }
        }), K(I);
        var se = Z(I, 4), G = W(se);
        const X = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        Tt(G, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (ee) => {
            l(o, { userPrompt: ee.target.value });
          }
        }), K(se);
        var oe = Z(se, 2), ve = W(oe);
        Je(ve, {
          level: 3,
          mt: "10px",
          children: (ee, Ve) => {
            He();
            var Me = Re("输出参数");
            O(ee, Me);
          },
          $$slots: { default: !0 }
        });
        var pe = Z(ve, 2);
        const ue = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        un(pe, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ee) => {
            const Ve = ee.value;
            l(o, () => ({ outType: Ve }));
          },
          get value() {
            return g(ue);
          }
        });
        var Ne = Z(pe, 2);
        Ge(Ne, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ee, Ve) => {
            var Me = Ty();
            O(ee, Me);
          },
          $$slots: { default: !0 }
        }), K(oe);
        var ie = Z(oe, 2);
        Zn(ie, {}), _e(() => {
          Bt(z, `Temperature: ${n().temperature ?? 0.5}`), na(V, n().temperature ?? 0.5), Bt(R, `Top P: ${n().topP ?? 0.9}`), na(S, n().topP ?? 0.9), Bt(H, `Top K: ${n().topK ?? 50}`), na(L, n().topK ?? 50);
        }), Ye("mousedown", V, ra(function(ee) {
          De.call(this, t, ee);
        })), Ye("input", V, (ee) => l(o, { temperature: parseFloat(ee.target.value) })), Ye("mousedown", S, ra(function(ee) {
          De.call(this, t, ee);
        })), Ye("input", S, (ee) => l(o, { topP: parseFloat(ee.target.value) })), Ye("mousedown", L, ra(function(ee) {
          De.call(this, t, ee);
        })), Ye("input", L, (ee) => l(o, { topK: parseInt(ee.target.value) })), O(u, d);
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
ae(Id, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ry = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), Qe(e, Ry);
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
  const o = gt(), { addParameter: i } = En(), { updateNodeData: a } = Lt(), s = [
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
        var u = Oy();
        O(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = be(c), f = W(d);
        Je(f, {
          level: 3,
          children: (D, A) => {
            He();
            var T = Re("输入参数");
            O(D, T);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        Ge(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, A) => {
            var T = Ay();
            O(D, T);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = Z(d, 2);
        Zt(w, {});
        var b = Z(w, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            He();
            var T = Re("代码");
            O(D, T);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), k = W($);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        un(k, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const A = D.value;
            a(o, () => ({ engine: A }));
          },
          get value() {
            return g(h);
          }
        }), K($);
        var C = Z($, 4), y = W(C);
        const _ = /* @__PURE__ */ Pe(() => n().code || "");
        Tt(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (D) => {
            a(o, () => ({ code: D.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(C);
        var M = Z(C, 2), E = W(M);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            He();
            var T = Re("输出参数");
            O(D, T);
          },
          $$slots: { default: !0 }
        });
        var z = Z(E, 2);
        Ge(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, A) => {
            var T = Iy();
            O(D, T);
          },
          $$slots: { default: !0 }
        }), K(M);
        var V = Z(M, 2);
        Zn(V, {}), O(l, c);
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
ae(Zd, { data: {} }, [], [], !0);
var By = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Yy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rd(e, t) {
  de(t, !0), Qe(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En(), { updateNodeData: a } = Lt();
  return Gn(() => {
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
        var l = By();
        O(s, l);
      },
      children: (s, l) => {
        var u = Ky(), c = be(u), d = W(c);
        Je(d, {
          level: 3,
          children: (_, M) => {
            He();
            var E = Re("输入参数");
            O(_, E);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        Ge(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, M) => {
            var E = Yy();
            O(_, E);
          },
          $$slots: { default: !0 }
        }), K(c);
        var v = Z(c, 2);
        Zt(v, {});
        var w = Z(v, 2);
        Je(w, {
          level: 3,
          mt: "10px",
          children: (_, M) => {
            He();
            var E = Re("代码");
            O(_, E);
          },
          $$slots: { default: !0 }
        });
        var b = Z(w, 4), $ = W(b);
        const k = /* @__PURE__ */ Pe(() => n().template || "");
        Tt($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            a(o, () => ({ template: _.target.value }));
          },
          get value() {
            return g(k);
          }
        }), K(b);
        var h = Z(b, 2), C = W(h);
        Je(C, {
          level: 3,
          mt: "10px",
          children: (_, M) => {
            He();
            var E = Re("输出参数");
            O(_, E);
          },
          $$slots: { default: !0 }
        }), K(h);
        var y = Z(h, 2);
        Zn(y, {}), O(s, u);
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
ae(Rd, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), jy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Qy = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), ew = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), tw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Bd(e, t) {
  de(t, !0), Qe(e, rw);
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
  ], i = gt(), { addParameter: a } = En(), { updateNodeData: s } = Lt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Xy();
        O(l, u);
      },
      children: (l, u) => {
        var c = nw(), d = be(c), f = W(d), v = W(f);
        const w = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        un(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const ce = le.value;
            s(i, () => ({ method: ce }));
          },
          get value() {
            return g(w);
          }
        }), K(f);
        var b = Z(f, 2), $ = W(b);
        const k = /* @__PURE__ */ Pe(() => n().url || "");
        $t($, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return g(k);
          }
        }), K(b), K(d);
        var h = Z(d, 2), C = W(h);
        Je(C, {
          level: 3,
          children: (le, ce) => {
            He();
            var Ce = Re("Http 头信息");
            O(le, Ce);
          },
          $$slots: { default: !0 }
        });
        var y = Z(C, 2);
        Ge(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, ce) => {
            var Ce = jy();
            O(le, Ce);
          },
          $$slots: { default: !0 }
        }), K(h);
        var _ = Z(h, 2);
        Zt(_, { dataKeyName: "headers" });
        var M = Z(_, 2), E = W(M);
        Je(E, {
          level: 3,
          children: (le, ce) => {
            He();
            var Ce = Re("参数");
            O(le, Ce);
          },
          $$slots: { default: !0 }
        });
        var z = Z(E, 2);
        Ge(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (le, ce) => {
            var Ce = qy();
            O(le, Ce);
          },
          $$slots: { default: !0 }
        }), K(M);
        var V = Z(M, 2);
        Zt(V, { dataKeyName: "urlParameters" });
        var D = Z(V, 2);
        Je(D, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            He();
            var Ce = Re("Body");
            O(le, Ce);
          },
          $$slots: { default: !0 }
        });
        var A = Z(D, 2), T = W(A), R = W(T);
        const S = /* @__PURE__ */ Pe(() => !n().bodyType);
        $t(R, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "" });
          }
        }), He(), K(T);
        var N = Z(T, 2), x = W(N);
        const P = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        $t(x, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "form-data" });
          }
        }), He(), K(N);
        var H = Z(N, 2), L = W(H);
        const I = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        $t(L, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(I);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), He(), K(H);
        var Y = Z(H, 2), j = W(Y);
        const se = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        $t(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(se);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "json" });
          }
        }), He(), K(Y);
        var G = Z(Y, 2), X = W(G);
        const oe = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        $t(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(oe);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "raw" });
          }
        }), He(), K(G), K(A);
        var ve = Z(A, 2);
        {
          var pe = (le) => {
            var ce = Gy(), Ce = be(ce), Xe = W(Ce);
            Je(Xe, {
              level: 3,
              children: (it, Q) => {
                He();
                var Ae = Re("参数");
                O(it, Ae);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Xe, 2);
            Ge(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, Q) => {
                var Ae = Fy();
                O(it, Ae);
              },
              $$slots: { default: !0 }
            }), K(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromData" }), O(le, ce);
          };
          xe(ve, (le) => {
            n().bodyType === "form-data" && le(pe);
          });
        }
        var ue = Z(ve, 2);
        {
          var Ne = (le) => {
            var ce = Jy(), Ce = be(ce), Xe = W(Ce);
            Je(Xe, {
              level: 3,
              children: (it, Q) => {
                He();
                var Ae = Re("参数");
                O(it, Ae);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Xe, 2);
            Ge(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, Q) => {
                var Ae = Uy();
                O(it, Ae);
              },
              $$slots: { default: !0 }
            }), K(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), O(le, ce);
          };
          xe(ue, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(Ne);
          });
        }
        var ie = Z(ue, 2);
        {
          var ee = (le) => {
            var ce = Qy(), Ce = W(ce);
            Tt(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Xe) => {
                s(i, { bodyJson: Xe.target.value });
              }
            }), K(ce), O(le, ce);
          };
          xe(ie, (le) => {
            n().bodyType === "json" && le(ee);
          });
        }
        var Ve = Z(ie, 2);
        {
          var Me = (le) => {
            var ce = ew(), Ce = W(ce);
            Tt(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Xe) => {
                s(i, { bodyRaw: Xe.target.value });
              }
            }), K(ce), O(le, ce);
          };
          xe(Ve, (le) => {
            n().bodyType === "raw" && le(Me);
          });
        }
        var Be = Z(Ve, 2), te = W(Be);
        Je(te, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            He();
            var Ce = Re("输出参数");
            O(le, Ce);
          },
          $$slots: { default: !0 }
        });
        var We = Z(te, 2);
        Ge(We, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, ce) => {
            var Ce = tw();
            O(le, Ce);
          },
          $$slots: { default: !0 }
        }), K(Be);
        var Ue = Z(Be, 2);
        Zn(Ue, {}), O(l, c);
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
ae(Bd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), iw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  de(t, !0), Qe(e, sw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En(), a = On();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return Gn(() => {
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
        O(u, c);
      },
      children: (u, c) => {
        var d = aw(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (T, R) => {
            He();
            var S = Re("输入参数");
            O(T, S);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Ge(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, R) => {
            var S = iw();
            O(T, S);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        Zt(b, {});
        var $ = Z(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (T, R) => {
            He();
            var S = Re("知识库设置");
            O(T, S);
          },
          $$slots: { default: !0 }
        });
        var k = Z($, 4), h = W(k);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (T) => {
            const R = T.value;
            l(o, () => ({ knowledgeId: R }));
          },
          get value() {
            return g(C);
          }
        }), K(k);
        var y = Z(k, 4), _ = W(y);
        $t(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (T) => {
            const R = T.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), K(y);
        var M = Z(y, 4), E = W(M);
        const z = /* @__PURE__ */ Pe(() => n().limit || "");
        $t(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (T) => {
            const R = T.target.value;
            l(o, () => ({ limit: R }));
          },
          get value() {
            return g(z);
          }
        }), K(M);
        var V = Z(M, 2), D = W(V);
        Je(D, {
          level: 3,
          mt: "10px",
          children: (T, R) => {
            He();
            var S = Re("输出参数");
            O(T, S);
          },
          $$slots: { default: !0 }
        }), K(V);
        var A = Z(V, 2);
        Zn(A, {}), O(u, d);
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
ae(Yd, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), uw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  de(t, !0), Qe(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En(), a = On();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return Gn(() => {
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
        O(u, c);
      },
      children: (u, c) => {
        var d = cw(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (A, T) => {
            He();
            var R = Re("输入参数");
            O(A, R);
          },
          $$slots: { default: !0 }
        });
        var w = Z(v, 2);
        Ge(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, T) => {
            var R = uw();
            O(A, R);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        Zt(b, {});
        var $ = Z(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (A, T) => {
            He();
            var R = Re("搜索引擎设置");
            O(A, R);
          },
          $$slots: { default: !0 }
        });
        var k = Z($, 4), h = W(k);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (A) => {
            const T = A.value;
            l(o, () => ({ engine: T }));
          },
          get value() {
            return g(C);
          }
        }), K(k);
        var y = Z(k, 4), _ = W(y);
        $t(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const T = A.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), K(y);
        var M = Z(y, 4), E = W(M);
        $t(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const T = A.target.value;
            l(o, () => ({ limit: T }));
          }
        }), K(M);
        var z = Z(M, 2), V = W(z);
        Je(V, {
          level: 3,
          mt: "10px",
          children: (A, T) => {
            He();
            var R = Re("输出参数");
            O(A, R);
          },
          $$slots: { default: !0 }
        }), K(z);
        var D = Z(z, 2);
        Zn(D, {}), O(u, d);
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
ae(Kd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), vw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const hw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  de(t, !0), Qe(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = En(), a = On();
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
        O(l, u);
      },
      handle: (l) => {
        Jn(l, {
          type: "source",
          get position() {
            return ke.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = gw(), d = be(c), f = W(d);
        Je(f, {
          level: 3,
          children: (h, C) => {
            He();
            var y = Re("循环变量");
            O(h, y);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        Ge(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (h, C) => {
            var y = vw();
            O(h, y);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = Z(d, 2);
        Zt(w, {});
        var b = Z(w, 2), $ = W(b);
        Je($, {
          level: 3,
          mt: "10px",
          children: (h, C) => {
            He();
            var y = Re("输出参数");
            O(h, y);
          },
          $$slots: { default: !0 }
        }), K(b);
        var k = Z(b, 2);
        Zn(k, {}), O(l, c);
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
ae(Wd, { data: {} }, [], [], !0);
const pw = {
  startNode: Td,
  codeNode: Zd,
  llmNode: Id,
  templateNode: Rd,
  httpNode: Bd,
  knowledgeNode: Yd,
  searchEngineNode: Kd,
  loopNode: Wd,
  endNode: Od
};
var mw = /* @__PURE__ */ re("<!> ", 1);
function Ia(e, t) {
  de(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), a = m(t, "extra", 7);
  return Ge(e, {
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
      _e(() => Bt(d, ` ${r() ?? ""}`)), O(s, u);
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
ae(
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
function Xd(e, t) {
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
  ], a = [], s = On().customNodes;
  if (s) {
    const $ = Object.keys(s).sort((k, h) => (s[k].sortNo || 0) - (s[h].sortNo || 0));
    for (let k of $)
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
    onChange: ($) => {
      F(n, $.value.toString(), !0);
    }
  }), K(c);
  var f = Z(c, 2), v = W(f);
  zt(v, 21, () => o, vo, ($, k) => {
    Ia($, ct(() => g(k)));
  }), K(v);
  var w = Z(v, 2);
  zt(w, 21, () => a, vo, ($, k) => {
    Ia($, ct(() => g(k)));
  }), K(w), K(f), K(u);
  var b = Z(u, 2);
  Ge(b, {
    onclick: () => {
      F(r, g(r) ? "" : "show", !0);
    },
    children: ($, k) => {
      var h = et(), C = be(h);
      {
        var y = (M) => {
          var E = yw();
          O(M, E);
        }, _ = (M) => {
          var E = ww();
          O(M, E);
        };
        xe(C, (M) => {
          g(r) === "show" ? M(y) : M(_, !1);
        });
      }
      O($, h);
    },
    $$slots: { default: !0 }
  }), K(l), _e(() => {
    mt(l, 1, `tf-toolbar ${g(r) ?? ""}`), dt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), dt(w, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, l), fe();
}
ae(Xd, {}, [], [], !0);
const xw = () => {
  const { nodeLookup: e } = Fe();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, $w = () => {
  const { nodes: e } = Fe();
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
  const { edges: e } = Fe();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var kw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Sw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ re("<!> <div></div> <!>", 1);
const Mw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function jd(e, t) {
  var n;
  de(t, !0), Qe(e, Mw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = En(), s = Lt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = On().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  Gn(() => {
    r().expand && d && d.append(u);
  }), Gn(() => {
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
        rs(b, () => c.icon), O(v, w);
      },
      children: (v, w) => {
        var b = Pw(), $ = be(b);
        {
          var k = (_) => {
            var M = _w(), E = be(M), z = W(E);
            Je(z, {
              level: 3,
              children: (A, T) => {
                He();
                var R = Re("输入参数");
                O(A, R);
              },
              $$slots: { default: !0 }
            });
            var V = Z(z, 2);
            Ge(V, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (A, T) => {
                var R = kw();
                O(A, R);
              },
              $$slots: { default: !0 }
            }), K(E);
            var D = Z(E, 2);
            Zt(D, {}), O(_, M);
          };
          xe($, (_) => {
            c.parametersEnable !== !1 && _(k);
          });
        }
        var h = Z($, 2);
        Cn(h, (_) => d = _, () => d);
        var C = Z(h, 2);
        {
          var y = (_) => {
            var M = Ew(), E = be(M), z = W(E);
            Je(z, {
              level: 3,
              mt: "10px",
              children: (A, T) => {
                He();
                var R = Re("输出参数");
                O(A, R);
              },
              $$slots: { default: !0 }
            });
            var V = Z(z, 2);
            Ge(V, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (A, T) => {
                var R = Sw();
                O(A, R);
              },
              $$slots: { default: !0 }
            }), K(E);
            var D = Z(E, 2);
            Zn(D, {}), O(_, M);
          };
          xe(C, (_) => {
            c.outputDefsEnable !== !1 && _(y);
          });
        }
        _e(() => {
          dt(h, c.rootStyle || ""), mt(h, 1, fn(c.rootClass), "svelte-c71dg3");
        }), O(v, b);
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
ae(jd, { data: {} }, [], [], !0);
var Hw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Nw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Vw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const zw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function qd(e, t) {
  de(t, !0), Qe(e, zw);
  const [n, r] = tt(), o = () => J(M, "$nodes", n), i = () => J(E, "$edges", n), a = () => J(z, "$viewport", n), s = m(t, "onInit", 7), l = Lt();
  s()(l);
  let u = /* @__PURE__ */ xt(!1);
  const c = (x) => {
    x.preventDefault(), x.dataTransfer && (x.dataTransfer.dropEffect = "move");
  }, d = (x) => {
    var P;
    x.preventDefault();
    const H = l.screenToFlowPosition({
      x: x.clientX - 250,
      y: x.clientY - 100
    }), L = (P = x.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), I = L ? JSON.parse(L) : {}, Y = {
      id: `node_${Zr()}`,
      position: H,
      data: {},
      ...I
    };
    ti.addNode(Y), ti.selectNodeOnly(Y.id);
  }, { getNode: f } = xw(), v = (x) => {
    const P = f(x.source), H = f(x.target);
    if (x.sourceHandle === "loop_handle" || P.parentId) {
      const L = l.getEdges();
      for (let I of L)
        if (I.target === x.target) {
          const Y = f(I.source);
          if (x.sourceHandle === "loop_handle" && Y.parentId !== P.id || P.parentId && Y.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && H.parentId && H.parentId !== P.id);
  }, { ensureParentInNodesBefore: w } = $w(), b = (x, P) => {
    if (!P.isValid)
      return;
    const H = P.toNode;
    if (H.parentId)
      return;
    const L = P.fromNode, I = P.fromHandle, Y = { position: { ...H.position } };
    if (I.id === "loop_handle" ? Y.parentId = L.id : L.parentId && (Y.parentId = L.parentId), Y.parentId) {
      const j = f(Y.parentId);
      Y.position = {
        x: H.position.x - j.position.x,
        y: H.position.y - j.position.y
      }, w(Y.parentId, H.id), l.updateNode(H.id, Y);
    }
  }, { getEdgesByTarget: $ } = Cw(), k = (x) => {
    x.edges.forEach((P) => {
      const H = f(P.target);
      if (H.parentId) {
        const L = $(P.target), I = f(H.parentId);
        if (L.length === 0)
          l.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + I.position.x,
              y: H.position.y + I.position.y
            }
          });
        else {
          let Y = !1;
          for (let j = 0; j < L.length; j++) {
            const se = L[j], G = f(se.source);
            if (G.parentId || G.type === "loopNode") {
              Y = !0;
              break;
            }
          }
          Y || l.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + I.position.x,
              y: H.position.y + I.position.y
            }
          });
        }
      }
    });
  }, h = (x, P) => {
  }, C = (x) => {
  }, y = {}, _ = On().customNodes;
  if (_)
    for (let x of Object.keys(_))
      y[x] = jd;
  const { nodes: M, edges: E, viewport: z } = Fe(), V = On().onDataChange;
  V && (M.subscribe(() => {
    V(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), E.subscribe(() => {
    V(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), z.subscribe(() => {
    V(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var D = Vw(), A = W(D);
  const T = /* @__PURE__ */ Pe(() => ({ ...pw, ...y })), R = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  td(A, ct(
    {
      get nodeTypes() {
        return g(T);
      }
    },
    ti,
    {
      class: "tinyflow-logo",
      isValidConnection: v,
      onconnectend: b,
      onconnectstart: h,
      onconnect: C,
      connectionRadius: 50,
      ondelete: k,
      onclick: (x) => {
        const P = x.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || F(u, !1);
      },
      get defaultEdgeOptions() {
        return g(R);
      },
      $$events: {
        drop: d,
        dragover: c,
        edgeclick: () => {
          F(u, !0);
        }
      },
      children: (x, P) => {
        var H = Nw(), L = be(H);
        dd(L, {});
        var I = Z(L, 2);
        ld(I, {});
        var Y = Z(I, 2);
        vd(Y, {});
        var j = Z(Y, 2);
        {
          var se = (G) => {
            zo(G, {
              children: (X, oe) => {
                var ve = Hw(), pe = Z(W(ve), 4), ue = W(pe);
                Tt(ue, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Ne) => {
                  }
                }), K(pe), K(ve), O(X, ve);
              },
              $$slots: { default: !0 }
            });
          };
          xe(j, (G) => {
            g(u) && G(se);
          });
        }
        O(x, H);
      },
      $$slots: { default: !0 }
    }
  ));
  var S = Z(A, 2);
  Xd(S, {}), K(D), O(e, D);
  var N = fe({
    get onInit() {
      return s();
    },
    set onInit(x) {
      s(x), p();
    }
  });
  return r(), N;
}
ae(qd, { onInit: {} }, [], [], !0);
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
  return ti.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Nr("tinyflow_options", n()), nd(e, {
    fitView: !0,
    children: (i, a) => {
      qd(i, {
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
customElements.define("tinyflow-component", ae(Tw, { options: {}, onInit: {} }, [], [], !1));
const Rw = /* @__PURE__ */ cf({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function },
    onDataChange: { type: Function }
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
    }), (a, s) => (hf(), gf("div", {
      ref_key: "divRef",
      ref: r,
      class: mf(["tinyflow", a.className]),
      style: pf(a.style)
    }, null, 6));
  }
});
export {
  Rw as Tinyflow
};
//# sourceMappingURL=index.js.map
