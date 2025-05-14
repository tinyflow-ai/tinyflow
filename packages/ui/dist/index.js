var pf = Object.defineProperty;
var Ba = (e) => {
  throw TypeError(e);
};
var mf = (e, t, n) => t in e ? pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $t = (e, t, n) => mf(e, typeof t != "symbol" ? t + "" : t, n), as = (e, t, n) => t.has(e) || Ba("Cannot " + n);
var dt = (e, t, n) => (as(e, t, "read from private field"), n ? n.call(e) : t.get(e)), or = (e, t, n) => t.has(e) ? Ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ro = (e, t, n, r) => (as(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), qa = (e, t, n) => (as(e, t, "access private method"), n);
const yf = "5";
var Ul;
typeof window < "u" && ((Ul = window.__svelte ?? (window.__svelte = {})).v ?? (Ul.v = /* @__PURE__ */ new Set())).add(yf);
let Xr = !1, wf = !1;
function _f() {
  Xr = !0;
}
_f();
const Us = 1, js = 2, jl = 4, xf = 8, bf = 16, Cf = 1, kf = 2, Jl = 4, $f = 8, Ef = 16, Ql = 1, Sf = 2, Js = "[", Qs = "[!", ea = "]", kr = {}, Vt = Symbol(), Pf = "http://www.w3.org/1999/xhtml", Nf = "http://www.w3.org/2000/svg", Ya = !1;
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, Tf = Array.prototype.indexOf, ta = Array.from, li = Object.keys, ho = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, eu = Object.getOwnPropertyDescriptors, Mf = Object.prototype, Hf = Array.prototype, na = Object.getPrototypeOf, Fa = Object.isExtensible;
function oo(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Df(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, tu = 4, Li = 8, ra = 16, In = 32, pr = 64, ui = 128, Ft = 256, ci = 512, Tt = 1024, _n = 2048, tr = 4096, Vn = 8192, Ii = 16384, Vf = 32768, Zr = 65536, Af = 1 << 17, Of = 1 << 19, nu = 1 << 20, ks = 1 << 21, Wn = Symbol("$state"), oa = Symbol("legacy props"), Lf = Symbol("");
function If(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function Yt(e) {
  He = e;
}
let Ye;
function Pt(e) {
  if (e === null)
    throw zi(), kr;
  return Ye = e;
}
function xn() {
  return Pt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Ye)
  );
}
function Y(e) {
  if (He) {
    if (/* @__PURE__ */ En(Ye) !== null)
      throw zi(), kr;
    Ye = e;
  }
}
function Ve(e = 1) {
  if (He) {
    for (var t = e, n = Ye; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Ye = n;
  }
}
function $s() {
  for (var e = 0, t = Ye; ; ) {
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
function an(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = na(e);
  if (t !== Mf && t !== Hf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ St(0), i = nt, s = (a) => {
    var l = nt;
    bn(i);
    var u = a();
    return bn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ St(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ff();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ St(u.value)), n.set(l, c)) : j(
          c,
          s(() => an(u.value))
        ), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0)
          l in a && (n.set(
            l,
            s(() => /* @__PURE__ */ St(Vt))
          ), ls(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && j(c, f);
          }
          j(u, Vt), ls(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Wn)
          return e;
        var c = n.get(l), f = l in a;
        if (c === void 0 && (!f || (h = Dn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ St(an(f ? a[l] : Vt))), n.set(l, c)), c !== void 0) {
          var d = g(c);
          return d === Vt ? void 0 : d;
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
          if (f !== void 0 && d !== Vt)
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
        var u = n.get(l), c = u !== void 0 && u.v !== Vt || Reflect.has(a, l);
        if (u !== void 0 || Ue !== null && (!c || (d = Dn(a, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ St(c ? an(a[l]) : Vt)), n.set(l, u));
          var f = g(u);
          if (f === Vt)
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
            p !== void 0 ? j(p, Vt) : h in a && (p = s(() => /* @__PURE__ */ St(Vt)), n.set(h + "", p));
          }
        f === void 0 ? (!d || (v = Dn(a, l)) != null && v.writable) && (f = s(() => /* @__PURE__ */ St(void 0)), j(
          f,
          s(() => an(u))
        ), n.set(l, f)) : (d = f.v !== Vt, j(
          f,
          s(() => an(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(a, l);
        if (x != null && x.set && x.set.call(c, u), !d) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= _.v && j(_, k + 1);
          }
          ls(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var d = n.get(f);
          return d === void 0 || d.v !== Vt;
        });
        for (var [u, c] of n)
          c.v !== Vt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Wf();
      }
    }
  );
}
function ls(e, t = 1) {
  j(e, e.v + t);
}
var At, ru, ou, iu;
function Es() {
  if (At === void 0) {
    At = window, ru = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ou = Dn(t, "firstChild").get, iu = Dn(t, "nextSibling").get, Fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fa(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return ou.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return iu.call(e);
}
function F(e, t) {
  if (!He)
    return /* @__PURE__ */ vt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(Ye)
  );
  if (n === null)
    n = Ye.appendChild(On());
  else if (t && n.nodeType !== 3) {
    var r = On();
    return n == null || n.before(r), Pt(r), r;
  }
  return Pt(n), n;
}
function xe(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ vt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Ye;
}
function B(e, t = 1, n = !1) {
  let r = He ? Ye : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!He)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = On();
    return r === null ? o == null || o.after(s) : r.before(s), Pt(s), s;
  }
  return Pt(r), /** @type {TemplateNode} */
  r;
}
function ia(e) {
  e.textContent = "";
}
function su(e) {
  return e === this.v;
}
function sa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function aa(e) {
  return !sa(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  var t = un | _n, n = nt !== null && (nt.f & un) !== 0 ? (
    /** @type {Derived} */
    nt
  ) : null;
  return Ue === null || n !== null && (n.f & Ft) !== 0 ? t |= Ft : Ue.f |= nu, {
    ctx: Ke,
    deps: null,
    effects: null,
    equals: su,
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
function Te(e) {
  const t = /* @__PURE__ */ Dr(e);
  return wu(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Dr(e);
  return t.equals = aa, t;
}
function au(e) {
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
function Zf(e) {
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
function lu(e) {
  var t, n = Ue;
  jn(Zf(e));
  try {
    au(e), t = Cu(e);
  } finally {
    jn(n);
  }
  return t;
}
function uu(e) {
  var t = lu(e), n = (Yn || (e.f & Ft) !== 0) && e.deps !== null ? tr : Tt;
  en(e, n), e.equals(t) || (e.v = t, e.wv = xu());
}
function cu(e) {
  Ue === null && nt === null && Rf(), nt !== null && (nt.f & Ft) !== 0 && Ue === null && zf(), Do && If();
}
function Kf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mr(e, t, n, r = !0) {
  var o = Ue, i = {
    ctx: Ke,
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
      Bi(i), i.f |= Vf;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && qi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (nu | ui)) === 0;
  if (!s && r && (o !== null && Kf(i, o), nt !== null && (nt.f & un) !== 0)) {
    var a = (
      /** @type {Derived} */
      nt
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function la(e) {
  const t = mr(Li, null, !1);
  return en(t, Tt), t.teardown = e, t;
}
function Qt(e) {
  cu();
  var t = Ue !== null && (Ue.f & In) !== 0 && Ke !== null && !Ke.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ke
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ue,
      reaction: nt
    });
  } else {
    var r = qt(e);
    return r;
  }
}
function Gf(e) {
  return cu(), Kr(e);
}
function Uf(e) {
  const t = mr(pr, e, !0);
  return () => {
    cn(t);
  };
}
function jf(e) {
  const t = mr(pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function qt(e) {
  return mr(tu, e, !1);
}
function ye(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, j(n.l.r2, !0), Cn(t));
  });
}
function wt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ke
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Tt) !== 0 && en(n, tr), Ur(n) && Bi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return mr(Li, e, !0);
}
function ke(e, t = [], n = Dr) {
  const r = t.map(n);
  return Gr(() => e(...r.map(g)));
}
function Gr(e, t = 0) {
  return mr(Li | ra | t, e, !0);
}
function Un(e, t = !0) {
  return mr(Li | In, e, !0, t);
}
function du(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Do, r = nt;
    Xa(!0), bn(null);
    try {
      t.call(null);
    } finally {
      Xa(n), bn(r);
    }
  }
}
function fu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & pr) !== 0 ? n.parent = null : cn(n, t), n = r;
  }
}
function Jf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & In) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Of) !== 0) && e.nodes_start !== null && (gu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), fu(e, t && !n), hi(e, 0), en(e, Ii);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  du(e);
  var o = e.parent;
  o !== null && o.first !== null && hu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function gu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(e)
    );
    e.remove(), e = n;
  }
}
function hu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Vr(e, t) {
  var n = [];
  ua(e, n, !0), vu(n, () => {
    cn(e), t && t();
  });
}
function vu(e, t) {
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
      var o = r.next, i = (r.f & Zr) !== 0 || (r.f & In) !== 0;
      ua(r, t, i ? n : !1), r = o;
    }
  }
}
function po(e) {
  pu(e, !0);
}
function pu(e, t) {
  if ((e.f & Vn) !== 0) {
    e.f ^= Vn, (e.f & Tt) === 0 && (e.f ^= Tt), Ur(e) && (en(e, _n), qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & In) !== 0;
      pu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Qf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let mo = [], yo = [];
function mu() {
  var e = mo;
  mo = [], vo(e);
}
function yu() {
  var e = yo;
  yo = [], vo(e);
}
function Ho(e) {
  mo.length === 0 && queueMicrotask(mu), mo.push(e);
}
function e1(e) {
  yo.length === 0 && Qf(yu), yo.push(e);
}
function Wa() {
  mo.length > 0 && mu(), yo.length > 0 && yu();
}
let ei = !1, di = !1, fi = null, ar = !1, Do = !1;
function Xa(e) {
  Do = e;
}
let go = [];
let nt = null, mn = !1;
function bn(e) {
  nt = e;
}
let Ue = null;
function jn(e) {
  Ue = e;
}
let Nt = null;
function wu(e) {
  nt !== null && nt.f & ks && (Nt === null ? Nt = [e] : Nt.push(e));
}
let Et = null, Bt = 0, Ut = null;
function t1(e) {
  Ut = e;
}
let _u = 1, gi = 0, Yn = !1;
function xu() {
  return ++_u;
}
function Ur(e) {
  var f;
  var t = e.f;
  if ((t & _n) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Ft) !== 0;
    if (n !== null) {
      var o, i, s = (t & ci) !== 0, a = r && Ue !== null && !Yn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ci), a && c !== null && (c.f & Ft) === 0 && (u.f ^= Ft);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Ur(
          /** @type {Derived} */
          i
        ) && uu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ue !== null && !Yn) && en(e, Tt);
  }
  return !1;
}
function n1(e, t) {
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
  if (n !== null && (ei = !0), n1(e, t), Za(t))
    throw e;
}
function bu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Nt != null && Nt.includes(e) || ((i.f & un) !== 0 ? bu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? en(i, _n) : (i.f & Tt) !== 0 && en(i, tr), qi(
        /** @type {Effect} */
        i
      )));
    }
}
function Cu(e) {
  var h;
  var t = Et, n = Bt, r = Ut, o = nt, i = Yn, s = Nt, a = Ke, l = mn, u = e.f;
  Et = /** @type {null | Value[]} */
  null, Bt = 0, Ut = null, Yn = (u & Ft) !== 0 && (mn || !ar || nt === null), nt = (u & (In | pr)) === 0 ? e : null, Nt = null, Ga(e.ctx), mn = !1, gi++, e.f |= ks;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Et !== null) {
      var d;
      if (hi(e, Bt), f !== null && Bt > 0)
        for (f.length = Bt + Et.length, d = 0; d < Et.length; d++)
          f[Bt + d] = Et[d];
      else
        e.deps = f = Et;
      if (!Yn)
        for (d = Bt; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && Bt < f.length && (hi(e, Bt), f.length = Bt);
    if (Yi() && Ut !== null && !mn && f !== null && (e.f & (un | tr | _n)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Ut.length; d++)
        bu(
          Ut[d],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (gi++, Ut !== null && (r === null ? r = Ut : r.push(.../** @type {Source[]} */
    Ut))), c;
  } finally {
    Et = t, Bt = n, Ut = r, nt = o, Yn = i, Nt = s, Ga(a), mn = l, e.f ^= ks;
  }
}
function r1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Tf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Et === null || !Et.includes(t)) && (en(t, tr), (t.f & (Ft | ci)) === 0 && (t.f ^= ci), au(
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
      r1(e, n[r]);
}
function Bi(e) {
  var t = e.f;
  if ((t & Ii) === 0) {
    en(e, Tt);
    var n = Ue, r = Ke, o = ar;
    Ue = e, ar = !0;
    try {
      (t & ra) !== 0 ? Jf(e) : fu(e), du(e);
      var i = Cu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _u;
      var s = e.deps, a;
      Ya && wf && e.f & _n;
    } catch (l) {
      Ri(l, e, n, r || e.ctx);
    } finally {
      ar = o, Ue = n;
    }
  }
}
function o1() {
  try {
    Bf();
  } catch (e) {
    if (fi !== null)
      Ri(e, fi, null);
    else
      throw e;
  }
}
function ku() {
  var e = ar;
  try {
    var t = 0;
    for (ar = !0; go.length > 0; ) {
      t++ > 1e3 && o1();
      var n = go, r = n.length;
      go = [];
      for (var o = 0; o < r; o++) {
        var i = s1(n[o]);
        i1(i);
      }
      wo.clear();
    }
  } finally {
    di = !1, ar = e, fi = null;
  }
}
function i1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ii | Vn)) === 0)
        try {
          Ur(r) && (Bi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? hu(r) : r.fn = null));
        } catch (o) {
          Ri(o, r, null, r.ctx);
        }
    }
}
function qi(e) {
  di || (di = !0, queueMicrotask(ku));
  for (var t = fi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (pr | In)) !== 0) {
      if ((n & Tt) === 0) return;
      t.f ^= Tt;
    }
  }
  go.push(t);
}
function s1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (In | pr)) !== 0, i = o && (r & Tt) !== 0;
    if (!i && (r & Vn) === 0) {
      if ((r & tu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Tt;
      else
        try {
          Ur(n) && Bi(n);
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
    di = !0, ku(), Wa();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & un) !== 0;
  if (nt !== null && !mn) {
    if (!(Nt != null && Nt.includes(e))) {
      var r = nt.deps;
      e.rv < gi && (e.rv = gi, Et === null && r !== null && r[Bt] === e ? Bt++ : Et === null ? Et = [e] : (!Yn || !Et.includes(e)) && Et.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Ft) === 0 && (o.f ^= Ft);
  }
  return n && (o = /** @type {Derived} */
  e, Ur(o) && uu(o)), Do && wo.has(e) ? wo.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const a1 = -7169;
function en(e, t) {
  e.f = e.f & a1 | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      Ss(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && Ss(n);
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
      const r = eu(n);
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
function Ar(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: su,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function St(e, t) {
  const n = Ar(e);
  return wu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ae(e, t = !1) {
  var r;
  const n = Ar(e);
  return t || (n.equals = aa), Xr && Ke !== null && Ke.l !== null && ((r = Ke.l).s ?? (r.s = [])).push(n), n;
}
function j(e, t, n = !1) {
  nt !== null && !mn && Yi() && (nt.f & (un | ra)) !== 0 && !(Nt != null && Nt.includes(e)) && Xf();
  let r = n ? an(t) : t;
  return Ps(e, r);
}
function Ps(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Do ? wo.set(e, t) : wo.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & _n) !== 0 && lu(
      /** @type {Derived} */
      e
    ), en(e, (e.f & Ft) === 0 ? Tt : tr)), e.wv = xu(), $u(e, _n), Yi() && Ue !== null && (Ue.f & Tt) !== 0 && (Ue.f & (In | pr)) === 0 && (Ut === null ? t1([e]) : Ut.push(e));
  }
  return t;
}
function Ka(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return j(e, n), r;
}
function $u(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Yi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & _n) === 0 && (!r && s === Ue || (en(s, t), (a & (Tt | Ft)) !== 0 && ((a & un) !== 0 ? $u(
        /** @type {Derived} */
        s,
        tr
      ) : qi(
        /** @type {Effect} */
        s
      ))));
    }
}
let Ke = null;
function Ga(e) {
  Ke = e;
}
function cr(e) {
  return (
    /** @type {T} */
    ca().get(e)
  );
}
function Or(e, t) {
  return ca().set(e, t), t;
}
function l1(e) {
  return ca().has(e);
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
  Xr && !t && (Ke.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ar(!1)
  }), la(() => {
    r.d = !0;
  });
}
function he(e) {
  const t = Ke;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ue, r = nt;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          jn(i.effect), bn(i.reaction), qt(i.fn);
        }
      } finally {
        jn(n), bn(r);
      }
    }
    Ke = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yi() {
  return !Xr || Ke !== null && Ke.l === null;
}
function ca(e) {
  return Ke === null && Oi(), Ke.c ?? (Ke.c = new Map(u1(Ke) || void 0));
}
function u1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function c1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const d1 = [
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
function f1(e) {
  return d1.includes(e);
}
const g1 = {
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
function h1(e) {
  return e = e.toLowerCase(), g1[e] ?? e;
}
const v1 = ["touchstart", "touchmove"];
function p1(e) {
  return v1.includes(e);
}
const m1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function y1(e) {
  return m1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function w1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Ho(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function _1(e) {
  He && /* @__PURE__ */ vt(e) !== null && ia(e);
}
let Ua = !1;
function x1() {
  Ua || (Ua = !0, document.addEventListener(
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
function b1(e) {
  var t = nt, n = Ue;
  bn(null), jn(null);
  try {
    return e();
  } finally {
    bn(t), jn(n);
  }
}
const Eu = /* @__PURE__ */ new Set(), Ns = /* @__PURE__ */ new Set();
function Su(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || lo.call(t, i), !i.cancelBubble)
      return b1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ho(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function rt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Su(e, t, n, i);
  (t === document.body || t === window || t === document) && la(() => {
    t.removeEventListener(e, s, i);
  });
}
function jr(e) {
  for (var t = 0; t < e.length; t++)
    Eu.add(e[t]);
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
    var c = nt, f = Ue;
    bn(null), jn(null);
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
      e.__root = t, delete e.currentTarget, bn(c), jn(f);
    }
  }
}
function da(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function It(e, t) {
  var n = (
    /** @type {Effect} */
    Ue
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Ql) !== 0, r = (t & Sf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return It(Ye, null), Ye;
    o === void 0 && (o = da(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ vt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ru ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      It(a, l);
    } else
      It(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ql) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (He)
      return It(Ye, null), Ye;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        da(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ vt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ vt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ vt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ vt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      It(c, f);
    } else
      It(u, u);
    return u;
  };
}
function qe(e = "") {
  if (!He) {
    var t = On(e + "");
    return It(t, t), t;
  }
  var n = Ye;
  return n.nodeType !== 3 && (n.before(n = On()), Pt(n)), It(n, n), n;
}
function tt() {
  if (He)
    return It(Ye, null), Ye;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), It(t, n), e;
}
function D(e, t) {
  if (He) {
    Ue.nodes_end = Ye, xn();
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
function Pu(e, t) {
  return Nu(e, t);
}
function C1(e, t) {
  Es(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = Ye;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Js); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw kr;
    Yt(!0), Pt(
      /** @type {Comment} */
      i
    ), xn();
    const s = Nu(e, { ...t, anchor: i });
    if (Ye === null || Ye.nodeType !== 8 || /** @type {Comment} */
    Ye.data !== ea)
      throw zi(), kr;
    return Yt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === kr)
      return t.recover === !1 && qf(), Es(), ia(n), Yt(!1), Pu(e, t);
    throw s;
  } finally {
    Yt(r), Pt(o);
  }
}
const _r = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Es();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!a.has(h)) {
        a.add(h);
        var p = p1(h);
        t.addEventListener(h, lo, { passive: p });
        var x = _r.get(h);
        x === void 0 ? (document.addEventListener(h, lo, { passive: p }), _r.set(h, 1)) : _r.set(h, x + 1);
      }
    }
  };
  l(ta(Eu)), Ns.add(l);
  var u = void 0, c = jf(() => {
    var f = n ?? t.appendChild(On());
    return Un(() => {
      if (i) {
        ge({});
        var d = (
          /** @type {ComponentContext} */
          Ke
        );
        d.c = i;
      }
      o && (r.$$events = o), He && It(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, He && (Ue.nodes_end = Ye), i && he();
    }), () => {
      var p;
      for (var d of a) {
        t.removeEventListener(d, lo);
        var h = (
          /** @type {number} */
          _r.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, lo), _r.delete(d)) : _r.set(d, h);
      }
      Ns.delete(l), f !== n && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return Ts.set(u, c), u;
}
let Ts = /* @__PURE__ */ new WeakMap();
function k1(e, t) {
  const n = Ts.get(e);
  return n ? (Ts.delete(e), n(t)) : Promise.resolve();
}
function we(e, t, [n, r] = [0, 0]) {
  He && n === 0 && xn();
  var o = e, i = null, s = null, a = Vt, l = n > 0 ? Zr : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (a === (a = d)) return;
    let p = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const _ = (
          /** @type {Comment} */
          o.data
        );
        _ === Js ? r = 0 : _ === Qs ? r = 1 / 0 : (r = parseInt(_.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = $s(), Pt(o), Yt(!1), p = !0, r = -1);
    }
    a ? (i ? po(i) : h && (i = Un(() => h(o))), s && Vr(s, () => {
      s = null;
    })) : (s ? po(s) : h && (s = Un(() => h(o, [n + 1, r]))), i && Vr(i, () => {
      i = null;
    })), p && Yt(!0);
  };
  Gr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), He && (o = Ye);
}
function Lr(e, t) {
  return t;
}
function $1(e, t, n, r) {
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
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  vu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Rn(e, c.prev, c.next)), cn(c.e, !a);
    }
  });
}
function Mt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & jl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = He ? Pt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(u)
    ) : u.appendChild(On());
  }
  He && xn();
  var c = null, f = !1, d = /* @__PURE__ */ be(() => {
    var h = n();
    return Mo(h) ? h : h == null ? [] : ta(h);
  });
  Gr(() => {
    var h = g(d), p = h.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let x = !1;
    if (He) {
      var _ = (
        /** @type {Comment} */
        s.data === Qs
      );
      _ !== (p === 0) && (s = $s(), Pt(s), Yt(!1), x = !0);
    }
    if (He) {
      for (var k = null, v, b = 0; b < p; b++) {
        if (Ye.nodeType === 8 && /** @type {Comment} */
        Ye.data === ea) {
          s = /** @type {Comment} */
          Ye, x = !0, Yt(!1);
          break;
        }
        var m = h[b], C = r(m, b);
        v = Tu(
          Ye,
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
      p > 0 && Pt($s());
    }
    He || E1(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? po(c) : c = Un(() => i(s)) : c !== null && Vr(c, () => {
      c = null;
    })), x && Yt(!0), g(d);
  }), He && (s = Ye);
}
function E1(e, t, n, r, o, i, s) {
  var E, P, S, N;
  var a = (o & xf) !== 0, l = (o & (Us | js)) !== 0, u = e.length, c = t.items, f = t.first, d = f, h, p = null, x, _ = [], k = [], v, b, m, C;
  if (a)
    for (C = 0; C < u; C += 1)
      v = e[C], b = i(v, C), m = c.get(b), m !== void 0 && ((E = m.a) == null || E.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(m));
  for (C = 0; C < u; C += 1) {
    if (v = e[C], b = i(v, C), m = c.get(b), m === void 0) {
      var H = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      p = Tu(
        H,
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
    if (l && S1(m, v, C, o), (m.e.f & Vn) !== 0 && (po(m.e), a && ((P = m.a) == null || P.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (h !== void 0 && h.has(m)) {
        if (_.length < k.length) {
          var $ = k[0], V;
          p = $.prev;
          var A = _[0], O = _[_.length - 1];
          for (V = 0; V < _.length; V += 1)
            ja(_[V], $, n);
          for (V = 0; V < k.length; V += 1)
            h.delete(k[V]);
          Rn(t, A.prev, O.next), Rn(t, p, A), Rn(t, O, $), d = $, p = O, C -= 1, _ = [], k = [];
        } else
          h.delete(m), ja(m, d, n), Rn(t, m.prev, m.next), Rn(t, m, p === null ? t.first : p.next), Rn(t, p, m), p = m;
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
    for (var R = h === void 0 ? [] : ta(h); d !== null; )
      (d.e.f & Vn) === 0 && R.push(d), d = d.next;
    var z = R.length;
    if (z > 0) {
      var I = (o & jl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (C = 0; C < z; C += 1)
          (S = R[C].a) == null || S.measure();
        for (C = 0; C < z; C += 1)
          (N = R[C].a) == null || N.fix();
      }
      $1(t, R, I, c);
    }
  }
  a && Ho(() => {
    var T;
    if (x !== void 0)
      for (m of x)
        (T = m.a) == null || T.apply();
  }), Ue.first = t.first && t.first.e, Ue.last = p && p.e;
}
function S1(e, t, n, r) {
  (r & Us) !== 0 && Ps(e.v, t), (r & js) !== 0 ? Ps(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Us) !== 0, f = (l & bf) === 0, d = c ? f ? /* @__PURE__ */ ae(o) : Ar(o) : o, h = (l & js) === 0 ? s : Ar(s), p = {
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
    return p.e = Un(() => a(e, d, h, u), He), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function ja(e, t, n) {
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
function Rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function fa(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ke(() => {
    var a = (
      /** @type {Effect} */
      Ue
    );
    if (s === (s = t() ?? "")) {
      He && xn();
      return;
    }
    if (a.nodes_start !== null && (gu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (He) {
        Ye.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw zi(), kr;
        It(Ye, u), i = Pt(l);
        return;
      }
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var f = da(c);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ vt(f)), It(
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ vt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ vt(f)
          );
      else
        i.before(f);
    }
  });
}
function bt(e, t, n, r, o) {
  var a;
  He && xn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function P1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function dr(e, t, ...n) {
  var r = e, o = pt, i;
  Gr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Un(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), He && (r = Ye);
}
function Mu(e, t, n) {
  He && xn();
  var r = e, o, i;
  Gr(() => {
    o !== (o = t()) && (i && (Vr(i), i = null), o && (i = Un(() => n(r, o))));
  }, Zr), He && (r = Ye);
}
function N1(e, t, n, r, o, i) {
  let s = He;
  He && xn();
  var a, l, u = null;
  He && Ye.nodeType === 1 && (u = /** @type {Element} */
  Ye, xn());
  var c = (
    /** @type {TemplateNode} */
    He ? Ye : e
  ), f;
  Gr(() => {
    const d = t() || null;
    var h = d === "svg" ? Nf : null;
    d !== a && (f && (d === null ? Vr(f, () => {
      f = null, l = null;
    }) : d === l ? po(f) : cn(f)), d && d !== l && (f = Un(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, d) : document.createElement(d), It(u, u), r) {
        He && y1(d) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ vt(u) : u.appendChild(On())
        );
        He && (p === null ? Yt(!1) : Pt(p)), r(u, p);
      }
      Ue.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Zr), s && (Yt(!0), Pt(c));
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
function xt(e, t, n) {
  qt(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var s = n();
        J(s), o && sa(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Hu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function T1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hu(e)) && (r && (r += " "), r += t);
  return r;
}
function gn(e) {
  return typeof e == "object" ? T1(e) : e ?? "";
}
const Ja = [...` 	
\r\f \v\uFEFF`];
function M1(e, t, n) {
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
function H1(e, t) {
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
function Ct(e, t, n, r, o, i) {
  var s = e.__className;
  if (He || s !== n || s === void 0) {
    var a = M1(n, r, i);
    (!He || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
function gt(e, t, n, r) {
  var o = e.__style;
  if (He || o !== t) {
    var i = H1(t, r);
    (!He || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (cs(e, n == null ? void 0 : n[0], r[0]), cs(e, n == null ? void 0 : n[1], r[1], "important")) : cs(e, n, r));
  return r;
}
const io = Symbol("class"), ir = Symbol("style"), Du = Symbol("is custom element"), Vu = Symbol("is html");
function Xn(e) {
  if (He) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, e1(n), x1();
  }
}
function ti(e, t) {
  var n = Fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function D1(e, t) {
  var n = Fi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function V1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ce(e, t, n, r) {
  var o = Fi(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Lf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xt(e, t, n, r, o = !1) {
  var i = Fi(e), s = i[Du], a = !i[Vu];
  let l = He && s;
  l && Yt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = gn(n.class) : (r || n[io]) && (n.class = null), n[ir] && (n.style ?? (n.style = null));
  var d = Au(e);
  for (const b in n) {
    let m = n[b];
    if (c && b === "value" && m == null) {
      e.value = e.__value = "", u[b] = m;
      continue;
    }
    if (b === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, h, m, r, t == null ? void 0 : t[io], n[io]), u[b] = m, u[io] = n[io];
      continue;
    }
    if (b === "style") {
      gt(e, m, t == null ? void 0 : t[ir], n[ir]), u[b] = m, u[ir] = n[ir];
      continue;
    }
    var p = u[b];
    if (m !== p) {
      u[b] = m;
      var x = b[0] + b[1];
      if (x !== "$$")
        if (x === "on") {
          const C = {}, H = "$$" + b;
          let $ = b.slice(2);
          var _ = f1($);
          if (c1($) && ($ = $.slice(0, -7), C.capture = !0), !_ && p) {
            if (m != null) continue;
            e.removeEventListener($, u[H], C), u[H] = null;
          }
          if (m != null)
            if (_)
              e[`__${$}`] = m, jr([$]);
            else {
              let V = function(A) {
                u[b].call(this, A);
              };
              u[H] = Su($, e, V, C);
            }
          else _ && (e[`__${$}`] = void 0);
        } else if (b === "style")
          Ce(e, b, m);
        else if (b === "autofocus")
          w1(
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
          a || (k = h1(k));
          var v = k === "defaultValue" || k === "defaultChecked";
          if (m == null && !s && !v)
            if (i[b] = null, k === "value" || k === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (k === "value") {
                let $ = C.defaultValue;
                C.removeAttribute(k), C.defaultValue = $, C.value = C.__value = H ? $ : null;
              } else {
                let $ = C.defaultChecked;
                C.removeAttribute(k), C.defaultChecked = $, C.checked = H ? $ : !1;
              }
            } else
              e.removeAttribute(b);
          else v || d.includes(k) && (s || typeof m != "string") ? e[k] = m : typeof m != "function" && Ce(e, k, m);
        }
    }
  }
  return l && Yt(!0), u;
}
function Fi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Du]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === Pf
    })
  );
}
var el = /* @__PURE__ */ new Map();
function Au(e) {
  var t = el.get(e.nodeName);
  if (t) return t;
  el.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = eu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = na(r);
  }
  return t;
}
var qn, Hr, To, Vi, Ou;
const Ai = class Ai {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    or(this, Vi);
    /** */
    or(this, qn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    or(this, Hr);
    /** @type {ResizeObserverOptions} */
    or(this, To);
    ro(this, To, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = dt(this, qn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), dt(this, qn).set(t, r), qa(this, Vi, Ou).call(this).observe(t, dt(this, To)), () => {
      var o = dt(this, qn).get(t);
      o.delete(n), o.size === 0 && (dt(this, qn).delete(t), dt(this, Hr).unobserve(t));
    };
  }
};
qn = new WeakMap(), Hr = new WeakMap(), To = new WeakMap(), Vi = new WeakSet(), Ou = function() {
  return dt(this, Hr) ?? ro(this, Hr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ai.entries.set(n.target, n);
        for (var r of dt(this, qn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
$t(Ai, "entries", /* @__PURE__ */ new WeakMap());
let Ms = Ai;
var A1 = /* @__PURE__ */ new Ms({
  box: "border-box"
});
function tl(e, t, n) {
  var r = A1.observe(e, () => n(e[t]));
  qt(() => (Cn(() => n(e[t])), r));
}
function nl(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function kn(e = {}, t, n, r) {
  return qt(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && nl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Ho(() => {
        i && nl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ze(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Dr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && Gf(() => {
    rl(t, r), vo(n.b);
  }), Qt(() => {
    const o = Cn(() => n.m.map(Df));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Qt(() => {
    rl(t, r), vo(n.a);
  });
}
function rl(e, t) {
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
function nn(e) {
  Ke === null && Oi(), Xr && Ke.l !== null ? L1(Ke).m.push(e) : Qt(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ga(e) {
  Ke === null && Oi(), nn(() => () => Cn(e));
}
function O1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Wi() {
  const e = Ke;
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
const xr = [];
function Gt(e, t) {
  return {
    subscribe: Ee(e, t).subscribe
  };
}
function Ee(e, t = pt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (sa(e, a) && (e = a, n)) {
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
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = pt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || pt), a(
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
  return Gt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = pt;
    const d = () => {
      if (c)
        return;
      f();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : f = typeof p == "function" ? p : pt;
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
function K(e) {
  let t;
  return ha(e, (n) => t = n)(), t;
}
let Zo = !1, Hs = Symbol();
function Q(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ae(void 0),
    unsubscribe: pt
  });
  if (r.store !== e && !(Hs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = pt;
    else {
      var o = !0;
      r.unsubscribe = ha(e, (i) => {
        o ? r.source.v = i : j(r.source, i);
      }), o = !1;
    }
  return e && Hs in n ? K(e) : g(r.source);
}
function I1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pt), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function ot() {
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
function _t(e, t, n) {
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
      Jl
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
function lt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Ar(0) }, B1);
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
    if (t === Wn || t === oa) return !1;
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
function ut(...e) {
  return new Proxy({ props: e }, q1);
}
function ol(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var H;
  var o = (n & Cf) !== 0, i = !Xr || (n & kf) !== 0, s = (n & $f) !== 0, a = (n & Ef) !== 0, l = !1, u;
  s ? [u, l] = z1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || oa in e, f = s && (((H = Dn(e, t)) == null ? void 0 : H.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), h = !0, p = !1, x = () => (p = !0, h && (h = !1, a ? d = Cn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Yf(), u = x(), f && f(u));
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
    var k = (o ? Dr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Af, _ = () => {
      var $ = g(k);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if ((n & Jl) === 0)
    return _;
  if (f) {
    var v = e.$$legacy;
    return function($, V) {
      return arguments.length > 0 ? ((!i || !V || v || l) && f(V ? _() : $), $) : _();
    };
  }
  var b = !1, m = /* @__PURE__ */ ae(u), C = /* @__PURE__ */ Dr(() => {
    var $ = _(), V = g(m);
    return b ? (b = !1, V) : m.v = $;
  });
  return s && g(C), o || (C.equals = aa), function($, V) {
    if (arguments.length > 0) {
      const A = V ? g(C) : i && s ? an($) : $;
      if (!C.equals(A)) {
        if (b = !0, j(m, A), p && d !== void 0 && (d = A), ol(C))
          return $;
        Cn(() => g(C));
      }
      return $;
    }
    return ol(C) ? C.v : g(C);
  };
}
function Y1(e) {
  return new F1(e);
}
var Tn, jt;
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
    or(this, jt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ ae(a);
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
          return j(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    ro(this, jt, (t.hydrate ? C1 : Pu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), ro(this, Tn, o.$$events);
    for (const s of Object.keys(dt(this, jt)))
      s === "$set" || s === "$destroy" || s === "$on" || ho(this, s, {
        get() {
          return dt(this, jt)[s];
        },
        /** @param {any} value */
        set(a) {
          dt(this, jt)[s] = a;
        },
        enumerable: !0
      });
    dt(this, jt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, dt(this, jt).$destroy = () => {
      k1(dt(this, jt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    dt(this, jt).$set(t);
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
    dt(this, jt).$destroy();
  }
}
Tn = new WeakMap(), jt = new WeakMap();
let Lu;
typeof HTMLElement == "function" && (Lu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    $t(this, "$$ctor");
    /** Slots */
    $t(this, "$$s");
    /** @type {any} The Svelte component instance */
    $t(this, "$$c");
    /** Whether or not the custom element is connected */
    $t(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    $t(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $t(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $t(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $t(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $t(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    $t(this, "$$me");
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
function de(e, t, n, r, o, i) {
  let s = class extends Lu {
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
function Ht(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Ht(e[n])) !== "" && (t += (t && " ") + r);
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
      if (o = (e = r[i]).type) n[o] = il(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = il(n[o], e.name, null);
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
function il(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = X1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ds = "http://www.w3.org/1999/xhtml";
const sl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), sl.hasOwnProperty(t) ? { space: sl[t], local: e } : e;
}
function G1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ds && t.documentElement.namespaceURI === Ds ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function U1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Iu(e) {
  var t = Zi(e);
  return (t.local ? U1 : G1)(t);
}
function j1() {
}
function va(e) {
  return e == null ? j1 : function() {
    return this.querySelector(e);
  };
}
function J1(e) {
  typeof e != "function" && (e = va(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Zt(r, this._parents);
}
function Q1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eg() {
  return [];
}
function zu(e) {
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
  typeof e == "function" ? e = tg(e) : e = zu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Zt(r, o);
}
function Ru(e) {
  return function() {
    return this.matches(e);
  };
}
function Bu(e) {
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
  return this.select(e == null ? ig : og(typeof e == "function" ? e : Bu(e)));
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
  return this.selectAll(e == null ? lg : ug(typeof e == "function" ? e : Bu(e)));
}
function dg(e) {
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Zt(r, this._parents);
}
function qu(e) {
  return new Array(e.length);
}
function fg() {
  return new Zt(this._enter || this._groups.map(qu), this._parents);
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
  return s = new Zt(s, r), s._enter = a, s._exit = l, s;
}
function yg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wg() {
  return new Zt(this._exit || this._groups.map(qu), this._parents);
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
  return new Zt(a, this._parents);
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
  return new Zt(o, this._parents).order();
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
function Yu(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Ig : typeof t == "function" ? Rg : zg)(e, t, n ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || Yu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Fu(e) {
  return e.trim().split(/^|\s+/);
}
function pa(e) {
  return e.classList || new Wu(e);
}
function Wu(e) {
  this._node = e, this._names = Fu(e.getAttribute("class") || "");
}
Wu.prototype = {
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
function Xu(e, t) {
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zu(e, t) {
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Xg(e) {
  return function() {
    Xu(this, e);
  };
}
function Zg(e) {
  return function() {
    Zu(this, e);
  };
}
function Kg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xu : Zu)(this, e);
  };
}
function Gg(e, t) {
  var n = Fu(e + "");
  if (arguments.length < 2) {
    for (var r = pa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Kg : t ? Xg : Zg)(n, t));
}
function Ug() {
  this.textContent = "";
}
function jg(e) {
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
  return arguments.length ? this.each(e == null ? Ug : (typeof e == "function" ? Jg : jg)(e)) : this.node().textContent;
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
  var t = typeof e == "function" ? e : Iu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function uh() {
  return null;
}
function ch(e, t) {
  var n = typeof e == "function" ? e : Iu(e), r = t == null ? uh : typeof t == "function" ? t : va(t);
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
function Ku(e, t, n) {
  var r = Yu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function bh(e, t) {
  return function() {
    return Ku(this, e, t);
  };
}
function Ch(e, t) {
  return function() {
    return Ku(this, e, t.apply(this, arguments));
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
function Zt(e, t) {
  this._groups = e, this._parents = t;
}
function Vo() {
  return new Zt([[document.documentElement]], Gu);
}
function Eh() {
  return this;
}
Zt.prototype = Vo.prototype = {
  constructor: Zt,
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
  classed: Gg,
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
function Jt(e) {
  return typeof e == "string" ? new Zt([[document.querySelector(e)]], [document.documentElement]) : new Zt([[e]], Gu);
}
function Sh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function sn(e, t) {
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
function $r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uu(e) {
  var t = e.document.documentElement, n = Jt(e).on("dragstart.drag", $r, _o);
  "onselectstart" in t ? n.on("selectstart.drag", $r, _o) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ju(e, t) {
  var n = e.document.documentElement, r = Jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", $r, _o), setTimeout(function() {
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
      var H = b(this, t.call(this, m, C), m, C, "mouse");
      H && (Jt(m.view).on("mousemove.drag", p, _o).on("mouseup.drag", x, _o), Uu(m.view), ds(m), u = !1, a = m.clientX, l = m.clientY, H("start", m));
    }
  }
  function p(m) {
    if ($r(m), !u) {
      var C = m.clientX - a, H = m.clientY - l;
      u = C * C + H * H > f;
    }
    o.mouse("drag", m);
  }
  function x(m) {
    Jt(m.view).on("mousemove.drag mouseup.drag", null), ju(m.view, u), $r(m), o.mouse("end", m);
  }
  function _(m, C) {
    if (e.call(this, m, C)) {
      var H = m.changedTouches, $ = t.call(this, m, C), V = H.length, A, O;
      for (A = 0; A < V; ++A)
        (O = b(this, $, m, C, H[A].identifier, H[A])) && (ds(m), O("start", m, H[A]));
    }
  }
  function k(m) {
    var C = m.changedTouches, H = C.length, $, V;
    for ($ = 0; $ < H; ++$)
      (V = o[C[$].identifier]) && ($r(m), V("drag", m, C[$]));
  }
  function v(m) {
    var C = m.changedTouches, H = C.length, $, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < H; ++$)
      (V = o[C[$].identifier]) && (ds(m), V("end", m, C[$]));
  }
  function b(m, C, H, $, V, A) {
    var O = i.copy(), R = sn(A || H, C), z, I, E;
    if ((E = n.call(m, new Vs("beforestart", {
      sourceEvent: H,
      target: d,
      identifier: V,
      active: s,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), $)) != null)
      return z = E.x - R[0] || 0, I = E.y - R[1] || 0, function P(S, N, T) {
        var M = R, L;
        switch (S) {
          case "start":
            o[V] = P, L = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            R = sn(T || N, C), L = s;
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
            x: R[0] + z,
            y: R[1] + I,
            dx: R[0] - M[0],
            dy: R[1] - M[1],
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
function Ju(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ao() {
}
var xo = 0.7, mi = 1 / xo, Er = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vh = /^#([0-9a-f]{3,8})$/, Ah = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`), Oh = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Lh = new RegExp(`^rgba\\(${Er},${Er},${Er},${bo}\\)$`), Ih = new RegExp(`^rgba\\(${yn},${yn},${yn},${bo}\\)$`), zh = new RegExp(`^hsl\\(${bo},${yn},${yn}\\)$`), Rh = new RegExp(`^hsla\\(${bo},${yn},${yn},${bo}\\)$`), al = {
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
  hex: ll,
  // Deprecated! Use color.formatHex.
  formatHex: ll,
  formatHex8: Bh,
  formatHsl: qh,
  formatRgb: ul,
  toString: ul
});
function ll() {
  return this.rgb().formatHex();
}
function Bh() {
  return this.rgb().formatHex8();
}
function qh() {
  return Qu(this).formatHsl();
}
function ul() {
  return this.rgb().formatRgb();
}
function Co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Vh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? cl(t) : n === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Go(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Go(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ah.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = Oh.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lh.exec(e)) ? Go(t[1], t[2], t[3], t[4]) : (t = Ih.exec(e)) ? Go(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = zh.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Rh.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, t[4]) : al.hasOwnProperty(e) ? cl(al[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function cl(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Go(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ot(e, t, n, r);
}
function Yh(e) {
  return e instanceof Ao || (e = Co(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function As(e, t, n, r) {
  return arguments.length === 1 ? Yh(e) : new Ot(e, t, n, r ?? 1);
}
function Ot(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ma(Ot, As, Ju(Ao, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(lr(this.r), lr(this.g), lr(this.b), yi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: dl,
  // Deprecated! Use color.formatHex.
  formatHex: dl,
  formatHex8: Fh,
  formatRgb: fl,
  toString: fl
}));
function dl() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function Fh() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fl() {
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
function gl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Qu(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ao || (e = Co(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new ln(s, a, l, e.opacity);
}
function Wh(e, t, n, r) {
  return arguments.length === 1 ? Qu(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ma(ln, Wh, Ju(Ao, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ot(
      fs(e >= 240 ? e - 240 : e + 120, o, r),
      fs(e, o, r),
      fs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ln(hl(this.h), Uo(this.s), Uo(this.l), yi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hl(this.h)}, ${Uo(this.s) * 100}%, ${Uo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Uo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ec = (e) => () => e;
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
  return (e = +e) == 1 ? tc : function(t, n) {
    return n - t ? Zh(t, n, e) : ec(isNaN(t) ? n : t);
  };
}
function tc(e, t) {
  var n = t - e;
  return n ? Xh(e, n) : ec(isNaN(e) ? t : e);
}
const vl = function e(t) {
  var n = Kh(t);
  function r(o, i) {
    var s = n((o = As(o)).r, (i = As(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = tc(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Os = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gs = new RegExp(Os.source, "g");
function Gh(e) {
  return function() {
    return e;
  };
}
function Uh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function jh(e, t) {
  var n = Os.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Os.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bn(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Uh(l[0].x) : Gh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var pl = 180 / Math.PI, Ls = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * pl,
    skewX: Math.atan(l) * pl,
    scaleX: s,
    scaleY: a
  };
}
var jo;
function Jh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ls : nc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Qh(e) {
  return e == null || (jo || (jo = document.createElementNS("http://www.w3.org/2000/svg", "g")), jo.setAttribute("transform", e), !(e = jo.transform.baseVal.consolidate())) ? Ls : (e = e.matrix, nc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function rc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, h, p) {
    if (u !== f || c !== d) {
      var x = h.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
    } else (f || d) && h.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, h, p) {
    if (u !== f || c !== d) {
      var x = h.push(o(h) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
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
var ev = rc(Jh, "px, ", "px)", "deg)"), tv = rc(Qh, ", ", ")", ")"), nv = 1e-12;
function ml(e) {
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
      var v = Math.sqrt(x), b = (d * d - u * u + r * x) / (2 * u * n * v), m = (d * d - u * u - r * x) / (2 * d * n * v), C = Math.log(Math.sqrt(b * b + 1) - b), H = Math.log(Math.sqrt(m * m + 1) - m);
      k = (H - C) / t, _ = function($) {
        var V = $ * k, A = ml(C), O = u / (n * v) * (A * ov(t * V + C) - rv(C));
        return [
          a + O * h,
          l + O * p,
          u * A / ml(t * V + C)
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
var zr = 0, uo = 0, so = 0, oc = 1e3, wi, co, _i = 0, fr = 0, Ki = 0, ko = typeof performance == "object" && performance.now ? performance : Date, ic = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ya() {
  return fr || (ic(sv), fr = ko.now() + Ki);
}
function sv() {
  fr = 0;
}
function xi() {
  this._call = this._time = this._next = null;
}
xi.prototype = sc.prototype = {
  constructor: xi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ya() : +n) + (t == null ? 0 : +t), !this._next && co !== this && (co ? co._next = this : wi = this, co = this), this._call = e, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function sc(e, t, n) {
  var r = new xi();
  return r.restart(e, t, n), r;
}
function av() {
  ya(), ++zr;
  for (var e = wi, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function yl() {
  fr = (_i = ko.now()) + Ki, zr = uo = 0;
  try {
    av();
  } finally {
    zr = 0, uv(), fr = 0;
  }
}
function lv() {
  var e = ko.now(), t = e - _i;
  t > oc && (Ki -= t, _i = e);
}
function uv() {
  for (var e, t = wi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : wi = n);
  co = e, Is(r);
}
function Is(e) {
  if (!zr) {
    uo && (uo = clearTimeout(uo));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (uo = setTimeout(yl, e - ko.now() - Ki)), so && (so = clearInterval(so))) : (so || (_i = ko.now(), so = setInterval(lv, oc)), zr = 1, ic(yl));
  }
}
function wl(e, t, n) {
  var r = new xi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var cv = Xi("start", "end", "cancel", "interrupt"), dv = [], ac = 0, _l = 1, zs = 2, oi = 3, xl = 4, Rs = 5, ii = 6;
function Gi(e, t, n, r, o, i) {
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
    state: ac
  });
}
function wa(e, t) {
  var n = hn(e, t);
  if (n.state > ac) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = hn(e, t);
  if (n.state > oi) throw new Error("too late; already running");
  return n;
}
function hn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function fv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = sc(i, 0, n.time);
  function i(u) {
    n.state = _l, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, h;
    if (n.state !== _l) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === oi) return wl(s);
        h.state === xl ? (h.state = ii, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ii, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (wl(function() {
      n.state === oi && (n.state = xl, n.timer.restart(a, n.delay, n.time), a(u));
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
    for (var r = hn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
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
    return hn(o, r).value[t];
  };
}
function lc(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof Co ? vl : (n = Co(t)) ? (t = n, vl) : jh)(e, t);
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
  var n = Zi(e), r = n === "transform" ? tv : lc;
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
  return arguments.length ? this.each((typeof e == "function" ? Nv : Tv)(t, e)) : hn(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Hv : Dv)(t, e)) : hn(this.node(), t).duration;
}
function Av(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Ov(e) {
  var t = this._id;
  return arguments.length ? this.each(Av(t, e)) : hn(this.node(), t).ease;
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
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Rv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, h = 0; h < c; ++h)
      (d = l[h] || u[h]) && (f[h] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ln(s, this._parents, this._name, this._id);
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
  return arguments.length < 2 ? hn(this.node(), n).on.on(e) : this.each(qv(n, e, t));
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
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Gi(u[d], t, n, d, u, hn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Zv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), h, p = hn(c, n), x = 0, _ = d.length; x < _; ++x)
          (h = d[x]) && Gi(h, t, n, x, d, p);
        i.push(d), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Kv = Vo.prototype.constructor;
function Gv() {
  return new Kv(this._groups, this._parents);
}
function Uv(e, t) {
  var n, r, o;
  return function() {
    var i = Ir(this, e), s = (this.style.removeProperty(e), Ir(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function uc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ir(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Jv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ir(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Qv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? a || (a = uc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function e0(e, t, n) {
  var r = (e += "") == "transform" ? ev : lc;
  return t == null ? this.styleTween(e, Uv(e, r)).on("end.style." + e, uc(e)) : typeof t == "function" ? this.styleTween(e, Jv(e, r, _a(this, "style." + e, t))).each(Qv(this._id, e)) : this.styleTween(e, jv(e, r, t), n).on("end.style." + e, null);
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
  for (var e = this._name, t = this._id, n = cc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = hn(l, t);
        Gi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
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
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function cc() {
  return ++f0;
}
var Nn = Vo.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Xv,
  selectAll: Zv,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: zv,
  merge: Rv,
  selection: Gv,
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
  e instanceof Ln ? (t = e._id, e = e._name) : (t = cc(), (n = h0).time = ya(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Gi(l, e, t, u, s, n || v0(l, t));
  return new Ln(r, this._parents, e, t);
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
var Ui = new Mn(1, 0, 0);
dc.prototype = Mn.prototype;
function dc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ui;
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
function bl() {
  return this.__zoom || Ui;
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
function fc() {
  var e = y0, t = w0, n = b0, r = _0, o = x0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = iv, u = Xi("start", "zoom", "end"), c, f, d, h = 500, p = 150, x = 0, _ = 10;
  function k(E) {
    E.property("__zoom", bl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(E, P, S, N) {
    var T = E.selection ? E.selection() : E;
    T.property("__zoom", bl), E !== T ? C(E, P, S, N) : T.interrupt().each(function() {
      H(this, arguments).event(N).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, k.scaleBy = function(E, P, S, N) {
    k.scaleTo(E, function() {
      var T = this.__zoom.k, M = typeof P == "function" ? P.apply(this, arguments) : P;
      return T * M;
    }, S, N);
  }, k.scaleTo = function(E, P, S, N) {
    k.transform(E, function() {
      var T = t.apply(this, arguments), M = this.__zoom, L = S == null ? m(T) : typeof S == "function" ? S.apply(this, arguments) : S, q = M.invert(L), X = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(b(v(M, X), L, q), T, s);
    }, S, N);
  }, k.translateBy = function(E, P, S, N) {
    k.transform(E, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, N);
  }, k.translateTo = function(E, P, S, N, T) {
    k.transform(E, function() {
      var M = t.apply(this, arguments), L = this.__zoom, q = N == null ? m(M) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Ui.translate(q[0], q[1]).scale(L.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), M, s);
    }, N, T);
  };
  function v(E, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === E.k ? E : new Mn(P, E.x, E.y);
  }
  function b(E, P, S) {
    var N = P[0] - S[0] * E.k, T = P[1] - S[1] * E.k;
    return N === E.x && T === E.y ? E : new Mn(E.k, N, T);
  }
  function m(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function C(E, P, S, N) {
    E.on("start.zoom", function() {
      H(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, M = arguments, L = H(T, M).event(N), q = t.apply(T, M), X = S == null ? m(q) : typeof S == "function" ? S.apply(T, M) : S, Z = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), ee = T.__zoom, U = typeof P == "function" ? P.apply(T, M) : P, ue = l(ee.invert(X).concat(Z / ee.k), U.invert(X).concat(Z / U.k));
      return function(ve) {
        if (ve === 1) ve = U;
        else {
          var pe = ue(ve), se = Z / pe[2];
          ve = new Mn(se, X[0] - pe[0] * se, X[1] - pe[1] * se);
        }
        L.zoom(null, ve);
      };
    });
  }
  function H(E, P, S) {
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
      var P = Jt(this.that).datum();
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
    var S = H(this, P).event(E), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), M = sn(E);
    if (S.wheel)
      (S.mouse[0][0] !== M[0] || S.mouse[0][1] !== M[1]) && (S.mouse[1] = N.invert(S.mouse[0] = M)), clearTimeout(S.wheel);
    else {
      if (N.k === T) return;
      S.mouse = [M, N.invert(M)], si(this), S.start();
    }
    ao(E), S.wheel = setTimeout(L, p), S.zoom("mouse", n(b(v(N, T), S.mouse[0], S.mouse[1]), S.extent, s));
    function L() {
      S.wheel = null, S.end();
    }
  }
  function A(E, ...P) {
    if (d || !e.apply(this, arguments)) return;
    var S = E.currentTarget, N = H(this, P, !0).event(E), T = Jt(E.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), M = sn(E, S), L = E.clientX, q = E.clientY;
    Uu(E.view), hs(E), N.mouse = [M, this.__zoom.invert(M)], si(this), N.start();
    function X(ee) {
      if (ao(ee), !N.moved) {
        var U = ee.clientX - L, ue = ee.clientY - q;
        N.moved = U * U + ue * ue > x;
      }
      N.event(ee).zoom("mouse", n(b(N.that.__zoom, N.mouse[0] = sn(ee, S), N.mouse[1]), N.extent, s));
    }
    function Z(ee) {
      T.on("mousemove.zoom mouseup.zoom", null), ju(ee.view, N.moved), ao(ee), N.event(ee).end();
    }
  }
  function O(E, ...P) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, N = sn(E.changedTouches ? E.changedTouches[0] : E, this), T = S.invert(N), M = S.k * (E.shiftKey ? 0.5 : 2), L = n(b(v(S, M), N, T), t.apply(this, P), s);
      ao(E), a > 0 ? Jt(this).transition().duration(a).call(C, L, N, E) : Jt(this).call(k.transform, L, N, E);
    }
  }
  function R(E, ...P) {
    if (e.apply(this, arguments)) {
      var S = E.touches, N = S.length, T = H(this, P, E.changedTouches.length === N).event(E), M, L, q, X;
      for (hs(E), L = 0; L < N; ++L)
        q = S[L], X = sn(q, this), X = [X, this.__zoom.invert(X), q.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== X[2] && (T.touch1 = X, T.taps = 0) : (T.touch0 = X, M = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), M && (T.taps < 2 && (f = X[0], c = setTimeout(function() {
        c = null;
      }, h)), si(this), T.start());
    }
  }
  function z(E, ...P) {
    if (this.__zooming) {
      var S = H(this, P).event(E), N = E.changedTouches, T = N.length, M, L, q, X;
      for (ao(E), M = 0; M < T; ++M)
        L = N[M], q = sn(L, this), S.touch0 && S.touch0[2] === L.identifier ? S.touch0[0] = q : S.touch1 && S.touch1[2] === L.identifier && (S.touch1[0] = q);
      if (L = S.that.__zoom, S.touch1) {
        var Z = S.touch0[0], ee = S.touch0[1], U = S.touch1[0], ue = S.touch1[1], ve = (ve = U[0] - Z[0]) * ve + (ve = U[1] - Z[1]) * ve, pe = (pe = ue[0] - ee[0]) * pe + (pe = ue[1] - ee[1]) * pe;
        L = v(L, Math.sqrt(ve / pe)), q = [(Z[0] + U[0]) / 2, (Z[1] + U[1]) / 2], X = [(ee[0] + ue[0]) / 2, (ee[1] + ue[1]) / 2];
      } else if (S.touch0) q = S.touch0[0], X = S.touch0[1];
      else return;
      S.zoom("touch", n(b(L, q, X), S.extent, s));
    }
  }
  function I(E, ...P) {
    if (this.__zooming) {
      var S = H(this, P).event(E), N = E.changedTouches, T = N.length, M, L;
      for (hs(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), M = 0; M < T; ++M)
        L = N[M], S.touch0 && S.touch0[2] === L.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === L.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (L = sn(L, this), Math.hypot(f[0] - L[0], f[1] - L[1]) < _)) {
        var q = Jt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
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
const Rr = {
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
var Sr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Sr || (Sr = {}));
var $o;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})($o || ($o = {}));
var Me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Me || (Me = {}));
const Cl = {
  [Me.Left]: Me.Right,
  [Me.Right]: Me.Left,
  [Me.Top]: Me.Bottom,
  [Me.Bottom]: Me.Top
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
function kl(e, t, n) {
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
    return ji(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ji(n);
}, Lo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ki(r);
      n = ji(n, o);
    }
  }), Ji(n);
}, gc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Io(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = Eo(a, qr(u)), _ = (h ?? 0) * (p ?? 0), k = i && x > 0;
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
      i == null || i("005", Rr.error005());
    else {
      const h = a.measured.width, p = a.measured.height;
      h && p && (f = [
        [l, u],
        [l + h, u + p]
      ]);
    }
  else a && Yr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Yr(f) ? hr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Rr.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function hc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
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
const Br = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Br(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Br(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function vc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const $l = (e, t, n) => e < t ? Br(Math.abs(e - t), 1, t) / t : e > n ? -Br(Math.abs(e - n), 1, t) / t : 0, pc = (e, t, n = 15, r = 40) => {
  const o = $l(e.x, r, t.width - r) * n, i = $l(e.y, r, t.height - r) * n;
  return [o, i];
}, ji = (e, t) => ({
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
}), qr = (e, t = [0, 0]) => {
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
}, mc = (e, t) => Ji(ji(Ys(e), Ys(t))), Eo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), M0 = (e, t) => {
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
function H0(e, t, n) {
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
    const r = br(e.top ?? e.y ?? 0, n), o = br(e.bottom ?? e.y ?? 0, n), i = br(e.left ?? e.x ?? 0, t), s = br(e.right ?? e.x ?? 0, t);
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
  const s = H0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), c = Br(u, r, o), f = e.x + e.width / 2, d = e.y + e.height / 2, h = t / 2 - f * c, p = n / 2 - d * c, x = D0(e, h, p, c, t, n), _ = {
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
function Yr(e) {
  return e !== void 0 && e !== "parent";
}
function nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function yc(e) {
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
  const { x: i, y: s } = An(e), a = Io({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ba(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const wc = (e) => ({
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
const _c = (e) => "clientX" in e, An = (e, t) => {
  var i, s;
  const n = _c(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Sl = (e, t, n, r, o) => {
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
      ...wc(s)
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
function Pl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Me.Left:
      return [t - Qo(t - r, i), n];
    case Me.Right:
      return [t + Qo(r - t, i), n];
    case Me.Top:
      return [t, n - Qo(n - o, i)];
    case Me.Bottom:
      return [t, n + Qo(o - n, i)];
  }
}
function xc({ sourceX: e, sourceY: t, sourcePosition: n = Me.Bottom, targetX: r, targetY: o, targetPosition: i = Me.Top, curvature: s = 0.25 }) {
  const [a, l] = Pl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = Pl({
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
function bc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = ji(ki(e), ki(t));
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
  const [o, i, s, a] = bc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Nl = {
  [Me.Left]: { x: -1, y: 0 },
  [Me.Right]: { x: 1, y: 0 },
  [Me.Top]: { x: 0, y: -1 },
  [Me.Bottom]: { x: 0, y: 1 }
}, W0 = ({ source: e, sourcePosition: t = Me.Bottom, target: n }) => t === Me.Left || t === Me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Tl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function X0({ source: e, sourcePosition: t = Me.Bottom, target: n, targetPosition: r = Me.Top, center: o, offset: i }) {
  const s = Nl[t], a = Nl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = W0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let h = [], p, x;
  const _ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, b, m, C] = bc({
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
    const A = { x: l.x + _.x, y: l.y + _.y }, O = { x: u.x + k.x, y: u.y + k.y }, R = Math.max(Math.abs(A.x - h[0].x), Math.abs(O.x - h[0].x)), z = Math.max(Math.abs(A.y - h[0].y), Math.abs(O.y - h[0].y));
    R >= z ? (p = (A.x + O.x) / 2, x = h[0].y) : (p = h[0].x, x = (A.y + O.y) / 2);
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
  const o = Math.min(Tl(e, t) / 2, Tl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Si({ sourceX: e, sourceY: t, sourcePosition: n = Me.Bottom, targetX: r, targetY: o, targetPosition: i = Me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
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
function Ml(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function K0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Ml(t) || !Ml(n))
    return null;
  const r = t.internals.handleBounds || Hl(t.handles), o = n.internals.handleBounds || Hl(n.handles), i = Dl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Dl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === gr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Rr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Me.Bottom, l = (s == null ? void 0 : s.position) || Me.Top, u = So(t, i, a), c = So(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Hl(e) {
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
function So(e, t, n = Me.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Me.Top:
      return { x: o + s / 2, y: i };
    case Me.Right:
      return { x: o + s, y: i + a / 2 };
    case Me.Bottom:
      return { x: o + s / 2, y: i + a };
    case Me.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Dl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ws(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function G0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ws(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function U0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Me.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Me.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Me.Left:
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
}, j0 = {
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
      const i = Oo(o, r.nodeOrigin), s = Yr(o.extent) ? o.extent : r.nodeExtent, a = hr(i, s, nr(o));
      o.internals.positionAbsolute = a;
    }
}
function Cc(e, t, n, r) {
  var l, u;
  const o = $a(j0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const d = Oo(c, o.nodeOrigin), h = Yr(c.extent) ? c.extent : o.nodeExtent, p = hr(d, h, nr(c));
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
          z: kc(c, a),
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
function kc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function ep(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Oo(e, n), u = Yr(e.extent) ? hr(l, e.extent, a) : l;
  let c = hr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = vc(c, a, t));
  const f = kc(e, o), d = t.internals.z ?? 0;
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
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? qr(l), c = mc(u, a.rect);
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
    const p = wc(d.nodeElement), x = h.measured.width !== p.width || h.measured.height !== p.height;
    if (!!(p.width && p.height && (x || !h.internals.handleBounds || d.force))) {
      const k = d.nodeElement.getBoundingClientRect(), v = Yr(h.extent) ? h.extent : i;
      let { positionAbsolute: b } = h.internals;
      h.parentId && h.extent === "parent" ? b = vc(b, p, t.get(h.parentId)) : v && (b = hr(b, v, p));
      const m = {
        ...h,
        measured: p,
        internals: {
          ...h.internals,
          positionAbsolute: b,
          handleBounds: {
            source: Sl("source", d.nodeElement, k, c, h.id),
            target: Sl("target", d.nodeElement, k, c, h.id)
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
        rect: qr(m, o)
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
function $c(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Vl("source", l, c, e, o, s), Vl("target", l, u, e, i, a), t.set(r.id, r);
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
function Ec(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Ec(n, t) : !1;
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
function ip(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Ec(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
    d = Jt(v);
    function H({ x: O, y: R }, z) {
      const { nodeLookup: I, nodeExtent: E, snapGrid: P, snapToGrid: S, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: M, onError: L, updateNodePositions: q } = t();
      i = { x: O, y: R };
      let X = !1, Z = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const ee = Lo(a);
        Z = Ys(ee);
      }
      for (const [ee, U] of a) {
        if (!I.has(ee))
          continue;
        let ue = { x: O - U.distance.x, y: R - U.distance.y };
        S && (ue = ba(ue, P));
        let ve = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !U.extent) {
          const { positionAbsolute: Ne } = U.internals, _e = Ne.x - Z.x + E[0][0], $e = Ne.x + U.measured.width - Z.x2 + E[1][0], le = Ne.y - Z.y + E[0][1], ie = Ne.y + U.measured.height - Z.y2 + E[1][1];
          ve = [
            [_e, le],
            [$e, ie]
          ];
        }
        const { position: pe, positionAbsolute: se } = T0({
          nodeId: ee,
          nextPosition: ue,
          nodeLookup: I,
          nodeExtent: ve,
          nodeOrigin: N,
          onError: L
        });
        X = X || U.position.x !== pe.x || U.position.y !== pe.y, U.position = pe, U.internals.positionAbsolute = se;
      }
      if (X && (q(a, !0), z && (r || T || !m && M))) {
        const [ee, U] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(z, a, ee, U), T == null || T(z, ee, U), m || M == null || M(z, U);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: O, panBy: R, autoPanSpeed: z, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, P] = pc(u, c, z);
      (E !== 0 || P !== 0) && (i.x = (i.x ?? 0) - E / O[2], i.y = (i.y ?? 0) - P / O[2], await R({ x: E, y: P }) && H(i, null)), s = requestAnimationFrame($);
    }
    function V(O) {
      var X;
      const { nodeLookup: R, multiSelectionActive: z, nodesDraggable: I, transform: E, snapGrid: P, snapToGrid: S, selectNodesOnDrag: N, onNodeDragStart: T, onSelectionDragStart: M, unselectNodesAndEdges: L } = t();
      f = !0, (!N || !b) && !z && m && ((X = R.get(m)) != null && X.selected || L()), b && N && m && (e == null || e(m));
      const q = vs(O.sourceEvent, { transform: E, snapGrid: P, snapToGrid: S, containerBounds: c });
      if (i = q, a = ip(R, I, q, m), a.size > 0 && (n || T || !m && M)) {
        const [Z, ee] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: R
        });
        n == null || n(O.sourceEvent, a, Z, ee), T == null || T(O.sourceEvent, Z, ee), m || M == null || M(O.sourceEvent, ee);
      }
    }
    const A = Dh().clickDistance(C).on("start", (O) => {
      const { domNode: R, nodeDragThreshold: z, transform: I, snapGrid: E, snapToGrid: P } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, h = !1, z === 0 && V(O), i = vs(O.sourceEvent, { transform: I, snapGrid: E, snapToGrid: P, containerBounds: c }), u = An(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: R, transform: z, snapGrid: I, snapToGrid: E, nodeDragThreshold: P, nodeLookup: S } = t(), N = vs(O.sourceEvent, { transform: z, snapGrid: I, snapToGrid: E, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !S.has(m)) && (h = !0), !h) {
        if (!l && R && f && (l = !0, $()), !f) {
          const T = N.xSnapped - (i.x ?? 0), M = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + M * M) > P && V(O);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = An(O.sourceEvent, c), H(N, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: R, updateNodePositions: z, onNodeDragStop: I, onSelectionDragStop: E } = t();
        if (z(a, !1), o || I || !m && E) {
          const [P, S] = ps({
            nodeId: m,
            dragItems: a,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(O.sourceEvent, a, P, S), I == null || I(O.sourceEvent, P, S), m || E == null || E(O.sourceEvent, S);
        }
      }
    }).filter((O) => {
      const R = O.target;
      return !O.button && (!_ || !Al(R, `.${_}`, v)) && (!k || Al(R, k, v));
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
    Eo(o, qr(i)) > 0 && r.push(i);
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
function Sc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...So(s, l, l.position, !0) } : l;
}
function Pc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function cp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Nc = () => !0;
function dp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: h, onConnectStart: p, onConnect: x, onConnectEnd: _, isValidConnection: k = Nc, onReconnectEnd: v, updateConnection: b, getTransform: m, getFromHandle: C, autoPanSpeed: H }) {
  const $ = O0(e.target);
  let V = 0, A;
  const { x: O, y: R } = An(e), z = $ == null ? void 0 : $.elementFromPoint(O, R), I = Pc(i, z), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !I)
    return;
  const P = Sc(o, I, r, l, t);
  if (!P)
    return;
  let S = An(e, E), N = !1, T = null, M = !1, L = null;
  function q() {
    if (!c || !E)
      return;
    const [se, Ne] = pc(S, E, H);
    d({ x: se, y: Ne }), V = requestAnimationFrame(q);
  }
  const X = {
    ...P,
    nodeId: o,
    type: I,
    position: P.position
  }, Z = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: So(Z, X, Me.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: Z,
    to: S,
    toHandle: null,
    toPosition: Cl[X.position],
    toNode: null
  };
  b(U);
  let ue = U;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function ve(se) {
    if (!C() || !X) {
      pe(se);
      return;
    }
    const Ne = m();
    S = An(se, E), A = up(Io(S, Ne, !1, [1, 1]), n, l, X), N || (q(), N = !0);
    const _e = Tc(se, {
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
    L = _e.handleDomNode, T = _e.connection, M = cp(!!A, _e.isValid);
    const $e = {
      // from stays the same
      ...ue,
      isValid: M,
      to: A && M ? $i({ x: A.x, y: A.y }, Ne) : S,
      toHandle: _e.toHandle,
      toPosition: M && _e.toHandle ? _e.toHandle.position : Cl[X.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    M && A && ue.toHandle && $e.toHandle && ue.toHandle.type === $e.toHandle.type && ue.toHandle.nodeId === $e.toHandle.nodeId && ue.toHandle.id === $e.toHandle.id && ue.to.x === $e.to.x && ue.to.y === $e.to.y || (b($e), ue = $e);
  }
  function pe(se) {
    (A || L) && T && M && (x == null || x(T));
    const { inProgress: Ne, ..._e } = ue, $e = {
      ..._e,
      toPosition: ue.toHandle ? ue.toPosition : null
    };
    _ == null || _(se, $e), i && (v == null || v(se, $e)), h(), cancelAnimationFrame(V), N = !1, M = !1, T = null, L = null, $.removeEventListener("mousemove", ve), $.removeEventListener("mouseup", pe), $.removeEventListener("touchmove", ve), $.removeEventListener("touchend", pe);
  }
  $.addEventListener("mousemove", ve), $.addEventListener("mouseup", pe), $.addEventListener("touchmove", ve), $.addEventListener("touchend", pe);
}
function Tc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Nc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = An(e), x = s.elementFromPoint(h, p), _ = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, k = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const v = Pc(void 0, _), b = _.getAttribute("data-nodeid"), m = _.getAttribute("data-handleid"), C = _.classList.contains("connectable"), H = _.classList.contains("connectableend");
    if (!b || !v)
      return k;
    const $ = {
      source: f ? b : r,
      sourceHandle: f ? m : o,
      target: f ? r : b,
      targetHandle: f ? o : m
    };
    k.connection = $;
    const A = C && H && (n === gr.Strict ? f && v === "source" || !f && v === "target" : b !== r || m !== o);
    k.isValid = A && u($), k.toHandle = Sc(b, v, m, c, n, !1);
  }
  return k;
}
const fp = {
  onPointerDown: dp,
  isValid: Tc
};
function gp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: h = !1 }) {
    const p = (b) => {
      const m = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, H = m[2] * Math.pow(2, C);
      t.scaleTo(H);
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
      ], H = [C[0] - x[0], C[1] - x[1]];
      x = C;
      const $ = r() * Math.max(m[2], Math.log(m[2])) * (h ? -1 : 1), V = {
        x: m[0] - H[0] * $,
        y: m[1] - H[1] * $
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: m[2]
      }, A, a);
    }, v = fc().on("start", _).on("zoom", f ? k : null).on("zoom.wheel", d ? p : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: sn
  };
}
const hp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ms = ({ x: e, y: t, zoom: n }) => Ui.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ys = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Hc = (e) => {
  const t = e.ctrlKey && Ei() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function vp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const _ = sn(c), k = Hc(c), v = f * Math.pow(2, k);
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
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
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
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Qi(i.transform)));
  };
}
function wp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && hp(e.prevViewport, s.transform))) {
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
    if (c.button === 1 && c.type === "mousedown" && (Cr(c, `${u}-flow__node`) || Cr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || Cr(c, a) && c.type === "wheel" || Cr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
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
  }, f = e.getBoundingClientRect(), d = fc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Jt(e).call(d);
  b({
    x: i.x,
    y: i.y,
    zoom: Br(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const p = h.on("wheel.zoom"), x = h.on("dblclick.zoom");
  d.wheelDelta(Hc);
  function _(z, I) {
    return h ? new Promise((E) => {
      d == null || d.transform(ys(h, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: z, noPanClassName: I, onPaneContextMenu: E, userSelectionActive: P, panOnScroll: S, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: M, preventScrolling: L, zoomOnPinch: q, zoomOnScroll: X, zoomOnDoubleClick: Z, zoomActivationKeyPressed: ee, lib: U, onTransformChange: ue }) {
    P && !c.isZoomingOrPanning && v();
    const pe = S && !ee && !P ? vp({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: h,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: M,
      zoomOnPinch: q,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : pp({
      noWheelClassName: z,
      preventScrolling: L,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", pe, { passive: !1 }), !P) {
      const Ne = mp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ne);
      const _e = yp({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: ue
      });
      d.on("zoom", _e);
      const $e = wp({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: S,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", $e);
    }
    const se = _p({
      zoomActivationKeyPressed: ee,
      panOnDrag: N,
      zoomOnScroll: X,
      panOnScroll: S,
      zoomOnDoubleClick: Z,
      zoomOnPinch: q,
      userSelectionActive: P,
      noPanClassName: I,
      noWheelClassName: z,
      lib: U
    });
    d.filter(se), Z ? h.on("dblclick.zoom", x) : h.on("dblclick.zoom", null);
  }
  function v() {
    d.on("zoom", null);
  }
  async function b(z, I, E) {
    const P = ms(z), S = d == null ? void 0 : d.constrain()(P, I, E);
    return S && await _(S), new Promise((N) => N(S));
  }
  async function m(z, I) {
    const E = ms(z);
    return await _(E, I), new Promise((P) => P(E));
  }
  function C(z) {
    if (h) {
      const I = ms(z), E = h.property("__zoom");
      (E.k !== z.zoom || E.x !== z.x || E.y !== z.y) && (d == null || d.transform(h, I, null, { sync: !0 }));
    }
  }
  function H() {
    const z = h ? dc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function $(z, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleTo(ys(h, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z, I) {
    return h ? new Promise((E) => {
      d == null || d.scaleBy(ys(h, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function A(z) {
    d == null || d.scaleExtent(z);
  }
  function O(z) {
    d == null || d.translateExtent(z);
  }
  function R(z) {
    const I = !Hn(z) || z < 0 ? 0 : z;
    d == null || d.clickDistance(I);
  }
  return {
    update: k,
    destroy: v,
    setViewport: m,
    setViewportConstrained: b,
    getViewport: H,
    scaleTo: $,
    scaleBy: V,
    setScaleExtent: A,
    setTranslateExtent: O,
    syncViewport: C,
    setClickDistance: R
  };
}
var Ol;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ol || (Ol = {}));
var bp = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(Z, "$connectable", n), i = () => Q(pe, "$connectionRadius", n), s = () => Q(ue, "$domNode", n), a = () => Q(ve, "$nodeLookup", n), l = () => Q(U, "$connectionMode", n), u = () => Q(_e, "$lib", n), c = () => Q(Se, "$autoPanOnConnect", n), f = () => Q(fe, "$flowId", n), d = () => Q(Ne, "$isValidConnectionStore", n), h = () => Q(le, "$onedgecreate", n), p = () => Q(Re, "$onConnectAction", n), x = () => Q(re, "$onConnectStartAction", n), _ = () => Q(oe, "$onConnectEndAction", n), k = () => Q(se, "$viewport", n), v = () => Q(Le, "$connection", n), b = () => Q(De, "$edges", n), m = () => Q(Oe, "$connectionLookup", n), C = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae(), V = /* @__PURE__ */ ae(), A = /* @__PURE__ */ ae(), O = /* @__PURE__ */ ae(), R = /* @__PURE__ */ ae(), z = /* @__PURE__ */ ae();
  let I = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), P = w(t, "position", 28, () => Me.Top), S = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), M = w(t, "ondisconnect", 12, void 0), L = w(t, "isConnectable", 12, void 0), q = w(t, "class", 12, void 0);
  const X = cr("svelteflow__node_id"), Z = cr("svelteflow__node_connectable"), ee = je(), {
    connectionMode: U,
    domNode: ue,
    nodeLookup: ve,
    connectionRadius: pe,
    viewport: se,
    isValidConnection: Ne,
    lib: _e,
    addEdge: $e,
    onedgecreate: le,
    panBy: ie,
    cancelConnection: me,
    updateConnection: G,
    autoPanOnConnect: Se,
    edges: De,
    connectionLookup: Oe,
    onconnect: Re,
    onconnectstart: re,
    onconnectend: oe,
    flowId: fe,
    connection: Le
  } = ee;
  function Ze(Ae) {
    const it = _c(Ae);
    (it && Ae.button === 0 || !it) && fp.onPointerDown(Ae, {
      handleId: g($),
      nodeId: X,
      isTarget: g(C),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: N() ?? d(),
      updateConnection: G,
      cancelConnection: me,
      panBy: ie,
      onConnect: (Fe) => {
        var st;
        const Be = h() ? h()(Fe) : Fe;
        Be && ($e(Be), (st = p()) == null || st(Fe));
      },
      onConnectStart: (Fe, Be) => {
        var st;
        (st = x()) == null || st(Fe, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (Fe, Be) => {
        var st;
        (st = _()) == null || st(Fe, Be);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let te = /* @__PURE__ */ ae(null), Ie = /* @__PURE__ */ ae();
  ye(() => J(E()), () => {
    j(C, E() === "target");
  }), ye(
    () => (J(L()), o()),
    () => {
      j(H, L() !== void 0 ? L() : o());
    }
  ), ye(() => J(I()), () => {
    j($, I() || null);
  }), ye(
    () => (J(T()), J(M()), b(), m(), J(E()), J(I())),
    () => {
      (T() || M()) && (b(), j(Ie, m().get(`${X}-${E()}${I() ? `-${I()}` : ""}`)));
    }
  ), ye(
    () => (g(te), g(Ie), J(M()), J(T())),
    () => {
      if (g(te) && !C0(g(Ie), g(te))) {
        const Ae = g(Ie) ?? /* @__PURE__ */ new Map();
        kl(g(te), Ae, M()), kl(Ae, g(te), T());
      }
      j(te, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), ye(() => v(), () => {
    j(V, !!v().fromHandle);
  }), ye(
    () => (v(), J(E()), g($)),
    () => {
      var Ae, it, Fe;
      j(A, ((Ae = v().fromHandle) == null ? void 0 : Ae.nodeId) === X && ((it = v().fromHandle) == null ? void 0 : it.type) === E() && ((Fe = v().fromHandle) == null ? void 0 : Fe.id) === g($));
    }
  ), ye(
    () => (v(), J(E()), g($)),
    () => {
      var Ae, it, Fe;
      j(O, ((Ae = v().toHandle) == null ? void 0 : Ae.nodeId) === X && ((it = v().toHandle) == null ? void 0 : it.type) === E() && ((Fe = v().toHandle) == null ? void 0 : Fe.id) === g($));
    }
  ), ye(
    () => (l(), v(), J(E()), g($)),
    () => {
      var Ae, it, Fe;
      j(R, l() === gr.Strict ? ((Ae = v().fromHandle) == null ? void 0 : Ae.type) !== E() : X !== ((it = v().fromHandle) == null ? void 0 : it.nodeId) || g($) !== ((Fe = v().fromHandle) == null ? void 0 : Fe.id));
    }
  ), ye(() => (g(O), v()), () => {
    j(z, g(O) && v().isValid);
  }), wt(), ze();
  var ce = bp();
  Ce(ce, "data-nodeid", X);
  let ct;
  var rn = F(ce);
  bt(rn, t, "default", {}), Y(ce), ke(
    (Ae, it) => {
      Ce(ce, "data-handleid", g($)), Ce(ce, "data-handlepos", P()), Ce(ce, "data-id", `${f() ?? ""}-${X ?? ""}-${(I() || "") ?? ""}-${E() ?? ""}`), ct = Ct(ce, 1, Ae, null, ct, it), gt(ce, S());
    },
    [
      () => gn(Ht([
        "svelte-flow__handle",
        `svelte-flow__handle-${P()}`,
        "nodrag",
        "nopan",
        P(),
        q()
      ])),
      () => ({
        valid: g(z),
        connectingto: g(O),
        connectingfrom: g(A),
        source: !g(C),
        target: g(C),
        connectablestart: g(H),
        connectableend: g(H),
        connectable: g(H),
        connectionindicator: g(H) && (!g(V) || g(R))
      })
    ],
    be
  ), rt("mousedown", ce, Ze), rt("touchstart", ce, Ze), D(e, ce);
  var pn = he({
    get id() {
      return I();
    },
    set id(Ae) {
      I(Ae), y();
    },
    get type() {
      return E();
    },
    set type(Ae) {
      E(Ae), y();
    },
    get position() {
      return P();
    },
    set position(Ae) {
      P(Ae), y();
    },
    get style() {
      return S();
    },
    set style(Ae) {
      S(Ae), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Ae) {
      N(Ae), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Ae) {
      T(Ae), y();
    },
    get ondisconnect() {
      return M();
    },
    set ondisconnect(Ae) {
      M(Ae), y();
    },
    get isConnectable() {
      return L();
    },
    set isConnectable(Ae) {
      L(Ae), y();
    },
    get class() {
      return q();
    },
    set class(Ae) {
      q(Ae), y();
    }
  });
  return r(), pn;
}
de(
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
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  ze();
  var s = Cp(), a = xe(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const f = /* @__PURE__ */ be(() => i() ?? Me.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(f);
    }
  }), ke(() => {
    var d;
    return ft(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), D(e, s), he({
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
de(
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
function Dc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  ze(), Ve();
  var i = kp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return ft(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), he({
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
de(Dc, { data: {}, sourcePosition: {} }, [], [], !0);
var $p = /* @__PURE__ */ ne(" <!>", 1);
function Vc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "targetPosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  ze(), Ve();
  var i = $p(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return ft(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), he({
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
de(Vc, { data: {}, targetPosition: {} }, [], [], !0);
function Ac(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, []);
}
de(Ac, {}, [], [], !0);
function Ll(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Pr(e, { target: t, domNode: n }) {
  return Ll(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ll(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Ep = /* @__PURE__ */ ne("<div><!></div>");
function Oc(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(i, "$domNode", n), { domNode: i } = je();
  ze();
  var s = Ep(), a = F(s);
  bt(a, t, "default", {}), Y(s), xt(s, (l, u) => Pr == null ? void 0 : Pr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, s), he(), r();
}
de(Oc, {}, ["default"], [], !0);
function Lc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = je();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Rr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var Sp = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ic(e, t) {
  ge(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Lc(), s = cr("svelteflow__edge_id");
  return ze(), Oc(e, {
    children: (a, l) => {
      var u = Sp();
      let c;
      var f = F(u);
      bt(f, t, "default", {}), Y(u), ke(() => c = gt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), rt("keyup", u, () => {
      }), rt("click", u, () => {
        s && i(s);
      }), D(a, u);
    },
    $$slots: { default: !0 }
  }), he({
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
de(Ic, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Pp = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Np = /* @__PURE__ */ Pe('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), h = f() === void 0 ? 20 : f();
  ze();
  var p = Np(), x = xe(p), _ = B(x);
  {
    var k = (m) => {
      var C = Pp();
      Ce(C, "stroke-opacity", 0), Ce(C, "stroke-width", h), ke(() => Ce(C, "d", r())), D(m, C);
    };
    we(_, (m) => {
      h && m(k);
    });
  }
  var v = B(_);
  {
    var b = (m) => {
      Ic(m, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, H) => {
          Ve();
          var $ = qe();
          ke(() => ft($, o())), D(C, $);
        },
        $$slots: { default: !0 }
      });
    };
    we(v, (m) => {
      o() && m(b);
    });
  }
  return ke(
    (m) => {
      Ce(x, "id", n()), Ce(x, "d", r()), Ct(x, 0, m), Ce(x, "marker-start", l()), Ce(x, "marker-end", u()), gt(x, c());
    },
    [
      () => gn(Ht(["svelte-flow__edge-path", d()]))
    ],
    be
  ), D(e, p), he({
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
de(
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
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, [
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
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(x()), J(_()), J(p()), J(k())),
    () => {
      ((v) => (j(r, v[0]), j(o, v[1]), j(i, v[2])))(xc({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), wt(), ze(), zo(e, {
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
  }), he({
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
de(
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
function zc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, [
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
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(x()), J(_()), J(p()), J(k())),
    () => {
      ((v) => (j(r, v[0]), j(o, v[1]), j(i, v[2])))(Si({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), wt(), ze(), zo(e, {
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
  }), he({
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
function Rc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, [
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
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return ye(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(p()), J(x())),
    () => {
      ((_) => (j(r, _[0]), j(o, _[1]), j(i, _[2])))(Fs({
        sourceX: d(),
        sourceY: h(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), wt(), ze(), zo(e, {
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
  }), he({
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
de(
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Bc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, [
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
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), _ = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), J(d()), J(h()), J(x()), J(_()), J(p()), J(k())),
    () => {
      ((v) => (j(r, v[0]), j(o, v[1]), j(i, v[2])))(Si({
        sourceX: d(),
        sourceY: h(),
        targetX: x(),
        targetY: _(),
        sourcePosition: p(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), wt(), ze(), zo(e, {
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
  }), he({
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
de(
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
  const n = e.set, r = t.set, o = K(e), i = K(t);
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
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Hp = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Dp = (e, t, n, r = [0, 0], o = bi, i, s, a, l, u, c, f, d) => {
  const { subscribe: h, set: p, update: x } = Ee([]);
  let _ = e, k = {}, v = !0;
  const b = ($) => {
    const V = Cc($, t, n, {
      elevateNodesOnSelect: v,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: k,
      checkEquality: !1
    });
    return K(i) && V && K(l) && (N0({
      nodes: t,
      width: K(u),
      height: K(c),
      panZoom: K(l),
      minZoom: K(f),
      maxZoom: K(d)
    }, K(s)).then((O) => {
      var R;
      (R = K(a)) == null || R.resolve(O), a.set(null);
    }), i.set(!1), s.set(void 0)), _ = $, p(_), _;
  }, m = ($) => b($(_)), C = ($) => {
    k = $;
  }, H = ($) => {
    v = $.elevateNodesOnSelect ?? v;
  };
  return b(_), {
    subscribe: h,
    set: b,
    update: m,
    setDefaultOptions: C,
    setOptions: H
  };
}, Vp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = Ee([]);
  let a = e, l = {};
  const u = (d) => {
    const h = l ? d.map((p) => ({ ...l, ...p })) : d;
    $c(t, n, h), a = h, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, qc = {
  input: Dc,
  output: Vc,
  default: Pi,
  group: Ac
}, Yc = {
  straight: Rc,
  smoothstep: zc,
  default: Ni,
  step: Bc
}, Ap = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? bi;
  Cc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const H = Lo(a, {
      filter: ($) => !!(($.width || $.initialWidth) && ($.height || $.initialHeight))
    });
    h = Ca(H, n, r, 0.5, 2, 0.1);
  }
  const p = Ee(!1), x = Ee(void 0), _ = Ee(null), k = Ee(null), v = Ee(500), b = Ee(500), m = Ee(0.5), C = Ee(2);
  return {
    flowId: Ee(null),
    nodes: Dp(e, a, l, f, d, p, x, _, k, v, b, m, C),
    nodeLookup: Gt(a),
    parentLookup: Gt(l),
    edgeLookup: Gt(c),
    visibleNodes: Gt([]),
    edges: Vp(t, u, c),
    visibleEdges: Gt([]),
    connectionLookup: Gt(u),
    width: v,
    height: b,
    minZoom: m,
    maxZoom: C,
    nodeOrigin: Ee(f),
    nodeDragThreshold: Ee(1),
    nodeExtent: Ee(d),
    translateExtent: Ee(bi),
    autoPanOnNodeDrag: Ee(!0),
    autoPanOnConnect: Ee(!0),
    fitViewQueued: p,
    fitViewOptions: x,
    fitViewResolver: _,
    panZoom: k,
    snapGrid: Ee(null),
    dragging: Ee(!1),
    selectionRect: Ee(null),
    selectionKeyPressed: Ee(!1),
    multiselectionKeyPressed: Ee(!1),
    deleteKeyPressed: Ee(!1),
    panActivationKeyPressed: Ee(!1),
    zoomActivationKeyPressed: Ee(!1),
    selectionRectMode: Ee(null),
    selectionMode: Ee(Ci.Partial),
    nodeTypes: Ee(qc),
    edgeTypes: Ee(Yc),
    viewport: Ee(h),
    connectionMode: Ee(gr.Strict),
    domNode: Ee(null),
    connection: Gt(Bs),
    connectionLineType: Ee(Sr.Bezier),
    connectionRadius: Ee(20),
    isValidConnection: Ee(() => !0),
    nodesDraggable: Ee(!0),
    nodesConnectable: Ee(!0),
    elementsSelectable: Ee(!0),
    selectNodesOnDrag: Ee(!0),
    markers: Gt([]),
    defaultMarkerColor: Ee("#b1b1b7"),
    lib: Gt("svelte"),
    onlyRenderVisibleElements: Ee(!1),
    onerror: Ee(M0),
    ondelete: Ee(void 0),
    onedgecreate: Ee(void 0),
    onconnect: Ee(void 0),
    onconnectstart: Ee(void 0),
    onconnectend: Ee(void 0),
    onbeforedelete: Ee(void 0),
    nodesInitialized: Ee(!1),
    edgesInitialized: Ee(!1),
    viewportInitialized: Ee(!1),
    initialized: Gt(!1)
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
    return n ? gc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const es = Symbol();
function Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
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
      ...qc,
      ...P
    });
  }
  function u(P) {
    a.edgeTypes.set({
      ...Yc,
      ...P
    });
  }
  function c(P) {
    const S = K(a.edges);
    a.edges.set(F0(P, S));
  }
  const f = (P, S = !1) => {
    var T;
    const N = K(a.nodeLookup);
    for (const [M, L] of P) {
      const q = (T = N.get(M)) == null ? void 0 : T.internals.userNode;
      q && (q.position = L.position, q.dragging = S);
    }
    a.nodes.update((M) => M);
  };
  function d(P) {
    var L, q, X;
    const S = K(a.nodeLookup), N = K(a.parentLookup), { changes: T, updatedInternals: M } = np(P, S, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (M) {
      J0(S, N, { nodeOrigin: i, nodeExtent: s });
      for (const Z of T) {
        const ee = (L = S.get(Z.id)) == null ? void 0 : L.internals.userNode;
        if (ee)
          switch (Z.type) {
            case "dimensions": {
              const U = { ...ee.measured, ...Z.dimensions };
              Z.setAttributes && (ee.width = ((q = Z.dimensions) == null ? void 0 : q.width) ?? ee.width, ee.height = ((X = Z.dimensions) == null ? void 0 : X.height) ?? ee.height), ee.measured = U;
              break;
            }
            case "position":
              ee.position = Z.position ?? ee.position;
              break;
          }
      }
      a.nodes.update((Z) => Z), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(P) {
    const S = K(a.fitViewResolver) ?? A0();
    return a.fitViewQueued.set(!0), a.fitViewOptions.set(P), a.fitViewResolver.set(S), a.nodes.set(K(a.nodes)), S.promise;
  }
  function p(P, S) {
    const N = K(a.panZoom);
    return N ? N.scaleBy(P, S) : Promise.resolve(!1);
  }
  function x(P) {
    return p(1.2, P);
  }
  function _(P) {
    return p(1 / 1.2, P);
  }
  function k(P) {
    const S = K(a.panZoom);
    S && (S.setScaleExtent([P, K(a.maxZoom)]), a.minZoom.set(P));
  }
  function v(P) {
    const S = K(a.panZoom);
    S && (S.setScaleExtent([K(a.minZoom), P]), a.maxZoom.set(P));
  }
  function b(P) {
    const S = K(a.panZoom);
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
    (S = K(a.panZoom)) == null || S.setClickDistance(P);
  }
  function H(P) {
    m((P == null ? void 0 : P.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), m((P == null ? void 0 : P.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (P) => {
    var S;
    if (P) {
      const N = K(a.nodes), T = K(a.edges), M = N.filter((Z) => Z.selected), L = T.filter((Z) => Z.selected), { nodes: q, edges: X } = await hc({
        nodesToRemove: M,
        edgesToRemove: L,
        nodes: N,
        edges: T,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || X.length) && (a.nodes.update((Z) => Z.filter((ee) => !q.some((U) => U.id === ee.id))), a.edges.update((Z) => Z.filter((ee) => !X.some((U) => U.id === ee.id))), (S = K(a.ondelete)) == null || S({
        nodes: q,
        edges: X
      }));
    }
  });
  function $(P) {
    const S = K(a.multiselectionKeyPressed);
    a.nodes.update((N) => N.map((T) => {
      const M = P.includes(T.id), L = S && T.selected || M;
      return T.selected = L, T;
    })), S || a.edges.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function V(P) {
    const S = K(a.multiselectionKeyPressed);
    a.edges.update((N) => N.map((T) => {
      const M = P.includes(T.id), L = S && T.selected || M;
      return T.selected = L, T;
    })), S || a.nodes.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function A(P) {
    var N;
    const S = (N = K(a.nodes)) == null ? void 0 : N.find((T) => T.id === P);
    if (!S) {
      console.warn("012", Rr.error012(P));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), S.selected ? S.selected && K(a.multiselectionKeyPressed) && H({ nodes: [S], edges: [] }) : $([P]);
  }
  function O(P) {
    const S = K(a.viewport);
    return rp({
      delta: P,
      panZoom: K(a.panZoom),
      transform: [S.x, S.y, S.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const R = Ee(Bs), z = (P) => {
    R.set({ ...P });
  };
  function I() {
    R.set(Bs);
  }
  function E() {
    a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), H(), I();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Op(a),
    visibleNodes: Lp(a),
    connection: Zn([R, a.viewport], ([P, S]) => P.inProgress ? {
      ...P,
      to: Io(P.to, [S.x, S.y, S.zoom])
    } : { ...P }),
    markers: Zn([a.edges, a.defaultMarkerColor, a.flowId], ([P, S, N]) => G0(P, { defaultColor: S, id: N })),
    initialized: (() => {
      let P = !1;
      const S = K(a.nodes).length, N = K(a.edges).length;
      return Zn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([T, M, L]) => P || (S === 0 ? P = L : N === 0 ? P = L && T : P = L && T && M, P));
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
    unselectNodesAndEdges: H,
    addSelectedNodes: $,
    addSelectedEdges: V,
    handleNodeSelection: A,
    panBy: O,
    updateConnection: z,
    cancelConnection: I,
    reset: E
  };
}
function je() {
  const e = cr(es);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Ip({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Or(es, {
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
function Wc(e, t) {
  ge(t, !1), et(e, Rp);
  const [n, r] = ot(), o = () => Q(T, "$panActivationKeyPressed", n), i = () => Q(I, "$minZoom", n), s = () => Q(E, "$maxZoom", n), a = () => Q(M, "$zoomActivationKeyPressed", n), l = () => Q(z, "$selectionRect", n), u = () => Q(S, "$translateExtent", n), c = () => Q(N, "$lib", n), f = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae();
  let p = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), _ = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), v = w(t, "panOnScrollMode", 12), b = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), C = w(t, "zoomOnDoubleClick", 12), H = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), V = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: R,
    selectionRect: z,
    minZoom: I,
    maxZoom: E,
    dragging: P,
    translateExtent: S,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: M,
    viewportInitialized: L
  } = je(), q = (U) => O.set({
    x: U[0],
    y: U[1],
    zoom: U[2]
  });
  nn(() => {
    vi(L, !0);
  }), ye(() => J(p()), () => {
    j(f, p() || { x: 0, y: 0, zoom: 1 });
  }), ye(
    () => (o(), J($())),
    () => {
      j(d, o() || $());
    }
  ), ye(
    () => (o(), J(V())),
    () => {
      j(h, o() || V());
    }
  ), wt(), ze();
  var X = zp(), Z = F(X);
  bt(Z, t, "default", {}), Y(X), xt(X, (U, ue) => ws == null ? void 0 : ws(U, ue), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(f),
    dragging: P,
    panZoom: R,
    onPanZoomStart: x(),
    onPanZoom: _(),
    onPanZoomEnd: k(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: H(),
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
    onTransformChange: q
  })), D(e, X);
  var ee = he({
    get initialViewport() {
      return p();
    },
    set initialViewport(U) {
      p(U), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(U) {
      x(U), y();
    },
    get onMove() {
      return _();
    },
    set onMove(U) {
      _(U), y();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(U) {
      k(U), y();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(U) {
      v(U), y();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(U) {
      b(U), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(U) {
      m(U), y();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(U) {
      C(U), y();
    },
    get zoomOnPinch() {
      return H();
    },
    set zoomOnPinch(U) {
      H(U), y();
    },
    get panOnDrag() {
      return $();
    },
    set panOnDrag(U) {
      $(U), y();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(U) {
      V(U), y();
    },
    get paneClickDistance() {
      return A();
    },
    set paneClickDistance(U) {
      A(U), y();
    }
  });
  return r(), ee;
}
de(
  Wc,
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
function Il(e, t) {
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
var Bp = /* @__PURE__ */ ne("<div><!></div>");
const qp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Xc(e, t) {
  ge(t, !1), et(e, qp);
  const [n, r] = ot(), o = () => Q(P, "$panActivationKeyPressed", n), i = () => Q(I, "$selectionKeyPressed", n), s = () => Q(R, "$selectionRect", n), a = () => Q(O, "$elementsSelectable", n), l = () => Q(z, "$selectionRectMode", n), u = () => Q(N, "$connection", n), c = () => Q($, "$edges", n), f = () => Q(H, "$nodeLookup", n), d = () => Q(V, "$viewport", n), h = () => Q(E, "$selectionMode", n), p = () => Q(A, "$dragging", n), x = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae();
  let v = w(t, "panOnDrag", 12, void 0), b = w(t, "selectionOnDrag", 12, void 0);
  const m = Wi(), {
    nodes: C,
    nodeLookup: H,
    edges: $,
    viewport: V,
    dragging: A,
    elementsSelectable: O,
    selectionRect: R,
    selectionRectMode: z,
    selectionKeyPressed: I,
    selectionMode: E,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: S,
    connection: N
  } = je();
  let T = /* @__PURE__ */ ae(), M = null, L = [], q = !1;
  function X(le) {
    if (q || u().inProgress) {
      q = !1;
      return;
    }
    m("paneclick", { event: le }), S(), z.set(null);
  }
  function Z(le) {
    var G, Se;
    if (M = g(T).getBoundingClientRect(), !O || !g(_) || le.button !== 0 || le.target !== g(T) || !M)
      return;
    (Se = (G = le.target) == null ? void 0 : G.setPointerCapture) == null || Se.call(G, le.pointerId);
    const { x: ie, y: me } = An(le, M);
    S(), R.set({
      width: 0,
      height: 0,
      startX: ie,
      startY: me,
      x: ie,
      y: me
    });
  }
  function ee(le) {
    if (!g(_) || !M || !s())
      return;
    q = !0;
    const ie = An(le, M), me = s().startX ?? 0, G = s().startY ?? 0, Se = {
      ...s(),
      x: ie.x < me ? ie.x : me,
      y: ie.y < G ? ie.y : G,
      width: Math.abs(ie.x - me),
      height: Math.abs(ie.y - G)
    }, De = L.map((oe) => oe.id), Oe = qs(L, c()).map((oe) => oe.id);
    L = gc(
      f(),
      Se,
      [
        d().x,
        d().y,
        d().zoom
      ],
      h() === Ci.Partial,
      !0
    );
    const Re = qs(L, c()).map((oe) => oe.id), re = L.map((oe) => oe.id);
    (De.length !== re.length || re.some((oe) => !De.includes(oe))) && C.update((oe) => oe.map(zl(re))), (Oe.length !== Re.length || Re.some((oe) => !Oe.includes(oe))) && $.update((oe) => oe.map(zl(Re))), z.set("user"), R.set(Se);
  }
  function U(le) {
    var ie, me;
    le.button === 0 && ((me = (ie = le.target) == null ? void 0 : ie.releasePointerCapture) == null || me.call(ie, le.pointerId), !g(_) && l() === "user" && le.target === g(T) && (X == null || X(le)), R.set(null), L.length > 0 && vi(z, "nodes"), i() && (q = !1));
  }
  const ue = (le) => {
    var ie;
    if (Array.isArray(g(x)) && ((ie = g(x)) != null && ie.includes(2))) {
      le.preventDefault();
      return;
    }
    m("panecontextmenu", { event: le });
  };
  ye(
    () => (o(), J(v())),
    () => {
      j(x, o() || v());
    }
  ), ye(
    () => (i(), s(), J(b()), g(x)),
    () => {
      j(_, i() || s() || b() && g(x) !== !0);
    }
  ), ye(
    () => (a(), g(_), l()),
    () => {
      j(k, a() && (g(_) || l() === "user"));
    }
  ), wt(), ze();
  var ve = Bp(), pe = /* @__PURE__ */ Te(() => g(k) ? void 0 : Il(X, g(T))), se = /* @__PURE__ */ Te(() => Il(ue, g(T)));
  let Ne;
  var _e = F(ve);
  bt(_e, t, "default", {}), Y(ve), kn(ve, (le) => j(T, le), () => g(T)), ke(
    (le) => Ne = Ct(ve, 1, "svelte-flow__pane svelte-1esy7hx", null, Ne, le),
    [
      () => ({
        draggable: v() === !0 || Array.isArray(v()) && v().includes(0),
        dragging: p(),
        selection: g(_)
      })
    ],
    be
  ), rt("click", ve, function(...le) {
    var ie;
    (ie = g(pe)) == null || ie.apply(this, le);
  }), rt("pointerdown", ve, function(...le) {
    var ie;
    (ie = g(k) ? Z : void 0) == null || ie.apply(this, le);
  }), rt("pointermove", ve, function(...le) {
    var ie;
    (ie = g(k) ? ee : void 0) == null || ie.apply(this, le);
  }), rt("pointerup", ve, function(...le) {
    var ie;
    (ie = g(k) ? U : void 0) == null || ie.apply(this, le);
  }), rt("contextmenu", ve, function(...le) {
    var ie;
    (ie = g(se)) == null || ie.apply(this, le);
  }), D(e, ve);
  var $e = he({
    get panOnDrag() {
      return v();
    },
    set panOnDrag(le) {
      v(le), y();
    },
    get selectionOnDrag() {
      return b();
    },
    set selectionOnDrag(le) {
      b(le), y();
    }
  });
  return r(), $e;
}
de(Xc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Yp = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Fp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Zc(e, t) {
  ge(t, !1), et(e, Fp);
  const [n, r] = ot(), o = () => Q(i, "$viewport", n), { viewport: i } = je();
  ze();
  var s = Yp(), a = F(s);
  bt(a, t, "default", {}), Y(s), ke(() => gt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, s), he(), r();
}
de(Zc, {}, ["default"], [], !0);
function Nr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = sp({
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
function Kc(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(ve, "$nodeTypes", n), i = () => Q($e, "$elementsSelectable", n), s = () => Q(le, "$nodesDraggable", n), a = () => Q(Se, "$connectableStore", n), l = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), f = /* @__PURE__ */ ae(void 0, !0);
  let d = w(t, "node", 13), h = w(t, "id", 13), p = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), _ = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), v = w(t, "connectable", 13, !0), b = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), C = w(t, "dragging", 13, !1), H = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), V = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), O = w(t, "positionX", 13), R = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), P = w(t, "measuredWidth", 13, void 0), S = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), M = w(t, "width", 13, void 0), L = w(t, "height", 13, void 0), q = w(t, "dragHandle", 13, void 0), X = w(t, "initialized", 13, !1), Z = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), U = w(t, "class", 13, "");
  const ue = je(), {
    nodeTypes: ve,
    nodeDragThreshold: pe,
    selectNodesOnDrag: se,
    handleNodeSelection: Ne,
    updateNodeInternals: _e,
    elementsSelectable: $e,
    nodesDraggable: le
  } = ue;
  let ie = /* @__PURE__ */ ae(void 0, !0), me = /* @__PURE__ */ ae(null, !0);
  const G = Wi(), Se = Ee(v());
  let De = /* @__PURE__ */ ae(void 0, !0), Oe = /* @__PURE__ */ ae(void 0, !0), Re = /* @__PURE__ */ ae(void 0, !0);
  Or("svelteflow__node_id", h()), Or("svelteflow__node_connectable", Se), ga(() => {
    var te;
    g(me) && ((te = H()) == null || te.unobserve(g(me)));
  });
  function re(te) {
    k() && (!K(se) || !_() || K(pe) > 0) && Ne(h()), G("nodeclick", { node: d().internals.userNode, event: te });
  }
  ye(() => J(V()), () => {
    j(l, V() || "default");
  }), ye(() => (o(), g(l)), () => {
    j(u, !!o()[g(l)]);
  }), ye(
    () => (o(), g(l), Pi),
    () => {
      j(c, o()[g(l)] || Pi);
    }
  ), ye(
    () => (g(u), J(V())),
    () => {
      g(u) || console.warn("003", Rr.error003(V()));
    }
  ), ye(
    () => (J(M()), J(L()), J(N()), J(T()), J(P()), J(S())),
    () => {
      j(f, Wp({
        width: M(),
        height: L(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: P(),
        measuredHeight: S()
      }));
    }
  ), ye(() => J(v()), () => {
    Se.set(!!v());
  }), ye(
    () => (g(De), g(l), g(Oe), J(z()), g(Re), J(I()), J(h()), g(ie)),
    () => {
      (g(De) && g(l) !== g(De) || g(Oe) && z() !== g(Oe) || g(Re) && I() !== g(Re)) && requestAnimationFrame(() => _e(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(ie),
            force: !0
          }
        ]
      ]))), j(De, g(l)), j(Oe, z()), j(Re, I());
    }
  ), ye(
    () => (J(H()), g(ie), g(me), J(X())),
    () => {
      H() && (g(ie) !== g(me) || !X()) && (g(me) && H().unobserve(g(me)), g(ie) && H().observe(g(ie)), j(me, g(ie)));
    }
  ), wt(), ze(!0);
  var oe = tt(), fe = xe(oe);
  {
    var Le = (te) => {
      var Ie = Xp();
      let ce, ct;
      var rn = F(Ie);
      const pn = /* @__PURE__ */ be(() => x() ?? !1), Ae = /* @__PURE__ */ be(() => k() ?? i() ?? !0), it = /* @__PURE__ */ be(() => b() ?? !0), Fe = /* @__PURE__ */ be(() => _() ?? s() ?? !0);
      Mu(rn, () => g(c), (Be, st) => {
        st(Be, {
          get data() {
            return p();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(pn);
          },
          get selectable() {
            return g(Ae);
          },
          get deletable() {
            return g(it);
          },
          get sourcePosition() {
            return z();
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
            return g(Fe);
          },
          get dragHandle() {
            return q();
          },
          get parentId() {
            return Z();
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
            return R();
          },
          get width() {
            return M();
          },
          get height() {
            return L();
          }
        });
      }), Y(Ie), xt(Ie, (Be, st) => Nr == null ? void 0 : Nr(Be, st), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: q(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: Ne,
        onDrag: (Be, st, on, Kt) => {
          G("nodedrag", { event: Be, targetNode: on, nodes: Kt });
        },
        onDragStart: (Be, st, on, Kt) => {
          G("nodedragstart", { event: Be, targetNode: on, nodes: Kt });
        },
        onDragStop: (Be, st, on, Kt) => {
          G("nodedragstop", { event: Be, targetNode: on, nodes: Kt });
        },
        store: ue
      })), kn(Ie, (Be) => j(ie, Be), () => g(ie)), qt(() => rt("click", Ie, re)), qt(() => rt("mouseenter", Ie, (Be) => G("nodemouseenter", { node: d(), event: Be }))), qt(() => rt("mouseleave", Ie, (Be) => G("nodemouseleave", { node: d(), event: Be }))), qt(() => rt("mousemove", Ie, (Be) => G("nodemousemove", { node: d(), event: Be }))), qt(() => rt("contextmenu", Ie, (Be) => G("nodecontextmenu", { node: d(), event: Be }))), ke(
        (Be, st) => {
          Ce(Ie, "data-id", h()), ce = Ct(Ie, 1, Be, null, ce, st), ct = gt(Ie, `${$() ?? "" ?? ""};${g(f).width ?? ""}${g(f).height ?? ""}`, ct, {
            "z-index": E(),
            transform: `translate(${O() ?? ""}px, ${R() ?? ""}px)`,
            visibility: X() ? "visible" : "hidden"
          });
        },
        [
          () => gn(Ht([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            U()
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
        be
      ), D(te, Ie);
    };
    we(fe, (te) => {
      m() || te(Le);
    });
  }
  D(e, oe);
  var Ze = he({
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
      return H();
    },
    set resizeObserver(te) {
      H(te), y();
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
      return R();
    },
    set positionY(te) {
      R(te), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(te) {
      z(te), y();
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
      return T();
    },
    set initialHeight(te) {
      T(te), y();
    },
    get width() {
      return M();
    },
    set width(te) {
      M(te), y();
    },
    get height() {
      return L();
    },
    set height(te) {
      L(te), y();
    },
    get dragHandle() {
      return q();
    },
    set dragHandle(te) {
      q(te), y();
    },
    get initialized() {
      return X();
    },
    set initialized(te) {
      X(te), y();
    },
    get parentId() {
      return Z();
    },
    set parentId(te) {
      Z(te), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(te) {
      ee(te), y();
    },
    get class() {
      return U();
    },
    set class(te) {
      U(te), y();
    }
  });
  return r(), Ze;
}
de(
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
var Zp = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Kp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Gc(e, t) {
  ge(t, !1), et(e, Kp);
  const [n, r] = ot(), o = () => Q(c, "$visibleNodes", n), i = () => Q(f, "$nodesDraggable", n), s = () => Q(h, "$elementsSelectable", n), a = () => Q(d, "$nodesConnectable", n), l = () => Q(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: x
  } = je(), _ = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const m = /* @__PURE__ */ new Map();
    b.forEach((C) => {
      const H = C.target.getAttribute("data-id");
      m.set(H, { id: H, nodeElement: C.target, force: !0 });
    }), p(m);
  });
  ga(() => {
    _ == null || _.disconnect();
  }), ze();
  var k = Zp();
  Mt(k, 5, o, (b) => b.id, (b, m) => {
    const C = /* @__PURE__ */ be(() => !!g(m).selected), H = /* @__PURE__ */ be(() => !!g(m).hidden), $ = /* @__PURE__ */ be(() => !!(g(m).draggable || i() && typeof g(m).draggable > "u")), V = /* @__PURE__ */ be(() => !!(g(m).selectable || s() && typeof g(m).selectable > "u")), A = /* @__PURE__ */ be(() => !!(g(m).connectable || a() && typeof g(m).connectable > "u")), O = /* @__PURE__ */ be(() => g(m).deletable ?? !0), R = /* @__PURE__ */ be(() => l().has(g(m).id)), z = /* @__PURE__ */ be(() => g(m).type ?? "default"), I = /* @__PURE__ */ be(() => g(m).internals.z ?? 0), E = /* @__PURE__ */ be(() => yc(g(m)));
    Kc(b, {
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
        return g(H);
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
        return g(R);
      },
      get style() {
        return g(m).style;
      },
      get class() {
        return g(m).class;
      },
      get type() {
        return g(z);
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
  }), Y(k), D(e, k);
  var v = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), y();
    }
  });
  return r(), v;
}
de(Gc, { nodeClickDistance: {} }, [], [], !0);
var Gp = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function Uc(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(U, "$edgeTypes", n), i = () => Q(ue, "$flowId", n), s = () => Q(ve, "$elementsSelectable", n), a = () => Q(ee, "$edgeLookup", n), l = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), f = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0);
  let h = w(t, "id", 13), p = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), _ = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), v = w(t, "style", 13, void 0), b = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), C = w(t, "selected", 13, !1), H = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), V = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), O = w(t, "labelStyle", 13, void 0), R = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), P = w(t, "sourceX", 13), S = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), M = w(t, "sourcePosition", 13), L = w(t, "targetPosition", 13), q = w(t, "ariaLabel", 13, void 0), X = w(t, "interactionWidth", 13, void 0), Z = w(t, "class", 13, "");
  Or("svelteflow__edge_id", h());
  const {
    edgeLookup: ee,
    edgeTypes: U,
    flowId: ue,
    elementsSelectable: ve
  } = je(), pe = Wi(), se = Lc();
  function Ne(G) {
    const Se = a().get(h());
    Se && (se(h()), pe("edgeclick", { event: G, edge: Se }));
  }
  function _e(G, Se) {
    const De = a().get(h());
    De && pe(Se, { event: G, edge: De });
  }
  ye(() => J(p()), () => {
    j(l, p() || "default");
  }), ye(
    () => (o(), g(l), Ni),
    () => {
      j(u, o()[g(l)] || Ni);
    }
  ), ye(
    () => (J(R()), i()),
    () => {
      j(c, R() ? `url('#${Ws(R(), i())}')` : void 0);
    }
  ), ye(
    () => (J(z()), i()),
    () => {
      j(f, z() ? `url('#${Ws(z(), i())}')` : void 0);
    }
  ), ye(
    () => (J(H()), s()),
    () => {
      j(d, H() ?? s());
    }
  ), wt(), ze(!0);
  var $e = tt(), le = xe($e);
  {
    var ie = (G) => {
      var Se = Gp();
      let De;
      var Oe = F(Se);
      let Re;
      var re = F(Oe);
      const oe = /* @__PURE__ */ be(() => $() ?? !0);
      Mu(re, () => g(u), (fe, Le) => {
        Le(fe, {
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
            return T();
          },
          get sourcePosition() {
            return M();
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
            return X();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g(oe);
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
      }), Y(Oe), Y(Se), ke(
        (fe, Le) => {
          De = gt(Se, "", De, { "z-index": b() }), Re = Ct(Oe, 0, fe, null, Re, Le), Ce(Oe, "data-id", h()), Ce(Oe, "aria-label", q() === null ? void 0 : q() ? q() : `Edge from ${x()} to ${_()}`);
        },
        [
          () => gn(Ht(["svelte-flow__edge", Z()])),
          () => ({
            animated: m(),
            selected: C(),
            selectable: g(d)
          })
        ],
        be
      ), rt("click", Oe, Ne), rt("contextmenu", Oe, (fe) => {
        _e(fe, "edgecontextmenu");
      }), rt("mouseenter", Oe, (fe) => {
        _e(fe, "edgemouseenter");
      }), rt("mouseleave", Oe, (fe) => {
        _e(fe, "edgemouseleave");
      }), D(G, Se);
    };
    we(le, (G) => {
      V() || G(ie);
    });
  }
  D(e, $e);
  var me = he({
    get id() {
      return h();
    },
    set id(G) {
      h(G), y();
    },
    get type() {
      return p();
    },
    set type(G) {
      p(G), y();
    },
    get source() {
      return x();
    },
    set source(G) {
      x(G), y();
    },
    get target() {
      return _();
    },
    set target(G) {
      _(G), y();
    },
    get data() {
      return k();
    },
    set data(G) {
      k(G), y();
    },
    get style() {
      return v();
    },
    set style(G) {
      v(G), y();
    },
    get zIndex() {
      return b();
    },
    set zIndex(G) {
      b(G), y();
    },
    get animated() {
      return m();
    },
    set animated(G) {
      m(G), y();
    },
    get selected() {
      return C();
    },
    set selected(G) {
      C(G), y();
    },
    get selectable() {
      return H();
    },
    set selectable(G) {
      H(G), y();
    },
    get deletable() {
      return $();
    },
    set deletable(G) {
      $(G), y();
    },
    get hidden() {
      return V();
    },
    set hidden(G) {
      V(G), y();
    },
    get label() {
      return A();
    },
    set label(G) {
      A(G), y();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(G) {
      O(G), y();
    },
    get markerStart() {
      return R();
    },
    set markerStart(G) {
      R(G), y();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(G) {
      z(G), y();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(G) {
      I(G), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(G) {
      E(G), y();
    },
    get sourceX() {
      return P();
    },
    set sourceX(G) {
      P(G), y();
    },
    get sourceY() {
      return S();
    },
    set sourceY(G) {
      S(G), y();
    },
    get targetX() {
      return N();
    },
    set targetX(G) {
      N(G), y();
    },
    get targetY() {
      return T();
    },
    set targetY(G) {
      T(G), y();
    },
    get sourcePosition() {
      return M();
    },
    set sourcePosition(G) {
      M(G), y();
    },
    get targetPosition() {
      return L();
    },
    set targetPosition(G) {
      L(G), y();
    },
    get ariaLabel() {
      return q();
    },
    set ariaLabel(G) {
      q(G), y();
    },
    get interactionWidth() {
      return X();
    },
    set interactionWidth(G) {
      X(G), y();
    },
    get class() {
      return Z();
    },
    set class(G) {
      Z(G), y();
    }
  });
  return r(), me;
}
de(
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
function jc(e, t) {
  ge(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return nn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), ze(), he({
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
de(jc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Up = /* @__PURE__ */ Pe("<defs></defs>");
function Jc(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(i, "$markers", n), { markers: i } = je();
  ze();
  var s = Up();
  Mt(s, 5, o, (a) => a.id, (a, l) => {
    Qc(a, ut(() => g(l)));
  }), Y(s), D(e, s), he(), r();
}
de(Jc, {}, [], [], !0);
var jp = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Jp = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Qp = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Qc(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  ze();
  var c = Qp(), f = F(c);
  {
    var d = (p) => {
      var x = jp();
      ke(() => {
        Ce(x, "stroke", l()), Ce(x, "stroke-width", u());
      }), D(p, x);
    }, h = (p, x) => {
      {
        var _ = (k) => {
          var v = Jp();
          ke(() => {
            Ce(v, "stroke", l()), Ce(v, "stroke-width", u()), Ce(v, "fill", l());
          }), D(k, v);
        };
        we(
          p,
          (k) => {
            r() === $o.ArrowClosed && k(_);
          },
          x
        );
      }
    };
    we(f, (p) => {
      r() === $o.Arrow ? p(d) : p(h, !1);
    });
  }
  return Y(c), ke(() => {
    Ce(c, "id", n()), Ce(c, "markerWidth", `${o()}`), Ce(c, "markerHeight", `${i()}`), Ce(c, "markerUnits", s()), Ce(c, "orient", a());
  }), D(e, c), he({
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
de(
  Qc,
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
function ed(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = je();
  nn(() => {
    s() && u(s());
  }), ze();
  var f = e2(), d = F(f), h = F(d);
  Jc(h, {}), Y(d);
  var p = B(d, 2);
  Mt(p, 1, o, (v) => v.id, (v, b) => {
    const m = /* @__PURE__ */ be(() => g(b).selectable ?? i()), C = /* @__PURE__ */ be(() => g(b).type || "default");
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
  var x = B(p, 2);
  {
    var _ = (v) => {
      jc(v, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    we(x, (v) => {
      o().length > 0 && v(_);
    });
  }
  Y(f), D(e, f);
  var k = he({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), y();
    }
  });
  return r(), k;
}
de(ed, { defaultEdgeOptions: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const n2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Sa(e, t) {
  ge(t, !1), et(e, n2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = tt(), l = xe(a);
  {
    var u = (c) => {
      var f = t2();
      let d;
      ke(() => d = gt(f, "", d, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, f);
    };
    we(l, (c) => {
      s() && c(u);
    });
  }
  return D(e, a), he({
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
de(
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
function td(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = je();
  ze();
  const l = /* @__PURE__ */ be(() => !!(o() && i() === "user")), u = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), f = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), d = /* @__PURE__ */ be(() => {
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
  }), he(), r();
}
de(td, {}, [], [], !0);
var r2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const o2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function nd(e, t) {
  ge(t, !1), et(e, o2);
  const [n, r] = ot(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Wi();
  let d = /* @__PURE__ */ ae(null);
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
      o() === "nodes" && (j(d, Lo(i(), { filter: (v) => !!v.selected })), s());
    }
  ), wt(), ze();
  var x = tt(), _ = xe(x);
  {
    var k = (v) => {
      var b = r2(), m = F(b);
      Sa(m, { width: "100%", height: "100%", x: 0, y: 0 }), Y(b), xt(b, (C, H) => Nr == null ? void 0 : Nr(C, H), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, H, $, V) => {
          f("nodedrag", { event: C, targetNode: null, nodes: V });
        },
        onDragStart: (C, H, $, V) => {
          f("nodedragstart", { event: C, targetNode: null, nodes: V });
        },
        onDragStop: (C, H, $, V) => {
          f("nodedragstop", { event: C, targetNode: null, nodes: V });
        }
      })), qt(() => rt("contextmenu", b, h)), qt(() => rt("click", b, p)), qt(() => rt("keyup", b, () => {
      })), ke(() => gt(b, `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), D(v, b);
    };
    we(_, (v) => {
      o() === "nodes" && g(d) && Hn(g(d).x) && Hn(g(d).y) && v(k);
    });
  }
  D(e, x), he(), r();
}
de(nd, {}, [], [], !0);
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
function rd(e, t) {
  ge(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ei() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => Ei() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = je();
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
      const H = x(C);
      return {
        key: H,
        modifier: p(C),
        enabled: H !== null,
        callback: b
      };
    });
  }
  function k() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return ze(), rt("blur", At, k), rt("contextmenu", At, k), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(n(), () => a.set(!0)),
    type: "keydown"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(n(), () => a.set(!1)),
    type: "keyup"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(r(), () => l.set(!0)),
    type: "keydown"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(r(), () => l.set(!1)),
    type: "keyup"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !I0(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(o(), () => u.set(!1)),
    type: "keyup"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(i(), () => c.set(!0)),
    type: "keydown"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(i(), () => c.set(!1)),
    type: "keyup"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(s(), () => f.set(!0)),
    type: "keydown"
  })), xt(At, (v, b) => Je == null ? void 0 : Je(v, b), () => ({
    trigger: _(s(), () => f.set(!1)),
    type: "keyup"
  })), he({
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
de(
  rd,
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
function od(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(h, "$connection", n), i = () => Q(p, "$connectionLineType", n), s = () => Q(f, "$width", n), a = () => Q(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: h,
    connectionLineType: p
  } = je();
  let x = /* @__PURE__ */ ae(null);
  ye(
    () => (o(), J(c()), i(), g(x), Fs),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: C, fromPosition: H, toPosition: $ } = o(), V = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: H,
          targetX: C.x,
          targetY: C.y,
          targetPosition: $
        };
        switch (i()) {
          case Sr.Bezier:
            ((A) => j(x, A[0]))(xc(V));
            break;
          case Sr.Step:
            ((A) => j(x, A[0]))(Si({ ...V, borderRadius: 0 }));
            break;
          case Sr.SmoothStep:
            ((A) => j(x, A[0]))(Si(V));
            break;
          default:
            ((A) => j(x, A[0]))(Fs(V));
        }
      }
    }
  ), wt(), ze();
  var _ = tt(), k = xe(_);
  {
    var v = (m) => {
      var C = s2(), H = F(C), $ = F(H);
      bt($, t, "connectionLine", {});
      var V = B($);
      {
        var A = (O) => {
          var R = i2();
          ke(() => {
            Ce(R, "d", g(x)), gt(R, u());
          }), D(O, R);
        };
        we(V, (O) => {
          c() || O(A);
        });
      }
      Y(H), Y(C), ke(
        (O) => {
          Ce(C, "width", s()), Ce(C, "height", a()), gt(C, l()), Ct(H, 0, O);
        },
        [
          () => gn(Ht([
            "svelte-flow__connection",
            k0(o().isValid)
          ]))
        ],
        be
      ), D(m, C);
    };
    we(k, (m) => {
      o().inProgress && m(v);
    });
  }
  D(e, _);
  var b = he({
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
de(
  od,
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
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = lt(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = ot(), s = () => Q(f, "$selectionRectMode", o), a = /* @__PURE__ */ ae();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = je();
  ye(() => J(l()), () => {
    j(a, `${l()}`.split("-"));
  }), wt(), ze();
  var d = a2();
  let h;
  var p = F(d);
  bt(p, t, "default", {}), Y(d), ke(
    (_) => h = Xt(d, h, {
      class: _,
      style: u(),
      ...r,
      [ir]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => Ht([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    be
  ), D(e, d);
  var x = he({
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
de(Ro, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var l2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function id(e, t) {
  ge(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  ze();
  var o = tt(), i = xe(o);
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
    we(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return D(e, o), he({
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
de(id, { proOptions: {}, position: {} }, [], [], !0);
function Rl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const u2 = (e) => Object.keys(e);
function Bl(e, t) {
  u2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function c2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function d2(e = "light") {
  return Gt("light", (n) => {
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
function sd(e, t) {
  const n = P1(t), r = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = lt(r, [
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
  ge(t, !1), et(e, v2);
  const [i, s] = ot(), a = () => Q(b(), "$viewport", i), l = () => Q(is, "$initialized", i), u = () => Q(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ae();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), h = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), _ = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), v = w(t, "initialViewport", 12, void 0), b = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), C = w(t, "edgeTypes", 12, void 0), H = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), V = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), O = w(t, "zoomActivationKey", 12, void 0), R = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), P = w(t, "snapGrid", 12, void 0), S = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), M = w(t, "connectionMode", 28, () => gr.Strict), L = w(t, "connectionLineStyle", 12, ""), q = w(t, "connectionLineContainerStyle", 12, ""), X = w(t, "onMoveStart", 12, void 0), Z = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), U = w(t, "isValidConnection", 12, void 0), ue = w(t, "translateExtent", 12, void 0), ve = w(t, "nodeExtent", 12, void 0), pe = w(t, "onlyRenderVisibleElements", 12, void 0), se = w(t, "panOnScrollMode", 28, () => Kn.Free), Ne = w(t, "preventScrolling", 12, !0), _e = w(t, "zoomOnScroll", 12, !0), $e = w(t, "zoomOnDoubleClick", 12, !0), le = w(t, "zoomOnPinch", 12, !0), ie = w(t, "panOnScroll", 12, !1), me = w(t, "panOnDrag", 12, !0), G = w(t, "selectionOnDrag", 12, void 0), Se = w(t, "autoPanOnConnect", 12, !0), De = w(t, "autoPanOnNodeDrag", 12, !0), Oe = w(t, "onerror", 12, void 0), Re = w(t, "ondelete", 12, void 0), re = w(t, "onedgecreate", 12, void 0), oe = w(t, "attributionPosition", 12, void 0), fe = w(t, "proOptions", 12, void 0), Le = w(t, "defaultEdgeOptions", 12, void 0), Ze = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Ie = w(t, "colorMode", 12, "light"), ce = w(t, "onconnect", 12, void 0), ct = w(t, "onconnectstart", 12, void 0), rn = w(t, "onconnectend", 12, void 0), pn = w(t, "onbeforedelete", 12, void 0), Ae = w(t, "oninit", 12, void 0), it = w(t, "nodeOrigin", 12, void 0), Fe = w(t, "paneClickDistance", 12, 0), Be = w(t, "nodeClickDistance", 12, 0), st = w(t, "defaultMarkerColor", 12, "#b1b1b7"), on = w(t, "style", 12, void 0), Kt = w(t, "class", 12, void 0), eo = /* @__PURE__ */ ae(), kt = /* @__PURE__ */ ae(), Dt = /* @__PURE__ */ ae();
  const wr = a() || v(), at = l1(es) ? je() : Ip({
    nodes: K(d()),
    edges: K(h()),
    width: Ze(),
    height: te(),
    fitView: p(),
    nodeOrigin: it(),
    nodeExtent: ve()
  });
  nn(() => (at.width.set(g(kt)), at.height.set(g(Dt)), at.domNode.set(g(eo)), at.syncNodeStores(d()), at.syncEdgeStores(h()), at.syncViewport(b()), p() !== void 0 && at.fitViewQueued.set(p()), x() && at.fitViewOptions.set(x()), Rl(at, {
    nodeTypes: m(),
    edgeTypes: C(),
    minZoom: _(),
    maxZoom: k(),
    translateExtent: ue(),
    paneClickDistance: Fe()
  }), () => {
    at.reset();
  }));
  const { initialized: is } = at;
  let to = /* @__PURE__ */ ae(!1);
  ye(
    () => (g(kt), g(Dt)),
    () => {
      g(kt) !== void 0 && g(Dt) !== void 0 && (at.width.set(g(kt)), at.height.set(g(Dt)));
    }
  ), ye(
    () => (g(to), l(), J(Ae())),
    () => {
      var W;
      !g(to) && l() && ((W = Ae()) == null || W(), j(to, !0));
    }
  ), ye(
    () => (J(f()), J(T()), J(N()), J($()), J(P()), J(st()), J(R()), J(z()), J(E()), J(pe()), J(U()), J(Se()), J(De()), J(Oe()), J(Re()), J(re()), J(M()), J(I()), J(ce()), J(ct()), J(rn()), J(pn()), J(it()), Bl),
    () => {
      const W = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: $(),
        snapGrid: P(),
        defaultMarkerColor: st(),
        nodesDraggable: R(),
        nodesConnectable: z(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: pe(),
        isValidConnection: U(),
        autoPanOnConnect: Se(),
        autoPanOnNodeDrag: De(),
        onerror: Oe(),
        ondelete: Re(),
        onedgecreate: re(),
        connectionMode: M(),
        nodeDragThreshold: I(),
        onconnect: ce(),
        onconnectstart: ct(),
        onconnectend: rn(),
        onbeforedelete: pn(),
        nodeOrigin: it()
      };
      Bl(at, W);
    }
  ), ye(
    () => (J(m()), J(C()), J(_()), J(k()), J(ue()), J(Fe())),
    () => {
      Rl(at, {
        nodeTypes: m(),
        edgeTypes: C(),
        minZoom: _(),
        maxZoom: k(),
        translateExtent: ue(),
        paneClickDistance: Fe()
      });
    }
  ), ye(
    () => J(Ie()),
    () => {
      I1(j(c, d2(Ie())), "$colorModeClass", i);
    }
  ), wt(), ze();
  var Rt = h2();
  let Fo;
  var Wo = F(Rt);
  rd(Wo, {
    get selectionKey() {
      return H();
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
  var Xo = B(Wo, 2);
  const ss = /* @__PURE__ */ be(() => se() === void 0 ? Kn.Free : se()), tf = /* @__PURE__ */ be(() => Ne() === void 0 ? !0 : Ne()), nf = /* @__PURE__ */ be(() => _e() === void 0 ? !0 : _e()), rf = /* @__PURE__ */ be(() => $e() === void 0 ? !0 : $e()), of = /* @__PURE__ */ be(() => le() === void 0 ? !0 : le()), sf = /* @__PURE__ */ be(() => ie() === void 0 ? !1 : ie()), af = /* @__PURE__ */ be(() => me() === void 0 ? !0 : me()), lf = /* @__PURE__ */ be(() => Fe() === void 0 ? 0 : Fe());
  Wc(Xo, {
    initialViewport: wr,
    get onMoveStart() {
      return X();
    },
    get onMove() {
      return Z();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return g(ss);
    },
    get preventScrolling() {
      return g(tf);
    },
    get zoomOnScroll() {
      return g(nf);
    },
    get zoomOnDoubleClick() {
      return g(rf);
    },
    get zoomOnPinch() {
      return g(of);
    },
    get panOnScroll() {
      return g(sf);
    },
    get panOnDrag() {
      return g(af);
    },
    get paneClickDistance() {
      return g(lf);
    },
    children: (W, Kw) => {
      const df = /* @__PURE__ */ be(() => me() === void 0 ? !0 : me());
      Xc(W, {
        get panOnDrag() {
          return g(df);
        },
        get selectionOnDrag() {
          return G();
        },
        $$events: {
          paneclick(no) {
            Xe.call(this, t, no);
          },
          panecontextmenu(no) {
            Xe.call(this, t, no);
          }
        },
        children: (no, Gw) => {
          var Va = g2(), Aa = xe(Va);
          Zc(Aa, {
            children: (gf, Uw) => {
              var Oa = f2(), La = xe(Oa);
              ed(La, {
                get defaultEdgeOptions() {
                  return Le();
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
              var Ia = B(La, 2);
              od(Ia, {
                get containerStyle() {
                  return q();
                },
                get style() {
                  return L();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (We, jw) => {
                    var Ra = tt(), vf = xe(Ra);
                    bt(vf, t, "connectionLine", {}), D(We, Ra);
                  }
                }
              });
              var za = B(Ia, 6);
              Gc(za, {
                get nodeClickDistance() {
                  return Be();
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
              var hf = B(za, 2);
              nd(hf, {
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
              }), D(gf, Oa);
            },
            $$slots: { default: !0 }
          });
          var ff = B(Aa, 2);
          td(ff, {}), D(no, Va);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Da = B(Xo, 2);
  id(Da, {
    get proOptions() {
      return fe();
    },
    get position() {
      return oe();
    }
  });
  var uf = B(Da, 2);
  bt(uf, t, "default", {}), Y(Rt), kn(Rt, (W) => j(eo, W), () => g(eo)), ke(
    (W) => Fo = Xt(
      Rt,
      Fo,
      {
        style: on(),
        class: W,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Ht([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    be
  ), tl(Rt, "clientWidth", (W) => j(kt, W)), tl(Rt, "clientHeight", (W) => j(Dt, W)), rt("dragover", Rt, function(W) {
    Xe.call(this, t, W);
  }), rt("drop", Rt, function(W) {
    Xe.call(this, t, W);
  }), D(e, Rt);
  var cf = he({
    get id() {
      return f();
    },
    set id(W) {
      f(W), y();
    },
    get nodes() {
      return d();
    },
    set nodes(W) {
      d(W), y();
    },
    get edges() {
      return h();
    },
    set edges(W) {
      h(W), y();
    },
    get fitView() {
      return p();
    },
    set fitView(W) {
      p(W), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(W) {
      x(W), y();
    },
    get minZoom() {
      return _();
    },
    set minZoom(W) {
      _(W), y();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(W) {
      k(W), y();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get viewport() {
      return b();
    },
    set viewport(W) {
      b(W), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(W) {
      m(W), y();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(W) {
      C(W), y();
    },
    get selectionKey() {
      return H();
    },
    set selectionKey(W) {
      H(W), y();
    },
    get selectionMode() {
      return $();
    },
    set selectionMode(W) {
      $(W), y();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(W) {
      V(W), y();
    },
    get multiSelectionKey() {
      return A();
    },
    set multiSelectionKey(W) {
      A(W), y();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(W) {
      O(W), y();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(W) {
      R(W), y();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(W) {
      z(W), y();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(W) {
      I(W), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(W) {
      E(W), y();
    },
    get snapGrid() {
      return P();
    },
    set snapGrid(W) {
      P(W), y();
    },
    get deleteKey() {
      return S();
    },
    set deleteKey(W) {
      S(W), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(W) {
      N(W), y();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(W) {
      T(W), y();
    },
    get connectionMode() {
      return M();
    },
    set connectionMode(W) {
      M(W), y();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(W) {
      L(W), y();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(W) {
      q(W), y();
    },
    get onMoveStart() {
      return X();
    },
    set onMoveStart(W) {
      X(W), y();
    },
    get onMove() {
      return Z();
    },
    set onMove(W) {
      Z(W), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(W) {
      ee(W), y();
    },
    get isValidConnection() {
      return U();
    },
    set isValidConnection(W) {
      U(W), y();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(W) {
      ue(W), y();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(W) {
      ve(W), y();
    },
    get onlyRenderVisibleElements() {
      return pe();
    },
    set onlyRenderVisibleElements(W) {
      pe(W), y();
    },
    get panOnScrollMode() {
      return se();
    },
    set panOnScrollMode(W) {
      se(W), y();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(W) {
      Ne(W), y();
    },
    get zoomOnScroll() {
      return _e();
    },
    set zoomOnScroll(W) {
      _e(W), y();
    },
    get zoomOnDoubleClick() {
      return $e();
    },
    set zoomOnDoubleClick(W) {
      $e(W), y();
    },
    get zoomOnPinch() {
      return le();
    },
    set zoomOnPinch(W) {
      le(W), y();
    },
    get panOnScroll() {
      return ie();
    },
    set panOnScroll(W) {
      ie(W), y();
    },
    get panOnDrag() {
      return me();
    },
    set panOnDrag(W) {
      me(W), y();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(W) {
      G(W), y();
    },
    get autoPanOnConnect() {
      return Se();
    },
    set autoPanOnConnect(W) {
      Se(W), y();
    },
    get autoPanOnNodeDrag() {
      return De();
    },
    set autoPanOnNodeDrag(W) {
      De(W), y();
    },
    get onerror() {
      return Oe();
    },
    set onerror(W) {
      Oe(W), y();
    },
    get ondelete() {
      return Re();
    },
    set ondelete(W) {
      Re(W), y();
    },
    get onedgecreate() {
      return re();
    },
    set onedgecreate(W) {
      re(W), y();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(W) {
      oe(W), y();
    },
    get proOptions() {
      return fe();
    },
    set proOptions(W) {
      fe(W), y();
    },
    get defaultEdgeOptions() {
      return Le();
    },
    set defaultEdgeOptions(W) {
      Le(W), y();
    },
    get width() {
      return Ze();
    },
    set width(W) {
      Ze(W), y();
    },
    get height() {
      return te();
    },
    set height(W) {
      te(W), y();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(W) {
      Ie(W), y();
    },
    get onconnect() {
      return ce();
    },
    set onconnect(W) {
      ce(W), y();
    },
    get onconnectstart() {
      return ct();
    },
    set onconnectstart(W) {
      ct(W), y();
    },
    get onconnectend() {
      return rn();
    },
    set onconnectend(W) {
      rn(W), y();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(W) {
      pn(W), y();
    },
    get oninit() {
      return Ae();
    },
    set oninit(W) {
      Ae(W), y();
    },
    get nodeOrigin() {
      return it();
    },
    set nodeOrigin(W) {
      it(W), y();
    },
    get paneClickDistance() {
      return Fe();
    },
    set paneClickDistance(W) {
      Fe(W), y();
    },
    get nodeClickDistance() {
      return Be();
    },
    set nodeClickDistance(W) {
      Be(W), y();
    },
    get defaultMarkerColor() {
      return st();
    },
    set defaultMarkerColor(W) {
      st(W), y();
    },
    get style() {
      return on();
    },
    set style(W) {
      on(W), y();
    },
    get class() {
      return Kt();
    },
    set class(W) {
      Kt(W), y();
    }
  });
  return s(), cf;
}
de(
  sd,
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
function ad(e, t) {
  ge(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Fc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Or(es, { getStore: () => l }), ga(() => {
    l.reset();
  }), ze();
  var u = tt(), c = xe(u);
  return bt(c, t, "default", {}), D(e, u), he({
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
de(
  ad,
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
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = lt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ge(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  ze();
  var c = p2();
  let f;
  var d = F(c);
  return bt(d, t, "default", { class: "button-svg" }), Y(c), ke(
    (h) => f = Xt(c, f, {
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
      () => Ht([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), rt("click", c, function(h) {
    Xe.call(this, t, h);
  }), D(e, c), he({
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
de(
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
function ld(e) {
  var t = m2();
  D(e, t);
}
de(ld, {}, [], [], !0);
var y2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ud(e) {
  var t = y2();
  D(e, t);
}
de(ud, {}, [], [], !0);
var w2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function cd(e) {
  var t = w2();
  D(e, t);
}
de(cd, {}, [], [], !0);
var _2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function dd(e) {
  var t = _2();
  D(e, t);
}
de(dd, {}, [], [], !0);
var x2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function fd(e) {
  var t = x2();
  D(e, t);
}
de(fd, {}, [], [], !0);
var b2 = /* @__PURE__ */ ne("<!> <!>", 1), C2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function gd(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(T, "$nodesDraggable", n), i = () => Q(M, "$nodesConnectable", n), s = () => Q(L, "$elementsSelectable", n), a = () => Q(P, "$viewport", n), l = () => Q(S, "$minZoom", n), u = () => Q(N, "$maxZoom", n), c = /* @__PURE__ */ ae(), f = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae();
  let p = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), _ = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), v = w(t, "buttonBgColor", 12, void 0), b = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), C = w(t, "buttonColorHover", 12, void 0), H = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), V = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), O = w(t, "fitViewOptions", 12, void 0), R = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: I,
    fitView: E,
    viewport: P,
    minZoom: S,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: M,
    elementsSelectable: L
  } = je(), q = {
    bgColor: v(),
    bgColorHover: b(),
    color: m(),
    colorHover: C(),
    borderColor: H()
  }, X = () => {
    z();
  }, Z = () => {
    I();
  }, ee = () => {
    E(O());
  }, U = () => {
    j(c, !g(c)), T.set(g(c)), M.set(g(c)), L.set(g(c));
  };
  ye(
    () => (o(), i(), s()),
    () => {
      j(c, o() || i() || s());
    }
  ), ye(() => (a(), l()), () => {
    j(f, a().zoom <= l());
  }), ye(() => (a(), u()), () => {
    j(d, a().zoom >= u());
  }), ye(() => J(A()), () => {
    j(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), wt(), ze();
  const ue = /* @__PURE__ */ be(() => Ht([
    "svelte-flow__controls",
    g(h),
    R()
  ])), ve = /* @__PURE__ */ be(() => $() ?? "Svelte Flow controls");
  Ro(e, {
    get class() {
      return g(ue);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return V();
    },
    children: (se, Ne) => {
      var _e = C2(), $e = xe(_e);
      bt($e, t, "before", {});
      var le = B($e, 2);
      {
        var ie = (re) => {
          var oe = b2(), fe = xe(oe);
          fo(fe, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(d);
              }
            },
            q,
            {
              $$events: { click: X },
              children: (Ze, te) => {
                ld(Ze);
              },
              $$slots: { default: !0 }
            }
          ));
          var Le = B(fe, 2);
          fo(Le, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(f);
              }
            },
            q,
            {
              $$events: { click: Z },
              children: (Ze, te) => {
                ud(Ze);
              },
              $$slots: { default: !0 }
            }
          )), D(re, oe);
        };
        we(le, (re) => {
          x() && re(ie);
        });
      }
      var me = B(le, 2);
      {
        var G = (re) => {
          fo(re, ut(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            q,
            {
              $$events: { click: ee },
              children: (oe, fe) => {
                cd(oe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        we(me, (re) => {
          _() && re(G);
        });
      }
      var Se = B(me, 2);
      {
        var De = (re) => {
          fo(re, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            q,
            {
              $$events: { click: U },
              children: (oe, fe) => {
                var Le = tt(), Ze = xe(Le);
                {
                  var te = (ce) => {
                    fd(ce);
                  }, Ie = (ce) => {
                    dd(ce);
                  };
                  we(Ze, (ce) => {
                    g(c) ? ce(te) : ce(Ie, !1);
                  });
                }
                D(oe, Le);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        we(Se, (re) => {
          k() && re(De);
        });
      }
      var Oe = B(Se, 2);
      bt(Oe, t, "default", {});
      var Re = B(Oe, 2);
      bt(Re, t, "after", {}), D(se, _e);
    },
    $$slots: { default: !0 }
  });
  var pe = he({
    get position() {
      return p();
    },
    set position(se) {
      p(se), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(se) {
      x(se), y();
    },
    get showFitView() {
      return _();
    },
    set showFitView(se) {
      _(se), y();
    },
    get showLock() {
      return k();
    },
    set showLock(se) {
      k(se), y();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(se) {
      v(se), y();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(se) {
      b(se), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(se) {
      m(se), y();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(se) {
      C(se), y();
    },
    get buttonBorderColor() {
      return H();
    },
    set buttonBorderColor(se) {
      H(se), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(se) {
      $(se), y();
    },
    get style() {
      return V();
    },
    set style(se) {
      V(se), y();
    },
    get orientation() {
      return A();
    },
    set orientation(se) {
      A(se), y();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(se) {
      O(se), y();
    },
    get class() {
      return R();
    },
    set class(se) {
      R(se), y();
    }
  });
  return r(), pe;
}
de(
  gd,
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
var k2 = /* @__PURE__ */ Pe("<circle></circle>");
function hd(e, t) {
  ge(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  ze();
  var o = k2();
  return ke(
    (i) => {
      Ce(o, "cx", n()), Ce(o, "cy", n()), Ce(o, "r", n()), Ct(o, 0, i);
    },
    [
      () => gn(Ht([
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
de(hd, { radius: {}, class: {} }, [], [], !0);
var $2 = /* @__PURE__ */ Pe("<path></path>");
function vd(e, t) {
  ge(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  ze();
  var s = $2();
  return ke(
    (a) => {
      Ce(s, "stroke-width", n()), Ce(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(s, 0, a);
    },
    [
      () => gn(Ht([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    be
  ), D(e, s), he({
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
de(
  vd,
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
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var S2 = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const P2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function pd(e, t) {
  ge(t, !1), et(e, P2);
  const [n, r] = ot(), o = () => Q(C, "$flowId", n), i = () => Q(m, "$viewport", n), s = /* @__PURE__ */ ae(), a = /* @__PURE__ */ ae(), l = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Gn.Dots), h = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), _ = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), v = w(t, "patternClass", 12, void 0), b = w(t, "class", 12, "");
  const { viewport: m, flowId: C } = je(), H = p() || E2[d()], $ = d() === Gn.Dots, V = d() === Gn.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  ye(
    () => (o(), J(f())),
    () => {
      j(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ye(() => i(), () => {
    j(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), ye(() => i(), () => {
    j(l, H * i().zoom);
  }), ye(() => (g(l), g(a)), () => {
    j(u, V ? [g(l), g(l)] : g(a));
  }), ye(
    () => (g(l), g(u)),
    () => {
      j(c, $ ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), wt(), ze();
  var O = S2();
  let R;
  var z = F(O), I = F(z);
  {
    var E = (T) => {
      const M = /* @__PURE__ */ be(() => g(l) / 2);
      hd(T, {
        get radius() {
          return g(M);
        },
        get class() {
          return v();
        }
      });
    }, P = (T) => {
      vd(T, {
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
    we(I, (T) => {
      $ ? T(E) : T(P, !1);
    });
  }
  Y(z);
  var S = B(z);
  Y(O), ke(
    (T) => {
      Ct(O, 0, T, "svelte-1r7pe8d"), R = gt(O, "", R, {
        "--xy-background-color-props": _(),
        "--xy-background-pattern-color-props": k()
      }), Ce(z, "id", g(s)), Ce(z, "x", i().x % g(a)[0]), Ce(z, "y", i().y % g(a)[1]), Ce(z, "width", g(a)[0]), Ce(z, "height", g(a)[1]), Ce(z, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), Ce(S, "fill", `url(#${g(s)})`);
    },
    [
      () => gn(Ht(["svelte-flow__background", b()]))
    ],
    be
  ), D(e, O);
  var N = he({
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
      return p();
    },
    set size(T) {
      p(T), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(T) {
      x(T), y();
    },
    get bgColor() {
      return _();
    },
    set bgColor(T) {
      _(T), y();
    },
    get patternColor() {
      return k();
    },
    set patternColor(T) {
      k(T), y();
    },
    get patternClass() {
      return v();
    },
    set patternClass(T) {
      v(T), y();
    },
    get class() {
      return b();
    },
    set class(T) {
      b(T), y();
    }
  });
  return r(), N;
}
de(
  pd,
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
function md(e, t) {
  ge(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  ze();
  var h = N2();
  let p;
  return ke(
    (x, _) => {
      p = Ct(h, 0, x, null, p, _), Ce(h, "x", n()), Ce(h, "y", r()), Ce(h, "rx", s()), Ce(h, "ry", s()), Ce(h, "width", o()), Ce(h, "height", i()), gt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), Ce(h, "shape-rendering", l());
    },
    [
      () => gn(Ht(["svelte-flow__minimap-node", d()])),
      () => ({ selected: f() })
    ],
    be
  ), D(e, h), he({
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
de(
  md,
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
const xs = (e) => e instanceof Function ? e : () => e;
var T2 = /* @__PURE__ */ Pe("<title> </title>"), M2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function yd(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(me, "$flowId", n), i = () => Q($e, "$viewport", n), s = () => Q(le, "$containerWidth", n), a = () => Q(ie, "$containerHeight", n), l = () => Q(_e, "$nodeLookup", n), u = () => Q(Ne, "$nodes", n), c = () => Q(G, "$panZoom", n), f = () => Q(Se, "$translateExtent", n), d = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), C = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae(), V = /* @__PURE__ */ ae();
  let A = w(t, "position", 12, "bottom-right"), O = w(t, "ariaLabel", 12, "Mini map"), R = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), P = w(t, "nodeStrokeWidth", 12, 2), S = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), M = w(t, "maskStrokeWidth", 12, void 0), L = w(t, "width", 12, void 0), q = w(t, "height", 12, void 0), X = w(t, "pannable", 12, !0), Z = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), U = w(t, "zoomStep", 12, void 0), ue = w(t, "style", 12, ""), ve = w(t, "class", 12, "");
  const pe = 200, se = 150, {
    nodes: Ne,
    nodeLookup: _e,
    viewport: $e,
    width: le,
    height: ie,
    flowId: me,
    panZoom: G,
    translateExtent: Se
  } = je(), De = z() === void 0 ? void 0 : xs(z()), Oe = xs(R()), Re = xs(I()), re = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), oe = `svelte-flow__minimap-desc-${o()}`;
  let fe = /* @__PURE__ */ ae(g(d));
  const Le = () => g(k);
  ye(
    () => (i(), s(), a()),
    () => {
      j(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ye(
    () => (l(), g(d), u()),
    () => {
      j(fe, l().size > 0 ? mc(Lo(l(), { filter: (ce) => !ce.hidden }), g(d)) : g(d)), u();
    }
  ), ye(() => J(L()), () => {
    j(h, L() ?? pe);
  }), ye(() => J(q()), () => {
    j(p, q() ?? se);
  }), ye(
    () => (g(fe), g(h)),
    () => {
      j(x, g(fe).width / g(h));
    }
  ), ye(
    () => (g(fe), g(p)),
    () => {
      j(_, g(fe).height / g(p));
    }
  ), ye(
    () => (g(x), g(_)),
    () => {
      j(k, Math.max(g(x), g(_)));
    }
  ), ye(() => (g(k), g(h)), () => {
    j(v, g(k) * g(h));
  }), ye(
    () => (g(k), g(p)),
    () => {
      j(b, g(k) * g(p));
    }
  ), ye(() => g(k), () => {
    j(m, 5 * g(k));
  }), ye(
    () => (g(fe), g(v), g(m)),
    () => {
      j(C, g(fe).x - (g(v) - g(fe).width) / 2 - g(m));
    }
  ), ye(
    () => (g(fe), g(b), g(m)),
    () => {
      j(H, g(fe).y - (g(b) - g(fe).height) / 2 - g(m));
    }
  ), ye(() => (g(v), g(m)), () => {
    j($, g(v) + g(m) * 2);
  }), ye(() => (g(b), g(m)), () => {
    j(V, g(b) + g(m) * 2);
  }), wt(), ze();
  const Ze = /* @__PURE__ */ be(() => ue() + (S() ? `;--xy-minimap-background-color-props:${S()}` : "")), te = /* @__PURE__ */ be(() => Ht(["svelte-flow__minimap", ve()]));
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
    children: (ce, ct) => {
      var rn = tt(), pn = xe(rn);
      {
        var Ae = (it) => {
          var Fe = M2();
          Ce(Fe, "aria-labelledby", oe);
          let Be;
          var st = F(Fe);
          {
            var on = (kt) => {
              var Dt = T2();
              Ce(Dt, "id", oe);
              var wr = F(Dt, !0);
              Y(Dt), ke(() => ft(wr, O())), D(kt, Dt);
            };
            we(st, (kt) => {
              O() && kt(on);
            });
          }
          var Kt = B(st);
          Mt(Kt, 1, u, (kt) => kt.id, (kt, Dt) => {
            var wr = tt();
            const at = /* @__PURE__ */ be(() => l().get(g(Dt).id));
            var is = xe(wr);
            {
              var to = (Rt) => {
                const Fo = /* @__PURE__ */ be(() => nr(g(at))), Wo = /* @__PURE__ */ be(() => De == null ? void 0 : De(g(at))), Xo = /* @__PURE__ */ be(() => Oe(g(at))), ss = /* @__PURE__ */ be(() => Re(g(at)));
                md(Rt, ut(
                  {
                    get x() {
                      return g(at).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(at).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Fo),
                  {
                    get selected() {
                      return g(at).selected;
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
              we(is, (Rt) => {
                g(at) && yc(g(at)) && Rt(to);
              });
            }
            D(kt, wr);
          });
          var eo = B(Kt);
          Y(Fe), xt(Fe, (kt, Dt) => _s == null ? void 0 : _s(kt, Dt), () => ({
            panZoom: c(),
            viewport: $e,
            getViewScale: Le,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: U(),
            pannable: X(),
            zoomable: Z()
          })), ke(() => {
            Ce(Fe, "width", g(h)), Ce(Fe, "height", g(p)), Ce(Fe, "viewBox", `${g(C) ?? ""} ${g(H) ?? ""} ${g($) ?? ""} ${g(V) ?? ""}`), Be = gt(Fe, "", Be, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": M() ? M() * g(k) : void 0
            }), Ce(eo, "d", `M${g(C) - g(m)},${g(H) - g(m)}h${g($) + g(m) * 2}v${g(V) + g(m) * 2}h${-g($) - g(m) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), D(it, Fe);
        };
        we(pn, (it) => {
          c() && it(Ae);
        });
      }
      D(ce, rn);
    },
    $$slots: { default: !0 }
  });
  var Ie = he({
    get position() {
      return A();
    },
    set position(ce) {
      A(ce), y();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(ce) {
      O(ce), y();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(ce) {
      R(ce), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(ce) {
      z(ce), y();
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
      return P();
    },
    set nodeStrokeWidth(ce) {
      P(ce), y();
    },
    get bgColor() {
      return S();
    },
    set bgColor(ce) {
      S(ce), y();
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
      return M();
    },
    set maskStrokeWidth(ce) {
      M(ce), y();
    },
    get width() {
      return L();
    },
    set width(ce) {
      L(ce), y();
    },
    get height() {
      return q();
    },
    set height(ce) {
      q(ce), y();
    },
    get pannable() {
      return X();
    },
    set pannable(ce) {
      X(ce), y();
    },
    get zoomable() {
      return Z();
    },
    set zoomable(ce) {
      Z(ce), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(ce) {
      ee(ce), y();
    },
    get zoomStep() {
      return U();
    },
    set zoomStep(ce) {
      U(ce), y();
    },
    get style() {
      return ue();
    },
    set style(ce) {
      ue(ce), y();
    },
    get class() {
      return ve();
    },
    set class(ce) {
      ve(ce), y();
    }
  });
  return r(), Ie;
}
de(
  yd,
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
const ql = (e) => E0(e);
function zt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: h, nodeLookup: p, nodeOrigin: x, edgeLookup: _, connectionLookup: k } = je(), v = (C) => {
    var O, R;
    const H = K(p), $ = ql(C) ? C : H.get(C.id), V = $.parentId ? V0($.position, $.measured, $.parentId, H, K(x)) : $.position, A = {
      ...$,
      position: V,
      width: ((O = $.measured) == null ? void 0 : O.width) ?? $.width,
      height: ((R = $.measured) == null ? void 0 : R.height) ?? $.height
    };
    return qr(A);
  }, b = (C, H, $ = { replace: !1 }) => {
    var O;
    const V = (O = K(p).get(C)) == null ? void 0 : O.internals.userNode;
    if (!V)
      return;
    const A = typeof H == "function" ? H(V) : H;
    $.replace ? f.update((R) => R.map((z) => z.id === C ? ql(A) ? A : { ...z, ...A } : z)) : (Object.assign(V, A), f.update((R) => R));
  }, m = (C) => K(p).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (C) => {
      var H;
      return (H = m(C)) == null ? void 0 : H.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? K(f) : Yl(K(p), C),
    getEdge: (C) => K(_).get(C),
    getEdges: (C) => C === void 0 ? K(d) : Yl(K(_), C),
    setZoom: (C, H) => {
      const $ = K(c);
      return $ ? $.scaleTo(C, { duration: H == null ? void 0 : H.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (C, H) => {
      const $ = K(i), V = K(c);
      return V ? (await V.setViewport({
        x: C.x ?? $.x,
        y: C.y ?? $.y,
        zoom: C.zoom ?? $.zoom
      }, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (C, H, $) => {
      const V = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : K(u), A = K(c);
      return A ? (await A.setViewport({
        x: K(s) / 2 - C * V,
        y: K(a) / 2 - H * V,
        zoom: V
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, H) => {
      const $ = K(c);
      if (!$)
        return Promise.resolve(!1);
      const V = Ca(C, K(s), K(a), K(l), K(u), (H == null ? void 0 : H.padding) ?? 0.1);
      return await $.setViewport(V, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, H = !0, $) => {
      const V = El(C), A = V ? C : v(C);
      return A ? ($ || K(f)).filter((O) => {
        const R = K(p).get(O.id);
        if (!R || !V && O.id === C.id)
          return !1;
        const z = qr(R), I = Eo(z, A);
        return H && I > 0 || I >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (C, H, $ = !0) => {
      const A = El(C) ? C : v(C);
      if (!A)
        return !1;
      const O = Eo(A, H);
      return $ && O > 0 || O >= A.width * A.height;
    },
    deleteElements: async ({ nodes: C = [], edges: H = [] }) => {
      const { nodes: $, edges: V } = await hc({
        nodesToRemove: C,
        edgesToRemove: H,
        nodes: K(f),
        edges: K(d),
        onBeforeDelete: K(r)
      });
      return $ && f.update((A) => A.filter((O) => !$.some(({ id: R }) => R === O.id))), V && d.update((A) => A.filter((O) => !V.some(({ id: R }) => R === O.id))), {
        deletedNodes: $,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (C, H = { snapToGrid: !0 }) => {
      const $ = K(h);
      if (!$)
        return C;
      const V = H.snapToGrid ? K(o) : !1, { x: A, y: O, zoom: R } = K(i), { x: z, y: I } = $.getBoundingClientRect(), E = {
        x: C.x - z,
        y: C.y - I
      };
      return Io(E, [A, O, R], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const H = K(h);
      if (!H)
        return C;
      const { x: $, y: V, zoom: A } = K(i), { x: O, y: R } = H.getBoundingClientRect(), z = $i(C, [$, V, A]);
      return {
        x: z.x + O,
        y: z.y + R
      };
    },
    toObject: () => ({
      nodes: K(f).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: K(d).map((C) => ({ ...C })),
      viewport: { ...K(i) }
    }),
    updateNode: b,
    updateNodeData: (C, H, $) => {
      var O;
      const V = (O = K(p).get(C)) == null ? void 0 : O.internals.userNode;
      if (!V)
        return;
      const A = typeof H == "function" ? H(V) : H;
      V.data = $ != null && $.replace ? A : { ...V.data, ...A }, f.update((R) => R);
    },
    getNodesBounds: (C) => {
      const H = K(p), $ = K(x);
      return S0(C, { nodeLookup: H, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: C, id: H, nodeId: $ }) => {
      var V;
      return Array.from(((V = K(k).get(`${$}-${C}-${H ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var H2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function wd(e, t) {
  ge(t, !1);
  const [n, r] = ot(), o = () => Q(b, "$nodes", n), i = () => Q(v, "$nodeLookup", n), s = () => Q(k, "$viewport", n), a = () => Q(_, "$domNode", n), l = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: _, viewport: k, nodeLookup: v, nodes: b } = je(), { getNodesBounds: m } = zt(), C = cr("svelteflow__node_id");
  let H = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae([]), V = p() !== void 0 ? p() : 10, A = d() !== void 0 ? d() : Me.Top, O = h() !== void 0 ? h() : "center";
  ye(
    () => (o(), J(f()), i()),
    () => {
      o();
      const P = Array.isArray(f()) ? f() : [f() || C];
      j($, P.reduce(
        (S, N) => {
          const T = i().get(N);
          return T && S.push(T), S;
        },
        []
      ));
    }
  ), ye(
    () => (g($), s()),
    () => {
      const P = m(g($));
      P && j(H, U0(P, s(), A, V, O));
    }
  ), ye(() => g($), () => {
    j(l, g($).length === 0 ? 1 : Math.max(...g($).map((P) => (P.internals.z || 5) + 1)));
  }), ye(() => o(), () => {
    j(u, o().filter((P) => P.selected).length);
  }), ye(
    () => (J(x()), g($), g(u)),
    () => {
      j(c, typeof x() == "boolean" ? x() : g($).length === 1 && g($)[0].selected && g(u) === 1);
    }
  ), wt(), ze();
  var R = tt(), z = xe(R);
  {
    var I = (P) => {
      var S = H2();
      let N;
      var T = F(S);
      bt(T, t, "default", {}), Y(S), xt(S, (M, L) => Pr == null ? void 0 : Pr(M, L), () => ({ domNode: a() })), ke(
        (M) => {
          Ce(S, "data-id", M), N = gt(S, "", N, {
            position: "absolute",
            transform: g(H),
            "z-index": g(l)
          });
        },
        [
          () => g($).reduce((M, L) => `${M}${L.id} `, "").trim()
        ],
        be
      ), D(P, S);
    };
    we(z, (P) => {
      a() && g(c) && g($) && P(I);
    });
  }
  D(e, R);
  var E = he({
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
de(
  wd,
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
  const { nodes: t, nodeLookup: n } = je();
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
const Fl = "tinyflow-component";
class Qw {
  constructor(t) {
    $t(this, "options");
    $t(this, "rootEl");
    $t(this, "svelteFlowInstance");
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
    const t = document.createElement(Fl);
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
    const n = document.createElement(Fl);
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
function Ge(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = V2();
  let i;
  var s = F(o);
  return dr(s, () => n() ?? pt), Y(o), ke(() => i = Xt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), he({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
de(Ge, { children: {} }, [], [], !0);
var A2 = /* @__PURE__ */ ne("<input>");
function _d(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = A2();
  Xn(r);
  let o;
  ke(() => o = Xt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
de(_d, {}, [], [], !0);
var O2 = /* @__PURE__ */ ne('<div><input type="hidden"> <!> <!></div>');
const L2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function xd(e, t) {
  ge(t, !0), et(e, L2);
  const n = w(t, "placeholder", 7), r = w(t, "label", 7), o = w(t, "value", 7), i = w(t, "buttonText", 7, "选择..."), s = w(t, "onChosen", 7), a = /* @__PURE__ */ _t(t, [
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
  Xn(c);
  var f = B(c, 2);
  ht(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var d = B(f, 2);
  return Ge(d, {
    onclick: (h) => {
      var p;
      (p = s()) == null || p(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, p) => {
      Ve();
      var x = qe();
      ke(() => ft(x, i())), D(h, x);
    },
    $$slots: { default: !0 }
  }), Y(l), ke(() => {
    u = Xt(
      l,
      u,
      {
        ...a,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), ti(c, o());
  }), D(e, l), he({
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
de(
  xd,
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
function ht(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = I2();
  Xn(r);
  let o;
  ke(() => o = Xt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
de(ht, {}, [], [], !0);
var z2 = /* @__PURE__ */ ne("<textarea></textarea>");
function yt(e, t) {
  ge(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = z2();
  _1(o);
  let i;
  return ke(() => i = Xt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), he({
    get value() {
      return n();
    },
    set value(s) {
      n(s), y();
    }
  });
}
de(yt, { value: {} }, [], [], !0);
var R2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), B2 = /* @__PURE__ */ ne("<div></div>");
function bd(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = lt(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  ze();
  var l = B2();
  let u;
  return Mt(l, 5, o, Lr, (c, f, d) => {
    var h = R2();
    Ce(h, "tabindex", d), h.__click = () => a(g(f), d), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(f), d));
    };
    var p = F(h);
    {
      var x = (k) => {
        var v = qe();
        ke(() => ft(v, g(f).label)), D(k, v);
      }, _ = (k) => {
        var v = tt(), b = xe(v);
        dr(b, () => g(f).label ?? pt), D(k, v);
      };
      we(p, (k) => {
        typeof g(f).label == "string" ? k(x) : k(_, !1);
      });
    }
    Y(h), ke(() => Ct(h, 1, `tf-tabs-item ${d === s() ? "active" : ""}`)), D(c, h);
  }), Y(l), ke(() => u = Xt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), he({
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
jr(["click", "keydown"]);
de(bd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var q2 = (e, t, n) => t(g(n)), Y2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, F2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), W2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), X2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Z2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), K2 = /* @__PURE__ */ ne("<div></div>");
const G2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Cd(e, t) {
  ge(t, !0), et(e, G2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => an([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = K2();
  return Mt(s, 21, n, Lr, (a, l, u) => {
    var c = Z2(), f = F(c);
    Ce(f, "tabindex", u), f.__click = [q2, i, l], f.__keydown = [Y2, i, l];
    var d = F(f);
    {
      var h = (m) => {
        var C = F2(), H = F(C);
        Fn(H, {
          get target() {
            return g(l).icon;
          }
        }), Y(C), D(m, C);
      };
      we(d, (m) => {
        g(l).icon && m(h);
      });
    }
    var p = B(d, 2);
    Fn(p, {
      get target() {
        return g(l).title;
      }
    });
    var x = B(p, 2);
    Y(f);
    var _ = B(f, 2);
    {
      var k = (m) => {
        var C = W2(), H = F(C);
        Fn(H, {
          get target() {
            return g(l).description;
          }
        }), Y(C), D(m, C);
      };
      we(_, (m) => {
        g(l).description && m(k);
      });
    }
    var v = B(_, 2);
    {
      var b = (m) => {
        var C = X2(), H = F(C);
        Fn(H, {
          get target() {
            return g(l).content;
          }
        }), Y(C), D(m, C);
      };
      we(v, (m) => {
        o().includes(g(l).key) && m(b);
      });
    }
    Y(c), ke((m) => Ct(x, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(a, c);
  }), Y(s), ke(() => {
    gt(s, t.style), Ct(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, s), he({
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
jr(["click", "keydown"]);
de(Cd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Fn(e, t) {
  ge(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = tt(), o = xe(r);
  {
    var i = (a) => {
      var l = tt(), u = xe(l);
      dr(u, () => n() ?? pt), D(a, l);
    }, s = (a) => {
      var l = tt(), u = xe(l);
      fa(u, n), D(a, l);
    };
    we(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return D(e, r), he({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
de(Fn, { target: {} }, [], [], !0);
var U2 = (e, t, n) => t(g(n)), j2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), J2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Q2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), em = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), tm = /* @__PURE__ */ ne("<!> <!>", 1), nm = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), rm = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), om = /* @__PURE__ */ ne("<div><!></div>");
function tn(e, t) {
  ge(t, !0);
  const n = (v, b = pt) => {
    var m = tt(), C = xe(m);
    Mt(C, 19, b, (H, $) => `${$}_${H.value}`, (H, $) => {
      var V = Q2(), A = xe(V);
      A.__click = [U2, p, $];
      var O = F(A), R = F(O);
      {
        var z = (S) => {
          var N = j2();
          D(S, N);
        };
        we(R, (S) => {
          g($).children && g($).children.length > 0 && S(z);
        });
      }
      Y(O);
      var I = B(O, 2);
      Fn(I, {
        get target() {
          return g($).label;
        }
      }), Y(A);
      var E = B(A, 2);
      {
        var P = (S) => {
          var N = J2(), T = F(N);
          n(T, () => g($).children), Y(N), D(S, N);
        };
        we(E, (S) => {
          g($).children && g($).children.length > 0 && (a() || u().includes(g($).value)) && S(P);
        });
      }
      D(H, V);
    }), D(v, m);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), c = w(t, "placeholder", 7), f = /* @__PURE__ */ _t(t, [
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
  ]), d = /* @__PURE__ */ Te(() => {
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
        n(C, r), Y(m), D(b, m);
      },
      children: (b, m) => {
        var C = rm();
        let H;
        var $ = F(C);
        Mt(
          $,
          23,
          () => g(d),
          (V, A) => `${A}_${V.value}`,
          (V, A, O) => {
            var R = tt(), z = xe(R);
            {
              var I = (P) => {
                var S = tt(), N = xe(S);
                {
                  var T = (M) => {
                    Fn(M, {
                      get target() {
                        return g(A).label;
                      }
                    });
                  };
                  we(N, (M) => {
                    g(O) === 0 && M(T);
                  });
                }
                D(P, S);
              }, E = (P) => {
                var S = tm(), N = xe(S);
                Fn(N, {
                  get target() {
                    return g(A).label;
                  }
                });
                var T = B(N, 2);
                {
                  var M = (L) => {
                    var q = qe(",");
                    D(L, q);
                  };
                  we(T, (L) => {
                    g(O) < g(d).length - 1 && L(M);
                  });
                }
                D(P, S);
              };
              we(z, (P) => {
                l() ? P(E, !1) : P(I);
              });
            }
            D(V, R);
          },
          (V) => {
            var A = nm(), O = F(A, !0);
            Y(A), ke(() => ft(O, c())), D(V, A);
          }
        ), Y($), Ve(2), Y(C), ke(() => H = Xt(C, H, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D(b, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => h = b,
    () => h
  ), Y(x), ke(() => _ = Xt(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, x), he({
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
jr(["click"]);
de(
  tn,
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
const Po = Math.min, Tr = Math.max, Ti = Math.round, wn = (e) => ({
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
  return Tr(e, Po(t, n));
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
function kd(e) {
  return e === "x" ? "y" : "x";
}
function Pa(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(vr(e)) ? "y" : "x";
}
function Na(e) {
  return kd(ur(e));
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
function $d(e) {
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
function Wl(e, t, n) {
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
  } = Wl(u, r, l), d = r, h = {}, p = 0;
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
    } = Wl(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: h
  };
};
async function Ed(e, t) {
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
  } = Bo(t, e), p = $d(h), _ = a[d ? f === "floating" ? "reference" : "floating" : f], k = Hi(await i.getClippingRect({
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
    const f = $d(c), d = {
      x: n,
      y: r
    }, h = Na(o), p = Pa(h), x = await s.getDimensions(u), _ = h === "y", k = _ ? "top" : "left", v = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[h] - d[h] - i.floating[p], C = d[h] - i.reference[h], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = H ? H[b] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(H))) && ($ = a.floating[b] || i.floating[p]);
    const V = m / 2 - C / 2, A = $ / 2 - x[p] / 2 - 1, O = Po(f[k], A), R = Po(f[v], A), z = O, I = $ - x[p] - R, E = $ / 2 - x[p] / 2 + V, P = Xs(z, E, I), S = !l.arrow && qo(o) != null && E !== P && i.reference[p] / 2 - (E < z ? O : R) - x[p] / 2 < 0, N = S ? E < z ? E - z : E - I : 0;
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
      const k = vr(o), v = ur(a), b = vr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = d || (b || !x ? [Mi(a)] : lm(a)), H = p !== "none";
      !d && H && C.push(...cm(a, x, p, m));
      const $ = [a, ...C], V = await Ed(t, _), A = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(V[k]), f) {
        const P = am(o, s, m);
        A.push(V[P[0]], V[P[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: A
      }], !A.every((P) => P <= 0)) {
        var R, z;
        const P = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, S = $[P];
        if (S) {
          var I;
          const T = f === "alignment" ? v !== ur(S) : !1, M = ((I = O[0]) == null ? void 0 : I.overflows[0]) > 0;
          if (!T || M)
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
        let N = (z = O.filter((T) => T.overflows[0] <= 0).sort((T, M) => T.overflows[1] - M.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var E;
              const T = (E = O.filter((M) => {
                if (H) {
                  const L = ur(M.placement);
                  return L === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((L) => L > 0).reduce((L, q) => L + q, 0)]).sort((M, L) => M[1] - L[1])[0]) == null ? void 0 : E[0];
              T && (N = T);
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
      }, c = await Ed(t, l), f = ur(vr(o)), d = kd(f);
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
  return Sd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Sd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Sd(e) {
  return ts() ? e instanceof Node || e instanceof Wt(e).Node : !1;
}
function dn(e) {
  return ts() ? e instanceof Element || e instanceof Wt(e).Element : !1;
}
function $n(e) {
  return ts() ? e instanceof HTMLElement || e instanceof Wt(e).HTMLElement : !1;
}
function Xl(e) {
  return !ts() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Wt(e).ShadowRoot;
}
function Yo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fn(e);
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
  const t = Ma(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function wm(e) {
  let t = Qn(e);
  for (; $n(t) && !Fr(t); ) {
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
function Fr(e) {
  return ["html", "body", "#document"].includes(Jr(e));
}
function fn(e) {
  return Wt(e).getComputedStyle(e);
}
function rs(e) {
  return dn(e) ? {
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
    Xl(e) && e.host || // Fallback.
    zn(e)
  );
  return Xl(t) ? t.host : t;
}
function Pd(e) {
  const t = Qn(e);
  return Fr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && Yo(t) ? t : Pd(t);
}
function Nd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Pd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Wt(o);
  return i ? (Ks(s), t.concat(s, s.visualViewport || [], Yo(o) ? o : [], [])) : t.concat(o, Nd(o, []));
}
function Ks(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Td(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ti(n) !== i || Ti(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Md(e) {
  return dn(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = Md(e);
  if (!$n(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Td(t);
  let s = (i ? Ti(n.width) : n.width) / r, a = (i ? Ti(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const _m = /* @__PURE__ */ wn(0);
function Hd(e) {
  const t = Wt(e);
  return !Ma() || !t.visualViewport ? _m : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function No(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Md(e);
  let s = wn(1);
  t && (r ? dn(r) && (s = Mr(r)) : s = Mr(e));
  const a = xm(i, n, r) ? Hd(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Wt(i), h = r && dn(r) ? Wt(r) : r;
    let p = d, x = Ks(p);
    for (; x && r && h !== p; ) {
      const _ = Mr(x), k = x.getBoundingClientRect(), v = fn(x), b = k.left + (x.clientLeft + parseFloat(v.paddingLeft)) * _.x, m = k.top + (x.clientTop + parseFloat(v.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, f *= _.y, l += b, u += m, p = Wt(x), x = Ks(p);
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
  return t ? t.left + n : No(zn(e)).left + n;
}
function Dd(e, t, n) {
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
  const i = o === "fixed", s = zn(r), a = t ? ns(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), f = $n(r);
  if ((f || !f && !i) && ((Jr(r) !== "body" || Yo(s)) && (l = rs(r)), $n(r))) {
    const h = No(r);
    u = Mr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const d = s && !f && !i ? Dd(s, l, !0) : wn(0);
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
  const t = zn(e), n = rs(e), r = e.ownerDocument.body, o = Tr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Tr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ha(e);
  const a = -n.scrollTop;
  return fn(r).direction === "rtl" && (s += Tr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function $m(e, t) {
  const n = Wt(e), r = zn(e), o = n.visualViewport;
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
  const n = No(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $n(e) ? Mr(e) : wn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Zl(e, t, n) {
  let r;
  if (t === "viewport")
    r = $m(e, n);
  else if (t === "document")
    r = km(zn(e));
  else if (dn(t))
    r = Em(t, n);
  else {
    const o = Hd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hi(r);
}
function Vd(e, t) {
  const n = Qn(e);
  return n === t || !dn(n) || Fr(n) ? !1 : fn(n).position === "fixed" || Vd(n, t);
}
function Sm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nd(e, []).filter((a) => dn(a) && Jr(a) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; dn(s) && !Fr(s); ) {
    const a = fn(s), l = Ta(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yo(s) && !l && Vd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
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
    const f = Zl(t, c, o);
    return u.top = Tr(f.top, u.top), u.right = Po(f.right, u.right), u.bottom = Po(f.bottom, u.bottom), u.left = Tr(f.left, u.left), u;
  }, Zl(t, a, o));
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
  } = Td(e);
  return {
    width: t,
    height: n
  };
}
function Tm(e, t, n) {
  const r = $n(t), o = zn(t), i = n === "fixed", s = No(e, !0, i, t);
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
  const c = o && !r && !i ? Dd(o, a) : wn(0), f = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: f,
    y: d,
    width: s.width,
    height: s.height
  };
}
function bs(e) {
  return fn(e).position === "static";
}
function Kl(e, t) {
  if (!$n(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Ad(e, t) {
  const n = Wt(e);
  if (ns(e))
    return n;
  if (!$n(e)) {
    let o = Qn(e);
    for (; o && !Fr(o); ) {
      if (dn(o) && !bs(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Kl(e, t);
  for (; r && ym(r) && bs(r); )
    r = Kl(r, t);
  return r && Fr(r) && bs(r) && !Ta(r) ? n : r || wm(e) || n;
}
const Mm = async function(e) {
  const t = this.getOffsetParent || Ad, n = this.getDimensions, r = await n(e.floating);
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
  return fn(e).direction === "rtl";
}
const Dm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bm,
  getDocumentElement: zn,
  getClippingRect: Pm,
  getOffsetParent: Ad,
  getElementRects: Mm,
  getClientRects: Cm,
  getDimensions: Nm,
  getScale: Mr,
  isElement: dn,
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
        const { x: C, y: H } = m.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: H != null ? `${H}px` : "",
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
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  nn(() => (a = zm({
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
  dr(f, n), Y(c), kn(c, (p) => i = p, () => i);
  var d = B(c, 2), h = F(d);
  return dr(h, r), Y(d), kn(d, (p) => s = p, () => s), Y(u), D(e, u), he({
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
de(Qr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = tt(), a = xe(s);
  return N1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = Xt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = tt(), d = xe(f);
    dr(d, () => n() ?? pt), D(u, f);
  }), D(e, s), he({
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
de(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Bm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const qm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function os(e, t) {
  ge(t, !0), et(e, qm);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ge(e, ut(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Bm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
de(os, {}, [], [], !0);
const Ym = () => {
  const e = je();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Wr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Fm = () => {
  const { nodes: e, nodeLookup: t } = je();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = K(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Wr(), l = {
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
function mt() {
  return cr("svelteflow__node_id");
}
var Wm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Xm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Zm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Km = /* @__PURE__ */ ne('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Gm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Um = /* @__PURE__ */ ne('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), jm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Jm = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Qm = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ey = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function vn(e, t) {
  ge(t, !0), et(e, ey);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "allowSetting", 7, !0), f = w(t, "allowSettingOfCondition", 7, !0), d = w(t, "showSourceHandle", 7, !0), h = w(t, "showTargetHandle", 7, !0), p = w(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: _, getNode: k } = zt(), v = /* @__PURE__ */ Te(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = Ym(), { copyNode: m } = Fm(), C = er(), H = () => {
    var M;
    (M = C.onNodeExecute) == null || M.call(C, k(r()));
  };
  let $ = mt();
  var V = Qm(), A = xe(V);
  {
    var O = (M) => {
      wd(M, {
        get position() {
          return Me.Top;
        },
        align: "end",
        children: (L, q) => {
          var X = Jm(), Z = F(X);
          {
            var ee = (_e) => {
              Ge(_e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: ($e, le) => {
                  var ie = Wm();
                  D($e, ie);
                },
                $$slots: { default: !0 }
              });
            };
            we(Z, (_e) => {
              u() && _e(ee);
            });
          }
          var U = B(Z, 2);
          {
            var ue = (_e) => {
              Ge(_e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: ($e, le) => {
                  var ie = Xm();
                  D($e, ie);
                },
                $$slots: { default: !0 }
              });
            };
            we(U, (_e) => {
              l() && _e(ue);
            });
          }
          var ve = B(U, 2);
          {
            var pe = (_e) => {
              Ge(_e, {
                class: "tf-node-toolbar-item",
                onclick: H,
                children: ($e, le) => {
                  var ie = Zm();
                  D($e, ie);
                },
                $$slots: { default: !0 }
              });
            };
            we(ve, (_e) => {
              a() && _e(pe);
            });
          }
          var se = B(ve, 2);
          {
            var Ne = (_e) => {
              Qr(_e, {
                placement: "bottom",
                floating: (le) => {
                  var ie = Um(), me = F(ie), G = B(F(me));
                  ht(G, {
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Le = fe.target.value;
                      _($, { title: Le });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(me);
                  var Se = B(me, 2), De = B(F(Se));
                  yt(De, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Le = fe.target.value;
                      _($, { description: Le });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(Se);
                  var Oe = B(Se, 2);
                  {
                    var Re = (fe) => {
                      var Le = Km(), Ze = B(F(Le));
                      yt(Ze, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (te) => {
                          const Ie = te.target.value;
                          _($, { condition: Ie });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(Le), D(fe, Le);
                    };
                    we(Oe, (fe) => {
                      f() && fe(Re);
                    });
                  }
                  var re = B(Oe, 2), oe = B(F(re), 2);
                  Xn(oe), oe.__change = [Gm, _, $], Y(re), Y(ie), ke(() => D1(oe, !!n().async)), D(le, ie);
                },
                children: (le, ie) => {
                  Ge(le, {
                    class: "tf-node-toolbar-item",
                    children: (me, G) => {
                      var Se = jm();
                      D(me, Se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            we(se, (_e) => {
              c() && _e(Ne);
            });
          }
          Y(X), D(L, X);
        },
        $$slots: { default: !0 }
      });
    };
    we(A, (M) => {
      (a() || l() || u()) && M(O);
    });
  }
  var R = B(A, 2), z = B(F(R), 2), I = F(z);
  Cd(I, {
    get items() {
      return g(v);
    },
    activeKeys: x,
    onChange: (M, L) => {
      var q;
      _(r(), { expand: L == null ? void 0 : L.includes("key") }), (q = p()) == null || q(L != null && L.includes("key") ? "key" : "");
    }
  }), Y(z), Y(R);
  var E = B(R, 2);
  {
    var P = (M) => {
      Jn(M, {
        type: "target",
        get position() {
          return Me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    we(E, (M) => {
      h() && M(P);
    });
  }
  var S = B(E, 2);
  {
    var N = (M) => {
      Jn(M, {
        type: "source",
        get position() {
          return Me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    we(S, (M) => {
      d() && M(N);
    });
  }
  var T = B(S, 2);
  return dr(T, () => i() ?? pt), D(e, V), he({
    get data() {
      return n();
    },
    set data(M) {
      n(M), y();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), y();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), y();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), y();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), y();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(M = !0) {
      c(M), y();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(M = !0) {
      f(M), y();
    },
    get showSourceHandle() {
      return d();
    },
    set showSourceHandle(M = !0) {
      d(M), y();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(M = !0) {
      h(M), y();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(M) {
      p(M), y();
    }
  });
}
jr(["change"]);
de(
  vn,
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
], ty = [
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
var ny = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ry = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), oy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const iy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  ge(t, !0), et(e, iy);
  const [n, r] = ot(), o = () => Q(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = mt(), l = /* @__PURE__ */ Te(() => yr(a)), u = /* @__PURE__ */ Te(() => {
    var A, O;
    return {
      ...i(),
      ...(O = (A = o()) == null ? void 0 : A.data) == null ? void 0 : O.parameters[s()]
    };
  });
  const { updateNodeData: c } = zt(), f = (A, O) => {
    c(a, (R) => {
      let z = R.data.parameters;
      return z[s()][A] = O, { parameters: z };
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
  var k = oy(), v = xe(k), b = F(v);
  ht(b, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Y(v);
  var m = B(v, 2), C = F(m);
  _d(C, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), Y(m);
  var H = B(m, 2), $ = F(H);
  kn(
    Qr($, {
      placement: "bottom",
      floating: (O) => {
        var R = ny(), z = F(R), I = B(F(z));
        const E = /* @__PURE__ */ Te(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        tn(I, {
          items: Od,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return g(E);
          }
        }), Y(z);
        var P = B(z, 2), S = B(F(P));
        yt(S, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (q) => {
            const X = q.target.value;
            f("defaultValue", X);
          }
        }), Y(P);
        var N = B(P, 2), T = B(F(N));
        yt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (q) => {
            const X = q.target.value;
            f("description", X);
          }
        }), Y(N);
        var M = B(N, 2), L = F(M);
        Ge(L, {
          onclick: _,
          children: (q, X) => {
            Ve();
            var Z = qe("删除");
            D(q, Z);
          },
          $$slots: { default: !0 }
        }), Y(M), Y(R), D(O, R);
      },
      children: (O, R) => {
        Ge(O, {
          class: "input-btn-more",
          children: (z, I) => {
            var E = ry();
            D(z, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => x = O,
    () => x
  ), Y(H), D(e, k);
  var V = he({
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
de(Ld, { parameter: {}, index: {} }, [], [], !0);
var sy = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ay = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), ly = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const uy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Id(e, t) {
  ge(t, !0), et(e, uy);
  const [n, r] = ot(), o = () => Q(g(s), "$node", n);
  let i = mt(), s = /* @__PURE__ */ Te(() => yr(i)), a = /* @__PURE__ */ Te(() => {
    var d, h;
    return [...((h = (d = o()) == null ? void 0 : d.data) == null ? void 0 : h.parameters) || []];
  });
  var l = ly(), u = F(l);
  {
    var c = (d) => {
      var h = sy();
      Ve(4), D(d, h);
    };
    we(u, (d) => {
      g(a).length !== 0 && d(c);
    });
  }
  var f = B(u, 2);
  Mt(
    f,
    19,
    () => g(a),
    (d) => d.id,
    (d, h, p) => {
      Ld(d, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (d) => {
      var h = ay();
      D(d, h);
    }
  ), Y(l), D(e, l), he(), r();
}
de(Id, {}, [], [], !0);
const Di = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Wr()), Di(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = zt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Di(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: Wr()
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
var cy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), dy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const gy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function zd(e, t) {
  ge(t, !0), et(e, gy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn();
  return vn(e, ut(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = cy();
      D(a, l);
    },
    children: (a, l) => {
      var u = fy(), c = xe(u), f = F(c);
      Qe(f, {
        level: 3,
        children: (p, x) => {
          Ve();
          var _ = qe("输入参数");
          D(p, _);
        },
        $$slots: { default: !0 }
      });
      var d = B(f, 2);
      Ge(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, x) => {
          var _ = dy();
          D(p, _);
        },
        $$slots: { default: !0 }
      }), Y(c);
      var h = B(c, 2);
      Id(h, {}), D(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
de(zd, { data: {} }, [], [], !0);
const Rd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Rd(e, r.source, n));
}, Bd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Bd(r.children, t + "." + r.name, n)
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
          children: Bd(r, e.id, t)
        };
    }
  }
}, hy = (e = !1) => {
  const t = mt(), n = yr(t), { nodes: r, edges: o, nodeLookup: i } = je();
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
        Rd(d, t, l);
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
var vy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), py = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const my = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ge(t, !0), et(e, my);
  const [n, r] = ot(), o = () => Q(g(f), "$node", n), i = () => Q(m, "$selectItems", n);
  nn(() => {
    g(d).refType || k({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7), u = w(t, "useChildrenOnly", 7);
  let c = mt(), f = /* @__PURE__ */ Te(() => yr(c)), d = /* @__PURE__ */ Te(() => {
    var S;
    return {
      ...s(),
      ...(S = o()) == null ? void 0 : S.data[l()][a()]
    };
  });
  const { updateNodeData: h } = zt(), p = (S, N) => {
    h(c, (T) => {
      let M = T.data[l()];
      return M[a()] = { ...M[a()], [S]: N }, { [l()]: M };
    });
  }, x = (S, N) => {
    const T = N.target.value;
    p(S, T);
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
  }, m = hy(u());
  var C = py(), H = xe(C), $ = F(H);
  const V = /* @__PURE__ */ Te(() => g(d).nameDisabled === !0);
  ht($, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return g(V);
    },
    oninput: (S) => x("name", S)
  }), Y(H);
  var A = B(H, 2), O = F(A);
  {
    var R = (S) => {
      ht(S, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => x("value", N)
      });
    }, z = (S, N) => {
      {
        var T = (M) => {
          const L = /* @__PURE__ */ Te(() => [g(d).ref]);
          tn(M, {
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
        we(
          S,
          (M) => {
            g(d).refType !== "input" && M(T);
          },
          N
        );
      }
    };
    we(O, (S) => {
      g(d).refType === "fixed" ? S(R) : S(z, !1);
    });
  }
  Y(A);
  var I = B(A, 2), E = F(I);
  kn(
    Qr(E, {
      placement: "bottom",
      floating: (N) => {
        var T = vy(), M = F(T), L = B(F(M));
        const q = /* @__PURE__ */ Te(() => g(d).refType ? [g(d).refType] : []);
        tn(L, {
          items: ty,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(q);
          },
          onSelect: k
        }), Y(M);
        var X = B(M, 2), Z = B(F(X));
        yt(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (pe) => {
            x("defaultValue", pe);
          },
          get value() {
            return g(d).defaultValue;
          }
        }), Y(X);
        var ee = B(X, 2), U = B(F(ee));
        yt(U, {
          rows: 3,
          style: "width: 100%;",
          onchange: (pe) => {
            x("description", pe);
          },
          get value() {
            return g(d).description;
          }
        }), Y(ee);
        var ue = B(ee, 2), ve = F(ue);
        Ge(ve, {
          onclick: b,
          children: (pe, se) => {
            Ve();
            var Ne = qe("删除");
            D(pe, Ne);
          },
          $$slots: { default: !0 }
        }), Y(ue), Y(T), D(N, T);
      },
      children: (N, T) => {
        os(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => v = N,
    () => v
  ), Y(I), D(e, C);
  var P = he({
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
de(
  qd,
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
var yy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), wy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const xy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Lt(e, t) {
  ge(t, !0), et(e, xy);
  const [n, r] = ot(), o = () => Q(g(u), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters"), a = w(t, "useChildrenOnly", 7);
  let l = mt(), u = /* @__PURE__ */ Te(() => yr(l)), c = /* @__PURE__ */ Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var f = _y(), d = F(f);
  {
    var h = (_) => {
      var k = yy();
      Ve(4), D(_, k);
    };
    we(d, (_) => {
      g(c).length !== 0 && _(h);
    });
  }
  var p = B(d, 2);
  Mt(
    p,
    19,
    () => g(c),
    (_) => _.id,
    (_, k, v) => {
      qd(_, {
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
      var k = wy(), v = F(k, !0);
      Y(k), ke(() => ft(v, i())), D(_, k);
    }
  ), Y(f), D(e, f);
  var x = he({
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
de(
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
var by = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Cy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ky = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const $y = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Yd(e, t) {
  ge(t, !0), et(e, $y);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn();
  return vn(e, ut(
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
        var l = by();
        D(a, l);
      },
      children: (a, l) => {
        var u = ky(), c = xe(u), f = F(c);
        Qe(f, {
          level: 3,
          children: (p, x) => {
            Ve();
            var _ = qe("输出参数");
            D(p, _);
          },
          $$slots: { default: !0 }
        });
        var d = B(f, 2);
        Ge(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, x) => {
            var _ = Cy();
            D(p, _);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var h = B(c, 2);
        Lt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
de(Yd, { data: {} }, [], [], !0);
const Cs = (e) => JSON.parse(JSON.stringify(e));
var Ey = /* @__PURE__ */ Pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Sy = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), Py = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ny = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ty = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  ge(t, !0), et(e, Ty);
  const [n, r] = ot(), o = () => Q(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = mt(), u = /* @__PURE__ */ Te(() => yr(l)), c = /* @__PURE__ */ Te(() => {
    var M;
    let N = (M = o()) == null ? void 0 : M.data[a()], T;
    if (N && s().length > 0) {
      let L = N;
      for (let q = 0; q < s().length; q++) {
        const X = s()[q];
        q == s().length - 1 ? T = L[X] : L = L[X].children;
      }
    }
    return { ...i(), ...T };
  });
  const { updateNodeData: f } = zt(), d = (N, T) => {
    f(l, (M) => {
      const L = M.data[a()];
      if (L && s().length > 0) {
        let q = L;
        for (let X = 0; X < s().length; X++) {
          const Z = s()[X];
          X == s().length - 1 ? q[Z] = { ...q[Z], [N]: T } : q = q[Z].children;
        }
      }
      return {
        [a()]: [...Cs(L)]
      };
    });
  }, h = (N, T) => {
    const M = T.target.value;
    d(N, M);
  }, p = (N) => {
    const T = N.value;
    d("dataType", T);
  };
  let x;
  const _ = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let M = T;
        for (let L = 0; L < s().length; L++) {
          const q = s()[L];
          L == s().length - 1 ? M.splice(q, 1) : M = M[q].children;
        }
      }
      return {
        [a()]: [...Cs(T)]
      };
    }), x == null || x.hide();
  }, k = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let M = T;
        for (let L = 0; L < s().length; L++) {
          const q = s()[L];
          L == s().length - 1 ? M[q].children ? M[q].children.push({
            id: Wr(),
            name: "newParam",
            dataType: "String"
          }) : M[q].children = [
            {
              id: Wr(),
              name: "newParam",
              dataType: "String"
            }
          ] : M = M[q].children;
        }
      }
      return {
        [a()]: [...Cs(T)]
      };
    });
  };
  var v = Ny(), b = xe(v), m = F(b);
  {
    var C = (N) => {
      var T = tt(), M = xe(T);
      Mt(M, 17, s, Lr, (L, q) => {
        Ve();
        var X = qe(" ");
        D(L, X);
      }), D(N, T);
    };
    we(m, (N) => {
      s().length > 1 && N(C);
    });
  }
  var H = B(m, 2);
  const $ = /* @__PURE__ */ Te(() => g(c).nameDisabled === !0);
  ht(H, {
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
  }), Y(b);
  var V = B(b, 2), A = F(V);
  const O = /* @__PURE__ */ Te(() => g(c).dataType ? [g(c).dataType] : []), R = /* @__PURE__ */ Te(() => g(c).dataTypeDisabled === !0);
  tn(A, {
    items: Od,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(O);
    },
    get disabled() {
      return g(R);
    },
    onSelect: p
  });
  var z = B(A, 2);
  {
    var I = (N) => {
      Ge(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (T, M) => {
          var L = Ey();
          D(T, L);
        },
        $$slots: { default: !0 }
      });
    };
    we(z, (N) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && N(I);
    });
  }
  Y(V);
  var E = B(V, 2), P = F(E);
  kn(
    Qr(P, {
      placement: "bottom",
      floating: (T) => {
        var M = Py(), L = F(M), q = B(F(L));
        const X = /* @__PURE__ */ Te(() => g(c).defaultValue || "");
        yt(q, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(X);
          },
          onchange: (pe) => {
            h("defaultValue", pe);
          }
        }), Y(L);
        var Z = B(L, 2), ee = B(F(Z));
        const U = /* @__PURE__ */ Te(() => g(c).description || "");
        yt(ee, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(U);
          },
          onchange: (pe) => {
            h("description", pe);
          }
        }), Y(Z);
        var ue = B(Z, 2);
        {
          var ve = (pe) => {
            var se = Sy(), Ne = F(se);
            Ge(Ne, {
              onclick: _,
              children: (_e, $e) => {
                Ve();
                var le = qe("删除");
                D(_e, le);
              },
              $$slots: { default: !0 }
            }), Y(se), D(pe, se);
          };
          we(ue, (pe) => {
            g(c).deleteDisabled !== !0 && pe(ve);
          });
        }
        Y(M), D(T, M);
      },
      children: (T, M) => {
        os(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), Y(E), D(e, v);
  var S = he({
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
de(Fd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ ne("<!> <!>", 1), Hy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Dy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Vy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ay = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rr(e, t) {
  ge(t, !0), et(e, Ay);
  const [n, r] = ot(), o = () => Q(g(u), "$node", n), i = (_, k = pt, v = pt) => {
    var b = tt(), m = xe(b);
    Mt(
      m,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, H, $) => {
        var V = My(), A = xe(V);
        const O = /* @__PURE__ */ Te(() => [...v(), g($)]);
        Fd(A, {
          get parameter() {
            return g(H);
          },
          get position() {
            return g(O);
          },
          get dataKeyName() {
            return a();
          }
        });
        var R = B(A, 2);
        {
          var z = (I) => {
            var E = /* @__PURE__ */ be(() => [...v(), g($)]);
            i(I, () => g(H).children, () => g(E));
          };
          we(R, (I) => {
            g(H).children && I(z);
          });
        }
        D(C, V);
      },
      (C) => {
        var H = tt(), $ = xe(H);
        {
          var V = (A) => {
            var O = Hy(), R = F(O, !0);
            Y(O), ke(() => ft(R, s())), D(A, O);
          };
          we($, (A) => {
            v().length === 0 && A(V);
          });
        }
        D(C, H);
      }
    ), D(_, b);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Te(() => yr(l)), c = /* @__PURE__ */ Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[a()]) || []];
  });
  var f = Vy(), d = F(f);
  {
    var h = (_) => {
      var k = Dy();
      Ve(4), D(_, k);
    };
    we(d, (_) => {
      g(c).length !== 0 && _(h);
    });
  }
  var p = B(d, 2);
  i(p, () => g(c) || [], () => []), Y(f), D(e, f);
  var x = he({
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
de(rr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Oy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ly = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), zy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ry = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), By = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Yy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Wd(e, t) {
  ge(t, !0), et(e, Yy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ St(an([]));
  nn(async () => {
    var f, d;
    const c = await ((d = (f = s.provider) == null ? void 0 : f.llm) == null ? void 0 : d.call(f));
    g(a).push(...c || []);
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
  return Qt(() => {
    n().outType || u("text");
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var d = Oy();
        D(f, d);
      },
      children: (f, d) => {
        var h = qy(), p = xe(h), x = F(p);
        Qe(x, {
          level: 3,
          children: (me, G) => {
            Ve();
            var Se = qe("输入参数");
            D(me, Se);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 2);
        Ge(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (me, G) => {
            var Se = Ly();
            D(me, Se);
          },
          $$slots: { default: !0 }
        }), Y(p);
        var k = B(p, 2);
        Lt(k, {});
        var v = B(k, 2);
        Qe(v, {
          level: 3,
          mt: "10px",
          children: (me, G) => {
            Ve();
            var Se = qe("模型设置");
            D(me, Se);
          },
          $$slots: { default: !0 }
        });
        var b = B(v, 4), m = F(b);
        const C = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        tn(m, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (me) => {
            const G = me.value;
            l(o, () => ({ llmId: G }));
          },
          get value() {
            return g(C);
          }
        });
        var H = B(m, 2);
        os(H, {}), Y(b);
        var $ = B(b, 4), V = F($), A = F(V), O = F(A);
        Y(A);
        var R = B(A, 2);
        Xn(R), R.__input = [Iy, l, o], Y(V), Y($);
        var z = B($, 2), I = F(z), E = F(I), P = F(E);
        Y(E);
        var S = B(E, 2);
        Xn(S), S.__input = [zy, l, o], Y(I), Y(z);
        var N = B(z, 2), T = F(N), M = F(T), L = F(M);
        Y(M);
        var q = B(M, 2);
        Xn(q), q.__input = [Ry, l, o], Y(T), Y(N);
        var X = B(N, 4), Z = F(X);
        const ee = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        yt(Z, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(ee);
          },
          oninput: (me) => {
            l(o, { systemPrompt: me.target.value });
          }
        }), Y(X);
        var U = B(X, 4), ue = F(U);
        const ve = /* @__PURE__ */ Te(() => n().userPrompt || "");
        yt(ue, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(ve);
          },
          oninput: (me) => {
            l(o, { userPrompt: me.target.value });
          }
        }), Y(U);
        var pe = B(U, 2), se = F(pe);
        Qe(se, {
          level: 3,
          mt: "10px",
          children: (me, G) => {
            Ve();
            var Se = qe("输出参数");
            D(me, Se);
          },
          $$slots: { default: !0 }
        });
        var Ne = B(se, 2);
        const _e = /* @__PURE__ */ Te(() => n().outType ? [n().outType] : []);
        tn(Ne, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (me) => {
            u(me.value);
          },
          get value() {
            return g(_e);
          }
        });
        var $e = B(Ne, 2);
        {
          var le = (me) => {
            Ge(me, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (G, Se) => {
                var De = By();
                D(G, De);
              },
              $$slots: { default: !0 }
            });
          };
          we($e, (me) => {
            n().outType === "json" && me(le);
          });
        }
        Y(pe);
        var ie = B(pe, 2);
        rr(ie, {}), ke(() => {
          ft(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ti(R, n().temperature ?? 0.5), ft(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), ti(S, n().topP ?? 0.9), ft(L, `Top K: ${n().topK ?? 50 ?? ""}`), ti(q, n().topK ?? 50);
        }), D(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
jr(["input"]);
de(Wd, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Wy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ge(t, !0), et(e, Ky);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  nn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = mt(), { addParameter: i } = Pn(), { updateNodeData: s } = zt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Fy();
        D(u, c);
      },
      children: (u, c) => {
        var f = Zy(), d = xe(f), h = F(d);
        Qe(h, {
          level: 3,
          children: (R, z) => {
            Ve();
            var I = qe("输入参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, z) => {
            var I = Wy();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var x = B(d, 2);
        Lt(x, {});
        var _ = B(x, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          children: (R, z) => {
            Ve();
            var I = qe("代码");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var k = B(_, 4), v = F(k);
        const b = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        tn(v, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (R) => {
            const z = R.value;
            s(o, () => ({ engine: z }));
          },
          get value() {
            return g(b);
          }
        }), Y(k);
        var m = B(k, 4), C = F(m);
        const H = /* @__PURE__ */ Te(() => n().code || "");
        yt(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (R) => {
            s(o, () => ({ code: R.target.value }));
          },
          get value() {
            return g(H);
          }
        }), Y(m);
        var $ = B(m, 2), V = F($);
        Qe(V, {
          level: 3,
          mt: "10px",
          children: (R, z) => {
            Ve();
            var I = qe("输出参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var A = B(V, 2);
        Ge(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, z) => {
            var I = Xy();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Y($);
        var O = B($, 2);
        rr(O, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
de(Xd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Uy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ge(t, !0), et(e, Jy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), { updateNodeData: s } = zt();
  return Qt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Gy();
        D(l, u);
      },
      children: (l, u) => {
        var c = jy(), f = xe(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (H, $) => {
            Ve();
            var V = qe("输入参数");
            D(H, V);
          },
          $$slots: { default: !0 }
        });
        var h = B(d, 2);
        Ge(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, $) => {
            var V = Uy();
            D(H, V);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var p = B(f, 2);
        Lt(p, {});
        var x = B(p, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (H, $) => {
            Ve();
            var V = qe("模板内容");
            D(H, V);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 2), k = F(_);
        const v = /* @__PURE__ */ Te(() => n().template || "");
        yt(k, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (H) => {
            s(o, () => ({ template: H.target.value }));
          },
          get value() {
            return g(v);
          }
        }), Y(_);
        var b = B(_, 2), m = F(b);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (H, $) => {
            Ve();
            var V = qe("输出参数");
            D(H, V);
          },
          $$slots: { default: !0 }
        }), Y(b);
        var C = B(b, 2);
        rr(C, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
de(Zd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ow = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), aw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), lw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const cw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Kd(e, t) {
  ge(t, !0), et(e, cw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  nn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = mt(), { addParameter: s } = Pn(), { updateNodeData: a } = zt();
  return vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Qy();
        D(u, c);
      },
      children: (u, c) => {
        var f = uw(), d = xe(f), h = F(d);
        Qe(h, {
          level: 3,
          children: (re, oe) => {
            Ve();
            var fe = qe("输入参数");
            D(re, fe);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (re, oe) => {
            var fe = ew();
            D(re, fe);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var x = B(d, 2);
        Lt(x, {});
        var _ = B(x, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ve();
            var fe = qe("URL 地址");
            D(re, fe);
          },
          $$slots: { default: !0 }
        });
        var k = B(_, 2), v = F(k), b = F(v);
        const m = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        tn(b, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (re) => {
            const oe = re.value;
            a(i, () => ({ method: oe }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var C = B(v, 2), H = F(C);
        const $ = /* @__PURE__ */ Te(() => n().url || "");
        ht(H, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (re) => {
            a(i, () => ({ url: re.target.value }));
          },
          get value() {
            return g($);
          }
        }), Y(C), Y(k);
        var V = B(k, 2), A = F(V);
        Qe(A, {
          level: 3,
          children: (re, oe) => {
            Ve();
            var fe = qe("Http 头信息");
            D(re, fe);
          },
          $$slots: { default: !0 }
        });
        var O = B(A, 2);
        Ge(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (re, oe) => {
            var fe = tw();
            D(re, fe);
          },
          $$slots: { default: !0 }
        }), Y(V);
        var R = B(V, 2);
        Lt(R, { dataKeyName: "headers" });
        var z = B(R, 2);
        Qe(z, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ve();
            var fe = qe("Body");
            D(re, fe);
          },
          $$slots: { default: !0 }
        });
        var I = B(z, 2), E = F(I), P = F(E);
        const S = /* @__PURE__ */ Te(() => !n().bodyType);
        ht(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "" });
          }
        }), Ve(), Y(E);
        var N = B(E, 2), T = F(N);
        const M = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        ht(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(M);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "form-data" });
          }
        }), Ve(), Y(N);
        var L = B(N, 2), q = F(L);
        const X = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        ht(q, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(X);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ve(), Y(L);
        var Z = B(L, 2), ee = F(Z);
        const U = /* @__PURE__ */ Te(() => n().bodyType === "json");
        ht(ee, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(U);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "json" });
          }
        }), Ve(), Y(Z);
        var ue = B(Z, 2), ve = F(ue);
        const pe = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        ht(ve, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(pe);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "raw" });
          }
        }), Ve(), Y(ue), Y(I);
        var se = B(I, 2);
        {
          var Ne = (re) => {
            var oe = rw(), fe = xe(oe), Le = F(fe);
            Qe(Le, {
              level: 3,
              children: (Ie, ce) => {
                Ve();
                var ct = qe("参数");
                D(Ie, ct);
              },
              $$slots: { default: !0 }
            });
            var Ze = B(Le, 2);
            Ge(Ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ie, ce) => {
                var ct = nw();
                D(Ie, ct);
              },
              $$slots: { default: !0 }
            }), Y(fe);
            var te = B(fe, 2);
            Lt(te, { dataKeyName: "formData" }), D(re, oe);
          };
          we(se, (re) => {
            n().bodyType === "form-data" && re(Ne);
          });
        }
        var _e = B(se, 2);
        {
          var $e = (re) => {
            var oe = iw(), fe = xe(oe), Le = F(fe);
            Qe(Le, {
              level: 3,
              children: (Ie, ce) => {
                Ve();
                var ct = qe("Body 参数");
                D(Ie, ct);
              },
              $$slots: { default: !0 }
            });
            var Ze = B(Le, 2);
            Ge(Ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ie, ce) => {
                var ct = ow();
                D(Ie, ct);
              },
              $$slots: { default: !0 }
            }), Y(fe);
            var te = B(fe, 2);
            Lt(te, { dataKeyName: "formUrlencoded" }), D(re, oe);
          };
          we(_e, (re) => {
            n().bodyType === "x-www-form-urlencoded" && re($e);
          });
        }
        var le = B(_e, 2);
        {
          var ie = (re) => {
            var oe = sw(), fe = F(oe);
            yt(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Le) => {
                a(i, { bodyJson: Le.target.value });
              }
            }), Y(oe), D(re, oe);
          };
          we(le, (re) => {
            n().bodyType === "json" && re(ie);
          });
        }
        var me = B(le, 2);
        {
          var G = (re) => {
            var oe = aw(), fe = F(oe);
            yt(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Le) => {
                a(i, { bodyRaw: Le.target.value });
              }
            }), Y(oe), D(re, oe);
          };
          we(me, (re) => {
            n().bodyType === "raw" && re(G);
          });
        }
        var Se = B(me, 2), De = F(Se);
        Qe(De, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ve();
            var fe = qe("输出参数");
            D(re, fe);
          },
          $$slots: { default: !0 }
        });
        var Oe = B(De, 2);
        Ge(Oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (re, oe) => {
            var fe = lw();
            D(re, fe);
          },
          $$slots: { default: !0 }
        }), Y(Se);
        var Re = B(Se, 2);
        rr(Re, {}), D(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
de(Kd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), fw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gd(e, t) {
  ge(t, !0), et(e, hw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ St(an([]));
  nn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = zt();
  return Qt(() => {
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
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = dw();
        D(c, f);
      },
      children: (c, f) => {
        var d = gw(), h = xe(d), p = F(h);
        Qe(p, {
          level: 3,
          children: (I, E) => {
            Ve();
            var P = qe("输入参数");
            D(I, P);
          },
          $$slots: { default: !0 }
        });
        var x = B(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, E) => {
            var P = fw();
            D(I, P);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var _ = B(h, 2);
        Lt(_, {});
        var k = B(_, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            Ve();
            var P = qe("知识库设置");
            D(I, P);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), b = F(v);
        const m = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        tn(b, {
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
        }), Y(v);
        var C = B(v, 4), H = F(C);
        ht(H, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const E = I.target.value;
            l(o, () => ({ keyword: E }));
          }
        }), Y(C);
        var $ = B(C, 4), V = F($);
        const A = /* @__PURE__ */ Te(() => n().limit || "");
        ht(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (I) => {
            const E = I.target.value;
            l(o, () => ({ limit: E }));
          },
          get value() {
            return g(A);
          }
        }), Y($);
        var O = B($, 2), R = F(O);
        Qe(R, {
          level: 3,
          mt: "10px",
          children: (I, E) => {
            Ve();
            var P = qe("输出参数");
            D(I, P);
          },
          $$slots: { default: !0 }
        }), Y(O);
        var z = B(O, 2);
        rr(z, {}), D(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
de(Gd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), pw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const yw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  ge(t, !0), et(e, yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ St(an([]));
  nn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : f.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = zt();
  return Qt(() => {
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
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = vw();
        D(c, f);
      },
      children: (c, f) => {
        var d = mw(), h = xe(d), p = F(h);
        Qe(p, {
          level: 3,
          children: (z, I) => {
            Ve();
            var E = qe("输入参数");
            D(z, E);
          },
          $$slots: { default: !0 }
        });
        var x = B(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, I) => {
            var E = pw();
            D(z, E);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var _ = B(h, 2);
        Lt(_, {});
        var k = B(_, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ve();
            var E = qe("搜索引擎设置");
            D(z, E);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), b = F(v);
        const m = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : []);
        tn(b, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (z) => {
            const I = z.value;
            l(o, () => ({ engine: I }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var C = B(v, 4), H = F(C);
        ht(H, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const I = z.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), Y(C);
        var $ = B(C, 4), V = F($);
        ht(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const I = z.target.value;
            l(o, () => ({ limit: I }));
          }
        }), Y($);
        var A = B($, 2), O = F(A);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ve();
            var E = qe("输出参数");
            D(z, E);
          },
          $$slots: { default: !0 }
        }), Y(A);
        var R = B(A, 2);
        rr(R, {}), D(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
de(Ud, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), _w = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ ne('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const bw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function jd(e, t) {
  ge(t, !0), et(e, bw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn();
  return Qt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", {
      name: "loopVar",
      nameDisabled: !0,
      deleteDisabled: !0
    });
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ww();
        D(l, u);
      },
      handle: (l) => {
        Jn(l, {
          type: "source",
          get position() {
            return Me.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = xw(), f = xe(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (v, b) => {
            Ve();
            var m = qe("循环变量");
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var h = B(f, 2);
        Lt(h, { dataKeyName: "loopVars" });
        var p = B(h, 2), x = F(p);
        Qe(x, {
          level: 3,
          children: (v, b) => {
            Ve();
            var m = qe("输出参数");
            D(v, m);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 2);
        Ge(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, b) => {
            var m = _w();
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(p);
        var k = B(p, 2);
        Lt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
de(jd, { data: {} }, [], [], !0);
const Cw = {
  startNode: zd,
  codeNode: Xd,
  llmNode: Wd,
  templateNode: Zd,
  httpNode: Kd,
  knowledgeNode: Gd,
  searchEngineNode: Ud,
  loopNode: jd,
  endNode: Yd
};
var kw = /* @__PURE__ */ ne("<!> ", 1);
function Gs(e, t) {
  ge(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Ge(e, {
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
      var c = kw(), f = xe(c);
      fa(f, n);
      var d = B(f);
      ke(() => ft(d, ` ${r() ?? ""}`)), D(l, c);
    },
    $$slots: { default: !0 }
  }), he({
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
de(
  Gs,
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
var $w = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Sw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Jd(e, t) {
  ge(t, !0);
  let n = /* @__PURE__ */ St("base"), r = /* @__PURE__ */ St("show");
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
  var u = Sw(), c = F(u), f = F(c), d = F(f);
  bd(d, {
    style: "width: 100%",
    items: i,
    onChange: (k) => {
      j(n, k.value.toString(), !0);
    }
  }), Y(f);
  var h = B(f, 2), p = F(h);
  Mt(p, 21, () => o, Lr, (k, v) => {
    Gs(k, ut(() => g(v)));
  }), Y(p);
  var x = B(p, 2);
  Mt(x, 21, () => s, Lr, (k, v) => {
    Gs(k, ut(() => g(v)));
  }), Y(x), Y(h), Y(c);
  var _ = B(c, 2);
  Ge(_, {
    onclick: () => {
      j(r, g(r) ? "" : "show", !0);
    },
    children: (k, v) => {
      var b = tt(), m = xe(b);
      {
        var C = ($) => {
          var V = $w();
          D($, V);
        }, H = ($) => {
          var V = Ew();
          D($, V);
        };
        we(m, ($) => {
          g(r) === "show" ? $(C) : $(H, !1);
        });
      }
      D(k, b);
    },
    $$slots: { default: !0 }
  }), Y(u), ke(() => {
    Ct(u, 1, `tf-toolbar ${g(r) ?? ""}`), gt(p, `display: ${g(n) === "base" ? "flex" : "none"}`), gt(x, `display: ${g(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), he();
}
de(Jd, {}, [], [], !0);
const Pw = () => {
  const { nodeLookup: e } = je();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, Nw = () => {
  const { nodes: e } = je();
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
}, Tw = () => {
  const { edges: e } = je();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var Mw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Dw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Aw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Ow = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Iw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Rw = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const Bw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Qd(e, t) {
  var k;
  ge(t, !0), et(e, Bw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = zt(), { updateNodeData: a } = s, l = (v) => {
    a(o, v);
  }, u = (v, b) => {
    var m;
    l({ [v]: (m = b.target) == null ? void 0 : m.value });
  }, c = { ...r, id: o, data: n() }, f = document.createElement("div"), h = er().customNodes[t.type];
  (k = h.render) == null || k.call(h, f, c, s);
  const p = h.forms;
  let x;
  Qt(() => {
    n().expand && x && x.append(f);
  }), Qt(() => {
    var v;
    n() && ((v = h.onUpdate) == null || v.call(h, f, { ...c, data: n() }));
  }), Qt(() => {
    !n().parameters && h.parameters && l({
      parameters: Di(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), Qt(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Di(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const _ = /* @__PURE__ */ Te(() => ({
    ...n(),
    description: h.description
  }));
  return vn(e, ut(
    {
      get data() {
        return g(_);
      }
    },
    () => r,
    {
      icon: (b) => {
        var m = tt(), C = xe(m);
        fa(C, () => h.icon), D(b, m);
      },
      children: (b, m) => {
        var C = Rw(), H = xe(C);
        {
          var $ = (I) => {
            var E = Hw(), P = xe(E), S = F(P);
            Qe(S, {
              level: 3,
              children: (L, q) => {
                Ve();
                var X = qe("输入参数");
                D(L, X);
              },
              $$slots: { default: !0 }
            });
            var N = B(S, 2);
            {
              var T = (L) => {
                Ge(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (q, X) => {
                    var Z = Mw();
                    D(q, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              we(N, (L) => {
                h.parametersAddEnable !== !1 && L(T);
              });
            }
            Y(P);
            var M = B(P, 2);
            Lt(M, {}), D(I, E);
          };
          we(H, (I) => {
            h.parametersEnable !== !1 && I($);
          });
        }
        var V = B(H, 2);
        {
          var A = (I) => {
            var E = tt(), P = xe(E);
            Mt(P, 17, () => p, Lr, (S, N) => {
              var T = tt(), M = xe(T);
              {
                var L = (X) => {
                  var Z = Dw(), ee = xe(Z), U = F(ee, !0);
                  Y(ee);
                  var ue = B(ee, 2), ve = F(ue);
                  const pe = /* @__PURE__ */ Te(() => n()[g(N).name] || g(N).defaultValue);
                  ht(ve, ut(
                    {
                      get placeholder() {
                        return g(N).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return g(pe);
                      }
                    },
                    () => g(N).attrs,
                    {
                      onchange: (se) => {
                        u(g(N).name, se);
                      }
                    }
                  )), Y(ue), ke(() => ft(U, g(N).label)), D(X, Z);
                }, q = (X, Z) => {
                  {
                    var ee = (ue) => {
                      var ve = Vw(), pe = xe(ve), se = F(pe, !0);
                      Y(pe);
                      var Ne = B(pe, 2), _e = F(Ne);
                      const $e = /* @__PURE__ */ Te(() => n()[g(N).name] || g(N).defaultValue);
                      yt(_e, ut(
                        {
                          rows: 3,
                          get placeholder() {
                            return g(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return g($e);
                          }
                        },
                        () => g(N).attrs,
                        {
                          onchange: (le) => {
                            u(g(N).name, le);
                          }
                        }
                      )), Y(Ne), ke(() => ft(se, g(N).label)), D(ue, ve);
                    }, U = (ue, ve) => {
                      {
                        var pe = (Ne) => {
                          var _e = Aw(), $e = xe(_e), le = F($e, !0);
                          Y($e);
                          var ie = B($e, 2), me = F(ie), G = F(me), Se = F(G);
                          Y(G);
                          var De = B(G, 2);
                          Xn(De);
                          var Oe = (re) => l({
                            [g(N).name]: parseFloat(re.target.value)
                          });
                          let Re;
                          Y(me), Y(ie), ke(() => {
                            ft(le, g(N).label), ft(Se, `${g(N).description ?? ""}: ${n()[g(N).name] ?? g(N).defaultValue ?? ""}`), Re = Xt(
                              De,
                              Re,
                              {
                                class: "nodrag",
                                type: "range",
                                ...g(N).attrs,
                                value: n()[g(N).name] ?? g(N).defaultValue,
                                oninput: Oe
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(Ne, _e);
                        }, se = (Ne, _e) => {
                          {
                            var $e = (ie) => {
                              var me = Ow(), G = xe(me), Se = F(G, !0);
                              Y(G);
                              var De = B(G, 2), Oe = F(De);
                              const Re = /* @__PURE__ */ Te(() => g(N).options || []), re = /* @__PURE__ */ Te(() => n()[g(N).name] ? [n()[g(N).name]] : [g(N).defaultValue]);
                              tn(Oe, {
                                get items() {
                                  return g(Re);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return g(N).placeholder;
                                },
                                onSelect: (oe) => {
                                  const fe = oe.value;
                                  l({ [g(N).name]: fe });
                                },
                                get value() {
                                  return g(re);
                                }
                              }), Y(De), ke(() => ft(Se, g(N).label)), D(ie, me);
                            }, le = (ie, me) => {
                              {
                                var G = (De) => {
                                  var Oe = Lw(), Re = xe(Oe), re = F(Re, !0);
                                  Y(Re);
                                  var oe = B(Re, 2), fe = F(oe);
                                  const Le = /* @__PURE__ */ Te(() => {
                                    var Ze;
                                    return (Ze = g(N).chosen) == null ? void 0 : Ze.buttonText;
                                  });
                                  xd(fe, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return g(N).placeholder;
                                    },
                                    get buttonText() {
                                      return g(Le);
                                    },
                                    onChosen: (Ze, te, Ie) => {
                                      var ce, ct;
                                      (ct = (ce = g(N).chosen) == null ? void 0 : ce.onChosen) == null || ct.call(ce, l, Ze, te, Ie);
                                    },
                                    get value() {
                                      var Ze;
                                      return n()[((Ze = g(N).chosen) == null ? void 0 : Ze.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var Ze;
                                      return n()[((Ze = g(N).chosen) == null ? void 0 : Ze.labelDataKey) || ""];
                                    }
                                  }), Y(oe), ke(() => ft(re, g(N).label)), D(De, Oe);
                                }, Se = (De, Oe) => {
                                  {
                                    var Re = (re) => {
                                      Qe(re, ut({ level: 3, mt: "10px" }, () => g(N).attrs, {
                                        children: (oe, fe) => {
                                          Ve();
                                          var Le = qe();
                                          ke(() => ft(Le, g(N).label)), D(oe, Le);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    we(
                                      De,
                                      (re) => {
                                        g(N).type === "heading" && re(Re);
                                      },
                                      Oe
                                    );
                                  }
                                };
                                we(
                                  ie,
                                  (De) => {
                                    g(N).type === "chosen" ? De(G) : De(Se, !1);
                                  },
                                  me
                                );
                              }
                            };
                            we(
                              Ne,
                              (ie) => {
                                g(N).type === "select" ? ie($e) : ie(le, !1);
                              },
                              _e
                            );
                          }
                        };
                        we(
                          ue,
                          (Ne) => {
                            g(N).type === "slider" ? Ne(pe) : Ne(se, !1);
                          },
                          ve
                        );
                      }
                    };
                    we(
                      X,
                      (ue) => {
                        g(N).type === "textarea" ? ue(ee) : ue(U, !1);
                      },
                      Z
                    );
                  }
                };
                we(M, (X) => {
                  g(N).type === "input" ? X(L) : X(q, !1);
                });
              }
              D(S, T);
            }), D(I, E);
          };
          we(V, (I) => {
            p && I(A);
          });
        }
        var O = B(V, 2);
        kn(O, (I) => x = I, () => x);
        var R = B(O, 2);
        {
          var z = (I) => {
            var E = zw(), P = xe(E), S = F(P);
            Qe(S, {
              level: 3,
              mt: "10px",
              children: (L, q) => {
                Ve();
                var X = qe("输出参数");
                D(L, X);
              },
              $$slots: { default: !0 }
            });
            var N = B(S, 2);
            {
              var T = (L) => {
                Ge(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (q, X) => {
                    var Z = Iw();
                    D(q, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              we(N, (L) => {
                h.outputDefsAddEnable !== !1 && L(T);
              });
            }
            Y(P);
            var M = B(P, 2);
            rr(M, {}), D(I, E);
          };
          we(R, (I) => {
            h.outputDefsEnable !== !1 && I(z);
          });
        }
        ke(() => {
          gt(O, h.rootStyle || ""), Ct(O, 1, gn(h.rootClass), "svelte-q0cqsa");
        }), D(b, C);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(v) {
      n(v), y();
    }
  });
}
de(Qd, { data: {} }, [], [], !0);
const qw = () => {
  const e = je();
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
var Yw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Fw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), Ww = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Xw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function ef(e, t) {
  ge(t, !0), et(e, Xw);
  const [n, r] = ot(), o = () => Q(V, "$nodes", n), i = () => Q(A, "$edges", n), s = () => Q(O, "$viewport", n), a = w(t, "onInit", 7), l = zt();
  a()(l);
  let u = /* @__PURE__ */ St(!1), c = /* @__PURE__ */ St(void 0);
  const { updateEdgeData: f } = qw(), d = (T) => {
    T.preventDefault(), T.dataTransfer && (T.dataTransfer.dropEffect = "move");
  }, h = (T) => {
    var Z;
    T.preventDefault();
    const M = l.screenToFlowPosition({
      x: T.clientX - 250,
      y: T.clientY - 100
    }), L = (Z = T.dataTransfer) == null ? void 0 : Z.getData("application/tinyflow"), q = L ? JSON.parse(L) : {}, X = {
      id: `node_${Wr()}`,
      position: M,
      data: {},
      ...q
    };
    ai.addNode(X), ai.selectNodeOnly(X.id);
  }, { getNode: p } = Pw(), x = (T) => {
    const M = p(T.source), L = p(T.target);
    if (T.sourceHandle === "loop_handle" || M.parentId) {
      const q = l.getEdges();
      for (let X of q)
        if (X.target === T.target) {
          const Z = p(X.source);
          if (T.sourceHandle === "loop_handle" && Z.parentId !== M.id || M.parentId && Z.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && L.parentId && L.parentId !== M.id);
  }, { ensureParentInNodesBefore: _ } = Nw(), k = (T, M) => {
    if (!M.isValid)
      return;
    const L = M.toNode;
    if (L.parentId)
      return;
    const q = M.fromNode, X = M.fromHandle, Z = { position: { ...L.position } };
    if (X.id === "loop_handle" ? Z.parentId = q.id : q.parentId && (Z.parentId = q.parentId), Z.parentId) {
      const ee = p(Z.parentId);
      Z.position = {
        x: L.position.x - ee.position.x,
        y: L.position.y - ee.position.y
      }, _(Z.parentId, L.id), l.updateNode(L.id, Z);
    }
  }, { getEdgesByTarget: v } = Tw(), b = (T) => {
    T.edges.forEach((L) => {
      const q = p(L.target);
      if (q && q.parentId) {
        const X = v(L.target), Z = p(q.parentId);
        if (X.length === 0)
          l.updateNode(q.id, {
            parentId: void 0,
            position: {
              x: q.position.x + Z.position.x,
              y: q.position.y + Z.position.y
            }
          });
        else {
          let ee = !1;
          for (let U = 0; U < X.length; U++) {
            const ue = X[U], ve = p(ue.source);
            if (ve.parentId || ve.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || l.updateNode(q.id, {
            parentId: void 0,
            position: {
              x: q.position.x + Z.position.x,
              y: q.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, m = (T, M) => {
  }, C = (T) => {
  }, H = {}, $ = er().customNodes;
  if ($)
    for (let T of Object.keys($))
      H[T] = Qd;
  const { nodes: V, edges: A, viewport: O } = je(), R = er().onDataChange;
  R && (V.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "nodesChange" }
    );
  }), A.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "edgesChange" }
    );
  }), O.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var z = Ww(), I = F(z);
  const E = /* @__PURE__ */ Te(() => ({ ...Cw, ...H })), P = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: $o.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  sd(I, ut(
    {
      get nodeTypes() {
        return g(E);
      }
    },
    ai,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: k,
      onconnectstart: m,
      onconnect: C,
      connectionRadius: 50,
      ondelete: b,
      onclick: (T) => {
        const M = T.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || (j(u, !1), j(c, null));
      },
      get defaultEdgeOptions() {
        return g(P);
      },
      $$events: {
        drop: h,
        dragover: d,
        edgeclick: (T) => {
          j(u, !0), j(c, T.detail.edge, !0);
        }
      },
      children: (T, M) => {
        var L = Fw(), q = xe(L);
        pd(q, {});
        var X = B(q, 2);
        gd(X, {});
        var Z = B(X, 2);
        yd(Z, {});
        var ee = B(Z, 2);
        {
          var U = (ue) => {
            Ro(ue, {
              children: (ve, pe) => {
                var se = Yw(), Ne = B(F(se), 4), _e = F(Ne);
                const $e = /* @__PURE__ */ Te(() => {
                  var le, ie;
                  return (ie = (le = g(c)) == null ? void 0 : le.data) == null ? void 0 : ie.condition;
                });
                yt(_e, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g($e);
                  },
                  onchange: (le) => {
                    g(c) && f(g(c).id, { condition: le.target.value });
                  }
                }), Y(Ne), Y(se), D(ve, se);
              },
              $$slots: { default: !0 }
            });
          };
          we(ee, (ue) => {
            g(u) && ue(U);
          });
        }
        D(T, L);
      },
      $$slots: { default: !0 }
    }
  ));
  var S = B(I, 2);
  Jd(S, {}), Y(z), D(e, z);
  var N = he({
    get onInit() {
      return a();
    },
    set onInit(T) {
      a(T), y();
    }
  });
  return r(), N;
}
de(ef, { onInit: {} }, [], [], !0);
function Zw(e, t) {
  ge(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ai.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Or("tinyflow_options", n()), ad(e, {
    fitView: !0,
    children: (i, s) => {
      ef(i, {
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
customElements.define("tinyflow-component", de(Zw, { options: {}, onInit: {} }, [], [], !1));
export {
  Qw as Tinyflow
};
//# sourceMappingURL=index.js.map
