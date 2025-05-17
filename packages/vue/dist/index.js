import { defineComponent as f1, ref as v1, onMounted as g1, onUnmounted as p1, createElementBlock as h1, openBlock as m1, normalizeStyle as y1, normalizeClass as w1 } from "vue";
var x1 = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, b1 = (e, t, n) => t in e ? x1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tt = (e, t, n) => b1(e, typeof t != "symbol" ? t + "" : t, n), Ka = (e, t, n) => t.has(e) || Wl("Cannot " + n), ut = (e, t, n) => (Ka(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cr = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ii = (e, t, n, r) => (Ka(e, t, "write to private field"), t.set(e, n), n), $1 = (e, t, n) => (Ka(e, t, "access private method"), n);
const C1 = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(C1);
let Rr = !1, _1 = !1;
function k1() {
  Rr = !0;
}
k1();
const Wa = 1, Xa = 2, Xl = 4, E1 = 8, S1 = 16, M1 = 1, V1 = 2, jl = 4, P1 = 8, H1 = 16, Fl = 1, N1 = 2, ja = "[", Fa = "[!", Ga = "]", kr = {}, Ht = Symbol(), T1 = "http://www.w3.org/1999/xhtml", O1 = "http://www.w3.org/2000/svg", z1 = !1;
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var So = Array.isArray, L1 = Array.prototype.indexOf, Ua = Array.from, ai = Object.keys, co = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, D1 = Object.prototype, A1 = Array.prototype, Ja = Object.getPrototypeOf, As = Object.isExtensible;
function eo(e) {
  return typeof e == "function";
}
const pt = () => {
};
function I1(e) {
  return e();
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, Ul = 4, zi = 8, Qa = 16, Dn = 32, hr = 64, si = 128, Zt = 256, li = 512, St = 1024, xn = 2048, er = 4096, Tn = 8192, Li = 16384, B1 = 32768, Yr = 65536, q1 = 1 << 17, Z1 = 1 << 19, Jl = 1 << 20, wa = 1 << 21, Yn = Symbol("$state"), es = Symbol("legacy props"), R1 = Symbol("");
function Y1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function K1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function W1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function X1() {
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
let Le = !1;
function qt(e) {
  Le = e;
}
let qe;
function Et(e) {
  if (e === null)
    throw Di(), kr;
  return qe = e;
}
function bn() {
  return Et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(qe)
  );
}
function Z(e) {
  if (Le) {
    if (/* @__PURE__ */ En(qe) !== null)
      throw Di(), kr;
    qe = e;
  }
}
function Te(e = 1) {
  if (Le) {
    for (var t = e, n = qe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    qe = n;
  }
}
function xa() {
  for (var e = 0, t = qe; ; ) {
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
      /* @__PURE__ */ En(t)
    );
    t.remove(), t = r;
  }
}
function sn(e) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const t = Ja(e);
  if (t !== D1 && t !== A1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = So(e), o = /* @__PURE__ */ kt(0), i = Qe, a = (s) => {
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
        return c === void 0 ? (c = a(() => /* @__PURE__ */ kt(u.value)), n.set(l, c)) : U(
          c,
          a(() => sn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ kt(Ht))
          ), ia(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && U(c, d);
          }
          U(u, Ht), ia(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Yn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Nn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ kt(sn(v ? s[l] : Ht))), n.set(l, d)), d !== void 0) {
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
        if (c !== void 0 || Fe !== null && (!d || (u = Nn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ kt(d ? sn(s[l]) : Ht)), n.set(l, c));
          var v = f(c);
          if (v === Ht)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var b = n.get(h + "");
            b !== void 0 ? U(b, Ht) : h in s && (b = a(() => /* @__PURE__ */ kt(Ht)), n.set(h + "", b));
          }
        v === void 0 ? (!g || (d = Nn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ kt(void 0)), U(
          v,
          a(() => sn(u))
        ), n.set(l, v)) : (g = v.v !== Ht, U(
          v,
          a(() => sn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p >= $.v && U($, p + 1);
          }
          ia(o);
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
        U1();
      }
    }
  );
}
function ia(e, t = 1) {
  U(e, e.v + t);
}
var Nt, Ql, eu, tu;
function ba() {
  if (Nt === void 0) {
    Nt = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    eu = Nn(t, "firstChild").get, tu = Nn(t, "nextSibling").get, As(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), As(n) && (n.__t = void 0);
  }
}
function zn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return eu.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return tu.call(e);
}
function Y(e, t) {
  if (!Le)
    return /* @__PURE__ */ gt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ gt(qe)
  );
  if (n === null)
    n = qe.appendChild(zn());
  else if (t && n.nodeType !== 3) {
    var r = zn();
    return n == null || n.before(r), Et(r), r;
  }
  return Et(n), n;
}
function xe(e, t) {
  if (!Le) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return qe;
}
function B(e, t = 1, n = !1) {
  let r = Le ? qe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!Le)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = zn();
    return r === null ? o == null || o.after(a) : r.before(a), Et(a), a;
  }
  return Et(r), /** @type {TemplateNode} */
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
  var t = un | xn, n = Qe !== null && (Qe.f & un) !== 0 ? (
    /** @type {Derived} */
    Qe
  ) : null;
  return Fe === null || n !== null && (n.f & Zt) !== 0 ? t |= Zt : Fe.f |= Jl, {
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
    parent: n ?? Fe
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Hr(e);
  return pu(t), t;
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
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
  var t, n = Fe;
  Gn(Q1(e));
  try {
    ru(e), t = wu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function iu(e) {
  var t = ou(e), n = (Zn || (e.f & Zt) !== 0) && e.deps !== null ? er : St;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = mu());
}
function au(e) {
  Fe === null && Qe === null && W1(), Qe !== null && (Qe.f & Zt) !== 0 && Fe === null && K1(), Vo && Y1();
}
function ef(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mr(e, t, n, r = !0) {
  var o = Fe, i = {
    ctx: je,
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
      Ii(i), i.f |= B1;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && Bi(i);
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
  const t = mr(zi, null, !1);
  return Jt(t, St), t.teardown = e, t;
}
function Gt(e) {
  au();
  var t = Fe !== null && (Fe.f & Dn) !== 0 && je !== null && !je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Fe,
      reaction: Qe
    });
  } else {
    var r = Bt(e);
    return r;
  }
}
function tf(e) {
  return au(), Kr(e);
}
function nf(e) {
  const t = mr(hr, e, !0);
  return () => {
    cn(t);
  };
}
function rf(e) {
  const t = mr(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function Bt(e) {
  return mr(Ul, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), Cn(t));
  });
}
function yt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    je
  );
  Kr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & St) !== 0 && Jt(n, er), Xr(n) && Ii(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return mr(zi, e, !0);
}
function ke(e, t = [], n = Hr) {
  const r = t.map(n);
  return Wr(() => e(...r.map(f)));
}
function Wr(e, t = 0) {
  return mr(zi | Qa | t, e, !0);
}
function Fn(e, t = !0) {
  return mr(zi | Dn, e, !0, t);
}
function su(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vo, r = Qe;
    Bs(!0), $n(null);
    try {
      t.call(null);
    } finally {
      Bs(n), $n(r);
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
function of(e) {
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
  ), n = !0), lu(e, t && !n), fi(e, 0), Jt(e, Li);
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
      /* @__PURE__ */ En(e)
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
      var o = r.next, i = (r.f & Yr) !== 0 || (r.f & Dn) !== 0;
      is(r, t, i ? n : !1), r = o;
    }
  }
}
function vo(e) {
  fu(e, !0);
}
function fu(e, t) {
  if ((e.f & Tn) !== 0) {
    e.f ^= Tn, (e.f & St) === 0 && (e.f ^= St), Xr(e) && (Jt(e, xn), Bi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Yr) !== 0 || (n.f & Dn) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const af = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
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
function sf(e) {
  po.length === 0 && af(gu), po.push(e);
}
function Is() {
  go.length > 0 && vu(), po.length > 0 && gu();
}
let Go = !1, ui = !1, ci = null, ar = !1, Vo = !1;
function Bs(e) {
  Vo = e;
}
let lo = [], Qe = null, mn = !1;
function $n(e) {
  Qe = e;
}
let Fe = null;
function Gn(e) {
  Fe = e;
}
let Ut = null;
function pu(e) {
  Qe !== null && Qe.f & wa && (Ut === null ? Ut = [e] : Ut.push(e));
}
let _t = null, It = 0, jt = null;
function lf(e) {
  jt = e;
}
let hu = 1, di = 0, Zn = !1;
function mu() {
  return ++hu;
}
function Xr(e) {
  var t, n = e.f;
  if ((n & xn) !== 0)
    return !0;
  if ((n & er) !== 0) {
    var r = e.deps, o = (n & Zt) !== 0;
    if (r !== null) {
      var i, a, s = (n & li) !== 0, l = o && Fe !== null && !Zn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= li), l && d !== null && (d.f & Zt) === 0 && (c.f ^= Zt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Xr(
          /** @type {Derived} */
          a
        ) && iu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || Fe !== null && !Zn) && Jt(e, St);
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
function qs(e) {
  return (e.f & Li) === 0 && (e.parent === null || (e.parent.f & si) === 0);
}
function Ai(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), qs(t))
      throw e;
    return;
  }
  if (n !== null && (Go = !0), uf(e, t), qs(t))
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
      ) : t === i && (n ? Jt(i, xn) : (i.f & St) !== 0 && Jt(i, er), Bi(
        /** @type {Effect} */
        i
      )));
    }
}
function wu(e) {
  var t, n = _t, r = It, o = jt, i = Qe, a = Zn, s = Ut, l = je, u = mn, c = e.f;
  _t = /** @type {null | Value[]} */
  null, It = 0, jt = null, Zn = (c & Zt) !== 0 && (mn || !ar || Qe === null), Qe = (c & (Dn | hr)) === 0 ? e : null, Ut = null, Rs(e.ctx), mn = !1, di++, e.f |= wa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (_t !== null) {
      var g;
      if (fi(e, It), v !== null && It > 0)
        for (v.length = It + _t.length, g = 0; g < _t.length; g++)
          v[It + g] = _t[g];
      else
        e.deps = v = _t;
      if (!Zn)
        for (g = It; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && It < v.length && (fi(e, It), v.length = It);
    if (qi() && jt !== null && !mn && v !== null && (e.f & (un | er | xn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      jt.length; g++)
        yu(
          jt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (di++, jt !== null && (o === null ? o = jt : o.push(.../** @type {Source[]} */
    jt))), d;
  } finally {
    _t = n, It = r, jt = o, Qe = i, Zn = a, Ut = s, Rs(l), mn = u, e.f ^= wa;
  }
}
function cf(e, t) {
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
  (_t === null || !_t.includes(t)) && (Jt(t, er), (t.f & (Zt | li)) === 0 && (t.f ^= li), ru(
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
  if ((t & Li) === 0) {
    Jt(e, St);
    var n = Fe, r = je, o = ar;
    Fe = e, ar = !0;
    try {
      (t & Qa) !== 0 ? of(e) : lu(e), su(e);
      var i = wu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      z1 && _1 && e.f & xn;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      ar = o, Fe = n;
    }
  }
}
function df() {
  try {
    X1();
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
      if ((r.f & (Li | Tn)) === 0)
        try {
          Xr(r) && (Ii(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Ai(o, r, null, r.ctx);
        }
    }
}
function Bi(e) {
  ui || (ui = !0, queueMicrotask(xu));
  for (var t = ci = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | Dn)) !== 0) {
      if ((n & St) === 0) return;
      t.f ^= St;
    }
  }
  lo.push(t);
}
function vf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | hr)) !== 0, i = o && (r & St) !== 0;
    if (!i && (r & Tn) === 0) {
      if ((r & Ul) !== 0)
        t.push(n);
      else if (o)
        n.f ^= St;
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
function f(e) {
  var t = e.f, n = (t & un) !== 0;
  if (Qe !== null && !mn) {
    if (!(Ut != null && Ut.includes(e))) {
      var r = Qe.deps;
      e.rv < di && (e.rv = di, _t === null && r !== null && r[It] === e ? It++ : _t === null ? _t = [e] : (!Zn || !_t.includes(e)) && _t.push(e));
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
  e, Xr(o) && iu(o)), Vo && ho.has(e) ? ho.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const gf = -7169;
function Jt(e, t) {
  e.f = e.f & gf | t;
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
function Tr(e, t) {
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
  const n = Tr(e);
  return pu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var n;
  const r = Tr(e);
  return t || (r.equals = rs), Rr && je !== null && je.l !== null && ((n = je.l).s ?? (n.s = [])).push(r), r;
}
function U(e, t, n = !1) {
  Qe !== null && !mn && qi() && (Qe.f & (un | Qa)) !== 0 && !(Ut != null && Ut.includes(e)) && J1();
  let r = n ? sn(t) : t;
  return Ca(e, r);
}
function Ca(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? ho.set(e, t) : ho.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & xn) !== 0 && ou(
      /** @type {Derived} */
      e
    ), Jt(e, (e.f & Zt) === 0 ? St : er)), e.wv = mu(), bu(e, xn), qi() && Fe !== null && (Fe.f & St) !== 0 && (Fe.f & (Dn | hr)) === 0 && (jt === null ? lf([e]) : jt.push(e));
  }
  return t;
}
function Zs(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function bu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = qi(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & xn) === 0 && (!r && a === Fe || (Jt(a, t), (s & (St | Zt)) !== 0 && ((s & un) !== 0 ? bu(
        /** @type {Derived} */
        a,
        er
      ) : Bi(
        /** @type {Effect} */
        a
      ))));
    }
}
let je = null;
function Rs(e) {
  je = e;
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
function pf(e) {
  return as().has(e);
}
function ve(e, t = !1, n) {
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
  Rr && !t && (je.l = {
    s: null,
    u: null,
    r1: [],
    r2: Tr(!1)
  }), os(() => {
    r.d = !0;
  });
}
function ge(e) {
  const t = je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = Fe, r = Qe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Gn(i.effect), $n(i.reaction), Bt(i.fn);
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
function qi() {
  return !Rr || je !== null && je.l === null;
}
function as(e) {
  return je === null && Oi(), je.c ?? (je.c = new Map(hf(je) || void 0));
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
function bf(e) {
  return e = e.toLowerCase(), xf[e] ?? e;
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
function Ef(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Mo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sf(e) {
  Le && /* @__PURE__ */ gt(e) !== null && ts(e);
}
let Ys = !1;
function Mf() {
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
function Vf(e) {
  var t = Qe, n = Fe;
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
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function tt(e, t, n, r, o) {
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
    var d = Qe, v = Fe;
    $n(null), Gn(null);
    try {
      for (var g, h = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (So(x)) {
              var [$, ...p] = x;
              $.apply(a, [e, ...p]);
            } else
              x.call(a, e);
        } catch (C) {
          g ? h.push(C) : g = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (g) {
        for (let C of h)
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
    Fe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Fl) !== 0, r = (t & N1) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Le)
      return Lt(qe, null), qe;
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
function Me(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Fl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Le)
      return Lt(qe, null), qe;
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
function Ae(e = "") {
  if (!Le) {
    var t = zn(e + "");
    return Lt(t, t), t;
  }
  var n = qe;
  return n.nodeType !== 3 && (n.before(n = zn()), Et(n)), Lt(n, n), n;
}
function Je() {
  if (Le)
    return Lt(qe, null), qe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = zn();
  return e.append(t, n), Lt(t, n), e;
}
function L(e, t) {
  if (Le) {
    Fe.nodes_end = qe, bn();
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
function Pf(e, t) {
  ba(), t.intro = t.intro ?? !1;
  const n = t.target, r = Le, o = qe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ja); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw kr;
    qt(!0), Et(
      /** @type {Comment} */
      i
    ), bn();
    const a = ku(e, { ...t, anchor: i });
    if (qe === null || qe.nodeType !== 8 || /** @type {Comment} */
    qe.data !== Ga)
      throw Di(), kr;
    return qt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === kr)
      return t.recover === !1 && j1(), ba(), ts(n), qt(!1), _u(e, t);
    throw a;
  } finally {
    qt(r), Et(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ba();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var h = Cf(g);
        t.addEventListener(g, oo, { passive: h });
        var b = xr.get(g);
        b === void 0 ? (document.addEventListener(g, oo, { passive: h }), xr.set(g, 1)) : xr.set(g, b + 1);
      }
    }
  };
  l(Ua($u)), _a.add(l);
  var u = void 0, c = rf(() => {
    var d = n ?? t.appendChild(zn());
    return Fn(() => {
      if (i) {
        ve({});
        var v = (
          /** @type {ComponentContext} */
          je
        );
        v.c = i;
      }
      o && (r.$$events = o), Le && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Le && (Fe.nodes_end = qe), i && ge();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, oo);
        var h = (
          /** @type {number} */
          xr.get(g)
        );
        --h === 0 ? (document.removeEventListener(g, oo), xr.delete(g)) : xr.set(g, h);
      }
      _a.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
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
  Le && n === 0 && bn();
  var o = e, i = null, a = null, s = Ht, l = n > 0 ? Yr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let h = !1;
    if (Le && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ja ? r = 0 : x === Fa ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = xa(), Et(o), qt(!1), h = !0, r = -1);
    }
    s ? (i ? vo(i) : g && (i = Fn(() => g(o))), a && Nr(a, () => {
      a = null;
    })) : (a ? vo(a) : g && (a = Fn(() => g(o, [n + 1, r]))), i && Nr(i, () => {
      i = null;
    })), h && qt(!0);
  };
  Wr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Le && (o = qe);
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
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), cn(c.e, !s);
    }
  });
}
function Mt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Xl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Le ? Et(
      /** @type {Comment | Text} */
      /* @__PURE__ */ gt(u)
    ) : u.appendChild(zn());
  }
  Le && bn();
  var c = null, d = !1, v = /* @__PURE__ */ $e(() => {
    var g = n();
    return So(g) ? g : g == null ? [] : Ua(g);
  });
  Wr(() => {
    var g = f(v), h = g.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let b = !1;
    if (Le) {
      var x = (
        /** @type {Comment} */
        a.data === Fa
      );
      x !== (h === 0) && (a = xa(), Et(a), qt(!1), b = !0);
    }
    if (Le) {
      for (var $ = null, p, C = 0; C < h; C++) {
        if (qe.nodeType === 8 && /** @type {Comment} */
        qe.data === Ga) {
          a = /** @type {Comment} */
          qe, b = !0, qt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        p = Eu(
          qe,
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
      h > 0 && Et(xa());
    }
    Le || Tf(g, s, a, o, t, r, n), i !== null && (h === 0 ? c ? vo(c) : c = Fn(() => i(a)) : c !== null && Nr(c, () => {
      c = null;
    })), b && qt(!0), f(v);
  }), Le && (a = qe);
}
function Tf(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & E1) !== 0, v = (o & (Wa | Xa)) !== 0, g = e.length, h = t.items, b = t.first, x = b, $, p = null, C, w = [], k = [], V, E, T, O;
  if (d)
    for (O = 0; O < g; O += 1)
      V = e[O], E = i(V, O), T = h.get(E), T !== void 0 && ((s = T.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(T));
  for (O = 0; O < g; O += 1) {
    if (V = e[O], E = i(V, O), T = h.get(E), T === void 0) {
      var D = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      p = Eu(
        D,
        t,
        p,
        p === null ? t.first : p.next,
        V,
        E,
        O,
        r,
        o,
        a
      ), h.set(E, p), w = [], k = [], x = p.next;
      continue;
    }
    if (v && Of(T, V, O, o), (T.e.f & Tn) !== 0 && (vo(T.e), d && ((l = T.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(T))), T !== x) {
      if ($ !== void 0 && $.has(T)) {
        if (w.length < k.length) {
          var I = k[0], z;
          p = I.prev;
          var q = w[0], M = w[w.length - 1];
          for (z = 0; z < w.length; z += 1)
            Ks(w[z], I, n);
          for (z = 0; z < k.length; z += 1)
            $.delete(k[z]);
          Bn(t, q.prev, M.next), Bn(t, p, q), Bn(t, M, I), x = I, p = M, O -= 1, w = [], k = [];
        } else
          $.delete(T), Ks(T, x, n), Bn(t, T.prev, T.next), Bn(t, T, p === null ? t.first : p.next), Bn(t, p, T), p = T;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== E; )
        (x.e.f & Tn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      T = x;
    }
    w.push(T), p = T, x = T.next;
  }
  if (x !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : Ua($); x !== null; )
      (x.e.f & Tn) === 0 && _.push(x), x = x.next;
    var S = _.length;
    if (S > 0) {
      var N = (o & Xl) !== 0 && g === 0 ? n : null;
      if (d) {
        for (O = 0; O < S; O += 1)
          (u = _[O].a) == null || u.measure();
        for (O = 0; O < S; O += 1)
          (c = _[O].a) == null || c.fix();
      }
      Nf(t, _, N, h);
    }
  }
  d && Mo(() => {
    var H;
    if (C !== void 0)
      for (T of C)
        (H = T.a) == null || H.apply();
  }), Fe.first = t.first && t.first.e, Fe.last = p && p.e;
}
function Of(e, t, n, r) {
  (r & Wa) !== 0 && Ca(e.v, t), (r & Xa) !== 0 ? Ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Eu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Wa) !== 0, d = (l & S1) === 0, v = c ? d ? /* @__PURE__ */ ie(o) : Tr(o) : o, g = (l & Xa) === 0 ? a : Tr(a), h = {
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
    return h.e = Fn(() => s(e, v, g, u), Le), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
      /* @__PURE__ */ En(i)
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
      Fe
    );
    if (a === (a = t() ?? "")) {
      Le && bn();
      return;
    }
    if (s.nodes_start !== null && (uu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (Le) {
        qe.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw Di(), kr;
        Lt(qe, u), i = Et(l);
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
function bt(e, t, n, r, o) {
  var i;
  Le && bn();
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
  Wr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Yr), Le && (r = qe);
}
function Su(e, t, n) {
  Le && bn();
  var r = e, o, i;
  Wr(() => {
    o !== (o = t()) && (i && (Nr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, Yr), Le && (r = qe);
}
function Lf(e, t, n, r, o, i) {
  let a = Le;
  Le && bn();
  var s, l, u = null;
  Le && qe.nodeType === 1 && (u = /** @type {Element} */
  qe, bn());
  var c = (
    /** @type {TemplateNode} */
    Le ? qe : e
  ), d;
  Wr(() => {
    const v = t() || null;
    var g = v === "svg" ? O1 : null;
    v !== s && (d && (v === null ? Nr(d, () => {
      d = null, l = null;
    }) : v === l ? vo(d) : cn(d)), v && v !== l && (d = Fn(() => {
      if (u = Le ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Lt(u, u), r) {
        Le && kf(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Le ? /* @__PURE__ */ gt(u) : u.appendChild(zn())
        );
        Le && (h === null ? qt(!1) : Et(h)), r(u, h);
      }
      Fe.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Yr), a && (qt(!0), Et(c));
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
function xt(e, t, n) {
  Bt(() => {
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
function Mu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Mu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Df() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Mu(e)) && (r && (r += " "), r += t);
  return r;
}
function vn(e) {
  return typeof e == "object" ? Df(e) : e ?? "";
}
const Ws = [...` 	
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
function If(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(aa)), o && l.push(...Object.keys(o).map(aa));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === b - 1) {
            if (c !== -1) {
              var g = aa(e.substring(u, c).trim());
              if (!l.includes(g)) {
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
    return r && (n += Xs(r)), o && (n += Xs(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function $t(e, t, n, r, o, i) {
  var a = e.__className;
  if (Le || a !== n || a === void 0) {
    var s = Af(n, r, i);
    (!Le || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
  if (Le || o !== t) {
    var i = If(t, r);
    (!Le || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (sa(e, n == null ? void 0 : n[0], r[0]), sa(e, n == null ? void 0 : n[1], r[1], "important")) : sa(e, n, r));
  return r;
}
const to = Symbol("class"), rr = Symbol("style"), Vu = Symbol("is custom element"), Pu = Symbol("is html");
function Kn(e) {
  if (Le) {
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
    e.__on_r = n, sf(n), Mf();
  }
}
function Uo(e, t) {
  var n = Zi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Bf(e, t) {
  var n = Zi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function qf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function _e(e, t, n, r) {
  var o = Zi(e);
  Le && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[R1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Yt(e, t, n, r, o = !1) {
  var i = Zi(e), a = i[Vu], s = !i[Pu];
  let l = Le && a;
  l && qt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[to]) && (n.class = null), n[rr] && (n.style ?? (n.style = null));
  var v = Hu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, g, w, r, t == null ? void 0 : t[to], n[to]), u[C] = w, u[to] = n[to];
      continue;
    }
    if (C === "style") {
      ft(e, w, t == null ? void 0 : t[rr], n[rr]), u[C] = w, u[rr] = n[rr];
      continue;
    }
    var h = u[C];
    if (w !== h) {
      u[C] = w;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, V = "$$" + C;
          let E = C.slice(2);
          var x = wf(E);
          if (mf(E) && (E = E.slice(0, -7), k.capture = !0), !x && h) {
            if (w != null) continue;
            e.removeEventListener(E, u[V], k), u[V] = null;
          }
          if (w != null)
            if (x)
              e[`__${E}`] = w, jr([E]);
            else {
              let T = function(O) {
                u[C].call(this, O);
              };
              u[V] = Cu(E, e, T, k);
            }
          else x && (e[`__${E}`] = void 0);
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
          qf(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = C;
          s || ($ = bf($));
          var p = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !p)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if ($ === "value") {
                let E = k.defaultValue;
                k.removeAttribute($), k.defaultValue = E, k.value = k.__value = V ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = E, k.checked = V ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else p || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && _e(e, $, w);
        }
    }
  }
  return l && qt(!0), u;
}
function Zi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Pu]: e.namespaceURI === T1
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
var or, uo, Jo, Ea, Nu;
const Sa = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Cr(this, Ea), Cr(this, or, /* @__PURE__ */ new WeakMap()), Cr(this, uo), Cr(this, Jo), ii(this, Jo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, or).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, or).set(t, r), $1(this, Ea, Nu).call(this).observe(t, ut(this, Jo)), () => {
      var o = ut(this, or).get(t);
      o.delete(n), o.size === 0 && (ut(this, or).delete(t), ut(this, uo).unobserve(t));
    };
  }
};
or = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakSet(), Nu = function() {
  return ut(this, uo) ?? ii(this, uo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Sa.entries.set(t.target, t);
        for (var n of ut(this, or).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Tt(Sa, "entries", /* @__PURE__ */ new WeakMap());
let Zf = Sa;
var Rf = /* @__PURE__ */ new Zf({
  box: "border-box"
});
function Fs(e, t, n) {
  var r = Rf.observe(e, () => n(e[t]));
  Bt(() => (Cn(() => n(e[t])), r));
}
function Gs(e, t) {
  return e === t || (e == null ? void 0 : e[Yn]) === t;
}
function _n(e = {}, t, n, r) {
  return Bt(() => {
    var o, i;
    return Kr(() => {
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
function Ie(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    je
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
function Ke(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = So(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function en(e) {
  je === null && Oi(), Rr && je.l !== null ? Kf(je).m.push(e) : Gt(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function us(e) {
  je === null && Oi(), en(() => () => Cn(e));
}
function Yf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = je;
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
      const a = So(i) ? i.slice() : [i], s = Yf(
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
function Xt(e, t) {
  return {
    subscribe: Ee(e, t).subscribe
  };
}
function Ee(e, t = pt) {
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
  return Xt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = pt;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : pt;
    }, g = o.map(
      (h, b) => cs(
        h,
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
function F(e) {
  let t;
  return cs(e, (n) => t = n)(), t;
}
let Ro = !1, Ma = Symbol();
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
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Ma in n ? F(e) : f(r.source);
}
function Wf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pt), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function nt() {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Tr(0) }, Ff);
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
  return new Proxy({ props: e }, Gf);
}
function Js(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & M1) !== 0, a = !Rr || (n & V1) !== 0, s = (n & P1) !== 0, l = (n & H1) !== 0, u = !1, c;
  s ? [c, u] = Xf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || es in e, v = s && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, g = (
    /** @type {V} */
    r
  ), h = !0, b = !1, x = () => (b = !0, h && (h = !1, l ? g = Cn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && F1(), c = x(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (h = !0, b = !1, E);
    };
  else {
    var p = (i ? Hr : $e)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= q1, $ = () => {
      var E = f(p);
      return E !== void 0 && (g = /** @type {V} */
      void 0), E === void 0 ? g : E;
    };
  }
  if ((n & jl) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(E, T) {
      return arguments.length > 0 ? ((!a || !T || C || u) && v(T ? $() : E), E) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ ie(c), V = /* @__PURE__ */ Hr(() => {
    var E = $(), T = f(k);
    return w ? (w = !1, T) : k.v = E;
  });
  return s && f(V), i || (V.equals = rs), function(E, T) {
    if (arguments.length > 0) {
      const O = T ? f(V) : a && s ? sn(E) : E;
      if (!V.equals(O)) {
        if (w = !0, U(k, O), b && g !== void 0 && (g = O), Js(V))
          return E;
        Cn(() => f(V));
      }
      return E;
    }
    return Js(V) ? V.v : f(V);
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
    Cr(this, In), Cr(this, on);
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
          return U(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ii(this, on, (t.hydrate ? Pf : _u)(t.component, {
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
      Hf(ut(this, on));
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
          r !== "default" && (i.name = r), L(o, i);
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
function Ki(e) {
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
function Ou(e) {
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
  return new Kt(r, this._parents);
}
function sv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function lv() {
  return [];
}
function zu(e) {
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
  typeof e == "function" ? e = uv(e) : e = zu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Kt(r, o);
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
  return this.select(e == null ? vv : fv(typeof e == "function" ? e : Du(e)));
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
  return this.selectAll(e == null ? hv : mv(typeof e == "function" ? e : Du(e)));
}
function wv(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Kt(r, this._parents);
}
function Au(e) {
  return new Array(e.length);
}
function xv() {
  return new Kt(this._enter || this._groups.map(Au), this._parents);
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
function $v(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new gi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Cv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
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
  typeof e != "function" && (e = bv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, g = Ev(e.call(c, c && c.__data__, u, r)), h = g.length, b = s[u] = new Array(h), x = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, d, b, x, $, g, t);
    for (var p = 0, C = 0, w, k; p < h; ++p)
      if (w = b[p]) {
        for (p >= C && (C = p + 1); !(k = x[C]) && ++C < h; ) ;
        w._next = k || null;
      }
  }
  return a = new Kt(a, r), a._enter = s, a._exit = l, a;
}
function Ev(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sv() {
  return new Kt(this._exit || this._groups.map(Au), this._parents);
}
function Mv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Vv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), g, h = 0; h < d; ++h)
      (g = u[h] || c[h]) && (v[h] = g);
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
function Hv(e) {
  e || (e = Nv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Kt(o, this._parents).order();
}
function Nv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Tv() {
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
function Bv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qv(e, t) {
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
  return this.each((t == null ? n.local ? Bv : Iv : typeof t == "function" ? n.local ? Yv : Rv : n.local ? Zv : qv)(n, t));
}
function Iu(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Wv : typeof t == "function" ? jv : Xv)(e, t, n ?? "")) : Lr(this.node(), e);
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
function Bu(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new qu(e);
}
function qu(e) {
  this._node = e, this._names = Bu(e.getAttribute("class") || "");
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
function Ru(e, t) {
  for (var n = fs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function eg(e) {
  return function() {
    Zu(this, e);
  };
}
function tg(e) {
  return function() {
    Ru(this, e);
  };
}
function ng(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Ru)(this, e);
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
  var t = typeof e == "function" ? e : Ou(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function mg() {
  return null;
}
function yg(e, t) {
  var n = typeof e == "function" ? e : Ou(e), r = t == null ? mg : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function wg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function xg() {
  return this.each(wg);
}
function bg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $g() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cg(e) {
  return this.select(e ? $g : bg);
}
function _g(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function kg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Eg(e) {
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
  var r = Eg(e + ""), o, i = r.length, a;
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
  for (s = t ? Mg : Sg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Yu(e, t, n) {
  var r = Iu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return Yu(this, e, t);
  };
}
function Hg(e, t) {
  return function() {
    return Yu(this, e, t.apply(this, arguments));
  };
}
function Ng(e, t) {
  return this.each((typeof t == "function" ? Hg : Pg)(e, t));
}
function* Tg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Ku = [null];
function Kt(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new Kt([[document.documentElement]], Ku);
}
function Og() {
  return this;
}
Kt.prototype = Po.prototype = {
  constructor: Kt,
  select: av,
  selectAll: cv,
  selectChild: gv,
  selectChildren: yv,
  filter: wv,
  data: kv,
  enter: xv,
  exit: Sv,
  join: Mv,
  merge: Vv,
  selection: Og,
  order: Pv,
  sort: Hv,
  call: Tv,
  nodes: Ov,
  node: zv,
  size: Lv,
  empty: Dv,
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
  remove: xg,
  clone: Cg,
  datum: _g,
  on: Vg,
  dispatch: Ng,
  [Symbol.iterator]: Tg
};
function Ft(e) {
  return typeof e == "string" ? new Kt([[document.querySelector(e)]], [document.documentElement]) : new Kt([[e]], Ku);
}
function zg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
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
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Wu(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", Er, mo);
  "onselectstart" in t ? n.on("selectstart.drag", Er, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Xu(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Er, mo), setTimeout(function() {
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
function Dg(e) {
  return !e.ctrlKey && !e.button;
}
function Ag() {
  return this.parentNode;
}
function Ig(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Bg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qg() {
  var e = Dg, t = Ag, n = Ig, r = Bg, o = {}, i = Yi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", $, Lg).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var V = C(this, t.call(this, w, k), w, k, "mouse");
      V && (Ft(w.view).on("mousemove.drag", h, mo).on("mouseup.drag", b, mo), Wu(w.view), la(w), u = !1, s = w.clientX, l = w.clientY, V("start", w));
    }
  }
  function h(w) {
    if (Er(w), !u) {
      var k = w.clientX - s, V = w.clientY - l;
      u = k * k + V * V > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    Ft(w.view).on("mousemove.drag mouseup.drag", null), Xu(w.view, u), Er(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var V = w.changedTouches, E = t.call(this, w, k), T = V.length, O, D;
      for (O = 0; O < T; ++O)
        (D = C(this, E, w, k, V[O].identifier, V[O])) && (la(w), D("start", w, V[O]));
    }
  }
  function $(w) {
    var k = w.changedTouches, V = k.length, E, T;
    for (E = 0; E < V; ++E)
      (T = o[k[E].identifier]) && (Er(w), T("drag", w, k[E]));
  }
  function p(w) {
    var k = w.changedTouches, V = k.length, E, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < V; ++E)
      (T = o[k[E].identifier]) && (la(w), T("end", w, k[E]));
  }
  function C(w, k, V, E, T, O) {
    var D = i.copy(), I = an(O || V, k), z, q, M;
    if ((M = n.call(w, new Pa("beforestart", {
      sourceEvent: V,
      target: v,
      identifier: T,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), E)) != null)
      return z = M.x - I[0] || 0, q = M.y - I[1] || 0, function _(S, N, H) {
        var P = I, A;
        switch (S) {
          case "start":
            o[T] = _, A = a++;
            break;
          case "end":
            delete o[T], --a;
          // falls through
          case "drag":
            I = an(H || N, k), A = a;
            break;
        }
        D.call(
          S,
          w,
          new Pa(S, {
            sourceEvent: N,
            subject: M,
            target: v,
            identifier: T,
            active: A,
            x: I[0] + z,
            y: I[1] + q,
            dx: I[0] - P[0],
            dy: I[1] - P[1],
            dispatch: D
          }),
          E
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
var yo = 0.7, pi = 1 / yo, Sr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Rg = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Yg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Kg = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${wo}\\)$`), Wg = new RegExp(`^rgba\\(${yn},${yn},${yn},${wo}\\)$`), Xg = new RegExp(`^hsl\\(${wo},${yn},${yn}\\)$`), jg = new RegExp(`^hsla\\(${wo},${yn},${yn},${wo}\\)$`), tl = {
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
  formatHex8: Fg,
  formatHsl: Gg,
  formatRgb: rl,
  toString: rl
});
function nl() {
  return this.rgb().formatHex();
}
function Fg() {
  return this.rgb().formatHex8();
}
function Gg() {
  return Fu(this).formatHsl();
}
function rl() {
  return this.rgb().formatRgb();
}
function xo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ol(t) : n === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Rg.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = Yg.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Kg.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Wg.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = jg.exec(e)) ? sl(t[1], t[2] / 100, t[3] / 100, t[4]) : tl.hasOwnProperty(e) ? ol(tl[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function ol(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ot(e, t, n, r);
}
function Ug(e) {
  return e instanceof Ho || (e = xo(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function Ha(e, t, n, r) {
  return arguments.length === 1 ? Ug(e) : new Ot(e, t, n, r ?? 1);
}
function Ot(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vs(Ot, Ha, ju(Ho, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(sr(this.r), sr(this.g), sr(this.b), hi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: il,
  // Deprecated! Use color.formatHex.
  formatHex: il,
  formatHex8: Jg,
  formatRgb: al,
  toString: al
}));
function il() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Jg() {
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
  if (e instanceof Ho || (e = xo(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new ln(a, s, l, e.opacity);
}
function Qg(e, t, n, r) {
  return arguments.length === 1 ? Fu(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vs(ln, Qg, ju(Ho, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ot(
      ua(e >= 240 ? e - 240 : e + 120, o, r),
      ua(e, o, r),
      ua(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ln(ll(this.h), Wo(this.s), Wo(this.l), hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = hi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ll(this.h)}, ${Wo(this.s) * 100}%, ${Wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ll(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ua(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Gu = (e) => () => e;
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
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? tp(t, n, e) : Gu(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? ep(e, n) : Gu(isNaN(e) ? t : e);
}
const ul = function e(t) {
  var n = np(t);
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
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: qn(r, o) })), n = ca.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? op(l[0].x) : rp(t) : (t = l.length, function(u) {
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
var Xo;
function ap(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function sp(e) {
  return e == null || (Xo || (Xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xo.setAttribute("transform", e), !(e = Xo.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, g, h) {
    if (u !== d || c !== v) {
      var b = g.push("translate(", null, t, null, n);
      h.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, g, h) {
    if (u !== d || c !== v) {
      var b = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: b - 4, x: qn(u, d) }, { i: b - 2, x: qn(c, v) });
    } else (d !== 1 || v !== 1) && g.push(o(g) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(g) {
      for (var h = -1, b = v.length, x; ++h < b; ) d[(x = v[h]).i] = x.x(g);
      return d.join("");
    };
  };
}
var lp = ec(ap, "px, ", "px)", "deg)"), up = ec(sp, ", ", ")", ")"), cp = 1e-12;
function dl(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, h = d - l, b = g * g + h * h, x, $;
    if (b < cp)
      $ = Math.log(v / u) / t, x = function(E) {
        return [
          s + E * g,
          l + E * h,
          u * Math.exp(t * E * $)
        ];
      };
    else {
      var p = Math.sqrt(b), C = (v * v - u * u + r * b) / (2 * u * n * p), w = (v * v - u * u - r * b) / (2 * v * n * p), k = Math.log(Math.sqrt(C * C + 1) - C), V = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (V - k) / t, x = function(E) {
        var T = E * $, O = dl(k), D = u / (n * p) * (O * fp(t * T + k) - dp(k));
        return [
          s + D * g,
          l + D * h,
          u * O / dl(t * T + k)
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
var Dr = 0, io = 0, no = 0, tc = 1e3, mi, ao, yi = 0, dr = 0, Wi = 0, bo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gs() {
  return dr || (nc(gp), dr = bo.now() + Wi);
}
function gp() {
  dr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = rc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? gs() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : mi = this, ao = this), this._call = e, this._time = n, Ta();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ta());
  }
};
function rc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function pp() {
  gs(), ++Dr;
  for (var e = mi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dr;
}
function fl() {
  dr = (yi = bo.now()) + Wi, Dr = io = 0;
  try {
    pp();
  } finally {
    Dr = 0, mp(), dr = 0;
  }
}
function hp() {
  var e = bo.now(), t = e - yi;
  t > tc && (Wi -= t, yi = e);
}
function mp() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  ao = e, Ta(r);
}
function Ta(e) {
  if (!Dr) {
    io && (io = clearTimeout(io));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (io = setTimeout(fl, e - bo.now() - Wi)), no && (no = clearInterval(no))) : (no || (yi = bo.now(), no = setInterval(hp, tc)), Dr = 1, nc(fl));
  }
}
function vl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var yp = Yi("start", "end", "cancel", "interrupt"), wp = [], oc = 0, gl = 1, Oa = 2, ti = 3, pl = 4, za = 5, ni = 6;
function Xi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  xp(e, n, {
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
    state: oc
  });
}
function ps(e, t) {
  var n = gn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = gn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function xp(e, t, n) {
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
        if (g.state === ti) return vl(a);
        g.state === pl ? (g.state = ni, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ni, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ti && (n.state = pl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Oa, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Oa) {
      for (n.state = ti, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = za, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === za && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Oa && r.state < za, r.state = ni, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function bp(e) {
  return this.each(function() {
    ri(this, e);
  });
}
function $p(e, t) {
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
function Cp(e, t, n) {
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
function _p(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? $p : Cp)(n, e, t));
}
function hs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function ic(e, t) {
  var n;
  return (typeof t == "number" ? qn : t instanceof xo ? ul : (n = xo(t)) ? (t = n, ul) : ip)(e, t);
}
function kp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ep(e) {
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
  var n = Ki(e), r = n === "transform" ? up : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Pp : Vp)(n, r, hs(this, "attr." + e, t)) : t == null ? (n.local ? Ep : kp)(n) : (n.local ? Mp : Sp)(n, r, t));
}
function Np(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Tp(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Op(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Tp(e, i)), n;
  }
  return o._value = t, o;
}
function zp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Np(e, i)), n;
  }
  return o._value = t, o;
}
function Lp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ki(e);
  return this.tween(n, (r.local ? Op : zp)(r, t));
}
function Dp(e, t) {
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
  return arguments.length ? this.each((typeof e == "function" ? Dp : Ap)(t, e)) : gn(this.node(), t).delay;
}
function Bp(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function qp(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Zp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Bp : qp)(t, e)) : gn(this.node(), t).duration;
}
function Rp(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Yp(e) {
  var t = this._id;
  return arguments.length ? this.each(Rp(t, e)) : gn(this.node(), t).ease;
}
function Kp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Wp(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Kp(this._id, e));
}
function Xp(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function jp(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Ln(a, this._parents, this._name, this._id);
}
function Fp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Gp(e, t, n) {
  var r, o, i = Fp(t) ? ps : Sn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Up(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(Gp(n, e, t));
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
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Xi(u[v], t, n, v, u, gn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function th(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, h = gn(c, n), b = 0, x = v.length; b < x; ++b)
          (g = v[b]) && Xi(g, t, n, b, v, h);
        i.push(v), a.push(c);
      }
  return new Ln(i, a, t, n);
}
var nh = Po.prototype.constructor;
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
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? s || (s = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function lh(e, t, n) {
  var r = (e += "") == "transform" ? lp : ic;
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
  for (var e = this._name, t = this._id, n = sc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
  return new Ln(r, this._parents, e, n);
}
function wh() {
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
var xh = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function sc() {
  return ++xh;
}
var Vn = Po.prototype;
Ln.prototype = {
  constructor: Ln,
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
  attrTween: Lp,
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
function bh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $h = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bh
};
function Ch(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function _h(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = sc(), (n = $h).time = gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Xi(l, e, t, u, a, n || Ch(l, t));
  return new Ln(r, this._parents, e, t);
}
Po.prototype.interrupt = bp;
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
lc.prototype = Pn.prototype;
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
function Eh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Sh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hl() {
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
function uc() {
  var e = Eh, t = Sh, n = Ph, r = Mh, o = Vh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = vp, u = Yi("start", "zoom", "end"), c, d, v, g = 500, h = 150, b = 0, x = 10;
  function $(M) {
    M.property("__zoom", hl).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(M, _, S, N) {
    var H = M.selection ? M.selection() : M;
    H.property("__zoom", hl), M !== H ? k(M, _, S, N) : H.interrupt().each(function() {
      V(this, arguments).event(N).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(M, _, S, N) {
    $.scaleTo(M, function() {
      var H = this.__zoom.k, P = typeof _ == "function" ? _.apply(this, arguments) : _;
      return H * P;
    }, S, N);
  }, $.scaleTo = function(M, _, S, N) {
    $.transform(M, function() {
      var H = t.apply(this, arguments), P = this.__zoom, A = S == null ? w(H) : typeof S == "function" ? S.apply(this, arguments) : S, R = P.invert(A), W = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(p(P, W), A, R), H, a);
    }, S, N);
  }, $.translateBy = function(M, _, S, N) {
    $.transform(M, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), a);
    }, null, N);
  }, $.translateTo = function(M, _, S, N, H) {
    $.transform(M, function() {
      var P = t.apply(this, arguments), A = this.__zoom, R = N == null ? w(P) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(ji.translate(R[0], R[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), P, a);
    }, N, H);
  };
  function p(M, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === M.k ? M : new Pn(_, M.x, M.y);
  }
  function C(M, _, S) {
    var N = _[0] - S[0] * M.k, H = _[1] - S[1] * M.k;
    return N === M.x && H === M.y ? M : new Pn(M.k, N, H);
  }
  function w(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function k(M, _, S, N) {
    M.on("start.zoom", function() {
      V(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var H = this, P = arguments, A = V(H, P).event(N), R = t.apply(H, P), W = S == null ? w(R) : typeof S == "function" ? S.apply(H, P) : S, Q = Math.max(R[1][0] - R[0][0], R[1][1] - R[0][1]), G = H.__zoom, X = typeof _ == "function" ? _.apply(H, P) : _, me = l(G.invert(W).concat(Q / G.k), X.invert(W).concat(Q / X.k));
      return function(oe) {
        if (oe === 1) oe = X;
        else {
          var pe = me(oe), se = Q / pe[2];
          oe = new Pn(se, W[0] - pe[0] * se, W[1] - pe[1] * se);
        }
        A.zoom(null, oe);
      };
    });
  }
  function V(M, _, S) {
    return !S && M.__zooming || new E(M, _);
  }
  function E(M, _) {
    this.that = M, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, _), this.taps = 0;
  }
  E.prototype = {
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
      var _ = Ft(this.that).datum();
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
  function T(M, ..._) {
    if (!e.apply(this, arguments)) return;
    var S = V(this, _).event(M), N = this.__zoom, H = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), P = an(M);
    if (S.wheel)
      (S.mouse[0][0] !== P[0] || S.mouse[0][1] !== P[1]) && (S.mouse[1] = N.invert(S.mouse[0] = P)), clearTimeout(S.wheel);
    else {
      if (N.k === H) return;
      S.mouse = [P, N.invert(P)], ri(this), S.start();
    }
    ro(M), S.wheel = setTimeout(A, h), S.zoom("mouse", n(C(p(N, H), S.mouse[0], S.mouse[1]), S.extent, a));
    function A() {
      S.wheel = null, S.end();
    }
  }
  function O(M, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var S = M.currentTarget, N = V(this, _, !0).event(M), H = Ft(M.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", Q, !0), P = an(M, S), A = M.clientX, R = M.clientY;
    Wu(M.view), da(M), N.mouse = [P, this.__zoom.invert(P)], ri(this), N.start();
    function W(G) {
      if (ro(G), !N.moved) {
        var X = G.clientX - A, me = G.clientY - R;
        N.moved = X * X + me * me > b;
      }
      N.event(G).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = an(G, S), N.mouse[1]), N.extent, a));
    }
    function Q(G) {
      H.on("mousemove.zoom mouseup.zoom", null), Xu(G.view, N.moved), ro(G), N.event(G).end();
    }
  }
  function D(M, ..._) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, N = an(M.changedTouches ? M.changedTouches[0] : M, this), H = S.invert(N), P = S.k * (M.shiftKey ? 0.5 : 2), A = n(C(p(S, P), N, H), t.apply(this, _), a);
      ro(M), s > 0 ? Ft(this).transition().duration(s).call(k, A, N, M) : Ft(this).call($.transform, A, N, M);
    }
  }
  function I(M, ..._) {
    if (e.apply(this, arguments)) {
      var S = M.touches, N = S.length, H = V(this, _, M.changedTouches.length === N).event(M), P, A, R, W;
      for (da(M), A = 0; A < N; ++A)
        R = S[A], W = an(R, this), W = [W, this.__zoom.invert(W), R.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== W[2] && (H.touch1 = W, H.taps = 0) : (H.touch0 = W, P = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (H.taps < 2 && (d = W[0], c = setTimeout(function() {
        c = null;
      }, g)), ri(this), H.start());
    }
  }
  function z(M, ..._) {
    if (this.__zooming) {
      var S = V(this, _).event(M), N = M.changedTouches, H = N.length, P, A, R, W;
      for (ro(M), P = 0; P < H; ++P)
        A = N[P], R = an(A, this), S.touch0 && S.touch0[2] === A.identifier ? S.touch0[0] = R : S.touch1 && S.touch1[2] === A.identifier && (S.touch1[0] = R);
      if (A = S.that.__zoom, S.touch1) {
        var Q = S.touch0[0], G = S.touch0[1], X = S.touch1[0], me = S.touch1[1], oe = (oe = X[0] - Q[0]) * oe + (oe = X[1] - Q[1]) * oe, pe = (pe = me[0] - G[0]) * pe + (pe = me[1] - G[1]) * pe;
        A = p(A, Math.sqrt(oe / pe)), R = [(Q[0] + X[0]) / 2, (Q[1] + X[1]) / 2], W = [(G[0] + me[0]) / 2, (G[1] + me[1]) / 2];
      } else if (S.touch0) R = S.touch0[0], W = S.touch0[1];
      else return;
      S.zoom("touch", n(C(A, R, W), S.extent, a));
    }
  }
  function q(M, ..._) {
    if (this.__zooming) {
      var S = V(this, _).event(M), N = M.changedTouches, H = N.length, P, A;
      for (da(M), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), P = 0; P < H; ++P)
        A = N[P], S.touch0 && S.touch0[2] === A.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === A.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (A = an(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < x)) {
        var R = Ft(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
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
}, xi = [
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
var Oe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Oe || (Oe = {}));
const ml = {
  [Oe.Left]: Oe.Right,
  [Oe.Right]: Oe.Left,
  [Oe.Top]: Oe.Bottom,
  [Oe.Bottom]: Oe.Top
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
function Nh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Th = (e) => "id" in e && "source" in e && "target" in e, Oh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), No = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
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
}, To = (e, t = {}) => {
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
    ...Oo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, b = Co(s, Br(u)), x = (g ?? 0) * (h ?? 0), $ = i && b > 0;
    (!u.internals.handleBounds || $ || b >= x || u.dragging) && l.push(u);
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
async function Dh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Lh(e, a), l = To(s), u = ws(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Ah({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Ar.error005());
    else {
      const g = s.measured.width, h = s.measured.height;
      g && h && (d = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else s && qr(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = qr(d) ? vr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Ar.error015())), {
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
    const v = i.has(d.id), g = !v && d.parentId && a.find((h) => h.id === d.parentId);
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
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function fc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return vr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const wl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, vc = (e, t, n = 15, r = 40) => {
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
}), Br = (e, t = [0, 0]) => {
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
}, xl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Ih = (e, t) => {
}, ys = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Oo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
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
function Bh(e, t, n) {
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
function qh(e, t, n, r, o, i) {
  const { x: a, y: s } = Ci(e, [t, n, r]), { x: l, y: u } = Ci({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const ws = (e, t, n, r, o, i) => {
  const a = Bh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = Ir(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, g = t / 2 - d * c, h = n / 2 - v * c, b = qh(e, g, h, c, t, n), x = {
    left: Math.min(b.left - a.left, 0),
    top: Math.min(b.top - a.top, 0),
    right: Math.min(b.right - a.right, 0),
    bottom: Math.min(b.bottom - a.bottom, 0)
  };
  return {
    x: g - x.left + x.right,
    y: h - x.top + x.bottom,
    zoom: c
  };
}, _i = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function qr(e) {
  return e !== void 0 && e !== "parent";
}
function tr(e) {
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
function Rh() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function fa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = On(e), s = Oo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ys(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const hc = (e) => ({
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
const mc = (e) => "clientX" in e, On = (e, t) => {
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
      ...hc(a)
    };
  });
};
function Xh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function $l({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Oe.Left:
      return [t - Fo(t - r, i), n];
    case Oe.Right:
      return [t + Fo(r - t, i), n];
    case Oe.Top:
      return [t, n - Fo(n - o, i)];
    case Oe.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function yc({ sourceX: e, sourceY: t, sourcePosition: n = Oe.Bottom, targetX: r, targetY: o, targetPosition: i = Oe.Top, curvature: a = 0.25 }) {
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
  }), [d, v, g, h] = Xh({
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
  return Th(e) ? n = { ...e } : n = {
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
  [Oe.Left]: { x: -1, y: 0 },
  [Oe.Right]: { x: 1, y: 0 },
  [Oe.Top]: { x: 0, y: -1 },
  [Oe.Bottom]: { x: 0, y: 1 }
}, Qh = ({ source: e, sourcePosition: t = Oe.Bottom, target: n }) => t === Oe.Left || t === Oe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function e0({ source: e, sourcePosition: t = Oe.Bottom, target: n, targetPosition: r = Oe.Top, center: o, offset: i }) {
  const a = Cl[t], s = Cl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Qh({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let g = [], h, b;
  const x = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [p, C, w, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? p, b = o.y ?? C;
    const V = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === v ? g = d === "x" ? V : E : g = d === "x" ? E : V;
  } else {
    const V = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? E : V : g = a.y === v ? V : E, t === r) {
      const z = Math.abs(e[d] - n[d]);
      if (z <= i) {
        const q = Math.min(i - 1, i - z);
        a[d] === v ? x[d] = (l[d] > e[d] ? -1 : 1) * q : $[d] = (u[d] > n[d] ? -1 : 1) * q;
      }
    }
    if (t !== r) {
      const z = d === "x" ? "y" : "x", q = a[d] === s[z], M = l[z] > u[z], _ = l[z] < u[z];
      (a[d] === 1 && (!q && M || q && _) || a[d] !== 1 && (!q && _ || q && M)) && (g = d === "x" ? V : E);
    }
    const T = { x: l.x + x.x, y: l.y + x.y }, O = { x: u.x + $.x, y: u.y + $.y }, D = Math.max(Math.abs(T.x - g[0].x), Math.abs(O.x - g[0].x)), I = Math.max(Math.abs(T.y - g[0].y), Math.abs(O.y - g[0].y));
    D >= I ? (h = (T.x + O.x) / 2, b = g[0].y) : (h = g[0].x, b = (T.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], h, b, w, k];
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
function ki({ sourceX: e, sourceY: t, sourcePosition: n = Oe.Bottom, targetX: r, targetY: o, targetPosition: i = Oe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, g, h] = e0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, $) => {
    let p = "";
    return $ > 0 && $ < c.length - 1 ? p = t0(c[$ - 1], x, c[$ + 1], a) : p = `${$ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += p, b;
  }, ""), d, v, g, h];
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
  const o = n.internals.handleBounds || El(n.handles), i = r.internals.handleBounds || El(r.handles), a = Sl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Sl(
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
  const l = (a == null ? void 0 : a.position) || Oe.Bottom, u = (s == null ? void 0 : s.position) || Oe.Top, c = _o(n, a, l), d = _o(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
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
function _o(e, t, n = Oe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Oe.Top:
      return { x: o + a / 2, y: i };
    case Oe.Right:
      return { x: o + a, y: i + s / 2 };
    case Oe.Bottom:
      return { x: o + a / 2, y: i + s };
    case Oe.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Sl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ba(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function r0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ba(l, t);
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
    case Oe.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Oe.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Oe.Left:
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
  nodeExtent: xi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, i0 = {
  ...xs,
  checkEquality: !0
};
function bs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function a0(e, t, n) {
  const r = bs(xs, n);
  for (const o of e.values())
    if (o.parentId)
      $s(o, e, t, r);
    else {
      const i = No(o, r.nodeOrigin), a = qr(o.extent) ? o.extent : r.nodeExtent, s = vr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function xc(e, t, n, r) {
  var o, i;
  const a = bs(i0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = No(c, a.nodeOrigin), g = qr(c.extent) ? c.extent : a.nodeExtent, h = vr(v, g, tr(c));
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
          z: bc(c, u),
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = bs(xs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  s0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = l0(e, l, i, a, u), { positionAbsolute: g } = e.internals, h = c !== g.x || d !== g.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : g,
      z: v
    }
  });
}
function bc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function l0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = No(e, n), u = qr(e.extent) ? vr(l, e.extent, s) : l;
  let c = vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = fc(c, s, t));
  const d = bc(e, o), v = t.internals.z ?? 0;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Br(l), c = gc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = tr(l), g = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), p = (x - v.width) * g[0], C = ($ - v.height) * g[1];
    (h > 0 || b > 0 || p || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + p,
        y: l.position.y - b + C
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
    })), (v.width < s.width || v.height < s.height || h || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? g[0] * h - p : 0),
        height: $ + (b ? g[1] * b - C : 0)
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
    const h = hc(v.nodeElement), b = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (b || !g.internals.handleBounds || v.force)) {
      const x = v.nodeElement.getBoundingClientRect(), $ = qr(g.extent) ? g.extent : i;
      let { positionAbsolute: p } = g.internals;
      g.parentId && g.extent === "parent" ? p = fc(p, h, t.get(g.parentId)) : $ && (p = vr(p, $, h));
      const C = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: p,
          handleBounds: {
            source: bl("source", v.nodeElement, x, c, g.id),
            target: bl("target", v.nodeElement, x, c, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && $s(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: Br(C, o)
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
function g0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, g = !1;
  function h({ noDragClassName: x, handleSelector: $, domNode: p, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = Ft(p);
    function V({ x: D, y: I }, z) {
      const { nodeLookup: q, nodeExtent: M, snapGrid: _, snapToGrid: S, nodeOrigin: N, onNodeDrag: H, onSelectionDrag: P, onError: A, updateNodePositions: R } = t();
      i = { x: D, y: I };
      let W = !1, Q = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const G = To(s);
        Q = Aa(G);
      }
      for (const [G, X] of s) {
        if (!q.has(G))
          continue;
        let me = { x: D - X.distance.x, y: I - X.distance.y };
        S && (me = ys(me, _));
        let oe = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !X.extent) {
          const { positionAbsolute: Se } = X.internals, we = Se.x - Q.x + M[0][0], He = Se.x + X.measured.width - Q.x2 + M[1][0], ce = Se.y - Q.y + M[0][1], J = Se.y + X.measured.height - Q.y2 + M[1][1];
          oe = [
            [we, ce],
            [He, J]
          ];
        }
        const { position: pe, positionAbsolute: se } = Ah({
          nodeId: G,
          nextPosition: me,
          nodeLookup: q,
          nodeExtent: oe,
          nodeOrigin: N,
          onError: A
        });
        W = W || X.position.x !== pe.x || X.position.y !== pe.y, X.position = pe, X.internals.positionAbsolute = se;
      }
      if (W && (R(s, !0), z && (r || H || !w && P))) {
        const [G, X] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: q
        });
        r == null || r(z, s, G, X), H == null || H(z, G, X), w || P == null || P(z, X);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: D, panBy: I, autoPanSpeed: z, autoPanOnNodeDrag: q } = t();
      if (!q) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [M, _] = vc(u, c, z);
      (M !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - M / D[2], i.y = (i.y ?? 0) - _ / D[2], await I({ x: M, y: _ }) && V(i, null)), a = requestAnimationFrame(E);
    }
    function T(D) {
      var I;
      const { nodeLookup: z, multiSelectionActive: q, nodesDraggable: M, transform: _, snapGrid: S, snapToGrid: N, selectNodesOnDrag: H, onNodeDragStart: P, onSelectionDragStart: A, unselectNodesAndEdges: R } = t();
      d = !0, (!H || !C) && !q && w && ((I = z.get(w)) != null && I.selected || R()), C && H && w && (e == null || e(w));
      const W = fa(D.sourceEvent, { transform: _, snapGrid: S, snapToGrid: N, containerBounds: c });
      if (i = W, s = v0(z, M, W, w), s.size > 0 && (n || P || !w && A)) {
        const [Q, G] = va({
          nodeId: w,
          dragItems: s,
          nodeLookup: z
        });
        n == null || n(D.sourceEvent, s, Q, G), P == null || P(D.sourceEvent, Q, G), w || A == null || A(D.sourceEvent, G);
      }
    }
    const O = qg().clickDistance(k).on("start", (D) => {
      const { domNode: I, nodeDragThreshold: z, transform: q, snapGrid: M, snapToGrid: _ } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, g = !1, z === 0 && T(D), i = fa(D.sourceEvent, { transform: q, snapGrid: M, snapToGrid: _, containerBounds: c }), u = On(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: I, transform: z, snapGrid: q, snapToGrid: M, nodeDragThreshold: _, nodeLookup: S } = t(), N = fa(D.sourceEvent, { transform: z, snapGrid: q, snapToGrid: M, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !S.has(w)) && (g = !0), !g) {
        if (!l && I && d && (l = !0, E()), !d) {
          const H = N.xSnapped - (i.x ?? 0), P = N.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + P * P) > _ && T(D);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && d && (u = On(D.sourceEvent, c), V(N, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: z, onNodeDragStop: q, onSelectionDragStop: M } = t();
        if (z(s, !1), o || q || !w && M) {
          const [_, S] = va({
            nodeId: w,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, _, S), q == null || q(D.sourceEvent, _, S), w || M == null || M(D.sourceEvent, S);
        }
      }
    }).filter((D) => {
      const I = D.target;
      return !D.button && (!x || !Vl(I, `.${x}`, p)) && (!$ || Vl(I, $, p));
    });
    v.call(O);
  }
  function b() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
    destroy: b
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
    Co(o, Br(i)) > 0 && r.push(i);
  return r;
}
const h0 = 250;
function m0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = p0(e, n, t + h0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: g } = _o(u, d, d.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: v, y: g }], s = h) : h === s && a.push({ ...d, x: v, y: g }));
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
const Ec = () => !0;
function w0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: h, onConnect: b, onConnectEnd: x, isValidConnection: $ = Ec, onReconnectEnd: p, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: V }) {
  const E = Yh(e.target);
  let T = 0, O;
  const { x: D, y: I } = On(e), z = E == null ? void 0 : E.elementFromPoint(D, I), q = kc(i, z), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !q)
    return;
  const _ = _c(o, q, r, l, t);
  if (!_)
    return;
  let S = On(e, M), N = !1, H = null, P = !1, A = null;
  function R() {
    if (!c || !M)
      return;
    const [pe, se] = vc(S, M, V);
    v({ x: pe, y: se }), T = requestAnimationFrame(R);
  }
  const W = {
    ..._,
    nodeId: o,
    type: q,
    position: _.position
  }, Q = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: _o(Q, W, Oe.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: Q,
    to: S,
    toHandle: null,
    toPosition: ml[W.position],
    toNode: null
  };
  C(G);
  let X = G;
  h == null || h(e, { nodeId: o, handleId: r, handleType: q });
  function me(pe) {
    if (!k() || !W) {
      oe(pe);
      return;
    }
    const se = w();
    S = On(pe, M), O = m0(Oo(S, se, !1, [1, 1]), n, l, W), N || (R(), N = !0);
    const Se = Sc(pe, {
      handle: O,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    A = Se.handleDomNode, H = Se.connection, P = y0(!!O, Se.isValid);
    const we = {
      // from stays the same
      ...X,
      isValid: P,
      to: O && P ? Ci({ x: O.x, y: O.y }, se) : S,
      toHandle: Se.toHandle,
      toPosition: P && Se.toHandle ? Se.toHandle.position : ml[W.position],
      toNode: Se.toHandle ? l.get(Se.toHandle.nodeId) : null
    };
    P && O && X.toHandle && we.toHandle && X.toHandle.type === we.toHandle.type && X.toHandle.nodeId === we.toHandle.nodeId && X.toHandle.id === we.toHandle.id && X.to.x === we.to.x && X.to.y === we.to.y || (C(we), X = we);
  }
  function oe(pe) {
    (O || A) && H && P && (b == null || b(H));
    const { inProgress: se, ...Se } = X, we = {
      ...Se,
      toPosition: X.toHandle ? X.toPosition : null
    };
    x == null || x(pe, we), i && (p == null || p(pe, we)), g(), cancelAnimationFrame(T), N = !1, P = !1, H = null, A = null, E.removeEventListener("mousemove", me), E.removeEventListener("mouseup", oe), E.removeEventListener("touchmove", me), E.removeEventListener("touchend", oe);
  }
  E.addEventListener("mousemove", me), E.addEventListener("mouseup", oe), E.addEventListener("touchmove", me), E.addEventListener("touchend", oe);
}
function Sc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Ec, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: h } = On(e), b = a.elementFromPoint(g, h), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : v, $ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const p = kc(void 0, x), C = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), V = x.classList.contains("connectableend");
    if (!C || !p)
      return $;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = E;
    const T = k && V && (n === fr.Strict ? d && p === "source" || !d && p === "target" : C !== r || w !== o);
    $.isValid = T && u(E), $.toHandle = _c(C, p, w, c, n, !1);
  }
  return $;
}
const x0 = {
  onPointerDown: w0,
  isValid: Sc
};
function b0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const h = (C) => {
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
      const E = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), T = {
        x: w[0] - V[0] * E,
        y: w[1] - V[1] * E
      }, O = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: w[2]
      }, O, s);
    }, p = uc().on("start", x).on("zoom", d ? $ : null).on("zoom.wheel", v ? h : null);
    o.call(p, {});
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
}), ga = ({ x: e, y: t, zoom: n }) => ji.translate(e, t).scale(n), _r = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), pa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && _i() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function C0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (_r(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = an(c), $ = Vc(c), p = d * Math.pow(2, $);
      r.scaleTo(n, p, x, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === Xn.Vertical ? 0 : c.deltaX * v, h = o === Xn.Horizontal ? 0 : c.deltaY * v;
    !_i() && c.shiftKey && o !== Xn.Vertical && (g = c.deltaY * v, h = 0), r.translateBy(
      n,
      -(g / d) * i,
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
function E0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ui(i.transform)));
  };
}
function S0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && $0(e.prevViewport, a.transform))) {
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
    var d;
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (_r(c, `${u}-flow__node`) || _r(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || _r(c, s) && c.type === "wheel" || _r(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
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
  }, d = e.getBoundingClientRect(), v = uc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Ft(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: Ir(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = g.on("wheel.zoom"), b = g.on("dblclick.zoom");
  v.wheelDelta(Vc);
  function x(z, q) {
    return g ? new Promise((M) => {
      v == null || v.transform(pa(g, q == null ? void 0 : q.duration, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: z, noPanClassName: q, onPaneContextMenu: M, userSelectionActive: _, panOnScroll: S, panOnDrag: N, panOnScrollMode: H, panOnScrollSpeed: P, preventScrolling: A, zoomOnPinch: R, zoomOnScroll: W, zoomOnDoubleClick: Q, zoomActivationKeyPressed: G, lib: X, onTransformChange: me }) {
    _ && !c.isZoomingOrPanning && p();
    const oe = S && !G && !_ ? C0({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: H,
      panOnScrollSpeed: P,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : _0({
      noWheelClassName: z,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", oe, { passive: !1 }), !_) {
      const se = k0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", se);
      const Se = E0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!M,
        onPanZoom: a,
        onTransformChange: me
      });
      v.on("zoom", Se);
      const we = S0({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: S,
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
      panOnScroll: S,
      zoomOnDoubleClick: Q,
      zoomOnPinch: R,
      userSelectionActive: _,
      noPanClassName: q,
      noWheelClassName: z,
      lib: X
    });
    v.filter(pe), Q ? g.on("dblclick.zoom", b) : g.on("dblclick.zoom", null);
  }
  function p() {
    v.on("zoom", null);
  }
  async function C(z, q, M) {
    const _ = ga(z), S = v == null ? void 0 : v.constrain()(_, q, M);
    return S && await x(S), new Promise((N) => N(S));
  }
  async function w(z, q) {
    const M = ga(z);
    return await x(M, q), new Promise((_) => _(M));
  }
  function k(z) {
    if (g) {
      const q = ga(z), M = g.property("__zoom");
      (M.k !== z.zoom || M.x !== z.x || M.y !== z.y) && (v == null || v.transform(g, q, null, { sync: !0 }));
    }
  }
  function V() {
    const z = g ? lc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function E(z, q) {
    return g ? new Promise((M) => {
      v == null || v.scaleTo(pa(g, q == null ? void 0 : q.duration, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function T(z, q) {
    return g ? new Promise((M) => {
      v == null || v.scaleBy(pa(g, q == null ? void 0 : q.duration, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function O(z) {
    v == null || v.scaleExtent(z);
  }
  function D(z) {
    v == null || v.translateExtent(z);
  }
  function I(z) {
    const q = !Hn(z) || z < 0 ? 0 : z;
    v == null || v.clickDistance(q);
  }
  return {
    update: $,
    destroy: p,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: V,
    scaleTo: E,
    scaleBy: T,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: I
  };
}
var Pl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Pl || (Pl = {}));
var P0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(Q, "$connectable", n), i = () => ne(pe, "$connectionRadius", n), a = () => ne(me, "$domNode", n), s = () => ne(oe, "$nodeLookup", n), l = () => ne(X, "$connectionMode", n), u = () => ne(we, "$lib", n), c = () => ne(Ce, "$autoPanOnConnect", n), d = () => ne(be, "$flowId", n), v = () => ne(Se, "$isValidConnectionStore", n), g = () => ne(ce, "$onedgecreate", n), h = () => ne(ae, "$onConnectAction", n), b = () => ne(de, "$onConnectStartAction", n), x = () => ne(le, "$onConnectEndAction", n), $ = () => ne(se, "$viewport", n), p = () => ne(et, "$connection", n), C = () => ne(Ne, "$edges", n), w = () => ne(ze, "$connectionLookup", n), k = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), T = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie(), D = /* @__PURE__ */ ie(), I = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie();
  let q = y(t, "id", 12, void 0), M = y(t, "type", 12, "source"), _ = y(t, "position", 28, () => Oe.Top), S = y(t, "style", 12, void 0), N = y(t, "isValidConnection", 12, void 0), H = y(t, "onconnect", 12, void 0), P = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), R = y(t, "class", 12, void 0);
  const W = ur("svelteflow__node_id"), Q = ur("svelteflow__node_connectable"), G = Xe(), {
    connectionMode: X,
    domNode: me,
    nodeLookup: oe,
    connectionRadius: pe,
    viewport: se,
    isValidConnection: Se,
    lib: we,
    addEdge: He,
    onedgecreate: ce,
    panBy: J,
    cancelConnection: Ve,
    updateConnection: j,
    autoPanOnConnect: Ce,
    edges: Ne,
    connectionLookup: ze,
    onconnect: ae,
    onconnectstart: de,
    onconnectend: le,
    flowId: be,
    connection: et
  } = G;
  function at(De) {
    const rt = mc(De);
    (rt && De.button === 0 || !rt) && x0.onPointerDown(De, {
      handleId: f(E),
      nodeId: W,
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
      cancelConnection: Ve,
      panBy: J,
      onConnect: (Ze) => {
        var Be;
        const ot = g() ? g()(Ze) : Ze;
        ot && (He(ot), (Be = h()) == null || Be(Ze));
      },
      onConnectStart: (Ze, Be) => {
        var ot;
        (ot = b()) == null || ot(Ze, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (Ze, Be) => {
        var ot;
        (ot = x()) == null || ot(Ze, Be);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let ee = /* @__PURE__ */ ie(null), Re = /* @__PURE__ */ ie();
  he(() => te(M()), () => {
    U(k, M() === "target");
  }), he(
    () => (te(A()), o()),
    () => {
      U(V, A() !== void 0 ? A() : o());
    }
  ), he(() => te(q()), () => {
    U(E, q() || null);
  }), he(
    () => (te(H()), te(P()), C(), w(), te(M()), te(q())),
    () => {
      (H() || P()) && (C(), U(Re, w().get(`${W}-${M()}${q() ? `-${q()}` : ""}`)));
    }
  ), he(
    () => (f(ee), f(Re), te(P()), te(H())),
    () => {
      if (f(ee) && !Hh(f(Re), f(ee))) {
        const De = f(Re) ?? /* @__PURE__ */ new Map();
        yl(f(ee), De, P()), yl(De, f(ee), H());
      }
      U(ee, f(Re) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => p(), () => {
    U(T, !!p().fromHandle);
  }), he(
    () => (p(), te(M()), f(E)),
    () => {
      var De, rt, Ze;
      U(O, ((De = p().fromHandle) == null ? void 0 : De.nodeId) === W && ((rt = p().fromHandle) == null ? void 0 : rt.type) === M() && ((Ze = p().fromHandle) == null ? void 0 : Ze.id) === f(E));
    }
  ), he(
    () => (p(), te(M()), f(E)),
    () => {
      var De, rt, Ze;
      U(D, ((De = p().toHandle) == null ? void 0 : De.nodeId) === W && ((rt = p().toHandle) == null ? void 0 : rt.type) === M() && ((Ze = p().toHandle) == null ? void 0 : Ze.id) === f(E));
    }
  ), he(
    () => (l(), p(), te(M()), f(E)),
    () => {
      var De, rt, Ze;
      U(I, l() === fr.Strict ? ((De = p().fromHandle) == null ? void 0 : De.type) !== M() : W !== ((rt = p().fromHandle) == null ? void 0 : rt.nodeId) || f(E) !== ((Ze = p().fromHandle) == null ? void 0 : Ze.id));
    }
  ), he(() => (f(D), p()), () => {
    U(z, f(D) && p().isValid);
  }), yt(), Ie();
  var fe = P0();
  _e(fe, "data-nodeid", W);
  let tn;
  var nn = Y(fe);
  bt(nn, t, "default", {}), Z(fe), ke(
    (De, rt) => {
      _e(fe, "data-handleid", f(E)), _e(fe, "data-handlepos", _()), _e(fe, "data-id", `${d() ?? ""}-${W ?? ""}-${(q() || "") ?? ""}-${M() ?? ""}`), tn = $t(fe, 1, De, null, tn, rt), ft(fe, S());
    },
    [
      () => vn(Vt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        R()
      ])),
      () => ({
        valid: f(z),
        connectingto: f(D),
        connectingfrom: f(O),
        source: !f(k),
        target: f(k),
        connectablestart: f(V),
        connectableend: f(V),
        connectable: f(V),
        connectionindicator: f(V) && (!f(T) || f(I))
      })
    ],
    $e
  ), tt("mousedown", fe, at), tt("touchstart", fe, at), L(e, fe);
  var hn = ge({
    get id() {
      return q();
    },
    set id(De) {
      q(De), m();
    },
    get type() {
      return M();
    },
    set type(De) {
      M(De), m();
    },
    get position() {
      return _();
    },
    set position(De) {
      _(De), m();
    },
    get style() {
      return S();
    },
    set style(De) {
      S(De), m();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(De) {
      N(De), m();
    },
    get onconnect() {
      return H();
    },
    set onconnect(De) {
      H(De), m();
    },
    get ondisconnect() {
      return P();
    },
    set ondisconnect(De) {
      P(De), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(De) {
      A(De), m();
    },
    get class() {
      return R();
    },
    set class(De) {
      R(De), m();
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
var H0 = /* @__PURE__ */ re("<!> <!>", 1);
function Ei(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ie();
  var a = H0(), s = xe(a);
  const l = /* @__PURE__ */ $e(() => o() ?? Oe.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ $e(() => i() ?? Oe.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), ke(() => {
    var v;
    return ct(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), L(e, a), ge({
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
  Ei,
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
function Pc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ie(), Te();
  var i = N0(), a = xe(i), s = B(a);
  const l = /* @__PURE__ */ $e(() => o() ?? Oe.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), ke(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ge({
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
ue(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
var T0 = /* @__PURE__ */ re(" <!>", 1);
function Hc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), ve(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ie(), Te();
  var i = T0(), a = xe(i), s = B(a);
  const l = /* @__PURE__ */ $e(() => o() ?? Oe.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), ke(() => {
    var u;
    return ct(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ge({
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
var O0 = /* @__PURE__ */ re("<div><!></div>");
function Tc(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(i, "$domNode", n), { domNode: i } = Xe();
  Ie();
  var a = O0(), s = Y(a);
  bt(s, t, "default", {}), Z(a), xt(a, (l, u) => Si == null ? void 0 : Si(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, a), ge(), r();
}
ue(Tc, {}, ["default"], [], !0);
function Oc() {
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
var z0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function zc(e, t) {
  ve(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = Oc(), a = ur("svelteflow__edge_id");
  return Ie(), Tc(e, {
    children: (s, l) => {
      var u = z0();
      let c;
      var d = Y(u);
      bt(d, t, "default", {}), Z(u), ke(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), tt("keyup", u, () => {
      }), tt("click", u, () => {
        a && i(a);
      }), L(s, u);
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
ue(zc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var L0 = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__edge-interaction"></path>'), D0 = /* @__PURE__ */ Me('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  Ie();
  var h = D0(), b = xe(h), x = B(b);
  {
    var $ = (w) => {
      var k = L0();
      _e(k, "stroke-opacity", 0), _e(k, "stroke-width", g), ke(() => _e(k, "d", r())), L(w, k);
    };
    ye(x, (w) => {
      g && w($);
    });
  }
  var p = B(x);
  {
    var C = (w) => {
      zc(w, {
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
          var E = Ae();
          ke(() => ct(E, o())), L(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    ye(p, (w) => {
      o() && w(C);
    });
  }
  return ke(
    (w) => {
      _e(b, "id", n()), _e(b, "d", r()), $t(b, 0, w), _e(b, "marker-start", l()), _e(b, "marker-end", u()), ft(b, c());
    },
    [
      () => vn(Vt(["svelte-flow__edge-path", v()]))
    ],
    $e
  ), L(e, h), ge({
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
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(v()), te(g()), te(b()), te(x()), te(h()), te($())),
    () => {
      ((p) => (U(r, p[0]), U(o, p[1]), U(i, p[2])))(yc({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), yt(), Ie(), zo(e, {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(v()), te(g()), te(b()), te(x()), te(h()), te($())),
    () => {
      ((p) => (U(r, p[0]), U(o, p[1]), U(i, p[2])))(ki({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), yt(), Ie(), zo(e, {
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
      return $();
    },
    set targetPosition(p) {
      $(p), m();
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return he(
    () => (f(r), f(o), f(i), te(v()), te(g()), te(h()), te(b())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(Ia({
        sourceX: v(),
        sourceY: g(),
        targetX: h(),
        targetY: b()
      }));
    }
  ), yt(), Ie(), zo(e, {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return he(
    () => (f(r), f(o), f(i), te(v()), te(g()), te(b()), te(x()), te(h()), te($())),
    () => {
      ((p) => (U(r, p[0]), U(o, p[1]), U(i, p[2])))(ki({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), yt(), Ie(), zo(e, {
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
      return $();
    },
    set targetPosition(p) {
      $(p), m();
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
const B0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, q0 = (e, t, n, r = [0, 0], o = xi, i, a, s, l, u, c, d, v) => {
  const { subscribe: g, set: h, update: b } = Ee([]);
  let x = e, $ = {}, p = !0;
  const C = (E) => {
    const T = xc(E, t, n, {
      elevateNodesOnSelect: p,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return F(i) && T && F(l) && (Dh({
      nodes: t,
      width: F(u),
      height: F(c),
      panZoom: F(l),
      minZoom: F(d),
      maxZoom: F(v)
    }, F(a)).then((O) => {
      var D;
      (D = F(s)) == null || D.resolve(O), s.set(null);
    }), i.set(!1), a.set(void 0)), x = E, h(x), x;
  }, w = (E) => C(E(x)), k = (E) => {
    $ = E;
  }, V = (E) => {
    p = E.elevateNodesOnSelect ?? p;
  };
  return C(x), {
    subscribe: g,
    set: C,
    update: w,
    setDefaultOptions: k,
    setOptions: V
  };
}, Z0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Ee([]);
  let s = e, l = {};
  const u = (v) => {
    const g = l ? v.map((h) => ({ ...l, ...h })) : v;
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
  input: Pc,
  output: Hc,
  default: Ei,
  group: Nc
}, Bc = {
  straight: Dc,
  smoothstep: Lc,
  default: Mi,
  step: Ac
}, R0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? xi;
  xc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const V = To(s, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    g = ws(V, n, r, 0.5, 2, 0.1);
  }
  const h = Ee(!1), b = Ee(void 0), x = Ee(null), $ = Ee(null), p = Ee(500), C = Ee(500), w = Ee(0.5), k = Ee(2);
  return {
    flowId: Ee(null),
    nodes: q0(e, s, l, d, v, h, b, x, $, p, C, w, k),
    nodeLookup: Xt(s),
    parentLookup: Xt(l),
    edgeLookup: Xt(c),
    visibleNodes: Xt([]),
    edges: Z0(t, u, c),
    visibleEdges: Xt([]),
    connectionLookup: Xt(u),
    width: p,
    height: C,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: Ee(d),
    nodeDragThreshold: Ee(1),
    nodeExtent: Ee(v),
    translateExtent: Ee(xi),
    autoPanOnNodeDrag: Ee(!0),
    autoPanOnConnect: Ee(!0),
    fitViewQueued: h,
    fitViewOptions: b,
    fitViewResolver: x,
    panZoom: $,
    snapGrid: Ee(null),
    dragging: Ee(!1),
    selectionRect: Ee(null),
    selectionKeyPressed: Ee(!1),
    multiselectionKeyPressed: Ee(!1),
    deleteKeyPressed: Ee(!1),
    panActivationKeyPressed: Ee(!1),
    zoomActivationKeyPressed: Ee(!1),
    selectionRectMode: Ee(null),
    selectionMode: Ee(bi.Partial),
    nodeTypes: Ee(Ic),
    edgeTypes: Ee(Bc),
    viewport: Ee(g),
    connectionMode: Ee(fr.Strict),
    domNode: Ee(null),
    connection: Xt(La),
    connectionLineType: Ee(Mr.Bezier),
    connectionRadius: Ee(20),
    isValidConnection: Ee(() => !0),
    nodesDraggable: Ee(!0),
    nodesConnectable: Ee(!0),
    elementsSelectable: Ee(!0),
    selectNodesOnDrag: Ee(!0),
    markers: Xt([]),
    defaultMarkerColor: Ee("#b1b1b7"),
    lib: Xt("svelte"),
    onlyRenderVisibleElements: Ee(!1),
    onerror: Ee(Ih),
    ondelete: Ee(void 0),
    onedgecreate: Ee(void 0),
    onconnect: Ee(void 0),
    onconnectstart: Ee(void 0),
    onconnectend: Ee(void 0),
    onbeforedelete: Ee(void 0),
    nodesInitialized: Ee(!1),
    edgesInitialized: Ee(!1),
    viewportInitialized: Ee(!1),
    initialized: Xt(!1)
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
    return n ? cc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const Ji = Symbol();
function qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
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
      ...Ic,
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
    const S = F(s.edges);
    s.edges.set(Jh(_, S));
  }
  const d = (_, S = !1) => {
    var N;
    const H = F(s.nodeLookup);
    for (const [P, A] of _) {
      const R = (N = H.get(P)) == null ? void 0 : N.internals.userNode;
      R && (R.position = A.position, R.dragging = S);
    }
    s.nodes.update((P) => P);
  };
  function v(_) {
    var S, N, H;
    const P = F(s.nodeLookup), A = F(s.parentLookup), { changes: R, updatedInternals: W } = c0(_, P, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (W) {
      a0(P, A, { nodeOrigin: i, nodeExtent: a });
      for (const Q of R) {
        const G = (S = P.get(Q.id)) == null ? void 0 : S.internals.userNode;
        if (G)
          switch (Q.type) {
            case "dimensions": {
              const X = { ...G.measured, ...Q.dimensions };
              Q.setAttributes && (G.width = ((N = Q.dimensions) == null ? void 0 : N.width) ?? G.width, G.height = ((H = Q.dimensions) == null ? void 0 : H.height) ?? G.height), G.measured = X;
              break;
            }
            case "position":
              G.position = Q.position ?? G.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const S = F(s.fitViewResolver) ?? Rh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(S), s.nodes.set(F(s.nodes)), S.promise;
  }
  function h(_, S) {
    const N = F(s.panZoom);
    return N ? N.scaleBy(_, S) : Promise.resolve(!1);
  }
  function b(_) {
    return h(1.2, _);
  }
  function x(_) {
    return h(1 / 1.2, _);
  }
  function $(_) {
    const S = F(s.panZoom);
    S && (S.setScaleExtent([_, F(s.maxZoom)]), s.minZoom.set(_));
  }
  function p(_) {
    const S = F(s.panZoom);
    S && (S.setScaleExtent([F(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const S = F(s.panZoom);
    S && (S.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function w(_) {
    let S = !1;
    return _.forEach((N) => {
      N.selected && (N.selected = !1, S = !0);
    }), S;
  }
  function k(_) {
    var S;
    (S = F(s.panZoom)) == null || S.setClickDistance(_);
  }
  function V(_) {
    w((_ == null ? void 0 : _.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), w((_ == null ? void 0 : _.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var S;
    if (_) {
      const N = F(s.nodes), H = F(s.edges), P = N.filter((Q) => Q.selected), A = H.filter((Q) => Q.selected), { nodes: R, edges: W } = await dc({
        nodesToRemove: P,
        edgesToRemove: A,
        nodes: N,
        edges: H,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (R.length || W.length) && (s.nodes.update((Q) => Q.filter((G) => !R.some((X) => X.id === G.id))), s.edges.update((Q) => Q.filter((G) => !W.some((X) => X.id === G.id))), (S = F(s.ondelete)) == null || S({
        nodes: R,
        edges: W
      }));
    }
  });
  function E(_) {
    const S = F(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((H) => {
      const P = _.includes(H.id), A = S && H.selected || P;
      return H.selected = A, H;
    })), S || s.edges.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function T(_) {
    const S = F(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((H) => {
      const P = _.includes(H.id), A = S && H.selected || P;
      return H.selected = A, H;
    })), S || s.nodes.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function O(_) {
    var S;
    const N = (S = F(s.nodes)) == null ? void 0 : S.find((H) => H.id === _);
    if (!N) {
      console.warn("012", Ar.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && F(s.multiselectionKeyPressed) && V({ nodes: [N], edges: [] }) : E([_]);
  }
  function D(_) {
    const S = F(s.viewport);
    return d0({
      delta: _,
      panZoom: F(s.panZoom),
      transform: [S.x, S.y, S.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const I = Ee(La), z = (_) => {
    I.set({ ..._ });
  };
  function q() {
    I.set(La);
  }
  function M() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), q();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: Y0(s),
    visibleNodes: K0(s),
    connection: Wn([I, s.viewport], ([_, S]) => _.inProgress ? {
      ..._,
      to: Oo(_.to, [S.x, S.y, S.zoom])
    } : { ..._ }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([_, S, N]) => r0(_, { defaultColor: S, id: N })),
    initialized: (() => {
      let _ = !1;
      const S = F(s.nodes).length, N = F(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, P, A]) => _ || (S === 0 ? _ = A : N === 0 ? _ = A && H : _ = A && H && P, _));
    })(),
    // actions
    syncNodeStores: (_) => A0(s.nodes, _),
    syncEdgeStores: (_) => I0(s.edges, _),
    syncViewport: (_) => B0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: b,
    zoomOut: x,
    fitView: (_) => g(_),
    setMinZoom: $,
    setMaxZoom: p,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: V,
    addSelectedNodes: E,
    addSelectedEdges: T,
    handleNodeSelection: O,
    panBy: D,
    updateConnection: z,
    cancelConnection: q,
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
  const s = qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
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
var X0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const j0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  ve(t, !1), Ue(e, j0);
  const [n, r] = nt(), o = () => ne(H, "$panActivationKeyPressed", n), i = () => ne(q, "$minZoom", n), a = () => ne(M, "$maxZoom", n), s = () => ne(P, "$zoomActivationKeyPressed", n), l = () => ne(z, "$selectionRect", n), u = () => ne(S, "$translateExtent", n), c = () => ne(N, "$lib", n), d = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie();
  let h = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), p = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), V = y(t, "zoomOnPinch", 12), E = y(t, "panOnDrag", 12), T = y(t, "panOnScroll", 12), O = y(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: I,
    selectionRect: z,
    minZoom: q,
    maxZoom: M,
    dragging: _,
    translateExtent: S,
    lib: N,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: P,
    viewportInitialized: A
  } = Xe(), R = (X) => D.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  en(() => {
    vi(A, !0);
  }), he(() => te(h()), () => {
    U(d, h() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), te(E())),
    () => {
      U(v, o() || E());
    }
  ), he(
    () => (o(), te(T())),
    () => {
      U(g, o() || T());
    }
  ), yt(), Ie();
  var W = X0(), Q = Y(W);
  bt(Q, t, "default", {}), Z(W), xt(W, (X, me) => Nl == null ? void 0 : Nl(X, me), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: _,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: V(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Xn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: O(),
    onTransformChange: R
  })), L(e, W);
  var G = ge({
    get initialViewport() {
      return h();
    },
    set initialViewport(X) {
      h(X), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), m();
    },
    get onMove() {
      return x();
    },
    set onMove(X) {
      x(X), m();
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
      return E();
    },
    set panOnDrag(X) {
      E(X), m();
    },
    get panOnScroll() {
      return T();
    },
    set panOnScroll(X) {
      T(X), m();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(X) {
      O(X), m();
    }
  });
  return r(), G;
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
function Ol(e) {
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
function Rc(e, t) {
  ve(t, !1), Ue(e, G0);
  const [n, r] = nt(), o = () => ne(_, "$panActivationKeyPressed", n), i = () => ne(q, "$selectionKeyPressed", n), a = () => ne(I, "$selectionRect", n), s = () => ne(D, "$elementsSelectable", n), l = () => ne(z, "$selectionRectMode", n), u = () => ne(N, "$connection", n), c = () => ne(E, "$edges", n), d = () => ne(V, "$nodeLookup", n), v = () => ne(T, "$viewport", n), g = () => ne(M, "$selectionMode", n), h = () => ne(O, "$dragging", n), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie();
  let p = y(t, "panOnDrag", 12, void 0), C = y(t, "selectionOnDrag", 12, void 0);
  const w = Ri(), {
    nodes: k,
    nodeLookup: V,
    edges: E,
    viewport: T,
    dragging: O,
    elementsSelectable: D,
    selectionRect: I,
    selectionRectMode: z,
    selectionKeyPressed: q,
    selectionMode: M,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: S,
    connection: N
  } = Xe();
  let H = /* @__PURE__ */ ie(), P = null, A = [], R = !1;
  function W(ce) {
    if (R || u().inProgress) {
      R = !1;
      return;
    }
    w("paneclick", { event: ce }), S(), z.set(null);
  }
  function Q(ce) {
    var J, Ve;
    if (P = f(H).getBoundingClientRect(), !D || !f(x) || ce.button !== 0 || ce.target !== f(H) || !P)
      return;
    (Ve = (J = ce.target) == null ? void 0 : J.setPointerCapture) == null || Ve.call(J, ce.pointerId);
    const { x: j, y: Ce } = On(ce, P);
    S(), I.set({
      width: 0,
      height: 0,
      startX: j,
      startY: Ce,
      x: j,
      y: Ce
    });
  }
  function G(ce) {
    if (!f(x) || !P || !a())
      return;
    R = !0;
    const J = On(ce, P), Ve = a().startX ?? 0, j = a().startY ?? 0, Ce = {
      ...a(),
      x: J.x < Ve ? J.x : Ve,
      y: J.y < j ? J.y : j,
      width: Math.abs(J.x - Ve),
      height: Math.abs(J.y - j)
    }, Ne = A.map((le) => le.id), ze = Da(A, c()).map((le) => le.id);
    A = cc(
      d(),
      Ce,
      [
        v().x,
        v().y,
        v().zoom
      ],
      g() === bi.Partial,
      !0
    );
    const ae = Da(A, c()).map((le) => le.id), de = A.map((le) => le.id);
    (Ne.length !== de.length || de.some((le) => !Ne.includes(le))) && k.update((le) => le.map(Ol(de))), (ze.length !== ae.length || ae.some((le) => !ze.includes(le))) && E.update((le) => le.map(Ol(ae))), z.set("user"), I.set(Ce);
  }
  function X(ce) {
    var J, Ve;
    ce.button === 0 && ((Ve = (J = ce.target) == null ? void 0 : J.releasePointerCapture) == null || Ve.call(J, ce.pointerId), !f(x) && l() === "user" && ce.target === f(H) && (W == null || W(ce)), I.set(null), A.length > 0 && vi(z, "nodes"), i() && (R = !1));
  }
  const me = (ce) => {
    var J;
    if (Array.isArray(f(b)) && (J = f(b)) != null && J.includes(2)) {
      ce.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ce });
  };
  he(
    () => (o(), te(p())),
    () => {
      U(b, o() || p());
    }
  ), he(
    () => (i(), a(), te(C()), f(b)),
    () => {
      U(x, i() || a() || C() && f(b) !== !0);
    }
  ), he(
    () => (s(), f(x), l()),
    () => {
      U($, s() && (f(x) || l() === "user"));
    }
  ), yt(), Ie();
  var oe = F0(), pe = /* @__PURE__ */ Pe(() => f($) ? void 0 : Tl(W, f(H))), se = /* @__PURE__ */ Pe(() => Tl(me, f(H)));
  let Se;
  var we = Y(oe);
  bt(we, t, "default", {}), Z(oe), _n(oe, (ce) => U(H, ce), () => f(H)), ke(
    (ce) => Se = $t(oe, 1, "svelte-flow__pane svelte-1esy7hx", null, Se, ce),
    [
      () => ({
        draggable: p() === !0 || Array.isArray(p()) && p().includes(0),
        dragging: h(),
        selection: f(x)
      })
    ],
    $e
  ), tt("click", oe, function(...ce) {
    var J;
    (J = f(pe)) == null || J.apply(this, ce);
  }), tt("pointerdown", oe, function(...ce) {
    var J;
    (J = f($) ? Q : void 0) == null || J.apply(this, ce);
  }), tt("pointermove", oe, function(...ce) {
    var J;
    (J = f($) ? G : void 0) == null || J.apply(this, ce);
  }), tt("pointerup", oe, function(...ce) {
    var J;
    (J = f($) ? X : void 0) == null || J.apply(this, ce);
  }), tt("contextmenu", oe, function(...ce) {
    var J;
    (J = f(se)) == null || J.apply(this, ce);
  }), L(e, oe);
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
ue(Rc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var U0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const J0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Yc(e, t) {
  ve(t, !1), Ue(e, J0);
  const [n, r] = nt(), o = () => ne(i, "$viewport", n), { viewport: i } = Xe();
  Ie();
  var a = U0(), s = Y(a);
  bt(s, t, "default", {}), Z(a), ke(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, a), ge(), r();
}
ue(Yc, {}, ["default"], [], !0);
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
function Kc(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(oe, "$nodeTypes", n), i = () => ne(He, "$elementsSelectable", n), a = () => ne(ce, "$nodesDraggable", n), s = () => ne(Ce, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), h = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), p = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), V = y(t, "resizeObserver", 13, null), E = y(t, "style", 13, void 0), T = y(t, "type", 13, "default"), O = y(t, "isParent", 13, !1), D = y(t, "positionX", 13), I = y(t, "positionY", 13), z = y(t, "sourcePosition", 13, void 0), q = y(t, "targetPosition", 13, void 0), M = y(t, "zIndex", 13), _ = y(t, "measuredWidth", 13, void 0), S = y(t, "measuredHeight", 13, void 0), N = y(t, "initialWidth", 13, void 0), H = y(t, "initialHeight", 13, void 0), P = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), R = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), Q = y(t, "parentId", 13, void 0), G = y(t, "nodeClickDistance", 13, void 0), X = y(t, "class", 13, "");
  const me = Xe(), {
    nodeTypes: oe,
    nodeDragThreshold: pe,
    selectNodesOnDrag: se,
    handleNodeSelection: Se,
    updateNodeInternals: we,
    elementsSelectable: He,
    nodesDraggable: ce
  } = me;
  let J = /* @__PURE__ */ ie(void 0, !0), Ve = /* @__PURE__ */ ie(null, !0);
  const j = Ri(), Ce = Ee(p());
  let Ne = /* @__PURE__ */ ie(void 0, !0), ze = /* @__PURE__ */ ie(void 0, !0), ae = /* @__PURE__ */ ie(void 0, !0);
  Or("svelteflow__node_id", g()), Or("svelteflow__node_connectable", Ce), us(() => {
    var ee;
    f(Ve) && ((ee = V()) == null || ee.unobserve(f(Ve)));
  });
  function de(ee) {
    $() && (!F(se) || !x() || F(pe) > 0) && Se(g()), j("nodeclick", { node: v().internals.userNode, event: ee });
  }
  he(() => te(T()), () => {
    U(l, T() || "default");
  }), he(() => (o(), f(l)), () => {
    U(u, !!o()[f(l)]);
  }), he(
    () => (o(), f(l), Ei),
    () => {
      U(c, o()[f(l)] || Ei);
    }
  ), he(
    () => (f(u), te(T())),
    () => {
      f(u) || console.warn("003", Ar.error003(T()));
    }
  ), he(
    () => (te(P()), te(A()), te(N()), te(H()), te(_()), te(S())),
    () => {
      U(d, Q0({
        width: P(),
        height: A(),
        initialWidth: N(),
        initialHeight: H(),
        measuredWidth: _(),
        measuredHeight: S()
      }));
    }
  ), he(() => te(p()), () => {
    Ce.set(!!p());
  }), he(
    () => (f(Ne), f(l), f(ze), te(z()), f(ae), te(q()), te(g()), f(J)),
    () => {
      (f(Ne) && f(l) !== f(Ne) || f(ze) && z() !== f(ze) || f(ae) && q() !== f(ae)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(J),
            force: !0
          }
        ]
      ]))), U(Ne, f(l)), U(ze, z()), U(ae, q());
    }
  ), he(
    () => (te(V()), f(J), f(Ve), te(W())),
    () => {
      V() && (f(J) !== f(Ve) || !W()) && (f(Ve) && V().unobserve(f(Ve)), f(J) && V().observe(f(J)), U(Ve, f(J)));
    }
  ), yt(), Ie(!0);
  var le = Je(), be = xe(le);
  {
    var et = (ee) => {
      var Re = e2();
      let fe, tn;
      var nn = Y(Re);
      const hn = /* @__PURE__ */ $e(() => b() ?? !1), De = /* @__PURE__ */ $e(() => $() ?? i() ?? !0), rt = /* @__PURE__ */ $e(() => C() ?? !0), Ze = /* @__PURE__ */ $e(() => x() ?? a() ?? !0);
      Su(nn, () => f(c), (Be, ot) => {
        ot(Be, {
          get data() {
            return h();
          },
          get id() {
            return g();
          },
          get selected() {
            return f(hn);
          },
          get selectable() {
            return f(De);
          },
          get deletable() {
            return f(rt);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return q();
          },
          get zIndex() {
            return M();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Ze);
          },
          get dragHandle() {
            return R();
          },
          get parentId() {
            return Q();
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
      }), Z(Re), xt(Re, (Be, ot) => Vi == null ? void 0 : Vi(Be, ot), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: R(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Se,
        onDrag: (Be, ot, rn, Wt) => {
          j("nodedrag", { event: Be, targetNode: rn, nodes: Wt });
        },
        onDragStart: (Be, ot, rn, Wt) => {
          j("nodedragstart", { event: Be, targetNode: rn, nodes: Wt });
        },
        onDragStop: (Be, ot, rn, Wt) => {
          j("nodedragstop", { event: Be, targetNode: rn, nodes: Wt });
        },
        store: me
      })), _n(Re, (Be) => U(J, Be), () => f(J)), Bt(() => tt("click", Re, de)), Bt(() => tt("mouseenter", Re, (Be) => j("nodemouseenter", { node: v(), event: Be }))), Bt(() => tt("mouseleave", Re, (Be) => j("nodemouseleave", { node: v(), event: Be }))), Bt(() => tt("mousemove", Re, (Be) => j("nodemousemove", { node: v(), event: Be }))), Bt(() => tt("contextmenu", Re, (Be) => j("nodecontextmenu", { node: v(), event: Be }))), ke(
        (Be, ot) => {
          _e(Re, "data-id", g()), fe = $t(Re, 1, Be, null, fe, ot), tn = ft(Re, `${E() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, tn, {
            "z-index": M(),
            transform: `translate(${D() ?? ""}px, ${I() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => vn(Vt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            X()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: p(),
            selectable: $(),
            nopan: x(),
            parent: O()
          })
        ],
        $e
      ), L(ee, Re);
    };
    ye(be, (ee) => {
      w() || ee(et);
    });
  }
  L(e, le);
  var at = ge({
    get node() {
      return v();
    },
    set node(ee) {
      v(ee), m();
    },
    get id() {
      return g();
    },
    set id(ee) {
      g(ee), m();
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
      return $();
    },
    set selectable(ee) {
      $(ee), m();
    },
    get connectable() {
      return p();
    },
    set connectable(ee) {
      p(ee), m();
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
      return V();
    },
    set resizeObserver(ee) {
      V(ee), m();
    },
    get style() {
      return E();
    },
    set style(ee) {
      E(ee), m();
    },
    get type() {
      return T();
    },
    set type(ee) {
      T(ee), m();
    },
    get isParent() {
      return O();
    },
    set isParent(ee) {
      O(ee), m();
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
      return z();
    },
    set sourcePosition(ee) {
      z(ee), m();
    },
    get targetPosition() {
      return q();
    },
    set targetPosition(ee) {
      q(ee), m();
    },
    get zIndex() {
      return M();
    },
    set zIndex(ee) {
      M(ee), m();
    },
    get measuredWidth() {
      return _();
    },
    set measuredWidth(ee) {
      _(ee), m();
    },
    get measuredHeight() {
      return S();
    },
    set measuredHeight(ee) {
      S(ee), m();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(ee) {
      N(ee), m();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(ee) {
      H(ee), m();
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
      return R();
    },
    set dragHandle(ee) {
      R(ee), m();
    },
    get initialized() {
      return W();
    },
    set initialized(ee) {
      W(ee), m();
    },
    get parentId() {
      return Q();
    },
    set parentId(ee) {
      Q(ee), m();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(ee) {
      G(ee), m();
    },
    get class() {
      return X();
    },
    set class(ee) {
      X(ee), m();
    }
  });
  return r(), at;
}
ue(
  Kc,
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
function Wc(e, t) {
  ve(t, !1), Ue(e, n2);
  const [n, r] = nt(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(g, "$elementsSelectable", n), s = () => ne(v, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: h,
    parentLookup: b
  } = Xe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const V = k.target.getAttribute("data-id");
      w.set(V, { id: V, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  us(() => {
    x == null || x.disconnect();
  }), Ie();
  var $ = t2();
  Mt($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ $e(() => !!f(w).selected), V = /* @__PURE__ */ $e(() => !!f(w).hidden), E = /* @__PURE__ */ $e(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), T = /* @__PURE__ */ $e(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), O = /* @__PURE__ */ $e(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), D = /* @__PURE__ */ $e(() => f(w).deletable ?? !0), I = /* @__PURE__ */ $e(() => l().has(f(w).id)), z = /* @__PURE__ */ $e(() => f(w).type ?? "default"), q = /* @__PURE__ */ $e(() => f(w).internals.z ?? 0), M = /* @__PURE__ */ $e(() => pc(f(w)));
    Kc(C, {
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
        return f(E);
      },
      get selectable() {
        return f(T);
      },
      get connectable() {
        return f(O);
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
        return f(z);
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
        return f(q);
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
  }), Z($), L(e, $);
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
ue(Wc, { nodeClickDistance: {} }, [], [], !0);
var r2 = /* @__PURE__ */ Me('<svg><g role="img"><!></g></svg>');
function Xc(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(X, "$edgeTypes", n), i = () => ne(me, "$flowId", n), a = () => ne(oe, "$elementsSelectable", n), s = () => ne(G, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0), v = /* @__PURE__ */ ie(void 0, !0);
  let g = y(t, "id", 13), h = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), p = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), V = y(t, "selectable", 13, void 0), E = y(t, "deletable", 13, void 0), T = y(t, "hidden", 13, !1), O = y(t, "label", 13, void 0), D = y(t, "labelStyle", 13, void 0), I = y(t, "markerStart", 13, void 0), z = y(t, "markerEnd", 13, void 0), q = y(t, "sourceHandle", 13, void 0), M = y(t, "targetHandle", 13, void 0), _ = y(t, "sourceX", 13), S = y(t, "sourceY", 13), N = y(t, "targetX", 13), H = y(t, "targetY", 13), P = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), R = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), Q = y(t, "class", 13, "");
  Or("svelteflow__edge_id", g());
  const {
    edgeLookup: G,
    edgeTypes: X,
    flowId: me,
    elementsSelectable: oe
  } = Xe(), pe = Ri(), se = Oc();
  function Se(j) {
    const Ce = s().get(g());
    Ce && (se(g()), pe("edgeclick", { event: j, edge: Ce }));
  }
  function we(j, Ce) {
    const Ne = s().get(g());
    Ne && pe(Ce, { event: j, edge: Ne });
  }
  he(() => te(h()), () => {
    U(l, h() || "default");
  }), he(
    () => (o(), f(l), Mi),
    () => {
      U(u, o()[f(l)] || Mi);
    }
  ), he(
    () => (te(I()), i()),
    () => {
      U(c, I() ? `url('#${Ba(I(), i())}')` : void 0);
    }
  ), he(
    () => (te(z()), i()),
    () => {
      U(d, z() ? `url('#${Ba(z(), i())}')` : void 0);
    }
  ), he(
    () => (te(V()), a()),
    () => {
      U(v, V() ?? a());
    }
  ), yt(), Ie(!0);
  var He = Je(), ce = xe(He);
  {
    var J = (j) => {
      var Ce = r2();
      let Ne;
      var ze = Y(Ce);
      let ae;
      var de = Y(ze);
      const le = /* @__PURE__ */ $e(() => E() ?? !0);
      Su(de, () => f(u), (be, et) => {
        et(be, {
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
            return S();
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
            return O();
          },
          get labelStyle() {
            return D();
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
            return f(v);
          },
          get deletable() {
            return f(le);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return q();
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
      }), Z(ze), Z(Ce), ke(
        (be, et) => {
          Ne = ft(Ce, "", Ne, { "z-index": C() }), ae = $t(ze, 0, be, null, ae, et), _e(ze, "data-id", g()), _e(ze, "aria-label", R() === null ? void 0 : R() ? R() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => vn(Vt(["svelte-flow__edge", Q()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        $e
      ), tt("click", ze, Se), tt("contextmenu", ze, (be) => {
        we(be, "edgecontextmenu");
      }), tt("mouseenter", ze, (be) => {
        we(be, "edgemouseenter");
      }), tt("mouseleave", ze, (be) => {
        we(be, "edgemouseleave");
      }), L(j, Ce);
    };
    ye(ce, (j) => {
      T() || j(J);
    });
  }
  L(e, He);
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
      return E();
    },
    set deletable(j) {
      E(j), m();
    },
    get hidden() {
      return T();
    },
    set hidden(j) {
      T(j), m();
    },
    get label() {
      return O();
    },
    set label(j) {
      O(j), m();
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
      return z();
    },
    set markerEnd(j) {
      z(j), m();
    },
    get sourceHandle() {
      return q();
    },
    set sourceHandle(j) {
      q(j), m();
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
      return S();
    },
    set sourceY(j) {
      S(j), m();
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
      return R();
    },
    set ariaLabel(j) {
      R(j), m();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(j) {
      W(j), m();
    },
    get class() {
      return Q();
    },
    set class(j) {
      Q(j), m();
    }
  });
  return r(), Ve;
}
ue(
  Xc,
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
  }), Ie(), ge({
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
var o2 = /* @__PURE__ */ Me("<defs></defs>");
function Fc(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(i, "$markers", n), { markers: i } = Xe();
  Ie();
  var a = o2();
  Mt(a, 5, o, (s) => s.id, (s, l) => {
    Gc(s, lt(() => f(l)));
  }), Z(a), L(e, a), ge(), r();
}
ue(Fc, {}, [], [], !0);
var i2 = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), a2 = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), s2 = /* @__PURE__ */ Me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Gc(e, t) {
  ve(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ie();
  var c = s2(), d = Y(c);
  {
    var v = (h) => {
      var b = i2();
      ke(() => {
        _e(b, "stroke", l()), _e(b, "stroke-width", u());
      }), L(h, b);
    }, g = (h, b) => {
      {
        var x = ($) => {
          var p = a2();
          ke(() => {
            _e(p, "stroke", l()), _e(p, "stroke-width", u()), _e(p, "fill", l());
          }), L($, p);
        };
        ye(
          h,
          ($) => {
            r() === $o.ArrowClosed && $(x);
          },
          b
        );
      }
    };
    ye(d, (h) => {
      r() === $o.Arrow ? h(v) : h(g, !1);
    });
  }
  return Z(c), ke(() => {
    _e(c, "id", n()), _e(c, "markerWidth", `${o()}`), _e(c, "markerHeight", `${i()}`), _e(c, "markerUnits", a()), _e(c, "orient", s());
  }), L(e, c), ge({
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
var l2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Uc(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Xe();
  en(() => {
    a() && u(a());
  }), Ie();
  var d = l2(), v = Y(d), g = Y(v);
  Fc(g, {}), Z(v);
  var h = B(v, 2);
  Mt(h, 1, o, (p) => p.id, (p, C) => {
    const w = /* @__PURE__ */ $e(() => f(C).selectable ?? i()), k = /* @__PURE__ */ $e(() => f(C).type || "default");
    Xc(p, {
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
  var b = B(h, 2);
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
  Z(d), L(e, d);
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
ue(Uc, { defaultEdgeOptions: {} }, [], [], !0);
var u2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const c2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cs(e, t) {
  ve(t, !1), Ue(e, c2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Je(), l = xe(s);
  {
    var u = (c) => {
      var d = u2();
      let v;
      ke(() => v = ft(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), L(c, d);
    };
    ye(l, (c) => {
      a() && c(u);
    });
  }
  return L(e, s), ge({
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
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Xe();
  Ie();
  const l = /* @__PURE__ */ $e(() => !!(o() && i() === "user")), u = /* @__PURE__ */ $e(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ $e(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ $e(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ $e(() => {
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
  }), ge(), r();
}
ue(Jc, {}, [], [], !0);
var d2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const f2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  ve(t, !1), Ue(e, f2);
  const [n, r] = nt(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = Xe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ri();
  let v = /* @__PURE__ */ ie(null);
  function g(p) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: p });
  }
  function h(p) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: p });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (U(v, To(i(), { filter: (p) => !!p.selected })), a());
    }
  ), yt(), Ie();
  var b = Je(), x = xe(b);
  {
    var $ = (p) => {
      var C = d2(), w = Y(C);
      Cs(w, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), xt(C, (k, V) => Vi == null ? void 0 : Vi(k, V), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, V, E, T) => {
          d("nodedrag", { event: k, targetNode: null, nodes: T });
        },
        onDragStart: (k, V, E, T) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: T });
        },
        onDragStop: (k, V, E, T) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: T });
        }
      })), Bt(() => tt("contextmenu", C, g)), Bt(() => tt("click", C, h)), Bt(() => tt("keyup", C, () => {
      })), ke(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), L(p, C);
    };
    ye(x, (p) => {
      o() === "nodes" && f(v) && Hn(f(v).x) && Hn(f(v).y) && p($);
    });
  }
  L(e, b), ge(), r();
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
      }, { modifier: d, key: v, callback: g, preventDefault: h, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          h && a.preventDefault();
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
  ve(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => _i() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => _i() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = Xe();
  function g(p) {
    return p !== null && typeof p == "object";
  }
  function h(p) {
    return g(p) ? p.modifier || [] : [];
  }
  function b(p) {
    return p == null ? "" : g(p) ? p.key : p;
  }
  function x(p, C) {
    return (Array.isArray(p) ? p : [p]).map((w) => {
      const k = b(w);
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
  return Ie(), tt("blur", Nt, $), tt("contextmenu", Nt, $), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Wh(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), xt(Nt, (p, C) => dt == null ? void 0 : dt(p, C), () => ({
    trigger: x(a(), () => d.set(!1)),
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
var v2 = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__connection-path"></path>'), g2 = /* @__PURE__ */ Me('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(g, "$connection", n), i = () => ne(h, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: h
  } = Xe();
  let b = /* @__PURE__ */ ie(null);
  he(
    () => (o(), te(c()), i(), f(b), Ia),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: V, toPosition: E } = o(), T = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: V,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case Mr.Bezier:
            ((O) => U(b, O[0]))(yc(T));
            break;
          case Mr.Step:
            ((O) => U(b, O[0]))(ki({ ...T, borderRadius: 0 }));
            break;
          case Mr.SmoothStep:
            ((O) => U(b, O[0]))(ki(T));
            break;
          default:
            ((O) => U(b, O[0]))(Ia(T));
        }
      }
    }
  ), yt(), Ie();
  var x = Je(), $ = xe(x);
  {
    var p = (w) => {
      var k = g2(), V = Y(k), E = Y(V);
      bt(E, t, "connectionLine", {});
      var T = B(E);
      {
        var O = (D) => {
          var I = v2();
          ke(() => {
            _e(I, "d", f(b)), ft(I, u());
          }), L(D, I);
        };
        ye(T, (D) => {
          c() || D(O);
        });
      }
      Z(V), Z(k), ke(
        (D) => {
          _e(k, "width", a()), _e(k, "height", s()), ft(k, l()), $t(V, 0, D);
        },
        [
          () => vn(Vt([
            "svelte-flow__connection",
            Nh(o().isValid)
          ]))
        ],
        $e
      ), L(w, k);
    };
    ye($, (w) => {
      o().inProgress && w(p);
    });
  }
  L(e, x);
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
var p2 = /* @__PURE__ */ re("<div><!></div>");
function Lo(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  ve(t, !1);
  const [o, i] = nt(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ ie();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Xe();
  he(() => te(l()), () => {
    U(s, `${l()}`.split("-"));
  }), yt(), Ie();
  var v = p2();
  let g;
  var h = Y(v);
  bt(h, t, "default", {}), Z(v), ke(
    (x) => g = Yt(v, g, {
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
    $e
  ), L(e, v);
  var b = ge({
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
ue(Lo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var h2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  ve(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ie();
  var o = Je(), i = xe(o);
  {
    var a = (s) => {
      Lo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = h2();
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ye(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return L(e, o), ge({
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
function zl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const m2 = (e) => Object.keys(e);
function Ll(e, t) {
  m2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function y2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function w2(e = "light") {
  return Xt("light", (t) => {
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
var x2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), b2 = /* @__PURE__ */ re("<!> <!>", 1), $2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const C2 = {
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
  ve(t, !1), Ue(e, C2);
  const [i, a] = nt(), s = () => ne(C(), "$viewport", i), l = () => ne(ra, "$initialized", i), u = () => ne(f(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), p = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), V = y(t, "selectionKey", 12, void 0), E = y(t, "selectionMode", 12, void 0), T = y(t, "panActivationKey", 12, void 0), O = y(t, "multiSelectionKey", 12, void 0), D = y(t, "zoomActivationKey", 12, void 0), I = y(t, "nodesDraggable", 12, void 0), z = y(t, "nodesConnectable", 12, void 0), q = y(t, "nodeDragThreshold", 12, void 0), M = y(t, "elementsSelectable", 12, void 0), _ = y(t, "snapGrid", 12, void 0), S = y(t, "deleteKey", 12, void 0), N = y(t, "connectionRadius", 12, void 0), H = y(t, "connectionLineType", 12, void 0), P = y(t, "connectionMode", 28, () => fr.Strict), A = y(t, "connectionLineStyle", 12, ""), R = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), Q = y(t, "onMove", 12, void 0), G = y(t, "onMoveEnd", 12, void 0), X = y(t, "isValidConnection", 12, void 0), me = y(t, "translateExtent", 12, void 0), oe = y(t, "nodeExtent", 12, void 0), pe = y(t, "onlyRenderVisibleElements", 12, void 0), se = y(t, "panOnScrollMode", 28, () => Xn.Free), Se = y(t, "preventScrolling", 12, !0), we = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), ce = y(t, "zoomOnPinch", 12, !0), J = y(t, "panOnScroll", 12, !1), Ve = y(t, "panOnDrag", 12, !0), j = y(t, "selectionOnDrag", 12, void 0), Ce = y(t, "autoPanOnConnect", 12, !0), Ne = y(t, "autoPanOnNodeDrag", 12, !0), ze = y(t, "onerror", 12, void 0), ae = y(t, "ondelete", 12, void 0), de = y(t, "onedgecreate", 12, void 0), le = y(t, "attributionPosition", 12, void 0), be = y(t, "proOptions", 12, void 0), et = y(t, "defaultEdgeOptions", 12, void 0), at = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Re = y(t, "colorMode", 12, "light"), fe = y(t, "onconnect", 12, void 0), tn = y(t, "onconnectstart", 12, void 0), nn = y(t, "onconnectend", 12, void 0), hn = y(t, "onbeforedelete", 12, void 0), De = y(t, "oninit", 12, void 0), rt = y(t, "nodeOrigin", 12, void 0), Ze = y(t, "paneClickDistance", 12, 0), Be = y(t, "nodeClickDistance", 12, 0), ot = y(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = y(t, "style", 12, void 0), Wt = y(t, "class", 12, void 0), Ur = /* @__PURE__ */ ie(), Ct = /* @__PURE__ */ ie(), Pt = /* @__PURE__ */ ie();
  const wr = s() || p(), it = pf(Ji) ? Xe() : W0({
    nodes: F(v()),
    edges: F(g()),
    width: at(),
    height: ee(),
    fitView: h(),
    nodeOrigin: rt(),
    nodeExtent: oe()
  });
  en(() => (it.width.set(f(Ct)), it.height.set(f(Pt)), it.domNode.set(f(Ur)), it.syncNodeStores(v()), it.syncEdgeStores(g()), it.syncViewport(C()), h() !== void 0 && it.fitViewQueued.set(h()), b() && it.fitViewOptions.set(b()), zl(it, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: $(),
    translateExtent: me(),
    paneClickDistance: Ze()
  }), () => {
    it.reset();
  }));
  const { initialized: ra } = it;
  let Jr = /* @__PURE__ */ ie(!1);
  he(
    () => (f(Ct), f(Pt)),
    () => {
      f(Ct) !== void 0 && f(Pt) !== void 0 && (it.width.set(f(Ct)), it.height.set(f(Pt)));
    }
  ), he(
    () => (f(Jr), l(), te(De())),
    () => {
      var K;
      !f(Jr) && l() && ((K = De()) == null || K(), U(Jr, !0));
    }
  ), he(
    () => (te(d()), te(H()), te(N()), te(E()), te(_()), te(ot()), te(I()), te(z()), te(M()), te(pe()), te(X()), te(Ce()), te(Ne()), te(ze()), te(ae()), te(de()), te(P()), te(q()), te(fe()), te(tn()), te(nn()), te(hn()), te(rt()), Ll),
    () => {
      const K = {
        flowId: d(),
        connectionLineType: H(),
        connectionRadius: N(),
        selectionMode: E(),
        snapGrid: _(),
        defaultMarkerColor: ot(),
        nodesDraggable: I(),
        nodesConnectable: z(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: pe(),
        isValidConnection: X(),
        autoPanOnConnect: Ce(),
        autoPanOnNodeDrag: Ne(),
        onerror: ze(),
        ondelete: ae(),
        onedgecreate: de(),
        connectionMode: P(),
        nodeDragThreshold: q(),
        onconnect: fe(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: hn(),
        nodeOrigin: rt()
      };
      Ll(it, K);
    }
  ), he(
    () => (te(w()), te(k()), te(x()), te($()), te(me()), te(Ze())),
    () => {
      zl(it, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: $(),
        translateExtent: me(),
        paneClickDistance: Ze()
      });
    }
  ), he(
    () => te(Re()),
    () => {
      Wf(U(c, w2(Re())), "$colorModeClass", i);
    }
  ), yt(), Ie();
  var At = $2();
  let Bo;
  var qo = Y(At);
  ed(qo, {
    get selectionKey() {
      return V();
    },
    get deleteKey() {
      return S();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Zo = B(qo, 2);
  const oa = /* @__PURE__ */ $e(() => se() === void 0 ? Xn.Free : se()), Jd = /* @__PURE__ */ $e(() => Se() === void 0 ? !0 : Se()), Qd = /* @__PURE__ */ $e(() => we() === void 0 ? !0 : we()), e1 = /* @__PURE__ */ $e(() => He() === void 0 ? !0 : He()), t1 = /* @__PURE__ */ $e(() => ce() === void 0 ? !0 : ce()), n1 = /* @__PURE__ */ $e(() => J() === void 0 ? !1 : J()), r1 = /* @__PURE__ */ $e(() => Ve() === void 0 ? !0 : Ve()), o1 = /* @__PURE__ */ $e(() => Ze() === void 0 ? 0 : Ze());
  Zc(Zo, {
    initialViewport: wr,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return Q();
    },
    get onMoveEnd() {
      return G();
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
    children: (K, ox) => {
      const s1 = /* @__PURE__ */ $e(() => Ve() === void 0 ? !0 : Ve());
      Rc(K, {
        get panOnDrag() {
          return f(s1);
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
        children: (Qr, ix) => {
          var Ps = b2(), Hs = xe(Ps);
          Yc(Hs, {
            children: (u1, ax) => {
              var Ns = x2(), Ts = xe(Ns);
              Uc(Ts, {
                get defaultEdgeOptions() {
                  return et();
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
              var Os = B(Ts, 2);
              td(Os, {
                get containerStyle() {
                  return R();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ye, sx) => {
                    var Ls = Je(), d1 = xe(Ls);
                    bt(d1, t, "connectionLine", {}), L(Ye, Ls);
                  }
                }
              });
              var zs = B(Os, 6);
              Wc(zs, {
                get nodeClickDistance() {
                  return Be();
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
              var c1 = B(zs, 2);
              Qc(c1, {
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
              }), L(u1, Ns);
            },
            $$slots: { default: !0 }
          });
          var l1 = B(Hs, 2);
          Jc(l1, {}), L(Qr, Ps);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Vs = B(Zo, 2);
  nd(Vs, {
    get proOptions() {
      return be();
    },
    get position() {
      return le();
    }
  });
  var i1 = B(Vs, 2);
  bt(i1, t, "default", {}), Z(At), _n(At, (K) => U(Ur, K), () => f(Ur)), ke(
    (K) => Bo = Yt(
      At,
      Bo,
      {
        style: rn(),
        class: K,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Vt([
        "svelte-flow",
        Wt(),
        u()
      ])
    ],
    $e
  ), Fs(At, "clientWidth", (K) => U(Ct, K)), Fs(At, "clientHeight", (K) => U(Pt, K)), tt("dragover", At, function(K) {
    Ke.call(this, t, K);
  }), tt("drop", At, function(K) {
    Ke.call(this, t, K);
  }), L(e, At);
  var a1 = ge({
    get id() {
      return d();
    },
    set id(K) {
      d(K), m();
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
      return b();
    },
    set fitViewOptions(K) {
      b(K), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(K) {
      x(K), m();
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
      return E();
    },
    set selectionMode(K) {
      E(K), m();
    },
    get panActivationKey() {
      return T();
    },
    set panActivationKey(K) {
      T(K), m();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(K) {
      O(K), m();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(K) {
      D(K), m();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(K) {
      I(K), m();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(K) {
      z(K), m();
    },
    get nodeDragThreshold() {
      return q();
    },
    set nodeDragThreshold(K) {
      q(K), m();
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
      return S();
    },
    set deleteKey(K) {
      S(K), m();
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
      return R();
    },
    set connectionLineContainerStyle(K) {
      R(K), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(K) {
      W(K), m();
    },
    get onMove() {
      return Q();
    },
    set onMove(K) {
      Q(K), m();
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
      return me();
    },
    set translateExtent(K) {
      me(K), m();
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
      return se();
    },
    set panOnScrollMode(K) {
      se(K), m();
    },
    get preventScrolling() {
      return Se();
    },
    set preventScrolling(K) {
      Se(K), m();
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
      return J();
    },
    set panOnScroll(K) {
      J(K), m();
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
      return Ce();
    },
    set autoPanOnConnect(K) {
      Ce(K), m();
    },
    get autoPanOnNodeDrag() {
      return Ne();
    },
    set autoPanOnNodeDrag(K) {
      Ne(K), m();
    },
    get onerror() {
      return ze();
    },
    set onerror(K) {
      ze(K), m();
    },
    get ondelete() {
      return ae();
    },
    set ondelete(K) {
      ae(K), m();
    },
    get onedgecreate() {
      return de();
    },
    set onedgecreate(K) {
      de(K), m();
    },
    get attributionPosition() {
      return le();
    },
    set attributionPosition(K) {
      le(K), m();
    },
    get proOptions() {
      return be();
    },
    set proOptions(K) {
      be(K), m();
    },
    get defaultEdgeOptions() {
      return et();
    },
    set defaultEdgeOptions(K) {
      et(K), m();
    },
    get width() {
      return at();
    },
    set width(K) {
      at(K), m();
    },
    get height() {
      return ee();
    },
    set height(K) {
      ee(K), m();
    },
    get colorMode() {
      return Re();
    },
    set colorMode(K) {
      Re(K), m();
    },
    get onconnect() {
      return fe();
    },
    set onconnect(K) {
      fe(K), m();
    },
    get onconnectstart() {
      return tn();
    },
    set onconnectstart(K) {
      tn(K), m();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(K) {
      nn(K), m();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(K) {
      hn(K), m();
    },
    get oninit() {
      return De();
    },
    set oninit(K) {
      De(K), m();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(K) {
      rt(K), m();
    },
    get paneClickDistance() {
      return Ze();
    },
    set paneClickDistance(K) {
      Ze(K), m();
    },
    get nodeClickDistance() {
      return Be();
    },
    set nodeClickDistance(K) {
      Be(K), m();
    },
    get defaultMarkerColor() {
      return ot();
    },
    set defaultMarkerColor(K) {
      ot(K), m();
    },
    get style() {
      return rn();
    },
    set style(K) {
      rn(K), m();
    },
    get class() {
      return Wt();
    },
    set class(K) {
      Wt(K), m();
    }
  });
  return a(), a1;
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
  ve(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = qc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Or(Ji, { getStore: () => l }), us(() => {
    l.reset();
  }), Ie();
  var u = Je(), c = xe(u);
  return bt(c, t, "default", {}), L(e, u), ge({
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
  Ie();
  var c = _2();
  let d;
  var v = Y(c);
  return bt(v, t, "default", { class: "button-svg" }), Z(c), ke(
    (g) => d = Yt(c, d, {
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
      () => Vt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    $e
  ), tt("click", c, function(g) {
    Ke.call(this, t, g);
  }), L(e, c), ge({
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
function id(e) {
  var t = k2();
  L(e, t);
}
ue(id, {}, [], [], !0);
var E2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = E2();
  L(e, t);
}
ue(ad, {}, [], [], !0);
var S2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function sd(e) {
  var t = S2();
  L(e, t);
}
ue(sd, {}, [], [], !0);
var M2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = M2();
  L(e, t);
}
ue(ld, {}, [], [], !0);
var V2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = V2();
  L(e, t);
}
ue(ud, {}, [], [], !0);
var P2 = /* @__PURE__ */ re("<!> <!>", 1), H2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(H, "$nodesDraggable", n), i = () => ne(P, "$nodesConnectable", n), a = () => ne(A, "$elementsSelectable", n), s = () => ne(_, "$viewport", n), l = () => ne(S, "$minZoom", n), u = () => ne(N, "$maxZoom", n), c = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie();
  let h = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), p = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), V = y(t, "buttonBorderColor", 12, void 0), E = y(t, "ariaLabel", 12, void 0), T = y(t, "style", 12, void 0), O = y(t, "orientation", 12, "vertical"), D = y(t, "fitViewOptions", 12, void 0), I = y(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: q,
    fitView: M,
    viewport: _,
    minZoom: S,
    maxZoom: N,
    nodesDraggable: H,
    nodesConnectable: P,
    elementsSelectable: A
  } = Xe(), R = {
    bgColor: p(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: V()
  }, W = () => {
    z();
  }, Q = () => {
    q();
  }, G = () => {
    M(D());
  }, X = () => {
    U(c, !f(c)), H.set(f(c)), P.set(f(c)), A.set(f(c));
  };
  he(
    () => (o(), i(), a()),
    () => {
      U(c, o() || i() || a());
    }
  ), he(() => (s(), l()), () => {
    U(d, s().zoom <= l());
  }), he(() => (s(), u()), () => {
    U(v, s().zoom >= u());
  }), he(() => te(O()), () => {
    U(g, O() === "horizontal" ? "horizontal" : "vertical");
  }), yt(), Ie();
  const me = /* @__PURE__ */ $e(() => Vt([
    "svelte-flow__controls",
    f(g),
    I()
  ])), oe = /* @__PURE__ */ $e(() => E() ?? "Svelte Flow controls");
  Lo(e, {
    get class() {
      return f(me);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(oe);
    },
    get style() {
      return T();
    },
    children: (se, Se) => {
      var we = H2(), He = xe(we);
      bt(He, t, "before", {});
      var ce = B(He, 2);
      {
        var J = (de) => {
          var le = P2(), be = xe(le);
          so(be, lt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            R,
            {
              $$events: { click: W },
              children: (at, ee) => {
                id(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var et = B(be, 2);
          so(et, lt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            R,
            {
              $$events: { click: Q },
              children: (at, ee) => {
                ad(at);
              },
              $$slots: { default: !0 }
            }
          )), L(de, le);
        };
        ye(ce, (de) => {
          b() && de(J);
        });
      }
      var Ve = B(ce, 2);
      {
        var j = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            R,
            {
              $$events: { click: G },
              children: (le, be) => {
                sd(le);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Ve, (de) => {
          x() && de(j);
        });
      }
      var Ce = B(Ve, 2);
      {
        var Ne = (de) => {
          so(de, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            R,
            {
              $$events: { click: X },
              children: (le, be) => {
                var et = Je(), at = xe(et);
                {
                  var ee = (fe) => {
                    ud(fe);
                  }, Re = (fe) => {
                    ld(fe);
                  };
                  ye(at, (fe) => {
                    f(c) ? fe(ee) : fe(Re, !1);
                  });
                }
                L(le, et);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Ce, (de) => {
          $() && de(Ne);
        });
      }
      var ze = B(Ce, 2);
      bt(ze, t, "default", {});
      var ae = B(ze, 2);
      bt(ae, t, "after", {}), L(se, we);
    },
    $$slots: { default: !0 }
  });
  var pe = ge({
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
      return $();
    },
    set showLock(se) {
      $(se), m();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(se) {
      p(se), m();
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
      return V();
    },
    set buttonBorderColor(se) {
      V(se), m();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(se) {
      E(se), m();
    },
    get style() {
      return T();
    },
    set style(se) {
      T(se), m();
    },
    get orientation() {
      return O();
    },
    set orientation(se) {
      O(se), m();
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
  return r(), pe;
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
var N2 = /* @__PURE__ */ Me("<circle></circle>");
function dd(e, t) {
  ve(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ie();
  var o = N2();
  return ke(
    (i) => {
      _e(o, "cx", n()), _e(o, "cy", n()), _e(o, "r", n()), $t(o, 0, i);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    $e
  ), L(e, o), ge({
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
var T2 = /* @__PURE__ */ Me("<path></path>");
function fd(e, t) {
  ve(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ie();
  var a = T2();
  return ke(
    (s) => {
      _e(a, "stroke-width", n()), _e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), $t(a, 0, s);
    },
    [
      () => vn(Vt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    $e
  ), L(e, a), ge({
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
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var z2 = /* @__PURE__ */ Me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const L2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function vd(e, t) {
  ve(t, !1), Ue(e, L2);
  const [n, r] = nt(), o = () => ne(k, "$flowId", n), i = () => ne(w, "$viewport", n), a = /* @__PURE__ */ ie(), s = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => jn.Dots), g = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), p = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Xe(), V = h() || O2[v()], E = v() === jn.Dots, T = v() === jn.Cross, O = Array.isArray(g()) ? g() : [g(), g()];
  he(
    () => (o(), te(d())),
    () => {
      U(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    U(s, [
      O[0] * i().zoom || 1,
      O[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    U(l, V * i().zoom);
  }), he(() => (f(l), f(s)), () => {
    U(u, T ? [f(l), f(l)] : f(s));
  }), he(
    () => (f(l), f(u)),
    () => {
      U(c, E ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), yt(), Ie();
  var D = z2();
  let I;
  var z = Y(D), q = Y(z);
  {
    var M = (H) => {
      const P = /* @__PURE__ */ $e(() => f(l) / 2);
      dd(H, {
        get radius() {
          return f(P);
        },
        get class() {
          return p();
        }
      });
    }, _ = (H) => {
      fd(H, {
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
          return p();
        }
      });
    };
    ye(q, (H) => {
      E ? H(M) : H(_, !1);
    });
  }
  Z(z);
  var S = B(z);
  Z(D), ke(
    (H) => {
      $t(D, 0, H, "svelte-1r7pe8d"), I = ft(D, "", I, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": $()
      }), _e(z, "id", f(a)), _e(z, "x", i().x % f(s)[0]), _e(z, "y", i().y % f(s)[1]), _e(z, "width", f(s)[0]), _e(z, "height", f(s)[1]), _e(z, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), _e(S, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Vt(["svelte-flow__background", C()]))
    ],
    $e
  ), L(e, D);
  var N = ge({
    get id() {
      return d();
    },
    set id(H) {
      d(H), m();
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
      return b();
    },
    set lineWidth(H) {
      b(H), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(H) {
      x(H), m();
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
var D2 = /* @__PURE__ */ Me("<rect></rect>");
function gd(e, t) {
  ve(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ie();
  var g = D2();
  let h;
  return ke(
    (b, x) => {
      h = $t(g, 0, b, null, h, x), _e(g, "x", n()), _e(g, "y", r()), _e(g, "rx", a()), _e(g, "ry", a()), _e(g, "width", o()), _e(g, "height", i()), ft(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), _e(g, "shape-rendering", l());
    },
    [
      () => vn(Vt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    $e
  ), L(e, g), ge({
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
var A2 = /* @__PURE__ */ Me("<title> </title>"), I2 = /* @__PURE__ */ Me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function pd(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(Ve, "$flowId", n), i = () => ne(He, "$viewport", n), a = () => ne(ce, "$containerWidth", n), s = () => ne(J, "$containerHeight", n), l = () => ne(we, "$nodeLookup", n), u = () => ne(Se, "$nodes", n), c = () => ne(j, "$panZoom", n), d = () => ne(Ce, "$translateExtent", n), v = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), w = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), T = /* @__PURE__ */ ie();
  let O = y(t, "position", 12, "bottom-right"), D = y(t, "ariaLabel", 12, "Mini map"), I = y(t, "nodeStrokeColor", 12, "transparent"), z = y(t, "nodeColor", 12, void 0), q = y(t, "nodeClass", 12, ""), M = y(t, "nodeBorderRadius", 12, 5), _ = y(t, "nodeStrokeWidth", 12, 2), S = y(t, "bgColor", 12, void 0), N = y(t, "maskColor", 12, void 0), H = y(t, "maskStrokeColor", 12, void 0), P = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), R = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), Q = y(t, "zoomable", 12, !0), G = y(t, "inversePan", 12, void 0), X = y(t, "zoomStep", 12, void 0), me = y(t, "style", 12, ""), oe = y(t, "class", 12, "");
  const pe = 200, se = 150, {
    nodes: Se,
    nodeLookup: we,
    viewport: He,
    width: ce,
    height: J,
    flowId: Ve,
    panZoom: j,
    translateExtent: Ce
  } = Xe(), Ne = z() === void 0 ? void 0 : ha(z()), ze = ha(I()), ae = ha(q()), de = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), le = `svelte-flow__minimap-desc-${o()}`;
  let be = /* @__PURE__ */ ie(f(v));
  const et = () => f($);
  he(
    () => (i(), a(), s()),
    () => {
      U(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), he(
    () => (l(), f(v), u()),
    () => {
      U(be, l().size > 0 ? gc(To(l(), { filter: (fe) => !fe.hidden }), f(v)) : f(v)), u();
    }
  ), he(() => te(A()), () => {
    U(g, A() ?? pe);
  }), he(() => te(R()), () => {
    U(h, R() ?? se);
  }), he(
    () => (f(be), f(g)),
    () => {
      U(b, f(be).width / f(g));
    }
  ), he(
    () => (f(be), f(h)),
    () => {
      U(x, f(be).height / f(h));
    }
  ), he(
    () => (f(b), f(x)),
    () => {
      U($, Math.max(f(b), f(x)));
    }
  ), he(() => (f($), f(g)), () => {
    U(p, f($) * f(g));
  }), he(
    () => (f($), f(h)),
    () => {
      U(C, f($) * f(h));
    }
  ), he(() => f($), () => {
    U(w, 5 * f($));
  }), he(
    () => (f(be), f(p), f(w)),
    () => {
      U(k, f(be).x - (f(p) - f(be).width) / 2 - f(w));
    }
  ), he(
    () => (f(be), f(C), f(w)),
    () => {
      U(V, f(be).y - (f(C) - f(be).height) / 2 - f(w));
    }
  ), he(() => (f(p), f(w)), () => {
    U(E, f(p) + f(w) * 2);
  }), he(() => (f(C), f(w)), () => {
    U(T, f(C) + f(w) * 2);
  }), yt(), Ie();
  const at = /* @__PURE__ */ $e(() => me() + (S() ? `;--xy-minimap-background-color-props:${S()}` : "")), ee = /* @__PURE__ */ $e(() => Vt(["svelte-flow__minimap", oe()]));
  Lo(e, {
    get position() {
      return O();
    },
    get style() {
      return f(at);
    },
    get class() {
      return f(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (fe, tn) => {
      var nn = Je(), hn = xe(nn);
      {
        var De = (rt) => {
          var Ze = I2();
          _e(Ze, "aria-labelledby", le);
          let Be;
          var ot = Y(Ze);
          {
            var rn = (Ct) => {
              var Pt = A2();
              _e(Pt, "id", le);
              var wr = Y(Pt, !0);
              Z(Pt), ke(() => ct(wr, D())), L(Ct, Pt);
            };
            ye(ot, (Ct) => {
              D() && Ct(rn);
            });
          }
          var Wt = B(ot);
          Mt(Wt, 1, u, (Ct) => Ct.id, (Ct, Pt) => {
            var wr = Je();
            const it = /* @__PURE__ */ $e(() => l().get(f(Pt).id));
            var ra = xe(wr);
            {
              var Jr = (At) => {
                const Bo = /* @__PURE__ */ $e(() => tr(f(it))), qo = /* @__PURE__ */ $e(() => Ne == null ? void 0 : Ne(f(it))), Zo = /* @__PURE__ */ $e(() => ze(f(it))), oa = /* @__PURE__ */ $e(() => ae(f(it)));
                gd(At, lt(
                  {
                    get x() {
                      return f(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(it).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Bo),
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
                    shapeRendering: de,
                    get class() {
                      return f(oa);
                    }
                  }
                ));
              };
              ye(ra, (At) => {
                f(it) && pc(f(it)) && At(Jr);
              });
            }
            L(Ct, wr);
          });
          var Ur = B(Wt);
          Z(Ze), xt(Ze, (Ct, Pt) => Dl == null ? void 0 : Dl(Ct, Pt), () => ({
            panZoom: c(),
            viewport: He,
            getViewScale: et,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: X(),
            pannable: W(),
            zoomable: Q()
          })), ke(() => {
            _e(Ze, "width", f(g)), _e(Ze, "height", f(h)), _e(Ze, "viewBox", `${f(k) ?? ""} ${f(V) ?? ""} ${f(E) ?? ""} ${f(T) ?? ""}`), Be = ft(Ze, "", Be, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": H(),
              "--xy-minimap-mask-stroke-width-props": P() ? P() * f($) : void 0
            }), _e(Ur, "d", `M${f(k) - f(w)},${f(V) - f(w)}h${f(E) + f(w) * 2}v${f(T) + f(w) * 2}h${-f(E) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), L(rt, Ze);
        };
        ye(hn, (rt) => {
          c() && rt(De);
        });
      }
      L(fe, nn);
    },
    $$slots: { default: !0 }
  });
  var Re = ge({
    get position() {
      return O();
    },
    set position(fe) {
      O(fe), m();
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
      return z();
    },
    set nodeColor(fe) {
      z(fe), m();
    },
    get nodeClass() {
      return q();
    },
    set nodeClass(fe) {
      q(fe), m();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(fe) {
      M(fe), m();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(fe) {
      _(fe), m();
    },
    get bgColor() {
      return S();
    },
    set bgColor(fe) {
      S(fe), m();
    },
    get maskColor() {
      return N();
    },
    set maskColor(fe) {
      N(fe), m();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(fe) {
      H(fe), m();
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
      return R();
    },
    set height(fe) {
      R(fe), m();
    },
    get pannable() {
      return W();
    },
    set pannable(fe) {
      W(fe), m();
    },
    get zoomable() {
      return Q();
    },
    set zoomable(fe) {
      Q(fe), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(fe) {
      G(fe), m();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(fe) {
      X(fe), m();
    },
    get style() {
      return me();
    },
    set style(fe) {
      me(fe), m();
    },
    get class() {
      return oe();
    },
    set class(fe) {
      oe(fe), m();
    }
  });
  return r(), Re;
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
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: h, nodeOrigin: b, edgeLookup: x, connectionLookup: $ } = Xe(), p = (k) => {
    var V, E;
    const T = F(h), O = Al(k) ? k : T.get(k.id), D = O.parentId ? Zh(O.position, O.measured, O.parentId, T, F(b)) : O.position, I = {
      ...O,
      position: D,
      width: ((V = O.measured) == null ? void 0 : V.width) ?? O.width,
      height: ((E = O.measured) == null ? void 0 : E.height) ?? O.height
    };
    return Br(I);
  }, C = (k, V, E = { replace: !1 }) => {
    var T;
    const O = (T = F(h).get(k)) == null ? void 0 : T.internals.userNode;
    if (!O)
      return;
    const D = typeof V == "function" ? V(O) : V;
    E.replace ? d.update((I) => I.map((z) => z.id === k ? Al(D) ? D : { ...z, ...D } : z)) : (Object.assign(O, D), d.update((I) => I));
  }, w = (k) => F(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var V;
      return (V = w(k)) == null ? void 0 : V.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(d) : Il(F(h), k),
    getEdge: (k) => F(x).get(k),
    getEdges: (k) => k === void 0 ? F(v) : Il(F(x), k),
    setZoom: (k, V) => {
      const E = F(c);
      return E ? E.scaleTo(k, { duration: V == null ? void 0 : V.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, V) => {
      const E = F(i), T = F(c);
      return T ? (await T.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, V, E) => {
      const T = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : F(u), O = F(c);
      return O ? (await O.setViewport({
        x: F(a) / 2 - k * T,
        y: F(s) / 2 - V * T,
        zoom: T
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, V) => {
      const E = F(c);
      if (!E)
        return Promise.resolve(!1);
      const T = ws(k, F(a), F(s), F(l), F(u), (V == null ? void 0 : V.padding) ?? 0.1);
      return await E.setViewport(T, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, V = !0, E) => {
      const T = xl(k), O = T ? k : p(k);
      return O ? (E || F(d)).filter((D) => {
        const I = F(h).get(D.id);
        if (!I || !T && D.id === k.id)
          return !1;
        const z = Br(I), q = Co(z, O);
        return V && q > 0 || q >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (k, V, E = !0) => {
      const T = xl(k) ? k : p(k);
      if (!T)
        return !1;
      const O = Co(T, V);
      return E && O > 0 || O >= T.width * T.height;
    },
    deleteElements: async ({ nodes: k = [], edges: V = [] }) => {
      const { nodes: E, edges: T } = await dc({
        nodesToRemove: k,
        edgesToRemove: V,
        nodes: F(d),
        edges: F(v),
        onBeforeDelete: F(r)
      });
      return E && d.update((O) => O.filter((D) => !E.some(({ id: I }) => I === D.id))), T && v.update((O) => O.filter((D) => !T.some(({ id: I }) => I === D.id))), {
        deletedNodes: E,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (k, V = { snapToGrid: !0 }) => {
      const E = F(g);
      if (!E)
        return k;
      const T = V.snapToGrid ? F(o) : !1, { x: O, y: D, zoom: I } = F(i), { x: z, y: q } = E.getBoundingClientRect(), M = {
        x: k.x - z,
        y: k.y - q
      };
      return Oo(M, [O, D, I], T !== null, T || [1, 1]);
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
      const { x: E, y: T, zoom: O } = F(i), { x: D, y: I } = V.getBoundingClientRect(), z = Ci(k, [E, T, O]);
      return {
        x: z.x + D,
        y: z.y + I
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
    updateNodeData: (k, V, E) => {
      var T;
      const O = (T = F(h).get(k)) == null ? void 0 : T.internals.userNode;
      if (!O)
        return;
      const D = typeof V == "function" ? V(O) : V;
      O.data = E != null && E.replace ? D : { ...O.data, ...D }, d.update((I) => I);
    },
    getNodesBounds: (k) => {
      const V = F(h), E = F(b);
      return zh(k, { nodeLookup: V, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: V, nodeId: E }) => {
      var T;
      return Array.from(((T = F($).get(`${E}-${k}-${V ?? null}`)) == null ? void 0 : T.values()) ?? []);
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
var B2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  ve(t, !1);
  const [n, r] = nt(), o = () => ne(C, "$nodes", n), i = () => ne(p, "$nodeLookup", n), a = () => ne($, "$viewport", n), s = () => ne(x, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: $, nodeLookup: p, nodes: C } = Xe(), { getNodesBounds: w } = Dt(), k = ur("svelteflow__node_id");
  let V = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie([]), T = h() !== void 0 ? h() : 10, O = v() !== void 0 ? v() : Oe.Top, D = g() !== void 0 ? g() : "center";
  he(
    () => (o(), te(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      U(E, _.reduce(
        (S, N) => {
          const H = i().get(N);
          return H && S.push(H), S;
        },
        []
      ));
    }
  ), he(
    () => (f(E), a()),
    () => {
      const _ = w(f(E));
      _ && U(V, o0(_, a(), O, T, D));
    }
  ), he(() => f(E), () => {
    U(l, f(E).length === 0 ? 1 : Math.max(...f(E).map((_) => (_.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    U(u, o().filter((_) => _.selected).length);
  }), he(
    () => (te(b()), f(E), f(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : f(E).length === 1 && f(E)[0].selected && f(u) === 1);
    }
  ), yt(), Ie();
  var I = Je(), z = xe(I);
  {
    var q = (_) => {
      var S = B2();
      let N;
      var H = Y(S);
      bt(H, t, "default", {}), Z(S), xt(S, (P, A) => Si == null ? void 0 : Si(P, A), () => ({ domNode: s() })), ke(
        (P) => {
          _e(S, "data-id", P), N = ft(S, "", N, {
            position: "absolute",
            transform: f(V),
            "z-index": f(l)
          });
        },
        [
          () => f(E).reduce((P, A) => `${P}${A.id} `, "").trim()
        ],
        $e
      ), L(_, S);
    };
    ye(z, (_) => {
      s() && f(c) && f(E) && _(q);
    });
  }
  L(e, I);
  var M = ge({
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
      return h();
    },
    set offset(_) {
      h(_), m();
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
function yr(e) {
  const { nodes: t, nodeLookup: n } = Xe();
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
    (!f0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Bl = "tinyflow-component";
class q2 {
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
  const e = Ee([]), t = Ee([]), n = Ee({ x: 250, y: 100, zoom: 1 });
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
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = R2();
  let a;
  var s = Y(i);
  return cr(s, () => n() ?? pt), Z(i), ke(() => a = Yt(i, a, {
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  })), L(e, i), ge({
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
function md(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Y2();
  Kn(r);
  let o;
  ke(() => o = Yt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ge();
}
ue(md, {}, [], [], !0);
var K2 = /* @__PURE__ */ re('<div><input type="hidden"> <!> <!></div>');
const W2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function yd(e, t) {
  ve(t, !0), Ue(e, W2);
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
  var l = K2();
  let u;
  var c = Y(l);
  Kn(c);
  var d = B(c, 2);
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
  var v = B(d, 2);
  return We(v, {
    onclick: (g) => {
      var h;
      (h = a()) == null || h(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, h) => {
      Te();
      var b = Ae();
      ke(() => ct(b, i())), L(g, b);
    },
    $$slots: { default: !0 }
  }), Z(l), ke(() => {
    u = Yt(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), Uo(c, o());
  }), L(e, l), ge({
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
var X2 = /* @__PURE__ */ re("<input>");
function vt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = X2();
  Kn(r);
  let o;
  ke(() => o = Yt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ge();
}
ue(vt, {}, [], [], !0);
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
  Sf(o);
  let i;
  return ke(() => i = Yt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, o), ge({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ue(mt, { value: {} }, [], [], !0);
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
  Ie();
  var l = G2();
  let u;
  return Mt(l, 5, o, zr, (c, d, v) => {
    var g = F2();
    _e(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = Y(g);
    {
      var b = ($) => {
        var p = Ae();
        ke(() => ct(p, f(d).label)), L($, p);
      }, x = ($) => {
        var p = Je(), C = xe(p);
        cr(C, () => f(d).label ?? pt), L($, p);
      };
      ye(h, ($) => {
        typeof f(d).label == "string" ? $(b) : $(x, !1);
      });
    }
    Z(g), ke(() => $t(g, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), L(c, g);
  }), Z(l), ke(() => u = Yt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), ge({
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
var U2 = (e, t, n) => t(f(n)), J2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, Q2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), em = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), tm = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), nm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), rm = /* @__PURE__ */ re("<div></div>");
const om = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function xd(e, t) {
  ve(t, !0), Ue(e, om);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => sn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = rm();
  return Mt(a, 21, n, zr, (s, l, u) => {
    var c = nm(), d = Y(c);
    _e(d, "tabindex", u), d.__click = [U2, i, l], d.__keydown = [J2, i, l];
    var v = Y(d);
    {
      var g = (w) => {
        var k = Q2(), V = Y(k);
        Rn(V, {
          get target() {
            return f(l).icon;
          }
        }), Z(k), L(w, k);
      };
      ye(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var h = B(v, 2);
    Rn(h, {
      get target() {
        return f(l).title;
      }
    });
    var b = B(h, 2);
    Z(d);
    var x = B(d, 2);
    {
      var $ = (w) => {
        var k = em(), V = Y(k);
        Rn(V, {
          get target() {
            return f(l).description;
          }
        }), Z(k), L(w, k);
      };
      ye(x, (w) => {
        f(l).description && w($);
      });
    }
    var p = B(x, 2);
    {
      var C = (w) => {
        var k = tm(), V = Y(k);
        Rn(V, {
          get target() {
            return f(l).content;
          }
        }), Z(k), L(w, k);
      };
      ye(p, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    Z(c), ke((w) => $t(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), L(s, c);
  }), Z(a), ke(() => {
    ft(a, t.style), $t(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, a), ge({
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
function Rn(e, t) {
  ve(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = xe(r);
  {
    var i = (s) => {
      var l = Je(), u = xe(l);
      cr(u, () => n() ?? pt), L(s, l);
    }, a = (s) => {
      var l = Je(), u = xe(l);
      ls(u, n), L(s, l);
    };
    ye(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return L(e, r), ge({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ue(Rn, { target: {} }, [], [], !0);
var im = (e, t, n) => t(f(n)), am = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), sm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), lm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), um = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), cm = /* @__PURE__ */ re("<!> <!>", 1), dm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), fm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), vm = /* @__PURE__ */ re("<div><!></div>");
function Qt(e, t) {
  ve(t, !0);
  const n = (p, C = pt) => {
    var w = Je(), k = xe(w);
    Mt(k, 19, C, (V, E) => `${E}_${V.value}`, (V, E) => {
      var T = lm(), O = xe(T);
      O.__click = [im, h, E];
      var D = Y(O), I = Y(D);
      {
        var z = (S) => {
          var N = am();
          L(S, N);
        };
        ye(I, (S) => {
          f(E).children && f(E).children.length > 0 && S(z);
        });
      }
      Z(D);
      var q = B(D, 2);
      Rn(q, {
        get target() {
          return f(E).label;
        }
      }), Z(O);
      var M = B(O, 2);
      {
        var _ = (S) => {
          var N = sm(), H = Y(N);
          n(H, () => f(E).children), Z(N), L(S, N);
        };
        ye(M, (S) => {
          f(E).children && f(E).children.length > 0 && (s() || u().includes(f(E).value)) && S(_);
        });
      }
      L(V, T);
    }), L(p, w);
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
  var b = vm();
  let x;
  var $ = Y(b);
  return _n(
    Gr($, {
      floating: (p) => {
        var C = um(), w = Y(C);
        n(w, r), Z(C), L(p, C);
      },
      children: (p, C) => {
        var w = fm();
        let k;
        var V = Y(w);
        Mt(
          V,
          23,
          () => f(v),
          (E, T) => `${T}_${E.value}`,
          (E, T, O) => {
            var D = Je(), I = xe(D);
            {
              var z = (M) => {
                var _ = Je(), S = xe(_);
                {
                  var N = (H) => {
                    Rn(H, {
                      get target() {
                        return f(T).label;
                      }
                    });
                  };
                  ye(S, (H) => {
                    f(O) === 0 && H(N);
                  });
                }
                L(M, _);
              }, q = (M) => {
                var _ = cm(), S = xe(_);
                Rn(S, {
                  get target() {
                    return f(T).label;
                  }
                });
                var N = B(S, 2);
                {
                  var H = (P) => {
                    var A = Ae(",");
                    L(P, A);
                  };
                  ye(N, (P) => {
                    f(O) < f(v).length - 1 && P(H);
                  });
                }
                L(M, _);
              };
              ye(I, (M) => {
                l() ? M(q, !1) : M(z);
              });
            }
            L(E, D);
          },
          (E) => {
            var T = dm(), O = Y(T, !0);
            Z(T), ke(() => ct(O, c())), L(E, T);
          }
        ), Z(V), Te(2), Z(w), ke(() => k = Yt(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), L(p, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => g = p,
    () => g
  ), Z(b), ke(() => x = Yt(b, x, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), L(e, b), ge({
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
function qa(e, t, n) {
  return Vr(e, ko(t, n));
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
function xm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $d(e) {
  return typeof e != "number" ? xm(e) : {
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
  } = ql(u, r, l), v = r, g = {}, h = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: $
    } = s[b], {
      x: p,
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
    c = p ?? c, d = C ?? d, g = {
      ...g,
      [x]: {
        ...g[x],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = ql(u, v, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: g
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
    padding: g = 0
  } = Do(t, e), h = $d(g), b = s[v ? d === "floating" ? "reference" : "floating" : d], x = Ni(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = d === "floating" ? {
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
    top: (x.top - w.top + h.top) / C.y,
    bottom: (w.bottom - x.bottom + h.bottom) / C.y,
    left: (x.left - w.left + h.left) / C.x,
    right: (w.right - x.right + h.right) / C.x
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
    }, g = ks(o), h = _s(g), b = await a.getDimensions(u), x = g === "y", $ = x ? "top" : "left", p = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[g] - v[g] - i.floating[h], k = v[g] - i.reference[g], V = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = V ? V[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(V))) && (E = s.floating[C] || i.floating[h]);
    const T = w / 2 - k / 2, O = E / 2 - b[h] / 2 - 1, D = ko(d[$], O), I = ko(d[p], O), z = D, q = E - b[h] - I, M = E / 2 - b[h] / 2 + T, _ = qa(z, M, q), S = !l.arrow && Ao(o) != null && M !== _ && i.reference[h] / 2 - (M < z ? D : I) - b[h] / 2 < 0, N = S ? M < z ? M - z : M - q : 0;
    return {
      [g]: v[g] + N,
      data: {
        [g]: _,
        centerOffset: M - _ - N,
        ...S && {
          alignmentOffset: N
        }
      },
      reset: S
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...x
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gr(o), p = lr(s), C = gr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !b ? [Hi(s)] : mm(s)), V = h !== "none";
      !v && V && k.push(...wm(s, b, h, w));
      const E = [s, ...k], T = await Cd(t, x), O = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(T[$]), d) {
        const _ = hm(o, a, w);
        O.push(T[_[0]], T[_[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: O
      }], !O.every((_) => _ <= 0)) {
        var I, z;
        const _ = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, S = E[_];
        if (S) {
          var q;
          const H = d === "alignment" ? p !== lr(S) : !1, P = ((q = D[0]) == null ? void 0 : q.overflows[0]) > 0;
          if (!H || P)
            return {
              data: {
                index: _,
                overflows: D
              },
              reset: {
                placement: S
              }
            };
        }
        let N = (z = D.filter((H) => H.overflows[0] <= 0).sort((H, P) => H.overflows[1] - P.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var M;
              const H = (M = D.filter((P) => {
                if (V) {
                  const A = lr(P.placement);
                  return A === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((A) => A > 0).reduce((A, R) => A + R, 0)]).sort((P, A) => P[1] - A[1])[0]) == null ? void 0 : M[0];
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = gr(n), s = Ao(n), l = lr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Do(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
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
}, Em = function(e) {
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
              y: p
            } = x;
            return {
              x: $,
              y: p
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await Cd(t, l), d = lr(gr(o)), v = bd(d);
      let g = u[v], h = u[d];
      if (i) {
        const x = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", p = g + c[x], C = g - c[$];
        g = qa(p, g, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", p = h + c[x], C = h - c[$];
        h = qa(p, h, C);
      }
      const b = s.fn({
        ...t,
        [v]: g,
        [d]: h
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
function Qi() {
  return typeof window < "u";
}
function Fr(e) {
  return _d(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (_d(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _d(e) {
  return Qi() ? e instanceof Node || e instanceof Rt(e).Node : !1;
}
function dn(e) {
  return Qi() ? e instanceof Element || e instanceof Rt(e).Element : !1;
}
function kn(e) {
  return Qi() ? e instanceof HTMLElement || e instanceof Rt(e).HTMLElement : !1;
}
function Zl(e) {
  return !Qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rt(e).ShadowRoot;
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
function Es(e) {
  const t = Ss(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Mm(e) {
  let t = Jn(e);
  for (; kn(t) && !Zr(t); ) {
    if (Es(t))
      return t;
    if (ea(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function Ss() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(Fr(e));
}
function fn(e) {
  return Rt(e).getComputedStyle(e);
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
    Zl(e) && e.host || // Fallback.
    An(e)
  );
  return Zl(t) ? t.host : t;
}
function kd(e) {
  const t = Jn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Io(t) ? t : kd(t);
}
function Ed(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Rt(o);
  return i ? (Ra(a), t.concat(a, a.visualViewport || [], Io(o) ? o : [], [])) : t.concat(o, Ed(o, []));
}
function Ra(e) {
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
const Vm = /* @__PURE__ */ wn(0);
function Vd(e) {
  const t = Rt(e);
  return !Ss() || !t.visualViewport ? Vm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Rt(e) ? !1 : t;
}
function Eo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Md(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Pr(r)) : a = Pr(e));
  const s = Pm(i, n, r) ? Vd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Rt(i), g = r && dn(r) ? Rt(r) : r;
    let h = v, b = Ra(h);
    for (; b && r && g !== h; ) {
      const x = Pr(b), $ = b.getBoundingClientRect(), p = fn(b), C = $.left + (b.clientLeft + parseFloat(p.paddingLeft)) * x.x, w = $.top + (b.clientTop + parseFloat(p.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += w, h = Rt(b), b = Ra(h);
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
  return t ? t.left + n : Eo(An(e)).left + n;
}
function Pd(e, t, n) {
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
    const g = Eo(r);
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
function Nm(e) {
  return Array.from(e.getClientRects());
}
function Tm(e) {
  const t = An(e), n = ta(e), r = e.ownerDocument.body, o = Vr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Vr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ms(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Vr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Om(e, t) {
  const n = Rt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Ss();
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
  const n = Eo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Pr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Om(e, n);
  else if (t === "document")
    r = Tm(An(e));
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
function Hd(e, t) {
  const n = Jn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Hd(n, t);
}
function Lm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ed(e, []).filter((s) => dn(s) && Fr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; dn(a) && !Zr(a); ) {
    const s = fn(a), l = Es(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Io(a) && !l && Hd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
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
  const i = [...n === "clippingAncestors" ? ea(t) ? [] : Lm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Rl(t, u, o);
    return l.top = Vr(c.top, l.top), l.right = ko(c.right, l.right), l.bottom = ko(c.bottom, l.bottom), l.left = Vr(c.left, l.left), l;
  }, Rl(t, a, o));
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
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function Im(e, t, n) {
  const r = kn(t), o = An(t), i = n === "fixed", a = Eo(e, !0, i, t);
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
      const g = Eo(t, !0, i, t);
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
function Yl(e, t) {
  if (!kn(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Nd(e, t) {
  const n = Rt(e);
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
  let r = Yl(e, t);
  for (; r && Sm(r) && ma(r); )
    r = Yl(r, t);
  return r && Zr(r) && ma(r) && !Es(r) ? n : r || Mm(e) || n;
}
const Bm = async function(e) {
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
function qm(e) {
  return fn(e).direction === "rtl";
}
const Zm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hm,
  getDocumentElement: An,
  getClippingRect: Dm,
  getOffsetParent: Nd,
  getElementRects: Bm,
  getClientRects: Nm,
  getDimensions: Am,
  getScale: Pr,
  isElement: dn,
  isRTL: qm
}, Rm = km, Ym = Em, Km = Cm, Wm = $m, Xm = (e, t, n) => {
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
        const { x: k, y: V } = w.arrow, E = {
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
          [E]: "2px"
        });
      }
    });
  }
  let v = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function b($) {
    $.stopPropagation(), v ? h() : g();
  }
  function x($) {
    u.contains($.target) || h();
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
  var u = Fm(), c = Y(u), d = Y(c);
  cr(d, n), Z(c), _n(c, (h) => i = h, () => i);
  var v = B(c, 2), g = Y(v);
  return cr(g, r), Z(v), _n(v, (h) => a = h, () => a), Z(u), L(e, u), ge({
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
  ve(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Je(), s = xe(a);
  return Lf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = Yt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Je(), v = xe(d);
    cr(v, () => n() ?? pt), L(u, d);
  }), L(e, a), ge({
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
var Gm = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Um = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function na(e, t) {
  ve(t, !0), Ue(e, Um);
  const n = /* @__PURE__ */ wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  We(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Gm();
      L(r, i);
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
function ht() {
  return ur("svelteflow__node_id");
}
var ey = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ty = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ny = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ry = /* @__PURE__ */ re('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), oy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, iy = /* @__PURE__ */ re('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), ay = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), sy = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ly = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const uy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function pn(e, t) {
  ve(t, !0), Ue(e, uy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: $ } = Dt(), p = /* @__PURE__ */ Pe(() => [
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
  let E = ht();
  var T = ly(), O = xe(T);
  {
    var D = (P) => {
      hd(P, {
        get position() {
          return Oe.Top;
        },
        align: "end",
        children: (A, R) => {
          var W = sy(), Q = Y(W);
          {
            var G = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (He, ce) => {
                  var J = ey();
                  L(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            ye(Q, (we) => {
              u() && we(G);
            });
          }
          var X = B(Q, 2);
          {
            var me = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (He, ce) => {
                  var J = ty();
                  L(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            ye(X, (we) => {
              l() && we(me);
            });
          }
          var oe = B(X, 2);
          {
            var pe = (we) => {
              We(we, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (He, ce) => {
                  var J = ny();
                  L(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            ye(oe, (we) => {
              s() && we(pe);
            });
          }
          var se = B(oe, 2);
          {
            var Se = (we) => {
              Gr(we, {
                placement: "bottom",
                floating: (He) => {
                  var ce = iy(), J = Y(ce), Ve = B(Y(J));
                  vt(Ve, {
                    style: "width: 100%;",
                    onchange: (le) => {
                      const be = le.target.value;
                      x(E, { title: be });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(J);
                  var j = B(J, 2), Ce = B(Y(j));
                  mt(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (le) => {
                      const be = le.target.value;
                      x(E, { description: be });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(j);
                  var Ne = B(j, 2);
                  {
                    var ze = (le) => {
                      var be = ry(), et = B(Y(be));
                      mt(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (at) => {
                          const ee = at.target.value;
                          x(E, { condition: ee });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(be), L(le, be);
                    };
                    ye(Ne, (le) => {
                      d() && le(ze);
                    });
                  }
                  var ae = B(Ne, 2), de = B(Y(ae), 2);
                  Kn(de), de.__change = [oy, x, E], Z(ae), Z(ce), ke(() => Bf(de, !!n().async)), L(He, ce);
                },
                children: (He, ce) => {
                  We(He, {
                    class: "tf-node-toolbar-item",
                    children: (J, Ve) => {
                      var j = ay();
                      L(J, j);
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
          Z(W), L(A, W);
        },
        $$slots: { default: !0 }
      });
    };
    ye(O, (P) => {
      (s() || l() || u()) && P(D);
    });
  }
  var I = B(O, 2), z = B(Y(I), 2), q = Y(z);
  xd(q, {
    get items() {
      return f(p);
    },
    activeKeys: b,
    onChange: (P, A) => {
      var R;
      x(r(), { expand: A == null ? void 0 : A.includes("key") }), (R = h()) == null || R(A != null && A.includes("key") ? "key" : "");
    }
  }), Z(z), Z(I);
  var M = B(I, 2);
  {
    var _ = (P) => {
      Un(P, {
        type: "target",
        get position() {
          return Oe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(M, (P) => {
      g() && P(_);
    });
  }
  var S = B(M, 2);
  {
    var N = (P) => {
      Un(P, {
        type: "source",
        get position() {
          return Oe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(S, (P) => {
      v() && P(N);
    });
  }
  var H = B(S, 2);
  return cr(H, () => i() ?? pt), L(e, T), ge({
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
var dy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), vy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const gy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  ve(t, !0), Ue(e, gy);
  const [n, r] = nt(), o = () => ne(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Pe(() => yr(s)), u = /* @__PURE__ */ Pe(() => {
    var O, D;
    return {
      ...i(),
      ...(D = (O = o()) == null ? void 0 : O.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (O, D) => {
    c(s, (I) => {
      let z = I.data.parameters;
      return z[a()][O] = D, { parameters: z };
    });
  }, v = (O) => {
    const D = O.target.value;
    d("name", D);
  }, g = (O) => {
    const D = O.target.checked;
    d("required", D);
  }, h = (O) => {
    const D = O.value;
    D && d("dataType", D);
  };
  let b;
  const x = () => {
    c(s, (O) => {
      let D = O.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), b == null || b.hide();
  };
  var $ = vy(), p = xe($), C = Y(p);
  vt(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(p);
  var w = B(p, 2), k = Y(w);
  md(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), Z(w);
  var V = B(w, 2), E = Y(V);
  _n(
    Gr(E, {
      placement: "bottom",
      floating: (O) => {
        var D = dy(), I = Y(D), z = B(Y(I));
        const q = /* @__PURE__ */ Pe(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Qt(z, {
          items: Td,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(q);
          }
        }), Z(I);
        var M = B(I, 2), _ = B(Y(M));
        mt(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const R = A.target.value;
            d("defaultValue", R);
          }
        }), Z(M);
        var S = B(M, 2), N = B(Y(S));
        mt(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const R = A.target.value;
            d("description", R);
          }
        }), Z(S);
        var H = B(S, 2), P = Y(H);
        We(P, {
          onclick: x,
          children: (A, R) => {
            Te();
            var W = Ae("删除");
            L(A, W);
          },
          $$slots: { default: !0 }
        }), Z(H), Z(D), L(O, D);
      },
      children: (O, D) => {
        We(O, {
          class: "input-btn-more",
          children: (I, z) => {
            var q = fy();
            L(I, q);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => b = O,
    () => b
  ), Z(V), L(e, $);
  var T = ge({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), m();
    },
    get index() {
      return a();
    },
    set index(O) {
      a(O), m();
    }
  });
  return r(), T;
}
ue(Od, { parameter: {}, index: {} }, [], [], !0);
var py = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), hy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), my = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const yy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  ve(t, !0), Ue(e, yy);
  const [n, r] = nt(), o = () => ne(f(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Pe(() => yr(i)), s = /* @__PURE__ */ Pe(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = my(), u = Y(l);
  {
    var c = (v) => {
      var g = py();
      Te(4), L(v, g);
    };
    ye(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = B(u, 2);
  Mt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, h) => {
      Od(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var g = hy();
      L(v, g);
    }
  ), Z(l), L(e, l), ge(), r();
}
ue(zd, {}, [], [], !0);
const Ti = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = pr()), Ti(t.children);
}), e), Mn = () => {
  const { updateNodeData: e } = Dt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Ti(r == null ? void 0 : r.children);
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
var wy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), xy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const $y = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ld(e, t) {
  ve(t, !0), Ue(e, $y);
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
      var s = wy();
      L(a, s);
    },
    children: (a, s) => {
      var l = by(), u = xe(l), c = Y(u);
      Ge(c, {
        level: 3,
        children: (g, h) => {
          Te();
          var b = Ae("输入参数");
          L(g, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      We(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var b = xy();
          L(g, b);
        },
        $$slots: { default: !0 }
      }), Z(u);
      var v = B(u, 2);
      zd(v, {}), L(a, l);
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
ue(Ld, { data: {} }, [], [], !0);
const Dd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Dd(e, r.source, n));
}, Ad = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Ad(r.children, t + "." + r.name, n)
})), Kl = (e, t, n) => {
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
  const t = ht(), n = yr(t), { nodes: r, edges: o, nodeLookup: i } = Xe();
  return Wn(
    [n, r, o, i],
    ([a, s, l, u]) => {
      if (!a)
        return [];
      const c = u.get(t), d = [];
      if (e)
        for (const v of s) {
          const g = v.parentId === a.id;
          if (g) {
            const h = Kl(v, g, c);
            h && d.push(h);
          }
        }
      else {
        const v = [];
        Dd(v, t, l);
        for (const g of s)
          if (v.includes(g.id)) {
            const h = g.parentId === a.id, b = Kl(g, h, c);
            b && d.push(b);
          }
      }
      return d;
    }
  );
};
var _y = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ky = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ey = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ve(t, !0), Ue(e, Ey);
  const [n, r] = nt(), o = () => ne(f(d), "$node", n), i = () => ne(w, "$selectItems", n);
  en(() => {
    f(v).refType || $({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7), u = y(t, "useChildrenOnly", 7);
  let c = ht(), d = /* @__PURE__ */ Pe(() => yr(c)), v = /* @__PURE__ */ Pe(() => {
    var S;
    return {
      ...a(),
      ...(S = o()) == null ? void 0 : S.data[l()][s()]
    };
  });
  const { updateNodeData: g } = Dt(), h = (S, N) => {
    g(c, (H) => {
      let P = H.data[l()];
      return P[s()] = { ...P[s()], [S]: N }, { [l()]: P };
    });
  }, b = (S, N) => {
    const H = N.target.value;
    h(S, H);
  }, x = (S) => {
    const N = S.value;
    h("ref", N);
  }, $ = (S) => {
    const N = S.value;
    h("refType", N);
  };
  let p;
  const C = () => {
    g(c, (S) => {
      let N = S.data[l()];
      return N.splice(s(), 1), { [l()]: [...N] };
    }), p == null || p.hide();
  }, w = Cy(u());
  var k = ky(), V = xe(k), E = Y(V);
  const T = /* @__PURE__ */ Pe(() => f(v).nameDisabled === !0);
  vt(E, {
    style: "width: 100%;",
    get value() {
      return f(v).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(T);
    },
    oninput: (S) => b("name", S)
  }), Z(V);
  var O = B(V, 2), D = Y(O);
  {
    var I = (S) => {
      vt(S, {
        get value() {
          return f(v).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => b("value", N)
      });
    }, z = (S, N) => {
      {
        var H = (P) => {
          const A = /* @__PURE__ */ Pe(() => [f(v).ref]);
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
            onSelect: x
          });
        };
        ye(
          S,
          (P) => {
            f(v).refType !== "input" && P(H);
          },
          N
        );
      }
    };
    ye(D, (S) => {
      f(v).refType === "fixed" ? S(I) : S(z, !1);
    });
  }
  Z(O);
  var q = B(O, 2), M = Y(q);
  _n(
    Gr(M, {
      placement: "bottom",
      floating: (S) => {
        var N = _y(), H = Y(N), P = B(Y(H));
        const A = /* @__PURE__ */ Pe(() => f(v).refType ? [f(v).refType] : []);
        Qt(P, {
          items: cy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(A);
          },
          onSelect: $
        }), Z(H);
        var R = B(H, 2), W = B(Y(R));
        mt(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (oe) => {
            b("defaultValue", oe);
          },
          get value() {
            return f(v).defaultValue;
          }
        }), Z(R);
        var Q = B(R, 2), G = B(Y(Q));
        mt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (oe) => {
            b("description", oe);
          },
          get value() {
            return f(v).description;
          }
        }), Z(Q);
        var X = B(Q, 2), me = Y(X);
        We(me, {
          onclick: C,
          children: (oe, pe) => {
            Te();
            var se = Ae("删除");
            L(oe, se);
          },
          $$slots: { default: !0 }
        }), Z(X), Z(N), L(S, N);
      },
      children: (S, N) => {
        na(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => p = S,
    () => p
  ), Z(q), L(e, k);
  var _ = ge({
    get parameter() {
      return a();
    },
    set parameter(S) {
      a(S), m();
    },
    get index() {
      return s();
    },
    set index(S) {
      s(S), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(S) {
      l(S), m();
    },
    get useChildrenOnly() {
      return u();
    },
    set useChildrenOnly(S) {
      u(S), m();
    }
  });
  return r(), _;
}
ue(
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
var Sy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Vy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Py = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function zt(e, t) {
  ve(t, !0), Ue(e, Py);
  const [n, r] = nt(), o = () => ne(f(u), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters"), s = y(t, "useChildrenOnly", 7);
  let l = ht(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = Vy(), v = Y(d);
  {
    var g = (x) => {
      var $ = Sy();
      Te(4), L(x, $);
    };
    ye(v, (x) => {
      f(c).length !== 0 && x(g);
    });
  }
  var h = B(v, 2);
  Mt(
    h,
    19,
    () => f(c),
    (x) => x.id,
    (x, $, p) => {
      Id(x, {
        get parameter() {
          return f($);
        },
        get index() {
          return f(p);
        },
        get dataKeyName() {
          return a();
        },
        get useChildrenOnly() {
          return s();
        }
      });
    },
    (x) => {
      var $ = My(), p = Y($, !0);
      Z($), ke(() => ct(p, i())), L(x, $);
    }
  ), Z(d), L(e, d);
  var b = ge({
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
    },
    get useChildrenOnly() {
      return s();
    },
    set useChildrenOnly(x) {
      s(x), m();
    }
  });
  return r(), b;
}
ue(
  zt,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var Hy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ny = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Oy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Bd(e, t) {
  ve(t, !0), Ue(e, Oy);
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
        L(a, s);
      },
      children: (a, s) => {
        var l = Ty(), u = xe(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (g, h) => {
            Te();
            var b = Ae("输出参数");
            L(g, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        We(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var b = Ny();
            L(g, b);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = B(u, 2);
        zt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, l);
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
var zy = /* @__PURE__ */ Me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ly = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Dy = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ay = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Iy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ve(t, !0), Ue(e, Iy);
  const [n, r] = nt(), o = () => ne(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var N;
    let H = (N = o()) == null ? void 0 : N.data[s()], P;
    if (H && a().length > 0) {
      let A = H;
      for (let R = 0; R < a().length; R++) {
        const W = a()[R];
        R == a().length - 1 ? P = A[W] : A = A[W].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: d } = Dt(), v = (N, H) => {
    d(l, (P) => {
      const A = P.data[s()];
      if (A && a().length > 0) {
        let R = A;
        for (let W = 0; W < a().length; W++) {
          const Q = a()[W];
          W == a().length - 1 ? R[Q] = { ...R[Q], [N]: H } : R = R[Q].children;
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
  let b;
  const x = () => {
    d(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let P = H;
        for (let A = 0; A < a().length; A++) {
          const R = a()[A];
          A == a().length - 1 ? P.splice(R, 1) : P = P[R].children;
        }
      }
      return {
        [s()]: [...ya(H)]
      };
    }), b == null || b.hide();
  }, $ = () => {
    d(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let P = H;
        for (let A = 0; A < a().length; A++) {
          const R = a()[A];
          A == a().length - 1 ? P[R].children ? P[R].children.push({
            id: pr(),
            name: "newParam",
            dataType: "String"
          }) : P[R].children = [
            {
              id: pr(),
              name: "newParam",
              dataType: "String"
            }
          ] : P = P[R].children;
        }
      }
      return {
        [s()]: [...ya(H)]
      };
    });
  };
  var p = Ay(), C = xe(p), w = Y(C);
  {
    var k = (N) => {
      var H = Je(), P = xe(H);
      Mt(P, 17, a, zr, (A, R) => {
        Te();
        var W = Ae(" ");
        L(A, W);
      }), L(N, H);
    };
    ye(w, (N) => {
      a().length > 1 && N(k);
    });
  }
  var V = B(w, 2);
  const E = /* @__PURE__ */ Pe(() => f(c).nameDisabled === !0);
  vt(V, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (N) => {
      g("name", N);
    },
    get disabled() {
      return f(E);
    }
  }), Z(C);
  var T = B(C, 2), O = Y(T);
  const D = /* @__PURE__ */ Pe(() => f(c).dataType ? [f(c).dataType] : []), I = /* @__PURE__ */ Pe(() => f(c).dataTypeDisabled === !0);
  Qt(O, {
    items: Td,
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
  var z = B(O, 2);
  {
    var q = (N) => {
      We(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (H, P) => {
          var A = zy();
          L(H, A);
        },
        $$slots: { default: !0 }
      });
    };
    ye(z, (N) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && N(q);
    });
  }
  Z(T);
  var M = B(T, 2), _ = Y(M);
  _n(
    Gr(_, {
      placement: "bottom",
      floating: (N) => {
        var H = Dy(), P = Y(H), A = B(Y(P));
        const R = /* @__PURE__ */ Pe(() => f(c).defaultValue || "");
        mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(R);
          },
          onchange: (oe) => {
            g("defaultValue", oe);
          }
        }), Z(P);
        var W = B(P, 2), Q = B(Y(W));
        const G = /* @__PURE__ */ Pe(() => f(c).description || "");
        mt(Q, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(G);
          },
          onchange: (oe) => {
            g("description", oe);
          }
        }), Z(W);
        var X = B(W, 2);
        {
          var me = (oe) => {
            var pe = Ly(), se = Y(pe);
            We(se, {
              onclick: x,
              children: (Se, we) => {
                Te();
                var He = Ae("删除");
                L(Se, He);
              },
              $$slots: { default: !0 }
            }), Z(pe), L(oe, pe);
          };
          ye(X, (oe) => {
            f(c).deleteDisabled !== !0 && oe(me);
          });
        }
        Z(H), L(N, H);
      },
      children: (N, H) => {
        na(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => b = N,
    () => b
  ), Z(M), L(e, p);
  var S = ge({
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
  return r(), S;
}
ue(qd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var By = /* @__PURE__ */ re("<!> <!>", 1), qy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Zy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Yy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nr(e, t) {
  ve(t, !0), Ue(e, Yy);
  const [n, r] = nt(), o = () => ne(f(u), "$node", n), i = (x, $ = pt, p = pt) => {
    var C = Je(), w = xe(C);
    Mt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, V, E) => {
        var T = By(), O = xe(T);
        const D = /* @__PURE__ */ Pe(() => [...p(), f(E)]);
        qd(O, {
          get parameter() {
            return f(V);
          },
          get position() {
            return f(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var I = B(O, 2);
        {
          var z = (q) => {
            var M = /* @__PURE__ */ $e(() => [...p(), f(E)]);
            i(q, () => f(V).children, () => f(M));
          };
          ye(I, (q) => {
            f(V).children && q(z);
          });
        }
        L(k, T);
      },
      (k) => {
        var V = Je(), E = xe(V);
        {
          var T = (O) => {
            var D = qy(), I = Y(D, !0);
            Z(D), ke(() => ct(I, a())), L(O, D);
          };
          ye(E, (O) => {
            p().length === 0 && O(T);
          });
        }
        L(k, V);
      }
    ), L(x, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Pe(() => yr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Ry(), v = Y(d);
  {
    var g = (x) => {
      var $ = Zy();
      Te(4), L(x, $);
    };
    ye(v, (x) => {
      f(c).length !== 0 && x(g);
    });
  }
  var h = B(v, 2);
  i(h, () => f(c) || [], () => []), Z(d), L(e, d);
  var b = ge({
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
ue(nr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ky = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Wy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), jy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Fy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Gy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Jy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Zd(e, t) {
  ve(t, !0), Ue(e, Jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = Qn();
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
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Ky();
        L(c, d);
      },
      children: (c, d) => {
        var v = Uy(), g = xe(v), h = Y(g);
        Ge(h, {
          level: 3,
          children: (J, Ve) => {
            Te();
            var j = Ae("输入参数");
            L(J, j);
          },
          $$slots: { default: !0 }
        });
        var b = B(h, 2);
        We(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, Ve) => {
            var j = Wy();
            L(J, j);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = B(g, 2);
        zt(x, {});
        var $ = B(x, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (J, Ve) => {
            Te();
            var j = Ae("模型设置");
            L(J, j);
          },
          $$slots: { default: !0 }
        });
        var p = B($, 4), C = Y(p);
        const w = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        Qt(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const Ve = J.value;
            l(o, () => ({ llmId: Ve }));
          },
          get value() {
            return f(w);
          }
        });
        var k = B(C, 2);
        na(k, {}), Z(p);
        var V = B(p, 4), E = Y(V), T = Y(E), O = Y(T);
        Z(T);
        var D = B(T, 2);
        Kn(D), D.__input = [Xy, l, o], Z(E), Z(V);
        var I = B(V, 2), z = Y(I), q = Y(z), M = Y(q);
        Z(q);
        var _ = B(q, 2);
        Kn(_), _.__input = [jy, l, o], Z(z), Z(I);
        var S = B(I, 2), N = Y(S), H = Y(N), P = Y(H);
        Z(H);
        var A = B(H, 2);
        Kn(A), A.__input = [Fy, l, o], Z(N), Z(S);
        var R = B(S, 4), W = Y(R);
        const Q = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        mt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(Q);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), Z(R);
        var G = B(R, 4), X = Y(G);
        const me = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        mt(X, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(me);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), Z(G);
        var oe = B(G, 2), pe = Y(oe);
        Ge(pe, {
          level: 3,
          mt: "10px",
          children: (J, Ve) => {
            Te();
            var j = Ae("输出参数");
            L(J, j);
          },
          $$slots: { default: !0 }
        });
        var se = B(pe, 2);
        const Se = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        Qt(se, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (J) => {
            u(J.value);
          },
          get value() {
            return f(Se);
          }
        });
        var we = B(se, 2);
        {
          var He = (J) => {
            We(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Ve, j) => {
                var Ce = Gy();
                L(Ve, Ce);
              },
              $$slots: { default: !0 }
            });
          };
          ye(we, (J) => {
            n().outType === "json" && J(He);
          });
        }
        Z(oe);
        var ce = B(oe, 2);
        nr(ce, {}), ke(() => {
          ct(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Uo(D, n().temperature ?? 0.5), ct(M, `Top P: ${n().topP ?? 0.9 ?? ""}`), Uo(_, n().topP ?? 0.9), ct(P, `Top K: ${n().topK ?? 50 ?? ""}`), Uo(A, n().topK ?? 50);
        }), L(c, v);
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
ue(Zd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ew = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rd(e, t) {
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
  const o = ht(), { addParameter: i } = Mn(), { updateNodeData: a } = Dt(), s = [
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
        var u = Qy();
        L(l, u);
      },
      children: (l, u) => {
        var c = nw(), d = xe(c), v = Y(d);
        Ge(v, {
          level: 3,
          children: (D, I) => {
            Te();
            var z = Ae("输入参数");
            L(D, z);
          },
          $$slots: { default: !0 }
        });
        var g = B(v, 2);
        We(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, I) => {
            var z = ew();
            L(D, z);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = B(d, 2);
        zt(h, {});
        var b = B(h, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            Te();
            var z = Ae("代码");
            L(D, z);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), $ = Y(x);
        const p = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Qt($, {
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
        }), Z(x);
        var C = B(x, 4), w = Y(C);
        const k = /* @__PURE__ */ Pe(() => n().code || "");
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
        }), Z(C);
        var V = B(C, 2), E = Y(V);
        Ge(E, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            Te();
            var z = Ae("输出参数");
            L(D, z);
          },
          $$slots: { default: !0 }
        });
        var T = B(E, 2);
        We(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, I) => {
            var z = tw();
            L(D, z);
          },
          $$slots: { default: !0 }
        }), Z(V);
        var O = B(V, 2);
        nr(O, {}), L(l, c);
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
ue(Rd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), iw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ve(t, !0), Ue(e, sw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), { updateNodeData: a } = Dt();
  return Gt(() => {
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
        var l = ow();
        L(s, l);
      },
      children: (s, l) => {
        var u = aw(), c = xe(u), d = Y(c);
        Ge(d, {
          level: 3,
          children: (k, V) => {
            Te();
            var E = Ae("输入参数");
            L(k, E);
          },
          $$slots: { default: !0 }
        });
        var v = B(d, 2);
        We(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, V) => {
            var E = iw();
            L(k, E);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = B(c, 2);
        zt(g, {});
        var h = B(g, 2);
        Ge(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            Te();
            var E = Ae("模板内容");
            L(k, E);
          },
          $$slots: { default: !0 }
        });
        var b = B(h, 2), x = Y(b);
        const $ = /* @__PURE__ */ Pe(() => n().template || "");
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
        }), Z(b);
        var p = B(b, 2), C = Y(p);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            Te();
            var E = Ae("输出参数");
            L(k, E);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var w = B(p, 2);
        nr(w, {}), L(s, u);
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
ue(Yd, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), uw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), vw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), pw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), hw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), mw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Kd(e, t) {
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
  ], i = ht(), { addParameter: a } = Mn(), { updateNodeData: s } = Dt();
  return pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = lw();
        L(l, u);
      },
      children: (l, u) => {
        var c = yw(), d = xe(c), v = Y(d);
        Ge(v, {
          level: 3,
          children: (ae, de) => {
            Te();
            var le = Ae("输入参数");
            L(ae, le);
          },
          $$slots: { default: !0 }
        });
        var g = B(v, 2);
        We(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (ae, de) => {
            var le = uw();
            L(ae, le);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = B(d, 2);
        zt(h, {});
        var b = B(h, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (ae, de) => {
            Te();
            var le = Ae("URL 地址");
            L(ae, le);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 2), $ = Y(x), p = Y($);
        const C = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        Qt(p, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const de = ae.value;
            s(i, () => ({ method: de }));
          },
          get value() {
            return f(C);
          }
        }), Z($);
        var w = B($, 2), k = Y(w);
        const V = /* @__PURE__ */ Pe(() => n().url || "");
        vt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            s(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return f(V);
          }
        }), Z(w), Z(x);
        var E = B(x, 2), T = Y(E);
        Ge(T, {
          level: 3,
          children: (ae, de) => {
            Te();
            var le = Ae("Http 头信息");
            L(ae, le);
          },
          $$slots: { default: !0 }
        });
        var O = B(T, 2);
        We(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ae, de) => {
            var le = cw();
            L(ae, le);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var D = B(E, 2);
        zt(D, { dataKeyName: "headers" });
        var I = B(D, 2);
        Ge(I, {
          level: 3,
          mt: "10px",
          children: (ae, de) => {
            Te();
            var le = Ae("Body");
            L(ae, le);
          },
          $$slots: { default: !0 }
        });
        var z = B(I, 2), q = Y(z), M = Y(q);
        const _ = /* @__PURE__ */ Pe(() => !n().bodyType);
        vt(M, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(_);
          },
          onchange: (ae) => {
            var de;
            (de = ae.target) != null && de.checked && s(i, { bodyType: "" });
          }
        }), Te(), Z(q);
        var S = B(q, 2), N = Y(S);
        const H = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        vt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(H);
          },
          onchange: (ae) => {
            var de;
            (de = ae.target) != null && de.checked && s(i, { bodyType: "form-data" });
          }
        }), Te(), Z(S);
        var P = B(S, 2), A = Y(P);
        const R = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        vt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(R);
          },
          onchange: (ae) => {
            var de;
            (de = ae.target) != null && de.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Te(), Z(P);
        var W = B(P, 2), Q = Y(W);
        const G = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        vt(Q, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(G);
          },
          onchange: (ae) => {
            var de;
            (de = ae.target) != null && de.checked && s(i, { bodyType: "json" });
          }
        }), Te(), Z(W);
        var X = B(W, 2), me = Y(X);
        const oe = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        vt(me, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(oe);
          },
          onchange: (ae) => {
            var de;
            (de = ae.target) != null && de.checked && s(i, { bodyType: "raw" });
          }
        }), Te(), Z(X), Z(z);
        var pe = B(z, 2);
        {
          var se = (ae) => {
            var de = fw(), le = xe(de), be = Y(le);
            Ge(be, {
              level: 3,
              children: (ee, Re) => {
                Te();
                var fe = Ae("参数");
                L(ee, fe);
              },
              $$slots: { default: !0 }
            });
            var et = B(be, 2);
            We(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (ee, Re) => {
                var fe = dw();
                L(ee, fe);
              },
              $$slots: { default: !0 }
            }), Z(le);
            var at = B(le, 2);
            zt(at, { dataKeyName: "formData" }), L(ae, de);
          };
          ye(pe, (ae) => {
            n().bodyType === "form-data" && ae(se);
          });
        }
        var Se = B(pe, 2);
        {
          var we = (ae) => {
            var de = gw(), le = xe(de), be = Y(le);
            Ge(be, {
              level: 3,
              children: (ee, Re) => {
                Te();
                var fe = Ae("Body 参数");
                L(ee, fe);
              },
              $$slots: { default: !0 }
            });
            var et = B(be, 2);
            We(et, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (ee, Re) => {
                var fe = vw();
                L(ee, fe);
              },
              $$slots: { default: !0 }
            }), Z(le);
            var at = B(le, 2);
            zt(at, { dataKeyName: "formUrlencoded" }), L(ae, de);
          };
          ye(Se, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(we);
          });
        }
        var He = B(Se, 2);
        {
          var ce = (ae) => {
            var de = pw(), le = Y(de);
            mt(le, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (be) => {
                s(i, { bodyJson: be.target.value });
              }
            }), Z(de), L(ae, de);
          };
          ye(He, (ae) => {
            n().bodyType === "json" && ae(ce);
          });
        }
        var J = B(He, 2);
        {
          var Ve = (ae) => {
            var de = hw(), le = Y(de);
            mt(le, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (be) => {
                s(i, { bodyRaw: be.target.value });
              }
            }), Z(de), L(ae, de);
          };
          ye(J, (ae) => {
            n().bodyType === "raw" && ae(Ve);
          });
        }
        var j = B(J, 2), Ce = Y(j);
        Ge(Ce, {
          level: 3,
          mt: "10px",
          children: (ae, de) => {
            Te();
            var le = Ae("输出参数");
            L(ae, le);
          },
          $$slots: { default: !0 }
        });
        var Ne = B(Ce, 2);
        We(Ne, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ae, de) => {
            var le = mw();
            L(ae, le);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var ze = B(j, 2);
        nr(ze, {}), L(l, c);
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
ue(Kd, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), bw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  ve(t, !0), Ue(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = Qn();
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
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = xw();
        L(u, c);
      },
      children: (u, c) => {
        var d = $w(), v = xe(d), g = Y(v);
        Ge(g, {
          level: 3,
          children: (z, q) => {
            Te();
            var M = Ae("输入参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var h = B(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, q) => {
            var M = bw();
            L(z, M);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var b = B(v, 2);
        zt(b, {});
        var x = B(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Te();
            var M = Ae("知识库设置");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), p = Y($);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        Qt(p, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (z) => {
            const q = z.value;
            l(o, () => ({ knowledgeId: q }));
          },
          get value() {
            return f(C);
          }
        }), Z($);
        var w = B($, 4), k = Y(w);
        vt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const q = z.target.value;
            l(o, () => ({ keyword: q }));
          }
        }), Z(w);
        var V = B(w, 4), E = Y(V);
        const T = /* @__PURE__ */ Pe(() => n().limit || "");
        vt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (z) => {
            const q = z.target.value;
            l(o, () => ({ limit: q }));
          },
          get value() {
            return f(T);
          }
        }), Z(V);
        var O = B(V, 2), D = Y(O);
        Ge(D, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Te();
            var M = Ae("输出参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        }), Z(O);
        var I = B(O, 2);
        nr(I, {}), L(u, d);
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
ue(Wd, { data: {} }, [], [], !0);
var _w = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), kw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ve(t, !0), Ue(e, Sw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn(), a = Qn();
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
  }), pn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = _w();
        L(u, c);
      },
      children: (u, c) => {
        var d = Ew(), v = xe(d), g = Y(v);
        Ge(g, {
          level: 3,
          children: (I, z) => {
            Te();
            var q = Ae("输入参数");
            L(I, q);
          },
          $$slots: { default: !0 }
        });
        var h = B(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, z) => {
            var q = kw();
            L(I, q);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var b = B(v, 2);
        zt(b, {});
        var x = B(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (I, z) => {
            Te();
            var q = Ae("搜索引擎设置");
            L(I, q);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), p = Y($);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        Qt(p, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const z = I.value;
            l(o, () => ({ engine: z }));
          },
          get value() {
            return f(C);
          }
        }), Z($);
        var w = B($, 4), k = Y(w);
        vt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const z = I.target.value;
            l(o, () => ({ keyword: z }));
          }
        }), Z(w);
        var V = B(w, 4), E = Y(V);
        vt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const z = I.target.value;
            l(o, () => ({ limit: z }));
          }
        }), Z(V);
        var T = B(V, 2), O = Y(T);
        Ge(O, {
          level: 3,
          mt: "10px",
          children: (I, z) => {
            Te();
            var q = Ae("输出参数");
            L(I, q);
          },
          $$slots: { default: !0 }
        }), Z(T);
        var D = B(T, 2);
        nr(D, {}), L(u, d);
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
var Mw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Vw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ re('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Hw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function jd(e, t) {
  ve(t, !0), Ue(e, Hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Mn();
  return Gt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", {
      name: "loopVar",
      nameDisabled: !0,
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
      icon: (a) => {
        var s = Mw();
        L(a, s);
      },
      handle: (a) => {
        Un(a, {
          type: "source",
          get position() {
            return Oe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Pw(), u = xe(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (x, $) => {
            Te();
            var p = Ae("循环变量");
            L(x, p);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var d = B(u, 2);
        zt(d, { dataKeyName: "loopVars" });
        var v = B(d, 2), g = Y(v);
        Ge(g, {
          level: 3,
          children: (x, $) => {
            Te();
            var p = Ae("输出参数");
            L(x, p);
          },
          $$slots: { default: !0 }
        });
        var h = B(g, 2);
        We(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (x, $) => {
            var p = Vw();
            L(x, p);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var b = B(v, 2);
        zt(b, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, l);
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
ue(jd, { data: {} }, [], [], !0);
const Nw = {
  startNode: Ld,
  codeNode: Rd,
  llmNode: Zd,
  templateNode: Yd,
  httpNode: Kd,
  knowledgeNode: Wd,
  searchEngineNode: Xd,
  loopNode: jd,
  endNode: Bd
};
var Tw = /* @__PURE__ */ re("<!> ", 1);
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
      var u = Tw(), c = xe(u);
      ls(c, n);
      var d = B(c);
      ke(() => ct(d, ` ${r() ?? ""}`)), L(s, u);
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
var Ow = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), zw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Lw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
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
  var u = Lw(), c = Y(u), d = Y(c), v = Y(d);
  wd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      U(n, $.value.toString(), !0);
    }
  }), Z(d);
  var g = B(d, 2), h = Y(g);
  Mt(h, 21, () => o, zr, ($, p) => {
    Ya($, lt(() => f(p)));
  }), Z(h);
  var b = B(h, 2);
  Mt(b, 21, () => a, zr, ($, p) => {
    Ya($, lt(() => f(p)));
  }), Z(b), Z(g), Z(c);
  var x = B(c, 2);
  We(x, {
    onclick: () => {
      U(r, f(r) ? "" : "show", !0);
    },
    children: ($, p) => {
      var C = Je(), w = xe(C);
      {
        var k = (E) => {
          var T = Ow();
          L(E, T);
        }, V = (E) => {
          var T = zw();
          L(E, T);
        };
        ye(w, (E) => {
          f(r) === "show" ? E(k) : E(V, !1);
        });
      }
      L($, C);
    },
    $$slots: { default: !0 }
  }), Z(u), ke(() => {
    $t(u, 1, `tf-toolbar ${f(r) ?? ""}`), ft(h, `display: ${f(n) === "base" ? "flex" : "none"}`), ft(b, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), ge();
}
ue(Fd, {}, [], [], !0);
const Dw = () => {
  const { nodeLookup: e } = Xe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Aw = () => {
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
}, Iw = () => {
  const { edges: e } = Xe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Bw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Zw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Yw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Kw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Xw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Fw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
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
  ]), i = ht(), { addParameter: a } = Mn(), s = Dt(), { updateNodeData: l } = s, u = ($) => {
    l(i, $);
  }, c = ($, p) => {
    var C;
    u({ [$]: (C = p.target) == null ? void 0 : C.value });
  }, d = { ...o, id: i, data: r() }, v = document.createElement("div"), g = Qn().customNodes[t.type];
  (n = g.render) == null || n.call(g, v, d, s);
  const h = g.forms;
  let b;
  Gt(() => {
    r().expand && b && b.append(v);
  }), Gt(() => {
    var $;
    r() && (($ = g.onUpdate) == null || $.call(g, v, { ...d, data: r() }));
  }), Gt(() => {
    !r().parameters && g.parameters && u({
      parameters: Ti(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), Gt(() => {
    !r().outputDefs && g.outputDefs && u({
      outputDefs: Ti(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  const x = /* @__PURE__ */ Pe(() => ({
    ...r(),
    description: g.description
  }));
  return pn(e, lt(
    {
      get data() {
        return f(x);
      }
    },
    () => o,
    {
      icon: ($) => {
        var p = Je(), C = xe(p);
        ls(C, () => g.icon), L($, p);
      },
      children: ($, p) => {
        var C = Fw(), w = xe(C);
        {
          var k = (I) => {
            var z = qw(), q = xe(z), M = Y(q);
            Ge(M, {
              level: 3,
              children: (H, P) => {
                Te();
                var A = Ae("输入参数");
                L(H, A);
              },
              $$slots: { default: !0 }
            });
            var _ = B(M, 2);
            {
              var S = (H) => {
                We(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (P, A) => {
                    var R = Bw();
                    L(P, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(_, (H) => {
                g.parametersAddEnable !== !1 && H(S);
              });
            }
            Z(q);
            var N = B(q, 2);
            zt(N, {}), L(I, z);
          };
          ye(w, (I) => {
            g.parametersEnable !== !1 && I(k);
          });
        }
        var V = B(w, 2);
        {
          var E = (I) => {
            var z = Je(), q = xe(z);
            Mt(q, 17, () => h, zr, (M, _) => {
              var S = Je(), N = xe(S);
              {
                var H = (A) => {
                  var R = Zw(), W = xe(R), Q = Y(W, !0);
                  Z(W);
                  var G = B(W, 2), X = Y(G);
                  const me = /* @__PURE__ */ Pe(() => r()[f(_).name] || f(_).defaultValue);
                  vt(X, lt(
                    {
                      get placeholder() {
                        return f(_).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(me);
                      }
                    },
                    () => f(_).attrs,
                    {
                      onchange: (oe) => {
                        c(f(_).name, oe);
                      }
                    }
                  )), Z(G), ke(() => ct(Q, f(_).label)), L(A, R);
                }, P = (A, R) => {
                  {
                    var W = (G) => {
                      var X = Rw(), me = xe(X), oe = Y(me, !0);
                      Z(me);
                      var pe = B(me, 2), se = Y(pe);
                      const Se = /* @__PURE__ */ Pe(() => r()[f(_).name] || f(_).defaultValue);
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
                      )), Z(pe), ke(() => ct(oe, f(_).label)), L(G, X);
                    }, Q = (G, X) => {
                      {
                        var me = (pe) => {
                          var se = Yw(), Se = xe(se), we = Y(Se, !0);
                          Z(Se);
                          var He = B(Se, 2), ce = Y(He), J = Y(ce), Ve = Y(J);
                          Z(J);
                          var j = B(J, 2);
                          Kn(j);
                          var Ce = (ze) => u({
                            [f(_).name]: parseFloat(ze.target.value)
                          });
                          let Ne;
                          Z(ce), Z(He), ke(() => {
                            ct(we, f(_).label), ct(Ve, `${f(_).description ?? ""}: ${r()[f(_).name] ?? f(_).defaultValue ?? ""}`), Ne = Yt(
                              j,
                              Ne,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(_).attrs,
                                value: r()[f(_).name] ?? f(_).defaultValue,
                                oninput: Ce
                              },
                              "svelte-q0cqsa"
                            );
                          }), L(pe, se);
                        }, oe = (pe, se) => {
                          {
                            var Se = (He) => {
                              var ce = Kw(), J = xe(ce), Ve = Y(J, !0);
                              Z(J);
                              var j = B(J, 2), Ce = Y(j);
                              const Ne = /* @__PURE__ */ Pe(() => f(_).options || []), ze = /* @__PURE__ */ Pe(() => r()[f(_).name] ? [r()[f(_).name]] : [f(_).defaultValue]);
                              Qt(Ce, {
                                get items() {
                                  return f(Ne);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(_).placeholder;
                                },
                                onSelect: (ae) => {
                                  const de = ae.value;
                                  u({ [f(_).name]: de });
                                },
                                get value() {
                                  return f(ze);
                                }
                              }), Z(j), ke(() => ct(Ve, f(_).label)), L(He, ce);
                            }, we = (He, ce) => {
                              {
                                var J = (j) => {
                                  var Ce = Ww(), Ne = xe(Ce), ze = Y(Ne, !0);
                                  Z(Ne);
                                  var ae = B(Ne, 2), de = Y(ae);
                                  const le = /* @__PURE__ */ Pe(() => {
                                    var be;
                                    return (be = f(_).chosen) == null ? void 0 : be.buttonText;
                                  });
                                  yd(de, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f(_).placeholder;
                                    },
                                    get buttonText() {
                                      return f(le);
                                    },
                                    onChosen: (be, et, at) => {
                                      var ee, Re;
                                      (Re = (ee = f(_).chosen) == null ? void 0 : ee.onChosen) == null || Re.call(ee, u, be, et, at);
                                    },
                                    get value() {
                                      var be;
                                      return r()[((be = f(_).chosen) == null ? void 0 : be.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var be;
                                      return r()[((be = f(_).chosen) == null ? void 0 : be.labelDataKey) || ""];
                                    }
                                  }), Z(ae), ke(() => ct(ze, f(_).label)), L(j, Ce);
                                }, Ve = (j, Ce) => {
                                  {
                                    var Ne = (ze) => {
                                      Ge(ze, lt({ level: 3, mt: "10px" }, () => f(_).attrs, {
                                        children: (ae, de) => {
                                          Te();
                                          var le = Ae();
                                          ke(() => ct(le, f(_).label)), L(ae, le);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ye(
                                      j,
                                      (ze) => {
                                        f(_).type === "heading" && ze(Ne);
                                      },
                                      Ce
                                    );
                                  }
                                };
                                ye(
                                  He,
                                  (j) => {
                                    f(_).type === "chosen" ? j(J) : j(Ve, !1);
                                  },
                                  ce
                                );
                              }
                            };
                            ye(
                              pe,
                              (He) => {
                                f(_).type === "select" ? He(Se) : He(we, !1);
                              },
                              se
                            );
                          }
                        };
                        ye(
                          G,
                          (pe) => {
                            f(_).type === "slider" ? pe(me) : pe(oe, !1);
                          },
                          X
                        );
                      }
                    };
                    ye(
                      A,
                      (G) => {
                        f(_).type === "textarea" ? G(W) : G(Q, !1);
                      },
                      R
                    );
                  }
                };
                ye(N, (A) => {
                  f(_).type === "input" ? A(H) : A(P, !1);
                });
              }
              L(M, S);
            }), L(I, z);
          };
          ye(V, (I) => {
            h && I(E);
          });
        }
        var T = B(V, 2);
        _n(T, (I) => b = I, () => b);
        var O = B(T, 2);
        {
          var D = (I) => {
            var z = jw(), q = xe(z), M = Y(q);
            Ge(M, {
              level: 3,
              mt: "10px",
              children: (H, P) => {
                Te();
                var A = Ae("输出参数");
                L(H, A);
              },
              $$slots: { default: !0 }
            });
            var _ = B(M, 2);
            {
              var S = (H) => {
                We(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (P, A) => {
                    var R = Xw();
                    L(P, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(_, (H) => {
                g.outputDefsAddEnable !== !1 && H(S);
              });
            }
            Z(q);
            var N = B(q, 2);
            nr(N, {}), L(I, z);
          };
          ye(O, (I) => {
            g.outputDefsEnable !== !1 && I(D);
          });
        }
        ke(() => {
          ft(T, g.rootStyle || ""), $t(T, 1, vn(g.rootClass), "svelte-q0cqsa");
        }), L($, C);
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
ue(Gd, { data: {} }, [], [], !0);
const Uw = () => {
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
}, Jw = () => {
  const { edges: e } = Xe();
  return {
    deleteEdge: (t) => {
      e.update((n) => n.filter((r) => r.id !== t));
    }
  };
};
var Qw = /* @__PURE__ */ re('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), ex = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), tx = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const nx = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Ud(e, t) {
  ve(t, !0), Ue(e, nx);
  const [n, r] = nt(), o = () => ne(O, "$nodes", n), i = () => ne(D, "$edges", n), a = () => ne(I, "$viewport", n), s = y(t, "onInit", 7), l = Dt();
  s()(l);
  let u = /* @__PURE__ */ kt(!1), c = /* @__PURE__ */ kt(void 0);
  const { updateEdgeData: d } = Uw(), v = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, g = (P) => {
    var A;
    P.preventDefault();
    const R = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), W = (A = P.dataTransfer) == null ? void 0 : A.getData("application/tinyflow"), Q = W ? JSON.parse(W) : {}, G = {
      id: `node_${pr()}`,
      position: R,
      data: {},
      ...Q
    };
    oi.addNode(G), oi.selectNodeOnly(G.id);
  }, { getNode: h } = Dw(), b = (P) => {
    const A = h(P.source), R = h(P.target);
    if (P.sourceHandle === "loop_handle" || A.parentId) {
      const W = l.getEdges();
      for (let Q of W)
        if (Q.target === P.target) {
          const G = h(Q.source);
          if (P.sourceHandle === "loop_handle" && G.parentId !== A.id || A.parentId && G.parentId !== A.parentId)
            return !1;
        }
    }
    return !(!A.parentId && R.parentId && R.parentId !== A.id);
  }, { ensureParentInNodesBefore: x } = Aw(), $ = (P, A) => {
    if (!A.isValid)
      return;
    const R = A.toNode;
    if (R.parentId)
      return;
    const W = A.fromNode, Q = A.fromHandle, G = { position: { ...R.position } };
    if (Q.id === "loop_handle" ? G.parentId = W.id : W.parentId && (G.parentId = W.parentId), G.parentId) {
      const X = h(G.parentId);
      G.position = {
        x: R.position.x - X.position.x,
        y: R.position.y - X.position.y
      }, x(G.parentId, R.id), l.updateNode(R.id, G);
    }
  }, { getEdgesByTarget: p } = Iw(), C = (P) => {
    P.edges.forEach((A) => {
      var R;
      A.id === ((R = f(c)) == null ? void 0 : R.id) && (U(c, null), U(u, !1));
      const W = h(A.target);
      if (W && W.parentId) {
        const Q = p(A.target), G = h(W.parentId);
        if (Q.length === 0)
          l.updateNode(W.id, {
            parentId: void 0,
            position: {
              x: W.position.x + G.position.x,
              y: W.position.y + G.position.y
            }
          });
        else {
          let X = !1;
          for (let me = 0; me < Q.length; me++) {
            const oe = Q[me], pe = h(oe.source);
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
  }, { deleteEdge: w } = Jw(), k = (P, A) => {
  }, V = (P) => {
  }, E = {}, T = Qn().customNodes;
  if (T)
    for (let P of Object.keys(T))
      E[P] = Gd;
  const { nodes: O, edges: D, viewport: I } = Xe(), z = Qn().onDataChange;
  z && (O.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), D.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), I.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var q = tx(), M = Y(q);
  const _ = /* @__PURE__ */ Pe(() => ({ ...Nw, ...E })), S = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(M, lt(
    {
      get nodeTypes() {
        return f(_);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: $,
      onconnectstart: k,
      onconnect: V,
      connectionRadius: 50,
      onedgecreate: (P) => ({ ...P, id: pr() }),
      ondelete: C,
      onclick: (P) => {
        const A = P.target;
        A.classList.contains("svelte-flow__edge-interaction") || A.classList.contains("panel-content") || A.closest(".panel-content") || (U(u, !1), U(c, null));
      },
      get defaultEdgeOptions() {
        return f(S);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (P) => {
          U(u, !0), U(c, P.detail.edge, !0);
        }
      },
      children: (P, A) => {
        var R = ex(), W = xe(R);
        vd(W, {});
        var Q = B(W, 2);
        cd(Q, {});
        var G = B(Q, 2);
        pd(G, {});
        var X = B(G, 2);
        {
          var me = (oe) => {
            Lo(oe, {
              children: (pe, se) => {
                var Se = Qw(), we = B(Y(Se), 4), He = Y(we);
                const ce = /* @__PURE__ */ Pe(() => {
                  var Ce, Ne;
                  return (Ne = (Ce = f(c)) == null ? void 0 : Ce.data) == null ? void 0 : Ne.condition;
                });
                mt(He, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(ce);
                  },
                  onchange: (Ce) => {
                    var Ne;
                    f(c) && d(f(c).id, { condition: (Ne = Ce.target) == null ? void 0 : Ne.value });
                  }
                }), Z(we);
                var J = B(we, 2), Ve = Y(J);
                We(Ve, {
                  onclick: () => {
                    var Ce;
                    w((Ce = f(c)) == null ? void 0 : Ce.id), U(u, !1);
                  },
                  children: (Ce, Ne) => {
                    Te();
                    var ze = Ae("删除");
                    L(Ce, ze);
                  },
                  $$slots: { default: !0 }
                });
                var j = B(Ve, 2);
                We(j, {
                  primary: !0,
                  onclick: () => {
                    U(u, !1);
                  },
                  children: (Ce, Ne) => {
                    Te();
                    var ze = Ae("保存");
                    L(Ce, ze);
                  },
                  $$slots: { default: !0 }
                }), Z(J), Z(Se), L(pe, Se);
              },
              $$slots: { default: !0 }
            });
          };
          ye(X, (oe) => {
            f(u) && oe(me);
          });
        }
        L(P, R);
      },
      $$slots: { default: !0 }
    }
  ));
  var N = B(M, 2);
  Fd(N, {}), Z(q), L(e, q);
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
ue(Ud, { onInit: {} }, [], [], !0);
function rx(e, t) {
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
customElements.define("tinyflow-component", ue(rx, { options: {}, onInit: {} }, [], [], !1));
const cx = /* @__PURE__ */ f1({
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
    return g1(() => {
      r.value && (o = new q2({
        ...n,
        element: r.value
      }));
    }), p1(() => {
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
  cx as Tinyflow
};
//# sourceMappingURL=index.js.map
