import { defineComponent as f1, ref as v1, onMounted as p1, onUnmounted as g1, createElementBlock as h1, openBlock as m1, normalizeStyle as y1, normalizeClass as w1 } from "vue";
var b1 = Object.defineProperty, Kl = (e) => {
  throw TypeError(e);
}, x1 = (e, t, n) => t in e ? b1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ot = (e, t, n) => x1(e, typeof t != "symbol" ? t + "" : t, n), Ya = (e, t, n) => t.has(e) || Kl("Cannot " + n), ut = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => t.has(e) ? Kl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ii = (e, t, n, r) => (Ya(e, t, "write to private field"), t.set(e, n), n), $1 = (e, t, n) => (Ya(e, t, "access private method"), n);
const C1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(C1);
let Br = !1, _1 = !1;
function k1() {
  Br = !0;
}
k1();
const Ka = 1, Wa = 2, Wl = 4, S1 = 8, M1 = 16, E1 = 1, V1 = 2, jl = 4, H1 = 8, P1 = 16, Fl = 1, N1 = 2, ja = "[", Fa = "[!", Ga = "]", _r = {}, Pt = Symbol(), O1 = "http://www.w3.org/1999/xhtml", z1 = "http://www.w3.org/2000/svg", L1 = !1;
function zi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, T1 = Array.prototype.indexOf, Ua = Array.from, ai = Object.keys, co = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, D1 = Object.prototype, A1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const gt = () => {
};
function I1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, Ul = 4, Li = 8, Qa = 16, Dn = 32, gr = 64, si = 128, qt = 256, li = 512, Mt = 1024, bn = 2048, er = 4096, On = 8192, Ti = 16384, R1 = 32768, Xr = 65536, Z1 = 1 << 17, q1 = 1 << 19, Jl = 1 << 20, wa = 1 << 21, Xn = Symbol("$state"), es = Symbol("legacy props"), B1 = Symbol("");
function X1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Y1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function K1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function W1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function j1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function F1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function G1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function U1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function J1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Oe = !1;
function Zt(e) {
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
function sn(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = Ja(e);
  if (t !== D1 && t !== A1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ kt(0), i = Qe, a = (s) => {
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && G1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ kt(u.value)), n.set(l, c)) : Q(
          c,
          a(() => sn(u.value))
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
        if (l === Xn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Nn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(sn(v ? s[l] : Pt))), n.set(l, d)), d !== void 0) {
          var p = f(d);
          return p === Pt ? void 0 : p;
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
          if (d !== void 0 && v !== Pt)
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
        if (l === Xn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Nn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? sn(s[l]) : Pt)), n.set(l, c));
          var v = f(c);
          if (v === Pt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), p = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var x = n.get(h + "");
            x !== void 0 ? Q(x, Pt) : h in s && (x = a(() => /* @__PURE__ */ kt(Pt)), n.set(h + "", x));
          }
        v === void 0 ? (!p || (d = Nn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ kt(void 0)), Q(
          v,
          a(() => sn(u))
        ), n.set(l, v)) : (p = v.v !== Pt, Q(
          v,
          a(() => sn(u))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(c, u), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= $.v && Q($, g + 1);
          }
          ia(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Pt;
        });
        for (var [u, c] of n)
          c.v !== Pt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        U1();
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
function pt(e) {
  return eu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return tu.call(e);
}
function X(e, t) {
  if (!Oe)
    return /* @__PURE__ */ pt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(Ze)
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
      /* @__PURE__ */ pt(
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
  return gu(t), t;
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
function Q1(e) {
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
  Gn(Q1(e));
  try {
    ru(e), t = wu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function iu(e) {
  var t = ou(e), n = (qn || (e.f & qt) !== 0) && e.deps !== null ? er : Mt;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  je === null && Qe === null && K1(), Qe !== null && (Qe.f & qt) !== 0 && je === null && Y1(), Vo && X1();
}
function ef(e, t) {
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
      Ii(i), i.f |= R1;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && Ri(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Jl | si)) === 0;
  if (!a && r && (o !== null && ef(i, o), Qe !== null && (Qe.f & un) !== 0)) {
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
  return Jt(t, Mt), t.teardown = e, t;
}
function Gt(e) {
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
    var r = Rt(e);
    return r;
  }
}
function tf(e) {
  return au(), Yr(e);
}
function nf(e) {
  const t = hr(gr, e, !0);
  return () => {
    cn(t);
  };
}
function rf(e) {
  const t = hr(gr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function Rt(e) {
  return hr(Ul, e, !1);
}
function ge(e, t) {
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
        (n.f & Mt) !== 0 && Jt(n, er), Wr(n) && Ii(n), t.ran = !1;
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
function Fn(e, t = !0) {
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
    (n.f & gr) !== 0 ? n.parent = null : cn(n, t), n = r;
  }
}
function of(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & q1) !== 0) && e.nodes_start !== null && (uu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), lu(e, t && !n), fi(e, 0), Jt(e, Ti);
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
    e.f ^= On, (e.f & Mt) === 0 && (e.f ^= Mt), Wr(e) && (Jt(e, bn), Ri(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & Dn) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const af = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let po = [], go = [];
function vu() {
  var e = po;
  po = [], fo(e);
}
function pu() {
  var e = go;
  go = [], fo(e);
}
function Eo(e) {
  po.length === 0 && queueMicrotask(vu), po.push(e);
}
function sf(e) {
  go.length === 0 && af(pu), go.push(e);
}
function Is() {
  po.length > 0 && vu(), go.length > 0 && pu();
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
function Gn(e) {
  je = e;
}
let Ut = null;
function gu(e) {
  Qe !== null && Qe.f & wa && (Ut === null ? Ut = [e] : Ut.push(e));
}
let _t = null, It = 0, jt = null;
function lf(e) {
  jt = e;
}
let hu = 1, di = 0, qn = !1;
function mu() {
  return ++hu;
}
function Wr(e) {
  var t, n = e.f;
  if ((n & bn) !== 0)
    return !0;
  if ((n & er) !== 0) {
    var r = e.deps, o = (n & qt) !== 0;
    if (r !== null) {
      var i, a, s = (n & li) !== 0, l = o && je !== null && !qn, u = r.length;
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
    (!o || je !== null && !qn) && Jt(e, Mt);
  }
  return !1;
}
function uf(e, t) {
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
  if (n !== null && (Go = !0), uf(e, t), Zs(t))
    throw e;
}
function yu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ut != null && Ut.includes(e) || ((i.f & un) !== 0 ? yu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Jt(i, bn) : (i.f & Mt) !== 0 && Jt(i, er), Ri(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = It, o = jt, i = Qe, a = qn, s = Ut, l = We, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, It = 0, jt = null, qn = (c & qt) !== 0 && (mn || !ar || Qe === null), Qe = (c & (Dn | gr)) === 0 ? e : null, Ut = null, Bs(e.ctx), mn = !1, di++, e.f |= wa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (_t !== null) {
      var p;
      if (fi(e, It), v !== null && It > 0)
        for (v.length = It + _t.length, p = 0; p < _t.length; p++)
          v[It + p] = _t[p];
      else
        e.deps = v = _t;
      if (!qn)
        for (p = It; p < v.length; p++)
          ((t = v[p]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && It < v.length && (fi(e, It), v.length = It);
    if (Zi() && jt !== null && !mn && v !== null && (e.f & (un | er | bn)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      jt.length; p++)
        yu(
          jt[p],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (di++, jt !== null && (o === null ? o = jt : o.push(.../** @type {Source[]} */
    jt))), d;
  } finally {
    _t = n, It = r, jt = o, Qe = i, qn = a, Ut = s, Bs(l), mn = u, e.f ^= wa;
  }
}
function cf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = T1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(t)) && (Jt(t, er), (t.f & (qt | li)) === 0 && (t.f ^= li), ru(
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
      cf(e, n[r]);
}
function Ii(e) {
  var t = e.f;
  if ((t & Ti) === 0) {
    Jt(e, Mt);
    var n = je, r = We, o = ar;
    je = e, ar = !0;
    try {
      (t & Qa) !== 0 ? of(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      L1 && _1 && e.f & bn;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      ar = o, je = n;
    }
  }
}
function df() {
  try {
    W1();
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
      t++ > 1e3 && df();
      var n = lo, r = n.length;
      lo = [];
      for (var o = 0; o < r; o++) {
        var i = vf(n[o]);
        ff(i);
      }
      ho.clear();
    }
  } finally {
    ui = !1, ar = e, ci = null;
  }
}
function ff(e) {
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
    if ((n & (gr | Dn)) !== 0) {
      if ((n & Mt) === 0) return;
      t.f ^= Mt;
    }
  }
  lo.push(t);
}
function vf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | gr)) !== 0, i = o && (r & Mt) !== 0;
    if (!i && (r & On) === 0) {
      if ((r & Ul) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Mt;
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
    if (!(Ut != null && Ut.includes(e))) {
      var r = Qe.deps;
      e.rv < di && (e.rv = di, _t === null && r !== null && r[It] === e ? It++ : _t === null ? _t = [e] : (!qn || !_t.includes(e)) && _t.push(e));
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
const pf = -7169;
function Jt(e, t) {
  e.f = e.f & pf | t;
}
function te(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      $a(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && $a(n);
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
  return gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var n;
  const r = Nr(e);
  return t || (r.equals = rs), Br && We !== null && We.l !== null && ((n = We.l).s ?? (n.s = [])).push(r), r;
}
function Q(e, t, n = !1) {
  Qe !== null && !mn && Zi() && (Qe.f & (un | Qa)) !== 0 && !(Ut != null && Ut.includes(e)) && J1();
  let r = n ? sn(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? ho.set(e, t) : ho.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & bn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Jt(e, (e.f & qt) === 0 ? Mt : er)), e.wv = mu(), xu(e, bn), Zi() && je !== null && (je.f & Mt) !== 0 && (je.f & (Dn | gr)) === 0 && (jt === null ? lf([e]) : jt.push(e));
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
      (s & bn) === 0 && (!r && a === je || (Jt(a, t), (s & (Mt | qt)) !== 0 && ((s & un) !== 0 ? xu(
        /** @type {Derived} */
        a,
        er
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
function ve(e, t = !1, n) {
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
          Gn(i.effect), $n(i.reaction), Rt(i.fn);
        }
      } finally {
        Gn(n), $n(r);
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
  return We === null && zi(), We.c ?? (We.c = new Map(hf(We) || void 0));
}
function hf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function mf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const yf = [
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
function wf(e) {
  return yf.includes(e);
}
const bf = {
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
function xf(e) {
  return e = e.toLowerCase(), bf[e] ?? e;
}
const $f = ["touchstart", "touchmove"];
function Cf(e) {
  return $f.includes(e);
}
const _f = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function kf(e) {
  return _f.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Sf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Eo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Mf(e) {
  Oe && /* @__PURE__ */ pt(e) !== null && ts(e);
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
function Vf(e) {
  var t = Qe, n = je;
  $n(null), Gn(null);
  try {
    return e();
  } finally {
    $n(t), Gn(n);
  }
}
const $u = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set();
function Cu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || oo.call(t, i), !i.cancelBubble)
      return Vf(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
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
    var d = Qe, v = je;
    $n(null), Gn(null);
    try {
      for (var p, h = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Mo(b)) {
              var [$, ...g] = b;
              $.apply(a, [e, ...g]);
            } else
              b.call(a, e);
        } catch (C) {
          p ? h.push(C) : p = C;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (p) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw p;
      }
    } finally {
      e.__root = n, delete e.currentTarget, $n(d), Gn(v);
    }
  }
}
function ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Fl) !== 0, r = (t & N1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Oe)
      return Tt(Ze, null), Ze;
    o === void 0 && (o = ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ pt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(a)
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
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Fl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Oe)
      return Tt(Ze, null), Ze;
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
function Re(e = "") {
  if (!Oe) {
    var t = Ln(e + "");
    return Tt(t, t), t;
  }
  var n = Ze;
  return n.nodeType !== 3 && (n.before(n = Ln()), St(n)), Tt(n, n), n;
}
function Je() {
  if (Oe)
    return Tt(Ze, null), Ze;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ln();
  return e.append(t, n), Tt(t, n), e;
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
function Hf(e, t) {
  xa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Oe, o = Ze;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ja); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw _r;
    Zt(!0), St(
      /** @type {Comment} */
      i
    ), xn();
    const a = ku(e, { ...t, anchor: i });
    if (Ze === null || Ze.nodeType !== 8 || /** @type {Comment} */
    Ze.data !== Ga)
      throw Di(), _r;
    return Zt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _r)
      return t.recover === !1 && j1(), xa(), ts(n), Zt(!1), _u(e, t);
    throw a;
  } finally {
    Zt(r), St(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  xa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var p = d[v];
      if (!s.has(p)) {
        s.add(p);
        var h = Cf(p);
        t.addEventListener(p, oo, { passive: h });
        var x = wr.get(p);
        x === void 0 ? (document.addEventListener(p, oo, { passive: h }), wr.set(p, 1)) : wr.set(p, x + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = rf(() => {
    var d = n ?? t.appendChild(Ln());
    return Fn(() => {
      if (i) {
        ve({});
        var v = (
          /** @type {ComponentContext} */
          We
        );
        v.c = i;
      }
      o && (r.$$events = o), Oe && Tt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Oe && (je.nodes_end = Ze), i && pe();
    }), () => {
      var v;
      for (var p of s) {
        t.removeEventListener(p, oo);
        var h = (
          /** @type {number} */
          wr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, oo), wr.delete(p)) : wr.set(p, h);
      }
      _a.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return ka.set(u, c), u;
}
let ka = /* @__PURE__ */ new WeakMap();
function Pf(e, t) {
  const n = ka.get(e);
  return n ? (ka.delete(e), n(t)) : Promise.resolve();
}
function me(e, t, [n, r] = [0, 0]) {
  Oe && n === 0 && xn();
  var o = e, i = null, a = null, s = Pt, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, p = !0) => {
    u = !0, d(p, v);
  }, d = (v, p) => {
    if (s === (s = v)) return;
    let h = !1;
    if (Oe && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ja ? r = 0 : b === Fa ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ba(), St(o), Zt(!1), h = !0, r = -1);
    }
    s ? (i ? vo(i) : p && (i = Fn(() => p(o))), a && Pr(a, () => {
      a = null;
    })) : (a ? vo(a) : p && (a = Fn(() => p(o, [n + 1, r]))), i && Pr(i, () => {
      i = null;
    })), h && Zt(!0);
  };
  Kr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Oe && (o = Ze);
}
function zr(e, t) {
  return t;
}
function Nf(e, t, n, r) {
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
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Rn(e, c.prev, c.next)), cn(c.e, !s);
    }
  });
}
function Et(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Wl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Oe ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pt(u)
    ) : u.appendChild(Ln());
  }
  Oe && xn();
  var c = null, d = !1, v = /* @__PURE__ */ xe(() => {
    var p = n();
    return Mo(p) ? p : p == null ? [] : Ua(p);
  });
  Kr(() => {
    var p = f(v), h = p.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let x = !1;
    if (Oe) {
      var b = (
        /** @type {Comment} */
        a.data === Fa
      );
      b !== (h === 0) && (a = ba(), St(a), Zt(!1), x = !0);
    }
    if (Oe) {
      for (var $ = null, g, C = 0; C < h; C++) {
        if (Ze.nodeType === 8 && /** @type {Comment} */
        Ze.data === Ga) {
          a = /** @type {Comment} */
          Ze, x = !0, Zt(!1);
          break;
        }
        var w = p[C], k = r(w, C);
        g = Su(
          Ze,
          s,
          $,
          null,
          w,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, g), $ = g;
      }
      h > 0 && St(ba());
    }
    Oe || Of(p, s, a, o, t, r, n), i !== null && (h === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Pr(c, () => {
      c = null;
    })), x && Zt(!0), f(v);
  }), Oe && (a = Ze);
}
function Of(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & S1) !== 0, v = (o & (Ka | Wa)) !== 0, p = e.length, h = t.items, x = t.first, b = x, $, g = null, C, w = [], k = [], H, S, O, z;
  if (d)
    for (z = 0; z < p; z += 1)
      H = e[z], S = i(H, z), O = h.get(S), O !== void 0 && ((s = O.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(O));
  for (z = 0; z < p; z += 1) {
    if (H = e[z], S = i(H, z), O = h.get(S), O === void 0) {
      var D = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Su(
        D,
        t,
        g,
        g === null ? t.first : g.next,
        H,
        S,
        z,
        r,
        o,
        a
      ), h.set(S, g), w = [], k = [], b = g.next;
      continue;
    }
    if (v && zf(O, H, z, o), (O.e.f & On) !== 0 && (vo(O.e), d && ((l = O.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(O))), O !== b) {
      if ($ !== void 0 && $.has(O)) {
        if (w.length < k.length) {
          var I = k[0], L;
          g = I.prev;
          var Z = w[0], E = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Ys(w[L], I, n);
          for (L = 0; L < k.length; L += 1)
            $.delete(k[L]);
          Rn(t, Z.prev, E.next), Rn(t, g, Z), Rn(t, E, I), b = I, g = E, z -= 1, w = [], k = [];
        } else
          $.delete(O), Ys(O, b, n), Rn(t, O.prev, O.next), Rn(t, O, g === null ? t.first : g.next), Rn(t, g, O), g = O;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== S; )
        (b.e.f & On) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      O = b;
    }
    w.push(O), g = O, b = O.next;
  }
  if (b !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); b !== null; )
      (b.e.f & On) === 0 && _.push(b), b = b.next;
    var M = _.length;
    if (M > 0) {
      var N = (o & Wl) !== 0 && p === 0 ? n : null;
      if (d) {
        for (z = 0; z < M; z += 1)
          (u = _[z].a) == null || u.measure();
        for (z = 0; z < M; z += 1)
          (c = _[z].a) == null || c.fix();
      }
      Nf(t, _, N, h);
    }
  }
  d && Eo(() => {
    var V;
    if (C !== void 0)
      for (O of C)
        (V = O.a) == null || V.apply();
  }), je.first = t.first && t.first.e, je.last = g && g.e;
}
function zf(e, t, n, r) {
  (r & Ka) !== 0 && Ca(e.v, t), (r & Wa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ka) !== 0, d = (l & M1) === 0, v = c ? d ? /* @__PURE__ */ ie(o) : Nr(o) : o, p = (l & Wa) === 0 ? a : Nr(a), h = {
    i: p,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = Fn(() => s(e, v, p, u), Oe), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
function Rn(e, t, n) {
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
        Tt(Ze, u), i = St(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = ss(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ pt(d)), Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ pt(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ pt(d)
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
function Lf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function cr(e, t, ...n) {
  var r = e, o = gt, i;
  Kr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Oe && (r = Ze);
}
function Mu(e, t, n) {
  Oe && xn();
  var r = e, o, i;
  Kr(() => {
    o !== (o = t()) && (i && (Pr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Xr), Oe && (r = Ze);
}
function Tf(e, t, n, r, o, i) {
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
    const v = t() || null;
    var p = v === "svg" ? z1 : null;
    v !== s && (d && (v === null ? Pr(d, () => {
      d = null, l = null;
    }) : v === l ? vo(d) : cn(d)), v && v !== l && (d = Fn(() => {
      if (u = Oe ? (
        /** @type {Element} */
        u
      ) : p ? document.createElementNS(p, v) : document.createElement(v), Tt(u, u), r) {
        Oe && kf(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Oe ? /* @__PURE__ */ pt(u) : u.appendChild(Ln())
        );
        Oe && (h === null ? Zt(!1) : St(h)), r(u, h);
      }
      je.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Xr), a && (Zt(!0), St(c));
}
function Ue(e, t) {
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
function bt(e, t, n) {
  Rt(() => {
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
function Eu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Eu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Df() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Eu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Df(e) : e ?? "";
}
const Ks = [...` 	
\r\f \v\uFEFF`];
function Af(e, t, n) {
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
function If(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(aa)), o && l.push(...Object.keys(o).map(aa));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var p = aa(e.substring(u, c).trim());
              if (!l.includes(p)) {
                v !== ";" && d++;
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
    var s = Af(n, r, i);
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
    var i = If(t, r);
    (!Oe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (sa(e, n == null ? void 0 : n[0], r[0]), sa(e, n == null ? void 0 : n[1], r[1], "important")) : sa(e, n, r));
  return r;
}
const to = Symbol("class"), rr = Symbol("style"), Vu = Symbol("is custom element"), Hu = Symbol("is html");
function Yn(e) {
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
    e.__on_r = n, sf(n), Ef();
  }
}
function Uo(e, t) {
  var n = qi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Rf(e, t) {
  var n = qi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Zf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = qi(e);
  Oe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[B1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xt(e, t, n, r, o = !1) {
  var i = qi(e), a = i[Vu], s = !i[Hu];
  let l = Oe && a;
  l && Zt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[rr] && (n.style ?? (n.style = null));
  var v = Pu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, p, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
      continue;
    }
    if (C === "style") {
      ft(e, w, t == null ? void 0 : t[rr], n[rr]), u[C] = w, u[rr] = n[rr];
      continue;
    }
    var h = u[C];
    if (w !== h) {
      u[C] = w;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, H = "$$" + C;
          let S = C.slice(2);
          var b = wf(S);
          if (mf(S) && (S = S.slice(0, -7), k.capture = !0), !b && h) {
            if (w != null) continue;
            e.removeEventListener(S, u[H], k), u[H] = null;
          }
          if (w != null)
            if (b)
              e[`__${S}`] = w, jr([S]);
            else {
              let O = function(z) {
                u[C].call(this, z);
              };
              u[H] = Cu(S, e, O, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          $e(e, C, w);
        else if (C === "autofocus")
          Sf(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (C === "__value" || C === "value" && w != null))
          e.value = e.__value = w;
        else if (C === "selected" && c)
          Zf(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = C;
          s || ($ = xf($));
          var g = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !g)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if ($ === "value") {
                let S = k.defaultValue;
                k.removeAttribute($), k.defaultValue = S, k.value = k.__value = H ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = S, k.checked = H ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else g || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && $e(e, $, w);
        }
    }
  }
  return l && Zt(!0), u;
}
function qi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Hu]: e.namespaceURI === O1
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
const Ma = class {
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
    return r.add(n), ut(this, or).set(t, r), $1(this, Sa, Nu).call(this).observe(t, ut(this, Jo)), () => {
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
        Ma.entries.set(t.target, t);
        for (var n of ut(this, or).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ot(Ma, "entries", /* @__PURE__ */ new WeakMap());
let qf = Ma;
var Bf = /* @__PURE__ */ new qf({
  box: "border-box"
});
function Fs(e, t, n) {
  var r = Bf.observe(e, () => n(e[t]));
  Rt(() => (Cn(() => n(e[t])), r));
}
function Gs(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function _n(e = {}, t, n, r) {
  return Rt(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Gs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Eo(() => {
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
  n.b.length && tf(() => {
    Us(t, r), fo(n.b);
  }), Gt(() => {
    const o = Cn(() => n.m.map(I1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Gt(() => {
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
  ), o = Mo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function en(e) {
  We === null && zi(), Br && We.l !== null ? Yf(We).m.push(e) : Gt(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  We === null && zi(), en(() => () => Cn(e));
}
function Xf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
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
      const a = Mo(i) ? i.slice() : [i], s = Xf(
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
function Yf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function cs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), gt;
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
function _e(e, t = gt) {
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
  function a(s, l = gt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || gt), s(
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
  return Wt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = gt;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : gt;
    }, p = o.map(
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
      fo(p), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Bo = !1, Ea = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: gt
  });
  if (r.store !== e && !(Ea in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = gt;
    else {
      var o = !0;
      r.unsubscribe = cs(e, (i) => {
        o ? r.source.v = i : Q(r.source, i);
      }), o = !1;
    }
  return e && Ea in n ? F(e) : f(r.source);
}
function Kf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = gt), e;
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
      co(e, Ea, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Wf(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
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
function wt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    jf
  );
}
const Ff = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Nr(0) }, Ff);
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
    if (t === Xn || t === es) return !1;
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
function Js(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & E1) !== 0, a = !Br || (n & V1) !== 0, s = (n & H1) !== 0, l = (n & P1) !== 0, u = !1, c;
  s ? [c, u] = Wf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Xn in e || es in e, v = s && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, p = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? p = Cn(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  c === void 0 && r !== void 0 && (v && a && F1(), c = b(), v && v(c));
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
    var g = (i ? Hr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Z1, $ = () => {
      var S = f(g);
      return S !== void 0 && (p = /** @type {V} */
      void 0), S === void 0 ? p : S;
    };
  }
  if ((n & jl) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(S, O) {
      return arguments.length > 0 ? ((!a || !O || C || u) && v(O ? $() : S), S) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ ie(c), H = /* @__PURE__ */ Hr(() => {
    var S = $(), O = f(k);
    return w ? (w = !1, O) : k.v = S;
  });
  return s && f(H), i || (H.equals = rs), function(S, O) {
    if (arguments.length > 0) {
      const z = O ? f(H) : a && s ? sn(S) : S;
      if (!H.equals(z)) {
        if (w = !0, Q(k, z), x && p !== void 0 && (p = z), Js(H))
          return S;
        Cn(() => f(H));
      }
      return S;
    }
    return Js(H) ? H.v : f(H);
  };
}
function Uf(e) {
  return new Jf(e);
}
var In, on;
class Jf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    $r(this, In), $r(this, on);
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
    ii(this, on, (t.hydrate ? Hf : _u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ii(this, In, i.$$events);
    for (const a of Object.keys(ut(this, on)))
      a === "$set" || a === "$destroy" || a === "$on" || co(this, a, {
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
      Pf(ut(this, on));
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
    ut(this, In)[t] = ut(this, In)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ut(this, In)[t].push(r), () => {
      ut(this, In)[t] = ut(this, In)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ut(this, on).$destroy();
  }
}
In = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
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
      }), this.$$me = nf(() => {
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
function Qf(e) {
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
var ev = { value: () => {
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
function tv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ei.prototype = Xi.prototype = {
  constructor: ei,
  on: function(e, t) {
    var n = this._, r = tv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = nv(n[o], e.name))) return o;
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
function nv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Qs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = ev, e = e.slice(0, r).concat(e.slice(r + 1));
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
function zu(e) {
  var t = Yi(e);
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
  return new Yt(r, this._parents);
}
function sv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function lv() {
  return [];
}
function Lu(e) {
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
  typeof e == "function" ? e = uv(e) : e = Lu(e);
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
var dv = Array.prototype.find;
function fv(e) {
  return function() {
    return dv.call(this.children, e);
  };
}
function vv() {
  return this.firstElementChild;
}
function pv(e) {
  return this.select(e == null ? vv : fv(typeof e == "function" ? e : Du(e)));
}
var gv = Array.prototype.filter;
function hv() {
  return Array.from(this.children);
}
function mv(e) {
  return function() {
    return gv.call(this.children, e);
  };
}
function yv(e) {
  return this.selectAll(e == null ? hv : mv(typeof e == "function" ? e : Du(e)));
}
function wv(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Yt(r, this._parents);
}
function Au(e) {
  return new Array(e.length);
}
function bv() {
  return new Yt(this._enter || this._groups.map(Au), this._parents);
}
function pi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
pi.prototype = {
  constructor: pi,
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
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new pi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Cv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = p = a.call(l, l.__data__, s, t) + "", u.has(p) ? o[s] = l : u.set(p, l));
  for (s = 0; s < d; ++s)
    p = a.call(e, i[s], s, i) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = i[s], u.delete(p)) : n[s] = new pi(e, i[s]);
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
    var c = r[u], d = o[u], v = d.length, p = Sv(e.call(c, c && c.__data__, u, r)), h = p.length, x = s[u] = new Array(h), b = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, d, x, b, $, p, t);
    for (var g = 0, C = 0, w, k; g < h; ++g)
      if (w = x[g]) {
        for (g >= C && (C = g + 1); !(k = b[C]) && ++C < h; ) ;
        w._next = k || null;
      }
  }
  return a = new Yt(a, r), a._enter = s, a._exit = l, a;
}
function Sv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Mv() {
  return new Yt(this._exit || this._groups.map(Au), this._parents);
}
function Ev(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Vv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (v[h] = p);
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
function Pv(e) {
  e || (e = Nv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Yt(o, this._parents).order();
}
function Nv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ov() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function zv() {
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
function Tv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Dv() {
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
function Rv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Zv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function qv(e, t) {
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
function Xv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Yv(e, t) {
  var n = Yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Rv : Iv : typeof t == "function" ? n.local ? Xv : Bv : n.local ? qv : Zv)(n, t));
}
function Iu(e) {
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
function jv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Fv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Kv : typeof t == "function" ? jv : Wv)(e, t, n ?? "")) : Lr(this.node(), e);
}
function Lr(e, t) {
  return e.style.getPropertyValue(t) || Iu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function ep(e) {
  return function() {
    qu(this, e);
  };
}
function tp(e) {
  return function() {
    Bu(this, e);
  };
}
function np(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Bu)(this, e);
  };
}
function rp(e, t) {
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? np : t ? ep : tp)(n, t));
}
function op() {
  this.textContent = "";
}
function ip(e) {
  return function() {
    this.textContent = e;
  };
}
function ap(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function sp(e) {
  return arguments.length ? this.each(e == null ? op : (typeof e == "function" ? ap : ip)(e)) : this.node().textContent;
}
function lp() {
  this.innerHTML = "";
}
function up(e) {
  return function() {
    this.innerHTML = e;
  };
}
function cp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function dp(e) {
  return arguments.length ? this.each(e == null ? lp : (typeof e == "function" ? cp : up)(e)) : this.node().innerHTML;
}
function fp() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vp() {
  return this.each(fp);
}
function pp() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function gp() {
  return this.each(pp);
}
function hp(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function mp() {
  return null;
}
function yp(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? mp : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function wp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bp() {
  return this.each(wp);
}
function xp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $p() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cp(e) {
  return this.select(e ? $p : xp);
}
function _p(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function kp(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Sp(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Mp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ep(e, t, n) {
  return function() {
    var r = this.__on, o, i = kp(t);
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
function Vp(e, t, n) {
  var r = Sp(e + ""), o, i = r.length, a;
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
  for (s = t ? Ep : Mp, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Iu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hp(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Pp(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Np(e, t) {
  return this.each((typeof t == "function" ? Pp : Hp)(e, t));
}
function* Op() {
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
function zp() {
  return this;
}
Yt.prototype = Ho.prototype = {
  constructor: Yt,
  select: av,
  selectAll: cv,
  selectChild: pv,
  selectChildren: yv,
  filter: wv,
  data: kv,
  enter: bv,
  exit: Mv,
  join: Ev,
  merge: Vv,
  selection: zp,
  order: Hv,
  sort: Pv,
  call: Ov,
  nodes: zv,
  node: Lv,
  size: Tv,
  empty: Dv,
  each: Av,
  attr: Yv,
  style: Fv,
  property: Qv,
  classed: rp,
  text: sp,
  html: dp,
  raise: vp,
  lower: gp,
  append: hp,
  insert: yp,
  remove: bp,
  clone: Cp,
  datum: _p,
  on: Vp,
  dispatch: Np,
  [Symbol.iterator]: Op
};
function Ft(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], Yu);
}
function Lp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
  if (e = Lp(e), t === void 0 && (t = e.currentTarget), t) {
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
const Tp = { passive: !1 }, mo = { capture: !0, passive: !1 };
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
function Dp(e) {
  return !e.ctrlKey && !e.button;
}
function Ap() {
  return this.parentNode;
}
function Ip(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Rp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zp() {
  var e = Dp, t = Ap, n = Ip, r = Rp, o = {}, i = Xi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Tp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var H = C(this, t.call(this, w, k), w, k, "mouse");
      H && (Ft(w.view).on("mousemove.drag", h, mo).on("mouseup.drag", x, mo), Ku(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, H("start", w));
    }
  }
  function h(w) {
    if (kr(w), !u) {
      var k = w.clientX - s, H = w.clientY - l;
      u = k * k + H * H > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    Ft(w.view).on("mousemove.drag mouseup.drag", null), Wu(w.view, u), kr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var H = w.changedTouches, S = t.call(this, w, k), O = H.length, z, D;
      for (z = 0; z < O; ++z)
        (D = C(this, S, w, k, H[z].identifier, H[z])) && (la(w), D("start", w, H[z]));
    }
  }
  function $(w) {
    var k = w.changedTouches, H = k.length, S, O;
    for (S = 0; S < H; ++S)
      (O = o[k[S].identifier]) && (kr(w), O("drag", w, k[S]));
  }
  function g(w) {
    var k = w.changedTouches, H = k.length, S, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < H; ++S)
      (O = o[k[S].identifier]) && (la(w), O("end", w, k[S]));
  }
  function C(w, k, H, S, O, z) {
    var D = i.copy(), I = an(z || H, k), L, Z, E;
    if ((E = n.call(w, new Ha("beforestart", {
      sourceEvent: H,
      target: v,
      identifier: O,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), S)) != null)
      return L = E.x - I[0] || 0, Z = E.y - I[1] || 0, function _(M, N, V) {
        var P = I, A;
        switch (M) {
          case "start":
            o[O] = _, A = a++;
            break;
          case "end":
            delete o[O], --a;
          // falls through
          case "drag":
            I = an(V || N, k), A = a;
            break;
        }
        D.call(
          M,
          w,
          new Ha(M, {
            sourceEvent: N,
            subject: E,
            target: v,
            identifier: O,
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
  return v.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Xo(!!w), v) : e;
  }, v.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Xo(w), v) : t;
  }, v.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Xo(w), v) : n;
  }, v.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Xo(!!w), v) : r;
  }, v.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? v : w;
  }, v.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, v) : Math.sqrt(d);
  }, v;
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
var yo = 0.7, gi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qp = /^#([0-9a-f]{3,8})$/, Bp = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Xp = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Yp = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Kp = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Wp = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), jp = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
  formatHex8: Fp,
  formatHsl: Gp,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function Fp() {
  return this.rgb().formatHex8();
}
function Gp() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = qp.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bp.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Xp.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Yp.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Kp.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wp.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = jp.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Up(e) {
  return e instanceof Po || (e = bo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Pa(e, t, n, r) {
  return arguments.length === 1 ? Up(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(zt, Pa, ju(Po, {
  brighter(e) {
    return e = e == null ? gi : Math.pow(gi, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
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
  formatHex8: Jp,
  formatRgb: al,
  toString: al
}));
function il() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Jp() {
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
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Fu(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Po || (e = bo(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new ln(a, s, l, e.opacity);
}
function Qp(e, t, n, r) {
  return arguments.length === 1 ? Fu(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(ln, Qp, ju(Po, {
  brighter(e) {
    return e = e == null ? gi : Math.pow(gi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new ln(this.h, this.s, this.l * e, this.opacity);
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
    return new ln(ll(this.h), Ko(this.s), Ko(this.l), hi(this.opacity));
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
function eg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function tg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function ng(e) {
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? tg(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? eg(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = ng(t);
  function r(o, i) {
    var a = n((o = Pa(o)).r, (i = Pa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Uu(o.opacity, i.opacity);
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
function rg(e) {
  return function() {
    return e;
  };
}
function og(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ig(e, t) {
  var n = Na.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Na.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Zn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? og(l[0].x) : rg(t) : (t = l.length, function(u) {
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
function ag(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function sg(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: Zn(u, d) }, { i: x - 2, x: Zn(c, v) });
    } else (d || v) && p.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Zn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Zn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: Zn(u, d) }, { i: x - 2, x: Zn(c, v) });
    } else (d !== 1 || v !== 1) && p.push(o(p) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(p) {
      for (var h = -1, x = v.length, b; ++h < x; ) d[(b = v[h]).i] = b.x(p);
      return d.join("");
    };
  };
}
var lg = ec(ag, "px, ", "px)", "deg)"), ug = ec(sg, ", ", ")", ")"), cg = 1e-12;
function dl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function dg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function fg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const vg = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], p = c - s, h = d - l, x = p * p + h * h, b, $;
    if (x < cg)
      $ = Math.log(v / u) / t, b = function(S) {
        return [
          s + S * p,
          l + S * h,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var g = Math.sqrt(x), C = (v * v - u * u + r * x) / (2 * u * n * g), w = (v * v - u * u - r * x) / (2 * v * n * g), k = Math.log(Math.sqrt(C * C + 1) - C), H = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (H - k) / t, b = function(S) {
        var O = S * $, z = dl(k), D = u / (n * g) * (z * fg(t * O + k) - dg(k));
        return [
          s + D * p,
          l + D * h,
          u * z / dl(t * O + k)
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
var Tr = 0, io = 0, no = 0, tc = 1e3, mi, ao, yi = 0, dr = 0, Ki = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ps() {
  return dr || (nc(pg), dr = xo.now() + Ki);
}
function pg() {
  dr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = rc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ps() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : mi = this, ao = this), this._call = e, this._time = n, Oa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Oa());
  }
};
function rc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function gg() {
  ps(), ++Tr;
  for (var e = mi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tr;
}
function fl() {
  dr = (yi = xo.now()) + Ki, Tr = io = 0;
  try {
    gg();
  } finally {
    Tr = 0, mg(), dr = 0;
  }
}
function hg() {
  var e = xo.now(), t = e - yi;
  t > tc && (Ki -= t, yi = e);
}
function mg() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  ao = e, Oa(r);
}
function Oa(e) {
  if (!Tr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - xo.now() - Ki)), no && (no = clearInterval(no))) : (no || (yi = xo.now(), no = setInterval(hg, tc)), Tr = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var yg = Xi("start", "end", "cancel", "interrupt"), wg = [], oc = 0, pl = 1, za = 2, ti = 3, gl = 4, La = 5, ni = 6;
function Wi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  bg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: yg,
    tween: wg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: oc
  });
}
function gs(e, t) {
  var n = pn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function Mn(e, t) {
  var n = pn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function pn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function bg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = rc(i, 0, n.time);
  function i(u) {
    n.state = pl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, v, p;
    if (n.state !== pl) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === ti) return vl(a);
        p.state === gl ? (p.state = ni, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < t && (p.state = ni, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ti && (n.state = gl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = za, n.on.call("start", e, e.__data__, n.index, n.group), n.state === za) {
      for (n.state = ti, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = p);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = La, 1), d = -1, v = o.length; ++d < v; )
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
function xg(e) {
  return this.each(function() {
    ri(this, e);
  });
}
function $g(e, t) {
  var n, r;
  return function() {
    var o = Mn(this, e), i = o.tween;
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
function Cg(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Mn(this, e), a = i.tween;
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
function _g(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = pn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? $g : Cg)(n, e, t));
}
function hs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return pn(o, r).value[t];
  };
}
function ic(e, t) {
  var n;
  return (typeof t == "number" ? Zn : t instanceof bo ? ul : (n = bo(t)) ? (t = n, ul) : ig)(e, t);
}
function kg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Eg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Vg(e, t, n) {
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
function Pg(e, t) {
  var n = Yi(e), r = n === "transform" ? ug : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hg : Vg)(n, r, hs(this, "attr." + e, t)) : t == null ? (n.local ? Sg : kg)(n) : (n.local ? Eg : Mg)(n, r, t));
}
function Ng(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Og(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function zg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Og(e, i)), n;
  }
  return o._value = t, o;
}
function Lg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ng(e, i)), n;
  }
  return o._value = t, o;
}
function Tg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Yi(e);
  return this.tween(n, (r.local ? zg : Lg)(r, t));
}
function Dg(e, t) {
  return function() {
    gs(this, e).delay = +t.apply(this, arguments);
  };
}
function Ag(e, t) {
  return t = +t, function() {
    gs(this, e).delay = t;
  };
}
function Ig(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dg : Ag)(t, e)) : pn(this.node(), t).delay;
}
function Rg(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function Zg(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function qg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Rg : Zg)(t, e)) : pn(this.node(), t).duration;
}
function Bg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function Xg(e) {
  var t = this._id;
  return arguments.length ? this.each(Bg(t, e)) : pn(this.node(), t).ease;
}
function Yg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mn(this, e).ease = n;
  };
}
function Kg(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Yg(this._id, e));
}
function Wg(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function jg(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, p = 0; p < c; ++p)
      (v = l[p] || u[p]) && (d[p] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Tn(a, this._parents, this._name, this._id);
}
function Fg(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Gg(e, t, n) {
  var r, o, i = Fg(t) ? gs : Mn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Ug(e, t) {
  var n = this._id;
  return arguments.length < 2 ? pn(this.node(), n).on.on(e) : this.each(Gg(n, e, t));
}
function Jg(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Qg() {
  return this.on("end.remove", Jg(this._id));
}
function eh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Wi(u[v], t, n, v, u, pn(c, n)));
  return new Tn(i, this._parents, t, n);
}
function th(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), p, h = pn(c, n), x = 0, b = v.length; x < b; ++x)
          (p = v[x]) && Wi(p, t, n, x, v, h);
        i.push(v), a.push(c);
      }
  return new Tn(i, a, t, n);
}
var nh = Ho.prototype.constructor;
function rh() {
  return new nh(this._groups, this._parents);
}
function oh(e, t) {
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
function ih(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Lr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function ah(e, t, n) {
  var r, o, i;
  return function() {
    var a = Lr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Lr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function sh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Mn(this, e), u = l.on, c = l.value[i] == null ? s || (s = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function lh(e, t, n) {
  var r = (e += "") == "transform" ? lg : ic;
  return t == null ? this.styleTween(e, oh(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, ah(e, r, hs(this, "style." + e, t))).each(sh(this._id, e)) : this.styleTween(e, ih(e, r, t), n).on("end.style." + e, null);
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
function ph(e) {
  return this.tween("text", typeof e == "function" ? vh(hs(this, "text", e)) : fh(e == null ? "" : e + ""));
}
function gh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function hh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && gh(o)), t;
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
  for (var e = this._name, t = this._id, n = sc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = pn(l, t);
        Wi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function wh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Mn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var bh = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++bh;
}
var Vn = Ho.prototype;
Tn.prototype = {
  constructor: Tn,
  select: eh,
  selectAll: th,
  selectChild: Vn.selectChild,
  selectChildren: Vn.selectChildren,
  filter: Wg,
  merge: jg,
  selection: rh,
  transition: yh,
  call: Vn.call,
  nodes: Vn.nodes,
  node: Vn.node,
  size: Vn.size,
  empty: Vn.empty,
  each: Vn.each,
  on: Ug,
  attr: Pg,
  attrTween: Tg,
  style: lh,
  styleTween: dh,
  text: ph,
  textTween: mh,
  remove: Qg,
  tween: _g,
  delay: Ig,
  duration: qg,
  ease: Xg,
  easeVarying: Kg,
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
  e instanceof Tn ? (t = e._id, e = e._name) : (t = sc(), (n = $h).time = ps(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Wi(l, e, t, u, a, n || Ch(l, t));
  return new Tn(r, this._parents, e, t);
}
Ho.prototype.interrupt = xg;
Ho.prototype.transition = _h;
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
function Sh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Mh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hl() {
  return this.__zoom || ji;
}
function Eh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Vh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Hh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function uc() {
  var e = Sh, t = Mh, n = Hh, r = Eh, o = Vh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = vg, u = Xi("start", "zoom", "end"), c, d, v, p = 500, h = 150, x = 0, b = 10;
  function $(E) {
    E.property("__zoom", hl).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(E, _, M, N) {
    var V = E.selection ? E.selection() : E;
    V.property("__zoom", hl), E !== V ? k(E, _, M, N) : V.interrupt().each(function() {
      H(this, arguments).event(N).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(E, _, M, N) {
    $.scaleTo(E, function() {
      var V = this.__zoom.k, P = typeof _ == "function" ? _.apply(this, arguments) : _;
      return V * P;
    }, M, N);
  }, $.scaleTo = function(E, _, M, N) {
    $.transform(E, function() {
      var V = t.apply(this, arguments), P = this.__zoom, A = M == null ? w(V) : typeof M == "function" ? M.apply(this, arguments) : M, B = P.invert(A), K = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(g(P, K), A, B), V, a);
    }, M, N);
  }, $.translateBy = function(E, _, M, N) {
    $.transform(E, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, N);
  }, $.translateTo = function(E, _, M, N, V) {
    $.transform(E, function() {
      var P = t.apply(this, arguments), A = this.__zoom, B = N == null ? w(P) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(ji.translate(B[0], B[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), P, a);
    }, N, V);
  };
  function g(E, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === E.k ? E : new Hn(_, E.x, E.y);
  }
  function C(E, _, M) {
    var N = _[0] - M[0] * E.k, V = _[1] - M[1] * E.k;
    return N === E.x && V === E.y ? E : new Hn(E.k, N, V);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, _, M, N) {
    E.on("start.zoom", function() {
      H(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var V = this, P = arguments, A = H(V, P).event(N), B = t.apply(V, P), K = M == null ? w(B) : typeof M == "function" ? M.apply(V, P) : M, G = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), J = V.__zoom, W = typeof _ == "function" ? _.apply(V, P) : _, he = l(J.invert(K).concat(G / J.k), W.invert(K).concat(G / W.k));
      return function(ae) {
        if (ae === 1) ae = W;
        else {
          var ye = he(ae), se = G / ye[2];
          ae = new Hn(se, K[0] - ye[0] * se, K[1] - ye[1] * se);
        }
        A.zoom(null, ae);
      };
    });
  }
  function H(E, _, M) {
    return !M && E.__zooming || new S(E, _);
  }
  function S(E, _) {
    this.that = E, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, _), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, _) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var _ = Ft(this.that).datum();
      u.call(
        E,
        this.that,
        new kh(E, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        _
      );
    }
  };
  function O(E, ..._) {
    if (!e.apply(this, arguments)) return;
    var M = H(this, _).event(E), N = this.__zoom, V = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), P = an(E);
    if (M.wheel)
      (M.mouse[0][0] !== P[0] || M.mouse[0][1] !== P[1]) && (M.mouse[1] = N.invert(M.mouse[0] = P)), clearTimeout(M.wheel);
    else {
      if (N.k === V) return;
      M.mouse = [P, N.invert(P)], ri(this), M.start();
    }
    ro(E), M.wheel = setTimeout(A, h), M.zoom("mouse", n(C(g(N, V), M.mouse[0], M.mouse[1]), M.extent, a));
    function A() {
      M.wheel = null, M.end();
    }
  }
  function z(E, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var M = E.currentTarget, N = H(this, _, !0).event(E), V = Ft(E.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", G, !0), P = an(E, M), A = E.clientX, B = E.clientY;
    Ku(E.view), da(E), N.mouse = [P, this.__zoom.invert(P)], ri(this), N.start();
    function K(J) {
      if (ro(J), !N.moved) {
        var W = J.clientX - A, he = J.clientY - B;
        N.moved = W * W + he * he > x;
      }
      N.event(J).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = an(J, M), N.mouse[1]), N.extent, a));
    }
    function G(J) {
      V.on("mousemove.zoom mouseup.zoom", null), Wu(J.view, N.moved), ro(J), N.event(J).end();
    }
  }
  function D(E, ..._) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, N = an(E.changedTouches ? E.changedTouches[0] : E, this), V = M.invert(N), P = M.k * (E.shiftKey ? 0.5 : 2), A = n(C(g(M, P), N, V), t.apply(this, _), a);
      ro(E), s > 0 ? Ft(this).transition().duration(s).call(k, A, N, E) : Ft(this).call($.transform, A, N, E);
    }
  }
  function I(E, ..._) {
    if (e.apply(this, arguments)) {
      var M = E.touches, N = M.length, V = H(this, _, E.changedTouches.length === N).event(E), P, A, B, K;
      for (da(E), A = 0; A < N; ++A)
        B = M[A], K = an(B, this), K = [K, this.__zoom.invert(K), B.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== K[2] && (V.touch1 = K, V.taps = 0) : (V.touch0 = K, P = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (V.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, p)), ri(this), V.start());
    }
  }
  function L(E, ..._) {
    if (this.__zooming) {
      var M = H(this, _).event(E), N = E.changedTouches, V = N.length, P, A, B, K;
      for (ro(E), P = 0; P < V; ++P)
        A = N[P], B = an(A, this), M.touch0 && M.touch0[2] === A.identifier ? M.touch0[0] = B : M.touch1 && M.touch1[2] === A.identifier && (M.touch1[0] = B);
      if (A = M.that.__zoom, M.touch1) {
        var G = M.touch0[0], J = M.touch0[1], W = M.touch1[0], he = M.touch1[1], ae = (ae = W[0] - G[0]) * ae + (ae = W[1] - G[1]) * ae, ye = (ye = he[0] - J[0]) * ye + (ye = he[1] - J[1]) * ye;
        A = g(A, Math.sqrt(ae / ye)), B = [(G[0] + W[0]) / 2, (G[1] + W[1]) / 2], K = [(J[0] + he[0]) / 2, (J[1] + he[1]) / 2];
      } else if (M.touch0) B = M.touch0[0], K = M.touch0[1];
      else return;
      M.zoom("touch", n(C(A, B, K), M.extent, a));
    }
  }
  function Z(E, ..._) {
    if (this.__zooming) {
      var M = H(this, _).event(E), N = E.changedTouches, V = N.length, P, A;
      for (da(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, p), P = 0; P < V; ++P)
        A = N[P], M.touch0 && M.touch0[2] === A.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === A.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (A = an(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < b)) {
        var B = Ft(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : jo(+E), $) : r;
  }, $.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : jo(!!E), $) : e;
  }, $.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : jo(!!E), $) : o;
  }, $.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : jo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), $) : t;
  }, $.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(E) {
    return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(E) {
    return arguments.length ? (n = E, $) : n;
  }, $.duration = function(E) {
    return arguments.length ? (s = +E, $) : s;
  }, $.interpolate = function(E) {
    return arguments.length ? (l = E, $) : l;
  }, $.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? $ : E;
  }, $.clickDistance = function(E) {
    return arguments.length ? (x = (E = +E) * E, $) : Math.sqrt(x);
  }, $.tapDistance = function(E) {
    return arguments.length ? (b = +E, $) : b;
  }, $;
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
var Wn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Wn || (Wn = {}));
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
var Mr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mr || (Mr = {}));
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
function Ph(e, t) {
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
function Nh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Oh = (e) => "id" in e && "source" in e && "target" in e, zh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), No = (e, t = [0, 0]) => {
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
}, cc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...zo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const p = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, x = Co(s, Ir(u)), b = (p ?? 0) * (h ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, Da = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Th(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Dh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Th(e, a), l = Oo(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Ah({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Dr.error005());
    else {
      const p = s.measured.width, h = s.measured.height;
      p && h && (d = [
        [l, u],
        [l + p, u + h]
      ]);
    }
  else s && Rr(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = Rr(d) ? vr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Dr.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: v
  };
}
async function dc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const v = i.has(d.id), p = !v && d.parentId && a.find((h) => h.id === d.parentId);
    (v || p) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Da(a, l);
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
const Ar = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ar(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ar(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function fc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
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
}, pc = (e, t) => Gi(Fi(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), Ih = (e, t) => {
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
function Rh(e, t, n) {
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
function Zh(e, t, n, r, o, i) {
  const { x: a, y: s } = Ci(e, [t, n, r]), { x: l, y: u } = Ci({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = Rh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ar(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, p = t / 2 - d * c, h = n / 2 - v * c, x = Zh(e, p, h, c, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: p - b.left + b.right,
    y: h - b.top + b.bottom,
    zoom: c
  };
}, _i = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Rr(e) {
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
function qh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Bh() {
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
}), Xh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Yh = ["INPUT", "SELECT", "TEXTAREA"];
function Kh(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Yh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
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
function Wh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
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
  }), [d, v, p, h] = Wh({
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
    p,
    h
  ];
}
function wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
}, Qh = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function e0({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Qh({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let p = [], h, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [g, C, w, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? g, x = o.y ?? C;
    const H = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], S = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? p = d === "x" ? H : S : p = d === "x" ? S : H;
  } else {
    const H = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? p = a.x === v ? S : H : p = a.y === v ? H : S, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const Z = Math.min(i - 1, i - L);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * Z : $[d] = (u[d] > n[d] ? -1 : 1) * Z;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", Z = a[d] === s[L], E = l[L] > u[L], _ = l[L] < u[L];
      (a[d] === 1 && (!Z && E || Z && _) || a[d] !== 1 && (!Z && _ || Z && E)) && (p = d === "x" ? H : S);
    }
    const O = { x: l.x + b.x, y: l.y + b.y }, z = { x: u.x + $.x, y: u.y + $.y }, D = Math.max(Math.abs(O.x - p[0].x), Math.abs(z.x - p[0].x)), I = Math.max(Math.abs(O.y - p[0].y), Math.abs(z.y - p[0].y));
    D >= I ? (h = (O.x + z.x) / 2, x = p[0].y) : (h = p[0].x, x = (O.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...p,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], h, x, w, k];
}
function t0(e, t, n, r) {
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
  const [c, d, v, p, h] = e0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let g = "";
    return $ > 0 && $ < c.length - 1 ? g = t0(c[$ - 1], b, c[$ + 1], a) : g = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += g, x;
  }, ""), d, v, p, h];
}
function kl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function n0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!kl(n) || !kl(r))
    return null;
  const o = n.internals.handleBounds || Sl(n.handles), i = r.internals.handleBounds || Sl(r.handles), a = Ml((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Ml(
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
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
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
function Ml(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ra(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function r0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ra(l, t);
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
      const i = No(o, r.nodeOrigin), a = Rr(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function bc(e, t, n, r) {
  var o, i;
  const a = xs(i0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = No(c, a.nodeOrigin), p = Rr(c.extent) ? c.extent : a.nodeExtent, h = vr(v, p, tr(c));
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
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = l0(e, l, i, a, u), { positionAbsolute: p } = e.internals, h = c !== p.x || d !== p.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : p,
      z: v
    }
  });
}
function xc(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function l0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = No(e, n), u = Rr(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = fc(c, s, t));
  const d = xc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function u0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Ir(l), c = pc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = tr(l), p = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), g = (b - v.width) * p[0], C = ($ - v.height) * p[1];
    (h > 0 || x > 0 || g || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + g,
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
        width: b + (h ? p[0] * h - g : 0),
        height: $ + (x ? p[1] * x - C : 0)
      }
    });
  }), i;
}
function c0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const v of e.values()) {
    const p = t.get(v.id);
    if (!p)
      continue;
    if (p.hidden) {
      t.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const h = hc(v.nodeElement), x = p.measured.width !== h.width || p.measured.height !== h.height;
    if (h.width && h.height && (x || !p.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = Rr(p.extent) ? p.extent : i;
      let { positionAbsolute: g } = p.internals;
      p.parentId && p.extent === "parent" ? g = fc(g, h, t.get(p.parentId)) : $ && (g = vr(g, $, h));
      const C = {
        ...p,
        measured: h,
        internals: {
          ...p.internals,
          positionAbsolute: g,
          handleBounds: {
            source: xl("source", v.nodeElement, b, c, p.id),
            target: xl("target", v.nodeElement, b, c, p.id)
          }
        }
      };
      t.set(p.id, C), p.parentId && $s(C, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: p.id,
        type: "dimensions",
        dimensions: h
      }), p.expandParent && p.parentId && d.push({
        id: p.id,
        parentId: p.parentId,
        rect: Ir(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const v = u0(d, t, n, o);
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
function $c(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    El("source", l, c, e, o, a), El("target", l, u, e, i, s), t.set(r.id, r);
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
function v0(e, t, n, r) {
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
function p0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, p = !1;
  function h({ noDragClassName: b, handleSelector: $, domNode: g, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = Ft(g);
    function H({ x: D, y: I }, L) {
      const { nodeLookup: Z, nodeExtent: E, snapGrid: _, snapToGrid: M, nodeOrigin: N, onNodeDrag: V, onSelectionDrag: P, onError: A, updateNodePositions: B } = t();
      i = { x: D, y: I };
      let K = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const J = Oo(s);
        G = Aa(J);
      }
      for (const [J, W] of s) {
        if (!Z.has(J))
          continue;
        let he = { x: D - W.distance.x, y: I - W.distance.y };
        M && (he = ys(he, _));
        let ae = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !W.extent) {
          const { positionAbsolute: Se } = W.internals, we = Se.x - G.x + E[0][0], He = Se.x + W.measured.width - G.x2 + E[1][0], le = Se.y - G.y + E[0][1], U = Se.y + W.measured.height - G.y2 + E[1][1];
          ae = [
            [we, le],
            [He, U]
          ];
        }
        const { position: ye, positionAbsolute: se } = Ah({
          nodeId: J,
          nextPosition: he,
          nodeLookup: Z,
          nodeExtent: ae,
          nodeOrigin: N,
          onError: A
        });
        K = K || W.position.x !== ye.x || W.position.y !== ye.y, W.position = ye, W.internals.positionAbsolute = se;
      }
      if (K && (B(s, !0), L && (r || V || !w && P))) {
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
      const [E, _] = vc(u, c, L);
      (E !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - E / D[2], i.y = (i.y ?? 0) - _ / D[2], await I({ x: E, y: _ }) && H(i, null)), a = requestAnimationFrame(S);
    }
    function O(D) {
      var I;
      const { nodeLookup: L, multiSelectionActive: Z, nodesDraggable: E, transform: _, snapGrid: M, snapToGrid: N, selectNodesOnDrag: V, onNodeDragStart: P, onSelectionDragStart: A, unselectNodesAndEdges: B } = t();
      d = !0, (!V || !C) && !Z && w && ((I = L.get(w)) != null && I.selected || B()), C && V && w && (e == null || e(w));
      const K = fa(D.sourceEvent, { transform: _, snapGrid: M, snapToGrid: N, containerBounds: c });
      if (i = K, s = v0(L, E, K, w), s.size > 0 && (n || P || !w && A)) {
        const [G, J] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(D.sourceEvent, s, G, J), P == null || P(D.sourceEvent, G, J), w || A == null || A(D.sourceEvent, J);
      }
    }
    const z = Zp().clickDistance(k).on("start", (D) => {
      const { domNode: I, nodeDragThreshold: L, transform: Z, snapGrid: E, snapToGrid: _ } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, p = !1, L === 0 && O(D), i = fa(D.sourceEvent, { transform: Z, snapGrid: E, snapToGrid: _, containerBounds: c }), u = zn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: I, transform: L, snapGrid: Z, snapToGrid: E, nodeDragThreshold: _, nodeLookup: M } = t(), N = fa(D.sourceEvent, { transform: L, snapGrid: Z, snapToGrid: E, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !M.has(w)) && (p = !0), !p) {
        if (!l && I && d && (l = !0, S()), !d) {
          const V = N.xSnapped - (i.x ?? 0), P = N.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + P * P) > _ && O(D);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && d && (u = zn(D.sourceEvent, c), H(N, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || p) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: L, onNodeDragStop: Z, onSelectionDragStop: E } = t();
        if (L(s, !1), o || Z || !w && E) {
          const [_, M] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, _, M), Z == null || Z(D.sourceEvent, _, M), w || E == null || E(D.sourceEvent, M);
        }
      }
    }).filter((D) => {
      const I = D.target;
      return !D.button && (!b || !Vl(I, `.${b}`, g)) && (!$ || Vl(I, $, g));
    });
    v.call(z);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
    destroy: x
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
const h0 = 250;
function m0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = g0(e, n, t + h0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: p } = _o(u, d, d.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(p - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: v, y: p }], s = h) : h === s && a.push({ ...d, x: v, y: p }));
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
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ..._o(u, d, d.position, !0) } : d;
}
function kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function y0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function w0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: p, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Sc, onReconnectEnd: g, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: H }) {
  const S = Xh(e.target);
  let O = 0, z;
  const { x: D, y: I } = zn(e), L = S == null ? void 0 : S.elementFromPoint(D, I), Z = kc(i, L), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !Z)
    return;
  const _ = _c(o, Z, r, l, t);
  if (!_)
    return;
  let M = zn(e, E), N = !1, V = null, P = !1, A = null;
  function B() {
    if (!c || !E)
      return;
    const [ye, se] = vc(M, E, H);
    v({ x: ye, y: se }), O = requestAnimationFrame(B);
  }
  const K = {
    ..._,
    nodeId: o,
    type: Z,
    position: _.position
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
  C(J);
  let W = J;
  h == null || h(e, { nodeId: o, handleId: r, handleType: Z });
  function he(ye) {
    if (!k() || !K) {
      ae(ye);
      return;
    }
    const se = w();
    M = zn(ye, E), z = m0(zo(M, se, !1, [1, 1]), n, l, K), N || (B(), N = !0);
    const Se = Mc(ye, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    A = Se.handleDomNode, V = Se.connection, P = y0(!!z, Se.isValid);
    const we = {
      // from stays the same
      ...W,
      isValid: P,
      to: z && P ? Ci({ x: z.x, y: z.y }, se) : M,
      toHandle: Se.toHandle,
      toPosition: P && Se.toHandle ? Se.toHandle.position : ml[K.position],
      toNode: Se.toHandle ? l.get(Se.toHandle.nodeId) : null
    };
    P && z && W.toHandle && we.toHandle && W.toHandle.type === we.toHandle.type && W.toHandle.nodeId === we.toHandle.nodeId && W.toHandle.id === we.toHandle.id && W.to.x === we.to.x && W.to.y === we.to.y || (C(we), W = we);
  }
  function ae(ye) {
    (z || A) && V && P && (x == null || x(V));
    const { inProgress: se, ...Se } = W, we = {
      ...Se,
      toPosition: W.toHandle ? W.toPosition : null
    };
    b == null || b(ye, we), i && (g == null || g(ye, we)), p(), cancelAnimationFrame(O), N = !1, P = !1, V = null, A = null, S.removeEventListener("mousemove", he), S.removeEventListener("mouseup", ae), S.removeEventListener("touchmove", he), S.removeEventListener("touchend", ae);
  }
  S.addEventListener("mousemove", he), S.addEventListener("mouseup", ae), S.addEventListener("touchmove", he), S.addEventListener("touchend", ae);
}
function Mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: h } = zn(e), x = a.elementFromPoint(p, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const g = kc(void 0, b), C = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), H = b.classList.contains("connectableend");
    if (!C || !g)
      return $;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = S;
    const O = k && H && (n === fr.Strict ? d && g === "source" || !d && g === "target" : C !== r || w !== o);
    $.isValid = O && u(S), $.toHandle = _c(C, g, w, c, n, !1);
  }
  return $;
}
const b0 = {
  onPointerDown: w0,
  isValid: Mc
};
function x0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: p = !1 }) {
    const h = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, H = w[2] * Math.pow(2, k);
      t.scaleTo(H);
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
      ], H = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1), O = {
        x: w[0] - H[0] * S,
        y: w[1] - H[1] * S
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: w[2]
      }, z, s);
    }, g = uc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? h : null);
    o.call(g, {});
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
const $0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ui = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), pa = ({ x: e, y: t, zoom: n }) => ji.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Ec = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ga = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && _i() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function C0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = an(c), $ = Vc(c), g = d * Math.pow(2, $);
      r.scaleTo(n, g, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let p = o === Wn.Vertical ? 0 : c.deltaX * v, h = o === Wn.Horizontal ? 0 : c.deltaY * v;
    !_i() && c.shiftKey && o !== Wn.Vertical && (p = c.deltaY * v, h = 0), r.translateBy(
      n,
      -(p / d) * i,
      -(h / d) * i,
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
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Cr(r, e);
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
    e.usedRightMouseButton = !!(n && Ec(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ui(i.transform)));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Ec(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && $0(e.prevViewport, a.transform))) {
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
    const v = e || t, p = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Cr(c, `${u}-flow__node`) || Cr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Cr(c, s) && c.type === "wheel" || Cr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !p && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
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
  }, d = e.getBoundingClientRect(), v = uc().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), p = Ft(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Ar(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = p.on("wheel.zoom"), x = p.on("dblclick.zoom");
  v.wheelDelta(Vc);
  function b(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.transform(ga(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: L, noPanClassName: Z, onPaneContextMenu: E, userSelectionActive: _, panOnScroll: M, panOnDrag: N, panOnScrollMode: V, panOnScrollSpeed: P, preventScrolling: A, zoomOnPinch: B, zoomOnScroll: K, zoomOnDoubleClick: G, zoomActivationKeyPressed: J, lib: W, onTransformChange: he }) {
    _ && !c.isZoomingOrPanning && g();
    const ae = M && !J && !_ ? C0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: p,
      d3Zoom: v,
      panOnScrollMode: V,
      panOnScrollSpeed: P,
      zoomOnPinch: B,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : _0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", ae, { passive: !1 }), !_) {
      const se = k0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", se);
      const Se = S0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: he
      });
      v.on("zoom", Se);
      const we = M0({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: M,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", we);
    }
    const ye = E0({
      zoomActivationKeyPressed: J,
      panOnDrag: N,
      zoomOnScroll: K,
      panOnScroll: M,
      zoomOnDoubleClick: G,
      zoomOnPinch: B,
      userSelectionActive: _,
      noPanClassName: Z,
      noWheelClassName: L,
      lib: W
    });
    v.filter(ye), G ? p.on("dblclick.zoom", x) : p.on("dblclick.zoom", null);
  }
  function g() {
    v.on("zoom", null);
  }
  async function C(L, Z, E) {
    const _ = pa(L), M = v == null ? void 0 : v.constrain()(_, Z, E);
    return M && await b(M), new Promise((N) => N(M));
  }
  async function w(L, Z) {
    const E = pa(L);
    return await b(E, Z), new Promise((_) => _(E));
  }
  function k(L) {
    if (p) {
      const Z = pa(L), E = p.property("__zoom");
      (E.k !== L.zoom || E.x !== L.x || E.y !== L.y) && (v == null || v.transform(p, Z, null, { sync: !0 }));
    }
  }
  function H() {
    const L = p ? lc(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.scaleTo(ga(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function O(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.scaleBy(ga(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function z(L) {
    v == null || v.scaleExtent(L);
  }
  function D(L) {
    v == null || v.translateExtent(L);
  }
  function I(L) {
    const Z = !Pn(L) || L < 0 ? 0 : L;
    v == null || v.clickDistance(Z);
  }
  return {
    update: $,
    destroy: g,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: H,
    scaleTo: S,
    scaleBy: O,
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
var H0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(G, "$connectable", n), i = () => ne(ye, "$connectionRadius", n), a = () => ne(he, "$domNode", n), s = () => ne(ae, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(we, "$lib", n), c = () => ne(Ne, "$autoPanOnConnect", n), d = () => ne(Me, "$flowId", n), v = () => ne(Se, "$isValidConnectionStore", n), p = () => ne(le, "$onedgecreate", n), h = () => ne(ue, "$onConnectAction", n), x = () => ne(de, "$onConnectStartAction", n), b = () => ne(oe, "$onConnectEndAction", n), $ = () => ne(se, "$viewport", n), g = () => ne(et, "$connection", n), C = () => ne(De, "$edges", n), w = () => ne(Te, "$connectionLookup", n), k = /* @__PURE__ */ ie(), H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie(), D = /* @__PURE__ */ ie(), I = /* @__PURE__ */ ie(), L = /* @__PURE__ */ ie();
  let Z = y(t, "id", 12, void 0), E = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => Pe.Top), M = y(t, "style", 12, void 0), N = y(t, "isValidConnection", 12, void 0), V = y(t, "onconnect", 12, void 0), P = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), B = y(t, "class", 12, void 0);
  const K = ur("svelteflow__node_id"), G = ur("svelteflow__node_connectable"), J = Fe(), {
    connectionMode: W,
    domNode: he,
    nodeLookup: ae,
    connectionRadius: ye,
    viewport: se,
    isValidConnection: Se,
    lib: we,
    addEdge: He,
    onedgecreate: le,
    panBy: U,
    cancelConnection: Ee,
    updateConnection: j,
    autoPanOnConnect: Ne,
    edges: De,
    connectionLookup: Te,
    onconnect: ue,
    onconnectstart: de,
    onconnectend: oe,
    flowId: Me,
    connection: et
  } = J;
  function tt(Le) {
    const ot = mc(Le);
    (ot && Le.button === 0 || !ot) && b0.onPointerDown(Le, {
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
      isValidConnection: N() ?? v(),
      updateConnection: j,
      cancelConnection: Ee,
      panBy: U,
      onConnect: (qe) => {
        var Ie;
        const it = p() ? p()(qe) : qe;
        it && (He(it), (Ie = h()) == null || Ie(qe));
      },
      onConnectStart: (qe, Ie) => {
        var it;
        (it = x()) == null || it(qe, {
          nodeId: Ie.nodeId,
          handleId: Ie.handleId,
          handleType: Ie.handleType
        });
      },
      onConnectEnd: (qe, Ie) => {
        var it;
        (it = b()) == null || it(qe, Ie);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let ee = /* @__PURE__ */ ie(null), Ye = /* @__PURE__ */ ie();
  ge(() => te(E()), () => {
    Q(k, E() === "target");
  }), ge(
    () => (te(A()), o()),
    () => {
      Q(H, A() !== void 0 ? A() : o());
    }
  ), ge(() => te(Z()), () => {
    Q(S, Z() || null);
  }), ge(
    () => (te(V()), te(P()), C(), w(), te(E()), te(Z())),
    () => {
      (V() || P()) && (C(), Q(Ye, w().get(`${K}-${E()}${Z() ? `-${Z()}` : ""}`)));
    }
  ), ge(
    () => (f(ee), f(Ye), te(P()), te(V())),
    () => {
      if (f(ee) && !Ph(f(Ye), f(ee))) {
        const Le = f(Ye) ?? /* @__PURE__ */ new Map();
        yl(f(ee), Le, P()), yl(Le, f(ee), V());
      }
      Q(ee, f(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => g(), () => {
    Q(O, !!g().fromHandle);
  }), ge(
    () => (g(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(z, ((Le = g().fromHandle) == null ? void 0 : Le.nodeId) === K && ((ot = g().fromHandle) == null ? void 0 : ot.type) === E() && ((qe = g().fromHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), ge(
    () => (g(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(D, ((Le = g().toHandle) == null ? void 0 : Le.nodeId) === K && ((ot = g().toHandle) == null ? void 0 : ot.type) === E() && ((qe = g().toHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), ge(
    () => (l(), g(), te(E()), f(S)),
    () => {
      var Le, ot, qe;
      Q(I, l() === fr.Strict ? ((Le = g().fromHandle) == null ? void 0 : Le.type) !== E() : K !== ((ot = g().fromHandle) == null ? void 0 : ot.nodeId) || f(S) !== ((qe = g().fromHandle) == null ? void 0 : qe.id));
    }
  ), ge(() => (f(D), g()), () => {
    Q(L, f(D) && g().isValid);
  }), yt(), Ae();
  var fe = H0();
  $e(fe, "data-nodeid", K);
  let tn;
  var nn = X(fe);
  xt(nn, t, "default", {}), q(fe), Ce(
    (Le, ot) => {
      $e(fe, "data-handleid", f(S)), $e(fe, "data-handlepos", _()), $e(fe, "data-id", `${d() ?? ""}-${K ?? ""}-${(Z() || "") ?? ""}-${E() ?? ""}`), tn = $t(fe, 1, Le, null, tn, ot), ft(fe, M());
    },
    [
      () => vn(Vt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        B()
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
        connectionindicator: f(H) && (!f(O) || f(I))
      })
    ],
    xe
  ), nt("mousedown", fe, tt), nt("touchstart", fe, tt), T(e, fe);
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
      return _();
    },
    set position(Le) {
      _(Le), m();
    },
    get style() {
      return M();
    },
    set style(Le) {
      M(Le), m();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Le) {
      N(Le), m();
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
      return B();
    },
    set class(Le) {
      B(Le), m();
    }
  });
  return r(), hn;
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
var P0 = /* @__PURE__ */ re("<!> <!>", 1);
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
  Ae();
  var a = P0(), s = be(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = R(s), c = R(u);
  const d = /* @__PURE__ */ xe(() => i() ?? Pe.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Ce(() => {
    var v;
    return ct(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), T(e, a), pe({
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
  Ae(), ze();
  var i = N0(), a = be(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Bottom);
  return Un(s, {
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
ce(Hc, { data: {}, sourcePosition: {} }, [], [], !0);
var O0 = /* @__PURE__ */ re(" <!>", 1);
function Pc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ae(), ze();
  var i = O0(), a = be(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  return Un(s, {
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
ce(Pc, { data: {}, targetPosition: {} }, [], [], !0);
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
ce(Nc, {}, [], [], !0);
function Pl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Mi(e, { target: t, domNode: n }) {
  return Pl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Pl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var z0 = /* @__PURE__ */ re("<div><!></div>");
function Oc(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$domNode", n), { domNode: i } = Fe();
  Ae();
  var a = z0(), s = X(a);
  xt(s, t, "default", {}), q(a), bt(a, (l, u) => Mi == null ? void 0 : Mi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), T(e, a), pe(), r();
}
ce(Oc, {}, ["default"], [], !0);
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
var L0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Lc(e, t) {
  ve(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = zc(), a = ur("svelteflow__edge_id");
  return Ae(), Oc(e, {
    children: (s, l) => {
      var u = L0();
      let c;
      var d = X(u);
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
ce(Lc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var T0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), D0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Lo(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), p = d() === void 0 ? 20 : d();
  Ae();
  var h = D0(), x = be(h), b = R(x);
  {
    var $ = (w) => {
      var k = T0();
      $e(k, "stroke-opacity", 0), $e(k, "stroke-width", p), Ce(() => $e(k, "d", r())), T(w, k);
    };
    me(b, (w) => {
      p && w($);
    });
  }
  var g = R(b);
  {
    var C = (w) => {
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
    me(g, (w) => {
      o() && w(C);
    });
  }
  return Ce(
    (w) => {
      $e(x, "id", n()), $e(x, "d", r()), $t(x, 0, w), $e(x, "marker-start", l()), $e(x, "marker-end", u()), ft(x, c());
    },
    [
      () => vn(Vt(["svelte-flow__edge-path", v()]))
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
      return v();
    },
    set class(w) {
      v(w), m();
    }
  });
}
ce(
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
function Ei(e, t) {
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
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ge(
    () => (f(r), f(o), f(i), te(v()), te(p()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((g) => (Q(r, g[0]), Q(o, g[1]), Q(i, g[2])))(yc({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
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
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
    }
  });
}
ce(
  Ei,
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ge(
    () => (f(r), f(o), f(i), te(v()), te(p()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((g) => (Q(r, g[0]), Q(o, g[1]), Q(i, g[2])))(ki({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
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
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return ge(
    () => (f(r), f(o), f(i), te(v()), te(p()), te(h()), te(x())),
    () => {
      ((b) => (Q(r, b[0]), Q(o, b[1]), Q(i, b[2])))(Ia({
        sourceX: v(),
        sourceY: p(),
        targetX: h(),
        targetY: x()
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
      return p();
    },
    set sourceY(b) {
      p(b), m();
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ge(
    () => (f(r), f(o), f(i), te(v()), te(p()), te(x()), te(b()), te(h()), te($())),
    () => {
      ((g) => (Q(r, g[0]), Q(o, g[1]), Q(i, g[2])))(ki({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $(),
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
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
    }
  });
}
ce(
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
const R0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, Z0 = (e, t, n, r = [0, 0], o = bi, i, a, s, l, u, c, d, v) => {
  const { subscribe: p, set: h, update: x } = _e([]);
  let b = e, $ = {}, g = !0;
  const C = (S) => {
    const O = bc(S, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return F(i) && O && F(l) && (Dh({
      nodes: t,
      width: F(u),
      height: F(c),
      panZoom: F(l),
      minZoom: F(d),
      maxZoom: F(v)
    }, F(a)).then((z) => {
      var D;
      (D = F(s)) == null || D.resolve(z), s.set(null);
    }), i.set(!1), a.set(void 0)), b = S, h(b), b;
  }, w = (S) => C(S(b)), k = (S) => {
    $ = S;
  }, H = (S) => {
    g = S.elevateNodesOnSelect ?? g;
  };
  return C(b), {
    subscribe: p,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: H
  };
}, q0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = _e([]);
  let s = e, l = {};
  const u = (v) => {
    const p = l ? v.map((h) => ({ ...l, ...h })) : v;
    $c(t, n, p), s = p, i(s);
  }, c = (v) => u(v(s)), d = (v) => {
    l = v;
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
  default: Ei,
  step: Ac
}, B0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? bi;
  bc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let p = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const H = Oo(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    p = ws(H, n, r, 0.5, 2, 0.1);
  }
  const h = _e(!1), x = _e(void 0), b = _e(null), $ = _e(null), g = _e(500), C = _e(500), w = _e(0.5), k = _e(2);
  return {
    flowId: _e(null),
    nodes: Z0(e, s, l, d, v, h, x, b, $, g, C, w, k),
    nodeLookup: Wt(s),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: q0(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    width: g,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(v),
    translateExtent: _e(bi),
    autoPanOnNodeDrag: _e(!0),
    autoPanOnConnect: _e(!0),
    fitViewQueued: h,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
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
    viewport: _e(p),
    connectionMode: _e(fr.Strict),
    domNode: _e(null),
    connection: Wt(Ta),
    connectionLineType: _e(Mr.Bezier),
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
    onerror: _e(Ih),
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
function X0(e) {
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
    return u && c && Fh({
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
function Y0(e) {
  return Kn([
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
  const s = B0({
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
      ...Ic,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...Rc,
      ..._
    });
  }
  function c(_) {
    const M = F(s.edges);
    s.edges.set(Jh(_, M));
  }
  const d = (_, M = !1) => {
    var N;
    const V = F(s.nodeLookup);
    for (const [P, A] of _) {
      const B = (N = V.get(P)) == null ? void 0 : N.internals.userNode;
      B && (B.position = A.position, B.dragging = M);
    }
    s.nodes.update((P) => P);
  };
  function v(_) {
    var M, N, V;
    const P = F(s.nodeLookup), A = F(s.parentLookup), { changes: B, updatedInternals: K } = c0(_, P, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (K) {
      a0(P, A, { nodeOrigin: i, nodeExtent: a });
      for (const G of B) {
        const J = (M = P.get(G.id)) == null ? void 0 : M.internals.userNode;
        if (J)
          switch (G.type) {
            case "dimensions": {
              const W = { ...J.measured, ...G.dimensions };
              G.setAttributes && (J.width = ((N = G.dimensions) == null ? void 0 : N.width) ?? J.width, J.height = ((V = G.dimensions) == null ? void 0 : V.height) ?? J.height), J.measured = W;
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
  function p(_) {
    const M = F(s.fitViewResolver) ?? Bh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(M), s.nodes.set(F(s.nodes)), M.promise;
  }
  function h(_, M) {
    const N = F(s.panZoom);
    return N ? N.scaleBy(_, M) : Promise.resolve(!1);
  }
  function x(_) {
    return h(1.2, _);
  }
  function b(_) {
    return h(1 / 1.2, _);
  }
  function $(_) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([_, F(s.maxZoom)]), s.minZoom.set(_));
  }
  function g(_) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([F(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const M = F(s.panZoom);
    M && (M.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function w(_) {
    let M = !1;
    return _.forEach((N) => {
      N.selected && (N.selected = !1, M = !0);
    }), M;
  }
  function k(_) {
    var M;
    (M = F(s.panZoom)) == null || M.setClickDistance(_);
  }
  function H(_) {
    w((_ == null ? void 0 : _.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), w((_ == null ? void 0 : _.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var M;
    if (_) {
      const N = F(s.nodes), V = F(s.edges), P = N.filter((G) => G.selected), A = V.filter((G) => G.selected), { nodes: B, edges: K } = await dc({
        nodesToRemove: P,
        edgesToRemove: A,
        nodes: N,
        edges: V,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (B.length || K.length) && (s.nodes.update((G) => G.filter((J) => !B.some((W) => W.id === J.id))), s.edges.update((G) => G.filter((J) => !K.some((W) => W.id === J.id))), (M = F(s.ondelete)) == null || M({
        nodes: B,
        edges: K
      }));
    }
  });
  function S(_) {
    const M = F(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((V) => {
      const P = _.includes(V.id), A = M && V.selected || P;
      return V.selected = A, V;
    })), M || s.edges.update((N) => N.map((V) => (V.selected = !1, V)));
  }
  function O(_) {
    const M = F(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((V) => {
      const P = _.includes(V.id), A = M && V.selected || P;
      return V.selected = A, V;
    })), M || s.nodes.update((N) => N.map((V) => (V.selected = !1, V)));
  }
  function z(_) {
    var M;
    const N = (M = F(s.nodes)) == null ? void 0 : M.find((V) => V.id === _);
    if (!N) {
      console.warn("012", Dr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && F(s.multiselectionKeyPressed) && H({ nodes: [N], edges: [] }) : S([_]);
  }
  function D(_) {
    const M = F(s.viewport);
    return d0({
      delta: _,
      panZoom: F(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const I = _e(Ta), L = (_) => {
    I.set({ ..._ });
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
    visibleEdges: X0(s),
    visibleNodes: Y0(s),
    connection: Kn([I, s.viewport], ([_, M]) => _.inProgress ? {
      ..._,
      to: zo(_.to, [M.x, M.y, M.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, M, N]) => r0(_, { defaultColor: M, id: N })),
    initialized: (() => {
      let _ = !1;
      const M = F(s.nodes).length, N = F(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([V, P, A]) => _ || (M === 0 ? _ = A : N === 0 ? _ = A && V : _ = A && V && P, _));
    })(),
    // actions
    syncNodeStores: (_) => A0(s.nodes, _),
    syncEdgeStores: (_) => I0(s.edges, _),
    syncViewport: (_) => R0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: b,
    fitView: (_) => p(_),
    setMinZoom: $,
    setMaxZoom: g,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: H,
    addSelectedNodes: S,
    addSelectedEdges: O,
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
function K0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Or(Ji, {
    getStore: () => s
  }), s;
}
function Nl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = V0({
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
var W0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const j0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function qc(e, t) {
  ve(t, !1), Ue(e, j0);
  const [n, r] = rt(), o = () => ne(V, "$panActivationKeyPressed", n), i = () => ne(Z, "$minZoom", n), a = () => ne(E, "$maxZoom", n), s = () => ne(P, "$zoomActivationKeyPressed", n), l = () => ne(L, "$selectionRect", n), u = () => ne(M, "$translateExtent", n), c = () => ne(N, "$lib", n), d = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie();
  let h = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), g = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), H = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), O = y(t, "panOnScroll", 12), z = y(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: I,
    selectionRect: L,
    minZoom: Z,
    maxZoom: E,
    dragging: _,
    translateExtent: M,
    lib: N,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: P,
    viewportInitialized: A
  } = Fe(), B = (W) => D.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  en(() => {
    vi(A, !0);
  }), ge(() => te(h()), () => {
    Q(d, h() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), te(S())),
    () => {
      Q(v, o() || S());
    }
  ), ge(
    () => (o(), te(O())),
    () => {
      Q(p, o() || O());
    }
  ), yt(), Ae();
  var K = W0(), G = X(K);
  xt(G, t, "default", {}), q(K), bt(K, (W, he) => Nl == null ? void 0 : Nl(W, he), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: _,
    panZoom: I,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: H(),
    panOnScroll: f(p),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || Wn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: B
  })), T(e, K);
  var J = pe({
    get initialViewport() {
      return h();
    },
    set initialViewport(W) {
      h(W), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(W) {
      x(W), m();
    },
    get onMove() {
      return b();
    },
    set onMove(W) {
      b(W), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(W) {
      $(W), m();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(W) {
      g(W), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(W) {
      C(W), m();
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
      return O();
    },
    set panOnScroll(W) {
      O(W), m();
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
ce(
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
var F0 = /* @__PURE__ */ re("<div><!></div>");
const G0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  ve(t, !1), Ue(e, G0);
  const [n, r] = rt(), o = () => ne(_, "$panActivationKeyPressed", n), i = () => ne(Z, "$selectionKeyPressed", n), a = () => ne(I, "$selectionRect", n), s = () => ne(D, "$elementsSelectable", n), l = () => ne(L, "$selectionRectMode", n), u = () => ne(N, "$connection", n), c = () => ne(S, "$edges", n), d = () => ne(H, "$nodeLookup", n), v = () => ne(O, "$viewport", n), p = () => ne(E, "$selectionMode", n), h = () => ne(z, "$dragging", n), x = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie();
  let g = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = Bi(), {
    nodes: k,
    nodeLookup: H,
    edges: S,
    viewport: O,
    dragging: z,
    elementsSelectable: D,
    selectionRect: I,
    selectionRectMode: L,
    selectionKeyPressed: Z,
    selectionMode: E,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: M,
    connection: N
  } = Fe();
  let V = /* @__PURE__ */ ie(), P = null, A = [], B = !1;
  function K(le) {
    if (B || u().inProgress) {
      B = !1;
      return;
    }
    w("paneclick", { event: le }), M(), L.set(null);
  }
  function G(le) {
    var U, Ee;
    if (P = f(V).getBoundingClientRect(), !D || !f(b) || le.button !== 0 || le.target !== f(V) || !P)
      return;
    (Ee = (U = le.target) == null ? void 0 : U.setPointerCapture) == null || Ee.call(U, le.pointerId);
    const { x: j, y: Ne } = zn(le, P);
    M(), I.set({
      width: 0,
      height: 0,
      startX: j,
      startY: Ne,
      x: j,
      y: Ne
    });
  }
  function J(le) {
    if (!f(b) || !P || !a())
      return;
    B = !0;
    const U = zn(le, P), Ee = a().startX ?? 0, j = a().startY ?? 0, Ne = {
      ...a(),
      x: U.x < Ee ? U.x : Ee,
      y: U.y < j ? U.y : j,
      width: Math.abs(U.x - Ee),
      height: Math.abs(U.y - j)
    }, De = A.map((oe) => oe.id), Te = Da(A, c()).map((oe) => oe.id);
    A = cc(
      d(),
      Ne,
      [
        v().x,
        v().y,
        v().zoom
      ],
      p() === xi.Partial,
      !0
    );
    const ue = Da(A, c()).map((oe) => oe.id), de = A.map((oe) => oe.id);
    (De.length !== de.length || de.some((oe) => !De.includes(oe))) && k.update((oe) => oe.map(zl(de))), (Te.length !== ue.length || ue.some((oe) => !Te.includes(oe))) && S.update((oe) => oe.map(zl(ue))), L.set("user"), I.set(Ne);
  }
  function W(le) {
    var U, Ee;
    le.button === 0 && ((Ee = (U = le.target) == null ? void 0 : U.releasePointerCapture) == null || Ee.call(U, le.pointerId), !f(b) && l() === "user" && le.target === f(V) && (K == null || K(le)), I.set(null), A.length > 0 && vi(L, "nodes"), i() && (B = !1));
  }
  const he = (le) => {
    var U;
    if (Array.isArray(f(x)) && (U = f(x)) != null && U.includes(2)) {
      le.preventDefault();
      return;
    }
    w("panecontextmenu", { event: le });
  };
  ge(
    () => (o(), te(g())),
    () => {
      Q(x, o() || g());
    }
  ), ge(
    () => (i(), a(), te(C()), f(x)),
    () => {
      Q(b, i() || a() || C() && f(x) !== !0);
    }
  ), ge(
    () => (s(), f(b), l()),
    () => {
      Q($, s() && (f(b) || l() === "user"));
    }
  ), yt(), Ae();
  var ae = F0(), ye = /* @__PURE__ */ Ve(() => f($) ? void 0 : Ol(K, f(V))), se = /* @__PURE__ */ Ve(() => Ol(he, f(V)));
  let Se;
  var we = X(ae);
  xt(we, t, "default", {}), q(ae), _n(ae, (le) => Q(V, le), () => f(V)), Ce(
    (le) => Se = $t(ae, 1, "svelte-flow__pane svelte-1esy7hx", null, Se, le),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
        selection: f(b)
      })
    ],
    xe
  ), nt("click", ae, function(...le) {
    var U;
    (U = f(ye)) == null || U.apply(this, le);
  }), nt("pointerdown", ae, function(...le) {
    var U;
    (U = f($) ? G : void 0) == null || U.apply(this, le);
  }), nt("pointermove", ae, function(...le) {
    var U;
    (U = f($) ? J : void 0) == null || U.apply(this, le);
  }), nt("pointerup", ae, function(...le) {
    var U;
    (U = f($) ? W : void 0) == null || U.apply(this, le);
  }), nt("contextmenu", ae, function(...le) {
    var U;
    (U = f(se)) == null || U.apply(this, le);
  }), T(e, ae);
  var He = pe({
    get panOnDrag() {
      return g();
    },
    set panOnDrag(le) {
      g(le), m();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(le) {
      C(le), m();
    }
  });
  return r(), He;
}
ce(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var U0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const J0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  ve(t, !1), Ue(e, J0);
  const [n, r] = rt(), o = () => ne(i, "$viewport", n), { viewport: i } = Fe();
  Ae();
  var a = U0(), s = X(a);
  xt(s, t, "default", {}), q(a), Ce(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), T(e, a), pe(), r();
}
ce(Xc, {}, ["default"], [], !0);
function Vi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = p0({
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
function Yc(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(ae, "$nodeTypes", n), i = () => ne(He, "$elementsSelectable", n), a = () => ne(le, "$nodesDraggable", n), s = () => ne(Ne, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0);
  let v = y(t, "node", 13), p = y(t, "id", 13), h = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), g = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), H = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), O = y(t, "type", 13, "default"), z = y(t, "isParent", 13, !1), D = y(t, "positionX", 13), I = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), Z = y(t, "targetPosition", 13, void 0), E = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), M = y(t, "measuredHeight", 13, void 0), N = y(t, "initialWidth", 13, void 0), V = y(t, "initialHeight", 13, void 0), P = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), B = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), G = y(t, "parentId", 13, void 0), J = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const he = Fe(), {
    nodeTypes: ae,
    nodeDragThreshold: ye,
    selectNodesOnDrag: se,
    handleNodeSelection: Se,
    updateNodeInternals: we,
    elementsSelectable: He,
    nodesDraggable: le
  } = he;
  let U = /* @__PURE__ */ ie(void 0, !0), Ee = /* @__PURE__ */ ie(null, !0);
  const j = Bi(), Ne = _e(g());
  let De = /* @__PURE__ */ ie(void 0, !0), Te = /* @__PURE__ */ ie(void 0, !0), ue = /* @__PURE__ */ ie(void 0, !0);
  Or("svelteflow__node_id", p()), Or("svelteflow__node_connectable", Ne), us(() => {
    var ee;
    f(Ee) && ((ee = H()) == null || ee.unobserve(f(Ee)));
  });
  function de(ee) {
    $() && (!F(se) || !b() || F(ye) > 0) && Se(p()), j("nodeclick", { node: v().internals.userNode, event: ee });
  }
  ge(() => te(O()), () => {
    Q(l, O() || "default");
  }), ge(() => (o(), f(l)), () => {
    Q(u, !!o()[f(l)]);
  }), ge(
    () => (o(), f(l), Si),
    () => {
      Q(c, o()[f(l)] || Si);
    }
  ), ge(
    () => (f(u), te(O())),
    () => {
      f(u) || console.warn("003", Dr.error003(O()));
    }
  ), ge(
    () => (te(P()), te(A()), te(N()), te(V()), te(_()), te(M())),
    () => {
      Q(d, Q0({
        width: P(),
        height: A(),
        initialWidth: N(),
        initialHeight: V(),
        measuredWidth: _(),
        measuredHeight: M()
      }));
    }
  ), ge(() => te(g()), () => {
    Ne.set(!!g());
  }), ge(
    () => (f(De), f(l), f(Te), te(L()), f(ue), te(Z()), te(p()), f(U)),
    () => {
      (f(De) && f(l) !== f(De) || f(Te) && L() !== f(Te) || f(ue) && Z() !== f(ue)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          p(),
          {
            id: p(),
            nodeElement: f(U),
            force: !0
          }
        ]
      ]))), Q(De, f(l)), Q(Te, L()), Q(ue, Z());
    }
  ), ge(
    () => (te(H()), f(U), f(Ee), te(K())),
    () => {
      H() && (f(U) !== f(Ee) || !K()) && (f(Ee) && H().unobserve(f(Ee)), f(U) && H().observe(f(U)), Q(Ee, f(U)));
    }
  ), yt(), Ae(!0);
  var oe = Je(), Me = be(oe);
  {
    var et = (ee) => {
      var Ye = e2();
      let fe, tn;
      var nn = X(Ye);
      const hn = /* @__PURE__ */ xe(() => x() ?? !1), Le = /* @__PURE__ */ xe(() => $() ?? i() ?? !0), ot = /* @__PURE__ */ xe(() => C() ?? !0), qe = /* @__PURE__ */ xe(() => b() ?? a() ?? !0);
      Mu(nn, () => f(c), (Ie, it) => {
        it(Ie, {
          get data() {
            return h();
          },
          get id() {
            return p();
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
            return B();
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
        nodeId: p(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: B(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: Se,
        onDrag: (Ie, it, rn, Kt) => {
          j("nodedrag", { event: Ie, targetNode: rn, nodes: Kt });
        },
        onDragStart: (Ie, it, rn, Kt) => {
          j("nodedragstart", { event: Ie, targetNode: rn, nodes: Kt });
        },
        onDragStop: (Ie, it, rn, Kt) => {
          j("nodedragstop", { event: Ie, targetNode: rn, nodes: Kt });
        },
        store: he
      })), _n(Ye, (Ie) => Q(U, Ie), () => f(U)), Rt(() => nt("click", Ye, de)), Rt(() => nt("mouseenter", Ye, (Ie) => j("nodemouseenter", { node: v(), event: Ie }))), Rt(() => nt("mouseleave", Ye, (Ie) => j("nodemouseleave", { node: v(), event: Ie }))), Rt(() => nt("mousemove", Ye, (Ie) => j("nodemousemove", { node: v(), event: Ie }))), Rt(() => nt("contextmenu", Ye, (Ie) => j("nodecontextmenu", { node: v(), event: Ie }))), Ce(
        (Ie, it) => {
          $e(Ye, "data-id", p()), fe = $t(Ye, 1, Ie, null, fe, it), tn = ft(Ye, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, tn, {
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
            selected: x(),
            draggable: b(),
            connectable: g(),
            selectable: $(),
            nopan: b(),
            parent: z()
          })
        ],
        xe
      ), T(ee, Ye);
    };
    me(Me, (ee) => {
      w() || ee(et);
    });
  }
  T(e, oe);
  var tt = pe({
    get node() {
      return v();
    },
    set node(ee) {
      v(ee), m();
    },
    get id() {
      return p();
    },
    set id(ee) {
      p(ee), m();
    },
    get data() {
      return h();
    },
    set data(ee) {
      h(ee), m();
    },
    get selected() {
      return x();
    },
    set selected(ee) {
      x(ee), m();
    },
    get draggable() {
      return b();
    },
    set draggable(ee) {
      b(ee), m();
    },
    get selectable() {
      return $();
    },
    set selectable(ee) {
      $(ee), m();
    },
    get connectable() {
      return g();
    },
    set connectable(ee) {
      g(ee), m();
    },
    get deletable() {
      return C();
    },
    set deletable(ee) {
      C(ee), m();
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
      return O();
    },
    set type(ee) {
      O(ee), m();
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
      return _();
    },
    set measuredWidth(ee) {
      _(ee), m();
    },
    get measuredHeight() {
      return M();
    },
    set measuredHeight(ee) {
      M(ee), m();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(ee) {
      N(ee), m();
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
      return B();
    },
    set dragHandle(ee) {
      B(ee), m();
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
ce(
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
var t2 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const n2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Kc(e, t) {
  ve(t, !1), Ue(e, n2);
  const [n, r] = rt(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(p, "$elementsSelectable", n), s = () => ne(v, "$nodesConnectable", n), l = () => ne(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: p,
    updateNodeInternals: h,
    parentLookup: x
  } = Fe(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const H = k.target.getAttribute("data-id");
      w.set(H, { id: H, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  us(() => {
    b == null || b.disconnect();
  }), Ae();
  var $ = t2();
  Et($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ xe(() => !!f(w).selected), H = /* @__PURE__ */ xe(() => !!f(w).hidden), S = /* @__PURE__ */ xe(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), O = /* @__PURE__ */ xe(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), z = /* @__PURE__ */ xe(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), D = /* @__PURE__ */ xe(() => f(w).deletable ?? !0), I = /* @__PURE__ */ xe(() => l().has(f(w).id)), L = /* @__PURE__ */ xe(() => f(w).type ?? "default"), Z = /* @__PURE__ */ xe(() => f(w).internals.z ?? 0), E = /* @__PURE__ */ xe(() => gc(f(w)));
    Yc(C, {
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
        return f(O);
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
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(_) {
          Xe.call(this, t, _);
        },
        nodemouseenter(_) {
          Xe.call(this, t, _);
        },
        nodemousemove(_) {
          Xe.call(this, t, _);
        },
        nodemouseleave(_) {
          Xe.call(this, t, _);
        },
        nodedrag(_) {
          Xe.call(this, t, _);
        },
        nodedragstart(_) {
          Xe.call(this, t, _);
        },
        nodedragstop(_) {
          Xe.call(this, t, _);
        },
        nodecontextmenu(_) {
          Xe.call(this, t, _);
        }
      }
    });
  }), q($), T(e, $);
  var g = pe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), g;
}
ce(Kc, { nodeClickDistance: {} }, [], [], !0);
var r2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(W, "$edgeTypes", n), i = () => ne(he, "$flowId", n), a = () => ne(ae, "$elementsSelectable", n), s = () => ne(J, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0), v = /* @__PURE__ */ ie(void 0, !0);
  let p = y(t, "id", 13), h = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), g = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), H = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), O = y(t, "hidden", 13, !1), z = y(t, "label", 13, void 0), D = y(t, "labelStyle", 13, void 0), I = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), Z = y(t, "sourceHandle", 13, void 0), E = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), M = y(t, "sourceY", 13), N = y(t, "targetX", 13), V = y(t, "targetY", 13), P = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), B = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), G = y(t, "class", 13, "");
  Or("svelteflow__edge_id", p());
  const {
    edgeLookup: J,
    edgeTypes: W,
    flowId: he,
    elementsSelectable: ae
  } = Fe(), ye = Bi(), se = zc();
  function Se(j) {
    const Ne = s().get(p());
    Ne && (se(p()), ye("edgeclick", { event: j, edge: Ne }));
  }
  function we(j, Ne) {
    const De = s().get(p());
    De && ye(Ne, { event: j, edge: De });
  }
  ge(() => te(h()), () => {
    Q(l, h() || "default");
  }), ge(
    () => (o(), f(l), Ei),
    () => {
      Q(u, o()[f(l)] || Ei);
    }
  ), ge(
    () => (te(I()), i()),
    () => {
      Q(c, I() ? `url('#${Ra(I(), i())}')` : void 0);
    }
  ), ge(
    () => (te(L()), i()),
    () => {
      Q(d, L() ? `url('#${Ra(L(), i())}')` : void 0);
    }
  ), ge(
    () => (te(H()), a()),
    () => {
      Q(v, H() ?? a());
    }
  ), yt(), Ae(!0);
  var He = Je(), le = be(He);
  {
    var U = (j) => {
      var Ne = r2();
      let De;
      var Te = X(Ne);
      let ue;
      var de = X(Te);
      const oe = /* @__PURE__ */ xe(() => S() ?? !0);
      Mu(de, () => f(u), (Me, et) => {
        et(Me, {
          get id() {
            return p();
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
            return M();
          },
          get targetX() {
            return N();
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
            return $();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return f(v);
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
        (Me, et) => {
          De = ft(Ne, "", De, { "z-index": C() }), ue = $t(Te, 0, Me, null, ue, et), $e(Te, "data-id", p()), $e(Te, "aria-label", B() === null ? void 0 : B() ? B() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => vn(Vt(["svelte-flow__edge", G()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        xe
      ), nt("click", Te, Se), nt("contextmenu", Te, (Me) => {
        we(Me, "edgecontextmenu");
      }), nt("mouseenter", Te, (Me) => {
        we(Me, "edgemouseenter");
      }), nt("mouseleave", Te, (Me) => {
        we(Me, "edgemouseleave");
      }), T(j, Ne);
    };
    me(le, (j) => {
      O() || j(U);
    });
  }
  T(e, He);
  var Ee = pe({
    get id() {
      return p();
    },
    set id(j) {
      p(j), m();
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
      return g();
    },
    set style(j) {
      g(j), m();
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
      return O();
    },
    set hidden(j) {
      O(j), m();
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
      return _();
    },
    set sourceX(j) {
      _(j), m();
    },
    get sourceY() {
      return M();
    },
    set sourceY(j) {
      M(j), m();
    },
    get targetX() {
      return N();
    },
    set targetX(j) {
      N(j), m();
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
      return B();
    },
    set ariaLabel(j) {
      B(j), m();
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
  return r(), Ee;
}
ce(
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
  ve(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return en(() => {
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
ce(jc, { onMount: {}, onDestroy: {} }, [], [], !0);
var o2 = /* @__PURE__ */ ke("<defs></defs>");
function Fc(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$markers", n), { markers: i } = Fe();
  Ae();
  var a = o2();
  Et(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, lt(() => f(l)));
  }), q(a), T(e, a), pe(), r();
}
ce(Fc, {}, [], [], !0);
var i2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), a2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), s2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ae();
  var c = s2(), d = X(c);
  {
    var v = (h) => {
      var x = i2();
      Ce(() => {
        $e(x, "stroke", l()), $e(x, "stroke-width", u());
      }), T(h, x);
    }, p = (h, x) => {
      {
        var b = ($) => {
          var g = a2();
          Ce(() => {
            $e(g, "stroke", l()), $e(g, "stroke-width", u()), $e(g, "fill", l());
          }), T($, g);
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
    me(d, (h) => {
      r() === $o.Arrow ? h(v) : h(p, !1);
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
ce(
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
var l2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Uc(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Fe();
  en(() => {
    a() && u(a());
  }), Ae();
  var d = l2(), v = X(d), p = X(v);
  Fc(p, {}), q(v);
  var h = R(v, 2);
  Et(h, 1, o, (g) => g.id, (g, C) => {
    const w = /* @__PURE__ */ xe(() => f(C).selectable ?? i()), k = /* @__PURE__ */ xe(() => f(C).type || "default");
    Wc(g, {
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
  var x = R(h, 2);
  {
    var b = (g) => {
      jc(g, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    me(x, (g) => {
      o().length > 0 && g(b);
    });
  }
  q(d), T(e, d);
  var $ = pe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), m();
    }
  });
  return r(), $;
}
ce(Uc, { defaultEdgeOptions: {} }, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const c2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cs(e, t) {
  ve(t, !1), Ue(e, c2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Je(), l = be(s);
  {
    var u = (c) => {
      var d = u2();
      let v;
      Ce(() => v = ft(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), T(c, d);
    };
    me(l, (c) => {
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
ce(
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
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Fe();
  Ae();
  const l = /* @__PURE__ */ xe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ xe(() => {
    var p;
    return (p = o()) == null ? void 0 : p.width;
  }), c = /* @__PURE__ */ xe(() => {
    var p;
    return (p = o()) == null ? void 0 : p.height;
  }), d = /* @__PURE__ */ xe(() => {
    var p;
    return (p = o()) == null ? void 0 : p.x;
  }), v = /* @__PURE__ */ xe(() => {
    var p;
    return (p = o()) == null ? void 0 : p.y;
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
      return f(v);
    }
  }), pe(), r();
}
ce(Jc, {}, [], [], !0);
var d2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const f2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  ve(t, !1), Ue(e, f2);
  const [n, r] = rt(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = Fe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Bi();
  let v = /* @__PURE__ */ ie(null);
  function p(g) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: g });
  }
  function h(g) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: g });
  }
  ge(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (Q(v, Oo(i(), { filter: (g) => !!g.selected })), a());
    }
  ), yt(), Ae();
  var x = Je(), b = be(x);
  {
    var $ = (g) => {
      var C = d2(), w = X(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(C), bt(C, (k, H) => Vi == null ? void 0 : Vi(k, H), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, H, S, O) => {
          d("nodedrag", { event: k, targetNode: null, nodes: O });
        },
        onDragStart: (k, H, S, O) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: O });
        },
        onDragStop: (k, H, S, O) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: O });
        }
      })), Rt(() => nt("contextmenu", C, p)), Rt(() => nt("click", C, h)), Rt(() => nt("keyup", C, () => {
      })), Ce(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), T(g, C);
    };
    me(b, (g) => {
      o() === "nodes" && f(v) && Pn(f(v).x) && Pn(f(v).y) && g($);
    });
  }
  T(e, x), pe(), r();
}
ce(Qc, {}, [], [], !0);
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
      }, { modifier: d, key: v, callback: p, preventDefault: h, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
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
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), p == null || p(b);
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
  ve(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => _i() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => _i() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = Fe();
  function p(g) {
    return g !== null && typeof g == "object";
  }
  function h(g) {
    return p(g) ? g.modifier || [] : [];
  }
  function x(g) {
    return g == null ? "" : p(g) ? g.key : g;
  }
  function b(g, C) {
    return (Array.isArray(g) ? g : [g]).map((w) => {
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
    v.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ae(), nt("blur", Nt, $), nt("contextmenu", Nt, $), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !Kh(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), bt(Nt, (g, C) => dt == null ? void 0 : dt(g, C), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), pe({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(g) {
      i(g), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(g) {
      a(g), m();
    }
  });
}
ce(
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
var v2 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), p2 = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(p, "$connection", n), i = () => ne(h, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: p,
    connectionLineType: h
  } = Fe();
  let x = /* @__PURE__ */ ie(null);
  ge(
    () => (o(), te(c()), i(), f(x), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: H, toPosition: S } = o(), O = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: H,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Mr.Bezier:
            ((z) => Q(x, z[0]))(yc(O));
            break;
          case Mr.Step:
            ((z) => Q(x, z[0]))(ki({ ...O, borderRadius: 0 }));
            break;
          case Mr.SmoothStep:
            ((z) => Q(x, z[0]))(ki(O));
            break;
          default:
            ((z) => Q(x, z[0]))(Ia(O));
        }
      }
    }
  ), yt(), Ae();
  var b = Je(), $ = be(b);
  {
    var g = (w) => {
      var k = p2(), H = X(k), S = X(H);
      xt(S, t, "connectionLine", {});
      var O = R(S);
      {
        var z = (D) => {
          var I = v2();
          Ce(() => {
            $e(I, "d", f(x)), ft(I, u());
          }), T(D, I);
        };
        me(O, (D) => {
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
            Nh(o().isValid)
          ]))
        ],
        xe
      ), T(w, k);
    };
    me($, (w) => {
      o().inProgress && w(g);
    });
  }
  T(e, b);
  var C = pe({
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
  ve(t, !1);
  const [o, i] = rt(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ ie();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Fe();
  ge(() => te(l()), () => {
    Q(s, `${l()}`.split("-"));
  }), yt(), Ae();
  var v = g2();
  let p;
  var h = X(v);
  xt(h, t, "default", {}), q(v), Ce(
    (b) => p = Xt(v, p, {
      class: b,
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
  ), T(e, v);
  var x = pe({
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
var h2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  ve(t, !1);
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
          var c = h2();
          T(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    me(i, (s) => {
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
ce(nd, { proOptions: {}, position: {} }, [], [], !0);
function Ll(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const m2 = (e) => Object.keys(e);
function Tl(e, t) {
  m2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function y2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function w2(e = "light") {
  return Wt("light", (t) => {
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
function rd(e, t) {
  const n = Lf(t), r = st(t, [
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
  ve(t, !1), Ue(e, C2);
  const [i, a] = rt(), s = () => ne(C(), "$viewport", i), l = () => ne(ra, "$initialized", i), u = () => ne(f(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), p = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), g = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), H = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), O = y(t, "panActivationKey", 12, void 0), z = y(t, "multiSelectionKey", 12, void 0), D = y(t, "zoomActivationKey", 12, void 0), I = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), Z = y(t, "nodeDragThreshold", 12, void 0), E = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), M = y(t, "deleteKey", 12, void 0), N = y(t, "connectionRadius", 12, void 0), V = y(t, "connectionLineType", 12, void 0), P = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), B = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), G = y(t, "onMove", 12, void 0), J = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), he = y(t, "translateExtent", 12, void 0), ae = y(t, "nodeExtent", 12, void 0), ye = y(t, "onlyRenderVisibleElements", 12, void 0), se = y(t, "panOnScrollMode", 28, () => Wn.Free), Se = y(t, "preventScrolling", 12, !0), we = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), le = y(t, "zoomOnPinch", 12, !0), U = y(t, "panOnScroll", 12, !1), Ee = y(t, "panOnDrag", 12, !0), j = y(t, "selectionOnDrag", 12, void 0), Ne = y(t, "autoPanOnConnect", 12, !0), De = y(t, "autoPanOnNodeDrag", 12, !0), Te = y(t, "onerror", 12, void 0), ue = y(t, "ondelete", 12, void 0), de = y(t, "onedgecreate", 12, void 0), oe = y(t, "attributionPosition", 12, void 0), Me = y(t, "proOptions", 12, void 0), et = y(t, "defaultEdgeOptions", 12, void 0), tt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Ye = y(t, "colorMode", 12, "light"), fe = y(t, "onconnect", 12, void 0), tn = y(t, "onconnectstart", 12, void 0), nn = y(t, "onconnectend", 12, void 0), hn = y(t, "onbeforedelete", 12, void 0), Le = y(t, "oninit", 12, void 0), ot = y(t, "nodeOrigin", 12, void 0), qe = y(t, "paneClickDistance", 12, 0), Ie = y(t, "nodeClickDistance", 12, 0), it = y(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = y(t, "style", 12, void 0), Kt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ ie(), Ct = /* @__PURE__ */ ie(), Ht = /* @__PURE__ */ ie();
  const yr = s() || g(), at = gf(Ji) ? Fe() : K0({
    nodes: F(v()),
    edges: F(p()),
    width: tt(),
    height: ee(),
    fitView: h(),
    nodeOrigin: ot(),
    nodeExtent: ae()
  });
  en(() => (at.width.set(f(Ct)), at.height.set(f(Ht)), at.domNode.set(f(Ur)), at.syncNodeStores(v()), at.syncEdgeStores(p()), at.syncViewport(C()), h() !== void 0 && at.fitViewQueued.set(h()), x() && at.fitViewOptions.set(x()), Ll(at, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: he(),
    paneClickDistance: qe()
  }), () => {
    at.reset();
  }));
  const { initialized: ra } = at;
  let Jr = /* @__PURE__ */ ie(!1);
  ge(
    () => (f(Ct), f(Ht)),
    () => {
      f(Ct) !== void 0 && f(Ht) !== void 0 && (at.width.set(f(Ct)), at.height.set(f(Ht)));
    }
  ), ge(
    () => (f(Jr), l(), te(Le())),
    () => {
      var Y;
      !f(Jr) && l() && ((Y = Le()) == null || Y(), Q(Jr, !0));
    }
  ), ge(
    () => (te(d()), te(V()), te(N()), te(S()), te(_()), te(it()), te(I()), te(L()), te(E()), te(ye()), te(W()), te(Ne()), te(De()), te(Te()), te(ue()), te(de()), te(P()), te(Z()), te(fe()), te(tn()), te(nn()), te(hn()), te(ot()), Tl),
    () => {
      const Y = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: N(),
        selectionMode: S(),
        snapGrid: _(),
        defaultMarkerColor: it(),
        nodesDraggable: I(),
        nodesConnectable: L(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: ye(),
        isValidConnection: W(),
        autoPanOnConnect: Ne(),
        autoPanOnNodeDrag: De(),
        onerror: Te(),
        ondelete: ue(),
        onedgecreate: de(),
        connectionMode: P(),
        nodeDragThreshold: Z(),
        onconnect: fe(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: hn(),
        nodeOrigin: ot()
      };
      Tl(at, Y);
    }
  ), ge(
    () => (te(w()), te(k()), te(b()), te($()), te(he()), te(qe())),
    () => {
      Ll(at, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: he(),
        paneClickDistance: qe()
      });
    }
  ), ge(
    () => te(Ye()),
    () => {
      Kf(Q(c, w2(Ye())), "$colorModeClass", i);
    }
  ), yt(), Ae();
  var At = $2();
  let Ro;
  var Zo = X(At);
  ed(Zo, {
    get selectionKey() {
      return H();
    },
    get deleteKey() {
      return M();
    },
    get panActivationKey() {
      return O();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var qo = R(Zo, 2);
  const oa = /* @__PURE__ */ xe(() => se() === void 0 ? Wn.Free : se()), Jd = /* @__PURE__ */ xe(() => Se() === void 0 ? !0 : Se()), Qd = /* @__PURE__ */ xe(() => we() === void 0 ? !0 : we()), e1 = /* @__PURE__ */ xe(() => He() === void 0 ? !0 : He()), t1 = /* @__PURE__ */ xe(() => le() === void 0 ? !0 : le()), n1 = /* @__PURE__ */ xe(() => U() === void 0 ? !1 : U()), r1 = /* @__PURE__ */ xe(() => Ee() === void 0 ? !0 : Ee()), o1 = /* @__PURE__ */ xe(() => qe() === void 0 ? 0 : qe());
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
      return f(Jd);
    },
    get zoomOnScroll() {
      return f(Qd);
    },
    get zoomOnDoubleClick() {
      return f(e1);
    },
    get zoomOnPinch() {
      return f(t1);
    },
    get panOnScroll() {
      return f(n1);
    },
    get panOnDrag() {
      return f(r1);
    },
    get paneClickDistance() {
      return f(o1);
    },
    children: (Y, rb) => {
      const s1 = /* @__PURE__ */ xe(() => Ee() === void 0 ? !0 : Ee());
      Bc(Y, {
        get panOnDrag() {
          return f(s1);
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
        children: (Qr, ob) => {
          var Hs = x2(), Ps = be(Hs);
          Xc(Ps, {
            children: (u1, ib) => {
              var Ns = b2(), Os = be(Ns);
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
                  return B();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Be, ab) => {
                    var Ts = Je(), d1 = be(Ts);
                    xt(d1, t, "connectionLine", {}), T(Be, Ts);
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
              var c1 = R(Ls, 2);
              Qc(c1, {
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
              }), T(u1, Ns);
            },
            $$slots: { default: !0 }
          });
          var l1 = R(Ps, 2);
          Jc(l1, {}), T(Qr, Hs);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Vs = R(qo, 2);
  nd(Vs, {
    get proOptions() {
      return Me();
    },
    get position() {
      return oe();
    }
  });
  var i1 = R(Vs, 2);
  xt(i1, t, "default", {}), q(At), _n(At, (Y) => Q(Ur, Y), () => f(Ur)), Ce(
    (Y) => Ro = Xt(
      At,
      Ro,
      {
        style: rn(),
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
  ), Fs(At, "clientWidth", (Y) => Q(Ct, Y)), Fs(At, "clientHeight", (Y) => Q(Ht, Y)), nt("dragover", At, function(Y) {
    Xe.call(this, t, Y);
  }), nt("drop", At, function(Y) {
    Xe.call(this, t, Y);
  }), T(e, At);
  var a1 = pe({
    get id() {
      return d();
    },
    set id(Y) {
      d(Y), m();
    },
    get nodes() {
      return v();
    },
    set nodes(Y) {
      v(Y), m();
    },
    get edges() {
      return p();
    },
    set edges(Y) {
      p(Y), m();
    },
    get fitView() {
      return h();
    },
    set fitView(Y) {
      h(Y), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Y) {
      x(Y), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Y) {
      b(Y), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Y) {
      $(Y), m();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(Y) {
      g(Y), m();
    },
    get viewport() {
      return C();
    },
    set viewport(Y) {
      C(Y), m();
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
      return O();
    },
    set panActivationKey(Y) {
      O(Y), m();
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
      return _();
    },
    set snapGrid(Y) {
      _(Y), m();
    },
    get deleteKey() {
      return M();
    },
    set deleteKey(Y) {
      M(Y), m();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(Y) {
      N(Y), m();
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
      return B();
    },
    set connectionLineContainerStyle(Y) {
      B(Y), m();
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
      return he();
    },
    set translateExtent(Y) {
      he(Y), m();
    },
    get nodeExtent() {
      return ae();
    },
    set nodeExtent(Y) {
      ae(Y), m();
    },
    get onlyRenderVisibleElements() {
      return ye();
    },
    set onlyRenderVisibleElements(Y) {
      ye(Y), m();
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
      return le();
    },
    set zoomOnPinch(Y) {
      le(Y), m();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(Y) {
      U(Y), m();
    },
    get panOnDrag() {
      return Ee();
    },
    set panOnDrag(Y) {
      Ee(Y), m();
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
      return ue();
    },
    set ondelete(Y) {
      ue(Y), m();
    },
    get onedgecreate() {
      return de();
    },
    set onedgecreate(Y) {
      de(Y), m();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Y) {
      oe(Y), m();
    },
    get proOptions() {
      return Me();
    },
    set proOptions(Y) {
      Me(Y), m();
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
      return fe();
    },
    set onconnect(Y) {
      fe(Y), m();
    },
    get onconnectstart() {
      return tn();
    },
    set onconnectstart(Y) {
      tn(Y), m();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(Y) {
      nn(Y), m();
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
      return rn();
    },
    set style(Y) {
      rn(Y), m();
    },
    get class() {
      return Kt();
    },
    set class(Y) {
      Kt(Y), m();
    }
  });
  return a(), a1;
}
ce(
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
ce(
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
  Ae();
  var c = _2();
  let d;
  var v = X(c);
  return xt(v, t, "default", { class: "button-svg" }), q(c), Ce(
    (p) => d = Xt(c, d, {
      type: "button",
      class: p,
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
  ), nt("click", c, function(p) {
    Xe.call(this, t, p);
  }), T(e, c), pe({
    get class() {
      return o();
    },
    set class(p) {
      o(p), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(p) {
      i(p), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(p) {
      a(p), m();
    },
    get color() {
      return s();
    },
    set color(p) {
      s(p), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(p) {
      l(p), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(p) {
      u(p), m();
    }
  });
}
ce(
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
var k2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = k2();
  T(e, t);
}
ce(id, {}, [], [], !0);
var S2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = S2();
  T(e, t);
}
ce(ad, {}, [], [], !0);
var M2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function sd(e) {
  var t = M2();
  T(e, t);
}
ce(sd, {}, [], [], !0);
var E2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = E2();
  T(e, t);
}
ce(ld, {}, [], [], !0);
var V2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = V2();
  T(e, t);
}
ce(ud, {}, [], [], !0);
var H2 = /* @__PURE__ */ re("<!> <!>", 1), P2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(V, "$nodesDraggable", n), i = () => ne(P, "$nodesConnectable", n), a = () => ne(A, "$elementsSelectable", n), s = () => ne(_, "$viewport", n), l = () => ne(M, "$minZoom", n), u = () => ne(N, "$maxZoom", n), c = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie();
  let h = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), g = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), H = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), O = y(t, "style", 12, void 0), z = y(t, "orientation", 12, "vertical"), D = y(t, "fitViewOptions", 12, void 0), I = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: Z,
    fitView: E,
    viewport: _,
    minZoom: M,
    maxZoom: N,
    nodesDraggable: V,
    nodesConnectable: P,
    elementsSelectable: A
  } = Fe(), B = {
    bgColor: g(),
    bgColorHover: C(),
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
  ge(
    () => (o(), i(), a()),
    () => {
      Q(c, o() || i() || a());
    }
  ), ge(() => (s(), l()), () => {
    Q(d, s().zoom <= l());
  }), ge(() => (s(), u()), () => {
    Q(v, s().zoom >= u());
  }), ge(() => te(z()), () => {
    Q(p, z() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), Ae();
  const he = /* @__PURE__ */ xe(() => Vt([
    "svelte-flow__controls",
    f(p),
    I()
  ])), ae = /* @__PURE__ */ xe(() => S() ?? "Svelte Flow controls");
  To(e, {
    get class() {
      return f(he);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(ae);
    },
    get style() {
      return O();
    },
    children: (se, Se) => {
      var we = P2(), He = be(we);
      xt(He, t, "before", {});
      var le = R(He, 2);
      {
        var U = (de) => {
          var oe = H2(), Me = be(oe);
          so(Me, lt(
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
              $$events: { click: K },
              children: (tt, ee) => {
                id(tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var et = R(Me, 2);
          so(et, lt(
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
              $$events: { click: G },
              children: (tt, ee) => {
                ad(tt);
              },
              $$slots: { default: !0 }
            }
          )), T(de, oe);
        };
        me(le, (de) => {
          x() && de(U);
        });
      }
      var Ee = R(le, 2);
      {
        var j = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            B,
            {
              $$events: { click: J },
              children: (oe, Me) => {
                sd(oe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        me(Ee, (de) => {
          b() && de(j);
        });
      }
      var Ne = R(Ee, 2);
      {
        var De = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            B,
            {
              $$events: { click: W },
              children: (oe, Me) => {
                var et = Je(), tt = be(et);
                {
                  var ee = (fe) => {
                    ud(fe);
                  }, Ye = (fe) => {
                    ld(fe);
                  };
                  me(tt, (fe) => {
                    f(c) ? fe(ee) : fe(Ye, !1);
                  });
                }
                T(oe, et);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        me(Ne, (de) => {
          $() && de(De);
        });
      }
      var Te = R(Ne, 2);
      xt(Te, t, "default", {});
      var ue = R(Te, 2);
      xt(ue, t, "after", {}), T(se, we);
    },
    $$slots: { default: !0 }
  });
  var ye = pe({
    get position() {
      return h();
    },
    set position(se) {
      h(se), m();
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
      return g();
    },
    set buttonBgColor(se) {
      g(se), m();
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
      return O();
    },
    set style(se) {
      O(se), m();
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
  return r(), ye;
}
ce(
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
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var N2 = /* @__PURE__ */ ke("<circle></circle>");
function dd(e, t) {
  ve(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ae();
  var o = N2();
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
ce(dd, { radius: {}, class: {} }, [], [], !0);
var O2 = /* @__PURE__ */ ke("<path></path>");
function fd(e, t) {
  ve(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ae();
  var a = O2();
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
ce(
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
const z2 = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var L2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const T2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function vd(e, t) {
  ve(t, !1), Ue(e, T2);
  const [n, r] = rt(), o = () => ne(k, "$flowId", n), i = () => ne(w, "$viewport", n), a = /* @__PURE__ */ ie(), s = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => jn.Dots), p = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), g = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Fe(), H = h() || z2[v()], S = v() === jn.Dots, O = v() === jn.Cross, z = Array.isArray(p()) ? p() : [p(), p()];
  ge(
    () => (o(), te(d())),
    () => {
      Q(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ge(() => i(), () => {
    Q(s, [
      z[0] * i().zoom || 1,
      z[1] * i().zoom || 1
    ]);
  }), ge(() => i(), () => {
    Q(l, H * i().zoom);
  }), ge(() => (f(l), f(s)), () => {
    Q(u, O ? [f(l), f(l)] : f(s));
  }), ge(
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
  var D = L2();
  let I;
  var L = X(D), Z = X(L);
  {
    var E = (V) => {
      const P = /* @__PURE__ */ xe(() => f(l) / 2);
      dd(V, {
        get radius() {
          return f(P);
        },
        get class() {
          return g();
        }
      });
    }, _ = (V) => {
      fd(V, {
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
          return g();
        }
      });
    };
    me(Z, (V) => {
      S ? V(E) : V(_, !1);
    });
  }
  q(L);
  var M = R(L);
  q(D), Ce(
    (V) => {
      $t(D, 0, V, "svelte-1r7pe8d"), I = ft(D, "", I, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), $e(L, "id", f(a)), $e(L, "x", i().x % f(s)[0]), $e(L, "y", i().y % f(s)[1]), $e(L, "width", f(s)[0]), $e(L, "height", f(s)[1]), $e(L, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), $e(M, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Vt(["svelte-flow__background", C()]))
    ],
    xe
  ), T(e, D);
  var N = pe({
    get id() {
      return d();
    },
    set id(V) {
      d(V), m();
    },
    get variant() {
      return v();
    },
    set variant(V) {
      v(V), m();
    },
    get gap() {
      return p();
    },
    set gap(V) {
      p(V), m();
    },
    get size() {
      return h();
    },
    set size(V) {
      h(V), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(V) {
      x(V), m();
    },
    get bgColor() {
      return b();
    },
    set bgColor(V) {
      b(V), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(V) {
      $(V), m();
    },
    get patternClass() {
      return g();
    },
    set patternClass(V) {
      g(V), m();
    },
    get class() {
      return C();
    },
    set class(V) {
      C(V), m();
    }
  });
  return r(), N;
}
ce(
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
var D2 = /* @__PURE__ */ ke("<rect></rect>");
function pd(e, t) {
  ve(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ae();
  var p = D2();
  let h;
  return Ce(
    (x, b) => {
      h = $t(p, 0, x, null, h, b), $e(p, "x", n()), $e(p, "y", r()), $e(p, "rx", a()), $e(p, "ry", a()), $e(p, "width", o()), $e(p, "height", i()), ft(p, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(p, "shape-rendering", l());
    },
    [
      () => vn(Vt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    xe
  ), T(e, p), pe({
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
function Dl(e, t) {
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
var A2 = /* @__PURE__ */ ke("<title> </title>"), I2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function gd(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(Ee, "$flowId", n), i = () => ne(He, "$viewport", n), a = () => ne(le, "$containerWidth", n), s = () => ne(U, "$containerHeight", n), l = () => ne(we, "$nodeLookup", n), u = () => ne(Se, "$nodes", n), c = () => ne(j, "$panZoom", n), d = () => ne(Ne, "$translateExtent", n), v = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), w = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie();
  let z = y(t, "position", 12, "bottom-right"), D = y(t, "ariaLabel", 12, "Mini map"), I = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), Z = y(t, "nodeClass", 12, ""), E = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), M = y(t, "bgColor", 12, void 0), N = y(t, "maskColor", 12, void 0), V = y(t, "maskStrokeColor", 12, void 0), P = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), B = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), G = y(t, "zoomable", 12, !0), J = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), he = y(t, "style", 12, ""), ae = y(t, "class", 12, "");
  const ye = 200, se = 150, {
    nodes: Se,
    nodeLookup: we,
    viewport: He,
    width: le,
    height: U,
    flowId: Ee,
    panZoom: j,
    translateExtent: Ne
  } = Fe(), De = L() === void 0 ? void 0 : ha(L()), Te = ha(I()), ue = ha(Z()), de = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), oe = `svelte-flow__minimap-desc-${o()}`;
  let Me = /* @__PURE__ */ ie(f(v));
  const et = () => f($);
  ge(
    () => (i(), a(), s()),
    () => {
      Q(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ge(
    () => (l(), f(v), u()),
    () => {
      Q(Me, l().size > 0 ? pc(Oo(l(), { filter: (fe) => !fe.hidden }), f(v)) : f(v)), u();
    }
  ), ge(() => te(A()), () => {
    Q(p, A() ?? ye);
  }), ge(() => te(B()), () => {
    Q(h, B() ?? se);
  }), ge(
    () => (f(Me), f(p)),
    () => {
      Q(x, f(Me).width / f(p));
    }
  ), ge(
    () => (f(Me), f(h)),
    () => {
      Q(b, f(Me).height / f(h));
    }
  ), ge(
    () => (f(x), f(b)),
    () => {
      Q($, Math.max(f(x), f(b)));
    }
  ), ge(() => (f($), f(p)), () => {
    Q(g, f($) * f(p));
  }), ge(
    () => (f($), f(h)),
    () => {
      Q(C, f($) * f(h));
    }
  ), ge(() => f($), () => {
    Q(w, 5 * f($));
  }), ge(
    () => (f(Me), f(g), f(w)),
    () => {
      Q(k, f(Me).x - (f(g) - f(Me).width) / 2 - f(w));
    }
  ), ge(
    () => (f(Me), f(C), f(w)),
    () => {
      Q(H, f(Me).y - (f(C) - f(Me).height) / 2 - f(w));
    }
  ), ge(() => (f(g), f(w)), () => {
    Q(S, f(g) + f(w) * 2);
  }), ge(() => (f(C), f(w)), () => {
    Q(O, f(C) + f(w) * 2);
  }), yt(), Ae();
  const tt = /* @__PURE__ */ xe(() => he() + (M() ? `;--xy-minimap-background-color-props:${M()}` : "")), ee = /* @__PURE__ */ xe(() => Vt(["svelte-flow__minimap", ae()]));
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
    children: (fe, tn) => {
      var nn = Je(), hn = be(nn);
      {
        var Le = (ot) => {
          var qe = I2();
          $e(qe, "aria-labelledby", oe);
          let Ie;
          var it = X(qe);
          {
            var rn = (Ct) => {
              var Ht = A2();
              $e(Ht, "id", oe);
              var yr = X(Ht, !0);
              q(Ht), Ce(() => ct(yr, D())), T(Ct, Ht);
            };
            me(it, (Ct) => {
              D() && Ct(rn);
            });
          }
          var Kt = R(it);
          Et(Kt, 1, u, (Ct) => Ct.id, (Ct, Ht) => {
            var yr = Je();
            const at = /* @__PURE__ */ xe(() => l().get(f(Ht).id));
            var ra = be(yr);
            {
              var Jr = (At) => {
                const Ro = /* @__PURE__ */ xe(() => tr(f(at))), Zo = /* @__PURE__ */ xe(() => De == null ? void 0 : De(f(at))), qo = /* @__PURE__ */ xe(() => Te(f(at))), oa = /* @__PURE__ */ xe(() => ue(f(at)));
                pd(At, lt(
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
                      return _();
                    },
                    shapeRendering: de,
                    get class() {
                      return f(oa);
                    }
                  }
                ));
              };
              me(ra, (At) => {
                f(at) && gc(f(at)) && At(Jr);
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
            $e(qe, "width", f(p)), $e(qe, "height", f(h)), $e(qe, "viewBox", `${f(k) ?? ""} ${f(H) ?? ""} ${f(S) ?? ""} ${f(O) ?? ""}`), Ie = ft(qe, "", Ie, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": V(),
              "--xy-minimap-mask-stroke-width-props": P() ? P() * f($) : void 0
            }), $e(Ur, "d", `M${f(k) - f(w)},${f(H) - f(w)}h${f(S) + f(w) * 2}v${f(O) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), T(ot, qe);
        };
        me(hn, (ot) => {
          c() && ot(Le);
        });
      }
      T(fe, nn);
    },
    $$slots: { default: !0 }
  });
  var Ye = pe({
    get position() {
      return z();
    },
    set position(fe) {
      z(fe), m();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(fe) {
      D(fe), m();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(fe) {
      I(fe), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(fe) {
      L(fe), m();
    },
    get nodeClass() {
      return Z();
    },
    set nodeClass(fe) {
      Z(fe), m();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(fe) {
      E(fe), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(fe) {
      _(fe), m();
    },
    get bgColor() {
      return M();
    },
    set bgColor(fe) {
      M(fe), m();
    },
    get maskColor() {
      return N();
    },
    set maskColor(fe) {
      N(fe), m();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(fe) {
      V(fe), m();
    },
    get maskStrokeWidth() {
      return P();
    },
    set maskStrokeWidth(fe) {
      P(fe), m();
    },
    get width() {
      return A();
    },
    set width(fe) {
      A(fe), m();
    },
    get height() {
      return B();
    },
    set height(fe) {
      B(fe), m();
    },
    get pannable() {
      return K();
    },
    set pannable(fe) {
      K(fe), m();
    },
    get zoomable() {
      return G();
    },
    set zoomable(fe) {
      G(fe), m();
    },
    get inversePan() {
      return J();
    },
    set inversePan(fe) {
      J(fe), m();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(fe) {
      W(fe), m();
    },
    get style() {
      return he();
    },
    set style(fe) {
      he(fe), m();
    },
    get class() {
      return ae();
    },
    set class(fe) {
      ae(fe), m();
    }
  });
  return r(), Ye;
}
ce(
  gd,
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
const Al = (e) => zh(e);
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: p, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = Fe(), g = (k) => {
    var H, S;
    const O = F(h), z = Al(k) ? k : O.get(k.id), D = z.parentId ? qh(z.position, z.measured, z.parentId, O, F(x)) : z.position, I = {
      ...z,
      position: D,
      width: ((H = z.measured) == null ? void 0 : H.width) ?? z.width,
      height: ((S = z.measured) == null ? void 0 : S.height) ?? z.height
    };
    return Ir(I);
  }, C = (k, H, S = { replace: !1 }) => {
    var O;
    const z = (O = F(h).get(k)) == null ? void 0 : O.internals.userNode;
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
    getEdge: (k) => F(b).get(k),
    getEdges: (k) => k === void 0 ? F(v) : Il(F(b), k),
    setZoom: (k, H) => {
      const S = F(c);
      return S ? S.scaleTo(k, { duration: H == null ? void 0 : H.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, H) => {
      const S = F(i), O = F(c);
      return O ? (await O.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, H, S) => {
      const O = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : F(u), z = F(c);
      return z ? (await z.setViewport({
        x: F(a) / 2 - k * O,
        y: F(s) / 2 - H * O,
        zoom: O
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, H) => {
      const S = F(c);
      if (!S)
        return Promise.resolve(!1);
      const O = ws(k, F(a), F(s), F(l), F(u), (H == null ? void 0 : H.padding) ?? 0.1);
      return await S.setViewport(O, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, H = !0, S) => {
      const O = bl(k), z = O ? k : g(k);
      return z ? (S || F(d)).filter((D) => {
        const I = F(h).get(D.id);
        if (!I || !O && D.id === k.id)
          return !1;
        const L = Ir(I), Z = Co(L, z);
        return H && Z > 0 || Z >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (k, H, S = !0) => {
      const O = bl(k) ? k : g(k);
      if (!O)
        return !1;
      const z = Co(O, H);
      return S && z > 0 || z >= O.width * O.height;
    },
    deleteElements: async ({ nodes: k = [], edges: H = [] }) => {
      const { nodes: S, edges: O } = await dc({
        nodesToRemove: k,
        edgesToRemove: H,
        nodes: F(d),
        edges: F(v),
        onBeforeDelete: F(r)
      });
      return S && d.update((z) => z.filter((D) => !S.some(({ id: I }) => I === D.id))), O && v.update((z) => z.filter((D) => !O.some(({ id: I }) => I === D.id))), {
        deletedNodes: S,
        deletedEdges: O
      };
    },
    screenToFlowPosition: (k, H = { snapToGrid: !0 }) => {
      const S = F(p);
      if (!S)
        return k;
      const O = H.snapToGrid ? F(o) : !1, { x: z, y: D, zoom: I } = F(i), { x: L, y: Z } = S.getBoundingClientRect(), E = {
        x: k.x - L,
        y: k.y - Z
      };
      return zo(E, [z, D, I], O !== null, O || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const H = F(p);
      if (!H)
        return k;
      const { x: S, y: O, zoom: z } = F(i), { x: D, y: I } = H.getBoundingClientRect(), L = Ci(k, [S, O, z]);
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
      edges: F(v).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: C,
    updateNodeData: (k, H, S) => {
      var O;
      const z = (O = F(h).get(k)) == null ? void 0 : O.internals.userNode;
      if (!z)
        return;
      const D = typeof H == "function" ? H(z) : H;
      z.data = S != null && S.replace ? D : { ...z.data, ...D }, d.update((I) => I);
    },
    getNodesBounds: (k) => {
      const H = F(h), S = F(x);
      return Lh(k, { nodeLookup: H, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: H, nodeId: S }) => {
      var O;
      return Array.from(((O = F($).get(`${S}-${k}-${H ?? null}`)) == null ? void 0 : O.values()) ?? []);
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
var R2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  ve(t, !1);
  const [n, r] = rt(), o = () => ne(C, "$nodes", n), i = () => ne(g, "$nodeLookup", n), a = () => ne($, "$viewport", n), s = () => ne(b, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), p = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: g, nodes: C } = Fe(), { getNodesBounds: w } = Dt(), k = ur("svelteflow__node_id");
  let H = /* @__PURE__ */ ie(), S = /* @__PURE__ */ ie([]), O = h() !== void 0 ? h() : 10, z = v() !== void 0 ? v() : Pe.Top, D = p() !== void 0 ? p() : "center";
  ge(
    () => (o(), te(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      Q(S, _.reduce(
        (M, N) => {
          const V = i().get(N);
          return V && M.push(V), M;
        },
        []
      ));
    }
  ), ge(
    () => (f(S), a()),
    () => {
      const _ = w(f(S));
      _ && Q(H, o0(_, a(), z, O, D));
    }
  ), ge(() => f(S), () => {
    Q(l, f(S).length === 0 ? 1 : Math.max(...f(S).map((_) => (_.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    Q(u, o().filter((_) => _.selected).length);
  }), ge(
    () => (te(x()), f(S), f(u)),
    () => {
      Q(c, typeof x() == "boolean" ? x() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), yt(), Ae();
  var I = Je(), L = be(I);
  {
    var Z = (_) => {
      var M = R2();
      let N;
      var V = X(M);
      xt(V, t, "default", {}), q(M), bt(M, (P, A) => Mi == null ? void 0 : Mi(P, A), () => ({ domNode: s() })), Ce(
        (P) => {
          $e(M, "data-id", P), N = ft(M, "", N, {
            position: "absolute",
            transform: f(H),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((P, A) => `${P}${A.id} `, "").trim()
        ],
        xe
      ), T(_, M);
    };
    me(L, (_) => {
      s() && f(c) && f(S) && _(Z);
    });
  }
  T(e, I);
  var E = pe({
    get nodeId() {
      return d();
    },
    set nodeId(_) {
      d(_), m();
    },
    get position() {
      return v();
    },
    set position(_) {
      v(_), m();
    },
    get align() {
      return p();
    },
    set align(_) {
      p(_), m();
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
  return r(), E;
}
ce(
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
  return Kn([t, n], ([, i], a) => {
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
    (!f0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Rl = "tinyflow-component";
class Z2 {
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
const q2 = () => {
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
}, oi = q2();
var B2 = /* @__PURE__ */ re("<button><!></button>");
function Ke(e, t) {
  ve(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = B2();
  let i;
  var a = X(o);
  return cr(a, () => n() ?? gt), q(o), Ce(() => i = Xt(o, i, {
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
ce(Ke, { children: {} }, [], [], !0);
var X2 = /* @__PURE__ */ re("<input>");
function md(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = X2();
  Yn(r);
  let o;
  Ce(() => o = Xt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), T(e, r), pe();
}
ce(md, {}, [], [], !0);
var Y2 = /* @__PURE__ */ re('<div><input type="hidden"> <!> <!></div>');
const K2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function yd(e, t) {
  ve(t, !0), Ue(e, K2);
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
  var l = Y2();
  let u;
  var c = X(l);
  Yn(c);
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
  var v = R(d, 2);
  return Ke(v, {
    onclick: (p) => {
      var h;
      (h = a()) == null || h(o(), r(), p);
    },
    style: "padding: 3px",
    children: (p, h) => {
      ze();
      var x = Re();
      Ce(() => ct(x, i())), T(p, x);
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
    set placeholder(p) {
      n(p), m();
    },
    get label() {
      return r();
    },
    set label(p) {
      r(p), m();
    },
    get value() {
      return o();
    },
    set value(p) {
      o(p), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(p = "选择...") {
      i(p), m();
    },
    get onChosen() {
      return a();
    },
    set onChosen(p) {
      a(p), m();
    }
  });
}
ce(
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
var W2 = /* @__PURE__ */ re("<input>");
function vt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = W2();
  Yn(r);
  let o;
  Ce(() => o = Xt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), T(e, r), pe();
}
ce(vt, {}, [], [], !0);
var j2 = /* @__PURE__ */ re("<textarea></textarea>");
function mt(e, t) {
  ve(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = j2();
  Mf(o);
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
ce(mt, { value: {} }, [], [], !0);
var F2 = /* @__PURE__ */ re('<div role="button"><!></div>'), G2 = /* @__PURE__ */ re("<div></div>");
function wd(e, t) {
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
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Ae();
  var l = G2();
  let u;
  return Et(l, 5, o, zr, (c, d, v) => {
    var p = F2();
    $e(p, "tabindex", v), p.__click = () => s(f(d), v), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = X(p);
    {
      var x = ($) => {
        var g = Re();
        Ce(() => ct(g, f(d).label)), T($, g);
      }, b = ($) => {
        var g = Je(), C = be(g);
        cr(C, () => f(d).label ?? gt), T($, g);
      };
      me(h, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    q(p), Ce(() => $t(p, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), T(c, p);
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
ce(wd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var U2 = (e, t, n) => t(f(n)), J2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, Q2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), em = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), tm = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), nm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), rm = /* @__PURE__ */ re("<div></div>");
const om = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function bd(e, t) {
  ve(t, !0), Ue(e, om);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => sn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = rm();
  return Et(a, 21, n, zr, (s, l, u) => {
    var c = nm(), d = X(c);
    $e(d, "tabindex", u), d.__click = [U2, i, l], d.__keydown = [J2, i, l];
    var v = X(d);
    {
      var p = (w) => {
        var k = Q2(), H = X(k);
        Bn(H, {
          get target() {
            return f(l).icon;
          }
        }), q(k), T(w, k);
      };
      me(v, (w) => {
        f(l).icon && w(p);
      });
    }
    var h = R(v, 2);
    Bn(h, {
      get target() {
        return f(l).title;
      }
    });
    var x = R(h, 2);
    q(d);
    var b = R(d, 2);
    {
      var $ = (w) => {
        var k = em(), H = X(k);
        Bn(H, {
          get target() {
            return f(l).description;
          }
        }), q(k), T(w, k);
      };
      me(b, (w) => {
        f(l).description && w($);
      });
    }
    var g = R(b, 2);
    {
      var C = (w) => {
        var k = tm(), H = X(k);
        Bn(H, {
          get target() {
            return f(l).content;
          }
        }), q(k), T(w, k);
      };
      me(g, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    q(c), Ce((w) => $t(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
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
ce(bd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Bn(e, t) {
  ve(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = be(r);
  {
    var i = (s) => {
      var l = Je(), u = be(l);
      cr(u, () => n() ?? gt), T(s, l);
    }, a = (s) => {
      var l = Je(), u = be(l);
      ls(u, n), T(s, l);
    };
    me(o, (s) => {
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
ce(Bn, { target: {} }, [], [], !0);
var im = (e, t, n) => t(f(n)), am = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), sm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), lm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), um = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), cm = /* @__PURE__ */ re("<!> <!>", 1), dm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), fm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), vm = /* @__PURE__ */ re("<div><!></div>");
function Qt(e, t) {
  ve(t, !0);
  const n = (g, C = gt) => {
    var w = Je(), k = be(w);
    Et(k, 19, C, (H, S) => `${S}_${H.value}`, (H, S) => {
      var O = lm(), z = be(O);
      z.__click = [im, h, S];
      var D = X(z), I = X(D);
      {
        var L = (M) => {
          var N = am();
          T(M, N);
        };
        me(I, (M) => {
          f(S).children && f(S).children.length > 0 && M(L);
        });
      }
      q(D);
      var Z = R(D, 2);
      Bn(Z, {
        get target() {
          return f(S).label;
        }
      }), q(z);
      var E = R(z, 2);
      {
        var _ = (M) => {
          var N = sm(), V = X(N);
          n(V, () => f(S).children), q(N), T(M, N);
        };
        me(E, (M) => {
          f(S).children && f(S).children.length > 0 && (s() || u().includes(f(S).value)) && M(_);
        });
      }
      T(H, O);
    }), T(g, w);
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
  ]), v = /* @__PURE__ */ Ve(() => {
    const g = [], C = (w) => {
      for (let k of w)
        i().length > 0 ? i().includes(k.value) && g.push(k) : a().includes(k.value) && g.push(k), k.children && k.children.length > 0 && C(k.children);
    };
    return C(r()), g;
  }), p;
  function h(g) {
    var C;
    p == null || p.hide(), (C = o()) == null || C(g);
  }
  var x = vm();
  let b;
  var $ = X(x);
  return _n(
    Gr($, {
      floating: (g) => {
        var C = um(), w = X(C);
        n(w, r), q(C), T(g, C);
      },
      children: (g, C) => {
        var w = fm();
        let k;
        var H = X(w);
        Et(
          H,
          23,
          () => f(v),
          (S, O) => `${O}_${S.value}`,
          (S, O, z) => {
            var D = Je(), I = be(D);
            {
              var L = (E) => {
                var _ = Je(), M = be(_);
                {
                  var N = (V) => {
                    Bn(V, {
                      get target() {
                        return f(O).label;
                      }
                    });
                  };
                  me(M, (V) => {
                    f(z) === 0 && V(N);
                  });
                }
                T(E, _);
              }, Z = (E) => {
                var _ = cm(), M = be(_);
                Bn(M, {
                  get target() {
                    return f(O).label;
                  }
                });
                var N = R(M, 2);
                {
                  var V = (P) => {
                    var A = Re(",");
                    T(P, A);
                  };
                  me(N, (P) => {
                    f(z) < f(v).length - 1 && P(V);
                  });
                }
                T(E, _);
              };
              me(I, (E) => {
                l() ? E(Z, !1) : E(L);
              });
            }
            T(S, D);
          },
          (S) => {
            var O = dm(), z = X(O, !0);
            q(O), Ce(() => ct(z, c())), T(S, O);
          }
        ), q(H), ze(2), q(w), Ce(() => k = Xt(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), T(g, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => p = g,
    () => p
  ), q(x), Ce(() => b = Xt(x, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), T(e, x), pe({
    get items() {
      return r();
    },
    set items(g) {
      r(g), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(g) {
      o(g), m();
    },
    get value() {
      return i();
    },
    set value(g = []) {
      i(g), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(g = []) {
      a(g), m();
    },
    get expandAll() {
      return s();
    },
    set expandAll(g = !0) {
      s(g), m();
    },
    get multiple() {
      return l();
    },
    set multiple(g = !1) {
      l(g), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(g = []) {
      u(g), m();
    },
    get placeholder() {
      return c();
    },
    set placeholder(g) {
      c(g), m();
    }
  });
}
jr(["click"]);
ce(
  Qt,
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
const ko = Math.min, Er = Math.max, Hi = Math.round, wn = (e) => ({
  x: e,
  y: e
}), pm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gm = {
  start: "end",
  end: "start"
};
function Za(e, t, n) {
  return Er(e, ko(t, n));
}
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
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
  return ["top", "bottom"].includes(pr(e)) ? "y" : "x";
}
function ks(e) {
  return xd(lr(e));
}
function hm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ks(e), i = _s(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Pi(a)), [a, Pi(a)];
}
function mm(e) {
  const t = Pi(e);
  return [qa(e), t, qa(t)];
}
function qa(e) {
  return e.replace(/start|end/g, (t) => gm[t]);
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
  let i = ym(pr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(qa)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => pm[t]);
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
function $d(e) {
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
  const i = lr(t), a = ks(t), s = _s(a), l = pr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ao(t)) {
    case "start":
      p[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      p[a] += v * (n && u ? -1 : 1);
      break;
  }
  return p;
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
    y: d
  } = Zl(u, r, l), v = r, p = {}, h = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: g,
      y: C,
      data: w,
      reset: k
    } = await $({
      x: c,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: p,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = g ?? c, d = C ?? d, p = {
      ...p,
      [b]: {
        ...p[b],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Zl(u, v, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: p
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
    altBoundary: v = !1,
    padding: p = 0
  } = Do(t, e), h = $d(p), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = Ni(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = d === "floating" ? {
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
  }, w = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: g,
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
    } = Do(e, t) || {};
    if (u == null)
      return {};
    const d = $d(c), v = {
      x: n,
      y: r
    }, p = ks(o), h = _s(p), x = await a.getDimensions(u), b = p === "y", $ = b ? "top" : "left", g = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[p] - v[p] - i.floating[h], k = v[p] - i.reference[p], H = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = H ? H[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(H))) && (S = s.floating[C] || i.floating[h]);
    const O = w / 2 - k / 2, z = S / 2 - x[h] / 2 - 1, D = ko(d[$], z), I = ko(d[g], z), L = D, Z = S - x[h] - I, E = S / 2 - x[h] / 2 + O, _ = Za(L, E, Z), M = !l.arrow && Ao(o) != null && E !== _ && i.reference[h] / 2 - (E < L ? D : I) - x[h] / 2 < 0, N = M ? E < L ? E - L : E - Z : 0;
    return {
      [p]: v[p] + N,
      data: {
        [p]: _,
        centerOffset: E - _ - N,
        ...M && {
          alignmentOffset: N
        }
      },
      reset: M
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
        crossAxis: d = !0,
        fallbackPlacements: v,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: x = !0,
        ...b
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = pr(o), g = lr(s), C = pr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Pi(s)] : mm(s)), H = h !== "none";
      !v && H && k.push(...wm(s, x, h, w));
      const S = [s, ...k], O = await Cd(t, b), z = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(O[$]), d) {
        const _ = hm(o, a, w);
        z.push(O[_[0]], O[_[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: z
      }], !z.every((_) => _ <= 0)) {
        var I, L;
        const _ = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = S[_];
        if (M) {
          var Z;
          const V = d === "alignment" ? g !== lr(M) : !1, P = ((Z = D[0]) == null ? void 0 : Z.overflows[0]) > 0;
          if (!V || P)
            return {
              data: {
                index: _,
                overflows: D
              },
              reset: {
                placement: M
              }
            };
        }
        let N = (L = D.filter((V) => V.overflows[0] <= 0).sort((V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var E;
              const V = (E = D.filter((P) => {
                if (H) {
                  const A = lr(P.placement);
                  return A === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((A) => A > 0).reduce((A, B) => A + B, 0)]).sort((P, A) => P[1] - A[1])[0]) == null ? void 0 : E[0];
              V && (N = V);
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = pr(n), s = Ao(n), l = lr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Do(t, e);
  let {
    mainAxis: v,
    crossAxis: p,
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
  return s && typeof h == "number" && (p = s === "end" ? h * -1 : h), l ? {
    x: p * c,
    y: v * u
  } : {
    x: v * u,
    y: p * c
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
              y: g
            } = b;
            return {
              x: $,
              y: g
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await Cd(t, l), d = lr(pr(o)), v = xd(d);
      let p = u[v], h = u[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", g = p + c[b], C = p - c[$];
        p = Za(g, p, C);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", g = h + c[b], C = h - c[$];
        h = Za(g, h, C);
      }
      const x = s.fn({
        ...t,
        [v]: p,
        [d]: h
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
function Mm(e) {
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
  const t = Ms(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Em(e) {
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
function Ms() {
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
function Jn(e) {
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
  const t = Jn(e);
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
function Md(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Hi(n) !== i || Hi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Ed(e) {
  return dn(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = Ed(e);
  if (!kn(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Md(t);
  let a = (i ? Hi(n.width) : n.width) / r, s = (i ? Hi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Vm = /* @__PURE__ */ wn(0);
function Vd(e) {
  const t = Bt(e);
  return !Ms() || !t.visualViewport ? Vm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function So(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ed(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Vr(r)) : a = Vr(e));
  const s = Hm(i, n, r) ? Vd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), p = r && dn(r) ? Bt(r) : r;
    let h = v, x = Ba(h);
    for (; x && r && p !== h; ) {
      const b = Vr(x), $ = x.getBoundingClientRect(), g = fn(x), C = $.left + (x.clientLeft + parseFloat(g.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(g.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += w, h = Bt(x), x = Ba(h);
    }
  }
  return Ni({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Es(e, t) {
  const n = ta(e).scrollLeft;
  return t ? t.left + n : So(An(e)).left + n;
}
function Hd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Es(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Pm(e) {
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
    const p = So(r);
    u = Vr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const v = a && !d && !i ? Hd(a, l, !0) : wn(0);
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
  const t = An(e), n = ta(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Es(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function zm(e, t) {
  const n = Bt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Ms();
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
    r = zm(e, n);
  else if (t === "document")
    r = Om(An(e));
  else if (dn(t))
    r = Lm(t, n);
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
  const n = Jn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Pd(n, t);
}
function Tm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Sd(e, []).filter((s) => dn(s) && Fr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; dn(a) && !Zr(a); ) {
    const s = fn(a), l = Ss(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function Dm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ea(t) ? [] : Tm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Bl(t, u, o);
    return l.top = Er(c.top, l.top), l.right = ko(c.right, l.right), l.bottom = ko(c.bottom, l.bottom), l.left = Er(c.left, l.left), l;
  }, Bl(t, a, o));
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
  const r = kn(t), o = An(t), i = n === "fixed", a = So(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  function u() {
    l.x = Es(o);
  }
  if (r || !r && !i)
    if ((Fr(t) !== "body" || Io(o)) && (s = ta(t)), r) {
      const p = So(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Hd(o, s) : wn(0), d = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
  return {
    x: d,
    y: v,
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
    let o = Jn(e);
    for (; o && !Zr(o); ) {
      if (dn(o) && !ma(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && Mm(r) && ma(r); )
    r = Xl(r, t);
  return r && Zr(r) && ma(r) && !Ss(r) ? n : r || Em(e) || n;
}
const Rm = async function(e) {
  const t = this.getOffsetParent || Nd, n = this.getDimensions, r = await n(e.floating);
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
function Zm(e) {
  return fn(e).direction === "rtl";
}
const qm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pm,
  getDocumentElement: An,
  getClippingRect: Dm,
  getOffsetParent: Nd,
  getElementRects: Rm,
  getClientRects: Nm,
  getDimensions: Am,
  getScale: Vr,
  isElement: dn,
  isRTL: Zm
}, Bm = km, Xm = Sm, Ym = Cm, Km = $m, Wm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: qm,
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
  function d() {
    Wm(e, u, {
      placement: r,
      middleware: [
        Bm(o),
        // 手动偏移配置
        Ym(i),
        //自动翻转
        Xm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Km({ element: c })] : []
      ]
    }).then(({ x: $, y: g, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: H } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
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
  let v = !1;
  function p() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? h() : p();
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
  en(() => (s = jm({
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
  var u = Fm(), c = X(u), d = X(c);
  cr(d, n), q(c), _n(c, (h) => i = h, () => i);
  var v = R(c, 2), p = X(v);
  return cr(p, r), q(v), _n(v, (h) => a = h, () => a), q(u), T(e, u), pe({
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
ce(Gr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  ve(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Je(), s = be(a);
  return Tf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ce(() => c = Xt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Je(), v = be(d);
    cr(v, () => n() ?? gt), T(u, d);
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
ce(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Gm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Um = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function na(e, t) {
  ve(t, !0), Ue(e, Um);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ke(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Gm();
      T(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
ce(na, {}, [], [], !0);
const Jm = () => {
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
}, Qm = () => {
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
}, Qn = () => ur("tinyflow_options");
function ht() {
  return ur("svelteflow__node_id");
}
var ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ry = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), oy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, iy = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), ay = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), sy = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ly = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const uy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function gn(e, t) {
  ve(t, !0), Ue(e, uy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), p = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Dt(), g = /* @__PURE__ */ Ve(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = Jm(), { copyNode: w } = Qm(), k = Qn(), H = () => {
    var P;
    (P = k.onNodeExecute) == null || P.call(k, $(r()));
  };
  let S = ht();
  var O = ly(), z = be(O);
  {
    var D = (P) => {
      hd(P, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (A, B) => {
          var K = sy(), G = X(K);
          {
            var J = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (He, le) => {
                  var U = ey();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            me(G, (we) => {
              u() && we(J);
            });
          }
          var W = R(G, 2);
          {
            var he = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (He, le) => {
                  var U = ty();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            me(W, (we) => {
              l() && we(he);
            });
          }
          var ae = R(W, 2);
          {
            var ye = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: H,
                children: (He, le) => {
                  var U = ny();
                  T(He, U);
                },
                $$slots: { default: !0 }
              });
            };
            me(ae, (we) => {
              s() && we(ye);
            });
          }
          var se = R(ae, 2);
          {
            var Se = (we) => {
              Gr(we, {
                placement: "bottom",
                floating: (He) => {
                  var le = iy(), U = X(le), Ee = R(X(U));
                  vt(Ee, {
                    style: "width: 100%;",
                    onchange: (oe) => {
                      const Me = oe.target.value;
                      b(S, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(U);
                  var j = R(U, 2), Ne = R(X(j));
                  mt(Ne, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (oe) => {
                      const Me = oe.target.value;
                      b(S, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(j);
                  var De = R(j, 2);
                  {
                    var Te = (oe) => {
                      var Me = ry(), et = R(X(Me));
                      mt(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (tt) => {
                          const ee = tt.target.value;
                          b(S, { condition: ee });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(Me), T(oe, Me);
                    };
                    me(De, (oe) => {
                      d() && oe(Te);
                    });
                  }
                  var ue = R(De, 2), de = R(X(ue), 2);
                  Yn(de), de.__change = [oy, b, S], q(ue), q(le), Ce(() => Rf(de, !!n().async)), T(He, le);
                },
                children: (He, le) => {
                  Ke(He, {
                    class: "tf-node-toolbar-item",
                    children: (U, Ee) => {
                      var j = ay();
                      T(U, j);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            me(se, (we) => {
              c() && we(Se);
            });
          }
          q(K), T(A, K);
        },
        $$slots: { default: !0 }
      });
    };
    me(z, (P) => {
      (s() || l() || u()) && P(D);
    });
  }
  var I = R(z, 2), L = R(X(I), 2), Z = X(L);
  bd(Z, {
    get items() {
      return f(g);
    },
    activeKeys: x,
    onChange: (P, A) => {
      var B;
      b(r(), { expand: A == null ? void 0 : A.includes("key") }), (B = h()) == null || B(A != null && A.includes("key") ? "key" : "");
    }
  }), q(L), q(I);
  var E = R(I, 2);
  {
    var _ = (P) => {
      Un(P, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    me(E, (P) => {
      p() && P(_);
    });
  }
  var M = R(E, 2);
  {
    var N = (P) => {
      Un(P, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    me(M, (P) => {
      v() && P(N);
    });
  }
  var V = R(M, 2);
  return cr(V, () => i() ?? gt), T(e, O), pe({
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
      return v();
    },
    set showSourceHandle(P = !0) {
      v(P), m();
    },
    get showTargetHandle() {
      return p();
    },
    set showTargetHandle(P = !0) {
      p(P), m();
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
ce(
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
], cy = [
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
var dy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), vy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const py = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function zd(e, t) {
  ve(t, !0), Ue(e, py);
  const [n, r] = rt(), o = () => ne(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var z, D;
    return {
      ...i(),
      ...(D = (z = o()) == null ? void 0 : z.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (z, D) => {
    c(s, (I) => {
      let L = I.data.parameters;
      return L[a()][z] = D, { parameters: L };
    });
  }, v = (z) => {
    const D = z.target.value;
    d("name", D);
  }, p = (z) => {
    const D = z.target.checked;
    d("required", D);
  }, h = (z) => {
    const D = z.value;
    D && d("dataType", D);
  };
  let x;
  const b = () => {
    c(s, (z) => {
      let D = z.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), x == null || x.hide();
  };
  var $ = vy(), g = be($), C = X(g);
  vt(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), q(g);
  var w = R(g, 2), k = X(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: p
  }), q(w);
  var H = R(w, 2), S = X(H);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (z) => {
        var D = dy(), I = X(D), L = R(X(I));
        const Z = /* @__PURE__ */ Ve(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Qt(L, {
          items: Od,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(Z);
          }
        }), q(I);
        var E = R(I, 2), _ = R(X(E));
        mt(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const B = A.target.value;
            d("defaultValue", B);
          }
        }), q(E);
        var M = R(E, 2), N = R(X(M));
        mt(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const B = A.target.value;
            d("description", B);
          }
        }), q(M);
        var V = R(M, 2), P = X(V);
        Ke(P, {
          onclick: b,
          children: (A, B) => {
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
            var Z = fy();
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => x = z,
    () => x
  ), q(H), T(e, $);
  var O = pe({
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
  return r(), O;
}
ce(zd, { parameter: {}, index: {} }, [], [], !0);
var gy = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), hy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), my = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const yy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ld(e, t) {
  ve(t, !0), Ue(e, yy);
  const [n, r] = rt(), o = () => ne(f(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Ve(() => mr(i)), s = /* @__PURE__ */ Ve(() => {
    var v, p;
    return [...((p = (v = o()) == null ? void 0 : v.data) == null ? void 0 : p.parameters) || []];
  });
  var l = my(), u = X(l);
  {
    var c = (v) => {
      var p = gy();
      ze(4), T(v, p);
    };
    me(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = R(u, 2);
  Et(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, p, h) => {
      zd(v, {
        get parameter() {
          return f(p);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var p = hy();
      T(v, p);
    }
  ), q(l), T(e, l), pe(), r();
}
ce(Ld, {}, [], [], !0);
const Oi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = qr()), Oi(t.children);
}), e), En = () => {
  const { updateNodeData: e } = Dt();
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
var wy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), by = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const $y = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Td(e, t) {
  ve(t, !0), Ue(e, $y);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return gn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = wy();
      T(a, s);
    },
    children: (a, s) => {
      var l = xy(), u = be(l), c = X(u);
      Ge(c, {
        level: 3,
        children: (p, h) => {
          ze();
          var x = Re("输入参数");
          T(p, x);
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
        children: (p, h) => {
          var x = by();
          T(p, x);
        },
        $$slots: { default: !0 }
      }), q(u);
      var v = R(u, 2);
      Ld(v, {}), T(a, l);
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
ce(Td, { data: {} }, [], [], !0);
const Dd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Dd(e, r.source, n));
}, Ad = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Ad(r.children, t + "." + r.name, n)
})), Yl = (e, t, n) => {
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
            value: e.id + ".loop"
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
          children: Ad(r, e.id, t)
        };
    }
  }
}, Cy = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o, nodeLookup: i } = Fe();
  return Kn(
    [n, r, o, i],
    ([a, s, l, u]) => {
      if (!a)
        return [];
      const c = u.get(t), d = [];
      if (e)
        for (const v of s) {
          const p = v.parentId === a.id;
          if (p) {
            const h = Yl(v, p, c);
            h && d.push(h);
          }
        }
      else {
        const v = [];
        Dd(v, t, l);
        for (const p of s)
          if (v.includes(p.id)) {
            const h = p.parentId === a.id, x = Yl(p, h, c);
            x && d.push(x);
          }
      }
      return d;
    }
  );
};
var _y = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ky = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Sy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ve(t, !0), Ue(e, Sy);
  const [n, r] = rt(), o = () => ne(f(d), "$node", n), i = () => ne(w, "$selectItems", n);
  en(() => {
    f(v).refType || $({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7), u = y(t, "useChildrenOnly", 7);
  let c = ht(), d = /* @__PURE__ */ Ve(() => mr(c)), v = /* @__PURE__ */ Ve(() => {
    var M;
    return {
      ...a(),
      ...(M = o()) == null ? void 0 : M.data[l()][s()]
    };
  });
  const { updateNodeData: p } = Dt(), h = (M, N) => {
    p(c, (V) => {
      let P = V.data[l()];
      return P[s()] = { ...P[s()], [M]: N }, { [l()]: P };
    });
  }, x = (M, N) => {
    const V = N.target.value;
    h(M, V);
  }, b = (M) => {
    const N = M.value;
    h("ref", N);
  }, $ = (M) => {
    const N = M.value;
    h("refType", N);
  };
  let g;
  const C = () => {
    p(c, (M) => {
      let N = M.data[l()];
      return N.splice(s(), 1), { [l()]: [...N] };
    }), g == null || g.hide();
  }, w = Cy(u());
  var k = ky(), H = be(k), S = X(H);
  const O = /* @__PURE__ */ Ve(() => f(v).nameDisabled === !0);
  vt(S, {
    style: "width: 100%;",
    get value() {
      return f(v).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(O);
    },
    oninput: (M) => x("name", M)
  }), q(H);
  var z = R(H, 2), D = X(z);
  {
    var I = (M) => {
      vt(M, {
        get value() {
          return f(v).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => x("value", N)
      });
    }, L = (M, N) => {
      {
        var V = (P) => {
          const A = /* @__PURE__ */ Ve(() => [f(v).ref]);
          Qt(P, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(A);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        me(
          M,
          (P) => {
            f(v).refType !== "input" && P(V);
          },
          N
        );
      }
    };
    me(D, (M) => {
      f(v).refType === "fixed" ? M(I) : M(L, !1);
    });
  }
  q(z);
  var Z = R(z, 2), E = X(Z);
  _n(
    Gr(E, {
      placement: "bottom",
      floating: (M) => {
        var N = _y(), V = X(N), P = R(X(V));
        const A = /* @__PURE__ */ Ve(() => f(v).refType ? [f(v).refType] : []);
        Qt(P, {
          items: cy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(A);
          },
          onSelect: $
        }), q(V);
        var B = R(V, 2), K = R(X(B));
        mt(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            x("defaultValue", ae);
          },
          get value() {
            return f(v).defaultValue;
          }
        }), q(B);
        var G = R(B, 2), J = R(X(G));
        mt(J, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            x("description", ae);
          },
          get value() {
            return f(v).description;
          }
        }), q(G);
        var W = R(G, 2), he = X(W);
        Ke(he, {
          onclick: C,
          children: (ae, ye) => {
            ze();
            var se = Re("删除");
            T(ae, se);
          },
          $$slots: { default: !0 }
        }), q(W), q(N), T(M, N);
      },
      children: (M, N) => {
        na(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => g = M,
    () => g
  ), q(Z), T(e, k);
  var _ = pe({
    get parameter() {
      return a();
    },
    set parameter(M) {
      a(M), m();
    },
    get index() {
      return s();
    },
    set index(M) {
      s(M), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), m();
    },
    get useChildrenOnly() {
      return u();
    },
    set useChildrenOnly(M) {
      u(M), m();
    }
  });
  return r(), _;
}
ce(
  Id,
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
var My = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ey = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Vy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Hy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Lt(e, t) {
  ve(t, !0), Ue(e, Hy);
  const [n, r] = rt(), o = () => ne(f(u), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters"), s = y(t, "useChildrenOnly", 7);
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var d = Vy(), v = X(d);
  {
    var p = (b) => {
      var $ = My();
      ze(4), T(b, $);
    };
    me(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = R(v, 2);
  Et(
    h,
    19,
    () => f(c),
    (b) => b.id,
    (b, $, g) => {
      Id(b, {
        get parameter() {
          return f($);
        },
        get index() {
          return f(g);
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
      var $ = Ey(), g = X($, !0);
      q($), Ce(() => ct(g, i())), T(b, $);
    }
  ), q(d), T(e, d);
  var x = pe({
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
ce(
  Lt,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const zy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Rd(e, t) {
  ve(t, !0), Ue(e, zy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return gn(e, lt(
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
        var s = Py();
        T(a, s);
      },
      children: (a, s) => {
        var l = Oy(), u = be(l), c = X(u);
        Ge(c, {
          level: 3,
          children: (p, h) => {
            ze();
            var x = Re("输出参数");
            T(p, x);
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
          children: (p, h) => {
            var x = Ny();
            T(p, x);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = R(u, 2);
        Lt(v, {
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
ce(Rd, { data: {} }, [], [], !0);
const ya = (e) => JSON.parse(JSON.stringify(e));
var Ly = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ty = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Dy = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ay = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Iy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Zd(e, t) {
  ve(t, !0), Ue(e, Iy);
  const [n, r] = rt(), o = () => ne(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var N;
    let V = (N = o()) == null ? void 0 : N.data[s()], P;
    if (V && a().length > 0) {
      let A = V;
      for (let B = 0; B < a().length; B++) {
        const K = a()[B];
        B == a().length - 1 ? P = A[K] : A = A[K].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: d } = Dt(), v = (N, V) => {
    d(l, (P) => {
      const A = P.data[s()];
      if (A && a().length > 0) {
        let B = A;
        for (let K = 0; K < a().length; K++) {
          const G = a()[K];
          K == a().length - 1 ? B[G] = { ...B[G], [N]: V } : B = B[G].children;
        }
      }
      return {
        [s()]: [...ya(A)]
      };
    });
  }, p = (N, V) => {
    const P = V.target.value;
    v(N, P);
  }, h = (N) => {
    const V = N.value;
    v("dataType", V);
  };
  let x;
  const b = () => {
    d(l, (N) => {
      let V = N.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let A = 0; A < a().length; A++) {
          const B = a()[A];
          A == a().length - 1 ? P.splice(B, 1) : P = P[B].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (N) => {
      let V = N.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let A = 0; A < a().length; A++) {
          const B = a()[A];
          A == a().length - 1 ? P[B].children ? P[B].children.push({
            id: qr(),
            name: "newParam",
            dataType: "String"
          }) : P[B].children = [
            {
              id: qr(),
              name: "newParam",
              dataType: "String"
            }
          ] : P = P[B].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    });
  };
  var g = Ay(), C = be(g), w = X(C);
  {
    var k = (N) => {
      var V = Je(), P = be(V);
      Et(P, 17, a, zr, (A, B) => {
        ze();
        var K = Re(" ");
        T(A, K);
      }), T(N, V);
    };
    me(w, (N) => {
      a().length > 1 && N(k);
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
    oninput: (N) => {
      p("name", N);
    },
    get disabled() {
      return f(S);
    }
  }), q(C);
  var O = R(C, 2), z = X(O);
  const D = /* @__PURE__ */ Ve(() => f(c).dataType ? [f(c).dataType] : []), I = /* @__PURE__ */ Ve(() => f(c).dataTypeDisabled === !0);
  Qt(z, {
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
    var Z = (N) => {
      Ke(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (V, P) => {
          var A = Ly();
          T(V, A);
        },
        $$slots: { default: !0 }
      });
    };
    me(L, (N) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && N(Z);
    });
  }
  q(O);
  var E = R(O, 2), _ = X(E);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (N) => {
        var V = Dy(), P = X(V), A = R(X(P));
        const B = /* @__PURE__ */ Ve(() => f(c).defaultValue || "");
        mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(B);
          },
          onchange: (ae) => {
            p("defaultValue", ae);
          }
        }), q(P);
        var K = R(P, 2), G = R(X(K));
        const J = /* @__PURE__ */ Ve(() => f(c).description || "");
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(J);
          },
          onchange: (ae) => {
            p("description", ae);
          }
        }), q(K);
        var W = R(K, 2);
        {
          var he = (ae) => {
            var ye = Ty(), se = X(ye);
            Ke(se, {
              onclick: b,
              children: (Se, we) => {
                ze();
                var He = Re("删除");
                T(Se, He);
              },
              $$slots: { default: !0 }
            }), q(ye), T(ae, ye);
          };
          me(W, (ae) => {
            f(c).deleteDisabled !== !0 && ae(he);
          });
        }
        q(V), T(N, V);
      },
      children: (N, V) => {
        na(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => x = N,
    () => x
  ), q(E), T(e, g);
  var M = pe({
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
  return r(), M;
}
ce(Zd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ry = /* @__PURE__ */ re("<!> <!>", 1), Zy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), qy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), By = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Xy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nr(e, t) {
  ve(t, !0), Ue(e, Xy);
  const [n, r] = rt(), o = () => ne(f(u), "$node", n), i = (b, $ = gt, g = gt) => {
    var C = Je(), w = be(C);
    Et(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, H, S) => {
        var O = Ry(), z = be(O);
        const D = /* @__PURE__ */ Ve(() => [...g(), f(S)]);
        Zd(z, {
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
            var E = /* @__PURE__ */ xe(() => [...g(), f(S)]);
            i(Z, () => f(H).children, () => f(E));
          };
          me(I, (Z) => {
            f(H).children && Z(L);
          });
        }
        T(k, O);
      },
      (k) => {
        var H = Je(), S = be(H);
        {
          var O = (z) => {
            var D = Zy(), I = X(D, !0);
            q(D), Ce(() => ct(I, a())), T(z, D);
          };
          me(S, (z) => {
            g().length === 0 && z(O);
          });
        }
        T(k, H);
      }
    ), T(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = By(), v = X(d);
  {
    var p = (b) => {
      var $ = qy();
      ze(4), T(b, $);
    };
    me(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = R(v, 2);
  i(h, () => f(c) || [], () => []), q(d), T(e, d);
  var x = pe({
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
ce(nr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), jy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Fy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Jy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function qd(e, t) {
  ve(t, !0), Ue(e, Jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(sn([]));
  en(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Dt(), u = (c) => {
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
  return Gt(() => {
    n().outType || u("text");
  }), gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Yy();
        T(c, d);
      },
      children: (c, d) => {
        var v = Uy(), p = be(v), h = X(p);
        Ge(h, {
          level: 3,
          children: (U, Ee) => {
            ze();
            var j = Re("输入参数");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var x = R(h, 2);
        Ke(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (U, Ee) => {
            var j = Ky();
            T(U, j);
          },
          $$slots: { default: !0 }
        }), q(p);
        var b = R(p, 2);
        Lt(b, {});
        var $ = R(b, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (U, Ee) => {
            ze();
            var j = Re("模型设置");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var g = R($, 4), C = X(g);
        const w = /* @__PURE__ */ Ve(() => n().llmId ? [n().llmId] : []);
        Qt(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (U) => {
            const Ee = U.value;
            l(o, () => ({ llmId: Ee }));
          },
          get value() {
            return f(w);
          }
        });
        var k = R(C, 2);
        na(k, {}), q(g);
        var H = R(g, 4), S = X(H), O = X(S), z = X(O);
        q(O);
        var D = R(O, 2);
        Yn(D), D.__input = [Wy, l, o], q(S), q(H);
        var I = R(H, 2), L = X(I), Z = X(L), E = X(Z);
        q(Z);
        var _ = R(Z, 2);
        Yn(_), _.__input = [jy, l, o], q(L), q(I);
        var M = R(I, 2), N = X(M), V = X(N), P = X(V);
        q(V);
        var A = R(V, 2);
        Yn(A), A.__input = [Fy, l, o], q(N), q(M);
        var B = R(M, 4), K = X(B);
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
        }), q(B);
        var J = R(B, 4), W = X(J);
        const he = /* @__PURE__ */ Ve(() => n().userPrompt || "");
        mt(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(he);
          },
          oninput: (U) => {
            l(o, { userPrompt: U.target.value });
          }
        }), q(J);
        var ae = R(J, 2), ye = X(ae);
        Ge(ye, {
          level: 3,
          mt: "10px",
          children: (U, Ee) => {
            ze();
            var j = Re("输出参数");
            T(U, j);
          },
          $$slots: { default: !0 }
        });
        var se = R(ye, 2);
        const Se = /* @__PURE__ */ Ve(() => n().outType ? [n().outType] : []);
        Qt(se, {
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
              children: (Ee, j) => {
                var Ne = Gy();
                T(Ee, Ne);
              },
              $$slots: { default: !0 }
            });
          };
          me(we, (U) => {
            n().outType === "json" && U(He);
          });
        }
        q(ae);
        var le = R(ae, 2);
        nr(le, {}), Ce(() => {
          ct(z, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Uo(D, n().temperature ?? 0.5), ct(E, `Top P: ${n().topP ?? 0.9 ?? ""}`), Uo(_, n().topP ?? 0.9), ct(P, `Top K: ${n().topK ?? 50 ?? ""}`), Uo(A, n().topK ?? 50);
        }), T(c, v);
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
ce(qd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  ve(t, !0), Ue(e, rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  en(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Dt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Qy();
        T(l, u);
      },
      children: (l, u) => {
        var c = nw(), d = be(c), v = X(d);
        Ge(v, {
          level: 3,
          children: (D, I) => {
            ze();
            var L = Re("输入参数");
            T(D, L);
          },
          $$slots: { default: !0 }
        });
        var p = R(v, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, I) => {
            var L = ew();
            T(D, L);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = R(d, 2);
        Lt(h, {});
        var x = R(h, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            ze();
            var L = Re("代码");
            T(D, L);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 4), $ = X(b);
        const g = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : ["qlexpress"]);
        Qt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const I = D.value;
            a(o, () => ({ engine: I }));
          },
          get value() {
            return f(g);
          }
        }), q(b);
        var C = R(b, 4), w = X(C);
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
        }), q(C);
        var H = R(C, 2), S = X(H);
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
        var O = R(S, 2);
        Ke(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, I) => {
            var L = tw();
            T(D, L);
          },
          $$slots: { default: !0 }
        }), q(H);
        var z = R(H, 2);
        nr(z, {}), T(l, c);
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
ce(Bd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ve(t, !0), Ue(e, sw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Dt();
  return Gt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = ow();
        T(s, l);
      },
      children: (s, l) => {
        var u = aw(), c = be(u), d = X(c);
        Ge(d, {
          level: 3,
          children: (k, H) => {
            ze();
            var S = Re("输入参数");
            T(k, S);
          },
          $$slots: { default: !0 }
        });
        var v = R(d, 2);
        Ke(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, H) => {
            var S = iw();
            T(k, S);
          },
          $$slots: { default: !0 }
        }), q(c);
        var p = R(c, 2);
        Lt(p, {});
        var h = R(p, 2);
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
        var x = R(h, 2), b = X(x);
        const $ = /* @__PURE__ */ Ve(() => n().template || "");
        mt(b, {
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
        var g = R(x, 2), C = X(g);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: (k, H) => {
            ze();
            var S = Re("输出参数");
            T(k, S);
          },
          $$slots: { default: !0 }
        }), q(g);
        var w = R(g, 2);
        nr(w, {}), T(s, u);
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
ce(Xd, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), gw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), hw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Yd(e, t) {
  ve(t, !0), Ue(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
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
  ], i = ht(), { addParameter: a } = En(), { updateNodeData: s } = Dt();
  return gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = lw();
        T(l, u);
      },
      children: (l, u) => {
        var c = yw(), d = be(c), v = X(d);
        Ge(v, {
          level: 3,
          children: (ue, de) => {
            ze();
            var oe = Re("输入参数");
            T(ue, oe);
          },
          $$slots: { default: !0 }
        });
        var p = R(v, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (ue, de) => {
            var oe = uw();
            T(ue, oe);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = R(d, 2);
        Lt(h, {});
        var x = R(h, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (ue, de) => {
            ze();
            var oe = Re("URL 地址");
            T(ue, oe);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 2), $ = X(b), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().method ? [n().method] : ["get"]);
        Qt(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ue) => {
            const de = ue.value;
            s(i, () => ({ method: de }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = R($, 2), k = X(w);
        const H = /* @__PURE__ */ Ve(() => n().url || "");
        vt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ue) => {
            s(i, () => ({ url: ue.target.value }));
          },
          get value() {
            return f(H);
          }
        }), q(w), q(b);
        var S = R(b, 2), O = X(S);
        Ge(O, {
          level: 3,
          children: (ue, de) => {
            ze();
            var oe = Re("Http 头信息");
            T(ue, oe);
          },
          $$slots: { default: !0 }
        });
        var z = R(O, 2);
        Ke(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ue, de) => {
            var oe = cw();
            T(ue, oe);
          },
          $$slots: { default: !0 }
        }), q(S);
        var D = R(S, 2);
        Lt(D, { dataKeyName: "headers" });
        var I = R(D, 2);
        Ge(I, {
          level: 3,
          mt: "10px",
          children: (ue, de) => {
            ze();
            var oe = Re("Body");
            T(ue, oe);
          },
          $$slots: { default: !0 }
        });
        var L = R(I, 2), Z = X(L), E = X(Z);
        const _ = /* @__PURE__ */ Ve(() => !n().bodyType);
        vt(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(_);
          },
          onchange: (ue) => {
            var de;
            (de = ue.target) != null && de.checked && s(i, { bodyType: "" });
          }
        }), ze(), q(Z);
        var M = R(Z, 2), N = X(M);
        const V = /* @__PURE__ */ Ve(() => n().bodyType === "form-data");
        vt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(V);
          },
          onchange: (ue) => {
            var de;
            (de = ue.target) != null && de.checked && s(i, { bodyType: "form-data" });
          }
        }), ze(), q(M);
        var P = R(M, 2), A = X(P);
        const B = /* @__PURE__ */ Ve(() => n().bodyType === "x-www-form-urlencoded");
        vt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(B);
          },
          onchange: (ue) => {
            var de;
            (de = ue.target) != null && de.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), ze(), q(P);
        var K = R(P, 2), G = X(K);
        const J = /* @__PURE__ */ Ve(() => n().bodyType === "json");
        vt(G, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(J);
          },
          onchange: (ue) => {
            var de;
            (de = ue.target) != null && de.checked && s(i, { bodyType: "json" });
          }
        }), ze(), q(K);
        var W = R(K, 2), he = X(W);
        const ae = /* @__PURE__ */ Ve(() => n().bodyType === "raw");
        vt(he, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ae);
          },
          onchange: (ue) => {
            var de;
            (de = ue.target) != null && de.checked && s(i, { bodyType: "raw" });
          }
        }), ze(), q(W), q(L);
        var ye = R(L, 2);
        {
          var se = (ue) => {
            var de = fw(), oe = be(de), Me = X(oe);
            Ge(Me, {
              level: 3,
              children: (ee, Ye) => {
                ze();
                var fe = Re("参数");
                T(ee, fe);
              },
              $$slots: { default: !0 }
            });
            var et = R(Me, 2);
            Ke(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (ee, Ye) => {
                var fe = dw();
                T(ee, fe);
              },
              $$slots: { default: !0 }
            }), q(oe);
            var tt = R(oe, 2);
            Lt(tt, { dataKeyName: "formData" }), T(ue, de);
          };
          me(ye, (ue) => {
            n().bodyType === "form-data" && ue(se);
          });
        }
        var Se = R(ye, 2);
        {
          var we = (ue) => {
            var de = pw(), oe = be(de), Me = X(oe);
            Ge(Me, {
              level: 3,
              children: (ee, Ye) => {
                ze();
                var fe = Re("Body 参数");
                T(ee, fe);
              },
              $$slots: { default: !0 }
            });
            var et = R(Me, 2);
            Ke(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (ee, Ye) => {
                var fe = vw();
                T(ee, fe);
              },
              $$slots: { default: !0 }
            }), q(oe);
            var tt = R(oe, 2);
            Lt(tt, { dataKeyName: "formUrlencoded" }), T(ue, de);
          };
          me(Se, (ue) => {
            n().bodyType === "x-www-form-urlencoded" && ue(we);
          });
        }
        var He = R(Se, 2);
        {
          var le = (ue) => {
            var de = gw(), oe = X(de);
            mt(oe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Me) => {
                s(i, { bodyJson: Me.target.value });
              }
            }), q(de), T(ue, de);
          };
          me(He, (ue) => {
            n().bodyType === "json" && ue(le);
          });
        }
        var U = R(He, 2);
        {
          var Ee = (ue) => {
            var de = hw(), oe = X(de);
            mt(oe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Me) => {
                s(i, { bodyRaw: Me.target.value });
              }
            }), q(de), T(ue, de);
          };
          me(U, (ue) => {
            n().bodyType === "raw" && ue(Ee);
          });
        }
        var j = R(U, 2), Ne = X(j);
        Ge(Ne, {
          level: 3,
          mt: "10px",
          children: (ue, de) => {
            ze();
            var oe = Re("输出参数");
            T(ue, oe);
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
          children: (ue, de) => {
            var oe = mw();
            T(ue, oe);
          },
          $$slots: { default: !0 }
        }), q(j);
        var Te = R(j, 2);
        nr(Te, {}), T(l, c);
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
ce(Yd, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), xw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ve(t, !0), Ue(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(sn([]));
  en(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return Gt(() => {
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
  }), gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = bw();
        T(u, c);
      },
      children: (u, c) => {
        var d = $w(), v = be(d), p = X(v);
        Ge(p, {
          level: 3,
          children: (L, Z) => {
            ze();
            var E = Re("输入参数");
            T(L, E);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, Z) => {
            var E = xw();
            T(L, E);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = R(v, 2);
        Lt(x, {});
        var b = R(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (L, Z) => {
            ze();
            var E = Re("知识库设置");
            T(L, E);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().knowledgeId ? [n().knowledgeId] : []);
        Qt(g, {
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
            return f(C);
          }
        }), q($);
        var w = R($, 4), k = X(w);
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
        var H = R(w, 4), S = X(H);
        const O = /* @__PURE__ */ Ve(() => n().limit || "");
        vt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const Z = L.target.value;
            l(o, () => ({ limit: Z }));
          },
          get value() {
            return f(O);
          }
        }), q(H);
        var z = R(H, 2), D = X(z);
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
        nr(I, {}), T(u, d);
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
ce(Kd, { data: {} }, [], [], !0);
var _w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), kw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  ve(t, !0), Ue(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(sn([]));
  en(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return Gt(() => {
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
  }), gn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = _w();
        T(u, c);
      },
      children: (u, c) => {
        var d = Sw(), v = be(d), p = X(v);
        Ge(p, {
          level: 3,
          children: (I, L) => {
            ze();
            var Z = Re("输入参数");
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, L) => {
            var Z = kw();
            T(I, Z);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = R(v, 2);
        Lt(x, {});
        var b = R(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            ze();
            var Z = Re("搜索引擎设置");
            T(I, Z);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : []);
        Qt(g, {
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
            return f(C);
          }
        }), q($);
        var w = R($, 4), k = X(w);
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
        var H = R(w, 4), S = X(H);
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
        var O = R(H, 2), z = X(O);
        Ge(z, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            ze();
            var Z = Re("输出参数");
            T(I, Z);
          },
          $$slots: { default: !0 }
        }), q(O);
        var D = R(O, 2);
        nr(D, {}), T(u, d);
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
ce(Wd, { data: {} }, [], [], !0);
var Ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ re('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Pw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function jd(e, t) {
  ve(t, !0), Ue(e, Pw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return Gt(() => {
    (!n().parameters || n().parameters.length === 0) && i(o, "parameters", {
      name: "loopVar",
      dataType: "String",
      nameDisabled: !0,
      deleteDisabled: !0
    });
  }), gn(e, lt(
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
        Un(a, {
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
        var l = Hw(), u = be(l), c = X(u);
        Ge(c, {
          level: 3,
          children: (b, $) => {
            ze();
            var g = Re("循环变量");
            T(b, g);
          },
          $$slots: { default: !0 }
        }), q(u);
        var d = R(u, 2);
        Lt(d, {});
        var v = R(d, 2), p = X(v);
        Ge(p, {
          level: 3,
          children: (b, $) => {
            ze();
            var g = Re("输出参数");
            T(b, g);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var g = Vw();
            T(b, g);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = R(v, 2);
        Lt(x, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), T(a, l);
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
ce(jd, { data: {} }, [], [], !0);
const Nw = {
  startNode: Td,
  codeNode: Bd,
  llmNode: qd,
  templateNode: Xd,
  httpNode: Yd,
  knowledgeNode: Kd,
  searchEngineNode: Wd,
  loopNode: jd,
  endNode: Rd
};
var Ow = /* @__PURE__ */ re("<!> ", 1);
function Xa(e, t) {
  ve(t, !0);
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
      var u = Ow(), c = be(u);
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
ce(
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
var zw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Tw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Fd(e, t) {
  ve(t, !0);
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
  ], a = [], s = Qn(), l = s.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((g, C) => (l[g].sortNo || 0) - (l[C].sortNo || 0));
    for (let g of $)
      l[g].group === "base" ? o.push({ type: g, ...l[g] }) : a.push({
        icon: l[g].icon,
        title: l[g].title,
        type: g
      });
    o.sort((g, C) => (g.sortNo || 0) - (C.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const $ = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray($)) {
      for (let g of $)
        for (let C = 0; C < o.length; C++)
          if (o[C].type === g) {
            o.splice(C, 1);
            break;
          }
    }
  }
  var u = Tw(), c = X(u), d = X(c), v = X(d);
  wd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      Q(n, $.value.toString(), !0);
    }
  }), q(d);
  var p = R(d, 2), h = X(p);
  Et(h, 21, () => o, zr, ($, g) => {
    Xa($, lt(() => f(g)));
  }), q(h);
  var x = R(h, 2);
  Et(x, 21, () => a, zr, ($, g) => {
    Xa($, lt(() => f(g)));
  }), q(x), q(p), q(c);
  var b = R(c, 2);
  Ke(b, {
    onclick: () => {
      Q(r, f(r) ? "" : "show", !0);
    },
    children: ($, g) => {
      var C = Je(), w = be(C);
      {
        var k = (S) => {
          var O = zw();
          T(S, O);
        }, H = (S) => {
          var O = Lw();
          T(S, O);
        };
        me(w, (S) => {
          f(r) === "show" ? S(k) : S(H, !1);
        });
      }
      T($, C);
    },
    $$slots: { default: !0 }
  }), q(u), Ce(() => {
    $t(u, 1, `tf-toolbar ${f(r) ?? ""}`), ft(h, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(x, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), T(e, u), pe();
}
ce(Fd, {}, [], [], !0);
const Dw = () => {
  const { nodeLookup: e } = Fe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Aw = () => {
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
}, Iw = () => {
  const { edges: e } = Fe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), qw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Bw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Xw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Yw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Kw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Fw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Gw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Gd(e, t) {
  var n;
  ve(t, !0), Ue(e, Gw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = En(), s = Dt(), { updateNodeData: l } = s, u = ($) => {
    l(i, $);
  }, c = ($, g) => {
    var C;
    u({ [$]: (C = g.target) == null ? void 0 : C.value });
  }, d = { ...o, id: i, data: r() }, v = document.createElement("div"), p = Qn().customNodes[t.type];
  (n = p.render) == null || n.call(p, v, d, s);
  const h = p.forms;
  let x;
  Gt(() => {
    r().expand && x && x.append(v);
  }), Gt(() => {
    var $;
    r() && (($ = p.onUpdate) == null || $.call(p, v, { ...d, data: r() }));
  }), Gt(() => {
    !r().parameters && p.parameters && u({
      parameters: Oi(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Gt(() => {
    !r().outputDefs && p.outputDefs && u({
      outputDefs: Oi(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  const b = /* @__PURE__ */ Ve(() => ({
    ...r(),
    description: p.description
  }));
  return gn(e, lt(
    {
      get data() {
        return f(b);
      }
    },
    () => o,
    {
      icon: ($) => {
        var g = Je(), C = be(g);
        ls(C, () => p.icon), T($, g);
      },
      children: ($, g) => {
        var C = Fw(), w = be(C);
        {
          var k = (I) => {
            var L = Zw(), Z = be(L), E = X(Z);
            Ge(E, {
              level: 3,
              children: (V, P) => {
                ze();
                var A = Re("输入参数");
                T(V, A);
              },
              $$slots: { default: !0 }
            });
            var _ = R(E, 2);
            {
              var M = (V) => {
                Ke(V, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (P, A) => {
                    var B = Rw();
                    T(P, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              me(_, (V) => {
                p.parametersAddEnable !== !1 && V(M);
              });
            }
            q(Z);
            var N = R(Z, 2);
            Lt(N, {}), T(I, L);
          };
          me(w, (I) => {
            p.parametersEnable !== !1 && I(k);
          });
        }
        var H = R(w, 2);
        {
          var S = (I) => {
            var L = Je(), Z = be(L);
            Et(Z, 17, () => h, zr, (E, _) => {
              var M = Je(), N = be(M);
              {
                var V = (A) => {
                  var B = qw(), K = be(B), G = X(K, !0);
                  q(K);
                  var J = R(K, 2), W = X(J);
                  const he = /* @__PURE__ */ Ve(() => r()[f(_).name] || f(_).defaultValue);
                  vt(W, lt(
                    {
                      get placeholder() {
                        return f(_).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(he);
                      }
                    },
                    () => f(_).attrs,
                    {
                      onchange: (ae) => {
                        c(f(_).name, ae);
                      }
                    }
                  )), q(J), Ce(() => ct(G, f(_).label)), T(A, B);
                }, P = (A, B) => {
                  {
                    var K = (J) => {
                      var W = Bw(), he = be(W), ae = X(he, !0);
                      q(he);
                      var ye = R(he, 2), se = X(ye);
                      const Se = /* @__PURE__ */ Ve(() => r()[f(_).name] || f(_).defaultValue);
                      mt(se, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(_).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(Se);
                          }
                        },
                        () => f(_).attrs,
                        {
                          onchange: (we) => {
                            c(f(_).name, we);
                          }
                        }
                      )), q(ye), Ce(() => ct(ae, f(_).label)), T(J, W);
                    }, G = (J, W) => {
                      {
                        var he = (ye) => {
                          var se = Xw(), Se = be(se), we = X(Se, !0);
                          q(Se);
                          var He = R(Se, 2), le = X(He), U = X(le), Ee = X(U);
                          q(U);
                          var j = R(U, 2);
                          Yn(j);
                          var Ne = (Te) => u({
                            [f(_).name]: parseFloat(Te.target.value)
                          });
                          let De;
                          q(le), q(He), Ce(() => {
                            ct(we, f(_).label), ct(Ee, `${f(_).description ?? ""}: ${r()[f(_).name] ?? f(_).defaultValue ?? ""}`), De = Xt(
                              j,
                              De,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(_).attrs,
                                value: r()[f(_).name] ?? f(_).defaultValue,
                                oninput: Ne
                              },
                              "svelte-q0cqsa"
                            );
                          }), T(ye, se);
                        }, ae = (ye, se) => {
                          {
                            var Se = (He) => {
                              var le = Yw(), U = be(le), Ee = X(U, !0);
                              q(U);
                              var j = R(U, 2), Ne = X(j);
                              const De = /* @__PURE__ */ Ve(() => f(_).options || []), Te = /* @__PURE__ */ Ve(() => r()[f(_).name] ? [r()[f(_).name]] : [f(_).defaultValue]);
                              Qt(Ne, {
                                get items() {
                                  return f(De);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(_).placeholder;
                                },
                                onSelect: (ue) => {
                                  const de = ue.value;
                                  u({ [f(_).name]: de });
                                },
                                get value() {
                                  return f(Te);
                                }
                              }), q(j), Ce(() => ct(Ee, f(_).label)), T(He, le);
                            }, we = (He, le) => {
                              {
                                var U = (j) => {
                                  var Ne = Kw(), De = be(Ne), Te = X(De, !0);
                                  q(De);
                                  var ue = R(De, 2), de = X(ue);
                                  yd(de, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f(_).placeholder;
                                    },
                                    onChosen: (oe, Me, et) => {
                                      var tt, ee;
                                      (ee = (tt = f(_).chosen) == null ? void 0 : tt.onChosen) == null || ee.call(tt, u, oe, Me, et);
                                    },
                                    get value() {
                                      var oe;
                                      return r()[((oe = f(_).chosen) == null ? void 0 : oe.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var oe;
                                      return r()[((oe = f(_).chosen) == null ? void 0 : oe.labelDataKey) || ""];
                                    }
                                  }), q(ue), Ce(() => ct(Te, f(_).label)), T(j, Ne);
                                }, Ee = (j, Ne) => {
                                  {
                                    var De = (Te) => {
                                      Ge(Te, lt({ level: 3, mt: "10px" }, () => f(_).attrs, {
                                        children: (ue, de) => {
                                          ze();
                                          var oe = Re();
                                          Ce(() => ct(oe, f(_).label)), T(ue, oe);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    me(
                                      j,
                                      (Te) => {
                                        f(_).type === "heading" && Te(De);
                                      },
                                      Ne
                                    );
                                  }
                                };
                                me(
                                  He,
                                  (j) => {
                                    f(_).type === "chosen" ? j(U) : j(Ee, !1);
                                  },
                                  le
                                );
                              }
                            };
                            me(
                              ye,
                              (He) => {
                                f(_).type === "select" ? He(Se) : He(we, !1);
                              },
                              se
                            );
                          }
                        };
                        me(
                          J,
                          (ye) => {
                            f(_).type === "slider" ? ye(he) : ye(ae, !1);
                          },
                          W
                        );
                      }
                    };
                    me(
                      A,
                      (J) => {
                        f(_).type === "textarea" ? J(K) : J(G, !1);
                      },
                      B
                    );
                  }
                };
                me(N, (A) => {
                  f(_).type === "input" ? A(V) : A(P, !1);
                });
              }
              T(E, M);
            }), T(I, L);
          };
          me(H, (I) => {
            h && I(S);
          });
        }
        var O = R(H, 2);
        _n(O, (I) => x = I, () => x);
        var z = R(O, 2);
        {
          var D = (I) => {
            var L = jw(), Z = be(L), E = X(Z);
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
            var _ = R(E, 2);
            {
              var M = (V) => {
                Ke(V, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (P, A) => {
                    var B = Ww();
                    T(P, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              me(_, (V) => {
                p.outputDefsAddEnable !== !1 && V(M);
              });
            }
            q(Z);
            var N = R(Z, 2);
            nr(N, {}), T(I, L);
          };
          me(z, (I) => {
            p.outputDefsEnable !== !1 && I(D);
          });
        }
        Ce(() => {
          ft(O, p.rootStyle || ""), $t(O, 1, vn(p.rootClass), "svelte-q0cqsa");
        }), T($, C);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return r();
    },
    set data($) {
      r($), m();
    }
  });
}
ce(Gd, { data: {} }, [], [], !0);
const Uw = () => {
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
var Jw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Qw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), eb = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const tb = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Ud(e, t) {
  ve(t, !0), Ue(e, tb);
  const [n, r] = rt(), o = () => ne(O, "$nodes", n), i = () => ne(z, "$edges", n), a = () => ne(D, "$viewport", n), s = y(t, "onInit", 7), l = Dt();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = Uw(), v = (V) => {
    V.preventDefault(), V.dataTransfer && (V.dataTransfer.dropEffect = "move");
  }, p = (V) => {
    var P;
    V.preventDefault();
    const A = l.screenToFlowPosition({
      x: V.clientX - 250,
      y: V.clientY - 100
    }), B = (P = V.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), K = B ? JSON.parse(B) : {}, G = {
      id: `node_${qr()}`,
      position: A,
      data: {},
      ...K
    };
    oi.addNode(G), oi.selectNodeOnly(G.id);
  }, { getNode: h } = Dw(), x = (V) => {
    const P = h(V.source), A = h(V.target);
    if (V.sourceHandle === "loop_handle" || P.parentId) {
      const B = l.getEdges();
      for (let K of B)
        if (K.target === V.target) {
          const G = h(K.source);
          if (V.sourceHandle === "loop_handle" && G.parentId !== P.id || P.parentId && G.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && A.parentId && A.parentId !== P.id);
  }, { ensureParentInNodesBefore: b } = Aw(), $ = (V, P) => {
    if (!P.isValid)
      return;
    const A = P.toNode;
    if (A.parentId)
      return;
    const B = P.fromNode, K = P.fromHandle, G = { position: { ...A.position } };
    if (K.id === "loop_handle" ? G.parentId = B.id : B.parentId && (G.parentId = B.parentId), G.parentId) {
      const J = h(G.parentId);
      G.position = {
        x: A.position.x - J.position.x,
        y: A.position.y - J.position.y
      }, b(G.parentId, A.id), l.updateNode(A.id, G);
    }
  }, { getEdgesByTarget: g } = Iw(), C = (V) => {
    V.edges.forEach((P) => {
      const A = h(P.target);
      if (A && A.parentId) {
        const B = g(P.target), K = h(A.parentId);
        if (B.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + K.position.x,
              y: A.position.y + K.position.y
            }
          });
        else {
          let G = !1;
          for (let J = 0; J < B.length; J++) {
            const W = B[J], he = h(W.source);
            if (he.parentId || he.type === "loopNode") {
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
  }, H = {}, S = Qn().customNodes;
  if (S)
    for (let V of Object.keys(S))
      H[V] = Gd;
  const { nodes: O, edges: z, viewport: D } = Fe(), I = Qn().onDataChange;
  I && (O.subscribe(() => {
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
  var L = eb(), Z = X(L);
  const E = /* @__PURE__ */ Ve(() => ({ ...Nw, ...H })), _ = /* @__PURE__ */ Ve(() => ({
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
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (V) => {
        const P = V.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || (Q(u, !1), Q(c, null));
      },
      get defaultEdgeOptions() {
        return f(_);
      },
      $$events: {
        drop: p,
        dragover: v,
        edgeclick: (V) => {
          Q(u, !0), Q(c, V.detail.edge, !0);
        }
      },
      children: (V, P) => {
        var A = Qw(), B = be(A);
        vd(B, {});
        var K = R(B, 2);
        cd(K, {});
        var G = R(K, 2);
        gd(G, {});
        var J = R(G, 2);
        {
          var W = (he) => {
            To(he, {
              children: (ae, ye) => {
                var se = Jw(), Se = R(X(se), 4), we = X(Se);
                const He = /* @__PURE__ */ Ve(() => {
                  var le, U;
                  return (U = (le = f(c)) == null ? void 0 : le.data) == null ? void 0 : U.condition;
                });
                mt(we, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(He);
                  },
                  onchange: (le) => {
                    f(c) && d(f(c).id, { condition: le.target.value });
                  }
                }), q(Se), q(se), T(ae, se);
              },
              $$slots: { default: !0 }
            });
          };
          me(J, (he) => {
            f(u) && he(W);
          });
        }
        T(V, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = R(Z, 2);
  Fd(M, {}), q(L), T(e, L);
  var N = pe({
    get onInit() {
      return s();
    },
    set onInit(V) {
      s(V), m();
    }
  });
  return r(), N;
}
ce(Ud, { onInit: {} }, [], [], !0);
function nb(e, t) {
  ve(t, !0);
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
      Ud(i, {
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
customElements.define("tinyflow-component", ce(nb, { options: {}, onInit: {} }, [], [], !1));
const ub = /* @__PURE__ */ f1({
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
    const n = e, r = v1(null);
    let o = null;
    return p1(() => {
      r.value && (o = new Z2({
        ...n,
        element: r.value
      }));
    }), g1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (m1(), h1("div", {
      ref_key: "divRef",
      ref: r,
      class: w1(["tinyflow", a.className]),
      style: y1(a.style)
    }, null, 6));
  }
});
export {
  ub as Tinyflow
};
//# sourceMappingURL=index.js.map
