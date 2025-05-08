import { defineComponent as c1, ref as d1, onMounted as f1, onUnmounted as v1, createElementBlock as g1, openBlock as h1, normalizeStyle as p1, normalizeClass as m1 } from "vue";
var y1 = Object.defineProperty, Kl = (e) => {
  throw TypeError(e);
}, w1 = (e, t, n) => t in e ? y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tt = (e, t, n) => w1(e, typeof t != "symbol" ? t + "" : t, n), Ya = (e, t, n) => t.has(e) || Kl("Cannot " + n), ut = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => t.has(e) ? Kl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oi = (e, t, n, r) => (Ya(e, t, "write to private field"), t.set(e, n), n), x1 = (e, t, n) => (Ya(e, t, "access private method"), n);
const b1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(b1);
let Br = !1, $1 = !1;
function C1() {
  Br = !0;
}
C1();
const Ka = 1, Wa = 2, Wl = 4, _1 = 8, k1 = 16, S1 = 1, M1 = 2, jl = 4, E1 = 8, V1 = 16, Fl = 1, N1 = 2, ja = "[", Fa = "[!", Ga = "]", _r = {}, Ht = Symbol(), H1 = "http://www.w3.org/1999/xhtml", P1 = "http://www.w3.org/2000/svg", T1 = !1;
function Ti(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, z1 = Array.prototype.indexOf, Ua = Array.from, ii = Object.keys, co = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, L1 = Object.prototype, O1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const gt = () => {
};
function D1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, Ul = 4, zi = 8, Qa = 16, Dn = 32, hr = 64, ai = 128, qt = 256, si = 512, Mt = 1024, xn = 2048, er = 4096, Tn = 8192, Li = 16384, A1 = 32768, Xr = 65536, I1 = 1 << 17, R1 = 1 << 19, Jl = 1 << 20, wa = 1 << 21, Yn = Symbol("$state"), es = Symbol("legacy props"), Z1 = Symbol("");
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
function Oi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Pe = !1;
function Rt(e) {
  Pe = e;
}
let Ae;
function St(e) {
  if (e === null)
    throw Oi(), _r;
  return Ae = e;
}
function bn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ae)
  );
}
function q(e) {
  if (Pe) {
    if (/* @__PURE__ */ Sn(Ae) !== null)
      throw Oi(), _r;
    Ae = e;
  }
}
function Te(e = 1) {
  if (Pe) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ae = n;
  }
}
function xa() {
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
  if (t !== L1 && t !== O1)
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
            a(() => /* @__PURE__ */ kt(Ht))
          ), oa(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Ht), oa(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Pn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(an(v ? s[l] : Ht))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Ht ? void 0 : g;
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
          if (d !== void 0 && v !== Ht)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Ht || Reflect.has(s, l);
        if (c !== void 0 || We !== null && (!d || (u = Pn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? an(s[l]) : Ht)), n.set(l, c));
          var v = f(c);
          if (v === Ht)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var b = n.get(p + "");
            b !== void 0 ? J(b, Ht) : p in s && (b = a(() => /* @__PURE__ */ kt(Ht)), n.set(p + "", b));
          }
        v === void 0 ? (!g || (d = Pn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ kt(void 0)), J(
          v,
          a(() => an(u))
        ), n.set(l, v)) : (g = v.v !== Ht, J(
          v,
          a(() => an(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= $.v && J($, h + 1);
          }
          oa(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Ht;
        });
        for (var [u, c] of n)
          c.v !== Ht && !(u in s) && l.push(u);
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
var Pt, Ql, eu, tu;
function ba() {
  if (Pt === void 0) {
    Pt = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    eu = Pn(t, "firstChild").get, tu = Pn(t, "nextSibling").get, As(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), As(n) && (n.__t = void 0);
  }
}
function Ln(e = "") {
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
  if (!Pe)
    return /* @__PURE__ */ vt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(Ln());
  else if (t && n.nodeType !== 3) {
    var r = Ln();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function xe(e, t) {
  if (!Pe) {
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
  let r = Pe ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!Pe)
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
function Nr(e) {
  var t = un | xn, n = Qe !== null && (Qe.f & un) !== 0 ? (
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
  return hu(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
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
  var t = ou(e), n = (Bn || (e.f & qt) !== 0) && e.deps !== null ? er : Mt;
  Gt(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  We === null && Qe === null && X1(), Qe !== null && (Qe.f & qt) !== 0 && We === null && B1(), Vo && q1();
}
function J1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pr(e, t, n, r = !0) {
  var o = We, i = {
    ctx: Ke,
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
  const t = pr(zi, null, !1);
  return Gt(t, Mt), t.teardown = e, t;
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
  const t = pr(hr, e, !0);
  return () => {
    cn(t);
  };
}
function tf(e) {
  const t = pr(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function It(e) {
  return pr(Ul, e, !1);
}
function pe(e, t) {
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
        (n.f & Mt) !== 0 && Gt(n, er), Wr(n) && Ai(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return pr(zi, e, !0);
}
function Se(e, t = [], n = Nr) {
  const r = t.map(n);
  return Kr(() => e(...r.map(f)));
}
function Kr(e, t = 0) {
  return pr(zi | Qa | t, e, !0);
}
function Fn(e, t = !0) {
  return pr(zi | Dn, e, !0, t);
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
    (n.f & hr) !== 0 ? n.parent = null : cn(n, t), n = r;
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
  ), n = !0), lu(e, t && !n), di(e, 0), Gt(e, Li);
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
function Hr(e, t) {
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
    e.f ^= Tn, (e.f & Mt) === 0 && (e.f ^= Mt), Wr(e) && (Gt(e, xn), Ii(e));
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
let go = [], ho = [];
function vu() {
  var e = go;
  go = [], fo(e);
}
function gu() {
  var e = ho;
  ho = [], fo(e);
}
function Eo(e) {
  go.length === 0 && queueMicrotask(vu), go.push(e);
}
function of(e) {
  ho.length === 0 && rf(gu), ho.push(e);
}
function Is() {
  go.length > 0 && vu(), ho.length > 0 && gu();
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
function hu(e) {
  Qe !== null && Qe.f & wa && (Ft === null ? Ft = [e] : Ft.push(e));
}
let _t = null, At = 0, Wt = null;
function af(e) {
  Wt = e;
}
let pu = 1, ci = 0, Bn = !1;
function mu() {
  return ++pu;
}
function Wr(e) {
  var t, n = e.f;
  if ((n & xn) !== 0)
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
    (!o || We !== null && !Bn) && Gt(e, Mt);
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
  return (e.f & Li) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
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
      ) : t === i && (n ? Gt(i, xn) : (i.f & Mt) !== 0 && Gt(i, er), Ii(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = At, o = Wt, i = Qe, a = Bn, s = Ft, l = Ke, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, At = 0, Wt = null, Bn = (c & qt) !== 0 && (mn || !ir || Qe === null), Qe = (c & (Dn | hr)) === 0 ? e : null, Ft = null, Bs(e.ctx), mn = !1, ci++, e.f |= wa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (_t !== null) {
      var g;
      if (di(e, At), v !== null && At > 0)
        for (v.length = At + _t.length, g = 0; g < _t.length; g++)
          v[At + g] = _t[g];
      else
        e.deps = v = _t;
      if (!Bn)
        for (g = At; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && At < v.length && (di(e, At), v.length = At);
    if (Ri() && Wt !== null && !mn && v !== null && (e.f & (un | er | xn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Wt.length; g++)
        yu(
          Wt[g],
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
  if ((t & Li) === 0) {
    Gt(e, Mt);
    var n = We, r = Ke, o = ir;
    We = e, ir = !0;
    try {
      (t & Qa) !== 0 ? nf(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = pu;
      var a = e.deps, s;
      T1 && $1 && e.f & xn;
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
function xu() {
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
      po.clear();
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
      if ((r.f & (Li | Tn)) === 0)
        try {
          Wr(r) && (Ai(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Di(o, r, null, r.ctx);
        }
    }
}
function Ii(e) {
  li || (li = !0, queueMicrotask(xu));
  for (var t = ui = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | Dn)) !== 0) {
      if ((n & Mt) === 0) return;
      t.f ^= Mt;
    }
  }
  lo.push(t);
}
function df(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | hr)) !== 0, i = o && (r & Mt) !== 0;
    if (!i && (r & Tn) === 0) {
      if ((r & Ul) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Mt;
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
    li = !0, xu(), Is();
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
  e, Wr(o) && iu(o)), Vo && po.has(e) ? po.get(e) : e.v;
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
const po = /* @__PURE__ */ new Map();
function Pr(e, t) {
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
  const n = Pr(e);
  return hu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Pr(e);
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
    Vo ? po.set(e, t) : po.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & xn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Gt(e, (e.f & qt) === 0 ? Mt : er)), e.wv = mu(), bu(e, xn), Ri() && We !== null && (We.f & Mt) !== 0 && (We.f & (Dn | hr)) === 0 && (Wt === null ? af([e]) : Wt.push(e));
  }
  return t;
}
function qs(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function bu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ri(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & xn) === 0 && (!r && a === We || (Gt(a, t), (s & (Mt | qt)) !== 0 && ((s & un) !== 0 ? bu(
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
function ge(e, t = !1, n) {
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
    r2: Pr(!1)
  }), os(() => {
    r.d = !0;
  });
}
function he(e) {
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
  return Ke === null && Ti(), Ke.c ?? (Ke.c = new Map(gf(Ke) || void 0));
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
  Pe && /* @__PURE__ */ vt(e) !== null && ts(e);
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
function Mf(e) {
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
      return Mf(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
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
      for (var g, p = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Mo(x)) {
              var [$, ...h] = x;
              $.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch (C) {
          g ? p.push(C) : g = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
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
function ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Lt(e, t) {
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
    if (Pe)
      return Lt(Ae, null), Ae;
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
    if (Pe)
      return Lt(Ae, null), Ae;
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
      Lt(c, d);
    } else
      Lt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!Pe) {
    var t = Ln(e + "");
    return Lt(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== 3 && (n.before(n = Ln()), St(n)), Lt(n, n), n;
}
function Ue() {
  if (Pe)
    return Lt(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ln();
  return e.append(t, n), Lt(t, n), e;
}
function D(e, t) {
  if (Pe) {
    We.nodes_end = Ae, bn();
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
function Ef(e, t) {
  ba(), t.intro = t.intro ?? !1;
  const n = t.target, r = Pe, o = Ae;
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
    ), bn();
    const a = ku(e, { ...t, anchor: i });
    if (Ae === null || Ae.nodeType !== 8 || /** @type {Comment} */
    Ae.data !== Ga)
      throw Oi(), _r;
    return Rt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _r)
      return t.recover === !1 && K1(), ba(), ts(n), Rt(!1), _u(e, t);
    throw a;
  } finally {
    Rt(r), St(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ba();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = bf(g);
        t.addEventListener(g, oo, { passive: p });
        var b = wr.get(g);
        b === void 0 ? (document.addEventListener(g, oo, { passive: p }), wr.set(g, 1)) : wr.set(g, b + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = tf(() => {
    var d = n ?? t.appendChild(Ln());
    return Fn(() => {
      if (i) {
        ge({});
        var v = (
          /** @type {ComponentContext} */
          Ke
        );
        v.c = i;
      }
      o && (r.$$events = o), Pe && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Pe && (We.nodes_end = Ae), i && he();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, oo);
        var p = (
          /** @type {number} */
          wr.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, oo), wr.delete(g)) : wr.set(g, p);
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
  Pe && n === 0 && bn();
  var o = e, i = null, a = null, s = Ht, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (Pe && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ja ? r = 0 : x === Fa ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = xa(), St(o), Rt(!1), p = !0, r = -1);
    }
    s ? (i ? vo(i) : g && (i = Fn(() => g(o))), a && Hr(a, () => {
      a = null;
    })) : (a ? vo(a) : g && (a = Fn(() => g(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), p && Rt(!0);
  };
  Kr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Pe && (o = Ae);
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
function Et(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Wl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Pe ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(u)
    ) : u.appendChild(Ln());
  }
  Pe && bn();
  var c = null, d = !1, v = /* @__PURE__ */ be(() => {
    var g = n();
    return Mo(g) ? g : g == null ? [] : Ua(g);
  });
  Kr(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if (Pe) {
      var x = (
        /** @type {Comment} */
        a.data === Fa
      );
      x !== (p === 0) && (a = xa(), St(a), Rt(!1), b = !0);
    }
    if (Pe) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Ae.nodeType === 8 && /** @type {Comment} */
        Ae.data === Ga) {
          a = /** @type {Comment} */
          Ae, b = !0, Rt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        h = Su(
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
        ), s.items.set(k, h), $ = h;
      }
      p > 0 && St(xa());
    }
    Pe || Hf(g, s, a, o, t, r, n), i !== null && (p === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Hr(c, () => {
      c = null;
    })), b && Rt(!0), f(v);
  }), Pe && (a = Ae);
}
function Hf(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & _1) !== 0, v = (o & (Ka | Wa)) !== 0, g = e.length, p = t.items, b = t.first, x = b, $, h = null, C, w = [], k = [], V, S, z, P;
  if (d)
    for (P = 0; P < g; P += 1)
      V = e[P], S = i(V, P), z = p.get(S), z !== void 0 && ((s = z.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(z));
  for (P = 0; P < g; P += 1) {
    if (V = e[P], S = i(V, P), z = p.get(S), z === void 0) {
      var O = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Su(
        O,
        t,
        h,
        h === null ? t.first : h.next,
        V,
        S,
        P,
        r,
        o,
        a
      ), p.set(S, h), w = [], k = [], x = h.next;
      continue;
    }
    if (v && Pf(z, V, P, o), (z.e.f & Tn) !== 0 && (vo(z.e), d && ((l = z.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(z))), z !== x) {
      if ($ !== void 0 && $.has(z)) {
        if (w.length < k.length) {
          var R = k[0], L;
          h = R.prev;
          var I = w[0], M = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Ys(w[L], R, n);
          for (L = 0; L < k.length; L += 1)
            $.delete(k[L]);
          Zn(t, I.prev, M.next), Zn(t, h, I), Zn(t, M, R), x = R, h = M, P -= 1, w = [], k = [];
        } else
          $.delete(z), Ys(z, x, n), Zn(t, z.prev, z.next), Zn(t, z, h === null ? t.first : h.next), Zn(t, h, z), h = z;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== S; )
        (x.e.f & Tn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      z = x;
    }
    w.push(z), h = z, x = z.next;
  }
  if (x !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); x !== null; )
      (x.e.f & Tn) === 0 && _.push(x), x = x.next;
    var E = _.length;
    if (E > 0) {
      var T = (o & Wl) !== 0 && g === 0 ? n : null;
      if (d) {
        for (P = 0; P < E; P += 1)
          (u = _[P].a) == null || u.measure();
        for (P = 0; P < E; P += 1)
          (c = _[P].a) == null || c.fix();
      }
      Nf(t, _, T, p);
    }
  }
  d && Eo(() => {
    var N;
    if (C !== void 0)
      for (z of C)
        (N = z.a) == null || N.apply();
  }), We.first = t.first && t.first.e, We.last = h && h.e;
}
function Pf(e, t, n, r) {
  (r & Ka) !== 0 && Ca(e.v, t), (r & Wa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ka) !== 0, d = (l & k1) === 0, v = c ? d ? /* @__PURE__ */ oe(o) : Pr(o) : o, g = (l & Wa) === 0 ? a : Pr(a), p = {
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
    return p.e = Fn(() => s(e, v, g, u), Pe), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
      Pe && bn();
      return;
    }
    if (s.nodes_start !== null && (uu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (Pe) {
        Ae.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Oi(), _r;
        Lt(Ae, u), i = St(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = ss(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ vt(d)), Lt(
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
function xt(e, t, n, r, o) {
  var i;
  Pe && bn();
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
  var r = e, o = gt, i;
  Kr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Pe && (r = Ae);
}
function Mu(e, t, n) {
  Pe && bn();
  var r = e, o, i;
  Kr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Xr), Pe && (r = Ae);
}
function zf(e, t, n, r, o, i) {
  let a = Pe;
  Pe && bn();
  var s, l, u = null;
  Pe && Ae.nodeType === 1 && (u = /** @type {Element} */
  Ae, bn());
  var c = (
    /** @type {TemplateNode} */
    Pe ? Ae : e
  ), d;
  Kr(() => {
    const v = t() || null;
    var g = v === "svg" ? P1 : null;
    v !== s && (d && (v === null ? Hr(d, () => {
      d = null, l = null;
    }) : v === l ? vo(d) : cn(d)), v && v !== l && (d = Fn(() => {
      if (u = Pe ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Lt(u, u), r) {
        Pe && Cf(v) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Pe ? /* @__PURE__ */ vt(u) : u.appendChild(Ln())
        );
        Pe && (p === null ? Rt(!1) : St(p)), r(u, p);
      }
      We.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Xr), a && (Rt(!0), St(c));
}
function Je(e, t) {
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
function Eu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Eu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Lf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Eu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Lf(e) : e ?? "";
}
const Ks = [...` 	
\r\f \v\uFEFF`];
function Of(e, t, n) {
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
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === b - 1) {
            if (c !== -1) {
              var g = ia(e.substring(u, c).trim());
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
    return r && (n += Ws(r)), o && (n += Ws(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function bt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Pe || a !== n || a === void 0) {
    var s = Of(n, r, i);
    (!Pe || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
  if (Pe || o !== t) {
    var i = Df(t, r);
    (!Pe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (aa(e, n == null ? void 0 : n[0], r[0]), aa(e, n == null ? void 0 : n[1], r[1], "important")) : aa(e, n, r));
  return r;
}
const to = Symbol("class"), nr = Symbol("style"), Vu = Symbol("is custom element"), Nu = Symbol("is html");
function ar(e) {
  if (Pe) {
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
  Pe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Z1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ut(e, t, n, r, o = !1) {
  var i = Zi(e), a = i[Vu], s = !i[Nu];
  let l = Pe && a;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var v = Hu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      bt(e, g, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
      continue;
    }
    if (C === "style") {
      ft(e, w, t == null ? void 0 : t[nr], n[nr]), u[C] = w, u[nr] = n[nr];
      continue;
    }
    var p = u[C];
    if (w !== p) {
      u[C] = w;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, V = "$$" + C;
          let S = C.slice(2);
          var x = mf(S);
          if (hf(S) && (S = S.slice(0, -7), k.capture = !0), !x && p) {
            if (w != null) continue;
            e.removeEventListener(S, u[V], k), u[V] = null;
          }
          if (w != null)
            if (x)
              e[`__${S}`] = w, jr([S]);
            else {
              let z = function(P) {
                u[C].call(this, P);
              };
              u[V] = Cu(S, e, z, k);
            }
          else x && (e[`__${S}`] = void 0);
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
          var h = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !h)
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
          else h || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && $e(e, $, w);
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
      [Nu]: e.namespaceURI === H1
    })
  );
}
var js = /* @__PURE__ */ new Map();
function Hu(e) {
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
var rr, uo, Uo, Sa, Pu;
const Ma = class {
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
    return r.add(n), ut(this, rr).set(t, r), x1(this, Sa, Pu).call(this).observe(t, ut(this, Uo)), () => {
      var o = ut(this, rr).get(t);
      o.delete(n), o.size === 0 && (ut(this, rr).delete(t), ut(this, uo).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakSet(), Pu = function() {
  return ut(this, uo) ?? oi(this, uo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ma.entries.set(t.target, t);
        for (var n of ut(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Tt(Ma, "entries", /* @__PURE__ */ new WeakMap());
let Rf = Ma;
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
      Eo(() => {
        i && Gs(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Oe(e = !1) {
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
  ), o = Mo(r) ? r.slice() : r == null ? [] : [r];
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
      const a = Mo(i) ? i.slice() : [i], s = qf(
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
const xr = [];
function Kt(e, t) {
  return {
    subscribe: _e(e, t).subscribe
  };
}
function _e(e, t = gt) {
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
  return Kt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = gt;
    const v = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, a, s);
      i ? a(p) : d = typeof p == "function" ? p : gt;
    }, g = o.map(
      (p, b) => cs(
        p,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && v();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, v(), function() {
      fo(g), d(), l = !1;
    };
  });
}
function j(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Bo = !1, Ea = Symbol();
function te(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: gt
  });
  if (r.store !== e && !(Ea in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = gt;
    else {
      var o = !0;
      r.unsubscribe = cs(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Ea in n ? j(e) : f(r.source);
}
function Xf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = gt), e;
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
      co(e, Ea, {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Pr(0) }, Wf);
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
      const i = Pn(o, t);
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
        const o = Pn(r, t);
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
  var o, i = (n & S1) !== 0, a = !Br || (n & M1) !== 0, s = (n & E1) !== 0, l = (n & V1) !== 0, u = !1, c;
  s ? [c, u] = Yf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || es in e, v = s && (((o = Pn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, g = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? g = Cn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && W1(), c = x(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (p = !0, b = !1, S);
    };
  else {
    var h = (i ? Nr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= I1, $ = () => {
      var S = f(h);
      return S !== void 0 && (g = /** @type {V} */
      void 0), S === void 0 ? g : S;
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
  var w = !1, k = /* @__PURE__ */ oe(c), V = /* @__PURE__ */ Nr(() => {
    var S = $(), z = f(k);
    return w ? (w = !1, z) : k.v = S;
  });
  return s && f(V), i || (V.equals = rs), function(S, z) {
    if (arguments.length > 0) {
      const P = z ? f(V) : a && s ? an(S) : S;
      if (!V.equals(P)) {
        if (w = !0, J(k, P), b && g !== void 0 && (g = P), Js(V))
          return S;
        Cn(() => f(V));
      }
      return S;
    }
    return Js(V) ? V.v : f(V);
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
    oi(this, rn, (t.hydrate ? Ef : _u)(t.component, {
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
          var d = (u = Pn(c, s)) == null ? void 0 : u.get;
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
function Lu(e) {
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
  typeof e == "function" ? e = sv(e) : e = Lu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Xt(r, o);
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
function xv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new vi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function bv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
    g = a.call(e, i[s], s, i) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = i[s], u.delete(g)) : n[s] = new vi(e, i[s]);
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
    var c = r[u], d = o[u], v = d.length, g = _v(e.call(c, c && c.__data__, u, r)), p = g.length, b = s[u] = new Array(p), x = a[u] = new Array(p), $ = l[u] = new Array(v);
    n(c, d, b, x, $, g, t);
    for (var h = 0, C = 0, w, k; h < p; ++h)
      if (w = b[h]) {
        for (h >= C && (C = h + 1); !(k = x[C]) && ++C < p; ) ;
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
function Mv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), g, p = 0; p < d; ++p)
      (g = u[p] || c[p]) && (v[p] = g);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Xt(s, this._parents);
}
function Ev() {
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
function Hv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Pv() {
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
function Lv() {
  return !this.node();
}
function Ov(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? Kv : Yv)(e, t, n ?? "")) : Lr(this.node(), e);
}
function Lr(e, t) {
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
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Bu)(this, e);
  };
}
function tg(e, t) {
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function pg(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? hg : typeof t == "function" ? t : ds(t);
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
function Mg(e, t, n) {
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
function Xu(e, t, n) {
  var r = Iu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Vg(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Ng(e, t) {
  return this.each((typeof t == "function" ? Vg : Eg)(e, t));
}
function* Hg() {
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
function Pg() {
  return this;
}
Xt.prototype = No.prototype = {
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
  merge: Mv,
  selection: Pg,
  order: Ev,
  sort: Vv,
  call: Hv,
  nodes: Pv,
  node: Tv,
  size: zv,
  empty: Lv,
  each: Ov,
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
  on: Mg,
  dispatch: Ng,
  [Symbol.iterator]: Hg
};
function jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Yu);
}
function Tg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = Tg(e), t === void 0 && (t = e.currentTarget), t) {
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
const zg = { passive: !1 }, mo = { capture: !0, passive: !1 };
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
function Lg(e) {
  return !e.ctrlKey && !e.button;
}
function Og() {
  return this.parentNode;
}
function Dg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Lg, t = Og, n = Dg, r = Ag, o = {}, i = Bi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", $, zg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var V = C(this, t.call(this, w, k), w, k, "mouse");
      V && (jt(w.view).on("mousemove.drag", p, mo).on("mouseup.drag", b, mo), Ku(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, V("start", w));
    }
  }
  function p(w) {
    if (kr(w), !u) {
      var k = w.clientX - s, V = w.clientY - l;
      u = k * k + V * V > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    jt(w.view).on("mousemove.drag mouseup.drag", null), Wu(w.view, u), kr(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var V = w.changedTouches, S = t.call(this, w, k), z = V.length, P, O;
      for (P = 0; P < z; ++P)
        (O = C(this, S, w, k, V[P].identifier, V[P])) && (la(w), O("start", w, V[P]));
    }
  }
  function $(w) {
    var k = w.changedTouches, V = k.length, S, z;
    for (S = 0; S < V; ++S)
      (z = o[k[S].identifier]) && (kr(w), z("drag", w, k[S]));
  }
  function h(w) {
    var k = w.changedTouches, V = k.length, S, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < V; ++S)
      (z = o[k[S].identifier]) && (la(w), z("end", w, k[S]));
  }
  function C(w, k, V, S, z, P) {
    var O = i.copy(), R = on(P || V, k), L, I, M;
    if ((M = n.call(w, new Na("beforestart", {
      sourceEvent: V,
      target: v,
      identifier: z,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), S)) != null)
      return L = M.x - R[0] || 0, I = M.y - R[1] || 0, function _(E, T, N) {
        var H = R, A;
        switch (E) {
          case "start":
            o[z] = _, A = a++;
            break;
          case "end":
            delete o[z], --a;
          // falls through
          case "drag":
            R = on(N || T, k), A = a;
            break;
        }
        O.call(
          E,
          w,
          new Na(E, {
            sourceEvent: T,
            subject: M,
            target: v,
            identifier: z,
            active: A,
            x: R[0] + L,
            y: R[1] + I,
            dx: R[0] - H[0],
            dy: R[1] - H[1],
            dispatch: O
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
function Ho() {
}
var yo = 0.7, gi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rg = /^#([0-9a-f]{3,8})$/, Zg = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), qg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Bg = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Xg = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Yg = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), Kg = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
vs(Ho, xo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: Wg,
  formatHsl: jg,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function jg() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function xo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zg.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = qg.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Xg.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Fg(e) {
  return e instanceof Ho || (e = xo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Ha(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(zt, Ha, ju(Ho, {
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
  formatHex8: Gg,
  formatRgb: al,
  toString: al
}));
function il() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Gg() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
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
function or(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function Fu(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = xo(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new sn(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? Fu(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(sn, Ug, ju(Ho, {
  brighter(e) {
    return e = e == null ? gi : Math.pow(gi, e), new sn(this.h, this.s, this.l * e, this.opacity);
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
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? Qg(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = eh(t);
  function r(o, i) {
    var a = n((o = Ha(o)).r, (i = Ha(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Uu(o.opacity, i.opacity);
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
var Pa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ca = new RegExp(Pa.source, "g");
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
  var n = Pa.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Pa.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: qn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? nh(l[0].x) : th(t) : (t = l.length, function(u) {
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
function oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ih(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var b = g.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var b = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, v) });
    } else (d !== 1 || v !== 1) && g.push(o(g) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(g) {
      for (var p = -1, b = v.length, x; ++p < b; ) d[(x = v[p]).i] = x.x(g);
      return d.join("");
    };
  };
}
var ah = ec(oh, "px, ", "px)", "deg)"), sh = ec(ih, ", ", ")", ")"), lh = 1e-12;
function dl(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, p = d - l, b = g * g + p * p, x, $;
    if (b < lh)
      $ = Math.log(v / u) / t, x = function(S) {
        return [
          s + S * g,
          l + S * p,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (v * v - u * u + r * b) / (2 * u * n * h), w = (v * v - u * u - r * b) / (2 * v * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), V = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (V - k) / t, x = function(S) {
        var z = S * $, P = dl(k), O = u / (n * h) * (P * ch(t * z + k) - uh(k));
        return [
          s + O * g,
          l + O * p,
          u * P / dl(t * z + k)
        ];
      };
    }
    return x.duration = $ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Or = 0, io = 0, no = 0, tc = 1e3, pi, ao, mi = 0, dr = 0, Yi = 0, bo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gs() {
  return dr || (nc(fh), dr = bo.now() + Yi);
}
function fh() {
  dr = 0;
}
function yi() {
  this._call = this._time = this._next = null;
}
yi.prototype = rc.prototype = {
  constructor: yi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? gs() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : pi = this, ao = this), this._call = e, this._time = n, Ta();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ta());
  }
};
function rc(e, t, n) {
  var r = new yi();
  return r.restart(e, t, n), r;
}
function vh() {
  gs(), ++Or;
  for (var e = pi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function fl() {
  dr = (mi = bo.now()) + Yi, Or = io = 0;
  try {
    vh();
  } finally {
    Or = 0, hh(), dr = 0;
  }
}
function gh() {
  var e = bo.now(), t = e - mi;
  t > tc && (Yi -= t, mi = e);
}
function hh() {
  for (var e, t = pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : pi = n);
  ao = e, Ta(r);
}
function Ta(e) {
  if (!Or) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - bo.now() - Yi)), no && (no = clearInterval(no))) : (no || (mi = bo.now(), no = setInterval(gh, tc)), Or = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Bi("start", "end", "cancel", "interrupt"), mh = [], oc = 0, gl = 1, za = 2, ei = 3, hl = 4, La = 5, ti = 6;
function Ki(e, t, n, r, o, i) {
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
    state: oc
  });
}
function hs(e, t) {
  var n = gn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function Mn(e, t) {
  var n = gn(e, t);
  if (n.state > ei) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function yh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = rc(i, 0, n.time);
  function i(u) {
    n.state = gl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, v, g;
    if (n.state !== gl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === ei) return vl(a);
        g.state === hl ? (g.state = ti, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ti, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ei && (n.state = hl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = za, n.on.call("start", e, e.__data__, n.index, n.group), n.state === za) {
      for (n.state = ei, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = La, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === La && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > za && r.state < La, r.state = ti, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wh(e) {
  return this.each(function() {
    ni(this, e);
  });
}
function xh(e, t) {
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
function bh(e, t, n) {
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
function ps(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function ic(e, t) {
  var n;
  return (typeof t == "number" ? qn : t instanceof xo ? ul : (n = xo(t)) ? (t = n, ul) : rh)(e, t);
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
  var n = Xi(e), r = n === "transform" ? sh : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Eh : Mh)(n, r, ps(this, "attr." + e, t)) : t == null ? (n.local ? _h : Ch)(n) : (n.local ? Sh : kh)(n, r, t));
}
function Nh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Hh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Ph(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hh(e, i)), n;
  }
  return o._value = t, o;
}
function Th(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nh(e, i)), n;
  }
  return o._value = t, o;
}
function zh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? Ph : Th)(r, t));
}
function Lh(e, t) {
  return function() {
    hs(this, e).delay = +t.apply(this, arguments);
  };
}
function Oh(e, t) {
  return t = +t, function() {
    hs(this, e).delay = t;
  };
}
function Dh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Lh : Oh)(t, e)) : gn(this.node(), t).delay;
}
function Ah(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function Ih(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ah : Ih)(t, e)) : gn(this.node(), t).duration;
}
function Zh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
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
    Mn(this, e).ease = n;
  };
}
function Xh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Bh(this._id, e));
}
function Yh(e) {
  typeof e != "function" && (e = Ou(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new On(r, this._parents, this._name, this._id);
}
function Kh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new On(a, this._parents, this._name, this._id);
}
function Wh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jh(e, t, n) {
  var r, o, i = Wh(t) ? hs : Mn;
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
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Ki(u[v], t, n, v, u, gn(c, n)));
  return new On(i, this._parents, t, n);
}
function Qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, p = gn(c, n), b = 0, x = v.length; b < x; ++b)
          (g = v[b]) && Ki(g, t, n, b, v, p);
        i.push(v), a.push(c);
      }
  return new On(i, a, t, n);
}
var ep = No.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
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
function rp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Lr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Lr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Lr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function ip(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Mn(this, e), u = l.on, c = l.value[i] == null ? s || (s = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ap(e, t, n) {
  var r = (e += "") == "transform" ? ah : ic;
  return t == null ? this.styleTween(e, np(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, op(e, r, ps(this, "style." + e, t))).each(ip(this._id, e)) : this.styleTween(e, rp(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? dp(ps(this, "text", e)) : cp(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = sc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = gn(l, t);
        Ki(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new On(r, this._parents, e, n);
}
function mp() {
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
var yp = 0;
function On(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++yp;
}
var Vn = No.prototype;
On.prototype = {
  constructor: On,
  select: Jh,
  selectAll: Qh,
  selectChild: Vn.selectChild,
  selectChildren: Vn.selectChildren,
  filter: Yh,
  merge: Kh,
  selection: tp,
  transition: pp,
  call: Vn.call,
  nodes: Vn.nodes,
  node: Vn.node,
  size: Vn.size,
  empty: Vn.empty,
  each: Vn.each,
  on: Fh,
  attr: Vh,
  attrTween: zh,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Dh,
  duration: Rh,
  ease: qh,
  easeVarying: Xh,
  end: mp,
  [Symbol.iterator]: Vn[Symbol.iterator]
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
  e instanceof On ? (t = e._id, e = e._name) : (t = sc(), (n = xp).time = gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ki(l, e, t, u, a, n || bp(l, t));
  return new On(r, this._parents, e, t);
}
No.prototype.interrupt = wh;
No.prototype.transition = $p;
const jo = (e) => () => e;
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
function _p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function kp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function pl() {
  return this.__zoom || Wi;
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
function uc() {
  var e = _p, t = kp, n = Ep, r = Sp, o = Mp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Bi("start", "zoom", "end"), c, d, v, g = 500, p = 150, b = 0, x = 10;
  function $(M) {
    M.property("__zoom", pl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(M, _, E, T) {
    var N = M.selection ? M.selection() : M;
    N.property("__zoom", pl), M !== N ? k(M, _, E, T) : N.interrupt().each(function() {
      V(this, arguments).event(T).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(M, _, E, T) {
    $.scaleTo(M, function() {
      var N = this.__zoom.k, H = typeof _ == "function" ? _.apply(this, arguments) : _;
      return N * H;
    }, E, T);
  }, $.scaleTo = function(M, _, E, T) {
    $.transform(M, function() {
      var N = t.apply(this, arguments), H = this.__zoom, A = E == null ? w(N) : typeof E == "function" ? E.apply(this, arguments) : E, Y = H.invert(A), K = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(h(H, K), A, Y), N, a);
    }, E, T);
  }, $.translateBy = function(M, _, E, T) {
    $.transform(M, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), a);
    }, null, T);
  }, $.translateTo = function(M, _, E, T, N) {
    $.transform(M, function() {
      var H = t.apply(this, arguments), A = this.__zoom, Y = T == null ? w(H) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Wi.translate(Y[0], Y[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), H, a);
    }, T, N);
  };
  function h(M, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === M.k ? M : new Nn(_, M.x, M.y);
  }
  function C(M, _, E) {
    var T = _[0] - E[0] * M.k, N = _[1] - E[1] * M.k;
    return T === M.x && N === M.y ? M : new Nn(M.k, T, N);
  }
  function w(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function k(M, _, E, T) {
    M.on("start.zoom", function() {
      V(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var N = this, H = arguments, A = V(N, H).event(T), Y = t.apply(N, H), K = E == null ? w(Y) : typeof E == "function" ? E.apply(N, H) : E, G = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), Q = N.__zoom, W = typeof _ == "function" ? _.apply(N, H) : _, ce = l(Q.invert(K).concat(G / Q.k), W.invert(K).concat(G / W.k));
      return function(se) {
        if (se === 1) se = W;
        else {
          var we = ce(se), ae = G / we[2];
          se = new Nn(ae, K[0] - we[0] * ae, K[1] - we[1] * ae);
        }
        A.zoom(null, se);
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
      var _ = jt(this.that).datum();
      u.call(
        M,
        this.that,
        new Cp(M, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        _
      );
    }
  };
  function z(M, ..._) {
    if (!e.apply(this, arguments)) return;
    var E = V(this, _).event(M), T = this.__zoom, N = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), H = on(M);
    if (E.wheel)
      (E.mouse[0][0] !== H[0] || E.mouse[0][1] !== H[1]) && (E.mouse[1] = T.invert(E.mouse[0] = H)), clearTimeout(E.wheel);
    else {
      if (T.k === N) return;
      E.mouse = [H, T.invert(H)], ni(this), E.start();
    }
    ro(M), E.wheel = setTimeout(A, p), E.zoom("mouse", n(C(h(T, N), E.mouse[0], E.mouse[1]), E.extent, a));
    function A() {
      E.wheel = null, E.end();
    }
  }
  function P(M, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var E = M.currentTarget, T = V(this, _, !0).event(M), N = jt(M.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", G, !0), H = on(M, E), A = M.clientX, Y = M.clientY;
    Ku(M.view), da(M), T.mouse = [H, this.__zoom.invert(H)], ni(this), T.start();
    function K(Q) {
      if (ro(Q), !T.moved) {
        var W = Q.clientX - A, ce = Q.clientY - Y;
        T.moved = W * W + ce * ce > b;
      }
      T.event(Q).zoom("mouse", n(C(T.that.__zoom, T.mouse[0] = on(Q, E), T.mouse[1]), T.extent, a));
    }
    function G(Q) {
      N.on("mousemove.zoom mouseup.zoom", null), Wu(Q.view, T.moved), ro(Q), T.event(Q).end();
    }
  }
  function O(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, T = on(M.changedTouches ? M.changedTouches[0] : M, this), N = E.invert(T), H = E.k * (M.shiftKey ? 0.5 : 2), A = n(C(h(E, H), T, N), t.apply(this, _), a);
      ro(M), s > 0 ? jt(this).transition().duration(s).call(k, A, T, M) : jt(this).call($.transform, A, T, M);
    }
  }
  function R(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = M.touches, T = E.length, N = V(this, _, M.changedTouches.length === T).event(M), H, A, Y, K;
      for (da(M), A = 0; A < T; ++A)
        Y = E[A], K = on(Y, this), K = [K, this.__zoom.invert(K), Y.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== K[2] && (N.touch1 = K, N.taps = 0) : (N.touch0 = K, H = !0, N.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (N.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, g)), ni(this), N.start());
    }
  }
  function L(M, ..._) {
    if (this.__zooming) {
      var E = V(this, _).event(M), T = M.changedTouches, N = T.length, H, A, Y, K;
      for (ro(M), H = 0; H < N; ++H)
        A = T[H], Y = on(A, this), E.touch0 && E.touch0[2] === A.identifier ? E.touch0[0] = Y : E.touch1 && E.touch1[2] === A.identifier && (E.touch1[0] = Y);
      if (A = E.that.__zoom, E.touch1) {
        var G = E.touch0[0], Q = E.touch0[1], W = E.touch1[0], ce = E.touch1[1], se = (se = W[0] - G[0]) * se + (se = W[1] - G[1]) * se, we = (we = ce[0] - Q[0]) * we + (we = ce[1] - Q[1]) * we;
        A = h(A, Math.sqrt(se / we)), Y = [(G[0] + W[0]) / 2, (G[1] + W[1]) / 2], K = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (E.touch0) Y = E.touch0[0], K = E.touch0[1];
      else return;
      E.zoom("touch", n(C(A, Y, K), E.extent, a));
    }
  }
  function I(M, ..._) {
    if (this.__zooming) {
      var E = V(this, _).event(M), T = M.changedTouches, N = T.length, H, A;
      for (da(M), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), H = 0; H < N; ++H)
        A = T[H], E.touch0 && E.touch0[2] === A.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === A.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (A = on(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < x)) {
        var Y = jt(this).on("dblclick.zoom");
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
    return arguments.length ? (b = (M = +M) * M, $) : Math.sqrt(b);
  }, $.tapDistance = function(M) {
    return arguments.length ? (x = +M, $) : x;
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
var xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(xi || (xi = {}));
const Oa = {
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
var He;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(He || (He = {}));
const ml = {
  [He.Left]: He.Right,
  [He.Right]: He.Left,
  [He.Top]: He.Bottom,
  [He.Bottom]: He.Top
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
function yl(e, t, n) {
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
const Hp = (e) => "id" in e && "source" in e && "target" in e, Pp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Po = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Tp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : ms(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? bi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ji(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Fi(n);
}, To = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = bi(r);
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
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Co(s, Ir(u)), x = (g ?? 0) * (p ?? 0), $ = i && b > 0;
    (!u.internals.handleBounds || $ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Da = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function zp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Lp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = zp(e, a), l = To(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Op({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Dr.error005());
    else {
      const g = s.measured.width, p = s.measured.height;
      g && p && (d = [
        [l, u],
        [l + g, u + p]
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
    const v = i.has(d.id), g = !v && d.parentId && a.find((p) => p.id === d.parentId);
    (v || g) && a.push(d);
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
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : Po(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, bi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = ms(e) ? e.internals.positionAbsolute : Po(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, gc = (e, t) => Fi(ji(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, xl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
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
function br(e, t) {
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
function Ap(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = br(e, n), o = br(e, t);
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
    const r = br(e.top ?? e.y ?? 0, n), o = br(e.bottom ?? e.y ?? 0, n), i = br(e.left ?? e.x ?? 0, t), a = br(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Ip(e, t, n, r, o, i) {
  const { x: a, y: s } = $i(e, [t, n, r]), { x: l, y: u } = $i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = Ap(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ar(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, g = t / 2 - d * c, p = n / 2 - v * c, b = Ip(e, g, p, c, t, n), x = {
    left: Math.min(b.left - a.left, 0),
    top: Math.min(b.top - a.top, 0),
    right: Math.min(b.right - a.right, 0),
    bottom: Math.min(b.bottom - a.bottom, 0)
  };
  return {
    x: g - x.left + x.right,
    y: p - x.top + x.bottom,
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
function hc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Rp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Zp() {
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
const pc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), qp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Bp = ["INPUT", "SELECT", "TEXTAREA"];
function Xp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Bp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const mc = (e) => "clientX" in e, zn = (e, t) => {
  var n, r;
  const o = mc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
      ...pc(a)
    };
  });
};
function Yp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function $l({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case He.Left:
      return [t - Fo(t - r, i), n];
    case He.Right:
      return [t + Fo(r - t, i), n];
    case He.Top:
      return [t, n - Fo(n - o, i)];
    case He.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function yc({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, curvature: a = 0.25 }) {
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
  }), [d, v, g, p] = Yp({
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
function wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Kp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Wp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ji(bi(e), bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(a, Fi(i)) > 0;
}
const jp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Fp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Hp(e) ? n = { ...e } : n = {
    ...e,
    id: jp(e)
  }, Fp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
  [He.Left]: { x: -1, y: 0 },
  [He.Right]: { x: 1, y: 0 },
  [He.Top]: { x: 0, y: -1 },
  [He.Bottom]: { x: 0, y: 1 }
}, Up = ({ source: e, sourcePosition: t = He.Bottom, target: n }) => t === He.Left || t === He.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Jp({ source: e, sourcePosition: t = He.Bottom, target: n, targetPosition: r = He.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Up({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let g = [], p, b;
  const x = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, C, w, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, b = o.y ?? C;
    const V = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === v ? g = d === "x" ? V : S : g = d === "x" ? S : V;
  } else {
    const V = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? S : V : g = a.y === v ? V : S, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const I = Math.min(i - 1, i - L);
        a[d] === v ? x[d] = (l[d] > e[d] ? -1 : 1) * I : $[d] = (u[d] > n[d] ? -1 : 1) * I;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", I = a[d] === s[L], M = l[L] > u[L], _ = l[L] < u[L];
      (a[d] === 1 && (!I && M || I && _) || a[d] !== 1 && (!I && _ || I && M)) && (g = d === "x" ? V : S);
    }
    const z = { x: l.x + x.x, y: l.y + x.y }, P = { x: u.x + $.x, y: u.y + $.y }, O = Math.max(Math.abs(z.x - g[0].x), Math.abs(P.x - g[0].x)), R = Math.max(Math.abs(z.y - g[0].y), Math.abs(P.y - g[0].y));
    O >= R ? (p = (z.x + P.x) / 2, b = g[0].y) : (p = g[0].x, b = (z.y + P.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], p, b, w, k];
}
function Qp(e, t, n, r) {
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
function _i({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, g, p] = Jp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, $) => {
    let h = "";
    return $ > 0 && $ < c.length - 1 ? h = Qp(c[$ - 1], x, c[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, v, g, p];
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
  const l = (a == null ? void 0 : a.position) || He.Bottom, u = (s == null ? void 0 : s.position) || He.Top, c = _o(n, a, l), d = _o(r, s, u);
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
function _o(e, t, n = He.Left, r = !1) {
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
function Ml(e, t) {
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
const xs = {
  nodeOrigin: [0, 0],
  nodeExtent: wi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, r0 = {
  ...xs,
  checkEquality: !0
};
function bs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function o0(e, t, n) {
  const r = bs(xs, n);
  for (const o of e.values())
    if (o.parentId)
      $s(o, e, t, r);
    else {
      const i = Po(o, r.nodeOrigin), a = Rr(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function xc(e, t, n, r) {
  var o, i;
  const a = bs(r0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = Po(c, a.nodeOrigin), g = Rr(c.extent) ? c.extent : a.nodeExtent, p = vr(v, g, tr(c));
      d = {
        ...a.defaults,
        ...c,
        measured: {
          width: (o = c.measured) == null ? void 0 : o.width,
          height: (i = c.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: bc(c, u),
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = bs(xs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  i0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = a0(e, l, i, a, u), { positionAbsolute: g } = e.internals, p = c !== g.x || d !== g.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : g,
      z: v
    }
  });
}
function bc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function a0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Po(e, n), u = Rr(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = fc(c, s, t));
  const d = bc(e, o), v = t.internals.z ?? 0;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Ir(l), c = gc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = tr(l), g = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), h = (x - v.width) * g[0], C = ($ - v.height) * g[1];
    (p > 0 || b > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + h,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + b
        }
      });
    })), (v.width < s.width || v.height < s.height || p || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (p ? g[0] * p - h : 0),
        height: $ + (b ? g[1] * b - C : 0)
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
    const p = pc(v.nodeElement), b = g.measured.width !== p.width || g.measured.height !== p.height;
    if (p.width && p.height && (b || !g.internals.handleBounds || v.force)) {
      const x = v.nodeElement.getBoundingClientRect(), $ = Rr(g.extent) ? g.extent : i;
      let { positionAbsolute: h } = g.internals;
      g.parentId && g.extent === "parent" ? h = fc(h, p, t.get(g.parentId)) : $ && (h = vr(h, $, p));
      const C = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: h,
          handleBounds: {
            source: bl("source", v.nodeElement, x, c, g.id),
            target: bl("target", v.nodeElement, x, c, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && $s(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
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
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, g = !1;
  function p({ noDragClassName: x, handleSelector: $, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = jt(h);
    function V({ x: O, y: R }, L) {
      const { nodeLookup: I, nodeExtent: M, snapGrid: _, snapToGrid: E, nodeOrigin: T, onNodeDrag: N, onSelectionDrag: H, onError: A, updateNodePositions: Y } = t();
      i = { x: O, y: R };
      let K = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const Q = To(s);
        G = Aa(Q);
      }
      for (const [Q, W] of s) {
        if (!I.has(Q))
          continue;
        let ce = { x: O - W.distance.x, y: R - W.distance.y };
        E && (ce = ys(ce, _));
        let se = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !W.extent) {
          const { positionAbsolute: Ce } = W.internals, me = Ce.x - G.x + M[0][0], Ne = Ce.x + W.measured.width - G.x2 + M[1][0], ie = Ce.y - G.y + M[0][1], U = Ce.y + W.measured.height - G.y2 + M[1][1];
          se = [
            [me, ie],
            [Ne, U]
          ];
        }
        const { position: we, positionAbsolute: ae } = Op({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: I,
          nodeExtent: se,
          nodeOrigin: T,
          onError: A
        });
        K = K || W.position.x !== we.x || W.position.y !== we.y, W.position = we, W.internals.positionAbsolute = ae;
      }
      if (K && (Y(s, !0), L && (r || N || !w && H))) {
        const [Q, W] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        r == null || r(L, s, Q, W), N == null || N(L, Q, W), w || H == null || H(L, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: O, panBy: R, autoPanSpeed: L, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [M, _] = vc(u, c, L);
      (M !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - M / O[2], i.y = (i.y ?? 0) - _ / O[2], await R({ x: M, y: _ }) && V(i, null)), a = requestAnimationFrame(S);
    }
    function z(O) {
      var R;
      const { nodeLookup: L, multiSelectionActive: I, nodesDraggable: M, transform: _, snapGrid: E, snapToGrid: T, selectNodesOnDrag: N, onNodeDragStart: H, onSelectionDragStart: A, unselectNodesAndEdges: Y } = t();
      d = !0, (!N || !C) && !I && w && ((R = L.get(w)) != null && R.selected || Y()), C && N && w && (e == null || e(w));
      const K = fa(O.sourceEvent, { transform: _, snapGrid: E, snapToGrid: T, containerBounds: c });
      if (i = K, s = d0(L, M, K, w), s.size > 0 && (n || H || !w && A)) {
        const [G, Q] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(O.sourceEvent, s, G, Q), H == null || H(O.sourceEvent, G, Q), w || A == null || A(O.sourceEvent, Q);
      }
    }
    const P = Ig().clickDistance(k).on("start", (O) => {
      const { domNode: R, nodeDragThreshold: L, transform: I, snapGrid: M, snapToGrid: _ } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, g = !1, L === 0 && z(O), i = fa(O.sourceEvent, { transform: I, snapGrid: M, snapToGrid: _, containerBounds: c }), u = zn(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: R, transform: L, snapGrid: I, snapToGrid: M, nodeDragThreshold: _, nodeLookup: E } = t(), T = fa(O.sourceEvent, { transform: L, snapGrid: I, snapToGrid: M, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !E.has(w)) && (g = !0), !g) {
        if (!l && R && d && (l = !0, S()), !d) {
          const N = T.xSnapped - (i.x ?? 0), H = T.ySnapped - (i.y ?? 0);
          Math.sqrt(N * N + H * H) > _ && z(O);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && s && d && (u = zn(O.sourceEvent, c), V(T, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: L, onNodeDragStop: I, onSelectionDragStop: M } = t();
        if (L(s, !1), o || I || !w && M) {
          const [_, E] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(O.sourceEvent, s, _, E), I == null || I(O.sourceEvent, _, E), w || M == null || M(O.sourceEvent, E);
        }
      }
    }).filter((O) => {
      const R = O.target;
      return !O.button && (!x || !Vl(R, `.${x}`, h)) && (!$ || Vl(R, $, h));
    });
    v.call(P);
  }
  function b() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
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
const g0 = 250;
function h0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = v0(e, n, t + g0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: g } = _o(u, d, d.position, !0), p = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
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
function p0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: $ = Sc, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: V }) {
  const S = qp(e.target);
  let z = 0, P;
  const { x: O, y: R } = zn(e), L = S == null ? void 0 : S.elementFromPoint(O, R), I = kc(i, L), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !I)
    return;
  const _ = _c(o, I, r, l, t);
  if (!_)
    return;
  let E = zn(e, M), T = !1, N = null, H = !1, A = null;
  function Y() {
    if (!c || !M)
      return;
    const [we, ae] = vc(E, M, V);
    v({ x: we, y: ae }), z = requestAnimationFrame(Y);
  }
  const K = {
    ..._,
    nodeId: o,
    type: I,
    position: _.position
  }, G = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: _o(G, K, He.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: G,
    to: E,
    toHandle: null,
    toPosition: ml[K.position],
    toNode: null
  };
  C(Q);
  let W = Q;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function ce(we) {
    if (!k() || !K) {
      se(we);
      return;
    }
    const ae = w();
    E = zn(we, M), P = h0(zo(E, ae, !1, [1, 1]), n, l, K), T || (Y(), T = !0);
    const Ce = Mc(we, {
      handle: P,
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
    A = Ce.handleDomNode, N = Ce.connection, H = p0(!!P, Ce.isValid);
    const me = {
      // from stays the same
      ...W,
      isValid: H,
      to: P && H ? $i({ x: P.x, y: P.y }, ae) : E,
      toHandle: Ce.toHandle,
      toPosition: H && Ce.toHandle ? Ce.toHandle.position : ml[K.position],
      toNode: Ce.toHandle ? l.get(Ce.toHandle.nodeId) : null
    };
    H && P && W.toHandle && me.toHandle && W.toHandle.type === me.toHandle.type && W.toHandle.nodeId === me.toHandle.nodeId && W.toHandle.id === me.toHandle.id && W.to.x === me.to.x && W.to.y === me.to.y || (C(me), W = me);
  }
  function se(we) {
    (P || A) && N && H && (b == null || b(N));
    const { inProgress: ae, ...Ce } = W, me = {
      ...Ce,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(we, me), i && (h == null || h(we, me)), g(), cancelAnimationFrame(z), T = !1, H = !1, N = null, A = null, S.removeEventListener("mousemove", ce), S.removeEventListener("mouseup", se), S.removeEventListener("touchmove", ce), S.removeEventListener("touchend", se);
  }
  S.addEventListener("mousemove", ce), S.addEventListener("mouseup", se), S.addEventListener("touchmove", ce), S.addEventListener("touchend", se);
}
function Mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = zn(e), b = a.elementFromPoint(g, p), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : v, $ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = kc(void 0, x), C = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), V = x.classList.contains("connectableend");
    if (!C || !h)
      return $;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = S;
    const z = k && V && (n === fr.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    $.isValid = z && u(S), $.toHandle = _c(C, h, w, c, n, !1);
  }
  return $;
}
const y0 = {
  onPointerDown: m0,
  isValid: Mc
};
function w0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const p = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, V = w[2] * Math.pow(2, k);
      t.scaleTo(V);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
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
      ], V = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), z = {
        x: w[0] - V[0] * S,
        y: w[1] - V[1] * S
      }, P = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: w[2]
      }, P, s);
    }, h = uc().on("start", x).on("zoom", d ? $ : null).on("zoom.wheel", v ? p : null);
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
const x0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ga = ({ x: e, y: t, zoom: n }) => Wi.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Ec = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ha = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && Ci() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function b0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = on(c), $ = Vc(c), h = d * Math.pow(2, $);
      r.scaleTo(n, h, x, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === Wn.Vertical ? 0 : c.deltaX * v, p = o === Wn.Horizontal ? 0 : c.deltaY * v;
    !Ci() && c.shiftKey && o !== Wn.Vertical && (g = c.deltaY * v, p = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Gi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
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
    e.usedRightMouseButton = !!(n && Ec(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Gi(i.transform)));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Ec(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && x0(e.prevViewport, a.transform))) {
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
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Cr(c, `${u}-flow__node`) || Cr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Cr(c, s) && c.type === "wheel" || Cr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
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
  }, d = e.getBoundingClientRect(), v = uc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = jt(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Ar(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = g.on("wheel.zoom"), b = g.on("dblclick.zoom");
  v.wheelDelta(Vc);
  function x(L, I) {
    return g ? new Promise((M) => {
      v == null || v.transform(ha(g, I == null ? void 0 : I.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: L, noPanClassName: I, onPaneContextMenu: M, userSelectionActive: _, panOnScroll: E, panOnDrag: T, panOnScrollMode: N, panOnScrollSpeed: H, preventScrolling: A, zoomOnPinch: Y, zoomOnScroll: K, zoomOnDoubleClick: G, zoomActivationKeyPressed: Q, lib: W, onTransformChange: ce }) {
    _ && !c.isZoomingOrPanning && h();
    const se = E && !Q && !_ ? b0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: N,
      panOnScrollSpeed: H,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : $0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", se, { passive: !1 }), !_) {
      const ae = C0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", ae);
      const Ce = _0({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!M,
        onPanZoom: a,
        onTransformChange: ce
      });
      v.on("zoom", Ce);
      const me = k0({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: E,
        onPaneContextMenu: M,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", me);
    }
    const we = S0({
      zoomActivationKeyPressed: Q,
      panOnDrag: T,
      zoomOnScroll: K,
      panOnScroll: E,
      zoomOnDoubleClick: G,
      zoomOnPinch: Y,
      userSelectionActive: _,
      noPanClassName: I,
      noWheelClassName: L,
      lib: W
    });
    v.filter(we), G ? g.on("dblclick.zoom", b) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(L, I, M) {
    const _ = ga(L), E = v == null ? void 0 : v.constrain()(_, I, M);
    return E && await x(E), new Promise((T) => T(E));
  }
  async function w(L, I) {
    const M = ga(L);
    return await x(M, I), new Promise((_) => _(M));
  }
  function k(L) {
    if (g) {
      const I = ga(L), M = g.property("__zoom");
      (M.k !== L.zoom || M.x !== L.x || M.y !== L.y) && (v == null || v.transform(g, I, null, { sync: !0 }));
    }
  }
  function V() {
    const L = g ? lc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, I) {
    return g ? new Promise((M) => {
      v == null || v.scaleTo(ha(g, I == null ? void 0 : I.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function z(L, I) {
    return g ? new Promise((M) => {
      v == null || v.scaleBy(ha(g, I == null ? void 0 : I.duration, () => M(!0)), L);
    }) : Promise.resolve(!1);
  }
  function P(L) {
    v == null || v.scaleExtent(L);
  }
  function O(L) {
    v == null || v.translateExtent(L);
  }
  function R(L) {
    const I = !Hn(L) || L < 0 ? 0 : L;
    v == null || v.clickDistance(I);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: V,
    scaleTo: S,
    scaleBy: z,
    setScaleExtent: P,
    setTranslateExtent: O,
    syncViewport: k,
    setClickDistance: R
  };
}
var Nl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Nl || (Nl = {}));
var E0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(G, "$connectable", n), i = () => te(we, "$connectionRadius", n), a = () => te(ce, "$domNode", n), s = () => te(se, "$nodeLookup", n), l = () => te(W, "$connectionMode", n), u = () => te(me, "$lib", n), c = () => te(Le, "$autoPanOnConnect", n), d = () => te(Me, "$flowId", n), v = () => te(Ce, "$isValidConnectionStore", n), g = () => te(ie, "$onedgecreate", n), p = () => te(fe, "$onConnectAction", n), b = () => te(ve, "$onConnectStartAction", n), x = () => te(de, "$onConnectEndAction", n), $ = () => te(ae, "$viewport", n), h = () => te(it, "$connection", n), C = () => te(Xe, "$edges", n), w = () => te(Ze, "$connectionLookup", n), k = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), O = /* @__PURE__ */ oe(), R = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe();
  let I = y(t, "id", 12, void 0), M = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => He.Top), E = y(t, "style", 12, void 0), T = y(t, "isValidConnection", 12, void 0), N = y(t, "onconnect", 12, void 0), H = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), Y = y(t, "class", 12, void 0);
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
    cancelConnection: Ee,
    updateConnection: F,
    autoPanOnConnect: Le,
    edges: Xe,
    connectionLookup: Ze,
    onconnect: fe,
    onconnectstart: ve,
    onconnectend: de,
    flowId: Me,
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
      cancelConnection: Ee,
      panBy: U,
      onConnect: (Ie) => {
        var De;
        const rt = g() ? g()(Ie) : Ie;
        rt && (Ne(rt), (De = p()) == null || De(Ie));
      },
      onConnectStart: (Ie, De) => {
        var rt;
        (rt = b()) == null || rt(Ie, {
          nodeId: De.nodeId,
          handleId: De.handleId,
          handleType: De.handleType
        });
      },
      onConnectEnd: (Ie, De) => {
        var rt;
        (rt = x()) == null || rt(Ie, De);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = /* @__PURE__ */ oe(null), Ye = /* @__PURE__ */ oe();
  pe(() => ee(M()), () => {
    J(k, M() === "target");
  }), pe(
    () => (ee(A()), o()),
    () => {
      J(V, A() !== void 0 ? A() : o());
    }
  ), pe(() => ee(I()), () => {
    J(S, I() || null);
  }), pe(
    () => (ee(N()), ee(H()), C(), w(), ee(M()), ee(I())),
    () => {
      (N() || H()) && (C(), J(Ye, w().get(`${K}-${M()}${I() ? `-${I()}` : ""}`)));
    }
  ), pe(
    () => (f(ne), f(Ye), ee(H()), ee(N())),
    () => {
      if (f(ne) && !Vp(f(Ye), f(ne))) {
        const ze = f(Ye) ?? /* @__PURE__ */ new Map();
        yl(f(ne), ze, H()), yl(ze, f(ne), N());
      }
      J(ne, f(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), pe(() => h(), () => {
    J(z, !!h().fromHandle);
  }), pe(
    () => (h(), ee(M()), f(S)),
    () => {
      var ze, nt, Ie;
      J(P, ((ze = h().fromHandle) == null ? void 0 : ze.nodeId) === K && ((nt = h().fromHandle) == null ? void 0 : nt.type) === M() && ((Ie = h().fromHandle) == null ? void 0 : Ie.id) === f(S));
    }
  ), pe(
    () => (h(), ee(M()), f(S)),
    () => {
      var ze, nt, Ie;
      J(O, ((ze = h().toHandle) == null ? void 0 : ze.nodeId) === K && ((nt = h().toHandle) == null ? void 0 : nt.type) === M() && ((Ie = h().toHandle) == null ? void 0 : Ie.id) === f(S));
    }
  ), pe(
    () => (l(), h(), ee(M()), f(S)),
    () => {
      var ze, nt, Ie;
      J(R, l() === fr.Strict ? ((ze = h().fromHandle) == null ? void 0 : ze.type) !== M() : K !== ((nt = h().fromHandle) == null ? void 0 : nt.nodeId) || f(S) !== ((Ie = h().fromHandle) == null ? void 0 : Ie.id));
    }
  ), pe(() => (f(O), h()), () => {
    J(L, f(O) && h().isValid);
  }), yt(), Oe();
  var le = E0();
  $e(le, "data-nodeid", K);
  let en;
  var tn = X(le);
  xt(tn, t, "default", {}), q(le), Se(
    (ze, nt) => {
      $e(le, "data-handleid", f(S)), $e(le, "data-handlepos", _()), $e(le, "data-id", `${d() ?? ""}-${K ?? ""}-${(I() || "") ?? ""}-${M() ?? ""}`), en = bt(le, 1, ze, null, en, nt), ft(le, E());
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
        valid: f(L),
        connectingto: f(O),
        connectingfrom: f(P),
        source: !f(k),
        target: f(k),
        connectablestart: f(V),
        connectableend: f(V),
        connectable: f(V),
        connectionindicator: f(V) && (!f(z) || f(R))
      })
    ],
    be
  ), et("mousedown", le, lt), et("touchstart", le, lt), D(e, le);
  var pn = he({
    get id() {
      return I();
    },
    set id(ze) {
      I(ze), m();
    },
    get type() {
      return M();
    },
    set type(ze) {
      M(ze), m();
    },
    get position() {
      return _();
    },
    set position(ze) {
      _(ze), m();
    },
    get style() {
      return E();
    },
    set style(ze) {
      E(ze), m();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(ze) {
      T(ze), m();
    },
    get onconnect() {
      return N();
    },
    set onconnect(ze) {
      N(ze), m();
    },
    get ondisconnect() {
      return H();
    },
    set ondisconnect(ze) {
      H(ze), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(ze) {
      A(ze), m();
    },
    get class() {
      return Y();
    },
    set class(ze) {
      Y(ze), m();
    }
  });
  return r(), pn;
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
  at(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Oe();
  var a = V0(), s = xe(a);
  const l = /* @__PURE__ */ be(() => o() ?? He.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ be(() => i() ?? He.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Se(() => {
    var v;
    return dt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), D(e, a), he({
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
  at(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Oe(), Te();
  var i = N0(), a = xe(i), s = Z(a);
  const l = /* @__PURE__ */ be(() => o() ?? He.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), he({
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
var H0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Oe(), Te();
  var i = H0(), a = xe(i), s = Z(a);
  const l = /* @__PURE__ */ be(() => o() ?? He.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), he({
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
ue(Hc, { data: {}, targetPosition: {} }, [], [], !0);
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
ue(Pc, {}, [], [], !0);
function Hl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Si(e, { target: t, domNode: n }) {
  return Hl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Hl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var P0 = /* @__PURE__ */ re("<div><!></div>");
function Tc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(i, "$domNode", n), { domNode: i } = je();
  Oe();
  var a = P0(), s = X(a);
  xt(s, t, "default", {}), q(a), wt(a, (l, u) => Si == null ? void 0 : Si(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), he(), r();
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
function Lc(e, t) {
  ge(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = zc(), a = ur("svelteflow__edge_id");
  return Oe(), Tc(e, {
    children: (s, l) => {
      var u = T0();
      let c;
      var d = X(u);
      xt(d, t, "default", {}), q(u), Se(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), et("keyup", u, () => {
      }), et("click", u, () => {
        a && i(a);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), he({
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
var z0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), L0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Lo(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  Oe();
  var p = L0(), b = xe(p), x = Z(b);
  {
    var $ = (w) => {
      var k = z0();
      $e(k, "stroke-opacity", 0), $e(k, "stroke-width", g), Se(() => $e(k, "d", r())), D(w, k);
    };
    ye(x, (w) => {
      g && w($);
    });
  }
  var h = Z(x);
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
        children: (k, V) => {
          Te();
          var S = Re();
          Se(() => dt(S, o())), D(k, S);
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
      $e(b, "id", n()), $e(b, "d", r()), bt(b, 0, w), $e(b, "marker-start", l()), $e(b, "marker-end", u()), ft(b, c());
    },
    [
      () => vn(Vt(["svelte-flow__edge-path", v()]))
    ],
    be
  ), D(e, p), he({
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return pe(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(b()), ee(x()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(yc({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), yt(), Oe(), Lo(e, {
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
  }), he({
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
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return pe(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(b()), ee(x()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(_i({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), yt(), Oe(), Lo(e, {
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
  }), he({
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
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ue(
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return pe(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(p()), ee(b())),
    () => {
      ((x) => (J(r, x[0]), J(o, x[1]), J(i, x[2])))(Ia({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), yt(), Oe(), Lo(e, {
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
  }), he({
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
      return v();
    },
    set sourceX(x) {
      v(x), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(x) {
      g(x), m();
    },
    get targetX() {
      return p();
    },
    set targetX(x) {
      p(x), m();
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return pe(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(b()), ee(x()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(_i({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), yt(), Oe(), Lo(e, {
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
  }), he({
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
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
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
  const { subscribe: g, set: p, update: b } = _e([]);
  let x = e, $ = {}, h = !0;
  const C = (S) => {
    const z = xc(S, t, n, {
      elevateNodesOnSelect: h,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return j(i) && z && j(l) && (Lp({
      nodes: t,
      width: j(u),
      height: j(c),
      panZoom: j(l),
      minZoom: j(d),
      maxZoom: j(v)
    }, j(a)).then((P) => {
      var O;
      (O = j(s)) == null || O.resolve(P), s.set(null);
    }), i.set(!1), a.set(void 0)), x = S, p(x), x;
  }, w = (S) => C(S(x)), k = (S) => {
    $ = S;
  }, V = (S) => {
    h = S.elevateNodesOnSelect ?? h;
  };
  return C(x), {
    subscribe: g,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: V
  };
}, R0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = _e([]);
  let s = e, l = {};
  const u = (v) => {
    const g = l ? v.map((p) => ({ ...l, ...p })) : v;
    $c(t, n, g), s = g, i(s);
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
  output: Hc,
  default: ki,
  group: Pc
}, Rc = {
  straight: Dc,
  smoothstep: Oc,
  default: Mi,
  step: Ac
}, Z0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? wi;
  xc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const V = To(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    g = ws(V, n, r, 0.5, 2, 0.1);
  }
  const p = _e(!1), b = _e(void 0), x = _e(null), $ = _e(null), h = _e(500), C = _e(500), w = _e(0.5), k = _e(2);
  return {
    flowId: _e(null),
    nodes: I0(e, s, l, d, v, p, b, x, $, h, C, w, k),
    nodeLookup: Kt(s),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: R0(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
    width: h,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(v),
    translateExtent: _e(wi),
    autoPanOnNodeDrag: _e(!0),
    autoPanOnConnect: _e(!0),
    fitViewQueued: p,
    fitViewOptions: b,
    fitViewResolver: x,
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
    viewport: _e(g),
    connectionMode: _e(fr.Strict),
    domNode: _e(null),
    connection: Kt(Oa),
    connectionLineType: _e(Mr.Bezier),
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
    onerror: _e(Dp),
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
    return u && c && Wp({
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
      zIndex: Kp({
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
    const E = j(s.edges);
    s.edges.set(Gp(_, E));
  }
  const d = (_, E = !1) => {
    var T;
    const N = j(s.nodeLookup);
    for (const [H, A] of _) {
      const Y = (T = N.get(H)) == null ? void 0 : T.internals.userNode;
      Y && (Y.position = A.position, Y.dragging = E);
    }
    s.nodes.update((H) => H);
  };
  function v(_) {
    var E, T, N;
    const H = j(s.nodeLookup), A = j(s.parentLookup), { changes: Y, updatedInternals: K } = l0(_, H, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (K) {
      o0(H, A, { nodeOrigin: i, nodeExtent: a });
      for (const G of Y) {
        const Q = (E = H.get(G.id)) == null ? void 0 : E.internals.userNode;
        if (Q)
          switch (G.type) {
            case "dimensions": {
              const W = { ...Q.measured, ...G.dimensions };
              G.setAttributes && (Q.width = ((T = G.dimensions) == null ? void 0 : T.width) ?? Q.width, Q.height = ((N = G.dimensions) == null ? void 0 : N.height) ?? Q.height), Q.measured = W;
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
  function g(_) {
    const E = j(s.fitViewResolver) ?? Zp();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(E), s.nodes.set(j(s.nodes)), E.promise;
  }
  function p(_, E) {
    const T = j(s.panZoom);
    return T ? T.scaleBy(_, E) : Promise.resolve(!1);
  }
  function b(_) {
    return p(1.2, _);
  }
  function x(_) {
    return p(1 / 1.2, _);
  }
  function $(_) {
    const E = j(s.panZoom);
    E && (E.setScaleExtent([_, j(s.maxZoom)]), s.minZoom.set(_));
  }
  function h(_) {
    const E = j(s.panZoom);
    E && (E.setScaleExtent([j(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const E = j(s.panZoom);
    E && (E.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function w(_) {
    let E = !1;
    return _.forEach((T) => {
      T.selected && (T.selected = !1, E = !0);
    }), E;
  }
  function k(_) {
    var E;
    (E = j(s.panZoom)) == null || E.setClickDistance(_);
  }
  function V(_) {
    w((_ == null ? void 0 : _.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), w((_ == null ? void 0 : _.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const T = j(s.nodes), N = j(s.edges), H = T.filter((G) => G.selected), A = N.filter((G) => G.selected), { nodes: Y, edges: K } = await dc({
        nodesToRemove: H,
        edgesToRemove: A,
        nodes: T,
        edges: N,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (Y.length || K.length) && (s.nodes.update((G) => G.filter((Q) => !Y.some((W) => W.id === Q.id))), s.edges.update((G) => G.filter((Q) => !K.some((W) => W.id === Q.id))), (E = j(s.ondelete)) == null || E({
        nodes: Y,
        edges: K
      }));
    }
  });
  function S(_) {
    const E = j(s.multiselectionKeyPressed);
    s.nodes.update((T) => T.map((N) => {
      const H = _.includes(N.id), A = E && N.selected || H;
      return N.selected = A, N;
    })), E || s.edges.update((T) => T.map((N) => (N.selected = !1, N)));
  }
  function z(_) {
    const E = j(s.multiselectionKeyPressed);
    s.edges.update((T) => T.map((N) => {
      const H = _.includes(N.id), A = E && N.selected || H;
      return N.selected = A, N;
    })), E || s.nodes.update((T) => T.map((N) => (N.selected = !1, N)));
  }
  function P(_) {
    var E;
    const T = (E = j(s.nodes)) == null ? void 0 : E.find((N) => N.id === _);
    if (!T) {
      console.warn("012", Dr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), T.selected ? T.selected && j(s.multiselectionKeyPressed) && V({ nodes: [T], edges: [] }) : S([_]);
  }
  function O(_) {
    const E = j(s.viewport);
    return u0({
      delta: _,
      panZoom: j(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const R = _e(Oa), L = (_) => {
    R.set({ ..._ });
  };
  function I() {
    R.set(Oa);
  }
  function M() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), I();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: q0(s),
    visibleNodes: B0(s),
    connection: Kn([R, s.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: zo(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, E, T]) => t0(_, { defaultColor: E, id: T })),
    initialized: (() => {
      let _ = !1;
      const E = j(s.nodes).length, T = j(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([N, H, A]) => _ || (E === 0 ? _ = A : T === 0 ? _ = A && N : _ = A && N && H, _));
    })(),
    // actions
    syncNodeStores: (_) => O0(s.nodes, _),
    syncEdgeStores: (_) => D0(s.edges, _),
    syncViewport: (_) => A0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: b,
    zoomOut: x,
    fitView: (_) => g(_),
    setMinZoom: $,
    setMaxZoom: h,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: V,
    addSelectedNodes: S,
    addSelectedEdges: z,
    handleNodeSelection: P,
    panBy: O,
    updateConnection: L,
    cancelConnection: I,
    reset: M
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
function Pl(e, t) {
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
  ge(t, !1), Je(e, K0);
  const [n, r] = tt(), o = () => te(N, "$panActivationKeyPressed", n), i = () => te(I, "$minZoom", n), a = () => te(M, "$maxZoom", n), s = () => te(H, "$zoomActivationKeyPressed", n), l = () => te(L, "$selectionRect", n), u = () => te(E, "$translateExtent", n), c = () => te(T, "$lib", n), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), V = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), z = y(t, "panOnScroll", 12), P = y(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: R,
    selectionRect: L,
    minZoom: I,
    maxZoom: M,
    dragging: _,
    translateExtent: E,
    lib: T,
    panActivationKeyPressed: N,
    zoomActivationKeyPressed: H,
    viewportInitialized: A
  } = je(), Y = (W) => O.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Qt(() => {
    fi(A, !0);
  }), pe(() => ee(p()), () => {
    J(d, p() || { x: 0, y: 0, zoom: 1 });
  }), pe(
    () => (o(), ee(S())),
    () => {
      J(v, o() || S());
    }
  ), pe(
    () => (o(), ee(z())),
    () => {
      J(g, o() || z());
    }
  ), yt(), Oe();
  var K = Y0(), G = X(K);
  xt(G, t, "default", {}), q(K), wt(K, (W, ce) => Pl == null ? void 0 : Pl(W, ce), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: _,
    panZoom: R,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: V(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || Wn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: P(),
    onTransformChange: Y
  })), D(e, K);
  var Q = he({
    get initialViewport() {
      return p();
    },
    set initialViewport(W) {
      p(W), m();
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
      return $();
    },
    set onMoveEnd(W) {
      $(W), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(W) {
      h(W), m();
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
      return V();
    },
    set zoomOnPinch(W) {
      V(W), m();
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
      return P();
    },
    set paneClickDistance(W) {
      P(W), m();
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
  ge(t, !1), Je(e, j0);
  const [n, r] = tt(), o = () => te(_, "$panActivationKeyPressed", n), i = () => te(I, "$selectionKeyPressed", n), a = () => te(R, "$selectionRect", n), s = () => te(O, "$elementsSelectable", n), l = () => te(L, "$selectionRectMode", n), u = () => te(T, "$connection", n), c = () => te(S, "$edges", n), d = () => te(V, "$nodeLookup", n), v = () => te(z, "$viewport", n), g = () => te(M, "$selectionMode", n), p = () => te(P, "$dragging", n), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe();
  let h = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = qi(), {
    nodes: k,
    nodeLookup: V,
    edges: S,
    viewport: z,
    dragging: P,
    elementsSelectable: O,
    selectionRect: R,
    selectionRectMode: L,
    selectionKeyPressed: I,
    selectionMode: M,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: E,
    connection: T
  } = je();
  let N = /* @__PURE__ */ oe(), H = null, A = [], Y = !1;
  function K(ie) {
    if (Y || u().inProgress) {
      Y = !1;
      return;
    }
    w("paneclick", { event: ie }), E(), L.set(null);
  }
  function G(ie) {
    var U, Ee;
    if (H = f(N).getBoundingClientRect(), !O || !f(x) || ie.button !== 0 || ie.target !== f(N) || !H)
      return;
    (Ee = (U = ie.target) == null ? void 0 : U.setPointerCapture) == null || Ee.call(U, ie.pointerId);
    const { x: F, y: Le } = zn(ie, H);
    E(), R.set({
      width: 0,
      height: 0,
      startX: F,
      startY: Le,
      x: F,
      y: Le
    });
  }
  function Q(ie) {
    if (!f(x) || !H || !a())
      return;
    Y = !0;
    const U = zn(ie, H), Ee = a().startX ?? 0, F = a().startY ?? 0, Le = {
      ...a(),
      x: U.x < Ee ? U.x : Ee,
      y: U.y < F ? U.y : F,
      width: Math.abs(U.x - Ee),
      height: Math.abs(U.y - F)
    }, Xe = A.map((de) => de.id), Ze = Da(A, c()).map((de) => de.id);
    A = cc(
      d(),
      Le,
      [
        v().x,
        v().y,
        v().zoom
      ],
      g() === xi.Partial,
      !0
    );
    const fe = Da(A, c()).map((de) => de.id), ve = A.map((de) => de.id);
    (Xe.length !== ve.length || ve.some((de) => !Xe.includes(de))) && k.update((de) => de.map(zl(ve))), (Ze.length !== fe.length || fe.some((de) => !Ze.includes(de))) && S.update((de) => de.map(zl(fe))), L.set("user"), R.set(Le);
  }
  function W(ie) {
    var U, Ee;
    ie.button === 0 && ((Ee = (U = ie.target) == null ? void 0 : U.releasePointerCapture) == null || Ee.call(U, ie.pointerId), !f(x) && l() === "user" && ie.target === f(N) && (K == null || K(ie)), R.set(null), A.length > 0 && fi(L, "nodes"), i() && (Y = !1));
  }
  const ce = (ie) => {
    var U;
    if (Array.isArray(f(b)) && (U = f(b)) != null && U.includes(2)) {
      ie.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ie });
  };
  pe(
    () => (o(), ee(h())),
    () => {
      J(b, o() || h());
    }
  ), pe(
    () => (i(), a(), ee(C()), f(b)),
    () => {
      J(x, i() || a() || C() && f(b) !== !0);
    }
  ), pe(
    () => (s(), f(x), l()),
    () => {
      J($, s() && (f(x) || l() === "user"));
    }
  ), yt(), Oe();
  var se = W0(), we = /* @__PURE__ */ Ve(() => f($) ? void 0 : Tl(K, f(N))), ae = /* @__PURE__ */ Ve(() => Tl(ce, f(N)));
  let Ce;
  var me = X(se);
  xt(me, t, "default", {}), q(se), _n(se, (ie) => J(N, ie), () => f(N)), Se(
    (ie) => Ce = bt(se, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, ie),
    [
      () => ({
        draggable: h() === !0 || Array.isArray(h()) && h().includes(0),
        dragging: p(),
        selection: f(x)
      })
    ],
    be
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
  var Ne = he({
    get panOnDrag() {
      return h();
    },
    set panOnDrag(ie) {
      h(ie), m();
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
  ge(t, !1), Je(e, G0);
  const [n, r] = tt(), o = () => te(i, "$viewport", n), { viewport: i } = je();
  Oe();
  var a = F0(), s = X(a);
  xt(s, t, "default", {}), q(a), Se(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), he(), r();
}
ue(Xc, {}, ["default"], [], !0);
function Ei(e, t) {
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
  ge(t, !1);
  const [n, r] = tt(), o = () => te(se, "$nodeTypes", n), i = () => te(Ne, "$elementsSelectable", n), a = () => te(ie, "$nodesDraggable", n), s = () => te(Le, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), V = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), z = y(t, "type", 13, "default"), P = y(t, "isParent", 13, !1), O = y(t, "positionX", 13), R = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), I = y(t, "targetPosition", 13, void 0), M = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), E = y(t, "measuredHeight", 13, void 0), T = y(t, "initialWidth", 13, void 0), N = y(t, "initialHeight", 13, void 0), H = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), Y = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), G = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const ce = je(), {
    nodeTypes: se,
    nodeDragThreshold: we,
    selectNodesOnDrag: ae,
    handleNodeSelection: Ce,
    updateNodeInternals: me,
    elementsSelectable: Ne,
    nodesDraggable: ie
  } = ce;
  let U = /* @__PURE__ */ oe(void 0, !0), Ee = /* @__PURE__ */ oe(null, !0);
  const F = qi(), Le = _e(h());
  let Xe = /* @__PURE__ */ oe(void 0, !0), Ze = /* @__PURE__ */ oe(void 0, !0), fe = /* @__PURE__ */ oe(void 0, !0);
  Tr("svelteflow__node_id", g()), Tr("svelteflow__node_connectable", Le), us(() => {
    var ne;
    f(Ee) && ((ne = V()) == null || ne.unobserve(f(Ee)));
  });
  function ve(ne) {
    $() && (!j(ae) || !x() || j(we) > 0) && Ce(g()), F("nodeclick", { node: v().internals.userNode, event: ne });
  }
  pe(() => ee(z()), () => {
    J(l, z() || "default");
  }), pe(() => (o(), f(l)), () => {
    J(u, !!o()[f(l)]);
  }), pe(
    () => (o(), f(l), ki),
    () => {
      J(c, o()[f(l)] || ki);
    }
  ), pe(
    () => (f(u), ee(z())),
    () => {
      f(u) || console.warn("003", Dr.error003(z()));
    }
  ), pe(
    () => (ee(H()), ee(A()), ee(T()), ee(N()), ee(_()), ee(E())),
    () => {
      J(d, U0({
        width: H(),
        height: A(),
        initialWidth: T(),
        initialHeight: N(),
        measuredWidth: _(),
        measuredHeight: E()
      }));
    }
  ), pe(() => ee(h()), () => {
    Le.set(!!h());
  }), pe(
    () => (f(Xe), f(l), f(Ze), ee(L()), f(fe), ee(I()), ee(g()), f(U)),
    () => {
      (f(Xe) && f(l) !== f(Xe) || f(Ze) && L() !== f(Ze) || f(fe) && I() !== f(fe)) && requestAnimationFrame(() => me(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(U),
            force: !0
          }
        ]
      ]))), J(Xe, f(l)), J(Ze, L()), J(fe, I());
    }
  ), pe(
    () => (ee(V()), f(U), f(Ee), ee(K())),
    () => {
      V() && (f(U) !== f(Ee) || !K()) && (f(Ee) && V().unobserve(f(Ee)), f(U) && V().observe(f(U)), J(Ee, f(U)));
    }
  ), yt(), Oe(!0);
  var de = Ue(), Me = xe(de);
  {
    var it = (ne) => {
      var Ye = J0();
      let le, en;
      var tn = X(Ye);
      const pn = /* @__PURE__ */ be(() => b() ?? !1), ze = /* @__PURE__ */ be(() => $() ?? i() ?? !0), nt = /* @__PURE__ */ be(() => C() ?? !0), Ie = /* @__PURE__ */ be(() => x() ?? a() ?? !0);
      Mu(tn, () => f(c), (De, rt) => {
        rt(De, {
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
            return f(ze);
          },
          get deletable() {
            return f(nt);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return M();
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
            return O();
          },
          get positionAbsoluteY() {
            return R();
          },
          get width() {
            return H();
          },
          get height() {
            return A();
          }
        });
      }), q(Ye), wt(Ye, (De, rt) => Ei == null ? void 0 : Ei(De, rt), () => ({
        nodeId: g(),
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
          $e(Ye, "data-id", g()), le = bt(Ye, 1, De, null, le, rt), en = ft(Ye, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, en, {
            "z-index": M(),
            transform: `translate(${O() ?? ""}px, ${R() ?? ""}px)`,
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
            connectable: h(),
            selectable: $(),
            nopan: x(),
            parent: P()
          })
        ],
        be
      ), D(ne, Ye);
    };
    ye(Me, (ne) => {
      w() || ne(it);
    });
  }
  D(e, de);
  var lt = he({
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
      return b();
    },
    set selected(ne) {
      b(ne), m();
    },
    get draggable() {
      return x();
    },
    set draggable(ne) {
      x(ne), m();
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
      return V();
    },
    set resizeObserver(ne) {
      V(ne), m();
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
      return P();
    },
    set isParent(ne) {
      P(ne), m();
    },
    get positionX() {
      return O();
    },
    set positionX(ne) {
      O(ne), m();
    },
    get positionY() {
      return R();
    },
    set positionY(ne) {
      R(ne), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ne) {
      L(ne), m();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(ne) {
      I(ne), m();
    },
    get zIndex() {
      return M();
    },
    set zIndex(ne) {
      M(ne), m();
    },
    get measuredWidth() {
      return _();
    },
    set measuredWidth(ne) {
      _(ne), m();
    },
    get measuredHeight() {
      return E();
    },
    set measuredHeight(ne) {
      E(ne), m();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(ne) {
      T(ne), m();
    },
    get initialHeight() {
      return N();
    },
    set initialHeight(ne) {
      N(ne), m();
    },
    get width() {
      return H();
    },
    set width(ne) {
      H(ne), m();
    },
    get height() {
      return A();
    },
    set height(ne) {
      A(ne), m();
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
  ge(t, !1), Je(e, e2);
  const [n, r] = tt(), o = () => te(c, "$visibleNodes", n), i = () => te(d, "$nodesDraggable", n), a = () => te(g, "$elementsSelectable", n), s = () => te(v, "$nodesConnectable", n), l = () => te(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: b
  } = je(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const V = k.target.getAttribute("data-id");
      w.set(V, { id: V, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  us(() => {
    x == null || x.disconnect();
  }), Oe();
  var $ = Q0();
  Et($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ be(() => !!f(w).selected), V = /* @__PURE__ */ be(() => !!f(w).hidden), S = /* @__PURE__ */ be(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), z = /* @__PURE__ */ be(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), P = /* @__PURE__ */ be(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), O = /* @__PURE__ */ be(() => f(w).deletable ?? !0), R = /* @__PURE__ */ be(() => l().has(f(w).id)), L = /* @__PURE__ */ be(() => f(w).type ?? "default"), I = /* @__PURE__ */ be(() => f(w).internals.z ?? 0), M = /* @__PURE__ */ be(() => hc(f(w)));
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
        return f(V);
      },
      get draggable() {
        return f(S);
      },
      get selectable() {
        return f(z);
      },
      get connectable() {
        return f(P);
      },
      get deletable() {
        return f(O);
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
        return f(I);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(M);
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
  var h = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), h;
}
ue(Kc, { nodeClickDistance: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(W, "$edgeTypes", n), i = () => te(ce, "$flowId", n), a = () => te(se, "$elementsSelectable", n), s = () => te(Q, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), v = /* @__PURE__ */ oe(void 0, !0);
  let g = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), V = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), z = y(t, "hidden", 13, !1), P = y(t, "label", 13, void 0), O = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), I = y(t, "sourceHandle", 13, void 0), M = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), E = y(t, "sourceY", 13), T = y(t, "targetX", 13), N = y(t, "targetY", 13), H = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), Y = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), G = y(t, "class", 13, "");
  Tr("svelteflow__edge_id", g());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: ce,
    elementsSelectable: se
  } = je(), we = qi(), ae = zc();
  function Ce(F) {
    const Le = s().get(g());
    Le && (ae(g()), we("edgeclick", { event: F, edge: Le }));
  }
  function me(F, Le) {
    const Xe = s().get(g());
    Xe && we(Le, { event: F, edge: Xe });
  }
  pe(() => ee(p()), () => {
    J(l, p() || "default");
  }), pe(
    () => (o(), f(l), Mi),
    () => {
      J(u, o()[f(l)] || Mi);
    }
  ), pe(
    () => (ee(R()), i()),
    () => {
      J(c, R() ? `url('#${Ra(R(), i())}')` : void 0);
    }
  ), pe(
    () => (ee(L()), i()),
    () => {
      J(d, L() ? `url('#${Ra(L(), i())}')` : void 0);
    }
  ), pe(
    () => (ee(V()), a()),
    () => {
      J(v, V() ?? a());
    }
  ), yt(), Oe(!0);
  var Ne = Ue(), ie = xe(Ne);
  {
    var U = (F) => {
      var Le = t2();
      let Xe;
      var Ze = X(Le);
      let fe;
      var ve = X(Ze);
      const de = /* @__PURE__ */ be(() => S() ?? !0);
      Mu(ve, () => f(u), (Me, it) => {
        it(Me, {
          get id() {
            return g();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return _();
          },
          get sourceY() {
            return E();
          },
          get targetX() {
            return T();
          },
          get targetY() {
            return N();
          },
          get sourcePosition() {
            return H();
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
            return P();
          },
          get labelStyle() {
            return O();
          },
          get data() {
            return $();
          },
          get style() {
            return h();
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
            return I();
          },
          get targetHandleId() {
            return M();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), q(Ze), q(Le), Se(
        (Me, it) => {
          Xe = ft(Le, "", Xe, { "z-index": C() }), fe = bt(Ze, 0, Me, null, fe, it), $e(Ze, "data-id", g()), $e(Ze, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => vn(Vt(["svelte-flow__edge", G()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        be
      ), et("click", Ze, Ce), et("contextmenu", Ze, (Me) => {
        me(Me, "edgecontextmenu");
      }), et("mouseenter", Ze, (Me) => {
        me(Me, "edgemouseenter");
      }), et("mouseleave", Ze, (Me) => {
        me(Me, "edgemouseleave");
      }), D(F, Le);
    };
    ye(ie, (F) => {
      z() || F(U);
    });
  }
  D(e, Ne);
  var Ee = he({
    get id() {
      return g();
    },
    set id(F) {
      g(F), m();
    },
    get type() {
      return p();
    },
    set type(F) {
      p(F), m();
    },
    get source() {
      return b();
    },
    set source(F) {
      b(F), m();
    },
    get target() {
      return x();
    },
    set target(F) {
      x(F), m();
    },
    get data() {
      return $();
    },
    set data(F) {
      $(F), m();
    },
    get style() {
      return h();
    },
    set style(F) {
      h(F), m();
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
      return V();
    },
    set selectable(F) {
      V(F), m();
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
      return P();
    },
    set label(F) {
      P(F), m();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(F) {
      O(F), m();
    },
    get markerStart() {
      return R();
    },
    set markerStart(F) {
      R(F), m();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(F) {
      L(F), m();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(F) {
      I(F), m();
    },
    get targetHandle() {
      return M();
    },
    set targetHandle(F) {
      M(F), m();
    },
    get sourceX() {
      return _();
    },
    set sourceX(F) {
      _(F), m();
    },
    get sourceY() {
      return E();
    },
    set sourceY(F) {
      E(F), m();
    },
    get targetX() {
      return T();
    },
    set targetX(F) {
      T(F), m();
    },
    get targetY() {
      return N();
    },
    set targetY(F) {
      N(F), m();
    },
    get sourcePosition() {
      return H();
    },
    set sourcePosition(F) {
      H(F), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(F) {
      A(F), m();
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
  return r(), Ee;
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
  }), Oe(), he({
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
  ge(t, !1);
  const [n, r] = tt(), o = () => te(i, "$markers", n), { markers: i } = je();
  Oe();
  var a = n2();
  Et(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, st(() => f(l)));
  }), q(a), D(e, a), he(), r();
}
ue(Fc, {}, [], [], !0);
var r2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), o2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), i2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Oe();
  var c = i2(), d = X(c);
  {
    var v = (p) => {
      var b = r2();
      Se(() => {
        $e(b, "stroke", l()), $e(b, "stroke-width", u());
      }), D(p, b);
    }, g = (p, b) => {
      {
        var x = ($) => {
          var h = o2();
          Se(() => {
            $e(h, "stroke", l()), $e(h, "stroke-width", u()), $e(h, "fill", l());
          }), D($, h);
        };
        ye(
          p,
          ($) => {
            r() === $o.ArrowClosed && $(x);
          },
          b
        );
      }
    };
    ye(d, (p) => {
      r() === $o.Arrow ? p(v) : p(g, !1);
    });
  }
  return q(c), Se(() => {
    $e(c, "id", n()), $e(c, "markerWidth", `${o()}`), $e(c, "markerHeight", `${i()}`), $e(c, "markerUnits", a()), $e(c, "orient", s());
  }), D(e, c), he({
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
  ge(t, !1);
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
  }), Oe();
  var d = a2(), v = X(d), g = X(v);
  Fc(g, {}), q(v);
  var p = Z(v, 2);
  Et(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ be(() => f(C).selectable ?? i()), k = /* @__PURE__ */ be(() => f(C).type || "default");
    Wc(h, {
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
        edgeclick(V) {
          Be.call(this, t, V);
        },
        edgecontextmenu(V) {
          Be.call(this, t, V);
        },
        edgemouseenter(V) {
          Be.call(this, t, V);
        },
        edgemouseleave(V) {
          Be.call(this, t, V);
        }
      }
    });
  });
  var b = Z(p, 2);
  {
    var x = (h) => {
      jc(h, {
        onMount: () => {
          fi(l, !0);
        },
        onDestroy: () => {
          fi(l, !1);
        }
      });
    };
    ye(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  q(d), D(e, d);
  var $ = he({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
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
  ge(t, !1), Je(e, l2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Ue(), l = xe(s);
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
  return D(e, s), he({
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
  const [n, r] = tt(), o = () => te(a, "$selectionRect", n), i = () => te(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = je();
  Oe();
  const l = /* @__PURE__ */ be(() => !!(o() && i() === "user")), u = /* @__PURE__ */ be(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ be(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ be(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ be(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
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
  }), he(), r();
}
ue(Jc, {}, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const c2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  ge(t, !1), Je(e, c2);
  const [n, r] = tt(), o = () => te(l, "$selectionRectMode", n), i = () => te(c, "$nodeLookup", n), a = () => te(u, "$nodes", n), s = je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = qi();
  let v = /* @__PURE__ */ oe(null);
  function g(h) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  pe(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (J(v, To(i(), { filter: (h) => !!h.selected })), a());
    }
  ), yt(), Oe();
  var b = Ue(), x = xe(b);
  {
    var $ = (h) => {
      var C = u2(), w = X(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(C), wt(C, (k, V) => Ei == null ? void 0 : Ei(k, V), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, V, S, z) => {
          d("nodedrag", { event: k, targetNode: null, nodes: z });
        },
        onDragStart: (k, V, S, z) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: z });
        },
        onDragStop: (k, V, S, z) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: z });
        }
      })), It(() => et("contextmenu", C, g)), It(() => et("click", C, p)), It(() => et("keyup", C, () => {
      })), Se(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), D(h, C);
    };
    ye(x, (h) => {
      o() === "nodes" && f(v) && Hn(f(v).x) && Hn(f(v).y) && h($);
    });
  }
  D(e, b), he(), r();
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
      }, { modifier: d, key: v, callback: g, preventDefault: p, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          p && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), g == null || g(x);
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
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Ci() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Ci() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = je();
  function g(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return g(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : g(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = b(w);
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
  return Oe(), et("blur", Pt, $), et("contextmenu", Pt, $), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Xp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), wt(Pt, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), he({
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
  ge(t, !1);
  const [n, r] = tt(), o = () => te(g, "$connection", n), i = () => te(p, "$connectionLineType", n), a = () => te(d, "$width", n), s = () => te(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = je();
  let b = /* @__PURE__ */ oe(null);
  pe(
    () => (o(), ee(c()), i(), f(b), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: V, toPosition: S } = o(), z = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: V,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Mr.Bezier:
            ((P) => J(b, P[0]))(yc(z));
            break;
          case Mr.Step:
            ((P) => J(b, P[0]))(_i({ ...z, borderRadius: 0 }));
            break;
          case Mr.SmoothStep:
            ((P) => J(b, P[0]))(_i(z));
            break;
          default:
            ((P) => J(b, P[0]))(Ia(z));
        }
      }
    }
  ), yt(), Oe();
  var x = Ue(), $ = xe(x);
  {
    var h = (w) => {
      var k = f2(), V = X(k), S = X(V);
      xt(S, t, "connectionLine", {});
      var z = Z(S);
      {
        var P = (O) => {
          var R = d2();
          Se(() => {
            $e(R, "d", f(b)), ft(R, u());
          }), D(O, R);
        };
        ye(z, (O) => {
          c() || O(P);
        });
      }
      q(V), q(k), Se(
        (O) => {
          $e(k, "width", a()), $e(k, "height", s()), ft(k, l()), bt(V, 0, O);
        },
        [
          () => vn(Vt([
            "svelte-flow__connection",
            Np(o().isValid)
          ]))
        ],
        be
      ), D(w, k);
    };
    ye($, (w) => {
      o().inProgress && w(h);
    });
  }
  D(e, x);
  var C = he({
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
function Oo(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = tt(), a = () => te(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = je();
  pe(() => ee(l()), () => {
    J(s, `${l()}`.split("-"));
  }), yt(), Oe();
  var v = v2();
  let g;
  var p = X(v);
  xt(p, t, "default", {}), q(v), Se(
    (x) => g = Ut(v, g, {
      class: x,
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
    be
  ), D(e, v);
  var b = he({
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
ue(Oo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var g2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  ge(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Oe();
  var o = Ue(), i = xe(o);
  {
    var a = (s) => {
      Oo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = g2();
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
  return D(e, o), he({
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
function Ol(e, t) {
  h2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function p2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function m2(e = "light") {
  return Kt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = p2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var y2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), w2 = /* @__PURE__ */ re("<!> <!>", 1), x2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const b2 = {
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
  ge(t, !1), Je(e, b2);
  const [i, a] = tt(), s = () => te(C(), "$viewport", i), l = () => te(na, "$initialized", i), u = () => te(f(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), V = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), z = y(t, "panActivationKey", 12, void 0), P = y(t, "multiSelectionKey", 12, void 0), O = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), I = y(t, "nodeDragThreshold", 12, void 0), M = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), E = y(t, "deleteKey", 12, void 0), T = y(t, "connectionRadius", 12, void 0), N = y(t, "connectionLineType", 12, void 0), H = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), Y = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), G = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), ce = y(t, "translateExtent", 12, void 0), se = y(t, "nodeExtent", 12, void 0), we = y(t, "onlyRenderVisibleElements", 12, void 0), ae = y(t, "panOnScrollMode", 28, () => Wn.Free), Ce = y(t, "preventScrolling", 12, !0), me = y(t, "zoomOnScroll", 12, !0), Ne = y(t, "zoomOnDoubleClick", 12, !0), ie = y(t, "zoomOnPinch", 12, !0), U = y(t, "panOnScroll", 12, !1), Ee = y(t, "panOnDrag", 12, !0), F = y(t, "selectionOnDrag", 12, void 0), Le = y(t, "autoPanOnConnect", 12, !0), Xe = y(t, "autoPanOnNodeDrag", 12, !0), Ze = y(t, "onerror", 12, void 0), fe = y(t, "ondelete", 12, void 0), ve = y(t, "onedgecreate", 12, void 0), de = y(t, "attributionPosition", 12, void 0), Me = y(t, "proOptions", 12, void 0), it = y(t, "defaultEdgeOptions", 12, void 0), lt = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Ye = y(t, "colorMode", 12, "light"), le = y(t, "onconnect", 12, void 0), en = y(t, "onconnectstart", 12, void 0), tn = y(t, "onconnectend", 12, void 0), pn = y(t, "onbeforedelete", 12, void 0), ze = y(t, "oninit", 12, void 0), nt = y(t, "nodeOrigin", 12, void 0), Ie = y(t, "paneClickDistance", 12, 0), De = y(t, "nodeClickDistance", 12, 0), rt = y(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = y(t, "style", 12, void 0), Yt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ oe(), Ct = /* @__PURE__ */ oe(), Nt = /* @__PURE__ */ oe();
  const yr = s() || h(), ot = vf(Ui) ? je() : X0({
    nodes: j(v()),
    edges: j(g()),
    width: lt(),
    height: ne(),
    fitView: p(),
    nodeOrigin: nt(),
    nodeExtent: se()
  });
  Qt(() => (ot.width.set(f(Ct)), ot.height.set(f(Nt)), ot.domNode.set(f(Ur)), ot.syncNodeStores(v()), ot.syncEdgeStores(g()), ot.syncViewport(C()), p() !== void 0 && ot.fitViewQueued.set(p()), b() && ot.fitViewOptions.set(b()), Ll(ot, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: $(),
    translateExtent: ce(),
    paneClickDistance: Ie()
  }), () => {
    ot.reset();
  }));
  const { initialized: na } = ot;
  let Jr = /* @__PURE__ */ oe(!1);
  pe(
    () => (f(Ct), f(Nt)),
    () => {
      f(Ct) !== void 0 && f(Nt) !== void 0 && (ot.width.set(f(Ct)), ot.height.set(f(Nt)));
    }
  ), pe(
    () => (f(Jr), l(), ee(ze())),
    () => {
      var B;
      !f(Jr) && l() && ((B = ze()) == null || B(), J(Jr, !0));
    }
  ), pe(
    () => (ee(d()), ee(N()), ee(T()), ee(S()), ee(_()), ee(rt()), ee(R()), ee(L()), ee(M()), ee(we()), ee(W()), ee(Le()), ee(Xe()), ee(Ze()), ee(fe()), ee(ve()), ee(H()), ee(I()), ee(le()), ee(en()), ee(tn()), ee(pn()), ee(nt()), Ol),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: N(),
        connectionRadius: T(),
        selectionMode: S(),
        snapGrid: _(),
        defaultMarkerColor: rt(),
        nodesDraggable: R(),
        nodesConnectable: L(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: we(),
        isValidConnection: W(),
        autoPanOnConnect: Le(),
        autoPanOnNodeDrag: Xe(),
        onerror: Ze(),
        ondelete: fe(),
        onedgecreate: ve(),
        connectionMode: H(),
        nodeDragThreshold: I(),
        onconnect: le(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: pn(),
        nodeOrigin: nt()
      };
      Ol(ot, B);
    }
  ), pe(
    () => (ee(w()), ee(k()), ee(x()), ee($()), ee(ce()), ee(Ie())),
    () => {
      Ll(ot, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: $(),
        translateExtent: ce(),
        paneClickDistance: Ie()
      });
    }
  ), pe(
    () => ee(Ye()),
    () => {
      Xf(J(c, m2(Ye())), "$colorModeClass", i);
    }
  ), yt(), Oe();
  var Dt = x2();
  let Ro;
  var Zo = X(Dt);
  ed(Zo, {
    get selectionKey() {
      return V();
    },
    get deleteKey() {
      return E();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return P();
    },
    get zoomActivationKey() {
      return O();
    }
  });
  var qo = Z(Zo, 2);
  const ra = /* @__PURE__ */ be(() => ae() === void 0 ? Wn.Free : ae()), Gd = /* @__PURE__ */ be(() => Ce() === void 0 ? !0 : Ce()), Ud = /* @__PURE__ */ be(() => me() === void 0 ? !0 : me()), Jd = /* @__PURE__ */ be(() => Ne() === void 0 ? !0 : Ne()), Qd = /* @__PURE__ */ be(() => ie() === void 0 ? !0 : ie()), e1 = /* @__PURE__ */ be(() => U() === void 0 ? !1 : U()), t1 = /* @__PURE__ */ be(() => Ee() === void 0 ? !0 : Ee()), n1 = /* @__PURE__ */ be(() => Ie() === void 0 ? 0 : Ie());
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
      const i1 = /* @__PURE__ */ be(() => Ee() === void 0 ? !0 : Ee());
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
          var Ns = w2(), Hs = xe(Ns);
          Xc(Hs, {
            children: (s1, e5) => {
              var Ps = y2(), Ts = xe(Ps);
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
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (qe, t5) => {
                    var Os = Ue(), u1 = xe(Os);
                    xt(u1, t, "connectionLine", {}), D(qe, Os);
                  }
                }
              });
              var Ls = Z(zs, 6);
              Kc(Ls, {
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
              var l1 = Z(Ls, 2);
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
              }), D(s1, Ps);
            },
            $$slots: { default: !0 }
          });
          var a1 = Z(Hs, 2);
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
      return Me();
    },
    get position() {
      return de();
    }
  });
  var r1 = Z(Vs, 2);
  xt(r1, t, "default", {}), q(Dt), _n(Dt, (B) => J(Ur, B), () => f(Ur)), Se(
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
    be
  ), Fs(Dt, "clientWidth", (B) => J(Ct, B)), Fs(Dt, "clientHeight", (B) => J(Nt, B)), et("dragover", Dt, function(B) {
    Be.call(this, t, B);
  }), et("drop", Dt, function(B) {
    Be.call(this, t, B);
  }), D(e, Dt);
  var o1 = he({
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
      return g();
    },
    set edges(B) {
      g(B), m();
    },
    get fitView() {
      return p();
    },
    set fitView(B) {
      p(B), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(B) {
      b(B), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(B) {
      x(B), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(B) {
      $(B), m();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), m();
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
      return V();
    },
    set selectionKey(B) {
      V(B), m();
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
      return P();
    },
    set multiSelectionKey(B) {
      P(B), m();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(B) {
      O(B), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(B) {
      R(B), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(B) {
      L(B), m();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(B) {
      I(B), m();
    },
    get elementsSelectable() {
      return M();
    },
    set elementsSelectable(B) {
      M(B), m();
    },
    get snapGrid() {
      return _();
    },
    set snapGrid(B) {
      _(B), m();
    },
    get deleteKey() {
      return E();
    },
    set deleteKey(B) {
      E(B), m();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(B) {
      T(B), m();
    },
    get connectionLineType() {
      return N();
    },
    set connectionLineType(B) {
      N(B), m();
    },
    get connectionMode() {
      return H();
    },
    set connectionMode(B) {
      H(B), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(B) {
      A(B), m();
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
      return Ee();
    },
    set panOnDrag(B) {
      Ee(B), m();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(B) {
      F(B), m();
    },
    get autoPanOnConnect() {
      return Le();
    },
    set autoPanOnConnect(B) {
      Le(B), m();
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
      return Me();
    },
    set proOptions(B) {
      Me(B), m();
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
      return pn();
    },
    set onbeforedelete(B) {
      pn(B), m();
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
  Tr(Ui, { getStore: () => l }), us(() => {
    l.reset();
  }), Oe();
  var u = Ue(), c = xe(u);
  return xt(c, t, "default", {}), D(e, u), he({
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
  ge(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Oe();
  var c = $2();
  let d;
  var v = X(c);
  return xt(v, t, "default", { class: "button-svg" }), q(c), Se(
    (g) => d = Ut(c, d, {
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
      () => Vt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), et("click", c, function(g) {
    Be.call(this, t, g);
  }), D(e, c), he({
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
var M2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = M2();
  D(e, t);
}
ue(ud, {}, [], [], !0);
var E2 = /* @__PURE__ */ re("<!> <!>", 1), V2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(N, "$nodesDraggable", n), i = () => te(H, "$nodesConnectable", n), a = () => te(A, "$elementsSelectable", n), s = () => te(_, "$viewport", n), l = () => te(E, "$minZoom", n), u = () => te(T, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), V = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), z = y(t, "style", 12, void 0), P = y(t, "orientation", 12, "vertical"), O = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: I,
    fitView: M,
    viewport: _,
    minZoom: E,
    maxZoom: T,
    nodesDraggable: N,
    nodesConnectable: H,
    elementsSelectable: A
  } = je(), Y = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: V()
  }, K = () => {
    L();
  }, G = () => {
    I();
  }, Q = () => {
    M(O());
  }, W = () => {
    J(c, !f(c)), N.set(f(c)), H.set(f(c)), A.set(f(c));
  };
  pe(
    () => (o(), i(), a()),
    () => {
      J(c, o() || i() || a());
    }
  ), pe(() => (s(), l()), () => {
    J(d, s().zoom <= l());
  }), pe(() => (s(), u()), () => {
    J(v, s().zoom >= u());
  }), pe(() => ee(P()), () => {
    J(g, P() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), Oe();
  const ce = /* @__PURE__ */ be(() => Vt([
    "svelte-flow__controls",
    f(g),
    R()
  ])), se = /* @__PURE__ */ be(() => S() ?? "Svelte Flow controls");
  Oo(e, {
    get class() {
      return f(ce);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(se);
    },
    get style() {
      return z();
    },
    children: (ae, Ce) => {
      var me = V2(), Ne = xe(me);
      xt(Ne, t, "before", {});
      var ie = Z(Ne, 2);
      {
        var U = (ve) => {
          var de = E2(), Me = xe(de);
          so(Me, st(
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
          var it = Z(Me, 2);
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
          b() && ve(U);
        });
      }
      var Ee = Z(ie, 2);
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
              children: (de, Me) => {
                sd(de);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Ee, (ve) => {
          x() && ve(F);
        });
      }
      var Le = Z(Ee, 2);
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
              children: (de, Me) => {
                var it = Ue(), lt = xe(it);
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
        ye(Le, (ve) => {
          $() && ve(Xe);
        });
      }
      var Ze = Z(Le, 2);
      xt(Ze, t, "default", {});
      var fe = Z(Ze, 2);
      xt(fe, t, "after", {}), D(ae, me);
    },
    $$slots: { default: !0 }
  });
  var we = he({
    get position() {
      return p();
    },
    set position(ae) {
      p(ae), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ae) {
      b(ae), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ae) {
      x(ae), m();
    },
    get showLock() {
      return $();
    },
    set showLock(ae) {
      $(ae), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ae) {
      h(ae), m();
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
      return V();
    },
    set buttonBorderColor(ae) {
      V(ae), m();
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
      return P();
    },
    set orientation(ae) {
      P(ae), m();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(ae) {
      O(ae), m();
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
  ge(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Oe();
  var o = N2();
  return Se(
    (i) => {
      $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), bt(o, 0, i);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    be
  ), D(e, o), he({
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
var H2 = /* @__PURE__ */ ke("<path></path>");
function fd(e, t) {
  ge(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Oe();
  var a = H2();
  return Se(
    (s) => {
      $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), bt(a, 0, s);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    be
  ), D(e, a), he({
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
const P2 = {
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
  ge(t, !1), Je(e, z2);
  const [n, r] = tt(), o = () => te(k, "$flowId", n), i = () => te(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => jn.Dots), g = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = je(), V = p() || P2[v()], S = v() === jn.Dots, z = v() === jn.Cross, P = Array.isArray(g()) ? g() : [g(), g()];
  pe(
    () => (o(), ee(d())),
    () => {
      J(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), pe(() => i(), () => {
    J(s, [
      P[0] * i().zoom || 1,
      P[1] * i().zoom || 1
    ]);
  }), pe(() => i(), () => {
    J(l, V * i().zoom);
  }), pe(() => (f(l), f(s)), () => {
    J(u, z ? [f(l), f(l)] : f(s));
  }), pe(
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
  ), yt(), Oe();
  var O = T2();
  let R;
  var L = X(O), I = X(L);
  {
    var M = (N) => {
      const H = /* @__PURE__ */ be(() => f(l) / 2);
      dd(N, {
        get radius() {
          return f(H);
        },
        get class() {
          return h();
        }
      });
    }, _ = (N) => {
      fd(N, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    ye(I, (N) => {
      S ? N(M) : N(_, !1);
    });
  }
  q(L);
  var E = Z(L);
  q(O), Se(
    (N) => {
      bt(O, 0, N, "svelte-1r7pe8d"), R = ft(O, "", R, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": $()
      }), $e(L, "id", f(a)), $e(L, "x", i().x % f(s)[0]), $e(L, "y", i().y % f(s)[1]), $e(L, "width", f(s)[0]), $e(L, "height", f(s)[1]), $e(L, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), $e(E, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Vt(["svelte-flow__background", C()]))
    ],
    be
  ), D(e, O);
  var T = he({
    get id() {
      return d();
    },
    set id(N) {
      d(N), m();
    },
    get variant() {
      return v();
    },
    set variant(N) {
      v(N), m();
    },
    get gap() {
      return g();
    },
    set gap(N) {
      g(N), m();
    },
    get size() {
      return p();
    },
    set size(N) {
      p(N), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(N) {
      b(N), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(N) {
      x(N), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(N) {
      $(N), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(N) {
      h(N), m();
    },
    get class() {
      return C();
    },
    set class(N) {
      C(N), m();
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
var L2 = /* @__PURE__ */ ke("<rect></rect>");
function gd(e, t) {
  ge(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Oe();
  var g = L2();
  let p;
  return Se(
    (b, x) => {
      p = bt(g, 0, b, null, p, x), $e(g, "x", n()), $e(g, "y", r()), $e(g, "rx", a()), $e(g, "ry", a()), $e(g, "width", o()), $e(g, "height", i()), ft(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(g, "shape-rendering", l());
    },
    [
      () => vn(Vt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    be
  ), D(e, g), he({
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
      return v();
    },
    set class(b) {
      v(b), m();
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
const pa = (e) => e instanceof Function ? e : () => e;
var O2 = /* @__PURE__ */ ke("<title> </title>"), D2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function hd(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(Ee, "$flowId", n), i = () => te(Ne, "$viewport", n), a = () => te(ie, "$containerWidth", n), s = () => te(U, "$containerHeight", n), l = () => te(me, "$nodeLookup", n), u = () => te(Ce, "$nodes", n), c = () => te(F, "$panZoom", n), d = () => te(Le, "$translateExtent", n), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe();
  let P = y(t, "position", 12, "bottom-right"), O = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), I = y(t, "nodeClass", 12, ""), M = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), E = y(t, "bgColor", 12, void 0), T = y(t, "maskColor", 12, void 0), N = y(t, "maskStrokeColor", 12, void 0), H = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), Y = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), G = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), ce = y(t, "style", 12, ""), se = y(t, "class", 12, "");
  const we = 200, ae = 150, {
    nodes: Ce,
    nodeLookup: me,
    viewport: Ne,
    width: ie,
    height: U,
    flowId: Ee,
    panZoom: F,
    translateExtent: Le
  } = je(), Xe = L() === void 0 ? void 0 : pa(L()), Ze = pa(R()), fe = pa(I()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), de = `svelte-flow__minimap-desc-${o()}`;
  let Me = /* @__PURE__ */ oe(f(v));
  const it = () => f($);
  pe(
    () => (i(), a(), s()),
    () => {
      J(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), pe(
    () => (l(), f(v), u()),
    () => {
      J(Me, l().size > 0 ? gc(To(l(), { filter: (le) => !le.hidden }), f(v)) : f(v)), u();
    }
  ), pe(() => ee(A()), () => {
    J(g, A() ?? we);
  }), pe(() => ee(Y()), () => {
    J(p, Y() ?? ae);
  }), pe(
    () => (f(Me), f(g)),
    () => {
      J(b, f(Me).width / f(g));
    }
  ), pe(
    () => (f(Me), f(p)),
    () => {
      J(x, f(Me).height / f(p));
    }
  ), pe(
    () => (f(b), f(x)),
    () => {
      J($, Math.max(f(b), f(x)));
    }
  ), pe(() => (f($), f(g)), () => {
    J(h, f($) * f(g));
  }), pe(
    () => (f($), f(p)),
    () => {
      J(C, f($) * f(p));
    }
  ), pe(() => f($), () => {
    J(w, 5 * f($));
  }), pe(
    () => (f(Me), f(h), f(w)),
    () => {
      J(k, f(Me).x - (f(h) - f(Me).width) / 2 - f(w));
    }
  ), pe(
    () => (f(Me), f(C), f(w)),
    () => {
      J(V, f(Me).y - (f(C) - f(Me).height) / 2 - f(w));
    }
  ), pe(() => (f(h), f(w)), () => {
    J(S, f(h) + f(w) * 2);
  }), pe(() => (f(C), f(w)), () => {
    J(z, f(C) + f(w) * 2);
  }), yt(), Oe();
  const lt = /* @__PURE__ */ be(() => ce() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), ne = /* @__PURE__ */ be(() => Vt(["svelte-flow__minimap", se()]));
  Oo(e, {
    get position() {
      return P();
    },
    get style() {
      return f(lt);
    },
    get class() {
      return f(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (le, en) => {
      var tn = Ue(), pn = xe(tn);
      {
        var ze = (nt) => {
          var Ie = D2();
          $e(Ie, "aria-labelledby", de);
          let De;
          var rt = X(Ie);
          {
            var nn = (Ct) => {
              var Nt = O2();
              $e(Nt, "id", de);
              var yr = X(Nt, !0);
              q(Nt), Se(() => dt(yr, O())), D(Ct, Nt);
            };
            ye(rt, (Ct) => {
              O() && Ct(nn);
            });
          }
          var Yt = Z(rt);
          Et(Yt, 1, u, (Ct) => Ct.id, (Ct, Nt) => {
            var yr = Ue();
            const ot = /* @__PURE__ */ be(() => l().get(f(Nt).id));
            var na = xe(yr);
            {
              var Jr = (Dt) => {
                const Ro = /* @__PURE__ */ be(() => tr(f(ot))), Zo = /* @__PURE__ */ be(() => Xe == null ? void 0 : Xe(f(ot))), qo = /* @__PURE__ */ be(() => Ze(f(ot))), ra = /* @__PURE__ */ be(() => fe(f(ot)));
                gd(Dt, st(
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
                      return M();
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
                f(ot) && hc(f(ot)) && Dt(Jr);
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
            $e(Ie, "width", f(g)), $e(Ie, "height", f(p)), $e(Ie, "viewBox", `${f(k) ?? ""} ${f(V) ?? ""} ${f(S) ?? ""} ${f(z) ?? ""}`), De = ft(Ie, "", De, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": N(),
              "--xy-minimap-mask-stroke-width-props": H() ? H() * f($) : void 0
            }), $e(Ur, "d", `M${f(k) - f(w)},${f(V) - f(w)}h${f(S) + f(w) * 2}v${f(z) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), D(nt, Ie);
        };
        ye(pn, (nt) => {
          c() && nt(ze);
        });
      }
      D(le, tn);
    },
    $$slots: { default: !0 }
  });
  var Ye = he({
    get position() {
      return P();
    },
    set position(le) {
      P(le), m();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(le) {
      O(le), m();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(le) {
      R(le), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(le) {
      L(le), m();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(le) {
      I(le), m();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(le) {
      M(le), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(le) {
      _(le), m();
    },
    get bgColor() {
      return E();
    },
    set bgColor(le) {
      E(le), m();
    },
    get maskColor() {
      return T();
    },
    set maskColor(le) {
      T(le), m();
    },
    get maskStrokeColor() {
      return N();
    },
    set maskStrokeColor(le) {
      N(le), m();
    },
    get maskStrokeWidth() {
      return H();
    },
    set maskStrokeWidth(le) {
      H(le), m();
    },
    get width() {
      return A();
    },
    set width(le) {
      A(le), m();
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
const Al = (e) => Pp(e);
function Ot() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: $ } = je(), h = (k) => {
    var V, S;
    const z = j(p), P = Al(k) ? k : z.get(k.id), O = P.parentId ? Rp(P.position, P.measured, P.parentId, z, j(b)) : P.position, R = {
      ...P,
      position: O,
      width: ((V = P.measured) == null ? void 0 : V.width) ?? P.width,
      height: ((S = P.measured) == null ? void 0 : S.height) ?? P.height
    };
    return Ir(R);
  }, C = (k, V, S = { replace: !1 }) => {
    var z;
    const P = (z = j(p).get(k)) == null ? void 0 : z.internals.userNode;
    if (!P)
      return;
    const O = typeof V == "function" ? V(P) : V;
    S.replace ? d.update((R) => R.map((L) => L.id === k ? Al(O) ? O : { ...L, ...O } : L)) : (Object.assign(P, O), d.update((R) => R));
  }, w = (k) => j(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var V;
      return (V = w(k)) == null ? void 0 : V.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? j(d) : Il(j(p), k),
    getEdge: (k) => j(x).get(k),
    getEdges: (k) => k === void 0 ? j(v) : Il(j(x), k),
    setZoom: (k, V) => {
      const S = j(c);
      return S ? S.scaleTo(k, { duration: V == null ? void 0 : V.duration }) : Promise.resolve(!1);
    },
    getZoom: () => j(i).zoom,
    setViewport: async (k, V) => {
      const S = j(i), z = j(c);
      return z ? (await z.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(i),
    setCenter: async (k, V, S) => {
      const z = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : j(u), P = j(c);
      return P ? (await P.setViewport({
        x: j(a) / 2 - k * z,
        y: j(s) / 2 - V * z,
        zoom: z
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, V) => {
      const S = j(c);
      if (!S)
        return Promise.resolve(!1);
      const z = ws(k, j(a), j(s), j(l), j(u), (V == null ? void 0 : V.padding) ?? 0.1);
      return await S.setViewport(z, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, V = !0, S) => {
      const z = xl(k), P = z ? k : h(k);
      return P ? (S || j(d)).filter((O) => {
        const R = j(p).get(O.id);
        if (!R || !z && O.id === k.id)
          return !1;
        const L = Ir(R), I = Co(L, P);
        return V && I > 0 || I >= P.width * P.height;
      }) : [];
    },
    isNodeIntersecting: (k, V, S = !0) => {
      const z = xl(k) ? k : h(k);
      if (!z)
        return !1;
      const P = Co(z, V);
      return S && P > 0 || P >= z.width * z.height;
    },
    deleteElements: async ({ nodes: k = [], edges: V = [] }) => {
      const { nodes: S, edges: z } = await dc({
        nodesToRemove: k,
        edgesToRemove: V,
        nodes: j(d),
        edges: j(v),
        onBeforeDelete: j(r)
      });
      return S && d.update((P) => P.filter((O) => !S.some(({ id: R }) => R === O.id))), z && v.update((P) => P.filter((O) => !z.some(({ id: R }) => R === O.id))), {
        deletedNodes: S,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (k, V = { snapToGrid: !0 }) => {
      const S = j(g);
      if (!S)
        return k;
      const z = V.snapToGrid ? j(o) : !1, { x: P, y: O, zoom: R } = j(i), { x: L, y: I } = S.getBoundingClientRect(), M = {
        x: k.x - L,
        y: k.y - I
      };
      return zo(M, [P, O, R], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const V = j(g);
      if (!V)
        return k;
      const { x: S, y: z, zoom: P } = j(i), { x: O, y: R } = V.getBoundingClientRect(), L = $i(k, [S, z, P]);
      return {
        x: L.x + O,
        y: L.y + R
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
    updateNodeData: (k, V, S) => {
      var z;
      const P = (z = j(p).get(k)) == null ? void 0 : z.internals.userNode;
      if (!P)
        return;
      const O = typeof V == "function" ? V(P) : V;
      P.data = S != null && S.replace ? O : { ...P.data, ...O }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const V = j(p), S = j(b);
      return Tp(k, { nodeLookup: V, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: V, nodeId: S }) => {
      var z;
      return Array.from(((z = j($).get(`${S}-${k}-${V ?? null}`)) == null ? void 0 : z.values()) ?? []);
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
function pd(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => te(C, "$nodes", n), i = () => te(h, "$nodeLookup", n), a = () => te($, "$viewport", n), s = () => te(x, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: $, nodeLookup: h, nodes: C } = je(), { getNodesBounds: w } = Ot(), k = ur("svelteflow__node_id");
  let V = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe([]), z = p() !== void 0 ? p() : 10, P = v() !== void 0 ? v() : He.Top, O = g() !== void 0 ? g() : "center";
  pe(
    () => (o(), ee(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      J(S, _.reduce(
        (E, T) => {
          const N = i().get(T);
          return N && E.push(N), E;
        },
        []
      ));
    }
  ), pe(
    () => (f(S), a()),
    () => {
      const _ = w(f(S));
      _ && J(V, n0(_, a(), P, z, O));
    }
  ), pe(() => f(S), () => {
    J(l, f(S).length === 0 ? 1 : Math.max(...f(S).map((_) => (_.internals.z || 5) + 1)));
  }), pe(() => o(), () => {
    J(u, o().filter((_) => _.selected).length);
  }), pe(
    () => (ee(b()), f(S), f(u)),
    () => {
      J(c, typeof b() == "boolean" ? b() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), yt(), Oe();
  var R = Ue(), L = xe(R);
  {
    var I = (_) => {
      var E = A2();
      let T;
      var N = X(E);
      xt(N, t, "default", {}), q(E), wt(E, (H, A) => Si == null ? void 0 : Si(H, A), () => ({ domNode: s() })), Se(
        (H) => {
          $e(E, "data-id", H), T = ft(E, "", T, {
            position: "absolute",
            transform: f(V),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((H, A) => `${H}${A.id} `, "").trim()
        ],
        be
      ), D(_, E);
    };
    ye(L, (_) => {
      s() && f(c) && f(S) && _(I);
    });
  }
  D(e, R);
  var M = he({
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
      return g();
    },
    set align(_) {
      g(_), m();
    },
    get offset() {
      return p();
    },
    set offset(_) {
      p(_), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(_) {
      b(_), m();
    }
  });
  return r(), M;
}
ue(
  pd,
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
  ge(t, !0);
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
  return cr(a, () => n() ?? gt), q(o), Se(() => i = Ut(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), he({
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
  ge(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = q2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
ue(md, {}, [], [], !0);
var B2 = /* @__PURE__ */ re("<input>");
function pt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = B2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
ue(pt, {}, [], [], !0);
var X2 = /* @__PURE__ */ re("<textarea></textarea>");
function mt(e, t) {
  ge(t, !0);
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
  })), D(e, o), he({
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
  ge(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Oe();
  var l = K2();
  let u;
  return Et(l, 5, o, zr, (c, d, v) => {
    var g = Y2();
    $e(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = X(g);
    {
      var b = ($) => {
        var h = Re();
        Se(() => dt(h, f(d).label)), D($, h);
      }, x = ($) => {
        var h = Ue(), C = xe(h);
        cr(C, () => f(d).label ?? gt), D($, h);
      };
      ye(p, ($) => {
        typeof f(d).label == "string" ? $(b) : $(x, !1);
      });
    }
    q(g), Se(() => bt(g, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), D(c, g);
  }), q(l), Se(() => u = Ut(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), he({
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
  ge(t, !0), Je(e, em);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => an([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = Q2();
  return Et(a, 21, n, zr, (s, l, u) => {
    var c = J2(), d = X(c);
    $e(d, "tabindex", u), d.__click = [W2, i, l], d.__keydown = [j2, i, l];
    var v = X(d);
    {
      var g = (w) => {
        var k = F2(), V = X(k);
        Xn(V, {
          get target() {
            return f(l).icon;
          }
        }), q(k), D(w, k);
      };
      ye(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var p = Z(v, 2);
    Xn(p, {
      get target() {
        return f(l).title;
      }
    });
    var b = Z(p, 2);
    q(d);
    var x = Z(d, 2);
    {
      var $ = (w) => {
        var k = G2(), V = X(k);
        Xn(V, {
          get target() {
            return f(l).description;
          }
        }), q(k), D(w, k);
      };
      ye(x, (w) => {
        f(l).description && w($);
      });
    }
    var h = Z(x, 2);
    {
      var C = (w) => {
        var k = U2(), V = X(k);
        Xn(V, {
          get target() {
            return f(l).content;
          }
        }), q(k), D(w, k);
      };
      ye(h, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    q(c), Se((w) => bt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), q(a), Se(() => {
    ft(a, t.style), bt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, a), he({
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
  ge(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ue(), o = xe(r);
  {
    var i = (s) => {
      var l = Ue(), u = xe(l);
      cr(u, () => n() ?? gt), D(s, l);
    }, a = (s) => {
      var l = Ue(), u = xe(l);
      ls(u, n), D(s, l);
    };
    ye(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return D(e, r), he({
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
  ge(t, !0);
  const n = (C, w = gt) => {
    var k = Ue(), V = xe(k);
    Et(V, 19, w, (S, z) => `${z}_${S.value}`, (S, z) => {
      var P = om(), O = xe(P);
      O.__click = [tm, b, z];
      var R = X(O), L = X(R);
      {
        var I = (T) => {
          var N = nm();
          D(T, N);
        };
        ye(L, (T) => {
          f(z).children && f(z).children.length > 0 && T(I);
        });
      }
      q(R);
      var M = Z(R, 2);
      Xn(M, {
        get target() {
          return f(z).label;
        }
      }), q(O);
      var _ = Z(O, 2);
      {
        var E = (T) => {
          var N = rm(), H = X(N);
          n(H, () => f(z).children), q(N), D(T, N);
        };
        ye(_, (T) => {
          f(z).children && f(z).children.length > 0 && (l() || c().includes(f(z).value)) && T(E);
        });
      }
      D(S, P);
    }), D(C, k);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), v = /* @__PURE__ */ $t(t, [
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
  ]), g = /* @__PURE__ */ Ve(() => {
    const C = [], w = (k) => {
      for (let V of k)
        a().length > 0 ? a().includes(V.value) && C.push(V) : s().includes(V.value) && C.push(V), V.children && V.children.length > 0 && w(V.children);
    };
    return w(r()), C;
  }), p;
  function b(C) {
    var w, k;
    if (C.children && C.children.length > 0) {
      (w = o()) == null || w(C);
      return;
    } else
      p == null || p.hide(), (k = i()) == null || k(C);
  }
  var x = um();
  let $;
  var h = X(x);
  return _n(
    Gr(h, {
      floating: (C) => {
        var w = im(), k = X(w);
        n(k, r), q(w), D(C, w);
      },
      children: (C, w) => {
        var k = lm();
        let V;
        var S = X(k);
        Et(
          S,
          23,
          () => f(g),
          (z, P) => `${P}_${z.value}`,
          (z, P, O) => {
            var R = Ue(), L = xe(R);
            {
              var I = (_) => {
                var E = Ue(), T = xe(E);
                {
                  var N = (H) => {
                    Xn(H, {
                      get target() {
                        return f(P).label;
                      }
                    });
                  };
                  ye(T, (H) => {
                    f(O) === 0 && H(N);
                  });
                }
                D(_, E);
              }, M = (_) => {
                var E = am(), T = xe(E);
                Xn(T, {
                  get target() {
                    return f(P).label;
                  }
                });
                var N = Z(T, 2);
                {
                  var H = (A) => {
                    var Y = Re(",");
                    D(A, Y);
                  };
                  ye(N, (A) => {
                    f(O) < f(g).length - 1 && A(H);
                  });
                }
                D(_, E);
              };
              ye(L, (_) => {
                u() ? _(M, !1) : _(I);
              });
            }
            D(z, R);
          },
          (z) => {
            var P = sm(), O = X(P, !0);
            q(P), Se(() => dt(O, d())), D(z, P);
          }
        ), q(S), Te(2), q(k), Se(() => V = Ut(k, V, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), D(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), q(x), Se(() => $ = Ut(x, $, {
    ...v,
    class: `tf-select ${v.class ?? ""}`
  })), D(e, x), he({
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
jr(["click"]);
ue(
  Jt,
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
const ko = Math.min, Er = Math.max, Vi = Math.round, wn = (e) => ({
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
  return Er(e, ko(t, n));
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
function gm(e, t, n) {
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
function hm(e, t, n, r) {
  const o = Ao(e);
  let i = gm(gr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(qa)))), i;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cm[t]);
}
function pm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bd(e) {
  return typeof e != "number" ? pm(e) : {
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
  const i = lr(t), a = ks(t), s = _s(a), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
  } = Zl(u, r, l), v = r, g = {}, p = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: $
    } = s[b], {
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
      [x]: {
        ...g[x],
        ...w
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Zl(u, v, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: g
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
    padding: g = 0
  } = Do(t, e), p = bd(g), b = s[v ? d === "floating" ? "reference" : "floating" : d], x = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
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
  }, w = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: h,
    strategy: l
  }) : $);
  return {
    top: (x.top - w.top + p.top) / C.y,
    bottom: (w.bottom - x.bottom + p.bottom) / C.y,
    left: (x.left - w.left + p.left) / C.x,
    right: (w.right - x.right + p.right) / C.x
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
    const d = bd(c), v = {
      x: n,
      y: r
    }, g = ks(o), p = _s(g), b = await a.getDimensions(u), x = g === "y", $ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[g] - v[g] - i.floating[p], k = v[g] - i.reference[g], V = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = V ? V[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(V))) && (S = s.floating[C] || i.floating[p]);
    const z = w / 2 - k / 2, P = S / 2 - b[p] / 2 - 1, O = ko(d[$], P), R = ko(d[h], P), L = O, I = S - b[p] - R, M = S / 2 - b[p] / 2 + z, _ = Za(L, M, I), E = !l.arrow && Ao(o) != null && M !== _ && i.reference[p] / 2 - (M < L ? O : R) - b[p] / 2 < 0, T = E ? M < L ? M - L : M - I : 0;
    return {
      [g]: v[g] + T,
      data: {
        [g]: _,
        centerOffset: M - _ - T,
        ...E && {
          alignmentOffset: T
        }
      },
      reset: E
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: b = !0,
        ...x
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gr(o), h = lr(s), C = gr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !b ? [Ni(s)] : vm(s)), V = p !== "none";
      !v && V && k.push(...hm(s, b, p, w));
      const S = [s, ...k], z = await $d(t, x), P = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && P.push(z[$]), d) {
        const _ = fm(o, a, w);
        P.push(z[_[0]], z[_[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: P
      }], !P.every((_) => _ <= 0)) {
        var R, L;
        const _ = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, E = S[_];
        if (E) {
          var I;
          const N = d === "alignment" ? h !== lr(E) : !1, H = ((I = O[0]) == null ? void 0 : I.overflows[0]) > 0;
          if (!N || H)
            return {
              data: {
                index: _,
                overflows: O
              },
              reset: {
                placement: E
              }
            };
        }
        let T = (L = O.filter((N) => N.overflows[0] <= 0).sort((N, H) => N.overflows[1] - H.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var M;
              const N = (M = O.filter((H) => {
                if (V) {
                  const A = lr(H.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((H, A) => H[1] - A[1])[0]) == null ? void 0 : M[0];
              N && (T = N);
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
async function xm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = gr(n), s = Ao(n), l = lr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Do(t, e);
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
const bm = function(e) {
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
      } = t, l = await xm(t, e);
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
          fn: (x) => {
            let {
              x: $,
              y: h
            } = x;
            return {
              x: $,
              y: h
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await $d(t, l), d = lr(gr(o)), v = xd(d);
      let g = u[v], p = u[d];
      if (i) {
        const x = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + c[x], C = g - c[$];
        g = Za(h, g, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + c[x], C = p - c[$];
        p = Za(h, p, C);
      }
      const b = s.fn({
        ...t,
        [v]: g,
        [d]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
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
  const t = Ms(), n = dn(e) ? fn(e) : e;
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
function Ms() {
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
  } = Sd(t);
  let a = (i ? Vi(n.width) : n.width) / r, s = (i ? Vi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const km = /* @__PURE__ */ wn(0);
function Ed(e) {
  const t = Bt(e);
  return !Ms() || !t.visualViewport ? km : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function So(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Md(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Vr(r)) : a = Vr(e));
  const s = Sm(i, n, r) ? Ed(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), g = r && dn(r) ? Bt(r) : r;
    let p = v, b = Ba(p);
    for (; b && r && g !== p; ) {
      const x = Vr(b), $ = b.getBoundingClientRect(), h = fn(b), C = $.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = $.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += w, p = Bt(b), b = Ba(p);
    }
  }
  return Hi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Es(e, t) {
  const n = ea(e).scrollLeft;
  return t ? t.left + n : So(An(e)).left + n;
}
function Vd(e, t, n) {
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
function Mm(e) {
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
    const g = So(r);
    u = Vr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const v = a && !d && !i ? Vd(a, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function Em(e) {
  return Array.from(e.getClientRects());
}
function Vm(e) {
  const t = An(e), n = ea(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Es(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Er(t.clientWidth, r.clientWidth) - o), {
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
function Hm(e, t) {
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
    r = Hm(t, n);
  else {
    const o = Ed(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hi(r);
}
function Nd(e, t) {
  const n = Jn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Nd(n, t);
}
function Pm(e, t) {
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
  const i = [...n === "clippingAncestors" ? Qi(t) ? [] : Pm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
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
function Lm(e, t, n) {
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
    if ((Fr(t) !== "body" || Io(o)) && (s = ea(t)), r) {
      const g = So(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
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
function Hd(e, t) {
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
const Om = async function(e) {
  const t = this.getOffsetParent || Hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lm(e.reference, await t(e.floating), e.strategy),
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
  convertOffsetParentRelativeRectToViewportRelativeRect: Mm,
  getDocumentElement: An,
  getClippingRect: Tm,
  getOffsetParent: Hd,
  getElementRects: Om,
  getClientRects: Em,
  getDimensions: zm,
  getScale: Vr,
  isElement: dn,
  isRTL: Dm
}, Im = bm, Rm = $m, Zm = wm, qm = ym, Bm = (e, t, n) => {
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
    }).then(({ x: $, y: h, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${h}px`
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
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function b($) {
    $.stopPropagation(), v ? p() : g();
  }
  function x($) {
    u.contains($.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      p();
    },
    isVisible() {
      return v;
    }
  };
};
var Ym = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Gr(e, t) {
  ge(t, !0);
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
  cr(d, n), q(c), _n(c, (p) => i = p, () => i);
  var v = Z(c, 2), g = X(v);
  return cr(g, r), q(v), _n(v, (p) => a = p, () => a), q(u), D(e, u), he({
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
ue(Gr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Fe(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Ue(), s = xe(a);
  return zf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = Ut(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ue(), v = xe(d);
    cr(v, () => n() ?? gt), D(u, d);
  }), D(e, a), he({
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
  ge(t, !0), Je(e, Wm);
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
  })), he();
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
function ht() {
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
function hn(e, t) {
  ge(t, !0), Je(e, iy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), p = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: $ } = Ot(), h = /* @__PURE__ */ Ve(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = jm(), { copyNode: w } = Fm(), k = Qn(), V = () => {
    var H;
    (H = k.onNodeExecute) == null || H.call(k, $(r()));
  };
  let S = ht();
  var z = oy(), P = xe(z);
  {
    var O = (H) => {
      pd(H, {
        get position() {
          return He.Top;
        },
        align: "end",
        children: (A, Y) => {
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
                onclick: V,
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
                  var ie = ty(), U = X(ie), Ee = Z(X(U));
                  pt(Ee, {
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Me = de.target.value;
                      x(S, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(U);
                  var F = Z(U, 2), Le = Z(X(F));
                  mt(Le, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Me = de.target.value;
                      x(S, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(F);
                  var Xe = Z(F, 2);
                  {
                    var Ze = (de) => {
                      var Me = Qm(), it = Z(X(Me));
                      mt(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (lt) => {
                          const ne = lt.target.value;
                          x(S, { condition: ne });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(Me), D(de, Me);
                    };
                    ye(Xe, (de) => {
                      d() && de(Ze);
                    });
                  }
                  var fe = Z(Xe, 2), ve = Z(X(fe), 2);
                  ar(ve), ve.__change = [ey, x, S], q(fe), q(ie), Se(() => Af(ve, !!n().async)), D(Ne, ie);
                },
                children: (Ne, ie) => {
                  Ge(Ne, {
                    class: "tf-node-toolbar-item",
                    children: (U, Ee) => {
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
          q(K), D(A, K);
        },
        $$slots: { default: !0 }
      });
    };
    ye(P, (H) => {
      (s() || l() || u()) && H(O);
    });
  }
  var R = Z(P, 2), L = Z(X(R), 2), I = X(L);
  wd(I, {
    get items() {
      return f(h);
    },
    activeKeys: b,
    onChange: (H, A) => {
      var Y;
      x(r(), { expand: A == null ? void 0 : A.includes("key") }), (Y = p()) == null || Y(A != null && A.includes("key") ? "key" : "");
    }
  }), q(L), q(R);
  var M = Z(R, 2);
  {
    var _ = (H) => {
      Un(H, {
        type: "target",
        get position() {
          return He.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(M, (H) => {
      g() && H(_);
    });
  }
  var E = Z(M, 2);
  {
    var T = (H) => {
      Un(H, {
        type: "source",
        get position() {
          return He.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(E, (H) => {
      v() && H(T);
    });
  }
  var N = Z(E, 2);
  return cr(N, () => i() ?? gt), D(e, z), he({
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
  ge(t, !0), Je(e, cy);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var P, O;
    return {
      ...i(),
      ...(O = (P = o()) == null ? void 0 : P.data) == null ? void 0 : O.parameters[a()]
    };
  });
  const { updateNodeData: c } = Ot(), d = (P, O) => {
    c(s, (R) => {
      let L = R.data.parameters;
      return L[a()][P] = O, { parameters: L };
    });
  }, v = (P) => {
    const O = P.target.value;
    d("name", O);
  }, g = (P) => {
    const O = P.target.checked;
    d("required", O);
  }, p = (P) => {
    const O = P.value;
    O && d("dataType", O);
  };
  let b;
  const x = () => {
    c(s, (P) => {
      let O = P.data.parameters;
      return O.splice(a(), 1), { parameters: [...O] };
    }), b == null || b.hide();
  };
  var $ = uy(), h = xe($), C = X(h);
  pt(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), q(h);
  var w = Z(h, 2), k = X(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), q(w);
  var V = Z(w, 2), S = X(V);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (P) => {
        var O = sy(), R = X(O), L = Z(X(R));
        const I = /* @__PURE__ */ Ve(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Jt(L, {
          items: Pd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(I);
          }
        }), q(R);
        var M = Z(R, 2), _ = Z(X(M));
        mt(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const Y = A.target.value;
            d("defaultValue", Y);
          }
        }), q(M);
        var E = Z(M, 2), T = Z(X(E));
        mt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const Y = A.target.value;
            d("description", Y);
          }
        }), q(E);
        var N = Z(E, 2), H = X(N);
        Ge(H, {
          onclick: x,
          children: (A, Y) => {
            Te();
            var K = Re("删除");
            D(A, K);
          },
          $$slots: { default: !0 }
        }), q(N), q(O), D(P, O);
      },
      children: (P, O) => {
        Ge(P, {
          class: "input-btn-more",
          children: (R, L) => {
            var I = ly();
            D(R, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), q(V), D(e, $);
  var z = he({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), m();
    },
    get index() {
      return a();
    },
    set index(P) {
      a(P), m();
    }
  });
  return r(), z;
}
ue(Td, { parameter: {}, index: {} }, [], [], !0);
var dy = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), fy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), vy = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const gy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  ge(t, !0), Je(e, gy);
  const [n, r] = tt(), o = () => te(f(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Ve(() => mr(i)), s = /* @__PURE__ */ Ve(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = vy(), u = X(l);
  {
    var c = (v) => {
      var g = dy();
      Te(4), D(v, g);
    };
    ye(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = Z(u, 2);
  Et(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, p) => {
      Td(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(p);
        }
      });
    },
    (v) => {
      var g = fy();
      D(v, g);
    }
  ), q(l), D(e, l), he(), r();
}
ue(zd, {}, [], [], !0);
const Pi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = qr()), Pi(t.children);
}), e), En = () => {
  const { updateNodeData: e } = Ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Pi(r == null ? void 0 : r.children);
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
var hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ld(e, t) {
  ge(t, !0), Je(e, yy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, st(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = hy();
      D(a, s);
    },
    children: (a, s) => {
      var l = my(), u = xe(l), c = X(u);
      Fe(c, {
        level: 3,
        children: (g, p) => {
          Te();
          var b = Re("输入参数");
          D(g, b);
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
        children: (g, p) => {
          var b = py();
          D(g, b);
        },
        $$slots: { default: !0 }
      }), q(u);
      var v = Z(u, 2);
      zd(v, {}), D(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Ld, { data: {} }, [], [], !0);
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
}, wy = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o } = je();
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
var xy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), by = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  ge(t, !0), Je(e, $y);
  const [n, r] = tt(), o = () => te(f(c), "$node", n), i = () => te(C, "$selectItems", n);
  Qt(() => {
    f(d).refType || x({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Ve(() => mr(u)), d = /* @__PURE__ */ Ve(() => {
    var _;
    return {
      ...a(),
      ...(_ = o()) == null ? void 0 : _.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Ot(), g = (_, E) => {
    v(u, (T) => {
      let N = T.data[l()];
      return N[s()] = { ...N[s()], [_]: E }, { [l()]: N };
    });
  }, p = (_, E) => {
    const T = E.target.value;
    g(_, T);
  }, b = (_) => {
    const E = _.value;
    g("ref", E);
  }, x = (_) => {
    const E = _.value;
    g("refType", E);
  };
  let $;
  const h = () => {
    v(u, (_) => {
      let E = _.data[l()];
      return E.splice(s(), 1), { [l()]: [...E] };
    }), $ == null || $.hide();
  }, C = wy();
  var w = by(), k = xe(w), V = X(k);
  const S = /* @__PURE__ */ Ve(() => f(d).nameDisabled === !0);
  pt(V, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(S);
    },
    oninput: (_) => p("name", _)
  }), q(k);
  var z = Z(k, 2), P = X(z);
  {
    var O = (_) => {
      pt(_, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (E) => p("value", E)
      });
    }, R = (_, E) => {
      {
        var T = (N) => {
          const H = /* @__PURE__ */ Ve(() => [f(d).ref]);
          Jt(N, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(H);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        ye(
          _,
          (N) => {
            f(d).refType !== "input" && N(T);
          },
          E
        );
      }
    };
    ye(P, (_) => {
      f(d).refType === "fixed" ? _(O) : _(R, !1);
    });
  }
  q(z);
  var L = Z(z, 2), I = X(L);
  _n(
    Gr(I, {
      placement: "bottom",
      floating: (_) => {
        var E = xy(), T = X(E), N = Z(X(T));
        const H = /* @__PURE__ */ Ve(() => f(d).refType ? [f(d).refType] : []);
        Jt(N, {
          items: ay,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(H);
          },
          onSelect: x
        }), q(T);
        var A = Z(T, 2), Y = Z(X(A));
        mt(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            p("defaultValue", ce);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), q(A);
        var K = Z(A, 2), G = Z(X(K));
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            p("description", ce);
          },
          get value() {
            return f(d).description;
          }
        }), q(K);
        var Q = Z(K, 2), W = X(Q);
        Ge(W, {
          onclick: h,
          children: (ce, se) => {
            Te();
            var we = Re("删除");
            D(ce, we);
          },
          $$slots: { default: !0 }
        }), q(Q), q(E), D(_, E);
      },
      children: (_, E) => {
        ta(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => $ = _,
    () => $
  ), q(L), D(e, w);
  var M = he({
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
  return r(), M;
}
ue(Dd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), _y = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), ky = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  ge(t, !0), Je(e, Sy);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = ht(), l = /* @__PURE__ */ Ve(() => mr(s)), u = /* @__PURE__ */ Ve(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = ky(), d = X(c);
  {
    var v = (b) => {
      var x = Cy();
      Te(4), D(b, x);
    };
    ye(d, (b) => {
      f(u).length !== 0 && b(v);
    });
  }
  var g = Z(d, 2);
  Et(
    g,
    19,
    () => f(u),
    (b) => b.id,
    (b, x, $) => {
      Dd(b, {
        get parameter() {
          return f(x);
        },
        get index() {
          return f($);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = _y(), $ = X(x, !0);
      q(x), Se(() => dt($, i())), D(b, x);
    }
  ), q(c), D(e, c);
  var p = he({
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
  return r(), p;
}
ue(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Ny = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Ad(e, t) {
  ge(t, !0), Je(e, Ny);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, st(
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
        var s = My();
        D(a, s);
      },
      children: (a, s) => {
        var l = Vy(), u = xe(l), c = X(u);
        Fe(c, {
          level: 3,
          children: (g, p) => {
            Te();
            var b = Re("输出参数");
            D(g, b);
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
          children: (g, p) => {
            var b = Ey();
            D(g, b);
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
  )), he({
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
var Hy = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Py = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Ty = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), zy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ly = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ge(t, !0), Je(e, Ly);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var T;
    let N = (T = o()) == null ? void 0 : T.data[s()], H;
    if (N && a().length > 0) {
      let A = N;
      for (let Y = 0; Y < a().length; Y++) {
        const K = a()[Y];
        Y == a().length - 1 ? H = A[K] : A = A[K].children;
      }
    }
    return { ...i(), ...H };
  });
  const { updateNodeData: d } = Ot(), v = (T, N) => {
    d(l, (H) => {
      const A = H.data[s()];
      if (A && a().length > 0) {
        let Y = A;
        for (let K = 0; K < a().length; K++) {
          const G = a()[K];
          K == a().length - 1 ? Y[G] = { ...Y[G], [T]: N } : Y = Y[G].children;
        }
      }
      return {
        [s()]: [...ya(A)]
      };
    });
  }, g = (T, N) => {
    const H = N.target.value;
    v(T, H);
  }, p = (T) => {
    const N = T.value;
    v("dataType", N);
  };
  let b;
  const x = () => {
    d(l, (T) => {
      let N = T.data[s()];
      if (N && a().length > 0) {
        let H = N;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? H.splice(Y, 1) : H = H[Y].children;
        }
      }
      return {
        [s()]: [...ya(N)]
      };
    }), b == null || b.hide();
  }, $ = () => {
    d(l, (T) => {
      let N = T.data[s()];
      if (N && a().length > 0) {
        let H = N;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? H[Y].children ? H[Y].children.push({
            id: qr(),
            name: "newParam",
            dataType: "String"
          }) : H[Y].children = [
            {
              id: qr(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[Y].children;
        }
      }
      return {
        [s()]: [...ya(N)]
      };
    });
  };
  var h = zy(), C = xe(h), w = X(C);
  {
    var k = (T) => {
      var N = Ue(), H = xe(N);
      Et(H, 17, a, zr, (A, Y) => {
        Te();
        var K = Re(" ");
        D(A, K);
      }), D(T, N);
    };
    ye(w, (T) => {
      a().length > 1 && T(k);
    });
  }
  var V = Z(w, 2);
  const S = /* @__PURE__ */ Ve(() => f(c).nameDisabled === !0);
  pt(V, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (T) => {
      g("name", T);
    },
    get disabled() {
      return f(S);
    }
  }), q(C);
  var z = Z(C, 2), P = X(z);
  const O = /* @__PURE__ */ Ve(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Ve(() => f(c).dataTypeDisabled === !0);
  Jt(P, {
    items: Pd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(O);
    },
    get disabled() {
      return f(R);
    },
    onSelect: p
  });
  var L = Z(P, 2);
  {
    var I = (T) => {
      Ge(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (N, H) => {
          var A = Hy();
          D(N, A);
        },
        $$slots: { default: !0 }
      });
    };
    ye(L, (T) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && T(I);
    });
  }
  q(z);
  var M = Z(z, 2), _ = X(M);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (T) => {
        var N = Ty(), H = X(N), A = Z(X(H));
        const Y = /* @__PURE__ */ Ve(() => f(c).defaultValue || "");
        mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(Y);
          },
          onchange: (se) => {
            g("defaultValue", se);
          }
        }), q(H);
        var K = Z(H, 2), G = Z(X(K));
        const Q = /* @__PURE__ */ Ve(() => f(c).description || "");
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (se) => {
            g("description", se);
          }
        }), q(K);
        var W = Z(K, 2);
        {
          var ce = (se) => {
            var we = Py(), ae = X(we);
            Ge(ae, {
              onclick: x,
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
        q(N), D(T, N);
      },
      children: (T, N) => {
        ta(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), q(M), D(e, h);
  var E = he({
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
  return r(), E;
}
ue(Id, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Oy = /* @__PURE__ */ re("<!> <!>", 1), Dy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Iy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  ge(t, !0), Je(e, Ry);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = (x, $ = gt, h = gt) => {
    var C = Ue(), w = xe(C);
    Et(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, V, S) => {
        var z = Oy(), P = xe(z);
        const O = /* @__PURE__ */ Ve(() => [...h(), f(S)]);
        Id(P, {
          get parameter() {
            return f(V);
          },
          get position() {
            return f(O);
          },
          get dataKeyName() {
            return s();
          }
        });
        var R = Z(P, 2);
        {
          var L = (I) => {
            var M = /* @__PURE__ */ be(() => [...h(), f(S)]);
            i(I, () => f(V).children, () => f(M));
          };
          ye(R, (I) => {
            f(V).children && I(L);
          });
        }
        D(k, z);
      },
      (k) => {
        var V = Ue(), S = xe(V);
        {
          var z = (P) => {
            var O = Dy(), R = X(O, !0);
            q(O), Se(() => dt(R, a())), D(P, O);
          };
          ye(S, (P) => {
            h().length === 0 && P(z);
          });
        }
        D(k, V);
      }
    ), D(x, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Ve(() => mr(l)), c = /* @__PURE__ */ Ve(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Iy(), v = X(d);
  {
    var g = (x) => {
      var $ = Ay();
      Te(4), D(x, $);
    };
    ye(v, (x) => {
      f(c).length !== 0 && x(g);
    });
  }
  var p = Z(v, 2);
  i(p, () => f(c) || [], () => []), q(d), D(e, d);
  var b = he({
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
var Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Xy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Yy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Rd(e, t) {
  ge(t, !0), Je(e, jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Ot(), u = (c) => {
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
  }), hn(e, st(
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
        var v = Wy(), g = xe(v), p = X(g);
        Fe(p, {
          level: 3,
          children: (U, Ee) => {
            Te();
            var F = Re("输入参数");
            D(U, F);
          },
          $$slots: { default: !0 }
        });
        var b = Z(p, 2);
        Ge(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (U, Ee) => {
            var F = qy();
            D(U, F);
          },
          $$slots: { default: !0 }
        }), q(g);
        var x = Z(g, 2);
        Zt(x, {});
        var $ = Z(x, 2);
        Fe($, {
          level: 3,
          mt: "10px",
          children: (U, Ee) => {
            Te();
            var F = Re("模型设置");
            D(U, F);
          },
          $$slots: { default: !0 }
        });
        var h = Z($, 4), C = X(h);
        const w = /* @__PURE__ */ Ve(() => n().llmId ? [n().llmId] : []);
        Jt(C, {
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
        var k = Z(C, 2);
        ta(k, {}), q(h);
        var V = Z(h, 4), S = X(V), z = X(S), P = X(z);
        q(z);
        var O = Z(z, 2);
        ar(O), O.__input = [By, l, o], q(S), q(V);
        var R = Z(V, 2), L = X(R), I = X(L), M = X(I);
        q(I);
        var _ = Z(I, 2);
        ar(_), _.__input = [Xy, l, o], q(L), q(R);
        var E = Z(R, 2), T = X(E), N = X(T), H = X(N);
        q(N);
        var A = Z(N, 2);
        ar(A), A.__input = [Yy, l, o], q(T), q(E);
        var Y = Z(E, 4), K = X(Y);
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
          children: (U, Ee) => {
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
              children: (Ee, F) => {
                var Le = Ky();
                D(Ee, Le);
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
          dt(P, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), sa(O, n().temperature ?? 0.5), dt(M, `Top P: ${n().topP ?? 0.9 ?? ""}`), sa(_, n().topP ?? 0.9), dt(H, `Top K: ${n().topK ?? 50 ?? ""}`), sa(A, n().topK ?? 50);
        }), D(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
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
  ge(t, !0), Je(e, Qy);
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
  const o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Ot(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return hn(e, st(
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
        var c = Jy(), d = xe(c), v = X(d);
        Fe(v, {
          level: 3,
          children: (O, R) => {
            Te();
            var L = Re("输入参数");
            D(O, L);
          },
          $$slots: { default: !0 }
        });
        var g = Z(v, 2);
        Ge(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, R) => {
            var L = Gy();
            D(O, L);
          },
          $$slots: { default: !0 }
        }), q(d);
        var p = Z(d, 2);
        Zt(p, {});
        var b = Z(p, 2);
        Fe(b, {
          level: 3,
          mt: "10px",
          children: (O, R) => {
            Te();
            var L = Re("代码");
            D(O, L);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 4), $ = X(x);
        const h = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : ["qlexpress"]);
        Jt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (O) => {
            const R = O.value;
            a(o, () => ({ engine: R }));
          },
          get value() {
            return f(h);
          }
        }), q(x);
        var C = Z(x, 4), w = X(C);
        const k = /* @__PURE__ */ Ve(() => n().code || "");
        mt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (O) => {
            a(o, () => ({ code: O.target.value }));
          },
          get value() {
            return f(k);
          }
        }), q(C);
        var V = Z(C, 2), S = X(V);
        Fe(S, {
          level: 3,
          mt: "10px",
          children: (O, R) => {
            Te();
            var L = Re("输出参数");
            D(O, L);
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
          children: (O, R) => {
            var L = Uy();
            D(O, L);
          },
          $$slots: { default: !0 }
        }), q(V);
        var P = Z(V, 2);
        In(P, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
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
  ge(t, !0), Je(e, rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Ot();
  return ln(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), hn(e, st(
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
        var u = nw(), c = xe(u), d = X(c);
        Fe(d, {
          level: 3,
          children: (k, V) => {
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
          children: (k, V) => {
            var S = tw();
            D(k, S);
          },
          $$slots: { default: !0 }
        }), q(c);
        var g = Z(c, 2);
        Zt(g, {});
        var p = Z(g, 2);
        Fe(p, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            Te();
            var S = Re("模板内容");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = Z(p, 2), x = X(b);
        const $ = /* @__PURE__ */ Ve(() => n().template || "");
        mt(x, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), q(b);
        var h = Z(b, 2), C = X(h);
        Fe(C, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            Te();
            var S = Re("输出参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        }), q(h);
        var w = Z(h, 2);
        In(w, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ue(qd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Bd(e, t) {
  ge(t, !0), Je(e, hw);
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
  ], i = ht(), { addParameter: a } = En(), { updateNodeData: s } = Ot();
  return hn(e, st(
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
        var c = gw(), d = xe(c), v = X(d);
        Fe(v, {
          level: 3,
          children: (fe, ve) => {
            Te();
            var de = Re("输入参数");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var g = Z(v, 2);
        Ge(g, {
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
        var p = Z(d, 2);
        Zt(p, {});
        var b = Z(p, 2);
        Fe(b, {
          level: 3,
          mt: "10px",
          children: (fe, ve) => {
            Te();
            var de = Re("URL 地址");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 2), $ = X(x), h = X($);
        const C = /* @__PURE__ */ Ve(() => n().method ? [n().method] : ["get"]);
        Jt(h, {
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
        const V = /* @__PURE__ */ Ve(() => n().url || "");
        pt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            s(i, () => ({ url: fe.target.value }));
          },
          get value() {
            return f(V);
          }
        }), q(w), q(x);
        var S = Z(x, 2), z = X(S);
        Fe(z, {
          level: 3,
          children: (fe, ve) => {
            Te();
            var de = Re("Http 头信息");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var P = Z(z, 2);
        Ge(P, {
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
        var O = Z(S, 2);
        Zt(O, { dataKeyName: "headers" });
        var R = Z(O, 2);
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
        var L = Z(R, 2), I = X(L), M = X(I);
        const _ = /* @__PURE__ */ Ve(() => !n().bodyType);
        pt(M, {
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
        }), Te(), q(I);
        var E = Z(I, 2), T = X(E);
        const N = /* @__PURE__ */ Ve(() => n().bodyType === "form-data");
        pt(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(N);
          },
          onchange: (fe) => {
            var ve;
            (ve = fe.target) != null && ve.checked && s(i, { bodyType: "form-data" });
          }
        }), Te(), q(E);
        var H = Z(E, 2), A = X(H);
        const Y = /* @__PURE__ */ Ve(() => n().bodyType === "x-www-form-urlencoded");
        pt(A, {
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
        }), Te(), q(H);
        var K = Z(H, 2), G = X(K);
        const Q = /* @__PURE__ */ Ve(() => n().bodyType === "json");
        pt(G, {
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
        pt(ce, {
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
        }), Te(), q(W), q(L);
        var we = Z(L, 2);
        {
          var ae = (fe) => {
            var ve = lw(), de = xe(ve), Me = X(de);
            Fe(Me, {
              level: 3,
              children: (ne, Ye) => {
                Te();
                var le = Re("参数");
                D(ne, le);
              },
              $$slots: { default: !0 }
            });
            var it = Z(Me, 2);
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
            var ve = cw(), de = xe(ve), Me = X(de);
            Fe(Me, {
              level: 3,
              children: (ne, Ye) => {
                Te();
                var le = Re("Body 参数");
                D(ne, le);
              },
              $$slots: { default: !0 }
            });
            var it = Z(Me, 2);
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
              oninput: (Me) => {
                s(i, { bodyJson: Me.target.value });
              }
            }), q(ve), D(fe, ve);
          };
          ye(Ne, (fe) => {
            n().bodyType === "json" && fe(ie);
          });
        }
        var U = Z(Ne, 2);
        {
          var Ee = (fe) => {
            var ve = fw(), de = X(ve);
            mt(de, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Me) => {
                s(i, { bodyRaw: Me.target.value });
              }
            }), q(ve), D(fe, ve);
          };
          ye(U, (fe) => {
            n().bodyType === "raw" && fe(Ee);
          });
        }
        var F = Z(U, 2), Le = X(F);
        Fe(Le, {
          level: 3,
          mt: "10px",
          children: (fe, ve) => {
            Te();
            var de = Re("输出参数");
            D(fe, de);
          },
          $$slots: { default: !0 }
        });
        var Xe = Z(Le, 2);
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
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(Bd, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ge(t, !0), Je(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Ot();
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
  }), hn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = pw();
        D(u, c);
      },
      children: (u, c) => {
        var d = yw(), v = xe(d), g = X(v);
        Fe(g, {
          level: 3,
          children: (L, I) => {
            Te();
            var M = Re("输入参数");
            D(L, M);
          },
          $$slots: { default: !0 }
        });
        var p = Z(g, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, I) => {
            var M = mw();
            D(L, M);
          },
          $$slots: { default: !0 }
        }), q(v);
        var b = Z(v, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Fe(x, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            Te();
            var M = Re("知识库设置");
            D(L, M);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(x, 4), h = X($);
        const C = /* @__PURE__ */ Ve(() => n().knowledgeId ? [n().knowledgeId] : []);
        Jt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const I = L.value;
            l(o, () => ({ knowledgeId: I }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = X(w);
        pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const I = L.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), q(w);
        var V = Z(w, 4), S = X(V);
        const z = /* @__PURE__ */ Ve(() => n().limit || "");
        pt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const I = L.target.value;
            l(o, () => ({ limit: I }));
          },
          get value() {
            return f(z);
          }
        }), q(V);
        var P = Z(V, 2), O = X(P);
        Fe(O, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            Te();
            var M = Re("输出参数");
            D(L, M);
          },
          $$slots: { default: !0 }
        }), q(P);
        var R = Z(P, 2);
        In(R, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(Xd, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ge(t, !0), Je(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Qn();
  let s = /* @__PURE__ */ kt(an([]));
  Qt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Ot();
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
  }), hn(e, st(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = xw();
        D(u, c);
      },
      children: (u, c) => {
        var d = $w(), v = xe(d), g = X(v);
        Fe(g, {
          level: 3,
          children: (R, L) => {
            Te();
            var I = Re("输入参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var p = Z(g, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, L) => {
            var I = bw();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), q(v);
        var b = Z(v, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Fe(x, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Te();
            var I = Re("搜索引擎设置");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(x, 4), h = X($);
        const C = /* @__PURE__ */ Ve(() => n().engine ? [n().engine] : []);
        Jt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (R) => {
            const L = R.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return f(C);
          }
        }), q($);
        var w = Z($, 4), k = X(w);
        pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const L = R.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), q(w);
        var V = Z(w, 4), S = X(V);
        pt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const L = R.target.value;
            l(o, () => ({ limit: L }));
          }
        }), q(V);
        var z = Z(V, 2), P = X(z);
        Fe(P, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Te();
            var I = Re("输出参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        }), q(z);
        var O = Z(z, 2);
        In(O, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
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
const Mw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Kd(e, t) {
  ge(t, !0), Je(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, st(
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
            return He.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Sw(), u = xe(l), c = X(u);
        Fe(c, {
          level: 3,
          children: (x, $) => {
            Te();
            var h = Re("循环变量");
            D(x, h);
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
          children: (x, $) => {
            var h = kw();
            D(x, h);
          },
          $$slots: { default: !0 }
        }), q(u);
        var v = Z(u, 2);
        Zt(v, {});
        var g = Z(v, 2), p = X(g);
        Fe(p, {
          level: 3,
          mt: "10px",
          children: (x, $) => {
            Te();
            var h = Re("输出参数");
            D(x, h);
          },
          $$slots: { default: !0 }
        }), q(g);
        var b = Z(g, 2);
        In(b, {}), D(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(Kd, { data: {} }, [], [], !0);
const Ew = {
  startNode: Ld,
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
  ge(t, !0);
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
    children: (s, l) => {
      var u = Vw(), c = xe(u);
      ls(c, n);
      var d = Z(c);
      Se(() => dt(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), he({
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
var Nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Pw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Wd(e, t) {
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
  ], a = [], s = Qn().customNodes;
  if (s) {
    const x = Object.keys(s).sort(($, h) => (s[$].sortNo || 0) - (s[h].sortNo || 0));
    for (let $ of x)
      s[$].group === "base" ? o.push({ type: $, ...s[$] }) : a.push({
        icon: s[$].icon,
        title: s[$].title,
        type: $
      });
    o.sort(($, h) => ($.sortNo || 0) - (h.sortNo || 0));
  }
  var l = Pw(), u = X(l), c = X(u), d = X(c);
  yd(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      J(n, x.value.toString(), !0);
    }
  }), q(c);
  var v = Z(c, 2), g = X(v);
  Et(g, 21, () => o, zr, (x, $) => {
    Xa(x, st(() => f($)));
  }), q(g);
  var p = Z(g, 2);
  Et(p, 21, () => a, zr, (x, $) => {
    Xa(x, st(() => f($)));
  }), q(p), q(v), q(u);
  var b = Z(u, 2);
  Ge(b, {
    onclick: () => {
      J(r, f(r) ? "" : "show", !0);
    },
    children: (x, $) => {
      var h = Ue(), C = xe(h);
      {
        var w = (V) => {
          var S = Nw();
          D(V, S);
        }, k = (V) => {
          var S = Hw();
          D(V, S);
        };
        ye(C, (V) => {
          f(r) === "show" ? V(w) : V(k, !1);
        });
      }
      D(x, h);
    },
    $$slots: { default: !0 }
  }), q(l), Se(() => {
    bt(l, 1, `tf-toolbar ${f(r) ?? ""}`), ft(g, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(p, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), D(e, l), he();
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
}, Lw = () => {
  const { edges: e } = je();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var Ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Iw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Zw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), qw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Xw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Yw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function jd(e, t) {
  var n;
  ge(t, !0), Je(e, Yw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = En(), s = Ot(), { updateNodeData: l } = s, u = { ...o, id: i, data: r() }, c = document.createElement("div"), d = Qn().customNodes[t.type];
  (n = d.render) == null || n.call(d, c, u, s);
  const v = d.forms;
  let g;
  ln(() => {
    r().expand && g && g.append(c);
  }), ln(() => {
    var b;
    r() && ((b = d.onUpdate) == null || b.call(d, c, { ...u, data: r() }));
  }), ln(() => {
    !r().parameters && d.parameters && l(i, {
      parameters: Pi(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), ln(() => {
    !r().outputDefs && d.outputDefs && l(i, {
      outputDefs: Pi(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const p = /* @__PURE__ */ Ve(() => ({
    ...r(),
    description: d.description
  }));
  return hn(e, st(
    {
      get data() {
        return f(p);
      }
    },
    () => o,
    {
      icon: (b) => {
        var x = Ue(), $ = xe(x);
        ls($, () => d.icon), D(b, x);
      },
      children: (b, x) => {
        var $ = Xw(), h = xe($);
        {
          var C = (P) => {
            var O = Dw(), R = xe(O), L = X(R);
            Fe(L, {
              level: 3,
              children: (E, T) => {
                Te();
                var N = Re("输入参数");
                D(E, N);
              },
              $$slots: { default: !0 }
            });
            var I = Z(L, 2);
            {
              var M = (E) => {
                Ge(E, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (T, N) => {
                    var H = Ow();
                    D(T, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(I, (E) => {
                d.parametersAddEnable !== !1 && E(M);
              });
            }
            q(R);
            var _ = Z(R, 2);
            Zt(_, {}), D(P, O);
          };
          ye(h, (P) => {
            d.parametersEnable !== !1 && P(C);
          });
        }
        var w = Z(h, 2);
        {
          var k = (P) => {
            var O = Ue(), R = xe(O);
            Et(R, 17, () => v, zr, (L, I) => {
              var M = Ue(), _ = xe(M);
              {
                var E = (N) => {
                  var H = Aw(), A = xe(H), Y = X(A, !0);
                  q(A);
                  var K = Z(A, 2), G = X(K);
                  const Q = /* @__PURE__ */ Ve(() => r()[f(I).name] || f(I).defaultValue);
                  pt(G, st(
                    {
                      get placeholder() {
                        return f(I).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(Q);
                      }
                    },
                    () => f(I).attrs,
                    {
                      onchange: (W) => {
                        l(i, { [f(I).name]: W.target.value });
                      }
                    }
                  )), q(K), Se(() => dt(Y, f(I).label)), D(N, H);
                }, T = (N, H) => {
                  {
                    var A = (K) => {
                      var G = Iw(), Q = xe(G), W = X(Q, !0);
                      q(Q);
                      var ce = Z(Q, 2), se = X(ce);
                      const we = /* @__PURE__ */ Ve(() => r()[f(I).name] || f(I).defaultValue);
                      mt(se, st(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(I).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(we);
                          }
                        },
                        () => f(I).attrs,
                        {
                          onchange: (ae) => {
                            l(i, { [f(I).name]: ae.target.value });
                          }
                        }
                      )), q(ce), Se(() => dt(W, f(I).label)), D(K, G);
                    }, Y = (K, G) => {
                      {
                        var Q = (ce) => {
                          var se = Rw(), we = xe(se), ae = X(we, !0);
                          q(we);
                          var Ce = Z(we, 2), me = X(Ce), Ne = X(me), ie = X(Ne);
                          q(Ne);
                          var U = Z(Ne, 2);
                          ar(U);
                          var Ee = (Le) => l(i, {
                            [f(I).name]: parseFloat(Le.target.value)
                          });
                          let F;
                          q(me), q(Ce), Se(() => {
                            dt(ae, f(I).label), dt(ie, `${f(I).description ?? ""}: ${r()[f(I).name] ?? f(I).defaultValue ?? ""}`), F = Ut(
                              U,
                              F,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(I).attrs,
                                value: r()[f(I).name] ?? f(I).defaultValue,
                                oninput: Ee
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(ce, se);
                        }, W = (ce, se) => {
                          {
                            var we = (Ce) => {
                              var me = Zw(), Ne = xe(me), ie = X(Ne, !0);
                              q(Ne);
                              var U = Z(Ne, 2), Ee = X(U);
                              const F = /* @__PURE__ */ Ve(() => f(I).options || []), Le = /* @__PURE__ */ Ve(() => r()[f(I).name] ? [r()[f(I).name]] : [f(I).defaultValue]);
                              Jt(Ee, {
                                get items() {
                                  return f(F);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(I).placeholder;
                                },
                                onSelect: (Xe) => {
                                  const Ze = Xe.value;
                                  l(i, () => ({ [f(I).name]: Ze }));
                                },
                                get value() {
                                  return f(Le);
                                }
                              }), q(U), Se(() => dt(ie, f(I).label)), D(Ce, me);
                            }, ae = (Ce, me) => {
                              {
                                var Ne = (ie) => {
                                  Fe(ie, st({ level: 3, mt: "10px" }, () => f(I).attrs, {
                                    children: (U, Ee) => {
                                      Te();
                                      var F = Re();
                                      Se(() => dt(F, f(I).label)), D(U, F);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                ye(
                                  Ce,
                                  (ie) => {
                                    f(I).type === "heading" && ie(Ne);
                                  },
                                  me
                                );
                              }
                            };
                            ye(
                              ce,
                              (Ce) => {
                                f(I).type === "select" ? Ce(we) : Ce(ae, !1);
                              },
                              se
                            );
                          }
                        };
                        ye(
                          K,
                          (ce) => {
                            f(I).type === "slider" ? ce(Q) : ce(W, !1);
                          },
                          G
                        );
                      }
                    };
                    ye(
                      N,
                      (K) => {
                        f(I).type === "textarea" ? K(A) : K(Y, !1);
                      },
                      H
                    );
                  }
                };
                ye(_, (N) => {
                  f(I).type === "input" ? N(E) : N(T, !1);
                });
              }
              D(L, M);
            }), D(P, O);
          };
          ye(w, (P) => {
            v && P(k);
          });
        }
        var V = Z(w, 2);
        _n(V, (P) => g = P, () => g);
        var S = Z(V, 2);
        {
          var z = (P) => {
            var O = Bw(), R = xe(O), L = X(R);
            Fe(L, {
              level: 3,
              mt: "10px",
              children: (E, T) => {
                Te();
                var N = Re("输出参数");
                D(E, N);
              },
              $$slots: { default: !0 }
            });
            var I = Z(L, 2);
            {
              var M = (E) => {
                Ge(E, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (T, N) => {
                    var H = qw();
                    D(T, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(I, (E) => {
                d.outputDefsAddEnable !== !1 && E(M);
              });
            }
            q(R);
            var _ = Z(R, 2);
            In(_, {}), D(P, O);
          };
          ye(S, (P) => {
            d.outputDefsEnable !== !1 && P(z);
          });
        }
        Se(() => {
          ft(V, d.rootStyle || ""), bt(V, 1, vn(d.rootClass), "svelte-q0cqsa");
        }), D(b, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return r();
    },
    set data(b) {
      r(b), m();
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
  ge(t, !0), Je(e, Gw);
  const [n, r] = tt(), o = () => te(z, "$nodes", n), i = () => te(P, "$edges", n), a = () => te(O, "$viewport", n), s = y(t, "onInit", 7), l = Ot();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = Kw(), v = (N) => {
    N.preventDefault(), N.dataTransfer && (N.dataTransfer.dropEffect = "move");
  }, g = (N) => {
    var H;
    N.preventDefault();
    const A = l.screenToFlowPosition({
      x: N.clientX - 250,
      y: N.clientY - 100
    }), Y = (H = N.dataTransfer) == null ? void 0 : H.getData("application/tinyflow"), K = Y ? JSON.parse(Y) : {}, G = {
      id: `node_${qr()}`,
      position: A,
      data: {},
      ...K
    };
    ri.addNode(G), ri.selectNodeOnly(G.id);
  }, { getNode: p } = Tw(), b = (N) => {
    const H = p(N.source), A = p(N.target);
    if (N.sourceHandle === "loop_handle" || H.parentId) {
      const Y = l.getEdges();
      for (let K of Y)
        if (K.target === N.target) {
          const G = p(K.source);
          if (N.sourceHandle === "loop_handle" && G.parentId !== H.id || H.parentId && G.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && A.parentId && A.parentId !== H.id);
  }, { ensureParentInNodesBefore: x } = zw(), $ = (N, H) => {
    if (!H.isValid)
      return;
    const A = H.toNode;
    if (A.parentId)
      return;
    const Y = H.fromNode, K = H.fromHandle, G = { position: { ...A.position } };
    if (K.id === "loop_handle" ? G.parentId = Y.id : Y.parentId && (G.parentId = Y.parentId), G.parentId) {
      const Q = p(G.parentId);
      G.position = {
        x: A.position.x - Q.position.x,
        y: A.position.y - Q.position.y
      }, x(G.parentId, A.id), l.updateNode(A.id, G);
    }
  }, { getEdgesByTarget: h } = Lw(), C = (N) => {
    N.edges.forEach((H) => {
      const A = p(H.target);
      if (A && A.parentId) {
        const Y = h(H.target), K = p(A.parentId);
        if (Y.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + K.position.x,
              y: A.position.y + K.position.y
            }
          });
        else {
          let G = !1;
          for (let Q = 0; Q < Y.length; Q++) {
            const W = Y[Q], ce = p(W.source);
            if (ce.parentId || ce.type === "loopNode") {
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
  }, w = (N, H) => {
  }, k = (N) => {
  }, V = {}, S = Qn().customNodes;
  if (S)
    for (let N of Object.keys(S))
      V[N] = jd;
  const { nodes: z, edges: P, viewport: O } = je(), R = Qn().onDataChange;
  R && (z.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), P.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), O.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = Fw(), I = X(L);
  const M = /* @__PURE__ */ Ve(() => ({ ...Ew, ...V })), _ = /* @__PURE__ */ Ve(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(I, st(
    {
      get nodeTypes() {
        return f(M);
      }
    },
    ri,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: $,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (N) => {
        const H = N.target;
        H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return f(_);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (N) => {
          J(u, !0), J(c, N.detail.edge, !0);
        }
      },
      children: (N, H) => {
        var A = jw(), Y = xe(A);
        vd(Y, {});
        var K = Z(Y, 2);
        cd(K, {});
        var G = Z(K, 2);
        hd(G, {});
        var Q = Z(G, 2);
        {
          var W = (ce) => {
            Oo(ce, {
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
        D(N, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var E = Z(I, 2);
  Wd(E, {}), q(L), D(e, L);
  var T = he({
    get onInit() {
      return s();
    },
    set onInit(N) {
      s(N), m();
    }
  });
  return r(), T;
}
ue(Fd, { onInit: {} }, [], [], !0);
function Uw(e, t) {
  ge(t, !0);
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
  }), he({
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
const o5 = /* @__PURE__ */ c1({
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
    }), (a, s) => (h1(), g1("div", {
      ref_key: "divRef",
      ref: r,
      class: m1(["tinyflow", a.className]),
      style: p1(a.style)
    }, null, 6));
  }
});
export {
  o5 as Tinyflow
};
//# sourceMappingURL=index.js.map
