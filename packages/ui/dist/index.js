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
const Xs = 1, Ws = 2, Ul = 4, yf = 8, wf = 16, _f = 1, xf = 2, jl = 4, bf = 8, Cf = 16, Jl = 1, kf = 2, Ks = "[", qs = "[!", Gs = "]", br = {}, Mt = Symbol(), Ef = "http://www.w3.org/1999/xhtml", $f = "http://www.w3.org/2000/svg", Ra = !1;
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
const an = 2, eu = 4, Hi = 8, Js = 16, In = 32, hr = 64, si = 128, Yt = 256, ai = 512, St = 1024, yn = 2048, er = 4096, Vn = 8192, Vi = 16384, Mf = 32768, Xr = 65536, Hf = 1 << 17, Vf = 1 << 19, tu = 1 << 20, ws = 1 << 21, Wn = Symbol("$state"), Qs = Symbol("legacy props"), Af = Symbol("");
function Df(e) {
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
function Ai(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ee = !1;
function Rt(e) {
  Ee = e;
}
let De;
function Et(e) {
  if (e === null)
    throw Ai(), br;
  return De = e;
}
function wn() {
  return Et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(De)
  );
}
function Z(e) {
  if (Ee) {
    if (/* @__PURE__ */ En(De) !== null)
      throw Ai(), br;
    De = e;
  }
}
function Ne(e = 1) {
  if (Ee) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    De = n;
  }
}
function _s() {
  for (var e = 0, t = De; ; ) {
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
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = js(e);
  if (t !== Pf && t !== Nf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Po(e), o = /* @__PURE__ */ bt(0), i = qe, s = (a) => {
    var l = qe;
    _n(i);
    var u = a();
    return _n(l), u;
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
        return c === void 0 ? (c = s(() => /* @__PURE__ */ bt(u.value)), n.set(l, c)) : U(
          c,
          s(() => jt(u.value))
        ), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0)
          l in a && n.set(
            l,
            s(() => /* @__PURE__ */ bt(Mt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && U(c, f);
          }
          U(u, Mt), Ya(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Wn)
          return e;
        var c = n.get(l), f = l in a;
        if (c === void 0 && (!f || (h = Hn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ bt(jt(f ? a[l] : Mt))), n.set(l, c)), c !== void 0) {
          var d = g(c);
          return d === Mt ? void 0 : d;
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
          if (f !== void 0 && d !== Mt)
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
        if (l === Wn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== Mt || Reflect.has(a, l);
        if (u !== void 0 || Ge !== null && (!c || (d = Hn(a, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ bt(c ? jt(a[l]) : Mt)), n.set(l, u));
          var f = g(u);
          if (f === Mt)
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
            v !== void 0 ? U(v, Mt) : h in a && (v = s(() => /* @__PURE__ */ bt(Mt)), n.set(h + "", v));
          }
        f === void 0 ? (!d || (m = Hn(a, l)) != null && m.writable) && (f = s(() => /* @__PURE__ */ bt(void 0)), U(
          f,
          s(() => jt(u))
        ), n.set(l, f)) : (d = f.v !== Mt, U(
          f,
          s(() => jt(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_ != null && _.set && _.set.call(c, u), !d) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= b.v && U(b, E + 1);
          }
          Ya(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var d = n.get(f);
          return d === void 0 || d.v !== Mt;
        });
        for (var [u, c] of n)
          c.v !== Mt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Yf();
      }
    }
  );
}
function Ya(e, t = 1) {
  U(e, e.v + t);
}
var Ht, nu, ru, ou;
function xs() {
  if (Ht === void 0) {
    Ht = window, nu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ru = Hn(t, "firstChild").get, ou = Hn(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0);
  }
}
function Dn(e = "") {
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
function F(e, t) {
  if (!Ee)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(De)
  );
  if (n === null)
    n = De.appendChild(Dn());
  else if (t && n.nodeType !== 3) {
    var r = Dn();
    return n == null || n.before(r), Et(r), r;
  }
  return Et(n), n;
}
function we(e, t) {
  if (!Ee) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return De;
}
function R(e, t = 1, n = !1) {
  let r = Ee ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!Ee)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Dn();
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
  var t = an | yn, n = qe !== null && qe.f & an ? (
    /** @type {Derived} */
    qe
  ) : null;
  return Ge === null || n !== null && n.f & Yt ? t |= Yt : Ge.f |= tu, {
    ctx: Fe,
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
function Te(e) {
  const t = /* @__PURE__ */ Mr(e);
  return mu(t), t;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
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
  jn(Ff(e));
  try {
    su(e), t = xu(e);
  } finally {
    jn(n);
  }
  return t;
}
function lu(e) {
  var t = au(e), n = (Fn || e.f & Yt) && e.deps !== null ? er : St;
  en(e, n), e.equals(t) || (e.v = t, e.wv = wu());
}
function uu(e) {
  Ge === null && qe === null && Lf(), qe !== null && qe.f & Yt && Ge === null && Of(), To && Df();
}
function Xf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | yn,
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
function Un(e) {
  uu();
  var t = Ge !== null && (Ge.f & In) !== 0 && Fe !== null && !Fe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Fe
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
    Fe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), xn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Fe
  );
  Wr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & St && en(n, er), Kr(n) && Oi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return vr(Hi, e, !0);
}
function ke(e, t = [], n = Mr) {
  const r = t.map(n);
  return pr(() => e(...r.map(g)));
}
function pr(e, t = 0) {
  return vr(Hi | Js | t, e, !0);
}
function On(e, t = !0) {
  return vr(Hi | In, e, !0, t);
}
function cu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = To, r = qe;
    Fa(!0), _n(null);
    try {
      t.call(null);
    } finally {
      Fa(n), _n(r);
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
    t.f & In || Qt(t), t = n;
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
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & In) !== 0;
      oa(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  hu(e, !0);
}
function hu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & St || (e.f ^= St), Kr(e) && (en(e, yn), Li(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & In) !== 0;
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
let qe = null, vn = !1;
function _n(e) {
  qe = e;
}
let Ge = null;
function jn(e) {
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
let yu = 1, ci = 0, Fn = !1;
function wu() {
  return ++yu;
}
function Kr(e) {
  var f;
  var t = e.f;
  if (t & yn)
    return !0;
  if (t & er) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ai) !== 0, a = r && Ge !== null && !Fn, l = n.length;
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
    (!r || Ge !== null && !Fn) && en(e, St);
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
function Di(e, t, n, r) {
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
      ) : t === i && (n ? en(i, yn) : i.f & St && en(i, er), Li(
        /** @type {Effect} */
        i
      )));
    }
}
function xu(e) {
  var h;
  var t = xt, n = It, r = Gt, o = qe, i = Fn, s = $t, a = Fe, l = vn, u = e.f;
  xt = /** @type {null | Value[]} */
  null, It = 0, Gt = null, Fn = (u & Yt) !== 0 && (vn || !sr || qe === null), qe = u & (In | hr) ? null : e, $t = null, Wa(e.ctx), vn = !1, ci++, e.f |= ws;
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
      if (!Fn)
        for (d = It; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && It < f.length && (di(e, It), f.length = It);
    if (Ii() && Gt !== null && !vn && f !== null && !(e.f & (an | er | yn)))
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
    xt = t, It = n, Gt = r, qe = o, Fn = i, $t = s, Wa(a), vn = l, e.f ^= ws;
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
  (xt === null || !xt.includes(t)) && (en(t, er), t.f & (Yt | ai) || (t.f ^= ai), su(
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
    var n = Ge, r = Fe, o = sr;
    Ge = e, sr = !0;
    try {
      t & Js ? Gf(e) : du(e), cu(e);
      var i = xu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yu;
      var s = e.deps, a;
      Ra && pf && e.f & yn;
    } catch (l) {
      Di(l, e, n, r || e.ctx);
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
      Di(e, ui, null);
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
          Di(o, r, null, r.ctx);
        }
    }
}
function Li(e) {
  li || (li = !0, queueMicrotask(bu));
  for (var t = ui = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (hr | In)) {
      if (!(n & St)) return;
      t.f ^= St;
    }
  }
  ao.push(t);
}
function i1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (In | hr)) !== 0, i = o && (r & St) !== 0;
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
          Di(u, n, null, n.ctx);
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
  if (qe !== null && !vn) {
    if (!($t != null && $t.includes(e))) {
      var r = qe.deps;
      e.rv < ci && (e.rv = ci, xt === null && r !== null && r[It] === e ? It++ : xt === null ? xt = [e] : (!Fn || !xt.includes(e)) && xt.push(e));
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
function xn(e) {
  var t = vn;
  try {
    return vn = !0, e();
  } finally {
    vn = t;
  }
}
const s1 = -7169;
function en(e, t) {
  e.f = e.f & s1 | t;
}
function j(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      bs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && bs(n);
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
  return t || (n.equals = na), Fr && Fe !== null && Fe.l !== null && ((r = Fe.l).s ?? (r.s = [])).push(n), n;
}
function U(e, t, n = !1) {
  qe !== null && !vn && Ii() && qe.f & (an | Js) && !($t != null && $t.includes(e)) && Zf();
  let r = n ? jt(t) : t;
  return Cs(e, r);
}
function Cs(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    To ? vo.set(e, t) : vo.set(e, n), e.v = t, e.f & an && (e.f & yn && au(
      /** @type {Derived} */
      e
    ), en(e, e.f & Yt ? er : St)), e.wv = wu(), Cu(e, yn), Ii() && Ge !== null && Ge.f & St && !(Ge.f & (In | hr)) && (Gt === null ? Qf([e]) : Gt.push(e));
  }
  return t;
}
function Xa(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Cu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ii(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & yn || !r && s === Ge || (en(s, t), a & (St | Yt) && (a & an ? Cu(
        /** @type {Derived} */
        s,
        er
      ) : Li(
        /** @type {Effect} */
        s
      )));
    }
}
let Fe = null;
function Wa(e) {
  Fe = e;
}
function lr(e) {
  return (
    /** @type {T} */
    ia().get(e)
  );
}
function Ar(e, t) {
  return ia().set(e, t), t;
}
function a1(e) {
  return ia().has(e);
}
function de(e, t = !1, n) {
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
  Fr && !t && (Fe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Vr(!1)
  }), ra(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Fe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ge, r = qe;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          jn(i.effect), _n(i.reaction), zt(i.fn);
        }
      } finally {
        jn(n), _n(r);
      }
    }
    Fe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ii() {
  return !Fr || Fe !== null && Fe.l === null;
}
function ia(e) {
  return Fe === null && Mi(), Fe.c ?? (Fe.c = new Map(l1(Fe) || void 0));
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
  Ee && /* @__PURE__ */ kt(e) !== null && ea(e);
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
  _n(null), jn(null);
  try {
    return e();
  } finally {
    _n(t), jn(n);
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
function Ze(e, t, n, r, o) {
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
    _n(null), jn(null);
    try {
      for (var d, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Po(_)) {
              var [b, ...E] = _;
              b.apply(i, [e, ...E]);
            } else
              _.call(i, e);
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
      e.__root = t, delete e.currentTarget, _n(c), jn(f);
    }
  }
}
function sa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function At(e, t) {
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
    if (Ee)
      return At(De, null), De;
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
      At(a, l);
    } else
      At(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function be(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ee)
      return At(De, null), De;
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
      At(c, f);
    } else
      At(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!Ee) {
    var t = Dn(e + "");
    return At(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Dn()), Et(n)), At(n, n), n;
}
function tt() {
  if (Ee)
    return At(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), At(t, n), e;
}
function O(e, t) {
  if (Ee) {
    Ge.nodes_end = De, wn();
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
  const n = t.target, r = Ee, o = De;
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
    ), wn();
    const s = Su(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Gs)
      throw Ai(), br;
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
        var _ = wr.get(h);
        _ === void 0 ? (document.addEventListener(h, ro, { passive: v }), wr.set(h, 1)) : wr.set(h, _ + 1);
      }
    }
  };
  l(Us(ku)), ks.add(l);
  var u = void 0, c = qf(() => {
    var f = n ?? t.appendChild(Dn());
    return On(() => {
      if (i) {
        de({});
        var d = (
          /** @type {ComponentContext} */
          Fe
        );
        d.c = i;
      }
      o && (r.$$events = o), Ee && At(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Ee && (Ge.nodes_end = De), i && fe();
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
function xe(e, t, [n, r] = [0, 0]) {
  Ee && n === 0 && wn();
  var o = e, i = null, s = null, a = Mt, l = n > 0 ? Xr : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (a === (a = d)) return;
    let v = !1;
    if (Ee && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Ks ? r = 0 : b === qs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = _s(), Et(o), Rt(!1), v = !0, r = -1);
    }
    a ? (i ? fo(i) : h && (i = On(() => h(o))), s && Hr(s, () => {
      s = null;
    })) : (s ? fo(s) : h && (s = On(() => h(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), v && Rt(!0);
  };
  pr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Ee && (o = De);
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
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  gu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Bn(e, c.prev, c.next)), Qt(c.e, !a);
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
    s = Ee ? Et(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(Dn());
  }
  Ee && wn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var h = n();
    return Po(h) ? h : h == null ? [] : Us(h);
  });
  pr(() => {
    var h = g(d), v = h.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let _ = !1;
    if (Ee) {
      var b = (
        /** @type {Comment} */
        s.data === qs
      );
      b !== (v === 0) && (s = _s(), Et(s), Rt(!1), _ = !0);
    }
    if (Ee) {
      for (var E = null, m, C = 0; C < v; C++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Gs) {
          s = /** @type {Comment} */
          De, _ = !0, Rt(!1);
          break;
        }
        var p = h[C], k = r(p, C);
        m = Pu(
          De,
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
    Ee || E1(h, a, s, o, t, r, n), i !== null && (v === 0 ? c ? fo(c) : c = On(() => i(s)) : c !== null && Hr(c, () => {
      c = null;
    })), _ && Rt(!0), g(d);
  }), Ee && (s = De);
}
function E1(e, t, n, r, o, i, s) {
  var P, M, x, N;
  var a = (o & yf) !== 0, l = (o & (Xs | Ws)) !== 0, u = e.length, c = t.items, f = t.first, d = f, h, v = null, _, b = [], E = [], m, C, p, k;
  if (a)
    for (k = 0; k < u; k += 1)
      m = e[k], C = i(m, k), p = c.get(C), p !== void 0 && ((P = p.a) == null || P.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (k = 0; k < u; k += 1) {
    if (m = e[k], C = i(m, k), p = c.get(C), p === void 0) {
      var S = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = Pu(
        S,
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
    if (l && $1(p, m, k, o), p.e.f & Vn && (fo(p.e), a && ((M = p.a) == null || M.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), p !== d) {
      if (h !== void 0 && h.has(p)) {
        if (b.length < E.length) {
          var $ = E[0], H;
          v = $.prev;
          var A = b[0], V = b[b.length - 1];
          for (H = 0; H < b.length; H += 1)
            qa(b[H], $, n);
          for (H = 0; H < E.length; H += 1)
            h.delete(E[H]);
          Bn(t, A.prev, V.next), Bn(t, v, A), Bn(t, V, $), d = $, v = V, k -= 1, b = [], E = [];
        } else
          h.delete(p), qa(p, d, n), Bn(t, p.prev, p.next), Bn(t, p, v === null ? t.first : v.next), Bn(t, v, p), v = p;
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
    for (var D = h === void 0 ? [] : Us(h); d !== null; )
      d.e.f & Vn || D.push(d), d = d.next;
    var I = D.length;
    if (I > 0) {
      var z = o & Ul && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < I; k += 1)
          (x = D[k].a) == null || x.measure();
        for (k = 0; k < I; k += 1)
          (N = D[k].a) == null || N.fix();
      }
      k1(t, D, z, c);
    }
  }
  a && No(() => {
    var T;
    if (_ !== void 0)
      for (p of _)
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
    return v.e = On(() => a(e, d, h, u), Ee), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function aa(e, t, n, r, o) {
  var i = e, s = "", a;
  pr(() => {
    if (s === (s = t() ?? "")) {
      Ee && wn();
      return;
    }
    a !== void 0 && (Qt(a), a = void 0), s !== "" && (a = On(() => {
      if (Ee) {
        De.data;
        for (var l = wn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw Ai(), br;
        At(De, u), i = Et(l);
        return;
      }
      var c = s + "", f = sa(c);
      At(
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
  Ee && wn();
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
  }, Xr), Ee && (r = De);
}
function Nu(e, t, n) {
  Ee && wn();
  var r = e, o, i;
  pr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = On(() => n(r, o))));
  }, Xr), Ee && (r = De);
}
function P1(e, t, n, r, o, i) {
  let s = Ee;
  Ee && wn();
  var a, l, u = null;
  Ee && De.nodeType === 1 && (u = /** @type {Element} */
  De, wn());
  var c = (
    /** @type {TemplateNode} */
    Ee ? De : e
  ), f;
  pr(() => {
    const d = t() || null;
    var h = d === "svg" ? $f : null;
    d !== a && (f && (d === null ? Hr(f, () => {
      f = null, l = null;
    }) : d === l ? fo(f) : Qt(f)), d && d !== l && (f = On(() => {
      if (u = Ee ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, d) : document.createElement(d), At(u, u), r) {
        Ee && m1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          Ee ? /* @__PURE__ */ kt(u) : u.appendChild(Dn())
        );
        Ee && (v === null ? Rt(!1) : Et(v)), r(u, v);
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
    var r = xn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var s = n();
        j(s), o && ta(i, s) && (i = s, r.update(s));
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
function dn(e) {
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
      const _ = e.length;
      for (var f = 0; f < _; f++) {
        var d = e[f];
        if (a ? d === "/" && e[f - 1] === "*" && (a = !1) : i ? i === d && (i = !1) : d === "/" && e[f + 1] === "*" ? a = !0 : d === '"' || d === "'" ? i = d : d === "(" ? s++ : d === ")" && s--, !a && i === !1 && s === 0) {
          if (d === ":" && c === -1)
            c = f;
          else if (d === ";" || f === _ - 1) {
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
  if (Ee || s !== n || s === void 0) {
    var a = T1(n, r, i);
    (!Ee || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  if (Ee || o !== t) {
    var i = M1(t, r);
    (!Ee || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (os(e, n == null ? void 0 : n[0], r[0]), os(e, n == null ? void 0 : n[1], r[1], "important")) : os(e, n, r));
  return r;
}
const eo = Symbol("class"), or = Symbol("style"), Mu = Symbol("is custom element"), Hu = Symbol("is html");
function lo(e) {
  if (Ee) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          me(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          me(e, "checked", null), e.checked = o;
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
function me(e, t, n, r) {
  var o = la(e);
  Ee && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Af] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Vu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = la(e), s = i[Mu], a = !i[Hu];
  let l = Ee && s;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = dn(n.class) : (r || n[eo]) && (n.class = null), n[or] && (n.style ?? (n.style = null));
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
      var _ = C[0] + C[1];
      if (_ !== "$$")
        if (_ === "on") {
          const k = {}, S = "$$" + C;
          let $ = C.slice(2);
          var b = d1($);
          if (u1($) && ($ = $.slice(0, -7), k.capture = !0), !b && v) {
            if (p != null) continue;
            e.removeEventListener($, u[S], k), u[S] = null;
          }
          if (p != null)
            if (b)
              e[`__${$}`] = p, zi([$]);
            else {
              let H = function(A) {
                u[C].call(this, A);
              };
              u[S] = Eu($, e, H, k);
            }
          else b && (e[`__${$}`] = void 0);
        } else if (C === "style")
          me(e, C, p);
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
              const S = t === void 0;
              if (E === "value") {
                let $ = k.defaultValue;
                k.removeAttribute(E), k.defaultValue = $, k.value = k.__value = S ? $ : null;
              } else {
                let $ = k.defaultChecked;
                k.removeAttribute(E), k.defaultChecked = $, k.checked = S ? $ : !1;
              }
            } else
              e.removeAttribute(C);
          else m || d.includes(E) && (s || typeof p != "string") ? e[E] = p : typeof p != "function" && me(e, E, p);
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
var Zn, Tr, So, Ni, Au;
const Ti = class Ti {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, Ni);
    /** */
    rr(this, Zn, /* @__PURE__ */ new WeakMap());
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
    var r = lt(this, Zn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, Zn).set(t, r), za(this, Ni, Au).call(this).observe(t, lt(this, So)), () => {
      var o = lt(this, Zn).get(t);
      o.delete(n), o.size === 0 && (lt(this, Zn).delete(t), lt(this, Tr).unobserve(t));
    };
  }
};
Zn = new WeakMap(), Tr = new WeakMap(), So = new WeakMap(), Ni = new WeakSet(), Au = function() {
  return lt(this, Tr) ?? Jr(this, Tr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ti.entries.set(n.target, n);
        for (var r of lt(this, Zn).get(n.target) || [])
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
  zt(() => (xn(() => n(e[t])), r));
}
function Qa(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function bn(e = {}, t, n, r) {
  return zt(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], xn(() => {
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
function He(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), n = t.l.u;
  if (!n) return;
  let r = () => j(t.s);
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
  }), Un(() => {
    const o = xn(() => n.m.map(Tf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Un(() => {
    el(t, r), co(n.a);
  });
}
function el(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ae(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Po(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function Wt(e) {
  Fe === null && Mi(), Fr && Fe.l !== null ? D1(Fe).m.push(e) : Un(() => {
    const t = xn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ua(e) {
  Fe === null && Mi(), Wt(() => () => xn(e));
}
function A1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Fe;
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
      const s = Po(o) ? o.slice() : [o], a = A1(
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
function D1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ca(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = xn(
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
    subscribe: ye(e, t).subscribe
  };
}
function ye(e, t = ft) {
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
function Kn(e, t, n) {
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
      (v, _) => ca(
        v,
        (b) => {
          u[_] = b, c &= ~(1 << _), l && d();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return l = !0, d(), function() {
      co(h), f(), l = !1;
    };
  });
}
function K(e) {
  let t;
  return ca(e, (n) => t = n)(), t;
}
let Xo = !1, Ss = Symbol();
function Q(e, t, n) {
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
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Ss in n ? K(e) : g(r.source);
}
function O1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function fi(e, t) {
  return e.set(t), t;
}
function it() {
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
    if (t === Wn || t === Qs) return !1;
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
  var S;
  var o = (n & _f) !== 0, i = !Fr || (n & xf) !== 0, s = (n & bf) !== 0, a = (n & Cf) !== 0, l = !1, u;
  s ? [u, l] = L1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || Qs in e, f = s && (((S = Hn(e, t)) == null ? void 0 : S.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), h = !0, v = !1, _ = () => (v = !0, h && (h = !1, a ? d = xn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Rf(), u = _(), f && f(u));
  var b;
  if (i)
    b = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? _() : (h = !0, v = !1, $);
    };
  else {
    var E = (o ? Mr : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= Hf, b = () => {
      var $ = g(E);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if (!(n & jl))
    return b;
  if (f) {
    var m = e.$$legacy;
    return function($, H) {
      return arguments.length > 0 ? ((!i || !H || m || l) && f(H ? b() : $), $) : b();
    };
  }
  var C = !1, p = /* @__PURE__ */ ne(u), k = /* @__PURE__ */ Mr(() => {
    var $ = b(), H = g(p);
    return C ? (C = !1, H) : p.v = $;
  });
  return s && g(k), o || (k.equals = na), function($, H) {
    if (arguments.length > 0) {
      const A = H ? g(k) : i && s ? jt($) : $;
      if (!k.equals(A)) {
        if (C = !0, U(p, A), v && d !== void 0 && (d = A), tl(k))
          return $;
        xn(() => g(k));
      }
      return $;
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
          return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
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
let Du;
typeof HTMLElement == "function" && (Du = class extends HTMLElement {
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
  let s = class extends Du {
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
    var c = r[u], f = o[u], d = f.length, h = pg(e.call(c, c && c.__data__, u, r)), v = h.length, _ = a[u] = new Array(v), b = s[u] = new Array(v), E = l[u] = new Array(d);
    n(c, f, _, b, E, h, t);
    for (var m = 0, C = 0, p, k; m < v; ++m)
      if (p = _[m]) {
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
function Ag(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Dg(e, t) {
  var n = Yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tg : Ng : typeof t == "function" ? n.local ? Ag : Vg : n.local ? Hg : Mg)(n, t));
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
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Ig : Lg)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
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
  attr: Dg,
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
      var S = C(this, t.call(this, p, k), p, k, "mouse");
      S && (Jt(p.view).on("mousemove.drag", v, mo).on("mouseup.drag", _, mo), qu(p.view), as(p), u = !1, a = p.clientX, l = p.clientY, S("start", p));
    }
  }
  function v(p) {
    if (Cr(p), !u) {
      var k = p.clientX - a, S = p.clientY - l;
      u = k * k + S * S > f;
    }
    o.mouse("drag", p);
  }
  function _(p) {
    Jt(p.view).on("mousemove.drag mouseup.drag", null), Gu(p.view, u), Cr(p), o.mouse("end", p);
  }
  function b(p, k) {
    if (e.call(this, p, k)) {
      var S = p.changedTouches, $ = t.call(this, p, k), H = S.length, A, V;
      for (A = 0; A < H; ++A)
        (V = C(this, $, p, k, S[A].identifier, S[A])) && (as(p), V("start", p, S[A]));
    }
  }
  function E(p) {
    var k = p.changedTouches, S = k.length, $, H;
    for ($ = 0; $ < S; ++$)
      (H = o[k[$].identifier]) && (Cr(p), H("drag", p, k[$]));
  }
  function m(p) {
    var k = p.changedTouches, S = k.length, $, H;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < S; ++$)
      (H = o[k[$].identifier]) && (as(p), H("end", p, k[$]));
  }
  function C(p, k, S, $, H, A) {
    var V = i.copy(), D = on(A || S, k), I, z, P;
    if ((P = n.call(p, new Ns("beforestart", {
      sourceEvent: S,
      target: d,
      identifier: H,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), $)) != null)
      return I = P.x - D[0] || 0, z = P.y - D[1] || 0, function M(x, N, T) {
        var L = D, B;
        switch (x) {
          case "start":
            o[H] = M, B = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            D = on(T || N, k), B = s;
            break;
        }
        V.call(
          x,
          p,
          new Ns(x, {
            sourceEvent: N,
            subject: P,
            target: d,
            identifier: H,
            active: B,
            x: D[0] + I,
            y: D[1] + z,
            dx: D[0] - L[0],
            dy: D[1] - L[1],
            dispatch: V
          }),
          $
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
var yo = 0.7, hi = 1 / yo, kr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hh = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Ah = new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`), Dh = new RegExp(`^rgba\\(${kr},${kr},${kr},${wo}\\)$`), Oh = new RegExp(`^rgba\\(${pn},${pn},${pn},${wo}\\)$`), Lh = new RegExp(`^hsl\\(${wo},${pn},${pn}\\)$`), Ih = new RegExp(`^hsla\\(${wo},${pn},${pn},${wo}\\)$`), ol = {
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
  return e = (e + "").trim().toLowerCase(), (t = Hh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? al(t) : n === 3 ? new Vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new Vt(t[1], t[2], t[3], 1) : (t = Ah.exec(e)) ? new Vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dh.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Oh.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lh.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ih.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, t[4]) : ol.hasOwnProperty(e) ? al(ol[e]) : e === "transparent" ? new Vt(NaN, NaN, NaN, 0) : null;
}
function al(e) {
  return new Vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Vt(e, t, n, r);
}
function Bh(e) {
  return e instanceof Ho || (e = _o(e)), e ? (e = e.rgb(), new Vt(e.r, e.g, e.b, e.opacity)) : new Vt();
}
function Ts(e, t, n, r) {
  return arguments.length === 1 ? Bh(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ga(Vt, Ts, Uu(Ho, {
  brighter(e) {
    return e = e == null ? hi : Math.pow(hi, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Vt(ar(this.r), ar(this.g), ar(this.b), vi(this.opacity));
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
    return new Vt(
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
function Yn(e, t) {
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
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Yn(r, o) })), n = us.lastIndex;
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
      var _ = h.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: Yn(u, f) }, { i: _ - 2, x: Yn(c, d) });
    } else (f || d) && h.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Yn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Yn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, h, v) {
    if (u !== f || c !== d) {
      var _ = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: Yn(u, f) }, { i: _ - 2, x: Yn(c, d) });
    } else (f !== 1 || d !== 1) && h.push(o(h) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(h) {
      for (var v = -1, _ = d.length, b; ++v < _; ) f[(b = d[v]).i] = b.x(h);
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
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], h = c - a, v = f - l, _ = h * h + v * v, b, E;
    if (_ < ev)
      E = Math.log(d / u) / t, b = function($) {
        return [
          a + $ * h,
          l + $ * v,
          u * Math.exp(t * $ * E)
        ];
      };
    else {
      var m = Math.sqrt(_), C = (d * d - u * u + r * _) / (2 * u * n * m), p = (d * d - u * u - r * _) / (2 * d * n * m), k = Math.log(Math.sqrt(C * C + 1) - C), S = Math.log(Math.sqrt(p * p + 1) - p);
      E = (S - k) / t, b = function($) {
        var H = $ * E, A = hl(k), V = u / (n * m) * (A * nv(t * H + k) - tv(k));
        return [
          a + V * h,
          l + V * v,
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
var lv = Bi("start", "end", "cancel", "interrupt"), uv = [], ic = 0, ml = 1, As = 2, ti = 3, yl = 4, Ds = 5, ni = 6;
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
  var n = fn(e, t);
  if (n.state > ic) throw new Error("too late; already scheduled");
  return n;
}
function $n(e, t) {
  var n = fn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function fn(e, t) {
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
    }), n.state = As, n.on.call("start", e, e.__data__, n.index, n.group), n.state === As) {
      for (n.state = ti, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ds, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ds && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > As && r.state < Ds, r.state = ni, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
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
    for (var r = fn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
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
    return fn(o, r).value[t];
  };
}
function sc(e, t) {
  var n;
  return (typeof t == "number" ? Yn : t instanceof _o ? fl : (n = _o(t)) ? (t = n, fl) : Gh)(e, t);
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
  return arguments.length ? this.each((typeof e == "function" ? Sv : Pv)(t, e)) : fn(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Tv : Mv)(t, e)) : fn(this.node(), t).duration;
}
function Vv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    $n(this, e).ease = t;
  };
}
function Av(e) {
  var t = this._id;
  return arguments.length ? this.each(Vv(t, e)) : fn(this.node(), t).ease;
}
function Dv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    $n(this, e).ease = n;
  };
}
function Ov(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Dv(this._id, e));
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
  return arguments.length < 2 ? fn(this.node(), n).on.on(e) : this.each(Rv(n, e, t));
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
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Fi(u[d], t, n, d, u, fn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), h, v = fn(c, n), _ = 0, b = d.length; _ < b; ++_)
          (h = d[_]) && Fi(h, t, n, _, d, v);
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
    var i = Dr(this, e), s = (this.style.removeProperty(e), Dr(this, e));
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
    var s = Dr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Uv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Dr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Dr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
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
        var c = fn(l, t);
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
  ease: Av,
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
  var e = p0, t = m0, n = _0, r = y0, o = w0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rv, u = Bi("start", "zoom", "end"), c, f, d, h = 500, v = 150, _ = 0, b = 10;
  function E(P) {
    P.property("__zoom", wl).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", V).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(P, M, x, N) {
    var T = P.selection ? P.selection() : P;
    T.property("__zoom", wl), P !== T ? k(P, M, x, N) : T.interrupt().each(function() {
      S(this, arguments).event(N).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, E.scaleBy = function(P, M, x, N) {
    E.scaleTo(P, function() {
      var T = this.__zoom.k, L = typeof M == "function" ? M.apply(this, arguments) : M;
      return T * L;
    }, x, N);
  }, E.scaleTo = function(P, M, x, N) {
    E.transform(P, function() {
      var T = t.apply(this, arguments), L = this.__zoom, B = x == null ? p(T) : typeof x == "function" ? x.apply(this, arguments) : x, X = L.invert(B), q = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(C(m(L, q), B, X), T, s);
    }, x, N);
  }, E.translateBy = function(P, M, x, N) {
    E.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), s);
    }, null, N);
  }, E.translateTo = function(P, M, x, N, T) {
    E.transform(P, function() {
      var L = t.apply(this, arguments), B = this.__zoom, X = N == null ? p(L) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Xi.translate(X[0], X[1]).scale(B.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), L, s);
    }, N, T);
  };
  function m(P, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === P.k ? P : new Tn(M, P.x, P.y);
  }
  function C(P, M, x) {
    var N = M[0] - x[0] * P.k, T = M[1] - x[1] * P.k;
    return N === P.x && T === P.y ? P : new Tn(P.k, N, T);
  }
  function p(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, M, x, N) {
    P.on("start.zoom", function() {
      S(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, L = arguments, B = S(T, L).event(N), X = t.apply(T, L), q = x == null ? p(X) : typeof x == "function" ? x.apply(T, L) : x, ue = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), ee = T.__zoom, W = typeof M == "function" ? M.apply(T, L) : M, re = l(ee.invert(q).concat(ue / ee.k), W.invert(q).concat(ue / W.k));
      return function(he) {
        if (he === 1) he = W;
        else {
          var _e = re(he), le = ue / _e[2];
          he = new Tn(le, q[0] - _e[0] * le, q[1] - _e[1] * le);
        }
        B.zoom(null, he);
      };
    });
  }
  function S(P, M, x) {
    return !x && P.__zooming || new $(P, M);
  }
  function $(P, M) {
    this.that = P, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, M), this.taps = 0;
  }
  $.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, M) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var M = Jt(this.that).datum();
      u.call(
        P,
        this.that,
        new v0(P, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function H(P, ...M) {
    if (!e.apply(this, arguments)) return;
    var x = S(this, M).event(P), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), L = on(P);
    if (x.wheel)
      (x.mouse[0][0] !== L[0] || x.mouse[0][1] !== L[1]) && (x.mouse[1] = N.invert(x.mouse[0] = L)), clearTimeout(x.wheel);
    else {
      if (N.k === T) return;
      x.mouse = [L, N.invert(L)], ri(this), x.start();
    }
    no(P), x.wheel = setTimeout(B, v), x.zoom("mouse", n(C(m(N, T), x.mouse[0], x.mouse[1]), x.extent, s));
    function B() {
      x.wheel = null, x.end();
    }
  }
  function A(P, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var x = P.currentTarget, N = S(this, M, !0).event(P), T = Jt(P.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", ue, !0), L = on(P, x), B = P.clientX, X = P.clientY;
    qu(P.view), cs(P), N.mouse = [L, this.__zoom.invert(L)], ri(this), N.start();
    function q(ee) {
      if (no(ee), !N.moved) {
        var W = ee.clientX - B, re = ee.clientY - X;
        N.moved = W * W + re * re > _;
      }
      N.event(ee).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = on(ee, x), N.mouse[1]), N.extent, s));
    }
    function ue(ee) {
      T.on("mousemove.zoom mouseup.zoom", null), Gu(ee.view, N.moved), no(ee), N.event(ee).end();
    }
  }
  function V(P, ...M) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, N = on(P.changedTouches ? P.changedTouches[0] : P, this), T = x.invert(N), L = x.k * (P.shiftKey ? 0.5 : 2), B = n(C(m(x, L), N, T), t.apply(this, M), s);
      no(P), a > 0 ? Jt(this).transition().duration(a).call(k, B, N, P) : Jt(this).call(E.transform, B, N, P);
    }
  }
  function D(P, ...M) {
    if (e.apply(this, arguments)) {
      var x = P.touches, N = x.length, T = S(this, M, P.changedTouches.length === N).event(P), L, B, X, q;
      for (cs(P), B = 0; B < N; ++B)
        X = x[B], q = on(X, this), q = [q, this.__zoom.invert(q), X.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== q[2] && (T.touch1 = q, T.taps = 0) : (T.touch0 = q, L = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (T.taps < 2 && (f = q[0], c = setTimeout(function() {
        c = null;
      }, h)), ri(this), T.start());
    }
  }
  function I(P, ...M) {
    if (this.__zooming) {
      var x = S(this, M).event(P), N = P.changedTouches, T = N.length, L, B, X, q;
      for (no(P), L = 0; L < T; ++L)
        B = N[L], X = on(B, this), x.touch0 && x.touch0[2] === B.identifier ? x.touch0[0] = X : x.touch1 && x.touch1[2] === B.identifier && (x.touch1[0] = X);
      if (B = x.that.__zoom, x.touch1) {
        var ue = x.touch0[0], ee = x.touch0[1], W = x.touch1[0], re = x.touch1[1], he = (he = W[0] - ue[0]) * he + (he = W[1] - ue[1]) * he, _e = (_e = re[0] - ee[0]) * _e + (_e = re[1] - ee[1]) * _e;
        B = m(B, Math.sqrt(he / _e)), X = [(ue[0] + W[0]) / 2, (ue[1] + W[1]) / 2], q = [(ee[0] + re[0]) / 2, (ee[1] + re[1]) / 2];
      } else if (x.touch0) X = x.touch0[0], q = x.touch0[1];
      else return;
      x.zoom("touch", n(C(B, X, q), x.extent, s));
    }
  }
  function z(P, ...M) {
    if (this.__zooming) {
      var x = S(this, M).event(P), N = P.changedTouches, T = N.length, L, B;
      for (cs(P), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), L = 0; L < T; ++L)
        B = N[L], x.touch0 && x.touch0[2] === B.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === B.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (B = on(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < b)) {
        var X = Jt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Uo(+P), E) : r;
  }, E.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Uo(!!P), E) : e;
  }, E.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Uo(!!P), E) : o;
  }, E.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Uo([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), E) : t;
  }, E.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], E) : [i[0], i[1]];
  }, E.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], E) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, E.constrain = function(P) {
    return arguments.length ? (n = P, E) : n;
  }, E.duration = function(P) {
    return arguments.length ? (a = +P, E) : a;
  }, E.interpolate = function(P) {
    return arguments.length ? (l = P, E) : l;
  }, E.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? E : P;
  }, E.clickDistance = function(P) {
    return arguments.length ? (_ = (P = +P) * P, E) : Math.sqrt(_);
  }, E.tapDistance = function(P) {
    return arguments.length ? (b = +P, E) : b;
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
var qn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(qn || (qn = {}));
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
var Ce;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ce || (Ce = {}));
const _l = {
  [Ce.Left]: Ce.Right,
  [Ce.Right]: Ce.Left,
  [Ce.Top]: Ce.Bottom,
  [Ce.Bottom]: Ce.Top
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
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
}, Ao = (e, t = {}) => {
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
    ...Do(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, _ = Co(a, zr(u)), b = (h ?? 0) * (v ?? 0), E = i && _ > 0;
    (!u.internals.handleBounds || E || _ >= b || u.dragging) && l.push(u);
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
  const a = Ao(e), l = wa(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
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
    const h = i.has(d.id), v = !h && d.parentId && s.find((_) => _.id === d.parentId);
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
  const { width: r, height: o } = tr(n), { x: i, y: s } = n.internals.positionAbsolute;
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
}), Do = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
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
function tr(e) {
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
  const { x: i, y: s } = An(e), a = Do({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ya(a, t) : a;
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
const yc = (e) => "clientX" in e, An = (e, t) => {
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
    case Ce.Left:
      return [t - jo(t - r, i), n];
    case Ce.Right:
      return [t + jo(r - t, i), n];
    case Ce.Top:
      return [t, n - jo(n - o, i)];
    case Ce.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function wc({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
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
function A0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
const D0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, O0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), L0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return C0(e) ? n = { ...e } : n = {
    ...e,
    id: D0(e)
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
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Nl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function z0({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i }) {
  const s = Pl[t], a = Pl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = I0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let h = [], v, _;
  const b = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, C, p, k] = _c({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? m, _ = o.y ?? C;
    const $ = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], H = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    s[f] === d ? h = f === "x" ? $ : H : h = f === "x" ? H : $;
  } else {
    const $ = [{ x: l.x, y: u.y }], H = [{ x: u.x, y: l.y }];
    if (f === "x" ? h = s.x === d ? H : $ : h = s.y === d ? $ : H, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const P = Math.min(i - 1, i - z);
        s[f] === d ? b[f] = (l[f] > e[f] ? -1 : 1) * P : E[f] = (u[f] > n[f] ? -1 : 1) * P;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", P = s[f] === a[z], M = l[z] > u[z], x = l[z] < u[z];
      (s[f] === 1 && (!P && M || P && x) || s[f] !== 1 && (!P && x || P && M)) && (h = f === "x" ? $ : H);
    }
    const A = { x: l.x + b.x, y: l.y + b.y }, V = { x: u.x + E.x, y: u.y + E.y }, D = Math.max(Math.abs(A.x - h[0].x), Math.abs(V.x - h[0].x)), I = Math.max(Math.abs(A.y - h[0].y), Math.abs(V.y - h[0].y));
    D >= I ? (v = (A.x + V.x) / 2, _ = h[0].y) : (v = h[0].x, _ = (A.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...h,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], v, _, p, k];
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
function Ci({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
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
  const a = (i == null ? void 0 : i.position) || Ce.Bottom, l = (s == null ? void 0 : s.position) || Ce.Top, u = ko(t, i, a), c = ko(n, s, l);
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
function ko(e, t, n = Ce.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? tr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ce.Top:
      return { x: o + s / 2, y: i };
    case Ce.Right:
      return { x: o + s, y: i + a / 2 };
    case Ce.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ce.Left:
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
    case Ce.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ce.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ce.Left:
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
      const i = Vo(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, tr(o));
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
      const f = Vo(u, o.nodeOrigin), d = Rr(u.extent) ? u.extent : o.nodeExtent, h = fr(f, d, tr(u));
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
  const { x: i, y: s } = t.internals.positionAbsolute, a = tr(e), l = Vo(e, n), u = Rr(e.extent) ? fr(l, e.extent, a) : l;
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
    const c = l.internals.positionAbsolute, f = tr(l), d = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(f.width, Math.round(a.width)), b = Math.max(f.height, Math.round(a.height)), E = (_ - f.width) * d[0], m = (b - f.height) * d[1];
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
        width: _ + (h ? d[0] * h - E : 0),
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
    const v = _a(d.nodeElement), _ = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (_ || !h.internals.handleBounds || d.force))) {
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
      t.set(h.id, p), h.parentId && Ca(p, t, n, { nodeOrigin: o }), a = !0, _ && (l.push({
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
function Al(e, t, n) {
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
    function S({ x: V, y: D }, I) {
      const { nodeLookup: z, nodeExtent: P, snapGrid: M, snapToGrid: x, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: L, onError: B, updateNodePositions: X } = t();
      i = { x: V, y: D };
      let q = !1, ue = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const ee = Ao(a);
        ue = Is(ee);
      }
      for (const [ee, W] of a) {
        if (!z.has(ee))
          continue;
        let re = { x: V - W.distance.x, y: D - W.distance.y };
        x && (re = ya(re, M));
        let he = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !W.extent) {
          const { positionAbsolute: Ie } = W.internals, G = Ie.x - ue.x + P[0][0], se = Ie.x + W.measured.width - ue.x2 + P[1][0], Me = Ie.y - ue.y + P[0][1], Oe = Ie.y + W.measured.height - ue.y2 + P[1][1];
          he = [
            [G, Me],
            [se, Oe]
          ];
        }
        const { position: _e, positionAbsolute: le } = $0({
          nodeId: ee,
          nextPosition: re,
          nodeLookup: z,
          nodeExtent: he,
          nodeOrigin: N,
          onError: B
        });
        q = q || W.position.x !== _e.x || W.position.y !== _e.y, W.position = _e, W.internals.positionAbsolute = le;
      }
      if (q && (X(a, !0), I && (r || T || !p && L))) {
        const [ee, W] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: z
        });
        r == null || r(I, a, ee, W), T == null || T(I, ee, W), p || L == null || L(I, W);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: V, panBy: D, autoPanSpeed: I, autoPanOnNodeDrag: z } = t();
      if (!z) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, M] = hc(u, c, I);
      (P !== 0 || M !== 0) && (i.x = (i.x ?? 0) - P / V[2], i.y = (i.y ?? 0) - M / V[2], await D({ x: P, y: M }) && S(i, null)), s = requestAnimationFrame($);
    }
    function H(V) {
      var q;
      const { nodeLookup: D, multiSelectionActive: I, nodesDraggable: z, transform: P, snapGrid: M, snapToGrid: x, selectNodesOnDrag: N, onNodeDragStart: T, onSelectionDragStart: L, unselectNodesAndEdges: B } = t();
      f = !0, (!N || !C) && !I && p && ((q = D.get(p)) != null && q.selected || B()), C && N && p && (e == null || e(p));
      const X = ds(V.sourceEvent, { transform: P, snapGrid: M, snapToGrid: x, containerBounds: c });
      if (i = X, a = J0(D, z, X, p), a.size > 0 && (n || T || !p && L)) {
        const [ue, ee] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: D
        });
        n == null || n(V.sourceEvent, a, ue, ee), T == null || T(V.sourceEvent, ue, ee), p || L == null || L(V.sourceEvent, ee);
      }
    }
    const A = Mh().clickDistance(k).on("start", (V) => {
      const { domNode: D, nodeDragThreshold: I, transform: z, snapGrid: P, snapToGrid: M } = t();
      c = (D == null ? void 0 : D.getBoundingClientRect()) || null, h = !1, I === 0 && H(V), i = ds(V.sourceEvent, { transform: z, snapGrid: P, snapToGrid: M, containerBounds: c }), u = An(V.sourceEvent, c);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: D, transform: I, snapGrid: z, snapToGrid: P, nodeDragThreshold: M, nodeLookup: x } = t(), N = ds(V.sourceEvent, { transform: I, snapGrid: z, snapToGrid: P, containerBounds: c });
      if ((V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !x.has(p)) && (h = !0), !h) {
        if (!l && D && f && (l = !0, $()), !f) {
          const T = N.xSnapped - (i.x ?? 0), L = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + L * L) > M && H(V);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = An(V.sourceEvent, c), S(N, V.sourceEvent));
      }
    }).on("end", (V) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: D, updateNodePositions: I, onNodeDragStop: z, onSelectionDragStop: P } = t();
        if (I(a, !1), o || z || !p && P) {
          const [M, x] = fs({
            nodeId: p,
            dragItems: a,
            nodeLookup: D,
            dragging: !1
          });
          o == null || o(V.sourceEvent, a, M, x), z == null || z(V.sourceEvent, M, x), p || P == null || P(V.sourceEvent, x);
        }
      }
    }).filter((V) => {
      const D = V.target;
      return !V.button && (!b || !Al(D, `.${b}`, m)) && (!E || Al(D, E, m));
    });
    d.call(A);
  }
  function _() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: _
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
function op(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: h, onConnectStart: v, onConnect: _, onConnectEnd: b, isValidConnection: E = Sc, onReconnectEnd: m, updateConnection: C, getTransform: p, getFromHandle: k, autoPanSpeed: S }) {
  const $ = N0(e.target);
  let H = 0, A;
  const { x: V, y: D } = An(e), I = $ == null ? void 0 : $.elementFromPoint(V, D), z = $c(i, I), P = a == null ? void 0 : a.getBoundingClientRect();
  if (!P || !z)
    return;
  const M = Ec(o, z, r, l, t);
  if (!M)
    return;
  let x = An(e, P), N = !1, T = null, L = !1, B = null;
  function X() {
    if (!c || !P)
      return;
    const [le, Ie] = hc(x, P, S);
    d({ x: le, y: Ie }), H = requestAnimationFrame(X);
  }
  const q = {
    ...M,
    nodeId: o,
    type: z,
    position: M.position
  }, ue = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: ko(ue, q, Ce.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: ue,
    to: x,
    toHandle: null,
    toPosition: _l[q.position],
    toNode: null
  };
  C(W);
  let re = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: z });
  function he(le) {
    if (!k() || !q) {
      _e(le);
      return;
    }
    const Ie = p();
    x = An(le, P), A = np(Do(x, Ie, !1, [1, 1]), n, l, q), N || (X(), N = !0);
    const G = Pc(le, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: E,
      doc: $,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = G.handleDomNode, T = G.connection, L = rp(!!A, G.isValid);
    const se = {
      // from stays the same
      ...re,
      isValid: L,
      to: A && L ? pc({ x: A.x, y: A.y }, Ie) : x,
      toHandle: G.toHandle,
      toPosition: L && G.toHandle ? G.toHandle.position : _l[q.position],
      toNode: G.toHandle ? l.get(G.toHandle.nodeId) : null
    };
    L && A && re.toHandle && se.toHandle && re.toHandle.type === se.toHandle.type && re.toHandle.nodeId === se.toHandle.nodeId && re.toHandle.id === se.toHandle.id && re.to.x === se.to.x && re.to.y === se.to.y || (C(se), re = se);
  }
  function _e(le) {
    (A || B) && T && L && (_ == null || _(T));
    const { inProgress: Ie, ...G } = re, se = {
      ...G,
      toPosition: re.toHandle ? re.toPosition : null
    };
    b == null || b(le, se), i && (m == null || m(le, se)), h(), cancelAnimationFrame(H), N = !1, L = !1, T = null, B = null, $.removeEventListener("mousemove", he), $.removeEventListener("mouseup", _e), $.removeEventListener("touchmove", he), $.removeEventListener("touchend", _e);
  }
  $.addEventListener("mousemove", he), $.addEventListener("mouseup", _e), $.addEventListener("touchmove", he), $.addEventListener("touchend", _e);
}
function Pc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: v } = An(e), _ = s.elementFromPoint(h, v), b = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : d, E = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const m = $c(void 0, b), C = b.getAttribute("data-nodeid"), p = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!C || !m)
      return E;
    const $ = {
      source: f ? C : r,
      sourceHandle: f ? p : o,
      target: f ? r : C,
      targetHandle: f ? o : p
    };
    E.connection = $;
    const A = k && S && (n === dr.Strict ? f && m === "source" || !f && m === "target" : C !== r || p !== o);
    E.isValid = A && u($), E.toHandle = Ec(C, m, p, c, n, !1);
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
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = p[2] * Math.pow(2, k);
      t.scaleTo(S);
    };
    let _ = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (_ = [
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
      ], S = [k[0] - _[0], k[1] - _[1]];
      _ = k;
      const $ = r() * Math.max(p[2], Math.log(p[2])) * (h ? -1 : 1), H = {
        x: p[0] - S[0] * $,
        y: p[1] - S[1] * $
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
    let h = o === qn.Vertical ? 0 : c.deltaX * d, v = o === qn.Horizontal ? 0 : c.deltaY * d;
    !bi() && c.shiftKey && o !== qn.Vertical && (h = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = qi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
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
  const v = h.on("wheel.zoom"), _ = h.on("dblclick.zoom");
  d.wheelDelta(Tc);
  function b(I, z) {
    return h ? new Promise((P) => {
      d == null || d.transform(hs(h, z == null ? void 0 : z.duration, () => P(!0)), I);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: I, noPanClassName: z, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: x, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: L, preventScrolling: B, zoomOnPinch: X, zoomOnScroll: q, zoomOnDoubleClick: ue, zoomActivationKeyPressed: ee, lib: W, onTransformChange: re }) {
    M && !c.isZoomingOrPanning && m();
    const _e = x && !ee && !M ? lp({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: h,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: L,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : up({
      noWheelClassName: I,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", _e, { passive: !1 }), !M) {
      const Ie = cp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ie);
      const G = dp({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!P,
        onPanZoom: s,
        onTransformChange: re
      });
      d.on("zoom", G);
      const se = fp({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: x,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", se);
    }
    const le = gp({
      zoomActivationKeyPressed: ee,
      panOnDrag: N,
      zoomOnScroll: q,
      panOnScroll: x,
      zoomOnDoubleClick: ue,
      zoomOnPinch: X,
      userSelectionActive: M,
      noPanClassName: z,
      noWheelClassName: I,
      lib: W
    });
    d.filter(le), ue ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function C(I, z, P) {
    const M = gs(I), x = d == null ? void 0 : d.constrain()(M, z, P);
    return x && await b(x), new Promise((N) => N(x));
  }
  async function p(I, z) {
    const P = gs(I);
    return await b(P, z), new Promise((M) => M(P));
  }
  function k(I) {
    if (h) {
      const z = gs(I), P = h.property("__zoom");
      (P.k !== I.zoom || P.x !== I.x || P.y !== I.y) && (d == null || d.transform(h, z, null, { sync: !0 }));
    }
  }
  function S() {
    const I = h ? uc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function $(I, z) {
    return h ? new Promise((P) => {
      d == null || d.scaleTo(hs(h, z == null ? void 0 : z.duration, () => P(!0)), I);
    }) : Promise.resolve(!1);
  }
  function H(I, z) {
    return h ? new Promise((P) => {
      d == null || d.scaleBy(hs(h, z == null ? void 0 : z.duration, () => P(!0)), I);
    }) : Promise.resolve(!1);
  }
  function A(I) {
    d == null || d.scaleExtent(I);
  }
  function V(I) {
    d == null || d.translateExtent(I);
  }
  function D(I) {
    const z = !Mn(I) || I < 0 ? 0 : I;
    d == null || d.clickDistance(z);
  }
  return {
    update: E,
    destroy: m,
    setViewport: p,
    setViewportConstrained: C,
    getViewport: S,
    scaleTo: $,
    scaleBy: H,
    setScaleExtent: A,
    setTranslateExtent: V,
    syncViewport: k,
    setClickDistance: D
  };
}
var Dl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Dl || (Dl = {}));
var vp = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(ue, "$connectable", n), i = () => Q(_e, "$connectionRadius", n), s = () => Q(re, "$domNode", n), a = () => Q(he, "$nodeLookup", n), l = () => Q(W, "$connectionMode", n), u = () => Q(G, "$lib", n), c = () => Q(We, "$autoPanOnConnect", n), f = () => Q(Se, "$flowId", n), d = () => Q(Ie, "$isValidConnectionStore", n), h = () => Q(Me, "$onedgecreate", n), v = () => Q(ie, "$onConnectAction", n), _ = () => Q(ve, "$onConnectStartAction", n), b = () => Q($e, "$onConnectEndAction", n), E = () => Q(le, "$viewport", n), m = () => Q(at, "$connection", n), C = () => Q(Ue, "$edges", n), p = () => Q(Be, "$connectionLookup", n), k = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne(), H = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne(), D = /* @__PURE__ */ ne(), I = /* @__PURE__ */ ne();
  let z = w(t, "id", 12, void 0), P = w(t, "type", 12, "source"), M = w(t, "position", 28, () => Ce.Top), x = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), L = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), X = w(t, "class", 12, void 0);
  const q = lr("svelteflow__node_id"), ue = lr("svelteflow__node_connectable"), ee = Je(), {
    connectionMode: W,
    domNode: re,
    nodeLookup: he,
    connectionRadius: _e,
    viewport: le,
    isValidConnection: Ie,
    lib: G,
    addEdge: se,
    onedgecreate: Me,
    panBy: Oe,
    cancelConnection: Xe,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: Be,
    onconnect: ie,
    onconnectstart: ve,
    onconnectend: $e,
    flowId: Se,
    connection: at
  } = ee;
  function ut(Pe) {
    const nt = yc(Pe);
    (nt && Pe.button === 0 || !nt) && ip.onPointerDown(Pe, {
      handleId: g($),
      nodeId: q,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: N() ?? d(),
      updateConnection: te,
      cancelConnection: Xe,
      panBy: Oe,
      onConnect: (Le) => {
        var rt;
        const Ve = h() ? h()(Le) : Le;
        Ve && (se(Ve), (rt = v()) == null || rt(Le));
      },
      onConnectStart: (Le, Ve) => {
        var rt;
        (rt = _()) == null || rt(Le, {
          nodeId: Ve.nodeId,
          handleId: Ve.handleId,
          handleType: Ve.handleType
        });
      },
      onConnectEnd: (Le, Ve) => {
        var rt;
        (rt = b()) == null || rt(Le, Ve);
      },
      getTransform: () => [
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let J = /* @__PURE__ */ ne(null), Ye = /* @__PURE__ */ ne();
  ge(() => j(P()), () => {
    U(k, P() === "target");
  }), ge(
    () => (j(B()), o()),
    () => {
      U(S, B() !== void 0 ? B() : o());
    }
  ), ge(() => j(z()), () => {
    U($, z() || null);
  }), ge(
    () => (j(T()), j(L()), C(), p(), j(P()), j(z())),
    () => {
      (T() || L()) && (C(), U(Ye, p().get(`${q}-${P()}${z() ? `-${z()}` : ""}`)));
    }
  ), ge(
    () => (g(J), g(Ye), j(L()), j(T())),
    () => {
      if (g(J) && !x0(g(Ye), g(J))) {
        const Pe = g(Ye) ?? /* @__PURE__ */ new Map();
        xl(g(J), Pe, L()), xl(Pe, g(J), T());
      }
      U(J, g(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => m(), () => {
    U(H, !!m().fromHandle);
  }), ge(
    () => (m(), j(P()), g($)),
    () => {
      var Pe, nt, Le;
      U(A, ((Pe = m().fromHandle) == null ? void 0 : Pe.nodeId) === q && ((nt = m().fromHandle) == null ? void 0 : nt.type) === P() && ((Le = m().fromHandle) == null ? void 0 : Le.id) === g($));
    }
  ), ge(
    () => (m(), j(P()), g($)),
    () => {
      var Pe, nt, Le;
      U(V, ((Pe = m().toHandle) == null ? void 0 : Pe.nodeId) === q && ((nt = m().toHandle) == null ? void 0 : nt.type) === P() && ((Le = m().toHandle) == null ? void 0 : Le.id) === g($));
    }
  ), ge(
    () => (l(), m(), j(P()), g($)),
    () => {
      var Pe, nt, Le;
      U(D, l() === dr.Strict ? ((Pe = m().fromHandle) == null ? void 0 : Pe.type) !== P() : q !== ((nt = m().fromHandle) == null ? void 0 : nt.nodeId) || g($) !== ((Le = m().fromHandle) == null ? void 0 : Le.id));
    }
  ), ge(() => (g(V), m()), () => {
    U(I, g(V) && m().isValid);
  }), gt(), He();
  var ce = vp();
  me(ce, "data-nodeid", q);
  let tn;
  var nn = F(ce);
  pt(nn, t, "default", {}), Z(ce), ke(
    (Pe, nt) => {
      me(ce, "data-handleid", g($)), me(ce, "data-handlepos", M()), me(ce, "data-id", `${f() ?? ""}-${q ?? ""}-${z() || ""}-${P() ?? ""}`), tn = mt(ce, 1, Pe, null, tn, nt), dt(ce, x());
    },
    [
      () => dn(Nt([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        X()
      ])),
      () => ({
        valid: g(I),
        connectingto: g(V),
        connectingfrom: g(A),
        source: !g(k),
        target: g(k),
        connectablestart: g(S),
        connectableend: g(S),
        connectable: g(S),
        connectionindicator: g(S) && (!g(H) || g(D))
      })
    ],
    pe
  ), Ze("mousedown", ce, ut), Ze("touchstart", ce, ut), O(e, ce);
  var hn = fe({
    get id() {
      return z();
    },
    set id(Pe) {
      z(Pe), y();
    },
    get type() {
      return P();
    },
    set type(Pe) {
      P(Pe), y();
    },
    get position() {
      return M();
    },
    set position(Pe) {
      M(Pe), y();
    },
    get style() {
      return x();
    },
    set style(Pe) {
      x(Pe), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Pe) {
      N(Pe), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Pe) {
      T(Pe), y();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(Pe) {
      L(Pe), y();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Pe) {
      B(Pe), y();
    },
    get class() {
      return X();
    },
    set class(Pe) {
      X(Pe), y();
    }
  });
  return r(), hn;
}
ae(
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
  He();
  var s = pp(), a = we(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ pe(() => i() ?? Ce.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(f);
    }
  }), ke(() => {
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
  He(), Ne();
  var i = mp(), s = we(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), ke(() => {
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
  He(), Ne();
  var i = yp(), s = we(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), ke(() => {
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
function Ac(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(i, "$domNode", n), { domNode: i } = Je();
  He();
  var s = wp(), a = F(s);
  pt(a, t, "default", {}), Z(s), vt(s, (l, u) => $r == null ? void 0 : $r(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, s), fe(), r();
}
ae(Ac, {}, ["default"], [], !0);
function Dc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Je();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Lr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var _p = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Oc(e, t) {
  de(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Dc(), s = lr("svelteflow__edge_id");
  return He(), Ac(e, {
    children: (a, l) => {
      var u = _p();
      let c;
      var f = F(u);
      pt(f, t, "default", {}), Z(u), ke(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ze("keyup", u, () => {
      }), Ze("click", u, () => {
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
var xp = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__edge-interaction"></path>'), bp = /* @__PURE__ */ be('<path fill="none"></path><!><!>', 1);
function Oo(e, t) {
  de(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), h = f() === void 0 ? 20 : f();
  He();
  var v = bp(), _ = we(v), b = R(_);
  {
    var E = (p) => {
      var k = xp();
      me(k, "stroke-opacity", 0), me(k, "stroke-width", h), ke(() => me(k, "d", r())), O(p, k);
    };
    xe(b, (p) => {
      h && p(E);
    });
  }
  var m = R(b);
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
        children: (k, S) => {
          Ne();
          var $ = Re();
          ke(() => Zt($, o())), O(k, $);
        },
        $$slots: { default: !0 }
      });
    };
    xe(m, (p) => {
      o() && p(C);
    });
  }
  return ke(
    (p) => {
      me(_, "id", n()), me(_, "d", r()), mt(_, 0, p), me(_, "marker-start", l()), me(_, "marker-end", u()), dt(_, c());
    },
    [
      () => dn(Nt(["svelte-flow__edge-path", d()]))
    ],
    pe
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), j(d()), j(h()), j(_()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(wc({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Oo(e, {
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
      return _();
    },
    set targetX(m) {
      _(m), y();
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), j(d()), j(h()), j(_()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Oo(e, {
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
      return _();
    },
    set targetX(m) {
      _(m), y();
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return ge(
    () => (g(r), g(o), g(i), j(d()), j(h()), j(v()), j(_())),
    () => {
      ((b) => (U(r, b[0]), U(o, b[1]), U(i, b[2])))(zs({
        sourceX: d(),
        sourceY: h(),
        targetX: v(),
        targetY: _()
      }));
    }
  ), gt(), He(), Oo(e, {
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
      return _();
    },
    set targetY(b) {
      _(b), y();
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), j(d()), j(h()), j(_()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), gt(), He(), Oo(e, {
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
      return _();
    },
    set targetX(m) {
      _(m), y();
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
  const n = e.set, r = t.set, o = K(e), i = K(t);
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
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Ep = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, $p = (e, t, n, r = [0, 0], o = wi) => {
  const { subscribe: i, set: s, update: a } = ye([]);
  let l = e, u = {}, c = !0;
  const f = (_) => (xc(_, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = _, s(l), l), d = (_) => f(_(l)), h = (_) => {
    u = _;
  }, v = (_) => {
    c = _.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: h,
    setOptions: v
  };
}, Sp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ye([]);
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
    const v = Ao(a, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    h = wa(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: $p(e, a, l, f, d),
    nodeLookup: qt(a),
    parentLookup: qt(l),
    edgeLookup: qt(c),
    visibleNodes: qt([]),
    edges: Sp(t, u, c),
    visibleEdges: qt([]),
    connectionLookup: qt(u),
    height: ye(500),
    width: ye(500),
    minZoom: ye(0.5),
    maxZoom: ye(2),
    nodeOrigin: ye(f),
    nodeDragThreshold: ye(1),
    nodeExtent: ye(d),
    translateExtent: ye(wi),
    autoPanOnNodeDrag: ye(!0),
    autoPanOnConnect: ye(!0),
    fitViewOnInit: ye(!1),
    fitViewOnInitDone: ye(!1),
    fitViewOptions: ye(void 0),
    panZoom: ye(null),
    snapGrid: ye(null),
    dragging: ye(!1),
    selectionRect: ye(null),
    selectionKeyPressed: ye(!1),
    multiselectionKeyPressed: ye(!1),
    deleteKeyPressed: ye(!1),
    panActivationKeyPressed: ye(!1),
    zoomActivationKeyPressed: ye(!1),
    selectionRectMode: ye(null),
    selectionMode: ye(_i.Partial),
    nodeTypes: ye(Rc),
    edgeTypes: ye(Bc),
    viewport: ye(h),
    connectionMode: ye(dr.Strict),
    domNode: ye(null),
    connection: qt(Os),
    connectionLineType: ye(Er.Bezier),
    connectionRadius: ye(20),
    isValidConnection: ye(() => !0),
    nodesDraggable: ye(!0),
    nodesConnectable: ye(!0),
    elementsSelectable: ye(!0),
    selectNodesOnDrag: ye(!0),
    markers: qt([]),
    defaultMarkerColor: ye("#b1b1b7"),
    lib: qt("svelte"),
    onlyRenderVisibleElements: ye(!1),
    onerror: ye(S0),
    ondelete: ye(void 0),
    onedgecreate: ye(void 0),
    onconnect: ye(void 0),
    onconnectstart: ye(void 0),
    onconnectend: ye(void 0),
    onbeforedelete: ye(void 0),
    nodesInitialized: ye(!1),
    edgesInitialized: ye(!1),
    viewportInitialized: ye(!1),
    initialized: qt(!1)
  };
};
function Np(e) {
  const t = Kn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && A0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Kn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
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
  return Kn([
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
  function l(x) {
    a.nodeTypes.set({
      ...Rc,
      ...x
    });
  }
  function u(x) {
    a.edgeTypes.set({
      ...Bc,
      ...x
    });
  }
  function c(x) {
    const N = K(a.edges);
    a.edges.set(L0(x, N));
  }
  const f = (x, N = !1) => {
    var L;
    const T = K(a.nodeLookup);
    for (const [B, X] of x) {
      const q = (L = T.get(B)) == null ? void 0 : L.internals.userNode;
      q && (q.position = X.position, q.dragging = N);
    }
    a.nodes.update((B) => B);
  };
  function d(x) {
    var X, q, ue;
    const N = K(a.nodeLookup), T = K(a.parentLookup), { changes: L, updatedInternals: B } = G0(x, N, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (B) {
      if (X0(N, T, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const ee = K(a.fitViewOptions), W = v({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const ee of L) {
        const W = (X = N.get(ee.id)) == null ? void 0 : X.internals.userNode;
        if (W)
          switch (ee.type) {
            case "dimensions": {
              const re = { ...W.measured, ...ee.dimensions };
              ee.setAttributes && (W.width = ((q = ee.dimensions) == null ? void 0 : q.width) ?? W.width, W.height = ((ue = ee.dimensions) == null ? void 0 : ue.height) ?? W.height), W.measured = re;
              break;
            }
            case "position":
              W.position = ee.position ?? W.position;
              break;
          }
      }
      a.nodes.update((ee) => ee), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(x) {
    const N = K(a.panZoom), T = K(a.domNode);
    if (!N || !T)
      return Promise.resolve(!1);
    const { width: L, height: B } = _a(T), X = bl(K(a.nodeLookup), x);
    return Cl({
      nodes: X,
      width: L,
      height: B,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: N
    }, x);
  }
  function v(x) {
    const N = K(a.panZoom);
    if (!N)
      return !1;
    const T = bl(K(a.nodeLookup), x);
    return Cl({
      nodes: T,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: N
    }, x), T.size > 0;
  }
  function _(x, N) {
    const T = K(a.panZoom);
    return T ? T.scaleBy(x, N) : Promise.resolve(!1);
  }
  function b(x) {
    return _(1.2, x);
  }
  function E(x) {
    return _(1 / 1.2, x);
  }
  function m(x) {
    const N = K(a.panZoom);
    N && (N.setScaleExtent([x, K(a.maxZoom)]), a.minZoom.set(x));
  }
  function C(x) {
    const N = K(a.panZoom);
    N && (N.setScaleExtent([K(a.minZoom), x]), a.maxZoom.set(x));
  }
  function p(x) {
    const N = K(a.panZoom);
    N && (N.setTranslateExtent(x), a.translateExtent.set(x));
  }
  function k(x) {
    let N = !1;
    return x.forEach((T) => {
      T.selected && (T.selected = !1, N = !0);
    }), N;
  }
  function S(x) {
    var N;
    (N = K(a.panZoom)) == null || N.setClickDistance(x);
  }
  function $(x) {
    k((x == null ? void 0 : x.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), k((x == null ? void 0 : x.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (x) => {
    var N;
    if (x) {
      const T = K(a.nodes), L = K(a.edges), B = T.filter((ee) => ee.selected), X = L.filter((ee) => ee.selected), { nodes: q, edges: ue } = await fc({
        nodesToRemove: B,
        edgesToRemove: X,
        nodes: T,
        edges: L,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || ue.length) && (a.nodes.update((ee) => ee.filter((W) => !q.some((re) => re.id === W.id))), a.edges.update((ee) => ee.filter((W) => !ue.some((re) => re.id === W.id))), (N = K(a.ondelete)) == null || N({
        nodes: q,
        edges: ue
      }));
    }
  });
  function H(x) {
    const N = K(a.multiselectionKeyPressed);
    a.nodes.update((T) => T.map((L) => {
      const B = x.includes(L.id), X = N && L.selected || B;
      return L.selected = X, L;
    })), N || a.edges.update((T) => T.map((L) => (L.selected = !1, L)));
  }
  function A(x) {
    const N = K(a.multiselectionKeyPressed);
    a.edges.update((T) => T.map((L) => {
      const B = x.includes(L.id), X = N && L.selected || B;
      return L.selected = X, L;
    })), N || a.nodes.update((T) => T.map((L) => (L.selected = !1, L)));
  }
  function V(x) {
    var T;
    const N = (T = K(a.nodes)) == null ? void 0 : T.find((L) => L.id === x);
    if (!N) {
      console.warn("012", Lr.error012(x));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), N.selected ? N.selected && K(a.multiselectionKeyPressed) && $({ nodes: [N], edges: [] }) : H([x]);
  }
  function D(x) {
    const N = K(a.viewport);
    return U0({
      delta: x,
      panZoom: K(a.panZoom),
      transform: [N.x, N.y, N.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const I = ye(Os), z = (x) => {
    I.set({ ...x });
  };
  function P() {
    I.set(Os);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), $(), P();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Np(a),
    visibleNodes: Tp(a),
    connection: Kn([I, a.viewport], ([x, N]) => x.inProgress ? {
      ...x,
      to: Do(x.to, [N.x, N.y, N.zoom])
    } : { ...x }),
    markers: Kn([a.edges, a.defaultMarkerColor, a.flowId], ([x, N, T]) => Y0(x, { defaultColor: N, id: T })),
    initialized: (() => {
      let x = !1;
      const N = K(a.nodes).length, T = K(a.edges).length;
      return Kn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([L, B, X]) => x || (N === 0 ? x = X : T === 0 ? x = X && L : x = X && L && B, x));
    })(),
    // actions
    syncNodeStores: (x) => Cp(a.nodes, x),
    syncEdgeStores: (x) => kp(a.edges, x),
    syncViewport: (x) => Ep(a.panZoom, a.viewport, x),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: b,
    zoomOut: E,
    fitView: (x) => h(x),
    setMinZoom: m,
    setMaxZoom: C,
    setTranslateExtent: p,
    setPaneClickDistance: S,
    unselectNodesAndEdges: $,
    addSelectedNodes: H,
    addSelectedEdges: A,
    handleNodeSelection: V,
    panBy: D,
    updateConnection: z,
    cancelConnection: P,
    reset: M
  };
}
function Je() {
  const e = lr(Gi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Mp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Yc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Ar(Gi, {
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
  const [n, r] = it(), o = () => Q(T, "$panActivationKeyPressed", n), i = () => Q(z, "$minZoom", n), s = () => Q(P, "$maxZoom", n), a = () => Q(L, "$zoomActivationKeyPressed", n), l = () => Q(I, "$selectionRect", n), u = () => Q(x, "$translateExtent", n), c = () => Q(N, "$lib", n), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne();
  let v = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), S = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), H = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: V,
    panZoom: D,
    selectionRect: I,
    minZoom: z,
    maxZoom: P,
    dragging: M,
    translateExtent: x,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: L,
    viewportInitialized: B
  } = Je(), X = (W) => V.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Wt(() => {
    fi(B, !0);
  }), ge(() => j(v()), () => {
    U(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), j($())),
    () => {
      U(d, o() || $());
    }
  ), ge(
    () => (o(), j(H())),
    () => {
      U(h, o() || H());
    }
  ), gt(), He();
  var q = Hp(), ue = F(q);
  pt(ue, t, "default", {}), Z(q), vt(q, (W, re) => vs == null ? void 0 : vs(W, re), () => ({
    viewport: V,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(f),
    dragging: M,
    panZoom: D,
    onPanZoomStart: _(),
    onPanZoom: b(),
    onPanZoomEnd: E(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: S(),
    panOnScroll: g(h),
    panOnDrag: g(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || qn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: X
  })), O(e, q);
  var ee = fe({
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get onMoveStart() {
      return _();
    },
    set onMoveStart(W) {
      _(W), y();
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
      return S();
    },
    set zoomOnPinch(W) {
      S(W), y();
    },
    get panOnDrag() {
      return $();
    },
    set panOnDrag(W) {
      $(W), y();
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
  return r(), ee;
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
var Ap = /* @__PURE__ */ oe("<div><!></div>");
const Dp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Fc(e, t) {
  de(t, !1), et(e, Dp);
  const [n, r] = it(), o = () => Q(P, "$panActivationKeyPressed", n), i = () => Q(I, "$selectionKeyPressed", n), s = () => Q(V, "$selectionRect", n), a = () => Q(A, "$elementsSelectable", n), l = () => Q(D, "$selectionRectMode", n), u = () => Q(S, "$edges", n), c = () => Q(k, "$nodeLookup", n), f = () => Q($, "$viewport", n), d = () => Q(z, "$selectionMode", n), h = () => Q(H, "$dragging", n), v = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne();
  let E = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const C = Ri(), {
    nodes: p,
    nodeLookup: k,
    edges: S,
    viewport: $,
    dragging: H,
    elementsSelectable: A,
    selectionRect: V,
    selectionRectMode: D,
    selectionKeyPressed: I,
    selectionMode: z,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: M
  } = Je();
  let x = /* @__PURE__ */ ne(), N = null, T = [], L = !1;
  function B(G) {
    if (L) {
      L = !1;
      return;
    }
    C("paneclick", { event: G }), M(), D.set(null);
  }
  function X(G) {
    var Oe, Xe;
    if (N = g(x).getBoundingClientRect(), !A || !g(_) || G.button !== 0 || G.target !== g(x) || !N)
      return;
    (Xe = (Oe = G.target) == null ? void 0 : Oe.setPointerCapture) == null || Xe.call(Oe, G.pointerId);
    const { x: se, y: Me } = An(G, N);
    M(), V.set({
      width: 0,
      height: 0,
      startX: se,
      startY: Me,
      x: se,
      y: Me
    });
  }
  function q(G) {
    if (!g(_) || !N || !s())
      return;
    L = !0;
    const se = An(G, N), Me = s().startX ?? 0, Oe = s().startY ?? 0, Xe = {
      ...s(),
      x: se.x < Me ? se.x : Me,
      y: se.y < Oe ? se.y : Oe,
      width: Math.abs(se.x - Me),
      height: Math.abs(se.y - Oe)
    }, te = T.map((ie) => ie.id), We = Ls(T, u()).map((ie) => ie.id);
    T = dc(
      c(),
      Xe,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === _i.Partial,
      !0
    );
    const Ue = Ls(T, u()).map((ie) => ie.id), Be = T.map((ie) => ie.id);
    (te.length !== Be.length || Be.some((ie) => !te.includes(ie))) && p.update((ie) => ie.map(Il(Be))), (We.length !== Ue.length || Ue.some((ie) => !We.includes(ie))) && S.update((ie) => ie.map(Il(Ue))), D.set("user"), V.set(Xe);
  }
  function ue(G) {
    var se, Me;
    G.button === 0 && ((Me = (se = G.target) == null ? void 0 : se.releasePointerCapture) == null || Me.call(se, G.pointerId), !g(_) && l() === "user" && G.target === g(x) && (B == null || B(G)), V.set(null), T.length > 0 && fi(D, "nodes"), i() && (L = !1));
  }
  const ee = (G) => {
    var se;
    if (Array.isArray(g(v)) && ((se = g(v)) != null && se.includes(2))) {
      G.preventDefault();
      return;
    }
    C("panecontextmenu", { event: G });
  };
  ge(
    () => (o(), j(E())),
    () => {
      U(v, o() || E());
    }
  ), ge(
    () => (i(), s(), j(m()), g(v)),
    () => {
      U(_, i() || s() || m() && g(v) !== !0);
    }
  ), ge(
    () => (a(), g(_), l()),
    () => {
      U(b, a() && (g(_) || l() === "user"));
    }
  ), gt(), He();
  var W = Ap(), re = /* @__PURE__ */ Te(() => g(b) ? void 0 : Ll(B, g(x))), he = /* @__PURE__ */ Te(() => Ll(ee, g(x)));
  let _e;
  var le = F(W);
  pt(le, t, "default", {}), Z(W), bn(W, (G) => U(x, G), () => g(x)), ke(
    (G) => _e = mt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, G),
    [
      () => ({
        draggable: E() === !0 || Array.isArray(E()) && E().includes(0),
        dragging: h(),
        selection: g(_)
      })
    ],
    pe
  ), Ze("click", W, function(...G) {
    var se;
    (se = g(re)) == null || se.apply(this, G);
  }), Ze("pointerdown", W, function(...G) {
    var se;
    (se = g(b) ? X : void 0) == null || se.apply(this, G);
  }), Ze("pointermove", W, function(...G) {
    var se;
    (se = g(b) ? q : void 0) == null || se.apply(this, G);
  }), Ze("pointerup", W, function(...G) {
    var se;
    (se = g(b) ? ue : void 0) == null || se.apply(this, G);
  }), Ze("contextmenu", W, function(...G) {
    var se;
    (se = g(he)) == null || se.apply(this, G);
  }), O(e, W);
  var Ie = fe({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(G) {
      E(G), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(G) {
      m(G), y();
    }
  });
  return r(), Ie;
}
ae(Fc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Op = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Lp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Xc(e, t) {
  de(t, !1), et(e, Lp);
  const [n, r] = it(), o = () => Q(i, "$viewport", n), { viewport: i } = Je();
  He();
  var s = Op(), a = F(s);
  pt(a, t, "default", {}), Z(s), ke(() => dt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, s), fe(), r();
}
ae(Xc, {}, ["default"], [], !0);
function Sr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Q0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = K(n.snapGrid), c = K(n.viewport);
      return {
        nodes: K(n.nodes),
        nodeLookup: K(n.nodeLookup),
        edges: K(n.edges),
        nodeExtent: K(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: K(n.nodeOrigin),
        multiSelectionActive: K(n.multiselectionKeyPressed),
        domNode: K(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: K(n.autoPanOnNodeDrag),
        nodesDraggable: K(n.nodesDraggable),
        selectNodesOnDrag: K(n.selectNodesOnDrag),
        nodeDragThreshold: K(n.nodeDragThreshold),
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
  const [n, r] = it(), o = () => Q(he, "$nodeTypes", n), i = () => Q(se, "$elementsSelectable", n), s = () => Q(Me, "$nodesDraggable", n), a = () => Q(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let d = w(t, "node", 13), h = w(t, "id", 13), v = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), S = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), H = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), V = w(t, "positionX", 13), D = w(t, "positionY", 13), I = w(t, "sourcePosition", 13, void 0), z = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), x = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), L = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), X = w(t, "dragHandle", 13, void 0), q = w(t, "initialized", 13, !1), ue = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const re = Je(), {
    nodeTypes: he,
    nodeDragThreshold: _e,
    selectNodesOnDrag: le,
    handleNodeSelection: Ie,
    updateNodeInternals: G,
    elementsSelectable: se,
    nodesDraggable: Me
  } = re;
  let Oe = /* @__PURE__ */ ne(void 0, !0), Xe = /* @__PURE__ */ ne(null, !0);
  const te = Ri(), We = ye(m());
  let Ue = /* @__PURE__ */ ne(void 0, !0), Be = /* @__PURE__ */ ne(void 0, !0), ie = /* @__PURE__ */ ne(void 0, !0);
  Ar("svelteflow__node_id", h()), Ar("svelteflow__node_connectable", We), ua(() => {
    var J;
    g(Xe) && ((J = S()) == null || J.unobserve(g(Xe)));
  });
  function ve(J) {
    E() && (!K(le) || !b() || K(_e) > 0) && Ie(h()), te("nodeclick", { node: d().internals.userNode, event: J });
  }
  ge(() => j(H()), () => {
    U(l, H() || "default");
  }), ge(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), ge(
    () => (o(), g(l), ki),
    () => {
      U(c, o()[g(l)] || ki);
    }
  ), ge(
    () => (g(u), j(H())),
    () => {
      g(u) || console.warn("003", Lr.error003(H()));
    }
  ), ge(
    () => (j(L()), j(B()), j(N()), j(T()), j(M()), j(x())),
    () => {
      U(f, Ip({
        width: L(),
        height: B(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: M(),
        measuredHeight: x()
      }));
    }
  ), ge(() => j(m()), () => {
    We.set(!!m());
  }), ge(
    () => (g(Ue), g(l), g(Be), j(I()), g(ie), j(z()), j(h()), g(Oe)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(Be) && I() !== g(Be) || g(ie) && z() !== g(ie)) && requestAnimationFrame(() => G(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(Oe),
            force: !0
          }
        ]
      ]))), U(Ue, g(l)), U(Be, I()), U(ie, z());
    }
  ), ge(
    () => (j(S()), g(Oe), g(Xe), j(q())),
    () => {
      S() && (g(Oe) !== g(Xe) || !q()) && (g(Xe) && S().unobserve(g(Xe)), g(Oe) && S().observe(g(Oe)), U(Xe, g(Oe)));
    }
  ), gt(), He(!0);
  var $e = tt(), Se = we($e);
  {
    var at = (J) => {
      var Ye = zp();
      let ce, tn;
      var nn = F(Ye);
      const hn = /* @__PURE__ */ pe(() => _() ?? !1), Pe = /* @__PURE__ */ pe(() => E() ?? i() ?? !0), nt = /* @__PURE__ */ pe(() => C() ?? !0), Le = /* @__PURE__ */ pe(() => b() ?? s() ?? !0);
      Nu(nn, () => g(c), (Ve, rt) => {
        rt(Ve, {
          get data() {
            return v();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(hn);
          },
          get selectable() {
            return g(Pe);
          },
          get deletable() {
            return g(nt);
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return z();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Le);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return ue();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return V();
          },
          get positionAbsoluteY() {
            return D();
          },
          get width() {
            return L();
          },
          get height() {
            return B();
          }
        });
      }), Z(Ye), vt(Ye, (Ve, rt) => Sr == null ? void 0 : Sr(Ve, rt), () => ({
        nodeId: h(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: Ie,
        onDrag: (Ve, rt, rn, Kt) => {
          te("nodedrag", { event: Ve, targetNode: rn, nodes: Kt });
        },
        onDragStart: (Ve, rt, rn, Kt) => {
          te("nodedragstart", { event: Ve, targetNode: rn, nodes: Kt });
        },
        onDragStop: (Ve, rt, rn, Kt) => {
          te("nodedragstop", { event: Ve, targetNode: rn, nodes: Kt });
        },
        store: re
      })), bn(Ye, (Ve) => U(Oe, Ve), () => g(Oe)), zt(() => Ze("click", Ye, ve)), zt(() => Ze("mouseenter", Ye, (Ve) => te("nodemouseenter", { node: d(), event: Ve }))), zt(() => Ze("mouseleave", Ye, (Ve) => te("nodemouseleave", { node: d(), event: Ve }))), zt(() => Ze("mousemove", Ye, (Ve) => te("nodemousemove", { node: d(), event: Ve }))), zt(() => Ze("contextmenu", Ye, (Ve) => te("nodecontextmenu", { node: d(), event: Ve }))), ke(
        (Ve, rt) => {
          me(Ye, "data-id", h()), ce = mt(Ye, 1, Ve, null, ce, rt), tn = dt(Ye, `${$() ?? ""};${g(f).width ?? ""}${g(f).height ?? ""}`, tn, {
            "z-index": P(),
            transform: `translate(${V() ?? ""}px, ${D() ?? ""}px)`,
            visibility: q() ? "visible" : "hidden"
          });
        },
        [
          () => dn(Nt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: _(),
            draggable: b(),
            connectable: m(),
            selectable: E(),
            nopan: b(),
            parent: A()
          })
        ],
        pe
      ), O(J, Ye);
    };
    xe(Se, (J) => {
      p() || J(at);
    });
  }
  O(e, $e);
  var ut = fe({
    get node() {
      return d();
    },
    set node(J) {
      d(J), y();
    },
    get id() {
      return h();
    },
    set id(J) {
      h(J), y();
    },
    get data() {
      return v();
    },
    set data(J) {
      v(J), y();
    },
    get selected() {
      return _();
    },
    set selected(J) {
      _(J), y();
    },
    get draggable() {
      return b();
    },
    set draggable(J) {
      b(J), y();
    },
    get selectable() {
      return E();
    },
    set selectable(J) {
      E(J), y();
    },
    get connectable() {
      return m();
    },
    set connectable(J) {
      m(J), y();
    },
    get deletable() {
      return C();
    },
    set deletable(J) {
      C(J), y();
    },
    get hidden() {
      return p();
    },
    set hidden(J) {
      p(J), y();
    },
    get dragging() {
      return k();
    },
    set dragging(J) {
      k(J), y();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(J) {
      S(J), y();
    },
    get style() {
      return $();
    },
    set style(J) {
      $(J), y();
    },
    get type() {
      return H();
    },
    set type(J) {
      H(J), y();
    },
    get isParent() {
      return A();
    },
    set isParent(J) {
      A(J), y();
    },
    get positionX() {
      return V();
    },
    set positionX(J) {
      V(J), y();
    },
    get positionY() {
      return D();
    },
    set positionY(J) {
      D(J), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(J) {
      I(J), y();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(J) {
      z(J), y();
    },
    get zIndex() {
      return P();
    },
    set zIndex(J) {
      P(J), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(J) {
      M(J), y();
    },
    get measuredHeight() {
      return x();
    },
    set measuredHeight(J) {
      x(J), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(J) {
      N(J), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(J) {
      T(J), y();
    },
    get width() {
      return L();
    },
    set width(J) {
      L(J), y();
    },
    get height() {
      return B();
    },
    set height(J) {
      B(J), y();
    },
    get dragHandle() {
      return X();
    },
    set dragHandle(J) {
      X(J), y();
    },
    get initialized() {
      return q();
    },
    set initialized(J) {
      q(J), y();
    },
    get parentId() {
      return ue();
    },
    set parentId(J) {
      ue(J), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(J) {
      ee(J), y();
    },
    get class() {
      return W();
    },
    set class(J) {
      W(J), y();
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
  const [n, r] = it(), o = () => Q(c, "$visibleNodes", n), i = () => Q(f, "$nodesDraggable", n), s = () => Q(h, "$elementsSelectable", n), a = () => Q(d, "$nodesConnectable", n), l = () => Q(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: h,
    updateNodeInternals: v,
    parentLookup: _
  } = Je(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const p = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const S = k.target.getAttribute("data-id");
      p.set(S, { id: S, nodeElement: k.target, force: !0 });
    }), v(p);
  });
  ua(() => {
    b == null || b.disconnect();
  }), He();
  var E = Rp();
  Dt(E, 5, o, (C) => C.id, (C, p) => {
    const k = /* @__PURE__ */ pe(() => !!g(p).selected), S = /* @__PURE__ */ pe(() => !!g(p).hidden), $ = /* @__PURE__ */ pe(() => !!(g(p).draggable || i() && typeof g(p).draggable > "u")), H = /* @__PURE__ */ pe(() => !!(g(p).selectable || s() && typeof g(p).selectable > "u")), A = /* @__PURE__ */ pe(() => !!(g(p).connectable || a() && typeof g(p).connectable > "u")), V = /* @__PURE__ */ pe(() => g(p).deletable ?? !0), D = /* @__PURE__ */ pe(() => l().has(g(p).id)), I = /* @__PURE__ */ pe(() => g(p).type ?? "default"), z = /* @__PURE__ */ pe(() => g(p).internals.z ?? 0), P = /* @__PURE__ */ pe(() => mc(g(p)));
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
        return g(S);
      },
      get draggable() {
        return g($);
      },
      get selectable() {
        return g(H);
      },
      get connectable() {
        return g(A);
      },
      get deletable() {
        return g(V);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(D);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(I);
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
        return g(z);
      },
      get dragHandle() {
        return g(p).dragHandle;
      },
      get initialized() {
        return g(P);
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
          Ae.call(this, t, M);
        },
        nodemouseenter(M) {
          Ae.call(this, t, M);
        },
        nodemousemove(M) {
          Ae.call(this, t, M);
        },
        nodemouseleave(M) {
          Ae.call(this, t, M);
        },
        nodedrag(M) {
          Ae.call(this, t, M);
        },
        nodedragstart(M) {
          Ae.call(this, t, M);
        },
        nodedragstop(M) {
          Ae.call(this, t, M);
        },
        nodecontextmenu(M) {
          Ae.call(this, t, M);
        }
      }
    });
  }), Z(E), O(e, E);
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
var Yp = /* @__PURE__ */ be('<svg><g role="img"><!></g></svg>');
function qc(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(W, "$edgeTypes", n), i = () => Q(re, "$flowId", n), s = () => Q(he, "$elementsSelectable", n), a = () => Q(ee, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let h = w(t, "id", 13), v = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), b = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), S = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), H = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), V = w(t, "labelStyle", 13, void 0), D = w(t, "markerStart", 13, void 0), I = w(t, "markerEnd", 13, void 0), z = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), x = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), L = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), X = w(t, "ariaLabel", 13, void 0), q = w(t, "interactionWidth", 13, void 0), ue = w(t, "class", 13, "");
  Ar("svelteflow__edge_id", h());
  const {
    edgeLookup: ee,
    edgeTypes: W,
    flowId: re,
    elementsSelectable: he
  } = Je(), _e = Ri(), le = Dc();
  function Ie(te) {
    const We = a().get(h());
    We && (le(h()), _e("edgeclick", { event: te, edge: We }));
  }
  function G(te, We) {
    const Ue = a().get(h());
    Ue && _e(We, { event: te, edge: Ue });
  }
  ge(() => j(v()), () => {
    U(l, v() || "default");
  }), ge(
    () => (o(), g(l), Ei),
    () => {
      U(u, o()[g(l)] || Ei);
    }
  ), ge(
    () => (j(D()), i()),
    () => {
      U(c, D() ? `url('#${Rs(D(), i())}')` : void 0);
    }
  ), ge(
    () => (j(I()), i()),
    () => {
      U(f, I() ? `url('#${Rs(I(), i())}')` : void 0);
    }
  ), ge(
    () => (j(S()), s()),
    () => {
      U(d, S() ?? s());
    }
  ), gt(), He(!0);
  var se = tt(), Me = we(se);
  {
    var Oe = (te) => {
      var We = Yp();
      let Ue;
      var Be = F(We);
      let ie;
      var ve = F(Be);
      const $e = /* @__PURE__ */ pe(() => $() ?? !0);
      Nu(ve, () => g(u), (Se, at) => {
        at(Se, {
          get id() {
            return h();
          },
          get source() {
            return _();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return x();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return B();
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
            return V();
          },
          get data() {
            return E();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return q();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g($e);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return z();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(f);
          }
        });
      }), Z(Be), Z(We), ke(
        (Se, at) => {
          Ue = dt(We, "", Ue, { "z-index": C() }), ie = mt(Be, 0, Se, null, ie, at), me(Be, "data-id", h()), me(Be, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${_()} to ${b()}`);
        },
        [
          () => dn(Nt(["svelte-flow__edge", ue()])),
          () => ({
            animated: p(),
            selected: k(),
            selectable: g(d)
          })
        ],
        pe
      ), Ze("click", Be, Ie), Ze("contextmenu", Be, (Se) => {
        G(Se, "edgecontextmenu");
      }), Ze("mouseenter", Be, (Se) => {
        G(Se, "edgemouseenter");
      }), Ze("mouseleave", Be, (Se) => {
        G(Se, "edgemouseleave");
      }), O(te, We);
    };
    xe(Me, (te) => {
      H() || te(Oe);
    });
  }
  O(e, se);
  var Xe = fe({
    get id() {
      return h();
    },
    set id(te) {
      h(te), y();
    },
    get type() {
      return v();
    },
    set type(te) {
      v(te), y();
    },
    get source() {
      return _();
    },
    set source(te) {
      _(te), y();
    },
    get target() {
      return b();
    },
    set target(te) {
      b(te), y();
    },
    get data() {
      return E();
    },
    set data(te) {
      E(te), y();
    },
    get style() {
      return m();
    },
    set style(te) {
      m(te), y();
    },
    get zIndex() {
      return C();
    },
    set zIndex(te) {
      C(te), y();
    },
    get animated() {
      return p();
    },
    set animated(te) {
      p(te), y();
    },
    get selected() {
      return k();
    },
    set selected(te) {
      k(te), y();
    },
    get selectable() {
      return S();
    },
    set selectable(te) {
      S(te), y();
    },
    get deletable() {
      return $();
    },
    set deletable(te) {
      $(te), y();
    },
    get hidden() {
      return H();
    },
    set hidden(te) {
      H(te), y();
    },
    get label() {
      return A();
    },
    set label(te) {
      A(te), y();
    },
    get labelStyle() {
      return V();
    },
    set labelStyle(te) {
      V(te), y();
    },
    get markerStart() {
      return D();
    },
    set markerStart(te) {
      D(te), y();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(te) {
      I(te), y();
    },
    get sourceHandle() {
      return z();
    },
    set sourceHandle(te) {
      z(te), y();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(te) {
      P(te), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(te) {
      M(te), y();
    },
    get sourceY() {
      return x();
    },
    set sourceY(te) {
      x(te), y();
    },
    get targetX() {
      return N();
    },
    set targetX(te) {
      N(te), y();
    },
    get targetY() {
      return T();
    },
    set targetY(te) {
      T(te), y();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(te) {
      L(te), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(te) {
      B(te), y();
    },
    get ariaLabel() {
      return X();
    },
    set ariaLabel(te) {
      X(te), y();
    },
    get interactionWidth() {
      return q();
    },
    set interactionWidth(te) {
      q(te), y();
    },
    get class() {
      return ue();
    },
    set class(te) {
      ue(te), y();
    }
  });
  return r(), Xe;
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
  }), He(), fe({
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
var Zp = /* @__PURE__ */ be("<defs></defs>");
function Uc(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(i, "$markers", n), { markers: i } = Je();
  He();
  var s = Zp();
  Dt(s, 5, o, (a) => a.id, (a, l) => {
    jc(a, ct(() => g(l)));
  }), Z(s), O(e, s), fe(), r();
}
ae(Uc, {}, [], [], !0);
var Fp = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Xp = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Wp = /* @__PURE__ */ be('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  de(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  He();
  var c = Wp(), f = F(c);
  {
    var d = (v) => {
      var _ = Fp();
      ke(() => {
        me(_, "stroke", l()), me(_, "stroke-width", u());
      }), O(v, _);
    }, h = (v, _) => {
      {
        var b = (E) => {
          var m = Xp();
          ke(() => {
            me(m, "stroke", l()), me(m, "stroke-width", u()), me(m, "fill", l());
          }), O(E, m);
        };
        xe(
          v,
          (E) => {
            r() === bo.ArrowClosed && E(b);
          },
          _
        );
      }
    };
    xe(f, (v) => {
      r() === bo.Arrow ? v(d) : v(h, !1);
    });
  }
  return Z(c), ke(() => {
    me(c, "id", n()), me(c, "markerWidth", `${o()}`), me(c, "markerHeight", `${i()}`), me(c, "markerUnits", s()), me(c, "orient", a());
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
  const [n, r] = it(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Je();
  Wt(() => {
    s() && u(s());
  }), He();
  var f = Kp(), d = F(f), h = F(d);
  Uc(h, {}), Z(d);
  var v = R(d, 2);
  Dt(v, 1, o, (m) => m.id, (m, C) => {
    const p = /* @__PURE__ */ pe(() => g(C).selectable ?? i()), k = /* @__PURE__ */ pe(() => g(C).type || "default");
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
        edgeclick(S) {
          Ae.call(this, t, S);
        },
        edgecontextmenu(S) {
          Ae.call(this, t, S);
        },
        edgemouseenter(S) {
          Ae.call(this, t, S);
        },
        edgemouseleave(S) {
          Ae.call(this, t, S);
        }
      }
    });
  });
  var _ = R(v, 2);
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
    xe(_, (m) => {
      o().length > 0 && m(b);
    });
  }
  Z(f), O(e, f);
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
  var a = tt(), l = we(a);
  {
    var u = (c) => {
      var f = qp();
      let d;
      ke(() => d = dt(f, "", d, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), O(c, f);
    };
    xe(l, (c) => {
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
  const [n, r] = it(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Je();
  He();
  const l = /* @__PURE__ */ pe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), f = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), d = /* @__PURE__ */ pe(() => {
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
  const [n, r] = it(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = Je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Ri();
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
      o() === "nodes" && (U(d, Ao(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), He();
  var _ = tt(), b = we(_);
  {
    var E = (m) => {
      var C = Up(), p = F(C);
      ka(p, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), vt(C, (k, S) => Sr == null ? void 0 : Sr(k, S), () => ({
        disabled: !1,
        store: a,
        onDrag: (k, S, $, H) => {
          f("nodedrag", { event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, S, $, H) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, S, $, H) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: H });
        }
      })), zt(() => Ze("contextmenu", C, h)), zt(() => Ze("click", C, v)), zt(() => Ze("keyup", C, () => {
      })), ke(() => dt(C, `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), O(m, C);
    };
    xe(b, (m) => {
      o() === "nodes" && g(d) && Mn(g(d).x) && Mn(g(d).y) && m(E);
    });
  }
  O(e, _), fe(), r();
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
      }, { modifier: f, key: d, callback: h, preventDefault: v, enabled: _ } = c;
      if (_) {
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
  } = Je();
  function h(m) {
    return m !== null && typeof m == "object";
  }
  function v(m) {
    return h(m) ? m.modifier || [] : [];
  }
  function _(m) {
    return m == null ? "" : h(m) ? m.key : m;
  }
  function b(m, C) {
    return (Array.isArray(m) ? m : [m]).map((k) => {
      const S = _(k);
      return {
        key: S,
        modifier: v(k),
        enabled: S !== null,
        callback: C
      };
    });
  }
  function E() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return He(), Ze("blur", Ht, E), Ze("contextmenu", Ht, E), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !M0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
    trigger: b(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Ht, (m, C) => Ke == null ? void 0 : Ke(m, C), () => ({
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
var Jp = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__connection-path"></path>'), Qp = /* @__PURE__ */ be('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function nd(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(h, "$connection", n), i = () => Q(v, "$connectionLineType", n), s = () => Q(f, "$width", n), a = () => Q(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: h,
    connectionLineType: v
  } = Je();
  let _ = /* @__PURE__ */ ne(null);
  ge(
    () => (o(), j(c()), i(), g(_), zs),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: k, fromPosition: S, toPosition: $ } = o(), H = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: S,
          targetX: k.x,
          targetY: k.y,
          targetPosition: $
        };
        switch (i()) {
          case Er.Bezier:
            ((A) => U(_, A[0]))(wc(H));
            break;
          case Er.Step:
            ((A) => U(_, A[0]))(Ci({ ...H, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((A) => U(_, A[0]))(Ci(H));
            break;
          default:
            ((A) => U(_, A[0]))(zs(H));
        }
      }
    }
  ), gt(), He();
  var b = tt(), E = we(b);
  {
    var m = (p) => {
      var k = Qp(), S = F(k), $ = F(S);
      pt($, t, "connectionLine", {});
      var H = R($);
      {
        var A = (V) => {
          var D = Jp();
          ke(() => {
            me(D, "d", g(_)), dt(D, u());
          }), O(V, D);
        };
        xe(H, (V) => {
          c() || V(A);
        });
      }
      Z(S), Z(k), ke(
        (V) => {
          me(k, "width", s()), me(k, "height", a()), dt(k, l()), mt(S, 0, V);
        },
        [
          () => dn(Nt([
            "svelte-flow__connection",
            b0(o().isValid)
          ]))
        ],
        pe
      ), O(p, k);
    };
    xe(E, (p) => {
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
  const [o, i] = it(), s = () => Q(f, "$selectionRectMode", o), a = /* @__PURE__ */ ne();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Je();
  ge(() => j(l()), () => {
    U(a, `${l()}`.split("-"));
  }), gt(), He();
  var d = e2();
  let h;
  var v = F(d);
  pt(v, t, "default", {}), Z(d), ke(
    (b) => h = ln(d, h, {
      class: b,
      style: u(),
      ...r,
      [or]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => Nt([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    pe
  ), O(e, d);
  var _ = fe({
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
  return i(), _;
}
ae(Lo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var t2 = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function rd(e, t) {
  de(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  He();
  var o = tt(), i = we(o);
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
    xe(i, (a) => {
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
  const [i, s] = it(), a = () => Q(C(), "$viewport", i), l = () => Q(es, "$initialized", i), u = () => Q(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), h = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), S = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), H = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), V = w(t, "zoomActivationKey", 12, void 0), D = w(t, "nodesDraggable", 12, void 0), I = w(t, "nodesConnectable", 12, void 0), z = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), x = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), L = w(t, "connectionMode", 28, () => dr.Strict), B = w(t, "connectionLineStyle", 12, ""), X = w(t, "connectionLineContainerStyle", 12, ""), q = w(t, "onMoveStart", 12, void 0), ue = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), re = w(t, "translateExtent", 12, void 0), he = w(t, "nodeExtent", 12, void 0), _e = w(t, "onlyRenderVisibleElements", 12, void 0), le = w(t, "panOnScrollMode", 28, () => qn.Free), Ie = w(t, "preventScrolling", 12, !0), G = w(t, "zoomOnScroll", 12, !0), se = w(t, "zoomOnDoubleClick", 12, !0), Me = w(t, "zoomOnPinch", 12, !0), Oe = w(t, "panOnScroll", 12, !1), Xe = w(t, "panOnDrag", 12, !0), te = w(t, "selectionOnDrag", 12, void 0), We = w(t, "autoPanOnConnect", 12, !0), Ue = w(t, "autoPanOnNodeDrag", 12, !0), Be = w(t, "onerror", 12, void 0), ie = w(t, "ondelete", 12, void 0), ve = w(t, "onedgecreate", 12, void 0), $e = w(t, "attributionPosition", 12, void 0), Se = w(t, "proOptions", 12, void 0), at = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), Ye = w(t, "colorMode", 12, "light"), ce = w(t, "onconnect", 12, void 0), tn = w(t, "onconnectstart", 12, void 0), nn = w(t, "onconnectend", 12, void 0), hn = w(t, "onbeforedelete", 12, void 0), Pe = w(t, "oninit", 12, void 0), nt = w(t, "nodeOrigin", 12, void 0), Le = w(t, "paneClickDistance", 12, 0), Ve = w(t, "nodeClickDistance", 12, 0), rt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = w(t, "style", 12, void 0), Kt = w(t, "class", 12, void 0), Gr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), Tt = /* @__PURE__ */ ne();
  const yr = a() || m(), ot = a1(Gi) ? Je() : Mp({
    nodes: K(d()),
    edges: K(h()),
    width: ut(),
    height: J(),
    fitView: v(),
    nodeOrigin: nt(),
    nodeExtent: he()
  });
  Wt(() => (ot.width.set(g(wt)), ot.height.set(g(Tt)), ot.domNode.set(g(Gr)), ot.syncNodeStores(d()), ot.syncEdgeStores(h()), ot.syncViewport(C()), v() !== void 0 && ot.fitViewOnInit.set(v()), _() && ot.fitViewOptions.set(_()), zl(ot, {
    nodeTypes: p(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: E(),
    translateExtent: re(),
    paneClickDistance: Le()
  }), () => {
    ot.reset();
  }));
  const { initialized: es } = ot;
  let Ur = /* @__PURE__ */ ne(!1);
  ge(
    () => (g(wt), g(Tt)),
    () => {
      g(wt) !== void 0 && g(Tt) !== void 0 && (ot.width.set(g(wt)), ot.height.set(g(Tt)));
    }
  ), ge(
    () => (g(Ur), l(), j(Pe())),
    () => {
      var Y;
      !g(Ur) && l() && ((Y = Pe()) == null || Y(), U(Ur, !0));
    }
  ), ge(
    () => (j(f()), j(T()), j(N()), j($()), j(M()), j(rt()), j(D()), j(I()), j(P()), j(_e()), j(W()), j(We()), j(Ue()), j(Be()), j(ie()), j(ve()), j(L()), j(z()), j(ce()), j(tn()), j(nn()), j(hn()), j(nt()), Rl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: $(),
        snapGrid: M(),
        defaultMarkerColor: rt(),
        nodesDraggable: D(),
        nodesConnectable: I(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: _e(),
        isValidConnection: W(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: Be(),
        ondelete: ie(),
        onedgecreate: ve(),
        connectionMode: L(),
        nodeDragThreshold: z(),
        onconnect: ce(),
        onconnectstart: tn(),
        onconnectend: nn(),
        onbeforedelete: hn(),
        nodeOrigin: nt()
      };
      Rl(ot, Y);
    }
  ), ge(
    () => (j(p()), j(k()), j(b()), j(E()), j(re()), j(Le())),
    () => {
      zl(ot, {
        nodeTypes: p(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: E(),
        translateExtent: re(),
        paneClickDistance: Le()
      });
    }
  ), ge(
    () => j(Ye()),
    () => {
      O1(U(c, o2(Ye())), "$colorModeClass", i);
    }
  ), gt(), He();
  var Lt = a2();
  let Yo;
  var Zo = F(Lt);
  td(Zo, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return x();
    },
    get panActivationKey() {
      return H();
    },
    get multiSelectionKey() {
      return A();
    },
    get zoomActivationKey() {
      return V();
    }
  });
  var Fo = R(Zo, 2);
  const ts = /* @__PURE__ */ pe(() => le() === void 0 ? qn.Free : le()), Jd = /* @__PURE__ */ pe(() => Ie() === void 0 ? !0 : Ie()), Qd = /* @__PURE__ */ pe(() => G() === void 0 ? !0 : G()), ef = /* @__PURE__ */ pe(() => se() === void 0 ? !0 : se()), tf = /* @__PURE__ */ pe(() => Me() === void 0 ? !0 : Me()), nf = /* @__PURE__ */ pe(() => Oe() === void 0 ? !1 : Oe()), rf = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe()), of = /* @__PURE__ */ pe(() => Le() === void 0 ? 0 : Le());
  Zc(Fo, {
    initialViewport: yr,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return ue();
    },
    get onMoveEnd() {
      return ee();
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
    children: (Y, $w) => {
      const lf = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe());
      Fc(Y, {
        get panOnDrag() {
          return g(lf);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(jr) {
            Ae.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Ae.call(this, t, jr);
          }
        },
        children: (jr, Sw) => {
          var Ma = s2(), Ha = we(Ma);
          Xc(Ha, {
            children: (cf, Pw) => {
              var Va = i2(), Aa = we(Va);
              Jc(Aa, {
                get defaultEdgeOptions() {
                  return at();
                },
                $$events: {
                  edgeclick(ze) {
                    Ae.call(this, t, ze);
                  },
                  edgecontextmenu(ze) {
                    Ae.call(this, t, ze);
                  },
                  edgemouseenter(ze) {
                    Ae.call(this, t, ze);
                  },
                  edgemouseleave(ze) {
                    Ae.call(this, t, ze);
                  }
                }
              });
              var Da = R(Aa, 2);
              nd(Da, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (ze, Nw) => {
                    var La = tt(), ff = we(La);
                    pt(ff, t, "connectionLine", {}), O(ze, La);
                  }
                }
              });
              var Oa = R(Da, 6);
              Kc(Oa, {
                get nodeClickDistance() {
                  return Ve();
                },
                $$events: {
                  nodeclick(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodemouseenter(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodemousemove(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodemouseleave(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodecontextmenu(ze) {
                    Ae.call(this, t, ze);
                  }
                }
              });
              var df = R(Oa, 2);
              ed(df, {
                $$events: {
                  selectionclick(ze) {
                    Ae.call(this, t, ze);
                  },
                  selectioncontextmenu(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Ae.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Ae.call(this, t, ze);
                  }
                }
              }), O(cf, Va);
            },
            $$slots: { default: !0 }
          });
          var uf = R(Ha, 2);
          Qc(uf, {}), O(jr, Ma);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ta = R(Fo, 2);
  rd(Ta, {
    get proOptions() {
      return Se();
    },
    get position() {
      return $e();
    }
  });
  var sf = R(Ta, 2);
  pt(sf, t, "default", {}), Z(Lt), bn(Lt, (Y) => U(Gr, Y), () => g(Gr)), ke(
    (Y) => Yo = ln(
      Lt,
      Yo,
      {
        style: rn(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Nt([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    pe
  ), Ja(Lt, "clientWidth", (Y) => U(wt, Y)), Ja(Lt, "clientHeight", (Y) => U(Tt, Y)), Ze("dragover", Lt, function(Y) {
    Ae.call(this, t, Y);
  }), Ze("drop", Lt, function(Y) {
    Ae.call(this, t, Y);
  }), O(e, Lt);
  var af = fe({
    get id() {
      return f();
    },
    set id(Y) {
      f(Y), y();
    },
    get nodes() {
      return d();
    },
    set nodes(Y) {
      d(Y), y();
    },
    get edges() {
      return h();
    },
    set edges(Y) {
      h(Y), y();
    },
    get fitView() {
      return v();
    },
    set fitView(Y) {
      v(Y), y();
    },
    get fitViewOptions() {
      return _();
    },
    set fitViewOptions(Y) {
      _(Y), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Y) {
      b(Y), y();
    },
    get maxZoom() {
      return E();
    },
    set maxZoom(Y) {
      E(Y), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Y) {
      m(Y), y();
    },
    get viewport() {
      return C();
    },
    set viewport(Y) {
      C(Y), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(Y) {
      p(Y), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Y) {
      k(Y), y();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(Y) {
      S(Y), y();
    },
    get selectionMode() {
      return $();
    },
    set selectionMode(Y) {
      $(Y), y();
    },
    get panActivationKey() {
      return H();
    },
    set panActivationKey(Y) {
      H(Y), y();
    },
    get multiSelectionKey() {
      return A();
    },
    set multiSelectionKey(Y) {
      A(Y), y();
    },
    get zoomActivationKey() {
      return V();
    },
    set zoomActivationKey(Y) {
      V(Y), y();
    },
    get nodesDraggable() {
      return D();
    },
    set nodesDraggable(Y) {
      D(Y), y();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(Y) {
      I(Y), y();
    },
    get nodeDragThreshold() {
      return z();
    },
    set nodeDragThreshold(Y) {
      z(Y), y();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(Y) {
      P(Y), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(Y) {
      M(Y), y();
    },
    get deleteKey() {
      return x();
    },
    set deleteKey(Y) {
      x(Y), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(Y) {
      N(Y), y();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(Y) {
      T(Y), y();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(Y) {
      L(Y), y();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(Y) {
      B(Y), y();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(Y) {
      X(Y), y();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(Y) {
      q(Y), y();
    },
    get onMove() {
      return ue();
    },
    set onMove(Y) {
      ue(Y), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(Y) {
      ee(Y), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Y) {
      W(Y), y();
    },
    get translateExtent() {
      return re();
    },
    set translateExtent(Y) {
      re(Y), y();
    },
    get nodeExtent() {
      return he();
    },
    set nodeExtent(Y) {
      he(Y), y();
    },
    get onlyRenderVisibleElements() {
      return _e();
    },
    set onlyRenderVisibleElements(Y) {
      _e(Y), y();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(Y) {
      le(Y), y();
    },
    get preventScrolling() {
      return Ie();
    },
    set preventScrolling(Y) {
      Ie(Y), y();
    },
    get zoomOnScroll() {
      return G();
    },
    set zoomOnScroll(Y) {
      G(Y), y();
    },
    get zoomOnDoubleClick() {
      return se();
    },
    set zoomOnDoubleClick(Y) {
      se(Y), y();
    },
    get zoomOnPinch() {
      return Me();
    },
    set zoomOnPinch(Y) {
      Me(Y), y();
    },
    get panOnScroll() {
      return Oe();
    },
    set panOnScroll(Y) {
      Oe(Y), y();
    },
    get panOnDrag() {
      return Xe();
    },
    set panOnDrag(Y) {
      Xe(Y), y();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(Y) {
      te(Y), y();
    },
    get autoPanOnConnect() {
      return We();
    },
    set autoPanOnConnect(Y) {
      We(Y), y();
    },
    get autoPanOnNodeDrag() {
      return Ue();
    },
    set autoPanOnNodeDrag(Y) {
      Ue(Y), y();
    },
    get onerror() {
      return Be();
    },
    set onerror(Y) {
      Be(Y), y();
    },
    get ondelete() {
      return ie();
    },
    set ondelete(Y) {
      ie(Y), y();
    },
    get onedgecreate() {
      return ve();
    },
    set onedgecreate(Y) {
      ve(Y), y();
    },
    get attributionPosition() {
      return $e();
    },
    set attributionPosition(Y) {
      $e(Y), y();
    },
    get proOptions() {
      return Se();
    },
    set proOptions(Y) {
      Se(Y), y();
    },
    get defaultEdgeOptions() {
      return at();
    },
    set defaultEdgeOptions(Y) {
      at(Y), y();
    },
    get width() {
      return ut();
    },
    set width(Y) {
      ut(Y), y();
    },
    get height() {
      return J();
    },
    set height(Y) {
      J(Y), y();
    },
    get colorMode() {
      return Ye();
    },
    set colorMode(Y) {
      Ye(Y), y();
    },
    get onconnect() {
      return ce();
    },
    set onconnect(Y) {
      ce(Y), y();
    },
    get onconnectstart() {
      return tn();
    },
    set onconnectstart(Y) {
      tn(Y), y();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(Y) {
      nn(Y), y();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(Y) {
      hn(Y), y();
    },
    get oninit() {
      return Pe();
    },
    set oninit(Y) {
      Pe(Y), y();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(Y) {
      nt(Y), y();
    },
    get paneClickDistance() {
      return Le();
    },
    set paneClickDistance(Y) {
      Le(Y), y();
    },
    get nodeClickDistance() {
      return Ve();
    },
    set nodeClickDistance(Y) {
      Ve(Y), y();
    },
    get defaultMarkerColor() {
      return rt();
    },
    set defaultMarkerColor(Y) {
      rt(Y), y();
    },
    get style() {
      return rn();
    },
    set style(Y) {
      rn(Y), y();
    },
    get class() {
      return Kt();
    },
    set class(Y) {
      Kt(Y), y();
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
  Ar(Gi, { getStore: () => l }), ua(() => {
    l.reset();
  }), He();
  var u = tt(), c = we(u);
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
  He();
  var c = u2();
  let f;
  var d = F(c);
  return pt(d, t, "default", { class: "button-svg" }), Z(c), ke(
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
      () => Nt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Ze("click", c, function(h) {
    Ae.call(this, t, h);
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
var c2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function sd(e) {
  var t = c2();
  O(e, t);
}
ae(sd, {}, [], [], !0);
var d2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = d2();
  O(e, t);
}
ae(ad, {}, [], [], !0);
var f2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ld(e) {
  var t = f2();
  O(e, t);
}
ae(ld, {}, [], [], !0);
var g2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ud(e) {
  var t = g2();
  O(e, t);
}
ae(ud, {}, [], [], !0);
var h2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function cd(e) {
  var t = h2();
  O(e, t);
}
ae(cd, {}, [], [], !0);
var v2 = /* @__PURE__ */ oe("<!> <!>", 1), p2 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(T, "$nodesDraggable", n), i = () => Q(L, "$nodesConnectable", n), s = () => Q(B, "$elementsSelectable", n), a = () => Q(M, "$viewport", n), l = () => Q(x, "$minZoom", n), u = () => Q(N, "$maxZoom", n), c = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne();
  let v = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), S = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), H = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), V = w(t, "fitViewOptions", 12, void 0), D = w(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: z,
    fitView: P,
    viewport: M,
    minZoom: x,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: L,
    elementsSelectable: B
  } = Je(), X = {
    bgColor: m(),
    bgColorHover: C(),
    color: p(),
    colorHover: k(),
    borderColor: S()
  }, q = () => {
    I();
  }, ue = () => {
    z();
  }, ee = () => {
    P(V());
  }, W = () => {
    U(c, !g(c)), T.set(g(c)), L.set(g(c)), B.set(g(c));
  };
  ge(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), ge(() => (a(), l()), () => {
    U(f, a().zoom <= l());
  }), ge(() => (a(), u()), () => {
    U(d, a().zoom >= u());
  }), ge(() => j(A()), () => {
    U(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), He();
  const re = /* @__PURE__ */ pe(() => Nt([
    "svelte-flow__controls",
    g(h),
    D()
  ])), he = /* @__PURE__ */ pe(() => $() ?? "Svelte Flow controls");
  Lo(e, {
    get class() {
      return g(re);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(he);
    },
    get style() {
      return H();
    },
    children: (le, Ie) => {
      var G = p2(), se = we(G);
      pt(se, t, "before", {});
      var Me = R(se, 2);
      {
        var Oe = (ve) => {
          var $e = v2(), Se = we($e);
          so(Se, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(d);
              }
            },
            X,
            {
              $$events: { click: q },
              children: (ut, J) => {
                sd(ut);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = R(Se, 2);
          so(at, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(f);
              }
            },
            X,
            {
              $$events: { click: ue },
              children: (ut, J) => {
                ad(ut);
              },
              $$slots: { default: !0 }
            }
          )), O(ve, $e);
        };
        xe(Me, (ve) => {
          _() && ve(Oe);
        });
      }
      var Xe = R(Me, 2);
      {
        var te = (ve) => {
          so(ve, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: ee },
              children: ($e, Se) => {
                ld($e);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Xe, (ve) => {
          b() && ve(te);
        });
      }
      var We = R(Xe, 2);
      {
        var Ue = (ve) => {
          so(ve, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: W },
              children: ($e, Se) => {
                var at = tt(), ut = we(at);
                {
                  var J = (ce) => {
                    cd(ce);
                  }, Ye = (ce) => {
                    ud(ce);
                  };
                  xe(ut, (ce) => {
                    g(c) ? ce(J) : ce(Ye, !1);
                  });
                }
                O($e, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(We, (ve) => {
          E() && ve(Ue);
        });
      }
      var Be = R(We, 2);
      pt(Be, t, "default", {});
      var ie = R(Be, 2);
      pt(ie, t, "after", {}), O(le, G);
    },
    $$slots: { default: !0 }
  });
  var _e = fe({
    get position() {
      return v();
    },
    set position(le) {
      v(le), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(le) {
      _(le), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(le) {
      b(le), y();
    },
    get showLock() {
      return E();
    },
    set showLock(le) {
      E(le), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(le) {
      m(le), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(le) {
      C(le), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(le) {
      p(le), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(le) {
      k(le), y();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(le) {
      S(le), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(le) {
      $(le), y();
    },
    get style() {
      return H();
    },
    set style(le) {
      H(le), y();
    },
    get orientation() {
      return A();
    },
    set orientation(le) {
      A(le), y();
    },
    get fitViewOptions() {
      return V();
    },
    set fitViewOptions(le) {
      V(le), y();
    },
    get class() {
      return D();
    },
    set class(le) {
      D(le), y();
    }
  });
  return r(), _e;
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
var Gn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Gn || (Gn = {}));
var m2 = /* @__PURE__ */ be("<circle></circle>");
function fd(e, t) {
  de(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  He();
  var o = m2();
  return ke(
    (i) => {
      me(o, "cx", n()), me(o, "cy", n()), me(o, "r", n()), mt(o, 0, i);
    },
    [
      () => dn(Nt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    pe
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
var y2 = /* @__PURE__ */ be("<path></path>");
function gd(e, t) {
  de(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  He();
  var s = y2();
  return ke(
    (a) => {
      me(s, "stroke-width", n()), me(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, a);
    },
    [
      () => dn(Nt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    pe
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
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var _2 = /* @__PURE__ */ be('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const x2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function hd(e, t) {
  de(t, !1), et(e, x2);
  const [n, r] = it(), o = () => Q(k, "$flowId", n), i = () => Q(p, "$viewport", n), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Gn.Dots), h = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: p, flowId: k } = Je(), S = v() || w2[d()], $ = d() === Gn.Dots, H = d() === Gn.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  ge(
    () => (o(), j(f())),
    () => {
      U(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ge(() => i(), () => {
    U(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), ge(() => i(), () => {
    U(l, S * i().zoom);
  }), ge(() => (g(l), g(a)), () => {
    U(u, H ? [g(l), g(l)] : g(a));
  }), ge(
    () => (g(l), g(u)),
    () => {
      U(c, $ ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), gt(), He();
  var V = _2();
  let D;
  var I = F(V), z = F(I);
  {
    var P = (T) => {
      const L = /* @__PURE__ */ pe(() => g(l) / 2);
      fd(T, {
        get radius() {
          return g(L);
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
          return _();
        },
        get class() {
          return m();
        }
      });
    };
    xe(z, (T) => {
      $ ? T(P) : T(M, !1);
    });
  }
  Z(I);
  var x = R(I);
  Z(V), ke(
    (T) => {
      mt(V, 0, T, "svelte-1r7pe8d"), D = dt(V, "", D, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": E()
      }), me(I, "id", g(s)), me(I, "x", i().x % g(a)[0]), me(I, "y", i().y % g(a)[1]), me(I, "width", g(a)[0]), me(I, "height", g(a)[1]), me(I, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), me(x, "fill", `url(#${g(s)})`);
    },
    [
      () => dn(Nt(["svelte-flow__background", C()]))
    ],
    pe
  ), O(e, V);
  var N = fe({
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
      return _();
    },
    set lineWidth(T) {
      _(T), y();
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
  return r(), N;
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
var b2 = /* @__PURE__ */ be("<rect></rect>");
function vd(e, t) {
  de(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  He();
  var h = b2();
  let v;
  return ke(
    (_, b) => {
      v = mt(h, 0, _, null, v, b), me(h, "x", n()), me(h, "y", r()), me(h, "rx", s()), me(h, "ry", s()), me(h, "width", o()), me(h, "height", i()), dt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), me(h, "shape-rendering", l());
    },
    [
      () => dn(Nt(["svelte-flow__minimap-node", d()])),
      () => ({ selected: f() })
    ],
    pe
  ), O(e, h), fe({
    get x() {
      return n();
    },
    set x(_) {
      n(_), y();
    },
    get y() {
      return r();
    },
    set y(_) {
      r(_), y();
    },
    get width() {
      return o();
    },
    set width(_) {
      o(_), y();
    },
    get height() {
      return i();
    },
    set height(_) {
      i(_), y();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(_) {
      s(_), y();
    },
    get color() {
      return a();
    },
    set color(_) {
      a(_), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(_) {
      l(_), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(_) {
      u(_), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(_) {
      c(_), y();
    },
    get selected() {
      return f();
    },
    set selected(_) {
      f(_), y();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), y();
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
      const o = K(t.viewport);
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
var C2 = /* @__PURE__ */ be("<title> </title>"), k2 = /* @__PURE__ */ be('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function pd(e, t) {
  de(t, !1);
  const [n, r] = it(), o = () => Q(Xe, "$flowId", n), i = () => Q(se, "$viewport", n), s = () => Q(Me, "$containerWidth", n), a = () => Q(Oe, "$containerHeight", n), l = () => Q(G, "$nodeLookup", n), u = () => Q(Ie, "$nodes", n), c = () => Q(te, "$panZoom", n), f = () => Q(We, "$translateExtent", n), d = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), m = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), p = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne(), H = /* @__PURE__ */ ne();
  let A = w(t, "position", 12, "bottom-right"), V = w(t, "ariaLabel", 12, "Mini map"), D = w(t, "nodeStrokeColor", 12, "transparent"), I = w(t, "nodeColor", 12, void 0), z = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), x = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), L = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), X = w(t, "height", 12, void 0), q = w(t, "pannable", 12, !0), ue = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), re = w(t, "style", 12, ""), he = w(t, "class", 12, "");
  const _e = 200, le = 150, {
    nodes: Ie,
    nodeLookup: G,
    viewport: se,
    width: Me,
    height: Oe,
    flowId: Xe,
    panZoom: te,
    translateExtent: We
  } = Je(), Ue = I() === void 0 ? void 0 : ms(I()), Be = ms(D()), ie = ms(z()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), $e = `svelte-flow__minimap-desc-${o()}`;
  let Se = /* @__PURE__ */ ne(g(d));
  const at = () => g(E);
  ge(
    () => (i(), s(), a()),
    () => {
      U(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ge(
    () => (l(), g(d), u()),
    () => {
      U(Se, l().size > 0 ? vc(Ao(l()), g(d)) : g(d)), u();
    }
  ), ge(() => j(B()), () => {
    U(h, B() ?? _e);
  }), ge(() => j(X()), () => {
    U(v, X() ?? le);
  }), ge(
    () => (g(Se), g(h)),
    () => {
      U(_, g(Se).width / g(h));
    }
  ), ge(
    () => (g(Se), g(v)),
    () => {
      U(b, g(Se).height / g(v));
    }
  ), ge(
    () => (g(_), g(b)),
    () => {
      U(E, Math.max(g(_), g(b)));
    }
  ), ge(() => (g(E), g(h)), () => {
    U(m, g(E) * g(h));
  }), ge(
    () => (g(E), g(v)),
    () => {
      U(C, g(E) * g(v));
    }
  ), ge(() => g(E), () => {
    U(p, 5 * g(E));
  }), ge(
    () => (g(Se), g(m), g(p)),
    () => {
      U(k, g(Se).x - (g(m) - g(Se).width) / 2 - g(p));
    }
  ), ge(
    () => (g(Se), g(C), g(p)),
    () => {
      U(S, g(Se).y - (g(C) - g(Se).height) / 2 - g(p));
    }
  ), ge(() => (g(m), g(p)), () => {
    U($, g(m) + g(p) * 2);
  }), ge(() => (g(C), g(p)), () => {
    U(H, g(C) + g(p) * 2);
  }), gt(), He();
  const ut = /* @__PURE__ */ pe(() => re() + (x() ? `;--xy-minimap-background-color-props:${x()}` : "")), J = /* @__PURE__ */ pe(() => Nt(["svelte-flow__minimap", he()]));
  Lo(e, {
    get position() {
      return A();
    },
    get style() {
      return g(ut);
    },
    get class() {
      return g(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ce, tn) => {
      var nn = tt(), hn = we(nn);
      {
        var Pe = (nt) => {
          var Le = k2();
          me(Le, "aria-labelledby", $e);
          let Ve;
          var rt = F(Le);
          {
            var rn = (wt) => {
              var Tt = C2();
              me(Tt, "id", $e);
              var yr = F(Tt, !0);
              Z(Tt), ke(() => Zt(yr, V())), O(wt, Tt);
            };
            xe(rt, (wt) => {
              V() && wt(rn);
            });
          }
          var Kt = R(rt);
          Dt(Kt, 1, u, (wt) => wt.id, (wt, Tt) => {
            var yr = tt();
            const ot = /* @__PURE__ */ pe(() => l().get(g(Tt).id));
            var es = we(yr);
            {
              var Ur = (Lt) => {
                const Yo = /* @__PURE__ */ pe(() => tr(g(ot))), Zo = /* @__PURE__ */ pe(() => Ue == null ? void 0 : Ue(g(ot))), Fo = /* @__PURE__ */ pe(() => Be(g(ot))), ts = /* @__PURE__ */ pe(() => ie(g(ot)));
                vd(Lt, ct(
                  {
                    get x() {
                      return g(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Yo),
                  {
                    get selected() {
                      return g(ot).selected;
                    },
                    get color() {
                      return g(Zo);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return g(Fo);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: ve,
                    get class() {
                      return g(ts);
                    }
                  }
                ));
              };
              xe(es, (Lt) => {
                g(ot) && mc(g(ot)) && Lt(Ur);
              });
            }
            O(wt, yr);
          });
          var Gr = R(Kt);
          Z(Le), vt(Le, (wt, Tt) => ps == null ? void 0 : ps(wt, Tt), () => ({
            panZoom: c(),
            viewport: se,
            getViewScale: at,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: W(),
            pannable: q(),
            zoomable: ue()
          })), ke(() => {
            me(Le, "width", g(h)), me(Le, "height", g(v)), me(Le, "viewBox", `${g(k) ?? ""} ${g(S) ?? ""} ${g($) ?? ""} ${g(H) ?? ""}`), Ve = dt(Le, "", Ve, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": L() ? L() * g(E) : void 0
            }), me(Gr, "d", `M${g(k) - g(p)},${g(S) - g(p)}h${g($) + g(p) * 2}v${g(H) + g(p) * 2}h${-g($) - g(p) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), O(nt, Le);
        };
        xe(hn, (nt) => {
          c() && nt(Pe);
        });
      }
      O(ce, nn);
    },
    $$slots: { default: !0 }
  });
  var Ye = fe({
    get position() {
      return A();
    },
    set position(ce) {
      A(ce), y();
    },
    get ariaLabel() {
      return V();
    },
    set ariaLabel(ce) {
      V(ce), y();
    },
    get nodeStrokeColor() {
      return D();
    },
    set nodeStrokeColor(ce) {
      D(ce), y();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(ce) {
      I(ce), y();
    },
    get nodeClass() {
      return z();
    },
    set nodeClass(ce) {
      z(ce), y();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(ce) {
      P(ce), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(ce) {
      M(ce), y();
    },
    get bgColor() {
      return x();
    },
    set bgColor(ce) {
      x(ce), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(ce) {
      N(ce), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(ce) {
      T(ce), y();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(ce) {
      L(ce), y();
    },
    get width() {
      return B();
    },
    set width(ce) {
      B(ce), y();
    },
    get height() {
      return X();
    },
    set height(ce) {
      X(ce), y();
    },
    get pannable() {
      return q();
    },
    set pannable(ce) {
      q(ce), y();
    },
    get zoomable() {
      return ue();
    },
    set zoomable(ce) {
      ue(ce), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(ce) {
      ee(ce), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ce) {
      W(ce), y();
    },
    get style() {
      return re();
    },
    set style(ce) {
      re(ce), y();
    },
    get class() {
      return he();
    },
    set class(ce) {
      he(ce), y();
    }
  });
  return r(), Ye;
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
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: h, nodeLookup: v, nodeOrigin: _, edgeLookup: b, connectionLookup: E } = Je(), m = (k) => {
    var V, D;
    const S = K(v), $ = Bl(k) ? k : S.get(k.id), H = $.parentId ? P0($.position, $.measured, $.parentId, S, K(_)) : $.position, A = {
      ...$,
      position: H,
      width: ((V = $.measured) == null ? void 0 : V.width) ?? $.width,
      height: ((D = $.measured) == null ? void 0 : D.height) ?? $.height
    };
    return zr(A);
  }, C = (k, S, $ = { replace: !1 }) => {
    var V;
    const H = (V = K(v).get(k)) == null ? void 0 : V.internals.userNode;
    if (!H)
      return;
    const A = typeof S == "function" ? S(H) : S;
    $.replace ? f.update((D) => D.map((I) => I.id === k ? Bl(A) ? A : { ...I, ...A } : I)) : (Object.assign(H, A), f.update((D) => D));
  }, p = (k) => K(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (k) => {
      var S;
      return (S = p(k)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? K(f) : Yl(K(v), k),
    getEdge: (k) => K(b).get(k),
    getEdges: (k) => k === void 0 ? K(d) : Yl(K(b), k),
    setZoom: (k, S) => {
      const $ = K(c);
      return $ ? $.scaleTo(k, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (k, S) => {
      const $ = K(i), H = K(c);
      return H ? (await H.setViewport({
        x: k.x ?? $.x,
        y: k.y ?? $.y,
        zoom: k.zoom ?? $.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (k, S, $) => {
      const H = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : K(u), A = K(c);
      return A ? (await A.setViewport({
        x: K(s) / 2 - k * H,
        y: K(a) / 2 - S * H,
        zoom: H
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, S) => {
      const $ = K(c);
      if (!$)
        return Promise.resolve(!1);
      const H = wa(k, K(s), K(a), K(l), K(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await $.setViewport(H, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, S = !0, $) => {
      const H = El(k), A = H ? k : m(k);
      return A ? ($ || K(f)).filter((V) => {
        const D = K(v).get(V.id);
        if (!D || !H && V.id === k.id)
          return !1;
        const I = zr(D), z = Co(I, A);
        return S && z > 0 || z >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (k, S, $ = !0) => {
      const A = El(k) ? k : m(k);
      if (!A)
        return !1;
      const V = Co(A, S);
      return $ && V > 0 || V >= A.width * A.height;
    },
    deleteElements: async ({ nodes: k = [], edges: S = [] }) => {
      const { nodes: $, edges: H } = await fc({
        nodesToRemove: k,
        edgesToRemove: S,
        nodes: K(f),
        edges: K(d),
        onBeforeDelete: K(r)
      });
      return $ && f.update((A) => A.filter((V) => !$.some(({ id: D }) => D === V.id))), H && d.update((A) => A.filter((V) => !H.some(({ id: D }) => D === V.id))), {
        deletedNodes: $,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, S = { snapToGrid: !0 }) => {
      const $ = K(h);
      if (!$)
        return k;
      const H = S.snapToGrid ? K(o) : !1, { x: A, y: V, zoom: D } = K(i), { x: I, y: z } = $.getBoundingClientRect(), P = {
        x: k.x - I,
        y: k.y - z
      };
      return Do(P, [A, V, D], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const S = K(h);
      if (!S)
        return k;
      const { x: $, y: H, zoom: A } = K(i), { x: V, y: D } = S.getBoundingClientRect(), I = pc(k, [$, H, A]);
      return {
        x: I.x + V,
        y: I.y + D
      };
    },
    toObject: () => ({
      nodes: K(f).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: K(d).map((k) => ({ ...k })),
      viewport: { ...K(i) }
    }),
    updateNode: C,
    updateNodeData: (k, S, $) => {
      var V;
      const H = (V = K(v).get(k)) == null ? void 0 : V.internals.userNode;
      if (!H)
        return;
      const A = typeof S == "function" ? S(H) : S;
      H.data = $ != null && $.replace ? A : { ...H.data, ...A }, f.update((D) => D);
    },
    getNodesBounds: (k) => {
      const S = K(v), $ = K(_);
      return E0(k, { nodeLookup: S, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: k, id: S, nodeId: $ }) => {
      var H;
      return Array.from(((H = K(E).get(`${$}-${k}-${S ?? null}`)) == null ? void 0 : H.values()) ?? []);
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
  const [n, r] = it(), o = () => Q(C, "$nodes", n), i = () => Q(m, "$nodeLookup", n), s = () => Q(E, "$viewport", n), a = () => Q(b, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: E, nodeLookup: m, nodes: C } = Je(), { getNodesBounds: p } = Ot(), k = lr("svelteflow__node_id");
  let S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne([]), H = v() !== void 0 ? v() : 10, A = d() !== void 0 ? d() : Ce.Top, V = h() !== void 0 ? h() : "center";
  ge(
    () => (o(), j(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || k];
      U($, M.reduce(
        (x, N) => {
          const T = i().get(N);
          return T && x.push(T), x;
        },
        []
      ));
    }
  ), ge(
    () => (g($), s()),
    () => {
      const M = p(g($));
      M && U(S, Z0(M, s(), A, H, V));
    }
  ), ge(() => g($), () => {
    U(l, g($).length === 0 ? 1 : Math.max(...g($).map((M) => (M.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    U(u, o().filter((M) => M.selected).length);
  }), ge(
    () => (j(_()), g($), g(u)),
    () => {
      U(c, typeof _() == "boolean" ? _() : g($).length === 1 && g($)[0].selected && g(u) === 1);
    }
  ), gt(), He();
  var D = tt(), I = we(D);
  {
    var z = (M) => {
      var x = E2();
      let N;
      var T = F(x);
      pt(T, t, "default", {}), Z(x), vt(x, (L, B) => $r == null ? void 0 : $r(L, B), () => ({ domNode: a() })), ke(
        (L) => {
          me(x, "data-id", L), N = dt(x, "", N, {
            position: "absolute",
            transform: g(S),
            "z-index": g(l)
          });
        },
        [
          () => g($).reduce((L, B) => `${L}${B.id} `, "").trim()
        ],
        pe
      ), O(M, x);
    };
    xe(I, (M) => {
      a() && g(c) && g($) && M(z);
    });
  }
  O(e, D);
  var P = fe({
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
      return _();
    },
    set isVisible(M) {
      _(M), y();
    }
  });
  return r(), P;
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
  const { nodes: t, nodeLookup: n } = Je();
  let r = [], o = !0;
  return Kn([t, n], ([, i], s) => {
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
  const e = ye([]), t = ye([]), n = ye({ x: 250, y: 100, zoom: 1 });
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
function je(e, t) {
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
  var s = F(o);
  return ur(s, () => n() ?? ft), Z(o), ke(() => i = ln(o, i, {
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
ae(je, { children: {} }, [], [], !0);
var P2 = /* @__PURE__ */ oe("<input>");
function yd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = P2();
  lo(r);
  let o;
  ke(() => o = ln(r, o, {
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
  ke(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
ae(Ct, {}, [], [], !0);
var T2 = /* @__PURE__ */ oe("<textarea></textarea>");
function Pt(e, t) {
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
  return ke(() => i = ln(o, i, {
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
ae(Pt, { value: {} }, [], [], !0);
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
  He();
  var l = H2();
  let u;
  return Dt(l, 5, o, po, (c, f, d) => {
    var h = M2();
    me(h, "tabindex", d), h.__click = () => a(g(f), d), h.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a(g(f), d));
    };
    var v = F(h);
    {
      var _ = (E) => {
        var m = Re();
        ke(() => Zt(m, g(f).label)), O(E, m);
      }, b = (E) => {
        var m = tt(), C = we(m);
        ur(C, () => g(f).label ?? ft), O(E, m);
      };
      xe(v, (E) => {
        typeof g(f).label == "string" ? E(_) : E(b, !1);
      });
    }
    Z(h), ke(() => mt(h, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), O(c, h);
  }), Z(l), ke(() => u = ln(l, u, {
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
var V2 = (e, t, n) => t(g(n)), A2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, D2 = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), O2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), L2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), I2 = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), z2 = /* @__PURE__ */ oe("<div></div>");
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
    var c = I2(), f = F(c);
    me(f, "tabindex", u), f.__click = [V2, i, l], f.__keydown = [A2, i, l];
    var d = F(f);
    {
      var h = (p) => {
        var k = D2(), S = F(k);
        Xn(S, {
          get target() {
            return g(l).icon;
          }
        }), Z(k), O(p, k);
      };
      xe(d, (p) => {
        g(l).icon && p(h);
      });
    }
    var v = R(d, 2);
    Xn(v, {
      get target() {
        return g(l).title;
      }
    });
    var _ = R(v, 2);
    Z(f);
    var b = R(f, 2);
    {
      var E = (p) => {
        var k = O2(), S = F(k);
        Xn(S, {
          get target() {
            return g(l).description;
          }
        }), Z(k), O(p, k);
      };
      xe(b, (p) => {
        g(l).description && p(E);
      });
    }
    var m = R(b, 2);
    {
      var C = (p) => {
        var k = L2(), S = F(k);
        Xn(S, {
          get target() {
            return g(l).content;
          }
        }), Z(k), O(p, k);
      };
      xe(m, (p) => {
        o().includes(g(l).key) && p(C);
      });
    }
    Z(c), ke((p) => mt(_, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), O(a, c);
  }), Z(s), ke(() => {
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
function Xn(e, t) {
  de(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = tt(), o = we(r);
  {
    var i = (a) => {
      var l = tt(), u = we(l);
      ur(u, () => n() ?? ft), O(a, l);
    }, s = (a) => {
      var l = tt(), u = we(l);
      aa(u, n), O(a, l);
    };
    xe(o, (a) => {
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
ae(Xn, { target: {} }, [], [], !0);
var B2 = (e, t, n) => t(g(n)), Y2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Z2 = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), F2 = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), X2 = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), W2 = /* @__PURE__ */ oe("<!> <!>", 1), K2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), q2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), G2 = /* @__PURE__ */ oe("<div><!></div>");
function Cn(e, t) {
  de(t, !0);
  const n = (C, p = ft) => {
    var k = tt(), S = we(k);
    Dt(S, 19, p, ($, H) => `${H}_${$.value}`, ($, H) => {
      var A = F2(), V = we(A);
      V.__click = [B2, _, H];
      var D = F(V), I = F(D);
      {
        var z = (N) => {
          var T = Y2();
          O(N, T);
        };
        xe(I, (N) => {
          g(H).children && g(H).children.length > 0 && N(z);
        });
      }
      Z(D);
      var P = R(D, 2);
      Xn(P, {
        get target() {
          return g(H).label;
        }
      }), Z(V);
      var M = R(V, 2);
      {
        var x = (N) => {
          var T = Z2(), L = F(T);
          n(L, () => g(H).children), Z(T), O(N, T);
        };
        xe(M, (N) => {
          g(H).children && g(H).children.length > 0 && (l() || c().includes(g(H).value)) && N(x);
        });
      }
      O($, A);
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
  ]), h = /* @__PURE__ */ Te(() => {
    const C = [], p = (k) => {
      for (let S of k)
        s().length > 0 ? s().includes(S.value) && C.push(S) : a().includes(S.value) && C.push(S), S.children && S.children.length > 0 && p(S.children);
    };
    return p(r()), C;
  }), v;
  function _(C) {
    var p, k;
    if (C.children && C.children.length > 0) {
      (p = o()) == null || p(C);
      return;
    } else
      v == null || v.hide(), (k = i()) == null || k(C);
  }
  var b = G2();
  let E;
  var m = F(b);
  return bn(
    Bo(m, {
      floating: (p) => {
        var k = X2(), S = F(k);
        n(S, r), Z(k), O(p, k);
      },
      children: (p, k) => {
        var S = q2();
        let $;
        var H = F(S);
        Dt(
          H,
          23,
          () => g(h),
          (A, V) => `${V}_${A.value}`,
          (A, V, D) => {
            var I = tt(), z = we(I);
            {
              var P = (x) => {
                var N = tt(), T = we(N);
                {
                  var L = (B) => {
                    Xn(B, {
                      get target() {
                        return g(V).label;
                      }
                    });
                  };
                  xe(T, (B) => {
                    g(D) === 0 && B(L);
                  });
                }
                O(x, N);
              }, M = (x) => {
                var N = W2(), T = we(N);
                Xn(T, {
                  get target() {
                    return g(V).label;
                  }
                });
                var L = R(T, 2);
                {
                  var B = (X) => {
                    var q = Re(",");
                    O(X, q);
                  };
                  xe(L, (X) => {
                    g(D) < g(h).length - 1 && X(B);
                  });
                }
                O(x, N);
              };
              xe(z, (x) => {
                u() ? x(M, !1) : x(P);
              });
            }
            O(A, I);
          },
          (A) => {
            var V = K2(), D = F(V, !0);
            Z(V), ke(() => Zt(D, f())), O(A, V);
          }
        ), Z(H), Ne(2), Z(S), ke(() => $ = ln(S, $, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), O(p, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), Z(b), ke(() => E = ln(b, E, {
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
  Cn,
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
const Eo = Math.min, Pr = Math.max, $i = Math.round, mn = (e) => ({
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
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: b,
      fn: E
    } = a[_], {
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
    } = Fl(u, d, l)), _ = -1);
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
    }, h = $a(o), v = Ea(h), _ = await s.getDimensions(u), b = h === "y", E = b ? "top" : "left", m = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[h] - d[h] - i.floating[v], k = d[h] - i.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = S ? S[C] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(S))) && ($ = a.floating[C] || i.floating[v]);
    const H = p / 2 - k / 2, A = $ / 2 - _[v] / 2 - 1, V = Eo(f[E], A), D = Eo(f[m], A), I = V, z = $ - _[v] - D, P = $ / 2 - _[v] / 2 + H, M = Bs(I, P, z), x = !l.arrow && zo(o) != null && P !== M && i.reference[v] / 2 - (P < I ? V : D) - _[v] / 2 < 0, N = x ? P < I ? P - I : P - z : 0;
    return {
      [h]: d[h] + N,
      data: {
        [h]: M,
        centerOffset: P - M - N,
        ...x && {
          alignmentOffset: N
        }
      },
      reset: x
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
        flipAlignment: _ = !0,
        ...b
      } = Io(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const E = gr(o), m = Br(a), C = gr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (C || !_ ? [Si(a)] : Q2(a)), S = v !== "none";
      !d && S && k.push(...tm(a, _, v, p));
      const $ = [a, ...k], H = await Cd(t, b), A = [];
      let V = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(H[E]), f) {
        const P = J2(o, s, p);
        A.push(H[P[0]], H[P[1]]);
      }
      if (V = [...V, {
        placement: o,
        overflows: A
      }], !A.every((P) => P <= 0)) {
        var D, I;
        const P = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, M = $[P];
        if (M)
          return {
            data: {
              index: P,
              overflows: V
            },
            reset: {
              placement: M
            }
          };
        let x = (I = V.filter((N) => N.overflows[0] <= 0).sort((N, T) => N.overflows[1] - T.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!x)
          switch (h) {
            case "bestFit": {
              var z;
              const N = (z = V.filter((T) => {
                if (S) {
                  const L = Br(T.placement);
                  return L === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((L) => L > 0).reduce((L, B) => L + B, 0)]).sort((T, L) => T[1] - L[1])[0]) == null ? void 0 : z[0];
              N && (x = N);
              break;
            }
            case "initialPlacement":
              x = a;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
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
      const _ = a.fn({
        ...t,
        [d]: h,
        [f]: v
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
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
function zn(e) {
  var t;
  return (t = (kd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function kd(e) {
  return Ui() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function un(e) {
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
  } = cn(e);
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
  const t = Pa(), n = un(e) ? cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function cm(e) {
  let t = Qn(e);
  for (; kn(t) && !Yr(t); ) {
    if (Sa(t))
      return t;
    if (ji(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Pa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yr(e) {
  return ["html", "body", "#document"].includes(qr(e));
}
function cn(e) {
  return Ft(e).getComputedStyle(e);
}
function Ji(e) {
  return un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (qr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xl(e) && e.host || // Fallback.
    zn(e)
  );
  return Xl(t) ? t.host : t;
}
function Ed(e) {
  const t = Qn(e);
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
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = $i(n) !== i || $i(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Pd(e) {
  return un(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Pd(e);
  if (!kn(t))
    return mn(1);
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
const dm = /* @__PURE__ */ mn(0);
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
  let s = mn(1);
  t && (r ? un(r) && (s = Nr(r)) : s = Nr(e));
  const a = fm(i, n, r) ? Nd(i) : mn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Ft(i), h = r && un(r) ? Ft(r) : r;
    let v = d, _ = Zs(v);
    for (; _ && r && h !== v; ) {
      const b = Nr(_), E = _.getBoundingClientRect(), m = cn(_), C = E.left + (_.clientLeft + parseFloat(m.paddingLeft)) * b.x, p = E.top + (_.clientTop + parseFloat(m.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += C, u += p, v = Ft(_), _ = Zs(v);
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
  return t ? t.left + n : $o(zn(e)).left + n;
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
  const i = o === "fixed", s = zn(r), a = t ? ji(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = mn(1);
  const c = mn(0), f = kn(r);
  if ((f || !f && !i) && ((qr(r) !== "body" || Ro(s)) && (l = Ji(r)), kn(r))) {
    const h = $o(r);
    u = Nr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const d = s && !f && !i ? Td(s, l, !0) : mn(0);
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
  const t = zn(e), n = Ji(e), r = e.ownerDocument.body, o = Pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Na(e);
  const a = -n.scrollTop;
  return cn(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function pm(e, t) {
  const n = Ft(e), r = zn(e), o = n.visualViewport;
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
  const n = $o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Nr(e) : mn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = vm(zn(e));
  else if (un(t))
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
  const n = Qn(e);
  return n === t || !un(n) || Yr(n) ? !1 : cn(n).position === "fixed" || Md(n, t);
}
function ym(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $d(e, []).filter((a) => un(a) && qr(a) !== "body"), o = null;
  const i = cn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; un(s) && !Yr(s); ) {
    const a = cn(s), l = Sa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ro(s) && !l && Md(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
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
  const r = kn(t), o = zn(t), i = n === "fixed", s = $o(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = mn(0);
  if (r || !r && !i)
    if ((qr(t) !== "body" || Ro(o)) && (a = Ji(t)), r) {
      const d = $o(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = Na(o));
  const u = o && !r && !i ? Td(o, a) : mn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ys(e) {
  return cn(e).position === "static";
}
function Kl(e, t) {
  if (!kn(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Hd(e, t) {
  const n = Ft(e);
  if (ji(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !Yr(o); ) {
      if (un(o) && !ys(o))
        return o;
      o = Qn(o);
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
  return cn(e).direction === "rtl";
}
const km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gm,
  getDocumentElement: zn,
  getClippingRect: wm,
  getOffsetParent: Hd,
  getElementRects: bm,
  getClientRects: hm,
  getDimensions: _m,
  getScale: Nr,
  isElement: un,
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
        const { x: k, y: S } = p.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [$]: "2px"
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
  function _(E) {
    E.stopPropagation(), d ? v() : h();
  }
  function b(E) {
    u.contains(E.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, _);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, _);
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
  var u = Mm(), c = F(u), f = F(c);
  ur(f, n), Z(c), bn(c, (v) => i = v, () => i);
  var d = R(c, 2), h = F(d);
  return ur(h, r), Z(d), bn(d, (v) => s = v, () => s), Z(u), O(e, u), fe({
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
  var s = tt(), a = we(s);
  return P1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = tt(), d = we(f);
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
var Hm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Vm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Qi(e, t) {
  de(t, !0), et(e, Vm);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, ct(() => n, {
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
const Am = () => {
  const e = Je();
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
}, Dm = () => {
  const { nodes: e, nodeLookup: t } = Je();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = K(t).get(r)) == null ? void 0 : s.internals.userNode;
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
}, nr = () => lr("tinyflow_options");
var Om = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Lm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Im = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), zm = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Rm = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Bm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function gn(e, t) {
  de(t, !0), et(e, Bm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0), d = w(t, "onCollapse", 7);
  let h = n().expand ? ["key"] : [];
  const { updateNodeData: v, getNode: _ } = Ot(), b = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: E } = Am(), { copyNode: m } = Dm(), C = nr(), p = () => {
    var x;
    (x = C.onNodeExecute) == null || x.call(C, _(r()));
  };
  var k = Rm(), S = we(k);
  {
    var $ = (x) => {
      md(x, {
        get position() {
          return Ce.Top;
        },
        align: "end",
        children: (N, T) => {
          var L = zm(), B = F(L);
          {
            var X = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                onclick: p,
                children: (he, _e) => {
                  var le = Om();
                  O(he, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(B, (re) => {
              a() && re(X);
            });
          }
          var q = R(B, 2);
          {
            var ue = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (he, _e) => {
                  var le = Lm();
                  O(he, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(q, (re) => {
              l() && re(ue);
            });
          }
          var ee = R(q, 2);
          {
            var W = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (he, _e) => {
                  var le = Im();
                  O(he, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(ee, (re) => {
              u() && re(W);
            });
          }
          Z(L), O(N, L);
        },
        $$slots: { default: !0 }
      });
    };
    xe(S, (x) => {
      (a() || l() || u()) && x($);
    });
  }
  var H = R(S, 2), A = R(F(H), 2), V = F(A);
  _d(V, {
    items: b,
    activeKeys: h,
    onChange: (x, N) => {
      var T;
      v(r(), { expand: N == null ? void 0 : N.includes("key") }), (T = d()) == null || T(N != null && N.includes("key") ? "key" : "");
    }
  }), Z(A), Z(H);
  var D = R(H, 2);
  {
    var I = (x) => {
      Jn(x, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(D, (x) => {
      f() && x(I);
    });
  }
  var z = R(D, 2);
  {
    var P = (x) => {
      Jn(x, {
        type: "source",
        get position() {
          return Ce.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(z, (x) => {
      c() && x(P);
    });
  }
  var M = R(z, 2);
  return ur(M, () => i() ?? ft), O(e, k), fe({
    get data() {
      return n();
    },
    set data(x) {
      n(x), y();
    },
    get id() {
      return r();
    },
    set id(x = "") {
      r(x), y();
    },
    get icon() {
      return o();
    },
    set icon(x) {
      o(x), y();
    },
    get handle() {
      return i();
    },
    set handle(x) {
      i(x), y();
    },
    get children() {
      return s();
    },
    set children(x) {
      s(x), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(x = !0) {
      a(x), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(x = !0) {
      l(x), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(x = !0) {
      u(x), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(x = !0) {
      c(x), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(x = !0) {
      f(x), y();
    },
    get onCollapse() {
      return d();
    },
    set onCollapse(x) {
      d(x), y();
    }
  });
}
ae(
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
var Zm = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Fm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Xm = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  de(t, !0), et(e, Wm);
  const [n, r] = it(), o = () => Q(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = /* @__PURE__ */ Te(() => mr(a)), u = /* @__PURE__ */ Te(() => {
    var A, V;
    return {
      ...i(),
      ...(V = (A = o()) == null ? void 0 : A.data) == null ? void 0 : V.parameters[s()]
    };
  });
  const { updateNodeData: c } = Ot(), f = (A, V) => {
    c(a, (D) => {
      let I = D.data.parameters;
      return I[s()][A] = V, { parameters: I };
    });
  }, d = (A) => {
    const V = A.target.value;
    f("name", V);
  }, h = (A) => {
    const V = A.target.checked;
    f("required", V);
  }, v = (A) => {
    const V = A.value;
    V && f("dataType", V);
  };
  let _;
  const b = () => {
    c(a, (A) => {
      let V = A.data.parameters;
      return V.splice(s(), 1), { parameters: [...V] };
    }), _ == null || _.hide();
  };
  var E = Xm(), m = we(E), C = F(m);
  Ct(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z(m);
  var p = R(m, 2), k = F(p);
  yd(k, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), Z(p);
  var S = R(p, 2), $ = F(S);
  bn(
    Bo($, {
      placement: "bottom",
      floating: (V) => {
        var D = Zm(), I = F(D), z = R(F(I));
        const P = /* @__PURE__ */ Te(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        Cn(z, {
          items: Vd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(P);
          }
        }), Z(I);
        var M = R(I, 2), x = R(F(M));
        Pt(x, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (X) => {
            const q = X.target.value;
            f("defaultValue", q);
          }
        }), Z(M);
        var N = R(M, 2), T = R(F(N));
        Pt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (X) => {
            const q = X.target.value;
            f("description", q);
          }
        }), Z(N);
        var L = R(N, 2), B = F(L);
        je(B, {
          onclick: b,
          children: (X, q) => {
            Ne();
            var ue = Re("删除");
            O(X, ue);
          },
          $$slots: { default: !0 }
        }), Z(L), Z(D), O(V, D);
      },
      children: (V, D) => {
        je(V, {
          class: "input-btn-more",
          children: (I, z) => {
            var P = Fm();
            O(I, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => _ = V,
    () => _
  ), Z(S), O(e, E);
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
ae(Ad, { parameter: {}, index: {} }, [], [], !0);
var Km = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), qm = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), Gm = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Um = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Dd(e, t) {
  de(t, !0), et(e, Um);
  const [n, r] = it(), o = () => Q(g(s), "$node", n);
  let i = ht(), s = /* @__PURE__ */ Te(() => mr(i)), a = /* @__PURE__ */ Te(() => {
    var d, h;
    return [...((h = (d = o()) == null ? void 0 : d.data) == null ? void 0 : h.parameters) || []];
  });
  var l = Gm(), u = F(l);
  {
    var c = (d) => {
      var h = Km();
      Ne(4), O(d, h);
    };
    xe(u, (d) => {
      g(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  Dt(
    f,
    19,
    () => g(a),
    (d) => d.id,
    (d, h, v) => {
      Ad(d, {
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
  ), Z(l), O(e, l), fe(), r();
}
ae(Dd, {}, [], [], !0);
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
var jm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Jm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qm = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
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
  return gn(e, ct(() => r, {
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
      var u = Qm(), c = we(u), f = F(c);
      Qe(f, {
        level: 3,
        children: (v, _) => {
          Ne();
          var b = Re("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = R(f, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, _) => {
          var b = Jm();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var h = R(c, 2);
      Dd(h, {}), O(a, u);
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
  const t = ht(), n = mr(t), { nodes: r, edges: o } = Je();
  return Kn([n, r, o], ([i, s, a]) => {
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
  const [n, r] = it(), o = () => Q(g(c), "$node", n), i = () => Q(p, "$selectItems", n);
  Wt(() => {
    g(f).refType || E({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Te(() => mr(u)), f = /* @__PURE__ */ Te(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Ot(), h = (M, x) => {
    d(u, (N) => {
      let T = N.data[l()];
      return T[a()] = { ...T[a()], [M]: x }, { [l()]: T };
    });
  }, v = (M) => {
    const x = M.target.value;
    h("name", x);
  }, _ = (M) => {
    const x = M.target.value;
    h("value", x);
  }, b = (M) => {
    const x = M.value;
    h("ref", x);
  }, E = (M) => {
    const x = M.value;
    h("refType", x);
  };
  let m;
  const C = () => {
    d(u, (M) => {
      let x = M.data[l()];
      return x.splice(a(), 1), { [l()]: [...x] };
    }), m == null || m.hide();
  }, p = ty();
  var k = ry(), S = we(k), $ = F(S);
  Ct($, {
    style: "width: 100%;",
    get value() {
      return g(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(S);
  var H = R(S, 2), A = F(H);
  {
    var V = (M) => {
      Ct(M, {
        get value() {
          return g(f).value;
        },
        placeholder: "请输入参数值",
        oninput: _
      });
    }, D = (M, x) => {
      {
        var N = (T) => {
          const L = /* @__PURE__ */ Te(() => [g(f).ref]);
          Cn(T, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(L);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        xe(
          M,
          (T) => {
            g(f).refType !== "input" && T(N);
          },
          x
        );
      }
    };
    xe(A, (M) => {
      g(f).refType === "fixed" ? M(V) : M(D, !1);
    });
  }
  Z(H);
  var I = R(H, 2), z = F(I);
  bn(
    Bo(z, {
      placement: "bottom",
      floating: (x) => {
        var N = ny(), T = F(N), L = R(F(T));
        const B = /* @__PURE__ */ Te(() => g(f).refType ? [g(f).refType] : []);
        Cn(L, {
          items: Ym,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(B);
          },
          onSelect: E
        }), Z(T);
        var X = R(T, 2), q = R(F(X));
        Pt(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (he) => {
            const _e = he.target.value;
            h("defaultValue", _e);
          }
        }), Z(X);
        var ue = R(X, 2), ee = R(F(ue));
        Pt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (he) => {
            const _e = he.target.value;
            h("description", _e);
          }
        }), Z(ue);
        var W = R(ue, 2), re = F(W);
        je(re, {
          onclick: C,
          children: (he, _e) => {
            Ne();
            var le = Re("删除");
            O(he, le);
          },
          $$slots: { default: !0 }
        }), Z(W), Z(N), O(x, N);
      },
      children: (x, N) => {
        Qi(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => m = x,
    () => m
  ), Z(I), O(e, k);
  var P = fe({
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
  return r(), P;
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
  const [n, r] = it(), o = () => Q(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = /* @__PURE__ */ Te(() => mr(a)), u = /* @__PURE__ */ Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = ay(), f = F(c);
  {
    var d = (_) => {
      var b = iy();
      Ne(4), O(_, b);
    };
    xe(f, (_) => {
      g(u).length !== 0 && _(d);
    });
  }
  var h = R(f, 2);
  Dt(
    h,
    19,
    () => g(u),
    (_) => _.id,
    (_, b, E) => {
      zd(_, {
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
    (_) => {
      var b = sy(), E = F(b, !0);
      Z(b), ke(() => Zt(E, i())), O(_, b);
    }
  ), Z(c), O(e, c);
  var v = fe({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(_ = "无输入参数") {
      i(_), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(_ = "parameters") {
      s(_), y();
    }
  });
  return r(), v;
}
ae(Bt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var uy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), cy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
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
  return gn(e, ct(
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
        var u = dy(), c = we(u), f = F(c);
        Qe(f, {
          level: 3,
          children: (v, _) => {
            Ne();
            var b = Re("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = R(f, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, _) => {
            var b = cy();
            O(v, b);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var h = R(c, 2);
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
var gy = /* @__PURE__ */ be('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), hy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), vy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), py = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const my = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Bd(e, t) {
  de(t, !0), et(e, my);
  const [n, r] = it(), o = () => Q(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Te(() => mr(l)), c = /* @__PURE__ */ Te(() => {
    var L;
    let N = (L = o()) == null ? void 0 : L.data[a()], T;
    if (N && s().length > 0) {
      let B = N;
      for (let X = 0; X < s().length; X++) {
        const q = s()[X];
        X == s().length - 1 ? T = B[q] : B = B[q].children;
      }
    }
    return { ...i(), ...T };
  });
  const { updateNodeData: f } = Ot(), d = (N, T) => {
    f(l, (L) => {
      const B = L.data[a()];
      if (B && s().length > 0) {
        let X = B;
        for (let q = 0; q < s().length; q++) {
          const ue = s()[q];
          q == s().length - 1 ? X[ue] = { ...X[ue], [N]: T } : X = B[ue].children;
        }
      }
      return { [a()]: B };
    });
  }, h = (N) => {
    const T = N.target.value;
    d("name", T);
  }, v = (N) => {
    const T = N.value;
    d("dataType", T);
  };
  let _;
  const b = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let L = T;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? L.splice(X, 1) : L = L[X].children;
        }
      }
      return { [a()]: [...T] };
    }), _ == null || _.hide();
  }, E = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let L = T;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? L[X].children ? L[X].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : L[X].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[X].children;
        }
      }
      return { [a()]: [...T] };
    });
  };
  var m = py(), C = we(m), p = F(C);
  {
    var k = (N) => {
      var T = tt(), L = we(T);
      Dt(L, 17, s, po, (B, X) => {
        Ne();
        var q = Re(" ");
        O(B, q);
      }), O(N, T);
    };
    xe(p, (N) => {
      s().length > 1 && N(k);
    });
  }
  var S = R(p, 2);
  const $ = /* @__PURE__ */ Te(() => g(c).nameDisabled === !0);
  Ct(S, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: h,
    get disabled() {
      return g($);
    }
  }), Z(C);
  var H = R(C, 2), A = F(H);
  const V = /* @__PURE__ */ Te(() => g(c).dataType ? [g(c).dataType] : []), D = /* @__PURE__ */ Te(() => g(c).dataTypeDisabled === !0);
  Cn(A, {
    items: Vd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(V);
    },
    get disabled() {
      return g(D);
    },
    onSelect: v
  });
  var I = R(A, 2);
  {
    var z = (N) => {
      je(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (T, L) => {
          var B = gy();
          O(T, B);
        },
        $$slots: { default: !0 }
      });
    };
    xe(I, (N) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && N(z);
    });
  }
  Z(H);
  var P = R(H, 2), M = F(P);
  bn(
    Bo(M, {
      placement: "bottom",
      floating: (T) => {
        var L = vy(), B = F(L), X = R(F(B));
        Pt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            const he = re.target.value;
            d("defaultValue", he);
          }
        }), Z(B);
        var q = R(B, 2), ue = R(F(q));
        Pt(ue, {
          rows: 3,
          style: "width: 100%;",
          onchange: (re) => {
            const he = re.target.value;
            d("description", he);
          }
        }), Z(q);
        var ee = R(q, 2);
        {
          var W = (re) => {
            var he = hy(), _e = F(he);
            je(_e, {
              onclick: b,
              children: (le, Ie) => {
                Ne();
                var G = Re("删除");
                O(le, G);
              },
              $$slots: { default: !0 }
            }), Z(he), O(re, he);
          };
          xe(ee, (re) => {
            g(c).deleteDisabled !== !0 && re(W);
          });
        }
        Z(L), O(T, L);
      },
      children: (T, L) => {
        Qi(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => _ = T,
    () => _
  ), Z(P), O(e, m);
  var x = fe({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), y();
    },
    get position() {
      return s();
    },
    set position(N) {
      s(N), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(N) {
      a(N), y();
    }
  });
  return r(), x;
}
ae(Bd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ oe("<!> <!>", 1), wy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), xy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const by = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  de(t, !0), et(e, by);
  const [n, r] = it(), o = () => Q(g(u), "$node", n), i = (b, E = ft, m = ft) => {
    var C = tt(), p = we(C);
    Dt(
      p,
      19,
      E,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, S, $) => {
        var H = yy(), A = we(H);
        const V = /* @__PURE__ */ Te(() => [...m(), g($)]);
        Bd(A, {
          get parameter() {
            return g(S);
          },
          get position() {
            return g(V);
          },
          get dataKeyName() {
            return a();
          }
        });
        var D = R(A, 2);
        {
          var I = (z) => {
            var P = /* @__PURE__ */ pe(() => [...m(), g($)]);
            i(z, () => g(S).children, () => g(P));
          };
          xe(D, (z) => {
            g(S).children && z(I);
          });
        }
        O(k, H);
      },
      (k) => {
        var S = tt(), $ = we(S);
        {
          var H = (A) => {
            var V = wy(), D = F(V, !0);
            Z(V), ke(() => Zt(D, s())), O(A, V);
          };
          xe($, (A) => {
            m().length === 0 && A(H);
          });
        }
        O(k, S);
      }
    ), O(b, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Te(() => mr(l)), c = /* @__PURE__ */ Te(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var f = xy(), d = F(f);
  {
    var h = (b) => {
      var E = _y();
      Ne(4), O(b, E);
    };
    xe(d, (b) => {
      g(c).length !== 0 && b(h);
    });
  }
  var v = R(d, 2);
  i(v, () => g(c) || [], () => []), Z(f), O(e, f);
  var _ = fe({
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
  return r(), _;
}
ae(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ky = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ oe('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Sy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Yd(e, t) {
  de(t, !0), et(e, Sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = nr();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return gn(e, ct(
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
        var d = $y(), h = we(d), v = F(h);
        Qe(v, {
          level: 3,
          children: (G, se) => {
            Ne();
            var Me = Re("输入参数");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var _ = R(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (G, se) => {
            var Me = ky();
            O(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var b = R(h, 2);
        Bt(b, {});
        var E = R(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Ne();
            var Me = Re("模型设置");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = F(m);
        const p = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        Cn(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (G) => {
            const se = G.value;
            l(o, () => ({ llmId: se }));
          },
          get value() {
            return g(p);
          }
        });
        var k = R(C, 2);
        Qi(k, {}), Z(m);
        var S = R(m, 4), $ = F(S), H = F($), A = F(H);
        Z(H);
        var V = R(H, 2);
        lo(V), Z($), Z(S);
        var D = R(S, 2), I = F(D), z = F(I), P = F(z);
        Z(z);
        var M = R(z, 2);
        lo(M), Z(I), Z(D);
        var x = R(D, 2), N = F(x), T = F(N), L = F(T);
        Z(T);
        var B = R(T, 2);
        lo(B), Z(N), Z(x);
        var X = R(x, 4), q = F(X);
        const ue = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        Pt(q, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(ue);
          },
          oninput: (G) => {
            l(o, { systemPrompt: G.target.value });
          }
        }), Z(X);
        var ee = R(X, 4), W = F(ee);
        const re = /* @__PURE__ */ Te(() => n().userPrompt || "");
        Pt(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(re);
          },
          oninput: (G) => {
            l(o, { userPrompt: G.target.value });
          }
        }), Z(ee);
        var he = R(ee, 2), _e = F(he);
        Qe(_e, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Ne();
            var Me = Re("输出参数");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var le = R(_e, 2);
        je(le, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (G, se) => {
            var Me = Ey();
            O(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(he);
        var Ie = R(he, 2);
        Rn(Ie, {}), ke(() => {
          Zt(A, `Temperature: ${n().temperature ?? 0.5}`), is(V, n().temperature ?? 0.5), Zt(P, `Top P: ${n().topP ?? 0.9}`), is(M, n().topP ?? 0.9), Zt(L, `Top K: ${n().topK ?? 50}`), is(B, n().topK ?? 50);
        }), Ze("mousedown", V, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", V, (G) => l(o, { temperature: parseFloat(G.target.value) })), Ze("mousedown", M, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", M, (G) => l(o, { topP: parseFloat(G.target.value) })), Ze("mousedown", B, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", B, (G) => l(o, { topK: parseInt(G.target.value) })), O(c, d);
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
var Py = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ny = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
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
  return gn(e, ct(
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
        var f = My(), d = we(f), h = F(d);
        Qe(h, {
          level: 3,
          children: (D, I) => {
            Ne();
            var z = Re("输入参数");
            O(D, z);
          },
          $$slots: { default: !0 }
        });
        var v = R(h, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, I) => {
            var z = Ny();
            O(D, z);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var _ = R(d, 2);
        Bt(_, {});
        var b = R(_, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            Ne();
            var z = Re("代码");
            O(D, z);
          },
          $$slots: { default: !0 }
        });
        var E = R(b, 4), m = F(E);
        const C = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        Cn(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const I = D.value;
            s(o, () => ({ engine: I }));
          },
          get value() {
            return g(C);
          }
        }), Z(E);
        var p = R(E, 4), k = F(p);
        const S = /* @__PURE__ */ Te(() => n().code || "");
        Pt(k, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (D) => {
            s(o, () => ({ code: D.target.value }));
          },
          get value() {
            return g(S);
          }
        }), Z(p);
        var $ = R(p, 2), H = F($);
        Qe(H, {
          level: 3,
          mt: "10px",
          children: (D, I) => {
            Ne();
            var z = Re("输出参数");
            O(D, z);
          },
          $$slots: { default: !0 }
        });
        var A = R(H, 2);
        je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, I) => {
            var z = Ty();
            O(D, z);
          },
          $$slots: { default: !0 }
        }), Z($);
        var V = R($, 2);
        Rn(V, {}), O(u, f);
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
var Vy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ay = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
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
  return Un(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), gn(e, ct(
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
        var c = Dy(), f = we(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (S, $) => {
            Ne();
            var H = Re("输入参数");
            O(S, H);
          },
          $$slots: { default: !0 }
        });
        var h = R(d, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, $) => {
            var H = Ay();
            O(S, H);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var v = R(f, 2);
        Bt(v, {});
        var _ = R(v, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          children: (S, $) => {
            Ne();
            var H = Re("代码");
            O(S, H);
          },
          $$slots: { default: !0 }
        });
        var b = R(_, 4), E = F(b);
        const m = /* @__PURE__ */ Te(() => n().template || "");
        Pt(E, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (S) => {
            s(o, () => ({ template: S.target.value }));
          },
          get value() {
            return g(m);
          }
        }), Z(b);
        var C = R(b, 2), p = F(C);
        Qe(p, {
          level: 3,
          mt: "10px",
          children: (S, $) => {
            Ne();
            var H = Re("输出参数");
            O(S, H);
          },
          $$slots: { default: !0 }
        }), Z(C);
        var k = R(C, 2);
        Rn(k, {}), O(l, c);
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
var Ly = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Iy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Yy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Fy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Xy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Wy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
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
  return gn(e, ct(
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
        var f = Ky(), d = we(f), h = F(d), v = F(h);
        const _ = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        Cn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ie) => {
            const ve = ie.value;
            a(i, () => ({ method: ve }));
          },
          get value() {
            return g(_);
          }
        }), Z(h);
        var b = R(h, 2), E = F(b);
        const m = /* @__PURE__ */ Te(() => n().url || "");
        Ct(E, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ie) => {
            a(i, () => ({ url: ie.target.value }));
          },
          get value() {
            return g(m);
          }
        }), Z(b), Z(d);
        var C = R(d, 2), p = F(C);
        Qe(p, {
          level: 3,
          children: (ie, ve) => {
            Ne();
            var $e = Re("Http 头信息");
            O(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var k = R(p, 2);
        je(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ie, ve) => {
            var $e = Iy();
            O(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z(C);
        var S = R(C, 2);
        Bt(S, { dataKeyName: "headers" });
        var $ = R(S, 2), H = F($);
        Qe(H, {
          level: 3,
          children: (ie, ve) => {
            Ne();
            var $e = Re("参数");
            O(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var A = R(H, 2);
        je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (ie, ve) => {
            var $e = zy();
            O(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z($);
        var V = R($, 2);
        Bt(V, { dataKeyName: "urlParameters" });
        var D = R(V, 2);
        Qe(D, {
          level: 3,
          mt: "10px",
          children: (ie, ve) => {
            Ne();
            var $e = Re("Body");
            O(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var I = R(D, 2), z = F(I), P = F(z);
        const M = /* @__PURE__ */ Te(() => !n().bodyType);
        Ct(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(M);
          },
          onchange: (ie) => {
            var ve;
            (ve = ie.target) != null && ve.checked && a(i, { bodyType: "" });
          }
        }), Ne(), Z(z);
        var x = R(z, 2), N = F(x);
        const T = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        Ct(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(T);
          },
          onchange: (ie) => {
            var ve;
            (ve = ie.target) != null && ve.checked && a(i, { bodyType: "form-data" });
          }
        }), Ne(), Z(x);
        var L = R(x, 2), B = F(L);
        const X = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        Ct(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(X);
          },
          onchange: (ie) => {
            var ve;
            (ve = ie.target) != null && ve.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), Z(L);
        var q = R(L, 2), ue = F(q);
        const ee = /* @__PURE__ */ Te(() => n().bodyType === "json");
        Ct(ue, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(ee);
          },
          onchange: (ie) => {
            var ve;
            (ve = ie.target) != null && ve.checked && a(i, { bodyType: "json" });
          }
        }), Ne(), Z(q);
        var W = R(q, 2), re = F(W);
        const he = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        Ct(re, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(he);
          },
          onchange: (ie) => {
            var ve;
            (ve = ie.target) != null && ve.checked && a(i, { bodyType: "raw" });
          }
        }), Ne(), Z(W), Z(I);
        var _e = R(I, 2);
        {
          var le = (ie) => {
            var ve = By(), $e = we(ve), Se = F($e);
            Qe(Se, {
              level: 3,
              children: (J, Ye) => {
                Ne();
                var ce = Re("参数");
                O(J, ce);
              },
              $$slots: { default: !0 }
            });
            var at = R(Se, 2);
            je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (J, Ye) => {
                var ce = Ry();
                O(J, ce);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var ut = R($e, 2);
            Bt(ut, { dataKeyName: "fromData" }), O(ie, ve);
          };
          xe(_e, (ie) => {
            n().bodyType === "form-data" && ie(le);
          });
        }
        var Ie = R(_e, 2);
        {
          var G = (ie) => {
            var ve = Zy(), $e = we(ve), Se = F($e);
            Qe(Se, {
              level: 3,
              children: (J, Ye) => {
                Ne();
                var ce = Re("参数");
                O(J, ce);
              },
              $$slots: { default: !0 }
            });
            var at = R(Se, 2);
            je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (J, Ye) => {
                var ce = Yy();
                O(J, ce);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var ut = R($e, 2);
            Bt(ut, { dataKeyName: "fromUrlencoded" }), O(ie, ve);
          };
          xe(Ie, (ie) => {
            n().bodyType === "x-www-form-urlencoded" && ie(G);
          });
        }
        var se = R(Ie, 2);
        {
          var Me = (ie) => {
            var ve = Fy(), $e = F(ve);
            Pt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Se) => {
                a(i, { bodyJson: Se.target.value });
              }
            }), Z(ve), O(ie, ve);
          };
          xe(se, (ie) => {
            n().bodyType === "json" && ie(Me);
          });
        }
        var Oe = R(se, 2);
        {
          var Xe = (ie) => {
            var ve = Xy(), $e = F(ve);
            Pt($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Se) => {
                a(i, { bodyRaw: Se.target.value });
              }
            }), Z(ve), O(ie, ve);
          };
          xe(Oe, (ie) => {
            n().bodyType === "raw" && ie(Xe);
          });
        }
        var te = R(Oe, 2), We = F(te);
        Qe(We, {
          level: 3,
          mt: "10px",
          children: (ie, ve) => {
            Ne();
            var $e = Re("输出参数");
            O(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var Ue = R(We, 2);
        je(Ue, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ie, ve) => {
            var $e = Wy();
            O(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z(te);
        var Be = R(te, 2);
        Rn(Be, {}), O(u, f);
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
var Gy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Uy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
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
  ]), o = ht(), { addParameter: i } = Sn(), s = nr();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return Un(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), gn(e, ct(
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
        var d = jy(), h = we(d), v = F(h);
        Qe(v, {
          level: 3,
          children: (V, D) => {
            Ne();
            var I = Re("输入参数");
            O(V, I);
          },
          $$slots: { default: !0 }
        });
        var _ = R(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, D) => {
            var I = Uy();
            O(V, I);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var b = R(h, 2);
        Bt(b, {});
        var E = R(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (V, D) => {
            Ne();
            var I = Re("知识库设置");
            O(V, I);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = F(m);
        const p = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        Cn(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (V) => {
            const D = V.value;
            l(o, () => ({ knowledgeId: D }));
          },
          get value() {
            return g(p);
          }
        }), Z(m);
        var k = R(m, 4), S = F(k);
        Ct(S, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(k);
        var $ = R(k, 2), H = F($);
        Qe(H, {
          level: 3,
          mt: "10px",
          children: (V, D) => {
            Ne();
            var I = Re("输出参数");
            O(V, I);
          },
          $$slots: { default: !0 }
        }), Z($);
        var A = R($, 2);
        Rn(A, {}), O(c, d);
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
var Qy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ew = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
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
  ]), o = ht(), { addParameter: i } = Sn(), s = nr();
  let a = /* @__PURE__ */ bt(jt([]));
  Wt(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return Un(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), gn(e, ct(
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
        var d = tw(), h = we(d), v = F(h);
        Qe(v, {
          level: 3,
          children: (x, N) => {
            Ne();
            var T = Re("输入参数");
            O(x, T);
          },
          $$slots: { default: !0 }
        });
        var _ = R(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, N) => {
            var T = ew();
            O(x, T);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var b = R(h, 2);
        Bt(b, {});
        var E = R(b, 2);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            Ne();
            var T = Re("搜索引擎设置");
            O(x, T);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = F(m);
        const p = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        Cn(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (x) => {
            const N = x.value;
            l(o, () => ({ knowledgeId: N }));
          },
          get value() {
            return g(p);
          }
        }), Z(m);
        var k = R(m, 4), S = F(k);
        Ct(S, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(k);
        var $ = R(k, 4), H = F($);
        Ct(H, { placeholder: "请输入关键字", style: "width: 100%" }), Z($);
        var A = R($, 4), V = F(A);
        Ct(V, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(A);
        var D = R(A, 4), I = F(D);
        Pt(I, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(D);
        var z = R(D, 2), P = F(z);
        Qe(P, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            Ne();
            var T = Re("输出参数");
            O(x, T);
          },
          $$slots: { default: !0 }
        }), Z(z);
        var M = R(z, 2);
        Rn(M, {}), O(c, d);
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
var rw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), ow = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
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
  ]), o = ht(), { addParameter: i } = Sn(), s = nr();
  let a = /* @__PURE__ */ bt(jt([]));
  return Wt(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    g(a).push(...l || []);
  }), gn(e, ct(
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
        Jn(c, {
          type: "source",
          get position() {
            return Ce.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, f) => {
        var d = iw(), h = we(d), v = F(h);
        Qe(v, {
          level: 3,
          children: (p, k) => {
            Ne();
            var S = Re("循环变量");
            O(p, S);
          },
          $$slots: { default: !0 }
        });
        var _ = R(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (p, k) => {
            var S = ow();
            O(p, S);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var b = R(h, 2);
        Bt(b, {});
        var E = R(b, 2), m = F(E);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (p, k) => {
            Ne();
            var S = Re("输出参数");
            O(p, S);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var C = R(E, 2);
        Rn(C, {}), O(c, d);
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
  return je(e, {
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
      var c = lw(), f = we(c);
      aa(f, n);
      var d = R(f);
      ke(() => Zt(d, ` ${r() ?? ""}`)), O(l, c);
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
var uw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), cw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), dw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
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
  ], s = [], a = nr().customNodes;
  if (a) {
    const b = Object.keys(a).sort((E, m) => (a[E].sortNo || 0) - (a[m].sortNo || 0));
    for (let E of b)
      s.push({
        icon: a[E].icon,
        title: a[E].title,
        type: E
      });
  }
  var l = dw(), u = F(l), c = F(u), f = F(c);
  wd(f, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      U(n, b.value.toString(), !0);
    }
  }), Z(c);
  var d = R(c, 2), h = F(d);
  Dt(h, 21, () => o, po, (b, E) => {
    Fs(b, ct(() => g(E)));
  }), Z(h);
  var v = R(h, 2);
  Dt(v, 21, () => s, po, (b, E) => {
    Fs(b, ct(() => g(E)));
  }), Z(v), Z(d), Z(u);
  var _ = R(u, 2);
  je(_, {
    onclick: () => {
      U(r, g(r) ? "" : "show", !0);
    },
    children: (b, E) => {
      var m = tt(), C = we(m);
      {
        var p = (S) => {
          var $ = uw();
          O(S, $);
        }, k = (S) => {
          var $ = cw();
          O(S, $);
        };
        xe(C, (S) => {
          g(r) === "show" ? S(p) : S(k, !1);
        });
      }
      O(b, m);
    },
    $$slots: { default: !0 }
  }), Z(l), ke(() => {
    mt(l, 1, `tf-toolbar ${g(r) ?? ""}`), dt(h, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), dt(v, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, l), fe();
}
ae(Gd, {}, [], [], !0);
const fw = () => {
  const { nodeLookup: e } = Je();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, gw = () => {
  const { nodes: e } = Je();
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
  const { edges: e } = Je();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var vw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), mw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), ww = /* @__PURE__ */ oe("<!> <div></div> <!>", 1);
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
  ]), o = ht(), { addParameter: i } = Sn(), s = Ot(), a = { ...r, id: o, data: n() }, l = document.createElement("div"), c = nr().customNodes[t.type];
  (h = c.render) == null || h.call(c, l, a, s);
  let f;
  Un(() => {
    n().expand && f && f.append(l);
  }), Un(() => {
    var v;
    n() && ((v = c.onUpdate) == null || v.call(c, l, { ...a, data: n() }));
  });
  const d = /* @__PURE__ */ Te(() => ({
    ...n(),
    description: c.description
  }));
  return gn(e, ct(
    {
      get data() {
        return g(d);
      }
    },
    () => r,
    {
      icon: (_) => {
        var b = tt(), E = we(b);
        aa(E, () => c.icon), O(_, b);
      },
      children: (_, b) => {
        var E = ww(), m = we(E);
        {
          var C = ($) => {
            var H = pw(), A = we(H), V = F(A);
            Qe(V, {
              level: 3,
              children: (z, P) => {
                Ne();
                var M = Re("输入参数");
                O(z, M);
              },
              $$slots: { default: !0 }
            });
            var D = R(V, 2);
            je(D, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o);
              },
              children: (z, P) => {
                var M = vw();
                O(z, M);
              },
              $$slots: { default: !0 }
            }), Z(A);
            var I = R(A, 2);
            Bt(I, {}), O($, H);
          };
          xe(m, ($) => {
            c.parametersEnable !== !1 && $(C);
          });
        }
        var p = R(m, 2);
        bn(p, ($) => f = $, () => f);
        var k = R(p, 2);
        {
          var S = ($) => {
            var H = yw(), A = we(H), V = F(A);
            Qe(V, {
              level: 3,
              mt: "10px",
              children: (z, P) => {
                Ne();
                var M = Re("输出参数");
                O(z, M);
              },
              $$slots: { default: !0 }
            });
            var D = R(V, 2);
            je(D, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (z, P) => {
                var M = mw();
                O(z, M);
              },
              $$slots: { default: !0 }
            }), Z(A);
            var I = R(A, 2);
            Rn(I, {}), O($, H);
          };
          xe(k, ($) => {
            c.outputDefsEnable !== !1 && $(S);
          });
        }
        ke(() => {
          dt(p, c.rootStyle || ""), mt(p, 1, dn(c.rootClass), "svelte-c71dg3");
        }), O(_, E);
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
  const n = w(t, "onInit", 7), r = Ot();
  n()(r);
  let o = /* @__PURE__ */ bt(!1);
  const i = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, s = (S) => {
    var D;
    S.preventDefault();
    const $ = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), H = (D = S.dataTransfer) == null ? void 0 : D.getData("application/tinyflow"), A = H ? JSON.parse(H) : {}, V = {
      id: `node_${Zr()}`,
      position: $,
      data: {},
      ...A
    };
    oi.addNode(V), oi.selectNodeOnly(V.id);
  }, { getNode: a } = fw(), l = (S) => {
    const $ = a(S.source), H = a(S.target);
    if (S.sourceHandle === "loop_handle" || $.parentId) {
      const A = r.getEdges();
      for (let V of A)
        if (V.target === S.target) {
          const D = a(V.source);
          if (S.sourceHandle === "loop_handle" && D.parentId !== $.id || $.parentId && D.parentId !== $.parentId)
            return !1;
        }
    }
    return !(!$.parentId && H.parentId && H.parentId !== $.id);
  }, { ensureParentInNodesBefore: u } = gw(), c = (S, $) => {
    if (!$.isValid)
      return;
    const H = $.toNode;
    if (H.parentId)
      return;
    const A = $.fromNode, V = $.fromHandle, D = { position: { ...H.position } };
    if (V.id === "loop_handle" ? D.parentId = A.id : A.parentId && (D.parentId = A.parentId), D.parentId) {
      const I = a(D.parentId);
      D.position = {
        x: H.position.x - I.position.x,
        y: H.position.y - I.position.y
      }, u(D.parentId, H.id), r.updateNode(H.id, D);
    }
  }, { getEdgesByTarget: f } = hw(), d = (S) => {
    S.edges.forEach((H) => {
      const A = a(H.target);
      if (A.parentId) {
        const V = f(H.target), D = a(A.parentId);
        if (V.length === 0)
          r.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + D.position.x,
              y: A.position.y + D.position.y
            }
          });
        else {
          let I = !1;
          for (let z = 0; z < V.length; z++) {
            const P = V[z], M = a(P.source);
            if (M.parentId || M.type === "loopNode") {
              I = !0;
              break;
            }
          }
          I || r.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + D.position.x,
              y: A.position.y + D.position.y
            }
          });
        }
      }
    });
  }, h = (S, $) => {
  }, v = (S) => {
  }, _ = {}, b = nr().customNodes;
  if (b)
    for (let S of Object.keys(b))
      _[S] = Ud;
  var E = Cw(), m = F(E);
  Gd(m, {});
  var C = R(m, 2);
  const p = /* @__PURE__ */ Te(() => ({ ...aw, ..._ })), k = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return od(C, ct(
    {
      get nodeTypes() {
        return g(p);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: h,
      onconnect: v,
      connectionRadius: 50,
      ondelete: d,
      onclick: (S) => {
        const $ = S.target;
        $.classList.contains("svelte-flow__edge-interaction") || $.classList.contains("panel-content") || $.closest(".panel-content") || U(o, !1);
      },
      get defaultEdgeOptions() {
        return g(k);
      },
      $$events: {
        drop: s,
        dragover: i,
        edgeclick: () => {
          U(o, !0);
        }
      },
      children: (S, $) => {
        var H = bw(), A = we(H);
        hd(A, {});
        var V = R(A, 2);
        dd(V, {});
        var D = R(V, 2);
        pd(D, {});
        var I = R(D, 2);
        {
          var z = (P) => {
            Lo(P, {
              children: (M, x) => {
                var N = xw(), T = R(F(N), 4), L = F(T);
                Pt(L, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (B) => {
                  }
                }), Z(T), Z(N), O(M, N);
              },
              $$slots: { default: !0 }
            });
          };
          xe(I, (P) => {
            g(o) && P(z);
          });
        }
        O(S, H);
      },
      $$slots: { default: !0 }
    }
  )), Z(E), O(e, E), fe({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), y();
    }
  });
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
  return oi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ar("tinyflow_options", n()), id(e, {
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
