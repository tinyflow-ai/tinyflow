var vf = Object.defineProperty;
var Ba = (e) => {
  throw TypeError(e);
};
var pf = (e, t, n) => t in e ? vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $t = (e, t, n) => pf(e, typeof t != "symbol" ? t + "" : t, n), as = (e, t, n) => t.has(e) || Ba("Cannot " + n);
var ct = (e, t, n) => (as(e, t, "read from private field"), n ? n.call(e) : t.get(e)), or = (e, t, n) => t.has(e) ? Ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ro = (e, t, n, r) => (as(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), qa = (e, t, n) => (as(e, t, "access private method"), n);
const mf = "5";
var Gl;
typeof window < "u" && ((Gl = window.__svelte ?? (window.__svelte = {})).v ?? (Gl.v = /* @__PURE__ */ new Set())).add(mf);
let Xr = !1, yf = !1;
function wf() {
  Xr = !0;
}
wf();
const Gs = 1, Us = 2, Ul = 4, _f = 8, xf = 16, bf = 1, Cf = 2, Jl = 4, kf = 8, $f = 16, Ql = 1, Ef = 2, Js = "[", Qs = "[!", ea = "]", kr = {}, Vt = Symbol(), Sf = "http://www.w3.org/1999/xhtml", Pf = "http://www.w3.org/2000/svg", Ya = !1;
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, Nf = Array.prototype.indexOf, ta = Array.from, li = Object.keys, ho = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, eu = Object.getOwnPropertyDescriptors, Tf = Object.prototype, Mf = Array.prototype, na = Object.getPrototypeOf, Fa = Object.isExtensible;
function oo(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Hf(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, tu = 4, Li = 8, ra = 16, In = 32, pr = 64, ui = 128, Ft = 256, ci = 512, Tt = 1024, _n = 2048, nr = 4096, Vn = 8192, Ii = 16384, Df = 32768, Zr = 65536, Vf = 1 << 17, Af = 1 << 19, nu = 1 << 20, ks = 1 << 21, Xn = Symbol("$state"), oa = Symbol("legacy props"), Of = Symbol("");
function Lf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function If() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Yf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let De = !1;
function qt(e) {
  De = e;
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
  if (De) {
    if (/* @__PURE__ */ En(Ye) !== null)
      throw zi(), kr;
    Ye = e;
  }
}
function Ae(e = 1) {
  if (De) {
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
function sn(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = na(e);
  if (t !== Tf && t !== Mf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ St(0), i = tt, s = (a) => {
    var l = tt;
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Yf();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ St(u.value)), n.set(l, c)) : U(
          c,
          s(() => sn(u.value))
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
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && U(c, d);
          }
          U(u, Vt), ls(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Xn)
          return e;
        var c = n.get(l), d = l in a;
        if (c === void 0 && (!d || (h = Dn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ St(sn(d ? a[l] : Vt))), n.set(l, c)), c !== void 0) {
          var f = g(c);
          return f === Vt ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Vt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        var f;
        if (l === Xn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== Vt || Reflect.has(a, l);
        if (u !== void 0 || je !== null && (!c || (f = Dn(a, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ St(c ? sn(a[l]) : Vt)), n.set(l, u));
          var d = g(u);
          if (d === Vt)
            return !1;
        }
        return c;
      },
      set(a, l, u, c) {
        var v;
        var d = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? U(p, Vt) : h in a && (p = s(() => /* @__PURE__ */ St(Vt)), n.set(h + "", p));
          }
        d === void 0 ? (!f || (v = Dn(a, l)) != null && v.writable) && (d = s(() => /* @__PURE__ */ St(void 0)), U(
          d,
          s(() => sn(u))
        ), n.set(l, d)) : (f = d.v !== Vt, U(
          d,
          s(() => sn(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_ != null && _.set && _.set.call(c, u), !f) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= x.v && U(x, k + 1);
          }
          ls(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Vt;
        });
        for (var [u, c] of n)
          c.v !== Vt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ff();
      }
    }
  );
}
function ls(e, t = 1) {
  U(e, e.v + t);
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
  if (!De)
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
  if (!De) {
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
  let r = De ? Ye : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!De)
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
  var t = un | _n, n = tt !== null && (tt.f & un) !== 0 ? (
    /** @type {Derived} */
    tt
  ) : null;
  return je === null || n !== null && (n.f & Ft) !== 0 ? t |= Ft : je.f |= nu, {
    ctx: Ze,
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
    parent: n ?? je
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
function Xf(e) {
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
  var t, n = je;
  Jn(Xf(e));
  try {
    au(e), t = Cu(e);
  } finally {
    Jn(n);
  }
  return t;
}
function uu(e) {
  var t = lu(e), n = (Fn || (e.f & Ft) !== 0) && e.deps !== null ? nr : Tt;
  Qt(e, n), e.equals(t) || (e.v = t, e.wv = xu());
}
function cu(e) {
  je === null && tt === null && zf(), tt !== null && (tt.f & Ft) !== 0 && je === null && If(), Do && Lf();
}
function Zf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: Ze,
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
      Bi(i), i.f |= Df;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && qi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (nu | ui)) === 0;
  if (!s && r && (o !== null && Zf(i, o), tt !== null && (tt.f & un) !== 0)) {
    var a = (
      /** @type {Derived} */
      tt
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function la(e) {
  const t = mr(Li, null, !1);
  return Qt(t, Tt), t.teardown = e, t;
}
function ln(e) {
  cu();
  var t = je !== null && (je.f & In) !== 0 && Ze !== null && !Ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ze
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: je,
      reaction: tt
    });
  } else {
    var r = Bt(e);
    return r;
  }
}
function Kf(e) {
  return cu(), Kr(e);
}
function jf(e) {
  const t = mr(pr, e, !0);
  return () => {
    cn(t);
  };
}
function Gf(e) {
  const t = mr(pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vr(t, () => {
      cn(t), r(void 0);
    }) : (cn(t), r(void 0));
  });
}
function Bt(e) {
  return mr(tu, e, !1);
}
function me(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), Cn(t));
  });
}
function wt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ze
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Tt) !== 0 && Qt(n, nr), Gr(n) && Bi(n), t.ran = !1;
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
  return jr(() => e(...r.map(g)));
}
function jr(e, t = 0) {
  return mr(Li | ra | t, e, !0);
}
function Un(e, t = !0) {
  return mr(Li | In, e, !0, t);
}
function du(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Do, r = tt;
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
function Uf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & In) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Af) !== 0) && e.nodes_start !== null && (gu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), fu(e, t && !n), hi(e, 0), Qt(e, Ii);
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
    e.f ^= Vn, (e.f & Tt) === 0 && (e.f ^= Tt), Gr(e) && (Qt(e, _n), qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & In) !== 0;
      pu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Jf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
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
function Qf(e) {
  yo.length === 0 && Jf(yu), yo.push(e);
}
function Wa() {
  mo.length > 0 && mu(), yo.length > 0 && yu();
}
let ei = !1, di = !1, fi = null, ar = !1, Do = !1;
function Xa(e) {
  Do = e;
}
let go = [];
let tt = null, mn = !1;
function bn(e) {
  tt = e;
}
let je = null;
function Jn(e) {
  je = e;
}
let Nt = null;
function wu(e) {
  tt !== null && tt.f & ks && (Nt === null ? Nt = [e] : Nt.push(e));
}
let Et = null, Rt = 0, Gt = null;
function e1(e) {
  Gt = e;
}
let _u = 1, gi = 0, Fn = !1;
function xu() {
  return ++_u;
}
function Gr(e) {
  var d;
  var t = e.f;
  if ((t & _n) !== 0)
    return !0;
  if ((t & nr) !== 0) {
    var n = e.deps, r = (t & Ft) !== 0;
    if (n !== null) {
      var o, i, s = (t & ci) !== 0, a = r && je !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((d = i == null ? void 0 : i.reactions) != null && d.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ci), a && c !== null && (c.f & Ft) === 0 && (u.f ^= Ft);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Gr(
          /** @type {Derived} */
          i
        ) && uu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || je !== null && !Fn) && Qt(e, Tt);
  }
  return !1;
}
function t1(e, t) {
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
  if (n !== null && (ei = !0), t1(e, t), Za(t))
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
      ) : t === i && (n ? Qt(i, _n) : (i.f & Tt) !== 0 && Qt(i, nr), qi(
        /** @type {Effect} */
        i
      )));
    }
}
function Cu(e) {
  var h;
  var t = Et, n = Rt, r = Gt, o = tt, i = Fn, s = Nt, a = Ze, l = mn, u = e.f;
  Et = /** @type {null | Value[]} */
  null, Rt = 0, Gt = null, Fn = (u & Ft) !== 0 && (mn || !ar || tt === null), tt = (u & (In | pr)) === 0 ? e : null, Nt = null, ja(e.ctx), mn = !1, gi++, e.f |= ks;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (Et !== null) {
      var f;
      if (hi(e, Rt), d !== null && Rt > 0)
        for (d.length = Rt + Et.length, f = 0; f < Et.length; f++)
          d[Rt + f] = Et[f];
      else
        e.deps = d = Et;
      if (!Fn)
        for (f = Rt; f < d.length; f++)
          ((h = d[f]).reactions ?? (h.reactions = [])).push(e);
    } else d !== null && Rt < d.length && (hi(e, Rt), d.length = Rt);
    if (Yi() && Gt !== null && !mn && d !== null && (e.f & (un | nr | _n)) === 0)
      for (f = 0; f < /** @type {Source[]} */
      Gt.length; f++)
        bu(
          Gt[f],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (gi++, Gt !== null && (r === null ? r = Gt : r.push(.../** @type {Source[]} */
    Gt))), c;
  } finally {
    Et = t, Rt = n, Gt = r, tt = o, Fn = i, Nt = s, ja(a), mn = l, e.f ^= ks;
  }
}
function n1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Et === null || !Et.includes(t)) && (Qt(t, nr), (t.f & (Ft | ci)) === 0 && (t.f ^= ci), au(
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
      n1(e, n[r]);
}
function Bi(e) {
  var t = e.f;
  if ((t & Ii) === 0) {
    Qt(e, Tt);
    var n = je, r = Ze, o = ar;
    je = e, ar = !0;
    try {
      (t & ra) !== 0 ? Uf(e) : fu(e), du(e);
      var i = Cu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _u;
      var s = e.deps, a;
      Ya && yf && e.f & _n;
    } catch (l) {
      Ri(l, e, n, r || e.ctx);
    } finally {
      ar = o, je = n;
    }
  }
}
function r1() {
  try {
    Rf();
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
      t++ > 1e3 && r1();
      var n = go, r = n.length;
      go = [];
      for (var o = 0; o < r; o++) {
        var i = i1(n[o]);
        o1(i);
      }
      wo.clear();
    }
  } finally {
    di = !1, ar = e, fi = null;
  }
}
function o1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ii | Vn)) === 0)
        try {
          Gr(r) && (Bi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? hu(r) : r.fn = null));
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
function i1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (In | pr)) !== 0, i = o && (r & Tt) !== 0;
    if (!i && (r & Vn) === 0) {
      if ((r & tu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Tt;
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
    di = !0, ku(), Wa();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & un) !== 0;
  if (tt !== null && !mn) {
    if (!(Nt != null && Nt.includes(e))) {
      var r = tt.deps;
      e.rv < gi && (e.rv = gi, Et === null && r !== null && r[Rt] === e ? Rt++ : Et === null ? Et = [e] : (!Fn || !Et.includes(e)) && Et.push(e));
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
  e, Gr(o) && uu(o)), Do && wo.has(e) ? wo.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const s1 = -7169;
function Qt(e, t) {
  e.f = e.f & s1 | t;
}
function J(e) {
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
  return t || (n.equals = aa), Xr && Ze !== null && Ze.l !== null && ((r = Ze.l).s ?? (r.s = [])).push(n), n;
}
function U(e, t, n = !1) {
  tt !== null && !mn && Yi() && (tt.f & (un | ra)) !== 0 && !(Nt != null && Nt.includes(e)) && Wf();
  let r = n ? sn(t) : t;
  return Ps(e, r);
}
function Ps(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Do ? wo.set(e, t) : wo.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & _n) !== 0 && lu(
      /** @type {Derived} */
      e
    ), Qt(e, (e.f & Ft) === 0 ? Tt : nr)), e.wv = xu(), $u(e, _n), Yi() && je !== null && (je.f & Tt) !== 0 && (je.f & (In | pr)) === 0 && (Gt === null ? e1([e]) : Gt.push(e));
  }
  return t;
}
function Ka(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function $u(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Yi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & _n) === 0 && (!r && s === je || (Qt(s, t), (a & (Tt | Ft)) !== 0 && ((a & un) !== 0 ? $u(
        /** @type {Derived} */
        s,
        nr
      ) : qi(
        /** @type {Effect} */
        s
      ))));
    }
}
let Ze = null;
function ja(e) {
  Ze = e;
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
function a1(e) {
  return ca().has(e);
}
function he(e, t = !1, n) {
  var r = Ze = {
    p: Ze,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Xr && !t && (Ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ar(!1)
  }), la(() => {
    r.d = !0;
  });
}
function ve(e) {
  const t = Ze;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = je, r = tt;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Jn(i.effect), bn(i.reaction), Bt(i.fn);
        }
      } finally {
        Jn(n), bn(r);
      }
    }
    Ze = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yi() {
  return !Xr || Ze !== null && Ze.l === null;
}
function ca(e) {
  return Ze === null && Oi(), Ze.c ?? (Ze.c = new Map(l1(Ze) || void 0));
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
    e.autofocus = !0, Ho(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function w1(e) {
  De && /* @__PURE__ */ vt(e) !== null && ia(e);
}
let Ga = !1;
function _1() {
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
function x1(e) {
  var t = tt, n = je;
  bn(null), Jn(null);
  try {
    return e();
  } finally {
    bn(t), Jn(n);
  }
}
const Eu = /* @__PURE__ */ new Set(), Ns = /* @__PURE__ */ new Set();
function Su(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || lo.call(t, i), !i.cancelBubble)
      return x1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ho(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function nt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Su(e, t, n, i);
  (t === document.body || t === window || t === document) && la(() => {
    t.removeEventListener(e, s, i);
  });
}
function Ur(e) {
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
    var c = tt, d = je;
    bn(null), Jn(null);
    try {
      for (var f, h = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Mo(_)) {
              var [x, ...k] = _;
              x.apply(i, [e, ...k]);
            } else
              _.call(i, e);
        } catch (C) {
          f ? h.push(C) : f = C;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (f) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, bn(c), Jn(d);
    }
  }
}
function da(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Lt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Ql) !== 0, r = (t & Ef) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (De)
      return Lt(Ye, null), Ye;
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
      Lt(a, l);
    } else
      Lt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ql) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (De)
      return Lt(Ye, null), Ye;
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
function qe(e = "") {
  if (!De) {
    var t = On(e + "");
    return Lt(t, t), t;
  }
  var n = Ye;
  return n.nodeType !== 3 && (n.before(n = On()), Pt(n)), Lt(n, n), n;
}
function et() {
  if (De)
    return Lt(Ye, null), Ye;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Lt(t, n), e;
}
function D(e, t) {
  if (De) {
    je.nodes_end = Ye, xn();
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
function Pu(e, t) {
  return Nu(e, t);
}
function b1(e, t) {
  Es(), t.intro = t.intro ?? !1;
  const n = t.target, r = De, o = Ye;
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
    qt(!0), Pt(
      /** @type {Comment} */
      i
    ), xn();
    const s = Nu(e, { ...t, anchor: i });
    if (Ye === null || Ye.nodeType !== 8 || /** @type {Comment} */
    Ye.data !== ea)
      throw zi(), kr;
    return qt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === kr)
      return t.recover === !1 && Bf(), Es(), ia(n), qt(!1), Pu(e, t);
    throw s;
  } finally {
    qt(r), Pt(o);
  }
}
const _r = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Es();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var h = d[f];
      if (!a.has(h)) {
        a.add(h);
        var p = v1(h);
        t.addEventListener(h, lo, { passive: p });
        var _ = _r.get(h);
        _ === void 0 ? (document.addEventListener(h, lo, { passive: p }), _r.set(h, 1)) : _r.set(h, _ + 1);
      }
    }
  };
  l(ta(Eu)), Ns.add(l);
  var u = void 0, c = Gf(() => {
    var d = n ?? t.appendChild(On());
    return Un(() => {
      if (i) {
        he({});
        var f = (
          /** @type {ComponentContext} */
          Ze
        );
        f.c = i;
      }
      o && (r.$$events = o), De && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, De && (je.nodes_end = Ye), i && ve();
    }), () => {
      var p;
      for (var f of a) {
        t.removeEventListener(f, lo);
        var h = (
          /** @type {number} */
          _r.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, lo), _r.delete(f)) : _r.set(f, h);
      }
      Ns.delete(l), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return Ts.set(u, c), u;
}
let Ts = /* @__PURE__ */ new WeakMap();
function C1(e, t) {
  const n = Ts.get(e);
  return n ? (Ts.delete(e), n(t)) : Promise.resolve();
}
function ye(e, t, [n, r] = [0, 0]) {
  De && n === 0 && xn();
  var o = e, i = null, s = null, a = Vt, l = n > 0 ? Zr : 0, u = !1;
  const c = (f, h = !0) => {
    u = !0, d(h, f);
  }, d = (f, h) => {
    if (a === (a = f)) return;
    let p = !1;
    if (De && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Js ? r = 0 : x === Qs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = $s(), Pt(o), qt(!1), p = !0, r = -1);
    }
    a ? (i ? po(i) : h && (i = Un(() => h(o))), s && Vr(s, () => {
      s = null;
    })) : (s ? po(s) : h && (s = Un(() => h(o, [n + 1, r]))), i && Vr(i, () => {
      i = null;
    })), p && qt(!0);
  };
  jr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), De && (o = Ye);
}
function Lr(e, t) {
  return t;
}
function k1(e, t, n, r) {
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
  vu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Bn(e, c.prev, c.next)), cn(c.e, !a);
    }
  });
}
function Mt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ul) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = De ? Pt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(u)
    ) : u.appendChild(On());
  }
  De && xn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var h = n();
    return Mo(h) ? h : h == null ? [] : ta(h);
  });
  jr(() => {
    var h = g(f), p = h.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let _ = !1;
    if (De) {
      var x = (
        /** @type {Comment} */
        s.data === Qs
      );
      x !== (p === 0) && (s = $s(), Pt(s), qt(!1), _ = !0);
    }
    if (De) {
      for (var k = null, v, C = 0; C < p; C++) {
        if (Ye.nodeType === 8 && /** @type {Comment} */
        Ye.data === ea) {
          s = /** @type {Comment} */
          Ye, _ = !0, qt(!1);
          break;
        }
        var m = h[C], b = r(m, C);
        v = Tu(
          Ye,
          a,
          k,
          null,
          m,
          b,
          C,
          o,
          t,
          n
        ), a.items.set(b, v), k = v;
      }
      p > 0 && Pt($s());
    }
    De || $1(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? po(c) : c = Un(() => i(s)) : c !== null && Vr(c, () => {
      c = null;
    })), _ && qt(!0), g(f);
  }), De && (s = Ye);
}
function $1(e, t, n, r, o, i, s) {
  var S, $, P, N;
  var a = (o & _f) !== 0, l = (o & (Gs | Us)) !== 0, u = e.length, c = t.items, d = t.first, f = d, h, p = null, _, x = [], k = [], v, C, m, b;
  if (a)
    for (b = 0; b < u; b += 1)
      v = e[b], C = i(v, b), m = c.get(C), m !== void 0 && ((S = m.a) == null || S.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(m));
  for (b = 0; b < u; b += 1) {
    if (v = e[b], C = i(v, b), m = c.get(C), m === void 0) {
      var H = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      p = Tu(
        H,
        t,
        p,
        p === null ? t.first : p.next,
        v,
        C,
        b,
        r,
        o,
        s
      ), c.set(C, p), x = [], k = [], f = p.next;
      continue;
    }
    if (l && E1(m, v, b, o), (m.e.f & Vn) !== 0 && (po(m.e), a && (($ = m.a) == null || $.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(m))), m !== f) {
      if (h !== void 0 && h.has(m)) {
        if (x.length < k.length) {
          var E = k[0], V;
          p = E.prev;
          var O = x[0], A = x[x.length - 1];
          for (V = 0; V < x.length; V += 1)
            Ua(x[V], E, n);
          for (V = 0; V < k.length; V += 1)
            h.delete(k[V]);
          Bn(t, O.prev, A.next), Bn(t, p, O), Bn(t, A, E), f = E, p = A, b -= 1, x = [], k = [];
        } else
          h.delete(m), Ua(m, f, n), Bn(t, m.prev, m.next), Bn(t, m, p === null ? t.first : p.next), Bn(t, p, m), p = m;
        continue;
      }
      for (x = [], k = []; f !== null && f.k !== C; )
        (f.e.f & Vn) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(f), k.push(f), f = f.next;
      if (f === null)
        continue;
      m = f;
    }
    x.push(m), p = m, f = m.next;
  }
  if (f !== null || h !== void 0) {
    for (var R = h === void 0 ? [] : ta(h); f !== null; )
      (f.e.f & Vn) === 0 && R.push(f), f = f.next;
    var z = R.length;
    if (z > 0) {
      var I = (o & Ul) !== 0 && u === 0 ? n : null;
      if (a) {
        for (b = 0; b < z; b += 1)
          (P = R[b].a) == null || P.measure();
        for (b = 0; b < z; b += 1)
          (N = R[b].a) == null || N.fix();
      }
      k1(t, R, I, c);
    }
  }
  a && Ho(() => {
    var T;
    if (_ !== void 0)
      for (m of _)
        (T = m.a) == null || T.apply();
  }), je.first = t.first && t.first.e, je.last = p && p.e;
}
function E1(e, t, n, r) {
  (r & Gs) !== 0 && Ps(e.v, t), (r & Us) !== 0 ? Ps(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Gs) !== 0, d = (l & xf) === 0, f = c ? d ? /* @__PURE__ */ ae(o) : Ar(o) : o, h = (l & Us) === 0 ? s : Ar(s), p = {
    i: h,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Un(() => a(e, f, h, u), De), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
  ke(() => {
    var a = (
      /** @type {Effect} */
      je
    );
    if (s === (s = t() ?? "")) {
      De && xn();
      return;
    }
    if (a.nodes_start !== null && (gu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (De) {
        Ye.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw zi(), kr;
        Lt(Ye, u), i = Pt(l);
        return;
      }
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = da(c);
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
function bt(e, t, n, r, o) {
  var a;
  De && xn();
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
function dr(e, t, ...n) {
  var r = e, o = pt, i;
  jr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Un(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), De && (r = Ye);
}
function Mu(e, t, n) {
  De && xn();
  var r = e, o, i;
  jr(() => {
    o !== (o = t()) && (i && (Vr(i), i = null), o && (i = Un(() => n(r, o))));
  }, Zr), De && (r = Ye);
}
function P1(e, t, n, r, o, i) {
  let s = De;
  De && xn();
  var a, l, u = null;
  De && Ye.nodeType === 1 && (u = /** @type {Element} */
  Ye, xn());
  var c = (
    /** @type {TemplateNode} */
    De ? Ye : e
  ), d;
  jr(() => {
    const f = t() || null;
    var h = f === "svg" ? Pf : null;
    f !== a && (d && (f === null ? Vr(d, () => {
      d = null, l = null;
    }) : f === l ? po(d) : cn(d)), f && f !== l && (d = Un(() => {
      if (u = De ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Lt(u, u), r) {
        De && m1(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          De ? /* @__PURE__ */ vt(u) : u.appendChild(On())
        );
        De && (p === null ? qt(!1) : Pt(p)), r(u, p);
      }
      je.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, Zr), s && (qt(!0), Pt(c));
}
function Qe(e, t) {
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
  Bt(() => {
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
function N1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hu(e)) && (r && (r += " "), r += t);
  return r;
}
function gn(e) {
  return typeof e == "object" ? N1(e) : e ?? "";
}
const Ja = [...` 	
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
function M1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(us)), o && l.push(...Object.keys(o).map(us));
      var u = 0, c = -1;
      const _ = e.length;
      for (var d = 0; d < _; d++) {
        var f = e[d];
        if (a ? f === "/" && e[d - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === _ - 1) {
            if (c !== -1) {
              var h = us(e.substring(u, c).trim());
              if (!l.includes(h)) {
                f !== ";" && d++;
                var p = e.substring(u, d).trim();
                n += " " + p + ";";
              }
            }
            u = d + 1, c = -1;
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
  if (De || s !== n || s === void 0) {
    var a = T1(n, r, i);
    (!De || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  if (De || o !== t) {
    var i = M1(t, r);
    (!De || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (cs(e, n == null ? void 0 : n[0], r[0]), cs(e, n == null ? void 0 : n[1], r[1], "important")) : cs(e, n, r));
  return r;
}
const io = Symbol("class"), ir = Symbol("style"), Du = Symbol("is custom element"), Vu = Symbol("is html");
function Zn(e) {
  if (De) {
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
    e.__on_r = n, Qf(n), _1();
  }
}
function ti(e, t) {
  var n = Fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function H1(e, t) {
  var n = Fi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function D1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ce(e, t, n, r) {
  var o = Fi(e);
  De && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Of] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xt(e, t, n, r, o = !1) {
  var i = Fi(e), s = i[Du], a = !i[Vu];
  let l = De && s;
  l && qt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = gn(n.class) : (r || n[io]) && (n.class = null), n[ir] && (n.style ?? (n.style = null));
  var f = Au(e);
  for (const C in n) {
    let m = n[C];
    if (c && C === "value" && m == null) {
      e.value = e.__value = "", u[C] = m;
      continue;
    }
    if (C === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, h, m, r, t == null ? void 0 : t[io], n[io]), u[C] = m, u[io] = n[io];
      continue;
    }
    if (C === "style") {
      gt(e, m, t == null ? void 0 : t[ir], n[ir]), u[C] = m, u[ir] = n[ir];
      continue;
    }
    var p = u[C];
    if (m !== p) {
      u[C] = m;
      var _ = C[0] + C[1];
      if (_ !== "$$")
        if (_ === "on") {
          const b = {}, H = "$$" + C;
          let E = C.slice(2);
          var x = d1(E);
          if (u1(E) && (E = E.slice(0, -7), b.capture = !0), !x && p) {
            if (m != null) continue;
            e.removeEventListener(E, u[H], b), u[H] = null;
          }
          if (m != null)
            if (x)
              e[`__${E}`] = m, Ur([E]);
            else {
              let V = function(O) {
                u[C].call(this, O);
              };
              u[H] = Su(E, e, V, b);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (C === "style")
          Ce(e, C, m);
        else if (C === "autofocus")
          y1(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!s && (C === "__value" || C === "value" && m != null))
          e.value = e.__value = m;
        else if (C === "selected" && c)
          D1(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var k = C;
          a || (k = g1(k));
          var v = k === "defaultValue" || k === "defaultChecked";
          if (m == null && !s && !v)
            if (i[C] = null, k === "value" || k === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (k === "value") {
                let E = b.defaultValue;
                b.removeAttribute(k), b.defaultValue = E, b.value = b.__value = H ? E : null;
              } else {
                let E = b.defaultChecked;
                b.removeAttribute(k), b.defaultChecked = E, b.checked = H ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else v || f.includes(k) && (s || typeof m != "string") ? e[k] = m : typeof m != "function" && Ce(e, k, m);
        }
    }
  }
  return l && qt(!0), u;
}
function Fi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Du]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === Sf
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
var Yn, Hr, To, Vi, Ou;
const Ai = class Ai {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    or(this, Vi);
    /** */
    or(this, Yn, /* @__PURE__ */ new WeakMap());
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
    var r = ct(this, Yn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ct(this, Yn).set(t, r), qa(this, Vi, Ou).call(this).observe(t, ct(this, To)), () => {
      var o = ct(this, Yn).get(t);
      o.delete(n), o.size === 0 && (ct(this, Yn).delete(t), ct(this, Hr).unobserve(t));
    };
  }
};
Yn = new WeakMap(), Hr = new WeakMap(), To = new WeakMap(), Vi = new WeakSet(), Ou = function() {
  return ct(this, Hr) ?? ro(this, Hr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ai.entries.set(n.target, n);
        for (var r of ct(this, Yn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
$t(Ai, "entries", /* @__PURE__ */ new WeakMap());
let Ms = Ai;
var V1 = /* @__PURE__ */ new Ms({
  box: "border-box"
});
function tl(e, t, n) {
  var r = V1.observe(e, () => n(e[t]));
  Bt(() => (Cn(() => n(e[t])), r));
}
function nl(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function kn(e = {}, t, n, r) {
  return Bt(() => {
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
    Ze
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
  n.b.length && Kf(() => {
    rl(t, r), vo(n.b);
  }), ln(() => {
    const o = Cn(() => n.m.map(Hf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && ln(() => {
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
function tn(e) {
  Ze === null && Oi(), Xr && Ze.l !== null ? O1(Ze).m.push(e) : ln(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ga(e) {
  Ze === null && Oi(), tn(() => () => Cn(e));
}
function A1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Wi() {
  const e = Ze;
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
      const s = Mo(o) ? o.slice() : [o], a = A1(
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
function O1(e) {
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
function jt(e, t) {
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
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return jt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, d = pt;
    const f = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : d = typeof p == "function" ? p : pt;
    }, h = o.map(
      (p, _) => ha(
        p,
        (x) => {
          u[_] = x, c &= ~(1 << _), l && f();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return l = !0, f(), function() {
      vo(h), d(), l = !1;
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
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Hs in n ? K(e) : g(r.source);
}
function L1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pt), e;
}
function vi(e, t) {
  return e.set(t), t;
}
function rt() {
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
function I1(e) {
  var t = Zo;
  try {
    return Zo = !1, [e(), Zo];
  } finally {
    Zo = t;
  }
}
const z1 = {
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
    z1
  );
}
const R1 = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Ar(0) }, R1);
}
const B1 = {
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
function ut(...e) {
  return new Proxy({ props: e }, B1);
}
function ol(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var H;
  var o = (n & bf) !== 0, i = !Xr || (n & Cf) !== 0, s = (n & kf) !== 0, a = (n & $f) !== 0, l = !1, u;
  s ? [u, l] = I1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Xn in e || oa in e, d = s && (((H = Dn(e, t)) == null ? void 0 : H.set) ?? (c && t in e && ((E) => e[t] = E))) || void 0, f = (
    /** @type {V} */
    r
  ), h = !0, p = !1, _ = () => (p = !0, h && (h = !1, a ? f = Cn(
    /** @type {() => V} */
    r
  ) : f = /** @type {V} */
  r), f);
  u === void 0 && r !== void 0 && (d && i && qf(), u = _(), d && d(u));
  var x;
  if (i)
    x = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? _() : (h = !0, p = !1, E);
    };
  else {
    var k = (o ? Dr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Vf, x = () => {
      var E = g(k);
      return E !== void 0 && (f = /** @type {V} */
      void 0), E === void 0 ? f : E;
    };
  }
  if ((n & Jl) === 0)
    return x;
  if (d) {
    var v = e.$$legacy;
    return function(E, V) {
      return arguments.length > 0 ? ((!i || !V || v || l) && d(V ? x() : E), E) : x();
    };
  }
  var C = !1, m = /* @__PURE__ */ ae(u), b = /* @__PURE__ */ Dr(() => {
    var E = x(), V = g(m);
    return C ? (C = !1, V) : m.v = E;
  });
  return s && g(b), o || (b.equals = aa), function(E, V) {
    if (arguments.length > 0) {
      const O = V ? g(b) : i && s ? sn(E) : E;
      if (!b.equals(O)) {
        if (C = !0, U(m, O), p && f !== void 0 && (f = O), ol(b))
          return E;
        Cn(() => g(b));
      }
      return E;
    }
    return ol(b) ? b.v : g(b);
  };
}
function q1(e) {
  return new Y1(e);
}
var Tn, Ut;
class Y1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    or(this, Tn);
    /** @type {Record<string, any>} */
    or(this, Ut);
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
          return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    ro(this, Ut, (t.hydrate ? b1 : Pu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), ro(this, Tn, o.$$events);
    for (const s of Object.keys(ct(this, Ut)))
      s === "$set" || s === "$destroy" || s === "$on" || ho(this, s, {
        get() {
          return ct(this, Ut)[s];
        },
        /** @param {any} value */
        set(a) {
          ct(this, Ut)[s] = a;
        },
        enumerable: !0
      });
    ct(this, Ut).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, ct(this, Ut).$destroy = () => {
      C1(ct(this, Ut));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ct(this, Ut).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ct(this, Tn)[t] = ct(this, Tn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ct(this, Tn)[t].push(r), () => {
      ct(this, Tn)[t] = ct(this, Tn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ct(this, Ut).$destroy();
  }
}
Tn = new WeakMap(), Ut = new WeakMap();
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
      const n = {}, r = F1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = ni(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = q1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = jf(() => {
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
function F1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ce(e, t, n, r, o, i) {
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
        var d;
        l = ni(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (d = Dn(u, a)) == null ? void 0 : d.get;
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
var W1 = { value: () => {
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
function X1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ri.prototype = Xi.prototype = {
  constructor: ri,
  on: function(e, t) {
    var n = this._, r = X1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Z1(n[o], e.name))) return o;
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
function Z1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function il(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = W1, e = e.slice(0, r).concat(e.slice(r + 1));
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
function K1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ds && t.documentElement.namespaceURI === Ds ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function j1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Iu(e) {
  var t = Zi(e);
  return (t.local ? j1 : K1)(t);
}
function G1() {
}
function va(e) {
  return e == null ? G1 : function() {
    return this.querySelector(e);
  };
}
function U1(e) {
  typeof e != "function" && (e = va(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Zt(r, this._parents);
}
function J1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Q1() {
  return [];
}
function zu(e) {
  return e == null ? Q1 : function() {
    return this.querySelectorAll(e);
  };
}
function eg(e) {
  return function() {
    return J1(e.apply(this, arguments));
  };
}
function tg(e) {
  typeof e == "function" ? e = eg(e) : e = zu(e);
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
var ng = Array.prototype.find;
function rg(e) {
  return function() {
    return ng.call(this.children, e);
  };
}
function og() {
  return this.firstElementChild;
}
function ig(e) {
  return this.select(e == null ? og : rg(typeof e == "function" ? e : Bu(e)));
}
var sg = Array.prototype.filter;
function ag() {
  return Array.from(this.children);
}
function lg(e) {
  return function() {
    return sg.call(this.children, e);
  };
}
function ug(e) {
  return this.selectAll(e == null ? ag : lg(typeof e == "function" ? e : Bu(e)));
}
function cg(e) {
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Zt(r, this._parents);
}
function qu(e) {
  return new Array(e.length);
}
function dg() {
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
function fg(e) {
  return function() {
    return e;
  };
}
function gg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new pi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function hg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new pi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function vg(e) {
  return e.__data__;
}
function pg(e, t) {
  if (!arguments.length) return Array.from(this, vg);
  var n = t ? hg : gg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = fg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, h = mg(e.call(c, c && c.__data__, u, r)), p = h.length, _ = a[u] = new Array(p), x = s[u] = new Array(p), k = l[u] = new Array(f);
    n(c, d, _, x, k, h, t);
    for (var v = 0, C = 0, m, b; v < p; ++v)
      if (m = _[v]) {
        for (v >= C && (C = v + 1); !(b = x[C]) && ++C < p; ) ;
        m._next = b || null;
      }
  }
  return s = new Zt(s, r), s._enter = a, s._exit = l, s;
}
function mg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yg() {
  return new Zt(this._exit || this._groups.map(qu), this._parents);
}
function wg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function _g(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), h, p = 0; p < d; ++p)
      (h = u[p] || c[p]) && (f[p] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Zt(a, this._parents);
}
function xg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function bg(e) {
  e || (e = Cg);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Zt(o, this._parents).order();
}
function Cg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function kg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function $g() {
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
function Sg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Pg() {
  return !this.node();
}
function Ng(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Tg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Mg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Hg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Dg(e, t) {
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
function Og(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Mg : Tg : typeof t == "function" ? n.local ? Ag : Vg : n.local ? Dg : Hg)(n, t));
}
function Yu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ig(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function zg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Rg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? zg : Ig)(e, t, n ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || Yu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Bg(e) {
  return function() {
    delete this[e];
  };
}
function qg(e, t) {
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
function Fg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Bg : typeof t == "function" ? Yg : qg)(e, t)) : this.node()[e];
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
function Wg(e) {
  return function() {
    Xu(this, e);
  };
}
function Xg(e) {
  return function() {
    Zu(this, e);
  };
}
function Zg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xu : Zu)(this, e);
  };
}
function Kg(e, t) {
  var n = Fu(e + "");
  if (arguments.length < 2) {
    for (var r = pa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Zg : t ? Wg : Xg)(n, t));
}
function jg() {
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
function Jg(e) {
  return arguments.length ? this.each(e == null ? jg : (typeof e == "function" ? Ug : Gg)(e)) : this.node().textContent;
}
function Qg() {
  this.innerHTML = "";
}
function eh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function th(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function nh(e) {
  return arguments.length ? this.each(e == null ? Qg : (typeof e == "function" ? th : eh)(e)) : this.node().innerHTML;
}
function rh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function oh() {
  return this.each(rh);
}
function ih() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sh() {
  return this.each(ih);
}
function ah(e) {
  var t = typeof e == "function" ? e : Iu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function lh() {
  return null;
}
function uh(e, t) {
  var n = typeof e == "function" ? e : Iu(e), r = t == null ? lh : typeof t == "function" ? t : va(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ch() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function dh() {
  return this.each(ch);
}
function fh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hh(e) {
  return this.select(e ? gh : fh);
}
function vh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ph(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function mh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function yh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function wh(e, t, n) {
  return function() {
    var r = this.__on, o, i = ph(t);
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
function _h(e, t, n) {
  var r = mh(e + ""), o, i = r.length, s;
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
  for (a = t ? wh : yh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ku(e, t, n) {
  var r = Yu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function xh(e, t) {
  return function() {
    return Ku(this, e, t);
  };
}
function bh(e, t) {
  return function() {
    return Ku(this, e, t.apply(this, arguments));
  };
}
function Ch(e, t) {
  return this.each((typeof t == "function" ? bh : xh)(e, t));
}
function* kh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ju = [null];
function Zt(e, t) {
  this._groups = e, this._parents = t;
}
function Vo() {
  return new Zt([[document.documentElement]], ju);
}
function $h() {
  return this;
}
Zt.prototype = Vo.prototype = {
  constructor: Zt,
  select: U1,
  selectAll: tg,
  selectChild: ig,
  selectChildren: ug,
  filter: cg,
  data: pg,
  enter: dg,
  exit: yg,
  join: wg,
  merge: _g,
  selection: $h,
  order: xg,
  sort: bg,
  call: kg,
  nodes: $g,
  node: Eg,
  size: Sg,
  empty: Pg,
  each: Ng,
  attr: Og,
  style: Rg,
  property: Fg,
  classed: Kg,
  text: Jg,
  html: nh,
  raise: oh,
  lower: sh,
  append: ah,
  insert: uh,
  remove: dh,
  clone: hh,
  datum: vh,
  on: _h,
  dispatch: Ch,
  [Symbol.iterator]: kh
};
function Jt(e) {
  return typeof e == "string" ? new Zt([[document.querySelector(e)]], [document.documentElement]) : new Zt([[e]], ju);
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
const Sh = { passive: !1 }, _o = { capture: !0, passive: !1 };
function ds(e) {
  e.stopImmediatePropagation();
}
function $r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gu(e) {
  var t = e.document.documentElement, n = Jt(e).on("dragstart.drag", $r, _o);
  "onselectstart" in t ? n.on("selectstart.drag", $r, _o) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Uu(e, t) {
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
function Ph(e) {
  return !e.ctrlKey && !e.button;
}
function Nh() {
  return this.parentNode;
}
function Th(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Mh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Hh() {
  var e = Ph, t = Nh, n = Th, r = Mh, o = {}, i = Xi("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(m) {
    m.on("mousedown.drag", h).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, Sh).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(m, b) {
    if (!(c || !e.call(this, m, b))) {
      var H = C(this, t.call(this, m, b), m, b, "mouse");
      H && (Jt(m.view).on("mousemove.drag", p, _o).on("mouseup.drag", _, _o), Gu(m.view), ds(m), u = !1, a = m.clientX, l = m.clientY, H("start", m));
    }
  }
  function p(m) {
    if ($r(m), !u) {
      var b = m.clientX - a, H = m.clientY - l;
      u = b * b + H * H > d;
    }
    o.mouse("drag", m);
  }
  function _(m) {
    Jt(m.view).on("mousemove.drag mouseup.drag", null), Uu(m.view, u), $r(m), o.mouse("end", m);
  }
  function x(m, b) {
    if (e.call(this, m, b)) {
      var H = m.changedTouches, E = t.call(this, m, b), V = H.length, O, A;
      for (O = 0; O < V; ++O)
        (A = C(this, E, m, b, H[O].identifier, H[O])) && (ds(m), A("start", m, H[O]));
    }
  }
  function k(m) {
    var b = m.changedTouches, H = b.length, E, V;
    for (E = 0; E < H; ++E)
      (V = o[b[E].identifier]) && ($r(m), V("drag", m, b[E]));
  }
  function v(m) {
    var b = m.changedTouches, H = b.length, E, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < H; ++E)
      (V = o[b[E].identifier]) && (ds(m), V("end", m, b[E]));
  }
  function C(m, b, H, E, V, O) {
    var A = i.copy(), R = on(O || H, b), z, I, S;
    if ((S = n.call(m, new Vs("beforestart", {
      sourceEvent: H,
      target: f,
      identifier: V,
      active: s,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), E)) != null)
      return z = S.x - R[0] || 0, I = S.y - R[1] || 0, function $(P, N, T) {
        var M = R, L;
        switch (P) {
          case "start":
            o[V] = $, L = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            R = on(T || N, b), L = s;
            break;
        }
        A.call(
          P,
          m,
          new Vs(P, {
            sourceEvent: N,
            subject: S,
            target: f,
            identifier: V,
            active: L,
            x: R[0] + z,
            y: R[1] + I,
            dx: R[0] - M[0],
            dy: R[1] - M[1],
            dispatch: A
          }),
          E
        );
      };
  }
  return f.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Ko(!!m), f) : e;
  }, f.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Ko(m), f) : t;
  }, f.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Ko(m), f) : n;
  }, f.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Ko(!!m), f) : r;
  }, f.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? f : m;
  }, f.clickDistance = function(m) {
    return arguments.length ? (d = (m = +m) * m, f) : Math.sqrt(d);
  }, f;
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
var xo = 0.7, mi = 1 / xo, Er = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Dh = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`), Ah = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Oh = new RegExp(`^rgba\\(${Er},${Er},${Er},${bo}\\)$`), Lh = new RegExp(`^rgba\\(${yn},${yn},${yn},${bo}\\)$`), Ih = new RegExp(`^hsl\\(${bo},${yn},${yn}\\)$`), zh = new RegExp(`^hsla\\(${bo},${yn},${yn},${bo}\\)$`), al = {
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
  formatHex8: Rh,
  formatHsl: Bh,
  formatRgb: ul,
  toString: ul
});
function ll() {
  return this.rgb().formatHex();
}
function Rh() {
  return this.rgb().formatHex8();
}
function Bh() {
  return Qu(this).formatHsl();
}
function ul() {
  return this.rgb().formatRgb();
}
function Co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Dh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? cl(t) : n === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? jo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? jo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = Ah.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Oh.exec(e)) ? jo(t[1], t[2], t[3], t[4]) : (t = Lh.exec(e)) ? jo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ih.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, 1) : (t = zh.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, t[4]) : al.hasOwnProperty(e) ? cl(al[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function cl(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function jo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ot(e, t, n, r);
}
function qh(e) {
  return e instanceof Ao || (e = Co(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function As(e, t, n, r) {
  return arguments.length === 1 ? qh(e) : new Ot(e, t, n, r ?? 1);
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
  formatHex8: Yh,
  formatRgb: fl,
  toString: fl
}));
function dl() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function Yh() {
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
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new an(e, t, n, r);
}
function Qu(e) {
  if (e instanceof an) return new an(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ao || (e = Co(e)), !e) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new an(s, a, l, e.opacity);
}
function Fh(e, t, n, r) {
  return arguments.length === 1 ? Qu(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ma(an, Fh, Ju(Ao, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new an(this.h, this.s, this.l * e, this.opacity);
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
    return new an(hl(this.h), Go(this.s), Go(this.l), yi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hl(this.h)}, ${Go(this.s) * 100}%, ${Go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ec = (e) => () => e;
function Wh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Xh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Zh(e) {
  return (e = +e) == 1 ? tc : function(t, n) {
    return n - t ? Xh(t, n, e) : ec(isNaN(t) ? n : t);
  };
}
function tc(e, t) {
  var n = t - e;
  return n ? Wh(e, n) : ec(isNaN(e) ? t : e);
}
const vl = function e(t) {
  var n = Zh(t);
  function r(o, i) {
    var s = n((o = As(o)).r, (i = As(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = tc(o.opacity, i.opacity);
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
function Kh(e) {
  return function() {
    return e;
  };
}
function jh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Gh(e, t) {
  var n = Os.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Os.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qn(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? jh(l[0].x) : Kh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
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
var Uo;
function Uh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ls : nc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Jh(e) {
  return e == null || (Uo || (Uo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Uo.setAttribute("transform", e), !(e = Uo.transform.baseVal.consolidate())) ? Ls : (e = e.matrix, nc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function rc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var _ = h.push("translate(", null, t, null, n);
      p.push({ i: _ - 4, x: qn(u, d) }, { i: _ - 2, x: qn(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: qn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function a(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: qn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var _ = h.push(o(h) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: qn(u, d) }, { i: _ - 2, x: qn(c, f) });
    } else (d !== 1 || f !== 1) && h.push(o(h) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), s(u.rotate, c.rotate, d, f), a(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(h) {
      for (var p = -1, _ = f.length, x; ++p < _; ) d[(x = f[p]).i] = x.x(h);
      return d.join("");
    };
  };
}
var Qh = rc(Uh, "px, ", "px)", "deg)"), ev = rc(Jh, ", ", ")", ")"), tv = 1e-12;
function ml(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function nv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function rv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ov = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], h = c - a, p = d - l, _ = h * h + p * p, x, k;
    if (_ < tv)
      k = Math.log(f / u) / t, x = function(E) {
        return [
          a + E * h,
          l + E * p,
          u * Math.exp(t * E * k)
        ];
      };
    else {
      var v = Math.sqrt(_), C = (f * f - u * u + r * _) / (2 * u * n * v), m = (f * f - u * u - r * _) / (2 * f * n * v), b = Math.log(Math.sqrt(C * C + 1) - C), H = Math.log(Math.sqrt(m * m + 1) - m);
      k = (H - b) / t, x = function(E) {
        var V = E * k, O = ml(b), A = u / (n * v) * (O * rv(t * V + b) - nv(b));
        return [
          a + A * h,
          l + A * p,
          u * O / ml(t * V + b)
        ];
      };
    }
    return x.duration = k * 1e3 * t / Math.SQRT2, x;
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
  return fr || (ic(iv), fr = ko.now() + Ki);
}
function iv() {
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
function sv() {
  ya(), ++zr;
  for (var e = wi, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function yl() {
  fr = (_i = ko.now()) + Ki, zr = uo = 0;
  try {
    sv();
  } finally {
    zr = 0, lv(), fr = 0;
  }
}
function av() {
  var e = ko.now(), t = e - _i;
  t > oc && (Ki -= t, _i = e);
}
function lv() {
  for (var e, t = wi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : wi = n);
  co = e, Is(r);
}
function Is(e) {
  if (!zr) {
    uo && (uo = clearTimeout(uo));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (uo = setTimeout(yl, e - ko.now() - Ki)), so && (so = clearInterval(so))) : (so || (_i = ko.now(), so = setInterval(av, oc)), zr = 1, ic(yl));
  }
}
function wl(e, t, n) {
  var r = new xi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var uv = Xi("start", "end", "cancel", "interrupt"), cv = [], ac = 0, _l = 1, zs = 2, oi = 3, xl = 4, Rs = 5, ii = 6;
function ji(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  dv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: uv,
    tween: cv,
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
function dv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = sc(i, 0, n.time);
  function i(u) {
    n.state = _l, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, f, h;
    if (n.state !== _l) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === oi) return wl(s);
        h.state === xl ? (h.state = ii, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ii, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (wl(function() {
      n.state === oi && (n.state = xl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = zs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === zs) {
      for (n.state = oi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Rs, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
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
function fv(e) {
  return this.each(function() {
    si(this, e);
  });
}
function gv(e, t) {
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
function hv(e, t, n) {
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
function vv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = hn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? gv : hv)(n, e, t));
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
  return (typeof t == "number" ? qn : t instanceof Co ? vl : (n = Co(t)) ? (t = n, vl) : Gh)(e, t);
}
function pv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function mv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function yv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function wv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function _v(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function xv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function bv(e, t) {
  var n = Zi(e), r = n === "transform" ? ev : lc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? xv : _v)(n, r, _a(this, "attr." + e, t)) : t == null ? (n.local ? mv : pv)(n) : (n.local ? wv : yv)(n, r, t));
}
function Cv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function kv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function $v(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && kv(e, i)), n;
  }
  return o._value = t, o;
}
function Ev(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Cv(e, i)), n;
  }
  return o._value = t, o;
}
function Sv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? $v : Ev)(r, t));
}
function Pv(e, t) {
  return function() {
    wa(this, e).delay = +t.apply(this, arguments);
  };
}
function Nv(e, t) {
  return t = +t, function() {
    wa(this, e).delay = t;
  };
}
function Tv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Pv : Nv)(t, e)) : hn(this.node(), t).delay;
}
function Mv(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Hv(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Dv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Mv : Hv)(t, e)) : hn(this.node(), t).duration;
}
function Vv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Av(e) {
  var t = this._id;
  return arguments.length ? this.each(Vv(t, e)) : hn(this.node(), t).ease;
}
function Ov(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Lv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Ov(this._id, e));
}
function Iv(e) {
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function zv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, h = 0; h < c; ++h)
      (f = l[h] || u[h]) && (d[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ln(s, this._parents, this._name, this._id);
}
function Rv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Bv(e, t, n) {
  var r, o, i = Rv(t) ? wa : Sn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function qv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? hn(this.node(), n).on.on(e) : this.each(Bv(n, e, t));
}
function Yv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Fv() {
  return this.on("end.remove", Yv(this._id));
}
function Wv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = va(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, ji(u[f], t, n, f, u, hn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), h, p = hn(c, n), _ = 0, x = f.length; _ < x; ++_)
          (h = f[_]) && ji(h, t, n, _, f, p);
        i.push(f), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Zv = Vo.prototype.constructor;
function Kv() {
  return new Zv(this._groups, this._parents);
}
function jv(e, t) {
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
function Gv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ir(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Uv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ir(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Jv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? a || (a = uc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Qv(e, t, n) {
  var r = (e += "") == "transform" ? Qh : lc;
  return t == null ? this.styleTween(e, jv(e, r)).on("end.style." + e, uc(e)) : typeof t == "function" ? this.styleTween(e, Uv(e, r, _a(this, "style." + e, t))).each(Jv(this._id, e)) : this.styleTween(e, Gv(e, r, t), n).on("end.style." + e, null);
}
function e0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function t0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && e0(e, s, n)), r;
  }
  return i._value = t, i;
}
function n0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, t0(e, t, n ?? ""));
}
function r0(e) {
  return function() {
    this.textContent = e;
  };
}
function o0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function i0(e) {
  return this.tween("text", typeof e == "function" ? o0(_a(this, "text", e)) : r0(e == null ? "" : e + ""));
}
function s0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function a0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && s0(o)), t;
  }
  return r._value = e, r;
}
function l0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, a0(e));
}
function u0() {
  for (var e = this._name, t = this._id, n = cc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = hn(l, t);
        ji(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
}
function c0() {
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
var d0 = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function cc() {
  return ++d0;
}
var Nn = Vo.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Wv,
  selectAll: Xv,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: Iv,
  merge: zv,
  selection: Kv,
  transition: u0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: qv,
  attr: bv,
  attrTween: Sv,
  style: Qv,
  styleTween: n0,
  text: i0,
  textTween: l0,
  remove: Fv,
  tween: vv,
  delay: Tv,
  duration: Dv,
  ease: Av,
  easeVarying: Lv,
  end: c0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function f0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var g0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: f0
};
function h0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function v0(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = cc(), (n = g0).time = ya(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ji(l, e, t, u, s, n || h0(l, t));
  return new Ln(r, this._parents, e, t);
}
Vo.prototype.interrupt = fv;
Vo.prototype.transition = v0;
const Jo = (e) => () => e;
function p0(e, {
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
dc.prototype = Mn.prototype;
function dc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Gi;
  return e.__zoom;
}
function hs(e) {
  e.stopImmediatePropagation();
}
function ao(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function m0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function y0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function bl() {
  return this.__zoom || Gi;
}
function w0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function _0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function x0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function fc() {
  var e = m0, t = y0, n = x0, r = w0, o = _0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = ov, u = Xi("start", "zoom", "end"), c, d, f, h = 500, p = 150, _ = 0, x = 10;
  function k(S) {
    S.property("__zoom", bl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, $, P, N) {
    var T = S.selection ? S.selection() : S;
    T.property("__zoom", bl), S !== T ? b(S, $, P, N) : T.interrupt().each(function() {
      H(this, arguments).event(N).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, k.scaleBy = function(S, $, P, N) {
    k.scaleTo(S, function() {
      var T = this.__zoom.k, M = typeof $ == "function" ? $.apply(this, arguments) : $;
      return T * M;
    }, P, N);
  }, k.scaleTo = function(S, $, P, N) {
    k.transform(S, function() {
      var T = t.apply(this, arguments), M = this.__zoom, L = P == null ? m(T) : typeof P == "function" ? P.apply(this, arguments) : P, q = M.invert(L), X = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(C(v(M, X), L, q), T, s);
    }, P, N);
  }, k.translateBy = function(S, $, P, N) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, N);
  }, k.translateTo = function(S, $, P, N, T) {
    k.transform(S, function() {
      var M = t.apply(this, arguments), L = this.__zoom, q = N == null ? m(M) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Gi.translate(q[0], q[1]).scale(L.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), M, s);
    }, N, T);
  };
  function v(S, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === S.k ? S : new Mn($, S.x, S.y);
  }
  function C(S, $, P) {
    var N = $[0] - P[0] * S.k, T = $[1] - P[1] * S.k;
    return N === S.x && T === S.y ? S : new Mn(S.k, N, T);
  }
  function m(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function b(S, $, P, N) {
    S.on("start.zoom", function() {
      H(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, M = arguments, L = H(T, M).event(N), q = t.apply(T, M), X = P == null ? m(q) : typeof P == "function" ? P.apply(T, M) : P, Z = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), te = T.__zoom, j = typeof $ == "function" ? $.apply(T, M) : $, ue = l(te.invert(X).concat(Z / te.k), j.invert(X).concat(Z / j.k));
      return function(ge) {
        if (ge === 1) ge = j;
        else {
          var _e = ue(ge), ie = Z / _e[2];
          ge = new Mn(ie, X[0] - _e[0] * ie, X[1] - _e[1] * ie);
        }
        L.zoom(null, ge);
      };
    });
  }
  function H(S, $, P) {
    return !P && S.__zooming || new E(S, $);
  }
  function E(S, $) {
    this.that = S, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, $), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, $) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var $ = Jt(this.that).datum();
      u.call(
        S,
        this.that,
        new p0(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        $
      );
    }
  };
  function V(S, ...$) {
    if (!e.apply(this, arguments)) return;
    var P = H(this, $).event(S), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), M = on(S);
    if (P.wheel)
      (P.mouse[0][0] !== M[0] || P.mouse[0][1] !== M[1]) && (P.mouse[1] = N.invert(P.mouse[0] = M)), clearTimeout(P.wheel);
    else {
      if (N.k === T) return;
      P.mouse = [M, N.invert(M)], si(this), P.start();
    }
    ao(S), P.wheel = setTimeout(L, p), P.zoom("mouse", n(C(v(N, T), P.mouse[0], P.mouse[1]), P.extent, s));
    function L() {
      P.wheel = null, P.end();
    }
  }
  function O(S, ...$) {
    if (f || !e.apply(this, arguments)) return;
    var P = S.currentTarget, N = H(this, $, !0).event(S), T = Jt(S.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), M = on(S, P), L = S.clientX, q = S.clientY;
    Gu(S.view), hs(S), N.mouse = [M, this.__zoom.invert(M)], si(this), N.start();
    function X(te) {
      if (ao(te), !N.moved) {
        var j = te.clientX - L, ue = te.clientY - q;
        N.moved = j * j + ue * ue > _;
      }
      N.event(te).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = on(te, P), N.mouse[1]), N.extent, s));
    }
    function Z(te) {
      T.on("mousemove.zoom mouseup.zoom", null), Uu(te.view, N.moved), ao(te), N.event(te).end();
    }
  }
  function A(S, ...$) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, N = on(S.changedTouches ? S.changedTouches[0] : S, this), T = P.invert(N), M = P.k * (S.shiftKey ? 0.5 : 2), L = n(C(v(P, M), N, T), t.apply(this, $), s);
      ao(S), a > 0 ? Jt(this).transition().duration(a).call(b, L, N, S) : Jt(this).call(k.transform, L, N, S);
    }
  }
  function R(S, ...$) {
    if (e.apply(this, arguments)) {
      var P = S.touches, N = P.length, T = H(this, $, S.changedTouches.length === N).event(S), M, L, q, X;
      for (hs(S), L = 0; L < N; ++L)
        q = P[L], X = on(q, this), X = [X, this.__zoom.invert(X), q.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== X[2] && (T.touch1 = X, T.taps = 0) : (T.touch0 = X, M = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), M && (T.taps < 2 && (d = X[0], c = setTimeout(function() {
        c = null;
      }, h)), si(this), T.start());
    }
  }
  function z(S, ...$) {
    if (this.__zooming) {
      var P = H(this, $).event(S), N = S.changedTouches, T = N.length, M, L, q, X;
      for (ao(S), M = 0; M < T; ++M)
        L = N[M], q = on(L, this), P.touch0 && P.touch0[2] === L.identifier ? P.touch0[0] = q : P.touch1 && P.touch1[2] === L.identifier && (P.touch1[0] = q);
      if (L = P.that.__zoom, P.touch1) {
        var Z = P.touch0[0], te = P.touch0[1], j = P.touch1[0], ue = P.touch1[1], ge = (ge = j[0] - Z[0]) * ge + (ge = j[1] - Z[1]) * ge, _e = (_e = ue[0] - te[0]) * _e + (_e = ue[1] - te[1]) * _e;
        L = v(L, Math.sqrt(ge / _e)), q = [(Z[0] + j[0]) / 2, (Z[1] + j[1]) / 2], X = [(te[0] + ue[0]) / 2, (te[1] + ue[1]) / 2];
      } else if (P.touch0) q = P.touch0[0], X = P.touch0[1];
      else return;
      P.zoom("touch", n(C(L, q, X), P.extent, s));
    }
  }
  function I(S, ...$) {
    if (this.__zooming) {
      var P = H(this, $).event(S), N = S.changedTouches, T = N.length, M, L;
      for (hs(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), M = 0; M < T; ++M)
        L = N[M], P.touch0 && P.touch0[2] === L.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === L.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (L = on(L, this), Math.hypot(d[0] - L[0], d[1] - L[1]) < x)) {
        var q = Jt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Jo(+S), k) : r;
  }, k.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Jo(!!S), k) : e;
  }, k.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Jo(!!S), k) : o;
  }, k.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Jo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), k) : t;
  }, k.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(S) {
    return arguments.length ? (n = S, k) : n;
  }, k.duration = function(S) {
    return arguments.length ? (a = +S, k) : a;
  }, k.interpolate = function(S) {
    return arguments.length ? (l = S, k) : l;
  }, k.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? k : S;
  }, k.clickDistance = function(S) {
    return arguments.length ? (_ = (S = +S) * S, k) : Math.sqrt(_);
  }, k.tapDistance = function(S) {
    return arguments.length ? (x = +S, k) : x;
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
var jn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(jn || (jn = {}));
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
function b0(e, t) {
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
function C0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const k0 = (e) => "id" in e && "source" in e && "target" in e, $0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), xa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Oo = (e, t = [0, 0]) => {
  const { width: n, height: r } = rr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, E0 = (e, t = { nodeOrigin: [0, 0] }) => {
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
}, gc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Io(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (s && !d || f)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, _ = Eo(a, qr(u)), x = (h ?? 0) * (p ?? 0), k = i && _ > 0;
    (!u.internals.handleBounds || k || _ >= x || u.dragging) && l.push(u);
  }
  return l;
}, qs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function S0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function P0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = S0(e, s), l = Lo(a), u = Ca(l, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function N0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Rr.error005());
    else {
      const h = a.measured.width, p = a.measured.height;
      h && p && (d = [
        [l, u],
        [l + h, u + p]
      ]);
    }
  else a && Yr(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Yr(d) ? hr(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Rr.error015())), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * c[0],
      y: f.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function hc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), p = !h && f.parentId && s.find((_) => _.id === f.parentId);
    (h || p) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), c = qs(s, l);
  for (const f of l)
    a.has(f.id) && !c.find((p) => p.id === f.id) && c.push(f);
  if (!o)
    return {
      edges: c,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: c
  });
  return typeof d == "boolean" ? d ? { edges: c, nodes: s } : { edges: [], nodes: [] } : d;
}
const Br = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Br(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Br(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function vc(e, t, n) {
  const { width: r, height: o } = rr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const $l = (e, t, n) => e < t ? Br(Math.abs(e - t), 1, t) / t : e > n ? -Br(Math.abs(e - n), 1, t) / t : 0, pc = (e, t, n = 15, r = 40) => {
  const o = $l(e.x, r, t.width - r) * n, i = $l(e.y, r, t.height - r) * n;
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
}, mc = (e, t) => Ji(Ui(Ys(e), Ys(t))), Eo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), T0 = (e, t) => {
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
function M0(e, t, n) {
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
function H0(e, t, n, r, o, i) {
  const { x: s, y: a } = $i(e, [t, n, r]), { x: l, y: u } = $i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const Ca = (e, t, n, r, o, i) => {
  const s = M0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), c = Br(u, r, o), d = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - d * c, p = n / 2 - f * c, _ = H0(e, h, p, c, t, n), x = {
    left: Math.min(_.left - s.left, 0),
    top: Math.min(_.top - s.top, 0),
    right: Math.min(_.right - s.right, 0),
    bottom: Math.min(_.bottom - s.bottom, 0)
  };
  return {
    x: h - x.left + x.right,
    y: p - x.top + x.bottom,
    zoom: c
  };
}, Ei = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Yr(e) {
  return e !== void 0 && e !== "parent";
}
function rr(e) {
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
function D0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function V0() {
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
}), A0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, O0 = ["INPUT", "SELECT", "TEXTAREA"];
function L0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : O0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
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
function I0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
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
  }), [d, f, h, p] = I0({
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
    d,
    f,
    h,
    p
  ];
}
function bc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function z0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function R0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
const B0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, q0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Y0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return k0(e) ? n = { ...e } : n = {
    ...e,
    id: B0(e)
  }, q0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
}, F0 = ({ source: e, sourcePosition: t = Me.Bottom, target: n }) => t === Me.Left || t === Me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Tl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function W0({ source: e, sourcePosition: t = Me.Bottom, target: n, targetPosition: r = Me.Top, center: o, offset: i }) {
  const s = Nl[t], a = Nl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = F0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], p, _;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, C, m, b] = bc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    p = o.x ?? v, _ = o.y ?? C;
    const E = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], V = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    s[d] === f ? h = d === "x" ? E : V : h = d === "x" ? V : E;
  } else {
    const E = [{ x: l.x, y: u.y }], V = [{ x: u.x, y: l.y }];
    if (d === "x" ? h = s.x === f ? V : E : h = s.y === f ? E : V, t === r) {
      const I = Math.abs(e[d] - n[d]);
      if (I <= i) {
        const S = Math.min(i - 1, i - I);
        s[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * S : k[d] = (u[d] > n[d] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const I = d === "x" ? "y" : "x", S = s[d] === a[I], $ = l[I] > u[I], P = l[I] < u[I];
      (s[d] === 1 && (!S && $ || S && P) || s[d] !== 1 && (!S && P || S && $)) && (h = d === "x" ? E : V);
    }
    const O = { x: l.x + x.x, y: l.y + x.y }, A = { x: u.x + k.x, y: u.y + k.y }, R = Math.max(Math.abs(O.x - h[0].x), Math.abs(A.x - h[0].x)), z = Math.max(Math.abs(O.y - h[0].y), Math.abs(A.y - h[0].y));
    R >= z ? (p = (O.x + A.x) / 2, _ = h[0].y) : (p = h[0].x, _ = (O.y + A.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], p, _, m, b];
}
function X0(e, t, n, r) {
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
  const [c, d, f, h, p] = W0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((x, k, v) => {
    let C = "";
    return v > 0 && v < c.length - 1 ? C = X0(c[v - 1], k, c[v + 1], s) : C = `${v === 0 ? "M" : "L"}${k.x} ${k.y}`, x += C, x;
  }, ""), d, f, h, p];
}
function Ml(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Z0(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!Ml(t) || !Ml(n))
    return null;
  const r = t.internals.handleBounds || Hl(t.handles), o = n.internals.handleBounds || Hl(n.handles), i = Dl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Dl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === gr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (d = e.onError) == null || d.call(e, "008", Rr.error008(i ? "target" : "source", {
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
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? rr(e);
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
function K0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ws(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function j0(e, t, n, r, o) {
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
}, G0 = {
  ...ka,
  checkEquality: !0
};
function $a(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function U0(e, t, n) {
  const r = $a(ka, n);
  for (const o of e.values())
    if (o.parentId)
      Ea(o, e, t, r);
    else {
      const i = Oo(o, r.nodeOrigin), s = Yr(o.extent) ? o.extent : r.nodeExtent, a = hr(i, s, rr(o));
      o.internals.positionAbsolute = a;
    }
}
function Cc(e, t, n, r) {
  var l, u;
  const o = $a(G0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const f = Oo(c, o.nodeOrigin), h = Yr(c.extent) ? c.extent : o.nodeExtent, p = hr(f, h, rr(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: (l = c.measured) == null ? void 0 : l.width,
          height: (u = c.measured) == null ? void 0 : u.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: kc(c, a),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (i = !1), c.parentId && Ea(d, t, n, r);
  }
  return i;
}
function J0(e, t) {
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
  J0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Q0(e, l, i, s, u), { positionAbsolute: h } = e.internals, p = c !== h.x || d !== h.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : h,
      z: f
    }
  });
}
function kc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Q0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = rr(e), l = Oo(e, n), u = Yr(e.extent) ? hr(l, e.extent, a) : l;
  let c = hr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = vc(c, a, t));
  const d = kc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function ep(e, t, n, r = [0, 0]) {
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
    var C;
    const c = l.internals.positionAbsolute, d = rr(l), f = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(d.width, Math.round(a.width)), x = Math.max(d.height, Math.round(a.height)), k = (_ - d.width) * f[0], v = (x - d.height) * f[1];
    (h > 0 || p > 0 || k || v) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + k,
        y: l.position.y - p + v
      }
    }), (C = n.get(u)) == null || C.forEach((m) => {
      e.some((b) => b.id === m.id) || o.push({
        id: m.id,
        type: "position",
        position: {
          x: m.position.x + h,
          y: m.position.y + p
        }
      });
    })), (d.width < a.width || d.height < a.height || h || p) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: _ + (h ? f[0] * h - k : 0),
        height: x + (p ? f[1] * p - v : 0)
      }
    });
  }), o;
}
function tp(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
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
    const p = wc(f.nodeElement), _ = h.measured.width !== p.width || h.measured.height !== p.height;
    if (!!(p.width && p.height && (_ || !h.internals.handleBounds || f.force))) {
      const k = f.nodeElement.getBoundingClientRect(), v = Yr(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = vc(C, p, t.get(h.parentId)) : v && (C = hr(C, v, p));
      const m = {
        ...h,
        measured: p,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Sl("source", f.nodeElement, k, c, h.id),
            target: Sl("target", f.nodeElement, k, c, h.id)
          }
        }
      };
      t.set(h.id, m), h.parentId && Ea(m, t, n, { nodeOrigin: o }), a = !0, _ && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: p
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: qr(m, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = ep(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function np({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function rp(e, t) {
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
function op(e, t, n, r) {
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
    const d = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    d && o.push({
      ...d,
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
function ip({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function p({ noDragClassName: x, handleSelector: k, domNode: v, isSelectable: C, nodeId: m, nodeClickDistance: b = 0 }) {
    f = Jt(v);
    function H({ x: A, y: R }, z) {
      const { nodeLookup: I, nodeExtent: S, snapGrid: $, snapToGrid: P, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: M, onError: L, updateNodePositions: q } = t();
      i = { x: A, y: R };
      let X = !1, Z = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const te = Lo(a);
        Z = Ys(te);
      }
      for (const [te, j] of a) {
        if (!I.has(te))
          continue;
        let ue = { x: A - j.distance.x, y: R - j.distance.y };
        P && (ue = ba(ue, $));
        let ge = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !j.extent) {
          const { positionAbsolute: Ne } = j.internals, we = Ne.x - Z.x + S[0][0], $e = Ne.x + j.measured.width - Z.x2 + S[1][0], le = Ne.y - Z.y + S[0][1], se = Ne.y + j.measured.height - Z.y2 + S[1][1];
          ge = [
            [we, le],
            [$e, se]
          ];
        }
        const { position: _e, positionAbsolute: ie } = N0({
          nodeId: te,
          nextPosition: ue,
          nodeLookup: I,
          nodeExtent: ge,
          nodeOrigin: N,
          onError: L
        });
        X = X || j.position.x !== _e.x || j.position.y !== _e.y, j.position = _e, j.internals.positionAbsolute = ie;
      }
      if (X && (q(a, !0), z && (r || T || !m && M))) {
        const [te, j] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(z, a, te, j), T == null || T(z, te, j), m || M == null || M(z, j);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: A, panBy: R, autoPanSpeed: z, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, $] = pc(u, c, z);
      (S !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - S / A[2], i.y = (i.y ?? 0) - $ / A[2], await R({ x: S, y: $ }) && H(i, null)), s = requestAnimationFrame(E);
    }
    function V(A) {
      var X;
      const { nodeLookup: R, multiSelectionActive: z, nodesDraggable: I, transform: S, snapGrid: $, snapToGrid: P, selectNodesOnDrag: N, onNodeDragStart: T, onSelectionDragStart: M, unselectNodesAndEdges: L } = t();
      d = !0, (!N || !C) && !z && m && ((X = R.get(m)) != null && X.selected || L()), C && N && m && (e == null || e(m));
      const q = vs(A.sourceEvent, { transform: S, snapGrid: $, snapToGrid: P, containerBounds: c });
      if (i = q, a = op(R, I, q, m), a.size > 0 && (n || T || !m && M)) {
        const [Z, te] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: R
        });
        n == null || n(A.sourceEvent, a, Z, te), T == null || T(A.sourceEvent, Z, te), m || M == null || M(A.sourceEvent, te);
      }
    }
    const O = Hh().clickDistance(b).on("start", (A) => {
      const { domNode: R, nodeDragThreshold: z, transform: I, snapGrid: S, snapToGrid: $ } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, h = !1, z === 0 && V(A), i = vs(A.sourceEvent, { transform: I, snapGrid: S, snapToGrid: $, containerBounds: c }), u = An(A.sourceEvent, c);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: R, transform: z, snapGrid: I, snapToGrid: S, nodeDragThreshold: $, nodeLookup: P } = t(), N = vs(A.sourceEvent, { transform: z, snapGrid: I, snapToGrid: S, containerBounds: c });
      if ((A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !P.has(m)) && (h = !0), !h) {
        if (!l && R && d && (l = !0, E()), !d) {
          const T = N.xSnapped - (i.x ?? 0), M = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + M * M) > $ && V(A);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && d && (u = An(A.sourceEvent, c), H(N, A.sourceEvent));
      }
    }).on("end", (A) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: R, updateNodePositions: z, onNodeDragStop: I, onSelectionDragStop: S } = t();
        if (z(a, !1), o || I || !m && S) {
          const [$, P] = ps({
            nodeId: m,
            dragItems: a,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(A.sourceEvent, a, $, P), I == null || I(A.sourceEvent, $, P), m || S == null || S(A.sourceEvent, P);
        }
      }
    }).filter((A) => {
      const R = A.target;
      return !A.button && (!x || !Al(R, `.${x}`, v)) && (!k || Al(R, k, v));
    });
    f.call(O);
  }
  function _() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: _
  };
}
function sp(e, t, n) {
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
const ap = 250;
function lp(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = sp(e, n, t + ap);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = So(u, d, d.position, !0), p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      p > t || (p < i ? (o = [{ ...d, x: f, y: h }], i = p) : p === i && o.push({ ...d, x: f, y: h }));
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
  var u, c, d;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((d = s.internals.handleBounds) == null ? void 0 : d.target) ?? []], l = (n ? a == null ? void 0 : a.find((f) => f.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...So(s, l, l.position, !0) } : l;
}
function Pc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function up(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Nc = () => !0;
function cp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: p, onConnect: _, onConnectEnd: x, isValidConnection: k = Nc, onReconnectEnd: v, updateConnection: C, getTransform: m, getFromHandle: b, autoPanSpeed: H }) {
  const E = A0(e.target);
  let V = 0, O;
  const { x: A, y: R } = An(e), z = E == null ? void 0 : E.elementFromPoint(A, R), I = Pc(i, z), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !I)
    return;
  const $ = Sc(o, I, r, l, t);
  if (!$)
    return;
  let P = An(e, S), N = !1, T = null, M = !1, L = null;
  function q() {
    if (!c || !S)
      return;
    const [ie, Ne] = pc(P, S, H);
    f({ x: ie, y: Ne }), V = requestAnimationFrame(q);
  }
  const X = {
    ...$,
    nodeId: o,
    type: I,
    position: $.position
  }, Z = l.get(o), j = {
    inProgress: !0,
    isValid: null,
    from: So(Z, X, Me.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: Z,
    to: P,
    toHandle: null,
    toPosition: Cl[X.position],
    toNode: null
  };
  C(j);
  let ue = j;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function ge(ie) {
    if (!b() || !X) {
      _e(ie);
      return;
    }
    const Ne = m();
    P = An(ie, S), O = lp(Io(P, Ne, !1, [1, 1]), n, l, X), N || (q(), N = !0);
    const we = Tc(ie, {
      handle: O,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    L = we.handleDomNode, T = we.connection, M = up(!!O, we.isValid);
    const $e = {
      // from stays the same
      ...ue,
      isValid: M,
      to: O && M ? $i({ x: O.x, y: O.y }, Ne) : P,
      toHandle: we.toHandle,
      toPosition: M && we.toHandle ? we.toHandle.position : Cl[X.position],
      toNode: we.toHandle ? l.get(we.toHandle.nodeId) : null
    };
    M && O && ue.toHandle && $e.toHandle && ue.toHandle.type === $e.toHandle.type && ue.toHandle.nodeId === $e.toHandle.nodeId && ue.toHandle.id === $e.toHandle.id && ue.to.x === $e.to.x && ue.to.y === $e.to.y || (C($e), ue = $e);
  }
  function _e(ie) {
    (O || L) && T && M && (_ == null || _(T));
    const { inProgress: Ne, ...we } = ue, $e = {
      ...we,
      toPosition: ue.toHandle ? ue.toPosition : null
    };
    x == null || x(ie, $e), i && (v == null || v(ie, $e)), h(), cancelAnimationFrame(V), N = !1, M = !1, T = null, L = null, E.removeEventListener("mousemove", ge), E.removeEventListener("mouseup", _e), E.removeEventListener("touchmove", ge), E.removeEventListener("touchend", _e);
  }
  E.addEventListener("mousemove", ge), E.addEventListener("mouseup", _e), E.addEventListener("touchmove", ge), E.addEventListener("touchend", _e);
}
function Tc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Nc, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = An(e), _ = s.elementFromPoint(h, p), x = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const v = Pc(void 0, x), C = x.getAttribute("data-nodeid"), m = x.getAttribute("data-handleid"), b = x.classList.contains("connectable"), H = x.classList.contains("connectableend");
    if (!C || !v)
      return k;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? m : o,
      target: d ? r : C,
      targetHandle: d ? o : m
    };
    k.connection = E;
    const O = b && H && (n === gr.Strict ? d && v === "source" || !d && v === "target" : C !== r || m !== o);
    k.isValid = O && u(E), k.toHandle = Sc(C, v, m, c, n, !1);
  }
  return k;
}
const dp = {
  onPointerDown: cp,
  isValid: Tc
};
function fp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const p = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const b = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, H = m[2] * Math.pow(2, b);
      t.scaleTo(H);
    };
    let _ = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (_ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, k = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], H = [b[0] - _[0], b[1] - _[1]];
      _ = b;
      const E = r() * Math.max(m[2], Math.log(m[2])) * (h ? -1 : 1), V = {
        x: m[0] - H[0] * E,
        y: m[1] - H[1] * E
      }, O = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: m[2]
      }, O, a);
    }, v = fc().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? p : null);
    o.call(v, {});
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
const gp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ms = ({ x: e, y: t, zoom: n }) => Gi.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ys = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Hc = (e) => {
  const t = e.ctrlKey && Ei() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function hp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const x = on(c), k = Hc(c), v = d * Math.pow(2, k);
      r.scaleTo(n, v, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === jn.Vertical ? 0 : c.deltaX * f, p = o === jn.Horizontal ? 0 : c.deltaY * f;
    !Ei() && c.shiftKey && o !== jn.Vertical && (h = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Qi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function vp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function pp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Qi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function mp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Qi(i.transform)));
  };
}
function yp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && gp(e.prevViewport, s.transform))) {
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
function wp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var p;
    const d = e || t, f = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Cr(c, `${u}-flow__node`) || Cr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !d && !o && !i && !n || s || Cr(c, a) && c.type === "wheel" || Cr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((p = c.touches) == null ? void 0 : p.length) > 1)
      return c.preventDefault(), !1;
    if (!d && !o && !f && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function _p({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = fc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Jt(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: Br(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = h.on("wheel.zoom"), _ = h.on("dblclick.zoom");
  f.wheelDelta(Hc);
  function x(z, I) {
    return h ? new Promise((S) => {
      f == null || f.transform(ys(h, I == null ? void 0 : I.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: z, noPanClassName: I, onPaneContextMenu: S, userSelectionActive: $, panOnScroll: P, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: M, preventScrolling: L, zoomOnPinch: q, zoomOnScroll: X, zoomOnDoubleClick: Z, zoomActivationKeyPressed: te, lib: j, onTransformChange: ue }) {
    $ && !c.isZoomingOrPanning && v();
    const _e = P && !te && !$ ? hp({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: T,
      panOnScrollSpeed: M,
      zoomOnPinch: q,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : vp({
      noWheelClassName: z,
      preventScrolling: L,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", _e, { passive: !1 }), !$) {
      const Ne = pp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", Ne);
      const we = mp({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: ue
      });
      f.on("zoom", we);
      const $e = yp({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: P,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", $e);
    }
    const ie = wp({
      zoomActivationKeyPressed: te,
      panOnDrag: N,
      zoomOnScroll: X,
      panOnScroll: P,
      zoomOnDoubleClick: Z,
      zoomOnPinch: q,
      userSelectionActive: $,
      noPanClassName: I,
      noWheelClassName: z,
      lib: j
    });
    f.filter(ie), Z ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function C(z, I, S) {
    const $ = ms(z), P = f == null ? void 0 : f.constrain()($, I, S);
    return P && await x(P), new Promise((N) => N(P));
  }
  async function m(z, I) {
    const S = ms(z);
    return await x(S, I), new Promise(($) => $(S));
  }
  function b(z) {
    if (h) {
      const I = ms(z), S = h.property("__zoom");
      (S.k !== z.zoom || S.x !== z.x || S.y !== z.y) && (f == null || f.transform(h, I, null, { sync: !0 }));
    }
  }
  function H() {
    const z = h ? dc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function E(z, I) {
    return h ? new Promise((S) => {
      f == null || f.scaleTo(ys(h, I == null ? void 0 : I.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z, I) {
    return h ? new Promise((S) => {
      f == null || f.scaleBy(ys(h, I == null ? void 0 : I.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function O(z) {
    f == null || f.scaleExtent(z);
  }
  function A(z) {
    f == null || f.translateExtent(z);
  }
  function R(z) {
    const I = !Hn(z) || z < 0 ? 0 : z;
    f == null || f.clickDistance(I);
  }
  return {
    update: k,
    destroy: v,
    setViewport: m,
    setViewportConstrained: C,
    getViewport: H,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: O,
    setTranslateExtent: A,
    syncViewport: b,
    setClickDistance: R
  };
}
var Ol;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ol || (Ol = {}));
var xp = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Qn(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(Z, "$connectable", n), i = () => Q(_e, "$connectionRadius", n), s = () => Q(ue, "$domNode", n), a = () => Q(ge, "$nodeLookup", n), l = () => Q(j, "$connectionMode", n), u = () => Q(we, "$lib", n), c = () => Q(Se, "$autoPanOnConnect", n), d = () => Q(de, "$flowId", n), f = () => Q(Ne, "$isValidConnectionStore", n), h = () => Q(le, "$onedgecreate", n), p = () => Q(Re, "$onConnectAction", n), _ = () => Q(re, "$onConnectStartAction", n), x = () => Q(oe, "$onConnectEndAction", n), k = () => Q(ie, "$viewport", n), v = () => Q(He, "$connection", n), C = () => Q(Ve, "$edges", n), m = () => Q(Le, "$connectionLookup", n), b = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), V = /* @__PURE__ */ ae(), O = /* @__PURE__ */ ae(), A = /* @__PURE__ */ ae(), R = /* @__PURE__ */ ae(), z = /* @__PURE__ */ ae();
  let I = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), $ = w(t, "position", 28, () => Me.Top), P = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), M = w(t, "ondisconnect", 12, void 0), L = w(t, "isConnectable", 12, void 0), q = w(t, "class", 12, void 0);
  const X = cr("svelteflow__node_id"), Z = cr("svelteflow__node_connectable"), te = Ge(), {
    connectionMode: j,
    domNode: ue,
    nodeLookup: ge,
    connectionRadius: _e,
    viewport: ie,
    isValidConnection: Ne,
    lib: we,
    addEdge: $e,
    onedgecreate: le,
    panBy: se,
    cancelConnection: pe,
    updateConnection: G,
    autoPanOnConnect: Se,
    edges: Ve,
    connectionLookup: Le,
    onconnect: Re,
    onconnectstart: re,
    onconnectend: oe,
    flowId: de,
    connection: He
  } = te;
  function at(Oe) {
    const ot = _c(Oe);
    (ot && Oe.button === 0 || !ot) && dp.onPointerDown(Oe, {
      handleId: g(E),
      nodeId: X,
      isTarget: g(b),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: N() ?? f(),
      updateConnection: G,
      cancelConnection: pe,
      panBy: se,
      onConnect: (Fe) => {
        var it;
        const Be = h() ? h()(Fe) : Fe;
        Be && ($e(Be), (it = p()) == null || it(Fe));
      },
      onConnectStart: (Fe, Be) => {
        var it;
        (it = _()) == null || it(Fe, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (Fe, Be) => {
        var it;
        (it = x()) == null || it(Fe, Be);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let ee = /* @__PURE__ */ ae(null), Ie = /* @__PURE__ */ ae();
  me(() => J(S()), () => {
    U(b, S() === "target");
  }), me(
    () => (J(L()), o()),
    () => {
      U(H, L() !== void 0 ? L() : o());
    }
  ), me(() => J(I()), () => {
    U(E, I() || null);
  }), me(
    () => (J(T()), J(M()), C(), m(), J(S()), J(I())),
    () => {
      (T() || M()) && (C(), U(Ie, m().get(`${X}-${S()}${I() ? `-${I()}` : ""}`)));
    }
  ), me(
    () => (g(ee), g(Ie), J(M()), J(T())),
    () => {
      if (g(ee) && !b0(g(Ie), g(ee))) {
        const Oe = g(Ie) ?? /* @__PURE__ */ new Map();
        kl(g(ee), Oe, M()), kl(Oe, g(ee), T());
      }
      U(ee, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), me(() => v(), () => {
    U(V, !!v().fromHandle);
  }), me(
    () => (v(), J(S()), g(E)),
    () => {
      var Oe, ot, Fe;
      U(O, ((Oe = v().fromHandle) == null ? void 0 : Oe.nodeId) === X && ((ot = v().fromHandle) == null ? void 0 : ot.type) === S() && ((Fe = v().fromHandle) == null ? void 0 : Fe.id) === g(E));
    }
  ), me(
    () => (v(), J(S()), g(E)),
    () => {
      var Oe, ot, Fe;
      U(A, ((Oe = v().toHandle) == null ? void 0 : Oe.nodeId) === X && ((ot = v().toHandle) == null ? void 0 : ot.type) === S() && ((Fe = v().toHandle) == null ? void 0 : Fe.id) === g(E));
    }
  ), me(
    () => (l(), v(), J(S()), g(E)),
    () => {
      var Oe, ot, Fe;
      U(R, l() === gr.Strict ? ((Oe = v().fromHandle) == null ? void 0 : Oe.type) !== S() : X !== ((ot = v().fromHandle) == null ? void 0 : ot.nodeId) || g(E) !== ((Fe = v().fromHandle) == null ? void 0 : Fe.id));
    }
  ), me(() => (g(A), v()), () => {
    U(z, g(A) && v().isValid);
  }), wt(), ze();
  var fe = xp();
  Ce(fe, "data-nodeid", X);
  let ft;
  var nn = F(fe);
  bt(nn, t, "default", {}), Y(fe), ke(
    (Oe, ot) => {
      Ce(fe, "data-handleid", g(E)), Ce(fe, "data-handlepos", $()), Ce(fe, "data-id", `${d() ?? ""}-${X ?? ""}-${(I() || "") ?? ""}-${S() ?? ""}`), ft = Ct(fe, 1, Oe, null, ft, ot), gt(fe, P());
    },
    [
      () => gn(Ht([
        "svelte-flow__handle",
        `svelte-flow__handle-${$()}`,
        "nodrag",
        "nopan",
        $(),
        q()
      ])),
      () => ({
        valid: g(z),
        connectingto: g(A),
        connectingfrom: g(O),
        source: !g(b),
        target: g(b),
        connectablestart: g(H),
        connectableend: g(H),
        connectable: g(H),
        connectionindicator: g(H) && (!g(V) || g(R))
      })
    ],
    be
  ), nt("mousedown", fe, at), nt("touchstart", fe, at), D(e, fe);
  var pn = ve({
    get id() {
      return I();
    },
    set id(Oe) {
      I(Oe), y();
    },
    get type() {
      return S();
    },
    set type(Oe) {
      S(Oe), y();
    },
    get position() {
      return $();
    },
    set position(Oe) {
      $(Oe), y();
    },
    get style() {
      return P();
    },
    set style(Oe) {
      P(Oe), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Oe) {
      N(Oe), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Oe) {
      T(Oe), y();
    },
    get ondisconnect() {
      return M();
    },
    set ondisconnect(Oe) {
      M(Oe), y();
    },
    get isConnectable() {
      return L();
    },
    set isConnectable(Oe) {
      L(Oe), y();
    },
    get class() {
      return q();
    },
    set class(Oe) {
      q(Oe), y();
    }
  });
  return r(), pn;
}
ce(
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
var bp = /* @__PURE__ */ ne("<!> <!>", 1);
function Pi(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "targetPosition", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  ze();
  var s = bp(), a = xe(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  Qn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Me.Bottom);
  return Qn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), ke(() => {
    var f;
    return dt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, s), ve({
    get data() {
      return r();
    },
    set data(f) {
      r(f), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), y();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), y();
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
var Cp = /* @__PURE__ */ ne(" <!>", 1);
function Dc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  ze(), Ae();
  var i = Cp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Bottom);
  return Qn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return dt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ve({
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
ce(Dc, { data: {}, sourcePosition: {} }, [], [], !0);
var kp = /* @__PURE__ */ ne(" <!>", 1);
function Vc(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  lt(n, ["data", "targetPosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  ze(), Ae();
  var i = kp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  return Qn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return dt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ve({
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
ce(Vc, { data: {}, targetPosition: {} }, [], [], !0);
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
ce(Ac, {}, [], [], !0);
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
var $p = /* @__PURE__ */ ne("<div><!></div>");
function Oc(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(i, "$domNode", n), { domNode: i } = Ge();
  ze();
  var s = $p(), a = F(s);
  bt(a, t, "default", {}), Y(s), xt(s, (l, u) => Pr == null ? void 0 : Pr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, s), ve(), r();
}
ce(Oc, {}, ["default"], [], !0);
function Lc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ge();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Rr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var Ep = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ic(e, t) {
  he(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Lc(), s = cr("svelteflow__edge_id");
  return ze(), Oc(e, {
    children: (a, l) => {
      var u = Ep();
      let c;
      var d = F(u);
      bt(d, t, "default", {}), Y(u), ke(() => c = gt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), nt("keyup", u, () => {
      }), nt("click", u, () => {
        s && i(s);
      }), D(a, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
ce(Ic, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Sp = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Pp = /* @__PURE__ */ Pe('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  he(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  ze();
  var p = Pp(), _ = xe(p), x = B(_);
  {
    var k = (m) => {
      var b = Sp();
      Ce(b, "stroke-opacity", 0), Ce(b, "stroke-width", h), ke(() => Ce(b, "d", r())), D(m, b);
    };
    ye(x, (m) => {
      h && m(k);
    });
  }
  var v = B(x);
  {
    var C = (m) => {
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
        children: (b, H) => {
          Ae();
          var E = qe();
          ke(() => dt(E, o())), D(b, E);
        },
        $$slots: { default: !0 }
      });
    };
    ye(v, (m) => {
      o() && m(C);
    });
  }
  return ke(
    (m) => {
      Ce(_, "id", n()), Ce(_, "d", r()), Ct(_, 0, m), Ce(_, "marker-start", l()), Ce(_, "marker-end", u()), gt(_, c());
    },
    [
      () => gn(Ht(["svelte-flow__edge-path", f()]))
    ],
    be
  ), D(e, p), ve({
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
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get class() {
      return f();
    },
    set class(m) {
      f(m), y();
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(x()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(xc({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
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
      return d();
    },
    get style() {
      return l();
    }
  }), ve({
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
      return d();
    },
    set interactionWidth(v) {
      d(v), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), y();
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
      return _();
    },
    set targetX(v) {
      _(v), y();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), y();
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(x()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Si({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
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
      return d();
    },
    get style() {
      return l();
    }
  }), ve({
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
      return d();
    },
    set interactionWidth(v) {
      d(v), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), y();
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
      return _();
    },
    set targetX(v) {
      _(v), y();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), y();
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(p()), J(_())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(Fs({
        sourceX: f(),
        sourceY: h(),
        targetX: p(),
        targetY: _()
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
      return d();
    },
    get style() {
      return l();
    }
  }), ve({
    get label() {
      return s();
    },
    set label(x) {
      s(x), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), y();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(x) {
      h(x), y();
    },
    get targetX() {
      return p();
    },
    set targetX(x) {
      p(x), y();
    },
    get targetY() {
      return _();
    },
    set targetY(x) {
      _(x), y();
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(x()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Si({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
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
      return d();
    },
    get style() {
      return l();
    }
  }), ve({
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
      return d();
    },
    set interactionWidth(v) {
      d(v), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), y();
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
      return _();
    },
    set targetX(v) {
      _(v), y();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), y();
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
function Np(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function Tp(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Mp = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Hp = (e, t, n, r = [0, 0], o = bi, i, s, a, l, u, c, d, f) => {
  const { subscribe: h, set: p, update: _ } = Ee([]);
  let x = e, k = {}, v = !0;
  const C = (E) => {
    const V = Cc(E, t, n, {
      elevateNodesOnSelect: v,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: k,
      checkEquality: !1
    });
    return K(i) && V && K(l) && (P0({
      nodes: t,
      width: K(u),
      height: K(c),
      panZoom: K(l),
      minZoom: K(d),
      maxZoom: K(f)
    }, K(s)).then((A) => {
      var R;
      (R = K(a)) == null || R.resolve(A), a.set(null);
    }), i.set(!1), s.set(void 0)), x = E, p(x), x;
  }, m = (E) => C(E(x)), b = (E) => {
    k = E;
  }, H = (E) => {
    v = E.elevateNodesOnSelect ?? v;
  };
  return C(x), {
    subscribe: h,
    set: C,
    update: m,
    setDefaultOptions: b,
    setOptions: H
  };
}, Dp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = Ee([]);
  let a = e, l = {};
  const u = (f) => {
    const h = l ? f.map((p) => ({ ...l, ...p })) : f;
    $c(t, n, h), a = h, i(a);
  }, c = (f) => u(f(a)), d = (f) => {
    l = f;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
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
}, Vp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? bi;
  Cc(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), $c(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const H = Lo(a, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    h = Ca(H, n, r, 0.5, 2, 0.1);
  }
  const p = Ee(!1), _ = Ee(void 0), x = Ee(null), k = Ee(null), v = Ee(500), C = Ee(500), m = Ee(0.5), b = Ee(2);
  return {
    flowId: Ee(null),
    nodes: Hp(e, a, l, d, f, p, _, x, k, v, C, m, b),
    nodeLookup: jt(a),
    parentLookup: jt(l),
    edgeLookup: jt(c),
    visibleNodes: jt([]),
    edges: Dp(t, u, c),
    visibleEdges: jt([]),
    connectionLookup: jt(u),
    width: v,
    height: C,
    minZoom: m,
    maxZoom: b,
    nodeOrigin: Ee(d),
    nodeDragThreshold: Ee(1),
    nodeExtent: Ee(f),
    translateExtent: Ee(bi),
    autoPanOnNodeDrag: Ee(!0),
    autoPanOnConnect: Ee(!0),
    fitViewQueued: p,
    fitViewOptions: _,
    fitViewResolver: x,
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
    connection: jt(Bs),
    connectionLineType: Ee(Sr.Bezier),
    connectionRadius: Ee(20),
    isValidConnection: Ee(() => !0),
    nodesDraggable: Ee(!0),
    nodesConnectable: Ee(!0),
    elementsSelectable: Ee(!0),
    selectNodesOnDrag: Ee(!0),
    markers: jt([]),
    defaultMarkerColor: Ee("#b1b1b7"),
    lib: jt("svelte"),
    onlyRenderVisibleElements: Ee(!1),
    onerror: Ee(T0),
    ondelete: Ee(void 0),
    onedgecreate: Ee(void 0),
    onconnect: Ee(void 0),
    onconnectstart: Ee(void 0),
    onconnectend: Ee(void 0),
    onbeforedelete: Ee(void 0),
    nodesInitialized: Ee(!1),
    edgesInitialized: Ee(!1),
    viewportInitialized: Ee(!1),
    initialized: jt(!1)
  };
};
function Ap(e) {
  const t = Kn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), d = r.get(u.target);
    return c && d && R0({
      sourceNode: c,
      targetNode: d,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Kn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const d = Z0({
      id: l.id,
      sourceNode: u,
      targetNode: c,
      sourceHandle: l.sourceHandle || null,
      targetHandle: l.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return d && a.push({
      ...l,
      zIndex: z0({
        selected: l.selected,
        zIndex: l.zIndex,
        sourceNode: u,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...d
    }), a;
  }, []));
}
function Op(e) {
  return Kn([
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
  const a = Vp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l($) {
    a.nodeTypes.set({
      ...qc,
      ...$
    });
  }
  function u($) {
    a.edgeTypes.set({
      ...Yc,
      ...$
    });
  }
  function c($) {
    const P = K(a.edges);
    a.edges.set(Y0($, P));
  }
  const d = ($, P = !1) => {
    var T;
    const N = K(a.nodeLookup);
    for (const [M, L] of $) {
      const q = (T = N.get(M)) == null ? void 0 : T.internals.userNode;
      q && (q.position = L.position, q.dragging = P);
    }
    a.nodes.update((M) => M);
  };
  function f($) {
    var L, q, X;
    const P = K(a.nodeLookup), N = K(a.parentLookup), { changes: T, updatedInternals: M } = tp($, P, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (M) {
      U0(P, N, { nodeOrigin: i, nodeExtent: s });
      for (const Z of T) {
        const te = (L = P.get(Z.id)) == null ? void 0 : L.internals.userNode;
        if (te)
          switch (Z.type) {
            case "dimensions": {
              const j = { ...te.measured, ...Z.dimensions };
              Z.setAttributes && (te.width = ((q = Z.dimensions) == null ? void 0 : q.width) ?? te.width, te.height = ((X = Z.dimensions) == null ? void 0 : X.height) ?? te.height), te.measured = j;
              break;
            }
            case "position":
              te.position = Z.position ?? te.position;
              break;
          }
      }
      a.nodes.update((Z) => Z), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h($) {
    const P = K(a.fitViewResolver) ?? V0();
    return a.fitViewQueued.set(!0), a.fitViewOptions.set($), a.fitViewResolver.set(P), a.nodes.set(K(a.nodes)), P.promise;
  }
  function p($, P) {
    const N = K(a.panZoom);
    return N ? N.scaleBy($, P) : Promise.resolve(!1);
  }
  function _($) {
    return p(1.2, $);
  }
  function x($) {
    return p(1 / 1.2, $);
  }
  function k($) {
    const P = K(a.panZoom);
    P && (P.setScaleExtent([$, K(a.maxZoom)]), a.minZoom.set($));
  }
  function v($) {
    const P = K(a.panZoom);
    P && (P.setScaleExtent([K(a.minZoom), $]), a.maxZoom.set($));
  }
  function C($) {
    const P = K(a.panZoom);
    P && (P.setTranslateExtent($), a.translateExtent.set($));
  }
  function m($) {
    let P = !1;
    return $.forEach((N) => {
      N.selected && (N.selected = !1, P = !0);
    }), P;
  }
  function b($) {
    var P;
    (P = K(a.panZoom)) == null || P.setClickDistance($);
  }
  function H($) {
    m(($ == null ? void 0 : $.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), m(($ == null ? void 0 : $.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async ($) => {
    var P;
    if ($) {
      const N = K(a.nodes), T = K(a.edges), M = N.filter((Z) => Z.selected), L = T.filter((Z) => Z.selected), { nodes: q, edges: X } = await hc({
        nodesToRemove: M,
        edgesToRemove: L,
        nodes: N,
        edges: T,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || X.length) && (a.nodes.update((Z) => Z.filter((te) => !q.some((j) => j.id === te.id))), a.edges.update((Z) => Z.filter((te) => !X.some((j) => j.id === te.id))), (P = K(a.ondelete)) == null || P({
        nodes: q,
        edges: X
      }));
    }
  });
  function E($) {
    const P = K(a.multiselectionKeyPressed);
    a.nodes.update((N) => N.map((T) => {
      const M = $.includes(T.id), L = P && T.selected || M;
      return T.selected = L, T;
    })), P || a.edges.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function V($) {
    const P = K(a.multiselectionKeyPressed);
    a.edges.update((N) => N.map((T) => {
      const M = $.includes(T.id), L = P && T.selected || M;
      return T.selected = L, T;
    })), P || a.nodes.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function O($) {
    var N;
    const P = (N = K(a.nodes)) == null ? void 0 : N.find((T) => T.id === $);
    if (!P) {
      console.warn("012", Rr.error012($));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), P.selected ? P.selected && K(a.multiselectionKeyPressed) && H({ nodes: [P], edges: [] }) : E([$]);
  }
  function A($) {
    const P = K(a.viewport);
    return np({
      delta: $,
      panZoom: K(a.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const R = Ee(Bs), z = ($) => {
    R.set({ ...$ });
  };
  function I() {
    R.set(Bs);
  }
  function S() {
    a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), H(), I();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Ap(a),
    visibleNodes: Op(a),
    connection: Kn([R, a.viewport], ([$, P]) => $.inProgress ? {
      ...$,
      to: Io($.to, [P.x, P.y, P.zoom])
    } : { ...$ }),
    markers: Kn([a.edges, a.defaultMarkerColor, a.flowId], ([$, P, N]) => K0($, { defaultColor: P, id: N })),
    initialized: (() => {
      let $ = !1;
      const P = K(a.nodes).length, N = K(a.edges).length;
      return Kn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([T, M, L]) => $ || (P === 0 ? $ = L : N === 0 ? $ = L && T : $ = L && T && M, $));
    })(),
    // actions
    syncNodeStores: ($) => Np(a.nodes, $),
    syncEdgeStores: ($) => Tp(a.edges, $),
    syncViewport: ($) => Mp(a.panZoom, a.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: _,
    zoomOut: x,
    fitView: ($) => h($),
    setMinZoom: k,
    setMaxZoom: v,
    setTranslateExtent: C,
    setPaneClickDistance: b,
    unselectNodesAndEdges: H,
    addSelectedNodes: E,
    addSelectedEdges: V,
    handleNodeSelection: O,
    panBy: A,
    updateConnection: z,
    cancelConnection: I,
    reset: S
  };
}
function Ge() {
  const e = cr(es);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Lp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Or(es, {
    getStore: () => a
  }), a;
}
function ws(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = _p({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), d = c.getViewport();
  return s.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var Ip = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const zp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Wc(e, t) {
  he(t, !1), Qe(e, zp);
  const [n, r] = rt(), o = () => Q(T, "$panActivationKeyPressed", n), i = () => Q(I, "$minZoom", n), s = () => Q(S, "$maxZoom", n), a = () => Q(M, "$zoomActivationKeyPressed", n), l = () => Q(z, "$selectionRect", n), u = () => Q(P, "$translateExtent", n), c = () => Q(N, "$lib", n), d = /* @__PURE__ */ ae(), f = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae();
  let p = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), v = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), b = w(t, "zoomOnDoubleClick", 12), H = w(t, "zoomOnPinch", 12), E = w(t, "panOnDrag", 12), V = w(t, "panOnScroll", 12), O = w(t, "paneClickDistance", 12);
  const {
    viewport: A,
    panZoom: R,
    selectionRect: z,
    minZoom: I,
    maxZoom: S,
    dragging: $,
    translateExtent: P,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: M,
    viewportInitialized: L
  } = Ge(), q = (j) => A.set({
    x: j[0],
    y: j[1],
    zoom: j[2]
  });
  tn(() => {
    vi(L, !0);
  }), me(() => J(p()), () => {
    U(d, p() || { x: 0, y: 0, zoom: 1 });
  }), me(
    () => (o(), J(E())),
    () => {
      U(f, o() || E());
    }
  ), me(
    () => (o(), J(V())),
    () => {
      U(h, o() || V());
    }
  ), wt(), ze();
  var X = Ip(), Z = F(X);
  bt(Z, t, "default", {}), Y(X), xt(X, (j, ue) => ws == null ? void 0 : ws(j, ue), () => ({
    viewport: A,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(d),
    dragging: $,
    panZoom: R,
    onPanZoomStart: _(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: b(),
    zoomOnPinch: H(),
    panOnScroll: g(h),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || jn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: O(),
    onTransformChange: q
  })), D(e, X);
  var te = ve({
    get initialViewport() {
      return p();
    },
    set initialViewport(j) {
      p(j), y();
    },
    get onMoveStart() {
      return _();
    },
    set onMoveStart(j) {
      _(j), y();
    },
    get onMove() {
      return x();
    },
    set onMove(j) {
      x(j), y();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(j) {
      k(j), y();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(j) {
      v(j), y();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(j) {
      C(j), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(j) {
      m(j), y();
    },
    get zoomOnDoubleClick() {
      return b();
    },
    set zoomOnDoubleClick(j) {
      b(j), y();
    },
    get zoomOnPinch() {
      return H();
    },
    set zoomOnPinch(j) {
      H(j), y();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(j) {
      E(j), y();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(j) {
      V(j), y();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(j) {
      O(j), y();
    }
  });
  return r(), te;
}
ce(
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
var Rp = /* @__PURE__ */ ne("<div><!></div>");
const Bp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Xc(e, t) {
  he(t, !1), Qe(e, Bp);
  const [n, r] = rt(), o = () => Q($, "$panActivationKeyPressed", n), i = () => Q(I, "$selectionKeyPressed", n), s = () => Q(R, "$selectionRect", n), a = () => Q(A, "$elementsSelectable", n), l = () => Q(z, "$selectionRectMode", n), u = () => Q(N, "$connection", n), c = () => Q(E, "$edges", n), d = () => Q(H, "$nodeLookup", n), f = () => Q(V, "$viewport", n), h = () => Q(S, "$selectionMode", n), p = () => Q(O, "$dragging", n), _ = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae();
  let v = w(t, "panOnDrag", 12, void 0), C = w(t, "selectionOnDrag", 12, void 0);
  const m = Wi(), {
    nodes: b,
    nodeLookup: H,
    edges: E,
    viewport: V,
    dragging: O,
    elementsSelectable: A,
    selectionRect: R,
    selectionRectMode: z,
    selectionKeyPressed: I,
    selectionMode: S,
    panActivationKeyPressed: $,
    unselectNodesAndEdges: P,
    connection: N
  } = Ge();
  let T = /* @__PURE__ */ ae(), M = null, L = [], q = !1;
  function X(le) {
    if (q || u().inProgress) {
      q = !1;
      return;
    }
    m("paneclick", { event: le }), P(), z.set(null);
  }
  function Z(le) {
    var G, Se;
    if (M = g(T).getBoundingClientRect(), !A || !g(x) || le.button !== 0 || le.target !== g(T) || !M)
      return;
    (Se = (G = le.target) == null ? void 0 : G.setPointerCapture) == null || Se.call(G, le.pointerId);
    const { x: se, y: pe } = An(le, M);
    P(), R.set({
      width: 0,
      height: 0,
      startX: se,
      startY: pe,
      x: se,
      y: pe
    });
  }
  function te(le) {
    if (!g(x) || !M || !s())
      return;
    q = !0;
    const se = An(le, M), pe = s().startX ?? 0, G = s().startY ?? 0, Se = {
      ...s(),
      x: se.x < pe ? se.x : pe,
      y: se.y < G ? se.y : G,
      width: Math.abs(se.x - pe),
      height: Math.abs(se.y - G)
    }, Ve = L.map((oe) => oe.id), Le = qs(L, c()).map((oe) => oe.id);
    L = gc(
      d(),
      Se,
      [
        f().x,
        f().y,
        f().zoom
      ],
      h() === Ci.Partial,
      !0
    );
    const Re = qs(L, c()).map((oe) => oe.id), re = L.map((oe) => oe.id);
    (Ve.length !== re.length || re.some((oe) => !Ve.includes(oe))) && b.update((oe) => oe.map(zl(re))), (Le.length !== Re.length || Re.some((oe) => !Le.includes(oe))) && E.update((oe) => oe.map(zl(Re))), z.set("user"), R.set(Se);
  }
  function j(le) {
    var se, pe;
    le.button === 0 && ((pe = (se = le.target) == null ? void 0 : se.releasePointerCapture) == null || pe.call(se, le.pointerId), !g(x) && l() === "user" && le.target === g(T) && (X == null || X(le)), R.set(null), L.length > 0 && vi(z, "nodes"), i() && (q = !1));
  }
  const ue = (le) => {
    var se;
    if (Array.isArray(g(_)) && ((se = g(_)) != null && se.includes(2))) {
      le.preventDefault();
      return;
    }
    m("panecontextmenu", { event: le });
  };
  me(
    () => (o(), J(v())),
    () => {
      U(_, o() || v());
    }
  ), me(
    () => (i(), s(), J(C()), g(_)),
    () => {
      U(x, i() || s() || C() && g(_) !== !0);
    }
  ), me(
    () => (a(), g(x), l()),
    () => {
      U(k, a() && (g(x) || l() === "user"));
    }
  ), wt(), ze();
  var ge = Rp(), _e = /* @__PURE__ */ Te(() => g(k) ? void 0 : Il(X, g(T))), ie = /* @__PURE__ */ Te(() => Il(ue, g(T)));
  let Ne;
  var we = F(ge);
  bt(we, t, "default", {}), Y(ge), kn(ge, (le) => U(T, le), () => g(T)), ke(
    (le) => Ne = Ct(ge, 1, "svelte-flow__pane svelte-1esy7hx", null, Ne, le),
    [
      () => ({
        draggable: v() === !0 || Array.isArray(v()) && v().includes(0),
        dragging: p(),
        selection: g(x)
      })
    ],
    be
  ), nt("click", ge, function(...le) {
    var se;
    (se = g(_e)) == null || se.apply(this, le);
  }), nt("pointerdown", ge, function(...le) {
    var se;
    (se = g(k) ? Z : void 0) == null || se.apply(this, le);
  }), nt("pointermove", ge, function(...le) {
    var se;
    (se = g(k) ? te : void 0) == null || se.apply(this, le);
  }), nt("pointerup", ge, function(...le) {
    var se;
    (se = g(k) ? j : void 0) == null || se.apply(this, le);
  }), nt("contextmenu", ge, function(...le) {
    var se;
    (se = g(ie)) == null || se.apply(this, le);
  }), D(e, ge);
  var $e = ve({
    get panOnDrag() {
      return v();
    },
    set panOnDrag(le) {
      v(le), y();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(le) {
      C(le), y();
    }
  });
  return r(), $e;
}
ce(Xc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var qp = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Yp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Zc(e, t) {
  he(t, !1), Qe(e, Yp);
  const [n, r] = rt(), o = () => Q(i, "$viewport", n), { viewport: i } = Ge();
  ze();
  var s = qp(), a = F(s);
  bt(a, t, "default", {}), Y(s), ke(() => gt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, s), ve(), r();
}
ce(Zc, {}, ["default"], [], !0);
function Nr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = ip({
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
function Fp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Wp = /* @__PURE__ */ ne("<div><!></div>");
function Kc(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(ge, "$nodeTypes", n), i = () => Q($e, "$elementsSelectable", n), s = () => Q(le, "$nodesDraggable", n), a = () => Q(Se, "$connectableStore", n), l = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0);
  let f = w(t, "node", 13), h = w(t, "id", 13), p = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), v = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), b = w(t, "dragging", 13, !1), H = w(t, "resizeObserver", 13, null), E = w(t, "style", 13, void 0), V = w(t, "type", 13, "default"), O = w(t, "isParent", 13, !1), A = w(t, "positionX", 13), R = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), $ = w(t, "measuredWidth", 13, void 0), P = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), M = w(t, "width", 13, void 0), L = w(t, "height", 13, void 0), q = w(t, "dragHandle", 13, void 0), X = w(t, "initialized", 13, !1), Z = w(t, "parentId", 13, void 0), te = w(t, "nodeClickDistance", 13, void 0), j = w(t, "class", 13, "");
  const ue = Ge(), {
    nodeTypes: ge,
    nodeDragThreshold: _e,
    selectNodesOnDrag: ie,
    handleNodeSelection: Ne,
    updateNodeInternals: we,
    elementsSelectable: $e,
    nodesDraggable: le
  } = ue;
  let se = /* @__PURE__ */ ae(void 0, !0), pe = /* @__PURE__ */ ae(null, !0);
  const G = Wi(), Se = Ee(v());
  let Ve = /* @__PURE__ */ ae(void 0, !0), Le = /* @__PURE__ */ ae(void 0, !0), Re = /* @__PURE__ */ ae(void 0, !0);
  Or("svelteflow__node_id", h()), Or("svelteflow__node_connectable", Se), ga(() => {
    var ee;
    g(pe) && ((ee = H()) == null || ee.unobserve(g(pe)));
  });
  function re(ee) {
    k() && (!K(ie) || !x() || K(_e) > 0) && Ne(h()), G("nodeclick", { node: f().internals.userNode, event: ee });
  }
  me(() => J(V()), () => {
    U(l, V() || "default");
  }), me(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), me(
    () => (o(), g(l), Pi),
    () => {
      U(c, o()[g(l)] || Pi);
    }
  ), me(
    () => (g(u), J(V())),
    () => {
      g(u) || console.warn("003", Rr.error003(V()));
    }
  ), me(
    () => (J(M()), J(L()), J(N()), J(T()), J($()), J(P())),
    () => {
      U(d, Fp({
        width: M(),
        height: L(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: $(),
        measuredHeight: P()
      }));
    }
  ), me(() => J(v()), () => {
    Se.set(!!v());
  }), me(
    () => (g(Ve), g(l), g(Le), J(z()), g(Re), J(I()), J(h()), g(se)),
    () => {
      (g(Ve) && g(l) !== g(Ve) || g(Le) && z() !== g(Le) || g(Re) && I() !== g(Re)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(se),
            force: !0
          }
        ]
      ]))), U(Ve, g(l)), U(Le, z()), U(Re, I());
    }
  ), me(
    () => (J(H()), g(se), g(pe), J(X())),
    () => {
      H() && (g(se) !== g(pe) || !X()) && (g(pe) && H().unobserve(g(pe)), g(se) && H().observe(g(se)), U(pe, g(se)));
    }
  ), wt(), ze(!0);
  var oe = et(), de = xe(oe);
  {
    var He = (ee) => {
      var Ie = Wp();
      let fe, ft;
      var nn = F(Ie);
      const pn = /* @__PURE__ */ be(() => _() ?? !1), Oe = /* @__PURE__ */ be(() => k() ?? i() ?? !0), ot = /* @__PURE__ */ be(() => C() ?? !0), Fe = /* @__PURE__ */ be(() => x() ?? s() ?? !0);
      Mu(nn, () => g(c), (Be, it) => {
        it(Be, {
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
            return g(Oe);
          },
          get deletable() {
            return g(ot);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return b();
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
            return A();
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
      }), Y(Ie), xt(Ie, (Be, it) => Nr == null ? void 0 : Nr(Be, it), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: q(),
        noDragClass: "nodrag",
        nodeClickDistance: te(),
        onNodeMouseDown: Ne,
        onDrag: (Be, it, rn, Kt) => {
          G("nodedrag", { event: Be, targetNode: rn, nodes: Kt });
        },
        onDragStart: (Be, it, rn, Kt) => {
          G("nodedragstart", { event: Be, targetNode: rn, nodes: Kt });
        },
        onDragStop: (Be, it, rn, Kt) => {
          G("nodedragstop", { event: Be, targetNode: rn, nodes: Kt });
        },
        store: ue
      })), kn(Ie, (Be) => U(se, Be), () => g(se)), Bt(() => nt("click", Ie, re)), Bt(() => nt("mouseenter", Ie, (Be) => G("nodemouseenter", { node: f(), event: Be }))), Bt(() => nt("mouseleave", Ie, (Be) => G("nodemouseleave", { node: f(), event: Be }))), Bt(() => nt("mousemove", Ie, (Be) => G("nodemousemove", { node: f(), event: Be }))), Bt(() => nt("contextmenu", Ie, (Be) => G("nodecontextmenu", { node: f(), event: Be }))), ke(
        (Be, it) => {
          Ce(Ie, "data-id", h()), fe = Ct(Ie, 1, Be, null, fe, it), ft = gt(Ie, `${E() ?? "" ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, ft, {
            "z-index": S(),
            transform: `translate(${A() ?? ""}px, ${R() ?? ""}px)`,
            visibility: X() ? "visible" : "hidden"
          });
        },
        [
          () => gn(Ht([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            j()
          ])),
          () => ({
            dragging: b(),
            selected: _(),
            draggable: x(),
            connectable: v(),
            selectable: k(),
            nopan: x(),
            parent: O()
          })
        ],
        be
      ), D(ee, Ie);
    };
    ye(de, (ee) => {
      m() || ee(He);
    });
  }
  D(e, oe);
  var at = ve({
    get node() {
      return f();
    },
    set node(ee) {
      f(ee), y();
    },
    get id() {
      return h();
    },
    set id(ee) {
      h(ee), y();
    },
    get data() {
      return p();
    },
    set data(ee) {
      p(ee), y();
    },
    get selected() {
      return _();
    },
    set selected(ee) {
      _(ee), y();
    },
    get draggable() {
      return x();
    },
    set draggable(ee) {
      x(ee), y();
    },
    get selectable() {
      return k();
    },
    set selectable(ee) {
      k(ee), y();
    },
    get connectable() {
      return v();
    },
    set connectable(ee) {
      v(ee), y();
    },
    get deletable() {
      return C();
    },
    set deletable(ee) {
      C(ee), y();
    },
    get hidden() {
      return m();
    },
    set hidden(ee) {
      m(ee), y();
    },
    get dragging() {
      return b();
    },
    set dragging(ee) {
      b(ee), y();
    },
    get resizeObserver() {
      return H();
    },
    set resizeObserver(ee) {
      H(ee), y();
    },
    get style() {
      return E();
    },
    set style(ee) {
      E(ee), y();
    },
    get type() {
      return V();
    },
    set type(ee) {
      V(ee), y();
    },
    get isParent() {
      return O();
    },
    set isParent(ee) {
      O(ee), y();
    },
    get positionX() {
      return A();
    },
    set positionX(ee) {
      A(ee), y();
    },
    get positionY() {
      return R();
    },
    set positionY(ee) {
      R(ee), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(ee) {
      z(ee), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(ee) {
      I(ee), y();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ee) {
      S(ee), y();
    },
    get measuredWidth() {
      return $();
    },
    set measuredWidth(ee) {
      $(ee), y();
    },
    get measuredHeight() {
      return P();
    },
    set measuredHeight(ee) {
      P(ee), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(ee) {
      N(ee), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(ee) {
      T(ee), y();
    },
    get width() {
      return M();
    },
    set width(ee) {
      M(ee), y();
    },
    get height() {
      return L();
    },
    set height(ee) {
      L(ee), y();
    },
    get dragHandle() {
      return q();
    },
    set dragHandle(ee) {
      q(ee), y();
    },
    get initialized() {
      return X();
    },
    set initialized(ee) {
      X(ee), y();
    },
    get parentId() {
      return Z();
    },
    set parentId(ee) {
      Z(ee), y();
    },
    get nodeClickDistance() {
      return te();
    },
    set nodeClickDistance(ee) {
      te(ee), y();
    },
    get class() {
      return j();
    },
    set class(ee) {
      j(ee), y();
    }
  });
  return r(), at;
}
ce(
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
var Xp = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Zp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function jc(e, t) {
  he(t, !1), Qe(e, Zp);
  const [n, r] = rt(), o = () => Q(c, "$visibleNodes", n), i = () => Q(d, "$nodesDraggable", n), s = () => Q(h, "$elementsSelectable", n), a = () => Q(f, "$nodesConnectable", n), l = () => Q(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: _
  } = Ge(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const m = /* @__PURE__ */ new Map();
    C.forEach((b) => {
      const H = b.target.getAttribute("data-id");
      m.set(H, { id: H, nodeElement: b.target, force: !0 });
    }), p(m);
  });
  ga(() => {
    x == null || x.disconnect();
  }), ze();
  var k = Xp();
  Mt(k, 5, o, (C) => C.id, (C, m) => {
    const b = /* @__PURE__ */ be(() => !!g(m).selected), H = /* @__PURE__ */ be(() => !!g(m).hidden), E = /* @__PURE__ */ be(() => !!(g(m).draggable || i() && typeof g(m).draggable > "u")), V = /* @__PURE__ */ be(() => !!(g(m).selectable || s() && typeof g(m).selectable > "u")), O = /* @__PURE__ */ be(() => !!(g(m).connectable || a() && typeof g(m).connectable > "u")), A = /* @__PURE__ */ be(() => g(m).deletable ?? !0), R = /* @__PURE__ */ be(() => l().has(g(m).id)), z = /* @__PURE__ */ be(() => g(m).type ?? "default"), I = /* @__PURE__ */ be(() => g(m).internals.z ?? 0), S = /* @__PURE__ */ be(() => yc(g(m)));
    Kc(C, {
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
        return g(b);
      },
      get hidden() {
        return g(H);
      },
      get draggable() {
        return g(E);
      },
      get selectable() {
        return g(V);
      },
      get connectable() {
        return g(O);
      },
      get deletable() {
        return g(A);
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
        return g(S);
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
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick($) {
          Xe.call(this, t, $);
        },
        nodemouseenter($) {
          Xe.call(this, t, $);
        },
        nodemousemove($) {
          Xe.call(this, t, $);
        },
        nodemouseleave($) {
          Xe.call(this, t, $);
        },
        nodedrag($) {
          Xe.call(this, t, $);
        },
        nodedragstart($) {
          Xe.call(this, t, $);
        },
        nodedragstop($) {
          Xe.call(this, t, $);
        },
        nodecontextmenu($) {
          Xe.call(this, t, $);
        }
      }
    });
  }), Y(k), D(e, k);
  var v = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), y();
    }
  });
  return r(), v;
}
ce(jc, { nodeClickDistance: {} }, [], [], !0);
var Kp = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function Gc(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(j, "$edgeTypes", n), i = () => Q(ue, "$flowId", n), s = () => Q(ge, "$elementsSelectable", n), a = () => Q(te, "$edgeLookup", n), l = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0), f = /* @__PURE__ */ ae(void 0, !0);
  let h = w(t, "id", 13), p = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), x = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), v = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), b = w(t, "selected", 13, !1), H = w(t, "selectable", 13, void 0), E = w(t, "deletable", 13, void 0), V = w(t, "hidden", 13, !1), O = w(t, "label", 13, void 0), A = w(t, "labelStyle", 13, void 0), R = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), $ = w(t, "sourceX", 13), P = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), M = w(t, "sourcePosition", 13), L = w(t, "targetPosition", 13), q = w(t, "ariaLabel", 13, void 0), X = w(t, "interactionWidth", 13, void 0), Z = w(t, "class", 13, "");
  Or("svelteflow__edge_id", h());
  const {
    edgeLookup: te,
    edgeTypes: j,
    flowId: ue,
    elementsSelectable: ge
  } = Ge(), _e = Wi(), ie = Lc();
  function Ne(G) {
    const Se = a().get(h());
    Se && (ie(h()), _e("edgeclick", { event: G, edge: Se }));
  }
  function we(G, Se) {
    const Ve = a().get(h());
    Ve && _e(Se, { event: G, edge: Ve });
  }
  me(() => J(p()), () => {
    U(l, p() || "default");
  }), me(
    () => (o(), g(l), Ni),
    () => {
      U(u, o()[g(l)] || Ni);
    }
  ), me(
    () => (J(R()), i()),
    () => {
      U(c, R() ? `url('#${Ws(R(), i())}')` : void 0);
    }
  ), me(
    () => (J(z()), i()),
    () => {
      U(d, z() ? `url('#${Ws(z(), i())}')` : void 0);
    }
  ), me(
    () => (J(H()), s()),
    () => {
      U(f, H() ?? s());
    }
  ), wt(), ze(!0);
  var $e = et(), le = xe($e);
  {
    var se = (G) => {
      var Se = Kp();
      let Ve;
      var Le = F(Se);
      let Re;
      var re = F(Le);
      const oe = /* @__PURE__ */ be(() => E() ?? !0);
      Mu(re, () => g(u), (de, He) => {
        He(de, {
          get id() {
            return h();
          },
          get source() {
            return _();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return $();
          },
          get sourceY() {
            return P();
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
            return b();
          },
          get label() {
            return O();
          },
          get labelStyle() {
            return A();
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
            return g(f);
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
            return S();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), Y(Le), Y(Se), ke(
        (de, He) => {
          Ve = gt(Se, "", Ve, { "z-index": C() }), Re = Ct(Le, 0, de, null, Re, He), Ce(Le, "data-id", h()), Ce(Le, "aria-label", q() === null ? void 0 : q() ? q() : `Edge from ${_()} to ${x()}`);
        },
        [
          () => gn(Ht(["svelte-flow__edge", Z()])),
          () => ({
            animated: m(),
            selected: b(),
            selectable: g(f)
          })
        ],
        be
      ), nt("click", Le, Ne), nt("contextmenu", Le, (de) => {
        we(de, "edgecontextmenu");
      }), nt("mouseenter", Le, (de) => {
        we(de, "edgemouseenter");
      }), nt("mouseleave", Le, (de) => {
        we(de, "edgemouseleave");
      }), D(G, Se);
    };
    ye(le, (G) => {
      V() || G(se);
    });
  }
  D(e, $e);
  var pe = ve({
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
      return _();
    },
    set source(G) {
      _(G), y();
    },
    get target() {
      return x();
    },
    set target(G) {
      x(G), y();
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
      return C();
    },
    set zIndex(G) {
      C(G), y();
    },
    get animated() {
      return m();
    },
    set animated(G) {
      m(G), y();
    },
    get selected() {
      return b();
    },
    set selected(G) {
      b(G), y();
    },
    get selectable() {
      return H();
    },
    set selectable(G) {
      H(G), y();
    },
    get deletable() {
      return E();
    },
    set deletable(G) {
      E(G), y();
    },
    get hidden() {
      return V();
    },
    set hidden(G) {
      V(G), y();
    },
    get label() {
      return O();
    },
    set label(G) {
      O(G), y();
    },
    get labelStyle() {
      return A();
    },
    set labelStyle(G) {
      A(G), y();
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
      return S();
    },
    set targetHandle(G) {
      S(G), y();
    },
    get sourceX() {
      return $();
    },
    set sourceX(G) {
      $(G), y();
    },
    get sourceY() {
      return P();
    },
    set sourceY(G) {
      P(G), y();
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
  return r(), pe;
}
ce(
  Gc,
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
function Uc(e, t) {
  he(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return tn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), ze(), ve({
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
ce(Uc, { onMount: {}, onDestroy: {} }, [], [], !0);
var jp = /* @__PURE__ */ Pe("<defs></defs>");
function Jc(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(i, "$markers", n), { markers: i } = Ge();
  ze();
  var s = jp();
  Mt(s, 5, o, (a) => a.id, (a, l) => {
    Qc(a, ut(() => g(l)));
  }), Y(s), D(e, s), ve(), r();
}
ce(Jc, {}, [], [], !0);
var Gp = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Up = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Jp = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Qc(e, t) {
  he(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  ze();
  var c = Jp(), d = F(c);
  {
    var f = (p) => {
      var _ = Gp();
      ke(() => {
        Ce(_, "stroke", l()), Ce(_, "stroke-width", u());
      }), D(p, _);
    }, h = (p, _) => {
      {
        var x = (k) => {
          var v = Up();
          ke(() => {
            Ce(v, "stroke", l()), Ce(v, "stroke-width", u()), Ce(v, "fill", l());
          }), D(k, v);
        };
        ye(
          p,
          (k) => {
            r() === $o.ArrowClosed && k(x);
          },
          _
        );
      }
    };
    ye(d, (p) => {
      r() === $o.Arrow ? p(f) : p(h, !1);
    });
  }
  return Y(c), ke(() => {
    Ce(c, "id", n()), Ce(c, "markerWidth", `${o()}`), Ce(c, "markerHeight", `${i()}`), Ce(c, "markerUnits", s()), Ce(c, "orient", a());
  }), D(e, c), ve({
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
var Qp = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function ed(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  tn(() => {
    s() && u(s());
  }), ze();
  var d = Qp(), f = F(d), h = F(f);
  Jc(h, {}), Y(f);
  var p = B(f, 2);
  Mt(p, 1, o, (v) => v.id, (v, C) => {
    const m = /* @__PURE__ */ be(() => g(C).selectable ?? i()), b = /* @__PURE__ */ be(() => g(C).type || "default");
    Gc(v, {
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
        return g(m);
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
        return g(b);
      },
      get zIndex() {
        return g(C).zIndex;
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
  var _ = B(p, 2);
  {
    var x = (v) => {
      Uc(v, {
        onMount: () => {
          vi(l, !0);
        },
        onDestroy: () => {
          vi(l, !1);
        }
      });
    };
    ye(_, (v) => {
      o().length > 0 && v(x);
    });
  }
  Y(d), D(e, d);
  var k = ve({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), y();
    }
  });
  return r(), k;
}
ce(ed, { defaultEdgeOptions: {} }, [], [], !0);
var e2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const t2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Sa(e, t) {
  he(t, !1), Qe(e, t2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = et(), l = xe(a);
  {
    var u = (c) => {
      var d = e2();
      let f;
      ke(() => f = gt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, d);
    };
    ye(l, (c) => {
      s() && c(u);
    });
  }
  return D(e, a), ve({
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
function td(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ge();
  ze();
  const l = /* @__PURE__ */ be(() => !!(o() && i() === "user")), u = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), d = /* @__PURE__ */ be(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), f = /* @__PURE__ */ be(() => {
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
      return g(d);
    },
    get y() {
      return g(f);
    }
  }), ve(), r();
}
ce(td, {}, [], [], !0);
var n2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const r2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function nd(e, t) {
  he(t, !1), Qe(e, r2);
  const [n, r] = rt(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = Wi();
  let f = /* @__PURE__ */ ae(null);
  function h(v) {
    const C = s().filter((m) => m.selected);
    d("selectioncontextmenu", { nodes: C, event: v });
  }
  function p(v) {
    const C = s().filter((m) => m.selected);
    d("selectionclick", { nodes: C, event: v });
  }
  me(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(f, Lo(i(), { filter: (v) => !!v.selected })), s());
    }
  ), wt(), ze();
  var _ = et(), x = xe(_);
  {
    var k = (v) => {
      var C = n2(), m = F(C);
      Sa(m, { width: "100%", height: "100%", x: 0, y: 0 }), Y(C), xt(C, (b, H) => Nr == null ? void 0 : Nr(b, H), () => ({
        disabled: !1,
        store: a,
        onDrag: (b, H, E, V) => {
          d("nodedrag", { event: b, targetNode: null, nodes: V });
        },
        onDragStart: (b, H, E, V) => {
          d("nodedragstart", { event: b, targetNode: null, nodes: V });
        },
        onDragStop: (b, H, E, V) => {
          d("nodedragstop", { event: b, targetNode: null, nodes: V });
        }
      })), Bt(() => nt("contextmenu", C, h)), Bt(() => nt("click", C, p)), Bt(() => nt("keyup", C, () => {
      })), ke(() => gt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), D(v, C);
    };
    ye(x, (v) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && v(k);
    });
  }
  D(e, _), ve(), r();
}
ce(nd, {}, [], [], !0);
function Ue(e, t) {
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
      }, { modifier: d, key: f, callback: h, preventDefault: p, enabled: _ } = c;
      if (_) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (v) => typeof v == "string" ? [v] : v
        ).some(
          (v) => v.every((C) => l[C])
        ))
          continue;
        if (s.key === f) {
          p && s.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), h == null || h(x);
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
  he(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ei() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => Ei() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ge();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function p(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function _(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function x(v, C) {
    return (Array.isArray(v) ? v : [v]).map((b) => {
      const H = _(b);
      return {
        key: H,
        modifier: p(b),
        enabled: H !== null,
        callback: C
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return ze(), nt("blur", At, k), nt("contextmenu", At, k), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !L0(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(s(), () => d.set(!0)),
    type: "keydown"
  })), xt(At, (v, C) => Ue == null ? void 0 : Ue(v, C), () => ({
    trigger: x(s(), () => d.set(!1)),
    type: "keyup"
  })), ve({
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
var o2 = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__connection-path"></path>'), i2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function od(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(h, "$connection", n), i = () => Q(p, "$connectionLineType", n), s = () => Q(d, "$width", n), a = () => Q(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: h,
    connectionLineType: p
  } = Ge();
  let _ = /* @__PURE__ */ ae(null);
  me(
    () => (o(), J(c()), i(), g(_), Fs),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: b, fromPosition: H, toPosition: E } = o(), V = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: H,
          targetX: b.x,
          targetY: b.y,
          targetPosition: E
        };
        switch (i()) {
          case Sr.Bezier:
            ((O) => U(_, O[0]))(xc(V));
            break;
          case Sr.Step:
            ((O) => U(_, O[0]))(Si({ ...V, borderRadius: 0 }));
            break;
          case Sr.SmoothStep:
            ((O) => U(_, O[0]))(Si(V));
            break;
          default:
            ((O) => U(_, O[0]))(Fs(V));
        }
      }
    }
  ), wt(), ze();
  var x = et(), k = xe(x);
  {
    var v = (m) => {
      var b = i2(), H = F(b), E = F(H);
      bt(E, t, "connectionLine", {});
      var V = B(E);
      {
        var O = (A) => {
          var R = o2();
          ke(() => {
            Ce(R, "d", g(_)), gt(R, u());
          }), D(A, R);
        };
        ye(V, (A) => {
          c() || A(O);
        });
      }
      Y(H), Y(b), ke(
        (A) => {
          Ce(b, "width", s()), Ce(b, "height", a()), gt(b, l()), Ct(H, 0, A);
        },
        [
          () => gn(Ht([
            "svelte-flow__connection",
            C0(o().isValid)
          ]))
        ],
        be
      ), D(m, b);
    };
    ye(k, (m) => {
      o().inProgress && m(v);
    });
  }
  D(e, x);
  var C = ve({
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
  return r(), C;
}
ce(
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
var s2 = /* @__PURE__ */ ne("<div><!></div>");
function Ro(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = lt(n, ["position", "style", "class"]);
  he(t, !1);
  const [o, i] = rt(), s = () => Q(d, "$selectionRectMode", o), a = /* @__PURE__ */ ae();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ge();
  me(() => J(l()), () => {
    U(a, `${l()}`.split("-"));
  }), wt(), ze();
  var f = s2();
  let h;
  var p = F(f);
  bt(p, t, "default", {}), Y(f), ke(
    (x) => h = Xt(f, h, {
      class: x,
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
  ), D(e, f);
  var _ = ve({
    get position() {
      return l();
    },
    set position(x) {
      l(x), y();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), y();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), y();
    }
  });
  return i(), _;
}
ce(Ro, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var a2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function id(e, t) {
  he(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  ze();
  var o = et(), i = xe(o);
  {
    var s = (a) => {
      Ro(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = a2();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ye(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return D(e, o), ve({
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
ce(id, { proOptions: {}, position: {} }, [], [], !0);
function Rl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const l2 = (e) => Object.keys(e);
function Bl(e, t) {
  l2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function u2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function c2(e = "light") {
  return jt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = u2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var d2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), f2 = /* @__PURE__ */ ne("<!> <!>", 1), g2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const h2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function sd(e, t) {
  const n = S1(t), r = lt(t, [
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
  he(t, !1), Qe(e, h2);
  const [i, s] = rt(), a = () => Q(C(), "$viewport", i), l = () => Q(is, "$initialized", i), u = () => Q(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), h = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), v = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), b = w(t, "edgeTypes", 12, void 0), H = w(t, "selectionKey", 12, void 0), E = w(t, "selectionMode", 12, void 0), V = w(t, "panActivationKey", 12, void 0), O = w(t, "multiSelectionKey", 12, void 0), A = w(t, "zoomActivationKey", 12, void 0), R = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), $ = w(t, "snapGrid", 12, void 0), P = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), M = w(t, "connectionMode", 28, () => gr.Strict), L = w(t, "connectionLineStyle", 12, ""), q = w(t, "connectionLineContainerStyle", 12, ""), X = w(t, "onMoveStart", 12, void 0), Z = w(t, "onMove", 12, void 0), te = w(t, "onMoveEnd", 12, void 0), j = w(t, "isValidConnection", 12, void 0), ue = w(t, "translateExtent", 12, void 0), ge = w(t, "nodeExtent", 12, void 0), _e = w(t, "onlyRenderVisibleElements", 12, void 0), ie = w(t, "panOnScrollMode", 28, () => jn.Free), Ne = w(t, "preventScrolling", 12, !0), we = w(t, "zoomOnScroll", 12, !0), $e = w(t, "zoomOnDoubleClick", 12, !0), le = w(t, "zoomOnPinch", 12, !0), se = w(t, "panOnScroll", 12, !1), pe = w(t, "panOnDrag", 12, !0), G = w(t, "selectionOnDrag", 12, void 0), Se = w(t, "autoPanOnConnect", 12, !0), Ve = w(t, "autoPanOnNodeDrag", 12, !0), Le = w(t, "onerror", 12, void 0), Re = w(t, "ondelete", 12, void 0), re = w(t, "onedgecreate", 12, void 0), oe = w(t, "attributionPosition", 12, void 0), de = w(t, "proOptions", 12, void 0), He = w(t, "defaultEdgeOptions", 12, void 0), at = w(t, "width", 12, void 0), ee = w(t, "height", 12, void 0), Ie = w(t, "colorMode", 12, "light"), fe = w(t, "onconnect", 12, void 0), ft = w(t, "onconnectstart", 12, void 0), nn = w(t, "onconnectend", 12, void 0), pn = w(t, "onbeforedelete", 12, void 0), Oe = w(t, "oninit", 12, void 0), ot = w(t, "nodeOrigin", 12, void 0), Fe = w(t, "paneClickDistance", 12, 0), Be = w(t, "nodeClickDistance", 12, 0), it = w(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = w(t, "style", 12, void 0), Kt = w(t, "class", 12, void 0), eo = /* @__PURE__ */ ae(), kt = /* @__PURE__ */ ae(), Dt = /* @__PURE__ */ ae();
  const wr = a() || v(), st = a1(es) ? Ge() : Lp({
    nodes: K(f()),
    edges: K(h()),
    width: at(),
    height: ee(),
    fitView: p(),
    nodeOrigin: ot(),
    nodeExtent: ge()
  });
  tn(() => (st.width.set(g(kt)), st.height.set(g(Dt)), st.domNode.set(g(eo)), st.syncNodeStores(f()), st.syncEdgeStores(h()), st.syncViewport(C()), p() !== void 0 && st.fitViewQueued.set(p()), _() && st.fitViewOptions.set(_()), Rl(st, {
    nodeTypes: m(),
    edgeTypes: b(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: ue(),
    paneClickDistance: Fe()
  }), () => {
    st.reset();
  }));
  const { initialized: is } = st;
  let to = /* @__PURE__ */ ae(!1);
  me(
    () => (g(kt), g(Dt)),
    () => {
      g(kt) !== void 0 && g(Dt) !== void 0 && (st.width.set(g(kt)), st.height.set(g(Dt)));
    }
  ), me(
    () => (g(to), l(), J(Oe())),
    () => {
      var W;
      !g(to) && l() && ((W = Oe()) == null || W(), U(to, !0));
    }
  ), me(
    () => (J(d()), J(T()), J(N()), J(E()), J($()), J(it()), J(R()), J(z()), J(S()), J(_e()), J(j()), J(Se()), J(Ve()), J(Le()), J(Re()), J(re()), J(M()), J(I()), J(fe()), J(ft()), J(nn()), J(pn()), J(ot()), Bl),
    () => {
      const W = {
        flowId: d(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: E(),
        snapGrid: $(),
        defaultMarkerColor: it(),
        nodesDraggable: R(),
        nodesConnectable: z(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: _e(),
        isValidConnection: j(),
        autoPanOnConnect: Se(),
        autoPanOnNodeDrag: Ve(),
        onerror: Le(),
        ondelete: Re(),
        onedgecreate: re(),
        connectionMode: M(),
        nodeDragThreshold: I(),
        onconnect: fe(),
        onconnectstart: ft(),
        onconnectend: nn(),
        onbeforedelete: pn(),
        nodeOrigin: ot()
      };
      Bl(st, W);
    }
  ), me(
    () => (J(m()), J(b()), J(x()), J(k()), J(ue()), J(Fe())),
    () => {
      Rl(st, {
        nodeTypes: m(),
        edgeTypes: b(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: ue(),
        paneClickDistance: Fe()
      });
    }
  ), me(
    () => J(Ie()),
    () => {
      L1(U(c, c2(Ie())), "$colorModeClass", i);
    }
  ), wt(), ze();
  var zt = g2();
  let Fo;
  var Wo = F(zt);
  rd(Wo, {
    get selectionKey() {
      return H();
    },
    get deleteKey() {
      return P();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return A();
    }
  });
  var Xo = B(Wo, 2);
  const ss = /* @__PURE__ */ be(() => ie() === void 0 ? jn.Free : ie()), ef = /* @__PURE__ */ be(() => Ne() === void 0 ? !0 : Ne()), tf = /* @__PURE__ */ be(() => we() === void 0 ? !0 : we()), nf = /* @__PURE__ */ be(() => $e() === void 0 ? !0 : $e()), rf = /* @__PURE__ */ be(() => le() === void 0 ? !0 : le()), of = /* @__PURE__ */ be(() => se() === void 0 ? !1 : se()), sf = /* @__PURE__ */ be(() => pe() === void 0 ? !0 : pe()), af = /* @__PURE__ */ be(() => Fe() === void 0 ? 0 : Fe());
  Wc(Xo, {
    initialViewport: wr,
    get onMoveStart() {
      return X();
    },
    get onMove() {
      return Z();
    },
    get onMoveEnd() {
      return te();
    },
    get panOnScrollMode() {
      return g(ss);
    },
    get preventScrolling() {
      return g(ef);
    },
    get zoomOnScroll() {
      return g(tf);
    },
    get zoomOnDoubleClick() {
      return g(nf);
    },
    get zoomOnPinch() {
      return g(rf);
    },
    get panOnScroll() {
      return g(of);
    },
    get panOnDrag() {
      return g(sf);
    },
    get paneClickDistance() {
      return g(af);
    },
    children: (W, Zw) => {
      const cf = /* @__PURE__ */ be(() => pe() === void 0 ? !0 : pe());
      Xc(W, {
        get panOnDrag() {
          return g(cf);
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
        children: (no, Kw) => {
          var Va = f2(), Aa = xe(Va);
          Zc(Aa, {
            children: (ff, jw) => {
              var Oa = d2(), La = xe(Oa);
              ed(La, {
                get defaultEdgeOptions() {
                  return He();
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
                  connectionLine: (We, Gw) => {
                    var Ra = et(), hf = xe(Ra);
                    bt(hf, t, "connectionLine", {}), D(We, Ra);
                  }
                }
              });
              var za = B(Ia, 6);
              jc(za, {
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
              var gf = B(za, 2);
              nd(gf, {
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
              }), D(ff, Oa);
            },
            $$slots: { default: !0 }
          });
          var df = B(Aa, 2);
          td(df, {}), D(no, Va);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Da = B(Xo, 2);
  id(Da, {
    get proOptions() {
      return de();
    },
    get position() {
      return oe();
    }
  });
  var lf = B(Da, 2);
  bt(lf, t, "default", {}), Y(zt), kn(zt, (W) => U(eo, W), () => g(eo)), ke(
    (W) => Fo = Xt(
      zt,
      Fo,
      {
        style: rn(),
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
  ), tl(zt, "clientWidth", (W) => U(kt, W)), tl(zt, "clientHeight", (W) => U(Dt, W)), nt("dragover", zt, function(W) {
    Xe.call(this, t, W);
  }), nt("drop", zt, function(W) {
    Xe.call(this, t, W);
  }), D(e, zt);
  var uf = ve({
    get id() {
      return d();
    },
    set id(W) {
      d(W), y();
    },
    get nodes() {
      return f();
    },
    set nodes(W) {
      f(W), y();
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
      return _();
    },
    set fitViewOptions(W) {
      _(W), y();
    },
    get minZoom() {
      return x();
    },
    set minZoom(W) {
      x(W), y();
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
      return C();
    },
    set viewport(W) {
      C(W), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(W) {
      m(W), y();
    },
    get edgeTypes() {
      return b();
    },
    set edgeTypes(W) {
      b(W), y();
    },
    get selectionKey() {
      return H();
    },
    set selectionKey(W) {
      H(W), y();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(W) {
      E(W), y();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(W) {
      V(W), y();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(W) {
      O(W), y();
    },
    get zoomActivationKey() {
      return A();
    },
    set zoomActivationKey(W) {
      A(W), y();
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
      return S();
    },
    set elementsSelectable(W) {
      S(W), y();
    },
    get snapGrid() {
      return $();
    },
    set snapGrid(W) {
      $(W), y();
    },
    get deleteKey() {
      return P();
    },
    set deleteKey(W) {
      P(W), y();
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
      return te();
    },
    set onMoveEnd(W) {
      te(W), y();
    },
    get isValidConnection() {
      return j();
    },
    set isValidConnection(W) {
      j(W), y();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(W) {
      ue(W), y();
    },
    get nodeExtent() {
      return ge();
    },
    set nodeExtent(W) {
      ge(W), y();
    },
    get onlyRenderVisibleElements() {
      return _e();
    },
    set onlyRenderVisibleElements(W) {
      _e(W), y();
    },
    get panOnScrollMode() {
      return ie();
    },
    set panOnScrollMode(W) {
      ie(W), y();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(W) {
      Ne(W), y();
    },
    get zoomOnScroll() {
      return we();
    },
    set zoomOnScroll(W) {
      we(W), y();
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
      return se();
    },
    set panOnScroll(W) {
      se(W), y();
    },
    get panOnDrag() {
      return pe();
    },
    set panOnDrag(W) {
      pe(W), y();
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
      return Ve();
    },
    set autoPanOnNodeDrag(W) {
      Ve(W), y();
    },
    get onerror() {
      return Le();
    },
    set onerror(W) {
      Le(W), y();
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
      return de();
    },
    set proOptions(W) {
      de(W), y();
    },
    get defaultEdgeOptions() {
      return He();
    },
    set defaultEdgeOptions(W) {
      He(W), y();
    },
    get width() {
      return at();
    },
    set width(W) {
      at(W), y();
    },
    get height() {
      return ee();
    },
    set height(W) {
      ee(W), y();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(W) {
      Ie(W), y();
    },
    get onconnect() {
      return fe();
    },
    set onconnect(W) {
      fe(W), y();
    },
    get onconnectstart() {
      return ft();
    },
    set onconnectstart(W) {
      ft(W), y();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(W) {
      nn(W), y();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(W) {
      pn(W), y();
    },
    get oninit() {
      return Oe();
    },
    set oninit(W) {
      Oe(W), y();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(W) {
      ot(W), y();
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
      return it();
    },
    set defaultMarkerColor(W) {
      it(W), y();
    },
    get style() {
      return rn();
    },
    set style(W) {
      rn(W), y();
    },
    get class() {
      return Kt();
    },
    set class(W) {
      Kt(W), y();
    }
  });
  return s(), uf;
}
ce(
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
  he(t, !1);
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
  var u = et(), c = xe(u);
  return bt(c, t, "default", {}), D(e, u), ve({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), y();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), y();
    },
    get fitView() {
      return s();
    },
    set fitView(d) {
      s(d), y();
    },
    get nodeOrigin() {
      return a();
    },
    set nodeOrigin(d) {
      a(d), y();
    }
  });
}
ce(
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
var v2 = /* @__PURE__ */ ne("<button><!></button>");
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
  he(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  ze();
  var c = v2();
  let d;
  var f = F(c);
  return bt(f, t, "default", { class: "button-svg" }), Y(c), ke(
    (h) => d = Xt(c, d, {
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
  ), nt("click", c, function(h) {
    Xe.call(this, t, h);
  }), D(e, c), ve({
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
var p2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function ld(e) {
  var t = p2();
  D(e, t);
}
ce(ld, {}, [], [], !0);
var m2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ud(e) {
  var t = m2();
  D(e, t);
}
ce(ud, {}, [], [], !0);
var y2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function cd(e) {
  var t = y2();
  D(e, t);
}
ce(cd, {}, [], [], !0);
var w2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function dd(e) {
  var t = w2();
  D(e, t);
}
ce(dd, {}, [], [], !0);
var _2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function fd(e) {
  var t = _2();
  D(e, t);
}
ce(fd, {}, [], [], !0);
var x2 = /* @__PURE__ */ ne("<!> <!>", 1), b2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function gd(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(T, "$nodesDraggable", n), i = () => Q(M, "$nodesConnectable", n), s = () => Q(L, "$elementsSelectable", n), a = () => Q($, "$viewport", n), l = () => Q(P, "$minZoom", n), u = () => Q(N, "$maxZoom", n), c = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), f = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae();
  let p = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), v = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), b = w(t, "buttonColorHover", 12, void 0), H = w(t, "buttonBorderColor", 12, void 0), E = w(t, "ariaLabel", 12, void 0), V = w(t, "style", 12, void 0), O = w(t, "orientation", 12, "vertical"), A = w(t, "fitViewOptions", 12, void 0), R = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: I,
    fitView: S,
    viewport: $,
    minZoom: P,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: M,
    elementsSelectable: L
  } = Ge(), q = {
    bgColor: v(),
    bgColorHover: C(),
    color: m(),
    colorHover: b(),
    borderColor: H()
  }, X = () => {
    z();
  }, Z = () => {
    I();
  }, te = () => {
    S(A());
  }, j = () => {
    U(c, !g(c)), T.set(g(c)), M.set(g(c)), L.set(g(c));
  };
  me(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), me(() => (a(), l()), () => {
    U(d, a().zoom <= l());
  }), me(() => (a(), u()), () => {
    U(f, a().zoom >= u());
  }), me(() => J(O()), () => {
    U(h, O() === "horizontal" ? "horizontal" : "vertical");
  }), wt(), ze();
  const ue = /* @__PURE__ */ be(() => Ht([
    "svelte-flow__controls",
    g(h),
    R()
  ])), ge = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  Ro(e, {
    get class() {
      return g(ue);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ge);
    },
    get style() {
      return V();
    },
    children: (ie, Ne) => {
      var we = b2(), $e = xe(we);
      bt($e, t, "before", {});
      var le = B($e, 2);
      {
        var se = (re) => {
          var oe = x2(), de = xe(oe);
          fo(de, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            q,
            {
              $$events: { click: X },
              children: (at, ee) => {
                ld(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var He = B(de, 2);
          fo(He, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            q,
            {
              $$events: { click: Z },
              children: (at, ee) => {
                ud(at);
              },
              $$slots: { default: !0 }
            }
          )), D(re, oe);
        };
        ye(le, (re) => {
          _() && re(se);
        });
      }
      var pe = B(le, 2);
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
              $$events: { click: te },
              children: (oe, de) => {
                cd(oe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(pe, (re) => {
          x() && re(G);
        });
      }
      var Se = B(pe, 2);
      {
        var Ve = (re) => {
          fo(re, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            q,
            {
              $$events: { click: j },
              children: (oe, de) => {
                var He = et(), at = xe(He);
                {
                  var ee = (fe) => {
                    fd(fe);
                  }, Ie = (fe) => {
                    dd(fe);
                  };
                  ye(at, (fe) => {
                    g(c) ? fe(ee) : fe(Ie, !1);
                  });
                }
                D(oe, He);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ye(Se, (re) => {
          k() && re(Ve);
        });
      }
      var Le = B(Se, 2);
      bt(Le, t, "default", {});
      var Re = B(Le, 2);
      bt(Re, t, "after", {}), D(ie, we);
    },
    $$slots: { default: !0 }
  });
  var _e = ve({
    get position() {
      return p();
    },
    set position(ie) {
      p(ie), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(ie) {
      _(ie), y();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ie) {
      x(ie), y();
    },
    get showLock() {
      return k();
    },
    set showLock(ie) {
      k(ie), y();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(ie) {
      v(ie), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ie) {
      C(ie), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(ie) {
      m(ie), y();
    },
    get buttonColorHover() {
      return b();
    },
    set buttonColorHover(ie) {
      b(ie), y();
    },
    get buttonBorderColor() {
      return H();
    },
    set buttonBorderColor(ie) {
      H(ie), y();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ie) {
      E(ie), y();
    },
    get style() {
      return V();
    },
    set style(ie) {
      V(ie), y();
    },
    get orientation() {
      return O();
    },
    set orientation(ie) {
      O(ie), y();
    },
    get fitViewOptions() {
      return A();
    },
    set fitViewOptions(ie) {
      A(ie), y();
    },
    get class() {
      return R();
    },
    set class(ie) {
      R(ie), y();
    }
  });
  return r(), _e;
}
ce(
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
var C2 = /* @__PURE__ */ Pe("<circle></circle>");
function hd(e, t) {
  he(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  ze();
  var o = C2();
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
  ), D(e, o), ve({
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
ce(hd, { radius: {}, class: {} }, [], [], !0);
var k2 = /* @__PURE__ */ Pe("<path></path>");
function vd(e, t) {
  he(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  ze();
  var s = k2();
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
  ), D(e, s), ve({
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
const $2 = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var E2 = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const S2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function pd(e, t) {
  he(t, !1), Qe(e, S2);
  const [n, r] = rt(), o = () => Q(b, "$flowId", n), i = () => Q(m, "$viewport", n), s = /* @__PURE__ */ ae(), a = /* @__PURE__ */ ae(), l = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => Gn.Dots), h = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), v = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: m, flowId: b } = Ge(), H = p() || $2[f()], E = f() === Gn.Dots, V = f() === Gn.Cross, O = Array.isArray(h()) ? h() : [h(), h()];
  me(
    () => (o(), J(d())),
    () => {
      U(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), me(() => i(), () => {
    U(a, [
      O[0] * i().zoom || 1,
      O[1] * i().zoom || 1
    ]);
  }), me(() => i(), () => {
    U(l, H * i().zoom);
  }), me(() => (g(l), g(a)), () => {
    U(u, V ? [g(l), g(l)] : g(a));
  }), me(
    () => (g(l), g(u)),
    () => {
      U(c, E ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), wt(), ze();
  var A = E2();
  let R;
  var z = F(A), I = F(z);
  {
    var S = (T) => {
      const M = /* @__PURE__ */ be(() => g(l) / 2);
      hd(T, {
        get radius() {
          return g(M);
        },
        get class() {
          return v();
        }
      });
    }, $ = (T) => {
      vd(T, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return _();
        },
        get class() {
          return v();
        }
      });
    };
    ye(I, (T) => {
      E ? T(S) : T($, !1);
    });
  }
  Y(z);
  var P = B(z);
  Y(A), ke(
    (T) => {
      Ct(A, 0, T, "svelte-1r7pe8d"), R = gt(A, "", R, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": k()
      }), Ce(z, "id", g(s)), Ce(z, "x", i().x % g(a)[0]), Ce(z, "y", i().y % g(a)[1]), Ce(z, "width", g(a)[0]), Ce(z, "height", g(a)[1]), Ce(z, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), Ce(P, "fill", `url(#${g(s)})`);
    },
    [
      () => gn(Ht(["svelte-flow__background", C()]))
    ],
    be
  ), D(e, A);
  var N = ve({
    get id() {
      return d();
    },
    set id(T) {
      d(T), y();
    },
    get variant() {
      return f();
    },
    set variant(T) {
      f(T), y();
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
      return _();
    },
    set lineWidth(T) {
      _(T), y();
    },
    get bgColor() {
      return x();
    },
    set bgColor(T) {
      x(T), y();
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
      return C();
    },
    set class(T) {
      C(T), y();
    }
  });
  return r(), N;
}
ce(
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
var P2 = /* @__PURE__ */ Pe("<rect></rect>");
function md(e, t) {
  he(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  ze();
  var h = P2();
  let p;
  return ke(
    (_, x) => {
      p = Ct(h, 0, _, null, p, x), Ce(h, "x", n()), Ce(h, "y", r()), Ce(h, "rx", s()), Ce(h, "ry", s()), Ce(h, "width", o()), Ce(h, "height", i()), gt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), Ce(h, "shape-rendering", l());
    },
    [
      () => gn(Ht(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), D(e, h), ve({
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
      return d();
    },
    set selected(_) {
      d(_), y();
    },
    get class() {
      return f();
    },
    set class(_) {
      f(_), y();
    }
  });
}
ce(
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
  const n = fp({
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
var N2 = /* @__PURE__ */ Pe("<title> </title>"), T2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function yd(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(pe, "$flowId", n), i = () => Q($e, "$viewport", n), s = () => Q(le, "$containerWidth", n), a = () => Q(se, "$containerHeight", n), l = () => Q(we, "$nodeLookup", n), u = () => Q(Ne, "$nodes", n), c = () => Q(G, "$panZoom", n), d = () => Q(Se, "$translateExtent", n), f = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), C = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), V = /* @__PURE__ */ ae();
  let O = w(t, "position", 12, "bottom-right"), A = w(t, "ariaLabel", 12, "Mini map"), R = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), $ = w(t, "nodeStrokeWidth", 12, 2), P = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), M = w(t, "maskStrokeWidth", 12, void 0), L = w(t, "width", 12, void 0), q = w(t, "height", 12, void 0), X = w(t, "pannable", 12, !0), Z = w(t, "zoomable", 12, !0), te = w(t, "inversePan", 12, void 0), j = w(t, "zoomStep", 12, void 0), ue = w(t, "style", 12, ""), ge = w(t, "class", 12, "");
  const _e = 200, ie = 150, {
    nodes: Ne,
    nodeLookup: we,
    viewport: $e,
    width: le,
    height: se,
    flowId: pe,
    panZoom: G,
    translateExtent: Se
  } = Ge(), Ve = z() === void 0 ? void 0 : xs(z()), Le = xs(R()), Re = xs(I()), re = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), oe = `svelte-flow__minimap-desc-${o()}`;
  let de = /* @__PURE__ */ ae(g(f));
  const He = () => g(k);
  me(
    () => (i(), s(), a()),
    () => {
      U(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), me(
    () => (l(), g(f), u()),
    () => {
      U(de, l().size > 0 ? mc(Lo(l(), { filter: (fe) => !fe.hidden }), g(f)) : g(f)), u();
    }
  ), me(() => J(L()), () => {
    U(h, L() ?? _e);
  }), me(() => J(q()), () => {
    U(p, q() ?? ie);
  }), me(
    () => (g(de), g(h)),
    () => {
      U(_, g(de).width / g(h));
    }
  ), me(
    () => (g(de), g(p)),
    () => {
      U(x, g(de).height / g(p));
    }
  ), me(
    () => (g(_), g(x)),
    () => {
      U(k, Math.max(g(_), g(x)));
    }
  ), me(() => (g(k), g(h)), () => {
    U(v, g(k) * g(h));
  }), me(
    () => (g(k), g(p)),
    () => {
      U(C, g(k) * g(p));
    }
  ), me(() => g(k), () => {
    U(m, 5 * g(k));
  }), me(
    () => (g(de), g(v), g(m)),
    () => {
      U(b, g(de).x - (g(v) - g(de).width) / 2 - g(m));
    }
  ), me(
    () => (g(de), g(C), g(m)),
    () => {
      U(H, g(de).y - (g(C) - g(de).height) / 2 - g(m));
    }
  ), me(() => (g(v), g(m)), () => {
    U(E, g(v) + g(m) * 2);
  }), me(() => (g(C), g(m)), () => {
    U(V, g(C) + g(m) * 2);
  }), wt(), ze();
  const at = /* @__PURE__ */ be(() => ue() + (P() ? `;--xy-minimap-background-color-props:${P()}` : "")), ee = /* @__PURE__ */ be(() => Ht(["svelte-flow__minimap", ge()]));
  Ro(e, {
    get position() {
      return O();
    },
    get style() {
      return g(at);
    },
    get class() {
      return g(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (fe, ft) => {
      var nn = et(), pn = xe(nn);
      {
        var Oe = (ot) => {
          var Fe = T2();
          Ce(Fe, "aria-labelledby", oe);
          let Be;
          var it = F(Fe);
          {
            var rn = (kt) => {
              var Dt = N2();
              Ce(Dt, "id", oe);
              var wr = F(Dt, !0);
              Y(Dt), ke(() => dt(wr, A())), D(kt, Dt);
            };
            ye(it, (kt) => {
              A() && kt(rn);
            });
          }
          var Kt = B(it);
          Mt(Kt, 1, u, (kt) => kt.id, (kt, Dt) => {
            var wr = et();
            const st = /* @__PURE__ */ be(() => l().get(g(Dt).id));
            var is = xe(wr);
            {
              var to = (zt) => {
                const Fo = /* @__PURE__ */ be(() => rr(g(st))), Wo = /* @__PURE__ */ be(() => Ve == null ? void 0 : Ve(g(st))), Xo = /* @__PURE__ */ be(() => Le(g(st))), ss = /* @__PURE__ */ be(() => Re(g(st)));
                md(zt, ut(
                  {
                    get x() {
                      return g(st).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(st).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Fo),
                  {
                    get selected() {
                      return g(st).selected;
                    },
                    get color() {
                      return g(Wo);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(Xo);
                    },
                    get strokeWidth() {
                      return $();
                    },
                    shapeRendering: re,
                    get class() {
                      return g(ss);
                    }
                  }
                ));
              };
              ye(is, (zt) => {
                g(st) && yc(g(st)) && zt(to);
              });
            }
            D(kt, wr);
          });
          var eo = B(Kt);
          Y(Fe), xt(Fe, (kt, Dt) => _s == null ? void 0 : _s(kt, Dt), () => ({
            panZoom: c(),
            viewport: $e,
            getViewScale: He,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: te(),
            zoomStep: j(),
            pannable: X(),
            zoomable: Z()
          })), ke(() => {
            Ce(Fe, "width", g(h)), Ce(Fe, "height", g(p)), Ce(Fe, "viewBox", `${g(b) ?? ""} ${g(H) ?? ""} ${g(E) ?? ""} ${g(V) ?? ""}`), Be = gt(Fe, "", Be, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": M() ? M() * g(k) : void 0
            }), Ce(eo, "d", `M${g(b) - g(m)},${g(H) - g(m)}h${g(E) + g(m) * 2}v${g(V) + g(m) * 2}h${-g(E) - g(m) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), D(ot, Fe);
        };
        ye(pn, (ot) => {
          c() && ot(Oe);
        });
      }
      D(fe, nn);
    },
    $$slots: { default: !0 }
  });
  var Ie = ve({
    get position() {
      return O();
    },
    set position(fe) {
      O(fe), y();
    },
    get ariaLabel() {
      return A();
    },
    set ariaLabel(fe) {
      A(fe), y();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(fe) {
      R(fe), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(fe) {
      z(fe), y();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(fe) {
      I(fe), y();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(fe) {
      S(fe), y();
    },
    get nodeStrokeWidth() {
      return $();
    },
    set nodeStrokeWidth(fe) {
      $(fe), y();
    },
    get bgColor() {
      return P();
    },
    set bgColor(fe) {
      P(fe), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(fe) {
      N(fe), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(fe) {
      T(fe), y();
    },
    get maskStrokeWidth() {
      return M();
    },
    set maskStrokeWidth(fe) {
      M(fe), y();
    },
    get width() {
      return L();
    },
    set width(fe) {
      L(fe), y();
    },
    get height() {
      return q();
    },
    set height(fe) {
      q(fe), y();
    },
    get pannable() {
      return X();
    },
    set pannable(fe) {
      X(fe), y();
    },
    get zoomable() {
      return Z();
    },
    set zoomable(fe) {
      Z(fe), y();
    },
    get inversePan() {
      return te();
    },
    set inversePan(fe) {
      te(fe), y();
    },
    get zoomStep() {
      return j();
    },
    set zoomStep(fe) {
      j(fe), y();
    },
    get style() {
      return ue();
    },
    set style(fe) {
      ue(fe), y();
    },
    get class() {
      return ge();
    },
    set class(fe) {
      ge(fe), y();
    }
  });
  return r(), Ie;
}
ce(
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
const ql = (e) => $0(e);
function It() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: p, nodeOrigin: _, edgeLookup: x, connectionLookup: k } = Ge(), v = (b) => {
    var A, R;
    const H = K(p), E = ql(b) ? b : H.get(b.id), V = E.parentId ? D0(E.position, E.measured, E.parentId, H, K(_)) : E.position, O = {
      ...E,
      position: V,
      width: ((A = E.measured) == null ? void 0 : A.width) ?? E.width,
      height: ((R = E.measured) == null ? void 0 : R.height) ?? E.height
    };
    return qr(O);
  }, C = (b, H, E = { replace: !1 }) => {
    var A;
    const V = (A = K(p).get(b)) == null ? void 0 : A.internals.userNode;
    if (!V)
      return;
    const O = typeof H == "function" ? H(V) : H;
    E.replace ? d.update((R) => R.map((z) => z.id === b ? ql(O) ? O : { ...z, ...O } : z)) : (Object.assign(V, O), d.update((R) => R));
  }, m = (b) => K(p).get(b);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (b) => {
      var H;
      return (H = m(b)) == null ? void 0 : H.internals.userNode;
    },
    getNodes: (b) => b === void 0 ? K(d) : Yl(K(p), b),
    getEdge: (b) => K(x).get(b),
    getEdges: (b) => b === void 0 ? K(f) : Yl(K(x), b),
    setZoom: (b, H) => {
      const E = K(c);
      return E ? E.scaleTo(b, { duration: H == null ? void 0 : H.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (b, H) => {
      const E = K(i), V = K(c);
      return V ? (await V.setViewport({
        x: b.x ?? E.x,
        y: b.y ?? E.y,
        zoom: b.zoom ?? E.zoom
      }, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (b, H, E) => {
      const V = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : K(u), O = K(c);
      return O ? (await O.setViewport({
        x: K(s) / 2 - b * V,
        y: K(a) / 2 - H * V,
        zoom: V
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (b, H) => {
      const E = K(c);
      if (!E)
        return Promise.resolve(!1);
      const V = Ca(b, K(s), K(a), K(l), K(u), (H == null ? void 0 : H.padding) ?? 0.1);
      return await E.setViewport(V, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (b, H = !0, E) => {
      const V = El(b), O = V ? b : v(b);
      return O ? (E || K(d)).filter((A) => {
        const R = K(p).get(A.id);
        if (!R || !V && A.id === b.id)
          return !1;
        const z = qr(R), I = Eo(z, O);
        return H && I > 0 || I >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (b, H, E = !0) => {
      const O = El(b) ? b : v(b);
      if (!O)
        return !1;
      const A = Eo(O, H);
      return E && A > 0 || A >= O.width * O.height;
    },
    deleteElements: async ({ nodes: b = [], edges: H = [] }) => {
      const { nodes: E, edges: V } = await hc({
        nodesToRemove: b,
        edgesToRemove: H,
        nodes: K(d),
        edges: K(f),
        onBeforeDelete: K(r)
      });
      return E && d.update((O) => O.filter((A) => !E.some(({ id: R }) => R === A.id))), V && f.update((O) => O.filter((A) => !V.some(({ id: R }) => R === A.id))), {
        deletedNodes: E,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (b, H = { snapToGrid: !0 }) => {
      const E = K(h);
      if (!E)
        return b;
      const V = H.snapToGrid ? K(o) : !1, { x: O, y: A, zoom: R } = K(i), { x: z, y: I } = E.getBoundingClientRect(), S = {
        x: b.x - z,
        y: b.y - I
      };
      return Io(S, [O, A, R], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (b) => {
      const H = K(h);
      if (!H)
        return b;
      const { x: E, y: V, zoom: O } = K(i), { x: A, y: R } = H.getBoundingClientRect(), z = $i(b, [E, V, O]);
      return {
        x: z.x + A,
        y: z.y + R
      };
    },
    toObject: () => ({
      nodes: K(d).map((b) => ({
        ...b,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...b.position },
        data: { ...b.data }
      })),
      edges: K(f).map((b) => ({ ...b })),
      viewport: { ...K(i) }
    }),
    updateNode: C,
    updateNodeData: (b, H, E) => {
      var A;
      const V = (A = K(p).get(b)) == null ? void 0 : A.internals.userNode;
      if (!V)
        return;
      const O = typeof H == "function" ? H(V) : H;
      V.data = E != null && E.replace ? O : { ...V.data, ...O }, d.update((R) => R);
    },
    getNodesBounds: (b) => {
      const H = K(p), E = K(_);
      return E0(b, { nodeLookup: H, nodeOrigin: E });
    },
    getHandleConnections: ({ type: b, id: H, nodeId: E }) => {
      var V;
      return Array.from(((V = K(k).get(`${E}-${b}-${H ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var M2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function wd(e, t) {
  he(t, !1);
  const [n, r] = rt(), o = () => Q(C, "$nodes", n), i = () => Q(v, "$nodeLookup", n), s = () => Q(k, "$viewport", n), a = () => Q(x, "$domNode", n), l = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: v, nodes: C } = Ge(), { getNodesBounds: m } = It(), b = cr("svelteflow__node_id");
  let H = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae([]), V = p() !== void 0 ? p() : 10, O = f() !== void 0 ? f() : Me.Top, A = h() !== void 0 ? h() : "center";
  me(
    () => (o(), J(d()), i()),
    () => {
      o();
      const $ = Array.isArray(d()) ? d() : [d() || b];
      U(E, $.reduce(
        (P, N) => {
          const T = i().get(N);
          return T && P.push(T), P;
        },
        []
      ));
    }
  ), me(
    () => (g(E), s()),
    () => {
      const $ = m(g(E));
      $ && U(H, j0($, s(), O, V, A));
    }
  ), me(() => g(E), () => {
    U(l, g(E).length === 0 ? 1 : Math.max(...g(E).map(($) => ($.internals.z || 5) + 1)));
  }), me(() => o(), () => {
    U(u, o().filter(($) => $.selected).length);
  }), me(
    () => (J(_()), g(E), g(u)),
    () => {
      U(c, typeof _() == "boolean" ? _() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), wt(), ze();
  var R = et(), z = xe(R);
  {
    var I = ($) => {
      var P = M2();
      let N;
      var T = F(P);
      bt(T, t, "default", {}), Y(P), xt(P, (M, L) => Pr == null ? void 0 : Pr(M, L), () => ({ domNode: a() })), ke(
        (M) => {
          Ce(P, "data-id", M), N = gt(P, "", N, {
            position: "absolute",
            transform: g(H),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((M, L) => `${M}${L.id} `, "").trim()
        ],
        be
      ), D($, P);
    };
    ye(z, ($) => {
      a() && g(c) && g(E) && $(I);
    });
  }
  D(e, R);
  var S = ve({
    get nodeId() {
      return d();
    },
    set nodeId($) {
      d($), y();
    },
    get position() {
      return f();
    },
    set position($) {
      f($), y();
    },
    get align() {
      return h();
    },
    set align($) {
      h($), y();
    },
    get offset() {
      return p();
    },
    set offset($) {
      p($), y();
    },
    get isVisible() {
      return _();
    },
    set isVisible($) {
      _($), y();
    }
  });
  return r(), S;
}
ce(
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
  const { nodes: t, nodeLookup: n } = Ge();
  let r = [], o = !0;
  return Kn([t, n], ([, i], s) => {
    var c;
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = (c = i.get(d)) == null ? void 0 : c.internals.userNode;
      f && a.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!rp(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Fl = "tinyflow-component";
class Jw {
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
const H2 = () => {
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
}, ai = H2();
var D2 = /* @__PURE__ */ ne("<button><!></button>");
function Ke(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = D2();
  let i;
  var s = F(o);
  return dr(s, () => n() ?? pt), Y(o), ke(() => i = Xt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), ve({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ce(Ke, { children: {} }, [], [], !0);
var V2 = /* @__PURE__ */ ne("<input>");
function _d(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = V2();
  Zn(r);
  let o;
  ke(() => o = Xt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ve();
}
ce(_d, {}, [], [], !0);
var A2 = /* @__PURE__ */ ne('<div><input type="hidden"> <!> <!></div>');
const O2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function xd(e, t) {
  he(t, !0), Qe(e, O2);
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
  var l = A2();
  let u;
  var c = F(l);
  Zn(c);
  var d = B(c, 2);
  ht(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = B(d, 2);
  return Ke(f, {
    onclick: (h) => {
      var p;
      (p = s()) == null || p(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, p) => {
      Ae();
      var _ = qe();
      ke(() => dt(_, i())), D(h, _);
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
  }), D(e, l), ve({
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
var L2 = /* @__PURE__ */ ne("<input>");
function ht(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = L2();
  Zn(r);
  let o;
  ke(() => o = Xt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ve();
}
ce(ht, {}, [], [], !0);
var I2 = /* @__PURE__ */ ne("<textarea></textarea>");
function yt(e, t) {
  he(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = I2();
  w1(o);
  let i;
  return ke(() => i = Xt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), ve({
    get value() {
      return n();
    },
    set value(s) {
      n(s), y();
    }
  });
}
ce(yt, { value: {} }, [], [], !0);
var z2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), R2 = /* @__PURE__ */ ne("<div></div>");
function bd(e, t) {
  const n = lt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = lt(n, ["items", "onChange", "activeIndex"]);
  he(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  ze();
  var l = R2();
  let u;
  return Mt(l, 5, o, Lr, (c, d, f) => {
    var h = z2();
    Ce(h, "tabindex", f), h.__click = () => a(g(d), f), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(d), f));
    };
    var p = F(h);
    {
      var _ = (k) => {
        var v = qe();
        ke(() => dt(v, g(d).label)), D(k, v);
      }, x = (k) => {
        var v = et(), C = xe(v);
        dr(C, () => g(d).label ?? pt), D(k, v);
      };
      ye(p, (k) => {
        typeof g(d).label == "string" ? k(_) : k(x, !1);
      });
    }
    Y(h), ke(() => Ct(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(c, h);
  }), Y(l), ke(() => u = Xt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), ve({
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
ce(bd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var B2 = (e, t, n) => t(g(n)), q2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Y2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), F2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), W2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), X2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Z2 = /* @__PURE__ */ ne("<div></div>");
const K2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Cd(e, t) {
  he(t, !0), Qe(e, K2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => sn([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = Z2();
  return Mt(s, 21, n, Lr, (a, l, u) => {
    var c = X2(), d = F(c);
    Ce(d, "tabindex", u), d.__click = [B2, i, l], d.__keydown = [q2, i, l];
    var f = F(d);
    {
      var h = (m) => {
        var b = Y2(), H = F(b);
        Wn(H, {
          get target() {
            return g(l).icon;
          }
        }), Y(b), D(m, b);
      };
      ye(f, (m) => {
        g(l).icon && m(h);
      });
    }
    var p = B(f, 2);
    Wn(p, {
      get target() {
        return g(l).title;
      }
    });
    var _ = B(p, 2);
    Y(d);
    var x = B(d, 2);
    {
      var k = (m) => {
        var b = F2(), H = F(b);
        Wn(H, {
          get target() {
            return g(l).description;
          }
        }), Y(b), D(m, b);
      };
      ye(x, (m) => {
        g(l).description && m(k);
      });
    }
    var v = B(x, 2);
    {
      var C = (m) => {
        var b = W2(), H = F(b);
        Wn(H, {
          get target() {
            return g(l).content;
          }
        }), Y(b), D(m, b);
      };
      ye(v, (m) => {
        o().includes(g(l).key) && m(C);
      });
    }
    Y(c), ke((m) => Ct(_, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(a, c);
  }), Y(s), ke(() => {
    gt(s, t.style), Ct(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, s), ve({
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
ce(Cd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  he(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = xe(r);
  {
    var i = (a) => {
      var l = et(), u = xe(l);
      dr(u, () => n() ?? pt), D(a, l);
    }, s = (a) => {
      var l = et(), u = xe(l);
      fa(u, n), D(a, l);
    };
    ye(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return D(e, r), ve({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ce(Wn, { target: {} }, [], [], !0);
var j2 = (e, t, n) => t(g(n)), G2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), U2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), J2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Q2 = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), em = /* @__PURE__ */ ne("<!> <!>", 1), tm = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), nm = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), rm = /* @__PURE__ */ ne("<div><!></div>");
function en(e, t) {
  he(t, !0);
  const n = (v, C = pt) => {
    var m = et(), b = xe(m);
    Mt(b, 19, C, (H, E) => `${E}_${H.value}`, (H, E) => {
      var V = J2(), O = xe(V);
      O.__click = [j2, p, E];
      var A = F(O), R = F(A);
      {
        var z = (P) => {
          var N = G2();
          D(P, N);
        };
        ye(R, (P) => {
          g(E).children && g(E).children.length > 0 && P(z);
        });
      }
      Y(A);
      var I = B(A, 2);
      Wn(I, {
        get target() {
          return g(E).label;
        }
      }), Y(O);
      var S = B(O, 2);
      {
        var $ = (P) => {
          var N = U2(), T = F(N);
          n(T, () => g(E).children), Y(N), D(P, N);
        };
        ye(S, (P) => {
          g(E).children && g(E).children.length > 0 && (a() || u().includes(g(E).value)) && P($);
        });
      }
      D(H, V);
    }), D(v, m);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), c = w(t, "placeholder", 7), d = /* @__PURE__ */ _t(t, [
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
  ]), f = /* @__PURE__ */ Te(() => {
    const v = [], C = (m) => {
      for (let b of m)
        i().length > 0 ? i().includes(b.value) && v.push(b) : s().includes(b.value) && v.push(b), b.children && b.children.length > 0 && C(b.children);
    };
    return C(r()), v;
  }), h;
  function p(v) {
    var C;
    h == null || h.hide(), (C = o()) == null || C(v);
  }
  var _ = rm();
  let x;
  var k = F(_);
  return kn(
    Qr(k, {
      floating: (C) => {
        var m = Q2(), b = F(m);
        n(b, r), Y(m), D(C, m);
      },
      children: (C, m) => {
        var b = nm();
        let H;
        var E = F(b);
        Mt(
          E,
          23,
          () => g(f),
          (V, O) => `${O}_${V.value}`,
          (V, O, A) => {
            var R = et(), z = xe(R);
            {
              var I = ($) => {
                var P = et(), N = xe(P);
                {
                  var T = (M) => {
                    Wn(M, {
                      get target() {
                        return g(O).label;
                      }
                    });
                  };
                  ye(N, (M) => {
                    g(A) === 0 && M(T);
                  });
                }
                D($, P);
              }, S = ($) => {
                var P = em(), N = xe(P);
                Wn(N, {
                  get target() {
                    return g(O).label;
                  }
                });
                var T = B(N, 2);
                {
                  var M = (L) => {
                    var q = qe(",");
                    D(L, q);
                  };
                  ye(T, (L) => {
                    g(A) < g(f).length - 1 && L(M);
                  });
                }
                D($, P);
              };
              ye(z, ($) => {
                l() ? $(S, !1) : $(I);
              });
            }
            D(V, R);
          },
          (V) => {
            var O = tm(), A = F(O, !0);
            Y(O), ke(() => dt(A, c())), D(V, O);
          }
        ), Y(E), Ae(2), Y(b), ke(() => H = Xt(b, H, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), D(C, b);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), Y(_), ke(() => x = Xt(_, x, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), D(e, _), ve({
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
  en,
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
}), om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, im = {
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
function sm(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Na(e), i = Pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Mi(s)), [s, Mi(s)];
}
function am(e) {
  const t = Mi(e);
  return [Zs(e), t, Zs(t)];
}
function Zs(e) {
  return e.replace(/start|end/g, (t) => im[t]);
}
function lm(e, t, n) {
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
function um(e, t, n, r) {
  const o = qo(e);
  let i = lm(vr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Zs)))), i;
}
function Mi(e) {
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
function $d(e) {
  return typeof e != "number" ? cm(e) : {
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
  const i = ur(t), s = Na(t), a = Pa(s), l = vr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
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
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const dm = async (e, t, n) => {
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
    y: d
  } = Wl(u, r, l), f = r, h = {}, p = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: x,
      fn: k
    } = a[_], {
      x: v,
      y: C,
      data: m,
      reset: b
    } = await k({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = v ?? c, d = C ?? d, h = {
      ...h,
      [x]: {
        ...h[x],
        ...m
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (u = b.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: c,
      y: d
    } = Wl(u, f, l)), _ = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
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
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Bo(t, e), p = $d(h), x = a[f ? d === "floating" ? "reference" : "floating" : d], k = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), v = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: v,
    offsetParent: C,
    strategy: l
  }) : v);
  return {
    top: (k.top - b.top + p.top) / m.y,
    bottom: (b.bottom - k.bottom + p.bottom) / m.y,
    left: (k.left - b.left + p.left) / m.x,
    right: (b.right - k.right + p.right) / m.x
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
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Bo(e, t) || {};
    if (u == null)
      return {};
    const d = $d(c), f = {
      x: n,
      y: r
    }, h = Na(o), p = Pa(h), _ = await s.getDimensions(u), x = h === "y", k = x ? "top" : "left", v = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[h] - f[h] - i.floating[p], b = f[h] - i.reference[h], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let E = H ? H[C] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(H))) && (E = a.floating[C] || i.floating[p]);
    const V = m / 2 - b / 2, O = E / 2 - _[p] / 2 - 1, A = Po(d[k], O), R = Po(d[v], O), z = A, I = E - _[p] - R, S = E / 2 - _[p] / 2 + V, $ = Xs(z, S, I), P = !l.arrow && qo(o) != null && S !== $ && i.reference[p] / 2 - (S < z ? A : R) - _[p] / 2 < 0, N = P ? S < z ? S - z : S - I : 0;
    return {
      [h]: f[h] + N,
      data: {
        [h]: $,
        centerOffset: S - $ - N,
        ...P && {
          alignmentOffset: N
        }
      },
      reset: P
    };
  }
}), gm = function(e) {
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
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: _ = !0,
        ...x
      } = Bo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = vr(o), v = ur(a), C = vr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = f || (C || !_ ? [Mi(a)] : am(a)), H = p !== "none";
      !f && H && b.push(...um(a, _, p, m));
      const E = [a, ...b], V = await Ed(t, x), O = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(V[k]), d) {
        const $ = sm(o, s, m);
        O.push(V[$[0]], V[$[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: O
      }], !O.every(($) => $ <= 0)) {
        var R, z;
        const $ = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, P = E[$];
        if (P) {
          var I;
          const T = d === "alignment" ? v !== ur(P) : !1, M = ((I = A[0]) == null ? void 0 : I.overflows[0]) > 0;
          if (!T || M)
            return {
              data: {
                index: $,
                overflows: A
              },
              reset: {
                placement: P
              }
            };
        }
        let N = (z = A.filter((T) => T.overflows[0] <= 0).sort((T, M) => T.overflows[1] - M.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var S;
              const T = (S = A.filter((M) => {
                if (H) {
                  const L = ur(M.placement);
                  return L === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((L) => L > 0).reduce((L, q) => L + q, 0)]).sort((M, L) => M[1] - L[1])[0]) == null ? void 0 : S[0];
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
async function hm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = vr(n), a = qo(n), l = ur(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, d = Bo(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
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
  return a && typeof p == "number" && (h = a === "end" ? p * -1 : p), l ? {
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const vm = function(e) {
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
      } = t, l = await hm(t, e);
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
        crossAxis: s = !1,
        limiter: a = {
          fn: (x) => {
            let {
              x: k,
              y: v
            } = x;
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
      }, c = await Ed(t, l), d = ur(vr(o)), f = kd(d);
      let h = u[f], p = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = h + c[x], C = h - c[k];
        h = Xs(v, h, C);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = p + c[x], C = p - c[k];
        p = Xs(v, p, C);
      }
      const _ = a.fn({
        ...t,
        [f]: h,
        [d]: p
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [f]: i,
            [d]: s
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
function mm(e) {
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
function ym(e) {
  let t = er(e);
  for (; $n(t) && !Fr(t); ) {
    if (Ta(t))
      return t;
    if (ns(t))
      return null;
    t = er(t);
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
function er(e) {
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
  const t = er(e);
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
const wm = /* @__PURE__ */ wn(0);
function Hd(e) {
  const t = Wt(e);
  return !Ma() || !t.visualViewport ? wm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function _m(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function No(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Md(e);
  let s = wn(1);
  t && (r ? dn(r) && (s = Mr(r)) : s = Mr(e));
  const a = _m(i, n, r) ? Hd(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Wt(i), h = r && dn(r) ? Wt(r) : r;
    let p = f, _ = Ks(p);
    for (; _ && r && h !== p; ) {
      const x = Mr(_), k = _.getBoundingClientRect(), v = fn(_), C = k.left + (_.clientLeft + parseFloat(v.paddingLeft)) * x.x, m = k.top + (_.clientTop + parseFloat(v.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += m, p = Wt(_), _ = Ks(p);
    }
  }
  return Hi({
    width: c,
    height: d,
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
function xm(e) {
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
  const c = wn(0), d = $n(r);
  if ((d || !d && !i) && ((Jr(r) !== "body" || Yo(s)) && (l = rs(r)), $n(r))) {
    const h = No(r);
    u = Mr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? Dd(s, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function bm(e) {
  return Array.from(e.getClientRects());
}
function Cm(e) {
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
function km(e, t) {
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
function $m(e, t) {
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
    r = km(e, n);
  else if (t === "document")
    r = Cm(zn(e));
  else if (dn(t))
    r = $m(t, n);
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
  const n = er(e);
  return n === t || !dn(n) || Fr(n) ? !1 : fn(n).position === "fixed" || Vd(n, t);
}
function Em(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nd(e, []).filter((a) => dn(a) && Jr(a) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let s = i ? er(e) : e;
  for (; dn(s) && !Fr(s); ) {
    const a = fn(s), l = Ta(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yo(s) && !l && Vd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = er(s);
  }
  return t.set(e, r), r;
}
function Sm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ns(t) ? [] : Em(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const d = Zl(t, c, o);
    return u.top = Tr(d.top, u.top), u.right = Po(d.right, u.right), u.bottom = Po(d.bottom, u.bottom), u.left = Tr(d.left, u.left), u;
  }, Zl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pm(e) {
  const {
    width: t,
    height: n
  } = Td(e);
  return {
    width: t,
    height: n
  };
}
function Nm(e, t, n) {
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
  const c = o && !r && !i ? Dd(o, a) : wn(0), d = s.left + a.scrollLeft - l.x - c.x, f = s.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
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
    let o = er(e);
    for (; o && !Fr(o); ) {
      if (dn(o) && !bs(o))
        return o;
      o = er(o);
    }
    return n;
  }
  let r = Kl(e, t);
  for (; r && mm(r) && bs(r); )
    r = Kl(r, t);
  return r && Fr(r) && bs(r) && !Ta(r) ? n : r || ym(e) || n;
}
const Tm = async function(e) {
  const t = this.getOffsetParent || Ad, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Mm(e) {
  return fn(e).direction === "rtl";
}
const Hm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xm,
  getDocumentElement: zn,
  getClippingRect: Sm,
  getOffsetParent: Ad,
  getElementRects: Tm,
  getClientRects: bm,
  getDimensions: Pm,
  getScale: Mr,
  isElement: dn,
  isRTL: Mm
}, Dm = vm, Vm = pm, Am = gm, Om = fm, Lm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Hm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return dm(e, t, {
    ...o,
    platform: i
  });
}, Im = ({
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
  function d() {
    Lm(e, u, {
      placement: r,
      middleware: [
        Dm(o),
        // 手动偏移配置
        Am(i),
        //自动翻转
        Vm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Om({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: C, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: b, y: H } = m.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: b != null ? `${b}px` : "",
          top: H != null ? `${H}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function _(k) {
    k.stopPropagation(), f ? p() : h();
  }
  function x(k) {
    u.contains(k.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, _);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, _);
      }), document.removeEventListener("click", x);
    },
    hide() {
      p();
    },
    isVisible() {
      return f;
    }
  };
};
var zm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Qr(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  tn(() => (a = Im({
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
  var u = zm(), c = F(u), d = F(c);
  dr(d, n), Y(c), kn(c, (p) => i = p, () => i);
  var f = B(c, 2), h = F(f);
  return dr(h, r), Y(f), kn(f, (p) => s = p, () => s), Y(u), D(e, u), ve({
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
function Je(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = et(), a = xe(s);
  return P1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = Xt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = xe(d);
    dr(f, () => n() ?? pt), D(u, d);
  }), D(e, s), ve({
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
ce(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Rm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Bm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function os(e, t) {
  he(t, !0), Qe(e, Bm);
  const n = /* @__PURE__ */ _t(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ke(e, ut(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Rm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ve();
}
ce(os, {}, [], [], !0);
const qm = () => {
  const e = Ge();
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
}, Ym = () => {
  const { nodes: e, nodeLookup: t } = Ge();
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
}, tr = () => cr("tinyflow_options");
function mt() {
  return cr("svelteflow__node_id");
}
var Fm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Wm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Xm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Zm = /* @__PURE__ */ ne('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Km = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, jm = /* @__PURE__ */ ne('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), Gm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Um = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Jm = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Qm = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function vn(e, t) {
  he(t, !0), Qe(e, Qm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "allowSetting", 7, !0), d = w(t, "allowSettingOfCondition", 7, !0), f = w(t, "showSourceHandle", 7, !0), h = w(t, "showTargetHandle", 7, !0), p = w(t, "onCollapse", 7);
  let _ = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: k } = It(), v = /* @__PURE__ */ Te(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: C } = qm(), { copyNode: m } = Ym(), b = tr(), H = () => {
    var M;
    (M = b.onNodeExecute) == null || M.call(b, k(r()));
  };
  let E = mt();
  var V = Jm(), O = xe(V);
  {
    var A = (M) => {
      wd(M, {
        get position() {
          return Me.Top;
        },
        align: "end",
        children: (L, q) => {
          var X = Um(), Z = F(X);
          {
            var te = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: ($e, le) => {
                  var se = Fm();
                  D($e, se);
                },
                $$slots: { default: !0 }
              });
            };
            ye(Z, (we) => {
              u() && we(te);
            });
          }
          var j = B(Z, 2);
          {
            var ue = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: ($e, le) => {
                  var se = Wm();
                  D($e, se);
                },
                $$slots: { default: !0 }
              });
            };
            ye(j, (we) => {
              l() && we(ue);
            });
          }
          var ge = B(j, 2);
          {
            var _e = (we) => {
              Ke(we, {
                class: "tf-node-toolbar-item",
                onclick: H,
                children: ($e, le) => {
                  var se = Xm();
                  D($e, se);
                },
                $$slots: { default: !0 }
              });
            };
            ye(ge, (we) => {
              a() && we(_e);
            });
          }
          var ie = B(ge, 2);
          {
            var Ne = (we) => {
              Qr(we, {
                placement: "bottom",
                floating: (le) => {
                  var se = jm(), pe = F(se), G = B(F(pe));
                  ht(G, {
                    style: "width: 100%;",
                    onchange: (de) => {
                      const He = de.target.value;
                      x(E, { title: He });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(pe);
                  var Se = B(pe, 2), Ve = B(F(Se));
                  yt(Ve, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (de) => {
                      const He = de.target.value;
                      x(E, { description: He });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(Se);
                  var Le = B(Se, 2);
                  {
                    var Re = (de) => {
                      var He = Zm(), at = B(F(He));
                      yt(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ee) => {
                          const Ie = ee.target.value;
                          x(E, { condition: Ie });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(He), D(de, He);
                    };
                    ye(Le, (de) => {
                      d() && de(Re);
                    });
                  }
                  var re = B(Le, 2), oe = B(F(re), 2);
                  Zn(oe), oe.__change = [Km, x, E], Y(re), Y(se), ke(() => H1(oe, !!n().async)), D(le, se);
                },
                children: (le, se) => {
                  Ke(le, {
                    class: "tf-node-toolbar-item",
                    children: (pe, G) => {
                      var Se = Gm();
                      D(pe, Se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ye(ie, (we) => {
              c() && we(Ne);
            });
          }
          Y(X), D(L, X);
        },
        $$slots: { default: !0 }
      });
    };
    ye(O, (M) => {
      (a() || l() || u()) && M(A);
    });
  }
  var R = B(O, 2), z = B(F(R), 2), I = F(z);
  Cd(I, {
    get items() {
      return g(v);
    },
    activeKeys: _,
    onChange: (M, L) => {
      var q;
      x(r(), { expand: L == null ? void 0 : L.includes("key") }), (q = p()) == null || q(L != null && L.includes("key") ? "key" : "");
    }
  }), Y(z), Y(R);
  var S = B(R, 2);
  {
    var $ = (M) => {
      Qn(M, {
        type: "target",
        get position() {
          return Me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ye(S, (M) => {
      h() && M($);
    });
  }
  var P = B(S, 2);
  {
    var N = (M) => {
      Qn(M, {
        type: "source",
        get position() {
          return Me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ye(P, (M) => {
      f() && M(N);
    });
  }
  var T = B(P, 2);
  return dr(T, () => i() ?? pt), D(e, V), ve({
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
      return d();
    },
    set allowSettingOfCondition(M = !0) {
      d(M), y();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), y();
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
Ur(["change"]);
ce(
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
], ey = [
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
var ty = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ny = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ry = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const oy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  he(t, !0), Qe(e, oy);
  const [n, r] = rt(), o = () => Q(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = mt(), l = /* @__PURE__ */ Te(() => yr(a)), u = /* @__PURE__ */ Te(() => {
    var O, A;
    return {
      ...i(),
      ...(A = (O = o()) == null ? void 0 : O.data) == null ? void 0 : A.parameters[s()]
    };
  });
  const { updateNodeData: c } = It(), d = (O, A) => {
    c(a, (R) => {
      let z = R.data.parameters;
      return z[s()][O] = A, { parameters: z };
    });
  }, f = (O) => {
    const A = O.target.value;
    d("name", A);
  }, h = (O) => {
    const A = O.target.checked;
    d("required", A);
  }, p = (O) => {
    const A = O.value;
    A && d("dataType", A);
  };
  let _;
  const x = () => {
    c(a, (O) => {
      let A = O.data.parameters;
      return A.splice(s(), 1), { parameters: [...A] };
    }), _ == null || _.hide();
  };
  var k = ry(), v = xe(k), C = F(v);
  ht(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Y(v);
  var m = B(v, 2), b = F(m);
  _d(b, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), Y(m);
  var H = B(m, 2), E = F(H);
  kn(
    Qr(E, {
      placement: "bottom",
      floating: (A) => {
        var R = ty(), z = F(R), I = B(F(z));
        const S = /* @__PURE__ */ Te(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        en(I, {
          items: Od,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return g(S);
          }
        }), Y(z);
        var $ = B(z, 2), P = B(F($));
        yt(P, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (q) => {
            const X = q.target.value;
            d("defaultValue", X);
          }
        }), Y($);
        var N = B($, 2), T = B(F(N));
        yt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (q) => {
            const X = q.target.value;
            d("description", X);
          }
        }), Y(N);
        var M = B(N, 2), L = F(M);
        Ke(L, {
          onclick: x,
          children: (q, X) => {
            Ae();
            var Z = qe("删除");
            D(q, Z);
          },
          $$slots: { default: !0 }
        }), Y(M), Y(R), D(A, R);
      },
      children: (A, R) => {
        Ke(A, {
          class: "input-btn-more",
          children: (z, I) => {
            var S = ny();
            D(z, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => _ = A,
    () => _
  ), Y(H), D(e, k);
  var V = ve({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), y();
    },
    get index() {
      return s();
    },
    set index(O) {
      s(O), y();
    }
  });
  return r(), V;
}
ce(Ld, { parameter: {}, index: {} }, [], [], !0);
var iy = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), sy = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), ay = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ly = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Id(e, t) {
  he(t, !0), Qe(e, ly);
  const [n, r] = rt(), o = () => Q(g(s), "$node", n);
  let i = mt(), s = /* @__PURE__ */ Te(() => yr(i)), a = /* @__PURE__ */ Te(() => {
    var f, h;
    return [...((h = (f = o()) == null ? void 0 : f.data) == null ? void 0 : h.parameters) || []];
  });
  var l = ay(), u = F(l);
  {
    var c = (f) => {
      var h = iy();
      Ae(4), D(f, h);
    };
    ye(u, (f) => {
      g(a).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Mt(
    d,
    19,
    () => g(a),
    (f) => f.id,
    (f, h, p) => {
      Ld(f, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var h = sy();
      D(f, h);
    }
  ), Y(l), D(e, l), ve(), r();
}
ce(Id, {}, [], [], !0);
const Di = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Wr()), Di(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = It();
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
var uy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), cy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dy = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const fy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function zd(e, t) {
  he(t, !0), Qe(e, fy);
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
      var l = uy();
      D(a, l);
    },
    children: (a, l) => {
      var u = dy(), c = xe(u), d = F(c);
      Je(d, {
        level: 3,
        children: (p, _) => {
          Ae();
          var x = qe("输入参数");
          D(p, x);
        },
        $$slots: { default: !0 }
      });
      var f = B(d, 2);
      Ke(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, _) => {
          var x = cy();
          D(p, x);
        },
        $$slots: { default: !0 }
      }), Y(c);
      var h = B(c, 2);
      Id(h, {}), D(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(zd, { data: {} }, [], [], !0);
const Rd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Rd(e, r.source, n));
}, jl = (e, t) => {
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
}, gy = (e = !1) => {
  const t = mt(), n = yr(t), { nodes: r, edges: o } = Ge();
  return Kn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = jl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Rd(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = jl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var hy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), vy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const py = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Bd(e, t) {
  he(t, !0), Qe(e, py);
  const [n, r] = rt(), o = () => Q(g(c), "$node", n), i = () => Q(C, "$selectItems", n);
  tn(() => {
    g(d).refType || x({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = mt(), c = /* @__PURE__ */ Te(() => yr(u)), d = /* @__PURE__ */ Te(() => {
    var $;
    return {
      ...s(),
      ...($ = o()) == null ? void 0 : $.data[l()][a()]
    };
  });
  const { updateNodeData: f } = It(), h = ($, P) => {
    f(u, (N) => {
      let T = N.data[l()];
      return T[a()] = { ...T[a()], [$]: P }, { [l()]: T };
    });
  }, p = ($, P) => {
    const N = P.target.value;
    h($, N);
  }, _ = ($) => {
    const P = $.value;
    h("ref", P);
  }, x = ($) => {
    const P = $.value;
    h("refType", P);
  };
  let k;
  const v = () => {
    f(u, ($) => {
      let P = $.data[l()];
      return P.splice(a(), 1), { [l()]: [...P] };
    }), k == null || k.hide();
  }, C = gy();
  var m = vy(), b = xe(m), H = F(b);
  const E = /* @__PURE__ */ Te(() => g(d).nameDisabled === !0);
  ht(H, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return g(E);
    },
    oninput: ($) => p("name", $)
  }), Y(b);
  var V = B(b, 2), O = F(V);
  {
    var A = ($) => {
      ht($, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => p("value", P)
      });
    }, R = ($, P) => {
      {
        var N = (T) => {
          const M = /* @__PURE__ */ Te(() => [g(d).ref]);
          en(T, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(M);
            },
            expandAll: !0,
            onSelect: _
          });
        };
        ye(
          $,
          (T) => {
            g(d).refType !== "input" && T(N);
          },
          P
        );
      }
    };
    ye(O, ($) => {
      g(d).refType === "fixed" ? $(A) : $(R, !1);
    });
  }
  Y(V);
  var z = B(V, 2), I = F(z);
  kn(
    Qr(I, {
      placement: "bottom",
      floating: (P) => {
        var N = hy(), T = F(N), M = B(F(T));
        const L = /* @__PURE__ */ Te(() => g(d).refType ? [g(d).refType] : []);
        en(M, {
          items: ey,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: x
        }), Y(T);
        var q = B(T, 2), X = B(F(q));
        yt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ge) => {
            p("defaultValue", ge);
          },
          get value() {
            return g(d).defaultValue;
          }
        }), Y(q);
        var Z = B(q, 2), te = B(F(Z));
        yt(te, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ge) => {
            p("description", ge);
          },
          get value() {
            return g(d).description;
          }
        }), Y(Z);
        var j = B(Z, 2), ue = F(j);
        Ke(ue, {
          onclick: v,
          children: (ge, _e) => {
            Ae();
            var ie = qe("删除");
            D(ge, ie);
          },
          $$slots: { default: !0 }
        }), Y(j), Y(N), D(P, N);
      },
      children: (P, N) => {
        os(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => k = P,
    () => k
  ), Y(z), D(e, m);
  var S = ve({
    get parameter() {
      return s();
    },
    set parameter($) {
      s($), y();
    },
    get index() {
      return a();
    },
    set index($) {
      a($), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName($) {
      l($), y();
    }
  });
  return r(), S;
}
ce(Bd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var my = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), yy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), wy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const _y = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Yt(e, t) {
  he(t, !0), Qe(e, _y);
  const [n, r] = rt(), o = () => Q(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = mt(), l = /* @__PURE__ */ Te(() => yr(a)), u = /* @__PURE__ */ Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = wy(), d = F(c);
  {
    var f = (_) => {
      var x = my();
      Ae(4), D(_, x);
    };
    ye(d, (_) => {
      g(u).length !== 0 && _(f);
    });
  }
  var h = B(d, 2);
  Mt(
    h,
    19,
    () => g(u),
    (_) => _.id,
    (_, x, k) => {
      Bd(_, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(k);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (_) => {
      var x = yy(), k = F(x, !0);
      Y(x), ke(() => dt(k, i())), D(_, x);
    }
  ), Y(c), D(e, c);
  var p = ve({
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
  return r(), p;
}
ce(Yt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var xy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), by = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const ky = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  he(t, !0), Qe(e, ky);
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
        var l = xy();
        D(a, l);
      },
      children: (a, l) => {
        var u = Cy(), c = xe(u), d = F(c);
        Je(d, {
          level: 3,
          children: (p, _) => {
            Ae();
            var x = qe("输出参数");
            D(p, x);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        Ke(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, _) => {
            var x = by();
            D(p, x);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var h = B(c, 2);
        Yt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(qd, { data: {} }, [], [], !0);
const Cs = (e) => JSON.parse(JSON.stringify(e));
var $y = /* @__PURE__ */ Pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ey = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), Sy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Py = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ny = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Yd(e, t) {
  he(t, !0), Qe(e, Ny);
  const [n, r] = rt(), o = () => Q(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
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
  const { updateNodeData: d } = It(), f = (N, T) => {
    d(l, (M) => {
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
    f(N, M);
  }, p = (N) => {
    const T = N.value;
    f("dataType", T);
  };
  let _;
  const x = () => {
    d(l, (N) => {
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
    }), _ == null || _.hide();
  }, k = () => {
    d(l, (N) => {
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
  var v = Py(), C = xe(v), m = F(C);
  {
    var b = (N) => {
      var T = et(), M = xe(T);
      Mt(M, 17, s, Lr, (L, q) => {
        Ae();
        var X = qe(" ");
        D(L, X);
      }), D(N, T);
    };
    ye(m, (N) => {
      s().length > 1 && N(b);
    });
  }
  var H = B(m, 2);
  const E = /* @__PURE__ */ Te(() => g(c).nameDisabled === !0);
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
      return g(E);
    }
  }), Y(C);
  var V = B(C, 2), O = F(V);
  const A = /* @__PURE__ */ Te(() => g(c).dataType ? [g(c).dataType] : []), R = /* @__PURE__ */ Te(() => g(c).dataTypeDisabled === !0);
  en(O, {
    items: Od,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(A);
    },
    get disabled() {
      return g(R);
    },
    onSelect: p
  });
  var z = B(O, 2);
  {
    var I = (N) => {
      Ke(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (T, M) => {
          var L = $y();
          D(T, L);
        },
        $$slots: { default: !0 }
      });
    };
    ye(z, (N) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && N(I);
    });
  }
  Y(V);
  var S = B(V, 2), $ = F(S);
  kn(
    Qr($, {
      placement: "bottom",
      floating: (T) => {
        var M = Sy(), L = F(M), q = B(F(L));
        const X = /* @__PURE__ */ Te(() => g(c).defaultValue || "");
        yt(q, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(X);
          },
          onchange: (_e) => {
            h("defaultValue", _e);
          }
        }), Y(L);
        var Z = B(L, 2), te = B(F(Z));
        const j = /* @__PURE__ */ Te(() => g(c).description || "");
        yt(te, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(j);
          },
          onchange: (_e) => {
            h("description", _e);
          }
        }), Y(Z);
        var ue = B(Z, 2);
        {
          var ge = (_e) => {
            var ie = Ey(), Ne = F(ie);
            Ke(Ne, {
              onclick: x,
              children: (we, $e) => {
                Ae();
                var le = qe("删除");
                D(we, le);
              },
              $$slots: { default: !0 }
            }), Y(ie), D(_e, ie);
          };
          ye(ue, (_e) => {
            g(c).deleteDisabled !== !0 && _e(ge);
          });
        }
        Y(M), D(T, M);
      },
      children: (T, M) => {
        os(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => _ = T,
    () => _
  ), Y(S), D(e, v);
  var P = ve({
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
  return r(), P;
}
ce(Yd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ty = /* @__PURE__ */ ne("<!> <!>", 1), My = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Hy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Dy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  he(t, !0), Qe(e, Vy);
  const [n, r] = rt(), o = () => Q(g(u), "$node", n), i = (x, k = pt, v = pt) => {
    var C = et(), m = xe(C);
    Mt(
      m,
      19,
      k,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, H, E) => {
        var V = Ty(), O = xe(V);
        const A = /* @__PURE__ */ Te(() => [...v(), g(E)]);
        Yd(O, {
          get parameter() {
            return g(H);
          },
          get position() {
            return g(A);
          },
          get dataKeyName() {
            return a();
          }
        });
        var R = B(O, 2);
        {
          var z = (I) => {
            var S = /* @__PURE__ */ be(() => [...v(), g(E)]);
            i(I, () => g(H).children, () => g(S));
          };
          ye(R, (I) => {
            g(H).children && I(z);
          });
        }
        D(b, V);
      },
      (b) => {
        var H = et(), E = xe(H);
        {
          var V = (O) => {
            var A = My(), R = F(A, !0);
            Y(A), ke(() => dt(R, s())), D(O, A);
          };
          ye(E, (O) => {
            v().length === 0 && O(V);
          });
        }
        D(b, H);
      }
    ), D(x, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Te(() => yr(l)), c = /* @__PURE__ */ Te(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = Dy(), f = F(d);
  {
    var h = (x) => {
      var k = Hy();
      Ae(4), D(x, k);
    };
    ye(f, (x) => {
      g(c).length !== 0 && x(h);
    });
  }
  var p = B(f, 2);
  i(p, () => g(c) || [], () => []), Y(d), D(e, d);
  var _ = ve({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(x = "无输出参数") {
      s(x), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "outputDefs") {
      a(x), y();
    }
  });
  return r(), _;
}
ce(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ay = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Oy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Iy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), zy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ry = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Fd(e, t) {
  he(t, !0), Qe(e, qy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = tr();
  let a = /* @__PURE__ */ St(sn([]));
  tn(async () => {
    var d, f;
    const c = await ((f = (d = s.provider) == null ? void 0 : d.llm) == null ? void 0 : f.call(d));
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = It(), u = (c) => {
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
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Ay();
        D(d, f);
      },
      children: (d, f) => {
        var h = By(), p = xe(h), _ = F(p);
        Je(_, {
          level: 3,
          children: (pe, G) => {
            Ae();
            var Se = qe("输入参数");
            D(pe, Se);
          },
          $$slots: { default: !0 }
        });
        var x = B(_, 2);
        Ke(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (pe, G) => {
            var Se = Oy();
            D(pe, Se);
          },
          $$slots: { default: !0 }
        }), Y(p);
        var k = B(p, 2);
        Yt(k, {});
        var v = B(k, 2);
        Je(v, {
          level: 3,
          mt: "10px",
          children: (pe, G) => {
            Ae();
            var Se = qe("模型设置");
            D(pe, Se);
          },
          $$slots: { default: !0 }
        });
        var C = B(v, 4), m = F(C);
        const b = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        en(m, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (pe) => {
            const G = pe.value;
            l(o, () => ({ llmId: G }));
          },
          get value() {
            return g(b);
          }
        });
        var H = B(m, 2);
        os(H, {}), Y(C);
        var E = B(C, 4), V = F(E), O = F(V), A = F(O);
        Y(O);
        var R = B(O, 2);
        Zn(R), R.__input = [Ly, l, o], Y(V), Y(E);
        var z = B(E, 2), I = F(z), S = F(I), $ = F(S);
        Y(S);
        var P = B(S, 2);
        Zn(P), P.__input = [Iy, l, o], Y(I), Y(z);
        var N = B(z, 2), T = F(N), M = F(T), L = F(M);
        Y(M);
        var q = B(M, 2);
        Zn(q), q.__input = [zy, l, o], Y(T), Y(N);
        var X = B(N, 4), Z = F(X);
        const te = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        yt(Z, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(te);
          },
          oninput: (pe) => {
            l(o, { systemPrompt: pe.target.value });
          }
        }), Y(X);
        var j = B(X, 4), ue = F(j);
        const ge = /* @__PURE__ */ Te(() => n().userPrompt || "");
        yt(ue, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(ge);
          },
          oninput: (pe) => {
            l(o, { userPrompt: pe.target.value });
          }
        }), Y(j);
        var _e = B(j, 2), ie = F(_e);
        Je(ie, {
          level: 3,
          mt: "10px",
          children: (pe, G) => {
            Ae();
            var Se = qe("输出参数");
            D(pe, Se);
          },
          $$slots: { default: !0 }
        });
        var Ne = B(ie, 2);
        const we = /* @__PURE__ */ Te(() => n().outType ? [n().outType] : []);
        en(Ne, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (pe) => {
            u(pe.value);
          },
          get value() {
            return g(we);
          }
        });
        var $e = B(Ne, 2);
        {
          var le = (pe) => {
            Ke(pe, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (G, Se) => {
                var Ve = Ry();
                D(G, Ve);
              },
              $$slots: { default: !0 }
            });
          };
          ye($e, (pe) => {
            n().outType === "json" && pe(le);
          });
        }
        Y(_e);
        var se = B(_e, 2);
        Rn(se, {}), ke(() => {
          dt(A, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ti(R, n().temperature ?? 0.5), dt($, `Top P: ${n().topP ?? 0.9 ?? ""}`), ti(P, n().topP ?? 0.9), dt(L, `Top K: ${n().topK ?? 50 ?? ""}`), ti(q, n().topK ?? 50);
        }), D(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
Ur(["input"]);
ce(Fd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Fy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Zy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  he(t, !0), Qe(e, Zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  tn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = mt(), { addParameter: i } = Pn(), { updateNodeData: s } = It(), a = [
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
        var c = Yy();
        D(u, c);
      },
      children: (u, c) => {
        var d = Xy(), f = xe(d), h = F(f);
        Je(h, {
          level: 3,
          children: (R, z) => {
            Ae();
            var I = qe("输入参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, z) => {
            var I = Fy();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var _ = B(f, 2);
        Yt(_, {});
        var x = B(_, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (R, z) => {
            Ae();
            var I = qe("代码");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var k = B(x, 4), v = F(k);
        const C = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        en(v, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (R) => {
            const z = R.value;
            s(o, () => ({ engine: z }));
          },
          get value() {
            return g(C);
          }
        }), Y(k);
        var m = B(k, 4), b = F(m);
        const H = /* @__PURE__ */ Te(() => n().code || "");
        yt(b, {
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
        var E = B(m, 2), V = F(E);
        Je(V, {
          level: 3,
          mt: "10px",
          children: (R, z) => {
            Ae();
            var I = qe("输出参数");
            D(R, I);
          },
          $$slots: { default: !0 }
        });
        var O = B(V, 2);
        Ke(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, z) => {
            var I = Wy();
            D(R, I);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var A = B(E, 2);
        Rn(A, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ce(Wd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), jy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  he(t, !0), Qe(e, Uy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), { updateNodeData: s } = It();
  return ln(() => {
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
        var u = Ky();
        D(l, u);
      },
      children: (l, u) => {
        var c = Gy(), d = xe(c), f = F(d);
        Je(f, {
          level: 3,
          children: (H, E) => {
            Ae();
            var V = qe("输入参数");
            D(H, V);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, E) => {
            var V = jy();
            D(H, V);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = B(d, 2);
        Yt(p, {});
        var _ = B(p, 2);
        Je(_, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (H, E) => {
            Ae();
            var V = qe("模板内容");
            D(H, V);
          },
          $$slots: { default: !0 }
        });
        var x = B(_, 2), k = F(x);
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
        }), Y(x);
        var C = B(x, 2), m = F(C);
        Je(m, {
          level: 3,
          mt: "10px",
          children: (H, E) => {
            Ae();
            var V = qe("输出参数");
            D(H, V);
          },
          $$slots: { default: !0 }
        }), Y(C);
        var b = B(C, 2);
        Rn(b, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ce(Xd, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Qy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), rw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), iw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), sw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), aw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Zd(e, t) {
  he(t, !0), Qe(e, uw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  tn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = mt(), { addParameter: s } = Pn(), { updateNodeData: a } = It();
  return vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Jy();
        D(u, c);
      },
      children: (u, c) => {
        var d = lw(), f = xe(d), h = F(f);
        Je(h, {
          level: 3,
          children: (re, oe) => {
            Ae();
            var de = qe("输入参数");
            D(re, de);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (re, oe) => {
            var de = Qy();
            D(re, de);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var _ = B(f, 2);
        Yt(_, {});
        var x = B(_, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ae();
            var de = qe("URL 地址");
            D(re, de);
          },
          $$slots: { default: !0 }
        });
        var k = B(x, 2), v = F(k), C = F(v);
        const m = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        en(C, {
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
        var b = B(v, 2), H = F(b);
        const E = /* @__PURE__ */ Te(() => n().url || "");
        ht(H, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (re) => {
            a(i, () => ({ url: re.target.value }));
          },
          get value() {
            return g(E);
          }
        }), Y(b), Y(k);
        var V = B(k, 2), O = F(V);
        Je(O, {
          level: 3,
          children: (re, oe) => {
            Ae();
            var de = qe("Http 头信息");
            D(re, de);
          },
          $$slots: { default: !0 }
        });
        var A = B(O, 2);
        Ke(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (re, oe) => {
            var de = ew();
            D(re, de);
          },
          $$slots: { default: !0 }
        }), Y(V);
        var R = B(V, 2);
        Yt(R, { dataKeyName: "headers" });
        var z = B(R, 2);
        Je(z, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ae();
            var de = qe("Body");
            D(re, de);
          },
          $$slots: { default: !0 }
        });
        var I = B(z, 2), S = F(I), $ = F(S);
        const P = /* @__PURE__ */ Te(() => !n().bodyType);
        ht($, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(P);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "" });
          }
        }), Ae(), Y(S);
        var N = B(S, 2), T = F(N);
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
        }), Ae(), Y(N);
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
        }), Ae(), Y(L);
        var Z = B(L, 2), te = F(Z);
        const j = /* @__PURE__ */ Te(() => n().bodyType === "json");
        ht(te, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(j);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "json" });
          }
        }), Ae(), Y(Z);
        var ue = B(Z, 2), ge = F(ue);
        const _e = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        ht(ge, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(_e);
          },
          onchange: (re) => {
            var oe;
            (oe = re.target) != null && oe.checked && a(i, { bodyType: "raw" });
          }
        }), Ae(), Y(ue), Y(I);
        var ie = B(I, 2);
        {
          var Ne = (re) => {
            var oe = nw(), de = xe(oe), He = F(de);
            Je(He, {
              level: 3,
              children: (Ie, fe) => {
                Ae();
                var ft = qe("参数");
                D(Ie, ft);
              },
              $$slots: { default: !0 }
            });
            var at = B(He, 2);
            Ke(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ie, fe) => {
                var ft = tw();
                D(Ie, ft);
              },
              $$slots: { default: !0 }
            }), Y(de);
            var ee = B(de, 2);
            Yt(ee, { dataKeyName: "formData" }), D(re, oe);
          };
          ye(ie, (re) => {
            n().bodyType === "form-data" && re(Ne);
          });
        }
        var we = B(ie, 2);
        {
          var $e = (re) => {
            var oe = ow(), de = xe(oe), He = F(de);
            Je(He, {
              level: 3,
              children: (Ie, fe) => {
                Ae();
                var ft = qe("Body 参数");
                D(Ie, ft);
              },
              $$slots: { default: !0 }
            });
            var at = B(He, 2);
            Ke(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ie, fe) => {
                var ft = rw();
                D(Ie, ft);
              },
              $$slots: { default: !0 }
            }), Y(de);
            var ee = B(de, 2);
            Yt(ee, { dataKeyName: "formUrlencoded" }), D(re, oe);
          };
          ye(we, (re) => {
            n().bodyType === "x-www-form-urlencoded" && re($e);
          });
        }
        var le = B(we, 2);
        {
          var se = (re) => {
            var oe = iw(), de = F(oe);
            yt(de, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (He) => {
                a(i, { bodyJson: He.target.value });
              }
            }), Y(oe), D(re, oe);
          };
          ye(le, (re) => {
            n().bodyType === "json" && re(se);
          });
        }
        var pe = B(le, 2);
        {
          var G = (re) => {
            var oe = sw(), de = F(oe);
            yt(de, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (He) => {
                a(i, { bodyRaw: He.target.value });
              }
            }), Y(oe), D(re, oe);
          };
          ye(pe, (re) => {
            n().bodyType === "raw" && re(G);
          });
        }
        var Se = B(pe, 2), Ve = F(Se);
        Je(Ve, {
          level: 3,
          mt: "10px",
          children: (re, oe) => {
            Ae();
            var de = qe("输出参数");
            D(re, de);
          },
          $$slots: { default: !0 }
        });
        var Le = B(Ve, 2);
        Ke(Le, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (re, oe) => {
            var de = aw();
            D(re, de);
          },
          $$slots: { default: !0 }
        }), Y(Se);
        var Re = B(Se, 2);
        Rn(Re, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ce(Zd, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), dw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const gw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  he(t, !0), Qe(e, gw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = tr();
  let a = /* @__PURE__ */ St(sn([]));
  tn(async () => {
    var c, d;
    const u = await ((d = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : d.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = It();
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
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = cw();
        D(c, d);
      },
      children: (c, d) => {
        var f = fw(), h = xe(f), p = F(h);
        Je(p, {
          level: 3,
          children: (I, S) => {
            Ae();
            var $ = qe("输入参数");
            D(I, $);
          },
          $$slots: { default: !0 }
        });
        var _ = B(p, 2);
        Ke(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, S) => {
            var $ = dw();
            D(I, $);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var x = B(h, 2);
        Yt(x, {});
        var k = B(x, 2);
        Je(k, {
          level: 3,
          mt: "10px",
          children: (I, S) => {
            Ae();
            var $ = qe("知识库设置");
            D(I, $);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), C = F(v);
        const m = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        en(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (I) => {
            const S = I.value;
            l(o, () => ({ knowledgeId: S }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var b = B(v, 4), H = F(b);
        ht(H, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const S = I.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Y(b);
        var E = B(b, 4), V = F(E);
        const O = /* @__PURE__ */ Te(() => n().limit || "");
        ht(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (I) => {
            const S = I.target.value;
            l(o, () => ({ limit: S }));
          },
          get value() {
            return g(O);
          }
        }), Y(E);
        var A = B(E, 2), R = F(A);
        Je(R, {
          level: 3,
          mt: "10px",
          children: (I, S) => {
            Ae();
            var $ = qe("输出参数");
            D(I, $);
          },
          $$slots: { default: !0 }
        }), Y(A);
        var z = B(A, 2);
        Rn(z, {}), D(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ce(Kd, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), vw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function jd(e, t) {
  he(t, !0), Qe(e, mw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = tr();
  let a = /* @__PURE__ */ St(sn([]));
  tn(async () => {
    var c, d;
    const u = await ((d = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : d.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = It();
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
  }), vn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = hw();
        D(c, d);
      },
      children: (c, d) => {
        var f = pw(), h = xe(f), p = F(h);
        Je(p, {
          level: 3,
          children: (z, I) => {
            Ae();
            var S = qe("输入参数");
            D(z, S);
          },
          $$slots: { default: !0 }
        });
        var _ = B(p, 2);
        Ke(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, I) => {
            var S = vw();
            D(z, S);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var x = B(h, 2);
        Yt(x, {});
        var k = B(x, 2);
        Je(k, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ae();
            var S = qe("搜索引擎设置");
            D(z, S);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), C = F(v);
        const m = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : []);
        en(C, {
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
        var b = B(v, 4), H = F(b);
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
        }), Y(b);
        var E = B(b, 4), V = F(E);
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
        }), Y(E);
        var O = B(E, 2), A = F(O);
        Je(A, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ae();
            var S = qe("输出参数");
            D(z, S);
          },
          $$slots: { default: !0 }
        }), Y(O);
        var R = B(O, 2);
        Rn(R, {}), D(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ce(jd, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), ww = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const xw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Gd(e, t) {
  he(t, !0), Qe(e, xw);
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
      icon: (l) => {
        var u = yw();
        D(l, u);
      },
      handle: (l) => {
        Qn(l, {
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
        var c = _w(), d = xe(c), f = F(d);
        Je(f, {
          level: 3,
          children: (v, C) => {
            Ae();
            var m = qe("循环变量");
            D(v, m);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        Ke(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (v, C) => {
            var m = ww();
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = B(d, 2);
        Yt(p, {});
        var _ = B(p, 2), x = F(_);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (v, C) => {
            Ae();
            var m = qe("输出参数");
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(_);
        var k = B(_, 2);
        Rn(k, {}), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ce(Gd, { data: {} }, [], [], !0);
const bw = {
  startNode: zd,
  codeNode: Wd,
  llmNode: Fd,
  templateNode: Xd,
  httpNode: Zd,
  knowledgeNode: Kd,
  searchEngineNode: jd,
  loopNode: Gd,
  endNode: qd
};
var Cw = /* @__PURE__ */ ne("<!> ", 1);
function js(e, t) {
  he(t, !0);
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
      var c = Cw(), d = xe(c);
      fa(d, n);
      var f = B(d);
      ke(() => dt(f, ` ${r() ?? ""}`)), D(l, c);
    },
    $$slots: { default: !0 }
  }), ve({
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
var kw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), $w = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Ew = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ud(e, t) {
  he(t, !0);
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
  ], s = [], a = tr(), l = a.customNodes;
  if (l) {
    const k = Object.keys(l).sort((v, C) => (l[v].sortNo || 0) - (l[C].sortNo || 0));
    for (let v of k)
      l[v].group === "base" ? o.push({ type: v, ...l[v] }) : s.push({
        icon: l[v].icon,
        title: l[v].title,
        type: v
      });
    o.sort((v, C) => (v.sortNo || 0) - (C.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const k = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(k)) {
      for (let v of k)
        for (let C = 0; C < o.length; C++)
          if (o[C].type === v) {
            o.splice(C, 1);
            break;
          }
    }
  }
  var u = Ew(), c = F(u), d = F(c), f = F(d);
  bd(f, {
    style: "width: 100%",
    items: i,
    onChange: (k) => {
      U(n, k.value.toString(), !0);
    }
  }), Y(d);
  var h = B(d, 2), p = F(h);
  Mt(p, 21, () => o, Lr, (k, v) => {
    js(k, ut(() => g(v)));
  }), Y(p);
  var _ = B(p, 2);
  Mt(_, 21, () => s, Lr, (k, v) => {
    js(k, ut(() => g(v)));
  }), Y(_), Y(h), Y(c);
  var x = B(c, 2);
  Ke(x, {
    onclick: () => {
      U(r, g(r) ? "" : "show", !0);
    },
    children: (k, v) => {
      var C = et(), m = xe(C);
      {
        var b = (E) => {
          var V = kw();
          D(E, V);
        }, H = (E) => {
          var V = $w();
          D(E, V);
        };
        ye(m, (E) => {
          g(r) === "show" ? E(b) : E(H, !1);
        });
      }
      D(k, C);
    },
    $$slots: { default: !0 }
  }), Y(u), ke(() => {
    Ct(u, 1, `tf-toolbar ${g(r) ?? ""}`), gt(p, `display: ${g(n) === "base" ? "flex" : "none"}`), gt(_, `display: ${g(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), ve();
}
ce(Ud, {}, [], [], !0);
const Sw = () => {
  const { nodeLookup: e } = Ge();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, Pw = () => {
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
}, Nw = () => {
  const { edges: e } = Ge();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var Tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Dw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Aw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ow = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), zw = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const Rw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Jd(e, t) {
  var k;
  he(t, !0), Qe(e, Rw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ _t(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = Pn(), s = It(), { updateNodeData: a } = s, l = (v) => {
    a(o, v);
  }, u = (v, C) => {
    var m;
    l({ [v]: (m = C.target) == null ? void 0 : m.value });
  }, c = { ...r, id: o, data: n() }, d = document.createElement("div"), h = tr().customNodes[t.type];
  (k = h.render) == null || k.call(h, d, c, s);
  const p = h.forms;
  let _;
  ln(() => {
    n().expand && _ && _.append(d);
  }), ln(() => {
    var v;
    n() && ((v = h.onUpdate) == null || v.call(h, d, { ...c, data: n() }));
  }), ln(() => {
    !n().parameters && h.parameters && l({
      parameters: Di(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), ln(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Di(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const x = /* @__PURE__ */ Te(() => ({
    ...n(),
    description: h.description
  }));
  return vn(e, ut(
    {
      get data() {
        return g(x);
      }
    },
    () => r,
    {
      icon: (C) => {
        var m = et(), b = xe(m);
        fa(b, () => h.icon), D(C, m);
      },
      children: (C, m) => {
        var b = zw(), H = xe(b);
        {
          var E = (I) => {
            var S = Mw(), $ = xe(S), P = F($);
            Je(P, {
              level: 3,
              children: (L, q) => {
                Ae();
                var X = qe("输入参数");
                D(L, X);
              },
              $$slots: { default: !0 }
            });
            var N = B(P, 2);
            {
              var T = (L) => {
                Ke(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (q, X) => {
                    var Z = Tw();
                    D(q, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(N, (L) => {
                h.parametersAddEnable !== !1 && L(T);
              });
            }
            Y($);
            var M = B($, 2);
            Yt(M, {}), D(I, S);
          };
          ye(H, (I) => {
            h.parametersEnable !== !1 && I(E);
          });
        }
        var V = B(H, 2);
        {
          var O = (I) => {
            var S = et(), $ = xe(S);
            Mt($, 17, () => p, Lr, (P, N) => {
              var T = et(), M = xe(T);
              {
                var L = (X) => {
                  var Z = Hw(), te = xe(Z), j = F(te, !0);
                  Y(te);
                  var ue = B(te, 2), ge = F(ue);
                  const _e = /* @__PURE__ */ Te(() => n()[g(N).name] || g(N).defaultValue);
                  ht(ge, ut(
                    {
                      get placeholder() {
                        return g(N).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return g(_e);
                      }
                    },
                    () => g(N).attrs,
                    {
                      onchange: (ie) => {
                        u(g(N).name, ie);
                      }
                    }
                  )), Y(ue), ke(() => dt(j, g(N).label)), D(X, Z);
                }, q = (X, Z) => {
                  {
                    var te = (ue) => {
                      var ge = Dw(), _e = xe(ge), ie = F(_e, !0);
                      Y(_e);
                      var Ne = B(_e, 2), we = F(Ne);
                      const $e = /* @__PURE__ */ Te(() => n()[g(N).name] || g(N).defaultValue);
                      yt(we, ut(
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
                      )), Y(Ne), ke(() => dt(ie, g(N).label)), D(ue, ge);
                    }, j = (ue, ge) => {
                      {
                        var _e = (Ne) => {
                          var we = Vw(), $e = xe(we), le = F($e, !0);
                          Y($e);
                          var se = B($e, 2), pe = F(se), G = F(pe), Se = F(G);
                          Y(G);
                          var Ve = B(G, 2);
                          Zn(Ve);
                          var Le = (re) => l({
                            [g(N).name]: parseFloat(re.target.value)
                          });
                          let Re;
                          Y(pe), Y(se), ke(() => {
                            dt(le, g(N).label), dt(Se, `${g(N).description ?? ""}: ${n()[g(N).name] ?? g(N).defaultValue ?? ""}`), Re = Xt(
                              Ve,
                              Re,
                              {
                                class: "nodrag",
                                type: "range",
                                ...g(N).attrs,
                                value: n()[g(N).name] ?? g(N).defaultValue,
                                oninput: Le
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(Ne, we);
                        }, ie = (Ne, we) => {
                          {
                            var $e = (se) => {
                              var pe = Aw(), G = xe(pe), Se = F(G, !0);
                              Y(G);
                              var Ve = B(G, 2), Le = F(Ve);
                              const Re = /* @__PURE__ */ Te(() => g(N).options || []), re = /* @__PURE__ */ Te(() => n()[g(N).name] ? [n()[g(N).name]] : [g(N).defaultValue]);
                              en(Le, {
                                get items() {
                                  return g(Re);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return g(N).placeholder;
                                },
                                onSelect: (oe) => {
                                  const de = oe.value;
                                  l({ [g(N).name]: de });
                                },
                                get value() {
                                  return g(re);
                                }
                              }), Y(Ve), ke(() => dt(Se, g(N).label)), D(se, pe);
                            }, le = (se, pe) => {
                              {
                                var G = (Ve) => {
                                  var Le = Ow(), Re = xe(Le), re = F(Re, !0);
                                  Y(Re);
                                  var oe = B(Re, 2), de = F(oe);
                                  xd(de, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return g(N).placeholder;
                                    },
                                    onChosen: (He, at, ee) => {
                                      var Ie, fe;
                                      (fe = (Ie = g(N).chosen) == null ? void 0 : Ie.onChosen) == null || fe.call(Ie, l, He, at, ee);
                                    },
                                    get value() {
                                      var He;
                                      return n()[((He = g(N).chosen) == null ? void 0 : He.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var He;
                                      return n()[((He = g(N).chosen) == null ? void 0 : He.labelDataKey) || ""];
                                    }
                                  }), Y(oe), ke(() => dt(re, g(N).label)), D(Ve, Le);
                                }, Se = (Ve, Le) => {
                                  {
                                    var Re = (re) => {
                                      Je(re, ut({ level: 3, mt: "10px" }, () => g(N).attrs, {
                                        children: (oe, de) => {
                                          Ae();
                                          var He = qe();
                                          ke(() => dt(He, g(N).label)), D(oe, He);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ye(
                                      Ve,
                                      (re) => {
                                        g(N).type === "heading" && re(Re);
                                      },
                                      Le
                                    );
                                  }
                                };
                                ye(
                                  se,
                                  (Ve) => {
                                    g(N).type === "chosen" ? Ve(G) : Ve(Se, !1);
                                  },
                                  pe
                                );
                              }
                            };
                            ye(
                              Ne,
                              (se) => {
                                g(N).type === "select" ? se($e) : se(le, !1);
                              },
                              we
                            );
                          }
                        };
                        ye(
                          ue,
                          (Ne) => {
                            g(N).type === "slider" ? Ne(_e) : Ne(ie, !1);
                          },
                          ge
                        );
                      }
                    };
                    ye(
                      X,
                      (ue) => {
                        g(N).type === "textarea" ? ue(te) : ue(j, !1);
                      },
                      Z
                    );
                  }
                };
                ye(M, (X) => {
                  g(N).type === "input" ? X(L) : X(q, !1);
                });
              }
              D(P, T);
            }), D(I, S);
          };
          ye(V, (I) => {
            p && I(O);
          });
        }
        var A = B(V, 2);
        kn(A, (I) => _ = I, () => _);
        var R = B(A, 2);
        {
          var z = (I) => {
            var S = Iw(), $ = xe(S), P = F($);
            Je(P, {
              level: 3,
              mt: "10px",
              children: (L, q) => {
                Ae();
                var X = qe("输出参数");
                D(L, X);
              },
              $$slots: { default: !0 }
            });
            var N = B(P, 2);
            {
              var T = (L) => {
                Ke(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (q, X) => {
                    var Z = Lw();
                    D(q, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              ye(N, (L) => {
                h.outputDefsAddEnable !== !1 && L(T);
              });
            }
            Y($);
            var M = B($, 2);
            Rn(M, {}), D(I, S);
          };
          ye(R, (I) => {
            h.outputDefsEnable !== !1 && I(z);
          });
        }
        ke(() => {
          gt(A, h.rootStyle || ""), Ct(A, 1, gn(h.rootClass), "svelte-q0cqsa");
        }), D(C, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(v) {
      n(v), y();
    }
  });
}
ce(Jd, { data: {} }, [], [], !0);
const Bw = () => {
  const e = Ge();
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
var qw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Yw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), Fw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Ww = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Qd(e, t) {
  he(t, !0), Qe(e, Ww);
  const [n, r] = rt(), o = () => Q(V, "$nodes", n), i = () => Q(O, "$edges", n), s = () => Q(A, "$viewport", n), a = w(t, "onInit", 7), l = It();
  a()(l);
  let u = /* @__PURE__ */ St(!1), c = /* @__PURE__ */ St(void 0);
  const { updateEdgeData: d } = Bw(), f = (T) => {
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
  }, { getNode: p } = Sw(), _ = (T) => {
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
  }, { ensureParentInNodesBefore: x } = Pw(), k = (T, M) => {
    if (!M.isValid)
      return;
    const L = M.toNode;
    if (L.parentId)
      return;
    const q = M.fromNode, X = M.fromHandle, Z = { position: { ...L.position } };
    if (X.id === "loop_handle" ? Z.parentId = q.id : q.parentId && (Z.parentId = q.parentId), Z.parentId) {
      const te = p(Z.parentId);
      Z.position = {
        x: L.position.x - te.position.x,
        y: L.position.y - te.position.y
      }, x(Z.parentId, L.id), l.updateNode(L.id, Z);
    }
  }, { getEdgesByTarget: v } = Nw(), C = (T) => {
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
          let te = !1;
          for (let j = 0; j < X.length; j++) {
            const ue = X[j], ge = p(ue.source);
            if (ge.parentId || ge.type === "loopNode") {
              te = !0;
              break;
            }
          }
          te || l.updateNode(q.id, {
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
  }, b = (T) => {
  }, H = {}, E = tr().customNodes;
  if (E)
    for (let T of Object.keys(E))
      H[T] = Jd;
  const { nodes: V, edges: O, viewport: A } = Ge(), R = tr().onDataChange;
  R && (V.subscribe(() => {
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
  }), A.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var z = Fw(), I = F(z);
  const S = /* @__PURE__ */ Te(() => ({ ...bw, ...H })), $ = /* @__PURE__ */ Te(() => ({
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
        return g(S);
      }
    },
    ai,
    {
      class: "tinyflow-logo",
      isValidConnection: _,
      onconnectend: k,
      onconnectstart: m,
      onconnect: b,
      connectionRadius: 50,
      ondelete: C,
      onclick: (T) => {
        const M = T.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || (U(u, !1), U(c, null));
      },
      get defaultEdgeOptions() {
        return g($);
      },
      $$events: {
        drop: h,
        dragover: f,
        edgeclick: (T) => {
          U(u, !0), U(c, T.detail.edge, !0);
        }
      },
      children: (T, M) => {
        var L = Yw(), q = xe(L);
        pd(q, {});
        var X = B(q, 2);
        gd(X, {});
        var Z = B(X, 2);
        yd(Z, {});
        var te = B(Z, 2);
        {
          var j = (ue) => {
            Ro(ue, {
              children: (ge, _e) => {
                var ie = qw(), Ne = B(F(ie), 4), we = F(Ne);
                const $e = /* @__PURE__ */ Te(() => {
                  var le, se;
                  return (se = (le = g(c)) == null ? void 0 : le.data) == null ? void 0 : se.condition;
                });
                yt(we, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g($e);
                  },
                  onchange: (le) => {
                    g(c) && d(g(c).id, { condition: le.target.value });
                  }
                }), Y(Ne), Y(ie), D(ge, ie);
              },
              $$slots: { default: !0 }
            });
          };
          ye(te, (ue) => {
            g(u) && ue(j);
          });
        }
        D(T, L);
      },
      $$slots: { default: !0 }
    }
  ));
  var P = B(I, 2);
  Ud(P, {}), Y(z), D(e, z);
  var N = ve({
    get onInit() {
      return a();
    },
    set onInit(T) {
      a(T), y();
    }
  });
  return r(), N;
}
ce(Qd, { onInit: {} }, [], [], !0);
function Xw(e, t) {
  he(t, !0);
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
      Qd(i, {
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
customElements.define("tinyflow-component", ce(Xw, { options: {}, onInit: {} }, [], [], !1));
export {
  Jw as Tinyflow
};
//# sourceMappingURL=index.js.map
