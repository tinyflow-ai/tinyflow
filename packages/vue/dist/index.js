import { defineComponent as c1, ref as d1, onMounted as f1, onUnmounted as v1, createElementBlock as g1, openBlock as h1, normalizeStyle as p1, normalizeClass as m1 } from "vue";
var y1 = Object.defineProperty, jl = (e) => {
  throw TypeError(e);
}, w1 = (e, t, n) => t in e ? y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tt = (e, t, n) => w1(e, typeof t != "symbol" ? t + "" : t, n), Ya = (e, t, n) => t.has(e) || jl("Cannot " + n), ut = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => t.has(e) ? jl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oi = (e, t, n, r) => (Ya(e, t, "write to private field"), t.set(e, n), n), b1 = (e, t, n) => (Ya(e, t, "access private method"), n);
const x1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(x1);
let Br = !1, $1 = !1;
function C1() {
  Br = !0;
}
C1();
const ja = 1, Ka = 2, Kl = 4, _1 = 8, k1 = 16, S1 = 1, M1 = 2, Wl = 4, E1 = 8, P1 = 16, Fl = 1, V1 = 2, Wa = "[", Fa = "[!", Ga = "]", _r = {}, Nt = Symbol(), N1 = "http://www.w3.org/1999/xhtml", H1 = "http://www.w3.org/2000/svg", T1 = !1;
function Ti(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, z1 = Array.prototype.indexOf, Ua = Array.from, ii = Object.keys, co = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, O1 = Object.prototype, L1 = Array.prototype, Qa = Object.getPrototypeOf, As = Object.isExtensible;
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
const un = 2, Ul = 4, zi = 8, Ja = 16, Dn = 32, hr = 64, ai = 128, Zt = 256, si = 512, Mt = 1024, bn = 2048, er = 4096, Tn = 8192, Oi = 16384, A1 = 32768, Xr = 65536, I1 = 1 << 17, R1 = 1 << 19, Ql = 1 << 20, wa = 1 << 21, Yn = Symbol("$state"), es = Symbol("legacy props"), q1 = Symbol("");
function Z1(e) {
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
function j1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function K1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function W1() {
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
let Ie;
function St(e) {
  if (e === null)
    throw Li(), _r;
  return Ie = e;
}
function xn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ie)
  );
}
function Z(e) {
  if (He) {
    if (/* @__PURE__ */ Sn(Ie) !== null)
      throw Li(), _r;
    Ie = e;
  }
}
function Oe(e = 1) {
  if (He) {
    for (var t = e, n = Ie; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ie = n;
  }
}
function ba() {
  for (var e = 0, t = Ie; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ga) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Wa || n === Fa) && (e += 1);
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
  const t = Qa(e);
  if (t !== O1 && t !== L1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ kt(0), i = Je, a = (s) => {
    var l = Je;
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && W1();
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
            a(() => /* @__PURE__ */ kt(Nt))
          ), oa(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Nt), oa(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Hn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(an(v ? s[l] : Nt))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Nt ? void 0 : g;
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
          if (d !== void 0 && v !== Nt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Nt || Reflect.has(s, l);
        if (c !== void 0 || Ke !== null && (!d || (u = Hn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? an(s[l]) : Nt)), n.set(l, c));
          var v = f(c);
          if (v === Nt)
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
            x !== void 0 ? J(x, Nt) : p in s && (x = a(() => /* @__PURE__ */ kt(Nt)), n.set(p + "", x));
          }
        v === void 0 ? (!g || (d = Hn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ kt(void 0)), J(
          v,
          a(() => an(u))
        ), n.set(l, v)) : (g = v.v !== Nt, J(
          v,
          a(() => an(u))
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
          oa(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Nt;
        });
        for (var [u, c] of n)
          c.v !== Nt && !(u in s) && l.push(u);
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
var Ht, Jl, eu, tu;
function xa() {
  if (Ht === void 0) {
    Ht = window, Jl = /Firefox/.test(navigator.userAgent);
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
function Y(e, t) {
  if (!He)
    return /* @__PURE__ */ vt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(On());
  else if (t && n.nodeType !== 3) {
    var r = On();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function we(e, t) {
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
  return Ie;
}
function q(e, t = 1, n = !1) {
  let r = He ? Ie : e;
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
function Vr(e) {
  var t = un | bn, n = Je !== null && (Je.f & un) !== 0 ? (
    /** @type {Derived} */
    Je
  ) : null;
  return Ke === null || n !== null && (n.f & Zt) !== 0 ? t |= Zt : Ke.f |= Ql, {
    ctx: je,
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
    parent: n ?? Ke
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Vr(e);
  return hu(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Vr(e);
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
  var t, n = Ke;
  Gn(U1(e));
  try {
    ru(e), t = wu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function iu(e) {
  var t = ou(e), n = (Bn || (e.f & Zt) !== 0) && e.deps !== null ? er : Mt;
  Gt(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  Ke === null && Je === null && X1(), Je !== null && (Je.f & Zt) !== 0 && Ke === null && B1(), Po && Z1();
}
function Q1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pr(e, t, n, r = !0) {
  var o = Ke, i = {
    ctx: je,
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
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ql | ai)) === 0;
  if (!a && r && (o !== null && Q1(i, o), Je !== null && (Je.f & un) !== 0)) {
    var s = (
      /** @type {Derived} */
      Je
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
  var t = Ke !== null && (Ke.f & Dn) !== 0 && je !== null && !je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ke,
      reaction: Je
    });
  } else {
    var r = It(e);
    return r;
  }
}
function J1(e) {
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
    n.outro ? Nr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function It(e) {
  return pr(Ul, e, !1);
}
function ve(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function yt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    je
  );
  Yr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Mt) !== 0 && Gt(n, er), Kr(n) && Ai(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return pr(zi, e, !0);
}
function Se(e, t = [], n = Vr) {
  const r = t.map(n);
  return jr(() => e(...r.map(f)));
}
function jr(e, t = 0) {
  return pr(zi | Ja | t, e, !0);
}
function Fn(e, t = !0) {
  return pr(zi | Dn, e, !0, t);
}
function su(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Po, r = Je;
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
function Nr(e, t) {
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
    e.f ^= Tn, (e.f & Mt) === 0 && (e.f ^= Mt), Kr(e) && (Gt(e, bn), Ii(e));
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
let Go = !1, li = !1, ui = null, ir = !1, Po = !1;
function Rs(e) {
  Po = e;
}
let lo = [], Je = null, mn = !1;
function $n(e) {
  Je = e;
}
let Ke = null;
function Gn(e) {
  Ke = e;
}
let Ft = null;
function hu(e) {
  Je !== null && Je.f & wa && (Ft === null ? Ft = [e] : Ft.push(e));
}
let _t = null, At = 0, Kt = null;
function af(e) {
  Kt = e;
}
let pu = 1, ci = 0, Bn = !1;
function mu() {
  return ++pu;
}
function Kr(e) {
  var t, n = e.f;
  if ((n & bn) !== 0)
    return !0;
  if ((n & er) !== 0) {
    var r = e.deps, o = (n & Zt) !== 0;
    if (r !== null) {
      var i, a, s = (n & si) !== 0, l = o && Ke !== null && !Bn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= si), l && d !== null && (d.f & Zt) === 0 && (c.f ^= Zt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Kr(
          /** @type {Derived} */
          a
        ) && iu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || Ke !== null && !Bn) && Gt(e, Mt);
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
function qs(e) {
  return (e.f & Oi) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
}
function Di(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), qs(t))
      throw e;
    return;
  }
  if (n !== null && (Go = !0), sf(e, t), qs(t))
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
      ) : t === i && (n ? Gt(i, bn) : (i.f & Mt) !== 0 && Gt(i, er), Ii(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = At, o = Kt, i = Je, a = Bn, s = Ft, l = je, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, At = 0, Kt = null, Bn = (c & Zt) !== 0 && (mn || !ir || Je === null), Je = (c & (Dn | hr)) === 0 ? e : null, Ft = null, Bs(e.ctx), mn = !1, ci++, e.f |= wa;
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
    if (Ri() && Kt !== null && !mn && v !== null && (e.f & (un | er | bn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Kt.length; g++)
        yu(
          Kt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (ci++, Kt !== null && (o === null ? o = Kt : o.push(.../** @type {Source[]} */
    Kt))), d;
  } finally {
    _t = n, At = r, Kt = o, Je = i, Bn = a, Ft = s, Bs(l), mn = u, e.f ^= wa;
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
  (_t === null || !_t.includes(t)) && (Gt(t, er), (t.f & (Zt | si)) === 0 && (t.f ^= si), ru(
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
    Gt(e, Mt);
    var n = Ke, r = je, o = ir;
    Ke = e, ir = !0;
    try {
      (t & Ja) !== 0 ? nf(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = pu;
      var a = e.deps, s;
      T1 && $1 && e.f & bn;
    } catch (l) {
      Di(l, e, n, r || e.ctx);
    } finally {
      ir = o, Ke = n;
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
      if ((r.f & (Oi | Tn)) === 0)
        try {
          Kr(r) && (Ai(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
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
          Kr(n) && Ai(n);
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
  if (Je !== null && !mn) {
    if (!(Ft != null && Ft.includes(e))) {
      var r = Je.deps;
      e.rv < ci && (e.rv = ci, _t === null && r !== null && r[At] === e ? At++ : _t === null ? _t = [e] : (!Bn || !_t.includes(e)) && _t.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Zt) === 0 && (o.f ^= Zt);
  }
  return n && (o = /** @type {Derived} */
  e, Kr(o) && iu(o)), Po && po.has(e) ? po.get(e) : e.v;
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
    const n = Qa(e);
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
  return hu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Hr(e);
  return t || (r.equals = rs), Br && je !== null && je.l !== null && ((n = je.l).s ?? (n.s = [])).push(r), r;
}
function J(e, t, n = !1) {
  Je !== null && !mn && Ri() && (Je.f & (un | Ja)) !== 0 && !(Ft != null && Ft.includes(e)) && G1();
  let r = n ? an(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Po ? po.set(e, t) : po.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & bn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Gt(e, (e.f & Zt) === 0 ? Mt : er)), e.wv = mu(), xu(e, bn), Ri() && Ke !== null && (Ke.f & Mt) !== 0 && (Ke.f & (Dn | hr)) === 0 && (Kt === null ? af([e]) : Kt.push(e));
  }
  return t;
}
function Zs(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function xu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ri(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & bn) === 0 && (!r && a === Ke || (Gt(a, t), (s & (Mt | Zt)) !== 0 && ((s & un) !== 0 ? xu(
        /** @type {Derived} */
        a,
        er
      ) : Ii(
        /** @type {Effect} */
        a
      ))));
    }
}
let je = null;
function Bs(e) {
  je = e;
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
function de(e, t = !1, n) {
  var r = je = {
    p: je,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Br && !t && (je.l = {
    s: null,
    u: null,
    r1: [],
    r2: Hr(!1)
  }), os(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = Ke, r = Je;
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
    je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ri() {
  return !Br || je !== null && je.l === null;
}
function as(e) {
  return je === null && Ti(), je.c ?? (je.c = new Map(gf(je) || void 0));
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
    e.autofocus = !0, Eo(() => {
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
function Mf(e) {
  var t = Je, n = Ke;
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
function tt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Cu(e, t, n, i);
  (t === document.body || t === window || t === document) && os(() => {
    t.removeEventListener(e, a, i);
  });
}
function Wr(e) {
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
    var d = Je, v = Ke;
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
            if (Mo(b)) {
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
function ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ot(e, t) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Fl) !== 0, r = (t & V1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return Ot(Ie, null), Ie;
    o === void 0 && (o = ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ vt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Jl ? document.importNode(o, !0) : o.cloneNode(!0)
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
      return Ot(Ie, null), Ie;
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
function Be(e = "") {
  if (!He) {
    var t = On(e + "");
    return Ot(t, t), t;
  }
  var n = Ie;
  return n.nodeType !== 3 && (n.before(n = On()), St(n)), Ot(n, n), n;
}
function Ue() {
  if (He)
    return Ot(Ie, null), Ie;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Ot(t, n), e;
}
function D(e, t) {
  if (He) {
    Ke.nodes_end = Ie, xn();
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
  xa(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Wa); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw _r;
    Rt(!0), St(
      /** @type {Comment} */
      i
    ), xn();
    const a = ku(e, { ...t, anchor: i });
    if (Ie === null || Ie.nodeType !== 8 || /** @type {Comment} */
    Ie.data !== Ga)
      throw Li(), _r;
    return Rt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _r)
      return t.recover === !1 && j1(), xa(), ts(n), Rt(!1), _u(e, t);
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
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = xf(g);
        t.addEventListener(g, oo, { passive: p });
        var x = wr.get(g);
        x === void 0 ? (document.addEventListener(g, oo, { passive: p }), wr.set(g, 1)) : wr.set(g, x + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = tf(() => {
    var d = n ?? t.appendChild(On());
    return Fn(() => {
      if (i) {
        de({});
        var v = (
          /** @type {ComponentContext} */
          je
        );
        v.c = i;
      }
      o && (r.$$events = o), He && Ot(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (Ke.nodes_end = Ie), i && fe();
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
function Pf(e, t) {
  const n = ka.get(e);
  return n ? (ka.delete(e), n(t)) : Promise.resolve();
}
function pe(e, t, [n, r] = [0, 0]) {
  He && n === 0 && xn();
  var o = e, i = null, a = null, s = Nt, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Wa ? r = 0 : b === Fa ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ba(), St(o), Rt(!1), p = !0, r = -1);
    }
    s ? (i ? vo(i) : g && (i = Fn(() => g(o))), a && Nr(a, () => {
      a = null;
    })) : (a ? vo(a) : g && (a = Fn(() => g(o, [n + 1, r]))), i && Nr(i, () => {
      i = null;
    })), p && Rt(!0);
  };
  jr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = Ie);
}
function zr(e, t) {
  return t;
}
function Vf(e, t, n, r) {
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
    ), r.clear(), qn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), qn(e, c.prev, c.next)), cn(c.e, !s);
    }
  });
}
function Et(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
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
  var c = null, d = !1, v = /* @__PURE__ */ be(() => {
    var g = n();
    return Mo(g) ? g : g == null ? [] : Ua(g);
  });
  jr(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let x = !1;
    if (He) {
      var b = (
        /** @type {Comment} */
        a.data === Fa
      );
      b !== (p === 0) && (a = ba(), St(a), Rt(!1), x = !0);
    }
    if (He) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Ie.nodeType === 8 && /** @type {Comment} */
        Ie.data === Ga) {
          a = /** @type {Comment} */
          Ie, x = !0, Rt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        h = Su(
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
      p > 0 && St(ba());
    }
    He || Nf(g, s, a, o, t, r, n), i !== null && (p === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Nr(c, () => {
      c = null;
    })), x && Rt(!0), f(v);
  }), He && (a = Ie);
}
function Nf(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & _1) !== 0, v = (o & (ja | Ka)) !== 0, g = e.length, p = t.items, x = t.first, b = x, $, h = null, C, w = [], k = [], P, S, z, H;
  if (d)
    for (H = 0; H < g; H += 1)
      P = e[H], S = i(P, H), z = p.get(S), z !== void 0 && ((s = z.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(z));
  for (H = 0; H < g; H += 1) {
    if (P = e[H], S = i(P, H), z = p.get(S), z === void 0) {
      var L = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      h = Su(
        L,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        S,
        H,
        r,
        o,
        a
      ), p.set(S, h), w = [], k = [], b = h.next;
      continue;
    }
    if (v && Hf(z, P, H, o), (z.e.f & Tn) !== 0 && (vo(z.e), d && ((l = z.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(z))), z !== b) {
      if ($ !== void 0 && $.has(z)) {
        if (w.length < k.length) {
          var R = k[0], O;
          h = R.prev;
          var I = w[0], M = w[w.length - 1];
          for (O = 0; O < w.length; O += 1)
            Ys(w[O], R, n);
          for (O = 0; O < k.length; O += 1)
            $.delete(k[O]);
          qn(t, I.prev, M.next), qn(t, h, I), qn(t, M, R), b = R, h = M, H -= 1, w = [], k = [];
        } else
          $.delete(z), Ys(z, b, n), qn(t, z.prev, z.next), qn(t, z, h === null ? t.first : h.next), qn(t, h, z), h = z;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== S; )
        (b.e.f & Tn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      z = b;
    }
    w.push(z), h = z, b = z.next;
  }
  if (b !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); b !== null; )
      (b.e.f & Tn) === 0 && _.push(b), b = b.next;
    var E = _.length;
    if (E > 0) {
      var T = (o & Kl) !== 0 && g === 0 ? n : null;
      if (d) {
        for (H = 0; H < E; H += 1)
          (u = _[H].a) == null || u.measure();
        for (H = 0; H < E; H += 1)
          (c = _[H].a) == null || c.fix();
      }
      Vf(t, _, T, p);
    }
  }
  d && Eo(() => {
    var V;
    if (C !== void 0)
      for (z of C)
        (V = z.a) == null || V.apply();
  }), Ke.first = t.first && t.first.e, Ke.last = h && h.e;
}
function Hf(e, t, n, r) {
  (r & ja) !== 0 && Ca(e.v, t), (r & Ka) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ja) !== 0, d = (l & k1) === 0, v = c ? d ? /* @__PURE__ */ oe(o) : Hr(o) : o, g = (l & Ka) === 0 ? a : Hr(a), p = {
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
    return p.e = Fn(() => s(e, v, g, u), He), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
function qn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ls(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Se(() => {
    var s = (
      /** @type {Effect} */
      Ke
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
        Ie.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Li(), _r;
        Ot(Ie, u), i = St(l);
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
  var r = e, o = gt, i;
  jr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), He && (r = Ie);
}
function Mu(e, t, n) {
  He && xn();
  var r = e, o, i;
  jr(() => {
    o !== (o = t()) && (i && (Nr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Xr), He && (r = Ie);
}
function zf(e, t, n, r, o, i) {
  let a = He;
  He && xn();
  var s, l, u = null;
  He && Ie.nodeType === 1 && (u = /** @type {Element} */
  Ie, xn());
  var c = (
    /** @type {TemplateNode} */
    He ? Ie : e
  ), d;
  jr(() => {
    const v = t() || null;
    var g = v === "svg" ? H1 : null;
    v !== s && (d && (v === null ? Nr(d, () => {
      d = null, l = null;
    }) : v === l ? vo(d) : cn(d)), v && v !== l && (d = Fn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Ot(u, u), r) {
        He && Cf(v) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ vt(u) : u.appendChild(On())
        );
        He && (p === null ? Rt(!1) : St(p)), r(u, p);
      }
      Ke.nodes_end = u, c.before(u);
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
function Of() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Eu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Of(e) : e ?? "";
}
const js = [...` 	
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
          (a === 0 || js.includes(r[a - 1])) && (s === r.length || js.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
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
    return r && (n += Ks(r)), o && (n += Ks(o, !0)), n = n.trim(), n === "" ? null : n;
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
const to = Symbol("class"), nr = Symbol("style"), Pu = Symbol("is custom element"), Vu = Symbol("is html");
function ar(e) {
  if (He) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          xe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          xe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, of(n), Sf();
  }
}
function sa(e, t) {
  var n = qi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Af(e, t) {
  var n = qi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function If(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = qi(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[q1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Nu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ut(e, t, n, r, o = !1) {
  var i = qi(e), a = i[Pu], s = !i[Vu];
  let l = He && a;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var v = Nu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      xt(e, g, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
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
          const k = {}, P = "$$" + C;
          let S = C.slice(2);
          var b = mf(S);
          if (hf(S) && (S = S.slice(0, -7), k.capture = !0), !b && p) {
            if (w != null) continue;
            e.removeEventListener(S, u[P], k), u[P] = null;
          }
          if (w != null)
            if (b)
              e[`__${S}`] = w, Wr([S]);
            else {
              let z = function(H) {
                u[C].call(this, H);
              };
              u[P] = Cu(S, e, z, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          xe(e, C, w);
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
              const P = t === void 0;
              if ($ === "value") {
                let S = k.defaultValue;
                k.removeAttribute($), k.defaultValue = S, k.value = k.__value = P ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = S, k.checked = P ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else h || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && xe(e, $, w);
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
      [Pu]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === N1
    })
  );
}
var Ws = /* @__PURE__ */ new Map();
function Nu(e) {
  var t = Ws.get(e.nodeName);
  if (t) return t;
  Ws.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Gl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qa(r);
  }
  return t;
}
var rr, uo, Uo, Sa, Hu;
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
        Ma.entries.set(t.target, t);
        for (var n of ut(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Tt(Ma, "entries", /* @__PURE__ */ new WeakMap());
let Rf = Ma;
var qf = /* @__PURE__ */ new Rf({
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
      Eo(() => {
        i && Gs(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function De(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    je
  ), n = t.l.u;
  if (!n) return;
  let r = () => ee(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Vr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && J1(() => {
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
function Xe(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Mo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Jt(e) {
  je === null && Ti(), Br && je.l !== null ? Bf(je).m.push(e) : ln(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  je === null && Ti(), Jt(() => () => Cn(e));
}
function Zf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Zi() {
  const e = je;
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
      const a = Mo(i) ? i.slice() : [i], s = Zf(
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
const br = [];
function jt(e, t) {
  return {
    subscribe: Ce(e, t).subscribe
  };
}
function Ce(e, t = gt) {
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
function jn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return jt(n, (a, s) => {
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
      (p, x) => cs(
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
      fo(g), d(), l = !1;
    };
  });
}
function W(e) {
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
  return e && Ea in n ? W(e) : f(r.source);
}
function Xf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = gt), e;
}
function fi(e, t) {
  return e.set(t), t;
}
function nt() {
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
function $t(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    jf
  );
}
const Kf = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Hr(0) }, Kf);
}
const Wf = {
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
function lt(...e) {
  return new Proxy({ props: e }, Wf);
}
function Qs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & S1) !== 0, a = !Br || (n & M1) !== 0, s = (n & E1) !== 0, l = (n & P1) !== 0, u = !1, c;
  s ? [c, u] = Yf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || es in e, v = s && (((o = Hn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, g = (
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
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? b() : (p = !0, x = !1, S);
    };
  else {
    var h = (i ? Vr : be)(
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
  if ((n & Wl) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(S, z) {
      return arguments.length > 0 ? ((!a || !z || C || u) && v(z ? $() : S), S) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ oe(c), P = /* @__PURE__ */ Vr(() => {
    var S = $(), z = f(k);
    return w ? (w = !1, z) : k.v = S;
  });
  return s && f(P), i || (P.equals = rs), function(S, z) {
    if (arguments.length > 0) {
      const H = z ? f(P) : a && s ? an(S) : S;
      if (!P.equals(H)) {
        if (w = !0, J(k, H), x && g !== void 0 && (g = H), Qs(P))
          return S;
        Cn(() => f(P));
      }
      return S;
    }
    return Qs(P) ? P.v : f(P);
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
      Pf(ut(this, rn));
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
        o in this.$$d || (this.$$d[o] = Qo(o, r.value, this.$$p_d, "toProp"));
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
    return ii(this.$$p_d).find(
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
        l = Qo(s, l, t), this.$$d[s] = l;
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
function Pt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Pt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Qf = { value: () => {
} };
function Bi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Jo(n);
}
function Jo(e) {
  this._ = e;
}
function Jf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Jo.prototype = Bi.prototype = {
  constructor: Jo,
  on: function(e, t) {
    var n = this._, r = Jf(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = ev(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = Js(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Js(n[o], e.name, null);
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
function Js(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Qf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Pa = "http://www.w3.org/1999/xhtml";
const el = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pa,
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
    return n === Pa && t.documentElement.namespaceURI === Pa ? t.createElement(e) : t.createElementNS(n, e);
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
  var n = t ? xv : bv, r = this._parents, o = this._groups;
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
function Pv(e) {
  e || (e = Vv);
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
function Vv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Nv() {
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
function qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Zv(e, t) {
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
  return this.each((t == null ? n.local ? Av : Dv : typeof t == "function" ? n.local ? Zv : qv : n.local ? Rv : Iv)(n, t));
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
function jv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Kv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? jv : Yv)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Iu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Wv(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Wv : typeof t == "function" ? Gv : Fv)(e, t)) : this.node()[e];
}
function Ru(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new qu(e);
}
function qu(e) {
  this._node = e, this._names = Ru(e.getAttribute("class") || "");
}
qu.prototype = {
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
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Bu(e, t) {
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
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
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function Pg(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Vg(e, t) {
  return this.each((typeof t == "function" ? Pg : Eg)(e, t));
}
function* Ng() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Yu = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Vo() {
  return new Xt([[document.documentElement]], Yu);
}
function Hg() {
  return this;
}
Xt.prototype = Vo.prototype = {
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
  selection: Hg,
  order: Ev,
  sort: Pv,
  call: Nv,
  nodes: Hv,
  node: Tv,
  size: zv,
  empty: Ov,
  each: Lv,
  attr: Bv,
  style: Kv,
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
  on: Mg,
  dispatch: Vg,
  [Symbol.iterator]: Ng
};
function Wt(e) {
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
function ju(e) {
  var t = e.document.documentElement, n = Wt(e).on("dragstart.drag", kr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", kr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ku(e, t) {
  var n = e.document.documentElement, r = Wt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Xo = (e) => () => e;
function Va(e, {
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
Va.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Og(e) {
  return !e.ctrlKey && !e.button;
}
function Lg() {
  return this.parentNode;
}
function Dg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Og, t = Lg, n = Dg, r = Ag, o = {}, i = Bi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, zg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var P = C(this, t.call(this, w, k), w, k, "mouse");
      P && (Wt(w.view).on("mousemove.drag", p, mo).on("mouseup.drag", x, mo), ju(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, P("start", w));
    }
  }
  function p(w) {
    if (kr(w), !u) {
      var k = w.clientX - s, P = w.clientY - l;
      u = k * k + P * P > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    Wt(w.view).on("mousemove.drag mouseup.drag", null), Ku(w.view, u), kr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var P = w.changedTouches, S = t.call(this, w, k), z = P.length, H, L;
      for (H = 0; H < z; ++H)
        (L = C(this, S, w, k, P[H].identifier, P[H])) && (la(w), L("start", w, P[H]));
    }
  }
  function $(w) {
    var k = w.changedTouches, P = k.length, S, z;
    for (S = 0; S < P; ++S)
      (z = o[k[S].identifier]) && (kr(w), z("drag", w, k[S]));
  }
  function h(w) {
    var k = w.changedTouches, P = k.length, S, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < P; ++S)
      (z = o[k[S].identifier]) && (la(w), z("end", w, k[S]));
  }
  function C(w, k, P, S, z, H) {
    var L = i.copy(), R = on(H || P, k), O, I, M;
    if ((M = n.call(w, new Va("beforestart", {
      sourceEvent: P,
      target: v,
      identifier: z,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), S)) != null)
      return O = M.x - R[0] || 0, I = M.y - R[1] || 0, function _(E, T, V) {
        var N = R, A;
        switch (E) {
          case "start":
            o[z] = _, A = a++;
            break;
          case "end":
            delete o[z], --a;
          // falls through
          case "drag":
            R = on(V || T, k), A = a;
            break;
        }
        L.call(
          E,
          w,
          new Va(E, {
            sourceEvent: T,
            subject: M,
            target: v,
            identifier: z,
            active: A,
            x: R[0] + O,
            y: R[1] + I,
            dx: R[0] - N[0],
            dy: R[1] - N[1],
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
function Wu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function No() {
}
var yo = 0.7, gi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rg = /^#([0-9a-f]{3,8})$/, qg = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Zg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Bg = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Xg = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Yg = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), jg = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
vs(No, bo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: Kg,
  formatHsl: Wg,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function Kg() {
  return this.rgb().formatHex8();
}
function Wg() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = qg.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Zg.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Xg.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = jg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Fg(e) {
  return e instanceof No || (e = bo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Na(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(zt, Na, Wu(No, {
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
  if (e instanceof No || (e = bo(e)), !e) return new sn();
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
vs(sn, Ug, Wu(No, {
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
    return new sn(ll(this.h), jo(this.s), jo(this.l), hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = hi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ll(this.h)}, ${jo(this.s) * 100}%, ${jo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ll(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function jo(e) {
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
function Jg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eh(e) {
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? Jg(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? Qg(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = eh(t);
  function r(o, i) {
    var a = n((o = Na(o)).r, (i = Na(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Uu(o.opacity, i.opacity);
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
var Ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ca = new RegExp(Ha.source, "g");
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
  var n = Ha.lastIndex = ca.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ha.exec(e)) && (o = ca.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Zn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? nh(l[0].x) : th(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var cl = 180 / Math.PI, Qu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ju(e, t, n, r, o, i) {
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
var Ko;
function oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Qu : Ju(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ih(e) {
  return e == null || (Ko || (Ko = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ko.setAttribute("transform", e), !(e = Ko.transform.baseVal.consolidate())) ? Qu : (e = e.matrix, Ju(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var x = g.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: Zn(u, d) }, { i: x - 2, x: Zn(c, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Zn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Zn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: Zn(u, d) }, { i: x - 2, x: Zn(c, v) });
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, p = d - l, x = g * g + p * p, b, $;
    if (x < lh)
      $ = Math.log(v / u) / t, b = function(S) {
        return [
          s + S * g,
          l + S * p,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var h = Math.sqrt(x), C = (v * v - u * u + r * x) / (2 * u * n * h), w = (v * v - u * u - r * x) / (2 * v * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), P = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (P - k) / t, b = function(S) {
        var z = S * $, H = dl(k), L = u / (n * h) * (H * ch(t * z + k) - uh(k));
        return [
          s + L * g,
          l + L * p,
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
var Lr = 0, io = 0, no = 0, tc = 1e3, pi, ao, mi = 0, dr = 0, Yi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gs() {
  return dr || (nc(fh), dr = xo.now() + Yi);
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
  gs(), ++Lr;
  for (var e = pi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Lr;
}
function fl() {
  dr = (mi = xo.now()) + Yi, Lr = io = 0;
  try {
    vh();
  } finally {
    Lr = 0, hh(), dr = 0;
  }
}
function gh() {
  var e = xo.now(), t = e - mi;
  t > tc && (Yi -= t, mi = e);
}
function hh() {
  for (var e, t = pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : pi = n);
  ao = e, Ta(r);
}
function Ta(e) {
  if (!Lr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - xo.now() - Yi)), no && (no = clearInterval(no))) : (no || (mi = xo.now(), no = setInterval(gh, tc)), Lr = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Bi("start", "end", "cancel", "interrupt"), mh = [], oc = 0, gl = 1, za = 2, ei = 3, hl = 4, Oa = 5, ti = 6;
function ji(e, t, n, r, o, i) {
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
function wh(e) {
  return this.each(function() {
    ni(this, e);
  });
}
function bh(e, t) {
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
function xh(e, t, n) {
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
  return this.each((t == null ? bh : xh)(n, e, t));
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
  return (typeof t == "number" ? Zn : t instanceof bo ? ul : (n = bo(t)) ? (t = n, ul) : rh)(e, t);
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
function Ph(e, t) {
  var n = Xi(e), r = n === "transform" ? sh : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Eh : Mh)(n, r, ps(this, "attr." + e, t)) : t == null ? (n.local ? _h : Ch)(n) : (n.local ? Sh : kh)(n, r, t));
}
function Vh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Nh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Hh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nh(e, i)), n;
  }
  return o._value = t, o;
}
function Th(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Vh(e, i)), n;
  }
  return o._value = t, o;
}
function zh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? Hh : Th)(r, t));
}
function Oh(e, t) {
  return function() {
    hs(this, e).delay = +t.apply(this, arguments);
  };
}
function Lh(e, t) {
  return t = +t, function() {
    hs(this, e).delay = t;
  };
}
function Dh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Oh : Lh)(t, e)) : gn(this.node(), t).delay;
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
function qh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function Zh(e) {
  var t = this._id;
  return arguments.length ? this.each(qh(t, e)) : gn(this.node(), t).ease;
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
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function jh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Ln(a, this._parents, this._name, this._id);
}
function Kh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Wh(e, t, n) {
  var r, o, i = Kh(t) ? hs : Mn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(Wh(n, e, t));
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
  typeof e != "function" && (e = ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, ji(u[v], t, n, v, u, gn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Jh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ou(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, p = gn(c, n), x = 0, b = v.length; x < b; ++x)
          (g = v[x]) && ji(g, t, n, x, v, p);
        i.push(v), a.push(c);
      }
  return new Ln(i, a, t, n);
}
var ep = Vo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
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
function rp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Or(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Or(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Or(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
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
        ji(l, e, n, u, a, {
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
      var u = Mn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var yp = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++yp;
}
var Pn = Vo.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Qh,
  selectAll: Jh,
  selectChild: Pn.selectChild,
  selectChildren: Pn.selectChildren,
  filter: Yh,
  merge: jh,
  selection: tp,
  transition: pp,
  call: Pn.call,
  nodes: Pn.nodes,
  node: Pn.node,
  size: Pn.size,
  empty: Pn.empty,
  each: Pn.each,
  on: Fh,
  attr: Ph,
  attrTween: zh,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Dh,
  duration: Rh,
  ease: Zh,
  easeVarying: Xh,
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
  e instanceof Ln ? (t = e._id, e = e._name) : (t = sc(), (n = bp).time = gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && ji(l, e, t, u, a, n || xp(l, t));
  return new Ln(r, this._parents, e, t);
}
Vo.prototype.interrupt = wh;
Vo.prototype.transition = $p;
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
function Vn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Vn.prototype = {
  constructor: Vn,
  scale: function(e) {
    return e === 1 ? this : new Vn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Vn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ki = new Vn(1, 0, 0);
lc.prototype = Vn.prototype;
function lc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ki;
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
  return this.__zoom || Ki;
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
  var e = _p, t = kp, n = Ep, r = Sp, o = Mp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Bi("start", "zoom", "end"), c, d, v, g = 500, p = 150, x = 0, b = 10;
  function $(M) {
    M.property("__zoom", pl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(M, _, E, T) {
    var V = M.selection ? M.selection() : M;
    V.property("__zoom", pl), M !== V ? k(M, _, E, T) : V.interrupt().each(function() {
      P(this, arguments).event(T).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(M, _, E, T) {
    $.scaleTo(M, function() {
      var V = this.__zoom.k, N = typeof _ == "function" ? _.apply(this, arguments) : _;
      return V * N;
    }, E, T);
  }, $.scaleTo = function(M, _, E, T) {
    $.transform(M, function() {
      var V = t.apply(this, arguments), N = this.__zoom, A = E == null ? w(V) : typeof E == "function" ? E.apply(this, arguments) : E, B = N.invert(A), j = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(h(N, j), A, B), V, a);
    }, E, T);
  }, $.translateBy = function(M, _, E, T) {
    $.transform(M, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), a);
    }, null, T);
  }, $.translateTo = function(M, _, E, T, V) {
    $.transform(M, function() {
      var N = t.apply(this, arguments), A = this.__zoom, B = T == null ? w(N) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Ki.translate(B[0], B[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), N, a);
    }, T, V);
  };
  function h(M, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === M.k ? M : new Vn(_, M.x, M.y);
  }
  function C(M, _, E) {
    var T = _[0] - E[0] * M.k, V = _[1] - E[1] * M.k;
    return T === M.x && V === M.y ? M : new Vn(M.k, T, V);
  }
  function w(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function k(M, _, E, T) {
    M.on("start.zoom", function() {
      P(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var V = this, N = arguments, A = P(V, N).event(T), B = t.apply(V, N), j = E == null ? w(B) : typeof E == "function" ? E.apply(V, N) : E, G = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), U = V.__zoom, K = typeof _ == "function" ? _.apply(V, N) : _, ce = l(U.invert(j).concat(G / U.k), K.invert(j).concat(G / K.k));
      return function(se) {
        if (se === 1) se = K;
        else {
          var me = ce(se), ae = G / me[2];
          se = new Vn(ae, j[0] - me[0] * ae, j[1] - me[1] * ae);
        }
        A.zoom(null, se);
      };
    });
  }
  function P(M, _, E) {
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
      var _ = Wt(this.that).datum();
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
    var E = P(this, _).event(M), T = this.__zoom, V = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), N = on(M);
    if (E.wheel)
      (E.mouse[0][0] !== N[0] || E.mouse[0][1] !== N[1]) && (E.mouse[1] = T.invert(E.mouse[0] = N)), clearTimeout(E.wheel);
    else {
      if (T.k === V) return;
      E.mouse = [N, T.invert(N)], ni(this), E.start();
    }
    ro(M), E.wheel = setTimeout(A, p), E.zoom("mouse", n(C(h(T, V), E.mouse[0], E.mouse[1]), E.extent, a));
    function A() {
      E.wheel = null, E.end();
    }
  }
  function H(M, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var E = M.currentTarget, T = P(this, _, !0).event(M), V = Wt(M.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", G, !0), N = on(M, E), A = M.clientX, B = M.clientY;
    ju(M.view), da(M), T.mouse = [N, this.__zoom.invert(N)], ni(this), T.start();
    function j(U) {
      if (ro(U), !T.moved) {
        var K = U.clientX - A, ce = U.clientY - B;
        T.moved = K * K + ce * ce > x;
      }
      T.event(U).zoom("mouse", n(C(T.that.__zoom, T.mouse[0] = on(U, E), T.mouse[1]), T.extent, a));
    }
    function G(U) {
      V.on("mousemove.zoom mouseup.zoom", null), Ku(U.view, T.moved), ro(U), T.event(U).end();
    }
  }
  function L(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, T = on(M.changedTouches ? M.changedTouches[0] : M, this), V = E.invert(T), N = E.k * (M.shiftKey ? 0.5 : 2), A = n(C(h(E, N), T, V), t.apply(this, _), a);
      ro(M), s > 0 ? Wt(this).transition().duration(s).call(k, A, T, M) : Wt(this).call($.transform, A, T, M);
    }
  }
  function R(M, ..._) {
    if (e.apply(this, arguments)) {
      var E = M.touches, T = E.length, V = P(this, _, M.changedTouches.length === T).event(M), N, A, B, j;
      for (da(M), A = 0; A < T; ++A)
        B = E[A], j = on(B, this), j = [j, this.__zoom.invert(j), B.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== j[2] && (V.touch1 = j, V.taps = 0) : (V.touch0 = j, N = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), N && (V.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, g)), ni(this), V.start());
    }
  }
  function O(M, ..._) {
    if (this.__zooming) {
      var E = P(this, _).event(M), T = M.changedTouches, V = T.length, N, A, B, j;
      for (ro(M), N = 0; N < V; ++N)
        A = T[N], B = on(A, this), E.touch0 && E.touch0[2] === A.identifier ? E.touch0[0] = B : E.touch1 && E.touch1[2] === A.identifier && (E.touch1[0] = B);
      if (A = E.that.__zoom, E.touch1) {
        var G = E.touch0[0], U = E.touch0[1], K = E.touch1[0], ce = E.touch1[1], se = (se = K[0] - G[0]) * se + (se = K[1] - G[1]) * se, me = (me = ce[0] - U[0]) * me + (me = ce[1] - U[1]) * me;
        A = h(A, Math.sqrt(se / me)), B = [(G[0] + K[0]) / 2, (G[1] + K[1]) / 2], j = [(U[0] + ce[0]) / 2, (U[1] + ce[1]) / 2];
      } else if (E.touch0) B = E.touch0[0], j = E.touch0[1];
      else return;
      E.zoom("touch", n(C(A, B, j), E.extent, a));
    }
  }
  function I(M, ..._) {
    if (this.__zooming) {
      var E = P(this, _).event(M), T = M.changedTouches, V = T.length, N, A;
      for (da(M), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), N = 0; N < V; ++N)
        A = T[N], E.touch0 && E.touch0[2] === A.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === A.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (A = on(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < b)) {
        var B = Wt(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : Wo(+M), $) : r;
  }, $.filter = function(M) {
    return arguments.length ? (e = typeof M == "function" ? M : Wo(!!M), $) : e;
  }, $.touchable = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : Wo(!!M), $) : o;
  }, $.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : Wo([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), $) : t;
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
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
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
var Mr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mr || (Mr = {}));
var $o;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})($o || ($o = {}));
var Ne;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ne || (Ne = {}));
const ml = {
  [Ne.Left]: Ne.Right,
  [Ne.Right]: Ne.Left,
  [Ne.Top]: Ne.Bottom,
  [Ne.Bottom]: Ne.Top
};
function Pp(e, t) {
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
function Vp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Np = (e) => "id" in e && "source" in e && "target" in e, Hp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ho = (e, t = [0, 0]) => {
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
    const s = a ? xi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Wi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Fi(n);
}, To = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = xi(r);
      n = Wi(n, o);
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
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = Co(s, Ir(u)), b = (g ?? 0) * (p ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
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
async function Op({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = zp(e, a), l = To(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Lp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
}, Wi = (e, t) => ({
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
}, gc = (e, t) => Fi(Wi(Aa(e), Aa(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bl = (e) => Nn(e.width) && Nn(e.height) && Nn(e.x) && Nn(e.y), Nn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
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
function Ap(e, t, n) {
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
  const a = Ap(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ar(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, g = t / 2 - d * c, p = n / 2 - v * c, x = Ip(e, g, p, c, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: g - b.left + b.right,
    y: p - b.top + b.bottom,
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
function qp() {
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
}), Zp = (e) => {
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
    case Ne.Left:
      return [t - Fo(t - r, i), n];
    case Ne.Right:
      return [t + Fo(r - t, i), n];
    case Ne.Top:
      return [t, n - Fo(n - o, i)];
    case Ne.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function yc({ sourceX: e, sourceY: t, sourcePosition: n = Ne.Bottom, targetX: r, targetY: o, targetPosition: i = Ne.Top, curvature: a = 0.25 }) {
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
function jp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Kp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Wi(xi(e), xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(a, Fi(i)) > 0;
}
const Wp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Fp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Np(e) ? n = { ...e } : n = {
    ...e,
    id: Wp(e)
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
  [Ne.Left]: { x: -1, y: 0 },
  [Ne.Right]: { x: 1, y: 0 },
  [Ne.Top]: { x: 0, y: -1 },
  [Ne.Bottom]: { x: 0, y: 1 }
}, Up = ({ source: e, sourcePosition: t = Ne.Bottom, target: n }) => t === Ne.Left || t === Ne.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Qp({ source: e, sourcePosition: t = Ne.Bottom, target: n, targetPosition: r = Ne.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Up({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let g = [], p, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, C, w, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, x = o.y ?? C;
    const P = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], S = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? g = d === "x" ? P : S : g = d === "x" ? S : P;
  } else {
    const P = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? S : P : g = a.y === v ? P : S, t === r) {
      const O = Math.abs(e[d] - n[d]);
      if (O <= i) {
        const I = Math.min(i - 1, i - O);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * I : $[d] = (u[d] > n[d] ? -1 : 1) * I;
      }
    }
    if (t !== r) {
      const O = d === "x" ? "y" : "x", I = a[d] === s[O], M = l[O] > u[O], _ = l[O] < u[O];
      (a[d] === 1 && (!I && M || I && _) || a[d] !== 1 && (!I && _ || I && M)) && (g = d === "x" ? P : S);
    }
    const z = { x: l.x + b.x, y: l.y + b.y }, H = { x: u.x + $.x, y: u.y + $.y }, L = Math.max(Math.abs(z.x - g[0].x), Math.abs(H.x - g[0].x)), R = Math.max(Math.abs(z.y - g[0].y), Math.abs(H.y - g[0].y));
    L >= R ? (p = (z.x + H.x) / 2, x = g[0].y) : (p = g[0].x, x = (z.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], p, x, w, k];
}
function Jp(e, t, n, r) {
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
function _i({ sourceX: e, sourceY: t, sourcePosition: n = Ne.Bottom, targetX: r, targetY: o, targetPosition: i = Ne.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, g, p] = Qp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let h = "";
    return $ > 0 && $ < c.length - 1 ? h = Jp(c[$ - 1], b, c[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
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
  const l = (a == null ? void 0 : a.position) || Ne.Bottom, u = (s == null ? void 0 : s.position) || Ne.Top, c = _o(n, a, l), d = _o(r, s, u);
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
function _o(e, t, n = Ne.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ne.Top:
      return { x: o + a / 2, y: i };
    case Ne.Right:
      return { x: o + a, y: i + s / 2 };
    case Ne.Bottom:
      return { x: o + a / 2, y: i + s };
    case Ne.Left:
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
    case Ne.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Ne.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Ne.Left:
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
      const v = Ho(c, a.nodeOrigin), g = Rr(c.extent) ? c.extent : a.nodeExtent, p = vr(v, g, tr(c));
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
function xc(e, t) {
  return (Nn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Ir(l), c = gc(u, s.rect);
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
    const p = pc(v.nodeElement), x = g.measured.width !== p.width || g.measured.height !== p.height;
    if (p.width && p.height && (x || !g.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = Rr(g.extent) ? g.extent : i;
      let { positionAbsolute: h } = g.internals;
      g.parentId && g.extent === "parent" ? h = fc(h, p, t.get(g.parentId)) : $ && (h = vr(h, $, p));
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
      t.set(g.id, C), g.parentId && $s(C, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
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
  function p({ noDragClassName: b, handleSelector: $, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = Wt(h);
    function P({ x: L, y: R }, O) {
      const { nodeLookup: I, nodeExtent: M, snapGrid: _, snapToGrid: E, nodeOrigin: T, onNodeDrag: V, onSelectionDrag: N, onError: A, updateNodePositions: B } = t();
      i = { x: L, y: R };
      let j = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const U = To(s);
        G = Aa(U);
      }
      for (const [U, K] of s) {
        if (!I.has(U))
          continue;
        let ce = { x: L - K.distance.x, y: R - K.distance.y };
        E && (ce = ys(ce, _));
        let se = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !K.extent) {
          const { positionAbsolute: _e } = K.internals, he = _e.x - G.x + M[0][0], Ve = _e.x + K.measured.width - G.x2 + M[1][0], ie = _e.y - G.y + M[0][1], Q = _e.y + K.measured.height - G.y2 + M[1][1];
          se = [
            [he, ie],
            [Ve, Q]
          ];
        }
        const { position: me, positionAbsolute: ae } = Lp({
          nodeId: U,
          nextPosition: ce,
          nodeLookup: I,
          nodeExtent: se,
          nodeOrigin: T,
          onError: A
        });
        j = j || K.position.x !== me.x || K.position.y !== me.y, K.position = me, K.internals.positionAbsolute = ae;
      }
      if (j && (B(s, !0), O && (r || V || !w && N))) {
        const [U, K] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        r == null || r(O, s, U, K), V == null || V(O, U, K), w || N == null || N(O, K);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: L, panBy: R, autoPanSpeed: O, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [M, _] = vc(u, c, O);
      (M !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - M / L[2], i.y = (i.y ?? 0) - _ / L[2], await R({ x: M, y: _ }) && P(i, null)), a = requestAnimationFrame(S);
    }
    function z(L) {
      var R;
      const { nodeLookup: O, multiSelectionActive: I, nodesDraggable: M, transform: _, snapGrid: E, snapToGrid: T, selectNodesOnDrag: V, onNodeDragStart: N, onSelectionDragStart: A, unselectNodesAndEdges: B } = t();
      d = !0, (!V || !C) && !I && w && ((R = O.get(w)) != null && R.selected || B()), C && V && w && (e == null || e(w));
      const j = fa(L.sourceEvent, { transform: _, snapGrid: E, snapToGrid: T, containerBounds: c });
      if (i = j, s = d0(O, M, j, w), s.size > 0 && (n || N || !w && A)) {
        const [G, U] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: O
        });
        n == null || n(L.sourceEvent, s, G, U), N == null || N(L.sourceEvent, G, U), w || A == null || A(L.sourceEvent, U);
      }
    }
    const H = Ig().clickDistance(k).on("start", (L) => {
      const { domNode: R, nodeDragThreshold: O, transform: I, snapGrid: M, snapToGrid: _ } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, g = !1, O === 0 && z(L), i = fa(L.sourceEvent, { transform: I, snapGrid: M, snapToGrid: _, containerBounds: c }), u = zn(L.sourceEvent, c);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: R, transform: O, snapGrid: I, snapToGrid: M, nodeDragThreshold: _, nodeLookup: E } = t(), T = fa(L.sourceEvent, { transform: O, snapGrid: I, snapToGrid: M, containerBounds: c });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !E.has(w)) && (g = !0), !g) {
        if (!l && R && d && (l = !0, S()), !d) {
          const V = T.xSnapped - (i.x ?? 0), N = T.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + N * N) > _ && z(L);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && s && d && (u = zn(L.sourceEvent, c), P(T, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: O, onNodeDragStop: I, onSelectionDragStop: M } = t();
        if (O(s, !1), o || I || !w && M) {
          const [_, E] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(L.sourceEvent, s, _, E), I == null || I(L.sourceEvent, _, E), w || M == null || M(L.sourceEvent, E);
        }
      }
    }).filter((L) => {
      const R = L.target;
      return !L.button && (!b || !Pl(R, `.${b}`, h)) && (!$ || Pl(R, $, h));
    });
    v.call(H);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
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
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: b, isValidConnection: $ = Sc, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: P }) {
  const S = Zp(e.target);
  let z = 0, H;
  const { x: L, y: R } = zn(e), O = S == null ? void 0 : S.elementFromPoint(L, R), I = kc(i, O), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !I)
    return;
  const _ = _c(o, I, r, l, t);
  if (!_)
    return;
  let E = zn(e, M), T = !1, V = null, N = !1, A = null;
  function B() {
    if (!c || !M)
      return;
    const [me, ae] = vc(E, M, P);
    v({ x: me, y: ae }), z = requestAnimationFrame(B);
  }
  const j = {
    ..._,
    nodeId: o,
    type: I,
    position: _.position
  }, G = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: _o(G, j, Ne.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: G,
    to: E,
    toHandle: null,
    toPosition: ml[j.position],
    toNode: null
  };
  C(U);
  let K = U;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function ce(me) {
    if (!k() || !j) {
      se(me);
      return;
    }
    const ae = w();
    E = zn(me, M), H = h0(zo(E, ae, !1, [1, 1]), n, l, j), T || (B(), T = !0);
    const _e = Mc(me, {
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
    A = _e.handleDomNode, V = _e.connection, N = p0(!!H, _e.isValid);
    const he = {
      // from stays the same
      ...K,
      isValid: N,
      to: H && N ? $i({ x: H.x, y: H.y }, ae) : E,
      toHandle: _e.toHandle,
      toPosition: N && _e.toHandle ? _e.toHandle.position : ml[j.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    N && H && K.toHandle && he.toHandle && K.toHandle.type === he.toHandle.type && K.toHandle.nodeId === he.toHandle.nodeId && K.toHandle.id === he.toHandle.id && K.to.x === he.to.x && K.to.y === he.to.y || (C(he), K = he);
  }
  function se(me) {
    (H || A) && V && N && (x == null || x(V));
    const { inProgress: ae, ..._e } = K, he = {
      ..._e,
      toPosition: K.toHandle ? K.toPosition : null
    };
    b == null || b(me, he), i && (h == null || h(me, he)), g(), cancelAnimationFrame(z), T = !1, N = !1, V = null, A = null, S.removeEventListener("mousemove", ce), S.removeEventListener("mouseup", se), S.removeEventListener("touchmove", ce), S.removeEventListener("touchend", se);
  }
  S.addEventListener("mousemove", ce), S.addEventListener("mouseup", se), S.addEventListener("touchmove", ce), S.addEventListener("touchend", se);
}
function Mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = zn(e), x = a.elementFromPoint(g, p), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const h = kc(void 0, b), C = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), P = b.classList.contains("connectableend");
    if (!C || !h)
      return $;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = S;
    const z = k && P && (n === fr.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    $.isValid = z && u(S), $.toHandle = _c(C, h, w, c, n, !1);
  }
  return $;
}
const y0 = {
  onPointerDown: m0,
  isValid: Mc
};
function w0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Wt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const p = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, P = w[2] * Math.pow(2, k);
      t.scaleTo(P);
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
      ], P = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), z = {
        x: w[0] - P[0] * S,
        y: w[1] - P[1] * S
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: w[2]
      }, H, s);
    }, h = uc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? p : null);
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
const b0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ga = ({ x: e, y: t, zoom: n }) => Ki.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Ec = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ha = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Pc = (e) => {
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
      const b = on(c), $ = Pc(c), h = d * Math.pow(2, $);
      r.scaleTo(n, h, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === Kn.Vertical ? 0 : c.deltaX * v, p = o === Kn.Horizontal ? 0 : c.deltaY * v;
    !Ci() && c.shiftKey && o !== Kn.Vertical && (g = c.deltaY * v, p = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(p / d) * i,
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
    e.usedRightMouseButton = !!(n && Ec(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Gi(i.transform)));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Ec(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && b0(e.prevViewport, a.transform))) {
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
  }, d = e.getBoundingClientRect(), v = uc().clickDistance(!Nn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Wt(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Ar(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  v.wheelDelta(Pc);
  function b(O, I) {
    return g ? new Promise((M) => {
      v == null || v.transform(ha(g, I == null ? void 0 : I.duration, () => M(!0)), O);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: O, noPanClassName: I, onPaneContextMenu: M, userSelectionActive: _, panOnScroll: E, panOnDrag: T, panOnScrollMode: V, panOnScrollSpeed: N, preventScrolling: A, zoomOnPinch: B, zoomOnScroll: j, zoomOnDoubleClick: G, zoomActivationKeyPressed: U, lib: K, onTransformChange: ce }) {
    _ && !c.isZoomingOrPanning && h();
    const se = E && !U && !_ ? x0({
      zoomPanValues: c,
      noWheelClassName: O,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: V,
      panOnScrollSpeed: N,
      zoomOnPinch: B,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : $0({
      noWheelClassName: O,
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
      const _e = _0({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!M,
        onPanZoom: a,
        onTransformChange: ce
      });
      v.on("zoom", _e);
      const he = k0({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: E,
        onPaneContextMenu: M,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", he);
    }
    const me = S0({
      zoomActivationKeyPressed: U,
      panOnDrag: T,
      zoomOnScroll: j,
      panOnScroll: E,
      zoomOnDoubleClick: G,
      zoomOnPinch: B,
      userSelectionActive: _,
      noPanClassName: I,
      noWheelClassName: O,
      lib: K
    });
    v.filter(me), G ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(O, I, M) {
    const _ = ga(O), E = v == null ? void 0 : v.constrain()(_, I, M);
    return E && await b(E), new Promise((T) => T(E));
  }
  async function w(O, I) {
    const M = ga(O);
    return await b(M, I), new Promise((_) => _(M));
  }
  function k(O) {
    if (g) {
      const I = ga(O), M = g.property("__zoom");
      (M.k !== O.zoom || M.x !== O.x || M.y !== O.y) && (v == null || v.transform(g, I, null, { sync: !0 }));
    }
  }
  function P() {
    const O = g ? lc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: O.x, y: O.y, zoom: O.k };
  }
  function S(O, I) {
    return g ? new Promise((M) => {
      v == null || v.scaleTo(ha(g, I == null ? void 0 : I.duration, () => M(!0)), O);
    }) : Promise.resolve(!1);
  }
  function z(O, I) {
    return g ? new Promise((M) => {
      v == null || v.scaleBy(ha(g, I == null ? void 0 : I.duration, () => M(!0)), O);
    }) : Promise.resolve(!1);
  }
  function H(O) {
    v == null || v.scaleExtent(O);
  }
  function L(O) {
    v == null || v.translateExtent(O);
  }
  function R(O) {
    const I = !Nn(O) || O < 0 ? 0 : O;
    v == null || v.clickDistance(I);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: S,
    scaleBy: z,
    setScaleExtent: H,
    setTranslateExtent: L,
    syncViewport: k,
    setClickDistance: R
  };
}
var Vl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Vl || (Vl = {}));
var E0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(G, "$connectable", n), i = () => te(me, "$connectionRadius", n), a = () => te(ce, "$domNode", n), s = () => te(se, "$nodeLookup", n), l = () => te(K, "$connectionMode", n), u = () => te(he, "$lib", n), c = () => te(Le, "$autoPanOnConnect", n), d = () => te(Te, "$flowId", n), v = () => te(_e, "$isValidConnectionStore", n), g = () => te(ie, "$onedgecreate", n), p = () => te(ye, "$onConnectAction", n), x = () => te($e, "$onConnectStartAction", n), b = () => te(Me, "$onConnectEndAction", n), $ = () => te(ae, "$viewport", n), h = () => te(at, "$connection", n), C = () => te(Ye, "$edges", n), w = () => te(le, "$connectionLookup", n), k = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), H = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe(), R = /* @__PURE__ */ oe(), O = /* @__PURE__ */ oe();
  let I = y(t, "id", 12, void 0), M = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => Ne.Top), E = y(t, "style", 12, void 0), T = y(t, "isValidConnection", 12, void 0), V = y(t, "onconnect", 12, void 0), N = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), B = y(t, "class", 12, void 0);
  const j = ur("svelteflow__node_id"), G = ur("svelteflow__node_connectable"), U = We(), {
    connectionMode: K,
    domNode: ce,
    nodeLookup: se,
    connectionRadius: me,
    viewport: ae,
    isValidConnection: _e,
    lib: he,
    addEdge: Ve,
    onedgecreate: ie,
    panBy: Q,
    cancelConnection: Ee,
    updateConnection: F,
    autoPanOnConnect: Le,
    edges: Ye,
    connectionLookup: le,
    onconnect: ye,
    onconnectstart: $e,
    onconnectend: Me,
    flowId: Te,
    connection: at
  } = U;
  function et(ze) {
    const rt = mc(ze);
    (rt && ze.button === 0 || !rt) && y0.onPointerDown(ze, {
      handleId: f(S),
      nodeId: j,
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
      panBy: Q,
      onConnect: (qe) => {
        var Ae;
        const ot = g() ? g()(qe) : qe;
        ot && (Ve(ot), (Ae = p()) == null || Ae(qe));
      },
      onConnectStart: (qe, Ae) => {
        var ot;
        (ot = x()) == null || ot(qe, {
          nodeId: Ae.nodeId,
          handleId: Ae.handleId,
          handleType: Ae.handleType
        });
      },
      onConnectEnd: (qe, Ae) => {
        var ot;
        (ot = b()) == null || ot(qe, Ae);
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
  ve(() => ee(M()), () => {
    J(k, M() === "target");
  }), ve(
    () => (ee(A()), o()),
    () => {
      J(P, A() !== void 0 ? A() : o());
    }
  ), ve(() => ee(I()), () => {
    J(S, I() || null);
  }), ve(
    () => (ee(V()), ee(N()), C(), w(), ee(M()), ee(I())),
    () => {
      (V() || N()) && (C(), J(Re, w().get(`${j}-${M()}${I() ? `-${I()}` : ""}`)));
    }
  ), ve(
    () => (f(ne), f(Re), ee(N()), ee(V())),
    () => {
      if (f(ne) && !Pp(f(Re), f(ne))) {
        const ze = f(Re) ?? /* @__PURE__ */ new Map();
        yl(f(ne), ze, N()), yl(ze, f(ne), V());
      }
      J(ne, f(Re) ?? /* @__PURE__ */ new Map());
    }
  ), ve(() => h(), () => {
    J(z, !!h().fromHandle);
  }), ve(
    () => (h(), ee(M()), f(S)),
    () => {
      var ze, rt, qe;
      J(H, ((ze = h().fromHandle) == null ? void 0 : ze.nodeId) === j && ((rt = h().fromHandle) == null ? void 0 : rt.type) === M() && ((qe = h().fromHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), ve(
    () => (h(), ee(M()), f(S)),
    () => {
      var ze, rt, qe;
      J(L, ((ze = h().toHandle) == null ? void 0 : ze.nodeId) === j && ((rt = h().toHandle) == null ? void 0 : rt.type) === M() && ((qe = h().toHandle) == null ? void 0 : qe.id) === f(S));
    }
  ), ve(
    () => (l(), h(), ee(M()), f(S)),
    () => {
      var ze, rt, qe;
      J(R, l() === fr.Strict ? ((ze = h().fromHandle) == null ? void 0 : ze.type) !== M() : j !== ((rt = h().fromHandle) == null ? void 0 : rt.nodeId) || f(S) !== ((qe = h().fromHandle) == null ? void 0 : qe.id));
    }
  ), ve(() => (f(L), h()), () => {
    J(O, f(L) && h().isValid);
  }), yt(), De();
  var ge = E0();
  xe(ge, "data-nodeid", j);
  let en;
  var tn = Y(ge);
  bt(tn, t, "default", {}), Z(ge), Se(
    (ze, rt) => {
      xe(ge, "data-handleid", f(S)), xe(ge, "data-handlepos", _()), xe(ge, "data-id", `${d() ?? ""}-${j ?? ""}-${(I() || "") ?? ""}-${M() ?? ""}`), en = xt(ge, 1, ze, null, en, rt), ft(ge, E());
    },
    [
      () => vn(Pt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        B()
      ])),
      () => ({
        valid: f(O),
        connectingto: f(L),
        connectingfrom: f(H),
        source: !f(k),
        target: f(k),
        connectablestart: f(P),
        connectableend: f(P),
        connectable: f(P),
        connectionindicator: f(P) && (!f(z) || f(R))
      })
    ],
    be
  ), tt("mousedown", ge, et), tt("touchstart", ge, et), D(e, ge);
  var pn = fe({
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
      return V();
    },
    set onconnect(ze) {
      V(ze), m();
    },
    get ondisconnect() {
      return N();
    },
    set ondisconnect(ze) {
      N(ze), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(ze) {
      A(ze), m();
    },
    get class() {
      return B();
    },
    set class(ze) {
      B(ze), m();
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
var P0 = /* @__PURE__ */ re("<!> <!>", 1);
function ki(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  De();
  var a = P0(), s = we(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ne.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = q(s), c = q(u);
  const d = /* @__PURE__ */ be(() => i() ?? Ne.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Se(() => {
    var v;
    return dt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), D(e, a), fe({
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
var V0 = /* @__PURE__ */ re(" <!>", 1);
function Vc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), de(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  De(), Oe();
  var i = V0(), a = we(i), s = q(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ne.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), fe({
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
ue(Vc, { data: {}, sourcePosition: {} }, [], [], !0);
var N0 = /* @__PURE__ */ re(" <!>", 1);
function Nc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), de(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  De(), Oe();
  var i = N0(), a = we(i), s = q(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ne.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return dt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), fe({
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
ue(Hc, {}, [], [], !0);
function Nl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Si(e, { target: t, domNode: n }) {
  return Nl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Nl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var H0 = /* @__PURE__ */ re("<div><!></div>");
function Tc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(i, "$domNode", n), { domNode: i } = We();
  De();
  var a = H0(), s = Y(a);
  bt(s, t, "default", {}), Z(a), wt(a, (l, u) => Si == null ? void 0 : Si(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), fe(), r();
}
ue(Tc, {}, ["default"], [], !0);
function zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = We();
  return (s) => {
    const l = W(e).get(s);
    if (!l) {
      console.warn("012", Dr.error012(s));
      return;
    }
    (l.selectable || W(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && W(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var T0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Oc(e, t) {
  de(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = zc(), a = ur("svelteflow__edge_id");
  return De(), Tc(e, {
    children: (s, l) => {
      var u = T0();
      let c;
      var d = Y(u);
      bt(d, t, "default", {}), Z(u), Se(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), tt("keyup", u, () => {
      }), tt("click", u, () => {
        a && i(a);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
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
  de(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  De();
  var p = O0(), x = we(p), b = q(x);
  {
    var $ = (w) => {
      var k = z0();
      xe(k, "stroke-opacity", 0), xe(k, "stroke-width", g), Se(() => xe(k, "d", r())), D(w, k);
    };
    pe(b, (w) => {
      g && w($);
    });
  }
  var h = q(b);
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
        children: (k, P) => {
          Oe();
          var S = Be();
          Se(() => dt(S, o())), D(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    pe(h, (w) => {
      o() && w(C);
    });
  }
  return Se(
    (w) => {
      xe(x, "id", n()), xe(x, "d", r()), xt(x, 0, w), xe(x, "marker-start", l()), xe(x, "marker-end", u()), ft(x, c());
    },
    [
      () => vn(Pt(["svelte-flow__edge-path", v()]))
    ],
    be
  ), D(e, p), fe({
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ve(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(x()), ee(b()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(yc({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), yt(), De(), Oo(e, {
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
  }), fe({
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
function Lc(e, t) {
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ve(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(x()), ee(b()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(_i({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), yt(), De(), Oo(e, {
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
  }), fe({
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return ve(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(p()), ee(x())),
    () => {
      ((b) => (J(r, b[0]), J(o, b[1]), J(i, b[2])))(Ia({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), yt(), De(), Oo(e, {
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
  }), fe({
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return ve(
    () => (f(r), f(o), f(i), ee(v()), ee(g()), ee(x()), ee(b()), ee(p()), ee($())),
    () => {
      ((h) => (J(r, h[0]), J(o, h[1]), J(i, h[2])))(_i({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), yt(), De(), Oo(e, {
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
  }), fe({
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
  const n = e.set, r = t.set, o = W(e), i = W(t);
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
  let o = W(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const A0 = (e, t, n) => {
  if (!n)
    return;
  const r = W(e), o = t.set, i = n.set;
  let a = n ? W(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, I0 = (e, t, n, r = [0, 0], o = wi, i, a, s, l, u, c, d, v) => {
  const { subscribe: g, set: p, update: x } = Ce([]);
  let b = e, $ = {}, h = !0;
  const C = (S) => {
    const z = bc(S, t, n, {
      elevateNodesOnSelect: h,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return W(i) && z && W(l) && (Op({
      nodes: t,
      width: W(u),
      height: W(c),
      panZoom: W(l),
      minZoom: W(d),
      maxZoom: W(v)
    }, W(a)).then((H) => {
      var L;
      (L = W(s)) == null || L.resolve(H), s.set(null);
    }), i.set(!1), a.set(void 0)), b = S, p(b), b;
  }, w = (S) => C(S(b)), k = (S) => {
    $ = S;
  }, P = (S) => {
    h = S.elevateNodesOnSelect ?? h;
  };
  return C(b), {
    subscribe: g,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: P
  };
}, R0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Ce([]);
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
  input: Vc,
  output: Nc,
  default: ki,
  group: Hc
}, Rc = {
  straight: Dc,
  smoothstep: Lc,
  default: Mi,
  step: Ac
}, q0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? wi;
  bc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const P = To(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    g = ws(P, n, r, 0.5, 2, 0.1);
  }
  const p = Ce(!1), x = Ce(void 0), b = Ce(null), $ = Ce(null), h = Ce(500), C = Ce(500), w = Ce(0.5), k = Ce(2);
  return {
    flowId: Ce(null),
    nodes: I0(e, s, l, d, v, p, x, b, $, h, C, w, k),
    nodeLookup: jt(s),
    parentLookup: jt(l),
    edgeLookup: jt(c),
    visibleNodes: jt([]),
    edges: R0(t, u, c),
    visibleEdges: jt([]),
    connectionLookup: jt(u),
    width: h,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: Ce(d),
    nodeDragThreshold: Ce(1),
    nodeExtent: Ce(v),
    translateExtent: Ce(wi),
    autoPanOnNodeDrag: Ce(!0),
    autoPanOnConnect: Ce(!0),
    fitViewQueued: p,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Ce(null),
    dragging: Ce(!1),
    selectionRect: Ce(null),
    selectionKeyPressed: Ce(!1),
    multiselectionKeyPressed: Ce(!1),
    deleteKeyPressed: Ce(!1),
    panActivationKeyPressed: Ce(!1),
    zoomActivationKeyPressed: Ce(!1),
    selectionRectMode: Ce(null),
    selectionMode: Ce(bi.Partial),
    nodeTypes: Ce(Ic),
    edgeTypes: Ce(Rc),
    viewport: Ce(g),
    connectionMode: Ce(fr.Strict),
    domNode: Ce(null),
    connection: jt(La),
    connectionLineType: Ce(Mr.Bezier),
    connectionRadius: Ce(20),
    isValidConnection: Ce(() => !0),
    nodesDraggable: Ce(!0),
    nodesConnectable: Ce(!0),
    elementsSelectable: Ce(!0),
    selectNodesOnDrag: Ce(!0),
    markers: jt([]),
    defaultMarkerColor: Ce("#b1b1b7"),
    lib: jt("svelte"),
    onlyRenderVisibleElements: Ce(!1),
    onerror: Ce(Dp),
    ondelete: Ce(void 0),
    onedgecreate: Ce(void 0),
    onconnect: Ce(void 0),
    onconnectstart: Ce(void 0),
    onconnectend: Ce(void 0),
    onbeforedelete: Ce(void 0),
    nodesInitialized: Ce(!1),
    edgesInitialized: Ce(!1),
    viewportInitialized: Ce(!1),
    initialized: jt(!1)
  };
};
function Z0(e) {
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
    return u && c && Kp({
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
      zIndex: jp({
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
  return jn([
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
function qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = q0({
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
    const E = W(s.edges);
    s.edges.set(Gp(_, E));
  }
  const d = (_, E = !1) => {
    var T;
    const V = W(s.nodeLookup);
    for (const [N, A] of _) {
      const B = (T = V.get(N)) == null ? void 0 : T.internals.userNode;
      B && (B.position = A.position, B.dragging = E);
    }
    s.nodes.update((N) => N);
  };
  function v(_) {
    var E, T, V;
    const N = W(s.nodeLookup), A = W(s.parentLookup), { changes: B, updatedInternals: j } = l0(_, N, W(s.parentLookup), W(s.domNode), W(s.nodeOrigin));
    if (j) {
      o0(N, A, { nodeOrigin: i, nodeExtent: a });
      for (const G of B) {
        const U = (E = N.get(G.id)) == null ? void 0 : E.internals.userNode;
        if (U)
          switch (G.type) {
            case "dimensions": {
              const K = { ...U.measured, ...G.dimensions };
              G.setAttributes && (U.width = ((T = G.dimensions) == null ? void 0 : T.width) ?? U.width, U.height = ((V = G.dimensions) == null ? void 0 : V.height) ?? U.height), U.measured = K;
              break;
            }
            case "position":
              U.position = G.position ?? U.position;
              break;
          }
      }
      s.nodes.update((G) => G), W(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const E = W(s.fitViewResolver) ?? qp();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(E), s.nodes.set(W(s.nodes)), E.promise;
  }
  function p(_, E) {
    const T = W(s.panZoom);
    return T ? T.scaleBy(_, E) : Promise.resolve(!1);
  }
  function x(_) {
    return p(1.2, _);
  }
  function b(_) {
    return p(1 / 1.2, _);
  }
  function $(_) {
    const E = W(s.panZoom);
    E && (E.setScaleExtent([_, W(s.maxZoom)]), s.minZoom.set(_));
  }
  function h(_) {
    const E = W(s.panZoom);
    E && (E.setScaleExtent([W(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const E = W(s.panZoom);
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
    (E = W(s.panZoom)) == null || E.setClickDistance(_);
  }
  function P(_) {
    w((_ == null ? void 0 : _.nodes) || W(s.nodes)) && s.nodes.set(W(s.nodes)), w((_ == null ? void 0 : _.edges) || W(s.edges)) && s.edges.set(W(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const T = W(s.nodes), V = W(s.edges), N = T.filter((G) => G.selected), A = V.filter((G) => G.selected), { nodes: B, edges: j } = await dc({
        nodesToRemove: N,
        edgesToRemove: A,
        nodes: T,
        edges: V,
        onBeforeDelete: W(s.onbeforedelete)
      });
      (B.length || j.length) && (s.nodes.update((G) => G.filter((U) => !B.some((K) => K.id === U.id))), s.edges.update((G) => G.filter((U) => !j.some((K) => K.id === U.id))), (E = W(s.ondelete)) == null || E({
        nodes: B,
        edges: j
      }));
    }
  });
  function S(_) {
    const E = W(s.multiselectionKeyPressed);
    s.nodes.update((T) => T.map((V) => {
      const N = _.includes(V.id), A = E && V.selected || N;
      return V.selected = A, V;
    })), E || s.edges.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function z(_) {
    const E = W(s.multiselectionKeyPressed);
    s.edges.update((T) => T.map((V) => {
      const N = _.includes(V.id), A = E && V.selected || N;
      return V.selected = A, V;
    })), E || s.nodes.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function H(_) {
    var E;
    const T = (E = W(s.nodes)) == null ? void 0 : E.find((V) => V.id === _);
    if (!T) {
      console.warn("012", Dr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), T.selected ? T.selected && W(s.multiselectionKeyPressed) && P({ nodes: [T], edges: [] }) : S([_]);
  }
  function L(_) {
    const E = W(s.viewport);
    return u0({
      delta: _,
      panZoom: W(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: W(s.translateExtent),
      width: W(s.width),
      height: W(s.height)
    });
  }
  const R = Ce(La), O = (_) => {
    R.set({ ..._ });
  };
  function I() {
    R.set(La);
  }
  function M() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), I();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: Z0(s),
    visibleNodes: B0(s),
    connection: jn([R, s.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: zo(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: jn([s.edges, s.defaultMarkerColor, s.flowId], ([_, E, T]) => t0(_, { defaultColor: E, id: T })),
    initialized: (() => {
      let _ = !1;
      const E = W(s.nodes).length, T = W(s.edges).length;
      return jn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([V, N, A]) => _ || (E === 0 ? _ = A : T === 0 ? _ = A && V : _ = A && V && N, _));
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
    fitView: (_) => g(_),
    setMinZoom: $,
    setMaxZoom: h,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: P,
    addSelectedNodes: S,
    addSelectedEdges: z,
    handleNodeSelection: H,
    panBy: L,
    updateConnection: O,
    cancelConnection: I,
    reset: M
  };
}
function We() {
  const e = ur(Ui);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function X0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Tr(Ui, {
    getStore: () => s
  }), s;
}
function Hl(e, t) {
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
const j0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  de(t, !1), Qe(e, j0);
  const [n, r] = nt(), o = () => te(V, "$panActivationKeyPressed", n), i = () => te(I, "$minZoom", n), a = () => te(M, "$maxZoom", n), s = () => te(N, "$zoomActivationKeyPressed", n), l = () => te(O, "$selectionRect", n), u = () => te(E, "$translateExtent", n), c = () => te(T, "$lib", n), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), P = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), z = y(t, "panOnScroll", 12), H = y(t, "paneClickDistance", 12);
  const {
    viewport: L,
    panZoom: R,
    selectionRect: O,
    minZoom: I,
    maxZoom: M,
    dragging: _,
    translateExtent: E,
    lib: T,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: N,
    viewportInitialized: A
  } = We(), B = (K) => L.set({
    x: K[0],
    y: K[1],
    zoom: K[2]
  });
  Jt(() => {
    fi(A, !0);
  }), ve(() => ee(p()), () => {
    J(d, p() || { x: 0, y: 0, zoom: 1 });
  }), ve(
    () => (o(), ee(S())),
    () => {
      J(v, o() || S());
    }
  ), ve(
    () => (o(), ee(z())),
    () => {
      J(g, o() || z());
    }
  ), yt(), De();
  var j = Y0(), G = Y(j);
  bt(G, t, "default", {}), Z(j), wt(j, (K, ce) => Hl == null ? void 0 : Hl(K, ce), () => ({
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
    zoomOnPinch: P(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || Kn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: H(),
    onTransformChange: B
  })), D(e, j);
  var U = fe({
    get initialViewport() {
      return p();
    },
    set initialViewport(K) {
      p(K), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(K) {
      x(K), m();
    },
    get onMove() {
      return b();
    },
    set onMove(K) {
      b(K), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(K) {
      $(K), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(K) {
      h(K), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(K) {
      C(K), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(K) {
      w(K), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(K) {
      k(K), m();
    },
    get zoomOnPinch() {
      return P();
    },
    set zoomOnPinch(K) {
      P(K), m();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(K) {
      S(K), m();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(K) {
      z(K), m();
    },
    get paneClickDistance() {
      return H();
    },
    set paneClickDistance(K) {
      H(K), m();
    }
  });
  return r(), U;
}
ue(
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
var K0 = /* @__PURE__ */ re("<div><!></div>");
const W0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  de(t, !1), Qe(e, W0);
  const [n, r] = nt(), o = () => te(_, "$panActivationKeyPressed", n), i = () => te(I, "$selectionKeyPressed", n), a = () => te(R, "$selectionRect", n), s = () => te(L, "$elementsSelectable", n), l = () => te(O, "$selectionRectMode", n), u = () => te(T, "$connection", n), c = () => te(S, "$edges", n), d = () => te(P, "$nodeLookup", n), v = () => te(z, "$viewport", n), g = () => te(M, "$selectionMode", n), p = () => te(H, "$dragging", n), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe();
  let h = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = Zi(), {
    nodes: k,
    nodeLookup: P,
    edges: S,
    viewport: z,
    dragging: H,
    elementsSelectable: L,
    selectionRect: R,
    selectionRectMode: O,
    selectionKeyPressed: I,
    selectionMode: M,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: E,
    connection: T
  } = We();
  let V = /* @__PURE__ */ oe(), N = null, A = [], B = !1;
  function j(ie) {
    if (B || u().inProgress) {
      B = !1;
      return;
    }
    w("paneclick", { event: ie }), E(), O.set(null);
  }
  function G(ie) {
    var Q, Ee;
    if (N = f(V).getBoundingClientRect(), !L || !f(b) || ie.button !== 0 || ie.target !== f(V) || !N)
      return;
    (Ee = (Q = ie.target) == null ? void 0 : Q.setPointerCapture) == null || Ee.call(Q, ie.pointerId);
    const { x: F, y: Le } = zn(ie, N);
    E(), R.set({
      width: 0,
      height: 0,
      startX: F,
      startY: Le,
      x: F,
      y: Le
    });
  }
  function U(ie) {
    if (!f(b) || !N || !a())
      return;
    B = !0;
    const Q = zn(ie, N), Ee = a().startX ?? 0, F = a().startY ?? 0, Le = {
      ...a(),
      x: Q.x < Ee ? Q.x : Ee,
      y: Q.y < F ? Q.y : F,
      width: Math.abs(Q.x - Ee),
      height: Math.abs(Q.y - F)
    }, Ye = A.map((Me) => Me.id), le = Da(A, c()).map((Me) => Me.id);
    A = cc(
      d(),
      Le,
      [
        v().x,
        v().y,
        v().zoom
      ],
      g() === bi.Partial,
      !0
    );
    const ye = Da(A, c()).map((Me) => Me.id), $e = A.map((Me) => Me.id);
    (Ye.length !== $e.length || $e.some((Me) => !Ye.includes(Me))) && k.update((Me) => Me.map(zl($e))), (le.length !== ye.length || ye.some((Me) => !le.includes(Me))) && S.update((Me) => Me.map(zl(ye))), O.set("user"), R.set(Le);
  }
  function K(ie) {
    var Q, Ee;
    ie.button === 0 && ((Ee = (Q = ie.target) == null ? void 0 : Q.releasePointerCapture) == null || Ee.call(Q, ie.pointerId), !f(b) && l() === "user" && ie.target === f(V) && (j == null || j(ie)), R.set(null), A.length > 0 && fi(O, "nodes"), i() && (B = !1));
  }
  const ce = (ie) => {
    var Q;
    if (Array.isArray(f(x)) && (Q = f(x)) != null && Q.includes(2)) {
      ie.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ie });
  };
  ve(
    () => (o(), ee(h())),
    () => {
      J(x, o() || h());
    }
  ), ve(
    () => (i(), a(), ee(C()), f(x)),
    () => {
      J(b, i() || a() || C() && f(x) !== !0);
    }
  ), ve(
    () => (s(), f(b), l()),
    () => {
      J($, s() && (f(b) || l() === "user"));
    }
  ), yt(), De();
  var se = K0(), me = /* @__PURE__ */ Pe(() => f($) ? void 0 : Tl(j, f(V))), ae = /* @__PURE__ */ Pe(() => Tl(ce, f(V)));
  let _e;
  var he = Y(se);
  bt(he, t, "default", {}), Z(se), _n(se, (ie) => J(V, ie), () => f(V)), Se(
    (ie) => _e = xt(se, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, ie),
    [
      () => ({
        draggable: h() === !0 || Array.isArray(h()) && h().includes(0),
        dragging: p(),
        selection: f(b)
      })
    ],
    be
  ), tt("click", se, function(...ie) {
    var Q;
    (Q = f(me)) == null || Q.apply(this, ie);
  }), tt("pointerdown", se, function(...ie) {
    var Q;
    (Q = f($) ? G : void 0) == null || Q.apply(this, ie);
  }), tt("pointermove", se, function(...ie) {
    var Q;
    (Q = f($) ? U : void 0) == null || Q.apply(this, ie);
  }), tt("pointerup", se, function(...ie) {
    var Q;
    (Q = f($) ? K : void 0) == null || Q.apply(this, ie);
  }), tt("contextmenu", se, function(...ie) {
    var Q;
    (Q = f(ae)) == null || Q.apply(this, ie);
  }), D(e, se);
  var Ve = fe({
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
  return r(), Ve;
}
ue(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var F0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const G0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  de(t, !1), Qe(e, G0);
  const [n, r] = nt(), o = () => te(i, "$viewport", n), { viewport: i } = We();
  De();
  var a = F0(), s = Y(a);
  bt(s, t, "default", {}), Z(a), Se(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), fe(), r();
}
ue(Xc, {}, ["default"], [], !0);
function Ei(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = f0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = W(n.snapGrid), c = W(n.viewport);
      return {
        nodes: W(n.nodes),
        nodeLookup: W(n.nodeLookup),
        edges: W(n.edges),
        nodeExtent: W(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: W(n.nodeOrigin),
        multiSelectionActive: W(n.multiselectionKeyPressed),
        domNode: W(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: W(n.autoPanOnNodeDrag),
        nodesDraggable: W(n.nodesDraggable),
        selectNodesOnDrag: W(n.selectNodesOnDrag),
        nodeDragThreshold: W(n.nodeDragThreshold),
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
var Q0 = /* @__PURE__ */ re("<div><!></div>");
function Yc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(se, "$nodeTypes", n), i = () => te(Ve, "$elementsSelectable", n), a = () => te(ie, "$nodesDraggable", n), s = () => te(Le, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), p = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), P = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), z = y(t, "type", 13, "default"), H = y(t, "isParent", 13, !1), L = y(t, "positionX", 13), R = y(t, "positionY", 13), O = y(t, "sourcePosition", 13, void 0), I = y(t, "targetPosition", 13, void 0), M = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), E = y(t, "measuredHeight", 13, void 0), T = y(t, "initialWidth", 13, void 0), V = y(t, "initialHeight", 13, void 0), N = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), B = y(t, "dragHandle", 13, void 0), j = y(t, "initialized", 13, !1), G = y(t, "parentId", 13, void 0), U = y(t, "nodeClickDistance", 13, void 0), K = y(t, "class", 13, "");
  const ce = We(), {
    nodeTypes: se,
    nodeDragThreshold: me,
    selectNodesOnDrag: ae,
    handleNodeSelection: _e,
    updateNodeInternals: he,
    elementsSelectable: Ve,
    nodesDraggable: ie
  } = ce;
  let Q = /* @__PURE__ */ oe(void 0, !0), Ee = /* @__PURE__ */ oe(null, !0);
  const F = Zi(), Le = Ce(h());
  let Ye = /* @__PURE__ */ oe(void 0, !0), le = /* @__PURE__ */ oe(void 0, !0), ye = /* @__PURE__ */ oe(void 0, !0);
  Tr("svelteflow__node_id", g()), Tr("svelteflow__node_connectable", Le), us(() => {
    var ne;
    f(Ee) && ((ne = P()) == null || ne.unobserve(f(Ee)));
  });
  function $e(ne) {
    $() && (!W(ae) || !b() || W(me) > 0) && _e(g()), F("nodeclick", { node: v().internals.userNode, event: ne });
  }
  ve(() => ee(z()), () => {
    J(l, z() || "default");
  }), ve(() => (o(), f(l)), () => {
    J(u, !!o()[f(l)]);
  }), ve(
    () => (o(), f(l), ki),
    () => {
      J(c, o()[f(l)] || ki);
    }
  ), ve(
    () => (f(u), ee(z())),
    () => {
      f(u) || console.warn("003", Dr.error003(z()));
    }
  ), ve(
    () => (ee(N()), ee(A()), ee(T()), ee(V()), ee(_()), ee(E())),
    () => {
      J(d, U0({
        width: N(),
        height: A(),
        initialWidth: T(),
        initialHeight: V(),
        measuredWidth: _(),
        measuredHeight: E()
      }));
    }
  ), ve(() => ee(h()), () => {
    Le.set(!!h());
  }), ve(
    () => (f(Ye), f(l), f(le), ee(O()), f(ye), ee(I()), ee(g()), f(Q)),
    () => {
      (f(Ye) && f(l) !== f(Ye) || f(le) && O() !== f(le) || f(ye) && I() !== f(ye)) && requestAnimationFrame(() => he(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(Q),
            force: !0
          }
        ]
      ]))), J(Ye, f(l)), J(le, O()), J(ye, I());
    }
  ), ve(
    () => (ee(P()), f(Q), f(Ee), ee(j())),
    () => {
      P() && (f(Q) !== f(Ee) || !j()) && (f(Ee) && P().unobserve(f(Ee)), f(Q) && P().observe(f(Q)), J(Ee, f(Q)));
    }
  ), yt(), De(!0);
  var Me = Ue(), Te = we(Me);
  {
    var at = (ne) => {
      var Re = Q0();
      let ge, en;
      var tn = Y(Re);
      const pn = /* @__PURE__ */ be(() => x() ?? !1), ze = /* @__PURE__ */ be(() => $() ?? i() ?? !0), rt = /* @__PURE__ */ be(() => C() ?? !0), qe = /* @__PURE__ */ be(() => b() ?? a() ?? !0);
      Mu(tn, () => f(c), (Ae, ot) => {
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
            return f(ze);
          },
          get deletable() {
            return f(rt);
          },
          get sourcePosition() {
            return O();
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
            return L();
          },
          get positionAbsoluteY() {
            return R();
          },
          get width() {
            return N();
          },
          get height() {
            return A();
          }
        });
      }), Z(Re), wt(Re, (Ae, ot) => Ei == null ? void 0 : Ei(Ae, ot), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: B(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: _e,
        onDrag: (Ae, ot, nn, Yt) => {
          F("nodedrag", { event: Ae, targetNode: nn, nodes: Yt });
        },
        onDragStart: (Ae, ot, nn, Yt) => {
          F("nodedragstart", { event: Ae, targetNode: nn, nodes: Yt });
        },
        onDragStop: (Ae, ot, nn, Yt) => {
          F("nodedragstop", { event: Ae, targetNode: nn, nodes: Yt });
        },
        store: ce
      })), _n(Re, (Ae) => J(Q, Ae), () => f(Q)), It(() => tt("click", Re, $e)), It(() => tt("mouseenter", Re, (Ae) => F("nodemouseenter", { node: v(), event: Ae }))), It(() => tt("mouseleave", Re, (Ae) => F("nodemouseleave", { node: v(), event: Ae }))), It(() => tt("mousemove", Re, (Ae) => F("nodemousemove", { node: v(), event: Ae }))), It(() => tt("contextmenu", Re, (Ae) => F("nodecontextmenu", { node: v(), event: Ae }))), Se(
        (Ae, ot) => {
          xe(Re, "data-id", g()), ge = xt(Re, 1, Ae, null, ge, ot), en = ft(Re, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, en, {
            "z-index": M(),
            transform: `translate(${L() ?? ""}px, ${R() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => vn(Pt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            K()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: $(),
            nopan: b(),
            parent: H()
          })
        ],
        be
      ), D(ne, Re);
    };
    pe(Te, (ne) => {
      w() || ne(at);
    });
  }
  D(e, Me);
  var et = fe({
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
      return P();
    },
    set resizeObserver(ne) {
      P(ne), m();
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
      return V();
    },
    set initialHeight(ne) {
      V(ne), m();
    },
    get width() {
      return N();
    },
    set width(ne) {
      N(ne), m();
    },
    get height() {
      return A();
    },
    set height(ne) {
      A(ne), m();
    },
    get dragHandle() {
      return B();
    },
    set dragHandle(ne) {
      B(ne), m();
    },
    get initialized() {
      return j();
    },
    set initialized(ne) {
      j(ne), m();
    },
    get parentId() {
      return G();
    },
    set parentId(ne) {
      G(ne), m();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(ne) {
      U(ne), m();
    },
    get class() {
      return K();
    },
    set class(ne) {
      K(ne), m();
    }
  });
  return r(), et;
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
var J0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const e2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function jc(e, t) {
  de(t, !1), Qe(e, e2);
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
      const P = k.target.getAttribute("data-id");
      w.set(P, { id: P, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  us(() => {
    b == null || b.disconnect();
  }), De();
  var $ = J0();
  Et($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ be(() => !!f(w).selected), P = /* @__PURE__ */ be(() => !!f(w).hidden), S = /* @__PURE__ */ be(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), z = /* @__PURE__ */ be(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), H = /* @__PURE__ */ be(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), L = /* @__PURE__ */ be(() => f(w).deletable ?? !0), R = /* @__PURE__ */ be(() => l().has(f(w).id)), O = /* @__PURE__ */ be(() => f(w).type ?? "default"), I = /* @__PURE__ */ be(() => f(w).internals.z ?? 0), M = /* @__PURE__ */ be(() => hc(f(w)));
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
        return f(P);
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
  }), Z($), D(e, $);
  var h = fe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), h;
}
ue(jc, { nodeClickDistance: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Kc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(K, "$edgeTypes", n), i = () => te(ce, "$flowId", n), a = () => te(se, "$elementsSelectable", n), s = () => te(U, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), v = /* @__PURE__ */ oe(void 0, !0);
  let g = y(t, "id", 13), p = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), P = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), z = y(t, "hidden", 13, !1), H = y(t, "label", 13, void 0), L = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), O = y(t, "markerEnd", 13, void 0), I = y(t, "sourceHandle", 13, void 0), M = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), E = y(t, "sourceY", 13), T = y(t, "targetX", 13), V = y(t, "targetY", 13), N = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), B = y(t, "ariaLabel", 13, void 0), j = y(t, "interactionWidth", 13, void 0), G = y(t, "class", 13, "");
  Tr("svelteflow__edge_id", g());
  const {
    edgeLookup: U,
    edgeTypes: K,
    flowId: ce,
    elementsSelectable: se
  } = We(), me = Zi(), ae = zc();
  function _e(F) {
    const Le = s().get(g());
    Le && (ae(g()), me("edgeclick", { event: F, edge: Le }));
  }
  function he(F, Le) {
    const Ye = s().get(g());
    Ye && me(Le, { event: F, edge: Ye });
  }
  ve(() => ee(p()), () => {
    J(l, p() || "default");
  }), ve(
    () => (o(), f(l), Mi),
    () => {
      J(u, o()[f(l)] || Mi);
    }
  ), ve(
    () => (ee(R()), i()),
    () => {
      J(c, R() ? `url('#${Ra(R(), i())}')` : void 0);
    }
  ), ve(
    () => (ee(O()), i()),
    () => {
      J(d, O() ? `url('#${Ra(O(), i())}')` : void 0);
    }
  ), ve(
    () => (ee(P()), a()),
    () => {
      J(v, P() ?? a());
    }
  ), yt(), De(!0);
  var Ve = Ue(), ie = we(Ve);
  {
    var Q = (F) => {
      var Le = t2();
      let Ye;
      var le = Y(Le);
      let ye;
      var $e = Y(le);
      const Me = /* @__PURE__ */ be(() => S() ?? !0);
      Mu($e, () => f(u), (Te, at) => {
        at(Te, {
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
            return T();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return N();
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
            return H();
          },
          get labelStyle() {
            return L();
          },
          get data() {
            return $();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return j();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(Me);
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
      }), Z(le), Z(Le), Se(
        (Te, at) => {
          Ye = ft(Le, "", Ye, { "z-index": C() }), ye = xt(le, 0, Te, null, ye, at), xe(le, "data-id", g()), xe(le, "aria-label", B() === null ? void 0 : B() ? B() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => vn(Pt(["svelte-flow__edge", G()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        be
      ), tt("click", le, _e), tt("contextmenu", le, (Te) => {
        he(Te, "edgecontextmenu");
      }), tt("mouseenter", le, (Te) => {
        he(Te, "edgemouseenter");
      }), tt("mouseleave", le, (Te) => {
        he(Te, "edgemouseleave");
      }), D(F, Le);
    };
    pe(ie, (F) => {
      z() || F(Q);
    });
  }
  D(e, Ve);
  var Ee = fe({
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
      return P();
    },
    set selectable(F) {
      P(F), m();
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
      return V();
    },
    set targetY(F) {
      V(F), m();
    },
    get sourcePosition() {
      return N();
    },
    set sourcePosition(F) {
      N(F), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(F) {
      A(F), m();
    },
    get ariaLabel() {
      return B();
    },
    set ariaLabel(F) {
      B(F), m();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(F) {
      j(F), m();
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
function Wc(e, t) {
  de(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return Jt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), De(), fe({
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
ue(Wc, { onMount: {}, onDestroy: {} }, [], [], !0);
var n2 = /* @__PURE__ */ ke("<defs></defs>");
function Fc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(i, "$markers", n), { markers: i } = We();
  De();
  var a = n2();
  Et(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, lt(() => f(l)));
  }), Z(a), D(e, a), fe(), r();
}
ue(Fc, {}, [], [], !0);
var r2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), o2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), i2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  de(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  De();
  var c = i2(), d = Y(c);
  {
    var v = (p) => {
      var x = r2();
      Se(() => {
        xe(x, "stroke", l()), xe(x, "stroke-width", u());
      }), D(p, x);
    }, g = (p, x) => {
      {
        var b = ($) => {
          var h = o2();
          Se(() => {
            xe(h, "stroke", l()), xe(h, "stroke-width", u()), xe(h, "fill", l());
          }), D($, h);
        };
        pe(
          p,
          ($) => {
            r() === $o.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    pe(d, (p) => {
      r() === $o.Arrow ? p(v) : p(g, !1);
    });
  }
  return Z(c), Se(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${i()}`), xe(c, "markerUnits", a()), xe(c, "orient", s());
  }), D(e, c), fe({
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
  de(t, !1);
  const [n, r] = nt(), o = () => te(s, "$visibleEdges", n), i = () => te(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = We();
  Jt(() => {
    a() && u(a());
  }), De();
  var d = a2(), v = Y(d), g = Y(v);
  Fc(g, {}), Z(v);
  var p = q(v, 2);
  Et(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ be(() => f(C).selectable ?? i()), k = /* @__PURE__ */ be(() => f(C).type || "default");
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
        edgeclick(P) {
          Xe.call(this, t, P);
        },
        edgecontextmenu(P) {
          Xe.call(this, t, P);
        },
        edgemouseenter(P) {
          Xe.call(this, t, P);
        },
        edgemouseleave(P) {
          Xe.call(this, t, P);
        }
      }
    });
  });
  var x = q(p, 2);
  {
    var b = (h) => {
      Wc(h, {
        onMount: () => {
          fi(l, !0);
        },
        onDestroy: () => {
          fi(l, !1);
        }
      });
    };
    pe(x, (h) => {
      o().length > 0 && h(b);
    });
  }
  Z(d), D(e, d);
  var $ = fe({
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
  de(t, !1), Qe(e, l2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Ue(), l = we(s);
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
    pe(l, (c) => {
      a() && c(u);
    });
  }
  return D(e, s), fe({
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
  de(t, !1);
  const [n, r] = nt(), o = () => te(a, "$selectionRect", n), i = () => te(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = We();
  De();
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
  }), fe(), r();
}
ue(Qc, {}, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const c2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Jc(e, t) {
  de(t, !1), Qe(e, c2);
  const [n, r] = nt(), o = () => te(l, "$selectionRectMode", n), i = () => te(c, "$nodeLookup", n), a = () => te(u, "$nodes", n), s = We(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Zi();
  let v = /* @__PURE__ */ oe(null);
  function g(h) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  ve(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (J(v, To(i(), { filter: (h) => !!h.selected })), a());
    }
  ), yt(), De();
  var x = Ue(), b = we(x);
  {
    var $ = (h) => {
      var C = u2(), w = Y(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), wt(C, (k, P) => Ei == null ? void 0 : Ei(k, P), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, P, S, z) => {
          d("nodedrag", { event: k, targetNode: null, nodes: z });
        },
        onDragStart: (k, P, S, z) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: z });
        },
        onDragStop: (k, P, S, z) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: z });
        }
      })), It(() => tt("contextmenu", C, g)), It(() => tt("click", C, p)), It(() => tt("keyup", C, () => {
      })), Se(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), D(h, C);
    };
    pe(b, (h) => {
      o() === "nodes" && f(v) && Nn(f(v).x) && Nn(f(v).y) && h($);
    });
  }
  D(e, x), fe(), r();
}
ue(Jc, {}, [], [], !0);
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
function ed(e, t) {
  de(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Ci() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Ci() ? "Meta" : "Control");
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
  return De(), tt("blur", Ht, $), tt("contextmenu", Ht, $), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Xp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), wt(Ht, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), fe({
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
  de(t, !1);
  const [n, r] = nt(), o = () => te(g, "$connection", n), i = () => te(p, "$connectionLineType", n), a = () => te(d, "$width", n), s = () => te(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = We();
  let x = /* @__PURE__ */ oe(null);
  ve(
    () => (o(), ee(c()), i(), f(x), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: P, toPosition: S } = o(), z = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: P,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Mr.Bezier:
            ((H) => J(x, H[0]))(yc(z));
            break;
          case Mr.Step:
            ((H) => J(x, H[0]))(_i({ ...z, borderRadius: 0 }));
            break;
          case Mr.SmoothStep:
            ((H) => J(x, H[0]))(_i(z));
            break;
          default:
            ((H) => J(x, H[0]))(Ia(z));
        }
      }
    }
  ), yt(), De();
  var b = Ue(), $ = we(b);
  {
    var h = (w) => {
      var k = f2(), P = Y(k), S = Y(P);
      bt(S, t, "connectionLine", {});
      var z = q(S);
      {
        var H = (L) => {
          var R = d2();
          Se(() => {
            xe(R, "d", f(x)), ft(R, u());
          }), D(L, R);
        };
        pe(z, (L) => {
          c() || L(H);
        });
      }
      Z(P), Z(k), Se(
        (L) => {
          xe(k, "width", a()), xe(k, "height", s()), ft(k, l()), xt(P, 0, L);
        },
        [
          () => vn(Pt([
            "svelte-flow__connection",
            Vp(o().isValid)
          ]))
        ],
        be
      ), D(w, k);
    };
    pe($, (w) => {
      o().inProgress && w(h);
    });
  }
  D(e, b);
  var C = fe({
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
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = nt(), a = () => te(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = We();
  ve(() => ee(l()), () => {
    J(s, `${l()}`.split("-"));
  }), yt(), De();
  var v = v2();
  let g;
  var p = Y(v);
  bt(p, t, "default", {}), Z(v), Se(
    (b) => g = Ut(v, g, {
      class: b,
      style: u(),
      ...r,
      [nr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Pt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    be
  ), D(e, v);
  var x = fe({
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
var g2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  de(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  De();
  var o = Ue(), i = we(o);
  {
    var a = (s) => {
      Lo(s, {
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
    pe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return D(e, o), fe({
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
const h2 = (e) => Object.keys(e);
function Ll(e, t) {
  h2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function p2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function m2(e = "light") {
  return jt("light", (t) => {
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
var y2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), w2 = /* @__PURE__ */ re("<!> <!>", 1), b2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const x2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function rd(e, t) {
  const n = Tf(t), r = st(t, [
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
  de(t, !1), Qe(e, x2);
  const [i, a] = nt(), s = () => te(C(), "$viewport", i), l = () => te(na, "$initialized", i), u = () => te(f(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), P = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), z = y(t, "panActivationKey", 12, void 0), H = y(t, "multiSelectionKey", 12, void 0), L = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), O = y(t, "nodesConnectable", 12, void 0), I = y(t, "nodeDragThreshold", 12, void 0), M = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), E = y(t, "deleteKey", 12, void 0), T = y(t, "connectionRadius", 12, void 0), V = y(t, "connectionLineType", 12, void 0), N = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), B = y(t, "connectionLineContainerStyle", 12, ""), j = y(t, "onMoveStart", 12, void 0), G = y(t, "onMove", 12, void 0), U = y(t, "onMoveEnd", 12, void 0), K = y(t, "isValidConnection", 12, void 0), ce = y(t, "translateExtent", 12, void 0), se = y(t, "nodeExtent", 12, void 0), me = y(t, "onlyRenderVisibleElements", 12, void 0), ae = y(t, "panOnScrollMode", 28, () => Kn.Free), _e = y(t, "preventScrolling", 12, !0), he = y(t, "zoomOnScroll", 12, !0), Ve = y(t, "zoomOnDoubleClick", 12, !0), ie = y(t, "zoomOnPinch", 12, !0), Q = y(t, "panOnScroll", 12, !1), Ee = y(t, "panOnDrag", 12, !0), F = y(t, "selectionOnDrag", 12, void 0), Le = y(t, "autoPanOnConnect", 12, !0), Ye = y(t, "autoPanOnNodeDrag", 12, !0), le = y(t, "onerror", 12, void 0), ye = y(t, "ondelete", 12, void 0), $e = y(t, "onedgecreate", 12, void 0), Me = y(t, "attributionPosition", 12, void 0), Te = y(t, "proOptions", 12, void 0), at = y(t, "defaultEdgeOptions", 12, void 0), et = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Re = y(t, "colorMode", 12, "light"), ge = y(t, "onconnect", 12, void 0), en = y(t, "onconnectstart", 12, void 0), tn = y(t, "onconnectend", 12, void 0), pn = y(t, "onbeforedelete", 12, void 0), ze = y(t, "oninit", 12, void 0), rt = y(t, "nodeOrigin", 12, void 0), qe = y(t, "paneClickDistance", 12, 0), Ae = y(t, "nodeClickDistance", 12, 0), ot = y(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = y(t, "style", 12, void 0), Yt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ oe(), Ct = /* @__PURE__ */ oe(), Vt = /* @__PURE__ */ oe();
  const yr = s() || h(), it = vf(Ui) ? We() : X0({
    nodes: W(v()),
    edges: W(g()),
    width: et(),
    height: ne(),
    fitView: p(),
    nodeOrigin: rt(),
    nodeExtent: se()
  });
  Jt(() => (it.width.set(f(Ct)), it.height.set(f(Vt)), it.domNode.set(f(Ur)), it.syncNodeStores(v()), it.syncEdgeStores(g()), it.syncViewport(C()), p() !== void 0 && it.fitViewQueued.set(p()), x() && it.fitViewOptions.set(x()), Ol(it, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ce(),
    paneClickDistance: qe()
  }), () => {
    it.reset();
  }));
  const { initialized: na } = it;
  let Qr = /* @__PURE__ */ oe(!1);
  ve(
    () => (f(Ct), f(Vt)),
    () => {
      f(Ct) !== void 0 && f(Vt) !== void 0 && (it.width.set(f(Ct)), it.height.set(f(Vt)));
    }
  ), ve(
    () => (f(Qr), l(), ee(ze())),
    () => {
      var X;
      !f(Qr) && l() && ((X = ze()) == null || X(), J(Qr, !0));
    }
  ), ve(
    () => (ee(d()), ee(V()), ee(T()), ee(S()), ee(_()), ee(ot()), ee(R()), ee(O()), ee(M()), ee(me()), ee(K()), ee(Le()), ee(Ye()), ee(le()), ee(ye()), ee($e()), ee(N()), ee(I()), ee(ge()), ee(en()), ee(tn()), ee(pn()), ee(rt()), Ll),
    () => {
      const X = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: T(),
        selectionMode: S(),
        snapGrid: _(),
        defaultMarkerColor: ot(),
        nodesDraggable: R(),
        nodesConnectable: O(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: me(),
        isValidConnection: K(),
        autoPanOnConnect: Le(),
        autoPanOnNodeDrag: Ye(),
        onerror: le(),
        ondelete: ye(),
        onedgecreate: $e(),
        connectionMode: N(),
        nodeDragThreshold: I(),
        onconnect: ge(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: pn(),
        nodeOrigin: rt()
      };
      Ll(it, X);
    }
  ), ve(
    () => (ee(w()), ee(k()), ee(b()), ee($()), ee(ce()), ee(qe())),
    () => {
      Ol(it, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ce(),
        paneClickDistance: qe()
      });
    }
  ), ve(
    () => ee(Re()),
    () => {
      Xf(J(c, m2(Re())), "$colorModeClass", i);
    }
  ), yt(), De();
  var Dt = b2();
  let Ro;
  var qo = Y(Dt);
  ed(qo, {
    get selectionKey() {
      return P();
    },
    get deleteKey() {
      return E();
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
  var Zo = q(qo, 2);
  const ra = /* @__PURE__ */ be(() => ae() === void 0 ? Kn.Free : ae()), Gd = /* @__PURE__ */ be(() => _e() === void 0 ? !0 : _e()), Ud = /* @__PURE__ */ be(() => he() === void 0 ? !0 : he()), Qd = /* @__PURE__ */ be(() => Ve() === void 0 ? !0 : Ve()), Jd = /* @__PURE__ */ be(() => ie() === void 0 ? !0 : ie()), e1 = /* @__PURE__ */ be(() => Q() === void 0 ? !1 : Q()), t1 = /* @__PURE__ */ be(() => Ee() === void 0 ? !0 : Ee()), n1 = /* @__PURE__ */ be(() => qe() === void 0 ? 0 : qe());
  Zc(Zo, {
    initialViewport: yr,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return G();
    },
    get onMoveEnd() {
      return U();
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
      return f(Qd);
    },
    get zoomOnPinch() {
      return f(Jd);
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
    children: (X, Qw) => {
      const i1 = /* @__PURE__ */ be(() => Ee() === void 0 ? !0 : Ee());
      Bc(X, {
        get panOnDrag() {
          return f(i1);
        },
        get selectionOnDrag() {
          return F();
        },
        $$events: {
          paneclick(Jr) {
            Xe.call(this, t, Jr);
          },
          panecontextmenu(Jr) {
            Xe.call(this, t, Jr);
          }
        },
        children: (Jr, Jw) => {
          var Vs = w2(), Ns = we(Vs);
          Xc(Ns, {
            children: (s1, eb) => {
              var Hs = y2(), Ts = we(Hs);
              Uc(Ts, {
                get defaultEdgeOptions() {
                  return at();
                },
                $$events: {
                  edgeclick(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  edgecontextmenu(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  edgemouseenter(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  edgemouseleave(Ze) {
                    Xe.call(this, t, Ze);
                  }
                }
              });
              var zs = q(Ts, 2);
              td(zs, {
                get containerStyle() {
                  return B();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, tb) => {
                    var Ls = Ue(), u1 = we(Ls);
                    bt(u1, t, "connectionLine", {}), D(Ze, Ls);
                  }
                }
              });
              var Os = q(zs, 6);
              jc(Os, {
                get nodeClickDistance() {
                  return Ae();
                },
                $$events: {
                  nodeclick(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodemouseenter(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodemousemove(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodemouseleave(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodecontextmenu(Ze) {
                    Xe.call(this, t, Ze);
                  }
                }
              });
              var l1 = q(Os, 2);
              Jc(l1, {
                $$events: {
                  selectionclick(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  selectioncontextmenu(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    Xe.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    Xe.call(this, t, Ze);
                  }
                }
              }), D(s1, Hs);
            },
            $$slots: { default: !0 }
          });
          var a1 = q(Ns, 2);
          Qc(a1, {}), D(Jr, Vs);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ps = q(Zo, 2);
  nd(Ps, {
    get proOptions() {
      return Te();
    },
    get position() {
      return Me();
    }
  });
  var r1 = q(Ps, 2);
  bt(r1, t, "default", {}), Z(Dt), _n(Dt, (X) => J(Ur, X), () => f(Ur)), Se(
    (X) => Ro = Ut(
      Dt,
      Ro,
      {
        style: nn(),
        class: X,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Pt([
        "svelte-flow",
        Yt(),
        u()
      ])
    ],
    be
  ), Fs(Dt, "clientWidth", (X) => J(Ct, X)), Fs(Dt, "clientHeight", (X) => J(Vt, X)), tt("dragover", Dt, function(X) {
    Xe.call(this, t, X);
  }), tt("drop", Dt, function(X) {
    Xe.call(this, t, X);
  }), D(e, Dt);
  var o1 = fe({
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
      return P();
    },
    set selectionKey(X) {
      P(X), m();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(X) {
      S(X), m();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(X) {
      z(X), m();
    },
    get multiSelectionKey() {
      return H();
    },
    set multiSelectionKey(X) {
      H(X), m();
    },
    get zoomActivationKey() {
      return L();
    },
    set zoomActivationKey(X) {
      L(X), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(X) {
      R(X), m();
    },
    get nodesConnectable() {
      return O();
    },
    set nodesConnectable(X) {
      O(X), m();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(X) {
      I(X), m();
    },
    get elementsSelectable() {
      return M();
    },
    set elementsSelectable(X) {
      M(X), m();
    },
    get snapGrid() {
      return _();
    },
    set snapGrid(X) {
      _(X), m();
    },
    get deleteKey() {
      return E();
    },
    set deleteKey(X) {
      E(X), m();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(X) {
      T(X), m();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(X) {
      V(X), m();
    },
    get connectionMode() {
      return N();
    },
    set connectionMode(X) {
      N(X), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(X) {
      A(X), m();
    },
    get connectionLineContainerStyle() {
      return B();
    },
    set connectionLineContainerStyle(X) {
      B(X), m();
    },
    get onMoveStart() {
      return j();
    },
    set onMoveStart(X) {
      j(X), m();
    },
    get onMove() {
      return G();
    },
    set onMove(X) {
      G(X), m();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(X) {
      U(X), m();
    },
    get isValidConnection() {
      return K();
    },
    set isValidConnection(X) {
      K(X), m();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(X) {
      ce(X), m();
    },
    get nodeExtent() {
      return se();
    },
    set nodeExtent(X) {
      se(X), m();
    },
    get onlyRenderVisibleElements() {
      return me();
    },
    set onlyRenderVisibleElements(X) {
      me(X), m();
    },
    get panOnScrollMode() {
      return ae();
    },
    set panOnScrollMode(X) {
      ae(X), m();
    },
    get preventScrolling() {
      return _e();
    },
    set preventScrolling(X) {
      _e(X), m();
    },
    get zoomOnScroll() {
      return he();
    },
    set zoomOnScroll(X) {
      he(X), m();
    },
    get zoomOnDoubleClick() {
      return Ve();
    },
    set zoomOnDoubleClick(X) {
      Ve(X), m();
    },
    get zoomOnPinch() {
      return ie();
    },
    set zoomOnPinch(X) {
      ie(X), m();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(X) {
      Q(X), m();
    },
    get panOnDrag() {
      return Ee();
    },
    set panOnDrag(X) {
      Ee(X), m();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(X) {
      F(X), m();
    },
    get autoPanOnConnect() {
      return Le();
    },
    set autoPanOnConnect(X) {
      Le(X), m();
    },
    get autoPanOnNodeDrag() {
      return Ye();
    },
    set autoPanOnNodeDrag(X) {
      Ye(X), m();
    },
    get onerror() {
      return le();
    },
    set onerror(X) {
      le(X), m();
    },
    get ondelete() {
      return ye();
    },
    set ondelete(X) {
      ye(X), m();
    },
    get onedgecreate() {
      return $e();
    },
    set onedgecreate(X) {
      $e(X), m();
    },
    get attributionPosition() {
      return Me();
    },
    set attributionPosition(X) {
      Me(X), m();
    },
    get proOptions() {
      return Te();
    },
    set proOptions(X) {
      Te(X), m();
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
      return ge();
    },
    set onconnect(X) {
      ge(X), m();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(X) {
      en(X), m();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(X) {
      tn(X), m();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(X) {
      pn(X), m();
    },
    get oninit() {
      return ze();
    },
    set oninit(X) {
      ze(X), m();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(X) {
      rt(X), m();
    },
    get paneClickDistance() {
      return qe();
    },
    set paneClickDistance(X) {
      qe(X), m();
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
      return nn();
    },
    set style(X) {
      nn(X), m();
    },
    get class() {
      return Yt();
    },
    set class(X) {
      Yt(X), m();
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
  de(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = qc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Tr(Ui, { getStore: () => l }), us(() => {
    l.reset();
  }), De();
  var u = Ue(), c = we(u);
  return bt(c, t, "default", {}), D(e, u), fe({
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
  de(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  De();
  var c = $2();
  let d;
  var v = Y(c);
  return bt(v, t, "default", { class: "button-svg" }), Z(c), Se(
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
      () => Pt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), tt("click", c, function(g) {
    Xe.call(this, t, g);
  }), D(e, c), fe({
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
var E2 = /* @__PURE__ */ re("<!> <!>", 1), P2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(V, "$nodesDraggable", n), i = () => te(N, "$nodesConnectable", n), a = () => te(A, "$elementsSelectable", n), s = () => te(_, "$viewport", n), l = () => te(E, "$minZoom", n), u = () => te(T, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), P = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), z = y(t, "style", 12, void 0), H = y(t, "orientation", 12, "vertical"), L = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: O,
    zoomOut: I,
    fitView: M,
    viewport: _,
    minZoom: E,
    maxZoom: T,
    nodesDraggable: V,
    nodesConnectable: N,
    elementsSelectable: A
  } = We(), B = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: P()
  }, j = () => {
    O();
  }, G = () => {
    I();
  }, U = () => {
    M(L());
  }, K = () => {
    J(c, !f(c)), V.set(f(c)), N.set(f(c)), A.set(f(c));
  };
  ve(
    () => (o(), i(), a()),
    () => {
      J(c, o() || i() || a());
    }
  ), ve(() => (s(), l()), () => {
    J(d, s().zoom <= l());
  }), ve(() => (s(), u()), () => {
    J(v, s().zoom >= u());
  }), ve(() => ee(H()), () => {
    J(g, H() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), De();
  const ce = /* @__PURE__ */ be(() => Pt([
    "svelte-flow__controls",
    f(g),
    R()
  ])), se = /* @__PURE__ */ be(() => S() ?? "Svelte Flow controls");
  Lo(e, {
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
    children: (ae, _e) => {
      var he = P2(), Ve = we(he);
      bt(Ve, t, "before", {});
      var ie = q(Ve, 2);
      {
        var Q = ($e) => {
          var Me = E2(), Te = we(Me);
          so(Te, lt(
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
              $$events: { click: j },
              children: (et, ne) => {
                id(et);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = q(Te, 2);
          so(at, lt(
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
              children: (et, ne) => {
                ad(et);
              },
              $$slots: { default: !0 }
            }
          )), D($e, Me);
        };
        pe(ie, ($e) => {
          x() && $e(Q);
        });
      }
      var Ee = q(ie, 2);
      {
        var F = ($e) => {
          so($e, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            B,
            {
              $$events: { click: U },
              children: (Me, Te) => {
                sd(Me);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        pe(Ee, ($e) => {
          b() && $e(F);
        });
      }
      var Le = q(Ee, 2);
      {
        var Ye = ($e) => {
          so($e, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            B,
            {
              $$events: { click: K },
              children: (Me, Te) => {
                var at = Ue(), et = we(at);
                {
                  var ne = (ge) => {
                    ud(ge);
                  }, Re = (ge) => {
                    ld(ge);
                  };
                  pe(et, (ge) => {
                    f(c) ? ge(ne) : ge(Re, !1);
                  });
                }
                D(Me, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        pe(Le, ($e) => {
          $() && $e(Ye);
        });
      }
      var le = q(Le, 2);
      bt(le, t, "default", {});
      var ye = q(le, 2);
      bt(ye, t, "after", {}), D(ae, he);
    },
    $$slots: { default: !0 }
  });
  var me = fe({
    get position() {
      return p();
    },
    set position(ae) {
      p(ae), m();
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
      return P();
    },
    set buttonBorderColor(ae) {
      P(ae), m();
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
var Wn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Wn || (Wn = {}));
var V2 = /* @__PURE__ */ ke("<circle></circle>");
function dd(e, t) {
  de(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  De();
  var o = V2();
  return Se(
    (i) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), xt(o, 0, i);
    },
    [
      () => vn(Pt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    be
  ), D(e, o), fe({
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
  de(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  De();
  var a = N2();
  return Se(
    (s) => {
      xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), xt(a, 0, s);
    },
    [
      () => vn(Pt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    be
  ), D(e, a), fe({
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
  [Wn.Dots]: 1,
  [Wn.Lines]: 1,
  [Wn.Cross]: 6
};
var T2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const z2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function vd(e, t) {
  de(t, !1), Qe(e, z2);
  const [n, r] = nt(), o = () => te(k, "$flowId", n), i = () => te(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => Wn.Dots), g = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = We(), P = p() || H2[v()], S = v() === Wn.Dots, z = v() === Wn.Cross, H = Array.isArray(g()) ? g() : [g(), g()];
  ve(
    () => (o(), ee(d())),
    () => {
      J(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ve(() => i(), () => {
    J(s, [
      H[0] * i().zoom || 1,
      H[1] * i().zoom || 1
    ]);
  }), ve(() => i(), () => {
    J(l, P * i().zoom);
  }), ve(() => (f(l), f(s)), () => {
    J(u, z ? [f(l), f(l)] : f(s));
  }), ve(
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
  ), yt(), De();
  var L = T2();
  let R;
  var O = Y(L), I = Y(O);
  {
    var M = (V) => {
      const N = /* @__PURE__ */ be(() => f(l) / 2);
      dd(V, {
        get radius() {
          return f(N);
        },
        get class() {
          return h();
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
          return h();
        }
      });
    };
    pe(I, (V) => {
      S ? V(M) : V(_, !1);
    });
  }
  Z(O);
  var E = q(O);
  Z(L), Se(
    (V) => {
      xt(L, 0, V, "svelte-1r7pe8d"), R = ft(L, "", R, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), xe(O, "id", f(a)), xe(O, "x", i().x % f(s)[0]), xe(O, "y", i().y % f(s)[1]), xe(O, "width", f(s)[0]), xe(O, "height", f(s)[1]), xe(O, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), xe(E, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Pt(["svelte-flow__background", C()]))
    ],
    be
  ), D(e, L);
  var T = fe({
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
      return g();
    },
    set gap(V) {
      g(V), m();
    },
    get size() {
      return p();
    },
    set size(V) {
      p(V), m();
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
      return h();
    },
    set patternClass(V) {
      h(V), m();
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
function gd(e, t) {
  de(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  De();
  var g = O2();
  let p;
  return Se(
    (x, b) => {
      p = xt(g, 0, x, null, p, b), xe(g, "x", n()), xe(g, "y", r()), xe(g, "rx", a()), xe(g, "ry", a()), xe(g, "width", o()), xe(g, "height", i()), ft(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(g, "shape-rendering", l());
    },
    [
      () => vn(Pt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    be
  ), D(e, g), fe({
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
      const o = W(t.viewport);
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
var L2 = /* @__PURE__ */ ke("<title> </title>"), D2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function hd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => te(Ee, "$flowId", n), i = () => te(Ve, "$viewport", n), a = () => te(ie, "$containerWidth", n), s = () => te(Q, "$containerHeight", n), l = () => te(he, "$nodeLookup", n), u = () => te(_e, "$nodes", n), c = () => te(F, "$panZoom", n), d = () => te(Le, "$translateExtent", n), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe();
  let H = y(t, "position", 12, "bottom-right"), L = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), O = y(t, "nodeColor", 12, void 0), I = y(t, "nodeClass", 12, ""), M = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), E = y(t, "bgColor", 12, void 0), T = y(t, "maskColor", 12, void 0), V = y(t, "maskStrokeColor", 12, void 0), N = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), B = y(t, "height", 12, void 0), j = y(t, "pannable", 12, !0), G = y(t, "zoomable", 12, !0), U = y(t, "inversePan", 12, void 0), K = y(t, "zoomStep", 12, void 0), ce = y(t, "style", 12, ""), se = y(t, "class", 12, "");
  const me = 200, ae = 150, {
    nodes: _e,
    nodeLookup: he,
    viewport: Ve,
    width: ie,
    height: Q,
    flowId: Ee,
    panZoom: F,
    translateExtent: Le
  } = We(), Ye = O() === void 0 ? void 0 : pa(O()), le = pa(R()), ye = pa(I()), $e = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Me = `svelte-flow__minimap-desc-${o()}`;
  let Te = /* @__PURE__ */ oe(f(v));
  const at = () => f($);
  ve(
    () => (i(), a(), s()),
    () => {
      J(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ve(
    () => (l(), f(v), u()),
    () => {
      J(Te, l().size > 0 ? gc(To(l(), { filter: (ge) => !ge.hidden }), f(v)) : f(v)), u();
    }
  ), ve(() => ee(A()), () => {
    J(g, A() ?? me);
  }), ve(() => ee(B()), () => {
    J(p, B() ?? ae);
  }), ve(
    () => (f(Te), f(g)),
    () => {
      J(x, f(Te).width / f(g));
    }
  ), ve(
    () => (f(Te), f(p)),
    () => {
      J(b, f(Te).height / f(p));
    }
  ), ve(
    () => (f(x), f(b)),
    () => {
      J($, Math.max(f(x), f(b)));
    }
  ), ve(() => (f($), f(g)), () => {
    J(h, f($) * f(g));
  }), ve(
    () => (f($), f(p)),
    () => {
      J(C, f($) * f(p));
    }
  ), ve(() => f($), () => {
    J(w, 5 * f($));
  }), ve(
    () => (f(Te), f(h), f(w)),
    () => {
      J(k, f(Te).x - (f(h) - f(Te).width) / 2 - f(w));
    }
  ), ve(
    () => (f(Te), f(C), f(w)),
    () => {
      J(P, f(Te).y - (f(C) - f(Te).height) / 2 - f(w));
    }
  ), ve(() => (f(h), f(w)), () => {
    J(S, f(h) + f(w) * 2);
  }), ve(() => (f(C), f(w)), () => {
    J(z, f(C) + f(w) * 2);
  }), yt(), De();
  const et = /* @__PURE__ */ be(() => ce() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), ne = /* @__PURE__ */ be(() => Pt(["svelte-flow__minimap", se()]));
  Lo(e, {
    get position() {
      return H();
    },
    get style() {
      return f(et);
    },
    get class() {
      return f(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ge, en) => {
      var tn = Ue(), pn = we(tn);
      {
        var ze = (rt) => {
          var qe = D2();
          xe(qe, "aria-labelledby", Me);
          let Ae;
          var ot = Y(qe);
          {
            var nn = (Ct) => {
              var Vt = L2();
              xe(Vt, "id", Me);
              var yr = Y(Vt, !0);
              Z(Vt), Se(() => dt(yr, L())), D(Ct, Vt);
            };
            pe(ot, (Ct) => {
              L() && Ct(nn);
            });
          }
          var Yt = q(ot);
          Et(Yt, 1, u, (Ct) => Ct.id, (Ct, Vt) => {
            var yr = Ue();
            const it = /* @__PURE__ */ be(() => l().get(f(Vt).id));
            var na = we(yr);
            {
              var Qr = (Dt) => {
                const Ro = /* @__PURE__ */ be(() => tr(f(it))), qo = /* @__PURE__ */ be(() => Ye == null ? void 0 : Ye(f(it))), Zo = /* @__PURE__ */ be(() => le(f(it))), ra = /* @__PURE__ */ be(() => ye(f(it)));
                gd(Dt, lt(
                  {
                    get x() {
                      return f(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(it).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Ro),
                  {
                    get selected() {
                      return f(it).selected;
                    },
                    get color() {
                      return f(qo);
                    },
                    get borderRadius() {
                      return M();
                    },
                    get strokeColor() {
                      return f(Zo);
                    },
                    get strokeWidth() {
                      return _();
                    },
                    shapeRendering: $e,
                    get class() {
                      return f(ra);
                    }
                  }
                ));
              };
              pe(na, (Dt) => {
                f(it) && hc(f(it)) && Dt(Qr);
              });
            }
            D(Ct, yr);
          });
          var Ur = q(Yt);
          Z(qe), wt(qe, (Ct, Vt) => Dl == null ? void 0 : Dl(Ct, Vt), () => ({
            panZoom: c(),
            viewport: Ve,
            getViewScale: at,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: U(),
            zoomStep: K(),
            pannable: j(),
            zoomable: G()
          })), Se(() => {
            xe(qe, "width", f(g)), xe(qe, "height", f(p)), xe(qe, "viewBox", `${f(k) ?? ""} ${f(P) ?? ""} ${f(S) ?? ""} ${f(z) ?? ""}`), Ae = ft(qe, "", Ae, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": V(),
              "--xy-minimap-mask-stroke-width-props": N() ? N() * f($) : void 0
            }), xe(Ur, "d", `M${f(k) - f(w)},${f(P) - f(w)}h${f(S) + f(w) * 2}v${f(z) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), D(rt, qe);
        };
        pe(pn, (rt) => {
          c() && rt(ze);
        });
      }
      D(ge, tn);
    },
    $$slots: { default: !0 }
  });
  var Re = fe({
    get position() {
      return H();
    },
    set position(ge) {
      H(ge), m();
    },
    get ariaLabel() {
      return L();
    },
    set ariaLabel(ge) {
      L(ge), m();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(ge) {
      R(ge), m();
    },
    get nodeColor() {
      return O();
    },
    set nodeColor(ge) {
      O(ge), m();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(ge) {
      I(ge), m();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(ge) {
      M(ge), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(ge) {
      _(ge), m();
    },
    get bgColor() {
      return E();
    },
    set bgColor(ge) {
      E(ge), m();
    },
    get maskColor() {
      return T();
    },
    set maskColor(ge) {
      T(ge), m();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(ge) {
      V(ge), m();
    },
    get maskStrokeWidth() {
      return N();
    },
    set maskStrokeWidth(ge) {
      N(ge), m();
    },
    get width() {
      return A();
    },
    set width(ge) {
      A(ge), m();
    },
    get height() {
      return B();
    },
    set height(ge) {
      B(ge), m();
    },
    get pannable() {
      return j();
    },
    set pannable(ge) {
      j(ge), m();
    },
    get zoomable() {
      return G();
    },
    set zoomable(ge) {
      G(ge), m();
    },
    get inversePan() {
      return U();
    },
    set inversePan(ge) {
      U(ge), m();
    },
    get zoomStep() {
      return K();
    },
    set zoomStep(ge) {
      K(ge), m();
    },
    get style() {
      return ce();
    },
    set style(ge) {
      ce(ge), m();
    },
    get class() {
      return se();
    },
    set class(ge) {
      se(ge), m();
    }
  });
  return r(), Re;
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
const Al = (e) => Hp(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = We(), h = (k) => {
    var P, S;
    const z = W(p), H = Al(k) ? k : z.get(k.id), L = H.parentId ? Rp(H.position, H.measured, H.parentId, z, W(x)) : H.position, R = {
      ...H,
      position: L,
      width: ((P = H.measured) == null ? void 0 : P.width) ?? H.width,
      height: ((S = H.measured) == null ? void 0 : S.height) ?? H.height
    };
    return Ir(R);
  }, C = (k, P, S = { replace: !1 }) => {
    var z;
    const H = (z = W(p).get(k)) == null ? void 0 : z.internals.userNode;
    if (!H)
      return;
    const L = typeof P == "function" ? P(H) : P;
    S.replace ? d.update((R) => R.map((O) => O.id === k ? Al(L) ? L : { ...O, ...L } : O)) : (Object.assign(H, L), d.update((R) => R));
  }, w = (k) => W(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var P;
      return (P = w(k)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? W(d) : Il(W(p), k),
    getEdge: (k) => W(b).get(k),
    getEdges: (k) => k === void 0 ? W(v) : Il(W(b), k),
    setZoom: (k, P) => {
      const S = W(c);
      return S ? S.scaleTo(k, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => W(i).zoom,
    setViewport: async (k, P) => {
      const S = W(i), z = W(c);
      return z ? (await z.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => W(i),
    setCenter: async (k, P, S) => {
      const z = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : W(u), H = W(c);
      return H ? (await H.setViewport({
        x: W(a) / 2 - k * z,
        y: W(s) / 2 - P * z,
        zoom: z
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, P) => {
      const S = W(c);
      if (!S)
        return Promise.resolve(!1);
      const z = ws(k, W(a), W(s), W(l), W(u), (P == null ? void 0 : P.padding) ?? 0.1);
      return await S.setViewport(z, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, P = !0, S) => {
      const z = bl(k), H = z ? k : h(k);
      return H ? (S || W(d)).filter((L) => {
        const R = W(p).get(L.id);
        if (!R || !z && L.id === k.id)
          return !1;
        const O = Ir(R), I = Co(O, H);
        return P && I > 0 || I >= H.width * H.height;
      }) : [];
    },
    isNodeIntersecting: (k, P, S = !0) => {
      const z = bl(k) ? k : h(k);
      if (!z)
        return !1;
      const H = Co(z, P);
      return S && H > 0 || H >= z.width * z.height;
    },
    deleteElements: async ({ nodes: k = [], edges: P = [] }) => {
      const { nodes: S, edges: z } = await dc({
        nodesToRemove: k,
        edgesToRemove: P,
        nodes: W(d),
        edges: W(v),
        onBeforeDelete: W(r)
      });
      return S && d.update((H) => H.filter((L) => !S.some(({ id: R }) => R === L.id))), z && v.update((H) => H.filter((L) => !z.some(({ id: R }) => R === L.id))), {
        deletedNodes: S,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (k, P = { snapToGrid: !0 }) => {
      const S = W(g);
      if (!S)
        return k;
      const z = P.snapToGrid ? W(o) : !1, { x: H, y: L, zoom: R } = W(i), { x: O, y: I } = S.getBoundingClientRect(), M = {
        x: k.x - O,
        y: k.y - I
      };
      return zo(M, [H, L, R], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const P = W(g);
      if (!P)
        return k;
      const { x: S, y: z, zoom: H } = W(i), { x: L, y: R } = P.getBoundingClientRect(), O = $i(k, [S, z, H]);
      return {
        x: O.x + L,
        y: O.y + R
      };
    },
    toObject: () => ({
      nodes: W(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: W(v).map((k) => ({ ...k })),
      viewport: { ...W(i) }
    }),
    updateNode: C,
    updateNodeData: (k, P, S) => {
      var z;
      const H = (z = W(p).get(k)) == null ? void 0 : z.internals.userNode;
      if (!H)
        return;
      const L = typeof P == "function" ? P(H) : P;
      H.data = S != null && S.replace ? L : { ...H.data, ...L }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const P = W(p), S = W(x);
      return Tp(k, { nodeLookup: P, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: P, nodeId: S }) => {
      var z;
      return Array.from(((z = W($).get(`${S}-${k}-${P ?? null}`)) == null ? void 0 : z.values()) ?? []);
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
  de(t, !1);
  const [n, r] = nt(), o = () => te(C, "$nodes", n), i = () => te(h, "$nodeLookup", n), a = () => te($, "$viewport", n), s = () => te(b, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: h, nodes: C } = We(), { getNodesBounds: w } = Lt(), k = ur("svelteflow__node_id");
  let P = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe([]), z = p() !== void 0 ? p() : 10, H = v() !== void 0 ? v() : Ne.Top, L = g() !== void 0 ? g() : "center";
  ve(
    () => (o(), ee(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      J(S, _.reduce(
        (E, T) => {
          const V = i().get(T);
          return V && E.push(V), E;
        },
        []
      ));
    }
  ), ve(
    () => (f(S), a()),
    () => {
      const _ = w(f(S));
      _ && J(P, n0(_, a(), H, z, L));
    }
  ), ve(() => f(S), () => {
    J(l, f(S).length === 0 ? 1 : Math.max(...f(S).map((_) => (_.internals.z || 5) + 1)));
  }), ve(() => o(), () => {
    J(u, o().filter((_) => _.selected).length);
  }), ve(
    () => (ee(x()), f(S), f(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), yt(), De();
  var R = Ue(), O = we(R);
  {
    var I = (_) => {
      var E = A2();
      let T;
      var V = Y(E);
      bt(V, t, "default", {}), Z(E), wt(E, (N, A) => Si == null ? void 0 : Si(N, A), () => ({ domNode: s() })), Se(
        (N) => {
          xe(E, "data-id", N), T = ft(E, "", T, {
            position: "absolute",
            transform: f(P),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((N, A) => `${N}${A.id} `, "").trim()
        ],
        be
      ), D(_, E);
    };
    pe(O, (_) => {
      s() && f(c) && f(S) && _(I);
    });
  }
  D(e, R);
  var M = fe({
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
      return x();
    },
    set isVisible(_) {
      x(_), m();
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
  const { nodes: t, nodeLookup: n } = We();
  let r = [], o = !0;
  return jn([t, n], ([, i], a) => {
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
  const e = Ce([]), t = Ce([]), n = Ce({ x: 250, y: 100, zoom: 1 });
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
var q2 = /* @__PURE__ */ re("<button><!></button>");
function Fe(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = q2();
  let i;
  var a = Y(o);
  return cr(a, () => n() ?? gt), Z(o), Se(() => i = Ut(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ue(Fe, { children: {} }, [], [], !0);
var Z2 = /* @__PURE__ */ re("<input>");
function md(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Z2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), fe();
}
ue(md, {}, [], [], !0);
var B2 = /* @__PURE__ */ re("<input>");
function pt(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = B2();
  ar(r);
  let o;
  Se(() => o = Ut(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), fe();
}
ue(pt, {}, [], [], !0);
var X2 = /* @__PURE__ */ re("<textarea></textarea>");
function mt(e, t) {
  de(t, !0);
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
  })), D(e, o), fe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ue(mt, { value: {} }, [], [], !0);
var Y2 = /* @__PURE__ */ re('<div role="button"><!></div>'), j2 = /* @__PURE__ */ re("<div></div>");
function yd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  De();
  var l = j2();
  let u;
  return Et(l, 5, o, zr, (c, d, v) => {
    var g = Y2();
    xe(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = Y(g);
    {
      var x = ($) => {
        var h = Be();
        Se(() => dt(h, f(d).label)), D($, h);
      }, b = ($) => {
        var h = Ue(), C = we(h);
        cr(C, () => f(d).label ?? gt), D($, h);
      };
      pe(p, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    Z(g), Se(() => xt(g, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), D(c, g);
  }), Z(l), Se(() => u = Ut(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), fe({
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
ue(yd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var K2 = (e, t, n) => t(f(n)), W2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, F2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), G2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), U2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), Q2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), J2 = /* @__PURE__ */ re("<div></div>");
const em = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function wd(e, t) {
  de(t, !0), Qe(e, em);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => an([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = J2();
  return Et(a, 21, n, zr, (s, l, u) => {
    var c = Q2(), d = Y(c);
    xe(d, "tabindex", u), d.__click = [K2, i, l], d.__keydown = [W2, i, l];
    var v = Y(d);
    {
      var g = (w) => {
        var k = F2(), P = Y(k);
        Xn(P, {
          get target() {
            return f(l).icon;
          }
        }), Z(k), D(w, k);
      };
      pe(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var p = q(v, 2);
    Xn(p, {
      get target() {
        return f(l).title;
      }
    });
    var x = q(p, 2);
    Z(d);
    var b = q(d, 2);
    {
      var $ = (w) => {
        var k = G2(), P = Y(k);
        Xn(P, {
          get target() {
            return f(l).description;
          }
        }), Z(k), D(w, k);
      };
      pe(b, (w) => {
        f(l).description && w($);
      });
    }
    var h = q(b, 2);
    {
      var C = (w) => {
        var k = U2(), P = Y(k);
        Xn(P, {
          get target() {
            return f(l).content;
          }
        }), Z(k), D(w, k);
      };
      pe(h, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    Z(c), Se((w) => xt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), Z(a), Se(() => {
    ft(a, t.style), xt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, a), fe({
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
ue(wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  de(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ue(), o = we(r);
  {
    var i = (s) => {
      var l = Ue(), u = we(l);
      cr(u, () => n() ?? gt), D(s, l);
    }, a = (s) => {
      var l = Ue(), u = we(l);
      ls(u, n), D(s, l);
    };
    pe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return D(e, r), fe({
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
function Qt(e, t) {
  de(t, !0);
  const n = (C, w = gt) => {
    var k = Ue(), P = we(k);
    Et(P, 19, w, (S, z) => `${z}_${S.value}`, (S, z) => {
      var H = om(), L = we(H);
      L.__click = [tm, x, z];
      var R = Y(L), O = Y(R);
      {
        var I = (T) => {
          var V = nm();
          D(T, V);
        };
        pe(O, (T) => {
          f(z).children && f(z).children.length > 0 && T(I);
        });
      }
      Z(R);
      var M = q(R, 2);
      Xn(M, {
        get target() {
          return f(z).label;
        }
      }), Z(L);
      var _ = q(L, 2);
      {
        var E = (T) => {
          var V = rm(), N = Y(V);
          n(N, () => f(z).children), Z(V), D(T, V);
        };
        pe(_, (T) => {
          f(z).children && f(z).children.length > 0 && (l() || c().includes(f(z).value)) && T(E);
        });
      }
      D(S, H);
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
  ]), g = /* @__PURE__ */ Pe(() => {
    const C = [], w = (k) => {
      for (let P of k)
        a().length > 0 ? a().includes(P.value) && C.push(P) : s().includes(P.value) && C.push(P), P.children && P.children.length > 0 && w(P.children);
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
  var b = um();
  let $;
  var h = Y(b);
  return _n(
    Gr(h, {
      floating: (C) => {
        var w = im(), k = Y(w);
        n(k, r), Z(w), D(C, w);
      },
      children: (C, w) => {
        var k = lm();
        let P;
        var S = Y(k);
        Et(
          S,
          23,
          () => f(g),
          (z, H) => `${H}_${z.value}`,
          (z, H, L) => {
            var R = Ue(), O = we(R);
            {
              var I = (_) => {
                var E = Ue(), T = we(E);
                {
                  var V = (N) => {
                    Xn(N, {
                      get target() {
                        return f(H).label;
                      }
                    });
                  };
                  pe(T, (N) => {
                    f(L) === 0 && N(V);
                  });
                }
                D(_, E);
              }, M = (_) => {
                var E = am(), T = we(E);
                Xn(T, {
                  get target() {
                    return f(H).label;
                  }
                });
                var V = q(T, 2);
                {
                  var N = (A) => {
                    var B = Be(",");
                    D(A, B);
                  };
                  pe(V, (A) => {
                    f(L) < f(g).length - 1 && A(N);
                  });
                }
                D(_, E);
              };
              pe(O, (_) => {
                u() ? _(M, !1) : _(I);
              });
            }
            D(z, R);
          },
          (z) => {
            var H = sm(), L = Y(H, !0);
            Z(H), Se(() => dt(L, d())), D(z, H);
          }
        ), Z(S), Oe(2), Z(k), Se(() => P = Ut(k, P, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), D(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), Z(b), Se(() => $ = Ut(b, $, {
    ...v,
    class: `tf-select ${v.class ?? ""}`
  })), D(e, b), fe({
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
ue(
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
const ko = Math.min, Er = Math.max, Pi = Math.round, wn = (e) => ({
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
function qa(e, t, n) {
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
function bd(e) {
  return e === "x" ? "y" : "x";
}
function _s(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function ks(e) {
  return bd(lr(e));
}
function fm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ks(e), i = _s(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Vi(a)), [a, Vi(a)];
}
function vm(e) {
  const t = Vi(e);
  return [Za(e), t, Za(t)];
}
function Za(e) {
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
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Za)))), i;
}
function Vi(e) {
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
function xd(e) {
  return typeof e != "number" ? pm(e) : {
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
function ql(e, t, n) {
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
  } = ql(u, r, l), v = r, g = {}, p = 0;
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
    } = ql(u, v, l)), x = -1);
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
  } = Do(t, e), p = xd(g), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = Ni(await i.getClippingRect({
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
  }, w = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
    }, g = ks(o), p = _s(g), x = await a.getDimensions(u), b = g === "y", $ = b ? "top" : "left", h = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[g] - v[g] - i.floating[p], k = v[g] - i.reference[g], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = P ? P[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(P))) && (S = s.floating[C] || i.floating[p]);
    const z = w / 2 - k / 2, H = S / 2 - x[p] / 2 - 1, L = ko(d[$], H), R = ko(d[h], H), O = L, I = S - x[p] - R, M = S / 2 - x[p] / 2 + z, _ = qa(O, M, I), E = !l.arrow && Ao(o) != null && M !== _ && i.reference[p] / 2 - (M < O ? L : R) - x[p] / 2 < 0, T = E ? M < O ? M - O : M - I : 0;
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
        flipAlignment: x = !0,
        ...b
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gr(o), h = lr(s), C = gr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Vi(s)] : vm(s)), P = p !== "none";
      !v && P && k.push(...hm(s, x, p, w));
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
        const _ = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, E = S[_];
        if (E) {
          var I;
          const V = d === "alignment" ? h !== lr(E) : !1, N = ((I = L[0]) == null ? void 0 : I.overflows[0]) > 0;
          if (!V || N)
            return {
              data: {
                index: _,
                overflows: L
              },
              reset: {
                placement: E
              }
            };
        }
        let T = (O = L.filter((V) => V.overflows[0] <= 0).sort((V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var M;
              const V = (M = L.filter((N) => {
                if (P) {
                  const A = lr(N.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((A) => A > 0).reduce((A, B) => A + B, 0)]).sort((N, A) => N[1] - A[1])[0]) == null ? void 0 : M[0];
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
              y: h
            } = b;
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
      }, c = await $d(t, l), d = lr(gr(o)), v = bd(d);
      let g = u[v], p = u[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + c[b], C = g - c[$];
        g = qa(h, g, C);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + c[b], C = p - c[$];
        p = qa(h, p, C);
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
function Qi() {
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
  return Qi() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function dn(e) {
  return Qi() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function kn(e) {
  return Qi() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function Zl(e) {
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
function Cm(e) {
  return ["table", "td", "th"].includes(Fr(e));
}
function Ji(e) {
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
  let t = Qn(e);
  for (; kn(t) && !qr(t); ) {
    if (Ss(t))
      return t;
    if (Ji(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Ms() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function qr(e) {
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
function Qn(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zl(e) && e.host || // Fallback.
    An(e)
  );
  return Zl(t) ? t.host : t;
}
function _d(e) {
  const t = Qn(e);
  return qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Io(t) ? t : _d(t);
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
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Pi(n) !== i || Pi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Md(e) {
  return dn(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Md(e);
  if (!kn(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Sd(t);
  let a = (i ? Pi(n.width) : n.width) / r, s = (i ? Pi(n.height) : n.height) / o;
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
  t && (r ? dn(r) && (a = Pr(r)) : a = Pr(e));
  const s = Sm(i, n, r) ? Ed(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), g = r && dn(r) ? Bt(r) : r;
    let p = v, x = Ba(p);
    for (; x && r && g !== p; ) {
      const b = Pr(x), $ = x.getBoundingClientRect(), h = fn(x), C = $.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += w, p = Bt(x), x = Ba(p);
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
  const n = ea(e).scrollLeft;
  return t ? t.left + n : So(An(e)).left + n;
}
function Pd(e, t, n) {
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
  const i = o === "fixed", a = An(r), s = t ? Ji(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((Fr(r) !== "body" || Io(a)) && (l = ea(r)), kn(r))) {
    const g = So(r);
    u = Pr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const v = a && !d && !i ? Pd(a, l, !0) : wn(0);
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
function Pm(e) {
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
function Vm(e, t) {
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
function Nm(e, t) {
  const n = So(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Pr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Vm(e, n);
  else if (t === "document")
    r = Pm(An(e));
  else if (dn(t))
    r = Nm(t, n);
  else {
    const o = Ed(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ni(r);
}
function Vd(e, t) {
  const n = Qn(e);
  return n === t || !dn(n) || qr(n) ? !1 : fn(n).position === "fixed" || Vd(n, t);
}
function Hm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = kd(e, []).filter((s) => dn(s) && Fr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Qn(e) : e;
  for (; dn(a) && !qr(a); ) {
    const s = fn(a), l = Ss(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Vd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Qn(a);
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
  const i = [...n === "clippingAncestors" ? Ji(t) ? [] : Hm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
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
function Om(e, t, n) {
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
  const c = o && !r && !i ? Pd(o, s) : wn(0), d = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
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
  if (Ji(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !qr(o); ) {
      if (dn(o) && !ma(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && Cm(r) && ma(r); )
    r = Xl(r, t);
  return r && qr(r) && ma(r) && !Ss(r) ? n : r || _m(e) || n;
}
const Lm = async function(e) {
  const t = this.getOffsetParent || Nd, n = this.getDimensions, r = await n(e.floating);
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
  convertOffsetParentRelativeRectToViewportRelativeRect: Mm,
  getDocumentElement: An,
  getClippingRect: Tm,
  getOffsetParent: Nd,
  getElementRects: Lm,
  getClientRects: Em,
  getDimensions: zm,
  getScale: Pr,
  isElement: dn,
  isRTL: Dm
}, Im = xm, Rm = $m, qm = wm, Zm = ym, Bm = (e, t, n) => {
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
        qm(i),
        //自动翻转
        Rm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Zm({ element: c })] : []
      ]
    }).then(({ x: $, y: h, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: P } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: P != null ? `${P}px` : "",
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
var Ym = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Gr(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  Jt(() => (s = Xm({
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
  var u = Ym(), c = Y(u), d = Y(c);
  cr(d, n), Z(c), _n(c, (p) => i = p, () => i);
  var v = q(c, 2), g = Y(v);
  return cr(g, r), Z(v), _n(v, (p) => a = p, () => a), Z(u), D(e, u), fe({
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
function Ge(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Ue(), s = we(a);
  return zf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = Ut(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ue(), v = we(d);
    cr(v, () => n() ?? gt), D(u, d);
  }), D(e, a), fe({
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
var jm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Km = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ta(e, t) {
  de(t, !0), Qe(e, Km);
  const n = /* @__PURE__ */ $t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = jm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
ue(ta, {}, [], [], !0);
const Wm = () => {
  const e = We();
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
}, Fm = () => {
  const { nodes: e, nodeLookup: t } = We();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = W(t).get(n)) == null ? void 0 : r.internals.userNode;
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
}, Jn = () => ur("tinyflow_options");
function ht() {
  return ur("svelteflow__node_id");
}
var Gm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Um = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Qm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Jm = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), ey = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, ty = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ry = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), oy = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const iy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function hn(e, t) {
  de(t, !0), Qe(e, iy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), p = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Lt(), h = /* @__PURE__ */ Pe(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = Wm(), { copyNode: w } = Fm(), k = Jn(), P = () => {
    var N;
    (N = k.onNodeExecute) == null || N.call(k, $(r()));
  };
  let S = ht();
  var z = oy(), H = we(z);
  {
    var L = (N) => {
      pd(N, {
        get position() {
          return Ne.Top;
        },
        align: "end",
        children: (A, B) => {
          var j = ry(), G = Y(j);
          {
            var U = (he) => {
              Fe(he, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Ve, ie) => {
                  var Q = Gm();
                  D(Ve, Q);
                },
                $$slots: { default: !0 }
              });
            };
            pe(G, (he) => {
              u() && he(U);
            });
          }
          var K = q(G, 2);
          {
            var ce = (he) => {
              Fe(he, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (Ve, ie) => {
                  var Q = Um();
                  D(Ve, Q);
                },
                $$slots: { default: !0 }
              });
            };
            pe(K, (he) => {
              l() && he(ce);
            });
          }
          var se = q(K, 2);
          {
            var me = (he) => {
              Fe(he, {
                class: "tf-node-toolbar-item",
                onclick: P,
                children: (Ve, ie) => {
                  var Q = Qm();
                  D(Ve, Q);
                },
                $$slots: { default: !0 }
              });
            };
            pe(se, (he) => {
              s() && he(me);
            });
          }
          var ae = q(se, 2);
          {
            var _e = (he) => {
              Gr(he, {
                placement: "bottom",
                floating: (Ve) => {
                  var ie = ty(), Q = Y(ie), Ee = q(Y(Q));
                  pt(Ee, {
                    style: "width: 100%;",
                    onchange: (Me) => {
                      const Te = Me.target.value;
                      b(S, { title: Te });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(Q);
                  var F = q(Q, 2), Le = q(Y(F));
                  mt(Le, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Me) => {
                      const Te = Me.target.value;
                      b(S, { description: Te });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(F);
                  var Ye = q(F, 2);
                  {
                    var le = (Me) => {
                      var Te = Jm(), at = q(Y(Te));
                      mt(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (et) => {
                          const ne = et.target.value;
                          b(S, { condition: ne });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(Te), D(Me, Te);
                    };
                    pe(Ye, (Me) => {
                      d() && Me(le);
                    });
                  }
                  var ye = q(Ye, 2), $e = q(Y(ye), 2);
                  ar($e), $e.__change = [ey, b, S], Z(ye), Z(ie), Se(() => Af($e, !!n().async)), D(Ve, ie);
                },
                children: (Ve, ie) => {
                  Fe(Ve, {
                    class: "tf-node-toolbar-item",
                    children: (Q, Ee) => {
                      var F = ny();
                      D(Q, F);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            pe(ae, (he) => {
              c() && he(_e);
            });
          }
          Z(j), D(A, j);
        },
        $$slots: { default: !0 }
      });
    };
    pe(H, (N) => {
      (s() || l() || u()) && N(L);
    });
  }
  var R = q(H, 2), O = q(Y(R), 2), I = Y(O);
  wd(I, {
    get items() {
      return f(h);
    },
    activeKeys: x,
    onChange: (N, A) => {
      var B;
      b(r(), { expand: A == null ? void 0 : A.includes("key") }), (B = p()) == null || B(A != null && A.includes("key") ? "key" : "");
    }
  }), Z(O), Z(R);
  var M = q(R, 2);
  {
    var _ = (N) => {
      Un(N, {
        type: "target",
        get position() {
          return Ne.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    pe(M, (N) => {
      g() && N(_);
    });
  }
  var E = q(M, 2);
  {
    var T = (N) => {
      Un(N, {
        type: "source",
        get position() {
          return Ne.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    pe(E, (N) => {
      v() && N(T);
    });
  }
  var V = q(E, 2);
  return cr(V, () => i() ?? gt), D(e, z), fe({
    get data() {
      return n();
    },
    set data(N) {
      n(N), m();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), m();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), m();
    },
    get handle() {
      return i();
    },
    set handle(N) {
      i(N), m();
    },
    get children() {
      return a();
    },
    set children(N) {
      a(N), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(N = !0) {
      s(N), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(N = !0) {
      l(N), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(N = !0) {
      u(N), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(N = !0) {
      c(N), m();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(N = !0) {
      d(N), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(N = !0) {
      v(N), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(N = !0) {
      g(N), m();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(N) {
      p(N), m();
    }
  });
}
Wr(["change"]);
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
  de(t, !0), Qe(e, cy);
  const [n, r] = nt(), o = () => te(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Pe(() => mr(s)), u = /* @__PURE__ */ Pe(() => {
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
  }, g = (H) => {
    const L = H.target.checked;
    d("required", L);
  }, p = (H) => {
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
  var $ = uy(), h = we($), C = Y(h);
  pt(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(h);
  var w = q(h, 2), k = Y(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), Z(w);
  var P = q(w, 2), S = Y(P);
  _n(
    Gr(S, {
      placement: "bottom",
      floating: (H) => {
        var L = sy(), R = Y(L), O = q(Y(R));
        const I = /* @__PURE__ */ Pe(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Qt(O, {
          items: Hd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(I);
          }
        }), Z(R);
        var M = q(R, 2), _ = q(Y(M));
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
        }), Z(M);
        var E = q(M, 2), T = q(Y(E));
        mt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const B = A.target.value;
            d("description", B);
          }
        }), Z(E);
        var V = q(E, 2), N = Y(V);
        Fe(N, {
          onclick: b,
          children: (A, B) => {
            Oe();
            var j = Be("删除");
            D(A, j);
          },
          $$slots: { default: !0 }
        }), Z(V), Z(L), D(H, L);
      },
      children: (H, L) => {
        Fe(H, {
          class: "input-btn-more",
          children: (R, O) => {
            var I = ly();
            D(R, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), Z(P), D(e, $);
  var z = fe({
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
const gy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  de(t, !0), Qe(e, gy);
  const [n, r] = nt(), o = () => te(f(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Pe(() => mr(i)), s = /* @__PURE__ */ Pe(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = vy(), u = Y(l);
  {
    var c = (v) => {
      var g = dy();
      Oe(4), D(v, g);
    };
    pe(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = q(u, 2);
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
  ), Z(l), D(e, l), fe(), r();
}
ue(zd, {}, [], [], !0);
const Hi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Zr()), Hi(t.children);
}), e), En = () => {
  const { updateNodeData: e } = Lt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Hi(r == null ? void 0 : r.children);
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
var hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  de(t, !0), Qe(e, yy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, lt(() => r, {
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
      var l = my(), u = we(l), c = Y(u);
      Ge(c, {
        level: 3,
        children: (g, p) => {
          Oe();
          var x = Be("输入参数");
          D(g, x);
        },
        $$slots: { default: !0 }
      });
      var d = q(c, 2);
      Fe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, p) => {
          var x = py();
          D(g, x);
        },
        $$slots: { default: !0 }
      }), Z(u);
      var v = q(u, 2);
      zd(v, {}), D(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
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
  const t = ht(), n = mr(t), { nodes: r, edges: o } = We();
  return jn([n, r, o], ([i, a, s]) => {
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
  de(t, !0), Qe(e, $y);
  const [n, r] = nt(), o = () => te(f(c), "$node", n), i = () => te(C, "$selectItems", n);
  Jt(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Pe(() => mr(u)), d = /* @__PURE__ */ Pe(() => {
    var _;
    return {
      ...a(),
      ...(_ = o()) == null ? void 0 : _.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Lt(), g = (_, E) => {
    v(u, (T) => {
      let V = T.data[l()];
      return V[s()] = { ...V[s()], [_]: E }, { [l()]: V };
    });
  }, p = (_, E) => {
    const T = E.target.value;
    g(_, T);
  }, x = (_) => {
    const E = _.value;
    g("ref", E);
  }, b = (_) => {
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
  var w = xy(), k = we(w), P = Y(k);
  const S = /* @__PURE__ */ Pe(() => f(d).nameDisabled === !0);
  pt(P, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(S);
    },
    oninput: (_) => p("name", _)
  }), Z(k);
  var z = q(k, 2), H = Y(z);
  {
    var L = (_) => {
      pt(_, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (E) => p("value", E)
      });
    }, R = (_, E) => {
      {
        var T = (V) => {
          const N = /* @__PURE__ */ Pe(() => [f(d).ref]);
          Qt(V, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(N);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        pe(
          _,
          (V) => {
            f(d).refType !== "input" && V(T);
          },
          E
        );
      }
    };
    pe(H, (_) => {
      f(d).refType === "fixed" ? _(L) : _(R, !1);
    });
  }
  Z(z);
  var O = q(z, 2), I = Y(O);
  _n(
    Gr(I, {
      placement: "bottom",
      floating: (_) => {
        var E = by(), T = Y(E), V = q(Y(T));
        const N = /* @__PURE__ */ Pe(() => f(d).refType ? [f(d).refType] : []);
        Qt(V, {
          items: ay,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(N);
          },
          onSelect: b
        }), Z(T);
        var A = q(T, 2), B = q(Y(A));
        mt(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            p("defaultValue", ce);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), Z(A);
        var j = q(A, 2), G = q(Y(j));
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            p("description", ce);
          },
          get value() {
            return f(d).description;
          }
        }), Z(j);
        var U = q(j, 2), K = Y(U);
        Fe(K, {
          onclick: h,
          children: (ce, se) => {
            Oe();
            var me = Be("删除");
            D(ce, me);
          },
          $$slots: { default: !0 }
        }), Z(U), Z(E), D(_, E);
      },
      children: (_, E) => {
        ta(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => $ = _,
    () => $
  ), Z(O), D(e, w);
  var M = fe({
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
function qt(e, t) {
  de(t, !0), Qe(e, Sy);
  const [n, r] = nt(), o = () => te(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = ht(), l = /* @__PURE__ */ Pe(() => mr(s)), u = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var c = ky(), d = Y(c);
  {
    var v = (x) => {
      var b = Cy();
      Oe(4), D(x, b);
    };
    pe(d, (x) => {
      f(u).length !== 0 && x(v);
    });
  }
  var g = q(d, 2);
  Et(
    g,
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
      var b = _y(), $ = Y(b, !0);
      Z(b), Se(() => dt($, i())), D(x, b);
    }
  ), Z(c), D(e, c);
  var p = fe({
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
ue(qt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Ad(e, t) {
  de(t, !0), Qe(e, Vy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
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
        var s = My();
        D(a, s);
      },
      children: (a, s) => {
        var l = Py(), u = we(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (g, p) => {
            Oe();
            var x = Be("输出参数");
            D(g, x);
          },
          $$slots: { default: !0 }
        });
        var d = q(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, p) => {
            var x = Ey();
            D(g, x);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = q(u, 2);
        qt(v, {
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
      n(a), m();
    }
  });
}
ue(Ad, { data: {} }, [], [], !0);
const ya = (e) => JSON.parse(JSON.stringify(e));
var Ny = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Ty = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), zy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Oy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  de(t, !0), Qe(e, Oy);
  const [n, r] = nt(), o = () => te(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Pe(() => mr(l)), c = /* @__PURE__ */ Pe(() => {
    var T;
    let V = (T = o()) == null ? void 0 : T.data[s()], N;
    if (V && a().length > 0) {
      let A = V;
      for (let B = 0; B < a().length; B++) {
        const j = a()[B];
        B == a().length - 1 ? N = A[j] : A = A[j].children;
      }
    }
    return { ...i(), ...N };
  });
  const { updateNodeData: d } = Lt(), v = (T, V) => {
    d(l, (N) => {
      const A = N.data[s()];
      if (A && a().length > 0) {
        let B = A;
        for (let j = 0; j < a().length; j++) {
          const G = a()[j];
          j == a().length - 1 ? B[G] = { ...B[G], [T]: V } : B = B[G].children;
        }
      }
      return {
        [s()]: [...ya(A)]
      };
    });
  }, g = (T, V) => {
    const N = V.target.value;
    v(T, N);
  }, p = (T) => {
    const V = T.value;
    v("dataType", V);
  };
  let x;
  const b = () => {
    d(l, (T) => {
      let V = T.data[s()];
      if (V && a().length > 0) {
        let N = V;
        for (let A = 0; A < a().length; A++) {
          const B = a()[A];
          A == a().length - 1 ? N.splice(B, 1) : N = N[B].children;
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
        let N = V;
        for (let A = 0; A < a().length; A++) {
          const B = a()[A];
          A == a().length - 1 ? N[B].children ? N[B].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : N[B].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : N = N[B].children;
        }
      }
      return {
        [s()]: [...ya(V)]
      };
    });
  };
  var h = zy(), C = we(h), w = Y(C);
  {
    var k = (T) => {
      var V = Ue(), N = we(V);
      Et(N, 17, a, zr, (A, B) => {
        Oe();
        var j = Be(" ");
        D(A, j);
      }), D(T, V);
    };
    pe(w, (T) => {
      a().length > 1 && T(k);
    });
  }
  var P = q(w, 2);
  const S = /* @__PURE__ */ Pe(() => f(c).nameDisabled === !0);
  pt(P, {
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
  }), Z(C);
  var z = q(C, 2), H = Y(z);
  const L = /* @__PURE__ */ Pe(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Pe(() => f(c).dataTypeDisabled === !0);
  Qt(H, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(L);
    },
    get disabled() {
      return f(R);
    },
    onSelect: p
  });
  var O = q(H, 2);
  {
    var I = (T) => {
      Fe(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (V, N) => {
          var A = Ny();
          D(V, A);
        },
        $$slots: { default: !0 }
      });
    };
    pe(O, (T) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && T(I);
    });
  }
  Z(z);
  var M = q(z, 2), _ = Y(M);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (T) => {
        var V = Ty(), N = Y(V), A = q(Y(N));
        const B = /* @__PURE__ */ Pe(() => f(c).defaultValue || "");
        mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(B);
          },
          onchange: (se) => {
            g("defaultValue", se);
          }
        }), Z(N);
        var j = q(N, 2), G = q(Y(j));
        const U = /* @__PURE__ */ Pe(() => f(c).description || "");
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(U);
          },
          onchange: (se) => {
            g("description", se);
          }
        }), Z(j);
        var K = q(j, 2);
        {
          var ce = (se) => {
            var me = Hy(), ae = Y(me);
            Fe(ae, {
              onclick: b,
              children: (_e, he) => {
                Oe();
                var Ve = Be("删除");
                D(_e, Ve);
              },
              $$slots: { default: !0 }
            }), Z(me), D(se, me);
          };
          pe(K, (se) => {
            f(c).deleteDisabled !== !0 && se(ce);
          });
        }
        Z(V), D(T, V);
      },
      children: (T, V) => {
        ta(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), Z(M), D(e, h);
  var E = fe({
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
var Ly = /* @__PURE__ */ re("<!> <!>", 1), Dy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Iy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  de(t, !0), Qe(e, Ry);
  const [n, r] = nt(), o = () => te(f(u), "$node", n), i = (b, $ = gt, h = gt) => {
    var C = Ue(), w = we(C);
    Et(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, P, S) => {
        var z = Ly(), H = we(z);
        const L = /* @__PURE__ */ Pe(() => [...h(), f(S)]);
        Id(H, {
          get parameter() {
            return f(P);
          },
          get position() {
            return f(L);
          },
          get dataKeyName() {
            return s();
          }
        });
        var R = q(H, 2);
        {
          var O = (I) => {
            var M = /* @__PURE__ */ be(() => [...h(), f(S)]);
            i(I, () => f(P).children, () => f(M));
          };
          pe(R, (I) => {
            f(P).children && I(O);
          });
        }
        D(k, z);
      },
      (k) => {
        var P = Ue(), S = we(P);
        {
          var z = (H) => {
            var L = Dy(), R = Y(L, !0);
            Z(L), Se(() => dt(R, a())), D(H, L);
          };
          pe(S, (H) => {
            h().length === 0 && H(z);
          });
        }
        D(k, P);
      }
    ), D(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Pe(() => mr(l)), c = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Iy(), v = Y(d);
  {
    var g = (b) => {
      var $ = Ay();
      Oe(4), D(b, $);
    };
    pe(v, (b) => {
      f(c).length !== 0 && b(g);
    });
  }
  var p = q(v, 2);
  i(p, () => f(c) || [], () => []), Z(d), D(e, d);
  var x = fe({
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
var qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Xy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Yy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Wy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Rd(e, t) {
  de(t, !0), Qe(e, Wy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Jn();
  let s = /* @__PURE__ */ kt(an([]));
  Jt(async () => {
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
  }), hn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = qy();
        D(c, d);
      },
      children: (c, d) => {
        var v = Ky(), g = we(v), p = Y(g);
        Ge(p, {
          level: 3,
          children: (Q, Ee) => {
            Oe();
            var F = Be("输入参数");
            D(Q, F);
          },
          $$slots: { default: !0 }
        });
        var x = q(p, 2);
        Fe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Q, Ee) => {
            var F = Zy();
            D(Q, F);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = q(g, 2);
        qt(b, {});
        var $ = q(b, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (Q, Ee) => {
            Oe();
            var F = Be("模型设置");
            D(Q, F);
          },
          $$slots: { default: !0 }
        });
        var h = q($, 4), C = Y(h);
        const w = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        Qt(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (Q) => {
            const Ee = Q.value;
            l(o, () => ({ llmId: Ee }));
          },
          get value() {
            return f(w);
          }
        });
        var k = q(C, 2);
        ta(k, {}), Z(h);
        var P = q(h, 4), S = Y(P), z = Y(S), H = Y(z);
        Z(z);
        var L = q(z, 2);
        ar(L), L.__input = [By, l, o], Z(S), Z(P);
        var R = q(P, 2), O = Y(R), I = Y(O), M = Y(I);
        Z(I);
        var _ = q(I, 2);
        ar(_), _.__input = [Xy, l, o], Z(O), Z(R);
        var E = q(R, 2), T = Y(E), V = Y(T), N = Y(V);
        Z(V);
        var A = q(V, 2);
        ar(A), A.__input = [Yy, l, o], Z(T), Z(E);
        var B = q(E, 4), j = Y(B);
        const G = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        mt(j, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(G);
          },
          oninput: (Q) => {
            l(o, { systemPrompt: Q.target.value });
          }
        }), Z(B);
        var U = q(B, 4), K = Y(U);
        const ce = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        mt(K, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ce);
          },
          oninput: (Q) => {
            l(o, { userPrompt: Q.target.value });
          }
        }), Z(U);
        var se = q(U, 2), me = Y(se);
        Ge(me, {
          level: 3,
          mt: "10px",
          children: (Q, Ee) => {
            Oe();
            var F = Be("输出参数");
            D(Q, F);
          },
          $$slots: { default: !0 }
        });
        var ae = q(me, 2);
        const _e = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        Qt(ae, {
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
            return f(_e);
          }
        });
        var he = q(ae, 2);
        {
          var Ve = (Q) => {
            Fe(Q, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Ee, F) => {
                var Le = jy();
                D(Ee, Le);
              },
              $$slots: { default: !0 }
            });
          };
          pe(he, (Q) => {
            n().outType === "json" && Q(Ve);
          });
        }
        Z(se);
        var ie = q(se, 2);
        In(ie, {}), Se(() => {
          dt(H, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), sa(L, n().temperature ?? 0.5), dt(M, `Top P: ${n().topP ?? 0.9 ?? ""}`), sa(_, n().topP ?? 0.9), dt(N, `Top K: ${n().topK ?? 50 ?? ""}`), sa(A, n().topK ?? 50);
        }), D(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
Wr(["input"]);
ue(Rd, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  de(t, !0), Qe(e, Jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Jt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Lt(), s = [
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
        var u = Fy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Qy(), d = we(c), v = Y(d);
        Ge(v, {
          level: 3,
          children: (L, R) => {
            Oe();
            var O = Be("输入参数");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var g = q(v, 2);
        Fe(g, {
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
        }), Z(d);
        var p = q(d, 2);
        qt(p, {});
        var x = q(p, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Oe();
            var O = Be("代码");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var b = q(x, 4), $ = Y(b);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Qt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (L) => {
            const R = L.value;
            a(o, () => ({ engine: R }));
          },
          get value() {
            return f(h);
          }
        }), Z(b);
        var C = q(b, 4), w = Y(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
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
        }), Z(C);
        var P = q(C, 2), S = Y(P);
        Ge(S, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Oe();
            var O = Be("输出参数");
            D(L, O);
          },
          $$slots: { default: !0 }
        });
        var z = q(S, 2);
        Fe(z, {
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
        }), Z(P);
        var H = q(P, 2);
        In(H, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(qd, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), Qe(e, rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Lt();
  return ln(() => {
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
        var l = ew();
        D(s, l);
      },
      children: (s, l) => {
        var u = nw(), c = we(u), d = Y(c);
        Ge(d, {
          level: 3,
          children: (k, P) => {
            Oe();
            var S = Be("输入参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var v = q(d, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var S = tw();
            D(k, S);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = q(c, 2);
        qt(g, {});
        var p = q(g, 2);
        Ge(p, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, P) => {
            Oe();
            var S = Be("模板内容");
            D(k, S);
          },
          $$slots: { default: !0 }
        });
        var x = q(p, 2), b = Y(x);
        const $ = /* @__PURE__ */ Pe(() => n().template || "");
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
        }), Z(x);
        var h = q(x, 2), C = Y(h);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Oe();
            var S = Be("输出参数");
            D(k, S);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var w = q(h, 2);
        In(w, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ue(Zd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Bd(e, t) {
  de(t, !0), Qe(e, hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Jt(() => {
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
  return hn(e, lt(
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
        var c = gw(), d = we(c), v = Y(d), g = Y(v);
        const p = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        Qt(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const ye = le.value;
            s(i, () => ({ method: ye }));
          },
          get value() {
            return f(p);
          }
        }), Z(v);
        var x = q(v, 2), b = Y(x);
        const $ = /* @__PURE__ */ Pe(() => n().url || "");
        pt(b, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return f($);
          }
        }), Z(x), Z(d);
        var h = q(d, 2), C = Y(h);
        Ge(C, {
          level: 3,
          children: (le, ye) => {
            Oe();
            var $e = Be("Http 头信息");
            D(le, $e);
          },
          $$slots: { default: !0 }
        });
        var w = q(C, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, ye) => {
            var $e = iw();
            D(le, $e);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var k = q(h, 2);
        qt(k, { dataKeyName: "headers" });
        var P = q(k, 2), S = Y(P);
        Ge(S, {
          level: 3,
          children: (le, ye) => {
            Oe();
            var $e = Be("参数");
            D(le, $e);
          },
          $$slots: { default: !0 }
        });
        var z = q(S, 2);
        Fe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (le, ye) => {
            var $e = aw();
            D(le, $e);
          },
          $$slots: { default: !0 }
        }), Z(P);
        var H = q(P, 2);
        qt(H, { dataKeyName: "urlParameters" });
        var L = q(H, 2);
        Ge(L, {
          level: 3,
          mt: "10px",
          children: (le, ye) => {
            Oe();
            var $e = Be("Body");
            D(le, $e);
          },
          $$slots: { default: !0 }
        });
        var R = q(L, 2), O = Y(R), I = Y(O);
        const M = /* @__PURE__ */ Pe(() => !n().bodyType);
        pt(I, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(M);
          },
          onchange: (le) => {
            var ye;
            (ye = le.target) != null && ye.checked && s(i, { bodyType: "" });
          }
        }), Oe(), Z(O);
        var _ = q(O, 2), E = Y(_);
        const T = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        pt(E, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(T);
          },
          onchange: (le) => {
            var ye;
            (ye = le.target) != null && ye.checked && s(i, { bodyType: "form-data" });
          }
        }), Oe(), Z(_);
        var V = q(_, 2), N = Y(V);
        const A = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        pt(N, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(A);
          },
          onchange: (le) => {
            var ye;
            (ye = le.target) != null && ye.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Oe(), Z(V);
        var B = q(V, 2), j = Y(B);
        const G = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        pt(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(G);
          },
          onchange: (le) => {
            var ye;
            (ye = le.target) != null && ye.checked && s(i, { bodyType: "json" });
          }
        }), Oe(), Z(B);
        var U = q(B, 2), K = Y(U);
        const ce = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        pt(K, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ce);
          },
          onchange: (le) => {
            var ye;
            (ye = le.target) != null && ye.checked && s(i, { bodyType: "raw" });
          }
        }), Oe(), Z(U), Z(R);
        var se = q(R, 2);
        {
          var me = (le) => {
            var ye = lw(), $e = we(ye), Me = Y($e);
            Ge(Me, {
              level: 3,
              children: (et, ne) => {
                Oe();
                var Re = Be("参数");
                D(et, Re);
              },
              $$slots: { default: !0 }
            });
            var Te = q(Me, 2);
            Fe(Te, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (et, ne) => {
                var Re = sw();
                D(et, Re);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var at = q($e, 2);
            qt(at, { dataKeyName: "fromData" }), D(le, ye);
          };
          pe(se, (le) => {
            n().bodyType === "form-data" && le(me);
          });
        }
        var ae = q(se, 2);
        {
          var _e = (le) => {
            var ye = cw(), $e = we(ye), Me = Y($e);
            Ge(Me, {
              level: 3,
              children: (et, ne) => {
                Oe();
                var Re = Be("参数");
                D(et, Re);
              },
              $$slots: { default: !0 }
            });
            var Te = q(Me, 2);
            Fe(Te, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (et, ne) => {
                var Re = uw();
                D(et, Re);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var at = q($e, 2);
            qt(at, { dataKeyName: "fromUrlencoded" }), D(le, ye);
          };
          pe(ae, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(_e);
          });
        }
        var he = q(ae, 2);
        {
          var Ve = (le) => {
            var ye = dw(), $e = Y(ye);
            mt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Me) => {
                s(i, { bodyJson: Me.target.value });
              }
            }), Z(ye), D(le, ye);
          };
          pe(he, (le) => {
            n().bodyType === "json" && le(Ve);
          });
        }
        var ie = q(he, 2);
        {
          var Q = (le) => {
            var ye = fw(), $e = Y(ye);
            mt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Me) => {
                s(i, { bodyRaw: Me.target.value });
              }
            }), Z(ye), D(le, ye);
          };
          pe(ie, (le) => {
            n().bodyType === "raw" && le(Q);
          });
        }
        var Ee = q(ie, 2), F = Y(Ee);
        Ge(F, {
          level: 3,
          mt: "10px",
          children: (le, ye) => {
            Oe();
            var $e = Be("输出参数");
            D(le, $e);
          },
          $$slots: { default: !0 }
        });
        var Le = q(F, 2);
        Fe(Le, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, ye) => {
            var $e = vw();
            D(le, $e);
          },
          $$slots: { default: !0 }
        }), Z(Ee);
        var Ye = q(Ee, 2);
        In(Ye, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
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
  de(t, !0), Qe(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Jn();
  let s = /* @__PURE__ */ kt(an([]));
  Jt(async () => {
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
  }), hn(e, lt(
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
        var d = yw(), v = we(d), g = Y(v);
        Ge(g, {
          level: 3,
          children: (O, I) => {
            Oe();
            var M = Be("输入参数");
            D(O, M);
          },
          $$slots: { default: !0 }
        });
        var p = q(g, 2);
        Fe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, I) => {
            var M = mw();
            D(O, M);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = q(v, 2);
        qt(x, {});
        var b = q(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (O, I) => {
            Oe();
            var M = Be("知识库设置");
            D(O, M);
          },
          $$slots: { default: !0 }
        });
        var $ = q(b, 4), h = Y($);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        Qt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (O) => {
            const I = O.value;
            l(o, () => ({ knowledgeId: I }));
          },
          get value() {
            return f(C);
          }
        }), Z($);
        var w = q($, 4), k = Y(w);
        pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (O) => {
            const I = O.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), Z(w);
        var P = q(w, 4), S = Y(P);
        const z = /* @__PURE__ */ Pe(() => n().limit || "");
        pt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (O) => {
            const I = O.target.value;
            l(o, () => ({ limit: I }));
          },
          get value() {
            return f(z);
          }
        }), Z(P);
        var H = q(P, 2), L = Y(H);
        Ge(L, {
          level: 3,
          mt: "10px",
          children: (O, I) => {
            Oe();
            var M = Be("输出参数");
            D(O, M);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var R = q(H, 2);
        In(R, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
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
  de(t, !0), Qe(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = Jn();
  let s = /* @__PURE__ */ kt(an([]));
  Jt(async () => {
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
  }), hn(e, lt(
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
        var d = $w(), v = we(d), g = Y(v);
        Ge(g, {
          level: 3,
          children: (R, O) => {
            Oe();
            var I = Be("输入参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var p = q(g, 2);
        Fe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, O) => {
            var I = xw();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = q(v, 2);
        qt(x, {});
        var b = q(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (R, O) => {
            Oe();
            var I = Be("搜索引擎设置");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var $ = q(b, 4), h = Y($);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        Qt(h, {
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
        }), Z($);
        var w = q($, 4), k = Y(w);
        pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const O = R.target.value;
            l(o, () => ({ keyword: O }));
          }
        }), Z(w);
        var P = q(w, 4), S = Y(P);
        pt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const O = R.target.value;
            l(o, () => ({ limit: O }));
          }
        }), Z(P);
        var z = q(P, 2), H = Y(z);
        Ge(H, {
          level: 3,
          mt: "10px",
          children: (R, O) => {
            Oe();
            var I = Be("输出参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Z(z);
        var L = q(z, 2);
        In(L, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
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
function jd(e, t) {
  de(t, !0), Qe(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return hn(e, lt(
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
            return Ne.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Sw(), u = we(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (b, $) => {
            Oe();
            var h = Be("循环变量");
            D(b, h);
          },
          $$slots: { default: !0 }
        });
        var d = q(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (b, $) => {
            var h = kw();
            D(b, h);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = q(u, 2);
        qt(v, {});
        var g = q(v, 2), p = Y(g);
        Ge(p, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            Oe();
            var h = Be("输出参数");
            D(b, h);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = q(g, 2);
        In(x, {}), D(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(jd, { data: {} }, [], [], !0);
const Ew = {
  startNode: Od,
  codeNode: qd,
  llmNode: Rd,
  templateNode: Zd,
  httpNode: Bd,
  knowledgeNode: Xd,
  searchEngineNode: Yd,
  loopNode: jd,
  endNode: Ad
};
var Pw = /* @__PURE__ */ re("<!> ", 1);
function Xa(e, t) {
  de(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
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
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Pw(), c = we(u);
      ls(c, n);
      var d = q(c);
      Se(() => dt(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
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
var Vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Hw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
  de(t, !0);
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
  ], a = [], s = Jn().customNodes;
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
  var l = Hw(), u = Y(l), c = Y(u), d = Y(c);
  yd(d, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      J(n, b.value.toString(), !0);
    }
  }), Z(c);
  var v = q(c, 2), g = Y(v);
  Et(g, 21, () => o, zr, (b, $) => {
    Xa(b, lt(() => f($)));
  }), Z(g);
  var p = q(g, 2);
  Et(p, 21, () => a, zr, (b, $) => {
    Xa(b, lt(() => f($)));
  }), Z(p), Z(v), Z(u);
  var x = q(u, 2);
  Fe(x, {
    onclick: () => {
      J(r, f(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var h = Ue(), C = we(h);
      {
        var w = (P) => {
          var S = Vw();
          D(P, S);
        }, k = (P) => {
          var S = Nw();
          D(P, S);
        };
        pe(C, (P) => {
          f(r) === "show" ? P(w) : P(k, !1);
        });
      }
      D(b, h);
    },
    $$slots: { default: !0 }
  }), Z(l), Se(() => {
    xt(l, 1, `tf-toolbar ${f(r) ?? ""}`), ft(g, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(p, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), D(e, l), fe();
}
ue(Kd, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = We();
  return {
    getNode: (t) => {
      var n;
      return (n = W(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, zw = () => {
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
}, Ow = () => {
  const { edges: e } = We();
  return {
    getEdgesByTarget: (t) => W(e).filter((n) => n.target === t)
  };
};
var Lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Iw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), qw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Zw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Xw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Yw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Wd(e, t) {
  var n;
  de(t, !0), Qe(e, Yw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ $t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = En(), s = Lt(), { updateNodeData: l } = s, u = { ...o, id: i, data: r() }, c = document.createElement("div"), d = Jn().customNodes[t.type];
  (n = d.render) == null || n.call(d, c, u, s);
  const v = d.forms;
  let g;
  ln(() => {
    r().expand && g && g.append(c);
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
        var b = Ue(), $ = we(b);
        ls($, () => d.icon), D(x, b);
      },
      children: (x, b) => {
        var $ = Xw(), h = we($);
        {
          var C = (H) => {
            var L = Dw(), R = we(L), O = Y(R);
            Ge(O, {
              level: 3,
              children: (E, T) => {
                Oe();
                var V = Be("输入参数");
                D(E, V);
              },
              $$slots: { default: !0 }
            });
            var I = q(O, 2);
            {
              var M = (E) => {
                Fe(E, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (T, V) => {
                    var N = Lw();
                    D(T, N);
                  },
                  $$slots: { default: !0 }
                });
              };
              pe(I, (E) => {
                d.parametersAddEnable !== !1 && E(M);
              });
            }
            Z(R);
            var _ = q(R, 2);
            qt(_, {}), D(H, L);
          };
          pe(h, (H) => {
            d.parametersEnable !== !1 && H(C);
          });
        }
        var w = q(h, 2);
        {
          var k = (H) => {
            var L = Ue(), R = we(L);
            Et(R, 17, () => v, zr, (O, I) => {
              var M = Ue(), _ = we(M);
              {
                var E = (V) => {
                  var N = Aw(), A = we(N), B = Y(A, !0);
                  Z(A);
                  var j = q(A, 2), G = Y(j);
                  const U = /* @__PURE__ */ Pe(() => r()[f(I).name] || f(I).defaultValue);
                  pt(G, lt(
                    {
                      get placeholder() {
                        return f(I).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(U);
                      }
                    },
                    () => f(I).attrs,
                    {
                      onchange: (K) => {
                        l(i, { [f(I).name]: K.target.value });
                      }
                    }
                  )), Z(j), Se(() => dt(B, f(I).label)), D(V, N);
                }, T = (V, N) => {
                  {
                    var A = (j) => {
                      var G = Iw(), U = we(G), K = Y(U, !0);
                      Z(U);
                      var ce = q(U, 2), se = Y(ce);
                      const me = /* @__PURE__ */ Pe(() => r()[f(I).name] || f(I).defaultValue);
                      mt(se, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(I).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(me);
                          }
                        },
                        () => f(I).attrs,
                        {
                          onchange: (ae) => {
                            l(i, { [f(I).name]: ae.target.value });
                          }
                        }
                      )), Z(ce), Se(() => dt(K, f(I).label)), D(j, G);
                    }, B = (j, G) => {
                      {
                        var U = (ce) => {
                          var se = Rw(), me = we(se), ae = Y(me, !0);
                          Z(me);
                          var _e = q(me, 2), he = Y(_e), Ve = Y(he), ie = Y(Ve);
                          Z(Ve);
                          var Q = q(Ve, 2);
                          ar(Q);
                          var Ee = (Le) => l(i, {
                            [f(I).name]: parseFloat(Le.target.value)
                          });
                          let F;
                          Z(he), Z(_e), Se(() => {
                            dt(ae, f(I).label), dt(ie, `${f(I).description ?? ""}: ${r()[f(I).name] ?? f(I).defaultValue ?? ""}`), F = Ut(
                              Q,
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
                        }, K = (ce, se) => {
                          {
                            var me = (_e) => {
                              var he = qw(), Ve = we(he), ie = Y(Ve, !0);
                              Z(Ve);
                              var Q = q(Ve, 2), Ee = Y(Q);
                              const F = /* @__PURE__ */ Pe(() => f(I).options || []), Le = /* @__PURE__ */ Pe(() => r()[f(I).name] ? [r()[f(I).name]] : [f(I).defaultValue]);
                              Qt(Ee, {
                                get items() {
                                  return f(F);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(I).placeholder;
                                },
                                onSelect: (Ye) => {
                                  const le = Ye.value;
                                  l(i, () => ({ [f(I).name]: le }));
                                },
                                get value() {
                                  return f(Le);
                                }
                              }), Z(Q), Se(() => dt(ie, f(I).label)), D(_e, he);
                            }, ae = (_e, he) => {
                              {
                                var Ve = (ie) => {
                                  Ge(ie, lt({ level: 3, mt: "10px" }, () => f(I).attrs, {
                                    children: (Q, Ee) => {
                                      Oe();
                                      var F = Be();
                                      Se(() => dt(F, f(I).label)), D(Q, F);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                pe(
                                  _e,
                                  (ie) => {
                                    f(I).type === "heading" && ie(Ve);
                                  },
                                  he
                                );
                              }
                            };
                            pe(
                              ce,
                              (_e) => {
                                f(I).type === "select" ? _e(me) : _e(ae, !1);
                              },
                              se
                            );
                          }
                        };
                        pe(
                          j,
                          (ce) => {
                            f(I).type === "slider" ? ce(U) : ce(K, !1);
                          },
                          G
                        );
                      }
                    };
                    pe(
                      V,
                      (j) => {
                        f(I).type === "textarea" ? j(A) : j(B, !1);
                      },
                      N
                    );
                  }
                };
                pe(_, (V) => {
                  f(I).type === "input" ? V(E) : V(T, !1);
                });
              }
              D(O, M);
            }), D(H, L);
          };
          pe(w, (H) => {
            v && H(k);
          });
        }
        var P = q(w, 2);
        _n(P, (H) => g = H, () => g);
        var S = q(P, 2);
        {
          var z = (H) => {
            var L = Bw(), R = we(L), O = Y(R);
            Ge(O, {
              level: 3,
              mt: "10px",
              children: (E, T) => {
                Oe();
                var V = Be("输出参数");
                D(E, V);
              },
              $$slots: { default: !0 }
            });
            var I = q(O, 2);
            {
              var M = (E) => {
                Fe(E, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (T, V) => {
                    var N = Zw();
                    D(T, N);
                  },
                  $$slots: { default: !0 }
                });
              };
              pe(I, (E) => {
                d.outputDefsAddEnable !== !1 && E(M);
              });
            }
            Z(R);
            var _ = q(R, 2);
            In(_, {}), D(H, L);
          };
          pe(S, (H) => {
            d.outputDefsEnable !== !1 && H(z);
          });
        }
        Se(() => {
          ft(P, d.rootStyle || ""), xt(P, 1, vn(d.rootClass), "svelte-q0cqsa");
        }), D(x, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return r();
    },
    set data(x) {
      r(x), m();
    }
  });
}
ue(Wd, { data: {} }, [], [], !0);
const jw = () => {
  const e = We();
  return {
    updateEdgeData: (t, n, r) => {
      const o = W(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
};
var Kw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Ww = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Fw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Gw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Fd(e, t) {
  de(t, !0), Qe(e, Gw);
  const [n, r] = nt(), o = () => te(z, "$nodes", n), i = () => te(H, "$edges", n), a = () => te(L, "$viewport", n), s = y(t, "onInit", 7), l = Lt();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = jw(), v = (V) => {
    V.preventDefault(), V.dataTransfer && (V.dataTransfer.dropEffect = "move");
  }, g = (V) => {
    var N;
    V.preventDefault();
    const A = l.screenToFlowPosition({
      x: V.clientX - 250,
      y: V.clientY - 100
    }), B = (N = V.dataTransfer) == null ? void 0 : N.getData("application/tinyflow"), j = B ? JSON.parse(B) : {}, G = {
      id: `node_${Zr()}`,
      position: A,
      data: {},
      ...j
    };
    ri.addNode(G), ri.selectNodeOnly(G.id);
  }, { getNode: p } = Tw(), x = (V) => {
    const N = p(V.source), A = p(V.target);
    if (V.sourceHandle === "loop_handle" || N.parentId) {
      const B = l.getEdges();
      for (let j of B)
        if (j.target === V.target) {
          const G = p(j.source);
          if (V.sourceHandle === "loop_handle" && G.parentId !== N.id || N.parentId && G.parentId !== N.parentId)
            return !1;
        }
    }
    return !(!N.parentId && A.parentId && A.parentId !== N.id);
  }, { ensureParentInNodesBefore: b } = zw(), $ = (V, N) => {
    if (!N.isValid)
      return;
    const A = N.toNode;
    if (A.parentId)
      return;
    const B = N.fromNode, j = N.fromHandle, G = { position: { ...A.position } };
    if (j.id === "loop_handle" ? G.parentId = B.id : B.parentId && (G.parentId = B.parentId), G.parentId) {
      const U = p(G.parentId);
      G.position = {
        x: A.position.x - U.position.x,
        y: A.position.y - U.position.y
      }, b(G.parentId, A.id), l.updateNode(A.id, G);
    }
  }, { getEdgesByTarget: h } = Ow(), C = (V) => {
    V.edges.forEach((N) => {
      const A = p(N.target);
      if (A && A.parentId) {
        const B = h(N.target), j = p(A.parentId);
        if (B.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + j.position.x,
              y: A.position.y + j.position.y
            }
          });
        else {
          let G = !1;
          for (let U = 0; U < B.length; U++) {
            const K = B[U], ce = p(K.source);
            if (ce.parentId || ce.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + j.position.x,
              y: A.position.y + j.position.y
            }
          });
        }
      }
    });
  }, w = (V, N) => {
  }, k = (V) => {
  }, P = {}, S = Jn().customNodes;
  if (S)
    for (let V of Object.keys(S))
      P[V] = Wd;
  const { nodes: z, edges: H, viewport: L } = We(), R = Jn().onDataChange;
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
  var O = Fw(), I = Y(O);
  const M = /* @__PURE__ */ Pe(() => ({ ...Ew, ...P })), _ = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(I, lt(
    {
      get nodeTypes() {
        return f(M);
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
        const N = V.target;
        N.classList.contains("svelte-flow__edge-interaction") || N.classList.contains("panel-content") || N.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return f(_);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (V) => {
          J(u, !0), J(c, V.detail.edge, !0);
        }
      },
      children: (V, N) => {
        var A = Ww(), B = we(A);
        vd(B, {});
        var j = q(B, 2);
        cd(j, {});
        var G = q(j, 2);
        hd(G, {});
        var U = q(G, 2);
        {
          var K = (ce) => {
            Lo(ce, {
              children: (se, me) => {
                var ae = Kw(), _e = q(Y(ae), 4), he = Y(_e);
                const Ve = /* @__PURE__ */ Pe(() => {
                  var ie, Q;
                  return (Q = (ie = f(c)) == null ? void 0 : ie.data) == null ? void 0 : Q.condition;
                });
                mt(he, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(Ve);
                  },
                  onchange: (ie) => {
                    f(c) && d(f(c).id, { condition: ie.target.value });
                  }
                }), Z(_e), Z(ae), D(se, ae);
              },
              $$slots: { default: !0 }
            });
          };
          pe(U, (ce) => {
            f(u) && ce(K);
          });
        }
        D(V, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var E = q(I, 2);
  Kd(E, {}), Z(O), D(e, O);
  var T = fe({
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
  de(t, !0);
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
  }), fe({
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
  ob as Tinyflow
};
//# sourceMappingURL=index.js.map
