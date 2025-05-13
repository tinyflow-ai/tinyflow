import { defineComponent as d1, ref as f1, onMounted as v1, onUnmounted as g1, createElementBlock as p1, openBlock as h1, normalizeStyle as m1, normalizeClass as y1 } from "vue";
var w1 = Object.defineProperty, Kl = (e) => {
  throw TypeError(e);
}, b1 = (e, t, n) => t in e ? w1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ot = (e, t, n) => b1(e, typeof t != "symbol" ? t + "" : t, n), Ya = (e, t, n) => t.has(e) || Kl("Cannot " + n), ut = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => t.has(e) ? Kl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ii = (e, t, n, r) => (Ya(e, t, "write to private field"), t.set(e, n), n), x1 = (e, t, n) => (Ya(e, t, "access private method"), n);
const $1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add($1);
let Br = !1, C1 = !1;
function _1() {
  Br = !0;
}
_1();
const Ka = 1, Wa = 2, Wl = 4, k1 = 8, S1 = 16, E1 = 1, M1 = 2, jl = 4, V1 = 8, H1 = 16, Fl = 1, P1 = 2, ja = "[", Fa = "[!", Ga = "]", _r = {}, Pt = Symbol(), N1 = "http://www.w3.org/1999/xhtml", O1 = "http://www.w3.org/2000/svg", z1 = !1;
function zi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Eo = Array.isArray, L1 = Array.prototype.indexOf, Ua = Array.from, ai = Object.keys, co = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, T1 = Object.prototype, D1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const pt = () => {
};
function A1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, Ul = 4, Li = 8, Qa = 16, Dn = 32, pr = 64, si = 128, qt = 256, li = 512, Et = 1024, bn = 2048, tr = 4096, On = 8192, Ti = 16384, I1 = 32768, Xr = 65536, R1 = 1 << 17, Z1 = 1 << 19, Jl = 1 << 20, wa = 1 << 21, Yn = Symbol("$state"), es = Symbol("legacy props"), q1 = Symbol("");
function B1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function X1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Y1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function K1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function W1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function j1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function F1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function G1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function U1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Oe = !1;
function Rt(e) {
  Oe = e;
}
let Ze;
function St(e) {
  if (e === null)
    throw Di(), _r;
  return Ze = e;
}
function xn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ze)
  );
}
function q(e) {
  if (Oe) {
    if (/* @__PURE__ */ Sn(Ze) !== null)
      throw Di(), _r;
    Ze = e;
  }
}
function ze(e = 1) {
  if (Oe) {
    for (var t = e, n = Ze; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ze = n;
  }
}
function ba() {
  for (var e = 0, t = Ze; ; ) {
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
function an(e) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const t = Ja(e);
  if (t !== T1 && t !== D1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Eo(e), o = /* @__PURE__ */ kt(0), i = Qe, a = (s) => {
    var l = Qe;
    $n(i);
    var u = s();
    return $n(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ kt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && F1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ kt(u.value)), n.set(l, c)) : Q(
          c,
          a(() => an(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ kt(Pt))
          ), ia(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && Q(c, d);
          }
          Q(u, Pt), ia(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), g = l in s;
        if (d === void 0 && (!g || (c = Nn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(an(g ? s[l] : Pt))), n.set(l, d)), d !== void 0) {
          var v = f(d);
          return v === Pt ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = n.get(l), g = d == null ? void 0 : d.v;
          if (d !== void 0 && g !== Pt)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === Yn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Nn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? an(s[l]) : Pt)), n.set(l, c));
          var g = f(c);
          if (g === Pt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, g = n.get(l), v = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var b = n.get(h + "");
            b !== void 0 ? Q(b, Pt) : h in s && (b = a(() => /* @__PURE__ */ kt(Pt)), n.set(h + "", b));
          }
        g === void 0 ? (!v || (d = Nn(s, l)) != null && d.writable) && (g = a(() => /* @__PURE__ */ kt(void 0)), Q(
          g,
          a(() => an(u))
        ), n.set(l, g)) : (v = g.v !== Pt, Q(
          g,
          a(() => an(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p >= C.v && Q(C, p + 1);
          }
          ia(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var g = n.get(d);
          return g === void 0 || g.v !== Pt;
        });
        for (var [u, c] of n)
          c.v !== Pt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        G1();
      }
    }
  );
}
function ia(e, t = 1) {
  Q(e, e.v + t);
}
var Nt, Ql, eu, tu;
function xa() {
  if (Nt === void 0) {
    Nt = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    eu = Nn(t, "firstChild").get, tu = Nn(t, "nextSibling").get, As(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), As(n) && (n.__t = void 0);
  }
}
function Ln(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return eu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return tu.call(e);
}
function B(e, t) {
  if (!Oe)
    return /* @__PURE__ */ gt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ gt(Ze)
  );
  if (n === null)
    n = Ze.appendChild(Ln());
  else if (t && n.nodeType !== 3) {
    var r = Ln();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function be(e, t) {
  if (!Oe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sn(n) : n;
  }
  return Ze;
}
function R(e, t = 1, n = !1) {
  let r = Oe ? Ze : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!Oe)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Ln();
    return r === null ? o == null || o.after(a) : r.before(a), St(a), a;
  }
  return St(r), /** @type {TemplateNode} */
  r;
}
function ts(e) {
  e.textContent = "";
}
function nu(e) {
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
  var t = un | bn, n = Qe !== null && (Qe.f & un) !== 0 ? (
    /** @type {Derived} */
    Qe
  ) : null;
  return je === null || n !== null && (n.f & qt) !== 0 ? t |= qt : je.f |= Jl, {
    ctx: We,
    deps: null,
    effects: null,
    equals: nu,
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
function Ve(e) {
  const t = /* @__PURE__ */ Hr(e);
  return pu(t), t;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = /* @__PURE__ */ Hr(e);
  return t.equals = rs, t;
}
function ru(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      cn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function J1(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & un) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ou(e) {
  var t, n = je;
  Un(J1(e));
  try {
    ru(e), t = wu(e);
  } finally {
    Un(n);
  }
  return t;
}
function iu(e) {
  var t = ou(e), n = (Bn || (e.f & qt) !== 0) && e.deps !== null ? tr : Et;
  Ut(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  je === null && Qe === null && Y1(), Qe !== null && (Qe.f & qt) !== 0 && je === null && X1(), Vo && B1();
}
function Q1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: We,
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
      Ii(i), i.f |= I1;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && Ri(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Jl | si)) === 0;
  if (!a && r && (o !== null && Q1(i, o), Qe !== null && (Qe.f & un) !== 0)) {
    var s = (
      /** @type {Derived} */
      Qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function os(e) {
  const t = hr(Li, null, !1);
  return Ut(t, Et), t.teardown = e, t;
}
function ln(e) {
  au();
  var t = je !== null && (je.f & Dn) !== 0 && We !== null && !We.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      We
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: je,
      reaction: Qe
    });
  } else {
    var r = It(e);
    return r;
  }
}
function ef(e) {
  return au(), Yr(e);
}
function tf(e) {
  const t = hr(pr, e, !0);
  return () => {
    cn(t);
  };
}
function nf(e) {
  const t = hr(pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function It(e) {
  return hr(Ul, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    We
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, Q(n.l.r2, !0), Cn(t));
  });
}
function yt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    We
  );
  Yr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Et) !== 0 && Ut(n, tr), Wr(n) && Ii(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return hr(Li, e, !0);
}
function Ce(e, t = [], n = Hr) {
  const r = t.map(n);
  return Kr(() => e(...r.map(f)));
}
function Kr(e, t = 0) {
  return hr(Li | Qa | t, e, !0);
}
function Gn(e, t = !0) {
  return hr(Li | Dn, e, !0, t);
}
function su(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vo, r = Qe;
    Rs(!0), $n(null);
    try {
      t.call(null);
    } finally {
      Rs(n), $n(r);
    }
  }
}
function lu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & pr) !== 0 ? n.parent = null : cn(n, t), n = r;
  }
}
function rf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Z1) !== 0) && e.nodes_start !== null && (uu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), lu(e, t && !n), fi(e, 0), Ut(e, Ti);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  su(e);
  var o = e.parent;
  o !== null && o.first !== null && cu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function uu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(e)
    );
    e.remove(), e = n;
  }
}
function cu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Pr(e, t) {
  var n = [];
  is(e, n, !0), du(n, () => {
    cn(e), t && t();
  });
}
function du(e, t) {
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
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & Dn) !== 0;
      is(r, t, i ? n : !1), r = o;
    }
  }
}
function vo(e) {
  fu(e, !0);
}
function fu(e, t) {
  if ((e.f & On) !== 0) {
    e.f ^= On, (e.f & Et) === 0 && (e.f ^= Et), Wr(e) && (Ut(e, bn), Ri(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & Dn) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const of = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let go = [], po = [];
function vu() {
  var e = go;
  go = [], fo(e);
}
function gu() {
  var e = po;
  po = [], fo(e);
}
function Mo(e) {
  go.length === 0 && queueMicrotask(vu), go.push(e);
}
function af(e) {
  po.length === 0 && of(gu), po.push(e);
}
function Is() {
  go.length > 0 && vu(), po.length > 0 && gu();
}
let Go = !1, ui = !1, ci = null, ar = !1, Vo = !1;
function Rs(e) {
  Vo = e;
}
let lo = [], Qe = null, mn = !1;
function $n(e) {
  Qe = e;
}
let je = null;
function Un(e) {
  je = e;
}
let Gt = null;
function pu(e) {
  Qe !== null && Qe.f & wa && (Gt === null ? Gt = [e] : Gt.push(e));
}
let _t = null, At = 0, jt = null;
function sf(e) {
  jt = e;
}
let hu = 1, di = 0, Bn = !1;
function mu() {
  return ++hu;
}
function Wr(e) {
  var t, n = e.f;
  if ((n & bn) !== 0)
    return !0;
  if ((n & tr) !== 0) {
    var r = e.deps, o = (n & qt) !== 0;
    if (r !== null) {
      var i, a, s = (n & li) !== 0, l = o && je !== null && !Bn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= li), l && d !== null && (d.f & qt) === 0 && (c.f ^= qt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Wr(
          /** @type {Derived} */
          a
        ) && iu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || je !== null && !Bn) && Ut(e, Et);
  }
  return !1;
}
function lf(e, t) {
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
function Zs(e) {
  return (e.f & Ti) === 0 && (e.parent === null || (e.parent.f & si) === 0);
}
function Ai(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), Zs(t))
      throw e;
    return;
  }
  if (n !== null && (Go = !0), lf(e, t), Zs(t))
    throw e;
}
function yu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Gt != null && Gt.includes(e) || ((i.f & un) !== 0 ? yu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ut(i, bn) : (i.f & Et) !== 0 && Ut(i, tr), Ri(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = At, o = jt, i = Qe, a = Bn, s = Gt, l = We, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, At = 0, jt = null, Bn = (c & qt) !== 0 && (mn || !ar || Qe === null), Qe = (c & (Dn | pr)) === 0 ? e : null, Gt = null, Bs(e.ctx), mn = !1, di++, e.f |= wa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), g = e.deps;
    if (_t !== null) {
      var v;
      if (fi(e, At), g !== null && At > 0)
        for (g.length = At + _t.length, v = 0; v < _t.length; v++)
          g[At + v] = _t[v];
      else
        e.deps = g = _t;
      if (!Bn)
        for (v = At; v < g.length; v++)
          ((t = g[v]).reactions ?? (t.reactions = [])).push(e);
    } else g !== null && At < g.length && (fi(e, At), g.length = At);
    if (Zi() && jt !== null && !mn && g !== null && (e.f & (un | tr | bn)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      jt.length; v++)
        yu(
          jt[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (di++, jt !== null && (o === null ? o = jt : o.push(.../** @type {Source[]} */
    jt))), d;
  } finally {
    _t = n, At = r, jt = o, Qe = i, Bn = a, Gt = s, Bs(l), mn = u, e.f ^= wa;
  }
}
function uf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = L1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(t)) && (Ut(t, tr), (t.f & (qt | li)) === 0 && (t.f ^= li), ru(
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
      uf(e, n[r]);
}
function Ii(e) {
  var t = e.f;
  if ((t & Ti) === 0) {
    Ut(e, Et);
    var n = je, r = We, o = ar;
    je = e, ar = !0;
    try {
      (t & Qa) !== 0 ? rf(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      z1 && C1 && e.f & bn;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      ar = o, je = n;
    }
  }
}
function cf() {
  try {
    K1();
  } catch (e) {
    if (ci !== null)
      Ai(e, ci, null);
    else
      throw e;
  }
}
function bu() {
  var e = ar;
  try {
    var t = 0;
    for (ar = !0; lo.length > 0; ) {
      t++ > 1e3 && cf();
      var n = lo, r = n.length;
      lo = [];
      for (var o = 0; o < r; o++) {
        var i = ff(n[o]);
        df(i);
      }
      ho.clear();
    }
  } finally {
    ui = !1, ar = e, ci = null;
  }
}
function df(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ti | On)) === 0)
        try {
          Wr(r) && (Ii(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Ai(o, r, null, r.ctx);
        }
    }
}
function Ri(e) {
  ui || (ui = !0, queueMicrotask(bu));
  for (var t = ci = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (pr | Dn)) !== 0) {
      if ((n & Et) === 0) return;
      t.f ^= Et;
    }
  }
  lo.push(t);
}
function ff(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | pr)) !== 0, i = o && (r & Et) !== 0;
    if (!i && (r & On) === 0) {
      if ((r & Ul) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Et;
      else
        try {
          Wr(n) && Ii(n);
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
    ui = !0, bu(), Is();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & un) !== 0;
  if (Qe !== null && !mn) {
    if (!(Gt != null && Gt.includes(e))) {
      var r = Qe.deps;
      e.rv < di && (e.rv = di, _t === null && r !== null && r[At] === e ? At++ : _t === null ? _t = [e] : (!Bn || !_t.includes(e)) && _t.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & qt) === 0 && (o.f ^= qt);
  }
  return n && (o = /** @type {Derived} */
  e, Wr(o) && iu(o)), Vo && ho.has(e) ? ho.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const vf = -7169;
function Ut(e, t) {
  e.f = e.f & vf | t;
}
function te(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Yn in e)
      $a(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Yn in n && $a(n);
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
      const r = Gl(n);
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
function Nr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: nu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  const n = Nr(e);
  return pu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var n;
  const r = Nr(e);
  return t || (r.equals = rs), Br && We !== null && We.l !== null && ((n = We.l).s ?? (n.s = [])).push(r), r;
}
function Q(e, t, n = !1) {
  Qe !== null && !mn && Zi() && (Qe.f & (un | Qa)) !== 0 && !(Gt != null && Gt.includes(e)) && U1();
  let r = n ? an(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? ho.set(e, t) : ho.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & bn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Ut(e, (e.f & qt) === 0 ? Et : tr)), e.wv = mu(), xu(e, bn), Zi() && je !== null && (je.f & Et) !== 0 && (je.f & (Dn | pr)) === 0 && (jt === null ? sf([e]) : jt.push(e));
  }
  return t;
}
function qs(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function xu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Zi(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & bn) === 0 && (!r && a === je || (Ut(a, t), (s & (Et | qt)) !== 0 && ((s & un) !== 0 ? xu(
        /** @type {Derived} */
        a,
        tr
      ) : Ri(
        /** @type {Effect} */
        a
      ))));
    }
}
let We = null;
function Bs(e) {
  We = e;
}
function ur(e) {
  return (
    /** @type {T} */
    as().get(e)
  );
}
function Or(e, t) {
  return as().set(e, t), t;
}
function gf(e) {
  return as().has(e);
}
function ge(e, t = !1, n) {
  var r = We = {
    p: We,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Br && !t && (We.l = {
    s: null,
    u: null,
    r1: [],
    r2: Nr(!1)
  }), os(() => {
    r.d = !0;
  });
}
function pe(e) {
  const t = We;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = je, r = Qe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Un(i.effect), $n(i.reaction), It(i.fn);
        }
      } finally {
        Un(n), $n(r);
      }
    }
    We = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Zi() {
  return !Br || We !== null && We.l === null;
}
function as(e) {
  return We === null && zi(), We.c ?? (We.c = new Map(pf(We) || void 0));
}
function pf(e) {
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
const mf = [
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
function yf(e) {
  return mf.includes(e);
}
const wf = {
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
function bf(e) {
  return e = e.toLowerCase(), wf[e] ?? e;
}
const xf = ["touchstart", "touchmove"];
function $f(e) {
  return xf.includes(e);
}
const Cf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function _f(e) {
  return Cf.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function kf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Mo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sf(e) {
  Oe && /* @__PURE__ */ gt(e) !== null && ts(e);
}
let Xs = !1;
function Ef() {
  Xs || (Xs = !0, document.addEventListener(
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
function Mf(e) {
  var t = Qe, n = je;
  $n(null), Un(null);
  try {
    return e();
  } finally {
    $n(t), Un(n);
  }
}
const $u = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set();
function Cu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || oo.call(t, i), !i.cancelBubble)
      return Mf(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function nt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Cu(e, t, n, i);
  (t === document.body || t === window || t === document) && os(() => {
    t.removeEventListener(e, a, i);
  });
}
function jr(e) {
  for (var t = 0; t < e.length; t++)
    $u.add(e[t]);
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
    var d = Qe, g = je;
    $n(null), Un(null);
    try {
      for (var v, h = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Eo(x)) {
              var [C, ...p] = x;
              C.apply(a, [e, ...p]);
            } else
              x.call(a, e);
        } catch (_) {
          v ? h.push(_) : v = _;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let _ of h)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, $n(d), Un(g);
    }
  }
}
function ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Lt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Fl) !== 0, r = (t & P1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Oe)
      return Lt(Ze, null), Ze;
    o === void 0 && (o = ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ gt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Lt(s, l);
    } else
      Lt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Fl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Oe)
      return Lt(Ze, null), Ze;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ss(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ gt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ gt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ gt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ gt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Lt(c, d);
    } else
      Lt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!Oe) {
    var t = Ln(e + "");
    return Lt(t, t), t;
  }
  var n = Ze;
  return n.nodeType !== 3 && (n.before(n = Ln()), St(n)), Lt(n, n), n;
}
function Je() {
  if (Oe)
    return Lt(Ze, null), Ze;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ln();
  return e.append(t, n), Lt(t, n), e;
}
function T(e, t) {
  if (Oe) {
    je.nodes_end = Ze, xn();
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
function _u(e, t) {
  return ku(e, t);
}
function Vf(e, t) {
  xa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Oe, o = Ze;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ja); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw _r;
    Rt(!0), St(
      /** @type {Comment} */
      i
    ), xn();
    const a = ku(e, { ...t, anchor: i });
    if (Ze === null || Ze.nodeType !== 8 || /** @type {Comment} */
    Ze.data !== Ga)
      throw Di(), _r;
    return Rt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _r)
      return t.recover === !1 && W1(), xa(), ts(n), Rt(!1), _u(e, t);
    throw a;
  } finally {
    Rt(r), St(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  xa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var g = 0; g < d.length; g++) {
      var v = d[g];
      if (!s.has(v)) {
        s.add(v);
        var h = $f(v);
        t.addEventListener(v, oo, { passive: h });
        var b = wr.get(v);
        b === void 0 ? (document.addEventListener(v, oo, { passive: h }), wr.set(v, 1)) : wr.set(v, b + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = nf(() => {
    var d = n ?? t.appendChild(Ln());
    return Gn(() => {
      if (i) {
        ge({});
        var g = (
          /** @type {ComponentContext} */
          We
        );
        g.c = i;
      }
      o && (r.$$events = o), Oe && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Oe && (je.nodes_end = Ze), i && pe();
    }), () => {
      var g;
      for (var v of s) {
        t.removeEventListener(v, oo);
        var h = (
          /** @type {number} */
          wr.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, oo), wr.delete(v)) : wr.set(v, h);
      }
      _a.delete(l), d !== n && ((g = d.parentNode) == null || g.removeChild(d));
    };
  });
  return ka.set(u, c), u;
}
let ka = /* @__PURE__ */ new WeakMap();
function Hf(e, t) {
  const n = ka.get(e);
  return n ? (ka.delete(e), n(t)) : Promise.resolve();
}
function ye(e, t, [n, r] = [0, 0]) {
  Oe && n === 0 && xn();
  var o = e, i = null, a = null, s = Pt, l = n > 0 ? Xr : 0, u = !1;
  const c = (g, v = !0) => {
    u = !0, d(v, g);
  }, d = (g, v) => {
    if (s === (s = g)) return;
    let h = !1;
    if (Oe && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ja ? r = 0 : x === Fa ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ba(), St(o), Rt(!1), h = !0, r = -1);
    }
    s ? (i ? vo(i) : v && (i = Gn(() => v(o))), a && Pr(a, () => {
      a = null;
    })) : (a ? vo(a) : v && (a = Gn(() => v(o, [n + 1, r]))), i && Pr(i, () => {
      i = null;
    })), h && Rt(!0);
  };
  Kr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Oe && (o = Ze);
}
function zr(e, t) {
  return t;
}
function Pf(e, t, n, r) {
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
    ), r.clear(), Zn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Zn(e, c.prev, c.next)), cn(c.e, !s);
    }
  });
}
function Mt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Wl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Oe ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ gt(u)
    ) : u.appendChild(Ln());
  }
  Oe && xn();
  var c = null, d = !1, g = /* @__PURE__ */ xe(() => {
    var v = n();
    return Eo(v) ? v : v == null ? [] : Ua(v);
  });
  Kr(() => {
    var v = f(g), h = v.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let b = !1;
    if (Oe) {
      var x = (
        /** @type {Comment} */
        a.data === Fa
      );
      x !== (h === 0) && (a = ba(), St(a), Rt(!1), b = !0);
    }
    if (Oe) {
      for (var C = null, p, _ = 0; _ < h; _++) {
        if (Ze.nodeType === 8 && /** @type {Comment} */
        Ze.data === Ga) {
          a = /** @type {Comment} */
          Ze, b = !0, Rt(!1);
          break;
        }
        var w = v[_], k = r(w, _);
        p = Su(
          Ze,
          s,
          C,
          null,
          w,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, p), C = p;
      }
      h > 0 && St(ba());
    }
    Oe || Nf(v, s, a, o, t, r, n), i !== null && (h === 0 ? c ? vo(c) : c = Gn(() => i(a)) : c !== null && Pr(c, () => {
      c = null;
    })), b && Rt(!0), f(g);
  }), Oe && (a = Ze);
}
function Nf(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & k1) !== 0, g = (o & (Ka | Wa)) !== 0, v = e.length, h = t.items, b = t.first, x = b, C, p = null, _, w = [], k = [], H, S, N, z;
  if (d)
    for (z = 0; z < v; z += 1)
      H = e[z], S = i(H, z), N = h.get(S), N !== void 0 && ((s = N.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(N));
  for (z = 0; z < v; z += 1) {
    if (H = e[z], S = i(H, z), N = h.get(S), N === void 0) {
      var D = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      p = Su(
        D,
        t,
        p,
        p === null ? t.first : p.next,
        H,
        S,
        z,
        r,
        o,
        a
      ), h.set(S, p), w = [], k = [], x = p.next;
      continue;
    }
    if (g && Of(N, H, z, o), (N.e.f & On) !== 0 && (vo(N.e), d && ((l = N.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(N))), N !== x) {
      if (C !== void 0 && C.has(N)) {
        if (w.length < k.length) {
          var I = k[0], L;
          p = I.prev;
          var Z = w[0], E = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Ys(w[L], I, n);
          for (L = 0; L < k.length; L += 1)
            C.delete(k[L]);
          Zn(t, Z.prev, E.next), Zn(t, p, Z), Zn(t, E, I), x = I, p = E, z -= 1, w = [], k = [];
        } else
          C.delete(N), Ys(N, x, n), Zn(t, N.prev, N.next), Zn(t, N, p === null ? t.first : p.next), Zn(t, p, N), p = N;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== S; )
        (x.e.f & On) === 0 && (C ?? (C = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      N = x;
    }
    w.push(N), p = N, x = N.next;
  }
  if (x !== null || C !== void 0) {
    for (var $ = C === void 0 ? [] : Ua(C); x !== null; )
      (x.e.f & On) === 0 && $.push(x), x = x.next;
    var M = $.length;
    if (M > 0) {
      var O = (o & Wl) !== 0 && v === 0 ? n : null;
      if (d) {
        for (z = 0; z < M; z += 1)
          (u = $[z].a) == null || u.measure();
        for (z = 0; z < M; z += 1)
          (c = $[z].a) == null || c.fix();
      }
      Pf(t, $, O, h);
    }
  }
  d && Mo(() => {
    var V;
    if (_ !== void 0)
      for (N of _)
        (V = N.a) == null || V.apply();
  }), je.first = t.first && t.first.e, je.last = p && p.e;
}
function Of(e, t, n, r) {
  (r & Ka) !== 0 && Ca(e.v, t), (r & Wa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ka) !== 0, d = (l & S1) === 0, g = c ? d ? /* @__PURE__ */ ie(o) : Nr(o) : o, v = (l & Wa) === 0 ? a : Nr(a), h = {
    i: v,
    v: g,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = Gn(() => s(e, g, v, u), Oe), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Ys(e, t, n) {
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
function Zn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ls(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Ce(() => {
    var s = (
      /** @type {Effect} */
      je
    );
    if (a === (a = t() ?? "")) {
      Oe && xn();
      return;
    }
    if (s.nodes_start !== null && (uu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (Oe) {
        Ze.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Di(), _r;
        Lt(Ze, u), i = St(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = ss(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ gt(d)), Lt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ gt(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ gt(d)
          );
      else
        i.before(d);
    }
  });
}
function xt(e, t, n, r, o) {
  var i;
  Oe && xn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function zf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function cr(e, t, ...n) {
  var r = e, o = pt, i;
  Kr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Gn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Oe && (r = Ze);
}
function Eu(e, t, n) {
  Oe && xn();
  var r = e, o, i;
  Kr(() => {
    o !== (o = t()) && (i && (Pr(i), i = null), o && (i = Gn(() => n(r, o))));
  }, Xr), Oe && (r = Ze);
}
function Lf(e, t, n, r, o, i) {
  let a = Oe;
  Oe && xn();
  var s, l, u = null;
  Oe && Ze.nodeType === 1 && (u = /** @type {Element} */
  Ze, xn());
  var c = (
    /** @type {TemplateNode} */
    Oe ? Ze : e
  ), d;
  Kr(() => {
    const g = t() || null;
    var v = g === "svg" ? O1 : null;
    g !== s && (d && (g === null ? Pr(d, () => {
      d = null, l = null;
    }) : g === l ? vo(d) : cn(d)), g && g !== l && (d = Gn(() => {
      if (u = Oe ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, g) : document.createElement(g), Lt(u, u), r) {
        Oe && _f(g) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Oe ? /* @__PURE__ */ gt(u) : u.appendChild(Ln())
        );
        Oe && (h === null ? Rt(!1) : St(h)), r(u, h);
      }
      je.nodes_end = u, c.before(u);
    })), s = g, s && (l = s));
  }, Xr), a && (Rt(!0), St(c));
}
function Ue(e, t) {
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
function bt(e, t, n) {
  It(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Yr(() => {
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
function Mu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Mu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Tf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Mu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Tf(e) : e ?? "";
}
const Ks = [...` 	
\r\f \v\uFEFF`];
function Df(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || Ks.includes(r[a - 1])) && (s === r.length || Ks.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function Ws(e, t = !1) {
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
function Af(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(aa)), o && l.push(...Object.keys(o).map(aa));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var g = e[d];
        if (s ? g === "/" && e[d - 1] === "*" && (s = !1) : i ? i === g && (i = !1) : g === "/" && e[d + 1] === "*" ? s = !0 : g === '"' || g === "'" ? i = g : g === "(" ? a++ : g === ")" && a--, !s && i === !1 && a === 0) {
          if (g === ":" && c === -1)
            c = d;
          else if (g === ";" || d === b - 1) {
            if (c !== -1) {
              var v = aa(e.substring(u, c).trim());
              if (!l.includes(v)) {
                g !== ";" && d++;
                var h = e.substring(u, d).trim();
                n += " " + h + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Ws(r)), o && (n += Ws(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function $t(e, t, n, r, o, i) {
  var a = e.__className;
  if (Oe || a !== n || a === void 0) {
    var s = Df(n, r, i);
    (!Oe || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
function ft(e, t, n, r) {
  var o = e.__style;
  if (Oe || o !== t) {
    var i = Af(t, r);
    (!Oe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (sa(e, n == null ? void 0 : n[0], r[0]), sa(e, n == null ? void 0 : n[1], r[1], "important")) : sa(e, n, r));
  return r;
}
const to = Symbol("class"), rr = Symbol("style"), Vu = Symbol("is custom element"), Hu = Symbol("is html");
function Kn(e) {
  if (Oe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          $e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, af(n), Ef();
  }
}
function Uo(e, t) {
  var n = qi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function If(e, t) {
  var n = qi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Rf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = qi(e);
  Oe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[q1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xt(e, t, n, r, o = !1) {
  var i = qi(e), a = i[Vu], s = !i[Hu];
  let l = Oe && a;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[rr] && (n.style ?? (n.style = null));
  var g = Pu(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", u[_] = w;
      continue;
    }
    if (_ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, v, w, r, t == null ? void 0 : t[to], n[to]), u[_] = w, u[to] = n[to];
      continue;
    }
    if (_ === "style") {
      ft(e, w, t == null ? void 0 : t[rr], n[rr]), u[_] = w, u[rr] = n[rr];
      continue;
    }
    var h = u[_];
    if (w !== h) {
      u[_] = w;
      var b = _[0] + _[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, H = "$$" + _;
          let S = _.slice(2);
          var x = yf(S);
          if (hf(S) && (S = S.slice(0, -7), k.capture = !0), !x && h) {
            if (w != null) continue;
            e.removeEventListener(S, u[H], k), u[H] = null;
          }
          if (w != null)
            if (x)
              e[`__${S}`] = w, jr([S]);
            else {
              let N = function(z) {
                u[_].call(this, z);
              };
              u[H] = Cu(S, e, N, k);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (_ === "style")
          $e(e, _, w);
        else if (_ === "autofocus")
          kf(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          Rf(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = _;
          s || (C = bf(C));
          var p = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !p)
            if (i[_] = null, C === "value" || C === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (C === "value") {
                let S = k.defaultValue;
                k.removeAttribute(C), k.defaultValue = S, k.value = k.__value = H ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(C), k.defaultChecked = S, k.checked = H ? S : !1;
              }
            } else
              e.removeAttribute(_);
          else p || g.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && $e(e, C, w);
        }
    }
  }
  return l && Rt(!0), u;
}
function qi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Hu]: e.namespaceURI === N1
    })
  );
}
var js = /* @__PURE__ */ new Map();
function Pu(e) {
  var t = js.get(e.nodeName);
  if (t) return t;
  js.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Gl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ja(r);
  }
  return t;
}
var or, uo, Jo, Sa, Nu;
const Ea = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    $r(this, Sa), $r(this, or, /* @__PURE__ */ new WeakMap()), $r(this, uo), $r(this, Jo), ii(this, Jo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, or).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, or).set(t, r), x1(this, Sa, Nu).call(this).observe(t, ut(this, Jo)), () => {
      var o = ut(this, or).get(t);
      o.delete(n), o.size === 0 && (ut(this, or).delete(t), ut(this, uo).unobserve(t));
    };
  }
};
or = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakSet(), Nu = function() {
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
Ot(Ea, "entries", /* @__PURE__ */ new WeakMap());
let Zf = Ea;
var qf = /* @__PURE__ */ new Zf({
  box: "border-box"
});
function Fs(e, t, n) {
  var r = qf.observe(e, () => n(e[t]));
  It(() => (Cn(() => n(e[t])), r));
}
function Gs(e, t) {
  return e === t || (e == null ? void 0 : e[Yn]) === t;
}
function _n(e = {}, t, n, r) {
  return It(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Gs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Mo(() => {
        i && Gs(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ae(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    We
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
    r = () => f(a);
  }
  n.b.length && ef(() => {
    Us(t, r), fo(n.b);
  }), ln(() => {
    const o = Cn(() => n.m.map(A1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && ln(() => {
    Us(t, r), fo(n.a);
  });
}
function Us(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Xe(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Eo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Qt(e) {
  We === null && zi(), Br && We.l !== null ? Xf(We).m.push(e) : ln(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  We === null && zi(), Qt(() => () => Cn(e));
}
function Bf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Bi() {
  const e = We;
  return e === null && zi(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Eo(i) ? i.slice() : [i], s = Bf(
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
function Xf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function cs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), pt;
  const r = Cn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const br = [];
function Wt(e, t) {
  return {
    subscribe: _e(e, t).subscribe
  };
}
function _e(e, t = pt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (ns(e, s) && (e = s, n)) {
      const l = !br.length;
      for (const u of r)
        u[1](), br.push(u, e);
      if (l) {
        for (let u = 0; u < br.length; u += 2)
          br[u][0](br[u + 1]);
        br.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = pt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || pt), s(
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
  return Wt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = pt;
    const g = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : pt;
    }, v = o.map(
      (h, b) => cs(
        h,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && g();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, g(), function() {
      fo(v), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Bo = !1, Ma = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: pt
  });
  if (r.store !== e && !(Ma in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = pt;
    else {
      var o = !0;
      r.unsubscribe = cs(e, (i) => {
        o ? r.source.v = i : Q(r.source, i);
      }), o = !1;
    }
  return e && Ma in n ? F(e) : f(r.source);
}
function Yf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pt), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function rt() {
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
function Kf(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
  }
}
const Wf = {
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
function wt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Wf
  );
}
const jf = {
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
      jl
    )), e.special[t](n), qs(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), qs(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function st(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Nr(0) }, jf);
}
const Ff = {
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
    if (t === Yn || t === es) return !1;
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
  return new Proxy({ props: e }, Ff);
}
function Js(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & E1) !== 0, a = !Br || (n & M1) !== 0, s = (n & V1) !== 0, l = (n & H1) !== 0, u = !1, c;
  s ? [c, u] = Kf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || es in e, g = s && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
    /** @type {V} */
    r
  ), h = !0, b = !1, x = () => (b = !0, h && (h = !1, l ? v = Cn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (g && a && j1(), c = x(), g && g(c));
  var C;
  if (a)
    C = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (h = !0, b = !1, S);
    };
  else {
    var p = (i ? Hr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= R1, C = () => {
      var S = f(p);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if ((n & jl) === 0)
    return C;
  if (g) {
    var _ = e.$$legacy;
    return function(S, N) {
      return arguments.length > 0 ? ((!a || !N || _ || u) && g(N ? C() : S), S) : C();
    };
  }
  var w = !1, k = /* @__PURE__ */ ie(c), H = /* @__PURE__ */ Hr(() => {
    var S = C(), N = f(k);
    return w ? (w = !1, N) : k.v = S;
  });
  return s && f(H), i || (H.equals = rs), function(S, N) {
    if (arguments.length > 0) {
      const z = N ? f(H) : a && s ? an(S) : S;
      if (!H.equals(z)) {
        if (w = !0, Q(k, z), b && v !== void 0 && (v = z), Js(H))
          return S;
        Cn(() => f(H));
      }
      return S;
    }
    return Js(H) ? H.v : f(H);
  };
}
function Gf(e) {
  return new Uf(e);
}
var Rn, rn;
class Uf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    $r(this, Rn), $r(this, rn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ie(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === es ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return Q(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ii(this, rn, (t.hydrate ? Vf : _u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ii(this, Rn, i.$$events);
    for (const a of Object.keys(ut(this, rn)))
      a === "$set" || a === "$destroy" || a === "$on" || co(this, a, {
        get() {
          return ut(this, rn)[a];
        },
        /** @param {any} value */
        set(s) {
          ut(this, rn)[a] = s;
        },
        enumerable: !0
      });
    ut(this, rn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ut(this, rn).$destroy = () => {
      Hf(ut(this, rn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ut(this, rn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ut(this, Rn)[t] = ut(this, Rn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ut(this, Rn)[t].push(r), () => {
      ut(this, Rn)[t] = ut(this, Rn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ut(this, rn).$destroy();
  }
}
Rn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
let Ou;
typeof HTMLElement == "function" && (Ou = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ot(this, "$$ctor"), Ot(this, "$$s"), Ot(this, "$$c"), Ot(this, "$$cn", !1), Ot(this, "$$d", {}), Ot(this, "$$r", !1), Ot(this, "$$p_d", {}), Ot(this, "$$l", {}), Ot(this, "$$l_u", /* @__PURE__ */ new Map()), Ot(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Jf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Qo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Gf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = tf(() => {
        Yr(() => {
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
function Jf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let a = class extends Ou {
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
          var d = (u = Nn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
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
function Vt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Vt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Qf = { value: () => {
} };
function Xi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ei(n);
}
function ei(e) {
  this._ = e;
}
function ev(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ei.prototype = Xi.prototype = {
  constructor: ei,
  on: function(e, t) {
    var n = this._, r = ev(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = tv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = Qs(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Qs(n[o], e.name, null);
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
function tv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Qs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Qf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Va = "http://www.w3.org/1999/xhtml";
const el = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Va,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Yi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), el.hasOwnProperty(t) ? { space: el[t], local: e } : e;
}
function nv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Va && t.documentElement.namespaceURI === Va ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function rv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Yi(e);
  return (t.local ? rv : nv)(t);
}
function ov() {
}
function ds(e) {
  return e == null ? ov : function() {
    return this.querySelector(e);
  };
}
function iv(e) {
  typeof e != "function" && (e = ds(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Yt(r, this._parents);
}
function av(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function sv() {
  return [];
}
function Lu(e) {
  return e == null ? sv : function() {
    return this.querySelectorAll(e);
  };
}
function lv(e) {
  return function() {
    return av(e.apply(this, arguments));
  };
}
function uv(e) {
  typeof e == "function" ? e = lv(e) : e = Lu(e);
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
var cv = Array.prototype.find;
function dv(e) {
  return function() {
    return cv.call(this.children, e);
  };
}
function fv() {
  return this.firstElementChild;
}
function vv(e) {
  return this.select(e == null ? fv : dv(typeof e == "function" ? e : Du(e)));
}
var gv = Array.prototype.filter;
function pv() {
  return Array.from(this.children);
}
function hv(e) {
  return function() {
    return gv.call(this.children, e);
  };
}
function mv(e) {
  return this.selectAll(e == null ? pv : hv(typeof e == "function" ? e : Du(e)));
}
function yv(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Yt(r, this._parents);
}
function Au(e) {
  return new Array(e.length);
}
function wv() {
  return new Yt(this._enter || this._groups.map(Au), this._parents);
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
function bv(e) {
  return function() {
    return e;
  };
}
function xv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new gi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function $v(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, g = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (g[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new gi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(g[s]) === l && (o[s] = l);
}
function Cv(e) {
  return e.__data__;
}
function _v(e, t) {
  if (!arguments.length) return Array.from(this, Cv);
  var n = t ? $v : xv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = bv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], g = d.length, v = kv(e.call(c, c && c.__data__, u, r)), h = v.length, b = s[u] = new Array(h), x = a[u] = new Array(h), C = l[u] = new Array(g);
    n(c, d, b, x, C, v, t);
    for (var p = 0, _ = 0, w, k; p < h; ++p)
      if (w = b[p]) {
        for (p >= _ && (_ = p + 1); !(k = x[_]) && ++_ < h; ) ;
        w._next = k || null;
      }
  }
  return a = new Yt(a, r), a._enter = s, a._exit = l, a;
}
function kv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sv() {
  return new Yt(this._exit || this._groups.map(Au), this._parents);
}
function Ev(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Mv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, g = s[l] = new Array(d), v, h = 0; h < d; ++h)
      (v = u[h] || c[h]) && (g[h] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Yt(s, this._parents);
}
function Vv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Hv(e) {
  e || (e = Pv);
  function t(d, g) {
    return d && g ? e(d.__data__, g.__data__) : !d - !g;
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
function Nv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ov() {
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
function Lv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Tv() {
  return !this.node();
}
function Dv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Av(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Iv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Rv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Zv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function qv(e, t) {
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
function Xv(e, t) {
  var n = Yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Iv : Av : typeof t == "function" ? n.local ? Bv : qv : n.local ? Zv : Rv)(n, t));
}
function Iu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Yv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Wv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function jv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Yv : typeof t == "function" ? Wv : Kv)(e, t, n ?? "")) : Lr(this.node(), e);
}
function Lr(e, t) {
  return e.style.getPropertyValue(t) || Iu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Fv(e) {
  return function() {
    delete this[e];
  };
}
function Gv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Uv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Jv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Fv : typeof t == "function" ? Uv : Gv)(e, t)) : this.node()[e];
}
function Ru(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new Zu(e);
}
function Zu(e) {
  this._node = e, this._names = Ru(e.getAttribute("class") || "");
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
function qu(e, t) {
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Bu(e, t) {
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Qv(e) {
  return function() {
    qu(this, e);
  };
}
function eg(e) {
  return function() {
    Bu(this, e);
  };
}
function tg(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Bu)(this, e);
  };
}
function ng(e, t) {
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? tg : t ? Qv : eg)(n, t));
}
function rg() {
  this.textContent = "";
}
function og(e) {
  return function() {
    this.textContent = e;
  };
}
function ig(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ag(e) {
  return arguments.length ? this.each(e == null ? rg : (typeof e == "function" ? ig : og)(e)) : this.node().textContent;
}
function sg() {
  this.innerHTML = "";
}
function lg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function cg(e) {
  return arguments.length ? this.each(e == null ? sg : (typeof e == "function" ? ug : lg)(e)) : this.node().innerHTML;
}
function dg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fg() {
  return this.each(dg);
}
function vg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function gg() {
  return this.each(vg);
}
function pg(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function mg(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? hg : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function yg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function wg() {
  return this.each(yg);
}
function bg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $g(e) {
  return this.select(e ? xg : bg);
}
function Cg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function _g(e) {
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
function Sg(e) {
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
    var r = this.__on, o, i = _g(t);
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
  for (s = t ? Eg : Sg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Iu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Vg(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Hg(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Pg(e, t) {
  return this.each((typeof t == "function" ? Hg : Vg)(e, t));
}
function* Ng() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Yu = [null];
function Yt(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Yt([[document.documentElement]], Yu);
}
function Og() {
  return this;
}
Yt.prototype = Ho.prototype = {
  constructor: Yt,
  select: iv,
  selectAll: uv,
  selectChild: vv,
  selectChildren: mv,
  filter: yv,
  data: _v,
  enter: wv,
  exit: Sv,
  join: Ev,
  merge: Mv,
  selection: Og,
  order: Vv,
  sort: Hv,
  call: Nv,
  nodes: Ov,
  node: zv,
  size: Lv,
  empty: Tv,
  each: Dv,
  attr: Xv,
  style: jv,
  property: Jv,
  classed: ng,
  text: ag,
  html: cg,
  raise: fg,
  lower: gg,
  append: pg,
  insert: mg,
  remove: wg,
  clone: $g,
  datum: Cg,
  on: Mg,
  dispatch: Pg,
  [Symbol.iterator]: Ng
};
function Ft(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], Yu);
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
const Lg = { passive: !1 }, mo = { capture: !0, passive: !1 };
function la(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ku(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", kr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", kr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wu(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Xo = (e) => () => e;
function Ha(e, {
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
Ha.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Tg(e) {
  return !e.ctrlKey && !e.button;
}
function Dg() {
  return this.parentNode;
}
function Ag(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ig() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rg() {
  var e = Tg, t = Dg, n = Ag, r = Ig, o = {}, i = Xi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function g(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", C, Lg).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var H = _(this, t.call(this, w, k), w, k, "mouse");
      H && (Ft(w.view).on("mousemove.drag", h, mo).on("mouseup.drag", b, mo), Ku(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, H("start", w));
    }
  }
  function h(w) {
    if (kr(w), !u) {
      var k = w.clientX - s, H = w.clientY - l;
      u = k * k + H * H > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    Ft(w.view).on("mousemove.drag mouseup.drag", null), Wu(w.view, u), kr(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var H = w.changedTouches, S = t.call(this, w, k), N = H.length, z, D;
      for (z = 0; z < N; ++z)
        (D = _(this, S, w, k, H[z].identifier, H[z])) && (la(w), D("start", w, H[z]));
    }
  }
  function C(w) {
    var k = w.changedTouches, H = k.length, S, N;
    for (S = 0; S < H; ++S)
      (N = o[k[S].identifier]) && (kr(w), N("drag", w, k[S]));
  }
  function p(w) {
    var k = w.changedTouches, H = k.length, S, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < H; ++S)
      (N = o[k[S].identifier]) && (la(w), N("end", w, k[S]));
  }
  function _(w, k, H, S, N, z) {
    var D = i.copy(), I = on(z || H, k), L, Z, E;
    if ((E = n.call(w, new Ha("beforestart", {
      sourceEvent: H,
      target: g,
      identifier: N,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), S)) != null)
      return L = E.x - I[0] || 0, Z = E.y - I[1] || 0, function $(M, O, V) {
        var P = I, A;
        switch (M) {
          case "start":
            o[N] = $, A = a++;
            break;
          case "end":
            delete o[N], --a;
          // falls through
          case "drag":
            I = on(V || O, k), A = a;
            break;
        }
        D.call(
          M,
          w,
          new Ha(M, {
            sourceEvent: O,
            subject: E,
            target: g,
            identifier: N,
            active: A,
            x: I[0] + L,
            y: I[1] + Z,
            dx: I[0] - P[0],
            dy: I[1] - P[1],
            dispatch: D
          }),
          S
        );
      };
  }
  return g.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Xo(!!w), g) : e;
  }, g.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Xo(w), g) : t;
  }, g.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Xo(w), g) : n;
  }, g.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Xo(!!w), g) : r;
  }, g.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? g : w;
  }, g.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, g) : Math.sqrt(d);
  }, g;
}
function vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ju(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Po() {
}
var yo = 0.7, pi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, qg = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Bg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Xg = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Yg = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Kg = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), Wg = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
vs(Po, bo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: jg,
  formatHsl: Fg,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function jg() {
  return this.rgb().formatHex8();
}
function Fg() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = qg.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Bg.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Xg.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Wg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Gg(e) {
  return e instanceof Po || (e = bo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Pa(e, t, n, r) {
  return arguments.length === 1 ? Gg(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(zt, Pa, ju(Po, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(sr(this.r), sr(this.g), sr(this.b), hi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: il,
  // Deprecated! Use color.formatHex.
  formatHex: il,
  formatHex8: Ug,
  formatRgb: al,
  toString: al
}));
function il() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Ug() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function al() {
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
function sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function Fu(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Po || (e = bo(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new sn(a, s, l, e.opacity);
}
function Jg(e, t, n, r) {
  return arguments.length === 1 ? Fu(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(sn, Jg, ju(Po, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      ua(e >= 240 ? e - 240 : e + 120, o, r),
      ua(e, o, r),
      ua(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new sn(ll(this.h), Ko(this.s), Ko(this.l), hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = hi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ll(this.h)}, ${Ko(this.s) * 100}%, ${Ko(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ll(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ko(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ua(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Gu = (e) => () => e;
function Qg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ep(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function tp(e) {
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? ep(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? Qg(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = tp(t);
  function r(o, i) {
    var a = n((o = Pa(o)).r, (i = Pa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Uu(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function qn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Na = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ca = new RegExp(Na.source, "g");
function np(e) {
  return function() {
    return e;
  };
}
function rp(e) {
  return function(t) {
    return e(t) + "";
  };
}
function op(e, t) {
  var n = Na.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Na.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: qn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? rp(l[0].x) : np(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var cl = 180 / Math.PI, Ju = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qu(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * cl,
    skewX: Math.atan(l) * cl,
    scaleX: a,
    scaleY: s
  };
}
var Wo;
function ip(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ap(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, g, v, h) {
    if (u !== d || c !== g) {
      var b = v.push("translate(", null, t, null, n);
      h.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, g) });
    } else (d || g) && v.push("translate(" + d + t + g + n);
  }
  function a(u, c, d, g) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), g.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, g) {
    u !== c ? g.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, g, v, h) {
    if (u !== d || c !== g) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      h.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, g) });
    } else (d !== 1 || g !== 1) && v.push(o(v) + "scale(" + d + "," + g + ")");
  }
  return function(u, c) {
    var d = [], g = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, g), a(u.rotate, c.rotate, d, g), s(u.skewX, c.skewX, d, g), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, g), u = c = null, function(v) {
      for (var h = -1, b = g.length, x; ++h < b; ) d[(x = g[h]).i] = x.x(v);
      return d.join("");
    };
  };
}
var sp = ec(ip, "px, ", "px)", "deg)"), lp = ec(ap, ", ", ")", ")"), up = 1e-12;
function dl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function cp(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function dp(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const fp = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], g = a[2], v = c - s, h = d - l, b = v * v + h * h, x, C;
    if (b < up)
      C = Math.log(g / u) / t, x = function(S) {
        return [
          s + S * v,
          l + S * h,
          u * Math.exp(t * S * C)
        ];
      };
    else {
      var p = Math.sqrt(b), _ = (g * g - u * u + r * b) / (2 * u * n * p), w = (g * g - u * u - r * b) / (2 * g * n * p), k = Math.log(Math.sqrt(_ * _ + 1) - _), H = Math.log(Math.sqrt(w * w + 1) - w);
      C = (H - k) / t, x = function(S) {
        var N = S * C, z = dl(k), D = u / (n * p) * (z * dp(t * N + k) - cp(k));
        return [
          s + D * v,
          l + D * h,
          u * z / dl(t * N + k)
        ];
      };
    }
    return x.duration = C * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Tr = 0, io = 0, no = 0, tc = 1e3, mi, ao, yi = 0, dr = 0, Ki = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gs() {
  return dr || (nc(vp), dr = xo.now() + Ki);
}
function vp() {
  dr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = rc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? gs() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : mi = this, ao = this), this._call = e, this._time = n, Oa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Oa());
  }
};
function rc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function gp() {
  gs(), ++Tr;
  for (var e = mi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tr;
}
function fl() {
  dr = (yi = xo.now()) + Ki, Tr = io = 0;
  try {
    gp();
  } finally {
    Tr = 0, hp(), dr = 0;
  }
}
function pp() {
  var e = xo.now(), t = e - yi;
  t > tc && (Ki -= t, yi = e);
}
function hp() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  ao = e, Oa(r);
}
function Oa(e) {
  if (!Tr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - xo.now() - Ki)), no && (no = clearInterval(no))) : (no || (yi = xo.now(), no = setInterval(pp, tc)), Tr = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var mp = Xi("start", "end", "cancel", "interrupt"), yp = [], oc = 0, gl = 1, za = 2, ti = 3, pl = 4, La = 5, ni = 6;
function Wi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  wp(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: mp,
    tween: yp,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: oc
  });
}
function ps(e, t) {
  var n = gn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = gn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function wp(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = rc(i, 0, n.time);
  function i(u) {
    n.state = gl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, g, v;
    if (n.state !== gl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === ti) return vl(a);
        v.state === pl ? (v.state = ni, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = ni, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ti && (n.state = pl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = za, n.on.call("start", e, e.__data__, n.index, n.group), n.state === za) {
      for (n.state = ti, o = new Array(g = n.tween.length), c = 0, d = -1; c < g; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = La, 1), d = -1, g = o.length; ++d < g; )
      o[d].call(e, c);
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
      o = r.state > za && r.state < La, r.state = ni, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function bp(e) {
  return this.each(function() {
    ri(this, e);
  });
}
function xp(e, t) {
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
function $p(e, t, n) {
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
function Cp(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? xp : $p)(n, e, t));
}
function hs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function ic(e, t) {
  var n;
  return (typeof t == "number" ? qn : t instanceof bo ? ul : (n = bo(t)) ? (t = n, ul) : op)(e, t);
}
function _p(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function kp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Sp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Ep(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Mp(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Vp(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Hp(e, t) {
  var n = Yi(e), r = n === "transform" ? lp : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Vp : Mp)(n, r, hs(this, "attr." + e, t)) : t == null ? (n.local ? kp : _p)(n) : (n.local ? Ep : Sp)(n, r, t));
}
function Pp(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Np(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Op(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Np(e, i)), n;
  }
  return o._value = t, o;
}
function zp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pp(e, i)), n;
  }
  return o._value = t, o;
}
function Lp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Yi(e);
  return this.tween(n, (r.local ? Op : zp)(r, t));
}
function Tp(e, t) {
  return function() {
    ps(this, e).delay = +t.apply(this, arguments);
  };
}
function Dp(e, t) {
  return t = +t, function() {
    ps(this, e).delay = t;
  };
}
function Ap(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tp : Dp)(t, e)) : gn(this.node(), t).delay;
}
function Ip(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Rp(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Zp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ip : Rp)(t, e)) : gn(this.node(), t).duration;
}
function qp(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Bp(e) {
  var t = this._id;
  return arguments.length ? this.each(qp(t, e)) : gn(this.node(), t).ease;
}
function Xp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Yp(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Xp(this._id, e));
}
function Kp(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function Wp(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), g, v = 0; v < c; ++v)
      (g = l[v] || u[v]) && (d[v] = g);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Tn(a, this._parents, this._name, this._id);
}
function jp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Fp(e, t, n) {
  var r, o, i = jp(t) ? ps : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Gp(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(Fp(n, e, t));
}
function Up(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Jp() {
  return this.on("end.remove", Up(this._id));
}
function Qp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, g = 0; g < l; ++g)
      (c = s[g]) && (d = e.call(c, c.__data__, g, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[g] = d, Wi(u[g], t, n, g, u, gn(c, n)));
  return new Tn(i, this._parents, t, n);
}
function eh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var g = e.call(c, c.__data__, d, l), v, h = gn(c, n), b = 0, x = g.length; b < x; ++b)
          (v = g[b]) && Wi(v, t, n, b, g, h);
        i.push(g), a.push(c);
      }
  return new Tn(i, a, t, n);
}
var th = Ho.prototype.constructor;
function nh() {
  return new th(this._groups, this._parents);
}
function rh(e, t) {
  var n, r, o;
  return function() {
    var i = Lr(this, e), a = (this.style.removeProperty(e), Lr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function ac(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function oh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Lr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function ih(e, t, n) {
  var r, o, i;
  return function() {
    var a = Lr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Lr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function ah(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = En(this, e), u = l.on, c = l.value[i] == null ? s || (s = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function sh(e, t, n) {
  var r = (e += "") == "transform" ? sp : ic;
  return t == null ? this.styleTween(e, rh(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, ih(e, r, hs(this, "style." + e, t))).each(ah(this._id, e)) : this.styleTween(e, oh(e, r, t), n).on("end.style." + e, null);
}
function lh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function uh(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && lh(e, a, n)), r;
  }
  return i._value = t, i;
}
function ch(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, uh(e, t, n ?? ""));
}
function dh(e) {
  return function() {
    this.textContent = e;
  };
}
function fh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function vh(e) {
  return this.tween("text", typeof e == "function" ? fh(hs(this, "text", e)) : dh(e == null ? "" : e + ""));
}
function gh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function ph(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && gh(o)), t;
  }
  return r._value = e, r;
}
function hh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, ph(e));
}
function mh() {
  for (var e = this._name, t = this._id, n = sc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = gn(l, t);
        Wi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function yh() {
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
var wh = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++wh;
}
var Vn = Ho.prototype;
Tn.prototype = {
  constructor: Tn,
  select: Qp,
  selectAll: eh,
  selectChild: Vn.selectChild,
  selectChildren: Vn.selectChildren,
  filter: Kp,
  merge: Wp,
  selection: nh,
  transition: mh,
  call: Vn.call,
  nodes: Vn.nodes,
  node: Vn.node,
  size: Vn.size,
  empty: Vn.empty,
  each: Vn.each,
  on: Gp,
  attr: Hp,
  attrTween: Lp,
  style: sh,
  styleTween: ch,
  text: vh,
  textTween: hh,
  remove: Jp,
  tween: Cp,
  delay: Ap,
  duration: Zp,
  ease: Bp,
  easeVarying: Yp,
  end: yh,
  [Symbol.iterator]: Vn[Symbol.iterator]
};
function bh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bh
};
function $h(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ch(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = sc(), (n = xh).time = gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Wi(l, e, t, u, a, n || $h(l, t));
  return new Tn(r, this._parents, e, t);
}
Ho.prototype.interrupt = bp;
Ho.prototype.transition = Ch;
const jo = (e) => () => e;
function _h(e, {
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
var ji = new Hn(1, 0, 0);
lc.prototype = Hn.prototype;
function lc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ji;
  return e.__zoom;
}
function da(e) {
  e.stopImmediatePropagation();
}
function ro(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Sh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hl() {
  return this.__zoom || ji;
}
function Eh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Mh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function uc() {
  var e = kh, t = Sh, n = Vh, r = Eh, o = Mh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = fp, u = Xi("start", "zoom", "end"), c, d, g, v = 500, h = 150, b = 0, x = 10;
  function C(E) {
    E.property("__zoom", hl).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(E, $, M, O) {
    var V = E.selection ? E.selection() : E;
    V.property("__zoom", hl), E !== V ? k(E, $, M, O) : V.interrupt().each(function() {
      H(this, arguments).event(O).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, C.scaleBy = function(E, $, M, O) {
    C.scaleTo(E, function() {
      var V = this.__zoom.k, P = typeof $ == "function" ? $.apply(this, arguments) : $;
      return V * P;
    }, M, O);
  }, C.scaleTo = function(E, $, M, O) {
    C.transform(E, function() {
      var V = t.apply(this, arguments), P = this.__zoom, A = M == null ? w(V) : typeof M == "function" ? M.apply(this, arguments) : M, X = P.invert(A), K = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(_(p(P, K), A, X), V, a);
    }, M, O);
  }, C.translateBy = function(E, $, M, O) {
    C.transform(E, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, O);
  }, C.translateTo = function(E, $, M, O, V) {
    C.transform(E, function() {
      var P = t.apply(this, arguments), A = this.__zoom, X = O == null ? w(P) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(ji.translate(X[0], X[1]).scale(A.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), P, a);
    }, O, V);
  };
  function p(E, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === E.k ? E : new Hn($, E.x, E.y);
  }
  function _(E, $, M) {
    var O = $[0] - M[0] * E.k, V = $[1] - M[1] * E.k;
    return O === E.x && V === E.y ? E : new Hn(E.k, O, V);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, $, M, O) {
    E.on("start.zoom", function() {
      H(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var V = this, P = arguments, A = H(V, P).event(O), X = t.apply(V, P), K = M == null ? w(X) : typeof M == "function" ? M.apply(V, P) : M, G = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), J = V.__zoom, W = typeof $ == "function" ? $.apply(V, P) : $, ve = l(J.invert(K).concat(G / J.k), W.invert(K).concat(G / W.k));
      return function(fe) {
        if (fe === 1) fe = W;
        else {
          var me = ve(fe), se = G / me[2];
          fe = new Hn(se, K[0] - me[0] * se, K[1] - me[1] * se);
        }
        A.zoom(null, fe);
      };
    });
  }
  function H(E, $, M) {
    return !M && E.__zooming || new S(E, $);
  }
  function S(E, $) {
    this.that = E, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, $), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, $) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var $ = Ft(this.that).datum();
      u.call(
        E,
        this.that,
        new _h(E, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        $
      );
    }
  };
  function N(E, ...$) {
    if (!e.apply(this, arguments)) return;
    var M = H(this, $).event(E), O = this.__zoom, V = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), P = on(E);
    if (M.wheel)
      (M.mouse[0][0] !== P[0] || M.mouse[0][1] !== P[1]) && (M.mouse[1] = O.invert(M.mouse[0] = P)), clearTimeout(M.wheel);
    else {
      if (O.k === V) return;
      M.mouse = [P, O.invert(P)], ri(this), M.start();
    }
    ro(E), M.wheel = setTimeout(A, h), M.zoom("mouse", n(_(p(O, V), M.mouse[0], M.mouse[1]), M.extent, a));
    function A() {
      M.wheel = null, M.end();
    }
  }
  function z(E, ...$) {
    if (g || !e.apply(this, arguments)) return;
    var M = E.currentTarget, O = H(this, $, !0).event(E), V = Ft(E.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", G, !0), P = on(E, M), A = E.clientX, X = E.clientY;
    Ku(E.view), da(E), O.mouse = [P, this.__zoom.invert(P)], ri(this), O.start();
    function K(J) {
      if (ro(J), !O.moved) {
        var W = J.clientX - A, ve = J.clientY - X;
        O.moved = W * W + ve * ve > b;
      }
      O.event(J).zoom("mouse", n(_(O.that.__zoom, O.mouse[0] = on(J, M), O.mouse[1]), O.extent, a));
    }
    function G(J) {
      V.on("mousemove.zoom mouseup.zoom", null), Wu(J.view, O.moved), ro(J), O.event(J).end();
    }
  }
  function D(E, ...$) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, O = on(E.changedTouches ? E.changedTouches[0] : E, this), V = M.invert(O), P = M.k * (E.shiftKey ? 0.5 : 2), A = n(_(p(M, P), O, V), t.apply(this, $), a);
      ro(E), s > 0 ? Ft(this).transition().duration(s).call(k, A, O, E) : Ft(this).call(C.transform, A, O, E);
    }
  }
  function I(E, ...$) {
    if (e.apply(this, arguments)) {
      var M = E.touches, O = M.length, V = H(this, $, E.changedTouches.length === O).event(E), P, A, X, K;
      for (da(E), A = 0; A < O; ++A)
        X = M[A], K = on(X, this), K = [K, this.__zoom.invert(K), X.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== K[2] && (V.touch1 = K, V.taps = 0) : (V.touch0 = K, P = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (V.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, v)), ri(this), V.start());
    }
  }
  function L(E, ...$) {
    if (this.__zooming) {
      var M = H(this, $).event(E), O = E.changedTouches, V = O.length, P, A, X, K;
      for (ro(E), P = 0; P < V; ++P)
        A = O[P], X = on(A, this), M.touch0 && M.touch0[2] === A.identifier ? M.touch0[0] = X : M.touch1 && M.touch1[2] === A.identifier && (M.touch1[0] = X);
      if (A = M.that.__zoom, M.touch1) {
        var G = M.touch0[0], J = M.touch0[1], W = M.touch1[0], ve = M.touch1[1], fe = (fe = W[0] - G[0]) * fe + (fe = W[1] - G[1]) * fe, me = (me = ve[0] - J[0]) * me + (me = ve[1] - J[1]) * me;
        A = p(A, Math.sqrt(fe / me)), X = [(G[0] + W[0]) / 2, (G[1] + W[1]) / 2], K = [(J[0] + ve[0]) / 2, (J[1] + ve[1]) / 2];
      } else if (M.touch0) X = M.touch0[0], K = M.touch0[1];
      else return;
      M.zoom("touch", n(_(A, X, K), M.extent, a));
    }
  }
  function Z(E, ...$) {
    if (this.__zooming) {
      var M = H(this, $).event(E), O = E.changedTouches, V = O.length, P, A;
      for (da(E), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, v), P = 0; P < V; ++P)
        A = O[P], M.touch0 && M.touch0[2] === A.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === A.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (A = on(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < x)) {
        var X = Ft(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : jo(+E), C) : r;
  }, C.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : jo(!!E), C) : e;
  }, C.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : jo(!!E), C) : o;
  }, C.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : jo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), C) : t;
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
    return arguments.length ? (b = (E = +E) * E, C) : Math.sqrt(b);
  }, C.tapDistance = function(E) {
    return arguments.length ? (x = +E, C) : x;
  }, C;
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
}, bi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var fr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(fr || (fr = {}));
var jn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(jn || (jn = {}));
var xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(xi || (xi = {}));
const Ta = {
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
var Er;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Er || (Er = {}));
var $o;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})($o || ($o = {}));
var Pe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Pe || (Pe = {}));
const ml = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
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
function yl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Ph(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Nh = (e) => "id" in e && "source" in e && "target" in e, Oh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), No = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, zh = (e, t = { nodeOrigin: [0, 0] }) => {
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
}, cc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...zo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: g = !1 } = u;
    if (a && !d || g)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, b = Co(s, Ir(u)), x = (v ?? 0) * (h ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Da = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Lh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Th({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Lh(e, a), l = Oo(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Dh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Dr.error005());
    else {
      const v = s.measured.width, h = s.measured.height;
      v && h && (d = [
        [l, u],
        [l + v, u + h]
      ]);
    }
  else s && Rr(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const g = Rr(d) ? vr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Dr.error015())), {
    position: {
      x: g.x - l + (a.measured.width ?? 0) * c[0],
      y: g.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: g
  };
}
async function dc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), v = !g && d.parentId && a.find((h) => h.id === d.parentId);
    (g || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Da(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((g) => g.id === d.id) && u.push(d);
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
const Ar = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ar(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ar(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function fc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return vr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const wl = (e, t, n) => e < t ? Ar(Math.abs(e - t), 1, t) / t : e > n ? -Ar(Math.abs(e - n), 1, t) / t : 0, vc = (e, t, n = 15, r = 40) => {
  const o = wl(e.x, r, t.width - r) * n, i = wl(e.y, r, t.height - r) * n;
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
}), Ir = (e, t = [0, 0]) => {
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
}, gc = (e, t) => Gi(Fi(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), Ah = (e, t) => {
}, ys = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), zo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ys(s, a) : s;
}, Ci = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function xr(e, t) {
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
function Ih(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = xr(e, n), o = xr(e, t);
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
    const r = xr(e.top ?? e.y ?? 0, n), o = xr(e.bottom ?? e.y ?? 0, n), i = xr(e.left ?? e.x ?? 0, t), a = xr(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Rh(e, t, n, r, o, i) {
  const { x: a, y: s } = Ci(e, [t, n, r]), { x: l, y: u } = Ci({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = Ih(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ar(u, r, o), d = e.x + e.width / 2, g = e.y + e.height / 2, v = t / 2 - d * c, h = n / 2 - g * c, b = Rh(e, v, h, c, t, n), x = {
    left: Math.min(b.left - a.left, 0),
    top: Math.min(b.top - a.top, 0),
    right: Math.min(b.right - a.right, 0),
    bottom: Math.min(b.bottom - a.bottom, 0)
  };
  return {
    x: v - x.left + x.right,
    y: h - x.top + x.bottom,
    zoom: c
  };
}, _i = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Rr(e) {
  return e !== void 0 && e !== "parent";
}
function nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function pc(e) {
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
function qh() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function fa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = zn(e), s = zo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ys(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const hc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Bh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Xh = ["INPUT", "SELECT", "TEXTAREA"];
function Yh(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Xh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const mc = (e) => "clientX" in e, zn = (e, t) => {
  var n, r;
  const o = mc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
      ...hc(a)
    };
  });
};
function Kh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function $l({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Pe.Left:
      return [t - Fo(t - r, i), n];
    case Pe.Right:
      return [t + Fo(r - t, i), n];
    case Pe.Top:
      return [t, n - Fo(n - o, i)];
    case Pe.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function yc({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: a = 0.25 }) {
  const [s, l] = $l({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = $l({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, g, v, h] = Kh({
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
    g,
    v,
    h
  ];
}
function wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Wh({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function jh({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
const Fh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Gh = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Uh = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Nh(e) ? n = { ...e } : n = {
    ...e,
    id: Fh(e)
  }, Gh(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ia({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = wc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Cl = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, Jh = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Qh({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Jh({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", g = c[d];
  let v = [], h, b;
  const x = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [p, _, w, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? p, b = o.y ?? _;
    const H = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === g ? v = d === "x" ? H : S : v = d === "x" ? S : H;
  } else {
    const H = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === g ? S : H : v = a.y === g ? H : S, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const Z = Math.min(i - 1, i - L);
        a[d] === g ? x[d] = (l[d] > e[d] ? -1 : 1) * Z : C[d] = (u[d] > n[d] ? -1 : 1) * Z;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", Z = a[d] === s[L], E = l[L] > u[L], $ = l[L] < u[L];
      (a[d] === 1 && (!Z && E || Z && $) || a[d] !== 1 && (!Z && $ || Z && E)) && (v = d === "x" ? H : S);
    }
    const N = { x: l.x + x.x, y: l.y + x.y }, z = { x: u.x + C.x, y: u.y + C.y }, D = Math.max(Math.abs(N.x - v[0].x), Math.abs(z.x - v[0].x)), I = Math.max(Math.abs(N.y - v[0].y), Math.abs(z.y - v[0].y));
    D >= I ? (h = (N.x + z.x) / 2, b = v[0].y) : (h = v[0].x, b = (N.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], h, b, w, k];
}
function e0(e, t, n, r) {
  const o = Math.min(_l(e, t) / 2, _l(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function ki({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, g, v, h] = Qh({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, C) => {
    let p = "";
    return C > 0 && C < c.length - 1 ? p = e0(c[C - 1], x, c[C + 1], a) : p = `${C === 0 ? "M" : "L"}${x.x} ${x.y}`, b += p, b;
  }, ""), d, g, v, h];
}
function kl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function t0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!kl(n) || !kl(r))
    return null;
  const o = n.internals.handleBounds || Sl(n.handles), i = r.internals.handleBounds || Sl(r.handles), a = El((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = El(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === fr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Dr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Pe.Bottom, u = (s == null ? void 0 : s.position) || Pe.Top, c = _o(n, a, l), d = _o(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Sl(e) {
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
function _o(e, t, n = Pe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? nr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Pe.Top:
      return { x: o + a / 2, y: i };
    case Pe.Right:
      return { x: o + a, y: i + s / 2 };
    case Pe.Bottom:
      return { x: o + a / 2, y: i + s };
    case Pe.Left:
      return { x: o, y: i + s / 2 };
  }
}
function El(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ra(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function n0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ra(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function r0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case Pe.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Pe.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Pe.Left:
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
}, o0 = {
  ...bs,
  checkEquality: !0
};
function xs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function i0(e, t, n) {
  const r = xs(bs, n);
  for (const o of e.values())
    if (o.parentId)
      $s(o, e, t, r);
    else {
      const i = No(o, r.nodeOrigin), a = Rr(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, nr(o));
      o.internals.positionAbsolute = s;
    }
}
function bc(e, t, n, r) {
  var o, i;
  const a = xs(o0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const g = No(c, a.nodeOrigin), v = Rr(c.extent) ? c.extent : a.nodeExtent, h = vr(g, v, nr(c));
      d = {
        ...a.defaults,
        ...c,
        measured: {
          width: (o = c.measured) == null ? void 0 : o.width,
          height: (i = c.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: xc(c, u),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && $s(d, t, n, r);
  }
  return s;
}
function a0(e, t) {
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
  a0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: g } = s0(e, l, i, a, u), { positionAbsolute: v } = e.internals, h = c !== v.x || d !== v.y;
  (h || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : v,
      z: g
    }
  });
}
function xc(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function s0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = nr(e), l = No(e, n), u = Rr(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = fc(c, s, t));
  const d = xc(e, o), g = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: g > d ? g : d
  };
}
function l0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Ir(l), c = gc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, g = nr(l), v = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(g.width, Math.round(s.width)), C = Math.max(g.height, Math.round(s.height)), p = (x - g.width) * v[0], _ = (C - g.height) * v[1];
    (h > 0 || b > 0 || p || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + p,
        y: l.position.y - b + _
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + h,
          y: w.position.y + b
        }
      });
    })), (g.width < s.width || g.height < s.height || h || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? v[0] * h - p : 0),
        height: C + (b ? v[1] * b - _ : 0)
      }
    });
  }), i;
}
function u0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const g of e.values()) {
    const v = t.get(g.id);
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
    const h = hc(g.nodeElement), b = v.measured.width !== h.width || v.measured.height !== h.height;
    if (h.width && h.height && (b || !v.internals.handleBounds || g.force)) {
      const x = g.nodeElement.getBoundingClientRect(), C = Rr(v.extent) ? v.extent : i;
      let { positionAbsolute: p } = v.internals;
      v.parentId && v.extent === "parent" ? p = fc(p, h, t.get(v.parentId)) : C && (p = vr(p, C, h));
      const _ = {
        ...v,
        measured: h,
        internals: {
          ...v.internals,
          positionAbsolute: p,
          handleBounds: {
            source: xl("source", g.nodeElement, x, c, v.id),
            target: xl("target", g.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, _), v.parentId && $s(_, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: h
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Ir(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const g = l0(d, t, n, o);
    l.push(...g);
  }
  return { changes: l, updatedInternals: s };
}
async function c0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function $c(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Ml("source", l, c, e, o, a), Ml("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function d0(e, t) {
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
function Cc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Cc(n, t) : !1;
}
function Vl(e, t, n) {
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
function f0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !Cc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function v0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, g = null, v = !1;
  function h({ noDragClassName: x, handleSelector: C, domNode: p, isSelectable: _, nodeId: w, nodeClickDistance: k = 0 }) {
    g = Ft(p);
    function H({ x: D, y: I }, L) {
      const { nodeLookup: Z, nodeExtent: E, snapGrid: $, snapToGrid: M, nodeOrigin: O, onNodeDrag: V, onSelectionDrag: P, onError: A, updateNodePositions: X } = t();
      i = { x: D, y: I };
      let K = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const J = Oo(s);
        G = Aa(J);
      }
      for (const [J, W] of s) {
        if (!Z.has(J))
          continue;
        let ve = { x: D - W.distance.x, y: I - W.distance.y };
        M && (ve = ys(ve, $));
        let fe = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !W.extent) {
          const { positionAbsolute: Se } = W.internals, we = Se.x - G.x + E[0][0], He = Se.x + W.measured.width - G.x2 + E[1][0], ae = Se.y - G.y + E[0][1], U = Se.y + W.measured.height - G.y2 + E[1][1];
          fe = [
            [we, ae],
            [He, U]
          ];
        }
        const { position: me, positionAbsolute: se } = Dh({
          nodeId: J,
          nextPosition: ve,
          nodeLookup: Z,
          nodeExtent: fe,
          nodeOrigin: O,
          onError: A
        });
        K = K || W.position.x !== me.x || W.position.y !== me.y, W.position = me, W.internals.positionAbsolute = se;
      }
      if (K && (X(s, !0), L && (r || V || !w && P))) {
        const [J, W] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: Z
        });
        r == null || r(L, s, J, W), V == null || V(L, J, W), w || P == null || P(L, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: D, panBy: I, autoPanSpeed: L, autoPanOnNodeDrag: Z } = t();
      if (!Z) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [E, $] = vc(u, c, L);
      (E !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - E / D[2], i.y = (i.y ?? 0) - $ / D[2], await I({ x: E, y: $ }) && H(i, null)), a = requestAnimationFrame(S);
    }
    function N(D) {
      var I;
      const { nodeLookup: L, multiSelectionActive: Z, nodesDraggable: E, transform: $, snapGrid: M, snapToGrid: O, selectNodesOnDrag: V, onNodeDragStart: P, onSelectionDragStart: A, unselectNodesAndEdges: X } = t();
      d = !0, (!V || !_) && !Z && w && ((I = L.get(w)) != null && I.selected || X()), _ && V && w && (e == null || e(w));
      const K = fa(D.sourceEvent, { transform: $, snapGrid: M, snapToGrid: O, containerBounds: c });
      if (i = K, s = f0(L, E, K, w), s.size > 0 && (n || P || !w && A)) {
        const [G, J] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(D.sourceEvent, s, G, J), P == null || P(D.sourceEvent, G, J), w || A == null || A(D.sourceEvent, J);
      }
    }
    const z = Rg().clickDistance(k).on("start", (D) => {
      const { domNode: I, nodeDragThreshold: L, transform: Z, snapGrid: E, snapToGrid: $ } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, L === 0 && N(D), i = fa(D.sourceEvent, { transform: Z, snapGrid: E, snapToGrid: $, containerBounds: c }), u = zn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: I, transform: L, snapGrid: Z, snapToGrid: E, nodeDragThreshold: $, nodeLookup: M } = t(), O = fa(D.sourceEvent, { transform: L, snapGrid: Z, snapToGrid: E, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !M.has(w)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, S()), !d) {
          const V = O.xSnapped - (i.x ?? 0), P = O.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + P * P) > $ && N(D);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && s && d && (u = zn(D.sourceEvent, c), H(O, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: L, onNodeDragStop: Z, onSelectionDragStop: E } = t();
        if (L(s, !1), o || Z || !w && E) {
          const [$, M] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, $, M), Z == null || Z(D.sourceEvent, $, M), w || E == null || E(D.sourceEvent, M);
        }
      }
    }).filter((D) => {
      const I = D.target;
      return !D.button && (!x || !Vl(I, `.${x}`, p)) && (!C || Vl(I, C, p));
    });
    g.call(z);
  }
  function b() {
    g == null || g.on(".drag", null);
  }
  return {
    update: h,
    destroy: b
  };
}
function g0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Co(o, Ir(i)) > 0 && r.push(i);
  return r;
}
const p0 = 250;
function h0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = g0(e, n, t + p0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: g, y: v } = _o(u, d, d.position, !0), h = Math.sqrt(Math.pow(g - e.x, 2) + Math.pow(v - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: g, y: v }], s = h) : h === s && a.push({ ...d, x: g, y: v }));
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
function _c(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((g) => g.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ..._o(u, d, d.position, !0) } : d;
}
function kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function m0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function y0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: g, cancelConnection: v, onConnectStart: h, onConnect: b, onConnectEnd: x, isValidConnection: C = Sc, onReconnectEnd: p, updateConnection: _, getTransform: w, getFromHandle: k, autoPanSpeed: H }) {
  const S = Bh(e.target);
  let N = 0, z;
  const { x: D, y: I } = zn(e), L = S == null ? void 0 : S.elementFromPoint(D, I), Z = kc(i, L), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !Z)
    return;
  const $ = _c(o, Z, r, l, t);
  if (!$)
    return;
  let M = zn(e, E), O = !1, V = null, P = !1, A = null;
  function X() {
    if (!c || !E)
      return;
    const [me, se] = vc(M, E, H);
    g({ x: me, y: se }), N = requestAnimationFrame(X);
  }
  const K = {
    ...$,
    nodeId: o,
    type: Z,
    position: $.position
  }, G = l.get(o), J = {
    inProgress: !0,
    isValid: null,
    from: _o(G, K, Pe.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: G,
    to: M,
    toHandle: null,
    toPosition: ml[K.position],
    toNode: null
  };
  _(J);
  let W = J;
  h == null || h(e, { nodeId: o, handleId: r, handleType: Z });
  function ve(me) {
    if (!k() || !K) {
      fe(me);
      return;
    }
    const se = w();
    M = zn(me, E), z = h0(zo(M, se, !1, [1, 1]), n, l, K), O || (X(), O = !0);
    const Se = Ec(me, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    A = Se.handleDomNode, V = Se.connection, P = m0(!!z, Se.isValid);
    const we = {
      // from stays the same
      ...W,
      isValid: P,
      to: z && P ? Ci({ x: z.x, y: z.y }, se) : M,
      toHandle: Se.toHandle,
      toPosition: P && Se.toHandle ? Se.toHandle.position : ml[K.position],
      toNode: Se.toHandle ? l.get(Se.toHandle.nodeId) : null
    };
    P && z && W.toHandle && we.toHandle && W.toHandle.type === we.toHandle.type && W.toHandle.nodeId === we.toHandle.nodeId && W.toHandle.id === we.toHandle.id && W.to.x === we.to.x && W.to.y === we.to.y || (_(we), W = we);
  }
  function fe(me) {
    (z || A) && V && P && (b == null || b(V));
    const { inProgress: se, ...Se } = W, we = {
      ...Se,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(me, we), i && (p == null || p(me, we)), v(), cancelAnimationFrame(N), O = !1, P = !1, V = null, A = null, S.removeEventListener("mousemove", ve), S.removeEventListener("mouseup", fe), S.removeEventListener("touchmove", ve), S.removeEventListener("touchend", fe);
  }
  S.addEventListener("mousemove", ve), S.addEventListener("mouseup", fe), S.addEventListener("touchmove", ve), S.addEventListener("touchend", fe);
}
function Ec(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", g = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: h } = zn(e), b = a.elementFromPoint(v, h), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : g, C = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const p = kc(void 0, x), _ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), H = x.classList.contains("connectableend");
    if (!_ || !p)
      return C;
    const S = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    C.connection = S;
    const N = k && H && (n === fr.Strict ? d && p === "source" || !d && p === "target" : _ !== r || w !== o);
    C.isValid = N && u(S), C.toHandle = _c(_, p, w, c, n, !1);
  }
  return C;
}
const w0 = {
  onPointerDown: y0,
  isValid: Ec
};
function b0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: g = !0, inversePan: v = !1 }) {
    const h = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, H = w[2] * Math.pow(2, k);
      t.scaleTo(H);
    };
    let b = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, C = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], H = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), N = {
        x: w[0] - H[0] * S,
        y: w[1] - H[1] * S
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: w[2]
      }, z, s);
    }, p = uc().on("start", x).on("zoom", d ? C : null).on("zoom.wheel", g ? h : null);
    o.call(p, {});
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
const x0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ui = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ga = ({ x: e, y: t, zoom: n }) => ji.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), pa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && _i() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function $0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = on(c), C = Vc(c), p = d * Math.pow(2, C);
      r.scaleTo(n, p, x, c);
      return;
    }
    const g = c.deltaMode === 1 ? 20 : 1;
    let v = o === jn.Vertical ? 0 : c.deltaX * g, h = o === jn.Horizontal ? 0 : c.deltaY * g;
    !_i() && c.shiftKey && o !== jn.Vertical && (v = c.deltaY * g, h = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(h / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Ui(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function C0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Cr(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function _0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ui(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ui(i.transform)));
  };
}
function S0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && x0(e.prevViewport, a.transform))) {
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
function E0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const g = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Cr(c, `${u}-flow__node`) || Cr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !g && !o && !i && !n || a || Cr(c, s) && c.type === "wheel" || Cr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!g && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function M0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), g = uc().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = Ft(e).call(g);
  _({
    x: i.x,
    y: i.y,
    zoom: Ar(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  g.wheelDelta(Vc);
  function x(L, Z) {
    return v ? new Promise((E) => {
      g == null || g.transform(pa(v, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: L, noPanClassName: Z, onPaneContextMenu: E, userSelectionActive: $, panOnScroll: M, panOnDrag: O, panOnScrollMode: V, panOnScrollSpeed: P, preventScrolling: A, zoomOnPinch: X, zoomOnScroll: K, zoomOnDoubleClick: G, zoomActivationKeyPressed: J, lib: W, onTransformChange: ve }) {
    $ && !c.isZoomingOrPanning && p();
    const fe = M && !J && !$ ? $0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: g,
      panOnScrollMode: V,
      panOnScrollSpeed: P,
      zoomOnPinch: X,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : C0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (v.on("wheel.zoom", fe, { passive: !1 }), !$) {
      const se = _0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      g.on("start", se);
      const Se = k0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: ve
      });
      g.on("zoom", Se);
      const we = S0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: M,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      g.on("end", we);
    }
    const me = E0({
      zoomActivationKeyPressed: J,
      panOnDrag: O,
      zoomOnScroll: K,
      panOnScroll: M,
      zoomOnDoubleClick: G,
      zoomOnPinch: X,
      userSelectionActive: $,
      noPanClassName: Z,
      noWheelClassName: L,
      lib: W
    });
    g.filter(me), G ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function p() {
    g.on("zoom", null);
  }
  async function _(L, Z, E) {
    const $ = ga(L), M = g == null ? void 0 : g.constrain()($, Z, E);
    return M && await x(M), new Promise((O) => O(M));
  }
  async function w(L, Z) {
    const E = ga(L);
    return await x(E, Z), new Promise(($) => $(E));
  }
  function k(L) {
    if (v) {
      const Z = ga(L), E = v.property("__zoom");
      (E.k !== L.zoom || E.x !== L.x || E.y !== L.y) && (g == null || g.transform(v, Z, null, { sync: !0 }));
    }
  }
  function H() {
    const L = v ? lc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, Z) {
    return v ? new Promise((E) => {
      g == null || g.scaleTo(pa(v, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L, Z) {
    return v ? new Promise((E) => {
      g == null || g.scaleBy(pa(v, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function z(L) {
    g == null || g.scaleExtent(L);
  }
  function D(L) {
    g == null || g.translateExtent(L);
  }
  function I(L) {
    const Z = !Pn(L) || L < 0 ? 0 : L;
    g == null || g.clickDistance(Z);
  }
  return {
    update: C,
    destroy: p,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: H,
    scaleTo: S,
    scaleBy: N,
    setScaleExtent: z,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: I
  };
}
var Hl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Hl || (Hl = {}));
var V0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(G, "$connectable", n), i = () => ne(me, "$connectionRadius", n), a = () => ne(ve, "$domNode", n), s = () => ne(fe, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(we, "$lib", n), c = () => ne(Ne, "$autoPanOnConnect", n), d = () => ne(Ee, "$flowId", n), g = () => ne(Se, "$isValidConnectionStore", n), v = () => ne(ae, "$onedgecreate", n), h = () => ne(le, "$onConnectAction", n), b = () => ne(ce, "$onConnectStartAction", n), x = () => ne(oe, "$onConnectEndAction", n), C = () => ne(se, "$viewport", n), p = () => ne(et, "$connection", n), _ = () => ne(De, "$edges", n), w = () => ne(Te, "$connectionLookup", n), k = /* @__PURE__ */ ie(), H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), N = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie(), D = /* @__PURE__ */ ie(), I = /* @__PURE__ */ ie(), L = /* @__PURE__ */ ie();
  let Z = y(t, "id", 12, void 0), E = y(t, "type", 12, "source"), $ = y(t, "position", 28, () => Pe.Top), M = y(t, "style", 12, void 0), O = y(t, "isValidConnection", 12, void 0), V = y(t, "onconnect", 12, void 0), P = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), X = y(t, "class", 12, void 0);
  const K = ur("svelteflow__node_id"), G = ur("svelteflow__node_connectable"), J = Fe(), {
    connectionMode: W,
    domNode: ve,
    nodeLookup: fe,
    connectionRadius: me,
    viewport: se,
    isValidConnection: Se,
    lib: we,
    addEdge: He,
    onedgecreate: ae,
    panBy: U,
    cancelConnection: Me,
    updateConnection: j,
    autoPanOnConnect: Ne,
    edges: De,
    connectionLookup: Te,
    onconnect: le,
    onconnectstart: ce,
    onconnectend: oe,
    flowId: Ee,
    connection: et
  } = J;
  function tt(Le) {
    const ot = mc(Le);
    (ot && Le.button === 0 || !ot) && w0.onPointerDown(Le, {
      handleId: f(S),
      nodeId: K,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: O() ?? g(),
      updateConnection: j,
      cancelConnection: Me,
      panBy: U,
      onConnect: (qe) => {
        var Ie;
        const it = v() ? v()(qe) : qe;
        it && (He(it), (Ie = h()) == null || Ie(qe));
      },
      onConnectStart: (qe, Ie) => {
        var it;
        (it = b()) == null || it(qe, {
          nodeId: Ie.nodeId,
          handleId: Ie.handleId,
          handleType: Ie.handleType
        });
      },
      onConnectEnd: (qe, Ie) => {
        var it;
        (it = x()) == null || it(qe, Ie);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let ee = /* @__PURE__ */ ie(null), Ye = /* @__PURE__ */ ie();
  he(() => te(E()), () => {
    Q(k, E() === "target");
  }), he(
    () => (te(A()), o()),
    () => {
      Q(H, A() !== void 0 ? A() : o());
    }
  ), he(() => te(Z()), () => {
    Q(S, Z() || null);
  }), he(
    () => (te(V()), te(P()), _(), w(), te(E()), te(Z())),
    () => {
      (V() || P()) && (_(), Q(Ye, w().get(`${K}-${E()}${Z() ? `-${Z()}` : ""}`)));
    }
  ), he(
    () => (f(ee), f(Ye), te(P()), te(V())),
    () => {
      if (f(ee) && !Hh(f(Ye), f(ee))) {
        const Le = f(Ye) ?? /* @__PURE__ */ new Map();
        yl(f(ee), Le, P()), yl(Le, f(ee), V());
      }
      Q(ee, f(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => p(), () => {
    Q(N, !!p().fromHandle);
  }), he(
    () => (p(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(z, ((Le = p().fromHandle) == null ? void 0 : Le.nodeId) === K && ((ot = p().fromHandle) == null ? void 0 : ot.type) === E() && ((qe = p().fromHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), he(
    () => (p(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(D, ((Le = p().toHandle) == null ? void 0 : Le.nodeId) === K && ((ot = p().toHandle) == null ? void 0 : ot.type) === E() && ((qe = p().toHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), he(
    () => (l(), p(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(I, l() === fr.Strict ? ((Le = p().fromHandle) == null ? void 0 : Le.type) !== E() : K !== ((ot = p().fromHandle) == null ? void 0 : ot.nodeId) || f(S) !== ((qe = p().fromHandle) == null ? void 0 : qe.id));
    }
  ), he(() => (f(D), p()), () => {
    Q(L, f(D) && p().isValid);
  }), yt(), Ae();
  var de = V0();
  $e(de, "data-nodeid", K);
  let en;
  var tn = B(de);
  xt(tn, t, "default", {}), q(de), Ce(
    (Le, ot) => {
      $e(de, "data-handleid", f(S)), $e(de, "data-handlepos", $()), $e(de, "data-id", `${d() ?? ""}-${K ?? ""}-${(Z() || "") ?? ""}-${E() ?? ""}`), en = $t(de, 1, Le, null, en, ot), ft(de, M());
    },
    [
      () => vn(Vt([
        "svelte-flow__handle",
        `svelte-flow__handle-${$()}`,
        "nodrag",
        "nopan",
        $(),
        X()
      ])),
      () => ({
        valid: f(L),
        connectingto: f(D),
        connectingfrom: f(z),
        source: !f(k),
        target: f(k),
        connectablestart: f(H),
        connectableend: f(H),
        connectable: f(H),
        connectionindicator: f(H) && (!f(N) || f(I))
      })
    ],
    xe
  ), nt("mousedown", de, tt), nt("touchstart", de, tt), T(e, de);
  var hn = pe({
    get id() {
      return Z();
    },
    set id(Le) {
      Z(Le), m();
    },
    get type() {
      return E();
    },
    set type(Le) {
      E(Le), m();
    },
    get position() {
      return $();
    },
    set position(Le) {
      $(Le), m();
    },
    get style() {
      return M();
    },
    set style(Le) {
      M(Le), m();
    },
    get isValidConnection() {
      return O();
    },
    set isValidConnection(Le) {
      O(Le), m();
    },
    get onconnect() {
      return V();
    },
    set onconnect(Le) {
      V(Le), m();
    },
    get ondisconnect() {
      return P();
    },
    set ondisconnect(Le) {
      P(Le), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(Le) {
      A(Le), m();
    },
    get class() {
      return X();
    },
    set class(Le) {
      X(Le), m();
    }
  });
  return r(), hn;
}
ue(
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
var H0 = /* @__PURE__ */ re("<!> <!>", 1);
function Si(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ae();
  var a = H0(), s = be(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  Jn(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = R(s), c = R(u);
  const d = /* @__PURE__ */ xe(() => i() ?? Pe.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Ce(() => {
    var g;
    return ct(u, ` ${((g = r()) == null ? void 0 : g.label) ?? ""} `);
  }), T(e, a), pe({
    get data() {
      return r();
    },
    set data(g) {
      r(g), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(g) {
      o(g), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(g) {
      i(g), m();
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
var P0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ae(), ze();
  var i = P0(), a = be(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Bottom);
  return Jn(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Ce(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), pe({
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
var N0 = /* @__PURE__ */ re(" <!>", 1);
function Pc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ae(), ze();
  var i = N0(), a = be(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  return Jn(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Ce(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), pe({
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
ue(Pc, { data: {}, targetPosition: {} }, [], [], !0);
function Nc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, []);
}
ue(Nc, {}, [], [], !0);
function Pl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ei(e, { target: t, domNode: n }) {
  return Pl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Pl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var O0 = /* @__PURE__ */ re("<div><!></div>");
function Oc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$domNode", n), { domNode: i } = Fe();
  Ae();
  var a = O0(), s = B(a);
  xt(s, t, "default", {}), q(a), bt(a, (l, u) => Ei == null ? void 0 : Ei(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), T(e, a), pe(), r();
}
ue(Oc, {}, ["default"], [], !0);
function zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Fe();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", Dr.error012(s));
      return;
    }
    (l.selectable || F(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var z0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Lc(e, t) {
  ge(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = zc(), a = ur("svelteflow__edge_id");
  return Ae(), Oc(e, {
    children: (s, l) => {
      var u = z0();
      let c;
      var d = B(u);
      xt(d, t, "default", {}), q(u), Ce(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), nt("keyup", u, () => {
      }), nt("click", u, () => {
        a && i(a);
      }), T(s, u);
    },
    $$slots: { default: !0 }
  }), pe({
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
ue(Lc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var L0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), T0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Lo(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), g = y(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ae();
  var h = T0(), b = be(h), x = R(b);
  {
    var C = (w) => {
      var k = L0();
      $e(k, "stroke-opacity", 0), $e(k, "stroke-width", v), Ce(() => $e(k, "d", r())), T(w, k);
    };
    ye(x, (w) => {
      v && w(C);
    });
  }
  var p = R(x);
  {
    var _ = (w) => {
      Lc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, H) => {
          ze();
          var S = Re();
          Ce(() => ct(S, o())), T(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    ye(p, (w) => {
      o() && w(_);
    });
  }
  return Ce(
    (w) => {
      $e(b, "id", n()), $e(b, "d", r()), $t(b, 0, w), $e(b, "marker-start", l()), $e(b, "marker-end", u()), ft(b, c());
    },
    [
      () => vn(Vt(["svelte-flow__edge-path", g()]))
    ],
    xe
  ), T(e, h), pe({
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
      return g();
    },
    set class(w) {
      g(w), m();
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), g = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(g()), te(v()), te(b()), te(x()), te(h()), te(C())),
    () => {
      ((p) => (Q(r, p[0]), Q(o, p[1]), Q(i, p[2])))(yc({
        sourceX: g(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C()
      }));
    }
  ), yt(), Ae(), Lo(e, {
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
  }), pe({
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
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return g();
    },
    set sourceX(p) {
      g(p), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(p) {
      v(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return b();
    },
    set targetX(p) {
      b(p), m();
    },
    get targetY() {
      return x();
    },
    set targetY(p) {
      x(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), g = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(g()), te(v()), te(b()), te(x()), te(h()), te(C())),
    () => {
      ((p) => (Q(r, p[0]), Q(o, p[1]), Q(i, p[2])))(ki({
        sourceX: g(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C()
      }));
    }
  ), yt(), Ae(), Lo(e, {
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
  }), pe({
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
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return g();
    },
    set sourceX(p) {
      g(p), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(p) {
      v(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return b();
    },
    set targetX(p) {
      b(p), m();
    },
    get targetY() {
      return x();
    },
    set targetY(p) {
      x(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
    }
  });
}
ue(
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), g = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return he(
    () => (f(r), f(o), f(i), te(g()), te(v()), te(h()), te(b())),
    () => {
      ((x) => (Q(r, x[0]), Q(o, x[1]), Q(i, x[2])))(Ia({
        sourceX: g(),
        sourceY: v(),
        targetX: h(),
        targetY: b()
      }));
    }
  ), yt(), Ae(), Lo(e, {
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
  }), pe({
    get label() {
      return a();
    },
    set label(x) {
      a(x), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), m();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get sourceX() {
      return g();
    },
    set sourceX(x) {
      g(x), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), m();
    },
    get targetX() {
      return h();
    },
    set targetX(x) {
      h(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
    }
  });
}
ue(
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), g = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(g()), te(v()), te(b()), te(x()), te(h()), te(C())),
    () => {
      ((p) => (Q(r, p[0]), Q(o, p[1]), Q(i, p[2])))(ki({
        sourceX: g(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), yt(), Ae(), Lo(e, {
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
  }), pe({
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
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return g();
    },
    set sourceX(p) {
      g(p), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(p) {
      v(p), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(p) {
      h(p), m();
    },
    get targetX() {
      return b();
    },
    set targetX(p) {
      b(p), m();
    },
    get targetY() {
      return x();
    },
    set targetY(p) {
      x(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function D0(e, t) {
  const n = e.set, r = t.set, o = F(e), i = F(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function A0(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const I0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, R0 = (e, t, n, r = [0, 0], o = bi, i, a, s, l, u, c, d, g) => {
  const { subscribe: v, set: h, update: b } = _e([]);
  let x = e, C = {}, p = !0;
  const _ = (S) => {
    const N = bc(S, t, n, {
      elevateNodesOnSelect: p,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: C,
      checkEquality: !1
    });
    return F(i) && N && F(l) && (Th({
      nodes: t,
      width: F(u),
      height: F(c),
      panZoom: F(l),
      minZoom: F(d),
      maxZoom: F(g)
    }, F(a)).then((z) => {
      var D;
      (D = F(s)) == null || D.resolve(z), s.set(null);
    }), i.set(!1), a.set(void 0)), x = S, h(x), x;
  }, w = (S) => _(S(x)), k = (S) => {
    C = S;
  }, H = (S) => {
    p = S.elevateNodesOnSelect ?? p;
  };
  return _(x), {
    subscribe: v,
    set: _,
    update: w,
    setDefaultOptions: k,
    setOptions: H
  };
}, Z0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = _e([]);
  let s = e, l = {};
  const u = (g) => {
    const v = l ? g.map((h) => ({ ...l, ...h })) : g;
    $c(t, n, v), s = v, i(s);
  }, c = (g) => u(g(s)), d = (g) => {
    l = g;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Ic = {
  input: Hc,
  output: Pc,
  default: Si,
  group: Nc
}, Rc = {
  straight: Dc,
  smoothstep: Tc,
  default: Mi,
  step: Ac
}, q0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], g = a ?? bi;
  bc(e, s, l, {
    nodeExtent: g,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const H = Oo(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    v = ws(H, n, r, 0.5, 2, 0.1);
  }
  const h = _e(!1), b = _e(void 0), x = _e(null), C = _e(null), p = _e(500), _ = _e(500), w = _e(0.5), k = _e(2);
  return {
    flowId: _e(null),
    nodes: R0(e, s, l, d, g, h, b, x, C, p, _, w, k),
    nodeLookup: Wt(s),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: Z0(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    width: p,
    height: _,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(g),
    translateExtent: _e(bi),
    autoPanOnNodeDrag: _e(!0),
    autoPanOnConnect: _e(!0),
    fitViewQueued: h,
    fitViewOptions: b,
    fitViewResolver: x,
    panZoom: C,
    snapGrid: _e(null),
    dragging: _e(!1),
    selectionRect: _e(null),
    selectionKeyPressed: _e(!1),
    multiselectionKeyPressed: _e(!1),
    deleteKeyPressed: _e(!1),
    panActivationKeyPressed: _e(!1),
    zoomActivationKeyPressed: _e(!1),
    selectionRectMode: _e(null),
    selectionMode: _e(xi.Partial),
    nodeTypes: _e(Ic),
    edgeTypes: _e(Rc),
    viewport: _e(v),
    connectionMode: _e(fr.Strict),
    domNode: _e(null),
    connection: Wt(Ta),
    connectionLineType: _e(Er.Bezier),
    connectionRadius: _e(20),
    isValidConnection: _e(() => !0),
    nodesDraggable: _e(!0),
    nodesConnectable: _e(!0),
    elementsSelectable: _e(!0),
    selectNodesOnDrag: _e(!0),
    markers: Wt([]),
    defaultMarkerColor: _e("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: _e(!1),
    onerror: _e(Ah),
    ondelete: _e(void 0),
    onedgecreate: _e(void 0),
    onconnect: _e(void 0),
    onconnectstart: _e(void 0),
    onconnectend: _e(void 0),
    onbeforedelete: _e(void 0),
    nodesInitialized: _e(!1),
    edgesInitialized: _e(!1),
    viewportInitialized: _e(!1),
    initialized: Wt(!1)
  };
};
function B0(e) {
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
    return u && c && jh({
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
    const c = t0({
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
      zIndex: Wh({
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
function X0(e) {
  return Wn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? cc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const Ji = Symbol();
function Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = q0({
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
      ...Ic,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...Rc,
      ...$
    });
  }
  function c($) {
    const M = F(s.edges);
    s.edges.set(Uh($, M));
  }
  const d = ($, M = !1) => {
    var O;
    const V = F(s.nodeLookup);
    for (const [P, A] of $) {
      const X = (O = V.get(P)) == null ? void 0 : O.internals.userNode;
      X && (X.position = A.position, X.dragging = M);
    }
    s.nodes.update((P) => P);
  };
  function g($) {
    var M, O, V;
    const P = F(s.nodeLookup), A = F(s.parentLookup), { changes: X, updatedInternals: K } = u0($, P, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (K) {
      i0(P, A, { nodeOrigin: i, nodeExtent: a });
      for (const G of X) {
        const J = (M = P.get(G.id)) == null ? void 0 : M.internals.userNode;
        if (J)
          switch (G.type) {
            case "dimensions": {
              const W = { ...J.measured, ...G.dimensions };
              G.setAttributes && (J.width = ((O = G.dimensions) == null ? void 0 : O.width) ?? J.width, J.height = ((V = G.dimensions) == null ? void 0 : V.height) ?? J.height), J.measured = W;
              break;
            }
            case "position":
              J.position = G.position ?? J.position;
              break;
          }
      }
      s.nodes.update((G) => G), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const M = F(s.fitViewResolver) ?? qh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set($), s.fitViewResolver.set(M), s.nodes.set(F(s.nodes)), M.promise;
  }
  function h($, M) {
    const O = F(s.panZoom);
    return O ? O.scaleBy($, M) : Promise.resolve(!1);
  }
  function b($) {
    return h(1.2, $);
  }
  function x($) {
    return h(1 / 1.2, $);
  }
  function C($) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([$, F(s.maxZoom)]), s.minZoom.set($));
  }
  function p($) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([F(s.minZoom), $]), s.maxZoom.set($));
  }
  function _($) {
    const M = F(s.panZoom);
    M && (M.setTranslateExtent($), s.translateExtent.set($));
  }
  function w($) {
    let M = !1;
    return $.forEach((O) => {
      O.selected && (O.selected = !1, M = !0);
    }), M;
  }
  function k($) {
    var M;
    (M = F(s.panZoom)) == null || M.setClickDistance($);
  }
  function H($) {
    w(($ == null ? void 0 : $.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), w(($ == null ? void 0 : $.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var M;
    if ($) {
      const O = F(s.nodes), V = F(s.edges), P = O.filter((G) => G.selected), A = V.filter((G) => G.selected), { nodes: X, edges: K } = await dc({
        nodesToRemove: P,
        edgesToRemove: A,
        nodes: O,
        edges: V,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (X.length || K.length) && (s.nodes.update((G) => G.filter((J) => !X.some((W) => W.id === J.id))), s.edges.update((G) => G.filter((J) => !K.some((W) => W.id === J.id))), (M = F(s.ondelete)) == null || M({
        nodes: X,
        edges: K
      }));
    }
  });
  function S($) {
    const M = F(s.multiselectionKeyPressed);
    s.nodes.update((O) => O.map((V) => {
      const P = $.includes(V.id), A = M && V.selected || P;
      return V.selected = A, V;
    })), M || s.edges.update((O) => O.map((V) => (V.selected = !1, V)));
  }
  function N($) {
    const M = F(s.multiselectionKeyPressed);
    s.edges.update((O) => O.map((V) => {
      const P = $.includes(V.id), A = M && V.selected || P;
      return V.selected = A, V;
    })), M || s.nodes.update((O) => O.map((V) => (V.selected = !1, V)));
  }
  function z($) {
    var M;
    const O = (M = F(s.nodes)) == null ? void 0 : M.find((V) => V.id === $);
    if (!O) {
      console.warn("012", Dr.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), O.selected ? O.selected && F(s.multiselectionKeyPressed) && H({ nodes: [O], edges: [] }) : S([$]);
  }
  function D($) {
    const M = F(s.viewport);
    return c0({
      delta: $,
      panZoom: F(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const I = _e(Ta), L = ($) => {
    I.set({ ...$ });
  };
  function Z() {
    I.set(Ta);
  }
  function E() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), H(), Z();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: B0(s),
    visibleNodes: X0(s),
    connection: Wn([I, s.viewport], ([$, M]) => $.inProgress ? {
      ...$,
      to: zo($.to, [M.x, M.y, M.zoom])
    } : { ...$ }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([$, M, O]) => n0($, { defaultColor: M, id: O })),
    initialized: (() => {
      let $ = !1;
      const M = F(s.nodes).length, O = F(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([V, P, A]) => $ || (M === 0 ? $ = A : O === 0 ? $ = A && V : $ = A && V && P, $));
    })(),
    // actions
    syncNodeStores: ($) => D0(s.nodes, $),
    syncEdgeStores: ($) => A0(s.edges, $),
    syncViewport: ($) => I0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: g,
    zoomIn: b,
    zoomOut: x,
    fitView: ($) => v($),
    setMinZoom: C,
    setMaxZoom: p,
    setTranslateExtent: _,
    setPaneClickDistance: k,
    unselectNodesAndEdges: H,
    addSelectedNodes: S,
    addSelectedEdges: N,
    handleNodeSelection: z,
    panBy: D,
    updateConnection: L,
    cancelConnection: Z,
    reset: E
  };
}
function Fe() {
  const e = ur(Ji);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Y0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Or(Ji, {
    getStore: () => s
  }), s;
}
function Nl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = M0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(g) {
      c.update(g);
    }
  };
}
var K0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const W0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function qc(e, t) {
  ge(t, !1), Ue(e, W0);
  const [n, r] = rt(), o = () => ne(V, "$panActivationKeyPressed", n), i = () => ne(Z, "$minZoom", n), a = () => ne(E, "$maxZoom", n), s = () => ne(P, "$zoomActivationKeyPressed", n), l = () => ne(L, "$selectionRect", n), u = () => ne(M, "$translateExtent", n), c = () => ne(O, "$lib", n), d = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie();
  let h = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), C = y(t, "onMoveEnd", 12, void 0), p = y(t, "panOnScrollMode", 12), _ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), H = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), N = y(t, "panOnScroll", 12), z = y(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: I,
    selectionRect: L,
    minZoom: Z,
    maxZoom: E,
    dragging: $,
    translateExtent: M,
    lib: O,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: P,
    viewportInitialized: A
  } = Fe(), X = (W) => D.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Qt(() => {
    vi(A, !0);
  }), he(() => te(h()), () => {
    Q(d, h() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), te(S())),
    () => {
      Q(g, o() || S());
    }
  ), he(
    () => (o(), te(N())),
    () => {
      Q(v, o() || N());
    }
  ), yt(), Ae();
  var K = K0(), G = B(K);
  xt(G, t, "default", {}), q(K), bt(K, (W, ve) => Nl == null ? void 0 : Nl(W, ve), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: $,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: H(),
    panOnScroll: f(v),
    panOnDrag: f(g),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || jn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: X
  })), T(e, K);
  var J = pe({
    get initialViewport() {
      return h();
    },
    set initialViewport(W) {
      h(W), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), m();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(W) {
      C(W), m();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(W) {
      p(W), m();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(W) {
      _(W), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(W) {
      w(W), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), m();
    },
    get zoomOnPinch() {
      return H();
    },
    set zoomOnPinch(W) {
      H(W), m();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), m();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(W) {
      N(W), m();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(W) {
      z(W), m();
    }
  });
  return r(), J;
}
ue(
  qc,
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
function Ol(e, t) {
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
var j0 = /* @__PURE__ */ re("<div><!></div>");
const F0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  ge(t, !1), Ue(e, F0);
  const [n, r] = rt(), o = () => ne($, "$panActivationKeyPressed", n), i = () => ne(Z, "$selectionKeyPressed", n), a = () => ne(I, "$selectionRect", n), s = () => ne(D, "$elementsSelectable", n), l = () => ne(L, "$selectionRectMode", n), u = () => ne(O, "$connection", n), c = () => ne(S, "$edges", n), d = () => ne(H, "$nodeLookup", n), g = () => ne(N, "$viewport", n), v = () => ne(E, "$selectionMode", n), h = () => ne(z, "$dragging", n), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie();
  let p = y(t, "panOnDrag", 12, void 0), _ = y(t, "selectionOnDrag", 12, void 0);
  const w = Bi(), {
    nodes: k,
    nodeLookup: H,
    edges: S,
    viewport: N,
    dragging: z,
    elementsSelectable: D,
    selectionRect: I,
    selectionRectMode: L,
    selectionKeyPressed: Z,
    selectionMode: E,
    panActivationKeyPressed: $,
    unselectNodesAndEdges: M,
    connection: O
  } = Fe();
  let V = /* @__PURE__ */ ie(), P = null, A = [], X = !1;
  function K(ae) {
    if (X || u().inProgress) {
      X = !1;
      return;
    }
    w("paneclick", { event: ae }), M(), L.set(null);
  }
  function G(ae) {
    var U, Me;
    if (P = f(V).getBoundingClientRect(), !D || !f(x) || ae.button !== 0 || ae.target !== f(V) || !P)
      return;
    (Me = (U = ae.target) == null ? void 0 : U.setPointerCapture) == null || Me.call(U, ae.pointerId);
    const { x: j, y: Ne } = zn(ae, P);
    M(), I.set({
      width: 0,
      height: 0,
      startX: j,
      startY: Ne,
      x: j,
      y: Ne
    });
  }
  function J(ae) {
    if (!f(x) || !P || !a())
      return;
    X = !0;
    const U = zn(ae, P), Me = a().startX ?? 0, j = a().startY ?? 0, Ne = {
      ...a(),
      x: U.x < Me ? U.x : Me,
      y: U.y < j ? U.y : j,
      width: Math.abs(U.x - Me),
      height: Math.abs(U.y - j)
    }, De = A.map((oe) => oe.id), Te = Da(A, c()).map((oe) => oe.id);
    A = cc(
      d(),
      Ne,
      [
        g().x,
        g().y,
        g().zoom
      ],
      v() === xi.Partial,
      !0
    );
    const le = Da(A, c()).map((oe) => oe.id), ce = A.map((oe) => oe.id);
    (De.length !== ce.length || ce.some((oe) => !De.includes(oe))) && k.update((oe) => oe.map(zl(ce))), (Te.length !== le.length || le.some((oe) => !Te.includes(oe))) && S.update((oe) => oe.map(zl(le))), L.set("user"), I.set(Ne);
  }
  function W(ae) {
    var U, Me;
    ae.button === 0 && ((Me = (U = ae.target) == null ? void 0 : U.releasePointerCapture) == null || Me.call(U, ae.pointerId), !f(x) && l() === "user" && ae.target === f(V) && (K == null || K(ae)), I.set(null), A.length > 0 && vi(L, "nodes"), i() && (X = !1));
  }
  const ve = (ae) => {
    var U;
    if (Array.isArray(f(b)) && (U = f(b)) != null && U.includes(2)) {
      ae.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ae });
  };
  he(
    () => (o(), te(p())),
    () => {
      Q(b, o() || p());
    }
  ), he(
    () => (i(), a(), te(_()), f(b)),
    () => {
      Q(x, i() || a() || _() && f(b) !== !0);
    }
  ), he(
    () => (s(), f(x), l()),
    () => {
      Q(C, s() && (f(x) || l() === "user"));
    }
  ), yt(), Ae();
  var fe = j0(), me = /* @__PURE__ */ Ve(() => f(C) ? void 0 : Ol(K, f(V))), se = /* @__PURE__ */ Ve(() => Ol(ve, f(V)));
  let Se;
  var we = B(fe);
  xt(we, t, "default", {}), q(fe), _n(fe, (ae) => Q(V, ae), () => f(V)), Ce(
    (ae) => Se = $t(fe, 1, "svelte-flow__pane svelte-1esy7hx", null, Se, ae),
    [
      () => ({
        draggable: p() === !0 || Array.isArray(p()) && p().includes(0),
        dragging: h(),
        selection: f(x)
      })
    ],
    xe
  ), nt("click", fe, function(...ae) {
    var U;
    (U = f(me)) == null || U.apply(this, ae);
  }), nt("pointerdown", fe, function(...ae) {
    var U;
    (U = f(C) ? G : void 0) == null || U.apply(this, ae);
  }), nt("pointermove", fe, function(...ae) {
    var U;
    (U = f(C) ? J : void 0) == null || U.apply(this, ae);
  }), nt("pointerup", fe, function(...ae) {
    var U;
    (U = f(C) ? W : void 0) == null || U.apply(this, ae);
  }), nt("contextmenu", fe, function(...ae) {
    var U;
    (U = f(se)) == null || U.apply(this, ae);
  }), T(e, fe);
  var He = pe({
    get panOnDrag() {
      return p();
    },
    set panOnDrag(ae) {
      p(ae), m();
    },
    get selectionOnDrag() {
      return _();
    },
    set selectionOnDrag(ae) {
      _(ae), m();
    }
  });
  return r(), He;
}
ue(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var G0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const U0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  ge(t, !1), Ue(e, U0);
  const [n, r] = rt(), o = () => ne(i, "$viewport", n), { viewport: i } = Fe();
  Ae();
  var a = G0(), s = B(a);
  xt(s, t, "default", {}), q(a), Ce(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), T(e, a), pe(), r();
}
ue(Xc, {}, ["default"], [], !0);
function Vi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = v0({
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
function J0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Q0 = /* @__PURE__ */ re("<div><!></div>");
function Yc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(fe, "$nodeTypes", n), i = () => ne(He, "$elementsSelectable", n), a = () => ne(ae, "$nodesDraggable", n), s = () => ne(Ne, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0);
  let g = y(t, "node", 13), v = y(t, "id", 13), h = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), C = y(t, "selectable", 13, void 0), p = y(t, "connectable", 13, !0), _ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), H = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), N = y(t, "type", 13, "default"), z = y(t, "isParent", 13, !1), D = y(t, "positionX", 13), I = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), Z = y(t, "targetPosition", 13, void 0), E = y(t, "zIndex", 13), $ = y(t, "measuredWidth", 13, void 0), M = y(t, "measuredHeight", 13, void 0), O = y(t, "initialWidth", 13, void 0), V = y(t, "initialHeight", 13, void 0), P = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), X = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), G = y(t, "parentId", 13, void 0), J = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const ve = Fe(), {
    nodeTypes: fe,
    nodeDragThreshold: me,
    selectNodesOnDrag: se,
    handleNodeSelection: Se,
    updateNodeInternals: we,
    elementsSelectable: He,
    nodesDraggable: ae
  } = ve;
  let U = /* @__PURE__ */ ie(void 0, !0), Me = /* @__PURE__ */ ie(null, !0);
  const j = Bi(), Ne = _e(p());
  let De = /* @__PURE__ */ ie(void 0, !0), Te = /* @__PURE__ */ ie(void 0, !0), le = /* @__PURE__ */ ie(void 0, !0);
  Or("svelteflow__node_id", v()), Or("svelteflow__node_connectable", Ne), us(() => {
    var ee;
    f(Me) && ((ee = H()) == null || ee.unobserve(f(Me)));
  });
  function ce(ee) {
    C() && (!F(se) || !x() || F(me) > 0) && Se(v()), j("nodeclick", { node: g().internals.userNode, event: ee });
  }
  he(() => te(N()), () => {
    Q(l, N() || "default");
  }), he(() => (o(), f(l)), () => {
    Q(u, !!o()[f(l)]);
  }), he(
    () => (o(), f(l), Si),
    () => {
      Q(c, o()[f(l)] || Si);
    }
  ), he(
    () => (f(u), te(N())),
    () => {
      f(u) || console.warn("003", Dr.error003(N()));
    }
  ), he(
    () => (te(P()), te(A()), te(O()), te(V()), te($()), te(M())),
    () => {
      Q(d, J0({
        width: P(),
        height: A(),
        initialWidth: O(),
        initialHeight: V(),
        measuredWidth: $(),
        measuredHeight: M()
      }));
    }
  ), he(() => te(p()), () => {
    Ne.set(!!p());
  }), he(
    () => (f(De), f(l), f(Te), te(L()), f(le), te(Z()), te(v()), f(U)),
    () => {
      (f(De) && f(l) !== f(De) || f(Te) && L() !== f(Te) || f(le) && Z() !== f(le)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: f(U),
            force: !0
          }
        ]
      ]))), Q(De, f(l)), Q(Te, L()), Q(le, Z());
    }
  ), he(
    () => (te(H()), f(U), f(Me), te(K())),
    () => {
      H() && (f(U) !== f(Me) || !K()) && (f(Me) && H().unobserve(f(Me)), f(U) && H().observe(f(U)), Q(Me, f(U)));
    }
  ), yt(), Ae(!0);
  var oe = Je(), Ee = be(oe);
  {
    var et = (ee) => {
      var Ye = Q0();
      let de, en;
      var tn = B(Ye);
      const hn = /* @__PURE__ */ xe(() => b() ?? !1), Le = /* @__PURE__ */ xe(() => C() ?? i() ?? !0), ot = /* @__PURE__ */ xe(() => _() ?? !0), qe = /* @__PURE__ */ xe(() => x() ?? a() ?? !0);
      Eu(tn, () => f(c), (Ie, it) => {
        it(Ie, {
          get data() {
            return h();
          },
          get id() {
            return v();
          },
          get selected() {
            return f(hn);
          },
          get selectable() {
            return f(Le);
          },
          get deletable() {
            return f(ot);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return Z();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(qe);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return G();
          },
          get type() {
            return f(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return P();
          },
          get height() {
            return A();
          }
        });
      }), q(Ye), bt(Ye, (Ie, it) => Vi == null ? void 0 : Vi(Ie, it), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: Se,
        onDrag: (Ie, it, nn, Kt) => {
          j("nodedrag", { event: Ie, targetNode: nn, nodes: Kt });
        },
        onDragStart: (Ie, it, nn, Kt) => {
          j("nodedragstart", { event: Ie, targetNode: nn, nodes: Kt });
        },
        onDragStop: (Ie, it, nn, Kt) => {
          j("nodedragstop", { event: Ie, targetNode: nn, nodes: Kt });
        },
        store: ve
      })), _n(Ye, (Ie) => Q(U, Ie), () => f(U)), It(() => nt("click", Ye, ce)), It(() => nt("mouseenter", Ye, (Ie) => j("nodemouseenter", { node: g(), event: Ie }))), It(() => nt("mouseleave", Ye, (Ie) => j("nodemouseleave", { node: g(), event: Ie }))), It(() => nt("mousemove", Ye, (Ie) => j("nodemousemove", { node: g(), event: Ie }))), It(() => nt("contextmenu", Ye, (Ie) => j("nodecontextmenu", { node: g(), event: Ie }))), Ce(
        (Ie, it) => {
          $e(Ye, "data-id", v()), de = $t(Ye, 1, Ie, null, de, it), en = ft(Ye, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, en, {
            "z-index": E(),
            transform: `translate(${D() ?? ""}px, ${I() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => vn(Vt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: p(),
            selectable: C(),
            nopan: x(),
            parent: z()
          })
        ],
        xe
      ), T(ee, Ye);
    };
    ye(Ee, (ee) => {
      w() || ee(et);
    });
  }
  T(e, oe);
  var tt = pe({
    get node() {
      return g();
    },
    set node(ee) {
      g(ee), m();
    },
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), m();
    },
    get data() {
      return h();
    },
    set data(ee) {
      h(ee), m();
    },
    get selected() {
      return b();
    },
    set selected(ee) {
      b(ee), m();
    },
    get draggable() {
      return x();
    },
    set draggable(ee) {
      x(ee), m();
    },
    get selectable() {
      return C();
    },
    set selectable(ee) {
      C(ee), m();
    },
    get connectable() {
      return p();
    },
    set connectable(ee) {
      p(ee), m();
    },
    get deletable() {
      return _();
    },
    set deletable(ee) {
      _(ee), m();
    },
    get hidden() {
      return w();
    },
    set hidden(ee) {
      w(ee), m();
    },
    get dragging() {
      return k();
    },
    set dragging(ee) {
      k(ee), m();
    },
    get resizeObserver() {
      return H();
    },
    set resizeObserver(ee) {
      H(ee), m();
    },
    get style() {
      return S();
    },
    set style(ee) {
      S(ee), m();
    },
    get type() {
      return N();
    },
    set type(ee) {
      N(ee), m();
    },
    get isParent() {
      return z();
    },
    set isParent(ee) {
      z(ee), m();
    },
    get positionX() {
      return D();
    },
    set positionX(ee) {
      D(ee), m();
    },
    get positionY() {
      return I();
    },
    set positionY(ee) {
      I(ee), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ee) {
      L(ee), m();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(ee) {
      Z(ee), m();
    },
    get zIndex() {
      return E();
    },
    set zIndex(ee) {
      E(ee), m();
    },
    get measuredWidth() {
      return $();
    },
    set measuredWidth(ee) {
      $(ee), m();
    },
    get measuredHeight() {
      return M();
    },
    set measuredHeight(ee) {
      M(ee), m();
    },
    get initialWidth() {
      return O();
    },
    set initialWidth(ee) {
      O(ee), m();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(ee) {
      V(ee), m();
    },
    get width() {
      return P();
    },
    set width(ee) {
      P(ee), m();
    },
    get height() {
      return A();
    },
    set height(ee) {
      A(ee), m();
    },
    get dragHandle() {
      return X();
    },
    set dragHandle(ee) {
      X(ee), m();
    },
    get initialized() {
      return K();
    },
    set initialized(ee) {
      K(ee), m();
    },
    get parentId() {
      return G();
    },
    set parentId(ee) {
      G(ee), m();
    },
    get nodeClickDistance() {
      return J();
    },
    set nodeClickDistance(ee) {
      J(ee), m();
    },
    get class() {
      return W();
    },
    set class(ee) {
      W(ee), m();
    }
  });
  return r(), tt;
}
ue(
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
var e2 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const t2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Kc(e, t) {
  ge(t, !1), Ue(e, t2);
  const [n, r] = rt(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(v, "$elementsSelectable", n), s = () => ne(g, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: g,
    elementsSelectable: v,
    updateNodeInternals: h,
    parentLookup: b
  } = Fe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const H = k.target.getAttribute("data-id");
      w.set(H, { id: H, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  us(() => {
    x == null || x.disconnect();
  }), Ae();
  var C = e2();
  Mt(C, 5, o, (_) => _.id, (_, w) => {
    const k = /* @__PURE__ */ xe(() => !!f(w).selected), H = /* @__PURE__ */ xe(() => !!f(w).hidden), S = /* @__PURE__ */ xe(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), N = /* @__PURE__ */ xe(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), z = /* @__PURE__ */ xe(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), D = /* @__PURE__ */ xe(() => f(w).deletable ?? !0), I = /* @__PURE__ */ xe(() => l().has(f(w).id)), L = /* @__PURE__ */ xe(() => f(w).type ?? "default"), Z = /* @__PURE__ */ xe(() => f(w).internals.z ?? 0), E = /* @__PURE__ */ xe(() => pc(f(w)));
    Yc(_, {
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
        return f(H);
      },
      get draggable() {
        return f(S);
      },
      get selectable() {
        return f(N);
      },
      get connectable() {
        return f(z);
      },
      get deletable() {
        return f(D);
      },
      get positionX() {
        return f(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return f(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return f(I);
      },
      get style() {
        return f(w).style;
      },
      get class() {
        return f(w).class;
      },
      get type() {
        return f(L);
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
        return f(Z);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(E);
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
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick($) {
          Xe.call(this, t, $);
        },
        nodemouseenter($) {
          Xe.call(this, t, $);
        },
        nodemousemove($) {
          Xe.call(this, t, $);
        },
        nodemouseleave($) {
          Xe.call(this, t, $);
        },
        nodedrag($) {
          Xe.call(this, t, $);
        },
        nodedragstart($) {
          Xe.call(this, t, $);
        },
        nodedragstop($) {
          Xe.call(this, t, $);
        },
        nodecontextmenu($) {
          Xe.call(this, t, $);
        }
      }
    });
  }), q(C), T(e, C);
  var p = pe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), m();
    }
  });
  return r(), p;
}
ue(Kc, { nodeClickDistance: {} }, [], [], !0);
var n2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(W, "$edgeTypes", n), i = () => ne(ve, "$flowId", n), a = () => ne(fe, "$elementsSelectable", n), s = () => ne(J, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0), g = /* @__PURE__ */ ie(void 0, !0);
  let v = y(t, "id", 13), h = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), C = y(t, "data", 29, () => ({})), p = y(t, "style", 13, void 0), _ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), H = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), N = y(t, "hidden", 13, !1), z = y(t, "label", 13, void 0), D = y(t, "labelStyle", 13, void 0), I = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), Z = y(t, "sourceHandle", 13, void 0), E = y(t, "targetHandle", 13, void 0), $ = y(t, "sourceX", 13), M = y(t, "sourceY", 13), O = y(t, "targetX", 13), V = y(t, "targetY", 13), P = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), X = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), G = y(t, "class", 13, "");
  Or("svelteflow__edge_id", v());
  const {
    edgeLookup: J,
    edgeTypes: W,
    flowId: ve,
    elementsSelectable: fe
  } = Fe(), me = Bi(), se = zc();
  function Se(j) {
    const Ne = s().get(v());
    Ne && (se(v()), me("edgeclick", { event: j, edge: Ne }));
  }
  function we(j, Ne) {
    const De = s().get(v());
    De && me(Ne, { event: j, edge: De });
  }
  he(() => te(h()), () => {
    Q(l, h() || "default");
  }), he(
    () => (o(), f(l), Mi),
    () => {
      Q(u, o()[f(l)] || Mi);
    }
  ), he(
    () => (te(I()), i()),
    () => {
      Q(c, I() ? `url('#${Ra(I(), i())}')` : void 0);
    }
  ), he(
    () => (te(L()), i()),
    () => {
      Q(d, L() ? `url('#${Ra(L(), i())}')` : void 0);
    }
  ), he(
    () => (te(H()), a()),
    () => {
      Q(g, H() ?? a());
    }
  ), yt(), Ae(!0);
  var He = Je(), ae = be(He);
  {
    var U = (j) => {
      var Ne = n2();
      let De;
      var Te = B(Ne);
      let le;
      var ce = B(Te);
      const oe = /* @__PURE__ */ xe(() => S() ?? !0);
      Eu(ce, () => f(u), (Ee, et) => {
        et(Ee, {
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
            return $();
          },
          get sourceY() {
            return M();
          },
          get targetX() {
            return O();
          },
          get targetY() {
            return V();
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
            return z();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return C();
          },
          get style() {
            return p();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return f(g);
          },
          get deletable() {
            return f(oe);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return Z();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), q(Te), q(Ne), Ce(
        (Ee, et) => {
          De = ft(Ne, "", De, { "z-index": _() }), le = $t(Te, 0, Ee, null, le, et), $e(Te, "data-id", v()), $e(Te, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => vn(Vt(["svelte-flow__edge", G()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(g)
          })
        ],
        xe
      ), nt("click", Te, Se), nt("contextmenu", Te, (Ee) => {
        we(Ee, "edgecontextmenu");
      }), nt("mouseenter", Te, (Ee) => {
        we(Ee, "edgemouseenter");
      }), nt("mouseleave", Te, (Ee) => {
        we(Ee, "edgemouseleave");
      }), T(j, Ne);
    };
    ye(ae, (j) => {
      N() || j(U);
    });
  }
  T(e, He);
  var Me = pe({
    get id() {
      return v();
    },
    set id(j) {
      v(j), m();
    },
    get type() {
      return h();
    },
    set type(j) {
      h(j), m();
    },
    get source() {
      return b();
    },
    set source(j) {
      b(j), m();
    },
    get target() {
      return x();
    },
    set target(j) {
      x(j), m();
    },
    get data() {
      return C();
    },
    set data(j) {
      C(j), m();
    },
    get style() {
      return p();
    },
    set style(j) {
      p(j), m();
    },
    get zIndex() {
      return _();
    },
    set zIndex(j) {
      _(j), m();
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
      return H();
    },
    set selectable(j) {
      H(j), m();
    },
    get deletable() {
      return S();
    },
    set deletable(j) {
      S(j), m();
    },
    get hidden() {
      return N();
    },
    set hidden(j) {
      N(j), m();
    },
    get label() {
      return z();
    },
    set label(j) {
      z(j), m();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(j) {
      D(j), m();
    },
    get markerStart() {
      return I();
    },
    set markerStart(j) {
      I(j), m();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(j) {
      L(j), m();
    },
    get sourceHandle() {
      return Z();
    },
    set sourceHandle(j) {
      Z(j), m();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(j) {
      E(j), m();
    },
    get sourceX() {
      return $();
    },
    set sourceX(j) {
      $(j), m();
    },
    get sourceY() {
      return M();
    },
    set sourceY(j) {
      M(j), m();
    },
    get targetX() {
      return O();
    },
    set targetX(j) {
      O(j), m();
    },
    get targetY() {
      return V();
    },
    set targetY(j) {
      V(j), m();
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
      return X();
    },
    set ariaLabel(j) {
      X(j), m();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(j) {
      K(j), m();
    },
    get class() {
      return G();
    },
    set class(j) {
      G(j), m();
    }
  });
  return r(), Me;
}
ue(
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
function jc(e, t) {
  ge(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return Qt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ae(), pe({
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
ue(jc, { onMount: {}, onDestroy: {} }, [], [], !0);
var r2 = /* @__PURE__ */ ke("<defs></defs>");
function Fc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$markers", n), { markers: i } = Fe();
  Ae();
  var a = r2();
  Mt(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, lt(() => f(l)));
  }), q(a), T(e, a), pe(), r();
}
ue(Fc, {}, [], [], !0);
var o2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), i2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), a2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ae();
  var c = a2(), d = B(c);
  {
    var g = (h) => {
      var b = o2();
      Ce(() => {
        $e(b, "stroke", l()), $e(b, "stroke-width", u());
      }), T(h, b);
    }, v = (h, b) => {
      {
        var x = (C) => {
          var p = i2();
          Ce(() => {
            $e(p, "stroke", l()), $e(p, "stroke-width", u()), $e(p, "fill", l());
          }), T(C, p);
        };
        ye(
          h,
          (C) => {
            r() === $o.ArrowClosed && C(x);
          },
          b
        );
      }
    };
    ye(d, (h) => {
      r() === $o.Arrow ? h(g) : h(v, !1);
    });
  }
  return q(c), Ce(() => {
    $e(c, "id", n()), $e(c, "markerWidth", `${o()}`), $e(c, "markerHeight", `${i()}`), $e(c, "markerUnits", a()), $e(c, "orient", s());
  }), T(e, c), pe({
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
  Gc,
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
var s2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Uc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Fe();
  Qt(() => {
    a() && u(a());
  }), Ae();
  var d = s2(), g = B(d), v = B(g);
  Fc(v, {}), q(g);
  var h = R(g, 2);
  Mt(h, 1, o, (p) => p.id, (p, _) => {
    const w = /* @__PURE__ */ xe(() => f(_).selectable ?? i()), k = /* @__PURE__ */ xe(() => f(_).type || "default");
    Wc(p, {
      get id() {
        return f(_).id;
      },
      get source() {
        return f(_).source;
      },
      get target() {
        return f(_).target;
      },
      get data() {
        return f(_).data;
      },
      get style() {
        return f(_).style;
      },
      get animated() {
        return f(_).animated;
      },
      get selected() {
        return f(_).selected;
      },
      get selectable() {
        return f(w);
      },
      get deletable() {
        return f(_).deletable;
      },
      get hidden() {
        return f(_).hidden;
      },
      get label() {
        return f(_).label;
      },
      get labelStyle() {
        return f(_).labelStyle;
      },
      get markerStart() {
        return f(_).markerStart;
      },
      get markerEnd() {
        return f(_).markerEnd;
      },
      get sourceHandle() {
        return f(_).sourceHandle;
      },
      get targetHandle() {
        return f(_).targetHandle;
      },
      get sourceX() {
        return f(_).sourceX;
      },
      get sourceY() {
        return f(_).sourceY;
      },
      get targetX() {
        return f(_).targetX;
      },
      get targetY() {
        return f(_).targetY;
      },
      get sourcePosition() {
        return f(_).sourcePosition;
      },
      get targetPosition() {
        return f(_).targetPosition;
      },
      get ariaLabel() {
        return f(_).ariaLabel;
      },
      get interactionWidth() {
        return f(_).interactionWidth;
      },
      get class() {
        return f(_).class;
      },
      get type() {
        return f(k);
      },
      get zIndex() {
        return f(_).zIndex;
      },
      $$events: {
        edgeclick(H) {
          Xe.call(this, t, H);
        },
        edgecontextmenu(H) {
          Xe.call(this, t, H);
        },
        edgemouseenter(H) {
          Xe.call(this, t, H);
        },
        edgemouseleave(H) {
          Xe.call(this, t, H);
        }
      }
    });
  });
  var b = R(h, 2);
  {
    var x = (p) => {
      jc(p, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    ye(b, (p) => {
      o().length > 0 && p(x);
    });
  }
  q(d), T(e, d);
  var C = pe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(p) {
      a(p), m();
    }
  });
  return r(), C;
}
ue(Uc, { defaultEdgeOptions: {} }, [], [], !0);
var l2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const u2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cs(e, t) {
  ge(t, !1), Ue(e, u2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Je(), l = be(s);
  {
    var u = (c) => {
      var d = l2();
      let g;
      Ce(() => g = ft(d, "", g, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), T(c, d);
    };
    ye(l, (c) => {
      a() && c(u);
    });
  }
  return T(e, s), pe({
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
function Jc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Fe();
  Ae();
  const l = /* @__PURE__ */ xe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ xe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ xe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ xe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), g = /* @__PURE__ */ xe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  Cs(e, {
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
      return f(g);
    }
  }), pe(), r();
}
ue(Jc, {}, [], [], !0);
var c2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const d2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  ge(t, !1), Ue(e, d2);
  const [n, r] = rt(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = Fe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Bi();
  let g = /* @__PURE__ */ ie(null);
  function v(p) {
    const _ = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: _, event: p });
  }
  function h(p) {
    const _ = a().filter((w) => w.selected);
    d("selectionclick", { nodes: _, event: p });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (Q(g, Oo(i(), { filter: (p) => !!p.selected })), a());
    }
  ), yt(), Ae();
  var b = Je(), x = be(b);
  {
    var C = (p) => {
      var _ = c2(), w = B(_);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(_), bt(_, (k, H) => Vi == null ? void 0 : Vi(k, H), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, H, S, N) => {
          d("nodedrag", { event: k, targetNode: null, nodes: N });
        },
        onDragStart: (k, H, S, N) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: N });
        },
        onDragStop: (k, H, S, N) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: N });
        }
      })), It(() => nt("contextmenu", _, v)), It(() => nt("click", _, h)), It(() => nt("keyup", _, () => {
      })), Ce(() => ft(_, `width: ${f(g).width ?? ""}px; height: ${f(g).height ?? ""}px; transform: translate(${f(g).x ?? ""}px, ${f(g).y ?? ""}px)`)), T(p, _);
    };
    ye(x, (p) => {
      o() === "nodes" && f(g) && Pn(f(g).x) && Pn(f(g).y) && p(C);
    });
  }
  T(e, b), pe(), r();
}
ue(Qc, {}, [], [], !0);
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
      }, { modifier: d, key: g, callback: v, preventDefault: h, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((C) => l[C])
        ))
          continue;
        if (a.key === g) {
          h && a.preventDefault();
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
function ed(e, t) {
  ge(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => _i() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => _i() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: g
  } = Fe();
  function v(p) {
    return p !== null && typeof p == "object";
  }
  function h(p) {
    return v(p) ? p.modifier || [] : [];
  }
  function b(p) {
    return p == null ? "" : v(p) ? p.key : p;
  }
  function x(p, _) {
    return (Array.isArray(p) ? p : [p]).map((w) => {
      const k = b(w);
      return {
        key: k,
        modifier: h(w),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function C() {
    g.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ae(), nt("blur", Nt, C), nt("contextmenu", Nt, C), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Yh(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), bt(Nt, (p, _) => dt == null ? void 0 : dt(p, _), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), pe({
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
  ed,
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
var f2 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), v2 = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(v, "$connection", n), i = () => ne(h, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(g, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: g,
    connection: v,
    connectionLineType: h
  } = Fe();
  let b = /* @__PURE__ */ ie(null);
  he(
    () => (o(), te(c()), i(), f(b), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: H, toPosition: S } = o(), N = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: H,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Er.Bezier:
            ((z) => Q(b, z[0]))(yc(N));
            break;
          case Er.Step:
            ((z) => Q(b, z[0]))(ki({ ...N, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((z) => Q(b, z[0]))(ki(N));
            break;
          default:
            ((z) => Q(b, z[0]))(Ia(N));
        }
      }
    }
  ), yt(), Ae();
  var x = Je(), C = be(x);
  {
    var p = (w) => {
      var k = v2(), H = B(k), S = B(H);
      xt(S, t, "connectionLine", {});
      var N = R(S);
      {
        var z = (D) => {
          var I = f2();
          Ce(() => {
            $e(I, "d", f(b)), ft(I, u());
          }), T(D, I);
        };
        ye(N, (D) => {
          c() || D(z);
        });
      }
      q(H), q(k), Ce(
        (D) => {
          $e(k, "width", a()), $e(k, "height", s()), ft(k, l()), $t(H, 0, D);
        },
        [
          () => vn(Vt([
            "svelte-flow__connection",
            Ph(o().isValid)
          ]))
        ],
        xe
      ), T(w, k);
    };
    ye(C, (w) => {
      o().inProgress && w(p);
    });
  }
  T(e, x);
  var _ = pe({
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
  return r(), _;
}
ue(
  td,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var g2 = /* @__PURE__ */ re("<div><!></div>");
function To(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = rt(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ ie();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Fe();
  he(() => te(l()), () => {
    Q(s, `${l()}`.split("-"));
  }), yt(), Ae();
  var g = g2();
  let v;
  var h = B(g);
  xt(h, t, "default", {}), q(g), Ce(
    (x) => v = Xt(g, v, {
      class: x,
      style: u(),
      ...r,
      [rr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Vt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    xe
  ), T(e, g);
  var b = pe({
    get position() {
      return l();
    },
    set position(x) {
      l(x), m();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), m();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), m();
    }
  });
  return i(), b;
}
ue(To, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var p2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  ge(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ae();
  var o = Je(), i = be(o);
  {
    var a = (s) => {
      To(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = p2();
          T(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ye(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return T(e, o), pe({
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
ue(nd, { proOptions: {}, position: {} }, [], [], !0);
function Ll(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const h2 = (e) => Object.keys(e);
function Tl(e, t) {
  h2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function m2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function y2(e = "light") {
  return Wt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = m2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var w2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), b2 = /* @__PURE__ */ re("<!> <!>", 1), x2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const $2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function rd(e, t) {
  const n = zf(t), r = st(t, [
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
  ge(t, !1), Ue(e, $2);
  const [i, a] = rt(), s = () => ne(_(), "$viewport", i), l = () => ne(ra, "$initialized", i), u = () => ne(f(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, "1"), g = y(t, "nodes", 12), v = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), C = y(t, "maxZoom", 12, void 0), p = y(t, "initialViewport", 12, void 0), _ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), H = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), N = y(t, "panActivationKey", 12, void 0), z = y(t, "multiSelectionKey", 12, void 0), D = y(t, "zoomActivationKey", 12, void 0), I = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), Z = y(t, "nodeDragThreshold", 12, void 0), E = y(t, "elementsSelectable", 12, void 0), $ = y(t, "snapGrid", 12, void 0), M = y(t, "deleteKey", 12, void 0), O = y(t, "connectionRadius", 12, void 0), V = y(t, "connectionLineType", 12, void 0), P = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), X = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), G = y(t, "onMove", 12, void 0), J = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), ve = y(t, "translateExtent", 12, void 0), fe = y(t, "nodeExtent", 12, void 0), me = y(t, "onlyRenderVisibleElements", 12, void 0), se = y(t, "panOnScrollMode", 28, () => jn.Free), Se = y(t, "preventScrolling", 12, !0), we = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), ae = y(t, "zoomOnPinch", 12, !0), U = y(t, "panOnScroll", 12, !1), Me = y(t, "panOnDrag", 12, !0), j = y(t, "selectionOnDrag", 12, void 0), Ne = y(t, "autoPanOnConnect", 12, !0), De = y(t, "autoPanOnNodeDrag", 12, !0), Te = y(t, "onerror", 12, void 0), le = y(t, "ondelete", 12, void 0), ce = y(t, "onedgecreate", 12, void 0), oe = y(t, "attributionPosition", 12, void 0), Ee = y(t, "proOptions", 12, void 0), et = y(t, "defaultEdgeOptions", 12, void 0), tt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Ye = y(t, "colorMode", 12, "light"), de = y(t, "onconnect", 12, void 0), en = y(t, "onconnectstart", 12, void 0), tn = y(t, "onconnectend", 12, void 0), hn = y(t, "onbeforedelete", 12, void 0), Le = y(t, "oninit", 12, void 0), ot = y(t, "nodeOrigin", 12, void 0), qe = y(t, "paneClickDistance", 12, 0), Ie = y(t, "nodeClickDistance", 12, 0), it = y(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = y(t, "style", 12, void 0), Kt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ ie(), Ct = /* @__PURE__ */ ie(), Ht = /* @__PURE__ */ ie();
  const yr = s() || p(), at = gf(Ji) ? Fe() : Y0({
    nodes: F(g()),
    edges: F(v()),
    width: tt(),
    height: ee(),
    fitView: h(),
    nodeOrigin: ot(),
    nodeExtent: fe()
  });
  Qt(() => (at.width.set(f(Ct)), at.height.set(f(Ht)), at.domNode.set(f(Ur)), at.syncNodeStores(g()), at.syncEdgeStores(v()), at.syncViewport(_()), h() !== void 0 && at.fitViewQueued.set(h()), b() && at.fitViewOptions.set(b()), Ll(at, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: C(),
    translateExtent: ve(),
    paneClickDistance: qe()
  }), () => {
    at.reset();
  }));
  const { initialized: ra } = at;
  let Jr = /* @__PURE__ */ ie(!1);
  he(
    () => (f(Ct), f(Ht)),
    () => {
      f(Ct) !== void 0 && f(Ht) !== void 0 && (at.width.set(f(Ct)), at.height.set(f(Ht)));
    }
  ), he(
    () => (f(Jr), l(), te(Le())),
    () => {
      var Y;
      !f(Jr) && l() && ((Y = Le()) == null || Y(), Q(Jr, !0));
    }
  ), he(
    () => (te(d()), te(V()), te(O()), te(S()), te($()), te(it()), te(I()), te(L()), te(E()), te(me()), te(W()), te(Ne()), te(De()), te(Te()), te(le()), te(ce()), te(P()), te(Z()), te(de()), te(en()), te(tn()), te(hn()), te(ot()), Tl),
    () => {
      const Y = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: O(),
        selectionMode: S(),
        snapGrid: $(),
        defaultMarkerColor: it(),
        nodesDraggable: I(),
        nodesConnectable: L(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: me(),
        isValidConnection: W(),
        autoPanOnConnect: Ne(),
        autoPanOnNodeDrag: De(),
        onerror: Te(),
        ondelete: le(),
        onedgecreate: ce(),
        connectionMode: P(),
        nodeDragThreshold: Z(),
        onconnect: de(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: hn(),
        nodeOrigin: ot()
      };
      Tl(at, Y);
    }
  ), he(
    () => (te(w()), te(k()), te(x()), te(C()), te(ve()), te(qe())),
    () => {
      Ll(at, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: C(),
        translateExtent: ve(),
        paneClickDistance: qe()
      });
    }
  ), he(
    () => te(Ye()),
    () => {
      Yf(Q(c, y2(Ye())), "$colorModeClass", i);
    }
  ), yt(), Ae();
  var Dt = x2();
  let Ro;
  var Zo = B(Dt);
  ed(Zo, {
    get selectionKey() {
      return H();
    },
    get deleteKey() {
      return M();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var qo = R(Zo, 2);
  const oa = /* @__PURE__ */ xe(() => se() === void 0 ? jn.Free : se()), Ud = /* @__PURE__ */ xe(() => Se() === void 0 ? !0 : Se()), Jd = /* @__PURE__ */ xe(() => we() === void 0 ? !0 : we()), Qd = /* @__PURE__ */ xe(() => He() === void 0 ? !0 : He()), e1 = /* @__PURE__ */ xe(() => ae() === void 0 ? !0 : ae()), t1 = /* @__PURE__ */ xe(() => U() === void 0 ? !1 : U()), n1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me()), r1 = /* @__PURE__ */ xe(() => qe() === void 0 ? 0 : qe());
  qc(qo, {
    initialViewport: yr,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return G();
    },
    get onMoveEnd() {
      return J();
    },
    get panOnScrollMode() {
      return f(oa);
    },
    get preventScrolling() {
      return f(Ud);
    },
    get zoomOnScroll() {
      return f(Jd);
    },
    get zoomOnDoubleClick() {
      return f(Qd);
    },
    get zoomOnPinch() {
      return f(e1);
    },
    get panOnScroll() {
      return f(t1);
    },
    get panOnDrag() {
      return f(n1);
    },
    get paneClickDistance() {
      return f(r1);
    },
    children: (Y, nb) => {
      const a1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me());
      Bc(Y, {
        get panOnDrag() {
          return f(a1);
        },
        get selectionOnDrag() {
          return j();
        },
        $$events: {
          paneclick(Qr) {
            Xe.call(this, t, Qr);
          },
          panecontextmenu(Qr) {
            Xe.call(this, t, Qr);
          }
        },
        children: (Qr, rb) => {
          var Hs = b2(), Ps = be(Hs);
          Xc(Ps, {
            children: (l1, ob) => {
              var Ns = w2(), Os = be(Ns);
              Uc(Os, {
                get defaultEdgeOptions() {
                  return et();
                },
                $$events: {
                  edgeclick(Be) {
                    Xe.call(this, t, Be);
                  },
                  edgecontextmenu(Be) {
                    Xe.call(this, t, Be);
                  },
                  edgemouseenter(Be) {
                    Xe.call(this, t, Be);
                  },
                  edgemouseleave(Be) {
                    Xe.call(this, t, Be);
                  }
                }
              });
              var zs = R(Os, 2);
              td(zs, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Be, ib) => {
                    var Ts = Je(), c1 = be(Ts);
                    xt(c1, t, "connectionLine", {}), T(Be, Ts);
                  }
                }
              });
              var Ls = R(zs, 6);
              Kc(Ls, {
                get nodeClickDistance() {
                  return Ie();
                },
                $$events: {
                  nodeclick(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodemouseenter(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodemousemove(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodemouseleave(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedragstart(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedrag(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedragstop(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodecontextmenu(Be) {
                    Xe.call(this, t, Be);
                  }
                }
              });
              var u1 = R(Ls, 2);
              Qc(u1, {
                $$events: {
                  selectionclick(Be) {
                    Xe.call(this, t, Be);
                  },
                  selectioncontextmenu(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedragstart(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedrag(Be) {
                    Xe.call(this, t, Be);
                  },
                  nodedragstop(Be) {
                    Xe.call(this, t, Be);
                  }
                }
              }), T(l1, Ns);
            },
            $$slots: { default: !0 }
          });
          var s1 = R(Ps, 2);
          Jc(s1, {}), T(Qr, Hs);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Vs = R(qo, 2);
  nd(Vs, {
    get proOptions() {
      return Ee();
    },
    get position() {
      return oe();
    }
  });
  var o1 = R(Vs, 2);
  xt(o1, t, "default", {}), q(Dt), _n(Dt, (Y) => Q(Ur, Y), () => f(Ur)), Ce(
    (Y) => Ro = Xt(
      Dt,
      Ro,
      {
        style: nn(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Vt([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    xe
  ), Fs(Dt, "clientWidth", (Y) => Q(Ct, Y)), Fs(Dt, "clientHeight", (Y) => Q(Ht, Y)), nt("dragover", Dt, function(Y) {
    Xe.call(this, t, Y);
  }), nt("drop", Dt, function(Y) {
    Xe.call(this, t, Y);
  }), T(e, Dt);
  var i1 = pe({
    get id() {
      return d();
    },
    set id(Y) {
      d(Y), m();
    },
    get nodes() {
      return g();
    },
    set nodes(Y) {
      g(Y), m();
    },
    get edges() {
      return v();
    },
    set edges(Y) {
      v(Y), m();
    },
    get fitView() {
      return h();
    },
    set fitView(Y) {
      h(Y), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(Y) {
      b(Y), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Y) {
      x(Y), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(Y) {
      C(Y), m();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(Y) {
      p(Y), m();
    },
    get viewport() {
      return _();
    },
    set viewport(Y) {
      _(Y), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(Y) {
      w(Y), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Y) {
      k(Y), m();
    },
    get selectionKey() {
      return H();
    },
    set selectionKey(Y) {
      H(Y), m();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(Y) {
      S(Y), m();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(Y) {
      N(Y), m();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(Y) {
      z(Y), m();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(Y) {
      D(Y), m();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(Y) {
      I(Y), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Y) {
      L(Y), m();
    },
    get nodeDragThreshold() {
      return Z();
    },
    set nodeDragThreshold(Y) {
      Z(Y), m();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(Y) {
      E(Y), m();
    },
    get snapGrid() {
      return $();
    },
    set snapGrid(Y) {
      $(Y), m();
    },
    get deleteKey() {
      return M();
    },
    set deleteKey(Y) {
      M(Y), m();
    },
    get connectionRadius() {
      return O();
    },
    set connectionRadius(Y) {
      O(Y), m();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(Y) {
      V(Y), m();
    },
    get connectionMode() {
      return P();
    },
    set connectionMode(Y) {
      P(Y), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(Y) {
      A(Y), m();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(Y) {
      X(Y), m();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Y) {
      K(Y), m();
    },
    get onMove() {
      return G();
    },
    set onMove(Y) {
      G(Y), m();
    },
    get onMoveEnd() {
      return J();
    },
    set onMoveEnd(Y) {
      J(Y), m();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Y) {
      W(Y), m();
    },
    get translateExtent() {
      return ve();
    },
    set translateExtent(Y) {
      ve(Y), m();
    },
    get nodeExtent() {
      return fe();
    },
    set nodeExtent(Y) {
      fe(Y), m();
    },
    get onlyRenderVisibleElements() {
      return me();
    },
    set onlyRenderVisibleElements(Y) {
      me(Y), m();
    },
    get panOnScrollMode() {
      return se();
    },
    set panOnScrollMode(Y) {
      se(Y), m();
    },
    get preventScrolling() {
      return Se();
    },
    set preventScrolling(Y) {
      Se(Y), m();
    },
    get zoomOnScroll() {
      return we();
    },
    set zoomOnScroll(Y) {
      we(Y), m();
    },
    get zoomOnDoubleClick() {
      return He();
    },
    set zoomOnDoubleClick(Y) {
      He(Y), m();
    },
    get zoomOnPinch() {
      return ae();
    },
    set zoomOnPinch(Y) {
      ae(Y), m();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(Y) {
      U(Y), m();
    },
    get panOnDrag() {
      return Me();
    },
    set panOnDrag(Y) {
      Me(Y), m();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(Y) {
      j(Y), m();
    },
    get autoPanOnConnect() {
      return Ne();
    },
    set autoPanOnConnect(Y) {
      Ne(Y), m();
    },
    get autoPanOnNodeDrag() {
      return De();
    },
    set autoPanOnNodeDrag(Y) {
      De(Y), m();
    },
    get onerror() {
      return Te();
    },
    set onerror(Y) {
      Te(Y), m();
    },
    get ondelete() {
      return le();
    },
    set ondelete(Y) {
      le(Y), m();
    },
    get onedgecreate() {
      return ce();
    },
    set onedgecreate(Y) {
      ce(Y), m();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Y) {
      oe(Y), m();
    },
    get proOptions() {
      return Ee();
    },
    set proOptions(Y) {
      Ee(Y), m();
    },
    get defaultEdgeOptions() {
      return et();
    },
    set defaultEdgeOptions(Y) {
      et(Y), m();
    },
    get width() {
      return tt();
    },
    set width(Y) {
      tt(Y), m();
    },
    get height() {
      return ee();
    },
    set height(Y) {
      ee(Y), m();
    },
    get colorMode() {
      return Ye();
    },
    set colorMode(Y) {
      Ye(Y), m();
    },
    get onconnect() {
      return de();
    },
    set onconnect(Y) {
      de(Y), m();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(Y) {
      en(Y), m();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(Y) {
      tn(Y), m();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(Y) {
      hn(Y), m();
    },
    get oninit() {
      return Le();
    },
    set oninit(Y) {
      Le(Y), m();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(Y) {
      ot(Y), m();
    },
    get paneClickDistance() {
      return qe();
    },
    set paneClickDistance(Y) {
      qe(Y), m();
    },
    get nodeClickDistance() {
      return Ie();
    },
    set nodeClickDistance(Y) {
      Ie(Y), m();
    },
    get defaultMarkerColor() {
      return it();
    },
    set defaultMarkerColor(Y) {
      it(Y), m();
    },
    get style() {
      return nn();
    },
    set style(Y) {
      nn(Y), m();
    },
    get class() {
      return Kt();
    },
    set class(Y) {
      Kt(Y), m();
    }
  });
  return a(), i1;
}
ue(
  rd,
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
function od(e, t) {
  ge(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = Zc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Or(Ji, { getStore: () => l }), us(() => {
    l.reset();
  }), Ae();
  var u = Je(), c = be(u);
  return xt(c, t, "default", {}), T(e, u), pe({
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
ue(
  od,
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
var C2 = /* @__PURE__ */ re("<button><!></button>");
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
  ge(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Ae();
  var c = C2();
  let d;
  var g = B(c);
  return xt(g, t, "default", { class: "button-svg" }), q(c), Ce(
    (v) => d = Xt(c, d, {
      type: "button",
      class: v,
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
      () => Vt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    xe
  ), nt("click", c, function(v) {
    Xe.call(this, t, v);
  }), T(e, c), pe({
    get class() {
      return o();
    },
    set class(v) {
      o(v), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), m();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), m();
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
var _2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = _2();
  T(e, t);
}
ue(id, {}, [], [], !0);
var k2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = k2();
  T(e, t);
}
ue(ad, {}, [], [], !0);
var S2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function sd(e) {
  var t = S2();
  T(e, t);
}
ue(sd, {}, [], [], !0);
var E2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = E2();
  T(e, t);
}
ue(ld, {}, [], [], !0);
var M2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = M2();
  T(e, t);
}
ue(ud, {}, [], [], !0);
var V2 = /* @__PURE__ */ re("<!> <!>", 1), H2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(V, "$nodesDraggable", n), i = () => ne(P, "$nodesConnectable", n), a = () => ne(A, "$elementsSelectable", n), s = () => ne($, "$viewport", n), l = () => ne(M, "$minZoom", n), u = () => ne(O, "$maxZoom", n), c = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie();
  let h = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), C = y(t, "showLock", 12, !0), p = y(t, "buttonBgColor", 12, void 0), _ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), H = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), N = y(t, "style", 12, void 0), z = y(t, "orientation", 12, "vertical"), D = y(t, "fitViewOptions", 12, void 0), I = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: Z,
    fitView: E,
    viewport: $,
    minZoom: M,
    maxZoom: O,
    nodesDraggable: V,
    nodesConnectable: P,
    elementsSelectable: A
  } = Fe(), X = {
    bgColor: p(),
    bgColorHover: _(),
    color: w(),
    colorHover: k(),
    borderColor: H()
  }, K = () => {
    L();
  }, G = () => {
    Z();
  }, J = () => {
    E(D());
  }, W = () => {
    Q(c, !f(c)), V.set(f(c)), P.set(f(c)), A.set(f(c));
  };
  he(
    () => (o(), i(), a()),
    () => {
      Q(c, o() || i() || a());
    }
  ), he(() => (s(), l()), () => {
    Q(d, s().zoom <= l());
  }), he(() => (s(), u()), () => {
    Q(g, s().zoom >= u());
  }), he(() => te(z()), () => {
    Q(v, z() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), Ae();
  const ve = /* @__PURE__ */ xe(() => Vt([
    "svelte-flow__controls",
    f(v),
    I()
  ])), fe = /* @__PURE__ */ xe(() => S() ?? "Svelte Flow controls");
  To(e, {
    get class() {
      return f(ve);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(fe);
    },
    get style() {
      return N();
    },
    children: (se, Se) => {
      var we = H2(), He = be(we);
      xt(He, t, "before", {});
      var ae = R(He, 2);
      {
        var U = (ce) => {
          var oe = V2(), Ee = be(oe);
          so(Ee, lt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(g);
              }
            },
            X,
            {
              $$events: { click: K },
              children: (tt, ee) => {
                id(tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var et = R(Ee, 2);
          so(et, lt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            X,
            {
              $$events: { click: G },
              children: (tt, ee) => {
                ad(tt);
              },
              $$slots: { default: !0 }
            }
          )), T(ce, oe);
        };
        ye(ae, (ce) => {
          b() && ce(U);
        });
      }
      var Me = R(ae, 2);
      {
        var j = (ce) => {
          so(ce, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: J },
              children: (oe, Ee) => {
                sd(oe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Me, (ce) => {
          x() && ce(j);
        });
      }
      var Ne = R(Me, 2);
      {
        var De = (ce) => {
          so(ce, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: W },
              children: (oe, Ee) => {
                var et = Je(), tt = be(et);
                {
                  var ee = (de) => {
                    ud(de);
                  }, Ye = (de) => {
                    ld(de);
                  };
                  ye(tt, (de) => {
                    f(c) ? de(ee) : de(Ye, !1);
                  });
                }
                T(oe, et);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Ne, (ce) => {
          C() && ce(De);
        });
      }
      var Te = R(Ne, 2);
      xt(Te, t, "default", {});
      var le = R(Te, 2);
      xt(le, t, "after", {}), T(se, we);
    },
    $$slots: { default: !0 }
  });
  var me = pe({
    get position() {
      return h();
    },
    set position(se) {
      h(se), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(se) {
      b(se), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(se) {
      x(se), m();
    },
    get showLock() {
      return C();
    },
    set showLock(se) {
      C(se), m();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(se) {
      p(se), m();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(se) {
      _(se), m();
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
      return H();
    },
    set buttonBorderColor(se) {
      H(se), m();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(se) {
      S(se), m();
    },
    get style() {
      return N();
    },
    set style(se) {
      N(se), m();
    },
    get orientation() {
      return z();
    },
    set orientation(se) {
      z(se), m();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(se) {
      D(se), m();
    },
    get class() {
      return I();
    },
    set class(se) {
      I(se), m();
    }
  });
  return r(), me;
}
ue(
  cd,
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
var P2 = /* @__PURE__ */ ke("<circle></circle>");
function dd(e, t) {
  ge(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ae();
  var o = P2();
  return Ce(
    (i) => {
      $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), $t(o, 0, i);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    xe
  ), T(e, o), pe({
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
ue(dd, { radius: {}, class: {} }, [], [], !0);
var N2 = /* @__PURE__ */ ke("<path></path>");
function fd(e, t) {
  ge(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ae();
  var a = N2();
  return Ce(
    (s) => {
      $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), $t(a, 0, s);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    xe
  ), T(e, a), pe({
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
  fd,
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
const O2 = {
  [Fn.Dots]: 1,
  [Fn.Lines]: 1,
  [Fn.Cross]: 6
};
var z2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const L2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function vd(e, t) {
  ge(t, !1), Ue(e, L2);
  const [n, r] = rt(), o = () => ne(k, "$flowId", n), i = () => ne(w, "$viewport", n), a = /* @__PURE__ */ ie(), s = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, void 0), g = y(t, "variant", 28, () => Fn.Dots), v = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), C = y(t, "patternColor", 12, void 0), p = y(t, "patternClass", 12, void 0), _ = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Fe(), H = h() || O2[g()], S = g() === Fn.Dots, N = g() === Fn.Cross, z = Array.isArray(v()) ? v() : [v(), v()];
  he(
    () => (o(), te(d())),
    () => {
      Q(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    Q(s, [
      z[0] * i().zoom || 1,
      z[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    Q(l, H * i().zoom);
  }), he(() => (f(l), f(s)), () => {
    Q(u, N ? [f(l), f(l)] : f(s));
  }), he(
    () => (f(l), f(u)),
    () => {
      Q(c, S ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), yt(), Ae();
  var D = z2();
  let I;
  var L = B(D), Z = B(L);
  {
    var E = (V) => {
      const P = /* @__PURE__ */ xe(() => f(l) / 2);
      dd(V, {
        get radius() {
          return f(P);
        },
        get class() {
          return p();
        }
      });
    }, $ = (V) => {
      fd(V, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return g();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return p();
        }
      });
    };
    ye(Z, (V) => {
      S ? V(E) : V($, !1);
    });
  }
  q(L);
  var M = R(L);
  q(D), Ce(
    (V) => {
      $t(D, 0, V, "svelte-1r7pe8d"), I = ft(D, "", I, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": C()
      }), $e(L, "id", f(a)), $e(L, "x", i().x % f(s)[0]), $e(L, "y", i().y % f(s)[1]), $e(L, "width", f(s)[0]), $e(L, "height", f(s)[1]), $e(L, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), $e(M, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Vt(["svelte-flow__background", _()]))
    ],
    xe
  ), T(e, D);
  var O = pe({
    get id() {
      return d();
    },
    set id(V) {
      d(V), m();
    },
    get variant() {
      return g();
    },
    set variant(V) {
      g(V), m();
    },
    get gap() {
      return v();
    },
    set gap(V) {
      v(V), m();
    },
    get size() {
      return h();
    },
    set size(V) {
      h(V), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(V) {
      b(V), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(V) {
      x(V), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(V) {
      C(V), m();
    },
    get patternClass() {
      return p();
    },
    set patternClass(V) {
      p(V), m();
    },
    get class() {
      return _();
    },
    set class(V) {
      _(V), m();
    }
  });
  return r(), O;
}
ue(
  vd,
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
var T2 = /* @__PURE__ */ ke("<rect></rect>");
function gd(e, t) {
  ge(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), g = y(t, "class", 12, "");
  Ae();
  var v = T2();
  let h;
  return Ce(
    (b, x) => {
      h = $t(v, 0, b, null, h, x), $e(v, "x", n()), $e(v, "y", r()), $e(v, "rx", a()), $e(v, "ry", a()), $e(v, "width", o()), $e(v, "height", i()), ft(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(v, "shape-rendering", l());
    },
    [
      () => vn(Vt(["svelte-flow__minimap-node", g()])),
      () => ({ selected: d() })
    ],
    xe
  ), T(e, v), pe({
    get x() {
      return n();
    },
    set x(b) {
      n(b), m();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), m();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), m();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), m();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), m();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), m();
    },
    get class() {
      return g();
    },
    set class(b) {
      g(b), m();
    }
  });
}
ue(
  gd,
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
  const n = b0({
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
var D2 = /* @__PURE__ */ ke("<title> </title>"), A2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function pd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(Me, "$flowId", n), i = () => ne(He, "$viewport", n), a = () => ne(ae, "$containerWidth", n), s = () => ne(U, "$containerHeight", n), l = () => ne(we, "$nodeLookup", n), u = () => ne(Se, "$nodes", n), c = () => ne(j, "$panZoom", n), d = () => ne(Ne, "$translateExtent", n), g = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), _ = /* @__PURE__ */ ie(), w = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), N = /* @__PURE__ */ ie();
  let z = y(t, "position", 12, "bottom-right"), D = y(t, "ariaLabel", 12, "Mini map"), I = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), Z = y(t, "nodeClass", 12, ""), E = y(t, "nodeBorderRadius", 12, 5), $ = y(t, "nodeStrokeWidth", 12, 2), M = y(t, "bgColor", 12, void 0), O = y(t, "maskColor", 12, void 0), V = y(t, "maskStrokeColor", 12, void 0), P = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), X = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), G = y(t, "zoomable", 12, !0), J = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), ve = y(t, "style", 12, ""), fe = y(t, "class", 12, "");
  const me = 200, se = 150, {
    nodes: Se,
    nodeLookup: we,
    viewport: He,
    width: ae,
    height: U,
    flowId: Me,
    panZoom: j,
    translateExtent: Ne
  } = Fe(), De = L() === void 0 ? void 0 : ha(L()), Te = ha(I()), le = ha(Z()), ce = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), oe = `svelte-flow__minimap-desc-${o()}`;
  let Ee = /* @__PURE__ */ ie(f(g));
  const et = () => f(C);
  he(
    () => (i(), a(), s()),
    () => {
      Q(g, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), he(
    () => (l(), f(g), u()),
    () => {
      Q(Ee, l().size > 0 ? gc(Oo(l(), { filter: (de) => !de.hidden }), f(g)) : f(g)), u();
    }
  ), he(() => te(A()), () => {
    Q(v, A() ?? me);
  }), he(() => te(X()), () => {
    Q(h, X() ?? se);
  }), he(
    () => (f(Ee), f(v)),
    () => {
      Q(b, f(Ee).width / f(v));
    }
  ), he(
    () => (f(Ee), f(h)),
    () => {
      Q(x, f(Ee).height / f(h));
    }
  ), he(
    () => (f(b), f(x)),
    () => {
      Q(C, Math.max(f(b), f(x)));
    }
  ), he(() => (f(C), f(v)), () => {
    Q(p, f(C) * f(v));
  }), he(
    () => (f(C), f(h)),
    () => {
      Q(_, f(C) * f(h));
    }
  ), he(() => f(C), () => {
    Q(w, 5 * f(C));
  }), he(
    () => (f(Ee), f(p), f(w)),
    () => {
      Q(k, f(Ee).x - (f(p) - f(Ee).width) / 2 - f(w));
    }
  ), he(
    () => (f(Ee), f(_), f(w)),
    () => {
      Q(H, f(Ee).y - (f(_) - f(Ee).height) / 2 - f(w));
    }
  ), he(() => (f(p), f(w)), () => {
    Q(S, f(p) + f(w) * 2);
  }), he(() => (f(_), f(w)), () => {
    Q(N, f(_) + f(w) * 2);
  }), yt(), Ae();
  const tt = /* @__PURE__ */ xe(() => ve() + (M() ? `;--xy-minimap-background-color-props:${M()}` : "")), ee = /* @__PURE__ */ xe(() => Vt(["svelte-flow__minimap", fe()]));
  To(e, {
    get position() {
      return z();
    },
    get style() {
      return f(tt);
    },
    get class() {
      return f(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (de, en) => {
      var tn = Je(), hn = be(tn);
      {
        var Le = (ot) => {
          var qe = A2();
          $e(qe, "aria-labelledby", oe);
          let Ie;
          var it = B(qe);
          {
            var nn = (Ct) => {
              var Ht = D2();
              $e(Ht, "id", oe);
              var yr = B(Ht, !0);
              q(Ht), Ce(() => ct(yr, D())), T(Ct, Ht);
            };
            ye(it, (Ct) => {
              D() && Ct(nn);
            });
          }
          var Kt = R(it);
          Mt(Kt, 1, u, (Ct) => Ct.id, (Ct, Ht) => {
            var yr = Je();
            const at = /* @__PURE__ */ xe(() => l().get(f(Ht).id));
            var ra = be(yr);
            {
              var Jr = (Dt) => {
                const Ro = /* @__PURE__ */ xe(() => nr(f(at))), Zo = /* @__PURE__ */ xe(() => De == null ? void 0 : De(f(at))), qo = /* @__PURE__ */ xe(() => Te(f(at))), oa = /* @__PURE__ */ xe(() => le(f(at)));
                gd(Dt, lt(
                  {
                    get x() {
                      return f(at).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(at).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Ro),
                  {
                    get selected() {
                      return f(at).selected;
                    },
                    get color() {
                      return f(Zo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return f(qo);
                    },
                    get strokeWidth() {
                      return $();
                    },
                    shapeRendering: ce,
                    get class() {
                      return f(oa);
                    }
                  }
                ));
              };
              ye(ra, (Dt) => {
                f(at) && pc(f(at)) && Dt(Jr);
              });
            }
            T(Ct, yr);
          });
          var Ur = R(Kt);
          q(qe), bt(qe, (Ct, Ht) => Dl == null ? void 0 : Dl(Ct, Ht), () => ({
            panZoom: c(),
            viewport: He,
            getViewScale: et,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: J(),
            zoomStep: W(),
            pannable: K(),
            zoomable: G()
          })), Ce(() => {
            $e(qe, "width", f(v)), $e(qe, "height", f(h)), $e(qe, "viewBox", `${f(k) ?? ""} ${f(H) ?? ""} ${f(S) ?? ""} ${f(N) ?? ""}`), Ie = ft(qe, "", Ie, {
              "--xy-minimap-mask-background-color-props": O(),
              "--xy-minimap-mask-stroke-color-props": V(),
              "--xy-minimap-mask-stroke-width-props": P() ? P() * f(C) : void 0
            }), $e(Ur, "d", `M${f(k) - f(w)},${f(H) - f(w)}h${f(S) + f(w) * 2}v${f(N) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(g).x ?? ""},${f(g).y ?? ""}h${f(g).width ?? ""}v${f(g).height ?? ""}h${-f(g).width}z`);
          }), T(ot, qe);
        };
        ye(hn, (ot) => {
          c() && ot(Le);
        });
      }
      T(de, tn);
    },
    $$slots: { default: !0 }
  });
  var Ye = pe({
    get position() {
      return z();
    },
    set position(de) {
      z(de), m();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(de) {
      D(de), m();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(de) {
      I(de), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(de) {
      L(de), m();
    },
    get nodeClass() {
      return Z();
    },
    set nodeClass(de) {
      Z(de), m();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(de) {
      E(de), m();
    },
    get nodeStrokeWidth() {
      return $();
    },
    set nodeStrokeWidth(de) {
      $(de), m();
    },
    get bgColor() {
      return M();
    },
    set bgColor(de) {
      M(de), m();
    },
    get maskColor() {
      return O();
    },
    set maskColor(de) {
      O(de), m();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(de) {
      V(de), m();
    },
    get maskStrokeWidth() {
      return P();
    },
    set maskStrokeWidth(de) {
      P(de), m();
    },
    get width() {
      return A();
    },
    set width(de) {
      A(de), m();
    },
    get height() {
      return X();
    },
    set height(de) {
      X(de), m();
    },
    get pannable() {
      return K();
    },
    set pannable(de) {
      K(de), m();
    },
    get zoomable() {
      return G();
    },
    set zoomable(de) {
      G(de), m();
    },
    get inversePan() {
      return J();
    },
    set inversePan(de) {
      J(de), m();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(de) {
      W(de), m();
    },
    get style() {
      return ve();
    },
    set style(de) {
      ve(de), m();
    },
    get class() {
      return fe();
    },
    set class(de) {
      fe(de), m();
    }
  });
  return r(), Ye;
}
ue(
  pd,
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
const Al = (e) => Oh(e);
function Tt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: g, domNode: v, nodeLookup: h, nodeOrigin: b, edgeLookup: x, connectionLookup: C } = Fe(), p = (k) => {
    var H, S;
    const N = F(h), z = Al(k) ? k : N.get(k.id), D = z.parentId ? Zh(z.position, z.measured, z.parentId, N, F(b)) : z.position, I = {
      ...z,
      position: D,
      width: ((H = z.measured) == null ? void 0 : H.width) ?? z.width,
      height: ((S = z.measured) == null ? void 0 : S.height) ?? z.height
    };
    return Ir(I);
  }, _ = (k, H, S = { replace: !1 }) => {
    var N;
    const z = (N = F(h).get(k)) == null ? void 0 : N.internals.userNode;
    if (!z)
      return;
    const D = typeof H == "function" ? H(z) : H;
    S.replace ? d.update((I) => I.map((L) => L.id === k ? Al(D) ? D : { ...L, ...D } : L)) : (Object.assign(z, D), d.update((I) => I));
  }, w = (k) => F(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var H;
      return (H = w(k)) == null ? void 0 : H.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(d) : Il(F(h), k),
    getEdge: (k) => F(x).get(k),
    getEdges: (k) => k === void 0 ? F(g) : Il(F(x), k),
    setZoom: (k, H) => {
      const S = F(c);
      return S ? S.scaleTo(k, { duration: H == null ? void 0 : H.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, H) => {
      const S = F(i), N = F(c);
      return N ? (await N.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, H, S) => {
      const N = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : F(u), z = F(c);
      return z ? (await z.setViewport({
        x: F(a) / 2 - k * N,
        y: F(s) / 2 - H * N,
        zoom: N
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, H) => {
      const S = F(c);
      if (!S)
        return Promise.resolve(!1);
      const N = ws(k, F(a), F(s), F(l), F(u), (H == null ? void 0 : H.padding) ?? 0.1);
      return await S.setViewport(N, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, H = !0, S) => {
      const N = bl(k), z = N ? k : p(k);
      return z ? (S || F(d)).filter((D) => {
        const I = F(h).get(D.id);
        if (!I || !N && D.id === k.id)
          return !1;
        const L = Ir(I), Z = Co(L, z);
        return H && Z > 0 || Z >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (k, H, S = !0) => {
      const N = bl(k) ? k : p(k);
      if (!N)
        return !1;
      const z = Co(N, H);
      return S && z > 0 || z >= N.width * N.height;
    },
    deleteElements: async ({ nodes: k = [], edges: H = [] }) => {
      const { nodes: S, edges: N } = await dc({
        nodesToRemove: k,
        edgesToRemove: H,
        nodes: F(d),
        edges: F(g),
        onBeforeDelete: F(r)
      });
      return S && d.update((z) => z.filter((D) => !S.some(({ id: I }) => I === D.id))), N && g.update((z) => z.filter((D) => !N.some(({ id: I }) => I === D.id))), {
        deletedNodes: S,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (k, H = { snapToGrid: !0 }) => {
      const S = F(v);
      if (!S)
        return k;
      const N = H.snapToGrid ? F(o) : !1, { x: z, y: D, zoom: I } = F(i), { x: L, y: Z } = S.getBoundingClientRect(), E = {
        x: k.x - L,
        y: k.y - Z
      };
      return zo(E, [z, D, I], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const H = F(v);
      if (!H)
        return k;
      const { x: S, y: N, zoom: z } = F(i), { x: D, y: I } = H.getBoundingClientRect(), L = Ci(k, [S, N, z]);
      return {
        x: L.x + D,
        y: L.y + I
      };
    },
    toObject: () => ({
      nodes: F(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: F(g).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: _,
    updateNodeData: (k, H, S) => {
      var N;
      const z = (N = F(h).get(k)) == null ? void 0 : N.internals.userNode;
      if (!z)
        return;
      const D = typeof H == "function" ? H(z) : H;
      z.data = S != null && S.replace ? D : { ...z.data, ...D }, d.update((I) => I);
    },
    getNodesBounds: (k) => {
      const H = F(h), S = F(b);
      return zh(k, { nodeLookup: H, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: H, nodeId: S }) => {
      var N;
      return Array.from(((N = F(C).get(`${S}-${k}-${H ?? null}`)) == null ? void 0 : N.values()) ?? []);
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
var I2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ne(_, "$nodes", n), i = () => ne(p, "$nodeLookup", n), a = () => ne(C, "$viewport", n), s = () => ne(x, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "nodeId", 12, void 0), g = y(t, "position", 12, void 0), v = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: C, nodeLookup: p, nodes: _ } = Fe(), { getNodesBounds: w } = Tt(), k = ur("svelteflow__node_id");
  let H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie([]), N = h() !== void 0 ? h() : 10, z = g() !== void 0 ? g() : Pe.Top, D = v() !== void 0 ? v() : "center";
  he(
    () => (o(), te(d()), i()),
    () => {
      o();
      const $ = Array.isArray(d()) ? d() : [d() || k];
      Q(S, $.reduce(
        (M, O) => {
          const V = i().get(O);
          return V && M.push(V), M;
        },
        []
      ));
    }
  ), he(
    () => (f(S), a()),
    () => {
      const $ = w(f(S));
      $ && Q(H, r0($, a(), z, N, D));
    }
  ), he(() => f(S), () => {
    Q(l, f(S).length === 0 ? 1 : Math.max(...f(S).map(($) => ($.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    Q(u, o().filter(($) => $.selected).length);
  }), he(
    () => (te(b()), f(S), f(u)),
    () => {
      Q(c, typeof b() == "boolean" ? b() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), yt(), Ae();
  var I = Je(), L = be(I);
  {
    var Z = ($) => {
      var M = I2();
      let O;
      var V = B(M);
      xt(V, t, "default", {}), q(M), bt(M, (P, A) => Ei == null ? void 0 : Ei(P, A), () => ({ domNode: s() })), Ce(
        (P) => {
          $e(M, "data-id", P), O = ft(M, "", O, {
            position: "absolute",
            transform: f(H),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((P, A) => `${P}${A.id} `, "").trim()
        ],
        xe
      ), T($, M);
    };
    ye(L, ($) => {
      s() && f(c) && f(S) && $(Z);
    });
  }
  T(e, I);
  var E = pe({
    get nodeId() {
      return d();
    },
    set nodeId($) {
      d($), m();
    },
    get position() {
      return g();
    },
    set position($) {
      g($), m();
    },
    get align() {
      return v();
    },
    set align($) {
      v($), m();
    },
    get offset() {
      return h();
    },
    set offset($) {
      h($), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible($) {
      b($), m();
    }
  });
  return r(), E;
}
ue(
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
function mr(e) {
  const { nodes: t, nodeLookup: n } = Fe();
  let r = [], o = !0;
  return Wn([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const g = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      g && l.push({
        id: g.id,
        type: g.type,
        data: g.data
      });
    }
    (!d0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Rl = "tinyflow-component";
class R2 {
  constructor(t) {
    if (Ot(this, "options"), Ot(this, "rootEl"), Ot(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Rl);
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
    const n = document.createElement(Rl);
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
  const e = _e([]), t = _e([]), n = _e({ x: 250, y: 100, zoom: 1 });
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
var q2 = /* @__PURE__ */ re("<button><!></button>");
function Ke(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = q2();
  let i;
  var a = B(o);
  return cr(a, () => n() ?? pt), q(o), Ce(() => i = Xt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), T(e, o), pe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ue(Ke, { children: {} }, [], [], !0);
var B2 = /* @__PURE__ */ re("<input>");
function md(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = B2();
  Kn(r);
  let o;
  Ce(() => o = Xt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), T(e, r), pe();
}
ue(md, {}, [], [], !0);
var X2 = /* @__PURE__ */ re('<div><input type="hidden"> <!> <!></div>');
const Y2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function yd(e, t) {
  ge(t, !0), Ue(e, Y2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), a = y(t, "onChosen", 7), s = /* @__PURE__ */ wt(t, [
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
  var l = X2();
  let u;
  var c = B(l);
  Kn(c);
  var d = R(c, 2);
  vt(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var g = R(d, 2);
  return Ke(g, {
    onclick: (v) => {
      var h;
      (h = a()) == null || h(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, h) => {
      ze();
      var b = Re();
      Ce(() => ct(b, i())), T(v, b);
    },
    $$slots: { default: !0 }
  }), q(l), Ce(() => {
    u = Xt(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), Uo(c, o());
  }), T(e, l), pe({
    get placeholder() {
      return n();
    },
    set placeholder(v) {
      n(v), m();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), m();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), m();
    },
    get onChosen() {
      return a();
    },
    set onChosen(v) {
      a(v), m();
    }
  });
}
ue(
  yd,
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
var K2 = /* @__PURE__ */ re("<input>");
function vt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = K2();
  Kn(r);
  let o;
  Ce(() => o = Xt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), T(e, r), pe();
}
ue(vt, {}, [], [], !0);
var W2 = /* @__PURE__ */ re("<textarea></textarea>");
function mt(e, t) {
  ge(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = W2();
  Sf(o);
  let i;
  return Ce(() => i = Xt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), T(e, o), pe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ue(mt, { value: {} }, [], [], !0);
var j2 = /* @__PURE__ */ re('<div role="button"><!></div>'), F2 = /* @__PURE__ */ re("<div></div>");
function wd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var g;
    a(d), (g = i()) == null || g(c, d);
  }
  Ae();
  var l = F2();
  let u;
  return Mt(l, 5, o, zr, (c, d, g) => {
    var v = j2();
    $e(v, "tabindex", g), v.__click = () => s(f(d), g), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(f(d), g));
    };
    var h = B(v);
    {
      var b = (C) => {
        var p = Re();
        Ce(() => ct(p, f(d).label)), T(C, p);
      }, x = (C) => {
        var p = Je(), _ = be(p);
        cr(_, () => f(d).label ?? pt), T(C, p);
      };
      ye(h, (C) => {
        typeof f(d).label == "string" ? C(b) : C(x, !1);
      });
    }
    q(v), Ce(() => $t(v, 1, `tf-tabs-item ${g === a() ? "active" : ""}`)), T(c, v);
  }), q(l), Ce(() => u = Xt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), T(e, l), pe({
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
ue(wd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var G2 = (e, t, n) => t(f(n)), U2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, J2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), Q2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), em = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), tm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), nm = /* @__PURE__ */ re("<div></div>");
const rm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function bd(e, t) {
  ge(t, !0), Ue(e, rm);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => an([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = nm();
  return Mt(a, 21, n, zr, (s, l, u) => {
    var c = tm(), d = B(c);
    $e(d, "tabindex", u), d.__click = [G2, i, l], d.__keydown = [U2, i, l];
    var g = B(d);
    {
      var v = (w) => {
        var k = J2(), H = B(k);
        Xn(H, {
          get target() {
            return f(l).icon;
          }
        }), q(k), T(w, k);
      };
      ye(g, (w) => {
        f(l).icon && w(v);
      });
    }
    var h = R(g, 2);
    Xn(h, {
      get target() {
        return f(l).title;
      }
    });
    var b = R(h, 2);
    q(d);
    var x = R(d, 2);
    {
      var C = (w) => {
        var k = Q2(), H = B(k);
        Xn(H, {
          get target() {
            return f(l).description;
          }
        }), q(k), T(w, k);
      };
      ye(x, (w) => {
        f(l).description && w(C);
      });
    }
    var p = R(x, 2);
    {
      var _ = (w) => {
        var k = em(), H = B(k);
        Xn(H, {
          get target() {
            return f(l).content;
          }
        }), q(k), T(w, k);
      };
      ye(p, (w) => {
        o().includes(f(l).key) && w(_);
      });
    }
    q(c), Ce((w) => $t(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), T(s, c);
  }), q(a), Ce(() => {
    ft(a, t.style), $t(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), T(e, a), pe({
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
ue(bd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  ge(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = be(r);
  {
    var i = (s) => {
      var l = Je(), u = be(l);
      cr(u, () => n() ?? pt), T(s, l);
    }, a = (s) => {
      var l = Je(), u = be(l);
      ls(u, n), T(s, l);
    };
    ye(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return T(e, r), pe({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ue(Xn, { target: {} }, [], [], !0);
var om = (e, t, n) => t(f(n)), im = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), am = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), sm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), lm = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), um = /* @__PURE__ */ re("<!> <!>", 1), cm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), dm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), fm = /* @__PURE__ */ re("<div><!></div>");
function Jt(e, t) {
  ge(t, !0);
  const n = (p, _ = pt) => {
    var w = Je(), k = be(w);
    Mt(k, 19, _, (H, S) => `${S}_${H.value}`, (H, S) => {
      var N = sm(), z = be(N);
      z.__click = [om, h, S];
      var D = B(z), I = B(D);
      {
        var L = (M) => {
          var O = im();
          T(M, O);
        };
        ye(I, (M) => {
          f(S).children && f(S).children.length > 0 && M(L);
        });
      }
      q(D);
      var Z = R(D, 2);
      Xn(Z, {
        get target() {
          return f(S).label;
        }
      }), q(z);
      var E = R(z, 2);
      {
        var $ = (M) => {
          var O = am(), V = B(O);
          n(V, () => f(S).children), q(O), T(M, O);
        };
        ye(E, (M) => {
          f(S).children && f(S).children.length > 0 && (s() || u().includes(f(S).value)) && M($);
        });
      }
      T(H, N);
    }), T(p, w);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), s = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), c = y(t, "placeholder", 7), d = /* @__PURE__ */ wt(t, [
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
  ]), g = /* @__PURE__ */ Ve(() => {
    const p = [], _ = (w) => {
      for (let k of w)
        i().length > 0 ? i().includes(k.value) && p.push(k) : a().includes(k.value) && p.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), p;
  }), v;
  function h(p) {
    var _;
    v == null || v.hide(), (_ = o()) == null || _(p);
  }
  var b = fm();
  let x;
  var C = B(b);
  return _n(
    Gr(C, {
      floating: (p) => {
        var _ = lm(), w = B(_);
        n(w, r), q(_), T(p, _);
      },
      children: (p, _) => {
        var w = dm();
        let k;
        var H = B(w);
        Mt(
          H,
          23,
          () => f(g),
          (S, N) => `${N}_${S.value}`,
          (S, N, z) => {
            var D = Je(), I = be(D);
            {
              var L = (E) => {
                var $ = Je(), M = be($);
                {
                  var O = (V) => {
                    Xn(V, {
                      get target() {
                        return f(N).label;
                      }
                    });
                  };
                  ye(M, (V) => {
                    f(z) === 0 && V(O);
                  });
                }
                T(E, $);
              }, Z = (E) => {
                var $ = um(), M = be($);
                Xn(M, {
                  get target() {
                    return f(N).label;
                  }
                });
                var O = R(M, 2);
                {
                  var V = (P) => {
                    var A = Re(",");
                    T(P, A);
                  };
                  ye(O, (P) => {
                    f(z) < f(g).length - 1 && P(V);
                  });
                }
                T(E, $);
              };
              ye(I, (E) => {
                l() ? E(Z, !1) : E(L);
              });
            }
            T(S, D);
          },
          (S) => {
            var N = cm(), z = B(N, !0);
            q(N), Ce(() => ct(z, c())), T(S, N);
          }
        ), q(H), ze(2), q(w), Ce(() => k = Xt(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), T(p, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), q(b), Ce(() => x = Xt(b, x, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), T(e, b), pe({
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
  Jt,
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
const ko = Math.min, Mr = Math.max, Hi = Math.round, wn = (e) => ({
  x: e,
  y: e
}), vm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gm = {
  start: "end",
  end: "start"
};
function Za(e, t, n) {
  return Mr(e, ko(t, n));
}
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function xd(e) {
  return e === "x" ? "y" : "x";
}
function _s(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function ks(e) {
  return xd(lr(e));
}
function pm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ks(e), i = _s(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Pi(a)), [a, Pi(a)];
}
function hm(e) {
  const t = Pi(e);
  return [qa(e), t, qa(t)];
}
function qa(e) {
  return e.replace(/start|end/g, (t) => gm[t]);
}
function mm(e, t, n) {
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
function ym(e, t, n, r) {
  const o = Ao(e);
  let i = mm(gr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(qa)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vm[t]);
}
function wm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $d(e) {
  return typeof e != "number" ? wm(e) : {
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
  const i = lr(t), a = ks(t), s = _s(a), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
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
  switch (Ao(t)) {
    case "start":
      v[a] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += g * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const bm = async (e, t, n) => {
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
  } = Zl(u, r, l), g = r, v = {}, h = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: C
    } = s[b], {
      x: p,
      y: _,
      data: w,
      reset: k
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = p ?? c, d = _ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Zl(u, g, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: v
  };
};
async function Cd(e, t) {
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
    altBoundary: g = !1,
    padding: v = 0
  } = Do(t, e), h = $d(v), b = s[g ? d === "floating" ? "reference" : "floating" : d], x = Ni(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(p)) ? await (i.getScale == null ? void 0 : i.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: p,
    strategy: l
  }) : C);
  return {
    top: (x.top - w.top + h.top) / _.y,
    bottom: (w.bottom - x.bottom + h.bottom) / _.y,
    left: (x.left - w.left + h.left) / _.x,
    right: (w.right - x.right + h.right) / _.x
  };
}
const xm = (e) => ({
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
    const d = $d(c), g = {
      x: n,
      y: r
    }, v = ks(o), h = _s(v), b = await a.getDimensions(u), x = v === "y", C = x ? "top" : "left", p = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[v] - g[v] - i.floating[h], k = g[v] - i.reference[v], H = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = H ? H[_] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(H))) && (S = s.floating[_] || i.floating[h]);
    const N = w / 2 - k / 2, z = S / 2 - b[h] / 2 - 1, D = ko(d[C], z), I = ko(d[p], z), L = D, Z = S - b[h] - I, E = S / 2 - b[h] / 2 + N, $ = Za(L, E, Z), M = !l.arrow && Ao(o) != null && E !== $ && i.reference[h] / 2 - (E < L ? D : I) - b[h] / 2 < 0, O = M ? E < L ? E - L : E - Z : 0;
    return {
      [v]: g[v] + O,
      data: {
        [v]: $,
        centerOffset: E - $ - O,
        ...M && {
          alignmentOffset: O
        }
      },
      reset: M
    };
  }
}), $m = function(e) {
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
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...x
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = gr(o), p = lr(s), _ = gr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = g || (_ || !b ? [Pi(s)] : hm(s)), H = h !== "none";
      !g && H && k.push(...ym(s, b, h, w));
      const S = [s, ...k], N = await Cd(t, x), z = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(N[C]), d) {
        const $ = pm(o, a, w);
        z.push(N[$[0]], N[$[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: z
      }], !z.every(($) => $ <= 0)) {
        var I, L;
        const $ = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = S[$];
        if (M) {
          var Z;
          const V = d === "alignment" ? p !== lr(M) : !1, P = ((Z = D[0]) == null ? void 0 : Z.overflows[0]) > 0;
          if (!V || P)
            return {
              data: {
                index: $,
                overflows: D
              },
              reset: {
                placement: M
              }
            };
        }
        let O = (L = D.filter((V) => V.overflows[0] <= 0).sort((V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!O)
          switch (v) {
            case "bestFit": {
              var E;
              const V = (E = D.filter((P) => {
                if (H) {
                  const A = lr(P.placement);
                  return A === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((A) => A > 0).reduce((A, X) => A + X, 0)]).sort((P, A) => P[1] - A[1])[0]) == null ? void 0 : E[0];
              V && (O = V);
              break;
            }
            case "initialPlacement":
              O = s;
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
};
async function Cm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = gr(n), s = Ao(n), l = lr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Do(t, e);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof h == "number" && (v = s === "end" ? h * -1 : h), l ? {
    x: v * c,
    y: g * u
  } : {
    x: g * u,
    y: v * c
  };
}
const _m = function(e) {
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
      } = t, l = await Cm(t, e);
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
}, km = function(e) {
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
              x: C,
              y: p
            } = x;
            return {
              x: C,
              y: p
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await Cd(t, l), d = lr(gr(o)), g = xd(d);
      let v = u[g], h = u[d];
      if (i) {
        const x = g === "y" ? "top" : "left", C = g === "y" ? "bottom" : "right", p = v + c[x], _ = v - c[C];
        v = Za(p, v, _);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", p = h + c[x], _ = h - c[C];
        h = Za(p, h, _);
      }
      const b = s.fn({
        ...t,
        [g]: v,
        [d]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: i,
            [d]: a
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
  return _d(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (_d(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _d(e) {
  return Qi() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function dn(e) {
  return Qi() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function kn(e) {
  return Qi() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function ql(e) {
  return !Qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function Io(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Sm(e) {
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
  const t = Es(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Em(e) {
  let t = Qn(e);
  for (; kn(t) && !Zr(t); ) {
    if (Ss(t))
      return t;
    if (ea(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Es() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(Fr(e));
}
function fn(e) {
  return Bt(e).getComputedStyle(e);
}
function ta(e) {
  return dn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ql(e) && e.host || // Fallback.
    An(e)
  );
  return ql(t) ? t.host : t;
}
function kd(e) {
  const t = Qn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Io(t) ? t : kd(t);
}
function Sd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(o);
  return i ? (Ba(a), t.concat(a, a.visualViewport || [], Io(o) ? o : [], [])) : t.concat(o, Sd(o, []));
}
function Ba(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ed(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Hi(n) !== i || Hi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Md(e) {
  return dn(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = Md(e);
  if (!kn(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ed(t);
  let a = (i ? Hi(n.width) : n.width) / r, s = (i ? Hi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Mm = /* @__PURE__ */ wn(0);
function Vd(e) {
  const t = Bt(e);
  return !Es() || !t.visualViewport ? Mm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Vm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function So(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Md(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Vr(r)) : a = Vr(e));
  const s = Vm(i, n, r) ? Vd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const g = Bt(i), v = r && dn(r) ? Bt(r) : r;
    let h = g, b = Ba(h);
    for (; b && r && v !== h; ) {
      const x = Vr(b), C = b.getBoundingClientRect(), p = fn(b), _ = C.left + (b.clientLeft + parseFloat(p.paddingLeft)) * x.x, w = C.top + (b.clientTop + parseFloat(p.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += w, h = Bt(b), b = Ba(h);
    }
  }
  return Ni({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ms(e, t) {
  const n = ta(e).scrollLeft;
  return t ? t.left + n : So(An(e)).left + n;
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
  const i = o === "fixed", a = An(r), s = t ? ea(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((Fr(r) !== "body" || Io(a)) && (l = ta(r)), kn(r))) {
    const v = So(r);
    u = Vr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const g = a && !d && !i ? Hd(a, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + g.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + g.y
  };
}
function Pm(e) {
  return Array.from(e.getClientRects());
}
function Nm(e) {
  const t = An(e), n = ta(e), r = e.ownerDocument.body, o = Mr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Mr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ms(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Mr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Om(e, t) {
  const n = Bt(e), r = An(e), o = n.visualViewport;
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
function zm(e, t) {
  const n = So(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Vr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Om(e, n);
  else if (t === "document")
    r = Nm(An(e));
  else if (dn(t))
    r = zm(t, n);
  else {
    const o = Vd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ni(r);
}
function Pd(e, t) {
  const n = Qn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Pd(n, t);
}
function Lm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Sd(e, []).filter((s) => dn(s) && Fr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Qn(e) : e;
  for (; dn(a) && !Zr(a); ) {
    const s = fn(a), l = Ss(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Qn(a);
  }
  return t.set(e, r), r;
}
function Tm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ea(t) ? [] : Lm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Bl(t, u, o);
    return l.top = Mr(c.top, l.top), l.right = ko(c.right, l.right), l.bottom = ko(c.bottom, l.bottom), l.left = Mr(c.left, l.left), l;
  }, Bl(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Dm(e) {
  const {
    width: t,
    height: n
  } = Ed(e);
  return {
    width: t,
    height: n
  };
}
function Am(e, t, n) {
  const r = kn(t), o = An(t), i = n === "fixed", a = So(e, !0, i, t);
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
      const v = So(t, !0, i, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Hd(o, s) : wn(0), d = a.left + s.scrollLeft - l.x - c.x, g = a.top + s.scrollTop - l.y - c.y;
  return {
    x: d,
    y: g,
    width: a.width,
    height: a.height
  };
}
function ma(e) {
  return fn(e).position === "static";
}
function Xl(e, t) {
  if (!kn(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Nd(e, t) {
  const n = Bt(e);
  if (ea(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !Zr(o); ) {
      if (dn(o) && !ma(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && Sm(r) && ma(r); )
    r = Xl(r, t);
  return r && Zr(r) && ma(r) && !Ss(r) ? n : r || Em(e) || n;
}
const Im = async function(e) {
  const t = this.getOffsetParent || Nd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Am(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Rm(e) {
  return fn(e).direction === "rtl";
}
const Zm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hm,
  getDocumentElement: An,
  getClippingRect: Tm,
  getOffsetParent: Nd,
  getElementRects: Im,
  getClientRects: Pm,
  getDimensions: Dm,
  getScale: Vr,
  isElement: dn,
  isRTL: Rm
}, qm = _m, Bm = km, Xm = $m, Ym = xm, Km = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return bm(e, t, {
    ...o,
    platform: i
  });
}, Wm = ({
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
    Km(e, u, {
      placement: r,
      middleware: [
        qm(o),
        // 手动偏移配置
        Xm(i),
        //自动翻转
        Bm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Ym({ element: c })] : []
      ]
    }).then(({ x: C, y: p, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${p}px`
      }), l) {
        const { x: k, y: H } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: H != null ? `${H}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let g = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), g = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), g = !1;
  }
  function b(C) {
    C.stopPropagation(), g ? h() : v();
  }
  function x(C) {
    u.contains(C.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      h();
    },
    isVisible() {
      return g;
    }
  };
};
var jm = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Gr(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  Qt(() => (s = Wm({
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
  var u = jm(), c = B(u), d = B(c);
  cr(d, n), q(c), _n(c, (h) => i = h, () => i);
  var g = R(c, 2), v = B(g);
  return cr(v, r), q(g), _n(g, (h) => a = h, () => a), q(u), T(e, u), pe({
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
function Ge(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Je(), s = be(a);
  return Lf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ce(() => c = Xt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Je(), g = be(d);
    cr(g, () => n() ?? pt), T(u, d);
  }), T(e, a), pe({
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
ue(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Fm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Gm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function na(e, t) {
  ge(t, !0), Ue(e, Gm);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ke(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Fm();
      T(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
ue(na, {}, [], [], !0);
const Um = () => {
  const e = Fe();
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
}, Jm = () => {
  const { nodes: e, nodeLookup: t } = Fe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
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
}, er = () => ur("tinyflow_options");
function ht() {
  return ur("svelteflow__node_id");
}
var Qm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ny = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), ry = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, oy = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), iy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ay = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), sy = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ly = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function pn(e, t) {
  ge(t, !0), Ue(e, ly);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), g = y(t, "showSourceHandle", 7, !0), v = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: C } = Tt(), p = /* @__PURE__ */ Ve(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: _ } = Um(), { copyNode: w } = Jm(), k = er(), H = () => {
    var P;
    (P = k.onNodeExecute) == null || P.call(k, C(r()));
  };
  let S = ht();
  var N = sy(), z = be(N);
  {
    var D = (P) => {
      hd(P, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (A, X) => {
          var K = ay(), G = B(K);
          {
            var J = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (He, ae) => {
                  var U = Qm();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(G, (we) => {
              u() && we(J);
            });
          }
          var W = R(G, 2);
          {
            var ve = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (He, ae) => {
                  var U = ey();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(W, (we) => {
              l() && we(ve);
            });
          }
          var fe = R(W, 2);
          {
            var me = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: H,
                children: (He, ae) => {
                  var U = ty();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(fe, (we) => {
              s() && we(me);
            });
          }
          var se = R(fe, 2);
          {
            var Se = (we) => {
              Gr(we, {
                placement: "bottom",
                floating: (He) => {
                  var ae = oy(), U = B(ae), Me = R(B(U));
                  vt(Me, {
                    style: "width: 100%;",
                    onchange: (oe) => {
                      const Ee = oe.target.value;
                      x(S, { title: Ee });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(U);
                  var j = R(U, 2), Ne = R(B(j));
                  mt(Ne, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (oe) => {
                      const Ee = oe.target.value;
                      x(S, { description: Ee });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(j);
                  var De = R(j, 2);
                  {
                    var Te = (oe) => {
                      var Ee = ny(), et = R(B(Ee));
                      mt(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (tt) => {
                          const ee = tt.target.value;
                          x(S, { condition: ee });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(Ee), T(oe, Ee);
                    };
                    ye(De, (oe) => {
                      d() && oe(Te);
                    });
                  }
                  var le = R(De, 2), ce = R(B(le), 2);
                  Kn(ce), ce.__change = [ry, x, S], q(le), q(ae), Ce(() => If(ce, !!n().async)), T(He, ae);
                },
                children: (He, ae) => {
                  Ke(He, {
                    class: "tf-node-toolbar-item",
                    children: (U, Me) => {
                      var j = iy();
                      T(U, j);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ye(se, (we) => {
              c() && we(Se);
            });
          }
          q(K), T(A, K);
        },
        $$slots: { default: !0 }
      });
    };
    ye(z, (P) => {
      (s() || l() || u()) && P(D);
    });
  }
  var I = R(z, 2), L = R(B(I), 2), Z = B(L);
  bd(Z, {
    get items() {
      return f(p);
    },
    activeKeys: b,
    onChange: (P, A) => {
      var X;
      x(r(), { expand: A == null ? void 0 : A.includes("key") }), (X = h()) == null || X(A != null && A.includes("key") ? "key" : "");
    }
  }), q(L), q(I);
  var E = R(I, 2);
  {
    var $ = (P) => {
      Jn(P, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(E, (P) => {
      v() && P($);
    });
  }
  var M = R(E, 2);
  {
    var O = (P) => {
      Jn(P, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(M, (P) => {
      g() && P(O);
    });
  }
  var V = R(M, 2);
  return cr(V, () => i() ?? pt), T(e, N), pe({
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
      return d();
    },
    set allowSettingOfCondition(P = !0) {
      d(P), m();
    },
    get showSourceHandle() {
      return g();
    },
    set showSourceHandle(P = !0) {
      g(P), m();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(P = !0) {
      v(P), m();
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
  pn,
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
const Od = [
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
], uy = [
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
var cy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), dy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), fy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const vy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function zd(e, t) {
  ge(t, !0), Ue(e, vy);
  const [n, r] = rt(), o = () => ne(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var z, D;
    return {
      ...i(),
      ...(D = (z = o()) == null ? void 0 : z.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: c } = Tt(), d = (z, D) => {
    c(s, (I) => {
      let L = I.data.parameters;
      return L[a()][z] = D, { parameters: L };
    });
  }, g = (z) => {
    const D = z.target.value;
    d("name", D);
  }, v = (z) => {
    const D = z.target.checked;
    d("required", D);
  }, h = (z) => {
    const D = z.value;
    D && d("dataType", D);
  };
  let b;
  const x = () => {
    c(s, (z) => {
      let D = z.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), b == null || b.hide();
  };
  var C = fy(), p = be(C), _ = B(p);
  vt(_, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: g
  }), q(p);
  var w = R(p, 2), k = B(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: v
  }), q(w);
  var H = R(w, 2), S = B(H);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (z) => {
        var D = cy(), I = B(D), L = R(B(I));
        const Z = /* @__PURE__ */ Ve(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Jt(L, {
          items: Od,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(Z);
          }
        }), q(I);
        var E = R(I, 2), $ = R(B(E));
        mt($, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const X = A.target.value;
            d("defaultValue", X);
          }
        }), q(E);
        var M = R(E, 2), O = R(B(M));
        mt(O, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const X = A.target.value;
            d("description", X);
          }
        }), q(M);
        var V = R(M, 2), P = B(V);
        Ke(P, {
          onclick: x,
          children: (A, X) => {
            ze();
            var K = Re("删除");
            T(A, K);
          },
          $$slots: { default: !0 }
        }), q(V), q(D), T(z, D);
      },
      children: (z, D) => {
        Ke(z, {
          class: "input-btn-more",
          children: (I, L) => {
            var Z = dy();
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => b = z,
    () => b
  ), q(H), T(e, C);
  var N = pe({
    get parameter() {
      return i();
    },
    set parameter(z) {
      i(z), m();
    },
    get index() {
      return a();
    },
    set index(z) {
      a(z), m();
    }
  });
  return r(), N;
}
ue(zd, { parameter: {}, index: {} }, [], [], !0);
var gy = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), py = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), hy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const my = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ld(e, t) {
  ge(t, !0), Ue(e, my);
  const [n, r] = rt(), o = () => ne(f(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Ve(() => mr(i)), s = /* @__PURE__ */ Ve(() => {
    var g, v;
    return [...((v = (g = o()) == null ? void 0 : g.data) == null ? void 0 : v.parameters) || []];
  });
  var l = hy(), u = B(l);
  {
    var c = (g) => {
      var v = gy();
      ze(4), T(g, v);
    };
    ye(u, (g) => {
      f(s).length !== 0 && g(c);
    });
  }
  var d = R(u, 2);
  Mt(
    d,
    19,
    () => f(s),
    (g) => g.id,
    (g, v, h) => {
      zd(g, {
        get parameter() {
          return f(v);
        },
        get index() {
          return f(h);
        }
      });
    },
    (g) => {
      var v = py();
      T(g, v);
    }
  ), q(l), T(e, l), pe(), r();
}
ue(Ld, {}, [], [], !0);
const Oi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = qr()), Oi(t.children);
}), e), Mn = () => {
  const { updateNodeData: e } = Tt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Oi(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
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
var yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), wy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const xy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Td(e, t) {
  ge(t, !0), Ue(e, xy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn();
  return pn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = yy();
      T(a, s);
    },
    children: (a, s) => {
      var l = by(), u = be(l), c = B(u);
      Ge(c, {
        level: 3,
        children: (v, h) => {
          ze();
          var b = Re("输入参数");
          T(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = R(c, 2);
      Ke(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (v, h) => {
          var b = wy();
          T(v, b);
        },
        $$slots: { default: !0 }
      }), q(u);
      var g = R(u, 2);
      Ld(g, {}), T(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Td, { data: {} }, [], [], !0);
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
}, $y = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o } = Fe();
  return Wn([n, r, o], ([i, a, s]) => {
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
var Cy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), _y = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ky = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ge(t, !0), Ue(e, ky);
  const [n, r] = rt(), o = () => ne(f(c), "$node", n), i = () => ne(_, "$selectItems", n);
  Qt(() => {
    f(d).refType || x({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Ve(() => mr(u)), d = /* @__PURE__ */ Ve(() => {
    var $;
    return {
      ...a(),
      ...($ = o()) == null ? void 0 : $.data[l()][s()]
    };
  });
  const { updateNodeData: g } = Tt(), v = ($, M) => {
    g(u, (O) => {
      let V = O.data[l()];
      return V[s()] = { ...V[s()], [$]: M }, { [l()]: V };
    });
  }, h = ($, M) => {
    const O = M.target.value;
    v($, O);
  }, b = ($) => {
    const M = $.value;
    v("ref", M);
  }, x = ($) => {
    const M = $.value;
    v("refType", M);
  };
  let C;
  const p = () => {
    g(u, ($) => {
      let M = $.data[l()];
      return M.splice(s(), 1), { [l()]: [...M] };
    }), C == null || C.hide();
  }, _ = $y();
  var w = _y(), k = be(w), H = B(k);
  const S = /* @__PURE__ */ Ve(() => f(d).nameDisabled === !0);
  vt(H, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(S);
    },
    oninput: ($) => h("name", $)
  }), q(k);
  var N = R(k, 2), z = B(N);
  {
    var D = ($) => {
      vt($, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => h("value", M)
      });
    }, I = ($, M) => {
      {
        var O = (V) => {
          const P = /* @__PURE__ */ Ve(() => [f(d).ref]);
          Jt(V, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(P);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        ye(
          $,
          (V) => {
            f(d).refType !== "input" && V(O);
          },
          M
        );
      }
    };
    ye(z, ($) => {
      f(d).refType === "fixed" ? $(D) : $(I, !1);
    });
  }
  q(N);
  var L = R(N, 2), Z = B(L);
  _n(
    Gr(Z, {
      placement: "bottom",
      floating: ($) => {
        var M = Cy(), O = B(M), V = R(B(O));
        const P = /* @__PURE__ */ Ve(() => f(d).refType ? [f(d).refType] : []);
        Jt(V, {
          items: uy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(P);
          },
          onSelect: x
        }), q(O);
        var A = R(O, 2), X = R(B(A));
        mt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ve) => {
            h("defaultValue", ve);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), q(A);
        var K = R(A, 2), G = R(B(K));
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ve) => {
            h("description", ve);
          },
          get value() {
            return f(d).description;
          }
        }), q(K);
        var J = R(K, 2), W = B(J);
        Ke(W, {
          onclick: p,
          children: (ve, fe) => {
            ze();
            var me = Re("删除");
            T(ve, me);
          },
          $$slots: { default: !0 }
        }), q(J), q(M), T($, M);
      },
      children: ($, M) => {
        na($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => C = $,
    () => C
  ), q(L), T(e, w);
  var E = pe({
    get parameter() {
      return a();
    },
    set parameter($) {
      a($), m();
    },
    get index() {
      return s();
    },
    set index($) {
      s($), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName($) {
      l($), m();
    }
  });
  return r(), E;
}
ue(Ad, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ey = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), My = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  ge(t, !0), Ue(e, Vy);
  const [n, r] = rt(), o = () => ne(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = ht(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = My(), d = B(c);
  {
    var g = (b) => {
      var x = Sy();
      ze(4), T(b, x);
    };
    ye(d, (b) => {
      f(u).length !== 0 && b(g);
    });
  }
  var v = R(d, 2);
  Mt(
    v,
    19,
    () => f(u),
    (b) => b.id,
    (b, x, C) => {
      Ad(b, {
        get parameter() {
          return f(x);
        },
        get index() {
          return f(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = Ey(), C = B(x, !0);
      q(x), Ce(() => ct(C, i())), T(b, x);
    }
  ), q(c), T(e, c);
  var h = pe({
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
    }
  });
  return r(), h;
}
ue(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ny = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Oy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Id(e, t) {
  ge(t, !0), Ue(e, Oy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn();
  return pn(e, lt(
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
        var s = Hy();
        T(a, s);
      },
      children: (a, s) => {
        var l = Ny(), u = be(l), c = B(u);
        Ge(c, {
          level: 3,
          children: (v, h) => {
            ze();
            var b = Re("输出参数");
            T(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = R(c, 2);
        Ke(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, h) => {
            var b = Py();
            T(v, b);
          },
          $$slots: { default: !0 }
        }), q(u);
        var g = R(u, 2);
        Zt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), T(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Id, { data: {} }, [], [], !0);
const ya = (e) => JSON.parse(JSON.stringify(e));
var zy = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ly = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Ty = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Dy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ay = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ge(t, !0), Ue(e, Ay);
  const [n, r] = rt(), o = () => ne(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var O;
    let V = (O = o()) == null ? void 0 : O.data[s()], P;
    if (V && a().length > 0) {
      let A = V;
      for (let X = 0; X < a().length; X++) {
        const K = a()[X];
        X == a().length - 1 ? P = A[K] : A = A[K].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: d } = Tt(), g = (O, V) => {
    d(l, (P) => {
      const A = P.data[s()];
      if (A && a().length > 0) {
        let X = A;
        for (let K = 0; K < a().length; K++) {
          const G = a()[K];
          K == a().length - 1 ? X[G] = { ...X[G], [O]: V } : X = X[G].children;
        }
      }
      return {
        [s()]: [...ya(A)]
      };
    });
  }, v = (O, V) => {
    const P = V.target.value;
    g(O, P);
  }, h = (O) => {
    const V = O.value;
    g("dataType", V);
  };
  let b;
  const x = () => {
    d(l, (O) => {
      let V = O.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let A = 0; A < a().length; A++) {
          const X = a()[A];
          A == a().length - 1 ? P.splice(X, 1) : P = P[X].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (O) => {
      let V = O.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let A = 0; A < a().length; A++) {
          const X = a()[A];
          A == a().length - 1 ? P[X].children ? P[X].children.push({
            id: qr(),
            name: "newParam",
            dataType: "String"
          }) : P[X].children = [
            {
              id: qr(),
              name: "newParam",
              dataType: "String"
            }
          ] : P = P[X].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    });
  };
  var p = Dy(), _ = be(p), w = B(_);
  {
    var k = (O) => {
      var V = Je(), P = be(V);
      Mt(P, 17, a, zr, (A, X) => {
        ze();
        var K = Re(" ");
        T(A, K);
      }), T(O, V);
    };
    ye(w, (O) => {
      a().length > 1 && O(k);
    });
  }
  var H = R(w, 2);
  const S = /* @__PURE__ */ Ve(() => f(c).nameDisabled === !0);
  vt(H, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (O) => {
      v("name", O);
    },
    get disabled() {
      return f(S);
    }
  }), q(_);
  var N = R(_, 2), z = B(N);
  const D = /* @__PURE__ */ Ve(() => f(c).dataType ? [f(c).dataType] : []), I = /* @__PURE__ */ Ve(() => f(c).dataTypeDisabled === !0);
  Jt(z, {
    items: Od,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(D);
    },
    get disabled() {
      return f(I);
    },
    onSelect: h
  });
  var L = R(z, 2);
  {
    var Z = (O) => {
      Ke(O, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (V, P) => {
          var A = zy();
          T(V, A);
        },
        $$slots: { default: !0 }
      });
    };
    ye(L, (O) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && O(Z);
    });
  }
  q(N);
  var E = R(N, 2), $ = B(E);
  _n(
    Gr($, {
      placement: "bottom",
      floating: (O) => {
        var V = Ty(), P = B(V), A = R(B(P));
        const X = /* @__PURE__ */ Ve(() => f(c).defaultValue || "");
        mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(X);
          },
          onchange: (fe) => {
            v("defaultValue", fe);
          }
        }), q(P);
        var K = R(P, 2), G = R(B(K));
        const J = /* @__PURE__ */ Ve(() => f(c).description || "");
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(J);
          },
          onchange: (fe) => {
            v("description", fe);
          }
        }), q(K);
        var W = R(K, 2);
        {
          var ve = (fe) => {
            var me = Ly(), se = B(me);
            Ke(se, {
              onclick: x,
              children: (Se, we) => {
                ze();
                var He = Re("删除");
                T(Se, He);
              },
              $$slots: { default: !0 }
            }), q(me), T(fe, me);
          };
          ye(W, (fe) => {
            f(c).deleteDisabled !== !0 && fe(ve);
          });
        }
        q(V), T(O, V);
      },
      children: (O, V) => {
        na(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => b = O,
    () => b
  ), q(E), T(e, p);
  var M = pe({
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
  return r(), M;
}
ue(Rd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Iy = /* @__PURE__ */ re("<!> <!>", 1), Ry = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Zy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), qy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const By = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  ge(t, !0), Ue(e, By);
  const [n, r] = rt(), o = () => ne(f(u), "$node", n), i = (x, C = pt, p = pt) => {
    var _ = Je(), w = be(_);
    Mt(
      w,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, H, S) => {
        var N = Iy(), z = be(N);
        const D = /* @__PURE__ */ Ve(() => [...p(), f(S)]);
        Rd(z, {
          get parameter() {
            return f(H);
          },
          get position() {
            return f(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var I = R(z, 2);
        {
          var L = (Z) => {
            var E = /* @__PURE__ */ xe(() => [...p(), f(S)]);
            i(Z, () => f(H).children, () => f(E));
          };
          ye(I, (Z) => {
            f(H).children && Z(L);
          });
        }
        T(k, N);
      },
      (k) => {
        var H = Je(), S = be(H);
        {
          var N = (z) => {
            var D = Ry(), I = B(D, !0);
            q(D), Ce(() => ct(I, a())), T(z, D);
          };
          ye(S, (z) => {
            p().length === 0 && z(N);
          });
        }
        T(k, H);
      }
    ), T(x, _);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = qy(), g = B(d);
  {
    var v = (x) => {
      var C = Zy();
      ze(4), T(x, C);
    };
    ye(g, (x) => {
      f(c).length !== 0 && x(v);
    });
  }
  var h = R(g, 2);
  i(h, () => f(c) || [], () => []), q(d), T(e, d);
  var b = pe({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), m();
    }
  });
  return r(), b;
}
ue(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Xy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Wy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), jy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Zd(e, t) {
  ge(t, !0), Ue(e, Uy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = er();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var c, d;
    const g = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...g || []);
  });
  const { updateNodeData: l } = Tt(), u = (c) => {
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
  return ln(() => {
    n().outType || u("text");
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Xy();
        T(c, d);
      },
      children: (c, d) => {
        var g = Gy(), v = be(g), h = B(v);
        Ge(h, {
          level: 3,
          children: (U, Me) => {
            ze();
            var j = Re("输入参数");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var b = R(h, 2);
        Ke(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (U, Me) => {
            var j = Yy();
            T(U, j);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = R(v, 2);
        Zt(x, {});
        var C = R(x, 2);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: (U, Me) => {
            ze();
            var j = Re("模型设置");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var p = R(C, 4), _ = B(p);
        const w = /* @__PURE__ */ Ve(() => n().llmId ? [n().llmId] : []);
        Jt(_, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (U) => {
            const Me = U.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return f(w);
          }
        });
        var k = R(_, 2);
        na(k, {}), q(p);
        var H = R(p, 4), S = B(H), N = B(S), z = B(N);
        q(N);
        var D = R(N, 2);
        Kn(D), D.__input = [Ky, l, o], q(S), q(H);
        var I = R(H, 2), L = B(I), Z = B(L), E = B(Z);
        q(Z);
        var $ = R(Z, 2);
        Kn($), $.__input = [Wy, l, o], q(L), q(I);
        var M = R(I, 2), O = B(M), V = B(O), P = B(V);
        q(V);
        var A = R(V, 2);
        Kn(A), A.__input = [jy, l, o], q(O), q(M);
        var X = R(M, 4), K = B(X);
        const G = /* @__PURE__ */ Ve(() => n().systemPrompt || "");
        mt(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(G);
          },
          oninput: (U) => {
            l(o, { systemPrompt: U.target.value });
          }
        }), q(X);
        var J = R(X, 4), W = B(J);
        const ve = /* @__PURE__ */ Ve(() => n().userPrompt || "");
        mt(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ve);
          },
          oninput: (U) => {
            l(o, { userPrompt: U.target.value });
          }
        }), q(J);
        var fe = R(J, 2), me = B(fe);
        Ge(me, {
          level: 3,
          mt: "10px",
          children: (U, Me) => {
            ze();
            var j = Re("输出参数");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var se = R(me, 2);
        const Se = /* @__PURE__ */ Ve(() => n().outType ? [n().outType] : []);
        Jt(se, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (U) => {
            u(U.value);
          },
          get value() {
            return f(Se);
          }
        });
        var we = R(se, 2);
        {
          var He = (U) => {
            Ke(U, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Me, j) => {
                var Ne = Fy();
                T(Me, Ne);
              },
              $$slots: { default: !0 }
            });
          };
          ye(we, (U) => {
            n().outType === "json" && U(He);
          });
        }
        q(fe);
        var ae = R(fe, 2);
        In(ae, {}), Ce(() => {
          ct(z, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Uo(D, n().temperature ?? 0.5), ct(E, `Top P: ${n().topP ?? 0.9 ?? ""}`), Uo($, n().topP ?? 0.9), ct(P, `Top K: ${n().topK ?? 50 ?? ""}`), Uo(A, n().topK ?? 50);
        }), T(c, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
jr(["input"]);
ue(Zd, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  ge(t, !0), Ue(e, nw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Qt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = Mn(), { updateNodeData: a } = Tt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Jy();
        T(l, u);
      },
      children: (l, u) => {
        var c = tw(), d = be(c), g = B(d);
        Ge(g, {
          level: 3,
          children: (D, I) => {
            ze();
            var L = Re("输入参数");
            T(D, L);
          },
          $$slots: { default: !0 }
        });
        var v = R(g, 2);
        Ke(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, I) => {
            var L = Qy();
            T(D, L);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = R(d, 2);
        Zt(h, {});
        var b = R(h, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            ze();
            var L = Re("代码");
            T(D, L);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), C = B(x);
        const p = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : ["qlexpress"]);
        Jt(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const I = D.value;
            a(o, () => ({ engine: I }));
          },
          get value() {
            return f(p);
          }
        }), q(x);
        var _ = R(x, 4), w = B(_);
        const k = /* @__PURE__ */ Ve(() => n().code || "");
        mt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (D) => {
            a(o, () => ({ code: D.target.value }));
          },
          get value() {
            return f(k);
          }
        }), q(_);
        var H = R(_, 2), S = B(H);
        Ge(S, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            ze();
            var L = Re("输出参数");
            T(D, L);
          },
          $$slots: { default: !0 }
        });
        var N = R(S, 2);
        Ke(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, I) => {
            var L = ew();
            T(D, L);
          },
          $$slots: { default: !0 }
        }), q(H);
        var z = R(H, 2);
        In(z, {}), T(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(qd, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const aw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  ge(t, !0), Ue(e, aw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), { updateNodeData: a } = Tt();
  return ln(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = rw();
        T(s, l);
      },
      children: (s, l) => {
        var u = iw(), c = be(u), d = B(c);
        Ge(d, {
          level: 3,
          children: (k, H) => {
            ze();
            var S = Re("输入参数");
            T(k, S);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        Ke(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, H) => {
            var S = ow();
            T(k, S);
          },
          $$slots: { default: !0 }
        }), q(c);
        var v = R(c, 2);
        Zt(v, {});
        var h = R(v, 2);
        Ge(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, H) => {
            ze();
            var S = Re("模板内容");
            T(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = R(h, 2), x = B(b);
        const C = /* @__PURE__ */ Ve(() => n().template || "");
        mt(x, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f(C);
          }
        }), q(b);
        var p = R(b, 2), _ = B(p);
        Ge(_, {
          level: 3,
          mt: "10px",
          children: (k, H) => {
            ze();
            var S = Re("输出参数");
            T(k, S);
          },
          $$slots: { default: !0 }
        }), q(p);
        var w = R(p, 2);
        In(w, {}), T(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ue(Bd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), fw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), gw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), pw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const yw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Xd(e, t) {
  ge(t, !0), Ue(e, yw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Qt(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: a } = Mn(), { updateNodeData: s } = Tt();
  return pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = sw();
        T(l, u);
      },
      children: (l, u) => {
        var c = mw(), d = be(c), g = B(d);
        Ge(g, {
          level: 3,
          children: (le, ce) => {
            ze();
            var oe = Re("输入参数");
            T(le, oe);
          },
          $$slots: { default: !0 }
        });
        var v = R(g, 2);
        Ke(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (le, ce) => {
            var oe = lw();
            T(le, oe);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = R(d, 2);
        Zt(h, {});
        var b = R(h, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            ze();
            var oe = Re("URL 地址");
            T(le, oe);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 2), C = B(x), p = B(C);
        const _ = /* @__PURE__ */ Ve(() => n().method ? [n().method] : ["get"]);
        Jt(p, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const ce = le.value;
            s(i, () => ({ method: ce }));
          },
          get value() {
            return f(_);
          }
        }), q(C);
        var w = R(C, 2), k = B(w);
        const H = /* @__PURE__ */ Ve(() => n().url || "");
        vt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return f(H);
          }
        }), q(w), q(x);
        var S = R(x, 2), N = B(S);
        Ge(N, {
          level: 3,
          children: (le, ce) => {
            ze();
            var oe = Re("Http 头信息");
            T(le, oe);
          },
          $$slots: { default: !0 }
        });
        var z = R(N, 2);
        Ke(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, ce) => {
            var oe = uw();
            T(le, oe);
          },
          $$slots: { default: !0 }
        }), q(S);
        var D = R(S, 2);
        Zt(D, { dataKeyName: "headers" });
        var I = R(D, 2);
        Ge(I, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            ze();
            var oe = Re("Body");
            T(le, oe);
          },
          $$slots: { default: !0 }
        });
        var L = R(I, 2), Z = B(L), E = B(Z);
        const $ = /* @__PURE__ */ Ve(() => !n().bodyType);
        vt(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f($);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "" });
          }
        }), ze(), q(Z);
        var M = R(Z, 2), O = B(M);
        const V = /* @__PURE__ */ Ve(() => n().bodyType === "form-data");
        vt(O, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(V);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "form-data" });
          }
        }), ze(), q(M);
        var P = R(M, 2), A = B(P);
        const X = /* @__PURE__ */ Ve(() => n().bodyType === "x-www-form-urlencoded");
        vt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(X);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), ze(), q(P);
        var K = R(P, 2), G = B(K);
        const J = /* @__PURE__ */ Ve(() => n().bodyType === "json");
        vt(G, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(J);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "json" });
          }
        }), ze(), q(K);
        var W = R(K, 2), ve = B(W);
        const fe = /* @__PURE__ */ Ve(() => n().bodyType === "raw");
        vt(ve, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(fe);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "raw" });
          }
        }), ze(), q(W), q(L);
        var me = R(L, 2);
        {
          var se = (le) => {
            var ce = dw(), oe = be(ce), Ee = B(oe);
            Ge(Ee, {
              level: 3,
              children: (ee, Ye) => {
                ze();
                var de = Re("参数");
                T(ee, de);
              },
              $$slots: { default: !0 }
            });
            var et = R(Ee, 2);
            Ke(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (ee, Ye) => {
                var de = cw();
                T(ee, de);
              },
              $$slots: { default: !0 }
            }), q(oe);
            var tt = R(oe, 2);
            Zt(tt, { dataKeyName: "formData" }), T(le, ce);
          };
          ye(me, (le) => {
            n().bodyType === "form-data" && le(se);
          });
        }
        var Se = R(me, 2);
        {
          var we = (le) => {
            var ce = vw(), oe = be(ce), Ee = B(oe);
            Ge(Ee, {
              level: 3,
              children: (ee, Ye) => {
                ze();
                var de = Re("Body 参数");
                T(ee, de);
              },
              $$slots: { default: !0 }
            });
            var et = R(Ee, 2);
            Ke(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (ee, Ye) => {
                var de = fw();
                T(ee, de);
              },
              $$slots: { default: !0 }
            }), q(oe);
            var tt = R(oe, 2);
            Zt(tt, { dataKeyName: "formUrlencoded" }), T(le, ce);
          };
          ye(Se, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(we);
          });
        }
        var He = R(Se, 2);
        {
          var ae = (le) => {
            var ce = gw(), oe = B(ce);
            mt(oe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ee) => {
                s(i, { bodyJson: Ee.target.value });
              }
            }), q(ce), T(le, ce);
          };
          ye(He, (le) => {
            n().bodyType === "json" && le(ae);
          });
        }
        var U = R(He, 2);
        {
          var Me = (le) => {
            var ce = pw(), oe = B(ce);
            mt(oe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ee) => {
                s(i, { bodyRaw: Ee.target.value });
              }
            }), q(ce), T(le, ce);
          };
          ye(U, (le) => {
            n().bodyType === "raw" && le(Me);
          });
        }
        var j = R(U, 2), Ne = B(j);
        Ge(Ne, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            ze();
            var oe = Re("输出参数");
            T(le, oe);
          },
          $$slots: { default: !0 }
        });
        var De = R(Ne, 2);
        Ke(De, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, ce) => {
            var oe = hw();
            T(le, oe);
          },
          $$slots: { default: !0 }
        }), q(j);
        var Te = R(j, 2);
        In(Te, {}), T(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(Xd, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const $w = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ge(t, !0), Ue(e, $w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = er();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Tt();
  return ln(() => {
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
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ww();
        T(u, c);
      },
      children: (u, c) => {
        var d = xw(), g = be(d), v = B(g);
        Ge(v, {
          level: 3,
          children: (L, Z) => {
            ze();
            var E = Re("输入参数");
            T(L, E);
          },
          $$slots: { default: !0 }
        });
        var h = R(v, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, Z) => {
            var E = bw();
            T(L, E);
          },
          $$slots: { default: !0 }
        }), q(g);
        var b = R(g, 2);
        Zt(b, {});
        var x = R(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (L, Z) => {
            ze();
            var E = Re("知识库设置");
            T(L, E);
          },
          $$slots: { default: !0 }
        });
        var C = R(x, 4), p = B(C);
        const _ = /* @__PURE__ */ Ve(() => n().knowledgeId ? [n().knowledgeId] : []);
        Jt(p, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const Z = L.value;
            l(o, () => ({ knowledgeId: Z }));
          },
          get value() {
            return f(_);
          }
        }), q(C);
        var w = R(C, 4), k = B(w);
        vt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const Z = L.target.value;
            l(o, () => ({ keyword: Z }));
          }
        }), q(w);
        var H = R(w, 4), S = B(H);
        const N = /* @__PURE__ */ Ve(() => n().limit || "");
        vt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const Z = L.target.value;
            l(o, () => ({ limit: Z }));
          },
          get value() {
            return f(N);
          }
        }), q(H);
        var z = R(H, 2), D = B(z);
        Ge(D, {
          level: 3,
          mt: "10px",
          children: (L, Z) => {
            ze();
            var E = Re("输出参数");
            T(L, E);
          },
          $$slots: { default: !0 }
        }), q(z);
        var I = R(z, 2);
        In(I, {}), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(Yd, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), _w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ge(t, !0), Ue(e, Sw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = er();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Tt();
  return ln(() => {
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
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Cw();
        T(u, c);
      },
      children: (u, c) => {
        var d = kw(), g = be(d), v = B(g);
        Ge(v, {
          level: 3,
          children: (I, L) => {
            ze();
            var Z = Re("输入参数");
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
        var h = R(v, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, L) => {
            var Z = _w();
            T(I, Z);
          },
          $$slots: { default: !0 }
        }), q(g);
        var b = R(g, 2);
        Zt(b, {});
        var x = R(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            ze();
            var Z = Re("搜索引擎设置");
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
        var C = R(x, 4), p = B(C);
        const _ = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : []);
        Jt(p, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const L = I.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return f(_);
          }
        }), q(C);
        var w = R(C, 4), k = B(w);
        vt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const L = I.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), q(w);
        var H = R(w, 4), S = B(H);
        vt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const L = I.target.value;
            l(o, () => ({ limit: L }));
          }
        }), q(H);
        var N = R(H, 2), z = B(N);
        Ge(z, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            ze();
            var Z = Re("输出参数");
            T(I, Z);
          },
          $$slots: { default: !0 }
        }), q(N);
        var D = R(N, 2);
        In(D, {}), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(Kd, { data: {} }, [], [], !0);
var Ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Hw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  ge(t, !0), Ue(e, Hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn();
  return pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = Ew();
        T(a, s);
      },
      handle: (a) => {
        Jn(a, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Vw(), u = be(l), c = B(u);
        Ge(c, {
          level: 3,
          children: (x, C) => {
            ze();
            var p = Re("循环变量");
            T(x, p);
          },
          $$slots: { default: !0 }
        });
        var d = R(c, 2);
        Ke(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, C) => {
            var p = Mw();
            T(x, p);
          },
          $$slots: { default: !0 }
        }), q(u);
        var g = R(u, 2);
        Zt(g, {});
        var v = R(g, 2), h = B(v);
        Ge(h, {
          level: 3,
          mt: "10px",
          children: (x, C) => {
            ze();
            var p = Re("输出参数");
            T(x, p);
          },
          $$slots: { default: !0 }
        }), q(v);
        var b = R(v, 2);
        In(b, {}), T(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Wd, { data: {} }, [], [], !0);
const Pw = {
  startNode: Td,
  codeNode: qd,
  llmNode: Zd,
  templateNode: Bd,
  httpNode: Xd,
  knowledgeNode: Yd,
  searchEngineNode: Kd,
  loopNode: Wd,
  endNode: Id
};
var Nw = /* @__PURE__ */ re("<!> ", 1);
function Xa(e, t) {
  ge(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return Ke(e, {
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
      var u = Nw(), c = be(u);
      ls(c, n);
      var d = R(c);
      Ce(() => ct(d, ` ${r() ?? ""}`)), T(s, u);
    },
    $$slots: { default: !0 }
  }), pe({
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
  Xa,
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
var Ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), zw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Lw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function jd(e, t) {
  ge(t, !0);
  let n = /* @__PURE__ */ kt("base"), r = /* @__PURE__ */ kt("show");
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
  ], a = [], s = er(), l = s.customNodes;
  if (l) {
    const C = Object.keys(l).sort((p, _) => (l[p].sortNo || 0) - (l[_].sortNo || 0));
    for (let p of C)
      l[p].group === "base" ? o.push({ type: p, ...l[p] }) : a.push({
        icon: l[p].icon,
        title: l[p].title,
        type: p
      });
    o.sort((p, _) => (p.sortNo || 0) - (_.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const C = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray(C)) {
      for (let p of C)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === p) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = Lw(), c = B(u), d = B(c), g = B(d);
  wd(g, {
    style: "width: 100%",
    items: i,
    onChange: (C) => {
      Q(n, C.value.toString(), !0);
    }
  }), q(d);
  var v = R(d, 2), h = B(v);
  Mt(h, 21, () => o, zr, (C, p) => {
    Xa(C, lt(() => f(p)));
  }), q(h);
  var b = R(h, 2);
  Mt(b, 21, () => a, zr, (C, p) => {
    Xa(C, lt(() => f(p)));
  }), q(b), q(v), q(c);
  var x = R(c, 2);
  Ke(x, {
    onclick: () => {
      Q(r, f(r) ? "" : "show", !0);
    },
    children: (C, p) => {
      var _ = Je(), w = be(_);
      {
        var k = (S) => {
          var N = Ow();
          T(S, N);
        }, H = (S) => {
          var N = zw();
          T(S, N);
        };
        ye(w, (S) => {
          f(r) === "show" ? S(k) : S(H, !1);
        });
      }
      T(C, _);
    },
    $$slots: { default: !0 }
  }), q(u), Ce(() => {
    $t(u, 1, `tf-toolbar ${f(r) ?? ""}`), ft(h, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(b, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), T(e, u), pe();
}
ue(jd, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = Fe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Dw = () => {
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
}, Aw = () => {
  const { edges: e } = Fe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Zw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), qw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Bw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Xw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Yw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Kw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), jw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Fw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Fd(e, t) {
  var n;
  ge(t, !0), Ue(e, Fw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = Mn(), s = Tt(), { updateNodeData: l } = s, u = (C) => {
    l(i, C);
  }, c = (C, p) => {
    var _;
    u({ [C]: (_ = p.target) == null ? void 0 : _.value });
  }, d = { ...o, id: i, data: r() }, g = document.createElement("div"), v = er().customNodes[t.type];
  (n = v.render) == null || n.call(v, g, d, s);
  const h = v.forms;
  let b;
  ln(() => {
    r().expand && b && b.append(g);
  }), ln(() => {
    var C;
    r() && ((C = v.onUpdate) == null || C.call(v, g, { ...d, data: r() }));
  }), ln(() => {
    !r().parameters && v.parameters && u({
      parameters: Oi(JSON.parse(JSON.stringify(v.parameters)))
    });
  }), ln(() => {
    !r().outputDefs && v.outputDefs && u({
      outputDefs: Oi(JSON.parse(JSON.stringify(v.outputDefs)))
    });
  });
  const x = /* @__PURE__ */ Ve(() => ({
    ...r(),
    description: v.description
  }));
  return pn(e, lt(
    {
      get data() {
        return f(x);
      }
    },
    () => o,
    {
      icon: (C) => {
        var p = Je(), _ = be(p);
        ls(_, () => v.icon), T(C, p);
      },
      children: (C, p) => {
        var _ = jw(), w = be(_);
        {
          var k = (I) => {
            var L = Rw(), Z = be(L), E = B(Z);
            Ge(E, {
              level: 3,
              children: (V, P) => {
                ze();
                var A = Re("输入参数");
                T(V, A);
              },
              $$slots: { default: !0 }
            });
            var $ = R(E, 2);
            {
              var M = (V) => {
                Ke(V, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (P, A) => {
                    var X = Iw();
                    T(P, X);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye($, (V) => {
                v.parametersAddEnable !== !1 && V(M);
              });
            }
            q(Z);
            var O = R(Z, 2);
            Zt(O, {}), T(I, L);
          };
          ye(w, (I) => {
            v.parametersEnable !== !1 && I(k);
          });
        }
        var H = R(w, 2);
        {
          var S = (I) => {
            var L = Je(), Z = be(L);
            Mt(Z, 17, () => h, zr, (E, $) => {
              var M = Je(), O = be(M);
              {
                var V = (A) => {
                  var X = Zw(), K = be(X), G = B(K, !0);
                  q(K);
                  var J = R(K, 2), W = B(J);
                  const ve = /* @__PURE__ */ Ve(() => r()[f($).name] || f($).defaultValue);
                  vt(W, lt(
                    {
                      get placeholder() {
                        return f($).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(ve);
                      }
                    },
                    () => f($).attrs,
                    {
                      onchange: (fe) => {
                        c(f($).name, fe);
                      }
                    }
                  )), q(J), Ce(() => ct(G, f($).label)), T(A, X);
                }, P = (A, X) => {
                  {
                    var K = (J) => {
                      var W = qw(), ve = be(W), fe = B(ve, !0);
                      q(ve);
                      var me = R(ve, 2), se = B(me);
                      const Se = /* @__PURE__ */ Ve(() => r()[f($).name] || f($).defaultValue);
                      mt(se, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f($).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(Se);
                          }
                        },
                        () => f($).attrs,
                        {
                          onchange: (we) => {
                            c(f($).name, we);
                          }
                        }
                      )), q(me), Ce(() => ct(fe, f($).label)), T(J, W);
                    }, G = (J, W) => {
                      {
                        var ve = (me) => {
                          var se = Bw(), Se = be(se), we = B(Se, !0);
                          q(Se);
                          var He = R(Se, 2), ae = B(He), U = B(ae), Me = B(U);
                          q(U);
                          var j = R(U, 2);
                          Kn(j);
                          var Ne = (Te) => u({
                            [f($).name]: parseFloat(Te.target.value)
                          });
                          let De;
                          q(ae), q(He), Ce(() => {
                            ct(we, f($).label), ct(Me, `${f($).description ?? ""}: ${r()[f($).name] ?? f($).defaultValue ?? ""}`), De = Xt(
                              j,
                              De,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f($).attrs,
                                value: r()[f($).name] ?? f($).defaultValue,
                                oninput: Ne
                              },
                              "svelte-q0cqsa"
                            );
                          }), T(me, se);
                        }, fe = (me, se) => {
                          {
                            var Se = (He) => {
                              var ae = Xw(), U = be(ae), Me = B(U, !0);
                              q(U);
                              var j = R(U, 2), Ne = B(j);
                              const De = /* @__PURE__ */ Ve(() => f($).options || []), Te = /* @__PURE__ */ Ve(() => r()[f($).name] ? [r()[f($).name]] : [f($).defaultValue]);
                              Jt(Ne, {
                                get items() {
                                  return f(De);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f($).placeholder;
                                },
                                onSelect: (le) => {
                                  const ce = le.value;
                                  u({ [f($).name]: ce });
                                },
                                get value() {
                                  return f(Te);
                                }
                              }), q(j), Ce(() => ct(Me, f($).label)), T(He, ae);
                            }, we = (He, ae) => {
                              {
                                var U = (j) => {
                                  var Ne = Yw(), De = be(Ne), Te = B(De, !0);
                                  q(De);
                                  var le = R(De, 2), ce = B(le);
                                  yd(ce, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f($).placeholder;
                                    },
                                    onChosen: (oe, Ee, et) => {
                                      var tt, ee;
                                      (ee = (tt = f($).chosen) == null ? void 0 : tt.onChosen) == null || ee.call(tt, u, oe, Ee, et);
                                    },
                                    get value() {
                                      var oe;
                                      return r()[((oe = f($).chosen) == null ? void 0 : oe.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var oe;
                                      return r()[((oe = f($).chosen) == null ? void 0 : oe.labelDataKey) || ""];
                                    }
                                  }), q(le), Ce(() => ct(Te, f($).label)), T(j, Ne);
                                }, Me = (j, Ne) => {
                                  {
                                    var De = (Te) => {
                                      Ge(Te, lt({ level: 3, mt: "10px" }, () => f($).attrs, {
                                        children: (le, ce) => {
                                          ze();
                                          var oe = Re();
                                          Ce(() => ct(oe, f($).label)), T(le, oe);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ye(
                                      j,
                                      (Te) => {
                                        f($).type === "heading" && Te(De);
                                      },
                                      Ne
                                    );
                                  }
                                };
                                ye(
                                  He,
                                  (j) => {
                                    f($).type === "chosen" ? j(U) : j(Me, !1);
                                  },
                                  ae
                                );
                              }
                            };
                            ye(
                              me,
                              (He) => {
                                f($).type === "select" ? He(Se) : He(we, !1);
                              },
                              se
                            );
                          }
                        };
                        ye(
                          J,
                          (me) => {
                            f($).type === "slider" ? me(ve) : me(fe, !1);
                          },
                          W
                        );
                      }
                    };
                    ye(
                      A,
                      (J) => {
                        f($).type === "textarea" ? J(K) : J(G, !1);
                      },
                      X
                    );
                  }
                };
                ye(O, (A) => {
                  f($).type === "input" ? A(V) : A(P, !1);
                });
              }
              T(E, M);
            }), T(I, L);
          };
          ye(H, (I) => {
            h && I(S);
          });
        }
        var N = R(H, 2);
        _n(N, (I) => b = I, () => b);
        var z = R(N, 2);
        {
          var D = (I) => {
            var L = Ww(), Z = be(L), E = B(Z);
            Ge(E, {
              level: 3,
              mt: "10px",
              children: (V, P) => {
                ze();
                var A = Re("输出参数");
                T(V, A);
              },
              $$slots: { default: !0 }
            });
            var $ = R(E, 2);
            {
              var M = (V) => {
                Ke(V, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (P, A) => {
                    var X = Kw();
                    T(P, X);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye($, (V) => {
                v.outputDefsAddEnable !== !1 && V(M);
              });
            }
            q(Z);
            var O = R(Z, 2);
            In(O, {}), T(I, L);
          };
          ye(z, (I) => {
            v.outputDefsEnable !== !1 && I(D);
          });
        }
        Ce(() => {
          ft(N, v.rootStyle || ""), $t(N, 1, vn(v.rootClass), "svelte-q0cqsa");
        }), T(C, _);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return r();
    },
    set data(C) {
      r(C), m();
    }
  });
}
ue(Fd, { data: {} }, [], [], !0);
const Gw = () => {
  const e = Fe();
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
};
var Uw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Jw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Qw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const eb = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Gd(e, t) {
  ge(t, !0), Ue(e, eb);
  const [n, r] = rt(), o = () => ne(N, "$nodes", n), i = () => ne(z, "$edges", n), a = () => ne(D, "$viewport", n), s = y(t, "onInit", 7), l = Tt();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = Gw(), g = (V) => {
    V.preventDefault(), V.dataTransfer && (V.dataTransfer.dropEffect = "move");
  }, v = (V) => {
    var P;
    V.preventDefault();
    const A = l.screenToFlowPosition({
      x: V.clientX - 250,
      y: V.clientY - 100
    }), X = (P = V.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), K = X ? JSON.parse(X) : {}, G = {
      id: `node_${qr()}`,
      position: A,
      data: {},
      ...K
    };
    oi.addNode(G), oi.selectNodeOnly(G.id);
  }, { getNode: h } = Tw(), b = (V) => {
    const P = h(V.source), A = h(V.target);
    if (V.sourceHandle === "loop_handle" || P.parentId) {
      const X = l.getEdges();
      for (let K of X)
        if (K.target === V.target) {
          const G = h(K.source);
          if (V.sourceHandle === "loop_handle" && G.parentId !== P.id || P.parentId && G.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && A.parentId && A.parentId !== P.id);
  }, { ensureParentInNodesBefore: x } = Dw(), C = (V, P) => {
    if (!P.isValid)
      return;
    const A = P.toNode;
    if (A.parentId)
      return;
    const X = P.fromNode, K = P.fromHandle, G = { position: { ...A.position } };
    if (K.id === "loop_handle" ? G.parentId = X.id : X.parentId && (G.parentId = X.parentId), G.parentId) {
      const J = h(G.parentId);
      G.position = {
        x: A.position.x - J.position.x,
        y: A.position.y - J.position.y
      }, x(G.parentId, A.id), l.updateNode(A.id, G);
    }
  }, { getEdgesByTarget: p } = Aw(), _ = (V) => {
    V.edges.forEach((P) => {
      const A = h(P.target);
      if (A && A.parentId) {
        const X = p(P.target), K = h(A.parentId);
        if (X.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + K.position.x,
              y: A.position.y + K.position.y
            }
          });
        else {
          let G = !1;
          for (let J = 0; J < X.length; J++) {
            const W = X[J], ve = h(W.source);
            if (ve.parentId || ve.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + K.position.x,
              y: A.position.y + K.position.y
            }
          });
        }
      }
    });
  }, w = (V, P) => {
  }, k = (V) => {
  }, H = {}, S = er().customNodes;
  if (S)
    for (let V of Object.keys(S))
      H[V] = Fd;
  const { nodes: N, edges: z, viewport: D } = Fe(), I = er().onDataChange;
  I && (N.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), z.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), D.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = Qw(), Z = B(L);
  const E = /* @__PURE__ */ Ve(() => ({ ...Pw, ...H })), $ = /* @__PURE__ */ Ve(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(Z, lt(
    {
      get nodeTypes() {
        return f(E);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: C,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: _,
      onclick: (V) => {
        const P = V.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || (Q(u, !1), Q(c, null));
      },
      get defaultEdgeOptions() {
        return f($);
      },
      $$events: {
        drop: v,
        dragover: g,
        edgeclick: (V) => {
          Q(u, !0), Q(c, V.detail.edge, !0);
        }
      },
      children: (V, P) => {
        var A = Jw(), X = be(A);
        vd(X, {});
        var K = R(X, 2);
        cd(K, {});
        var G = R(K, 2);
        pd(G, {});
        var J = R(G, 2);
        {
          var W = (ve) => {
            To(ve, {
              children: (fe, me) => {
                var se = Uw(), Se = R(B(se), 4), we = B(Se);
                const He = /* @__PURE__ */ Ve(() => {
                  var ae, U;
                  return (U = (ae = f(c)) == null ? void 0 : ae.data) == null ? void 0 : U.condition;
                });
                mt(we, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(He);
                  },
                  onchange: (ae) => {
                    f(c) && d(f(c).id, { condition: ae.target.value });
                  }
                }), q(Se), q(se), T(fe, se);
              },
              $$slots: { default: !0 }
            });
          };
          ye(J, (ve) => {
            f(u) && ve(W);
          });
        }
        T(V, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = R(Z, 2);
  jd(M, {}), q(L), T(e, L);
  var O = pe({
    get onInit() {
      return s();
    },
    set onInit(V) {
      s(V), m();
    }
  });
  return r(), O;
}
ue(Gd, { onInit: {} }, [], [], !0);
function tb(e, t) {
  ge(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return oi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Or("tinyflow_options", n()), od(e, {
    fitView: !0,
    children: (i, a) => {
      Gd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), pe({
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
customElements.define("tinyflow-component", ue(tb, { options: {}, onInit: {} }, [], [], !1));
const lb = /* @__PURE__ */ d1({
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
    const n = e, r = f1(null);
    let o = null;
    return v1(() => {
      r.value && (o = new R2({
        ...n,
        element: r.value
      }));
    }), g1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (h1(), p1("div", {
      ref_key: "divRef",
      ref: r,
      class: y1(["tinyflow", a.className]),
      style: m1(a.style)
    }, null, 6));
  }
});
export {
  lb as Tinyflow
};
//# sourceMappingURL=index.js.map
