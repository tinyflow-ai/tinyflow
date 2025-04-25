import { defineComponent as l1, ref as u1, onMounted as c1, onUnmounted as d1, createElementBlock as f1, openBlock as v1, normalizeStyle as g1, normalizeClass as h1 } from "vue";
var p1 = Object.defineProperty, Yl = (e) => {
  throw TypeError(e);
}, m1 = (e, t, n) => t in e ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Lt = (e, t, n) => m1(e, typeof t != "symbol" ? t + "" : t, n), qa = (e, t, n) => t.has(e) || Yl("Cannot " + n), ut = (e, t, n) => (qa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xr = (e, t, n) => t.has(e) ? Yl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ri = (e, t, n, r) => (qa(e, t, "write to private field"), t.set(e, n), n), y1 = (e, t, n) => (qa(e, t, "access private method"), n);
const w1 = "5";
var Vs;
typeof window < "u" && ((Vs = window.__svelte ?? (window.__svelte = {})).v ?? (Vs.v = /* @__PURE__ */ new Set())).add(w1);
let Br = !1, x1 = !1;
function b1() {
  Br = !0;
}
b1();
const Ra = 1, Za = 2, Wl = 4, $1 = 8, C1 = 16, _1 = 1, k1 = 2, Kl = 4, S1 = 8, E1 = 16, jl = 1, P1 = 2, Ba = "[", Xa = "[!", Ya = "]", $r = {}, Dt = Symbol(), M1 = "http://www.w3.org/1999/xhtml", H1 = "http://www.w3.org/2000/svg", D1 = !1;
function Di(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ko = Array.isArray, O1 = Array.prototype.indexOf, Wa = Array.from, oi = Object.keys, lo = Object.defineProperty, On = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, L1 = Object.prototype, V1 = Array.prototype, Ka = Object.getPrototypeOf, Ts = Object.isExtensible;
function Jr(e) {
  return typeof e == "function";
}
const vt = () => {
};
function T1(e) {
  return e();
}
function uo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cn = 2, Gl = 4, Oi = 8, ja = 16, An = 32, vr = 64, ii = 128, Zt = 256, ai = 512, Et = 1024, xn = 2048, er = 4096, Ln = 8192, Li = 16384, z1 = 32768, Xr = 65536, N1 = 1 << 17, A1 = 1 << 19, Ul = 1 << 20, ga = 1 << 21, Wn = Symbol("$state"), Fa = Symbol("legacy props"), I1 = Symbol("");
function q1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function R1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Z1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function B1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function X1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Y1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function W1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function K1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function j1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let De = !1;
function qt(e) {
  De = e;
}
let Ae;
function St(e) {
  if (e === null)
    throw Vi(), $r;
  return Ae = e;
}
function bn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(Ae)
  );
}
function Z(e) {
  if (De) {
    if (/* @__PURE__ */ Sn(Ae) !== null)
      throw Vi(), $r;
    Ae = e;
  }
}
function Le(e = 1) {
  if (De) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(n);
    Ae = n;
  }
}
function ha() {
  for (var e = 0, t = Ae; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ya) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ba || n === Xa) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(t)
    );
    t.remove(), t = r;
  }
}
function sn(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = Ka(e);
  if (t !== L1 && t !== V1)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ko(e), o = /* @__PURE__ */ _t(0), i = Fe, a = (s) => {
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && W1();
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
            a(() => /* @__PURE__ */ _t(Dt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Dt), zs(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Wn)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = On(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ _t(sn(v ? s[l] : Dt))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Dt ? void 0 : g;
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
          if (d !== void 0 && v !== Dt)
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
        if (l === Wn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Dt || Reflect.has(s, l);
        if (c !== void 0 || Ge !== null && (!d || (u = On(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ _t(d ? sn(s[l]) : Dt)), n.set(l, c));
          var v = f(c);
          if (v === Dt)
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
            x !== void 0 ? J(x, Dt) : p in s && (x = a(() => /* @__PURE__ */ _t(Dt)), n.set(p + "", x));
          }
        v === void 0 ? (!g || (d = On(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ _t(void 0)), J(
          v,
          a(() => sn(u))
        ), n.set(l, v)) : (g = v.v !== Dt, J(
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
          return v === void 0 || v.v !== Dt;
        });
        for (var [u, c] of n)
          c.v !== Dt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        K1();
      }
    }
  );
}
function zs(e, t = 1) {
  J(e, e.v + t);
}
var Ot, Jl, Ql, eu;
function pa() {
  if (Ot === void 0) {
    Ot = window, Jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ql = On(t, "firstChild").get, eu = On(t, "nextSibling").get, Ts(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ts(n) && (n.__t = void 0);
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
function Y(e, t) {
  if (!De)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(Tn());
  else if (t && n.nodeType !== 3) {
    var r = Tn();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function we(e, t) {
  if (!De) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sn(n) : n;
  }
  return Ae;
}
function R(e, t = 1, n = !1) {
  let r = De ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(r);
  if (!De)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Tn();
    return r === null ? o == null || o.after(a) : r.before(a), St(a), a;
  }
  return St(r), /** @type {TemplateNode} */
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
function Mr(e) {
  var t = cn | xn, n = Fe !== null && Fe.f & cn ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Ge === null || n !== null && n.f & Zt ? t |= Zt : Ge.f |= Ul, {
    ctx: We,
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
  return t.equals = Ja, t;
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
  var t = ru(e), n = (Xn || e.f & Zt) && e.deps !== null ? er : Et;
  Ut(e, n), e.equals(t) || (e.v = t, e.wv = hu());
}
function iu(e) {
  Ge === null && Fe === null && Z1(), Fe !== null && Fe.f & Zt && Ge === null && R1(), Eo && q1();
}
function G1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: We,
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
function Qa(e) {
  const t = gr(Oi, null, !1);
  return Ut(t, Et), t.teardown = e, t;
}
function un(e) {
  iu();
  var t = Ge !== null && (Ge.f & An) !== 0 && We !== null && !We.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      We
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
  return iu(), Yr(e);
}
function J1(e) {
  const t = gr(vr, e, !0);
  return () => {
    Gt(t);
  };
}
function Q1(e) {
  const t = gr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Gt(t), r(void 0);
    }) : (Gt(t), r(void 0));
  });
}
function It(e) {
  return gr(Gl, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    We
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function mt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    We
  );
  Yr(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Et && Ut(n, er), Wr(n) && zi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return gr(Oi, e, !0);
}
function Ee(e, t = [], n = Mr) {
  const r = t.map(n);
  return hr(() => e(...r.map(f)));
}
function hr(e, t = 0) {
  return gr(Oi | ja | t, e, !0);
}
function zn(e, t = !0) {
  return gr(Oi | An, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Eo, r = Fe;
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
    n.f & vr ? n.parent = null : Gt(n, t), n = r;
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
  su(e, t && !n), ci(e, 0), Ut(e, Li);
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
function es(e, t, n) {
  if (!(e.f & Ln)) {
    if (e.f ^= Ln, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & An) !== 0;
      es(r, t, i ? n : !1), r = o;
    }
  }
}
function co(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & Ln) {
    e.f ^= Ln, e.f & Et || (e.f ^= Et), Wr(e) && (Ut(e, xn), Ni(e));
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
let fo = [], vo = [];
function du() {
  var e = fo;
  fo = [], uo(e);
}
function fu() {
  var e = vo;
  vo = [], uo(e);
}
function So(e) {
  fo.length === 0 && queueMicrotask(du), fo.push(e);
}
function nf(e) {
  vo.length === 0 && tf(fu), vo.push(e);
}
function Ns() {
  fo.length > 0 && du(), vo.length > 0 && fu();
}
let Fo = !1, si = !1, li = null, ir = !1, Eo = !1;
function As(e) {
  Eo = e;
}
let ao = [], Fe = null, mn = !1;
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
  Fe !== null && Fe.f & ga && (Ft === null ? rf([e]) : Ft.push(e));
}
let Ct = null, At = 0, Kt = null;
function of(e) {
  Kt = e;
}
let gu = 1, ui = 0, Xn = !1;
function hu() {
  return ++gu;
}
function Wr(e) {
  var t, n = e.f;
  if (n & xn)
    return !0;
  if (n & er) {
    var r = e.deps, o = (n & Zt) !== 0;
    if (r !== null) {
      var i, a, s = (n & ai) !== 0, l = o && Ge !== null && !Xn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ai), l && d !== null && !(d.f & Zt) && (c.f ^= Zt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Wr(
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
  return (e.f & Li) === 0 && (e.parent === null || (e.parent.f & ii) === 0);
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
  var t, n = Ct, r = At, o = Kt, i = Fe, a = Xn, s = Ft, l = We, u = mn, c = e.f;
  Ct = /** @type {null | Value[]} */
  null, At = 0, Kt = null, Xn = (c & Zt) !== 0 && (mn || !ir || Fe === null), Fe = c & (An | vr) ? null : e, Ft = null, qs(e.ctx), mn = !1, ui++, e.f |= ga;
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
    if (Ai() && Kt !== null && !mn && v !== null && !(e.f & (cn | er | xn)))
      for (g = 0; g < /** @type {Source[]} */
      Kt.length; g++)
        pu(
          Kt[g],
          /** @type {Effect} */
          e
        );
    return i !== e && (ui++, Kt !== null && (o === null ? o = Kt : o.push(.../** @type {Source[]} */
    Kt))), d;
  } finally {
    Ct = n, At = r, Kt = o, Fe = i, Xn = a, Ft = s, qs(l), mn = u, e.f ^= ga;
  }
}
function lf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = O1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & cn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ct === null || !Ct.includes(t)) && (Ut(t, er), t.f & (Zt | ai) || (t.f ^= ai), nu(
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
  if (!(t & Li)) {
    Ut(e, Et);
    var n = Ge, r = We, o = ir;
    Ge = e, ir = !0;
    try {
      t & ja ? ef(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = gu;
      var a = e.deps, s;
      D1 && x1 && e.f & xn;
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
    for (ir = !0; ao.length > 0; ) {
      t++ > 1e3 && uf();
      var n = ao, r = n.length;
      ao = [];
      for (var o = 0; o < r; o++) {
        var i = df(n[o]);
        cf(i);
      }
      go.clear();
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
      if (!(r.f & (Li | Ln)))
        try {
          Wr(r) && (zi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
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
    if (n & (vr | An)) {
      if (!(n & Et)) return;
      t.f ^= Et;
    }
  }
  ao.push(t);
}
function df(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (An | vr)) !== 0, i = o && (r & Et) !== 0;
    if (!i && !(r & Ln)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= Et;
      else {
        var a = Fe;
        try {
          Fe = n, Wr(n) && zi(n);
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
  for (Ns(); ao.length > 0; )
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
    i !== null && !(i.f & Zt) && (o.f ^= Zt);
  }
  return n && (o = /** @type {Derived} */
  e, Wr(o) && ou(o)), Eo && go.has(e) ? go.get(e) : e.v;
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
    const n = Ka(e);
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
const go = /* @__PURE__ */ new Map();
function Dr(e, t) {
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
  const n = Dr(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Dr(e);
  return t || (r.equals = Ja), Br && We !== null && We.l !== null && ((n = We.l).s ?? (n.s = [])).push(r), r;
}
function J(e, t, n = !1) {
  Fe !== null && !mn && Ai() && Fe.f & (cn | ja) && !(Ft != null && Ft.includes(e)) && j1();
  let r = n ? sn(t) : t;
  return ya(e, r);
}
function ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Eo ? go.set(e, t) : go.set(e, n), e.v = t, e.f & cn && (e.f & xn && ru(
      /** @type {Derived} */
      e
    ), Ut(e, e.f & Zt ? er : Et)), e.wv = hu(), wu(e, xn), Ai() && Ge !== null && Ge.f & Et && !(Ge.f & (An | vr)) && (Kt === null ? of([e]) : Kt.push(e));
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
      s & xn || !r && a === Ge || (Ut(a, t), s & (Et | Zt) && (s & cn ? wu(
        /** @type {Derived} */
        a,
        er
      ) : Ni(
        /** @type {Effect} */
        a
      )));
    }
}
let We = null;
function qs(e) {
  We = e;
}
function sr(e) {
  return (
    /** @type {T} */
    ts().get(e)
  );
}
function Or(e, t) {
  return ts().set(e, t), t;
}
function vf(e) {
  return ts().has(e);
}
function fe(e, t = !1, n) {
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
    r2: Dr(!1)
  }), Qa(() => {
    r.d = !0;
  });
}
function ve(e) {
  const t = We;
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
    We = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ai() {
  return !Br || We !== null && We.l === null;
}
function ts(e) {
  return We === null && Di(), We.c ?? (We.c = new Map(gf(We) || void 0));
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
    e.autofocus = !0, So(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kf(e) {
  De && /* @__PURE__ */ kt(e) !== null && Ga(e);
}
let Rs = !1;
function Sf() {
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
function Ef(e) {
  var t = Fe, n = Ge;
  $n(null), Gn(null);
  try {
    return e();
  } finally {
    $n(t), Gn(n);
  }
}
const xu = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function bu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || no.call(t, i), !i.cancelBubble)
      return Ef(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? So(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function et(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = bu(e, t, n, i);
  (t === document.body || t === window || t === document) && Qa(() => {
    t.removeEventListener(e, a, i);
  });
}
function Po(e) {
  for (var t = 0; t < e.length; t++)
    xu.add(e[t]);
  for (var n of wa)
    n(e);
}
function no(e) {
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
    lo(e, "currentTarget", {
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
            if (ko(b)) {
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
function ns(e) {
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
    if (De)
      return Tt(Ae, null), Ae;
    o === void 0 && (o = ns(i ? e : "<!>" + e), n || (o = /** @type {Node} */
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
function _e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (De)
      return Tt(Ae, null), Ae;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ns(i)
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
function Ze(e = "") {
  if (!De) {
    var t = Tn(e + "");
    return Tt(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== 3 && (n.before(n = Tn()), St(n)), Tt(n, n), n;
}
function Je() {
  if (De)
    return Tt(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
  return e.append(t, n), Tt(t, n), e;
}
function N(e, t) {
  if (De) {
    Ge.nodes_end = Ae, bn();
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
  pa(), t.intro = t.intro ?? !1;
  const n = t.target, r = De, o = Ae;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ba); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(i);
    if (!i)
      throw $r;
    qt(!0), St(
      /** @type {Comment} */
      i
    ), bn();
    const a = Cu(e, { ...t, anchor: i });
    if (Ae === null || Ae.nodeType !== 8 || /** @type {Comment} */
    Ae.data !== Ya)
      throw Vi(), $r;
    return qt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && X1(), pa(), Ga(n), qt(!1), $u(e, t);
    throw a;
  } finally {
    qt(r), St(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function Cu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  pa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = bf(g);
        t.addEventListener(g, no, { passive: p });
        var x = yr.get(g);
        x === void 0 ? (document.addEventListener(g, no, { passive: p }), yr.set(g, 1)) : yr.set(g, x + 1);
      }
    }
  };
  l(Wa(xu)), wa.add(l);
  var u = void 0, c = Q1(() => {
    var d = n ?? t.appendChild(Tn());
    return zn(() => {
      if (i) {
        fe({});
        var v = (
          /** @type {ComponentContext} */
          We
        );
        v.c = i;
      }
      o && (r.$$events = o), De && Tt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, De && (Ge.nodes_end = Ae), i && ve();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, no);
        var p = (
          /** @type {number} */
          yr.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, no), yr.delete(g)) : yr.set(g, p);
      }
      wa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return xa.set(u, c), u;
}
let xa = /* @__PURE__ */ new WeakMap();
function Mf(e, t) {
  const n = xa.get(e);
  return n ? (xa.delete(e), n(t)) : Promise.resolve();
}
function ye(e, t, [n, r] = [0, 0]) {
  De && n === 0 && bn();
  var o = e, i = null, a = null, s = Dt, l = n > 0 ? Xr : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (De && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Ba ? r = 0 : b === Xa ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ha(), St(o), qt(!1), p = !0, r = -1);
    }
    s ? (i ? co(i) : g && (i = zn(() => g(o))), a && Hr(a, () => {
      a = null;
    })) : (a ? co(a) : g && (a = zn(() => g(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), p && qt(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), De && (o = Ae);
}
function Lr(e, t) {
  return t;
}
function Hf(e, t, n, r) {
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
    ), r.clear(), Zn(e, t[0].prev, t[i - 1].next);
  }
  uu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Zn(e, c.prev, c.next)), Gt(c.e, !s);
    }
  });
}
function Pt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Wl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = De ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(Tn());
  }
  De && bn();
  var c = null, d = !1, v = /* @__PURE__ */ xe(() => {
    var g = n();
    return ko(g) ? g : g == null ? [] : Wa(g);
  });
  hr(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let x = !1;
    if (De) {
      var b = (
        /** @type {Comment} */
        a.data === Xa
      );
      b !== (p === 0) && (a = ha(), St(a), qt(!1), x = !0);
    }
    if (De) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Ae.nodeType === 8 && /** @type {Comment} */
        Ae.data === Ya) {
          a = /** @type {Comment} */
          Ae, x = !0, qt(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        h = _u(
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
      p > 0 && St(ha());
    }
    De || Df(g, s, a, o, t, r, n), i !== null && (p === 0 ? c ? co(c) : c = zn(() => i(a)) : c !== null && Hr(c, () => {
      c = null;
    })), x && qt(!0), f(v);
  }), De && (a = Ae);
}
function Df(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & $1) !== 0, v = (o & (Ra | Za)) !== 0, g = e.length, p = t.items, x = t.first, b = x, $, h = null, C, w = [], k = [], M, P, V, L;
  if (d)
    for (L = 0; L < g; L += 1)
      M = e[L], P = i(M, L), V = p.get(P), V !== void 0 && ((s = V.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(V));
  for (L = 0; L < g; L += 1) {
    if (M = e[L], P = i(M, L), V = p.get(P), V === void 0) {
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
        L,
        r,
        o,
        a
      ), p.set(P, h), w = [], k = [], b = h.next;
      continue;
    }
    if (v && Of(V, M, L, o), V.e.f & Ln && (co(V.e), d && ((l = V.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(V))), V !== b) {
      if ($ !== void 0 && $.has(V)) {
        if (w.length < k.length) {
          var q = k[0], T;
          h = q.prev;
          var A = w[0], S = w[w.length - 1];
          for (T = 0; T < w.length; T += 1)
            Zs(w[T], q, n);
          for (T = 0; T < k.length; T += 1)
            $.delete(k[T]);
          Zn(t, A.prev, S.next), Zn(t, h, A), Zn(t, S, q), b = q, h = S, L -= 1, w = [], k = [];
        } else
          $.delete(V), Zs(V, b, n), Zn(t, V.prev, V.next), Zn(t, V, h === null ? t.first : h.next), Zn(t, h, V), h = V;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== P; )
        b.e.f & Ln || ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      V = b;
    }
    w.push(V), h = V, b = V.next;
  }
  if (b !== null || $ !== void 0) {
    for (var O = $ === void 0 ? [] : Wa($); b !== null; )
      b.e.f & Ln || O.push(b), b = b.next;
    var _ = O.length;
    if (_ > 0) {
      var D = o & Wl && g === 0 ? n : null;
      if (d) {
        for (L = 0; L < _; L += 1)
          (u = O[L].a) == null || u.measure();
        for (L = 0; L < _; L += 1)
          (c = O[L].a) == null || c.fix();
      }
      Hf(t, O, D, p);
    }
  }
  d && So(() => {
    var E;
    if (C !== void 0)
      for (V of C)
        (E = V.a) == null || E.apply();
  }), Ge.first = t.first && t.first.e, Ge.last = h && h.e;
}
function Of(e, t, n, r) {
  r & Ra && ya(e.v, t), r & Za ? ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function _u(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ra) !== 0, d = (l & C1) === 0, v = c ? d ? /* @__PURE__ */ oe(o) : Dr(o) : o, g = l & Za ? Dr(a) : a, p = {
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
    return p.e = zn(() => s(e, v, g, u), De), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Zs(e, t, n) {
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
function rs(e, t, n, r, o) {
  var i = e, a = "", s;
  hr(() => {
    if (a === (a = t() ?? "")) {
      De && bn();
      return;
    }
    s !== void 0 && (Gt(s), s = void 0), a !== "" && (s = zn(() => {
      if (De) {
        Ae.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Sn(l);
        if (l === null)
          throw Vi(), $r;
        Tt(Ae, u), i = St(l);
        return;
      }
      var c = a + "", d = ns(c);
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
  De && bn();
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
function lr(e, t, ...n) {
  var r = e, o = vt, i;
  hr(() => {
    o !== (o = t()) && (i && (Gt(i), i = null), i = zn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), De && (r = Ae);
}
function ku(e, t, n) {
  De && bn();
  var r = e, o, i;
  hr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = zn(() => n(r, o))));
  }, Xr), De && (r = Ae);
}
function Vf(e, t, n, r, o, i) {
  let a = De;
  De && bn();
  var s, l, u = null;
  De && Ae.nodeType === 1 && (u = /** @type {Element} */
  Ae, bn());
  var c = (
    /** @type {TemplateNode} */
    De ? Ae : e
  ), d;
  hr(() => {
    const v = t() || null;
    var g = v === "svg" ? H1 : null;
    v !== s && (d && (v === null ? Hr(d, () => {
      d = null, l = null;
    }) : v === l ? co(d) : Gt(d)), v && v !== l && (d = zn(() => {
      if (u = De ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Tt(u, u), r) {
        De && Cf(v) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          De ? /* @__PURE__ */ kt(u) : u.appendChild(Tn())
        );
        De && (p === null ? qt(!1) : St(p)), r(u, p);
      }
      Ge.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, Xr), a && (qt(!0), St(c));
}
function Qe(e, t) {
  So(() => {
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
      Yr(() => {
        var a = n();
        Q(a), o && Ua(i, a) && (i = a, r.update(a));
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
function ta(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Nf(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ta)), o && l.push(...Object.keys(o).map(ta));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var g = ta(e.substring(u, c).trim());
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
  if (De || a !== n || a === void 0) {
    var s = zf(n, r, i);
    (!De || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function na(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (De || o !== t) {
    var i = Nf(t, r);
    (!De || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (na(e, n == null ? void 0 : n[0], r[0]), na(e, n == null ? void 0 : n[1], r[1], "important")) : na(e, n, r));
  return r;
}
const Qr = Symbol("class"), nr = Symbol("style"), Eu = Symbol("is custom element"), Pu = Symbol("is html");
function Cr(e) {
  if (De) {
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
function ra(e, t) {
  var n = os(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Af(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = os(e);
  De && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[I1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Jt(e, t, n, r, o = !1) {
  var i = os(e), a = i[Eu], s = !i[Pu];
  let l = De && a;
  l && qt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = vn(n.class) : (r || n[Qr]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var v = Mu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      xt(e, g, w, r, t == null ? void 0 : t[Qr], n[Qr]), u[C] = w, u[Qr] = n[Qr];
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
              e[`__${P}`] = w, Po([P]);
            else {
              let V = function(L) {
                u[C].call(this, L);
              };
              u[M] = bu(P, e, V, k);
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
          Af(
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
  return l && qt(!0), u;
}
function os(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Eu]: e.nodeName.includes("-"),
      [Pu]: e.namespaceURI === M1
    })
  );
}
var Ys = /* @__PURE__ */ new Map();
function Mu(e) {
  var t = Ys.get(e.nodeName);
  if (t) return t;
  Ys.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Fl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ka(r);
  }
  return t;
}
var rr, so, Go, ba, Hu;
const $a = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    xr(this, ba), xr(this, rr, /* @__PURE__ */ new WeakMap()), xr(this, so), xr(this, Go), ri(this, Go, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ut(this, rr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ut(this, rr).set(t, r), y1(this, ba, Hu).call(this).observe(t, ut(this, Go)), () => {
      var o = ut(this, rr).get(t);
      o.delete(n), o.size === 0 && (ut(this, rr).delete(t), ut(this, so).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakSet(), Hu = function() {
  return ut(this, so) ?? ri(this, so, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        $a.entries.set(t.target, t);
        for (var n of ut(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Lt($a, "entries", /* @__PURE__ */ new WeakMap());
let If = $a;
var qf = /* @__PURE__ */ new If({
  box: "border-box"
});
function Ws(e, t, n) {
  var r = qf.observe(e, () => n(e[t]));
  It(() => (Cn(() => n(e[t])), r));
}
function Ks(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function _n(e = {}, t, n, r) {
  return It(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Ks(n(...o), e) && t(null, ...o));
      });
    }), () => {
      So(() => {
        i && Ks(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ze(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    We
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
    js(t, r), uo(n.b);
  }), un(() => {
    const o = Cn(() => n.m.map(T1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && un(() => {
    js(t, r), uo(n.a);
  });
}
function js(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Be(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function en(e) {
  We === null && Di(), Br && We.l !== null ? Zf(We).m.push(e) : un(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  We === null && Di(), en(() => () => Cn(e));
}
function Rf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ii() {
  const e = We;
  return e === null && Di(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = ko(i) ? i.slice() : [i], s = Rf(
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
function Zf(e) {
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
const wr = [];
function Wt(e, t) {
  return {
    subscribe: Ce(e, t).subscribe
  };
}
function Ce(e, t = vt) {
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
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Wt(n, (a, s) => {
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
      uo(g), d(), l = !1;
    };
  });
}
function j(e) {
  let t;
  return as(e, (n) => t = n)(), t;
}
let Zo = !1, Ca = Symbol();
function te(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: vt
  });
  if (r.store !== e && !(Ca in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = vt;
    else {
      var o = !0;
      r.unsubscribe = as(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Ca in n ? j(e) : f(r.source);
}
function Bf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = vt), e;
}
function di(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    Qa(() => {
      for (var n in e)
        e[n].unsubscribe();
      lo(e, Ca, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Xf(e) {
  var t = Zo;
  try {
    return Zo = !1, [e(), Zo];
  } finally {
    Zo = t;
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
      Kl
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Dr(0) }, Wf);
}
const Kf = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Jr(o) && (o = o());
      const i = On(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = On(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === Fa) return !1;
    for (let n of e.props)
      if (Jr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Jr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function lt(...e) {
  return new Proxy({ props: e }, Kf);
}
function Fs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & _1) !== 0, a = !Br || (n & k1) !== 0, s = (n & S1) !== 0, l = (n & E1) !== 0, u = !1, c;
  s ? [c, u] = Xf(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Wn in e || Fa in e, v = s && (((o = On(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, g = (
    /** @type {V} */
    r
  ), p = !0, x = !1, b = () => (x = !0, p && (p = !1, l ? g = Cn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && Y1(), c = b(), v && v(c));
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
  if (!(n & Kl))
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(P, V) {
      return arguments.length > 0 ? ((!a || !V || C || u) && v(V ? $() : P), P) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ oe(c), M = /* @__PURE__ */ Mr(() => {
    var P = $(), V = f(k);
    return w ? (w = !1, V) : k.v = P;
  });
  return s && f(M), i || (M.equals = Ja), function(P, V) {
    if (arguments.length > 0) {
      const L = V ? f(M) : a && s ? sn(P) : P;
      if (!M.equals(L)) {
        if (w = !0, J(k, L), x && g !== void 0 && (g = L), Fs(M))
          return P;
        Cn(() => f(M));
      }
      return P;
    }
    return Fs(M) ? M.v : f(M);
  };
}
function jf(e) {
  return new Ff(e);
}
var Rn, on;
class Ff {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    xr(this, Rn), xr(this, on);
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
          return s === Fa ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
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
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ri(this, Rn, i.$$events);
    for (const a of Object.keys(ut(this, on)))
      a === "$set" || a === "$destroy" || a === "$on" || lo(this, a, {
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
    ut(this, on).$destroy();
  }
}
Rn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
let Du;
typeof HTMLElement == "function" && (Du = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Lt(this, "$$ctor"), Lt(this, "$$s"), Lt(this, "$$c"), Lt(this, "$$cn", !1), Lt(this, "$$d", {}), Lt(this, "$$r", !1), Lt(this, "$$p_d", {}), Lt(this, "$$l", {}), Lt(this, "$$l_u", /* @__PURE__ */ new Map()), Lt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Gf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Uo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = jf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = J1(() => {
        Yr(() => {
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
function Gf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function de(e, t, n, r, o, i) {
  let a = class extends Du {
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
    lo(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Uo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = On(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    lo(a.prototype, s, {
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
var Uf = { value: () => {
} };
function qi() {
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
Jo.prototype = qi.prototype = {
  constructor: Jo,
  on: function(e, t) {
    var n = this._, r = Jf(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = Qf(n[o], e.name))) return o;
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
function Qf(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Gs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Uf, e = e.slice(0, r).concat(e.slice(r + 1));
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
function Ri(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Us.hasOwnProperty(t) ? { space: Us[t], local: e } : e;
}
function ev(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === _a && t.documentElement.namespaceURI === _a ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function tv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ou(e) {
  var t = Ri(e);
  return (t.local ? tv : ev)(t);
}
function nv() {
}
function ss(e) {
  return e == null ? nv : function() {
    return this.querySelector(e);
  };
}
function rv(e) {
  typeof e != "function" && (e = ss(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Xt(r, this._parents);
}
function ov(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function iv() {
  return [];
}
function Lu(e) {
  return e == null ? iv : function() {
    return this.querySelectorAll(e);
  };
}
function av(e) {
  return function() {
    return ov(e.apply(this, arguments));
  };
}
function sv(e) {
  typeof e == "function" ? e = av(e) : e = Lu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Xt(r, o);
}
function Vu(e) {
  return function() {
    return this.matches(e);
  };
}
function Tu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var lv = Array.prototype.find;
function uv(e) {
  return function() {
    return lv.call(this.children, e);
  };
}
function cv() {
  return this.firstElementChild;
}
function dv(e) {
  return this.select(e == null ? cv : uv(typeof e == "function" ? e : Tu(e)));
}
var fv = Array.prototype.filter;
function vv() {
  return Array.from(this.children);
}
function gv(e) {
  return function() {
    return fv.call(this.children, e);
  };
}
function hv(e) {
  return this.selectAll(e == null ? vv : gv(typeof e == "function" ? e : Tu(e)));
}
function pv(e) {
  typeof e != "function" && (e = Vu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Xt(r, this._parents);
}
function zu(e) {
  return new Array(e.length);
}
function mv() {
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
function yv(e) {
  return function() {
    return e;
  };
}
function wv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new fi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function xv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
    g = a.call(e, i[s], s, i) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = i[s], u.delete(g)) : n[s] = new fi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function bv(e) {
  return e.__data__;
}
function $v(e, t) {
  if (!arguments.length) return Array.from(this, bv);
  var n = t ? xv : wv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = yv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, g = Cv(e.call(c, c && c.__data__, u, r)), p = g.length, x = s[u] = new Array(p), b = a[u] = new Array(p), $ = l[u] = new Array(v);
    n(c, d, x, b, $, g, t);
    for (var h = 0, C = 0, w, k; h < p; ++h)
      if (w = x[h]) {
        for (h >= C && (C = h + 1); !(k = b[C]) && ++C < p; ) ;
        w._next = k || null;
      }
  }
  return a = new Xt(a, r), a._enter = s, a._exit = l, a;
}
function Cv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _v() {
  return new Xt(this._exit || this._groups.map(zu), this._parents);
}
function kv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Sv(e) {
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
  e || (e = Mv);
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
function Mv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Dv() {
  return Array.from(this);
}
function Ov() {
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
function Vv() {
  return !this.node();
}
function Tv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function zv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Nv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Av(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Iv(e, t) {
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
function Rv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Zv(e, t) {
  var n = Ri(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Nv : zv : typeof t == "function" ? n.local ? Rv : qv : n.local ? Iv : Av)(n, t));
}
function Nu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Bv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Xv(e, t, n) {
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
  return arguments.length > 1 ? this.each((t == null ? Bv : typeof t == "function" ? Yv : Xv)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || Nu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Kv(e) {
  return function() {
    delete this[e];
  };
}
function jv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Fv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Gv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Kv : typeof t == "function" ? Fv : jv)(e, t)) : this.node()[e];
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
function qu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ru(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Uv(e) {
  return function() {
    qu(this, e);
  };
}
function Jv(e) {
  return function() {
    Ru(this, e);
  };
}
function Qv(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Ru)(this, e);
  };
}
function eg(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Qv : t ? Uv : Jv)(n, t));
}
function tg() {
  this.textContent = "";
}
function ng(e) {
  return function() {
    this.textContent = e;
  };
}
function rg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function og(e) {
  return arguments.length ? this.each(e == null ? tg : (typeof e == "function" ? rg : ng)(e)) : this.node().textContent;
}
function ig() {
  this.innerHTML = "";
}
function ag(e) {
  return function() {
    this.innerHTML = e;
  };
}
function sg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function lg(e) {
  return arguments.length ? this.each(e == null ? ig : (typeof e == "function" ? sg : ag)(e)) : this.node().innerHTML;
}
function ug() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cg() {
  return this.each(ug);
}
function dg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fg() {
  return this.each(dg);
}
function vg(e) {
  var t = typeof e == "function" ? e : Ou(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gg() {
  return null;
}
function hg(e, t) {
  var n = typeof e == "function" ? e : Ou(e), r = t == null ? gg : typeof t == "function" ? t : ss(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function pg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function mg() {
  return this.each(pg);
}
function yg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xg(e) {
  return this.select(e ? wg : yg);
}
function bg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $g(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Cg(e) {
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
function kg(e, t, n) {
  return function() {
    var r = this.__on, o, i = $g(t);
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
  var r = Cg(e + ""), o, i = r.length, a;
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
  for (s = t ? kg : _g, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Zu(e, t, n) {
  var r = Nu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return Zu(this, e, t);
  };
}
function Pg(e, t) {
  return function() {
    return Zu(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Pg : Eg)(e, t));
}
function* Hg() {
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
function Dg() {
  return this;
}
Xt.prototype = Mo.prototype = {
  constructor: Xt,
  select: rv,
  selectAll: sv,
  selectChild: dv,
  selectChildren: hv,
  filter: pv,
  data: $v,
  enter: mv,
  exit: _v,
  join: kv,
  merge: Sv,
  selection: Dg,
  order: Ev,
  sort: Pv,
  call: Hv,
  nodes: Dv,
  node: Ov,
  size: Lv,
  empty: Vv,
  each: Tv,
  attr: Zv,
  style: Wv,
  property: Gv,
  classed: eg,
  text: og,
  html: lg,
  raise: cg,
  lower: fg,
  append: vg,
  insert: hg,
  remove: mg,
  clone: xg,
  datum: bg,
  on: Sg,
  dispatch: Mg,
  [Symbol.iterator]: Hg
};
function jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Bu);
}
function Og(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
  if (e = Og(e), t === void 0 && (t = e.currentTarget), t) {
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
const Lg = { passive: !1 }, ho = { capture: !0, passive: !1 };
function oa(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", _r, ho);
  "onselectstart" in t ? n.on("selectstart.drag", _r, ho) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Yu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, ho), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
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
function Vg(e) {
  return !e.ctrlKey && !e.button;
}
function Tg() {
  return this.parentNode;
}
function zg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ng() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ag() {
  var e = Vg, t = Tg, n = zg, r = Ng, o = {}, i = qi("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Lg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var M = C(this, t.call(this, w, k), w, k, "mouse");
      M && (jt(w.view).on("mousemove.drag", p, ho).on("mouseup.drag", x, ho), Xu(w.view), oa(w), u = !1, s = w.clientX, l = w.clientY, M("start", w));
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
    jt(w.view).on("mousemove.drag mouseup.drag", null), Yu(w.view, u), _r(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var M = w.changedTouches, P = t.call(this, w, k), V = M.length, L, z;
      for (L = 0; L < V; ++L)
        (z = C(this, P, w, k, M[L].identifier, M[L])) && (oa(w), z("start", w, M[L]));
    }
  }
  function $(w) {
    var k = w.changedTouches, M = k.length, P, V;
    for (P = 0; P < M; ++P)
      (V = o[k[P].identifier]) && (_r(w), V("drag", w, k[P]));
  }
  function h(w) {
    var k = w.changedTouches, M = k.length, P, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < M; ++P)
      (V = o[k[P].identifier]) && (oa(w), V("end", w, k[P]));
  }
  function C(w, k, M, P, V, L) {
    var z = i.copy(), q = an(L || M, k), T, A, S;
    if ((S = n.call(w, new ka("beforestart", {
      sourceEvent: M,
      target: v,
      identifier: V,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), P)) != null)
      return T = S.x - q[0] || 0, A = S.y - q[1] || 0, function O(_, D, E) {
        var H = q, I;
        switch (_) {
          case "start":
            o[V] = O, I = a++;
            break;
          case "end":
            delete o[V], --a;
          // falls through
          case "drag":
            q = an(E || D, k), I = a;
            break;
        }
        z.call(
          _,
          w,
          new ka(_, {
            sourceEvent: D,
            subject: S,
            target: v,
            identifier: V,
            active: I,
            x: q[0] + T,
            y: q[1] + A,
            dx: q[0] - H[0],
            dy: q[1] - H[1],
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
function Wu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ho() {
}
var po = 0.7, vi = 1 / po, kr = "\\s*([+-]?\\d+)\\s*", mo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ig = /^#([0-9a-f]{3,8})$/, qg = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Rg = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Zg = new RegExp(`^rgba\\(${kr},${kr},${kr},${mo}\\)$`), Bg = new RegExp(`^rgba\\(${yn},${yn},${yn},${mo}\\)$`), Xg = new RegExp(`^hsl\\(${mo},${yn},${yn}\\)$`), Yg = new RegExp(`^hsla\\(${mo},${yn},${yn},${mo}\\)$`), Js = {
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
us(Ho, yo, {
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
  formatHsl: Kg,
  formatRgb: el,
  toString: el
});
function Qs() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function Kg() {
  return Ku(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function yo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ig.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = qg.exec(e)) ? new Vt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new Vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Zg.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Bg.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Yg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Js.hasOwnProperty(e) ? tl(Js[e]) : e === "transparent" ? new Vt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Vt(e, t, n, r);
}
function jg(e) {
  return e instanceof Ho || (e = yo(e)), e ? (e = e.rgb(), new Vt(e.r, e.g, e.b, e.opacity)) : new Vt();
}
function Sa(e, t, n, r) {
  return arguments.length === 1 ? jg(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(Vt, Sa, Wu(Ho, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? po : Math.pow(po, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Vt(ar(this.r), ar(this.g), ar(this.b), gi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: Fg,
  formatRgb: rl,
  toString: rl
}));
function nl() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Fg() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rl() {
  const e = gi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function gi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function or(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Ku(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = yo(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new ln(a, s, l, e.opacity);
}
function Gg(e, t, n, r) {
  return arguments.length === 1 ? Ku(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(ln, Gg, Wu(Ho, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? po : Math.pow(po, e), new ln(this.h, this.s, this.l * e, this.opacity);
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
    return new ln(il(this.h), Yo(this.s), Yo(this.l), gi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gi(this.opacity);
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
function Ug(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Jg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Qg(e) {
  return (e = +e) == 1 ? Fu : function(t, n) {
    return n - t ? Jg(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Ug(e, n) : ju(isNaN(e) ? t : e);
}
const al = function e(t) {
  var n = Qg(t);
  function r(o, i) {
    var a = n((o = Sa(o)).r, (i = Sa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Fu(o.opacity, i.opacity);
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
var Ea = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Ea.source, "g");
function eh(e) {
  return function() {
    return e;
  };
}
function th(e) {
  return function(t) {
    return e(t) + "";
  };
}
function nh(e, t) {
  var n = Ea.lastIndex = aa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ea.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Bn(r, o) })), n = aa.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? th(l[0].x) : eh(t) : (t = l.length, function(u) {
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
function rh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Gu : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function oh(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Gu : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
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
var ih = Ju(rh, "px, ", "px)", "deg)"), ah = Ju(oh, ", ", ")", ")"), sh = 1e-12;
function ll(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function lh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function uh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ch = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, p = d - l, x = g * g + p * p, b, $;
    if (x < sh)
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
        var V = P * $, L = ll(k), z = u / (n * h) * (L * uh(t * V + k) - lh(k));
        return [
          s + z * g,
          l + z * p,
          u * L / ll(t * V + k)
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
var Tr = 0, ro = 0, eo = 0, Qu = 1e3, hi, oo, pi = 0, ur = 0, Zi = 0, wo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return ur || (ec(dh), ur = wo.now() + Zi);
}
function dh() {
  ur = 0;
}
function mi() {
  this._call = this._time = this._next = null;
}
mi.prototype = tc.prototype = {
  constructor: mi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && oo !== this && (oo ? oo._next = this : hi = this, oo = this), this._call = e, this._time = n, Pa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Pa());
  }
};
function tc(e, t, n) {
  var r = new mi();
  return r.restart(e, t, n), r;
}
function fh() {
  cs(), ++Tr;
  for (var e = hi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tr;
}
function ul() {
  ur = (pi = wo.now()) + Zi, Tr = ro = 0;
  try {
    fh();
  } finally {
    Tr = 0, gh(), ur = 0;
  }
}
function vh() {
  var e = wo.now(), t = e - pi;
  t > Qu && (Zi -= t, pi = e);
}
function gh() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  oo = e, Pa(r);
}
function Pa(e) {
  if (!Tr) {
    ro && (ro = clearTimeout(ro));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (ro = setTimeout(ul, e - wo.now() - Zi)), eo && (eo = clearInterval(eo))) : (eo || (pi = wo.now(), eo = setInterval(vh, Qu)), Tr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new mi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var hh = qi("start", "end", "cancel", "interrupt"), ph = [], nc = 0, dl = 1, Ma = 2, Qo = 3, fl = 4, Ha = 5, ei = 6;
function Bi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  mh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: hh,
    tween: ph,
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
function mh(e, t, n) {
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
    }), n.state = Ma, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ma) {
      for (n.state = Qo, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ha, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === Ha && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ma && r.state < Ha, r.state = ei, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function yh(e) {
  return this.each(function() {
    ti(this, e);
  });
}
function wh(e, t) {
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
function bh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? wh : xh)(n, e, t));
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
  return (typeof t == "number" ? Bn : t instanceof yo ? al : (n = yo(t)) ? (t = n, al) : nh)(e, t);
}
function $h(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ch(e) {
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
function kh(e, t, n) {
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
function Eh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ph(e, t) {
  var n = Ri(e), r = n === "transform" ? ah : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Eh : Sh)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? Ch : $h)(n) : (n.local ? kh : _h)(n, r, t));
}
function Mh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Hh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Dh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hh(e, i)), n;
  }
  return o._value = t, o;
}
function Oh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Mh(e, i)), n;
  }
  return o._value = t, o;
}
function Lh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ri(e);
  return this.tween(n, (r.local ? Dh : Oh)(r, t));
}
function Vh(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Th(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function zh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Vh : Th)(t, e)) : gn(this.node(), t).delay;
}
function Nh(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Ah(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Ih(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Nh : Ah)(t, e)) : gn(this.node(), t).duration;
}
function qh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(qh(t, e)) : gn(this.node(), t).ease;
}
function Zh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Bh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zh(this._id, e));
}
function Xh(e) {
  typeof e != "function" && (e = Vu(e));
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
function Kh(e, t, n) {
  var r, o, i = Wh(t) ? ds : En;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function jh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(Kh(n, e, t));
}
function Fh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Gh() {
  return this.on("end.remove", Fh(this._id));
}
function Uh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ss(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, Bi(u[v], t, n, v, u, gn(c, n)));
  return new Nn(i, this._parents, t, n);
}
function Jh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, p = gn(c, n), x = 0, b = v.length; x < b; ++x)
          (g = v[x]) && Bi(g, t, n, x, v, p);
        i.push(v), a.push(c);
      }
  return new Nn(i, a, t, n);
}
var Qh = Mo.prototype.constructor;
function ep() {
  return new Qh(this._groups, this._parents);
}
function tp(e, t) {
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
function np(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Vr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function rp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Vr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Vr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function op(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = En(this, e), u = l.on, c = l.value[i] == null ? s || (s = oc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ip(e, t, n) {
  var r = (e += "") == "transform" ? ih : rc;
  return t == null ? this.styleTween(e, tp(e, r)).on("end.style." + e, oc(e)) : typeof t == "function" ? this.styleTween(e, rp(e, r, fs(this, "style." + e, t))).each(op(this._id, e)) : this.styleTween(e, np(e, r, t), n).on("end.style." + e, null);
}
function ap(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function sp(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && ap(e, a, n)), r;
  }
  return i._value = t, i;
}
function lp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, sp(e, t, n ?? ""));
}
function up(e) {
  return function() {
    this.textContent = e;
  };
}
function cp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function dp(e) {
  return this.tween("text", typeof e == "function" ? cp(fs(this, "text", e)) : up(e == null ? "" : e + ""));
}
function fp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function vp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && fp(o)), t;
  }
  return r._value = e, r;
}
function gp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, vp(e));
}
function hp() {
  for (var e = this._name, t = this._id, n = ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = gn(l, t);
        Bi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Nn(r, this._parents, e, n);
}
function pp() {
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
var mp = 0;
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++mp;
}
var Mn = Mo.prototype;
Nn.prototype = {
  constructor: Nn,
  select: Uh,
  selectAll: Jh,
  selectChild: Mn.selectChild,
  selectChildren: Mn.selectChildren,
  filter: Xh,
  merge: Yh,
  selection: ep,
  transition: hp,
  call: Mn.call,
  nodes: Mn.nodes,
  node: Mn.node,
  size: Mn.size,
  empty: Mn.empty,
  each: Mn.each,
  on: jh,
  attr: Ph,
  attrTween: Lh,
  style: ip,
  styleTween: lp,
  text: dp,
  textTween: gp,
  remove: Gh,
  tween: bh,
  delay: zh,
  duration: Ih,
  ease: Rh,
  easeVarying: Bh,
  end: pp,
  [Symbol.iterator]: Mn[Symbol.iterator]
};
function yp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var wp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: yp
};
function xp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function bp(e) {
  var t, n;
  e instanceof Nn ? (t = e._id, e = e._name) : (t = ic(), (n = wp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Bi(l, e, t, u, a, n || xp(l, t));
  return new Nn(r, this._parents, e, t);
}
Mo.prototype.interrupt = yh;
Mo.prototype.transition = bp;
const Ko = (e) => () => e;
function $p(e, {
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
function to(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Cp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function _p() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function vl() {
  return this.__zoom || Xi;
}
function kp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Sp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ep(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function sc() {
  var e = Cp, t = _p, n = Ep, r = kp, o = Sp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = ch, u = qi("start", "zoom", "end"), c, d, v, g = 500, p = 150, x = 0, b = 10;
  function $(S) {
    S.property("__zoom", vl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, O, _, D) {
    var E = S.selection ? S.selection() : S;
    E.property("__zoom", vl), S !== E ? k(S, O, _, D) : E.interrupt().each(function() {
      M(this, arguments).event(D).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, $.scaleBy = function(S, O, _, D) {
    $.scaleTo(S, function() {
      var E = this.__zoom.k, H = typeof O == "function" ? O.apply(this, arguments) : O;
      return E * H;
    }, _, D);
  }, $.scaleTo = function(S, O, _, D) {
    $.transform(S, function() {
      var E = t.apply(this, arguments), H = this.__zoom, I = _ == null ? w(E) : typeof _ == "function" ? _.apply(this, arguments) : _, B = H.invert(I), K = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(C(h(H, K), I, B), E, a);
    }, _, D);
  }, $.translateBy = function(S, O, _, D) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), a);
    }, null, D);
  }, $.translateTo = function(S, O, _, D, E) {
    $.transform(S, function() {
      var H = t.apply(this, arguments), I = this.__zoom, B = D == null ? w(H) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(Xi.translate(B[0], B[1]).scale(I.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), H, a);
    }, D, E);
  };
  function h(S, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === S.k ? S : new Hn(O, S.x, S.y);
  }
  function C(S, O, _) {
    var D = O[0] - _[0] * S.k, E = O[1] - _[1] * S.k;
    return D === S.x && E === S.y ? S : new Hn(S.k, D, E);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, O, _, D) {
    S.on("start.zoom", function() {
      M(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var E = this, H = arguments, I = M(E, H).event(D), B = t.apply(E, H), K = _ == null ? w(B) : typeof _ == "function" ? _.apply(E, H) : _, ee = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), F = E.__zoom, W = typeof O == "function" ? O.apply(E, H) : O, ie = l(F.invert(K).concat(ee / F.k), W.invert(K).concat(ee / W.k));
      return function(pe) {
        if (pe === 1) pe = W;
        else {
          var ge = ie(pe), le = ee / ge[2];
          pe = new Hn(le, K[0] - ge[0] * le, K[1] - ge[1] * le);
        }
        I.zoom(null, pe);
      };
    });
  }
  function M(S, O, _) {
    return !_ && S.__zooming || new P(S, O);
  }
  function P(S, O) {
    this.that = S, this.args = O, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, O), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, O) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = O.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = O.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = O.invert(this.touch1[0])), this.that.__zoom = O, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var O = jt(this.that).datum();
      u.call(
        S,
        this.that,
        new $p(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        O
      );
    }
  };
  function V(S, ...O) {
    if (!e.apply(this, arguments)) return;
    var _ = M(this, O).event(S), D = this.__zoom, E = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), H = an(S);
    if (_.wheel)
      (_.mouse[0][0] !== H[0] || _.mouse[0][1] !== H[1]) && (_.mouse[1] = D.invert(_.mouse[0] = H)), clearTimeout(_.wheel);
    else {
      if (D.k === E) return;
      _.mouse = [H, D.invert(H)], ti(this), _.start();
    }
    to(S), _.wheel = setTimeout(I, p), _.zoom("mouse", n(C(h(D, E), _.mouse[0], _.mouse[1]), _.extent, a));
    function I() {
      _.wheel = null, _.end();
    }
  }
  function L(S, ...O) {
    if (v || !e.apply(this, arguments)) return;
    var _ = S.currentTarget, D = M(this, O, !0).event(S), E = jt(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", ee, !0), H = an(S, _), I = S.clientX, B = S.clientY;
    Xu(S.view), sa(S), D.mouse = [H, this.__zoom.invert(H)], ti(this), D.start();
    function K(F) {
      if (to(F), !D.moved) {
        var W = F.clientX - I, ie = F.clientY - B;
        D.moved = W * W + ie * ie > x;
      }
      D.event(F).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = an(F, _), D.mouse[1]), D.extent, a));
    }
    function ee(F) {
      E.on("mousemove.zoom mouseup.zoom", null), Yu(F.view, D.moved), to(F), D.event(F).end();
    }
  }
  function z(S, ...O) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, D = an(S.changedTouches ? S.changedTouches[0] : S, this), E = _.invert(D), H = _.k * (S.shiftKey ? 0.5 : 2), I = n(C(h(_, H), D, E), t.apply(this, O), a);
      to(S), s > 0 ? jt(this).transition().duration(s).call(k, I, D, S) : jt(this).call($.transform, I, D, S);
    }
  }
  function q(S, ...O) {
    if (e.apply(this, arguments)) {
      var _ = S.touches, D = _.length, E = M(this, O, S.changedTouches.length === D).event(S), H, I, B, K;
      for (sa(S), I = 0; I < D; ++I)
        B = _[I], K = an(B, this), K = [K, this.__zoom.invert(K), B.identifier], E.touch0 ? !E.touch1 && E.touch0[2] !== K[2] && (E.touch1 = K, E.taps = 0) : (E.touch0 = K, H = !0, E.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (E.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, g)), ti(this), E.start());
    }
  }
  function T(S, ...O) {
    if (this.__zooming) {
      var _ = M(this, O).event(S), D = S.changedTouches, E = D.length, H, I, B, K;
      for (to(S), H = 0; H < E; ++H)
        I = D[H], B = an(I, this), _.touch0 && _.touch0[2] === I.identifier ? _.touch0[0] = B : _.touch1 && _.touch1[2] === I.identifier && (_.touch1[0] = B);
      if (I = _.that.__zoom, _.touch1) {
        var ee = _.touch0[0], F = _.touch0[1], W = _.touch1[0], ie = _.touch1[1], pe = (pe = W[0] - ee[0]) * pe + (pe = W[1] - ee[1]) * pe, ge = (ge = ie[0] - F[0]) * ge + (ge = ie[1] - F[1]) * ge;
        I = h(I, Math.sqrt(pe / ge)), B = [(ee[0] + W[0]) / 2, (ee[1] + W[1]) / 2], K = [(F[0] + ie[0]) / 2, (F[1] + ie[1]) / 2];
      } else if (_.touch0) B = _.touch0[0], K = _.touch0[1];
      else return;
      _.zoom("touch", n(C(I, B, K), _.extent, a));
    }
  }
  function A(S, ...O) {
    if (this.__zooming) {
      var _ = M(this, O).event(S), D = S.changedTouches, E = D.length, H, I;
      for (sa(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), H = 0; H < E; ++H)
        I = D[H], _.touch0 && _.touch0[2] === I.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === I.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (I = an(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < b)) {
        var B = jt(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Ko(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Ko(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Ko(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Ko([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
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
var cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(cr || (cr = {}));
var jn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(jn || (jn = {}));
var wi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(wi || (wi = {}));
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
var Sr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Sr || (Sr = {}));
var xo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(xo || (xo = {}));
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
const Hp = (e) => "id" in e && "source" in e && "target" in e, Dp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Do = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Op = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
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
}, Oo = (e, t = {}) => {
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
    ...Lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = bo(s, Ar(u)), b = (g ?? 0) * (p ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, Oa = (e, t) => {
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
  const s = Oo(e), l = hs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Lp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  const v = Ir(d) ? dr(t, d, a.measured) : t;
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
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Oa(a, l);
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
const Nr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Nr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Nr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function cc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return dr(e, [
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
}), La = ({ x: e, y: t, width: n, height: r }) => ({
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
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Do(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, xi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Do(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, fc = (e, t) => Wi(Yi(La(e), La(t))), bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => Dn(e.width) && Dn(e.height) && Dn(e.x) && Dn(e.y), Dn = (e) => !isNaN(e) && isFinite(e), Vp = (e, t) => {
}, gs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Lo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
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
function Tp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function la(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Vn(e), s = Lo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ps = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), zp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Np = ["INPUT", "SELECT", "TEXTAREA"];
function Ap(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Np.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const hc = (e) => "clientX" in e, Vn = (e, t) => {
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
function Ip({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
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
  }), [d, v, g, p] = Ip({
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
function qp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Rp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Yi(xi(e), xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return bo(a, Wi(i)) > 0;
}
const Zp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Bp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Xp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Hp(e) ? n = { ...e } : n = {
    ...e,
    id: Zp(e)
  }, Bp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Va({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
      const T = d === "x" ? "y" : "x", A = a[d] === s[T], S = l[T] > u[T], O = l[T] < u[T];
      (a[d] === 1 && (!A && S || A && O) || a[d] !== 1 && (!A && O || A && S)) && (g = d === "x" ? M : P);
    }
    const V = { x: l.x + b.x, y: l.y + b.y }, L = { x: u.x + $.x, y: u.y + $.y }, z = Math.max(Math.abs(V.x - g[0].x), Math.abs(L.x - g[0].x)), q = Math.max(Math.abs(V.y - g[0].y), Math.abs(L.y - g[0].y));
    z >= q ? (p = (V.x + L.x) / 2, x = g[0].y) : (p = g[0].x, x = (V.y + L.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], p, x, w, k];
}
function Kp(e, t, n, r) {
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
    return $ > 0 && $ < c.length - 1 ? h = Kp(c[$ - 1], b, c[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
  }, ""), d, v, g, p];
}
function _l(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!_l(n) || !_l(r))
    return null;
  const o = n.internals.handleBounds || kl(n.handles), i = r.internals.handleBounds || kl(r.handles), a = Sl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Sl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", zr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || He.Bottom, u = (s == null ? void 0 : s.position) || He.Top, c = $o(n, a, l), d = $o(r, s, u);
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
function $o(e, t, n = He.Left, r = !1) {
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
function Ta(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Fp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ta(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function Gp(e, t, n, r, o) {
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
}, Up = {
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
      const i = Do(o, r.nodeOrigin), a = Ir(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function yc(e, t, n, r) {
  var o, i;
  const a = ys(Up, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Do(u, a.nodeOrigin), v = Ir(u.extent) ? u.extent : a.nodeExtent, g = dr(d, v, tr(u));
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
function Qp(e, t) {
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
  Qp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = e0(e, l, i, a, u), { positionAbsolute: g } = e.internals, p = c !== g.x || d !== g.y;
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
  return (Dn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function e0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Do(e, n), u = Ir(e.extent) ? dr(l, e.extent, s) : l;
  let c = dr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = cc(c, s, t));
  const d = wc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function t0(e, t, n, r = [0, 0]) {
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
function n0(e, t, n, r, o, i) {
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
      g.parentId && g.extent === "parent" ? h = cc(h, p, t.get(g.parentId)) : $ && (h = dr(h, $, p));
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
    const v = t0(d, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function r0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function o0(e, t) {
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
function i0(e, t, n, r) {
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
function a0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, g = !1;
  function p({ noDragClassName: b, handleSelector: $, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = jt(h);
    function M({ x: z, y: q }, T) {
      const { nodeLookup: A, nodeExtent: S, snapGrid: O, snapToGrid: _, nodeOrigin: D, onNodeDrag: E, onSelectionDrag: H, onError: I, updateNodePositions: B } = t();
      i = { x: z, y: q };
      let K = !1, ee = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const F = Oo(s);
        ee = La(F);
      }
      for (const [F, W] of s) {
        if (!A.has(F))
          continue;
        let ie = { x: z - W.distance.x, y: q - W.distance.y };
        _ && (ie = gs(ie, O));
        let pe = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !W.extent) {
          const { positionAbsolute: ke } = W.internals, U = ke.x - ee.x + S[0][0], ae = ke.x + W.measured.width - ee.x2 + S[1][0], Se = ke.y - ee.y + S[0][1], ce = ke.y + W.measured.height - ee.y2 + S[1][1];
          pe = [
            [U, Se],
            [ae, ce]
          ];
        }
        const { position: ge, positionAbsolute: le } = Lp({
          nodeId: F,
          nextPosition: ie,
          nodeLookup: A,
          nodeExtent: pe,
          nodeOrigin: D,
          onError: I
        });
        K = K || W.position.x !== ge.x || W.position.y !== ge.y, W.position = ge, W.internals.positionAbsolute = le;
      }
      if (K && (B(s, !0), T && (r || E || !w && H))) {
        const [F, W] = ua({
          nodeId: w,
          dragItems: s,
          nodeLookup: A
        });
        r == null || r(T, s, F, W), E == null || E(T, F, W), w || H == null || H(T, W);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: z, panBy: q, autoPanSpeed: T, autoPanOnNodeDrag: A } = t();
      if (!A) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, O] = dc(u, c, T);
      (S !== 0 || O !== 0) && (i.x = (i.x ?? 0) - S / z[2], i.y = (i.y ?? 0) - O / z[2], await q({ x: S, y: O }) && M(i, null)), a = requestAnimationFrame(P);
    }
    function V(z) {
      var q;
      const { nodeLookup: T, multiSelectionActive: A, nodesDraggable: S, transform: O, snapGrid: _, snapToGrid: D, selectNodesOnDrag: E, onNodeDragStart: H, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      d = !0, (!E || !C) && !A && w && ((q = T.get(w)) != null && q.selected || B()), C && E && w && (e == null || e(w));
      const K = la(z.sourceEvent, { transform: O, snapGrid: _, snapToGrid: D, containerBounds: c });
      if (i = K, s = i0(T, S, K, w), s.size > 0 && (n || H || !w && I)) {
        const [ee, F] = ua({
          nodeId: w,
          dragItems: s,
          nodeLookup: T
        });
        n == null || n(z.sourceEvent, s, ee, F), H == null || H(z.sourceEvent, ee, F), w || I == null || I(z.sourceEvent, F);
      }
    }
    const L = Ag().clickDistance(k).on("start", (z) => {
      const { domNode: q, nodeDragThreshold: T, transform: A, snapGrid: S, snapToGrid: O } = t();
      c = (q == null ? void 0 : q.getBoundingClientRect()) || null, g = !1, T === 0 && V(z), i = la(z.sourceEvent, { transform: A, snapGrid: S, snapToGrid: O, containerBounds: c }), u = Vn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: q, transform: T, snapGrid: A, snapToGrid: S, nodeDragThreshold: O, nodeLookup: _ } = t(), D = la(z.sourceEvent, { transform: T, snapGrid: A, snapToGrid: S, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (g = !0), !g) {
        if (!l && q && d && (l = !0, P()), !d) {
          const E = D.xSnapped - (i.x ?? 0), H = D.ySnapped - (i.y ?? 0);
          Math.sqrt(E * E + H * H) > O && V(z);
        }
        (i.x !== D.xSnapped || i.y !== D.ySnapped) && s && d && (u = Vn(z.sourceEvent, c), M(D, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: T, onNodeDragStop: A, onSelectionDragStop: S } = t();
        if (T(s, !1), o || A || !w && S) {
          const [O, _] = ua({
            nodeId: w,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, O, _), A == null || A(z.sourceEvent, O, _), w || S == null || S(z.sourceEvent, _);
        }
      }
    }).filter((z) => {
      const q = z.target;
      return !z.button && (!b || !Pl(q, `.${b}`, h)) && (!$ || Pl(q, $, h));
    });
    v.call(L);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
    destroy: x
  };
}
function s0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    bo(o, Ar(i)) > 0 && r.push(i);
  return r;
}
const l0 = 250;
function u0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = s0(e, n, t + l0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: g } = $o(u, d, d.position, !0), p = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
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
  return d && i ? { ...d, ...$o(u, d, d.position, !0) } : d;
}
function Cc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function c0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const _c = () => !0;
function d0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: b, isValidConnection: $ = _c, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: M }) {
  const P = zp(e.target);
  let V = 0, L;
  const { x: z, y: q } = Vn(e), T = P == null ? void 0 : P.elementFromPoint(z, q), A = Cc(i, T), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !A)
    return;
  const O = $c(o, A, r, l, t);
  if (!O)
    return;
  let _ = Vn(e, S), D = !1, E = null, H = !1, I = null;
  function B() {
    if (!c || !S)
      return;
    const [ge, le] = dc(_, S, M);
    v({ x: ge, y: le }), V = requestAnimationFrame(B);
  }
  const K = {
    ...O,
    nodeId: o,
    type: A,
    position: O.position
  }, ee = l.get(o), F = {
    inProgress: !0,
    isValid: null,
    from: $o(ee, K, He.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: ee,
    to: _,
    toHandle: null,
    toPosition: gl[K.position],
    toNode: null
  };
  C(F);
  let W = F;
  p == null || p(e, { nodeId: o, handleId: r, handleType: A });
  function ie(ge) {
    if (!k() || !K) {
      pe(ge);
      return;
    }
    const le = w();
    _ = Vn(ge, S), L = u0(Lo(_, le, !1, [1, 1]), n, l, K), D || (B(), D = !0);
    const ke = kc(ge, {
      handle: L,
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
    I = ke.handleDomNode, E = ke.connection, H = c0(!!L, ke.isValid);
    const U = {
      // from stays the same
      ...W,
      isValid: H,
      to: L && H ? vc({ x: L.x, y: L.y }, le) : _,
      toHandle: ke.toHandle,
      toPosition: H && ke.toHandle ? ke.toHandle.position : gl[K.position],
      toNode: ke.toHandle ? l.get(ke.toHandle.nodeId) : null
    };
    H && L && W.toHandle && U.toHandle && W.toHandle.type === U.toHandle.type && W.toHandle.nodeId === U.toHandle.nodeId && W.toHandle.id === U.toHandle.id && W.to.x === U.to.x && W.to.y === U.to.y || (C(U), W = U);
  }
  function pe(ge) {
    (L || I) && E && H && (x == null || x(E));
    const { inProgress: le, ...ke } = W, U = {
      ...ke,
      toPosition: W.toHandle ? W.toPosition : null
    };
    b == null || b(ge, U), i && (h == null || h(ge, U)), g(), cancelAnimationFrame(V), D = !1, H = !1, E = null, I = null, P.removeEventListener("mousemove", ie), P.removeEventListener("mouseup", pe), P.removeEventListener("touchmove", ie), P.removeEventListener("touchend", pe);
  }
  P.addEventListener("mousemove", ie), P.addEventListener("mouseup", pe), P.addEventListener("touchmove", ie), P.addEventListener("touchend", pe);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = _c, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Vn(e), x = a.elementFromPoint(g, p), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
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
    const V = k && M && (n === cr.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    $.isValid = V && u(P), $.toHandle = $c(C, h, w, c, n, !1);
  }
  return $;
}
const f0 = {
  onPointerDown: d0,
  isValid: kc
};
function v0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
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
      const P = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), V = {
        x: w[0] - M[0] * P,
        y: w[1] - M[1] * P
      }, L = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: w[2]
      }, L, s);
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
const g0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ca = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), br = (e, t) => e.target.closest(`.${t}`), Sc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ec = (e) => {
  const t = e.ctrlKey && bi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function h0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (br(c, t))
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
    const x = Ki(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function p0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function m0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ki(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function y0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Sc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ki(i.transform)));
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Sc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && g0(e.prevViewport, a.transform))) {
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
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (br(c, `${u}-flow__node`) || br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || br(c, s) && c.type === "wheel" || br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function b0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), v = sc().clickDistance(!Dn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = jt(e).call(v);
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
      v == null || v.transform(da(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: T, noPanClassName: A, onPaneContextMenu: S, userSelectionActive: O, panOnScroll: _, panOnDrag: D, panOnScrollMode: E, panOnScrollSpeed: H, preventScrolling: I, zoomOnPinch: B, zoomOnScroll: K, zoomOnDoubleClick: ee, zoomActivationKeyPressed: F, lib: W, onTransformChange: ie }) {
    O && !c.isZoomingOrPanning && h();
    const pe = _ && !F && !O ? h0({
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
    }) : p0({
      noWheelClassName: T,
      preventScrolling: I,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", pe, { passive: !1 }), !O) {
      const le = m0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", le);
      const ke = y0({
        zoomPanValues: c,
        panOnDrag: D,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ie
      });
      v.on("zoom", ke);
      const U = w0({
        zoomPanValues: c,
        panOnDrag: D,
        panOnScroll: _,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", U);
    }
    const ge = x0({
      zoomActivationKeyPressed: F,
      panOnDrag: D,
      zoomOnScroll: K,
      panOnScroll: _,
      zoomOnDoubleClick: ee,
      zoomOnPinch: B,
      userSelectionActive: O,
      noPanClassName: A,
      noWheelClassName: T,
      lib: W
    });
    v.filter(ge), ee ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(T, A, S) {
    const O = ca(T), _ = v == null ? void 0 : v.constrain()(O, A, S);
    return _ && await b(_), new Promise((D) => D(_));
  }
  async function w(T, A) {
    const S = ca(T);
    return await b(S, A), new Promise((O) => O(S));
  }
  function k(T) {
    if (g) {
      const A = ca(T), S = g.property("__zoom");
      (S.k !== T.zoom || S.x !== T.x || S.y !== T.y) && (v == null || v.transform(g, A, null, { sync: !0 }));
    }
  }
  function M() {
    const T = g ? ac(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function P(T, A) {
    return g ? new Promise((S) => {
      v == null || v.scaleTo(da(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function V(T, A) {
    return g ? new Promise((S) => {
      v == null || v.scaleBy(da(g, A == null ? void 0 : A.duration, () => S(!0)), T);
    }) : Promise.resolve(!1);
  }
  function L(T) {
    v == null || v.scaleExtent(T);
  }
  function z(T) {
    v == null || v.translateExtent(T);
  }
  function q(T) {
    const A = !Dn(T) || T < 0 ? 0 : T;
    v == null || v.clickDistance(A);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: M,
    scaleTo: P,
    scaleBy: V,
    setScaleExtent: L,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: q
  };
}
var Ml;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ml || (Ml = {}));
var $0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(ee, "$connectable", n), i = () => te(ge, "$connectionRadius", n), a = () => te(ie, "$domNode", n), s = () => te(pe, "$nodeLookup", n), l = () => te(W, "$connectionMode", n), u = () => te(U, "$lib", n), c = () => te(Te, "$autoPanOnConnect", n), d = () => te(Ve, "$flowId", n), v = () => te(ke, "$isValidConnectionStore", n), g = () => te(Se, "$onedgecreate", n), p = () => te(se, "$onConnectAction", n), x = () => te($e, "$onConnectStartAction", n), b = () => te(Ye, "$onConnectEndAction", n), $ = () => te(le, "$viewport", n), h = () => te(it, "$connection", n), C = () => te(Xe, "$edges", n), w = () => te(ue, "$connectionLookup", n), k = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), q = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe();
  let A = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), O = y(t, "position", 28, () => He.Top), _ = y(t, "style", 12, void 0), D = y(t, "isValidConnection", 12, void 0), E = y(t, "onconnect", 12, void 0), H = y(t, "ondisconnect", 12, void 0), I = y(t, "isConnectable", 12, void 0), B = y(t, "class", 12, void 0);
  const K = sr("svelteflow__node_id"), ee = sr("svelteflow__node_connectable"), F = Ke(), {
    connectionMode: W,
    domNode: ie,
    nodeLookup: pe,
    connectionRadius: ge,
    viewport: le,
    isValidConnection: ke,
    lib: U,
    addEdge: ae,
    onedgecreate: Se,
    panBy: ce,
    cancelConnection: Me,
    updateConnection: G,
    autoPanOnConnect: Te,
    edges: Xe,
    connectionLookup: ue,
    onconnect: se,
    onconnectstart: $e,
    onconnectend: Ye,
    flowId: Ve,
    connection: it
  } = F;
  function at(Oe) {
    const nt = hc(Oe);
    (nt && Oe.button === 0 || !nt) && f0.onPointerDown(Oe, {
      handleId: f(P),
      nodeId: K,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: D() ?? v(),
      updateConnection: G,
      cancelConnection: Me,
      panBy: ce,
      onConnect: (qe) => {
        var Ne;
        const rt = g() ? g()(qe) : qe;
        rt && (ae(rt), (Ne = p()) == null || Ne(qe));
      },
      onConnectStart: (qe, Ne) => {
        var rt;
        (rt = x()) == null || rt(qe, {
          nodeId: Ne.nodeId,
          handleId: Ne.handleId,
          handleType: Ne.handleType
        });
      },
      onConnectEnd: (qe, Ne) => {
        var rt;
        (rt = b()) == null || rt(qe, Ne);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = /* @__PURE__ */ oe(null), Ie = /* @__PURE__ */ oe();
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
      (E() || H()) && (C(), J(Ie, w().get(`${K}-${S()}${A() ? `-${A()}` : ""}`)));
    }
  ), he(
    () => (f(ne), f(Ie), Q(H()), Q(E())),
    () => {
      if (f(ne) && !Pp(f(Ie), f(ne))) {
        const Oe = f(Ie) ?? /* @__PURE__ */ new Map();
        hl(f(ne), Oe, H()), hl(Oe, f(ne), E());
      }
      J(ne, f(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => h(), () => {
    J(V, !!h().fromHandle);
  }), he(
    () => (h(), Q(S()), f(P)),
    () => {
      var Oe, nt, qe;
      J(L, ((Oe = h().fromHandle) == null ? void 0 : Oe.nodeId) === K && ((nt = h().fromHandle) == null ? void 0 : nt.type) === S() && ((qe = h().fromHandle) == null ? void 0 : qe.id) === f(P));
    }
  ), he(
    () => (h(), Q(S()), f(P)),
    () => {
      var Oe, nt, qe;
      J(z, ((Oe = h().toHandle) == null ? void 0 : Oe.nodeId) === K && ((nt = h().toHandle) == null ? void 0 : nt.type) === S() && ((qe = h().toHandle) == null ? void 0 : qe.id) === f(P));
    }
  ), he(
    () => (l(), h(), Q(S()), f(P)),
    () => {
      var Oe, nt, qe;
      J(q, l() === cr.Strict ? ((Oe = h().fromHandle) == null ? void 0 : Oe.type) !== S() : K !== ((nt = h().fromHandle) == null ? void 0 : nt.nodeId) || f(P) !== ((qe = h().fromHandle) == null ? void 0 : qe.id));
    }
  ), he(() => (f(z), h()), () => {
    J(T, f(z) && h().isValid);
  }), mt(), ze();
  var me = $0();
  be(me, "data-nodeid", K);
  let tn;
  var nn = Y(me);
  wt(nn, t, "default", {}), Z(me), Ee(
    (Oe, nt) => {
      be(me, "data-handleid", f(P)), be(me, "data-handlepos", O()), be(me, "data-id", `${d() ?? ""}-${K ?? ""}-${A() || ""}-${S() ?? ""}`), tn = xt(me, 1, Oe, null, tn, nt), ft(me, _());
    },
    [
      () => vn(Mt([
        "svelte-flow__handle",
        `svelte-flow__handle-${O()}`,
        "nodrag",
        "nopan",
        O(),
        B()
      ])),
      () => ({
        valid: f(T),
        connectingto: f(z),
        connectingfrom: f(L),
        source: !f(k),
        target: f(k),
        connectablestart: f(M),
        connectableend: f(M),
        connectable: f(M),
        connectionindicator: f(M) && (!f(V) || f(q))
      })
    ],
    xe
  ), et("mousedown", me, at), et("touchstart", me, at), N(e, me);
  var pn = ve({
    get id() {
      return A();
    },
    set id(Oe) {
      A(Oe), m();
    },
    get type() {
      return S();
    },
    set type(Oe) {
      S(Oe), m();
    },
    get position() {
      return O();
    },
    set position(Oe) {
      O(Oe), m();
    },
    get style() {
      return _();
    },
    set style(Oe) {
      _(Oe), m();
    },
    get isValidConnection() {
      return D();
    },
    set isValidConnection(Oe) {
      D(Oe), m();
    },
    get onconnect() {
      return E();
    },
    set onconnect(Oe) {
      E(Oe), m();
    },
    get ondisconnect() {
      return H();
    },
    set ondisconnect(Oe) {
      H(Oe), m();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(Oe) {
      I(Oe), m();
    },
    get class() {
      return B();
    },
    set class(Oe) {
      B(Oe), m();
    }
  });
  return r(), pn;
}
de(
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
var C0 = /* @__PURE__ */ re("<!> <!>", 1);
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
  ze();
  var a = C0(), s = we(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = R(s), c = R(u);
  const d = /* @__PURE__ */ xe(() => i() ?? He.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Ee(() => {
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
de(
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
var _0 = /* @__PURE__ */ re(" <!>", 1);
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
  ze(), Le();
  var i = _0(), a = we(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Ee(() => {
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
de(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
var k0 = /* @__PURE__ */ re(" <!>", 1);
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
  ze(), Le();
  var i = k0(), a = we(i), s = R(a);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  return Un(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Ee(() => {
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
de(Mc, { data: {}, targetPosition: {} }, [], [], !0);
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
de(Hc, {}, [], [], !0);
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
var S0 = /* @__PURE__ */ re("<div><!></div>");
function Dc(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(i, "$domNode", n), { domNode: i } = Ke();
  ze();
  var a = S0(), s = Y(a);
  wt(s, t, "default", {}), Z(a), yt(a, (l, u) => _i == null ? void 0 : _i(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), N(e, a), ve(), r();
}
de(Dc, {}, ["default"], [], !0);
function Oc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Ke();
  return (s) => {
    const l = j(e).get(s);
    if (!l) {
      console.warn("012", zr.error012(s));
      return;
    }
    (l.selectable || j(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && j(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var E0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Lc(e, t) {
  fe(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = Oc(), a = sr("svelteflow__edge_id");
  return ze(), Dc(e, {
    children: (s, l) => {
      var u = E0();
      let c;
      var d = Y(u);
      wt(d, t, "default", {}), Z(u), Ee(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), et("keyup", u, () => {
      }), et("click", u, () => {
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
de(Lc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var P0 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), M0 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Vo(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  ze();
  var p = M0(), x = we(p), b = R(x);
  {
    var $ = (w) => {
      var k = P0();
      be(k, "stroke-opacity", 0), be(k, "stroke-width", g), Ee(() => be(k, "d", r())), N(w, k);
    };
    ye(b, (w) => {
      g && w($);
    });
  }
  var h = R(b);
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
        children: (k, M) => {
          Le();
          var P = Ze();
          Ee(() => dt(P, o())), N(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    ye(h, (w) => {
      o() && w(C);
    });
  }
  return Ee(
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
de(
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
  ), mt(), ze(), Vo(e, {
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
de(
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
function Vc(e, t) {
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
  ), mt(), ze(), Vo(e, {
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
de(
  Vc,
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
      ((b) => (J(r, b[0]), J(o, b[1]), J(i, b[2])))(Va({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), mt(), ze(), Vo(e, {
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
de(
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
  ), mt(), ze(), Vo(e, {
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
de(
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
function H0(e, t) {
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
const O0 = (e, t, n) => {
  if (!n)
    return;
  const r = j(e), o = t.set, i = n.set;
  let a = n ? j(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, L0 = (e, t, n, r = [0, 0], o = yi) => {
  const { subscribe: i, set: a, update: s } = Ce([]);
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
}, V0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Ce([]);
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
  smoothstep: Vc,
  default: ki,
  step: zc
}, T0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? yi;
  yc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), xc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Oo(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = hs(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Ce(null),
    nodes: L0(e, s, l, d, v),
    nodeLookup: Wt(s),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: V0(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: Ce(500),
    width: Ce(500),
    minZoom: Ce(0.5),
    maxZoom: Ce(2),
    nodeOrigin: Ce(d),
    nodeDragThreshold: Ce(1),
    nodeExtent: Ce(v),
    translateExtent: Ce(yi),
    autoPanOnNodeDrag: Ce(!0),
    autoPanOnConnect: Ce(!0),
    fitViewOnInit: Ce(!1),
    fitViewOnInitDone: Ce(!1),
    fitViewOptions: Ce(void 0),
    panZoom: Ce(null),
    snapGrid: Ce(null),
    dragging: Ce(!1),
    selectionRect: Ce(null),
    selectionKeyPressed: Ce(!1),
    multiselectionKeyPressed: Ce(!1),
    deleteKeyPressed: Ce(!1),
    panActivationKeyPressed: Ce(!1),
    zoomActivationKeyPressed: Ce(!1),
    selectionRectMode: Ce(null),
    selectionMode: Ce(wi.Partial),
    nodeTypes: Ce(Nc),
    edgeTypes: Ce(Ac),
    viewport: Ce(g),
    connectionMode: Ce(cr.Strict),
    domNode: Ce(null),
    connection: Wt(Da),
    connectionLineType: Ce(Sr.Bezier),
    connectionRadius: Ce(20),
    isValidConnection: Ce(() => !0),
    nodesDraggable: Ce(!0),
    nodesConnectable: Ce(!0),
    elementsSelectable: Ce(!0),
    selectNodesOnDrag: Ce(!0),
    markers: Wt([]),
    defaultMarkerColor: Ce("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: Ce(!1),
    onerror: Ce(Vp),
    ondelete: Ce(void 0),
    onedgecreate: Ce(void 0),
    onconnect: Ce(void 0),
    onconnectstart: Ce(void 0),
    onconnectend: Ce(void 0),
    onbeforedelete: Ce(void 0),
    nodesInitialized: Ce(!1),
    edgesInitialized: Ce(!1),
    viewportInitialized: Ce(!1),
    initialized: Wt(!1)
  };
};
function z0(e) {
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
    const c = jp({
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
      zIndex: qp({
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
function N0(e) {
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
const ji = Symbol();
function Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = T0({
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
    const D = j(s.edges);
    s.edges.set(Xp(_, D));
  }
  const d = (_, D = !1) => {
    var E;
    const H = j(s.nodeLookup);
    for (const [I, B] of _) {
      const K = (E = H.get(I)) == null ? void 0 : E.internals.userNode;
      K && (K.position = B.position, K.dragging = D);
    }
    s.nodes.update((I) => I);
  };
  function v(_) {
    var D, E, H;
    const I = j(s.nodeLookup), B = j(s.parentLookup), { changes: K, updatedInternals: ee } = n0(_, I, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (ee) {
      if (Jp(I, B, { nodeOrigin: i, nodeExtent: a }), !j(s.fitViewOnInitDone) && j(s.fitViewOnInit)) {
        const F = j(s.fitViewOptions), W = p({
          ...F,
          nodes: F == null ? void 0 : F.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const F of K) {
        const W = (D = I.get(F.id)) == null ? void 0 : D.internals.userNode;
        if (W)
          switch (F.type) {
            case "dimensions": {
              const ie = { ...W.measured, ...F.dimensions };
              F.setAttributes && (W.width = ((E = F.dimensions) == null ? void 0 : E.width) ?? W.width, W.height = ((H = F.dimensions) == null ? void 0 : H.height) ?? W.height), W.measured = ie;
              break;
            }
            case "position":
              W.position = F.position ?? W.position;
              break;
          }
      }
      s.nodes.update((F) => F), j(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const D = j(s.panZoom), E = j(s.domNode);
    if (!D || !E)
      return Promise.resolve(!1);
    const { width: H, height: I } = ps(E), B = pl(j(s.nodeLookup), _);
    return ml({
      nodes: B,
      width: H,
      height: I,
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: D
    }, _);
  }
  function p(_) {
    const D = j(s.panZoom);
    if (!D)
      return !1;
    const E = pl(j(s.nodeLookup), _);
    return ml({
      nodes: E,
      width: j(s.width),
      height: j(s.height),
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: D
    }, _), E.size > 0;
  }
  function x(_, D) {
    const E = j(s.panZoom);
    return E ? E.scaleBy(_, D) : Promise.resolve(!1);
  }
  function b(_) {
    return x(1.2, _);
  }
  function $(_) {
    return x(1 / 1.2, _);
  }
  function h(_) {
    const D = j(s.panZoom);
    D && (D.setScaleExtent([_, j(s.maxZoom)]), s.minZoom.set(_));
  }
  function C(_) {
    const D = j(s.panZoom);
    D && (D.setScaleExtent([j(s.minZoom), _]), s.maxZoom.set(_));
  }
  function w(_) {
    const D = j(s.panZoom);
    D && (D.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let D = !1;
    return _.forEach((E) => {
      E.selected && (E.selected = !1, D = !0);
    }), D;
  }
  function M(_) {
    var D;
    (D = j(s.panZoom)) == null || D.setClickDistance(_);
  }
  function P(_) {
    k((_ == null ? void 0 : _.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), k((_ == null ? void 0 : _.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var D;
    if (_) {
      const E = j(s.nodes), H = j(s.edges), I = E.filter((F) => F.selected), B = H.filter((F) => F.selected), { nodes: K, edges: ee } = await uc({
        nodesToRemove: I,
        edgesToRemove: B,
        nodes: E,
        edges: H,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (K.length || ee.length) && (s.nodes.update((F) => F.filter((W) => !K.some((ie) => ie.id === W.id))), s.edges.update((F) => F.filter((W) => !ee.some((ie) => ie.id === W.id))), (D = j(s.ondelete)) == null || D({
        nodes: K,
        edges: ee
      }));
    }
  });
  function V(_) {
    const D = j(s.multiselectionKeyPressed);
    s.nodes.update((E) => E.map((H) => {
      const I = _.includes(H.id), B = D && H.selected || I;
      return H.selected = B, H;
    })), D || s.edges.update((E) => E.map((H) => (H.selected = !1, H)));
  }
  function L(_) {
    const D = j(s.multiselectionKeyPressed);
    s.edges.update((E) => E.map((H) => {
      const I = _.includes(H.id), B = D && H.selected || I;
      return H.selected = B, H;
    })), D || s.nodes.update((E) => E.map((H) => (H.selected = !1, H)));
  }
  function z(_) {
    var D;
    const E = (D = j(s.nodes)) == null ? void 0 : D.find((H) => H.id === _);
    if (!E) {
      console.warn("012", zr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), E.selected ? E.selected && j(s.multiselectionKeyPressed) && P({ nodes: [E], edges: [] }) : V([_]);
  }
  function q(_) {
    const D = j(s.viewport);
    return r0({
      delta: _,
      panZoom: j(s.panZoom),
      transform: [D.x, D.y, D.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const T = Ce(Da), A = (_) => {
    T.set({ ..._ });
  };
  function S() {
    T.set(Da);
  }
  function O() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: z0(s),
    visibleNodes: N0(s),
    connection: Kn([T, s.viewport], ([_, D]) => _.inProgress ? {
      ..._,
      to: Lo(_.to, [D.x, D.y, D.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, D, E]) => Fp(_, { defaultColor: D, id: E })),
    initialized: (() => {
      let _ = !1;
      const D = j(s.nodes).length, E = j(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, I, B]) => _ || (D === 0 ? _ = B : E === 0 ? _ = B && H : _ = B && H && I, _));
    })(),
    // actions
    syncNodeStores: (_) => H0(s.nodes, _),
    syncEdgeStores: (_) => D0(s.edges, _),
    syncViewport: (_) => O0(s.panZoom, s.viewport, _),
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
    addSelectedNodes: V,
    addSelectedEdges: L,
    handleNodeSelection: z,
    panBy: q,
    updateConnection: A,
    cancelConnection: S,
    reset: O
  };
}
function Ke() {
  const e = sr(ji);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function A0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Or(ji, {
    getStore: () => s
  }), s;
}
function Dl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = b0({
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
var I0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const q0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function qc(e, t) {
  fe(t, !1), Qe(e, q0);
  const [n, r] = tt(), o = () => te(E, "$panActivationKeyPressed", n), i = () => te(A, "$minZoom", n), a = () => te(S, "$maxZoom", n), s = () => te(H, "$zoomActivationKeyPressed", n), l = () => te(T, "$selectionRect", n), u = () => te(_, "$translateExtent", n), c = () => te(D, "$lib", n), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), M = y(t, "zoomOnPinch", 12), P = y(t, "panOnDrag", 12), V = y(t, "panOnScroll", 12), L = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: q,
    selectionRect: T,
    minZoom: A,
    maxZoom: S,
    dragging: O,
    translateExtent: _,
    lib: D,
    panActivationKeyPressed: E,
    zoomActivationKeyPressed: H,
    viewportInitialized: I
  } = Ke(), B = (W) => z.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
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
    () => (o(), Q(V())),
    () => {
      J(g, o() || V());
    }
  ), mt(), ze();
  var K = I0(), ee = Y(K);
  wt(ee, t, "default", {}), Z(K), yt(K, (W, ie) => Dl == null ? void 0 : Dl(W, ie), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: O,
    panZoom: q,
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
    paneClickDistance: L(),
    onTransformChange: B
  })), N(e, K);
  var F = ve({
    get initialViewport() {
      return p();
    },
    set initialViewport(W) {
      p(W), m();
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
      return M();
    },
    set zoomOnPinch(W) {
      M(W), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(W) {
      P(W), m();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(W) {
      V(W), m();
    },
    get paneClickDistance() {
      return L();
    },
    set paneClickDistance(W) {
      L(W), m();
    }
  });
  return r(), F;
}
de(
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
function Ll(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ re("<div><!></div>");
const Z0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Rc(e, t) {
  fe(t, !1), Qe(e, Z0);
  const [n, r] = tt(), o = () => te(S, "$panActivationKeyPressed", n), i = () => te(T, "$selectionKeyPressed", n), a = () => te(z, "$selectionRect", n), s = () => te(L, "$elementsSelectable", n), l = () => te(q, "$selectionRectMode", n), u = () => te(M, "$edges", n), c = () => te(k, "$nodeLookup", n), d = () => te(P, "$viewport", n), v = () => te(A, "$selectionMode", n), g = () => te(V, "$dragging", n), p = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe();
  let $ = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const C = Ii(), {
    nodes: w,
    nodeLookup: k,
    edges: M,
    viewport: P,
    dragging: V,
    elementsSelectable: L,
    selectionRect: z,
    selectionRectMode: q,
    selectionKeyPressed: T,
    selectionMode: A,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: O
  } = Ke();
  let _ = /* @__PURE__ */ oe(), D = null, E = [], H = !1;
  function I(U) {
    if (H) {
      H = !1;
      return;
    }
    C("paneclick", { event: U }), O(), q.set(null);
  }
  function B(U) {
    var ae, Se;
    if (D = f(_).getBoundingClientRect(), !L || !f(x) || U.button !== 0 || U.target !== f(_) || !D)
      return;
    (Se = (ae = U.target) == null ? void 0 : ae.setPointerCapture) == null || Se.call(ae, U.pointerId);
    const { x: ce, y: Me } = Vn(U, D);
    O(), z.set({
      width: 0,
      height: 0,
      startX: ce,
      startY: Me,
      x: ce,
      y: Me
    });
  }
  function K(U) {
    if (!f(x) || !D || !a())
      return;
    H = !0;
    const ae = Vn(U, D), Se = a().startX ?? 0, ce = a().startY ?? 0, Me = {
      ...a(),
      x: ae.x < Se ? ae.x : Se,
      y: ae.y < ce ? ae.y : ce,
      width: Math.abs(ae.x - Se),
      height: Math.abs(ae.y - ce)
    }, G = E.map((se) => se.id), Te = Oa(E, u()).map((se) => se.id);
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
    const Xe = Oa(E, u()).map((se) => se.id), ue = E.map((se) => se.id);
    (G.length !== ue.length || ue.some((se) => !G.includes(se))) && w.update((se) => se.map(Ll(ue))), (Te.length !== Xe.length || Xe.some((se) => !Te.includes(se))) && M.update((se) => se.map(Ll(Xe))), q.set("user"), z.set(Me);
  }
  function ee(U) {
    var ae, Se;
    U.button === 0 && ((Se = (ae = U.target) == null ? void 0 : ae.releasePointerCapture) == null || Se.call(ae, U.pointerId), !f(x) && l() === "user" && U.target === f(_) && (I == null || I(U)), z.set(null), E.length > 0 && di(q, "nodes"), i() && (H = !1));
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
  ), mt(), ze();
  var W = R0(), ie = /* @__PURE__ */ Pe(() => f(b) ? void 0 : Ol(I, f(_))), pe = /* @__PURE__ */ Pe(() => Ol(F, f(_)));
  let ge;
  var le = Y(W);
  wt(le, t, "default", {}), Z(W), _n(W, (U) => J(_, U), () => f(_)), Ee(
    (U) => ge = xt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, ge, U),
    [
      () => ({
        draggable: $() === !0 || Array.isArray($()) && $().includes(0),
        dragging: g(),
        selection: f(x)
      })
    ],
    xe
  ), et("click", W, function(...U) {
    var ae;
    (ae = f(ie)) == null || ae.apply(this, U);
  }), et("pointerdown", W, function(...U) {
    var ae;
    (ae = f(b) ? B : void 0) == null || ae.apply(this, U);
  }), et("pointermove", W, function(...U) {
    var ae;
    (ae = f(b) ? K : void 0) == null || ae.apply(this, U);
  }), et("pointerup", W, function(...U) {
    var ae;
    (ae = f(b) ? ee : void 0) == null || ae.apply(this, U);
  }), et("contextmenu", W, function(...U) {
    var ae;
    (ae = f(pe)) == null || ae.apply(this, U);
  }), N(e, W);
  var ke = ve({
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
  return r(), ke;
}
de(Rc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var B0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const X0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Zc(e, t) {
  fe(t, !1), Qe(e, X0);
  const [n, r] = tt(), o = () => te(i, "$viewport", n), { viewport: i } = Ke();
  ze();
  var a = B0(), s = Y(a);
  wt(s, t, "default", {}), Z(a), Ee(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), N(e, a), ve(), r();
}
de(Zc, {}, ["default"], [], !0);
function Si(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = a0({
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
  const [n, r] = tt(), o = () => te(pe, "$nodeTypes", n), i = () => te(ae, "$elementsSelectable", n), a = () => te(Se, "$nodesDraggable", n), s = () => te(Te, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), p = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), M = y(t, "resizeObserver", 13, null), P = y(t, "style", 13, void 0), V = y(t, "type", 13, "default"), L = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), q = y(t, "positionY", 13), T = y(t, "sourcePosition", 13, void 0), A = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), O = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), D = y(t, "initialWidth", 13, void 0), E = y(t, "initialHeight", 13, void 0), H = y(t, "width", 13, void 0), I = y(t, "height", 13, void 0), B = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), ee = y(t, "parentId", 13, void 0), F = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const ie = Ke(), {
    nodeTypes: pe,
    nodeDragThreshold: ge,
    selectNodesOnDrag: le,
    handleNodeSelection: ke,
    updateNodeInternals: U,
    elementsSelectable: ae,
    nodesDraggable: Se
  } = ie;
  let ce = /* @__PURE__ */ oe(void 0, !0), Me = /* @__PURE__ */ oe(null, !0);
  const G = Ii(), Te = Ce(h());
  let Xe = /* @__PURE__ */ oe(void 0, !0), ue = /* @__PURE__ */ oe(void 0, !0), se = /* @__PURE__ */ oe(void 0, !0);
  Or("svelteflow__node_id", g()), Or("svelteflow__node_connectable", Te), is(() => {
    var ne;
    f(Me) && ((ne = M()) == null || ne.unobserve(f(Me)));
  });
  function $e(ne) {
    $() && (!j(le) || !b() || j(ge) > 0) && ke(g()), G("nodeclick", { node: v().internals.userNode, event: ne });
  }
  he(() => Q(V()), () => {
    J(l, V() || "default");
  }), he(() => (o(), f(l)), () => {
    J(u, !!o()[f(l)]);
  }), he(
    () => (o(), f(l), Ci),
    () => {
      J(c, o()[f(l)] || Ci);
    }
  ), he(
    () => (f(u), Q(V())),
    () => {
      f(u) || console.warn("003", zr.error003(V()));
    }
  ), he(
    () => (Q(H()), Q(I()), Q(D()), Q(E()), Q(O()), Q(_())),
    () => {
      J(d, Y0({
        width: H(),
        height: I(),
        initialWidth: D(),
        initialHeight: E(),
        measuredWidth: O(),
        measuredHeight: _()
      }));
    }
  ), he(() => Q(h()), () => {
    Te.set(!!h());
  }), he(
    () => (f(Xe), f(l), f(ue), Q(T()), f(se), Q(A()), Q(g()), f(ce)),
    () => {
      (f(Xe) && f(l) !== f(Xe) || f(ue) && T() !== f(ue) || f(se) && A() !== f(se)) && requestAnimationFrame(() => U(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(ce),
            force: !0
          }
        ]
      ]))), J(Xe, f(l)), J(ue, T()), J(se, A());
    }
  ), he(
    () => (Q(M()), f(ce), f(Me), Q(K())),
    () => {
      M() && (f(ce) !== f(Me) || !K()) && (f(Me) && M().unobserve(f(Me)), f(ce) && M().observe(f(ce)), J(Me, f(ce)));
    }
  ), mt(), ze(!0);
  var Ye = Je(), Ve = we(Ye);
  {
    var it = (ne) => {
      var Ie = W0();
      let me, tn;
      var nn = Y(Ie);
      const pn = /* @__PURE__ */ xe(() => x() ?? !1), Oe = /* @__PURE__ */ xe(() => $() ?? i() ?? !0), nt = /* @__PURE__ */ xe(() => C() ?? !0), qe = /* @__PURE__ */ xe(() => b() ?? a() ?? !0);
      ku(nn, () => f(c), (Ne, rt) => {
        rt(Ne, {
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
            return f(Oe);
          },
          get deletable() {
            return f(nt);
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
            return f(qe);
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
            return q();
          },
          get width() {
            return H();
          },
          get height() {
            return I();
          }
        });
      }), Z(Ie), yt(Ie, (Ne, rt) => Si == null ? void 0 : Si(Ne, rt), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: B(),
        noDragClass: "nodrag",
        nodeClickDistance: F(),
        onNodeMouseDown: ke,
        onDrag: (Ne, rt, rn, Yt) => {
          G("nodedrag", { event: Ne, targetNode: rn, nodes: Yt });
        },
        onDragStart: (Ne, rt, rn, Yt) => {
          G("nodedragstart", { event: Ne, targetNode: rn, nodes: Yt });
        },
        onDragStop: (Ne, rt, rn, Yt) => {
          G("nodedragstop", { event: Ne, targetNode: rn, nodes: Yt });
        },
        store: ie
      })), _n(Ie, (Ne) => J(ce, Ne), () => f(ce)), It(() => et("click", Ie, $e)), It(() => et("mouseenter", Ie, (Ne) => G("nodemouseenter", { node: v(), event: Ne }))), It(() => et("mouseleave", Ie, (Ne) => G("nodemouseleave", { node: v(), event: Ne }))), It(() => et("mousemove", Ie, (Ne) => G("nodemousemove", { node: v(), event: Ne }))), It(() => et("contextmenu", Ie, (Ne) => G("nodecontextmenu", { node: v(), event: Ne }))), Ee(
        (Ne, rt) => {
          be(Ie, "data-id", g()), me = xt(Ie, 1, Ne, null, me, rt), tn = ft(Ie, `${P() ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, tn, {
            "z-index": S(),
            transform: `translate(${z() ?? ""}px, ${q() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => vn(Mt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: $(),
            nopan: b(),
            parent: L()
          })
        ],
        xe
      ), N(ne, Ie);
    };
    ye(Ve, (ne) => {
      w() || ne(it);
    });
  }
  N(e, Ye);
  var at = ve({
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
      return V();
    },
    set type(ne) {
      V(ne), m();
    },
    get isParent() {
      return L();
    },
    set isParent(ne) {
      L(ne), m();
    },
    get positionX() {
      return z();
    },
    set positionX(ne) {
      z(ne), m();
    },
    get positionY() {
      return q();
    },
    set positionY(ne) {
      q(ne), m();
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
      return O();
    },
    set measuredWidth(ne) {
      O(ne), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(ne) {
      _(ne), m();
    },
    get initialWidth() {
      return D();
    },
    set initialWidth(ne) {
      D(ne), m();
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
      return K();
    },
    set initialized(ne) {
      K(ne), m();
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
      return W();
    },
    set class(ne) {
      W(ne), m();
    }
  });
  return r(), at;
}
de(
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
var K0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const j0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Xc(e, t) {
  fe(t, !1), Qe(e, j0);
  const [n, r] = tt(), o = () => te(c, "$visibleNodes", n), i = () => te(d, "$nodesDraggable", n), a = () => te(g, "$elementsSelectable", n), s = () => te(v, "$nodesConnectable", n), l = () => te(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: x
  } = Ke(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const M = k.target.getAttribute("data-id");
      w.set(M, { id: M, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  is(() => {
    b == null || b.disconnect();
  }), ze();
  var $ = K0();
  Pt($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ xe(() => !!f(w).selected), M = /* @__PURE__ */ xe(() => !!f(w).hidden), P = /* @__PURE__ */ xe(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), V = /* @__PURE__ */ xe(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), L = /* @__PURE__ */ xe(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), z = /* @__PURE__ */ xe(() => f(w).deletable ?? !0), q = /* @__PURE__ */ xe(() => l().has(f(w).id)), T = /* @__PURE__ */ xe(() => f(w).type ?? "default"), A = /* @__PURE__ */ xe(() => f(w).internals.z ?? 0), S = /* @__PURE__ */ xe(() => gc(f(w)));
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
        return f(V);
      },
      get connectable() {
        return f(L);
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
        return f(q);
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
        nodeclick(O) {
          Be.call(this, t, O);
        },
        nodemouseenter(O) {
          Be.call(this, t, O);
        },
        nodemousemove(O) {
          Be.call(this, t, O);
        },
        nodemouseleave(O) {
          Be.call(this, t, O);
        },
        nodedrag(O) {
          Be.call(this, t, O);
        },
        nodedragstart(O) {
          Be.call(this, t, O);
        },
        nodedragstop(O) {
          Be.call(this, t, O);
        },
        nodecontextmenu(O) {
          Be.call(this, t, O);
        }
      }
    });
  }), Z($), N(e, $);
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
de(Xc, { nodeClickDistance: {} }, [], [], !0);
var F0 = /* @__PURE__ */ _e('<svg><g role="img"><!></g></svg>');
function Yc(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(W, "$edgeTypes", n), i = () => te(ie, "$flowId", n), a = () => te(pe, "$elementsSelectable", n), s = () => te(F, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), v = /* @__PURE__ */ oe(void 0, !0);
  let g = y(t, "id", 13), p = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), M = y(t, "selectable", 13, void 0), P = y(t, "deletable", 13, void 0), V = y(t, "hidden", 13, !1), L = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), q = y(t, "markerStart", 13, void 0), T = y(t, "markerEnd", 13, void 0), A = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), O = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), D = y(t, "targetX", 13), E = y(t, "targetY", 13), H = y(t, "sourcePosition", 13), I = y(t, "targetPosition", 13), B = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), ee = y(t, "class", 13, "");
  Or("svelteflow__edge_id", g());
  const {
    edgeLookup: F,
    edgeTypes: W,
    flowId: ie,
    elementsSelectable: pe
  } = Ke(), ge = Ii(), le = Oc();
  function ke(G) {
    const Te = s().get(g());
    Te && (le(g()), ge("edgeclick", { event: G, edge: Te }));
  }
  function U(G, Te) {
    const Xe = s().get(g());
    Xe && ge(Te, { event: G, edge: Xe });
  }
  he(() => Q(p()), () => {
    J(l, p() || "default");
  }), he(
    () => (o(), f(l), ki),
    () => {
      J(u, o()[f(l)] || ki);
    }
  ), he(
    () => (Q(q()), i()),
    () => {
      J(c, q() ? `url('#${Ta(q(), i())}')` : void 0);
    }
  ), he(
    () => (Q(T()), i()),
    () => {
      J(d, T() ? `url('#${Ta(T(), i())}')` : void 0);
    }
  ), he(
    () => (Q(M()), a()),
    () => {
      J(v, M() ?? a());
    }
  ), mt(), ze(!0);
  var ae = Je(), Se = we(ae);
  {
    var ce = (G) => {
      var Te = F0();
      let Xe;
      var ue = Y(Te);
      let se;
      var $e = Y(ue);
      const Ye = /* @__PURE__ */ xe(() => P() ?? !0);
      ku($e, () => f(u), (Ve, it) => {
        it(Ve, {
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
            return O();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return D();
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
            return L();
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
            return K();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(Ye);
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
      }), Z(ue), Z(Te), Ee(
        (Ve, it) => {
          Xe = ft(Te, "", Xe, { "z-index": C() }), se = xt(ue, 0, Ve, null, se, it), be(ue, "data-id", g()), be(ue, "aria-label", B() === null ? void 0 : B() ? B() : `Edge from ${x()} to ${b()}`);
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
      ), et("click", ue, ke), et("contextmenu", ue, (Ve) => {
        U(Ve, "edgecontextmenu");
      }), et("mouseenter", ue, (Ve) => {
        U(Ve, "edgemouseenter");
      }), et("mouseleave", ue, (Ve) => {
        U(Ve, "edgemouseleave");
      }), N(G, Te);
    };
    ye(Se, (G) => {
      V() || G(ce);
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
      return V();
    },
    set hidden(G) {
      V(G), m();
    },
    get label() {
      return L();
    },
    set label(G) {
      L(G), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(G) {
      z(G), m();
    },
    get markerStart() {
      return q();
    },
    set markerStart(G) {
      q(G), m();
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
      return O();
    },
    set sourceX(G) {
      O(G), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(G) {
      _(G), m();
    },
    get targetX() {
      return D();
    },
    set targetX(G) {
      D(G), m();
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
      return K();
    },
    set interactionWidth(G) {
      K(G), m();
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
de(
  Yc,
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
  fe(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return en(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), ze(), ve({
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
de(Wc, { onMount: {}, onDestroy: {} }, [], [], !0);
var G0 = /* @__PURE__ */ _e("<defs></defs>");
function Kc(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(i, "$markers", n), { markers: i } = Ke();
  ze();
  var a = G0();
  Pt(a, 5, o, (s) => s.id, (s, l) => {
    jc(s, lt(() => f(l)));
  }), Z(a), N(e, a), ve(), r();
}
de(Kc, {}, [], [], !0);
var U0 = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), J0 = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Q0 = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  ze();
  var c = Q0(), d = Y(c);
  {
    var v = (p) => {
      var x = U0();
      Ee(() => {
        be(x, "stroke", l()), be(x, "stroke-width", u());
      }), N(p, x);
    }, g = (p, x) => {
      {
        var b = ($) => {
          var h = J0();
          Ee(() => {
            be(h, "stroke", l()), be(h, "stroke-width", u()), be(h, "fill", l());
          }), N($, h);
        };
        ye(
          p,
          ($) => {
            r() === xo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    ye(d, (p) => {
      r() === xo.Arrow ? p(v) : p(g, !1);
    });
  }
  return Z(c), Ee(() => {
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
de(
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
var e2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Fc(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(s, "$visibleEdges", n), i = () => te(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ke();
  en(() => {
    a() && u(a());
  }), ze();
  var d = e2(), v = Y(d), g = Y(v);
  Kc(g, {}), Z(v);
  var p = R(v, 2);
  Pt(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ xe(() => f(C).selectable ?? i()), k = /* @__PURE__ */ xe(() => f(C).type || "default");
    Yc(h, {
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
          Be.call(this, t, M);
        },
        edgecontextmenu(M) {
          Be.call(this, t, M);
        },
        edgemouseenter(M) {
          Be.call(this, t, M);
        },
        edgemouseleave(M) {
          Be.call(this, t, M);
        }
      }
    });
  });
  var x = R(p, 2);
  {
    var b = (h) => {
      Wc(h, {
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
  Z(d), N(e, d);
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
de(Fc, { defaultEdgeOptions: {} }, [], [], !0);
var t2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const n2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function xs(e, t) {
  fe(t, !1), Qe(e, n2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = Je(), l = we(s);
  {
    var u = (c) => {
      var d = t2();
      let v;
      Ee(() => v = ft(d, "", v, {
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
de(
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
  const [n, r] = tt(), o = () => te(a, "$selectionRect", n), i = () => te(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Ke();
  ze();
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
de(Gc, {}, [], [], !0);
var r2 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const o2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  fe(t, !1), Qe(e, o2);
  const [n, r] = tt(), o = () => te(l, "$selectionRectMode", n), i = () => te(c, "$nodeLookup", n), a = () => te(u, "$nodes", n), s = Ke(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ii();
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
      o() === "nodes" && (J(v, Oo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), mt(), ze();
  var x = Je(), b = we(x);
  {
    var $ = (h) => {
      var C = r2(), w = Y(C);
      xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), yt(C, (k, M) => Si == null ? void 0 : Si(k, M), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, M, P, V) => {
          d("nodedrag", { event: k, targetNode: null, nodes: V });
        },
        onDragStart: (k, M, P, V) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: V });
        },
        onDragStop: (k, M, P, V) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: V });
        }
      })), It(() => et("contextmenu", C, g)), It(() => et("click", C, p)), It(() => et("keyup", C, () => {
      })), Ee(() => ft(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), N(h, C);
    };
    ye(b, (h) => {
      o() === "nodes" && f(v) && Dn(f(v).x) && Dn(f(v).y) && h($);
    });
  }
  N(e, x), ve(), r();
}
de(Uc, {}, [], [], !0);
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
  } = Ke();
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
  return ze(), et("blur", Ot, $), et("contextmenu", Ot, $), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ap(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), yt(Ot, (h, C) => ct == null ? void 0 : ct(h, C), () => ({
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
de(
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
var i2 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), a2 = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Qc(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(g, "$connection", n), i = () => te(p, "$connectionLineType", n), a = () => te(d, "$width", n), s = () => te(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = Ke();
  let x = /* @__PURE__ */ oe(null);
  he(
    () => (o(), Q(c()), i(), f(x), Va),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: M, toPosition: P } = o(), V = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: M,
          targetX: k.x,
          targetY: k.y,
          targetPosition: P
        };
        switch (i()) {
          case Sr.Bezier:
            ((L) => J(x, L[0]))(pc(V));
            break;
          case Sr.Step:
            ((L) => J(x, L[0]))($i({ ...V, borderRadius: 0 }));
            break;
          case Sr.SmoothStep:
            ((L) => J(x, L[0]))($i(V));
            break;
          default:
            ((L) => J(x, L[0]))(Va(V));
        }
      }
    }
  ), mt(), ze();
  var b = Je(), $ = we(b);
  {
    var h = (w) => {
      var k = a2(), M = Y(k), P = Y(M);
      wt(P, t, "connectionLine", {});
      var V = R(P);
      {
        var L = (z) => {
          var q = i2();
          Ee(() => {
            be(q, "d", f(x)), ft(q, u());
          }), N(z, q);
        };
        ye(V, (z) => {
          c() || z(L);
        });
      }
      Z(M), Z(k), Ee(
        (z) => {
          be(k, "width", a()), be(k, "height", s()), ft(k, l()), xt(M, 0, z);
        },
        [
          () => vn(Mt([
            "svelte-flow__connection",
            Mp(o().isValid)
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
de(
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
var s2 = /* @__PURE__ */ re("<div><!></div>");
function To(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, i] = tt(), a = () => te(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ke();
  he(() => Q(l()), () => {
    J(s, `${l()}`.split("-"));
  }), mt(), ze();
  var v = s2();
  let g;
  var p = Y(v);
  wt(p, t, "default", {}), Z(v), Ee(
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
de(To, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var l2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
  fe(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  ze();
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
          var c = l2();
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
de(ed, { proOptions: {}, position: {} }, [], [], !0);
function Vl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const u2 = (e) => Object.keys(e);
function Tl(e, t) {
  u2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function c2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function d2(e = "light") {
  return Wt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = c2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var f2 = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), v2 = /* @__PURE__ */ re("<!> <!>", 1), g2 = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const h2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
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
  fe(t, !1), Qe(e, h2);
  const [i, a] = tt(), s = () => te(C(), "$viewport", i), l = () => te(Qi, "$initialized", i), u = () => te(f(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), M = y(t, "selectionKey", 12, void 0), P = y(t, "selectionMode", 12, void 0), V = y(t, "panActivationKey", 12, void 0), L = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), q = y(t, "nodesDraggable", 12, void 0), T = y(t, "nodesConnectable", 12, void 0), A = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), O = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), D = y(t, "connectionRadius", 12, void 0), E = y(t, "connectionLineType", 12, void 0), H = y(t, "connectionMode", 28, () => cr.Strict), I = y(t, "connectionLineStyle", 12, ""), B = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), ee = y(t, "onMove", 12, void 0), F = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), ie = y(t, "translateExtent", 12, void 0), pe = y(t, "nodeExtent", 12, void 0), ge = y(t, "onlyRenderVisibleElements", 12, void 0), le = y(t, "panOnScrollMode", 28, () => jn.Free), ke = y(t, "preventScrolling", 12, !0), U = y(t, "zoomOnScroll", 12, !0), ae = y(t, "zoomOnDoubleClick", 12, !0), Se = y(t, "zoomOnPinch", 12, !0), ce = y(t, "panOnScroll", 12, !1), Me = y(t, "panOnDrag", 12, !0), G = y(t, "selectionOnDrag", 12, void 0), Te = y(t, "autoPanOnConnect", 12, !0), Xe = y(t, "autoPanOnNodeDrag", 12, !0), ue = y(t, "onerror", 12, void 0), se = y(t, "ondelete", 12, void 0), $e = y(t, "onedgecreate", 12, void 0), Ye = y(t, "attributionPosition", 12, void 0), Ve = y(t, "proOptions", 12, void 0), it = y(t, "defaultEdgeOptions", 12, void 0), at = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Ie = y(t, "colorMode", 12, "light"), me = y(t, "onconnect", 12, void 0), tn = y(t, "onconnectstart", 12, void 0), nn = y(t, "onconnectend", 12, void 0), pn = y(t, "onbeforedelete", 12, void 0), Oe = y(t, "oninit", 12, void 0), nt = y(t, "nodeOrigin", 12, void 0), qe = y(t, "paneClickDistance", 12, 0), Ne = y(t, "nodeClickDistance", 12, 0), rt = y(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = y(t, "style", 12, void 0), Yt = y(t, "class", 12, void 0), Fr = /* @__PURE__ */ oe(), $t = /* @__PURE__ */ oe(), Ht = /* @__PURE__ */ oe();
  const mr = s() || h(), ot = vf(ji) ? Ke() : A0({
    nodes: j(v()),
    edges: j(g()),
    width: at(),
    height: ne(),
    fitView: p(),
    nodeOrigin: nt(),
    nodeExtent: pe()
  });
  en(() => (ot.width.set(f($t)), ot.height.set(f(Ht)), ot.domNode.set(f(Fr)), ot.syncNodeStores(v()), ot.syncEdgeStores(g()), ot.syncViewport(C()), p() !== void 0 && ot.fitViewOnInit.set(p()), x() && ot.fitViewOptions.set(x()), Vl(ot, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ie(),
    paneClickDistance: qe()
  }), () => {
    ot.reset();
  }));
  const { initialized: Qi } = ot;
  let Gr = /* @__PURE__ */ oe(!1);
  he(
    () => (f($t), f(Ht)),
    () => {
      f($t) !== void 0 && f(Ht) !== void 0 && (ot.width.set(f($t)), ot.height.set(f(Ht)));
    }
  ), he(
    () => (f(Gr), l(), Q(Oe())),
    () => {
      var X;
      !f(Gr) && l() && ((X = Oe()) == null || X(), J(Gr, !0));
    }
  ), he(
    () => (Q(d()), Q(E()), Q(D()), Q(P()), Q(O()), Q(rt()), Q(q()), Q(T()), Q(S()), Q(ge()), Q(W()), Q(Te()), Q(Xe()), Q(ue()), Q(se()), Q($e()), Q(H()), Q(A()), Q(me()), Q(tn()), Q(nn()), Q(pn()), Q(nt()), Tl),
    () => {
      const X = {
        flowId: d(),
        connectionLineType: E(),
        connectionRadius: D(),
        selectionMode: P(),
        snapGrid: O(),
        defaultMarkerColor: rt(),
        nodesDraggable: q(),
        nodesConnectable: T(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: W(),
        autoPanOnConnect: Te(),
        autoPanOnNodeDrag: Xe(),
        onerror: ue(),
        ondelete: se(),
        onedgecreate: $e(),
        connectionMode: H(),
        nodeDragThreshold: A(),
        onconnect: me(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: pn(),
        nodeOrigin: nt()
      };
      Tl(ot, X);
    }
  ), he(
    () => (Q(w()), Q(k()), Q(b()), Q($()), Q(ie()), Q(qe())),
    () => {
      Vl(ot, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ie(),
        paneClickDistance: qe()
      });
    }
  ), he(
    () => Q(Ie()),
    () => {
      Bf(J(c, d2(Ie())), "$colorModeClass", i);
    }
  ), mt(), ze();
  var Nt = g2();
  let Io;
  var qo = Y(Nt);
  Jc(qo, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return L();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Ro = R(qo, 2);
  const ea = /* @__PURE__ */ xe(() => le() === void 0 ? jn.Free : le()), jd = /* @__PURE__ */ xe(() => ke() === void 0 ? !0 : ke()), Fd = /* @__PURE__ */ xe(() => U() === void 0 ? !0 : U()), Gd = /* @__PURE__ */ xe(() => ae() === void 0 ? !0 : ae()), Ud = /* @__PURE__ */ xe(() => Se() === void 0 ? !0 : Se()), Jd = /* @__PURE__ */ xe(() => ce() === void 0 ? !1 : ce()), Qd = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me()), e1 = /* @__PURE__ */ xe(() => qe() === void 0 ? 0 : qe());
  qc(Ro, {
    initialViewport: mr,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return ee();
    },
    get onMoveEnd() {
      return F();
    },
    get panOnScrollMode() {
      return f(ea);
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
    children: (X, Yw) => {
      const r1 = /* @__PURE__ */ xe(() => Me() === void 0 ? !0 : Me());
      Rc(X, {
        get panOnDrag() {
          return f(r1);
        },
        get selectionOnDrag() {
          return G();
        },
        $$events: {
          paneclick(Ur) {
            Be.call(this, t, Ur);
          },
          panecontextmenu(Ur) {
            Be.call(this, t, Ur);
          }
        },
        children: (Ur, Ww) => {
          var Es = v2(), Ps = we(Es);
          Zc(Ps, {
            children: (i1, Kw) => {
              var Ms = f2(), Hs = we(Ms);
              Fc(Hs, {
                get defaultEdgeOptions() {
                  return it();
                },
                $$events: {
                  edgeclick(Re) {
                    Be.call(this, t, Re);
                  },
                  edgecontextmenu(Re) {
                    Be.call(this, t, Re);
                  },
                  edgemouseenter(Re) {
                    Be.call(this, t, Re);
                  },
                  edgemouseleave(Re) {
                    Be.call(this, t, Re);
                  }
                }
              });
              var Ds = R(Hs, 2);
              Qc(Ds, {
                get containerStyle() {
                  return B();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Re, jw) => {
                    var Ls = Je(), s1 = we(Ls);
                    wt(s1, t, "connectionLine", {}), N(Re, Ls);
                  }
                }
              });
              var Os = R(Ds, 6);
              Xc(Os, {
                get nodeClickDistance() {
                  return Ne();
                },
                $$events: {
                  nodeclick(Re) {
                    Be.call(this, t, Re);
                  },
                  nodemouseenter(Re) {
                    Be.call(this, t, Re);
                  },
                  nodemousemove(Re) {
                    Be.call(this, t, Re);
                  },
                  nodemouseleave(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Be.call(this, t, Re);
                  },
                  nodecontextmenu(Re) {
                    Be.call(this, t, Re);
                  }
                }
              });
              var a1 = R(Os, 2);
              Uc(a1, {
                $$events: {
                  selectionclick(Re) {
                    Be.call(this, t, Re);
                  },
                  selectioncontextmenu(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Be.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Be.call(this, t, Re);
                  }
                }
              }), N(i1, Ms);
            },
            $$slots: { default: !0 }
          });
          var o1 = R(Ps, 2);
          Gc(o1, {}), N(Ur, Es);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = R(Ro, 2);
  ed(Ss, {
    get proOptions() {
      return Ve();
    },
    get position() {
      return Ye();
    }
  });
  var t1 = R(Ss, 2);
  wt(t1, t, "default", {}), Z(Nt), _n(Nt, (X) => J(Fr, X), () => f(Fr)), Ee(
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
        Yt(),
        u()
      ])
    ],
    xe
  ), Ws(Nt, "clientWidth", (X) => J($t, X)), Ws(Nt, "clientHeight", (X) => J(Ht, X)), et("dragover", Nt, function(X) {
    Be.call(this, t, X);
  }), et("drop", Nt, function(X) {
    Be.call(this, t, X);
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
      return V();
    },
    set panActivationKey(X) {
      V(X), m();
    },
    get multiSelectionKey() {
      return L();
    },
    set multiSelectionKey(X) {
      L(X), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(X) {
      z(X), m();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(X) {
      q(X), m();
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
      return O();
    },
    set snapGrid(X) {
      O(X), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(X) {
      _(X), m();
    },
    get connectionRadius() {
      return D();
    },
    set connectionRadius(X) {
      D(X), m();
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
      return K();
    },
    set onMoveStart(X) {
      K(X), m();
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
      return W();
    },
    set isValidConnection(X) {
      W(X), m();
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
      return le();
    },
    set panOnScrollMode(X) {
      le(X), m();
    },
    get preventScrolling() {
      return ke();
    },
    set preventScrolling(X) {
      ke(X), m();
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
      return Se();
    },
    set zoomOnPinch(X) {
      Se(X), m();
    },
    get panOnScroll() {
      return ce();
    },
    set panOnScroll(X) {
      ce(X), m();
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
      return Xe();
    },
    set autoPanOnNodeDrag(X) {
      Xe(X), m();
    },
    get onerror() {
      return ue();
    },
    set onerror(X) {
      ue(X), m();
    },
    get ondelete() {
      return se();
    },
    set ondelete(X) {
      se(X), m();
    },
    get onedgecreate() {
      return $e();
    },
    set onedgecreate(X) {
      $e(X), m();
    },
    get attributionPosition() {
      return Ye();
    },
    set attributionPosition(X) {
      Ye(X), m();
    },
    get proOptions() {
      return Ve();
    },
    set proOptions(X) {
      Ve(X), m();
    },
    get defaultEdgeOptions() {
      return it();
    },
    set defaultEdgeOptions(X) {
      it(X), m();
    },
    get width() {
      return at();
    },
    set width(X) {
      at(X), m();
    },
    get height() {
      return ne();
    },
    set height(X) {
      ne(X), m();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(X) {
      Ie(X), m();
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
      return Oe();
    },
    set oninit(X) {
      Oe(X), m();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(X) {
      nt(X), m();
    },
    get paneClickDistance() {
      return qe();
    },
    set paneClickDistance(X) {
      qe(X), m();
    },
    get nodeClickDistance() {
      return Ne();
    },
    set nodeClickDistance(X) {
      Ne(X), m();
    },
    get defaultMarkerColor() {
      return rt();
    },
    set defaultMarkerColor(X) {
      rt(X), m();
    },
    get style() {
      return rn();
    },
    set style(X) {
      rn(X), m();
    },
    get class() {
      return Yt();
    },
    set class(X) {
      Yt(X), m();
    }
  });
  return a(), n1;
}
de(
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
  Or(ji, { getStore: () => l }), is(() => {
    l.reset();
  }), ze();
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
de(
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
var p2 = /* @__PURE__ */ re("<button><!></button>");
function io(e, t) {
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
  ze();
  var c = p2();
  let d;
  var v = Y(c);
  return wt(v, t, "default", { class: "button-svg" }), Z(c), Ee(
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
  ), et("click", c, function(g) {
    Be.call(this, t, g);
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
de(
  io,
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
var m2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function rd(e) {
  var t = m2();
  N(e, t);
}
de(rd, {}, [], [], !0);
var y2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = y2();
  N(e, t);
}
de(od, {}, [], [], !0);
var w2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = w2();
  N(e, t);
}
de(id, {}, [], [], !0);
var x2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = x2();
  N(e, t);
}
de(ad, {}, [], [], !0);
var b2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = b2();
  N(e, t);
}
de(sd, {}, [], [], !0);
var $2 = /* @__PURE__ */ re("<!> <!>", 1), C2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(E, "$nodesDraggable", n), i = () => te(H, "$nodesConnectable", n), a = () => te(I, "$elementsSelectable", n), s = () => te(O, "$viewport", n), l = () => te(_, "$minZoom", n), u = () => te(D, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe();
  let p = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), M = y(t, "buttonBorderColor", 12, void 0), P = y(t, "ariaLabel", 12, void 0), V = y(t, "style", 12, void 0), L = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), q = y(t, "class", 12, "");
  const {
    zoomIn: T,
    zoomOut: A,
    fitView: S,
    viewport: O,
    minZoom: _,
    maxZoom: D,
    nodesDraggable: E,
    nodesConnectable: H,
    elementsSelectable: I
  } = Ke(), B = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: M()
  }, K = () => {
    T();
  }, ee = () => {
    A();
  }, F = () => {
    S(z());
  }, W = () => {
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
  }), he(() => Q(L()), () => {
    J(g, L() === "horizontal" ? "horizontal" : "vertical");
  }), mt(), ze();
  const ie = /* @__PURE__ */ xe(() => Mt([
    "svelte-flow__controls",
    f(g),
    q()
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
      return V();
    },
    children: (le, ke) => {
      var U = C2(), ae = we(U);
      wt(ae, t, "before", {});
      var Se = R(ae, 2);
      {
        var ce = ($e) => {
          var Ye = $2(), Ve = we(Ye);
          io(Ve, lt(
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
              children: (at, ne) => {
                rd(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var it = R(Ve, 2);
          io(it, lt(
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
              children: (at, ne) => {
                od(at);
              },
              $$slots: { default: !0 }
            }
          )), N($e, Ye);
        };
        ye(Se, ($e) => {
          x() && $e(ce);
        });
      }
      var Me = R(Se, 2);
      {
        var G = ($e) => {
          io($e, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            B,
            {
              $$events: { click: F },
              children: (Ye, Ve) => {
                id(Ye);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Me, ($e) => {
          b() && $e(G);
        });
      }
      var Te = R(Me, 2);
      {
        var Xe = ($e) => {
          io($e, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            B,
            {
              $$events: { click: W },
              children: (Ye, Ve) => {
                var it = Je(), at = we(it);
                {
                  var ne = (me) => {
                    sd(me);
                  }, Ie = (me) => {
                    ad(me);
                  };
                  ye(at, (me) => {
                    f(c) ? me(ne) : me(Ie, !1);
                  });
                }
                N(Ye, it);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Te, ($e) => {
          $() && $e(Xe);
        });
      }
      var ue = R(Te, 2);
      wt(ue, t, "default", {});
      var se = R(ue, 2);
      wt(se, t, "after", {}), N(le, U);
    },
    $$slots: { default: !0 }
  });
  var ge = ve({
    get position() {
      return p();
    },
    set position(le) {
      p(le), m();
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
      return h();
    },
    set buttonBgColor(le) {
      h(le), m();
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
      return M();
    },
    set buttonBorderColor(le) {
      M(le), m();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(le) {
      P(le), m();
    },
    get style() {
      return V();
    },
    set style(le) {
      V(le), m();
    },
    get orientation() {
      return L();
    },
    set orientation(le) {
      L(le), m();
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
  return r(), ge;
}
de(
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
var _2 = /* @__PURE__ */ _e("<circle></circle>");
function ud(e, t) {
  fe(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  ze();
  var o = _2();
  return Ee(
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
de(ud, { radius: {}, class: {} }, [], [], !0);
var k2 = /* @__PURE__ */ _e("<path></path>");
function cd(e, t) {
  fe(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  ze();
  var a = k2();
  return Ee(
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
de(
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
const S2 = {
  [Fn.Dots]: 1,
  [Fn.Lines]: 1,
  [Fn.Cross]: 6
};
var E2 = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const P2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  fe(t, !1), Qe(e, P2);
  const [n, r] = tt(), o = () => te(k, "$flowId", n), i = () => te(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => Fn.Dots), g = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Ke(), M = p() || S2[v()], P = v() === Fn.Dots, V = v() === Fn.Cross, L = Array.isArray(g()) ? g() : [g(), g()];
  he(
    () => (o(), Q(d())),
    () => {
      J(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    J(s, [
      L[0] * i().zoom || 1,
      L[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    J(l, M * i().zoom);
  }), he(() => (f(l), f(s)), () => {
    J(u, V ? [f(l), f(l)] : f(s));
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
  ), mt(), ze();
  var z = E2();
  let q;
  var T = Y(z), A = Y(T);
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
    }, O = (E) => {
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
      P ? E(S) : E(O, !1);
    });
  }
  Z(T);
  var _ = R(T);
  Z(z), Ee(
    (E) => {
      xt(z, 0, E, "svelte-1r7pe8d"), q = ft(z, "", q, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), be(T, "id", f(a)), be(T, "x", i().x % f(s)[0]), be(T, "y", i().y % f(s)[1]), be(T, "width", f(s)[0]), be(T, "height", f(s)[1]), be(T, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), be(_, "fill", `url(#${f(a)})`);
    },
    [
      () => vn(Mt(["svelte-flow__background", C()]))
    ],
    xe
  ), N(e, z);
  var D = ve({
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
  return r(), D;
}
de(
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
var M2 = /* @__PURE__ */ _e("<rect></rect>");
function fd(e, t) {
  fe(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  ze();
  var g = M2();
  let p;
  return Ee(
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
de(
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
  const n = v0({
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
const fa = (e) => e instanceof Function ? e : () => e;
var H2 = /* @__PURE__ */ _e("<title> </title>"), D2 = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(Me, "$flowId", n), i = () => te(ae, "$viewport", n), a = () => te(Se, "$containerWidth", n), s = () => te(ce, "$containerHeight", n), l = () => te(U, "$nodeLookup", n), u = () => te(ke, "$nodes", n), c = () => te(G, "$panZoom", n), d = () => te(Te, "$translateExtent", n), v = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe();
  let L = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), q = y(t, "nodeStrokeColor", 12, "transparent"), T = y(t, "nodeColor", 12, void 0), A = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), O = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), D = y(t, "maskColor", 12, void 0), E = y(t, "maskStrokeColor", 12, void 0), H = y(t, "maskStrokeWidth", 12, void 0), I = y(t, "width", 12, void 0), B = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), ee = y(t, "zoomable", 12, !0), F = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), ie = y(t, "style", 12, ""), pe = y(t, "class", 12, "");
  const ge = 200, le = 150, {
    nodes: ke,
    nodeLookup: U,
    viewport: ae,
    width: Se,
    height: ce,
    flowId: Me,
    panZoom: G,
    translateExtent: Te
  } = Ke(), Xe = T() === void 0 ? void 0 : fa(T()), ue = fa(q()), se = fa(A()), $e = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ye = `svelte-flow__minimap-desc-${o()}`;
  let Ve = /* @__PURE__ */ oe(f(v));
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
      J(Ve, l().size > 0 ? fc(Oo(l()), f(v)) : f(v)), u();
    }
  ), he(() => Q(I()), () => {
    J(g, I() ?? ge);
  }), he(() => Q(B()), () => {
    J(p, B() ?? le);
  }), he(
    () => (f(Ve), f(g)),
    () => {
      J(x, f(Ve).width / f(g));
    }
  ), he(
    () => (f(Ve), f(p)),
    () => {
      J(b, f(Ve).height / f(p));
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
    () => (f(Ve), f(h), f(w)),
    () => {
      J(k, f(Ve).x - (f(h) - f(Ve).width) / 2 - f(w));
    }
  ), he(
    () => (f(Ve), f(C), f(w)),
    () => {
      J(M, f(Ve).y - (f(C) - f(Ve).height) / 2 - f(w));
    }
  ), he(() => (f(h), f(w)), () => {
    J(P, f(h) + f(w) * 2);
  }), he(() => (f(C), f(w)), () => {
    J(V, f(C) + f(w) * 2);
  }), mt(), ze();
  const at = /* @__PURE__ */ xe(() => ie() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), ne = /* @__PURE__ */ xe(() => Mt(["svelte-flow__minimap", pe()]));
  To(e, {
    get position() {
      return L();
    },
    get style() {
      return f(at);
    },
    get class() {
      return f(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (me, tn) => {
      var nn = Je(), pn = we(nn);
      {
        var Oe = (nt) => {
          var qe = D2();
          be(qe, "aria-labelledby", Ye);
          let Ne;
          var rt = Y(qe);
          {
            var rn = ($t) => {
              var Ht = H2();
              be(Ht, "id", Ye);
              var mr = Y(Ht, !0);
              Z(Ht), Ee(() => dt(mr, z())), N($t, Ht);
            };
            ye(rt, ($t) => {
              z() && $t(rn);
            });
          }
          var Yt = R(rt);
          Pt(Yt, 1, u, ($t) => $t.id, ($t, Ht) => {
            var mr = Je();
            const ot = /* @__PURE__ */ xe(() => l().get(f(Ht).id));
            var Qi = we(mr);
            {
              var Gr = (Nt) => {
                const Io = /* @__PURE__ */ xe(() => tr(f(ot))), qo = /* @__PURE__ */ xe(() => Xe == null ? void 0 : Xe(f(ot))), Ro = /* @__PURE__ */ xe(() => ue(f(ot))), ea = /* @__PURE__ */ xe(() => se(f(ot)));
                fd(Nt, lt(
                  {
                    get x() {
                      return f(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => f(Io),
                  {
                    get selected() {
                      return f(ot).selected;
                    },
                    get color() {
                      return f(qo);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return f(Ro);
                    },
                    get strokeWidth() {
                      return O();
                    },
                    shapeRendering: $e,
                    get class() {
                      return f(ea);
                    }
                  }
                ));
              };
              ye(Qi, (Nt) => {
                f(ot) && gc(f(ot)) && Nt(Gr);
              });
            }
            N($t, mr);
          });
          var Fr = R(Yt);
          Z(qe), yt(qe, ($t, Ht) => zl == null ? void 0 : zl($t, Ht), () => ({
            panZoom: c(),
            viewport: ae,
            getViewScale: it,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: F(),
            zoomStep: W(),
            pannable: K(),
            zoomable: ee()
          })), Ee(() => {
            be(qe, "width", f(g)), be(qe, "height", f(p)), be(qe, "viewBox", `${f(k) ?? ""} ${f(M) ?? ""} ${f(P) ?? ""} ${f(V) ?? ""}`), Ne = ft(qe, "", Ne, {
              "--xy-minimap-mask-background-color-props": D(),
              "--xy-minimap-mask-stroke-color-props": E(),
              "--xy-minimap-mask-stroke-width-props": H() ? H() * f($) : void 0
            }), be(Fr, "d", `M${f(k) - f(w)},${f(M) - f(w)}h${f(P) + f(w) * 2}v${f(V) + f(w) * 2}h${-f(P) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), N(nt, qe);
        };
        ye(pn, (nt) => {
          c() && nt(Oe);
        });
      }
      N(me, nn);
    },
    $$slots: { default: !0 }
  });
  var Ie = ve({
    get position() {
      return L();
    },
    set position(me) {
      L(me), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(me) {
      z(me), m();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(me) {
      q(me), m();
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
      return O();
    },
    set nodeStrokeWidth(me) {
      O(me), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(me) {
      _(me), m();
    },
    get maskColor() {
      return D();
    },
    set maskColor(me) {
      D(me), m();
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
      return K();
    },
    set pannable(me) {
      K(me), m();
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
      return W();
    },
    set zoomStep(me) {
      W(me), m();
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
  return r(), Ie;
}
de(
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
const Nl = (e) => Dp(e);
function zt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = Ke(), h = (k) => {
    var M, P;
    const V = j(p), L = Nl(k) ? k : V.get(k.id), z = L.parentId ? Tp(L.position, L.measured, L.parentId, V, j(x)) : L.position, q = {
      ...L,
      position: z,
      width: ((M = L.measured) == null ? void 0 : M.width) ?? L.width,
      height: ((P = L.measured) == null ? void 0 : P.height) ?? L.height
    };
    return Ar(q);
  }, C = (k, M, P = { replace: !1 }) => {
    var V;
    const L = (V = j(p).get(k)) == null ? void 0 : V.internals.userNode;
    if (!L)
      return;
    const z = typeof M == "function" ? M(L) : M;
    P.replace ? d.update((q) => q.map((T) => T.id === k ? Nl(z) ? z : { ...T, ...z } : T)) : (Object.assign(L, z), d.update((q) => q));
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
      const P = j(i), V = j(c);
      return V ? (await V.setViewport({
        x: k.x ?? P.x,
        y: k.y ?? P.y,
        zoom: k.zoom ?? P.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(i),
    setCenter: async (k, M, P) => {
      const V = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : j(u), L = j(c);
      return L ? (await L.setViewport({
        x: j(a) / 2 - k * V,
        y: j(s) / 2 - M * V,
        zoom: V
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, M) => {
      const P = j(c);
      if (!P)
        return Promise.resolve(!1);
      const V = hs(k, j(a), j(s), j(l), j(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await P.setViewport(V, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, M = !0, P) => {
      const V = wl(k), L = V ? k : h(k);
      return L ? (P || j(d)).filter((z) => {
        const q = j(p).get(z.id);
        if (!q || !V && z.id === k.id)
          return !1;
        const T = Ar(q), A = bo(T, L);
        return M && A > 0 || A >= L.width * L.height;
      }) : [];
    },
    isNodeIntersecting: (k, M, P = !0) => {
      const V = wl(k) ? k : h(k);
      if (!V)
        return !1;
      const L = bo(V, M);
      return P && L > 0 || L >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: M = [] }) => {
      const { nodes: P, edges: V } = await uc({
        nodesToRemove: k,
        edgesToRemove: M,
        nodes: j(d),
        edges: j(v),
        onBeforeDelete: j(r)
      });
      return P && d.update((L) => L.filter((z) => !P.some(({ id: q }) => q === z.id))), V && v.update((L) => L.filter((z) => !V.some(({ id: q }) => q === z.id))), {
        deletedNodes: P,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (k, M = { snapToGrid: !0 }) => {
      const P = j(g);
      if (!P)
        return k;
      const V = M.snapToGrid ? j(o) : !1, { x: L, y: z, zoom: q } = j(i), { x: T, y: A } = P.getBoundingClientRect(), S = {
        x: k.x - T,
        y: k.y - A
      };
      return Lo(S, [L, z, q], V !== null, V || [1, 1]);
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
      const { x: P, y: V, zoom: L } = j(i), { x: z, y: q } = M.getBoundingClientRect(), T = vc(k, [P, V, L]);
      return {
        x: T.x + z,
        y: T.y + q
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
      var V;
      const L = (V = j(p).get(k)) == null ? void 0 : V.internals.userNode;
      if (!L)
        return;
      const z = typeof M == "function" ? M(L) : M;
      L.data = P != null && P.replace ? z : { ...L.data, ...z }, d.update((q) => q);
    },
    getNodesBounds: (k) => {
      const M = j(p), P = j(x);
      return Op(k, { nodeLookup: M, nodeOrigin: P });
    },
    getHandleConnections: ({ type: k, id: M, nodeId: P }) => {
      var V;
      return Array.from(((V = j($).get(`${P}-${k}-${M ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var O2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function gd(e, t) {
  fe(t, !1);
  const [n, r] = tt(), o = () => te(C, "$nodes", n), i = () => te(h, "$nodeLookup", n), a = () => te($, "$viewport", n), s = () => te(b, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: h, nodes: C } = Ke(), { getNodesBounds: w } = zt(), k = sr("svelteflow__node_id");
  let M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe([]), V = p() !== void 0 ? p() : 10, L = v() !== void 0 ? v() : He.Top, z = g() !== void 0 ? g() : "center";
  he(
    () => (o(), Q(d()), i()),
    () => {
      o();
      const O = Array.isArray(d()) ? d() : [d() || k];
      J(P, O.reduce(
        (_, D) => {
          const E = i().get(D);
          return E && _.push(E), _;
        },
        []
      ));
    }
  ), he(
    () => (f(P), a()),
    () => {
      const O = w(f(P));
      O && J(M, Gp(O, a(), L, V, z));
    }
  ), he(() => f(P), () => {
    J(l, f(P).length === 0 ? 1 : Math.max(...f(P).map((O) => (O.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    J(u, o().filter((O) => O.selected).length);
  }), he(
    () => (Q(x()), f(P), f(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : f(P).length === 1 && f(P)[0].selected && f(u) === 1);
    }
  ), mt(), ze();
  var q = Je(), T = we(q);
  {
    var A = (O) => {
      var _ = O2();
      let D;
      var E = Y(_);
      wt(E, t, "default", {}), Z(_), yt(_, (H, I) => _i == null ? void 0 : _i(H, I), () => ({ domNode: s() })), Ee(
        (H) => {
          be(_, "data-id", H), D = ft(_, "", D, {
            position: "absolute",
            transform: f(M),
            "z-index": f(l)
          });
        },
        [
          () => f(P).reduce((H, I) => `${H}${I.id} `, "").trim()
        ],
        xe
      ), N(O, _);
    };
    ye(T, (O) => {
      s() && f(c) && f(P) && O(A);
    });
  }
  N(e, q);
  var S = ve({
    get nodeId() {
      return d();
    },
    set nodeId(O) {
      d(O), m();
    },
    get position() {
      return v();
    },
    set position(O) {
      v(O), m();
    },
    get align() {
      return g();
    },
    set align(O) {
      g(O), m();
    },
    get offset() {
      return p();
    },
    set offset(O) {
      p(O), m();
    },
    get isVisible() {
      return x();
    },
    set isVisible(O) {
      x(O), m();
    }
  });
  return r(), S;
}
de(
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
  const { nodes: t, nodeLookup: n } = Ke();
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
    (!o0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Il = "tinyflow-component";
class L2 {
  constructor(t) {
    if (Lt(this, "options"), Lt(this, "rootEl"), Lt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
const V2 = () => {
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
}, ni = V2();
var T2 = /* @__PURE__ */ re("<button><!></button>");
function je(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = T2();
  let i;
  var a = Y(o);
  return lr(a, () => n() ?? vt), Z(o), Ee(() => i = Jt(o, i, {
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
de(je, { children: {} }, [], [], !0);
var z2 = /* @__PURE__ */ re("<input>");
function hd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = z2();
  Cr(r);
  let o;
  Ee(() => o = Jt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ve();
}
de(hd, {}, [], [], !0);
var N2 = /* @__PURE__ */ re("<input>");
function ht(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = N2();
  Cr(r);
  let o;
  Ee(() => o = Jt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ve();
}
de(ht, {}, [], [], !0);
var A2 = /* @__PURE__ */ re("<textarea></textarea>");
function pt(e, t) {
  fe(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = A2();
  kf(o);
  let i;
  return Ee(() => i = Jt(o, i, {
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
de(pt, { value: {} }, [], [], !0);
var I2 = /* @__PURE__ */ re('<div role="button"><!></div>'), q2 = /* @__PURE__ */ re("<div></div>");
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
  ze();
  var l = q2();
  let u;
  return Pt(l, 5, o, Lr, (c, d, v) => {
    var g = I2();
    be(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = Y(g);
    {
      var x = ($) => {
        var h = Ze();
        Ee(() => dt(h, f(d).label)), N($, h);
      }, b = ($) => {
        var h = Je(), C = we(h);
        lr(C, () => f(d).label ?? vt), N($, h);
      };
      ye(p, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    Z(g), Ee(() => xt(g, 1, `tf-tabs-item ${(v === a() ? "active" : "") ?? ""}`)), N(c, g);
  }), Z(l), Ee(() => u = Jt(l, u, {
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
Po(["click", "keydown"]);
de(pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var R2 = (e, t, n) => t(f(n)), Z2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, B2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), X2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), Y2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), W2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), K2 = /* @__PURE__ */ re("<div></div>");
const j2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  fe(t, !0), Qe(e, j2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => sn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = K2();
  return Pt(a, 21, n, Lr, (s, l, u) => {
    var c = W2(), d = Y(c);
    be(d, "tabindex", u), d.__click = [R2, i, l], d.__keydown = [Z2, i, l];
    var v = Y(d);
    {
      var g = (w) => {
        var k = B2(), M = Y(k);
        Yn(M, {
          get target() {
            return f(l).icon;
          }
        }), Z(k), N(w, k);
      };
      ye(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var p = R(v, 2);
    Yn(p, {
      get target() {
        return f(l).title;
      }
    });
    var x = R(p, 2);
    Z(d);
    var b = R(d, 2);
    {
      var $ = (w) => {
        var k = X2(), M = Y(k);
        Yn(M, {
          get target() {
            return f(l).description;
          }
        }), Z(k), N(w, k);
      };
      ye(b, (w) => {
        f(l).description && w($);
      });
    }
    var h = R(b, 2);
    {
      var C = (w) => {
        var k = Y2(), M = Y(k);
        Yn(M, {
          get target() {
            return f(l).content;
          }
        }), Z(k), N(w, k);
      };
      ye(h, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    Z(c), Ee((w) => xt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), N(s, c);
  }), Z(a), Ee(() => {
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
Po(["click", "keydown"]);
de(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  fe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = we(r);
  {
    var i = (s) => {
      var l = Je(), u = we(l);
      lr(u, () => n() ?? vt), N(s, l);
    }, a = (s) => {
      var l = Je(), u = we(l);
      rs(u, n), N(s, l);
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
de(Yn, { target: {} }, [], [], !0);
var F2 = (e, t, n) => t(f(n)), G2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), U2 = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), J2 = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Q2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), em = /* @__PURE__ */ re("<!> <!>", 1), tm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), nm = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), rm = /* @__PURE__ */ re("<div><!></div>");
function Qt(e, t) {
  fe(t, !0);
  const n = (C, w = vt) => {
    var k = Je(), M = we(k);
    Pt(M, 19, w, (P, V) => `${V}_${P.value}`, (P, V) => {
      var L = J2(), z = we(L);
      z.__click = [F2, x, V];
      var q = Y(z), T = Y(q);
      {
        var A = (D) => {
          var E = G2();
          N(D, E);
        };
        ye(T, (D) => {
          f(V).children && f(V).children.length > 0 && D(A);
        });
      }
      Z(q);
      var S = R(q, 2);
      Yn(S, {
        get target() {
          return f(V).label;
        }
      }), Z(z);
      var O = R(z, 2);
      {
        var _ = (D) => {
          var E = U2(), H = Y(E);
          n(H, () => f(V).children), Z(E), N(D, E);
        };
        ye(O, (D) => {
          f(V).children && f(V).children.length > 0 && (l() || c().includes(f(V).value)) && D(_);
        });
      }
      N(P, L);
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
  var b = rm();
  let $;
  var h = Y(b);
  return _n(
    jr(h, {
      floating: (C) => {
        var w = Q2(), k = Y(w);
        n(k, r), Z(w), N(C, w);
      },
      children: (C, w) => {
        var k = nm();
        let M;
        var P = Y(k);
        Pt(
          P,
          23,
          () => f(g),
          (V, L) => `${L}_${V.value}`,
          (V, L, z) => {
            var q = Je(), T = we(q);
            {
              var A = (O) => {
                var _ = Je(), D = we(_);
                {
                  var E = (H) => {
                    Yn(H, {
                      get target() {
                        return f(L).label;
                      }
                    });
                  };
                  ye(D, (H) => {
                    f(z) === 0 && H(E);
                  });
                }
                N(O, _);
              }, S = (O) => {
                var _ = em(), D = we(_);
                Yn(D, {
                  get target() {
                    return f(L).label;
                  }
                });
                var E = R(D, 2);
                {
                  var H = (I) => {
                    var B = Ze(",");
                    N(I, B);
                  };
                  ye(E, (I) => {
                    f(z) < f(g).length - 1 && I(H);
                  });
                }
                N(O, _);
              };
              ye(T, (O) => {
                u() ? O(S, !1) : O(A);
              });
            }
            N(V, q);
          },
          (V) => {
            var L = tm(), z = Y(L, !0);
            Z(L), Ee(() => dt(z, d())), N(V, L);
          }
        ), Z(P), Le(2), Z(k), Ee(() => M = Jt(k, M, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), N(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), Z(b), Ee(() => $ = Jt(b, $, {
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
Po(["click"]);
de(
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
const Co = Math.min, Er = Math.max, Ei = Math.round, wn = (e) => ({
  x: e,
  y: e
}), om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, im = {
  start: "end",
  end: "start"
};
function za(e, t, n) {
  return Er(e, Co(t, n));
}
function zo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
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
function qr(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function $s(e) {
  return yd(qr(e));
}
function am(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = $s(e), i = bs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Pi(a)), [a, Pi(a)];
}
function sm(e) {
  const t = Pi(e);
  return [Na(e), t, Na(t)];
}
function Na(e) {
  return e.replace(/start|end/g, (t) => im[t]);
}
function lm(e, t, n) {
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
function um(e, t, n, r) {
  const o = No(e);
  let i = lm(fr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Na)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => om[t]);
}
function cm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wd(e) {
  return typeof e != "number" ? cm(e) : {
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
function ql(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = qr(t), a = $s(t), s = bs(a), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
const dm = async (e, t, n) => {
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
const fm = (e) => ({
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
    const V = w / 2 - k / 2, L = P / 2 - x[p] / 2 - 1, z = Co(d[$], L), q = Co(d[h], L), T = z, A = P - x[p] - q, S = P / 2 - x[p] / 2 + V, O = za(T, S, A), _ = !l.arrow && No(o) != null && S !== O && i.reference[p] / 2 - (S < T ? z : q) - x[p] / 2 < 0, D = _ ? S < T ? S - T : S - A : 0;
    return {
      [g]: v[g] + D,
      data: {
        [g]: O,
        centerOffset: S - O - D,
        ..._ && {
          alignmentOffset: D
        }
      },
      reset: _
    };
  }
}), vm = function(e) {
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
      const $ = fr(o), h = qr(s), C = fr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !x ? [Pi(s)] : sm(s)), M = p !== "none";
      !v && M && k.push(...um(s, x, p, w));
      const P = [s, ...k], V = await xd(t, b), L = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && L.push(V[$]), d) {
        const S = am(o, a, w);
        L.push(V[S[0]], V[S[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: L
      }], !L.every((S) => S <= 0)) {
        var q, T;
        const S = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, O = P[S];
        if (O)
          return {
            data: {
              index: S,
              overflows: z
            },
            reset: {
              placement: O
            }
          };
        let _ = (T = z.filter((D) => D.overflows[0] <= 0).sort((D, E) => D.overflows[1] - E.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var A;
              const D = (A = z.filter((E) => {
                if (M) {
                  const H = qr(E.placement);
                  return H === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((H) => H > 0).reduce((H, I) => H + I, 0)]).sort((E, H) => E[1] - H[1])[0]) == null ? void 0 : A[0];
              D && (_ = D);
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
async function gm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = No(n), l = qr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = zo(t, e);
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
const hm = function(e) {
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
      } = t, l = await gm(t, e);
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
}, pm = function(e) {
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
      }, c = await xd(t, l), d = qr(fr(o)), v = yd(d);
      let g = u[v], p = u[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + c[b], C = g - c[$];
        g = za(h, g, C);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + c[b], C = p - c[$];
        p = za(h, p, C);
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
function Fi() {
  return typeof window < "u";
}
function Kr(e) {
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
  return Fi() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function dn(e) {
  return Fi() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function kn(e) {
  return Fi() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function Rl(e) {
  return !Fi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
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
function mm(e) {
  return ["table", "td", "th"].includes(Kr(e));
}
function Gi(e) {
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
function ym(e) {
  let t = Jn(e);
  for (; kn(t) && !Rr(t); ) {
    if (Cs(t))
      return t;
    if (Gi(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function _s() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rr(e) {
  return ["html", "body", "#document"].includes(Kr(e));
}
function fn(e) {
  return Bt(e).getComputedStyle(e);
}
function Ui(e) {
  return dn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Kr(e) === "html")
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
  const t = Jn(e);
  return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Ao(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(o);
  return i ? (Aa(a), t.concat(a, a.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Aa(e) {
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
const wm = /* @__PURE__ */ wn(0);
function Sd(e) {
  const t = Bt(e);
  return !_s() || !t.visualViewport ? wm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function _o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = kd(e);
  let a = wn(1);
  t && (r ? dn(r) && (a = Pr(r)) : a = Pr(e));
  const s = xm(i, n, r) ? Sd(i) : wn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = Bt(i), g = r && dn(r) ? Bt(r) : r;
    let p = v, x = Aa(p);
    for (; x && r && g !== p; ) {
      const b = Pr(x), $ = x.getBoundingClientRect(), h = fn(x), C = $.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += w, p = Bt(x), x = Aa(p);
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
  const n = Ui(e).scrollLeft;
  return t ? t.left + n : _o(In(e)).left + n;
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
function bm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = In(r), s = t ? Gi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((Kr(r) !== "body" || Ao(a)) && (l = Ui(r)), kn(r))) {
    const g = _o(r);
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
function $m(e) {
  return Array.from(e.getClientRects());
}
function Cm(e) {
  const t = In(e), n = Ui(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ks(e);
  const s = -n.scrollTop;
  return fn(r).direction === "rtl" && (a += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function _m(e, t) {
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
function km(e, t) {
  const n = _o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Pr(e) : wn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Zl(e, t, n) {
  let r;
  if (t === "viewport")
    r = _m(e, n);
  else if (t === "document")
    r = Cm(In(e));
  else if (dn(t))
    r = km(t, n);
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
  return n === t || !dn(n) || Rr(n) ? !1 : fn(n).position === "fixed" || Pd(n, t);
}
function Sm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((s) => dn(s) && Kr(s) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; dn(a) && !Rr(a); ) {
    const s = fn(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Ao(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function Em(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Gi(t) ? [] : Sm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Zl(t, u, o);
    return l.top = Er(c.top, l.top), l.right = Co(c.right, l.right), l.bottom = Co(c.bottom, l.bottom), l.left = Er(c.left, l.left), l;
  }, Zl(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Pm(e) {
  const {
    width: t,
    height: n
  } = _d(e);
  return {
    width: t,
    height: n
  };
}
function Mm(e, t, n) {
  const r = kn(t), o = In(t), i = n === "fixed", a = _o(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  if (r || !r && !i)
    if ((Kr(t) !== "body" || Ao(o)) && (s = Ui(t)), r) {
      const v = _o(t, !0, i, t);
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
function va(e) {
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
  if (Gi(e))
    return n;
  if (!kn(e)) {
    let o = Jn(e);
    for (; o && !Rr(o); ) {
      if (dn(o) && !va(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Bl(e, t);
  for (; r && mm(r) && va(r); )
    r = Bl(r, t);
  return r && Rr(r) && va(r) && !Cs(r) ? n : r || ym(e) || n;
}
const Hm = async function(e) {
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Mm(e.reference, await t(e.floating), e.strategy),
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
const Om = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bm,
  getDocumentElement: In,
  getClippingRect: Em,
  getOffsetParent: Md,
  getElementRects: Hm,
  getClientRects: $m,
  getDimensions: Pm,
  getScale: Pr,
  isElement: dn,
  isRTL: Dm
}, Lm = hm, Vm = pm, Tm = vm, zm = fm, Nm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Om,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return dm(e, t, {
    ...o,
    platform: i
  });
}, Am = ({
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
    Nm(e, u, {
      placement: r,
      middleware: [
        Lm(o),
        // 手动偏移配置
        Tm(i),
        //自动翻转
        Vm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [zm({ element: c })] : []
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
var Im = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function jr(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  en(() => (s = Am({
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
  var u = Im(), c = Y(u), d = Y(c);
  lr(d, n), Z(c), _n(c, (p) => i = p, () => i);
  var v = R(c, 2), g = Y(v);
  return lr(g, r), Z(v), _n(v, (p) => a = p, () => a), Z(u), N(e, u), ve({
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
de(jr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ue(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = Je(), s = we(a);
  return Vf(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = Jt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Je(), v = we(d);
    lr(v, () => n() ?? vt), N(u, d);
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
de(Ue, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var qm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Rm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ji(e, t) {
  fe(t, !0), Qe(e, Rm);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = qm();
      N(r, i);
    },
    $$slots: { default: !0 }
  })), ve();
}
de(Ji, {}, [], [], !0);
const Zm = () => {
  const e = Ke();
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
}, Bm = () => {
  const { nodes: e, nodeLookup: t } = Ke();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = j(t).get(n)) == null ? void 0 : r.internals.userNode;
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
}, Qn = () => sr("tinyflow_options");
function gt() {
  return sr("svelteflow__node_id");
}
var Xm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Ym = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Wm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Km = /* @__PURE__ */ re('<div class="input-item svelte-qsphey">执行条件： <!></div>'), jm = /* @__PURE__ */ re('<div class="settings svelte-qsphey"><div class="input-item svelte-qsphey">节点名称： <!></div> <div class="input-item svelte-qsphey">参数描述： <!></div> <!></div>'), Fm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Gm = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-qsphey"><!> <!> <!> <!></div>'), Um = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Jm = {
  hash: "svelte-qsphey",
  code: ".tf-node-toolbar.svelte-qsphey {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-qsphey {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-qsphey .input-item:where(.svelte-qsphey) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function hn(e, t) {
  fe(t, !0), Qe(e, Jm);
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
  ]), { deleteNode: C } = Zm(), { copyNode: w } = Bm(), k = Qn(), M = () => {
    var H;
    (H = k.onNodeExecute) == null || H.call(k, $(r()));
  };
  let P = gt();
  var V = Um(), L = we(V);
  {
    var z = (H) => {
      gd(H, {
        get position() {
          return He.Top;
        },
        align: "end",
        children: (I, B) => {
          var K = Gm(), ee = Y(K);
          {
            var F = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ae, Se) => {
                  var ce = Xm();
                  N(ae, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ye(ee, (U) => {
              u() && U(F);
            });
          }
          var W = R(ee, 2);
          {
            var ie = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (ae, Se) => {
                  var ce = Ym();
                  N(ae, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ye(W, (U) => {
              l() && U(ie);
            });
          }
          var pe = R(W, 2);
          {
            var ge = (U) => {
              je(U, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ae, Se) => {
                  var ce = Wm();
                  N(ae, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ye(pe, (U) => {
              s() && U(ge);
            });
          }
          var le = R(pe, 2);
          {
            var ke = (U) => {
              jr(U, {
                placement: "bottom",
                floating: (ae) => {
                  var Se = jm(), ce = Y(Se), Me = R(Y(ce));
                  ht(Me, {
                    style: "width: 100%;",
                    onchange: (se) => {
                      const $e = se.target.value;
                      b(P, { title: $e });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ce);
                  var G = R(ce, 2), Te = R(Y(G));
                  pt(Te, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (se) => {
                      const $e = se.target.value;
                      b(P, { description: $e });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(G);
                  var Xe = R(G, 2);
                  {
                    var ue = (se) => {
                      var $e = Km(), Ye = R(Y($e));
                      pt(Ye, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ve) => {
                          const it = Ve.target.value;
                          b(P, { condition: it });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z($e), N(se, $e);
                    };
                    ye(Xe, (se) => {
                      d() && se(ue);
                    });
                  }
                  Z(Se), N(ae, Se);
                },
                children: (ae, Se) => {
                  je(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ce, Me) => {
                      var G = Fm();
                      N(ce, G);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ye(le, (U) => {
              c() && U(ke);
            });
          }
          Z(K), N(I, K);
        },
        $$slots: { default: !0 }
      });
    };
    ye(L, (H) => {
      (s() || l() || u()) && H(z);
    });
  }
  var q = R(L, 2), T = R(Y(q), 2), A = Y(T);
  md(A, {
    get items() {
      return f(h);
    },
    activeKeys: x,
    onChange: (H, I) => {
      var B;
      b(r(), { expand: I == null ? void 0 : I.includes("key") }), (B = p()) == null || B(I != null && I.includes("key") ? "key" : "");
    }
  }), Z(T), Z(q);
  var S = R(q, 2);
  {
    var O = (H) => {
      Un(H, {
        type: "target",
        get position() {
          return He.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(S, (H) => {
      g() && H(O);
    });
  }
  var _ = R(S, 2);
  {
    var D = (H) => {
      Un(H, {
        type: "source",
        get position() {
          return He.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(_, (H) => {
      v() && H(D);
    });
  }
  var E = R(_, 2);
  return lr(E, () => i() ?? vt), N(e, V), ve({
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
de(
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
], Qm = [
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
var ey = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ny = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ry = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  fe(t, !0), Qe(e, ry);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var L, z;
    return {
      ...i(),
      ...(z = (L = o()) == null ? void 0 : L.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = zt(), d = (L, z) => {
    c(s, (q) => {
      let T = q.data.parameters;
      return T[a()][L] = z, { parameters: T };
    });
  }, v = (L) => {
    const z = L.target.value;
    d("name", z);
  }, g = (L) => {
    const z = L.target.checked;
    d("required", z);
  }, p = (L) => {
    const z = L.value;
    z && d("dataType", z);
  };
  let x;
  const b = () => {
    c(s, (L) => {
      let z = L.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), x == null || x.hide();
  };
  var $ = ny(), h = we($), C = Y(h);
  ht(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(h);
  var w = R(h, 2), k = Y(w);
  hd(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), Z(w);
  var M = R(w, 2), P = Y(M);
  _n(
    jr(P, {
      placement: "bottom",
      floating: (L) => {
        var z = ey(), q = Y(z), T = R(Y(q));
        const A = /* @__PURE__ */ Pe(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        Qt(T, {
          items: Hd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(A);
          }
        }), Z(q);
        var S = R(q, 2), O = R(Y(S));
        pt(O, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (I) => {
            const B = I.target.value;
            d("defaultValue", B);
          }
        }), Z(S);
        var _ = R(S, 2), D = R(Y(_));
        pt(D, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (I) => {
            const B = I.target.value;
            d("description", B);
          }
        }), Z(_);
        var E = R(_, 2), H = Y(E);
        je(H, {
          onclick: b,
          children: (I, B) => {
            Le();
            var K = Ze("删除");
            N(I, K);
          },
          $$slots: { default: !0 }
        }), Z(E), Z(z), N(L, z);
      },
      children: (L, z) => {
        je(L, {
          class: "input-btn-more",
          children: (q, T) => {
            var A = ty();
            N(q, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => x = L,
    () => x
  ), Z(M), N(e, $);
  var V = ve({
    get parameter() {
      return i();
    },
    set parameter(L) {
      i(L), m();
    },
    get index() {
      return a();
    },
    set index(L) {
      a(L), m();
    }
  });
  return r(), V;
}
de(Dd, { parameter: {}, index: {} }, [], [], !0);
var oy = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), iy = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), ay = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const sy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Od(e, t) {
  fe(t, !0), Qe(e, sy);
  const [n, r] = tt(), o = () => te(f(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Pe(() => pr(i)), s = /* @__PURE__ */ Pe(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = ay(), u = Y(l);
  {
    var c = (v) => {
      var g = oy();
      Le(4), N(v, g);
    };
    ye(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = R(u, 2);
  Pt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, p) => {
      Dd(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(p);
        }
      });
    },
    (v) => {
      var g = iy();
      N(v, g);
    }
  ), Z(l), N(e, l), ve(), r();
}
de(Od, {}, [], [], !0);
const Hi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Zr()), Hi(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = zt();
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
var ly = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cy = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const dy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ld(e, t) {
  fe(t, !0), Qe(e, dy);
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
      var s = ly();
      N(a, s);
    },
    children: (a, s) => {
      var l = cy(), u = we(l), c = Y(u);
      Ue(c, {
        level: 3,
        children: (g, p) => {
          Le();
          var x = Ze("输入参数");
          N(g, x);
        },
        $$slots: { default: !0 }
      });
      var d = R(c, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, p) => {
          var x = uy();
          N(g, x);
        },
        $$slots: { default: !0 }
      }), Z(u);
      var v = R(u, 2);
      Od(v, {}), N(a, l);
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
de(Ld, { data: {} }, [], [], !0);
const Vd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Vd(e, r.source, n));
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
}, fy = (e = !1) => {
  const t = gt(), n = pr(t), { nodes: r, edges: o } = Ke();
  return Kn([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = Xl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Vd(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Xl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var vy = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), gy = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const hy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Td(e, t) {
  fe(t, !0), Qe(e, hy);
  const [n, r] = tt(), o = () => te(f(c), "$node", n), i = () => te(C, "$selectItems", n);
  en(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var O;
    return {
      ...a(),
      ...(O = o()) == null ? void 0 : O.data[l()][s()]
    };
  });
  const { updateNodeData: v } = zt(), g = (O, _) => {
    v(u, (D) => {
      let E = D.data[l()];
      return E[s()] = { ...E[s()], [O]: _ }, { [l()]: E };
    });
  }, p = (O, _) => {
    const D = _.target.value;
    g(O, D);
  }, x = (O) => {
    const _ = O.value;
    g("ref", _);
  }, b = (O) => {
    const _ = O.value;
    g("refType", _);
  };
  let $;
  const h = () => {
    v(u, (O) => {
      let _ = O.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), $ == null || $.hide();
  }, C = fy();
  var w = gy(), k = we(w), M = Y(k);
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
    oninput: (O) => p("name", O)
  }), Z(k);
  var V = R(k, 2), L = Y(V);
  {
    var z = (O) => {
      ht(O, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, q = (O, _) => {
      {
        var D = (E) => {
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
          O,
          (E) => {
            f(d).refType !== "input" && E(D);
          },
          _
        );
      }
    };
    ye(L, (O) => {
      f(d).refType === "fixed" ? O(z) : O(q, !1);
    });
  }
  Z(V);
  var T = R(V, 2), A = Y(T);
  _n(
    jr(A, {
      placement: "bottom",
      floating: (O) => {
        var _ = vy(), D = Y(_), E = R(Y(D));
        const H = /* @__PURE__ */ Pe(() => f(d).refType ? [f(d).refType] : []);
        Qt(E, {
          items: Qm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(H);
          },
          onSelect: b
        }), Z(D);
        var I = R(D, 2), B = R(Y(I));
        pt(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ie) => {
            p("defaultValue", ie);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), Z(I);
        var K = R(I, 2), ee = R(Y(K));
        pt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ie) => {
            p("description", ie);
          },
          get value() {
            return f(d).description;
          }
        }), Z(K);
        var F = R(K, 2), W = Y(F);
        je(W, {
          onclick: h,
          children: (ie, pe) => {
            Le();
            var ge = Ze("删除");
            N(ie, ge);
          },
          $$slots: { default: !0 }
        }), Z(F), Z(_), N(O, _);
      },
      children: (O, _) => {
        Ji(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => $ = O,
    () => $
  ), Z(T), N(e, w);
  var S = ve({
    get parameter() {
      return a();
    },
    set parameter(O) {
      a(O), m();
    },
    get index() {
      return s();
    },
    set index(O) {
      s(O), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(O) {
      l(O), m();
    }
  });
  return r(), S;
}
de(Td, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var py = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), my = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), yy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const wy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rt(e, t) {
  fe(t, !0), Qe(e, wy);
  const [n, r] = tt(), o = () => te(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var c = yy(), d = Y(c);
  {
    var v = (x) => {
      var b = py();
      Le(4), N(x, b);
    };
    ye(d, (x) => {
      f(u).length !== 0 && x(v);
    });
  }
  var g = R(d, 2);
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
      var b = my(), $ = Y(b, !0);
      Z(b), Ee(() => dt($, i())), N(x, b);
    }
  ), Z(c), N(e, c);
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
de(Rt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var xy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), by = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  fe(t, !0), Qe(e, Cy);
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
        var s = xy();
        N(a, s);
      },
      children: (a, s) => {
        var l = $y(), u = we(l), c = Y(u);
        Ue(c, {
          level: 3,
          children: (g, p) => {
            Le();
            var x = Ze("输出参数");
            N(g, x);
          },
          $$slots: { default: !0 }
        });
        var d = R(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, p) => {
            var x = by();
            N(g, x);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = R(u, 2);
        Rt(v, {
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
de(zd, { data: {} }, [], [], !0);
var _y = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ky = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), Sy = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ey = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Py = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  fe(t, !0), Qe(e, Py);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var D;
    let E = (D = o()) == null ? void 0 : D.data[s()], H;
    if (E && a().length > 0) {
      let I = E;
      for (let B = 0; B < a().length; B++) {
        const K = a()[B];
        B == a().length - 1 ? H = I[K] : I = I[K].children;
      }
    }
    return { ...i(), ...H };
  });
  const { updateNodeData: d } = zt(), v = (D, E) => {
    d(l, (H) => {
      const I = H.data[s()];
      if (I && a().length > 0) {
        let B = I;
        for (let K = 0; K < a().length; K++) {
          const ee = a()[K];
          K == a().length - 1 ? B[ee] = { ...B[ee], [D]: E } : B = I[ee].children;
        }
      }
      return { [s()]: I };
    });
  }, g = (D) => {
    const E = D.target.value;
    v("name", E);
  }, p = (D) => {
    const E = D.value;
    v("dataType", E);
  };
  let x;
  const b = () => {
    d(l, (D) => {
      let E = D.data[s()];
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
    d(l, (D) => {
      let E = D.data[s()];
      if (E && a().length > 0) {
        let H = E;
        for (let I = 0; I < a().length; I++) {
          const B = a()[I];
          I == a().length - 1 ? H[B].children ? H[B].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : H[B].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[B].children;
        }
      }
      return { [s()]: [...E] };
    });
  };
  var h = Ey(), C = we(h), w = Y(C);
  {
    var k = (D) => {
      var E = Je(), H = we(E);
      Pt(H, 17, a, Lr, (I, B) => {
        Le();
        var K = Ze(" ");
        N(I, K);
      }), N(D, E);
    };
    ye(w, (D) => {
      a().length > 1 && D(k);
    });
  }
  var M = R(w, 2);
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
  }), Z(C);
  var V = R(C, 2), L = Y(V);
  const z = /* @__PURE__ */ Pe(() => f(c).dataType ? [f(c).dataType] : []), q = /* @__PURE__ */ Pe(() => f(c).dataTypeDisabled === !0);
  Qt(L, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(z);
    },
    get disabled() {
      return f(q);
    },
    onSelect: p
  });
  var T = R(L, 2);
  {
    var A = (D) => {
      je(D, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (E, H) => {
          var I = _y();
          N(E, I);
        },
        $$slots: { default: !0 }
      });
    };
    ye(T, (D) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && D(A);
    });
  }
  Z(V);
  var S = R(V, 2), O = Y(S);
  _n(
    jr(O, {
      placement: "bottom",
      floating: (D) => {
        var E = Sy(), H = Y(E), I = R(Y(H));
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
        }), Z(H);
        var K = R(H, 2), ee = R(Y(K));
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
        }), Z(K);
        var W = R(K, 2);
        {
          var ie = (pe) => {
            var ge = ky(), le = Y(ge);
            je(le, {
              onclick: b,
              children: (ke, U) => {
                Le();
                var ae = Ze("删除");
                N(ke, ae);
              },
              $$slots: { default: !0 }
            }), Z(ge), N(pe, ge);
          };
          ye(W, (pe) => {
            f(c).deleteDisabled !== !0 && pe(ie);
          });
        }
        Z(E), N(D, E);
      },
      children: (D, E) => {
        Ji(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => x = D,
    () => x
  ), Z(S), N(e, h);
  var _ = ve({
    get parameter() {
      return i();
    },
    set parameter(D) {
      i(D), m();
    },
    get position() {
      return a();
    },
    set position(D) {
      a(D), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(D) {
      s(D), m();
    }
  });
  return r(), _;
}
de(Nd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ re("<!> <!>", 1), Hy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Dy = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Oy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ly = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function qn(e, t) {
  fe(t, !0), Qe(e, Ly);
  const [n, r] = tt(), o = () => te(f(u), "$node", n), i = (b, $ = vt, h = vt) => {
    var C = Je(), w = we(C);
    Pt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, M, P) => {
        var V = My(), L = we(V);
        const z = /* @__PURE__ */ Pe(() => [...h(), f(P)]);
        Nd(L, {
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
        var q = R(L, 2);
        {
          var T = (A) => {
            var S = /* @__PURE__ */ xe(() => [...h(), f(P)]);
            i(A, () => f(M).children, () => f(S));
          };
          ye(q, (A) => {
            f(M).children && A(T);
          });
        }
        N(k, V);
      },
      (k) => {
        var M = Je(), P = we(M);
        {
          var V = (L) => {
            var z = Hy(), q = Y(z, !0);
            Z(z), Ee(() => dt(q, a())), N(L, z);
          };
          ye(P, (L) => {
            h().length === 0 && L(V);
          });
        }
        N(k, M);
      }
    ), N(b, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Oy(), v = Y(d);
  {
    var g = (b) => {
      var $ = Dy();
      Le(4), N(b, $);
    };
    ye(v, (b) => {
      f(c).length !== 0 && b(g);
    });
  }
  var p = R(v, 2);
  i(p, () => f(c) || [], () => []), Z(d), N(e, d);
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
de(qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Vy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ny = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ay = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Iy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ry = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  fe(t, !0), Qe(e, Ry);
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
        var d = Vy();
        N(c, d);
      },
      children: (c, d) => {
        var v = qy(), g = we(v), p = Y(g);
        Ue(p, {
          level: 3,
          children: (ce, Me) => {
            Le();
            var G = Ze("输入参数");
            N(ce, G);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ce, Me) => {
            var G = Ty();
            N(ce, G);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = R(g, 2);
        Rt(b, {});
        var $ = R(b, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (ce, Me) => {
            Le();
            var G = Ze("模型设置");
            N(ce, G);
          },
          $$slots: { default: !0 }
        });
        var h = R($, 4), C = Y(h);
        const w = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        Qt(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ce) => {
            const Me = ce.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return f(w);
          }
        });
        var k = R(C, 2);
        Ji(k, {}), Z(h);
        var M = R(h, 4), P = Y(M), V = Y(P), L = Y(V);
        Z(V);
        var z = R(V, 2);
        Cr(z), z.__input = [zy, l, o], Z(P), Z(M);
        var q = R(M, 2), T = Y(q), A = Y(T), S = Y(A);
        Z(A);
        var O = R(A, 2);
        Cr(O), O.__input = [Ny, l, o], Z(T), Z(q);
        var _ = R(q, 2), D = Y(_), E = Y(D), H = Y(E);
        Z(E);
        var I = R(E, 2);
        Cr(I), I.__input = [Ay, l, o], Z(D), Z(_);
        var B = R(_, 4), K = Y(B);
        const ee = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        pt(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(ee);
          },
          oninput: (ce) => {
            l(o, { systemPrompt: ce.target.value });
          }
        }), Z(B);
        var F = R(B, 4), W = Y(F);
        const ie = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        pt(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ie);
          },
          oninput: (ce) => {
            l(o, { userPrompt: ce.target.value });
          }
        }), Z(F);
        var pe = R(F, 2), ge = Y(pe);
        Ue(ge, {
          level: 3,
          mt: "10px",
          children: (ce, Me) => {
            Le();
            var G = Ze("输出参数");
            N(ce, G);
          },
          $$slots: { default: !0 }
        });
        var le = R(ge, 2);
        const ke = /* @__PURE__ */ Pe(() => n().outType ? [n().outType] : []);
        Qt(le, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ce) => {
            u(ce.value);
          },
          get value() {
            return f(ke);
          }
        });
        var U = R(le, 2);
        {
          var ae = (ce) => {
            je(ce, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Me, G) => {
                var Te = Iy();
                N(Me, Te);
              },
              $$slots: { default: !0 }
            });
          };
          ye(U, (ce) => {
            n().outType === "json" && ce(ae);
          });
        }
        Z(pe);
        var Se = R(pe, 2);
        qn(Se, {}), Ee(() => {
          dt(L, `Temperature: ${n().temperature ?? 0.5}`), ra(z, n().temperature ?? 0.5), dt(S, `Top P: ${n().topP ?? 0.9}`), ra(O, n().topP ?? 0.9), dt(H, `Top K: ${n().topK ?? 50}`), ra(I, n().topK ?? 50);
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
Po(["input"]);
de(Ad, { data: {} }, [], [], !0);
var Zy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), By = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Id(e, t) {
  fe(t, !0), Qe(e, Wy);
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
        var u = Zy();
        N(l, u);
      },
      children: (l, u) => {
        var c = Yy(), d = we(c), v = Y(d);
        Ue(v, {
          level: 3,
          children: (z, q) => {
            Le();
            var T = Ze("输入参数");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var g = R(v, 2);
        je(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, q) => {
            var T = By();
            N(z, T);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = R(d, 2);
        Rt(p, {});
        var x = R(p, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Le();
            var T = Ze("代码");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 4), $ = Y(b);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Qt($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const q = z.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return f(h);
          }
        }), Z(b);
        var C = R(b, 4), w = Y(C);
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
        }), Z(C);
        var M = R(C, 2), P = Y(M);
        Ue(P, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Le();
            var T = Ze("输出参数");
            N(z, T);
          },
          $$slots: { default: !0 }
        });
        var V = R(P, 2);
        je(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, q) => {
            var T = Xy();
            N(z, T);
          },
          $$slots: { default: !0 }
        }), Z(M);
        var L = R(M, 2);
        qn(L, {}), N(l, c);
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
de(Id, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Gy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  fe(t, !0), Qe(e, Gy);
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
        var l = Ky();
        N(s, l);
      },
      children: (s, l) => {
        var u = Fy(), c = we(u), d = Y(c);
        Ue(d, {
          level: 3,
          children: (k, M) => {
            Le();
            var P = Ze("输入参数");
            N(k, P);
          },
          $$slots: { default: !0 }
        });
        var v = R(d, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, M) => {
            var P = jy();
            N(k, P);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        Rt(g, {});
        var p = R(g, 2);
        Ue(p, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            Le();
            var P = Ze("代码");
            N(k, P);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 4), b = Y(x);
        const $ = /* @__PURE__ */ Pe(() => n().template || "");
        pt(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), Z(x);
        var h = R(x, 2), C = Y(h);
        Ue(C, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            Le();
            var P = Ze("输出参数");
            N(k, P);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var w = R(h, 2);
        qn(w, {}), N(s, u);
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
de(qd, { data: {} }, [], [], !0);
var Uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), nw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ re('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ow = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), iw = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), aw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const lw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Rd(e, t) {
  fe(t, !0), Qe(e, lw);
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
        var u = Uy();
        N(l, u);
      },
      children: (l, u) => {
        var c = sw(), d = we(c), v = Y(d), g = Y(v);
        const p = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        Qt(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ue) => {
            const se = ue.value;
            s(i, () => ({ method: se }));
          },
          get value() {
            return f(p);
          }
        }), Z(v);
        var x = R(v, 2), b = Y(x);
        const $ = /* @__PURE__ */ Pe(() => n().url || "");
        ht(b, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ue) => {
            s(i, () => ({ url: ue.target.value }));
          },
          get value() {
            return f($);
          }
        }), Z(x), Z(d);
        var h = R(d, 2), C = Y(h);
        Ue(C, {
          level: 3,
          children: (ue, se) => {
            Le();
            var $e = Ze("Http 头信息");
            N(ue, $e);
          },
          $$slots: { default: !0 }
        });
        var w = R(C, 2);
        je(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ue, se) => {
            var $e = Jy();
            N(ue, $e);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var k = R(h, 2);
        Rt(k, { dataKeyName: "headers" });
        var M = R(k, 2), P = Y(M);
        Ue(P, {
          level: 3,
          children: (ue, se) => {
            Le();
            var $e = Ze("参数");
            N(ue, $e);
          },
          $$slots: { default: !0 }
        });
        var V = R(P, 2);
        je(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (ue, se) => {
            var $e = Qy();
            N(ue, $e);
          },
          $$slots: { default: !0 }
        }), Z(M);
        var L = R(M, 2);
        Rt(L, { dataKeyName: "urlParameters" });
        var z = R(L, 2);
        Ue(z, {
          level: 3,
          mt: "10px",
          children: (ue, se) => {
            Le();
            var $e = Ze("Body");
            N(ue, $e);
          },
          $$slots: { default: !0 }
        });
        var q = R(z, 2), T = Y(q), A = Y(T);
        const S = /* @__PURE__ */ Pe(() => !n().bodyType);
        ht(A, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(S);
          },
          onchange: (ue) => {
            var se;
            (se = ue.target) != null && se.checked && s(i, { bodyType: "" });
          }
        }), Le(), Z(T);
        var O = R(T, 2), _ = Y(O);
        const D = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        ht(_, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(D);
          },
          onchange: (ue) => {
            var se;
            (se = ue.target) != null && se.checked && s(i, { bodyType: "form-data" });
          }
        }), Le(), Z(O);
        var E = R(O, 2), H = Y(E);
        const I = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        ht(H, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(I);
          },
          onchange: (ue) => {
            var se;
            (se = ue.target) != null && se.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Le(), Z(E);
        var B = R(E, 2), K = Y(B);
        const ee = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        ht(K, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(ee);
          },
          onchange: (ue) => {
            var se;
            (se = ue.target) != null && se.checked && s(i, { bodyType: "json" });
          }
        }), Le(), Z(B);
        var F = R(B, 2), W = Y(F);
        const ie = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        ht(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ie);
          },
          onchange: (ue) => {
            var se;
            (se = ue.target) != null && se.checked && s(i, { bodyType: "raw" });
          }
        }), Le(), Z(F), Z(q);
        var pe = R(q, 2);
        {
          var ge = (ue) => {
            var se = tw(), $e = we(se), Ye = Y($e);
            Ue(Ye, {
              level: 3,
              children: (at, ne) => {
                Le();
                var Ie = Ze("参数");
                N(at, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ve = R(Ye, 2);
            je(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (at, ne) => {
                var Ie = ew();
                N(at, Ie);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var it = R($e, 2);
            Rt(it, { dataKeyName: "fromData" }), N(ue, se);
          };
          ye(pe, (ue) => {
            n().bodyType === "form-data" && ue(ge);
          });
        }
        var le = R(pe, 2);
        {
          var ke = (ue) => {
            var se = rw(), $e = we(se), Ye = Y($e);
            Ue(Ye, {
              level: 3,
              children: (at, ne) => {
                Le();
                var Ie = Ze("参数");
                N(at, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ve = R(Ye, 2);
            je(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (at, ne) => {
                var Ie = nw();
                N(at, Ie);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var it = R($e, 2);
            Rt(it, { dataKeyName: "fromUrlencoded" }), N(ue, se);
          };
          ye(le, (ue) => {
            n().bodyType === "x-www-form-urlencoded" && ue(ke);
          });
        }
        var U = R(le, 2);
        {
          var ae = (ue) => {
            var se = ow(), $e = Y(se);
            pt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ye) => {
                s(i, { bodyJson: Ye.target.value });
              }
            }), Z(se), N(ue, se);
          };
          ye(U, (ue) => {
            n().bodyType === "json" && ue(ae);
          });
        }
        var Se = R(U, 2);
        {
          var ce = (ue) => {
            var se = iw(), $e = Y(se);
            pt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ye) => {
                s(i, { bodyRaw: Ye.target.value });
              }
            }), Z(se), N(ue, se);
          };
          ye(Se, (ue) => {
            n().bodyType === "raw" && ue(ce);
          });
        }
        var Me = R(Se, 2), G = Y(Me);
        Ue(G, {
          level: 3,
          mt: "10px",
          children: (ue, se) => {
            Le();
            var $e = Ze("输出参数");
            N(ue, $e);
          },
          $$slots: { default: !0 }
        });
        var Te = R(G, 2);
        je(Te, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ue, se) => {
            var $e = aw();
            N(ue, $e);
          },
          $$slots: { default: !0 }
        }), Z(Me);
        var Xe = R(Me, 2);
        qn(Xe, {}), N(l, c);
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
de(Rd, { data: {} }, [], [], !0);
var uw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), cw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const fw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  fe(t, !0), Qe(e, fw);
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
        var c = uw();
        N(u, c);
      },
      children: (u, c) => {
        var d = dw(), v = we(d), g = Y(v);
        Ue(g, {
          level: 3,
          children: (T, A) => {
            Le();
            var S = Ze("输入参数");
            N(T, S);
          },
          $$slots: { default: !0 }
        });
        var p = R(g, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, A) => {
            var S = cw();
            N(T, S);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = R(v, 2);
        Rt(x, {});
        var b = R(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Le();
            var S = Ze("知识库设置");
            N(T, S);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), h = Y($);
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
        }), Z($);
        var w = R($, 4), k = Y(w);
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
        }), Z(w);
        var M = R(w, 4), P = Y(M);
        const V = /* @__PURE__ */ Pe(() => n().limit || "");
        ht(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (T) => {
            const A = T.target.value;
            l(o, () => ({ limit: A }));
          },
          get value() {
            return f(V);
          }
        }), Z(M);
        var L = R(M, 2), z = Y(L);
        Ue(z, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Le();
            var S = Ze("输出参数");
            N(T, S);
          },
          $$slots: { default: !0 }
        }), Z(L);
        var q = R(L, 2);
        qn(q, {}), N(u, d);
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
de(Zd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), gw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  fe(t, !0), Qe(e, pw);
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
        var c = vw();
        N(u, c);
      },
      children: (u, c) => {
        var d = hw(), v = we(d), g = Y(v);
        Ue(g, {
          level: 3,
          children: (q, T) => {
            Le();
            var A = Ze("输入参数");
            N(q, A);
          },
          $$slots: { default: !0 }
        });
        var p = R(g, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, T) => {
            var A = gw();
            N(q, A);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var x = R(v, 2);
        Rt(x, {});
        var b = R(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (q, T) => {
            Le();
            var A = Ze("搜索引擎设置");
            N(q, A);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), h = Y($);
        const C = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : []);
        Qt(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const T = q.value;
            l(o, () => ({ engine: T }));
          },
          get value() {
            return f(C);
          }
        }), Z($);
        var w = R($, 4), k = Y(w);
        ht(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const T = q.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), Z(w);
        var M = R(w, 4), P = Y(M);
        ht(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const T = q.target.value;
            l(o, () => ({ limit: T }));
          }
        }), Z(M);
        var V = R(M, 2), L = Y(V);
        Ue(L, {
          level: 3,
          mt: "10px",
          children: (q, T) => {
            Le();
            var A = Ze("输出参数");
            N(q, A);
          },
          $$slots: { default: !0 }
        }), Z(V);
        var z = R(V, 2);
        qn(z, {}), N(u, d);
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
de(Bd, { data: {} }, [], [], !0);
var mw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), yw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const xw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Xd(e, t) {
  fe(t, !0), Qe(e, xw);
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
        var s = mw();
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
        var l = ww(), u = we(l), c = Y(u);
        Ue(c, {
          level: 3,
          children: (b, $) => {
            Le();
            var h = Ze("循环变量");
            N(b, h);
          },
          $$slots: { default: !0 }
        });
        var d = R(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (b, $) => {
            var h = yw();
            N(b, h);
          },
          $$slots: { default: !0 }
        }), Z(u);
        var v = R(u, 2);
        Rt(v, {});
        var g = R(v, 2), p = Y(g);
        Ue(p, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            Le();
            var h = Ze("输出参数");
            N(b, h);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = R(g, 2);
        qn(x, {}), N(a, l);
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
de(Xd, { data: {} }, [], [], !0);
const bw = {
  startNode: Ld,
  codeNode: Id,
  llmNode: Ad,
  templateNode: qd,
  httpNode: Rd,
  knowledgeNode: Zd,
  searchEngineNode: Bd,
  loopNode: Xd,
  endNode: zd
};
var $w = /* @__PURE__ */ re("<!> ", 1);
function Ia(e, t) {
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
      var u = $w(), c = we(u);
      rs(c, n);
      var d = R(c);
      Ee(() => dt(d, ` ${r() ?? ""}`)), N(s, u);
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
de(
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
var Cw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), _w = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), kw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Yd(e, t) {
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
  var l = kw(), u = Y(l), c = Y(u), d = Y(c);
  pd(d, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      J(n, b.value.toString(), !0);
    }
  }), Z(c);
  var v = R(c, 2), g = Y(v);
  Pt(g, 21, () => o, Lr, (b, $) => {
    Ia(b, lt(() => f($)));
  }), Z(g);
  var p = R(g, 2);
  Pt(p, 21, () => a, Lr, (b, $) => {
    Ia(b, lt(() => f($)));
  }), Z(p), Z(v), Z(u);
  var x = R(u, 2);
  je(x, {
    onclick: () => {
      J(r, f(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var h = Je(), C = we(h);
      {
        var w = (M) => {
          var P = Cw();
          N(M, P);
        }, k = (M) => {
          var P = _w();
          N(M, P);
        };
        ye(C, (M) => {
          f(r) === "show" ? M(w) : M(k, !1);
        });
      }
      N(b, h);
    },
    $$slots: { default: !0 }
  }), Z(l), Ee(() => {
    xt(l, 1, `tf-toolbar ${f(r) ?? ""}`), ft(g, `display: ${(f(n) === "base" ? "flex" : "none") ?? ""}`), ft(p, `display: ${(f(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), N(e, l), ve();
}
de(Yd, {}, [], [], !0);
const Sw = () => {
  const { nodeLookup: e } = Ke();
  return {
    getNode: (t) => {
      var n;
      return (n = j(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Ew = () => {
  const { nodes: e } = Ke();
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
}, Pw = () => {
  const { edges: e } = Ke();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var Mw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Dw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ow = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Vw = /* @__PURE__ */ re('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Tw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ re('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Nw = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Aw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Wd(e, t) {
  var n;
  fe(t, !0), Qe(e, Aw);
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
        rs($, () => d.icon), N(x, b);
      },
      children: (x, b) => {
        var $ = Nw(), h = we($);
        {
          var C = (L) => {
            var z = Hw(), q = we(z), T = Y(q);
            Ue(T, {
              level: 3,
              children: (_, D) => {
                Le();
                var E = Ze("输入参数");
                N(_, E);
              },
              $$slots: { default: !0 }
            });
            var A = R(T, 2);
            {
              var S = (_) => {
                je(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (D, E) => {
                    var H = Mw();
                    N(D, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (_) => {
                d.parametersAddEnable !== !1 && _(S);
              });
            }
            Z(q);
            var O = R(q, 2);
            Rt(O, {}), N(L, z);
          };
          ye(h, (L) => {
            d.parametersEnable !== !1 && L(C);
          });
        }
        var w = R(h, 2);
        {
          var k = (L) => {
            var z = Je(), q = we(z);
            Pt(q, 17, () => v, Lr, (T, A) => {
              var S = Je(), O = we(S);
              {
                var _ = (E) => {
                  var H = Dw(), I = we(H), B = Y(I, !0);
                  Z(I);
                  var K = R(I, 2), ee = Y(K);
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
                      onchange: (W) => {
                        l(i, { [f(A).name]: W.target.value });
                      }
                    }
                  )), Z(K), Ee(() => dt(B, f(A).label)), N(E, H);
                }, D = (E, H) => {
                  {
                    var I = (K) => {
                      var ee = Ow(), F = we(ee), W = Y(F, !0);
                      Z(F);
                      var ie = R(F, 2), pe = Y(ie);
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
                          onchange: (le) => {
                            l(i, { [f(A).name]: le.target.value });
                          }
                        }
                      )), Z(ie), Ee(() => dt(W, f(A).label)), N(K, ee);
                    }, B = (K, ee) => {
                      {
                        var F = (ie) => {
                          var pe = Lw(), ge = we(pe), le = Y(ge, !0);
                          Z(ge);
                          var ke = R(ge, 2), U = Y(ke), ae = Y(U), Se = Y(ae);
                          Z(ae);
                          var ce = R(ae, 2);
                          Cr(ce);
                          var Me = (Te) => l(i, {
                            [f(A).name]: parseFloat(Te.target.value)
                          });
                          let G;
                          Z(U), Z(ke), Ee(() => {
                            dt(le, f(A).label), dt(Se, `${f(A).description ?? ""}: ${r()[f(A).name] ?? f(A).defaultValue ?? ""}`), G = Jt(
                              ce,
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
                        }, W = (ie, pe) => {
                          {
                            var ge = (ke) => {
                              var U = Vw(), ae = we(U), Se = Y(ae, !0);
                              Z(ae);
                              var ce = R(ae, 2), Me = Y(ce);
                              const G = /* @__PURE__ */ Pe(() => f(A).options || []), Te = /* @__PURE__ */ Pe(() => r()[f(A).name] ? [r()[f(A).name]] : [f(A).defaultValue]);
                              Qt(Me, {
                                get items() {
                                  return f(G);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(A).placeholder;
                                },
                                onSelect: (Xe) => {
                                  const ue = Xe.value;
                                  l(i, () => ({ [f(A).name]: ue }));
                                },
                                get value() {
                                  return f(Te);
                                }
                              }), Z(ce), Ee(() => dt(Se, f(A).label)), N(ke, U);
                            }, le = (ke, U) => {
                              {
                                var ae = (Se) => {
                                  Ue(Se, lt({ level: 3, mt: "10px" }, () => f(A).attrs, {
                                    children: (ce, Me) => {
                                      Le();
                                      var G = Ze();
                                      Ee(() => dt(G, f(A).label)), N(ce, G);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                ye(
                                  ke,
                                  (Se) => {
                                    f(A).type === "heading" && Se(ae);
                                  },
                                  U
                                );
                              }
                            };
                            ye(
                              ie,
                              (ke) => {
                                f(A).type === "select" ? ke(ge) : ke(le, !1);
                              },
                              pe
                            );
                          }
                        };
                        ye(
                          K,
                          (ie) => {
                            f(A).type === "slider" ? ie(F) : ie(W, !1);
                          },
                          ee
                        );
                      }
                    };
                    ye(
                      E,
                      (K) => {
                        f(A).type === "textarea" ? K(I) : K(B, !1);
                      },
                      H
                    );
                  }
                };
                ye(O, (E) => {
                  f(A).type === "input" ? E(_) : E(D, !1);
                });
              }
              N(T, S);
            }), N(L, z);
          };
          ye(w, (L) => {
            v && L(k);
          });
        }
        var M = R(w, 2);
        _n(M, (L) => g = L, () => g);
        var P = R(M, 2);
        {
          var V = (L) => {
            var z = zw(), q = we(z), T = Y(q);
            Ue(T, {
              level: 3,
              mt: "10px",
              children: (_, D) => {
                Le();
                var E = Ze("输出参数");
                N(_, E);
              },
              $$slots: { default: !0 }
            });
            var A = R(T, 2);
            {
              var S = (_) => {
                je(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (D, E) => {
                    var H = Tw();
                    N(D, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(A, (_) => {
                d.outputDefsAddEnable !== !1 && _(S);
              });
            }
            Z(q);
            var O = R(q, 2);
            qn(O, {}), N(L, z);
          };
          ye(P, (L) => {
            d.outputDefsEnable !== !1 && L(V);
          });
        }
        Ee(() => {
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
de(Wd, { data: {} }, [], [], !0);
const Iw = () => {
  const e = Ke();
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
var qw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Rw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Zw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Kd(e, t) {
  fe(t, !0), Qe(e, Bw);
  const [n, r] = tt(), o = () => te(V, "$nodes", n), i = () => te(L, "$edges", n), a = () => te(z, "$viewport", n), s = y(t, "onInit", 7), l = zt();
  s()(l);
  let u = /* @__PURE__ */ _t(!1), c = /* @__PURE__ */ _t(void 0);
  const { updateEdgeData: d } = Iw(), v = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, g = (E) => {
    var H;
    E.preventDefault();
    const I = l.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), B = (H = E.dataTransfer) == null ? void 0 : H.getData("application/tinyflow"), K = B ? JSON.parse(B) : {}, ee = {
      id: `node_${Zr()}`,
      position: I,
      data: {},
      ...K
    };
    ni.addNode(ee), ni.selectNodeOnly(ee.id);
  }, { getNode: p } = Sw(), x = (E) => {
    const H = p(E.source), I = p(E.target);
    if (E.sourceHandle === "loop_handle" || H.parentId) {
      const B = l.getEdges();
      for (let K of B)
        if (K.target === E.target) {
          const ee = p(K.source);
          if (E.sourceHandle === "loop_handle" && ee.parentId !== H.id || H.parentId && ee.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && I.parentId && I.parentId !== H.id);
  }, { ensureParentInNodesBefore: b } = Ew(), $ = (E, H) => {
    if (!H.isValid)
      return;
    const I = H.toNode;
    if (I.parentId)
      return;
    const B = H.fromNode, K = H.fromHandle, ee = { position: { ...I.position } };
    if (K.id === "loop_handle" ? ee.parentId = B.id : B.parentId && (ee.parentId = B.parentId), ee.parentId) {
      const F = p(ee.parentId);
      ee.position = {
        x: I.position.x - F.position.x,
        y: I.position.y - F.position.y
      }, b(ee.parentId, I.id), l.updateNode(I.id, ee);
    }
  }, { getEdgesByTarget: h } = Pw(), C = (E) => {
    E.edges.forEach((H) => {
      const I = p(H.target);
      if (I && I.parentId) {
        const B = h(H.target), K = p(I.parentId);
        if (B.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
            }
          });
        else {
          let ee = !1;
          for (let F = 0; F < B.length; F++) {
            const W = B[F], ie = p(W.source);
            if (ie.parentId || ie.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
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
      M[E] = Wd;
  const { nodes: V, edges: L, viewport: z } = Ke(), q = Qn().onDataChange;
  q && (V.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), L.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), z.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var T = Zw(), A = Y(T);
  const S = /* @__PURE__ */ Pe(() => ({ ...bw, ...M })), O = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: xo.ArrowClosed,
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
        return f(O);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (E) => {
          J(u, !0), J(c, E.detail.edge, !0);
        }
      },
      children: (E, H) => {
        var I = Rw(), B = we(I);
        dd(B, {});
        var K = R(B, 2);
        ld(K, {});
        var ee = R(K, 2);
        vd(ee, {});
        var F = R(ee, 2);
        {
          var W = (ie) => {
            To(ie, {
              children: (pe, ge) => {
                var le = qw(), ke = R(Y(le), 4), U = Y(ke);
                const ae = /* @__PURE__ */ Pe(() => {
                  var Se, ce;
                  return (ce = (Se = f(c)) == null ? void 0 : Se.data) == null ? void 0 : ce.condition;
                });
                pt(U, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(ae);
                  },
                  onchange: (Se) => {
                    f(c) && d(f(c).id, { condition: Se.target.value });
                  }
                }), Z(ke), Z(le), N(pe, le);
              },
              $$slots: { default: !0 }
            });
          };
          ye(F, (ie) => {
            f(u) && ie(W);
          });
        }
        N(E, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var _ = R(A, 2);
  Yd(_, {}), Z(T), N(e, T);
  var D = ve({
    get onInit() {
      return s();
    },
    set onInit(E) {
      s(E), m();
    }
  });
  return r(), D;
}
de(Kd, { onInit: {} }, [], [], !0);
function Xw(e, t) {
  fe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ni.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Or("tinyflow_options", n()), nd(e, {
    fitView: !0,
    children: (i, a) => {
      Kd(i, {
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
customElements.define("tinyflow-component", de(Xw, { options: {}, onInit: {} }, [], [], !1));
const Uw = /* @__PURE__ */ l1({
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
      r.value && (o = new L2({
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
  Uw as Tinyflow
};
//# sourceMappingURL=index.js.map
