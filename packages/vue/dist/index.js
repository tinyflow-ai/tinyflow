import { defineComponent as v1, ref as g1, onMounted as p1, onUnmounted as h1, createElementBlock as m1, openBlock as y1, normalizeStyle as w1, normalizeClass as b1 } from "vue";
var x1 = Object.defineProperty, Xl = (e) => {
  throw TypeError(e);
}, $1 = (e, t, n) => t in e ? x1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zt = (e, t, n) => $1(e, typeof t != "symbol" ? t + "" : t, n), Ka = (e, t, n) => t.has(e) || Xl("Cannot " + n), ut = (e, t, n) => (Ka(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cr = (e, t, n) => t.has(e) ? Xl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ii = (e, t, n, r) => (Ka(e, t, "write to private field"), t.set(e, n), n), C1 = (e, t, n) => (Ka(e, t, "access private method"), n);
const _1 = "5";
var zs;
typeof window < "u" && ((zs = window.__svelte ?? (window.__svelte = {})).v ?? (zs.v = /* @__PURE__ */ new Set())).add(_1);
let Rr = !1, k1 = !1;
function S1() {
  Rr = !0;
}
S1();
const Wa = 1, Xa = 2, jl = 4, E1 = 8, M1 = 16, V1 = 1, P1 = 2, Fl = 4, H1 = 8, N1 = 16, Gl = 1, O1 = 2, ja = "[", Fa = "[!", Ga = "]", kr = {}, Lt = Symbol(), T1 = "http://www.w3.org/1999/xhtml", L1 = "http://www.w3.org/2000/svg", D1 = !1;
function Ti(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Eo = Array.isArray, z1 = Array.prototype.indexOf, Ua = Array.from, ai = Object.keys, co = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Ul = Object.getOwnPropertyDescriptors, A1 = Object.prototype, I1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const ht = () => {
};
function q1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cn = 2, Jl = 4, Li = 8, Qa = 16, An = 32, hr = 64, si = 128, Wt = 256, li = 512, Pt = 1024, bn = 2048, er = 4096, On = 8192, Di = 16384, B1 = 32768, Yr = 65536, Z1 = 1 << 17, R1 = 1 << 19, Ql = 1 << 20, wa = 1 << 21, Kn = Symbol("$state"), es = Symbol("legacy props"), Y1 = Symbol("");
function K1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function W1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function X1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function j1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function F1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function G1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function U1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function J1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Q1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let De = !1;
function Kt(e) {
  De = e;
}
let Re;
function Vt(e) {
  if (e === null)
    throw zi(), kr;
  return Re = e;
}
function xn() {
  return Vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Re)
  );
}
function Z(e) {
  if (De) {
    if (/* @__PURE__ */ Sn(Re) !== null)
      throw zi(), kr;
    Re = e;
  }
}
function Oe(e = 1) {
  if (De) {
    for (var t = e, n = Re; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Re = n;
  }
}
function ba() {
  for (var e = 0, t = Re; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ga) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ja || n === Fa) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(t)
    );
    t.remove(), t = r;
  }
}
function ln(e) {
  if (typeof e != "object" || e === null || Kn in e)
    return e;
  const t = Ja(e);
  if (t !== A1 && t !== I1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Eo(e), o = /* @__PURE__ */ Mt(0), i = tt, a = (s) => {
    var l = tt;
    $n(i);
    var u = s();
    return $n(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Mt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && U1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Mt(u.value)), n.set(l, c)) : J(
          c,
          a(() => ln(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ Mt(Lt))
          ), ia(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && J(c, f);
          }
          J(u, Lt), ia(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Kn)
          return e;
        var f = n.get(l), v = l in s;
        if (f === void 0 && (!v || (c = Nn(s, l)) != null && c.writable) && (f = a(() => /* @__PURE__ */ Mt(ln(v ? s[l] : Lt))), n.set(l, f)), f !== void 0) {
          var g = d(f);
          return g === Lt ? void 0 : g;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = d(c));
        } else if (u === void 0) {
          var f = n.get(l), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== Lt)
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
        if (l === Kn)
          return !0;
        var c = n.get(l), f = c !== void 0 && c.v !== Lt || Reflect.has(s, l);
        if (c !== void 0 || Ge !== null && (!f || (u = Nn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ Mt(f ? ln(s[l]) : Lt)), n.set(l, c));
          var v = d(c);
          if (v === Lt)
            return !1;
        }
        return f;
      },
      set(s, l, u, c) {
        var f, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var x = n.get(h + "");
            x !== void 0 ? J(x, Lt) : h in s && (x = a(() => /* @__PURE__ */ Mt(Lt)), n.set(h + "", x));
          }
        v === void 0 ? (!g || (f = Nn(s, l)) != null && f.writable) && (v = a(() => /* @__PURE__ */ Mt(void 0)), J(
          v,
          a(() => ln(u))
        ), n.set(l, v)) : (g = v.v !== Lt, J(
          v,
          a(() => ln(u))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(c, u), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p >= $.v && J($, p + 1);
          }
          ia(o);
        }
        return !0;
      },
      ownKeys(s) {
        d(o);
        var l = Reflect.ownKeys(s).filter((f) => {
          var v = n.get(f);
          return v === void 0 || v.v !== Lt;
        });
        for (var [u, c] of n)
          c.v !== Lt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        J1();
      }
    }
  );
}
function ia(e, t = 1) {
  J(e, e.v + t);
}
var Dt, eu, tu, nu;
function xa() {
  if (Dt === void 0) {
    Dt = window, eu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    tu = Nn(t, "firstChild").get, nu = Nn(t, "nextSibling").get, As(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), As(n) && (n.__t = void 0);
  }
}
function Dn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return tu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return nu.call(e);
}
function R(e, t) {
  if (!De)
    return /* @__PURE__ */ pt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(Re)
  );
  if (n === null)
    n = Re.appendChild(Dn());
  else if (t && n.nodeType !== 3) {
    var r = Dn();
    return n == null || n.before(r), Vt(r), r;
  }
  return Vt(n), n;
}
function be(e, t) {
  if (!De) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sn(n) : n;
  }
  return Re;
}
function I(e, t = 1, n = !1) {
  let r = De ? Re : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!De)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Dn();
    return r === null ? o == null || o.after(a) : r.before(a), Vt(a), a;
  }
  return Vt(r), /** @type {TemplateNode} */
  r;
}
function ts(e) {
  e.textContent = "";
}
function ru(e) {
  return e === this.v;
}
function ns(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function rs(e) {
  return !ns(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  var t = cn | bn, n = tt !== null && (tt.f & cn) !== 0 ? (
    /** @type {Derived} */
    tt
  ) : null;
  return Ge === null || n !== null && (n.f & Wt) !== 0 ? t |= Wt : Ge.f |= Ql, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: ru,
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
  const t = /* @__PURE__ */ Hr(e);
  return hu(t), t;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = /* @__PURE__ */ Hr(e);
  return t.equals = rs, t;
}
function ou(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      dn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ef(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & cn) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function iu(e) {
  var t, n = Ge;
  Gn(ef(e));
  try {
    ou(e), t = bu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function au(e) {
  var t = iu(e), n = (Rn || (e.f & Wt) !== 0) && e.deps !== null ? er : Pt;
  nn(e, n), e.equals(t) || (e.v = t, e.wv = yu());
}
function su(e) {
  Ge === null && tt === null && X1(), tt !== null && (tt.f & Wt) !== 0 && Ge === null && W1(), Vo && K1();
}
function tf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | bn,
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
      Ii(i), i.f |= B1;
    } catch (l) {
      throw dn(i), l;
    }
  else t !== null && qi(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ql | si)) === 0;
  if (!a && r && (o !== null && tf(i, o), tt !== null && (tt.f & cn) !== 0)) {
    var s = (
      /** @type {Derived} */
      tt
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function os(e) {
  const t = mr(Li, null, !1);
  return nn(t, Pt), t.teardown = e, t;
}
function en(e) {
  su();
  var t = Ge !== null && (Ge.f & An) !== 0 && Fe !== null && !Fe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Fe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ge,
      reaction: tt
    });
  } else {
    var r = Yt(e);
    return r;
  }
}
function nf(e) {
  return su(), Kr(e);
}
function rf(e) {
  const t = mr(hr, e, !0);
  return () => {
    dn(t);
  };
}
function of(e) {
  const t = mr(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nr(t, () => {
      dn(t), r(void 0);
    }) : (dn(t), r(void 0));
  });
}
function Yt(e) {
  return mr(Jl, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function wt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Fe
  );
  Kr(() => {
    if (d(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Pt) !== 0 && nn(n, er), Xr(n) && Ii(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return mr(Li, e, !0);
}
function ke(e, t = [], n = Hr) {
  const r = t.map(n);
  return Wr(() => e(...r.map(d)));
}
function Wr(e, t = 0) {
  return mr(Li | Qa | t, e, !0);
}
function Fn(e, t = !0) {
  return mr(Li | An, e, !0, t);
}
function lu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vo, r = tt;
    qs(!0), $n(null);
    try {
      t.call(null);
    } finally {
      qs(n), $n(r);
    }
  }
}
function uu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : dn(n, t), n = r;
  }
}
function af(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & An) === 0 && dn(t), t = n;
  }
}
function dn(e, t = !0) {
  var n = !1;
  (t || (e.f & R1) !== 0) && e.nodes_start !== null && (cu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), uu(e, t && !n), fi(e, 0), nn(e, Di);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  lu(e);
  var o = e.parent;
  o !== null && o.first !== null && du(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function cu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(e)
    );
    e.remove(), e = n;
  }
}
function du(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nr(e, t) {
  var n = [];
  is(e, n, !0), fu(n, () => {
    dn(e), t && t();
  });
}
function fu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function is(e, t, n) {
  if ((e.f & On) === 0) {
    if (e.f ^= On, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Yr) !== 0 || (r.f & An) !== 0;
      is(r, t, i ? n : !1), r = o;
    }
  }
}
function vo(e) {
  vu(e, !0);
}
function vu(e, t) {
  if ((e.f & On) !== 0) {
    e.f ^= On, (e.f & Pt) === 0 && (e.f ^= Pt), Xr(e) && (nn(e, bn), qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Yr) !== 0 || (n.f & An) !== 0;
      vu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const sf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let go = [], po = [];
function gu() {
  var e = go;
  go = [], fo(e);
}
function pu() {
  var e = po;
  po = [], fo(e);
}
function Mo(e) {
  go.length === 0 && queueMicrotask(gu), go.push(e);
}
function lf(e) {
  po.length === 0 && sf(pu), po.push(e);
}
function Is() {
  go.length > 0 && gu(), po.length > 0 && pu();
}
let Go = !1, ui = !1, ci = null, ar = !1, Vo = !1;
function qs(e) {
  Vo = e;
}
let lo = [], tt = null, mn = !1;
function $n(e) {
  tt = e;
}
let Ge = null;
function Gn(e) {
  Ge = e;
}
let tn = null;
function hu(e) {
  tt !== null && tt.f & wa && (tn === null ? tn = [e] : tn.push(e));
}
let Et = null, Rt = 0, Jt = null;
function uf(e) {
  Jt = e;
}
let mu = 1, di = 0, Rn = !1;
function yu() {
  return ++mu;
}
function Xr(e) {
  var t, n = e.f;
  if ((n & bn) !== 0)
    return !0;
  if ((n & er) !== 0) {
    var r = e.deps, o = (n & Wt) !== 0;
    if (r !== null) {
      var i, a, s = (n & li) !== 0, l = o && Ge !== null && !Rn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= li), l && f !== null && (f.f & Wt) === 0 && (c.f ^= Wt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Xr(
          /** @type {Derived} */
          a
        ) && au(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || Ge !== null && !Rn) && nn(e, Pt);
  }
  return !1;
}
function cf(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & si) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= si;
      }
    n = n.parent;
  }
  throw Go = !1, e;
}
function Bs(e) {
  return (e.f & Di) === 0 && (e.parent === null || (e.parent.f & si) === 0);
}
function Ai(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), Bs(t))
      throw e;
    return;
  }
  if (n !== null && (Go = !0), cf(e, t), Bs(t))
    throw e;
}
function wu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      tn != null && tn.includes(e) || ((i.f & cn) !== 0 ? wu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? nn(i, bn) : (i.f & Pt) !== 0 && nn(i, er), qi(
        /** @type {Effect} */
        i
      )));
    }
}
function bu(e) {
  var t, n = Et, r = Rt, o = Jt, i = tt, a = Rn, s = tn, l = Fe, u = mn, c = e.f;
  Et = /** @type {null | Value[]} */
  null, Rt = 0, Jt = null, Rn = (c & Wt) !== 0 && (mn || !ar || tt === null), tt = (c & (An | hr)) === 0 ? e : null, tn = null, Rs(e.ctx), mn = !1, di++, e.f |= wa;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (Et !== null) {
      var g;
      if (fi(e, Rt), v !== null && Rt > 0)
        for (v.length = Rt + Et.length, g = 0; g < Et.length; g++)
          v[Rt + g] = Et[g];
      else
        e.deps = v = Et;
      if (!Rn)
        for (g = Rt; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && Rt < v.length && (fi(e, Rt), v.length = Rt);
    if (Bi() && Jt !== null && !mn && v !== null && (e.f & (cn | er | bn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Jt.length; g++)
        wu(
          Jt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (di++, Jt !== null && (o === null ? o = Jt : o.push(.../** @type {Source[]} */
    Jt))), f;
  } finally {
    Et = n, Rt = r, Jt = o, tt = i, Rn = a, tn = s, Rs(l), mn = u, e.f ^= wa;
  }
}
function df(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = z1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & cn) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Et === null || !Et.includes(t)) && (nn(t, er), (t.f & (Wt | li)) === 0 && (t.f ^= li), ou(
    /** @type {Derived} **/
    t
  ), fi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function fi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      df(e, n[r]);
}
function Ii(e) {
  var t = e.f;
  if ((t & Di) === 0) {
    nn(e, Pt);
    var n = Ge, r = Fe, o = ar;
    Ge = e, ar = !0;
    try {
      (t & Qa) !== 0 ? af(e) : uu(e), lu(e);
      var i = bu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = mu;
      var a = e.deps, s;
      D1 && k1 && e.f & bn;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      ar = o, Ge = n;
    }
  }
}
function ff() {
  try {
    j1();
  } catch (e) {
    if (ci !== null)
      Ai(e, ci, null);
    else
      throw e;
  }
}
function xu() {
  var e = ar;
  try {
    var t = 0;
    for (ar = !0; lo.length > 0; ) {
      t++ > 1e3 && ff();
      var n = lo, r = n.length;
      lo = [];
      for (var o = 0; o < r; o++) {
        var i = gf(n[o]);
        vf(i);
      }
      ho.clear();
    }
  } finally {
    ui = !1, ar = e, ci = null;
  }
}
function vf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Di | On)) === 0)
        try {
          Xr(r) && (Ii(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? du(r) : r.fn = null));
        } catch (o) {
          Ai(o, r, null, r.ctx);
        }
    }
}
function qi(e) {
  ui || (ui = !0, queueMicrotask(xu));
  for (var t = ci = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | An)) !== 0) {
      if ((n & Pt) === 0) return;
      t.f ^= Pt;
    }
  }
  lo.push(t);
}
function gf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (An | hr)) !== 0, i = o && (r & Pt) !== 0;
    if (!i && (r & On) === 0) {
      if ((r & Jl) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Pt;
      else
        try {
          Xr(n) && Ii(n);
        } catch (l) {
          Ai(l, n, null, n.ctx);
        }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
  return t;
}
function m(e) {
  var t;
  for (Is(); lo.length > 0; )
    ui = !0, xu(), Is();
  return (
    /** @type {T} */
    t
  );
}
function d(e) {
  var t = e.f, n = (t & cn) !== 0;
  if (tt !== null && !mn) {
    if (!(tn != null && tn.includes(e))) {
      var r = tt.deps;
      e.rv < di && (e.rv = di, Et === null && r !== null && r[Rt] === e ? Rt++ : Et === null ? Et = [e] : (!Rn || !Et.includes(e)) && Et.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Wt) === 0 && (o.f ^= Wt);
  }
  return n && (o = /** @type {Derived} */
  e, Xr(o) && au(o)), Vo && ho.has(e) ? ho.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const pf = -7169;
function nn(e, t) {
  e.f = e.f & pf | t;
}
function te(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Kn in e)
      $a(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Kn in n && $a(n);
      }
  }
}
function $a(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        $a(e[r], t);
      } catch {
      }
    const n = Ja(e);
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
const ho = /* @__PURE__ */ new Map();
function Or(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ru,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  const n = Or(e);
  return hu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var n;
  const r = Or(e);
  return t || (r.equals = rs), Rr && Fe !== null && Fe.l !== null && ((n = Fe.l).s ?? (n.s = [])).push(r), r;
}
function J(e, t, n = !1) {
  tt !== null && !mn && Bi() && (tt.f & (cn | Qa)) !== 0 && !(tn != null && tn.includes(e)) && Q1();
  let r = n ? ln(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? ho.set(e, t) : ho.set(e, n), e.v = t, (e.f & cn) !== 0 && ((e.f & bn) !== 0 && iu(
      /** @type {Derived} */
      e
    ), nn(e, (e.f & Wt) === 0 ? Pt : er)), e.wv = yu(), $u(e, bn), Bi() && Ge !== null && (Ge.f & Pt) !== 0 && (Ge.f & (An | hr)) === 0 && (Jt === null ? uf([e]) : Jt.push(e));
  }
  return t;
}
function Zs(e, t = 1) {
  var n = d(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function $u(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Bi(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & bn) === 0 && (!r && a === Ge || (nn(a, t), (s & (Pt | Wt)) !== 0 && ((s & cn) !== 0 ? $u(
        /** @type {Derived} */
        a,
        er
      ) : qi(
        /** @type {Effect} */
        a
      ))));
    }
}
let Fe = null;
function Rs(e) {
  Fe = e;
}
function ur(e) {
  return (
    /** @type {T} */
    as().get(e)
  );
}
function Tr(e, t) {
  return as().set(e, t), t;
}
function hf(e) {
  return as().has(e);
}
function ve(e, t = !1, n) {
  var r = Fe = {
    p: Fe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Rr && !t && (Fe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Or(!1)
  }), os(() => {
    r.d = !0;
  });
}
function ge(e) {
  const t = Fe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = Ge, r = tt;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Gn(i.effect), $n(i.reaction), Yt(i.fn);
        }
      } finally {
        Gn(n), $n(r);
      }
    }
    Fe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Bi() {
  return !Rr || Fe !== null && Fe.l === null;
}
function as(e) {
  return Fe === null && Ti(), Fe.c ?? (Fe.c = new Map(mf(Fe) || void 0));
}
function mf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function yf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const wf = [
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
function bf(e) {
  return wf.includes(e);
}
const xf = {
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
function $f(e) {
  return e = e.toLowerCase(), xf[e] ?? e;
}
const Cf = ["touchstart", "touchmove"];
function _f(e) {
  return Cf.includes(e);
}
const kf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Sf(e) {
  return kf.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ef(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Mo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Mf(e) {
  De && /* @__PURE__ */ pt(e) !== null && ts(e);
}
let Ys = !1;
function Vf() {
  Ys || (Ys = !0, document.addEventListener(
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
function Pf(e) {
  var t = tt, n = Ge;
  $n(null), Gn(null);
  try {
    return e();
  } finally {
    $n(t), Gn(n);
  }
}
const Cu = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set();
function _u(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || oo.call(t, i), !i.cancelBubble)
      return Pf(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function rt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = _u(e, t, n, i);
  (t === document.body || t === window || t === document) && os(() => {
    t.removeEventListener(e, a, i);
  });
}
function jr(e) {
  for (var t = 0; t < e.length; t++)
    Cu.add(e[t]);
  for (var n of _a)
    n(e);
}
function oo(e) {
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
    co(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = tt, v = Ge;
    $n(null), Gn(null);
    try {
      for (var g, h = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Eo(b)) {
              var [$, ...p] = b;
              $.apply(a, [e, ...p]);
            } else
              b.call(a, e);
        } catch (C) {
          g ? h.push(C) : g = C;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (g) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, $n(f), Gn(v);
    }
  }
}
function ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Gl) !== 0, r = (t & O1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (De)
      return qt(Re, null), Re;
    o === void 0 && (o = ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ pt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || eu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      qt(s, l);
    } else
      qt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Gl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (De)
      return qt(Re, null), Re;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ss(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ pt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ pt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ pt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ pt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      qt(c, f);
    } else
      qt(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!De) {
    var t = Dn(e + "");
    return qt(t, t), t;
  }
  var n = Re;
  return n.nodeType !== 3 && (n.before(n = Dn()), Vt(n)), qt(n, n), n;
}
function Qe() {
  if (De)
    return qt(Re, null), Re;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), qt(t, n), e;
}
function D(e, t) {
  if (De) {
    Ge.nodes_end = Re, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ct(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function ku(e, t) {
  return Su(e, t);
}
function Hf(e, t) {
  xa(), t.intro = t.intro ?? !1;
  const n = t.target, r = De, o = Re;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ja); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw kr;
    Kt(!0), Vt(
      /** @type {Comment} */
      i
    ), xn();
    const a = Su(e, { ...t, anchor: i });
    if (Re === null || Re.nodeType !== 8 || /** @type {Comment} */
    Re.data !== Ga)
      throw zi(), kr;
    return Kt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === kr)
      return t.recover === !1 && F1(), xa(), ts(n), Kt(!1), ku(e, t);
    throw a;
  } finally {
    Kt(r), Vt(o);
  }
}
const br = /* @__PURE__ */ new Map();
function Su(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  xa();
  var s = /* @__PURE__ */ new Set(), l = (f) => {
    for (var v = 0; v < f.length; v++) {
      var g = f[v];
      if (!s.has(g)) {
        s.add(g);
        var h = _f(g);
        t.addEventListener(g, oo, { passive: h });
        var x = br.get(g);
        x === void 0 ? (document.addEventListener(g, oo, { passive: h }), br.set(g, 1)) : br.set(g, x + 1);
      }
    }
  };
  l(Ua(Cu)), _a.add(l);
  var u = void 0, c = of(() => {
    var f = n ?? t.appendChild(Dn());
    return Fn(() => {
      if (i) {
        ve({});
        var v = (
          /** @type {ComponentContext} */
          Fe
        );
        v.c = i;
      }
      o && (r.$$events = o), De && qt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, De && (Ge.nodes_end = Re), i && ge();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, oo);
        var h = (
          /** @type {number} */
          br.get(g)
        );
        --h === 0 ? (document.removeEventListener(g, oo), br.delete(g)) : br.set(g, h);
      }
      _a.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return ka.set(u, c), u;
}
let ka = /* @__PURE__ */ new WeakMap();
function Nf(e, t) {
  const n = ka.get(e);
  return n ? (ka.delete(e), n(t)) : Promise.resolve();
}
function me(e, t, [n, r] = [0, 0]) {
  De && n === 0 && xn();
  var o = e, i = null, a = null, s = Lt, l = n > 0 ? Yr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, f(g, v);
  }, f = (v, g) => {
    if (s === (s = v)) return;
    let h = !1;
    if (De && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ja ? r = 0 : b === Fa ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ba(), Vt(o), Kt(!1), h = !0, r = -1);
    }
    s ? (i ? vo(i) : g && (i = Fn(() => g(o))), a && Nr(a, () => {
      a = null;
    })) : (a ? vo(a) : g && (a = Fn(() => g(o, [n + 1, r]))), i && Nr(i, () => {
      i = null;
    })), h && Kt(!0);
  };
  Wr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), De && (o = Re);
}
function Lr(e, t) {
  return t;
}
function Of(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    is(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ts(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  fu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), dn(c.e, !s);
    }
  });
}
function Ht(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & jl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = De ? Vt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pt(u)
    ) : u.appendChild(Dn());
  }
  De && xn();
  var c = null, f = !1, v = /* @__PURE__ */ xe(() => {
    var g = n();
    return Eo(g) ? g : g == null ? [] : Ua(g);
  });
  Wr(() => {
    var g = d(v), h = g.length;
    if (f && h === 0)
      return;
    f = h === 0;
    let x = !1;
    if (De) {
      var b = (
        /** @type {Comment} */
        a.data === Fa
      );
      b !== (h === 0) && (a = ba(), Vt(a), Kt(!1), x = !0);
    }
    if (De) {
      for (var $ = null, p, C = 0; C < h; C++) {
        if (Re.nodeType === 8 && /** @type {Comment} */
        Re.data === Ga) {
          a = /** @type {Comment} */
          Re, x = !0, Kt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        p = Eu(
          Re,
          s,
          $,
          null,
          w,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, p), $ = p;
      }
      h > 0 && Vt(ba());
    }
    De || Tf(g, s, a, o, t, r, n), i !== null && (h === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Nr(c, () => {
      c = null;
    })), x && Kt(!0), d(v);
  }), De && (a = Re);
}
function Tf(e, t, n, r, o, i, a) {
  var s, l, u, c, f = (o & E1) !== 0, v = (o & (Wa | Xa)) !== 0, g = e.length, h = t.items, x = t.first, b = x, $, p = null, C, w = [], k = [], V, S, O, T;
  if (f)
    for (T = 0; T < g; T += 1)
      V = e[T], S = i(V, T), O = h.get(S), O !== void 0 && ((s = O.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(O));
  for (T = 0; T < g; T += 1) {
    if (V = e[T], S = i(V, T), O = h.get(S), O === void 0) {
      var z = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      p = Eu(
        z,
        t,
        p,
        p === null ? t.first : p.next,
        V,
        S,
        T,
        r,
        o,
        a
      ), h.set(S, p), w = [], k = [], b = p.next;
      continue;
    }
    if (v && Lf(O, V, T, o), (O.e.f & On) !== 0 && (vo(O.e), f && ((l = O.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(O))), O !== b) {
      if ($ !== void 0 && $.has(O)) {
        if (w.length < k.length) {
          var q = k[0], L;
          p = q.prev;
          var B = w[0], M = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Ks(w[L], q, n);
          for (L = 0; L < k.length; L += 1)
            $.delete(k[L]);
          Bn(t, B.prev, M.next), Bn(t, p, B), Bn(t, M, q), b = q, p = M, T -= 1, w = [], k = [];
        } else
          $.delete(O), Ks(O, b, n), Bn(t, O.prev, O.next), Bn(t, O, p === null ? t.first : p.next), Bn(t, p, O), p = O;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== S; )
        (b.e.f & On) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      O = b;
    }
    w.push(O), p = O, b = O.next;
  }
  if (b !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); b !== null; )
      (b.e.f & On) === 0 && _.push(b), b = b.next;
    var E = _.length;
    if (E > 0) {
      var N = (o & jl) !== 0 && g === 0 ? n : null;
      if (f) {
        for (T = 0; T < E; T += 1)
          (u = _[T].a) == null || u.measure();
        for (T = 0; T < E; T += 1)
          (c = _[T].a) == null || c.fix();
      }
      Of(t, _, N, h);
    }
  }
  f && Mo(() => {
    var H;
    if (C !== void 0)
      for (O of C)
        (H = O.a) == null || H.apply();
  }), Ge.first = t.first && t.first.e, Ge.last = p && p.e;
}
function Lf(e, t, n, r) {
  (r & Wa) !== 0 && Ca(e.v, t), (r & Xa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Eu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Wa) !== 0, f = (l & M1) === 0, v = c ? f ? /* @__PURE__ */ ie(o) : Or(o) : o, g = (l & Xa) === 0 ? a : Or(a), h = {
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
    return h.e = Fn(() => s(e, v, g, u), De), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Ks(e, t, n) {
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
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ls(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  ke(() => {
    var s = (
      /** @type {Effect} */
      Ge
    );
    if (a === (a = t() ?? "")) {
      De && xn();
      return;
    }
    if (s.nodes_start !== null && (cu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (De) {
        Re.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw zi(), kr;
        qt(Re, u), i = Vt(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var f = ss(c);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ pt(f)), qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ pt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ pt(f)
          );
      else
        i.before(f);
    }
  });
}
function $t(e, t, n, r, o) {
  var i;
  De && xn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Df(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function cr(e, t, ...n) {
  var r = e, o = ht, i;
  Wr(() => {
    o !== (o = t()) && (i && (dn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Yr), De && (r = Re);
}
function Mu(e, t, n) {
  De && xn();
  var r = e, o, i;
  Wr(() => {
    o !== (o = t()) && (i && (Nr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Yr), De && (r = Re);
}
function zf(e, t, n, r, o, i) {
  let a = De;
  De && xn();
  var s, l, u = null;
  De && Re.nodeType === 1 && (u = /** @type {Element} */
  Re, xn());
  var c = (
    /** @type {TemplateNode} */
    De ? Re : e
  ), f;
  Wr(() => {
    const v = t() || null;
    var g = v === "svg" ? L1 : null;
    v !== s && (f && (v === null ? Nr(f, () => {
      f = null, l = null;
    }) : v === l ? vo(f) : dn(f)), v && v !== l && (f = Fn(() => {
      if (u = De ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), qt(u, u), r) {
        De && Sf(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          De ? /* @__PURE__ */ pt(u) : u.appendChild(Dn())
        );
        De && (h === null ? Kt(!1) : Vt(h)), r(u, h);
      }
      Ge.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Yr), a && (Kt(!0), Vt(c));
}
function Je(e, t) {
  Mo(() => {
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
function xt(e, t, n) {
  Yt(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var a = n();
        te(a), o && ns(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Vu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Af() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
function gn(e) {
  return typeof e == "object" ? Af(e) : e ?? "";
}
const Ws = [...` 	
\r\f \v\uFEFF`];
function If(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || Ws.includes(r[a - 1])) && (s === r.length || Ws.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
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
function aa(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function qf(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(aa)), o && l.push(...Object.keys(o).map(aa));
      var u = 0, c = -1;
      const x = e.length;
      for (var f = 0; f < x; f++) {
        var v = e[f];
        if (s ? v === "/" && e[f - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[f + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = f;
          else if (v === ";" || f === x - 1) {
            if (c !== -1) {
              var g = aa(e.substring(u, c).trim());
              if (!l.includes(g)) {
                v !== ";" && f++;
                var h = e.substring(u, f).trim();
                n += " " + h + ";";
              }
            }
            u = f + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Xs(r)), o && (n += Xs(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ct(e, t, n, r, o, i) {
  var a = e.__className;
  if (De || a !== n || a === void 0) {
    var s = If(n, r, i);
    (!De || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function sa(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function vt(e, t, n, r) {
  var o = e.__style;
  if (De || o !== t) {
    var i = qf(t, r);
    (!De || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (sa(e, n == null ? void 0 : n[0], r[0]), sa(e, n == null ? void 0 : n[1], r[1], "important")) : sa(e, n, r));
  return r;
}
const to = Symbol("class"), rr = Symbol("style"), Pu = Symbol("is custom element"), Hu = Symbol("is html");
function Tn(e) {
  if (De) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          _e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          _e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, lf(n), Vf();
  }
}
function Uo(e, t) {
  var n = Zi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function js(e, t) {
  var n = Zi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Bf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function _e(e, t, n, r) {
  var o = Zi(e);
  De && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Y1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Nu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function jt(e, t, n, r, o = !1) {
  var i = Zi(e), a = i[Pu], s = !i[Hu];
  let l = De && a;
  l && Kt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = gn(n.class) : (r || n[to]) && (n.class = null), n[rr] && (n.style ?? (n.style = null));
  var v = Nu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, g, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
      continue;
    }
    if (C === "style") {
      vt(e, w, t == null ? void 0 : t[rr], n[rr]), u[C] = w, u[rr] = n[rr];
      continue;
    }
    var h = u[C];
    if (w !== h) {
      u[C] = w;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, V = "$$" + C;
          let S = C.slice(2);
          var b = bf(S);
          if (yf(S) && (S = S.slice(0, -7), k.capture = !0), !b && h) {
            if (w != null) continue;
            e.removeEventListener(S, u[V], k), u[V] = null;
          }
          if (w != null)
            if (b)
              e[`__${S}`] = w, jr([S]);
            else {
              let O = function(T) {
                u[C].call(this, T);
              };
              u[V] = _u(S, e, O, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          _e(e, C, w);
        else if (C === "autofocus")
          Ef(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (C === "__value" || C === "value" && w != null))
          e.value = e.__value = w;
        else if (C === "selected" && c)
          Bf(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = C;
          s || ($ = $f($));
          var p = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !p)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if ($ === "value") {
                let S = k.defaultValue;
                k.removeAttribute($), k.defaultValue = S, k.value = k.__value = V ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = S, k.checked = V ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else p || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && _e(e, $, w);
        }
    }
  }
  return l && Kt(!0), u;
}
function Zi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Pu]: e.nodeName.includes("-"),
      [Hu]: e.namespaceURI === T1
    })
  );
}
var Fs = /* @__PURE__ */ new Map();
function Nu(e) {
  var t = Fs.get(e.nodeName);
  if (t) return t;
  Fs.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Ul(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ja(r);
  }
  return t;
}
var or, uo, Jo, Sa, Ou;
const Ea = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Cr(this, Sa), Cr(this, or, /* @__PURE__ */ new WeakMap()), Cr(this, uo), Cr(this, Jo), ii(this, Jo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, or).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, or).set(t, r), C1(this, Sa, Ou).call(this).observe(t, ut(this, Jo)), () => {
      var o = ut(this, or).get(t);
      o.delete(n), o.size === 0 && (ut(this, or).delete(t), ut(this, uo).unobserve(t));
    };
  }
};
or = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakSet(), Ou = function() {
  return ut(this, uo) ?? ii(this, uo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ea.entries.set(t.target, t);
        for (var n of ut(this, or).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
zt(Ea, "entries", /* @__PURE__ */ new WeakMap());
let Zf = Ea;
var Rf = /* @__PURE__ */ new Zf({
  box: "border-box"
});
function Gs(e, t, n) {
  var r = Rf.observe(e, () => n(e[t]));
  Yt(() => (Cn(() => n(e[t])), r));
}
function Us(e, t) {
  return e === t || (e == null ? void 0 : e[Kn]) === t;
}
function _n(e = {}, t, n, r) {
  return Yt(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Us(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Mo(() => {
        i && Us(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ze(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), n = t.l.u;
  if (!n) return;
  let r = () => te(t.s);
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
    r = () => d(a);
  }
  n.b.length && nf(() => {
    Js(t, r), fo(n.b);
  }), en(() => {
    const o = Cn(() => n.m.map(q1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && en(() => {
    Js(t, r), fo(n.a);
  });
}
function Js(e, t) {
  if (e.l.s)
    for (const n of e.l.s) d(n);
  t();
}
function Ke(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Eo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function on(e) {
  Fe === null && Ti(), Rr && Fe.l !== null ? Kf(Fe).m.push(e) : en(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  Fe === null && Ti(), on(() => () => Cn(e));
}
function Yf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Fe;
  return e === null && Ti(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Eo(i) ? i.slice() : [i], s = Yf(
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
function Kf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function cs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ht;
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
function Ut(e, t) {
  return {
    subscribe: Se(e, t).subscribe
  };
}
function Se(e, t = ht) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (ns(e, s) && (e = s, n)) {
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
  function a(s, l = ht) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || ht), s(
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
  return Ut(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, f = ht;
    const v = () => {
      if (c)
        return;
      f();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : f = typeof h == "function" ? h : ht;
    }, g = o.map(
      (h, x) => cs(
        h,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && v();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, v(), function() {
      fo(g), f(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Ro = !1, Ma = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: ht
  });
  if (r.store !== e && !(Ma in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ht;
    else {
      var o = !0;
      r.unsubscribe = cs(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Ma in n ? F(e) : d(r.source);
}
function Wf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ht), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function ot() {
  const e = {};
  function t() {
    os(() => {
      for (var n in e)
        e[n].unsubscribe();
      co(e, Ma, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Xf(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const jf = {
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
    jf
  );
}
const Ff = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return d(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      Fl
    )), e.special[t](n), Zs(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Zs(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function st(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Or(0) }, Ff);
}
const Gf = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (eo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      eo(o) && (o = o());
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
      if (eo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Nn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Kn || t === es) return !1;
    for (let n of e.props)
      if (eo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      eo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function lt(...e) {
  return new Proxy({ props: e }, Gf);
}
function Qs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & V1) !== 0, a = !Rr || (n & P1) !== 0, s = (n & H1) !== 0, l = (n & N1) !== 0, u = !1, c;
  s ? [c, u] = Xf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var f = Kn in e || es in e, v = s && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (f && t in e && ((S) => e[t] = S))) || void 0, g = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? g = Cn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && G1(), c = b(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? b() : (h = !0, x = !1, S);
    };
  else {
    var p = (i ? Hr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= Z1, $ = () => {
      var S = d(p);
      return S !== void 0 && (g = /** @type {V} */
      void 0), S === void 0 ? g : S;
    };
  }
  if ((n & Fl) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(S, O) {
      return arguments.length > 0 ? ((!a || !O || C || u) && v(O ? $() : S), S) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ ie(c), V = /* @__PURE__ */ Hr(() => {
    var S = $(), O = d(k);
    return w ? (w = !1, O) : k.v = S;
  });
  return s && d(V), i || (V.equals = rs), function(S, O) {
    if (arguments.length > 0) {
      const T = O ? d(V) : a && s ? ln(S) : S;
      if (!V.equals(T)) {
        if (w = !0, J(k, T), x && g !== void 0 && (g = T), Qs(V))
          return S;
        Cn(() => d(V));
      }
      return S;
    }
    return Qs(V) ? V.v : d(V);
  };
}
function Uf(e) {
  return new Jf(e);
}
var qn, an;
class Jf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Cr(this, qn), Cr(this, an);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ie(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return d(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === es ? !0 : (d(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return J(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ii(this, an, (t.hydrate ? Hf : ku)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ii(this, qn, i.$$events);
    for (const a of Object.keys(ut(this, an)))
      a === "$set" || a === "$destroy" || a === "$on" || co(this, a, {
        get() {
          return ut(this, an)[a];
        },
        /** @param {any} value */
        set(s) {
          ut(this, an)[a] = s;
        },
        enumerable: !0
      });
    ut(this, an).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ut(this, an).$destroy = () => {
      Nf(ut(this, an));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ut(this, an).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ut(this, qn)[t] = ut(this, qn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ut(this, qn)[t].push(r), () => {
      ut(this, qn)[t] = ut(this, qn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ut(this, an).$destroy();
  }
}
qn = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap();
let Tu;
typeof HTMLElement == "function" && (Tu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), zt(this, "$$ctor"), zt(this, "$$s"), zt(this, "$$c"), zt(this, "$$cn", !1), zt(this, "$$d", {}), zt(this, "$$r", !1), zt(this, "$$p_d", {}), zt(this, "$$l", {}), zt(this, "$$l_u", /* @__PURE__ */ new Map()), zt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Qf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Qo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Uf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = rf(() => {
        Kr(() => {
          var r;
          this.$$r = !0;
          for (const o of ai(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Qo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Qo(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ai(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Qo(e, t, n, r) {
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
function Qf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let a = class extends Tu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ai(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ai(t).forEach((s) => {
    co(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Qo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var f = (u = Nn(c, s)) == null ? void 0 : u.get;
          f ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    co(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Nt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Nt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var ev = { value: () => {
} };
function Yi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ei(n);
}
function ei(e) {
  this._ = e;
}
function tv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ei.prototype = Yi.prototype = {
  constructor: ei,
  on: function(e, t) {
    var n = this._, r = tv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = nv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = el(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = el(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ei(e);
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
function nv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function el(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = ev, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Va = "http://www.w3.org/1999/xhtml";
const tl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Va,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ki(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), tl.hasOwnProperty(t) ? { space: tl[t], local: e } : e;
}
function rv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Va && t.documentElement.namespaceURI === Va ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ov(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Lu(e) {
  var t = Ki(e);
  return (t.local ? ov : rv)(t);
}
function iv() {
}
function ds(e) {
  return e == null ? iv : function() {
    return this.querySelector(e);
  };
}
function av(e) {
  typeof e != "function" && (e = ds(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Ft(r, this._parents);
}
function sv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function lv() {
  return [];
}
function Du(e) {
  return e == null ? lv : function() {
    return this.querySelectorAll(e);
  };
}
function uv(e) {
  return function() {
    return sv(e.apply(this, arguments));
  };
}
function cv(e) {
  typeof e == "function" ? e = uv(e) : e = Du(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Ft(r, o);
}
function zu(e) {
  return function() {
    return this.matches(e);
  };
}
function Au(e) {
  return function(t) {
    return t.matches(e);
  };
}
var dv = Array.prototype.find;
function fv(e) {
  return function() {
    return dv.call(this.children, e);
  };
}
function vv() {
  return this.firstElementChild;
}
function gv(e) {
  return this.select(e == null ? vv : fv(typeof e == "function" ? e : Au(e)));
}
var pv = Array.prototype.filter;
function hv() {
  return Array.from(this.children);
}
function mv(e) {
  return function() {
    return pv.call(this.children, e);
  };
}
function yv(e) {
  return this.selectAll(e == null ? hv : mv(typeof e == "function" ? e : Au(e)));
}
function wv(e) {
  typeof e != "function" && (e = zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ft(r, this._parents);
}
function Iu(e) {
  return new Array(e.length);
}
function bv() {
  return new Ft(this._enter || this._groups.map(Iu), this._parents);
}
function gi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
gi.prototype = {
  constructor: gi,
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
function xv(e) {
  return function() {
    return e;
  };
}
function $v(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new gi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Cv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < f; ++s)
    g = a.call(e, i[s], s, i) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = i[s], u.delete(g)) : n[s] = new gi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function _v(e) {
  return e.__data__;
}
function kv(e, t) {
  if (!arguments.length) return Array.from(this, _v);
  var n = t ? Cv : $v, r = this._parents, o = this._groups;
  typeof e != "function" && (e = xv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], v = f.length, g = Sv(e.call(c, c && c.__data__, u, r)), h = g.length, x = s[u] = new Array(h), b = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, f, x, b, $, g, t);
    for (var p = 0, C = 0, w, k; p < h; ++p)
      if (w = x[p]) {
        for (p >= C && (C = p + 1); !(k = b[C]) && ++C < h; ) ;
        w._next = k || null;
      }
  }
  return a = new Ft(a, r), a._enter = s, a._exit = l, a;
}
function Sv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ev() {
  return new Ft(this._exit || this._groups.map(Iu), this._parents);
}
function Mv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Vv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], f = u.length, v = s[l] = new Array(f), g, h = 0; h < f; ++h)
      (g = u[h] || c[h]) && (v[h] = g);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Ft(s, this._parents);
}
function Pv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Hv(e) {
  e || (e = Nv);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Ft(o, this._parents).order();
}
function Nv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ov() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Tv() {
  return Array.from(this);
}
function Lv() {
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
function zv() {
  return !this.node();
}
function Av(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Iv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Bv(e, t) {
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
function Yv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Kv(e, t) {
  var n = Ki(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? qv : Iv : typeof t == "function" ? n.local ? Yv : Rv : n.local ? Zv : Bv)(n, t));
}
function qu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Wv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Xv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function jv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Fv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Wv : typeof t == "function" ? jv : Xv)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
  return e.style.getPropertyValue(t) || qu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Gv(e) {
  return function() {
    delete this[e];
  };
}
function Uv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Jv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Qv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Gv : typeof t == "function" ? Jv : Uv)(e, t)) : this.node()[e];
}
function Bu(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new Zu(e);
}
function Zu(e) {
  this._node = e, this._names = Bu(e.getAttribute("class") || "");
}
Zu.prototype = {
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
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Yu(e, t) {
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function eg(e) {
  return function() {
    Ru(this, e);
  };
}
function tg(e) {
  return function() {
    Yu(this, e);
  };
}
function ng(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ru : Yu)(this, e);
  };
}
function rg(e, t) {
  var n = Bu(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ng : t ? eg : tg)(n, t));
}
function og() {
  this.textContent = "";
}
function ig(e) {
  return function() {
    this.textContent = e;
  };
}
function ag(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function sg(e) {
  return arguments.length ? this.each(e == null ? og : (typeof e == "function" ? ag : ig)(e)) : this.node().textContent;
}
function lg() {
  this.innerHTML = "";
}
function ug(e) {
  return function() {
    this.innerHTML = e;
  };
}
function cg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function dg(e) {
  return arguments.length ? this.each(e == null ? lg : (typeof e == "function" ? cg : ug)(e)) : this.node().innerHTML;
}
function fg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vg() {
  return this.each(fg);
}
function gg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function pg() {
  return this.each(gg);
}
function hg(e) {
  var t = typeof e == "function" ? e : Lu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function mg() {
  return null;
}
function yg(e, t) {
  var n = typeof e == "function" ? e : Lu(e), r = t == null ? mg : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function wg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bg() {
  return this.each(wg);
}
function xg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $g() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cg(e) {
  return this.select(e ? $g : xg);
}
function _g(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function kg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Sg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Eg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Mg(e, t, n) {
  return function() {
    var r = this.__on, o, i = kg(t);
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
function Vg(e, t, n) {
  var r = Sg(e + ""), o, i = r.length, a;
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
  for (s = t ? Mg : Eg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Ku(e, t, n) {
  var r = qu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return Ku(this, e, t);
  };
}
function Hg(e, t) {
  return function() {
    return Ku(this, e, t.apply(this, arguments));
  };
}
function Ng(e, t) {
  return this.each((typeof t == "function" ? Hg : Pg)(e, t));
}
function* Og() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Wu = [null];
function Ft(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new Ft([[document.documentElement]], Wu);
}
function Tg() {
  return this;
}
Ft.prototype = Po.prototype = {
  constructor: Ft,
  select: av,
  selectAll: cv,
  selectChild: gv,
  selectChildren: yv,
  filter: wv,
  data: kv,
  enter: bv,
  exit: Ev,
  join: Mv,
  merge: Vv,
  selection: Tg,
  order: Pv,
  sort: Hv,
  call: Ov,
  nodes: Tv,
  node: Lv,
  size: Dv,
  empty: zv,
  each: Av,
  attr: Kv,
  style: Fv,
  property: Qv,
  classed: rg,
  text: sg,
  html: dg,
  raise: vg,
  lower: pg,
  append: hg,
  insert: yg,
  remove: bg,
  clone: Cg,
  datum: _g,
  on: Vg,
  dispatch: Ng,
  [Symbol.iterator]: Og
};
function Qt(e) {
  return typeof e == "string" ? new Ft([[document.querySelector(e)]], [document.documentElement]) : new Ft([[e]], Wu);
}
function Lg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function sn(e, t) {
  if (e = Lg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Dg = { passive: !1 }, mo = { capture: !0, passive: !1 };
function la(e) {
  e.stopImmediatePropagation();
}
function Sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = Qt(e).on("dragstart.drag", Sr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", Sr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ju(e, t) {
  var n = e.document.documentElement, r = Qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Sr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Yo = (e) => () => e;
function Pa(e, {
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
Pa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Ag() {
  return this.parentNode;
}
function Ig(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bg() {
  var e = zg, t = Ag, n = Ig, r = qg, o = {}, i = Yi("start", "drag", "end"), a = 0, s, l, u, c, f = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Dg).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var V = C(this, t.call(this, w, k), w, k, "mouse");
      V && (Qt(w.view).on("mousemove.drag", h, mo).on("mouseup.drag", x, mo), Xu(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, V("start", w));
    }
  }
  function h(w) {
    if (Sr(w), !u) {
      var k = w.clientX - s, V = w.clientY - l;
      u = k * k + V * V > f;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    Qt(w.view).on("mousemove.drag mouseup.drag", null), ju(w.view, u), Sr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var V = w.changedTouches, S = t.call(this, w, k), O = V.length, T, z;
      for (T = 0; T < O; ++T)
        (z = C(this, S, w, k, V[T].identifier, V[T])) && (la(w), z("start", w, V[T]));
    }
  }
  function $(w) {
    var k = w.changedTouches, V = k.length, S, O;
    for (S = 0; S < V; ++S)
      (O = o[k[S].identifier]) && (Sr(w), O("drag", w, k[S]));
  }
  function p(w) {
    var k = w.changedTouches, V = k.length, S, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < V; ++S)
      (O = o[k[S].identifier]) && (la(w), O("end", w, k[S]));
  }
  function C(w, k, V, S, O, T) {
    var z = i.copy(), q = sn(T || V, k), L, B, M;
    if ((M = n.call(w, new Pa("beforestart", {
      sourceEvent: V,
      target: v,
      identifier: O,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), S)) != null)
      return L = M.x - q[0] || 0, B = M.y - q[1] || 0, function _(E, N, H) {
        var P = q, A;
        switch (E) {
          case "start":
            o[O] = _, A = a++;
            break;
          case "end":
            delete o[O], --a;
          // falls through
          case "drag":
            q = sn(H || N, k), A = a;
            break;
        }
        z.call(
          E,
          w,
          new Pa(E, {
            sourceEvent: N,
            subject: M,
            target: v,
            identifier: O,
            active: A,
            x: q[0] + L,
            y: q[1] + B,
            dx: q[0] - P[0],
            dy: q[1] - P[1],
            dispatch: z
          }),
          S
        );
      };
  }
  return v.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Yo(!!w), v) : e;
  }, v.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Yo(w), v) : t;
  }, v.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Yo(w), v) : n;
  }, v.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Yo(!!w), v) : r;
  }, v.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? v : w;
  }, v.clickDistance = function(w) {
    return arguments.length ? (f = (w = +w) * w, v) : Math.sqrt(f);
  }, v;
}
function vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Fu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ho() {
}
var yo = 0.7, pi = 1 / yo, Er = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Rg = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`), Yg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Kg = new RegExp(`^rgba\\(${Er},${Er},${Er},${wo}\\)$`), Wg = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Xg = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), jg = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), nl = {
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
vs(Ho, bo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: rl,
  // Deprecated! Use color.formatHex.
  formatHex: rl,
  formatHex8: Fg,
  formatHsl: Gg,
  formatRgb: ol,
  toString: ol
});
function rl() {
  return this.rgb().formatHex();
}
function Fg() {
  return this.rgb().formatHex8();
}
function Gg() {
  return Gu(this).formatHsl();
}
function ol() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? il(t) : n === 3 ? new At(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Rg.exec(e)) ? new At(t[1], t[2], t[3], 1) : (t = Yg.exec(e)) ? new At(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Kg.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Wg.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xg.exec(e)) ? ll(t[1], t[2] / 100, t[3] / 100, 1) : (t = jg.exec(e)) ? ll(t[1], t[2] / 100, t[3] / 100, t[4]) : nl.hasOwnProperty(e) ? il(nl[e]) : e === "transparent" ? new At(NaN, NaN, NaN, 0) : null;
}
function il(e) {
  return new At(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new At(e, t, n, r);
}
function Ug(e) {
  return e instanceof Ho || (e = bo(e)), e ? (e = e.rgb(), new At(e.r, e.g, e.b, e.opacity)) : new At();
}
function Ha(e, t, n, r) {
  return arguments.length === 1 ? Ug(e) : new At(e, t, n, r ?? 1);
}
function At(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(At, Ha, Fu(Ho, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new At(sr(this.r), sr(this.g), sr(this.b), hi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: al,
  // Deprecated! Use color.formatHex.
  formatHex: al,
  formatHex8: Jg,
  formatRgb: sl,
  toString: sl
}));
function al() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Jg() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sl() {
  const e = hi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sr(this.r)}, ${sr(this.g)}, ${sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function hi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ll(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new un(e, t, n, r);
}
function Gu(e) {
  if (e instanceof un) return new un(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = bo(e)), !e) return new un();
  if (e instanceof un) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new un(a, s, l, e.opacity);
}
function Qg(e, t, n, r) {
  return arguments.length === 1 ? Gu(e) : new un(e, t, n, r ?? 1);
}
function un(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(un, Qg, Fu(Ho, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new un(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new un(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new At(
      ua(e >= 240 ? e - 240 : e + 120, o, r),
      ua(e, o, r),
      ua(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new un(ul(this.h), Wo(this.s), Wo(this.l), hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = hi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ul(this.h)}, ${Wo(this.s) * 100}%, ${Wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ul(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ua(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Uu = (e) => () => e;
function ep(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function tp(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function np(e) {
  return (e = +e) == 1 ? Ju : function(t, n) {
    return n - t ? tp(t, n, e) : Uu(isNaN(t) ? n : t);
  };
}
function Ju(e, t) {
  var n = t - e;
  return n ? ep(e, n) : Uu(isNaN(e) ? t : e);
}
const cl = function e(t) {
  var n = np(t);
  function r(o, i) {
    var a = n((o = Ha(o)).r, (i = Ha(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Ju(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Zn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Na = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ca = new RegExp(Na.source, "g");
function rp(e) {
  return function() {
    return e;
  };
}
function op(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ip(e, t) {
  var n = Na.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Na.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Zn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? op(l[0].x) : rp(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) s[(f = l[c]).i] = f.x(u);
    return s.join("");
  });
}
var dl = 180 / Math.PI, Qu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ec(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * dl,
    skewX: Math.atan(l) * dl,
    scaleX: a,
    scaleY: s
  };
}
var Xo;
function ap(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Qu : ec(t.a, t.b, t.c, t.d, t.e, t.f);
}
function sp(e) {
  return e == null || (Xo || (Xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xo.setAttribute("transform", e), !(e = Xo.transform.baseVal.consolidate())) ? Qu : (e = e.matrix, ec(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, v, g, h) {
    if (u !== f || c !== v) {
      var x = g.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: Zn(u, f) }, { i: x - 2, x: Zn(c, v) });
    } else (f || v) && g.push("translate(" + f + t + v + n);
  }
  function a(u, c, f, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Zn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function s(u, c, f, v) {
    u !== c ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Zn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, v, g, h) {
    if (u !== f || c !== v) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: Zn(u, f) }, { i: x - 2, x: Zn(c, v) });
    } else (f !== 1 || v !== 1) && g.push(o(g) + "scale(" + f + "," + v + ")");
  }
  return function(u, c) {
    var f = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, v), a(u.rotate, c.rotate, f, v), s(u.skewX, c.skewX, f, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, v), u = c = null, function(g) {
      for (var h = -1, x = v.length, b; ++h < x; ) f[(b = v[h]).i] = b.x(g);
      return f.join("");
    };
  };
}
var lp = tc(ap, "px, ", "px)", "deg)"), up = tc(sp, ", ", ")", ")"), cp = 1e-12;
function fl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function dp(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function fp(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const vp = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], f = a[1], v = a[2], g = c - s, h = f - l, x = g * g + h * h, b, $;
    if (x < cp)
      $ = Math.log(v / u) / t, b = function(S) {
        return [
          s + S * g,
          l + S * h,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var p = Math.sqrt(x), C = (v * v - u * u + r * x) / (2 * u * n * p), w = (v * v - u * u - r * x) / (2 * v * n * p), k = Math.log(Math.sqrt(C * C + 1) - C), V = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (V - k) / t, b = function(S) {
        var O = S * $, T = fl(k), z = u / (n * p) * (T * fp(t * O + k) - dp(k));
        return [
          s + z * g,
          l + z * h,
          u * T / fl(t * O + k)
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
var zr = 0, io = 0, no = 0, nc = 1e3, mi, ao, yi = 0, dr = 0, Wi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, rc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gs() {
  return dr || (rc(gp), dr = xo.now() + Wi);
}
function gp() {
  dr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = oc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? gs() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : mi = this, ao = this), this._call = e, this._time = n, Oa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Oa());
  }
};
function oc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function pp() {
  gs(), ++zr;
  for (var e = mi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function vl() {
  dr = (yi = xo.now()) + Wi, zr = io = 0;
  try {
    pp();
  } finally {
    zr = 0, mp(), dr = 0;
  }
}
function hp() {
  var e = xo.now(), t = e - yi;
  t > nc && (Wi -= t, yi = e);
}
function mp() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  ao = e, Oa(r);
}
function Oa(e) {
  if (!zr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(vl, e - xo.now() - Wi)), no && (no = clearInterval(no))) : (no || (yi = xo.now(), no = setInterval(hp, nc)), zr = 1, rc(vl));
  }
}
function gl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var yp = Yi("start", "end", "cancel", "interrupt"), wp = [], ic = 0, pl = 1, Ta = 2, ti = 3, hl = 4, La = 5, ni = 6;
function Xi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  bp(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: yp,
    tween: wp,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ic
  });
}
function ps(e, t) {
  var n = pn(e, t);
  if (n.state > ic) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = pn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function pn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function bp(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = oc(i, 0, n.time);
  function i(u) {
    n.state = pl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, f, v, g;
    if (n.state !== pl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === ti) return gl(a);
        g.state === hl ? (g.state = ni, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ni, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (gl(function() {
      n.state === ti && (n.state = hl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ta, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ta) {
      for (n.state = ti, o = new Array(v = n.tween.length), c = 0, f = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = La, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, c);
    n.state === La && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ni, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ri(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ta && r.state < La, r.state = ni, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function xp(e) {
  return this.each(function() {
    ri(this, e);
  });
}
function $p(e, t) {
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
function Cp(e, t, n) {
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
function _p(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = pn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? $p : Cp)(n, e, t));
}
function hs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return pn(o, r).value[t];
  };
}
function ac(e, t) {
  var n;
  return (typeof t == "number" ? Zn : t instanceof bo ? cl : (n = bo(t)) ? (t = n, cl) : ip)(e, t);
}
function kp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ep(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Mp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Vp(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Pp(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Hp(e, t) {
  var n = Ki(e), r = n === "transform" ? up : ac;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Pp : Vp)(n, r, hs(this, "attr." + e, t)) : t == null ? (n.local ? Sp : kp)(n) : (n.local ? Mp : Ep)(n, r, t));
}
function Np(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Op(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Tp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Op(e, i)), n;
  }
  return o._value = t, o;
}
function Lp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Np(e, i)), n;
  }
  return o._value = t, o;
}
function Dp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ki(e);
  return this.tween(n, (r.local ? Tp : Lp)(r, t));
}
function zp(e, t) {
  return function() {
    ps(this, e).delay = +t.apply(this, arguments);
  };
}
function Ap(e, t) {
  return t = +t, function() {
    ps(this, e).delay = t;
  };
}
function Ip(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zp : Ap)(t, e)) : pn(this.node(), t).delay;
}
function qp(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Bp(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Zp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qp : Bp)(t, e)) : pn(this.node(), t).duration;
}
function Rp(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Yp(e) {
  var t = this._id;
  return arguments.length ? this.each(Rp(t, e)) : pn(this.node(), t).ease;
}
function Kp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Wp(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Kp(this._id, e));
}
function Xp(e) {
  typeof e != "function" && (e = zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new zn(r, this._parents, this._name, this._id);
}
function jp(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, f = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (f[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new zn(a, this._parents, this._name, this._id);
}
function Fp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Gp(e, t, n) {
  var r, o, i = Fp(t) ? ps : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Up(e, t) {
  var n = this._id;
  return arguments.length < 2 ? pn(this.node(), n).on.on(e) : this.each(Gp(n, e, t));
}
function Jp(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Qp() {
  return this.on("end.remove", Jp(this._id));
}
function eh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, f, v = 0; v < l; ++v)
      (c = s[v]) && (f = e.call(c, c.__data__, v, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[v] = f, Xi(u[v], t, n, v, u, pn(c, n)));
  return new zn(i, this._parents, t, n);
}
function th(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Du(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var v = e.call(c, c.__data__, f, l), g, h = pn(c, n), x = 0, b = v.length; x < b; ++x)
          (g = v[x]) && Xi(g, t, n, x, v, h);
        i.push(v), a.push(c);
      }
  return new zn(i, a, t, n);
}
var nh = Po.prototype.constructor;
function rh() {
  return new nh(this._groups, this._parents);
}
function oh(e, t) {
  var n, r, o;
  return function() {
    var i = Dr(this, e), a = (this.style.removeProperty(e), Dr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function sc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ih(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Dr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function ah(e, t, n) {
  var r, o, i;
  return function() {
    var a = Dr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Dr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function sh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = En(this, e), u = l.on, c = l.value[i] == null ? s || (s = sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function lh(e, t, n) {
  var r = (e += "") == "transform" ? lp : ac;
  return t == null ? this.styleTween(e, oh(e, r)).on("end.style." + e, sc(e)) : typeof t == "function" ? this.styleTween(e, ah(e, r, hs(this, "style." + e, t))).each(sh(this._id, e)) : this.styleTween(e, ih(e, r, t), n).on("end.style." + e, null);
}
function uh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function ch(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && uh(e, a, n)), r;
  }
  return i._value = t, i;
}
function dh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, ch(e, t, n ?? ""));
}
function fh(e) {
  return function() {
    this.textContent = e;
  };
}
function vh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function gh(e) {
  return this.tween("text", typeof e == "function" ? vh(hs(this, "text", e)) : fh(e == null ? "" : e + ""));
}
function ph(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function hh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && ph(o)), t;
  }
  return r._value = e, r;
}
function mh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, hh(e));
}
function yh() {
  for (var e = this._name, t = this._id, n = lc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = pn(l, t);
        Xi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new zn(r, this._parents, e, n);
}
function wh() {
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
var bh = 0;
function zn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function lc() {
  return ++bh;
}
var Vn = Po.prototype;
zn.prototype = {
  constructor: zn,
  select: eh,
  selectAll: th,
  selectChild: Vn.selectChild,
  selectChildren: Vn.selectChildren,
  filter: Xp,
  merge: jp,
  selection: rh,
  transition: yh,
  call: Vn.call,
  nodes: Vn.nodes,
  node: Vn.node,
  size: Vn.size,
  empty: Vn.empty,
  each: Vn.each,
  on: Up,
  attr: Hp,
  attrTween: Dp,
  style: lh,
  styleTween: dh,
  text: gh,
  textTween: mh,
  remove: Qp,
  tween: _p,
  delay: Ip,
  duration: Zp,
  ease: Yp,
  easeVarying: Wp,
  end: wh,
  [Symbol.iterator]: Vn[Symbol.iterator]
};
function xh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $h = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xh
};
function Ch(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function _h(e) {
  var t, n;
  e instanceof zn ? (t = e._id, e = e._name) : (t = lc(), (n = $h).time = gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Xi(l, e, t, u, a, n || Ch(l, t));
  return new zn(r, this._parents, e, t);
}
Po.prototype.interrupt = xp;
Po.prototype.transition = _h;
const jo = (e) => () => e;
function kh(e, {
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
function Pn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Pn.prototype = {
  constructor: Pn,
  scale: function(e) {
    return e === 1 ? this : new Pn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Pn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ji = new Pn(1, 0, 0);
uc.prototype = Pn.prototype;
function uc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ji;
  return e.__zoom;
}
function da(e) {
  e.stopImmediatePropagation();
}
function ro(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Sh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Eh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ml() {
  return this.__zoom || ji;
}
function Mh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Vh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ph(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function cc() {
  var e = Sh, t = Eh, n = Ph, r = Mh, o = Vh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = vp, u = Yi("start", "zoom", "end"), c, f, v, g = 500, h = 150, x = 0, b = 10;
  function $(M) {
    M.property("__zoom", ml).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(M, _, E, N) {
    var H = M.selection ? M.selection() : M;
    H.property("__zoom", ml), M !== H ? k(M, _, E, N) : H.interrupt().each(function() {
      V(this, arguments).event(N).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(M, _, E, N) {
    $.scaleTo(M, function() {
      var H = this.__zoom.k, P = typeof _ == "function" ? _.apply(this, arguments) : _;
      return H * P;
    }, E, N);
  }, $.scaleTo = function(M, _, E, N) {
    $.transform(M, function() {
      var H = t.apply(this, arguments), P = this.__zoom, A = E == null ? w(H) : typeof E == "function" ? E.apply(this, arguments) : E, Y = P.invert(A), W = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(p(P, W), A, Y), H, a);
    }, E, N);
  }, $.translateBy = function(M, _, E, N) {
    $.transform(M, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), a);
    }, null, N);
  }, $.translateTo = function(M, _, E, N, H) {
    $.transform(M, function() {
      var P = t.apply(this, arguments), A = this.__zoom, Y = N == null ? w(P) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(ji.translate(Y[0], Y[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), P, a);
    }, N, H);
  };
  function p(M, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === M.k ? M : new Pn(_, M.x, M.y);
  }
  function C(M, _, E) {
    var N = _[0] - E[0] * M.k, H = _[1] - E[1] * M.k;
    return N === M.x && H === M.y ? M : new Pn(M.k, N, H);
  }
  function w(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function k(M, _, E, N) {
    M.on("start.zoom", function() {
      V(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var H = this, P = arguments, A = V(H, P).event(N), Y = t.apply(H, P), W = E == null ? w(Y) : typeof E == "function" ? E.apply(H, P) : E, ee = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), G = H.__zoom, X = typeof _ == "function" ? _.apply(H, P) : _, ye = l(G.invert(W).concat(ee / G.k), X.invert(W).concat(ee / X.k));
      return function(oe) {
        if (oe === 1) oe = X;
        else {
          var pe = ye(oe), le = ee / pe[2];
          oe = new Pn(le, W[0] - pe[0] * le, W[1] - pe[1] * le);
        }
        A.zoom(null, oe);
      };
    });
  }
  function V(M, _, E) {
    return !E && M.__zooming || new S(M, _);
  }
  function S(M, _) {
    this.that = M, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, _), this.taps = 0;
  }
  S.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, _) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var _ = Qt(this.that).datum();
      u.call(
        M,
        this.that,
        new kh(M, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        _
      );
    }
  };
  function O(M, ..._) {
    if (!e.apply(this, arguments)) return;
    var E = V(this, _).event(M), N = this.__zoom, H = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), P = sn(M);
    if (E.wheel)
      (E.mouse[0][0] !== P[0] || E.mouse[0][1] !== P[1]) && (E.mouse[1] = N.invert(E.mouse[0] = P)), clearTimeout(E.wheel);
    else {
      if (N.k === H) return;
      E.mouse = [P, N.invert(P)], ri(this), E.start();
    }
    ro(M), E.wheel = setTimeout(A, h), E.zoom("mouse", n(C(p(N, H), E.mouse[0], E.mouse[1]), E.extent, a));
    function A() {
      E.wheel = null, E.end();
    }
  }
  function T(M, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var E = M.currentTarget, N = V(this, _, !0).event(M), H = Qt(M.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ee, !0), P = sn(M, E), A = M.clientX, Y = M.clientY;
    Xu(M.view), da(M), N.mouse = [P, this.__zoom.invert(P)], ri(this), N.start();
    function W(G) {
      if (ro(G), !N.moved) {
        var X = G.clientX - A, ye = G.clientY - Y;
        N.moved = X * X + ye * ye > x;
      }
      N.event(G).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = sn(G, E), N.mouse[1]), N.extent, a));
    }
    function ee(G) {
      H.on("mousemove.zoom mouseup.zoom", null), ju(G.view, N.moved), ro(G), N.event(G).end();
    }
  }
  function z(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, N = sn(M.changedTouches ? M.changedTouches[0] : M, this), H = E.invert(N), P = E.k * (M.shiftKey ? 0.5 : 2), A = n(C(p(E, P), N, H), t.apply(this, _), a);
      ro(M), s > 0 ? Qt(this).transition().duration(s).call(k, A, N, M) : Qt(this).call($.transform, A, N, M);
    }
  }
  function q(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = M.touches, N = E.length, H = V(this, _, M.changedTouches.length === N).event(M), P, A, Y, W;
      for (da(M), A = 0; A < N; ++A)
        Y = E[A], W = sn(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== W[2] && (H.touch1 = W, H.taps = 0) : (H.touch0 = W, P = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (H.taps < 2 && (f = W[0], c = setTimeout(function() {
        c = null;
      }, g)), ri(this), H.start());
    }
  }
  function L(M, ..._) {
    if (this.__zooming) {
      var E = V(this, _).event(M), N = M.changedTouches, H = N.length, P, A, Y, W;
      for (ro(M), P = 0; P < H; ++P)
        A = N[P], Y = sn(A, this), E.touch0 && E.touch0[2] === A.identifier ? E.touch0[0] = Y : E.touch1 && E.touch1[2] === A.identifier && (E.touch1[0] = Y);
      if (A = E.that.__zoom, E.touch1) {
        var ee = E.touch0[0], G = E.touch0[1], X = E.touch1[0], ye = E.touch1[1], oe = (oe = X[0] - ee[0]) * oe + (oe = X[1] - ee[1]) * oe, pe = (pe = ye[0] - G[0]) * pe + (pe = ye[1] - G[1]) * pe;
        A = p(A, Math.sqrt(oe / pe)), Y = [(ee[0] + X[0]) / 2, (ee[1] + X[1]) / 2], W = [(G[0] + ye[0]) / 2, (G[1] + ye[1]) / 2];
      } else if (E.touch0) Y = E.touch0[0], W = E.touch0[1];
      else return;
      E.zoom("touch", n(C(A, Y, W), E.extent, a));
    }
  }
  function B(M, ..._) {
    if (this.__zooming) {
      var E = V(this, _).event(M), N = M.changedTouches, H = N.length, P, A;
      for (da(M), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), P = 0; P < H; ++P)
        A = N[P], E.touch0 && E.touch0[2] === A.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === A.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (A = sn(A, this), Math.hypot(f[0] - A[0], f[1] - A[1]) < b)) {
        var Y = Qt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : jo(+M), $) : r;
  }, $.filter = function(M) {
    return arguments.length ? (e = typeof M == "function" ? M : jo(!!M), $) : e;
  }, $.touchable = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : jo(!!M), $) : o;
  }, $.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : jo([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), $) : t;
  }, $.scaleExtent = function(M) {
    return arguments.length ? (i[0] = +M[0], i[1] = +M[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(M) {
    return arguments.length ? (a[0][0] = +M[0][0], a[1][0] = +M[1][0], a[0][1] = +M[0][1], a[1][1] = +M[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(M) {
    return arguments.length ? (n = M, $) : n;
  }, $.duration = function(M) {
    return arguments.length ? (s = +M, $) : s;
  }, $.interpolate = function(M) {
    return arguments.length ? (l = M, $) : l;
  }, $.on = function() {
    var M = u.on.apply(u, arguments);
    return M === u ? $ : M;
  }, $.clickDistance = function(M) {
    return arguments.length ? (x = (M = +M) * M, $) : Math.sqrt(x);
  }, $.tapDistance = function(M) {
    return arguments.length ? (b = +M, $) : b;
  }, $;
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
}, bi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var fr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(fr || (fr = {}));
var Xn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Xn || (Xn = {}));
var xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(xi || (xi = {}));
const Da = {
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
var Mr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mr || (Mr = {}));
var $o;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})($o || ($o = {}));
var Te;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Te || (Te = {}));
const yl = {
  [Te.Left]: Te.Right,
  [Te.Right]: Te.Left,
  [Te.Top]: Te.Bottom,
  [Te.Bottom]: Te.Top
};
function Hh(e, t) {
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
function wl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Nh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Oh = (e) => "id" in e && "source" in e && "target" in e, Th = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), No = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Lh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : ms(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? $i(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Fi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Gi(n);
}, Oo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = $i(r);
      n = Fi(n, o);
    }
  }), Gi(n);
}, dc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...To(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: v = !1 } = u;
    if (a && !f || v)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, x = Co(s, qr(u)), b = (g ?? 0) * (h ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, za = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Dh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function zh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Dh(e, a), l = Oo(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Ah({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let f = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Ar.error005());
    else {
      const g = s.measured.width, h = s.measured.height;
      g && h && (f = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else s && Br(a.extent) && (f = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = Br(f) ? vr(t, f, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Ar.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: v
  };
}
async function fc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), a = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const v = i.has(f.id), g = !v && f.parentId && a.find((h) => h.id === f.parentId);
    (v || g) && a.push(f);
  }
  const s = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = za(a, l);
  for (const f of l)
    s.has(f.id) && !u.find((v) => v.id === f.id) && u.push(f);
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
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function vc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return vr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const bl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, gc = (e, t, n = 15, r = 40) => {
  const o = bl(e.x, r, t.width - r) * n, i = bl(e.y, r, t.height - r) * n;
  return [o, i];
}, Fi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Aa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Gi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), qr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : No(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, $i = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : No(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, pc = (e, t) => Gi(Fi(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, xl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Ih = (e, t) => {
}, ys = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), To = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ys(s, a) : s;
}, Ci = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function $r(e, t) {
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
function qh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = $r(e, n), o = $r(e, t);
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
    const r = $r(e.top ?? e.y ?? 0, n), o = $r(e.bottom ?? e.y ?? 0, n), i = $r(e.left ?? e.x ?? 0, t), a = $r(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bh(e, t, n, r, o, i) {
  const { x: a, y: s } = Ci(e, [t, n, r]), { x: l, y: u } = Ci({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, f = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(f)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = qh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ir(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, g = t / 2 - f * c, h = n / 2 - v * c, x = Bh(e, g, h, c, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: g - b.left + b.right,
    y: h - b.top + b.bottom,
    zoom: c
  };
}, _i = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Br(e) {
  return e !== void 0 && e !== "parent";
}
function tr(e) {
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
function Zh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Rh() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function fa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Ln(e), s = To({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ys(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const mc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Yh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Kh = ["INPUT", "SELECT", "TEXTAREA"];
function Wh(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Kh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const yc = (e) => "clientX" in e, Ln = (e, t) => {
  var n, r;
  const o = yc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, $l = (e, t, n, r, o) => {
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
      ...mc(a)
    };
  });
};
function Xh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Cl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Te.Left:
      return [t - Fo(t - r, i), n];
    case Te.Right:
      return [t + Fo(r - t, i), n];
    case Te.Top:
      return [t, n - Fo(n - o, i)];
    case Te.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function wc({ sourceX: e, sourceY: t, sourcePosition: n = Te.Bottom, targetX: r, targetY: o, targetPosition: i = Te.Top, curvature: a = 0.25 }) {
  const [s, l] = Cl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = Cl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [f, v, g, h] = Xh({
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
    f,
    v,
    g,
    h
  ];
}
function bc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function jh({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Fh({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Fi($i(e), $i(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(a, Gi(i)) > 0;
}
const Gh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Uh = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Jh = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Oh(e) ? n = { ...e } : n = {
    ...e,
    id: Gh(e)
  }, Uh(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ia({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = bc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const _l = {
  [Te.Left]: { x: -1, y: 0 },
  [Te.Right]: { x: 1, y: 0 },
  [Te.Top]: { x: 0, y: -1 },
  [Te.Bottom]: { x: 0, y: 1 }
}, Qh = ({ source: e, sourcePosition: t = Te.Bottom, target: n }) => t === Te.Left || t === Te.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, kl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function e0({ source: e, sourcePosition: t = Te.Bottom, target: n, targetPosition: r = Te.Top, center: o, offset: i }) {
  const a = _l[t], s = _l[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Qh({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", v = c[f];
  let g = [], h, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [p, C, w, k] = bc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * s[f] === -1) {
    h = o.x ?? p, x = o.y ?? C;
    const V = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], S = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[f] === v ? g = f === "x" ? V : S : g = f === "x" ? S : V;
  } else {
    const V = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = a.x === v ? S : V : g = a.y === v ? V : S, t === r) {
      const L = Math.abs(e[f] - n[f]);
      if (L <= i) {
        const B = Math.min(i - 1, i - L);
        a[f] === v ? b[f] = (l[f] > e[f] ? -1 : 1) * B : $[f] = (u[f] > n[f] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const L = f === "x" ? "y" : "x", B = a[f] === s[L], M = l[L] > u[L], _ = l[L] < u[L];
      (a[f] === 1 && (!B && M || B && _) || a[f] !== 1 && (!B && _ || B && M)) && (g = f === "x" ? V : S);
    }
    const O = { x: l.x + b.x, y: l.y + b.y }, T = { x: u.x + $.x, y: u.y + $.y }, z = Math.max(Math.abs(O.x - g[0].x), Math.abs(T.x - g[0].x)), q = Math.max(Math.abs(O.y - g[0].y), Math.abs(T.y - g[0].y));
    z >= q ? (h = (O.x + T.x) / 2, x = g[0].y) : (h = g[0].x, x = (O.y + T.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], h, x, w, k];
}
function t0(e, t, n, r) {
  const o = Math.min(kl(e, t) / 2, kl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function ki({ sourceX: e, sourceY: t, sourcePosition: n = Te.Bottom, targetX: r, targetY: o, targetPosition: i = Te.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, f, v, g, h] = e0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let p = "";
    return $ > 0 && $ < c.length - 1 ? p = t0(c[$ - 1], b, c[$ + 1], a) : p = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += p, x;
  }, ""), f, v, g, h];
}
function Sl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function n0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Sl(n) || !Sl(r))
    return null;
  const o = n.internals.handleBounds || El(n.handles), i = r.internals.handleBounds || El(r.handles), a = Ml((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Ml(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === fr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Ar.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Te.Bottom, u = (s == null ? void 0 : s.position) || Te.Top, c = _o(n, a, l), f = _o(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function El(e) {
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
function _o(e, t, n = Te.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Te.Top:
      return { x: o + a / 2, y: i };
    case Te.Right:
      return { x: o + a, y: i + s / 2 };
    case Te.Bottom:
      return { x: o + a / 2, y: i + s };
    case Te.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Ml(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function qa(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function r0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = qa(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function o0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case Te.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Te.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Te.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const bs = {
  nodeOrigin: [0, 0],
  nodeExtent: bi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, i0 = {
  ...bs,
  checkEquality: !0
};
function xs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function a0(e, t, n) {
  const r = xs(bs, n);
  for (const o of e.values())
    if (o.parentId)
      $s(o, e, t, r);
    else {
      const i = No(o, r.nodeOrigin), a = Br(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function xc(e, t, n, r) {
  var o, i;
  const a = xs(i0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = l.get(c.id);
    if (a.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const v = No(c, a.nodeOrigin), g = Br(c.extent) ? c.extent : a.nodeExtent, h = vr(v, g, tr(c));
      f = {
        ...a.defaults,
        ...c,
        measured: {
          width: (o = c.measured) == null ? void 0 : o.width,
          height: (i = c.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? f == null ? void 0 : f.internals.handleBounds : void 0,
          z: $c(c, u),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (s = !1), c.parentId && $s(f, t, n, r);
  }
  return s;
}
function s0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function $s(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = xs(bs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  s0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: v } = l0(e, l, i, a, u), { positionAbsolute: g } = e.internals, h = c !== g.x || f !== g.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: f } : g,
      z: v
    }
  });
}
function $c(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function l0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = No(e, n), u = Br(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = vc(c, s, t));
  const f = $c(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > f ? v : f
  };
}
function u0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? qr(l), c = pc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const f = l.internals.positionAbsolute, v = tr(l), g = l.origin ?? r, h = s.x < f.x ? Math.round(Math.abs(f.x - s.x)) : 0, x = s.y < f.y ? Math.round(Math.abs(f.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), p = (b - v.width) * g[0], C = ($ - v.height) * g[1];
    (h > 0 || x > 0 || p || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + p,
        y: l.position.y - x + C
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + h,
          y: w.position.y + x
        }
      });
    })), (v.width < s.width || v.height < s.height || h || x) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (h ? g[0] * h - p : 0),
        height: $ + (x ? g[1] * x - C : 0)
      }
    });
  }), i;
}
function c0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), f = [];
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
    const h = mc(v.nodeElement), x = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (x || !g.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = Br(g.extent) ? g.extent : i;
      let { positionAbsolute: p } = g.internals;
      g.parentId && g.extent === "parent" ? p = vc(p, h, t.get(g.parentId)) : $ && (p = vr(p, $, h));
      const C = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: p,
          handleBounds: {
            source: $l("source", v.nodeElement, b, c, g.id),
            target: $l("target", v.nodeElement, b, c, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && $s(C, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: qr(C, o)
      }));
    }
  }
  if (f.length > 0) {
    const v = u0(f, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function d0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Vl(e, t, n, r, o, i) {
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
function Cc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Vl("source", l, c, e, o, a), Vl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function f0(e, t) {
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
function _c(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : _c(n, t) : !1;
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
function v0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !_c(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function va({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, a;
  const s = [];
  for (const [u, c] of t) {
    const f = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    f && s.push({
      ...f,
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
function g0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, v = null, g = !1;
  function h({ noDragClassName: b, handleSelector: $, domNode: p, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = Qt(p);
    function V({ x: z, y: q }, L) {
      const { nodeLookup: B, nodeExtent: M, snapGrid: _, snapToGrid: E, nodeOrigin: N, onNodeDrag: H, onSelectionDrag: P, onError: A, updateNodePositions: Y } = t();
      i = { x: z, y: q };
      let W = !1, ee = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const G = Oo(s);
        ee = Aa(G);
      }
      for (const [G, X] of s) {
        if (!B.has(G))
          continue;
        let ye = { x: z - X.distance.x, y: q - X.distance.y };
        E && (ye = ys(ye, _));
        let oe = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !X.extent) {
          const { positionAbsolute: Ee } = X.internals, we = Ee.x - ee.x + M[0][0], He = Ee.x + X.measured.width - ee.x2 + M[1][0], ce = Ee.y - ee.y + M[0][1], Q = Ee.y + X.measured.height - ee.y2 + M[1][1];
          oe = [
            [we, ce],
            [He, Q]
          ];
        }
        const { position: pe, positionAbsolute: le } = Ah({
          nodeId: G,
          nextPosition: ye,
          nodeLookup: B,
          nodeExtent: oe,
          nodeOrigin: N,
          onError: A
        });
        W = W || X.position.x !== pe.x || X.position.y !== pe.y, X.position = pe, X.internals.positionAbsolute = le;
      }
      if (W && (Y(s, !0), L && (r || H || !w && P))) {
        const [G, X] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(L, s, G, X), H == null || H(L, G, X), w || P == null || P(L, X);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: z, panBy: q, autoPanSpeed: L, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [M, _] = gc(u, c, L);
      (M !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - M / z[2], i.y = (i.y ?? 0) - _ / z[2], await q({ x: M, y: _ }) && V(i, null)), a = requestAnimationFrame(S);
    }
    function O(z) {
      var q;
      const { nodeLookup: L, multiSelectionActive: B, nodesDraggable: M, transform: _, snapGrid: E, snapToGrid: N, selectNodesOnDrag: H, onNodeDragStart: P, onSelectionDragStart: A, unselectNodesAndEdges: Y } = t();
      f = !0, (!H || !C) && !B && w && ((q = L.get(w)) != null && q.selected || Y()), C && H && w && (e == null || e(w));
      const W = fa(z.sourceEvent, { transform: _, snapGrid: E, snapToGrid: N, containerBounds: c });
      if (i = W, s = v0(L, M, W, w), s.size > 0 && (n || P || !w && A)) {
        const [ee, G] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(z.sourceEvent, s, ee, G), P == null || P(z.sourceEvent, ee, G), w || A == null || A(z.sourceEvent, G);
      }
    }
    const T = Bg().clickDistance(k).on("start", (z) => {
      const { domNode: q, nodeDragThreshold: L, transform: B, snapGrid: M, snapToGrid: _ } = t();
      c = (q == null ? void 0 : q.getBoundingClientRect()) || null, g = !1, L === 0 && O(z), i = fa(z.sourceEvent, { transform: B, snapGrid: M, snapToGrid: _, containerBounds: c }), u = Ln(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: q, transform: L, snapGrid: B, snapToGrid: M, nodeDragThreshold: _, nodeLookup: E } = t(), N = fa(z.sourceEvent, { transform: L, snapGrid: B, snapToGrid: M, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !E.has(w)) && (g = !0), !g) {
        if (!l && q && f && (l = !0, S()), !f) {
          const H = N.xSnapped - (i.x ?? 0), P = N.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + P * P) > _ && O(z);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && f && (u = Ln(z.sourceEvent, c), V(N, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: L, onNodeDragStop: B, onSelectionDragStop: M } = t();
        if (L(s, !1), o || B || !w && M) {
          const [_, E] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, _, E), B == null || B(z.sourceEvent, _, E), w || M == null || M(z.sourceEvent, E);
        }
      }
    }).filter((z) => {
      const q = z.target;
      return !z.button && (!b || !Pl(q, `.${b}`, p)) && (!$ || Pl(q, $, p));
    });
    v.call(T);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
    destroy: x
  };
}
function p0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Co(o, qr(i)) > 0 && r.push(i);
  return r;
}
const h0 = 250;
function m0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = p0(e, n, t + h0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y: g } = _o(u, f, f.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
      h > t || (h < s ? (a = [{ ...f, x: v, y: g }], s = h) : h === s && a.push({ ...f, x: v, y: g }));
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
function kc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], f = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return f && i ? { ...f, ..._o(u, f, f.position, !0) } : f;
}
function Sc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function y0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ec = () => !0;
function w0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: v, cancelConnection: g, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Ec, onReconnectEnd: p, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: V }) {
  const S = Yh(e.target);
  let O = 0, T;
  const { x: z, y: q } = Ln(e), L = S == null ? void 0 : S.elementFromPoint(z, q), B = Sc(i, L), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !B)
    return;
  const _ = kc(o, B, r, l, t);
  if (!_)
    return;
  let E = Ln(e, M), N = !1, H = null, P = !1, A = null;
  function Y() {
    if (!c || !M)
      return;
    const [pe, le] = gc(E, M, V);
    v({ x: pe, y: le }), O = requestAnimationFrame(Y);
  }
  const W = {
    ..._,
    nodeId: o,
    type: B,
    position: _.position
  }, ee = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: _o(ee, W, Te.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: ee,
    to: E,
    toHandle: null,
    toPosition: yl[W.position],
    toNode: null
  };
  C(G);
  let X = G;
  h == null || h(e, { nodeId: o, handleId: r, handleType: B });
  function ye(pe) {
    if (!k() || !W) {
      oe(pe);
      return;
    }
    const le = w();
    E = Ln(pe, M), T = m0(To(E, le, !1, [1, 1]), n, l, W), N || (Y(), N = !0);
    const Ee = Mc(pe, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: S,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    A = Ee.handleDomNode, H = Ee.connection, P = y0(!!T, Ee.isValid);
    const we = {
      // from stays the same
      ...X,
      isValid: P,
      to: T && P ? Ci({ x: T.x, y: T.y }, le) : E,
      toHandle: Ee.toHandle,
      toPosition: P && Ee.toHandle ? Ee.toHandle.position : yl[W.position],
      toNode: Ee.toHandle ? l.get(Ee.toHandle.nodeId) : null
    };
    P && T && X.toHandle && we.toHandle && X.toHandle.type === we.toHandle.type && X.toHandle.nodeId === we.toHandle.nodeId && X.toHandle.id === we.toHandle.id && X.to.x === we.to.x && X.to.y === we.to.y || (C(we), X = we);
  }
  function oe(pe) {
    (T || A) && H && P && (x == null || x(H));
    const { inProgress: le, ...Ee } = X, we = {
      ...Ee,
      toPosition: X.toHandle ? X.toPosition : null
    };
    b == null || b(pe, we), i && (p == null || p(pe, we)), g(), cancelAnimationFrame(O), N = !1, P = !1, H = null, A = null, S.removeEventListener("mousemove", ye), S.removeEventListener("mouseup", oe), S.removeEventListener("touchmove", ye), S.removeEventListener("touchend", oe);
  }
  S.addEventListener("mousemove", ye), S.addEventListener("mouseup", oe), S.addEventListener("touchmove", ye), S.addEventListener("touchend", oe);
}
function Mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Ec, nodeLookup: c }) {
  const f = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: h } = Ln(e), x = a.elementFromPoint(g, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const p = Sc(void 0, b), C = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), V = b.classList.contains("connectableend");
    if (!C || !p)
      return $;
    const S = {
      source: f ? C : r,
      sourceHandle: f ? w : o,
      target: f ? r : C,
      targetHandle: f ? o : w
    };
    $.connection = S;
    const O = k && V && (n === fr.Strict ? f && p === "source" || !f && p === "target" : C !== r || w !== o);
    $.isValid = O && u(S), $.toHandle = kc(C, p, w, c, n, !1);
  }
  return $;
}
const b0 = {
  onPointerDown: w0,
  isValid: Mc
};
function x0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Qt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const h = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, V = w[2] * Math.pow(2, k);
      t.scaleTo(V);
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
      ], V = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), O = {
        x: w[0] - V[0] * S,
        y: w[1] - V[1] * S
      }, T = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: w[2]
      }, T, s);
    }, p = cc().on("start", b).on("zoom", f ? $ : null).on("zoom.wheel", v ? h : null);
    o.call(p, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: sn
  };
}
const $0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ui = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ga = ({ x: e, y: t, zoom: n }) => ji.translate(e, t).scale(n), _r = (e, t) => e.target.closest(`.${t}`), Vc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), pa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Pc = (e) => {
  const t = e.ctrlKey && _i() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function C0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (_r(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = sn(c), $ = Pc(c), p = f * Math.pow(2, $);
      r.scaleTo(n, p, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === Xn.Vertical ? 0 : c.deltaX * v, h = o === Xn.Horizontal ? 0 : c.deltaY * v;
    !_i() && c.shiftKey && o !== Xn.Vertical && (g = c.deltaY * v, h = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(h / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Ui(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function _0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = _r(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function k0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ui(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function S0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Vc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ui(i.transform)));
  };
}
function E0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Vc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && $0(e.prevViewport, a.transform))) {
      const l = Ui(a.transform);
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
function M0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var f;
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (_r(c, `${u}-flow__node`) || _r(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || _r(c, s) && c.type === "wheel" || _r(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((f = c.touches) == null ? void 0 : f.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function V0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), v = cc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Qt(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Ir(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const h = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  v.wheelDelta(Pc);
  function b(L, B) {
    return g ? new Promise((M) => {
      v == null || v.transform(pa(g, B == null ? void 0 : B.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: L, noPanClassName: B, onPaneContextMenu: M, userSelectionActive: _, panOnScroll: E, panOnDrag: N, panOnScrollMode: H, panOnScrollSpeed: P, preventScrolling: A, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: ee, zoomActivationKeyPressed: G, lib: X, onTransformChange: ye }) {
    _ && !c.isZoomingOrPanning && p();
    const oe = E && !G && !_ ? C0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: H,
      panOnScrollSpeed: P,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : _0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", oe, { passive: !1 }), !_) {
      const le = k0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", le);
      const Ee = S0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!M,
        onPanZoom: a,
        onTransformChange: ye
      });
      v.on("zoom", Ee);
      const we = E0({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: E,
        onPaneContextMenu: M,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", we);
    }
    const pe = M0({
      zoomActivationKeyPressed: G,
      panOnDrag: N,
      zoomOnScroll: W,
      panOnScroll: E,
      zoomOnDoubleClick: ee,
      zoomOnPinch: Y,
      userSelectionActive: _,
      noPanClassName: B,
      noWheelClassName: L,
      lib: X
    });
    v.filter(pe), ee ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function p() {
    v.on("zoom", null);
  }
  async function C(L, B, M) {
    const _ = ga(L), E = v == null ? void 0 : v.constrain()(_, B, M);
    return E && await b(E), new Promise((N) => N(E));
  }
  async function w(L, B) {
    const M = ga(L);
    return await b(M, B), new Promise((_) => _(M));
  }
  function k(L) {
    if (g) {
      const B = ga(L), M = g.property("__zoom");
      (M.k !== L.zoom || M.x !== L.x || M.y !== L.y) && (v == null || v.transform(g, B, null, { sync: !0 }));
    }
  }
  function V() {
    const L = g ? uc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, B) {
    return g ? new Promise((M) => {
      v == null || v.scaleTo(pa(g, B == null ? void 0 : B.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function O(L, B) {
    return g ? new Promise((M) => {
      v == null || v.scaleBy(pa(g, B == null ? void 0 : B.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function T(L) {
    v == null || v.scaleExtent(L);
  }
  function z(L) {
    v == null || v.translateExtent(L);
  }
  function q(L) {
    const B = !Hn(L) || L < 0 ? 0 : L;
    v == null || v.clickDistance(B);
  }
  return {
    update: $,
    destroy: p,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: V,
    scaleTo: S,
    scaleBy: O,
    setScaleExtent: T,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: q
  };
}
var Hl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Hl || (Hl = {}));
var P0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(ee, "$connectable", n), i = () => ne(pe, "$connectionRadius", n), a = () => ne(ye, "$domNode", n), s = () => ne(oe, "$nodeLookup", n), l = () => ne(X, "$connectionMode", n), u = () => ne(we, "$lib", n), c = () => ne($e, "$autoPanOnConnect", n), f = () => ne(Ce, "$flowId", n), v = () => ne(Ee, "$isValidConnectionStore", n), g = () => ne(ce, "$onedgecreate", n), h = () => ne(se, "$onConnectAction", n), x = () => ne(de, "$onConnectStartAction", n), b = () => ne(fe, "$onConnectEndAction", n), $ = () => ne(le, "$viewport", n), p = () => ne(nt, "$connection", n), C = () => ne(Ne, "$edges", n), w = () => ne(Le, "$connectionLookup", n), k = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie(), T = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie(), q = /* @__PURE__ */ ie(), L = /* @__PURE__ */ ie();
  let B = y(t, "id", 12, void 0), M = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => Te.Top), E = y(t, "style", 12, void 0), N = y(t, "isValidConnection", 12, void 0), H = y(t, "onconnect", 12, void 0), P = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), Y = y(t, "class", 12, void 0);
  const W = ur("svelteflow__node_id"), ee = ur("svelteflow__node_connectable"), G = Xe(), {
    connectionMode: X,
    domNode: ye,
    nodeLookup: oe,
    connectionRadius: pe,
    viewport: le,
    isValidConnection: Ee,
    lib: we,
    addEdge: He,
    onedgecreate: ce,
    panBy: Q,
    cancelConnection: Ve,
    updateConnection: j,
    autoPanOnConnect: $e,
    edges: Ne,
    connectionLookup: Le,
    onconnect: se,
    onconnectstart: de,
    onconnectend: fe,
    flowId: Ce,
    connection: nt
  } = G;
  function at(Ae) {
    const et = yc(Ae);
    (et && Ae.button === 0 || !et) && b0.onPointerDown(Ae, {
      handleId: d(S),
      nodeId: W,
      isTarget: d(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: N() ?? v(),
      updateConnection: j,
      cancelConnection: Ve,
      panBy: Q,
      onConnect: (Ie) => {
        var qe;
        const je = g() ? g()(Ie) : Ie;
        je && (He(je), (qe = h()) == null || qe(Ie));
      },
      onConnectStart: (Ie, qe) => {
        var je;
        (je = x()) == null || je(Ie, {
          nodeId: qe.nodeId,
          handleId: qe.handleId,
          handleType: qe.handleType
        });
      },
      onConnectEnd: (Ie, qe) => {
        var je;
        (je = b()) == null || je(Ie, qe);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let U = /* @__PURE__ */ ie(null), ze = /* @__PURE__ */ ie();
  he(() => te(M()), () => {
    J(k, M() === "target");
  }), he(
    () => (te(A()), o()),
    () => {
      J(V, A() !== void 0 ? A() : o());
    }
  ), he(() => te(B()), () => {
    J(S, B() || null);
  }), he(
    () => (te(H()), te(P()), C(), w(), te(M()), te(B())),
    () => {
      (H() || P()) && (C(), J(ze, w().get(`${W}-${M()}${B() ? `-${B()}` : ""}`)));
    }
  ), he(
    () => (d(U), d(ze), te(P()), te(H())),
    () => {
      if (d(U) && !Hh(d(ze), d(U))) {
        const Ae = d(ze) ?? /* @__PURE__ */ new Map();
        wl(d(U), Ae, P()), wl(Ae, d(U), H());
      }
      J(U, d(ze) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => p(), () => {
    J(O, !!p().fromHandle);
  }), he(
    () => (p(), te(M()), d(S)),
    () => {
      var Ae, et, Ie;
      J(T, ((Ae = p().fromHandle) == null ? void 0 : Ae.nodeId) === W && ((et = p().fromHandle) == null ? void 0 : et.type) === M() && ((Ie = p().fromHandle) == null ? void 0 : Ie.id) === d(S));
    }
  ), he(
    () => (p(), te(M()), d(S)),
    () => {
      var Ae, et, Ie;
      J(z, ((Ae = p().toHandle) == null ? void 0 : Ae.nodeId) === W && ((et = p().toHandle) == null ? void 0 : et.type) === M() && ((Ie = p().toHandle) == null ? void 0 : Ie.id) === d(S));
    }
  ), he(
    () => (l(), p(), te(M()), d(S)),
    () => {
      var Ae, et, Ie;
      J(q, l() === fr.Strict ? ((Ae = p().fromHandle) == null ? void 0 : Ae.type) !== M() : W !== ((et = p().fromHandle) == null ? void 0 : et.nodeId) || d(S) !== ((Ie = p().fromHandle) == null ? void 0 : Ie.id));
    }
  ), he(() => (d(z), p()), () => {
    J(L, d(z) && p().isValid);
  }), wt(), Ze();
  var ae = P0();
  _e(ae, "data-nodeid", W);
  let _t;
  var kt = R(ae);
  $t(kt, t, "default", {}), Z(ae), ke(
    (Ae, et) => {
      _e(ae, "data-handleid", d(S)), _e(ae, "data-handlepos", _()), _e(ae, "data-id", `${f() ?? ""}-${W ?? ""}-${(B() || "") ?? ""}-${M() ?? ""}`), _t = Ct(ae, 1, Ae, null, _t, et), vt(ae, E());
    },
    [
      () => gn(Nt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        Y()
      ])),
      () => ({
        valid: d(L),
        connectingto: d(z),
        connectingfrom: d(T),
        source: !d(k),
        target: d(k),
        connectablestart: d(V),
        connectableend: d(V),
        connectable: d(V),
        connectionindicator: d(V) && (!d(O) || d(q))
      })
    ],
    xe
  ), rt("mousedown", ae, at), rt("touchstart", ae, at), D(e, ae);
  var Ot = ge({
    get id() {
      return B();
    },
    set id(Ae) {
      B(Ae), m();
    },
    get type() {
      return M();
    },
    set type(Ae) {
      M(Ae), m();
    },
    get position() {
      return _();
    },
    set position(Ae) {
      _(Ae), m();
    },
    get style() {
      return E();
    },
    set style(Ae) {
      E(Ae), m();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Ae) {
      N(Ae), m();
    },
    get onconnect() {
      return H();
    },
    set onconnect(Ae) {
      H(Ae), m();
    },
    get ondisconnect() {
      return P();
    },
    set ondisconnect(Ae) {
      P(Ae), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(Ae) {
      A(Ae), m();
    },
    get class() {
      return Y();
    },
    set class(Ae) {
      Y(Ae), m();
    }
  });
  return r(), Ot;
}
ue(
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
var H0 = /* @__PURE__ */ re("<!> <!>", 1);
function Si(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ze();
  var a = H0(), s = be(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Te.Top);
  Un(s, {
    type: "target",
    get position() {
      return d(l);
    }
  });
  var u = I(s), c = I(u);
  const f = /* @__PURE__ */ xe(() => i() ?? Te.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return d(f);
    }
  }), ke(() => {
    var v;
    return ct(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), D(e, a), ge({
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
ue(
  Si,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var N0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ze(), Oe();
  var i = N0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Te.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return d(l);
    }
  }), ke(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ge({
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
ue(Hc, { data: {}, sourcePosition: {} }, [], [], !0);
var O0 = /* @__PURE__ */ re(" <!>", 1);
function Nc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ze(), Oe();
  var i = O0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Te.Top);
  return Un(s, {
    type: "target",
    get position() {
      return d(l);
    }
  }), ke(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ge({
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
ue(Nc, { data: {}, targetPosition: {} }, [], [], !0);
function Oc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, []);
}
ue(Oc, {}, [], [], !0);
function Nl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ei(e, { target: t, domNode: n }) {
  return Nl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Nl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var T0 = /* @__PURE__ */ re("<div><!></div>");
function Tc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(i, "$domNode", n), { domNode: i } = Xe();
  Ze();
  var a = T0(), s = R(a);
  $t(s, t, "default", {}), Z(a), xt(a, (l, u) => Ei == null ? void 0 : Ei(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), ge(), r();
}
ue(Tc, {}, ["default"], [], !0);
function Lc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Xe();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", Ar.error012(s));
      return;
    }
    (l.selectable || F(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var L0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Dc(e, t) {
  ve(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = Lc(), a = ur("svelteflow__edge_id");
  return Ze(), Tc(e, {
    children: (s, l) => {
      var u = L0();
      let c;
      var f = R(u);
      $t(f, t, "default", {}), Z(u), ke(() => c = vt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), rt("keyup", u, () => {
      }), rt("click", u, () => {
        a && i(a);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), ge({
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
ue(Dc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var D0 = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__edge-interaction"></path>'), z0 = /* @__PURE__ */ Me('<path fill="none"></path><!><!>', 1);
function Lo(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), f = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  Ze();
  var h = z0(), x = be(h), b = I(x);
  {
    var $ = (w) => {
      var k = D0();
      _e(k, "stroke-opacity", 0), _e(k, "stroke-width", g), ke(() => _e(k, "d", r())), D(w, k);
    };
    me(b, (w) => {
      g && w($);
    });
  }
  var p = I(b);
  {
    var C = (w) => {
      Dc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, V) => {
          Oe();
          var S = Be();
          ke(() => ct(S, o())), D(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    me(p, (w) => {
      o() && w(C);
    });
  }
  return ke(
    (w) => {
      _e(x, "id", n()), _e(x, "d", r()), Ct(x, 0, w), _e(x, "marker-start", l()), _e(x, "marker-end", u()), vt(x, c());
    },
    [
      () => gn(Nt(["svelte-flow__edge-path", v()]))
    ],
    xe
  ), D(e, h), ge({
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
      return f();
    },
    set interactionWidth(w) {
      f(w), m();
    },
    get class() {
      return v();
    },
    set class(w) {
      v(w), m();
    }
  });
}
ue(
  Lo,
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
function Mi(e, t) {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), f = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (d(r), d(o), d(i), te(v()), te(g()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((p) => (J(r, p[0]), J(o, p[1]), J(i, p[2])))(wc({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), wt(), Ze(), Lo(e, {
    get path() {
      return d(r);
    },
    get labelX() {
      return d(o);
    },
    get labelY() {
      return d(i);
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
      return f();
    },
    get style() {
      return l();
    }
  }), ge({
    get label() {
      return a();
    },
    set label(p) {
      a(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(p) {
      v(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return b();
    },
    set targetY(p) {
      b(p), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), m();
    }
  });
}
ue(
  Mi,
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), f = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (d(r), d(o), d(i), te(v()), te(g()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((p) => (J(r, p[0]), J(o, p[1]), J(i, p[2])))(ki({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), wt(), Ze(), Lo(e, {
    get path() {
      return d(r);
    },
    get labelX() {
      return d(o);
    },
    get labelY() {
      return d(i);
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
      return f();
    },
    get style() {
      return l();
    }
  }), ge({
    get label() {
      return a();
    },
    set label(p) {
      a(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(p) {
      v(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return b();
    },
    set targetY(p) {
      b(p), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), m();
    }
  });
}
ue(
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
function Ac(e, t) {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), f = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return he(
    () => (d(r), d(o), d(i), te(v()), te(g()), te(h()), te(x())),
    () => {
      ((b) => (J(r, b[0]), J(o, b[1]), J(i, b[2])))(Ia({
        sourceX: v(),
        sourceY: g(),
        targetX: h(),
        targetY: x()
      }));
    }
  ), wt(), Ze(), Lo(e, {
    get path() {
      return d(r);
    },
    get labelX() {
      return d(o);
    },
    get labelY() {
      return d(i);
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
      return f();
    },
    get style() {
      return l();
    }
  }), ge({
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
      return f();
    },
    set interactionWidth(b) {
      f(b), m();
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
      return h();
    },
    set targetX(b) {
      h(b), m();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), m();
    }
  });
}
ue(
  Ac,
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
function Ic(e, t) {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), f = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (d(r), d(o), d(i), te(v()), te(g()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((p) => (J(r, p[0]), J(o, p[1]), J(i, p[2])))(ki({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), wt(), Ze(), Lo(e, {
    get path() {
      return d(r);
    },
    get labelX() {
      return d(o);
    },
    get labelY() {
      return d(i);
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
      return f();
    },
    get style() {
      return l();
    }
  }), ge({
    get label() {
      return a();
    },
    set label(p) {
      a(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(p) {
      v(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return b();
    },
    set targetY(p) {
      b(p), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), m();
    }
  });
}
ue(
  Ic,
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
function A0(e, t) {
  const n = e.set, r = t.set, o = F(e), i = F(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function I0(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const q0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, B0 = (e, t, n, r = [0, 0], o = bi, i, a, s, l, u, c, f, v) => {
  const { subscribe: g, set: h, update: x } = Se([]);
  let b = e, $ = {}, p = !0;
  const C = (S) => {
    const O = xc(S, t, n, {
      elevateNodesOnSelect: p,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return F(i) && O && F(l) && (zh({
      nodes: t,
      width: F(u),
      height: F(c),
      panZoom: F(l),
      minZoom: F(f),
      maxZoom: F(v)
    }, F(a)).then((T) => {
      var z;
      (z = F(s)) == null || z.resolve(T), s.set(null);
    }), i.set(!1), a.set(void 0)), b = S, h(b), b;
  }, w = (S) => C(S(b)), k = (S) => {
    $ = S;
  }, V = (S) => {
    p = S.elevateNodesOnSelect ?? p;
  };
  return C(b), {
    subscribe: g,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: V
  };
}, Z0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Se([]);
  let s = e, l = {};
  const u = (v) => {
    const g = l ? v.map((h) => ({ ...l, ...h })) : v;
    Cc(t, n, g), s = g, i(s);
  }, c = (v) => u(v(s)), f = (v) => {
    l = v;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, qc = {
  input: Hc,
  output: Nc,
  default: Si,
  group: Oc
}, Bc = {
  straight: Ac,
  smoothstep: zc,
  default: Mi,
  step: Ic
}, R0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], v = a ?? bi;
  xc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Cc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const V = Oo(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    g = ws(V, n, r, 0.5, 2, 0.1);
  }
  const h = Se(!1), x = Se(void 0), b = Se(null), $ = Se(null), p = Se(500), C = Se(500), w = Se(0.5), k = Se(2);
  return {
    flowId: Se(null),
    nodes: B0(e, s, l, f, v, h, x, b, $, p, C, w, k),
    nodeLookup: Ut(s),
    parentLookup: Ut(l),
    edgeLookup: Ut(c),
    visibleNodes: Ut([]),
    edges: Z0(t, u, c),
    visibleEdges: Ut([]),
    connectionLookup: Ut(u),
    width: p,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: Se(f),
    nodeDragThreshold: Se(1),
    nodeExtent: Se(v),
    translateExtent: Se(bi),
    autoPanOnNodeDrag: Se(!0),
    autoPanOnConnect: Se(!0),
    fitViewQueued: h,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Se(null),
    dragging: Se(!1),
    selectionRect: Se(null),
    selectionKeyPressed: Se(!1),
    multiselectionKeyPressed: Se(!1),
    deleteKeyPressed: Se(!1),
    panActivationKeyPressed: Se(!1),
    zoomActivationKeyPressed: Se(!1),
    selectionRectMode: Se(null),
    selectionMode: Se(xi.Partial),
    nodeTypes: Se(qc),
    edgeTypes: Se(Bc),
    viewport: Se(g),
    connectionMode: Se(fr.Strict),
    domNode: Se(null),
    connection: Ut(Da),
    connectionLineType: Se(Mr.Bezier),
    connectionRadius: Se(20),
    isValidConnection: Se(() => !0),
    nodesDraggable: Se(!0),
    nodesConnectable: Se(!0),
    elementsSelectable: Se(!0),
    selectNodesOnDrag: Se(!0),
    markers: Ut([]),
    defaultMarkerColor: Se("#b1b1b7"),
    lib: Ut("svelte"),
    onlyRenderVisibleElements: Se(!1),
    onerror: Se(Ih),
    ondelete: Se(void 0),
    onedgecreate: Se(void 0),
    onconnect: Se(void 0),
    onconnectstart: Se(void 0),
    onconnectend: Se(void 0),
    onbeforedelete: Se(void 0),
    nodesInitialized: Se(!1),
    edgesInitialized: Se(!1),
    viewportInitialized: Se(!1),
    initialized: Ut(!1)
  };
};
function Y0(e) {
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
    return u && c && Fh({
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
    const c = n0({
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
      zIndex: jh({
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
function K0(e) {
  return Wn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? dc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const Ji = Symbol();
function Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = R0({
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
      ...qc,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...Bc,
      ..._
    });
  }
  function c(_) {
    const E = F(s.edges);
    s.edges.set(Jh(_, E));
  }
  const f = (_, E = !1) => {
    var N;
    const H = F(s.nodeLookup);
    for (const [P, A] of _) {
      const Y = (N = H.get(P)) == null ? void 0 : N.internals.userNode;
      Y && (Y.position = A.position, Y.dragging = E);
    }
    s.nodes.update((P) => P);
  };
  function v(_) {
    var E, N, H;
    const P = F(s.nodeLookup), A = F(s.parentLookup), { changes: Y, updatedInternals: W } = c0(_, P, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (W) {
      a0(P, A, { nodeOrigin: i, nodeExtent: a });
      for (const ee of Y) {
        const G = (E = P.get(ee.id)) == null ? void 0 : E.internals.userNode;
        if (G)
          switch (ee.type) {
            case "dimensions": {
              const X = { ...G.measured, ...ee.dimensions };
              ee.setAttributes && (G.width = ((N = ee.dimensions) == null ? void 0 : N.width) ?? G.width, G.height = ((H = ee.dimensions) == null ? void 0 : H.height) ?? G.height), G.measured = X;
              break;
            }
            case "position":
              G.position = ee.position ?? G.position;
              break;
          }
      }
      s.nodes.update((ee) => ee), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const E = F(s.fitViewResolver) ?? Rh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(E), s.nodes.set(F(s.nodes)), E.promise;
  }
  function h(_, E) {
    const N = F(s.panZoom);
    return N ? N.scaleBy(_, E) : Promise.resolve(!1);
  }
  function x(_) {
    return h(1.2, _);
  }
  function b(_) {
    return h(1 / 1.2, _);
  }
  function $(_) {
    const E = F(s.panZoom);
    E && (E.setScaleExtent([_, F(s.maxZoom)]), s.minZoom.set(_));
  }
  function p(_) {
    const E = F(s.panZoom);
    E && (E.setScaleExtent([F(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const E = F(s.panZoom);
    E && (E.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function w(_) {
    let E = !1;
    return _.forEach((N) => {
      N.selected && (N.selected = !1, E = !0);
    }), E;
  }
  function k(_) {
    var E;
    (E = F(s.panZoom)) == null || E.setClickDistance(_);
  }
  function V(_) {
    w((_ == null ? void 0 : _.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), w((_ == null ? void 0 : _.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const N = F(s.nodes), H = F(s.edges), P = N.filter((ee) => ee.selected), A = H.filter((ee) => ee.selected), { nodes: Y, edges: W } = await fc({
        nodesToRemove: P,
        edgesToRemove: A,
        nodes: N,
        edges: H,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (Y.length || W.length) && (s.nodes.update((ee) => ee.filter((G) => !Y.some((X) => X.id === G.id))), s.edges.update((ee) => ee.filter((G) => !W.some((X) => X.id === G.id))), (E = F(s.ondelete)) == null || E({
        nodes: Y,
        edges: W
      }));
    }
  });
  function S(_) {
    const E = F(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((H) => {
      const P = _.includes(H.id), A = E && H.selected || P;
      return H.selected = A, H;
    })), E || s.edges.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function O(_) {
    const E = F(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((H) => {
      const P = _.includes(H.id), A = E && H.selected || P;
      return H.selected = A, H;
    })), E || s.nodes.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function T(_) {
    var E;
    const N = (E = F(s.nodes)) == null ? void 0 : E.find((H) => H.id === _);
    if (!N) {
      console.warn("012", Ar.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && F(s.multiselectionKeyPressed) && V({ nodes: [N], edges: [] }) : S([_]);
  }
  function z(_) {
    const E = F(s.viewport);
    return d0({
      delta: _,
      panZoom: F(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const q = Se(Da), L = (_) => {
    q.set({ ..._ });
  };
  function B() {
    q.set(Da);
  }
  function M() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), B();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: Y0(s),
    visibleNodes: K0(s),
    connection: Wn([q, s.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: To(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([_, E, N]) => r0(_, { defaultColor: E, id: N })),
    initialized: (() => {
      let _ = !1;
      const E = F(s.nodes).length, N = F(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, P, A]) => _ || (E === 0 ? _ = A : N === 0 ? _ = A && H : _ = A && H && P, _));
    })(),
    // actions
    syncNodeStores: (_) => A0(s.nodes, _),
    syncEdgeStores: (_) => I0(s.edges, _),
    syncViewport: (_) => q0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: b,
    fitView: (_) => g(_),
    setMinZoom: $,
    setMaxZoom: p,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: V,
    addSelectedNodes: S,
    addSelectedEdges: O,
    handleNodeSelection: T,
    panBy: z,
    updateConnection: L,
    cancelConnection: B,
    reset: M
  };
}
function Xe() {
  const e = ur(Ji);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function W0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Tr(Ji, {
    getStore: () => s
  }), s;
}
function Ol(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = V0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), f = c.getViewport();
  return a.set(f), n.set(c), c.update(t), {
    update(v) {
      c.update(v);
    }
  };
}
var X0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const j0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Rc(e, t) {
  ve(t, !1), Je(e, j0);
  const [n, r] = ot(), o = () => ne(H, "$panActivationKeyPressed", n), i = () => ne(B, "$minZoom", n), a = () => ne(M, "$maxZoom", n), s = () => ne(P, "$zoomActivationKeyPressed", n), l = () => ne(L, "$selectionRect", n), u = () => ne(E, "$translateExtent", n), c = () => ne(N, "$lib", n), f = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie();
  let h = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), p = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), V = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), O = y(t, "panOnScroll", 12), T = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: q,
    selectionRect: L,
    minZoom: B,
    maxZoom: M,
    dragging: _,
    translateExtent: E,
    lib: N,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: P,
    viewportInitialized: A
  } = Xe(), Y = (X) => z.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  on(() => {
    vi(A, !0);
  }), he(() => te(h()), () => {
    J(f, h() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), te(S())),
    () => {
      J(v, o() || S());
    }
  ), he(
    () => (o(), te(O())),
    () => {
      J(g, o() || O());
    }
  ), wt(), Ze();
  var W = X0(), ee = R(W);
  $t(ee, t, "default", {}), Z(W), xt(W, (X, ye) => Ol == null ? void 0 : Ol(X, ye), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: d(f),
    dragging: _,
    panZoom: q,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: V(),
    panOnScroll: d(g),
    panOnDrag: d(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Xn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: T(),
    onTransformChange: Y
  })), D(e, W);
  var G = ge({
    get initialViewport() {
      return h();
    },
    set initialViewport(X) {
      h(X), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(X) {
      x(X), m();
    },
    get onMove() {
      return b();
    },
    set onMove(X) {
      b(X), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(X) {
      $(X), m();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(X) {
      p(X), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(X) {
      C(X), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(X) {
      k(X), m();
    },
    get zoomOnPinch() {
      return V();
    },
    set zoomOnPinch(X) {
      V(X), m();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(X) {
      S(X), m();
    },
    get panOnScroll() {
      return O();
    },
    set panOnScroll(X) {
      O(X), m();
    },
    get paneClickDistance() {
      return T();
    },
    set paneClickDistance(X) {
      T(X), m();
    }
  });
  return r(), G;
}
ue(
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
function Tl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Ll(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var F0 = /* @__PURE__ */ re("<div><!></div>");
const G0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Yc(e, t) {
  ve(t, !1), Je(e, G0);
  const [n, r] = ot(), o = () => ne(_, "$panActivationKeyPressed", n), i = () => ne(B, "$selectionKeyPressed", n), a = () => ne(q, "$selectionRect", n), s = () => ne(z, "$elementsSelectable", n), l = () => ne(L, "$selectionRectMode", n), u = () => ne(N, "$connection", n), c = () => ne(S, "$edges", n), f = () => ne(V, "$nodeLookup", n), v = () => ne(O, "$viewport", n), g = () => ne(M, "$selectionMode", n), h = () => ne(T, "$dragging", n), x = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie();
  let p = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = Ri(), {
    nodes: k,
    nodeLookup: V,
    edges: S,
    viewport: O,
    dragging: T,
    elementsSelectable: z,
    selectionRect: q,
    selectionRectMode: L,
    selectionKeyPressed: B,
    selectionMode: M,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: E,
    connection: N
  } = Xe();
  let H = /* @__PURE__ */ ie(), P = null, A = [], Y = !1;
  function W(ce) {
    if (Y || u().inProgress) {
      Y = !1;
      return;
    }
    w("paneclick", { event: ce }), E(), L.set(null);
  }
  function ee(ce) {
    var Q, Ve;
    if (P = d(H).getBoundingClientRect(), !z || !d(b) || ce.button !== 0 || ce.target !== d(H) || !P)
      return;
    (Ve = (Q = ce.target) == null ? void 0 : Q.setPointerCapture) == null || Ve.call(Q, ce.pointerId);
    const { x: j, y: $e } = Ln(ce, P);
    E(), q.set({
      width: 0,
      height: 0,
      startX: j,
      startY: $e,
      x: j,
      y: $e
    });
  }
  function G(ce) {
    if (!d(b) || !P || !a())
      return;
    Y = !0;
    const Q = Ln(ce, P), Ve = a().startX ?? 0, j = a().startY ?? 0, $e = {
      ...a(),
      x: Q.x < Ve ? Q.x : Ve,
      y: Q.y < j ? Q.y : j,
      width: Math.abs(Q.x - Ve),
      height: Math.abs(Q.y - j)
    }, Ne = A.map((fe) => fe.id), Le = za(A, c()).map((fe) => fe.id);
    A = dc(
      f(),
      $e,
      [
        v().x,
        v().y,
        v().zoom
      ],
      g() === xi.Partial,
      !0
    );
    const se = za(A, c()).map((fe) => fe.id), de = A.map((fe) => fe.id);
    (Ne.length !== de.length || de.some((fe) => !Ne.includes(fe))) && k.update((fe) => fe.map(Ll(de))), (Le.length !== se.length || se.some((fe) => !Le.includes(fe))) && S.update((fe) => fe.map(Ll(se))), L.set("user"), q.set($e);
  }
  function X(ce) {
    var Q, Ve;
    ce.button === 0 && ((Ve = (Q = ce.target) == null ? void 0 : Q.releasePointerCapture) == null || Ve.call(Q, ce.pointerId), !d(b) && l() === "user" && ce.target === d(H) && (W == null || W(ce)), q.set(null), A.length > 0 && vi(L, "nodes"), i() && (Y = !1));
  }
  const ye = (ce) => {
    var Q;
    if (Array.isArray(d(x)) && (Q = d(x)) != null && Q.includes(2)) {
      ce.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ce });
  };
  he(
    () => (o(), te(p())),
    () => {
      J(x, o() || p());
    }
  ), he(
    () => (i(), a(), te(C()), d(x)),
    () => {
      J(b, i() || a() || C() && d(x) !== !0);
    }
  ), he(
    () => (s(), d(b), l()),
    () => {
      J($, s() && (d(b) || l() === "user"));
    }
  ), wt(), Ze();
  var oe = F0(), pe = /* @__PURE__ */ Pe(() => d($) ? void 0 : Tl(W, d(H))), le = /* @__PURE__ */ Pe(() => Tl(ye, d(H)));
  let Ee;
  var we = R(oe);
  $t(we, t, "default", {}), Z(oe), _n(oe, (ce) => J(H, ce), () => d(H)), ke(
    (ce) => Ee = Ct(oe, 1, "svelte-flow__pane svelte-1esy7hx", null, Ee, ce),
    [
      () => ({
        draggable: p() === !0 || Array.isArray(p()) && p().includes(0),
        dragging: h(),
        selection: d(b)
      })
    ],
    xe
  ), rt("click", oe, function(...ce) {
    var Q;
    (Q = d(pe)) == null || Q.apply(this, ce);
  }), rt("pointerdown", oe, function(...ce) {
    var Q;
    (Q = d($) ? ee : void 0) == null || Q.apply(this, ce);
  }), rt("pointermove", oe, function(...ce) {
    var Q;
    (Q = d($) ? G : void 0) == null || Q.apply(this, ce);
  }), rt("pointerup", oe, function(...ce) {
    var Q;
    (Q = d($) ? X : void 0) == null || Q.apply(this, ce);
  }), rt("contextmenu", oe, function(...ce) {
    var Q;
    (Q = d(le)) == null || Q.apply(this, ce);
  }), D(e, oe);
  var He = ge({
    get panOnDrag() {
      return p();
    },
    set panOnDrag(ce) {
      p(ce), m();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(ce) {
      C(ce), m();
    }
  });
  return r(), He;
}
ue(Yc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var U0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const J0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Kc(e, t) {
  ve(t, !1), Je(e, J0);
  const [n, r] = ot(), o = () => ne(i, "$viewport", n), { viewport: i } = Xe();
  Ze();
  var a = U0(), s = R(a);
  $t(s, t, "default", {}), Z(a), ke(() => vt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), ge(), r();
}
ue(Kc, {}, ["default"], [], !0);
function Vi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = g0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = F(n.snapGrid), c = F(n.viewport);
      return {
        nodes: F(n.nodes),
        nodeLookup: F(n.nodeLookup),
        edges: F(n.edges),
        nodeExtent: F(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: F(n.nodeOrigin),
        multiSelectionActive: F(n.multiselectionKeyPressed),
        domNode: F(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: F(n.autoPanOnNodeDrag),
        nodesDraggable: F(n.nodesDraggable),
        selectNodesOnDrag: F(n.selectNodesOnDrag),
        nodeDragThreshold: F(n.nodeDragThreshold),
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
function Q0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var e2 = /* @__PURE__ */ re("<div><!></div>");
function Wc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(oe, "$nodeTypes", n), i = () => ne(He, "$elementsSelectable", n), a = () => ne(ce, "$nodesDraggable", n), s = () => ne($e, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), f = /* @__PURE__ */ ie(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), h = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), p = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), V = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), O = y(t, "type", 13, "default"), T = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), q = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), B = y(t, "targetPosition", 13, void 0), M = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), E = y(t, "measuredHeight", 13, void 0), N = y(t, "initialWidth", 13, void 0), H = y(t, "initialHeight", 13, void 0), P = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), Y = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), ee = y(t, "parentId", 13, void 0), G = y(t, "nodeClickDistance", 13, void 0), X = y(t, "class", 13, "");
  const ye = Xe(), {
    nodeTypes: oe,
    nodeDragThreshold: pe,
    selectNodesOnDrag: le,
    handleNodeSelection: Ee,
    updateNodeInternals: we,
    elementsSelectable: He,
    nodesDraggable: ce
  } = ye;
  let Q = /* @__PURE__ */ ie(void 0, !0), Ve = /* @__PURE__ */ ie(null, !0);
  const j = Ri(), $e = Se(p());
  let Ne = /* @__PURE__ */ ie(void 0, !0), Le = /* @__PURE__ */ ie(void 0, !0), se = /* @__PURE__ */ ie(void 0, !0);
  Tr("svelteflow__node_id", g()), Tr("svelteflow__node_connectable", $e), us(() => {
    var U;
    d(Ve) && ((U = V()) == null || U.unobserve(d(Ve)));
  });
  function de(U) {
    $() && (!F(le) || !b() || F(pe) > 0) && Ee(g()), j("nodeclick", { node: v().internals.userNode, event: U });
  }
  he(() => te(O()), () => {
    J(l, O() || "default");
  }), he(() => (o(), d(l)), () => {
    J(u, !!o()[d(l)]);
  }), he(
    () => (o(), d(l), Si),
    () => {
      J(c, o()[d(l)] || Si);
    }
  ), he(
    () => (d(u), te(O())),
    () => {
      d(u) || console.warn("003", Ar.error003(O()));
    }
  ), he(
    () => (te(P()), te(A()), te(N()), te(H()), te(_()), te(E())),
    () => {
      J(f, Q0({
        width: P(),
        height: A(),
        initialWidth: N(),
        initialHeight: H(),
        measuredWidth: _(),
        measuredHeight: E()
      }));
    }
  ), he(() => te(p()), () => {
    $e.set(!!p());
  }), he(
    () => (d(Ne), d(l), d(Le), te(L()), d(se), te(B()), te(g()), d(Q)),
    () => {
      (d(Ne) && d(l) !== d(Ne) || d(Le) && L() !== d(Le) || d(se) && B() !== d(se)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: d(Q),
            force: !0
          }
        ]
      ]))), J(Ne, d(l)), J(Le, L()), J(se, B());
    }
  ), he(
    () => (te(V()), d(Q), d(Ve), te(W())),
    () => {
      V() && (d(Q) !== d(Ve) || !W()) && (d(Ve) && V().unobserve(d(Ve)), d(Q) && V().observe(d(Q)), J(Ve, d(Q)));
    }
  ), wt(), Ze(!0);
  var fe = Qe(), Ce = be(fe);
  {
    var nt = (U) => {
      var ze = e2();
      let ae, _t;
      var kt = R(ze);
      const Ot = /* @__PURE__ */ xe(() => x() ?? !1), Ae = /* @__PURE__ */ xe(() => $() ?? i() ?? !0), et = /* @__PURE__ */ xe(() => C() ?? !0), Ie = /* @__PURE__ */ xe(() => b() ?? a() ?? !0);
      Mu(kt, () => d(c), (qe, je) => {
        je(qe, {
          get data() {
            return h();
          },
          get id() {
            return g();
          },
          get selected() {
            return d(Ot);
          },
          get selectable() {
            return d(Ae);
          },
          get deletable() {
            return d(et);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return M();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return d(Ie);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return ee();
          },
          get type() {
            return d(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return z();
          },
          get positionAbsoluteY() {
            return q();
          },
          get width() {
            return P();
          },
          get height() {
            return A();
          }
        });
      }), Z(ze), xt(ze, (qe, je) => Vi == null ? void 0 : Vi(qe, je), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Ee,
        onDrag: (qe, je, yt, Gt) => {
          j("nodedrag", { event: qe, targetNode: yt, nodes: Gt });
        },
        onDragStart: (qe, je, yt, Gt) => {
          j("nodedragstart", { event: qe, targetNode: yt, nodes: Gt });
        },
        onDragStop: (qe, je, yt, Gt) => {
          j("nodedragstop", { event: qe, targetNode: yt, nodes: Gt });
        },
        store: ye
      })), _n(ze, (qe) => J(Q, qe), () => d(Q)), Yt(() => rt("click", ze, de)), Yt(() => rt("mouseenter", ze, (qe) => j("nodemouseenter", { node: v(), event: qe }))), Yt(() => rt("mouseleave", ze, (qe) => j("nodemouseleave", { node: v(), event: qe }))), Yt(() => rt("mousemove", ze, (qe) => j("nodemousemove", { node: v(), event: qe }))), Yt(() => rt("contextmenu", ze, (qe) => j("nodecontextmenu", { node: v(), event: qe }))), ke(
        (qe, je) => {
          _e(ze, "data-id", g()), ae = Ct(ze, 1, qe, null, ae, je), _t = vt(ze, `${S() ?? "" ?? ""};${d(f).width ?? ""}${d(f).height ?? ""}`, _t, {
            "z-index": M(),
            transform: `translate(${z() ?? ""}px, ${q() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => gn(Nt([
            "svelte-flow__node",
            `svelte-flow__node-${d(l)}`,
            X()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: p(),
            selectable: $(),
            nopan: b(),
            parent: T()
          })
        ],
        xe
      ), D(U, ze);
    };
    me(Ce, (U) => {
      w() || U(nt);
    });
  }
  D(e, fe);
  var at = ge({
    get node() {
      return v();
    },
    set node(U) {
      v(U), m();
    },
    get id() {
      return g();
    },
    set id(U) {
      g(U), m();
    },
    get data() {
      return h();
    },
    set data(U) {
      h(U), m();
    },
    get selected() {
      return x();
    },
    set selected(U) {
      x(U), m();
    },
    get draggable() {
      return b();
    },
    set draggable(U) {
      b(U), m();
    },
    get selectable() {
      return $();
    },
    set selectable(U) {
      $(U), m();
    },
    get connectable() {
      return p();
    },
    set connectable(U) {
      p(U), m();
    },
    get deletable() {
      return C();
    },
    set deletable(U) {
      C(U), m();
    },
    get hidden() {
      return w();
    },
    set hidden(U) {
      w(U), m();
    },
    get dragging() {
      return k();
    },
    set dragging(U) {
      k(U), m();
    },
    get resizeObserver() {
      return V();
    },
    set resizeObserver(U) {
      V(U), m();
    },
    get style() {
      return S();
    },
    set style(U) {
      S(U), m();
    },
    get type() {
      return O();
    },
    set type(U) {
      O(U), m();
    },
    get isParent() {
      return T();
    },
    set isParent(U) {
      T(U), m();
    },
    get positionX() {
      return z();
    },
    set positionX(U) {
      z(U), m();
    },
    get positionY() {
      return q();
    },
    set positionY(U) {
      q(U), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(U) {
      L(U), m();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(U) {
      B(U), m();
    },
    get zIndex() {
      return M();
    },
    set zIndex(U) {
      M(U), m();
    },
    get measuredWidth() {
      return _();
    },
    set measuredWidth(U) {
      _(U), m();
    },
    get measuredHeight() {
      return E();
    },
    set measuredHeight(U) {
      E(U), m();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(U) {
      N(U), m();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(U) {
      H(U), m();
    },
    get width() {
      return P();
    },
    set width(U) {
      P(U), m();
    },
    get height() {
      return A();
    },
    set height(U) {
      A(U), m();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(U) {
      Y(U), m();
    },
    get initialized() {
      return W();
    },
    set initialized(U) {
      W(U), m();
    },
    get parentId() {
      return ee();
    },
    set parentId(U) {
      ee(U), m();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(U) {
      G(U), m();
    },
    get class() {
      return X();
    },
    set class(U) {
      X(U), m();
    }
  });
  return r(), at;
}
ue(
  Wc,
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
var t2 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const n2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Xc(e, t) {
  ve(t, !1), Je(e, n2);
  const [n, r] = ot(), o = () => ne(c, "$visibleNodes", n), i = () => ne(f, "$nodesDraggable", n), a = () => ne(g, "$elementsSelectable", n), s = () => ne(v, "$nodesConnectable", n), l = () => ne(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: h,
    parentLookup: x
  } = Xe(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const V = k.target.getAttribute("data-id");
      w.set(V, { id: V, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  us(() => {
    b == null || b.disconnect();
  }), Ze();
  var $ = t2();
  Ht($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ xe(() => !!d(w).selected), V = /* @__PURE__ */ xe(() => !!d(w).hidden), S = /* @__PURE__ */ xe(() => !!(d(w).draggable || i() && typeof d(w).draggable > "u")), O = /* @__PURE__ */ xe(() => !!(d(w).selectable || a() && typeof d(w).selectable > "u")), T = /* @__PURE__ */ xe(() => !!(d(w).connectable || s() && typeof d(w).connectable > "u")), z = /* @__PURE__ */ xe(() => d(w).deletable ?? !0), q = /* @__PURE__ */ xe(() => l().has(d(w).id)), L = /* @__PURE__ */ xe(() => d(w).type ?? "default"), B = /* @__PURE__ */ xe(() => d(w).internals.z ?? 0), M = /* @__PURE__ */ xe(() => hc(d(w)));
    Wc(C, {
      get node() {
        return d(w);
      },
      get id() {
        return d(w).id;
      },
      get data() {
        return d(w).data;
      },
      get selected() {
        return d(k);
      },
      get hidden() {
        return d(V);
      },
      get draggable() {
        return d(S);
      },
      get selectable() {
        return d(O);
      },
      get connectable() {
        return d(T);
      },
      get deletable() {
        return d(z);
      },
      get positionX() {
        return d(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return d(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return d(q);
      },
      get style() {
        return d(w).style;
      },
      get class() {
        return d(w).class;
      },
      get type() {
        return d(L);
      },
      get sourcePosition() {
        return d(w).sourcePosition;
      },
      get targetPosition() {
        return d(w).targetPosition;
      },
      get dragging() {
        return d(w).dragging;
      },
      get zIndex() {
        return d(B);
      },
      get dragHandle() {
        return d(w).dragHandle;
      },
      get initialized() {
        return d(M);
      },
      get width() {
        return d(w).width;
      },
      get height() {
        return d(w).height;
      },
      get initialWidth() {
        return d(w).initialWidth;
      },
      get initialHeight() {
        return d(w).initialHeight;
      },
      get measuredWidth() {
        return d(w).measured.width;
      },
      get measuredHeight() {
        return d(w).measured.height;
      },
      get parentId() {
        return d(w).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(_) {
          Ke.call(this, t, _);
        },
        nodemouseenter(_) {
          Ke.call(this, t, _);
        },
        nodemousemove(_) {
          Ke.call(this, t, _);
        },
        nodemouseleave(_) {
          Ke.call(this, t, _);
        },
        nodedrag(_) {
          Ke.call(this, t, _);
        },
        nodedragstart(_) {
          Ke.call(this, t, _);
        },
        nodedragstop(_) {
          Ke.call(this, t, _);
        },
        nodecontextmenu(_) {
          Ke.call(this, t, _);
        }
      }
    });
  }), Z($), D(e, $);
  var p = ge({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), p;
}
ue(Xc, { nodeClickDistance: {} }, [], [], !0);
var r2 = /* @__PURE__ */ Me('<svg><g role="img"><!></g></svg>');
function jc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(X, "$edgeTypes", n), i = () => ne(ye, "$flowId", n), a = () => ne(oe, "$elementsSelectable", n), s = () => ne(G, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), f = /* @__PURE__ */ ie(void 0, !0), v = /* @__PURE__ */ ie(void 0, !0);
  let g = y(t, "id", 13), h = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), p = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), V = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), O = y(t, "hidden", 13, !1), T = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), q = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), B = y(t, "sourceHandle", 13, void 0), M = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), E = y(t, "sourceY", 13), N = y(t, "targetX", 13), H = y(t, "targetY", 13), P = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), Y = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), ee = y(t, "class", 13, "");
  Tr("svelteflow__edge_id", g());
  const {
    edgeLookup: G,
    edgeTypes: X,
    flowId: ye,
    elementsSelectable: oe
  } = Xe(), pe = Ri(), le = Lc();
  function Ee(j) {
    const $e = s().get(g());
    $e && (le(g()), pe("edgeclick", { event: j, edge: $e }));
  }
  function we(j, $e) {
    const Ne = s().get(g());
    Ne && pe($e, { event: j, edge: Ne });
  }
  he(() => te(h()), () => {
    J(l, h() || "default");
  }), he(
    () => (o(), d(l), Mi),
    () => {
      J(u, o()[d(l)] || Mi);
    }
  ), he(
    () => (te(q()), i()),
    () => {
      J(c, q() ? `url('#${qa(q(), i())}')` : void 0);
    }
  ), he(
    () => (te(L()), i()),
    () => {
      J(f, L() ? `url('#${qa(L(), i())}')` : void 0);
    }
  ), he(
    () => (te(V()), a()),
    () => {
      J(v, V() ?? a());
    }
  ), wt(), Ze(!0);
  var He = Qe(), ce = be(He);
  {
    var Q = (j) => {
      var $e = r2();
      let Ne;
      var Le = R($e);
      let se;
      var de = R(Le);
      const fe = /* @__PURE__ */ xe(() => S() ?? !0);
      Mu(de, () => d(u), (Ce, nt) => {
        nt(Ce, {
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
            return _();
          },
          get sourceY() {
            return E();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return H();
          },
          get sourcePosition() {
            return P();
          },
          get targetPosition() {
            return A();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return T();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return $();
          },
          get style() {
            return p();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return d(v);
          },
          get deletable() {
            return d(fe);
          },
          get type() {
            return d(l);
          },
          get sourceHandleId() {
            return B();
          },
          get targetHandleId() {
            return M();
          },
          get markerStart() {
            return d(c);
          },
          get markerEnd() {
            return d(f);
          }
        });
      }), Z(Le), Z($e), ke(
        (Ce, nt) => {
          Ne = vt($e, "", Ne, { "z-index": C() }), se = Ct(Le, 0, Ce, null, se, nt), _e(Le, "data-id", g()), _e(Le, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => gn(Nt(["svelte-flow__edge", ee()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: d(v)
          })
        ],
        xe
      ), rt("click", Le, Ee), rt("contextmenu", Le, (Ce) => {
        we(Ce, "edgecontextmenu");
      }), rt("mouseenter", Le, (Ce) => {
        we(Ce, "edgemouseenter");
      }), rt("mouseleave", Le, (Ce) => {
        we(Ce, "edgemouseleave");
      }), D(j, $e);
    };
    me(ce, (j) => {
      O() || j(Q);
    });
  }
  D(e, He);
  var Ve = ge({
    get id() {
      return g();
    },
    set id(j) {
      g(j), m();
    },
    get type() {
      return h();
    },
    set type(j) {
      h(j), m();
    },
    get source() {
      return x();
    },
    set source(j) {
      x(j), m();
    },
    get target() {
      return b();
    },
    set target(j) {
      b(j), m();
    },
    get data() {
      return $();
    },
    set data(j) {
      $(j), m();
    },
    get style() {
      return p();
    },
    set style(j) {
      p(j), m();
    },
    get zIndex() {
      return C();
    },
    set zIndex(j) {
      C(j), m();
    },
    get animated() {
      return w();
    },
    set animated(j) {
      w(j), m();
    },
    get selected() {
      return k();
    },
    set selected(j) {
      k(j), m();
    },
    get selectable() {
      return V();
    },
    set selectable(j) {
      V(j), m();
    },
    get deletable() {
      return S();
    },
    set deletable(j) {
      S(j), m();
    },
    get hidden() {
      return O();
    },
    set hidden(j) {
      O(j), m();
    },
    get label() {
      return T();
    },
    set label(j) {
      T(j), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(j) {
      z(j), m();
    },
    get markerStart() {
      return q();
    },
    set markerStart(j) {
      q(j), m();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(j) {
      L(j), m();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(j) {
      B(j), m();
    },
    get targetHandle() {
      return M();
    },
    set targetHandle(j) {
      M(j), m();
    },
    get sourceX() {
      return _();
    },
    set sourceX(j) {
      _(j), m();
    },
    get sourceY() {
      return E();
    },
    set sourceY(j) {
      E(j), m();
    },
    get targetX() {
      return N();
    },
    set targetX(j) {
      N(j), m();
    },
    get targetY() {
      return H();
    },
    set targetY(j) {
      H(j), m();
    },
    get sourcePosition() {
      return P();
    },
    set sourcePosition(j) {
      P(j), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(j) {
      A(j), m();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(j) {
      Y(j), m();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(j) {
      W(j), m();
    },
    get class() {
      return ee();
    },
    set class(j) {
      ee(j), m();
    }
  });
  return r(), Ve;
}
ue(
  jc,
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
function Fc(e, t) {
  ve(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return on(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ze(), ge({
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
ue(Fc, { onMount: {}, onDestroy: {} }, [], [], !0);
var o2 = /* @__PURE__ */ Me("<defs></defs>");
function Gc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(i, "$markers", n), { markers: i } = Xe();
  Ze();
  var a = o2();
  Ht(a, 5, o, (s) => s.id, (s, l) => {
    Uc(s, lt(() => d(l)));
  }), Z(a), D(e, a), ge(), r();
}
ue(Gc, {}, [], [], !0);
var i2 = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), a2 = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), s2 = /* @__PURE__ */ Me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Uc(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ze();
  var c = s2(), f = R(c);
  {
    var v = (h) => {
      var x = i2();
      ke(() => {
        _e(x, "stroke", l()), _e(x, "stroke-width", u());
      }), D(h, x);
    }, g = (h, x) => {
      {
        var b = ($) => {
          var p = a2();
          ke(() => {
            _e(p, "stroke", l()), _e(p, "stroke-width", u()), _e(p, "fill", l());
          }), D($, p);
        };
        me(
          h,
          ($) => {
            r() === $o.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    me(f, (h) => {
      r() === $o.Arrow ? h(v) : h(g, !1);
    });
  }
  return Z(c), ke(() => {
    _e(c, "id", n()), _e(c, "markerWidth", `${o()}`), _e(c, "markerHeight", `${i()}`), _e(c, "markerUnits", a()), _e(c, "orient", s());
  }), D(e, c), ge({
    get id() {
      return n();
    },
    set id(h) {
      n(h), m();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h) {
      i(h), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(h) {
      a(h), m();
    },
    get orient() {
      return s();
    },
    set orient(h) {
      s(h), m();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), m();
    }
  });
}
ue(
  Uc,
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
var l2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Jc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Xe();
  on(() => {
    a() && u(a());
  }), Ze();
  var f = l2(), v = R(f), g = R(v);
  Gc(g, {}), Z(v);
  var h = I(v, 2);
  Ht(h, 1, o, (p) => p.id, (p, C) => {
    const w = /* @__PURE__ */ xe(() => d(C).selectable ?? i()), k = /* @__PURE__ */ xe(() => d(C).type || "default");
    jc(p, {
      get id() {
        return d(C).id;
      },
      get source() {
        return d(C).source;
      },
      get target() {
        return d(C).target;
      },
      get data() {
        return d(C).data;
      },
      get style() {
        return d(C).style;
      },
      get animated() {
        return d(C).animated;
      },
      get selected() {
        return d(C).selected;
      },
      get selectable() {
        return d(w);
      },
      get deletable() {
        return d(C).deletable;
      },
      get hidden() {
        return d(C).hidden;
      },
      get label() {
        return d(C).label;
      },
      get labelStyle() {
        return d(C).labelStyle;
      },
      get markerStart() {
        return d(C).markerStart;
      },
      get markerEnd() {
        return d(C).markerEnd;
      },
      get sourceHandle() {
        return d(C).sourceHandle;
      },
      get targetHandle() {
        return d(C).targetHandle;
      },
      get sourceX() {
        return d(C).sourceX;
      },
      get sourceY() {
        return d(C).sourceY;
      },
      get targetX() {
        return d(C).targetX;
      },
      get targetY() {
        return d(C).targetY;
      },
      get sourcePosition() {
        return d(C).sourcePosition;
      },
      get targetPosition() {
        return d(C).targetPosition;
      },
      get ariaLabel() {
        return d(C).ariaLabel;
      },
      get interactionWidth() {
        return d(C).interactionWidth;
      },
      get class() {
        return d(C).class;
      },
      get type() {
        return d(k);
      },
      get zIndex() {
        return d(C).zIndex;
      },
      $$events: {
        edgeclick(V) {
          Ke.call(this, t, V);
        },
        edgecontextmenu(V) {
          Ke.call(this, t, V);
        },
        edgemouseenter(V) {
          Ke.call(this, t, V);
        },
        edgemouseleave(V) {
          Ke.call(this, t, V);
        }
      }
    });
  });
  var x = I(h, 2);
  {
    var b = (p) => {
      Fc(p, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    me(x, (p) => {
      o().length > 0 && p(b);
    });
  }
  Z(f), D(e, f);
  var $ = ge({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(p) {
      a(p), m();
    }
  });
  return r(), $;
}
ue(Jc, { defaultEdgeOptions: {} }, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const c2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cs(e, t) {
  ve(t, !1), Je(e, c2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Qe(), l = be(s);
  {
    var u = (c) => {
      var f = u2();
      let v;
      ke(() => v = vt(f, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, f);
    };
    me(l, (c) => {
      a() && c(u);
    });
  }
  return D(e, s), ge({
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
ue(
  Cs,
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
function Qc(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Xe();
  Ze();
  const l = /* @__PURE__ */ xe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), f = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ xe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  Cs(e, {
    get isVisible() {
      return d(l);
    },
    get width() {
      return d(u);
    },
    get height() {
      return d(c);
    },
    get x() {
      return d(f);
    },
    get y() {
      return d(v);
    }
  }), ge(), r();
}
ue(Qc, {}, [], [], !0);
var d2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const f2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ed(e, t) {
  ve(t, !1), Je(e, f2);
  const [n, r] = ot(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = Xe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, f = Ri();
  let v = /* @__PURE__ */ ie(null);
  function g(p) {
    const C = a().filter((w) => w.selected);
    f("selectioncontextmenu", { nodes: C, event: p });
  }
  function h(p) {
    const C = a().filter((w) => w.selected);
    f("selectionclick", { nodes: C, event: p });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (J(v, Oo(i(), { filter: (p) => !!p.selected })), a());
    }
  ), wt(), Ze();
  var x = Qe(), b = be(x);
  {
    var $ = (p) => {
      var C = d2(), w = R(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), xt(C, (k, V) => Vi == null ? void 0 : Vi(k, V), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, V, S, O) => {
          f("nodedrag", { event: k, targetNode: null, nodes: O });
        },
        onDragStart: (k, V, S, O) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: O });
        },
        onDragStop: (k, V, S, O) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: O });
        }
      })), Yt(() => rt("contextmenu", C, g)), Yt(() => rt("click", C, h)), Yt(() => rt("keyup", C, () => {
      })), ke(() => vt(C, `width: ${d(v).width ?? ""}px; height: ${d(v).height ?? ""}px; transform: translate(${d(v).x ?? ""}px, ${d(v).y ?? ""}px)`)), D(p, C);
    };
    me(b, (p) => {
      o() === "nodes" && d(v) && Hn(d(v).x) && Hn(d(v).y) && p($);
    });
  }
  D(e, x), ge(), r();
}
ue(ed, {}, [], [], !0);
function dt(e, t) {
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
      }, { modifier: f, key: v, callback: g, preventDefault: h, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          h && a.preventDefault();
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
function td(e, t) {
  ve(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => _i() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => _i() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: v
  } = Xe();
  function g(p) {
    return p !== null && typeof p == "object";
  }
  function h(p) {
    return g(p) ? p.modifier || [] : [];
  }
  function x(p) {
    return p == null ? "" : g(p) ? p.key : p;
  }
  function b(p, C) {
    return (Array.isArray(p) ? p : [p]).map((w) => {
      const k = x(w);
      return {
        key: k,
        modifier: h(w),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Ze(), rt("blur", Dt, $), rt("contextmenu", Dt, $), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Wh(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(a(), () => f.set(!0)),
    type: "keydown"
  })), xt(Dt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: b(a(), () => f.set(!1)),
    type: "keyup"
  })), ge({
    get selectionKey() {
      return n();
    },
    set selectionKey(p) {
      n(p), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(p) {
      r(p), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(p) {
      o(p), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(p) {
      i(p), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(p) {
      a(p), m();
    }
  });
}
ue(
  td,
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
var v2 = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__connection-path"></path>'), g2 = /* @__PURE__ */ Me('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function nd(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(g, "$connection", n), i = () => ne(h, "$connectionLineType", n), a = () => ne(f, "$width", n), s = () => ne(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: v,
    connection: g,
    connectionLineType: h
  } = Xe();
  let x = /* @__PURE__ */ ie(null);
  he(
    () => (o(), te(c()), i(), d(x), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: V, toPosition: S } = o(), O = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: V,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Mr.Bezier:
            ((T) => J(x, T[0]))(wc(O));
            break;
          case Mr.Step:
            ((T) => J(x, T[0]))(ki({ ...O, borderRadius: 0 }));
            break;
          case Mr.SmoothStep:
            ((T) => J(x, T[0]))(ki(O));
            break;
          default:
            ((T) => J(x, T[0]))(Ia(O));
        }
      }
    }
  ), wt(), Ze();
  var b = Qe(), $ = be(b);
  {
    var p = (w) => {
      var k = g2(), V = R(k), S = R(V);
      $t(S, t, "connectionLine", {});
      var O = I(S);
      {
        var T = (z) => {
          var q = v2();
          ke(() => {
            _e(q, "d", d(x)), vt(q, u());
          }), D(z, q);
        };
        me(O, (z) => {
          c() || z(T);
        });
      }
      Z(V), Z(k), ke(
        (z) => {
          _e(k, "width", a()), _e(k, "height", s()), vt(k, l()), Ct(V, 0, z);
        },
        [
          () => gn(Nt([
            "svelte-flow__connection",
            Nh(o().isValid)
          ]))
        ],
        xe
      ), D(w, k);
    };
    me($, (w) => {
      o().inProgress && w(p);
    });
  }
  D(e, b);
  var C = ge({
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
ue(
  nd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var p2 = /* @__PURE__ */ re("<div><!></div>");
function Do(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  ve(t, !1);
  const [o, i] = ot(), a = () => ne(f, "$selectionRectMode", o), s = /* @__PURE__ */ ie();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: f } = Xe();
  he(() => te(l()), () => {
    J(s, `${l()}`.split("-"));
  }), wt(), Ze();
  var v = p2();
  let g;
  var h = R(v);
  $t(h, t, "default", {}), Z(v), ke(
    (b) => g = jt(v, g, {
      class: b,
      style: u(),
      ...r,
      [rr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Nt([
        "svelte-flow__panel",
        c(),
        ...d(s)
      ])
    ],
    xe
  ), D(e, v);
  var x = ge({
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
ue(Do, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var h2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function rd(e, t) {
  ve(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ze();
  var o = Qe(), i = be(o);
  {
    var a = (s) => {
      Do(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = h2();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    me(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return D(e, o), ge({
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
ue(rd, { proOptions: {}, position: {} }, [], [], !0);
function Dl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const m2 = (e) => Object.keys(e);
function zl(e, t) {
  m2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function y2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function w2(e = "light") {
  return Ut("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = y2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var b2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), x2 = /* @__PURE__ */ re("<!> <!>", 1), $2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const C2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function od(e, t) {
  const n = Df(t), r = st(t, [
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
  ve(t, !1), Je(e, C2);
  const [i, a] = ot(), s = () => ne(C(), "$viewport", i), l = () => ne(ra, "$initialized", i), u = () => ne(d(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let f = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), p = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), V = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), O = y(t, "panActivationKey", 12, void 0), T = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), q = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), B = y(t, "nodeDragThreshold", 12, void 0), M = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), E = y(t, "deleteKey", 12, void 0), N = y(t, "connectionRadius", 12, void 0), H = y(t, "connectionLineType", 12, void 0), P = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), Y = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), ee = y(t, "onMove", 12, void 0), G = y(t, "onMoveEnd", 12, void 0), X = y(t, "isValidConnection", 12, void 0), ye = y(t, "translateExtent", 12, void 0), oe = y(t, "nodeExtent", 12, void 0), pe = y(t, "onlyRenderVisibleElements", 12, void 0), le = y(t, "panOnScrollMode", 28, () => Xn.Free), Ee = y(t, "preventScrolling", 12, !0), we = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), ce = y(t, "zoomOnPinch", 12, !0), Q = y(t, "panOnScroll", 12, !1), Ve = y(t, "panOnDrag", 12, !0), j = y(t, "selectionOnDrag", 12, void 0), $e = y(t, "autoPanOnConnect", 12, !0), Ne = y(t, "autoPanOnNodeDrag", 12, !0), Le = y(t, "onerror", 12, void 0), se = y(t, "ondelete", 12, void 0), de = y(t, "onedgecreate", 12, void 0), fe = y(t, "attributionPosition", 12, void 0), Ce = y(t, "proOptions", 12, void 0), nt = y(t, "defaultEdgeOptions", 12, void 0), at = y(t, "width", 12, void 0), U = y(t, "height", 12, void 0), ze = y(t, "colorMode", 12, "light"), ae = y(t, "onconnect", 12, void 0), _t = y(t, "onconnectstart", 12, void 0), kt = y(t, "onconnectend", 12, void 0), Ot = y(t, "onbeforedelete", 12, void 0), Ae = y(t, "oninit", 12, void 0), et = y(t, "nodeOrigin", 12, void 0), Ie = y(t, "paneClickDistance", 12, 0), qe = y(t, "nodeClickDistance", 12, 0), je = y(t, "defaultMarkerColor", 12, "#b1b1b7"), yt = y(t, "style", 12, void 0), Gt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ ie(), St = /* @__PURE__ */ ie(), Tt = /* @__PURE__ */ ie();
  const wr = s() || p(), it = hf(Ji) ? Xe() : W0({
    nodes: F(v()),
    edges: F(g()),
    width: at(),
    height: U(),
    fitView: h(),
    nodeOrigin: et(),
    nodeExtent: oe()
  });
  on(() => (it.width.set(d(St)), it.height.set(d(Tt)), it.domNode.set(d(Ur)), it.syncNodeStores(v()), it.syncEdgeStores(g()), it.syncViewport(C()), h() !== void 0 && it.fitViewQueued.set(h()), x() && it.fitViewOptions.set(x()), Dl(it, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ye(),
    paneClickDistance: Ie()
  }), () => {
    it.reset();
  }));
  const { initialized: ra } = it;
  let Jr = /* @__PURE__ */ ie(!1);
  he(
    () => (d(St), d(Tt)),
    () => {
      d(St) !== void 0 && d(Tt) !== void 0 && (it.width.set(d(St)), it.height.set(d(Tt)));
    }
  ), he(
    () => (d(Jr), l(), te(Ae())),
    () => {
      var K;
      !d(Jr) && l() && ((K = Ae()) == null || K(), J(Jr, !0));
    }
  ), he(
    () => (te(f()), te(H()), te(N()), te(S()), te(_()), te(je()), te(q()), te(L()), te(M()), te(pe()), te(X()), te($e()), te(Ne()), te(Le()), te(se()), te(de()), te(P()), te(B()), te(ae()), te(_t()), te(kt()), te(Ot()), te(et()), zl),
    () => {
      const K = {
        flowId: f(),
        connectionLineType: H(),
        connectionRadius: N(),
        selectionMode: S(),
        snapGrid: _(),
        defaultMarkerColor: je(),
        nodesDraggable: q(),
        nodesConnectable: L(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: pe(),
        isValidConnection: X(),
        autoPanOnConnect: $e(),
        autoPanOnNodeDrag: Ne(),
        onerror: Le(),
        ondelete: se(),
        onedgecreate: de(),
        connectionMode: P(),
        nodeDragThreshold: B(),
        onconnect: ae(),
        onconnectstart: _t(),
        onconnectend: kt(),
        onbeforedelete: Ot(),
        nodeOrigin: et()
      };
      zl(it, K);
    }
  ), he(
    () => (te(w()), te(k()), te(b()), te($()), te(ye()), te(Ie())),
    () => {
      Dl(it, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ye(),
        paneClickDistance: Ie()
      });
    }
  ), he(
    () => te(ze()),
    () => {
      Wf(J(c, w2(ze())), "$colorModeClass", i);
    }
  ), wt(), Ze();
  var Zt = $2();
  let qo;
  var Bo = R(Zt);
  td(Bo, {
    get selectionKey() {
      return V();
    },
    get deleteKey() {
      return E();
    },
    get panActivationKey() {
      return O();
    },
    get multiSelectionKey() {
      return T();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Zo = I(Bo, 2);
  const oa = /* @__PURE__ */ xe(() => le() === void 0 ? Xn.Free : le()), Qd = /* @__PURE__ */ xe(() => Ee() === void 0 ? !0 : Ee()), e1 = /* @__PURE__ */ xe(() => we() === void 0 ? !0 : we()), t1 = /* @__PURE__ */ xe(() => He() === void 0 ? !0 : He()), n1 = /* @__PURE__ */ xe(() => ce() === void 0 ? !0 : ce()), r1 = /* @__PURE__ */ xe(() => Q() === void 0 ? !1 : Q()), o1 = /* @__PURE__ */ xe(() => Ve() === void 0 ? !0 : Ve()), i1 = /* @__PURE__ */ xe(() => Ie() === void 0 ? 0 : Ie());
  Rc(Zo, {
    initialViewport: wr,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return ee();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return d(oa);
    },
    get preventScrolling() {
      return d(Qd);
    },
    get zoomOnScroll() {
      return d(e1);
    },
    get zoomOnDoubleClick() {
      return d(t1);
    },
    get zoomOnPinch() {
      return d(n1);
    },
    get panOnScroll() {
      return d(r1);
    },
    get panOnDrag() {
      return d(o1);
    },
    get paneClickDistance() {
      return d(i1);
    },
    children: (K, ab) => {
      const l1 = /* @__PURE__ */ xe(() => Ve() === void 0 ? !0 : Ve());
      Yc(K, {
        get panOnDrag() {
          return d(l1);
        },
        get selectionOnDrag() {
          return j();
        },
        $$events: {
          paneclick(Qr) {
            Ke.call(this, t, Qr);
          },
          panecontextmenu(Qr) {
            Ke.call(this, t, Qr);
          }
        },
        children: (Qr, sb) => {
          var Ps = x2(), Hs = be(Ps);
          Kc(Hs, {
            children: (c1, lb) => {
              var Ns = b2(), Os = be(Ns);
              Jc(Os, {
                get defaultEdgeOptions() {
                  return nt();
                },
                $$events: {
                  edgeclick(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  edgecontextmenu(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  edgemouseenter(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  edgemouseleave(Ye) {
                    Ke.call(this, t, Ye);
                  }
                }
              });
              var Ts = I(Os, 2);
              nd(Ts, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ye, ub) => {
                    var Ds = Qe(), f1 = be(Ds);
                    $t(f1, t, "connectionLine", {}), D(Ye, Ds);
                  }
                }
              });
              var Ls = I(Ts, 6);
              Xc(Ls, {
                get nodeClickDistance() {
                  return qe();
                },
                $$events: {
                  nodeclick(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodemouseenter(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodemousemove(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodemouseleave(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedragstart(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedrag(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedragstop(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodecontextmenu(Ye) {
                    Ke.call(this, t, Ye);
                  }
                }
              });
              var d1 = I(Ls, 2);
              ed(d1, {
                $$events: {
                  selectionclick(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  selectioncontextmenu(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedragstart(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedrag(Ye) {
                    Ke.call(this, t, Ye);
                  },
                  nodedragstop(Ye) {
                    Ke.call(this, t, Ye);
                  }
                }
              }), D(c1, Ns);
            },
            $$slots: { default: !0 }
          });
          var u1 = I(Hs, 2);
          Qc(u1, {}), D(Qr, Ps);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Vs = I(Zo, 2);
  rd(Vs, {
    get proOptions() {
      return Ce();
    },
    get position() {
      return fe();
    }
  });
  var a1 = I(Vs, 2);
  $t(a1, t, "default", {}), Z(Zt), _n(Zt, (K) => J(Ur, K), () => d(Ur)), ke(
    (K) => qo = jt(
      Zt,
      qo,
      {
        style: yt(),
        class: K,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Nt([
        "svelte-flow",
        Gt(),
        u()
      ])
    ],
    xe
  ), Gs(Zt, "clientWidth", (K) => J(St, K)), Gs(Zt, "clientHeight", (K) => J(Tt, K)), rt("dragover", Zt, function(K) {
    Ke.call(this, t, K);
  }), rt("drop", Zt, function(K) {
    Ke.call(this, t, K);
  }), D(e, Zt);
  var s1 = ge({
    get id() {
      return f();
    },
    set id(K) {
      f(K), m();
    },
    get nodes() {
      return v();
    },
    set nodes(K) {
      v(K), m();
    },
    get edges() {
      return g();
    },
    set edges(K) {
      g(K), m();
    },
    get fitView() {
      return h();
    },
    set fitView(K) {
      h(K), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(K) {
      x(K), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(K) {
      b(K), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(K) {
      $(K), m();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(K) {
      p(K), m();
    },
    get viewport() {
      return C();
    },
    set viewport(K) {
      C(K), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(K) {
      w(K), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(K) {
      k(K), m();
    },
    get selectionKey() {
      return V();
    },
    set selectionKey(K) {
      V(K), m();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(K) {
      S(K), m();
    },
    get panActivationKey() {
      return O();
    },
    set panActivationKey(K) {
      O(K), m();
    },
    get multiSelectionKey() {
      return T();
    },
    set multiSelectionKey(K) {
      T(K), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(K) {
      z(K), m();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(K) {
      q(K), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(K) {
      L(K), m();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(K) {
      B(K), m();
    },
    get elementsSelectable() {
      return M();
    },
    set elementsSelectable(K) {
      M(K), m();
    },
    get snapGrid() {
      return _();
    },
    set snapGrid(K) {
      _(K), m();
    },
    get deleteKey() {
      return E();
    },
    set deleteKey(K) {
      E(K), m();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(K) {
      N(K), m();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(K) {
      H(K), m();
    },
    get connectionMode() {
      return P();
    },
    set connectionMode(K) {
      P(K), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(K) {
      A(K), m();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(K) {
      Y(K), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(K) {
      W(K), m();
    },
    get onMove() {
      return ee();
    },
    set onMove(K) {
      ee(K), m();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(K) {
      G(K), m();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(K) {
      X(K), m();
    },
    get translateExtent() {
      return ye();
    },
    set translateExtent(K) {
      ye(K), m();
    },
    get nodeExtent() {
      return oe();
    },
    set nodeExtent(K) {
      oe(K), m();
    },
    get onlyRenderVisibleElements() {
      return pe();
    },
    set onlyRenderVisibleElements(K) {
      pe(K), m();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(K) {
      le(K), m();
    },
    get preventScrolling() {
      return Ee();
    },
    set preventScrolling(K) {
      Ee(K), m();
    },
    get zoomOnScroll() {
      return we();
    },
    set zoomOnScroll(K) {
      we(K), m();
    },
    get zoomOnDoubleClick() {
      return He();
    },
    set zoomOnDoubleClick(K) {
      He(K), m();
    },
    get zoomOnPinch() {
      return ce();
    },
    set zoomOnPinch(K) {
      ce(K), m();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(K) {
      Q(K), m();
    },
    get panOnDrag() {
      return Ve();
    },
    set panOnDrag(K) {
      Ve(K), m();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(K) {
      j(K), m();
    },
    get autoPanOnConnect() {
      return $e();
    },
    set autoPanOnConnect(K) {
      $e(K), m();
    },
    get autoPanOnNodeDrag() {
      return Ne();
    },
    set autoPanOnNodeDrag(K) {
      Ne(K), m();
    },
    get onerror() {
      return Le();
    },
    set onerror(K) {
      Le(K), m();
    },
    get ondelete() {
      return se();
    },
    set ondelete(K) {
      se(K), m();
    },
    get onedgecreate() {
      return de();
    },
    set onedgecreate(K) {
      de(K), m();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(K) {
      fe(K), m();
    },
    get proOptions() {
      return Ce();
    },
    set proOptions(K) {
      Ce(K), m();
    },
    get defaultEdgeOptions() {
      return nt();
    },
    set defaultEdgeOptions(K) {
      nt(K), m();
    },
    get width() {
      return at();
    },
    set width(K) {
      at(K), m();
    },
    get height() {
      return U();
    },
    set height(K) {
      U(K), m();
    },
    get colorMode() {
      return ze();
    },
    set colorMode(K) {
      ze(K), m();
    },
    get onconnect() {
      return ae();
    },
    set onconnect(K) {
      ae(K), m();
    },
    get onconnectstart() {
      return _t();
    },
    set onconnectstart(K) {
      _t(K), m();
    },
    get onconnectend() {
      return kt();
    },
    set onconnectend(K) {
      kt(K), m();
    },
    get onbeforedelete() {
      return Ot();
    },
    set onbeforedelete(K) {
      Ot(K), m();
    },
    get oninit() {
      return Ae();
    },
    set oninit(K) {
      Ae(K), m();
    },
    get nodeOrigin() {
      return et();
    },
    set nodeOrigin(K) {
      et(K), m();
    },
    get paneClickDistance() {
      return Ie();
    },
    set paneClickDistance(K) {
      Ie(K), m();
    },
    get nodeClickDistance() {
      return qe();
    },
    set nodeClickDistance(K) {
      qe(K), m();
    },
    get defaultMarkerColor() {
      return je();
    },
    set defaultMarkerColor(K) {
      je(K), m();
    },
    get style() {
      return yt();
    },
    set style(K) {
      yt(K), m();
    },
    get class() {
      return Gt();
    },
    set class(K) {
      Gt(K), m();
    }
  });
  return a(), s1;
}
ue(
  od,
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
function id(e, t) {
  ve(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = Zc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Tr(Ji, { getStore: () => l }), us(() => {
    l.reset();
  }), Ze();
  var u = Qe(), c = be(u);
  return $t(c, t, "default", {}), D(e, u), ge({
    get initialNodes() {
      return n();
    },
    set initialNodes(f) {
      n(f), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(f) {
      r(f), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(f) {
      o(f), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(f) {
      i(f), m();
    },
    get fitView() {
      return a();
    },
    set fitView(f) {
      a(f), m();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(f) {
      s(f), m();
    }
  });
}
ue(
  id,
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
var _2 = /* @__PURE__ */ re("<button><!></button>");
function so(e, t) {
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
  ve(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Ze();
  var c = _2();
  let f;
  var v = R(c);
  return $t(v, t, "default", { class: "button-svg" }), Z(c), ke(
    (g) => f = jt(c, f, {
      type: "button",
      class: g,
      ...r,
      [rr]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Nt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    xe
  ), rt("click", c, function(g) {
    Ke.call(this, t, g);
  }), D(e, c), ge({
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
ue(
  so,
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
var k2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function ad(e) {
  var t = k2();
  D(e, t);
}
ue(ad, {}, [], [], !0);
var S2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function sd(e) {
  var t = S2();
  D(e, t);
}
ue(sd, {}, [], [], !0);
var E2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ld(e) {
  var t = E2();
  D(e, t);
}
ue(ld, {}, [], [], !0);
var M2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ud(e) {
  var t = M2();
  D(e, t);
}
ue(ud, {}, [], [], !0);
var V2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function cd(e) {
  var t = V2();
  D(e, t);
}
ue(cd, {}, [], [], !0);
var P2 = /* @__PURE__ */ re("<!> <!>", 1), H2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(H, "$nodesDraggable", n), i = () => ne(P, "$nodesConnectable", n), a = () => ne(A, "$elementsSelectable", n), s = () => ne(_, "$viewport", n), l = () => ne(E, "$minZoom", n), u = () => ne(N, "$maxZoom", n), c = /* @__PURE__ */ ie(), f = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie();
  let h = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), p = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), V = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), O = y(t, "style", 12, void 0), T = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), q = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: B,
    fitView: M,
    viewport: _,
    minZoom: E,
    maxZoom: N,
    nodesDraggable: H,
    nodesConnectable: P,
    elementsSelectable: A
  } = Xe(), Y = {
    bgColor: p(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: V()
  }, W = () => {
    L();
  }, ee = () => {
    B();
  }, G = () => {
    M(z());
  }, X = () => {
    J(c, !d(c)), H.set(d(c)), P.set(d(c)), A.set(d(c));
  };
  he(
    () => (o(), i(), a()),
    () => {
      J(c, o() || i() || a());
    }
  ), he(() => (s(), l()), () => {
    J(f, s().zoom <= l());
  }), he(() => (s(), u()), () => {
    J(v, s().zoom >= u());
  }), he(() => te(T()), () => {
    J(g, T() === "horizontal" ? "horizontal" : "vertical");
  }), wt(), Ze();
  const ye = /* @__PURE__ */ xe(() => Nt([
    "svelte-flow__controls",
    d(g),
    q()
  ])), oe = /* @__PURE__ */ xe(() => S() ?? "Svelte Flow controls");
  Do(e, {
    get class() {
      return d(ye);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return d(oe);
    },
    get style() {
      return O();
    },
    children: (le, Ee) => {
      var we = H2(), He = be(we);
      $t(He, t, "before", {});
      var ce = I(He, 2);
      {
        var Q = (de) => {
          var fe = P2(), Ce = be(fe);
          so(Ce, lt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return d(v);
              }
            },
            Y,
            {
              $$events: { click: W },
              children: (at, U) => {
                ad(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var nt = I(Ce, 2);
          so(nt, lt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return d(f);
              }
            },
            Y,
            {
              $$events: { click: ee },
              children: (at, U) => {
                sd(at);
              },
              $$slots: { default: !0 }
            }
          )), D(de, fe);
        };
        me(ce, (de) => {
          x() && de(Q);
        });
      }
      var Ve = I(ce, 2);
      {
        var j = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: G },
              children: (fe, Ce) => {
                ld(fe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        me(Ve, (de) => {
          b() && de(j);
        });
      }
      var $e = I(Ve, 2);
      {
        var Ne = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: X },
              children: (fe, Ce) => {
                var nt = Qe(), at = be(nt);
                {
                  var U = (ae) => {
                    cd(ae);
                  }, ze = (ae) => {
                    ud(ae);
                  };
                  me(at, (ae) => {
                    d(c) ? ae(U) : ae(ze, !1);
                  });
                }
                D(fe, nt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        me($e, (de) => {
          $() && de(Ne);
        });
      }
      var Le = I($e, 2);
      $t(Le, t, "default", {});
      var se = I(Le, 2);
      $t(se, t, "after", {}), D(le, we);
    },
    $$slots: { default: !0 }
  });
  var pe = ge({
    get position() {
      return h();
    },
    set position(le) {
      h(le), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(le) {
      x(le), m();
    },
    get showFitView() {
      return b();
    },
    set showFitView(le) {
      b(le), m();
    },
    get showLock() {
      return $();
    },
    set showLock(le) {
      $(le), m();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(le) {
      p(le), m();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(le) {
      C(le), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(le) {
      w(le), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(le) {
      k(le), m();
    },
    get buttonBorderColor() {
      return V();
    },
    set buttonBorderColor(le) {
      V(le), m();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(le) {
      S(le), m();
    },
    get style() {
      return O();
    },
    set style(le) {
      O(le), m();
    },
    get orientation() {
      return T();
    },
    set orientation(le) {
      T(le), m();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(le) {
      z(le), m();
    },
    get class() {
      return q();
    },
    set class(le) {
      q(le), m();
    }
  });
  return r(), pe;
}
ue(
  dd,
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
var N2 = /* @__PURE__ */ Me("<circle></circle>");
function fd(e, t) {
  ve(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ze();
  var o = N2();
  return ke(
    (i) => {
      _e(o, "cx", n()), _e(o, "cy", n()), _e(o, "r", n()), Ct(o, 0, i);
    },
    [
      () => gn(Nt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    xe
  ), D(e, o), ge({
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
ue(fd, { radius: {}, class: {} }, [], [], !0);
var O2 = /* @__PURE__ */ Me("<path></path>");
function vd(e, t) {
  ve(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ze();
  var a = O2();
  return ke(
    (s) => {
      _e(a, "stroke-width", n()), _e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(a, 0, s);
    },
    [
      () => gn(Nt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    xe
  ), D(e, a), ge({
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
ue(
  vd,
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
const T2 = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var L2 = /* @__PURE__ */ Me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const D2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function gd(e, t) {
  ve(t, !1), Je(e, D2);
  const [n, r] = ot(), o = () => ne(k, "$flowId", n), i = () => ne(w, "$viewport", n), a = /* @__PURE__ */ ie(), s = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let f = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => jn.Dots), g = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), p = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Xe(), V = h() || T2[v()], S = v() === jn.Dots, O = v() === jn.Cross, T = Array.isArray(g()) ? g() : [g(), g()];
  he(
    () => (o(), te(f())),
    () => {
      J(a, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), he(() => i(), () => {
    J(s, [
      T[0] * i().zoom || 1,
      T[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    J(l, V * i().zoom);
  }), he(() => (d(l), d(s)), () => {
    J(u, O ? [d(l), d(l)] : d(s));
  }), he(
    () => (d(l), d(u)),
    () => {
      J(c, S ? [
        d(l) / 2,
        d(l) / 2
      ] : [
        d(u)[0] / 2,
        d(u)[1] / 2
      ]);
    }
  ), wt(), Ze();
  var z = L2();
  let q;
  var L = R(z), B = R(L);
  {
    var M = (H) => {
      const P = /* @__PURE__ */ xe(() => d(l) / 2);
      fd(H, {
        get radius() {
          return d(P);
        },
        get class() {
          return p();
        }
      });
    }, _ = (H) => {
      vd(H, {
        get dimensions() {
          return d(u);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return p();
        }
      });
    };
    me(B, (H) => {
      S ? H(M) : H(_, !1);
    });
  }
  Z(L);
  var E = I(L);
  Z(z), ke(
    (H) => {
      Ct(z, 0, H, "svelte-1r7pe8d"), q = vt(z, "", q, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), _e(L, "id", d(a)), _e(L, "x", i().x % d(s)[0]), _e(L, "y", i().y % d(s)[1]), _e(L, "width", d(s)[0]), _e(L, "height", d(s)[1]), _e(L, "patternTransform", `translate(-${d(c)[0]},-${d(c)[1]})`), _e(E, "fill", `url(#${d(a)})`);
    },
    [
      () => gn(Nt(["svelte-flow__background", C()]))
    ],
    xe
  ), D(e, z);
  var N = ge({
    get id() {
      return f();
    },
    set id(H) {
      f(H), m();
    },
    get variant() {
      return v();
    },
    set variant(H) {
      v(H), m();
    },
    get gap() {
      return g();
    },
    set gap(H) {
      g(H), m();
    },
    get size() {
      return h();
    },
    set size(H) {
      h(H), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(H) {
      x(H), m();
    },
    get bgColor() {
      return b();
    },
    set bgColor(H) {
      b(H), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(H) {
      $(H), m();
    },
    get patternClass() {
      return p();
    },
    set patternClass(H) {
      p(H), m();
    },
    get class() {
      return C();
    },
    set class(H) {
      C(H), m();
    }
  });
  return r(), N;
}
ue(
  gd,
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
var z2 = /* @__PURE__ */ Me("<rect></rect>");
function pd(e, t) {
  ve(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), f = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ze();
  var g = z2();
  let h;
  return ke(
    (x, b) => {
      h = Ct(g, 0, x, null, h, b), _e(g, "x", n()), _e(g, "y", r()), _e(g, "rx", a()), _e(g, "ry", a()), _e(g, "width", o()), _e(g, "height", i()), vt(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), _e(g, "shape-rendering", l());
    },
    [
      () => gn(Nt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: f() })
    ],
    xe
  ), D(e, g), ge({
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
      return f();
    },
    set selected(x) {
      f(x), m();
    },
    get class() {
      return v();
    },
    set class(x) {
      v(x), m();
    }
  });
}
ue(
  pd,
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
function Al(e, t) {
  const n = x0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = F(t.viewport);
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
const ha = (e) => e instanceof Function ? e : () => e;
var A2 = /* @__PURE__ */ Me("<title> </title>"), I2 = /* @__PURE__ */ Me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function hd(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(Ve, "$flowId", n), i = () => ne(He, "$viewport", n), a = () => ne(ce, "$containerWidth", n), s = () => ne(Q, "$containerHeight", n), l = () => ne(we, "$nodeLookup", n), u = () => ne(Ee, "$nodes", n), c = () => ne(j, "$panZoom", n), f = () => ne($e, "$translateExtent", n), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), w = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie();
  let T = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), q = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), B = y(t, "nodeClass", 12, ""), M = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), E = y(t, "bgColor", 12, void 0), N = y(t, "maskColor", 12, void 0), H = y(t, "maskStrokeColor", 12, void 0), P = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), Y = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), ee = y(t, "zoomable", 12, !0), G = y(t, "inversePan", 12, void 0), X = y(t, "zoomStep", 12, void 0), ye = y(t, "style", 12, ""), oe = y(t, "class", 12, "");
  const pe = 200, le = 150, {
    nodes: Ee,
    nodeLookup: we,
    viewport: He,
    width: ce,
    height: Q,
    flowId: Ve,
    panZoom: j,
    translateExtent: $e
  } = Xe(), Ne = L() === void 0 ? void 0 : ha(L()), Le = ha(q()), se = ha(B()), de = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), fe = `svelte-flow__minimap-desc-${o()}`;
  let Ce = /* @__PURE__ */ ie(d(v));
  const nt = () => d($);
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
    () => (l(), d(v), u()),
    () => {
      J(Ce, l().size > 0 ? pc(Oo(l(), { filter: (ae) => !ae.hidden }), d(v)) : d(v)), u();
    }
  ), he(() => te(A()), () => {
    J(g, A() ?? pe);
  }), he(() => te(Y()), () => {
    J(h, Y() ?? le);
  }), he(
    () => (d(Ce), d(g)),
    () => {
      J(x, d(Ce).width / d(g));
    }
  ), he(
    () => (d(Ce), d(h)),
    () => {
      J(b, d(Ce).height / d(h));
    }
  ), he(
    () => (d(x), d(b)),
    () => {
      J($, Math.max(d(x), d(b)));
    }
  ), he(() => (d($), d(g)), () => {
    J(p, d($) * d(g));
  }), he(
    () => (d($), d(h)),
    () => {
      J(C, d($) * d(h));
    }
  ), he(() => d($), () => {
    J(w, 5 * d($));
  }), he(
    () => (d(Ce), d(p), d(w)),
    () => {
      J(k, d(Ce).x - (d(p) - d(Ce).width) / 2 - d(w));
    }
  ), he(
    () => (d(Ce), d(C), d(w)),
    () => {
      J(V, d(Ce).y - (d(C) - d(Ce).height) / 2 - d(w));
    }
  ), he(() => (d(p), d(w)), () => {
    J(S, d(p) + d(w) * 2);
  }), he(() => (d(C), d(w)), () => {
    J(O, d(C) + d(w) * 2);
  }), wt(), Ze();
  const at = /* @__PURE__ */ xe(() => ye() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), U = /* @__PURE__ */ xe(() => Nt(["svelte-flow__minimap", oe()]));
  Do(e, {
    get position() {
      return T();
    },
    get style() {
      return d(at);
    },
    get class() {
      return d(U);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ae, _t) => {
      var kt = Qe(), Ot = be(kt);
      {
        var Ae = (et) => {
          var Ie = I2();
          _e(Ie, "aria-labelledby", fe);
          let qe;
          var je = R(Ie);
          {
            var yt = (St) => {
              var Tt = A2();
              _e(Tt, "id", fe);
              var wr = R(Tt, !0);
              Z(Tt), ke(() => ct(wr, z())), D(St, Tt);
            };
            me(je, (St) => {
              z() && St(yt);
            });
          }
          var Gt = I(je);
          Ht(Gt, 1, u, (St) => St.id, (St, Tt) => {
            var wr = Qe();
            const it = /* @__PURE__ */ xe(() => l().get(d(Tt).id));
            var ra = be(wr);
            {
              var Jr = (Zt) => {
                const qo = /* @__PURE__ */ xe(() => tr(d(it))), Bo = /* @__PURE__ */ xe(() => Ne == null ? void 0 : Ne(d(it))), Zo = /* @__PURE__ */ xe(() => Le(d(it))), oa = /* @__PURE__ */ xe(() => se(d(it)));
                pd(Zt, lt(
                  {
                    get x() {
                      return d(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return d(it).internals.positionAbsolute.y;
                    }
                  },
                  () => d(qo),
                  {
                    get selected() {
                      return d(it).selected;
                    },
                    get color() {
                      return d(Bo);
                    },
                    get borderRadius() {
                      return M();
                    },
                    get strokeColor() {
                      return d(Zo);
                    },
                    get strokeWidth() {
                      return _();
                    },
                    shapeRendering: de,
                    get class() {
                      return d(oa);
                    }
                  }
                ));
              };
              me(ra, (Zt) => {
                d(it) && hc(d(it)) && Zt(Jr);
              });
            }
            D(St, wr);
          });
          var Ur = I(Gt);
          Z(Ie), xt(Ie, (St, Tt) => Al == null ? void 0 : Al(St, Tt), () => ({
            panZoom: c(),
            viewport: He,
            getViewScale: nt,
            translateExtent: f(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: X(),
            pannable: W(),
            zoomable: ee()
          })), ke(() => {
            _e(Ie, "width", d(g)), _e(Ie, "height", d(h)), _e(Ie, "viewBox", `${d(k) ?? ""} ${d(V) ?? ""} ${d(S) ?? ""} ${d(O) ?? ""}`), qe = vt(Ie, "", qe, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": H(),
              "--xy-minimap-mask-stroke-width-props": P() ? P() * d($) : void 0
            }), _e(Ur, "d", `M${d(k) - d(w)},${d(V) - d(w)}h${d(S) + d(w) * 2}v${d(O) + d(w) * 2}h${-d(S) - d(w) * 2}z
      M${d(v).x ?? ""},${d(v).y ?? ""}h${d(v).width ?? ""}v${d(v).height ?? ""}h${-d(v).width}z`);
          }), D(et, Ie);
        };
        me(Ot, (et) => {
          c() && et(Ae);
        });
      }
      D(ae, kt);
    },
    $$slots: { default: !0 }
  });
  var ze = ge({
    get position() {
      return T();
    },
    set position(ae) {
      T(ae), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(ae) {
      z(ae), m();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(ae) {
      q(ae), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(ae) {
      L(ae), m();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(ae) {
      B(ae), m();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(ae) {
      M(ae), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(ae) {
      _(ae), m();
    },
    get bgColor() {
      return E();
    },
    set bgColor(ae) {
      E(ae), m();
    },
    get maskColor() {
      return N();
    },
    set maskColor(ae) {
      N(ae), m();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(ae) {
      H(ae), m();
    },
    get maskStrokeWidth() {
      return P();
    },
    set maskStrokeWidth(ae) {
      P(ae), m();
    },
    get width() {
      return A();
    },
    set width(ae) {
      A(ae), m();
    },
    get height() {
      return Y();
    },
    set height(ae) {
      Y(ae), m();
    },
    get pannable() {
      return W();
    },
    set pannable(ae) {
      W(ae), m();
    },
    get zoomable() {
      return ee();
    },
    set zoomable(ae) {
      ee(ae), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(ae) {
      G(ae), m();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(ae) {
      X(ae), m();
    },
    get style() {
      return ye();
    },
    set style(ae) {
      ye(ae), m();
    },
    get class() {
      return oe();
    },
    set class(ae) {
      oe(ae), m();
    }
  });
  return r(), ze;
}
ue(
  hd,
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
const Il = (e) => Th(e);
function Bt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: v, domNode: g, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = Xe(), p = (k) => {
    var V, S;
    const O = F(h), T = Il(k) ? k : O.get(k.id), z = T.parentId ? Zh(T.position, T.measured, T.parentId, O, F(x)) : T.position, q = {
      ...T,
      position: z,
      width: ((V = T.measured) == null ? void 0 : V.width) ?? T.width,
      height: ((S = T.measured) == null ? void 0 : S.height) ?? T.height
    };
    return qr(q);
  }, C = (k, V, S = { replace: !1 }) => {
    var O;
    const T = (O = F(h).get(k)) == null ? void 0 : O.internals.userNode;
    if (!T)
      return;
    const z = typeof V == "function" ? V(T) : V;
    S.replace ? f.update((q) => q.map((L) => L.id === k ? Il(z) ? z : { ...L, ...z } : L)) : (Object.assign(T, z), f.update((q) => q));
  }, w = (k) => F(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var V;
      return (V = w(k)) == null ? void 0 : V.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(f) : ql(F(h), k),
    getEdge: (k) => F(b).get(k),
    getEdges: (k) => k === void 0 ? F(v) : ql(F(b), k),
    setZoom: (k, V) => {
      const S = F(c);
      return S ? S.scaleTo(k, { duration: V == null ? void 0 : V.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, V) => {
      const S = F(i), O = F(c);
      return O ? (await O.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, V, S) => {
      const O = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : F(u), T = F(c);
      return T ? (await T.setViewport({
        x: F(a) / 2 - k * O,
        y: F(s) / 2 - V * O,
        zoom: O
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, V) => {
      const S = F(c);
      if (!S)
        return Promise.resolve(!1);
      const O = ws(k, F(a), F(s), F(l), F(u), (V == null ? void 0 : V.padding) ?? 0.1);
      return await S.setViewport(O, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, V = !0, S) => {
      const O = xl(k), T = O ? k : p(k);
      return T ? (S || F(f)).filter((z) => {
        const q = F(h).get(z.id);
        if (!q || !O && z.id === k.id)
          return !1;
        const L = qr(q), B = Co(L, T);
        return V && B > 0 || B >= T.width * T.height;
      }) : [];
    },
    isNodeIntersecting: (k, V, S = !0) => {
      const O = xl(k) ? k : p(k);
      if (!O)
        return !1;
      const T = Co(O, V);
      return S && T > 0 || T >= O.width * O.height;
    },
    deleteElements: async ({ nodes: k = [], edges: V = [] }) => {
      const { nodes: S, edges: O } = await fc({
        nodesToRemove: k,
        edgesToRemove: V,
        nodes: F(f),
        edges: F(v),
        onBeforeDelete: F(r)
      });
      return S && f.update((T) => T.filter((z) => !S.some(({ id: q }) => q === z.id))), O && v.update((T) => T.filter((z) => !O.some(({ id: q }) => q === z.id))), {
        deletedNodes: S,
        deletedEdges: O
      };
    },
    screenToFlowPosition: (k, V = { snapToGrid: !0 }) => {
      const S = F(g);
      if (!S)
        return k;
      const O = V.snapToGrid ? F(o) : !1, { x: T, y: z, zoom: q } = F(i), { x: L, y: B } = S.getBoundingClientRect(), M = {
        x: k.x - L,
        y: k.y - B
      };
      return To(M, [T, z, q], O !== null, O || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const V = F(g);
      if (!V)
        return k;
      const { x: S, y: O, zoom: T } = F(i), { x: z, y: q } = V.getBoundingClientRect(), L = Ci(k, [S, O, T]);
      return {
        x: L.x + z,
        y: L.y + q
      };
    },
    toObject: () => ({
      nodes: F(f).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: F(v).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: C,
    updateNodeData: (k, V, S) => {
      var O;
      const T = (O = F(h).get(k)) == null ? void 0 : O.internals.userNode;
      if (!T)
        return;
      const z = typeof V == "function" ? V(T) : V;
      T.data = S != null && S.replace ? z : { ...T.data, ...z }, f.update((q) => q);
    },
    getNodesBounds: (k) => {
      const V = F(h), S = F(x);
      return Lh(k, { nodeLookup: V, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: V, nodeId: S }) => {
      var O;
      return Array.from(((O = F($).get(`${S}-${k}-${V ?? null}`)) == null ? void 0 : O.values()) ?? []);
    },
    viewport: i
  };
}
function ql(e, t) {
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
var q2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function md(e, t) {
  ve(t, !1);
  const [n, r] = ot(), o = () => ne(C, "$nodes", n), i = () => ne(p, "$nodeLookup", n), a = () => ne($, "$viewport", n), s = () => ne(b, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let f = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: p, nodes: C } = Xe(), { getNodesBounds: w } = Bt(), k = ur("svelteflow__node_id");
  let V = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie([]), O = h() !== void 0 ? h() : 10, T = v() !== void 0 ? v() : Te.Top, z = g() !== void 0 ? g() : "center";
  he(
    () => (o(), te(f()), i()),
    () => {
      o();
      const _ = Array.isArray(f()) ? f() : [f() || k];
      J(S, _.reduce(
        (E, N) => {
          const H = i().get(N);
          return H && E.push(H), E;
        },
        []
      ));
    }
  ), he(
    () => (d(S), a()),
    () => {
      const _ = w(d(S));
      _ && J(V, o0(_, a(), T, O, z));
    }
  ), he(() => d(S), () => {
    J(l, d(S).length === 0 ? 1 : Math.max(...d(S).map((_) => (_.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    J(u, o().filter((_) => _.selected).length);
  }), he(
    () => (te(x()), d(S), d(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : d(S).length === 1 && d(S)[0].selected && d(u) === 1);
    }
  ), wt(), Ze();
  var q = Qe(), L = be(q);
  {
    var B = (_) => {
      var E = q2();
      let N;
      var H = R(E);
      $t(H, t, "default", {}), Z(E), xt(E, (P, A) => Ei == null ? void 0 : Ei(P, A), () => ({ domNode: s() })), ke(
        (P) => {
          _e(E, "data-id", P), N = vt(E, "", N, {
            position: "absolute",
            transform: d(V),
            "z-index": d(l)
          });
        },
        [
          () => d(S).reduce((P, A) => `${P}${A.id} `, "").trim()
        ],
        xe
      ), D(_, E);
    };
    me(L, (_) => {
      s() && d(c) && d(S) && _(B);
    });
  }
  D(e, q);
  var M = ge({
    get nodeId() {
      return f();
    },
    set nodeId(_) {
      f(_), m();
    },
    get position() {
      return v();
    },
    set position(_) {
      v(_), m();
    },
    get align() {
      return g();
    },
    set align(_) {
      g(_), m();
    },
    get offset() {
      return h();
    },
    set offset(_) {
      h(_), m();
    },
    get isVisible() {
      return x();
    },
    set isVisible(_) {
      x(_), m();
    }
  });
  return r(), M;
}
ue(
  md,
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
function yr(e) {
  const { nodes: t, nodeLookup: n } = Xe();
  let r = [], o = !0;
  return Wn([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const f of c) {
      const v = (s = i.get(f)) == null ? void 0 : s.internals.userNode;
      v && l.push({
        id: v.id,
        type: v.type,
        data: v.data
      });
    }
    (!f0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Bl = "tinyflow-component";
class B2 {
  constructor(t) {
    if (zt(this, "options"), zt(this, "rootEl"), zt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Bl);
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
    const n = document.createElement(Bl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Z2 = () => {
  const e = Se([]), t = Se([]), n = Se({ x: 250, y: 100, zoom: 1 });
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
}, oi = Z2();
var R2 = /* @__PURE__ */ re("<button><!></button>");
function We(e, t) {
  ve(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = R2();
  let a;
  var s = R(i);
  return cr(s, () => n() ?? ht), Z(i), ke(() => a = jt(i, a, {
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  })), D(e, i), ge({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), m();
    }
  });
}
ue(We, { children: {}, primary: {} }, [], [], !0);
var Y2 = /* @__PURE__ */ re("<input>");
function yd(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Y2();
  Tn(r);
  let o;
  ke(() => o = jt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ge();
}
ue(yd, {}, [], [], !0);
var K2 = /* @__PURE__ */ re('<div><input type="hidden"> <!> <!></div>');
const W2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function wd(e, t) {
  ve(t, !0), Je(e, W2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), a = y(t, "onChosen", 7), s = /* @__PURE__ */ bt(t, [
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
  var l = K2();
  let u;
  var c = R(l);
  Tn(c);
  var f = I(c, 2);
  gt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var v = I(f, 2);
  return We(v, {
    onclick: (g) => {
      var h;
      (h = a()) == null || h(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, h) => {
      Oe();
      var x = Be();
      ke(() => ct(x, i())), D(g, x);
    },
    $$slots: { default: !0 }
  }), Z(l), ke(() => {
    u = jt(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), Uo(c, o());
  }), D(e, l), ge({
    get placeholder() {
      return n();
    },
    set placeholder(g) {
      n(g), m();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), m();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), m();
    },
    get onChosen() {
      return a();
    },
    set onChosen(g) {
      a(g), m();
    }
  });
}
ue(
  wd,
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
var X2 = /* @__PURE__ */ re("<input>");
function gt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = X2();
  Tn(r);
  let o;
  ke(() => o = jt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ge();
}
ue(gt, {}, [], [], !0);
var j2 = /* @__PURE__ */ re("<textarea></textarea>");
function ft(e, t) {
  ve(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = j2();
  Mf(o);
  let i;
  return ke(() => i = jt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), ge({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ue(ft, { value: {} }, [], [], !0);
var F2 = /* @__PURE__ */ re('<div role="button"><!></div>'), G2 = /* @__PURE__ */ re("<div></div>");
function bd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  ve(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, f) {
    var v;
    a(f), (v = i()) == null || v(c, f);
  }
  Ze();
  var l = G2();
  let u;
  return Ht(l, 5, o, Lr, (c, f, v) => {
    var g = F2();
    _e(g, "tabindex", v), g.__click = () => s(d(f), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(d(f), v));
    };
    var h = R(g);
    {
      var x = ($) => {
        var p = Be();
        ke(() => ct(p, d(f).label)), D($, p);
      }, b = ($) => {
        var p = Qe(), C = be(p);
        cr(C, () => d(f).label ?? ht), D($, p);
      };
      me(h, ($) => {
        typeof d(f).label == "string" ? $(x) : $(b, !1);
      });
    }
    Z(g), ke(() => Ct(g, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), D(c, g);
  }), Z(l), ke(() => u = jt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), ge({
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
jr(["click", "keydown"]);
ue(bd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var U2 = (e, t, n) => t(d(n)), J2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(d(n)));
}, Q2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), em = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), tm = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), nm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), rm = /* @__PURE__ */ re("<div></div>");
const om = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function xd(e, t) {
  ve(t, !0), Je(e, om);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => ln([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = rm();
  return Ht(a, 21, n, Lr, (s, l, u) => {
    var c = nm(), f = R(c);
    _e(f, "tabindex", u), f.__click = [U2, i, l], f.__keydown = [J2, i, l];
    var v = R(f);
    {
      var g = (w) => {
        var k = Q2(), V = R(k);
        Yn(V, {
          get target() {
            return d(l).icon;
          }
        }), Z(k), D(w, k);
      };
      me(v, (w) => {
        d(l).icon && w(g);
      });
    }
    var h = I(v, 2);
    Yn(h, {
      get target() {
        return d(l).title;
      }
    });
    var x = I(h, 2);
    Z(f);
    var b = I(f, 2);
    {
      var $ = (w) => {
        var k = em(), V = R(k);
        Yn(V, {
          get target() {
            return d(l).description;
          }
        }), Z(k), D(w, k);
      };
      me(b, (w) => {
        d(l).description && w($);
      });
    }
    var p = I(b, 2);
    {
      var C = (w) => {
        var k = tm(), V = R(k);
        Yn(V, {
          get target() {
            return d(l).content;
          }
        }), Z(k), D(w, k);
      };
      me(p, (w) => {
        o().includes(d(l).key) && w(C);
      });
    }
    Z(c), ke((w) => Ct(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(d(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), Z(a), ke(() => {
    vt(a, t.style), Ct(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, a), ge({
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
jr(["click", "keydown"]);
ue(xd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  ve(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Qe(), o = be(r);
  {
    var i = (s) => {
      var l = Qe(), u = be(l);
      cr(u, () => n() ?? ht), D(s, l);
    }, a = (s) => {
      var l = Qe(), u = be(l);
      ls(u, n), D(s, l);
    };
    me(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return D(e, r), ge({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ue(Yn, { target: {} }, [], [], !0);
var im = (e, t, n) => t(d(n)), am = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), sm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), lm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), um = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), cm = /* @__PURE__ */ re("<!> <!>", 1), dm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), fm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), vm = /* @__PURE__ */ re("<div><!></div>");
function rn(e, t) {
  ve(t, !0);
  const n = (p, C = ht) => {
    var w = Qe(), k = be(w);
    Ht(k, 19, C, (V, S) => `${S}_${V.value}`, (V, S) => {
      var O = lm(), T = be(O);
      T.__click = [im, h, S];
      var z = R(T), q = R(z);
      {
        var L = (E) => {
          var N = am();
          D(E, N);
        };
        me(q, (E) => {
          d(S).children && d(S).children.length > 0 && E(L);
        });
      }
      Z(z);
      var B = I(z, 2);
      Yn(B, {
        get target() {
          return d(S).label;
        }
      }), Z(T);
      var M = I(T, 2);
      {
        var _ = (E) => {
          var N = sm(), H = R(N);
          n(H, () => d(S).children), Z(N), D(E, N);
        };
        me(M, (E) => {
          d(S).children && d(S).children.length > 0 && (s() || u().includes(d(S).value)) && E(_);
        });
      }
      D(V, O);
    }), D(p, w);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), s = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), c = y(t, "placeholder", 7), f = /* @__PURE__ */ bt(t, [
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
  ]), v = /* @__PURE__ */ Pe(() => {
    const p = [], C = (w) => {
      for (let k of w)
        i().length > 0 ? i().includes(k.value) && p.push(k) : a().includes(k.value) && p.push(k), k.children && k.children.length > 0 && C(k.children);
    };
    return C(r()), p;
  }), g;
  function h(p) {
    var C;
    g == null || g.hide(), (C = o()) == null || C(p);
  }
  var x = vm();
  let b;
  var $ = R(x);
  return _n(
    Gr($, {
      floating: (p) => {
        var C = um(), w = R(C);
        n(w, r), Z(C), D(p, C);
      },
      children: (p, C) => {
        var w = fm();
        let k;
        var V = R(w);
        Ht(
          V,
          23,
          () => d(v),
          (S, O) => `${O}_${S.value}`,
          (S, O, T) => {
            var z = Qe(), q = be(z);
            {
              var L = (M) => {
                var _ = Qe(), E = be(_);
                {
                  var N = (H) => {
                    Yn(H, {
                      get target() {
                        return d(O).label;
                      }
                    });
                  };
                  me(E, (H) => {
                    d(T) === 0 && H(N);
                  });
                }
                D(M, _);
              }, B = (M) => {
                var _ = cm(), E = be(_);
                Yn(E, {
                  get target() {
                    return d(O).label;
                  }
                });
                var N = I(E, 2);
                {
                  var H = (P) => {
                    var A = Be(",");
                    D(P, A);
                  };
                  me(N, (P) => {
                    d(T) < d(v).length - 1 && P(H);
                  });
                }
                D(M, _);
              };
              me(q, (M) => {
                l() ? M(B, !1) : M(L);
              });
            }
            D(S, z);
          },
          (S) => {
            var O = dm(), T = R(O, !0);
            Z(O), ke(() => ct(T, c())), D(S, O);
          }
        ), Z(V), Oe(2), Z(w), ke(() => k = jt(w, k, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D(p, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => g = p,
    () => g
  ), Z(x), ke(() => b = jt(x, b, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, x), ge({
    get items() {
      return r();
    },
    set items(p) {
      r(p), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(p) {
      o(p), m();
    },
    get value() {
      return i();
    },
    set value(p = []) {
      i(p), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(p = []) {
      a(p), m();
    },
    get expandAll() {
      return s();
    },
    set expandAll(p = !0) {
      s(p), m();
    },
    get multiple() {
      return l();
    },
    set multiple(p = !1) {
      l(p), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(p = []) {
      u(p), m();
    },
    get placeholder() {
      return c();
    },
    set placeholder(p) {
      c(p), m();
    }
  });
}
jr(["click"]);
ue(
  rn,
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
const ko = Math.min, Vr = Math.max, Pi = Math.round, wn = (e) => ({
  x: e,
  y: e
}), gm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pm = {
  start: "end",
  end: "start"
};
function Ba(e, t, n) {
  return Vr(e, ko(t, n));
}
function zo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function $d(e) {
  return e === "x" ? "y" : "x";
}
function _s(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function ks(e) {
  return $d(lr(e));
}
function hm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ks(e), i = _s(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Hi(a)), [a, Hi(a)];
}
function mm(e) {
  const t = Hi(e);
  return [Za(e), t, Za(t)];
}
function Za(e) {
  return e.replace(/start|end/g, (t) => pm[t]);
}
function ym(e, t, n) {
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
function wm(e, t, n, r) {
  const o = Ao(e);
  let i = ym(gr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Za)))), i;
}
function Hi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gm[t]);
}
function bm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Cd(e) {
  return typeof e != "number" ? bm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ni(e) {
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
  const i = lr(t), a = ks(t), s = _s(a), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
      g[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      g[a] += v * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const xm = async (e, t, n) => {
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
    y: f
  } = Zl(u, r, l), v = r, g = {}, h = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: p,
      y: C,
      data: w,
      reset: k
    } = await $({
      x: c,
      y: f,
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
    c = p ?? c, f = C ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: f
    } = Zl(u, v, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function _d(e, t) {
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
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = zo(t, e), h = Cd(g), x = s[v ? f === "floating" ? "reference" : "floating" : f], b = Ni(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(p)) ? await (i.getScale == null ? void 0 : i.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: p,
    strategy: l
  }) : $);
  return {
    top: (b.top - w.top + h.top) / C.y,
    bottom: (w.bottom - b.bottom + h.bottom) / C.y,
    left: (b.left - w.left + h.left) / C.x,
    right: (w.right - b.right + h.right) / C.x
  };
}
const $m = (e) => ({
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
    const f = Cd(c), v = {
      x: n,
      y: r
    }, g = ks(o), h = _s(g), x = await a.getDimensions(u), b = g === "y", $ = b ? "top" : "left", p = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[g] - v[g] - i.floating[h], k = v[g] - i.reference[g], V = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = V ? V[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(V))) && (S = s.floating[C] || i.floating[h]);
    const O = w / 2 - k / 2, T = S / 2 - x[h] / 2 - 1, z = ko(f[$], T), q = ko(f[p], T), L = z, B = S - x[h] - q, M = S / 2 - x[h] / 2 + O, _ = Ba(L, M, B), E = !l.arrow && Ao(o) != null && M !== _ && i.reference[h] / 2 - (M < L ? z : q) - x[h] / 2 < 0, N = E ? M < L ? M - L : M - B : 0;
    return {
      [g]: v[g] + N,
      data: {
        [g]: _,
        centerOffset: M - _ - N,
        ...E && {
          alignmentOffset: N
        }
      },
      reset: E
    };
  }
}), Cm = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: x = !0,
        ...b
      } = zo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gr(o), p = lr(s), C = gr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Hi(s)] : mm(s)), V = h !== "none";
      !v && V && k.push(...wm(s, x, h, w));
      const S = [s, ...k], O = await _d(t, b), T = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && T.push(O[$]), f) {
        const _ = hm(o, a, w);
        T.push(O[_[0]], O[_[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: T
      }], !T.every((_) => _ <= 0)) {
        var q, L;
        const _ = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, E = S[_];
        if (E) {
          var B;
          const H = f === "alignment" ? p !== lr(E) : !1, P = ((B = z[0]) == null ? void 0 : B.overflows[0]) > 0;
          if (!H || P)
            return {
              data: {
                index: _,
                overflows: z
              },
              reset: {
                placement: E
              }
            };
        }
        let N = (L = z.filter((H) => H.overflows[0] <= 0).sort((H, P) => H.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var M;
              const H = (M = z.filter((P) => {
                if (V) {
                  const A = lr(P.placement);
                  return A === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((P, A) => P[1] - A[1])[0]) == null ? void 0 : M[0];
              H && (N = H);
              break;
            }
            case "initialPlacement":
              N = s;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function _m(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = gr(n), s = Ao(n), l = lr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, f = zo(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof h == "number" && (g = s === "end" ? h * -1 : h), l ? {
    x: g * c,
    y: v * u
  } : {
    x: v * u,
    y: g * c
  };
}
const km = function(e) {
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
      } = t, l = await _m(t, e);
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
}, Sm = function(e) {
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
              y: p
            } = b;
            return {
              x: $,
              y: p
            };
          }
        },
        ...l
      } = zo(e, t), u = {
        x: n,
        y: r
      }, c = await _d(t, l), f = lr(gr(o)), v = $d(f);
      let g = u[v], h = u[f];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", p = g + c[b], C = g - c[$];
        g = Ba(p, g, C);
      }
      if (a) {
        const b = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", p = h + c[b], C = h - c[$];
        h = Ba(p, h, C);
      }
      const x = s.fn({
        ...t,
        [v]: g,
        [f]: h
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: i,
            [f]: a
          }
        }
      };
    }
  };
};
function Qi() {
  return typeof window < "u";
}
function Fr(e) {
  return kd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (kd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function kd(e) {
  return Qi() ? e instanceof Node || e instanceof Xt(e).Node : !1;
}
function fn(e) {
  return Qi() ? e instanceof Element || e instanceof Xt(e).Element : !1;
}
function kn(e) {
  return Qi() ? e instanceof HTMLElement || e instanceof Xt(e).HTMLElement : !1;
}
function Rl(e) {
  return !Qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function Io(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Em(e) {
  return ["table", "td", "th"].includes(Fr(e));
}
function ea(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ss(e) {
  const t = Es(), n = fn(e) ? vn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Mm(e) {
  let t = Jn(e);
  for (; kn(t) && !Zr(t); ) {
    if (Ss(t))
      return t;
    if (ea(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function Es() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(Fr(e));
}
function vn(e) {
  return Xt(e).getComputedStyle(e);
}
function ta(e) {
  return fn(e) ? {
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
    Rl(e) && e.host || // Fallback.
    In(e)
  );
  return Rl(t) ? t.host : t;
}
function Sd(e) {
  const t = Jn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Io(t) ? t : Sd(t);
}
function Ed(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xt(o);
  return i ? (Ra(a), t.concat(a, a.visualViewport || [], Io(o) ? o : [], [])) : t.concat(o, Ed(o, []));
}
function Ra(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Md(e) {
  const t = vn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Pi(n) !== i || Pi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Vd(e) {
  return fn(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Vd(e);
  if (!kn(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Md(t);
  let a = (i ? Pi(n.width) : n.width) / r, s = (i ? Pi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Vm = /* @__PURE__ */ wn(0);
function Pd(e) {
  const t = Xt(e);
  return !Es() || !t.visualViewport ? Vm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Xt(e) ? !1 : t;
}
function So(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vd(e);
  let a = wn(1);
  t && (r ? fn(r) && (a = Pr(r)) : a = Pr(e));
  const s = Pm(i, n, r) ? Pd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, f = o.height / a.y;
  if (i) {
    const v = Xt(i), g = r && fn(r) ? Xt(r) : r;
    let h = v, x = Ra(h);
    for (; x && r && g !== h; ) {
      const b = Pr(x), $ = x.getBoundingClientRect(), p = vn(x), C = $.left + (x.clientLeft + parseFloat(p.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(p.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += C, u += w, h = Xt(x), x = Ra(h);
    }
  }
  return Ni({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function Ms(e, t) {
  const n = ta(e).scrollLeft;
  return t ? t.left + n : So(In(e)).left + n;
}
function Hd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ms(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Hm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = In(r), s = t ? ea(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), f = kn(r);
  if ((f || !f && !i) && ((Fr(r) !== "body" || Io(a)) && (l = ta(r)), kn(r))) {
    const g = So(r);
    u = Pr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const v = a && !f && !i ? Hd(a, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function Nm(e) {
  return Array.from(e.getClientRects());
}
function Om(e) {
  const t = In(e), n = ta(e), r = e.ownerDocument.body, o = Vr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Vr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ms(e);
  const s = -n.scrollTop;
  return vn(r).direction === "rtl" && (a += Vr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Tm(e, t) {
  const n = Xt(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Es();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Lm(e, t) {
  const n = So(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Pr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Yl(e, t, n) {
  let r;
  if (t === "viewport")
    r = Tm(e, n);
  else if (t === "document")
    r = Om(In(e));
  else if (fn(t))
    r = Lm(t, n);
  else {
    const o = Pd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ni(r);
}
function Nd(e, t) {
  const n = Jn(e);
  return n === t || !fn(n) || Zr(n) ? !1 : vn(n).position === "fixed" || Nd(n, t);
}
function Dm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ed(e, []).filter((s) => fn(s) && Fr(s) !== "body"), o = null;
  const i = vn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; fn(a) && !Zr(a); ) {
    const s = vn(a), l = Ss(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Nd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function zm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ea(t) ? [] : Dm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Yl(t, u, o);
    return l.top = Vr(c.top, l.top), l.right = ko(c.right, l.right), l.bottom = ko(c.bottom, l.bottom), l.left = Vr(c.left, l.left), l;
  }, Yl(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Am(e) {
  const {
    width: t,
    height: n
  } = Md(e);
  return {
    width: t,
    height: n
  };
}
function Im(e, t, n) {
  const r = kn(t), o = In(t), i = n === "fixed", a = So(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  function u() {
    l.x = Ms(o);
  }
  if (r || !r && !i)
    if ((Fr(t) !== "body" || Io(o)) && (s = ta(t)), r) {
      const g = So(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Hd(o, s) : wn(0), f = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
  return {
    x: f,
    y: v,
    width: a.width,
    height: a.height
  };
}
function ma(e) {
  return vn(e).position === "static";
}
function Kl(e, t) {
  if (!kn(e) || vn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function Od(e, t) {
  const n = Xt(e);
  if (ea(e))
    return n;
  if (!kn(e)) {
    let o = Jn(e);
    for (; o && !Zr(o); ) {
      if (fn(o) && !ma(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Kl(e, t);
  for (; r && Em(r) && ma(r); )
    r = Kl(r, t);
  return r && Zr(r) && ma(r) && !Ss(r) ? n : r || Mm(e) || n;
}
const qm = async function(e) {
  const t = this.getOffsetParent || Od, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Im(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Bm(e) {
  return vn(e).direction === "rtl";
}
const Zm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hm,
  getDocumentElement: In,
  getClippingRect: zm,
  getOffsetParent: Od,
  getElementRects: qm,
  getClientRects: Nm,
  getDimensions: Am,
  getScale: Pr,
  isElement: fn,
  isRTL: Bm
}, Rm = km, Ym = Sm, Km = Cm, Wm = $m, Xm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return xm(e, t, {
    ...o,
    platform: i
  });
}, jm = ({
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
  function f() {
    Xm(e, u, {
      placement: r,
      middleware: [
        Rm(o),
        // 手动偏移配置
        Km(i),
        //自动翻转
        Ym(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Wm({ element: c })] : []
      ]
    }).then(({ x: $, y: p, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${p}px`
      }), l) {
        const { x: k, y: V } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: V != null ? `${V}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let v = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, f();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? h() : g();
  }
  function b($) {
    u.contains($.target) || h();
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
      h();
    },
    isVisible() {
      return v;
    }
  };
};
var Fm = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Gr(e, t) {
  ve(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  on(() => (s = jm({
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
  var u = Fm(), c = R(u), f = R(c);
  cr(f, n), Z(c), _n(c, (h) => i = h, () => i);
  var v = I(c, 2), g = R(v);
  return cr(g, r), Z(v), _n(v, (h) => a = h, () => a), Z(u), D(e, u), ge({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), m();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), m();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), m();
    }
  });
}
ue(Gr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ue(e, t) {
  ve(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Qe(), s = be(a);
  return zf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = jt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Qe(), v = be(f);
    cr(v, () => n() ?? ht), D(u, f);
  }), D(e, a), ge({
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
ue(Ue, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Gm = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Um = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function na(e, t) {
  ve(t, !0), Je(e, Um);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  We(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Gm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ge();
}
ue(na, {}, [], [], !0);
const Jm = () => {
  const e = Xe();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, pr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Qm = () => {
  const { nodes: e, nodeLookup: t } = Xe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = pr(), a = {
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
}, Qn = () => ur("tinyflow_options");
function mt() {
  return ur("svelteflow__node_id");
}
var ey = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ty = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ny = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ry = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), oy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, iy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, ay = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), sy = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"></label> <!></div>'), ly = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), uy = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), cy = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const dy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function hn(e, t) {
  ve(t, !0), Je(e, dy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), f = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Bt(), p = /* @__PURE__ */ Pe(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = Jm(), { copyNode: w } = Qm(), k = Qn(), V = () => {
    var P;
    (P = k.onNodeExecute) == null || P.call(k, $(r()));
  };
  let S = mt();
  var O = cy(), T = be(O);
  {
    var z = (P) => {
      md(P, {
        get position() {
          return Te.Top;
        },
        align: "end",
        children: (A, Y) => {
          var W = uy(), ee = R(W);
          {
            var G = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (He, ce) => {
                  var Q = ey();
                  D(He, Q);
                },
                $$slots: { default: !0 }
              });
            };
            me(ee, (we) => {
              u() && we(G);
            });
          }
          var X = I(ee, 2);
          {
            var ye = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (He, ce) => {
                  var Q = ty();
                  D(He, Q);
                },
                $$slots: { default: !0 }
              });
            };
            me(X, (we) => {
              l() && we(ye);
            });
          }
          var oe = I(X, 2);
          {
            var pe = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (He, ce) => {
                  var Q = ny();
                  D(He, Q);
                },
                $$slots: { default: !0 }
              });
            };
            me(oe, (we) => {
              s() && we(pe);
            });
          }
          var le = I(oe, 2);
          {
            var Ee = (we) => {
              Gr(we, {
                placement: "bottom",
                floating: (He) => {
                  var ce = sy(), Q = R(ce), Ve = I(R(Q));
                  gt(Ve, {
                    style: "width: 100%;",
                    onchange: (U) => {
                      const ze = U.target.value;
                      b(S, { title: ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(Q);
                  var j = I(Q, 2), $e = I(R(j));
                  ft($e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (U) => {
                      const ze = U.target.value;
                      b(S, { description: ze });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(j);
                  var Ne = I(j, 2);
                  {
                    var Le = (U) => {
                      var ze = ry(), ae = I(R(ze));
                      ft(ae, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (_t) => {
                          const kt = _t.target.value;
                          b(S, { condition: kt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(ze), D(U, ze);
                    };
                    me(Ne, (U) => {
                      f() && U(Le);
                    });
                  }
                  var se = I(Ne, 2), de = I(R(se), 2);
                  Tn(de), de.__change = [oy, b, S], Z(se);
                  var fe = I(se, 2), Ce = I(R(fe), 2);
                  Tn(Ce), Ce.__change = [iy, b, S], Z(fe);
                  var nt = I(fe, 2);
                  {
                    var at = (U) => {
                      var ze = ay(), ae = be(ze), _t = I(R(ae));
                      const kt = /* @__PURE__ */ Pe(() => n().loopIntervalMs || "1000");
                      ft(_t, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const yt = je.target.value;
                          b(S, { loopIntervalMs: yt });
                        },
                        get value() {
                          return d(kt);
                        }
                      }), Z(ae);
                      var Ot = I(ae, 2), Ae = I(R(Ot));
                      const et = /* @__PURE__ */ Pe(() => n().maxLoopCount || "0");
                      ft(Ae, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const yt = je.target.value;
                          b(S, { maxLoopCount: yt });
                        },
                        get value() {
                          return d(et);
                        }
                      }), Z(Ot);
                      var Ie = I(Ot, 2), qe = I(R(Ie));
                      ft(qe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const yt = je.target.value;
                          b(S, { loopBreakCondition: yt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(Ie), D(U, ze);
                    };
                    me(nt, (U) => {
                      n().loopEnable && U(at);
                    });
                  }
                  Z(ce), ke(() => {
                    js(de, !!n().async), js(Ce, !!n().loopEnable);
                  }), D(He, ce);
                },
                children: (He, ce) => {
                  We(He, {
                    class: "tf-node-toolbar-item",
                    children: (Q, Ve) => {
                      var j = ly();
                      D(Q, j);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            me(le, (we) => {
              c() && we(Ee);
            });
          }
          Z(W), D(A, W);
        },
        $$slots: { default: !0 }
      });
    };
    me(T, (P) => {
      (s() || l() || u()) && P(z);
    });
  }
  var q = I(T, 2), L = I(R(q), 2), B = R(L);
  xd(B, {
    get items() {
      return d(p);
    },
    activeKeys: x,
    onChange: (P, A) => {
      var Y;
      b(r(), { expand: A == null ? void 0 : A.includes("key") }), (Y = h()) == null || Y(A != null && A.includes("key") ? "key" : "");
    }
  }), Z(L), Z(q);
  var M = I(q, 2);
  {
    var _ = (P) => {
      Un(P, {
        type: "target",
        get position() {
          return Te.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    me(M, (P) => {
      g() && P(_);
    });
  }
  var E = I(M, 2);
  {
    var N = (P) => {
      Un(P, {
        type: "source",
        get position() {
          return Te.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    me(E, (P) => {
      v() && P(N);
    });
  }
  var H = I(E, 2);
  return cr(H, () => i() ?? ht), D(e, O), ge({
    get data() {
      return n();
    },
    set data(P) {
      n(P), m();
    },
    get id() {
      return r();
    },
    set id(P = "") {
      r(P), m();
    },
    get icon() {
      return o();
    },
    set icon(P) {
      o(P), m();
    },
    get handle() {
      return i();
    },
    set handle(P) {
      i(P), m();
    },
    get children() {
      return a();
    },
    set children(P) {
      a(P), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(P = !0) {
      s(P), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(P = !0) {
      l(P), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(P = !0) {
      u(P), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(P = !0) {
      c(P), m();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(P = !0) {
      f(P), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(P = !0) {
      v(P), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(P = !0) {
      g(P), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(P) {
      h(P), m();
    }
  });
}
jr(["change"]);
ue(
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
const Td = [
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
], fy = [
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
var vy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), gy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), py = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const hy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  ve(t, !0), Je(e, hy);
  const [n, r] = ot(), o = () => ne(d(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = mt(), l = /* @__PURE__ */ Pe(() => yr(s)), u = /* @__PURE__ */ Pe(() => {
    var T, z;
    return {
      ...i(),
      ...(z = (T = o()) == null ? void 0 : T.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Bt(), f = (T, z) => {
    c(s, (q) => {
      let L = q.data.parameters;
      return L[a()][T] = z, { parameters: L };
    });
  }, v = (T) => {
    const z = T.target.value;
    f("name", z);
  }, g = (T) => {
    const z = T.target.checked;
    f("required", z);
  }, h = (T) => {
    const z = T.value;
    z && f("dataType", z);
  };
  let x;
  const b = () => {
    c(s, (T) => {
      let z = T.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), x == null || x.hide();
  };
  var $ = py(), p = be($), C = R(p);
  gt(C, {
    style: "width: 100%;",
    get value() {
      return d(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(p);
  var w = I(p, 2), k = R(w);
  yd(k, {
    get checked() {
      return d(u).required;
    },
    onchange: g
  }), Z(w);
  var V = I(w, 2), S = R(V);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (T) => {
        var z = vy(), q = R(z), L = I(R(q));
        const B = /* @__PURE__ */ Pe(() => d(u).dataType ? [d(u).dataType] : ["String"]);
        rn(L, {
          items: Td,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return d(B);
          }
        }), Z(q);
        var M = I(q, 2), _ = I(R(M));
        ft(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return d(u).defaultValue;
          },
          onchange: (A) => {
            const Y = A.target.value;
            f("defaultValue", Y);
          }
        }), Z(M);
        var E = I(M, 2), N = I(R(E));
        ft(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return d(u).description;
          },
          onchange: (A) => {
            const Y = A.target.value;
            f("description", Y);
          }
        }), Z(E);
        var H = I(E, 2), P = R(H);
        We(P, {
          onclick: b,
          children: (A, Y) => {
            Oe();
            var W = Be("删除");
            D(A, W);
          },
          $$slots: { default: !0 }
        }), Z(H), Z(z), D(T, z);
      },
      children: (T, z) => {
        We(T, {
          class: "input-btn-more",
          children: (q, L) => {
            var B = gy();
            D(q, B);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), Z(V), D(e, $);
  var O = ge({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), m();
    },
    get index() {
      return a();
    },
    set index(T) {
      a(T), m();
    }
  });
  return r(), O;
}
ue(Ld, { parameter: {}, index: {} }, [], [], !0);
var my = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), yy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), wy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const by = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Dd(e, t) {
  ve(t, !0), Je(e, by);
  const [n, r] = ot(), o = () => ne(d(a), "$node", n);
  let i = mt(), a = /* @__PURE__ */ Pe(() => yr(i)), s = /* @__PURE__ */ Pe(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = wy(), u = R(l);
  {
    var c = (v) => {
      var g = my();
      Oe(4), D(v, g);
    };
    me(u, (v) => {
      d(s).length !== 0 && v(c);
    });
  }
  var f = I(u, 2);
  Ht(
    f,
    19,
    () => d(s),
    (v) => v.id,
    (v, g, h) => {
      Ld(v, {
        get parameter() {
          return d(g);
        },
        get index() {
          return d(h);
        }
      });
    },
    (v) => {
      var g = yy();
      D(v, g);
    }
  ), Z(l), D(e, l), ge(), r();
}
ue(Dd, {}, [], [], !0);
const Oi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = pr()), Oi(t.children);
}), e), Mn = () => {
  const { updateNodeData: e } = Bt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Oi(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: pr()
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
var xy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), $y = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const _y = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function zd(e, t) {
  ve(t, !0), Je(e, _y);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn();
  return hn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = xy();
      D(a, s);
    },
    children: (a, s) => {
      var l = Cy(), u = be(l), c = R(u);
      Ue(c, {
        level: 3,
        children: (g, h) => {
          Oe();
          var x = Be("输入参数");
          D(g, x);
        },
        $$slots: { default: !0 }
      });
      var f = I(c, 2);
      We(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var x = $y();
          D(g, x);
        },
        $$slots: { default: !0 }
      }), Z(u);
      var v = I(u, 2);
      Dd(v, {}), D(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(zd, { data: {} }, [], [], !0);
const Ad = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Ad(e, r.source, n));
}, Id = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Id(r.children, t + "." + r.name, n)
})), Wl = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r)
      for (const i of r)
        o.push({
          label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
          value: e.id + "." + i.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: o
    };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          {
            label: "loopItem",
            value: e.id + ".loopItem"
          },
          {
            label: "index (Number)",
            value: e.id + ".index"
          }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: Id(r, e.id, t)
        };
    }
  }
}, ky = (e = !1) => {
  const t = mt(), n = yr(t), { nodes: r, edges: o, nodeLookup: i } = Xe();
  return Wn(
    [n, r, o, i],
    ([a, s, l, u]) => {
      if (!a)
        return [];
      const c = u.get(t), f = [];
      if (e)
        for (const v of s) {
          const g = v.parentId === a.id;
          if (g) {
            const h = Wl(v, g, c);
            h && f.push(h);
          }
        }
      else {
        const v = [];
        Ad(v, t, l);
        for (const g of s)
          if (v.includes(g.id)) {
            const h = g.parentId === a.id, x = Wl(g, h, c);
            x && f.push(x);
          }
      }
      return f;
    }
  );
};
var Sy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ey = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const My = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ve(t, !0), Je(e, My);
  const [n, r] = ot(), o = () => ne(d(f), "$node", n), i = () => ne(w, "$selectItems", n);
  on(() => {
    d(v).refType || $({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7), u = y(t, "useChildrenOnly", 7);
  let c = mt(), f = /* @__PURE__ */ Pe(() => yr(c)), v = /* @__PURE__ */ Pe(() => {
    var E;
    return {
      ...a(),
      ...(E = o()) == null ? void 0 : E.data[l()][s()]
    };
  });
  const { updateNodeData: g } = Bt(), h = (E, N) => {
    g(c, (H) => {
      let P = H.data[l()];
      return P[s()] = { ...P[s()], [E]: N }, { [l()]: P };
    });
  }, x = (E, N) => {
    const H = N.target.value;
    h(E, H);
  }, b = (E) => {
    const N = E.value;
    h("ref", N);
  }, $ = (E) => {
    const N = E.value;
    h("refType", N);
  };
  let p;
  const C = () => {
    g(c, (E) => {
      let N = E.data[l()];
      return N.splice(s(), 1), { [l()]: [...N] };
    }), p == null || p.hide();
  }, w = ky(u());
  var k = Ey(), V = be(k), S = R(V);
  const O = /* @__PURE__ */ Pe(() => d(v).nameDisabled === !0);
  gt(S, {
    style: "width: 100%;",
    get value() {
      return d(v).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return d(O);
    },
    oninput: (E) => x("name", E)
  }), Z(V);
  var T = I(V, 2), z = R(T);
  {
    var q = (E) => {
      gt(E, {
        get value() {
          return d(v).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => x("value", N)
      });
    }, L = (E, N) => {
      {
        var H = (P) => {
          const A = /* @__PURE__ */ Pe(() => [d(v).ref]);
          rn(P, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return d(A);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        me(
          E,
          (P) => {
            d(v).refType !== "input" && P(H);
          },
          N
        );
      }
    };
    me(z, (E) => {
      d(v).refType === "fixed" ? E(q) : E(L, !1);
    });
  }
  Z(T);
  var B = I(T, 2), M = R(B);
  _n(
    Gr(M, {
      placement: "bottom",
      floating: (E) => {
        var N = Sy(), H = R(N), P = I(R(H));
        const A = /* @__PURE__ */ Pe(() => d(v).refType ? [d(v).refType] : []);
        rn(P, {
          items: fy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return d(A);
          },
          onSelect: $
        }), Z(H);
        var Y = I(H, 2), W = I(R(Y));
        ft(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (oe) => {
            x("defaultValue", oe);
          },
          get value() {
            return d(v).defaultValue;
          }
        }), Z(Y);
        var ee = I(Y, 2), G = I(R(ee));
        ft(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (oe) => {
            x("description", oe);
          },
          get value() {
            return d(v).description;
          }
        }), Z(ee);
        var X = I(ee, 2), ye = R(X);
        We(ye, {
          onclick: C,
          children: (oe, pe) => {
            Oe();
            var le = Be("删除");
            D(oe, le);
          },
          $$slots: { default: !0 }
        }), Z(X), Z(N), D(E, N);
      },
      children: (E, N) => {
        na(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => p = E,
    () => p
  ), Z(B), D(e, k);
  var _ = ge({
    get parameter() {
      return a();
    },
    set parameter(E) {
      a(E), m();
    },
    get index() {
      return s();
    },
    set index(E) {
      s(E), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(E) {
      l(E), m();
    },
    get useChildrenOnly() {
      return u();
    },
    set useChildrenOnly(E) {
      u(E), m();
    }
  });
  return r(), _;
}
ue(
  qd,
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
var Vy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Py = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Hy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ny = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function It(e, t) {
  ve(t, !0), Je(e, Ny);
  const [n, r] = ot(), o = () => ne(d(u), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters"), s = y(t, "useChildrenOnly", 7);
  let l = mt(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var f = Hy(), v = R(f);
  {
    var g = (b) => {
      var $ = Vy();
      Oe(4), D(b, $);
    };
    me(v, (b) => {
      d(c).length !== 0 && b(g);
    });
  }
  var h = I(v, 2);
  Ht(
    h,
    19,
    () => d(c),
    (b) => b.id,
    (b, $, p) => {
      qd(b, {
        get parameter() {
          return d($);
        },
        get index() {
          return d(p);
        },
        get dataKeyName() {
          return a();
        },
        get useChildrenOnly() {
          return s();
        }
      });
    },
    (b) => {
      var $ = Py(), p = R($, !0);
      Z($), ke(() => ct(p, i())), D(b, $);
    }
  ), Z(f), D(e, f);
  var x = ge({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), m();
    },
    get useChildrenOnly() {
      return s();
    },
    set useChildrenOnly(b) {
      s(b), m();
    }
  });
  return r(), x;
}
ue(
  It,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var Oy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ty = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Bd(e, t) {
  ve(t, !0), Je(e, Dy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn();
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
        var s = Oy();
        D(a, s);
      },
      children: (a, s) => {
        var l = Ly(), u = be(l), c = R(u);
        Ue(c, {
          level: 3,
          children: (g, h) => {
            Oe();
            var x = Be("输出参数");
            D(g, x);
          },
          $$slots: { default: !0 }
        });
        var f = I(c, 2);
        We(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var x = Ty();
            D(g, x);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = I(u, 2);
        It(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Bd, { data: {} }, [], [], !0);
const ya = (e) => JSON.parse(JSON.stringify(e));
var zy = /* @__PURE__ */ Me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ay = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Iy = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), qy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const By = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Zd(e, t) {
  ve(t, !0), Je(e, By);
  const [n, r] = ot(), o = () => ne(d(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = mt(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var N;
    let H = (N = o()) == null ? void 0 : N.data[s()], P;
    if (H && a().length > 0) {
      let A = H;
      for (let Y = 0; Y < a().length; Y++) {
        const W = a()[Y];
        Y == a().length - 1 ? P = A[W] : A = A[W].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: f } = Bt(), v = (N, H) => {
    f(l, (P) => {
      const A = P.data[s()];
      if (A && a().length > 0) {
        let Y = A;
        for (let W = 0; W < a().length; W++) {
          const ee = a()[W];
          W == a().length - 1 ? Y[ee] = { ...Y[ee], [N]: H } : Y = Y[ee].children;
        }
      }
      return {
        [s()]: [...ya(A)]
      };
    });
  }, g = (N, H) => {
    const P = H.target.value;
    v(N, P);
  }, h = (N) => {
    const H = N.value;
    v("dataType", H);
  };
  let x;
  const b = () => {
    f(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let P = H;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? P.splice(Y, 1) : P = P[Y].children;
        }
      }
      return {
        [s()]: [...ya(H)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    f(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let P = H;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? P[Y].children ? P[Y].children.push({
            id: pr(),
            name: "newParam",
            dataType: "String"
          }) : P[Y].children = [
            {
              id: pr(),
              name: "newParam",
              dataType: "String"
            }
          ] : P = P[Y].children;
        }
      }
      return {
        [s()]: [...ya(H)]
      };
    });
  };
  var p = qy(), C = be(p), w = R(C);
  {
    var k = (N) => {
      var H = Qe(), P = be(H);
      Ht(P, 17, a, Lr, (A, Y) => {
        Oe();
        var W = Be(" ");
        D(A, W);
      }), D(N, H);
    };
    me(w, (N) => {
      a().length > 1 && N(k);
    });
  }
  var V = I(w, 2);
  const S = /* @__PURE__ */ Pe(() => d(c).nameDisabled === !0);
  gt(V, {
    style: "width: 100%;",
    get value() {
      return d(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (N) => {
      g("name", N);
    },
    get disabled() {
      return d(S);
    }
  }), Z(C);
  var O = I(C, 2), T = R(O);
  const z = /* @__PURE__ */ Pe(() => d(c).dataType ? [d(c).dataType] : []), q = /* @__PURE__ */ Pe(() => d(c).dataTypeDisabled === !0);
  rn(T, {
    items: Td,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return d(z);
    },
    get disabled() {
      return d(q);
    },
    onSelect: h
  });
  var L = I(T, 2);
  {
    var B = (N) => {
      We(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (H, P) => {
          var A = zy();
          D(H, A);
        },
        $$slots: { default: !0 }
      });
    };
    me(L, (N) => {
      (d(c).dataType === "Object" || d(c).dataType === "Array") && d(c).addChildDisabled !== !0 && N(B);
    });
  }
  Z(O);
  var M = I(O, 2), _ = R(M);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (N) => {
        var H = Iy(), P = R(H), A = I(R(P));
        const Y = /* @__PURE__ */ Pe(() => d(c).defaultValue || "");
        ft(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return d(Y);
          },
          onchange: (oe) => {
            g("defaultValue", oe);
          }
        }), Z(P);
        var W = I(P, 2), ee = I(R(W));
        const G = /* @__PURE__ */ Pe(() => d(c).description || "");
        ft(ee, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return d(G);
          },
          onchange: (oe) => {
            g("description", oe);
          }
        }), Z(W);
        var X = I(W, 2);
        {
          var ye = (oe) => {
            var pe = Ay(), le = R(pe);
            We(le, {
              onclick: b,
              children: (Ee, we) => {
                Oe();
                var He = Be("删除");
                D(Ee, He);
              },
              $$slots: { default: !0 }
            }), Z(pe), D(oe, pe);
          };
          me(X, (oe) => {
            d(c).deleteDisabled !== !0 && oe(ye);
          });
        }
        Z(H), D(N, H);
      },
      children: (N, H) => {
        na(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => x = N,
    () => x
  ), Z(M), D(e, p);
  var E = ge({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), m();
    },
    get position() {
      return a();
    },
    set position(N) {
      a(N), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(N) {
      s(N), m();
    }
  });
  return r(), E;
}
ue(Zd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ re("<!> <!>", 1), Ry = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Yy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ky = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Wy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nr(e, t) {
  ve(t, !0), Je(e, Wy);
  const [n, r] = ot(), o = () => ne(d(u), "$node", n), i = (b, $ = ht, p = ht) => {
    var C = Qe(), w = be(C);
    Ht(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, V, S) => {
        var O = Zy(), T = be(O);
        const z = /* @__PURE__ */ Pe(() => [...p(), d(S)]);
        Zd(T, {
          get parameter() {
            return d(V);
          },
          get position() {
            return d(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var q = I(T, 2);
        {
          var L = (B) => {
            var M = /* @__PURE__ */ xe(() => [...p(), d(S)]);
            i(B, () => d(V).children, () => d(M));
          };
          me(q, (B) => {
            d(V).children && B(L);
          });
        }
        D(k, O);
      },
      (k) => {
        var V = Qe(), S = be(V);
        {
          var O = (T) => {
            var z = Ry(), q = R(z, !0);
            Z(z), ke(() => ct(q, a())), D(T, z);
          };
          me(S, (T) => {
            p().length === 0 && T(O);
          });
        }
        D(k, V);
      }
    ), D(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var f = Ky(), v = R(f);
  {
    var g = (b) => {
      var $ = Yy();
      Oe(4), D(b, $);
    };
    me(v, (b) => {
      d(c).length !== 0 && b(g);
    });
  }
  var h = I(v, 2);
  i(h, () => d(c) || [], () => []), Z(f), D(e, f);
  var x = ge({
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
ue(nr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Xy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), jy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Gy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Uy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Jy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const ew = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Rd(e, t) {
  ve(t, !0), Je(e, ew);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ Mt(ln([]));
  on(async () => {
    var c, f;
    const v = await ((f = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    d(s).push(...v || []);
  });
  const { updateNodeData: l } = Bt(), u = (c) => {
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
  return en(() => {
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
        var f = Xy();
        D(c, f);
      },
      children: (c, f) => {
        var v = Qy(), g = be(v), h = R(g);
        Ue(h, {
          level: 3,
          children: (Q, Ve) => {
            Oe();
            var j = Be("输入参数");
            D(Q, j);
          },
          $$slots: { default: !0 }
        });
        var x = I(h, 2);
        We(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Q, Ve) => {
            var j = jy();
            D(Q, j);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = I(g, 2);
        It(b, {});
        var $ = I(b, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (Q, Ve) => {
            Oe();
            var j = Be("模型设置");
            D(Q, j);
          },
          $$slots: { default: !0 }
        });
        var p = I($, 4), C = R(p);
        const w = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        rn(C, {
          get items() {
            return d(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (Q) => {
            const Ve = Q.value;
            l(o, () => ({ llmId: Ve }));
          },
          get value() {
            return d(w);
          }
        });
        var k = I(C, 2);
        na(k, {}), Z(p);
        var V = I(p, 4), S = R(V), O = R(S), T = R(O);
        Z(O);
        var z = I(O, 2);
        Tn(z), z.__input = [Fy, l, o], Z(S), Z(V);
        var q = I(V, 2), L = R(q), B = R(L), M = R(B);
        Z(B);
        var _ = I(B, 2);
        Tn(_), _.__input = [Gy, l, o], Z(L), Z(q);
        var E = I(q, 2), N = R(E), H = R(N), P = R(H);
        Z(H);
        var A = I(H, 2);
        Tn(A), A.__input = [Uy, l, o], Z(N), Z(E);
        var Y = I(E, 4), W = R(Y);
        const ee = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        ft(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return d(ee);
          },
          oninput: (Q) => {
            l(o, { systemPrompt: Q.target.value });
          }
        }), Z(Y);
        var G = I(Y, 4), X = R(G);
        const ye = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        ft(X, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return d(ye);
          },
          oninput: (Q) => {
            l(o, { userPrompt: Q.target.value });
          }
        }), Z(G);
        var oe = I(G, 2), pe = R(oe);
        Ue(pe, {
          level: 3,
          mt: "10px",
          children: (Q, Ve) => {
            Oe();
            var j = Be("输出参数");
            D(Q, j);
          },
          $$slots: { default: !0 }
        });
        var le = I(pe, 2);
        const Ee = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        rn(le, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (Q) => {
            u(Q.value);
          },
          get value() {
            return d(Ee);
          }
        });
        var we = I(le, 2);
        {
          var He = (Q) => {
            We(Q, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Ve, j) => {
                var $e = Jy();
                D(Ve, $e);
              },
              $$slots: { default: !0 }
            });
          };
          me(we, (Q) => {
            n().outType === "json" && Q(He);
          });
        }
        Z(oe);
        var ce = I(oe, 2);
        nr(ce, {}), ke(() => {
          ct(T, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Uo(z, n().temperature ?? 0.5), ct(M, `Top P: ${n().topP ?? 0.9 ?? ""}`), Uo(_, n().topP ?? 0.9), ct(P, `Top K: ${n().topK ?? 50 ?? ""}`), Uo(A, n().topK ?? 50);
        }), D(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
jr(["input"]);
ue(Rd, { data: {} }, [], [], !0);
var tw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), nw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ve(t, !0), Je(e, iw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  on(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = mt(), { addParameter: i } = Mn(), { updateNodeData: a } = Bt(), s = [
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
        var u = tw();
        D(l, u);
      },
      children: (l, u) => {
        var c = ow(), f = be(c), v = R(f);
        Ue(v, {
          level: 3,
          children: (z, q) => {
            Oe();
            var L = Be("输入参数");
            D(z, L);
          },
          $$slots: { default: !0 }
        });
        var g = I(v, 2);
        We(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, q) => {
            var L = nw();
            D(z, L);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var h = I(f, 2);
        It(h, {});
        var x = I(h, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Oe();
            var L = Be("代码");
            D(z, L);
          },
          $$slots: { default: !0 }
        });
        var b = I(x, 4), $ = R(b);
        const p = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        rn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const q = z.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return d(p);
          }
        }), Z(b);
        var C = I(b, 4), w = R(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
        ft(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return d(k);
          }
        }), Z(C);
        var V = I(C, 2), S = R(V);
        Ue(S, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Oe();
            var L = Be("输出参数");
            D(z, L);
          },
          $$slots: { default: !0 }
        });
        var O = I(S, 2);
        We(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, q) => {
            var L = rw();
            D(z, L);
          },
          $$slots: { default: !0 }
        }), Z(V);
        var T = I(V, 2);
        nr(T, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(Yd, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), sw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ve(t, !0), Je(e, uw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn(), { updateNodeData: a } = Bt();
  return en(() => {
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
        var l = aw();
        D(s, l);
      },
      children: (s, l) => {
        var u = lw(), c = be(u), f = R(c);
        Ue(f, {
          level: 3,
          children: (k, V) => {
            Oe();
            var S = Be("输入参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var v = I(f, 2);
        We(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, V) => {
            var S = sw();
            D(k, S);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = I(c, 2);
        It(g, {});
        var h = I(g, 2);
        Ue(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            Oe();
            var S = Be("模板内容");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var x = I(h, 2), b = R(x);
        const $ = /* @__PURE__ */ Pe(() => n().template || "");
        ft(b, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return d($);
          }
        }), Z(x);
        var p = I(x, 2), C = R(p);
        Ue(C, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            Oe();
            var S = Be("输出参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var w = I(p, 2);
        nr(w, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ue(Kd, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), dw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), pw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), mw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), yw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), ww = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const xw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Wd(e, t) {
  ve(t, !0), Je(e, xw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  on(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = mt(), { addParameter: a } = Mn(), { updateNodeData: s } = Bt();
  return hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cw();
        D(l, u);
      },
      children: (l, u) => {
        var c = bw(), f = be(c), v = R(f);
        Ue(v, {
          level: 3,
          children: (se, de) => {
            Oe();
            var fe = Be("输入参数");
            D(se, fe);
          },
          $$slots: { default: !0 }
        });
        var g = I(v, 2);
        We(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (se, de) => {
            var fe = dw();
            D(se, fe);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var h = I(f, 2);
        It(h, {});
        var x = I(h, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (se, de) => {
            Oe();
            var fe = Be("URL 地址");
            D(se, fe);
          },
          $$slots: { default: !0 }
        });
        var b = I(x, 2), $ = R(b), p = R($);
        const C = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        rn(p, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const de = se.value;
            s(i, () => ({ method: de }));
          },
          get value() {
            return d(C);
          }
        }), Z($);
        var w = I($, 2), k = R(w);
        const V = /* @__PURE__ */ Pe(() => n().url || "");
        gt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return d(V);
          }
        }), Z(w), Z(b);
        var S = I(b, 2), O = R(S);
        Ue(O, {
          level: 3,
          children: (se, de) => {
            Oe();
            var fe = Be("Http 头信息");
            D(se, fe);
          },
          $$slots: { default: !0 }
        });
        var T = I(O, 2);
        We(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, de) => {
            var fe = fw();
            D(se, fe);
          },
          $$slots: { default: !0 }
        }), Z(S);
        var z = I(S, 2);
        It(z, { dataKeyName: "headers" });
        var q = I(z, 2);
        Ue(q, {
          level: 3,
          mt: "10px",
          children: (se, de) => {
            Oe();
            var fe = Be("Body");
            D(se, fe);
          },
          $$slots: { default: !0 }
        });
        var L = I(q, 2), B = R(L), M = R(B);
        const _ = /* @__PURE__ */ Pe(() => !n().bodyType);
        gt(M, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return d(_);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "" });
          }
        }), Oe(), Z(B);
        var E = I(B, 2), N = R(E);
        const H = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        gt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return d(H);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "form-data" });
          }
        }), Oe(), Z(E);
        var P = I(E, 2), A = R(P);
        const Y = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        gt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return d(Y);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Oe(), Z(P);
        var W = I(P, 2), ee = R(W);
        const G = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        gt(ee, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return d(G);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "json" });
          }
        }), Oe(), Z(W);
        var X = I(W, 2), ye = R(X);
        const oe = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        gt(ye, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return d(oe);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "raw" });
          }
        }), Oe(), Z(X), Z(L);
        var pe = I(L, 2);
        {
          var le = (se) => {
            var de = gw(), fe = be(de), Ce = R(fe);
            Ue(Ce, {
              level: 3,
              children: (U, ze) => {
                Oe();
                var ae = Be("参数");
                D(U, ae);
              },
              $$slots: { default: !0 }
            });
            var nt = I(Ce, 2);
            We(nt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (U, ze) => {
                var ae = vw();
                D(U, ae);
              },
              $$slots: { default: !0 }
            }), Z(fe);
            var at = I(fe, 2);
            It(at, { dataKeyName: "formData" }), D(se, de);
          };
          me(pe, (se) => {
            n().bodyType === "form-data" && se(le);
          });
        }
        var Ee = I(pe, 2);
        {
          var we = (se) => {
            var de = hw(), fe = be(de), Ce = R(fe);
            Ue(Ce, {
              level: 3,
              children: (U, ze) => {
                Oe();
                var ae = Be("Body 参数");
                D(U, ae);
              },
              $$slots: { default: !0 }
            });
            var nt = I(Ce, 2);
            We(nt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (U, ze) => {
                var ae = pw();
                D(U, ae);
              },
              $$slots: { default: !0 }
            }), Z(fe);
            var at = I(fe, 2);
            It(at, { dataKeyName: "formUrlencoded" }), D(se, de);
          };
          me(Ee, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(we);
          });
        }
        var He = I(Ee, 2);
        {
          var ce = (se) => {
            var de = mw(), fe = R(de);
            ft(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ce) => {
                s(i, { bodyJson: Ce.target.value });
              }
            }), Z(de), D(se, de);
          };
          me(He, (se) => {
            n().bodyType === "json" && se(ce);
          });
        }
        var Q = I(He, 2);
        {
          var Ve = (se) => {
            var de = yw(), fe = R(de);
            ft(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ce) => {
                s(i, { bodyRaw: Ce.target.value });
              }
            }), Z(de), D(se, de);
          };
          me(Q, (se) => {
            n().bodyType === "raw" && se(Ve);
          });
        }
        var j = I(Q, 2), $e = R(j);
        Ue($e, {
          level: 3,
          mt: "10px",
          children: (se, de) => {
            Oe();
            var fe = Be("输出参数");
            D(se, fe);
          },
          $$slots: { default: !0 }
        });
        var Ne = I($e, 2);
        We(Ne, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, de) => {
            var fe = ww();
            D(se, fe);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var Le = I(j, 2);
        nr(Le, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(Wd, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Cw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const kw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ve(t, !0), Je(e, kw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ Mt(ln([]));
  on(async () => {
    var u, c;
    const f = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    d(s).push(...f || []);
  });
  const { updateNodeData: l } = Bt();
  return en(() => {
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
        var c = $w();
        D(u, c);
      },
      children: (u, c) => {
        var f = _w(), v = be(f), g = R(v);
        Ue(g, {
          level: 3,
          children: (L, B) => {
            Oe();
            var M = Be("输入参数");
            D(L, M);
          },
          $$slots: { default: !0 }
        });
        var h = I(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, B) => {
            var M = Cw();
            D(L, M);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = I(v, 2);
        It(x, {});
        var b = I(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (L, B) => {
            Oe();
            var M = Be("知识库设置");
            D(L, M);
          },
          $$slots: { default: !0 }
        });
        var $ = I(b, 4), p = R($);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        rn(p, {
          get items() {
            return d(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const B = L.value;
            l(o, () => ({ knowledgeId: B }));
          },
          get value() {
            return d(C);
          }
        }), Z($);
        var w = I($, 4), k = R(w);
        gt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const B = L.target.value;
            l(o, () => ({ keyword: B }));
          }
        }), Z(w);
        var V = I(w, 4), S = R(V);
        const O = /* @__PURE__ */ Pe(() => n().limit || "");
        gt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const B = L.target.value;
            l(o, () => ({ limit: B }));
          },
          get value() {
            return d(O);
          }
        }), Z(V);
        var T = I(V, 2), z = R(T);
        Ue(z, {
          level: 3,
          mt: "10px",
          children: (L, B) => {
            Oe();
            var M = Be("输出参数");
            D(L, M);
          },
          $$slots: { default: !0 }
        }), Z(T);
        var q = I(T, 2);
        nr(q, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(Xd, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Ew = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Vw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function jd(e, t) {
  ve(t, !0), Je(e, Vw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ Mt(ln([]));
  on(async () => {
    var u, c;
    const f = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    d(s).push(...f || []);
  });
  const { updateNodeData: l } = Bt();
  return en(() => {
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
        var c = Sw();
        D(u, c);
      },
      children: (u, c) => {
        var f = Mw(), v = be(f), g = R(v);
        Ue(g, {
          level: 3,
          children: (q, L) => {
            Oe();
            var B = Be("输入参数");
            D(q, B);
          },
          $$slots: { default: !0 }
        });
        var h = I(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, L) => {
            var B = Ew();
            D(q, B);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = I(v, 2);
        It(x, {});
        var b = I(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (q, L) => {
            Oe();
            var B = Be("搜索引擎设置");
            D(q, B);
          },
          $$slots: { default: !0 }
        });
        var $ = I(b, 4), p = R($);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        rn(p, {
          get items() {
            return d(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const L = q.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return d(C);
          }
        }), Z($);
        var w = I($, 4), k = R(w);
        gt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const L = q.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), Z(w);
        var V = I(w, 4), S = R(V);
        gt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const L = q.target.value;
            l(o, () => ({ limit: L }));
          }
        }), Z(V);
        var O = I(V, 2), T = R(O);
        Ue(T, {
          level: 3,
          mt: "10px",
          children: (q, L) => {
            Oe();
            var B = Be("输出参数");
            D(q, B);
          },
          $$slots: { default: !0 }
        }), Z(O);
        var z = I(O, 2);
        nr(z, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(jd, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Hw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ re('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Ow = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Fd(e, t) {
  ve(t, !0), Je(e, Ow);
  const n = y(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Mn();
  return en(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", {
      name: "loopVar",
      nameDisabled: !0,
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
      icon: (a) => {
        var s = Pw();
        D(a, s);
      },
      handle: (a) => {
        Un(a, {
          type: "source",
          get position() {
            return Te.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Nw(), u = be(l), c = R(u);
        Ue(c, {
          level: 3,
          children: (b, $) => {
            Oe();
            var p = Be("循环变量");
            D(b, p);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var f = I(u, 2);
        It(f, { dataKeyName: "loopVars" });
        var v = I(f, 2), g = R(v);
        Ue(g, {
          level: 3,
          children: (b, $) => {
            Oe();
            var p = Be("输出参数");
            D(b, p);
          },
          $$slots: { default: !0 }
        });
        var h = I(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var p = Hw();
            D(b, p);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = I(v, 2);
        It(x, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Fd, { data: {} }, [], [], !0);
const Tw = {
  startNode: zd,
  codeNode: Yd,
  llmNode: Rd,
  templateNode: Kd,
  httpNode: Wd,
  knowledgeNode: Xd,
  searchEngineNode: jd,
  loopNode: Fd,
  endNode: Bd
};
var Lw = /* @__PURE__ */ re("<!> ", 1);
function Ya(e, t) {
  ve(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return We(e, {
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
    get "data-node-type"() {
      return o();
    },
    children: (s, l) => {
      var u = Lw(), c = be(u);
      ls(c, n);
      var f = I(c);
      ke(() => ct(f, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), ge({
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
ue(
  Ya,
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
var Dw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), zw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Aw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Gd(e, t) {
  ve(t, !0);
  let n = /* @__PURE__ */ Mt("base"), r = /* @__PURE__ */ Mt("show");
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
  ], a = [], s = Qn(), l = s.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((p, C) => (l[p].sortNo || 0) - (l[C].sortNo || 0));
    for (let p of $)
      l[p].group === "base" ? o.push({ type: p, ...l[p] }) : a.push({
        icon: l[p].icon,
        title: l[p].title,
        type: p
      });
    o.sort((p, C) => (p.sortNo || 0) - (C.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const $ = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray($)) {
      for (let p of $)
        for (let C = 0; C < o.length; C++)
          if (o[C].type === p) {
            o.splice(C, 1);
            break;
          }
    }
  }
  var u = Aw(), c = R(u), f = R(c), v = R(f);
  bd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      J(n, $.value.toString(), !0);
    }
  }), Z(f);
  var g = I(f, 2), h = R(g);
  Ht(h, 21, () => o, Lr, ($, p) => {
    Ya($, lt(() => d(p)));
  }), Z(h);
  var x = I(h, 2);
  Ht(x, 21, () => a, Lr, ($, p) => {
    Ya($, lt(() => d(p)));
  }), Z(x), Z(g), Z(c);
  var b = I(c, 2);
  We(b, {
    onclick: () => {
      J(r, d(r) ? "" : "show", !0);
    },
    children: ($, p) => {
      var C = Qe(), w = be(C);
      {
        var k = (S) => {
          var O = Dw();
          D(S, O);
        }, V = (S) => {
          var O = zw();
          D(S, O);
        };
        me(w, (S) => {
          d(r) === "show" ? S(k) : S(V, !1);
        });
      }
      D($, C);
    },
    $$slots: { default: !0 }
  }), Z(u), ke(() => {
    Ct(u, 1, `tf-toolbar ${d(r) ?? ""}`), vt(h, `display: ${d(n) === "base" ? "flex" : "none"}`), vt(x, `display: ${d(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), ge();
}
ue(Gd, {}, [], [], !0);
const Iw = () => {
  const { nodeLookup: e } = Xe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, qw = () => {
  const { nodes: e } = Xe();
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
}, Bw = () => {
  const { edges: e } = Xe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Zw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Yw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Kw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Xw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), jw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Fw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Uw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Jw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  var n;
  ve(t, !0), Je(e, Jw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = mt(), { addParameter: a } = Mn(), s = Bt(), { updateNodeData: l } = s, u = ($) => {
    l(i, $);
  }, c = ($, p) => {
    var C;
    u({ [$]: (C = p.target) == null ? void 0 : C.value });
  }, f = { ...o, id: i, data: r() }, v = document.createElement("div"), g = Qn().customNodes[t.type];
  (n = g.render) == null || n.call(g, v, f, s);
  const h = g.forms;
  let x;
  en(() => {
    r().expand && x && x.append(v);
  }), en(() => {
    var $;
    r() && (($ = g.onUpdate) == null || $.call(g, v, { ...f, data: r() }));
  }), en(() => {
    !r().parameters && g.parameters && u({
      parameters: Oi(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), en(() => {
    !r().outputDefs && g.outputDefs && u({
      outputDefs: Oi(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  const b = /* @__PURE__ */ Pe(() => ({
    ...r(),
    description: g.description
  }));
  return hn(e, lt(
    {
      get data() {
        return d(b);
      }
    },
    () => o,
    {
      icon: ($) => {
        var p = Qe(), C = be(p);
        ls(C, () => g.icon), D($, p);
      },
      children: ($, p) => {
        var C = Uw(), w = be(C);
        {
          var k = (q) => {
            var L = Rw(), B = be(L), M = R(B);
            Ue(M, {
              level: 3,
              children: (H, P) => {
                Oe();
                var A = Be("输入参数");
                D(H, A);
              },
              $$slots: { default: !0 }
            });
            var _ = I(M, 2);
            {
              var E = (H) => {
                We(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (P, A) => {
                    var Y = Zw();
                    D(P, Y);
                  },
                  $$slots: { default: !0 }
                });
              };
              me(_, (H) => {
                g.parametersAddEnable !== !1 && H(E);
              });
            }
            Z(B);
            var N = I(B, 2);
            It(N, {}), D(q, L);
          };
          me(w, (q) => {
            g.parametersEnable !== !1 && q(k);
          });
        }
        var V = I(w, 2);
        {
          var S = (q) => {
            var L = Qe(), B = be(L);
            Ht(B, 17, () => h, Lr, (M, _) => {
              var E = Qe(), N = be(E);
              {
                var H = (A) => {
                  var Y = Yw(), W = be(Y), ee = R(W, !0);
                  Z(W);
                  var G = I(W, 2), X = R(G);
                  const ye = /* @__PURE__ */ Pe(() => r()[d(_).name] || d(_).defaultValue);
                  gt(X, lt(
                    {
                      get placeholder() {
                        return d(_).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return d(ye);
                      }
                    },
                    () => d(_).attrs,
                    {
                      onchange: (oe) => {
                        c(d(_).name, oe);
                      }
                    }
                  )), Z(G), ke(() => ct(ee, d(_).label)), D(A, Y);
                }, P = (A, Y) => {
                  {
                    var W = (G) => {
                      var X = Kw(), ye = be(X), oe = R(ye, !0);
                      Z(ye);
                      var pe = I(ye, 2), le = R(pe);
                      const Ee = /* @__PURE__ */ Pe(() => r()[d(_).name] || d(_).defaultValue);
                      ft(le, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return d(_).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return d(Ee);
                          }
                        },
                        () => d(_).attrs,
                        {
                          onchange: (we) => {
                            c(d(_).name, we);
                          }
                        }
                      )), Z(pe), ke(() => ct(oe, d(_).label)), D(G, X);
                    }, ee = (G, X) => {
                      {
                        var ye = (pe) => {
                          var le = Ww(), Ee = be(le), we = R(Ee, !0);
                          Z(Ee);
                          var He = I(Ee, 2), ce = R(He), Q = R(ce), Ve = R(Q);
                          Z(Q);
                          var j = I(Q, 2);
                          Tn(j);
                          var $e = (Le) => u({
                            [d(_).name]: parseFloat(Le.target.value)
                          });
                          let Ne;
                          Z(ce), Z(He), ke(() => {
                            ct(we, d(_).label), ct(Ve, `${d(_).description ?? ""}: ${r()[d(_).name] ?? d(_).defaultValue ?? ""}`), Ne = jt(
                              j,
                              Ne,
                              {
                                class: "nodrag",
                                type: "range",
                                ...d(_).attrs,
                                value: r()[d(_).name] ?? d(_).defaultValue,
                                oninput: $e
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(pe, le);
                        }, oe = (pe, le) => {
                          {
                            var Ee = (He) => {
                              var ce = Xw(), Q = be(ce), Ve = R(Q, !0);
                              Z(Q);
                              var j = I(Q, 2), $e = R(j);
                              const Ne = /* @__PURE__ */ Pe(() => d(_).options || []), Le = /* @__PURE__ */ Pe(() => r()[d(_).name] ? [r()[d(_).name]] : [d(_).defaultValue]);
                              rn($e, {
                                get items() {
                                  return d(Ne);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return d(_).placeholder;
                                },
                                onSelect: (se) => {
                                  const de = se.value;
                                  u({ [d(_).name]: de });
                                },
                                get value() {
                                  return d(Le);
                                }
                              }), Z(j), ke(() => ct(Ve, d(_).label)), D(He, ce);
                            }, we = (He, ce) => {
                              {
                                var Q = (j) => {
                                  var $e = jw(), Ne = be($e), Le = R(Ne, !0);
                                  Z(Ne);
                                  var se = I(Ne, 2), de = R(se);
                                  const fe = /* @__PURE__ */ Pe(() => {
                                    var Ce;
                                    return (Ce = d(_).chosen) == null ? void 0 : Ce.buttonText;
                                  });
                                  wd(de, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return d(_).placeholder;
                                    },
                                    get buttonText() {
                                      return d(fe);
                                    },
                                    onChosen: (Ce, nt, at) => {
                                      var U, ze;
                                      (ze = (U = d(_).chosen) == null ? void 0 : U.onChosen) == null || ze.call(U, u, Ce, nt, at);
                                    },
                                    get value() {
                                      var Ce;
                                      return r()[((Ce = d(_).chosen) == null ? void 0 : Ce.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var Ce;
                                      return r()[((Ce = d(_).chosen) == null ? void 0 : Ce.labelDataKey) || ""];
                                    }
                                  }), Z(se), ke(() => ct(Le, d(_).label)), D(j, $e);
                                }, Ve = (j, $e) => {
                                  {
                                    var Ne = (Le) => {
                                      Ue(Le, lt({ level: 3, mt: "10px" }, () => d(_).attrs, {
                                        children: (se, de) => {
                                          Oe();
                                          var fe = Be();
                                          ke(() => ct(fe, d(_).label)), D(se, fe);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    me(
                                      j,
                                      (Le) => {
                                        d(_).type === "heading" && Le(Ne);
                                      },
                                      $e
                                    );
                                  }
                                };
                                me(
                                  He,
                                  (j) => {
                                    d(_).type === "chosen" ? j(Q) : j(Ve, !1);
                                  },
                                  ce
                                );
                              }
                            };
                            me(
                              pe,
                              (He) => {
                                d(_).type === "select" ? He(Ee) : He(we, !1);
                              },
                              le
                            );
                          }
                        };
                        me(
                          G,
                          (pe) => {
                            d(_).type === "slider" ? pe(ye) : pe(oe, !1);
                          },
                          X
                        );
                      }
                    };
                    me(
                      A,
                      (G) => {
                        d(_).type === "textarea" ? G(W) : G(ee, !1);
                      },
                      Y
                    );
                  }
                };
                me(N, (A) => {
                  d(_).type === "input" ? A(H) : A(P, !1);
                });
              }
              D(M, E);
            }), D(q, L);
          };
          me(V, (q) => {
            h && q(S);
          });
        }
        var O = I(V, 2);
        _n(O, (q) => x = q, () => x);
        var T = I(O, 2);
        {
          var z = (q) => {
            var L = Gw(), B = be(L), M = R(B);
            Ue(M, {
              level: 3,
              mt: "10px",
              children: (H, P) => {
                Oe();
                var A = Be("输出参数");
                D(H, A);
              },
              $$slots: { default: !0 }
            });
            var _ = I(M, 2);
            {
              var E = (H) => {
                We(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (P, A) => {
                    var Y = Fw();
                    D(P, Y);
                  },
                  $$slots: { default: !0 }
                });
              };
              me(_, (H) => {
                g.outputDefsAddEnable !== !1 && H(E);
              });
            }
            Z(B);
            var N = I(B, 2);
            nr(N, {}), D(q, L);
          };
          me(T, (q) => {
            g.outputDefsEnable !== !1 && q(z);
          });
        }
        ke(() => {
          vt(O, g.rootStyle || ""), Ct(O, 1, gn(g.rootClass), "svelte-q0cqsa");
        }), D($, C);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return r();
    },
    set data($) {
      r($), m();
    }
  });
}
ue(Ud, { data: {} }, [], [], !0);
const Qw = () => {
  const e = Xe();
  return {
    updateEdgeData: (t, n, r) => {
      const o = F(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
}, eb = () => {
  const { edges: e } = Xe();
  return {
    deleteEdge: (t) => {
      e.update((n) => n.filter((r) => r.id !== t));
    }
  };
};
var tb = /* @__PURE__ */ re('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), nb = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), rb = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const ob = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Jd(e, t) {
  ve(t, !0), Je(e, ob);
  const [n, r] = ot(), o = () => ne(T, "$nodes", n), i = () => ne(z, "$edges", n), a = () => ne(q, "$viewport", n), s = y(t, "onInit", 7), l = Bt();
  s()(l);
  let u = /* @__PURE__ */ Mt(!1), c = /* @__PURE__ */ Mt(void 0);
  const { updateEdgeData: f } = Qw(), v = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, g = (P) => {
    var A;
    P.preventDefault();
    const Y = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), W = (A = P.dataTransfer) == null ? void 0 : A.getData("application/tinyflow"), ee = W ? JSON.parse(W) : {}, G = {
      id: `node_${pr()}`,
      position: Y,
      data: {},
      ...ee
    };
    oi.addNode(G), oi.selectNodeOnly(G.id);
  }, { getNode: h } = Iw(), x = (P) => {
    const A = h(P.source), Y = h(P.target);
    if (P.sourceHandle === "loop_handle" || A.parentId) {
      const W = l.getEdges();
      for (let ee of W)
        if (ee.target === P.target) {
          const G = h(ee.source);
          if (P.sourceHandle === "loop_handle" && G.parentId !== A.id || A.parentId && G.parentId !== A.parentId)
            return !1;
        }
    }
    return !(!A.parentId && Y.parentId && Y.parentId !== A.id);
  }, { ensureParentInNodesBefore: b } = qw(), $ = (P, A) => {
    if (!A.isValid)
      return;
    const Y = A.toNode;
    if (Y.parentId)
      return;
    const W = A.fromNode, ee = A.fromHandle, G = { position: { ...Y.position } };
    if (ee.id === "loop_handle" ? G.parentId = W.id : W.parentId && (G.parentId = W.parentId), G.parentId) {
      const X = h(G.parentId);
      G.position = {
        x: Y.position.x - X.position.x,
        y: Y.position.y - X.position.y
      }, b(G.parentId, Y.id), l.updateNode(Y.id, G);
    }
  }, { getEdgesByTarget: p } = Bw(), C = (P) => {
    P.edges.forEach((A) => {
      var Y;
      A.id === ((Y = d(c)) == null ? void 0 : Y.id) && (J(c, null), J(u, !1));
      const W = h(A.target);
      if (W && W.parentId) {
        const ee = p(A.target), G = h(W.parentId);
        if (ee.length === 0)
          l.updateNode(W.id, {
            parentId: void 0,
            position: {
              x: W.position.x + G.position.x,
              y: W.position.y + G.position.y
            }
          });
        else {
          let X = !1;
          for (let ye = 0; ye < ee.length; ye++) {
            const oe = ee[ye], pe = h(oe.source);
            if (pe.parentId || pe.type === "loopNode") {
              X = !0;
              break;
            }
          }
          X || l.updateNode(W.id, {
            parentId: void 0,
            position: {
              x: W.position.x + G.position.x,
              y: W.position.y + G.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: w } = eb(), k = (P, A) => {
  }, V = (P) => {
  }, S = {}, O = Qn().customNodes;
  if (O)
    for (let P of Object.keys(O))
      S[P] = Ud;
  const { nodes: T, edges: z, viewport: q } = Xe(), L = Qn().onDataChange;
  L && (T.subscribe(() => {
    L(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), z.subscribe(() => {
    L(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), q.subscribe(() => {
    L(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var B = rb(), M = R(B);
  const _ = /* @__PURE__ */ Pe(() => ({ ...Tw, ...S })), E = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  od(M, lt(
    {
      get nodeTypes() {
        return d(_);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: k,
      onconnect: V,
      connectionRadius: 50,
      onedgecreate: (P) => ({ ...P, id: pr() }),
      ondelete: C,
      onclick: (P) => {
        const A = P.target;
        A.classList.contains("svelte-flow__edge-interaction") || A.classList.contains("panel-content") || A.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return d(E);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (P) => {
          J(u, !0), J(c, P.detail.edge, !0);
        }
      },
      children: (P, A) => {
        var Y = nb(), W = be(Y);
        gd(W, {});
        var ee = I(W, 2);
        dd(ee, {});
        var G = I(ee, 2);
        hd(G, {});
        var X = I(G, 2);
        {
          var ye = (oe) => {
            Do(oe, {
              children: (pe, le) => {
                var Ee = tb(), we = I(R(Ee), 4), He = R(we);
                const ce = /* @__PURE__ */ Pe(() => {
                  var $e, Ne;
                  return (Ne = ($e = d(c)) == null ? void 0 : $e.data) == null ? void 0 : Ne.condition;
                });
                ft(He, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return d(ce);
                  },
                  onchange: ($e) => {
                    var Ne;
                    d(c) && f(d(c).id, { condition: (Ne = $e.target) == null ? void 0 : Ne.value });
                  }
                }), Z(we);
                var Q = I(we, 2), Ve = R(Q);
                We(Ve, {
                  onclick: () => {
                    var $e;
                    w(($e = d(c)) == null ? void 0 : $e.id), J(u, !1);
                  },
                  children: ($e, Ne) => {
                    Oe();
                    var Le = Be("删除");
                    D($e, Le);
                  },
                  $$slots: { default: !0 }
                });
                var j = I(Ve, 2);
                We(j, {
                  primary: !0,
                  onclick: () => {
                    J(u, !1);
                  },
                  children: ($e, Ne) => {
                    Oe();
                    var Le = Be("保存");
                    D($e, Le);
                  },
                  $$slots: { default: !0 }
                }), Z(Q), Z(Ee), D(pe, Ee);
              },
              $$slots: { default: !0 }
            });
          };
          me(X, (oe) => {
            d(u) && oe(ye);
          });
        }
        D(P, Y);
      },
      $$slots: { default: !0 }
    }
  ));
  var N = I(M, 2);
  Gd(N, {}), Z(B), D(e, B);
  var H = ge({
    get onInit() {
      return s();
    },
    set onInit(P) {
      s(P), m();
    }
  });
  return r(), H;
}
ue(Jd, { onInit: {} }, [], [], !0);
function ib(e, t) {
  ve(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return oi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Tr("tinyflow_options", n()), id(e, {
    fitView: !0,
    children: (i, a) => {
      Jd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ge({
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
customElements.define("tinyflow-component", ue(ib, { options: {}, onInit: {} }, [], [], !1));
const fb = /* @__PURE__ */ v1({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function },
    hiddenNodes: { type: [Array, Function] },
    onDataChange: { type: Function }
  },
  setup(e, { expose: t }) {
    const n = e, r = g1(null);
    let o = null;
    return p1(() => {
      r.value && (o = new B2({
        ...n,
        element: r.value
      }));
    }), h1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (y1(), m1("div", {
      ref_key: "divRef",
      ref: r,
      class: b1(["tinyflow", a.className]),
      style: w1(a.style)
    }, null, 6));
  }
});
export {
  fb as Tinyflow
};
//# sourceMappingURL=index.js.map
