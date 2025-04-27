import { defineComponent as l1, ref as u1, onMounted as c1, onUnmounted as d1, createElementBlock as f1, openBlock as v1, normalizeStyle as g1, normalizeClass as h1 } from "vue";
var p1 = Object.defineProperty, Kl = (e) => {
  throw TypeError(e);
}, m1 = (e, t, n) => t in e ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vt = (e, t, n) => m1(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Kl("Cannot " + n), ut = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? Kl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ri = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), y1 = (e, t, n) => (Za(e, t, "access private method"), n);
const w1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(w1);
let Br = !1, x1 = !1;
function b1() {
  Br = !0;
}
b1();
const qa = 1, Ba = 2, Yl = 4, $1 = 8, C1 = 16, _1 = 1, k1 = 2, Wl = 4, S1 = 8, E1 = 16, jl = 1, P1 = 2, Xa = "[", Ka = "[!", Ya = "]", Cr = {}, Ot = Symbol(), M1 = "http://www.w3.org/1999/xhtml", H1 = "http://www.w3.org/2000/svg", O1 = !1;
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var So = Array.isArray, L1 = Array.prototype.indexOf, Wa = Array.from, oi = Object.keys, uo = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, V1 = Object.prototype, D1 = Array.prototype, ja = Object.getPrototypeOf, Ts = Object.isExtensible;
function Qr(e) {
  return typeof e == "function";
}
const vt = () => {
};
function T1(e) {
  return e();
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cn = 2, Gl = 4, Li = 8, Fa = 16, An = 32, gr = 64, ii = 128, qt = 256, ai = 512, Et = 1024, xn = 2048, er = 4096, Vn = 8192, Vi = 16384, z1 = 32768, Xr = 65536, N1 = 1 << 17, A1 = 1 << 19, Ul = 1 << 20, ha = 1 << 21, Yn = Symbol("$state"), Ga = Symbol("legacy props"), I1 = Symbol("");
function R1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Z1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function q1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function B1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function X1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function K1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Y1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function W1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function j1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Oe = !1;
function Rt(e) {
  Oe = e;
}
let Ie;
function St(e) {
  if (e === null)
    throw Di(), Cr;
  return Ie = e;
}
function bn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ie)
  );
}
function q(e) {
  if (Oe) {
    if (/* @__PURE__ */ Sn(Ie) !== null)
      throw Di(), Cr;
    Ie = e;
  }
}
function De(e = 1) {
  if (Oe) {
    for (var t = e, n = Ie; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ie = n;
  }
}
function pa() {
  for (var e = 0, t = Ie; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ya) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Xa || n === Ka) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(t)
    );
    t.remove(), t = r;
  }
}
function sn(e) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const t = ja(e);
  if (t !== V1 && t !== D1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = So(e), o = /* @__PURE__ */ _t(0), i = Fe, a = (s) => {
    var l = Fe;
    $n(i);
    var u = s();
    return $n(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ _t(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Y1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ _t(u.value)), n.set(l, c)) : J(
          c,
          a(() => sn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ _t(Ot))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Ot), zs(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Ln(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ _t(sn(v ? s[l] : Ot))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Ot ? void 0 : g;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = n.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== Ot)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === Yn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ot || Reflect.has(s, l);
        if (c !== void 0 || Ge !== null && (!d || (u = Ln(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ _t(d ? sn(s[l]) : Ot)), n.set(l, c));
          var v = f(c);
          if (v === Ot)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var x = n.get(p + "");
            x !== void 0 ? J(x, Ot) : p in s && (x = a(() => /* @__PURE__ */ _t(Ot)), n.set(p + "", x));
          }
        v === void 0 ? (!g || (d = Ln(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ _t(void 0)), J(
          v,
          a(() => sn(u))
        ), n.set(l, v)) : (g = v.v !== Ot, J(
          v,
          a(() => sn(u))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(c, u), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= $.v && J($, h + 1);
          }
          zs(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Ot;
        });
        for (var [u, c] of n)
          c.v !== Ot && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        W1();
      }
    }
  );
}
function zs(e, t = 1) {
  J(e, e.v + t);
}
var Lt, Jl, Ql, eu;
function ma() {
  if (Lt === void 0) {
    Lt = window, Jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ql = Ln(t, "firstChild").get, eu = Ln(t, "nextSibling").get, Ts(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ts(n) && (n.__t = void 0);
  }
}
function Tn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return Ql.call(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return eu.call(e);
}
function K(e, t) {
  if (!Oe)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(Tn());
  else if (t && n.nodeType !== 3) {
    var r = Tn();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function we(e, t) {
  if (!Oe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sn(n) : n;
  }
  return Ie;
}
function Z(e, t = 1, n = !1) {
  let r = Oe ? Ie : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!Oe)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Tn();
    return r === null ? o == null || o.after(a) : r.before(a), St(a), a;
  }
  return St(r), /** @type {TemplateNode} */
  r;
}
function Ua(e) {
  e.textContent = "";
}
function tu(e) {
  return e === this.v;
}
function Ja(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qa(e) {
  return !Ja(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = cn | xn, n = Fe !== null && Fe.f & cn ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Ge === null || n !== null && n.f & qt ? t |= qt : Ge.f |= Ul, {
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
    parent: n ?? Ge
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Mr(e);
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = Qa, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Gt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function F1(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & cn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ru(e) {
  var t, n = Ge;
  Gn(F1(e));
  try {
    nu(e), t = mu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function ou(e) {
  var t = ru(e), n = (Xn || e.f & qt) && e.deps !== null ? er : Et;
  Ut(e, n), e.equals(t) || (e.v = t, e.wv = hu());
}
function iu(e) {
  Ge === null && Fe === null && q1(), Fe !== null && Fe.f & qt && Ge === null && Z1(), Po && R1();
}
function G1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xn,
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
      zi(i), i.f |= z1;
    } catch (l) {
      throw Gt(i), l;
    }
  else t !== null && Ni(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ul | ii)) === 0;
  if (!a && r && (o !== null && G1(i, o), Fe !== null && Fe.f & cn)) {
    var s = (
      /** @type {Derived} */
      Fe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function es(e) {
  const t = hr(Li, null, !1);
  return Ut(t, Et), t.teardown = e, t;
}
function un(e) {
  iu();
  var t = Ge !== null && (Ge.f & An) !== 0 && Ye !== null && !Ye.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ge,
      reaction: Fe
    });
  } else {
    var r = It(e);
    return r;
  }
}
function U1(e) {
  return iu(), Kr(e);
}
function J1(e) {
  const t = hr(gr, e, !0);
  return () => {
    Gt(t);
  };
}
function Q1(e) {
  const t = hr(gr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Gt(t), r(void 0);
    }) : (Gt(t), r(void 0));
  });
}
function It(e) {
  return hr(Gl, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function mt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ye
  );
  Kr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Et && Ut(n, er), Yr(n) && zi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return hr(Li, e, !0);
}
function Se(e, t = [], n = Mr) {
  const r = t.map(n);
  return pr(() => e(...r.map(f)));
}
function pr(e, t = 0) {
  return hr(Li | Fa | t, e, !0);
}
function zn(e, t = !0) {
  return hr(Li | An, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Po, r = Fe;
    As(!0), $n(null);
    try {
      t.call(null);
    } finally {
      As(n), $n(r);
    }
  }
}
function su(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & gr ? n.parent = null : Gt(n, t), n = r;
  }
}
function ef(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & An || Gt(t), t = n;
  }
}
function Gt(e, t = !0) {
  var n = !1;
  if ((t || e.f & A1) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Sn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  su(e, t && !n), ci(e, 0), Ut(e, Vi);
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
  ts(e, n, !0), uu(n, () => {
    Gt(e), t && t();
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
function ts(e, t, n) {
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & An) !== 0;
      ts(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & Et || (e.f ^= Et), Yr(e) && (Ut(e, xn), Ni(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & An) !== 0;
      cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const tf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let vo = [], go = [];
function du() {
  var e = vo;
  vo = [], co(e);
}
function fu() {
  var e = go;
  go = [], co(e);
}
function Eo(e) {
  vo.length === 0 && queueMicrotask(du), vo.push(e);
}
function nf(e) {
  go.length === 0 && tf(fu), go.push(e);
}
function Ns() {
  vo.length > 0 && du(), go.length > 0 && fu();
}
let Fo = !1, si = !1, li = null, ir = !1, Po = !1;
function As(e) {
  Po = e;
}
let so = [], Fe = null, mn = !1;
function $n(e) {
  Fe = e;
}
let Ge = null;
function Gn(e) {
  Ge = e;
}
let Ft = null;
function rf(e) {
  Ft = e;
}
function vu(e) {
  Fe !== null && Fe.f & ha && (Ft === null ? rf([e]) : Ft.push(e));
}
let Ct = null, At = 0, Wt = null;
function of(e) {
  Wt = e;
}
let gu = 1, ui = 0, Xn = !1;
function hu() {
  return ++gu;
}
function Yr(e) {
  var t, n = e.f;
  if (n & xn)
    return !0;
  if (n & er) {
    var r = e.deps, o = (n & qt) !== 0;
    if (r !== null) {
      var i, a, s = (n & ai) !== 0, l = o && Ge !== null && !Xn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ai), l && d !== null && !(d.f & qt) && (c.f ^= qt);
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
    (!o || Ge !== null && !Xn) && Ut(e, Et);
  }
  return !1;
}
function af(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ii)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ii;
      }
    n = n.parent;
  }
  throw Fo = !1, e;
}
function sf(e) {
  return (e.f & Vi) === 0 && (e.parent === null || (e.parent.f & ii) === 0);
}
function Ti(e, t, n, r) {
  if (Fo) {
    if (n === null && (Fo = !1), sf(t))
      throw e;
    return;
  }
  n !== null && (Fo = !0);
  {
    af(e, t);
    return;
  }
}
function pu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ft != null && Ft.includes(e) || (i.f & cn ? pu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ut(i, xn) : i.f & Et && Ut(i, er), Ni(
        /** @type {Effect} */
        i
      )));
    }
}
function mu(e) {
  var t, n = Ct, r = At, o = Wt, i = Fe, a = Xn, s = Ft, l = Ye, u = mn, c = e.f;
  Ct = /** @type {null | Value[]} */
  null, At = 0, Wt = null, Xn = (c & qt) !== 0 && (mn || !ir || Fe === null), Fe = c & (An | gr) ? null : e, Ft = null, Rs(e.ctx), mn = !1, ui++, e.f |= ha;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (Ct !== null) {
      var g;
      if (ci(e, At), v !== null && At > 0)
        for (v.length = At + Ct.length, g = 0; g < Ct.length; g++)
          v[At + g] = Ct[g];
      else
        e.deps = v = Ct;
      if (!Xn)
        for (g = At; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && At < v.length && (ci(e, At), v.length = At);
    if (Ai() && Wt !== null && !mn && v !== null && !(e.f & (cn | er | xn)))
      for (g = 0; g < /** @type {Source[]} */
      Wt.length; g++)
        pu(
          Wt[g],
          /** @type {Effect} */
          e
        );
    return i !== e && (ui++, Wt !== null && (o === null ? o = Wt : o.push(.../** @type {Source[]} */
    Wt))), d;
  } finally {
    Ct = n, At = r, Wt = o, Fe = i, Xn = a, Ft = s, Rs(l), mn = u, e.f ^= ha;
  }
}
function lf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = L1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & cn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ct === null || !Ct.includes(t)) && (Ut(t, er), t.f & (qt | ai) || (t.f ^= ai), nu(
    /** @type {Derived} **/
    t
  ), ci(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ci(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      lf(e, n[r]);
}
function zi(e) {
  var t = e.f;
  if (!(t & Vi)) {
    Ut(e, Et);
    var n = Ge, r = Ye, o = ir;
    Ge = e, ir = !0;
    try {
      t & Fa ? ef(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = gu;
      var a = e.deps, s;
      O1 && x1 && e.f & xn;
    } catch (l) {
      Ti(l, e, n, r || e.ctx);
    } finally {
      ir = o, Ge = n;
    }
  }
}
function uf() {
  try {
    B1();
  } catch (e) {
    if (li !== null)
      Ti(e, li, null);
    else
      throw e;
  }
}
function yu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; so.length > 0; ) {
      t++ > 1e3 && uf();
      var n = so, r = n.length;
      so = [];
      for (var o = 0; o < r; o++) {
        var i = df(n[o]);
        cf(i);
      }
      ho.clear();
    }
  } finally {
    si = !1, ir = e, li = null;
  }
}
function cf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Vi | Vn)))
        try {
          Yr(r) && (zi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          Ti(o, r, null, r.ctx);
        }
    }
}
function Ni(e) {
  si || (si = !0, queueMicrotask(yu));
  for (var t = li = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (gr | An)) {
      if (!(n & Et)) return;
      t.f ^= Et;
    }
  }
  so.push(t);
}
function df(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (An | gr)) !== 0, i = o && (r & Et) !== 0;
    if (!i && !(r & Vn)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= Et;
      else {
        var a = Fe;
        try {
          Fe = n, Yr(n) && zi(n);
        } catch (u) {
          Ti(u, n, null, n.ctx);
        } finally {
          Fe = a;
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
function m(e) {
  var t;
  for (Ns(); so.length > 0; )
    si = !0, yu(), Ns();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & cn) !== 0;
  if (Fe !== null && !mn) {
    if (!(Ft != null && Ft.includes(e))) {
      var r = Fe.deps;
      e.rv < ui && (e.rv = ui, Ct === null && r !== null && r[At] === e ? At++ : Ct === null ? Ct = [e] : (!Xn || !Ct.includes(e)) && Ct.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & qt) && (o.f ^= qt);
  }
  return n && (o = /** @type {Derived} */
  e, Yr(o) && ou(o)), Po && ho.has(e) ? ho.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const ff = -7169;
function Ut(e, t) {
  e.f = e.f & ff | t;
}
function Q(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Yn in e)
      ya(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Yn in n && ya(n);
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
const ho = /* @__PURE__ */ new Map();
function Or(e, t) {
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
function _t(e, t) {
  const n = Or(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Or(e);
  return t || (r.equals = Qa), Br && Ye !== null && Ye.l !== null && ((n = Ye.l).s ?? (n.s = [])).push(r), r;
}
function J(e, t, n = !1) {
  Fe !== null && !mn && Ai() && Fe.f & (cn | Fa) && !(Ft != null && Ft.includes(e)) && j1();
  let r = n ? sn(t) : t;
  return wa(e, r);
}
function wa(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Po ? ho.set(e, t) : ho.set(e, n), e.v = t, e.f & cn && (e.f & xn && ru(
      /** @type {Derived} */
      e
    ), Ut(e, e.f & qt ? er : Et)), e.wv = hu(), wu(e, xn), Ai() && Ge !== null && Ge.f & Et && !(Ge.f & (An | gr)) && (Wt === null ? of([e]) : Wt.push(e));
  }
  return t;
}
function Is(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function wu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ai(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & xn || !r && a === Ge || (Ut(a, t), s & (Et | qt) && (s & cn ? wu(
        /** @type {Derived} */
        a,
        er
      ) : Ni(
        /** @type {Effect} */
        a
      )));
    }
}
let Ye = null;
function Rs(e) {
  Ye = e;
}
function lr(e) {
  return (
    /** @type {T} */
    ns().get(e)
  );
}
function Lr(e, t) {
  return ns().set(e, t), t;
}
function vf(e) {
  return ns().has(e);
}
function fe(e, t = !1, n) {
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
    r2: Or(!1)
  }), es(() => {
    r.d = !0;
  });
}
function ve(e) {
  const t = Ye;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = Ge, r = Fe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Gn(i.effect), $n(i.reaction), It(i.fn);
        }
      } finally {
        Gn(n), $n(r);
      }
    }
    Ye = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ai() {
  return !Br || Ye !== null && Ye.l === null;
}
function ns(e) {
  return Ye === null && Oi(), Ye.c ?? (Ye.c = new Map(gf(Ye) || void 0));
}
function gf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function hf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const pf = [
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
function mf(e) {
  return pf.includes(e);
}
const yf = {
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
function wf(e) {
  return e = e.toLowerCase(), yf[e] ?? e;
}
const xf = ["touchstart", "touchmove"];
function bf(e) {
  return xf.includes(e);
}
const $f = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Cf(e) {
  return $f.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _f(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Eo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kf(e) {
  Oe && /* @__PURE__ */ kt(e) !== null && Ua(e);
}
let Zs = !1;
function Sf() {
  Zs || (Zs = !0, document.addEventListener(
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
function Ef(e) {
  var t = Fe, n = Ge;
  $n(null), Gn(null);
  try {
    return e();
  } finally {
    $n(t), Gn(n);
  }
}
const xu = /* @__PURE__ */ new Set(), xa = /* @__PURE__ */ new Set();
function bu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ro.call(t, i), !i.cancelBubble)
      return Ef(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function tt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = bu(e, t, n, i);
  (t === document.body || t === window || t === document) && es(() => {
    t.removeEventListener(e, a, i);
  });
}
function Wr(e) {
  for (var t = 0; t < e.length; t++)
    xu.add(e[t]);
  for (var n of xa)
    n(e);
}
function ro(e) {
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
    uo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = Fe, v = Ge;
    $n(null), Gn(null);
    try {
      for (var g, p = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (So(b)) {
              var [$, ...h] = b;
              $.apply(a, [e, ...h]);
            } else
              b.call(a, e);
        } catch (C) {
          g ? p.push(C) : g = C;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (g) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, $n(d), Gn(v);
    }
  }
}
function rs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & jl) !== 0, r = (t & P1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Oe)
      return Tt(Ie, null), Ie;
    o === void 0 && (o = rs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ kt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Jl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Tt(s, l);
    } else
      Tt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Oe)
      return Tt(Ie, null), Ie;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        rs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ kt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ kt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ kt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ kt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tt(c, d);
    } else
      Tt(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!Oe) {
    var t = Tn(e + "");
    return Tt(t, t), t;
  }
  var n = Ie;
  return n.nodeType !== 3 && (n.before(n = Tn()), St(n)), Tt(n, n), n;
}
function Je() {
  if (Oe)
    return Tt(Ie, null), Ie;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
  return e.append(t, n), Tt(t, n), e;
}
function N(e, t) {
  if (Oe) {
    Ge.nodes_end = Ie, bn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function dt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function $u(e, t) {
  return Cu(e, t);
}
function Pf(e, t) {
  ma(), t.intro = t.intro ?? !1;
  const n = t.target, r = Oe, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Xa); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw Cr;
    Rt(!0), St(
      /** @type {Comment} */
      i
    ), bn();
    const a = Cu(e, { ...t, anchor: i });
    if (Ie === null || Ie.nodeType !== 8 || /** @type {Comment} */
    Ie.data !== Ya)
      throw Di(), Cr;
    return Rt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Cr)
      return t.recover === !1 && X1(), ma(), Ua(n), Rt(!1), $u(e, t);
    throw a;
  } finally {
    Rt(r), St(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function Cu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ma();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = bf(g);
        t.addEventListener(g, ro, { passive: p });
        var x = wr.get(g);
        x === void 0 ? (document.addEventListener(g, ro, { passive: p }), wr.set(g, 1)) : wr.set(g, x + 1);
      }
    }
  };
  l(Wa(xu)), xa.add(l);
  var u = void 0, c = Q1(() => {
    var d = n ?? t.appendChild(Tn());
    return zn(() => {
      if (i) {
        fe({});
        var v = (
          /** @type {ComponentContext} */
          Ye
        );
        v.c = i;
      }
      o && (r.$$events = o), Oe && Tt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Oe && (Ge.nodes_end = Ie), i && ve();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, ro);
        var p = (
          /** @type {number} */
          wr.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, ro), wr.delete(g)) : wr.set(g, p);
      }
      xa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return ba.set(u, c), u;
}
let ba = /* @__PURE__ */ new WeakMap();
function Mf(e, t) {
  const n = ba.get(e);
  return n ? (ba.delete(e), n(t)) : Promise.resolve();
}
function ye(e, t, [n, r] = [0, 0]) {
  Oe && n === 0 && bn();
  var o = e, i = null, a = null, s = Ot, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (Oe && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Xa ? r = 0 : b === Ka ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = pa(), St(o), Rt(!1), p = !0, r = -1);
    }
    s ? (i ? fo(i) : g && (i = zn(() => g(o))), a && Hr(a, () => {
      a = null;
    })) : (a ? fo(a) : g && (a = zn(() => g(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), p && Rt(!0);
  };
  pr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Oe && (o = Ie);
}
function Vr(e, t) {
  return t;
}
function Hf(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    ts(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ua(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), qn(e, t[0].prev, t[i - 1].next);
  }
  uu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), qn(e, c.prev, c.next)), Gt(c.e, !s);
    }
  });
}
function Pt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Yl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Oe ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(Tn());
  }
  Oe && bn();
  var c = null, d = !1, v = /* @__PURE__ */ xe(() => {
    var g = n();
    return So(g) ? g : g == null ? [] : Wa(g);
  });
  pr(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let x = !1;
    if (Oe) {
      var b = (
        /** @type {Comment} */
        a.data === Ka
      );
      b !== (p === 0) && (a = pa(), St(a), Rt(!1), x = !0);
    }
    if (Oe) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Ie.nodeType === 8 && /** @type {Comment} */
        Ie.data === Ya) {
          a = /** @type {Comment} */
          Ie, x = !0, Rt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        h = _u(
          Ie,
          s,
          $,
          null,
          w,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), $ = h;
      }
      p > 0 && St(pa());
    }
    Oe || Of(g, s, a, o, t, r, n), i !== null && (p === 0 ? c ? fo(c) : c = zn(() => i(a)) : c !== null && Hr(c, () => {
      c = null;
    })), x && Rt(!0), f(v);
  }), Oe && (a = Ie);
}
function Of(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & $1) !== 0, v = (o & (qa | Ba)) !== 0, g = e.length, p = t.items, x = t.first, b = x, $, h = null, C, w = [], k = [], M, P, D, V;
  if (d)
    for (V = 0; V < g; V += 1)
      M = e[V], P = i(M, V), D = p.get(P), D !== void 0 && ((s = D.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(D));
  for (V = 0; V < g; V += 1) {
    if (M = e[V], P = i(M, V), D = p.get(P), D === void 0) {
      var z = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      h = _u(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        M,
        P,
        V,
        r,
        o,
        a
      ), p.set(P, h), w = [], k = [], b = h.next;
      continue;
    }
    if (v && Lf(D, M, V, o), D.e.f & Vn && (fo(D.e), d && ((l = D.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(D))), D !== b) {
      if ($ !== void 0 && $.has(D)) {
        if (w.length < k.length) {
          var R = k[0], T;
          h = R.prev;
          var A = w[0], S = w[w.length - 1];
          for (T = 0; T < w.length; T += 1)
            qs(w[T], R, n);
          for (T = 0; T < k.length; T += 1)
            $.delete(k[T]);
          qn(t, A.prev, S.next), qn(t, h, A), qn(t, S, R), b = R, h = S, V -= 1, w = [], k = [];
        } else
          $.delete(D), qs(D, b, n), qn(t, D.prev, D.next), qn(t, D, h === null ? t.first : h.next), qn(t, h, D), h = D;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== P; )
        b.e.f & Vn || ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      D = b;
    }
    w.push(D), h = D, b = D.next;
  }
  if (b !== null || $ !== void 0) {
    for (var L = $ === void 0 ? [] : Wa($); b !== null; )
      b.e.f & Vn || L.push(b), b = b.next;
    var _ = L.length;
    if (_ > 0) {
      var O = o & Yl && g === 0 ? n : null;
      if (d) {
        for (V = 0; V < _; V += 1)
          (u = L[V].a) == null || u.measure();
        for (V = 0; V < _; V += 1)
          (c = L[V].a) == null || c.fix();
      }
      Hf(t, L, O, p);
    }
  }
  d && Eo(() => {
    var E;
    if (C !== void 0)
      for (D of C)
        (E = D.a) == null || E.apply();
  }), Ge.first = t.first && t.first.e, Ge.last = h && h.e;
}
function Lf(e, t, n, r) {
  r & qa && wa(e.v, t), r & Ba ? wa(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function _u(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & qa) !== 0, d = (l & C1) === 0, v = c ? d ? /* @__PURE__ */ oe(o) : Or(o) : o, g = l & Ba ? Or(a) : a, p = {
    i: g,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = zn(() => s(e, v, g, u), Oe), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function qs(e, t, n) {
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
      /* @__PURE__ */ Sn(i)
    );
    o.before(i), i = a;
  }
}
function qn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function os(e, t, n, r, o) {
  var i = e, a = "", s;
  pr(() => {
    if (a === (a = t() ?? "")) {
      Oe && bn();
      return;
    }
    s !== void 0 && (Gt(s), s = void 0), a !== "" && (s = zn(() => {
      if (Oe) {
        Ie.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Di(), Cr;
        Tt(Ie, u), i = St(l);
        return;
      }
      var c = a + "", d = rs(c);
      Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function wt(e, t, n, r, o) {
  var i;
  Oe && bn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Vf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function ur(e, t, ...n) {
  var r = e, o = vt, i;
  pr(() => {
    o !== (o = t()) && (i && (Gt(i), i = null), i = zn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Oe && (r = Ie);
}
function ku(e, t, n) {
  Oe && bn();
  var r = e, o, i;
  pr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = zn(() => n(r, o))));
  }, Xr), Oe && (r = Ie);
}
function Df(e, t, n, r, o, i) {
  let a = Oe;
  Oe && bn();
  var s, l, u = null;
  Oe && Ie.nodeType === 1 && (u = /** @type {Element} */
  Ie, bn());
  var c = (
    /** @type {TemplateNode} */
    Oe ? Ie : e
  ), d;
  pr(() => {
    const v = t() || null;
    var g = v === "svg" ? H1 : null;
    v !== s && (d && (v === null ? Hr(d, () => {
      d = null, l = null;
    }) : v === l ? fo(d) : Gt(d)), v && v !== l && (d = zn(() => {
      if (u = Oe ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Tt(u, u), r) {
        Oe && Cf(v) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Oe ? /* @__PURE__ */ kt(u) : u.appendChild(Tn())
        );
        Oe && (p === null ? Rt(!1) : St(p)), r(u, p);
      }
      Ge.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Xr), a && (Rt(!0), St(c));
}
function Qe(e, t) {
  Eo(() => {
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
function yt(e, t, n) {
  It(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var a = n();
        Q(a), o && Ja(i, a) && (i = a, r.update(a));
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
function Tf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Su(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Tf(e) : e ?? "";
}
const Bs = [...` 	
\r\f \v\uFEFF`];
function zf(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || Bs.includes(r[a - 1])) && (s === r.length || Bs.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function Xs(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function na(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Nf(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(na)), o && l.push(...Object.keys(o).map(na));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var g = na(e.substring(u, c).trim());
              if (!l.includes(g)) {
                v !== ";" && d++;
                var p = e.substring(u, d).trim();
                n += " " + p + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Xs(r)), o && (n += Xs(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function xt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Oe || a !== n || a === void 0) {
    var s = zf(n, r, i);
    (!Oe || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ra(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (Oe || o !== t) {
    var i = Nf(t, r);
    (!Oe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ra(e, n == null ? void 0 : n[0], r[0]), ra(e, n == null ? void 0 : n[1], r[1], "important")) : ra(e, n, r));
  return r;
}
const eo = Symbol("class"), nr = Symbol("style"), Eu = Symbol("is custom element"), Pu = Symbol("is html");
function ar(e) {
  if (Oe) {
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
    e.__on_r = n, nf(n), Sf();
  }
}
function oa(e, t) {
  var n = Ii(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Af(e, t) {
  var n = Ii(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function If(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ii(e);
  Oe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[I1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Jt(e, t, n, r, o = !1) {
  var i = Ii(e), a = i[Eu], s = !i[Pu];
  let l = Oe && a;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[eo]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var v = Mu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      xt(e, g, w, r, t == null ? void 0 : t[eo], n[eo]), u[C] = w, u[eo] = n[eo];
      continue;
    }
    if (C === "style") {
      ft(e, w, t == null ? void 0 : t[nr], n[nr]), u[C] = w, u[nr] = n[nr];
      continue;
    }
    var p = u[C];
    if (w !== p) {
      u[C] = w;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, M = "$$" + C;
          let P = C.slice(2);
          var b = mf(P);
          if (hf(P) && (P = P.slice(0, -7), k.capture = !0), !b && p) {
            if (w != null) continue;
            e.removeEventListener(P, u[M], k), u[M] = null;
          }
          if (w != null)
            if (b)
              e[`__${P}`] = w, Wr([P]);
            else {
              let D = function(V) {
                u[C].call(this, V);
              };
              u[M] = bu(P, e, D, k);
            }
          else b && (e[`__${P}`] = void 0);
        } else if (C === "style")
          be(e, C, w);
        else if (C === "autofocus")
          _f(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (C === "__value" || C === "value" && w != null))
          e.value = e.__value = w;
        else if (C === "selected" && c)
          If(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = C;
          s || ($ = wf($));
          var h = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !h)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if ($ === "value") {
                let P = k.defaultValue;
                k.removeAttribute($), k.defaultValue = P, k.value = k.__value = M ? P : null;
              } else {
                let P = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = P, k.checked = M ? P : !1;
              }
            } else
              e.removeAttribute(C);
          else h || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && be(e, $, w);
        }
    }
  }
  return l && Rt(!0), u;
}
function Ii(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Eu]: e.nodeName.includes("-"),
      [Pu]: e.namespaceURI === M1
    })
  );
}
var Ks = /* @__PURE__ */ new Map();
function Mu(e) {
  var t = Ks.get(e.nodeName);
  if (t) return t;
  Ks.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Fl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ja(r);
  }
  return t;
}
var rr, lo, Go, $a, Hu;
const Ca = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    br(this, $a), br(this, rr, /* @__PURE__ */ new WeakMap()), br(this, lo), br(this, Go), ri(this, Go, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, rr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, rr).set(t, r), y1(this, $a, Hu).call(this).observe(t, ut(this, Go)), () => {
      var o = ut(this, rr).get(t);
      o.delete(n), o.size === 0 && (ut(this, rr).delete(t), ut(this, lo).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakSet(), Hu = function() {
  return ut(this, lo) ?? ri(this, lo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ca.entries.set(t.target, t);
        for (var n of ut(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Vt(Ca, "entries", /* @__PURE__ */ new WeakMap());
let Rf = Ca;
var Zf = /* @__PURE__ */ new Rf({
  box: "border-box"
});
function Ys(e, t, n) {
  var r = Zf.observe(e, () => n(e[t]));
  It(() => (Cn(() => n(e[t])), r));
}
function Ws(e, t) {
  return e === t || (e == null ? void 0 : e[Yn]) === t;
}
function _n(e = {}, t, n, r) {
  return It(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Ws(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Eo(() => {
        i && Ws(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ne(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => Q(t.s);
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
    r = () => f(a);
  }
  n.b.length && U1(() => {
    js(t, r), co(n.b);
  }), un(() => {
    const o = Cn(() => n.m.map(T1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && un(() => {
    js(t, r), co(n.a);
  });
}
function js(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Xe(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = So(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function en(e) {
  Ye === null && Oi(), Br && Ye.l !== null ? Bf(Ye).m.push(e) : un(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Ye === null && Oi(), en(() => () => Cn(e));
}
function qf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Ye;
  return e === null && Oi(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = So(i) ? i.slice() : [i], s = qf(
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
function Bf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function as(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), vt;
  const r = Cn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const xr = [];
function Yt(e, t) {
  return {
    subscribe: $e(e, t).subscribe
  };
}
function $e(e, t = vt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ja(e, s) && (e = s, n)) {
      const l = !xr.length;
      for (const u of r)
        u[1](), xr.push(u, e);
      if (l) {
        for (let u = 0; u < xr.length; u += 2)
          xr[u][0](xr[u + 1]);
        xr.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = vt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || vt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function Wn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Yt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = vt;
    const v = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, a, s);
      i ? a(p) : d = typeof p == "function" ? p : vt;
    }, g = o.map(
      (p, x) => as(
        p,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && v();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, v(), function() {
      co(g), d(), l = !1;
    };
  });
}
function j(e) {
  let t;
  return as(e, (n) => t = n)(), t;
}
let qo = !1, _a = Symbol();
function te(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: vt
  });
  if (r.store !== e && !(_a in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = vt;
    else {
      var o = !0;
      r.unsubscribe = as(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && _a in n ? j(e) : f(r.source);
}
function Xf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = vt), e;
}
function di(e, t) {
  return e.set(t), t;
}
function nt() {
  const e = {};
  function t() {
    es(() => {
      for (var n in e)
        e[n].unsubscribe();
      uo(e, _a, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Kf(e) {
  var t = qo;
  try {
    return qo = !1, [e(), qo];
  } finally {
    qo = t;
  }
}
const Yf = {
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
function bt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Yf
  );
}
const Wf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return f(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Wl
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
function st(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Or(0) }, Wf);
}
const jf = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Qr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Qr(o) && (o = o());
      const i = Ln(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Qr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Ln(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Yn || t === Ga) return !1;
    for (let n of e.props)
      if (Qr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Qr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function lt(...e) {
  return new Proxy({ props: e }, jf);
}
function Fs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & _1) !== 0, a = !Br || (n & k1) !== 0, s = (n & S1) !== 0, l = (n & E1) !== 0, u = !1, c;
  s ? [c, u] = Kf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || Ga in e, v = s && (((o = Ln(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, g = (
    /** @type {V} */
    r
  ), p = !0, x = !1, b = () => (x = !0, p && (p = !1, l ? g = Cn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && K1(), c = b(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? b() : (p = !0, x = !1, P);
    };
  else {
    var h = (i ? Mr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= N1, $ = () => {
      var P = f(h);
      return P !== void 0 && (g = /** @type {V} */
      void 0), P === void 0 ? g : P;
    };
  }
  if (!(n & Wl))
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(P, D) {
      return arguments.length > 0 ? ((!a || !D || C || u) && v(D ? $() : P), P) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ oe(c), M = /* @__PURE__ */ Mr(() => {
    var P = $(), D = f(k);
    return w ? (w = !1, D) : k.v = P;
  });
  return s && f(M), i || (M.equals = Qa), function(P, D) {
    if (arguments.length > 0) {
      const V = D ? f(M) : a && s ? sn(P) : P;
      if (!M.equals(V)) {
        if (w = !0, J(k, V), x && g !== void 0 && (g = V), Fs(M))
          return P;
        Cn(() => f(M));
      }
      return P;
    }
    return Fs(M) ? M.v : f(M);
  };
}
function Ff(e) {
  return new Gf(e);
}
var Zn, on;
class Gf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    br(this, Zn), br(this, on);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ oe(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Ga ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return J(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ri(this, on, (t.hydrate ? Pf : $u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ri(this, Zn, i.$$events);
    for (const a of Object.keys(ut(this, on)))
      a === "$set" || a === "$destroy" || a === "$on" || uo(this, a, {
        get() {
          return ut(this, on)[a];
        },
        /** @param {any} value */
        set(s) {
          ut(this, on)[a] = s;
        },
        enumerable: !0
      });
    ut(this, on).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ut(this, on).$destroy = () => {
      Mf(ut(this, on));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ut(this, on).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ut(this, Zn)[t] = ut(this, Zn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ut(this, Zn)[t].push(r), () => {
      ut(this, Zn)[t] = ut(this, Zn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ut(this, on).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
let Ou;
typeof HTMLElement == "function" && (Ou = class extends HTMLElement {
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
          r !== "default" && (i.name = r), N(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Uf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Uo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Ff({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = J1(() => {
        Kr(() => {
          var r;
          this.$$r = !0;
          for (const o of oi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Uo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Uo(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return oi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Uo(e, t, n, r) {
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
function Uf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ce(e, t, n, r, o, i) {
  let a = class extends Ou {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return oi(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return oi(t).forEach((s) => {
    uo(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Uo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Ln(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    uo(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Mt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Mt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Jf = { value: () => {
} };
function Zi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Jo(n);
}
function Jo(e) {
  this._ = e;
}
function Qf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Jo.prototype = Zi.prototype = {
  constructor: Jo,
  on: function(e, t) {
    var n = this._, r = Qf(e + "", n), o, i = -1, a = r.length;
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
    return new Jo(e);
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
      e[r] = Jf, e = e.slice(0, r).concat(e.slice(r + 1));
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
function qi(e) {
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
function Lu(e) {
  var t = qi(e);
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
  return new Xt(r, this._parents);
}
function iv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function av() {
  return [];
}
function Vu(e) {
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
  typeof e == "function" ? e = sv(e) : e = Vu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Xt(r, o);
}
function Du(e) {
  return function() {
    return this.matches(e);
  };
}
function Tu(e) {
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
  return this.select(e == null ? dv : cv(typeof e == "function" ? e : Tu(e)));
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
  return this.selectAll(e == null ? gv : hv(typeof e == "function" ? e : Tu(e)));
}
function mv(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Xt(r, this._parents);
}
function zu(e) {
  return new Array(e.length);
}
function yv() {
  return new Xt(this._enter || this._groups.map(zu), this._parents);
}
function fi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
fi.prototype = {
  constructor: fi,
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
function xv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new fi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function bv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
    g = a.call(e, i[s], s, i) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = i[s], u.delete(g)) : n[s] = new fi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function $v(e) {
  return e.__data__;
}
function Cv(e, t) {
  if (!arguments.length) return Array.from(this, $v);
  var n = t ? bv : xv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = wv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, g = _v(e.call(c, c && c.__data__, u, r)), p = g.length, x = s[u] = new Array(p), b = a[u] = new Array(p), $ = l[u] = new Array(v);
    n(c, d, x, b, $, g, t);
    for (var h = 0, C = 0, w, k; h < p; ++h)
      if (w = x[h]) {
        for (h >= C && (C = h + 1); !(k = b[C]) && ++C < p; ) ;
        w._next = k || null;
      }
  }
  return a = new Xt(a, r), a._enter = s, a._exit = l, a;
}
function _v(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function kv() {
  return new Xt(this._exit || this._groups.map(zu), this._parents);
}
function Sv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ev(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), g, p = 0; p < d; ++p)
      (g = u[p] || c[p]) && (v[p] = g);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Xt(s, this._parents);
}
function Pv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Mv(e) {
  e || (e = Hv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function Hv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ov() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Lv() {
  return Array.from(this);
}
function Vv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function Dv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Tv() {
  return !this.node();
}
function zv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Nv(e) {
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
function Rv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Zv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bv(e, t) {
  var n = qi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Av : Nv : typeof t == "function" ? n.local ? qv : Zv : n.local ? Rv : Iv)(n, t));
}
function Nu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Xv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Yv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Wv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? Yv : Kv)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
  return e.style.getPropertyValue(t) || Nu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Ru(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Jv(e) {
  return function() {
    Ru(this, e);
  };
}
function Qv(e) {
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
  var t = typeof e == "function" ? e : Lu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function pg(e, t) {
  var n = typeof e == "function" ? e : Lu(e), r = t == null ? hg : typeof t == "function" ? t : ss(t);
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
  for (s = t ? Sg : kg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function qu(e, t, n) {
  var r = Nu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return qu(this, e, t);
  };
}
function Mg(e, t) {
  return function() {
    return qu(this, e, t.apply(this, arguments));
  };
}
function Hg(e, t) {
  return this.each((typeof t == "function" ? Mg : Pg)(e, t));
}
function* Og() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Bu = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Mo() {
  return new Xt([[document.documentElement]], Bu);
}
function Lg() {
  return this;
}
Xt.prototype = Mo.prototype = {
  constructor: Xt,
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
  selection: Lg,
  order: Pv,
  sort: Mv,
  call: Ov,
  nodes: Lv,
  node: Vv,
  size: Dv,
  empty: Tv,
  each: zv,
  attr: Bv,
  style: Wv,
  property: Uv,
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
  on: Eg,
  dispatch: Hg,
  [Symbol.iterator]: Og
};
function jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Bu);
}
function Vg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
  if (e = Vg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Dg = { passive: !1 }, po = { capture: !0, passive: !1 };
function ia(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", _r, po);
  "onselectstart" in t ? n.on("selectstart.drag", _r, po) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ku(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, po), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
function Sa(e, {
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
Sa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Tg(e) {
  return !e.ctrlKey && !e.button;
}
function zg() {
  return this.parentNode;
}
function Ng(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Tg, t = zg, n = Ng, r = Ag, o = {}, i = Zi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Dg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var M = C(this, t.call(this, w, k), w, k, "mouse");
      M && (jt(w.view).on("mousemove.drag", p, po).on("mouseup.drag", x, po), Xu(w.view), ia(w), u = !1, s = w.clientX, l = w.clientY, M("start", w));
    }
  }
  function p(w) {
    if (_r(w), !u) {
      var k = w.clientX - s, M = w.clientY - l;
      u = k * k + M * M > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    jt(w.view).on("mousemove.drag mouseup.drag", null), Ku(w.view, u), _r(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var M = w.changedTouches, P = t.call(this, w, k), D = M.length, V, z;
      for (V = 0; V < D; ++V)
        (z = C(this, P, w, k, M[V].identifier, M[V])) && (ia(w), z("start", w, M[V]));
    }
  }
  function $(w) {
    var k = w.changedTouches, M = k.length, P, D;
    for (P = 0; P < M; ++P)
      (D = o[k[P].identifier]) && (_r(w), D("drag", w, k[P]));
  }
  function h(w) {
    var k = w.changedTouches, M = k.length, P, D;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < M; ++P)
      (D = o[k[P].identifier]) && (ia(w), D("end", w, k[P]));
  }
  function C(w, k, M, P, D, V) {
    var z = i.copy(), R = an(V || M, k), T, A, S;
    if ((S = n.call(w, new Sa("beforestart", {
      sourceEvent: M,
      target: v,
      identifier: D,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), P)) != null)
      return T = S.x - R[0] || 0, A = S.y - R[1] || 0, function L(_, O, E) {
        var H = R, I;
        switch (_) {
          case "start":
            o[D] = L, I = a++;
            break;
          case "end":
            delete o[D], --a;
          // falls through
          case "drag":
            R = an(E || O, k), I = a;
            break;
        }
        z.call(
          _,
          w,
          new Sa(_, {
            sourceEvent: O,
            subject: S,
            target: v,
            identifier: D,
            active: I,
            x: R[0] + T,
            y: R[1] + A,
            dx: R[0] - H[0],
            dy: R[1] - H[1],
            dispatch: z
          }),
          P
        );
      };
  }
  return v.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Bo(!!w), v) : e;
  }, v.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Bo(w), v) : t;
  }, v.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Bo(w), v) : n;
  }, v.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Bo(!!w), v) : r;
  }, v.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? v : w;
  }, v.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, v) : Math.sqrt(d);
  }, v;
}
function us(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Yu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ho() {
}
var mo = 0.7, vi = 1 / mo, kr = "\\s*([+-]?\\d+)\\s*", yo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rg = /^#([0-9a-f]{3,8})$/, Zg = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), qg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Bg = new RegExp(`^rgba\\(${kr},${kr},${kr},${yo}\\)$`), Xg = new RegExp(`^rgba\\(${yn},${yn},${yn},${yo}\\)$`), Kg = new RegExp(`^hsl\\(${yo},${yn},${yn}\\)$`), Yg = new RegExp(`^hsla\\(${yo},${yn},${yn},${yo}\\)$`), Js = {
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
us(Ho, wo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: Wg,
  formatHsl: jg,
  formatRgb: el,
  toString: el
});
function Qs() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function jg() {
  return Wu(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function wo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Dt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zg.exec(e)) ? new Dt(t[1], t[2], t[3], 1) : (t = qg.exec(e)) ? new Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Xg.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Yg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Js.hasOwnProperty(e) ? tl(Js[e]) : e === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Dt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Dt(e, t, n, r);
}
function Fg(e) {
  return e instanceof Ho || (e = wo(e)), e ? (e = e.rgb(), new Dt(e.r, e.g, e.b, e.opacity)) : new Dt();
}
function Ea(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new Dt(e, t, n, r ?? 1);
}
function Dt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(Dt, Ea, Yu(Ho, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mo : Math.pow(mo, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Dt(sr(this.r), sr(this.g), sr(this.b), gi(this.opacity));
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
  const e = gi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sr(this.r)}, ${sr(this.g)}, ${sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function gi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function or(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Wu(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = wo(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new ln(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? Wu(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(ln, Ug, Yu(Ho, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mo : Math.pow(mo, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Dt(
      aa(e >= 240 ? e - 240 : e + 120, o, r),
      aa(e, o, r),
      aa(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ln(il(this.h), Ko(this.s), Ko(this.l), gi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${il(this.h)}, ${Ko(this.s) * 100}%, ${Ko(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function il(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ko(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function aa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ju = (e) => () => e;
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
    return n - t ? Qg(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : ju(isNaN(e) ? t : e);
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
function Bn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Pa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sa = new RegExp(Pa.source, "g");
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
  var n = Pa.lastIndex = sa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Pa.exec(e)) && (o = sa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Bn(r, o) })), n = sa.lastIndex;
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
var Yo;
function oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Gu : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ih(e) {
  return e == null || (Yo || (Yo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yo.setAttribute("transform", e), !(e = Yo.transform.baseVal.consolidate())) ? Gu : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ju(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var x = g.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: Bn(u, d) }, { i: x - 2, x: Bn(c, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: Bn(u, d) }, { i: x - 2, x: Bn(c, v) });
    } else (d !== 1 || v !== 1) && g.push(o(g) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(g) {
      for (var p = -1, x = v.length, b; ++p < x; ) d[(b = v[p]).i] = b.x(g);
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, p = d - l, x = g * g + p * p, b, $;
    if (x < lh)
      $ = Math.log(v / u) / t, b = function(P) {
        return [
          s + P * g,
          l + P * p,
          u * Math.exp(t * P * $)
        ];
      };
    else {
      var h = Math.sqrt(x), C = (v * v - u * u + r * x) / (2 * u * n * h), w = (v * v - u * u - r * x) / (2 * v * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), M = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (M - k) / t, b = function(P) {
        var D = P * $, V = ll(k), z = u / (n * h) * (V * ch(t * D + k) - uh(k));
        return [
          s + z * g,
          l + z * p,
          u * V / ll(t * D + k)
        ];
      };
    }
    return b.duration = $ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Tr = 0, oo = 0, to = 0, Qu = 1e3, hi, io, pi = 0, cr = 0, Bi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return cr || (ec(fh), cr = xo.now() + Bi);
}
function fh() {
  cr = 0;
}
function mi() {
  this._call = this._time = this._next = null;
}
mi.prototype = tc.prototype = {
  constructor: mi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && io !== this && (io ? io._next = this : hi = this, io = this), this._call = e, this._time = n, Ma();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ma());
  }
};
function tc(e, t, n) {
  var r = new mi();
  return r.restart(e, t, n), r;
}
function vh() {
  cs(), ++Tr;
  for (var e = hi, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tr;
}
function ul() {
  cr = (pi = xo.now()) + Bi, Tr = oo = 0;
  try {
    vh();
  } finally {
    Tr = 0, hh(), cr = 0;
  }
}
function gh() {
  var e = xo.now(), t = e - pi;
  t > Qu && (Bi -= t, pi = e);
}
function hh() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  io = e, Ma(r);
}
function Ma(e) {
  if (!Tr) {
    oo && (oo = clearTimeout(oo));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (oo = setTimeout(ul, e - xo.now() - Bi)), to && (to = clearInterval(to))) : (to || (pi = xo.now(), to = setInterval(gh, Qu)), Tr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new mi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Zi("start", "end", "cancel", "interrupt"), mh = [], nc = 0, dl = 1, Ha = 2, Qo = 3, fl = 4, Oa = 5, ei = 6;
function Xi(e, t, n, r, o, i) {
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
  var n = gn(e, t);
  if (n.state > nc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = gn(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
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
    var c, d, v, g;
    if (n.state !== dl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Qo) return cl(a);
        g.state === fl ? (g.state = ei, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ei, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (cl(function() {
      n.state === Qo && (n.state = fl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ha, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ha) {
      for (n.state = Qo, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Oa, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === Oa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ei, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ti(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ha && r.state < Oa, r.state = ei, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wh(e) {
  return this.each(function() {
    ti(this, e);
  });
}
function xh(e, t) {
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
function bh(e, t, n) {
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
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? xh : bh)(n, e, t));
}
function fs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function rc(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof wo ? al : (n = wo(t)) ? (t = n, al) : rh)(e, t);
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
  var n = qi(e), r = n === "transform" ? sh : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ph : Eh)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? _h : Ch)(n) : (n.local ? Sh : kh)(n, r, t));
}
function Hh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Oh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Lh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Oh(e, i)), n;
  }
  return o._value = t, o;
}
function Vh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hh(e, i)), n;
  }
  return o._value = t, o;
}
function Dh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = qi(e);
  return this.tween(n, (r.local ? Lh : Vh)(r, t));
}
function Th(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function zh(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Nh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Th : zh)(t, e)) : gn(this.node(), t).delay;
}
function Ah(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Ih(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ah : Ih)(t, e)) : gn(this.node(), t).duration;
}
function Zh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function qh(e) {
  var t = this._id;
  return arguments.length ? this.each(Zh(t, e)) : gn(this.node(), t).ease;
}
function Bh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Xh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Bh(this._id, e));
}
function Kh(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Nn(r, this._parents, this._name, this._id);
}
function Yh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Nn(a, this._parents, this._name, this._id);
}
function Wh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jh(e, t, n) {
  var r, o, i = Wh(t) ? ds : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(jh(n, e, t));
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
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Xi(u[v], t, n, v, u, gn(c, n)));
  return new Nn(i, this._parents, t, n);
}
function Qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Vu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, p = gn(c, n), x = 0, b = v.length; x < b; ++x)
          (g = v[x]) && Xi(g, t, n, x, v, p);
        i.push(v), a.push(c);
      }
  return new Nn(i, a, t, n);
}
var ep = Mo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
  var n, r, o;
  return function() {
    var i = Dr(this, e), a = (this.style.removeProperty(e), Dr(this, e));
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
    var a = Dr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Dr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Dr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
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
        var c = gn(l, t);
        Xi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Nn(r, this._parents, e, n);
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
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++yp;
}
var Mn = Mo.prototype;
Nn.prototype = {
  constructor: Nn,
  select: Jh,
  selectAll: Qh,
  selectChild: Mn.selectChild,
  selectChildren: Mn.selectChildren,
  filter: Kh,
  merge: Yh,
  selection: tp,
  transition: pp,
  call: Mn.call,
  nodes: Mn.nodes,
  node: Mn.node,
  size: Mn.size,
  empty: Mn.empty,
  each: Mn.each,
  on: Fh,
  attr: Mh,
  attrTween: Dh,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Nh,
  duration: Rh,
  ease: qh,
  easeVarying: Xh,
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
  e instanceof Nn ? (t = e._id, e = e._name) : (t = ic(), (n = xp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Xi(l, e, t, u, a, n || bp(l, t));
  return new Nn(r, this._parents, e, t);
}
Mo.prototype.interrupt = wh;
Mo.prototype.transition = $p;
const Wo = (e) => () => e;
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
var Ki = new Hn(1, 0, 0);
ac.prototype = Hn.prototype;
function ac(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ki;
  return e.__zoom;
}
function la(e) {
  e.stopImmediatePropagation();
}
function no(e) {
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
  return this.__zoom || Ki;
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
  var e = _p, t = kp, n = Pp, r = Sp, o = Ep, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Zi("start", "zoom", "end"), c, d, v, g = 500, p = 150, x = 0, b = 10;
  function $(S) {
    S.property("__zoom", vl).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, L, _, O) {
    var E = S.selection ? S.selection() : S;
    E.property("__zoom", vl), S !== E ? k(S, L, _, O) : E.interrupt().each(function() {
      M(this, arguments).event(O).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, $.scaleBy = function(S, L, _, O) {
    $.scaleTo(S, function() {
      var E = this.__zoom.k, H = typeof L == "function" ? L.apply(this, arguments) : L;
      return E * H;
    }, _, O);
  }, $.scaleTo = function(S, L, _, O) {
    $.transform(S, function() {
      var E = t.apply(this, arguments), H = this.__zoom, I = _ == null ? w(E) : typeof _ == "function" ? _.apply(this, arguments) : _, B = H.invert(I), W = typeof L == "function" ? L.apply(this, arguments) : L;
      return n(C(h(H, W), I, B), E, a);
    }, _, O);
  }, $.translateBy = function(S, L, _, O) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), a);
    }, null, O);
  }, $.translateTo = function(S, L, _, O, E) {
    $.transform(S, function() {
      var H = t.apply(this, arguments), I = this.__zoom, B = O == null ? w(H) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(Ki.translate(B[0], B[1]).scale(I.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), H, a);
    }, O, E);
  };
  function h(S, L) {
    return L = Math.max(i[0], Math.min(i[1], L)), L === S.k ? S : new Hn(L, S.x, S.y);
  }
  function C(S, L, _) {
    var O = L[0] - _[0] * S.k, E = L[1] - _[1] * S.k;
    return O === S.x && E === S.y ? S : new Hn(S.k, O, E);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, L, _, O) {
    S.on("start.zoom", function() {
      M(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var E = this, H = arguments, I = M(E, H).event(O), B = t.apply(E, H), W = _ == null ? w(B) : typeof _ == "function" ? _.apply(E, H) : _, ee = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), F = E.__zoom, Y = typeof L == "function" ? L.apply(E, H) : L, ie = l(F.invert(W).concat(ee / F.k), Y.invert(W).concat(ee / Y.k));
      return function(pe) {
        if (pe === 1) pe = Y;
        else {
          var ge = ie(pe), se = ee / ge[2];
          pe = new Hn(se, W[0] - ge[0] * se, W[1] - ge[1] * se);
        }
        I.zoom(null, pe);
      };
    });
  }
  function M(S, L, _) {
    return !_ && S.__zooming || new P(S, L);
  }
  function P(S, L) {
    this.that = S, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, L), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, L) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var L = jt(this.that).datum();
      u.call(
        S,
        this.that,
        new Cp(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        L
      );
    }
  };
  function D(S, ...L) {
    if (!e.apply(this, arguments)) return;
    var _ = M(this, L).event(S), O = this.__zoom, E = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), H = an(S);
    if (_.wheel)
      (_.mouse[0][0] !== H[0] || _.mouse[0][1] !== H[1]) && (_.mouse[1] = O.invert(_.mouse[0] = H)), clearTimeout(_.wheel);
    else {
      if (O.k === E) return;
      _.mouse = [H, O.invert(H)], ti(this), _.start();
    }
    no(S), _.wheel = setTimeout(I, p), _.zoom("mouse", n(C(h(O, E), _.mouse[0], _.mouse[1]), _.extent, a));
    function I() {
      _.wheel = null, _.end();
    }
  }
  function V(S, ...L) {
    if (v || !e.apply(this, arguments)) return;
    var _ = S.currentTarget, O = M(this, L, !0).event(S), E = jt(S.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ee, !0), H = an(S, _), I = S.clientX, B = S.clientY;
    Xu(S.view), la(S), O.mouse = [H, this.__zoom.invert(H)], ti(this), O.start();
    function W(F) {
      if (no(F), !O.moved) {
        var Y = F.clientX - I, ie = F.clientY - B;
        O.moved = Y * Y + ie * ie > x;
      }
      O.event(F).zoom("mouse", n(C(O.that.__zoom, O.mouse[0] = an(F, _), O.mouse[1]), O.extent, a));
    }
    function ee(F) {
      E.on("mousemove.zoom mouseup.zoom", null), Ku(F.view, O.moved), no(F), O.event(F).end();
    }
  }
  function z(S, ...L) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, O = an(S.changedTouches ? S.changedTouches[0] : S, this), E = _.invert(O), H = _.k * (S.shiftKey ? 0.5 : 2), I = n(C(h(_, H), O, E), t.apply(this, L), a);
      no(S), s > 0 ? jt(this).transition().duration(s).call(k, I, O, S) : jt(this).call($.transform, I, O, S);
    }
  }
  function R(S, ...L) {
    if (e.apply(this, arguments)) {
      var _ = S.touches, O = _.length, E = M(this, L, S.changedTouches.length === O).event(S), H, I, B, W;
      for (la(S), I = 0; I < O; ++I)
        B = _[I], W = an(B, this), W = [W, this.__zoom.invert(W), B.identifier], E.touch0 ? !E.touch1 && E.touch0[2] !== W[2] && (E.touch1 = W, E.taps = 0) : (E.touch0 = W, H = !0, E.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (E.taps < 2 && (d = W[0], c = setTimeout(function() {
        c = null;
      }, g)), ti(this), E.start());
    }
  }
  function T(S, ...L) {
    if (this.__zooming) {
      var _ = M(this, L).event(S), O = S.changedTouches, E = O.length, H, I, B, W;
      for (no(S), H = 0; H < E; ++H)
        I = O[H], B = an(I, this), _.touch0 && _.touch0[2] === I.identifier ? _.touch0[0] = B : _.touch1 && _.touch1[2] === I.identifier && (_.touch1[0] = B);
      if (I = _.that.__zoom, _.touch1) {
        var ee = _.touch0[0], F = _.touch0[1], Y = _.touch1[0], ie = _.touch1[1], pe = (pe = Y[0] - ee[0]) * pe + (pe = Y[1] - ee[1]) * pe, ge = (ge = ie[0] - F[0]) * ge + (ge = ie[1] - F[1]) * ge;
        I = h(I, Math.sqrt(pe / ge)), B = [(ee[0] + Y[0]) / 2, (ee[1] + Y[1]) / 2], W = [(F[0] + ie[0]) / 2, (F[1] + ie[1]) / 2];
      } else if (_.touch0) B = _.touch0[0], W = _.touch0[1];
      else return;
      _.zoom("touch", n(C(I, B, W), _.extent, a));
    }
  }
  function A(S, ...L) {
    if (this.__zooming) {
      var _ = M(this, L).event(S), O = S.changedTouches, E = O.length, H, I;
      for (la(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), H = 0; H < E; ++H)
        I = O[H], _.touch0 && _.touch0[2] === I.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === I.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (I = an(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < b)) {
        var B = jt(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Wo(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Wo(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Wo(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Wo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
  }, $.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(S) {
    return arguments.length ? (n = S, $) : n;
  }, $.duration = function(S) {
    return arguments.length ? (s = +S, $) : s;
  }, $.interpolate = function(S) {
    return arguments.length ? (l = S, $) : l;
  }, $.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? $ : S;
  }, $.clickDistance = function(S) {
    return arguments.length ? (x = (S = +S) * S, $) : Math.sqrt(x);
  }, $.tapDistance = function(S) {
    return arguments.length ? (b = +S, $) : b;
  }, $;
}
const zr = {
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
}, yi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var dr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(dr || (dr = {}));
var jn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(jn || (jn = {}));
var wi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(wi || (wi = {}));
const La = {
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
var Sr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Sr || (Sr = {}));
var bo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(bo || (bo = {}));
var He;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(He || (He = {}));
const gl = {
  [He.Left]: He.Right,
  [He.Right]: He.Left,
  [He.Top]: He.Bottom,
  [He.Bottom]: He.Top
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
const Op = (e) => "id" in e && "source" in e && "target" in e, Lp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Oo = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Vp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : vs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? xi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Yi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Wi(n);
}, Lo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = xi(r);
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
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = $o(s, Ar(u)), b = (g ?? 0) * (p ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
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
  const s = Lo(e), l = hs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Dp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", zr.error005());
    else {
      const g = s.measured.width, p = s.measured.height;
      g && p && (d = [
        [l, u],
        [l + g, u + p]
      ]);
    }
  else s && Ir(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = Ir(d) ? fr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", zr.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: v
  };
}
async function uc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const v = i.has(d.id), g = !v && d.parentId && a.find((p) => p.id === d.parentId);
    (v || g) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Va(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((v) => v.id === d.id) && u.push(d);
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
const Nr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Nr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Nr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function cc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return fr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const yl = (e, t, n) => e < t ? Nr(Math.abs(e - t), 1, t) / t : e > n ? -Nr(Math.abs(e - n), 1, t) / t : 0, dc = (e, t, n = 15, r = 40) => {
  const o = yl(e.x, r, t.width - r) * n, i = yl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Da = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Wi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ar = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, xi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, fc = (e, t) => Wi(Yi(Da(e), Da(t))), $o = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => On(e.width) && On(e.height) && On(e.x) && On(e.y), On = (e) => !isNaN(e) && isFinite(e), Tp = (e, t) => {
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
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Nr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, v = t / 2 - c * u, g = n / 2 - d * u;
  return { x: v, y: g, zoom: u };
}, bi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Ir(e) {
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
function zp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function ua(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Dn(e), s = Vo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ps = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Np = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Ap = ["INPUT", "SELECT", "TEXTAREA"];
function Ip(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Ap.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const hc = (e) => "clientX" in e, Dn = (e, t) => {
  var n, r;
  const o = hc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
function Rp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function bl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case He.Left:
      return [t - jo(t - r, i), n];
    case He.Right:
      return [t + jo(r - t, i), n];
    case He.Top:
      return [t, n - jo(n - o, i)];
    case He.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function pc({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, curvature: a = 0.25 }) {
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
  }), [d, v, g, p] = Rp({
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
    v,
    g,
    p
  ];
}
function mc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Zp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function qp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Yi(xi(e), xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return $o(a, Wi(i)) > 0;
}
const Bp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Xp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Kp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Op(e) ? n = { ...e } : n = {
    ...e,
    id: Bp(e)
  }, Xp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
  [He.Left]: { x: -1, y: 0 },
  [He.Right]: { x: 1, y: 0 },
  [He.Top]: { x: 0, y: -1 },
  [He.Bottom]: { x: 0, y: 1 }
}, Yp = ({ source: e, sourcePosition: t = He.Bottom, target: n }) => t === He.Left || t === He.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Cl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wp({ source: e, sourcePosition: t = He.Bottom, target: n, targetPosition: r = He.Top, center: o, offset: i }) {
  const a = $l[t], s = $l[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Yp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let g = [], p, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, C, w, k] = mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, x = o.y ?? C;
    const M = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], P = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? g = d === "x" ? M : P : g = d === "x" ? P : M;
  } else {
    const M = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? P : M : g = a.y === v ? M : P, t === r) {
      const T = Math.abs(e[d] - n[d]);
      if (T <= i) {
        const A = Math.min(i - 1, i - T);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * A : $[d] = (u[d] > n[d] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const T = d === "x" ? "y" : "x", A = a[d] === s[T], S = l[T] > u[T], L = l[T] < u[T];
      (a[d] === 1 && (!A && S || A && L) || a[d] !== 1 && (!A && L || A && S)) && (g = d === "x" ? M : P);
    }
    const D = { x: l.x + b.x, y: l.y + b.y }, V = { x: u.x + $.x, y: u.y + $.y }, z = Math.max(Math.abs(D.x - g[0].x), Math.abs(V.x - g[0].x)), R = Math.max(Math.abs(D.y - g[0].y), Math.abs(V.y - g[0].y));
    z >= R ? (p = (D.x + V.x) / 2, x = g[0].y) : (p = g[0].x, x = (D.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], p, x, w, k];
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
function $i({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, g, p] = Wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let h = "";
    return $ > 0 && $ < c.length - 1 ? h = jp(c[$ - 1], b, c[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
  }, ""), d, v, g, p];
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
    e.connectionMode === dr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", zr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || He.Bottom, u = (s == null ? void 0 : s.position) || He.Top, c = Co(n, a, l), d = Co(r, s, u);
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
function Co(e, t, n = He.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case He.Top:
      return { x: o + a / 2, y: i };
    case He.Right:
      return { x: o + a, y: i + s / 2 };
    case He.Bottom:
      return { x: o + a / 2, y: i + s };
    case He.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Sl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function za(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = za(l, t);
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
    case He.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case He.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case He.Left:
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
  nodeExtent: yi,
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
      const i = Oo(o, r.nodeOrigin), a = Ir(o.extent) ? o.extent : r.nodeExtent, s = fr(i, a, tr(o));
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
      const d = Oo(u, a.nodeOrigin), v = Ir(u.extent) ? u.extent : a.nodeExtent, g = fr(d, v, tr(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: g,
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
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = t0(e, l, i, a, u), { positionAbsolute: g } = e.internals, p = c !== g.x || d !== g.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : g,
      z: v
    }
  });
}
function wc(e, t) {
  return (On(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Oo(e, n), u = Ir(e.extent) ? fr(l, e.extent, s) : l;
  let c = fr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = cc(c, s, t));
  const d = wc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function n0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Ar(l), c = fc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = tr(l), g = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), h = (b - v.width) * g[0], C = ($ - v.height) * g[1];
    (p > 0 || x > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + h,
        y: l.position.y - x + C
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + x
        }
      });
    })), (v.width < s.width || v.height < s.height || p || x) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (p ? g[0] * p - h : 0),
        height: $ + (x ? g[1] * x - C : 0)
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
  for (const v of e.values()) {
    const g = t.get(v.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const p = ps(v.nodeElement), x = g.measured.width !== p.width || g.measured.height !== p.height;
    if (p.width && p.height && (x || !g.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = Ir(g.extent) ? g.extent : i;
      let { positionAbsolute: h } = g.internals;
      g.parentId && g.extent === "parent" ? h = cc(h, p, t.get(g.parentId)) : $ && (h = fr(h, $, p));
      const C = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: h,
          handleBounds: {
            source: xl("source", v.nodeElement, b, c, g.id),
            target: xl("target", v.nodeElement, b, c, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && ws(C, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: Ar(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const v = n0(d, t, n, o);
    l.push(...v);
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
function xc(e, t, n) {
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
function bc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : bc(n, t) : !1;
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
    if ((a.selected || a.id === r) && (!a.parentId || !bc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function ca({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, g = !1;
  function p({ noDragClassName: b, handleSelector: $, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = jt(h);
    function M({ x: z, y: R }, T) {
      const { nodeLookup: A, nodeExtent: S, snapGrid: L, snapToGrid: _, nodeOrigin: O, onNodeDrag: E, onSelectionDrag: H, onError: I, updateNodePositions: B } = t();
      i = { x: z, y: R };
      let W = !1, ee = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const F = Lo(s);
        ee = Da(F);
      }
      for (const [F, Y] of s) {
        if (!A.has(F))
          continue;
        let ie = { x: z - Y.distance.x, y: R - Y.distance.y };
        _ && (ie = gs(ie, L));
        let pe = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !Y.extent) {
          const { positionAbsolute: _e } = Y.internals, U = _e.x - ee.x + S[0][0], ae = _e.x + Y.measured.width - ee.x2 + S[1][0], Ee = _e.y - ee.y + S[0][1], ue = _e.y + Y.measured.height - ee.y2 + S[1][1];
          pe = [
            [U, Ee],
            [ae, ue]
          ];
        }
        const { position: ge, positionAbsolute: se } = Dp({
          nodeId: F,
          nextPosition: ie,
          nodeLookup: A,
          nodeExtent: pe,
          nodeOrigin: O,
          onError: I
        });
        W = W || Y.position.x !== ge.x || Y.position.y !== ge.y, Y.position = ge, Y.internals.positionAbsolute = se;
      }
      if (W && (B(s, !0), T && (r || E || !w && H))) {
        const [F, Y] = ca({
          nodeId: w,
          dragItems: s,
          nodeLookup: A
        });
        r == null || r(T, s, F, Y), E == null || E(T, F, Y), w || H == null || H(T, Y);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: z, panBy: R, autoPanSpeed: T, autoPanOnNodeDrag: A } = t();
      if (!A) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, L] = dc(u, c, T);
      (S !== 0 || L !== 0) && (i.x = (i.x ?? 0) - S / z[2], i.y = (i.y ?? 0) - L / z[2], await R({ x: S, y: L }) && M(i, null)), a = requestAnimationFrame(P);
    }
    function D(z) {
      var R;
      const { nodeLookup: T, multiSelectionActive: A, nodesDraggable: S, transform: L, snapGrid: _, snapToGrid: O, selectNodesOnDrag: E, onNodeDragStart: H, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      d = !0, (!E || !C) && !A && w && ((R = T.get(w)) != null && R.selected || B()), C && E && w && (e == null || e(w));
      const W = ua(z.sourceEvent, { transform: L, snapGrid: _, snapToGrid: O, containerBounds: c });
      if (i = W, s = a0(T, S, W, w), s.size > 0 && (n || H || !w && I)) {
        const [ee, F] = ca({
          nodeId: w,
          dragItems: s,
          nodeLookup: T
        });
        n == null || n(z.sourceEvent, s, ee, F), H == null || H(z.sourceEvent, ee, F), w || I == null || I(z.sourceEvent, F);
      }
    }
    const V = Ig().clickDistance(k).on("start", (z) => {
      const { domNode: R, nodeDragThreshold: T, transform: A, snapGrid: S, snapToGrid: L } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, g = !1, T === 0 && D(z), i = ua(z.sourceEvent, { transform: A, snapGrid: S, snapToGrid: L, containerBounds: c }), u = Dn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: R, transform: T, snapGrid: A, snapToGrid: S, nodeDragThreshold: L, nodeLookup: _ } = t(), O = ua(z.sourceEvent, { transform: T, snapGrid: A, snapToGrid: S, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (g = !0), !g) {
        if (!l && R && d && (l = !0, P()), !d) {
          const E = O.xSnapped - (i.x ?? 0), H = O.ySnapped - (i.y ?? 0);
          Math.sqrt(E * E + H * H) > L && D(z);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && s && d && (u = Dn(z.sourceEvent, c), M(O, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: T, onNodeDragStop: A, onSelectionDragStop: S } = t();
        if (T(s, !1), o || A || !w && S) {
          const [L, _] = ca({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, L, _), A == null || A(z.sourceEvent, L, _), w || S == null || S(z.sourceEvent, _);
        }
      }
    }).filter((z) => {
      const R = z.target;
      return !z.button && (!b || !Pl(R, `.${b}`, h)) && (!$ || Pl(R, $, h));
    });
    v.call(V);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
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
    $o(o, Ar(i)) > 0 && r.push(i);
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
      const { x: v, y: g } = Co(u, d, d.position, !0), p = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
      p > t || (p < s ? (a = [{ ...d, x: v, y: g }], s = p) : p === s && a.push({ ...d, x: v, y: g }));
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
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Co(u, d, d.position, !0) } : d;
}
function Cc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function d0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const _c = () => !0;
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: b, isValidConnection: $ = _c, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: M }) {
  const P = Np(e.target);
  let D = 0, V;
  const { x: z, y: R } = Dn(e), T = P == null ? void 0 : P.elementFromPoint(z, R), A = Cc(i, T), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !A)
    return;
  const L = $c(o, A, r, l, t);
  if (!L)
    return;
  let _ = Dn(e, S), O = !1, E = null, H = !1, I = null;
  function B() {
    if (!c || !S)
      return;
    const [ge, se] = dc(_, S, M);
    v({ x: ge, y: se }), D = requestAnimationFrame(B);
  }
  const W = {
    ...L,
    nodeId: o,
    type: A,
    position: L.position
  }, ee = l.get(o), F = {
    inProgress: !0,
    isValid: null,
    from: Co(ee, W, He.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: ee,
    to: _,
    toHandle: null,
    toPosition: gl[W.position],
    toNode: null
  };
  C(F);
  let Y = F;
  p == null || p(e, { nodeId: o, handleId: r, handleType: A });
  function ie(ge) {
    if (!k() || !W) {
      pe(ge);
      return;
    }
    const se = w();
    _ = Dn(ge, S), V = c0(Vo(_, se, !1, [1, 1]), n, l, W), O || (B(), O = !0);
    const _e = kc(ge, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    I = _e.handleDomNode, E = _e.connection, H = d0(!!V, _e.isValid);
    const U = {
      // from stays the same
      ...Y,
      isValid: H,
      to: V && H ? vc({ x: V.x, y: V.y }, se) : _,
      toHandle: _e.toHandle,
      toPosition: H && _e.toHandle ? _e.toHandle.position : gl[W.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    H && V && Y.toHandle && U.toHandle && Y.toHandle.type === U.toHandle.type && Y.toHandle.nodeId === U.toHandle.nodeId && Y.toHandle.id === U.toHandle.id && Y.to.x === U.to.x && Y.to.y === U.to.y || (C(U), Y = U);
  }
  function pe(ge) {
    (V || I) && E && H && (x == null || x(E));
    const { inProgress: se, ..._e } = Y, U = {
      ..._e,
      toPosition: Y.toHandle ? Y.toPosition : null
    };
    b == null || b(ge, U), i && (h == null || h(ge, U)), g(), cancelAnimationFrame(D), O = !1, H = !1, E = null, I = null, P.removeEventListener("mousemove", ie), P.removeEventListener("mouseup", pe), P.removeEventListener("touchmove", ie), P.removeEventListener("touchend", pe);
  }
  P.addEventListener("mousemove", ie), P.addEventListener("mouseup", pe), P.addEventListener("touchmove", ie), P.addEventListener("touchend", pe);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = _c, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Dn(e), x = a.elementFromPoint(g, p), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const h = Cc(void 0, b), C = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), M = b.classList.contains("connectableend");
    if (!C || !h)
      return $;
    const P = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = P;
    const D = k && M && (n === dr.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    $.isValid = D && u(P), $.toHandle = $c(C, h, w, c, n, !1);
  }
  return $;
}
const v0 = {
  onPointerDown: f0,
  isValid: kc
};
function g0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const p = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, M = w[2] * Math.pow(2, k);
      t.scaleTo(M);
    };
    let x = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (x = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, $ = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], M = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), D = {
        x: w[0] - M[0] * P,
        y: w[1] - M[1] * P
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: w[2]
      }, V, s);
    }, h = sc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? p : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: an
  };
}
const h0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ji = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), da = ({ x: e, y: t, zoom: n }) => Ki.translate(e, t).scale(n), $r = (e, t) => e.target.closest(`.${t}`), Sc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), fa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ec = (e) => {
  const t = e.ctrlKey && bi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function p0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if ($r(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = an(c), $ = Ec(c), h = d * Math.pow(2, $);
      r.scaleTo(n, h, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === jn.Vertical ? 0 : c.deltaX * v, p = o === jn.Horizontal ? 0 : c.deltaY * v;
    !bi() && c.shiftKey && o !== jn.Vertical && (g = c.deltaY * v, p = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = ji(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function m0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || $r(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function y0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ji(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Sc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ji(i.transform)));
  };
}
function x0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Sc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && h0(e.prevViewport, a.transform))) {
      const l = ji(a.transform);
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
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && ($r(c, `${u}-flow__node`) || $r(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || $r(c, s) && c.type === "wheel" || $r(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
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
  }, d = e.getBoundingClientRect(), v = sc().clickDistance(!On(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = jt(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Nr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  v.wheelDelta(Ec);
  function b(T, A) {
    return g ? new Promise((S) => {
      v == null || v.transform(fa(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: T, noPanClassName: A, onPaneContextMenu: S, userSelectionActive: L, panOnScroll: _, panOnDrag: O, panOnScrollMode: E, panOnScrollSpeed: H, preventScrolling: I, zoomOnPinch: B, zoomOnScroll: W, zoomOnDoubleClick: ee, zoomActivationKeyPressed: F, lib: Y, onTransformChange: ie }) {
    L && !c.isZoomingOrPanning && h();
    const pe = _ && !F && !L ? p0({
      zoomPanValues: c,
      noWheelClassName: T,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: E,
      panOnScrollSpeed: H,
      zoomOnPinch: B,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: T,
      preventScrolling: I,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", pe, { passive: !1 }), !L) {
      const se = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", se);
      const _e = w0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ie
      });
      v.on("zoom", _e);
      const U = x0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: _,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", U);
    }
    const ge = b0({
      zoomActivationKeyPressed: F,
      panOnDrag: O,
      zoomOnScroll: W,
      panOnScroll: _,
      zoomOnDoubleClick: ee,
      zoomOnPinch: B,
      userSelectionActive: L,
      noPanClassName: A,
      noWheelClassName: T,
      lib: Y
    });
    v.filter(ge), ee ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(T, A, S) {
    const L = da(T), _ = v == null ? void 0 : v.constrain()(L, A, S);
    return _ && await b(_), new Promise((O) => O(_));
  }
  async function w(T, A) {
    const S = da(T);
    return await b(S, A), new Promise((L) => L(S));
  }
  function k(T) {
    if (g) {
      const A = da(T), S = g.property("__zoom");
      (S.k !== T.zoom || S.x !== T.x || S.y !== T.y) && (v == null || v.transform(g, A, null, { sync: !0 }));
    }
  }
  function M() {
    const T = g ? ac(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function P(T, A) {
    return g ? new Promise((S) => {
      v == null || v.scaleTo(fa(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function D(T, A) {
    return g ? new Promise((S) => {
      v == null || v.scaleBy(fa(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function V(T) {
    v == null || v.scaleExtent(T);
  }
  function z(T) {
    v == null || v.translateExtent(T);
  }
  function R(T) {
    const A = !On(T) || T < 0 ? 0 : T;
    v == null || v.clickDistance(A);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: M,
    scaleTo: P,
    scaleBy: D,
    setScaleExtent: V,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: R
  };
}
var Ml;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ml || (Ml = {}));
var C0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(ee, "$connectable", n), i = () => te(ge, "$connectionRadius", n), a = () => te(ie, "$domNode", n), s = () => te(pe, "$nodeLookup", n), l = () => te(Y, "$connectionMode", n), u = () => te(U, "$lib", n), c = () => te(Te, "$autoPanOnConnect", n), d = () => te(Le, "$flowId", n), v = () => te(_e, "$isValidConnectionStore", n), g = () => te(Ee, "$onedgecreate", n), p = () => te(de, "$onConnectAction", n), x = () => te(ke, "$onConnectStartAction", n), b = () => te(ze, "$onConnectEndAction", n), $ = () => te(se, "$viewport", n), h = () => te(at, "$connection", n), C = () => te(Ke, "$edges", n), w = () => te(le, "$connectionLookup", n), k = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), D = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), R = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe();
  let A = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), L = y(t, "position", 28, () => He.Top), _ = y(t, "style", 12, void 0), O = y(t, "isValidConnection", 12, void 0), E = y(t, "onconnect", 12, void 0), H = y(t, "ondisconnect", 12, void 0), I = y(t, "isConnectable", 12, void 0), B = y(t, "class", 12, void 0);
  const W = lr("svelteflow__node_id"), ee = lr("svelteflow__node_connectable"), F = We(), {
    connectionMode: Y,
    domNode: ie,
    nodeLookup: pe,
    connectionRadius: ge,
    viewport: se,
    isValidConnection: _e,
    lib: U,
    addEdge: ae,
    onedgecreate: Ee,
    panBy: ue,
    cancelConnection: Me,
    updateConnection: G,
    autoPanOnConnect: Te,
    edges: Ke,
    connectionLookup: le,
    onconnect: de,
    onconnectstart: ke,
    onconnectend: ze,
    flowId: Le,
    connection: at
  } = F;
  function et(Ve) {
    const rt = hc(Ve);
    (rt && Ve.button === 0 || !rt) && v0.onPointerDown(Ve, {
      handleId: f(P),
      nodeId: W,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: O() ?? v(),
      updateConnection: G,
      cancelConnection: Me,
      panBy: ue,
      onConnect: (Ze) => {
        var Ae;
        const ot = g() ? g()(Ze) : Ze;
        ot && (ae(ot), (Ae = p()) == null || Ae(Ze));
      },
      onConnectStart: (Ze, Ae) => {
        var ot;
        (ot = x()) == null || ot(Ze, {
          nodeId: Ae.nodeId,
          handleId: Ae.handleId,
          handleType: Ae.handleType
        });
      },
      onConnectEnd: (Ze, Ae) => {
        var ot;
        (ot = b()) == null || ot(Ze, Ae);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = /* @__PURE__ */ oe(null), Re = /* @__PURE__ */ oe();
  he(() => Q(S()), () => {
    J(k, S() === "target");
  }), he(
    () => (Q(I()), o()),
    () => {
      J(M, I() !== void 0 ? I() : o());
    }
  ), he(() => Q(A()), () => {
    J(P, A() || null);
  }), he(
    () => (Q(E()), Q(H()), C(), w(), Q(S()), Q(A())),
    () => {
      (E() || H()) && (C(), J(Re, w().get(`${W}-${S()}${A() ? `-${A()}` : ""}`)));
    }
  ), he(
    () => (f(ne), f(Re), Q(H()), Q(E())),
    () => {
      if (f(ne) && !Mp(f(Re), f(ne))) {
        const Ve = f(Re) ?? /* @__PURE__ */ new Map();
        hl(f(ne), Ve, H()), hl(Ve, f(ne), E());
      }
      J(ne, f(Re) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => h(), () => {
    J(D, !!h().fromHandle);
  }), he(
    () => (h(), Q(S()), f(P)),
    () => {
      var Ve, rt, Ze;
      J(V, ((Ve = h().fromHandle) == null ? void 0 : Ve.nodeId) === W && ((rt = h().fromHandle) == null ? void 0 : rt.type) === S() && ((Ze = h().fromHandle) == null ? void 0 : Ze.id) === f(P));
    }
  ), he(
    () => (h(), Q(S()), f(P)),
    () => {
      var Ve, rt, Ze;
      J(z, ((Ve = h().toHandle) == null ? void 0 : Ve.nodeId) === W && ((rt = h().toHandle) == null ? void 0 : rt.type) === S() && ((Ze = h().toHandle) == null ? void 0 : Ze.id) === f(P));
    }
  ), he(
    () => (l(), h(), Q(S()), f(P)),
    () => {
      var Ve, rt, Ze;
      J(R, l() === dr.Strict ? ((Ve = h().fromHandle) == null ? void 0 : Ve.type) !== S() : W !== ((rt = h().fromHandle) == null ? void 0 : rt.nodeId) || f(P) !== ((Ze = h().fromHandle) == null ? void 0 : Ze.id));
    }
  ), he(() => (f(z), h()), () => {
    J(T, f(z) && h().isValid);
  }), mt(), Ne();
  var me = C0();
  be(me, "data-nodeid", W);
  let tn;
  var nn = K(me);
  wt(nn, t, "default", {}), q(me), Se(
    (Ve, rt) => {
      be(me, "data-handleid", f(P)), be(me, "data-handlepos", L()), be(me, "data-id", `${d() ?? ""}-${W ?? ""}-${A() || ""}-${S() ?? ""}`), tn = xt(me, 1, Ve, null, tn, rt), ft(me, _());
    },
    [
      () => vn(Mt([
        "svelte-flow__handle",
        `svelte-flow__handle-${L()}`,
        "nodrag",
        "nopan",
        L(),
        B()
      ])),
      () => ({
        valid: f(T),
        connectingto: f(z),
        connectingfrom: f(V),
        source: !f(k),
        target: f(k),
        connectablestart: f(M),
        connectableend: f(M),
        connectable: f(M),
        connectionindicator: f(M) && (!f(D) || f(R))
      })
    ],
    xe
  ), tt("mousedown", me, et), tt("touchstart", me, et), N(e, me);
  var pn = ve({
    get id() {
      return A();
    },
    set id(Ve) {
      A(Ve), m();
    },
    get type() {
      return S();
    },
    set type(Ve) {
      S(Ve), m();
    },
    get position() {
      return L();
    },
    set position(Ve) {
      L(Ve), m();
    },
    get style() {
      return _();
    },
    set style(Ve) {
      _(Ve), m();
    },
    get isValidConnection() {
      return O();
    },
    set isValidConnection(Ve) {
      O(Ve), m();
    },
    get onconnect() {
      return E();
    },
    set onconnect(Ve) {
      E(Ve), m();
    },
    get ondisconnect() {
      return H();
    },
    set ondisconnect(Ve) {
      H(Ve), m();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(Ve) {
      I(Ve), m();
    },
    get class() {
      return B();
    },
    set class(Ve) {
      B(Ve), m();
    }
  });
  return r(), pn;
}
ce(
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
function Ci(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ne();
  var a = _0(), s = we(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ xe(() => i() ?? He.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Se(() => {
    var v;
    return dt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), N(e, a), ve({
    get data() {
      return r();
    },
    set data(v) {
      r(v), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(v) {
      o(v), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(v) {
      i(v), m();
    }
  });
}
ce(
  Ci,
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
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ne(), De();
  var i = k0(), a = we(i), s = Z(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), N(e, i), ve({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
ce(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
var S0 = /* @__PURE__ */ re(" <!>", 1);
function Mc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ne(), De();
  var i = S0(), a = we(i), s = Z(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), N(e, i), ve({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
ce(Mc, { data: {}, targetPosition: {} }, [], [], !0);
function Hc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, []);
}
ce(Hc, {}, [], [], !0);
function Hl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function _i(e, { target: t, domNode: n }) {
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
function Oc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(i, "$domNode", n), { domNode: i } = We();
  Ne();
  var a = E0(), s = K(a);
  wt(s, t, "default", {}), q(a), yt(a, (l, u) => _i == null ? void 0 : _i(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), N(e, a), ve(), r();
}
ce(Oc, {}, ["default"], [], !0);
function Lc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = We();
  return (s) => {
    const l = j(e).get(s);
    if (!l) {
      console.warn("012", zr.error012(s));
      return;
    }
    (l.selectable || j(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && j(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var P0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Vc(e, t) {
  fe(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = Lc(), a = lr("svelteflow__edge_id");
  return Ne(), Oc(e, {
    children: (s, l) => {
      var u = P0();
      let c;
      var d = K(u);
      wt(d, t, "default", {}), q(u), Se(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), tt("keyup", u, () => {
      }), tt("click", u, () => {
        a && i(a);
      }), N(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
    get style() {
      return n();
    },
    set style(s) {
      n(s), m();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), m();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), m();
    }
  });
}
ce(Vc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var M0 = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__edge-interaction"></path>'), H0 = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function Do(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  Ne();
  var p = H0(), x = we(p), b = Z(x);
  {
    var $ = (w) => {
      var k = M0();
      be(k, "stroke-opacity", 0), be(k, "stroke-width", g), Se(() => be(k, "d", r())), N(w, k);
    };
    ye(b, (w) => {
      g && w($);
    });
  }
  var h = Z(b);
  {
    var C = (w) => {
      Vc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, M) => {
          De();
          var P = Be();
          Se(() => dt(P, o())), N(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    ye(h, (w) => {
      o() && w(C);
    });
  }
  return Se(
    (w) => {
      be(x, "id", n()), be(x, "d", r()), xt(x, 0, w), be(x, "marker-start", l()), be(x, "marker-end", u()), ft(x, c());
    },
    [
      () => vn(Mt(["svelte-flow__edge-path", v()]))
    ],
    xe
  ), N(e, p), ve({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), m();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), m();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), m();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), m();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get class() {
      return v();
    },
    set class(w) {
      v(w), m();
    }
  });
}
ce(
  Do,
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
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), Q(v()), Q(g()), Q(x()), Q(b()), Q(p()), Q($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(pc({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), mt(), Ne(), Do(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), m();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ce(
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
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), Q(v()), Q(g()), Q(x()), Q(b()), Q(p()), Q($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))($i({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), mt(), Ne(), Do(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), m();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ce(
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
function Tc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return he(
    () => (f(r), f(o), f(i), Q(v()), Q(g()), Q(p()), Q(x())),
    () => {
      ((b) => (J(r, b[0]), J(o, b[1]), J(i, b[2])))(Ta({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), mt(), Ne(), Do(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(b) {
      a(b), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), m();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(b) {
      u(b), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(b) {
      c(b), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(b) {
      v(b), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(b) {
      g(b), m();
    },
    get targetX() {
      return p();
    },
    set targetX(b) {
      p(b), m();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), m();
    }
  });
}
ce(
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function zc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), Q(v()), Q(g()), Q(x()), Q(b()), Q(p()), Q($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))($i({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), mt(), Ne(), Do(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), m();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ce(
  zc,
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
function O0(e, t) {
  const n = e.set, r = t.set, o = j(e), i = j(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function L0(e, t) {
  const n = e.set, r = t.set;
  let o = j(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const V0 = (e, t, n) => {
  if (!n)
    return;
  const r = j(e), o = t.set, i = n.set;
  let a = n ? j(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, D0 = (e, t, n, r = [0, 0], o = yi) => {
  const { subscribe: i, set: a, update: s } = $e([]);
  let l = e, u = {}, c = !0;
  const d = (x) => (yc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, a(l), l), v = (x) => d(x(l)), g = (x) => {
    u = x;
  }, p = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: v,
    setDefaultOptions: g,
    setOptions: p
  };
}, T0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (v) => {
    const g = l ? v.map((p) => ({ ...l, ...p })) : v;
    xc(t, n, g), s = g, i(s);
  }, c = (v) => u(v(s)), d = (v) => {
    l = v;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Nc = {
  input: Pc,
  output: Mc,
  default: Ci,
  group: Hc
}, Ac = {
  straight: Tc,
  smoothstep: Dc,
  default: ki,
  step: zc
}, z0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? yi;
  yc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), xc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Lo(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = hs(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: $e(null),
    nodes: D0(e, s, l, d, v),
    nodeLookup: Yt(s),
    parentLookup: Yt(l),
    edgeLookup: Yt(c),
    visibleNodes: Yt([]),
    edges: T0(t, u, c),
    visibleEdges: Yt([]),
    connectionLookup: Yt(u),
    height: $e(500),
    width: $e(500),
    minZoom: $e(0.5),
    maxZoom: $e(2),
    nodeOrigin: $e(d),
    nodeDragThreshold: $e(1),
    nodeExtent: $e(v),
    translateExtent: $e(yi),
    autoPanOnNodeDrag: $e(!0),
    autoPanOnConnect: $e(!0),
    fitViewOnInit: $e(!1),
    fitViewOnInitDone: $e(!1),
    fitViewOptions: $e(void 0),
    panZoom: $e(null),
    snapGrid: $e(null),
    dragging: $e(!1),
    selectionRect: $e(null),
    selectionKeyPressed: $e(!1),
    multiselectionKeyPressed: $e(!1),
    deleteKeyPressed: $e(!1),
    panActivationKeyPressed: $e(!1),
    zoomActivationKeyPressed: $e(!1),
    selectionRectMode: $e(null),
    selectionMode: $e(wi.Partial),
    nodeTypes: $e(Nc),
    edgeTypes: $e(Ac),
    viewport: $e(g),
    connectionMode: $e(dr.Strict),
    domNode: $e(null),
    connection: Yt(La),
    connectionLineType: $e(Sr.Bezier),
    connectionRadius: $e(20),
    isValidConnection: $e(() => !0),
    nodesDraggable: $e(!0),
    nodesConnectable: $e(!0),
    elementsSelectable: $e(!0),
    selectNodesOnDrag: $e(!0),
    markers: Yt([]),
    defaultMarkerColor: $e("#b1b1b7"),
    lib: Yt("svelte"),
    onlyRenderVisibleElements: $e(!1),
    onerror: $e(Tp),
    ondelete: $e(void 0),
    onedgecreate: $e(void 0),
    onconnect: $e(void 0),
    onconnectstart: $e(void 0),
    onconnectend: $e(void 0),
    onbeforedelete: $e(void 0),
    nodesInitialized: $e(!1),
    edgesInitialized: $e(!1),
    viewportInitialized: $e(!1),
    initialized: Yt(!1)
  };
};
function N0(e) {
  const t = Wn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && qp({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Wn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
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
      zIndex: Zp({
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
  return Wn([
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
const Fi = Symbol();
function Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = z0({
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
      ...Nc,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...Ac,
      ..._
    });
  }
  function c(_) {
    const O = j(s.edges);
    s.edges.set(Kp(_, O));
  }
  const d = (_, O = !1) => {
    var E;
    const H = j(s.nodeLookup);
    for (const [I, B] of _) {
      const W = (E = H.get(I)) == null ? void 0 : E.internals.userNode;
      W && (W.position = B.position, W.dragging = O);
    }
    s.nodes.update((I) => I);
  };
  function v(_) {
    var O, E, H;
    const I = j(s.nodeLookup), B = j(s.parentLookup), { changes: W, updatedInternals: ee } = r0(_, I, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (ee) {
      if (Qp(I, B, { nodeOrigin: i, nodeExtent: a }), !j(s.fitViewOnInitDone) && j(s.fitViewOnInit)) {
        const F = j(s.fitViewOptions), Y = p({
          ...F,
          nodes: F == null ? void 0 : F.nodes
        });
        s.fitViewOnInitDone.set(Y);
      }
      for (const F of W) {
        const Y = (O = I.get(F.id)) == null ? void 0 : O.internals.userNode;
        if (Y)
          switch (F.type) {
            case "dimensions": {
              const ie = { ...Y.measured, ...F.dimensions };
              F.setAttributes && (Y.width = ((E = F.dimensions) == null ? void 0 : E.width) ?? Y.width, Y.height = ((H = F.dimensions) == null ? void 0 : H.height) ?? Y.height), Y.measured = ie;
              break;
            }
            case "position":
              Y.position = F.position ?? Y.position;
              break;
          }
      }
      s.nodes.update((F) => F), j(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const O = j(s.panZoom), E = j(s.domNode);
    if (!O || !E)
      return Promise.resolve(!1);
    const { width: H, height: I } = ps(E), B = pl(j(s.nodeLookup), _);
    return ml({
      nodes: B,
      width: H,
      height: I,
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: O
    }, _);
  }
  function p(_) {
    const O = j(s.panZoom);
    if (!O)
      return !1;
    const E = pl(j(s.nodeLookup), _);
    return ml({
      nodes: E,
      width: j(s.width),
      height: j(s.height),
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: O
    }, _), E.size > 0;
  }
  function x(_, O) {
    const E = j(s.panZoom);
    return E ? E.scaleBy(_, O) : Promise.resolve(!1);
  }
  function b(_) {
    return x(1.2, _);
  }
  function $(_) {
    return x(1 / 1.2, _);
  }
  function h(_) {
    const O = j(s.panZoom);
    O && (O.setScaleExtent([_, j(s.maxZoom)]), s.minZoom.set(_));
  }
  function C(_) {
    const O = j(s.panZoom);
    O && (O.setScaleExtent([j(s.minZoom), _]), s.maxZoom.set(_));
  }
  function w(_) {
    const O = j(s.panZoom);
    O && (O.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let O = !1;
    return _.forEach((E) => {
      E.selected && (E.selected = !1, O = !0);
    }), O;
  }
  function M(_) {
    var O;
    (O = j(s.panZoom)) == null || O.setClickDistance(_);
  }
  function P(_) {
    k((_ == null ? void 0 : _.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), k((_ == null ? void 0 : _.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var O;
    if (_) {
      const E = j(s.nodes), H = j(s.edges), I = E.filter((F) => F.selected), B = H.filter((F) => F.selected), { nodes: W, edges: ee } = await uc({
        nodesToRemove: I,
        edgesToRemove: B,
        nodes: E,
        edges: H,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (W.length || ee.length) && (s.nodes.update((F) => F.filter((Y) => !W.some((ie) => ie.id === Y.id))), s.edges.update((F) => F.filter((Y) => !ee.some((ie) => ie.id === Y.id))), (O = j(s.ondelete)) == null || O({
        nodes: W,
        edges: ee
      }));
    }
  });
  function D(_) {
    const O = j(s.multiselectionKeyPressed);
    s.nodes.update((E) => E.map((H) => {
      const I = _.includes(H.id), B = O && H.selected || I;
      return H.selected = B, H;
    })), O || s.edges.update((E) => E.map((H) => (H.selected = !1, H)));
  }
  function V(_) {
    const O = j(s.multiselectionKeyPressed);
    s.edges.update((E) => E.map((H) => {
      const I = _.includes(H.id), B = O && H.selected || I;
      return H.selected = B, H;
    })), O || s.nodes.update((E) => E.map((H) => (H.selected = !1, H)));
  }
  function z(_) {
    var O;
    const E = (O = j(s.nodes)) == null ? void 0 : O.find((H) => H.id === _);
    if (!E) {
      console.warn("012", zr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), E.selected ? E.selected && j(s.multiselectionKeyPressed) && P({ nodes: [E], edges: [] }) : D([_]);
  }
  function R(_) {
    const O = j(s.viewport);
    return o0({
      delta: _,
      panZoom: j(s.panZoom),
      transform: [O.x, O.y, O.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const T = $e(La), A = (_) => {
    T.set({ ..._ });
  };
  function S() {
    T.set(La);
  }
  function L() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: N0(s),
    visibleNodes: A0(s),
    connection: Wn([T, s.viewport], ([_, O]) => _.inProgress ? {
      ..._,
      to: Vo(_.to, [O.x, O.y, O.zoom])
    } : { ..._ }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([_, O, E]) => Gp(_, { defaultColor: O, id: E })),
    initialized: (() => {
      let _ = !1;
      const O = j(s.nodes).length, E = j(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, I, B]) => _ || (O === 0 ? _ = B : E === 0 ? _ = B && H : _ = B && H && I, _));
    })(),
    // actions
    syncNodeStores: (_) => O0(s.nodes, _),
    syncEdgeStores: (_) => L0(s.edges, _),
    syncViewport: (_) => V0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: b,
    zoomOut: $,
    fitView: (_) => g(_),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: w,
    setPaneClickDistance: M,
    unselectNodesAndEdges: P,
    addSelectedNodes: D,
    addSelectedEdges: V,
    handleNodeSelection: z,
    panBy: R,
    updateConnection: A,
    cancelConnection: S,
    reset: L
  };
}
function We() {
  const e = lr(Fi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function I0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Lr(Fi, {
    getStore: () => s
  }), s;
}
function Ol(e, t) {
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
    update(v) {
      c.update(v);
    }
  };
}
var R0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Z0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Rc(e, t) {
  fe(t, !1), Qe(e, Z0);
  const [n, r] = nt(), o = () => te(E, "$panActivationKeyPressed", n), i = () => te(A, "$minZoom", n), a = () => te(S, "$maxZoom", n), s = () => te(H, "$zoomActivationKeyPressed", n), l = () => te(T, "$selectionRect", n), u = () => te(_, "$translateExtent", n), c = () => te(O, "$lib", n), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), M = y(t, "zoomOnPinch", 12), P = y(t, "panOnDrag", 12), D = y(t, "panOnScroll", 12), V = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: R,
    selectionRect: T,
    minZoom: A,
    maxZoom: S,
    dragging: L,
    translateExtent: _,
    lib: O,
    panActivationKeyPressed: E,
    zoomActivationKeyPressed: H,
    viewportInitialized: I
  } = We(), B = (Y) => z.set({
    x: Y[0],
    y: Y[1],
    zoom: Y[2]
  });
  en(() => {
    di(I, !0);
  }), he(() => Q(p()), () => {
    J(d, p() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), Q(P())),
    () => {
      J(v, o() || P());
    }
  ), he(
    () => (o(), Q(D())),
    () => {
      J(g, o() || D());
    }
  ), mt(), Ne();
  var W = R0(), ee = K(W);
  wt(ee, t, "default", {}), q(W), yt(W, (Y, ie) => Ol == null ? void 0 : Ol(Y, ie), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: L,
    panZoom: R,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: M(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || jn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: B
  })), N(e, W);
  var F = ve({
    get initialViewport() {
      return p();
    },
    set initialViewport(Y) {
      p(Y), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(Y) {
      x(Y), m();
    },
    get onMove() {
      return b();
    },
    set onMove(Y) {
      b(Y), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(Y) {
      $(Y), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(Y) {
      h(Y), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(Y) {
      C(Y), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(Y) {
      w(Y), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(Y) {
      k(Y), m();
    },
    get zoomOnPinch() {
      return M();
    },
    set zoomOnPinch(Y) {
      M(Y), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(Y) {
      P(Y), m();
    },
    get panOnScroll() {
      return D();
    },
    set panOnScroll(Y) {
      D(Y), m();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(Y) {
      V(Y), m();
    }
  });
  return r(), F;
}
ce(
  Rc,
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
function Ll(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Vl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var q0 = /* @__PURE__ */ re("<div><!></div>");
const B0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  fe(t, !1), Qe(e, B0);
  const [n, r] = nt(), o = () => te(S, "$panActivationKeyPressed", n), i = () => te(T, "$selectionKeyPressed", n), a = () => te(z, "$selectionRect", n), s = () => te(V, "$elementsSelectable", n), l = () => te(R, "$selectionRectMode", n), u = () => te(M, "$edges", n), c = () => te(k, "$nodeLookup", n), d = () => te(P, "$viewport", n), v = () => te(A, "$selectionMode", n), g = () => te(D, "$dragging", n), p = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe();
  let $ = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const C = Ri(), {
    nodes: w,
    nodeLookup: k,
    edges: M,
    viewport: P,
    dragging: D,
    elementsSelectable: V,
    selectionRect: z,
    selectionRectMode: R,
    selectionKeyPressed: T,
    selectionMode: A,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: L
  } = We();
  let _ = /* @__PURE__ */ oe(), O = null, E = [], H = !1;
  function I(U) {
    if (H) {
      H = !1;
      return;
    }
    C("paneclick", { event: U }), L(), R.set(null);
  }
  function B(U) {
    var ae, Ee;
    if (O = f(_).getBoundingClientRect(), !V || !f(x) || U.button !== 0 || U.target !== f(_) || !O)
      return;
    (Ee = (ae = U.target) == null ? void 0 : ae.setPointerCapture) == null || Ee.call(ae, U.pointerId);
    const { x: ue, y: Me } = Dn(U, O);
    L(), z.set({
      width: 0,
      height: 0,
      startX: ue,
      startY: Me,
      x: ue,
      y: Me
    });
  }
  function W(U) {
    if (!f(x) || !O || !a())
      return;
    H = !0;
    const ae = Dn(U, O), Ee = a().startX ?? 0, ue = a().startY ?? 0, Me = {
      ...a(),
      x: ae.x < Ee ? ae.x : Ee,
      y: ae.y < ue ? ae.y : ue,
      width: Math.abs(ae.x - Ee),
      height: Math.abs(ae.y - ue)
    }, G = E.map((de) => de.id), Te = Va(E, u()).map((de) => de.id);
    E = lc(
      c(),
      Me,
      [
        d().x,
        d().y,
        d().zoom
      ],
      v() === wi.Partial,
      !0
    );
    const Ke = Va(E, u()).map((de) => de.id), le = E.map((de) => de.id);
    (G.length !== le.length || le.some((de) => !G.includes(de))) && w.update((de) => de.map(Vl(le))), (Te.length !== Ke.length || Ke.some((de) => !Te.includes(de))) && M.update((de) => de.map(Vl(Ke))), R.set("user"), z.set(Me);
  }
  function ee(U) {
    var ae, Ee;
    U.button === 0 && ((Ee = (ae = U.target) == null ? void 0 : ae.releasePointerCapture) == null || Ee.call(ae, U.pointerId), !f(x) && l() === "user" && U.target === f(_) && (I == null || I(U)), z.set(null), E.length > 0 && di(R, "nodes"), i() && (H = !1));
  }
  const F = (U) => {
    var ae;
    if (Array.isArray(f(p)) && (ae = f(p)) != null && ae.includes(2)) {
      U.preventDefault();
      return;
    }
    C("panecontextmenu", { event: U });
  };
  he(
    () => (o(), Q($())),
    () => {
      J(p, o() || $());
    }
  ), he(
    () => (i(), a(), Q(h()), f(p)),
    () => {
      J(x, i() || a() || h() && f(p) !== !0);
    }
  ), he(
    () => (s(), f(x), l()),
    () => {
      J(b, s() && (f(x) || l() === "user"));
    }
  ), mt(), Ne();
  var Y = q0(), ie = /* @__PURE__ */ Pe(() => f(b) ? void 0 : Ll(I, f(_))), pe = /* @__PURE__ */ Pe(() => Ll(F, f(_)));
  let ge;
  var se = K(Y);
  wt(se, t, "default", {}), q(Y), _n(Y, (U) => J(_, U), () => f(_)), Se(
    (U) => ge = xt(Y, 1, "svelte-flow__pane svelte-1esy7hx", null, ge, U),
    [
      () => ({
        draggable: $() === !0 || Array.isArray($()) && $().includes(0),
        dragging: g(),
        selection: f(x)
      })
    ],
    xe
  ), tt("click", Y, function(...U) {
    var ae;
    (ae = f(ie)) == null || ae.apply(this, U);
  }), tt("pointerdown", Y, function(...U) {
    var ae;
    (ae = f(b) ? B : void 0) == null || ae.apply(this, U);
  }), tt("pointermove", Y, function(...U) {
    var ae;
    (ae = f(b) ? W : void 0) == null || ae.apply(this, U);
  }), tt("pointerup", Y, function(...U) {
    var ae;
    (ae = f(b) ? ee : void 0) == null || ae.apply(this, U);
  }), tt("contextmenu", Y, function(...U) {
    var ae;
    (ae = f(pe)) == null || ae.apply(this, U);
  }), N(e, Y);
  var _e = ve({
    get panOnDrag() {
      return $();
    },
    set panOnDrag(U) {
      $(U), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(U) {
      h(U), m();
    }
  });
  return r(), _e;
}
ce(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var X0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const K0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function qc(e, t) {
  fe(t, !1), Qe(e, K0);
  const [n, r] = nt(), o = () => te(i, "$viewport", n), { viewport: i } = We();
  Ne();
  var a = X0(), s = K(a);
  wt(s, t, "default", {}), q(a), Se(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), N(e, a), ve(), r();
}
ce(qc, {}, ["default"], [], !0);
function Si(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = s0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = j(n.snapGrid), c = j(n.viewport);
      return {
        nodes: j(n.nodes),
        nodeLookup: j(n.nodeLookup),
        edges: j(n.edges),
        nodeExtent: j(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: j(n.nodeOrigin),
        multiSelectionActive: j(n.multiselectionKeyPressed),
        domNode: j(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: j(n.autoPanOnNodeDrag),
        nodesDraggable: j(n.nodesDraggable),
        selectNodesOnDrag: j(n.selectNodesOnDrag),
        nodeDragThreshold: j(n.nodeDragThreshold),
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
function Y0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var W0 = /* @__PURE__ */ re("<div><!></div>");
function Bc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(pe, "$nodeTypes", n), i = () => te(ae, "$elementsSelectable", n), a = () => te(Ee, "$nodesDraggable", n), s = () => te(Te, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), p = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), M = y(t, "resizeObserver", 13, null), P = y(t, "style", 13, void 0), D = y(t, "type", 13, "default"), V = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), R = y(t, "positionY", 13), T = y(t, "sourcePosition", 13, void 0), A = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), L = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), O = y(t, "initialWidth", 13, void 0), E = y(t, "initialHeight", 13, void 0), H = y(t, "width", 13, void 0), I = y(t, "height", 13, void 0), B = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), ee = y(t, "parentId", 13, void 0), F = y(t, "nodeClickDistance", 13, void 0), Y = y(t, "class", 13, "");
  const ie = We(), {
    nodeTypes: pe,
    nodeDragThreshold: ge,
    selectNodesOnDrag: se,
    handleNodeSelection: _e,
    updateNodeInternals: U,
    elementsSelectable: ae,
    nodesDraggable: Ee
  } = ie;
  let ue = /* @__PURE__ */ oe(void 0, !0), Me = /* @__PURE__ */ oe(null, !0);
  const G = Ri(), Te = $e(h());
  let Ke = /* @__PURE__ */ oe(void 0, !0), le = /* @__PURE__ */ oe(void 0, !0), de = /* @__PURE__ */ oe(void 0, !0);
  Lr("svelteflow__node_id", g()), Lr("svelteflow__node_connectable", Te), is(() => {
    var ne;
    f(Me) && ((ne = M()) == null || ne.unobserve(f(Me)));
  });
  function ke(ne) {
    $() && (!j(se) || !b() || j(ge) > 0) && _e(g()), G("nodeclick", { node: v().internals.userNode, event: ne });
  }
  he(() => Q(D()), () => {
    J(l, D() || "default");
  }), he(() => (o(), f(l)), () => {
    J(u, !!o()[f(l)]);
  }), he(
    () => (o(), f(l), Ci),
    () => {
      J(c, o()[f(l)] || Ci);
    }
  ), he(
    () => (f(u), Q(D())),
    () => {
      f(u) || console.warn("003", zr.error003(D()));
    }
  ), he(
    () => (Q(H()), Q(I()), Q(O()), Q(E()), Q(L()), Q(_())),
    () => {
      J(d, Y0({
        width: H(),
        height: I(),
        initialWidth: O(),
        initialHeight: E(),
        measuredWidth: L(),
        measuredHeight: _()
      }));
    }
  ), he(() => Q(h()), () => {
    Te.set(!!h());
  }), he(
    () => (f(Ke), f(l), f(le), Q(T()), f(de), Q(A()), Q(g()), f(ue)),
    () => {
      (f(Ke) && f(l) !== f(Ke) || f(le) && T() !== f(le) || f(de) && A() !== f(de)) && requestAnimationFrame(() => U(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(ue),
            force: !0
          }
        ]
      ]))), J(Ke, f(l)), J(le, T()), J(de, A());
    }
  ), he(
    () => (Q(M()), f(ue), f(Me), Q(W())),
    () => {
      M() && (f(ue) !== f(Me) || !W()) && (f(Me) && M().unobserve(f(Me)), f(ue) && M().observe(f(ue)), J(Me, f(ue)));
    }
  ), mt(), Ne(!0);
  var ze = Je(), Le = we(ze);
  {
    var at = (ne) => {
      var Re = W0();
      let me, tn;
      var nn = K(Re);
      const pn = /* @__PURE__ */ xe(() => x() ?? !1), Ve = /* @__PURE__ */ xe(() => $() ?? i() ?? !0), rt = /* @__PURE__ */ xe(() => C() ?? !0), Ze = /* @__PURE__ */ xe(() => b() ?? a() ?? !0);
      ku(nn, () => f(c), (Ae, ot) => {
        ot(Ae, {
          get data() {
            return p();
          },
          get id() {
            return g();
          },
          get selected() {
            return f(pn);
          },
          get selectable() {
            return f(Ve);
          },
          get deletable() {
            return f(rt);
          },
          get sourcePosition() {
            return T();
          },
          get targetPosition() {
            return A();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Ze);
          },
          get dragHandle() {
            return B();
          },
          get parentId() {
            return ee();
          },
          get type() {
            return f(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return z();
          },
          get positionAbsoluteY() {
            return R();
          },
          get width() {
            return H();
          },
          get height() {
            return I();
          }
        });
      }), q(Re), yt(Re, (Ae, ot) => Si == null ? void 0 : Si(Ae, ot), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: B(),
        noDragClass: "nodrag",
        nodeClickDistance: F(),
        onNodeMouseDown: _e,
        onDrag: (Ae, ot, rn, Kt) => {
          G("nodedrag", { event: Ae, targetNode: rn, nodes: Kt });
        },
        onDragStart: (Ae, ot, rn, Kt) => {
          G("nodedragstart", { event: Ae, targetNode: rn, nodes: Kt });
        },
        onDragStop: (Ae, ot, rn, Kt) => {
          G("nodedragstop", { event: Ae, targetNode: rn, nodes: Kt });
        },
        store: ie
      })), _n(Re, (Ae) => J(ue, Ae), () => f(ue)), It(() => tt("click", Re, ke)), It(() => tt("mouseenter", Re, (Ae) => G("nodemouseenter", { node: v(), event: Ae }))), It(() => tt("mouseleave", Re, (Ae) => G("nodemouseleave", { node: v(), event: Ae }))), It(() => tt("mousemove", Re, (Ae) => G("nodemousemove", { node: v(), event: Ae }))), It(() => tt("contextmenu", Re, (Ae) => G("nodecontextmenu", { node: v(), event: Ae }))), Se(
        (Ae, ot) => {
          be(Re, "data-id", g()), me = xt(Re, 1, Ae, null, me, ot), tn = ft(Re, `${P() ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, tn, {
            "z-index": S(),
            transform: `translate(${z() ?? ""}px, ${R() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => vn(Mt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            Y()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: $(),
            nopan: b(),
            parent: V()
          })
        ],
        xe
      ), N(ne, Re);
    };
    ye(Le, (ne) => {
      w() || ne(at);
    });
  }
  N(e, ze);
  var et = ve({
    get node() {
      return v();
    },
    set node(ne) {
      v(ne), m();
    },
    get id() {
      return g();
    },
    set id(ne) {
      g(ne), m();
    },
    get data() {
      return p();
    },
    set data(ne) {
      p(ne), m();
    },
    get selected() {
      return x();
    },
    set selected(ne) {
      x(ne), m();
    },
    get draggable() {
      return b();
    },
    set draggable(ne) {
      b(ne), m();
    },
    get selectable() {
      return $();
    },
    set selectable(ne) {
      $(ne), m();
    },
    get connectable() {
      return h();
    },
    set connectable(ne) {
      h(ne), m();
    },
    get deletable() {
      return C();
    },
    set deletable(ne) {
      C(ne), m();
    },
    get hidden() {
      return w();
    },
    set hidden(ne) {
      w(ne), m();
    },
    get dragging() {
      return k();
    },
    set dragging(ne) {
      k(ne), m();
    },
    get resizeObserver() {
      return M();
    },
    set resizeObserver(ne) {
      M(ne), m();
    },
    get style() {
      return P();
    },
    set style(ne) {
      P(ne), m();
    },
    get type() {
      return D();
    },
    set type(ne) {
      D(ne), m();
    },
    get isParent() {
      return V();
    },
    set isParent(ne) {
      V(ne), m();
    },
    get positionX() {
      return z();
    },
    set positionX(ne) {
      z(ne), m();
    },
    get positionY() {
      return R();
    },
    set positionY(ne) {
      R(ne), m();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(ne) {
      T(ne), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(ne) {
      A(ne), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ne) {
      S(ne), m();
    },
    get measuredWidth() {
      return L();
    },
    set measuredWidth(ne) {
      L(ne), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(ne) {
      _(ne), m();
    },
    get initialWidth() {
      return O();
    },
    set initialWidth(ne) {
      O(ne), m();
    },
    get initialHeight() {
      return E();
    },
    set initialHeight(ne) {
      E(ne), m();
    },
    get width() {
      return H();
    },
    set width(ne) {
      H(ne), m();
    },
    get height() {
      return I();
    },
    set height(ne) {
      I(ne), m();
    },
    get dragHandle() {
      return B();
    },
    set dragHandle(ne) {
      B(ne), m();
    },
    get initialized() {
      return W();
    },
    set initialized(ne) {
      W(ne), m();
    },
    get parentId() {
      return ee();
    },
    set parentId(ne) {
      ee(ne), m();
    },
    get nodeClickDistance() {
      return F();
    },
    set nodeClickDistance(ne) {
      F(ne), m();
    },
    get class() {
      return Y();
    },
    set class(ne) {
      Y(ne), m();
    }
  });
  return r(), et;
}
ce(
  Bc,
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
function Xc(e, t) {
  fe(t, !1), Qe(e, F0);
  const [n, r] = nt(), o = () => te(c, "$visibleNodes", n), i = () => te(d, "$nodesDraggable", n), a = () => te(g, "$elementsSelectable", n), s = () => te(v, "$nodesConnectable", n), l = () => te(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: x
  } = We(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const M = k.target.getAttribute("data-id");
      w.set(M, { id: M, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  is(() => {
    b == null || b.disconnect();
  }), Ne();
  var $ = j0();
  Pt($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ xe(() => !!f(w).selected), M = /* @__PURE__ */ xe(() => !!f(w).hidden), P = /* @__PURE__ */ xe(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), D = /* @__PURE__ */ xe(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), V = /* @__PURE__ */ xe(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), z = /* @__PURE__ */ xe(() => f(w).deletable ?? !0), R = /* @__PURE__ */ xe(() => l().has(f(w).id)), T = /* @__PURE__ */ xe(() => f(w).type ?? "default"), A = /* @__PURE__ */ xe(() => f(w).internals.z ?? 0), S = /* @__PURE__ */ xe(() => gc(f(w)));
    Bc(C, {
      get node() {
        return f(w);
      },
      get id() {
        return f(w).id;
      },
      get data() {
        return f(w).data;
      },
      get selected() {
        return f(k);
      },
      get hidden() {
        return f(M);
      },
      get draggable() {
        return f(P);
      },
      get selectable() {
        return f(D);
      },
      get connectable() {
        return f(V);
      },
      get deletable() {
        return f(z);
      },
      get positionX() {
        return f(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return f(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return f(R);
      },
      get style() {
        return f(w).style;
      },
      get class() {
        return f(w).class;
      },
      get type() {
        return f(T);
      },
      get sourcePosition() {
        return f(w).sourcePosition;
      },
      get targetPosition() {
        return f(w).targetPosition;
      },
      get dragging() {
        return f(w).dragging;
      },
      get zIndex() {
        return f(A);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(S);
      },
      get width() {
        return f(w).width;
      },
      get height() {
        return f(w).height;
      },
      get initialWidth() {
        return f(w).initialWidth;
      },
      get initialHeight() {
        return f(w).initialHeight;
      },
      get measuredWidth() {
        return f(w).measured.width;
      },
      get measuredHeight() {
        return f(w).measured.height;
      },
      get parentId() {
        return f(w).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(L) {
          Xe.call(this, t, L);
        },
        nodemouseenter(L) {
          Xe.call(this, t, L);
        },
        nodemousemove(L) {
          Xe.call(this, t, L);
        },
        nodemouseleave(L) {
          Xe.call(this, t, L);
        },
        nodedrag(L) {
          Xe.call(this, t, L);
        },
        nodedragstart(L) {
          Xe.call(this, t, L);
        },
        nodedragstop(L) {
          Xe.call(this, t, L);
        },
        nodecontextmenu(L) {
          Xe.call(this, t, L);
        }
      }
    });
  }), q($), N(e, $);
  var h = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), h;
}
ce(Xc, { nodeClickDistance: {} }, [], [], !0);
var G0 = /* @__PURE__ */ Ce('<svg><g role="img"><!></g></svg>');
function Kc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(Y, "$edgeTypes", n), i = () => te(ie, "$flowId", n), a = () => te(pe, "$elementsSelectable", n), s = () => te(F, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), v = /* @__PURE__ */ oe(void 0, !0);
  let g = y(t, "id", 13), p = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), M = y(t, "selectable", 13, void 0), P = y(t, "deletable", 13, void 0), D = y(t, "hidden", 13, !1), V = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), T = y(t, "markerEnd", 13, void 0), A = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), L = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), O = y(t, "targetX", 13), E = y(t, "targetY", 13), H = y(t, "sourcePosition", 13), I = y(t, "targetPosition", 13), B = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), ee = y(t, "class", 13, "");
  Lr("svelteflow__edge_id", g());
  const {
    edgeLookup: F,
    edgeTypes: Y,
    flowId: ie,
    elementsSelectable: pe
  } = We(), ge = Ri(), se = Lc();
  function _e(G) {
    const Te = s().get(g());
    Te && (se(g()), ge("edgeclick", { event: G, edge: Te }));
  }
  function U(G, Te) {
    const Ke = s().get(g());
    Ke && ge(Te, { event: G, edge: Ke });
  }
  he(() => Q(p()), () => {
    J(l, p() || "default");
  }), he(
    () => (o(), f(l), ki),
    () => {
      J(u, o()[f(l)] || ki);
    }
  ), he(
    () => (Q(R()), i()),
    () => {
      J(c, R() ? `url('#${za(R(), i())}')` : void 0);
    }
  ), he(
    () => (Q(T()), i()),
    () => {
      J(d, T() ? `url('#${za(T(), i())}')` : void 0);
    }
  ), he(
    () => (Q(M()), a()),
    () => {
      J(v, M() ?? a());
    }
  ), mt(), Ne(!0);
  var ae = Je(), Ee = we(ae);
  {
    var ue = (G) => {
      var Te = G0();
      let Ke;
      var le = K(Te);
      let de;
      var ke = K(le);
      const ze = /* @__PURE__ */ xe(() => P() ?? !0);
      ku(ke, () => f(u), (Le, at) => {
        at(Le, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return L();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return O();
          },
          get targetY() {
            return E();
          },
          get sourcePosition() {
            return H();
          },
          get targetPosition() {
            return I();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return $();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(ze);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return A();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), q(le), q(Te), Se(
        (Le, at) => {
          Ke = ft(Te, "", Ke, { "z-index": C() }), de = xt(le, 0, Le, null, de, at), be(le, "data-id", g()), be(le, "aria-label", B() === null ? void 0 : B() ? B() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => vn(Mt(["svelte-flow__edge", ee()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        xe
      ), tt("click", le, _e), tt("contextmenu", le, (Le) => {
        U(Le, "edgecontextmenu");
      }), tt("mouseenter", le, (Le) => {
        U(Le, "edgemouseenter");
      }), tt("mouseleave", le, (Le) => {
        U(Le, "edgemouseleave");
      }), N(G, Te);
    };
    ye(Ee, (G) => {
      D() || G(ue);
    });
  }
  N(e, ae);
  var Me = ve({
    get id() {
      return g();
    },
    set id(G) {
      g(G), m();
    },
    get type() {
      return p();
    },
    set type(G) {
      p(G), m();
    },
    get source() {
      return x();
    },
    set source(G) {
      x(G), m();
    },
    get target() {
      return b();
    },
    set target(G) {
      b(G), m();
    },
    get data() {
      return $();
    },
    set data(G) {
      $(G), m();
    },
    get style() {
      return h();
    },
    set style(G) {
      h(G), m();
    },
    get zIndex() {
      return C();
    },
    set zIndex(G) {
      C(G), m();
    },
    get animated() {
      return w();
    },
    set animated(G) {
      w(G), m();
    },
    get selected() {
      return k();
    },
    set selected(G) {
      k(G), m();
    },
    get selectable() {
      return M();
    },
    set selectable(G) {
      M(G), m();
    },
    get deletable() {
      return P();
    },
    set deletable(G) {
      P(G), m();
    },
    get hidden() {
      return D();
    },
    set hidden(G) {
      D(G), m();
    },
    get label() {
      return V();
    },
    set label(G) {
      V(G), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(G) {
      z(G), m();
    },
    get markerStart() {
      return R();
    },
    set markerStart(G) {
      R(G), m();
    },
    get markerEnd() {
      return T();
    },
    set markerEnd(G) {
      T(G), m();
    },
    get sourceHandle() {
      return A();
    },
    set sourceHandle(G) {
      A(G), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(G) {
      S(G), m();
    },
    get sourceX() {
      return L();
    },
    set sourceX(G) {
      L(G), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(G) {
      _(G), m();
    },
    get targetX() {
      return O();
    },
    set targetX(G) {
      O(G), m();
    },
    get targetY() {
      return E();
    },
    set targetY(G) {
      E(G), m();
    },
    get sourcePosition() {
      return H();
    },
    set sourcePosition(G) {
      H(G), m();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(G) {
      I(G), m();
    },
    get ariaLabel() {
      return B();
    },
    set ariaLabel(G) {
      B(G), m();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(G) {
      W(G), m();
    },
    get class() {
      return ee();
    },
    set class(G) {
      ee(G), m();
    }
  });
  return r(), Me;
}
ce(
  Kc,
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
function Yc(e, t) {
  fe(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return en(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ne(), ve({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
ce(Yc, { onMount: {}, onDestroy: {} }, [], [], !0);
var U0 = /* @__PURE__ */ Ce("<defs></defs>");
function Wc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(i, "$markers", n), { markers: i } = We();
  Ne();
  var a = U0();
  Pt(a, 5, o, (s) => s.id, (s, l) => {
    jc(s, lt(() => f(l)));
  }), q(a), N(e, a), ve(), r();
}
ce(Wc, {}, [], [], !0);
var J0 = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Q0 = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), e2 = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ne();
  var c = e2(), d = K(c);
  {
    var v = (p) => {
      var x = J0();
      Se(() => {
        be(x, "stroke", l()), be(x, "stroke-width", u());
      }), N(p, x);
    }, g = (p, x) => {
      {
        var b = ($) => {
          var h = Q0();
          Se(() => {
            be(h, "stroke", l()), be(h, "stroke-width", u()), be(h, "fill", l());
          }), N($, h);
        };
        ye(
          p,
          ($) => {
            r() === bo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    ye(d, (p) => {
      r() === bo.Arrow ? p(v) : p(g, !1);
    });
  }
  return q(c), Se(() => {
    be(c, "id", n()), be(c, "markerWidth", `${o()}`), be(c, "markerHeight", `${i()}`), be(c, "markerUnits", a()), be(c, "orient", s());
  }), N(e, c), ve({
    get id() {
      return n();
    },
    set id(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(p) {
      a(p), m();
    },
    get orient() {
      return s();
    },
    set orient(p) {
      s(p), m();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), m();
    }
  });
}
ce(
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
var t2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Fc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(s, "$visibleEdges", n), i = () => te(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = We();
  en(() => {
    a() && u(a());
  }), Ne();
  var d = t2(), v = K(d), g = K(v);
  Wc(g, {}), q(v);
  var p = Z(v, 2);
  Pt(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ xe(() => f(C).selectable ?? i()), k = /* @__PURE__ */ xe(() => f(C).type || "default");
    Kc(h, {
      get id() {
        return f(C).id;
      },
      get source() {
        return f(C).source;
      },
      get target() {
        return f(C).target;
      },
      get data() {
        return f(C).data;
      },
      get style() {
        return f(C).style;
      },
      get animated() {
        return f(C).animated;
      },
      get selected() {
        return f(C).selected;
      },
      get selectable() {
        return f(w);
      },
      get deletable() {
        return f(C).deletable;
      },
      get hidden() {
        return f(C).hidden;
      },
      get label() {
        return f(C).label;
      },
      get labelStyle() {
        return f(C).labelStyle;
      },
      get markerStart() {
        return f(C).markerStart;
      },
      get markerEnd() {
        return f(C).markerEnd;
      },
      get sourceHandle() {
        return f(C).sourceHandle;
      },
      get targetHandle() {
        return f(C).targetHandle;
      },
      get sourceX() {
        return f(C).sourceX;
      },
      get sourceY() {
        return f(C).sourceY;
      },
      get targetX() {
        return f(C).targetX;
      },
      get targetY() {
        return f(C).targetY;
      },
      get sourcePosition() {
        return f(C).sourcePosition;
      },
      get targetPosition() {
        return f(C).targetPosition;
      },
      get ariaLabel() {
        return f(C).ariaLabel;
      },
      get interactionWidth() {
        return f(C).interactionWidth;
      },
      get class() {
        return f(C).class;
      },
      get type() {
        return f(k);
      },
      get zIndex() {
        return f(C).zIndex;
      },
      $$events: {
        edgeclick(M) {
          Xe.call(this, t, M);
        },
        edgecontextmenu(M) {
          Xe.call(this, t, M);
        },
        edgemouseenter(M) {
          Xe.call(this, t, M);
        },
        edgemouseleave(M) {
          Xe.call(this, t, M);
        }
      }
    });
  });
  var x = Z(p, 2);
  {
    var b = (h) => {
      Yc(h, {
        onMount: () => {
          di(l, !0);
        },
        onDestroy: () => {
          di(l, !1);
        }
      });
    };
    ye(x, (h) => {
      o().length > 0 && h(b);
    });
  }
  q(d), N(e, d);
  var $ = ve({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
    }
  });
  return r(), $;
}
ce(Fc, { defaultEdgeOptions: {} }, [], [], !0);
var n2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const r2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function xs(e, t) {
  fe(t, !1), Qe(e, r2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Je(), l = we(s);
  {
    var u = (c) => {
      var d = n2();
      let v;
      Se(() => v = ft(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), N(c, d);
    };
    ye(l, (c) => {
      a() && c(u);
    });
  }
  return N(e, s), ve({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), m();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), m();
    }
  });
}
ce(
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
function Gc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(a, "$selectionRect", n), i = () => te(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = We();
  Ne();
  const l = /* @__PURE__ */ xe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  xs(e, {
    get isVisible() {
      return f(l);
    },
    get width() {
      return f(u);
    },
    get height() {
      return f(c);
    },
    get x() {
      return f(d);
    },
    get y() {
      return f(v);
    }
  }), ve(), r();
}
ce(Gc, {}, [], [], !0);
var o2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const i2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  fe(t, !1), Qe(e, i2);
  const [n, r] = nt(), o = () => te(l, "$selectionRectMode", n), i = () => te(c, "$nodeLookup", n), a = () => te(u, "$nodes", n), s = We(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ri();
  let v = /* @__PURE__ */ oe(null);
  function g(h) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (J(v, Lo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), mt(), Ne();
  var x = Je(), b = we(x);
  {
    var $ = (h) => {
      var C = o2(), w = K(C);
      xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(C), yt(C, (k, M) => Si == null ? void 0 : Si(k, M), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, M, P, D) => {
          d("nodedrag", { event: k, targetNode: null, nodes: D });
        },
        onDragStart: (k, M, P, D) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: D });
        },
        onDragStop: (k, M, P, D) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: D });
        }
      })), It(() => tt("contextmenu", C, g)), It(() => tt("click", C, p)), It(() => tt("keyup", C, () => {
      })), Se(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), N(h, C);
    };
    ye(b, (h) => {
      o() === "nodes" && f(v) && On(f(v).x) && On(f(v).y) && h($);
    });
  }
  N(e, x), ve(), r();
}
ce(Uc, {}, [], [], !0);
function ct(e, t) {
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
      }, { modifier: d, key: v, callback: g, preventDefault: p, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          p && a.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), g == null || g(b);
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
  fe(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => bi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = We();
  function g(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return g(h) ? h.modifier || [] : [];
  }
  function x(h) {
    return h == null ? "" : g(h) ? h.key : h;
  }
  function b(h, C) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = x(w);
      return {
        key: k,
        modifier: p(w),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ne(), tt("blur", Lt, $), tt("contextmenu", Lt, $), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ip(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), yt(Lt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), ve({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), m();
    }
  });
}
ce(
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
var a2 = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), s2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Qc(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(g, "$connection", n), i = () => te(p, "$connectionLineType", n), a = () => te(d, "$width", n), s = () => te(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = We();
  let x = /* @__PURE__ */ oe(null);
  he(
    () => (o(), Q(c()), i(), f(x), Ta),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: M, toPosition: P } = o(), D = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: M,
          targetX: k.x,
          targetY: k.y,
          targetPosition: P
        };
        switch (i()) {
          case Sr.Bezier:
            ((V) => J(x, V[0]))(pc(D));
            break;
          case Sr.Step:
            ((V) => J(x, V[0]))($i({ ...D, borderRadius: 0 }));
            break;
          case Sr.SmoothStep:
            ((V) => J(x, V[0]))($i(D));
            break;
          default:
            ((V) => J(x, V[0]))(Ta(D));
        }
      }
    }
  ), mt(), Ne();
  var b = Je(), $ = we(b);
  {
    var h = (w) => {
      var k = s2(), M = K(k), P = K(M);
      wt(P, t, "connectionLine", {});
      var D = Z(P);
      {
        var V = (z) => {
          var R = a2();
          Se(() => {
            be(R, "d", f(x)), ft(R, u());
          }), N(z, R);
        };
        ye(D, (z) => {
          c() || z(V);
        });
      }
      q(M), q(k), Se(
        (z) => {
          be(k, "width", a()), be(k, "height", s()), ft(k, l()), xt(M, 0, z);
        },
        [
          () => vn(Mt([
            "svelte-flow__connection",
            Hp(o().isValid)
          ]))
        ],
        xe
      ), N(w, k);
    };
    ye($, (w) => {
      o().inProgress && w(h);
    });
  }
  N(e, b);
  var C = ve({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), m();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), m();
    }
  });
  return r(), C;
}
ce(
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
var l2 = /* @__PURE__ */ re("<div><!></div>");
function To(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, i] = nt(), a = () => te(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = We();
  he(() => Q(l()), () => {
    J(s, `${l()}`.split("-"));
  }), mt(), Ne();
  var v = l2();
  let g;
  var p = K(v);
  wt(p, t, "default", {}), q(v), Se(
    (b) => g = Jt(v, g, {
      class: b,
      style: u(),
      ...r,
      [nr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Mt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    xe
  ), N(e, v);
  var x = ve({
    get position() {
      return l();
    },
    set position(b) {
      l(b), m();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), m();
    },
    get class() {
      return c();
    },
    set class(b) {
      c(b), m();
    }
  });
  return i(), x;
}
ce(To, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var u2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
  fe(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ne();
  var o = Je(), i = we(o);
  {
    var a = (s) => {
      To(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = u2();
          N(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ye(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return N(e, o), ve({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), m();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), m();
    }
  });
}
ce(ed, { proOptions: {}, position: {} }, [], [], !0);
function Dl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const c2 = (e) => Object.keys(e);
function Tl(e, t) {
  c2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function d2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function f2(e = "light") {
  return Yt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = d2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var v2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), g2 = /* @__PURE__ */ re("<!> <!>", 1), h2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const p2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
  const n = Vf(t), r = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = st(r, [
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
  fe(t, !1), Qe(e, p2);
  const [i, a] = nt(), s = () => te(C(), "$viewport", i), l = () => te(ea, "$initialized", i), u = () => te(f(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), M = y(t, "selectionKey", 12, void 0), P = y(t, "selectionMode", 12, void 0), D = y(t, "panActivationKey", 12, void 0), V = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), T = y(t, "nodesConnectable", 12, void 0), A = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), L = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), O = y(t, "connectionRadius", 12, void 0), E = y(t, "connectionLineType", 12, void 0), H = y(t, "connectionMode", 28, () => dr.Strict), I = y(t, "connectionLineStyle", 12, ""), B = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), ee = y(t, "onMove", 12, void 0), F = y(t, "onMoveEnd", 12, void 0), Y = y(t, "isValidConnection", 12, void 0), ie = y(t, "translateExtent", 12, void 0), pe = y(t, "nodeExtent", 12, void 0), ge = y(t, "onlyRenderVisibleElements", 12, void 0), se = y(t, "panOnScrollMode", 28, () => jn.Free), _e = y(t, "preventScrolling", 12, !0), U = y(t, "zoomOnScroll", 12, !0), ae = y(t, "zoomOnDoubleClick", 12, !0), Ee = y(t, "zoomOnPinch", 12, !0), ue = y(t, "panOnScroll", 12, !1), Me = y(t, "panOnDrag", 12, !0), G = y(t, "selectionOnDrag", 12, void 0), Te = y(t, "autoPanOnConnect", 12, !0), Ke = y(t, "autoPanOnNodeDrag", 12, !0), le = y(t, "onerror", 12, void 0), de = y(t, "ondelete", 12, void 0), ke = y(t, "onedgecreate", 12, void 0), ze = y(t, "attributionPosition", 12, void 0), Le = y(t, "proOptions", 12, void 0), at = y(t, "defaultEdgeOptions", 12, void 0), et = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Re = y(t, "colorMode", 12, "light"), me = y(t, "onconnect", 12, void 0), tn = y(t, "onconnectstart", 12, void 0), nn = y(t, "onconnectend", 12, void 0), pn = y(t, "onbeforedelete", 12, void 0), Ve = y(t, "oninit", 12, void 0), rt = y(t, "nodeOrigin", 12, void 0), Ze = y(t, "paneClickDistance", 12, 0), Ae = y(t, "nodeClickDistance", 12, 0), ot = y(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = y(t, "style", 12, void 0), Kt = y(t, "class", 12, void 0), Gr = /* @__PURE__ */ oe(), $t = /* @__PURE__ */ oe(), Ht = /* @__PURE__ */ oe();
  const yr = s() || h(), it = vf(Fi) ? We() : I0({
    nodes: j(v()),
    edges: j(g()),
    width: et(),
    height: ne(),
    fitView: p(),
    nodeOrigin: rt(),
    nodeExtent: pe()
  });
  en(() => (it.width.set(f($t)), it.height.set(f(Ht)), it.domNode.set(f(Gr)), it.syncNodeStores(v()), it.syncEdgeStores(g()), it.syncViewport(C()), p() !== void 0 && it.fitViewOnInit.set(p()), x() && it.fitViewOptions.set(x()), Dl(it, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ie(),
    paneClickDistance: Ze()
  }), () => {
    it.reset();
  }));
  const { initialized: ea } = it;
  let Ur = /* @__PURE__ */ oe(!1);
  he(
    () => (f($t), f(Ht)),
    () => {
      f($t) !== void 0 && f(Ht) !== void 0 && (it.width.set(f($t)), it.height.set(f(Ht)));
    }
  ), he(
    () => (f(Ur), l(), Q(Ve())),
    () => {
      var X;
      !f(Ur) && l() && ((X = Ve()) == null || X(), J(Ur, !0));
    }
  ), he(
    () => (Q(d()), Q(E()), Q(O()), Q(P()), Q(L()), Q(ot()), Q(R()), Q(T()), Q(S()), Q(ge()), Q(Y()), Q(Te()), Q(Ke()), Q(le()), Q(de()), Q(ke()), Q(H()), Q(A()), Q(me()), Q(tn()), Q(nn()), Q(pn()), Q(rt()), Tl),
    () => {
      const X = {
        flowId: d(),
        connectionLineType: E(),
        connectionRadius: O(),
        selectionMode: P(),
        snapGrid: L(),
        defaultMarkerColor: ot(),
        nodesDraggable: R(),
        nodesConnectable: T(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: Y(),
        autoPanOnConnect: Te(),
        autoPanOnNodeDrag: Ke(),
        onerror: le(),
        ondelete: de(),
        onedgecreate: ke(),
        connectionMode: H(),
        nodeDragThreshold: A(),
        onconnect: me(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: pn(),
        nodeOrigin: rt()
      };
      Tl(it, X);
    }
  ), he(
    () => (Q(w()), Q(k()), Q(b()), Q($()), Q(ie()), Q(Ze())),
    () => {
      Dl(it, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ie(),
        paneClickDistance: Ze()
      });
    }
  ), he(
    () => Q(Re()),
    () => {
      Xf(J(c, f2(Re())), "$colorModeClass", i);
    }
  ), mt(), Ne();
  var Nt = h2();
  let Io;
  var Ro = K(Nt);
  Jc(Ro, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return D();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Zo = Z(Ro, 2);
  const ta = /* @__PURE__ */ xe(() => se() === void 0 ? jn.Free : se()), jd = /* @__PURE__ */ xe(() => _e() === void 0 ? !0 : _e()), Fd = /* @__PURE__ */ xe(() => U() === void 0 ? !0 : U()), Gd = /* @__PURE__ */ xe(() => ae() === void 0 ? !0 : ae()), Ud = /* @__PURE__ */ xe(() => Ee() === void 0 ? !0 : Ee()), Jd = /* @__PURE__ */ xe(() => ue() === void 0 ? !1 : ue()), Qd = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me()), e1 = /* @__PURE__ */ xe(() => Ze() === void 0 ? 0 : Ze());
  Rc(Zo, {
    initialViewport: yr,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return ee();
    },
    get onMoveEnd() {
      return F();
    },
    get panOnScrollMode() {
      return f(ta);
    },
    get preventScrolling() {
      return f(jd);
    },
    get zoomOnScroll() {
      return f(Fd);
    },
    get zoomOnDoubleClick() {
      return f(Gd);
    },
    get zoomOnPinch() {
      return f(Ud);
    },
    get panOnScroll() {
      return f(Jd);
    },
    get panOnDrag() {
      return f(Qd);
    },
    get paneClickDistance() {
      return f(e1);
    },
    children: (X, Ww) => {
      const r1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me());
      Zc(X, {
        get panOnDrag() {
          return f(r1);
        },
        get selectionOnDrag() {
          return G();
        },
        $$events: {
          paneclick(Jr) {
            Xe.call(this, t, Jr);
          },
          panecontextmenu(Jr) {
            Xe.call(this, t, Jr);
          }
        },
        children: (Jr, jw) => {
          var Es = g2(), Ps = we(Es);
          qc(Ps, {
            children: (i1, Fw) => {
              var Ms = v2(), Hs = we(Ms);
              Fc(Hs, {
                get defaultEdgeOptions() {
                  return at();
                },
                $$events: {
                  edgeclick(qe) {
                    Xe.call(this, t, qe);
                  },
                  edgecontextmenu(qe) {
                    Xe.call(this, t, qe);
                  },
                  edgemouseenter(qe) {
                    Xe.call(this, t, qe);
                  },
                  edgemouseleave(qe) {
                    Xe.call(this, t, qe);
                  }
                }
              });
              var Os = Z(Hs, 2);
              Qc(Os, {
                get containerStyle() {
                  return B();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (qe, Gw) => {
                    var Vs = Je(), s1 = we(Vs);
                    wt(s1, t, "connectionLine", {}), N(qe, Vs);
                  }
                }
              });
              var Ls = Z(Os, 6);
              Xc(Ls, {
                get nodeClickDistance() {
                  return Ae();
                },
                $$events: {
                  nodeclick(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodemouseenter(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodemousemove(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodemouseleave(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodecontextmenu(qe) {
                    Xe.call(this, t, qe);
                  }
                }
              });
              var a1 = Z(Ls, 2);
              Uc(a1, {
                $$events: {
                  selectionclick(qe) {
                    Xe.call(this, t, qe);
                  },
                  selectioncontextmenu(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Xe.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Xe.call(this, t, qe);
                  }
                }
              }), N(i1, Ms);
            },
            $$slots: { default: !0 }
          });
          var o1 = Z(Ps, 2);
          Gc(o1, {}), N(Jr, Es);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = Z(Zo, 2);
  ed(Ss, {
    get proOptions() {
      return Le();
    },
    get position() {
      return ze();
    }
  });
  var t1 = Z(Ss, 2);
  wt(t1, t, "default", {}), q(Nt), _n(Nt, (X) => J(Gr, X), () => f(Gr)), Se(
    (X) => Io = Jt(
      Nt,
      Io,
      {
        style: rn(),
        class: X,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Mt([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    xe
  ), Ys(Nt, "clientWidth", (X) => J($t, X)), Ys(Nt, "clientHeight", (X) => J(Ht, X)), tt("dragover", Nt, function(X) {
    Xe.call(this, t, X);
  }), tt("drop", Nt, function(X) {
    Xe.call(this, t, X);
  }), N(e, Nt);
  var n1 = ve({
    get id() {
      return d();
    },
    set id(X) {
      d(X), m();
    },
    get nodes() {
      return v();
    },
    set nodes(X) {
      v(X), m();
    },
    get edges() {
      return g();
    },
    set edges(X) {
      g(X), m();
    },
    get fitView() {
      return p();
    },
    set fitView(X) {
      p(X), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(X) {
      x(X), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(X) {
      b(X), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(X) {
      $(X), m();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(X) {
      h(X), m();
    },
    get viewport() {
      return C();
    },
    set viewport(X) {
      C(X), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(X) {
      w(X), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(X) {
      k(X), m();
    },
    get selectionKey() {
      return M();
    },
    set selectionKey(X) {
      M(X), m();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(X) {
      P(X), m();
    },
    get panActivationKey() {
      return D();
    },
    set panActivationKey(X) {
      D(X), m();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(X) {
      V(X), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(X) {
      z(X), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(X) {
      R(X), m();
    },
    get nodesConnectable() {
      return T();
    },
    set nodesConnectable(X) {
      T(X), m();
    },
    get nodeDragThreshold() {
      return A();
    },
    set nodeDragThreshold(X) {
      A(X), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(X) {
      S(X), m();
    },
    get snapGrid() {
      return L();
    },
    set snapGrid(X) {
      L(X), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(X) {
      _(X), m();
    },
    get connectionRadius() {
      return O();
    },
    set connectionRadius(X) {
      O(X), m();
    },
    get connectionLineType() {
      return E();
    },
    set connectionLineType(X) {
      E(X), m();
    },
    get connectionMode() {
      return H();
    },
    set connectionMode(X) {
      H(X), m();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(X) {
      I(X), m();
    },
    get connectionLineContainerStyle() {
      return B();
    },
    set connectionLineContainerStyle(X) {
      B(X), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(X) {
      W(X), m();
    },
    get onMove() {
      return ee();
    },
    set onMove(X) {
      ee(X), m();
    },
    get onMoveEnd() {
      return F();
    },
    set onMoveEnd(X) {
      F(X), m();
    },
    get isValidConnection() {
      return Y();
    },
    set isValidConnection(X) {
      Y(X), m();
    },
    get translateExtent() {
      return ie();
    },
    set translateExtent(X) {
      ie(X), m();
    },
    get nodeExtent() {
      return pe();
    },
    set nodeExtent(X) {
      pe(X), m();
    },
    get onlyRenderVisibleElements() {
      return ge();
    },
    set onlyRenderVisibleElements(X) {
      ge(X), m();
    },
    get panOnScrollMode() {
      return se();
    },
    set panOnScrollMode(X) {
      se(X), m();
    },
    get preventScrolling() {
      return _e();
    },
    set preventScrolling(X) {
      _e(X), m();
    },
    get zoomOnScroll() {
      return U();
    },
    set zoomOnScroll(X) {
      U(X), m();
    },
    get zoomOnDoubleClick() {
      return ae();
    },
    set zoomOnDoubleClick(X) {
      ae(X), m();
    },
    get zoomOnPinch() {
      return Ee();
    },
    set zoomOnPinch(X) {
      Ee(X), m();
    },
    get panOnScroll() {
      return ue();
    },
    set panOnScroll(X) {
      ue(X), m();
    },
    get panOnDrag() {
      return Me();
    },
    set panOnDrag(X) {
      Me(X), m();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(X) {
      G(X), m();
    },
    get autoPanOnConnect() {
      return Te();
    },
    set autoPanOnConnect(X) {
      Te(X), m();
    },
    get autoPanOnNodeDrag() {
      return Ke();
    },
    set autoPanOnNodeDrag(X) {
      Ke(X), m();
    },
    get onerror() {
      return le();
    },
    set onerror(X) {
      le(X), m();
    },
    get ondelete() {
      return de();
    },
    set ondelete(X) {
      de(X), m();
    },
    get onedgecreate() {
      return ke();
    },
    set onedgecreate(X) {
      ke(X), m();
    },
    get attributionPosition() {
      return ze();
    },
    set attributionPosition(X) {
      ze(X), m();
    },
    get proOptions() {
      return Le();
    },
    set proOptions(X) {
      Le(X), m();
    },
    get defaultEdgeOptions() {
      return at();
    },
    set defaultEdgeOptions(X) {
      at(X), m();
    },
    get width() {
      return et();
    },
    set width(X) {
      et(X), m();
    },
    get height() {
      return ne();
    },
    set height(X) {
      ne(X), m();
    },
    get colorMode() {
      return Re();
    },
    set colorMode(X) {
      Re(X), m();
    },
    get onconnect() {
      return me();
    },
    set onconnect(X) {
      me(X), m();
    },
    get onconnectstart() {
      return tn();
    },
    set onconnectstart(X) {
      tn(X), m();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(X) {
      nn(X), m();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(X) {
      pn(X), m();
    },
    get oninit() {
      return Ve();
    },
    set oninit(X) {
      Ve(X), m();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(X) {
      rt(X), m();
    },
    get paneClickDistance() {
      return Ze();
    },
    set paneClickDistance(X) {
      Ze(X), m();
    },
    get nodeClickDistance() {
      return Ae();
    },
    set nodeClickDistance(X) {
      Ae(X), m();
    },
    get defaultMarkerColor() {
      return ot();
    },
    set defaultMarkerColor(X) {
      ot(X), m();
    },
    get style() {
      return rn();
    },
    set style(X) {
      rn(X), m();
    },
    get class() {
      return Kt();
    },
    set class(X) {
      Kt(X), m();
    }
  });
  return a(), n1;
}
ce(
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
  fe(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = Ic({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Lr(Fi, { getStore: () => l }), is(() => {
    l.reset();
  }), Ne();
  var u = Je(), c = we(u);
  return wt(c, t, "default", {}), N(e, u), ve({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), m();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), m();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), m();
    }
  });
}
ce(
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
var m2 = /* @__PURE__ */ re("<button><!></button>");
function ao(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  fe(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Ne();
  var c = m2();
  let d;
  var v = K(c);
  return wt(v, t, "default", { class: "button-svg" }), q(c), Se(
    (g) => d = Jt(c, d, {
      type: "button",
      class: g,
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
      () => Mt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    xe
  ), tt("click", c, function(g) {
    Xe.call(this, t, g);
  }), N(e, c), ve({
    get class() {
      return o();
    },
    set class(g) {
      o(g), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(g) {
      a(g), m();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), m();
    }
  });
}
ce(
  ao,
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
var y2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function rd(e) {
  var t = y2();
  N(e, t);
}
ce(rd, {}, [], [], !0);
var w2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = w2();
  N(e, t);
}
ce(od, {}, [], [], !0);
var x2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = x2();
  N(e, t);
}
ce(id, {}, [], [], !0);
var b2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = b2();
  N(e, t);
}
ce(ad, {}, [], [], !0);
var $2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = $2();
  N(e, t);
}
ce(sd, {}, [], [], !0);
var C2 = /* @__PURE__ */ re("<!> <!>", 1), _2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(E, "$nodesDraggable", n), i = () => te(H, "$nodesConnectable", n), a = () => te(I, "$elementsSelectable", n), s = () => te(L, "$viewport", n), l = () => te(_, "$minZoom", n), u = () => te(O, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), M = y(t, "buttonBorderColor", 12, void 0), P = y(t, "ariaLabel", 12, void 0), D = y(t, "style", 12, void 0), V = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: T,
    zoomOut: A,
    fitView: S,
    viewport: L,
    minZoom: _,
    maxZoom: O,
    nodesDraggable: E,
    nodesConnectable: H,
    elementsSelectable: I
  } = We(), B = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: M()
  }, W = () => {
    T();
  }, ee = () => {
    A();
  }, F = () => {
    S(z());
  }, Y = () => {
    J(c, !f(c)), E.set(f(c)), H.set(f(c)), I.set(f(c));
  };
  he(
    () => (o(), i(), a()),
    () => {
      J(c, o() || i() || a());
    }
  ), he(() => (s(), l()), () => {
    J(d, s().zoom <= l());
  }), he(() => (s(), u()), () => {
    J(v, s().zoom >= u());
  }), he(() => Q(V()), () => {
    J(g, V() === "horizontal" ? "horizontal" : "vertical");
  }), mt(), Ne();
  const ie = /* @__PURE__ */ xe(() => Mt([
    "svelte-flow__controls",
    f(g),
    R()
  ])), pe = /* @__PURE__ */ xe(() => P() ?? "Svelte Flow controls");
  To(e, {
    get class() {
      return f(ie);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(pe);
    },
    get style() {
      return D();
    },
    children: (se, _e) => {
      var U = _2(), ae = we(U);
      wt(ae, t, "before", {});
      var Ee = Z(ae, 2);
      {
        var ue = (ke) => {
          var ze = C2(), Le = we(ze);
          ao(Le, lt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            B,
            {
              $$events: { click: W },
              children: (et, ne) => {
                rd(et);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = Z(Le, 2);
          ao(at, lt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            B,
            {
              $$events: { click: ee },
              children: (et, ne) => {
                od(et);
              },
              $$slots: { default: !0 }
            }
          )), N(ke, ze);
        };
        ye(Ee, (ke) => {
          x() && ke(ue);
        });
      }
      var Me = Z(Ee, 2);
      {
        var G = (ke) => {
          ao(ke, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            B,
            {
              $$events: { click: F },
              children: (ze, Le) => {
                id(ze);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Me, (ke) => {
          b() && ke(G);
        });
      }
      var Te = Z(Me, 2);
      {
        var Ke = (ke) => {
          ao(ke, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            B,
            {
              $$events: { click: Y },
              children: (ze, Le) => {
                var at = Je(), et = we(at);
                {
                  var ne = (me) => {
                    sd(me);
                  }, Re = (me) => {
                    ad(me);
                  };
                  ye(et, (me) => {
                    f(c) ? me(ne) : me(Re, !1);
                  });
                }
                N(ze, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Te, (ke) => {
          $() && ke(Ke);
        });
      }
      var le = Z(Te, 2);
      wt(le, t, "default", {});
      var de = Z(le, 2);
      wt(de, t, "after", {}), N(se, U);
    },
    $$slots: { default: !0 }
  });
  var ge = ve({
    get position() {
      return p();
    },
    set position(se) {
      p(se), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(se) {
      x(se), m();
    },
    get showFitView() {
      return b();
    },
    set showFitView(se) {
      b(se), m();
    },
    get showLock() {
      return $();
    },
    set showLock(se) {
      $(se), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(se) {
      h(se), m();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(se) {
      C(se), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(se) {
      w(se), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(se) {
      k(se), m();
    },
    get buttonBorderColor() {
      return M();
    },
    set buttonBorderColor(se) {
      M(se), m();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(se) {
      P(se), m();
    },
    get style() {
      return D();
    },
    set style(se) {
      D(se), m();
    },
    get orientation() {
      return V();
    },
    set orientation(se) {
      V(se), m();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(se) {
      z(se), m();
    },
    get class() {
      return R();
    },
    set class(se) {
      R(se), m();
    }
  });
  return r(), ge;
}
ce(
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
var k2 = /* @__PURE__ */ Ce("<circle></circle>");
function ud(e, t) {
  fe(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ne();
  var o = k2();
  return Se(
    (i) => {
      be(o, "cx", n()), be(o, "cy", n()), be(o, "r", n()), xt(o, 0, i);
    },
    [
      () => vn(Mt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    xe
  ), N(e, o), ve({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), m();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), m();
    }
  });
}
ce(ud, { radius: {}, class: {} }, [], [], !0);
var S2 = /* @__PURE__ */ Ce("<path></path>");
function cd(e, t) {
  fe(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ne();
  var a = S2();
  return Se(
    (s) => {
      be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), xt(a, 0, s);
    },
    [
      () => vn(Mt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    xe
  ), N(e, a), ve({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), m();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), m();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), m();
    }
  });
}
ce(
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
const E2 = {
  [Fn.Dots]: 1,
  [Fn.Lines]: 1,
  [Fn.Cross]: 6
};
var P2 = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const M2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  fe(t, !1), Qe(e, M2);
  const [n, r] = nt(), o = () => te(k, "$flowId", n), i = () => te(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => Fn.Dots), g = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = We(), M = p() || E2[v()], P = v() === Fn.Dots, D = v() === Fn.Cross, V = Array.isArray(g()) ? g() : [g(), g()];
  he(
    () => (o(), Q(d())),
    () => {
      J(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    J(s, [
      V[0] * i().zoom || 1,
      V[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    J(l, M * i().zoom);
  }), he(() => (f(l), f(s)), () => {
    J(u, D ? [f(l), f(l)] : f(s));
  }), he(
    () => (f(l), f(u)),
    () => {
      J(c, P ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), mt(), Ne();
  var z = P2();
  let R;
  var T = K(z), A = K(T);
  {
    var S = (E) => {
      const H = /* @__PURE__ */ xe(() => f(l) / 2);
      ud(E, {
        get radius() {
          return f(H);
        },
        get class() {
          return h();
        }
      });
    }, L = (E) => {
      cd(E, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return h();
        }
      });
    };
    ye(A, (E) => {
      P ? E(S) : E(L, !1);
    });
  }
  q(T);
  var _ = Z(T);
  q(z), Se(
    (E) => {
      xt(z, 0, E, "svelte-1r7pe8d"), R = ft(z, "", R, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), be(T, "id", f(a)), be(T, "x", i().x % f(s)[0]), be(T, "y", i().y % f(s)[1]), be(T, "width", f(s)[0]), be(T, "height", f(s)[1]), be(T, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), be(_, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Mt(["svelte-flow__background", C()]))
    ],
    xe
  ), N(e, z);
  var O = ve({
    get id() {
      return d();
    },
    set id(E) {
      d(E), m();
    },
    get variant() {
      return v();
    },
    set variant(E) {
      v(E), m();
    },
    get gap() {
      return g();
    },
    set gap(E) {
      g(E), m();
    },
    get size() {
      return p();
    },
    set size(E) {
      p(E), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(E) {
      x(E), m();
    },
    get bgColor() {
      return b();
    },
    set bgColor(E) {
      b(E), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(E) {
      $(E), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(E) {
      h(E), m();
    },
    get class() {
      return C();
    },
    set class(E) {
      C(E), m();
    }
  });
  return r(), O;
}
ce(
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
var H2 = /* @__PURE__ */ Ce("<rect></rect>");
function fd(e, t) {
  fe(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ne();
  var g = H2();
  let p;
  return Se(
    (x, b) => {
      p = xt(g, 0, x, null, p, b), be(g, "x", n()), be(g, "y", r()), be(g, "rx", a()), be(g, "ry", a()), be(g, "width", o()), be(g, "height", i()), ft(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), be(g, "shape-rendering", l());
    },
    [
      () => vn(Mt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    xe
  ), N(e, g), ve({
    get x() {
      return n();
    },
    set x(x) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), m();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), m();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(x) {
      a(x), m();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), m();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), m();
    },
    get class() {
      return v();
    },
    set class(x) {
      v(x), m();
    }
  });
}
ce(
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
function zl(e, t) {
  const n = g0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = j(t.viewport);
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
const va = (e) => e instanceof Function ? e : () => e;
var O2 = /* @__PURE__ */ Ce("<title> </title>"), L2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(Me, "$flowId", n), i = () => te(ae, "$viewport", n), a = () => te(Ee, "$containerWidth", n), s = () => te(ue, "$containerHeight", n), l = () => te(U, "$nodeLookup", n), u = () => te(_e, "$nodes", n), c = () => te(G, "$panZoom", n), d = () => te(Te, "$translateExtent", n), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), D = /* @__PURE__ */ oe();
  let V = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), T = y(t, "nodeColor", 12, void 0), A = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), L = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), O = y(t, "maskColor", 12, void 0), E = y(t, "maskStrokeColor", 12, void 0), H = y(t, "maskStrokeWidth", 12, void 0), I = y(t, "width", 12, void 0), B = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), ee = y(t, "zoomable", 12, !0), F = y(t, "inversePan", 12, void 0), Y = y(t, "zoomStep", 12, void 0), ie = y(t, "style", 12, ""), pe = y(t, "class", 12, "");
  const ge = 200, se = 150, {
    nodes: _e,
    nodeLookup: U,
    viewport: ae,
    width: Ee,
    height: ue,
    flowId: Me,
    panZoom: G,
    translateExtent: Te
  } = We(), Ke = T() === void 0 ? void 0 : va(T()), le = va(R()), de = va(A()), ke = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ze = `svelte-flow__minimap-desc-${o()}`;
  let Le = /* @__PURE__ */ oe(f(v));
  const at = () => f($);
  he(
    () => (i(), a(), s()),
    () => {
      J(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), he(
    () => (l(), f(v), u()),
    () => {
      J(Le, l().size > 0 ? fc(Lo(l()), f(v)) : f(v)), u();
    }
  ), he(() => Q(I()), () => {
    J(g, I() ?? ge);
  }), he(() => Q(B()), () => {
    J(p, B() ?? se);
  }), he(
    () => (f(Le), f(g)),
    () => {
      J(x, f(Le).width / f(g));
    }
  ), he(
    () => (f(Le), f(p)),
    () => {
      J(b, f(Le).height / f(p));
    }
  ), he(
    () => (f(x), f(b)),
    () => {
      J($, Math.max(f(x), f(b)));
    }
  ), he(() => (f($), f(g)), () => {
    J(h, f($) * f(g));
  }), he(
    () => (f($), f(p)),
    () => {
      J(C, f($) * f(p));
    }
  ), he(() => f($), () => {
    J(w, 5 * f($));
  }), he(
    () => (f(Le), f(h), f(w)),
    () => {
      J(k, f(Le).x - (f(h) - f(Le).width) / 2 - f(w));
    }
  ), he(
    () => (f(Le), f(C), f(w)),
    () => {
      J(M, f(Le).y - (f(C) - f(Le).height) / 2 - f(w));
    }
  ), he(() => (f(h), f(w)), () => {
    J(P, f(h) + f(w) * 2);
  }), he(() => (f(C), f(w)), () => {
    J(D, f(C) + f(w) * 2);
  }), mt(), Ne();
  const et = /* @__PURE__ */ xe(() => ie() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), ne = /* @__PURE__ */ xe(() => Mt(["svelte-flow__minimap", pe()]));
  To(e, {
    get position() {
      return V();
    },
    get style() {
      return f(et);
    },
    get class() {
      return f(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (me, tn) => {
      var nn = Je(), pn = we(nn);
      {
        var Ve = (rt) => {
          var Ze = L2();
          be(Ze, "aria-labelledby", ze);
          let Ae;
          var ot = K(Ze);
          {
            var rn = ($t) => {
              var Ht = O2();
              be(Ht, "id", ze);
              var yr = K(Ht, !0);
              q(Ht), Se(() => dt(yr, z())), N($t, Ht);
            };
            ye(ot, ($t) => {
              z() && $t(rn);
            });
          }
          var Kt = Z(ot);
          Pt(Kt, 1, u, ($t) => $t.id, ($t, Ht) => {
            var yr = Je();
            const it = /* @__PURE__ */ xe(() => l().get(f(Ht).id));
            var ea = we(yr);
            {
              var Ur = (Nt) => {
                const Io = /* @__PURE__ */ xe(() => tr(f(it))), Ro = /* @__PURE__ */ xe(() => Ke == null ? void 0 : Ke(f(it))), Zo = /* @__PURE__ */ xe(() => le(f(it))), ta = /* @__PURE__ */ xe(() => de(f(it)));
                fd(Nt, lt(
                  {
                    get x() {
                      return f(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(it).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Io),
                  {
                    get selected() {
                      return f(it).selected;
                    },
                    get color() {
                      return f(Ro);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return f(Zo);
                    },
                    get strokeWidth() {
                      return L();
                    },
                    shapeRendering: ke,
                    get class() {
                      return f(ta);
                    }
                  }
                ));
              };
              ye(ea, (Nt) => {
                f(it) && gc(f(it)) && Nt(Ur);
              });
            }
            N($t, yr);
          });
          var Gr = Z(Kt);
          q(Ze), yt(Ze, ($t, Ht) => zl == null ? void 0 : zl($t, Ht), () => ({
            panZoom: c(),
            viewport: ae,
            getViewScale: at,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: F(),
            zoomStep: Y(),
            pannable: W(),
            zoomable: ee()
          })), Se(() => {
            be(Ze, "width", f(g)), be(Ze, "height", f(p)), be(Ze, "viewBox", `${f(k) ?? ""} ${f(M) ?? ""} ${f(P) ?? ""} ${f(D) ?? ""}`), Ae = ft(Ze, "", Ae, {
              "--xy-minimap-mask-background-color-props": O(),
              "--xy-minimap-mask-stroke-color-props": E(),
              "--xy-minimap-mask-stroke-width-props": H() ? H() * f($) : void 0
            }), be(Gr, "d", `M${f(k) - f(w)},${f(M) - f(w)}h${f(P) + f(w) * 2}v${f(D) + f(w) * 2}h${-f(P) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), N(rt, Ze);
        };
        ye(pn, (rt) => {
          c() && rt(Ve);
        });
      }
      N(me, nn);
    },
    $$slots: { default: !0 }
  });
  var Re = ve({
    get position() {
      return V();
    },
    set position(me) {
      V(me), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(me) {
      z(me), m();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(me) {
      R(me), m();
    },
    get nodeColor() {
      return T();
    },
    set nodeColor(me) {
      T(me), m();
    },
    get nodeClass() {
      return A();
    },
    set nodeClass(me) {
      A(me), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(me) {
      S(me), m();
    },
    get nodeStrokeWidth() {
      return L();
    },
    set nodeStrokeWidth(me) {
      L(me), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(me) {
      _(me), m();
    },
    get maskColor() {
      return O();
    },
    set maskColor(me) {
      O(me), m();
    },
    get maskStrokeColor() {
      return E();
    },
    set maskStrokeColor(me) {
      E(me), m();
    },
    get maskStrokeWidth() {
      return H();
    },
    set maskStrokeWidth(me) {
      H(me), m();
    },
    get width() {
      return I();
    },
    set width(me) {
      I(me), m();
    },
    get height() {
      return B();
    },
    set height(me) {
      B(me), m();
    },
    get pannable() {
      return W();
    },
    set pannable(me) {
      W(me), m();
    },
    get zoomable() {
      return ee();
    },
    set zoomable(me) {
      ee(me), m();
    },
    get inversePan() {
      return F();
    },
    set inversePan(me) {
      F(me), m();
    },
    get zoomStep() {
      return Y();
    },
    set zoomStep(me) {
      Y(me), m();
    },
    get style() {
      return ie();
    },
    set style(me) {
      ie(me), m();
    },
    get class() {
      return pe();
    },
    set class(me) {
      pe(me), m();
    }
  });
  return r(), Re;
}
ce(
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
const Nl = (e) => Lp(e);
function zt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = We(), h = (k) => {
    var M, P;
    const D = j(p), V = Nl(k) ? k : D.get(k.id), z = V.parentId ? zp(V.position, V.measured, V.parentId, D, j(x)) : V.position, R = {
      ...V,
      position: z,
      width: ((M = V.measured) == null ? void 0 : M.width) ?? V.width,
      height: ((P = V.measured) == null ? void 0 : P.height) ?? V.height
    };
    return Ar(R);
  }, C = (k, M, P = { replace: !1 }) => {
    var D;
    const V = (D = j(p).get(k)) == null ? void 0 : D.internals.userNode;
    if (!V)
      return;
    const z = typeof M == "function" ? M(V) : M;
    P.replace ? d.update((R) => R.map((T) => T.id === k ? Nl(z) ? z : { ...T, ...z } : T)) : (Object.assign(V, z), d.update((R) => R));
  }, w = (k) => j(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var M;
      return (M = w(k)) == null ? void 0 : M.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? j(d) : Al(j(p), k),
    getEdge: (k) => j(b).get(k),
    getEdges: (k) => k === void 0 ? j(v) : Al(j(b), k),
    setZoom: (k, M) => {
      const P = j(c);
      return P ? P.scaleTo(k, { duration: M == null ? void 0 : M.duration }) : Promise.resolve(!1);
    },
    getZoom: () => j(i).zoom,
    setViewport: async (k, M) => {
      const P = j(i), D = j(c);
      return D ? (await D.setViewport({
        x: k.x ?? P.x,
        y: k.y ?? P.y,
        zoom: k.zoom ?? P.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(i),
    setCenter: async (k, M, P) => {
      const D = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : j(u), V = j(c);
      return V ? (await V.setViewport({
        x: j(a) / 2 - k * D,
        y: j(s) / 2 - M * D,
        zoom: D
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, M) => {
      const P = j(c);
      if (!P)
        return Promise.resolve(!1);
      const D = hs(k, j(a), j(s), j(l), j(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await P.setViewport(D, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, M = !0, P) => {
      const D = wl(k), V = D ? k : h(k);
      return V ? (P || j(d)).filter((z) => {
        const R = j(p).get(z.id);
        if (!R || !D && z.id === k.id)
          return !1;
        const T = Ar(R), A = $o(T, V);
        return M && A > 0 || A >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (k, M, P = !0) => {
      const D = wl(k) ? k : h(k);
      if (!D)
        return !1;
      const V = $o(D, M);
      return P && V > 0 || V >= D.width * D.height;
    },
    deleteElements: async ({ nodes: k = [], edges: M = [] }) => {
      const { nodes: P, edges: D } = await uc({
        nodesToRemove: k,
        edgesToRemove: M,
        nodes: j(d),
        edges: j(v),
        onBeforeDelete: j(r)
      });
      return P && d.update((V) => V.filter((z) => !P.some(({ id: R }) => R === z.id))), D && v.update((V) => V.filter((z) => !D.some(({ id: R }) => R === z.id))), {
        deletedNodes: P,
        deletedEdges: D
      };
    },
    screenToFlowPosition: (k, M = { snapToGrid: !0 }) => {
      const P = j(g);
      if (!P)
        return k;
      const D = M.snapToGrid ? j(o) : !1, { x: V, y: z, zoom: R } = j(i), { x: T, y: A } = P.getBoundingClientRect(), S = {
        x: k.x - T,
        y: k.y - A
      };
      return Vo(S, [V, z, R], D !== null, D || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const M = j(g);
      if (!M)
        return k;
      const { x: P, y: D, zoom: V } = j(i), { x: z, y: R } = M.getBoundingClientRect(), T = vc(k, [P, D, V]);
      return {
        x: T.x + z,
        y: T.y + R
      };
    },
    toObject: () => ({
      nodes: j(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: j(v).map((k) => ({ ...k })),
      viewport: { ...j(i) }
    }),
    updateNode: C,
    updateNodeData: (k, M, P) => {
      var D;
      const V = (D = j(p).get(k)) == null ? void 0 : D.internals.userNode;
      if (!V)
        return;
      const z = typeof M == "function" ? M(V) : M;
      V.data = P != null && P.replace ? z : { ...V.data, ...z }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const M = j(p), P = j(x);
      return Vp(k, { nodeLookup: M, nodeOrigin: P });
    },
    getHandleConnections: ({ type: k, id: M, nodeId: P }) => {
      var D;
      return Array.from(((D = j($).get(`${P}-${k}-${M ?? null}`)) == null ? void 0 : D.values()) ?? []);
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
var V2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function gd(e, t) {
  fe(t, !1);
  const [n, r] = nt(), o = () => te(C, "$nodes", n), i = () => te(h, "$nodeLookup", n), a = () => te($, "$viewport", n), s = () => te(b, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: h, nodes: C } = We(), { getNodesBounds: w } = zt(), k = lr("svelteflow__node_id");
  let M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe([]), D = p() !== void 0 ? p() : 10, V = v() !== void 0 ? v() : He.Top, z = g() !== void 0 ? g() : "center";
  he(
    () => (o(), Q(d()), i()),
    () => {
      o();
      const L = Array.isArray(d()) ? d() : [d() || k];
      J(P, L.reduce(
        (_, O) => {
          const E = i().get(O);
          return E && _.push(E), _;
        },
        []
      ));
    }
  ), he(
    () => (f(P), a()),
    () => {
      const L = w(f(P));
      L && J(M, Up(L, a(), V, D, z));
    }
  ), he(() => f(P), () => {
    J(l, f(P).length === 0 ? 1 : Math.max(...f(P).map((L) => (L.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    J(u, o().filter((L) => L.selected).length);
  }), he(
    () => (Q(x()), f(P), f(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : f(P).length === 1 && f(P)[0].selected && f(u) === 1);
    }
  ), mt(), Ne();
  var R = Je(), T = we(R);
  {
    var A = (L) => {
      var _ = V2();
      let O;
      var E = K(_);
      wt(E, t, "default", {}), q(_), yt(_, (H, I) => _i == null ? void 0 : _i(H, I), () => ({ domNode: s() })), Se(
        (H) => {
          be(_, "data-id", H), O = ft(_, "", O, {
            position: "absolute",
            transform: f(M),
            "z-index": f(l)
          });
        },
        [
          () => f(P).reduce((H, I) => `${H}${I.id} `, "").trim()
        ],
        xe
      ), N(L, _);
    };
    ye(T, (L) => {
      s() && f(c) && f(P) && L(A);
    });
  }
  N(e, R);
  var S = ve({
    get nodeId() {
      return d();
    },
    set nodeId(L) {
      d(L), m();
    },
    get position() {
      return v();
    },
    set position(L) {
      v(L), m();
    },
    get align() {
      return g();
    },
    set align(L) {
      g(L), m();
    },
    get offset() {
      return p();
    },
    set offset(L) {
      p(L), m();
    },
    get isVisible() {
      return x();
    },
    set isVisible(L) {
      x(L), m();
    }
  });
  return r(), S;
}
ce(
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
function mr(e) {
  const { nodes: t, nodeLookup: n } = We();
  let r = [], o = !0;
  return Wn([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const v = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      v && l.push({
        id: v.id,
        type: v.type,
        data: v.data
      });
    }
    (!i0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Il = "tinyflow-component";
class D2 {
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
const T2 = () => {
  const e = $e([]), t = $e([]), n = $e({ x: 250, y: 100, zoom: 1 });
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
}, ni = T2();
var z2 = /* @__PURE__ */ re("<button><!></button>");
function je(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = z2();
  let i;
  var a = K(o);
  return ur(a, () => n() ?? vt), q(o), Se(() => i = Jt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), N(e, o), ve({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ce(je, { children: {} }, [], [], !0);
var N2 = /* @__PURE__ */ re("<input>");
function hd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = N2();
  ar(r);
  let o;
  Se(() => o = Jt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ve();
}
ce(hd, {}, [], [], !0);
var A2 = /* @__PURE__ */ re("<input>");
function ht(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = A2();
  ar(r);
  let o;
  Se(() => o = Jt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ve();
}
ce(ht, {}, [], [], !0);
var I2 = /* @__PURE__ */ re("<textarea></textarea>");
function pt(e, t) {
  fe(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = I2();
  kf(o);
  let i;
  return Se(() => i = Jt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), N(e, o), ve({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ce(pt, { value: {} }, [], [], !0);
var R2 = /* @__PURE__ */ re('<div role="button"><!></div>'), Z2 = /* @__PURE__ */ re("<div></div>");
function pd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Ne();
  var l = Z2();
  let u;
  return Pt(l, 5, o, Vr, (c, d, v) => {
    var g = R2();
    be(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = K(g);
    {
      var x = ($) => {
        var h = Be();
        Se(() => dt(h, f(d).label)), N($, h);
      }, b = ($) => {
        var h = Je(), C = we(h);
        ur(C, () => f(d).label ?? vt), N($, h);
      };
      ye(p, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    q(g), Se(() => xt(g, 1, `tf-tabs-item ${(v === a() ? "active" : "") ?? ""}`)), N(c, g);
  }), q(l), Se(() => u = Jt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), N(e, l), ve({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), m();
    }
  });
}
Wr(["click", "keydown"]);
ce(pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var q2 = (e, t, n) => t(f(n)), B2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, X2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), K2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), Y2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), W2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), j2 = /* @__PURE__ */ re("<div></div>");
const F2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  fe(t, !0), Qe(e, F2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => sn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = j2();
  return Pt(a, 21, n, Vr, (s, l, u) => {
    var c = W2(), d = K(c);
    be(d, "tabindex", u), d.__click = [q2, i, l], d.__keydown = [B2, i, l];
    var v = K(d);
    {
      var g = (w) => {
        var k = X2(), M = K(k);
        Kn(M, {
          get target() {
            return f(l).icon;
          }
        }), q(k), N(w, k);
      };
      ye(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var p = Z(v, 2);
    Kn(p, {
      get target() {
        return f(l).title;
      }
    });
    var x = Z(p, 2);
    q(d);
    var b = Z(d, 2);
    {
      var $ = (w) => {
        var k = K2(), M = K(k);
        Kn(M, {
          get target() {
            return f(l).description;
          }
        }), q(k), N(w, k);
      };
      ye(b, (w) => {
        f(l).description && w($);
      });
    }
    var h = Z(b, 2);
    {
      var C = (w) => {
        var k = Y2(), M = K(k);
        Kn(M, {
          get target() {
            return f(l).content;
          }
        }), q(k), N(w, k);
      };
      ye(h, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    q(c), Se((w) => xt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), N(s, c);
  }), q(a), Se(() => {
    ft(a, t.style), xt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), N(e, a), ve({
    get items() {
      return n();
    },
    set items(s) {
      n(s), m();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), m();
    }
  });
}
Wr(["click", "keydown"]);
ce(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Kn(e, t) {
  fe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = we(r);
  {
    var i = (s) => {
      var l = Je(), u = we(l);
      ur(u, () => n() ?? vt), N(s, l);
    }, a = (s) => {
      var l = Je(), u = we(l);
      os(u, n), N(s, l);
    };
    ye(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return N(e, r), ve({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ce(Kn, { target: {} }, [], [], !0);
var G2 = (e, t, n) => t(f(n)), U2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), J2 = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), Q2 = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), em = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), tm = /* @__PURE__ */ re("<!> <!>", 1), nm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), rm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), om = /* @__PURE__ */ re("<div><!></div>");
function Qt(e, t) {
  fe(t, !0);
  const n = (C, w = vt) => {
    var k = Je(), M = we(k);
    Pt(M, 19, w, (P, D) => `${D}_${P.value}`, (P, D) => {
      var V = Q2(), z = we(V);
      z.__click = [G2, x, D];
      var R = K(z), T = K(R);
      {
        var A = (O) => {
          var E = U2();
          N(O, E);
        };
        ye(T, (O) => {
          f(D).children && f(D).children.length > 0 && O(A);
        });
      }
      q(R);
      var S = Z(R, 2);
      Kn(S, {
        get target() {
          return f(D).label;
        }
      }), q(z);
      var L = Z(z, 2);
      {
        var _ = (O) => {
          var E = J2(), H = K(E);
          n(H, () => f(D).children), q(E), N(O, E);
        };
        ye(L, (O) => {
          f(D).children && f(D).children.length > 0 && (l() || c().includes(f(D).value)) && O(_);
        });
      }
      N(P, V);
    }), N(C, k);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), v = /* @__PURE__ */ bt(t, [
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
  ]), g = /* @__PURE__ */ Pe(() => {
    const C = [], w = (k) => {
      for (let M of k)
        a().length > 0 ? a().includes(M.value) && C.push(M) : s().includes(M.value) && C.push(M), M.children && M.children.length > 0 && w(M.children);
    };
    return w(r()), C;
  }), p;
  function x(C) {
    var w, k;
    if (C.children && C.children.length > 0) {
      (w = o()) == null || w(C);
      return;
    } else
      p == null || p.hide(), (k = i()) == null || k(C);
  }
  var b = om();
  let $;
  var h = K(b);
  return _n(
    Fr(h, {
      floating: (C) => {
        var w = em(), k = K(w);
        n(k, r), q(w), N(C, w);
      },
      children: (C, w) => {
        var k = rm();
        let M;
        var P = K(k);
        Pt(
          P,
          23,
          () => f(g),
          (D, V) => `${V}_${D.value}`,
          (D, V, z) => {
            var R = Je(), T = we(R);
            {
              var A = (L) => {
                var _ = Je(), O = we(_);
                {
                  var E = (H) => {
                    Kn(H, {
                      get target() {
                        return f(V).label;
                      }
                    });
                  };
                  ye(O, (H) => {
                    f(z) === 0 && H(E);
                  });
                }
                N(L, _);
              }, S = (L) => {
                var _ = tm(), O = we(_);
                Kn(O, {
                  get target() {
                    return f(V).label;
                  }
                });
                var E = Z(O, 2);
                {
                  var H = (I) => {
                    var B = Be(",");
                    N(I, B);
                  };
                  ye(E, (I) => {
                    f(z) < f(g).length - 1 && I(H);
                  });
                }
                N(L, _);
              };
              ye(T, (L) => {
                u() ? L(S, !1) : L(A);
              });
            }
            N(D, R);
          },
          (D) => {
            var V = nm(), z = K(V, !0);
            q(V), Se(() => dt(z, d())), N(D, V);
          }
        ), q(P), De(2), q(k), Se(() => M = Jt(k, M, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), N(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), q(b), Se(() => $ = Jt(b, $, {
    ...v,
    class: `tf-select ${v.class ?? ""}`
  })), N(e, b), ve({
    get items() {
      return r();
    },
    set items(C) {
      r(C), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), m();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), m();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), m();
    }
  });
}
Wr(["click"]);
ce(
  Qt,
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
const _o = Math.min, Er = Math.max, Ei = Math.round, wn = (e) => ({
  x: e,
  y: e
}), im = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, am = {
  start: "end",
  end: "start"
};
function Na(e, t, n) {
  return Er(e, _o(t, n));
}
function zo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vr(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function bs(e) {
  return e === "y" ? "height" : "width";
}
function Rr(e) {
  return ["top", "bottom"].includes(vr(e)) ? "y" : "x";
}
function $s(e) {
  return yd(Rr(e));
}
function sm(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = $s(e), i = bs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Pi(a)), [a, Pi(a)];
}
function lm(e) {
  const t = Pi(e);
  return [Aa(e), t, Aa(t)];
}
function Aa(e) {
  return e.replace(/start|end/g, (t) => am[t]);
}
function um(e, t, n) {
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
function cm(e, t, n, r) {
  const o = No(e);
  let i = um(vr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Aa)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => im[t]);
}
function dm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wd(e) {
  return typeof e != "number" ? dm(e) : {
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
function Rl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Rr(t), a = $s(t), s = bs(a), l = vr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (No(t)) {
    case "start":
      g[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      g[a] += v * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const fm = async (e, t, n) => {
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
  } = Rl(u, r, l), v = r, g = {}, p = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: h,
      y: C,
      data: w,
      reset: k
    } = await $({
      x: c,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = C ?? d, g = {
      ...g,
      [b]: {
        ...g[b],
        ...w
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Rl(u, v, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function xd(e, t) {
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
    altBoundary: v = !1,
    padding: g = 0
  } = zo(t, e), p = wd(g), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = Mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = d === "floating" ? {
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
  }, w = Mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: h,
    strategy: l
  }) : $);
  return {
    top: (b.top - w.top + p.top) / C.y,
    bottom: (w.bottom - b.bottom + p.bottom) / C.y,
    left: (b.left - w.left + p.left) / C.x,
    right: (w.right - b.right + p.right) / C.x
  };
}
const vm = (e) => ({
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
    } = zo(e, t) || {};
    if (u == null)
      return {};
    const d = wd(c), v = {
      x: n,
      y: r
    }, g = $s(o), p = bs(g), x = await a.getDimensions(u), b = g === "y", $ = b ? "top" : "left", h = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[g] - v[g] - i.floating[p], k = v[g] - i.reference[g], M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = M ? M[C] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(M))) && (P = s.floating[C] || i.floating[p]);
    const D = w / 2 - k / 2, V = P / 2 - x[p] / 2 - 1, z = _o(d[$], V), R = _o(d[h], V), T = z, A = P - x[p] - R, S = P / 2 - x[p] / 2 + D, L = Na(T, S, A), _ = !l.arrow && No(o) != null && S !== L && i.reference[p] / 2 - (S < T ? z : R) - x[p] / 2 < 0, O = _ ? S < T ? S - T : S - A : 0;
    return {
      [g]: v[g] + O,
      data: {
        [g]: L,
        centerOffset: S - L - O,
        ..._ && {
          alignmentOffset: O
        }
      },
      reset: _
    };
  }
}), gm = function(e) {
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
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: x = !0,
        ...b
      } = zo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = vr(o), h = Rr(s), C = vr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Pi(s)] : lm(s)), M = p !== "none";
      !v && M && k.push(...cm(s, x, p, w));
      const P = [s, ...k], D = await xd(t, b), V = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(D[$]), d) {
        const S = sm(o, a, w);
        V.push(D[S[0]], D[S[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: V
      }], !V.every((S) => S <= 0)) {
        var R, T;
        const S = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, L = P[S];
        if (L)
          return {
            data: {
              index: S,
              overflows: z
            },
            reset: {
              placement: L
            }
          };
        let _ = (T = z.filter((O) => O.overflows[0] <= 0).sort((O, E) => O.overflows[1] - E.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var A;
              const O = (A = z.filter((E) => {
                if (M) {
                  const H = Rr(E.placement);
                  return H === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((H) => H > 0).reduce((H, I) => H + I, 0)]).sort((E, H) => E[1] - H[1])[0]) == null ? void 0 : A[0];
              O && (_ = O);
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
async function hm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = vr(n), s = No(n), l = Rr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = zo(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof p == "number" && (g = s === "end" ? p * -1 : p), l ? {
    x: g * c,
    y: v * u
  } : {
    x: v * u,
    y: g * c
  };
}
const pm = function(e) {
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
      } = t, l = await hm(t, e);
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
}, mm = function(e) {
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
              x: $,
              y: h
            } = b;
            return {
              x: $,
              y: h
            };
          }
        },
        ...l
      } = zo(e, t), u = {
        x: n,
        y: r
      }, c = await xd(t, l), d = Rr(vr(o)), v = yd(d);
      let g = u[v], p = u[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + c[b], C = g - c[$];
        g = Na(h, g, C);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + c[b], C = p - c[$];
        p = Na(h, p, C);
      }
      const x = s.fn({
        ...t,
        [v]: g,
        [d]: p
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function Gi() {
  return typeof window < "u";
}
function jr(e) {
  return bd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (bd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bd(e) {
  return Gi() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function dn(e) {
  return Gi() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function kn(e) {
  return Gi() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function Zl(e) {
  return !Gi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ym(e) {
  return ["table", "td", "th"].includes(jr(e));
}
function Ui(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Cs(e) {
  const t = _s(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function wm(e) {
  let t = Jn(e);
  for (; kn(t) && !Zr(t); ) {
    if (Cs(t))
      return t;
    if (Ui(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function _s() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(jr(e));
}
function fn(e) {
  return Bt(e).getComputedStyle(e);
}
function Ji(e) {
  return dn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (jr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zl(e) && e.host || // Fallback.
    In(e)
  );
  return Zl(t) ? t.host : t;
}
function $d(e) {
  const t = Jn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Ao(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(o);
  return i ? (Ia(a), t.concat(a, a.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Ia(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _d(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ei(n) !== i || Ei(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function kd(e) {
  return dn(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = kd(e);
  if (!kn(t))
    return wn(1);
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
const xm = /* @__PURE__ */ wn(0);
function Sd(e) {
  const t = Bt(e);
  return !_s() || !t.visualViewport ? xm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function ko(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = kd(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Pr(r)) : a = Pr(e));
  const s = bm(i, n, r) ? Sd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), g = r && dn(r) ? Bt(r) : r;
    let p = v, x = Ia(p);
    for (; x && r && g !== p; ) {
      const b = Pr(x), $ = x.getBoundingClientRect(), h = fn(x), C = $.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += w, p = Bt(x), x = Ia(p);
    }
  }
  return Mi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ks(e, t) {
  const n = Ji(e).scrollLeft;
  return t ? t.left + n : ko(In(e)).left + n;
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
function $m(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = In(r), s = t ? Ui(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((jr(r) !== "body" || Ao(a)) && (l = Ji(r)), kn(r))) {
    const g = ko(r);
    u = Pr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const v = a && !d && !i ? Ed(a, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function Cm(e) {
  return Array.from(e.getClientRects());
}
function _m(e) {
  const t = In(e), n = Ji(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ks(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function km(e, t) {
  const n = Bt(e), r = In(e), o = n.visualViewport;
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
function Sm(e, t) {
  const n = ko(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Pr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = km(e, n);
  else if (t === "document")
    r = _m(In(e));
  else if (dn(t))
    r = Sm(t, n);
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
function Pd(e, t) {
  const n = Jn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Pd(n, t);
}
function Em(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((s) => dn(s) && jr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; dn(a) && !Zr(a); ) {
    const s = fn(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Ao(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function Pm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ui(t) ? [] : Em(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = ql(t, u, o);
    return l.top = Er(c.top, l.top), l.right = _o(c.right, l.right), l.bottom = _o(c.bottom, l.bottom), l.left = Er(c.left, l.left), l;
  }, ql(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Mm(e) {
  const {
    width: t,
    height: n
  } = _d(e);
  return {
    width: t,
    height: n
  };
}
function Hm(e, t, n) {
  const r = kn(t), o = In(t), i = n === "fixed", a = ko(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  if (r || !r && !i)
    if ((jr(t) !== "body" || Ao(o)) && (s = Ji(t)), r) {
      const v = ko(t, !0, i, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && (l.x = ks(o));
  const u = o && !r && !i ? Ed(o, s) : wn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function ga(e) {
  return fn(e).position === "static";
}
function Bl(e, t) {
  if (!kn(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function Md(e, t) {
  const n = Bt(e);
  if (Ui(e))
    return n;
  if (!kn(e)) {
    let o = Jn(e);
    for (; o && !Zr(o); ) {
      if (dn(o) && !ga(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Bl(e, t);
  for (; r && ym(r) && ga(r); )
    r = Bl(r, t);
  return r && Zr(r) && ga(r) && !Cs(r) ? n : r || wm(e) || n;
}
const Om = async function(e) {
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Hm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Lm(e) {
  return fn(e).direction === "rtl";
}
const Vm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $m,
  getDocumentElement: In,
  getClippingRect: Pm,
  getOffsetParent: Md,
  getElementRects: Om,
  getClientRects: Cm,
  getDimensions: Mm,
  getScale: Pr,
  isElement: dn,
  isRTL: Lm
}, Dm = pm, Tm = mm, zm = gm, Nm = vm, Am = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Vm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fm(e, t, {
    ...o,
    platform: i
  });
}, Im = ({
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
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    Am(e, u, {
      placement: r,
      middleware: [
        Dm(o),
        // 手动偏移配置
        zm(i),
        //自动翻转
        Tm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Nm({ element: c })] : []
      ]
    }).then(({ x: $, y: h, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: M } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
        });
      }
    });
  }
  let v = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? p() : g();
  }
  function b($) {
    u.contains($.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      p();
    },
    isVisible() {
      return v;
    }
  };
};
var Rm = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Fr(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  en(() => (s = Im({
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
  var u = Rm(), c = K(u), d = K(c);
  ur(d, n), q(c), _n(c, (p) => i = p, () => i);
  var v = Z(c, 2), g = K(v);
  return ur(g, r), q(v), _n(v, (p) => a = p, () => a), q(u), N(e, u), ve({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), m();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), m();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), m();
    }
  });
}
ce(Fr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ue(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Je(), s = we(a);
  return Df(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = Jt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Je(), v = we(d);
    ur(v, () => n() ?? vt), N(u, d);
  }), N(e, a), ve({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), m();
    }
  });
}
ce(Ue, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Zm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const qm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Qi(e, t) {
  fe(t, !0), Qe(e, qm);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Zm();
      N(r, i);
    },
    $$slots: { default: !0 }
  })), ve();
}
ce(Qi, {}, [], [], !0);
const Bm = () => {
  const e = We();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, qr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Xm = () => {
  const { nodes: e, nodeLookup: t } = We();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = j(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = qr(), a = {
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
}, Qn = () => lr("tinyflow_options");
function gt() {
  return lr("svelteflow__node_id");
}
var Km = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Ym = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Wm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), jm = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Fm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Gm = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), Um = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Jm = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Qm = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ey = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function hn(e, t) {
  fe(t, !0), Qe(e, ey);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), p = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = zt(), h = /* @__PURE__ */ Pe(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = Bm(), { copyNode: w } = Xm(), k = Qn(), M = () => {
    var H;
    (H = k.onNodeExecute) == null || H.call(k, $(r()));
  };
  let P = gt();
  var D = Qm(), V = we(D);
  {
    var z = (H) => {
      gd(H, {
        get position() {
          return He.Top;
        },
        align: "end",
        children: (I, B) => {
          var W = Jm(), ee = K(W);
          {
            var F = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ae, Ee) => {
                  var ue = Km();
                  N(ae, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ye(ee, (U) => {
              u() && U(F);
            });
          }
          var Y = Z(ee, 2);
          {
            var ie = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (ae, Ee) => {
                  var ue = Ym();
                  N(ae, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ye(Y, (U) => {
              l() && U(ie);
            });
          }
          var pe = Z(Y, 2);
          {
            var ge = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ae, Ee) => {
                  var ue = Wm();
                  N(ae, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ye(pe, (U) => {
              s() && U(ge);
            });
          }
          var se = Z(pe, 2);
          {
            var _e = (U) => {
              Fr(U, {
                placement: "bottom",
                floating: (ae) => {
                  var Ee = Gm(), ue = K(Ee), Me = Z(K(ue));
                  ht(Me, {
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Le = ze.target.value;
                      b(P, { title: Le });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(ue);
                  var G = Z(ue, 2), Te = Z(K(G));
                  pt(Te, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Le = ze.target.value;
                      b(P, { description: Le });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(G);
                  var Ke = Z(G, 2);
                  {
                    var le = (ze) => {
                      var Le = jm(), at = Z(K(Le));
                      pt(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (et) => {
                          const ne = et.target.value;
                          b(P, { condition: ne });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(Le), N(ze, Le);
                    };
                    ye(Ke, (ze) => {
                      d() && ze(le);
                    });
                  }
                  var de = Z(Ke, 2), ke = Z(K(de), 2);
                  ar(ke), ke.__change = [Fm, b, P], q(de), q(Ee), Se(() => Af(ke, !!n().async)), N(ae, Ee);
                },
                children: (ae, Ee) => {
                  je(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ue, Me) => {
                      var G = Um();
                      N(ue, G);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ye(se, (U) => {
              c() && U(_e);
            });
          }
          q(W), N(I, W);
        },
        $$slots: { default: !0 }
      });
    };
    ye(V, (H) => {
      (s() || l() || u()) && H(z);
    });
  }
  var R = Z(V, 2), T = Z(K(R), 2), A = K(T);
  md(A, {
    get items() {
      return f(h);
    },
    activeKeys: x,
    onChange: (H, I) => {
      var B;
      b(r(), { expand: I == null ? void 0 : I.includes("key") }), (B = p()) == null || B(I != null && I.includes("key") ? "key" : "");
    }
  }), q(T), q(R);
  var S = Z(R, 2);
  {
    var L = (H) => {
      Un(H, {
        type: "target",
        get position() {
          return He.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(S, (H) => {
      g() && H(L);
    });
  }
  var _ = Z(S, 2);
  {
    var O = (H) => {
      Un(H, {
        type: "source",
        get position() {
          return He.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(_, (H) => {
      v() && H(O);
    });
  }
  var E = Z(_, 2);
  return ur(E, () => i() ?? vt), N(e, D), ve({
    get data() {
      return n();
    },
    set data(H) {
      n(H), m();
    },
    get id() {
      return r();
    },
    set id(H = "") {
      r(H), m();
    },
    get icon() {
      return o();
    },
    set icon(H) {
      o(H), m();
    },
    get handle() {
      return i();
    },
    set handle(H) {
      i(H), m();
    },
    get children() {
      return a();
    },
    set children(H) {
      a(H), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(H = !0) {
      s(H), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(H = !0) {
      l(H), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(H = !0) {
      u(H), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(H = !0) {
      c(H), m();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(H = !0) {
      d(H), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(H = !0) {
      v(H), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(H = !0) {
      g(H), m();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(H) {
      p(H), m();
    }
  });
}
Wr(["change"]);
ce(
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
], ty = [
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
var ny = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ry = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), oy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const iy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  fe(t, !0), Qe(e, iy);
  const [n, r] = nt(), o = () => te(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Pe(() => mr(s)), u = /* @__PURE__ */ Pe(() => {
    var V, z;
    return {
      ...i(),
      ...(z = (V = o()) == null ? void 0 : V.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = zt(), d = (V, z) => {
    c(s, (R) => {
      let T = R.data.parameters;
      return T[a()][V] = z, { parameters: T };
    });
  }, v = (V) => {
    const z = V.target.value;
    d("name", z);
  }, g = (V) => {
    const z = V.target.checked;
    d("required", z);
  }, p = (V) => {
    const z = V.value;
    z && d("dataType", z);
  };
  let x;
  const b = () => {
    c(s, (V) => {
      let z = V.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), x == null || x.hide();
  };
  var $ = oy(), h = we($), C = K(h);
  ht(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), q(h);
  var w = Z(h, 2), k = K(w);
  hd(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), q(w);
  var M = Z(w, 2), P = K(M);
  _n(
    Fr(P, {
      placement: "bottom",
      floating: (V) => {
        var z = ny(), R = K(z), T = Z(K(R));
        const A = /* @__PURE__ */ Pe(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Qt(T, {
          items: Hd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(A);
          }
        }), q(R);
        var S = Z(R, 2), L = Z(K(S));
        pt(L, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (I) => {
            const B = I.target.value;
            d("defaultValue", B);
          }
        }), q(S);
        var _ = Z(S, 2), O = Z(K(_));
        pt(O, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (I) => {
            const B = I.target.value;
            d("description", B);
          }
        }), q(_);
        var E = Z(_, 2), H = K(E);
        je(H, {
          onclick: b,
          children: (I, B) => {
            De();
            var W = Be("删除");
            N(I, W);
          },
          $$slots: { default: !0 }
        }), q(E), q(z), N(V, z);
      },
      children: (V, z) => {
        je(V, {
          class: "input-btn-more",
          children: (R, T) => {
            var A = ry();
            N(R, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => x = V,
    () => x
  ), q(M), N(e, $);
  var D = ve({
    get parameter() {
      return i();
    },
    set parameter(V) {
      i(V), m();
    },
    get index() {
      return a();
    },
    set index(V) {
      a(V), m();
    }
  });
  return r(), D;
}
ce(Od, { parameter: {}, index: {} }, [], [], !0);
var ay = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), sy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), ly = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const uy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ld(e, t) {
  fe(t, !0), Qe(e, uy);
  const [n, r] = nt(), o = () => te(f(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Pe(() => mr(i)), s = /* @__PURE__ */ Pe(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = ly(), u = K(l);
  {
    var c = (v) => {
      var g = ay();
      De(4), N(v, g);
    };
    ye(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = Z(u, 2);
  Pt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, p) => {
      Od(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(p);
        }
      });
    },
    (v) => {
      var g = sy();
      N(v, g);
    }
  ), q(l), N(e, l), ve(), r();
}
ce(Ld, {}, [], [], !0);
const Hi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = qr()), Hi(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = zt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Hi(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: qr()
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
var cy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), dy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const vy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Vd(e, t) {
  fe(t, !0), Qe(e, vy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
  return hn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = cy();
      N(a, s);
    },
    children: (a, s) => {
      var l = fy(), u = we(l), c = K(u);
      Ue(c, {
        level: 3,
        children: (g, p) => {
          De();
          var x = Be("输入参数");
          N(g, x);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, p) => {
          var x = dy();
          N(g, x);
        },
        $$slots: { default: !0 }
      }), q(u);
      var v = Z(u, 2);
      Ld(v, {}), N(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ce(Vd, { data: {} }, [], [], !0);
const Dd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Dd(e, r.source, n));
}, Xl = (e, t) => {
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
}, gy = (e = !1) => {
  const t = gt(), n = mr(t), { nodes: r, edges: o } = We();
  return Wn([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = Xl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Dd(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Xl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var hy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), py = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const my = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Td(e, t) {
  fe(t, !0), Qe(e, my);
  const [n, r] = nt(), o = () => te(f(c), "$node", n), i = () => te(C, "$selectItems", n);
  en(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Pe(() => mr(u)), d = /* @__PURE__ */ Pe(() => {
    var L;
    return {
      ...a(),
      ...(L = o()) == null ? void 0 : L.data[l()][s()]
    };
  });
  const { updateNodeData: v } = zt(), g = (L, _) => {
    v(u, (O) => {
      let E = O.data[l()];
      return E[s()] = { ...E[s()], [L]: _ }, { [l()]: E };
    });
  }, p = (L, _) => {
    const O = _.target.value;
    g(L, O);
  }, x = (L) => {
    const _ = L.value;
    g("ref", _);
  }, b = (L) => {
    const _ = L.value;
    g("refType", _);
  };
  let $;
  const h = () => {
    v(u, (L) => {
      let _ = L.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), $ == null || $.hide();
  }, C = gy();
  var w = py(), k = we(w), M = K(k);
  const P = /* @__PURE__ */ Pe(() => f(d).nameDisabled === !0);
  ht(M, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(P);
    },
    oninput: (L) => p("name", L)
  }), q(k);
  var D = Z(k, 2), V = K(D);
  {
    var z = (L) => {
      ht(L, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, R = (L, _) => {
      {
        var O = (E) => {
          const H = /* @__PURE__ */ Pe(() => [f(d).ref]);
          Qt(E, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(H);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        ye(
          L,
          (E) => {
            f(d).refType !== "input" && E(O);
          },
          _
        );
      }
    };
    ye(V, (L) => {
      f(d).refType === "fixed" ? L(z) : L(R, !1);
    });
  }
  q(D);
  var T = Z(D, 2), A = K(T);
  _n(
    Fr(A, {
      placement: "bottom",
      floating: (L) => {
        var _ = hy(), O = K(_), E = Z(K(O));
        const H = /* @__PURE__ */ Pe(() => f(d).refType ? [f(d).refType] : []);
        Qt(E, {
          items: ty,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(H);
          },
          onSelect: b
        }), q(O);
        var I = Z(O, 2), B = Z(K(I));
        pt(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ie) => {
            p("defaultValue", ie);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), q(I);
        var W = Z(I, 2), ee = Z(K(W));
        pt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ie) => {
            p("description", ie);
          },
          get value() {
            return f(d).description;
          }
        }), q(W);
        var F = Z(W, 2), Y = K(F);
        je(Y, {
          onclick: h,
          children: (ie, pe) => {
            De();
            var ge = Be("删除");
            N(ie, ge);
          },
          $$slots: { default: !0 }
        }), q(F), q(_), N(L, _);
      },
      children: (L, _) => {
        Qi(L, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => $ = L,
    () => $
  ), q(T), N(e, w);
  var S = ve({
    get parameter() {
      return a();
    },
    set parameter(L) {
      a(L), m();
    },
    get index() {
      return s();
    },
    set index(L) {
      s(L), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(L) {
      l(L), m();
    }
  });
  return r(), S;
}
ce(Td, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), wy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), xy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const by = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  fe(t, !0), Qe(e, by);
  const [n, r] = nt(), o = () => te(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Pe(() => mr(s)), u = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var c = xy(), d = K(c);
  {
    var v = (x) => {
      var b = yy();
      De(4), N(x, b);
    };
    ye(d, (x) => {
      f(u).length !== 0 && x(v);
    });
  }
  var g = Z(d, 2);
  Pt(
    g,
    19,
    () => f(u),
    (x) => x.id,
    (x, b, $) => {
      Td(x, {
        get parameter() {
          return f(b);
        },
        get index() {
          return f($);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (x) => {
      var b = wy(), $ = K(b, !0);
      q(b), Se(() => dt($, i())), N(x, b);
    }
  ), q(c), N(e, c);
  var p = ve({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "parameters") {
      a(x), m();
    }
  });
  return r(), p;
}
ce(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var $y = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Cy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _y = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const ky = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  fe(t, !0), Qe(e, ky);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
  return hn(e, lt(
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
        var s = $y();
        N(a, s);
      },
      children: (a, s) => {
        var l = _y(), u = we(l), c = K(u);
        Ue(c, {
          level: 3,
          children: (g, p) => {
            De();
            var x = Be("输出参数");
            N(g, x);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, p) => {
            var x = Cy();
            N(g, x);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = Z(u, 2);
        Zt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), N(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ce(zd, { data: {} }, [], [], !0);
var Sy = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ey = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Py = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), My = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Hy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  fe(t, !0), Qe(e, Hy);
  const [n, r] = nt(), o = () => te(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Pe(() => mr(l)), c = /* @__PURE__ */ Pe(() => {
    var O;
    let E = (O = o()) == null ? void 0 : O.data[s()], H;
    if (E && a().length > 0) {
      let I = E;
      for (let B = 0; B < a().length; B++) {
        const W = a()[B];
        B == a().length - 1 ? H = I[W] : I = I[W].children;
      }
    }
    return { ...i(), ...H };
  });
  const { updateNodeData: d } = zt(), v = (O, E) => {
    d(l, (H) => {
      const I = H.data[s()];
      if (I && a().length > 0) {
        let B = I;
        for (let W = 0; W < a().length; W++) {
          const ee = a()[W];
          W == a().length - 1 ? B[ee] = { ...B[ee], [O]: E } : B = I[ee].children;
        }
      }
      return { [s()]: I };
    });
  }, g = (O) => {
    const E = O.target.value;
    v("name", E);
  }, p = (O) => {
    const E = O.value;
    v("dataType", E);
  };
  let x;
  const b = () => {
    d(l, (O) => {
      let E = O.data[s()];
      if (E && a().length > 0) {
        let H = E;
        for (let I = 0; I < a().length; I++) {
          const B = a()[I];
          I == a().length - 1 ? H.splice(B, 1) : H = H[B].children;
        }
      }
      return { [s()]: [...E] };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (O) => {
      let E = O.data[s()];
      if (E && a().length > 0) {
        let H = E;
        for (let I = 0; I < a().length; I++) {
          const B = a()[I];
          I == a().length - 1 ? H[B].children ? H[B].children.push({
            id: qr(),
            name: "newParam",
            dataType: "String"
          }) : H[B].children = [
            {
              id: qr(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[B].children;
        }
      }
      return { [s()]: [...E] };
    });
  };
  var h = My(), C = we(h), w = K(C);
  {
    var k = (O) => {
      var E = Je(), H = we(E);
      Pt(H, 17, a, Vr, (I, B) => {
        De();
        var W = Be(" ");
        N(I, W);
      }), N(O, E);
    };
    ye(w, (O) => {
      a().length > 1 && O(k);
    });
  }
  var M = Z(w, 2);
  const P = /* @__PURE__ */ Pe(() => f(c).nameDisabled === !0);
  ht(M, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return f(P);
    }
  }), q(C);
  var D = Z(C, 2), V = K(D);
  const z = /* @__PURE__ */ Pe(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Pe(() => f(c).dataTypeDisabled === !0);
  Qt(V, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(z);
    },
    get disabled() {
      return f(R);
    },
    onSelect: p
  });
  var T = Z(V, 2);
  {
    var A = (O) => {
      je(O, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (E, H) => {
          var I = Sy();
          N(E, I);
        },
        $$slots: { default: !0 }
      });
    };
    ye(T, (O) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && O(A);
    });
  }
  q(D);
  var S = Z(D, 2), L = K(S);
  _n(
    Fr(L, {
      placement: "bottom",
      floating: (O) => {
        var E = Py(), H = K(E), I = Z(K(H));
        const B = /* @__PURE__ */ Pe(() => f(c).defaultValue || "");
        pt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(B);
          },
          onchange: (pe) => {
            const ge = pe.target.value;
            v("defaultValue", ge);
          }
        }), q(H);
        var W = Z(H, 2), ee = Z(K(W));
        const F = /* @__PURE__ */ Pe(() => f(c).description || "");
        pt(ee, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(F);
          },
          onchange: (pe) => {
            const ge = pe.target.value;
            v("description", ge);
          }
        }), q(W);
        var Y = Z(W, 2);
        {
          var ie = (pe) => {
            var ge = Ey(), se = K(ge);
            je(se, {
              onclick: b,
              children: (_e, U) => {
                De();
                var ae = Be("删除");
                N(_e, ae);
              },
              $$slots: { default: !0 }
            }), q(ge), N(pe, ge);
          };
          ye(Y, (pe) => {
            f(c).deleteDisabled !== !0 && pe(ie);
          });
        }
        q(E), N(O, E);
      },
      children: (O, E) => {
        Qi(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => x = O,
    () => x
  ), q(S), N(e, h);
  var _ = ve({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), m();
    },
    get position() {
      return a();
    },
    set position(O) {
      a(O), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(O) {
      s(O), m();
    }
  });
  return r(), _;
}
ce(Nd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Oy = /* @__PURE__ */ re("<!> <!>", 1), Ly = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Vy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Dy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ty = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  fe(t, !0), Qe(e, Ty);
  const [n, r] = nt(), o = () => te(f(u), "$node", n), i = (b, $ = vt, h = vt) => {
    var C = Je(), w = we(C);
    Pt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, M, P) => {
        var D = Oy(), V = we(D);
        const z = /* @__PURE__ */ Pe(() => [...h(), f(P)]);
        Nd(V, {
          get parameter() {
            return f(M);
          },
          get position() {
            return f(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var R = Z(V, 2);
        {
          var T = (A) => {
            var S = /* @__PURE__ */ xe(() => [...h(), f(P)]);
            i(A, () => f(M).children, () => f(S));
          };
          ye(R, (A) => {
            f(M).children && A(T);
          });
        }
        N(k, D);
      },
      (k) => {
        var M = Je(), P = we(M);
        {
          var D = (V) => {
            var z = Ly(), R = K(z, !0);
            q(z), Se(() => dt(R, a())), N(V, z);
          };
          ye(P, (V) => {
            h().length === 0 && V(D);
          });
        }
        N(k, M);
      }
    ), N(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Pe(() => mr(l)), c = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Dy(), v = K(d);
  {
    var g = (b) => {
      var $ = Vy();
      De(4), N(b, $);
    };
    ye(v, (b) => {
      f(c).length !== 0 && b(g);
    });
  }
  var p = Z(v, 2);
  i(p, () => f(c) || [], () => []), q(d), N(e, d);
  var x = ve({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输出参数") {
      a(b), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "outputDefs") {
      s(b), m();
    }
  });
  return r(), x;
}
ce(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var zy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Iy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ry = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Zy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const By = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  fe(t, !0), Qe(e, By);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ _t(sn([]));
  en(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = zt(), u = (c) => {
    l(o, () => ({ outType: c })), c === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, { outputDefs: [] });
  };
  return un(() => {
    n().outType || u("text");
  }), hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = zy();
        N(c, d);
      },
      children: (c, d) => {
        var v = qy(), g = we(v), p = K(g);
        Ue(p, {
          level: 3,
          children: (ue, Me) => {
            De();
            var G = Be("输入参数");
            N(ue, G);
          },
          $$slots: { default: !0 }
        });
        var x = Z(p, 2);
        je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ue, Me) => {
            var G = Ny();
            N(ue, G);
          },
          $$slots: { default: !0 }
        }), q(g);
        var b = Z(g, 2);
        Zt(b, {});
        var $ = Z(b, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (ue, Me) => {
            De();
            var G = Be("模型设置");
            N(ue, G);
          },
          $$slots: { default: !0 }
        });
        var h = Z($, 4), C = K(h);
        const w = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        Qt(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ue) => {
            const Me = ue.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return f(w);
          }
        });
        var k = Z(C, 2);
        Qi(k, {}), q(h);
        var M = Z(h, 4), P = K(M), D = K(P), V = K(D);
        q(D);
        var z = Z(D, 2);
        ar(z), z.__input = [Ay, l, o], q(P), q(M);
        var R = Z(M, 2), T = K(R), A = K(T), S = K(A);
        q(A);
        var L = Z(A, 2);
        ar(L), L.__input = [Iy, l, o], q(T), q(R);
        var _ = Z(R, 2), O = K(_), E = K(O), H = K(E);
        q(E);
        var I = Z(E, 2);
        ar(I), I.__input = [Ry, l, o], q(O), q(_);
        var B = Z(_, 4), W = K(B);
        const ee = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        pt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(ee);
          },
          oninput: (ue) => {
            l(o, { systemPrompt: ue.target.value });
          }
        }), q(B);
        var F = Z(B, 4), Y = K(F);
        const ie = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        pt(Y, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ie);
          },
          oninput: (ue) => {
            l(o, { userPrompt: ue.target.value });
          }
        }), q(F);
        var pe = Z(F, 2), ge = K(pe);
        Ue(ge, {
          level: 3,
          mt: "10px",
          children: (ue, Me) => {
            De();
            var G = Be("输出参数");
            N(ue, G);
          },
          $$slots: { default: !0 }
        });
        var se = Z(ge, 2);
        const _e = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        Qt(se, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ue) => {
            u(ue.value);
          },
          get value() {
            return f(_e);
          }
        });
        var U = Z(se, 2);
        {
          var ae = (ue) => {
            je(ue, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Me, G) => {
                var Te = Zy();
                N(Me, Te);
              },
              $$slots: { default: !0 }
            });
          };
          ye(U, (ue) => {
            n().outType === "json" && ue(ae);
          });
        }
        q(pe);
        var Ee = Z(pe, 2);
        Rn(Ee, {}), Se(() => {
          dt(V, `Temperature: ${n().temperature ?? 0.5}`), oa(z, n().temperature ?? 0.5), dt(S, `Top P: ${n().topP ?? 0.9}`), oa(L, n().topP ?? 0.9), dt(H, `Top K: ${n().topK ?? 50}`), oa(I, n().topK ?? 50);
        }), N(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
Wr(["input"]);
ce(Ad, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ky = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Id(e, t) {
  fe(t, !0), Qe(e, jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  en(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: i } = Pn(), { updateNodeData: a } = zt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Xy();
        N(l, u);
      },
      children: (l, u) => {
        var c = Wy(), d = we(c), v = K(d);
        Ue(v, {
          level: 3,
          children: (z, R) => {
            De();
            var T = Be("输入参数");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var g = Z(v, 2);
        je(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, R) => {
            var T = Ky();
            N(z, T);
          },
          $$slots: { default: !0 }
        }), q(d);
        var p = Z(d, 2);
        Zt(p, {});
        var x = Z(p, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (z, R) => {
            De();
            var T = Be("代码");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var b = Z(x, 4), $ = K(b);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Qt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const R = z.value;
            a(o, () => ({ engine: R }));
          },
          get value() {
            return f(h);
          }
        }), q(b);
        var C = Z(b, 4), w = K(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
        pt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return f(k);
          }
        }), q(C);
        var M = Z(C, 2), P = K(M);
        Ue(P, {
          level: 3,
          mt: "10px",
          children: (z, R) => {
            De();
            var T = Be("输出参数");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var D = Z(P, 2);
        je(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, R) => {
            var T = Yy();
            N(z, T);
          },
          $$slots: { default: !0 }
        }), q(M);
        var V = Z(M, 2);
        Rn(V, {}), N(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ce(Id, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Gy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rd(e, t) {
  fe(t, !0), Qe(e, Jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), { updateNodeData: a } = zt();
  return un(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Fy();
        N(s, l);
      },
      children: (s, l) => {
        var u = Uy(), c = we(u), d = K(c);
        Ue(d, {
          level: 3,
          children: (k, M) => {
            De();
            var P = Be("输入参数");
            N(k, P);
          },
          $$slots: { default: !0 }
        });
        var v = Z(d, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, M) => {
            var P = Gy();
            N(k, P);
          },
          $$slots: { default: !0 }
        }), q(c);
        var g = Z(c, 2);
        Zt(g, {});
        var p = Z(g, 2);
        Ue(p, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, M) => {
            De();
            var P = Be("模板内容");
            N(k, P);
          },
          $$slots: { default: !0 }
        });
        var x = Z(p, 2), b = K(x);
        const $ = /* @__PURE__ */ Pe(() => n().template || "");
        pt(b, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), q(x);
        var h = Z(x, 2), C = K(h);
        Ue(C, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            De();
            var P = Be("输出参数");
            N(k, P);
          },
          $$slots: { default: !0 }
        }), q(h);
        var w = Z(h, 2);
        Rn(w, {}), N(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ce(Rd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), ew = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ow = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), aw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), sw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), lw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const cw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Zd(e, t) {
  fe(t, !0), Qe(e, cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  en(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = gt(), { addParameter: a } = Pn(), { updateNodeData: s } = zt();
  return hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Qy();
        N(l, u);
      },
      children: (l, u) => {
        var c = uw(), d = we(c), v = K(d), g = K(v);
        const p = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        Qt(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const de = le.value;
            s(i, () => ({ method: de }));
          },
          get value() {
            return f(p);
          }
        }), q(v);
        var x = Z(v, 2), b = K(x);
        const $ = /* @__PURE__ */ Pe(() => n().url || "");
        ht(b, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return f($);
          }
        }), q(x), q(d);
        var h = Z(d, 2), C = K(h);
        Ue(C, {
          level: 3,
          children: (le, de) => {
            De();
            var ke = Be("Http 头信息");
            N(le, ke);
          },
          $$slots: { default: !0 }
        });
        var w = Z(C, 2);
        je(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, de) => {
            var ke = ew();
            N(le, ke);
          },
          $$slots: { default: !0 }
        }), q(h);
        var k = Z(h, 2);
        Zt(k, { dataKeyName: "headers" });
        var M = Z(k, 2), P = K(M);
        Ue(P, {
          level: 3,
          children: (le, de) => {
            De();
            var ke = Be("参数");
            N(le, ke);
          },
          $$slots: { default: !0 }
        });
        var D = Z(P, 2);
        je(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (le, de) => {
            var ke = tw();
            N(le, ke);
          },
          $$slots: { default: !0 }
        }), q(M);
        var V = Z(M, 2);
        Zt(V, { dataKeyName: "urlParameters" });
        var z = Z(V, 2);
        Ue(z, {
          level: 3,
          mt: "10px",
          children: (le, de) => {
            De();
            var ke = Be("Body");
            N(le, ke);
          },
          $$slots: { default: !0 }
        });
        var R = Z(z, 2), T = K(R), A = K(T);
        const S = /* @__PURE__ */ Pe(() => !n().bodyType);
        ht(A, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(S);
          },
          onchange: (le) => {
            var de;
            (de = le.target) != null && de.checked && s(i, { bodyType: "" });
          }
        }), De(), q(T);
        var L = Z(T, 2), _ = K(L);
        const O = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        ht(_, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(O);
          },
          onchange: (le) => {
            var de;
            (de = le.target) != null && de.checked && s(i, { bodyType: "form-data" });
          }
        }), De(), q(L);
        var E = Z(L, 2), H = K(E);
        const I = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        ht(H, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(I);
          },
          onchange: (le) => {
            var de;
            (de = le.target) != null && de.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), De(), q(E);
        var B = Z(E, 2), W = K(B);
        const ee = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        ht(W, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(ee);
          },
          onchange: (le) => {
            var de;
            (de = le.target) != null && de.checked && s(i, { bodyType: "json" });
          }
        }), De(), q(B);
        var F = Z(B, 2), Y = K(F);
        const ie = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        ht(Y, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ie);
          },
          onchange: (le) => {
            var de;
            (de = le.target) != null && de.checked && s(i, { bodyType: "raw" });
          }
        }), De(), q(F), q(R);
        var pe = Z(R, 2);
        {
          var ge = (le) => {
            var de = rw(), ke = we(de), ze = K(ke);
            Ue(ze, {
              level: 3,
              children: (et, ne) => {
                De();
                var Re = Be("参数");
                N(et, Re);
              },
              $$slots: { default: !0 }
            });
            var Le = Z(ze, 2);
            je(Le, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (et, ne) => {
                var Re = nw();
                N(et, Re);
              },
              $$slots: { default: !0 }
            }), q(ke);
            var at = Z(ke, 2);
            Zt(at, { dataKeyName: "fromData" }), N(le, de);
          };
          ye(pe, (le) => {
            n().bodyType === "form-data" && le(ge);
          });
        }
        var se = Z(pe, 2);
        {
          var _e = (le) => {
            var de = iw(), ke = we(de), ze = K(ke);
            Ue(ze, {
              level: 3,
              children: (et, ne) => {
                De();
                var Re = Be("参数");
                N(et, Re);
              },
              $$slots: { default: !0 }
            });
            var Le = Z(ze, 2);
            je(Le, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (et, ne) => {
                var Re = ow();
                N(et, Re);
              },
              $$slots: { default: !0 }
            }), q(ke);
            var at = Z(ke, 2);
            Zt(at, { dataKeyName: "fromUrlencoded" }), N(le, de);
          };
          ye(se, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(_e);
          });
        }
        var U = Z(se, 2);
        {
          var ae = (le) => {
            var de = aw(), ke = K(de);
            pt(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ze) => {
                s(i, { bodyJson: ze.target.value });
              }
            }), q(de), N(le, de);
          };
          ye(U, (le) => {
            n().bodyType === "json" && le(ae);
          });
        }
        var Ee = Z(U, 2);
        {
          var ue = (le) => {
            var de = sw(), ke = K(de);
            pt(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ze) => {
                s(i, { bodyRaw: ze.target.value });
              }
            }), q(de), N(le, de);
          };
          ye(Ee, (le) => {
            n().bodyType === "raw" && le(ue);
          });
        }
        var Me = Z(Ee, 2), G = K(Me);
        Ue(G, {
          level: 3,
          mt: "10px",
          children: (le, de) => {
            De();
            var ke = Be("输出参数");
            N(le, ke);
          },
          $$slots: { default: !0 }
        });
        var Te = Z(G, 2);
        je(Te, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, de) => {
            var ke = lw();
            N(le, ke);
          },
          $$slots: { default: !0 }
        }), q(Me);
        var Ke = Z(Me, 2);
        Rn(Ke, {}), N(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ce(Zd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), fw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const gw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  fe(t, !0), Qe(e, gw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ _t(sn([]));
  en(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = zt();
  return un(() => {
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
  }), hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = dw();
        N(u, c);
      },
      children: (u, c) => {
        var d = vw(), v = we(d), g = K(v);
        Ue(g, {
          level: 3,
          children: (T, A) => {
            De();
            var S = Be("输入参数");
            N(T, S);
          },
          $$slots: { default: !0 }
        });
        var p = Z(g, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, A) => {
            var S = fw();
            N(T, S);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = Z(v, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            De();
            var S = Be("知识库设置");
            N(T, S);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), h = K($);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        Qt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (T) => {
            const A = T.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = K(w);
        ht(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (T) => {
            const A = T.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), q(w);
        var M = Z(w, 4), P = K(M);
        const D = /* @__PURE__ */ Pe(() => n().limit || "");
        ht(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (T) => {
            const A = T.target.value;
            l(o, () => ({ limit: A }));
          },
          get value() {
            return f(D);
          }
        }), q(M);
        var V = Z(M, 2), z = K(V);
        Ue(z, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            De();
            var S = Be("输出参数");
            N(T, S);
          },
          $$slots: { default: !0 }
        }), q(V);
        var R = Z(V, 2);
        Rn(R, {}), N(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ce(qd, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), pw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const yw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  fe(t, !0), Qe(e, yw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ _t(sn([]));
  en(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = zt();
  return un(() => {
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
  }), hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = hw();
        N(u, c);
      },
      children: (u, c) => {
        var d = mw(), v = we(d), g = K(v);
        Ue(g, {
          level: 3,
          children: (R, T) => {
            De();
            var A = Be("输入参数");
            N(R, A);
          },
          $$slots: { default: !0 }
        });
        var p = Z(g, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, T) => {
            var A = pw();
            N(R, A);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = Z(v, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (R, T) => {
            De();
            var A = Be("搜索引擎设置");
            N(R, A);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), h = K($);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        Qt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (R) => {
            const T = R.value;
            l(o, () => ({ engine: T }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = K(w);
        ht(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const T = R.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), q(w);
        var M = Z(w, 4), P = K(M);
        ht(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const T = R.target.value;
            l(o, () => ({ limit: T }));
          }
        }), q(M);
        var D = Z(M, 2), V = K(D);
        Ue(V, {
          level: 3,
          mt: "10px",
          children: (R, T) => {
            De();
            var A = Be("输出参数");
            N(R, A);
          },
          $$slots: { default: !0 }
        }), q(D);
        var z = Z(D, 2);
        Rn(z, {}), N(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ce(Bd, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), xw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const $w = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Xd(e, t) {
  fe(t, !0), Qe(e, $w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
  return hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = ww();
        N(a, s);
      },
      handle: (a) => {
        Un(a, {
          type: "source",
          get position() {
            return He.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = bw(), u = we(l), c = K(u);
        Ue(c, {
          level: 3,
          children: (b, $) => {
            De();
            var h = Be("循环变量");
            N(b, h);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (b, $) => {
            var h = xw();
            N(b, h);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = Z(u, 2);
        Zt(v, {});
        var g = Z(v, 2), p = K(g);
        Ue(p, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            De();
            var h = Be("输出参数");
            N(b, h);
          },
          $$slots: { default: !0 }
        }), q(g);
        var x = Z(g, 2);
        Rn(x, {}), N(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ce(Xd, { data: {} }, [], [], !0);
const Cw = {
  startNode: Vd,
  codeNode: Id,
  llmNode: Ad,
  templateNode: Rd,
  httpNode: Zd,
  knowledgeNode: qd,
  searchEngineNode: Bd,
  loopNode: Xd,
  endNode: zd
};
var _w = /* @__PURE__ */ re("<!> ", 1);
function Ra(e, t) {
  fe(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return je(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = _w(), c = we(u);
      os(c, n);
      var d = Z(c);
      Se(() => dt(d, ` ${r() ?? ""}`)), N(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), m();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), m();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), m();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), m();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), m();
    }
  });
}
ce(
  Ra,
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
var kw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Sw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Ew = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
  fe(t, !0);
  let n = /* @__PURE__ */ _t("base"), r = /* @__PURE__ */ _t("show");
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 900,
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
  ], a = [], s = Qn().customNodes;
  if (s) {
    const b = Object.keys(s).sort(($, h) => (s[$].sortNo || 0) - (s[h].sortNo || 0));
    for (let $ of b)
      s[$].group === "base" ? o.push({ type: $, ...s[$] }) : a.push({
        icon: s[$].icon,
        title: s[$].title,
        type: $
      });
    o.sort(($, h) => ($.sortNo || 0) - (h.sortNo || 0));
  }
  var l = Ew(), u = K(l), c = K(u), d = K(c);
  pd(d, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      J(n, b.value.toString(), !0);
    }
  }), q(c);
  var v = Z(c, 2), g = K(v);
  Pt(g, 21, () => o, Vr, (b, $) => {
    Ra(b, lt(() => f($)));
  }), q(g);
  var p = Z(g, 2);
  Pt(p, 21, () => a, Vr, (b, $) => {
    Ra(b, lt(() => f($)));
  }), q(p), q(v), q(u);
  var x = Z(u, 2);
  je(x, {
    onclick: () => {
      J(r, f(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var h = Je(), C = we(h);
      {
        var w = (M) => {
          var P = kw();
          N(M, P);
        }, k = (M) => {
          var P = Sw();
          N(M, P);
        };
        ye(C, (M) => {
          f(r) === "show" ? M(w) : M(k, !1);
        });
      }
      N(b, h);
    },
    $$slots: { default: !0 }
  }), q(l), Se(() => {
    xt(l, 1, `tf-toolbar ${f(r) ?? ""}`), ft(g, `display: ${(f(n) === "base" ? "flex" : "none") ?? ""}`), ft(p, `display: ${(f(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), N(e, l), ve();
}
ce(Kd, {}, [], [], !0);
const Pw = () => {
  const { nodeLookup: e } = We();
  return {
    getNode: (t) => {
      var n;
      return (n = j(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Mw = () => {
  const { nodes: e } = We();
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
}, Hw = () => {
  const { edges: e } = We();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var Ow = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Vw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Dw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Tw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), zw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Nw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Iw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Rw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Yd(e, t) {
  var n;
  fe(t, !0), Qe(e, Rw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = Pn(), s = zt(), { updateNodeData: l } = s, u = { ...o, id: i, data: r() }, c = document.createElement("div"), d = Qn().customNodes[t.type];
  (n = d.render) == null || n.call(d, c, u, s);
  const v = d.forms;
  let g;
  un(() => {
    r().expand && g && g.append(c);
  }), un(() => {
    var x;
    r() && ((x = d.onUpdate) == null || x.call(d, c, { ...u, data: r() }));
  }), un(() => {
    !r().parameters && d.parameters && l(i, {
      parameters: Hi(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), un(() => {
    !r().outputDefs && d.outputDefs && l(i, {
      outputDefs: Hi(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const p = /* @__PURE__ */ Pe(() => ({
    ...r(),
    description: d.description
  }));
  return hn(e, lt(
    {
      get data() {
        return f(p);
      }
    },
    () => o,
    {
      icon: (x) => {
        var b = Je(), $ = we(b);
        os($, () => d.icon), N(x, b);
      },
      children: (x, b) => {
        var $ = Iw(), h = we($);
        {
          var C = (V) => {
            var z = Lw(), R = we(z), T = K(R);
            Ue(T, {
              level: 3,
              children: (_, O) => {
                De();
                var E = Be("输入参数");
                N(_, E);
              },
              $$slots: { default: !0 }
            });
            var A = Z(T, 2);
            {
              var S = (_) => {
                je(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (O, E) => {
                    var H = Ow();
                    N(O, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (_) => {
                d.parametersAddEnable !== !1 && _(S);
              });
            }
            q(R);
            var L = Z(R, 2);
            Zt(L, {}), N(V, z);
          };
          ye(h, (V) => {
            d.parametersEnable !== !1 && V(C);
          });
        }
        var w = Z(h, 2);
        {
          var k = (V) => {
            var z = Je(), R = we(z);
            Pt(R, 17, () => v, Vr, (T, A) => {
              var S = Je(), L = we(S);
              {
                var _ = (E) => {
                  var H = Vw(), I = we(H), B = K(I, !0);
                  q(I);
                  var W = Z(I, 2), ee = K(W);
                  const F = /* @__PURE__ */ Pe(() => r()[f(A).name] || f(A).defaultValue);
                  ht(ee, lt(
                    {
                      get placeholder() {
                        return f(A).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(F);
                      }
                    },
                    () => f(A).attrs,
                    {
                      onchange: (Y) => {
                        l(i, { [f(A).name]: Y.target.value });
                      }
                    }
                  )), q(W), Se(() => dt(B, f(A).label)), N(E, H);
                }, O = (E, H) => {
                  {
                    var I = (W) => {
                      var ee = Dw(), F = we(ee), Y = K(F, !0);
                      q(F);
                      var ie = Z(F, 2), pe = K(ie);
                      const ge = /* @__PURE__ */ Pe(() => r()[f(A).name] || f(A).defaultValue);
                      pt(pe, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(A).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(ge);
                          }
                        },
                        () => f(A).attrs,
                        {
                          onchange: (se) => {
                            l(i, { [f(A).name]: se.target.value });
                          }
                        }
                      )), q(ie), Se(() => dt(Y, f(A).label)), N(W, ee);
                    }, B = (W, ee) => {
                      {
                        var F = (ie) => {
                          var pe = Tw(), ge = we(pe), se = K(ge, !0);
                          q(ge);
                          var _e = Z(ge, 2), U = K(_e), ae = K(U), Ee = K(ae);
                          q(ae);
                          var ue = Z(ae, 2);
                          ar(ue);
                          var Me = (Te) => l(i, {
                            [f(A).name]: parseFloat(Te.target.value)
                          });
                          let G;
                          q(U), q(_e), Se(() => {
                            dt(se, f(A).label), dt(Ee, `${f(A).description ?? ""}: ${r()[f(A).name] ?? f(A).defaultValue ?? ""}`), G = Jt(
                              ue,
                              G,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(A).attrs,
                                value: r()[f(A).name] ?? f(A).defaultValue,
                                oninput: Me
                              },
                              "svelte-q0cqsa"
                            );
                          }), N(ie, pe);
                        }, Y = (ie, pe) => {
                          {
                            var ge = (_e) => {
                              var U = zw(), ae = we(U), Ee = K(ae, !0);
                              q(ae);
                              var ue = Z(ae, 2), Me = K(ue);
                              const G = /* @__PURE__ */ Pe(() => f(A).options || []), Te = /* @__PURE__ */ Pe(() => r()[f(A).name] ? [r()[f(A).name]] : [f(A).defaultValue]);
                              Qt(Me, {
                                get items() {
                                  return f(G);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(A).placeholder;
                                },
                                onSelect: (Ke) => {
                                  const le = Ke.value;
                                  l(i, () => ({ [f(A).name]: le }));
                                },
                                get value() {
                                  return f(Te);
                                }
                              }), q(ue), Se(() => dt(Ee, f(A).label)), N(_e, U);
                            }, se = (_e, U) => {
                              {
                                var ae = (Ee) => {
                                  Ue(Ee, lt({ level: 3, mt: "10px" }, () => f(A).attrs, {
                                    children: (ue, Me) => {
                                      De();
                                      var G = Be();
                                      Se(() => dt(G, f(A).label)), N(ue, G);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                ye(
                                  _e,
                                  (Ee) => {
                                    f(A).type === "heading" && Ee(ae);
                                  },
                                  U
                                );
                              }
                            };
                            ye(
                              ie,
                              (_e) => {
                                f(A).type === "select" ? _e(ge) : _e(se, !1);
                              },
                              pe
                            );
                          }
                        };
                        ye(
                          W,
                          (ie) => {
                            f(A).type === "slider" ? ie(F) : ie(Y, !1);
                          },
                          ee
                        );
                      }
                    };
                    ye(
                      E,
                      (W) => {
                        f(A).type === "textarea" ? W(I) : W(B, !1);
                      },
                      H
                    );
                  }
                };
                ye(L, (E) => {
                  f(A).type === "input" ? E(_) : E(O, !1);
                });
              }
              N(T, S);
            }), N(V, z);
          };
          ye(w, (V) => {
            v && V(k);
          });
        }
        var M = Z(w, 2);
        _n(M, (V) => g = V, () => g);
        var P = Z(M, 2);
        {
          var D = (V) => {
            var z = Aw(), R = we(z), T = K(R);
            Ue(T, {
              level: 3,
              mt: "10px",
              children: (_, O) => {
                De();
                var E = Be("输出参数");
                N(_, E);
              },
              $$slots: { default: !0 }
            });
            var A = Z(T, 2);
            {
              var S = (_) => {
                je(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (O, E) => {
                    var H = Nw();
                    N(O, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (_) => {
                d.outputDefsAddEnable !== !1 && _(S);
              });
            }
            q(R);
            var L = Z(R, 2);
            Rn(L, {}), N(V, z);
          };
          ye(P, (V) => {
            d.outputDefsEnable !== !1 && V(D);
          });
        }
        Se(() => {
          ft(M, d.rootStyle || ""), xt(M, 1, vn(d.rootClass), "svelte-q0cqsa");
        }), N(x, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return r();
    },
    set data(x) {
      r(x), m();
    }
  });
}
ce(Yd, { data: {} }, [], [], !0);
const Zw = () => {
  const e = We();
  return {
    updateEdgeData: (t, n, r) => {
      const o = j(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
};
var qw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Bw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Xw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Kw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Wd(e, t) {
  fe(t, !0), Qe(e, Kw);
  const [n, r] = nt(), o = () => te(D, "$nodes", n), i = () => te(V, "$edges", n), a = () => te(z, "$viewport", n), s = y(t, "onInit", 7), l = zt();
  s()(l);
  let u = /* @__PURE__ */ _t(!1), c = /* @__PURE__ */ _t(void 0);
  const { updateEdgeData: d } = Zw(), v = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, g = (E) => {
    var H;
    E.preventDefault();
    const I = l.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), B = (H = E.dataTransfer) == null ? void 0 : H.getData("application/tinyflow"), W = B ? JSON.parse(B) : {}, ee = {
      id: `node_${qr()}`,
      position: I,
      data: {},
      ...W
    };
    ni.addNode(ee), ni.selectNodeOnly(ee.id);
  }, { getNode: p } = Pw(), x = (E) => {
    const H = p(E.source), I = p(E.target);
    if (E.sourceHandle === "loop_handle" || H.parentId) {
      const B = l.getEdges();
      for (let W of B)
        if (W.target === E.target) {
          const ee = p(W.source);
          if (E.sourceHandle === "loop_handle" && ee.parentId !== H.id || H.parentId && ee.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && I.parentId && I.parentId !== H.id);
  }, { ensureParentInNodesBefore: b } = Mw(), $ = (E, H) => {
    if (!H.isValid)
      return;
    const I = H.toNode;
    if (I.parentId)
      return;
    const B = H.fromNode, W = H.fromHandle, ee = { position: { ...I.position } };
    if (W.id === "loop_handle" ? ee.parentId = B.id : B.parentId && (ee.parentId = B.parentId), ee.parentId) {
      const F = p(ee.parentId);
      ee.position = {
        x: I.position.x - F.position.x,
        y: I.position.y - F.position.y
      }, b(ee.parentId, I.id), l.updateNode(I.id, ee);
    }
  }, { getEdgesByTarget: h } = Hw(), C = (E) => {
    E.edges.forEach((H) => {
      const I = p(H.target);
      if (I && I.parentId) {
        const B = h(H.target), W = p(I.parentId);
        if (B.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + W.position.x,
              y: I.position.y + W.position.y
            }
          });
        else {
          let ee = !1;
          for (let F = 0; F < B.length; F++) {
            const Y = B[F], ie = p(Y.source);
            if (ie.parentId || ie.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + W.position.x,
              y: I.position.y + W.position.y
            }
          });
        }
      }
    });
  }, w = (E, H) => {
  }, k = (E) => {
  }, M = {}, P = Qn().customNodes;
  if (P)
    for (let E of Object.keys(P))
      M[E] = Yd;
  const { nodes: D, edges: V, viewport: z } = We(), R = Qn().onDataChange;
  R && (D.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), V.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), z.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var T = Xw(), A = K(T);
  const S = /* @__PURE__ */ Pe(() => ({ ...Cw, ...M })), L = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  td(A, lt(
    {
      get nodeTypes() {
        return f(S);
      }
    },
    ni,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (E) => {
        const H = E.target;
        H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return f(L);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (E) => {
          J(u, !0), J(c, E.detail.edge, !0);
        }
      },
      children: (E, H) => {
        var I = Bw(), B = we(I);
        dd(B, {});
        var W = Z(B, 2);
        ld(W, {});
        var ee = Z(W, 2);
        vd(ee, {});
        var F = Z(ee, 2);
        {
          var Y = (ie) => {
            To(ie, {
              children: (pe, ge) => {
                var se = qw(), _e = Z(K(se), 4), U = K(_e);
                const ae = /* @__PURE__ */ Pe(() => {
                  var Ee, ue;
                  return (ue = (Ee = f(c)) == null ? void 0 : Ee.data) == null ? void 0 : ue.condition;
                });
                pt(U, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(ae);
                  },
                  onchange: (Ee) => {
                    f(c) && d(f(c).id, { condition: Ee.target.value });
                  }
                }), q(_e), q(se), N(pe, se);
              },
              $$slots: { default: !0 }
            });
          };
          ye(F, (ie) => {
            f(u) && ie(Y);
          });
        }
        N(E, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var _ = Z(A, 2);
  Kd(_, {}), q(T), N(e, T);
  var O = ve({
    get onInit() {
      return s();
    },
    set onInit(E) {
      s(E), m();
    }
  });
  return r(), O;
}
ce(Wd, { onInit: {} }, [], [], !0);
function Yw(e, t) {
  fe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ni.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Lr("tinyflow_options", n()), nd(e, {
    fitView: !0,
    children: (i, a) => {
      Wd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ve({
    get options() {
      return n();
    },
    set options(i) {
      n(i), m();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), m();
    }
  });
}
customElements.define("tinyflow-component", ce(Yw, { options: {}, onInit: {} }, [], [], !1));
const Qw = /* @__PURE__ */ l1({
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
    const n = e, r = u1(null);
    let o = null;
    return c1(() => {
      r.value && (o = new D2({
        ...n,
        element: r.value
      }));
    }), d1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (v1(), f1("div", {
      ref_key: "divRef",
      ref: r,
      class: h1(["tinyflow", a.className]),
      style: g1(a.style)
    }, null, 6));
  }
});
export {
  Qw as Tinyflow
};
//# sourceMappingURL=index.js.map
