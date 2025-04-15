var ff = Object.defineProperty;
var La = (e) => {
  throw TypeError(e);
};
var gf = (e, t, n) => t in e ? ff(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _t = (e, t, n) => gf(e, typeof t != "symbol" ? t + "" : t, n), ns = (e, t, n) => t.has(e) || La("Cannot " + n);
var lt = (e, t, n) => (ns(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? La("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Jr = (e, t, n, r) => (ns(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ia = (e, t, n) => (ns(e, t, "access private method"), n);
const hf = "5";
var Kl;
typeof window < "u" && ((Kl = window.__svelte ?? (window.__svelte = {})).v ?? (Kl.v = /* @__PURE__ */ new Set())).add(hf);
let Fr = !1, vf = !1;
function pf() {
  Fr = !0;
}
pf();
const Fs = 1, Xs = 2, Gl = 4, mf = 8, yf = 16, wf = 1, _f = 2, Ul = 4, xf = 8, bf = 16, jl = 1, Cf = 2, Ws = "[", qs = "[!", Ks = "]", br = {}, Tt = Symbol(), kf = "http://www.w3.org/1999/xhtml", $f = "http://www.w3.org/2000/svg", za = !1;
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Po = Array.isArray, Ef = Array.prototype.indexOf, Gs = Array.from, si = Object.keys, uo = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Jl = Object.getOwnPropertyDescriptors, Sf = Object.prototype, Pf = Array.prototype, Us = Object.getPrototypeOf, Ra = Object.isExtensible;
function Qr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Nf(e) {
  return e();
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const an = 2, Ql = 4, Vi = 8, js = 16, In = 32, hr = 64, ai = 128, Yt = 256, li = 512, St = 1024, wn = 2048, tr = 4096, Vn = 8192, Di = 16384, Tf = 32768, Xr = 65536, Mf = 1 << 17, Hf = 1 << 19, eu = 1 << 20, ys = 1 << 21, Wn = Symbol("$state"), Js = Symbol("legacy props"), Vf = Symbol("");
function Df(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Af() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Of(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Lf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function If() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function zf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Rf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Yf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ai(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function Rt(e) {
  Se = e;
}
let Le;
function $t(e) {
  if (e === null)
    throw Ai(), br;
  return Le = e;
}
function _n() {
  return $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $n(Le)
  );
}
function F(e) {
  if (Se) {
    if (/* @__PURE__ */ $n(Le) !== null)
      throw Ai(), br;
    Le = e;
  }
}
function He(e = 1) {
  if (Se) {
    for (var t = e, n = Le; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(n);
    Le = n;
  }
}
function ws() {
  for (var e = 0, t = Le; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ks) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ws || n === qs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $n(t)
    );
    t.remove(), t = r;
  }
}
function on(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = Us(e);
  if (t !== Sf && t !== Pf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Po(e), o = /* @__PURE__ */ bt(0), i = Ke, s = (a) => {
    var l = Ke;
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rf();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ bt(u.value)), n.set(l, c)) : G(
          c,
          s(() => on(u.value))
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
          G(u, Tt), Ba(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Wn)
          return e;
        var c = n.get(l), f = l in a;
        if (c === void 0 && (!f || (h = Hn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ bt(on(f ? a[l] : Tt))), n.set(l, c)), c !== void 0) {
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
        if (l === Wn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== Tt || Reflect.has(a, l);
        if (u !== void 0 || Ge !== null && (!c || (d = Hn(a, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ bt(c ? on(a[l]) : Tt)), n.set(l, u));
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
          s(() => on(u))
        ), n.set(l, f)) : (d = f.v !== Tt, G(
          f,
          s(() => on(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_ != null && _.set && _.set.call(c, u), !d) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= b.v && G(b, $ + 1);
          }
          Ba(o);
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
        Bf();
      }
    }
  );
}
function Ba(e, t = 1) {
  G(e, e.v + t);
}
var Mt, tu, nu, ru;
function _s() {
  if (Mt === void 0) {
    Mt = window, tu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    nu = Hn(t, "firstChild").get, ru = Hn(t, "nextSibling").get, Ra(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ra(n) && (n.__t = void 0);
  }
}
function An(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return nu.call(e);
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return ru.call(e);
}
function X(e, t) {
  if (!Se)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(Le)
  );
  if (n === null)
    n = Le.appendChild(An());
  else if (t && n.nodeType !== 3) {
    var r = An();
    return n == null || n.before(r), $t(r), r;
  }
  return $t(n), n;
}
function _e(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $n(n) : n;
  }
  return Le;
}
function B(e, t = 1, n = !1) {
  let r = Se ? Le : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ $n(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = An();
    return r === null ? o == null || o.after(s) : r.before(s), $t(s), s;
  }
  return $t(r), /** @type {TemplateNode} */
  r;
}
function Qs(e) {
  e.textContent = "";
}
function ou(e) {
  return e === this.v;
}
function ea(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ta(e) {
  return !ea(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = an | wn, n = Ke !== null && Ke.f & an ? (
    /** @type {Derived} */
    Ke
  ) : null;
  return Ge === null || n !== null && n.f & Yt ? t |= Yt : Ge.f |= eu, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: ou,
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
function Ne(e) {
  const t = /* @__PURE__ */ Mr(e);
  return pu(t), t;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = ta, t;
}
function iu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      jt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Zf(e) {
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
function su(e) {
  var t, n = Ge;
  jn(Zf(e));
  try {
    iu(e), t = _u(e);
  } finally {
    jn(n);
  }
  return t;
}
function au(e) {
  var t = su(e), n = (Fn || e.f & Yt) && e.deps !== null ? tr : St;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = yu());
}
function lu(e) {
  Ge === null && Ke === null && Of(), Ke !== null && Ke.f & Yt && Ge === null && Af(), To && Df();
}
function Ff(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Fe,
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
      Li(i), i.f |= Tf;
    } catch (l) {
      throw jt(i), l;
    }
  else t !== null && Ii(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (eu | ai)) === 0;
  if (!s && r && (o !== null && Ff(i, o), Ke !== null && Ke.f & an)) {
    var a = (
      /** @type {Derived} */
      Ke
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function na(e) {
  const t = vr(Vi, null, !1);
  return Jt(t, St), t.teardown = e, t;
}
function Un(e) {
  lu();
  var t = Ge !== null && (Ge.f & In) !== 0 && Fe !== null && !Fe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Fe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ge,
      reaction: Ke
    });
  } else {
    var r = zt(e);
    return r;
  }
}
function Xf(e) {
  return lu(), Wr(e);
}
function Wf(e) {
  const t = vr(hr, e, !0);
  return () => {
    jt(t);
  };
}
function qf(e) {
  const t = vr(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      jt(t), r(void 0);
    }) : (jt(t), r(void 0));
  });
}
function zt(e) {
  return vr(Ql, e, !1);
}
function ge(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), bn(t));
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
        n.f & St && Jt(n, tr), qr(n) && Li(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return vr(Vi, e, !0);
}
function Ee(e, t = [], n = Mr) {
  const r = t.map(n);
  return pr(() => e(...r.map(g)));
}
function pr(e, t = 0) {
  return vr(Vi | js | t, e, !0);
}
function On(e, t = !0) {
  return vr(Vi | In, e, !0, t);
}
function uu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = To, r = Ke;
    Za(!0), xn(null);
    try {
      t.call(null);
    } finally {
      Za(n), xn(r);
    }
  }
}
function cu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & hr ? n.parent = null : jt(n, t), n = r;
  }
}
function Kf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & In || jt(t), t = n;
  }
}
function jt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Hf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $n(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  cu(e, t && !n), fi(e, 0), Jt(e, Di);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  uu(e);
  var a = e.parent;
  a !== null && a.first !== null && du(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function du(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hr(e, t) {
  var n = [];
  ra(e, n, !0), fu(n, () => {
    jt(e), t && t();
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
function ra(e, t, n) {
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & In) !== 0;
      ra(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  gu(e, !0);
}
function gu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & St || (e.f ^= St), qr(e) && (Jt(e, wn), Ii(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & In) !== 0;
      gu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Gf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let go = [], ho = [];
function hu() {
  var e = go;
  go = [], co(e);
}
function vu() {
  var e = ho;
  ho = [], co(e);
}
function No(e) {
  go.length === 0 && queueMicrotask(hu), go.push(e);
}
function Uf(e) {
  ho.length === 0 && Gf(vu), ho.push(e);
}
function Ya() {
  go.length > 0 && hu(), ho.length > 0 && vu();
}
let Qo = !1, ui = !1, ci = null, sr = !1, To = !1;
function Za(e) {
  To = e;
}
let ao = [];
let Ke = null, pn = !1;
function xn(e) {
  Ke = e;
}
let Ge = null;
function jn(e) {
  Ge = e;
}
let Et = null;
function jf(e) {
  Et = e;
}
function pu(e) {
  Ke !== null && Ke.f & ys && (Et === null ? jf([e]) : Et.push(e));
}
let xt = null, It = 0, Kt = null;
function Jf(e) {
  Kt = e;
}
let mu = 1, di = 0, Fn = !1;
function yu() {
  return ++mu;
}
function qr(e) {
  var f;
  var t = e.f;
  if (t & wn)
    return !0;
  if (t & tr) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var o, i, s = (t & li) !== 0, a = r && Ge !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= li), a && c !== null && !(c.f & Yt) && (u.f ^= Yt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], qr(
          /** @type {Derived} */
          i
        ) && au(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ge !== null && !Fn) && Jt(e, St);
  }
  return !1;
}
function Qf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ai)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ai;
      }
    n = n.parent;
  }
  throw Qo = !1, e;
}
function e1(e) {
  return (e.f & Di) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
}
function Oi(e, t, n, r) {
  if (Qo) {
    if (n === null && (Qo = !1), e1(t))
      throw e;
    return;
  }
  n !== null && (Qo = !0);
  {
    Qf(e, t);
    return;
  }
}
function wu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Et != null && Et.includes(e) || (i.f & an ? wu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Jt(i, wn) : i.f & St && Jt(i, tr), Ii(
        /** @type {Effect} */
        i
      )));
    }
}
function _u(e) {
  var h;
  var t = xt, n = It, r = Kt, o = Ke, i = Fn, s = Et, a = Fe, l = pn, u = e.f;
  xt = /** @type {null | Value[]} */
  null, It = 0, Kt = null, Fn = (u & Yt) !== 0 && (pn || !sr || Ke === null), Ke = u & (In | hr) ? null : e, Et = null, Xa(e.ctx), pn = !1, di++, e.f |= ys;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (xt !== null) {
      var d;
      if (fi(e, It), f !== null && It > 0)
        for (f.length = It + xt.length, d = 0; d < xt.length; d++)
          f[It + d] = xt[d];
      else
        e.deps = f = xt;
      if (!Fn)
        for (d = It; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && It < f.length && (fi(e, It), f.length = It);
    if (zi() && Kt !== null && !pn && f !== null && !(e.f & (an | tr | wn)))
      for (d = 0; d < /** @type {Source[]} */
      Kt.length; d++)
        wu(
          Kt[d],
          /** @type {Effect} */
          e
        );
    return o !== e && (di++, Kt !== null && (r === null ? r = Kt : r.push(.../** @type {Source[]} */
    Kt))), c;
  } finally {
    xt = t, It = n, Kt = r, Ke = o, Fn = i, Et = s, Xa(a), pn = l, e.f ^= ys;
  }
}
function t1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ef.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & an && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (Jt(t, tr), t.f & (Yt | li) || (t.f ^= li), iu(
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
      t1(e, n[r]);
}
function Li(e) {
  var t = e.f;
  if (!(t & Di)) {
    Jt(e, St);
    var n = Ge, r = Fe, o = sr;
    Ge = e, sr = !0;
    try {
      t & js ? Kf(e) : cu(e), uu(e);
      var i = _u(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = mu;
      var s = e.deps, a;
      za && vf && e.f & wn;
    } catch (l) {
      Oi(l, e, n, r || e.ctx);
    } finally {
      sr = o, Ge = n;
    }
  }
}
function n1() {
  try {
    Lf();
  } catch (e) {
    if (ci !== null)
      Oi(e, ci, null);
    else
      throw e;
  }
}
function xu() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; ao.length > 0; ) {
      t++ > 1e3 && n1();
      var n = ao, r = n.length;
      ao = [];
      for (var o = 0; o < r; o++) {
        var i = o1(n[o]);
        r1(i);
      }
      vo.clear();
    }
  } finally {
    ui = !1, sr = e, ci = null;
  }
}
function r1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Di | Vn)))
        try {
          qr(r) && (Li(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? du(r) : r.fn = null));
        } catch (o) {
          Oi(o, r, null, r.ctx);
        }
    }
}
function Ii(e) {
  ui || (ui = !0, queueMicrotask(xu));
  for (var t = ci = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (hr | In)) {
      if (!(n & St)) return;
      t.f ^= St;
    }
  }
  ao.push(t);
}
function o1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (In | hr)) !== 0, i = o && (r & St) !== 0;
    if (!i && !(r & Vn)) {
      if (r & Ql)
        t.push(n);
      else if (o)
        n.f ^= St;
      else {
        var s = Ke;
        try {
          Ke = n, qr(n) && Li(n);
        } catch (u) {
          Oi(u, n, null, n.ctx);
        } finally {
          Ke = s;
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
  for (Ya(); ao.length > 0; )
    ui = !0, xu(), Ya();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & an) !== 0;
  if (Ke !== null && !pn) {
    if (!(Et != null && Et.includes(e))) {
      var r = Ke.deps;
      e.rv < di && (e.rv = di, xt === null && r !== null && r[It] === e ? It++ : xt === null ? xt = [e] : (!Fn || !xt.includes(e)) && xt.push(e));
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
  e, qr(o) && au(o)), To && vo.has(e) ? vo.get(e) : e.v;
}
function bn(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const i1 = -7169;
function Jt(e, t) {
  e.f = e.f & i1 | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      xs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && xs(n);
      }
  }
}
function xs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        xs(e[r], t);
      } catch {
      }
    const n = Us(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Jl(n);
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
    equals: ou,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  const n = Vr(e);
  return pu(n), n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t = !1) {
  var r;
  const n = Vr(e);
  return t || (n.equals = ta), Fr && Fe !== null && Fe.l !== null && ((r = Fe.l).s ?? (r.s = [])).push(n), n;
}
function G(e, t, n = !1) {
  Ke !== null && !pn && zi() && Ke.f & (an | js) && !(Et != null && Et.includes(e)) && Yf();
  let r = n ? on(t) : t;
  return bs(e, r);
}
function bs(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    To ? vo.set(e, t) : vo.set(e, n), e.v = t, e.f & an && (e.f & wn && su(
      /** @type {Derived} */
      e
    ), Jt(e, e.f & Yt ? tr : St)), e.wv = yu(), bu(e, wn), zi() && Ge !== null && Ge.f & St && !(Ge.f & (In | hr)) && (Kt === null ? Jf([e]) : Kt.push(e));
  }
  return t;
}
function Fa(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function bu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = zi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & wn || !r && s === Ge || (Jt(s, t), a & (St | Yt) && (a & an ? bu(
        /** @type {Derived} */
        s,
        tr
      ) : Ii(
        /** @type {Effect} */
        s
      )));
    }
}
let Fe = null;
function Xa(e) {
  Fe = e;
}
function lr(e) {
  return (
    /** @type {T} */
    oa().get(e)
  );
}
function Dr(e, t) {
  return oa().set(e, t), t;
}
function s1(e) {
  return oa().has(e);
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
  }), na(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Fe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ge, r = Ke;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          jn(i.effect), xn(i.reaction), zt(i.fn);
        }
      } finally {
        jn(n), xn(r);
      }
    }
    Fe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function zi() {
  return !Fr || Fe !== null && Fe.l === null;
}
function oa(e) {
  return Fe === null && Hi(), Fe.c ?? (Fe.c = new Map(a1(Fe) || void 0));
}
function a1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function l1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const u1 = [
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
function c1(e) {
  return u1.includes(e);
}
const d1 = {
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
function f1(e) {
  return e = e.toLowerCase(), d1[e] ?? e;
}
const g1 = ["touchstart", "touchmove"];
function h1(e) {
  return g1.includes(e);
}
const v1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function p1(e) {
  return v1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function m1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, No(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function y1(e) {
  Se && /* @__PURE__ */ kt(e) !== null && Qs(e);
}
let Wa = !1;
function w1() {
  Wa || (Wa = !0, document.addEventListener(
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
function _1(e) {
  var t = Ke, n = Ge;
  xn(null), jn(null);
  try {
    return e();
  } finally {
    xn(t), jn(n);
  }
}
const Cu = /* @__PURE__ */ new Set(), Cs = /* @__PURE__ */ new Set();
function ku(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ro.call(t, i), !i.cancelBubble)
      return _1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? No(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function et(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = ku(e, t, n, i);
  (t === document.body || t === window || t === document) && na(() => {
    t.removeEventListener(e, s, i);
  });
}
function Mo(e) {
  for (var t = 0; t < e.length; t++)
    Cu.add(e[t]);
  for (var n of Cs)
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
    var c = Ke, f = Ge;
    xn(null), jn(null);
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
              var [b, ...$] = _;
              b.apply(i, [e, ...$]);
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
      e.__root = t, delete e.currentTarget, xn(c), jn(f);
    }
  }
}
function ia(e) {
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
function ie(e, t) {
  var n = (t & jl) !== 0, r = (t & Cf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Vt(Le, null), Le;
    o === void 0 && (o = ia(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ kt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || tu ? document.importNode(o, !0) : o.cloneNode(!0)
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
function be(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Vt(Le, null), Le;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ia(i)
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
  if (!Se) {
    var t = An(e + "");
    return Vt(t, t), t;
  }
  var n = Le;
  return n.nodeType !== 3 && (n.before(n = An()), $t(n)), Vt(n, n), n;
}
function tt() {
  if (Se)
    return Vt(Le, null), Le;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = An();
  return e.append(t, n), Vt(t, n), e;
}
function O(e, t) {
  if (Se) {
    Ge.nodes_end = Le, _n();
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
  return Eu(e, t);
}
function x1(e, t) {
  _s(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Le;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ws); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(i);
    if (!i)
      throw br;
    Rt(!0), $t(
      /** @type {Comment} */
      i
    ), _n();
    const s = Eu(e, { ...t, anchor: i });
    if (Le === null || Le.nodeType !== 8 || /** @type {Comment} */
    Le.data !== Ks)
      throw Ai(), br;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === br)
      return t.recover === !1 && If(), _s(), Qs(n), Rt(!1), $u(e, t);
    throw s;
  } finally {
    Rt(r), $t(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function Eu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  _s();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!a.has(h)) {
        a.add(h);
        var v = h1(h);
        t.addEventListener(h, ro, { passive: v });
        var _ = wr.get(h);
        _ === void 0 ? (document.addEventListener(h, ro, { passive: v }), wr.set(h, 1)) : wr.set(h, _ + 1);
      }
    }
  };
  l(Gs(Cu)), Cs.add(l);
  var u = void 0, c = qf(() => {
    var f = n ?? t.appendChild(An());
    return On(() => {
      if (i) {
        de({});
        var d = (
          /** @type {ComponentContext} */
          Fe
        );
        d.c = i;
      }
      o && (r.$$events = o), Se && Vt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Se && (Ge.nodes_end = Le), i && fe();
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
      Cs.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return ks.set(u, c), u;
}
let ks = /* @__PURE__ */ new WeakMap();
function b1(e, t) {
  const n = ks.get(e);
  return n ? (ks.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && _n();
  var o = e, i = null, s = null, a = Tt, l = n > 0 ? Xr : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (a === (a = d)) return;
    let v = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Ws ? r = 0 : b === qs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = ws(), $t(o), Rt(!1), v = !0, r = -1);
    }
    a ? (i ? fo(i) : h && (i = On(() => h(o))), s && Hr(s, () => {
      s = null;
    })) : (s ? fo(s) : h && (s = On(() => h(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), v && Rt(!0);
  };
  pr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Se && (o = Le);
}
function po(e, t) {
  return t;
}
function C1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    ra(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  fu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Bn(e, c.prev, c.next)), jt(c.e, !a);
    }
  });
}
function Dt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Gl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Se ? $t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(An());
  }
  Se && _n();
  var c = null, f = !1, d = /* @__PURE__ */ me(() => {
    var h = n();
    return Po(h) ? h : h == null ? [] : Gs(h);
  });
  pr(() => {
    var h = g(d), v = h.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let _ = !1;
    if (Se) {
      var b = (
        /** @type {Comment} */
        s.data === qs
      );
      b !== (v === 0) && (s = ws(), $t(s), Rt(!1), _ = !0);
    }
    if (Se) {
      for (var $ = null, m, C = 0; C < v; C++) {
        if (Le.nodeType === 8 && /** @type {Comment} */
        Le.data === Ks) {
          s = /** @type {Comment} */
          Le, _ = !0, Rt(!1);
          break;
        }
        var p = h[C], k = r(p, C);
        m = Su(
          Le,
          a,
          $,
          null,
          p,
          k,
          C,
          o,
          t,
          n
        ), a.items.set(k, m), $ = m;
      }
      v > 0 && $t(ws());
    }
    Se || k1(h, a, s, o, t, r, n), i !== null && (v === 0 ? c ? fo(c) : c = On(() => i(s)) : c !== null && Hr(c, () => {
      c = null;
    })), _ && Rt(!0), g(d);
  }), Se && (s = Le);
}
function k1(e, t, n, r, o, i, s) {
  var E, M, x, T;
  var a = (o & mf) !== 0, l = (o & (Fs | Xs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, h, v = null, _, b = [], $ = [], m, C, p, k;
  if (a)
    for (k = 0; k < u; k += 1)
      m = e[k], C = i(m, k), p = c.get(C), p !== void 0 && ((E = p.a) == null || E.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (k = 0; k < u; k += 1) {
    if (m = e[k], C = i(m, k), p = c.get(C), p === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = Su(
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
      ), c.set(C, v), b = [], $ = [], d = v.next;
      continue;
    }
    if (l && $1(p, m, k, o), p.e.f & Vn && (fo(p.e), a && ((M = p.a) == null || M.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), p !== d) {
      if (h !== void 0 && h.has(p)) {
        if (b.length < $.length) {
          var S = $[0], H;
          v = S.prev;
          var A = b[0], D = b[b.length - 1];
          for (H = 0; H < b.length; H += 1)
            qa(b[H], S, n);
          for (H = 0; H < $.length; H += 1)
            h.delete($[H]);
          Bn(t, A.prev, D.next), Bn(t, v, A), Bn(t, D, S), d = S, v = D, k -= 1, b = [], $ = [];
        } else
          h.delete(p), qa(p, d, n), Bn(t, p.prev, p.next), Bn(t, p, v === null ? t.first : v.next), Bn(t, v, p), v = p;
        continue;
      }
      for (b = [], $ = []; d !== null && d.k !== C; )
        d.e.f & Vn || (h ?? (h = /* @__PURE__ */ new Set())).add(d), $.push(d), d = d.next;
      if (d === null)
        continue;
      p = d;
    }
    b.push(p), v = p, d = p.next;
  }
  if (d !== null || h !== void 0) {
    for (var z = h === void 0 ? [] : Gs(h); d !== null; )
      d.e.f & Vn || z.push(d), d = d.next;
    var L = z.length;
    if (L > 0) {
      var I = o & Gl && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < L; k += 1)
          (x = z[k].a) == null || x.measure();
        for (k = 0; k < L; k += 1)
          (T = z[k].a) == null || T.fix();
      }
      C1(t, z, I, c);
    }
  }
  a && No(() => {
    var P;
    if (_ !== void 0)
      for (p of _)
        (P = p.a) == null || P.apply();
  }), Ge.first = t.first && t.first.e, Ge.last = v && v.e;
}
function $1(e, t, n, r) {
  r & Fs && bs(e.v, t), r & Xs ? bs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Fs) !== 0, f = (l & yf) === 0, d = c ? f ? /* @__PURE__ */ re(o) : Vr(o) : o, h = l & Xs ? Vr(s) : s, v = {
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
    return v.e = On(() => a(e, d, h, u), Se), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
      /* @__PURE__ */ $n(i)
    );
    o.before(i), i = s;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function sa(e, t, n, r, o) {
  var i = e, s = "", a;
  pr(() => {
    if (s === (s = t() ?? "")) {
      Se && _n();
      return;
    }
    a !== void 0 && (jt(a), a = void 0), s !== "" && (a = On(() => {
      if (Se) {
        Le.data;
        for (var l = _n(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ $n(l);
        if (l === null)
          throw Ai(), br;
        Vt(Le, u), i = $t(l);
        return;
      }
      var c = s + "", f = ia(c);
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
  Se && _n();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function E1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function ur(e, t, ...n) {
  var r = e, o = ft, i;
  pr(() => {
    o !== (o = t()) && (i && (jt(i), i = null), i = On(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Se && (r = Le);
}
function Pu(e, t, n) {
  Se && _n();
  var r = e, o, i;
  pr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = On(() => n(r, o))));
  }, Xr), Se && (r = Le);
}
function S1(e, t, n, r, o, i) {
  let s = Se;
  Se && _n();
  var a, l, u = null;
  Se && Le.nodeType === 1 && (u = /** @type {Element} */
  Le, _n());
  var c = (
    /** @type {TemplateNode} */
    Se ? Le : e
  ), f;
  pr(() => {
    const d = t() || null;
    var h = d === "svg" ? $f : null;
    d !== a && (f && (d === null ? Hr(f, () => {
      f = null, l = null;
    }) : d === l ? fo(f) : jt(f)), d && d !== l && (f = On(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, d) : document.createElement(d), Vt(u, u), r) {
        Se && p1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ kt(u) : u.appendChild(An())
        );
        Se && (v === null ? Rt(!1) : $t(v)), r(u, v);
      }
      Ge.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Xr), s && (Rt(!0), $t(c));
}
function Qe(e, t) {
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
        J(s), o && ea(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Nu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Nu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function P1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Nu(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? P1(e) : e ?? "";
}
const Ka = [...` 	
\r\f \v\uFEFF`];
function N1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ka.includes(r[s - 1])) && (a === r.length || Ka.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ga(e, t = !1) {
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
function T1(e, t) {
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
    return r && (n += Ga(r)), o && (n += Ga(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function mt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n || s === void 0) {
    var a = N1(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  if (Se || o !== t) {
    var i = T1(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (os(e, n == null ? void 0 : n[0], r[0]), os(e, n == null ? void 0 : n[1], r[1], "important")) : os(e, n, r));
  return r;
}
const eo = Symbol("class"), or = Symbol("style"), Tu = Symbol("is custom element"), Mu = Symbol("is html");
function lo(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ye(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ye(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Uf(n), w1();
  }
}
function is(e, t) {
  var n = aa(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function M1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = aa(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Vf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = aa(e), s = i[Tu], a = !i[Mu];
  let l = Se && s;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = fn(n.class) : (r || n[eo]) && (n.class = null), n[or] && (n.style ?? (n.style = null));
  var d = Hu(e);
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
          const k = {}, N = "$$" + C;
          let S = C.slice(2);
          var b = c1(S);
          if (l1(S) && (S = S.slice(0, -7), k.capture = !0), !b && v) {
            if (p != null) continue;
            e.removeEventListener(S, u[N], k), u[N] = null;
          }
          if (p != null)
            if (b)
              e[`__${S}`] = p, Mo([S]);
            else {
              let H = function(A) {
                u[C].call(this, A);
              };
              u[N] = ku(S, e, H, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (C === "style")
          ye(e, C, p);
        else if (C === "autofocus")
          m1(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!s && (C === "__value" || C === "value" && p != null))
          e.value = e.__value = p;
        else if (C === "selected" && c)
          M1(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var $ = C;
          a || ($ = f1($));
          var m = $ === "defaultValue" || $ === "defaultChecked";
          if (p == null && !s && !m)
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
          else m || d.includes($) && (s || typeof p != "string") ? e[$] = p : typeof p != "function" && ye(e, $, p);
        }
    }
  }
  return l && Rt(!0), u;
}
function aa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Tu]: e.nodeName.includes("-"),
      [Mu]: e.namespaceURI === kf
    })
  );
}
var Ua = /* @__PURE__ */ new Map();
function Hu(e) {
  var t = Ua.get(e.nodeName);
  if (t) return t;
  Ua.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Jl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Us(r);
  }
  return t;
}
var Zn, Tr, So, Ti, Vu;
const Mi = class Mi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, Ti);
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
    return r.add(n), lt(this, Zn).set(t, r), Ia(this, Ti, Vu).call(this).observe(t, lt(this, So)), () => {
      var o = lt(this, Zn).get(t);
      o.delete(n), o.size === 0 && (lt(this, Zn).delete(t), lt(this, Tr).unobserve(t));
    };
  }
};
Zn = new WeakMap(), Tr = new WeakMap(), So = new WeakMap(), Ti = new WeakSet(), Vu = function() {
  return lt(this, Tr) ?? Jr(this, Tr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Mi.entries.set(n.target, n);
        for (var r of lt(this, Zn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
_t(Mi, "entries", /* @__PURE__ */ new WeakMap());
let $s = Mi;
var H1 = /* @__PURE__ */ new $s({
  box: "border-box"
});
function ja(e, t, n) {
  var r = H1.observe(e, () => n(e[t]));
  zt(() => (bn(() => n(e[t])), r));
}
function Ja(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function Cn(e = {}, t, n, r) {
  return zt(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], bn(() => {
        e !== n(...i) && (t(e, ...i), o && Ja(n(...o), e) && t(null, ...o));
      });
    }), () => {
      No(() => {
        i && Ja(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ae(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
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
  n.b.length && Xf(() => {
    Qa(t, r), co(n.b);
  }), Un(() => {
    const o = bn(() => n.m.map(Nf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Un(() => {
    Qa(t, r), co(n.a);
  });
}
function Qa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Re(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Po(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function Qt(e) {
  Fe === null && Hi(), Fr && Fe.l !== null ? D1(Fe).m.push(e) : Un(() => {
    const t = bn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function la(e) {
  Fe === null && Hi(), Qt(() => () => bn(e));
}
function V1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Fe;
  return e === null && Hi(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Po(o) ? o.slice() : [o], a = V1(
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
function ua(e, t, n) {
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
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (ea(e, a) && (e = a, n)) {
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
      (v, _) => ua(
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
  return ua(e, (n) => t = n)(), t;
}
let Wo = !1, Es = Symbol();
function Q(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ re(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(Es in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = ua(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && Es in n ? K(e) : g(r.source);
}
function A1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function gi(e, t) {
  return e.set(t), t;
}
function nt() {
  const e = {};
  function t() {
    na(() => {
      for (var n in e)
        e[n].unsubscribe();
      uo(e, Es, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function O1(e) {
  var t = Wo;
  try {
    return Wo = !1, [e(), Wo];
  } finally {
    Wo = t;
  }
}
const L1 = {
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
    L1
  );
}
const I1 = {
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
      Ul
    )), e.special[t](n), Fa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Fa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function st(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Vr(0) }, I1);
}
const z1 = {
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
    if (t === Wn || t === Js) return !1;
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
  return new Proxy({ props: e }, z1);
}
function el(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var N;
  var o = (n & wf) !== 0, i = !Fr || (n & _f) !== 0, s = (n & xf) !== 0, a = (n & bf) !== 0, l = !1, u;
  s ? [u, l] = O1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || Js in e, f = s && (((N = Hn(e, t)) == null ? void 0 : N.set) ?? (c && t in e && ((S) => e[t] = S))) || void 0, d = (
    /** @type {V} */
    r
  ), h = !0, v = !1, _ = () => (v = !0, h && (h = !1, a ? d = bn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && zf(), u = _(), f && f(u));
  var b;
  if (i)
    b = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? _() : (h = !0, v = !1, S);
    };
  else {
    var $ = (o ? Mr : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    $.f |= Mf, b = () => {
      var S = g($);
      return S !== void 0 && (d = /** @type {V} */
      void 0), S === void 0 ? d : S;
    };
  }
  if (!(n & Ul))
    return b;
  if (f) {
    var m = e.$$legacy;
    return function(S, H) {
      return arguments.length > 0 ? ((!i || !H || m || l) && f(H ? b() : S), S) : b();
    };
  }
  var C = !1, p = /* @__PURE__ */ re(u), k = /* @__PURE__ */ Mr(() => {
    var S = b(), H = g(p);
    return C ? (C = !1, H) : p.v = S;
  });
  return s && g(k), o || (k.equals = ta), function(S, H) {
    if (arguments.length > 0) {
      const A = H ? g(k) : i && s ? on(S) : S;
      if (!k.equals(A)) {
        if (C = !0, G(p, A), v && d !== void 0 && (d = A), el(k))
          return S;
        bn(() => g(k));
      }
      return S;
    }
    return el(k) ? k.v : g(k);
  };
}
function R1(e) {
  return new B1(e);
}
var Nn, Gt;
class B1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    rr(this, Nn);
    /** @type {Record<string, any>} */
    rr(this, Gt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ re(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Js ? !0 : (g(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return G(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Jr(this, Gt, (t.hydrate ? x1 : $u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Jr(this, Nn, o.$$events);
    for (const s of Object.keys(lt(this, Gt)))
      s === "$set" || s === "$destroy" || s === "$on" || uo(this, s, {
        get() {
          return lt(this, Gt)[s];
        },
        /** @param {any} value */
        set(a) {
          lt(this, Gt)[s] = a;
        },
        enumerable: !0
      });
    lt(this, Gt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, lt(this, Gt).$destroy = () => {
      b1(lt(this, Gt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, Gt).$set(t);
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
    lt(this, Gt).$destroy();
  }
}
Nn = new WeakMap(), Gt = new WeakMap();
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
      const n = {}, r = Y1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = ei(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = R1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Wf(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const i of si(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = ei(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ei(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return si(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function ei(e, t, n, r) {
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
function Y1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends Du {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return si(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return si(t).forEach((a) => {
    uo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = ei(a, l, t), this.$$d[a] = l;
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
var Z1 = { value: () => {
} };
function Bi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ti(n);
}
function ti(e) {
  this._ = e;
}
function F1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ti.prototype = Bi.prototype = {
  constructor: ti,
  on: function(e, t) {
    var n = this._, r = F1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = X1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = tl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = tl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ti(e);
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
function X1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function tl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Z1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ss = "http://www.w3.org/1999/xhtml";
const nl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ss,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Yi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), nl.hasOwnProperty(t) ? { space: nl[t], local: e } : e;
}
function W1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ss && t.documentElement.namespaceURI === Ss ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function q1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Au(e) {
  var t = Yi(e);
  return (t.local ? q1 : W1)(t);
}
function K1() {
}
function ca(e) {
  return e == null ? K1 : function() {
    return this.querySelector(e);
  };
}
function G1(e) {
  typeof e != "function" && (e = ca(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Xt(r, this._parents);
}
function U1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function j1() {
  return [];
}
function Ou(e) {
  return e == null ? j1 : function() {
    return this.querySelectorAll(e);
  };
}
function J1(e) {
  return function() {
    return U1(e.apply(this, arguments));
  };
}
function Q1(e) {
  typeof e == "function" ? e = J1(e) : e = Ou(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
}
function Lu(e) {
  return function() {
    return this.matches(e);
  };
}
function Iu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var eg = Array.prototype.find;
function tg(e) {
  return function() {
    return eg.call(this.children, e);
  };
}
function ng() {
  return this.firstElementChild;
}
function rg(e) {
  return this.select(e == null ? ng : tg(typeof e == "function" ? e : Iu(e)));
}
var og = Array.prototype.filter;
function ig() {
  return Array.from(this.children);
}
function sg(e) {
  return function() {
    return og.call(this.children, e);
  };
}
function ag(e) {
  return this.selectAll(e == null ? ig : sg(typeof e == "function" ? e : Iu(e)));
}
function lg(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function zu(e) {
  return new Array(e.length);
}
function ug() {
  return new Xt(this._enter || this._groups.map(zu), this._parents);
}
function hi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
hi.prototype = {
  constructor: hi,
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
function cg(e) {
  return function() {
    return e;
  };
}
function dg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new hi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function fg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new hi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function gg(e) {
  return e.__data__;
}
function hg(e, t) {
  if (!arguments.length) return Array.from(this, gg);
  var n = t ? fg : dg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = cg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, h = vg(e.call(c, c && c.__data__, u, r)), v = h.length, _ = a[u] = new Array(v), b = s[u] = new Array(v), $ = l[u] = new Array(d);
    n(c, f, _, b, $, h, t);
    for (var m = 0, C = 0, p, k; m < v; ++m)
      if (p = _[m]) {
        for (m >= C && (C = m + 1); !(k = b[C]) && ++C < v; ) ;
        p._next = k || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function vg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pg() {
  return new Xt(this._exit || this._groups.map(zu), this._parents);
}
function mg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function yg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), h, v = 0; v < f; ++v)
      (h = u[v] || c[v]) && (d[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Xt(a, this._parents);
}
function wg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function _g(e) {
  e || (e = xg);
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
function xg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function bg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Cg() {
  return Array.from(this);
}
function kg() {
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
function Eg() {
  return !this.node();
}
function Sg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Pg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ng(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Tg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Mg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Vg(e, t) {
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
  return this.each((t == null ? n.local ? Ng : Pg : typeof t == "function" ? n.local ? Vg : Hg : n.local ? Mg : Tg)(n, t));
}
function Ru(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ag(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Og(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Lg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Ig(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ag : typeof t == "function" ? Lg : Og)(e, t, n ?? "")) : Ar(this.node(), e);
}
function Ar(e, t) {
  return e.style.getPropertyValue(t) || Ru(e).getComputedStyle(e, null).getPropertyValue(t);
}
function zg(e) {
  return function() {
    delete this[e];
  };
}
function Rg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Yg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? zg : typeof t == "function" ? Bg : Rg)(e, t)) : this.node()[e];
}
function Bu(e) {
  return e.trim().split(/^|\s+/);
}
function da(e) {
  return e.classList || new Yu(e);
}
function Yu(e) {
  this._node = e, this._names = Bu(e.getAttribute("class") || "");
}
Yu.prototype = {
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
  for (var n = da(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Fu(e, t) {
  for (var n = da(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Zg(e) {
  return function() {
    Zu(this, e);
  };
}
function Fg(e) {
  return function() {
    Fu(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Fu)(this, e);
  };
}
function Wg(e, t) {
  var n = Bu(e + "");
  if (arguments.length < 2) {
    for (var r = da(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xg : t ? Zg : Fg)(n, t));
}
function qg() {
  this.textContent = "";
}
function Kg(e) {
  return function() {
    this.textContent = e;
  };
}
function Gg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ug(e) {
  return arguments.length ? this.each(e == null ? qg : (typeof e == "function" ? Gg : Kg)(e)) : this.node().textContent;
}
function jg() {
  this.innerHTML = "";
}
function Jg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Qg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function eh(e) {
  return arguments.length ? this.each(e == null ? jg : (typeof e == "function" ? Qg : Jg)(e)) : this.node().innerHTML;
}
function th() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nh() {
  return this.each(th);
}
function rh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function oh() {
  return this.each(rh);
}
function ih(e) {
  var t = typeof e == "function" ? e : Au(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function sh() {
  return null;
}
function ah(e, t) {
  var n = typeof e == "function" ? e : Au(e), r = t == null ? sh : typeof t == "function" ? t : ca(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function uh() {
  return this.each(lh);
}
function ch() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function dh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fh(e) {
  return this.select(e ? dh : ch);
}
function gh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function hh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function vh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function ph(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function mh(e, t, n) {
  return function() {
    var r = this.__on, o, i = hh(t);
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
function yh(e, t, n) {
  var r = vh(e + ""), o, i = r.length, s;
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
  for (a = t ? mh : ph, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Ru(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function wh(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function _h(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function xh(e, t) {
  return this.each((typeof t == "function" ? _h : wh)(e, t));
}
function* bh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Wu = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Xt([[document.documentElement]], Wu);
}
function Ch() {
  return this;
}
Xt.prototype = Ho.prototype = {
  constructor: Xt,
  select: G1,
  selectAll: Q1,
  selectChild: rg,
  selectChildren: ag,
  filter: lg,
  data: hg,
  enter: ug,
  exit: pg,
  join: mg,
  merge: yg,
  selection: Ch,
  order: wg,
  sort: _g,
  call: bg,
  nodes: Cg,
  node: kg,
  size: $g,
  empty: Eg,
  each: Sg,
  attr: Dg,
  style: Ig,
  property: Yg,
  classed: Wg,
  text: Ug,
  html: eh,
  raise: nh,
  lower: oh,
  append: ih,
  insert: ah,
  remove: uh,
  clone: fh,
  datum: gh,
  on: yh,
  dispatch: xh,
  [Symbol.iterator]: bh
};
function Ut(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Wu);
}
function kh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
  if (e = kh(e), t === void 0 && (t = e.currentTarget), t) {
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
function ss(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qu(e) {
  var t = e.document.documentElement, n = Ut(e).on("dragstart.drag", Cr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ku(e, t) {
  var n = e.document.documentElement, r = Ut(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const qo = (e) => () => e;
function Ps(e, {
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
Ps.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Eh(e) {
  return !e.ctrlKey && !e.button;
}
function Sh() {
  return this.parentNode;
}
function Ph(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Nh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Th() {
  var e = Eh, t = Sh, n = Ph, r = Nh, o = {}, i = Bi("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(p) {
    p.on("mousedown.drag", h).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, $h).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(p, k) {
    if (!(c || !e.call(this, p, k))) {
      var N = C(this, t.call(this, p, k), p, k, "mouse");
      N && (Ut(p.view).on("mousemove.drag", v, mo).on("mouseup.drag", _, mo), qu(p.view), ss(p), u = !1, a = p.clientX, l = p.clientY, N("start", p));
    }
  }
  function v(p) {
    if (Cr(p), !u) {
      var k = p.clientX - a, N = p.clientY - l;
      u = k * k + N * N > f;
    }
    o.mouse("drag", p);
  }
  function _(p) {
    Ut(p.view).on("mousemove.drag mouseup.drag", null), Ku(p.view, u), Cr(p), o.mouse("end", p);
  }
  function b(p, k) {
    if (e.call(this, p, k)) {
      var N = p.changedTouches, S = t.call(this, p, k), H = N.length, A, D;
      for (A = 0; A < H; ++A)
        (D = C(this, S, p, k, N[A].identifier, N[A])) && (ss(p), D("start", p, N[A]));
    }
  }
  function $(p) {
    var k = p.changedTouches, N = k.length, S, H;
    for (S = 0; S < N; ++S)
      (H = o[k[S].identifier]) && (Cr(p), H("drag", p, k[S]));
  }
  function m(p) {
    var k = p.changedTouches, N = k.length, S, H;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < N; ++S)
      (H = o[k[S].identifier]) && (ss(p), H("end", p, k[S]));
  }
  function C(p, k, N, S, H, A) {
    var D = i.copy(), z = rn(A || N, k), L, I, E;
    if ((E = n.call(p, new Ps("beforestart", {
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
      return L = E.x - z[0] || 0, I = E.y - z[1] || 0, function M(x, T, P) {
        var V = z, R;
        switch (x) {
          case "start":
            o[H] = M, R = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            z = rn(P || T, k), R = s;
            break;
        }
        D.call(
          x,
          p,
          new Ps(x, {
            sourceEvent: T,
            subject: E,
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
    return arguments.length ? (e = typeof p == "function" ? p : qo(!!p), d) : e;
  }, d.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : qo(p), d) : t;
  }, d.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : qo(p), d) : n;
  }, d.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : qo(!!p), d) : r;
  }, d.on = function() {
    var p = i.on.apply(i, arguments);
    return p === i ? d : p;
  }, d.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, d) : Math.sqrt(f);
  }, d;
}
function fa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Vo() {
}
var yo = 0.7, vi = 1 / yo, kr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mh = /^#([0-9a-f]{3,8})$/, Hh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Vh = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Dh = new RegExp(`^rgba\\(${kr},${kr},${kr},${wo}\\)$`), Ah = new RegExp(`^rgba\\(${mn},${mn},${mn},${wo}\\)$`), Oh = new RegExp(`^hsl\\(${wo},${mn},${mn}\\)$`), Lh = new RegExp(`^hsla\\(${wo},${mn},${mn},${wo}\\)$`), rl = {
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
fa(Vo, _o, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ol,
  // Deprecated! Use color.formatHex.
  formatHex: ol,
  formatHex8: Ih,
  formatHsl: zh,
  formatRgb: il,
  toString: il
});
function ol() {
  return this.rgb().formatHex();
}
function Ih() {
  return this.rgb().formatHex8();
}
function zh() {
  return Uu(this).formatHsl();
}
function il() {
  return this.rgb().formatRgb();
}
function _o(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Mh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? sl(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Hh.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = Vh.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dh.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Ah.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Oh.exec(e)) ? ul(t[1], t[2] / 100, t[3] / 100, 1) : (t = Lh.exec(e)) ? ul(t[1], t[2] / 100, t[3] / 100, t[4]) : rl.hasOwnProperty(e) ? sl(rl[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function sl(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ht(e, t, n, r);
}
function Rh(e) {
  return e instanceof Vo || (e = _o(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Ns(e, t, n, r) {
  return arguments.length === 1 ? Rh(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
fa(Ht, Ns, Gu(Vo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(ar(this.r), ar(this.g), ar(this.b), pi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: al,
  // Deprecated! Use color.formatHex.
  formatHex: al,
  formatHex8: Bh,
  formatRgb: ll,
  toString: ll
}));
function al() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Bh() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ll() {
  const e = pi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function pi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ul(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function Uu(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vo || (e = _o(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new sn(s, a, l, e.opacity);
}
function Yh(e, t, n, r) {
  return arguments.length === 1 ? Uu(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
fa(sn, Yh, Gu(Vo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ht(
      as(e >= 240 ? e - 240 : e + 120, o, r),
      as(e, o, r),
      as(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new sn(cl(this.h), Go(this.s), Go(this.l), pi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = pi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${cl(this.h)}, ${Go(this.s) * 100}%, ${Go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function cl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ju = (e) => () => e;
function Zh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Fh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xh(e) {
  return (e = +e) == 1 ? Ju : function(t, n) {
    return n - t ? Fh(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Ju(e, t) {
  var n = t - e;
  return n ? Zh(e, n) : ju(isNaN(e) ? t : e);
}
const dl = function e(t) {
  var n = Xh(t);
  function r(o, i) {
    var s = n((o = Ns(o)).r, (i = Ns(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ju(o.opacity, i.opacity);
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
var Ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ls = new RegExp(Ts.source, "g");
function Wh(e) {
  return function() {
    return e;
  };
}
function qh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Kh(e, t) {
  var n = Ts.lastIndex = ls.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ts.exec(e)) && (o = ls.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Yn(r, o) })), n = ls.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? qh(l[0].x) : Wh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var fl = 180 / Math.PI, Ms = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * fl,
    skewX: Math.atan(l) * fl,
    scaleX: s,
    scaleY: a
  };
}
var Uo;
function Gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ms : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Uh(e) {
  return e == null || (Uo || (Uo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Uo.setAttribute("transform", e), !(e = Uo.transform.baseVal.consolidate())) ? Ms : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
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
var jh = ec(Gh, "px, ", "px)", "deg)"), Jh = ec(Uh, ", ", ")", ")"), Qh = 1e-12;
function gl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ev(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function tv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const nv = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], h = c - a, v = f - l, _ = h * h + v * v, b, $;
    if (_ < Qh)
      $ = Math.log(d / u) / t, b = function(S) {
        return [
          a + S * h,
          l + S * v,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var m = Math.sqrt(_), C = (d * d - u * u + r * _) / (2 * u * n * m), p = (d * d - u * u - r * _) / (2 * d * n * m), k = Math.log(Math.sqrt(C * C + 1) - C), N = Math.log(Math.sqrt(p * p + 1) - p);
      $ = (N - k) / t, b = function(S) {
        var H = S * $, A = gl(k), D = u / (n * m) * (A * tv(t * H + k) - ev(k));
        return [
          a + D * h,
          l + D * v,
          u * A / gl(t * H + k)
        ];
      };
    }
    return b.duration = $ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Or = 0, oo = 0, to = 0, tc = 1e3, mi, io, yi = 0, cr = 0, Zi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ga() {
  return cr || (nc(rv), cr = xo.now() + Zi);
}
function rv() {
  cr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = rc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ga() : +n) + (t == null ? 0 : +t), !this._next && io !== this && (io ? io._next = this : mi = this, io = this), this._call = e, this._time = n, Hs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Hs());
  }
};
function rc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function ov() {
  ga(), ++Or;
  for (var e = mi, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function hl() {
  cr = (yi = xo.now()) + Zi, Or = oo = 0;
  try {
    ov();
  } finally {
    Or = 0, sv(), cr = 0;
  }
}
function iv() {
  var e = xo.now(), t = e - yi;
  t > tc && (Zi -= t, yi = e);
}
function sv() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  io = e, Hs(r);
}
function Hs(e) {
  if (!Or) {
    oo && (oo = clearTimeout(oo));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (oo = setTimeout(hl, e - xo.now() - Zi)), to && (to = clearInterval(to))) : (to || (yi = xo.now(), to = setInterval(iv, tc)), Or = 1, nc(hl));
  }
}
function vl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var av = Bi("start", "end", "cancel", "interrupt"), lv = [], oc = 0, pl = 1, Vs = 2, ni = 3, ml = 4, Ds = 5, ri = 6;
function Fi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  uv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: av,
    tween: lv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: oc
  });
}
function ha(e, t) {
  var n = gn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = gn(e, t);
  if (n.state > ni) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function uv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = rc(i, 0, n.time);
  function i(u) {
    n.state = pl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, h;
    if (n.state !== pl) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === ni) return vl(s);
        h.state === ml ? (h.state = ri, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ri, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (vl(function() {
      n.state === ni && (n.state = ml, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Vs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Vs) {
      for (n.state = ni, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
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
    n.state = ri, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function oi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Vs && r.state < Ds, r.state = ri, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function cv(e) {
  return this.each(function() {
    oi(this, e);
  });
}
function dv(e, t) {
  var n, r;
  return function() {
    var o = En(this, e), i = o.tween;
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
function fv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = En(this, e), s = i.tween;
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
function gv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? dv : fv)(n, e, t));
}
function va(e, t, n) {
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
  return (typeof t == "number" ? Yn : t instanceof _o ? dl : (n = _o(t)) ? (t = n, dl) : Kh)(e, t);
}
function hv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function vv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function yv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function wv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function _v(e, t) {
  var n = Yi(e), r = n === "transform" ? Jh : ic;
  return this.attrTween(e, typeof t == "function" ? (n.local ? wv : yv)(n, r, va(this, "attr." + e, t)) : t == null ? (n.local ? vv : hv)(n) : (n.local ? mv : pv)(n, r, t));
}
function xv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function bv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Cv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bv(e, i)), n;
  }
  return o._value = t, o;
}
function kv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && xv(e, i)), n;
  }
  return o._value = t, o;
}
function $v(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Yi(e);
  return this.tween(n, (r.local ? Cv : kv)(r, t));
}
function Ev(e, t) {
  return function() {
    ha(this, e).delay = +t.apply(this, arguments);
  };
}
function Sv(e, t) {
  return t = +t, function() {
    ha(this, e).delay = t;
  };
}
function Pv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ev : Sv)(t, e)) : gn(this.node(), t).delay;
}
function Nv(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Tv(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Mv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Nv : Tv)(t, e)) : gn(this.node(), t).duration;
}
function Hv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Vv(e) {
  var t = this._id;
  return arguments.length ? this.each(Hv(t, e)) : gn(this.node(), t).ease;
}
function Dv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Av(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Dv(this._id, e));
}
function Ov(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Lv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, h = 0; h < c; ++h)
      (d = l[h] || u[h]) && (f[h] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ln(s, this._parents, this._name, this._id);
}
function Iv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function zv(e, t, n) {
  var r, o, i = Iv(t) ? ha : En;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Rv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(zv(n, e, t));
}
function Bv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Yv() {
  return this.on("end.remove", Bv(this._id));
}
function Zv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ca(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Fi(u[d], t, n, d, u, gn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ou(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), h, v = gn(c, n), _ = 0, b = d.length; _ < b; ++_)
          (h = d[_]) && Fi(h, t, n, _, d, v);
        i.push(d), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Xv = Ho.prototype.constructor;
function Wv() {
  return new Xv(this._groups, this._parents);
}
function qv(e, t) {
  var n, r, o;
  return function() {
    var i = Ar(this, e), s = (this.style.removeProperty(e), Ar(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function sc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ar(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Gv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ar(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ar(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = En(this, e), u = l.on, c = l.value[i] == null ? a || (a = sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function jv(e, t, n) {
  var r = (e += "") == "transform" ? jh : ic;
  return t == null ? this.styleTween(e, qv(e, r)).on("end.style." + e, sc(e)) : typeof t == "function" ? this.styleTween(e, Gv(e, r, va(this, "style." + e, t))).each(Uv(this._id, e)) : this.styleTween(e, Kv(e, r, t), n).on("end.style." + e, null);
}
function Jv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Qv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Jv(e, s, n)), r;
  }
  return i._value = t, i;
}
function e0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Qv(e, t, n ?? ""));
}
function t0(e) {
  return function() {
    this.textContent = e;
  };
}
function n0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function r0(e) {
  return this.tween("text", typeof e == "function" ? n0(va(this, "text", e)) : t0(e == null ? "" : e + ""));
}
function o0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function i0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && o0(o)), t;
  }
  return r._value = e, r;
}
function s0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, i0(e));
}
function a0() {
  for (var e = this._name, t = this._id, n = ac(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
function l0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = En(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var u0 = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ac() {
  return ++u0;
}
var Pn = Ho.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Zv,
  selectAll: Fv,
  selectChild: Pn.selectChild,
  selectChildren: Pn.selectChildren,
  filter: Ov,
  merge: Lv,
  selection: Wv,
  transition: a0,
  call: Pn.call,
  nodes: Pn.nodes,
  node: Pn.node,
  size: Pn.size,
  empty: Pn.empty,
  each: Pn.each,
  on: Rv,
  attr: _v,
  attrTween: $v,
  style: jv,
  styleTween: e0,
  text: r0,
  textTween: s0,
  remove: Yv,
  tween: gv,
  delay: Pv,
  duration: Mv,
  ease: Vv,
  easeVarying: Av,
  end: l0,
  [Symbol.iterator]: Pn[Symbol.iterator]
};
function c0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var d0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: c0
};
function f0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function g0(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = ac(), (n = d0).time = ga(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Fi(l, e, t, u, s, n || f0(l, t));
  return new Ln(r, this._parents, e, t);
}
Ho.prototype.interrupt = cv;
Ho.prototype.transition = g0;
const jo = (e) => () => e;
function h0(e, {
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
lc.prototype = Tn.prototype;
function lc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Xi;
  return e.__zoom;
}
function us(e) {
  e.stopImmediatePropagation();
}
function no(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function v0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function p0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function yl() {
  return this.__zoom || Xi;
}
function m0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function y0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function w0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function uc() {
  var e = v0, t = p0, n = w0, r = m0, o = y0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = nv, u = Bi("start", "zoom", "end"), c, f, d, h = 500, v = 150, _ = 0, b = 10;
  function $(E) {
    E.property("__zoom", yl).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(E, M, x, T) {
    var P = E.selection ? E.selection() : E;
    P.property("__zoom", yl), E !== P ? k(E, M, x, T) : P.interrupt().each(function() {
      N(this, arguments).event(T).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, $.scaleBy = function(E, M, x, T) {
    $.scaleTo(E, function() {
      var P = this.__zoom.k, V = typeof M == "function" ? M.apply(this, arguments) : M;
      return P * V;
    }, x, T);
  }, $.scaleTo = function(E, M, x, T) {
    $.transform(E, function() {
      var P = t.apply(this, arguments), V = this.__zoom, R = x == null ? p(P) : typeof x == "function" ? x.apply(this, arguments) : x, Y = V.invert(R), W = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(C(m(V, W), R, Y), P, s);
    }, x, T);
  }, $.translateBy = function(E, M, x, T) {
    $.transform(E, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), s);
    }, null, T);
  }, $.translateTo = function(E, M, x, T, P) {
    $.transform(E, function() {
      var V = t.apply(this, arguments), R = this.__zoom, Y = T == null ? p(V) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Xi.translate(Y[0], Y[1]).scale(R.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), V, s);
    }, T, P);
  };
  function m(E, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === E.k ? E : new Tn(M, E.x, E.y);
  }
  function C(E, M, x) {
    var T = M[0] - x[0] * E.k, P = M[1] - x[1] * E.k;
    return T === E.x && P === E.y ? E : new Tn(E.k, T, P);
  }
  function p(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, M, x, T) {
    E.on("start.zoom", function() {
      N(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var P = this, V = arguments, R = N(P, V).event(T), Y = t.apply(P, V), W = x == null ? p(Y) : typeof x == "function" ? x.apply(P, V) : x, U = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), j = P.__zoom, q = typeof M == "function" ? M.apply(P, V) : M, oe = l(j.invert(W).concat(U / j.k), q.invert(W).concat(U / q.k));
      return function(he) {
        if (he === 1) he = q;
        else {
          var ve = oe(he), ne = U / ve[2];
          he = new Tn(ne, W[0] - ve[0] * ne, W[1] - ve[1] * ne);
        }
        R.zoom(null, he);
      };
    });
  }
  function N(E, M, x) {
    return !x && E.__zooming || new S(E, M);
  }
  function S(E, M) {
    this.that = E, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, M), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, M) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var M = Ut(this.that).datum();
      u.call(
        E,
        this.that,
        new h0(E, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function H(E, ...M) {
    if (!e.apply(this, arguments)) return;
    var x = N(this, M).event(E), T = this.__zoom, P = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), V = rn(E);
    if (x.wheel)
      (x.mouse[0][0] !== V[0] || x.mouse[0][1] !== V[1]) && (x.mouse[1] = T.invert(x.mouse[0] = V)), clearTimeout(x.wheel);
    else {
      if (T.k === P) return;
      x.mouse = [V, T.invert(V)], oi(this), x.start();
    }
    no(E), x.wheel = setTimeout(R, v), x.zoom("mouse", n(C(m(T, P), x.mouse[0], x.mouse[1]), x.extent, s));
    function R() {
      x.wheel = null, x.end();
    }
  }
  function A(E, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var x = E.currentTarget, T = N(this, M, !0).event(E), P = Ut(E.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), V = rn(E, x), R = E.clientX, Y = E.clientY;
    qu(E.view), us(E), T.mouse = [V, this.__zoom.invert(V)], oi(this), T.start();
    function W(j) {
      if (no(j), !T.moved) {
        var q = j.clientX - R, oe = j.clientY - Y;
        T.moved = q * q + oe * oe > _;
      }
      T.event(j).zoom("mouse", n(C(T.that.__zoom, T.mouse[0] = rn(j, x), T.mouse[1]), T.extent, s));
    }
    function U(j) {
      P.on("mousemove.zoom mouseup.zoom", null), Ku(j.view, T.moved), no(j), T.event(j).end();
    }
  }
  function D(E, ...M) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, T = rn(E.changedTouches ? E.changedTouches[0] : E, this), P = x.invert(T), V = x.k * (E.shiftKey ? 0.5 : 2), R = n(C(m(x, V), T, P), t.apply(this, M), s);
      no(E), a > 0 ? Ut(this).transition().duration(a).call(k, R, T, E) : Ut(this).call($.transform, R, T, E);
    }
  }
  function z(E, ...M) {
    if (e.apply(this, arguments)) {
      var x = E.touches, T = x.length, P = N(this, M, E.changedTouches.length === T).event(E), V, R, Y, W;
      for (us(E), R = 0; R < T; ++R)
        Y = x[R], W = rn(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], P.touch0 ? !P.touch1 && P.touch0[2] !== W[2] && (P.touch1 = W, P.taps = 0) : (P.touch0 = W, V = !0, P.taps = 1 + !!c);
      c && (c = clearTimeout(c)), V && (P.taps < 2 && (f = W[0], c = setTimeout(function() {
        c = null;
      }, h)), oi(this), P.start());
    }
  }
  function L(E, ...M) {
    if (this.__zooming) {
      var x = N(this, M).event(E), T = E.changedTouches, P = T.length, V, R, Y, W;
      for (no(E), V = 0; V < P; ++V)
        R = T[V], Y = rn(R, this), x.touch0 && x.touch0[2] === R.identifier ? x.touch0[0] = Y : x.touch1 && x.touch1[2] === R.identifier && (x.touch1[0] = Y);
      if (R = x.that.__zoom, x.touch1) {
        var U = x.touch0[0], j = x.touch0[1], q = x.touch1[0], oe = x.touch1[1], he = (he = q[0] - U[0]) * he + (he = q[1] - U[1]) * he, ve = (ve = oe[0] - j[0]) * ve + (ve = oe[1] - j[1]) * ve;
        R = m(R, Math.sqrt(he / ve)), Y = [(U[0] + q[0]) / 2, (U[1] + q[1]) / 2], W = [(j[0] + oe[0]) / 2, (j[1] + oe[1]) / 2];
      } else if (x.touch0) Y = x.touch0[0], W = x.touch0[1];
      else return;
      x.zoom("touch", n(C(R, Y, W), x.extent, s));
    }
  }
  function I(E, ...M) {
    if (this.__zooming) {
      var x = N(this, M).event(E), T = E.changedTouches, P = T.length, V, R;
      for (us(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), V = 0; V < P; ++V)
        R = T[V], x.touch0 && x.touch0[2] === R.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === R.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (R = rn(R, this), Math.hypot(f[0] - R[0], f[1] - R[1]) < b)) {
        var Y = Ut(this).on("dblclick.zoom");
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
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], $) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, $.constrain = function(E) {
    return arguments.length ? (n = E, $) : n;
  }, $.duration = function(E) {
    return arguments.length ? (a = +E, $) : a;
  }, $.interpolate = function(E) {
    return arguments.length ? (l = E, $) : l;
  }, $.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? $ : E;
  }, $.clickDistance = function(E) {
    return arguments.length ? (_ = (E = +E) * E, $) : Math.sqrt(_);
  }, $.tapDistance = function(E) {
    return arguments.length ? (b = +E, $) : b;
  }, $;
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
}, _i = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var dr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(dr || (dr = {}));
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
var xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(xi || (xi = {}));
const As = {
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
var $r;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})($r || ($r = {}));
var bo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(bo || (bo = {}));
var $e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($e || ($e = {}));
const wl = {
  [$e.Left]: $e.Right,
  [$e.Right]: $e.Left,
  [$e.Top]: $e.Bottom,
  [$e.Bottom]: $e.Top
};
function _0(e, t) {
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
function _l(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function x0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const b0 = (e) => "id" in e && "source" in e && "target" in e, C0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), pa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Do = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, k0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : pa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? bi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Wi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return qi(n);
}, Ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = bi(r);
      n = Wi(n, o);
    }
  }), qi(n);
}, cc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Oo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, _ = Co(a, zr(u)), b = (h ?? 0) * (v ?? 0), $ = i && _ > 0;
    (!u.internals.handleBounds || $ || _ >= b || u.dragging) && l.push(u);
  }
  return l;
}, Os = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function xl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function bl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Ao(e), l = ya(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
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
async function dc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const h = i.has(d.id), v = !h && d.parentId && s.find((_) => _.id === d.parentId);
    (h || v) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Os(s, l);
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
function fc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Cl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, gc = (e, t, n = 15, r = 40) => {
  const o = Cl(e.x, r, t.width - r) * n, i = Cl(e.y, r, t.height - r) * n;
  return [o, i];
}, Wi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ls = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), qi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), zr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = pa(e) ? e.internals.positionAbsolute : Do(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, bi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = pa(e) ? e.internals.positionAbsolute : Do(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, hc = (e, t) => qi(Wi(Ls(e), Ls(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, kl = (e) => Mn(e.width) && Mn(e.height) && Mn(e.x) && Mn(e.y), Mn = (e) => !isNaN(e) && isFinite(e), E0 = (e, t) => {
}, ma = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Oo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ma(a, s) : a;
}, vc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ya = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Ir(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, h = n / 2 - f * u;
  return { x: d, y: h, zoom: u };
}, Ci = () => {
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
function S0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function cs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Dn(e), a = Oo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ma(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const wa = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), P0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, N0 = ["INPUT", "SELECT", "TEXTAREA"];
function T0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : N0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const mc = (e) => "clientX" in e, Dn = (e, t) => {
  var i, s;
  const n = mc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
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
      ...wa(s)
    };
  });
};
function M0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function El({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case $e.Left:
      return [t - Jo(t - r, i), n];
    case $e.Right:
      return [t + Jo(r - t, i), n];
    case $e.Top:
      return [t, n - Jo(n - o, i)];
    case $e.Bottom:
      return [t, n + Jo(o - n, i)];
  }
}
function yc({ sourceX: e, sourceY: t, sourcePosition: n = $e.Bottom, targetX: r, targetY: o, targetPosition: i = $e.Top, curvature: s = 0.25 }) {
  const [a, l] = El({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = El({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, h, v] = M0({
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
function wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function H0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function V0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Wi(bi(e), bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(s, qi(i)) > 0;
}
const D0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, A0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), O0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return b0(e) ? n = { ...e } : n = {
    ...e,
    id: D0(e)
  }, A0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Is({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = wc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Sl = {
  [$e.Left]: { x: -1, y: 0 },
  [$e.Right]: { x: 1, y: 0 },
  [$e.Top]: { x: 0, y: -1 },
  [$e.Bottom]: { x: 0, y: 1 }
}, L0 = ({ source: e, sourcePosition: t = $e.Bottom, target: n }) => t === $e.Left || t === $e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Pl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function I0({ source: e, sourcePosition: t = $e.Bottom, target: n, targetPosition: r = $e.Top, center: o, offset: i }) {
  const s = Sl[t], a = Sl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = L0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let h = [], v, _;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [m, C, p, k] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? m, _ = o.y ?? C;
    const S = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], H = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    s[f] === d ? h = f === "x" ? S : H : h = f === "x" ? H : S;
  } else {
    const S = [{ x: l.x, y: u.y }], H = [{ x: u.x, y: l.y }];
    if (f === "x" ? h = s.x === d ? H : S : h = s.y === d ? S : H, t === r) {
      const I = Math.abs(e[f] - n[f]);
      if (I <= i) {
        const E = Math.min(i - 1, i - I);
        s[f] === d ? b[f] = (l[f] > e[f] ? -1 : 1) * E : $[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const I = f === "x" ? "y" : "x", E = s[f] === a[I], M = l[I] > u[I], x = l[I] < u[I];
      (s[f] === 1 && (!E && M || E && x) || s[f] !== 1 && (!E && x || E && M)) && (h = f === "x" ? S : H);
    }
    const A = { x: l.x + b.x, y: l.y + b.y }, D = { x: u.x + $.x, y: u.y + $.y }, z = Math.max(Math.abs(A.x - h[0].x), Math.abs(D.x - h[0].x)), L = Math.max(Math.abs(A.y - h[0].y), Math.abs(D.y - h[0].y));
    z >= L ? (v = (A.x + D.x) / 2, _ = h[0].y) : (v = h[0].x, _ = (A.y + D.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...h,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], v, _, p, k];
}
function z0(e, t, n, r) {
  const o = Math.min(Pl(e, t) / 2, Pl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ki({ sourceX: e, sourceY: t, sourcePosition: n = $e.Bottom, targetX: r, targetY: o, targetPosition: i = $e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, h, v] = I0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, $, m) => {
    let C = "";
    return m > 0 && m < c.length - 1 ? C = z0(c[m - 1], $, c[m + 1], s) : C = `${m === 0 ? "M" : "L"}${$.x} ${$.y}`, b += C, b;
  }, ""), f, d, h, v];
}
function Nl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function R0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Nl(t) || !Nl(n))
    return null;
  const r = t.internals.handleBounds || Tl(t.handles), o = n.internals.handleBounds || Tl(n.handles), i = Ml((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Ml(
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
  const a = (i == null ? void 0 : i.position) || $e.Bottom, l = (s == null ? void 0 : s.position) || $e.Top, u = ko(t, i, a), c = ko(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Tl(e) {
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
function ko(e, t, n = $e.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case $e.Top:
      return { x: o + s / 2, y: i };
    case $e.Right:
      return { x: o + s, y: i + a / 2 };
    case $e.Bottom:
      return { x: o + s / 2, y: i + a };
    case $e.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Ml(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function zs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function B0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = zs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Y0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case $e.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case $e.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case $e.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const _a = {
  nodeOrigin: [0, 0],
  nodeExtent: _i,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Z0 = {
  ..._a,
  checkEquality: !0
};
function xa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function F0(e, t, n) {
  const r = xa(_a, n);
  for (const o of e.values())
    if (o.parentId)
      ba(o, e, t, r);
    else {
      const i = Do(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, nr(o));
      o.internals.positionAbsolute = a;
    }
}
function _c(e, t, n, r) {
  var a, l;
  const o = xa(Z0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = Do(u, o.nodeOrigin), d = Rr(u.extent) ? u.extent : o.nodeExtent, h = fr(f, d, nr(u));
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
          z: xc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ba(c, t, n, r);
  }
}
function X0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ba(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = xa(_a, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  X0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = W0(e, l, i, s, u), { positionAbsolute: h } = e.internals, v = c !== h.x || f !== h.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : h,
      z: d
    }
  });
}
function xc(e, t) {
  return (Mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function W0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Do(e, n), u = Rr(e.extent) ? fr(l, e.extent, a) : l;
  let c = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = fc(c, a, t));
  const f = xc(e, o), d = t.internals.z ?? 0;
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
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? zr(l), c = hc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var C;
    const c = l.internals.positionAbsolute, f = nr(l), d = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(f.width, Math.round(a.width)), b = Math.max(f.height, Math.round(a.height)), $ = (_ - f.width) * d[0], m = (b - f.height) * d[1];
    (h > 0 || v > 0 || $ || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + $,
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
        width: _ + (h ? d[0] * h - $ : 0),
        height: b + (v ? d[1] * v - m : 0)
      }
    });
  }), o;
}
function K0(e, t, n, r, o, i) {
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
    const v = wa(d.nodeElement), _ = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (_ || !h.internals.handleBounds || d.force))) {
      const $ = d.nodeElement.getBoundingClientRect(), m = Rr(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = fc(C, v, t.get(h.parentId)) : m && (C = fr(C, m, v));
      const p = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: $l("source", d.nodeElement, $, c, h.id),
            target: $l("target", d.nodeElement, $, c, h.id)
          }
        }
      };
      t.set(h.id, p), h.parentId && ba(p, t, n, { nodeOrigin: o }), a = !0, _ && (l.push({
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
async function G0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Hl(e, t, n, r, o, i) {
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
function bc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Hl("source", l, c, e, o, s), Hl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function U0(e, t) {
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
function j0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Cc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ds({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function J0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, h = !1;
  function v({ noDragClassName: b, handleSelector: $, domNode: m, isSelectable: C, nodeId: p, nodeClickDistance: k = 0 }) {
    d = Ut(m);
    function N({ x: D, y: z }, L) {
      const { nodeLookup: I, nodeExtent: E, snapGrid: M, snapToGrid: x, nodeOrigin: T, onNodeDrag: P, onSelectionDrag: V, onError: R, updateNodePositions: Y } = t();
      i = { x: D, y: z };
      let W = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const j = Ao(a);
        U = Ls(j);
      }
      for (const [j, q] of a) {
        if (!I.has(j))
          continue;
        let oe = { x: D - q.distance.x, y: z - q.distance.y };
        x && (oe = ma(oe, M));
        let he = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !q.extent) {
          const { positionAbsolute: De } = q.internals, ae = De.x - U.x + E[0][0], ue = De.x + q.measured.width - U.x2 + E[1][0], Ce = De.y - U.y + E[0][1], ke = De.y + q.measured.height - U.y2 + E[1][1];
          he = [
            [ae, Ce],
            [ue, ke]
          ];
        }
        const { position: ve, positionAbsolute: ne } = $0({
          nodeId: j,
          nextPosition: oe,
          nodeLookup: I,
          nodeExtent: he,
          nodeOrigin: T,
          onError: R
        });
        W = W || q.position.x !== ve.x || q.position.y !== ve.y, q.position = ve, q.internals.positionAbsolute = ne;
      }
      if (W && (Y(a, !0), L && (r || P || !p && V))) {
        const [j, q] = ds({
          nodeId: p,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(L, a, j, q), P == null || P(L, j, q), p || V == null || V(L, q);
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
      const [E, M] = gc(u, c, L);
      (E !== 0 || M !== 0) && (i.x = (i.x ?? 0) - E / D[2], i.y = (i.y ?? 0) - M / D[2], await z({ x: E, y: M }) && N(i, null)), s = requestAnimationFrame(S);
    }
    function H(D) {
      var W;
      const { nodeLookup: z, multiSelectionActive: L, nodesDraggable: I, transform: E, snapGrid: M, snapToGrid: x, selectNodesOnDrag: T, onNodeDragStart: P, onSelectionDragStart: V, unselectNodesAndEdges: R } = t();
      f = !0, (!T || !C) && !L && p && ((W = z.get(p)) != null && W.selected || R()), C && T && p && (e == null || e(p));
      const Y = cs(D.sourceEvent, { transform: E, snapGrid: M, snapToGrid: x, containerBounds: c });
      if (i = Y, a = j0(z, I, Y, p), a.size > 0 && (n || P || !p && V)) {
        const [U, j] = ds({
          nodeId: p,
          dragItems: a,
          nodeLookup: z
        });
        n == null || n(D.sourceEvent, a, U, j), P == null || P(D.sourceEvent, U, j), p || V == null || V(D.sourceEvent, j);
      }
    }
    const A = Th().clickDistance(k).on("start", (D) => {
      const { domNode: z, nodeDragThreshold: L, transform: I, snapGrid: E, snapToGrid: M } = t();
      c = (z == null ? void 0 : z.getBoundingClientRect()) || null, h = !1, L === 0 && H(D), i = cs(D.sourceEvent, { transform: I, snapGrid: E, snapToGrid: M, containerBounds: c }), u = Dn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: z, transform: L, snapGrid: I, snapToGrid: E, nodeDragThreshold: M, nodeLookup: x } = t(), T = cs(D.sourceEvent, { transform: L, snapGrid: I, snapToGrid: E, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !x.has(p)) && (h = !0), !h) {
        if (!l && z && f && (l = !0, S()), !f) {
          const P = T.xSnapped - (i.x ?? 0), V = T.ySnapped - (i.y ?? 0);
          Math.sqrt(P * P + V * V) > M && H(D);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && a && f && (u = Dn(D.sourceEvent, c), N(T, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: L, onNodeDragStop: I, onSelectionDragStop: E } = t();
        if (L(a, !1), o || I || !p && E) {
          const [M, x] = ds({
            nodeId: p,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o == null || o(D.sourceEvent, a, M, x), I == null || I(D.sourceEvent, M, x), p || E == null || E(D.sourceEvent, x);
        }
      }
    }).filter((D) => {
      const z = D.target;
      return !D.button && (!b || !Vl(z, `.${b}`, m)) && (!$ || Vl(z, $, m));
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
function Q0(e, t, n) {
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
const ep = 250;
function tp(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = Q0(e, n, t + ep);
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
function kc(e, t, n, r, o, i = !1) {
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
function np(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ec = () => !0;
function rp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: h, onConnectStart: v, onConnect: _, onConnectEnd: b, isValidConnection: $ = Ec, onReconnectEnd: m, updateConnection: C, getTransform: p, getFromHandle: k, autoPanSpeed: N }) {
  const S = P0(e.target);
  let H = 0, A;
  const { x: D, y: z } = Dn(e), L = S == null ? void 0 : S.elementFromPoint(D, z), I = $c(i, L), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !I)
    return;
  const M = kc(o, I, r, l, t);
  if (!M)
    return;
  let x = Dn(e, E), T = !1, P = null, V = !1, R = null;
  function Y() {
    if (!c || !E)
      return;
    const [ne, De] = gc(x, E, N);
    d({ x: ne, y: De }), H = requestAnimationFrame(Y);
  }
  const W = {
    ...M,
    nodeId: o,
    type: I,
    position: M.position
  }, U = l.get(o), q = {
    inProgress: !0,
    isValid: null,
    from: ko(U, W, $e.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: U,
    to: x,
    toHandle: null,
    toPosition: wl[W.position],
    toNode: null
  };
  C(q);
  let oe = q;
  v == null || v(e, { nodeId: o, handleId: r, handleType: I });
  function he(ne) {
    if (!k() || !W) {
      ve(ne);
      return;
    }
    const De = p();
    x = Dn(ne, E), A = tp(Oo(x, De, !1, [1, 1]), n, l, W), T || (Y(), T = !0);
    const ae = Sc(ne, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: $,
      doc: S,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    R = ae.handleDomNode, P = ae.connection, V = np(!!A, ae.isValid);
    const ue = {
      // from stays the same
      ...oe,
      isValid: V,
      to: A && V ? vc({ x: A.x, y: A.y }, De) : x,
      toHandle: ae.toHandle,
      toPosition: V && ae.toHandle ? ae.toHandle.position : wl[W.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null
    };
    V && A && oe.toHandle && ue.toHandle && oe.toHandle.type === ue.toHandle.type && oe.toHandle.nodeId === ue.toHandle.nodeId && oe.toHandle.id === ue.toHandle.id && oe.to.x === ue.to.x && oe.to.y === ue.to.y || (C(ue), oe = ue);
  }
  function ve(ne) {
    (A || R) && P && V && (_ == null || _(P));
    const { inProgress: De, ...ae } = oe, ue = {
      ...ae,
      toPosition: oe.toHandle ? oe.toPosition : null
    };
    b == null || b(ne, ue), i && (m == null || m(ne, ue)), h(), cancelAnimationFrame(H), T = !1, V = !1, P = null, R = null, S.removeEventListener("mousemove", he), S.removeEventListener("mouseup", ve), S.removeEventListener("touchmove", he), S.removeEventListener("touchend", ve);
  }
  S.addEventListener("mousemove", he), S.addEventListener("mouseup", ve), S.addEventListener("touchmove", he), S.addEventListener("touchend", ve);
}
function Sc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Ec, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: v } = Dn(e), _ = s.elementFromPoint(h, v), b = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : d, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const m = $c(void 0, b), C = b.getAttribute("data-nodeid"), p = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), N = b.classList.contains("connectableend");
    if (!C || !m)
      return $;
    const S = {
      source: f ? C : r,
      sourceHandle: f ? p : o,
      target: f ? r : C,
      targetHandle: f ? o : p
    };
    $.connection = S;
    const A = k && N && (n === dr.Strict ? f && m === "source" || !f && m === "target" : C !== r || p !== o);
    $.isValid = A && u(S), $.toHandle = kc(C, m, p, c, n, !1);
  }
  return $;
}
const op = {
  onPointerDown: rp,
  isValid: Sc
};
function ip({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ut(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: h = !1 }) {
    const v = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = p[2] * Math.pow(2, k);
      t.scaleTo(N);
    };
    let _ = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (_ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, $ = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], N = [k[0] - _[0], k[1] - _[1]];
      _ = k;
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
    }, m = uc().on("start", b).on("zoom", f ? $ : null).on("zoom.wheel", d ? v : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: rn
  };
}
const sp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), fs = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Pc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), gs = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Nc = (e) => {
  const t = e.ctrlKey && Ci() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function ap({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (xr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const b = rn(c), $ = Nc(c), m = f * Math.pow(2, $);
      r.scaleTo(n, m, b, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let h = o === Kn.Vertical ? 0 : c.deltaX * d, v = o === Kn.Horizontal ? 0 : c.deltaY * d;
    !Ci() && c.shiftKey && o !== Kn.Vertical && (h = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Ki(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function lp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || xr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function up({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Ki(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function cp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Pc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Ki(i.transform)));
  };
}
function dp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Pc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && sp(e.prevViewport, s.transform))) {
      const l = Ki(s.transform);
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
function fp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
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
function gp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = uc().clickDistance(!Mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ut(e).call(d);
  C({
    x: i.x,
    y: i.y,
    zoom: Ir(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = h.on("wheel.zoom"), _ = h.on("dblclick.zoom");
  d.wheelDelta(Nc);
  function b(L, I) {
    return h ? new Promise((E) => {
      d == null || d.transform(gs(h, I == null ? void 0 : I.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: L, noPanClassName: I, onPaneContextMenu: E, userSelectionActive: M, panOnScroll: x, panOnDrag: T, panOnScrollMode: P, panOnScrollSpeed: V, preventScrolling: R, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: j, lib: q, onTransformChange: oe }) {
    M && !c.isZoomingOrPanning && m();
    const ve = x && !j && !M ? ap({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: h,
      d3Zoom: d,
      panOnScrollMode: P,
      panOnScrollSpeed: V,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : lp({
      noWheelClassName: L,
      preventScrolling: R,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", ve, { passive: !1 }), !M) {
      const De = up({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", De);
      const ae = cp({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: oe
      });
      d.on("zoom", ae);
      const ue = dp({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: x,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", ue);
    }
    const ne = fp({
      zoomActivationKeyPressed: j,
      panOnDrag: T,
      zoomOnScroll: W,
      panOnScroll: x,
      zoomOnDoubleClick: U,
      zoomOnPinch: Y,
      userSelectionActive: M,
      noPanClassName: I,
      noWheelClassName: L,
      lib: q
    });
    d.filter(ne), U ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function C(L, I, E) {
    const M = fs(L), x = d == null ? void 0 : d.constrain()(M, I, E);
    return x && await b(x), new Promise((T) => T(x));
  }
  async function p(L, I) {
    const E = fs(L);
    return await b(E, I), new Promise((M) => M(E));
  }
  function k(L) {
    if (h) {
      const I = fs(L), E = h.property("__zoom");
      (E.k !== L.zoom || E.x !== L.x || E.y !== L.y) && (d == null || d.transform(h, I, null, { sync: !0 }));
    }
  }
  function N() {
    const L = h ? lc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleTo(gs(h, I == null ? void 0 : I.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function H(L, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleBy(gs(h, I == null ? void 0 : I.duration, () => E(!0)), L);
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
    update: $,
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
var Dl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Dl || (Dl = {}));
var hp = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(U, "$connectable", n), i = () => Q(ve, "$connectionRadius", n), s = () => Q(oe, "$domNode", n), a = () => Q(he, "$nodeLookup", n), l = () => Q(q, "$connectionMode", n), u = () => Q(ae, "$lib", n), c = () => Q(Xe, "$autoPanOnConnect", n), f = () => Q(Te, "$flowId", n), d = () => Q(De, "$isValidConnectionStore", n), h = () => Q(Ce, "$onedgecreate", n), v = () => Q(se, "$onConnectAction", n), _ = () => Q(pe, "$onConnectStartAction", n), b = () => Q(Pe, "$onConnectEndAction", n), $ = () => Q(ne, "$viewport", n), m = () => Q(at, "$connection", n), C = () => Q(Ue, "$edges", n), p = () => Q(Ye, "$connectionLookup", n), k = /* @__PURE__ */ re(), N = /* @__PURE__ */ re(), S = /* @__PURE__ */ re(), H = /* @__PURE__ */ re(), A = /* @__PURE__ */ re(), D = /* @__PURE__ */ re(), z = /* @__PURE__ */ re(), L = /* @__PURE__ */ re();
  let I = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), M = w(t, "position", 28, () => $e.Top), x = w(t, "style", 12, void 0), T = w(t, "isValidConnection", 12, void 0), P = w(t, "onconnect", 12, void 0), V = w(t, "ondisconnect", 12, void 0), R = w(t, "isConnectable", 12, void 0), Y = w(t, "class", 12, void 0);
  const W = lr("svelteflow__node_id"), U = lr("svelteflow__node_connectable"), j = We(), {
    connectionMode: q,
    domNode: oe,
    nodeLookup: he,
    connectionRadius: ve,
    viewport: ne,
    isValidConnection: De,
    lib: ae,
    addEdge: ue,
    onedgecreate: Ce,
    panBy: ke,
    cancelConnection: Ve,
    updateConnection: te,
    autoPanOnConnect: Xe,
    edges: Ue,
    connectionLookup: Ye,
    onconnect: se,
    onconnectstart: pe,
    onconnectend: Pe,
    flowId: Te,
    connection: at
  } = j;
  function ut(Me) {
    const rt = mc(Me);
    (rt && Me.button === 0 || !rt) && op.onPointerDown(Me, {
      handleId: g(S),
      nodeId: W,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: T() ?? d(),
      updateConnection: te,
      cancelConnection: Ve,
      panBy: ke,
      onConnect: (Ie) => {
        var ot;
        const Oe = h() ? h()(Ie) : Ie;
        Oe && (ue(Oe), (ot = v()) == null || ot(Ie));
      },
      onConnectStart: (Ie, Oe) => {
        var ot;
        (ot = _()) == null || ot(Ie, {
          nodeId: Oe.nodeId,
          handleId: Oe.handleId,
          handleType: Oe.handleType
        });
      },
      onConnectEnd: (Ie, Oe) => {
        var ot;
        (ot = b()) == null || ot(Ie, Oe);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let ee = /* @__PURE__ */ re(null), Ze = /* @__PURE__ */ re();
  ge(() => J(E()), () => {
    G(k, E() === "target");
  }), ge(
    () => (J(R()), o()),
    () => {
      G(N, R() !== void 0 ? R() : o());
    }
  ), ge(() => J(I()), () => {
    G(S, I() || null);
  }), ge(
    () => (J(P()), J(V()), C(), p(), J(E()), J(I())),
    () => {
      (P() || V()) && (C(), G(Ze, p().get(`${W}-${E()}${I() ? `-${I()}` : ""}`)));
    }
  ), ge(
    () => (g(ee), g(Ze), J(V()), J(P())),
    () => {
      if (g(ee) && !_0(g(Ze), g(ee))) {
        const Me = g(Ze) ?? /* @__PURE__ */ new Map();
        _l(g(ee), Me, V()), _l(Me, g(ee), P());
      }
      G(ee, g(Ze) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => m(), () => {
    G(H, !!m().fromHandle);
  }), ge(
    () => (m(), J(E()), g(S)),
    () => {
      var Me, rt, Ie;
      G(A, ((Me = m().fromHandle) == null ? void 0 : Me.nodeId) === W && ((rt = m().fromHandle) == null ? void 0 : rt.type) === E() && ((Ie = m().fromHandle) == null ? void 0 : Ie.id) === g(S));
    }
  ), ge(
    () => (m(), J(E()), g(S)),
    () => {
      var Me, rt, Ie;
      G(D, ((Me = m().toHandle) == null ? void 0 : Me.nodeId) === W && ((rt = m().toHandle) == null ? void 0 : rt.type) === E() && ((Ie = m().toHandle) == null ? void 0 : Ie.id) === g(S));
    }
  ), ge(
    () => (l(), m(), J(E()), g(S)),
    () => {
      var Me, rt, Ie;
      G(z, l() === dr.Strict ? ((Me = m().fromHandle) == null ? void 0 : Me.type) !== E() : W !== ((rt = m().fromHandle) == null ? void 0 : rt.nodeId) || g(S) !== ((Ie = m().fromHandle) == null ? void 0 : Ie.id));
    }
  ), ge(() => (g(D), m()), () => {
    G(L, g(D) && m().isValid);
  }), gt(), Ae();
  var ce = hp();
  ye(ce, "data-nodeid", W);
  let en;
  var tn = X(ce);
  pt(tn, t, "default", {}), F(ce), Ee(
    (Me, rt) => {
      ye(ce, "data-handleid", g(S)), ye(ce, "data-handlepos", M()), ye(ce, "data-id", `${f() ?? ""}-${W ?? ""}-${I() || ""}-${E() ?? ""}`), en = mt(ce, 1, Me, null, en, rt), dt(ce, x());
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
  ), et("mousedown", ce, ut), et("touchstart", ce, ut), O(e, ce);
  var vn = fe({
    get id() {
      return I();
    },
    set id(Me) {
      I(Me), y();
    },
    get type() {
      return E();
    },
    set type(Me) {
      E(Me), y();
    },
    get position() {
      return M();
    },
    set position(Me) {
      M(Me), y();
    },
    get style() {
      return x();
    },
    set style(Me) {
      x(Me), y();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(Me) {
      T(Me), y();
    },
    get onconnect() {
      return P();
    },
    set onconnect(Me) {
      P(Me), y();
    },
    get ondisconnect() {
      return V();
    },
    set ondisconnect(Me) {
      V(Me), y();
    },
    get isConnectable() {
      return R();
    },
    set isConnectable(Me) {
      R(Me), y();
    },
    get class() {
      return Y();
    },
    set class(Me) {
      Y(Me), y();
    }
  });
  return r(), vn;
}
le(
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
var vp = /* @__PURE__ */ ie("<!> <!>", 1);
function $i(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Ae();
  var s = vp(), a = _e(s);
  const l = /* @__PURE__ */ me(() => o() ?? $e.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const f = /* @__PURE__ */ me(() => i() ?? $e.Bottom);
  return Jn(c, {
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
le(
  $i,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var pp = /* @__PURE__ */ ie(" <!>", 1);
function Tc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ae(), He();
  var i = pp(), s = _e(i), a = B(s);
  const l = /* @__PURE__ */ me(() => o() ?? $e.Bottom);
  return Jn(a, {
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
le(Tc, { data: {}, sourcePosition: {} }, [], [], !0);
var mp = /* @__PURE__ */ ie(" <!>", 1);
function Mc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ae(), He();
  var i = mp(), s = _e(i), a = B(s);
  const l = /* @__PURE__ */ me(() => o() ?? $e.Top);
  return Jn(a, {
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
le(Mc, { data: {}, targetPosition: {} }, [], [], !0);
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
le(Hc, {}, [], [], !0);
function Al(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Er(e, { target: t, domNode: n }) {
  return Al(e, n, t), {
    async update({ target: r, domNode: o }) {
      Al(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var yp = /* @__PURE__ */ ie("<div><!></div>");
function Vc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(i, "$domNode", n), { domNode: i } = We();
  Ae();
  var s = yp(), a = X(s);
  pt(a, t, "default", {}), F(s), vt(s, (l, u) => Er == null ? void 0 : Er(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, s), fe(), r();
}
le(Vc, {}, ["default"], [], !0);
function Dc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = We();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Lr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var wp = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ac(e, t) {
  de(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Dc(), s = lr("svelteflow__edge_id");
  return Ae(), Vc(e, {
    children: (a, l) => {
      var u = wp();
      let c;
      var f = X(u);
      pt(f, t, "default", {}), F(u), Ee(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), et("keyup", u, () => {
      }), et("click", u, () => {
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
le(Ac, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var _p = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__edge-interaction"></path>'), xp = /* @__PURE__ */ be('<path fill="none"></path><!><!>', 1);
function Lo(e, t) {
  de(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), h = f() === void 0 ? 20 : f();
  Ae();
  var v = xp(), _ = _e(v), b = B(_);
  {
    var $ = (p) => {
      var k = _p();
      ye(k, "stroke-opacity", 0), ye(k, "stroke-width", h), Ee(() => ye(k, "d", r())), O(p, k);
    };
    xe(b, (p) => {
      h && p($);
    });
  }
  var m = B(b);
  {
    var C = (p) => {
      Ac(p, {
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
    xe(m, (p) => {
      o() && p(C);
    });
  }
  return Ee(
    (p) => {
      ye(_, "id", n()), ye(_, "d", r()), mt(_, 0, p), ye(_, "marker-start", l()), ye(_, "marker-end", u()), dt(_, c());
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
le(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(_()), J(b()), J(v()), J($())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(yc({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: $()
      }));
    }
  ), gt(), Ae(), Lo(e, {
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
      return $();
    },
    set targetPosition(m) {
      $(m), y();
    }
  });
}
le(
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
function Oc(e, t) {
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
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(_()), J(b()), J(v()), J($())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(ki({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: $()
      }));
    }
  ), gt(), Ae(), Lo(e, {
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
      return $();
    },
    set targetPosition(m) {
      $(m), y();
    }
  });
}
le(
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
    "targetX",
    "targetY"
  ]), de(t, !1);
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return ge(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(v()), J(_())),
    () => {
      ((b) => (G(r, b[0]), G(o, b[1]), G(i, b[2])))(Is({
        sourceX: d(),
        sourceY: h(),
        targetX: v(),
        targetY: _()
      }));
    }
  ), gt(), Ae(), Lo(e, {
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
le(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ge(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(_()), J(b()), J(v()), J($())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(ki({
        sourceX: d(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), gt(), Ae(), Lo(e, {
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
      return $();
    },
    set targetPosition(m) {
      $(m), y();
    }
  });
}
le(
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
function bp(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function Cp(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const kp = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, $p = (e, t, n, r = [0, 0], o = _i) => {
  const { subscribe: i, set: s, update: a } = we([]);
  let l = e, u = {}, c = !0;
  const f = (_) => (_c(_, t, n, {
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
}, Ep = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = we([]);
  let a = e, l = {};
  const u = (d) => {
    const h = l ? d.map((v) => ({ ...l, ...v })) : d;
    bc(t, n, h), a = h, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, zc = {
  input: Tc,
  output: Mc,
  default: $i,
  group: Hc
}, Rc = {
  straight: Lc,
  smoothstep: Oc,
  default: Ei,
  step: Ic
}, Sp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? _i;
  _c(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), bc(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Ao(a, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    h = ya(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: $p(e, a, l, f, d),
    nodeLookup: qt(a),
    parentLookup: qt(l),
    edgeLookup: qt(c),
    visibleNodes: qt([]),
    edges: Ep(t, u, c),
    visibleEdges: qt([]),
    connectionLookup: qt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(f),
    nodeDragThreshold: we(1),
    nodeExtent: we(d),
    translateExtent: we(_i),
    autoPanOnNodeDrag: we(!0),
    autoPanOnConnect: we(!0),
    fitViewOnInit: we(!1),
    fitViewOnInitDone: we(!1),
    fitViewOptions: we(void 0),
    panZoom: we(null),
    snapGrid: we(null),
    dragging: we(!1),
    selectionRect: we(null),
    selectionKeyPressed: we(!1),
    multiselectionKeyPressed: we(!1),
    deleteKeyPressed: we(!1),
    panActivationKeyPressed: we(!1),
    zoomActivationKeyPressed: we(!1),
    selectionRectMode: we(null),
    selectionMode: we(xi.Partial),
    nodeTypes: we(zc),
    edgeTypes: we(Rc),
    viewport: we(h),
    connectionMode: we(dr.Strict),
    domNode: we(null),
    connection: qt(As),
    connectionLineType: we($r.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: qt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: qt("svelte"),
    onlyRenderVisibleElements: we(!1),
    onerror: we(E0),
    ondelete: we(void 0),
    onedgecreate: we(void 0),
    onconnect: we(void 0),
    onconnectstart: we(void 0),
    onconnectend: we(void 0),
    onbeforedelete: we(void 0),
    nodesInitialized: we(!1),
    edgesInitialized: we(!1),
    viewportInitialized: we(!1),
    initialized: qt(!1)
  };
};
function Pp(e) {
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
    return c && f && V0({
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
    const f = R0({
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
      zIndex: H0({
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
function Np(e) {
  return qn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? cc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Gi = Symbol();
function Bc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Sp({
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
      ...zc,
      ...x
    });
  }
  function u(x) {
    a.edgeTypes.set({
      ...Rc,
      ...x
    });
  }
  function c(x) {
    const T = K(a.edges);
    a.edges.set(O0(x, T));
  }
  const f = (x, T = !1) => {
    var V;
    const P = K(a.nodeLookup);
    for (const [R, Y] of x) {
      const W = (V = P.get(R)) == null ? void 0 : V.internals.userNode;
      W && (W.position = Y.position, W.dragging = T);
    }
    a.nodes.update((R) => R);
  };
  function d(x) {
    var Y, W, U;
    const T = K(a.nodeLookup), P = K(a.parentLookup), { changes: V, updatedInternals: R } = K0(x, T, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (R) {
      if (F0(T, P, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const j = K(a.fitViewOptions), q = v({
          ...j,
          nodes: j == null ? void 0 : j.nodes
        });
        a.fitViewOnInitDone.set(q);
      }
      for (const j of V) {
        const q = (Y = T.get(j.id)) == null ? void 0 : Y.internals.userNode;
        if (q)
          switch (j.type) {
            case "dimensions": {
              const oe = { ...q.measured, ...j.dimensions };
              j.setAttributes && (q.width = ((W = j.dimensions) == null ? void 0 : W.width) ?? q.width, q.height = ((U = j.dimensions) == null ? void 0 : U.height) ?? q.height), q.measured = oe;
              break;
            }
            case "position":
              q.position = j.position ?? q.position;
              break;
          }
      }
      a.nodes.update((j) => j), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(x) {
    const T = K(a.panZoom), P = K(a.domNode);
    if (!T || !P)
      return Promise.resolve(!1);
    const { width: V, height: R } = wa(P), Y = xl(K(a.nodeLookup), x);
    return bl({
      nodes: Y,
      width: V,
      height: R,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: T
    }, x);
  }
  function v(x) {
    const T = K(a.panZoom);
    if (!T)
      return !1;
    const P = xl(K(a.nodeLookup), x);
    return bl({
      nodes: P,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: T
    }, x), P.size > 0;
  }
  function _(x, T) {
    const P = K(a.panZoom);
    return P ? P.scaleBy(x, T) : Promise.resolve(!1);
  }
  function b(x) {
    return _(1.2, x);
  }
  function $(x) {
    return _(1 / 1.2, x);
  }
  function m(x) {
    const T = K(a.panZoom);
    T && (T.setScaleExtent([x, K(a.maxZoom)]), a.minZoom.set(x));
  }
  function C(x) {
    const T = K(a.panZoom);
    T && (T.setScaleExtent([K(a.minZoom), x]), a.maxZoom.set(x));
  }
  function p(x) {
    const T = K(a.panZoom);
    T && (T.setTranslateExtent(x), a.translateExtent.set(x));
  }
  function k(x) {
    let T = !1;
    return x.forEach((P) => {
      P.selected && (P.selected = !1, T = !0);
    }), T;
  }
  function N(x) {
    var T;
    (T = K(a.panZoom)) == null || T.setClickDistance(x);
  }
  function S(x) {
    k((x == null ? void 0 : x.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), k((x == null ? void 0 : x.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (x) => {
    var T;
    if (x) {
      const P = K(a.nodes), V = K(a.edges), R = P.filter((j) => j.selected), Y = V.filter((j) => j.selected), { nodes: W, edges: U } = await dc({
        nodesToRemove: R,
        edgesToRemove: Y,
        nodes: P,
        edges: V,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (W.length || U.length) && (a.nodes.update((j) => j.filter((q) => !W.some((oe) => oe.id === q.id))), a.edges.update((j) => j.filter((q) => !U.some((oe) => oe.id === q.id))), (T = K(a.ondelete)) == null || T({
        nodes: W,
        edges: U
      }));
    }
  });
  function H(x) {
    const T = K(a.multiselectionKeyPressed);
    a.nodes.update((P) => P.map((V) => {
      const R = x.includes(V.id), Y = T && V.selected || R;
      return V.selected = Y, V;
    })), T || a.edges.update((P) => P.map((V) => (V.selected = !1, V)));
  }
  function A(x) {
    const T = K(a.multiselectionKeyPressed);
    a.edges.update((P) => P.map((V) => {
      const R = x.includes(V.id), Y = T && V.selected || R;
      return V.selected = Y, V;
    })), T || a.nodes.update((P) => P.map((V) => (V.selected = !1, V)));
  }
  function D(x) {
    var P;
    const T = (P = K(a.nodes)) == null ? void 0 : P.find((V) => V.id === x);
    if (!T) {
      console.warn("012", Lr.error012(x));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), T.selected ? T.selected && K(a.multiselectionKeyPressed) && S({ nodes: [T], edges: [] }) : H([x]);
  }
  function z(x) {
    const T = K(a.viewport);
    return G0({
      delta: x,
      panZoom: K(a.panZoom),
      transform: [T.x, T.y, T.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const L = we(As), I = (x) => {
    L.set({ ...x });
  };
  function E() {
    L.set(As);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), S(), E();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Pp(a),
    visibleNodes: Np(a),
    connection: qn([L, a.viewport], ([x, T]) => x.inProgress ? {
      ...x,
      to: Oo(x.to, [T.x, T.y, T.zoom])
    } : { ...x }),
    markers: qn([a.edges, a.defaultMarkerColor, a.flowId], ([x, T, P]) => B0(x, { defaultColor: T, id: P })),
    initialized: (() => {
      let x = !1;
      const T = K(a.nodes).length, P = K(a.edges).length;
      return qn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([V, R, Y]) => x || (T === 0 ? x = Y : P === 0 ? x = Y && V : x = Y && V && R, x));
    })(),
    // actions
    syncNodeStores: (x) => bp(a.nodes, x),
    syncEdgeStores: (x) => Cp(a.edges, x),
    syncViewport: (x) => kp(a.panZoom, a.viewport, x),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: b,
    zoomOut: $,
    fitView: (x) => h(x),
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
    cancelConnection: E,
    reset: M
  };
}
function We() {
  const e = lr(Gi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Tp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Bc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Dr(Gi, {
    getStore: () => a
  }), a;
}
function hs(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = gp({
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
var Mp = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Hp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Yc(e, t) {
  de(t, !1), Qe(e, Hp);
  const [n, r] = nt(), o = () => Q(P, "$panActivationKeyPressed", n), i = () => Q(I, "$minZoom", n), s = () => Q(E, "$maxZoom", n), a = () => Q(V, "$zoomActivationKeyPressed", n), l = () => Q(L, "$selectionRect", n), u = () => Q(x, "$translateExtent", n), c = () => Q(T, "$lib", n), f = /* @__PURE__ */ re(), d = /* @__PURE__ */ re(), h = /* @__PURE__ */ re();
  let v = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), $ = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), N = w(t, "zoomOnPinch", 12), S = w(t, "panOnDrag", 12), H = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: z,
    selectionRect: L,
    minZoom: I,
    maxZoom: E,
    dragging: M,
    translateExtent: x,
    lib: T,
    panActivationKeyPressed: P,
    zoomActivationKeyPressed: V,
    viewportInitialized: R
  } = We(), Y = (q) => D.set({
    x: q[0],
    y: q[1],
    zoom: q[2]
  });
  Qt(() => {
    gi(R, !0);
  }), ge(() => J(v()), () => {
    G(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), J(S())),
    () => {
      G(d, o() || S());
    }
  ), ge(
    () => (o(), J(H())),
    () => {
      G(h, o() || H());
    }
  ), gt(), Ae();
  var W = Mp(), U = X(W);
  pt(U, t, "default", {}), F(W), vt(W, (q, oe) => hs == null ? void 0 : hs(q, oe), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(f),
    dragging: M,
    panZoom: z,
    onPanZoomStart: _(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: N(),
    panOnScroll: g(h),
    panOnDrag: g(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: Y
  })), O(e, W);
  var j = fe({
    get initialViewport() {
      return v();
    },
    set initialViewport(q) {
      v(q), y();
    },
    get onMoveStart() {
      return _();
    },
    set onMoveStart(q) {
      _(q), y();
    },
    get onMove() {
      return b();
    },
    set onMove(q) {
      b(q), y();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(q) {
      $(q), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(q) {
      m(q), y();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(q) {
      C(q), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(q) {
      p(q), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(q) {
      k(q), y();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(q) {
      N(q), y();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(q) {
      S(q), y();
    },
    get panOnScroll() {
      return H();
    },
    set panOnScroll(q) {
      H(q), y();
    },
    get paneClickDistance() {
      return A();
    },
    set paneClickDistance(q) {
      A(q), y();
    }
  });
  return r(), j;
}
le(
  Yc,
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
var Vp = /* @__PURE__ */ ie("<div><!></div>");
const Dp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  de(t, !1), Qe(e, Dp);
  const [n, r] = nt(), o = () => Q(E, "$panActivationKeyPressed", n), i = () => Q(L, "$selectionKeyPressed", n), s = () => Q(D, "$selectionRect", n), a = () => Q(A, "$elementsSelectable", n), l = () => Q(z, "$selectionRectMode", n), u = () => Q(N, "$edges", n), c = () => Q(k, "$nodeLookup", n), f = () => Q(S, "$viewport", n), d = () => Q(I, "$selectionMode", n), h = () => Q(H, "$dragging", n), v = /* @__PURE__ */ re(), _ = /* @__PURE__ */ re(), b = /* @__PURE__ */ re();
  let $ = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
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
    panActivationKeyPressed: E,
    unselectNodesAndEdges: M
  } = We();
  let x = /* @__PURE__ */ re(), T = null, P = [], V = !1;
  function R(ae) {
    if (V) {
      V = !1;
      return;
    }
    C("paneclick", { event: ae }), M(), z.set(null);
  }
  function Y(ae) {
    var ke, Ve;
    if (T = g(x).getBoundingClientRect(), !A || !g(_) || ae.button !== 0 || ae.target !== g(x) || !T)
      return;
    (Ve = (ke = ae.target) == null ? void 0 : ke.setPointerCapture) == null || Ve.call(ke, ae.pointerId);
    const { x: ue, y: Ce } = Dn(ae, T);
    M(), D.set({
      width: 0,
      height: 0,
      startX: ue,
      startY: Ce,
      x: ue,
      y: Ce
    });
  }
  function W(ae) {
    if (!g(_) || !T || !s())
      return;
    V = !0;
    const ue = Dn(ae, T), Ce = s().startX ?? 0, ke = s().startY ?? 0, Ve = {
      ...s(),
      x: ue.x < Ce ? ue.x : Ce,
      y: ue.y < ke ? ue.y : ke,
      width: Math.abs(ue.x - Ce),
      height: Math.abs(ue.y - ke)
    }, te = P.map((se) => se.id), Xe = Os(P, u()).map((se) => se.id);
    P = cc(
      c(),
      Ve,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === xi.Partial,
      !0
    );
    const Ue = Os(P, u()).map((se) => se.id), Ye = P.map((se) => se.id);
    (te.length !== Ye.length || Ye.some((se) => !te.includes(se))) && p.update((se) => se.map(Ll(Ye))), (Xe.length !== Ue.length || Ue.some((se) => !Xe.includes(se))) && N.update((se) => se.map(Ll(Ue))), z.set("user"), D.set(Ve);
  }
  function U(ae) {
    var ue, Ce;
    ae.button === 0 && ((Ce = (ue = ae.target) == null ? void 0 : ue.releasePointerCapture) == null || Ce.call(ue, ae.pointerId), !g(_) && l() === "user" && ae.target === g(x) && (R == null || R(ae)), D.set(null), P.length > 0 && gi(z, "nodes"), i() && (V = !1));
  }
  const j = (ae) => {
    var ue;
    if (Array.isArray(g(v)) && ((ue = g(v)) != null && ue.includes(2))) {
      ae.preventDefault();
      return;
    }
    C("panecontextmenu", { event: ae });
  };
  ge(
    () => (o(), J($())),
    () => {
      G(v, o() || $());
    }
  ), ge(
    () => (i(), s(), J(m()), g(v)),
    () => {
      G(_, i() || s() || m() && g(v) !== !0);
    }
  ), ge(
    () => (a(), g(_), l()),
    () => {
      G(b, a() && (g(_) || l() === "user"));
    }
  ), gt(), Ae();
  var q = Vp(), oe = /* @__PURE__ */ Ne(() => g(b) ? void 0 : Ol(R, g(x))), he = /* @__PURE__ */ Ne(() => Ol(j, g(x)));
  let ve;
  var ne = X(q);
  pt(ne, t, "default", {}), F(q), Cn(q, (ae) => G(x, ae), () => g(x)), Ee(
    (ae) => ve = mt(q, 1, "svelte-flow__pane svelte-1esy7hx", null, ve, ae),
    [
      () => ({
        draggable: $() === !0 || Array.isArray($()) && $().includes(0),
        dragging: h(),
        selection: g(_)
      })
    ],
    me
  ), et("click", q, function(...ae) {
    var ue;
    (ue = g(oe)) == null || ue.apply(this, ae);
  }), et("pointerdown", q, function(...ae) {
    var ue;
    (ue = g(b) ? Y : void 0) == null || ue.apply(this, ae);
  }), et("pointermove", q, function(...ae) {
    var ue;
    (ue = g(b) ? W : void 0) == null || ue.apply(this, ae);
  }), et("pointerup", q, function(...ae) {
    var ue;
    (ue = g(b) ? U : void 0) == null || ue.apply(this, ae);
  }), et("contextmenu", q, function(...ae) {
    var ue;
    (ue = g(he)) == null || ue.apply(this, ae);
  }), O(e, q);
  var De = fe({
    get panOnDrag() {
      return $();
    },
    set panOnDrag(ae) {
      $(ae), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(ae) {
      m(ae), y();
    }
  });
  return r(), De;
}
le(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Ap = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Op = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Fc(e, t) {
  de(t, !1), Qe(e, Op);
  const [n, r] = nt(), o = () => Q(i, "$viewport", n), { viewport: i } = We();
  Ae();
  var s = Ap(), a = X(s);
  pt(a, t, "default", {}), F(s), Ee(() => dt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, s), fe(), r();
}
le(Fc, {}, ["default"], [], !0);
function Sr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = J0({
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
function Lp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Ip = /* @__PURE__ */ ie("<div><!></div>");
function Xc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(he, "$nodeTypes", n), i = () => Q(ue, "$elementsSelectable", n), s = () => Q(Ce, "$nodesDraggable", n), a = () => Q(Xe, "$connectableStore", n), l = /* @__PURE__ */ re(void 0, !0), u = /* @__PURE__ */ re(void 0, !0), c = /* @__PURE__ */ re(void 0, !0), f = /* @__PURE__ */ re(void 0, !0);
  let d = w(t, "node", 13), h = w(t, "id", 13), v = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), $ = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), N = w(t, "resizeObserver", 13, null), S = w(t, "style", 13, void 0), H = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), z = w(t, "positionY", 13), L = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), x = w(t, "measuredHeight", 13, void 0), T = w(t, "initialWidth", 13, void 0), P = w(t, "initialHeight", 13, void 0), V = w(t, "width", 13, void 0), R = w(t, "height", 13, void 0), Y = w(t, "dragHandle", 13, void 0), W = w(t, "initialized", 13, !1), U = w(t, "parentId", 13, void 0), j = w(t, "nodeClickDistance", 13, void 0), q = w(t, "class", 13, "");
  const oe = We(), {
    nodeTypes: he,
    nodeDragThreshold: ve,
    selectNodesOnDrag: ne,
    handleNodeSelection: De,
    updateNodeInternals: ae,
    elementsSelectable: ue,
    nodesDraggable: Ce
  } = oe;
  let ke = /* @__PURE__ */ re(void 0, !0), Ve = /* @__PURE__ */ re(null, !0);
  const te = Ri(), Xe = we(m());
  let Ue = /* @__PURE__ */ re(void 0, !0), Ye = /* @__PURE__ */ re(void 0, !0), se = /* @__PURE__ */ re(void 0, !0);
  Dr("svelteflow__node_id", h()), Dr("svelteflow__node_connectable", Xe), la(() => {
    var ee;
    g(Ve) && ((ee = N()) == null || ee.unobserve(g(Ve)));
  });
  function pe(ee) {
    $() && (!K(ne) || !b() || K(ve) > 0) && De(h()), te("nodeclick", { node: d().internals.userNode, event: ee });
  }
  ge(() => J(H()), () => {
    G(l, H() || "default");
  }), ge(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), ge(
    () => (o(), g(l), $i),
    () => {
      G(c, o()[g(l)] || $i);
    }
  ), ge(
    () => (g(u), J(H())),
    () => {
      g(u) || console.warn("003", Lr.error003(H()));
    }
  ), ge(
    () => (J(V()), J(R()), J(T()), J(P()), J(M()), J(x())),
    () => {
      G(f, Lp({
        width: V(),
        height: R(),
        initialWidth: T(),
        initialHeight: P(),
        measuredWidth: M(),
        measuredHeight: x()
      }));
    }
  ), ge(() => J(m()), () => {
    Xe.set(!!m());
  }), ge(
    () => (g(Ue), g(l), g(Ye), J(L()), g(se), J(I()), J(h()), g(ke)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(Ye) && L() !== g(Ye) || g(se) && I() !== g(se)) && requestAnimationFrame(() => ae(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(ke),
            force: !0
          }
        ]
      ]))), G(Ue, g(l)), G(Ye, L()), G(se, I());
    }
  ), ge(
    () => (J(N()), g(ke), g(Ve), J(W())),
    () => {
      N() && (g(ke) !== g(Ve) || !W()) && (g(Ve) && N().unobserve(g(Ve)), g(ke) && N().observe(g(ke)), G(Ve, g(ke)));
    }
  ), gt(), Ae(!0);
  var Pe = tt(), Te = _e(Pe);
  {
    var at = (ee) => {
      var Ze = Ip();
      let ce, en;
      var tn = X(Ze);
      const vn = /* @__PURE__ */ me(() => _() ?? !1), Me = /* @__PURE__ */ me(() => $() ?? i() ?? !0), rt = /* @__PURE__ */ me(() => C() ?? !0), Ie = /* @__PURE__ */ me(() => b() ?? s() ?? !0);
      Pu(tn, () => g(c), (Oe, ot) => {
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
            return g(Me);
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
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Ie);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return U();
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
        isSelectable: $(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: j(),
        onNodeMouseDown: De,
        onDrag: (Oe, ot, nn, Wt) => {
          te("nodedrag", { event: Oe, targetNode: nn, nodes: Wt });
        },
        onDragStart: (Oe, ot, nn, Wt) => {
          te("nodedragstart", { event: Oe, targetNode: nn, nodes: Wt });
        },
        onDragStop: (Oe, ot, nn, Wt) => {
          te("nodedragstop", { event: Oe, targetNode: nn, nodes: Wt });
        },
        store: oe
      })), Cn(Ze, (Oe) => G(ke, Oe), () => g(ke)), zt(() => et("click", Ze, pe)), zt(() => et("mouseenter", Ze, (Oe) => te("nodemouseenter", { node: d(), event: Oe }))), zt(() => et("mouseleave", Ze, (Oe) => te("nodemouseleave", { node: d(), event: Oe }))), zt(() => et("mousemove", Ze, (Oe) => te("nodemousemove", { node: d(), event: Oe }))), zt(() => et("contextmenu", Ze, (Oe) => te("nodecontextmenu", { node: d(), event: Oe }))), Ee(
        (Oe, ot) => {
          ye(Ze, "data-id", h()), ce = mt(Ze, 1, Oe, null, ce, ot), en = dt(Ze, `${S() ?? ""};${g(f).width ?? ""}${g(f).height ?? ""}`, en, {
            "z-index": E(),
            transform: `translate(${D() ?? ""}px, ${z() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => fn(Pt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            q()
          ])),
          () => ({
            dragging: k(),
            selected: _(),
            draggable: b(),
            connectable: m(),
            selectable: $(),
            nopan: b(),
            parent: A()
          })
        ],
        me
      ), O(ee, Ze);
    };
    xe(Te, (ee) => {
      p() || ee(at);
    });
  }
  O(e, Pe);
  var ut = fe({
    get node() {
      return d();
    },
    set node(ee) {
      d(ee), y();
    },
    get id() {
      return h();
    },
    set id(ee) {
      h(ee), y();
    },
    get data() {
      return v();
    },
    set data(ee) {
      v(ee), y();
    },
    get selected() {
      return _();
    },
    set selected(ee) {
      _(ee), y();
    },
    get draggable() {
      return b();
    },
    set draggable(ee) {
      b(ee), y();
    },
    get selectable() {
      return $();
    },
    set selectable(ee) {
      $(ee), y();
    },
    get connectable() {
      return m();
    },
    set connectable(ee) {
      m(ee), y();
    },
    get deletable() {
      return C();
    },
    set deletable(ee) {
      C(ee), y();
    },
    get hidden() {
      return p();
    },
    set hidden(ee) {
      p(ee), y();
    },
    get dragging() {
      return k();
    },
    set dragging(ee) {
      k(ee), y();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(ee) {
      N(ee), y();
    },
    get style() {
      return S();
    },
    set style(ee) {
      S(ee), y();
    },
    get type() {
      return H();
    },
    set type(ee) {
      H(ee), y();
    },
    get isParent() {
      return A();
    },
    set isParent(ee) {
      A(ee), y();
    },
    get positionX() {
      return D();
    },
    set positionX(ee) {
      D(ee), y();
    },
    get positionY() {
      return z();
    },
    set positionY(ee) {
      z(ee), y();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ee) {
      L(ee), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(ee) {
      I(ee), y();
    },
    get zIndex() {
      return E();
    },
    set zIndex(ee) {
      E(ee), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ee) {
      M(ee), y();
    },
    get measuredHeight() {
      return x();
    },
    set measuredHeight(ee) {
      x(ee), y();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(ee) {
      T(ee), y();
    },
    get initialHeight() {
      return P();
    },
    set initialHeight(ee) {
      P(ee), y();
    },
    get width() {
      return V();
    },
    set width(ee) {
      V(ee), y();
    },
    get height() {
      return R();
    },
    set height(ee) {
      R(ee), y();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(ee) {
      Y(ee), y();
    },
    get initialized() {
      return W();
    },
    set initialized(ee) {
      W(ee), y();
    },
    get parentId() {
      return U();
    },
    set parentId(ee) {
      U(ee), y();
    },
    get nodeClickDistance() {
      return j();
    },
    set nodeClickDistance(ee) {
      j(ee), y();
    },
    get class() {
      return q();
    },
    set class(ee) {
      q(ee), y();
    }
  });
  return r(), ut;
}
le(
  Xc,
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
var zp = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Rp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Wc(e, t) {
  de(t, !1), Qe(e, Rp);
  const [n, r] = nt(), o = () => Q(c, "$visibleNodes", n), i = () => Q(f, "$nodesDraggable", n), s = () => Q(h, "$elementsSelectable", n), a = () => Q(d, "$nodesConnectable", n), l = () => Q(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: h,
    updateNodeInternals: v,
    parentLookup: _
  } = We(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const p = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const N = k.target.getAttribute("data-id");
      p.set(N, { id: N, nodeElement: k.target, force: !0 });
    }), v(p);
  });
  la(() => {
    b == null || b.disconnect();
  }), Ae();
  var $ = zp();
  Dt($, 5, o, (C) => C.id, (C, p) => {
    const k = /* @__PURE__ */ me(() => !!g(p).selected), N = /* @__PURE__ */ me(() => !!g(p).hidden), S = /* @__PURE__ */ me(() => !!(g(p).draggable || i() && typeof g(p).draggable > "u")), H = /* @__PURE__ */ me(() => !!(g(p).selectable || s() && typeof g(p).selectable > "u")), A = /* @__PURE__ */ me(() => !!(g(p).connectable || a() && typeof g(p).connectable > "u")), D = /* @__PURE__ */ me(() => g(p).deletable ?? !0), z = /* @__PURE__ */ me(() => l().has(g(p).id)), L = /* @__PURE__ */ me(() => g(p).type ?? "default"), I = /* @__PURE__ */ me(() => g(p).internals.z ?? 0), E = /* @__PURE__ */ me(() => pc(g(p)));
    Xc(C, {
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
        return g(E);
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
          Re.call(this, t, M);
        },
        nodemouseenter(M) {
          Re.call(this, t, M);
        },
        nodemousemove(M) {
          Re.call(this, t, M);
        },
        nodemouseleave(M) {
          Re.call(this, t, M);
        },
        nodedrag(M) {
          Re.call(this, t, M);
        },
        nodedragstart(M) {
          Re.call(this, t, M);
        },
        nodedragstop(M) {
          Re.call(this, t, M);
        },
        nodecontextmenu(M) {
          Re.call(this, t, M);
        }
      }
    });
  }), F($), O(e, $);
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
le(Wc, { nodeClickDistance: {} }, [], [], !0);
var Bp = /* @__PURE__ */ be('<svg><g role="img"><!></g></svg>');
function qc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(q, "$edgeTypes", n), i = () => Q(oe, "$flowId", n), s = () => Q(he, "$elementsSelectable", n), a = () => Q(j, "$edgeLookup", n), l = /* @__PURE__ */ re(void 0, !0), u = /* @__PURE__ */ re(void 0, !0), c = /* @__PURE__ */ re(void 0, !0), f = /* @__PURE__ */ re(void 0, !0), d = /* @__PURE__ */ re(void 0, !0);
  let h = w(t, "id", 13), v = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), b = w(t, "target", 13, ""), $ = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), N = w(t, "selectable", 13, void 0), S = w(t, "deletable", 13, void 0), H = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), z = w(t, "markerStart", 13, void 0), L = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), x = w(t, "sourceY", 13), T = w(t, "targetX", 13), P = w(t, "targetY", 13), V = w(t, "sourcePosition", 13), R = w(t, "targetPosition", 13), Y = w(t, "ariaLabel", 13, void 0), W = w(t, "interactionWidth", 13, void 0), U = w(t, "class", 13, "");
  Dr("svelteflow__edge_id", h());
  const {
    edgeLookup: j,
    edgeTypes: q,
    flowId: oe,
    elementsSelectable: he
  } = We(), ve = Ri(), ne = Dc();
  function De(te) {
    const Xe = a().get(h());
    Xe && (ne(h()), ve("edgeclick", { event: te, edge: Xe }));
  }
  function ae(te, Xe) {
    const Ue = a().get(h());
    Ue && ve(Xe, { event: te, edge: Ue });
  }
  ge(() => J(v()), () => {
    G(l, v() || "default");
  }), ge(
    () => (o(), g(l), Ei),
    () => {
      G(u, o()[g(l)] || Ei);
    }
  ), ge(
    () => (J(z()), i()),
    () => {
      G(c, z() ? `url('#${zs(z(), i())}')` : void 0);
    }
  ), ge(
    () => (J(L()), i()),
    () => {
      G(f, L() ? `url('#${zs(L(), i())}')` : void 0);
    }
  ), ge(
    () => (J(N()), s()),
    () => {
      G(d, N() ?? s());
    }
  ), gt(), Ae(!0);
  var ue = tt(), Ce = _e(ue);
  {
    var ke = (te) => {
      var Xe = Bp();
      let Ue;
      var Ye = X(Xe);
      let se;
      var pe = X(Ye);
      const Pe = /* @__PURE__ */ me(() => S() ?? !0);
      Pu(pe, () => g(u), (Te, at) => {
        at(Te, {
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
            return T();
          },
          get targetY() {
            return P();
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
            return $();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g(Pe);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return I();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(f);
          }
        });
      }), F(Ye), F(Xe), Ee(
        (Te, at) => {
          Ue = dt(Xe, "", Ue, { "z-index": C() }), se = mt(Ye, 0, Te, null, se, at), ye(Ye, "data-id", h()), ye(Ye, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${_()} to ${b()}`);
        },
        [
          () => fn(Pt(["svelte-flow__edge", U()])),
          () => ({
            animated: p(),
            selected: k(),
            selectable: g(d)
          })
        ],
        me
      ), et("click", Ye, De), et("contextmenu", Ye, (Te) => {
        ae(Te, "edgecontextmenu");
      }), et("mouseenter", Ye, (Te) => {
        ae(Te, "edgemouseenter");
      }), et("mouseleave", Ye, (Te) => {
        ae(Te, "edgemouseleave");
      }), O(te, Xe);
    };
    xe(Ce, (te) => {
      H() || te(ke);
    });
  }
  O(e, ue);
  var Ve = fe({
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
      return $();
    },
    set data(te) {
      $(te), y();
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
      return N();
    },
    set selectable(te) {
      N(te), y();
    },
    get deletable() {
      return S();
    },
    set deletable(te) {
      S(te), y();
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
      return D();
    },
    set labelStyle(te) {
      D(te), y();
    },
    get markerStart() {
      return z();
    },
    set markerStart(te) {
      z(te), y();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(te) {
      L(te), y();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(te) {
      I(te), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(te) {
      E(te), y();
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
      return T();
    },
    set targetX(te) {
      T(te), y();
    },
    get targetY() {
      return P();
    },
    set targetY(te) {
      P(te), y();
    },
    get sourcePosition() {
      return V();
    },
    set sourcePosition(te) {
      V(te), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), y();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(te) {
      Y(te), y();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(te) {
      W(te), y();
    },
    get class() {
      return U();
    },
    set class(te) {
      U(te), y();
    }
  });
  return r(), Ve;
}
le(
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
function Kc(e, t) {
  de(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Qt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ae(), fe({
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
le(Kc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Yp = /* @__PURE__ */ be("<defs></defs>");
function Gc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(i, "$markers", n), { markers: i } = We();
  Ae();
  var s = Yp();
  Dt(s, 5, o, (a) => a.id, (a, l) => {
    Uc(a, ct(() => g(l)));
  }), F(s), O(e, s), fe(), r();
}
le(Gc, {}, [], [], !0);
var Zp = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Fp = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Xp = /* @__PURE__ */ be('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Uc(e, t) {
  de(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ae();
  var c = Xp(), f = X(c);
  {
    var d = (v) => {
      var _ = Zp();
      Ee(() => {
        ye(_, "stroke", l()), ye(_, "stroke-width", u());
      }), O(v, _);
    }, h = (v, _) => {
      {
        var b = ($) => {
          var m = Fp();
          Ee(() => {
            ye(m, "stroke", l()), ye(m, "stroke-width", u()), ye(m, "fill", l());
          }), O($, m);
        };
        xe(
          v,
          ($) => {
            r() === bo.ArrowClosed && $(b);
          },
          _
        );
      }
    };
    xe(f, (v) => {
      r() === bo.Arrow ? v(d) : v(h, !1);
    });
  }
  return F(c), Ee(() => {
    ye(c, "id", n()), ye(c, "markerWidth", `${o()}`), ye(c, "markerHeight", `${i()}`), ye(c, "markerUnits", s()), ye(c, "orient", a());
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
le(
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
var Wp = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function jc(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = We();
  Qt(() => {
    s() && u(s());
  }), Ae();
  var f = Wp(), d = X(f), h = X(d);
  Gc(h, {}), F(d);
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
          Re.call(this, t, N);
        },
        edgecontextmenu(N) {
          Re.call(this, t, N);
        },
        edgemouseenter(N) {
          Re.call(this, t, N);
        },
        edgemouseleave(N) {
          Re.call(this, t, N);
        }
      }
    });
  });
  var _ = B(v, 2);
  {
    var b = (m) => {
      Kc(m, {
        onMount: () => {
          gi(l, !0);
        },
        onDestroy: () => {
          gi(l, !1);
        }
      });
    };
    xe(_, (m) => {
      o().length > 0 && m(b);
    });
  }
  F(f), O(e, f);
  var $ = fe({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), $;
}
le(jc, { defaultEdgeOptions: {} }, [], [], !0);
var qp = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Kp = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ca(e, t) {
  de(t, !1), Qe(e, Kp);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = tt(), l = _e(a);
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
le(
  Ca,
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
  de(t, !1);
  const [n, r] = nt(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = We();
  Ae();
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
  Ca(e, {
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
le(Jc, {}, [], [], !0);
var Gp = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Up = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  de(t, !1), Qe(e, Up);
  const [n, r] = nt(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = We(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Ri();
  let d = /* @__PURE__ */ re(null);
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
      o() === "nodes" && (G(d, Ao(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), Ae();
  var _ = tt(), b = _e(_);
  {
    var $ = (m) => {
      var C = Gp(), p = X(C);
      Ca(p, { width: "100%", height: "100%", x: 0, y: 0 }), F(C), vt(C, (k, N) => Sr == null ? void 0 : Sr(k, N), () => ({
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
      })), zt(() => et("contextmenu", C, h)), zt(() => et("click", C, v)), zt(() => et("keyup", C, () => {
      })), Ee(() => dt(C, `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), O(m, C);
    };
    xe(b, (m) => {
      o() === "nodes" && g(d) && Mn(g(d).x) && Mn(g(d).y) && m($);
    });
  }
  O(e, _), fe(), r();
}
le(Qc, {}, [], [], !0);
function qe(e, t) {
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
function ed(e, t) {
  de(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ci() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => Ci() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = We();
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
      const N = _(k);
      return {
        key: N,
        modifier: v(k),
        enabled: N !== null,
        callback: C
      };
    });
  }
  function $() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Ae(), et("blur", Mt, $), et("contextmenu", Mt, $), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !T0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
    trigger: b(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, C) => qe == null ? void 0 : qe(m, C), () => ({
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
le(
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
var jp = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__connection-path"></path>'), Jp = /* @__PURE__ */ be('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(h, "$connection", n), i = () => Q(v, "$connectionLineType", n), s = () => Q(f, "$width", n), a = () => Q(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: h,
    connectionLineType: v
  } = We();
  let _ = /* @__PURE__ */ re(null);
  ge(
    () => (o(), J(c()), i(), g(_), Is),
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
          case $r.Bezier:
            ((A) => G(_, A[0]))(yc(H));
            break;
          case $r.Step:
            ((A) => G(_, A[0]))(ki({ ...H, borderRadius: 0 }));
            break;
          case $r.SmoothStep:
            ((A) => G(_, A[0]))(ki(H));
            break;
          default:
            ((A) => G(_, A[0]))(Is(H));
        }
      }
    }
  ), gt(), Ae();
  var b = tt(), $ = _e(b);
  {
    var m = (p) => {
      var k = Jp(), N = X(k), S = X(N);
      pt(S, t, "connectionLine", {});
      var H = B(S);
      {
        var A = (D) => {
          var z = jp();
          Ee(() => {
            ye(z, "d", g(_)), dt(z, u());
          }), O(D, z);
        };
        xe(H, (D) => {
          c() || D(A);
        });
      }
      F(N), F(k), Ee(
        (D) => {
          ye(k, "width", s()), ye(k, "height", a()), dt(k, l()), mt(N, 0, D);
        },
        [
          () => fn(Pt([
            "svelte-flow__connection",
            x0(o().isValid)
          ]))
        ],
        me
      ), O(p, k);
    };
    xe($, (p) => {
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
le(
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
var Qp = /* @__PURE__ */ ie("<div><!></div>");
function Io(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = nt(), s = () => Q(f, "$selectionRectMode", o), a = /* @__PURE__ */ re();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = We();
  ge(() => J(l()), () => {
    G(a, `${l()}`.split("-"));
  }), gt(), Ae();
  var d = Qp();
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
le(Io, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var e2 = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  de(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ae();
  var o = tt(), i = _e(o);
  {
    var s = (a) => {
      Io(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = e2();
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
le(nd, { proOptions: {}, position: {} }, [], [], !0);
function Il(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const t2 = (e) => Object.keys(e);
function zl(e, t) {
  t2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function n2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function r2(e = "light") {
  return qt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = n2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var o2 = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), i2 = /* @__PURE__ */ ie("<!> <!>", 1), s2 = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const a2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function rd(e, t) {
  const n = E1(t), r = st(t, [
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
  de(t, !1), Qe(e, a2);
  const [i, s] = nt(), a = () => Q(C(), "$viewport", i), l = () => Q(es, "$initialized", i), u = () => Q(g(c), "$colorModeClass", i), c = /* @__PURE__ */ re();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), h = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), $ = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), N = w(t, "selectionKey", 12, void 0), S = w(t, "selectionMode", 12, void 0), H = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), z = w(t, "nodesDraggable", 12, void 0), L = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), x = w(t, "deleteKey", 12, void 0), T = w(t, "connectionRadius", 12, void 0), P = w(t, "connectionLineType", 12, void 0), V = w(t, "connectionMode", 28, () => dr.Strict), R = w(t, "connectionLineStyle", 12, ""), Y = w(t, "connectionLineContainerStyle", 12, ""), W = w(t, "onMoveStart", 12, void 0), U = w(t, "onMove", 12, void 0), j = w(t, "onMoveEnd", 12, void 0), q = w(t, "isValidConnection", 12, void 0), oe = w(t, "translateExtent", 12, void 0), he = w(t, "nodeExtent", 12, void 0), ve = w(t, "onlyRenderVisibleElements", 12, void 0), ne = w(t, "panOnScrollMode", 28, () => Kn.Free), De = w(t, "preventScrolling", 12, !0), ae = w(t, "zoomOnScroll", 12, !0), ue = w(t, "zoomOnDoubleClick", 12, !0), Ce = w(t, "zoomOnPinch", 12, !0), ke = w(t, "panOnScroll", 12, !1), Ve = w(t, "panOnDrag", 12, !0), te = w(t, "selectionOnDrag", 12, void 0), Xe = w(t, "autoPanOnConnect", 12, !0), Ue = w(t, "autoPanOnNodeDrag", 12, !0), Ye = w(t, "onerror", 12, void 0), se = w(t, "ondelete", 12, void 0), pe = w(t, "onedgecreate", 12, void 0), Pe = w(t, "attributionPosition", 12, void 0), Te = w(t, "proOptions", 12, void 0), at = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), ee = w(t, "height", 12, void 0), Ze = w(t, "colorMode", 12, "light"), ce = w(t, "onconnect", 12, void 0), en = w(t, "onconnectstart", 12, void 0), tn = w(t, "onconnectend", 12, void 0), vn = w(t, "onbeforedelete", 12, void 0), Me = w(t, "oninit", 12, void 0), rt = w(t, "nodeOrigin", 12, void 0), Ie = w(t, "paneClickDistance", 12, 0), Oe = w(t, "nodeClickDistance", 12, 0), ot = w(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = w(t, "style", 12, void 0), Wt = w(t, "class", 12, void 0), Gr = /* @__PURE__ */ re(), wt = /* @__PURE__ */ re(), Nt = /* @__PURE__ */ re();
  const yr = a() || m(), it = s1(Gi) ? We() : Tp({
    nodes: K(d()),
    edges: K(h()),
    width: ut(),
    height: ee(),
    fitView: v(),
    nodeOrigin: rt(),
    nodeExtent: he()
  });
  Qt(() => (it.width.set(g(wt)), it.height.set(g(Nt)), it.domNode.set(g(Gr)), it.syncNodeStores(d()), it.syncEdgeStores(h()), it.syncViewport(C()), v() !== void 0 && it.fitViewOnInit.set(v()), _() && it.fitViewOptions.set(_()), Il(it, {
    nodeTypes: p(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: oe(),
    paneClickDistance: Ie()
  }), () => {
    it.reset();
  }));
  const { initialized: es } = it;
  let Ur = /* @__PURE__ */ re(!1);
  ge(
    () => (g(wt), g(Nt)),
    () => {
      g(wt) !== void 0 && g(Nt) !== void 0 && (it.width.set(g(wt)), it.height.set(g(Nt)));
    }
  ), ge(
    () => (g(Ur), l(), J(Me())),
    () => {
      var Z;
      !g(Ur) && l() && ((Z = Me()) == null || Z(), G(Ur, !0));
    }
  ), ge(
    () => (J(f()), J(P()), J(T()), J(S()), J(M()), J(ot()), J(z()), J(L()), J(E()), J(ve()), J(q()), J(Xe()), J(Ue()), J(Ye()), J(se()), J(pe()), J(V()), J(I()), J(ce()), J(en()), J(tn()), J(vn()), J(rt()), zl),
    () => {
      const Z = {
        flowId: f(),
        connectionLineType: P(),
        connectionRadius: T(),
        selectionMode: S(),
        snapGrid: M(),
        defaultMarkerColor: ot(),
        nodesDraggable: z(),
        nodesConnectable: L(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: ve(),
        isValidConnection: q(),
        autoPanOnConnect: Xe(),
        autoPanOnNodeDrag: Ue(),
        onerror: Ye(),
        ondelete: se(),
        onedgecreate: pe(),
        connectionMode: V(),
        nodeDragThreshold: I(),
        onconnect: ce(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: vn(),
        nodeOrigin: rt()
      };
      zl(it, Z);
    }
  ), ge(
    () => (J(p()), J(k()), J(b()), J($()), J(oe()), J(Ie())),
    () => {
      Il(it, {
        nodeTypes: p(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: oe(),
        paneClickDistance: Ie()
      });
    }
  ), ge(
    () => J(Ze()),
    () => {
      A1(G(c, r2(Ze())), "$colorModeClass", i);
    }
  ), gt(), Ae();
  var Lt = s2();
  let Zo;
  var Fo = X(Lt);
  ed(Fo, {
    get selectionKey() {
      return N();
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
      return D();
    }
  });
  var Xo = B(Fo, 2);
  const ts = /* @__PURE__ */ me(() => ne() === void 0 ? Kn.Free : ne()), jd = /* @__PURE__ */ me(() => De() === void 0 ? !0 : De()), Jd = /* @__PURE__ */ me(() => ae() === void 0 ? !0 : ae()), Qd = /* @__PURE__ */ me(() => ue() === void 0 ? !0 : ue()), ef = /* @__PURE__ */ me(() => Ce() === void 0 ? !0 : Ce()), tf = /* @__PURE__ */ me(() => ke() === void 0 ? !1 : ke()), nf = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve()), rf = /* @__PURE__ */ me(() => Ie() === void 0 ? 0 : Ie());
  Yc(Xo, {
    initialViewport: yr,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return U();
    },
    get onMoveEnd() {
      return j();
    },
    get panOnScrollMode() {
      return g(ts);
    },
    get preventScrolling() {
      return g(jd);
    },
    get zoomOnScroll() {
      return g(Jd);
    },
    get zoomOnDoubleClick() {
      return g(Qd);
    },
    get zoomOnPinch() {
      return g(ef);
    },
    get panOnScroll() {
      return g(tf);
    },
    get panOnDrag() {
      return g(nf);
    },
    get paneClickDistance() {
      return g(rf);
    },
    children: (Z, Nw) => {
      const af = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve());
      Zc(Z, {
        get panOnDrag() {
          return g(af);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(jr) {
            Re.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Re.call(this, t, jr);
          }
        },
        children: (jr, Tw) => {
          var Ta = i2(), Ma = _e(Ta);
          Fc(Ma, {
            children: (uf, Mw) => {
              var Ha = o2(), Va = _e(Ha);
              jc(Va, {
                get defaultEdgeOptions() {
                  return at();
                },
                $$events: {
                  edgeclick(ze) {
                    Re.call(this, t, ze);
                  },
                  edgecontextmenu(ze) {
                    Re.call(this, t, ze);
                  },
                  edgemouseenter(ze) {
                    Re.call(this, t, ze);
                  },
                  edgemouseleave(ze) {
                    Re.call(this, t, ze);
                  }
                }
              });
              var Da = B(Va, 2);
              td(Da, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return R();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (ze, Hw) => {
                    var Oa = tt(), df = _e(Oa);
                    pt(df, t, "connectionLine", {}), O(ze, Oa);
                  }
                }
              });
              var Aa = B(Da, 6);
              Wc(Aa, {
                get nodeClickDistance() {
                  return Oe();
                },
                $$events: {
                  nodeclick(ze) {
                    Re.call(this, t, ze);
                  },
                  nodemouseenter(ze) {
                    Re.call(this, t, ze);
                  },
                  nodemousemove(ze) {
                    Re.call(this, t, ze);
                  },
                  nodemouseleave(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Re.call(this, t, ze);
                  },
                  nodecontextmenu(ze) {
                    Re.call(this, t, ze);
                  }
                }
              });
              var cf = B(Aa, 2);
              Qc(cf, {
                $$events: {
                  selectionclick(ze) {
                    Re.call(this, t, ze);
                  },
                  selectioncontextmenu(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Re.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Re.call(this, t, ze);
                  }
                }
              }), O(uf, Ha);
            },
            $$slots: { default: !0 }
          });
          var lf = B(Ma, 2);
          Jc(lf, {}), O(jr, Ta);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Na = B(Xo, 2);
  nd(Na, {
    get proOptions() {
      return Te();
    },
    get position() {
      return Pe();
    }
  });
  var of = B(Na, 2);
  pt(of, t, "default", {}), F(Lt), Cn(Lt, (Z) => G(Gr, Z), () => g(Gr)), Ee(
    (Z) => Zo = ln(
      Lt,
      Zo,
      {
        style: nn(),
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
        Wt(),
        u()
      ])
    ],
    me
  ), ja(Lt, "clientWidth", (Z) => G(wt, Z)), ja(Lt, "clientHeight", (Z) => G(Nt, Z)), et("dragover", Lt, function(Z) {
    Re.call(this, t, Z);
  }), et("drop", Lt, function(Z) {
    Re.call(this, t, Z);
  }), O(e, Lt);
  var sf = fe({
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
      return _();
    },
    set fitViewOptions(Z) {
      _(Z), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Z) {
      b(Z), y();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Z) {
      $(Z), y();
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
      return E();
    },
    set elementsSelectable(Z) {
      E(Z), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(Z) {
      M(Z), y();
    },
    get deleteKey() {
      return x();
    },
    set deleteKey(Z) {
      x(Z), y();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(Z) {
      T(Z), y();
    },
    get connectionLineType() {
      return P();
    },
    set connectionLineType(Z) {
      P(Z), y();
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
      return W();
    },
    set onMoveStart(Z) {
      W(Z), y();
    },
    get onMove() {
      return U();
    },
    set onMove(Z) {
      U(Z), y();
    },
    get onMoveEnd() {
      return j();
    },
    set onMoveEnd(Z) {
      j(Z), y();
    },
    get isValidConnection() {
      return q();
    },
    set isValidConnection(Z) {
      q(Z), y();
    },
    get translateExtent() {
      return oe();
    },
    set translateExtent(Z) {
      oe(Z), y();
    },
    get nodeExtent() {
      return he();
    },
    set nodeExtent(Z) {
      he(Z), y();
    },
    get onlyRenderVisibleElements() {
      return ve();
    },
    set onlyRenderVisibleElements(Z) {
      ve(Z), y();
    },
    get panOnScrollMode() {
      return ne();
    },
    set panOnScrollMode(Z) {
      ne(Z), y();
    },
    get preventScrolling() {
      return De();
    },
    set preventScrolling(Z) {
      De(Z), y();
    },
    get zoomOnScroll() {
      return ae();
    },
    set zoomOnScroll(Z) {
      ae(Z), y();
    },
    get zoomOnDoubleClick() {
      return ue();
    },
    set zoomOnDoubleClick(Z) {
      ue(Z), y();
    },
    get zoomOnPinch() {
      return Ce();
    },
    set zoomOnPinch(Z) {
      Ce(Z), y();
    },
    get panOnScroll() {
      return ke();
    },
    set panOnScroll(Z) {
      ke(Z), y();
    },
    get panOnDrag() {
      return Ve();
    },
    set panOnDrag(Z) {
      Ve(Z), y();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(Z) {
      te(Z), y();
    },
    get autoPanOnConnect() {
      return Xe();
    },
    set autoPanOnConnect(Z) {
      Xe(Z), y();
    },
    get autoPanOnNodeDrag() {
      return Ue();
    },
    set autoPanOnNodeDrag(Z) {
      Ue(Z), y();
    },
    get onerror() {
      return Ye();
    },
    set onerror(Z) {
      Ye(Z), y();
    },
    get ondelete() {
      return se();
    },
    set ondelete(Z) {
      se(Z), y();
    },
    get onedgecreate() {
      return pe();
    },
    set onedgecreate(Z) {
      pe(Z), y();
    },
    get attributionPosition() {
      return Pe();
    },
    set attributionPosition(Z) {
      Pe(Z), y();
    },
    get proOptions() {
      return Te();
    },
    set proOptions(Z) {
      Te(Z), y();
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
      return ee();
    },
    set height(Z) {
      ee(Z), y();
    },
    get colorMode() {
      return Ze();
    },
    set colorMode(Z) {
      Ze(Z), y();
    },
    get onconnect() {
      return ce();
    },
    set onconnect(Z) {
      ce(Z), y();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(Z) {
      en(Z), y();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(Z) {
      tn(Z), y();
    },
    get onbeforedelete() {
      return vn();
    },
    set onbeforedelete(Z) {
      vn(Z), y();
    },
    get oninit() {
      return Me();
    },
    set oninit(Z) {
      Me(Z), y();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(Z) {
      rt(Z), y();
    },
    get paneClickDistance() {
      return Ie();
    },
    set paneClickDistance(Z) {
      Ie(Z), y();
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
      return nn();
    },
    set style(Z) {
      nn(Z), y();
    },
    get class() {
      return Wt();
    },
    set class(Z) {
      Wt(Z), y();
    }
  });
  return s(), sf;
}
le(
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
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Bc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Dr(Gi, { getStore: () => l }), la(() => {
    l.reset();
  }), Ae();
  var u = tt(), c = _e(u);
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
le(
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
var l2 = /* @__PURE__ */ ie("<button><!></button>");
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
  Ae();
  var c = l2();
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
  ), et("click", c, function(h) {
    Re.call(this, t, h);
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
le(
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
var u2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = u2();
  O(e, t);
}
le(id, {}, [], [], !0);
var c2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function sd(e) {
  var t = c2();
  O(e, t);
}
le(sd, {}, [], [], !0);
var d2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ad(e) {
  var t = d2();
  O(e, t);
}
le(ad, {}, [], [], !0);
var f2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = f2();
  O(e, t);
}
le(ld, {}, [], [], !0);
var g2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = g2();
  O(e, t);
}
le(ud, {}, [], [], !0);
var h2 = /* @__PURE__ */ ie("<!> <!>", 1), v2 = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(P, "$nodesDraggable", n), i = () => Q(V, "$nodesConnectable", n), s = () => Q(R, "$elementsSelectable", n), a = () => Q(M, "$viewport", n), l = () => Q(x, "$minZoom", n), u = () => Q(T, "$maxZoom", n), c = /* @__PURE__ */ re(), f = /* @__PURE__ */ re(), d = /* @__PURE__ */ re(), h = /* @__PURE__ */ re();
  let v = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), $ = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), N = w(t, "buttonBorderColor", 12, void 0), S = w(t, "ariaLabel", 12, void 0), H = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), z = w(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: I,
    fitView: E,
    viewport: M,
    minZoom: x,
    maxZoom: T,
    nodesDraggable: P,
    nodesConnectable: V,
    elementsSelectable: R
  } = We(), Y = {
    bgColor: m(),
    bgColorHover: C(),
    color: p(),
    colorHover: k(),
    borderColor: N()
  }, W = () => {
    L();
  }, U = () => {
    I();
  }, j = () => {
    E(D());
  }, q = () => {
    G(c, !g(c)), P.set(g(c)), V.set(g(c)), R.set(g(c));
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
  }), ge(() => J(A()), () => {
    G(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), Ae();
  const oe = /* @__PURE__ */ me(() => Pt([
    "svelte-flow__controls",
    g(h),
    z()
  ])), he = /* @__PURE__ */ me(() => S() ?? "Svelte Flow controls");
  Io(e, {
    get class() {
      return g(oe);
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
    children: (ne, De) => {
      var ae = v2(), ue = _e(ae);
      pt(ue, t, "before", {});
      var Ce = B(ue, 2);
      {
        var ke = (pe) => {
          var Pe = h2(), Te = _e(Pe);
          so(Te, ct(
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
              $$events: { click: W },
              children: (ut, ee) => {
                id(ut);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = B(Te, 2);
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
              $$events: { click: U },
              children: (ut, ee) => {
                sd(ut);
              },
              $$slots: { default: !0 }
            }
          )), O(pe, Pe);
        };
        xe(Ce, (pe) => {
          _() && pe(ke);
        });
      }
      var Ve = B(Ce, 2);
      {
        var te = (pe) => {
          so(pe, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: j },
              children: (Pe, Te) => {
                ad(Pe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Ve, (pe) => {
          b() && pe(te);
        });
      }
      var Xe = B(Ve, 2);
      {
        var Ue = (pe) => {
          so(pe, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: q },
              children: (Pe, Te) => {
                var at = tt(), ut = _e(at);
                {
                  var ee = (ce) => {
                    ud(ce);
                  }, Ze = (ce) => {
                    ld(ce);
                  };
                  xe(ut, (ce) => {
                    g(c) ? ce(ee) : ce(Ze, !1);
                  });
                }
                O(Pe, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Xe, (pe) => {
          $() && pe(Ue);
        });
      }
      var Ye = B(Xe, 2);
      pt(Ye, t, "default", {});
      var se = B(Ye, 2);
      pt(se, t, "after", {}), O(ne, ae);
    },
    $$slots: { default: !0 }
  });
  var ve = fe({
    get position() {
      return v();
    },
    set position(ne) {
      v(ne), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(ne) {
      _(ne), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(ne) {
      b(ne), y();
    },
    get showLock() {
      return $();
    },
    set showLock(ne) {
      $(ne), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(ne) {
      m(ne), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ne) {
      C(ne), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(ne) {
      p(ne), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ne) {
      k(ne), y();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(ne) {
      N(ne), y();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(ne) {
      S(ne), y();
    },
    get style() {
      return H();
    },
    set style(ne) {
      H(ne), y();
    },
    get orientation() {
      return A();
    },
    set orientation(ne) {
      A(ne), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(ne) {
      D(ne), y();
    },
    get class() {
      return z();
    },
    set class(ne) {
      z(ne), y();
    }
  });
  return r(), ve;
}
le(
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
var Gn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Gn || (Gn = {}));
var p2 = /* @__PURE__ */ be("<circle></circle>");
function dd(e, t) {
  de(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ae();
  var o = p2();
  return Ee(
    (i) => {
      ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, i);
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
le(dd, { radius: {}, class: {} }, [], [], !0);
var m2 = /* @__PURE__ */ be("<path></path>");
function fd(e, t) {
  de(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Ae();
  var s = m2();
  return Ee(
    (a) => {
      ye(s, "stroke-width", n()), ye(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, a);
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
le(
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
const y2 = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var w2 = /* @__PURE__ */ be('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const _2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function gd(e, t) {
  de(t, !1), Qe(e, _2);
  const [n, r] = nt(), o = () => Q(k, "$flowId", n), i = () => Q(p, "$viewport", n), s = /* @__PURE__ */ re(), a = /* @__PURE__ */ re(), l = /* @__PURE__ */ re(), u = /* @__PURE__ */ re(), c = /* @__PURE__ */ re();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Gn.Dots), h = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), $ = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: p, flowId: k } = We(), N = v() || y2[d()], S = d() === Gn.Dots, H = d() === Gn.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  ge(
    () => (o(), J(f())),
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
  ), gt(), Ae();
  var D = w2();
  let z;
  var L = X(D), I = X(L);
  {
    var E = (P) => {
      const V = /* @__PURE__ */ me(() => g(l) / 2);
      dd(P, {
        get radius() {
          return g(V);
        },
        get class() {
          return m();
        }
      });
    }, M = (P) => {
      fd(P, {
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
    xe(I, (P) => {
      S ? P(E) : P(M, !1);
    });
  }
  F(L);
  var x = B(L);
  F(D), Ee(
    (P) => {
      mt(D, 0, P, "svelte-1r7pe8d"), z = dt(D, "", z, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), ye(L, "id", g(s)), ye(L, "x", i().x % g(a)[0]), ye(L, "y", i().y % g(a)[1]), ye(L, "width", g(a)[0]), ye(L, "height", g(a)[1]), ye(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ye(x, "fill", `url(#${g(s)})`);
    },
    [
      () => fn(Pt(["svelte-flow__background", C()]))
    ],
    me
  ), O(e, D);
  var T = fe({
    get id() {
      return f();
    },
    set id(P) {
      f(P), y();
    },
    get variant() {
      return d();
    },
    set variant(P) {
      d(P), y();
    },
    get gap() {
      return h();
    },
    set gap(P) {
      h(P), y();
    },
    get size() {
      return v();
    },
    set size(P) {
      v(P), y();
    },
    get lineWidth() {
      return _();
    },
    set lineWidth(P) {
      _(P), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(P) {
      b(P), y();
    },
    get patternColor() {
      return $();
    },
    set patternColor(P) {
      $(P), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(P) {
      m(P), y();
    },
    get class() {
      return C();
    },
    set class(P) {
      C(P), y();
    }
  });
  return r(), T;
}
le(
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
var x2 = /* @__PURE__ */ be("<rect></rect>");
function hd(e, t) {
  de(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  Ae();
  var h = x2();
  let v;
  return Ee(
    (_, b) => {
      v = mt(h, 0, _, null, v, b), ye(h, "x", n()), ye(h, "y", r()), ye(h, "rx", s()), ye(h, "ry", s()), ye(h, "width", o()), ye(h, "height", i()), dt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ye(h, "shape-rendering", l());
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
le(
  hd,
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
function vs(e, t) {
  const n = ip({
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
const ps = (e) => e instanceof Function ? e : () => e;
var b2 = /* @__PURE__ */ be("<title> </title>"), C2 = /* @__PURE__ */ be('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(Ve, "$flowId", n), i = () => Q(ue, "$viewport", n), s = () => Q(Ce, "$containerWidth", n), a = () => Q(ke, "$containerHeight", n), l = () => Q(ae, "$nodeLookup", n), u = () => Q(De, "$nodes", n), c = () => Q(te, "$panZoom", n), f = () => Q(Xe, "$translateExtent", n), d = /* @__PURE__ */ re(), h = /* @__PURE__ */ re(), v = /* @__PURE__ */ re(), _ = /* @__PURE__ */ re(), b = /* @__PURE__ */ re(), $ = /* @__PURE__ */ re(), m = /* @__PURE__ */ re(), C = /* @__PURE__ */ re(), p = /* @__PURE__ */ re(), k = /* @__PURE__ */ re(), N = /* @__PURE__ */ re(), S = /* @__PURE__ */ re(), H = /* @__PURE__ */ re();
  let A = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), z = w(t, "nodeStrokeColor", 12, "transparent"), L = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), x = w(t, "bgColor", 12, void 0), T = w(t, "maskColor", 12, void 0), P = w(t, "maskStrokeColor", 12, void 0), V = w(t, "maskStrokeWidth", 12, void 0), R = w(t, "width", 12, void 0), Y = w(t, "height", 12, void 0), W = w(t, "pannable", 12, !0), U = w(t, "zoomable", 12, !0), j = w(t, "inversePan", 12, void 0), q = w(t, "zoomStep", 12, void 0), oe = w(t, "style", 12, ""), he = w(t, "class", 12, "");
  const ve = 200, ne = 150, {
    nodes: De,
    nodeLookup: ae,
    viewport: ue,
    width: Ce,
    height: ke,
    flowId: Ve,
    panZoom: te,
    translateExtent: Xe
  } = We(), Ue = L() === void 0 ? void 0 : ps(L()), Ye = ps(z()), se = ps(I()), pe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Pe = `svelte-flow__minimap-desc-${o()}`;
  let Te = /* @__PURE__ */ re(g(d));
  const at = () => g($);
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
      G(Te, l().size > 0 ? hc(Ao(l()), g(d)) : g(d)), u();
    }
  ), ge(() => J(R()), () => {
    G(h, R() ?? ve);
  }), ge(() => J(Y()), () => {
    G(v, Y() ?? ne);
  }), ge(
    () => (g(Te), g(h)),
    () => {
      G(_, g(Te).width / g(h));
    }
  ), ge(
    () => (g(Te), g(v)),
    () => {
      G(b, g(Te).height / g(v));
    }
  ), ge(
    () => (g(_), g(b)),
    () => {
      G($, Math.max(g(_), g(b)));
    }
  ), ge(() => (g($), g(h)), () => {
    G(m, g($) * g(h));
  }), ge(
    () => (g($), g(v)),
    () => {
      G(C, g($) * g(v));
    }
  ), ge(() => g($), () => {
    G(p, 5 * g($));
  }), ge(
    () => (g(Te), g(m), g(p)),
    () => {
      G(k, g(Te).x - (g(m) - g(Te).width) / 2 - g(p));
    }
  ), ge(
    () => (g(Te), g(C), g(p)),
    () => {
      G(N, g(Te).y - (g(C) - g(Te).height) / 2 - g(p));
    }
  ), ge(() => (g(m), g(p)), () => {
    G(S, g(m) + g(p) * 2);
  }), ge(() => (g(C), g(p)), () => {
    G(H, g(C) + g(p) * 2);
  }), gt(), Ae();
  const ut = /* @__PURE__ */ me(() => oe() + (x() ? `;--xy-minimap-background-color-props:${x()}` : "")), ee = /* @__PURE__ */ me(() => Pt(["svelte-flow__minimap", he()]));
  Io(e, {
    get position() {
      return A();
    },
    get style() {
      return g(ut);
    },
    get class() {
      return g(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ce, en) => {
      var tn = tt(), vn = _e(tn);
      {
        var Me = (rt) => {
          var Ie = C2();
          ye(Ie, "aria-labelledby", Pe);
          let Oe;
          var ot = X(Ie);
          {
            var nn = (wt) => {
              var Nt = b2();
              ye(Nt, "id", Pe);
              var yr = X(Nt, !0);
              F(Nt), Ee(() => Zt(yr, D())), O(wt, Nt);
            };
            xe(ot, (wt) => {
              D() && wt(nn);
            });
          }
          var Wt = B(ot);
          Dt(Wt, 1, u, (wt) => wt.id, (wt, Nt) => {
            var yr = tt();
            const it = /* @__PURE__ */ me(() => l().get(g(Nt).id));
            var es = _e(yr);
            {
              var Ur = (Lt) => {
                const Zo = /* @__PURE__ */ me(() => nr(g(it))), Fo = /* @__PURE__ */ me(() => Ue == null ? void 0 : Ue(g(it))), Xo = /* @__PURE__ */ me(() => Ye(g(it))), ts = /* @__PURE__ */ me(() => se(g(it)));
                hd(Lt, ct(
                  {
                    get x() {
                      return g(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(it).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Zo),
                  {
                    get selected() {
                      return g(it).selected;
                    },
                    get color() {
                      return g(Fo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return g(Xo);
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
              xe(es, (Lt) => {
                g(it) && pc(g(it)) && Lt(Ur);
              });
            }
            O(wt, yr);
          });
          var Gr = B(Wt);
          F(Ie), vt(Ie, (wt, Nt) => vs == null ? void 0 : vs(wt, Nt), () => ({
            panZoom: c(),
            viewport: ue,
            getViewScale: at,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: j(),
            zoomStep: q(),
            pannable: W(),
            zoomable: U()
          })), Ee(() => {
            ye(Ie, "width", g(h)), ye(Ie, "height", g(v)), ye(Ie, "viewBox", `${g(k) ?? ""} ${g(N) ?? ""} ${g(S) ?? ""} ${g(H) ?? ""}`), Oe = dt(Ie, "", Oe, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": P(),
              "--xy-minimap-mask-stroke-width-props": V() ? V() * g($) : void 0
            }), ye(Gr, "d", `M${g(k) - g(p)},${g(N) - g(p)}h${g(S) + g(p) * 2}v${g(H) + g(p) * 2}h${-g(S) - g(p) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), O(rt, Ie);
        };
        xe(vn, (rt) => {
          c() && rt(Me);
        });
      }
      O(ce, tn);
    },
    $$slots: { default: !0 }
  });
  var Ze = fe({
    get position() {
      return A();
    },
    set position(ce) {
      A(ce), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(ce) {
      D(ce), y();
    },
    get nodeStrokeColor() {
      return z();
    },
    set nodeStrokeColor(ce) {
      z(ce), y();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(ce) {
      L(ce), y();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(ce) {
      I(ce), y();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(ce) {
      E(ce), y();
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
      return T();
    },
    set maskColor(ce) {
      T(ce), y();
    },
    get maskStrokeColor() {
      return P();
    },
    set maskStrokeColor(ce) {
      P(ce), y();
    },
    get maskStrokeWidth() {
      return V();
    },
    set maskStrokeWidth(ce) {
      V(ce), y();
    },
    get width() {
      return R();
    },
    set width(ce) {
      R(ce), y();
    },
    get height() {
      return Y();
    },
    set height(ce) {
      Y(ce), y();
    },
    get pannable() {
      return W();
    },
    set pannable(ce) {
      W(ce), y();
    },
    get zoomable() {
      return U();
    },
    set zoomable(ce) {
      U(ce), y();
    },
    get inversePan() {
      return j();
    },
    set inversePan(ce) {
      j(ce), y();
    },
    get zoomStep() {
      return q();
    },
    set zoomStep(ce) {
      q(ce), y();
    },
    get style() {
      return oe();
    },
    set style(ce) {
      oe(ce), y();
    },
    get class() {
      return he();
    },
    set class(ce) {
      he(ce), y();
    }
  });
  return r(), Ze;
}
le(
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
const Rl = (e) => C0(e);
function Ot() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: h, nodeLookup: v, nodeOrigin: _, edgeLookup: b, connectionLookup: $ } = We(), m = (k) => {
    var D, z;
    const N = K(v), S = Rl(k) ? k : N.get(k.id), H = S.parentId ? S0(S.position, S.measured, S.parentId, N, K(_)) : S.position, A = {
      ...S,
      position: H,
      width: ((D = S.measured) == null ? void 0 : D.width) ?? S.width,
      height: ((z = S.measured) == null ? void 0 : z.height) ?? S.height
    };
    return zr(A);
  }, C = (k, N, S = { replace: !1 }) => {
    var D;
    const H = (D = K(v).get(k)) == null ? void 0 : D.internals.userNode;
    if (!H)
      return;
    const A = typeof N == "function" ? N(H) : N;
    S.replace ? f.update((z) => z.map((L) => L.id === k ? Rl(A) ? A : { ...L, ...A } : L)) : (Object.assign(H, A), f.update((z) => z));
  }, p = (k) => K(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (k) => {
      var N;
      return (N = p(k)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? K(f) : Bl(K(v), k),
    getEdge: (k) => K(b).get(k),
    getEdges: (k) => k === void 0 ? K(d) : Bl(K(b), k),
    setZoom: (k, N) => {
      const S = K(c);
      return S ? S.scaleTo(k, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (k, N) => {
      const S = K(i), H = K(c);
      return H ? (await H.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (k, N, S) => {
      const H = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : K(u), A = K(c);
      return A ? (await A.setViewport({
        x: K(s) / 2 - k * H,
        y: K(a) / 2 - N * H,
        zoom: H
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, N) => {
      const S = K(c);
      if (!S)
        return Promise.resolve(!1);
      const H = ya(k, K(s), K(a), K(l), K(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await S.setViewport(H, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, N = !0, S) => {
      const H = kl(k), A = H ? k : m(k);
      return A ? (S || K(f)).filter((D) => {
        const z = K(v).get(D.id);
        if (!z || !H && D.id === k.id)
          return !1;
        const L = zr(z), I = Co(L, A);
        return N && I > 0 || I >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (k, N, S = !0) => {
      const A = kl(k) ? k : m(k);
      if (!A)
        return !1;
      const D = Co(A, N);
      return S && D > 0 || D >= A.width * A.height;
    },
    deleteElements: async ({ nodes: k = [], edges: N = [] }) => {
      const { nodes: S, edges: H } = await dc({
        nodesToRemove: k,
        edgesToRemove: N,
        nodes: K(f),
        edges: K(d),
        onBeforeDelete: K(r)
      });
      return S && f.update((A) => A.filter((D) => !S.some(({ id: z }) => z === D.id))), H && d.update((A) => A.filter((D) => !H.some(({ id: z }) => z === D.id))), {
        deletedNodes: S,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, N = { snapToGrid: !0 }) => {
      const S = K(h);
      if (!S)
        return k;
      const H = N.snapToGrid ? K(o) : !1, { x: A, y: D, zoom: z } = K(i), { x: L, y: I } = S.getBoundingClientRect(), E = {
        x: k.x - L,
        y: k.y - I
      };
      return Oo(E, [A, D, z], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const N = K(h);
      if (!N)
        return k;
      const { x: S, y: H, zoom: A } = K(i), { x: D, y: z } = N.getBoundingClientRect(), L = vc(k, [S, H, A]);
      return {
        x: L.x + D,
        y: L.y + z
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
    updateNodeData: (k, N, S) => {
      var D;
      const H = (D = K(v).get(k)) == null ? void 0 : D.internals.userNode;
      if (!H)
        return;
      const A = typeof N == "function" ? N(H) : N;
      H.data = S != null && S.replace ? A : { ...H.data, ...A }, f.update((z) => z);
    },
    getNodesBounds: (k) => {
      const N = K(v), S = K(_);
      return k0(k, { nodeLookup: N, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: N, nodeId: S }) => {
      var H;
      return Array.from(((H = K($).get(`${S}-${k}-${N ?? null}`)) == null ? void 0 : H.values()) ?? []);
    },
    viewport: i
  };
}
function Bl(e, t) {
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
var k2 = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function pd(e, t) {
  de(t, !1);
  const [n, r] = nt(), o = () => Q(C, "$nodes", n), i = () => Q(m, "$nodeLookup", n), s = () => Q($, "$viewport", n), a = () => Q(b, "$domNode", n), l = /* @__PURE__ */ re(), u = /* @__PURE__ */ re(), c = /* @__PURE__ */ re();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: m, nodes: C } = We(), { getNodesBounds: p } = Ot(), k = lr("svelteflow__node_id");
  let N = /* @__PURE__ */ re(), S = /* @__PURE__ */ re([]), H = v() !== void 0 ? v() : 10, A = d() !== void 0 ? d() : $e.Top, D = h() !== void 0 ? h() : "center";
  ge(
    () => (o(), J(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || k];
      G(S, M.reduce(
        (x, T) => {
          const P = i().get(T);
          return P && x.push(P), x;
        },
        []
      ));
    }
  ), ge(
    () => (g(S), s()),
    () => {
      const M = p(g(S));
      M && G(N, Y0(M, s(), A, H, D));
    }
  ), ge(() => g(S), () => {
    G(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((M) => (M.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    G(u, o().filter((M) => M.selected).length);
  }), ge(
    () => (J(_()), g(S), g(u)),
    () => {
      G(c, typeof _() == "boolean" ? _() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), gt(), Ae();
  var z = tt(), L = _e(z);
  {
    var I = (M) => {
      var x = k2();
      let T;
      var P = X(x);
      pt(P, t, "default", {}), F(x), vt(x, (V, R) => Er == null ? void 0 : Er(V, R), () => ({ domNode: a() })), Ee(
        (V) => {
          ye(x, "data-id", V), T = dt(x, "", T, {
            position: "absolute",
            transform: g(N),
            "z-index": g(l)
          });
        },
        [
          () => g(S).reduce((V, R) => `${V}${R.id} `, "").trim()
        ],
        me
      ), O(M, x);
    };
    xe(L, (M) => {
      a() && g(c) && g(S) && M(I);
    });
  }
  O(e, z);
  var E = fe({
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
  return r(), E;
}
le(
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
    (!U0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Yl = "tinyflow-component";
class Dw {
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
    const t = document.createElement(Yl);
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
    const n = document.createElement(Yl);
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
  const e = we([]), t = we([]), n = we({ x: 250, y: 100, zoom: 1 });
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
}, ii = $2();
var E2 = /* @__PURE__ */ ie("<button><!></button>");
function je(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = E2();
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
le(je, { children: {} }, [], [], !0);
var S2 = /* @__PURE__ */ ie("<input>");
function md(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = S2();
  lo(r);
  let o;
  Ee(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
le(md, {}, [], [], !0);
var P2 = /* @__PURE__ */ ie("<input>");
function Ct(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = P2();
  lo(r);
  let o;
  Ee(() => o = ln(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
le(Ct, {}, [], [], !0);
var N2 = /* @__PURE__ */ ie("<textarea></textarea>");
function At(e, t) {
  de(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = N2();
  y1(o);
  let i;
  return Ee(() => i = ln(o, i, {
    spellcheck: "false",
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
le(At, { value: {} }, [], [], !0);
var T2 = /* @__PURE__ */ ie('<div role="button"><!></div>'), M2 = /* @__PURE__ */ ie("<div></div>");
function yd(e, t) {
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
  Ae();
  var l = M2();
  let u;
  return Dt(l, 5, o, po, (c, f, d) => {
    var h = T2();
    ye(h, "tabindex", d), h.__click = () => a(g(f), d), h.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(g(f), d));
    };
    var v = X(h);
    {
      var _ = ($) => {
        var m = Be();
        Ee(() => Zt(m, g(f).label)), O($, m);
      }, b = ($) => {
        var m = tt(), C = _e(m);
        ur(C, () => g(f).label ?? ft), O($, m);
      };
      xe(v, ($) => {
        typeof g(f).label == "string" ? $(_) : $(b, !1);
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
Mo(["click", "keydown"]);
le(yd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var H2 = (e, t, n) => t(g(n)), V2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, D2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), A2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), O2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), L2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), I2 = /* @__PURE__ */ ie("<div></div>");
const z2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function wd(e, t) {
  de(t, !0), Qe(e, z2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => on([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = I2();
  return Dt(s, 21, n, po, (a, l, u) => {
    var c = L2(), f = X(c);
    ye(f, "tabindex", u), f.__click = [H2, i, l], f.__keydown = [V2, i, l];
    var d = X(f);
    {
      var h = (p) => {
        var k = D2(), N = X(k);
        Xn(N, {
          get target() {
            return g(l).icon;
          }
        }), F(k), O(p, k);
      };
      xe(d, (p) => {
        g(l).icon && p(h);
      });
    }
    var v = B(d, 2);
    Xn(v, {
      get target() {
        return g(l).title;
      }
    });
    var _ = B(v, 2);
    F(f);
    var b = B(f, 2);
    {
      var $ = (p) => {
        var k = A2(), N = X(k);
        Xn(N, {
          get target() {
            return g(l).description;
          }
        }), F(k), O(p, k);
      };
      xe(b, (p) => {
        g(l).description && p($);
      });
    }
    var m = B(b, 2);
    {
      var C = (p) => {
        var k = O2(), N = X(k);
        Xn(N, {
          get target() {
            return g(l).content;
          }
        }), F(k), O(p, k);
      };
      xe(m, (p) => {
        o().includes(g(l).key) && p(C);
      });
    }
    F(c), Ee((p) => mt(_, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
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
Mo(["click", "keydown"]);
le(wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  de(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = tt(), o = _e(r);
  {
    var i = (a) => {
      var l = tt(), u = _e(l);
      ur(u, () => n() ?? ft), O(a, l);
    }, s = (a) => {
      var l = tt(), u = _e(l);
      sa(u, n), O(a, l);
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
le(Xn, { target: {} }, [], [], !0);
var R2 = (e, t, n) => t(g(n)), B2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Y2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), Z2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), F2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), X2 = /* @__PURE__ */ ie("<!> <!>", 1), W2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), q2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), K2 = /* @__PURE__ */ ie("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (C, p = ft) => {
    var k = tt(), N = _e(k);
    Dt(N, 19, p, (S, H) => `${H}_${S.value}`, (S, H) => {
      var A = Z2(), D = _e(A);
      D.__click = [R2, _, H];
      var z = X(D), L = X(z);
      {
        var I = (T) => {
          var P = B2();
          O(T, P);
        };
        xe(L, (T) => {
          g(H).children && g(H).children.length > 0 && T(I);
        });
      }
      F(z);
      var E = B(z, 2);
      Xn(E, {
        get target() {
          return g(H).label;
        }
      }), F(D);
      var M = B(D, 2);
      {
        var x = (T) => {
          var P = Y2(), V = X(P);
          n(V, () => g(H).children), F(P), O(T, P);
        };
        xe(M, (T) => {
          g(H).children && g(H).children.length > 0 && (l() || c().includes(g(H).value)) && T(x);
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
  ]), h = /* @__PURE__ */ Ne(() => {
    const C = [], p = (k) => {
      for (let N of k)
        s().length > 0 ? s().includes(N.value) && C.push(N) : a().includes(N.value) && C.push(N), N.children && N.children.length > 0 && p(N.children);
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
  var b = K2();
  let $;
  var m = X(b);
  return Cn(
    Yo(m, {
      floating: (p) => {
        var k = F2(), N = X(k);
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
            var L = tt(), I = _e(L);
            {
              var E = (x) => {
                var T = tt(), P = _e(T);
                {
                  var V = (R) => {
                    Xn(R, {
                      get target() {
                        return g(D).label;
                      }
                    });
                  };
                  xe(P, (R) => {
                    g(z) === 0 && R(V);
                  });
                }
                O(x, T);
              }, M = (x) => {
                var T = X2(), P = _e(T);
                Xn(P, {
                  get target() {
                    return g(D).label;
                  }
                });
                var V = B(P, 2);
                {
                  var R = (Y) => {
                    var W = Be(",");
                    O(Y, W);
                  };
                  xe(V, (Y) => {
                    g(z) < g(h).length - 1 && Y(R);
                  });
                }
                O(x, T);
              };
              xe(I, (x) => {
                u() ? x(M, !1) : x(E);
              });
            }
            O(A, L);
          },
          (A) => {
            var D = W2(), z = X(D, !0);
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
  ), F(b), Ee(() => $ = ln(b, $, {
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
Mo(["click"]);
le(
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
const $o = Math.min, Pr = Math.max, Si = Math.round, yn = (e) => ({
  x: e,
  y: e
}), G2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U2 = {
  start: "end",
  end: "start"
};
function Rs(e, t, n) {
  return Pr(e, $o(t, n));
}
function zo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Ro(e) {
  return e.split("-")[1];
}
function _d(e) {
  return e === "x" ? "y" : "x";
}
function ka(e) {
  return e === "y" ? "height" : "width";
}
function Br(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function $a(e) {
  return _d(Br(e));
}
function j2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ro(e), o = $a(e), i = ka(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Pi(s)), [s, Pi(s)];
}
function J2(e) {
  const t = Pi(e);
  return [Bs(e), t, Bs(t)];
}
function Bs(e) {
  return e.replace(/start|end/g, (t) => U2[t]);
}
function Q2(e, t, n) {
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
function em(e, t, n, r) {
  const o = Ro(e);
  let i = Q2(gr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Bs)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => G2[t]);
}
function tm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xd(e) {
  return typeof e != "number" ? tm(e) : {
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
  const i = Br(t), s = $a(t), a = ka(s), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (Ro(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const nm = async (e, t, n) => {
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
  } = Zl(u, r, l), d = r, h = {}, v = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: b,
      fn: $
    } = a[_], {
      x: m,
      y: C,
      data: p,
      reset: k
    } = await $({
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
    } = Zl(u, d, l)), _ = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: h
  };
};
async function bd(e, t) {
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
  } = zo(t, e), v = xd(h), b = a[d ? f === "floating" ? "reference" : "floating" : f], $ = Ni(await i.getClippingRect({
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
  }, k = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: C,
    strategy: l
  }) : m);
  return {
    top: ($.top - k.top + v.top) / p.y,
    bottom: (k.bottom - $.bottom + v.bottom) / p.y,
    left: ($.left - k.left + v.left) / p.x,
    right: (k.right - $.right + v.right) / p.x
  };
}
const rm = (e) => ({
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
    } = zo(e, t) || {};
    if (u == null)
      return {};
    const f = xd(c), d = {
      x: n,
      y: r
    }, h = $a(o), v = ka(h), _ = await s.getDimensions(u), b = h === "y", $ = b ? "top" : "left", m = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[h] - d[h] - i.floating[v], k = d[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let S = N ? N[C] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = a.floating[C] || i.floating[v]);
    const H = p / 2 - k / 2, A = S / 2 - _[v] / 2 - 1, D = $o(f[$], A), z = $o(f[m], A), L = D, I = S - _[v] - z, E = S / 2 - _[v] / 2 + H, M = Rs(L, E, I), x = !l.arrow && Ro(o) != null && E !== M && i.reference[v] / 2 - (E < L ? D : z) - _[v] / 2 < 0, T = x ? E < L ? E - L : E - I : 0;
    return {
      [h]: d[h] + T,
      data: {
        [h]: M,
        centerOffset: E - M - T,
        ...x && {
          alignmentOffset: T
        }
      },
      reset: x
    };
  }
}), om = function(e) {
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
      } = zo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gr(o), m = Br(a), C = gr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (C || !_ ? [Pi(a)] : J2(a)), N = v !== "none";
      !d && N && k.push(...em(a, _, v, p));
      const S = [a, ...k], H = await bd(t, b), A = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(H[$]), f) {
        const E = j2(o, s, p);
        A.push(H[E[0]], H[E[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: A
      }], !A.every((E) => E <= 0)) {
        var z, L;
        const E = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, M = S[E];
        if (M)
          return {
            data: {
              index: E,
              overflows: D
            },
            reset: {
              placement: M
            }
          };
        let x = (L = D.filter((T) => T.overflows[0] <= 0).sort((T, P) => T.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!x)
          switch (h) {
            case "bestFit": {
              var I;
              const T = (I = D.filter((P) => {
                if (N) {
                  const V = Br(P.placement);
                  return V === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((V) => V > 0).reduce((V, R) => V + R, 0)]).sort((P, V) => P[1] - V[1])[0]) == null ? void 0 : I[0];
              T && (x = T);
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
async function im(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = gr(n), a = Ro(n), l = Br(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = zo(t, e);
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
const sm = function(e) {
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
      } = t, l = await im(t, e);
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
}, am = function(e) {
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
              x: $,
              y: m
            } = b;
            return {
              x: $,
              y: m
            };
          }
        },
        ...l
      } = zo(e, t), u = {
        x: n,
        y: r
      }, c = await bd(t, l), f = Br(gr(o)), d = _d(f);
      let h = u[d], v = u[f];
      if (i) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", m = h + c[b], C = h - c[$];
        h = Rs(m, h, C);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", m = v + c[b], C = v - c[$];
        v = Rs(m, v, C);
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
function Kr(e) {
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return Ui() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function cn(e) {
  return Ui() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function kn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function Fl(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
}
function Bo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function lm(e) {
  return ["table", "td", "th"].includes(Kr(e));
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
function Ea(e) {
  const t = Sa(), n = cn(e) ? dn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function um(e) {
  let t = Qn(e);
  for (; kn(t) && !Yr(t); ) {
    if (Ea(t))
      return t;
    if (ji(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Sa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yr(e) {
  return ["html", "body", "#document"].includes(Kr(e));
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
function Qn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fl(e) && e.host || // Fallback.
    zn(e)
  );
  return Fl(t) ? t.host : t;
}
function kd(e) {
  const t = Qn(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Bo(t) ? t : kd(t);
}
function $d(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ft(o);
  return i ? (Ys(s), t.concat(s, s.visualViewport || [], Bo(o) ? o : [], [])) : t.concat(o, $d(o, []));
}
function Ys(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ed(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Si(n) !== i || Si(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Sd(e) {
  return cn(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Sd(e);
  if (!kn(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ed(t);
  let s = (i ? Si(n.width) : n.width) / r, a = (i ? Si(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const cm = /* @__PURE__ */ yn(0);
function Pd(e) {
  const t = Ft(e);
  return !Sa() || !t.visualViewport ? cm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function dm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t;
}
function Eo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Sd(e);
  let s = yn(1);
  t && (r ? cn(r) && (s = Nr(r)) : s = Nr(e));
  const a = dm(i, n, r) ? Pd(i) : yn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Ft(i), h = r && cn(r) ? Ft(r) : r;
    let v = d, _ = Ys(v);
    for (; _ && r && h !== v; ) {
      const b = Nr(_), $ = _.getBoundingClientRect(), m = dn(_), C = $.left + (_.clientLeft + parseFloat(m.paddingLeft)) * b.x, p = $.top + (_.clientTop + parseFloat(m.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += C, u += p, v = Ft(_), _ = Ys(v);
    }
  }
  return Ni({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function Pa(e, t) {
  const n = Ji(e).scrollLeft;
  return t ? t.left + n : Eo(zn(e)).left + n;
}
function Nd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Pa(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function fm(e) {
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
  }, u = yn(1);
  const c = yn(0), f = kn(r);
  if ((f || !f && !i) && ((Kr(r) !== "body" || Bo(s)) && (l = Ji(r)), kn(r))) {
    const h = Eo(r);
    u = Nr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const d = s && !f && !i ? Nd(s, l, !0) : yn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function gm(e) {
  return Array.from(e.getClientRects());
}
function hm(e) {
  const t = zn(e), n = Ji(e), r = e.ownerDocument.body, o = Pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Pa(e);
  const a = -n.scrollTop;
  return dn(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function vm(e, t) {
  const n = Ft(e), r = zn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Sa();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function pm(e, t) {
  const n = Eo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Nr(e) : yn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Xl(e, t, n) {
  let r;
  if (t === "viewport")
    r = vm(e, n);
  else if (t === "document")
    r = hm(zn(e));
  else if (cn(t))
    r = pm(t, n);
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
function Td(e, t) {
  const n = Qn(e);
  return n === t || !cn(n) || Yr(n) ? !1 : dn(n).position === "fixed" || Td(n, t);
}
function mm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $d(e, []).filter((a) => cn(a) && Kr(a) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; cn(s) && !Yr(s); ) {
    const a = dn(s), l = Ea(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Bo(s) && !l && Td(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function ym(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ji(t) ? [] : mm(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Xl(t, c, o);
    return u.top = Pr(f.top, u.top), u.right = $o(f.right, u.right), u.bottom = $o(f.bottom, u.bottom), u.left = Pr(f.left, u.left), u;
  }, Xl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function wm(e) {
  const {
    width: t,
    height: n
  } = Ed(e);
  return {
    width: t,
    height: n
  };
}
function _m(e, t, n) {
  const r = kn(t), o = zn(t), i = n === "fixed", s = Eo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((Kr(t) !== "body" || Bo(o)) && (a = Ji(t)), r) {
      const d = Eo(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = Pa(o));
  const u = o && !r && !i ? Nd(o, a) : yn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ms(e) {
  return dn(e).position === "static";
}
function Wl(e, t) {
  if (!kn(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Md(e, t) {
  const n = Ft(e);
  if (ji(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !Yr(o); ) {
      if (cn(o) && !ms(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Wl(e, t);
  for (; r && lm(r) && ms(r); )
    r = Wl(r, t);
  return r && Yr(r) && ms(r) && !Ea(r) ? n : r || um(e) || n;
}
const xm = async function(e) {
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: _m(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bm(e) {
  return dn(e).direction === "rtl";
}
const Cm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fm,
  getDocumentElement: zn,
  getClippingRect: ym,
  getOffsetParent: Md,
  getElementRects: xm,
  getClientRects: gm,
  getDimensions: wm,
  getScale: Nr,
  isElement: cn,
  isRTL: bm
}, km = sm, $m = am, Em = om, Sm = rm, Pm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Cm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return nm(e, t, {
    ...o,
    platform: i
  });
}, Nm = ({
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
    Pm(e, u, {
      placement: r,
      middleware: [
        km(o),
        // 手动偏移配置
        Em(i),
        //自动翻转
        $m(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Sm({ element: c })] : []
      ]
    }).then(({ x: $, y: m, placement: C, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
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
  function _($) {
    $.stopPropagation(), d ? v() : h();
  }
  function b($) {
    u.contains($.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, _);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, _);
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
var Tm = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Yo(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Qt(() => (a = Nm({
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
  var u = Tm(), c = X(u), f = X(c);
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
le(Yo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = tt(), a = _e(s);
  return S1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = tt(), d = _e(f);
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
le(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Mm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Hm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Qi(e, t) {
  de(t, !0), Qe(e, Hm);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Mm();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
le(Qi, {}, [], [], !0);
const Vm = () => {
  const e = We();
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
  const { nodes: e, nodeLookup: t } = We();
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
}, er = () => lr("tinyflow_options");
var Am = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Om = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Lm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Im = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), zm = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Rm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function hn(e, t) {
  de(t, !0), Qe(e, Rm);
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
  ], { deleteNode: $ } = Vm(), { copyNode: m } = Dm(), C = er(), p = () => {
    var x;
    (x = C.onNodeExecute) == null || x.call(C, _(r()));
  };
  var k = zm(), N = _e(k);
  {
    var S = (x) => {
      pd(x, {
        get position() {
          return $e.Top;
        },
        align: "end",
        children: (T, P) => {
          var V = Im(), R = X(V);
          {
            var Y = (oe) => {
              je(oe, {
                class: "tf-node-toolbar-item",
                onclick: p,
                children: (he, ve) => {
                  var ne = Am();
                  O(he, ne);
                },
                $$slots: { default: !0 }
              });
            };
            xe(R, (oe) => {
              a() && oe(Y);
            });
          }
          var W = B(R, 2);
          {
            var U = (oe) => {
              je(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (he, ve) => {
                  var ne = Om();
                  O(he, ne);
                },
                $$slots: { default: !0 }
              });
            };
            xe(W, (oe) => {
              l() && oe(U);
            });
          }
          var j = B(W, 2);
          {
            var q = (oe) => {
              je(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (he, ve) => {
                  var ne = Lm();
                  O(he, ne);
                },
                $$slots: { default: !0 }
              });
            };
            xe(j, (oe) => {
              u() && oe(q);
            });
          }
          F(V), O(T, V);
        },
        $$slots: { default: !0 }
      });
    };
    xe(N, (x) => {
      (a() || l() || u()) && x(S);
    });
  }
  var H = B(N, 2), A = B(X(H), 2), D = X(A);
  wd(D, {
    items: b,
    activeKeys: h,
    onChange: (x, T) => {
      var P;
      v(r(), { expand: T == null ? void 0 : T.includes("key") }), (P = d()) == null || P(T != null && T.includes("key") ? "key" : "");
    }
  }), F(A), F(H);
  var z = B(H, 2);
  {
    var L = (x) => {
      Jn(x, {
        type: "target",
        get position() {
          return $e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(z, (x) => {
      f() && x(L);
    });
  }
  var I = B(z, 2);
  {
    var E = (x) => {
      Jn(x, {
        type: "source",
        get position() {
          return $e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(I, (x) => {
      c() && x(E);
    });
  }
  var M = B(I, 2);
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
le(
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
], Bm = [
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
var Ym = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Zm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Fm = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Xm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vd(e, t) {
  de(t, !0), Qe(e, Xm);
  const [n, r] = nt(), o = () => Q(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = /* @__PURE__ */ Ne(() => mr(a)), u = /* @__PURE__ */ Ne(() => {
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
  let _;
  const b = () => {
    c(a, (A) => {
      let D = A.data.parameters;
      return D.splice(s(), 1), { parameters: [...D] };
    }), _ == null || _.hide();
  };
  var $ = Fm(), m = _e($), C = X(m);
  Ct(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), F(m);
  var p = B(m, 2), k = X(p);
  md(k, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), F(p);
  var N = B(p, 2), S = X(N);
  Cn(
    Yo(S, {
      placement: "bottom",
      floating: (D) => {
        var z = Ym(), L = X(z), I = B(X(L));
        const E = /* @__PURE__ */ Ne(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        un(I, {
          items: Hd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(E);
          }
        }), F(L);
        var M = B(L, 2), x = B(X(M));
        At(x, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Y) => {
            const W = Y.target.value;
            f("defaultValue", W);
          }
        }), F(M);
        var T = B(M, 2), P = B(X(T));
        At(P, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Y) => {
            const W = Y.target.value;
            f("description", W);
          }
        }), F(T);
        var V = B(T, 2), R = X(V);
        je(R, {
          onclick: b,
          children: (Y, W) => {
            He();
            var U = Be("删除");
            O(Y, U);
          },
          $$slots: { default: !0 }
        }), F(V), F(z), O(D, z);
      },
      children: (D, z) => {
        je(D, {
          class: "input-btn-more",
          children: (L, I) => {
            var E = Zm();
            O(L, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => _ = D,
    () => _
  ), F(N), O(e, $);
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
le(Vd, { parameter: {}, index: {} }, [], [], !0);
var Wm = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), qm = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), Km = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Gm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Dd(e, t) {
  de(t, !0), Qe(e, Gm);
  const [n, r] = nt(), o = () => Q(g(s), "$node", n);
  let i = ht(), s = /* @__PURE__ */ Ne(() => mr(i)), a = /* @__PURE__ */ Ne(() => {
    var d, h;
    return [...((h = (d = o()) == null ? void 0 : d.data) == null ? void 0 : h.parameters) || []];
  });
  var l = Km(), u = X(l);
  {
    var c = (d) => {
      var h = Wm();
      He(4), O(d, h);
    };
    xe(u, (d) => {
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
      Vd(d, {
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
le(Dd, {}, [], [], !0);
const Ad = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Ad(t.children);
  });
}, Sn = () => {
  const { updateNodeData: e } = Ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Ad(r == null ? void 0 : r.children);
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
var Um = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), jm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jm = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Qm = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  de(t, !0), Qe(e, Qm);
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
      var l = Um();
      O(a, l);
    },
    children: (a, l) => {
      var u = Jm(), c = _e(u), f = X(c);
      Je(f, {
        level: 3,
        children: (v, _) => {
          He();
          var b = Be("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(f, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, _) => {
          var b = jm();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), F(c);
      var h = B(c, 2);
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
le(Od, { data: {} }, [], [], !0);
const Ld = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Ld(e, r.source, n));
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
}, ey = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o } = We();
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
      Ld(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = ql(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var ty = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ny = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ry = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  de(t, !0), Qe(e, ry);
  const [n, r] = nt(), o = () => Q(g(c), "$node", n), i = () => Q(p, "$selectItems", n);
  Qt(() => {
    g(f).refType || $({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Ne(() => mr(u)), f = /* @__PURE__ */ Ne(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Ot(), h = (M, x) => {
    d(u, (T) => {
      let P = T.data[l()];
      return P[a()] = { ...P[a()], [M]: x }, { [l()]: P };
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
  }, $ = (M) => {
    const x = M.value;
    h("refType", x);
  };
  let m;
  const C = () => {
    d(u, (M) => {
      let x = M.data[l()];
      return x.splice(a(), 1), { [l()]: [...x] };
    }), m == null || m.hide();
  }, p = ey();
  var k = ny(), N = _e(k), S = X(N);
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
        oninput: _
      });
    }, z = (M, x) => {
      {
        var T = (P) => {
          const V = /* @__PURE__ */ Ne(() => [g(f).ref]);
          un(P, {
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
        xe(
          M,
          (P) => {
            g(f).refType !== "input" && P(T);
          },
          x
        );
      }
    };
    xe(A, (M) => {
      g(f).refType === "fixed" ? M(D) : M(z, !1);
    });
  }
  F(H);
  var L = B(H, 2), I = X(L);
  Cn(
    Yo(I, {
      placement: "bottom",
      floating: (x) => {
        var T = ty(), P = X(T), V = B(X(P));
        const R = /* @__PURE__ */ Ne(() => g(f).refType ? [g(f).refType] : []);
        un(V, {
          items: Bm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(R);
          },
          onSelect: $
        }), F(P);
        var Y = B(P, 2), W = B(X(Y));
        At(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (he) => {
            const ve = he.target.value;
            h("defaultValue", ve);
          }
        }), F(Y);
        var U = B(Y, 2), j = B(X(U));
        At(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (he) => {
            const ve = he.target.value;
            h("description", ve);
          }
        }), F(U);
        var q = B(U, 2), oe = X(q);
        je(oe, {
          onclick: C,
          children: (he, ve) => {
            He();
            var ne = Be("删除");
            O(he, ne);
          },
          $$slots: { default: !0 }
        }), F(q), F(T), O(x, T);
      },
      children: (x, T) => {
        Qi(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => m = x,
    () => m
  ), F(L), O(e, k);
  var E = fe({
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
  return r(), E;
}
le(Id, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var oy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), iy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), sy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ay = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  de(t, !0), Qe(e, ay);
  const [n, r] = nt(), o = () => Q(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = /* @__PURE__ */ Ne(() => mr(a)), u = /* @__PURE__ */ Ne(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = sy(), f = X(c);
  {
    var d = (_) => {
      var b = oy();
      He(4), O(_, b);
    };
    xe(f, (_) => {
      g(u).length !== 0 && _(d);
    });
  }
  var h = B(f, 2);
  Dt(
    h,
    19,
    () => g(u),
    (_) => _.id,
    (_, b, $) => {
      Id(_, {
        get parameter() {
          return g(b);
        },
        get index() {
          return g($);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (_) => {
      var b = iy(), $ = X(b, !0);
      F(b), Ee(() => Zt($, i())), O(_, b);
    }
  ), F(c), O(e, c);
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
le(Bt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ly = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), uy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cy = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const dy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  de(t, !0), Qe(e, dy);
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
        var l = ly();
        O(a, l);
      },
      children: (a, l) => {
        var u = cy(), c = _e(u), f = X(c);
        Je(f, {
          level: 3,
          children: (v, _) => {
            He();
            var b = Be("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(f, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, _) => {
            var b = uy();
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
le(zd, { data: {} }, [], [], !0);
var fy = /* @__PURE__ */ be('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), gy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), hy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), vy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const py = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  de(t, !0), Qe(e, py);
  const [n, r] = nt(), o = () => Q(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Ne(() => mr(l)), c = /* @__PURE__ */ Ne(() => {
    var V;
    let T = (V = o()) == null ? void 0 : V.data[a()], P;
    if (T && s().length > 0) {
      let R = T;
      for (let Y = 0; Y < s().length; Y++) {
        const W = s()[Y];
        Y == s().length - 1 ? P = R[W] : R = R[W].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: f } = Ot(), d = (T, P) => {
    f(l, (V) => {
      const R = V.data[a()];
      if (R && s().length > 0) {
        let Y = R;
        for (let W = 0; W < s().length; W++) {
          const U = s()[W];
          W == s().length - 1 ? Y[U] = { ...Y[U], [T]: P } : Y = R[U].children;
        }
      }
      return { [a()]: R };
    });
  }, h = (T) => {
    const P = T.target.value;
    d("name", P);
  }, v = (T) => {
    const P = T.value;
    d("dataType", P);
  };
  let _;
  const b = () => {
    f(l, (T) => {
      let P = T.data[a()];
      if (P && s().length > 0) {
        let V = P;
        for (let R = 0; R < s().length; R++) {
          const Y = s()[R];
          R == s().length - 1 ? V.splice(Y, 1) : V = V[Y].children;
        }
      }
      return { [a()]: [...P] };
    }), _ == null || _.hide();
  }, $ = () => {
    f(l, (T) => {
      let P = T.data[a()];
      if (P && s().length > 0) {
        let V = P;
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
      return { [a()]: [...P] };
    });
  };
  var m = vy(), C = _e(m), p = X(C);
  {
    var k = (T) => {
      var P = tt(), V = _e(P);
      Dt(V, 17, s, po, (R, Y) => {
        He();
        var W = Be(" ");
        O(R, W);
      }), O(T, P);
    };
    xe(p, (T) => {
      s().length > 1 && T(k);
    });
  }
  var N = B(p, 2);
  const S = /* @__PURE__ */ Ne(() => g(c).nameDisabled === !0);
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
  const D = /* @__PURE__ */ Ne(() => g(c).dataType ? [g(c).dataType] : []), z = /* @__PURE__ */ Ne(() => g(c).dataTypeDisabled === !0);
  un(A, {
    items: Hd,
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
    var I = (T) => {
      je(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (P, V) => {
          var R = fy();
          O(P, R);
        },
        $$slots: { default: !0 }
      });
    };
    xe(L, (T) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && T(I);
    });
  }
  F(H);
  var E = B(H, 2), M = X(E);
  Cn(
    Yo(M, {
      placement: "bottom",
      floating: (P) => {
        var V = hy(), R = X(V), Y = B(X(R));
        const W = /* @__PURE__ */ Ne(() => g(c).defaultValue || "");
        At(Y, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (ve) => {
            const ne = ve.target.value;
            d("defaultValue", ne);
          }
        }), F(R);
        var U = B(R, 2), j = B(X(U));
        const q = /* @__PURE__ */ Ne(() => g(c).description || "");
        At(j, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(q);
          },
          onchange: (ve) => {
            const ne = ve.target.value;
            d("description", ne);
          }
        }), F(U);
        var oe = B(U, 2);
        {
          var he = (ve) => {
            var ne = gy(), De = X(ne);
            je(De, {
              onclick: b,
              children: (ae, ue) => {
                He();
                var Ce = Be("删除");
                O(ae, Ce);
              },
              $$slots: { default: !0 }
            }), F(ne), O(ve, ne);
          };
          xe(oe, (ve) => {
            g(c).deleteDisabled !== !0 && ve(he);
          });
        }
        F(V), O(P, V);
      },
      children: (P, V) => {
        Qi(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => _ = P,
    () => _
  ), F(E), O(e, m);
  var x = fe({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), y();
    },
    get position() {
      return s();
    },
    set position(T) {
      s(T), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(T) {
      a(T), y();
    }
  });
  return r(), x;
}
le(Rd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var my = /* @__PURE__ */ ie("<!> <!>", 1), yy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), wy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), _y = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const xy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  de(t, !0), Qe(e, xy);
  const [n, r] = nt(), o = () => Q(g(u), "$node", n), i = (b, $ = ft, m = ft) => {
    var C = tt(), p = _e(C);
    Dt(
      p,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, N, S) => {
        var H = my(), A = _e(H);
        const D = /* @__PURE__ */ Ne(() => [...m(), g(S)]);
        Rd(A, {
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
            var E = /* @__PURE__ */ me(() => [...m(), g(S)]);
            i(I, () => g(N).children, () => g(E));
          };
          xe(z, (I) => {
            g(N).children && I(L);
          });
        }
        O(k, H);
      },
      (k) => {
        var N = tt(), S = _e(N);
        {
          var H = (A) => {
            var D = yy(), z = X(D, !0);
            F(D), Ee(() => Zt(z, s())), O(A, D);
          };
          xe(S, (A) => {
            m().length === 0 && A(H);
          });
        }
        O(k, N);
      }
    ), O(b, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Ne(() => mr(l)), c = /* @__PURE__ */ Ne(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var f = _y(), d = X(f);
  {
    var h = (b) => {
      var $ = wy();
      He(4), O(b, $);
    };
    xe(d, (b) => {
      g(c).length !== 0 && b(h);
    });
  }
  var v = B(d, 2);
  i(v, () => g(c) || [], () => []), F(f), O(e, f);
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
le(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var by = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Cy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ky = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), $y = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ey = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Sy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ny = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Bd(e, t) {
  de(t, !0), Qe(e, Ny);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = er();
  let a = /* @__PURE__ */ bt(on([]));
  Qt(async () => {
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
        var f = by();
        O(c, f);
      },
      children: (c, f) => {
        var d = Py(), h = _e(d), v = X(h);
        Je(v, {
          level: 3,
          children: (Ce, ke) => {
            He();
            var Ve = Be("输入参数");
            O(Ce, Ve);
          },
          $$slots: { default: !0 }
        });
        var _ = B(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Ce, ke) => {
            var Ve = Cy();
            O(Ce, Ve);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var $ = B(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (Ce, ke) => {
            He();
            var Ve = Be("模型设置");
            O(Ce, Ve);
          },
          $$slots: { default: !0 }
        });
        var m = B($, 4), C = X(m);
        const p = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        un(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (Ce) => {
            const ke = Ce.value;
            l(o, () => ({ llmId: ke }));
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
        lo(D), D.__input = [ky, l, o], F(S), F(N);
        var z = B(N, 2), L = X(z), I = X(L), E = X(I);
        F(I);
        var M = B(I, 2);
        lo(M), M.__input = [$y, l, o], F(L), F(z);
        var x = B(z, 2), T = X(x), P = X(T), V = X(P);
        F(P);
        var R = B(P, 2);
        lo(R), R.__input = [Ey, l, o], F(T), F(x);
        var Y = B(x, 4), W = X(Y);
        const U = /* @__PURE__ */ Ne(() => n().systemPrompt || "");
        At(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(U);
          },
          oninput: (Ce) => {
            l(o, { systemPrompt: Ce.target.value });
          }
        }), F(Y);
        var j = B(Y, 4), q = X(j);
        const oe = /* @__PURE__ */ Ne(() => n().userPrompt || "");
        At(q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(oe);
          },
          oninput: (Ce) => {
            l(o, { userPrompt: Ce.target.value });
          }
        }), F(j);
        var he = B(j, 2), ve = X(he);
        Je(ve, {
          level: 3,
          mt: "10px",
          children: (Ce, ke) => {
            He();
            var Ve = Be("输出参数");
            O(Ce, Ve);
          },
          $$slots: { default: !0 }
        });
        var ne = B(ve, 2);
        const De = /* @__PURE__ */ Ne(() => n().outType ? [n().outType] : []);
        un(ne, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (Ce) => {
            const ke = Ce.value;
            l(o, () => ({ outType: ke }));
          },
          get value() {
            return g(De);
          }
        });
        var ae = B(ne, 2);
        je(ae, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Ce, ke) => {
            var Ve = Sy();
            O(Ce, Ve);
          },
          $$slots: { default: !0 }
        }), F(he);
        var ue = B(he, 2);
        Rn(ue, {}), Ee(() => {
          Zt(A, `Temperature: ${n().temperature ?? 0.5}`), is(D, n().temperature ?? 0.5), Zt(E, `Top P: ${n().topP ?? 0.9}`), is(M, n().topP ?? 0.9), Zt(V, `Top K: ${n().topK ?? 50}`), is(R, n().topK ?? 50);
        }), O(c, d);
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
Mo(["input"]);
le(Bd, { data: {} }, [], [], !0);
var Ty = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), My = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  de(t, !0), Qe(e, Dy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Qt(() => {
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
        var c = Ty();
        O(u, c);
      },
      children: (u, c) => {
        var f = Vy(), d = _e(f), h = X(d);
        Je(h, {
          level: 3,
          children: (z, L) => {
            He();
            var I = Be("输入参数");
            O(z, I);
          },
          $$slots: { default: !0 }
        });
        var v = B(h, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, L) => {
            var I = My();
            O(z, I);
          },
          $$slots: { default: !0 }
        }), F(d);
        var _ = B(d, 2);
        Bt(_, {});
        var b = B(_, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (z, L) => {
            He();
            var I = Be("代码");
            O(z, I);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), m = X($);
        const C = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
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
        }), F($);
        var p = B($, 4), k = X(p);
        const N = /* @__PURE__ */ Ne(() => n().code || "");
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
        Je(H, {
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
        je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, L) => {
            var I = Hy();
            O(z, I);
          },
          $$slots: { default: !0 }
        }), F(S);
        var D = B(S, 2);
        Rn(D, {}), O(u, f);
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
le(Yd, { data: {} }, [], [], !0);
var Ay = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Oy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Iy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), Qe(e, Iy);
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
  }), hn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ay();
        O(l, u);
      },
      children: (l, u) => {
        var c = Ly(), f = _e(c), d = X(f);
        Je(d, {
          level: 3,
          children: (N, S) => {
            He();
            var H = Be("输入参数");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var h = B(d, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var H = Oy();
            O(N, H);
          },
          $$slots: { default: !0 }
        }), F(f);
        var v = B(f, 2);
        Bt(v, {});
        var _ = B(v, 2);
        Je(_, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            He();
            var H = Be("代码");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var b = B(_, 4), $ = X(b);
        const m = /* @__PURE__ */ Ne(() => n().template || "");
        At($, {
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
        Je(p, {
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
le(Zd, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ry = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Fy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Wy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), qy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Ky = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Fd(e, t) {
  de(t, !0), Qe(e, Uy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Qt(() => {
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
        var c = zy();
        O(u, c);
      },
      children: (u, c) => {
        var f = Gy(), d = _e(f), h = X(d), v = X(h);
        const _ = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        un(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const pe = se.value;
            a(i, () => ({ method: pe }));
          },
          get value() {
            return g(_);
          }
        }), F(h);
        var b = B(h, 2), $ = X(b);
        const m = /* @__PURE__ */ Ne(() => n().url || "");
        Ct($, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            a(i, () => ({ url: se.target.value }));
          },
          get value() {
            return g(m);
          }
        }), F(b), F(d);
        var C = B(d, 2), p = X(C);
        Je(p, {
          level: 3,
          children: (se, pe) => {
            He();
            var Pe = Be("Http 头信息");
            O(se, Pe);
          },
          $$slots: { default: !0 }
        });
        var k = B(p, 2);
        je(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (se, pe) => {
            var Pe = Ry();
            O(se, Pe);
          },
          $$slots: { default: !0 }
        }), F(C);
        var N = B(C, 2);
        Bt(N, { dataKeyName: "headers" });
        var S = B(N, 2), H = X(S);
        Je(H, {
          level: 3,
          children: (se, pe) => {
            He();
            var Pe = Be("参数");
            O(se, Pe);
          },
          $$slots: { default: !0 }
        });
        var A = B(H, 2);
        je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (se, pe) => {
            var Pe = By();
            O(se, Pe);
          },
          $$slots: { default: !0 }
        }), F(S);
        var D = B(S, 2);
        Bt(D, { dataKeyName: "urlParameters" });
        var z = B(D, 2);
        Je(z, {
          level: 3,
          mt: "10px",
          children: (se, pe) => {
            He();
            var Pe = Be("Body");
            O(se, Pe);
          },
          $$slots: { default: !0 }
        });
        var L = B(z, 2), I = X(L), E = X(I);
        const M = /* @__PURE__ */ Ne(() => !n().bodyType);
        Ct(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(M);
          },
          onchange: (se) => {
            var pe;
            (pe = se.target) != null && pe.checked && a(i, { bodyType: "" });
          }
        }), He(), F(I);
        var x = B(I, 2), T = X(x);
        const P = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        Ct(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (se) => {
            var pe;
            (pe = se.target) != null && pe.checked && a(i, { bodyType: "form-data" });
          }
        }), He(), F(x);
        var V = B(x, 2), R = X(V);
        const Y = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        Ct(R, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Y);
          },
          onchange: (se) => {
            var pe;
            (pe = se.target) != null && pe.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), He(), F(V);
        var W = B(V, 2), U = X(W);
        const j = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        Ct(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(j);
          },
          onchange: (se) => {
            var pe;
            (pe = se.target) != null && pe.checked && a(i, { bodyType: "json" });
          }
        }), He(), F(W);
        var q = B(W, 2), oe = X(q);
        const he = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        Ct(oe, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(he);
          },
          onchange: (se) => {
            var pe;
            (pe = se.target) != null && pe.checked && a(i, { bodyType: "raw" });
          }
        }), He(), F(q), F(L);
        var ve = B(L, 2);
        {
          var ne = (se) => {
            var pe = Zy(), Pe = _e(pe), Te = X(Pe);
            Je(Te, {
              level: 3,
              children: (ee, Ze) => {
                He();
                var ce = Be("参数");
                O(ee, ce);
              },
              $$slots: { default: !0 }
            });
            var at = B(Te, 2);
            je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (ee, Ze) => {
                var ce = Yy();
                O(ee, ce);
              },
              $$slots: { default: !0 }
            }), F(Pe);
            var ut = B(Pe, 2);
            Bt(ut, { dataKeyName: "fromData" }), O(se, pe);
          };
          xe(ve, (se) => {
            n().bodyType === "form-data" && se(ne);
          });
        }
        var De = B(ve, 2);
        {
          var ae = (se) => {
            var pe = Xy(), Pe = _e(pe), Te = X(Pe);
            Je(Te, {
              level: 3,
              children: (ee, Ze) => {
                He();
                var ce = Be("参数");
                O(ee, ce);
              },
              $$slots: { default: !0 }
            });
            var at = B(Te, 2);
            je(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (ee, Ze) => {
                var ce = Fy();
                O(ee, ce);
              },
              $$slots: { default: !0 }
            }), F(Pe);
            var ut = B(Pe, 2);
            Bt(ut, { dataKeyName: "fromUrlencoded" }), O(se, pe);
          };
          xe(De, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(ae);
          });
        }
        var ue = B(De, 2);
        {
          var Ce = (se) => {
            var pe = Wy(), Pe = X(pe);
            At(Pe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Te) => {
                a(i, { bodyJson: Te.target.value });
              }
            }), F(pe), O(se, pe);
          };
          xe(ue, (se) => {
            n().bodyType === "json" && se(Ce);
          });
        }
        var ke = B(ue, 2);
        {
          var Ve = (se) => {
            var pe = qy(), Pe = X(pe);
            At(Pe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Te) => {
                a(i, { bodyRaw: Te.target.value });
              }
            }), F(pe), O(se, pe);
          };
          xe(ke, (se) => {
            n().bodyType === "raw" && se(Ve);
          });
        }
        var te = B(ke, 2), Xe = X(te);
        Je(Xe, {
          level: 3,
          mt: "10px",
          children: (se, pe) => {
            He();
            var Pe = Be("输出参数");
            O(se, Pe);
          },
          $$slots: { default: !0 }
        });
        var Ue = B(Xe, 2);
        je(Ue, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (se, pe) => {
            var Pe = Ky();
            O(se, Pe);
          },
          $$slots: { default: !0 }
        }), F(te);
        var Ye = B(te, 2);
        Rn(Ye, {}), O(u, f);
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
le(Fd, { data: {} }, [], [], !0);
var jy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Jy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ew = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  de(t, !0), Qe(e, ew);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = er();
  let a = /* @__PURE__ */ bt(on([]));
  Qt(async () => {
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
        var f = jy();
        O(c, f);
      },
      children: (c, f) => {
        var d = Qy(), h = _e(d), v = X(h);
        Je(v, {
          level: 3,
          children: (I, E) => {
            He();
            var M = Be("输入参数");
            O(I, M);
          },
          $$slots: { default: !0 }
        });
        var _ = B(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, E) => {
            var M = Jy();
            O(I, M);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var $ = B(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            He();
            var M = Be("知识库设置");
            O(I, M);
          },
          $$slots: { default: !0 }
        });
        var m = B($, 4), C = X(m);
        const p = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (I) => {
            const E = I.value;
            l(o, () => ({ knowledgeId: E }));
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
            const E = I.target.value;
            l(o, () => ({ keyword: E }));
          }
        }), F(k);
        var S = B(k, 4), H = X(S);
        const A = /* @__PURE__ */ Ne(() => n().limit || "");
        Ct(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (I) => {
            const E = I.target.value;
            l(o, () => ({ limit: E }));
          },
          get value() {
            return g(A);
          }
        }), F(S);
        var D = B(S, 2), z = X(D);
        Je(z, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            He();
            var M = Be("输出参数");
            O(I, M);
          },
          $$slots: { default: !0 }
        }), F(D);
        var L = B(D, 2);
        Rn(L, {}), O(c, d);
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
le(Xd, { data: {} }, [], [], !0);
var tw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), nw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ow = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  de(t, !0), Qe(e, ow);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = er();
  let a = /* @__PURE__ */ bt(on([]));
  Qt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : f.call(c));
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
        var f = tw();
        O(c, f);
      },
      children: (c, f) => {
        var d = rw(), h = _e(d), v = X(h);
        Je(v, {
          level: 3,
          children: (L, I) => {
            He();
            var E = Be("输入参数");
            O(L, E);
          },
          $$slots: { default: !0 }
        });
        var _ = B(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, I) => {
            var E = nw();
            O(L, E);
          },
          $$slots: { default: !0 }
        }), F(h);
        var b = B(h, 2);
        Bt(b, {});
        var $ = B(b, 2);
        Je($, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            He();
            var E = Be("搜索引擎设置");
            O(L, E);
          },
          $$slots: { default: !0 }
        });
        var m = B($, 4), C = X(m);
        const p = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : []);
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
        Je(D, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            He();
            var E = Be("输出参数");
            O(L, E);
          },
          $$slots: { default: !0 }
        }), F(A);
        var z = B(A, 2);
        Rn(z, {}), O(c, d);
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
le(Wd, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), sw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const lw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function qd(e, t) {
  de(t, !0), Qe(e, lw);
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
      icon: (l) => {
        var u = iw();
        O(l, u);
      },
      handle: (l) => {
        Jn(l, {
          type: "source",
          get position() {
            return $e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = aw(), f = _e(c), d = X(f);
        Je(d, {
          level: 3,
          children: (m, C) => {
            He();
            var p = Be("循环变量");
            O(m, p);
          },
          $$slots: { default: !0 }
        });
        var h = B(d, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (m, C) => {
            var p = sw();
            O(m, p);
          },
          $$slots: { default: !0 }
        }), F(f);
        var v = B(f, 2);
        Bt(v, {});
        var _ = B(v, 2), b = X(_);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (m, C) => {
            He();
            var p = Be("输出参数");
            O(m, p);
          },
          $$slots: { default: !0 }
        }), F(_);
        var $ = B(_, 2);
        Rn($, {}), O(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
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
le(qd, { data: {} }, [], [], !0);
const uw = {
  startNode: Od,
  codeNode: Yd,
  llmNode: Bd,
  templateNode: Zd,
  httpNode: Fd,
  knowledgeNode: Xd,
  searchEngineNode: Wd,
  loopNode: qd,
  endNode: zd
};
var cw = /* @__PURE__ */ ie("<!> ", 1);
function Zs(e, t) {
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
      var c = cw(), f = _e(c);
      sa(f, n);
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
le(
  Zs,
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
var dw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), fw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), gw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
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
  ], s = [], a = er().customNodes;
  if (a) {
    const b = Object.keys(a).sort(($, m) => (a[$].sortNo || 0) - (a[m].sortNo || 0));
    for (let $ of b)
      s.push({
        icon: a[$].icon,
        title: a[$].title,
        type: $
      });
  }
  var l = gw(), u = X(l), c = X(u), f = X(c);
  yd(f, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      G(n, b.value.toString(), !0);
    }
  }), F(c);
  var d = B(c, 2), h = X(d);
  Dt(h, 21, () => o, po, (b, $) => {
    Zs(b, ct(() => g($)));
  }), F(h);
  var v = B(h, 2);
  Dt(v, 21, () => s, po, (b, $) => {
    Zs(b, ct(() => g($)));
  }), F(v), F(d), F(u);
  var _ = B(u, 2);
  je(_, {
    onclick: () => {
      G(r, g(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var m = tt(), C = _e(m);
      {
        var p = (N) => {
          var S = dw();
          O(N, S);
        }, k = (N) => {
          var S = fw();
          O(N, S);
        };
        xe(C, (N) => {
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
le(Kd, {}, [], [], !0);
const hw = () => {
  const { nodeLookup: e } = We();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, vw = () => {
  const { nodes: e } = We();
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
}, pw = () => {
  const { edges: e } = We();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var mw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), ww = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ ie("<!> <div></div> <!>", 1);
const bw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Gd(e, t) {
  var h;
  de(t, !0), Qe(e, bw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Sn(), s = Ot(), a = { ...r, id: o, data: n() }, l = document.createElement("div"), c = er().customNodes[t.type];
  (h = c.render) == null || h.call(c, l, a, s);
  let f;
  Un(() => {
    n().expand && f && f.append(l);
  }), Un(() => {
    var v;
    n() && ((v = c.onUpdate) == null || v.call(c, l, { ...a, data: n() }));
  });
  const d = /* @__PURE__ */ Ne(() => ({
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
      icon: (_) => {
        var b = tt(), $ = _e(b);
        sa($, () => c.icon), O(_, b);
      },
      children: (_, b) => {
        var $ = xw(), m = _e($);
        {
          var C = (S) => {
            var H = yw(), A = _e(H), D = X(A);
            Je(D, {
              level: 3,
              children: (I, E) => {
                He();
                var M = Be("输入参数");
                O(I, M);
              },
              $$slots: { default: !0 }
            });
            var z = B(D, 2);
            je(z, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o);
              },
              children: (I, E) => {
                var M = mw();
                O(I, M);
              },
              $$slots: { default: !0 }
            }), F(A);
            var L = B(A, 2);
            Bt(L, {}), O(S, H);
          };
          xe(m, (S) => {
            c.parametersEnable !== !1 && S(C);
          });
        }
        var p = B(m, 2);
        Cn(p, (S) => f = S, () => f);
        var k = B(p, 2);
        {
          var N = (S) => {
            var H = _w(), A = _e(H), D = X(A);
            Je(D, {
              level: 3,
              mt: "10px",
              children: (I, E) => {
                He();
                var M = Be("输出参数");
                O(I, M);
              },
              $$slots: { default: !0 }
            });
            var z = B(D, 2);
            je(z, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (I, E) => {
                var M = ww();
                O(I, M);
              },
              $$slots: { default: !0 }
            }), F(A);
            var L = B(A, 2);
            Rn(L, {}), O(S, H);
          };
          xe(k, (S) => {
            c.outputDefsEnable !== !1 && S(N);
          });
        }
        Ee(() => {
          dt(p, c.rootStyle || ""), mt(p, 1, fn(c.rootClass), "svelte-c71dg3");
        }), O(_, $);
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
le(Gd, { data: {} }, [], [], !0);
const Cw = () => {
  const e = We();
  return {
    updateEdgeData: (n, r, o) => {
      const i = K(e.edgeLookup).get(n);
      if (!i)
        return;
      const s = typeof r == "function" ? r(i) : r;
      i.data = o != null && o.replace ? s : { ...i.data, ...s }, e.edges.update(
        (a) => a.map((l) => l.id === n ? i : l)
      );
    }
  };
};
var kw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), $w = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), Ew = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Sw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Ud(e, t) {
  de(t, !0), Qe(e, Sw);
  const [n, r] = nt(), o = () => Q(H, "$nodes", n), i = () => Q(A, "$edges", n), s = () => Q(D, "$viewport", n), a = w(t, "onInit", 7), l = Ot();
  a()(l);
  let u = /* @__PURE__ */ bt(!1), c = /* @__PURE__ */ bt(void 0);
  const { updateEdgeData: f } = Cw(), d = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, h = (P) => {
    var U;
    P.preventDefault();
    const V = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), R = (U = P.dataTransfer) == null ? void 0 : U.getData("application/tinyflow"), Y = R ? JSON.parse(R) : {}, W = {
      id: `node_${Zr()}`,
      position: V,
      data: {},
      ...Y
    };
    ii.addNode(W), ii.selectNodeOnly(W.id);
  }, { getNode: v } = hw(), _ = (P) => {
    const V = v(P.source), R = v(P.target);
    if (P.sourceHandle === "loop_handle" || V.parentId) {
      const Y = l.getEdges();
      for (let W of Y)
        if (W.target === P.target) {
          const U = v(W.source);
          if (P.sourceHandle === "loop_handle" && U.parentId !== V.id || V.parentId && U.parentId !== V.parentId)
            return !1;
        }
    }
    return !(!V.parentId && R.parentId && R.parentId !== V.id);
  }, { ensureParentInNodesBefore: b } = vw(), $ = (P, V) => {
    if (!V.isValid)
      return;
    const R = V.toNode;
    if (R.parentId)
      return;
    const Y = V.fromNode, W = V.fromHandle, U = { position: { ...R.position } };
    if (W.id === "loop_handle" ? U.parentId = Y.id : Y.parentId && (U.parentId = Y.parentId), U.parentId) {
      const j = v(U.parentId);
      U.position = {
        x: R.position.x - j.position.x,
        y: R.position.y - j.position.y
      }, b(U.parentId, R.id), l.updateNode(R.id, U);
    }
  }, { getEdgesByTarget: m } = pw(), C = (P) => {
    P.edges.forEach((R) => {
      const Y = v(R.target);
      if (Y && Y.parentId) {
        const W = m(R.target), U = v(Y.parentId);
        if (W.length === 0)
          l.updateNode(Y.id, {
            parentId: void 0,
            position: {
              x: Y.position.x + U.position.x,
              y: Y.position.y + U.position.y
            }
          });
        else {
          let j = !1;
          for (let q = 0; q < W.length; q++) {
            const oe = W[q], he = v(oe.source);
            if (he.parentId || he.type === "loopNode") {
              j = !0;
              break;
            }
          }
          j || l.updateNode(Y.id, {
            parentId: void 0,
            position: {
              x: Y.position.x + U.position.x,
              y: Y.position.y + U.position.y
            }
          });
        }
      }
    });
  }, p = (P, V) => {
  }, k = (P) => {
  }, N = {}, S = er().customNodes;
  if (S)
    for (let P of Object.keys(S))
      N[P] = Gd;
  const { nodes: H, edges: A, viewport: D } = We(), z = er().onDataChange;
  z && (H.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "nodesChange" }
    );
  }), A.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "edgesChange" }
    );
  }), D.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = Ew(), I = X(L);
  const E = /* @__PURE__ */ Ne(() => ({ ...uw, ...N })), M = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  rd(I, ct(
    {
      get nodeTypes() {
        return g(E);
      }
    },
    ii,
    {
      class: "tinyflow-logo",
      isValidConnection: _,
      onconnectend: $,
      onconnectstart: p,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (P) => {
        const V = P.target;
        V.classList.contains("svelte-flow__edge-interaction") || V.classList.contains("panel-content") || V.closest(".panel-content") || (G(u, !1), G(c, null));
      },
      get defaultEdgeOptions() {
        return g(M);
      },
      $$events: {
        drop: h,
        dragover: d,
        edgeclick: (P) => {
          G(u, !0), G(c, P.detail.edge, !0);
        }
      },
      children: (P, V) => {
        var R = $w(), Y = _e(R);
        gd(Y, {});
        var W = B(Y, 2);
        cd(W, {});
        var U = B(W, 2);
        vd(U, {});
        var j = B(U, 2);
        {
          var q = (oe) => {
            Io(oe, {
              children: (he, ve) => {
                var ne = kw(), De = B(X(ne), 4), ae = X(De);
                const ue = /* @__PURE__ */ Ne(() => {
                  var Ce, ke;
                  return (ke = (Ce = g(c)) == null ? void 0 : Ce.data) == null ? void 0 : ke.condition;
                });
                At(ae, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(ue);
                  },
                  onchange: (Ce) => {
                    g(c) && f(g(c).id, { condition: Ce.target.value });
                  }
                }), F(De), F(ne), O(he, ne);
              },
              $$slots: { default: !0 }
            });
          };
          xe(j, (oe) => {
            g(u) && oe(q);
          });
        }
        O(P, R);
      },
      $$slots: { default: !0 }
    }
  ));
  var x = B(I, 2);
  Kd(x, {}), F(L), O(e, L);
  var T = fe({
    get onInit() {
      return a();
    },
    set onInit(P) {
      a(P), y();
    }
  });
  return r(), T;
}
le(Ud, { onInit: {} }, [], [], !0);
function Pw(e, t) {
  de(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ii.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Dr("tinyflow_options", n()), od(e, {
    fitView: !0,
    children: (i, s) => {
      Ud(i, {
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
customElements.define("tinyflow-component", le(Pw, { options: {}, onInit: {} }, [], [], !1));
export {
  Dw as Tinyflow
};
//# sourceMappingURL=index.js.map
