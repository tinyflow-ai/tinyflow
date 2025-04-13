var gf = Object.defineProperty;
var Ia = (e) => {
  throw TypeError(e);
};
var hf = (e, t, n) => t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _t = (e, t, n) => hf(e, typeof t != "symbol" ? t + "" : t, n), ns = (e, t, n) => t.has(e) || Ia("Cannot " + n);
var lt = (e, t, n) => (ns(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? Ia("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Jr = (e, t, n, r) => (ns(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), za = (e, t, n) => (ns(e, t, "access private method"), n);
const vf = "5";
var Gl;
typeof window < "u" && ((Gl = window.__svelte ?? (window.__svelte = {})).v ?? (Gl.v = /* @__PURE__ */ new Set())).add(vf);
let Fr = !1, pf = !1;
function mf() {
  Fr = !0;
}
mf();
const Xs = 1, Ws = 2, Ul = 4, yf = 8, wf = 16, _f = 1, xf = 2, jl = 4, bf = 8, Cf = 16, Jl = 1, kf = 2, Ks = "[", qs = "[!", Gs = "]", br = {}, Tt = Symbol(), Ef = "http://www.w3.org/1999/xhtml", $f = "http://www.w3.org/2000/svg", Ra = !1;
function Mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Po = Array.isArray, Sf = Array.prototype.indexOf, Us = Array.from, ii = Object.keys, uo = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Ql = Object.getOwnPropertyDescriptors, Pf = Object.prototype, Nf = Array.prototype, js = Object.getPrototypeOf, Ba = Object.isExtensible;
function Qr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Tf(e) {
  return e();
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const an = 2, eu = 4, Hi = 8, Js = 16, zn = 32, hr = 64, si = 128, Yt = 256, ai = 512, St = 1024, wn = 2048, tr = 4096, Vn = 8192, Vi = 16384, Mf = 32768, Xr = 65536, Hf = 1 << 17, Vf = 1 << 19, tu = 1 << 20, ws = 1 << 21, Kn = Symbol("$state"), Qs = Symbol("legacy props"), Df = Symbol("");
function Af(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Of() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Lf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function If() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Rf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Bf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let $e = !1;
function Rt(e) {
  $e = e;
}
let Ie;
function Et(e) {
  if (e === null)
    throw Di(), br;
  return Ie = e;
}
function _n() {
  return Et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Ie)
  );
}
function F(e) {
  if ($e) {
    if (/* @__PURE__ */ En(Ie) !== null)
      throw Di(), br;
    Ie = e;
  }
}
function He(e = 1) {
  if ($e) {
    for (var t = e, n = Ie; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Ie = n;
  }
}
function _s() {
  for (var e = 0, t = Ie; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Gs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ks || n === qs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(t)
    );
    t.remove(), t = r;
  }
}
function jt(e) {
  if (typeof e != "object" || e === null || Kn in e)
    return e;
  const t = js(e);
  if (t !== Pf && t !== Nf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Po(e), o = /* @__PURE__ */ bt(0), i = qe, s = (a) => {
    var l = qe;
    xn(i);
    var u = a();
    return xn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ bt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Bf();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ bt(u.value)), n.set(l, c)) : G(
          c,
          s(() => jt(u.value))
        ), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0)
          l in a && n.set(
            l,
            s(() => /* @__PURE__ */ bt(Tt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && G(c, f);
          }
          G(u, Tt), Ya(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Kn)
          return e;
        var c = n.get(l), f = l in a;
        if (c === void 0 && (!f || (h = Hn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ bt(jt(f ? a[l] : Tt))), n.set(l, c)), c !== void 0) {
          var d = g(c);
          return d === Tt ? void 0 : d;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var f = n.get(l), d = f == null ? void 0 : f.v;
          if (f !== void 0 && d !== Tt)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        var d;
        if (l === Kn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== Tt || Reflect.has(a, l);
        if (u !== void 0 || Ge !== null && (!c || (d = Hn(a, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ bt(c ? jt(a[l]) : Tt)), n.set(l, u));
          var f = g(u);
          if (f === Tt)
            return !1;
        }
        return c;
      },
      set(a, l, u, c) {
        var m;
        var f = n.get(l), d = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? G(v, Tt) : h in a && (v = s(() => /* @__PURE__ */ bt(Tt)), n.set(h + "", v));
          }
        f === void 0 ? (!d || (m = Hn(a, l)) != null && m.writable) && (f = s(() => /* @__PURE__ */ bt(void 0)), G(
          f,
          s(() => jt(u))
        ), n.set(l, f)) : (d = f.v !== Tt, G(
          f,
          s(() => jt(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(a, l);
        if (x != null && x.set && x.set.call(c, u), !d) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= b.v && G(b, E + 1);
          }
          Ya(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var d = n.get(f);
          return d === void 0 || d.v !== Tt;
        });
        for (var [u, c] of n)
          c.v !== Tt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Yf();
      }
    }
  );
}
function Ya(e, t = 1) {
  G(e, e.v + t);
}
var Mt, nu, ru, ou;
function xs() {
  if (Mt === void 0) {
    Mt = window, nu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ru = Hn(t, "firstChild").get, ou = Hn(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0);
  }
}
function An(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return ru.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return ou.call(e);
}
function X(e, t) {
  if (!$e)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(An());
  else if (t && n.nodeType !== 3) {
    var r = An();
    return n == null || n.before(r), Et(r), r;
  }
  return Et(n), n;
}
function xe(e, t) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Ie;
}
function B(e, t = 1, n = !1) {
  let r = $e ? Ie : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!$e)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = An();
    return r === null ? o == null || o.after(s) : r.before(s), Et(s), s;
  }
  return Et(r), /** @type {TemplateNode} */
  r;
}
function ea(e) {
  e.textContent = "";
}
function iu(e) {
  return e === this.v;
}
function ta(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function na(e) {
  return !ta(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = an | wn, n = qe !== null && qe.f & an ? (
    /** @type {Derived} */
    qe
  ) : null;
  return Ge === null || n !== null && n.f & Yt ? t |= Yt : Ge.f |= tu, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: iu,
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
function Me(e) {
  const t = /* @__PURE__ */ Mr(e);
  return mu(t), t;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = na, t;
}
function su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Qt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ff(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & an))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function au(e) {
  var t, n = Ge;
  Jn(Ff(e));
  try {
    su(e), t = xu(e);
  } finally {
    Jn(n);
  }
  return t;
}
function lu(e) {
  var t = au(e), n = (Xn || e.f & Yt) && e.deps !== null ? tr : St;
  en(e, n), e.equals(t) || (e.v = t, e.wv = wu());
}
function uu(e) {
  Ge === null && qe === null && Lf(), qe !== null && qe.f & Yt && Ge === null && Of(), To && Af();
}
function Xf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Xe,
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
      Oi(i), i.f |= Mf;
    } catch (l) {
      throw Qt(i), l;
    }
  else t !== null && Li(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (tu | si)) === 0;
  if (!s && r && (o !== null && Xf(i, o), qe !== null && qe.f & an)) {
    var a = (
      /** @type {Derived} */
      qe
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function ra(e) {
  const t = vr(Hi, null, !1);
  return en(t, St), t.teardown = e, t;
}
function jn(e) {
  uu();
  var t = Ge !== null && (Ge.f & zn) !== 0 && Xe !== null && !Xe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Xe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ge,
      reaction: qe
    });
  } else {
    var r = zt(e);
    return r;
  }
}
function Wf(e) {
  return uu(), Wr(e);
}
function Kf(e) {
  const t = vr(hr, e, !0);
  return () => {
    Qt(t);
  };
}
function qf(e) {
  const t = vr(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Qt(t), r(void 0);
    }) : (Qt(t), r(void 0));
  });
}
function zt(e) {
  return vr(eu, e, !1);
}
function ge(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), bn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Xe
  );
  Wr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & St && en(n, tr), Kr(n) && Oi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return vr(Hi, e, !0);
}
function Ee(e, t = [], n = Mr) {
  const r = t.map(n);
  return pr(() => e(...r.map(g)));
}
function pr(e, t = 0) {
  return vr(Hi | Js | t, e, !0);
}
function On(e, t = !0) {
  return vr(Hi | zn, e, !0, t);
}
function cu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = To, r = qe;
    Fa(!0), xn(null);
    try {
      t.call(null);
    } finally {
      Fa(n), xn(r);
    }
  }
}
function du(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & hr ? n.parent = null : Qt(n, t), n = r;
  }
}
function Gf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & zn || Qt(t), t = n;
  }
}
function Qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Vf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ En(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  du(e, t && !n), di(e, 0), en(e, Vi);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  cu(e);
  var a = e.parent;
  a !== null && a.first !== null && fu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function fu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hr(e, t) {
  var n = [];
  oa(e, n, !0), gu(n, () => {
    Qt(e), t && t();
  });
}
function gu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function oa(e, t, n) {
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & zn) !== 0;
      oa(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  hu(e, !0);
}
function hu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & St || (e.f ^= St), Kr(e) && (en(e, wn), Li(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & zn) !== 0;
      hu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Uf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let go = [], ho = [];
function vu() {
  var e = go;
  go = [], co(e);
}
function pu() {
  var e = ho;
  ho = [], co(e);
}
function No(e) {
  go.length === 0 && queueMicrotask(vu), go.push(e);
}
function jf(e) {
  ho.length === 0 && Uf(pu), ho.push(e);
}
function Za() {
  go.length > 0 && vu(), ho.length > 0 && pu();
}
let Jo = !1, li = !1, ui = null, sr = !1, To = !1;
function Fa(e) {
  To = e;
}
let ao = [];
let qe = null, pn = !1;
function xn(e) {
  qe = e;
}
let Ge = null;
function Jn(e) {
  Ge = e;
}
let $t = null;
function Jf(e) {
  $t = e;
}
function mu(e) {
  qe !== null && qe.f & ws && ($t === null ? Jf([e]) : $t.push(e));
}
let xt = null, It = 0, Gt = null;
function Qf(e) {
  Gt = e;
}
let yu = 1, ci = 0, Xn = !1;
function wu() {
  return ++yu;
}
function Kr(e) {
  var f;
  var t = e.f;
  if (t & wn)
    return !0;
  if (t & tr) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ai) !== 0, a = r && Ge !== null && !Xn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ai), a && c !== null && !(c.f & Yt) && (u.f ^= Yt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Kr(
          /** @type {Derived} */
          i
        ) && lu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ge !== null && !Xn) && en(e, St);
  }
  return !1;
}
function e1(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & si)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= si;
      }
    n = n.parent;
  }
  throw Jo = !1, e;
}
function t1(e) {
  return (e.f & Vi) === 0 && (e.parent === null || (e.parent.f & si) === 0);
}
function Ai(e, t, n, r) {
  if (Jo) {
    if (n === null && (Jo = !1), t1(t))
      throw e;
    return;
  }
  n !== null && (Jo = !0);
  {
    e1(e, t);
    return;
  }
}
function _u(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      $t != null && $t.includes(e) || (i.f & an ? _u(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? en(i, wn) : i.f & St && en(i, tr), Li(
        /** @type {Effect} */
        i
      )));
    }
}
function xu(e) {
  var h;
  var t = xt, n = It, r = Gt, o = qe, i = Xn, s = $t, a = Xe, l = pn, u = e.f;
  xt = /** @type {null | Value[]} */
  null, It = 0, Gt = null, Xn = (u & Yt) !== 0 && (pn || !sr || qe === null), qe = u & (zn | hr) ? null : e, $t = null, Wa(e.ctx), pn = !1, ci++, e.f |= ws;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (xt !== null) {
      var d;
      if (di(e, It), f !== null && It > 0)
        for (f.length = It + xt.length, d = 0; d < xt.length; d++)
          f[It + d] = xt[d];
      else
        e.deps = f = xt;
      if (!Xn)
        for (d = It; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && It < f.length && (di(e, It), f.length = It);
    if (Ii() && Gt !== null && !pn && f !== null && !(e.f & (an | tr | wn)))
      for (d = 0; d < /** @type {Source[]} */
      Gt.length; d++)
        _u(
          Gt[d],
          /** @type {Effect} */
          e
        );
    return o !== e && (ci++, Gt !== null && (r === null ? r = Gt : r.push(.../** @type {Source[]} */
    Gt))), c;
  } finally {
    xt = t, It = n, Gt = r, qe = o, Xn = i, $t = s, Wa(a), pn = l, e.f ^= ws;
  }
}
function n1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Sf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & an && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (en(t, tr), t.f & (Yt | ai) || (t.f ^= ai), su(
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
      n1(e, n[r]);
}
function Oi(e) {
  var t = e.f;
  if (!(t & Vi)) {
    en(e, St);
    var n = Ge, r = Xe, o = sr;
    Ge = e, sr = !0;
    try {
      t & Js ? Gf(e) : du(e), cu(e);
      var i = xu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yu;
      var s = e.deps, a;
      Ra && pf && e.f & wn;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      sr = o, Ge = n;
    }
  }
}
function r1() {
  try {
    If();
  } catch (e) {
    if (ui !== null)
      Ai(e, ui, null);
    else
      throw e;
  }
}
function bu() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; ao.length > 0; ) {
      t++ > 1e3 && r1();
      var n = ao, r = n.length;
      ao = [];
      for (var o = 0; o < r; o++) {
        var i = i1(n[o]);
        o1(i);
      }
      vo.clear();
    }
  } finally {
    li = !1, sr = e, ui = null;
  }
}
function o1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Vi | Vn)))
        try {
          Kr(r) && (Oi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? fu(r) : r.fn = null));
        } catch (o) {
          Ai(o, r, null, r.ctx);
        }
    }
}
function Li(e) {
  li || (li = !0, queueMicrotask(bu));
  for (var t = ui = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (hr | zn)) {
      if (!(n & St)) return;
      t.f ^= St;
    }
  }
  ao.push(t);
}
function i1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (zn | hr)) !== 0, i = o && (r & St) !== 0;
    if (!i && !(r & Vn)) {
      if (r & eu)
        t.push(n);
      else if (o)
        n.f ^= St;
      else {
        var s = qe;
        try {
          qe = n, Kr(n) && Oi(n);
        } catch (u) {
          Ai(u, n, null, n.ctx);
        } finally {
          qe = s;
        }
      }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
  return t;
}
function y(e) {
  var t;
  for (Za(); ao.length > 0; )
    li = !0, bu(), Za();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & an) !== 0;
  if (qe !== null && !pn) {
    if (!($t != null && $t.includes(e))) {
      var r = qe.deps;
      e.rv < ci && (e.rv = ci, xt === null && r !== null && r[It] === e ? It++ : xt === null ? xt = [e] : (!Xn || !xt.includes(e)) && xt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Yt) && (o.f ^= Yt);
  }
  return n && (o = /** @type {Derived} */
  e, Kr(o) && lu(o)), To && vo.has(e) ? vo.get(e) : e.v;
}
function bn(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const s1 = -7169;
function en(e, t) {
  e.f = e.f & s1 | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Kn in e)
      bs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Kn in n && bs(n);
      }
  }
}
function bs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        bs(e[r], t);
      } catch {
      }
    const n = js(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ql(n);
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
const vo = /* @__PURE__ */ new Map();
function Vr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: iu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  const n = Vr(e);
  return mu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t = !1) {
  var r;
  const n = Vr(e);
  return t || (n.equals = na), Fr && Xe !== null && Xe.l !== null && ((r = Xe.l).s ?? (r.s = [])).push(n), n;
}
function G(e, t, n = !1) {
  qe !== null && !pn && Ii() && qe.f & (an | Js) && !($t != null && $t.includes(e)) && Zf();
  let r = n ? jt(t) : t;
  return Cs(e, r);
}
function Cs(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    To ? vo.set(e, t) : vo.set(e, n), e.v = t, e.f & an && (e.f & wn && au(
      /** @type {Derived} */
      e
    ), en(e, e.f & Yt ? tr : St)), e.wv = wu(), Cu(e, wn), Ii() && Ge !== null && Ge.f & St && !(Ge.f & (zn | hr)) && (Gt === null ? Qf([e]) : Gt.push(e));
  }
  return t;
}
function Xa(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Cu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ii(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & wn || !r && s === Ge || (en(s, t), a & (St | Yt) && (a & an ? Cu(
        /** @type {Derived} */
        s,
        tr
      ) : Li(
        /** @type {Effect} */
        s
      )));
    }
}
let Xe = null;
function Wa(e) {
  Xe = e;
}
function lr(e) {
  return (
    /** @type {T} */
    ia().get(e)
  );
}
function Dr(e, t) {
  return ia().set(e, t), t;
}
function a1(e) {
  return ia().has(e);
}
function de(e, t = !1, n) {
  var r = Xe = {
    p: Xe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Fr && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Vr(!1)
  }), ra(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Xe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ge, r = qe;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Jn(i.effect), xn(i.reaction), zt(i.fn);
        }
      } finally {
        Jn(n), xn(r);
      }
    }
    Xe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ii() {
  return !Fr || Xe !== null && Xe.l === null;
}
function ia(e) {
  return Xe === null && Mi(), Xe.c ?? (Xe.c = new Map(l1(Xe) || void 0));
}
function l1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function u1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const c1 = [
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
function d1(e) {
  return c1.includes(e);
}
const f1 = {
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
function g1(e) {
  return e = e.toLowerCase(), f1[e] ?? e;
}
const h1 = ["touchstart", "touchmove"];
function v1(e) {
  return h1.includes(e);
}
const p1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function m1(e) {
  return p1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function y1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, No(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function w1(e) {
  $e && /* @__PURE__ */ kt(e) !== null && ea(e);
}
let Ka = !1;
function _1() {
  Ka || (Ka = !0, document.addEventListener(
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
function x1(e) {
  var t = qe, n = Ge;
  xn(null), Jn(null);
  try {
    return e();
  } finally {
    xn(t), Jn(n);
  }
}
const ku = /* @__PURE__ */ new Set(), ks = /* @__PURE__ */ new Set();
function Eu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ro.call(t, i), !i.cancelBubble)
      return x1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? No(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Fe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Eu(e, t, n, i);
  (t === document.body || t === window || t === document) && ra(() => {
    t.removeEventListener(e, s, i);
  });
}
function zi(e) {
  for (var t = 0; t < e.length; t++)
    ku.add(e[t]);
  for (var n of ks)
    n(e);
}
function ro(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, a = e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    uo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = qe, f = Ge;
    xn(null), Jn(null);
    try {
      for (var d, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + r];
          if (x != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Po(x)) {
              var [b, ...E] = x;
              b.apply(i, [e, ...E]);
            } else
              x.call(i, e);
        } catch (C) {
          d ? h.push(C) : d = C;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, xn(c), Jn(f);
    }
  }
}
function sa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Vt(e, t) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & Jl) !== 0, r = (t & kf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Vt(Ie, null), Ie;
    o === void 0 && (o = sa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ kt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || nu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Vt(a, l);
    } else
      Vt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Vt(Ie, null), Ie;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        sa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ kt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ kt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ kt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ kt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Vt(c, f);
    } else
      Vt(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!$e) {
    var t = An(e + "");
    return Vt(t, t), t;
  }
  var n = Ie;
  return n.nodeType !== 3 && (n.before(n = An()), Et(n)), Vt(n, n), n;
}
function tt() {
  if ($e)
    return Vt(Ie, null), Ie;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = An();
  return e.append(t, n), Vt(t, n), e;
}
function O(e, t) {
  if ($e) {
    Ge.nodes_end = Ie, _n();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Zt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function $u(e, t) {
  return Su(e, t);
}
function b1(e, t) {
  xs(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ks); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw br;
    Rt(!0), Et(
      /** @type {Comment} */
      i
    ), _n();
    const s = Su(e, { ...t, anchor: i });
    if (Ie === null || Ie.nodeType !== 8 || /** @type {Comment} */
    Ie.data !== Gs)
      throw Di(), br;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === br)
      return t.recover === !1 && zf(), xs(), ea(n), Rt(!1), $u(e, t);
    throw s;
  } finally {
    Rt(r), Et(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function Su(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  xs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!a.has(h)) {
        a.add(h);
        var v = v1(h);
        t.addEventListener(h, ro, { passive: v });
        var x = wr.get(h);
        x === void 0 ? (document.addEventListener(h, ro, { passive: v }), wr.set(h, 1)) : wr.set(h, x + 1);
      }
    }
  };
  l(Us(ku)), ks.add(l);
  var u = void 0, c = qf(() => {
    var f = n ?? t.appendChild(An());
    return On(() => {
      if (i) {
        de({});
        var d = (
          /** @type {ComponentContext} */
          Xe
        );
        d.c = i;
      }
      o && (r.$$events = o), $e && Vt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, $e && (Ge.nodes_end = Ie), i && fe();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, ro);
        var h = (
          /** @type {number} */
          wr.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, ro), wr.delete(d)) : wr.set(d, h);
      }
      ks.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return Es.set(u, c), u;
}
let Es = /* @__PURE__ */ new WeakMap();
function C1(e, t) {
  const n = Es.get(e);
  return n ? (Es.delete(e), n(t)) : Promise.resolve();
}
function be(e, t, [n, r] = [0, 0]) {
  $e && n === 0 && _n();
  var o = e, i = null, s = null, a = Tt, l = n > 0 ? Xr : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (a === (a = d)) return;
    let v = !1;
    if ($e && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Ks ? r = 0 : b === qs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = _s(), Et(o), Rt(!1), v = !0, r = -1);
    }
    a ? (i ? fo(i) : h && (i = On(() => h(o))), s && Hr(s, () => {
      s = null;
    })) : (s ? fo(s) : h && (s = On(() => h(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), v && Rt(!0);
  };
  pr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), $e && (o = Ie);
}
function po(e, t) {
  return t;
}
function k1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    oa(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ea(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Yn(e, t[0].prev, t[i - 1].next);
  }
  gu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Yn(e, c.prev, c.next)), Qt(c.e, !a);
    }
  });
}
function Dt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ul) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = $e ? Et(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(An());
  }
  $e && _n();
  var c = null, f = !1, d = /* @__PURE__ */ me(() => {
    var h = n();
    return Po(h) ? h : h == null ? [] : Us(h);
  });
  pr(() => {
    var h = g(d), v = h.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let x = !1;
    if ($e) {
      var b = (
        /** @type {Comment} */
        s.data === qs
      );
      b !== (v === 0) && (s = _s(), Et(s), Rt(!1), x = !0);
    }
    if ($e) {
      for (var E = null, m, C = 0; C < v; C++) {
        if (Ie.nodeType === 8 && /** @type {Comment} */
        Ie.data === Gs) {
          s = /** @type {Comment} */
          Ie, x = !0, Rt(!1);
          break;
        }
        var p = h[C], k = r(p, C);
        m = Pu(
          Ie,
          a,
          E,
          null,
          p,
          k,
          C,
          o,
          t,
          n
        ), a.items.set(k, m), E = m;
      }
      v > 0 && Et(_s());
    }
    $e || E1(h, a, s, o, t, r, n), i !== null && (v === 0 ? c ? fo(c) : c = On(() => i(s)) : c !== null && Hr(c, () => {
      c = null;
    })), x && Rt(!0), g(d);
  }), $e && (s = Ie);
}
function E1(e, t, n, r, o, i, s) {
  var $, M, _, P;
  var a = (o & yf) !== 0, l = (o & (Xs | Ws)) !== 0, u = e.length, c = t.items, f = t.first, d = f, h, v = null, x, b = [], E = [], m, C, p, k;
  if (a)
    for (k = 0; k < u; k += 1)
      m = e[k], C = i(m, k), p = c.get(C), p !== void 0 && (($ = p.a) == null || $.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(p));
  for (k = 0; k < u; k += 1) {
    if (m = e[k], C = i(m, k), p = c.get(C), p === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = Pu(
        N,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        C,
        k,
        r,
        o,
        s
      ), c.set(C, v), b = [], E = [], d = v.next;
      continue;
    }
    if (l && $1(p, m, k, o), p.e.f & Vn && (fo(p.e), a && ((M = p.a) == null || M.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(p))), p !== d) {
      if (h !== void 0 && h.has(p)) {
        if (b.length < E.length) {
          var S = E[0], H;
          v = S.prev;
          var A = b[0], D = b[b.length - 1];
          for (H = 0; H < b.length; H += 1)
            qa(b[H], S, n);
          for (H = 0; H < E.length; H += 1)
            h.delete(E[H]);
          Yn(t, A.prev, D.next), Yn(t, v, A), Yn(t, D, S), d = S, v = D, k -= 1, b = [], E = [];
        } else
          h.delete(p), qa(p, d, n), Yn(t, p.prev, p.next), Yn(t, p, v === null ? t.first : v.next), Yn(t, v, p), v = p;
        continue;
      }
      for (b = [], E = []; d !== null && d.k !== C; )
        d.e.f & Vn || (h ?? (h = /* @__PURE__ */ new Set())).add(d), E.push(d), d = d.next;
      if (d === null)
        continue;
      p = d;
    }
    b.push(p), v = p, d = p.next;
  }
  if (d !== null || h !== void 0) {
    for (var z = h === void 0 ? [] : Us(h); d !== null; )
      d.e.f & Vn || z.push(d), d = d.next;
    var L = z.length;
    if (L > 0) {
      var I = o & Ul && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < L; k += 1)
          (_ = z[k].a) == null || _.measure();
        for (k = 0; k < L; k += 1)
          (P = z[k].a) == null || P.fix();
      }
      k1(t, z, I, c);
    }
  }
  a && No(() => {
    var T;
    if (x !== void 0)
      for (p of x)
        (T = p.a) == null || T.apply();
  }), Ge.first = t.first && t.first.e, Ge.last = v && v.e;
}
function $1(e, t, n, r) {
  r & Xs && Cs(e.v, t), r & Ws ? Cs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Pu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Xs) !== 0, f = (l & wf) === 0, d = c ? f ? /* @__PURE__ */ ne(o) : Vr(o) : o, h = l & Ws ? Vr(s) : s, v = {
    i: h,
    v: d,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return v.e = On(() => a(e, d, h, u), $e), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function qa(e, t, n) {
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
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(i)
    );
    o.before(i), i = s;
  }
}
function Yn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function aa(e, t, n, r, o) {
  var i = e, s = "", a;
  pr(() => {
    if (s === (s = t() ?? "")) {
      $e && _n();
      return;
    }
    a !== void 0 && (Qt(a), a = void 0), s !== "" && (a = On(() => {
      if ($e) {
        Ie.data;
        for (var l = _n(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw Di(), br;
        Vt(Ie, u), i = Et(l);
        return;
      }
      var c = s + "", f = sa(c);
      Vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function pt(e, t, n, r, o) {
  var a;
  $e && _n();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function S1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function ur(e, t, ...n) {
  var r = e, o = ft, i;
  pr(() => {
    o !== (o = t()) && (i && (Qt(i), i = null), i = On(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), $e && (r = Ie);
}
function Nu(e, t, n) {
  $e && _n();
  var r = e, o, i;
  pr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = On(() => n(r, o))));
  }, Xr), $e && (r = Ie);
}
function P1(e, t, n, r, o, i) {
  let s = $e;
  $e && _n();
  var a, l, u = null;
  $e && Ie.nodeType === 1 && (u = /** @type {Element} */
  Ie, _n());
  var c = (
    /** @type {TemplateNode} */
    $e ? Ie : e
  ), f;
  pr(() => {
    const d = t() || null;
    var h = d === "svg" ? $f : null;
    d !== a && (f && (d === null ? Hr(f, () => {
      f = null, l = null;
    }) : d === l ? fo(f) : Qt(f)), d && d !== l && (f = On(() => {
      if (u = $e ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, d) : document.createElement(d), Vt(u, u), r) {
        $e && m1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          $e ? /* @__PURE__ */ kt(u) : u.appendChild(An())
        );
        $e && (v === null ? Rt(!1) : Et(v)), r(u, v);
      }
      Ge.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Xr), s && (Rt(!0), Et(c));
}
function et(e, t) {
  No(() => {
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
function vt(e, t, n) {
  zt(() => {
    var r = bn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var s = n();
        U(s), o && ta(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Tu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Tu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function N1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Tu(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? N1(e) : e ?? "";
}
const Ga = [...` 	
\r\f \v\uFEFF`];
function T1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ga.includes(r[s - 1])) && (a === r.length || Ga.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ua(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function rs(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function M1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(rs)), o && l.push(...Object.keys(o).map(rs));
      var u = 0, c = -1;
      const x = e.length;
      for (var f = 0; f < x; f++) {
        var d = e[f];
        if (a ? d === "/" && e[f - 1] === "*" && (a = !1) : i ? i === d && (i = !1) : d === "/" && e[f + 1] === "*" ? a = !0 : d === '"' || d === "'" ? i = d : d === "(" ? s++ : d === ")" && s--, !a && i === !1 && s === 0) {
          if (d === ":" && c === -1)
            c = f;
          else if (d === ";" || f === x - 1) {
            if (c !== -1) {
              var h = rs(e.substring(u, c).trim());
              if (!l.includes(h)) {
                d !== ";" && f++;
                var v = e.substring(u, f).trim();
                n += " " + v + ";";
              }
            }
            u = f + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Ua(r)), o && (n += Ua(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function mt(e, t, n, r, o, i) {
  var s = e.__className;
  if ($e || s !== n || s === void 0) {
    var a = T1(n, r, i);
    (!$e || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function os(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = M1(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (os(e, n == null ? void 0 : n[0], r[0]), os(e, n == null ? void 0 : n[1], r[1], "important")) : os(e, n, r));
  return r;
}
const eo = Symbol("class"), or = Symbol("style"), Mu = Symbol("is custom element"), Hu = Symbol("is html");
function lo(e) {
  if ($e) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          we(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          we(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, jf(n), _1();
  }
}
function is(e, t) {
  var n = la(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function H1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function we(e, t, n, r) {
  var o = la(e);
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Vu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = la(e), s = i[Mu], a = !i[Hu];
  let l = $e && s;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = fn(n.class) : (r || n[eo]) && (n.class = null), n[or] && (n.style ?? (n.style = null));
  var d = Vu(e);
  for (const C in n) {
    let p = n[C];
    if (c && C === "value" && p == null) {
      e.value = e.__value = "", u[C] = p;
      continue;
    }
    if (C === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, h, p, r, t == null ? void 0 : t[eo], n[eo]), u[C] = p, u[eo] = n[eo];
      continue;
    }
    if (C === "style") {
      dt(e, p, t == null ? void 0 : t[or], n[or]), u[C] = p, u[or] = n[or];
      continue;
    }
    var v = u[C];
    if (p !== v) {
      u[C] = p;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, N = "$$" + C;
          let S = C.slice(2);
          var b = d1(S);
          if (u1(S) && (S = S.slice(0, -7), k.capture = !0), !b && v) {
            if (p != null) continue;
            e.removeEventListener(S, u[N], k), u[N] = null;
          }
          if (p != null)
            if (b)
              e[`__${S}`] = p, zi([S]);
            else {
              let H = function(A) {
                u[C].call(this, A);
              };
              u[N] = Eu(S, e, H, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          we(e, C, p);
        else if (C === "autofocus")
          y1(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!s && (C === "__value" || C === "value" && p != null))
          e.value = e.__value = p;
        else if (C === "selected" && c)
          H1(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var E = C;
          a || (E = g1(E));
          var m = E === "defaultValue" || E === "defaultChecked";
          if (p == null && !s && !m)
            if (i[C] = null, E === "value" || E === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (E === "value") {
                let S = k.defaultValue;
                k.removeAttribute(E), k.defaultValue = S, k.value = k.__value = N ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(E), k.defaultChecked = S, k.checked = N ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else m || d.includes(E) && (s || typeof p != "string") ? e[E] = p : typeof p != "function" && we(e, E, p);
        }
    }
  }
  return l && Rt(!0), u;
}
function la(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Mu]: e.nodeName.includes("-"),
      [Hu]: e.namespaceURI === Ef
    })
  );
}
var ja = /* @__PURE__ */ new Map();
function Vu(e) {
  var t = ja.get(e.nodeName);
  if (t) return t;
  ja.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Ql(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = js(r);
  }
  return t;
}
var Fn, Tr, So, Ni, Du;
const Ti = class Ti {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, Ni);
    /** */
    rr(this, Fn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    rr(this, Tr);
    /** @type {ResizeObserverOptions} */
    rr(this, So);
    Jr(this, So, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, Fn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, Fn).set(t, r), za(this, Ni, Du).call(this).observe(t, lt(this, So)), () => {
      var o = lt(this, Fn).get(t);
      o.delete(n), o.size === 0 && (lt(this, Fn).delete(t), lt(this, Tr).unobserve(t));
    };
  }
};
Fn = new WeakMap(), Tr = new WeakMap(), So = new WeakMap(), Ni = new WeakSet(), Du = function() {
  return lt(this, Tr) ?? Jr(this, Tr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ti.entries.set(n.target, n);
        for (var r of lt(this, Fn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
_t(Ti, "entries", /* @__PURE__ */ new WeakMap());
let $s = Ti;
var V1 = /* @__PURE__ */ new $s({
  box: "border-box"
});
function Ja(e, t, n) {
  var r = V1.observe(e, () => n(e[t]));
  zt(() => (bn(() => n(e[t])), r));
}
function Qa(e, t) {
  return e === t || (e == null ? void 0 : e[Kn]) === t;
}
function Cn(e = {}, t, n, r) {
  return zt(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], bn(() => {
        e !== n(...i) && (t(e, ...i), o && Qa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      No(() => {
        i && Qa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ss(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function De(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => U(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Mr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && Wf(() => {
    el(t, r), co(n.b);
  }), jn(() => {
    const o = bn(() => n.m.map(Tf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && jn(() => {
    el(t, r), co(n.a);
  });
}
function el(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Le(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Po(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function Wt(e) {
  Xe === null && Mi(), Fr && Xe.l !== null ? A1(Xe).m.push(e) : jn(() => {
    const t = bn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ua(e) {
  Xe === null && Mi(), Wt(() => () => bn(e));
}
function D1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Xe;
  return e === null && Mi(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Po(o) ? o.slice() : [o], a = D1(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function A1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ca(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = bn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _r = [];
function qt(e, t) {
  return {
    subscribe: _e(e, t).subscribe
  };
}
function _e(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (ta(e, a) && (e = a, n)) {
      const l = !_r.length;
      for (const u of r)
        u[1](), _r.push(u, e);
      if (l) {
        for (let u = 0; u < _r.length; u += 2)
          _r[u][0](_r[u + 1]);
        _r.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = ft) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || ft), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function qn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return qt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = ft;
    const d = () => {
      if (c)
        return;
      f();
      const v = t(r ? u[0] : u, s, a);
      i ? s(v) : f = typeof v == "function" ? v : ft;
    }, h = o.map(
      (v, x) => ca(
        v,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      co(h), f(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return ca(e, (n) => t = n)(), t;
}
let Xo = !1, Ss = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ne(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(Ss in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = ca(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && Ss in n ? q(e) : g(r.source);
}
function O1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function fi(e, t) {
  return e.set(t), t;
}
function nt() {
  const e = {};
  function t() {
    ra(() => {
      for (var n in e)
        e[n].unsubscribe();
      uo(e, Ss, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function L1(e) {
  var t = Xo;
  try {
    return Xo = !1, [e(), Xo];
  } finally {
    Xo = t;
  }
}
const I1 = {
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
    I1
  );
}
const z1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      jl
    )), e.special[t](n), Xa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Xa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function st(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Vr(0) }, z1);
}
const R1 = {
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
      if (Qr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Hn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Kn || t === Qs) return !1;
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
function ct(...e) {
  return new Proxy({ props: e }, R1);
}
function tl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var N;
  var o = (n & _f) !== 0, i = !Fr || (n & xf) !== 0, s = (n & bf) !== 0, a = (n & Cf) !== 0, l = !1, u;
  s ? [u, l] = L1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Kn in e || Qs in e, f = s && (((N = Hn(e, t)) == null ? void 0 : N.set) ?? (c && t in e && ((S) => e[t] = S))) || void 0, d = (
    /** @type {V} */
    r
  ), h = !0, v = !1, x = () => (v = !0, h && (h = !1, a ? d = bn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Rf(), u = x(), f && f(u));
  var b;
  if (i)
    b = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (h = !0, v = !1, S);
    };
  else {
    var E = (o ? Mr : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= Hf, b = () => {
      var S = g(E);
      return S !== void 0 && (d = /** @type {V} */
      void 0), S === void 0 ? d : S;
    };
  }
  if (!(n & jl))
    return b;
  if (f) {
    var m = e.$$legacy;
    return function(S, H) {
      return arguments.length > 0 ? ((!i || !H || m || l) && f(H ? b() : S), S) : b();
    };
  }
  var C = !1, p = /* @__PURE__ */ ne(u), k = /* @__PURE__ */ Mr(() => {
    var S = b(), H = g(p);
    return C ? (C = !1, H) : p.v = S;
  });
  return s && g(k), o || (k.equals = na), function(S, H) {
    if (arguments.length > 0) {
      const A = H ? g(k) : i && s ? jt(S) : S;
      if (!k.equals(A)) {
        if (C = !0, G(p, A), v && d !== void 0 && (d = A), tl(k))
          return S;
        bn(() => g(k));
      }
      return S;
    }
    return tl(k) ? k.v : g(k);
  };
}
function B1(e) {
  return new Y1(e);
}
var Nn, Ut;
class Y1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    rr(this, Nn);
    /** @type {Record<string, any>} */
    rr(this, Ut);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ ne(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Qs ? !0 : (g(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return G(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Jr(this, Ut, (t.hydrate ? b1 : $u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Jr(this, Nn, o.$$events);
    for (const s of Object.keys(lt(this, Ut)))
      s === "$set" || s === "$destroy" || s === "$on" || uo(this, s, {
        get() {
          return lt(this, Ut)[s];
        },
        /** @param {any} value */
        set(a) {
          lt(this, Ut)[s] = a;
        },
        enumerable: !0
      });
    lt(this, Ut).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, lt(this, Ut).$destroy = () => {
      C1(lt(this, Ut));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, Ut).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    lt(this, Nn)[t] = lt(this, Nn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Nn)[t].push(r), () => {
      lt(this, Nn)[t] = lt(this, Nn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, Ut).$destroy();
  }
}
Nn = new WeakMap(), Ut = new WeakMap();
let Au;
typeof HTMLElement == "function" && (Au = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    _t(this, "$$ctor");
    /** Slots */
    _t(this, "$$s");
    /** @type {any} The Svelte component instance */
    _t(this, "$$c");
    /** Whether or not the custom element is connected */
    _t(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _t(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _t(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _t(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _t(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _t(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _t(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), O(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Z1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Qo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = B1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Kf(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const i of ii(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Qo(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const s = this.$$c.$on(o, i);
          this.$$l_u.set(i, s);
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
  attributeChangedCallback(t, n, r) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Qo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return ii(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Qo(e, t, n, r) {
  var i;
  const o = (i = n[e]) == null ? void 0 : i.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Z1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends Au {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ii(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ii(t).forEach((a) => {
    uo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Qo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Hn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    uo(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
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
var F1 = { value: () => {
} };
function Bi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ei(n);
}
function ei(e) {
  this._ = e;
}
function X1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ei.prototype = Bi.prototype = {
  constructor: ei,
  on: function(e, t) {
    var n = this._, r = X1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = W1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = nl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = nl(n[o], e.name, null);
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
function W1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function nl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = F1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ps = "http://www.w3.org/1999/xhtml";
const rl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ps,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Yi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), rl.hasOwnProperty(t) ? { space: rl[t], local: e } : e;
}
function K1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ps && t.documentElement.namespaceURI === Ps ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function q1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ou(e) {
  var t = Yi(e);
  return (t.local ? q1 : K1)(t);
}
function G1() {
}
function da(e) {
  return e == null ? G1 : function() {
    return this.querySelector(e);
  };
}
function U1(e) {
  typeof e != "function" && (e = da(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Xt(r, this._parents);
}
function j1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function J1() {
  return [];
}
function Lu(e) {
  return e == null ? J1 : function() {
    return this.querySelectorAll(e);
  };
}
function Q1(e) {
  return function() {
    return j1(e.apply(this, arguments));
  };
}
function eg(e) {
  typeof e == "function" ? e = Q1(e) : e = Lu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
}
function Iu(e) {
  return function() {
    return this.matches(e);
  };
}
function zu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var tg = Array.prototype.find;
function ng(e) {
  return function() {
    return tg.call(this.children, e);
  };
}
function rg() {
  return this.firstElementChild;
}
function og(e) {
  return this.select(e == null ? rg : ng(typeof e == "function" ? e : zu(e)));
}
var ig = Array.prototype.filter;
function sg() {
  return Array.from(this.children);
}
function ag(e) {
  return function() {
    return ig.call(this.children, e);
  };
}
function lg(e) {
  return this.selectAll(e == null ? sg : ag(typeof e == "function" ? e : zu(e)));
}
function ug(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function Ru(e) {
  return new Array(e.length);
}
function cg() {
  return new Xt(this._enter || this._groups.map(Ru), this._parents);
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
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new gi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new gi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function hg(e) {
  return e.__data__;
}
function vg(e, t) {
  if (!arguments.length) return Array.from(this, hg);
  var n = t ? gg : fg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = dg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, h = pg(e.call(c, c && c.__data__, u, r)), v = h.length, x = a[u] = new Array(v), b = s[u] = new Array(v), E = l[u] = new Array(d);
    n(c, f, x, b, E, h, t);
    for (var m = 0, C = 0, p, k; m < v; ++m)
      if (p = x[m]) {
        for (m >= C && (C = m + 1); !(k = b[C]) && ++C < v; ) ;
        p._next = k || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function pg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mg() {
  return new Xt(this._exit || this._groups.map(Ru), this._parents);
}
function yg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function wg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), h, v = 0; v < f; ++v)
      (h = u[v] || c[v]) && (d[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Xt(a, this._parents);
}
function _g() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function xg(e) {
  e || (e = bg);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function bg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Cg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kg() {
  return Array.from(this);
}
function Eg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function $g() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Sg() {
  return !this.node();
}
function Pg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Ng(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Tg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Hg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Dg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ag(e, t) {
  var n = Yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tg : Ng : typeof t == "function" ? n.local ? Dg : Vg : n.local ? Hg : Mg)(n, t));
}
function Bu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Og(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Lg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ig(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function zg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Ig : Lg)(e, t, n ?? "")) : Ar(this.node(), e);
}
function Ar(e, t) {
  return e.style.getPropertyValue(t) || Bu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Rg(e) {
  return function() {
    delete this[e];
  };
}
function Bg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Yg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Zg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rg : typeof t == "function" ? Yg : Bg)(e, t)) : this.node()[e];
}
function Yu(e) {
  return e.trim().split(/^|\s+/);
}
function fa(e) {
  return e.classList || new Zu(e);
}
function Zu(e) {
  this._node = e, this._names = Yu(e.getAttribute("class") || "");
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
function Fu(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Xu(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Fg(e) {
  return function() {
    Fu(this, e);
  };
}
function Xg(e) {
  return function() {
    Xu(this, e);
  };
}
function Wg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Fu : Xu)(this, e);
  };
}
function Kg(e, t) {
  var n = Yu(e + "");
  if (arguments.length < 2) {
    for (var r = fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Wg : t ? Fg : Xg)(n, t));
}
function qg() {
  this.textContent = "";
}
function Gg(e) {
  return function() {
    this.textContent = e;
  };
}
function Ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function jg(e) {
  return arguments.length ? this.each(e == null ? qg : (typeof e == "function" ? Ug : Gg)(e)) : this.node().textContent;
}
function Jg() {
  this.innerHTML = "";
}
function Qg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function eh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function th(e) {
  return arguments.length ? this.each(e == null ? Jg : (typeof e == "function" ? eh : Qg)(e)) : this.node().innerHTML;
}
function nh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rh() {
  return this.each(nh);
}
function oh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ih() {
  return this.each(oh);
}
function sh(e) {
  var t = typeof e == "function" ? e : Ou(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ah() {
  return null;
}
function lh(e, t) {
  var n = typeof e == "function" ? e : Ou(e), r = t == null ? ah : typeof t == "function" ? t : da(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ch() {
  return this.each(uh);
}
function dh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gh(e) {
  return this.select(e ? fh : dh);
}
function hh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function vh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function ph(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function mh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yh(e, t, n) {
  return function() {
    var r = this.__on, o, i = vh(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function wh(e, t, n) {
  var r = ph(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (o = 0, c = a[l]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? yh : mh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Wu(e, t, n) {
  var r = Bu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _h(e, t) {
  return function() {
    return Wu(this, e, t);
  };
}
function xh(e, t) {
  return function() {
    return Wu(this, e, t.apply(this, arguments));
  };
}
function bh(e, t) {
  return this.each((typeof t == "function" ? xh : _h)(e, t));
}
function* Ch() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ku = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Mo() {
  return new Xt([[document.documentElement]], Ku);
}
function kh() {
  return this;
}
Xt.prototype = Mo.prototype = {
  constructor: Xt,
  select: U1,
  selectAll: eg,
  selectChild: og,
  selectChildren: lg,
  filter: ug,
  data: vg,
  enter: cg,
  exit: mg,
  join: yg,
  merge: wg,
  selection: kh,
  order: _g,
  sort: xg,
  call: Cg,
  nodes: kg,
  node: Eg,
  size: $g,
  empty: Sg,
  each: Pg,
  attr: Ag,
  style: zg,
  property: Zg,
  classed: Kg,
  text: jg,
  html: th,
  raise: rh,
  lower: ih,
  append: sh,
  insert: lh,
  remove: ch,
  clone: gh,
  datum: hh,
  on: wh,
  dispatch: bh,
  [Symbol.iterator]: Ch
};
function Jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Ku);
}
function Eh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = Eh(e), t === void 0 && (t = e.currentTarget), t) {
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
const $h = { passive: !1 }, mo = { capture: !0, passive: !1 };
function as(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qu(e) {
  var t = e.document.documentElement, n = Jt(e).on("dragstart.drag", Cr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Gu(e, t) {
  var n = e.document.documentElement, r = Jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Wo = (e) => () => e;
function Ns(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
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
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ns.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Sh(e) {
  return !e.ctrlKey && !e.button;
}
function Ph() {
  return this.parentNode;
}
function Nh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Th() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mh() {
  var e = Sh, t = Ph, n = Nh, r = Th, o = {}, i = Bi("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(p) {
    p.on("mousedown.drag", h).filter(r).on("touchstart.drag", b).on("touchmove.drag", E, $h).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(p, k) {
    if (!(c || !e.call(this, p, k))) {
      var N = C(this, t.call(this, p, k), p, k, "mouse");
      N && (Jt(p.view).on("mousemove.drag", v, mo).on("mouseup.drag", x, mo), qu(p.view), as(p), u = !1, a = p.clientX, l = p.clientY, N("start", p));
    }
  }
  function v(p) {
    if (Cr(p), !u) {
      var k = p.clientX - a, N = p.clientY - l;
      u = k * k + N * N > f;
    }
    o.mouse("drag", p);
  }
  function x(p) {
    Jt(p.view).on("mousemove.drag mouseup.drag", null), Gu(p.view, u), Cr(p), o.mouse("end", p);
  }
  function b(p, k) {
    if (e.call(this, p, k)) {
      var N = p.changedTouches, S = t.call(this, p, k), H = N.length, A, D;
      for (A = 0; A < H; ++A)
        (D = C(this, S, p, k, N[A].identifier, N[A])) && (as(p), D("start", p, N[A]));
    }
  }
  function E(p) {
    var k = p.changedTouches, N = k.length, S, H;
    for (S = 0; S < N; ++S)
      (H = o[k[S].identifier]) && (Cr(p), H("drag", p, k[S]));
  }
  function m(p) {
    var k = p.changedTouches, N = k.length, S, H;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < N; ++S)
      (H = o[k[S].identifier]) && (as(p), H("end", p, k[S]));
  }
  function C(p, k, N, S, H, A) {
    var D = i.copy(), z = on(A || N, k), L, I, $;
    if (($ = n.call(p, new Ns("beforestart", {
      sourceEvent: N,
      target: d,
      identifier: H,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), S)) != null)
      return L = $.x - z[0] || 0, I = $.y - z[1] || 0, function M(_, P, T) {
        var V = z, R;
        switch (_) {
          case "start":
            o[H] = M, R = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            z = on(T || P, k), R = s;
            break;
        }
        D.call(
          _,
          p,
          new Ns(_, {
            sourceEvent: P,
            subject: $,
            target: d,
            identifier: H,
            active: R,
            x: z[0] + L,
            y: z[1] + I,
            dx: z[0] - V[0],
            dy: z[1] - V[1],
            dispatch: D
          }),
          S
        );
      };
  }
  return d.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Wo(!!p), d) : e;
  }, d.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Wo(p), d) : t;
  }, d.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Wo(p), d) : n;
  }, d.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Wo(!!p), d) : r;
  }, d.on = function() {
    var p = i.on.apply(i, arguments);
    return p === i ? d : p;
  }, d.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, d) : Math.sqrt(f);
  }, d;
}
function ga(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Uu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ho() {
}
var yo = 0.7, hi = 1 / yo, kr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hh = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Dh = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Ah = new RegExp(`^rgba\\(${kr},${kr},${kr},${wo}\\)$`), Oh = new RegExp(`^rgba\\(${mn},${mn},${mn},${wo}\\)$`), Lh = new RegExp(`^hsl\\(${wo},${mn},${mn}\\)$`), Ih = new RegExp(`^hsla\\(${wo},${mn},${mn},${wo}\\)$`), ol = {
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
ga(Ho, _o, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: il,
  // Deprecated! Use color.formatHex.
  formatHex: il,
  formatHex8: zh,
  formatHsl: Rh,
  formatRgb: sl,
  toString: sl
});
function il() {
  return this.rgb().formatHex();
}
function zh() {
  return this.rgb().formatHex8();
}
function Rh() {
  return ju(this).formatHsl();
}
function sl() {
  return this.rgb().formatRgb();
}
function _o(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? al(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = Dh.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ah.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Oh.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lh.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ih.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, t[4]) : ol.hasOwnProperty(e) ? al(ol[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function al(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ht(e, t, n, r);
}
function Bh(e) {
  return e instanceof Ho || (e = _o(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Ts(e, t, n, r) {
  return arguments.length === 1 ? Bh(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ga(Ht, Ts, Uu(Ho, {
  brighter(e) {
    return e = e == null ? hi : Math.pow(hi, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(ar(this.r), ar(this.g), ar(this.b), vi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ll,
  // Deprecated! Use color.formatHex.
  formatHex: ll,
  formatHex8: Yh,
  formatRgb: ul,
  toString: ul
}));
function ll() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Yh() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ul() {
  const e = vi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function cl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function ju(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = _o(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new sn(s, a, l, e.opacity);
}
function Zh(e, t, n, r) {
  return arguments.length === 1 ? ju(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ga(sn, Zh, Uu(Ho, {
  brighter(e) {
    return e = e == null ? hi : Math.pow(hi, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ht(
      ls(e >= 240 ? e - 240 : e + 120, o, r),
      ls(e, o, r),
      ls(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new sn(dl(this.h), qo(this.s), qo(this.l), vi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = vi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${dl(this.h)}, ${qo(this.s) * 100}%, ${qo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function dl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function qo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ls(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ju = (e) => () => e;
function Fh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Xh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Wh(e) {
  return (e = +e) == 1 ? Qu : function(t, n) {
    return n - t ? Xh(t, n, e) : Ju(isNaN(t) ? n : t);
  };
}
function Qu(e, t) {
  var n = t - e;
  return n ? Fh(e, n) : Ju(isNaN(e) ? t : e);
}
const fl = function e(t) {
  var n = Wh(t);
  function r(o, i) {
    var s = n((o = Ts(o)).r, (i = Ts(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Qu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Zn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, us = new RegExp(Ms.source, "g");
function Kh(e) {
  return function() {
    return e;
  };
}
function qh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Gh(e, t) {
  var n = Ms.lastIndex = us.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ms.exec(e)) && (o = us.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Zn(r, o) })), n = us.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? qh(l[0].x) : Kh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var gl = 180 / Math.PI, Hs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ec(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * gl,
    skewX: Math.atan(l) * gl,
    scaleX: s,
    scaleY: a
  };
}
var Go;
function Uh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Hs : ec(t.a, t.b, t.c, t.d, t.e, t.f);
}
function jh(e) {
  return e == null || (Go || (Go = document.createElementNS("http://www.w3.org/2000/svg", "g")), Go.setAttribute("transform", e), !(e = Go.transform.baseVal.consolidate())) ? Hs : (e = e.matrix, ec(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, h, v) {
    if (u !== f || c !== d) {
      var x = h.push("translate(", null, t, null, n);
      v.push({ i: x - 4, x: Zn(u, f) }, { i: x - 2, x: Zn(c, d) });
    } else (f || d) && h.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Zn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Zn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, h, v) {
    if (u !== f || c !== d) {
      var x = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: x - 4, x: Zn(u, f) }, { i: x - 2, x: Zn(c, d) });
    } else (f !== 1 || d !== 1) && h.push(o(h) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(h) {
      for (var v = -1, x = d.length, b; ++v < x; ) f[(b = d[v]).i] = b.x(h);
      return f.join("");
    };
  };
}
var Jh = tc(Uh, "px, ", "px)", "deg)"), Qh = tc(jh, ", ", ")", ")"), ev = 1e-12;
function hl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function tv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function nv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const rv = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], h = c - a, v = f - l, x = h * h + v * v, b, E;
    if (x < ev)
      E = Math.log(d / u) / t, b = function(S) {
        return [
          a + S * h,
          l + S * v,
          u * Math.exp(t * S * E)
        ];
      };
    else {
      var m = Math.sqrt(x), C = (d * d - u * u + r * x) / (2 * u * n * m), p = (d * d - u * u - r * x) / (2 * d * n * m), k = Math.log(Math.sqrt(C * C + 1) - C), N = Math.log(Math.sqrt(p * p + 1) - p);
      E = (N - k) / t, b = function(S) {
        var H = S * E, A = hl(k), D = u / (n * m) * (A * nv(t * H + k) - tv(k));
        return [
          a + D * h,
          l + D * v,
          u * A / hl(t * H + k)
        ];
      };
    }
    return b.duration = E * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Or = 0, oo = 0, to = 0, nc = 1e3, pi, io, mi = 0, cr = 0, Zi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, rc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ha() {
  return cr || (rc(ov), cr = xo.now() + Zi);
}
function ov() {
  cr = 0;
}
function yi() {
  this._call = this._time = this._next = null;
}
yi.prototype = oc.prototype = {
  constructor: yi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ha() : +n) + (t == null ? 0 : +t), !this._next && io !== this && (io ? io._next = this : pi = this, io = this), this._call = e, this._time = n, Vs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vs());
  }
};
function oc(e, t, n) {
  var r = new yi();
  return r.restart(e, t, n), r;
}
function iv() {
  ha(), ++Or;
  for (var e = pi, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function vl() {
  cr = (mi = xo.now()) + Zi, Or = oo = 0;
  try {
    iv();
  } finally {
    Or = 0, av(), cr = 0;
  }
}
function sv() {
  var e = xo.now(), t = e - mi;
  t > nc && (Zi -= t, mi = e);
}
function av() {
  for (var e, t = pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : pi = n);
  io = e, Vs(r);
}
function Vs(e) {
  if (!Or) {
    oo && (oo = clearTimeout(oo));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (oo = setTimeout(vl, e - xo.now() - Zi)), to && (to = clearInterval(to))) : (to || (mi = xo.now(), to = setInterval(sv, nc)), Or = 1, rc(vl));
  }
}
function pl(e, t, n) {
  var r = new yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var lv = Bi("start", "end", "cancel", "interrupt"), uv = [], ic = 0, ml = 1, Ds = 2, ti = 3, yl = 4, As = 5, ni = 6;
function Fi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  cv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: lv,
    tween: uv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ic
  });
}
function va(e, t) {
  var n = gn(e, t);
  if (n.state > ic) throw new Error("too late; already scheduled");
  return n;
}
function $n(e, t) {
  var n = gn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function cv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = oc(i, 0, n.time);
  function i(u) {
    n.state = ml, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, h;
    if (n.state !== ml) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === ti) return pl(s);
        h.state === yl ? (h.state = ni, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ni, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (pl(function() {
      n.state === ti && (n.state = yl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ds, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ds) {
      for (n.state = ti, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = As, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === As && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ni, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ri(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ds && r.state < As, r.state = ni, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function dv(e) {
  return this.each(function() {
    ri(this, e);
  });
}
function fv(e, t) {
  var n, r;
  return function() {
    var o = $n(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function gv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = $n(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function hv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? fv : gv)(n, e, t));
}
function pa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = $n(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function sc(e, t) {
  var n;
  return (typeof t == "number" ? Zn : t instanceof _o ? fl : (n = _o(t)) ? (t = n, fl) : Gh)(e, t);
}
function vv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function pv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function mv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function yv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function wv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function _v(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function xv(e, t) {
  var n = Yi(e), r = n === "transform" ? Qh : sc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _v : wv)(n, r, pa(this, "attr." + e, t)) : t == null ? (n.local ? pv : vv)(n) : (n.local ? yv : mv)(n, r, t));
}
function bv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Cv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function kv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Cv(e, i)), n;
  }
  return o._value = t, o;
}
function Ev(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bv(e, i)), n;
  }
  return o._value = t, o;
}
function $v(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Yi(e);
  return this.tween(n, (r.local ? kv : Ev)(r, t));
}
function Sv(e, t) {
  return function() {
    va(this, e).delay = +t.apply(this, arguments);
  };
}
function Pv(e, t) {
  return t = +t, function() {
    va(this, e).delay = t;
  };
}
function Nv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Sv : Pv)(t, e)) : gn(this.node(), t).delay;
}
function Tv(e, t) {
  return function() {
    $n(this, e).duration = +t.apply(this, arguments);
  };
}
function Mv(e, t) {
  return t = +t, function() {
    $n(this, e).duration = t;
  };
}
function Hv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tv : Mv)(t, e)) : gn(this.node(), t).duration;
}
function Vv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    $n(this, e).ease = t;
  };
}
function Dv(e) {
  var t = this._id;
  return arguments.length ? this.each(Vv(t, e)) : gn(this.node(), t).ease;
}
function Av(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    $n(this, e).ease = n;
  };
}
function Ov(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Av(this._id, e));
}
function Lv(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, h = 0; h < c; ++h)
      (d = l[h] || u[h]) && (f[h] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ln(s, this._parents, this._name, this._id);
}
function zv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Rv(e, t, n) {
  var r, o, i = zv(t) ? va : $n;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Bv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(Rv(n, e, t));
}
function Yv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Zv() {
  return this.on("end.remove", Yv(this._id));
}
function Fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = da(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Fi(u[d], t, n, d, u, gn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), h, v = gn(c, n), x = 0, b = d.length; x < b; ++x)
          (h = d[x]) && Fi(h, t, n, x, d, v);
        i.push(d), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Wv = Mo.prototype.constructor;
function Kv() {
  return new Wv(this._groups, this._parents);
}
function qv(e, t) {
  var n, r, o;
  return function() {
    var i = Ar(this, e), s = (this.style.removeProperty(e), Ar(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function ac(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Gv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ar(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Uv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ar(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ar(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function jv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = $n(this, e), u = l.on, c = l.value[i] == null ? a || (a = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Jv(e, t, n) {
  var r = (e += "") == "transform" ? Jh : sc;
  return t == null ? this.styleTween(e, qv(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, Uv(e, r, pa(this, "style." + e, t))).each(jv(this._id, e)) : this.styleTween(e, Gv(e, r, t), n).on("end.style." + e, null);
}
function Qv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function e0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Qv(e, s, n)), r;
  }
  return i._value = t, i;
}
function t0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, e0(e, t, n ?? ""));
}
function n0(e) {
  return function() {
    this.textContent = e;
  };
}
function r0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function o0(e) {
  return this.tween("text", typeof e == "function" ? r0(pa(this, "text", e)) : n0(e == null ? "" : e + ""));
}
function i0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function s0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && i0(o)), t;
  }
  return r._value = e, r;
}
function a0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, s0(e));
}
function l0() {
  for (var e = this._name, t = this._id, n = lc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = gn(l, t);
        Fi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
}
function u0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = $n(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var c0 = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function lc() {
  return ++c0;
}
var Pn = Mo.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Fv,
  selectAll: Xv,
  selectChild: Pn.selectChild,
  selectChildren: Pn.selectChildren,
  filter: Lv,
  merge: Iv,
  selection: Kv,
  transition: l0,
  call: Pn.call,
  nodes: Pn.nodes,
  node: Pn.node,
  size: Pn.size,
  empty: Pn.empty,
  each: Pn.each,
  on: Bv,
  attr: xv,
  attrTween: $v,
  style: Jv,
  styleTween: t0,
  text: o0,
  textTween: a0,
  remove: Zv,
  tween: hv,
  delay: Nv,
  duration: Hv,
  ease: Dv,
  easeVarying: Ov,
  end: u0,
  [Symbol.iterator]: Pn[Symbol.iterator]
};
function d0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var f0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: d0
};
function g0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function h0(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = lc(), (n = f0).time = ha(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Fi(l, e, t, u, s, n || g0(l, t));
  return new Ln(r, this._parents, e, t);
}
Mo.prototype.interrupt = dv;
Mo.prototype.transition = h0;
const Uo = (e) => () => e;
function v0(e, {
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
function Tn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Tn.prototype = {
  constructor: Tn,
  scale: function(e) {
    return e === 1 ? this : new Tn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Tn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Xi = new Tn(1, 0, 0);
uc.prototype = Tn.prototype;
function uc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Xi;
  return e.__zoom;
}
function cs(e) {
  e.stopImmediatePropagation();
}
function no(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function p0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function m0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function wl() {
  return this.__zoom || Xi;
}
function y0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function w0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function cc() {
  var e = p0, t = m0, n = _0, r = y0, o = w0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rv, u = Bi("start", "zoom", "end"), c, f, d, h = 500, v = 150, x = 0, b = 10;
  function E($) {
    $.property("__zoom", wl).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function($, M, _, P) {
    var T = $.selection ? $.selection() : $;
    T.property("__zoom", wl), $ !== T ? k($, M, _, P) : T.interrupt().each(function() {
      N(this, arguments).event(P).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, E.scaleBy = function($, M, _, P) {
    E.scaleTo($, function() {
      var T = this.__zoom.k, V = typeof M == "function" ? M.apply(this, arguments) : M;
      return T * V;
    }, _, P);
  }, E.scaleTo = function($, M, _, P) {
    E.transform($, function() {
      var T = t.apply(this, arguments), V = this.__zoom, R = _ == null ? p(T) : typeof _ == "function" ? _.apply(this, arguments) : _, Y = V.invert(R), K = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(C(m(V, K), R, Y), T, s);
    }, _, P);
  }, E.translateBy = function($, M, _, P) {
    E.transform($, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), s);
    }, null, P);
  }, E.translateTo = function($, M, _, P, T) {
    E.transform($, function() {
      var V = t.apply(this, arguments), R = this.__zoom, Y = P == null ? p(V) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Xi.translate(Y[0], Y[1]).scale(R.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), V, s);
    }, P, T);
  };
  function m($, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === $.k ? $ : new Tn(M, $.x, $.y);
  }
  function C($, M, _) {
    var P = M[0] - _[0] * $.k, T = M[1] - _[1] * $.k;
    return P === $.x && T === $.y ? $ : new Tn($.k, P, T);
  }
  function p($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function k($, M, _, P) {
    $.on("start.zoom", function() {
      N(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var T = this, V = arguments, R = N(T, V).event(P), Y = t.apply(T, V), K = _ == null ? p(Y) : typeof _ == "function" ? _.apply(T, V) : _, re = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), j = T.__zoom, W = typeof M == "function" ? M.apply(T, V) : M, se = l(j.invert(K).concat(re / j.k), W.invert(K).concat(re / W.k));
      return function(ve) {
        if (ve === 1) ve = W;
        else {
          var he = se(ve), te = re / he[2];
          ve = new Tn(te, K[0] - he[0] * te, K[1] - he[1] * te);
        }
        R.zoom(null, ve);
      };
    });
  }
  function N($, M, _) {
    return !_ && $.__zooming || new S($, M);
  }
  function S($, M) {
    this.that = $, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply($, M), this.taps = 0;
  }
  S.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, M) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var M = Jt(this.that).datum();
      u.call(
        $,
        this.that,
        new v0($, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function H($, ...M) {
    if (!e.apply(this, arguments)) return;
    var _ = N(this, M).event($), P = this.__zoom, T = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), V = on($);
    if (_.wheel)
      (_.mouse[0][0] !== V[0] || _.mouse[0][1] !== V[1]) && (_.mouse[1] = P.invert(_.mouse[0] = V)), clearTimeout(_.wheel);
    else {
      if (P.k === T) return;
      _.mouse = [V, P.invert(V)], ri(this), _.start();
    }
    no($), _.wheel = setTimeout(R, v), _.zoom("mouse", n(C(m(P, T), _.mouse[0], _.mouse[1]), _.extent, s));
    function R() {
      _.wheel = null, _.end();
    }
  }
  function A($, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var _ = $.currentTarget, P = N(this, M, !0).event($), T = Jt($.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", re, !0), V = on($, _), R = $.clientX, Y = $.clientY;
    qu($.view), cs($), P.mouse = [V, this.__zoom.invert(V)], ri(this), P.start();
    function K(j) {
      if (no(j), !P.moved) {
        var W = j.clientX - R, se = j.clientY - Y;
        P.moved = W * W + se * se > x;
      }
      P.event(j).zoom("mouse", n(C(P.that.__zoom, P.mouse[0] = on(j, _), P.mouse[1]), P.extent, s));
    }
    function re(j) {
      T.on("mousemove.zoom mouseup.zoom", null), Gu(j.view, P.moved), no(j), P.event(j).end();
    }
  }
  function D($, ...M) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, P = on($.changedTouches ? $.changedTouches[0] : $, this), T = _.invert(P), V = _.k * ($.shiftKey ? 0.5 : 2), R = n(C(m(_, V), P, T), t.apply(this, M), s);
      no($), a > 0 ? Jt(this).transition().duration(a).call(k, R, P, $) : Jt(this).call(E.transform, R, P, $);
    }
  }
  function z($, ...M) {
    if (e.apply(this, arguments)) {
      var _ = $.touches, P = _.length, T = N(this, M, $.changedTouches.length === P).event($), V, R, Y, K;
      for (cs($), R = 0; R < P; ++R)
        Y = _[R], K = on(Y, this), K = [K, this.__zoom.invert(K), Y.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== K[2] && (T.touch1 = K, T.taps = 0) : (T.touch0 = K, V = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), V && (T.taps < 2 && (f = K[0], c = setTimeout(function() {
        c = null;
      }, h)), ri(this), T.start());
    }
  }
  function L($, ...M) {
    if (this.__zooming) {
      var _ = N(this, M).event($), P = $.changedTouches, T = P.length, V, R, Y, K;
      for (no($), V = 0; V < T; ++V)
        R = P[V], Y = on(R, this), _.touch0 && _.touch0[2] === R.identifier ? _.touch0[0] = Y : _.touch1 && _.touch1[2] === R.identifier && (_.touch1[0] = Y);
      if (R = _.that.__zoom, _.touch1) {
        var re = _.touch0[0], j = _.touch0[1], W = _.touch1[0], se = _.touch1[1], ve = (ve = W[0] - re[0]) * ve + (ve = W[1] - re[1]) * ve, he = (he = se[0] - j[0]) * he + (he = se[1] - j[1]) * he;
        R = m(R, Math.sqrt(ve / he)), Y = [(re[0] + W[0]) / 2, (re[1] + W[1]) / 2], K = [(j[0] + se[0]) / 2, (j[1] + se[1]) / 2];
      } else if (_.touch0) Y = _.touch0[0], K = _.touch0[1];
      else return;
      _.zoom("touch", n(C(R, Y, K), _.extent, s));
    }
  }
  function I($, ...M) {
    if (this.__zooming) {
      var _ = N(this, M).event($), P = $.changedTouches, T = P.length, V, R;
      for (cs($), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), V = 0; V < T; ++V)
        R = P[V], _.touch0 && _.touch0[2] === R.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === R.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (R = on(R, this), Math.hypot(f[0] - R[0], f[1] - R[1]) < b)) {
        var Y = Jt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : Uo(+$), E) : r;
  }, E.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Uo(!!$), E) : e;
  }, E.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : Uo(!!$), E) : o;
  }, E.extent = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : Uo([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), E) : t;
  }, E.scaleExtent = function($) {
    return arguments.length ? (i[0] = +$[0], i[1] = +$[1], E) : [i[0], i[1]];
  }, E.translateExtent = function($) {
    return arguments.length ? (s[0][0] = +$[0][0], s[1][0] = +$[1][0], s[0][1] = +$[0][1], s[1][1] = +$[1][1], E) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, E.constrain = function($) {
    return arguments.length ? (n = $, E) : n;
  }, E.duration = function($) {
    return arguments.length ? (a = +$, E) : a;
  }, E.interpolate = function($) {
    return arguments.length ? (l = $, E) : l;
  }, E.on = function() {
    var $ = u.on.apply(u, arguments);
    return $ === u ? E : $;
  }, E.clickDistance = function($) {
    return arguments.length ? (x = ($ = +$) * $, E) : Math.sqrt(x);
  }, E.tapDistance = function($) {
    return arguments.length ? (b = +$, E) : b;
  }, E;
}
const Lr = {
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
var dr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(dr || (dr = {}));
var Gn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Gn || (Gn = {}));
var _i;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(_i || (_i = {}));
const Os = {
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
var bo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(bo || (bo = {}));
var ke;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ke || (ke = {}));
const _l = {
  [ke.Left]: ke.Right,
  [ke.Right]: ke.Left,
  [ke.Top]: ke.Bottom,
  [ke.Bottom]: ke.Top
};
function x0(e, t) {
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
function xl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function b0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const C0 = (e) => "id" in e && "source" in e && "target" in e, k0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ma = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Vo = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, E0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ma(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? xi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Wi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ki(n);
}, Do = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = xi(r);
      n = Wi(n, o);
    }
  }), Ki(n);
}, dc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Ao(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, x = Co(a, zr(u)), b = (h ?? 0) * (v ?? 0), E = i && x > 0;
    (!u.internals.handleBounds || E || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, Ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function bl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Cl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Do(e), l = wa(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function $0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Lr.error005());
    else {
      const h = a.measured.width, v = a.measured.height;
      h && v && (f = [
        [l, u],
        [l + h, u + v]
      ]);
    }
  else a && Rr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Rr(f) ? fr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Lr.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function fc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const h = i.has(d.id), v = !h && d.parentId && s.find((x) => x.id === d.parentId);
    (h || v) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Ls(s, l);
  for (const d of l)
    a.has(d.id) && !c.find((v) => v.id === d.id) && c.push(d);
  if (!o)
    return {
      edges: c,
      nodes: s
    };
  const f = await o({
    nodes: s,
    edges: c
  });
  return typeof f == "boolean" ? f ? { edges: c, nodes: s } : { edges: [], nodes: [] } : f;
}
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function gc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const kl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, hc = (e, t, n = 15, r = 40) => {
  const o = kl(e.x, r, t.width - r) * n, i = kl(e.y, r, t.height - r) * n;
  return [o, i];
}, Wi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Is = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ki = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), zr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ma(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, xi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ma(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, vc = (e, t) => Ki(Wi(Is(e), Is(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Mn(e.width) && Mn(e.height) && Mn(e.x) && Mn(e.y), Mn = (e) => !isNaN(e) && isFinite(e), S0 = (e, t) => {
}, ya = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ao = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ya(a, s) : a;
}, pc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), wa = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Ir(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, h = n / 2 - f * u;
  return { x: d, y: h, zoom: u };
}, bi = () => {
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
function mc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function P0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function ds(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Dn(e), a = Ao({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ya(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _a = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), N0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, T0 = ["INPUT", "SELECT", "TEXTAREA"];
function M0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : T0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const yc = (e) => "clientX" in e, Dn = (e, t) => {
  var i, s;
  const n = yc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, $l = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ..._a(s)
    };
  });
};
function H0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Sl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function wc({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, curvature: s = 0.25 }) {
  const [a, l] = Sl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = Sl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, h, v] = H0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${a},${l} ${u},${c} ${r},${o}`,
    f,
    d,
    h,
    v
  ];
}
function _c({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function V0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function D0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Wi(xi(e), xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(s, Ki(i)) > 0;
}
const A0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, O0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), L0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return C0(e) ? n = { ...e } : n = {
    ...e,
    id: A0(e)
  }, O0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function zs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = _c({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Pl = {
  [ke.Left]: { x: -1, y: 0 },
  [ke.Right]: { x: 1, y: 0 },
  [ke.Top]: { x: 0, y: -1 },
  [ke.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = ke.Bottom, target: n }) => t === ke.Left || t === ke.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Nl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function z0({ source: e, sourcePosition: t = ke.Bottom, target: n, targetPosition: r = ke.Top, center: o, offset: i }) {
  const s = Pl[t], a = Pl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = I0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let h = [], v, x;
  const b = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, C, p, k] = _c({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? m, x = o.y ?? C;
    const S = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], H = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    s[f] === d ? h = f === "x" ? S : H : h = f === "x" ? H : S;
  } else {
    const S = [{ x: l.x, y: u.y }], H = [{ x: u.x, y: l.y }];
    if (f === "x" ? h = s.x === d ? H : S : h = s.y === d ? S : H, t === r) {
      const I = Math.abs(e[f] - n[f]);
      if (I <= i) {
        const $ = Math.min(i - 1, i - I);
        s[f] === d ? b[f] = (l[f] > e[f] ? -1 : 1) * $ : E[f] = (u[f] > n[f] ? -1 : 1) * $;
      }
    }
    if (t !== r) {
      const I = f === "x" ? "y" : "x", $ = s[f] === a[I], M = l[I] > u[I], _ = l[I] < u[I];
      (s[f] === 1 && (!$ && M || $ && _) || s[f] !== 1 && (!$ && _ || $ && M)) && (h = f === "x" ? S : H);
    }
    const A = { x: l.x + b.x, y: l.y + b.y }, D = { x: u.x + E.x, y: u.y + E.y }, z = Math.max(Math.abs(A.x - h[0].x), Math.abs(D.x - h[0].x)), L = Math.max(Math.abs(A.y - h[0].y), Math.abs(D.y - h[0].y));
    z >= L ? (v = (A.x + D.x) / 2, x = h[0].y) : (v = h[0].x, x = (A.y + D.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...h,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], v, x, p, k];
}
function R0(e, t, n, r) {
  const o = Math.min(Nl(e, t) / 2, Nl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Ci({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, h, v] = z0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, E, m) => {
    let C = "";
    return m > 0 && m < c.length - 1 ? C = R0(c[m - 1], E, c[m + 1], s) : C = `${m === 0 ? "M" : "L"}${E.x} ${E.y}`, b += C, b;
  }, ""), f, d, h, v];
}
function Tl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function B0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Tl(t) || !Tl(n))
    return null;
  const r = t.internals.handleBounds || Ml(t.handles), o = n.internals.handleBounds || Ml(n.handles), i = Hl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Hl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === dr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Lr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || ke.Bottom, l = (s == null ? void 0 : s.position) || ke.Top, u = ko(t, i, a), c = ko(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ml(e) {
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
function ko(e, t, n = ke.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ke.Top:
      return { x: o + s / 2, y: i };
    case ke.Right:
      return { x: o + s, y: i + a / 2 };
    case ke.Bottom:
      return { x: o + s / 2, y: i + a };
    case ke.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Hl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Rs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Y0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Rs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Z0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ke.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ke.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ke.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const xa = {
  nodeOrigin: [0, 0],
  nodeExtent: wi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, F0 = {
  ...xa,
  checkEquality: !0
};
function ba(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function X0(e, t, n) {
  const r = ba(xa, n);
  for (const o of e.values())
    if (o.parentId)
      Ca(o, e, t, r);
    else {
      const i = Vo(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, nr(o));
      o.internals.positionAbsolute = a;
    }
}
function xc(e, t, n, r) {
  var a, l;
  const o = ba(F0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = Vo(u, o.nodeOrigin), d = Rr(u.extent) ? u.extent : o.nodeExtent, h = fr(f, d, nr(u));
      c = {
        ...o.defaults,
        ...u,
        measured: {
          width: (a = u.measured) == null ? void 0 : a.width,
          height: (l = u.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: bc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ca(c, t, n, r);
  }
}
function W0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ca(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ba(xa, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  W0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = K0(e, l, i, s, u), { positionAbsolute: h } = e.internals, v = c !== h.x || f !== h.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : h,
      z: d
    }
  });
}
function bc(e, t) {
  return (Mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function K0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Vo(e, n), u = Rr(e.extent) ? fr(l, e.extent, a) : l;
  let c = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = gc(c, a, t));
  const f = bc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function q0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? zr(l), c = vc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var C;
    const c = l.internals.positionAbsolute, f = nr(l), d = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), b = Math.max(f.height, Math.round(a.height)), E = (x - f.width) * d[0], m = (b - f.height) * d[1];
    (h > 0 || v > 0 || E || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + E,
        y: l.position.y - v + m
      }
    }), (C = n.get(u)) == null || C.forEach((p) => {
      e.some((k) => k.id === p.id) || o.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + h,
          y: p.position.y + v
        }
      });
    })), (f.width < a.width || f.height < a.height || h || v) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? d[0] * h - E : 0),
        height: b + (v ? d[1] * v - m : 0)
      }
    });
  }), o;
}
function G0(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), f = [];
  for (const d of e.values()) {
    const h = t.get(d.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = _a(d.nodeElement), x = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (x || !h.internals.handleBounds || d.force))) {
      const E = d.nodeElement.getBoundingClientRect(), m = Rr(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = gc(C, v, t.get(h.parentId)) : m && (C = fr(C, m, v));
      const p = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: $l("source", d.nodeElement, E, c, h.id),
            target: $l("target", d.nodeElement, E, c, h.id)
          }
        }
      };
      t.set(h.id, p), h.parentId && Ca(p, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: v
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: zr(p, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = q0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function U0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function Vl(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Cc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Vl("source", l, c, e, o, s), Vl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function j0(e, t) {
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
function kc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : kc(n, t) : !1;
}
function Dl(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function J0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !kc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function fs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, a, l;
  const o = [];
  for (const [u, c] of t) {
    const f = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    f && o.push({
      ...f,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((l = t.get(e)) == null ? void 0 : l.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Q0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, h = !1;
  function v({ noDragClassName: b, handleSelector: E, domNode: m, isSelectable: C, nodeId: p, nodeClickDistance: k = 0 }) {
    d = Jt(m);
    function N({ x: D, y: z }, L) {
      const { nodeLookup: I, nodeExtent: $, snapGrid: M, snapToGrid: _, nodeOrigin: P, onNodeDrag: T, onSelectionDrag: V, onError: R, updateNodePositions: Y } = t();
      i = { x: D, y: z };
      let K = !1, re = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && $) {
        const j = Do(a);
        re = Is(j);
      }
      for (const [j, W] of a) {
        if (!I.has(j))
          continue;
        let se = { x: D - W.distance.x, y: z - W.distance.y };
        _ && (se = ya(se, M));
        let ve = [
          [$[0][0], $[0][1]],
          [$[1][0], $[1][1]]
        ];
        if (a.size > 1 && $ && !W.extent) {
          const { positionAbsolute: Ae } = W.internals, le = Ae.x - re.x + $[0][0], ce = Ae.x + W.measured.width - re.x2 + $[1][0], ye = Ae.y - re.y + $[0][1], Pe = Ae.y + W.measured.height - re.y2 + $[1][1];
          ve = [
            [le, ye],
            [ce, Pe]
          ];
        }
        const { position: he, positionAbsolute: te } = $0({
          nodeId: j,
          nextPosition: se,
          nodeLookup: I,
          nodeExtent: ve,
          nodeOrigin: P,
          onError: R
        });
        K = K || W.position.x !== he.x || W.position.y !== he.y, W.position = he, W.internals.positionAbsolute = te;
      }
      if (K && (Y(a, !0), L && (r || T || !p && V))) {
        const [j, W] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(L, a, j, W), T == null || T(L, j, W), p || V == null || V(L, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: D, panBy: z, autoPanSpeed: L, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [$, M] = hc(u, c, L);
      ($ !== 0 || M !== 0) && (i.x = (i.x ?? 0) - $ / D[2], i.y = (i.y ?? 0) - M / D[2], await z({ x: $, y: M }) && N(i, null)), s = requestAnimationFrame(S);
    }
    function H(D) {
      var K;
      const { nodeLookup: z, multiSelectionActive: L, nodesDraggable: I, transform: $, snapGrid: M, snapToGrid: _, selectNodesOnDrag: P, onNodeDragStart: T, onSelectionDragStart: V, unselectNodesAndEdges: R } = t();
      f = !0, (!P || !C) && !L && p && ((K = z.get(p)) != null && K.selected || R()), C && P && p && (e == null || e(p));
      const Y = ds(D.sourceEvent, { transform: $, snapGrid: M, snapToGrid: _, containerBounds: c });
      if (i = Y, a = J0(z, I, Y, p), a.size > 0 && (n || T || !p && V)) {
        const [re, j] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: z
        });
        n == null || n(D.sourceEvent, a, re, j), T == null || T(D.sourceEvent, re, j), p || V == null || V(D.sourceEvent, j);
      }
    }
    const A = Mh().clickDistance(k).on("start", (D) => {
      const { domNode: z, nodeDragThreshold: L, transform: I, snapGrid: $, snapToGrid: M } = t();
      c = (z == null ? void 0 : z.getBoundingClientRect()) || null, h = !1, L === 0 && H(D), i = ds(D.sourceEvent, { transform: I, snapGrid: $, snapToGrid: M, containerBounds: c }), u = Dn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: z, transform: L, snapGrid: I, snapToGrid: $, nodeDragThreshold: M, nodeLookup: _ } = t(), P = ds(D.sourceEvent, { transform: L, snapGrid: I, snapToGrid: $, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !_.has(p)) && (h = !0), !h) {
        if (!l && z && f && (l = !0, S()), !f) {
          const T = P.xSnapped - (i.x ?? 0), V = P.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + V * V) > M && H(D);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && a && f && (u = Dn(D.sourceEvent, c), N(P, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: L, onNodeDragStop: I, onSelectionDragStop: $ } = t();
        if (L(a, !1), o || I || !p && $) {
          const [M, _] = fs({
            nodeId: p,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o == null || o(D.sourceEvent, a, M, _), I == null || I(D.sourceEvent, M, _), p || $ == null || $(D.sourceEvent, _);
        }
      }
    }).filter((D) => {
      const z = D.target;
      return !D.button && (!b || !Dl(z, `.${b}`, m)) && (!E || Dl(z, E, m));
    });
    d.call(A);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: x
  };
}
function ep(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Co(o, zr(i)) > 0 && r.push(i);
  return r;
}
const tp = 250;
function np(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = ep(e, n, t + tp);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: h } = ko(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      v > t || (v < i ? (o = [{ ...f, x: d, y: h }], i = v) : v === i && o.push({ ...f, x: d, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((c) => c.type === u) ?? o[0];
  }
  return o[0];
}
function Ec(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...ko(s, l, l.position, !0) } : l;
}
function $c(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function rp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function op(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: h, onConnectStart: v, onConnect: x, onConnectEnd: b, isValidConnection: E = Sc, onReconnectEnd: m, updateConnection: C, getTransform: p, getFromHandle: k, autoPanSpeed: N }) {
  const S = N0(e.target);
  let H = 0, A;
  const { x: D, y: z } = Dn(e), L = S == null ? void 0 : S.elementFromPoint(D, z), I = $c(i, L), $ = a == null ? void 0 : a.getBoundingClientRect();
  if (!$ || !I)
    return;
  const M = Ec(o, I, r, l, t);
  if (!M)
    return;
  let _ = Dn(e, $), P = !1, T = null, V = !1, R = null;
  function Y() {
    if (!c || !$)
      return;
    const [te, Ae] = hc(_, $, N);
    d({ x: te, y: Ae }), H = requestAnimationFrame(Y);
  }
  const K = {
    ...M,
    nodeId: o,
    type: I,
    position: M.position
  }, re = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: ko(re, K, ke.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: re,
    to: _,
    toHandle: null,
    toPosition: _l[K.position],
    toNode: null
  };
  C(W);
  let se = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: I });
  function ve(te) {
    if (!k() || !K) {
      he(te);
      return;
    }
    const Ae = p();
    _ = Dn(te, $), A = np(Ao(_, Ae, !1, [1, 1]), n, l, K), P || (Y(), P = !0);
    const le = Pc(te, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: E,
      doc: S,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    R = le.handleDomNode, T = le.connection, V = rp(!!A, le.isValid);
    const ce = {
      // from stays the same
      ...se,
      isValid: V,
      to: A && V ? pc({ x: A.x, y: A.y }, Ae) : _,
      toHandle: le.toHandle,
      toPosition: V && le.toHandle ? le.toHandle.position : _l[K.position],
      toNode: le.toHandle ? l.get(le.toHandle.nodeId) : null
    };
    V && A && se.toHandle && ce.toHandle && se.toHandle.type === ce.toHandle.type && se.toHandle.nodeId === ce.toHandle.nodeId && se.toHandle.id === ce.toHandle.id && se.to.x === ce.to.x && se.to.y === ce.to.y || (C(ce), se = ce);
  }
  function he(te) {
    (A || R) && T && V && (x == null || x(T));
    const { inProgress: Ae, ...le } = se, ce = {
      ...le,
      toPosition: se.toHandle ? se.toPosition : null
    };
    b == null || b(te, ce), i && (m == null || m(te, ce)), h(), cancelAnimationFrame(H), P = !1, V = !1, T = null, R = null, S.removeEventListener("mousemove", ve), S.removeEventListener("mouseup", he), S.removeEventListener("touchmove", ve), S.removeEventListener("touchend", he);
  }
  S.addEventListener("mousemove", ve), S.addEventListener("mouseup", he), S.addEventListener("touchmove", ve), S.addEventListener("touchend", he);
}
function Pc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: v } = Dn(e), x = s.elementFromPoint(h, v), b = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, E = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const m = $c(void 0, b), C = b.getAttribute("data-nodeid"), p = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), N = b.classList.contains("connectableend");
    if (!C || !m)
      return E;
    const S = {
      source: f ? C : r,
      sourceHandle: f ? p : o,
      target: f ? r : C,
      targetHandle: f ? o : p
    };
    E.connection = S;
    const A = k && N && (n === dr.Strict ? f && m === "source" || !f && m === "target" : C !== r || p !== o);
    E.isValid = A && u(S), E.toHandle = Ec(C, m, p, c, n, !1);
  }
  return E;
}
const ip = {
  onPointerDown: op,
  isValid: Pc
};
function sp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: h = !1 }) {
    const v = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = p[2] * Math.pow(2, k);
      t.scaleTo(N);
    };
    let x = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (x = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, E = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], N = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(p[2], Math.log(p[2])) * (h ? -1 : 1), H = {
        x: p[0] - N[0] * S,
        y: p[1] - N[1] * S
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: p[2]
      }, A, a);
    }, m = cc().on("start", b).on("zoom", f ? E : null).on("zoom.wheel", d ? v : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: on
  };
}
const ap = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), gs = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Nc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), hs = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Tc = (e) => {
  const t = e.ctrlKey && bi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function lp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (xr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const b = on(c), E = Tc(c), m = f * Math.pow(2, E);
      r.scaleTo(n, m, b, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let h = o === Gn.Vertical ? 0 : c.deltaX * d, v = o === Gn.Horizontal ? 0 : c.deltaY * d;
    !bi() && c.shiftKey && o !== Gn.Vertical && (h = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = qi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function up({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || xr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function cp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = qi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function dp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Nc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, qi(i.transform)));
  };
}
function fp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Nc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && ap(e.prevViewport, s.transform))) {
      const l = qi(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function gp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (xr(c, `${u}-flow__node`) || xr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || xr(c, a) && c.type === "wheel" || xr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function hp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = cc().clickDistance(!Mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Jt(e).call(d);
  C({
    x: i.x,
    y: i.y,
    zoom: Ir(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = h.on("wheel.zoom"), x = h.on("dblclick.zoom");
  d.wheelDelta(Tc);
  function b(L, I) {
    return h ? new Promise(($) => {
      d == null || d.transform(hs(h, I == null ? void 0 : I.duration, () => $(!0)), L);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: L, noPanClassName: I, onPaneContextMenu: $, userSelectionActive: M, panOnScroll: _, panOnDrag: P, panOnScrollMode: T, panOnScrollSpeed: V, preventScrolling: R, zoomOnPinch: Y, zoomOnScroll: K, zoomOnDoubleClick: re, zoomActivationKeyPressed: j, lib: W, onTransformChange: se }) {
    M && !c.isZoomingOrPanning && m();
    const he = _ && !j && !M ? lp({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: h,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: V,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : up({
      noWheelClassName: L,
      preventScrolling: R,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", he, { passive: !1 }), !M) {
      const Ae = cp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ae);
      const le = dp({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!$,
        onPanZoom: s,
        onTransformChange: se
      });
      d.on("zoom", le);
      const ce = fp({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: _,
        onPaneContextMenu: $,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", ce);
    }
    const te = gp({
      zoomActivationKeyPressed: j,
      panOnDrag: P,
      zoomOnScroll: K,
      panOnScroll: _,
      zoomOnDoubleClick: re,
      zoomOnPinch: Y,
      userSelectionActive: M,
      noPanClassName: I,
      noWheelClassName: L,
      lib: W
    });
    d.filter(te), re ? h.on("dblclick.zoom", x) : h.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function C(L, I, $) {
    const M = gs(L), _ = d == null ? void 0 : d.constrain()(M, I, $);
    return _ && await b(_), new Promise((P) => P(_));
  }
  async function p(L, I) {
    const $ = gs(L);
    return await b($, I), new Promise((M) => M($));
  }
  function k(L) {
    if (h) {
      const I = gs(L), $ = h.property("__zoom");
      ($.k !== L.zoom || $.x !== L.x || $.y !== L.y) && (d == null || d.transform(h, I, null, { sync: !0 }));
    }
  }
  function N() {
    const L = h ? uc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, I) {
    return h ? new Promise(($) => {
      d == null || d.scaleTo(hs(h, I == null ? void 0 : I.duration, () => $(!0)), L);
    }) : Promise.resolve(!1);
  }
  function H(L, I) {
    return h ? new Promise(($) => {
      d == null || d.scaleBy(hs(h, I == null ? void 0 : I.duration, () => $(!0)), L);
    }) : Promise.resolve(!1);
  }
  function A(L) {
    d == null || d.scaleExtent(L);
  }
  function D(L) {
    d == null || d.translateExtent(L);
  }
  function z(L) {
    const I = !Mn(L) || L < 0 ? 0 : L;
    d == null || d.clickDistance(I);
  }
  return {
    update: E,
    destroy: m,
    setViewport: p,
    setViewportConstrained: C,
    getViewport: N,
    scaleTo: S,
    scaleBy: H,
    setScaleExtent: A,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: z
  };
}
var Al;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Al || (Al = {}));
var vp = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function Qn(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(re, "$connectable", n), i = () => J(he, "$connectionRadius", n), s = () => J(se, "$domNode", n), a = () => J(ve, "$nodeLookup", n), l = () => J(W, "$connectionMode", n), u = () => J(le, "$lib", n), c = () => J(We, "$autoPanOnConnect", n), f = () => J(Ne, "$flowId", n), d = () => J(Ae, "$isValidConnectionStore", n), h = () => J(ye, "$onedgecreate", n), v = () => J(ie, "$onConnectAction", n), x = () => J(pe, "$onConnectStartAction", n), b = () => J(Se, "$onConnectEndAction", n), E = () => J(te, "$viewport", n), m = () => J(at, "$connection", n), C = () => J(je, "$edges", n), p = () => J(Ye, "$connectionLookup", n), k = /* @__PURE__ */ ne(), N = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), H = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), D = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne(), L = /* @__PURE__ */ ne();
  let I = w(t, "id", 12, void 0), $ = w(t, "type", 12, "source"), M = w(t, "position", 28, () => ke.Top), _ = w(t, "style", 12, void 0), P = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), V = w(t, "ondisconnect", 12, void 0), R = w(t, "isConnectable", 12, void 0), Y = w(t, "class", 12, void 0);
  const K = lr("svelteflow__node_id"), re = lr("svelteflow__node_connectable"), j = Ue(), {
    connectionMode: W,
    domNode: se,
    nodeLookup: ve,
    connectionRadius: he,
    viewport: te,
    isValidConnection: Ae,
    lib: le,
    addEdge: ce,
    onedgecreate: ye,
    panBy: Pe,
    cancelConnection: Ve,
    updateConnection: ee,
    autoPanOnConnect: We,
    edges: je,
    connectionLookup: Ye,
    onconnect: ie,
    onconnectstart: pe,
    onconnectend: Se,
    flowId: Ne,
    connection: at
  } = j;
  function ut(Te) {
    const rt = yc(Te);
    (rt && Te.button === 0 || !rt) && ip.onPointerDown(Te, {
      handleId: g(S),
      nodeId: K,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: P() ?? d(),
      updateConnection: ee,
      cancelConnection: Ve,
      panBy: Pe,
      onConnect: (ze) => {
        var ot;
        const Oe = h() ? h()(ze) : ze;
        Oe && (ce(Oe), (ot = v()) == null || ot(ze));
      },
      onConnectStart: (ze, Oe) => {
        var ot;
        (ot = x()) == null || ot(ze, {
          nodeId: Oe.nodeId,
          handleId: Oe.handleId,
          handleType: Oe.handleType
        });
      },
      onConnectEnd: (ze, Oe) => {
        var ot;
        (ot = b()) == null || ot(ze, Oe);
      },
      getTransform: () => [
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let Q = /* @__PURE__ */ ne(null), Ze = /* @__PURE__ */ ne();
  ge(() => U($()), () => {
    G(k, $() === "target");
  }), ge(
    () => (U(R()), o()),
    () => {
      G(N, R() !== void 0 ? R() : o());
    }
  ), ge(() => U(I()), () => {
    G(S, I() || null);
  }), ge(
    () => (U(T()), U(V()), C(), p(), U($()), U(I())),
    () => {
      (T() || V()) && (C(), G(Ze, p().get(`${K}-${$()}${I() ? `-${I()}` : ""}`)));
    }
  ), ge(
    () => (g(Q), g(Ze), U(V()), U(T())),
    () => {
      if (g(Q) && !x0(g(Ze), g(Q))) {
        const Te = g(Ze) ?? /* @__PURE__ */ new Map();
        xl(g(Q), Te, V()), xl(Te, g(Q), T());
      }
      G(Q, g(Ze) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => m(), () => {
    G(H, !!m().fromHandle);
  }), ge(
    () => (m(), U($()), g(S)),
    () => {
      var Te, rt, ze;
      G(A, ((Te = m().fromHandle) == null ? void 0 : Te.nodeId) === K && ((rt = m().fromHandle) == null ? void 0 : rt.type) === $() && ((ze = m().fromHandle) == null ? void 0 : ze.id) === g(S));
    }
  ), ge(
    () => (m(), U($()), g(S)),
    () => {
      var Te, rt, ze;
      G(D, ((Te = m().toHandle) == null ? void 0 : Te.nodeId) === K && ((rt = m().toHandle) == null ? void 0 : rt.type) === $() && ((ze = m().toHandle) == null ? void 0 : ze.id) === g(S));
    }
  ), ge(
    () => (l(), m(), U($()), g(S)),
    () => {
      var Te, rt, ze;
      G(z, l() === dr.Strict ? ((Te = m().fromHandle) == null ? void 0 : Te.type) !== $() : K !== ((rt = m().fromHandle) == null ? void 0 : rt.nodeId) || g(S) !== ((ze = m().fromHandle) == null ? void 0 : ze.id));
    }
  ), ge(() => (g(D), m()), () => {
    G(L, g(D) && m().isValid);
  }), gt(), De();
  var ue = vp();
  we(ue, "data-nodeid", K);
  let tn;
  var nn = X(ue);
  pt(nn, t, "default", {}), F(ue), Ee(
    (Te, rt) => {
      we(ue, "data-handleid", g(S)), we(ue, "data-handlepos", M()), we(ue, "data-id", `${f() ?? ""}-${K ?? ""}-${I() || ""}-${$() ?? ""}`), tn = mt(ue, 1, Te, null, tn, rt), dt(ue, _());
    },
    [
      () => fn(Pt([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        Y()
      ])),
      () => ({
        valid: g(L),
        connectingto: g(D),
        connectingfrom: g(A),
        source: !g(k),
        target: g(k),
        connectablestart: g(N),
        connectableend: g(N),
        connectable: g(N),
        connectionindicator: g(N) && (!g(H) || g(z))
      })
    ],
    me
  ), Fe("mousedown", ue, ut), Fe("touchstart", ue, ut), O(e, ue);
  var vn = fe({
    get id() {
      return I();
    },
    set id(Te) {
      I(Te), y();
    },
    get type() {
      return $();
    },
    set type(Te) {
      $(Te), y();
    },
    get position() {
      return M();
    },
    set position(Te) {
      M(Te), y();
    },
    get style() {
      return _();
    },
    set style(Te) {
      _(Te), y();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Te) {
      P(Te), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Te) {
      T(Te), y();
    },
    get ondisconnect() {
      return V();
    },
    set ondisconnect(Te) {
      V(Te), y();
    },
    get isConnectable() {
      return R();
    },
    set isConnectable(Te) {
      R(Te), y();
    },
    get class() {
      return Y();
    },
    set class(Te) {
      Y(Te), y();
    }
  });
  return r(), vn;
}
ae(
  Qn,
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
var pp = /* @__PURE__ */ oe("<!> <!>", 1);
function ki(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  De();
  var s = pp(), a = xe(s);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Top);
  Qn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const f = /* @__PURE__ */ me(() => i() ?? ke.Bottom);
  return Qn(c, {
    type: "source",
    get position() {
      return g(f);
    }
  }), Ee(() => {
    var d;
    return Zt(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), O(e, s), fe({
    get data() {
      return r();
    },
    set data(d) {
      r(d), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(d) {
      o(d), y();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(d) {
      i(d), y();
    }
  });
}
ae(
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
var mp = /* @__PURE__ */ oe(" <!>", 1);
function Mc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  De(), He();
  var i = mp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Bottom);
  return Qn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Ee(() => {
    var u;
    return Zt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), y();
    }
  });
}
ae(Mc, { data: {}, sourcePosition: {} }, [], [], !0);
var yp = /* @__PURE__ */ oe(" <!>", 1);
function Hc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  De(), He();
  var i = yp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ me(() => o() ?? ke.Top);
  return Qn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Ee(() => {
    var u;
    return Zt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), y();
    }
  });
}
ae(Hc, { data: {}, targetPosition: {} }, [], [], !0);
function Vc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, []);
}
ae(Vc, {}, [], [], !0);
function Ol(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function $r(e, { target: t, domNode: n }) {
  return Ol(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ol(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var wp = /* @__PURE__ */ oe("<div><!></div>");
function Dc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(i, "$domNode", n), { domNode: i } = Ue();
  De();
  var s = wp(), a = X(s);
  pt(a, t, "default", {}), F(s), vt(s, (l, u) => $r == null ? void 0 : $r(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, s), fe(), r();
}
ae(Dc, {}, ["default"], [], !0);
function Ac() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ue();
  return (a) => {
    const l = q(e).get(a);
    if (!l) {
      console.warn("012", Lr.error012(a));
      return;
    }
    (l.selectable || q(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var _p = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Oc(e, t) {
  de(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Ac(), s = lr("svelteflow__edge_id");
  return De(), Dc(e, {
    children: (a, l) => {
      var u = _p();
      let c;
      var f = X(u);
      pt(f, t, "default", {}), F(u), Ee(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Fe("keyup", u, () => {
      }), Fe("click", u, () => {
        s && i(s);
      }), O(a, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get style() {
      return n();
    },
    set style(a) {
      n(a), y();
    },
    get x() {
      return r();
    },
    set x(a) {
      r(a), y();
    },
    get y() {
      return o();
    },
    set y(a) {
      o(a), y();
    }
  });
}
ae(Oc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var xp = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__edge-interaction"></path>'), bp = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function Oo(e, t) {
  de(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), h = f() === void 0 ? 20 : f();
  De();
  var v = bp(), x = xe(v), b = B(x);
  {
    var E = (p) => {
      var k = xp();
      we(k, "stroke-opacity", 0), we(k, "stroke-width", h), Ee(() => we(k, "d", r())), O(p, k);
    };
    be(b, (p) => {
      h && p(E);
    });
  }
  var m = B(b);
  {
    var C = (p) => {
      Oc(p, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (k, N) => {
          He();
          var S = Be();
          Ee(() => Zt(S, o())), O(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    be(m, (p) => {
      o() && p(C);
    });
  }
  return Ee(
    (p) => {
      we(x, "id", n()), we(x, "d", r()), mt(x, 0, p), we(x, "marker-start", l()), we(x, "marker-end", u()), dt(x, c());
    },
    [
      () => fn(Pt(["svelte-flow__edge-path", d()]))
    ],
    me
  ), O(e, v), fe({
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get path() {
      return r();
    },
    set path(p) {
      r(p), y();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), y();
    },
    get labelX() {
      return i();
    },
    set labelX(p) {
      i(p), y();
    },
    get labelY() {
      return s();
    },
    set labelY(p) {
      s(p), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(p) {
      a(p), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(p) {
      l(p), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(p) {
      u(p), y();
    },
    get style() {
      return c();
    },
    set style(p) {
      c(p), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), y();
    },
    get class() {
      return d();
    },
    set class(p) {
      d(p), y();
    }
  });
}
ae(
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
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(d()), U(h()), U(x()), U(b()), U(v()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(wc({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), De(), Oo(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
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
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(d()), U(h()), U(x()), U(b()), U(v()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), De(), Oo(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
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
    "targetX",
    "targetY"
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return ge(
    () => (g(r), g(o), g(i), U(d()), U(h()), U(v()), U(x())),
    () => {
      ((b) => (G(r, b[0]), G(o, b[1]), G(i, b[2])))(zs({
        sourceX: d(),
        sourceY: h(),
        targetX: v(),
        targetY: x()
      }));
    }
  ), gt(), De(), Oo(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), fe({
    get label() {
      return s();
    },
    set label(b) {
      s(b), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(b) {
      a(b), y();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(b) {
      u(b), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(b) {
      c(b), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(b) {
      f(b), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(b) {
      d(b), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(b) {
      h(b), y();
    },
    get targetX() {
      return v();
    },
    set targetX(b) {
      v(b), y();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), y();
    }
  });
}
ae(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), U(d()), U(h()), U(x()), U(b()), U(v()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), gt(), De(), Oo(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
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
function Cp(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function kp(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Ep = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let s = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, $p = (e, t, n, r = [0, 0], o = wi) => {
  const { subscribe: i, set: s, update: a } = _e([]);
  let l = e, u = {}, c = !0;
  const f = (x) => (xc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, s(l), l), d = (x) => f(x(l)), h = (x) => {
    u = x;
  }, v = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: h,
    setOptions: v
  };
}, Sp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = _e([]);
  let a = e, l = {};
  const u = (d) => {
    const h = l ? d.map((v) => ({ ...l, ...v })) : d;
    Cc(t, n, h), a = h, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Rc = {
  input: Mc,
  output: Hc,
  default: ki,
  group: Vc
}, Bc = {
  straight: Ic,
  smoothstep: Lc,
  default: Ei,
  step: zc
}, Pp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? wi;
  xc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Cc(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Do(a, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    h = wa(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: _e(null),
    nodes: $p(e, a, l, f, d),
    nodeLookup: qt(a),
    parentLookup: qt(l),
    edgeLookup: qt(c),
    visibleNodes: qt([]),
    edges: Sp(t, u, c),
    visibleEdges: qt([]),
    connectionLookup: qt(u),
    height: _e(500),
    width: _e(500),
    minZoom: _e(0.5),
    maxZoom: _e(2),
    nodeOrigin: _e(f),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(d),
    translateExtent: _e(wi),
    autoPanOnNodeDrag: _e(!0),
    autoPanOnConnect: _e(!0),
    fitViewOnInit: _e(!1),
    fitViewOnInitDone: _e(!1),
    fitViewOptions: _e(void 0),
    panZoom: _e(null),
    snapGrid: _e(null),
    dragging: _e(!1),
    selectionRect: _e(null),
    selectionKeyPressed: _e(!1),
    multiselectionKeyPressed: _e(!1),
    deleteKeyPressed: _e(!1),
    panActivationKeyPressed: _e(!1),
    zoomActivationKeyPressed: _e(!1),
    selectionRectMode: _e(null),
    selectionMode: _e(_i.Partial),
    nodeTypes: _e(Rc),
    edgeTypes: _e(Bc),
    viewport: _e(h),
    connectionMode: _e(dr.Strict),
    domNode: _e(null),
    connection: qt(Os),
    connectionLineType: _e(Er.Bezier),
    connectionRadius: _e(20),
    isValidConnection: _e(() => !0),
    nodesDraggable: _e(!0),
    nodesConnectable: _e(!0),
    elementsSelectable: _e(!0),
    selectNodesOnDrag: _e(!0),
    markers: qt([]),
    defaultMarkerColor: _e("#b1b1b7"),
    lib: qt("svelte"),
    onlyRenderVisibleElements: _e(!1),
    onerror: _e(S0),
    ondelete: _e(void 0),
    onedgecreate: _e(void 0),
    onconnect: _e(void 0),
    onconnectstart: _e(void 0),
    onconnectend: _e(void 0),
    onbeforedelete: _e(void 0),
    nodesInitialized: _e(!1),
    edgesInitialized: _e(!1),
    viewportInitialized: _e(!1),
    initialized: qt(!1)
  };
};
function Np(e) {
  const t = qn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && D0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return qn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = B0({
      id: l.id,
      sourceNode: u,
      targetNode: c,
      sourceHandle: l.sourceHandle || null,
      targetHandle: l.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return f && a.push({
      ...l,
      zIndex: V0({
        selected: l.selected,
        zIndex: l.zIndex,
        sourceNode: u,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...f
    }), a;
  }, []));
}
function Tp(e) {
  return qn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? dc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Gi = Symbol();
function Yc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Pp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(_) {
    a.nodeTypes.set({
      ...Rc,
      ..._
    });
  }
  function u(_) {
    a.edgeTypes.set({
      ...Bc,
      ..._
    });
  }
  function c(_) {
    const P = q(a.edges);
    a.edges.set(L0(_, P));
  }
  const f = (_, P = !1) => {
    var V;
    const T = q(a.nodeLookup);
    for (const [R, Y] of _) {
      const K = (V = T.get(R)) == null ? void 0 : V.internals.userNode;
      K && (K.position = Y.position, K.dragging = P);
    }
    a.nodes.update((R) => R);
  };
  function d(_) {
    var Y, K, re;
    const P = q(a.nodeLookup), T = q(a.parentLookup), { changes: V, updatedInternals: R } = G0(_, P, q(a.parentLookup), q(a.domNode), q(a.nodeOrigin));
    if (R) {
      if (X0(P, T, { nodeOrigin: i, nodeExtent: s }), !q(a.fitViewOnInitDone) && q(a.fitViewOnInit)) {
        const j = q(a.fitViewOptions), W = v({
          ...j,
          nodes: j == null ? void 0 : j.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const j of V) {
        const W = (Y = P.get(j.id)) == null ? void 0 : Y.internals.userNode;
        if (W)
          switch (j.type) {
            case "dimensions": {
              const se = { ...W.measured, ...j.dimensions };
              j.setAttributes && (W.width = ((K = j.dimensions) == null ? void 0 : K.width) ?? W.width, W.height = ((re = j.dimensions) == null ? void 0 : re.height) ?? W.height), W.measured = se;
              break;
            }
            case "position":
              W.position = j.position ?? W.position;
              break;
          }
      }
      a.nodes.update((j) => j), q(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(_) {
    const P = q(a.panZoom), T = q(a.domNode);
    if (!P || !T)
      return Promise.resolve(!1);
    const { width: V, height: R } = _a(T), Y = bl(q(a.nodeLookup), _);
    return Cl({
      nodes: Y,
      width: V,
      height: R,
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, _);
  }
  function v(_) {
    const P = q(a.panZoom);
    if (!P)
      return !1;
    const T = bl(q(a.nodeLookup), _);
    return Cl({
      nodes: T,
      width: q(a.width),
      height: q(a.height),
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, _), T.size > 0;
  }
  function x(_, P) {
    const T = q(a.panZoom);
    return T ? T.scaleBy(_, P) : Promise.resolve(!1);
  }
  function b(_) {
    return x(1.2, _);
  }
  function E(_) {
    return x(1 / 1.2, _);
  }
  function m(_) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([_, q(a.maxZoom)]), a.minZoom.set(_));
  }
  function C(_) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([q(a.minZoom), _]), a.maxZoom.set(_));
  }
  function p(_) {
    const P = q(a.panZoom);
    P && (P.setTranslateExtent(_), a.translateExtent.set(_));
  }
  function k(_) {
    let P = !1;
    return _.forEach((T) => {
      T.selected && (T.selected = !1, P = !0);
    }), P;
  }
  function N(_) {
    var P;
    (P = q(a.panZoom)) == null || P.setClickDistance(_);
  }
  function S(_) {
    k((_ == null ? void 0 : _.nodes) || q(a.nodes)) && a.nodes.set(q(a.nodes)), k((_ == null ? void 0 : _.edges) || q(a.edges)) && a.edges.set(q(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (_) => {
    var P;
    if (_) {
      const T = q(a.nodes), V = q(a.edges), R = T.filter((j) => j.selected), Y = V.filter((j) => j.selected), { nodes: K, edges: re } = await fc({
        nodesToRemove: R,
        edgesToRemove: Y,
        nodes: T,
        edges: V,
        onBeforeDelete: q(a.onbeforedelete)
      });
      (K.length || re.length) && (a.nodes.update((j) => j.filter((W) => !K.some((se) => se.id === W.id))), a.edges.update((j) => j.filter((W) => !re.some((se) => se.id === W.id))), (P = q(a.ondelete)) == null || P({
        nodes: K,
        edges: re
      }));
    }
  });
  function H(_) {
    const P = q(a.multiselectionKeyPressed);
    a.nodes.update((T) => T.map((V) => {
      const R = _.includes(V.id), Y = P && V.selected || R;
      return V.selected = Y, V;
    })), P || a.edges.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function A(_) {
    const P = q(a.multiselectionKeyPressed);
    a.edges.update((T) => T.map((V) => {
      const R = _.includes(V.id), Y = P && V.selected || R;
      return V.selected = Y, V;
    })), P || a.nodes.update((T) => T.map((V) => (V.selected = !1, V)));
  }
  function D(_) {
    var T;
    const P = (T = q(a.nodes)) == null ? void 0 : T.find((V) => V.id === _);
    if (!P) {
      console.warn("012", Lr.error012(_));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), P.selected ? P.selected && q(a.multiselectionKeyPressed) && S({ nodes: [P], edges: [] }) : H([_]);
  }
  function z(_) {
    const P = q(a.viewport);
    return U0({
      delta: _,
      panZoom: q(a.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(a.translateExtent),
      width: q(a.width),
      height: q(a.height)
    });
  }
  const L = _e(Os), I = (_) => {
    L.set({ ..._ });
  };
  function $() {
    L.set(Os);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), S(), $();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Np(a),
    visibleNodes: Tp(a),
    connection: qn([L, a.viewport], ([_, P]) => _.inProgress ? {
      ..._,
      to: Ao(_.to, [P.x, P.y, P.zoom])
    } : { ..._ }),
    markers: qn([a.edges, a.defaultMarkerColor, a.flowId], ([_, P, T]) => Y0(_, { defaultColor: P, id: T })),
    initialized: (() => {
      let _ = !1;
      const P = q(a.nodes).length, T = q(a.edges).length;
      return qn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([V, R, Y]) => _ || (P === 0 ? _ = Y : T === 0 ? _ = Y && V : _ = Y && V && R, _));
    })(),
    // actions
    syncNodeStores: (_) => Cp(a.nodes, _),
    syncEdgeStores: (_) => kp(a.edges, _),
    syncViewport: (_) => Ep(a.panZoom, a.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: b,
    zoomOut: E,
    fitView: (_) => h(_),
    setMinZoom: m,
    setMaxZoom: C,
    setTranslateExtent: p,
    setPaneClickDistance: N,
    unselectNodesAndEdges: S,
    addSelectedNodes: H,
    addSelectedEdges: A,
    handleNodeSelection: D,
    panBy: z,
    updateConnection: I,
    cancelConnection: $,
    reset: M
  };
}
function Ue() {
  const e = lr(Gi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Mp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Yc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Dr(Gi, {
    getStore: () => a
  }), a;
}
function vs(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = hp({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), f = c.getViewport();
  return s.set(f), n.set(c), c.update(t), {
    update(d) {
      c.update(d);
    }
  };
}
var Hp = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Vp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  de(t, !1), et(e, Vp);
  const [n, r] = nt(), o = () => J(T, "$panActivationKeyPressed", n), i = () => J(I, "$minZoom", n), s = () => J($, "$maxZoom", n), a = () => J(V, "$zoomActivationKeyPressed", n), l = () => J(L, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(P, "$lib", n), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne();
  let v = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), N = w(t, "zoomOnPinch", 12), S = w(t, "panOnDrag", 12), H = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: z,
    selectionRect: L,
    minZoom: I,
    maxZoom: $,
    dragging: M,
    translateExtent: _,
    lib: P,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: V,
    viewportInitialized: R
  } = Ue(), Y = (W) => D.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Wt(() => {
    fi(R, !0);
  }), ge(() => U(v()), () => {
    G(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), U(S())),
    () => {
      G(d, o() || S());
    }
  ), ge(
    () => (o(), U(H())),
    () => {
      G(h, o() || H());
    }
  ), gt(), De();
  var K = Hp(), re = X(K);
  pt(re, t, "default", {}), F(K), vt(K, (W, se) => vs == null ? void 0 : vs(W, se), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(f),
    dragging: M,
    panZoom: z,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: E(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: N(),
    panOnScroll: g(h),
    panOnDrag: g(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Gn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: Y
  })), O(e, K);
  var j = fe({
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(W) {
      x(W), y();
    },
    get onMove() {
      return b();
    },
    set onMove(W) {
      b(W), y();
    },
    get onMoveEnd() {
      return E();
    },
    set onMoveEnd(W) {
      E(W), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(W) {
      m(W), y();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(W) {
      C(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), y();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(W) {
      N(W), y();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), y();
    },
    get panOnScroll() {
      return H();
    },
    set panOnScroll(W) {
      H(W), y();
    },
    get paneClickDistance() {
      return A();
    },
    set paneClickDistance(W) {
      A(W), y();
    }
  });
  return r(), j;
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
function Ll(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Il(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Dp = /* @__PURE__ */ oe("<div><!></div>");
const Ap = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Fc(e, t) {
  de(t, !1), et(e, Ap);
  const [n, r] = nt(), o = () => J($, "$panActivationKeyPressed", n), i = () => J(L, "$selectionKeyPressed", n), s = () => J(D, "$selectionRect", n), a = () => J(A, "$elementsSelectable", n), l = () => J(z, "$selectionRectMode", n), u = () => J(N, "$edges", n), c = () => J(k, "$nodeLookup", n), f = () => J(S, "$viewport", n), d = () => J(I, "$selectionMode", n), h = () => J(H, "$dragging", n), v = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne();
  let E = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const C = Ri(), {
    nodes: p,
    nodeLookup: k,
    edges: N,
    viewport: S,
    dragging: H,
    elementsSelectable: A,
    selectionRect: D,
    selectionRectMode: z,
    selectionKeyPressed: L,
    selectionMode: I,
    panActivationKeyPressed: $,
    unselectNodesAndEdges: M
  } = Ue();
  let _ = /* @__PURE__ */ ne(), P = null, T = [], V = !1;
  function R(le) {
    if (V) {
      V = !1;
      return;
    }
    C("paneclick", { event: le }), M(), z.set(null);
  }
  function Y(le) {
    var Pe, Ve;
    if (P = g(_).getBoundingClientRect(), !A || !g(x) || le.button !== 0 || le.target !== g(_) || !P)
      return;
    (Ve = (Pe = le.target) == null ? void 0 : Pe.setPointerCapture) == null || Ve.call(Pe, le.pointerId);
    const { x: ce, y: ye } = Dn(le, P);
    M(), D.set({
      width: 0,
      height: 0,
      startX: ce,
      startY: ye,
      x: ce,
      y: ye
    });
  }
  function K(le) {
    if (!g(x) || !P || !s())
      return;
    V = !0;
    const ce = Dn(le, P), ye = s().startX ?? 0, Pe = s().startY ?? 0, Ve = {
      ...s(),
      x: ce.x < ye ? ce.x : ye,
      y: ce.y < Pe ? ce.y : Pe,
      width: Math.abs(ce.x - ye),
      height: Math.abs(ce.y - Pe)
    }, ee = T.map((ie) => ie.id), We = Ls(T, u()).map((ie) => ie.id);
    T = dc(
      c(),
      Ve,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === _i.Partial,
      !0
    );
    const je = Ls(T, u()).map((ie) => ie.id), Ye = T.map((ie) => ie.id);
    (ee.length !== Ye.length || Ye.some((ie) => !ee.includes(ie))) && p.update((ie) => ie.map(Il(Ye))), (We.length !== je.length || je.some((ie) => !We.includes(ie))) && N.update((ie) => ie.map(Il(je))), z.set("user"), D.set(Ve);
  }
  function re(le) {
    var ce, ye;
    le.button === 0 && ((ye = (ce = le.target) == null ? void 0 : ce.releasePointerCapture) == null || ye.call(ce, le.pointerId), !g(x) && l() === "user" && le.target === g(_) && (R == null || R(le)), D.set(null), T.length > 0 && fi(z, "nodes"), i() && (V = !1));
  }
  const j = (le) => {
    var ce;
    if (Array.isArray(g(v)) && ((ce = g(v)) != null && ce.includes(2))) {
      le.preventDefault();
      return;
    }
    C("panecontextmenu", { event: le });
  };
  ge(
    () => (o(), U(E())),
    () => {
      G(v, o() || E());
    }
  ), ge(
    () => (i(), s(), U(m()), g(v)),
    () => {
      G(x, i() || s() || m() && g(v) !== !0);
    }
  ), ge(
    () => (a(), g(x), l()),
    () => {
      G(b, a() && (g(x) || l() === "user"));
    }
  ), gt(), De();
  var W = Dp(), se = /* @__PURE__ */ Me(() => g(b) ? void 0 : Ll(R, g(_))), ve = /* @__PURE__ */ Me(() => Ll(j, g(_)));
  let he;
  var te = X(W);
  pt(te, t, "default", {}), F(W), Cn(W, (le) => G(_, le), () => g(_)), Ee(
    (le) => he = mt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, he, le),
    [
      () => ({
        draggable: E() === !0 || Array.isArray(E()) && E().includes(0),
        dragging: h(),
        selection: g(x)
      })
    ],
    me
  ), Fe("click", W, function(...le) {
    var ce;
    (ce = g(se)) == null || ce.apply(this, le);
  }), Fe("pointerdown", W, function(...le) {
    var ce;
    (ce = g(b) ? Y : void 0) == null || ce.apply(this, le);
  }), Fe("pointermove", W, function(...le) {
    var ce;
    (ce = g(b) ? K : void 0) == null || ce.apply(this, le);
  }), Fe("pointerup", W, function(...le) {
    var ce;
    (ce = g(b) ? re : void 0) == null || ce.apply(this, le);
  }), Fe("contextmenu", W, function(...le) {
    var ce;
    (ce = g(ve)) == null || ce.apply(this, le);
  }), O(e, W);
  var Ae = fe({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(le) {
      E(le), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(le) {
      m(le), y();
    }
  });
  return r(), Ae;
}
ae(Fc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Op = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Lp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  de(t, !1), et(e, Lp);
  const [n, r] = nt(), o = () => J(i, "$viewport", n), { viewport: i } = Ue();
  De();
  var s = Op(), a = X(s);
  pt(a, t, "default", {}), F(s), Ee(() => dt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, s), fe(), r();
}
ae(Xc, {}, ["default"], [], !0);
function Sr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Q0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
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
      a.destroy();
      return;
    }
    a.update({
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
      a.destroy();
    }
  };
}
function Ip({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, a = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: a ? `height:${a}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var zp = /* @__PURE__ */ oe("<div><!></div>");
function Wc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(ve, "$nodeTypes", n), i = () => J(ce, "$elementsSelectable", n), s = () => J(ye, "$nodesDraggable", n), a = () => J(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let d = w(t, "node", 13), h = w(t, "id", 13), v = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), N = w(t, "resizeObserver", 13, null), S = w(t, "style", 13, void 0), H = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), z = w(t, "positionY", 13), L = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), $ = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), _ = w(t, "measuredHeight", 13, void 0), P = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), V = w(t, "width", 13, void 0), R = w(t, "height", 13, void 0), Y = w(t, "dragHandle", 13, void 0), K = w(t, "initialized", 13, !1), re = w(t, "parentId", 13, void 0), j = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const se = Ue(), {
    nodeTypes: ve,
    nodeDragThreshold: he,
    selectNodesOnDrag: te,
    handleNodeSelection: Ae,
    updateNodeInternals: le,
    elementsSelectable: ce,
    nodesDraggable: ye
  } = se;
  let Pe = /* @__PURE__ */ ne(void 0, !0), Ve = /* @__PURE__ */ ne(null, !0);
  const ee = Ri(), We = _e(m());
  let je = /* @__PURE__ */ ne(void 0, !0), Ye = /* @__PURE__ */ ne(void 0, !0), ie = /* @__PURE__ */ ne(void 0, !0);
  Dr("svelteflow__node_id", h()), Dr("svelteflow__node_connectable", We), ua(() => {
    var Q;
    g(Ve) && ((Q = N()) == null || Q.unobserve(g(Ve)));
  });
  function pe(Q) {
    E() && (!q(te) || !b() || q(he) > 0) && Ae(h()), ee("nodeclick", { node: d().internals.userNode, event: Q });
  }
  ge(() => U(H()), () => {
    G(l, H() || "default");
  }), ge(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), ge(
    () => (o(), g(l), ki),
    () => {
      G(c, o()[g(l)] || ki);
    }
  ), ge(
    () => (g(u), U(H())),
    () => {
      g(u) || console.warn("003", Lr.error003(H()));
    }
  ), ge(
    () => (U(V()), U(R()), U(P()), U(T()), U(M()), U(_())),
    () => {
      G(f, Ip({
        width: V(),
        height: R(),
        initialWidth: P(),
        initialHeight: T(),
        measuredWidth: M(),
        measuredHeight: _()
      }));
    }
  ), ge(() => U(m()), () => {
    We.set(!!m());
  }), ge(
    () => (g(je), g(l), g(Ye), U(L()), g(ie), U(I()), U(h()), g(Pe)),
    () => {
      (g(je) && g(l) !== g(je) || g(Ye) && L() !== g(Ye) || g(ie) && I() !== g(ie)) && requestAnimationFrame(() => le(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(Pe),
            force: !0
          }
        ]
      ]))), G(je, g(l)), G(Ye, L()), G(ie, I());
    }
  ), ge(
    () => (U(N()), g(Pe), g(Ve), U(K())),
    () => {
      N() && (g(Pe) !== g(Ve) || !K()) && (g(Ve) && N().unobserve(g(Ve)), g(Pe) && N().observe(g(Pe)), G(Ve, g(Pe)));
    }
  ), gt(), De(!0);
  var Se = tt(), Ne = xe(Se);
  {
    var at = (Q) => {
      var Ze = zp();
      let ue, tn;
      var nn = X(Ze);
      const vn = /* @__PURE__ */ me(() => x() ?? !1), Te = /* @__PURE__ */ me(() => E() ?? i() ?? !0), rt = /* @__PURE__ */ me(() => C() ?? !0), ze = /* @__PURE__ */ me(() => b() ?? s() ?? !0);
      Nu(nn, () => g(c), (Oe, ot) => {
        ot(Oe, {
          get data() {
            return v();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(vn);
          },
          get selectable() {
            return g(Te);
          },
          get deletable() {
            return g(rt);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return $();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(ze);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return re();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return z();
          },
          get width() {
            return V();
          },
          get height() {
            return R();
          }
        });
      }), F(Ze), vt(Ze, (Oe, ot) => Sr == null ? void 0 : Sr(Oe, ot), () => ({
        nodeId: h(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: j(),
        onNodeMouseDown: Ae,
        onDrag: (Oe, ot, rn, Kt) => {
          ee("nodedrag", { event: Oe, targetNode: rn, nodes: Kt });
        },
        onDragStart: (Oe, ot, rn, Kt) => {
          ee("nodedragstart", { event: Oe, targetNode: rn, nodes: Kt });
        },
        onDragStop: (Oe, ot, rn, Kt) => {
          ee("nodedragstop", { event: Oe, targetNode: rn, nodes: Kt });
        },
        store: se
      })), Cn(Ze, (Oe) => G(Pe, Oe), () => g(Pe)), zt(() => Fe("click", Ze, pe)), zt(() => Fe("mouseenter", Ze, (Oe) => ee("nodemouseenter", { node: d(), event: Oe }))), zt(() => Fe("mouseleave", Ze, (Oe) => ee("nodemouseleave", { node: d(), event: Oe }))), zt(() => Fe("mousemove", Ze, (Oe) => ee("nodemousemove", { node: d(), event: Oe }))), zt(() => Fe("contextmenu", Ze, (Oe) => ee("nodecontextmenu", { node: d(), event: Oe }))), Ee(
        (Oe, ot) => {
          we(Ze, "data-id", h()), ue = mt(Ze, 1, Oe, null, ue, ot), tn = dt(Ze, `${S() ?? ""};${g(f).width ?? ""}${g(f).height ?? ""}`, tn, {
            "z-index": $(),
            transform: `translate(${D() ?? ""}px, ${z() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => fn(Pt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: m(),
            selectable: E(),
            nopan: b(),
            parent: A()
          })
        ],
        me
      ), O(Q, Ze);
    };
    be(Ne, (Q) => {
      p() || Q(at);
    });
  }
  O(e, Se);
  var ut = fe({
    get node() {
      return d();
    },
    set node(Q) {
      d(Q), y();
    },
    get id() {
      return h();
    },
    set id(Q) {
      h(Q), y();
    },
    get data() {
      return v();
    },
    set data(Q) {
      v(Q), y();
    },
    get selected() {
      return x();
    },
    set selected(Q) {
      x(Q), y();
    },
    get draggable() {
      return b();
    },
    set draggable(Q) {
      b(Q), y();
    },
    get selectable() {
      return E();
    },
    set selectable(Q) {
      E(Q), y();
    },
    get connectable() {
      return m();
    },
    set connectable(Q) {
      m(Q), y();
    },
    get deletable() {
      return C();
    },
    set deletable(Q) {
      C(Q), y();
    },
    get hidden() {
      return p();
    },
    set hidden(Q) {
      p(Q), y();
    },
    get dragging() {
      return k();
    },
    set dragging(Q) {
      k(Q), y();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(Q) {
      N(Q), y();
    },
    get style() {
      return S();
    },
    set style(Q) {
      S(Q), y();
    },
    get type() {
      return H();
    },
    set type(Q) {
      H(Q), y();
    },
    get isParent() {
      return A();
    },
    set isParent(Q) {
      A(Q), y();
    },
    get positionX() {
      return D();
    },
    set positionX(Q) {
      D(Q), y();
    },
    get positionY() {
      return z();
    },
    set positionY(Q) {
      z(Q), y();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(Q) {
      L(Q), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(Q) {
      I(Q), y();
    },
    get zIndex() {
      return $();
    },
    set zIndex(Q) {
      $(Q), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(Q) {
      M(Q), y();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(Q) {
      _(Q), y();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(Q) {
      P(Q), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(Q) {
      T(Q), y();
    },
    get width() {
      return V();
    },
    set width(Q) {
      V(Q), y();
    },
    get height() {
      return R();
    },
    set height(Q) {
      R(Q), y();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(Q) {
      Y(Q), y();
    },
    get initialized() {
      return K();
    },
    set initialized(Q) {
      K(Q), y();
    },
    get parentId() {
      return re();
    },
    set parentId(Q) {
      re(Q), y();
    },
    get nodeClickDistance() {
      return j();
    },
    set nodeClickDistance(Q) {
      j(Q), y();
    },
    get class() {
      return W();
    },
    set class(Q) {
      W(Q), y();
    }
  });
  return r(), ut;
}
ae(
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
var Rp = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Bp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Kc(e, t) {
  de(t, !1), et(e, Bp);
  const [n, r] = nt(), o = () => J(c, "$visibleNodes", n), i = () => J(f, "$nodesDraggable", n), s = () => J(h, "$elementsSelectable", n), a = () => J(d, "$nodesConnectable", n), l = () => J(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: h,
    updateNodeInternals: v,
    parentLookup: x
  } = Ue(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const p = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const N = k.target.getAttribute("data-id");
      p.set(N, { id: N, nodeElement: k.target, force: !0 });
    }), v(p);
  });
  ua(() => {
    b == null || b.disconnect();
  }), De();
  var E = Rp();
  Dt(E, 5, o, (C) => C.id, (C, p) => {
    const k = /* @__PURE__ */ me(() => !!g(p).selected), N = /* @__PURE__ */ me(() => !!g(p).hidden), S = /* @__PURE__ */ me(() => !!(g(p).draggable || i() && typeof g(p).draggable > "u")), H = /* @__PURE__ */ me(() => !!(g(p).selectable || s() && typeof g(p).selectable > "u")), A = /* @__PURE__ */ me(() => !!(g(p).connectable || a() && typeof g(p).connectable > "u")), D = /* @__PURE__ */ me(() => g(p).deletable ?? !0), z = /* @__PURE__ */ me(() => l().has(g(p).id)), L = /* @__PURE__ */ me(() => g(p).type ?? "default"), I = /* @__PURE__ */ me(() => g(p).internals.z ?? 0), $ = /* @__PURE__ */ me(() => mc(g(p)));
    Wc(C, {
      get node() {
        return g(p);
      },
      get id() {
        return g(p).id;
      },
      get data() {
        return g(p).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(N);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(H);
      },
      get connectable() {
        return g(A);
      },
      get deletable() {
        return g(D);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(z);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(L);
      },
      get sourcePosition() {
        return g(p).sourcePosition;
      },
      get targetPosition() {
        return g(p).targetPosition;
      },
      get dragging() {
        return g(p).dragging;
      },
      get zIndex() {
        return g(I);
      },
      get dragHandle() {
        return g(p).dragHandle;
      },
      get initialized() {
        return g($);
      },
      get width() {
        return g(p).width;
      },
      get height() {
        return g(p).height;
      },
      get initialWidth() {
        return g(p).initialWidth;
      },
      get initialHeight() {
        return g(p).initialHeight;
      },
      get measuredWidth() {
        return g(p).measured.width;
      },
      get measuredHeight() {
        return g(p).measured.height;
      },
      get parentId() {
        return g(p).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          Le.call(this, t, M);
        },
        nodemouseenter(M) {
          Le.call(this, t, M);
        },
        nodemousemove(M) {
          Le.call(this, t, M);
        },
        nodemouseleave(M) {
          Le.call(this, t, M);
        },
        nodedrag(M) {
          Le.call(this, t, M);
        },
        nodedragstart(M) {
          Le.call(this, t, M);
        },
        nodedragstop(M) {
          Le.call(this, t, M);
        },
        nodecontextmenu(M) {
          Le.call(this, t, M);
        }
      }
    });
  }), F(E), O(e, E);
  var m = fe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), y();
    }
  });
  return r(), m;
}
ae(Kc, { nodeClickDistance: {} }, [], [], !0);
var Yp = /* @__PURE__ */ Ce('<svg><g role="img"><!></g></svg>');
function qc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(W, "$edgeTypes", n), i = () => J(se, "$flowId", n), s = () => J(ve, "$elementsSelectable", n), a = () => J(j, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let h = w(t, "id", 13), v = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), b = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), N = w(t, "selectable", 13, void 0), S = w(t, "deletable", 13, void 0), H = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), z = w(t, "markerStart", 13, void 0), L = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), $ = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), _ = w(t, "sourceY", 13), P = w(t, "targetX", 13), T = w(t, "targetY", 13), V = w(t, "sourcePosition", 13), R = w(t, "targetPosition", 13), Y = w(t, "ariaLabel", 13, void 0), K = w(t, "interactionWidth", 13, void 0), re = w(t, "class", 13, "");
  Dr("svelteflow__edge_id", h());
  const {
    edgeLookup: j,
    edgeTypes: W,
    flowId: se,
    elementsSelectable: ve
  } = Ue(), he = Ri(), te = Ac();
  function Ae(ee) {
    const We = a().get(h());
    We && (te(h()), he("edgeclick", { event: ee, edge: We }));
  }
  function le(ee, We) {
    const je = a().get(h());
    je && he(We, { event: ee, edge: je });
  }
  ge(() => U(v()), () => {
    G(l, v() || "default");
  }), ge(
    () => (o(), g(l), Ei),
    () => {
      G(u, o()[g(l)] || Ei);
    }
  ), ge(
    () => (U(z()), i()),
    () => {
      G(c, z() ? `url('#${Rs(z(), i())}')` : void 0);
    }
  ), ge(
    () => (U(L()), i()),
    () => {
      G(f, L() ? `url('#${Rs(L(), i())}')` : void 0);
    }
  ), ge(
    () => (U(N()), s()),
    () => {
      G(d, N() ?? s());
    }
  ), gt(), De(!0);
  var ce = tt(), ye = xe(ce);
  {
    var Pe = (ee) => {
      var We = Yp();
      let je;
      var Ye = X(We);
      let ie;
      var pe = X(Ye);
      const Se = /* @__PURE__ */ me(() => S() ?? !0);
      Nu(pe, () => g(u), (Ne, at) => {
        at(Ne, {
          get id() {
            return h();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return P();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return V();
          },
          get targetPosition() {
            return R();
          },
          get animated() {
            return p();
          },
          get selected() {
            return k();
          },
          get label() {
            return A();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return E();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g(Se);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return I();
          },
          get targetHandleId() {
            return $();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(f);
          }
        });
      }), F(Ye), F(We), Ee(
        (Ne, at) => {
          je = dt(We, "", je, { "z-index": C() }), ie = mt(Ye, 0, Ne, null, ie, at), we(Ye, "data-id", h()), we(Ye, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => fn(Pt(["svelte-flow__edge", re()])),
          () => ({
            animated: p(),
            selected: k(),
            selectable: g(d)
          })
        ],
        me
      ), Fe("click", Ye, Ae), Fe("contextmenu", Ye, (Ne) => {
        le(Ne, "edgecontextmenu");
      }), Fe("mouseenter", Ye, (Ne) => {
        le(Ne, "edgemouseenter");
      }), Fe("mouseleave", Ye, (Ne) => {
        le(Ne, "edgemouseleave");
      }), O(ee, We);
    };
    be(ye, (ee) => {
      H() || ee(Pe);
    });
  }
  O(e, ce);
  var Ve = fe({
    get id() {
      return h();
    },
    set id(ee) {
      h(ee), y();
    },
    get type() {
      return v();
    },
    set type(ee) {
      v(ee), y();
    },
    get source() {
      return x();
    },
    set source(ee) {
      x(ee), y();
    },
    get target() {
      return b();
    },
    set target(ee) {
      b(ee), y();
    },
    get data() {
      return E();
    },
    set data(ee) {
      E(ee), y();
    },
    get style() {
      return m();
    },
    set style(ee) {
      m(ee), y();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), y();
    },
    get animated() {
      return p();
    },
    set animated(ee) {
      p(ee), y();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), y();
    },
    get selectable() {
      return N();
    },
    set selectable(ee) {
      N(ee), y();
    },
    get deletable() {
      return S();
    },
    set deletable(ee) {
      S(ee), y();
    },
    get hidden() {
      return H();
    },
    set hidden(ee) {
      H(ee), y();
    },
    get label() {
      return A();
    },
    set label(ee) {
      A(ee), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(ee) {
      D(ee), y();
    },
    get markerStart() {
      return z();
    },
    set markerStart(ee) {
      z(ee), y();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(ee) {
      L(ee), y();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(ee) {
      I(ee), y();
    },
    get targetHandle() {
      return $();
    },
    set targetHandle(ee) {
      $(ee), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(ee) {
      M(ee), y();
    },
    get sourceY() {
      return _();
    },
    set sourceY(ee) {
      _(ee), y();
    },
    get targetX() {
      return P();
    },
    set targetX(ee) {
      P(ee), y();
    },
    get targetY() {
      return T();
    },
    set targetY(ee) {
      T(ee), y();
    },
    get sourcePosition() {
      return V();
    },
    set sourcePosition(ee) {
      V(ee), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ee) {
      R(ee), y();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(ee) {
      Y(ee), y();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(ee) {
      K(ee), y();
    },
    get class() {
      return re();
    },
    set class(ee) {
      re(ee), y();
    }
  });
  return r(), Ve;
}
ae(
  qc,
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
function Gc(e, t) {
  de(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Wt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), De(), fe({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), y();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), y();
    }
  });
}
ae(Gc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Zp = /* @__PURE__ */ Ce("<defs></defs>");
function Uc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(i, "$markers", n), { markers: i } = Ue();
  De();
  var s = Zp();
  Dt(s, 5, o, (a) => a.id, (a, l) => {
    jc(a, ct(() => g(l)));
  }), F(s), O(e, s), fe(), r();
}
ae(Uc, {}, [], [], !0);
var Fp = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Xp = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Wp = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  de(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  De();
  var c = Wp(), f = X(c);
  {
    var d = (v) => {
      var x = Fp();
      Ee(() => {
        we(x, "stroke", l()), we(x, "stroke-width", u());
      }), O(v, x);
    }, h = (v, x) => {
      {
        var b = (E) => {
          var m = Xp();
          Ee(() => {
            we(m, "stroke", l()), we(m, "stroke-width", u()), we(m, "fill", l());
          }), O(E, m);
        };
        be(
          v,
          (E) => {
            r() === bo.ArrowClosed && E(b);
          },
          x
        );
      }
    };
    be(f, (v) => {
      r() === bo.Arrow ? v(d) : v(h, !1);
    });
  }
  return F(c), Ee(() => {
    we(c, "id", n()), we(c, "markerWidth", `${o()}`), we(c, "markerHeight", `${i()}`), we(c, "markerUnits", s()), we(c, "orient", a());
  }), O(e, c), fe({
    get id() {
      return n();
    },
    set id(v) {
      n(v), y();
    },
    get type() {
      return r();
    },
    set type(v) {
      r(v), y();
    },
    get width() {
      return o();
    },
    set width(v) {
      o(v), y();
    },
    get height() {
      return i();
    },
    set height(v) {
      i(v), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(v) {
      s(v), y();
    },
    get orient() {
      return a();
    },
    set orient(v) {
      a(v), y();
    },
    get color() {
      return l();
    },
    set color(v) {
      l(v), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(v) {
      u(v), y();
    }
  });
}
ae(
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
var Kp = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Jc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(a, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ue();
  Wt(() => {
    s() && u(s());
  }), De();
  var f = Kp(), d = X(f), h = X(d);
  Uc(h, {}), F(d);
  var v = B(d, 2);
  Dt(v, 1, o, (m) => m.id, (m, C) => {
    const p = /* @__PURE__ */ me(() => g(C).selectable ?? i()), k = /* @__PURE__ */ me(() => g(C).type || "default");
    qc(m, {
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
        return g(p);
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
        return g(k);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(N) {
          Le.call(this, t, N);
        },
        edgecontextmenu(N) {
          Le.call(this, t, N);
        },
        edgemouseenter(N) {
          Le.call(this, t, N);
        },
        edgemouseleave(N) {
          Le.call(this, t, N);
        }
      }
    });
  });
  var x = B(v, 2);
  {
    var b = (m) => {
      Gc(m, {
        onMount: () => {
          fi(l, !0);
        },
        onDestroy: () => {
          fi(l, !1);
        }
      });
    };
    be(x, (m) => {
      o().length > 0 && m(b);
    });
  }
  F(f), O(e, f);
  var E = fe({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), E;
}
ae(Jc, { defaultEdgeOptions: {} }, [], [], !0);
var qp = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Gp = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ka(e, t) {
  de(t, !1), et(e, Gp);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = tt(), l = xe(a);
  {
    var u = (c) => {
      var f = qp();
      let d;
      Ee(() => d = dt(f, "", d, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), O(c, f);
    };
    be(l, (c) => {
      s() && c(u);
    });
  }
  return O(e, a), fe({
    get x() {
      return n();
    },
    set x(c) {
      n(c), y();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), y();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), y();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(c) {
      s(c), y();
    }
  });
}
ae(
  ka,
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
  const [n, r] = nt(), o = () => J(s, "$selectionRect", n), i = () => J(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ue();
  De();
  const l = /* @__PURE__ */ me(() => !!(o() && i() === "user")), u = /* @__PURE__ */ me(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ me(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), f = /* @__PURE__ */ me(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), d = /* @__PURE__ */ me(() => {
    var h;
    return (h = o()) == null ? void 0 : h.y;
  });
  ka(e, {
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
      return g(f);
    },
    get y() {
      return g(d);
    }
  }), fe(), r();
}
ae(Qc, {}, [], [], !0);
var Up = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const jp = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ed(e, t) {
  de(t, !1), et(e, jp);
  const [n, r] = nt(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), s = () => J(u, "$nodes", n), a = Ue(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Ri();
  let d = /* @__PURE__ */ ne(null);
  function h(m) {
    const C = s().filter((p) => p.selected);
    f("selectioncontextmenu", { nodes: C, event: m });
  }
  function v(m) {
    const C = s().filter((p) => p.selected);
    f("selectionclick", { nodes: C, event: m });
  }
  ge(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (G(d, Do(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), De();
  var x = tt(), b = xe(x);
  {
    var E = (m) => {
      var C = Up(), p = X(C);
      ka(p, { width: "100%", height: "100%", x: 0, y: 0 }), F(C), vt(C, (k, N) => Sr == null ? void 0 : Sr(k, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (k, N, S, H) => {
          f("nodedrag", { event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, N, S, H) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, N, S, H) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: H });
        }
      })), zt(() => Fe("contextmenu", C, h)), zt(() => Fe("click", C, v)), zt(() => Fe("keyup", C, () => {
      })), Ee(() => dt(C, `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), O(m, C);
    };
    be(b, (m) => {
      o() === "nodes" && g(d) && Mn(g(d).x) && Mn(g(d).y) && m(E);
    });
  }
  O(e, x), fe(), r();
}
ae(ed, {}, [], [], !0);
function Ke(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const a = Array.isArray(r) ? r : [r], l = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of a) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: f, key: d, callback: h, preventDefault: v, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((C) => l[C])
        ))
          continue;
        if (s.key === d) {
          v && s.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), h == null || h(b);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: a = !0, type: l = "keydown" } = s;
      n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i), n = a, o = l, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function td(e, t) {
  de(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => bi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ue();
  function h(m) {
    return m !== null && typeof m == "object";
  }
  function v(m) {
    return h(m) ? m.modifier || [] : [];
  }
  function x(m) {
    return m == null ? "" : h(m) ? m.key : m;
  }
  function b(m, C) {
    return (Array.isArray(m) ? m : [m]).map((k) => {
      const N = x(k);
      return {
        key: N,
        modifier: v(k),
        enabled: N !== null,
        callback: C
      };
    });
  }
  function E() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return De(), Fe("blur", Mt, E), Fe("contextmenu", Mt, E), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !M0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(s(), () => f.set(!1)),
    type: "keyup"
  })), fe({
    get selectionKey() {
      return n();
    },
    set selectionKey(m) {
      n(m), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(m) {
      r(m), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(m) {
      o(m), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(m) {
      i(m), y();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(m) {
      s(m), y();
    }
  });
}
ae(
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
var Jp = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), Qp = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function nd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(h, "$connection", n), i = () => J(v, "$connectionLineType", n), s = () => J(f, "$width", n), a = () => J(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: h,
    connectionLineType: v
  } = Ue();
  let x = /* @__PURE__ */ ne(null);
  ge(
    () => (o(), U(c()), i(), g(x), zs),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: k, fromPosition: N, toPosition: S } = o(), H = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: N,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Er.Bezier:
            ((A) => G(x, A[0]))(wc(H));
            break;
          case Er.Step:
            ((A) => G(x, A[0]))(Ci({ ...H, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((A) => G(x, A[0]))(Ci(H));
            break;
          default:
            ((A) => G(x, A[0]))(zs(H));
        }
      }
    }
  ), gt(), De();
  var b = tt(), E = xe(b);
  {
    var m = (p) => {
      var k = Qp(), N = X(k), S = X(N);
      pt(S, t, "connectionLine", {});
      var H = B(S);
      {
        var A = (D) => {
          var z = Jp();
          Ee(() => {
            we(z, "d", g(x)), dt(z, u());
          }), O(D, z);
        };
        be(H, (D) => {
          c() || D(A);
        });
      }
      F(N), F(k), Ee(
        (D) => {
          we(k, "width", s()), we(k, "height", a()), dt(k, l()), mt(N, 0, D);
        },
        [
          () => fn(Pt([
            "svelte-flow__connection",
            b0(o().isValid)
          ]))
        ],
        me
      ), O(p, k);
    };
    be(E, (p) => {
      o().inProgress && p(m);
    });
  }
  O(e, b);
  var C = fe({
    get containerStyle() {
      return l();
    },
    set containerStyle(p) {
      l(p), y();
    },
    get style() {
      return u();
    },
    set style(p) {
      u(p), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(p) {
      c(p), y();
    }
  });
  return r(), C;
}
ae(
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
var e2 = /* @__PURE__ */ oe("<div><!></div>");
function Lo(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = nt(), s = () => J(f, "$selectionRectMode", o), a = /* @__PURE__ */ ne();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ue();
  ge(() => U(l()), () => {
    G(a, `${l()}`.split("-"));
  }), gt(), De();
  var d = e2();
  let h;
  var v = X(d);
  pt(v, t, "default", {}), F(d), Ee(
    (b) => h = ln(d, h, {
      class: b,
      style: u(),
      ...r,
      [or]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => Pt([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    me
  ), O(e, d);
  var x = fe({
    get position() {
      return l();
    },
    set position(b) {
      l(b), y();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), y();
    },
    get class() {
      return c();
    },
    set class(b) {
      c(b), y();
    }
  });
  return i(), x;
}
ae(Lo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var t2 = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function rd(e, t) {
  de(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  De();
  var o = tt(), i = xe(o);
  {
    var s = (a) => {
      Lo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = t2();
          O(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    be(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return O(e, o), fe({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), y();
    },
    get position() {
      return r();
    },
    set position(a) {
      r(a), y();
    }
  });
}
ae(rd, { proOptions: {}, position: {} }, [], [], !0);
function zl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const n2 = (e) => Object.keys(e);
function Rl(e, t) {
  n2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function r2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function o2(e = "light") {
  return qt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = r2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var i2 = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), s2 = /* @__PURE__ */ oe("<!> <!>", 1), a2 = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const l2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function od(e, t) {
  const n = S1(t), r = st(t, [
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
  de(t, !1), et(e, l2);
  const [i, s] = nt(), a = () => J(C(), "$viewport", i), l = () => J(es, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), h = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), N = w(t, "selectionKey", 12, void 0), S = w(t, "selectionMode", 12, void 0), H = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), z = w(t, "nodesDraggable", 12, void 0), L = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), $ = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), _ = w(t, "deleteKey", 12, void 0), P = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), V = w(t, "connectionMode", 28, () => dr.Strict), R = w(t, "connectionLineStyle", 12, ""), Y = w(t, "connectionLineContainerStyle", 12, ""), K = w(t, "onMoveStart", 12, void 0), re = w(t, "onMove", 12, void 0), j = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), se = w(t, "translateExtent", 12, void 0), ve = w(t, "nodeExtent", 12, void 0), he = w(t, "onlyRenderVisibleElements", 12, void 0), te = w(t, "panOnScrollMode", 28, () => Gn.Free), Ae = w(t, "preventScrolling", 12, !0), le = w(t, "zoomOnScroll", 12, !0), ce = w(t, "zoomOnDoubleClick", 12, !0), ye = w(t, "zoomOnPinch", 12, !0), Pe = w(t, "panOnScroll", 12, !1), Ve = w(t, "panOnDrag", 12, !0), ee = w(t, "selectionOnDrag", 12, void 0), We = w(t, "autoPanOnConnect", 12, !0), je = w(t, "autoPanOnNodeDrag", 12, !0), Ye = w(t, "onerror", 12, void 0), ie = w(t, "ondelete", 12, void 0), pe = w(t, "onedgecreate", 12, void 0), Se = w(t, "attributionPosition", 12, void 0), Ne = w(t, "proOptions", 12, void 0), at = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), Q = w(t, "height", 12, void 0), Ze = w(t, "colorMode", 12, "light"), ue = w(t, "onconnect", 12, void 0), tn = w(t, "onconnectstart", 12, void 0), nn = w(t, "onconnectend", 12, void 0), vn = w(t, "onbeforedelete", 12, void 0), Te = w(t, "oninit", 12, void 0), rt = w(t, "nodeOrigin", 12, void 0), ze = w(t, "paneClickDistance", 12, 0), Oe = w(t, "nodeClickDistance", 12, 0), ot = w(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = w(t, "style", 12, void 0), Kt = w(t, "class", 12, void 0), Gr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), Nt = /* @__PURE__ */ ne();
  const yr = a() || m(), it = a1(Gi) ? Ue() : Mp({
    nodes: q(d()),
    edges: q(h()),
    width: ut(),
    height: Q(),
    fitView: v(),
    nodeOrigin: rt(),
    nodeExtent: ve()
  });
  Wt(() => (it.width.set(g(wt)), it.height.set(g(Nt)), it.domNode.set(g(Gr)), it.syncNodeStores(d()), it.syncEdgeStores(h()), it.syncViewport(C()), v() !== void 0 && it.fitViewOnInit.set(v()), x() && it.fitViewOptions.set(x()), zl(it, {
    nodeTypes: p(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: E(),
    translateExtent: se(),
    paneClickDistance: ze()
  }), () => {
    it.reset();
  }));
  const { initialized: es } = it;
  let Ur = /* @__PURE__ */ ne(!1);
  ge(
    () => (g(wt), g(Nt)),
    () => {
      g(wt) !== void 0 && g(Nt) !== void 0 && (it.width.set(g(wt)), it.height.set(g(Nt)));
    }
  ), ge(
    () => (g(Ur), l(), U(Te())),
    () => {
      var Z;
      !g(Ur) && l() && ((Z = Te()) == null || Z(), G(Ur, !0));
    }
  ), ge(
    () => (U(f()), U(T()), U(P()), U(S()), U(M()), U(ot()), U(z()), U(L()), U($()), U(he()), U(W()), U(We()), U(je()), U(Ye()), U(ie()), U(pe()), U(V()), U(I()), U(ue()), U(tn()), U(nn()), U(vn()), U(rt()), Rl),
    () => {
      const Z = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: P(),
        selectionMode: S(),
        snapGrid: M(),
        defaultMarkerColor: ot(),
        nodesDraggable: z(),
        nodesConnectable: L(),
        elementsSelectable: $(),
        onlyRenderVisibleElements: he(),
        isValidConnection: W(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: je(),
        onerror: Ye(),
        ondelete: ie(),
        onedgecreate: pe(),
        connectionMode: V(),
        nodeDragThreshold: I(),
        onconnect: ue(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: vn(),
        nodeOrigin: rt()
      };
      Rl(it, Z);
    }
  ), ge(
    () => (U(p()), U(k()), U(b()), U(E()), U(se()), U(ze())),
    () => {
      zl(it, {
        nodeTypes: p(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: E(),
        translateExtent: se(),
        paneClickDistance: ze()
      });
    }
  ), ge(
    () => U(Ze()),
    () => {
      O1(G(c, o2(Ze())), "$colorModeClass", i);
    }
  ), gt(), De();
  var Lt = a2();
  let Yo;
  var Zo = X(Lt);
  td(Zo, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return H();
    },
    get multiSelectionKey() {
      return A();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Fo = B(Zo, 2);
  const ts = /* @__PURE__ */ me(() => te() === void 0 ? Gn.Free : te()), Jd = /* @__PURE__ */ me(() => Ae() === void 0 ? !0 : Ae()), Qd = /* @__PURE__ */ me(() => le() === void 0 ? !0 : le()), ef = /* @__PURE__ */ me(() => ce() === void 0 ? !0 : ce()), tf = /* @__PURE__ */ me(() => ye() === void 0 ? !0 : ye()), nf = /* @__PURE__ */ me(() => Pe() === void 0 ? !1 : Pe()), rf = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve()), of = /* @__PURE__ */ me(() => ze() === void 0 ? 0 : ze());
  Zc(Fo, {
    initialViewport: yr,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return re();
    },
    get onMoveEnd() {
      return j();
    },
    get panOnScrollMode() {
      return g(ts);
    },
    get preventScrolling() {
      return g(Jd);
    },
    get zoomOnScroll() {
      return g(Qd);
    },
    get zoomOnDoubleClick() {
      return g(ef);
    },
    get zoomOnPinch() {
      return g(tf);
    },
    get panOnScroll() {
      return g(nf);
    },
    get panOnDrag() {
      return g(rf);
    },
    get paneClickDistance() {
      return g(of);
    },
    children: (Z, $w) => {
      const lf = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve());
      Fc(Z, {
        get panOnDrag() {
          return g(lf);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(jr) {
            Le.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Le.call(this, t, jr);
          }
        },
        children: (jr, Sw) => {
          var Ma = s2(), Ha = xe(Ma);
          Xc(Ha, {
            children: (cf, Pw) => {
              var Va = i2(), Da = xe(Va);
              Jc(Da, {
                get defaultEdgeOptions() {
                  return at();
                },
                $$events: {
                  edgeclick(Re) {
                    Le.call(this, t, Re);
                  },
                  edgecontextmenu(Re) {
                    Le.call(this, t, Re);
                  },
                  edgemouseenter(Re) {
                    Le.call(this, t, Re);
                  },
                  edgemouseleave(Re) {
                    Le.call(this, t, Re);
                  }
                }
              });
              var Aa = B(Da, 2);
              nd(Aa, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return R();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Re, Nw) => {
                    var La = tt(), ff = xe(La);
                    pt(ff, t, "connectionLine", {}), O(Re, La);
                  }
                }
              });
              var Oa = B(Aa, 6);
              Kc(Oa, {
                get nodeClickDistance() {
                  return Oe();
                },
                $$events: {
                  nodeclick(Re) {
                    Le.call(this, t, Re);
                  },
                  nodemouseenter(Re) {
                    Le.call(this, t, Re);
                  },
                  nodemousemove(Re) {
                    Le.call(this, t, Re);
                  },
                  nodemouseleave(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Le.call(this, t, Re);
                  },
                  nodecontextmenu(Re) {
                    Le.call(this, t, Re);
                  }
                }
              });
              var df = B(Oa, 2);
              ed(df, {
                $$events: {
                  selectionclick(Re) {
                    Le.call(this, t, Re);
                  },
                  selectioncontextmenu(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Le.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Le.call(this, t, Re);
                  }
                }
              }), O(cf, Va);
            },
            $$slots: { default: !0 }
          });
          var uf = B(Ha, 2);
          Qc(uf, {}), O(jr, Ma);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ta = B(Fo, 2);
  rd(Ta, {
    get proOptions() {
      return Ne();
    },
    get position() {
      return Se();
    }
  });
  var sf = B(Ta, 2);
  pt(sf, t, "default", {}), F(Lt), Cn(Lt, (Z) => G(Gr, Z), () => g(Gr)), Ee(
    (Z) => Yo = ln(
      Lt,
      Yo,
      {
        style: rn(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Pt([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    me
  ), Ja(Lt, "clientWidth", (Z) => G(wt, Z)), Ja(Lt, "clientHeight", (Z) => G(Nt, Z)), Fe("dragover", Lt, function(Z) {
    Le.call(this, t, Z);
  }), Fe("drop", Lt, function(Z) {
    Le.call(this, t, Z);
  }), O(e, Lt);
  var af = fe({
    get id() {
      return f();
    },
    set id(Z) {
      f(Z), y();
    },
    get nodes() {
      return d();
    },
    set nodes(Z) {
      d(Z), y();
    },
    get edges() {
      return h();
    },
    set edges(Z) {
      h(Z), y();
    },
    get fitView() {
      return v();
    },
    set fitView(Z) {
      v(Z), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Z) {
      x(Z), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Z) {
      b(Z), y();
    },
    get maxZoom() {
      return E();
    },
    set maxZoom(Z) {
      E(Z), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Z) {
      m(Z), y();
    },
    get viewport() {
      return C();
    },
    set viewport(Z) {
      C(Z), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(Z) {
      p(Z), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Z) {
      k(Z), y();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(Z) {
      N(Z), y();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(Z) {
      S(Z), y();
    },
    get panActivationKey() {
      return H();
    },
    set panActivationKey(Z) {
      H(Z), y();
    },
    get multiSelectionKey() {
      return A();
    },
    set multiSelectionKey(Z) {
      A(Z), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(Z) {
      D(Z), y();
    },
    get nodesDraggable() {
      return z();
    },
    set nodesDraggable(Z) {
      z(Z), y();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Z) {
      L(Z), y();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(Z) {
      I(Z), y();
    },
    get elementsSelectable() {
      return $();
    },
    set elementsSelectable(Z) {
      $(Z), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(Z) {
      M(Z), y();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(Z) {
      _(Z), y();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(Z) {
      P(Z), y();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(Z) {
      T(Z), y();
    },
    get connectionMode() {
      return V();
    },
    set connectionMode(Z) {
      V(Z), y();
    },
    get connectionLineStyle() {
      return R();
    },
    set connectionLineStyle(Z) {
      R(Z), y();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(Z) {
      Y(Z), y();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Z) {
      K(Z), y();
    },
    get onMove() {
      return re();
    },
    set onMove(Z) {
      re(Z), y();
    },
    get onMoveEnd() {
      return j();
    },
    set onMoveEnd(Z) {
      j(Z), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Z) {
      W(Z), y();
    },
    get translateExtent() {
      return se();
    },
    set translateExtent(Z) {
      se(Z), y();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(Z) {
      ve(Z), y();
    },
    get onlyRenderVisibleElements() {
      return he();
    },
    set onlyRenderVisibleElements(Z) {
      he(Z), y();
    },
    get panOnScrollMode() {
      return te();
    },
    set panOnScrollMode(Z) {
      te(Z), y();
    },
    get preventScrolling() {
      return Ae();
    },
    set preventScrolling(Z) {
      Ae(Z), y();
    },
    get zoomOnScroll() {
      return le();
    },
    set zoomOnScroll(Z) {
      le(Z), y();
    },
    get zoomOnDoubleClick() {
      return ce();
    },
    set zoomOnDoubleClick(Z) {
      ce(Z), y();
    },
    get zoomOnPinch() {
      return ye();
    },
    set zoomOnPinch(Z) {
      ye(Z), y();
    },
    get panOnScroll() {
      return Pe();
    },
    set panOnScroll(Z) {
      Pe(Z), y();
    },
    get panOnDrag() {
      return Ve();
    },
    set panOnDrag(Z) {
      Ve(Z), y();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(Z) {
      ee(Z), y();
    },
    get autoPanOnConnect() {
      return We();
    },
    set autoPanOnConnect(Z) {
      We(Z), y();
    },
    get autoPanOnNodeDrag() {
      return je();
    },
    set autoPanOnNodeDrag(Z) {
      je(Z), y();
    },
    get onerror() {
      return Ye();
    },
    set onerror(Z) {
      Ye(Z), y();
    },
    get ondelete() {
      return ie();
    },
    set ondelete(Z) {
      ie(Z), y();
    },
    get onedgecreate() {
      return pe();
    },
    set onedgecreate(Z) {
      pe(Z), y();
    },
    get attributionPosition() {
      return Se();
    },
    set attributionPosition(Z) {
      Se(Z), y();
    },
    get proOptions() {
      return Ne();
    },
    set proOptions(Z) {
      Ne(Z), y();
    },
    get defaultEdgeOptions() {
      return at();
    },
    set defaultEdgeOptions(Z) {
      at(Z), y();
    },
    get width() {
      return ut();
    },
    set width(Z) {
      ut(Z), y();
    },
    get height() {
      return Q();
    },
    set height(Z) {
      Q(Z), y();
    },
    get colorMode() {
      return Ze();
    },
    set colorMode(Z) {
      Ze(Z), y();
    },
    get onconnect() {
      return ue();
    },
    set onconnect(Z) {
      ue(Z), y();
    },
    get onconnectstart() {
      return tn();
    },
    set onconnectstart(Z) {
      tn(Z), y();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(Z) {
      nn(Z), y();
    },
    get onbeforedelete() {
      return vn();
    },
    set onbeforedelete(Z) {
      vn(Z), y();
    },
    get oninit() {
      return Te();
    },
    set oninit(Z) {
      Te(Z), y();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(Z) {
      rt(Z), y();
    },
    get paneClickDistance() {
      return ze();
    },
    set paneClickDistance(Z) {
      ze(Z), y();
    },
    get nodeClickDistance() {
      return Oe();
    },
    set nodeClickDistance(Z) {
      Oe(Z), y();
    },
    get defaultMarkerColor() {
      return ot();
    },
    set defaultMarkerColor(Z) {
      ot(Z), y();
    },
    get style() {
      return rn();
    },
    set style(Z) {
      rn(Z), y();
    },
    get class() {
      return Kt();
    },
    set class(Z) {
      Kt(Z), y();
    }
  });
  return s(), af;
}
ae(
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
  de(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Yc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Dr(Gi, { getStore: () => l }), ua(() => {
    l.reset();
  }), De();
  var u = tt(), c = xe(u);
  return pt(c, t, "default", {}), O(e, u), fe({
    get initialNodes() {
      return n();
    },
    set initialNodes(f) {
      n(f), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(f) {
      r(f), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(f) {
      o(f), y();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(f) {
      i(f), y();
    },
    get fitView() {
      return s();
    },
    set fitView(f) {
      s(f), y();
    },
    get nodeOrigin() {
      return a();
    },
    set nodeOrigin(f) {
      a(f), y();
    }
  });
}
ae(
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
var u2 = /* @__PURE__ */ oe("<button><!></button>");
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
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  De();
  var c = u2();
  let f;
  var d = X(c);
  return pt(d, t, "default", { class: "button-svg" }), F(c), Ee(
    (h) => f = ln(c, f, {
      type: "button",
      class: h,
      ...r,
      [or]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": s(),
        "--xy-controls-button-color-props": a(),
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
    me
  ), Fe("click", c, function(h) {
    Le.call(this, t, h);
  }), O(e, c), fe({
    get class() {
      return o();
    },
    set class(h) {
      o(h), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(h) {
      i(h), y();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(h) {
      s(h), y();
    },
    get color() {
      return a();
    },
    set color(h) {
      a(h), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(h) {
      l(h), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(h) {
      u(h), y();
    }
  });
}
ae(
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
var c2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function sd(e) {
  var t = c2();
  O(e, t);
}
ae(sd, {}, [], [], !0);
var d2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = d2();
  O(e, t);
}
ae(ad, {}, [], [], !0);
var f2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ld(e) {
  var t = f2();
  O(e, t);
}
ae(ld, {}, [], [], !0);
var g2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ud(e) {
  var t = g2();
  O(e, t);
}
ae(ud, {}, [], [], !0);
var h2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function cd(e) {
  var t = h2();
  O(e, t);
}
ae(cd, {}, [], [], !0);
var v2 = /* @__PURE__ */ oe("<!> <!>", 1), p2 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(T, "$nodesDraggable", n), i = () => J(V, "$nodesConnectable", n), s = () => J(R, "$elementsSelectable", n), a = () => J(M, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(P, "$maxZoom", n), c = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne();
  let v = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), N = w(t, "buttonBorderColor", 12, void 0), S = w(t, "ariaLabel", 12, void 0), H = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), z = w(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: I,
    fitView: $,
    viewport: M,
    minZoom: _,
    maxZoom: P,
    nodesDraggable: T,
    nodesConnectable: V,
    elementsSelectable: R
  } = Ue(), Y = {
    bgColor: m(),
    bgColorHover: C(),
    color: p(),
    colorHover: k(),
    borderColor: N()
  }, K = () => {
    L();
  }, re = () => {
    I();
  }, j = () => {
    $(D());
  }, W = () => {
    G(c, !g(c)), T.set(g(c)), V.set(g(c)), R.set(g(c));
  };
  ge(
    () => (o(), i(), s()),
    () => {
      G(c, o() || i() || s());
    }
  ), ge(() => (a(), l()), () => {
    G(f, a().zoom <= l());
  }), ge(() => (a(), u()), () => {
    G(d, a().zoom >= u());
  }), ge(() => U(A()), () => {
    G(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), De();
  const se = /* @__PURE__ */ me(() => Pt([
    "svelte-flow__controls",
    g(h),
    z()
  ])), ve = /* @__PURE__ */ me(() => S() ?? "Svelte Flow controls");
  Lo(e, {
    get class() {
      return g(se);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return H();
    },
    children: (te, Ae) => {
      var le = p2(), ce = xe(le);
      pt(ce, t, "before", {});
      var ye = B(ce, 2);
      {
        var Pe = (pe) => {
          var Se = v2(), Ne = xe(Se);
          so(Ne, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(d);
              }
            },
            Y,
            {
              $$events: { click: K },
              children: (ut, Q) => {
                sd(ut);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = B(Ne, 2);
          so(at, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(f);
              }
            },
            Y,
            {
              $$events: { click: re },
              children: (ut, Q) => {
                ad(ut);
              },
              $$slots: { default: !0 }
            }
          )), O(pe, Se);
        };
        be(ye, (pe) => {
          x() && pe(Pe);
        });
      }
      var Ve = B(ye, 2);
      {
        var ee = (pe) => {
          so(pe, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: j },
              children: (Se, Ne) => {
                ld(Se);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(Ve, (pe) => {
          b() && pe(ee);
        });
      }
      var We = B(Ve, 2);
      {
        var je = (pe) => {
          so(pe, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: W },
              children: (Se, Ne) => {
                var at = tt(), ut = xe(at);
                {
                  var Q = (ue) => {
                    cd(ue);
                  }, Ze = (ue) => {
                    ud(ue);
                  };
                  be(ut, (ue) => {
                    g(c) ? ue(Q) : ue(Ze, !1);
                  });
                }
                O(Se, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(We, (pe) => {
          E() && pe(je);
        });
      }
      var Ye = B(We, 2);
      pt(Ye, t, "default", {});
      var ie = B(Ye, 2);
      pt(ie, t, "after", {}), O(te, le);
    },
    $$slots: { default: !0 }
  });
  var he = fe({
    get position() {
      return v();
    },
    set position(te) {
      v(te), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(te) {
      x(te), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(te) {
      b(te), y();
    },
    get showLock() {
      return E();
    },
    set showLock(te) {
      E(te), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(te) {
      m(te), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(te) {
      C(te), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(te) {
      p(te), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(te) {
      k(te), y();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(te) {
      N(te), y();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(te) {
      S(te), y();
    },
    get style() {
      return H();
    },
    set style(te) {
      H(te), y();
    },
    get orientation() {
      return A();
    },
    set orientation(te) {
      A(te), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(te) {
      D(te), y();
    },
    get class() {
      return z();
    },
    set class(te) {
      z(te), y();
    }
  });
  return r(), he;
}
ae(
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
var Un;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Un || (Un = {}));
var m2 = /* @__PURE__ */ Ce("<circle></circle>");
function fd(e, t) {
  de(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  De();
  var o = m2();
  return Ee(
    (i) => {
      we(o, "cx", n()), we(o, "cy", n()), we(o, "r", n()), mt(o, 0, i);
    },
    [
      () => fn(Pt([
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
      n(i), y();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), y();
    }
  });
}
ae(fd, { radius: {}, class: {} }, [], [], !0);
var y2 = /* @__PURE__ */ Ce("<path></path>");
function gd(e, t) {
  de(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  De();
  var s = y2();
  return Ee(
    (a) => {
      we(s, "stroke-width", n()), we(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, a);
    },
    [
      () => fn(Pt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    me
  ), O(e, s), fe({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), y();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), y();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), y();
    }
  });
}
ae(
  gd,
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
const w2 = {
  [Un.Dots]: 1,
  [Un.Lines]: 1,
  [Un.Cross]: 6
};
var _2 = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const x2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function hd(e, t) {
  de(t, !1), et(e, x2);
  const [n, r] = nt(), o = () => J(k, "$flowId", n), i = () => J(p, "$viewport", n), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Un.Dots), h = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: p, flowId: k } = Ue(), N = v() || w2[d()], S = d() === Un.Dots, H = d() === Un.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  ge(
    () => (o(), U(f())),
    () => {
      G(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ge(() => i(), () => {
    G(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), ge(() => i(), () => {
    G(l, N * i().zoom);
  }), ge(() => (g(l), g(a)), () => {
    G(u, H ? [g(l), g(l)] : g(a));
  }), ge(
    () => (g(l), g(u)),
    () => {
      G(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), gt(), De();
  var D = _2();
  let z;
  var L = X(D), I = X(L);
  {
    var $ = (T) => {
      const V = /* @__PURE__ */ me(() => g(l) / 2);
      fd(T, {
        get radius() {
          return g(V);
        },
        get class() {
          return m();
        }
      });
    }, M = (T) => {
      gd(T, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return m();
        }
      });
    };
    be(I, (T) => {
      S ? T($) : T(M, !1);
    });
  }
  F(L);
  var _ = B(L);
  F(D), Ee(
    (T) => {
      mt(D, 0, T, "svelte-1r7pe8d"), z = dt(D, "", z, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": E()
      }), we(L, "id", g(s)), we(L, "x", i().x % g(a)[0]), we(L, "y", i().y % g(a)[1]), we(L, "width", g(a)[0]), we(L, "height", g(a)[1]), we(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), we(_, "fill", `url(#${g(s)})`);
    },
    [
      () => fn(Pt(["svelte-flow__background", C()]))
    ],
    me
  ), O(e, D);
  var P = fe({
    get id() {
      return f();
    },
    set id(T) {
      f(T), y();
    },
    get variant() {
      return d();
    },
    set variant(T) {
      d(T), y();
    },
    get gap() {
      return h();
    },
    set gap(T) {
      h(T), y();
    },
    get size() {
      return v();
    },
    set size(T) {
      v(T), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(T) {
      x(T), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(T) {
      b(T), y();
    },
    get patternColor() {
      return E();
    },
    set patternColor(T) {
      E(T), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(T) {
      m(T), y();
    },
    get class() {
      return C();
    },
    set class(T) {
      C(T), y();
    }
  });
  return r(), P;
}
ae(
  hd,
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
var b2 = /* @__PURE__ */ Ce("<rect></rect>");
function vd(e, t) {
  de(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  De();
  var h = b2();
  let v;
  return Ee(
    (x, b) => {
      v = mt(h, 0, x, null, v, b), we(h, "x", n()), we(h, "y", r()), we(h, "rx", s()), we(h, "ry", s()), we(h, "width", o()), we(h, "height", i()), dt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), we(h, "shape-rendering", l());
    },
    [
      () => fn(Pt(["svelte-flow__minimap-node", d()])),
      () => ({ selected: f() })
    ],
    me
  ), O(e, h), fe({
    get x() {
      return n();
    },
    set x(x) {
      n(x), y();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), y();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), y();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), y();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x) {
      s(x), y();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), y();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), y();
    },
    get class() {
      return d();
    },
    set class(x) {
      d(x), y();
    }
  });
}
ae(
  vd,
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
function ps(e, t) {
  const n = sp({
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
const ms = (e) => e instanceof Function ? e : () => e;
var C2 = /* @__PURE__ */ Ce("<title> </title>"), k2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function pd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(Ve, "$flowId", n), i = () => J(ce, "$viewport", n), s = () => J(ye, "$containerWidth", n), a = () => J(Pe, "$containerHeight", n), l = () => J(le, "$nodeLookup", n), u = () => J(Ae, "$nodes", n), c = () => J(ee, "$panZoom", n), f = () => J(We, "$translateExtent", n), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), m = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), p = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), N = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), H = /* @__PURE__ */ ne();
  let A = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), z = w(t, "nodeStrokeColor", 12, "transparent"), L = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), $ = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), _ = w(t, "bgColor", 12, void 0), P = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), V = w(t, "maskStrokeWidth", 12, void 0), R = w(t, "width", 12, void 0), Y = w(t, "height", 12, void 0), K = w(t, "pannable", 12, !0), re = w(t, "zoomable", 12, !0), j = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), se = w(t, "style", 12, ""), ve = w(t, "class", 12, "");
  const he = 200, te = 150, {
    nodes: Ae,
    nodeLookup: le,
    viewport: ce,
    width: ye,
    height: Pe,
    flowId: Ve,
    panZoom: ee,
    translateExtent: We
  } = Ue(), je = L() === void 0 ? void 0 : ms(L()), Ye = ms(z()), ie = ms(I()), pe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Se = `svelte-flow__minimap-desc-${o()}`;
  let Ne = /* @__PURE__ */ ne(g(d));
  const at = () => g(E);
  ge(
    () => (i(), s(), a()),
    () => {
      G(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ge(
    () => (l(), g(d), u()),
    () => {
      G(Ne, l().size > 0 ? vc(Do(l()), g(d)) : g(d)), u();
    }
  ), ge(() => U(R()), () => {
    G(h, R() ?? he);
  }), ge(() => U(Y()), () => {
    G(v, Y() ?? te);
  }), ge(
    () => (g(Ne), g(h)),
    () => {
      G(x, g(Ne).width / g(h));
    }
  ), ge(
    () => (g(Ne), g(v)),
    () => {
      G(b, g(Ne).height / g(v));
    }
  ), ge(
    () => (g(x), g(b)),
    () => {
      G(E, Math.max(g(x), g(b)));
    }
  ), ge(() => (g(E), g(h)), () => {
    G(m, g(E) * g(h));
  }), ge(
    () => (g(E), g(v)),
    () => {
      G(C, g(E) * g(v));
    }
  ), ge(() => g(E), () => {
    G(p, 5 * g(E));
  }), ge(
    () => (g(Ne), g(m), g(p)),
    () => {
      G(k, g(Ne).x - (g(m) - g(Ne).width) / 2 - g(p));
    }
  ), ge(
    () => (g(Ne), g(C), g(p)),
    () => {
      G(N, g(Ne).y - (g(C) - g(Ne).height) / 2 - g(p));
    }
  ), ge(() => (g(m), g(p)), () => {
    G(S, g(m) + g(p) * 2);
  }), ge(() => (g(C), g(p)), () => {
    G(H, g(C) + g(p) * 2);
  }), gt(), De();
  const ut = /* @__PURE__ */ me(() => se() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), Q = /* @__PURE__ */ me(() => Pt(["svelte-flow__minimap", ve()]));
  Lo(e, {
    get position() {
      return A();
    },
    get style() {
      return g(ut);
    },
    get class() {
      return g(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ue, tn) => {
      var nn = tt(), vn = xe(nn);
      {
        var Te = (rt) => {
          var ze = k2();
          we(ze, "aria-labelledby", Se);
          let Oe;
          var ot = X(ze);
          {
            var rn = (wt) => {
              var Nt = C2();
              we(Nt, "id", Se);
              var yr = X(Nt, !0);
              F(Nt), Ee(() => Zt(yr, D())), O(wt, Nt);
            };
            be(ot, (wt) => {
              D() && wt(rn);
            });
          }
          var Kt = B(ot);
          Dt(Kt, 1, u, (wt) => wt.id, (wt, Nt) => {
            var yr = tt();
            const it = /* @__PURE__ */ me(() => l().get(g(Nt).id));
            var es = xe(yr);
            {
              var Ur = (Lt) => {
                const Yo = /* @__PURE__ */ me(() => nr(g(it))), Zo = /* @__PURE__ */ me(() => je == null ? void 0 : je(g(it))), Fo = /* @__PURE__ */ me(() => Ye(g(it))), ts = /* @__PURE__ */ me(() => ie(g(it)));
                vd(Lt, ct(
                  {
                    get x() {
                      return g(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(it).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Yo),
                  {
                    get selected() {
                      return g(it).selected;
                    },
                    get color() {
                      return g(Zo);
                    },
                    get borderRadius() {
                      return $();
                    },
                    get strokeColor() {
                      return g(Fo);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: pe,
                    get class() {
                      return g(ts);
                    }
                  }
                ));
              };
              be(es, (Lt) => {
                g(it) && mc(g(it)) && Lt(Ur);
              });
            }
            O(wt, yr);
          });
          var Gr = B(Kt);
          F(ze), vt(ze, (wt, Nt) => ps == null ? void 0 : ps(wt, Nt), () => ({
            panZoom: c(),
            viewport: ce,
            getViewScale: at,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: j(),
            zoomStep: W(),
            pannable: K(),
            zoomable: re()
          })), Ee(() => {
            we(ze, "width", g(h)), we(ze, "height", g(v)), we(ze, "viewBox", `${g(k) ?? ""} ${g(N) ?? ""} ${g(S) ?? ""} ${g(H) ?? ""}`), Oe = dt(ze, "", Oe, {
              "--xy-minimap-mask-background-color-props": P(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": V() ? V() * g(E) : void 0
            }), we(Gr, "d", `M${g(k) - g(p)},${g(N) - g(p)}h${g(S) + g(p) * 2}v${g(H) + g(p) * 2}h${-g(S) - g(p) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), O(rt, ze);
        };
        be(vn, (rt) => {
          c() && rt(Te);
        });
      }
      O(ue, nn);
    },
    $$slots: { default: !0 }
  });
  var Ze = fe({
    get position() {
      return A();
    },
    set position(ue) {
      A(ue), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(ue) {
      D(ue), y();
    },
    get nodeStrokeColor() {
      return z();
    },
    set nodeStrokeColor(ue) {
      z(ue), y();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(ue) {
      L(ue), y();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(ue) {
      I(ue), y();
    },
    get nodeBorderRadius() {
      return $();
    },
    set nodeBorderRadius(ue) {
      $(ue), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(ue) {
      M(ue), y();
    },
    get bgColor() {
      return _();
    },
    set bgColor(ue) {
      _(ue), y();
    },
    get maskColor() {
      return P();
    },
    set maskColor(ue) {
      P(ue), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(ue) {
      T(ue), y();
    },
    get maskStrokeWidth() {
      return V();
    },
    set maskStrokeWidth(ue) {
      V(ue), y();
    },
    get width() {
      return R();
    },
    set width(ue) {
      R(ue), y();
    },
    get height() {
      return Y();
    },
    set height(ue) {
      Y(ue), y();
    },
    get pannable() {
      return K();
    },
    set pannable(ue) {
      K(ue), y();
    },
    get zoomable() {
      return re();
    },
    set zoomable(ue) {
      re(ue), y();
    },
    get inversePan() {
      return j();
    },
    set inversePan(ue) {
      j(ue), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ue) {
      W(ue), y();
    },
    get style() {
      return se();
    },
    set style(ue) {
      se(ue), y();
    },
    get class() {
      return ve();
    },
    set class(ue) {
      ve(ue), y();
    }
  });
  return r(), Ze;
}
ae(
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
const Bl = (e) => k0(e);
function Ot() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: h, nodeLookup: v, nodeOrigin: x, edgeLookup: b, connectionLookup: E } = Ue(), m = (k) => {
    var D, z;
    const N = q(v), S = Bl(k) ? k : N.get(k.id), H = S.parentId ? P0(S.position, S.measured, S.parentId, N, q(x)) : S.position, A = {
      ...S,
      position: H,
      width: ((D = S.measured) == null ? void 0 : D.width) ?? S.width,
      height: ((z = S.measured) == null ? void 0 : z.height) ?? S.height
    };
    return zr(A);
  }, C = (k, N, S = { replace: !1 }) => {
    var D;
    const H = (D = q(v).get(k)) == null ? void 0 : D.internals.userNode;
    if (!H)
      return;
    const A = typeof N == "function" ? N(H) : N;
    S.replace ? f.update((z) => z.map((L) => L.id === k ? Bl(A) ? A : { ...L, ...A } : L)) : (Object.assign(H, A), f.update((z) => z));
  }, p = (k) => q(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (k) => {
      var N;
      return (N = p(k)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(f) : Yl(q(v), k),
    getEdge: (k) => q(b).get(k),
    getEdges: (k) => k === void 0 ? q(d) : Yl(q(b), k),
    setZoom: (k, N) => {
      const S = q(c);
      return S ? S.scaleTo(k, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, N) => {
      const S = q(i), H = q(c);
      return H ? (await H.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, N, S) => {
      const H = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : q(u), A = q(c);
      return A ? (await A.setViewport({
        x: q(s) / 2 - k * H,
        y: q(a) / 2 - N * H,
        zoom: H
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, N) => {
      const S = q(c);
      if (!S)
        return Promise.resolve(!1);
      const H = wa(k, q(s), q(a), q(l), q(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await S.setViewport(H, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, N = !0, S) => {
      const H = El(k), A = H ? k : m(k);
      return A ? (S || q(f)).filter((D) => {
        const z = q(v).get(D.id);
        if (!z || !H && D.id === k.id)
          return !1;
        const L = zr(z), I = Co(L, A);
        return N && I > 0 || I >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (k, N, S = !0) => {
      const A = El(k) ? k : m(k);
      if (!A)
        return !1;
      const D = Co(A, N);
      return S && D > 0 || D >= A.width * A.height;
    },
    deleteElements: async ({ nodes: k = [], edges: N = [] }) => {
      const { nodes: S, edges: H } = await fc({
        nodesToRemove: k,
        edgesToRemove: N,
        nodes: q(f),
        edges: q(d),
        onBeforeDelete: q(r)
      });
      return S && f.update((A) => A.filter((D) => !S.some(({ id: z }) => z === D.id))), H && d.update((A) => A.filter((D) => !H.some(({ id: z }) => z === D.id))), {
        deletedNodes: S,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, N = { snapToGrid: !0 }) => {
      const S = q(h);
      if (!S)
        return k;
      const H = N.snapToGrid ? q(o) : !1, { x: A, y: D, zoom: z } = q(i), { x: L, y: I } = S.getBoundingClientRect(), $ = {
        x: k.x - L,
        y: k.y - I
      };
      return Ao($, [A, D, z], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const N = q(h);
      if (!N)
        return k;
      const { x: S, y: H, zoom: A } = q(i), { x: D, y: z } = N.getBoundingClientRect(), L = pc(k, [S, H, A]);
      return {
        x: L.x + D,
        y: L.y + z
      };
    },
    toObject: () => ({
      nodes: q(f).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: q(d).map((k) => ({ ...k })),
      viewport: { ...q(i) }
    }),
    updateNode: C,
    updateNodeData: (k, N, S) => {
      var D;
      const H = (D = q(v).get(k)) == null ? void 0 : D.internals.userNode;
      if (!H)
        return;
      const A = typeof N == "function" ? N(H) : N;
      H.data = S != null && S.replace ? A : { ...H.data, ...A }, f.update((z) => z);
    },
    getNodesBounds: (k) => {
      const N = q(v), S = q(x);
      return E0(k, { nodeLookup: N, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: N, nodeId: S }) => {
      var H;
      return Array.from(((H = q(E).get(`${S}-${k}-${N ?? null}`)) == null ? void 0 : H.values()) ?? []);
    },
    viewport: i
  };
}
function Yl(e, t) {
  var r;
  const n = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const s = "internals" in i ? (r = i.internals) == null ? void 0 : r.userNode : i;
      n.push(s);
    }
  }
  return n;
}
var E2 = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function md(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => J(C, "$nodes", n), i = () => J(m, "$nodeLookup", n), s = () => J(E, "$viewport", n), a = () => J(b, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: E, nodeLookup: m, nodes: C } = Ue(), { getNodesBounds: p } = Ot(), k = lr("svelteflow__node_id");
  let N = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne([]), H = v() !== void 0 ? v() : 10, A = d() !== void 0 ? d() : ke.Top, D = h() !== void 0 ? h() : "center";
  ge(
    () => (o(), U(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || k];
      G(S, M.reduce(
        (_, P) => {
          const T = i().get(P);
          return T && _.push(T), _;
        },
        []
      ));
    }
  ), ge(
    () => (g(S), s()),
    () => {
      const M = p(g(S));
      M && G(N, Z0(M, s(), A, H, D));
    }
  ), ge(() => g(S), () => {
    G(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((M) => (M.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    G(u, o().filter((M) => M.selected).length);
  }), ge(
    () => (U(x()), g(S), g(u)),
    () => {
      G(c, typeof x() == "boolean" ? x() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), gt(), De();
  var z = tt(), L = xe(z);
  {
    var I = (M) => {
      var _ = E2();
      let P;
      var T = X(_);
      pt(T, t, "default", {}), F(_), vt(_, (V, R) => $r == null ? void 0 : $r(V, R), () => ({ domNode: a() })), Ee(
        (V) => {
          we(_, "data-id", V), P = dt(_, "", P, {
            position: "absolute",
            transform: g(N),
            "z-index": g(l)
          });
        },
        [
          () => g(S).reduce((V, R) => `${V}${R.id} `, "").trim()
        ],
        me
      ), O(M, _);
    };
    be(L, (M) => {
      a() && g(c) && g(S) && M(I);
    });
  }
  O(e, z);
  var $ = fe({
    get nodeId() {
      return f();
    },
    set nodeId(M) {
      f(M), y();
    },
    get position() {
      return d();
    },
    set position(M) {
      d(M), y();
    },
    get align() {
      return h();
    },
    set align(M) {
      h(M), y();
    },
    get offset() {
      return v();
    },
    set offset(M) {
      v(M), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(M) {
      x(M), y();
    }
  });
  return r(), $;
}
ae(
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
function mr(e) {
  const { nodes: t, nodeLookup: n } = Ue();
  let r = [], o = !0;
  return qn([t, n], ([, i], s) => {
    var c;
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const f of u) {
      const d = (c = i.get(f)) == null ? void 0 : c.internals.userNode;
      d && a.push({
        id: d.id,
        type: d.type,
        data: d.data
      });
    }
    (!j0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Zl = "tinyflow-component";
class Mw {
  constructor(t) {
    _t(this, "options");
    _t(this, "rootEl");
    _t(this, "svelteFlowInstance");
    if (typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Zl);
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
    const n = document.createElement(Zl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const $2 = () => {
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
      e.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((s) => s.id === r ? { ...s, data: { ...s.data, ...o } } : s)
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
      t.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? { ...s, data: o } : s));
    }
  };
}, oi = $2();
var S2 = /* @__PURE__ */ oe("<button><!></button>");
function Je(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = S2();
  let i;
  var s = X(o);
  return ur(s, () => n() ?? ft), F(o), Ee(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), O(e, o), fe({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ae(Je, { children: {} }, [], [], !0);
var P2 = /* @__PURE__ */ oe("<input>");
function yd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = P2();
  lo(r);
  let o;
  Ee(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
ae(yd, {}, [], [], !0);
var N2 = /* @__PURE__ */ oe("<input>");
function Ct(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = N2();
  lo(r);
  let o;
  Ee(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
ae(Ct, {}, [], [], !0);
var T2 = /* @__PURE__ */ oe("<textarea></textarea>");
function At(e, t) {
  de(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = T2();
  w1(o);
  let i;
  return Ee(() => i = ln(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), fe({
    get value() {
      return n();
    },
    set value(s) {
      n(s), y();
    }
  });
}
ae(At, { value: {} }, [], [], !0);
var M2 = /* @__PURE__ */ oe('<div role="button"><!></div>'), H2 = /* @__PURE__ */ oe("<div></div>");
function wd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  De();
  var l = H2();
  let u;
  return Dt(l, 5, o, po, (c, f, d) => {
    var h = M2();
    we(h, "tabindex", d), h.__click = () => a(g(f), d), h.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a(g(f), d));
    };
    var v = X(h);
    {
      var x = (E) => {
        var m = Be();
        Ee(() => Zt(m, g(f).label)), O(E, m);
      }, b = (E) => {
        var m = tt(), C = xe(m);
        ur(C, () => g(f).label ?? ft), O(E, m);
      };
      be(v, (E) => {
        typeof g(f).label == "string" ? E(x) : E(b, !1);
      });
    }
    F(h), Ee(() => mt(h, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), O(c, h);
  }), F(l), Ee(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), O(e, l), fe({
    get items() {
      return o();
    },
    set items(c) {
      o(c), y();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), y();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), y();
    }
  });
}
zi(["click", "keydown"]);
ae(wd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var V2 = (e, t, n) => t(g(n)), D2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, A2 = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), O2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), L2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), I2 = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), z2 = /* @__PURE__ */ oe("<div></div>");
const R2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function _d(e, t) {
  de(t, !0), et(e, R2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => jt([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = z2();
  return Dt(s, 21, n, po, (a, l, u) => {
    var c = I2(), f = X(c);
    we(f, "tabindex", u), f.__click = [V2, i, l], f.__keydown = [D2, i, l];
    var d = X(f);
    {
      var h = (p) => {
        var k = A2(), N = X(k);
        Wn(N, {
          get target() {
            return g(l).icon;
          }
        }), F(k), O(p, k);
      };
      be(d, (p) => {
        g(l).icon && p(h);
      });
    }
    var v = B(d, 2);
    Wn(v, {
      get target() {
        return g(l).title;
      }
    });
    var x = B(v, 2);
    F(f);
    var b = B(f, 2);
    {
      var E = (p) => {
        var k = O2(), N = X(k);
        Wn(N, {
          get target() {
            return g(l).description;
          }
        }), F(k), O(p, k);
      };
      be(b, (p) => {
        g(l).description && p(E);
      });
    }
    var m = B(b, 2);
    {
      var C = (p) => {
        var k = L2(), N = X(k);
        Wn(N, {
          get target() {
            return g(l).content;
          }
        }), F(k), O(p, k);
      };
      be(m, (p) => {
        o().includes(g(l).key) && p(C);
      });
    }
    F(c), Ee((p) => mt(x, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), O(a, c);
  }), F(s), Ee(() => {
    dt(s, t.style), mt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, s), fe({
    get items() {
      return n();
    },
    set items(a) {
      n(a), y();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), y();
    }
  });
}
zi(["click", "keydown"]);
ae(_d, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  de(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = tt(), o = xe(r);
  {
    var i = (a) => {
      var l = tt(), u = xe(l);
      ur(u, () => n() ?? ft), O(a, l);
    }, s = (a) => {
      var l = tt(), u = xe(l);
      aa(u, n), O(a, l);
    };
    be(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), fe({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ae(Wn, { target: {} }, [], [], !0);
var B2 = (e, t, n) => t(g(n)), Y2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Z2 = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), F2 = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), X2 = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), W2 = /* @__PURE__ */ oe("<!> <!>", 1), K2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), q2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), G2 = /* @__PURE__ */ oe("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (C, p = ft) => {
    var k = tt(), N = xe(k);
    Dt(N, 19, p, (S, H) => `${H}_${S.value}`, (S, H) => {
      var A = F2(), D = xe(A);
      D.__click = [B2, x, H];
      var z = X(D), L = X(z);
      {
        var I = (P) => {
          var T = Y2();
          O(P, T);
        };
        be(L, (P) => {
          g(H).children && g(H).children.length > 0 && P(I);
        });
      }
      F(z);
      var $ = B(z, 2);
      Wn($, {
        get target() {
          return g(H).label;
        }
      }), F(D);
      var M = B(D, 2);
      {
        var _ = (P) => {
          var T = Z2(), V = X(T);
          n(V, () => g(H).children), F(T), O(P, T);
        };
        be(M, (P) => {
          g(H).children && g(H).children.length > 0 && (l() || c().includes(g(H).value)) && P(_);
        });
      }
      O(S, A);
    }), O(C, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ yt(t, [
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
  ]), h = /* @__PURE__ */ Me(() => {
    const C = [], p = (k) => {
      for (let N of k)
        s().length > 0 ? s().includes(N.value) && C.push(N) : a().includes(N.value) && C.push(N), N.children && N.children.length > 0 && p(N.children);
    };
    return p(r()), C;
  }), v;
  function x(C) {
    var p, k;
    if (C.children && C.children.length > 0) {
      (p = o()) == null || p(C);
      return;
    } else
      v == null || v.hide(), (k = i()) == null || k(C);
  }
  var b = G2();
  let E;
  var m = X(b);
  return Cn(
    Bo(m, {
      floating: (p) => {
        var k = X2(), N = X(k);
        n(N, r), F(k), O(p, k);
      },
      children: (p, k) => {
        var N = q2();
        let S;
        var H = X(N);
        Dt(
          H,
          23,
          () => g(h),
          (A, D) => `${D}_${A.value}`,
          (A, D, z) => {
            var L = tt(), I = xe(L);
            {
              var $ = (_) => {
                var P = tt(), T = xe(P);
                {
                  var V = (R) => {
                    Wn(R, {
                      get target() {
                        return g(D).label;
                      }
                    });
                  };
                  be(T, (R) => {
                    g(z) === 0 && R(V);
                  });
                }
                O(_, P);
              }, M = (_) => {
                var P = W2(), T = xe(P);
                Wn(T, {
                  get target() {
                    return g(D).label;
                  }
                });
                var V = B(T, 2);
                {
                  var R = (Y) => {
                    var K = Be(",");
                    O(Y, K);
                  };
                  be(V, (Y) => {
                    g(z) < g(h).length - 1 && Y(R);
                  });
                }
                O(_, P);
              };
              be(I, (_) => {
                u() ? _(M, !1) : _($);
              });
            }
            O(A, L);
          },
          (A) => {
            var D = K2(), z = X(D, !0);
            F(D), Ee(() => Zt(z, f())), O(A, D);
          }
        ), F(H), He(2), F(N), Ee(() => S = ln(N, S, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), O(p, N);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), F(b), Ee(() => E = ln(b, E, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), O(e, b), fe({
    get items() {
      return r();
    },
    set items(C) {
      r(C), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), y();
    },
    get value() {
      return s();
    },
    set value(C = []) {
      s(C), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(C = []) {
      a(C), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), y();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(C) {
      f(C), y();
    }
  });
}
zi(["click"]);
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
const Eo = Math.min, Pr = Math.max, $i = Math.round, yn = (e) => ({
  x: e,
  y: e
}), U2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, j2 = {
  start: "end",
  end: "start"
};
function Bs(e, t, n) {
  return Pr(e, Eo(t, n));
}
function Io(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function zo(e) {
  return e.split("-")[1];
}
function xd(e) {
  return e === "x" ? "y" : "x";
}
function Ea(e) {
  return e === "y" ? "height" : "width";
}
function Br(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function $a(e) {
  return xd(Br(e));
}
function J2(e, t, n) {
  n === void 0 && (n = !1);
  const r = zo(e), o = $a(e), i = Ea(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Si(s)), [s, Si(s)];
}
function Q2(e) {
  const t = Si(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => j2[t]);
}
function em(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function tm(e, t, n, r) {
  const o = zo(e);
  let i = em(gr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ys)))), i;
}
function Si(e) {
  return e.replace(/left|right|bottom|top/g, (t) => U2[t]);
}
function nm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bd(e) {
  return typeof e != "number" ? nm(e) : {
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
function Fl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Br(t), s = $a(t), a = Ea(s), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (zo(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const rm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = Fl(u, r, l), d = r, h = {}, v = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: b,
      fn: E
    } = a[x], {
      x: m,
      y: C,
      data: p,
      reset: k
    } = await E({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, f = C ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...p
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: f
    } = Fl(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: h
  };
};
async function Cd(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = Io(t, e), v = bd(h), b = a[d ? f === "floating" ? "reference" : "floating" : f], E = Pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), p = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: C,
    strategy: l
  }) : m);
  return {
    top: (E.top - k.top + v.top) / p.y,
    bottom: (k.bottom - E.bottom + v.bottom) / p.y,
    left: (E.left - k.left + v.left) / p.x,
    right: (k.right - E.right + v.right) / p.x
  };
}
const om = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Io(e, t) || {};
    if (u == null)
      return {};
    const f = bd(c), d = {
      x: n,
      y: r
    }, h = $a(o), v = Ea(h), x = await s.getDimensions(u), b = h === "y", E = b ? "top" : "left", m = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[h] - d[h] - i.floating[v], k = d[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let S = N ? N[C] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = a.floating[C] || i.floating[v]);
    const H = p / 2 - k / 2, A = S / 2 - x[v] / 2 - 1, D = Eo(f[E], A), z = Eo(f[m], A), L = D, I = S - x[v] - z, $ = S / 2 - x[v] / 2 + H, M = Bs(L, $, I), _ = !l.arrow && zo(o) != null && $ !== M && i.reference[v] / 2 - ($ < L ? D : z) - x[v] / 2 < 0, P = _ ? $ < L ? $ - L : $ - I : 0;
    return {
      [h]: d[h] + P,
      data: {
        [h]: M,
        centerOffset: $ - M - P,
        ..._ && {
          alignmentOffset: P
        }
      },
      reset: _
    };
  }
}), im = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: x = !0,
        ...b
      } = Io(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const E = gr(o), m = Br(a), C = gr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (C || !x ? [Si(a)] : Q2(a)), N = v !== "none";
      !d && N && k.push(...tm(a, x, v, p));
      const S = [a, ...k], H = await Cd(t, b), A = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(H[E]), f) {
        const $ = J2(o, s, p);
        A.push(H[$[0]], H[$[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: A
      }], !A.every(($) => $ <= 0)) {
        var z, L;
        const $ = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, M = S[$];
        if (M)
          return {
            data: {
              index: $,
              overflows: D
            },
            reset: {
              placement: M
            }
          };
        let _ = (L = D.filter((P) => P.overflows[0] <= 0).sort((P, T) => P.overflows[1] - T.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!_)
          switch (h) {
            case "bestFit": {
              var I;
              const P = (I = D.filter((T) => {
                if (N) {
                  const V = Br(T.placement);
                  return V === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((V) => V > 0).reduce((V, R) => V + R, 0)]).sort((T, V) => T[1] - V[1])[0]) == null ? void 0 : I[0];
              P && (_ = P);
              break;
            }
            case "initialPlacement":
              _ = a;
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
async function sm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = gr(n), a = zo(n), l = Br(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Io(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * c,
    y: d * u
  } : {
    x: d * u,
    y: h * c
  };
}
const am = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await sm(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, lm = function(e) {
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
        crossAxis: s = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: E,
              y: m
            } = b;
            return {
              x: E,
              y: m
            };
          }
        },
        ...l
      } = Io(e, t), u = {
        x: n,
        y: r
      }, c = await Cd(t, l), f = Br(gr(o)), d = xd(f);
      let h = u[d], v = u[f];
      if (i) {
        const b = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", m = h + c[b], C = h - c[E];
        h = Bs(m, h, C);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", m = v + c[b], C = v - c[E];
        v = Bs(m, v, C);
      }
      const x = a.fn({
        ...t,
        [d]: h,
        [f]: v
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [d]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Ui() {
  return typeof window < "u";
}
function qr(e) {
  return kd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rn(e) {
  var t;
  return (t = (kd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function kd(e) {
  return Ui() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function cn(e) {
  return Ui() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function kn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function Xl(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
}
function Ro(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function um(e) {
  return ["table", "td", "th"].includes(qr(e));
}
function ji(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Sa(e) {
  const t = Pa(), n = cn(e) ? dn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function cm(e) {
  let t = er(e);
  for (; kn(t) && !Yr(t); ) {
    if (Sa(t))
      return t;
    if (ji(t))
      return null;
    t = er(t);
  }
  return null;
}
function Pa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yr(e) {
  return ["html", "body", "#document"].includes(qr(e));
}
function dn(e) {
  return Ft(e).getComputedStyle(e);
}
function Ji(e) {
  return cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function er(e) {
  if (qr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xl(e) && e.host || // Fallback.
    Rn(e)
  );
  return Xl(t) ? t.host : t;
}
function Ed(e) {
  const t = er(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Ro(t) ? t : Ed(t);
}
function $d(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Ed(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ft(o);
  return i ? (Zs(s), t.concat(s, s.visualViewport || [], Ro(o) ? o : [], [])) : t.concat(o, $d(o, []));
}
function Zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sd(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = $i(n) !== i || $i(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Pd(e) {
  return cn(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Pd(e);
  if (!kn(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Sd(t);
  let s = (i ? $i(n.width) : n.width) / r, a = (i ? $i(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const dm = /* @__PURE__ */ yn(0);
function Nd(e) {
  const t = Ft(e);
  return !Pa() || !t.visualViewport ? dm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t;
}
function $o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Pd(e);
  let s = yn(1);
  t && (r ? cn(r) && (s = Nr(r)) : s = Nr(e));
  const a = fm(i, n, r) ? Nd(i) : yn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Ft(i), h = r && cn(r) ? Ft(r) : r;
    let v = d, x = Zs(v);
    for (; x && r && h !== v; ) {
      const b = Nr(x), E = x.getBoundingClientRect(), m = dn(x), C = E.left + (x.clientLeft + parseFloat(m.paddingLeft)) * b.x, p = E.top + (x.clientTop + parseFloat(m.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += C, u += p, v = Ft(x), x = Zs(v);
    }
  }
  return Pi({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function Na(e, t) {
  const n = Ji(e).scrollLeft;
  return t ? t.left + n : $o(Rn(e)).left + n;
}
function Td(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Na(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function gm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Rn(r), a = t ? ji(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = yn(1);
  const c = yn(0), f = kn(r);
  if ((f || !f && !i) && ((qr(r) !== "body" || Ro(s)) && (l = Ji(r)), kn(r))) {
    const h = $o(r);
    u = Nr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const d = s && !f && !i ? Td(s, l, !0) : yn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function hm(e) {
  return Array.from(e.getClientRects());
}
function vm(e) {
  const t = Rn(e), n = Ji(e), r = e.ownerDocument.body, o = Pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Na(e);
  const a = -n.scrollTop;
  return dn(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function pm(e, t) {
  const n = Ft(e), r = Rn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Pa();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function mm(e, t) {
  const n = $o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Nr(e) : yn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Wl(e, t, n) {
  let r;
  if (t === "viewport")
    r = pm(e, n);
  else if (t === "document")
    r = vm(Rn(e));
  else if (cn(t))
    r = mm(t, n);
  else {
    const o = Nd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(r);
}
function Md(e, t) {
  const n = er(e);
  return n === t || !cn(n) || Yr(n) ? !1 : dn(n).position === "fixed" || Md(n, t);
}
function ym(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $d(e, []).filter((a) => cn(a) && qr(a) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let s = i ? er(e) : e;
  for (; cn(s) && !Yr(s); ) {
    const a = dn(s), l = Sa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ro(s) && !l && Md(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = er(s);
  }
  return t.set(e, r), r;
}
function wm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ji(t) ? [] : ym(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Wl(t, c, o);
    return u.top = Pr(f.top, u.top), u.right = Eo(f.right, u.right), u.bottom = Eo(f.bottom, u.bottom), u.left = Pr(f.left, u.left), u;
  }, Wl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _m(e) {
  const {
    width: t,
    height: n
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function xm(e, t, n) {
  const r = kn(t), o = Rn(t), i = n === "fixed", s = $o(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((qr(t) !== "body" || Ro(o)) && (a = Ji(t)), r) {
      const d = $o(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = Na(o));
  const u = o && !r && !i ? Td(o, a) : yn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ys(e) {
  return dn(e).position === "static";
}
function Kl(e, t) {
  if (!kn(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Rn(e) === n && (n = n.ownerDocument.body), n;
}
function Hd(e, t) {
  const n = Ft(e);
  if (ji(e))
    return n;
  if (!kn(e)) {
    let o = er(e);
    for (; o && !Yr(o); ) {
      if (cn(o) && !ys(o))
        return o;
      o = er(o);
    }
    return n;
  }
  let r = Kl(e, t);
  for (; r && um(r) && ys(r); )
    r = Kl(r, t);
  return r && Yr(r) && ys(r) && !Sa(r) ? n : r || cm(e) || n;
}
const bm = async function(e) {
  const t = this.getOffsetParent || Hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Cm(e) {
  return dn(e).direction === "rtl";
}
const km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gm,
  getDocumentElement: Rn,
  getClippingRect: wm,
  getOffsetParent: Hd,
  getElementRects: bm,
  getClientRects: hm,
  getDimensions: _m,
  getScale: Nr,
  isElement: cn,
  isRTL: Cm
}, Em = am, $m = lm, Sm = im, Pm = om, Nm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: km,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return rm(e, t, {
    ...o,
    platform: i
  });
}, Tm = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
  showArrow: l
}) => {
  if (typeof e == "string") {
    const E = document.querySelector(e);
    if (E)
      e = E;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const E = document.querySelector(n);
    if (E)
      u = E;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function f() {
    Nm(e, u, {
      placement: r,
      middleware: [
        Em(o),
        // 手动偏移配置
        Sm(i),
        //自动翻转
        $m(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Pm({ element: c })] : []
      ]
    }).then(({ x: E, y: m, placement: C, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${m}px`
      }), l) {
        const { x: k, y: N } = p.arrow, S = {
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
  let d = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), d = !0, f();
  }
  function v() {
    u.style.display = "none", l && (c.style.display = "none"), d = !1;
  }
  function x(E) {
    E.stopPropagation(), d ? v() : h();
  }
  function b(E) {
    u.contains(E.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      v();
    },
    isVisible() {
      return d;
    }
  };
};
var Mm = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Bo(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Wt(() => (a = Tm({
    trigger: i,
    floatContent: s,
    interactive: !0,
    placement: o()
  }), () => {
    a.destroy();
  }));
  function l() {
    a.hide();
  }
  var u = Mm(), c = X(u), f = X(c);
  ur(f, n), F(c), Cn(c, (v) => i = v, () => i);
  var d = B(c, 2), h = X(d);
  return ur(h, r), F(d), Cn(d, (v) => s = v, () => s), F(u), O(e, u), fe({
    hide: l,
    get children() {
      return n();
    },
    set children(v) {
      n(v), y();
    },
    get floating() {
      return r();
    },
    set floating(v) {
      r(v), y();
    },
    get placement() {
      return o();
    },
    set placement(v = "bottom") {
      o(v), y();
    }
  });
}
ae(Bo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = tt(), a = xe(s);
  return P1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = tt(), d = xe(f);
    ur(d, () => n() ?? ft), O(u, f);
  }), O(e, s), fe({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), y();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), y();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), y();
    }
  });
}
ae(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Hm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Vm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Qi(e, t) {
  de(t, !0), et(e, Vm);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Je(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Hm();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
ae(Qi, {}, [], [], !0);
const Dm = () => {
  const e = Ue();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Zr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Am = () => {
  const { nodes: e, nodeLookup: t } = Ue();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = q(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Zr(), l = {
          ...i,
          id: a,
          position: {
            x: i.position.x + 50,
            y: i.position.y + 50
          }
        };
        e.update((u) => [...u, l]), e.update(
          (u) => u.map(
            (c) => c.id === a ? { ...c, selected: !0 } : { ...c, selected: !1 }
          )
        );
      }
    }
  };
}, In = () => lr("tinyflow_options");
var Om = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Lm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Im = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), zm = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Rm = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Bm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function hn(e, t) {
  de(t, !0), et(e, Bm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0), d = w(t, "onCollapse", 7);
  let h = n().expand ? ["key"] : [];
  const { updateNodeData: v, getNode: x } = Ot(), b = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: E } = Dm(), { copyNode: m } = Am(), C = In(), p = () => {
    var _;
    (_ = C.onNodeExecute) == null || _.call(C, x(r()));
  };
  var k = Rm(), N = xe(k);
  {
    var S = (_) => {
      md(_, {
        get position() {
          return ke.Top;
        },
        align: "end",
        children: (P, T) => {
          var V = zm(), R = X(V);
          {
            var Y = (se) => {
              Je(se, {
                class: "tf-node-toolbar-item",
                onclick: p,
                children: (ve, he) => {
                  var te = Om();
                  O(ve, te);
                },
                $$slots: { default: !0 }
              });
            };
            be(R, (se) => {
              a() && se(Y);
            });
          }
          var K = B(R, 2);
          {
            var re = (se) => {
              Je(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (ve, he) => {
                  var te = Lm();
                  O(ve, te);
                },
                $$slots: { default: !0 }
              });
            };
            be(K, (se) => {
              l() && se(re);
            });
          }
          var j = B(K, 2);
          {
            var W = (se) => {
              Je(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (ve, he) => {
                  var te = Im();
                  O(ve, te);
                },
                $$slots: { default: !0 }
              });
            };
            be(j, (se) => {
              u() && se(W);
            });
          }
          F(V), O(P, V);
        },
        $$slots: { default: !0 }
      });
    };
    be(N, (_) => {
      (a() || l() || u()) && _(S);
    });
  }
  var H = B(N, 2), A = B(X(H), 2), D = X(A);
  _d(D, {
    items: b,
    activeKeys: h,
    onChange: (_, P) => {
      var T;
      v(r(), { expand: P == null ? void 0 : P.includes("key") }), (T = d()) == null || T(P != null && P.includes("key") ? "key" : "");
    }
  }), F(A), F(H);
  var z = B(H, 2);
  {
    var L = (_) => {
      Qn(_, {
        type: "target",
        get position() {
          return ke.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    be(z, (_) => {
      f() && _(L);
    });
  }
  var I = B(z, 2);
  {
    var $ = (_) => {
      Qn(_, {
        type: "source",
        get position() {
          return ke.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    be(I, (_) => {
      c() && _($);
    });
  }
  var M = B(I, 2);
  return ur(M, () => i() ?? ft), O(e, k), fe({
    get data() {
      return n();
    },
    set data(_) {
      n(_), y();
    },
    get id() {
      return r();
    },
    set id(_ = "") {
      r(_), y();
    },
    get icon() {
      return o();
    },
    set icon(_) {
      o(_), y();
    },
    get handle() {
      return i();
    },
    set handle(_) {
      i(_), y();
    },
    get children() {
      return s();
    },
    set children(_) {
      s(_), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(_ = !0) {
      a(_), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(_ = !0) {
      l(_), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(_ = !0) {
      u(_), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(_ = !0) {
      c(_), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(_ = !0) {
      f(_), y();
    },
    get onCollapse() {
      return d();
    },
    set onCollapse(_) {
      d(_), y();
    }
  });
}
ae(
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
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
function ht() {
  return lr("svelteflow__node_id");
}
const Vd = [
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
], Ym = [
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
var Zm = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Fm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Xm = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  de(t, !0), et(e, Wm);
  const [n, r] = nt(), o = () => J(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = /* @__PURE__ */ Me(() => mr(a)), u = /* @__PURE__ */ Me(() => {
    var A, D;
    return {
      ...i(),
      ...(D = (A = o()) == null ? void 0 : A.data) == null ? void 0 : D.parameters[s()]
    };
  });
  const { updateNodeData: c } = Ot(), f = (A, D) => {
    c(a, (z) => {
      let L = z.data.parameters;
      return L[s()][A] = D, { parameters: L };
    });
  }, d = (A) => {
    const D = A.target.value;
    f("name", D);
  }, h = (A) => {
    const D = A.target.checked;
    f("required", D);
  }, v = (A) => {
    const D = A.value;
    D && f("dataType", D);
  };
  let x;
  const b = () => {
    c(a, (A) => {
      let D = A.data.parameters;
      return D.splice(s(), 1), { parameters: [...D] };
    }), x == null || x.hide();
  };
  var E = Xm(), m = xe(E), C = X(m);
  Ct(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), F(m);
  var p = B(m, 2), k = X(p);
  yd(k, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), F(p);
  var N = B(p, 2), S = X(N);
  Cn(
    Bo(S, {
      placement: "bottom",
      floating: (D) => {
        var z = Zm(), L = X(z), I = B(X(L));
        const $ = /* @__PURE__ */ Me(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        un(I, {
          items: Vd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g($);
          }
        }), F(L);
        var M = B(L, 2), _ = B(X(M));
        At(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Y) => {
            const K = Y.target.value;
            f("defaultValue", K);
          }
        }), F(M);
        var P = B(M, 2), T = B(X(P));
        At(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Y) => {
            const K = Y.target.value;
            f("description", K);
          }
        }), F(P);
        var V = B(P, 2), R = X(V);
        Je(R, {
          onclick: b,
          children: (Y, K) => {
            He();
            var re = Be("删除");
            O(Y, re);
          },
          $$slots: { default: !0 }
        }), F(V), F(z), O(D, z);
      },
      children: (D, z) => {
        Je(D, {
          class: "input-btn-more",
          children: (L, I) => {
            var $ = Fm();
            O(L, $);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => x = D,
    () => x
  ), F(N), O(e, E);
  var H = fe({
    get parameter() {
      return i();
    },
    set parameter(A) {
      i(A), y();
    },
    get index() {
      return s();
    },
    set index(A) {
      s(A), y();
    }
  });
  return r(), H;
}
ae(Dd, { parameter: {}, index: {} }, [], [], !0);
var Km = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), qm = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), Gm = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Um = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ad(e, t) {
  de(t, !0), et(e, Um);
  const [n, r] = nt(), o = () => J(g(s), "$node", n);
  let i = ht(), s = /* @__PURE__ */ Me(() => mr(i)), a = /* @__PURE__ */ Me(() => {
    var d, h;
    return [...((h = (d = o()) == null ? void 0 : d.data) == null ? void 0 : h.parameters) || []];
  });
  var l = Gm(), u = X(l);
  {
    var c = (d) => {
      var h = Km();
      He(4), O(d, h);
    };
    be(u, (d) => {
      g(a).length !== 0 && d(c);
    });
  }
  var f = B(u, 2);
  Dt(
    f,
    19,
    () => g(a),
    (d) => d.id,
    (d, h, v) => {
      Dd(d, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(v);
        }
      });
    },
    (d) => {
      var h = qm();
      O(d, h);
    }
  ), F(l), O(e, l), fe(), r();
}
ae(Ad, {}, [], [], !0);
const Od = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Od(t.children);
  });
}, Sn = () => {
  const { updateNodeData: e } = Ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Od(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Zr()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], {
          [n]: [...s]
        };
      });
    }
  };
};
var jm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Jm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qm = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ey = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ld(e, t) {
  de(t, !0), et(e, ey);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn();
  return hn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var l = jm();
      O(a, l);
    },
    children: (a, l) => {
      var u = Qm(), c = xe(u), f = X(c);
      Qe(f, {
        level: 3,
        children: (v, x) => {
          He();
          var b = Be("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(f, 2);
      Je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, x) => {
          var b = Jm();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), F(c);
      var h = B(c, 2);
      Ad(h, {}), O(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(Ld, { data: {} }, [], [], !0);
const Id = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Id(e, r.source, n));
}, ql = (e, t) => {
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
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((s) => ({
          label: s.name + (t ? ` (Array<${s.dataType || "String"}>)` : ` (${s.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + s.name,
          children: r(s.children, i + "." + s.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, ty = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o } = Ue();
  return qn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = ql(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Id(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = ql(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var ny = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ry = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const oy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function zd(e, t) {
  de(t, !0), et(e, oy);
  const [n, r] = nt(), o = () => J(g(c), "$node", n), i = () => J(p, "$selectItems", n);
  Wt(() => {
    g(f).refType || E({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Me(() => mr(u)), f = /* @__PURE__ */ Me(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Ot(), h = (M, _) => {
    d(u, (P) => {
      let T = P.data[l()];
      return T[a()] = { ...T[a()], [M]: _ }, { [l()]: T };
    });
  }, v = (M) => {
    const _ = M.target.value;
    h("name", _);
  }, x = (M) => {
    const _ = M.target.value;
    h("value", _);
  }, b = (M) => {
    const _ = M.value;
    h("ref", _);
  }, E = (M) => {
    const _ = M.value;
    h("refType", _);
  };
  let m;
  const C = () => {
    d(u, (M) => {
      let _ = M.data[l()];
      return _.splice(a(), 1), { [l()]: [..._] };
    }), m == null || m.hide();
  }, p = ty();
  var k = ry(), N = xe(k), S = X(N);
  Ct(S, {
    style: "width: 100%;",
    get value() {
      return g(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), F(N);
  var H = B(N, 2), A = X(H);
  {
    var D = (M) => {
      Ct(M, {
        get value() {
          return g(f).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, z = (M, _) => {
      {
        var P = (T) => {
          const V = /* @__PURE__ */ Me(() => [g(f).ref]);
          un(T, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(V);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        be(
          M,
          (T) => {
            g(f).refType !== "input" && T(P);
          },
          _
        );
      }
    };
    be(A, (M) => {
      g(f).refType === "fixed" ? M(D) : M(z, !1);
    });
  }
  F(H);
  var L = B(H, 2), I = X(L);
  Cn(
    Bo(I, {
      placement: "bottom",
      floating: (_) => {
        var P = ny(), T = X(P), V = B(X(T));
        const R = /* @__PURE__ */ Me(() => g(f).refType ? [g(f).refType] : []);
        un(V, {
          items: Ym,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(R);
          },
          onSelect: E
        }), F(T);
        var Y = B(T, 2), K = B(X(Y));
        At(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ve) => {
            const he = ve.target.value;
            h("defaultValue", he);
          }
        }), F(Y);
        var re = B(Y, 2), j = B(X(re));
        At(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ve) => {
            const he = ve.target.value;
            h("description", he);
          }
        }), F(re);
        var W = B(re, 2), se = X(W);
        Je(se, {
          onclick: C,
          children: (ve, he) => {
            He();
            var te = Be("删除");
            O(ve, te);
          },
          $$slots: { default: !0 }
        }), F(W), F(P), O(_, P);
      },
      children: (_, P) => {
        Qi(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => m = _,
    () => m
  ), F(L), O(e, k);
  var $ = fe({
    get parameter() {
      return s();
    },
    set parameter(M) {
      s(M), y();
    },
    get index() {
      return a();
    },
    set index(M) {
      a(M), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), y();
    }
  });
  return r(), $;
}
ae(zd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var iy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), sy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), ay = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ly = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  de(t, !0), et(e, ly);
  const [n, r] = nt(), o = () => J(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = /* @__PURE__ */ Me(() => mr(a)), u = /* @__PURE__ */ Me(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var c = ay(), f = X(c);
  {
    var d = (x) => {
      var b = iy();
      He(4), O(x, b);
    };
    be(f, (x) => {
      g(u).length !== 0 && x(d);
    });
  }
  var h = B(f, 2);
  Dt(
    h,
    19,
    () => g(u),
    (x) => x.id,
    (x, b, E) => {
      zd(x, {
        get parameter() {
          return g(b);
        },
        get index() {
          return g(E);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (x) => {
      var b = sy(), E = X(b, !0);
      F(b), Ee(() => Zt(E, i())), O(x, b);
    }
  ), F(c), O(e, c);
  var v = fe({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "parameters") {
      s(x), y();
    }
  });
  return r(), v;
}
ae(Bt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var uy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), cy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const fy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Rd(e, t) {
  de(t, !0), et(e, fy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn();
  return hn(e, ct(
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
        var l = uy();
        O(a, l);
      },
      children: (a, l) => {
        var u = dy(), c = xe(u), f = X(c);
        Qe(f, {
          level: 3,
          children: (v, x) => {
            He();
            var b = Be("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(f, 2);
        Je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, x) => {
            var b = cy();
            O(v, b);
          },
          $$slots: { default: !0 }
        }), F(c);
        var h = B(c, 2);
        Bt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), O(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(Rd, { data: {} }, [], [], !0);
var gy = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), hy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), vy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), py = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const my = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Bd(e, t) {
  de(t, !0), et(e, my);
  const [n, r] = nt(), o = () => J(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Me(() => mr(l)), c = /* @__PURE__ */ Me(() => {
    var V;
    let P = (V = o()) == null ? void 0 : V.data[a()], T;
    if (P && s().length > 0) {
      let R = P;
      for (let Y = 0; Y < s().length; Y++) {
        const K = s()[Y];
        Y == s().length - 1 ? T = R[K] : R = R[K].children;
      }
    }
    return { ...i(), ...T };
  });
  const { updateNodeData: f } = Ot(), d = (P, T) => {
    f(l, (V) => {
      const R = V.data[a()];
      if (R && s().length > 0) {
        let Y = R;
        for (let K = 0; K < s().length; K++) {
          const re = s()[K];
          K == s().length - 1 ? Y[re] = { ...Y[re], [P]: T } : Y = R[re].children;
        }
      }
      return { [a()]: R };
    });
  }, h = (P) => {
    const T = P.target.value;
    d("name", T);
  }, v = (P) => {
    const T = P.value;
    d("dataType", T);
  };
  let x;
  const b = () => {
    f(l, (P) => {
      let T = P.data[a()];
      if (T && s().length > 0) {
        let V = T;
        for (let R = 0; R < s().length; R++) {
          const Y = s()[R];
          R == s().length - 1 ? V.splice(Y, 1) : V = V[Y].children;
        }
      }
      return { [a()]: [...T] };
    }), x == null || x.hide();
  }, E = () => {
    f(l, (P) => {
      let T = P.data[a()];
      if (T && s().length > 0) {
        let V = T;
        for (let R = 0; R < s().length; R++) {
          const Y = s()[R];
          R == s().length - 1 ? V[Y].children ? V[Y].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : V[Y].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : V = V[Y].children;
        }
      }
      return { [a()]: [...T] };
    });
  };
  var m = py(), C = xe(m), p = X(C);
  {
    var k = (P) => {
      var T = tt(), V = xe(T);
      Dt(V, 17, s, po, (R, Y) => {
        He();
        var K = Be(" ");
        O(R, K);
      }), O(P, T);
    };
    be(p, (P) => {
      s().length > 1 && P(k);
    });
  }
  var N = B(p, 2);
  const S = /* @__PURE__ */ Me(() => g(c).nameDisabled === !0);
  Ct(N, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: h,
    get disabled() {
      return g(S);
    }
  }), F(C);
  var H = B(C, 2), A = X(H);
  const D = /* @__PURE__ */ Me(() => g(c).dataType ? [g(c).dataType] : []), z = /* @__PURE__ */ Me(() => g(c).dataTypeDisabled === !0);
  un(A, {
    items: Vd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(D);
    },
    get disabled() {
      return g(z);
    },
    onSelect: v
  });
  var L = B(A, 2);
  {
    var I = (P) => {
      Je(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (T, V) => {
          var R = gy();
          O(T, R);
        },
        $$slots: { default: !0 }
      });
    };
    be(L, (P) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && P(I);
    });
  }
  F(H);
  var $ = B(H, 2), M = X($);
  Cn(
    Bo(M, {
      placement: "bottom",
      floating: (T) => {
        var V = vy(), R = X(V), Y = B(X(R));
        const K = /* @__PURE__ */ Me(() => g(c).defaultValue || "");
        At(Y, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(K);
          },
          onchange: (he) => {
            const te = he.target.value;
            d("defaultValue", te);
          }
        }), F(R);
        var re = B(R, 2), j = B(X(re));
        const W = /* @__PURE__ */ Me(() => g(c).description || "");
        At(j, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (he) => {
            const te = he.target.value;
            d("description", te);
          }
        }), F(re);
        var se = B(re, 2);
        {
          var ve = (he) => {
            var te = hy(), Ae = X(te);
            Je(Ae, {
              onclick: b,
              children: (le, ce) => {
                He();
                var ye = Be("删除");
                O(le, ye);
              },
              $$slots: { default: !0 }
            }), F(te), O(he, te);
          };
          be(se, (he) => {
            g(c).deleteDisabled !== !0 && he(ve);
          });
        }
        F(V), O(T, V);
      },
      children: (T, V) => {
        Qi(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), F($), O(e, m);
  var _ = fe({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), y();
    },
    get position() {
      return s();
    },
    set position(P) {
      s(P), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(P) {
      a(P), y();
    }
  });
  return r(), _;
}
ae(Bd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ oe("<!> <!>", 1), wy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), xy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const by = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bn(e, t) {
  de(t, !0), et(e, by);
  const [n, r] = nt(), o = () => J(g(u), "$node", n), i = (b, E = ft, m = ft) => {
    var C = tt(), p = xe(C);
    Dt(
      p,
      19,
      E,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, N, S) => {
        var H = yy(), A = xe(H);
        const D = /* @__PURE__ */ Me(() => [...m(), g(S)]);
        Bd(A, {
          get parameter() {
            return g(N);
          },
          get position() {
            return g(D);
          },
          get dataKeyName() {
            return a();
          }
        });
        var z = B(A, 2);
        {
          var L = (I) => {
            var $ = /* @__PURE__ */ me(() => [...m(), g(S)]);
            i(I, () => g(N).children, () => g($));
          };
          be(z, (I) => {
            g(N).children && I(L);
          });
        }
        O(k, H);
      },
      (k) => {
        var N = tt(), S = xe(N);
        {
          var H = (A) => {
            var D = wy(), z = X(D, !0);
            F(D), Ee(() => Zt(z, s())), O(A, D);
          };
          be(S, (A) => {
            m().length === 0 && A(H);
          });
        }
        O(k, N);
      }
    ), O(b, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Me(() => mr(l)), c = /* @__PURE__ */ Me(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var f = xy(), d = X(f);
  {
    var h = (b) => {
      var E = _y();
      He(4), O(b, E);
    };
    be(d, (b) => {
      g(c).length !== 0 && b(h);
    });
  }
  var v = B(d, 2);
  i(v, () => g(c) || [], () => []), F(f), O(e, f);
  var x = fe({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(b = "无输出参数") {
      s(b), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "outputDefs") {
      a(b), y();
    }
  });
  return r(), x;
}
ae(Bn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ky = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ oe('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const Sy = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Yd(e, t) {
  de(t, !0), et(e, Sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = In();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Cy();
        O(c, f);
      },
      children: (c, f) => {
        var d = $y(), h = xe(d), v = X(h);
        Qe(v, {
          level: 3,
          children: (ye, Pe) => {
            He();
            var Ve = Be("输入参数");
            O(ye, Ve);
          },
          $$slots: { default: !0 }
        });
        var x = B(v, 2);
        Je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ye, Pe) => {
            var Ve = ky();
            O(ye, Ve);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var E = B(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (ye, Pe) => {
            He();
            var Ve = Be("模型设置");
            O(ye, Ve);
          },
          $$slots: { default: !0 }
        });
        var m = B(E, 4), C = X(m);
        const p = /* @__PURE__ */ Me(() => n().llmId ? [n().llmId] : []);
        un(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ye) => {
            const Pe = ye.value;
            l(o, () => ({ llmId: Pe }));
          },
          get value() {
            return g(p);
          }
        });
        var k = B(C, 2);
        Qi(k, {}), F(m);
        var N = B(m, 4), S = X(N), H = X(S), A = X(H);
        F(H);
        var D = B(H, 2);
        lo(D), F(S), F(N);
        var z = B(N, 2), L = X(z), I = X(L), $ = X(I);
        F(I);
        var M = B(I, 2);
        lo(M), F(L), F(z);
        var _ = B(z, 2), P = X(_), T = X(P), V = X(T);
        F(T);
        var R = B(T, 2);
        lo(R), F(P), F(_);
        var Y = B(_, 4), K = X(Y);
        const re = /* @__PURE__ */ Me(() => n().systemPrompt || "");
        At(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(re);
          },
          oninput: (ye) => {
            l(o, { systemPrompt: ye.target.value });
          }
        }), F(Y);
        var j = B(Y, 4), W = X(j);
        const se = /* @__PURE__ */ Me(() => n().userPrompt || "");
        At(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(se);
          },
          oninput: (ye) => {
            l(o, { userPrompt: ye.target.value });
          }
        }), F(j);
        var ve = B(j, 2), he = X(ve);
        Qe(he, {
          level: 3,
          mt: "10px",
          children: (ye, Pe) => {
            He();
            var Ve = Be("输出参数");
            O(ye, Ve);
          },
          $$slots: { default: !0 }
        });
        var te = B(he, 2);
        const Ae = /* @__PURE__ */ Me(() => n().outType ? [n().outType] : []);
        un(te, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ye) => {
            const Pe = ye.value;
            l(o, () => ({ outType: Pe }));
          },
          get value() {
            return g(Ae);
          }
        });
        var le = B(te, 2);
        Je(le, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ye, Pe) => {
            var Ve = Ey();
            O(ye, Ve);
          },
          $$slots: { default: !0 }
        }), F(ve);
        var ce = B(ve, 2);
        Bn(ce, {}), Ee(() => {
          Zt(A, `Temperature: ${n().temperature ?? 0.5}`), is(D, n().temperature ?? 0.5), Zt($, `Top P: ${n().topP ?? 0.9}`), is(M, n().topP ?? 0.9), Zt(V, `Top K: ${n().topK ?? 50}`), is(R, n().topK ?? 50);
        }), Fe("mousedown", D, ss(function(ye) {
          Le.call(this, t, ye);
        })), Fe("input", D, (ye) => l(o, { temperature: parseFloat(ye.target.value) })), Fe("mousedown", M, ss(function(ye) {
          Le.call(this, t, ye);
        })), Fe("input", M, (ye) => l(o, { topP: parseFloat(ye.target.value) })), Fe("mousedown", R, ss(function(ye) {
          Le.call(this, t, ye);
        })), Fe("input", R, (ye) => l(o, { topK: parseInt(ye.target.value) })), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Yd, { data: {} }, [], [], !0);
var Py = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ny = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), et(e, Hy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Wt(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = Sn(), { updateNodeData: s } = Ot(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Py();
        O(u, c);
      },
      children: (u, c) => {
        var f = My(), d = xe(f), h = X(d);
        Qe(h, {
          level: 3,
          children: (z, L) => {
            He();
            var I = Be("输入参数");
            O(z, I);
          },
          $$slots: { default: !0 }
        });
        var v = B(h, 2);
        Je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, L) => {
            var I = Ny();
            O(z, I);
          },
          $$slots: { default: !0 }
        }), F(d);
        var x = B(d, 2);
        Bt(x, {});
        var b = B(x, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (z, L) => {
            He();
            var I = Be("代码");
            O(z, I);
          },
          $$slots: { default: !0 }
        });
        var E = B(b, 4), m = X(E);
        const C = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : ["qlexpress"]);
        un(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const L = z.value;
            s(o, () => ({ engine: L }));
          },
          get value() {
            return g(C);
          }
        }), F(E);
        var p = B(E, 4), k = X(p);
        const N = /* @__PURE__ */ Me(() => n().code || "");
        At(k, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            s(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(N);
          }
        }), F(p);
        var S = B(p, 2), H = X(S);
        Qe(H, {
          level: 3,
          mt: "10px",
          children: (z, L) => {
            He();
            var I = Be("输出参数");
            O(z, I);
          },
          $$slots: { default: !0 }
        });
        var A = B(H, 2);
        Je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, L) => {
            var I = Ty();
            O(z, I);
          },
          $$slots: { default: !0 }
        }), F(S);
        var D = B(S, 2);
        Bn(D, {}), O(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Zd, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Dy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Oy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fd(e, t) {
  de(t, !0), et(e, Oy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), { updateNodeData: s } = Ot();
  return jn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Vy();
        O(l, u);
      },
      children: (l, u) => {
        var c = Ay(), f = xe(c), d = X(f);
        Qe(d, {
          level: 3,
          children: (N, S) => {
            He();
            var H = Be("输入参数");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var h = B(d, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var H = Dy();
            O(N, H);
          },
          $$slots: { default: !0 }
        }), F(f);
        var v = B(f, 2);
        Bt(v, {});
        var x = B(v, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            He();
            var H = Be("代码");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var b = B(x, 4), E = X(b);
        const m = /* @__PURE__ */ Me(() => n().template || "");
        At(E, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (N) => {
            s(o, () => ({ template: N.target.value }));
          },
          get value() {
            return g(m);
          }
        }), F(b);
        var C = B(b, 2), p = X(C);
        Qe(p, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            He();
            var H = Be("输出参数");
            O(N, H);
          },
          $$slots: { default: !0 }
        }), F(C);
        var k = B(C, 2);
        Bn(k, {}), O(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ae(Fd, { data: {} }, [], [], !0);
var Ly = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Iy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Yy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Fy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Xy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Wy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Xd(e, t) {
  de(t, !0), et(e, qy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Wt(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: s } = Sn(), { updateNodeData: a } = Ot();
  return hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ly();
        O(u, c);
      },
      children: (u, c) => {
        var f = Ky(), d = xe(f), h = X(d), v = X(h);
        const x = /* @__PURE__ */ Me(() => n().method ? [n().method] : ["get"]);
        un(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ie) => {
            const pe = ie.value;
            a(i, () => ({ method: pe }));
          },
          get value() {
            return g(x);
          }
        }), F(h);
        var b = B(h, 2), E = X(b);
        const m = /* @__PURE__ */ Me(() => n().url || "");
        Ct(E, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ie) => {
            a(i, () => ({ url: ie.target.value }));
          },
          get value() {
            return g(m);
          }
        }), F(b), F(d);
        var C = B(d, 2), p = X(C);
        Qe(p, {
          level: 3,
          children: (ie, pe) => {
            He();
            var Se = Be("Http 头信息");
            O(ie, Se);
          },
          $$slots: { default: !0 }
        });
        var k = B(p, 2);
        Je(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ie, pe) => {
            var Se = Iy();
            O(ie, Se);
          },
          $$slots: { default: !0 }
        }), F(C);
        var N = B(C, 2);
        Bt(N, { dataKeyName: "headers" });
        var S = B(N, 2), H = X(S);
        Qe(H, {
          level: 3,
          children: (ie, pe) => {
            He();
            var Se = Be("参数");
            O(ie, Se);
          },
          $$slots: { default: !0 }
        });
        var A = B(H, 2);
        Je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (ie, pe) => {
            var Se = zy();
            O(ie, Se);
          },
          $$slots: { default: !0 }
        }), F(S);
        var D = B(S, 2);
        Bt(D, { dataKeyName: "urlParameters" });
        var z = B(D, 2);
        Qe(z, {
          level: 3,
          mt: "10px",
          children: (ie, pe) => {
            He();
            var Se = Be("Body");
            O(ie, Se);
          },
          $$slots: { default: !0 }
        });
        var L = B(z, 2), I = X(L), $ = X(I);
        const M = /* @__PURE__ */ Me(() => !n().bodyType);
        Ct($, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(M);
          },
          onchange: (ie) => {
            var pe;
            (pe = ie.target) != null && pe.checked && a(i, { bodyType: "" });
          }
        }), He(), F(I);
        var _ = B(I, 2), P = X(_);
        const T = /* @__PURE__ */ Me(() => n().bodyType === "form-data");
        Ct(P, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(T);
          },
          onchange: (ie) => {
            var pe;
            (pe = ie.target) != null && pe.checked && a(i, { bodyType: "form-data" });
          }
        }), He(), F(_);
        var V = B(_, 2), R = X(V);
        const Y = /* @__PURE__ */ Me(() => n().bodyType === "x-www-form-urlencoded");
        Ct(R, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Y);
          },
          onchange: (ie) => {
            var pe;
            (pe = ie.target) != null && pe.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), He(), F(V);
        var K = B(V, 2), re = X(K);
        const j = /* @__PURE__ */ Me(() => n().bodyType === "json");
        Ct(re, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(j);
          },
          onchange: (ie) => {
            var pe;
            (pe = ie.target) != null && pe.checked && a(i, { bodyType: "json" });
          }
        }), He(), F(K);
        var W = B(K, 2), se = X(W);
        const ve = /* @__PURE__ */ Me(() => n().bodyType === "raw");
        Ct(se, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ve);
          },
          onchange: (ie) => {
            var pe;
            (pe = ie.target) != null && pe.checked && a(i, { bodyType: "raw" });
          }
        }), He(), F(W), F(L);
        var he = B(L, 2);
        {
          var te = (ie) => {
            var pe = By(), Se = xe(pe), Ne = X(Se);
            Qe(Ne, {
              level: 3,
              children: (Q, Ze) => {
                He();
                var ue = Be("参数");
                O(Q, ue);
              },
              $$slots: { default: !0 }
            });
            var at = B(Ne, 2);
            Je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (Q, Ze) => {
                var ue = Ry();
                O(Q, ue);
              },
              $$slots: { default: !0 }
            }), F(Se);
            var ut = B(Se, 2);
            Bt(ut, { dataKeyName: "fromData" }), O(ie, pe);
          };
          be(he, (ie) => {
            n().bodyType === "form-data" && ie(te);
          });
        }
        var Ae = B(he, 2);
        {
          var le = (ie) => {
            var pe = Zy(), Se = xe(pe), Ne = X(Se);
            Qe(Ne, {
              level: 3,
              children: (Q, Ze) => {
                He();
                var ue = Be("参数");
                O(Q, ue);
              },
              $$slots: { default: !0 }
            });
            var at = B(Ne, 2);
            Je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (Q, Ze) => {
                var ue = Yy();
                O(Q, ue);
              },
              $$slots: { default: !0 }
            }), F(Se);
            var ut = B(Se, 2);
            Bt(ut, { dataKeyName: "fromUrlencoded" }), O(ie, pe);
          };
          be(Ae, (ie) => {
            n().bodyType === "x-www-form-urlencoded" && ie(le);
          });
        }
        var ce = B(Ae, 2);
        {
          var ye = (ie) => {
            var pe = Fy(), Se = X(pe);
            At(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ne) => {
                a(i, { bodyJson: Ne.target.value });
              }
            }), F(pe), O(ie, pe);
          };
          be(ce, (ie) => {
            n().bodyType === "json" && ie(ye);
          });
        }
        var Pe = B(ce, 2);
        {
          var Ve = (ie) => {
            var pe = Xy(), Se = X(pe);
            At(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ne) => {
                a(i, { bodyRaw: Ne.target.value });
              }
            }), F(pe), O(ie, pe);
          };
          be(Pe, (ie) => {
            n().bodyType === "raw" && ie(Ve);
          });
        }
        var ee = B(Pe, 2), We = X(ee);
        Qe(We, {
          level: 3,
          mt: "10px",
          children: (ie, pe) => {
            He();
            var Se = Be("输出参数");
            O(ie, Se);
          },
          $$slots: { default: !0 }
        });
        var je = B(We, 2);
        Je(je, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ie, pe) => {
            var Se = Wy();
            O(ie, Se);
          },
          $$slots: { default: !0 }
        }), F(ee);
        var Ye = B(ee, 2);
        Bn(Ye, {}), O(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Xd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Uy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  de(t, !0), et(e, Jy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = In();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return jn(() => {
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
  }), hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Gy();
        O(c, f);
      },
      children: (c, f) => {
        var d = jy(), h = xe(d), v = X(h);
        Qe(v, {
          level: 3,
          children: (I, $) => {
            He();
            var M = Be("输入参数");
            O(I, M);
          },
          $$slots: { default: !0 }
        });
        var x = B(v, 2);
        Je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, $) => {
            var M = Uy();
            O(I, M);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var E = B(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            He();
            var M = Be("知识库设置");
            O(I, M);
          },
          $$slots: { default: !0 }
        });
        var m = B(E, 4), C = X(m);
        const p = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (I) => {
            const $ = I.value;
            l(o, () => ({ knowledgeId: $ }));
          },
          get value() {
            return g(p);
          }
        }), F(m);
        var k = B(m, 4), N = X(k);
        Ct(N, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const $ = I.target.value;
            l(o, () => ({ keyword: $ }));
          }
        }), F(k);
        var S = B(k, 4), H = X(S);
        const A = /* @__PURE__ */ Me(() => n().limit || "");
        Ct(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (I) => {
            const $ = I.target.value;
            l(o, () => ({ limit: $ }));
          },
          get value() {
            return g(A);
          }
        }), F(S);
        var D = B(S, 2), z = X(D);
        Qe(z, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            He();
            var M = Be("输出参数");
            O(I, M);
          },
          $$slots: { default: !0 }
        }), F(D);
        var L = B(D, 2);
        Bn(L, {}), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Wd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ew = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  de(t, !0), et(e, nw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = In();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return jn(() => {
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
  }), hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Qy();
        O(c, f);
      },
      children: (c, f) => {
        var d = tw(), h = xe(d), v = X(h);
        Qe(v, {
          level: 3,
          children: (L, I) => {
            He();
            var $ = Be("输入参数");
            O(L, $);
          },
          $$slots: { default: !0 }
        });
        var x = B(v, 2);
        Je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, I) => {
            var $ = ew();
            O(L, $);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var E = B(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            He();
            var $ = Be("搜索引擎设置");
            O(L, $);
          },
          $$slots: { default: !0 }
        });
        var m = B(E, 4), C = X(m);
        const p = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : []);
        un(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (L) => {
            const I = L.value;
            l(o, () => ({ engine: I }));
          },
          get value() {
            return g(p);
          }
        }), F(m);
        var k = B(m, 4), N = X(k);
        Ct(N, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const I = L.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), F(k);
        var S = B(k, 4), H = X(S);
        Ct(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (L) => {
            const I = L.target.value;
            l(o, () => ({ limit: I }));
          }
        }), F(S);
        var A = B(S, 2), D = X(A);
        Qe(D, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            He();
            var $ = Be("输出参数");
            O(L, $);
          },
          $$slots: { default: !0 }
        }), F(A);
        var z = B(A, 2);
        Bn(z, {}), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Kd, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), ow = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const sw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function qd(e, t) {
  de(t, !0), et(e, sw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = In();
  let a = /* @__PURE__ */ bt(jt([]));
  return Wt(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    g(a).push(...l || []);
  }), hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = rw();
        O(c, f);
      },
      handle: (c) => {
        Qn(c, {
          type: "source",
          get position() {
            return ke.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, f) => {
        var d = iw(), h = xe(d), v = X(h);
        Qe(v, {
          level: 3,
          children: (p, k) => {
            He();
            var N = Be("循环变量");
            O(p, N);
          },
          $$slots: { default: !0 }
        });
        var x = B(v, 2);
        Je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (p, k) => {
            var N = ow();
            O(p, N);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var E = B(b, 2), m = X(E);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (p, k) => {
            He();
            var N = Be("输出参数");
            O(p, N);
          },
          $$slots: { default: !0 }
        }), F(E);
        var C = B(E, 2);
        Bn(C, {}), O(c, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(qd, { data: {} }, [], [], !0);
const aw = {
  startNode: Ld,
  codeNode: Zd,
  llmNode: Yd,
  templateNode: Fd,
  httpNode: Xd,
  knowledgeNode: Wd,
  searchEngineNode: Kd,
  loopNode: qd,
  endNode: Rd
};
var lw = /* @__PURE__ */ oe("<!> ", 1);
function Fs(e, t) {
  de(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Je(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const u = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          systemPrompt: "",
          userPrompt: "",
          ...s()
        }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    children: (l, u) => {
      var c = lw(), f = xe(c);
      aa(f, n);
      var d = B(f);
      Ee(() => Zt(d, ` ${r() ?? ""}`)), O(l, c);
    },
    $$slots: { default: !0 }
  }), fe({
    get icon() {
      return n();
    },
    set icon(l) {
      n(l), y();
    },
    get title() {
      return r();
    },
    set title(l) {
      r(l), y();
    },
    get type() {
      return o();
    },
    set type(l) {
      o(l), y();
    },
    get description() {
      return i();
    },
    set description(l) {
      i(l), y();
    },
    get extra() {
      return s();
    },
    set extra(l) {
      s(l), y();
    }
  });
}
ae(
  Fs,
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
var uw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), cw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), dw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Gd(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ bt("base"), r = /* @__PURE__ */ bt("show");
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
  ], s = [], a = In().customNodes;
  if (a) {
    const b = Object.keys(a).sort((E, m) => (a[E].sortNo || 0) - (a[m].sortNo || 0));
    for (let E of b)
      s.push({
        icon: a[E].icon,
        title: a[E].title,
        type: E
      });
  }
  var l = dw(), u = X(l), c = X(u), f = X(c);
  wd(f, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      G(n, b.value.toString(), !0);
    }
  }), F(c);
  var d = B(c, 2), h = X(d);
  Dt(h, 21, () => o, po, (b, E) => {
    Fs(b, ct(() => g(E)));
  }), F(h);
  var v = B(h, 2);
  Dt(v, 21, () => s, po, (b, E) => {
    Fs(b, ct(() => g(E)));
  }), F(v), F(d), F(u);
  var x = B(u, 2);
  Je(x, {
    onclick: () => {
      G(r, g(r) ? "" : "show", !0);
    },
    children: (b, E) => {
      var m = tt(), C = xe(m);
      {
        var p = (N) => {
          var S = uw();
          O(N, S);
        }, k = (N) => {
          var S = cw();
          O(N, S);
        };
        be(C, (N) => {
          g(r) === "show" ? N(p) : N(k, !1);
        });
      }
      O(b, m);
    },
    $$slots: { default: !0 }
  }), F(l), Ee(() => {
    mt(l, 1, `tf-toolbar ${g(r) ?? ""}`), dt(h, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), dt(v, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, l), fe();
}
ae(Gd, {}, [], [], !0);
const fw = () => {
  const { nodeLookup: e } = Ue();
  return {
    getNode: (n) => {
      var o;
      return (o = q(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, gw = () => {
  const { nodes: e } = Ue();
  return {
    ensureParentInNodesBefore: (n, r) => {
      e.update((o) => {
        let i = -1;
        for (let l = 0; l < o.length; l++)
          if (o[l].id === n) {
            i = l;
            break;
          }
        if (i <= 0)
          return o;
        let s = -1;
        for (let l = 0; l < i; l++)
          if (o[l].parentId === n || o[l].id === r) {
            s = l;
            break;
          }
        if (s == -1)
          return o;
        const a = o[i];
        for (let l = i; l > s; l--)
          o[l] = o[l - 1];
        return o[s] = a, o;
      });
    }
  };
}, hw = () => {
  const { edges: e } = Ue();
  return {
    getEdgesByTarget: (n) => q(e).filter((o) => o.target === n)
  };
};
var vw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), mw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), ww = /* @__PURE__ */ oe("<!> <div></div> <!>", 1);
const _w = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Ud(e, t) {
  var h;
  de(t, !0), et(e, _w);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = Ot(), a = { ...r, id: o, data: n() }, l = document.createElement("div"), c = In().customNodes[t.type];
  (h = c.render) == null || h.call(c, l, a, s);
  let f;
  jn(() => {
    n().expand && f && f.append(l);
  }), jn(() => {
    var v;
    n() && ((v = c.onUpdate) == null || v.call(c, l, { ...a, data: n() }));
  });
  const d = /* @__PURE__ */ Me(() => ({
    ...n(),
    description: c.description
  }));
  return hn(e, ct(
    {
      get data() {
        return g(d);
      }
    },
    () => r,
    {
      icon: (x) => {
        var b = tt(), E = xe(b);
        aa(E, () => c.icon), O(x, b);
      },
      children: (x, b) => {
        var E = ww(), m = xe(E);
        {
          var C = (S) => {
            var H = pw(), A = xe(H), D = X(A);
            Qe(D, {
              level: 3,
              children: (I, $) => {
                He();
                var M = Be("输入参数");
                O(I, M);
              },
              $$slots: { default: !0 }
            });
            var z = B(D, 2);
            Je(z, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o);
              },
              children: (I, $) => {
                var M = vw();
                O(I, M);
              },
              $$slots: { default: !0 }
            }), F(A);
            var L = B(A, 2);
            Bt(L, {}), O(S, H);
          };
          be(m, (S) => {
            c.parametersEnable !== !1 && S(C);
          });
        }
        var p = B(m, 2);
        Cn(p, (S) => f = S, () => f);
        var k = B(p, 2);
        {
          var N = (S) => {
            var H = yw(), A = xe(H), D = X(A);
            Qe(D, {
              level: 3,
              mt: "10px",
              children: (I, $) => {
                He();
                var M = Be("输出参数");
                O(I, M);
              },
              $$slots: { default: !0 }
            });
            var z = B(D, 2);
            Je(z, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (I, $) => {
                var M = mw();
                O(I, M);
              },
              $$slots: { default: !0 }
            }), F(A);
            var L = B(A, 2);
            Bn(L, {}), O(S, H);
          };
          be(k, (S) => {
            c.outputDefsEnable !== !1 && S(N);
          });
        }
        Ee(() => {
          dt(p, c.rootStyle || ""), mt(p, 1, fn(c.rootClass), "svelte-c71dg3");
        }), O(x, E);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(v) {
      n(v), y();
    }
  });
}
ae(Ud, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), bw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), Cw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const kw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function jd(e, t) {
  de(t, !0), et(e, kw);
  const [n, r] = nt(), o = () => J(N, "$nodes", n), i = () => J(S, "$edges", n), s = () => J(H, "$viewport", n), a = w(t, "onInit", 7), l = Ot();
  a()(l);
  let u = /* @__PURE__ */ bt(!1);
  const c = (_) => {
    _.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "move");
  }, f = (_) => {
    var Y;
    _.preventDefault();
    const P = l.screenToFlowPosition({
      x: _.clientX - 250,
      y: _.clientY - 100
    }), T = (Y = _.dataTransfer) == null ? void 0 : Y.getData("application/tinyflow"), V = T ? JSON.parse(T) : {}, R = {
      id: `node_${Zr()}`,
      position: P,
      data: {},
      ...V
    };
    oi.addNode(R), oi.selectNodeOnly(R.id);
  }, { getNode: d } = fw(), h = (_) => {
    const P = d(_.source), T = d(_.target);
    if (_.sourceHandle === "loop_handle" || P.parentId) {
      const V = l.getEdges();
      for (let R of V)
        if (R.target === _.target) {
          const Y = d(R.source);
          if (_.sourceHandle === "loop_handle" && Y.parentId !== P.id || P.parentId && Y.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && T.parentId && T.parentId !== P.id);
  }, { ensureParentInNodesBefore: v } = gw(), x = (_, P) => {
    if (!P.isValid)
      return;
    const T = P.toNode;
    if (T.parentId)
      return;
    const V = P.fromNode, R = P.fromHandle, Y = { position: { ...T.position } };
    if (R.id === "loop_handle" ? Y.parentId = V.id : V.parentId && (Y.parentId = V.parentId), Y.parentId) {
      const K = d(Y.parentId);
      Y.position = {
        x: T.position.x - K.position.x,
        y: T.position.y - K.position.y
      }, v(Y.parentId, T.id), l.updateNode(T.id, Y);
    }
  }, { getEdgesByTarget: b } = hw(), E = (_) => {
    _.edges.forEach((T) => {
      const V = d(T.target);
      if (V.parentId) {
        const R = b(T.target), Y = d(V.parentId);
        if (R.length === 0)
          l.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + Y.position.x,
              y: V.position.y + Y.position.y
            }
          });
        else {
          let K = !1;
          for (let re = 0; re < R.length; re++) {
            const j = R[re], W = d(j.source);
            if (W.parentId || W.type === "loopNode") {
              K = !0;
              break;
            }
          }
          K || l.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + Y.position.x,
              y: V.position.y + Y.position.y
            }
          });
        }
      }
    });
  }, m = (_, P) => {
  }, C = (_) => {
  }, p = {}, k = In().customNodes;
  if (k)
    for (let _ of Object.keys(k))
      p[_] = Ud;
  const { nodes: N, edges: S, viewport: H } = Ue(), A = In().onDataChange;
  A && (N.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "nodesChange" }
    );
  }), S.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "edgesChange" }
    );
  }), H.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var D = Cw(), z = X(D);
  const L = /* @__PURE__ */ Me(() => ({ ...aw, ...p })), I = /* @__PURE__ */ Me(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  od(z, ct(
    {
      get nodeTypes() {
        return g(L);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: h,
      onconnectend: x,
      onconnectstart: m,
      onconnect: C,
      connectionRadius: 50,
      ondelete: E,
      onclick: (_) => {
        const P = _.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || G(u, !1);
      },
      get defaultEdgeOptions() {
        return g(I);
      },
      $$events: {
        drop: f,
        dragover: c,
        edgeclick: () => {
          G(u, !0);
        }
      },
      children: (_, P) => {
        var T = bw(), V = xe(T);
        hd(V, {});
        var R = B(V, 2);
        dd(R, {});
        var Y = B(R, 2);
        pd(Y, {});
        var K = B(Y, 2);
        {
          var re = (j) => {
            Lo(j, {
              children: (W, se) => {
                var ve = xw(), he = B(X(ve), 4), te = X(he);
                At(te, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Ae) => {
                  }
                }), F(he), F(ve), O(W, ve);
              },
              $$slots: { default: !0 }
            });
          };
          be(K, (j) => {
            g(u) && j(re);
          });
        }
        O(_, T);
      },
      $$slots: { default: !0 }
    }
  ));
  var $ = B(z, 2);
  Gd($, {}), F(D), O(e, D);
  var M = fe({
    get onInit() {
      return a();
    },
    set onInit(_) {
      a(_), y();
    }
  });
  return r(), M;
}
ae(jd, { onInit: {} }, [], [], !0);
function Ew(e, t) {
  de(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return oi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Dr("tinyflow_options", n()), id(e, {
    fitView: !0,
    children: (i, s) => {
      jd(i, {
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
      n(i), y();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), y();
    }
  });
}
customElements.define("tinyflow-component", ae(Ew, { options: {}, onInit: {} }, [], [], !1));
export {
  Mw as Tinyflow
};
//# sourceMappingURL=index.js.map
