import { defineComponent as c1, ref as d1, onMounted as f1, onUnmounted as v1, createElementBlock as p1, openBlock as g1, normalizeStyle as h1, normalizeClass as m1 } from "vue";
var y1 = Object.defineProperty, Kl = (e) => {
  throw TypeError(e);
}, w1 = (e, t, n) => t in e ? y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tt = (e, t, n) => w1(e, typeof t != "symbol" ? t + "" : t, n), Ya = (e, t, n) => t.has(e) || Kl("Cannot " + n), ut = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => t.has(e) ? Kl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oi = (e, t, n, r) => (Ya(e, t, "write to private field"), t.set(e, n), n), b1 = (e, t, n) => (Ya(e, t, "access private method"), n);
const x1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(x1);
let Br = !1, $1 = !1;
function C1() {
  Br = !0;
}
C1();
const Ka = 1, Wa = 2, Wl = 4, _1 = 8, k1 = 16, S1 = 1, E1 = 2, jl = 4, M1 = 8, V1 = 16, Fl = 1, N1 = 2, ja = "[", Fa = "[!", Ga = "]", _r = {}, Pt = Symbol(), P1 = "http://www.w3.org/1999/xhtml", H1 = "http://www.w3.org/2000/svg", T1 = !1;
function Ti(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Eo = Array.isArray, z1 = Array.prototype.indexOf, Ua = Array.from, ii = Object.keys, co = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, O1 = Object.prototype, L1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const pt = () => {
};
function D1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, Ul = 4, zi = 8, Qa = 16, Dn = 32, gr = 64, ai = 128, qt = 256, si = 512, Et = 1024, bn = 2048, er = 4096, Tn = 8192, Oi = 16384, A1 = 32768, Xr = 65536, I1 = 1 << 17, R1 = 1 << 19, Jl = 1 << 20, wa = 1 << 21, Yn = Symbol("$state"), es = Symbol("legacy props"), Z1 = Symbol("");
function q1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function B1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function X1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Y1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function K1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function W1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function j1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function F1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function G1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Li(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function Rt(e) {
  He = e;
}
let Ae;
function St(e) {
  if (e === null)
    throw Li(), _r;
  return Ae = e;
}
function xn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ae)
  );
}
function q(e) {
  if (He) {
    if (/* @__PURE__ */ Sn(Ae) !== null)
      throw Li(), _r;
    Ae = e;
  }
}
function Te(e = 1) {
  if (He) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ae = n;
  }
}
function ba() {
  for (var e = 0, t = Ae; ; ) {
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
  if (t !== O1 && t !== L1)
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && j1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ kt(u.value)), n.set(l, c)) : J(
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
          ), oa(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Pt), oa(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Hn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(an(v ? s[l] : Pt))), n.set(l, d)), d !== void 0) {
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
        if (l === Yn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(s, l);
        if (c !== void 0 || We !== null && (!d || (u = Hn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? an(s[l]) : Pt)), n.set(l, c));
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
            x !== void 0 ? J(x, Pt) : h in s && (x = a(() => /* @__PURE__ */ kt(Pt)), n.set(h + "", x));
          }
        v === void 0 ? (!p || (d = Hn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ kt(void 0)), J(
          v,
          a(() => an(u))
        ), n.set(l, v)) : (p = v.v !== Pt, J(
          v,
          a(() => an(u))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(c, u), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= $.v && J($, g + 1);
          }
          oa(o);
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
        F1();
      }
    }
  );
}
function oa(e, t = 1) {
  J(e, e.v + t);
}
var Ht, Ql, eu, tu;
function xa() {
  if (Ht === void 0) {
    Ht = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    eu = Hn(t, "firstChild").get, tu = Hn(t, "nextSibling").get, As(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), As(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return eu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return tu.call(e);
}
function X(e, t) {
  if (!He)
    return /* @__PURE__ */ vt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(On());
  else if (t && n.nodeType !== 3) {
    var r = On();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function be(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ vt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sn(n) : n;
  }
  return Ae;
}
function Z(e, t = 1, n = !1) {
  let r = He ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!He)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = On();
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
function Nr(e) {
  var t = un | bn, n = Qe !== null && (Qe.f & un) !== 0 ? (
    /** @type {Derived} */
    Qe
  ) : null;
  return We === null || n !== null && (n.f & qt) !== 0 ? t |= qt : We.f |= Jl, {
    ctx: Ke,
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
    parent: n ?? We
  };
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = /* @__PURE__ */ Nr(e);
  return gu(t), t;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = /* @__PURE__ */ Nr(e);
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
function U1(e) {
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
  var t, n = We;
  Gn(U1(e));
  try {
    ru(e), t = wu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function iu(e) {
  var t = ou(e), n = (Bn || (e.f & qt) !== 0) && e.deps !== null ? er : Et;
  Gt(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  We === null && Qe === null && X1(), Qe !== null && (Qe.f & qt) !== 0 && We === null && B1(), Vo && q1();
}
function J1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = We, i = {
    ctx: Ke,
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
      Ai(i), i.f |= A1;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && Ii(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Jl | ai)) === 0;
  if (!a && r && (o !== null && J1(i, o), Qe !== null && (Qe.f & un) !== 0)) {
    var s = (
      /** @type {Derived} */
      Qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function os(e) {
  const t = hr(zi, null, !1);
  return Gt(t, Et), t.teardown = e, t;
}
function ln(e) {
  au();
  var t = We !== null && (We.f & Dn) !== 0 && Ke !== null && !Ke.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ke
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: We,
      reaction: Qe
    });
  } else {
    var r = It(e);
    return r;
  }
}
function Q1(e) {
  return au(), Yr(e);
}
function ef(e) {
  const t = hr(gr, e, !0);
  return () => {
    cn(t);
  };
}
function tf(e) {
  const t = hr(gr, e, !0);
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
    Ke
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function yt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ke
  );
  Yr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Et) !== 0 && Gt(n, er), Wr(n) && Ai(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return hr(zi, e, !0);
}
function Se(e, t = [], n = Nr) {
  const r = t.map(n);
  return Kr(() => e(...r.map(f)));
}
function Kr(e, t = 0) {
  return hr(zi | Qa | t, e, !0);
}
function Fn(e, t = !0) {
  return hr(zi | Dn, e, !0, t);
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
function nf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & R1) !== 0) && e.nodes_start !== null && (uu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), lu(e, t && !n), di(e, 0), Gt(e, Oi);
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
  if ((e.f & Tn) === 0) {
    if (e.f ^= Tn, e.transitions !== null)
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
  if ((e.f & Tn) !== 0) {
    e.f ^= Tn, (e.f & Et) === 0 && (e.f ^= Et), Wr(e) && (Gt(e, bn), Ii(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & Dn) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const rf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let po = [], go = [];
function vu() {
  var e = po;
  po = [], fo(e);
}
function pu() {
  var e = go;
  go = [], fo(e);
}
function Mo(e) {
  po.length === 0 && queueMicrotask(vu), po.push(e);
}
function of(e) {
  go.length === 0 && rf(pu), go.push(e);
}
function Is() {
  po.length > 0 && vu(), go.length > 0 && pu();
}
let Go = !1, li = !1, ui = null, ir = !1, Vo = !1;
function Rs(e) {
  Vo = e;
}
let lo = [], Qe = null, mn = !1;
function $n(e) {
  Qe = e;
}
let We = null;
function Gn(e) {
  We = e;
}
let Ft = null;
function gu(e) {
  Qe !== null && Qe.f & wa && (Ft === null ? Ft = [e] : Ft.push(e));
}
let _t = null, At = 0, Wt = null;
function af(e) {
  Wt = e;
}
let hu = 1, ci = 0, Bn = !1;
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
      var i, a, s = (n & si) !== 0, l = o && We !== null && !Bn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= si), l && d !== null && (d.f & qt) === 0 && (c.f ^= qt);
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
    (!o || We !== null && !Bn) && Gt(e, Et);
  }
  return !1;
}
function sf(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & ai) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ai;
      }
    n = n.parent;
  }
  throw Go = !1, e;
}
function Zs(e) {
  return (e.f & Oi) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
}
function Di(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), Zs(t))
      throw e;
    return;
  }
  if (n !== null && (Go = !0), sf(e, t), Zs(t))
    throw e;
}
function yu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ft != null && Ft.includes(e) || ((i.f & un) !== 0 ? yu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Gt(i, bn) : (i.f & Et) !== 0 && Gt(i, er), Ii(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = At, o = Wt, i = Qe, a = Bn, s = Ft, l = Ke, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, At = 0, Wt = null, Bn = (c & qt) !== 0 && (mn || !ir || Qe === null), Qe = (c & (Dn | gr)) === 0 ? e : null, Ft = null, Bs(e.ctx), mn = !1, ci++, e.f |= wa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (_t !== null) {
      var p;
      if (di(e, At), v !== null && At > 0)
        for (v.length = At + _t.length, p = 0; p < _t.length; p++)
          v[At + p] = _t[p];
      else
        e.deps = v = _t;
      if (!Bn)
        for (p = At; p < v.length; p++)
          ((t = v[p]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && At < v.length && (di(e, At), v.length = At);
    if (Ri() && Wt !== null && !mn && v !== null && (e.f & (un | er | bn)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Wt.length; p++)
        yu(
          Wt[p],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (ci++, Wt !== null && (o === null ? o = Wt : o.push(.../** @type {Source[]} */
    Wt))), d;
  } finally {
    _t = n, At = r, Wt = o, Qe = i, Bn = a, Ft = s, Bs(l), mn = u, e.f ^= wa;
  }
}
function lf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = z1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(t)) && (Gt(t, er), (t.f & (qt | si)) === 0 && (t.f ^= si), ru(
    /** @type {Derived} **/
    t
  ), di(
    /** @type {Derived} **/
    t,
    0
  ));
}
function di(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      lf(e, n[r]);
}
function Ai(e) {
  var t = e.f;
  if ((t & Oi) === 0) {
    Gt(e, Et);
    var n = We, r = Ke, o = ir;
    We = e, ir = !0;
    try {
      (t & Qa) !== 0 ? nf(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      T1 && $1 && e.f & bn;
    } catch (l) {
      Di(l, e, n, r || e.ctx);
    } finally {
      ir = o, We = n;
    }
  }
}
function uf() {
  try {
    Y1();
  } catch (e) {
    if (ui !== null)
      Di(e, ui, null);
    else
      throw e;
  }
}
function bu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; lo.length > 0; ) {
      t++ > 1e3 && uf();
      var n = lo, r = n.length;
      lo = [];
      for (var o = 0; o < r; o++) {
        var i = df(n[o]);
        cf(i);
      }
      ho.clear();
    }
  } finally {
    li = !1, ir = e, ui = null;
  }
}
function cf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Oi | Tn)) === 0)
        try {
          Wr(r) && (Ai(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Di(o, r, null, r.ctx);
        }
    }
}
function Ii(e) {
  li || (li = !0, queueMicrotask(bu));
  for (var t = ui = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (gr | Dn)) !== 0) {
      if ((n & Et) === 0) return;
      t.f ^= Et;
    }
  }
  lo.push(t);
}
function df(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | gr)) !== 0, i = o && (r & Et) !== 0;
    if (!i && (r & Tn) === 0) {
      if ((r & Ul) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Et;
      else
        try {
          Wr(n) && Ai(n);
        } catch (l) {
          Di(l, n, null, n.ctx);
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
    li = !0, bu(), Is();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & un) !== 0;
  if (Qe !== null && !mn) {
    if (!(Ft != null && Ft.includes(e))) {
      var r = Qe.deps;
      e.rv < ci && (e.rv = ci, _t === null && r !== null && r[At] === e ? At++ : _t === null ? _t = [e] : (!Bn || !_t.includes(e)) && _t.push(e));
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
const ff = -7169;
function Gt(e, t) {
  e.f = e.f & ff | t;
}
function ee(e) {
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
function Hr(e, t) {
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
  const n = Hr(e);
  return gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Hr(e);
  return t || (r.equals = rs), Br && Ke !== null && Ke.l !== null && ((n = Ke.l).s ?? (n.s = [])).push(r), r;
}
function J(e, t, n = !1) {
  Qe !== null && !mn && Ri() && (Qe.f & (un | Qa)) !== 0 && !(Ft != null && Ft.includes(e)) && G1();
  let r = n ? an(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? ho.set(e, t) : ho.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & bn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Gt(e, (e.f & qt) === 0 ? Et : er)), e.wv = mu(), xu(e, bn), Ri() && We !== null && (We.f & Et) !== 0 && (We.f & (Dn | gr)) === 0 && (Wt === null ? af([e]) : Wt.push(e));
  }
  return t;
}
function qs(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function xu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ri(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & bn) === 0 && (!r && a === We || (Gt(a, t), (s & (Et | qt)) !== 0 && ((s & un) !== 0 ? xu(
        /** @type {Derived} */
        a,
        er
      ) : Ii(
        /** @type {Effect} */
        a
      ))));
    }
}
let Ke = null;
function Bs(e) {
  Ke = e;
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
function vf(e) {
  return as().has(e);
}
function pe(e, t = !1, n) {
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
  Br && !t && (Ke.l = {
    s: null,
    u: null,
    r1: [],
    r2: Hr(!1)
  }), os(() => {
    r.d = !0;
  });
}
function ge(e) {
  const t = Ke;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = We, r = Qe;
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
    Ke = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ri() {
  return !Br || Ke !== null && Ke.l === null;
}
function as(e) {
  return Ke === null && Ti(), Ke.c ?? (Ke.c = new Map(pf(Ke) || void 0));
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
function gf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hf = [
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
  return hf.includes(e);
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
const bf = ["touchstart", "touchmove"];
function xf(e) {
  return bf.includes(e);
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
    e.autofocus = !0, Mo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kf(e) {
  He && /* @__PURE__ */ vt(e) !== null && ts(e);
}
let Xs = !1;
function Sf() {
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
function Ef(e) {
  var t = Qe, n = We;
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
      return Ef(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function et(e, t, n, r, o) {
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
    var d = Qe, v = We;
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
            if (Eo(b)) {
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
function Ot(e, t) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Fl) !== 0, r = (t & N1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return Ot(Ae, null), Ae;
    o === void 0 && (o = ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ vt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ot(s, l);
    } else
      Ot(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Fl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (He)
      return Ot(Ae, null), Ae;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ss(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ vt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ vt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ vt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ vt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ot(c, d);
    } else
      Ot(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!He) {
    var t = On(e + "");
    return Ot(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== 3 && (n.before(n = On()), St(n)), Ot(n, n), n;
}
function Ue() {
  if (He)
    return Ot(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Ot(t, n), e;
}
function D(e, t) {
  if (He) {
    We.nodes_end = Ae, xn();
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
function _u(e, t) {
  return ku(e, t);
}
function Mf(e, t) {
  xa(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = Ae;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(n)
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
    if (Ae === null || Ae.nodeType !== 8 || /** @type {Comment} */
    Ae.data !== Ga)
      throw Li(), _r;
    return Rt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _r)
      return t.recover === !1 && K1(), xa(), ts(n), Rt(!1), _u(e, t);
    throw a;
  } finally {
    Rt(r), St(o);
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
        var h = xf(p);
        t.addEventListener(p, oo, { passive: h });
        var x = wr.get(p);
        x === void 0 ? (document.addEventListener(p, oo, { passive: h }), wr.set(p, 1)) : wr.set(p, x + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = tf(() => {
    var d = n ?? t.appendChild(On());
    return Fn(() => {
      if (i) {
        pe({});
        var v = (
          /** @type {ComponentContext} */
          Ke
        );
        v.c = i;
      }
      o && (r.$$events = o), He && Ot(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (We.nodes_end = Ae), i && ge();
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
function Vf(e, t) {
  const n = ka.get(e);
  return n ? (ka.delete(e), n(t)) : Promise.resolve();
}
function ye(e, t, [n, r] = [0, 0]) {
  He && n === 0 && xn();
  var o = e, i = null, a = null, s = Pt, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, p = !0) => {
    u = !0, d(p, v);
  }, d = (v, p) => {
    if (s === (s = v)) return;
    let h = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ja ? r = 0 : b === Fa ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ba(), St(o), Rt(!1), h = !0, r = -1);
    }
    s ? (i ? vo(i) : p && (i = Fn(() => p(o))), a && Pr(a, () => {
      a = null;
    })) : (a ? vo(a) : p && (a = Fn(() => p(o, [n + 1, r]))), i && Pr(i, () => {
      i = null;
    })), h && Rt(!0);
  };
  Kr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = Ae);
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
    a = He ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(u)
    ) : u.appendChild(On());
  }
  He && xn();
  var c = null, d = !1, v = /* @__PURE__ */ xe(() => {
    var p = n();
    return Eo(p) ? p : p == null ? [] : Ua(p);
  });
  Kr(() => {
    var p = f(v), h = p.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let x = !1;
    if (He) {
      var b = (
        /** @type {Comment} */
        a.data === Fa
      );
      b !== (h === 0) && (a = ba(), St(a), Rt(!1), x = !0);
    }
    if (He) {
      for (var $ = null, g, C = 0; C < h; C++) {
        if (Ae.nodeType === 8 && /** @type {Comment} */
        Ae.data === Ga) {
          a = /** @type {Comment} */
          Ae, x = !0, Rt(!1);
          break;
        }
        var w = p[C], k = r(w, C);
        g = Su(
          Ae,
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
    He || Pf(p, s, a, o, t, r, n), i !== null && (h === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Pr(c, () => {
      c = null;
    })), x && Rt(!0), f(v);
  }), He && (a = Ae);
}
function Pf(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & _1) !== 0, v = (o & (Ka | Wa)) !== 0, p = e.length, h = t.items, x = t.first, b = x, $, g = null, C, w = [], k = [], N, S, z, H;
  if (d)
    for (H = 0; H < p; H += 1)
      N = e[H], S = i(N, H), z = h.get(S), z !== void 0 && ((s = z.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(z));
  for (H = 0; H < p; H += 1) {
    if (N = e[H], S = i(N, H), z = h.get(S), z === void 0) {
      var L = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Su(
        L,
        t,
        g,
        g === null ? t.first : g.next,
        N,
        S,
        H,
        r,
        o,
        a
      ), h.set(S, g), w = [], k = [], b = g.next;
      continue;
    }
    if (v && Hf(z, N, H, o), (z.e.f & Tn) !== 0 && (vo(z.e), d && ((l = z.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(z))), z !== b) {
      if ($ !== void 0 && $.has(z)) {
        if (w.length < k.length) {
          var R = k[0], O;
          g = R.prev;
          var A = w[0], E = w[w.length - 1];
          for (O = 0; O < w.length; O += 1)
            Ys(w[O], R, n);
          for (O = 0; O < k.length; O += 1)
            $.delete(k[O]);
          Zn(t, A.prev, E.next), Zn(t, g, A), Zn(t, E, R), b = R, g = E, H -= 1, w = [], k = [];
        } else
          $.delete(z), Ys(z, b, n), Zn(t, z.prev, z.next), Zn(t, z, g === null ? t.first : g.next), Zn(t, g, z), g = z;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== S; )
        (b.e.f & Tn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      z = b;
    }
    w.push(z), g = z, b = z.next;
  }
  if (b !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); b !== null; )
      (b.e.f & Tn) === 0 && _.push(b), b = b.next;
    var M = _.length;
    if (M > 0) {
      var T = (o & Wl) !== 0 && p === 0 ? n : null;
      if (d) {
        for (H = 0; H < M; H += 1)
          (u = _[H].a) == null || u.measure();
        for (H = 0; H < M; H += 1)
          (c = _[H].a) == null || c.fix();
      }
      Nf(t, _, T, h);
    }
  }
  d && Mo(() => {
    var V;
    if (C !== void 0)
      for (z of C)
        (V = z.a) == null || V.apply();
  }), We.first = t.first && t.first.e, We.last = g && g.e;
}
function Hf(e, t, n, r) {
  (r & Ka) !== 0 && Ca(e.v, t), (r & Wa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ka) !== 0, d = (l & k1) === 0, v = c ? d ? /* @__PURE__ */ oe(o) : Hr(o) : o, p = (l & Wa) === 0 ? a : Hr(a), h = {
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
    return h.e = Fn(() => s(e, v, p, u), He), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
  Se(() => {
    var s = (
      /** @type {Effect} */
      We
    );
    if (a === (a = t() ?? "")) {
      He && xn();
      return;
    }
    if (s.nodes_start !== null && (uu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (He) {
        Ae.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Li(), _r;
        Ot(Ae, u), i = St(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = ss(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ vt(d)), Ot(
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ vt(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ vt(d)
          );
      else
        i.before(d);
    }
  });
}
function bt(e, t, n, r, o) {
  var i;
  He && xn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Tf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function cr(e, t, ...n) {
  var r = e, o = pt, i;
  Kr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), He && (r = Ae);
}
function Eu(e, t, n) {
  He && xn();
  var r = e, o, i;
  Kr(() => {
    o !== (o = t()) && (i && (Pr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Xr), He && (r = Ae);
}
function zf(e, t, n, r, o, i) {
  let a = He;
  He && xn();
  var s, l, u = null;
  He && Ae.nodeType === 1 && (u = /** @type {Element} */
  Ae, xn());
  var c = (
    /** @type {TemplateNode} */
    He ? Ae : e
  ), d;
  Kr(() => {
    const v = t() || null;
    var p = v === "svg" ? H1 : null;
    v !== s && (d && (v === null ? Pr(d, () => {
      d = null, l = null;
    }) : v === l ? vo(d) : cn(d)), v && v !== l && (d = Fn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : p ? document.createElementNS(p, v) : document.createElement(v), Ot(u, u), r) {
        He && Cf(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ vt(u) : u.appendChild(On())
        );
        He && (h === null ? Rt(!1) : St(h)), r(u, h);
      }
      We.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Xr), a && (Rt(!0), St(c));
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
function wt(e, t, n) {
  It(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Yr(() => {
        var a = n();
        ee(a), o && ns(i, a) && (i = a, r.update(a));
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
function Of() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Mu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Of(e) : e ?? "";
}
const Ks = [...` 	
\r\f \v\uFEFF`];
function Lf(e, t, n) {
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
function ia(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Df(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ia)), o && l.push(...Object.keys(o).map(ia));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var p = ia(e.substring(u, c).trim());
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
function xt(e, t, n, r, o, i) {
  var a = e.__className;
  if (He || a !== n || a === void 0) {
    var s = Lf(n, r, i);
    (!He || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function aa(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (He || o !== t) {
    var i = Df(t, r);
    (!He || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (aa(e, n == null ? void 0 : n[0], r[0]), aa(e, n == null ? void 0 : n[1], r[1], "important")) : aa(e, n, r));
  return r;
}
const to = Symbol("class"), nr = Symbol("style"), Vu = Symbol("is custom element"), Nu = Symbol("is html");
function ar(e) {
  if (He) {
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
    e.__on_r = n, of(n), Sf();
  }
}
function sa(e, t) {
  var n = Zi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Af(e, t) {
  var n = Zi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function If(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Zi(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Z1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ut(e, t, n, r, o = !1) {
  var i = Zi(e), a = i[Vu], s = !i[Nu];
  let l = He && a;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var v = Pu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      xt(e, p, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
      continue;
    }
    if (C === "style") {
      ft(e, w, t == null ? void 0 : t[nr], n[nr]), u[C] = w, u[nr] = n[nr];
      continue;
    }
    var h = u[C];
    if (w !== h) {
      u[C] = w;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, N = "$$" + C;
          let S = C.slice(2);
          var b = mf(S);
          if (gf(S) && (S = S.slice(0, -7), k.capture = !0), !b && h) {
            if (w != null) continue;
            e.removeEventListener(S, u[N], k), u[N] = null;
          }
          if (w != null)
            if (b)
              e[`__${S}`] = w, jr([S]);
            else {
              let z = function(H) {
                u[C].call(this, H);
              };
              u[N] = Cu(S, e, z, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          $e(e, C, w);
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
          var g = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !g)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if ($ === "value") {
                let S = k.defaultValue;
                k.removeAttribute($), k.defaultValue = S, k.value = k.__value = N ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = S, k.checked = N ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else g || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && $e(e, $, w);
        }
    }
  }
  return l && Rt(!0), u;
}
function Zi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Nu]: e.namespaceURI === P1
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
var rr, uo, Uo, Sa, Hu;
const Ea = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    $r(this, Sa), $r(this, rr, /* @__PURE__ */ new WeakMap()), $r(this, uo), $r(this, Uo), oi(this, Uo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, rr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, rr).set(t, r), b1(this, Sa, Hu).call(this).observe(t, ut(this, Uo)), () => {
      var o = ut(this, rr).get(t);
      o.delete(n), o.size === 0 && (ut(this, rr).delete(t), ut(this, uo).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakSet(), Hu = function() {
  return ut(this, uo) ?? oi(this, uo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ea.entries.set(t.target, t);
        for (var n of ut(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Tt(Ea, "entries", /* @__PURE__ */ new WeakMap());
let Rf = Ea;
var Zf = /* @__PURE__ */ new Rf({
  box: "border-box"
});
function Fs(e, t, n) {
  var r = Zf.observe(e, () => n(e[t]));
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
function Le(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => ee(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Nr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && Q1(() => {
    Us(t, r), fo(n.b);
  }), ln(() => {
    const o = Cn(() => n.m.map(D1));
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
function Be(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Eo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Qt(e) {
  Ke === null && Ti(), Br && Ke.l !== null ? Bf(Ke).m.push(e) : ln(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  Ke === null && Ti(), Qt(() => () => Cn(e));
}
function qf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function qi() {
  const e = Ke;
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
      const a = Eo(i) ? i.slice() : [i], s = qf(
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
function Kt(e, t) {
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
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Kt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = pt;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : pt;
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
function j(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Bo = !1, Ma = Symbol();
function te(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: pt
  });
  if (r.store !== e && !(Ma in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = pt;
    else {
      var o = !0;
      r.unsubscribe = cs(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Ma in n ? j(e) : f(r.source);
}
function Xf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pt), e;
}
function fi(e, t) {
  return e.set(t), t;
}
function tt() {
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
function Yf(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
  }
}
const Kf = {
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
function $t(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Kf
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
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Hr(0) }, Wf);
}
const jf = {
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
      const i = Hn(o, t);
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
        const o = Hn(r, t);
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
function st(...e) {
  return new Proxy({ props: e }, jf);
}
function Js(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & S1) !== 0, a = !Br || (n & E1) !== 0, s = (n & M1) !== 0, l = (n & V1) !== 0, u = !1, c;
  s ? [c, u] = Yf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || es in e, v = s && (((o = Hn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, p = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? p = Cn(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  c === void 0 && r !== void 0 && (v && a && W1(), c = b(), v && v(c));
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
    var g = (i ? Nr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= I1, $ = () => {
      var S = f(g);
      return S !== void 0 && (p = /** @type {V} */
      void 0), S === void 0 ? p : S;
    };
  }
  if ((n & jl) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(S, z) {
      return arguments.length > 0 ? ((!a || !z || C || u) && v(z ? $() : S), S) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ oe(c), N = /* @__PURE__ */ Nr(() => {
    var S = $(), z = f(k);
    return w ? (w = !1, z) : k.v = S;
  });
  return s && f(N), i || (N.equals = rs), function(S, z) {
    if (arguments.length > 0) {
      const H = z ? f(N) : a && s ? an(S) : S;
      if (!N.equals(H)) {
        if (w = !0, J(k, H), x && p !== void 0 && (p = H), Js(N))
          return S;
        Cn(() => f(N));
      }
      return S;
    }
    return Js(N) ? N.v : f(N);
  };
}
function Ff(e) {
  return new Gf(e);
}
var Rn, rn;
class Gf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    $r(this, Rn), $r(this, rn);
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
          return s === es ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return J(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    oi(this, rn, (t.hydrate ? Mf : _u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), oi(this, Rn, i.$$events);
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
      Vf(ut(this, rn));
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
let Tu;
typeof HTMLElement == "function" && (Tu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Tt(this, "$$ctor"), Tt(this, "$$s"), Tt(this, "$$c"), Tt(this, "$$cn", !1), Tt(this, "$$d", {}), Tt(this, "$$r", !1), Tt(this, "$$p_d", {}), Tt(this, "$$l", {}), Tt(this, "$$l_u", /* @__PURE__ */ new Map()), Tt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Uf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Jo(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = ef(() => {
        Yr(() => {
          var r;
          this.$$r = !0;
          for (const o of ii(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Jo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Jo(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function Jo(e, t, n, r) {
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
function ue(e, t, n, r, o, i) {
  let a = class extends Tu {
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
    co(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Jo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Hn(c, s)) == null ? void 0 : u.get;
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
var Jf = { value: () => {
} };
function Bi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Qo(n);
}
function Qo(e) {
  this._ = e;
}
function Qf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Qo.prototype = Bi.prototype = {
  constructor: Qo,
  on: function(e, t) {
    var n = this._, r = Qf(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = ev(n[o], e.name))) return o;
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
    return new Qo(e);
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
function Qs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Jf, e = e.slice(0, r).concat(e.slice(r + 1));
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
function Xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), el.hasOwnProperty(t) ? { space: el[t], local: e } : e;
}
function tv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Va && t.documentElement.namespaceURI === Va ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function nv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Xi(e);
  return (t.local ? nv : tv)(t);
}
function rv() {
}
function ds(e) {
  return e == null ? rv : function() {
    return this.querySelector(e);
  };
}
function ov(e) {
  typeof e != "function" && (e = ds(e));
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
function Ou(e) {
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
  typeof e == "function" ? e = sv(e) : e = Ou(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Xt(r, o);
}
function Lu(e) {
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
function pv() {
  return Array.from(this.children);
}
function gv(e) {
  return function() {
    return vv.call(this.children, e);
  };
}
function hv(e) {
  return this.selectAll(e == null ? pv : gv(typeof e == "function" ? e : Du(e)));
}
function mv(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Xt(r, this._parents);
}
function Au(e) {
  return new Array(e.length);
}
function yv() {
  return new Xt(this._enter || this._groups.map(Au), this._parents);
}
function vi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
vi.prototype = {
  constructor: vi,
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
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new vi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function xv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = p = a.call(l, l.__data__, s, t) + "", u.has(p) ? o[s] = l : u.set(p, l));
  for (s = 0; s < d; ++s)
    p = a.call(e, i[s], s, i) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = i[s], u.delete(p)) : n[s] = new vi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function $v(e) {
  return e.__data__;
}
function Cv(e, t) {
  if (!arguments.length) return Array.from(this, $v);
  var n = t ? xv : bv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = wv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, p = _v(e.call(c, c && c.__data__, u, r)), h = p.length, x = s[u] = new Array(h), b = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, d, x, b, $, p, t);
    for (var g = 0, C = 0, w, k; g < h; ++g)
      if (w = x[g]) {
        for (g >= C && (C = g + 1); !(k = b[C]) && ++C < h; ) ;
        w._next = k || null;
      }
  }
  return a = new Xt(a, r), a._enter = s, a._exit = l, a;
}
function _v(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function kv() {
  return new Xt(this._exit || this._groups.map(Au), this._parents);
}
function Sv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ev(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (v[h] = p);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Xt(s, this._parents);
}
function Mv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Vv(e) {
  e || (e = Nv);
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
function Nv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Pv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Hv() {
  return Array.from(this);
}
function Tv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function zv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Ov() {
  return !this.node();
}
function Lv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Dv(e) {
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
  var n = Xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Av : Dv : typeof t == "function" ? n.local ? qv : Zv : n.local ? Rv : Iv)(n, t));
}
function Iu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Xv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yv(e, t, n) {
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
function Wv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? Kv : Yv)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Iu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Jv(e) {
  return function() {
    qu(this, e);
  };
}
function Qv(e) {
  return function() {
    Bu(this, e);
  };
}
function ep(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Bu)(this, e);
  };
}
function tp(e, t) {
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ep : t ? Jv : Qv)(n, t));
}
function np() {
  this.textContent = "";
}
function rp(e) {
  return function() {
    this.textContent = e;
  };
}
function op(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ip(e) {
  return arguments.length ? this.each(e == null ? np : (typeof e == "function" ? op : rp)(e)) : this.node().textContent;
}
function ap() {
  this.innerHTML = "";
}
function sp(e) {
  return function() {
    this.innerHTML = e;
  };
}
function lp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function up(e) {
  return arguments.length ? this.each(e == null ? ap : (typeof e == "function" ? lp : sp)(e)) : this.node().innerHTML;
}
function cp() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function dp() {
  return this.each(cp);
}
function fp() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vp() {
  return this.each(fp);
}
function pp(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gp() {
  return null;
}
function hp(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? gp : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function mp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function yp() {
  return this.each(mp);
}
function wp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function bp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xp(e) {
  return this.select(e ? bp : wp);
}
function $p(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Cp(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function _p(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function kp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Sp(e, t, n) {
  return function() {
    var r = this.__on, o, i = Cp(t);
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
function Ep(e, t, n) {
  var r = _p(e + ""), o, i = r.length, a;
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
  for (s = t ? Sp : kp, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Iu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Mp(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Vp(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Np(e, t) {
  return this.each((typeof t == "function" ? Vp : Mp)(e, t));
}
function* Pp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Yu = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function No() {
  return new Xt([[document.documentElement]], Yu);
}
function Hp() {
  return this;
}
Xt.prototype = No.prototype = {
  constructor: Xt,
  select: ov,
  selectAll: lv,
  selectChild: fv,
  selectChildren: hv,
  filter: mv,
  data: Cv,
  enter: yv,
  exit: kv,
  join: Sv,
  merge: Ev,
  selection: Hp,
  order: Mv,
  sort: Vv,
  call: Pv,
  nodes: Hv,
  node: Tv,
  size: zv,
  empty: Ov,
  each: Lv,
  attr: Bv,
  style: Wv,
  property: Uv,
  classed: tp,
  text: ip,
  html: up,
  raise: dp,
  lower: vp,
  append: pp,
  insert: hp,
  remove: yp,
  clone: xp,
  datum: $p,
  on: Ep,
  dispatch: Np,
  [Symbol.iterator]: Pp
};
function jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Yu);
}
function Tp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = Tp(e), t === void 0 && (t = e.currentTarget), t) {
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
const zp = { passive: !1 }, mo = { capture: !0, passive: !1 };
function la(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ku(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", kr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", kr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Xo = (e) => () => e;
function Na(e, {
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
Na.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Op(e) {
  return !e.ctrlKey && !e.button;
}
function Lp() {
  return this.parentNode;
}
function Dp(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ap() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ip() {
  var e = Op, t = Lp, n = Dp, r = Ap, o = {}, i = Bi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, zp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var N = C(this, t.call(this, w, k), w, k, "mouse");
      N && (jt(w.view).on("mousemove.drag", h, mo).on("mouseup.drag", x, mo), Ku(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, N("start", w));
    }
  }
  function h(w) {
    if (kr(w), !u) {
      var k = w.clientX - s, N = w.clientY - l;
      u = k * k + N * N > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    jt(w.view).on("mousemove.drag mouseup.drag", null), Wu(w.view, u), kr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var N = w.changedTouches, S = t.call(this, w, k), z = N.length, H, L;
      for (H = 0; H < z; ++H)
        (L = C(this, S, w, k, N[H].identifier, N[H])) && (la(w), L("start", w, N[H]));
    }
  }
  function $(w) {
    var k = w.changedTouches, N = k.length, S, z;
    for (S = 0; S < N; ++S)
      (z = o[k[S].identifier]) && (kr(w), z("drag", w, k[S]));
  }
  function g(w) {
    var k = w.changedTouches, N = k.length, S, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < N; ++S)
      (z = o[k[S].identifier]) && (la(w), z("end", w, k[S]));
  }
  function C(w, k, N, S, z, H) {
    var L = i.copy(), R = on(H || N, k), O, A, E;
    if ((E = n.call(w, new Na("beforestart", {
      sourceEvent: N,
      target: v,
      identifier: z,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), S)) != null)
      return O = E.x - R[0] || 0, A = E.y - R[1] || 0, function _(M, T, V) {
        var P = R, I;
        switch (M) {
          case "start":
            o[z] = _, I = a++;
            break;
          case "end":
            delete o[z], --a;
          // falls through
          case "drag":
            R = on(V || T, k), I = a;
            break;
        }
        L.call(
          M,
          w,
          new Na(M, {
            sourceEvent: T,
            subject: E,
            target: v,
            identifier: z,
            active: I,
            x: R[0] + O,
            y: R[1] + A,
            dx: R[0] - P[0],
            dy: R[1] - P[1],
            dispatch: L
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
var yo = 0.7, pi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rp = /^#([0-9a-f]{3,8})$/, Zp = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), qp = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Bp = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Xp = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Yp = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), Kp = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
  formatHex8: Wp,
  formatHsl: jp,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function Wp() {
  return this.rgb().formatHex8();
}
function jp() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rp.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zp.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = qp.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bp.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Xp.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yp.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kp.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Fp(e) {
  return e instanceof Po || (e = bo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Pa(e, t, n, r) {
  return arguments.length === 1 ? Fp(e) : new zt(e, t, n, r ?? 1);
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
    return new zt(sr(this.r), sr(this.g), sr(this.b), gi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: il,
  // Deprecated! Use color.formatHex.
  formatHex: il,
  formatHex8: Gp,
  formatRgb: al,
  toString: al
}));
function il() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Gp() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function al() {
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
function Up(e, t, n, r) {
  return arguments.length === 1 ? Fu(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(sn, Up, ju(Po, {
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
    return new sn(ll(this.h), Ko(this.s), Ko(this.l), gi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gi(this.opacity);
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
function Jp(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Qp(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eg(e) {
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? Qp(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? Jp(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = eg(t);
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
var Ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ca = new RegExp(Ha.source, "g");
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
  var n = Ha.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ha.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: qn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? ng(l[0].x) : tg(t) : (t = l.length, function(u) {
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
function og(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ig(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: qn(u, d) }, { i: x - 2, x: qn(c, v) });
    } else (d || v) && p.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: qn(u, d) }, { i: x - 2, x: qn(c, v) });
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
var ag = ec(og, "px, ", "px)", "deg)"), sg = ec(ig, ", ", ")", ")"), lg = 1e-12;
function dl(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], p = c - s, h = d - l, x = p * p + h * h, b, $;
    if (x < lg)
      $ = Math.log(v / u) / t, b = function(S) {
        return [
          s + S * p,
          l + S * h,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var g = Math.sqrt(x), C = (v * v - u * u + r * x) / (2 * u * n * g), w = (v * v - u * u - r * x) / (2 * v * n * g), k = Math.log(Math.sqrt(C * C + 1) - C), N = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (N - k) / t, b = function(S) {
        var z = S * $, H = dl(k), L = u / (n * g) * (H * cg(t * z + k) - ug(k));
        return [
          s + L * p,
          l + L * h,
          u * H / dl(t * z + k)
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
var Lr = 0, io = 0, no = 0, tc = 1e3, hi, ao, mi = 0, dr = 0, Yi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ps() {
  return dr || (nc(fg), dr = xo.now() + Yi);
}
function fg() {
  dr = 0;
}
function yi() {
  this._call = this._time = this._next = null;
}
yi.prototype = rc.prototype = {
  constructor: yi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ps() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : hi = this, ao = this), this._call = e, this._time = n, Ta();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ta());
  }
};
function rc(e, t, n) {
  var r = new yi();
  return r.restart(e, t, n), r;
}
function vg() {
  ps(), ++Lr;
  for (var e = hi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Lr;
}
function fl() {
  dr = (mi = xo.now()) + Yi, Lr = io = 0;
  try {
    vg();
  } finally {
    Lr = 0, gg(), dr = 0;
  }
}
function pg() {
  var e = xo.now(), t = e - mi;
  t > tc && (Yi -= t, mi = e);
}
function gg() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  ao = e, Ta(r);
}
function Ta(e) {
  if (!Lr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - xo.now() - Yi)), no && (no = clearInterval(no))) : (no || (mi = xo.now(), no = setInterval(pg, tc)), Lr = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var hg = Bi("start", "end", "cancel", "interrupt"), mg = [], oc = 0, pl = 1, za = 2, ei = 3, gl = 4, Oa = 5, ti = 6;
function Ki(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  yg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: hg,
    tween: mg,
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
function En(e, t) {
  var n = pn(e, t);
  if (n.state > ei) throw new Error("too late; already running");
  return n;
}
function pn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function yg(e, t, n) {
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
        if (p.state === ei) return vl(a);
        p.state === gl ? (p.state = ti, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < t && (p.state = ti, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ei && (n.state = gl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = za, n.on.call("start", e, e.__data__, n.index, n.group), n.state === za) {
      for (n.state = ei, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = p);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Oa, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === Oa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ti, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ni(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > za && r.state < Oa, r.state = ti, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wg(e) {
  return this.each(function() {
    ni(this, e);
  });
}
function bg(e, t) {
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
function xg(e, t, n) {
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
function $g(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = pn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? bg : xg)(n, e, t));
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
function ic(e, t) {
  var n;
  return (typeof t == "number" ? qn : t instanceof bo ? ul : (n = bo(t)) ? (t = n, ul) : rg)(e, t);
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
function Mg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Vg(e, t) {
  var n = Xi(e), r = n === "transform" ? sg : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Mg : Eg)(n, r, hs(this, "attr." + e, t)) : t == null ? (n.local ? _g : Cg)(n) : (n.local ? Sg : kg)(n, r, t));
}
function Ng(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Pg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Hg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pg(e, i)), n;
  }
  return o._value = t, o;
}
function Tg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ng(e, i)), n;
  }
  return o._value = t, o;
}
function zg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? Hg : Tg)(r, t));
}
function Og(e, t) {
  return function() {
    gs(this, e).delay = +t.apply(this, arguments);
  };
}
function Lg(e, t) {
  return t = +t, function() {
    gs(this, e).delay = t;
  };
}
function Dg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Og : Lg)(t, e)) : pn(this.node(), t).delay;
}
function Ag(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Ig(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Rg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ag : Ig)(t, e)) : pn(this.node(), t).duration;
}
function Zg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function qg(e) {
  var t = this._id;
  return arguments.length ? this.each(Zg(t, e)) : pn(this.node(), t).ease;
}
function Bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Xg(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Bg(this._id, e));
}
function Yg(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Kg(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, p = 0; p < c; ++p)
      (v = l[p] || u[p]) && (d[p] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Ln(a, this._parents, this._name, this._id);
}
function Wg(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jg(e, t, n) {
  var r, o, i = Wg(t) ? gs : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fg(e, t) {
  var n = this._id;
  return arguments.length < 2 ? pn(this.node(), n).on.on(e) : this.each(jg(n, e, t));
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
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Ki(u[v], t, n, v, u, pn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Qg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ou(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), p, h = pn(c, n), x = 0, b = v.length; x < b; ++x)
          (p = v[x]) && Ki(p, t, n, x, v, h);
        i.push(v), a.push(c);
      }
  return new Ln(i, a, t, n);
}
var eh = No.prototype.constructor;
function th() {
  return new eh(this._groups, this._parents);
}
function nh(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), a = (this.style.removeProperty(e), Or(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function ac(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function rh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Or(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function oh(e, t, n) {
  var r, o, i;
  return function() {
    var a = Or(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Or(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function ih(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = En(this, e), u = l.on, c = l.value[i] == null ? s || (s = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ah(e, t, n) {
  var r = (e += "") == "transform" ? ag : ic;
  return t == null ? this.styleTween(e, nh(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, oh(e, r, hs(this, "style." + e, t))).each(ih(this._id, e)) : this.styleTween(e, rh(e, r, t), n).on("end.style." + e, null);
}
function sh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function lh(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && sh(e, a, n)), r;
  }
  return i._value = t, i;
}
function uh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, lh(e, t, n ?? ""));
}
function ch(e) {
  return function() {
    this.textContent = e;
  };
}
function dh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function fh(e) {
  return this.tween("text", typeof e == "function" ? dh(hs(this, "text", e)) : ch(e == null ? "" : e + ""));
}
function vh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function ph(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && vh(o)), t;
  }
  return r._value = e, r;
}
function gh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, ph(e));
}
function hh() {
  for (var e = this._name, t = this._id, n = sc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = pn(l, t);
        Ki(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
}
function mh() {
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
var yh = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++yh;
}
var Vn = No.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Jg,
  selectAll: Qg,
  selectChild: Vn.selectChild,
  selectChildren: Vn.selectChildren,
  filter: Yg,
  merge: Kg,
  selection: th,
  transition: hh,
  call: Vn.call,
  nodes: Vn.nodes,
  node: Vn.node,
  size: Vn.size,
  empty: Vn.empty,
  each: Vn.each,
  on: Fg,
  attr: Vg,
  attrTween: zg,
  style: ah,
  styleTween: uh,
  text: fh,
  textTween: gh,
  remove: Ug,
  tween: $g,
  delay: Dg,
  duration: Rg,
  ease: qg,
  easeVarying: Xg,
  end: mh,
  [Symbol.iterator]: Vn[Symbol.iterator]
};
function wh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var bh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wh
};
function xh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function $h(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = sc(), (n = bh).time = ps(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ki(l, e, t, u, a, n || xh(l, t));
  return new Ln(r, this._parents, e, t);
}
No.prototype.interrupt = wg;
No.prototype.transition = $h;
const jo = (e) => () => e;
function Ch(e, {
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
function Nn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Nn.prototype = {
  constructor: Nn,
  scale: function(e) {
    return e === 1 ? this : new Nn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Nn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Wi = new Nn(1, 0, 0);
lc.prototype = Nn.prototype;
function lc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Wi;
  return e.__zoom;
}
function da(e) {
  e.stopImmediatePropagation();
}
function ro(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _h(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function kh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hl() {
  return this.__zoom || Wi;
}
function Sh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Eh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function uc() {
  var e = _h, t = kh, n = Mh, r = Sh, o = Eh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dg, u = Bi("start", "zoom", "end"), c, d, v, p = 500, h = 150, x = 0, b = 10;
  function $(E) {
    E.property("__zoom", hl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(E, _, M, T) {
    var V = E.selection ? E.selection() : E;
    V.property("__zoom", hl), E !== V ? k(E, _, M, T) : V.interrupt().each(function() {
      N(this, arguments).event(T).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(E, _, M, T) {
    $.scaleTo(E, function() {
      var V = this.__zoom.k, P = typeof _ == "function" ? _.apply(this, arguments) : _;
      return V * P;
    }, M, T);
  }, $.scaleTo = function(E, _, M, T) {
    $.transform(E, function() {
      var V = t.apply(this, arguments), P = this.__zoom, I = M == null ? w(V) : typeof M == "function" ? M.apply(this, arguments) : M, Y = P.invert(I), K = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(g(P, K), I, Y), V, a);
    }, M, T);
  }, $.translateBy = function(E, _, M, T) {
    $.transform(E, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, T);
  }, $.translateTo = function(E, _, M, T, V) {
    $.transform(E, function() {
      var P = t.apply(this, arguments), I = this.__zoom, Y = T == null ? w(P) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Wi.translate(Y[0], Y[1]).scale(I.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), P, a);
    }, T, V);
  };
  function g(E, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === E.k ? E : new Nn(_, E.x, E.y);
  }
  function C(E, _, M) {
    var T = _[0] - M[0] * E.k, V = _[1] - M[1] * E.k;
    return T === E.x && V === E.y ? E : new Nn(E.k, T, V);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, _, M, T) {
    E.on("start.zoom", function() {
      N(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var V = this, P = arguments, I = N(V, P).event(T), Y = t.apply(V, P), K = M == null ? w(Y) : typeof M == "function" ? M.apply(V, P) : M, G = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), Q = V.__zoom, W = typeof _ == "function" ? _.apply(V, P) : _, ce = l(Q.invert(K).concat(G / Q.k), W.invert(K).concat(G / W.k));
      return function(se) {
        if (se === 1) se = W;
        else {
          var we = ce(se), ae = G / we[2];
          se = new Nn(ae, K[0] - we[0] * ae, K[1] - we[1] * ae);
        }
        I.zoom(null, se);
      };
    });
  }
  function N(E, _, M) {
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
      var _ = jt(this.that).datum();
      u.call(
        E,
        this.that,
        new Ch(E, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        _
      );
    }
  };
  function z(E, ..._) {
    if (!e.apply(this, arguments)) return;
    var M = N(this, _).event(E), T = this.__zoom, V = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), P = on(E);
    if (M.wheel)
      (M.mouse[0][0] !== P[0] || M.mouse[0][1] !== P[1]) && (M.mouse[1] = T.invert(M.mouse[0] = P)), clearTimeout(M.wheel);
    else {
      if (T.k === V) return;
      M.mouse = [P, T.invert(P)], ni(this), M.start();
    }
    ro(E), M.wheel = setTimeout(I, h), M.zoom("mouse", n(C(g(T, V), M.mouse[0], M.mouse[1]), M.extent, a));
    function I() {
      M.wheel = null, M.end();
    }
  }
  function H(E, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var M = E.currentTarget, T = N(this, _, !0).event(E), V = jt(E.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", G, !0), P = on(E, M), I = E.clientX, Y = E.clientY;
    Ku(E.view), da(E), T.mouse = [P, this.__zoom.invert(P)], ni(this), T.start();
    function K(Q) {
      if (ro(Q), !T.moved) {
        var W = Q.clientX - I, ce = Q.clientY - Y;
        T.moved = W * W + ce * ce > x;
      }
      T.event(Q).zoom("mouse", n(C(T.that.__zoom, T.mouse[0] = on(Q, M), T.mouse[1]), T.extent, a));
    }
    function G(Q) {
      V.on("mousemove.zoom mouseup.zoom", null), Wu(Q.view, T.moved), ro(Q), T.event(Q).end();
    }
  }
  function L(E, ..._) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, T = on(E.changedTouches ? E.changedTouches[0] : E, this), V = M.invert(T), P = M.k * (E.shiftKey ? 0.5 : 2), I = n(C(g(M, P), T, V), t.apply(this, _), a);
      ro(E), s > 0 ? jt(this).transition().duration(s).call(k, I, T, E) : jt(this).call($.transform, I, T, E);
    }
  }
  function R(E, ..._) {
    if (e.apply(this, arguments)) {
      var M = E.touches, T = M.length, V = N(this, _, E.changedTouches.length === T).event(E), P, I, Y, K;
      for (da(E), I = 0; I < T; ++I)
        Y = M[I], K = on(Y, this), K = [K, this.__zoom.invert(K), Y.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== K[2] && (V.touch1 = K, V.taps = 0) : (V.touch0 = K, P = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (V.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, p)), ni(this), V.start());
    }
  }
  function O(E, ..._) {
    if (this.__zooming) {
      var M = N(this, _).event(E), T = E.changedTouches, V = T.length, P, I, Y, K;
      for (ro(E), P = 0; P < V; ++P)
        I = T[P], Y = on(I, this), M.touch0 && M.touch0[2] === I.identifier ? M.touch0[0] = Y : M.touch1 && M.touch1[2] === I.identifier && (M.touch1[0] = Y);
      if (I = M.that.__zoom, M.touch1) {
        var G = M.touch0[0], Q = M.touch0[1], W = M.touch1[0], ce = M.touch1[1], se = (se = W[0] - G[0]) * se + (se = W[1] - G[1]) * se, we = (we = ce[0] - Q[0]) * we + (we = ce[1] - Q[1]) * we;
        I = g(I, Math.sqrt(se / we)), Y = [(G[0] + W[0]) / 2, (G[1] + W[1]) / 2], K = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (M.touch0) Y = M.touch0[0], K = M.touch0[1];
      else return;
      M.zoom("touch", n(C(I, Y, K), M.extent, a));
    }
  }
  function A(E, ..._) {
    if (this.__zooming) {
      var M = N(this, _).event(E), T = E.changedTouches, V = T.length, P, I;
      for (da(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, p), P = 0; P < V; ++P)
        I = T[P], M.touch0 && M.touch0[2] === I.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === I.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (I = on(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < b)) {
        var Y = jt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
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
}, wi = [
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
var bi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(bi || (bi = {}));
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
function Vh(e, t) {
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
const Ph = (e) => "id" in e && "source" in e && "target" in e, Hh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ho = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Th = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : ms(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? xi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ji(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Fi(n);
}, To = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = xi(r);
      n = ji(n, o);
    }
  }), Fi(n);
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
function zh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Oh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = zh(e, a), l = To(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Lh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
}, ji = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Aa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Fi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ir = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, xi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, pc = (e, t) => Fi(ji(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), Dh = (e, t) => {
}, ys = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), zo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ys(s, a) : s;
}, $i = ({ x: e, y: t }, [n, r, o]) => ({
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
function Ah(e, t, n) {
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
function Ih(e, t, n, r, o, i) {
  const { x: a, y: s } = $i(e, [t, n, r]), { x: l, y: u } = $i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = Ah(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ar(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, p = t / 2 - d * c, h = n / 2 - v * c, x = Ih(e, p, h, c, t, n), b = {
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
}, Ci = () => {
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
function Rh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Zh() {
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
}), qh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Bh = ["INPUT", "SELECT", "TEXTAREA"];
function Xh(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Bh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
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
function Yh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
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
  }), [d, v, p, h] = Yh({
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
function Kh({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Wh({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ji(xi(e), xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(a, Fi(i)) > 0;
}
const jh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Fh = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gh = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Ph(e) ? n = { ...e } : n = {
    ...e,
    id: jh(e)
  }, Fh(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
}, Uh = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Jh({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Uh({
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
    const N = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], S = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? p = d === "x" ? N : S : p = d === "x" ? S : N;
  } else {
    const N = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? p = a.x === v ? S : N : p = a.y === v ? N : S, t === r) {
      const O = Math.abs(e[d] - n[d]);
      if (O <= i) {
        const A = Math.min(i - 1, i - O);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * A : $[d] = (u[d] > n[d] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const O = d === "x" ? "y" : "x", A = a[d] === s[O], E = l[O] > u[O], _ = l[O] < u[O];
      (a[d] === 1 && (!A && E || A && _) || a[d] !== 1 && (!A && _ || A && E)) && (p = d === "x" ? N : S);
    }
    const z = { x: l.x + b.x, y: l.y + b.y }, H = { x: u.x + $.x, y: u.y + $.y }, L = Math.max(Math.abs(z.x - p[0].x), Math.abs(H.x - p[0].x)), R = Math.max(Math.abs(z.y - p[0].y), Math.abs(H.y - p[0].y));
    L >= R ? (h = (z.x + H.x) / 2, x = p[0].y) : (h = p[0].x, x = (z.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...p,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], h, x, w, k];
}
function Qh(e, t, n, r) {
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
function _i({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, p, h] = Jh({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let g = "";
    return $ > 0 && $ < c.length - 1 ? g = Qh(c[$ - 1], b, c[$ + 1], a) : g = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += g, x;
  }, ""), d, v, p, h];
}
function kl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function e0(e) {
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
function El(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ra(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function t0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ra(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function n0(e, t, n, r, o) {
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
  nodeExtent: wi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, r0 = {
  ...bs,
  checkEquality: !0
};
function xs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function o0(e, t, n) {
  const r = xs(bs, n);
  for (const o of e.values())
    if (o.parentId)
      $s(o, e, t, r);
    else {
      const i = Ho(o, r.nodeOrigin), a = Rr(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function bc(e, t, n, r) {
  var o, i;
  const a = xs(r0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = Ho(c, a.nodeOrigin), p = Rr(c.extent) ? c.extent : a.nodeExtent, h = vr(v, p, tr(c));
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
function i0(e, t) {
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
  i0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = a0(e, l, i, a, u), { positionAbsolute: p } = e.internals, h = c !== p.x || d !== p.y;
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
function a0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Ho(e, n), u = Rr(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = fc(c, s, t));
  const d = xc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function s0(e, t, n, r = [0, 0]) {
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
function l0(e, t, n, r, o, i) {
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
    const v = s0(d, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function u0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function c0(e, t) {
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
function d0(e, t, n, r) {
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
function f0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, p = !1;
  function h({ noDragClassName: b, handleSelector: $, domNode: g, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = jt(g);
    function N({ x: L, y: R }, O) {
      const { nodeLookup: A, nodeExtent: E, snapGrid: _, snapToGrid: M, nodeOrigin: T, onNodeDrag: V, onSelectionDrag: P, onError: I, updateNodePositions: Y } = t();
      i = { x: L, y: R };
      let K = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const Q = To(s);
        G = Aa(Q);
      }
      for (const [Q, W] of s) {
        if (!A.has(Q))
          continue;
        let ce = { x: L - W.distance.x, y: R - W.distance.y };
        M && (ce = ys(ce, _));
        let se = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !W.extent) {
          const { positionAbsolute: Ce } = W.internals, me = Ce.x - G.x + E[0][0], Ne = Ce.x + W.measured.width - G.x2 + E[1][0], ie = Ce.y - G.y + E[0][1], U = Ce.y + W.measured.height - G.y2 + E[1][1];
          se = [
            [me, ie],
            [Ne, U]
          ];
        }
        const { position: we, positionAbsolute: ae } = Lh({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: A,
          nodeExtent: se,
          nodeOrigin: T,
          onError: I
        });
        K = K || W.position.x !== we.x || W.position.y !== we.y, W.position = we, W.internals.positionAbsolute = ae;
      }
      if (K && (Y(s, !0), O && (r || V || !w && P))) {
        const [Q, W] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: A
        });
        r == null || r(O, s, Q, W), V == null || V(O, Q, W), w || P == null || P(O, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: L, panBy: R, autoPanSpeed: O, autoPanOnNodeDrag: A } = t();
      if (!A) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [E, _] = vc(u, c, O);
      (E !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - E / L[2], i.y = (i.y ?? 0) - _ / L[2], await R({ x: E, y: _ }) && N(i, null)), a = requestAnimationFrame(S);
    }
    function z(L) {
      var R;
      const { nodeLookup: O, multiSelectionActive: A, nodesDraggable: E, transform: _, snapGrid: M, snapToGrid: T, selectNodesOnDrag: V, onNodeDragStart: P, onSelectionDragStart: I, unselectNodesAndEdges: Y } = t();
      d = !0, (!V || !C) && !A && w && ((R = O.get(w)) != null && R.selected || Y()), C && V && w && (e == null || e(w));
      const K = fa(L.sourceEvent, { transform: _, snapGrid: M, snapToGrid: T, containerBounds: c });
      if (i = K, s = d0(O, E, K, w), s.size > 0 && (n || P || !w && I)) {
        const [G, Q] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: O
        });
        n == null || n(L.sourceEvent, s, G, Q), P == null || P(L.sourceEvent, G, Q), w || I == null || I(L.sourceEvent, Q);
      }
    }
    const H = Ip().clickDistance(k).on("start", (L) => {
      const { domNode: R, nodeDragThreshold: O, transform: A, snapGrid: E, snapToGrid: _ } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, p = !1, O === 0 && z(L), i = fa(L.sourceEvent, { transform: A, snapGrid: E, snapToGrid: _, containerBounds: c }), u = zn(L.sourceEvent, c);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: R, transform: O, snapGrid: A, snapToGrid: E, nodeDragThreshold: _, nodeLookup: M } = t(), T = fa(L.sourceEvent, { transform: O, snapGrid: A, snapToGrid: E, containerBounds: c });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !M.has(w)) && (p = !0), !p) {
        if (!l && R && d && (l = !0, S()), !d) {
          const V = T.xSnapped - (i.x ?? 0), P = T.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + P * P) > _ && z(L);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && s && d && (u = zn(L.sourceEvent, c), N(T, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || p) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: O, onNodeDragStop: A, onSelectionDragStop: E } = t();
        if (O(s, !1), o || A || !w && E) {
          const [_, M] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(L.sourceEvent, s, _, M), A == null || A(L.sourceEvent, _, M), w || E == null || E(L.sourceEvent, M);
        }
      }
    }).filter((L) => {
      const R = L.target;
      return !L.button && (!b || !Vl(R, `.${b}`, g)) && (!$ || Vl(R, $, g));
    });
    v.call(H);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
    destroy: x
  };
}
function v0(e, t, n) {
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
function g0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = v0(e, n, t + p0);
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
function h0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: p, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Sc, onReconnectEnd: g, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: N }) {
  const S = qh(e.target);
  let z = 0, H;
  const { x: L, y: R } = zn(e), O = S == null ? void 0 : S.elementFromPoint(L, R), A = kc(i, O), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !A)
    return;
  const _ = _c(o, A, r, l, t);
  if (!_)
    return;
  let M = zn(e, E), T = !1, V = null, P = !1, I = null;
  function Y() {
    if (!c || !E)
      return;
    const [we, ae] = vc(M, E, N);
    v({ x: we, y: ae }), z = requestAnimationFrame(Y);
  }
  const K = {
    ..._,
    nodeId: o,
    type: A,
    position: _.position
  }, G = l.get(o), Q = {
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
  C(Q);
  let W = Q;
  h == null || h(e, { nodeId: o, handleId: r, handleType: A });
  function ce(we) {
    if (!k() || !K) {
      se(we);
      return;
    }
    const ae = w();
    M = zn(we, E), H = g0(zo(M, ae, !1, [1, 1]), n, l, K), T || (Y(), T = !0);
    const Ce = Ec(we, {
      handle: H,
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
    I = Ce.handleDomNode, V = Ce.connection, P = h0(!!H, Ce.isValid);
    const me = {
      // from stays the same
      ...W,
      isValid: P,
      to: H && P ? $i({ x: H.x, y: H.y }, ae) : M,
      toHandle: Ce.toHandle,
      toPosition: P && Ce.toHandle ? Ce.toHandle.position : ml[K.position],
      toNode: Ce.toHandle ? l.get(Ce.toHandle.nodeId) : null
    };
    P && H && W.toHandle && me.toHandle && W.toHandle.type === me.toHandle.type && W.toHandle.nodeId === me.toHandle.nodeId && W.toHandle.id === me.toHandle.id && W.to.x === me.to.x && W.to.y === me.to.y || (C(me), W = me);
  }
  function se(we) {
    (H || I) && V && P && (x == null || x(V));
    const { inProgress: ae, ...Ce } = W, me = {
      ...Ce,
      toPosition: W.toHandle ? W.toPosition : null
    };
    b == null || b(we, me), i && (g == null || g(we, me)), p(), cancelAnimationFrame(z), T = !1, P = !1, V = null, I = null, S.removeEventListener("mousemove", ce), S.removeEventListener("mouseup", se), S.removeEventListener("touchmove", ce), S.removeEventListener("touchend", se);
  }
  S.addEventListener("mousemove", ce), S.addEventListener("mouseup", se), S.addEventListener("touchmove", ce), S.addEventListener("touchend", se);
}
function Ec(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: h } = zn(e), x = a.elementFromPoint(p, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const g = kc(void 0, b), C = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), N = b.classList.contains("connectableend");
    if (!C || !g)
      return $;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = S;
    const z = k && N && (n === fr.Strict ? d && g === "source" || !d && g === "target" : C !== r || w !== o);
    $.isValid = z && u(S), $.toHandle = _c(C, g, w, c, n, !1);
  }
  return $;
}
const y0 = {
  onPointerDown: m0,
  isValid: Ec
};
function w0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: p = !1 }) {
    const h = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = w[2] * Math.pow(2, k);
      t.scaleTo(N);
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
      ], N = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1), z = {
        x: w[0] - N[0] * S,
        y: w[1] - N[1] * S
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: w[2]
      }, H, s);
    }, g = uc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? h : null);
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
const b0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), pa = ({ x: e, y: t, zoom: n }) => Wi.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ga = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && Ci() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function x0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = on(c), $ = Vc(c), g = d * Math.pow(2, $);
      r.scaleTo(n, g, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let p = o === Wn.Vertical ? 0 : c.deltaX * v, h = o === Wn.Horizontal ? 0 : c.deltaY * v;
    !Ci() && c.shiftKey && o !== Wn.Vertical && (p = c.deltaY * v, h = 0), r.translateBy(
      n,
      -(p / d) * i,
      -(h / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Gi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function $0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Cr(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function C0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Gi(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function _0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Gi(i.transform)));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && b0(e.prevViewport, a.transform))) {
      const l = Gi(a.transform);
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
function S0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
function E0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), v = uc().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), p = jt(e).call(v);
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
  function b(O, A) {
    return p ? new Promise((E) => {
      v == null || v.transform(ga(p, A == null ? void 0 : A.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: O, noPanClassName: A, onPaneContextMenu: E, userSelectionActive: _, panOnScroll: M, panOnDrag: T, panOnScrollMode: V, panOnScrollSpeed: P, preventScrolling: I, zoomOnPinch: Y, zoomOnScroll: K, zoomOnDoubleClick: G, zoomActivationKeyPressed: Q, lib: W, onTransformChange: ce }) {
    _ && !c.isZoomingOrPanning && g();
    const se = M && !Q && !_ ? x0({
      zoomPanValues: c,
      noWheelClassName: O,
      d3Selection: p,
      d3Zoom: v,
      panOnScrollMode: V,
      panOnScrollSpeed: P,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : $0({
      noWheelClassName: O,
      preventScrolling: I,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", se, { passive: !1 }), !_) {
      const ae = C0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", ae);
      const Ce = _0({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: ce
      });
      v.on("zoom", Ce);
      const me = k0({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: M,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", me);
    }
    const we = S0({
      zoomActivationKeyPressed: Q,
      panOnDrag: T,
      zoomOnScroll: K,
      panOnScroll: M,
      zoomOnDoubleClick: G,
      zoomOnPinch: Y,
      userSelectionActive: _,
      noPanClassName: A,
      noWheelClassName: O,
      lib: W
    });
    v.filter(we), G ? p.on("dblclick.zoom", x) : p.on("dblclick.zoom", null);
  }
  function g() {
    v.on("zoom", null);
  }
  async function C(O, A, E) {
    const _ = pa(O), M = v == null ? void 0 : v.constrain()(_, A, E);
    return M && await b(M), new Promise((T) => T(M));
  }
  async function w(O, A) {
    const E = pa(O);
    return await b(E, A), new Promise((_) => _(E));
  }
  function k(O) {
    if (p) {
      const A = pa(O), E = p.property("__zoom");
      (E.k !== O.zoom || E.x !== O.x || E.y !== O.y) && (v == null || v.transform(p, A, null, { sync: !0 }));
    }
  }
  function N() {
    const O = p ? lc(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: O.x, y: O.y, zoom: O.k };
  }
  function S(O, A) {
    return p ? new Promise((E) => {
      v == null || v.scaleTo(ga(p, A == null ? void 0 : A.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function z(O, A) {
    return p ? new Promise((E) => {
      v == null || v.scaleBy(ga(p, A == null ? void 0 : A.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function H(O) {
    v == null || v.scaleExtent(O);
  }
  function L(O) {
    v == null || v.translateExtent(O);
  }
  function R(O) {
    const A = !Pn(O) || O < 0 ? 0 : O;
    v == null || v.clickDistance(A);
  }
  return {
    update: $,
    destroy: g,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: N,
    scaleTo: S,
    scaleBy: z,
    setScaleExtent: H,
    setTranslateExtent: L,
    syncViewport: k,
    setClickDistance: R
  };
}
var Nl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Nl || (Nl = {}));
var M0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(G, "$connectable", n), i = () => te(we, "$connectionRadius", n), a = () => te(ce, "$domNode", n), s = () => te(se, "$nodeLookup", n), l = () => te(W, "$connectionMode", n), u = () => te(me, "$lib", n), c = () => te(Oe, "$autoPanOnConnect", n), d = () => te(Ee, "$flowId", n), v = () => te(Ce, "$isValidConnectionStore", n), p = () => te(ie, "$onedgecreate", n), h = () => te(fe, "$onConnectAction", n), x = () => te(ve, "$onConnectStartAction", n), b = () => te(de, "$onConnectEndAction", n), $ = () => te(ae, "$viewport", n), g = () => te(it, "$connection", n), C = () => te(Xe, "$edges", n), w = () => te(Ze, "$connectionLookup", n), k = /* @__PURE__ */ oe(), N = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), H = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe(), R = /* @__PURE__ */ oe(), O = /* @__PURE__ */ oe();
  let A = y(t, "id", 12, void 0), E = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => Pe.Top), M = y(t, "style", 12, void 0), T = y(t, "isValidConnection", 12, void 0), V = y(t, "onconnect", 12, void 0), P = y(t, "ondisconnect", 12, void 0), I = y(t, "isConnectable", 12, void 0), Y = y(t, "class", 12, void 0);
  const K = ur("svelteflow__node_id"), G = ur("svelteflow__node_connectable"), Q = je(), {
    connectionMode: W,
    domNode: ce,
    nodeLookup: se,
    connectionRadius: we,
    viewport: ae,
    isValidConnection: Ce,
    lib: me,
    addEdge: Ne,
    onedgecreate: ie,
    panBy: U,
    cancelConnection: Me,
    updateConnection: F,
    autoPanOnConnect: Oe,
    edges: Xe,
    connectionLookup: Ze,
    onconnect: fe,
    onconnectstart: ve,
    onconnectend: de,
    flowId: Ee,
    connection: it
  } = Q;
  function lt(ze) {
    const nt = mc(ze);
    (nt && ze.button === 0 || !nt) && y0.onPointerDown(ze, {
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
      isValidConnection: T() ?? v(),
      updateConnection: F,
      cancelConnection: Me,
      panBy: U,
      onConnect: (Ie) => {
        var De;
        const rt = p() ? p()(Ie) : Ie;
        rt && (Ne(rt), (De = h()) == null || De(Ie));
      },
      onConnectStart: (Ie, De) => {
        var rt;
        (rt = x()) == null || rt(Ie, {
          nodeId: De.nodeId,
          handleId: De.handleId,
          handleType: De.handleType
        });
      },
      onConnectEnd: (Ie, De) => {
        var rt;
        (rt = b()) == null || rt(Ie, De);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let ne = /* @__PURE__ */ oe(null), Ye = /* @__PURE__ */ oe();
  he(() => ee(E()), () => {
    J(k, E() === "target");
  }), he(
    () => (ee(I()), o()),
    () => {
      J(N, I() !== void 0 ? I() : o());
    }
  ), he(() => ee(A()), () => {
    J(S, A() || null);
  }), he(
    () => (ee(V()), ee(P()), C(), w(), ee(E()), ee(A())),
    () => {
      (V() || P()) && (C(), J(Ye, w().get(`${K}-${E()}${A() ? `-${A()}` : ""}`)));
    }
  ), he(
    () => (f(ne), f(Ye), ee(P()), ee(V())),
    () => {
      if (f(ne) && !Vh(f(Ye), f(ne))) {
        const ze = f(Ye) ?? /* @__PURE__ */ new Map();
        yl(f(ne), ze, P()), yl(ze, f(ne), V());
      }
      J(ne, f(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => g(), () => {
    J(z, !!g().fromHandle);
  }), he(
    () => (g(), ee(E()), f(S)),
    () => {
      var ze, nt, Ie;
      J(H, ((ze = g().fromHandle) == null ? void 0 : ze.nodeId) === K && ((nt = g().fromHandle) == null ? void 0 : nt.type) === E() && ((Ie = g().fromHandle) == null ? void 0 : Ie.id) === f(S));
    }
  ), he(
    () => (g(), ee(E()), f(S)),
    () => {
      var ze, nt, Ie;
      J(L, ((ze = g().toHandle) == null ? void 0 : ze.nodeId) === K && ((nt = g().toHandle) == null ? void 0 : nt.type) === E() && ((Ie = g().toHandle) == null ? void 0 : Ie.id) === f(S));
    }
  ), he(
    () => (l(), g(), ee(E()), f(S)),
    () => {
      var ze, nt, Ie;
      J(R, l() === fr.Strict ? ((ze = g().fromHandle) == null ? void 0 : ze.type) !== E() : K !== ((nt = g().fromHandle) == null ? void 0 : nt.nodeId) || f(S) !== ((Ie = g().fromHandle) == null ? void 0 : Ie.id));
    }
  ), he(() => (f(L), g()), () => {
    J(O, f(L) && g().isValid);
  }), yt(), Le();
  var le = M0();
  $e(le, "data-nodeid", K);
  let en;
  var tn = X(le);
  bt(tn, t, "default", {}), q(le), Se(
    (ze, nt) => {
      $e(le, "data-handleid", f(S)), $e(le, "data-handlepos", _()), $e(le, "data-id", `${d() ?? ""}-${K ?? ""}-${(A() || "") ?? ""}-${E() ?? ""}`), en = xt(le, 1, ze, null, en, nt), ft(le, M());
    },
    [
      () => vn(Vt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        Y()
      ])),
      () => ({
        valid: f(O),
        connectingto: f(L),
        connectingfrom: f(H),
        source: !f(k),
        target: f(k),
        connectablestart: f(N),
        connectableend: f(N),
        connectable: f(N),
        connectionindicator: f(N) && (!f(z) || f(R))
      })
    ],
    xe
  ), et("mousedown", le, lt), et("touchstart", le, lt), D(e, le);
  var hn = ge({
    get id() {
      return A();
    },
    set id(ze) {
      A(ze), m();
    },
    get type() {
      return E();
    },
    set type(ze) {
      E(ze), m();
    },
    get position() {
      return _();
    },
    set position(ze) {
      _(ze), m();
    },
    get style() {
      return M();
    },
    set style(ze) {
      M(ze), m();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(ze) {
      T(ze), m();
    },
    get onconnect() {
      return V();
    },
    set onconnect(ze) {
      V(ze), m();
    },
    get ondisconnect() {
      return P();
    },
    set ondisconnect(ze) {
      P(ze), m();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(ze) {
      I(ze), m();
    },
    get class() {
      return Y();
    },
    set class(ze) {
      Y(ze), m();
    }
  });
  return r(), hn;
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
var V0 = /* @__PURE__ */ re("<!> <!>", 1);
function ki(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Le();
  var a = V0(), s = be(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ xe(() => i() ?? Pe.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Se(() => {
    var v;
    return dt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
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
  ki,
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
function Nc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Le(), Te();
  var i = N0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
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
ue(Nc, { data: {}, sourcePosition: {} }, [], [], !0);
var P0 = /* @__PURE__ */ re(" <!>", 1);
function Pc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Le(), Te();
  var i = P0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ xe(() => o() ?? Pe.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
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
ue(Pc, { data: {}, targetPosition: {} }, [], [], !0);
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
ue(Hc, {}, [], [], !0);
function Pl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Si(e, { target: t, domNode: n }) {
  return Pl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Pl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var H0 = /* @__PURE__ */ re("<div><!></div>");
function Tc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(i, "$domNode", n), { domNode: i } = je();
  Le();
  var a = H0(), s = X(a);
  bt(s, t, "default", {}), q(a), wt(a, (l, u) => Si == null ? void 0 : Si(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), ge(), r();
}
ue(Tc, {}, ["default"], [], !0);
function zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = je();
  return (s) => {
    const l = j(e).get(s);
    if (!l) {
      console.warn("012", Dr.error012(s));
      return;
    }
    (l.selectable || j(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && j(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var T0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Oc(e, t) {
  pe(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = zc(), a = ur("svelteflow__edge_id");
  return Le(), Tc(e, {
    children: (s, l) => {
      var u = T0();
      let c;
      var d = X(u);
      bt(d, t, "default", {}), q(u), Se(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), et("keyup", u, () => {
      }), et("click", u, () => {
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
ue(Oc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var z0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), O0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Oo(e, t) {
  pe(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), p = d() === void 0 ? 20 : d();
  Le();
  var h = O0(), x = be(h), b = Z(x);
  {
    var $ = (w) => {
      var k = z0();
      $e(k, "stroke-opacity", 0), $e(k, "stroke-width", p), Se(() => $e(k, "d", r())), D(w, k);
    };
    ye(b, (w) => {
      p && w($);
    });
  }
  var g = Z(b);
  {
    var C = (w) => {
      Oc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, N) => {
          Te();
          var S = Re();
          Se(() => dt(S, o())), D(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    ye(g, (w) => {
      o() && w(C);
    });
  }
  return Se(
    (w) => {
      $e(x, "id", n()), $e(x, "d", r()), xt(x, 0, w), $e(x, "marker-start", l()), $e(x, "marker-end", u()), ft(x, c());
    },
    [
      () => vn(Vt(["svelte-flow__edge-path", v()]))
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
ue(
  Oo,
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), ee(v()), ee(p()), ee(x()), ee(b()), ee(h()), ee($())),
    () => {
      ((g) => (J(r, g[0]), J(o, g[1]), J(i, g[2])))(yc({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), yt(), Le(), Oo(e, {
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
  }), ge({
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
ue(
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), ee(v()), ee(p()), ee(x()), ee(b()), ee(h()), ee($())),
    () => {
      ((g) => (J(r, g[0]), J(o, g[1]), J(i, g[2])))(_i({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), yt(), Le(), Oo(e, {
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
  }), ge({
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
ue(
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return he(
    () => (f(r), f(o), f(i), ee(v()), ee(p()), ee(h()), ee(x())),
    () => {
      ((b) => (J(r, b[0]), J(o, b[1]), J(i, b[2])))(Ia({
        sourceX: v(),
        sourceY: p(),
        targetX: h(),
        targetY: x()
      }));
    }
  ), yt(), Le(), Oo(e, {
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), ee(v()), ee(p()), ee(x()), ee(b()), ee(h()), ee($())),
    () => {
      ((g) => (J(r, g[0]), J(o, g[1]), J(i, g[2])))(_i({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), yt(), Le(), Oo(e, {
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
  }), ge({
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
function L0(e, t) {
  const n = e.set, r = t.set, o = j(e), i = j(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function D0(e, t) {
  const n = e.set, r = t.set;
  let o = j(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const A0 = (e, t, n) => {
  if (!n)
    return;
  const r = j(e), o = t.set, i = n.set;
  let a = n ? j(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, I0 = (e, t, n, r = [0, 0], o = wi, i, a, s, l, u, c, d, v) => {
  const { subscribe: p, set: h, update: x } = _e([]);
  let b = e, $ = {}, g = !0;
  const C = (S) => {
    const z = bc(S, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return j(i) && z && j(l) && (Oh({
      nodes: t,
      width: j(u),
      height: j(c),
      panZoom: j(l),
      minZoom: j(d),
      maxZoom: j(v)
    }, j(a)).then((H) => {
      var L;
      (L = j(s)) == null || L.resolve(H), s.set(null);
    }), i.set(!1), a.set(void 0)), b = S, h(b), b;
  }, w = (S) => C(S(b)), k = (S) => {
    $ = S;
  }, N = (S) => {
    g = S.elevateNodesOnSelect ?? g;
  };
  return C(b), {
    subscribe: p,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: N
  };
}, R0 = (e, t, n, r) => {
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
  input: Nc,
  output: Pc,
  default: ki,
  group: Hc
}, Rc = {
  straight: Dc,
  smoothstep: Lc,
  default: Ei,
  step: Ac
}, Z0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? wi;
  bc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let p = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const N = To(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    p = ws(N, n, r, 0.5, 2, 0.1);
  }
  const h = _e(!1), x = _e(void 0), b = _e(null), $ = _e(null), g = _e(500), C = _e(500), w = _e(0.5), k = _e(2);
  return {
    flowId: _e(null),
    nodes: I0(e, s, l, d, v, h, x, b, $, g, C, w, k),
    nodeLookup: Kt(s),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: R0(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
    width: g,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(v),
    translateExtent: _e(wi),
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
    selectionMode: _e(bi.Partial),
    nodeTypes: _e(Ic),
    edgeTypes: _e(Rc),
    viewport: _e(p),
    connectionMode: _e(fr.Strict),
    domNode: _e(null),
    connection: Kt(La),
    connectionLineType: _e(Er.Bezier),
    connectionRadius: _e(20),
    isValidConnection: _e(() => !0),
    nodesDraggable: _e(!0),
    nodesConnectable: _e(!0),
    elementsSelectable: _e(!0),
    selectNodesOnDrag: _e(!0),
    markers: Kt([]),
    defaultMarkerColor: _e("#b1b1b7"),
    lib: Kt("svelte"),
    onlyRenderVisibleElements: _e(!1),
    onerror: _e(Dh),
    ondelete: _e(void 0),
    onedgecreate: _e(void 0),
    onconnect: _e(void 0),
    onconnectstart: _e(void 0),
    onconnectend: _e(void 0),
    onbeforedelete: _e(void 0),
    nodesInitialized: _e(!1),
    edgesInitialized: _e(!1),
    viewportInitialized: _e(!1),
    initialized: Kt(!1)
  };
};
function q0(e) {
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
    return u && c && Wh({
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
    const c = e0({
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
      zIndex: Kh({
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
function B0(e) {
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
const Ui = Symbol();
function Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Z0({
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
    const M = j(s.edges);
    s.edges.set(Gh(_, M));
  }
  const d = (_, M = !1) => {
    var T;
    const V = j(s.nodeLookup);
    for (const [P, I] of _) {
      const Y = (T = V.get(P)) == null ? void 0 : T.internals.userNode;
      Y && (Y.position = I.position, Y.dragging = M);
    }
    s.nodes.update((P) => P);
  };
  function v(_) {
    var M, T, V;
    const P = j(s.nodeLookup), I = j(s.parentLookup), { changes: Y, updatedInternals: K } = l0(_, P, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (K) {
      o0(P, I, { nodeOrigin: i, nodeExtent: a });
      for (const G of Y) {
        const Q = (M = P.get(G.id)) == null ? void 0 : M.internals.userNode;
        if (Q)
          switch (G.type) {
            case "dimensions": {
              const W = { ...Q.measured, ...G.dimensions };
              G.setAttributes && (Q.width = ((T = G.dimensions) == null ? void 0 : T.width) ?? Q.width, Q.height = ((V = G.dimensions) == null ? void 0 : V.height) ?? Q.height), Q.measured = W;
              break;
            }
            case "position":
              Q.position = G.position ?? Q.position;
              break;
          }
      }
      s.nodes.update((G) => G), j(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function p(_) {
    const M = j(s.fitViewResolver) ?? Zh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(M), s.nodes.set(j(s.nodes)), M.promise;
  }
  function h(_, M) {
    const T = j(s.panZoom);
    return T ? T.scaleBy(_, M) : Promise.resolve(!1);
  }
  function x(_) {
    return h(1.2, _);
  }
  function b(_) {
    return h(1 / 1.2, _);
  }
  function $(_) {
    const M = j(s.panZoom);
    M && (M.setScaleExtent([_, j(s.maxZoom)]), s.minZoom.set(_));
  }
  function g(_) {
    const M = j(s.panZoom);
    M && (M.setScaleExtent([j(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const M = j(s.panZoom);
    M && (M.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function w(_) {
    let M = !1;
    return _.forEach((T) => {
      T.selected && (T.selected = !1, M = !0);
    }), M;
  }
  function k(_) {
    var M;
    (M = j(s.panZoom)) == null || M.setClickDistance(_);
  }
  function N(_) {
    w((_ == null ? void 0 : _.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), w((_ == null ? void 0 : _.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var M;
    if (_) {
      const T = j(s.nodes), V = j(s.edges), P = T.filter((G) => G.selected), I = V.filter((G) => G.selected), { nodes: Y, edges: K } = await dc({
        nodesToRemove: P,
        edgesToRemove: I,
        nodes: T,
        edges: V,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (Y.length || K.length) && (s.nodes.update((G) => G.filter((Q) => !Y.some((W) => W.id === Q.id))), s.edges.update((G) => G.filter((Q) => !K.some((W) => W.id === Q.id))), (M = j(s.ondelete)) == null || M({
        nodes: Y,
        edges: K
      }));
    }
  });
  function S(_) {
    const M = j(s.multiselectionKeyPressed);
    s.nodes.update((T) => T.map((V) => {
      const P = _.includes(V.id), I = M && V.selected || P;
      return V.selected = I, V;
    })), M || s.edges.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function z(_) {
    const M = j(s.multiselectionKeyPressed);
    s.edges.update((T) => T.map((V) => {
      const P = _.includes(V.id), I = M && V.selected || P;
      return V.selected = I, V;
    })), M || s.nodes.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function H(_) {
    var M;
    const T = (M = j(s.nodes)) == null ? void 0 : M.find((V) => V.id === _);
    if (!T) {
      console.warn("012", Dr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), T.selected ? T.selected && j(s.multiselectionKeyPressed) && N({ nodes: [T], edges: [] }) : S([_]);
  }
  function L(_) {
    const M = j(s.viewport);
    return u0({
      delta: _,
      panZoom: j(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const R = _e(La), O = (_) => {
    R.set({ ..._ });
  };
  function A() {
    R.set(La);
  }
  function E() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), N(), A();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: q0(s),
    visibleNodes: B0(s),
    connection: Kn([R, s.viewport], ([_, M]) => _.inProgress ? {
      ..._,
      to: zo(_.to, [M.x, M.y, M.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, M, T]) => t0(_, { defaultColor: M, id: T })),
    initialized: (() => {
      let _ = !1;
      const M = j(s.nodes).length, T = j(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([V, P, I]) => _ || (M === 0 ? _ = I : T === 0 ? _ = I && V : _ = I && V && P, _));
    })(),
    // actions
    syncNodeStores: (_) => L0(s.nodes, _),
    syncEdgeStores: (_) => D0(s.edges, _),
    syncViewport: (_) => A0(s.panZoom, s.viewport, _),
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
    unselectNodesAndEdges: N,
    addSelectedNodes: S,
    addSelectedEdges: z,
    handleNodeSelection: H,
    panBy: L,
    updateConnection: O,
    cancelConnection: A,
    reset: E
  };
}
function je() {
  const e = ur(Ui);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function X0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Zc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Tr(Ui, {
    getStore: () => s
  }), s;
}
function Hl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = E0({
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
var Y0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const K0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function qc(e, t) {
  pe(t, !1), Je(e, K0);
  const [n, r] = tt(), o = () => te(V, "$panActivationKeyPressed", n), i = () => te(A, "$minZoom", n), a = () => te(E, "$maxZoom", n), s = () => te(P, "$zoomActivationKeyPressed", n), l = () => te(O, "$selectionRect", n), u = () => te(M, "$translateExtent", n), c = () => te(T, "$lib", n), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe();
  let h = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), g = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), N = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), z = y(t, "panOnScroll", 12), H = y(t, "paneClickDistance", 12);
  const {
    viewport: L,
    panZoom: R,
    selectionRect: O,
    minZoom: A,
    maxZoom: E,
    dragging: _,
    translateExtent: M,
    lib: T,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: P,
    viewportInitialized: I
  } = je(), Y = (W) => L.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Qt(() => {
    fi(I, !0);
  }), he(() => ee(h()), () => {
    J(d, h() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), ee(S())),
    () => {
      J(v, o() || S());
    }
  ), he(
    () => (o(), ee(z())),
    () => {
      J(p, o() || z());
    }
  ), yt(), Le();
  var K = Y0(), G = X(K);
  bt(G, t, "default", {}), q(K), wt(K, (W, ce) => Hl == null ? void 0 : Hl(W, ce), () => ({
    viewport: L,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: _,
    panZoom: R,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: N(),
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
    paneClickDistance: H(),
    onTransformChange: Y
  })), D(e, K);
  var Q = ge({
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
      return N();
    },
    set zoomOnPinch(W) {
      N(W), m();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), m();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(W) {
      z(W), m();
    },
    get paneClickDistance() {
      return H();
    },
    set paneClickDistance(W) {
      H(W), m();
    }
  });
  return r(), Q;
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
function Tl(e, t) {
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
var W0 = /* @__PURE__ */ re("<div><!></div>");
const j0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  pe(t, !1), Je(e, j0);
  const [n, r] = tt(), o = () => te(_, "$panActivationKeyPressed", n), i = () => te(A, "$selectionKeyPressed", n), a = () => te(R, "$selectionRect", n), s = () => te(L, "$elementsSelectable", n), l = () => te(O, "$selectionRectMode", n), u = () => te(T, "$connection", n), c = () => te(S, "$edges", n), d = () => te(N, "$nodeLookup", n), v = () => te(z, "$viewport", n), p = () => te(E, "$selectionMode", n), h = () => te(H, "$dragging", n), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe();
  let g = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = qi(), {
    nodes: k,
    nodeLookup: N,
    edges: S,
    viewport: z,
    dragging: H,
    elementsSelectable: L,
    selectionRect: R,
    selectionRectMode: O,
    selectionKeyPressed: A,
    selectionMode: E,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: M,
    connection: T
  } = je();
  let V = /* @__PURE__ */ oe(), P = null, I = [], Y = !1;
  function K(ie) {
    if (Y || u().inProgress) {
      Y = !1;
      return;
    }
    w("paneclick", { event: ie }), M(), O.set(null);
  }
  function G(ie) {
    var U, Me;
    if (P = f(V).getBoundingClientRect(), !L || !f(b) || ie.button !== 0 || ie.target !== f(V) || !P)
      return;
    (Me = (U = ie.target) == null ? void 0 : U.setPointerCapture) == null || Me.call(U, ie.pointerId);
    const { x: F, y: Oe } = zn(ie, P);
    M(), R.set({
      width: 0,
      height: 0,
      startX: F,
      startY: Oe,
      x: F,
      y: Oe
    });
  }
  function Q(ie) {
    if (!f(b) || !P || !a())
      return;
    Y = !0;
    const U = zn(ie, P), Me = a().startX ?? 0, F = a().startY ?? 0, Oe = {
      ...a(),
      x: U.x < Me ? U.x : Me,
      y: U.y < F ? U.y : F,
      width: Math.abs(U.x - Me),
      height: Math.abs(U.y - F)
    }, Xe = I.map((de) => de.id), Ze = Da(I, c()).map((de) => de.id);
    I = cc(
      d(),
      Oe,
      [
        v().x,
        v().y,
        v().zoom
      ],
      p() === bi.Partial,
      !0
    );
    const fe = Da(I, c()).map((de) => de.id), ve = I.map((de) => de.id);
    (Xe.length !== ve.length || ve.some((de) => !Xe.includes(de))) && k.update((de) => de.map(zl(ve))), (Ze.length !== fe.length || fe.some((de) => !Ze.includes(de))) && S.update((de) => de.map(zl(fe))), O.set("user"), R.set(Oe);
  }
  function W(ie) {
    var U, Me;
    ie.button === 0 && ((Me = (U = ie.target) == null ? void 0 : U.releasePointerCapture) == null || Me.call(U, ie.pointerId), !f(b) && l() === "user" && ie.target === f(V) && (K == null || K(ie)), R.set(null), I.length > 0 && fi(O, "nodes"), i() && (Y = !1));
  }
  const ce = (ie) => {
    var U;
    if (Array.isArray(f(x)) && (U = f(x)) != null && U.includes(2)) {
      ie.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ie });
  };
  he(
    () => (o(), ee(g())),
    () => {
      J(x, o() || g());
    }
  ), he(
    () => (i(), a(), ee(C()), f(x)),
    () => {
      J(b, i() || a() || C() && f(x) !== !0);
    }
  ), he(
    () => (s(), f(b), l()),
    () => {
      J($, s() && (f(b) || l() === "user"));
    }
  ), yt(), Le();
  var se = W0(), we = /* @__PURE__ */ Ve(() => f($) ? void 0 : Tl(K, f(V))), ae = /* @__PURE__ */ Ve(() => Tl(ce, f(V)));
  let Ce;
  var me = X(se);
  bt(me, t, "default", {}), q(se), _n(se, (ie) => J(V, ie), () => f(V)), Se(
    (ie) => Ce = xt(se, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, ie),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
        selection: f(b)
      })
    ],
    xe
  ), et("click", se, function(...ie) {
    var U;
    (U = f(we)) == null || U.apply(this, ie);
  }), et("pointerdown", se, function(...ie) {
    var U;
    (U = f($) ? G : void 0) == null || U.apply(this, ie);
  }), et("pointermove", se, function(...ie) {
    var U;
    (U = f($) ? Q : void 0) == null || U.apply(this, ie);
  }), et("pointerup", se, function(...ie) {
    var U;
    (U = f($) ? W : void 0) == null || U.apply(this, ie);
  }), et("contextmenu", se, function(...ie) {
    var U;
    (U = f(ae)) == null || U.apply(this, ie);
  }), D(e, se);
  var Ne = ge({
    get panOnDrag() {
      return g();
    },
    set panOnDrag(ie) {
      g(ie), m();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(ie) {
      C(ie), m();
    }
  });
  return r(), Ne;
}
ue(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var F0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const G0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  pe(t, !1), Je(e, G0);
  const [n, r] = tt(), o = () => te(i, "$viewport", n), { viewport: i } = je();
  Le();
  var a = F0(), s = X(a);
  bt(s, t, "default", {}), q(a), Se(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), ge(), r();
}
ue(Xc, {}, ["default"], [], !0);
function Mi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = f0({
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
function U0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var J0 = /* @__PURE__ */ re("<div><!></div>");
function Yc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(se, "$nodeTypes", n), i = () => te(Ne, "$elementsSelectable", n), a = () => te(ie, "$nodesDraggable", n), s = () => te(Oe, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "node", 13), p = y(t, "id", 13), h = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), g = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), N = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), z = y(t, "type", 13, "default"), H = y(t, "isParent", 13, !1), L = y(t, "positionX", 13), R = y(t, "positionY", 13), O = y(t, "sourcePosition", 13, void 0), A = y(t, "targetPosition", 13, void 0), E = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), M = y(t, "measuredHeight", 13, void 0), T = y(t, "initialWidth", 13, void 0), V = y(t, "initialHeight", 13, void 0), P = y(t, "width", 13, void 0), I = y(t, "height", 13, void 0), Y = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), G = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const ce = je(), {
    nodeTypes: se,
    nodeDragThreshold: we,
    selectNodesOnDrag: ae,
    handleNodeSelection: Ce,
    updateNodeInternals: me,
    elementsSelectable: Ne,
    nodesDraggable: ie
  } = ce;
  let U = /* @__PURE__ */ oe(void 0, !0), Me = /* @__PURE__ */ oe(null, !0);
  const F = qi(), Oe = _e(g());
  let Xe = /* @__PURE__ */ oe(void 0, !0), Ze = /* @__PURE__ */ oe(void 0, !0), fe = /* @__PURE__ */ oe(void 0, !0);
  Tr("svelteflow__node_id", p()), Tr("svelteflow__node_connectable", Oe), us(() => {
    var ne;
    f(Me) && ((ne = N()) == null || ne.unobserve(f(Me)));
  });
  function ve(ne) {
    $() && (!j(ae) || !b() || j(we) > 0) && Ce(p()), F("nodeclick", { node: v().internals.userNode, event: ne });
  }
  he(() => ee(z()), () => {
    J(l, z() || "default");
  }), he(() => (o(), f(l)), () => {
    J(u, !!o()[f(l)]);
  }), he(
    () => (o(), f(l), ki),
    () => {
      J(c, o()[f(l)] || ki);
    }
  ), he(
    () => (f(u), ee(z())),
    () => {
      f(u) || console.warn("003", Dr.error003(z()));
    }
  ), he(
    () => (ee(P()), ee(I()), ee(T()), ee(V()), ee(_()), ee(M())),
    () => {
      J(d, U0({
        width: P(),
        height: I(),
        initialWidth: T(),
        initialHeight: V(),
        measuredWidth: _(),
        measuredHeight: M()
      }));
    }
  ), he(() => ee(g()), () => {
    Oe.set(!!g());
  }), he(
    () => (f(Xe), f(l), f(Ze), ee(O()), f(fe), ee(A()), ee(p()), f(U)),
    () => {
      (f(Xe) && f(l) !== f(Xe) || f(Ze) && O() !== f(Ze) || f(fe) && A() !== f(fe)) && requestAnimationFrame(() => me(/* @__PURE__ */ new Map([
        [
          p(),
          {
            id: p(),
            nodeElement: f(U),
            force: !0
          }
        ]
      ]))), J(Xe, f(l)), J(Ze, O()), J(fe, A());
    }
  ), he(
    () => (ee(N()), f(U), f(Me), ee(K())),
    () => {
      N() && (f(U) !== f(Me) || !K()) && (f(Me) && N().unobserve(f(Me)), f(U) && N().observe(f(U)), J(Me, f(U)));
    }
  ), yt(), Le(!0);
  var de = Ue(), Ee = be(de);
  {
    var it = (ne) => {
      var Ye = J0();
      let le, en;
      var tn = X(Ye);
      const hn = /* @__PURE__ */ xe(() => x() ?? !1), ze = /* @__PURE__ */ xe(() => $() ?? i() ?? !0), nt = /* @__PURE__ */ xe(() => C() ?? !0), Ie = /* @__PURE__ */ xe(() => b() ?? a() ?? !0);
      Eu(tn, () => f(c), (De, rt) => {
        rt(De, {
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
            return f(ze);
          },
          get deletable() {
            return f(nt);
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return A();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Ie);
          },
          get dragHandle() {
            return Y();
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
            return L();
          },
          get positionAbsoluteY() {
            return R();
          },
          get width() {
            return P();
          },
          get height() {
            return I();
          }
        });
      }), q(Ye), wt(Ye, (De, rt) => Mi == null ? void 0 : Mi(De, rt), () => ({
        nodeId: p(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Ce,
        onDrag: (De, rt, nn, Yt) => {
          F("nodedrag", { event: De, targetNode: nn, nodes: Yt });
        },
        onDragStart: (De, rt, nn, Yt) => {
          F("nodedragstart", { event: De, targetNode: nn, nodes: Yt });
        },
        onDragStop: (De, rt, nn, Yt) => {
          F("nodedragstop", { event: De, targetNode: nn, nodes: Yt });
        },
        store: ce
      })), _n(Ye, (De) => J(U, De), () => f(U)), It(() => et("click", Ye, ve)), It(() => et("mouseenter", Ye, (De) => F("nodemouseenter", { node: v(), event: De }))), It(() => et("mouseleave", Ye, (De) => F("nodemouseleave", { node: v(), event: De }))), It(() => et("mousemove", Ye, (De) => F("nodemousemove", { node: v(), event: De }))), It(() => et("contextmenu", Ye, (De) => F("nodecontextmenu", { node: v(), event: De }))), Se(
        (De, rt) => {
          $e(Ye, "data-id", p()), le = xt(Ye, 1, De, null, le, rt), en = ft(Ye, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, en, {
            "z-index": E(),
            transform: `translate(${L() ?? ""}px, ${R() ?? ""}px)`,
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
            parent: H()
          })
        ],
        xe
      ), D(ne, Ye);
    };
    ye(Ee, (ne) => {
      w() || ne(it);
    });
  }
  D(e, de);
  var lt = ge({
    get node() {
      return v();
    },
    set node(ne) {
      v(ne), m();
    },
    get id() {
      return p();
    },
    set id(ne) {
      p(ne), m();
    },
    get data() {
      return h();
    },
    set data(ne) {
      h(ne), m();
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
      return g();
    },
    set connectable(ne) {
      g(ne), m();
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
      return N();
    },
    set resizeObserver(ne) {
      N(ne), m();
    },
    get style() {
      return S();
    },
    set style(ne) {
      S(ne), m();
    },
    get type() {
      return z();
    },
    set type(ne) {
      z(ne), m();
    },
    get isParent() {
      return H();
    },
    set isParent(ne) {
      H(ne), m();
    },
    get positionX() {
      return L();
    },
    set positionX(ne) {
      L(ne), m();
    },
    get positionY() {
      return R();
    },
    set positionY(ne) {
      R(ne), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ne) {
      O(ne), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(ne) {
      A(ne), m();
    },
    get zIndex() {
      return E();
    },
    set zIndex(ne) {
      E(ne), m();
    },
    get measuredWidth() {
      return _();
    },
    set measuredWidth(ne) {
      _(ne), m();
    },
    get measuredHeight() {
      return M();
    },
    set measuredHeight(ne) {
      M(ne), m();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(ne) {
      T(ne), m();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(ne) {
      V(ne), m();
    },
    get width() {
      return P();
    },
    set width(ne) {
      P(ne), m();
    },
    get height() {
      return I();
    },
    set height(ne) {
      I(ne), m();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(ne) {
      Y(ne), m();
    },
    get initialized() {
      return K();
    },
    set initialized(ne) {
      K(ne), m();
    },
    get parentId() {
      return G();
    },
    set parentId(ne) {
      G(ne), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ne) {
      Q(ne), m();
    },
    get class() {
      return W();
    },
    set class(ne) {
      W(ne), m();
    }
  });
  return r(), lt;
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
var Q0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const e2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Kc(e, t) {
  pe(t, !1), Je(e, e2);
  const [n, r] = tt(), o = () => te(c, "$visibleNodes", n), i = () => te(d, "$nodesDraggable", n), a = () => te(p, "$elementsSelectable", n), s = () => te(v, "$nodesConnectable", n), l = () => te(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: p,
    updateNodeInternals: h,
    parentLookup: x
  } = je(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const N = k.target.getAttribute("data-id");
      w.set(N, { id: N, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  us(() => {
    b == null || b.disconnect();
  }), Le();
  var $ = Q0();
  Mt($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ xe(() => !!f(w).selected), N = /* @__PURE__ */ xe(() => !!f(w).hidden), S = /* @__PURE__ */ xe(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), z = /* @__PURE__ */ xe(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), H = /* @__PURE__ */ xe(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), L = /* @__PURE__ */ xe(() => f(w).deletable ?? !0), R = /* @__PURE__ */ xe(() => l().has(f(w).id)), O = /* @__PURE__ */ xe(() => f(w).type ?? "default"), A = /* @__PURE__ */ xe(() => f(w).internals.z ?? 0), E = /* @__PURE__ */ xe(() => gc(f(w)));
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
        return f(N);
      },
      get draggable() {
        return f(S);
      },
      get selectable() {
        return f(z);
      },
      get connectable() {
        return f(H);
      },
      get deletable() {
        return f(L);
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
        return f(O);
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
          Be.call(this, t, _);
        },
        nodemouseenter(_) {
          Be.call(this, t, _);
        },
        nodemousemove(_) {
          Be.call(this, t, _);
        },
        nodemouseleave(_) {
          Be.call(this, t, _);
        },
        nodedrag(_) {
          Be.call(this, t, _);
        },
        nodedragstart(_) {
          Be.call(this, t, _);
        },
        nodedragstop(_) {
          Be.call(this, t, _);
        },
        nodecontextmenu(_) {
          Be.call(this, t, _);
        }
      }
    });
  }), q($), D(e, $);
  var g = ge({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), g;
}
ue(Kc, { nodeClickDistance: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(W, "$edgeTypes", n), i = () => te(ce, "$flowId", n), a = () => te(se, "$elementsSelectable", n), s = () => te(Q, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), v = /* @__PURE__ */ oe(void 0, !0);
  let p = y(t, "id", 13), h = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), g = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), N = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), z = y(t, "hidden", 13, !1), H = y(t, "label", 13, void 0), L = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), O = y(t, "markerEnd", 13, void 0), A = y(t, "sourceHandle", 13, void 0), E = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), M = y(t, "sourceY", 13), T = y(t, "targetX", 13), V = y(t, "targetY", 13), P = y(t, "sourcePosition", 13), I = y(t, "targetPosition", 13), Y = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), G = y(t, "class", 13, "");
  Tr("svelteflow__edge_id", p());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: ce,
    elementsSelectable: se
  } = je(), we = qi(), ae = zc();
  function Ce(F) {
    const Oe = s().get(p());
    Oe && (ae(p()), we("edgeclick", { event: F, edge: Oe }));
  }
  function me(F, Oe) {
    const Xe = s().get(p());
    Xe && we(Oe, { event: F, edge: Xe });
  }
  he(() => ee(h()), () => {
    J(l, h() || "default");
  }), he(
    () => (o(), f(l), Ei),
    () => {
      J(u, o()[f(l)] || Ei);
    }
  ), he(
    () => (ee(R()), i()),
    () => {
      J(c, R() ? `url('#${Ra(R(), i())}')` : void 0);
    }
  ), he(
    () => (ee(O()), i()),
    () => {
      J(d, O() ? `url('#${Ra(O(), i())}')` : void 0);
    }
  ), he(
    () => (ee(N()), a()),
    () => {
      J(v, N() ?? a());
    }
  ), yt(), Le(!0);
  var Ne = Ue(), ie = be(Ne);
  {
    var U = (F) => {
      var Oe = t2();
      let Xe;
      var Ze = X(Oe);
      let fe;
      var ve = X(Ze);
      const de = /* @__PURE__ */ xe(() => S() ?? !0);
      Eu(ve, () => f(u), (Ee, it) => {
        it(Ee, {
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
            return T();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return P();
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
            return H();
          },
          get labelStyle() {
            return L();
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
            return f(de);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return A();
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
      }), q(Ze), q(Oe), Se(
        (Ee, it) => {
          Xe = ft(Oe, "", Xe, { "z-index": C() }), fe = xt(Ze, 0, Ee, null, fe, it), $e(Ze, "data-id", p()), $e(Ze, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${b()}`);
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
      ), et("click", Ze, Ce), et("contextmenu", Ze, (Ee) => {
        me(Ee, "edgecontextmenu");
      }), et("mouseenter", Ze, (Ee) => {
        me(Ee, "edgemouseenter");
      }), et("mouseleave", Ze, (Ee) => {
        me(Ee, "edgemouseleave");
      }), D(F, Oe);
    };
    ye(ie, (F) => {
      z() || F(U);
    });
  }
  D(e, Ne);
  var Me = ge({
    get id() {
      return p();
    },
    set id(F) {
      p(F), m();
    },
    get type() {
      return h();
    },
    set type(F) {
      h(F), m();
    },
    get source() {
      return x();
    },
    set source(F) {
      x(F), m();
    },
    get target() {
      return b();
    },
    set target(F) {
      b(F), m();
    },
    get data() {
      return $();
    },
    set data(F) {
      $(F), m();
    },
    get style() {
      return g();
    },
    set style(F) {
      g(F), m();
    },
    get zIndex() {
      return C();
    },
    set zIndex(F) {
      C(F), m();
    },
    get animated() {
      return w();
    },
    set animated(F) {
      w(F), m();
    },
    get selected() {
      return k();
    },
    set selected(F) {
      k(F), m();
    },
    get selectable() {
      return N();
    },
    set selectable(F) {
      N(F), m();
    },
    get deletable() {
      return S();
    },
    set deletable(F) {
      S(F), m();
    },
    get hidden() {
      return z();
    },
    set hidden(F) {
      z(F), m();
    },
    get label() {
      return H();
    },
    set label(F) {
      H(F), m();
    },
    get labelStyle() {
      return L();
    },
    set labelStyle(F) {
      L(F), m();
    },
    get markerStart() {
      return R();
    },
    set markerStart(F) {
      R(F), m();
    },
    get markerEnd() {
      return O();
    },
    set markerEnd(F) {
      O(F), m();
    },
    get sourceHandle() {
      return A();
    },
    set sourceHandle(F) {
      A(F), m();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(F) {
      E(F), m();
    },
    get sourceX() {
      return _();
    },
    set sourceX(F) {
      _(F), m();
    },
    get sourceY() {
      return M();
    },
    set sourceY(F) {
      M(F), m();
    },
    get targetX() {
      return T();
    },
    set targetX(F) {
      T(F), m();
    },
    get targetY() {
      return V();
    },
    set targetY(F) {
      V(F), m();
    },
    get sourcePosition() {
      return P();
    },
    set sourcePosition(F) {
      P(F), m();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(F) {
      I(F), m();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(F) {
      Y(F), m();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(F) {
      K(F), m();
    },
    get class() {
      return G();
    },
    set class(F) {
      G(F), m();
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
  pe(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return Qt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Le(), ge({
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
var n2 = /* @__PURE__ */ ke("<defs></defs>");
function Fc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(i, "$markers", n), { markers: i } = je();
  Le();
  var a = n2();
  Mt(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, st(() => f(l)));
  }), q(a), D(e, a), ge(), r();
}
ue(Fc, {}, [], [], !0);
var r2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), o2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), i2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  pe(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Le();
  var c = i2(), d = X(c);
  {
    var v = (h) => {
      var x = r2();
      Se(() => {
        $e(x, "stroke", l()), $e(x, "stroke-width", u());
      }), D(h, x);
    }, p = (h, x) => {
      {
        var b = ($) => {
          var g = o2();
          Se(() => {
            $e(g, "stroke", l()), $e(g, "stroke-width", u()), $e(g, "fill", l());
          }), D($, g);
        };
        ye(
          h,
          ($) => {
            r() === $o.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    ye(d, (h) => {
      r() === $o.Arrow ? h(v) : h(p, !1);
    });
  }
  return q(c), Se(() => {
    $e(c, "id", n()), $e(c, "markerWidth", `${o()}`), $e(c, "markerHeight", `${i()}`), $e(c, "markerUnits", a()), $e(c, "orient", s());
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
var a2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Uc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(s, "$visibleEdges", n), i = () => te(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = je();
  Qt(() => {
    a() && u(a());
  }), Le();
  var d = a2(), v = X(d), p = X(v);
  Fc(p, {}), q(v);
  var h = Z(v, 2);
  Mt(h, 1, o, (g) => g.id, (g, C) => {
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
        edgeclick(N) {
          Be.call(this, t, N);
        },
        edgecontextmenu(N) {
          Be.call(this, t, N);
        },
        edgemouseenter(N) {
          Be.call(this, t, N);
        },
        edgemouseleave(N) {
          Be.call(this, t, N);
        }
      }
    });
  });
  var x = Z(h, 2);
  {
    var b = (g) => {
      jc(g, {
        onMount: () => {
          fi(l, !0);
        },
        onDestroy: () => {
          fi(l, !1);
        }
      });
    };
    ye(x, (g) => {
      o().length > 0 && g(b);
    });
  }
  q(d), D(e, d);
  var $ = ge({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), m();
    }
  });
  return r(), $;
}
ue(Uc, { defaultEdgeOptions: {} }, [], [], !0);
var s2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const l2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cs(e, t) {
  pe(t, !1), Je(e, l2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Ue(), l = be(s);
  {
    var u = (c) => {
      var d = s2();
      let v;
      Se(() => v = ft(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, d);
    };
    ye(l, (c) => {
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
function Jc(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(a, "$selectionRect", n), i = () => te(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = je();
  Le();
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
  }), ge(), r();
}
ue(Jc, {}, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const c2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  pe(t, !1), Je(e, c2);
  const [n, r] = tt(), o = () => te(l, "$selectionRectMode", n), i = () => te(c, "$nodeLookup", n), a = () => te(u, "$nodes", n), s = je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = qi();
  let v = /* @__PURE__ */ oe(null);
  function p(g) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: g });
  }
  function h(g) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: g });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (J(v, To(i(), { filter: (g) => !!g.selected })), a());
    }
  ), yt(), Le();
  var x = Ue(), b = be(x);
  {
    var $ = (g) => {
      var C = u2(), w = X(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(C), wt(C, (k, N) => Mi == null ? void 0 : Mi(k, N), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, N, S, z) => {
          d("nodedrag", { event: k, targetNode: null, nodes: z });
        },
        onDragStart: (k, N, S, z) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: z });
        },
        onDragStop: (k, N, S, z) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: z });
        }
      })), It(() => et("contextmenu", C, p)), It(() => et("click", C, h)), It(() => et("keyup", C, () => {
      })), Se(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), D(g, C);
    };
    ye(b, (g) => {
      o() === "nodes" && f(v) && Pn(f(v).x) && Pn(f(v).y) && g($);
    });
  }
  D(e, x), ge(), r();
}
ue(Qc, {}, [], [], !0);
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
  pe(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Ci() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Ci() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = je();
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
  return Le(), et("blur", Ht, $), et("contextmenu", Ht, $), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !Xh(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), wt(Ht, (g, C) => ct == null ? void 0 : ct(g, C), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), ge({
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
var d2 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), f2 = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(p, "$connection", n), i = () => te(h, "$connectionLineType", n), a = () => te(d, "$width", n), s = () => te(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: p,
    connectionLineType: h
  } = je();
  let x = /* @__PURE__ */ oe(null);
  he(
    () => (o(), ee(c()), i(), f(x), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: N, toPosition: S } = o(), z = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: N,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Er.Bezier:
            ((H) => J(x, H[0]))(yc(z));
            break;
          case Er.Step:
            ((H) => J(x, H[0]))(_i({ ...z, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((H) => J(x, H[0]))(_i(z));
            break;
          default:
            ((H) => J(x, H[0]))(Ia(z));
        }
      }
    }
  ), yt(), Le();
  var b = Ue(), $ = be(b);
  {
    var g = (w) => {
      var k = f2(), N = X(k), S = X(N);
      bt(S, t, "connectionLine", {});
      var z = Z(S);
      {
        var H = (L) => {
          var R = d2();
          Se(() => {
            $e(R, "d", f(x)), ft(R, u());
          }), D(L, R);
        };
        ye(z, (L) => {
          c() || L(H);
        });
      }
      q(N), q(k), Se(
        (L) => {
          $e(k, "width", a()), $e(k, "height", s()), ft(k, l()), xt(N, 0, L);
        },
        [
          () => vn(Vt([
            "svelte-flow__connection",
            Nh(o().isValid)
          ]))
        ],
        xe
      ), D(w, k);
    };
    ye($, (w) => {
      o().inProgress && w(g);
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
var v2 = /* @__PURE__ */ re("<div><!></div>");
function Lo(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  pe(t, !1);
  const [o, i] = tt(), a = () => te(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = je();
  he(() => ee(l()), () => {
    J(s, `${l()}`.split("-"));
  }), yt(), Le();
  var v = v2();
  let p;
  var h = X(v);
  bt(h, t, "default", {}), q(v), Se(
    (b) => p = Ut(v, p, {
      class: b,
      style: u(),
      ...r,
      [nr]: {
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
ue(Lo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var p2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  pe(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Le();
  var o = Ue(), i = be(o);
  {
    var a = (s) => {
      Lo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = p2();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ye(i, (s) => {
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
ue(nd, { proOptions: {}, position: {} }, [], [], !0);
function Ol(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const g2 = (e) => Object.keys(e);
function Ll(e, t) {
  g2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function h2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function m2(e = "light") {
  return Kt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = h2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var y2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), w2 = /* @__PURE__ */ re("<!> <!>", 1), b2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const x2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function rd(e, t) {
  const n = Tf(t), r = at(t, [
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
  pe(t, !1), Je(e, x2);
  const [i, a] = tt(), s = () => te(C(), "$viewport", i), l = () => te(na, "$initialized", i), u = () => te(f(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), p = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), g = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), N = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), z = y(t, "panActivationKey", 12, void 0), H = y(t, "multiSelectionKey", 12, void 0), L = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), O = y(t, "nodesConnectable", 12, void 0), A = y(t, "nodeDragThreshold", 12, void 0), E = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), M = y(t, "deleteKey", 12, void 0), T = y(t, "connectionRadius", 12, void 0), V = y(t, "connectionLineType", 12, void 0), P = y(t, "connectionMode", 28, () => fr.Strict), I = y(t, "connectionLineStyle", 12, ""), Y = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), G = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), ce = y(t, "translateExtent", 12, void 0), se = y(t, "nodeExtent", 12, void 0), we = y(t, "onlyRenderVisibleElements", 12, void 0), ae = y(t, "panOnScrollMode", 28, () => Wn.Free), Ce = y(t, "preventScrolling", 12, !0), me = y(t, "zoomOnScroll", 12, !0), Ne = y(t, "zoomOnDoubleClick", 12, !0), ie = y(t, "zoomOnPinch", 12, !0), U = y(t, "panOnScroll", 12, !1), Me = y(t, "panOnDrag", 12, !0), F = y(t, "selectionOnDrag", 12, void 0), Oe = y(t, "autoPanOnConnect", 12, !0), Xe = y(t, "autoPanOnNodeDrag", 12, !0), Ze = y(t, "onerror", 12, void 0), fe = y(t, "ondelete", 12, void 0), ve = y(t, "onedgecreate", 12, void 0), de = y(t, "attributionPosition", 12, void 0), Ee = y(t, "proOptions", 12, void 0), it = y(t, "defaultEdgeOptions", 12, void 0), lt = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Ye = y(t, "colorMode", 12, "light"), le = y(t, "onconnect", 12, void 0), en = y(t, "onconnectstart", 12, void 0), tn = y(t, "onconnectend", 12, void 0), hn = y(t, "onbeforedelete", 12, void 0), ze = y(t, "oninit", 12, void 0), nt = y(t, "nodeOrigin", 12, void 0), Ie = y(t, "paneClickDistance", 12, 0), De = y(t, "nodeClickDistance", 12, 0), rt = y(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = y(t, "style", 12, void 0), Yt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ oe(), Ct = /* @__PURE__ */ oe(), Nt = /* @__PURE__ */ oe();
  const yr = s() || g(), ot = vf(Ui) ? je() : X0({
    nodes: j(v()),
    edges: j(p()),
    width: lt(),
    height: ne(),
    fitView: h(),
    nodeOrigin: nt(),
    nodeExtent: se()
  });
  Qt(() => (ot.width.set(f(Ct)), ot.height.set(f(Nt)), ot.domNode.set(f(Ur)), ot.syncNodeStores(v()), ot.syncEdgeStores(p()), ot.syncViewport(C()), h() !== void 0 && ot.fitViewQueued.set(h()), x() && ot.fitViewOptions.set(x()), Ol(ot, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ce(),
    paneClickDistance: Ie()
  }), () => {
    ot.reset();
  }));
  const { initialized: na } = ot;
  let Jr = /* @__PURE__ */ oe(!1);
  he(
    () => (f(Ct), f(Nt)),
    () => {
      f(Ct) !== void 0 && f(Nt) !== void 0 && (ot.width.set(f(Ct)), ot.height.set(f(Nt)));
    }
  ), he(
    () => (f(Jr), l(), ee(ze())),
    () => {
      var B;
      !f(Jr) && l() && ((B = ze()) == null || B(), J(Jr, !0));
    }
  ), he(
    () => (ee(d()), ee(V()), ee(T()), ee(S()), ee(_()), ee(rt()), ee(R()), ee(O()), ee(E()), ee(we()), ee(W()), ee(Oe()), ee(Xe()), ee(Ze()), ee(fe()), ee(ve()), ee(P()), ee(A()), ee(le()), ee(en()), ee(tn()), ee(hn()), ee(nt()), Ll),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: T(),
        selectionMode: S(),
        snapGrid: _(),
        defaultMarkerColor: rt(),
        nodesDraggable: R(),
        nodesConnectable: O(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: we(),
        isValidConnection: W(),
        autoPanOnConnect: Oe(),
        autoPanOnNodeDrag: Xe(),
        onerror: Ze(),
        ondelete: fe(),
        onedgecreate: ve(),
        connectionMode: P(),
        nodeDragThreshold: A(),
        onconnect: le(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: hn(),
        nodeOrigin: nt()
      };
      Ll(ot, B);
    }
  ), he(
    () => (ee(w()), ee(k()), ee(b()), ee($()), ee(ce()), ee(Ie())),
    () => {
      Ol(ot, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ce(),
        paneClickDistance: Ie()
      });
    }
  ), he(
    () => ee(Ye()),
    () => {
      Xf(J(c, m2(Ye())), "$colorModeClass", i);
    }
  ), yt(), Le();
  var Dt = b2();
  let Ro;
  var Zo = X(Dt);
  ed(Zo, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return M();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return H();
    },
    get zoomActivationKey() {
      return L();
    }
  });
  var qo = Z(Zo, 2);
  const ra = /* @__PURE__ */ xe(() => ae() === void 0 ? Wn.Free : ae()), Gd = /* @__PURE__ */ xe(() => Ce() === void 0 ? !0 : Ce()), Ud = /* @__PURE__ */ xe(() => me() === void 0 ? !0 : me()), Jd = /* @__PURE__ */ xe(() => Ne() === void 0 ? !0 : Ne()), Qd = /* @__PURE__ */ xe(() => ie() === void 0 ? !0 : ie()), e1 = /* @__PURE__ */ xe(() => U() === void 0 ? !1 : U()), t1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me()), n1 = /* @__PURE__ */ xe(() => Ie() === void 0 ? 0 : Ie());
  qc(qo, {
    initialViewport: yr,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return G();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return f(ra);
    },
    get preventScrolling() {
      return f(Gd);
    },
    get zoomOnScroll() {
      return f(Ud);
    },
    get zoomOnDoubleClick() {
      return f(Jd);
    },
    get zoomOnPinch() {
      return f(Qd);
    },
    get panOnScroll() {
      return f(e1);
    },
    get panOnDrag() {
      return f(t1);
    },
    get paneClickDistance() {
      return f(n1);
    },
    children: (B, Jw) => {
      const i1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me());
      Bc(B, {
        get panOnDrag() {
          return f(i1);
        },
        get selectionOnDrag() {
          return F();
        },
        $$events: {
          paneclick(Qr) {
            Be.call(this, t, Qr);
          },
          panecontextmenu(Qr) {
            Be.call(this, t, Qr);
          }
        },
        children: (Qr, Qw) => {
          var Ns = w2(), Ps = be(Ns);
          Xc(Ps, {
            children: (s1, eb) => {
              var Hs = y2(), Ts = be(Hs);
              Uc(Ts, {
                get defaultEdgeOptions() {
                  return it();
                },
                $$events: {
                  edgeclick(qe) {
                    Be.call(this, t, qe);
                  },
                  edgecontextmenu(qe) {
                    Be.call(this, t, qe);
                  },
                  edgemouseenter(qe) {
                    Be.call(this, t, qe);
                  },
                  edgemouseleave(qe) {
                    Be.call(this, t, qe);
                  }
                }
              });
              var zs = Z(Ts, 2);
              td(zs, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (qe, tb) => {
                    var Ls = Ue(), u1 = be(Ls);
                    bt(u1, t, "connectionLine", {}), D(qe, Ls);
                  }
                }
              });
              var Os = Z(zs, 6);
              Kc(Os, {
                get nodeClickDistance() {
                  return De();
                },
                $$events: {
                  nodeclick(qe) {
                    Be.call(this, t, qe);
                  },
                  nodemouseenter(qe) {
                    Be.call(this, t, qe);
                  },
                  nodemousemove(qe) {
                    Be.call(this, t, qe);
                  },
                  nodemouseleave(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Be.call(this, t, qe);
                  },
                  nodecontextmenu(qe) {
                    Be.call(this, t, qe);
                  }
                }
              });
              var l1 = Z(Os, 2);
              Qc(l1, {
                $$events: {
                  selectionclick(qe) {
                    Be.call(this, t, qe);
                  },
                  selectioncontextmenu(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Be.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Be.call(this, t, qe);
                  }
                }
              }), D(s1, Hs);
            },
            $$slots: { default: !0 }
          });
          var a1 = Z(Ps, 2);
          Jc(a1, {}), D(Qr, Ns);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Vs = Z(qo, 2);
  nd(Vs, {
    get proOptions() {
      return Ee();
    },
    get position() {
      return de();
    }
  });
  var r1 = Z(Vs, 2);
  bt(r1, t, "default", {}), q(Dt), _n(Dt, (B) => J(Ur, B), () => f(Ur)), Se(
    (B) => Ro = Ut(
      Dt,
      Ro,
      {
        style: nn(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Vt([
        "svelte-flow",
        Yt(),
        u()
      ])
    ],
    xe
  ), Fs(Dt, "clientWidth", (B) => J(Ct, B)), Fs(Dt, "clientHeight", (B) => J(Nt, B)), et("dragover", Dt, function(B) {
    Be.call(this, t, B);
  }), et("drop", Dt, function(B) {
    Be.call(this, t, B);
  }), D(e, Dt);
  var o1 = ge({
    get id() {
      return d();
    },
    set id(B) {
      d(B), m();
    },
    get nodes() {
      return v();
    },
    set nodes(B) {
      v(B), m();
    },
    get edges() {
      return p();
    },
    set edges(B) {
      p(B), m();
    },
    get fitView() {
      return h();
    },
    set fitView(B) {
      h(B), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(B) {
      x(B), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(B) {
      b(B), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(B) {
      $(B), m();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(B) {
      g(B), m();
    },
    get viewport() {
      return C();
    },
    set viewport(B) {
      C(B), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(B) {
      w(B), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(B) {
      k(B), m();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(B) {
      N(B), m();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(B) {
      S(B), m();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(B) {
      z(B), m();
    },
    get multiSelectionKey() {
      return H();
    },
    set multiSelectionKey(B) {
      H(B), m();
    },
    get zoomActivationKey() {
      return L();
    },
    set zoomActivationKey(B) {
      L(B), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(B) {
      R(B), m();
    },
    get nodesConnectable() {
      return O();
    },
    set nodesConnectable(B) {
      O(B), m();
    },
    get nodeDragThreshold() {
      return A();
    },
    set nodeDragThreshold(B) {
      A(B), m();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(B) {
      E(B), m();
    },
    get snapGrid() {
      return _();
    },
    set snapGrid(B) {
      _(B), m();
    },
    get deleteKey() {
      return M();
    },
    set deleteKey(B) {
      M(B), m();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(B) {
      T(B), m();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(B) {
      V(B), m();
    },
    get connectionMode() {
      return P();
    },
    set connectionMode(B) {
      P(B), m();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(B) {
      I(B), m();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(B) {
      Y(B), m();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(B) {
      K(B), m();
    },
    get onMove() {
      return G();
    },
    set onMove(B) {
      G(B), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(B) {
      Q(B), m();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(B) {
      W(B), m();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(B) {
      ce(B), m();
    },
    get nodeExtent() {
      return se();
    },
    set nodeExtent(B) {
      se(B), m();
    },
    get onlyRenderVisibleElements() {
      return we();
    },
    set onlyRenderVisibleElements(B) {
      we(B), m();
    },
    get panOnScrollMode() {
      return ae();
    },
    set panOnScrollMode(B) {
      ae(B), m();
    },
    get preventScrolling() {
      return Ce();
    },
    set preventScrolling(B) {
      Ce(B), m();
    },
    get zoomOnScroll() {
      return me();
    },
    set zoomOnScroll(B) {
      me(B), m();
    },
    get zoomOnDoubleClick() {
      return Ne();
    },
    set zoomOnDoubleClick(B) {
      Ne(B), m();
    },
    get zoomOnPinch() {
      return ie();
    },
    set zoomOnPinch(B) {
      ie(B), m();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(B) {
      U(B), m();
    },
    get panOnDrag() {
      return Me();
    },
    set panOnDrag(B) {
      Me(B), m();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(B) {
      F(B), m();
    },
    get autoPanOnConnect() {
      return Oe();
    },
    set autoPanOnConnect(B) {
      Oe(B), m();
    },
    get autoPanOnNodeDrag() {
      return Xe();
    },
    set autoPanOnNodeDrag(B) {
      Xe(B), m();
    },
    get onerror() {
      return Ze();
    },
    set onerror(B) {
      Ze(B), m();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(B) {
      fe(B), m();
    },
    get onedgecreate() {
      return ve();
    },
    set onedgecreate(B) {
      ve(B), m();
    },
    get attributionPosition() {
      return de();
    },
    set attributionPosition(B) {
      de(B), m();
    },
    get proOptions() {
      return Ee();
    },
    set proOptions(B) {
      Ee(B), m();
    },
    get defaultEdgeOptions() {
      return it();
    },
    set defaultEdgeOptions(B) {
      it(B), m();
    },
    get width() {
      return lt();
    },
    set width(B) {
      lt(B), m();
    },
    get height() {
      return ne();
    },
    set height(B) {
      ne(B), m();
    },
    get colorMode() {
      return Ye();
    },
    set colorMode(B) {
      Ye(B), m();
    },
    get onconnect() {
      return le();
    },
    set onconnect(B) {
      le(B), m();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(B) {
      en(B), m();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(B) {
      tn(B), m();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(B) {
      hn(B), m();
    },
    get oninit() {
      return ze();
    },
    set oninit(B) {
      ze(B), m();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(B) {
      nt(B), m();
    },
    get paneClickDistance() {
      return Ie();
    },
    set paneClickDistance(B) {
      Ie(B), m();
    },
    get nodeClickDistance() {
      return De();
    },
    set nodeClickDistance(B) {
      De(B), m();
    },
    get defaultMarkerColor() {
      return rt();
    },
    set defaultMarkerColor(B) {
      rt(B), m();
    },
    get style() {
      return nn();
    },
    set style(B) {
      nn(B), m();
    },
    get class() {
      return Yt();
    },
    set class(B) {
      Yt(B), m();
    }
  });
  return a(), o1;
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
  pe(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = Zc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Tr(Ui, { getStore: () => l }), us(() => {
    l.reset();
  }), Le();
  var u = Ue(), c = be(u);
  return bt(c, t, "default", {}), D(e, u), ge({
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
var $2 = /* @__PURE__ */ re("<button><!></button>");
function so(e, t) {
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
  pe(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Le();
  var c = $2();
  let d;
  var v = X(c);
  return bt(v, t, "default", { class: "button-svg" }), q(c), Se(
    (p) => d = Ut(c, d, {
      type: "button",
      class: p,
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
      () => Vt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    xe
  ), et("click", c, function(p) {
    Be.call(this, t, p);
  }), D(e, c), ge({
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
var C2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = C2();
  D(e, t);
}
ue(id, {}, [], [], !0);
var _2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = _2();
  D(e, t);
}
ue(ad, {}, [], [], !0);
var k2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function sd(e) {
  var t = k2();
  D(e, t);
}
ue(sd, {}, [], [], !0);
var S2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = S2();
  D(e, t);
}
ue(ld, {}, [], [], !0);
var E2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = E2();
  D(e, t);
}
ue(ud, {}, [], [], !0);
var M2 = /* @__PURE__ */ re("<!> <!>", 1), V2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(V, "$nodesDraggable", n), i = () => te(P, "$nodesConnectable", n), a = () => te(I, "$elementsSelectable", n), s = () => te(_, "$viewport", n), l = () => te(M, "$minZoom", n), u = () => te(T, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe();
  let h = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), g = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), N = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), z = y(t, "style", 12, void 0), H = y(t, "orientation", 12, "vertical"), L = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: O,
    zoomOut: A,
    fitView: E,
    viewport: _,
    minZoom: M,
    maxZoom: T,
    nodesDraggable: V,
    nodesConnectable: P,
    elementsSelectable: I
  } = je(), Y = {
    bgColor: g(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: N()
  }, K = () => {
    O();
  }, G = () => {
    A();
  }, Q = () => {
    E(L());
  }, W = () => {
    J(c, !f(c)), V.set(f(c)), P.set(f(c)), I.set(f(c));
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
  }), he(() => ee(H()), () => {
    J(p, H() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), Le();
  const ce = /* @__PURE__ */ xe(() => Vt([
    "svelte-flow__controls",
    f(p),
    R()
  ])), se = /* @__PURE__ */ xe(() => S() ?? "Svelte Flow controls");
  Lo(e, {
    get class() {
      return f(ce);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(se);
    },
    get style() {
      return z();
    },
    children: (ae, Ce) => {
      var me = V2(), Ne = be(me);
      bt(Ne, t, "before", {});
      var ie = Z(Ne, 2);
      {
        var U = (ve) => {
          var de = M2(), Ee = be(de);
          so(Ee, st(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            Y,
            {
              $$events: { click: K },
              children: (lt, ne) => {
                id(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var it = Z(Ee, 2);
          so(it, st(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            Y,
            {
              $$events: { click: G },
              children: (lt, ne) => {
                ad(lt);
              },
              $$slots: { default: !0 }
            }
          )), D(ve, de);
        };
        ye(ie, (ve) => {
          x() && ve(U);
        });
      }
      var Me = Z(ie, 2);
      {
        var F = (ve) => {
          so(ve, st(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: Q },
              children: (de, Ee) => {
                sd(de);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Me, (ve) => {
          b() && ve(F);
        });
      }
      var Oe = Z(Me, 2);
      {
        var Xe = (ve) => {
          so(ve, st(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: W },
              children: (de, Ee) => {
                var it = Ue(), lt = be(it);
                {
                  var ne = (le) => {
                    ud(le);
                  }, Ye = (le) => {
                    ld(le);
                  };
                  ye(lt, (le) => {
                    f(c) ? le(ne) : le(Ye, !1);
                  });
                }
                D(de, it);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Oe, (ve) => {
          $() && ve(Xe);
        });
      }
      var Ze = Z(Oe, 2);
      bt(Ze, t, "default", {});
      var fe = Z(Ze, 2);
      bt(fe, t, "after", {}), D(ae, me);
    },
    $$slots: { default: !0 }
  });
  var we = ge({
    get position() {
      return h();
    },
    set position(ae) {
      h(ae), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ae) {
      x(ae), m();
    },
    get showFitView() {
      return b();
    },
    set showFitView(ae) {
      b(ae), m();
    },
    get showLock() {
      return $();
    },
    set showLock(ae) {
      $(ae), m();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(ae) {
      g(ae), m();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ae) {
      C(ae), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ae) {
      w(ae), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ae) {
      k(ae), m();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(ae) {
      N(ae), m();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(ae) {
      S(ae), m();
    },
    get style() {
      return z();
    },
    set style(ae) {
      z(ae), m();
    },
    get orientation() {
      return H();
    },
    set orientation(ae) {
      H(ae), m();
    },
    get fitViewOptions() {
      return L();
    },
    set fitViewOptions(ae) {
      L(ae), m();
    },
    get class() {
      return R();
    },
    set class(ae) {
      R(ae), m();
    }
  });
  return r(), we;
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
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var N2 = /* @__PURE__ */ ke("<circle></circle>");
function dd(e, t) {
  pe(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Le();
  var o = N2();
  return Se(
    (i) => {
      $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), xt(o, 0, i);
    },
    [
      () => vn(Vt([
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
ue(dd, { radius: {}, class: {} }, [], [], !0);
var P2 = /* @__PURE__ */ ke("<path></path>");
function fd(e, t) {
  pe(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Le();
  var a = P2();
  return Se(
    (s) => {
      $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), xt(a, 0, s);
    },
    [
      () => vn(Vt([
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
const H2 = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var T2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const z2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function vd(e, t) {
  pe(t, !1), Je(e, z2);
  const [n, r] = tt(), o = () => te(k, "$flowId", n), i = () => te(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => jn.Dots), p = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), g = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = je(), N = h() || H2[v()], S = v() === jn.Dots, z = v() === jn.Cross, H = Array.isArray(p()) ? p() : [p(), p()];
  he(
    () => (o(), ee(d())),
    () => {
      J(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    J(s, [
      H[0] * i().zoom || 1,
      H[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    J(l, N * i().zoom);
  }), he(() => (f(l), f(s)), () => {
    J(u, z ? [f(l), f(l)] : f(s));
  }), he(
    () => (f(l), f(u)),
    () => {
      J(c, S ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), yt(), Le();
  var L = T2();
  let R;
  var O = X(L), A = X(O);
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
    ye(A, (V) => {
      S ? V(E) : V(_, !1);
    });
  }
  q(O);
  var M = Z(O);
  q(L), Se(
    (V) => {
      xt(L, 0, V, "svelte-1r7pe8d"), R = ft(L, "", R, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), $e(O, "id", f(a)), $e(O, "x", i().x % f(s)[0]), $e(O, "y", i().y % f(s)[1]), $e(O, "width", f(s)[0]), $e(O, "height", f(s)[1]), $e(O, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), $e(M, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Vt(["svelte-flow__background", C()]))
    ],
    xe
  ), D(e, L);
  var T = ge({
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
  return r(), T;
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
var O2 = /* @__PURE__ */ ke("<rect></rect>");
function pd(e, t) {
  pe(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Le();
  var p = O2();
  let h;
  return Se(
    (x, b) => {
      h = xt(p, 0, x, null, h, b), $e(p, "x", n()), $e(p, "y", r()), $e(p, "rx", a()), $e(p, "ry", a()), $e(p, "width", o()), $e(p, "height", i()), ft(p, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(p, "shape-rendering", l());
    },
    [
      () => vn(Vt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    xe
  ), D(e, p), ge({
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
function Dl(e, t) {
  const n = w0({
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
const ha = (e) => e instanceof Function ? e : () => e;
var L2 = /* @__PURE__ */ ke("<title> </title>"), D2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function gd(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(Me, "$flowId", n), i = () => te(Ne, "$viewport", n), a = () => te(ie, "$containerWidth", n), s = () => te(U, "$containerHeight", n), l = () => te(me, "$nodeLookup", n), u = () => te(Ce, "$nodes", n), c = () => te(F, "$panZoom", n), d = () => te(Oe, "$translateExtent", n), v = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), N = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe();
  let H = y(t, "position", 12, "bottom-right"), L = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), O = y(t, "nodeColor", 12, void 0), A = y(t, "nodeClass", 12, ""), E = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), M = y(t, "bgColor", 12, void 0), T = y(t, "maskColor", 12, void 0), V = y(t, "maskStrokeColor", 12, void 0), P = y(t, "maskStrokeWidth", 12, void 0), I = y(t, "width", 12, void 0), Y = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), G = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), ce = y(t, "style", 12, ""), se = y(t, "class", 12, "");
  const we = 200, ae = 150, {
    nodes: Ce,
    nodeLookup: me,
    viewport: Ne,
    width: ie,
    height: U,
    flowId: Me,
    panZoom: F,
    translateExtent: Oe
  } = je(), Xe = O() === void 0 ? void 0 : ha(O()), Ze = ha(R()), fe = ha(A()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), de = `svelte-flow__minimap-desc-${o()}`;
  let Ee = /* @__PURE__ */ oe(f(v));
  const it = () => f($);
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
      J(Ee, l().size > 0 ? pc(To(l(), { filter: (le) => !le.hidden }), f(v)) : f(v)), u();
    }
  ), he(() => ee(I()), () => {
    J(p, I() ?? we);
  }), he(() => ee(Y()), () => {
    J(h, Y() ?? ae);
  }), he(
    () => (f(Ee), f(p)),
    () => {
      J(x, f(Ee).width / f(p));
    }
  ), he(
    () => (f(Ee), f(h)),
    () => {
      J(b, f(Ee).height / f(h));
    }
  ), he(
    () => (f(x), f(b)),
    () => {
      J($, Math.max(f(x), f(b)));
    }
  ), he(() => (f($), f(p)), () => {
    J(g, f($) * f(p));
  }), he(
    () => (f($), f(h)),
    () => {
      J(C, f($) * f(h));
    }
  ), he(() => f($), () => {
    J(w, 5 * f($));
  }), he(
    () => (f(Ee), f(g), f(w)),
    () => {
      J(k, f(Ee).x - (f(g) - f(Ee).width) / 2 - f(w));
    }
  ), he(
    () => (f(Ee), f(C), f(w)),
    () => {
      J(N, f(Ee).y - (f(C) - f(Ee).height) / 2 - f(w));
    }
  ), he(() => (f(g), f(w)), () => {
    J(S, f(g) + f(w) * 2);
  }), he(() => (f(C), f(w)), () => {
    J(z, f(C) + f(w) * 2);
  }), yt(), Le();
  const lt = /* @__PURE__ */ xe(() => ce() + (M() ? `;--xy-minimap-background-color-props:${M()}` : "")), ne = /* @__PURE__ */ xe(() => Vt(["svelte-flow__minimap", se()]));
  Lo(e, {
    get position() {
      return H();
    },
    get style() {
      return f(lt);
    },
    get class() {
      return f(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (le, en) => {
      var tn = Ue(), hn = be(tn);
      {
        var ze = (nt) => {
          var Ie = D2();
          $e(Ie, "aria-labelledby", de);
          let De;
          var rt = X(Ie);
          {
            var nn = (Ct) => {
              var Nt = L2();
              $e(Nt, "id", de);
              var yr = X(Nt, !0);
              q(Nt), Se(() => dt(yr, L())), D(Ct, Nt);
            };
            ye(rt, (Ct) => {
              L() && Ct(nn);
            });
          }
          var Yt = Z(rt);
          Mt(Yt, 1, u, (Ct) => Ct.id, (Ct, Nt) => {
            var yr = Ue();
            const ot = /* @__PURE__ */ xe(() => l().get(f(Nt).id));
            var na = be(yr);
            {
              var Jr = (Dt) => {
                const Ro = /* @__PURE__ */ xe(() => tr(f(ot))), Zo = /* @__PURE__ */ xe(() => Xe == null ? void 0 : Xe(f(ot))), qo = /* @__PURE__ */ xe(() => Ze(f(ot))), ra = /* @__PURE__ */ xe(() => fe(f(ot)));
                pd(Dt, st(
                  {
                    get x() {
                      return f(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Ro),
                  {
                    get selected() {
                      return f(ot).selected;
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
                    shapeRendering: ve,
                    get class() {
                      return f(ra);
                    }
                  }
                ));
              };
              ye(na, (Dt) => {
                f(ot) && gc(f(ot)) && Dt(Jr);
              });
            }
            D(Ct, yr);
          });
          var Ur = Z(Yt);
          q(Ie), wt(Ie, (Ct, Nt) => Dl == null ? void 0 : Dl(Ct, Nt), () => ({
            panZoom: c(),
            viewport: Ne,
            getViewScale: it,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: K(),
            zoomable: G()
          })), Se(() => {
            $e(Ie, "width", f(p)), $e(Ie, "height", f(h)), $e(Ie, "viewBox", `${f(k) ?? ""} ${f(N) ?? ""} ${f(S) ?? ""} ${f(z) ?? ""}`), De = ft(Ie, "", De, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": V(),
              "--xy-minimap-mask-stroke-width-props": P() ? P() * f($) : void 0
            }), $e(Ur, "d", `M${f(k) - f(w)},${f(N) - f(w)}h${f(S) + f(w) * 2}v${f(z) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), D(nt, Ie);
        };
        ye(hn, (nt) => {
          c() && nt(ze);
        });
      }
      D(le, tn);
    },
    $$slots: { default: !0 }
  });
  var Ye = ge({
    get position() {
      return H();
    },
    set position(le) {
      H(le), m();
    },
    get ariaLabel() {
      return L();
    },
    set ariaLabel(le) {
      L(le), m();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(le) {
      R(le), m();
    },
    get nodeColor() {
      return O();
    },
    set nodeColor(le) {
      O(le), m();
    },
    get nodeClass() {
      return A();
    },
    set nodeClass(le) {
      A(le), m();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(le) {
      E(le), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(le) {
      _(le), m();
    },
    get bgColor() {
      return M();
    },
    set bgColor(le) {
      M(le), m();
    },
    get maskColor() {
      return T();
    },
    set maskColor(le) {
      T(le), m();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(le) {
      V(le), m();
    },
    get maskStrokeWidth() {
      return P();
    },
    set maskStrokeWidth(le) {
      P(le), m();
    },
    get width() {
      return I();
    },
    set width(le) {
      I(le), m();
    },
    get height() {
      return Y();
    },
    set height(le) {
      Y(le), m();
    },
    get pannable() {
      return K();
    },
    set pannable(le) {
      K(le), m();
    },
    get zoomable() {
      return G();
    },
    set zoomable(le) {
      G(le), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(le) {
      Q(le), m();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(le) {
      W(le), m();
    },
    get style() {
      return ce();
    },
    set style(le) {
      ce(le), m();
    },
    get class() {
      return se();
    },
    set class(le) {
      se(le), m();
    }
  });
  return r(), Ye;
}
ue(
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
const Al = (e) => Hh(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: p, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = je(), g = (k) => {
    var N, S;
    const z = j(h), H = Al(k) ? k : z.get(k.id), L = H.parentId ? Rh(H.position, H.measured, H.parentId, z, j(x)) : H.position, R = {
      ...H,
      position: L,
      width: ((N = H.measured) == null ? void 0 : N.width) ?? H.width,
      height: ((S = H.measured) == null ? void 0 : S.height) ?? H.height
    };
    return Ir(R);
  }, C = (k, N, S = { replace: !1 }) => {
    var z;
    const H = (z = j(h).get(k)) == null ? void 0 : z.internals.userNode;
    if (!H)
      return;
    const L = typeof N == "function" ? N(H) : N;
    S.replace ? d.update((R) => R.map((O) => O.id === k ? Al(L) ? L : { ...O, ...L } : O)) : (Object.assign(H, L), d.update((R) => R));
  }, w = (k) => j(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var N;
      return (N = w(k)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? j(d) : Il(j(h), k),
    getEdge: (k) => j(b).get(k),
    getEdges: (k) => k === void 0 ? j(v) : Il(j(b), k),
    setZoom: (k, N) => {
      const S = j(c);
      return S ? S.scaleTo(k, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => j(i).zoom,
    setViewport: async (k, N) => {
      const S = j(i), z = j(c);
      return z ? (await z.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(i),
    setCenter: async (k, N, S) => {
      const z = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : j(u), H = j(c);
      return H ? (await H.setViewport({
        x: j(a) / 2 - k * z,
        y: j(s) / 2 - N * z,
        zoom: z
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, N) => {
      const S = j(c);
      if (!S)
        return Promise.resolve(!1);
      const z = ws(k, j(a), j(s), j(l), j(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await S.setViewport(z, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, N = !0, S) => {
      const z = bl(k), H = z ? k : g(k);
      return H ? (S || j(d)).filter((L) => {
        const R = j(h).get(L.id);
        if (!R || !z && L.id === k.id)
          return !1;
        const O = Ir(R), A = Co(O, H);
        return N && A > 0 || A >= H.width * H.height;
      }) : [];
    },
    isNodeIntersecting: (k, N, S = !0) => {
      const z = bl(k) ? k : g(k);
      if (!z)
        return !1;
      const H = Co(z, N);
      return S && H > 0 || H >= z.width * z.height;
    },
    deleteElements: async ({ nodes: k = [], edges: N = [] }) => {
      const { nodes: S, edges: z } = await dc({
        nodesToRemove: k,
        edgesToRemove: N,
        nodes: j(d),
        edges: j(v),
        onBeforeDelete: j(r)
      });
      return S && d.update((H) => H.filter((L) => !S.some(({ id: R }) => R === L.id))), z && v.update((H) => H.filter((L) => !z.some(({ id: R }) => R === L.id))), {
        deletedNodes: S,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (k, N = { snapToGrid: !0 }) => {
      const S = j(p);
      if (!S)
        return k;
      const z = N.snapToGrid ? j(o) : !1, { x: H, y: L, zoom: R } = j(i), { x: O, y: A } = S.getBoundingClientRect(), E = {
        x: k.x - O,
        y: k.y - A
      };
      return zo(E, [H, L, R], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const N = j(p);
      if (!N)
        return k;
      const { x: S, y: z, zoom: H } = j(i), { x: L, y: R } = N.getBoundingClientRect(), O = $i(k, [S, z, H]);
      return {
        x: O.x + L,
        y: O.y + R
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
    updateNodeData: (k, N, S) => {
      var z;
      const H = (z = j(h).get(k)) == null ? void 0 : z.internals.userNode;
      if (!H)
        return;
      const L = typeof N == "function" ? N(H) : N;
      H.data = S != null && S.replace ? L : { ...H.data, ...L }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const N = j(h), S = j(x);
      return Th(k, { nodeLookup: N, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: N, nodeId: S }) => {
      var z;
      return Array.from(((z = j($).get(`${S}-${k}-${N ?? null}`)) == null ? void 0 : z.values()) ?? []);
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
var A2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  pe(t, !1);
  const [n, r] = tt(), o = () => te(C, "$nodes", n), i = () => te(g, "$nodeLookup", n), a = () => te($, "$viewport", n), s = () => te(b, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), p = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: g, nodes: C } = je(), { getNodesBounds: w } = Lt(), k = ur("svelteflow__node_id");
  let N = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe([]), z = h() !== void 0 ? h() : 10, H = v() !== void 0 ? v() : Pe.Top, L = p() !== void 0 ? p() : "center";
  he(
    () => (o(), ee(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      J(S, _.reduce(
        (M, T) => {
          const V = i().get(T);
          return V && M.push(V), M;
        },
        []
      ));
    }
  ), he(
    () => (f(S), a()),
    () => {
      const _ = w(f(S));
      _ && J(N, n0(_, a(), H, z, L));
    }
  ), he(() => f(S), () => {
    J(l, f(S).length === 0 ? 1 : Math.max(...f(S).map((_) => (_.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    J(u, o().filter((_) => _.selected).length);
  }), he(
    () => (ee(x()), f(S), f(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), yt(), Le();
  var R = Ue(), O = be(R);
  {
    var A = (_) => {
      var M = A2();
      let T;
      var V = X(M);
      bt(V, t, "default", {}), q(M), wt(M, (P, I) => Si == null ? void 0 : Si(P, I), () => ({ domNode: s() })), Se(
        (P) => {
          $e(M, "data-id", P), T = ft(M, "", T, {
            position: "absolute",
            transform: f(N),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((P, I) => `${P}${I.id} `, "").trim()
        ],
        xe
      ), D(_, M);
    };
    ye(O, (_) => {
      s() && f(c) && f(S) && _(A);
    });
  }
  D(e, R);
  var E = ge({
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
  const { nodes: t, nodeLookup: n } = je();
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
    (!c0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Rl = "tinyflow-component";
class I2 {
  constructor(t) {
    if (Tt(this, "options"), Tt(this, "rootEl"), Tt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
const R2 = () => {
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
}, ri = R2();
var Z2 = /* @__PURE__ */ re("<button><!></button>");
function Ge(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Z2();
  let i;
  var a = X(o);
  return cr(a, () => n() ?? pt), q(o), Se(() => i = Ut(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), ge({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ue(Ge, { children: {} }, [], [], !0);
var q2 = /* @__PURE__ */ re("<input>");
function md(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = q2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ge();
}
ue(md, {}, [], [], !0);
var B2 = /* @__PURE__ */ re("<input>");
function ht(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = B2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ge();
}
ue(ht, {}, [], [], !0);
var X2 = /* @__PURE__ */ re("<textarea></textarea>");
function mt(e, t) {
  pe(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = X2();
  kf(o);
  let i;
  return Se(() => i = Ut(o, i, {
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
ue(mt, { value: {} }, [], [], !0);
var Y2 = /* @__PURE__ */ re('<div role="button"><!></div>'), K2 = /* @__PURE__ */ re("<div></div>");
function yd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  pe(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Le();
  var l = K2();
  let u;
  return Mt(l, 5, o, zr, (c, d, v) => {
    var p = Y2();
    $e(p, "tabindex", v), p.__click = () => s(f(d), v), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = X(p);
    {
      var x = ($) => {
        var g = Re();
        Se(() => dt(g, f(d).label)), D($, g);
      }, b = ($) => {
        var g = Ue(), C = be(g);
        cr(C, () => f(d).label ?? pt), D($, g);
      };
      ye(h, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    q(p), Se(() => xt(p, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), D(c, p);
  }), q(l), Se(() => u = Ut(l, u, {
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
ue(yd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var W2 = (e, t, n) => t(f(n)), j2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, F2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), G2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), U2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), J2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Q2 = /* @__PURE__ */ re("<div></div>");
const em = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function wd(e, t) {
  pe(t, !0), Je(e, em);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => an([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = Q2();
  return Mt(a, 21, n, zr, (s, l, u) => {
    var c = J2(), d = X(c);
    $e(d, "tabindex", u), d.__click = [W2, i, l], d.__keydown = [j2, i, l];
    var v = X(d);
    {
      var p = (w) => {
        var k = F2(), N = X(k);
        Xn(N, {
          get target() {
            return f(l).icon;
          }
        }), q(k), D(w, k);
      };
      ye(v, (w) => {
        f(l).icon && w(p);
      });
    }
    var h = Z(v, 2);
    Xn(h, {
      get target() {
        return f(l).title;
      }
    });
    var x = Z(h, 2);
    q(d);
    var b = Z(d, 2);
    {
      var $ = (w) => {
        var k = G2(), N = X(k);
        Xn(N, {
          get target() {
            return f(l).description;
          }
        }), q(k), D(w, k);
      };
      ye(b, (w) => {
        f(l).description && w($);
      });
    }
    var g = Z(b, 2);
    {
      var C = (w) => {
        var k = U2(), N = X(k);
        Xn(N, {
          get target() {
            return f(l).content;
          }
        }), q(k), D(w, k);
      };
      ye(g, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    q(c), Se((w) => xt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), q(a), Se(() => {
    ft(a, t.style), xt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
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
ue(wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  pe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ue(), o = be(r);
  {
    var i = (s) => {
      var l = Ue(), u = be(l);
      cr(u, () => n() ?? pt), D(s, l);
    }, a = (s) => {
      var l = Ue(), u = be(l);
      ls(u, n), D(s, l);
    };
    ye(o, (s) => {
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
ue(Xn, { target: {} }, [], [], !0);
var tm = (e, t, n) => t(f(n)), nm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), rm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), om = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), im = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), am = /* @__PURE__ */ re("<!> <!>", 1), sm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), lm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), um = /* @__PURE__ */ re("<div><!></div>");
function Jt(e, t) {
  pe(t, !0);
  const n = (g, C = pt) => {
    var w = Ue(), k = be(w);
    Mt(k, 19, C, (N, S) => `${S}_${N.value}`, (N, S) => {
      var z = om(), H = be(z);
      H.__click = [tm, h, S];
      var L = X(H), R = X(L);
      {
        var O = (M) => {
          var T = nm();
          D(M, T);
        };
        ye(R, (M) => {
          f(S).children && f(S).children.length > 0 && M(O);
        });
      }
      q(L);
      var A = Z(L, 2);
      Xn(A, {
        get target() {
          return f(S).label;
        }
      }), q(H);
      var E = Z(H, 2);
      {
        var _ = (M) => {
          var T = rm(), V = X(T);
          n(V, () => f(S).children), q(T), D(M, T);
        };
        ye(E, (M) => {
          f(S).children && f(S).children.length > 0 && (s() || u().includes(f(S).value)) && M(_);
        });
      }
      D(N, z);
    }), D(g, w);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), s = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), c = y(t, "placeholder", 7), d = /* @__PURE__ */ $t(t, [
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
  var x = um();
  let b;
  var $ = X(x);
  return _n(
    Gr($, {
      floating: (g) => {
        var C = im(), w = X(C);
        n(w, r), q(C), D(g, C);
      },
      children: (g, C) => {
        var w = lm();
        let k;
        var N = X(w);
        Mt(
          N,
          23,
          () => f(v),
          (S, z) => `${z}_${S.value}`,
          (S, z, H) => {
            var L = Ue(), R = be(L);
            {
              var O = (E) => {
                var _ = Ue(), M = be(_);
                {
                  var T = (V) => {
                    Xn(V, {
                      get target() {
                        return f(z).label;
                      }
                    });
                  };
                  ye(M, (V) => {
                    f(H) === 0 && V(T);
                  });
                }
                D(E, _);
              }, A = (E) => {
                var _ = am(), M = be(_);
                Xn(M, {
                  get target() {
                    return f(z).label;
                  }
                });
                var T = Z(M, 2);
                {
                  var V = (P) => {
                    var I = Re(",");
                    D(P, I);
                  };
                  ye(T, (P) => {
                    f(H) < f(v).length - 1 && P(V);
                  });
                }
                D(E, _);
              };
              ye(R, (E) => {
                l() ? E(A, !1) : E(O);
              });
            }
            D(S, L);
          },
          (S) => {
            var z = sm(), H = X(z, !0);
            q(z), Se(() => dt(H, c())), D(S, z);
          }
        ), q(N), Te(2), q(w), Se(() => k = Ut(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), D(g, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => p = g,
    () => p
  ), q(x), Se(() => b = Ut(x, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), D(e, x), ge({
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
const ko = Math.min, Mr = Math.max, Vi = Math.round, wn = (e) => ({
  x: e,
  y: e
}), cm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dm = {
  start: "end",
  end: "start"
};
function Za(e, t, n) {
  return Mr(e, ko(t, n));
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
function bd(e) {
  return e === "x" ? "y" : "x";
}
function _s(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  return ["top", "bottom"].includes(pr(e)) ? "y" : "x";
}
function ks(e) {
  return bd(lr(e));
}
function fm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ks(e), i = _s(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ni(a)), [a, Ni(a)];
}
function vm(e) {
  const t = Ni(e);
  return [qa(e), t, qa(t)];
}
function qa(e) {
  return e.replace(/start|end/g, (t) => dm[t]);
}
function pm(e, t, n) {
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
function gm(e, t, n, r) {
  const o = Ao(e);
  let i = pm(pr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(qa)))), i;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cm[t]);
}
function hm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xd(e) {
  return typeof e != "number" ? hm(e) : {
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
const mm = async (e, t, n) => {
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
async function $d(e, t) {
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
  } = Do(t, e), h = xd(p), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = Pi(await i.getClippingRect({
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
  }, w = Pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ym = (e) => ({
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
    const d = xd(c), v = {
      x: n,
      y: r
    }, p = ks(o), h = _s(p), x = await a.getDimensions(u), b = p === "y", $ = b ? "top" : "left", g = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[p] - v[p] - i.floating[h], k = v[p] - i.reference[p], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = N ? N[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(N))) && (S = s.floating[C] || i.floating[h]);
    const z = w / 2 - k / 2, H = S / 2 - x[h] / 2 - 1, L = ko(d[$], H), R = ko(d[g], H), O = L, A = S - x[h] - R, E = S / 2 - x[h] / 2 + z, _ = Za(O, E, A), M = !l.arrow && Ao(o) != null && E !== _ && i.reference[h] / 2 - (E < O ? L : R) - x[h] / 2 < 0, T = M ? E < O ? E - O : E - A : 0;
    return {
      [p]: v[p] + T,
      data: {
        [p]: _,
        centerOffset: E - _ - T,
        ...M && {
          alignmentOffset: T
        }
      },
      reset: M
    };
  }
}), wm = function(e) {
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
      const $ = pr(o), g = lr(s), C = pr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Ni(s)] : vm(s)), N = h !== "none";
      !v && N && k.push(...gm(s, x, h, w));
      const S = [s, ...k], z = await $d(t, b), H = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && H.push(z[$]), d) {
        const _ = fm(o, a, w);
        H.push(z[_[0]], z[_[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: H
      }], !H.every((_) => _ <= 0)) {
        var R, O;
        const _ = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, M = S[_];
        if (M) {
          var A;
          const V = d === "alignment" ? g !== lr(M) : !1, P = ((A = L[0]) == null ? void 0 : A.overflows[0]) > 0;
          if (!V || P)
            return {
              data: {
                index: _,
                overflows: L
              },
              reset: {
                placement: M
              }
            };
        }
        let T = (O = L.filter((V) => V.overflows[0] <= 0).sort((V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!T)
          switch (p) {
            case "bestFit": {
              var E;
              const V = (E = L.filter((P) => {
                if (N) {
                  const I = lr(P.placement);
                  return I === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((I) => I > 0).reduce((I, Y) => I + Y, 0)]).sort((P, I) => P[1] - I[1])[0]) == null ? void 0 : E[0];
              V && (T = V);
              break;
            }
            case "initialPlacement":
              T = s;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
async function bm(e, t) {
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
const xm = function(e) {
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
      } = t, l = await bm(t, e);
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
}, $m = function(e) {
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
      }, c = await $d(t, l), d = lr(pr(o)), v = bd(d);
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
function Ji() {
  return typeof window < "u";
}
function Fr(e) {
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return Ji() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function dn(e) {
  return Ji() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function kn(e) {
  return Ji() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function ql(e) {
  return !Ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
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
function Cm(e) {
  return ["table", "td", "th"].includes(Fr(e));
}
function Qi(e) {
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
function _m(e) {
  let t = Jn(e);
  for (; kn(t) && !Zr(t); ) {
    if (Ss(t))
      return t;
    if (Qi(t))
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
function fn(e) {
  return Bt(e).getComputedStyle(e);
}
function ea(e) {
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
function _d(e) {
  const t = Jn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Io(t) ? t : _d(t);
}
function kd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = _d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(o);
  return i ? (Ba(a), t.concat(a, a.visualViewport || [], Io(o) ? o : [], [])) : t.concat(o, kd(o, []));
}
function Ba(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sd(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Vi(n) !== i || Vi(r) !== a;
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
  } = Sd(t);
  let a = (i ? Vi(n.width) : n.width) / r, s = (i ? Vi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const km = /* @__PURE__ */ wn(0);
function Md(e) {
  const t = Bt(e);
  return !Es() || !t.visualViewport ? km : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function So(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ed(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Vr(r)) : a = Vr(e));
  const s = Sm(i, n, r) ? Md(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), p = r && dn(r) ? Bt(r) : r;
    let h = v, x = Ba(h);
    for (; x && r && p !== h; ) {
      const b = Vr(x), $ = x.getBoundingClientRect(), g = fn(x), C = $.left + (x.clientLeft + parseFloat(g.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(g.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += w, h = Bt(x), x = Ba(h);
    }
  }
  return Pi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ms(e, t) {
  const n = ea(e).scrollLeft;
  return t ? t.left + n : So(An(e)).left + n;
}
function Vd(e, t, n) {
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
function Em(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = An(r), s = t ? Qi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((Fr(r) !== "body" || Io(a)) && (l = ea(r)), kn(r))) {
    const p = So(r);
    u = Vr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const v = a && !d && !i ? Vd(a, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function Mm(e) {
  return Array.from(e.getClientRects());
}
function Vm(e) {
  const t = An(e), n = ea(e), r = e.ownerDocument.body, o = Mr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Mr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ms(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Mr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Nm(e, t) {
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
function Pm(e, t) {
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
    r = Nm(e, n);
  else if (t === "document")
    r = Vm(An(e));
  else if (dn(t))
    r = Pm(t, n);
  else {
    const o = Md(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(r);
}
function Nd(e, t) {
  const n = Jn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Nd(n, t);
}
function Hm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = kd(e, []).filter((s) => dn(s) && Fr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; dn(a) && !Zr(a); ) {
    const s = fn(a), l = Ss(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Nd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
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
  const i = [...n === "clippingAncestors" ? Qi(t) ? [] : Hm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
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
function zm(e) {
  const {
    width: t,
    height: n
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function Om(e, t, n) {
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
    if ((Fr(t) !== "body" || Io(o)) && (s = ea(t)), r) {
      const p = So(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Vd(o, s) : wn(0), d = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
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
function Pd(e, t) {
  const n = Bt(e);
  if (Qi(e))
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
  for (; r && Cm(r) && ma(r); )
    r = Xl(r, t);
  return r && Zr(r) && ma(r) && !Ss(r) ? n : r || _m(e) || n;
}
const Lm = async function(e) {
  const t = this.getOffsetParent || Pd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Om(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Dm(e) {
  return fn(e).direction === "rtl";
}
const Am = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Em,
  getDocumentElement: An,
  getClippingRect: Tm,
  getOffsetParent: Pd,
  getElementRects: Lm,
  getClientRects: Mm,
  getDimensions: zm,
  getScale: Vr,
  isElement: dn,
  isRTL: Dm
}, Im = xm, Rm = $m, Zm = wm, qm = ym, Bm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Am,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return mm(e, t, {
    ...o,
    platform: i
  });
}, Xm = ({
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
    Bm(e, u, {
      placement: r,
      middleware: [
        Im(o),
        // 手动偏移配置
        Zm(i),
        //自动翻转
        Rm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [qm({ element: c })] : []
      ]
    }).then(({ x: $, y: g, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: N } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: N != null ? `${N}px` : "",
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
var Ym = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Gr(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  Qt(() => (s = Xm({
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
  var u = Ym(), c = X(u), d = X(c);
  cr(d, n), q(c), _n(c, (h) => i = h, () => i);
  var v = Z(c, 2), p = X(v);
  return cr(p, r), q(v), _n(v, (h) => a = h, () => a), q(u), D(e, u), ge({
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
function Fe(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Ue(), s = be(a);
  return zf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = Ut(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ue(), v = be(d);
    cr(v, () => n() ?? pt), D(u, d);
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
ue(Fe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Km = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Wm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ta(e, t) {
  pe(t, !0), Je(e, Wm);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ge(e, st(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Km();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ge();
}
ue(ta, {}, [], [], !0);
const jm = () => {
  const e = je();
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
}, Fm = () => {
  const { nodes: e, nodeLookup: t } = je();
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
}, Qn = () => ur("tinyflow_options");
function gt() {
  return ur("svelteflow__node_id");
}
var Gm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Um = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Jm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Qm = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), ey = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, ty = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ry = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), oy = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const iy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function gn(e, t) {
  pe(t, !0), Je(e, iy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), p = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Lt(), g = /* @__PURE__ */ Ve(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = jm(), { copyNode: w } = Fm(), k = Qn(), N = () => {
    var P;
    (P = k.onNodeExecute) == null || P.call(k, $(r()));
  };
  let S = gt();
  var z = oy(), H = be(z);
  {
    var L = (P) => {
      hd(P, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (I, Y) => {
          var K = ry(), G = X(K);
          {
            var Q = (me) => {
              Ge(me, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Ne, ie) => {
                  var U = Gm();
                  D(Ne, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(G, (me) => {
              u() && me(Q);
            });
          }
          var W = Z(G, 2);
          {
            var ce = (me) => {
              Ge(me, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (Ne, ie) => {
                  var U = Um();
                  D(Ne, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(W, (me) => {
              l() && me(ce);
            });
          }
          var se = Z(W, 2);
          {
            var we = (me) => {
              Ge(me, {
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (Ne, ie) => {
                  var U = Jm();
                  D(Ne, U);
                },
                $$slots: { default: !0 }
              });
            };
            ye(se, (me) => {
              s() && me(we);
            });
          }
          var ae = Z(se, 2);
          {
            var Ce = (me) => {
              Gr(me, {
                placement: "bottom",
                floating: (Ne) => {
                  var ie = ty(), U = X(ie), Me = Z(X(U));
                  ht(Me, {
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Ee = de.target.value;
                      b(S, { title: Ee });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(U);
                  var F = Z(U, 2), Oe = Z(X(F));
                  mt(Oe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Ee = de.target.value;
                      b(S, { description: Ee });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(F);
                  var Xe = Z(F, 2);
                  {
                    var Ze = (de) => {
                      var Ee = Qm(), it = Z(X(Ee));
                      mt(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (lt) => {
                          const ne = lt.target.value;
                          b(S, { condition: ne });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(Ee), D(de, Ee);
                    };
                    ye(Xe, (de) => {
                      d() && de(Ze);
                    });
                  }
                  var fe = Z(Xe, 2), ve = Z(X(fe), 2);
                  ar(ve), ve.__change = [ey, b, S], q(fe), q(ie), Se(() => Af(ve, !!n().async)), D(Ne, ie);
                },
                children: (Ne, ie) => {
                  Ge(Ne, {
                    class: "tf-node-toolbar-item",
                    children: (U, Me) => {
                      var F = ny();
                      D(U, F);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ye(ae, (me) => {
              c() && me(Ce);
            });
          }
          q(K), D(I, K);
        },
        $$slots: { default: !0 }
      });
    };
    ye(H, (P) => {
      (s() || l() || u()) && P(L);
    });
  }
  var R = Z(H, 2), O = Z(X(R), 2), A = X(O);
  wd(A, {
    get items() {
      return f(g);
    },
    activeKeys: x,
    onChange: (P, I) => {
      var Y;
      b(r(), { expand: I == null ? void 0 : I.includes("key") }), (Y = h()) == null || Y(I != null && I.includes("key") ? "key" : "");
    }
  }), q(O), q(R);
  var E = Z(R, 2);
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
    ye(E, (P) => {
      p() && P(_);
    });
  }
  var M = Z(E, 2);
  {
    var T = (P) => {
      Un(P, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(M, (P) => {
      v() && P(T);
    });
  }
  var V = Z(M, 2);
  return cr(V, () => i() ?? pt), D(e, z), ge({
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
ue(
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
], ay = [
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
var sy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ly = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), uy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Td(e, t) {
  pe(t, !0), Je(e, cy);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var H, L;
    return {
      ...i(),
      ...(L = (H = o()) == null ? void 0 : H.data) == null ? void 0 : L.parameters[a()]
    };
  });
  const { updateNodeData: c } = Lt(), d = (H, L) => {
    c(s, (R) => {
      let O = R.data.parameters;
      return O[a()][H] = L, { parameters: O };
    });
  }, v = (H) => {
    const L = H.target.value;
    d("name", L);
  }, p = (H) => {
    const L = H.target.checked;
    d("required", L);
  }, h = (H) => {
    const L = H.value;
    L && d("dataType", L);
  };
  let x;
  const b = () => {
    c(s, (H) => {
      let L = H.data.parameters;
      return L.splice(a(), 1), { parameters: [...L] };
    }), x == null || x.hide();
  };
  var $ = uy(), g = be($), C = X(g);
  ht(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), q(g);
  var w = Z(g, 2), k = X(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: p
  }), q(w);
  var N = Z(w, 2), S = X(N);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (H) => {
        var L = sy(), R = X(L), O = Z(X(R));
        const A = /* @__PURE__ */ Ve(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Jt(O, {
          items: Hd,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(A);
          }
        }), q(R);
        var E = Z(R, 2), _ = Z(X(E));
        mt(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("defaultValue", Y);
          }
        }), q(E);
        var M = Z(E, 2), T = Z(X(M));
        mt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("description", Y);
          }
        }), q(M);
        var V = Z(M, 2), P = X(V);
        Ge(P, {
          onclick: b,
          children: (I, Y) => {
            Te();
            var K = Re("删除");
            D(I, K);
          },
          $$slots: { default: !0 }
        }), q(V), q(L), D(H, L);
      },
      children: (H, L) => {
        Ge(H, {
          class: "input-btn-more",
          children: (R, O) => {
            var A = ly();
            D(R, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), q(N), D(e, $);
  var z = ge({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), m();
    },
    get index() {
      return a();
    },
    set index(H) {
      a(H), m();
    }
  });
  return r(), z;
}
ue(Td, { parameter: {}, index: {} }, [], [], !0);
var dy = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), fy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), vy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const py = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  pe(t, !0), Je(e, py);
  const [n, r] = tt(), o = () => te(f(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Ve(() => mr(i)), s = /* @__PURE__ */ Ve(() => {
    var v, p;
    return [...((p = (v = o()) == null ? void 0 : v.data) == null ? void 0 : p.parameters) || []];
  });
  var l = vy(), u = X(l);
  {
    var c = (v) => {
      var p = dy();
      Te(4), D(v, p);
    };
    ye(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = Z(u, 2);
  Mt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, p, h) => {
      Td(v, {
        get parameter() {
          return f(p);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var p = fy();
      D(v, p);
    }
  ), q(l), D(e, l), ge(), r();
}
ue(zd, {}, [], [], !0);
const Hi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = qr()), Hi(t.children);
}), e), Mn = () => {
  const { updateNodeData: e } = Lt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Hi(r == null ? void 0 : r.children);
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
var gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  pe(t, !0), Je(e, yy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn();
  return gn(e, st(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = gy();
      D(a, s);
    },
    children: (a, s) => {
      var l = my(), u = be(l), c = X(u);
      Fe(c, {
        level: 3,
        children: (p, h) => {
          Te();
          var x = Re("输入参数");
          D(p, x);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      Ge(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, h) => {
          var x = hy();
          D(p, x);
        },
        $$slots: { default: !0 }
      }), q(u);
      var v = Z(u, 2);
      zd(v, {}), D(a, l);
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
ue(Od, { data: {} }, [], [], !0);
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
}, wy = (e = !1) => {
  const t = gt(), n = mr(t), { nodes: r, edges: o } = je();
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
var by = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), xy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  pe(t, !0), Je(e, $y);
  const [n, r] = tt(), o = () => te(f(c), "$node", n), i = () => te(C, "$selectItems", n);
  Qt(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Ve(() => mr(u)), d = /* @__PURE__ */ Ve(() => {
    var _;
    return {
      ...a(),
      ...(_ = o()) == null ? void 0 : _.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Lt(), p = (_, M) => {
    v(u, (T) => {
      let V = T.data[l()];
      return V[s()] = { ...V[s()], [_]: M }, { [l()]: V };
    });
  }, h = (_, M) => {
    const T = M.target.value;
    p(_, T);
  }, x = (_) => {
    const M = _.value;
    p("ref", M);
  }, b = (_) => {
    const M = _.value;
    p("refType", M);
  };
  let $;
  const g = () => {
    v(u, (_) => {
      let M = _.data[l()];
      return M.splice(s(), 1), { [l()]: [...M] };
    }), $ == null || $.hide();
  }, C = wy();
  var w = xy(), k = be(w), N = X(k);
  const S = /* @__PURE__ */ Ve(() => f(d).nameDisabled === !0);
  ht(N, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(S);
    },
    oninput: (_) => h("name", _)
  }), q(k);
  var z = Z(k, 2), H = X(z);
  {
    var L = (_) => {
      ht(_, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => h("value", M)
      });
    }, R = (_, M) => {
      {
        var T = (V) => {
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
            onSelect: x
          });
        };
        ye(
          _,
          (V) => {
            f(d).refType !== "input" && V(T);
          },
          M
        );
      }
    };
    ye(H, (_) => {
      f(d).refType === "fixed" ? _(L) : _(R, !1);
    });
  }
  q(z);
  var O = Z(z, 2), A = X(O);
  _n(
    Gr(A, {
      placement: "bottom",
      floating: (_) => {
        var M = by(), T = X(M), V = Z(X(T));
        const P = /* @__PURE__ */ Ve(() => f(d).refType ? [f(d).refType] : []);
        Jt(V, {
          items: ay,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(P);
          },
          onSelect: b
        }), q(T);
        var I = Z(T, 2), Y = Z(X(I));
        mt(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            h("defaultValue", ce);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), q(I);
        var K = Z(I, 2), G = Z(X(K));
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            h("description", ce);
          },
          get value() {
            return f(d).description;
          }
        }), q(K);
        var Q = Z(K, 2), W = X(Q);
        Ge(W, {
          onclick: g,
          children: (ce, se) => {
            Te();
            var we = Re("删除");
            D(ce, we);
          },
          $$slots: { default: !0 }
        }), q(Q), q(M), D(_, M);
      },
      children: (_, M) => {
        ta(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => $ = _,
    () => $
  ), q(O), D(e, w);
  var E = ge({
    get parameter() {
      return a();
    },
    set parameter(_) {
      a(_), m();
    },
    get index() {
      return s();
    },
    set index(_) {
      s(_), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(_) {
      l(_), m();
    }
  });
  return r(), E;
}
ue(Dd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), _y = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), ky = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  pe(t, !0), Je(e, Sy);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var c = ky(), d = X(c);
  {
    var v = (x) => {
      var b = Cy();
      Te(4), D(x, b);
    };
    ye(d, (x) => {
      f(u).length !== 0 && x(v);
    });
  }
  var p = Z(d, 2);
  Mt(
    p,
    19,
    () => f(u),
    (x) => x.id,
    (x, b, $) => {
      Dd(x, {
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
      var b = _y(), $ = X(b, !0);
      q(b), Se(() => dt($, i())), D(x, b);
    }
  ), q(c), D(e, c);
  var h = ge({
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
  return r(), h;
}
ue(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), My = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Ny = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Ad(e, t) {
  pe(t, !0), Je(e, Ny);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn();
  return gn(e, st(
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
        var s = Ey();
        D(a, s);
      },
      children: (a, s) => {
        var l = Vy(), u = be(l), c = X(u);
        Fe(c, {
          level: 3,
          children: (p, h) => {
            Te();
            var x = Re("输出参数");
            D(p, x);
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
          children: (p, h) => {
            var x = My();
            D(p, x);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = Z(u, 2);
        Zt(v, {
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
ue(Ad, { data: {} }, [], [], !0);
const ya = (e) => JSON.parse(JSON.stringify(e));
var Py = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Ty = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), zy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Oy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  pe(t, !0), Je(e, Oy);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var T;
    let V = (T = o()) == null ? void 0 : T.data[s()], P;
    if (V && a().length > 0) {
      let I = V;
      for (let Y = 0; Y < a().length; Y++) {
        const K = a()[Y];
        Y == a().length - 1 ? P = I[K] : I = I[K].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: d } = Lt(), v = (T, V) => {
    d(l, (P) => {
      const I = P.data[s()];
      if (I && a().length > 0) {
        let Y = I;
        for (let K = 0; K < a().length; K++) {
          const G = a()[K];
          K == a().length - 1 ? Y[G] = { ...Y[G], [T]: V } : Y = Y[G].children;
        }
      }
      return {
        [s()]: [...ya(I)]
      };
    });
  }, p = (T, V) => {
    const P = V.target.value;
    v(T, P);
  }, h = (T) => {
    const V = T.value;
    v("dataType", V);
  };
  let x;
  const b = () => {
    d(l, (T) => {
      let V = T.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? P.splice(Y, 1) : P = P[Y].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (T) => {
      let V = T.data[s()];
      if (V && a().length > 0) {
        let P = V;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? P[Y].children ? P[Y].children.push({
            id: qr(),
            name: "newParam",
            dataType: "String"
          }) : P[Y].children = [
            {
              id: qr(),
              name: "newParam",
              dataType: "String"
            }
          ] : P = P[Y].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    });
  };
  var g = zy(), C = be(g), w = X(C);
  {
    var k = (T) => {
      var V = Ue(), P = be(V);
      Mt(P, 17, a, zr, (I, Y) => {
        Te();
        var K = Re(" ");
        D(I, K);
      }), D(T, V);
    };
    ye(w, (T) => {
      a().length > 1 && T(k);
    });
  }
  var N = Z(w, 2);
  const S = /* @__PURE__ */ Ve(() => f(c).nameDisabled === !0);
  ht(N, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (T) => {
      p("name", T);
    },
    get disabled() {
      return f(S);
    }
  }), q(C);
  var z = Z(C, 2), H = X(z);
  const L = /* @__PURE__ */ Ve(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Ve(() => f(c).dataTypeDisabled === !0);
  Jt(H, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(L);
    },
    get disabled() {
      return f(R);
    },
    onSelect: h
  });
  var O = Z(H, 2);
  {
    var A = (T) => {
      Ge(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (V, P) => {
          var I = Py();
          D(V, I);
        },
        $$slots: { default: !0 }
      });
    };
    ye(O, (T) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && T(A);
    });
  }
  q(z);
  var E = Z(z, 2), _ = X(E);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (T) => {
        var V = Ty(), P = X(V), I = Z(X(P));
        const Y = /* @__PURE__ */ Ve(() => f(c).defaultValue || "");
        mt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(Y);
          },
          onchange: (se) => {
            p("defaultValue", se);
          }
        }), q(P);
        var K = Z(P, 2), G = Z(X(K));
        const Q = /* @__PURE__ */ Ve(() => f(c).description || "");
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (se) => {
            p("description", se);
          }
        }), q(K);
        var W = Z(K, 2);
        {
          var ce = (se) => {
            var we = Hy(), ae = X(we);
            Ge(ae, {
              onclick: b,
              children: (Ce, me) => {
                Te();
                var Ne = Re("删除");
                D(Ce, Ne);
              },
              $$slots: { default: !0 }
            }), q(we), D(se, we);
          };
          ye(W, (se) => {
            f(c).deleteDisabled !== !0 && se(ce);
          });
        }
        q(V), D(T, V);
      },
      children: (T, V) => {
        ta(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), q(E), D(e, g);
  var M = ge({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), m();
    },
    get position() {
      return a();
    },
    set position(T) {
      a(T), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(T) {
      s(T), m();
    }
  });
  return r(), M;
}
ue(Id, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ re("<!> <!>", 1), Dy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Iy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  pe(t, !0), Je(e, Ry);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = (b, $ = pt, g = pt) => {
    var C = Ue(), w = be(C);
    Mt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, N, S) => {
        var z = Ly(), H = be(z);
        const L = /* @__PURE__ */ Ve(() => [...g(), f(S)]);
        Id(H, {
          get parameter() {
            return f(N);
          },
          get position() {
            return f(L);
          },
          get dataKeyName() {
            return s();
          }
        });
        var R = Z(H, 2);
        {
          var O = (A) => {
            var E = /* @__PURE__ */ xe(() => [...g(), f(S)]);
            i(A, () => f(N).children, () => f(E));
          };
          ye(R, (A) => {
            f(N).children && A(O);
          });
        }
        D(k, z);
      },
      (k) => {
        var N = Ue(), S = be(N);
        {
          var z = (H) => {
            var L = Dy(), R = X(L, !0);
            q(L), Se(() => dt(R, a())), D(H, L);
          };
          ye(S, (H) => {
            g().length === 0 && H(z);
          });
        }
        D(k, N);
      }
    ), D(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Iy(), v = X(d);
  {
    var p = (b) => {
      var $ = Ay();
      Te(4), D(b, $);
    };
    ye(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = Z(v, 2);
  i(h, () => f(c) || [], () => []), q(d), D(e, d);
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
ue(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Xy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Yy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Rd(e, t) {
  pe(t, !0), Je(e, jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Lt(), u = (c) => {
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
  }), gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Zy();
        D(c, d);
      },
      children: (c, d) => {
        var v = Wy(), p = be(v), h = X(p);
        Fe(h, {
          level: 3,
          children: (U, Me) => {
            Te();
            var F = Re("输入参数");
            D(U, F);
          },
          $$slots: { default: !0 }
        });
        var x = Z(h, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (U, Me) => {
            var F = qy();
            D(U, F);
          },
          $$slots: { default: !0 }
        }), q(p);
        var b = Z(p, 2);
        Zt(b, {});
        var $ = Z(b, 2);
        Fe($, {
          level: 3,
          mt: "10px",
          children: (U, Me) => {
            Te();
            var F = Re("模型设置");
            D(U, F);
          },
          $$slots: { default: !0 }
        });
        var g = Z($, 4), C = X(g);
        const w = /* @__PURE__ */ Ve(() => n().llmId ? [n().llmId] : []);
        Jt(C, {
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
        var k = Z(C, 2);
        ta(k, {}), q(g);
        var N = Z(g, 4), S = X(N), z = X(S), H = X(z);
        q(z);
        var L = Z(z, 2);
        ar(L), L.__input = [By, l, o], q(S), q(N);
        var R = Z(N, 2), O = X(R), A = X(O), E = X(A);
        q(A);
        var _ = Z(A, 2);
        ar(_), _.__input = [Xy, l, o], q(O), q(R);
        var M = Z(R, 2), T = X(M), V = X(T), P = X(V);
        q(V);
        var I = Z(V, 2);
        ar(I), I.__input = [Yy, l, o], q(T), q(M);
        var Y = Z(M, 4), K = X(Y);
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
        }), q(Y);
        var Q = Z(Y, 4), W = X(Q);
        const ce = /* @__PURE__ */ Ve(() => n().userPrompt || "");
        mt(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ce);
          },
          oninput: (U) => {
            l(o, { userPrompt: U.target.value });
          }
        }), q(Q);
        var se = Z(Q, 2), we = X(se);
        Fe(we, {
          level: 3,
          mt: "10px",
          children: (U, Me) => {
            Te();
            var F = Re("输出参数");
            D(U, F);
          },
          $$slots: { default: !0 }
        });
        var ae = Z(we, 2);
        const Ce = /* @__PURE__ */ Ve(() => n().outType ? [n().outType] : []);
        Jt(ae, {
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
            return f(Ce);
          }
        });
        var me = Z(ae, 2);
        {
          var Ne = (U) => {
            Ge(U, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Me, F) => {
                var Oe = Ky();
                D(Me, Oe);
              },
              $$slots: { default: !0 }
            });
          };
          ye(me, (U) => {
            n().outType === "json" && U(Ne);
          });
        }
        q(se);
        var ie = Z(se, 2);
        In(ie, {}), Se(() => {
          dt(H, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), sa(L, n().temperature ?? 0.5), dt(E, `Top P: ${n().topP ?? 0.9 ?? ""}`), sa(_, n().topP ?? 0.9), dt(P, `Top K: ${n().topK ?? 50 ?? ""}`), sa(I, n().topK ?? 50);
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
var Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  pe(t, !0), Je(e, Qy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Qt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: i } = Mn(), { updateNodeData: a } = Lt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Fy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Jy(), d = be(c), v = X(d);
        Fe(v, {
          level: 3,
          children: (L, R) => {
            Te();
            var O = Re("输入参数");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var p = Z(v, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, R) => {
            var O = Gy();
            D(L, O);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = Z(d, 2);
        Zt(h, {});
        var x = Z(h, 2);
        Fe(x, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Te();
            var O = Re("代码");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var b = Z(x, 4), $ = X(b);
        const g = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : ["qlexpress"]);
        Jt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (L) => {
            const R = L.value;
            a(o, () => ({ engine: R }));
          },
          get value() {
            return f(g);
          }
        }), q(b);
        var C = Z(b, 4), w = X(C);
        const k = /* @__PURE__ */ Ve(() => n().code || "");
        mt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (L) => {
            a(o, () => ({ code: L.target.value }));
          },
          get value() {
            return f(k);
          }
        }), q(C);
        var N = Z(C, 2), S = X(N);
        Fe(S, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Te();
            var O = Re("输出参数");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var z = Z(S, 2);
        Ge(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (L, R) => {
            var O = Uy();
            D(L, O);
          },
          $$slots: { default: !0 }
        }), q(N);
        var H = Z(N, 2);
        In(H, {}), D(l, c);
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
ue(Zd, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  pe(t, !0), Je(e, rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn(), { updateNodeData: a } = Lt();
  return ln(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = ew();
        D(s, l);
      },
      children: (s, l) => {
        var u = nw(), c = be(u), d = X(c);
        Fe(d, {
          level: 3,
          children: (k, N) => {
            Te();
            var S = Re("输入参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var v = Z(d, 2);
        Ge(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, N) => {
            var S = tw();
            D(k, S);
          },
          $$slots: { default: !0 }
        }), q(c);
        var p = Z(c, 2);
        Zt(p, {});
        var h = Z(p, 2);
        Fe(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, N) => {
            Te();
            var S = Re("模板内容");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var x = Z(h, 2), b = X(x);
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
        var g = Z(x, 2), C = X(g);
        Fe(C, {
          level: 3,
          mt: "10px",
          children: (k, N) => {
            Te();
            var S = Re("输出参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        }), q(g);
        var w = Z(g, 2);
        In(w, {}), D(s, u);
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
ue(qd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const gw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Bd(e, t) {
  pe(t, !0), Je(e, gw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
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
  ], i = gt(), { addParameter: a } = Mn(), { updateNodeData: s } = Lt();
  return gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ow();
        D(l, u);
      },
      children: (l, u) => {
        var c = pw(), d = be(c), v = X(d);
        Fe(v, {
          level: 3,
          children: (fe, ve) => {
            Te();
            var de = Re("输入参数");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var p = Z(v, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (fe, ve) => {
            var de = iw();
            D(fe, de);
          },
          $$slots: { default: !0 }
        }), q(d);
        var h = Z(d, 2);
        Zt(h, {});
        var x = Z(h, 2);
        Fe(x, {
          level: 3,
          mt: "10px",
          children: (fe, ve) => {
            Te();
            var de = Re("URL 地址");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var b = Z(x, 2), $ = X(b), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().method ? [n().method] : ["get"]);
        Jt(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (fe) => {
            const ve = fe.value;
            s(i, () => ({ method: ve }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 2), k = X(w);
        const N = /* @__PURE__ */ Ve(() => n().url || "");
        ht(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            s(i, () => ({ url: fe.target.value }));
          },
          get value() {
            return f(N);
          }
        }), q(w), q(b);
        var S = Z(b, 2), z = X(S);
        Fe(z, {
          level: 3,
          children: (fe, ve) => {
            Te();
            var de = Re("Http 头信息");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var H = Z(z, 2);
        Ge(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (fe, ve) => {
            var de = aw();
            D(fe, de);
          },
          $$slots: { default: !0 }
        }), q(S);
        var L = Z(S, 2);
        Zt(L, { dataKeyName: "headers" });
        var R = Z(L, 2);
        Fe(R, {
          level: 3,
          mt: "10px",
          children: (fe, ve) => {
            Te();
            var de = Re("Body");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var O = Z(R, 2), A = X(O), E = X(A);
        const _ = /* @__PURE__ */ Ve(() => !n().bodyType);
        ht(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(_);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "" });
          }
        }), Te(), q(A);
        var M = Z(A, 2), T = X(M);
        const V = /* @__PURE__ */ Ve(() => n().bodyType === "form-data");
        ht(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(V);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "form-data" });
          }
        }), Te(), q(M);
        var P = Z(M, 2), I = X(P);
        const Y = /* @__PURE__ */ Ve(() => n().bodyType === "x-www-form-urlencoded");
        ht(I, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(Y);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Te(), q(P);
        var K = Z(P, 2), G = X(K);
        const Q = /* @__PURE__ */ Ve(() => n().bodyType === "json");
        ht(G, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(Q);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "json" });
          }
        }), Te(), q(K);
        var W = Z(K, 2), ce = X(W);
        const se = /* @__PURE__ */ Ve(() => n().bodyType === "raw");
        ht(ce, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(se);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "raw" });
          }
        }), Te(), q(W), q(O);
        var we = Z(O, 2);
        {
          var ae = (fe) => {
            var ve = lw(), de = be(ve), Ee = X(de);
            Fe(Ee, {
              level: 3,
              children: (ne, Ye) => {
                Te();
                var le = Re("参数");
                D(ne, le);
              },
              $$slots: { default: !0 }
            });
            var it = Z(Ee, 2);
            Ge(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (ne, Ye) => {
                var le = sw();
                D(ne, le);
              },
              $$slots: { default: !0 }
            }), q(de);
            var lt = Z(de, 2);
            Zt(lt, { dataKeyName: "formData" }), D(fe, ve);
          };
          ye(we, (fe) => {
            n().bodyType === "form-data" && fe(ae);
          });
        }
        var Ce = Z(we, 2);
        {
          var me = (fe) => {
            var ve = cw(), de = be(ve), Ee = X(de);
            Fe(Ee, {
              level: 3,
              children: (ne, Ye) => {
                Te();
                var le = Re("Body 参数");
                D(ne, le);
              },
              $$slots: { default: !0 }
            });
            var it = Z(Ee, 2);
            Ge(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (ne, Ye) => {
                var le = uw();
                D(ne, le);
              },
              $$slots: { default: !0 }
            }), q(de);
            var lt = Z(de, 2);
            Zt(lt, { dataKeyName: "formUrlencoded" }), D(fe, ve);
          };
          ye(Ce, (fe) => {
            n().bodyType === "x-www-form-urlencoded" && fe(me);
          });
        }
        var Ne = Z(Ce, 2);
        {
          var ie = (fe) => {
            var ve = dw(), de = X(ve);
            mt(de, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ee) => {
                s(i, { bodyJson: Ee.target.value });
              }
            }), q(ve), D(fe, ve);
          };
          ye(Ne, (fe) => {
            n().bodyType === "json" && fe(ie);
          });
        }
        var U = Z(Ne, 2);
        {
          var Me = (fe) => {
            var ve = fw(), de = X(ve);
            mt(de, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ee) => {
                s(i, { bodyRaw: Ee.target.value });
              }
            }), q(ve), D(fe, ve);
          };
          ye(U, (fe) => {
            n().bodyType === "raw" && fe(Me);
          });
        }
        var F = Z(U, 2), Oe = X(F);
        Fe(Oe, {
          level: 3,
          mt: "10px",
          children: (fe, ve) => {
            Te();
            var de = Re("输出参数");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var Xe = Z(Oe, 2);
        Ge(Xe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (fe, ve) => {
            var de = vw();
            D(fe, de);
          },
          $$slots: { default: !0 }
        }), q(F);
        var Ze = Z(F, 2);
        In(Ze, {}), D(l, c);
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
ue(Bd, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  pe(t, !0), Je(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
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
  }), gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = hw();
        D(u, c);
      },
      children: (u, c) => {
        var d = yw(), v = be(d), p = X(v);
        Fe(p, {
          level: 3,
          children: (O, A) => {
            Te();
            var E = Re("输入参数");
            D(O, E);
          },
          $$slots: { default: !0 }
        });
        var h = Z(p, 2);
        Ge(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, A) => {
            var E = mw();
            D(O, E);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = Z(v, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Fe(b, {
          level: 3,
          mt: "10px",
          children: (O, A) => {
            Te();
            var E = Re("知识库设置");
            D(O, E);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().knowledgeId ? [n().knowledgeId] : []);
        Jt(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (O) => {
            const A = O.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = X(w);
        ht(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (O) => {
            const A = O.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), q(w);
        var N = Z(w, 4), S = X(N);
        const z = /* @__PURE__ */ Ve(() => n().limit || "");
        ht(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (O) => {
            const A = O.target.value;
            l(o, () => ({ limit: A }));
          },
          get value() {
            return f(z);
          }
        }), q(N);
        var H = Z(N, 2), L = X(H);
        Fe(L, {
          level: 3,
          mt: "10px",
          children: (O, A) => {
            Te();
            var E = Re("输出参数");
            D(O, E);
          },
          $$slots: { default: !0 }
        }), q(H);
        var R = Z(H, 2);
        In(R, {}), D(u, d);
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
var bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), xw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  pe(t, !0), Je(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
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
  }), gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = bw();
        D(u, c);
      },
      children: (u, c) => {
        var d = $w(), v = be(d), p = X(v);
        Fe(p, {
          level: 3,
          children: (R, O) => {
            Te();
            var A = Re("输入参数");
            D(R, A);
          },
          $$slots: { default: !0 }
        });
        var h = Z(p, 2);
        Ge(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, O) => {
            var A = xw();
            D(R, A);
          },
          $$slots: { default: !0 }
        }), q(v);
        var x = Z(v, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Fe(b, {
          level: 3,
          mt: "10px",
          children: (R, O) => {
            Te();
            var A = Re("搜索引擎设置");
            D(R, A);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), g = X($);
        const C = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : []);
        Jt(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (R) => {
            const O = R.value;
            l(o, () => ({ engine: O }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = X(w);
        ht(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const O = R.target.value;
            l(o, () => ({ keyword: O }));
          }
        }), q(w);
        var N = Z(w, 4), S = X(N);
        ht(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const O = R.target.value;
            l(o, () => ({ limit: O }));
          }
        }), q(N);
        var z = Z(N, 2), H = X(z);
        Fe(H, {
          level: 3,
          mt: "10px",
          children: (R, O) => {
            Te();
            var A = Re("输出参数");
            D(R, A);
          },
          $$slots: { default: !0 }
        }), q(z);
        var L = Z(z, 2);
        In(L, {}), D(u, d);
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
ue(Yd, { data: {} }, [], [], !0);
var _w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), kw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Ew = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Kd(e, t) {
  pe(t, !0), Je(e, Ew);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Mn();
  return gn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = _w();
        D(a, s);
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
        var l = Sw(), u = be(l), c = X(u);
        Fe(c, {
          level: 3,
          children: (b, $) => {
            Te();
            var g = Re("循环变量");
            D(b, g);
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
          children: (b, $) => {
            var g = kw();
            D(b, g);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = Z(u, 2);
        Zt(v, {});
        var p = Z(v, 2), h = X(p);
        Fe(h, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            Te();
            var g = Re("输出参数");
            D(b, g);
          },
          $$slots: { default: !0 }
        }), q(p);
        var x = Z(p, 2);
        In(x, {}), D(a, l);
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
ue(Kd, { data: {} }, [], [], !0);
const Mw = {
  startNode: Od,
  codeNode: Zd,
  llmNode: Rd,
  templateNode: qd,
  httpNode: Bd,
  knowledgeNode: Xd,
  searchEngineNode: Yd,
  loopNode: Kd,
  endNode: Ad
};
var Vw = /* @__PURE__ */ re("<!> ", 1);
function Xa(e, t) {
  pe(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
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
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (s, l) => {
      var u = Vw(), c = be(u);
      ls(c, n);
      var d = Z(c);
      Se(() => dt(d, ` ${r() ?? ""}`)), D(s, u);
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
var Nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Hw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Wd(e, t) {
  pe(t, !0);
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
  var u = Hw(), c = X(u), d = X(c), v = X(d);
  yd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      J(n, $.value.toString(), !0);
    }
  }), q(d);
  var p = Z(d, 2), h = X(p);
  Mt(h, 21, () => o, zr, ($, g) => {
    Xa($, st(() => f(g)));
  }), q(h);
  var x = Z(h, 2);
  Mt(x, 21, () => a, zr, ($, g) => {
    Xa($, st(() => f(g)));
  }), q(x), q(p), q(c);
  var b = Z(c, 2);
  Ge(b, {
    onclick: () => {
      J(r, f(r) ? "" : "show", !0);
    },
    children: ($, g) => {
      var C = Ue(), w = be(C);
      {
        var k = (S) => {
          var z = Nw();
          D(S, z);
        }, N = (S) => {
          var z = Pw();
          D(S, z);
        };
        ye(w, (S) => {
          f(r) === "show" ? S(k) : S(N, !1);
        });
      }
      D($, C);
    },
    $$slots: { default: !0 }
  }), q(u), Se(() => {
    xt(u, 1, `tf-toolbar ${f(r) ?? ""}`), ft(h, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(x, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), ge();
}
ue(Wd, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = je();
  return {
    getNode: (t) => {
      var n;
      return (n = j(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, zw = () => {
  const { nodes: e } = je();
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
}, Ow = () => {
  const { edges: e } = je();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var Lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Iw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Zw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), qw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Xw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Yw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function jd(e, t) {
  var n;
  pe(t, !0), Je(e, Yw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = Mn(), s = Lt(), { updateNodeData: l } = s, u = { ...o, id: i, data: r() }, c = document.createElement("div"), d = Qn().customNodes[t.type];
  (n = d.render) == null || n.call(d, c, u, s);
  const v = d.forms;
  let p;
  ln(() => {
    r().expand && p && p.append(c);
  }), ln(() => {
    var x;
    r() && ((x = d.onUpdate) == null || x.call(d, c, { ...u, data: r() }));
  }), ln(() => {
    !r().parameters && d.parameters && l(i, {
      parameters: Hi(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), ln(() => {
    !r().outputDefs && d.outputDefs && l(i, {
      outputDefs: Hi(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const h = /* @__PURE__ */ Ve(() => ({
    ...r(),
    description: d.description
  }));
  return gn(e, st(
    {
      get data() {
        return f(h);
      }
    },
    () => o,
    {
      icon: (x) => {
        var b = Ue(), $ = be(b);
        ls($, () => d.icon), D(x, b);
      },
      children: (x, b) => {
        var $ = Xw(), g = be($);
        {
          var C = (H) => {
            var L = Dw(), R = be(L), O = X(R);
            Fe(O, {
              level: 3,
              children: (M, T) => {
                Te();
                var V = Re("输入参数");
                D(M, V);
              },
              $$slots: { default: !0 }
            });
            var A = Z(O, 2);
            {
              var E = (M) => {
                Ge(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (T, V) => {
                    var P = Lw();
                    D(T, P);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (M) => {
                d.parametersAddEnable !== !1 && M(E);
              });
            }
            q(R);
            var _ = Z(R, 2);
            Zt(_, {}), D(H, L);
          };
          ye(g, (H) => {
            d.parametersEnable !== !1 && H(C);
          });
        }
        var w = Z(g, 2);
        {
          var k = (H) => {
            var L = Ue(), R = be(L);
            Mt(R, 17, () => v, zr, (O, A) => {
              var E = Ue(), _ = be(E);
              {
                var M = (V) => {
                  var P = Aw(), I = be(P), Y = X(I, !0);
                  q(I);
                  var K = Z(I, 2), G = X(K);
                  const Q = /* @__PURE__ */ Ve(() => r()[f(A).name] || f(A).defaultValue);
                  ht(G, st(
                    {
                      get placeholder() {
                        return f(A).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(Q);
                      }
                    },
                    () => f(A).attrs,
                    {
                      onchange: (W) => {
                        l(i, { [f(A).name]: W.target.value });
                      }
                    }
                  )), q(K), Se(() => dt(Y, f(A).label)), D(V, P);
                }, T = (V, P) => {
                  {
                    var I = (K) => {
                      var G = Iw(), Q = be(G), W = X(Q, !0);
                      q(Q);
                      var ce = Z(Q, 2), se = X(ce);
                      const we = /* @__PURE__ */ Ve(() => r()[f(A).name] || f(A).defaultValue);
                      mt(se, st(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(A).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(we);
                          }
                        },
                        () => f(A).attrs,
                        {
                          onchange: (ae) => {
                            l(i, { [f(A).name]: ae.target.value });
                          }
                        }
                      )), q(ce), Se(() => dt(W, f(A).label)), D(K, G);
                    }, Y = (K, G) => {
                      {
                        var Q = (ce) => {
                          var se = Rw(), we = be(se), ae = X(we, !0);
                          q(we);
                          var Ce = Z(we, 2), me = X(Ce), Ne = X(me), ie = X(Ne);
                          q(Ne);
                          var U = Z(Ne, 2);
                          ar(U);
                          var Me = (Oe) => l(i, {
                            [f(A).name]: parseFloat(Oe.target.value)
                          });
                          let F;
                          q(me), q(Ce), Se(() => {
                            dt(ae, f(A).label), dt(ie, `${f(A).description ?? ""}: ${r()[f(A).name] ?? f(A).defaultValue ?? ""}`), F = Ut(
                              U,
                              F,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(A).attrs,
                                value: r()[f(A).name] ?? f(A).defaultValue,
                                oninput: Me
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(ce, se);
                        }, W = (ce, se) => {
                          {
                            var we = (Ce) => {
                              var me = Zw(), Ne = be(me), ie = X(Ne, !0);
                              q(Ne);
                              var U = Z(Ne, 2), Me = X(U);
                              const F = /* @__PURE__ */ Ve(() => f(A).options || []), Oe = /* @__PURE__ */ Ve(() => r()[f(A).name] ? [r()[f(A).name]] : [f(A).defaultValue]);
                              Jt(Me, {
                                get items() {
                                  return f(F);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(A).placeholder;
                                },
                                onSelect: (Xe) => {
                                  const Ze = Xe.value;
                                  l(i, () => ({ [f(A).name]: Ze }));
                                },
                                get value() {
                                  return f(Oe);
                                }
                              }), q(U), Se(() => dt(ie, f(A).label)), D(Ce, me);
                            }, ae = (Ce, me) => {
                              {
                                var Ne = (ie) => {
                                  Fe(ie, st({ level: 3, mt: "10px" }, () => f(A).attrs, {
                                    children: (U, Me) => {
                                      Te();
                                      var F = Re();
                                      Se(() => dt(F, f(A).label)), D(U, F);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                ye(
                                  Ce,
                                  (ie) => {
                                    f(A).type === "heading" && ie(Ne);
                                  },
                                  me
                                );
                              }
                            };
                            ye(
                              ce,
                              (Ce) => {
                                f(A).type === "select" ? Ce(we) : Ce(ae, !1);
                              },
                              se
                            );
                          }
                        };
                        ye(
                          K,
                          (ce) => {
                            f(A).type === "slider" ? ce(Q) : ce(W, !1);
                          },
                          G
                        );
                      }
                    };
                    ye(
                      V,
                      (K) => {
                        f(A).type === "textarea" ? K(I) : K(Y, !1);
                      },
                      P
                    );
                  }
                };
                ye(_, (V) => {
                  f(A).type === "input" ? V(M) : V(T, !1);
                });
              }
              D(O, E);
            }), D(H, L);
          };
          ye(w, (H) => {
            v && H(k);
          });
        }
        var N = Z(w, 2);
        _n(N, (H) => p = H, () => p);
        var S = Z(N, 2);
        {
          var z = (H) => {
            var L = Bw(), R = be(L), O = X(R);
            Fe(O, {
              level: 3,
              mt: "10px",
              children: (M, T) => {
                Te();
                var V = Re("输出参数");
                D(M, V);
              },
              $$slots: { default: !0 }
            });
            var A = Z(O, 2);
            {
              var E = (M) => {
                Ge(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (T, V) => {
                    var P = qw();
                    D(T, P);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (M) => {
                d.outputDefsAddEnable !== !1 && M(E);
              });
            }
            q(R);
            var _ = Z(R, 2);
            In(_, {}), D(H, L);
          };
          ye(S, (H) => {
            d.outputDefsEnable !== !1 && H(z);
          });
        }
        Se(() => {
          ft(N, d.rootStyle || ""), xt(N, 1, vn(d.rootClass), "svelte-q0cqsa");
        }), D(x, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return r();
    },
    set data(x) {
      r(x), m();
    }
  });
}
ue(jd, { data: {} }, [], [], !0);
const Kw = () => {
  const e = je();
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
var Ww = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), jw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Fw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Gw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Fd(e, t) {
  pe(t, !0), Je(e, Gw);
  const [n, r] = tt(), o = () => te(z, "$nodes", n), i = () => te(H, "$edges", n), a = () => te(L, "$viewport", n), s = y(t, "onInit", 7), l = Lt();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = Kw(), v = (V) => {
    V.preventDefault(), V.dataTransfer && (V.dataTransfer.dropEffect = "move");
  }, p = (V) => {
    var P;
    V.preventDefault();
    const I = l.screenToFlowPosition({
      x: V.clientX - 250,
      y: V.clientY - 100
    }), Y = (P = V.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), K = Y ? JSON.parse(Y) : {}, G = {
      id: `node_${qr()}`,
      position: I,
      data: {},
      ...K
    };
    ri.addNode(G), ri.selectNodeOnly(G.id);
  }, { getNode: h } = Tw(), x = (V) => {
    const P = h(V.source), I = h(V.target);
    if (V.sourceHandle === "loop_handle" || P.parentId) {
      const Y = l.getEdges();
      for (let K of Y)
        if (K.target === V.target) {
          const G = h(K.source);
          if (V.sourceHandle === "loop_handle" && G.parentId !== P.id || P.parentId && G.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && I.parentId && I.parentId !== P.id);
  }, { ensureParentInNodesBefore: b } = zw(), $ = (V, P) => {
    if (!P.isValid)
      return;
    const I = P.toNode;
    if (I.parentId)
      return;
    const Y = P.fromNode, K = P.fromHandle, G = { position: { ...I.position } };
    if (K.id === "loop_handle" ? G.parentId = Y.id : Y.parentId && (G.parentId = Y.parentId), G.parentId) {
      const Q = h(G.parentId);
      G.position = {
        x: I.position.x - Q.position.x,
        y: I.position.y - Q.position.y
      }, b(G.parentId, I.id), l.updateNode(I.id, G);
    }
  }, { getEdgesByTarget: g } = Ow(), C = (V) => {
    V.edges.forEach((P) => {
      const I = h(P.target);
      if (I && I.parentId) {
        const Y = g(P.target), K = h(I.parentId);
        if (Y.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
            }
          });
        else {
          let G = !1;
          for (let Q = 0; Q < Y.length; Q++) {
            const W = Y[Q], ce = h(W.source);
            if (ce.parentId || ce.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
            }
          });
        }
      }
    });
  }, w = (V, P) => {
  }, k = (V) => {
  }, N = {}, S = Qn().customNodes;
  if (S)
    for (let V of Object.keys(S))
      N[V] = jd;
  const { nodes: z, edges: H, viewport: L } = je(), R = Qn().onDataChange;
  R && (z.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), H.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), L.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var O = Fw(), A = X(O);
  const E = /* @__PURE__ */ Ve(() => ({ ...Mw, ...N })), _ = /* @__PURE__ */ Ve(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(A, st(
    {
      get nodeTypes() {
        return f(E);
      }
    },
    ri,
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
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return f(_);
      },
      $$events: {
        drop: p,
        dragover: v,
        edgeclick: (V) => {
          J(u, !0), J(c, V.detail.edge, !0);
        }
      },
      children: (V, P) => {
        var I = jw(), Y = be(I);
        vd(Y, {});
        var K = Z(Y, 2);
        cd(K, {});
        var G = Z(K, 2);
        gd(G, {});
        var Q = Z(G, 2);
        {
          var W = (ce) => {
            Lo(ce, {
              children: (se, we) => {
                var ae = Ww(), Ce = Z(X(ae), 4), me = X(Ce);
                const Ne = /* @__PURE__ */ Ve(() => {
                  var ie, U;
                  return (U = (ie = f(c)) == null ? void 0 : ie.data) == null ? void 0 : U.condition;
                });
                mt(me, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(Ne);
                  },
                  onchange: (ie) => {
                    f(c) && d(f(c).id, { condition: ie.target.value });
                  }
                }), q(Ce), q(ae), D(se, ae);
              },
              $$slots: { default: !0 }
            });
          };
          ye(Q, (ce) => {
            f(u) && ce(W);
          });
        }
        D(V, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = Z(A, 2);
  Wd(M, {}), q(O), D(e, O);
  var T = ge({
    get onInit() {
      return s();
    },
    set onInit(V) {
      s(V), m();
    }
  });
  return r(), T;
}
ue(Fd, { onInit: {} }, [], [], !0);
function Uw(e, t) {
  pe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ri.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Tr("tinyflow_options", n()), od(e, {
    fitView: !0,
    children: (i, a) => {
      Fd(i, {
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
customElements.define("tinyflow-component", ue(Uw, { options: {}, onInit: {} }, [], [], !1));
const ob = /* @__PURE__ */ c1({
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
    const n = e, r = d1(null);
    let o = null;
    return f1(() => {
      r.value && (o = new I2({
        ...n,
        element: r.value
      }));
    }), v1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (g1(), p1("div", {
      ref_key: "divRef",
      ref: r,
      class: m1(["tinyflow", a.className]),
      style: h1(a.style)
    }, null, 6));
  }
});
export {
  ob as Tinyflow
};
//# sourceMappingURL=index.js.map
