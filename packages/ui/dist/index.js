var mf = Object.defineProperty;
var Ba = (e) => {
  throw TypeError(e);
};
var yf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pt = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n), as = (e, t, n) => t.has(e) || Ba("Cannot " + n);
var dt = (e, t, n) => (as(e, t, "read from private field"), n ? n.call(e) : t.get(e)), or = (e, t, n) => t.has(e) ? Ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ro = (e, t, n, r) => (as(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), qa = (e, t, n) => (as(e, t, "access private method"), n);
const wf = "5";
var Ul;
typeof window < "u" && ((Ul = window.__svelte ?? (window.__svelte = {})).v ?? (Ul.v = /* @__PURE__ */ new Set())).add(wf);
let Xr = !1, _f = !1;
function xf() {
  Xr = !0;
}
xf();
const Gs = 1, Us = 2, Jl = 4, bf = 8, Cf = 16, kf = 1, $f = 2, Ql = 4, Ef = 8, Sf = 16, eu = 1, Pf = 2, Js = "[", Qs = "[!", ea = "]", $r = {}, It = Symbol(), Nf = "http://www.w3.org/1999/xhtml", Tf = "http://www.w3.org/2000/svg", Ya = !1;
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, Mf = Array.prototype.indexOf, ta = Array.from, li = Object.keys, ho = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, tu = Object.getOwnPropertyDescriptors, Hf = Object.prototype, Df = Array.prototype, na = Object.getPrototypeOf, Fa = Object.isExtensible;
function oo(e) {
  return typeof e == "function";
}
const yt = () => {
};
function Vf(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cn = 2, nu = 4, Li = 8, ra = 16, zn = 32, mr = 64, ui = 128, Kt = 256, ci = 512, Dt = 1024, _n = 2048, tr = 4096, Vn = 8192, Ii = 16384, Af = 32768, Zr = 65536, Of = 1 << 17, Lf = 1 << 19, ru = 1 << 20, ks = 1 << 21, Xn = Symbol("$state"), oa = Symbol("legacy props"), If = Symbol("");
function zf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ff(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Le = !1;
function Zt(e) {
  Le = e;
}
let Fe;
function Mt(e) {
  if (e === null)
    throw zi(), $r;
  return Fe = e;
}
function xn() {
  return Mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Fe)
  );
}
function q(e) {
  if (Le) {
    if (/* @__PURE__ */ En(Fe) !== null)
      throw zi(), $r;
    Fe = e;
  }
}
function Ve(e = 1) {
  if (Le) {
    for (var t = e, n = Fe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Fe = n;
  }
}
function $s() {
  for (var e = 0, t = Fe; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ea) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Js || n === Qs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(t)
    );
    t.remove(), t = r;
  }
}
function ln(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = na(e);
  if (t !== Hf && t !== Df)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ Tt(0), i = it, s = (a) => {
    var l = it;
    bn(i);
    var u = a();
    return bn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Tt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Wf();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ Tt(u.value)), n.set(l, c)) : J(
          c,
          s(() => ln(u.value))
        ), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0)
          l in a && (n.set(
            l,
            s(() => /* @__PURE__ */ Tt(It))
          ), ls(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && J(c, f);
          }
          J(u, It), ls(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Xn)
          return e;
        var c = n.get(l), f = l in a;
        if (c === void 0 && (!f || (h = Dn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ Tt(ln(f ? a[l] : It))), n.set(l, c)), c !== void 0) {
          var d = g(c);
          return d === It ? void 0 : d;
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
          if (f !== void 0 && d !== It)
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
        if (l === Xn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== It || Reflect.has(a, l);
        if (u !== void 0 || Ue !== null && (!c || (d = Dn(a, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ Tt(c ? ln(a[l]) : It)), n.set(l, u));
          var f = g(u);
          if (f === It)
            return !1;
        }
        return c;
      },
      set(a, l, u, c) {
        var v;
        var f = n.get(l), d = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? J(p, It) : h in a && (p = s(() => /* @__PURE__ */ Tt(It)), n.set(h + "", p));
          }
        f === void 0 ? (!d || (v = Dn(a, l)) != null && v.writable) && (f = s(() => /* @__PURE__ */ Tt(void 0)), J(
          f,
          s(() => ln(u))
        ), n.set(l, f)) : (d = f.v !== It, J(
          f,
          s(() => ln(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(a, l);
        if (x != null && x.set && x.set.call(c, u), !d) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= _.v && J(_, k + 1);
          }
          ls(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var d = n.get(f);
          return d === void 0 || d.v !== It;
        });
        for (var [u, c] of n)
          c.v !== It && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Xf();
      }
    }
  );
}
function ls(e, t = 1) {
  J(e, e.v + t);
}
var zt, ou, iu, su;
function Es() {
  if (zt === void 0) {
    zt = window, ou = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    iu = Dn(t, "firstChild").get, su = Dn(t, "nextSibling").get, Fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fa(n) && (n.__t = void 0);
  }
}
function Ln(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return iu.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return su.call(e);
}
function F(e, t) {
  if (!Le)
    return /* @__PURE__ */ mt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(Fe)
  );
  if (n === null)
    n = Fe.appendChild(Ln());
  else if (t && n.nodeType !== 3) {
    var r = Ln();
    return n == null || n.before(r), Mt(r), r;
  }
  return Mt(n), n;
}
function be(e, t) {
  if (!Le) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ mt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Fe;
}
function z(e, t = 1, n = !1) {
  let r = Le ? Fe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!Le)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Ln();
    return r === null ? o == null || o.after(s) : r.before(s), Mt(s), s;
  }
  return Mt(r), /** @type {TemplateNode} */
  r;
}
function ia(e) {
  e.textContent = "";
}
function au(e) {
  return e === this.v;
}
function sa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function aa(e) {
  return !sa(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = cn | _n, n = it !== null && (it.f & cn) !== 0 ? (
    /** @type {Derived} */
    it
  ) : null;
  return Ue === null || n !== null && (n.f & Kt) !== 0 ? t |= Kt : Ue.f |= ru, {
    ctx: je,
    deps: null,
    effects: null,
    equals: au,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Ue
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  const t = /* @__PURE__ */ Vr(e);
  return _u(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  const t = /* @__PURE__ */ Vr(e);
  return t.equals = aa, t;
}
function lu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      dn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Kf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & cn) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function uu(e) {
  var t, n = Ue;
  Un(Kf(e));
  try {
    lu(e), t = ku(e);
  } finally {
    Un(n);
  }
  return t;
}
function cu(e) {
  var t = uu(e), n = (Fn || (e.f & Kt) !== 0) && e.deps !== null ? tr : Dt;
  rn(e, n), e.equals(t) || (e.v = t, e.wv = bu());
}
function du(e) {
  Ue === null && it === null && Bf(), it !== null && (it.f & Kt) !== 0 && Ue === null && Rf(), Do && zf();
}
function jf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yr(e, t, n, r = !0) {
  var o = Ue, i = {
    ctx: je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | _n,
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
      Bi(i), i.f |= Af;
    } catch (l) {
      throw dn(i), l;
    }
  else t !== null && qi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (ru | ui)) === 0;
  if (!s && r && (o !== null && jf(i, o), it !== null && (it.f & cn) !== 0)) {
    var a = (
      /** @type {Derived} */
      it
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function la(e) {
  const t = yr(Li, null, !1);
  return rn(t, Dt), t.teardown = e, t;
}
function nn(e) {
  du();
  var t = Ue !== null && (Ue.f & zn) !== 0 && je !== null && !je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ue,
      reaction: it
    });
  } else {
    var r = Xt(e);
    return r;
  }
}
function Gf(e) {
  return du(), Kr(e);
}
function Uf(e) {
  const t = yr(mr, e, !0);
  return () => {
    dn(t);
  };
}
function Jf(e) {
  const t = yr(mr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(t, () => {
      dn(t), r(void 0);
    }) : (dn(t), r(void 0));
  });
}
function Xt(e) {
  return yr(nu, e, !1);
}
function ye(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function xt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    je
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Dt) !== 0 && rn(n, tr), Gr(n) && Bi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return yr(Li, e, !0);
}
function $e(e, t = [], n = Vr) {
  const r = t.map(n);
  return jr(() => e(...r.map(g)));
}
function jr(e, t = 0) {
  return yr(Li | ra | t, e, !0);
}
function Gn(e, t = !0) {
  return yr(Li | zn, e, !0, t);
}
function fu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Do, r = it;
    Xa(!0), bn(null);
    try {
      t.call(null);
    } finally {
      Xa(n), bn(r);
    }
  }
}
function gu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & mr) !== 0 ? n.parent = null : dn(n, t), n = r;
  }
}
function Qf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & zn) === 0 && dn(t), t = n;
  }
}
function dn(e, t = !0) {
  var n = !1;
  (t || (e.f & Lf) !== 0) && e.nodes_start !== null && (hu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gu(e, t && !n), hi(e, 0), rn(e, Ii);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  fu(e);
  var o = e.parent;
  o !== null && o.first !== null && vu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function hu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(e)
    );
    e.remove(), e = n;
  }
}
function vu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ar(e, t) {
  var n = [];
  ua(e, n, !0), pu(n, () => {
    dn(e), t && t();
  });
}
function pu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ua(e, t, n) {
  if ((e.f & Vn) === 0) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Zr) !== 0 || (r.f & zn) !== 0;
      ua(r, t, i ? n : !1), r = o;
    }
  }
}
function po(e) {
  mu(e, !0);
}
function mu(e, t) {
  if ((e.f & Vn) !== 0) {
    e.f ^= Vn, (e.f & Dt) === 0 && (e.f ^= Dt), Gr(e) && (rn(e, _n), qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & zn) !== 0;
      mu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const e1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let mo = [], yo = [];
function yu() {
  var e = mo;
  mo = [], vo(e);
}
function wu() {
  var e = yo;
  yo = [], vo(e);
}
function Ho(e) {
  mo.length === 0 && queueMicrotask(yu), mo.push(e);
}
function t1(e) {
  yo.length === 0 && e1(wu), yo.push(e);
}
function Wa() {
  mo.length > 0 && yu(), yo.length > 0 && wu();
}
let ei = !1, di = !1, fi = null, ar = !1, Do = !1;
function Xa(e) {
  Do = e;
}
let go = [];
let it = null, mn = !1;
function bn(e) {
  it = e;
}
let Ue = null;
function Un(e) {
  Ue = e;
}
let Ht = null;
function _u(e) {
  it !== null && it.f & ks && (Ht === null ? Ht = [e] : Ht.push(e));
}
let Nt = null, Wt = 0, Qt = null;
function n1(e) {
  Qt = e;
}
let xu = 1, gi = 0, Fn = !1;
function bu() {
  return ++xu;
}
function Gr(e) {
  var f;
  var t = e.f;
  if ((t & _n) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Kt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ci) !== 0, a = r && Ue !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ci), a && c !== null && (c.f & Kt) === 0 && (u.f ^= Kt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Gr(
          /** @type {Derived} */
          i
        ) && cu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ue !== null && !Fn) && rn(e, Dt);
  }
  return !1;
}
function r1(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & ui) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ui;
      }
    n = n.parent;
  }
  throw ei = !1, e;
}
function Za(e) {
  return (e.f & Ii) === 0 && (e.parent === null || (e.parent.f & ui) === 0);
}
function Ri(e, t, n, r) {
  if (ei) {
    if (n === null && (ei = !1), Za(t))
      throw e;
    return;
  }
  if (n !== null && (ei = !0), r1(e, t), Za(t))
    throw e;
}
function Cu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ht != null && Ht.includes(e) || ((i.f & cn) !== 0 ? Cu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? rn(i, _n) : (i.f & Dt) !== 0 && rn(i, tr), qi(
        /** @type {Effect} */
        i
      )));
    }
}
function ku(e) {
  var h;
  var t = Nt, n = Wt, r = Qt, o = it, i = Fn, s = Ht, a = je, l = mn, u = e.f;
  Nt = /** @type {null | Value[]} */
  null, Wt = 0, Qt = null, Fn = (u & Kt) !== 0 && (mn || !ar || it === null), it = (u & (zn | mr)) === 0 ? e : null, Ht = null, ja(e.ctx), mn = !1, gi++, e.f |= ks;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Nt !== null) {
      var d;
      if (hi(e, Wt), f !== null && Wt > 0)
        for (f.length = Wt + Nt.length, d = 0; d < Nt.length; d++)
          f[Wt + d] = Nt[d];
      else
        e.deps = f = Nt;
      if (!Fn)
        for (d = Wt; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && Wt < f.length && (hi(e, Wt), f.length = Wt);
    if (Yi() && Qt !== null && !mn && f !== null && (e.f & (cn | tr | _n)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Qt.length; d++)
        Cu(
          Qt[d],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (gi++, Qt !== null && (r === null ? r = Qt : r.push(.../** @type {Source[]} */
    Qt))), c;
  } finally {
    Nt = t, Wt = n, Qt = r, it = o, Fn = i, Ht = s, ja(a), mn = l, e.f ^= ks;
  }
}
function o1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Mf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & cn) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Nt === null || !Nt.includes(t)) && (rn(t, tr), (t.f & (Kt | ci)) === 0 && (t.f ^= ci), lu(
    /** @type {Derived} **/
    t
  ), hi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function hi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      o1(e, n[r]);
}
function Bi(e) {
  var t = e.f;
  if ((t & Ii) === 0) {
    rn(e, Dt);
    var n = Ue, r = je, o = ar;
    Ue = e, ar = !0;
    try {
      (t & ra) !== 0 ? Qf(e) : gu(e), fu(e);
      var i = ku(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = xu;
      var s = e.deps, a;
      Ya && _f && e.f & _n;
    } catch (l) {
      Ri(l, e, n, r || e.ctx);
    } finally {
      ar = o, Ue = n;
    }
  }
}
function i1() {
  try {
    qf();
  } catch (e) {
    if (fi !== null)
      Ri(e, fi, null);
    else
      throw e;
  }
}
function $u() {
  var e = ar;
  try {
    var t = 0;
    for (ar = !0; go.length > 0; ) {
      t++ > 1e3 && i1();
      var n = go, r = n.length;
      go = [];
      for (var o = 0; o < r; o++) {
        var i = a1(n[o]);
        s1(i);
      }
      wo.clear();
    }
  } finally {
    di = !1, ar = e, fi = null;
  }
}
function s1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ii | Vn)) === 0)
        try {
          Gr(r) && (Bi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? vu(r) : r.fn = null));
        } catch (o) {
          Ri(o, r, null, r.ctx);
        }
    }
}
function qi(e) {
  di || (di = !0, queueMicrotask($u));
  for (var t = fi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (mr | zn)) !== 0) {
      if ((n & Dt) === 0) return;
      t.f ^= Dt;
    }
  }
  go.push(t);
}
function a1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (zn | mr)) !== 0, i = o && (r & Dt) !== 0;
    if (!i && (r & Vn) === 0) {
      if ((r & nu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Dt;
      else
        try {
          Gr(n) && Bi(n);
        } catch (l) {
          Ri(l, n, null, n.ctx);
        }
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function y(e) {
  var t;
  for (Wa(); go.length > 0; )
    di = !0, $u(), Wa();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & cn) !== 0;
  if (it !== null && !mn) {
    if (!(Ht != null && Ht.includes(e))) {
      var r = it.deps;
      e.rv < gi && (e.rv = gi, Nt === null && r !== null && r[Wt] === e ? Wt++ : Nt === null ? Nt = [e] : (!Fn || !Nt.includes(e)) && Nt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Kt) === 0 && (o.f ^= Kt);
  }
  return n && (o = /** @type {Derived} */
  e, Gr(o) && cu(o)), Do && wo.has(e) ? wo.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const l1 = -7169;
function rn(e, t) {
  e.f = e.f & l1 | t;
}
function Q(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      Ss(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && Ss(n);
      }
  }
}
function Ss(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ss(e[r], t);
      } catch {
      }
    const n = na(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = tu(n);
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
const wo = /* @__PURE__ */ new Map();
function Or(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: au,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Tt(e, t) {
  const n = Or(e);
  return _u(n), n;
}
// @__NO_SIDE_EFFECTS__
function le(e, t = !1) {
  var r;
  const n = Or(e);
  return t || (n.equals = aa), Xr && je !== null && je.l !== null && ((r = je.l).s ?? (r.s = [])).push(n), n;
}
function J(e, t, n = !1) {
  it !== null && !mn && Yi() && (it.f & (cn | ra)) !== 0 && !(Ht != null && Ht.includes(e)) && Zf();
  let r = n ? ln(t) : t;
  return Ps(e, r);
}
function Ps(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Do ? wo.set(e, t) : wo.set(e, n), e.v = t, (e.f & cn) !== 0 && ((e.f & _n) !== 0 && uu(
      /** @type {Derived} */
      e
    ), rn(e, (e.f & Kt) === 0 ? Dt : tr)), e.wv = bu(), Eu(e, _n), Yi() && Ue !== null && (Ue.f & Dt) !== 0 && (Ue.f & (zn | mr)) === 0 && (Qt === null ? n1([e]) : Qt.push(e));
  }
  return t;
}
function Ka(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function Eu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Yi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & _n) === 0 && (!r && s === Ue || (rn(s, t), (a & (Dt | Kt)) !== 0 && ((a & cn) !== 0 ? Eu(
        /** @type {Derived} */
        s,
        tr
      ) : qi(
        /** @type {Effect} */
        s
      ))));
    }
}
let je = null;
function ja(e) {
  je = e;
}
function cr(e) {
  return (
    /** @type {T} */
    ca().get(e)
  );
}
function Lr(e, t) {
  return ca().set(e, t), t;
}
function u1(e) {
  return ca().has(e);
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
  Xr && !t && (je.l = {
    s: null,
    u: null,
    r1: [],
    r2: Or(!1)
  }), la(() => {
    r.d = !0;
  });
}
function pe(e) {
  const t = je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ue, r = it;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), bn(i.reaction), Xt(i.fn);
        }
      } finally {
        Un(n), bn(r);
      }
    }
    je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yi() {
  return !Xr || je !== null && je.l === null;
}
function ca(e) {
  return je === null && Oi(), je.c ?? (je.c = new Map(c1(je) || void 0));
}
function c1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function d1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const f1 = [
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
function g1(e) {
  return f1.includes(e);
}
const h1 = {
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
function v1(e) {
  return e = e.toLowerCase(), h1[e] ?? e;
}
const p1 = ["touchstart", "touchmove"];
function m1(e) {
  return p1.includes(e);
}
const y1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function w1(e) {
  return y1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Ho(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function x1(e) {
  Le && /* @__PURE__ */ mt(e) !== null && ia(e);
}
let Ga = !1;
function b1() {
  Ga || (Ga = !0, document.addEventListener(
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
function C1(e) {
  var t = it, n = Ue;
  bn(null), Un(null);
  try {
    return e();
  } finally {
    bn(t), Un(n);
  }
}
const Su = /* @__PURE__ */ new Set(), Ns = /* @__PURE__ */ new Set();
function Pu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || lo.call(t, i), !i.cancelBubble)
      return C1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ho(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function st(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Pu(e, t, n, i);
  (t === document.body || t === window || t === document) && la(() => {
    t.removeEventListener(e, s, i);
  });
}
function Ur(e) {
  for (var t = 0; t < e.length; t++)
    Su.add(e[t]);
  for (var n of Ns)
    n(e);
}
function lo(e) {
  var v;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], i = (
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
    ho(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = it, f = Ue;
    bn(null), Un(null);
    try {
      for (var d, h = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + r];
          if (x != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Mo(x)) {
              var [_, ...k] = x;
              _.apply(i, [e, ...k]);
            } else
              x.call(i, e);
        } catch (b) {
          d ? h.push(b) : d = b;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (d) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, bn(c), Un(f);
    }
  }
}
function da(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
  var n = (
    /** @type {Effect} */
    Ue
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & eu) !== 0, r = (t & Pf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Le)
      return qt(Fe, null), Fe;
    o === void 0 && (o = da(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ mt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ou ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      qt(a, l);
    } else
      qt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & eu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Le)
      return qt(Fe, null), Fe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        da(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ mt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ mt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ mt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ mt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      qt(c, f);
    } else
      qt(u, u);
    return u;
  };
}
function ze(e = "") {
  if (!Le) {
    var t = Ln(e + "");
    return qt(t, t), t;
  }
  var n = Fe;
  return n.nodeType !== 3 && (n.before(n = Ln()), Mt(n)), qt(n, n), n;
}
function nt() {
  if (Le)
    return qt(Fe, null), Fe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ln();
  return e.append(t, n), qt(t, n), e;
}
function D(e, t) {
  if (Le) {
    Ue.nodes_end = Fe, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ft(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Nu(e, t) {
  return Tu(e, t);
}
function k1(e, t) {
  Es(), t.intro = t.intro ?? !1;
  const n = t.target, r = Le, o = Fe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Js); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw $r;
    Zt(!0), Mt(
      /** @type {Comment} */
      i
    ), xn();
    const s = Tu(e, { ...t, anchor: i });
    if (Fe === null || Fe.nodeType !== 8 || /** @type {Comment} */
    Fe.data !== ea)
      throw zi(), $r;
    return Zt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === $r)
      return t.recover === !1 && Yf(), Es(), ia(n), Zt(!1), Nu(e, t);
    throw s;
  } finally {
    Zt(r), Mt(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Tu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Es();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!a.has(h)) {
        a.add(h);
        var p = m1(h);
        t.addEventListener(h, lo, { passive: p });
        var x = xr.get(h);
        x === void 0 ? (document.addEventListener(h, lo, { passive: p }), xr.set(h, 1)) : xr.set(h, x + 1);
      }
    }
  };
  l(ta(Su)), Ns.add(l);
  var u = void 0, c = Jf(() => {
    var f = n ?? t.appendChild(Ln());
    return Gn(() => {
      if (i) {
        ve({});
        var d = (
          /** @type {ComponentContext} */
          je
        );
        d.c = i;
      }
      o && (r.$$events = o), Le && qt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Le && (Ue.nodes_end = Fe), i && pe();
    }), () => {
      var p;
      for (var d of a) {
        t.removeEventListener(d, lo);
        var h = (
          /** @type {number} */
          xr.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, lo), xr.delete(d)) : xr.set(d, h);
      }
      Ns.delete(l), f !== n && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return Ts.set(u, c), u;
}
let Ts = /* @__PURE__ */ new WeakMap();
function $1(e, t) {
  const n = Ts.get(e);
  return n ? (Ts.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Le && n === 0 && xn();
  var o = e, i = null, s = null, a = It, l = n > 0 ? Zr : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (a === (a = d)) return;
    let p = !1;
    if (Le && r !== -1) {
      if (n === 0) {
        const _ = (
          /** @type {Comment} */
          o.data
        );
        _ === Js ? r = 0 : _ === Qs ? r = 1 / 0 : (r = parseInt(_.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = $s(), Mt(o), Zt(!1), p = !0, r = -1);
    }
    a ? (i ? po(i) : h && (i = Gn(() => h(o))), s && Ar(s, () => {
      s = null;
    })) : (s ? po(s) : h && (s = Gn(() => h(o, [n + 1, r]))), i && Ar(i, () => {
      i = null;
    })), p && Zt(!0);
  };
  jr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Le && (o = Fe);
}
function Ir(e, t) {
  return t;
}
function E1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    ua(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ia(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  pu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Bn(e, c.prev, c.next)), dn(c.e, !a);
    }
  });
}
function Vt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Jl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Le ? Mt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ mt(u)
    ) : u.appendChild(Ln());
  }
  Le && xn();
  var c = null, f = !1, d = /* @__PURE__ */ Ce(() => {
    var h = n();
    return Mo(h) ? h : h == null ? [] : ta(h);
  });
  jr(() => {
    var h = g(d), p = h.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let x = !1;
    if (Le) {
      var _ = (
        /** @type {Comment} */
        s.data === Qs
      );
      _ !== (p === 0) && (s = $s(), Mt(s), Zt(!1), x = !0);
    }
    if (Le) {
      for (var k = null, v, b = 0; b < p; b++) {
        if (Fe.nodeType === 8 && /** @type {Comment} */
        Fe.data === ea) {
          s = /** @type {Comment} */
          Fe, x = !0, Zt(!1);
          break;
        }
        var m = h[b], C = r(m, b);
        v = Mu(
          Fe,
          a,
          k,
          null,
          m,
          C,
          b,
          o,
          t,
          n
        ), a.items.set(C, v), k = v;
      }
      p > 0 && Mt($s());
    }
    Le || S1(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? po(c) : c = Gn(() => i(s)) : c !== null && Ar(c, () => {
      c = null;
    })), x && Zt(!0), g(d);
  }), Le && (s = Fe);
}
function S1(e, t, n, r, o, i, s) {
  var E, P, S, N;
  var a = (o & bf) !== 0, l = (o & (Gs | Us)) !== 0, u = e.length, c = t.items, f = t.first, d = f, h, p = null, x, _ = [], k = [], v, b, m, C;
  if (a)
    for (C = 0; C < u; C += 1)
      v = e[C], b = i(v, C), m = c.get(b), m !== void 0 && ((E = m.a) == null || E.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(m));
  for (C = 0; C < u; C += 1) {
    if (v = e[C], b = i(v, C), m = c.get(b), m === void 0) {
      var M = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      p = Mu(
        M,
        t,
        p,
        p === null ? t.first : p.next,
        v,
        b,
        C,
        r,
        o,
        s
      ), c.set(b, p), _ = [], k = [], d = p.next;
      continue;
    }
    if (l && P1(m, v, C, o), (m.e.f & Vn) !== 0 && (po(m.e), a && ((P = m.a) == null || P.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (h !== void 0 && h.has(m)) {
        if (_.length < k.length) {
          var $ = k[0], V;
          p = $.prev;
          var A = _[0], O = _[_.length - 1];
          for (V = 0; V < _.length; V += 1)
            Ua(_[V], $, n);
          for (V = 0; V < k.length; V += 1)
            h.delete(k[V]);
          Bn(t, A.prev, O.next), Bn(t, p, A), Bn(t, O, $), d = $, p = O, C -= 1, _ = [], k = [];
        } else
          h.delete(m), Ua(m, d, n), Bn(t, m.prev, m.next), Bn(t, m, p === null ? t.first : p.next), Bn(t, p, m), p = m;
        continue;
      }
      for (_ = [], k = []; d !== null && d.k !== b; )
        (d.e.f & Vn) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(d), k.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    _.push(m), p = m, d = m.next;
  }
  if (d !== null || h !== void 0) {
    for (var B = h === void 0 ? [] : ta(h); d !== null; )
      (d.e.f & Vn) === 0 && B.push(d), d = d.next;
    var R = B.length;
    if (R > 0) {
      var I = (o & Jl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (C = 0; C < R; C += 1)
          (S = B[C].a) == null || S.measure();
        for (C = 0; C < R; C += 1)
          (N = B[C].a) == null || N.fix();
      }
      E1(t, B, I, c);
    }
  }
  a && Ho(() => {
    var H;
    if (x !== void 0)
      for (m of x)
        (H = m.a) == null || H.apply();
  }), Ue.first = t.first && t.first.e, Ue.last = p && p.e;
}
function P1(e, t, n, r) {
  (r & Gs) !== 0 && Ps(e.v, t), (r & Us) !== 0 ? Ps(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Mu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Gs) !== 0, f = (l & Cf) === 0, d = c ? f ? /* @__PURE__ */ le(o) : Or(o) : o, h = (l & Us) === 0 ? s : Or(s), p = {
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
    return p.e = Gn(() => a(e, d, h, u), Le), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ua(e, t, n) {
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
function fa(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  $e(() => {
    var a = (
      /** @type {Effect} */
      Ue
    );
    if (s === (s = t() ?? "")) {
      Le && xn();
      return;
    }
    if (a.nodes_start !== null && (hu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Le) {
        Fe.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw zi(), $r;
        qt(Fe, u), i = Mt(l);
        return;
      }
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var f = da(c);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ mt(f)), qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ mt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ mt(f)
          );
      else
        i.before(f);
    }
  });
}
function kt(e, t, n, r, o) {
  var a;
  Le && xn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function N1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function dr(e, t, ...n) {
  var r = e, o = yt, i;
  jr(() => {
    o !== (o = t()) && (i && (dn(i), i = null), i = Gn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), Le && (r = Fe);
}
function Hu(e, t, n) {
  Le && xn();
  var r = e, o, i;
  jr(() => {
    o !== (o = t()) && (i && (Ar(i), i = null), o && (i = Gn(() => n(r, o))));
  }, Zr), Le && (r = Fe);
}
function T1(e, t, n, r, o, i) {
  let s = Le;
  Le && xn();
  var a, l, u = null;
  Le && Fe.nodeType === 1 && (u = /** @type {Element} */
  Fe, xn());
  var c = (
    /** @type {TemplateNode} */
    Le ? Fe : e
  ), f;
  jr(() => {
    const d = t() || null;
    var h = d === "svg" ? Tf : null;
    d !== a && (f && (d === null ? Ar(f, () => {
      f = null, l = null;
    }) : d === l ? po(f) : dn(f)), d && d !== l && (f = Gn(() => {
      if (u = Le ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, d) : document.createElement(d), qt(u, u), r) {
        Le && w1(d) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Le ? /* @__PURE__ */ mt(u) : u.appendChild(Ln())
        );
        Le && (p === null ? Zt(!1) : Mt(p)), r(u, p);
      }
      Ue.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Zr), s && (Zt(!0), Mt(c));
}
function et(e, t) {
  Ho(() => {
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
function Ct(e, t, n) {
  Xt(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var s = n();
        Q(s), o && sa(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Du(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Du(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function M1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Du(e)) && (r && (r += " "), r += t);
  return r;
}
function hn(e) {
  return typeof e == "object" ? M1(e) : e ?? "";
}
const Ja = [...` 	
\r\f \v\uFEFF`];
function H1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ja.includes(r[s - 1])) && (a === r.length || Ja.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Qa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function us(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function D1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(us)), o && l.push(...Object.keys(o).map(us));
      var u = 0, c = -1;
      const x = e.length;
      for (var f = 0; f < x; f++) {
        var d = e[f];
        if (a ? d === "/" && e[f - 1] === "*" && (a = !1) : i ? i === d && (i = !1) : d === "/" && e[f + 1] === "*" ? a = !0 : d === '"' || d === "'" ? i = d : d === "(" ? s++ : d === ")" && s--, !a && i === !1 && s === 0) {
          if (d === ":" && c === -1)
            c = f;
          else if (d === ";" || f === x - 1) {
            if (c !== -1) {
              var h = us(e.substring(u, c).trim());
              if (!l.includes(h)) {
                d !== ";" && f++;
                var p = e.substring(u, f).trim();
                n += " " + p + ";";
              }
            }
            u = f + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Qa(r)), o && (n += Qa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function $t(e, t, n, r, o, i) {
  var s = e.__className;
  if (Le || s !== n || s === void 0) {
    var a = H1(n, r, i);
    (!Le || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function cs(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ht(e, t, n, r) {
  var o = e.__style;
  if (Le || o !== t) {
    var i = D1(t, r);
    (!Le || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (cs(e, n == null ? void 0 : n[0], r[0]), cs(e, n == null ? void 0 : n[1], r[1], "important")) : cs(e, n, r));
  return r;
}
const io = Symbol("class"), ir = Symbol("style"), Vu = Symbol("is custom element"), Au = Symbol("is html");
function An(e) {
  if (Le) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ke(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ke(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, t1(n), b1();
  }
}
function ti(e, t) {
  var n = Fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function el(e, t) {
  var n = Fi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function V1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = Fi(e);
  Le && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[If] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ou(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gt(e, t, n, r, o = !1) {
  var i = Fi(e), s = i[Vu], a = !i[Au];
  let l = Le && s;
  l && Zt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = hn(n.class) : (r || n[io]) && (n.class = null), n[ir] && (n.style ?? (n.style = null));
  var d = Ou(e);
  for (const b in n) {
    let m = n[b];
    if (c && b === "value" && m == null) {
      e.value = e.__value = "", u[b] = m;
      continue;
    }
    if (b === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, h, m, r, t == null ? void 0 : t[io], n[io]), u[b] = m, u[io] = n[io];
      continue;
    }
    if (b === "style") {
      ht(e, m, t == null ? void 0 : t[ir], n[ir]), u[b] = m, u[ir] = n[ir];
      continue;
    }
    var p = u[b];
    if (m !== p) {
      u[b] = m;
      var x = b[0] + b[1];
      if (x !== "$$")
        if (x === "on") {
          const C = {}, M = "$$" + b;
          let $ = b.slice(2);
          var _ = g1($);
          if (d1($) && ($ = $.slice(0, -7), C.capture = !0), !_ && p) {
            if (m != null) continue;
            e.removeEventListener($, u[M], C), u[M] = null;
          }
          if (m != null)
            if (_)
              e[`__${$}`] = m, Ur([$]);
            else {
              let V = function(A) {
                u[b].call(this, A);
              };
              u[M] = Pu($, e, V, C);
            }
          else _ && (e[`__${$}`] = void 0);
        } else if (b === "style")
          ke(e, b, m);
        else if (b === "autofocus")
          _1(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!s && (b === "__value" || b === "value" && m != null))
          e.value = e.__value = m;
        else if (b === "selected" && c)
          V1(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var k = b;
          a || (k = v1(k));
          var v = k === "defaultValue" || k === "defaultChecked";
          if (m == null && !s && !v)
            if (i[b] = null, k === "value" || k === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (k === "value") {
                let $ = C.defaultValue;
                C.removeAttribute(k), C.defaultValue = $, C.value = C.__value = M ? $ : null;
              } else {
                let $ = C.defaultChecked;
                C.removeAttribute(k), C.defaultChecked = $, C.checked = M ? $ : !1;
              }
            } else
              e.removeAttribute(b);
          else v || d.includes(k) && (s || typeof m != "string") ? e[k] = m : typeof m != "function" && ke(e, k, m);
        }
    }
  }
  return l && Zt(!0), u;
}
function Fi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Au]: e.namespaceURI === Nf
    })
  );
}
var tl = /* @__PURE__ */ new Map();
function Ou(e) {
  var t = tl.get(e.nodeName);
  if (t) return t;
  tl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = tu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = na(r);
  }
  return t;
}
var Yn, Dr, To, Vi, Lu;
const Ai = class Ai {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    or(this, Vi);
    /** */
    or(this, Yn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    or(this, Dr);
    /** @type {ResizeObserverOptions} */
    or(this, To);
    ro(this, To, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = dt(this, Yn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), dt(this, Yn).set(t, r), qa(this, Vi, Lu).call(this).observe(t, dt(this, To)), () => {
      var o = dt(this, Yn).get(t);
      o.delete(n), o.size === 0 && (dt(this, Yn).delete(t), dt(this, Dr).unobserve(t));
    };
  }
};
Yn = new WeakMap(), Dr = new WeakMap(), To = new WeakMap(), Vi = new WeakSet(), Lu = function() {
  return dt(this, Dr) ?? ro(this, Dr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ai.entries.set(n.target, n);
        for (var r of dt(this, Yn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
Pt(Ai, "entries", /* @__PURE__ */ new WeakMap());
let Ms = Ai;
var A1 = /* @__PURE__ */ new Ms({
  box: "border-box"
});
function nl(e, t, n) {
  var r = A1.observe(e, () => n(e[t]));
  Xt(() => (Cn(() => n(e[t])), r));
}
function rl(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function kn(e = {}, t, n, r) {
  return Xt(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && rl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Ho(() => {
        i && rl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Be(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    je
  ), n = t.l.u;
  if (!n) return;
  let r = () => Q(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Vr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && Gf(() => {
    ol(t, r), vo(n.b);
  }), nn(() => {
    const o = Cn(() => n.m.map(Vf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nn(() => {
    ol(t, r), vo(n.a);
  });
}
function ol(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Xe(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Mo(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function sn(e) {
  je === null && Oi(), Xr && je.l !== null ? L1(je).m.push(e) : nn(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ga(e) {
  je === null && Oi(), sn(() => () => Cn(e));
}
function O1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Wi() {
  const e = je;
  return e === null && Oi(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Mo(o) ? o.slice() : [o], a = O1(
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
function L1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ha(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), yt;
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
function Jt(e, t) {
  return {
    subscribe: Se(e, t).subscribe
  };
}
function Se(e, t = yt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (sa(e, a) && (e = a, n)) {
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
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = yt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || yt), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Zn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Jt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = yt;
    const d = () => {
      if (c)
        return;
      f();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : f = typeof p == "function" ? p : yt;
    }, h = o.map(
      (p, x) => ha(
        p,
        (_) => {
          u[x] = _, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      vo(h), f(), l = !1;
    };
  });
}
function Z(e) {
  let t;
  return ha(e, (n) => t = n)(), t;
}
let Zo = !1, Hs = Symbol();
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ le(void 0),
    unsubscribe: yt
  });
  if (r.store !== e && !(Hs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = yt;
    else {
      var o = !0;
      r.unsubscribe = ha(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Hs in n ? Z(e) : g(r.source);
}
function I1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = yt), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function at() {
  const e = {};
  function t() {
    la(() => {
      for (var n in e)
        e[n].unsubscribe();
      ho(e, Hs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function z1(e) {
  var t = Zo;
  try {
    return Zo = !1, [e(), Zo];
  } finally {
    Zo = t;
  }
}
const R1 = {
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
    R1
  );
}
const B1 = {
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
      Ql
    )), e.special[t](n), Ka(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ka(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ut(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Or(0) }, B1);
}
const q1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (oo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      oo(o) && (o = o());
      const i = Dn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (oo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Xn || t === oa) return !1;
    for (let n of e.props)
      if (oo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      oo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ct(...e) {
  return new Proxy({ props: e }, q1);
}
function il(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var M;
  var o = (n & kf) !== 0, i = !Xr || (n & $f) !== 0, s = (n & Ef) !== 0, a = (n & Sf) !== 0, l = !1, u;
  s ? [u, l] = z1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Xn in e || oa in e, f = s && (((M = Dn(e, t)) == null ? void 0 : M.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), h = !0, p = !1, x = () => (p = !0, h && (h = !1, a ? d = Cn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Ff(), u = x(), f && f(u));
  var _;
  if (i)
    _ = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? x() : (h = !0, p = !1, $);
    };
  else {
    var k = (o ? Vr : Ce)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Of, _ = () => {
      var $ = g(k);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if ((n & Ql) === 0)
    return _;
  if (f) {
    var v = e.$$legacy;
    return function($, V) {
      return arguments.length > 0 ? ((!i || !V || v || l) && f(V ? _() : $), $) : _();
    };
  }
  var b = !1, m = /* @__PURE__ */ le(u), C = /* @__PURE__ */ Vr(() => {
    var $ = _(), V = g(m);
    return b ? (b = !1, V) : m.v = $;
  });
  return s && g(C), o || (C.equals = aa), function($, V) {
    if (arguments.length > 0) {
      const A = V ? g(C) : i && s ? ln($) : $;
      if (!C.equals(A)) {
        if (b = !0, J(m, A), p && d !== void 0 && (d = A), il(C))
          return $;
        Cn(() => g(C));
      }
      return $;
    }
    return il(C) ? C.v : g(C);
  };
}
function Y1(e) {
  return new F1(e);
}
var Tn, en;
class F1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    or(this, Tn);
    /** @type {Record<string, any>} */
    or(this, en);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ le(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === oa ? !0 : (g(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return J(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    ro(this, en, (t.hydrate ? k1 : Nu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), ro(this, Tn, o.$$events);
    for (const s of Object.keys(dt(this, en)))
      s === "$set" || s === "$destroy" || s === "$on" || ho(this, s, {
        get() {
          return dt(this, en)[s];
        },
        /** @param {any} value */
        set(a) {
          dt(this, en)[s] = a;
        },
        enumerable: !0
      });
    dt(this, en).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, dt(this, en).$destroy = () => {
      $1(dt(this, en));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    dt(this, en).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    dt(this, Tn)[t] = dt(this, Tn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return dt(this, Tn)[t].push(r), () => {
      dt(this, Tn)[t] = dt(this, Tn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    dt(this, en).$destroy();
  }
}
Tn = new WeakMap(), en = new WeakMap();
let Iu;
typeof HTMLElement == "function" && (Iu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    Pt(this, "$$ctor");
    /** Slots */
    Pt(this, "$$s");
    /** @type {any} The Svelte component instance */
    Pt(this, "$$c");
    /** Whether or not the custom element is connected */
    Pt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Pt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Pt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Pt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Pt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Pt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Pt(this, "$$me");
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
          o !== "default" && (s.name = o), D(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = W1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = ni(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Y1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Uf(() => {
        Kr(() => {
          var o;
          this.$$r = !0;
          for (const i of li(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = ni(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ni(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return li(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function ni(e, t, n, r) {
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
function W1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ce(e, t, n, r, o, i) {
  let s = class extends Iu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return li(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return li(t).forEach((a) => {
    ho(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = ni(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Dn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ho(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function At(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = At(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var X1 = { value: () => {
} };
function Xi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ri(n);
}
function ri(e) {
  this._ = e;
}
function Z1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ri.prototype = Xi.prototype = {
  constructor: ri,
  on: function(e, t) {
    var n = this._, r = Z1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = K1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = sl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = sl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ri(e);
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
function K1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function sl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = X1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ds = "http://www.w3.org/1999/xhtml";
const al = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), al.hasOwnProperty(t) ? { space: al[t], local: e } : e;
}
function j1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ds && t.documentElement.namespaceURI === Ds ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function G1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Zi(e);
  return (t.local ? G1 : j1)(t);
}
function U1() {
}
function va(e) {
  return e == null ? U1 : function() {
    return this.querySelector(e);
  };
}
function J1(e) {
  typeof e != "function" && (e = va(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Ut(r, this._parents);
}
function Q1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eg() {
  return [];
}
function Ru(e) {
  return e == null ? eg : function() {
    return this.querySelectorAll(e);
  };
}
function tg(e) {
  return function() {
    return Q1(e.apply(this, arguments));
  };
}
function ng(e) {
  typeof e == "function" ? e = tg(e) : e = Ru(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ut(r, o);
}
function Bu(e) {
  return function() {
    return this.matches(e);
  };
}
function qu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var rg = Array.prototype.find;
function og(e) {
  return function() {
    return rg.call(this.children, e);
  };
}
function ig() {
  return this.firstElementChild;
}
function sg(e) {
  return this.select(e == null ? ig : og(typeof e == "function" ? e : qu(e)));
}
var ag = Array.prototype.filter;
function lg() {
  return Array.from(this.children);
}
function ug(e) {
  return function() {
    return ag.call(this.children, e);
  };
}
function cg(e) {
  return this.selectAll(e == null ? lg : ug(typeof e == "function" ? e : qu(e)));
}
function dg(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ut(r, this._parents);
}
function Yu(e) {
  return new Array(e.length);
}
function fg() {
  return new Ut(this._enter || this._groups.map(Yu), this._parents);
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
function gg(e) {
  return function() {
    return e;
  };
}
function hg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new pi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function vg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new pi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function pg(e) {
  return e.__data__;
}
function mg(e, t) {
  if (!arguments.length) return Array.from(this, pg);
  var n = t ? vg : hg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = gg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, h = yg(e.call(c, c && c.__data__, u, r)), p = h.length, x = a[u] = new Array(p), _ = s[u] = new Array(p), k = l[u] = new Array(d);
    n(c, f, x, _, k, h, t);
    for (var v = 0, b = 0, m, C; v < p; ++v)
      if (m = x[v]) {
        for (v >= b && (b = v + 1); !(C = _[b]) && ++b < p; ) ;
        m._next = C || null;
      }
  }
  return s = new Ut(s, r), s._enter = a, s._exit = l, s;
}
function yg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wg() {
  return new Ut(this._exit || this._groups.map(Yu), this._parents);
}
function _g(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function xg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), h, p = 0; p < f; ++p)
      (h = u[p] || c[p]) && (d[p] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ut(a, this._parents);
}
function bg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Cg(e) {
  e || (e = kg);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Ut(o, this._parents).order();
}
function kg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $g() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Eg() {
  return Array.from(this);
}
function Sg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Pg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Ng() {
  return !this.node();
}
function Tg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Mg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Vg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ag(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Og(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Lg(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Hg : Mg : typeof t == "function" ? n.local ? Og : Ag : n.local ? Vg : Dg)(n, t));
}
function Fu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ig(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function zg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Rg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Bg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ig : typeof t == "function" ? Rg : zg)(e, t, n ?? "")) : zr(this.node(), e);
}
function zr(e, t) {
  return e.style.getPropertyValue(t) || Fu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function qg(e) {
  return function() {
    delete this[e];
  };
}
function Yg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Fg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Wg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? qg : typeof t == "function" ? Fg : Yg)(e, t)) : this.node()[e];
}
function Wu(e) {
  return e.trim().split(/^|\s+/);
}
function pa(e) {
  return e.classList || new Xu(e);
}
function Xu(e) {
  this._node = e, this._names = Wu(e.getAttribute("class") || "");
}
Xu.prototype = {
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
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ku(e, t) {
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Xg(e) {
  return function() {
    Zu(this, e);
  };
}
function Zg(e) {
  return function() {
    Ku(this, e);
  };
}
function Kg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Ku)(this, e);
  };
}
function jg(e, t) {
  var n = Wu(e + "");
  if (arguments.length < 2) {
    for (var r = pa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Kg : t ? Xg : Zg)(n, t));
}
function Gg() {
  this.textContent = "";
}
function Ug(e) {
  return function() {
    this.textContent = e;
  };
}
function Jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Qg(e) {
  return arguments.length ? this.each(e == null ? Gg : (typeof e == "function" ? Jg : Ug)(e)) : this.node().textContent;
}
function eh() {
  this.innerHTML = "";
}
function th(e) {
  return function() {
    this.innerHTML = e;
  };
}
function nh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function rh(e) {
  return arguments.length ? this.each(e == null ? eh : (typeof e == "function" ? nh : th)(e)) : this.node().innerHTML;
}
function oh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ih() {
  return this.each(oh);
}
function sh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ah() {
  return this.each(sh);
}
function lh(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function uh() {
  return null;
}
function ch(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? uh : typeof t == "function" ? t : va(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function fh() {
  return this.each(dh);
}
function gh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function vh(e) {
  return this.select(e ? hh : gh);
}
function ph(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function mh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function yh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function wh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function _h(e, t, n) {
  return function() {
    var r = this.__on, o, i = mh(t);
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
function xh(e, t, n) {
  var r = yh(e + ""), o, i = r.length, s;
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
  for (a = t ? _h : wh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function ju(e, t, n) {
  var r = Fu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function bh(e, t) {
  return function() {
    return ju(this, e, t);
  };
}
function Ch(e, t) {
  return function() {
    return ju(this, e, t.apply(this, arguments));
  };
}
function kh(e, t) {
  return this.each((typeof t == "function" ? Ch : bh)(e, t));
}
function* $h() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gu = [null];
function Ut(e, t) {
  this._groups = e, this._parents = t;
}
function Vo() {
  return new Ut([[document.documentElement]], Gu);
}
function Eh() {
  return this;
}
Ut.prototype = Vo.prototype = {
  constructor: Ut,
  select: J1,
  selectAll: ng,
  selectChild: sg,
  selectChildren: cg,
  filter: dg,
  data: mg,
  enter: fg,
  exit: wg,
  join: _g,
  merge: xg,
  selection: Eh,
  order: bg,
  sort: Cg,
  call: $g,
  nodes: Eg,
  node: Sg,
  size: Pg,
  empty: Ng,
  each: Tg,
  attr: Lg,
  style: Bg,
  property: Wg,
  classed: jg,
  text: Qg,
  html: rh,
  raise: ih,
  lower: ah,
  append: lh,
  insert: ch,
  remove: fh,
  clone: vh,
  datum: ph,
  on: xh,
  dispatch: kh,
  [Symbol.iterator]: $h
};
function tn(e) {
  return typeof e == "string" ? new Ut([[document.querySelector(e)]], [document.documentElement]) : new Ut([[e]], Gu);
}
function Sh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
  if (e = Sh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Ph = { passive: !1 }, _o = { capture: !0, passive: !1 };
function ds(e) {
  e.stopImmediatePropagation();
}
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uu(e) {
  var t = e.document.documentElement, n = tn(e).on("dragstart.drag", Er, _o);
  "onselectstart" in t ? n.on("selectstart.drag", Er, _o) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ju(e, t) {
  var n = e.document.documentElement, r = tn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Er, _o), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ko = (e) => () => e;
function Vs(e, {
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
Vs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Nh(e) {
  return !e.ctrlKey && !e.button;
}
function Th() {
  return this.parentNode;
}
function Mh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Hh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Dh() {
  var e = Nh, t = Th, n = Mh, r = Hh, o = {}, i = Xi("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(m) {
    m.on("mousedown.drag", h).filter(r).on("touchstart.drag", _).on("touchmove.drag", k, Ph).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(m, C) {
    if (!(c || !e.call(this, m, C))) {
      var M = b(this, t.call(this, m, C), m, C, "mouse");
      M && (tn(m.view).on("mousemove.drag", p, _o).on("mouseup.drag", x, _o), Uu(m.view), ds(m), u = !1, a = m.clientX, l = m.clientY, M("start", m));
    }
  }
  function p(m) {
    if (Er(m), !u) {
      var C = m.clientX - a, M = m.clientY - l;
      u = C * C + M * M > f;
    }
    o.mouse("drag", m);
  }
  function x(m) {
    tn(m.view).on("mousemove.drag mouseup.drag", null), Ju(m.view, u), Er(m), o.mouse("end", m);
  }
  function _(m, C) {
    if (e.call(this, m, C)) {
      var M = m.changedTouches, $ = t.call(this, m, C), V = M.length, A, O;
      for (A = 0; A < V; ++A)
        (O = b(this, $, m, C, M[A].identifier, M[A])) && (ds(m), O("start", m, M[A]));
    }
  }
  function k(m) {
    var C = m.changedTouches, M = C.length, $, V;
    for ($ = 0; $ < M; ++$)
      (V = o[C[$].identifier]) && (Er(m), V("drag", m, C[$]));
  }
  function v(m) {
    var C = m.changedTouches, M = C.length, $, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < M; ++$)
      (V = o[C[$].identifier]) && (ds(m), V("end", m, C[$]));
  }
  function b(m, C, M, $, V, A) {
    var O = i.copy(), B = an(A || M, C), R, I, E;
    if ((E = n.call(m, new Vs("beforestart", {
      sourceEvent: M,
      target: d,
      identifier: V,
      active: s,
      x: B[0],
      y: B[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), $)) != null)
      return R = E.x - B[0] || 0, I = E.y - B[1] || 0, function P(S, N, H) {
        var T = B, L;
        switch (S) {
          case "start":
            o[V] = P, L = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            B = an(H || N, C), L = s;
            break;
        }
        O.call(
          S,
          m,
          new Vs(S, {
            sourceEvent: N,
            subject: E,
            target: d,
            identifier: V,
            active: L,
            x: B[0] + R,
            y: B[1] + I,
            dx: B[0] - T[0],
            dy: B[1] - T[1],
            dispatch: O
          }),
          $
        );
      };
  }
  return d.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Ko(!!m), d) : e;
  }, d.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Ko(m), d) : t;
  }, d.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Ko(m), d) : n;
  }, d.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Ko(!!m), d) : r;
  }, d.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? d : m;
  }, d.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, d) : Math.sqrt(f);
  }, d;
}
function ma(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ao() {
}
var xo = 0.7, mi = 1 / xo, Sr = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vh = /^#([0-9a-f]{3,8})$/, Ah = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Oh = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Lh = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${bo}\\)$`), Ih = new RegExp(`^rgba\\(${yn},${yn},${yn},${bo}\\)$`), zh = new RegExp(`^hsl\\(${bo},${yn},${yn}\\)$`), Rh = new RegExp(`^hsla\\(${bo},${yn},${yn},${bo}\\)$`), ll = {
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
ma(Ao, Co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ul,
  // Deprecated! Use color.formatHex.
  formatHex: ul,
  formatHex8: Bh,
  formatHsl: qh,
  formatRgb: cl,
  toString: cl
});
function ul() {
  return this.rgb().formatHex();
}
function Bh() {
  return this.rgb().formatHex8();
}
function qh() {
  return ec(this).formatHsl();
}
function cl() {
  return this.rgb().formatRgb();
}
function Co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Vh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? dl(t) : n === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? jo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? jo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ah.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = Oh.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lh.exec(e)) ? jo(t[1], t[2], t[3], t[4]) : (t = Ih.exec(e)) ? jo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = zh.exec(e)) ? hl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Rh.exec(e)) ? hl(t[1], t[2] / 100, t[3] / 100, t[4]) : ll.hasOwnProperty(e) ? dl(ll[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function dl(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function jo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Rt(e, t, n, r);
}
function Yh(e) {
  return e instanceof Ao || (e = Co(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function As(e, t, n, r) {
  return arguments.length === 1 ? Yh(e) : new Rt(e, t, n, r ?? 1);
}
function Rt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ma(Rt, As, Qu(Ao, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(lr(this.r), lr(this.g), lr(this.b), yi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fl,
  // Deprecated! Use color.formatHex.
  formatHex: fl,
  formatHex8: Fh,
  formatRgb: gl,
  toString: gl
}));
function fl() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function Fh() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function gl() {
  const e = yi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function yi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function sr(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function hl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new un(e, t, n, r);
}
function ec(e) {
  if (e instanceof un) return new un(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ao || (e = Co(e)), !e) return new un();
  if (e instanceof un) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new un(s, a, l, e.opacity);
}
function Wh(e, t, n, r) {
  return arguments.length === 1 ? ec(e) : new un(e, t, n, r ?? 1);
}
function un(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ma(un, Wh, Qu(Ao, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new un(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new un(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Rt(
      fs(e >= 240 ? e - 240 : e + 120, o, r),
      fs(e, o, r),
      fs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new un(vl(this.h), Go(this.s), Go(this.l), yi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${vl(this.h)}, ${Go(this.s) * 100}%, ${Go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function vl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const tc = (e) => () => e;
function Xh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Zh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Kh(e) {
  return (e = +e) == 1 ? nc : function(t, n) {
    return n - t ? Zh(t, n, e) : tc(isNaN(t) ? n : t);
  };
}
function nc(e, t) {
  var n = t - e;
  return n ? Xh(e, n) : tc(isNaN(e) ? t : e);
}
const pl = function e(t) {
  var n = Kh(t);
  function r(o, i) {
    var s = n((o = As(o)).r, (i = As(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = nc(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function qn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Os = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gs = new RegExp(Os.source, "g");
function jh(e) {
  return function() {
    return e;
  };
}
function Gh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Uh(e, t) {
  var n = Os.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Os.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qn(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Gh(l[0].x) : jh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var ml = 180 / Math.PI, Ls = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function rc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ml,
    skewX: Math.atan(l) * ml,
    scaleX: s,
    scaleY: a
  };
}
var Uo;
function Jh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ls : rc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Qh(e) {
  return e == null || (Uo || (Uo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Uo.setAttribute("transform", e), !(e = Uo.transform.baseVal.consolidate())) ? Ls : (e = e.matrix, rc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function oc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, h, p) {
    if (u !== f || c !== d) {
      var x = h.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: qn(u, f) }, { i: x - 2, x: qn(c, d) });
    } else (f || d) && h.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, h, p) {
    if (u !== f || c !== d) {
      var x = h.push(o(h) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: qn(u, f) }, { i: x - 2, x: qn(c, d) });
    } else (f !== 1 || d !== 1) && h.push(o(h) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(h) {
      for (var p = -1, x = d.length, _; ++p < x; ) f[(_ = d[p]).i] = _.x(h);
      return f.join("");
    };
  };
}
var ev = oc(Jh, "px, ", "px)", "deg)"), tv = oc(Qh, ", ", ")", ")"), nv = 1e-12;
function yl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function rv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ov(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const iv = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], h = c - a, p = f - l, x = h * h + p * p, _, k;
    if (x < nv)
      k = Math.log(d / u) / t, _ = function($) {
        return [
          a + $ * h,
          l + $ * p,
          u * Math.exp(t * $ * k)
        ];
      };
    else {
      var v = Math.sqrt(x), b = (d * d - u * u + r * x) / (2 * u * n * v), m = (d * d - u * u - r * x) / (2 * d * n * v), C = Math.log(Math.sqrt(b * b + 1) - b), M = Math.log(Math.sqrt(m * m + 1) - m);
      k = (M - C) / t, _ = function($) {
        var V = $ * k, A = yl(C), O = u / (n * v) * (A * ov(t * V + C) - rv(C));
        return [
          a + O * h,
          l + O * p,
          u * A / yl(t * V + C)
        ];
      };
    }
    return _.duration = k * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Rr = 0, uo = 0, so = 0, ic = 1e3, wi, co, _i = 0, fr = 0, Ki = 0, ko = typeof performance == "object" && performance.now ? performance : Date, sc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ya() {
  return fr || (sc(sv), fr = ko.now() + Ki);
}
function sv() {
  fr = 0;
}
function xi() {
  this._call = this._time = this._next = null;
}
xi.prototype = ac.prototype = {
  constructor: xi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ya() : +n) + (t == null ? 0 : +t), !this._next && co !== this && (co ? co._next = this : wi = this, co = this), this._call = e, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function ac(e, t, n) {
  var r = new xi();
  return r.restart(e, t, n), r;
}
function av() {
  ya(), ++Rr;
  for (var e = wi, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Rr;
}
function wl() {
  fr = (_i = ko.now()) + Ki, Rr = uo = 0;
  try {
    av();
  } finally {
    Rr = 0, uv(), fr = 0;
  }
}
function lv() {
  var e = ko.now(), t = e - _i;
  t > ic && (Ki -= t, _i = e);
}
function uv() {
  for (var e, t = wi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : wi = n);
  co = e, Is(r);
}
function Is(e) {
  if (!Rr) {
    uo && (uo = clearTimeout(uo));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (uo = setTimeout(wl, e - ko.now() - Ki)), so && (so = clearInterval(so))) : (so || (_i = ko.now(), so = setInterval(lv, ic)), Rr = 1, sc(wl));
  }
}
function _l(e, t, n) {
  var r = new xi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var cv = Xi("start", "end", "cancel", "interrupt"), dv = [], lc = 0, xl = 1, zs = 2, oi = 3, bl = 4, Rs = 5, ii = 6;
function ji(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  fv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: cv,
    tween: dv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: lc
  });
}
function wa(e, t) {
  var n = vn(e, t);
  if (n.state > lc) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = vn(e, t);
  if (n.state > oi) throw new Error("too late; already running");
  return n;
}
function vn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function fv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ac(i, 0, n.time);
  function i(u) {
    n.state = xl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, h;
    if (n.state !== xl) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === oi) return _l(s);
        h.state === bl ? (h.state = ii, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ii, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (_l(function() {
      n.state === oi && (n.state = bl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = zs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === zs) {
      for (n.state = oi, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Rs, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Rs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ii, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function si(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > zs && r.state < Rs, r.state = ii, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function gv(e) {
  return this.each(function() {
    si(this, e);
  });
}
function hv(e, t) {
  var n, r;
  return function() {
    var o = Sn(this, e), i = o.tween;
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
function vv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Sn(this, e), s = i.tween;
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
function pv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = vn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? hv : vv)(n, e, t));
}
function _a(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vn(o, r).value[t];
  };
}
function uc(e, t) {
  var n;
  return (typeof t == "number" ? qn : t instanceof Co ? pl : (n = Co(t)) ? (t = n, pl) : Uh)(e, t);
}
function mv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function yv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function _v(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function xv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function bv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Cv(e, t) {
  var n = Zi(e), r = n === "transform" ? tv : uc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? bv : xv)(n, r, _a(this, "attr." + e, t)) : t == null ? (n.local ? yv : mv)(n) : (n.local ? _v : wv)(n, r, t));
}
function kv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function $v(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Ev(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && $v(e, i)), n;
  }
  return o._value = t, o;
}
function Sv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && kv(e, i)), n;
  }
  return o._value = t, o;
}
function Pv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? Ev : Sv)(r, t));
}
function Nv(e, t) {
  return function() {
    wa(this, e).delay = +t.apply(this, arguments);
  };
}
function Tv(e, t) {
  return t = +t, function() {
    wa(this, e).delay = t;
  };
}
function Mv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Nv : Tv)(t, e)) : vn(this.node(), t).delay;
}
function Hv(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Dv(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Vv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Hv : Dv)(t, e)) : vn(this.node(), t).duration;
}
function Av(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Ov(e) {
  var t = this._id;
  return arguments.length ? this.each(Av(t, e)) : vn(this.node(), t).ease;
}
function Lv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Iv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Lv(this._id, e));
}
function zv(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new In(r, this._parents, this._name, this._id);
}
function Rv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, h = 0; h < c; ++h)
      (d = l[h] || u[h]) && (f[h] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new In(s, this._parents, this._name, this._id);
}
function Bv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function qv(e, t, n) {
  var r, o, i = Bv(t) ? wa : Sn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Yv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(qv(n, e, t));
}
function Fv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Wv() {
  return this.on("end.remove", Fv(this._id));
}
function Xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = va(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, ji(u[d], t, n, d, u, vn(c, n)));
  return new In(i, this._parents, t, n);
}
function Zv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ru(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), h, p = vn(c, n), x = 0, _ = d.length; x < _; ++x)
          (h = d[x]) && ji(h, t, n, x, d, p);
        i.push(d), s.push(c);
      }
  return new In(i, s, t, n);
}
var Kv = Vo.prototype.constructor;
function jv() {
  return new Kv(this._groups, this._parents);
}
function Gv(e, t) {
  var n, r, o;
  return function() {
    var i = zr(this, e), s = (this.style.removeProperty(e), zr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function cc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Uv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = zr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Jv(e, t, n) {
  var r, o, i;
  return function() {
    var s = zr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), zr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Qv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? a || (a = cc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function e0(e, t, n) {
  var r = (e += "") == "transform" ? ev : uc;
  return t == null ? this.styleTween(e, Gv(e, r)).on("end.style." + e, cc(e)) : typeof t == "function" ? this.styleTween(e, Jv(e, r, _a(this, "style." + e, t))).each(Qv(this._id, e)) : this.styleTween(e, Uv(e, r, t), n).on("end.style." + e, null);
}
function t0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function n0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && t0(e, s, n)), r;
  }
  return i._value = t, i;
}
function r0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, n0(e, t, n ?? ""));
}
function o0(e) {
  return function() {
    this.textContent = e;
  };
}
function i0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function s0(e) {
  return this.tween("text", typeof e == "function" ? i0(_a(this, "text", e)) : o0(e == null ? "" : e + ""));
}
function a0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function l0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && a0(o)), t;
  }
  return r._value = e, r;
}
function u0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, l0(e));
}
function c0() {
  for (var e = this._name, t = this._id, n = dc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = vn(l, t);
        ji(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new In(r, this._parents, e, n);
}
function d0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Sn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var f0 = 0;
function In(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function dc() {
  return ++f0;
}
var Nn = Vo.prototype;
In.prototype = {
  constructor: In,
  select: Xv,
  selectAll: Zv,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: zv,
  merge: Rv,
  selection: jv,
  transition: c0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: Yv,
  attr: Cv,
  attrTween: Pv,
  style: e0,
  styleTween: r0,
  text: s0,
  textTween: u0,
  remove: Wv,
  tween: pv,
  delay: Mv,
  duration: Vv,
  ease: Ov,
  easeVarying: Iv,
  end: d0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function g0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var h0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: g0
};
function v0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function p0(e) {
  var t, n;
  e instanceof In ? (t = e._id, e = e._name) : (t = dc(), (n = h0).time = ya(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ji(l, e, t, u, s, n || v0(l, t));
  return new In(r, this._parents, e, t);
}
Vo.prototype.interrupt = gv;
Vo.prototype.transition = p0;
const Jo = (e) => () => e;
function m0(e, {
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
function Mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(e) {
    return e === 1 ? this : new Mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Gi = new Mn(1, 0, 0);
fc.prototype = Mn.prototype;
function fc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Gi;
  return e.__zoom;
}
function hs(e) {
  e.stopImmediatePropagation();
}
function ao(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function y0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function w0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Cl() {
  return this.__zoom || Gi;
}
function _0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function x0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function b0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function gc() {
  var e = y0, t = w0, n = b0, r = _0, o = x0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = iv, u = Xi("start", "zoom", "end"), c, f, d, h = 500, p = 150, x = 0, _ = 10;
  function k(E) {
    E.property("__zoom", Cl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", B).on("touchmove.zoom", R).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(E, P, S, N) {
    var H = E.selection ? E.selection() : E;
    H.property("__zoom", Cl), E !== H ? C(E, P, S, N) : H.interrupt().each(function() {
      M(this, arguments).event(N).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, k.scaleBy = function(E, P, S, N) {
    k.scaleTo(E, function() {
      var H = this.__zoom.k, T = typeof P == "function" ? P.apply(this, arguments) : P;
      return H * T;
    }, S, N);
  }, k.scaleTo = function(E, P, S, N) {
    k.transform(E, function() {
      var H = t.apply(this, arguments), T = this.__zoom, L = S == null ? m(H) : typeof S == "function" ? S.apply(this, arguments) : S, Y = T.invert(L), W = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(b(v(T, W), L, Y), H, s);
    }, S, N);
  }, k.translateBy = function(E, P, S, N) {
    k.transform(E, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, N);
  }, k.translateTo = function(E, P, S, N, H) {
    k.transform(E, function() {
      var T = t.apply(this, arguments), L = this.__zoom, Y = N == null ? m(T) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Gi.translate(Y[0], Y[1]).scale(L.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), T, s);
    }, N, H);
  };
  function v(E, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === E.k ? E : new Mn(P, E.x, E.y);
  }
  function b(E, P, S) {
    var N = P[0] - S[0] * E.k, H = P[1] - S[1] * E.k;
    return N === E.x && H === E.y ? E : new Mn(E.k, N, H);
  }
  function m(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function C(E, P, S, N) {
    E.on("start.zoom", function() {
      M(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var H = this, T = arguments, L = M(H, T).event(N), Y = t.apply(H, T), W = S == null ? m(Y) : typeof S == "function" ? S.apply(H, T) : S, G = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), U = H.__zoom, K = typeof P == "function" ? P.apply(H, T) : P, ue = l(U.invert(W).concat(G / U.k), K.invert(W).concat(G / K.k));
      return function(fe) {
        if (fe === 1) fe = K;
        else {
          var ge = ue(fe), ae = G / ge[2];
          fe = new Mn(ae, W[0] - ge[0] * ae, W[1] - ge[1] * ae);
        }
        L.zoom(null, fe);
      };
    });
  }
  function M(E, P, S) {
    return !S && E.__zooming || new $(E, P);
  }
  function $(E, P) {
    this.that = E, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, P), this.taps = 0;
  }
  $.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, P) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var P = tn(this.that).datum();
      u.call(
        E,
        this.that,
        new m0(E, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function V(E, ...P) {
    if (!e.apply(this, arguments)) return;
    var S = M(this, P).event(E), N = this.__zoom, H = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), T = an(E);
    if (S.wheel)
      (S.mouse[0][0] !== T[0] || S.mouse[0][1] !== T[1]) && (S.mouse[1] = N.invert(S.mouse[0] = T)), clearTimeout(S.wheel);
    else {
      if (N.k === H) return;
      S.mouse = [T, N.invert(T)], si(this), S.start();
    }
    ao(E), S.wheel = setTimeout(L, p), S.zoom("mouse", n(b(v(N, H), S.mouse[0], S.mouse[1]), S.extent, s));
    function L() {
      S.wheel = null, S.end();
    }
  }
  function A(E, ...P) {
    if (d || !e.apply(this, arguments)) return;
    var S = E.currentTarget, N = M(this, P, !0).event(E), H = tn(E.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", G, !0), T = an(E, S), L = E.clientX, Y = E.clientY;
    Uu(E.view), hs(E), N.mouse = [T, this.__zoom.invert(T)], si(this), N.start();
    function W(U) {
      if (ao(U), !N.moved) {
        var K = U.clientX - L, ue = U.clientY - Y;
        N.moved = K * K + ue * ue > x;
      }
      N.event(U).zoom("mouse", n(b(N.that.__zoom, N.mouse[0] = an(U, S), N.mouse[1]), N.extent, s));
    }
    function G(U) {
      H.on("mousemove.zoom mouseup.zoom", null), Ju(U.view, N.moved), ao(U), N.event(U).end();
    }
  }
  function O(E, ...P) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, N = an(E.changedTouches ? E.changedTouches[0] : E, this), H = S.invert(N), T = S.k * (E.shiftKey ? 0.5 : 2), L = n(b(v(S, T), N, H), t.apply(this, P), s);
      ao(E), a > 0 ? tn(this).transition().duration(a).call(C, L, N, E) : tn(this).call(k.transform, L, N, E);
    }
  }
  function B(E, ...P) {
    if (e.apply(this, arguments)) {
      var S = E.touches, N = S.length, H = M(this, P, E.changedTouches.length === N).event(E), T, L, Y, W;
      for (hs(E), L = 0; L < N; ++L)
        Y = S[L], W = an(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== W[2] && (H.touch1 = W, H.taps = 0) : (H.touch0 = W, T = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), T && (H.taps < 2 && (f = W[0], c = setTimeout(function() {
        c = null;
      }, h)), si(this), H.start());
    }
  }
  function R(E, ...P) {
    if (this.__zooming) {
      var S = M(this, P).event(E), N = E.changedTouches, H = N.length, T, L, Y, W;
      for (ao(E), T = 0; T < H; ++T)
        L = N[T], Y = an(L, this), S.touch0 && S.touch0[2] === L.identifier ? S.touch0[0] = Y : S.touch1 && S.touch1[2] === L.identifier && (S.touch1[0] = Y);
      if (L = S.that.__zoom, S.touch1) {
        var G = S.touch0[0], U = S.touch0[1], K = S.touch1[0], ue = S.touch1[1], fe = (fe = K[0] - G[0]) * fe + (fe = K[1] - G[1]) * fe, ge = (ge = ue[0] - U[0]) * ge + (ge = ue[1] - U[1]) * ge;
        L = v(L, Math.sqrt(fe / ge)), Y = [(G[0] + K[0]) / 2, (G[1] + K[1]) / 2], W = [(U[0] + ue[0]) / 2, (U[1] + ue[1]) / 2];
      } else if (S.touch0) Y = S.touch0[0], W = S.touch0[1];
      else return;
      S.zoom("touch", n(b(L, Y, W), S.extent, s));
    }
  }
  function I(E, ...P) {
    if (this.__zooming) {
      var S = M(this, P).event(E), N = E.changedTouches, H = N.length, T, L;
      for (hs(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), T = 0; T < H; ++T)
        L = N[T], S.touch0 && S.touch0[2] === L.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === L.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (L = an(L, this), Math.hypot(f[0] - L[0], f[1] - L[1]) < _)) {
        var Y = tn(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Jo(+E), k) : r;
  }, k.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Jo(!!E), k) : e;
  }, k.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Jo(!!E), k) : o;
  }, k.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Jo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), k) : t;
  }, k.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(E) {
    return arguments.length ? (n = E, k) : n;
  }, k.duration = function(E) {
    return arguments.length ? (a = +E, k) : a;
  }, k.interpolate = function(E) {
    return arguments.length ? (l = E, k) : l;
  }, k.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? k : E;
  }, k.clickDistance = function(E) {
    return arguments.length ? (x = (E = +E) * E, k) : Math.sqrt(x);
  }, k.tapDistance = function(E) {
    return arguments.length ? (_ = +E, k) : _;
  }, k;
}
const Br = {
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
var gr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(gr || (gr = {}));
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
var Ci;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ci || (Ci = {}));
const Bs = {
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
var Pr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Pr || (Pr = {}));
var $o;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})($o || ($o = {}));
var Ae;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ae || (Ae = {}));
const kl = {
  [Ae.Left]: Ae.Right,
  [Ae.Right]: Ae.Left,
  [Ae.Top]: Ae.Bottom,
  [Ae.Bottom]: Ae.Top
};
function C0(e, t) {
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
function $l(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function k0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const $0 = (e) => "id" in e && "source" in e && "target" in e, E0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), xa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Oo = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, S0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : xa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ki(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ui(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ji(n);
}, Lo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ki(r);
      n = Ui(n, o);
    }
  }), Ji(n);
}, hc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Io(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = Eo(a, Yr(u)), _ = (h ?? 0) * (p ?? 0), k = i && x > 0;
    (!u.internals.handleBounds || k || x >= _ || u.dragging) && l.push(u);
  }
  return l;
}, qs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function P0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function N0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = P0(e, s), l = Lo(a), u = Ca(l, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function T0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Br.error005());
    else {
      const h = a.measured.width, p = a.measured.height;
      h && p && (f = [
        [l, u],
        [l + h, u + p]
      ]);
    }
  else a && Fr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Fr(f) ? hr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Br.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function vc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const h = i.has(d.id), p = !h && d.parentId && s.find((x) => x.id === d.parentId);
    (h || p) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = qs(s, l);
  for (const d of l)
    a.has(d.id) && !c.find((p) => p.id === d.id) && c.push(d);
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
const qr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: qr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: qr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function pc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const El = (e, t, n) => e < t ? qr(Math.abs(e - t), 1, t) / t : e > n ? -qr(Math.abs(e - n), 1, t) / t : 0, mc = (e, t, n = 15, r = 40) => {
  const o = El(e.x, r, t.width - r) * n, i = El(e.y, r, t.height - r) * n;
  return [o, i];
}, Ui = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ys = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ji = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Yr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = xa(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ki = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = xa(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, yc = (e, t) => Ji(Ui(Ys(e), Ys(t))), Eo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Sl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), M0 = (e, t) => {
}, ba = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Io = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ba(a, s) : a;
}, $i = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Cr(e, t) {
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
function H0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Cr(e, n), o = Cr(e, t);
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
    const r = Cr(e.top ?? e.y ?? 0, n), o = Cr(e.bottom ?? e.y ?? 0, n), i = Cr(e.left ?? e.x ?? 0, t), s = Cr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function D0(e, t, n, r, o, i) {
  const { x: s, y: a } = $i(e, [t, n, r]), { x: l, y: u } = $i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(c),
    bottom: Math.floor(f)
  };
}
const Ca = (e, t, n, r, o, i) => {
  const s = H0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), c = qr(u, r, o), f = e.x + e.width / 2, d = e.y + e.height / 2, h = t / 2 - f * c, p = n / 2 - d * c, x = D0(e, h, p, c, t, n), _ = {
    left: Math.min(x.left - s.left, 0),
    top: Math.min(x.top - s.top, 0),
    right: Math.min(x.right - s.right, 0),
    bottom: Math.min(x.bottom - s.bottom, 0)
  };
  return {
    x: h - _.left + _.right,
    y: p - _.top + _.bottom,
    zoom: c
  };
}, Ei = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Fr(e) {
  return e !== void 0 && e !== "parent";
}
function nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function wc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function V0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function A0() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function vs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = On(e), a = Io({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ba(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _c = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), O0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, L0 = ["INPUT", "SELECT", "TEXTAREA"];
function I0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : L0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const xc = (e) => "clientX" in e, On = (e, t) => {
  var i, s;
  const n = xc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Pl = (e, t, n, r, o) => {
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
      ..._c(s)
    };
  });
};
function z0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Qo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Nl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ae.Left:
      return [t - Qo(t - r, i), n];
    case Ae.Right:
      return [t + Qo(r - t, i), n];
    case Ae.Top:
      return [t, n - Qo(n - o, i)];
    case Ae.Bottom:
      return [t, n + Qo(o - n, i)];
  }
}
function bc({ sourceX: e, sourceY: t, sourcePosition: n = Ae.Bottom, targetX: r, targetY: o, targetPosition: i = Ae.Top, curvature: s = 0.25 }) {
  const [a, l] = Nl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = Nl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, h, p] = z0({
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
    p
  ];
}
function Cc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function R0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function B0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ui(ki(e), ki(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Eo(s, Ji(i)) > 0;
}
const q0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Y0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), F0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return $0(e) ? n = { ...e } : n = {
    ...e,
    id: q0(e)
  }, Y0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Fs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Cc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Tl = {
  [Ae.Left]: { x: -1, y: 0 },
  [Ae.Right]: { x: 1, y: 0 },
  [Ae.Top]: { x: 0, y: -1 },
  [Ae.Bottom]: { x: 0, y: 1 }
}, W0 = ({ source: e, sourcePosition: t = Ae.Bottom, target: n }) => t === Ae.Left || t === Ae.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ml = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function X0({ source: e, sourcePosition: t = Ae.Bottom, target: n, targetPosition: r = Ae.Top, center: o, offset: i }) {
  const s = Tl[t], a = Tl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = W0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let h = [], p, x;
  const _ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, b, m, C] = Cc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    p = o.x ?? v, x = o.y ?? b;
    const $ = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], V = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    s[f] === d ? h = f === "x" ? $ : V : h = f === "x" ? V : $;
  } else {
    const $ = [{ x: l.x, y: u.y }], V = [{ x: u.x, y: l.y }];
    if (f === "x" ? h = s.x === d ? V : $ : h = s.y === d ? $ : V, t === r) {
      const I = Math.abs(e[f] - n[f]);
      if (I <= i) {
        const E = Math.min(i - 1, i - I);
        s[f] === d ? _[f] = (l[f] > e[f] ? -1 : 1) * E : k[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const I = f === "x" ? "y" : "x", E = s[f] === a[I], P = l[I] > u[I], S = l[I] < u[I];
      (s[f] === 1 && (!E && P || E && S) || s[f] !== 1 && (!E && S || E && P)) && (h = f === "x" ? $ : V);
    }
    const A = { x: l.x + _.x, y: l.y + _.y }, O = { x: u.x + k.x, y: u.y + k.y }, B = Math.max(Math.abs(A.x - h[0].x), Math.abs(O.x - h[0].x)), R = Math.max(Math.abs(A.y - h[0].y), Math.abs(O.y - h[0].y));
    B >= R ? (p = (A.x + O.x) / 2, x = h[0].y) : (p = h[0].x, x = (A.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + _.x, y: l.y + _.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], p, x, m, C];
}
function Z0(e, t, n, r) {
  const o = Math.min(Ml(e, t) / 2, Ml(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Si({ sourceX: e, sourceY: t, sourcePosition: n = Ae.Bottom, targetX: r, targetY: o, targetPosition: i = Ae.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, h, p] = X0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((_, k, v) => {
    let b = "";
    return v > 0 && v < c.length - 1 ? b = Z0(c[v - 1], k, c[v + 1], s) : b = `${v === 0 ? "M" : "L"}${k.x} ${k.y}`, _ += b, _;
  }, ""), f, d, h, p];
}
function Hl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function K0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Hl(t) || !Hl(n))
    return null;
  const r = t.internals.handleBounds || Dl(t.handles), o = n.internals.handleBounds || Dl(n.handles), i = Vl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Vl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === gr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Br.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Ae.Bottom, l = (s == null ? void 0 : s.position) || Ae.Top, u = So(t, i, a), c = So(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Dl(e) {
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
function So(e, t, n = Ae.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ae.Top:
      return { x: o + s / 2, y: i };
    case Ae.Right:
      return { x: o + s, y: i + a / 2 };
    case Ae.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ae.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Vl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ws(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function j0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ws(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function G0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ae.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ae.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ae.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ka = {
  nodeOrigin: [0, 0],
  nodeExtent: bi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, U0 = {
  ...ka,
  checkEquality: !0
};
function $a(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function J0(e, t, n) {
  const r = $a(ka, n);
  for (const o of e.values())
    if (o.parentId)
      Ea(o, e, t, r);
    else {
      const i = Oo(o, r.nodeOrigin), s = Fr(o.extent) ? o.extent : r.nodeExtent, a = hr(i, s, nr(o));
      o.internals.positionAbsolute = a;
    }
}
function kc(e, t, n, r) {
  var l, u;
  const o = $a(U0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const d = Oo(c, o.nodeOrigin), h = Fr(c.extent) ? c.extent : o.nodeExtent, p = hr(d, h, nr(c));
      f = {
        ...o.defaults,
        ...c,
        measured: {
          width: (l = c.measured) == null ? void 0 : l.width,
          height: (u = c.measured) == null ? void 0 : u.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? f == null ? void 0 : f.internals.handleBounds : void 0,
          z: $c(c, a),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (i = !1), c.parentId && Ea(f, t, n, r);
  }
  return i;
}
function Q0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ea(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = $a(ka, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Q0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = ep(e, l, i, s, u), { positionAbsolute: h } = e.internals, p = c !== h.x || f !== h.y;
  (p || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: f } : h,
      z: d
    }
  });
}
function $c(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function ep(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Oo(e, n), u = Fr(e.extent) ? hr(l, e.extent, a) : l;
  let c = hr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = pc(c, a, t));
  const f = $c(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function tp(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Yr(l), c = yc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var b;
    const c = l.internals.positionAbsolute, f = nr(l), d = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), _ = Math.max(f.height, Math.round(a.height)), k = (x - f.width) * d[0], v = (_ - f.height) * d[1];
    (h > 0 || p > 0 || k || v) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + k,
        y: l.position.y - p + v
      }
    }), (b = n.get(u)) == null || b.forEach((m) => {
      e.some((C) => C.id === m.id) || o.push({
        id: m.id,
        type: "position",
        position: {
          x: m.position.x + h,
          y: m.position.y + p
        }
      });
    })), (f.width < a.width || f.height < a.height || h || p) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? d[0] * h - k : 0),
        height: _ + (p ? d[1] * p - v : 0)
      }
    });
  }), o;
}
function np(e, t, n, r, o, i) {
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
    const p = _c(d.nodeElement), x = h.measured.width !== p.width || h.measured.height !== p.height;
    if (!!(p.width && p.height && (x || !h.internals.handleBounds || d.force))) {
      const k = d.nodeElement.getBoundingClientRect(), v = Fr(h.extent) ? h.extent : i;
      let { positionAbsolute: b } = h.internals;
      h.parentId && h.extent === "parent" ? b = pc(b, p, t.get(h.parentId)) : v && (b = hr(b, v, p));
      const m = {
        ...h,
        measured: p,
        internals: {
          ...h.internals,
          positionAbsolute: b,
          handleBounds: {
            source: Pl("source", d.nodeElement, k, c, h.id),
            target: Pl("target", d.nodeElement, k, c, h.id)
          }
        }
      };
      t.set(h.id, m), h.parentId && Ea(m, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: p
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: Yr(m, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = tp(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function rp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Al(e, t, n, r, o, i) {
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
function Ec(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Al("source", l, c, e, o, s), Al("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function op(e, t) {
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
function Sc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Sc(n, t) : !1;
}
function Ol(e, t, n) {
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
function ip(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Sc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ps({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function sp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, h = !1;
  function p({ noDragClassName: _, handleSelector: k, domNode: v, isSelectable: b, nodeId: m, nodeClickDistance: C = 0 }) {
    d = tn(v);
    function M({ x: O, y: B }, R) {
      const { nodeLookup: I, nodeExtent: E, snapGrid: P, snapToGrid: S, nodeOrigin: N, onNodeDrag: H, onSelectionDrag: T, onError: L, updateNodePositions: Y } = t();
      i = { x: O, y: B };
      let W = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const U = Lo(a);
        G = Ys(U);
      }
      for (const [U, K] of a) {
        if (!I.has(U))
          continue;
        let ue = { x: O - K.distance.x, y: B - K.distance.y };
        S && (ue = ba(ue, P));
        let fe = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !K.extent) {
          const { positionAbsolute: Ne } = K.internals, we = Ne.x - G.x + E[0][0], Ee = Ne.x + K.measured.width - G.x2 + E[1][0], de = Ne.y - G.y + E[0][1], se = Ne.y + K.measured.height - G.y2 + E[1][1];
          fe = [
            [we, de],
            [Ee, se]
          ];
        }
        const { position: ge, positionAbsolute: ae } = T0({
          nodeId: U,
          nextPosition: ue,
          nodeLookup: I,
          nodeExtent: fe,
          nodeOrigin: N,
          onError: L
        });
        W = W || K.position.x !== ge.x || K.position.y !== ge.y, K.position = ge, K.internals.positionAbsolute = ae;
      }
      if (W && (Y(a, !0), R && (r || H || !m && T))) {
        const [U, K] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(R, a, U, K), H == null || H(R, U, K), m || T == null || T(R, K);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: O, panBy: B, autoPanSpeed: R, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, P] = mc(u, c, R);
      (E !== 0 || P !== 0) && (i.x = (i.x ?? 0) - E / O[2], i.y = (i.y ?? 0) - P / O[2], await B({ x: E, y: P }) && M(i, null)), s = requestAnimationFrame($);
    }
    function V(O) {
      var W;
      const { nodeLookup: B, multiSelectionActive: R, nodesDraggable: I, transform: E, snapGrid: P, snapToGrid: S, selectNodesOnDrag: N, onNodeDragStart: H, onSelectionDragStart: T, unselectNodesAndEdges: L } = t();
      f = !0, (!N || !b) && !R && m && ((W = B.get(m)) != null && W.selected || L()), b && N && m && (e == null || e(m));
      const Y = vs(O.sourceEvent, { transform: E, snapGrid: P, snapToGrid: S, containerBounds: c });
      if (i = Y, a = ip(B, I, Y, m), a.size > 0 && (n || H || !m && T)) {
        const [G, U] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: B
        });
        n == null || n(O.sourceEvent, a, G, U), H == null || H(O.sourceEvent, G, U), m || T == null || T(O.sourceEvent, U);
      }
    }
    const A = Dh().clickDistance(C).on("start", (O) => {
      const { domNode: B, nodeDragThreshold: R, transform: I, snapGrid: E, snapToGrid: P } = t();
      c = (B == null ? void 0 : B.getBoundingClientRect()) || null, h = !1, R === 0 && V(O), i = vs(O.sourceEvent, { transform: I, snapGrid: E, snapToGrid: P, containerBounds: c }), u = On(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: B, transform: R, snapGrid: I, snapToGrid: E, nodeDragThreshold: P, nodeLookup: S } = t(), N = vs(O.sourceEvent, { transform: R, snapGrid: I, snapToGrid: E, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !S.has(m)) && (h = !0), !h) {
        if (!l && B && f && (l = !0, $()), !f) {
          const H = N.xSnapped - (i.x ?? 0), T = N.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + T * T) > P && V(O);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = On(O.sourceEvent, c), M(N, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: B, updateNodePositions: R, onNodeDragStop: I, onSelectionDragStop: E } = t();
        if (R(a, !1), o || I || !m && E) {
          const [P, S] = ps({
            nodeId: m,
            dragItems: a,
            nodeLookup: B,
            dragging: !1
          });
          o == null || o(O.sourceEvent, a, P, S), I == null || I(O.sourceEvent, P, S), m || E == null || E(O.sourceEvent, S);
        }
      }
    }).filter((O) => {
      const B = O.target;
      return !O.button && (!_ || !Ol(B, `.${_}`, v)) && (!k || Ol(B, k, v));
    });
    d.call(A);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: p,
    destroy: x
  };
}
function ap(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Eo(o, Yr(i)) > 0 && r.push(i);
  return r;
}
const lp = 250;
function up(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = ap(e, n, t + lp);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: h } = So(u, f, f.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      p > t || (p < i ? (o = [{ ...f, x: d, y: h }], i = p) : p === i && o.push({ ...f, x: d, y: h }));
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
function Pc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...So(s, l, l.position, !0) } : l;
}
function Nc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function cp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Tc = () => !0;
function dp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: h, onConnectStart: p, onConnect: x, onConnectEnd: _, isValidConnection: k = Tc, onReconnectEnd: v, updateConnection: b, getTransform: m, getFromHandle: C, autoPanSpeed: M }) {
  const $ = O0(e.target);
  let V = 0, A;
  const { x: O, y: B } = On(e), R = $ == null ? void 0 : $.elementFromPoint(O, B), I = Nc(i, R), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !I)
    return;
  const P = Pc(o, I, r, l, t);
  if (!P)
    return;
  let S = On(e, E), N = !1, H = null, T = !1, L = null;
  function Y() {
    if (!c || !E)
      return;
    const [ae, Ne] = mc(S, E, M);
    d({ x: ae, y: Ne }), V = requestAnimationFrame(Y);
  }
  const W = {
    ...P,
    nodeId: o,
    type: I,
    position: P.position
  }, G = l.get(o), K = {
    inProgress: !0,
    isValid: null,
    from: So(G, W, Ae.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: G,
    to: S,
    toHandle: null,
    toPosition: kl[W.position],
    toNode: null
  };
  b(K);
  let ue = K;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function fe(ae) {
    if (!C() || !W) {
      ge(ae);
      return;
    }
    const Ne = m();
    S = On(ae, E), A = up(Io(S, Ne, !1, [1, 1]), n, l, W), N || (Y(), N = !0);
    const we = Mc(ae, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: $,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    L = we.handleDomNode, H = we.connection, T = cp(!!A, we.isValid);
    const Ee = {
      // from stays the same
      ...ue,
      isValid: T,
      to: A && T ? $i({ x: A.x, y: A.y }, Ne) : S,
      toHandle: we.toHandle,
      toPosition: T && we.toHandle ? we.toHandle.position : kl[W.position],
      toNode: we.toHandle ? l.get(we.toHandle.nodeId) : null
    };
    T && A && ue.toHandle && Ee.toHandle && ue.toHandle.type === Ee.toHandle.type && ue.toHandle.nodeId === Ee.toHandle.nodeId && ue.toHandle.id === Ee.toHandle.id && ue.to.x === Ee.to.x && ue.to.y === Ee.to.y || (b(Ee), ue = Ee);
  }
  function ge(ae) {
    (A || L) && H && T && (x == null || x(H));
    const { inProgress: Ne, ...we } = ue, Ee = {
      ...we,
      toPosition: ue.toHandle ? ue.toPosition : null
    };
    _ == null || _(ae, Ee), i && (v == null || v(ae, Ee)), h(), cancelAnimationFrame(V), N = !1, T = !1, H = null, L = null, $.removeEventListener("mousemove", fe), $.removeEventListener("mouseup", ge), $.removeEventListener("touchmove", fe), $.removeEventListener("touchend", ge);
  }
  $.addEventListener("mousemove", fe), $.addEventListener("mouseup", ge), $.addEventListener("touchmove", fe), $.addEventListener("touchend", ge);
}
function Mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Tc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = On(e), x = s.elementFromPoint(h, p), _ = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, k = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const v = Nc(void 0, _), b = _.getAttribute("data-nodeid"), m = _.getAttribute("data-handleid"), C = _.classList.contains("connectable"), M = _.classList.contains("connectableend");
    if (!b || !v)
      return k;
    const $ = {
      source: f ? b : r,
      sourceHandle: f ? m : o,
      target: f ? r : b,
      targetHandle: f ? o : m
    };
    k.connection = $;
    const A = C && M && (n === gr.Strict ? f && v === "source" || !f && v === "target" : b !== r || m !== o);
    k.isValid = A && u($), k.toHandle = Pc(b, v, m, c, n, !1);
  }
  return k;
}
const fp = {
  onPointerDown: dp,
  isValid: Mc
};
function gp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = tn(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: h = !1 }) {
    const p = (b) => {
      const m = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, M = m[2] * Math.pow(2, C);
      t.scaleTo(M);
    };
    let x = [0, 0];
    const _ = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (x = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, k = (b) => {
      const m = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], M = [C[0] - x[0], C[1] - x[1]];
      x = C;
      const $ = r() * Math.max(m[2], Math.log(m[2])) * (h ? -1 : 1), V = {
        x: m[0] - M[0] * $,
        y: m[1] - M[1] * $
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: m[2]
      }, A, a);
    }, v = gc().on("start", _).on("zoom", f ? k : null).on("zoom.wheel", d ? p : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: an
  };
}
const hp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ms = ({ x: e, y: t, zoom: n }) => Gi.translate(e, t).scale(n), kr = (e, t) => e.target.closest(`.${t}`), Hc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ys = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Dc = (e) => {
  const t = e.ctrlKey && Ei() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function vp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (kr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const _ = an(c), k = Dc(c), v = f * Math.pow(2, k);
      r.scaleTo(n, v, _, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let h = o === Kn.Vertical ? 0 : c.deltaX * d, p = o === Kn.Horizontal ? 0 : c.deltaY * d;
    !Ei() && c.shiftKey && o !== Kn.Vertical && (h = c.deltaY * d, p = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(p / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Qi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function pp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = kr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function mp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Qi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function yp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Hc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Qi(i.transform)));
  };
}
function wp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Hc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && hp(e.prevViewport, s.transform))) {
      const l = Qi(s.transform);
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
function _p({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var p;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (kr(c, `${u}-flow__node`) || kr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || kr(c, a) && c.type === "wheel" || kr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((p = c.touches) == null ? void 0 : p.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function xp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = gc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = tn(e).call(d);
  b({
    x: i.x,
    y: i.y,
    zoom: qr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const p = h.on("wheel.zoom"), x = h.on("dblclick.zoom");
  d.wheelDelta(Dc);
  function _(R, I) {
    return h ? new Promise((E) => {
      d == null || d.transform(ys(h, I == null ? void 0 : I.duration, () => E(!0)), R);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: R, noPanClassName: I, onPaneContextMenu: E, userSelectionActive: P, panOnScroll: S, panOnDrag: N, panOnScrollMode: H, panOnScrollSpeed: T, preventScrolling: L, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: G, zoomActivationKeyPressed: U, lib: K, onTransformChange: ue }) {
    P && !c.isZoomingOrPanning && v();
    const ge = S && !U && !P ? vp({
      zoomPanValues: c,
      noWheelClassName: R,
      d3Selection: h,
      d3Zoom: d,
      panOnScrollMode: H,
      panOnScrollSpeed: T,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : pp({
      noWheelClassName: R,
      preventScrolling: L,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", ge, { passive: !1 }), !P) {
      const Ne = mp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ne);
      const we = yp({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: ue
      });
      d.on("zoom", we);
      const Ee = wp({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: S,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", Ee);
    }
    const ae = _p({
      zoomActivationKeyPressed: U,
      panOnDrag: N,
      zoomOnScroll: W,
      panOnScroll: S,
      zoomOnDoubleClick: G,
      zoomOnPinch: Y,
      userSelectionActive: P,
      noPanClassName: I,
      noWheelClassName: R,
      lib: K
    });
    d.filter(ae), G ? h.on("dblclick.zoom", x) : h.on("dblclick.zoom", null);
  }
  function v() {
    d.on("zoom", null);
  }
  async function b(R, I, E) {
    const P = ms(R), S = d == null ? void 0 : d.constrain()(P, I, E);
    return S && await _(S), new Promise((N) => N(S));
  }
  async function m(R, I) {
    const E = ms(R);
    return await _(E, I), new Promise((P) => P(E));
  }
  function C(R) {
    if (h) {
      const I = ms(R), E = h.property("__zoom");
      (E.k !== R.zoom || E.x !== R.x || E.y !== R.y) && (d == null || d.transform(h, I, null, { sync: !0 }));
    }
  }
  function M() {
    const R = h ? fc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: R.x, y: R.y, zoom: R.k };
  }
  function $(R, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleTo(ys(h, I == null ? void 0 : I.duration, () => E(!0)), R);
    }) : Promise.resolve(!1);
  }
  function V(R, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleBy(ys(h, I == null ? void 0 : I.duration, () => E(!0)), R);
    }) : Promise.resolve(!1);
  }
  function A(R) {
    d == null || d.scaleExtent(R);
  }
  function O(R) {
    d == null || d.translateExtent(R);
  }
  function B(R) {
    const I = !Hn(R) || R < 0 ? 0 : R;
    d == null || d.clickDistance(I);
  }
  return {
    update: k,
    destroy: v,
    setViewport: m,
    setViewportConstrained: b,
    getViewport: M,
    scaleTo: $,
    scaleBy: V,
    setScaleExtent: A,
    setTranslateExtent: O,
    syncViewport: C,
    setClickDistance: B
  };
}
var Ll;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ll || (Ll = {}));
var bp = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(G, "$connectable", n), i = () => ee(ge, "$connectionRadius", n), s = () => ee(ue, "$domNode", n), a = () => ee(fe, "$nodeLookup", n), l = () => ee(K, "$connectionMode", n), u = () => ee(we, "$lib", n), c = () => ee(_e, "$autoPanOnConnect", n), f = () => ee(me, "$flowId", n), d = () => ee(Ne, "$isValidConnectionStore", n), h = () => ee(de, "$onedgecreate", n), p = () => ee(qe, "$onConnectAction", n), x = () => ee(re, "$onConnectStartAction", n), _ = () => ee(ie, "$onConnectEndAction", n), k = () => ee(ae, "$viewport", n), v = () => ee(Ye, "$connection", n), b = () => ee(Te, "$edges", n), m = () => ee(Oe, "$connectionLookup", n), C = /* @__PURE__ */ le(), M = /* @__PURE__ */ le(), $ = /* @__PURE__ */ le(), V = /* @__PURE__ */ le(), A = /* @__PURE__ */ le(), O = /* @__PURE__ */ le(), B = /* @__PURE__ */ le(), R = /* @__PURE__ */ le();
  let I = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), P = w(t, "position", 28, () => Ae.Top), S = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), H = w(t, "onconnect", 12, void 0), T = w(t, "ondisconnect", 12, void 0), L = w(t, "isConnectable", 12, void 0), Y = w(t, "class", 12, void 0);
  const W = cr("svelteflow__node_id"), G = cr("svelteflow__node_connectable"), U = Ge(), {
    connectionMode: K,
    domNode: ue,
    nodeLookup: fe,
    connectionRadius: ge,
    viewport: ae,
    isValidConnection: Ne,
    lib: we,
    addEdge: Ee,
    onedgecreate: de,
    panBy: se,
    cancelConnection: he,
    updateConnection: j,
    autoPanOnConnect: _e,
    edges: Te,
    connectionLookup: Oe,
    onconnect: qe,
    onconnectstart: re,
    onconnectend: ie,
    flowId: me,
    connection: Ye
  } = U;
  function Ze(De) {
    const rt = xc(De);
    (rt && De.button === 0 || !rt) && fp.onPointerDown(De, {
      handleId: g($),
      nodeId: W,
      isTarget: g(C),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: N() ?? d(),
      updateConnection: j,
      cancelConnection: he,
      panBy: se,
      onConnect: (Re) => {
        var ot;
        const Ie = h() ? h()(Re) : Re;
        Ie && (Ee(Ie), (ot = p()) == null || ot(Re));
      },
      onConnectStart: (Re, Ie) => {
        var ot;
        (ot = x()) == null || ot(Re, {
          nodeId: Ie.nodeId,
          handleId: Ie.handleId,
          handleType: Ie.handleType
        });
      },
      onConnectEnd: (Re, Ie) => {
        var ot;
        (ot = _()) == null || ot(Re, Ie);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let te = /* @__PURE__ */ le(null), He = /* @__PURE__ */ le();
  ye(() => Q(E()), () => {
    J(C, E() === "target");
  }), ye(
    () => (Q(L()), o()),
    () => {
      J(M, L() !== void 0 ? L() : o());
    }
  ), ye(() => Q(I()), () => {
    J($, I() || null);
  }), ye(
    () => (Q(H()), Q(T()), b(), m(), Q(E()), Q(I())),
    () => {
      (H() || T()) && (b(), J(He, m().get(`${W}-${E()}${I() ? `-${I()}` : ""}`)));
    }
  ), ye(
    () => (g(te), g(He), Q(T()), Q(H())),
    () => {
      if (g(te) && !C0(g(He), g(te))) {
        const De = g(He) ?? /* @__PURE__ */ new Map();
        $l(g(te), De, T()), $l(De, g(te), H());
      }
      J(te, g(He) ?? /* @__PURE__ */ new Map());
    }
  ), ye(() => v(), () => {
    J(V, !!v().fromHandle);
  }), ye(
    () => (v(), Q(E()), g($)),
    () => {
      var De, rt, Re;
      J(A, ((De = v().fromHandle) == null ? void 0 : De.nodeId) === W && ((rt = v().fromHandle) == null ? void 0 : rt.type) === E() && ((Re = v().fromHandle) == null ? void 0 : Re.id) === g($));
    }
  ), ye(
    () => (v(), Q(E()), g($)),
    () => {
      var De, rt, Re;
      J(O, ((De = v().toHandle) == null ? void 0 : De.nodeId) === W && ((rt = v().toHandle) == null ? void 0 : rt.type) === E() && ((Re = v().toHandle) == null ? void 0 : Re.id) === g($));
    }
  ), ye(
    () => (l(), v(), Q(E()), g($)),
    () => {
      var De, rt, Re;
      J(B, l() === gr.Strict ? ((De = v().fromHandle) == null ? void 0 : De.type) !== E() : W !== ((rt = v().fromHandle) == null ? void 0 : rt.nodeId) || g($) !== ((Re = v().fromHandle) == null ? void 0 : Re.id));
    }
  ), ye(() => (g(O), v()), () => {
    J(R, g(O) && v().isValid);
  }), xt(), Be();
  var oe = bp();
  ke(oe, "data-nodeid", W);
  let tt;
  var Et = F(oe);
  kt(Et, t, "default", {}), q(oe), $e(
    (De, rt) => {
      ke(oe, "data-handleid", g($)), ke(oe, "data-handlepos", P()), ke(oe, "data-id", `${f() ?? ""}-${W ?? ""}-${(I() || "") ?? ""}-${E() ?? ""}`), tt = $t(oe, 1, De, null, tt, rt), ht(oe, S());
    },
    [
      () => hn(At([
        "svelte-flow__handle",
        `svelte-flow__handle-${P()}`,
        "nodrag",
        "nopan",
        P(),
        Y()
      ])),
      () => ({
        valid: g(R),
        connectingto: g(O),
        connectingfrom: g(A),
        source: !g(C),
        target: g(C),
        connectablestart: g(M),
        connectableend: g(M),
        connectable: g(M),
        connectionindicator: g(M) && (!g(V) || g(B))
      })
    ],
    Ce
  ), st("mousedown", oe, Ze), st("touchstart", oe, Ze), D(e, oe);
  var Ot = pe({
    get id() {
      return I();
    },
    set id(De) {
      I(De), y();
    },
    get type() {
      return E();
    },
    set type(De) {
      E(De), y();
    },
    get position() {
      return P();
    },
    set position(De) {
      P(De), y();
    },
    get style() {
      return S();
    },
    set style(De) {
      S(De), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(De) {
      N(De), y();
    },
    get onconnect() {
      return H();
    },
    set onconnect(De) {
      H(De), y();
    },
    get ondisconnect() {
      return T();
    },
    set ondisconnect(De) {
      T(De), y();
    },
    get isConnectable() {
      return L();
    },
    set isConnectable(De) {
      L(De), y();
    },
    get class() {
      return Y();
    },
    set class(De) {
      Y(De), y();
    }
  });
  return r(), Ot;
}
ce(
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
var Cp = /* @__PURE__ */ ne("<!> <!>", 1);
function Pi(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, ["data", "targetPosition", "sourcePosition"]), ve(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Be();
  var s = Cp(), a = be(s);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ae.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = z(a), c = z(u);
  const f = /* @__PURE__ */ Ce(() => i() ?? Ae.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(f);
    }
  }), $e(() => {
    var d;
    return ft(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), D(e, s), pe({
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
ce(
  Pi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var kp = /* @__PURE__ */ ne(" <!>", 1);
function Vc(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, ["data", "sourcePosition"]), ve(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Be(), Ve();
  var i = kp(), s = be(i), a = z(s);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ae.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), $e(() => {
    var u;
    return ft(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), pe({
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
ce(Vc, { data: {}, sourcePosition: {} }, [], [], !0);
var $p = /* @__PURE__ */ ne(" <!>", 1);
function Ac(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, ["data", "targetPosition"]), ve(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Be(), Ve();
  var i = $p(), s = be(i), a = z(s);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ae.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), $e(() => {
    var u;
    return ft(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), pe({
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
ce(Ac, { data: {}, targetPosition: {} }, [], [], !0);
function Oc(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, []);
}
ce(Oc, {}, [], [], !0);
function Il(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Nr(e, { target: t, domNode: n }) {
  return Il(e, n, t), {
    async update({ target: r, domNode: o }) {
      Il(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Ep = /* @__PURE__ */ ne("<div><!></div>");
function Lc(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(i, "$domNode", n), { domNode: i } = Ge();
  Be();
  var s = Ep(), a = F(s);
  kt(a, t, "default", {}), q(s), Ct(s, (l, u) => Nr == null ? void 0 : Nr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, s), pe(), r();
}
ce(Lc, {}, ["default"], [], !0);
function Ic() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ge();
  return (a) => {
    const l = Z(e).get(a);
    if (!l) {
      console.warn("012", Br.error012(a));
      return;
    }
    (l.selectable || Z(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && Z(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var Sp = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function zc(e, t) {
  ve(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Ic(), s = cr("svelteflow__edge_id");
  return Be(), Lc(e, {
    children: (a, l) => {
      var u = Sp();
      let c;
      var f = F(u);
      kt(f, t, "default", {}), q(u), $e(() => c = ht(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), st("keyup", u, () => {
      }), st("click", u, () => {
        s && i(s);
      }), D(a, u);
    },
    $$slots: { default: !0 }
  }), pe({
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
ce(zc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Pp = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Np = /* @__PURE__ */ Pe('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  ve(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), h = f() === void 0 ? 20 : f();
  Be();
  var p = Np(), x = be(p), _ = z(x);
  {
    var k = (m) => {
      var C = Pp();
      ke(C, "stroke-opacity", 0), ke(C, "stroke-width", h), $e(() => ke(C, "d", r())), D(m, C);
    };
    xe(_, (m) => {
      h && m(k);
    });
  }
  var v = z(_);
  {
    var b = (m) => {
      zc(m, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, M) => {
          Ve();
          var $ = ze();
          $e(() => ft($, o())), D(C, $);
        },
        $$slots: { default: !0 }
      });
    };
    xe(v, (m) => {
      o() && m(b);
    });
  }
  return $e(
    (m) => {
      ke(x, "id", n()), ke(x, "d", r()), $t(x, 0, m), ke(x, "marker-start", l()), ke(x, "marker-end", u()), ht(x, c());
    },
    [
      () => hn(At(["svelte-flow__edge-path", d()]))
    ],
    Ce
  ), D(e, p), pe({
    get id() {
      return n();
    },
    set id(m) {
      n(m), y();
    },
    get path() {
      return r();
    },
    set path(m) {
      r(m), y();
    },
    get label() {
      return o();
    },
    set label(m) {
      o(m), y();
    },
    get labelX() {
      return i();
    },
    set labelX(m) {
      i(m), y();
    },
    get labelY() {
      return s();
    },
    set labelY(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(m) {
      l(m), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(m) {
      u(m), y();
    },
    get style() {
      return c();
    },
    set style(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get class() {
      return d();
    },
    set class(m) {
      d(m), y();
    }
  });
}
ce(
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
function Ni(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, [
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(d()), Q(h()), Q(x()), Q(_()), Q(p()), Q(k())),
    () => {
      ((v) => (J(r, v[0]), J(o, v[1]), J(i, v[2])))(bc({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), xt(), Be(), zo(e, {
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
  }), pe({
    get label() {
      return s();
    },
    set label(v) {
      s(v), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), y();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(v) {
      f(v), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(v) {
      d(v), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), y();
    },
    get targetX() {
      return x();
    },
    set targetX(v) {
      x(v), y();
    },
    get targetY() {
      return _();
    },
    set targetY(v) {
      _(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ce(
  Ni,
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
function Rc(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, [
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(d()), Q(h()), Q(x()), Q(_()), Q(p()), Q(k())),
    () => {
      ((v) => (J(r, v[0]), J(o, v[1]), J(i, v[2])))(Si({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), xt(), Be(), zo(e, {
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
  }), pe({
    get label() {
      return s();
    },
    set label(v) {
      s(v), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), y();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(v) {
      f(v), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(v) {
      d(v), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), y();
    },
    get targetX() {
      return x();
    },
    set targetX(v) {
      x(v), y();
    },
    get targetY() {
      return _();
    },
    set targetY(v) {
      _(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ce(
  Rc,
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
function Bc(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, [
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(d()), Q(h()), Q(p()), Q(x())),
    () => {
      ((_) => (J(r, _[0]), J(o, _[1]), J(i, _[2])))(Fs({
        sourceX: d(),
        sourceY: h(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), xt(), Be(), zo(e, {
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
  }), pe({
    get label() {
      return s();
    },
    set label(_) {
      s(_), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(_) {
      a(_), y();
    },
    get style() {
      return l();
    },
    set style(_) {
      l(_), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(_) {
      u(_), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(_) {
      c(_), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(_) {
      f(_), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(_) {
      d(_), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(_) {
      h(_), y();
    },
    get targetX() {
      return p();
    },
    set targetX(_) {
      p(_), y();
    },
    get targetY() {
      return x();
    },
    set targetY(_) {
      x(_), y();
    }
  });
}
ce(
  Bc,
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
function qc(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ut(n, [
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(d()), Q(h()), Q(x()), Q(_()), Q(p()), Q(k())),
    () => {
      ((v) => (J(r, v[0]), J(o, v[1]), J(i, v[2])))(Si({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), xt(), Be(), zo(e, {
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
  }), pe({
    get label() {
      return s();
    },
    set label(v) {
      s(v), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), y();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(v) {
      f(v), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(v) {
      d(v), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), y();
    },
    get targetX() {
      return x();
    },
    set targetX(v) {
      x(v), y();
    },
    get targetY() {
      return _();
    },
    set targetY(v) {
      _(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ce(
  qc,
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
function Tp(e, t) {
  const n = e.set, r = t.set, o = Z(e), i = Z(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function Mp(e, t) {
  const n = e.set, r = t.set;
  let o = Z(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Hp = (e, t, n) => {
  if (!n)
    return;
  const r = Z(e), o = t.set, i = n.set;
  let s = n ? Z(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Dp = (e, t, n, r = [0, 0], o = bi, i, s, a, l, u, c, f, d) => {
  const { subscribe: h, set: p, update: x } = Se([]);
  let _ = e, k = {}, v = !0;
  const b = ($) => {
    const V = kc($, t, n, {
      elevateNodesOnSelect: v,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: k,
      checkEquality: !1
    });
    return Z(i) && V && Z(l) && (N0({
      nodes: t,
      width: Z(u),
      height: Z(c),
      panZoom: Z(l),
      minZoom: Z(f),
      maxZoom: Z(d)
    }, Z(s)).then((O) => {
      var B;
      (B = Z(a)) == null || B.resolve(O), a.set(null);
    }), i.set(!1), s.set(void 0)), _ = $, p(_), _;
  }, m = ($) => b($(_)), C = ($) => {
    k = $;
  }, M = ($) => {
    v = $.elevateNodesOnSelect ?? v;
  };
  return b(_), {
    subscribe: h,
    set: b,
    update: m,
    setDefaultOptions: C,
    setOptions: M
  };
}, Vp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = Se([]);
  let a = e, l = {};
  const u = (d) => {
    const h = l ? d.map((p) => ({ ...l, ...p })) : d;
    Ec(t, n, h), a = h, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Yc = {
  input: Vc,
  output: Ac,
  default: Pi,
  group: Oc
}, Fc = {
  straight: Bc,
  smoothstep: Rc,
  default: Ni,
  step: qc
}, Ap = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? bi;
  kc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Ec(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const M = Lo(a, {
      filter: ($) => !!(($.width || $.initialWidth) && ($.height || $.initialHeight))
    });
    h = Ca(M, n, r, 0.5, 2, 0.1);
  }
  const p = Se(!1), x = Se(void 0), _ = Se(null), k = Se(null), v = Se(500), b = Se(500), m = Se(0.5), C = Se(2);
  return {
    flowId: Se(null),
    nodes: Dp(e, a, l, f, d, p, x, _, k, v, b, m, C),
    nodeLookup: Jt(a),
    parentLookup: Jt(l),
    edgeLookup: Jt(c),
    visibleNodes: Jt([]),
    edges: Vp(t, u, c),
    visibleEdges: Jt([]),
    connectionLookup: Jt(u),
    width: v,
    height: b,
    minZoom: m,
    maxZoom: C,
    nodeOrigin: Se(f),
    nodeDragThreshold: Se(1),
    nodeExtent: Se(d),
    translateExtent: Se(bi),
    autoPanOnNodeDrag: Se(!0),
    autoPanOnConnect: Se(!0),
    fitViewQueued: p,
    fitViewOptions: x,
    fitViewResolver: _,
    panZoom: k,
    snapGrid: Se(null),
    dragging: Se(!1),
    selectionRect: Se(null),
    selectionKeyPressed: Se(!1),
    multiselectionKeyPressed: Se(!1),
    deleteKeyPressed: Se(!1),
    panActivationKeyPressed: Se(!1),
    zoomActivationKeyPressed: Se(!1),
    selectionRectMode: Se(null),
    selectionMode: Se(Ci.Partial),
    nodeTypes: Se(Yc),
    edgeTypes: Se(Fc),
    viewport: Se(h),
    connectionMode: Se(gr.Strict),
    domNode: Se(null),
    connection: Jt(Bs),
    connectionLineType: Se(Pr.Bezier),
    connectionRadius: Se(20),
    isValidConnection: Se(() => !0),
    nodesDraggable: Se(!0),
    nodesConnectable: Se(!0),
    elementsSelectable: Se(!0),
    selectNodesOnDrag: Se(!0),
    markers: Jt([]),
    defaultMarkerColor: Se("#b1b1b7"),
    lib: Jt("svelte"),
    onlyRenderVisibleElements: Se(!1),
    onerror: Se(M0),
    ondelete: Se(void 0),
    onedgecreate: Se(void 0),
    onconnect: Se(void 0),
    onconnectstart: Se(void 0),
    onconnectend: Se(void 0),
    onbeforedelete: Se(void 0),
    nodesInitialized: Se(!1),
    edgesInitialized: Se(!1),
    viewportInitialized: Se(!1),
    initialized: Jt(!1)
  };
};
function Op(e) {
  const t = Zn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && B0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Zn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = K0({
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
      zIndex: R0({
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
function Lp(e) {
  return Zn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? hc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const es = Symbol();
function Wc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Ap({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(P) {
    a.nodeTypes.set({
      ...Yc,
      ...P
    });
  }
  function u(P) {
    a.edgeTypes.set({
      ...Fc,
      ...P
    });
  }
  function c(P) {
    const S = Z(a.edges);
    a.edges.set(F0(P, S));
  }
  const f = (P, S = !1) => {
    var H;
    const N = Z(a.nodeLookup);
    for (const [T, L] of P) {
      const Y = (H = N.get(T)) == null ? void 0 : H.internals.userNode;
      Y && (Y.position = L.position, Y.dragging = S);
    }
    a.nodes.update((T) => T);
  };
  function d(P) {
    var L, Y, W;
    const S = Z(a.nodeLookup), N = Z(a.parentLookup), { changes: H, updatedInternals: T } = np(P, S, Z(a.parentLookup), Z(a.domNode), Z(a.nodeOrigin));
    if (T) {
      J0(S, N, { nodeOrigin: i, nodeExtent: s });
      for (const G of H) {
        const U = (L = S.get(G.id)) == null ? void 0 : L.internals.userNode;
        if (U)
          switch (G.type) {
            case "dimensions": {
              const K = { ...U.measured, ...G.dimensions };
              G.setAttributes && (U.width = ((Y = G.dimensions) == null ? void 0 : Y.width) ?? U.width, U.height = ((W = G.dimensions) == null ? void 0 : W.height) ?? U.height), U.measured = K;
              break;
            }
            case "position":
              U.position = G.position ?? U.position;
              break;
          }
      }
      a.nodes.update((G) => G), Z(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(P) {
    const S = Z(a.fitViewResolver) ?? A0();
    return a.fitViewQueued.set(!0), a.fitViewOptions.set(P), a.fitViewResolver.set(S), a.nodes.set(Z(a.nodes)), S.promise;
  }
  function p(P, S) {
    const N = Z(a.panZoom);
    return N ? N.scaleBy(P, S) : Promise.resolve(!1);
  }
  function x(P) {
    return p(1.2, P);
  }
  function _(P) {
    return p(1 / 1.2, P);
  }
  function k(P) {
    const S = Z(a.panZoom);
    S && (S.setScaleExtent([P, Z(a.maxZoom)]), a.minZoom.set(P));
  }
  function v(P) {
    const S = Z(a.panZoom);
    S && (S.setScaleExtent([Z(a.minZoom), P]), a.maxZoom.set(P));
  }
  function b(P) {
    const S = Z(a.panZoom);
    S && (S.setTranslateExtent(P), a.translateExtent.set(P));
  }
  function m(P) {
    let S = !1;
    return P.forEach((N) => {
      N.selected && (N.selected = !1, S = !0);
    }), S;
  }
  function C(P) {
    var S;
    (S = Z(a.panZoom)) == null || S.setClickDistance(P);
  }
  function M(P) {
    m((P == null ? void 0 : P.nodes) || Z(a.nodes)) && a.nodes.set(Z(a.nodes)), m((P == null ? void 0 : P.edges) || Z(a.edges)) && a.edges.set(Z(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (P) => {
    var S;
    if (P) {
      const N = Z(a.nodes), H = Z(a.edges), T = N.filter((G) => G.selected), L = H.filter((G) => G.selected), { nodes: Y, edges: W } = await vc({
        nodesToRemove: T,
        edgesToRemove: L,
        nodes: N,
        edges: H,
        onBeforeDelete: Z(a.onbeforedelete)
      });
      (Y.length || W.length) && (a.nodes.update((G) => G.filter((U) => !Y.some((K) => K.id === U.id))), a.edges.update((G) => G.filter((U) => !W.some((K) => K.id === U.id))), (S = Z(a.ondelete)) == null || S({
        nodes: Y,
        edges: W
      }));
    }
  });
  function $(P) {
    const S = Z(a.multiselectionKeyPressed);
    a.nodes.update((N) => N.map((H) => {
      const T = P.includes(H.id), L = S && H.selected || T;
      return H.selected = L, H;
    })), S || a.edges.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function V(P) {
    const S = Z(a.multiselectionKeyPressed);
    a.edges.update((N) => N.map((H) => {
      const T = P.includes(H.id), L = S && H.selected || T;
      return H.selected = L, H;
    })), S || a.nodes.update((N) => N.map((H) => (H.selected = !1, H)));
  }
  function A(P) {
    var N;
    const S = (N = Z(a.nodes)) == null ? void 0 : N.find((H) => H.id === P);
    if (!S) {
      console.warn("012", Br.error012(P));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), S.selected ? S.selected && Z(a.multiselectionKeyPressed) && M({ nodes: [S], edges: [] }) : $([P]);
  }
  function O(P) {
    const S = Z(a.viewport);
    return rp({
      delta: P,
      panZoom: Z(a.panZoom),
      transform: [S.x, S.y, S.zoom],
      translateExtent: Z(a.translateExtent),
      width: Z(a.width),
      height: Z(a.height)
    });
  }
  const B = Se(Bs), R = (P) => {
    B.set({ ...P });
  };
  function I() {
    B.set(Bs);
  }
  function E() {
    a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), M(), I();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Op(a),
    visibleNodes: Lp(a),
    connection: Zn([B, a.viewport], ([P, S]) => P.inProgress ? {
      ...P,
      to: Io(P.to, [S.x, S.y, S.zoom])
    } : { ...P }),
    markers: Zn([a.edges, a.defaultMarkerColor, a.flowId], ([P, S, N]) => j0(P, { defaultColor: S, id: N })),
    initialized: (() => {
      let P = !1;
      const S = Z(a.nodes).length, N = Z(a.edges).length;
      return Zn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([H, T, L]) => P || (S === 0 ? P = L : N === 0 ? P = L && H : P = L && H && T, P));
    })(),
    // actions
    syncNodeStores: (P) => Tp(a.nodes, P),
    syncEdgeStores: (P) => Mp(a.edges, P),
    syncViewport: (P) => Hp(a.panZoom, a.viewport, P),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: x,
    zoomOut: _,
    fitView: (P) => h(P),
    setMinZoom: k,
    setMaxZoom: v,
    setTranslateExtent: b,
    setPaneClickDistance: C,
    unselectNodesAndEdges: M,
    addSelectedNodes: $,
    addSelectedEdges: V,
    handleNodeSelection: A,
    panBy: O,
    updateConnection: R,
    cancelConnection: I,
    reset: E
  };
}
function Ge() {
  const e = cr(es);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Ip({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Wc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Lr(es, {
    getStore: () => a
  }), a;
}
function ws(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = xp({
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
var zp = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Rp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Xc(e, t) {
  ve(t, !1), et(e, Rp);
  const [n, r] = at(), o = () => ee(H, "$panActivationKeyPressed", n), i = () => ee(I, "$minZoom", n), s = () => ee(E, "$maxZoom", n), a = () => ee(T, "$zoomActivationKeyPressed", n), l = () => ee(R, "$selectionRect", n), u = () => ee(S, "$translateExtent", n), c = () => ee(N, "$lib", n), f = /* @__PURE__ */ le(), d = /* @__PURE__ */ le(), h = /* @__PURE__ */ le();
  let p = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), _ = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), v = w(t, "panOnScrollMode", 12), b = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), C = w(t, "zoomOnDoubleClick", 12), M = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), V = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: B,
    selectionRect: R,
    minZoom: I,
    maxZoom: E,
    dragging: P,
    translateExtent: S,
    lib: N,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: T,
    viewportInitialized: L
  } = Ge(), Y = (K) => O.set({
    x: K[0],
    y: K[1],
    zoom: K[2]
  });
  sn(() => {
    vi(L, !0);
  }), ye(() => Q(p()), () => {
    J(f, p() || { x: 0, y: 0, zoom: 1 });
  }), ye(
    () => (o(), Q($())),
    () => {
      J(d, o() || $());
    }
  ), ye(
    () => (o(), Q(V())),
    () => {
      J(h, o() || V());
    }
  ), xt(), Be();
  var W = zp(), G = F(W);
  kt(G, t, "default", {}), q(W), Ct(W, (K, ue) => ws == null ? void 0 : ws(K, ue), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(f),
    dragging: P,
    panZoom: B,
    onPanZoomStart: x(),
    onPanZoom: _(),
    onPanZoomEnd: k(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: M(),
    panOnScroll: g(h),
    panOnDrag: g(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof b() == "boolean" ? b() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: Y
  })), D(e, W);
  var U = pe({
    get initialViewport() {
      return p();
    },
    set initialViewport(K) {
      p(K), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(K) {
      x(K), y();
    },
    get onMove() {
      return _();
    },
    set onMove(K) {
      _(K), y();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(K) {
      k(K), y();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(K) {
      v(K), y();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(K) {
      b(K), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(K) {
      m(K), y();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(K) {
      C(K), y();
    },
    get zoomOnPinch() {
      return M();
    },
    set zoomOnPinch(K) {
      M(K), y();
    },
    get panOnDrag() {
      return $();
    },
    set panOnDrag(K) {
      $(K), y();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(K) {
      V(K), y();
    },
    get paneClickDistance() {
      return A();
    },
    set paneClickDistance(K) {
      A(K), y();
    }
  });
  return r(), U;
}
ce(
  Xc,
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
function zl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Rl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Bp = /* @__PURE__ */ ne("<div><!></div>");
const qp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  ve(t, !1), et(e, qp);
  const [n, r] = at(), o = () => ee(P, "$panActivationKeyPressed", n), i = () => ee(I, "$selectionKeyPressed", n), s = () => ee(B, "$selectionRect", n), a = () => ee(O, "$elementsSelectable", n), l = () => ee(R, "$selectionRectMode", n), u = () => ee(N, "$connection", n), c = () => ee($, "$edges", n), f = () => ee(M, "$nodeLookup", n), d = () => ee(V, "$viewport", n), h = () => ee(E, "$selectionMode", n), p = () => ee(A, "$dragging", n), x = /* @__PURE__ */ le(), _ = /* @__PURE__ */ le(), k = /* @__PURE__ */ le();
  let v = w(t, "panOnDrag", 12, void 0), b = w(t, "selectionOnDrag", 12, void 0);
  const m = Wi(), {
    nodes: C,
    nodeLookup: M,
    edges: $,
    viewport: V,
    dragging: A,
    elementsSelectable: O,
    selectionRect: B,
    selectionRectMode: R,
    selectionKeyPressed: I,
    selectionMode: E,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: S,
    connection: N
  } = Ge();
  let H = /* @__PURE__ */ le(), T = null, L = [], Y = !1;
  function W(de) {
    if (Y || u().inProgress) {
      Y = !1;
      return;
    }
    m("paneclick", { event: de }), S(), R.set(null);
  }
  function G(de) {
    var j, _e;
    if (T = g(H).getBoundingClientRect(), !O || !g(_) || de.button !== 0 || de.target !== g(H) || !T)
      return;
    (_e = (j = de.target) == null ? void 0 : j.setPointerCapture) == null || _e.call(j, de.pointerId);
    const { x: se, y: he } = On(de, T);
    S(), B.set({
      width: 0,
      height: 0,
      startX: se,
      startY: he,
      x: se,
      y: he
    });
  }
  function U(de) {
    if (!g(_) || !T || !s())
      return;
    Y = !0;
    const se = On(de, T), he = s().startX ?? 0, j = s().startY ?? 0, _e = {
      ...s(),
      x: se.x < he ? se.x : he,
      y: se.y < j ? se.y : j,
      width: Math.abs(se.x - he),
      height: Math.abs(se.y - j)
    }, Te = L.map((ie) => ie.id), Oe = qs(L, c()).map((ie) => ie.id);
    L = hc(
      f(),
      _e,
      [
        d().x,
        d().y,
        d().zoom
      ],
      h() === Ci.Partial,
      !0
    );
    const qe = qs(L, c()).map((ie) => ie.id), re = L.map((ie) => ie.id);
    (Te.length !== re.length || re.some((ie) => !Te.includes(ie))) && C.update((ie) => ie.map(Rl(re))), (Oe.length !== qe.length || qe.some((ie) => !Oe.includes(ie))) && $.update((ie) => ie.map(Rl(qe))), R.set("user"), B.set(_e);
  }
  function K(de) {
    var se, he;
    de.button === 0 && ((he = (se = de.target) == null ? void 0 : se.releasePointerCapture) == null || he.call(se, de.pointerId), !g(_) && l() === "user" && de.target === g(H) && (W == null || W(de)), B.set(null), L.length > 0 && vi(R, "nodes"), i() && (Y = !1));
  }
  const ue = (de) => {
    var se;
    if (Array.isArray(g(x)) && ((se = g(x)) != null && se.includes(2))) {
      de.preventDefault();
      return;
    }
    m("panecontextmenu", { event: de });
  };
  ye(
    () => (o(), Q(v())),
    () => {
      J(x, o() || v());
    }
  ), ye(
    () => (i(), s(), Q(b()), g(x)),
    () => {
      J(_, i() || s() || b() && g(x) !== !0);
    }
  ), ye(
    () => (a(), g(_), l()),
    () => {
      J(k, a() && (g(_) || l() === "user"));
    }
  ), xt(), Be();
  var fe = Bp(), ge = /* @__PURE__ */ Me(() => g(k) ? void 0 : zl(W, g(H))), ae = /* @__PURE__ */ Me(() => zl(ue, g(H)));
  let Ne;
  var we = F(fe);
  kt(we, t, "default", {}), q(fe), kn(fe, (de) => J(H, de), () => g(H)), $e(
    (de) => Ne = $t(fe, 1, "svelte-flow__pane svelte-1esy7hx", null, Ne, de),
    [
      () => ({
        draggable: v() === !0 || Array.isArray(v()) && v().includes(0),
        dragging: p(),
        selection: g(_)
      })
    ],
    Ce
  ), st("click", fe, function(...de) {
    var se;
    (se = g(ge)) == null || se.apply(this, de);
  }), st("pointerdown", fe, function(...de) {
    var se;
    (se = g(k) ? G : void 0) == null || se.apply(this, de);
  }), st("pointermove", fe, function(...de) {
    var se;
    (se = g(k) ? U : void 0) == null || se.apply(this, de);
  }), st("pointerup", fe, function(...de) {
    var se;
    (se = g(k) ? K : void 0) == null || se.apply(this, de);
  }), st("contextmenu", fe, function(...de) {
    var se;
    (se = g(ae)) == null || se.apply(this, de);
  }), D(e, fe);
  var Ee = pe({
    get panOnDrag() {
      return v();
    },
    set panOnDrag(de) {
      v(de), y();
    },
    get selectionOnDrag() {
      return b();
    },
    set selectionOnDrag(de) {
      b(de), y();
    }
  });
  return r(), Ee;
}
ce(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Yp = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Fp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Kc(e, t) {
  ve(t, !1), et(e, Fp);
  const [n, r] = at(), o = () => ee(i, "$viewport", n), { viewport: i } = Ge();
  Be();
  var s = Yp(), a = F(s);
  kt(a, t, "default", {}), q(s), $e(() => ht(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, s), pe(), r();
}
ce(Kc, {}, ["default"], [], !0);
function Tr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = sp({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = Z(n.snapGrid), c = Z(n.viewport);
      return {
        nodes: Z(n.nodes),
        nodeLookup: Z(n.nodeLookup),
        edges: Z(n.edges),
        nodeExtent: Z(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: Z(n.nodeOrigin),
        multiSelectionActive: Z(n.multiselectionKeyPressed),
        domNode: Z(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: Z(n.autoPanOnNodeDrag),
        nodesDraggable: Z(n.nodesDraggable),
        selectNodesOnDrag: Z(n.selectNodesOnDrag),
        nodeDragThreshold: Z(n.nodeDragThreshold),
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
function Wp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Xp = /* @__PURE__ */ ne("<div><!></div>");
function jc(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(fe, "$nodeTypes", n), i = () => ee(Ee, "$elementsSelectable", n), s = () => ee(de, "$nodesDraggable", n), a = () => ee(_e, "$connectableStore", n), l = /* @__PURE__ */ le(void 0, !0), u = /* @__PURE__ */ le(void 0, !0), c = /* @__PURE__ */ le(void 0, !0), f = /* @__PURE__ */ le(void 0, !0);
  let d = w(t, "node", 13), h = w(t, "id", 13), p = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), _ = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), v = w(t, "connectable", 13, !0), b = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), C = w(t, "dragging", 13, !1), M = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), V = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), O = w(t, "positionX", 13), B = w(t, "positionY", 13), R = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), P = w(t, "measuredWidth", 13, void 0), S = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), H = w(t, "initialHeight", 13, void 0), T = w(t, "width", 13, void 0), L = w(t, "height", 13, void 0), Y = w(t, "dragHandle", 13, void 0), W = w(t, "initialized", 13, !1), G = w(t, "parentId", 13, void 0), U = w(t, "nodeClickDistance", 13, void 0), K = w(t, "class", 13, "");
  const ue = Ge(), {
    nodeTypes: fe,
    nodeDragThreshold: ge,
    selectNodesOnDrag: ae,
    handleNodeSelection: Ne,
    updateNodeInternals: we,
    elementsSelectable: Ee,
    nodesDraggable: de
  } = ue;
  let se = /* @__PURE__ */ le(void 0, !0), he = /* @__PURE__ */ le(null, !0);
  const j = Wi(), _e = Se(v());
  let Te = /* @__PURE__ */ le(void 0, !0), Oe = /* @__PURE__ */ le(void 0, !0), qe = /* @__PURE__ */ le(void 0, !0);
  Lr("svelteflow__node_id", h()), Lr("svelteflow__node_connectable", _e), ga(() => {
    var te;
    g(he) && ((te = M()) == null || te.unobserve(g(he)));
  });
  function re(te) {
    k() && (!Z(ae) || !_() || Z(ge) > 0) && Ne(h()), j("nodeclick", { node: d().internals.userNode, event: te });
  }
  ye(() => Q(V()), () => {
    J(l, V() || "default");
  }), ye(() => (o(), g(l)), () => {
    J(u, !!o()[g(l)]);
  }), ye(
    () => (o(), g(l), Pi),
    () => {
      J(c, o()[g(l)] || Pi);
    }
  ), ye(
    () => (g(u), Q(V())),
    () => {
      g(u) || console.warn("003", Br.error003(V()));
    }
  ), ye(
    () => (Q(T()), Q(L()), Q(N()), Q(H()), Q(P()), Q(S())),
    () => {
      J(f, Wp({
        width: T(),
        height: L(),
        initialWidth: N(),
        initialHeight: H(),
        measuredWidth: P(),
        measuredHeight: S()
      }));
    }
  ), ye(() => Q(v()), () => {
    _e.set(!!v());
  }), ye(
    () => (g(Te), g(l), g(Oe), Q(R()), g(qe), Q(I()), Q(h()), g(se)),
    () => {
      (g(Te) && g(l) !== g(Te) || g(Oe) && R() !== g(Oe) || g(qe) && I() !== g(qe)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(se),
            force: !0
          }
        ]
      ]))), J(Te, g(l)), J(Oe, R()), J(qe, I());
    }
  ), ye(
    () => (Q(M()), g(se), g(he), Q(W())),
    () => {
      M() && (g(se) !== g(he) || !W()) && (g(he) && M().unobserve(g(he)), g(se) && M().observe(g(se)), J(he, g(se)));
    }
  ), xt(), Be(!0);
  var ie = nt(), me = be(ie);
  {
    var Ye = (te) => {
      var He = Xp();
      let oe, tt;
      var Et = F(He);
      const Ot = /* @__PURE__ */ Ce(() => x() ?? !1), De = /* @__PURE__ */ Ce(() => k() ?? i() ?? !0), rt = /* @__PURE__ */ Ce(() => b() ?? !0), Re = /* @__PURE__ */ Ce(() => _() ?? s() ?? !0);
      Hu(Et, () => g(c), (Ie, ot) => {
        ot(Ie, {
          get data() {
            return p();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(Ot);
          },
          get selectable() {
            return g(De);
          },
          get deletable() {
            return g(rt);
          },
          get sourcePosition() {
            return R();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return g(Re);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return G();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return O();
          },
          get positionAbsoluteY() {
            return B();
          },
          get width() {
            return T();
          },
          get height() {
            return L();
          }
        });
      }), q(He), Ct(He, (Ie, ot) => Tr == null ? void 0 : Tr(Ie, ot), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: Ne,
        onDrag: (Ie, ot, _t, vt) => {
          j("nodedrag", { event: Ie, targetNode: _t, nodes: vt });
        },
        onDragStart: (Ie, ot, _t, vt) => {
          j("nodedragstart", { event: Ie, targetNode: _t, nodes: vt });
        },
        onDragStop: (Ie, ot, _t, vt) => {
          j("nodedragstop", { event: Ie, targetNode: _t, nodes: vt });
        },
        store: ue
      })), kn(He, (Ie) => J(se, Ie), () => g(se)), Xt(() => st("click", He, re)), Xt(() => st("mouseenter", He, (Ie) => j("nodemouseenter", { node: d(), event: Ie }))), Xt(() => st("mouseleave", He, (Ie) => j("nodemouseleave", { node: d(), event: Ie }))), Xt(() => st("mousemove", He, (Ie) => j("nodemousemove", { node: d(), event: Ie }))), Xt(() => st("contextmenu", He, (Ie) => j("nodecontextmenu", { node: d(), event: Ie }))), $e(
        (Ie, ot) => {
          ke(He, "data-id", h()), oe = $t(He, 1, Ie, null, oe, ot), tt = ht(He, `${$() ?? "" ?? ""};${g(f).width ?? ""}${g(f).height ?? ""}`, tt, {
            "z-index": E(),
            transform: `translate(${O() ?? ""}px, ${B() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => hn(At([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            K()
          ])),
          () => ({
            dragging: C(),
            selected: x(),
            draggable: _(),
            connectable: v(),
            selectable: k(),
            nopan: _(),
            parent: A()
          })
        ],
        Ce
      ), D(te, He);
    };
    xe(me, (te) => {
      m() || te(Ye);
    });
  }
  D(e, ie);
  var Ze = pe({
    get node() {
      return d();
    },
    set node(te) {
      d(te), y();
    },
    get id() {
      return h();
    },
    set id(te) {
      h(te), y();
    },
    get data() {
      return p();
    },
    set data(te) {
      p(te), y();
    },
    get selected() {
      return x();
    },
    set selected(te) {
      x(te), y();
    },
    get draggable() {
      return _();
    },
    set draggable(te) {
      _(te), y();
    },
    get selectable() {
      return k();
    },
    set selectable(te) {
      k(te), y();
    },
    get connectable() {
      return v();
    },
    set connectable(te) {
      v(te), y();
    },
    get deletable() {
      return b();
    },
    set deletable(te) {
      b(te), y();
    },
    get hidden() {
      return m();
    },
    set hidden(te) {
      m(te), y();
    },
    get dragging() {
      return C();
    },
    set dragging(te) {
      C(te), y();
    },
    get resizeObserver() {
      return M();
    },
    set resizeObserver(te) {
      M(te), y();
    },
    get style() {
      return $();
    },
    set style(te) {
      $(te), y();
    },
    get type() {
      return V();
    },
    set type(te) {
      V(te), y();
    },
    get isParent() {
      return A();
    },
    set isParent(te) {
      A(te), y();
    },
    get positionX() {
      return O();
    },
    set positionX(te) {
      O(te), y();
    },
    get positionY() {
      return B();
    },
    set positionY(te) {
      B(te), y();
    },
    get sourcePosition() {
      return R();
    },
    set sourcePosition(te) {
      R(te), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(te) {
      I(te), y();
    },
    get zIndex() {
      return E();
    },
    set zIndex(te) {
      E(te), y();
    },
    get measuredWidth() {
      return P();
    },
    set measuredWidth(te) {
      P(te), y();
    },
    get measuredHeight() {
      return S();
    },
    set measuredHeight(te) {
      S(te), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(te) {
      N(te), y();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(te) {
      H(te), y();
    },
    get width() {
      return T();
    },
    set width(te) {
      T(te), y();
    },
    get height() {
      return L();
    },
    set height(te) {
      L(te), y();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(te) {
      Y(te), y();
    },
    get initialized() {
      return W();
    },
    set initialized(te) {
      W(te), y();
    },
    get parentId() {
      return G();
    },
    set parentId(te) {
      G(te), y();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(te) {
      U(te), y();
    },
    get class() {
      return K();
    },
    set class(te) {
      K(te), y();
    }
  });
  return r(), Ze;
}
ce(
  jc,
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
var Zp = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Kp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Gc(e, t) {
  ve(t, !1), et(e, Kp);
  const [n, r] = at(), o = () => ee(c, "$visibleNodes", n), i = () => ee(f, "$nodesDraggable", n), s = () => ee(h, "$elementsSelectable", n), a = () => ee(d, "$nodesConnectable", n), l = () => ee(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: x
  } = Ge(), _ = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const m = /* @__PURE__ */ new Map();
    b.forEach((C) => {
      const M = C.target.getAttribute("data-id");
      m.set(M, { id: M, nodeElement: C.target, force: !0 });
    }), p(m);
  });
  ga(() => {
    _ == null || _.disconnect();
  }), Be();
  var k = Zp();
  Vt(k, 5, o, (b) => b.id, (b, m) => {
    const C = /* @__PURE__ */ Ce(() => !!g(m).selected), M = /* @__PURE__ */ Ce(() => !!g(m).hidden), $ = /* @__PURE__ */ Ce(() => !!(g(m).draggable || i() && typeof g(m).draggable > "u")), V = /* @__PURE__ */ Ce(() => !!(g(m).selectable || s() && typeof g(m).selectable > "u")), A = /* @__PURE__ */ Ce(() => !!(g(m).connectable || a() && typeof g(m).connectable > "u")), O = /* @__PURE__ */ Ce(() => g(m).deletable ?? !0), B = /* @__PURE__ */ Ce(() => l().has(g(m).id)), R = /* @__PURE__ */ Ce(() => g(m).type ?? "default"), I = /* @__PURE__ */ Ce(() => g(m).internals.z ?? 0), E = /* @__PURE__ */ Ce(() => wc(g(m)));
    jc(b, {
      get node() {
        return g(m);
      },
      get id() {
        return g(m).id;
      },
      get data() {
        return g(m).data;
      },
      get selected() {
        return g(C);
      },
      get hidden() {
        return g(M);
      },
      get draggable() {
        return g($);
      },
      get selectable() {
        return g(V);
      },
      get connectable() {
        return g(A);
      },
      get deletable() {
        return g(O);
      },
      get positionX() {
        return g(m).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(m).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(B);
      },
      get style() {
        return g(m).style;
      },
      get class() {
        return g(m).class;
      },
      get type() {
        return g(R);
      },
      get sourcePosition() {
        return g(m).sourcePosition;
      },
      get targetPosition() {
        return g(m).targetPosition;
      },
      get dragging() {
        return g(m).dragging;
      },
      get zIndex() {
        return g(I);
      },
      get dragHandle() {
        return g(m).dragHandle;
      },
      get initialized() {
        return g(E);
      },
      get width() {
        return g(m).width;
      },
      get height() {
        return g(m).height;
      },
      get initialWidth() {
        return g(m).initialWidth;
      },
      get initialHeight() {
        return g(m).initialHeight;
      },
      get measuredWidth() {
        return g(m).measured.width;
      },
      get measuredHeight() {
        return g(m).measured.height;
      },
      get parentId() {
        return g(m).parentId;
      },
      resizeObserver: _,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(P) {
          Xe.call(this, t, P);
        },
        nodemouseenter(P) {
          Xe.call(this, t, P);
        },
        nodemousemove(P) {
          Xe.call(this, t, P);
        },
        nodemouseleave(P) {
          Xe.call(this, t, P);
        },
        nodedrag(P) {
          Xe.call(this, t, P);
        },
        nodedragstart(P) {
          Xe.call(this, t, P);
        },
        nodedragstop(P) {
          Xe.call(this, t, P);
        },
        nodecontextmenu(P) {
          Xe.call(this, t, P);
        }
      }
    });
  }), q(k), D(e, k);
  var v = pe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), y();
    }
  });
  return r(), v;
}
ce(Gc, { nodeClickDistance: {} }, [], [], !0);
var jp = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function Uc(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(K, "$edgeTypes", n), i = () => ee(ue, "$flowId", n), s = () => ee(fe, "$elementsSelectable", n), a = () => ee(U, "$edgeLookup", n), l = /* @__PURE__ */ le(void 0, !0), u = /* @__PURE__ */ le(void 0, !0), c = /* @__PURE__ */ le(void 0, !0), f = /* @__PURE__ */ le(void 0, !0), d = /* @__PURE__ */ le(void 0, !0);
  let h = w(t, "id", 13), p = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), _ = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), v = w(t, "style", 13, void 0), b = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), C = w(t, "selected", 13, !1), M = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), V = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), O = w(t, "labelStyle", 13, void 0), B = w(t, "markerStart", 13, void 0), R = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), P = w(t, "sourceX", 13), S = w(t, "sourceY", 13), N = w(t, "targetX", 13), H = w(t, "targetY", 13), T = w(t, "sourcePosition", 13), L = w(t, "targetPosition", 13), Y = w(t, "ariaLabel", 13, void 0), W = w(t, "interactionWidth", 13, void 0), G = w(t, "class", 13, "");
  Lr("svelteflow__edge_id", h());
  const {
    edgeLookup: U,
    edgeTypes: K,
    flowId: ue,
    elementsSelectable: fe
  } = Ge(), ge = Wi(), ae = Ic();
  function Ne(j) {
    const _e = a().get(h());
    _e && (ae(h()), ge("edgeclick", { event: j, edge: _e }));
  }
  function we(j, _e) {
    const Te = a().get(h());
    Te && ge(_e, { event: j, edge: Te });
  }
  ye(() => Q(p()), () => {
    J(l, p() || "default");
  }), ye(
    () => (o(), g(l), Ni),
    () => {
      J(u, o()[g(l)] || Ni);
    }
  ), ye(
    () => (Q(B()), i()),
    () => {
      J(c, B() ? `url('#${Ws(B(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(R()), i()),
    () => {
      J(f, R() ? `url('#${Ws(R(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(M()), s()),
    () => {
      J(d, M() ?? s());
    }
  ), xt(), Be(!0);
  var Ee = nt(), de = be(Ee);
  {
    var se = (j) => {
      var _e = jp();
      let Te;
      var Oe = F(_e);
      let qe;
      var re = F(Oe);
      const ie = /* @__PURE__ */ Ce(() => $() ?? !0);
      Hu(re, () => g(u), (me, Ye) => {
        Ye(me, {
          get id() {
            return h();
          },
          get source() {
            return x();
          },
          get target() {
            return _();
          },
          get sourceX() {
            return P();
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
            return T();
          },
          get targetPosition() {
            return L();
          },
          get animated() {
            return m();
          },
          get selected() {
            return C();
          },
          get label() {
            return A();
          },
          get labelStyle() {
            return O();
          },
          get data() {
            return k();
          },
          get style() {
            return v();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g(ie);
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
      }), q(Oe), q(_e), $e(
        (me, Ye) => {
          Te = ht(_e, "", Te, { "z-index": b() }), qe = $t(Oe, 0, me, null, qe, Ye), ke(Oe, "data-id", h()), ke(Oe, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${_()}`);
        },
        [
          () => hn(At(["svelte-flow__edge", G()])),
          () => ({
            animated: m(),
            selected: C(),
            selectable: g(d)
          })
        ],
        Ce
      ), st("click", Oe, Ne), st("contextmenu", Oe, (me) => {
        we(me, "edgecontextmenu");
      }), st("mouseenter", Oe, (me) => {
        we(me, "edgemouseenter");
      }), st("mouseleave", Oe, (me) => {
        we(me, "edgemouseleave");
      }), D(j, _e);
    };
    xe(de, (j) => {
      V() || j(se);
    });
  }
  D(e, Ee);
  var he = pe({
    get id() {
      return h();
    },
    set id(j) {
      h(j), y();
    },
    get type() {
      return p();
    },
    set type(j) {
      p(j), y();
    },
    get source() {
      return x();
    },
    set source(j) {
      x(j), y();
    },
    get target() {
      return _();
    },
    set target(j) {
      _(j), y();
    },
    get data() {
      return k();
    },
    set data(j) {
      k(j), y();
    },
    get style() {
      return v();
    },
    set style(j) {
      v(j), y();
    },
    get zIndex() {
      return b();
    },
    set zIndex(j) {
      b(j), y();
    },
    get animated() {
      return m();
    },
    set animated(j) {
      m(j), y();
    },
    get selected() {
      return C();
    },
    set selected(j) {
      C(j), y();
    },
    get selectable() {
      return M();
    },
    set selectable(j) {
      M(j), y();
    },
    get deletable() {
      return $();
    },
    set deletable(j) {
      $(j), y();
    },
    get hidden() {
      return V();
    },
    set hidden(j) {
      V(j), y();
    },
    get label() {
      return A();
    },
    set label(j) {
      A(j), y();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(j) {
      O(j), y();
    },
    get markerStart() {
      return B();
    },
    set markerStart(j) {
      B(j), y();
    },
    get markerEnd() {
      return R();
    },
    set markerEnd(j) {
      R(j), y();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(j) {
      I(j), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(j) {
      E(j), y();
    },
    get sourceX() {
      return P();
    },
    set sourceX(j) {
      P(j), y();
    },
    get sourceY() {
      return S();
    },
    set sourceY(j) {
      S(j), y();
    },
    get targetX() {
      return N();
    },
    set targetX(j) {
      N(j), y();
    },
    get targetY() {
      return H();
    },
    set targetY(j) {
      H(j), y();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(j) {
      T(j), y();
    },
    get targetPosition() {
      return L();
    },
    set targetPosition(j) {
      L(j), y();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(j) {
      Y(j), y();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(j) {
      W(j), y();
    },
    get class() {
      return G();
    },
    set class(j) {
      G(j), y();
    }
  });
  return r(), he;
}
ce(
  Uc,
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
function Jc(e, t) {
  ve(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return sn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Be(), pe({
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
ce(Jc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Gp = /* @__PURE__ */ Pe("<defs></defs>");
function Qc(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(i, "$markers", n), { markers: i } = Ge();
  Be();
  var s = Gp();
  Vt(s, 5, o, (a) => a.id, (a, l) => {
    ed(a, ct(() => g(l)));
  }), q(s), D(e, s), pe(), r();
}
ce(Qc, {}, [], [], !0);
var Up = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Jp = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Qp = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ed(e, t) {
  ve(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Be();
  var c = Qp(), f = F(c);
  {
    var d = (p) => {
      var x = Up();
      $e(() => {
        ke(x, "stroke", l()), ke(x, "stroke-width", u());
      }), D(p, x);
    }, h = (p, x) => {
      {
        var _ = (k) => {
          var v = Jp();
          $e(() => {
            ke(v, "stroke", l()), ke(v, "stroke-width", u()), ke(v, "fill", l());
          }), D(k, v);
        };
        xe(
          p,
          (k) => {
            r() === $o.ArrowClosed && k(_);
          },
          x
        );
      }
    };
    xe(f, (p) => {
      r() === $o.Arrow ? p(d) : p(h, !1);
    });
  }
  return q(c), $e(() => {
    ke(c, "id", n()), ke(c, "markerWidth", `${o()}`), ke(c, "markerHeight", `${i()}`), ke(c, "markerUnits", s()), ke(c, "orient", a());
  }), D(e, c), pe({
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), y();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), y();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(p) {
      s(p), y();
    },
    get orient() {
      return a();
    },
    set orient(p) {
      a(p), y();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), y();
    }
  });
}
ce(
  ed,
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
var e2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function td(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(a, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  sn(() => {
    s() && u(s());
  }), Be();
  var f = e2(), d = F(f), h = F(d);
  Qc(h, {}), q(d);
  var p = z(d, 2);
  Vt(p, 1, o, (v) => v.id, (v, b) => {
    const m = /* @__PURE__ */ Ce(() => g(b).selectable ?? i()), C = /* @__PURE__ */ Ce(() => g(b).type || "default");
    Uc(v, {
      get id() {
        return g(b).id;
      },
      get source() {
        return g(b).source;
      },
      get target() {
        return g(b).target;
      },
      get data() {
        return g(b).data;
      },
      get style() {
        return g(b).style;
      },
      get animated() {
        return g(b).animated;
      },
      get selected() {
        return g(b).selected;
      },
      get selectable() {
        return g(m);
      },
      get deletable() {
        return g(b).deletable;
      },
      get hidden() {
        return g(b).hidden;
      },
      get label() {
        return g(b).label;
      },
      get labelStyle() {
        return g(b).labelStyle;
      },
      get markerStart() {
        return g(b).markerStart;
      },
      get markerEnd() {
        return g(b).markerEnd;
      },
      get sourceHandle() {
        return g(b).sourceHandle;
      },
      get targetHandle() {
        return g(b).targetHandle;
      },
      get sourceX() {
        return g(b).sourceX;
      },
      get sourceY() {
        return g(b).sourceY;
      },
      get targetX() {
        return g(b).targetX;
      },
      get targetY() {
        return g(b).targetY;
      },
      get sourcePosition() {
        return g(b).sourcePosition;
      },
      get targetPosition() {
        return g(b).targetPosition;
      },
      get ariaLabel() {
        return g(b).ariaLabel;
      },
      get interactionWidth() {
        return g(b).interactionWidth;
      },
      get class() {
        return g(b).class;
      },
      get type() {
        return g(C);
      },
      get zIndex() {
        return g(b).zIndex;
      },
      $$events: {
        edgeclick(M) {
          Xe.call(this, t, M);
        },
        edgecontextmenu(M) {
          Xe.call(this, t, M);
        },
        edgemouseenter(M) {
          Xe.call(this, t, M);
        },
        edgemouseleave(M) {
          Xe.call(this, t, M);
        }
      }
    });
  });
  var x = z(p, 2);
  {
    var _ = (v) => {
      Jc(v, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    xe(x, (v) => {
      o().length > 0 && v(_);
    });
  }
  q(f), D(e, f);
  var k = pe({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), y();
    }
  });
  return r(), k;
}
ce(td, { defaultEdgeOptions: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const n2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Sa(e, t) {
  ve(t, !1), et(e, n2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = nt(), l = be(a);
  {
    var u = (c) => {
      var f = t2();
      let d;
      $e(() => d = ht(f, "", d, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, f);
    };
    xe(l, (c) => {
      s() && c(u);
    });
  }
  return D(e, a), pe({
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
ce(
  Sa,
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
function nd(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(s, "$selectionRect", n), i = () => ee(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ge();
  Be();
  const l = /* @__PURE__ */ Ce(() => !!(o() && i() === "user")), u = /* @__PURE__ */ Ce(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ Ce(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), f = /* @__PURE__ */ Ce(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), d = /* @__PURE__ */ Ce(() => {
    var h;
    return (h = o()) == null ? void 0 : h.y;
  });
  Sa(e, {
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
  }), pe(), r();
}
ce(nd, {}, [], [], !0);
var r2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const o2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function rd(e, t) {
  ve(t, !1), et(e, o2);
  const [n, r] = at(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), s = () => ee(u, "$nodes", n), a = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Wi();
  let d = /* @__PURE__ */ le(null);
  function h(v) {
    const b = s().filter((m) => m.selected);
    f("selectioncontextmenu", { nodes: b, event: v });
  }
  function p(v) {
    const b = s().filter((m) => m.selected);
    f("selectionclick", { nodes: b, event: v });
  }
  ye(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (J(d, Lo(i(), { filter: (v) => !!v.selected })), s());
    }
  ), xt(), Be();
  var x = nt(), _ = be(x);
  {
    var k = (v) => {
      var b = r2(), m = F(b);
      Sa(m, { width: "100%", height: "100%", x: 0, y: 0 }), q(b), Ct(b, (C, M) => Tr == null ? void 0 : Tr(C, M), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, M, $, V) => {
          f("nodedrag", { event: C, targetNode: null, nodes: V });
        },
        onDragStart: (C, M, $, V) => {
          f("nodedragstart", { event: C, targetNode: null, nodes: V });
        },
        onDragStop: (C, M, $, V) => {
          f("nodedragstop", { event: C, targetNode: null, nodes: V });
        }
      })), Xt(() => st("contextmenu", b, h)), Xt(() => st("click", b, p)), Xt(() => st("keyup", b, () => {
      })), $e(() => ht(b, `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), D(v, b);
    };
    xe(_, (v) => {
      o() === "nodes" && g(d) && Hn(g(d).x) && Hn(g(d).y) && v(k);
    });
  }
  D(e, x), pe(), r();
}
ce(rd, {}, [], [], !0);
function Je(e, t) {
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
      }, { modifier: f, key: d, callback: h, preventDefault: p, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (v) => typeof v == "string" ? [v] : v
        ).some(
          (v) => v.every((b) => l[b])
        ))
          continue;
        if (s.key === d) {
          p && s.preventDefault();
          const _ = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), h == null || h(_);
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
function od(e, t) {
  ve(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ei() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => Ei() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ge();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function p(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function x(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function _(v, b) {
    return (Array.isArray(v) ? v : [v]).map((C) => {
      const M = x(C);
      return {
        key: M,
        modifier: p(C),
        enabled: M !== null,
        callback: b
      };
    });
  }
  function k() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Be(), st("blur", zt, k), st("contextmenu", zt, k), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(n(), () => a.set(!0)),
    type: "keydown"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(n(), () => a.set(!1)),
    type: "keyup"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(r(), () => l.set(!0)),
    type: "keydown"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(r(), () => l.set(!1)),
    type: "keyup"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !I0(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(o(), () => u.set(!1)),
    type: "keyup"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(i(), () => c.set(!0)),
    type: "keydown"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(i(), () => c.set(!1)),
    type: "keyup"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(s(), () => f.set(!0)),
    type: "keydown"
  })), Ct(zt, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(s(), () => f.set(!1)),
    type: "keyup"
  })), pe({
    get selectionKey() {
      return n();
    },
    set selectionKey(v) {
      n(v), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(v) {
      r(v), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(v) {
      o(v), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(v) {
      i(v), y();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(v) {
      s(v), y();
    }
  });
}
ce(
  od,
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
var i2 = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__connection-path"></path>'), s2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function id(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(h, "$connection", n), i = () => ee(p, "$connectionLineType", n), s = () => ee(f, "$width", n), a = () => ee(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: h,
    connectionLineType: p
  } = Ge();
  let x = /* @__PURE__ */ le(null);
  ye(
    () => (o(), Q(c()), i(), g(x), Fs),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: C, fromPosition: M, toPosition: $ } = o(), V = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: M,
          targetX: C.x,
          targetY: C.y,
          targetPosition: $
        };
        switch (i()) {
          case Pr.Bezier:
            ((A) => J(x, A[0]))(bc(V));
            break;
          case Pr.Step:
            ((A) => J(x, A[0]))(Si({ ...V, borderRadius: 0 }));
            break;
          case Pr.SmoothStep:
            ((A) => J(x, A[0]))(Si(V));
            break;
          default:
            ((A) => J(x, A[0]))(Fs(V));
        }
      }
    }
  ), xt(), Be();
  var _ = nt(), k = be(_);
  {
    var v = (m) => {
      var C = s2(), M = F(C), $ = F(M);
      kt($, t, "connectionLine", {});
      var V = z($);
      {
        var A = (O) => {
          var B = i2();
          $e(() => {
            ke(B, "d", g(x)), ht(B, u());
          }), D(O, B);
        };
        xe(V, (O) => {
          c() || O(A);
        });
      }
      q(M), q(C), $e(
        (O) => {
          ke(C, "width", s()), ke(C, "height", a()), ht(C, l()), $t(M, 0, O);
        },
        [
          () => hn(At([
            "svelte-flow__connection",
            k0(o().isValid)
          ]))
        ],
        Ce
      ), D(m, C);
    };
    xe(k, (m) => {
      o().inProgress && m(v);
    });
  }
  D(e, _);
  var b = pe({
    get containerStyle() {
      return l();
    },
    set containerStyle(m) {
      l(m), y();
    },
    get style() {
      return u();
    },
    set style(m) {
      u(m), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(m) {
      c(m), y();
    }
  });
  return r(), b;
}
ce(
  id,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var a2 = /* @__PURE__ */ ne("<div><!></div>");
function Ro(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ut(n, ["position", "style", "class"]);
  ve(t, !1);
  const [o, i] = at(), s = () => ee(f, "$selectionRectMode", o), a = /* @__PURE__ */ le();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ge();
  ye(() => Q(l()), () => {
    J(a, `${l()}`.split("-"));
  }), xt(), Be();
  var d = a2();
  let h;
  var p = F(d);
  kt(p, t, "default", {}), q(d), $e(
    (_) => h = Gt(d, h, {
      class: _,
      style: u(),
      ...r,
      [ir]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => At([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    Ce
  ), D(e, d);
  var x = pe({
    get position() {
      return l();
    },
    set position(_) {
      l(_), y();
    },
    get style() {
      return u();
    },
    set style(_) {
      u(_), y();
    },
    get class() {
      return c();
    },
    set class(_) {
      c(_), y();
    }
  });
  return i(), x;
}
ce(Ro, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var l2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function sd(e, t) {
  ve(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Be();
  var o = nt(), i = be(o);
  {
    var s = (a) => {
      Ro(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = l2();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return D(e, o), pe({
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
ce(sd, { proOptions: {}, position: {} }, [], [], !0);
function Bl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const u2 = (e) => Object.keys(e);
function ql(e, t) {
  u2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function c2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function d2(e = "light") {
  return Jt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = c2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var f2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), g2 = /* @__PURE__ */ ne("<!> <!>", 1), h2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const v2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function ad(e, t) {
  const n = N1(t), r = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = ut(r, [
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
  ve(t, !1), et(e, v2);
  const [i, s] = at(), a = () => ee(b(), "$viewport", i), l = () => ee(is, "$initialized", i), u = () => ee(g(c), "$colorModeClass", i), c = /* @__PURE__ */ le();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), h = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), _ = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), v = w(t, "initialViewport", 12, void 0), b = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), C = w(t, "edgeTypes", 12, void 0), M = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), V = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), O = w(t, "zoomActivationKey", 12, void 0), B = w(t, "nodesDraggable", 12, void 0), R = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), P = w(t, "snapGrid", 12, void 0), S = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), H = w(t, "connectionLineType", 12, void 0), T = w(t, "connectionMode", 28, () => gr.Strict), L = w(t, "connectionLineStyle", 12, ""), Y = w(t, "connectionLineContainerStyle", 12, ""), W = w(t, "onMoveStart", 12, void 0), G = w(t, "onMove", 12, void 0), U = w(t, "onMoveEnd", 12, void 0), K = w(t, "isValidConnection", 12, void 0), ue = w(t, "translateExtent", 12, void 0), fe = w(t, "nodeExtent", 12, void 0), ge = w(t, "onlyRenderVisibleElements", 12, void 0), ae = w(t, "panOnScrollMode", 28, () => Kn.Free), Ne = w(t, "preventScrolling", 12, !0), we = w(t, "zoomOnScroll", 12, !0), Ee = w(t, "zoomOnDoubleClick", 12, !0), de = w(t, "zoomOnPinch", 12, !0), se = w(t, "panOnScroll", 12, !1), he = w(t, "panOnDrag", 12, !0), j = w(t, "selectionOnDrag", 12, void 0), _e = w(t, "autoPanOnConnect", 12, !0), Te = w(t, "autoPanOnNodeDrag", 12, !0), Oe = w(t, "onerror", 12, void 0), qe = w(t, "ondelete", 12, void 0), re = w(t, "onedgecreate", 12, void 0), ie = w(t, "attributionPosition", 12, void 0), me = w(t, "proOptions", 12, void 0), Ye = w(t, "defaultEdgeOptions", 12, void 0), Ze = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), He = w(t, "colorMode", 12, "light"), oe = w(t, "onconnect", 12, void 0), tt = w(t, "onconnectstart", 12, void 0), Et = w(t, "onconnectend", 12, void 0), Ot = w(t, "onbeforedelete", 12, void 0), De = w(t, "oninit", 12, void 0), rt = w(t, "nodeOrigin", 12, void 0), Re = w(t, "paneClickDistance", 12, 0), Ie = w(t, "nodeClickDistance", 12, 0), ot = w(t, "defaultMarkerColor", 12, "#b1b1b7"), _t = w(t, "style", 12, void 0), vt = w(t, "class", 12, void 0), eo = /* @__PURE__ */ le(), St = /* @__PURE__ */ le(), Lt = /* @__PURE__ */ le();
  const _r = a() || v(), lt = u1(es) ? Ge() : Ip({
    nodes: Z(d()),
    edges: Z(h()),
    width: Ze(),
    height: te(),
    fitView: p(),
    nodeOrigin: rt(),
    nodeExtent: fe()
  });
  sn(() => (lt.width.set(g(St)), lt.height.set(g(Lt)), lt.domNode.set(g(eo)), lt.syncNodeStores(d()), lt.syncEdgeStores(h()), lt.syncViewport(b()), p() !== void 0 && lt.fitViewQueued.set(p()), x() && lt.fitViewOptions.set(x()), Bl(lt, {
    nodeTypes: m(),
    edgeTypes: C(),
    minZoom: _(),
    maxZoom: k(),
    translateExtent: ue(),
    paneClickDistance: Re()
  }), () => {
    lt.reset();
  }));
  const { initialized: is } = lt;
  let to = /* @__PURE__ */ le(!1);
  ye(
    () => (g(St), g(Lt)),
    () => {
      g(St) !== void 0 && g(Lt) !== void 0 && (lt.width.set(g(St)), lt.height.set(g(Lt)));
    }
  ), ye(
    () => (g(to), l(), Q(De())),
    () => {
      var X;
      !g(to) && l() && ((X = De()) == null || X(), J(to, !0));
    }
  ), ye(
    () => (Q(f()), Q(H()), Q(N()), Q($()), Q(P()), Q(ot()), Q(B()), Q(R()), Q(E()), Q(ge()), Q(K()), Q(_e()), Q(Te()), Q(Oe()), Q(qe()), Q(re()), Q(T()), Q(I()), Q(oe()), Q(tt()), Q(Et()), Q(Ot()), Q(rt()), ql),
    () => {
      const X = {
        flowId: f(),
        connectionLineType: H(),
        connectionRadius: N(),
        selectionMode: $(),
        snapGrid: P(),
        defaultMarkerColor: ot(),
        nodesDraggable: B(),
        nodesConnectable: R(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: K(),
        autoPanOnConnect: _e(),
        autoPanOnNodeDrag: Te(),
        onerror: Oe(),
        ondelete: qe(),
        onedgecreate: re(),
        connectionMode: T(),
        nodeDragThreshold: I(),
        onconnect: oe(),
        onconnectstart: tt(),
        onconnectend: Et(),
        onbeforedelete: Ot(),
        nodeOrigin: rt()
      };
      ql(lt, X);
    }
  ), ye(
    () => (Q(m()), Q(C()), Q(_()), Q(k()), Q(ue()), Q(Re())),
    () => {
      Bl(lt, {
        nodeTypes: m(),
        edgeTypes: C(),
        minZoom: _(),
        maxZoom: k(),
        translateExtent: ue(),
        paneClickDistance: Re()
      });
    }
  ), ye(
    () => Q(He()),
    () => {
      I1(J(c, d2(He())), "$colorModeClass", i);
    }
  ), xt(), Be();
  var Ft = h2();
  let Fo;
  var Wo = F(Ft);
  od(Wo, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return S();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return A();
    },
    get zoomActivationKey() {
      return O();
    }
  });
  var Xo = z(Wo, 2);
  const ss = /* @__PURE__ */ Ce(() => ae() === void 0 ? Kn.Free : ae()), nf = /* @__PURE__ */ Ce(() => Ne() === void 0 ? !0 : Ne()), rf = /* @__PURE__ */ Ce(() => we() === void 0 ? !0 : we()), of = /* @__PURE__ */ Ce(() => Ee() === void 0 ? !0 : Ee()), sf = /* @__PURE__ */ Ce(() => de() === void 0 ? !0 : de()), af = /* @__PURE__ */ Ce(() => se() === void 0 ? !1 : se()), lf = /* @__PURE__ */ Ce(() => he() === void 0 ? !0 : he()), uf = /* @__PURE__ */ Ce(() => Re() === void 0 ? 0 : Re());
  Xc(Xo, {
    initialViewport: _r,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return G();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(ss);
    },
    get preventScrolling() {
      return g(nf);
    },
    get zoomOnScroll() {
      return g(rf);
    },
    get zoomOnDoubleClick() {
      return g(of);
    },
    get zoomOnPinch() {
      return g(sf);
    },
    get panOnScroll() {
      return g(af);
    },
    get panOnDrag() {
      return g(lf);
    },
    get paneClickDistance() {
      return g(uf);
    },
    children: (X, Uw) => {
      const ff = /* @__PURE__ */ Ce(() => he() === void 0 ? !0 : he());
      Zc(X, {
        get panOnDrag() {
          return g(ff);
        },
        get selectionOnDrag() {
          return j();
        },
        $$events: {
          paneclick(no) {
            Xe.call(this, t, no);
          },
          panecontextmenu(no) {
            Xe.call(this, t, no);
          }
        },
        children: (no, Jw) => {
          var Va = g2(), Aa = be(Va);
          Kc(Aa, {
            children: (hf, Qw) => {
              var Oa = f2(), La = be(Oa);
              td(La, {
                get defaultEdgeOptions() {
                  return Ye();
                },
                $$events: {
                  edgeclick(We) {
                    Xe.call(this, t, We);
                  },
                  edgecontextmenu(We) {
                    Xe.call(this, t, We);
                  },
                  edgemouseenter(We) {
                    Xe.call(this, t, We);
                  },
                  edgemouseleave(We) {
                    Xe.call(this, t, We);
                  }
                }
              });
              var Ia = z(La, 2);
              id(Ia, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return L();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (We, e_) => {
                    var Ra = nt(), pf = be(Ra);
                    kt(pf, t, "connectionLine", {}), D(We, Ra);
                  }
                }
              });
              var za = z(Ia, 6);
              Gc(za, {
                get nodeClickDistance() {
                  return Ie();
                },
                $$events: {
                  nodeclick(We) {
                    Xe.call(this, t, We);
                  },
                  nodemouseenter(We) {
                    Xe.call(this, t, We);
                  },
                  nodemousemove(We) {
                    Xe.call(this, t, We);
                  },
                  nodemouseleave(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstart(We) {
                    Xe.call(this, t, We);
                  },
                  nodedrag(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstop(We) {
                    Xe.call(this, t, We);
                  },
                  nodecontextmenu(We) {
                    Xe.call(this, t, We);
                  }
                }
              });
              var vf = z(za, 2);
              rd(vf, {
                $$events: {
                  selectionclick(We) {
                    Xe.call(this, t, We);
                  },
                  selectioncontextmenu(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstart(We) {
                    Xe.call(this, t, We);
                  },
                  nodedrag(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstop(We) {
                    Xe.call(this, t, We);
                  }
                }
              }), D(hf, Oa);
            },
            $$slots: { default: !0 }
          });
          var gf = z(Aa, 2);
          nd(gf, {}), D(no, Va);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Da = z(Xo, 2);
  sd(Da, {
    get proOptions() {
      return me();
    },
    get position() {
      return ie();
    }
  });
  var cf = z(Da, 2);
  kt(cf, t, "default", {}), q(Ft), kn(Ft, (X) => J(eo, X), () => g(eo)), $e(
    (X) => Fo = Gt(
      Ft,
      Fo,
      {
        style: _t(),
        class: X,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => At([
        "svelte-flow",
        vt(),
        u()
      ])
    ],
    Ce
  ), nl(Ft, "clientWidth", (X) => J(St, X)), nl(Ft, "clientHeight", (X) => J(Lt, X)), st("dragover", Ft, function(X) {
    Xe.call(this, t, X);
  }), st("drop", Ft, function(X) {
    Xe.call(this, t, X);
  }), D(e, Ft);
  var df = pe({
    get id() {
      return f();
    },
    set id(X) {
      f(X), y();
    },
    get nodes() {
      return d();
    },
    set nodes(X) {
      d(X), y();
    },
    get edges() {
      return h();
    },
    set edges(X) {
      h(X), y();
    },
    get fitView() {
      return p();
    },
    set fitView(X) {
      p(X), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(X) {
      x(X), y();
    },
    get minZoom() {
      return _();
    },
    set minZoom(X) {
      _(X), y();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(X) {
      k(X), y();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(X) {
      v(X), y();
    },
    get viewport() {
      return b();
    },
    set viewport(X) {
      b(X), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(X) {
      m(X), y();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(X) {
      C(X), y();
    },
    get selectionKey() {
      return M();
    },
    set selectionKey(X) {
      M(X), y();
    },
    get selectionMode() {
      return $();
    },
    set selectionMode(X) {
      $(X), y();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(X) {
      V(X), y();
    },
    get multiSelectionKey() {
      return A();
    },
    set multiSelectionKey(X) {
      A(X), y();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(X) {
      O(X), y();
    },
    get nodesDraggable() {
      return B();
    },
    set nodesDraggable(X) {
      B(X), y();
    },
    get nodesConnectable() {
      return R();
    },
    set nodesConnectable(X) {
      R(X), y();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(X) {
      I(X), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(X) {
      E(X), y();
    },
    get snapGrid() {
      return P();
    },
    set snapGrid(X) {
      P(X), y();
    },
    get deleteKey() {
      return S();
    },
    set deleteKey(X) {
      S(X), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(X) {
      N(X), y();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(X) {
      H(X), y();
    },
    get connectionMode() {
      return T();
    },
    set connectionMode(X) {
      T(X), y();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(X) {
      L(X), y();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(X) {
      Y(X), y();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(X) {
      W(X), y();
    },
    get onMove() {
      return G();
    },
    set onMove(X) {
      G(X), y();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(X) {
      U(X), y();
    },
    get isValidConnection() {
      return K();
    },
    set isValidConnection(X) {
      K(X), y();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(X) {
      ue(X), y();
    },
    get nodeExtent() {
      return fe();
    },
    set nodeExtent(X) {
      fe(X), y();
    },
    get onlyRenderVisibleElements() {
      return ge();
    },
    set onlyRenderVisibleElements(X) {
      ge(X), y();
    },
    get panOnScrollMode() {
      return ae();
    },
    set panOnScrollMode(X) {
      ae(X), y();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(X) {
      Ne(X), y();
    },
    get zoomOnScroll() {
      return we();
    },
    set zoomOnScroll(X) {
      we(X), y();
    },
    get zoomOnDoubleClick() {
      return Ee();
    },
    set zoomOnDoubleClick(X) {
      Ee(X), y();
    },
    get zoomOnPinch() {
      return de();
    },
    set zoomOnPinch(X) {
      de(X), y();
    },
    get panOnScroll() {
      return se();
    },
    set panOnScroll(X) {
      se(X), y();
    },
    get panOnDrag() {
      return he();
    },
    set panOnDrag(X) {
      he(X), y();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(X) {
      j(X), y();
    },
    get autoPanOnConnect() {
      return _e();
    },
    set autoPanOnConnect(X) {
      _e(X), y();
    },
    get autoPanOnNodeDrag() {
      return Te();
    },
    set autoPanOnNodeDrag(X) {
      Te(X), y();
    },
    get onerror() {
      return Oe();
    },
    set onerror(X) {
      Oe(X), y();
    },
    get ondelete() {
      return qe();
    },
    set ondelete(X) {
      qe(X), y();
    },
    get onedgecreate() {
      return re();
    },
    set onedgecreate(X) {
      re(X), y();
    },
    get attributionPosition() {
      return ie();
    },
    set attributionPosition(X) {
      ie(X), y();
    },
    get proOptions() {
      return me();
    },
    set proOptions(X) {
      me(X), y();
    },
    get defaultEdgeOptions() {
      return Ye();
    },
    set defaultEdgeOptions(X) {
      Ye(X), y();
    },
    get width() {
      return Ze();
    },
    set width(X) {
      Ze(X), y();
    },
    get height() {
      return te();
    },
    set height(X) {
      te(X), y();
    },
    get colorMode() {
      return He();
    },
    set colorMode(X) {
      He(X), y();
    },
    get onconnect() {
      return oe();
    },
    set onconnect(X) {
      oe(X), y();
    },
    get onconnectstart() {
      return tt();
    },
    set onconnectstart(X) {
      tt(X), y();
    },
    get onconnectend() {
      return Et();
    },
    set onconnectend(X) {
      Et(X), y();
    },
    get onbeforedelete() {
      return Ot();
    },
    set onbeforedelete(X) {
      Ot(X), y();
    },
    get oninit() {
      return De();
    },
    set oninit(X) {
      De(X), y();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(X) {
      rt(X), y();
    },
    get paneClickDistance() {
      return Re();
    },
    set paneClickDistance(X) {
      Re(X), y();
    },
    get nodeClickDistance() {
      return Ie();
    },
    set nodeClickDistance(X) {
      Ie(X), y();
    },
    get defaultMarkerColor() {
      return ot();
    },
    set defaultMarkerColor(X) {
      ot(X), y();
    },
    get style() {
      return _t();
    },
    set style(X) {
      _t(X), y();
    },
    get class() {
      return vt();
    },
    set class(X) {
      vt(X), y();
    }
  });
  return s(), df;
}
ce(
  ad,
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
function ld(e, t) {
  ve(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Wc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Lr(es, { getStore: () => l }), ga(() => {
    l.reset();
  }), Be();
  var u = nt(), c = be(u);
  return kt(c, t, "default", {}), D(e, u), pe({
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
ce(
  ld,
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
var p2 = /* @__PURE__ */ ne("<button><!></button>");
function fo(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ut(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ve(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Be();
  var c = p2();
  let f;
  var d = F(c);
  return kt(d, t, "default", { class: "button-svg" }), q(c), $e(
    (h) => f = Gt(c, f, {
      type: "button",
      class: h,
      ...r,
      [ir]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": s(),
        "--xy-controls-button-color-props": a(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => At([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    Ce
  ), st("click", c, function(h) {
    Xe.call(this, t, h);
  }), D(e, c), pe({
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
ce(
  fo,
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
var m2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function ud(e) {
  var t = m2();
  D(e, t);
}
ce(ud, {}, [], [], !0);
var y2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function cd(e) {
  var t = y2();
  D(e, t);
}
ce(cd, {}, [], [], !0);
var w2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function dd(e) {
  var t = w2();
  D(e, t);
}
ce(dd, {}, [], [], !0);
var _2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function fd(e) {
  var t = _2();
  D(e, t);
}
ce(fd, {}, [], [], !0);
var x2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function gd(e) {
  var t = x2();
  D(e, t);
}
ce(gd, {}, [], [], !0);
var b2 = /* @__PURE__ */ ne("<!> <!>", 1), C2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function hd(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(H, "$nodesDraggable", n), i = () => ee(T, "$nodesConnectable", n), s = () => ee(L, "$elementsSelectable", n), a = () => ee(P, "$viewport", n), l = () => ee(S, "$minZoom", n), u = () => ee(N, "$maxZoom", n), c = /* @__PURE__ */ le(), f = /* @__PURE__ */ le(), d = /* @__PURE__ */ le(), h = /* @__PURE__ */ le();
  let p = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), _ = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), v = w(t, "buttonBgColor", 12, void 0), b = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), C = w(t, "buttonColorHover", 12, void 0), M = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), V = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), O = w(t, "fitViewOptions", 12, void 0), B = w(t, "class", 12, "");
  const {
    zoomIn: R,
    zoomOut: I,
    fitView: E,
    viewport: P,
    minZoom: S,
    maxZoom: N,
    nodesDraggable: H,
    nodesConnectable: T,
    elementsSelectable: L
  } = Ge(), Y = {
    bgColor: v(),
    bgColorHover: b(),
    color: m(),
    colorHover: C(),
    borderColor: M()
  }, W = () => {
    R();
  }, G = () => {
    I();
  }, U = () => {
    E(O());
  }, K = () => {
    J(c, !g(c)), H.set(g(c)), T.set(g(c)), L.set(g(c));
  };
  ye(
    () => (o(), i(), s()),
    () => {
      J(c, o() || i() || s());
    }
  ), ye(() => (a(), l()), () => {
    J(f, a().zoom <= l());
  }), ye(() => (a(), u()), () => {
    J(d, a().zoom >= u());
  }), ye(() => Q(A()), () => {
    J(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), xt(), Be();
  const ue = /* @__PURE__ */ Ce(() => At([
    "svelte-flow__controls",
    g(h),
    B()
  ])), fe = /* @__PURE__ */ Ce(() => $() ?? "Svelte Flow controls");
  Ro(e, {
    get class() {
      return g(ue);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(fe);
    },
    get style() {
      return V();
    },
    children: (ae, Ne) => {
      var we = C2(), Ee = be(we);
      kt(Ee, t, "before", {});
      var de = z(Ee, 2);
      {
        var se = (re) => {
          var ie = b2(), me = be(ie);
          fo(me, ct(
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
              children: (Ze, te) => {
                ud(Ze);
              },
              $$slots: { default: !0 }
            }
          ));
          var Ye = z(me, 2);
          fo(Ye, ct(
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
              $$events: { click: G },
              children: (Ze, te) => {
                cd(Ze);
              },
              $$slots: { default: !0 }
            }
          )), D(re, ie);
        };
        xe(de, (re) => {
          x() && re(se);
        });
      }
      var he = z(de, 2);
      {
        var j = (re) => {
          fo(re, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: U },
              children: (ie, me) => {
                dd(ie);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(he, (re) => {
          _() && re(j);
        });
      }
      var _e = z(he, 2);
      {
        var Te = (re) => {
          fo(re, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: K },
              children: (ie, me) => {
                var Ye = nt(), Ze = be(Ye);
                {
                  var te = (oe) => {
                    gd(oe);
                  }, He = (oe) => {
                    fd(oe);
                  };
                  xe(Ze, (oe) => {
                    g(c) ? oe(te) : oe(He, !1);
                  });
                }
                D(ie, Ye);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(_e, (re) => {
          k() && re(Te);
        });
      }
      var Oe = z(_e, 2);
      kt(Oe, t, "default", {});
      var qe = z(Oe, 2);
      kt(qe, t, "after", {}), D(ae, we);
    },
    $$slots: { default: !0 }
  });
  var ge = pe({
    get position() {
      return p();
    },
    set position(ae) {
      p(ae), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ae) {
      x(ae), y();
    },
    get showFitView() {
      return _();
    },
    set showFitView(ae) {
      _(ae), y();
    },
    get showLock() {
      return k();
    },
    set showLock(ae) {
      k(ae), y();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(ae) {
      v(ae), y();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(ae) {
      b(ae), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(ae) {
      m(ae), y();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(ae) {
      C(ae), y();
    },
    get buttonBorderColor() {
      return M();
    },
    set buttonBorderColor(ae) {
      M(ae), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(ae) {
      $(ae), y();
    },
    get style() {
      return V();
    },
    set style(ae) {
      V(ae), y();
    },
    get orientation() {
      return A();
    },
    set orientation(ae) {
      A(ae), y();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(ae) {
      O(ae), y();
    },
    get class() {
      return B();
    },
    set class(ae) {
      B(ae), y();
    }
  });
  return r(), ge;
}
ce(
  hd,
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
var k2 = /* @__PURE__ */ Pe("<circle></circle>");
function vd(e, t) {
  ve(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Be();
  var o = k2();
  return $e(
    (i) => {
      ke(o, "cx", n()), ke(o, "cy", n()), ke(o, "r", n()), $t(o, 0, i);
    },
    [
      () => hn(At([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    Ce
  ), D(e, o), pe({
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
ce(vd, { radius: {}, class: {} }, [], [], !0);
var $2 = /* @__PURE__ */ Pe("<path></path>");
function pd(e, t) {
  ve(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Be();
  var s = $2();
  return $e(
    (a) => {
      ke(s, "stroke-width", n()), ke(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), $t(s, 0, a);
    },
    [
      () => hn(At([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    Ce
  ), D(e, s), pe({
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
ce(
  pd,
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
const E2 = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var S2 = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const P2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function md(e, t) {
  ve(t, !1), et(e, P2);
  const [n, r] = at(), o = () => ee(C, "$flowId", n), i = () => ee(m, "$viewport", n), s = /* @__PURE__ */ le(), a = /* @__PURE__ */ le(), l = /* @__PURE__ */ le(), u = /* @__PURE__ */ le(), c = /* @__PURE__ */ le();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => jn.Dots), h = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), _ = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), v = w(t, "patternClass", 12, void 0), b = w(t, "class", 12, "");
  const { viewport: m, flowId: C } = Ge(), M = p() || E2[d()], $ = d() === jn.Dots, V = d() === jn.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  ye(
    () => (o(), Q(f())),
    () => {
      J(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ye(() => i(), () => {
    J(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), ye(() => i(), () => {
    J(l, M * i().zoom);
  }), ye(() => (g(l), g(a)), () => {
    J(u, V ? [g(l), g(l)] : g(a));
  }), ye(
    () => (g(l), g(u)),
    () => {
      J(c, $ ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), xt(), Be();
  var O = S2();
  let B;
  var R = F(O), I = F(R);
  {
    var E = (H) => {
      const T = /* @__PURE__ */ Ce(() => g(l) / 2);
      vd(H, {
        get radius() {
          return g(T);
        },
        get class() {
          return v();
        }
      });
    }, P = (H) => {
      pd(H, {
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
          return v();
        }
      });
    };
    xe(I, (H) => {
      $ ? H(E) : H(P, !1);
    });
  }
  q(R);
  var S = z(R);
  q(O), $e(
    (H) => {
      $t(O, 0, H, "svelte-1r7pe8d"), B = ht(O, "", B, {
        "--xy-background-color-props": _(),
        "--xy-background-pattern-color-props": k()
      }), ke(R, "id", g(s)), ke(R, "x", i().x % g(a)[0]), ke(R, "y", i().y % g(a)[1]), ke(R, "width", g(a)[0]), ke(R, "height", g(a)[1]), ke(R, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ke(S, "fill", `url(#${g(s)})`);
    },
    [
      () => hn(At(["svelte-flow__background", b()]))
    ],
    Ce
  ), D(e, O);
  var N = pe({
    get id() {
      return f();
    },
    set id(H) {
      f(H), y();
    },
    get variant() {
      return d();
    },
    set variant(H) {
      d(H), y();
    },
    get gap() {
      return h();
    },
    set gap(H) {
      h(H), y();
    },
    get size() {
      return p();
    },
    set size(H) {
      p(H), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(H) {
      x(H), y();
    },
    get bgColor() {
      return _();
    },
    set bgColor(H) {
      _(H), y();
    },
    get patternColor() {
      return k();
    },
    set patternColor(H) {
      k(H), y();
    },
    get patternClass() {
      return v();
    },
    set patternClass(H) {
      v(H), y();
    },
    get class() {
      return b();
    },
    set class(H) {
      b(H), y();
    }
  });
  return r(), N;
}
ce(
  md,
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
var N2 = /* @__PURE__ */ Pe("<rect></rect>");
function yd(e, t) {
  ve(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  Be();
  var h = N2();
  let p;
  return $e(
    (x, _) => {
      p = $t(h, 0, x, null, p, _), ke(h, "x", n()), ke(h, "y", r()), ke(h, "rx", s()), ke(h, "ry", s()), ke(h, "width", o()), ke(h, "height", i()), ht(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ke(h, "shape-rendering", l());
    },
    [
      () => hn(At(["svelte-flow__minimap-node", d()])),
      () => ({ selected: f() })
    ],
    Ce
  ), D(e, h), pe({
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
ce(
  yd,
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
function _s(e, t) {
  const n = gp({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = Z(t.viewport);
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
const xs = (e) => e instanceof Function ? e : () => e;
var T2 = /* @__PURE__ */ Pe("<title> </title>"), M2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function wd(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(he, "$flowId", n), i = () => ee(Ee, "$viewport", n), s = () => ee(de, "$containerWidth", n), a = () => ee(se, "$containerHeight", n), l = () => ee(we, "$nodeLookup", n), u = () => ee(Ne, "$nodes", n), c = () => ee(j, "$panZoom", n), f = () => ee(_e, "$translateExtent", n), d = /* @__PURE__ */ le(), h = /* @__PURE__ */ le(), p = /* @__PURE__ */ le(), x = /* @__PURE__ */ le(), _ = /* @__PURE__ */ le(), k = /* @__PURE__ */ le(), v = /* @__PURE__ */ le(), b = /* @__PURE__ */ le(), m = /* @__PURE__ */ le(), C = /* @__PURE__ */ le(), M = /* @__PURE__ */ le(), $ = /* @__PURE__ */ le(), V = /* @__PURE__ */ le();
  let A = w(t, "position", 12, "bottom-right"), O = w(t, "ariaLabel", 12, "Mini map"), B = w(t, "nodeStrokeColor", 12, "transparent"), R = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), P = w(t, "nodeStrokeWidth", 12, 2), S = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), H = w(t, "maskStrokeColor", 12, void 0), T = w(t, "maskStrokeWidth", 12, void 0), L = w(t, "width", 12, void 0), Y = w(t, "height", 12, void 0), W = w(t, "pannable", 12, !0), G = w(t, "zoomable", 12, !0), U = w(t, "inversePan", 12, void 0), K = w(t, "zoomStep", 12, void 0), ue = w(t, "style", 12, ""), fe = w(t, "class", 12, "");
  const ge = 200, ae = 150, {
    nodes: Ne,
    nodeLookup: we,
    viewport: Ee,
    width: de,
    height: se,
    flowId: he,
    panZoom: j,
    translateExtent: _e
  } = Ge(), Te = R() === void 0 ? void 0 : xs(R()), Oe = xs(B()), qe = xs(I()), re = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ie = `svelte-flow__minimap-desc-${o()}`;
  let me = /* @__PURE__ */ le(g(d));
  const Ye = () => g(k);
  ye(
    () => (i(), s(), a()),
    () => {
      J(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ye(
    () => (l(), g(d), u()),
    () => {
      J(me, l().size > 0 ? yc(Lo(l(), { filter: (oe) => !oe.hidden }), g(d)) : g(d)), u();
    }
  ), ye(() => Q(L()), () => {
    J(h, L() ?? ge);
  }), ye(() => Q(Y()), () => {
    J(p, Y() ?? ae);
  }), ye(
    () => (g(me), g(h)),
    () => {
      J(x, g(me).width / g(h));
    }
  ), ye(
    () => (g(me), g(p)),
    () => {
      J(_, g(me).height / g(p));
    }
  ), ye(
    () => (g(x), g(_)),
    () => {
      J(k, Math.max(g(x), g(_)));
    }
  ), ye(() => (g(k), g(h)), () => {
    J(v, g(k) * g(h));
  }), ye(
    () => (g(k), g(p)),
    () => {
      J(b, g(k) * g(p));
    }
  ), ye(() => g(k), () => {
    J(m, 5 * g(k));
  }), ye(
    () => (g(me), g(v), g(m)),
    () => {
      J(C, g(me).x - (g(v) - g(me).width) / 2 - g(m));
    }
  ), ye(
    () => (g(me), g(b), g(m)),
    () => {
      J(M, g(me).y - (g(b) - g(me).height) / 2 - g(m));
    }
  ), ye(() => (g(v), g(m)), () => {
    J($, g(v) + g(m) * 2);
  }), ye(() => (g(b), g(m)), () => {
    J(V, g(b) + g(m) * 2);
  }), xt(), Be();
  const Ze = /* @__PURE__ */ Ce(() => ue() + (S() ? `;--xy-minimap-background-color-props:${S()}` : "")), te = /* @__PURE__ */ Ce(() => At(["svelte-flow__minimap", fe()]));
  Ro(e, {
    get position() {
      return A();
    },
    get style() {
      return g(Ze);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (oe, tt) => {
      var Et = nt(), Ot = be(Et);
      {
        var De = (rt) => {
          var Re = M2();
          ke(Re, "aria-labelledby", ie);
          let Ie;
          var ot = F(Re);
          {
            var _t = (St) => {
              var Lt = T2();
              ke(Lt, "id", ie);
              var _r = F(Lt, !0);
              q(Lt), $e(() => ft(_r, O())), D(St, Lt);
            };
            xe(ot, (St) => {
              O() && St(_t);
            });
          }
          var vt = z(ot);
          Vt(vt, 1, u, (St) => St.id, (St, Lt) => {
            var _r = nt();
            const lt = /* @__PURE__ */ Ce(() => l().get(g(Lt).id));
            var is = be(_r);
            {
              var to = (Ft) => {
                const Fo = /* @__PURE__ */ Ce(() => nr(g(lt))), Wo = /* @__PURE__ */ Ce(() => Te == null ? void 0 : Te(g(lt))), Xo = /* @__PURE__ */ Ce(() => Oe(g(lt))), ss = /* @__PURE__ */ Ce(() => qe(g(lt)));
                yd(Ft, ct(
                  {
                    get x() {
                      return g(lt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(lt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Fo),
                  {
                    get selected() {
                      return g(lt).selected;
                    },
                    get color() {
                      return g(Wo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return g(Xo);
                    },
                    get strokeWidth() {
                      return P();
                    },
                    shapeRendering: re,
                    get class() {
                      return g(ss);
                    }
                  }
                ));
              };
              xe(is, (Ft) => {
                g(lt) && wc(g(lt)) && Ft(to);
              });
            }
            D(St, _r);
          });
          var eo = z(vt);
          q(Re), Ct(Re, (St, Lt) => _s == null ? void 0 : _s(St, Lt), () => ({
            panZoom: c(),
            viewport: Ee,
            getViewScale: Ye,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: U(),
            zoomStep: K(),
            pannable: W(),
            zoomable: G()
          })), $e(() => {
            ke(Re, "width", g(h)), ke(Re, "height", g(p)), ke(Re, "viewBox", `${g(C) ?? ""} ${g(M) ?? ""} ${g($) ?? ""} ${g(V) ?? ""}`), Ie = ht(Re, "", Ie, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": H(),
              "--xy-minimap-mask-stroke-width-props": T() ? T() * g(k) : void 0
            }), ke(eo, "d", `M${g(C) - g(m)},${g(M) - g(m)}h${g($) + g(m) * 2}v${g(V) + g(m) * 2}h${-g($) - g(m) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), D(rt, Re);
        };
        xe(Ot, (rt) => {
          c() && rt(De);
        });
      }
      D(oe, Et);
    },
    $$slots: { default: !0 }
  });
  var He = pe({
    get position() {
      return A();
    },
    set position(oe) {
      A(oe), y();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(oe) {
      O(oe), y();
    },
    get nodeStrokeColor() {
      return B();
    },
    set nodeStrokeColor(oe) {
      B(oe), y();
    },
    get nodeColor() {
      return R();
    },
    set nodeColor(oe) {
      R(oe), y();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(oe) {
      I(oe), y();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(oe) {
      E(oe), y();
    },
    get nodeStrokeWidth() {
      return P();
    },
    set nodeStrokeWidth(oe) {
      P(oe), y();
    },
    get bgColor() {
      return S();
    },
    set bgColor(oe) {
      S(oe), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(oe) {
      N(oe), y();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(oe) {
      H(oe), y();
    },
    get maskStrokeWidth() {
      return T();
    },
    set maskStrokeWidth(oe) {
      T(oe), y();
    },
    get width() {
      return L();
    },
    set width(oe) {
      L(oe), y();
    },
    get height() {
      return Y();
    },
    set height(oe) {
      Y(oe), y();
    },
    get pannable() {
      return W();
    },
    set pannable(oe) {
      W(oe), y();
    },
    get zoomable() {
      return G();
    },
    set zoomable(oe) {
      G(oe), y();
    },
    get inversePan() {
      return U();
    },
    set inversePan(oe) {
      U(oe), y();
    },
    get zoomStep() {
      return K();
    },
    set zoomStep(oe) {
      K(oe), y();
    },
    get style() {
      return ue();
    },
    set style(oe) {
      ue(oe), y();
    },
    get class() {
      return fe();
    },
    set class(oe) {
      fe(oe), y();
    }
  });
  return r(), He;
}
ce(
  wd,
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
const Yl = (e) => E0(e);
function Yt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: h, nodeLookup: p, nodeOrigin: x, edgeLookup: _, connectionLookup: k } = Ge(), v = (C) => {
    var O, B;
    const M = Z(p), $ = Yl(C) ? C : M.get(C.id), V = $.parentId ? V0($.position, $.measured, $.parentId, M, Z(x)) : $.position, A = {
      ...$,
      position: V,
      width: ((O = $.measured) == null ? void 0 : O.width) ?? $.width,
      height: ((B = $.measured) == null ? void 0 : B.height) ?? $.height
    };
    return Yr(A);
  }, b = (C, M, $ = { replace: !1 }) => {
    var O;
    const V = (O = Z(p).get(C)) == null ? void 0 : O.internals.userNode;
    if (!V)
      return;
    const A = typeof M == "function" ? M(V) : M;
    $.replace ? f.update((B) => B.map((R) => R.id === C ? Yl(A) ? A : { ...R, ...A } : R)) : (Object.assign(V, A), f.update((B) => B));
  }, m = (C) => Z(p).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (C) => {
      var M;
      return (M = m(C)) == null ? void 0 : M.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? Z(f) : Fl(Z(p), C),
    getEdge: (C) => Z(_).get(C),
    getEdges: (C) => C === void 0 ? Z(d) : Fl(Z(_), C),
    setZoom: (C, M) => {
      const $ = Z(c);
      return $ ? $.scaleTo(C, { duration: M == null ? void 0 : M.duration }) : Promise.resolve(!1);
    },
    getZoom: () => Z(i).zoom,
    setViewport: async (C, M) => {
      const $ = Z(i), V = Z(c);
      return V ? (await V.setViewport({
        x: C.x ?? $.x,
        y: C.y ?? $.y,
        zoom: C.zoom ?? $.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Z(i),
    setCenter: async (C, M, $) => {
      const V = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : Z(u), A = Z(c);
      return A ? (await A.setViewport({
        x: Z(s) / 2 - C * V,
        y: Z(a) / 2 - M * V,
        zoom: V
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, M) => {
      const $ = Z(c);
      if (!$)
        return Promise.resolve(!1);
      const V = Ca(C, Z(s), Z(a), Z(l), Z(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await $.setViewport(V, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, M = !0, $) => {
      const V = Sl(C), A = V ? C : v(C);
      return A ? ($ || Z(f)).filter((O) => {
        const B = Z(p).get(O.id);
        if (!B || !V && O.id === C.id)
          return !1;
        const R = Yr(B), I = Eo(R, A);
        return M && I > 0 || I >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (C, M, $ = !0) => {
      const A = Sl(C) ? C : v(C);
      if (!A)
        return !1;
      const O = Eo(A, M);
      return $ && O > 0 || O >= A.width * A.height;
    },
    deleteElements: async ({ nodes: C = [], edges: M = [] }) => {
      const { nodes: $, edges: V } = await vc({
        nodesToRemove: C,
        edgesToRemove: M,
        nodes: Z(f),
        edges: Z(d),
        onBeforeDelete: Z(r)
      });
      return $ && f.update((A) => A.filter((O) => !$.some(({ id: B }) => B === O.id))), V && d.update((A) => A.filter((O) => !V.some(({ id: B }) => B === O.id))), {
        deletedNodes: $,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (C, M = { snapToGrid: !0 }) => {
      const $ = Z(h);
      if (!$)
        return C;
      const V = M.snapToGrid ? Z(o) : !1, { x: A, y: O, zoom: B } = Z(i), { x: R, y: I } = $.getBoundingClientRect(), E = {
        x: C.x - R,
        y: C.y - I
      };
      return Io(E, [A, O, B], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const M = Z(h);
      if (!M)
        return C;
      const { x: $, y: V, zoom: A } = Z(i), { x: O, y: B } = M.getBoundingClientRect(), R = $i(C, [$, V, A]);
      return {
        x: R.x + O,
        y: R.y + B
      };
    },
    toObject: () => ({
      nodes: Z(f).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: Z(d).map((C) => ({ ...C })),
      viewport: { ...Z(i) }
    }),
    updateNode: b,
    updateNodeData: (C, M, $) => {
      var O;
      const V = (O = Z(p).get(C)) == null ? void 0 : O.internals.userNode;
      if (!V)
        return;
      const A = typeof M == "function" ? M(V) : M;
      V.data = $ != null && $.replace ? A : { ...V.data, ...A }, f.update((B) => B);
    },
    getNodesBounds: (C) => {
      const M = Z(p), $ = Z(x);
      return S0(C, { nodeLookup: M, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: C, id: M, nodeId: $ }) => {
      var V;
      return Array.from(((V = Z(k).get(`${$}-${C}-${M ?? null}`)) == null ? void 0 : V.values()) ?? []);
    },
    viewport: i
  };
}
function Fl(e, t) {
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
var H2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function _d(e, t) {
  ve(t, !1);
  const [n, r] = at(), o = () => ee(b, "$nodes", n), i = () => ee(v, "$nodeLookup", n), s = () => ee(k, "$viewport", n), a = () => ee(_, "$domNode", n), l = /* @__PURE__ */ le(), u = /* @__PURE__ */ le(), c = /* @__PURE__ */ le();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: _, viewport: k, nodeLookup: v, nodes: b } = Ge(), { getNodesBounds: m } = Yt(), C = cr("svelteflow__node_id");
  let M = /* @__PURE__ */ le(), $ = /* @__PURE__ */ le([]), V = p() !== void 0 ? p() : 10, A = d() !== void 0 ? d() : Ae.Top, O = h() !== void 0 ? h() : "center";
  ye(
    () => (o(), Q(f()), i()),
    () => {
      o();
      const P = Array.isArray(f()) ? f() : [f() || C];
      J($, P.reduce(
        (S, N) => {
          const H = i().get(N);
          return H && S.push(H), S;
        },
        []
      ));
    }
  ), ye(
    () => (g($), s()),
    () => {
      const P = m(g($));
      P && J(M, G0(P, s(), A, V, O));
    }
  ), ye(() => g($), () => {
    J(l, g($).length === 0 ? 1 : Math.max(...g($).map((P) => (P.internals.z || 5) + 1)));
  }), ye(() => o(), () => {
    J(u, o().filter((P) => P.selected).length);
  }), ye(
    () => (Q(x()), g($), g(u)),
    () => {
      J(c, typeof x() == "boolean" ? x() : g($).length === 1 && g($)[0].selected && g(u) === 1);
    }
  ), xt(), Be();
  var B = nt(), R = be(B);
  {
    var I = (P) => {
      var S = H2();
      let N;
      var H = F(S);
      kt(H, t, "default", {}), q(S), Ct(S, (T, L) => Nr == null ? void 0 : Nr(T, L), () => ({ domNode: a() })), $e(
        (T) => {
          ke(S, "data-id", T), N = ht(S, "", N, {
            position: "absolute",
            transform: g(M),
            "z-index": g(l)
          });
        },
        [
          () => g($).reduce((T, L) => `${T}${L.id} `, "").trim()
        ],
        Ce
      ), D(P, S);
    };
    xe(R, (P) => {
      a() && g(c) && g($) && P(I);
    });
  }
  D(e, B);
  var E = pe({
    get nodeId() {
      return f();
    },
    set nodeId(P) {
      f(P), y();
    },
    get position() {
      return d();
    },
    set position(P) {
      d(P), y();
    },
    get align() {
      return h();
    },
    set align(P) {
      h(P), y();
    },
    get offset() {
      return p();
    },
    set offset(P) {
      p(P), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(P) {
      x(P), y();
    }
  });
  return r(), E;
}
ce(
  _d,
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
function wr(e) {
  const { nodes: t, nodeLookup: n } = Ge();
  let r = [], o = !0;
  return Zn([t, n], ([, i], s) => {
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
    (!op(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Wl = "tinyflow-component";
class n_ {
  constructor(t) {
    Pt(this, "options");
    Pt(this, "rootEl");
    Pt(this, "svelteFlowInstance");
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
    const t = document.createElement(Wl);
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
    const n = document.createElement(Wl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const D2 = () => {
  const e = Se([]), t = Se([]), n = Se({ x: 250, y: 100, zoom: 1 });
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
}, ai = D2();
var V2 = /* @__PURE__ */ ne("<button><!></button>");
function Ke(e, t) {
  ve(t, !0);
  const n = w(t, "children", 7), r = w(t, "primary", 7), o = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = V2();
  let s;
  var a = F(i);
  return dr(a, () => n() ?? yt), q(i), $e(() => s = Gt(i, s, {
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  })), D(e, i), pe({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), y();
    }
  });
}
ce(Ke, { children: {}, primary: {} }, [], [], !0);
var A2 = /* @__PURE__ */ ne("<input>");
function xd(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = A2();
  An(r);
  let o;
  $e(() => o = Gt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), pe();
}
ce(xd, {}, [], [], !0);
var O2 = /* @__PURE__ */ ne('<div><input type="hidden"> <!> <!></div>');
const L2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function bd(e, t) {
  ve(t, !0), et(e, L2);
  const n = w(t, "placeholder", 7), r = w(t, "label", 7), o = w(t, "value", 7), i = w(t, "buttonText", 7, "选择..."), s = w(t, "onChosen", 7), a = /* @__PURE__ */ bt(t, [
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
  var l = O2();
  let u;
  var c = F(l);
  An(c);
  var f = z(c, 2);
  pt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var d = z(f, 2);
  return Ke(d, {
    onclick: (h) => {
      var p;
      (p = s()) == null || p(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, p) => {
      Ve();
      var x = ze();
      $e(() => ft(x, i())), D(h, x);
    },
    $$slots: { default: !0 }
  }), q(l), $e(() => {
    u = Gt(
      l,
      u,
      {
        ...a,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), ti(c, o());
  }), D(e, l), pe({
    get placeholder() {
      return n();
    },
    set placeholder(h) {
      n(h), y();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), y();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), y();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), y();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), y();
    }
  });
}
ce(
  bd,
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
var I2 = /* @__PURE__ */ ne("<input>");
function pt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = I2();
  An(r);
  let o;
  $e(() => o = Gt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), pe();
}
ce(pt, {}, [], [], !0);
var z2 = /* @__PURE__ */ ne("<textarea></textarea>");
function gt(e, t) {
  ve(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = z2();
  x1(o);
  let i;
  return $e(() => i = Gt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), pe({
    get value() {
      return n();
    },
    set value(s) {
      n(s), y();
    }
  });
}
ce(gt, { value: {} }, [], [], !0);
var R2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), B2 = /* @__PURE__ */ ne("<div></div>");
function Cd(e, t) {
  const n = ut(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ut(n, ["items", "onChange", "activeIndex"]);
  ve(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  Be();
  var l = B2();
  let u;
  return Vt(l, 5, o, Ir, (c, f, d) => {
    var h = R2();
    ke(h, "tabindex", d), h.__click = () => a(g(f), d), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(f), d));
    };
    var p = F(h);
    {
      var x = (k) => {
        var v = ze();
        $e(() => ft(v, g(f).label)), D(k, v);
      }, _ = (k) => {
        var v = nt(), b = be(v);
        dr(b, () => g(f).label ?? yt), D(k, v);
      };
      xe(p, (k) => {
        typeof g(f).label == "string" ? k(x) : k(_, !1);
      });
    }
    q(h), $e(() => $t(h, 1, `tf-tabs-item ${d === s() ? "active" : ""}`)), D(c, h);
  }), q(l), $e(() => u = Gt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), pe({
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
Ur(["click", "keydown"]);
ce(Cd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var q2 = (e, t, n) => t(g(n)), Y2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, F2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), W2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), X2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Z2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), K2 = /* @__PURE__ */ ne("<div></div>");
const j2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function kd(e, t) {
  ve(t, !0), et(e, j2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => ln([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = K2();
  return Vt(s, 21, n, Ir, (a, l, u) => {
    var c = Z2(), f = F(c);
    ke(f, "tabindex", u), f.__click = [q2, i, l], f.__keydown = [Y2, i, l];
    var d = F(f);
    {
      var h = (m) => {
        var C = F2(), M = F(C);
        Wn(M, {
          get target() {
            return g(l).icon;
          }
        }), q(C), D(m, C);
      };
      xe(d, (m) => {
        g(l).icon && m(h);
      });
    }
    var p = z(d, 2);
    Wn(p, {
      get target() {
        return g(l).title;
      }
    });
    var x = z(p, 2);
    q(f);
    var _ = z(f, 2);
    {
      var k = (m) => {
        var C = W2(), M = F(C);
        Wn(M, {
          get target() {
            return g(l).description;
          }
        }), q(C), D(m, C);
      };
      xe(_, (m) => {
        g(l).description && m(k);
      });
    }
    var v = z(_, 2);
    {
      var b = (m) => {
        var C = X2(), M = F(C);
        Wn(M, {
          get target() {
            return g(l).content;
          }
        }), q(C), D(m, C);
      };
      xe(v, (m) => {
        o().includes(g(l).key) && m(b);
      });
    }
    q(c), $e((m) => $t(x, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(a, c);
  }), q(s), $e(() => {
    ht(s, t.style), $t(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, s), pe({
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
Ur(["click", "keydown"]);
ce(kd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  ve(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = nt(), o = be(r);
  {
    var i = (a) => {
      var l = nt(), u = be(l);
      dr(u, () => n() ?? yt), D(a, l);
    }, s = (a) => {
      var l = nt(), u = be(l);
      fa(u, n), D(a, l);
    };
    xe(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return D(e, r), pe({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ce(Wn, { target: {} }, [], [], !0);
var G2 = (e, t, n) => t(g(n)), U2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), J2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Q2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), em = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), tm = /* @__PURE__ */ ne("<!> <!>", 1), nm = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), rm = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), om = /* @__PURE__ */ ne("<div><!></div>");
function on(e, t) {
  ve(t, !0);
  const n = (v, b = yt) => {
    var m = nt(), C = be(m);
    Vt(C, 19, b, (M, $) => `${$}_${M.value}`, (M, $) => {
      var V = Q2(), A = be(V);
      A.__click = [G2, p, $];
      var O = F(A), B = F(O);
      {
        var R = (S) => {
          var N = U2();
          D(S, N);
        };
        xe(B, (S) => {
          g($).children && g($).children.length > 0 && S(R);
        });
      }
      q(O);
      var I = z(O, 2);
      Wn(I, {
        get target() {
          return g($).label;
        }
      }), q(A);
      var E = z(A, 2);
      {
        var P = (S) => {
          var N = J2(), H = F(N);
          n(H, () => g($).children), q(N), D(S, N);
        };
        xe(E, (S) => {
          g($).children && g($).children.length > 0 && (a() || u().includes(g($).value)) && S(P);
        });
      }
      D(M, V);
    }), D(v, m);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), c = w(t, "placeholder", 7), f = /* @__PURE__ */ bt(t, [
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
  ]), d = /* @__PURE__ */ Me(() => {
    const v = [], b = (m) => {
      for (let C of m)
        i().length > 0 ? i().includes(C.value) && v.push(C) : s().includes(C.value) && v.push(C), C.children && C.children.length > 0 && b(C.children);
    };
    return b(r()), v;
  }), h;
  function p(v) {
    var b;
    h == null || h.hide(), (b = o()) == null || b(v);
  }
  var x = om();
  let _;
  var k = F(x);
  return kn(
    Qr(k, {
      floating: (b) => {
        var m = em(), C = F(m);
        n(C, r), q(m), D(b, m);
      },
      children: (b, m) => {
        var C = rm();
        let M;
        var $ = F(C);
        Vt(
          $,
          23,
          () => g(d),
          (V, A) => `${A}_${V.value}`,
          (V, A, O) => {
            var B = nt(), R = be(B);
            {
              var I = (P) => {
                var S = nt(), N = be(S);
                {
                  var H = (T) => {
                    Wn(T, {
                      get target() {
                        return g(A).label;
                      }
                    });
                  };
                  xe(N, (T) => {
                    g(O) === 0 && T(H);
                  });
                }
                D(P, S);
              }, E = (P) => {
                var S = tm(), N = be(S);
                Wn(N, {
                  get target() {
                    return g(A).label;
                  }
                });
                var H = z(N, 2);
                {
                  var T = (L) => {
                    var Y = ze(",");
                    D(L, Y);
                  };
                  xe(H, (L) => {
                    g(O) < g(d).length - 1 && L(T);
                  });
                }
                D(P, S);
              };
              xe(R, (P) => {
                l() ? P(E, !1) : P(I);
              });
            }
            D(V, B);
          },
          (V) => {
            var A = nm(), O = F(A, !0);
            q(A), $e(() => ft(O, c())), D(V, A);
          }
        ), q($), Ve(2), q(C), $e(() => M = Gt(C, M, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D(b, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => h = b,
    () => h
  ), q(x), $e(() => _ = Gt(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, x), pe({
    get items() {
      return r();
    },
    set items(v) {
      r(v), y();
    },
    get onSelect() {
      return o();
    },
    set onSelect(v) {
      o(v), y();
    },
    get value() {
      return i();
    },
    set value(v = []) {
      i(v), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(v = []) {
      s(v), y();
    },
    get expandAll() {
      return a();
    },
    set expandAll(v = !0) {
      a(v), y();
    },
    get multiple() {
      return l();
    },
    set multiple(v = !1) {
      l(v), y();
    },
    get expandValue() {
      return u();
    },
    set expandValue(v = []) {
      u(v), y();
    },
    get placeholder() {
      return c();
    },
    set placeholder(v) {
      c(v), y();
    }
  });
}
Ur(["click"]);
ce(
  on,
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
const Po = Math.min, Mr = Math.max, Ti = Math.round, wn = (e) => ({
  x: e,
  y: e
}), im = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sm = {
  start: "end",
  end: "start"
};
function Xs(e, t, n) {
  return Mr(e, Po(t, n));
}
function Bo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vr(e) {
  return e.split("-")[0];
}
function qo(e) {
  return e.split("-")[1];
}
function $d(e) {
  return e === "x" ? "y" : "x";
}
function Pa(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(vr(e)) ? "y" : "x";
}
function Na(e) {
  return $d(ur(e));
}
function am(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Na(e), i = Pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Mi(s)), [s, Mi(s)];
}
function lm(e) {
  const t = Mi(e);
  return [Zs(e), t, Zs(t)];
}
function Zs(e) {
  return e.replace(/start|end/g, (t) => sm[t]);
}
function um(e, t, n) {
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
function cm(e, t, n, r) {
  const o = qo(e);
  let i = um(vr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Zs)))), i;
}
function Mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => im[t]);
}
function dm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ed(e) {
  return typeof e != "number" ? dm(e) : {
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
function Xl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ur(t), s = Na(t), a = Pa(s), l = vr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (qo(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const fm = async (e, t, n) => {
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
  } = Xl(u, r, l), d = r, h = {}, p = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: _,
      fn: k
    } = a[x], {
      x: v,
      y: b,
      data: m,
      reset: C
    } = await k({
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
    c = v ?? c, f = b ?? f, h = {
      ...h,
      [_]: {
        ...h[_],
        ...m
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: f
    } = Xl(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: h
  };
};
async function Sd(e, t) {
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
  } = Bo(t, e), p = Ed(h), _ = a[d ? f === "floating" ? "reference" : "floating" : f], k = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), v = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: v,
    offsetParent: b,
    strategy: l
  }) : v);
  return {
    top: (k.top - C.top + p.top) / m.y,
    bottom: (C.bottom - k.bottom + p.bottom) / m.y,
    left: (k.left - C.left + p.left) / m.x,
    right: (C.right - k.right + p.right) / m.x
  };
}
const gm = (e) => ({
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
    } = Bo(e, t) || {};
    if (u == null)
      return {};
    const f = Ed(c), d = {
      x: n,
      y: r
    }, h = Na(o), p = Pa(h), x = await s.getDimensions(u), _ = h === "y", k = _ ? "top" : "left", v = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[h] - d[h] - i.floating[p], C = d[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = M ? M[b] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(M))) && ($ = a.floating[b] || i.floating[p]);
    const V = m / 2 - C / 2, A = $ / 2 - x[p] / 2 - 1, O = Po(f[k], A), B = Po(f[v], A), R = O, I = $ - x[p] - B, E = $ / 2 - x[p] / 2 + V, P = Xs(R, E, I), S = !l.arrow && qo(o) != null && E !== P && i.reference[p] / 2 - (E < R ? O : B) - x[p] / 2 < 0, N = S ? E < R ? E - R : E - I : 0;
    return {
      [h]: d[h] + N,
      data: {
        [h]: P,
        centerOffset: E - P - N,
        ...S && {
          alignmentOffset: N
        }
      },
      reset: S
    };
  }
}), hm = function(e) {
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
        fallbackAxisSideDirection: p = "none",
        flipAlignment: x = !0,
        ..._
      } = Bo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = vr(o), v = ur(a), b = vr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = d || (b || !x ? [Mi(a)] : lm(a)), M = p !== "none";
      !d && M && C.push(...cm(a, x, p, m));
      const $ = [a, ...C], V = await Sd(t, _), A = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(V[k]), f) {
        const P = am(o, s, m);
        A.push(V[P[0]], V[P[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: A
      }], !A.every((P) => P <= 0)) {
        var B, R;
        const P = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1, S = $[P];
        if (S) {
          var I;
          const H = f === "alignment" ? v !== ur(S) : !1, T = ((I = O[0]) == null ? void 0 : I.overflows[0]) > 0;
          if (!H || T)
            return {
              data: {
                index: P,
                overflows: O
              },
              reset: {
                placement: S
              }
            };
        }
        let N = (R = O.filter((H) => H.overflows[0] <= 0).sort((H, T) => H.overflows[1] - T.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var E;
              const H = (E = O.filter((T) => {
                if (M) {
                  const L = ur(T.placement);
                  return L === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((L) => L > 0).reduce((L, Y) => L + Y, 0)]).sort((T, L) => T[1] - L[1])[0]) == null ? void 0 : E[0];
              H && (N = H);
              break;
            }
            case "initialPlacement":
              N = a;
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
async function vm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = vr(n), a = qo(n), l = ur(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Bo(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof p == "number" && (h = a === "end" ? p * -1 : p), l ? {
    x: h * c,
    y: d * u
  } : {
    x: d * u,
    y: h * c
  };
}
const pm = function(e) {
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
      } = t, l = await vm(t, e);
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
}, mm = function(e) {
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
          fn: (_) => {
            let {
              x: k,
              y: v
            } = _;
            return {
              x: k,
              y: v
            };
          }
        },
        ...l
      } = Bo(e, t), u = {
        x: n,
        y: r
      }, c = await Sd(t, l), f = ur(vr(o)), d = $d(f);
      let h = u[d], p = u[f];
      if (i) {
        const _ = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = h + c[_], b = h - c[k];
        h = Xs(v, h, b);
      }
      if (s) {
        const _ = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = p + c[_], b = p - c[k];
        p = Xs(v, p, b);
      }
      const x = a.fn({
        ...t,
        [d]: h,
        [f]: p
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
function ts() {
  return typeof window < "u";
}
function Jr(e) {
  return Pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rn(e) {
  var t;
  return (t = (Pd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pd(e) {
  return ts() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function fn(e) {
  return ts() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function $n(e) {
  return ts() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function Zl(e) {
  return !ts() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
function Yo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ym(e) {
  return ["table", "td", "th"].includes(Jr(e));
}
function ns(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ta(e) {
  const t = Ma(), n = fn(e) ? gn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function wm(e) {
  let t = Qn(e);
  for (; $n(t) && !Wr(t); ) {
    if (Ta(t))
      return t;
    if (ns(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Ma() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wr(e) {
  return ["html", "body", "#document"].includes(Jr(e));
}
function gn(e) {
  return jt(e).getComputedStyle(e);
}
function rs(e) {
  return fn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Jr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zl(e) && e.host || // Fallback.
    Rn(e)
  );
  return Zl(t) ? t.host : t;
}
function Nd(e) {
  const t = Qn(e);
  return Wr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && Yo(t) ? t : Nd(t);
}
function Td(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Nd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = jt(o);
  return i ? (Ks(s), t.concat(s, s.visualViewport || [], Yo(o) ? o : [], [])) : t.concat(o, Td(o, []));
}
function Ks(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Md(e) {
  const t = gn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ti(n) !== i || Ti(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Hd(e) {
  return fn(e) ? e : e.contextElement;
}
function Hr(e) {
  const t = Hd(e);
  if (!$n(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Md(t);
  let s = (i ? Ti(n.width) : n.width) / r, a = (i ? Ti(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const _m = /* @__PURE__ */ wn(0);
function Dd(e) {
  const t = jt(e);
  return !Ma() || !t.visualViewport ? _m : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== jt(e) ? !1 : t;
}
function No(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Hd(e);
  let s = wn(1);
  t && (r ? fn(r) && (s = Hr(r)) : s = Hr(e));
  const a = xm(i, n, r) ? Dd(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = jt(i), h = r && fn(r) ? jt(r) : r;
    let p = d, x = Ks(p);
    for (; x && r && h !== p; ) {
      const _ = Hr(x), k = x.getBoundingClientRect(), v = gn(x), b = k.left + (x.clientLeft + parseFloat(v.paddingLeft)) * _.x, m = k.top + (x.clientTop + parseFloat(v.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, f *= _.y, l += b, u += m, p = jt(x), x = Ks(p);
    }
  }
  return Hi({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function Ha(e, t) {
  const n = rs(e).scrollLeft;
  return t ? t.left + n : No(Rn(e)).left + n;
}
function Vd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ha(e, r)
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
  const i = o === "fixed", s = Rn(r), a = t ? ns(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), f = $n(r);
  if ((f || !f && !i) && ((Jr(r) !== "body" || Yo(s)) && (l = rs(r)), $n(r))) {
    const h = No(r);
    u = Hr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const d = s && !f && !i ? Vd(s, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function Cm(e) {
  return Array.from(e.getClientRects());
}
function km(e) {
  const t = Rn(e), n = rs(e), r = e.ownerDocument.body, o = Mr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Mr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ha(e);
  const a = -n.scrollTop;
  return gn(r).direction === "rtl" && (s += Mr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function $m(e, t) {
  const n = jt(e), r = Rn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Ma();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Em(e, t) {
  const n = No(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $n(e) ? Hr(e) : wn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Kl(e, t, n) {
  let r;
  if (t === "viewport")
    r = $m(e, n);
  else if (t === "document")
    r = km(Rn(e));
  else if (fn(t))
    r = Em(t, n);
  else {
    const o = Dd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hi(r);
}
function Ad(e, t) {
  const n = Qn(e);
  return n === t || !fn(n) || Wr(n) ? !1 : gn(n).position === "fixed" || Ad(n, t);
}
function Sm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Td(e, []).filter((a) => fn(a) && Jr(a) !== "body"), o = null;
  const i = gn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; fn(s) && !Wr(s); ) {
    const a = gn(s), l = Ta(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yo(s) && !l && Ad(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function Pm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ns(t) ? [] : Sm(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Kl(t, c, o);
    return u.top = Mr(f.top, u.top), u.right = Po(f.right, u.right), u.bottom = Po(f.bottom, u.bottom), u.left = Mr(f.left, u.left), u;
  }, Kl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Nm(e) {
  const {
    width: t,
    height: n
  } = Md(e);
  return {
    width: t,
    height: n
  };
}
function Tm(e, t, n) {
  const r = $n(t), o = Rn(t), i = n === "fixed", s = No(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  function u() {
    l.x = Ha(o);
  }
  if (r || !r && !i)
    if ((Jr(t) !== "body" || Yo(o)) && (a = rs(t)), r) {
      const h = No(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Vd(o, a) : wn(0), f = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: f,
    y: d,
    width: s.width,
    height: s.height
  };
}
function bs(e) {
  return gn(e).position === "static";
}
function jl(e, t) {
  if (!$n(e) || gn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Rn(e) === n && (n = n.ownerDocument.body), n;
}
function Od(e, t) {
  const n = jt(e);
  if (ns(e))
    return n;
  if (!$n(e)) {
    let o = Qn(e);
    for (; o && !Wr(o); ) {
      if (fn(o) && !bs(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = jl(e, t);
  for (; r && ym(r) && bs(r); )
    r = jl(r, t);
  return r && Wr(r) && bs(r) && !Ta(r) ? n : r || wm(e) || n;
}
const Mm = async function(e) {
  const t = this.getOffsetParent || Od, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Tm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Hm(e) {
  return gn(e).direction === "rtl";
}
const Dm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bm,
  getDocumentElement: Rn,
  getClippingRect: Pm,
  getOffsetParent: Od,
  getElementRects: Mm,
  getClientRects: Cm,
  getDimensions: Nm,
  getScale: Hr,
  isElement: fn,
  isRTL: Hm
}, Vm = pm, Am = mm, Om = hm, Lm = gm, Im = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Dm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fm(e, t, {
    ...o,
    platform: i
  });
}, zm = ({
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function f() {
    Im(e, u, {
      placement: r,
      middleware: [
        Vm(o),
        // 手动偏移配置
        Om(i),
        //自动翻转
        Am(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Lm({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: b, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: C, y: M } = m.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: M != null ? `${M}px` : "",
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
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), d = !1;
  }
  function x(k) {
    k.stopPropagation(), d ? p() : h();
  }
  function _(k) {
    u.contains(k.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, x);
  }), document.addEventListener("click", _), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, x);
      }), document.removeEventListener("click", _);
    },
    hide() {
      p();
    },
    isVisible() {
      return d;
    }
  };
};
var Rm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Qr(e, t) {
  ve(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  sn(() => (a = zm({
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
  var u = Rm(), c = F(u), f = F(c);
  dr(f, n), q(c), kn(c, (p) => i = p, () => i);
  var d = z(c, 2), h = F(d);
  return dr(h, r), q(d), kn(d, (p) => s = p, () => s), q(u), D(e, u), pe({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), y();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), y();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), y();
    }
  });
}
ce(Qr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(e, t) {
  ve(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = nt(), a = be(s);
  return T1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = Gt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = nt(), d = be(f);
    dr(d, () => n() ?? yt), D(u, f);
  }), D(e, s), pe({
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
ce(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Bm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const qm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function os(e, t) {
  ve(t, !0), et(e, qm);
  const n = /* @__PURE__ */ bt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ke(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Bm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
ce(os, {}, [], [], !0);
const Ym = () => {
  const e = Ge();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, pr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Fm = () => {
  const { nodes: e, nodeLookup: t } = Ge();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = Z(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = pr(), l = {
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
}, er = () => cr("tinyflow_options");
function wt() {
  return cr("svelteflow__node_id");
}
var Wm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Xm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Zm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Km = /* @__PURE__ */ ne('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), jm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Gm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Um = /* @__PURE__ */ ne('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), Jm = /* @__PURE__ */ ne('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"></label> <!></div>'), Qm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ey = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ty = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ny = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function pn(e, t) {
  ve(t, !0), et(e, ny);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "allowSetting", 7, !0), f = w(t, "allowSettingOfCondition", 7, !0), d = w(t, "showSourceHandle", 7, !0), h = w(t, "showTargetHandle", 7, !0), p = w(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: _, getNode: k } = Yt(), v = /* @__PURE__ */ Me(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = Ym(), { copyNode: m } = Fm(), C = er(), M = () => {
    var T;
    (T = C.onNodeExecute) == null || T.call(C, k(r()));
  };
  let $ = wt();
  var V = ty(), A = be(V);
  {
    var O = (T) => {
      _d(T, {
        get position() {
          return Ae.Top;
        },
        align: "end",
        children: (L, Y) => {
          var W = ey(), G = F(W);
          {
            var U = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (Ee, de) => {
                  var se = Wm();
                  D(Ee, se);
                },
                $$slots: { default: !0 }
              });
            };
            xe(G, (we) => {
              u() && we(U);
            });
          }
          var K = z(G, 2);
          {
            var ue = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (Ee, de) => {
                  var se = Xm();
                  D(Ee, se);
                },
                $$slots: { default: !0 }
              });
            };
            xe(K, (we) => {
              l() && we(ue);
            });
          }
          var fe = z(K, 2);
          {
            var ge = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (Ee, de) => {
                  var se = Zm();
                  D(Ee, se);
                },
                $$slots: { default: !0 }
              });
            };
            xe(fe, (we) => {
              a() && we(ge);
            });
          }
          var ae = z(fe, 2);
          {
            var Ne = (we) => {
              Qr(we, {
                placement: "bottom",
                floating: (de) => {
                  var se = Jm(), he = F(se), j = z(F(he));
                  pt(j, {
                    style: "width: 100%;",
                    onchange: (He) => {
                      const oe = He.target.value;
                      _($, { title: oe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), q(he);
                  var _e = z(he, 2), Te = z(F(_e));
                  gt(Te, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (He) => {
                      const oe = He.target.value;
                      _($, { description: oe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), q(_e);
                  var Oe = z(_e, 2);
                  {
                    var qe = (He) => {
                      var oe = Km(), tt = z(F(oe));
                      gt(tt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Et) => {
                          const Ot = Et.target.value;
                          _($, { condition: Ot });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), q(oe), D(He, oe);
                    };
                    xe(Oe, (He) => {
                      f() && He(qe);
                    });
                  }
                  var re = z(Oe, 2), ie = z(F(re), 2);
                  An(ie), ie.__change = [jm, _, $], q(re);
                  var me = z(re, 2), Ye = z(F(me), 2);
                  An(Ye), Ye.__change = [Gm, _, $], q(me);
                  var Ze = z(me, 2);
                  {
                    var te = (He) => {
                      var oe = Um(), tt = be(oe), Et = z(F(tt));
                      const Ot = /* @__PURE__ */ Me(() => n().loopIntervalMs || "1000");
                      gt(Et, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (_t) => {
                          const vt = _t.target.value;
                          _($, { loopIntervalMs: vt });
                        },
                        get value() {
                          return g(Ot);
                        }
                      }), q(tt);
                      var De = z(tt, 2), rt = z(F(De));
                      const Re = /* @__PURE__ */ Me(() => n().maxLoopCount || "0");
                      gt(rt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (_t) => {
                          const vt = _t.target.value;
                          _($, { maxLoopCount: vt });
                        },
                        get value() {
                          return g(Re);
                        }
                      }), q(De);
                      var Ie = z(De, 2), ot = z(F(Ie));
                      gt(ot, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (_t) => {
                          const vt = _t.target.value;
                          _($, { loopBreakCondition: vt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), q(Ie), D(He, oe);
                    };
                    xe(Ze, (He) => {
                      n().loopEnable && He(te);
                    });
                  }
                  q(se), $e(() => {
                    el(ie, !!n().async), el(Ye, !!n().loopEnable);
                  }), D(de, se);
                },
                children: (de, se) => {
                  Ke(de, {
                    class: "tf-node-toolbar-item",
                    children: (he, j) => {
                      var _e = Qm();
                      D(he, _e);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            xe(ae, (we) => {
              c() && we(Ne);
            });
          }
          q(W), D(L, W);
        },
        $$slots: { default: !0 }
      });
    };
    xe(A, (T) => {
      (a() || l() || u()) && T(O);
    });
  }
  var B = z(A, 2), R = z(F(B), 2), I = F(R);
  kd(I, {
    get items() {
      return g(v);
    },
    activeKeys: x,
    onChange: (T, L) => {
      var Y;
      _(r(), { expand: L == null ? void 0 : L.includes("key") }), (Y = p()) == null || Y(L != null && L.includes("key") ? "key" : "");
    }
  }), q(R), q(B);
  var E = z(B, 2);
  {
    var P = (T) => {
      Jn(T, {
        type: "target",
        get position() {
          return Ae.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(E, (T) => {
      h() && T(P);
    });
  }
  var S = z(E, 2);
  {
    var N = (T) => {
      Jn(T, {
        type: "source",
        get position() {
          return Ae.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(S, (T) => {
      d() && T(N);
    });
  }
  var H = z(S, 2);
  return dr(H, () => i() ?? yt), D(e, V), pe({
    get data() {
      return n();
    },
    set data(T) {
      n(T), y();
    },
    get id() {
      return r();
    },
    set id(T = "") {
      r(T), y();
    },
    get icon() {
      return o();
    },
    set icon(T) {
      o(T), y();
    },
    get handle() {
      return i();
    },
    set handle(T) {
      i(T), y();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(T = !0) {
      a(T), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(T = !0) {
      l(T), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(T = !0) {
      u(T), y();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(T = !0) {
      c(T), y();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(T = !0) {
      f(T), y();
    },
    get showSourceHandle() {
      return d();
    },
    set showSourceHandle(T = !0) {
      d(T), y();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(T = !0) {
      h(T), y();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(T) {
      p(T), y();
    }
  });
}
Ur(["change"]);
ce(
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
const Ld = [
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
], ry = [
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
var oy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), iy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), sy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ay = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ve(t, !0), et(e, ay);
  const [n, r] = at(), o = () => ee(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = wt(), l = /* @__PURE__ */ Me(() => wr(a)), u = /* @__PURE__ */ Me(() => {
    var A, O;
    return {
      ...i(),
      ...(O = (A = o()) == null ? void 0 : A.data) == null ? void 0 : O.parameters[s()]
    };
  });
  const { updateNodeData: c } = Yt(), f = (A, O) => {
    c(a, (B) => {
      let R = B.data.parameters;
      return R[s()][A] = O, { parameters: R };
    });
  }, d = (A) => {
    const O = A.target.value;
    f("name", O);
  }, h = (A) => {
    const O = A.target.checked;
    f("required", O);
  }, p = (A) => {
    const O = A.value;
    O && f("dataType", O);
  };
  let x;
  const _ = () => {
    c(a, (A) => {
      let O = A.data.parameters;
      return O.splice(s(), 1), { parameters: [...O] };
    }), x == null || x.hide();
  };
  var k = sy(), v = be(k), b = F(v);
  pt(b, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), q(v);
  var m = z(v, 2), C = F(m);
  xd(C, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), q(m);
  var M = z(m, 2), $ = F(M);
  kn(
    Qr($, {
      placement: "bottom",
      floating: (O) => {
        var B = oy(), R = F(B), I = z(F(R));
        const E = /* @__PURE__ */ Me(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        on(I, {
          items: Ld,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return g(E);
          }
        }), q(R);
        var P = z(R, 2), S = z(F(P));
        gt(S, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Y) => {
            const W = Y.target.value;
            f("defaultValue", W);
          }
        }), q(P);
        var N = z(P, 2), H = z(F(N));
        gt(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Y) => {
            const W = Y.target.value;
            f("description", W);
          }
        }), q(N);
        var T = z(N, 2), L = F(T);
        Ke(L, {
          onclick: _,
          children: (Y, W) => {
            Ve();
            var G = ze("删除");
            D(Y, G);
          },
          $$slots: { default: !0 }
        }), q(T), q(B), D(O, B);
      },
      children: (O, B) => {
        Ke(O, {
          class: "input-btn-more",
          children: (R, I) => {
            var E = iy();
            D(R, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => x = O,
    () => x
  ), q(M), D(e, k);
  var V = pe({
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
  return r(), V;
}
ce(Id, { parameter: {}, index: {} }, [], [], !0);
var ly = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), uy = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), cy = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const dy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  ve(t, !0), et(e, dy);
  const [n, r] = at(), o = () => ee(g(s), "$node", n);
  let i = wt(), s = /* @__PURE__ */ Me(() => wr(i)), a = /* @__PURE__ */ Me(() => {
    var d, h;
    return [...((h = (d = o()) == null ? void 0 : d.data) == null ? void 0 : h.parameters) || []];
  });
  var l = cy(), u = F(l);
  {
    var c = (d) => {
      var h = ly();
      Ve(4), D(d, h);
    };
    xe(u, (d) => {
      g(a).length !== 0 && d(c);
    });
  }
  var f = z(u, 2);
  Vt(
    f,
    19,
    () => g(a),
    (d) => d.id,
    (d, h, p) => {
      Id(d, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (d) => {
      var h = uy();
      D(d, h);
    }
  ), q(l), D(e, l), pe(), r();
}
ce(zd, {}, [], [], !0);
const Di = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = pr()), Di(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = Yt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Di(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: pr()
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
var fy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), gy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hy = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const vy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Rd(e, t) {
  ve(t, !0), et(e, vy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn();
  return pn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = fy();
      D(a, l);
    },
    children: (a, l) => {
      var u = hy(), c = be(u), f = F(c);
      Qe(f, {
        level: 3,
        children: (p, x) => {
          Ve();
          var _ = ze("输入参数");
          D(p, _);
        },
        $$slots: { default: !0 }
      });
      var d = z(f, 2);
      Ke(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, x) => {
          var _ = gy();
          D(p, _);
        },
        $$slots: { default: !0 }
      }), q(c);
      var h = z(c, 2);
      zd(h, {}), D(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(Rd, { data: {} }, [], [], !0);
const Bd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Bd(e, r.source, n));
}, qd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: qd(r.children, t + "." + r.name, n)
})), Gl = (e, t, n) => {
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
            value: e.id + ".loopItem"
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
          children: qd(r, e.id, t)
        };
    }
  }
}, py = (e = !1) => {
  const t = wt(), n = wr(t), { nodes: r, edges: o, nodeLookup: i } = Ge();
  return Zn(
    [n, r, o, i],
    ([s, a, l, u]) => {
      if (!s)
        return [];
      const c = u.get(t), f = [];
      if (e)
        for (const d of a) {
          const h = d.parentId === s.id;
          if (h) {
            const p = Gl(d, h, c);
            p && f.push(p);
          }
        }
      else {
        const d = [];
        Bd(d, t, l);
        for (const h of a)
          if (d.includes(h.id)) {
            const p = h.parentId === s.id, x = Gl(h, p, c);
            x && f.push(x);
          }
      }
      return f;
    }
  );
};
var my = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), yy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const wy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Yd(e, t) {
  ve(t, !0), et(e, wy);
  const [n, r] = at(), o = () => ee(g(f), "$node", n), i = () => ee(m, "$selectItems", n);
  sn(() => {
    g(d).refType || k({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7), u = w(t, "useChildrenOnly", 7);
  let c = wt(), f = /* @__PURE__ */ Me(() => wr(c)), d = /* @__PURE__ */ Me(() => {
    var S;
    return {
      ...s(),
      ...(S = o()) == null ? void 0 : S.data[l()][a()]
    };
  });
  const { updateNodeData: h } = Yt(), p = (S, N) => {
    h(c, (H) => {
      let T = H.data[l()];
      return T[a()] = { ...T[a()], [S]: N }, { [l()]: T };
    });
  }, x = (S, N) => {
    const H = N.target.value;
    p(S, H);
  }, _ = (S) => {
    const N = S.value;
    p("ref", N);
  }, k = (S) => {
    const N = S.value;
    p("refType", N);
  };
  let v;
  const b = () => {
    h(c, (S) => {
      let N = S.data[l()];
      return N.splice(a(), 1), { [l()]: [...N] };
    }), v == null || v.hide();
  }, m = py(u());
  var C = yy(), M = be(C), $ = F(M);
  const V = /* @__PURE__ */ Me(() => g(d).nameDisabled === !0);
  pt($, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return g(V);
    },
    oninput: (S) => x("name", S)
  }), q(M);
  var A = z(M, 2), O = F(A);
  {
    var B = (S) => {
      pt(S, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => x("value", N)
      });
    }, R = (S, N) => {
      {
        var H = (T) => {
          const L = /* @__PURE__ */ Me(() => [g(d).ref]);
          on(T, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(L);
            },
            expandAll: !0,
            onSelect: _
          });
        };
        xe(
          S,
          (T) => {
            g(d).refType !== "input" && T(H);
          },
          N
        );
      }
    };
    xe(O, (S) => {
      g(d).refType === "fixed" ? S(B) : S(R, !1);
    });
  }
  q(A);
  var I = z(A, 2), E = F(I);
  kn(
    Qr(E, {
      placement: "bottom",
      floating: (N) => {
        var H = my(), T = F(H), L = z(F(T));
        const Y = /* @__PURE__ */ Me(() => g(d).refType ? [g(d).refType] : []);
        on(L, {
          items: ry,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(Y);
          },
          onSelect: k
        }), q(T);
        var W = z(T, 2), G = z(F(W));
        gt(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ge) => {
            x("defaultValue", ge);
          },
          get value() {
            return g(d).defaultValue;
          }
        }), q(W);
        var U = z(W, 2), K = z(F(U));
        gt(K, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ge) => {
            x("description", ge);
          },
          get value() {
            return g(d).description;
          }
        }), q(U);
        var ue = z(U, 2), fe = F(ue);
        Ke(fe, {
          onclick: b,
          children: (ge, ae) => {
            Ve();
            var Ne = ze("删除");
            D(ge, Ne);
          },
          $$slots: { default: !0 }
        }), q(ue), q(H), D(N, H);
      },
      children: (N, H) => {
        os(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => v = N,
    () => v
  ), q(I), D(e, C);
  var P = pe({
    get parameter() {
      return s();
    },
    set parameter(S) {
      s(S), y();
    },
    get index() {
      return a();
    },
    set index(S) {
      a(S), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(S) {
      l(S), y();
    },
    get useChildrenOnly() {
      return u();
    },
    set useChildrenOnly(S) {
      u(S), y();
    }
  });
  return r(), P;
}
ce(
  Yd,
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
var _y = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), xy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), by = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Cy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  ve(t, !0), et(e, Cy);
  const [n, r] = at(), o = () => ee(g(u), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters"), a = w(t, "useChildrenOnly", 7);
  let l = wt(), u = /* @__PURE__ */ Me(() => wr(l)), c = /* @__PURE__ */ Me(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var f = by(), d = F(f);
  {
    var h = (_) => {
      var k = _y();
      Ve(4), D(_, k);
    };
    xe(d, (_) => {
      g(c).length !== 0 && _(h);
    });
  }
  var p = z(d, 2);
  Vt(
    p,
    19,
    () => g(c),
    (_) => _.id,
    (_, k, v) => {
      Yd(_, {
        get parameter() {
          return g(k);
        },
        get index() {
          return g(v);
        },
        get dataKeyName() {
          return s();
        },
        get useChildrenOnly() {
          return a();
        }
      });
    },
    (_) => {
      var k = xy(), v = F(k, !0);
      q(k), $e(() => ft(v, i())), D(_, k);
    }
  ), q(f), D(e, f);
  var x = pe({
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
    },
    get useChildrenOnly() {
      return a();
    },
    set useChildrenOnly(_) {
      a(_), y();
    }
  });
  return r(), x;
}
ce(
  Bt,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var ky = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), $y = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Sy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Fd(e, t) {
  ve(t, !0), et(e, Sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn();
  return pn(e, ct(
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
        var l = ky();
        D(a, l);
      },
      children: (a, l) => {
        var u = Ey(), c = be(u), f = F(c);
        Qe(f, {
          level: 3,
          children: (p, x) => {
            Ve();
            var _ = ze("输出参数");
            D(p, _);
          },
          $$slots: { default: !0 }
        });
        var d = z(f, 2);
        Ke(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, x) => {
            var _ = $y();
            D(p, _);
          },
          $$slots: { default: !0 }
        }), q(c);
        var h = z(c, 2);
        Bt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(Fd, { data: {} }, [], [], !0);
const Cs = (e) => JSON.parse(JSON.stringify(e));
var Py = /* @__PURE__ */ Pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ny = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), Ty = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), My = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Hy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Wd(e, t) {
  ve(t, !0), et(e, Hy);
  const [n, r] = at(), o = () => ee(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = wt(), u = /* @__PURE__ */ Me(() => wr(l)), c = /* @__PURE__ */ Me(() => {
    var T;
    let N = (T = o()) == null ? void 0 : T.data[a()], H;
    if (N && s().length > 0) {
      let L = N;
      for (let Y = 0; Y < s().length; Y++) {
        const W = s()[Y];
        Y == s().length - 1 ? H = L[W] : L = L[W].children;
      }
    }
    return { ...i(), ...H };
  });
  const { updateNodeData: f } = Yt(), d = (N, H) => {
    f(l, (T) => {
      const L = T.data[a()];
      if (L && s().length > 0) {
        let Y = L;
        for (let W = 0; W < s().length; W++) {
          const G = s()[W];
          W == s().length - 1 ? Y[G] = { ...Y[G], [N]: H } : Y = Y[G].children;
        }
      }
      return {
        [a()]: [...Cs(L)]
      };
    });
  }, h = (N, H) => {
    const T = H.target.value;
    d(N, T);
  }, p = (N) => {
    const H = N.value;
    d("dataType", H);
  };
  let x;
  const _ = () => {
    f(l, (N) => {
      let H = N.data[a()];
      if (H && s().length > 0) {
        let T = H;
        for (let L = 0; L < s().length; L++) {
          const Y = s()[L];
          L == s().length - 1 ? T.splice(Y, 1) : T = T[Y].children;
        }
      }
      return {
        [a()]: [...Cs(H)]
      };
    }), x == null || x.hide();
  }, k = () => {
    f(l, (N) => {
      let H = N.data[a()];
      if (H && s().length > 0) {
        let T = H;
        for (let L = 0; L < s().length; L++) {
          const Y = s()[L];
          L == s().length - 1 ? T[Y].children ? T[Y].children.push({
            id: pr(),
            name: "newParam",
            dataType: "String"
          }) : T[Y].children = [
            {
              id: pr(),
              name: "newParam",
              dataType: "String"
            }
          ] : T = T[Y].children;
        }
      }
      return {
        [a()]: [...Cs(H)]
      };
    });
  };
  var v = My(), b = be(v), m = F(b);
  {
    var C = (N) => {
      var H = nt(), T = be(H);
      Vt(T, 17, s, Ir, (L, Y) => {
        Ve();
        var W = ze(" ");
        D(L, W);
      }), D(N, H);
    };
    xe(m, (N) => {
      s().length > 1 && N(C);
    });
  }
  var M = z(m, 2);
  const $ = /* @__PURE__ */ Me(() => g(c).nameDisabled === !0);
  pt(M, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (N) => {
      h("name", N);
    },
    get disabled() {
      return g($);
    }
  }), q(b);
  var V = z(b, 2), A = F(V);
  const O = /* @__PURE__ */ Me(() => g(c).dataType ? [g(c).dataType] : []), B = /* @__PURE__ */ Me(() => g(c).dataTypeDisabled === !0);
  on(A, {
    items: Ld,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(O);
    },
    get disabled() {
      return g(B);
    },
    onSelect: p
  });
  var R = z(A, 2);
  {
    var I = (N) => {
      Ke(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (H, T) => {
          var L = Py();
          D(H, L);
        },
        $$slots: { default: !0 }
      });
    };
    xe(R, (N) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && N(I);
    });
  }
  q(V);
  var E = z(V, 2), P = F(E);
  kn(
    Qr(P, {
      placement: "bottom",
      floating: (H) => {
        var T = Ty(), L = F(T), Y = z(F(L));
        const W = /* @__PURE__ */ Me(() => g(c).defaultValue || "");
        gt(Y, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (ge) => {
            h("defaultValue", ge);
          }
        }), q(L);
        var G = z(L, 2), U = z(F(G));
        const K = /* @__PURE__ */ Me(() => g(c).description || "");
        gt(U, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(K);
          },
          onchange: (ge) => {
            h("description", ge);
          }
        }), q(G);
        var ue = z(G, 2);
        {
          var fe = (ge) => {
            var ae = Ny(), Ne = F(ae);
            Ke(Ne, {
              onclick: _,
              children: (we, Ee) => {
                Ve();
                var de = ze("删除");
                D(we, de);
              },
              $$slots: { default: !0 }
            }), q(ae), D(ge, ae);
          };
          xe(ue, (ge) => {
            g(c).deleteDisabled !== !0 && ge(fe);
          });
        }
        q(T), D(H, T);
      },
      children: (H, T) => {
        os(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), q(E), D(e, v);
  var S = pe({
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
  return r(), S;
}
ce(Wd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Dy = /* @__PURE__ */ ne("<!> <!>", 1), Vy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Oy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ly = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rr(e, t) {
  ve(t, !0), et(e, Ly);
  const [n, r] = at(), o = () => ee(g(u), "$node", n), i = (_, k = yt, v = yt) => {
    var b = nt(), m = be(b);
    Vt(
      m,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, M, $) => {
        var V = Dy(), A = be(V);
        const O = /* @__PURE__ */ Me(() => [...v(), g($)]);
        Wd(A, {
          get parameter() {
            return g(M);
          },
          get position() {
            return g(O);
          },
          get dataKeyName() {
            return a();
          }
        });
        var B = z(A, 2);
        {
          var R = (I) => {
            var E = /* @__PURE__ */ Ce(() => [...v(), g($)]);
            i(I, () => g(M).children, () => g(E));
          };
          xe(B, (I) => {
            g(M).children && I(R);
          });
        }
        D(C, V);
      },
      (C) => {
        var M = nt(), $ = be(M);
        {
          var V = (A) => {
            var O = Vy(), B = F(O, !0);
            q(O), $e(() => ft(B, s())), D(A, O);
          };
          xe($, (A) => {
            v().length === 0 && A(V);
          });
        }
        D(C, M);
      }
    ), D(_, b);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = wt(), u = /* @__PURE__ */ Me(() => wr(l)), c = /* @__PURE__ */ Me(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[a()]) || []];
  });
  var f = Oy(), d = F(f);
  {
    var h = (_) => {
      var k = Ay();
      Ve(4), D(_, k);
    };
    xe(d, (_) => {
      g(c).length !== 0 && _(h);
    });
  }
  var p = z(d, 2);
  i(p, () => g(c) || [], () => []), q(f), D(e, f);
  var x = pe({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(_ = "无输出参数") {
      s(_), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(_ = "outputDefs") {
      a(_), y();
    }
  });
  return r(), x;
}
ce(rr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Iy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), zy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), By = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), qy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Yy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Wy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Xd(e, t) {
  ve(t, !0), et(e, Wy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ Tt(ln([]));
  sn(async () => {
    var f, d;
    const c = await ((d = (f = s.provider) == null ? void 0 : f.llm) == null ? void 0 : d.call(f));
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = Yt(), u = (c) => {
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
  return nn(() => {
    n().outType || u("text");
  }), pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var d = Iy();
        D(f, d);
      },
      children: (f, d) => {
        var h = Fy(), p = be(h), x = F(p);
        Qe(x, {
          level: 3,
          children: (he, j) => {
            Ve();
            var _e = ze("输入参数");
            D(he, _e);
          },
          $$slots: { default: !0 }
        });
        var _ = z(x, 2);
        Ke(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (he, j) => {
            var _e = zy();
            D(he, _e);
          },
          $$slots: { default: !0 }
        }), q(p);
        var k = z(p, 2);
        Bt(k, {});
        var v = z(k, 2);
        Qe(v, {
          level: 3,
          mt: "10px",
          children: (he, j) => {
            Ve();
            var _e = ze("模型设置");
            D(he, _e);
          },
          $$slots: { default: !0 }
        });
        var b = z(v, 4), m = F(b);
        const C = /* @__PURE__ */ Me(() => n().llmId ? [n().llmId] : []);
        on(m, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (he) => {
            const j = he.value;
            l(o, () => ({ llmId: j }));
          },
          get value() {
            return g(C);
          }
        });
        var M = z(m, 2);
        os(M, {}), q(b);
        var $ = z(b, 4), V = F($), A = F(V), O = F(A);
        q(A);
        var B = z(A, 2);
        An(B), B.__input = [Ry, l, o], q(V), q($);
        var R = z($, 2), I = F(R), E = F(I), P = F(E);
        q(E);
        var S = z(E, 2);
        An(S), S.__input = [By, l, o], q(I), q(R);
        var N = z(R, 2), H = F(N), T = F(H), L = F(T);
        q(T);
        var Y = z(T, 2);
        An(Y), Y.__input = [qy, l, o], q(H), q(N);
        var W = z(N, 4), G = F(W);
        const U = /* @__PURE__ */ Me(() => n().systemPrompt || "");
        gt(G, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(U);
          },
          oninput: (he) => {
            l(o, { systemPrompt: he.target.value });
          }
        }), q(W);
        var K = z(W, 4), ue = F(K);
        const fe = /* @__PURE__ */ Me(() => n().userPrompt || "");
        gt(ue, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(fe);
          },
          oninput: (he) => {
            l(o, { userPrompt: he.target.value });
          }
        }), q(K);
        var ge = z(K, 2), ae = F(ge);
        Qe(ae, {
          level: 3,
          mt: "10px",
          children: (he, j) => {
            Ve();
            var _e = ze("输出参数");
            D(he, _e);
          },
          $$slots: { default: !0 }
        });
        var Ne = z(ae, 2);
        const we = /* @__PURE__ */ Me(() => n().outType ? [n().outType] : []);
        on(Ne, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (he) => {
            u(he.value);
          },
          get value() {
            return g(we);
          }
        });
        var Ee = z(Ne, 2);
        {
          var de = (he) => {
            Ke(he, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (j, _e) => {
                var Te = Yy();
                D(j, Te);
              },
              $$slots: { default: !0 }
            });
          };
          xe(Ee, (he) => {
            n().outType === "json" && he(de);
          });
        }
        q(ge);
        var se = z(ge, 2);
        rr(se, {}), $e(() => {
          ft(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ti(B, n().temperature ?? 0.5), ft(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), ti(S, n().topP ?? 0.9), ft(L, `Top K: ${n().topK ?? 50 ?? ""}`), ti(Y, n().topK ?? 50);
        }), D(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
Ur(["input"]);
ce(Xd, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Zy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Gy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ve(t, !0), et(e, Gy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  sn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = wt(), { addParameter: i } = Pn(), { updateNodeData: s } = Yt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Xy();
        D(u, c);
      },
      children: (u, c) => {
        var f = jy(), d = be(f), h = F(d);
        Qe(h, {
          level: 3,
          children: (B, R) => {
            Ve();
            var I = ze("输入参数");
            D(B, I);
          },
          $$slots: { default: !0 }
        });
        var p = z(h, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, R) => {
            var I = Zy();
            D(B, I);
          },
          $$slots: { default: !0 }
        }), q(d);
        var x = z(d, 2);
        Bt(x, {});
        var _ = z(x, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          children: (B, R) => {
            Ve();
            var I = ze("代码");
            D(B, I);
          },
          $$slots: { default: !0 }
        });
        var k = z(_, 4), v = F(k);
        const b = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : ["qlexpress"]);
        on(v, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (B) => {
            const R = B.value;
            s(o, () => ({ engine: R }));
          },
          get value() {
            return g(b);
          }
        }), q(k);
        var m = z(k, 4), C = F(m);
        const M = /* @__PURE__ */ Me(() => n().code || "");
        gt(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (B) => {
            s(o, () => ({ code: B.target.value }));
          },
          get value() {
            return g(M);
          }
        }), q(m);
        var $ = z(m, 2), V = F($);
        Qe(V, {
          level: 3,
          mt: "10px",
          children: (B, R) => {
            Ve();
            var I = ze("输出参数");
            D(B, I);
          },
          $$slots: { default: !0 }
        });
        var A = z(V, 2);
        Ke(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, R) => {
            var I = Ky();
            D(B, I);
          },
          $$slots: { default: !0 }
        }), q($);
        var O = z($, 2);
        rr(O, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ce(Zd, { data: {} }, [], [], !0);
var Uy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Jy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ew = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ve(t, !0), et(e, ew);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn(), { updateNodeData: s } = Yt();
  return nn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Uy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Qy(), f = be(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (M, $) => {
            Ve();
            var V = ze("输入参数");
            D(M, V);
          },
          $$slots: { default: !0 }
        });
        var h = z(d, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, $) => {
            var V = Jy();
            D(M, V);
          },
          $$slots: { default: !0 }
        }), q(f);
        var p = z(f, 2);
        Bt(p, {});
        var x = z(p, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (M, $) => {
            Ve();
            var V = ze("模板内容");
            D(M, V);
          },
          $$slots: { default: !0 }
        });
        var _ = z(x, 2), k = F(_);
        const v = /* @__PURE__ */ Me(() => n().template || "");
        gt(k, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (M) => {
            s(o, () => ({ template: M.target.value }));
          },
          get value() {
            return g(v);
          }
        }), q(_);
        var b = z(_, 2), m = F(b);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (M, $) => {
            Ve();
            var V = ze("输出参数");
            D(M, V);
          },
          $$slots: { default: !0 }
        }), q(b);
        var C = z(b, 2);
        rr(C, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ce(Kd, { data: {} }, [], [], !0);
var tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), nw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), lw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), uw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const fw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function jd(e, t) {
  ve(t, !0), et(e, fw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  sn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = wt(), { addParameter: s } = Pn(), { updateNodeData: a } = Yt();
  return pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = tw();
        D(u, c);
      },
      children: (u, c) => {
        var f = dw(), d = be(f), h = F(d);
        Qe(h, {
          level: 3,
          children: (re, ie) => {
            Ve();
            var me = ze("输入参数");
            D(re, me);
          },
          $$slots: { default: !0 }
        });
        var p = z(h, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (re, ie) => {
            var me = nw();
            D(re, me);
          },
          $$slots: { default: !0 }
        }), q(d);
        var x = z(d, 2);
        Bt(x, {});
        var _ = z(x, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          children: (re, ie) => {
            Ve();
            var me = ze("URL 地址");
            D(re, me);
          },
          $$slots: { default: !0 }
        });
        var k = z(_, 2), v = F(k), b = F(v);
        const m = /* @__PURE__ */ Me(() => n().method ? [n().method] : ["get"]);
        on(b, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (re) => {
            const ie = re.value;
            a(i, () => ({ method: ie }));
          },
          get value() {
            return g(m);
          }
        }), q(v);
        var C = z(v, 2), M = F(C);
        const $ = /* @__PURE__ */ Me(() => n().url || "");
        pt(M, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (re) => {
            a(i, () => ({ url: re.target.value }));
          },
          get value() {
            return g($);
          }
        }), q(C), q(k);
        var V = z(k, 2), A = F(V);
        Qe(A, {
          level: 3,
          children: (re, ie) => {
            Ve();
            var me = ze("Http 头信息");
            D(re, me);
          },
          $$slots: { default: !0 }
        });
        var O = z(A, 2);
        Ke(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (re, ie) => {
            var me = rw();
            D(re, me);
          },
          $$slots: { default: !0 }
        }), q(V);
        var B = z(V, 2);
        Bt(B, { dataKeyName: "headers" });
        var R = z(B, 2);
        Qe(R, {
          level: 3,
          mt: "10px",
          children: (re, ie) => {
            Ve();
            var me = ze("Body");
            D(re, me);
          },
          $$slots: { default: !0 }
        });
        var I = z(R, 2), E = F(I), P = F(E);
        const S = /* @__PURE__ */ Me(() => !n().bodyType);
        pt(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (re) => {
            var ie;
            (ie = re.target) != null && ie.checked && a(i, { bodyType: "" });
          }
        }), Ve(), q(E);
        var N = z(E, 2), H = F(N);
        const T = /* @__PURE__ */ Me(() => n().bodyType === "form-data");
        pt(H, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(T);
          },
          onchange: (re) => {
            var ie;
            (ie = re.target) != null && ie.checked && a(i, { bodyType: "form-data" });
          }
        }), Ve(), q(N);
        var L = z(N, 2), Y = F(L);
        const W = /* @__PURE__ */ Me(() => n().bodyType === "x-www-form-urlencoded");
        pt(Y, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(W);
          },
          onchange: (re) => {
            var ie;
            (ie = re.target) != null && ie.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ve(), q(L);
        var G = z(L, 2), U = F(G);
        const K = /* @__PURE__ */ Me(() => n().bodyType === "json");
        pt(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(K);
          },
          onchange: (re) => {
            var ie;
            (ie = re.target) != null && ie.checked && a(i, { bodyType: "json" });
          }
        }), Ve(), q(G);
        var ue = z(G, 2), fe = F(ue);
        const ge = /* @__PURE__ */ Me(() => n().bodyType === "raw");
        pt(fe, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ge);
          },
          onchange: (re) => {
            var ie;
            (ie = re.target) != null && ie.checked && a(i, { bodyType: "raw" });
          }
        }), Ve(), q(ue), q(I);
        var ae = z(I, 2);
        {
          var Ne = (re) => {
            var ie = iw(), me = be(ie), Ye = F(me);
            Qe(Ye, {
              level: 3,
              children: (He, oe) => {
                Ve();
                var tt = ze("参数");
                D(He, tt);
              },
              $$slots: { default: !0 }
            });
            var Ze = z(Ye, 2);
            Ke(Ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (He, oe) => {
                var tt = ow();
                D(He, tt);
              },
              $$slots: { default: !0 }
            }), q(me);
            var te = z(me, 2);
            Bt(te, { dataKeyName: "formData" }), D(re, ie);
          };
          xe(ae, (re) => {
            n().bodyType === "form-data" && re(Ne);
          });
        }
        var we = z(ae, 2);
        {
          var Ee = (re) => {
            var ie = aw(), me = be(ie), Ye = F(me);
            Qe(Ye, {
              level: 3,
              children: (He, oe) => {
                Ve();
                var tt = ze("Body 参数");
                D(He, tt);
              },
              $$slots: { default: !0 }
            });
            var Ze = z(Ye, 2);
            Ke(Ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (He, oe) => {
                var tt = sw();
                D(He, tt);
              },
              $$slots: { default: !0 }
            }), q(me);
            var te = z(me, 2);
            Bt(te, { dataKeyName: "formUrlencoded" }), D(re, ie);
          };
          xe(we, (re) => {
            n().bodyType === "x-www-form-urlencoded" && re(Ee);
          });
        }
        var de = z(we, 2);
        {
          var se = (re) => {
            var ie = lw(), me = F(ie);
            gt(me, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ye) => {
                a(i, { bodyJson: Ye.target.value });
              }
            }), q(ie), D(re, ie);
          };
          xe(de, (re) => {
            n().bodyType === "json" && re(se);
          });
        }
        var he = z(de, 2);
        {
          var j = (re) => {
            var ie = uw(), me = F(ie);
            gt(me, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ye) => {
                a(i, { bodyRaw: Ye.target.value });
              }
            }), q(ie), D(re, ie);
          };
          xe(he, (re) => {
            n().bodyType === "raw" && re(j);
          });
        }
        var _e = z(he, 2), Te = F(_e);
        Qe(Te, {
          level: 3,
          mt: "10px",
          children: (re, ie) => {
            Ve();
            var me = ze("输出参数");
            D(re, me);
          },
          $$slots: { default: !0 }
        });
        var Oe = z(Te, 2);
        Ke(Oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (re, ie) => {
            var me = cw();
            D(re, me);
          },
          $$slots: { default: !0 }
        }), q(_e);
        var qe = z(_e, 2);
        rr(qe, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ce(jd, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gd(e, t) {
  ve(t, !0), et(e, pw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ Tt(ln([]));
  sn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Yt();
  return nn(() => {
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
  }), pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = gw();
        D(c, f);
      },
      children: (c, f) => {
        var d = vw(), h = be(d), p = F(h);
        Qe(p, {
          level: 3,
          children: (I, E) => {
            Ve();
            var P = ze("输入参数");
            D(I, P);
          },
          $$slots: { default: !0 }
        });
        var x = z(p, 2);
        Ke(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, E) => {
            var P = hw();
            D(I, P);
          },
          $$slots: { default: !0 }
        }), q(h);
        var _ = z(h, 2);
        Bt(_, {});
        var k = z(_, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            Ve();
            var P = ze("知识库设置");
            D(I, P);
          },
          $$slots: { default: !0 }
        });
        var v = z(k, 4), b = F(v);
        const m = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        on(b, {
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
            return g(m);
          }
        }), q(v);
        var C = z(v, 4), M = F(C);
        pt(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const E = I.target.value;
            l(o, () => ({ keyword: E }));
          }
        }), q(C);
        var $ = z(C, 4), V = F($);
        const A = /* @__PURE__ */ Me(() => n().limit || "");
        pt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (I) => {
            const E = I.target.value;
            l(o, () => ({ limit: E }));
          },
          get value() {
            return g(A);
          }
        }), q($);
        var O = z($, 2), B = F(O);
        Qe(B, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            Ve();
            var P = ze("输出参数");
            D(I, P);
          },
          $$slots: { default: !0 }
        }), q(O);
        var R = z(O, 2);
        rr(R, {}), D(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ce(Gd, { data: {} }, [], [], !0);
var mw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), yw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const _w = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  ve(t, !0), et(e, _w);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ Tt(ln([]));
  sn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Yt();
  return nn(() => {
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
  }), pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = mw();
        D(c, f);
      },
      children: (c, f) => {
        var d = ww(), h = be(d), p = F(h);
        Qe(p, {
          level: 3,
          children: (R, I) => {
            Ve();
            var E = ze("输入参数");
            D(R, E);
          },
          $$slots: { default: !0 }
        });
        var x = z(p, 2);
        Ke(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, I) => {
            var E = yw();
            D(R, E);
          },
          $$slots: { default: !0 }
        }), q(h);
        var _ = z(h, 2);
        Bt(_, {});
        var k = z(_, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (R, I) => {
            Ve();
            var E = ze("搜索引擎设置");
            D(R, E);
          },
          $$slots: { default: !0 }
        });
        var v = z(k, 4), b = F(v);
        const m = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : []);
        on(b, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (R) => {
            const I = R.value;
            l(o, () => ({ engine: I }));
          },
          get value() {
            return g(m);
          }
        }), q(v);
        var C = z(v, 4), M = F(C);
        pt(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const I = R.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), q(C);
        var $ = z(C, 4), V = F($);
        pt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const I = R.target.value;
            l(o, () => ({ limit: I }));
          }
        }), q($);
        var A = z($, 2), O = F(A);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (R, I) => {
            Ve();
            var E = ze("输出参数");
            D(R, E);
          },
          $$slots: { default: !0 }
        }), q(A);
        var B = z(A, 2);
        rr(B, {}), D(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ce(Ud, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), bw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ne('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Jd(e, t) {
  ve(t, !0), et(e, kw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn();
  return nn(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", {
      name: "loopVar",
      nameDisabled: !0,
      deleteDisabled: !0
    });
  }), pn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = xw();
        D(l, u);
      },
      handle: (l) => {
        Jn(l, {
          type: "source",
          get position() {
            return Ae.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = Cw(), f = be(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (v, b) => {
            Ve();
            var m = ze("循环变量");
            D(v, m);
          },
          $$slots: { default: !0 }
        }), q(f);
        var h = z(f, 2);
        Bt(h, { dataKeyName: "loopVars" });
        var p = z(h, 2), x = F(p);
        Qe(x, {
          level: 3,
          children: (v, b) => {
            Ve();
            var m = ze("输出参数");
            D(v, m);
          },
          $$slots: { default: !0 }
        });
        var _ = z(x, 2);
        Ke(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, b) => {
            var m = bw();
            D(v, m);
          },
          $$slots: { default: !0 }
        }), q(p);
        var k = z(p, 2);
        Bt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(Jd, { data: {} }, [], [], !0);
const $w = {
  startNode: Rd,
  codeNode: Zd,
  llmNode: Xd,
  templateNode: Kd,
  httpNode: jd,
  knowledgeNode: Gd,
  searchEngineNode: Ud,
  loopNode: Jd,
  endNode: Fd
};
var Ew = /* @__PURE__ */ ne("<!> ", 1);
function js(e, t) {
  ve(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Ke(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const u = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          ...s()
        }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (l, u) => {
      var c = Ew(), f = be(c);
      fa(f, n);
      var d = z(f);
      $e(() => ft(d, ` ${r() ?? ""}`)), D(l, c);
    },
    $$slots: { default: !0 }
  }), pe({
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
ce(
  js,
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
var Sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Pw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Nw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Qd(e, t) {
  ve(t, !0);
  let n = /* @__PURE__ */ Tt("base"), r = /* @__PURE__ */ Tt("show");
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
  ], s = [], a = er(), l = a.customNodes;
  if (l) {
    const k = Object.keys(l).sort((v, b) => (l[v].sortNo || 0) - (l[b].sortNo || 0));
    for (let v of k)
      l[v].group === "base" ? o.push({ type: v, ...l[v] }) : s.push({
        icon: l[v].icon,
        title: l[v].title,
        type: v
      });
    o.sort((v, b) => (v.sortNo || 0) - (b.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const k = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(k)) {
      for (let v of k)
        for (let b = 0; b < o.length; b++)
          if (o[b].type === v) {
            o.splice(b, 1);
            break;
          }
    }
  }
  var u = Nw(), c = F(u), f = F(c), d = F(f);
  Cd(d, {
    style: "width: 100%",
    items: i,
    onChange: (k) => {
      J(n, k.value.toString(), !0);
    }
  }), q(f);
  var h = z(f, 2), p = F(h);
  Vt(p, 21, () => o, Ir, (k, v) => {
    js(k, ct(() => g(v)));
  }), q(p);
  var x = z(p, 2);
  Vt(x, 21, () => s, Ir, (k, v) => {
    js(k, ct(() => g(v)));
  }), q(x), q(h), q(c);
  var _ = z(c, 2);
  Ke(_, {
    onclick: () => {
      J(r, g(r) ? "" : "show", !0);
    },
    children: (k, v) => {
      var b = nt(), m = be(b);
      {
        var C = ($) => {
          var V = Sw();
          D($, V);
        }, M = ($) => {
          var V = Pw();
          D($, V);
        };
        xe(m, ($) => {
          g(r) === "show" ? $(C) : $(M, !1);
        });
      }
      D(k, b);
    },
    $$slots: { default: !0 }
  }), q(u), $e(() => {
    $t(u, 1, `tf-toolbar ${g(r) ?? ""}`), ht(p, `display: ${g(n) === "base" ? "flex" : "none"}`), ht(x, `display: ${g(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), pe();
}
ce(Qd, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = Ge();
  return {
    getNode: (n) => {
      var o;
      return (o = Z(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, Mw = () => {
  const { nodes: e } = Ge();
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
}, Hw = () => {
  const { edges: e } = Ge();
  return {
    getEdgesByTarget: (n) => Z(e).filter((o) => o.target === n)
  };
};
var Dw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ow = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Iw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), zw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), qw = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const Yw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function ef(e, t) {
  var k;
  ve(t, !0), et(e, Yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = wt(), { addParameter: i } = Pn(), s = Yt(), { updateNodeData: a } = s, l = (v) => {
    a(o, v);
  }, u = (v, b) => {
    var m;
    l({ [v]: (m = b.target) == null ? void 0 : m.value });
  }, c = { ...r, id: o, data: n() }, f = document.createElement("div"), h = er().customNodes[t.type];
  (k = h.render) == null || k.call(h, f, c, s);
  const p = h.forms;
  let x;
  nn(() => {
    n().expand && x && x.append(f);
  }), nn(() => {
    var v;
    n() && ((v = h.onUpdate) == null || v.call(h, f, { ...c, data: n() }));
  }), nn(() => {
    !n().parameters && h.parameters && l({
      parameters: Di(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), nn(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Di(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const _ = /* @__PURE__ */ Me(() => ({
    ...n(),
    description: h.description
  }));
  return pn(e, ct(
    {
      get data() {
        return g(_);
      }
    },
    () => r,
    {
      icon: (b) => {
        var m = nt(), C = be(m);
        fa(C, () => h.icon), D(b, m);
      },
      children: (b, m) => {
        var C = qw(), M = be(C);
        {
          var $ = (I) => {
            var E = Vw(), P = be(E), S = F(P);
            Qe(S, {
              level: 3,
              children: (L, Y) => {
                Ve();
                var W = ze("输入参数");
                D(L, W);
              },
              $$slots: { default: !0 }
            });
            var N = z(S, 2);
            {
              var H = (L) => {
                Ke(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (Y, W) => {
                    var G = Dw();
                    D(Y, G);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(N, (L) => {
                h.parametersAddEnable !== !1 && L(H);
              });
            }
            q(P);
            var T = z(P, 2);
            Bt(T, {}), D(I, E);
          };
          xe(M, (I) => {
            h.parametersEnable !== !1 && I($);
          });
        }
        var V = z(M, 2);
        {
          var A = (I) => {
            var E = nt(), P = be(E);
            Vt(P, 17, () => p, Ir, (S, N) => {
              var H = nt(), T = be(H);
              {
                var L = (W) => {
                  var G = Aw(), U = be(G), K = F(U, !0);
                  q(U);
                  var ue = z(U, 2), fe = F(ue);
                  const ge = /* @__PURE__ */ Me(() => n()[g(N).name] || g(N).defaultValue);
                  pt(fe, ct(
                    {
                      get placeholder() {
                        return g(N).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return g(ge);
                      }
                    },
                    () => g(N).attrs,
                    {
                      onchange: (ae) => {
                        u(g(N).name, ae);
                      }
                    }
                  )), q(ue), $e(() => ft(K, g(N).label)), D(W, G);
                }, Y = (W, G) => {
                  {
                    var U = (ue) => {
                      var fe = Ow(), ge = be(fe), ae = F(ge, !0);
                      q(ge);
                      var Ne = z(ge, 2), we = F(Ne);
                      const Ee = /* @__PURE__ */ Me(() => n()[g(N).name] || g(N).defaultValue);
                      gt(we, ct(
                        {
                          rows: 3,
                          get placeholder() {
                            return g(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return g(Ee);
                          }
                        },
                        () => g(N).attrs,
                        {
                          onchange: (de) => {
                            u(g(N).name, de);
                          }
                        }
                      )), q(Ne), $e(() => ft(ae, g(N).label)), D(ue, fe);
                    }, K = (ue, fe) => {
                      {
                        var ge = (Ne) => {
                          var we = Lw(), Ee = be(we), de = F(Ee, !0);
                          q(Ee);
                          var se = z(Ee, 2), he = F(se), j = F(he), _e = F(j);
                          q(j);
                          var Te = z(j, 2);
                          An(Te);
                          var Oe = (re) => l({
                            [g(N).name]: parseFloat(re.target.value)
                          });
                          let qe;
                          q(he), q(se), $e(() => {
                            ft(de, g(N).label), ft(_e, `${g(N).description ?? ""}: ${n()[g(N).name] ?? g(N).defaultValue ?? ""}`), qe = Gt(
                              Te,
                              qe,
                              {
                                class: "nodrag",
                                type: "range",
                                ...g(N).attrs,
                                value: n()[g(N).name] ?? g(N).defaultValue,
                                oninput: Oe
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(Ne, we);
                        }, ae = (Ne, we) => {
                          {
                            var Ee = (se) => {
                              var he = Iw(), j = be(he), _e = F(j, !0);
                              q(j);
                              var Te = z(j, 2), Oe = F(Te);
                              const qe = /* @__PURE__ */ Me(() => g(N).options || []), re = /* @__PURE__ */ Me(() => n()[g(N).name] ? [n()[g(N).name]] : [g(N).defaultValue]);
                              on(Oe, {
                                get items() {
                                  return g(qe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return g(N).placeholder;
                                },
                                onSelect: (ie) => {
                                  const me = ie.value;
                                  l({ [g(N).name]: me });
                                },
                                get value() {
                                  return g(re);
                                }
                              }), q(Te), $e(() => ft(_e, g(N).label)), D(se, he);
                            }, de = (se, he) => {
                              {
                                var j = (Te) => {
                                  var Oe = zw(), qe = be(Oe), re = F(qe, !0);
                                  q(qe);
                                  var ie = z(qe, 2), me = F(ie);
                                  const Ye = /* @__PURE__ */ Me(() => {
                                    var Ze;
                                    return (Ze = g(N).chosen) == null ? void 0 : Ze.buttonText;
                                  });
                                  bd(me, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return g(N).placeholder;
                                    },
                                    get buttonText() {
                                      return g(Ye);
                                    },
                                    onChosen: (Ze, te, He) => {
                                      var oe, tt;
                                      (tt = (oe = g(N).chosen) == null ? void 0 : oe.onChosen) == null || tt.call(oe, l, Ze, te, He);
                                    },
                                    get value() {
                                      var Ze;
                                      return n()[((Ze = g(N).chosen) == null ? void 0 : Ze.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var Ze;
                                      return n()[((Ze = g(N).chosen) == null ? void 0 : Ze.labelDataKey) || ""];
                                    }
                                  }), q(ie), $e(() => ft(re, g(N).label)), D(Te, Oe);
                                }, _e = (Te, Oe) => {
                                  {
                                    var qe = (re) => {
                                      Qe(re, ct({ level: 3, mt: "10px" }, () => g(N).attrs, {
                                        children: (ie, me) => {
                                          Ve();
                                          var Ye = ze();
                                          $e(() => ft(Ye, g(N).label)), D(ie, Ye);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    xe(
                                      Te,
                                      (re) => {
                                        g(N).type === "heading" && re(qe);
                                      },
                                      Oe
                                    );
                                  }
                                };
                                xe(
                                  se,
                                  (Te) => {
                                    g(N).type === "chosen" ? Te(j) : Te(_e, !1);
                                  },
                                  he
                                );
                              }
                            };
                            xe(
                              Ne,
                              (se) => {
                                g(N).type === "select" ? se(Ee) : se(de, !1);
                              },
                              we
                            );
                          }
                        };
                        xe(
                          ue,
                          (Ne) => {
                            g(N).type === "slider" ? Ne(ge) : Ne(ae, !1);
                          },
                          fe
                        );
                      }
                    };
                    xe(
                      W,
                      (ue) => {
                        g(N).type === "textarea" ? ue(U) : ue(K, !1);
                      },
                      G
                    );
                  }
                };
                xe(T, (W) => {
                  g(N).type === "input" ? W(L) : W(Y, !1);
                });
              }
              D(S, H);
            }), D(I, E);
          };
          xe(V, (I) => {
            p && I(A);
          });
        }
        var O = z(V, 2);
        kn(O, (I) => x = I, () => x);
        var B = z(O, 2);
        {
          var R = (I) => {
            var E = Bw(), P = be(E), S = F(P);
            Qe(S, {
              level: 3,
              mt: "10px",
              children: (L, Y) => {
                Ve();
                var W = ze("输出参数");
                D(L, W);
              },
              $$slots: { default: !0 }
            });
            var N = z(S, 2);
            {
              var H = (L) => {
                Ke(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (Y, W) => {
                    var G = Rw();
                    D(Y, G);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(N, (L) => {
                h.outputDefsAddEnable !== !1 && L(H);
              });
            }
            q(P);
            var T = z(P, 2);
            rr(T, {}), D(I, E);
          };
          xe(B, (I) => {
            h.outputDefsEnable !== !1 && I(R);
          });
        }
        $e(() => {
          ht(O, h.rootStyle || ""), $t(O, 1, hn(h.rootClass), "svelte-q0cqsa");
        }), D(b, C);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(v) {
      n(v), y();
    }
  });
}
ce(ef, { data: {} }, [], [], !0);
const Fw = () => {
  const e = Ge();
  return {
    updateEdgeData: (n, r, o) => {
      const i = Z(e.edgeLookup).get(n);
      if (!i)
        return;
      const s = typeof r == "function" ? r(i) : r;
      i.data = o != null && o.replace ? s : { ...i.data, ...s }, e.edges.update(
        (a) => a.map((l) => l.id === n ? i : l)
      );
    }
  };
}, Ww = () => {
  const { edges: e } = Ge();
  return {
    deleteEdge: (n) => {
      e.update((r) => r.filter((o) => o.id !== n));
    }
  };
};
var Xw = /* @__PURE__ */ ne('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Zw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), Kw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const jw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function tf(e, t) {
  ve(t, !0), et(e, jw);
  const [n, r] = at(), o = () => ee(A, "$nodes", n), i = () => ee(O, "$edges", n), s = () => ee(B, "$viewport", n), a = w(t, "onInit", 7), l = Yt();
  a()(l);
  let u = /* @__PURE__ */ Tt(!1), c = /* @__PURE__ */ Tt(void 0);
  const { updateEdgeData: f } = Fw(), d = (T) => {
    T.preventDefault(), T.dataTransfer && (T.dataTransfer.dropEffect = "move");
  }, h = (T) => {
    var U;
    T.preventDefault();
    const L = l.screenToFlowPosition({
      x: T.clientX - 250,
      y: T.clientY - 100
    }), Y = (U = T.dataTransfer) == null ? void 0 : U.getData("application/tinyflow");
    if (!Y)
      return;
    const W = JSON.parse(Y), G = {
      id: `node_${pr()}`,
      position: L,
      data: {},
      ...W
    };
    ai.addNode(G), ai.selectNodeOnly(G.id);
  }, { getNode: p } = Tw(), x = (T) => {
    const L = p(T.source), Y = p(T.target);
    if (T.sourceHandle === "loop_handle" || L.parentId) {
      const W = l.getEdges();
      for (let G of W)
        if (G.target === T.target) {
          const U = p(G.source);
          if (T.sourceHandle === "loop_handle" && U.parentId !== L.id || L.parentId && U.parentId !== L.parentId)
            return !1;
        }
    }
    return !(!L.parentId && Y.parentId && Y.parentId !== L.id);
  }, { ensureParentInNodesBefore: _ } = Mw(), k = (T, L) => {
    if (!L.isValid)
      return;
    const Y = L.toNode;
    if (Y.parentId)
      return;
    const W = L.fromNode, G = L.fromHandle, U = { position: { ...Y.position } };
    if (G.id === "loop_handle" ? U.parentId = W.id : W.parentId && (U.parentId = W.parentId), U.parentId) {
      const K = p(U.parentId);
      U.position = {
        x: Y.position.x - K.position.x,
        y: Y.position.y - K.position.y
      }, _(U.parentId, Y.id), l.updateNode(Y.id, U);
    }
  }, { getEdgesByTarget: v } = Hw(), b = (T) => {
    T.edges.forEach((Y) => {
      var G;
      Y.id === ((G = g(c)) == null ? void 0 : G.id) && (J(c, null), J(u, !1));
      const W = p(Y.target);
      if (W && W.parentId) {
        const U = v(Y.target), K = p(W.parentId);
        if (U.length === 0)
          l.updateNode(W.id, {
            parentId: void 0,
            position: {
              x: W.position.x + K.position.x,
              y: W.position.y + K.position.y
            }
          });
        else {
          let ue = !1;
          for (let fe = 0; fe < U.length; fe++) {
            const ge = U[fe], ae = p(ge.source);
            if (ae.parentId || ae.type === "loopNode") {
              ue = !0;
              break;
            }
          }
          ue || l.updateNode(W.id, {
            parentId: void 0,
            position: {
              x: W.position.x + K.position.x,
              y: W.position.y + K.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: m } = Ww(), C = (T, L) => {
  }, M = (T) => {
  }, $ = {}, V = er().customNodes;
  if (V)
    for (let T of Object.keys(V))
      $[T] = ef;
  const { nodes: A, edges: O, viewport: B } = Ge(), R = er().onDataChange;
  R && (A.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "nodesChange" }
    );
  }), O.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "edgesChange" }
    );
  }), B.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var I = Kw(), E = F(I);
  const P = /* @__PURE__ */ Me(() => ({ ...$w, ...$ })), S = /* @__PURE__ */ Me(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  ad(E, ct(
    {
      get nodeTypes() {
        return g(P);
      }
    },
    ai,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: k,
      onconnectstart: C,
      onconnect: M,
      connectionRadius: 50,
      onedgecreate: (T) => ({ ...T, id: pr() }),
      ondelete: b,
      onclick: (T) => {
        const L = T.target;
        L.classList.contains("svelte-flow__edge-interaction") || L.classList.contains("panel-content") || L.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return g(S);
      },
      $$events: {
        drop: h,
        dragover: d,
        edgeclick: (T) => {
          J(u, !0), J(c, T.detail.edge, !0);
        }
      },
      children: (T, L) => {
        var Y = Zw(), W = be(Y);
        md(W, {});
        var G = z(W, 2);
        hd(G, {});
        var U = z(G, 2);
        wd(U, {});
        var K = z(U, 2);
        {
          var ue = (fe) => {
            Ro(fe, {
              children: (ge, ae) => {
                var Ne = Xw(), we = z(F(Ne), 4), Ee = F(we);
                const de = /* @__PURE__ */ Me(() => {
                  var _e, Te;
                  return (Te = (_e = g(c)) == null ? void 0 : _e.data) == null ? void 0 : Te.condition;
                });
                gt(Ee, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(de);
                  },
                  onchange: (_e) => {
                    var Te;
                    g(c) && f(g(c).id, { condition: (Te = _e.target) == null ? void 0 : Te.value });
                  }
                }), q(we);
                var se = z(we, 2), he = F(se);
                Ke(he, {
                  onclick: () => {
                    var _e;
                    m((_e = g(c)) == null ? void 0 : _e.id), J(u, !1);
                  },
                  children: (_e, Te) => {
                    Ve();
                    var Oe = ze("删除");
                    D(_e, Oe);
                  },
                  $$slots: { default: !0 }
                });
                var j = z(he, 2);
                Ke(j, {
                  primary: !0,
                  onclick: () => {
                    J(u, !1);
                  },
                  children: (_e, Te) => {
                    Ve();
                    var Oe = ze("保存");
                    D(_e, Oe);
                  },
                  $$slots: { default: !0 }
                }), q(se), q(Ne), D(ge, Ne);
              },
              $$slots: { default: !0 }
            });
          };
          xe(K, (fe) => {
            g(u) && fe(ue);
          });
        }
        D(T, Y);
      },
      $$slots: { default: !0 }
    }
  ));
  var N = z(E, 2);
  Qd(N, {}), q(I), D(e, I);
  var H = pe({
    get onInit() {
      return a();
    },
    set onInit(T) {
      a(T), y();
    }
  });
  return r(), H;
}
ce(tf, { onInit: {} }, [], [], !0);
function Gw(e, t) {
  ve(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ai.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Lr("tinyflow_options", n()), ld(e, {
    fitView: !0,
    children: (i, s) => {
      tf(i, {
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
customElements.define("tinyflow-component", ce(Gw, { options: {}, onInit: {} }, [], [], !1));
export {
  n_ as Tinyflow
};
//# sourceMappingURL=index.js.map
