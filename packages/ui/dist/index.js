var hf = Object.defineProperty;
var Ba = (e) => {
  throw TypeError(e);
};
var vf = (e, t, n) => t in e ? hf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var kt = (e, t, n) => vf(e, typeof t != "symbol" ? t + "" : t, n), ss = (e, t, n) => t.has(e) || Ba("Cannot " + n);
var ct = (e, t, n) => (ss(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? Ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ro = (e, t, n, r) => (ss(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), qa = (e, t, n) => (ss(e, t, "access private method"), n);
const pf = "5";
var Gl;
typeof window < "u" && ((Gl = window.__svelte ?? (window.__svelte = {})).v ?? (Gl.v = /* @__PURE__ */ new Set())).add(pf);
let Xr = !1, mf = !1;
function yf() {
  Xr = !0;
}
yf();
const Gs = 1, Us = 2, Ul = 4, wf = 8, _f = 16, xf = 1, bf = 2, Jl = 4, Cf = 8, $f = 16, Ql = 1, kf = 2, Js = "[", Qs = "[!", ea = "]", $r = {}, Dt = Symbol(), Ef = "http://www.w3.org/1999/xhtml", Sf = "http://www.w3.org/2000/svg", Ya = !1;
function Ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Mo = Array.isArray, Pf = Array.prototype.indexOf, ta = Array.from, ai = Object.keys, ho = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, eu = Object.getOwnPropertyDescriptors, Nf = Object.prototype, Tf = Array.prototype, na = Object.getPrototypeOf, Fa = Object.isExtensible;
function oo(e) {
  return typeof e == "function";
}
const vt = () => {
};
function Mf(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const un = 2, tu = 4, Oi = 8, ra = 16, In = 32, pr = 64, li = 128, Ft = 256, ui = 512, Tt = 1024, _n = 2048, tr = 4096, Dn = 8192, Li = 16384, Hf = 32768, Zr = 65536, Vf = 1 << 17, Df = 1 << 19, nu = 1 << 20, $s = 1 << 21, Xn = Symbol("$state"), oa = Symbol("legacy props"), Af = Symbol("");
function Of(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Lf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function If(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function qf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ii(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function qt(e) {
  He = e;
}
let Re;
function Pt(e) {
  if (e === null)
    throw Ii(), $r;
  return Re = e;
}
function xn() {
  return Pt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Re)
  );
}
function Y(e) {
  if (He) {
    if (/* @__PURE__ */ En(Re) !== null)
      throw Ii(), $r;
    Re = e;
  }
}
function Ve(e = 1) {
  if (He) {
    for (var t = e, n = Re; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Re = n;
  }
}
function ks() {
  for (var e = 0, t = Re; ; ) {
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
  if (t !== Nf && t !== Tf)
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && qf();
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
            s(() => /* @__PURE__ */ St(Dt))
          ), as(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && U(c, d);
          }
          U(u, Dt), as(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Xn)
          return e;
        var c = n.get(l), d = l in a;
        if (c === void 0 && (!d || (h = Vn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ St(sn(d ? a[l] : Dt))), n.set(l, c)), c !== void 0) {
          var f = g(c);
          return f === Dt ? void 0 : f;
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
          if (d !== void 0 && f !== Dt)
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
        var u = n.get(l), c = u !== void 0 && u.v !== Dt || Reflect.has(a, l);
        if (u !== void 0 || Ze !== null && (!c || (f = Vn(a, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ St(c ? sn(a[l]) : Dt)), n.set(l, u));
          var d = g(u);
          if (d === Dt)
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
            p !== void 0 ? U(p, Dt) : h in a && (p = s(() => /* @__PURE__ */ St(Dt)), n.set(h + "", p));
          }
        d === void 0 ? (!f || (v = Vn(a, l)) != null && v.writable) && (d = s(() => /* @__PURE__ */ St(void 0)), U(
          d,
          s(() => sn(u))
        ), n.set(l, d)) : (f = d.v !== Dt, U(
          d,
          s(() => sn(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_ != null && _.set && _.set.call(c, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= b.v && U(b, k + 1);
          }
          as(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Dt;
        });
        for (var [u, c] of n)
          c.v !== Dt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Yf();
      }
    }
  );
}
function as(e, t = 1) {
  U(e, e.v + t);
}
var At, ru, ou, iu;
function Es() {
  if (At === void 0) {
    At = window, ru = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ou = Vn(t, "firstChild").get, iu = Vn(t, "nextSibling").get, Fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fa(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return ou.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return iu.call(e);
}
function W(e, t) {
  if (!He)
    return /* @__PURE__ */ ht(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ht(Re)
  );
  if (n === null)
    n = Re.appendChild(On());
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
      /* @__PURE__ */ ht(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Re;
}
function B(e, t = 1, n = !1) {
  let r = He ? Re : e;
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
function Vr(e) {
  var t = un | _n, n = tt !== null && (tt.f & un) !== 0 ? (
    /** @type {Derived} */
    tt
  ) : null;
  return Ze === null || n !== null && (n.f & Ft) !== 0 ? t |= Ft : Ze.f |= nu, {
    ctx: Xe,
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
    parent: n ?? Ze
  };
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  const t = /* @__PURE__ */ Vr(e);
  return wu(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Vr(e);
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
function Wf(e) {
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
  var t, n = Ze;
  Un(Wf(e));
  try {
    au(e), t = Cu(e);
  } finally {
    Un(n);
  }
  return t;
}
function uu(e) {
  var t = lu(e), n = (Fn || (e.f & Ft) !== 0) && e.deps !== null ? tr : Tt;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = xu());
}
function cu(e) {
  Ze === null && tt === null && If(), tt !== null && (tt.f & Ft) !== 0 && Ze === null && Lf(), Vo && Of();
}
function Xf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mr(e, t, n, r = !0) {
  var o = Ze, i = {
    ctx: Xe,
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
      Ri(i), i.f |= Hf;
    } catch (l) {
      throw cn(i), l;
    }
  else t !== null && Bi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (nu | li)) === 0;
  if (!s && r && (o !== null && Xf(i, o), tt !== null && (tt.f & un) !== 0)) {
    var a = (
      /** @type {Derived} */
      tt
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function la(e) {
  const t = mr(Oi, null, !1);
  return Jt(t, Tt), t.teardown = e, t;
}
function ln(e) {
  cu();
  var t = Ze !== null && (Ze.f & In) !== 0 && Xe !== null && !Xe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Xe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ze,
      reaction: tt
    });
  } else {
    var r = Bt(e);
    return r;
  }
}
function Zf(e) {
  return cu(), Kr(e);
}
function Kf(e) {
  const t = mr(pr, e, !0);
  return () => {
    cn(t);
  };
}
function jf(e) {
  const t = mr(pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(t, () => {
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
    Xe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), Cn(t));
  });
}
function wt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Xe
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Tt) !== 0 && Jt(n, tr), Gr(n) && Ri(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return mr(Oi, e, !0);
}
function Pe(e, t = [], n = Vr) {
  const r = t.map(n);
  return jr(() => e(...r.map(g)));
}
function jr(e, t = 0) {
  return mr(Oi | ra | t, e, !0);
}
function Gn(e, t = !0) {
  return mr(Oi | In, e, !0, t);
}
function du(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vo, r = tt;
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
function Gf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & In) === 0 && cn(t), t = n;
  }
}
function cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Df) !== 0) && e.nodes_start !== null && (gu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), fu(e, t && !n), gi(e, 0), Jt(e, Li);
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
function Dr(e, t) {
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
  if ((e.f & Dn) === 0) {
    if (e.f ^= Dn, e.transitions !== null)
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
  if ((e.f & Dn) !== 0) {
    e.f ^= Dn, (e.f & Tt) === 0 && (e.f ^= Tt), Gr(e) && (Jt(e, _n), Bi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & In) !== 0;
      pu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Uf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
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
function Jf(e) {
  yo.length === 0 && Uf(yu), yo.push(e);
}
function Wa() {
  mo.length > 0 && mu(), yo.length > 0 && yu();
}
let ei = !1, ci = !1, di = null, sr = !1, Vo = !1;
function Xa(e) {
  Vo = e;
}
let go = [];
let tt = null, mn = !1;
function bn(e) {
  tt = e;
}
let Ze = null;
function Un(e) {
  Ze = e;
}
let Nt = null;
function wu(e) {
  tt !== null && tt.f & $s && (Nt === null ? Nt = [e] : Nt.push(e));
}
let Et = null, Rt = 0, jt = null;
function Qf(e) {
  jt = e;
}
let _u = 1, fi = 0, Fn = !1;
function xu() {
  return ++_u;
}
function Gr(e) {
  var d;
  var t = e.f;
  if ((t & _n) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Ft) !== 0;
    if (n !== null) {
      var o, i, s = (t & ui) !== 0, a = r && Ze !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((d = i == null ? void 0 : i.reactions) != null && d.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ui), a && c !== null && (c.f & Ft) === 0 && (u.f ^= Ft);
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
    (!r || Ze !== null && !Fn) && Jt(e, Tt);
  }
  return !1;
}
function e1(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & li) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= li;
      }
    n = n.parent;
  }
  throw ei = !1, e;
}
function Za(e) {
  return (e.f & Li) === 0 && (e.parent === null || (e.parent.f & li) === 0);
}
function zi(e, t, n, r) {
  if (ei) {
    if (n === null && (ei = !1), Za(t))
      throw e;
    return;
  }
  if (n !== null && (ei = !0), e1(e, t), Za(t))
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
      ) : t === i && (n ? Jt(i, _n) : (i.f & Tt) !== 0 && Jt(i, tr), Bi(
        /** @type {Effect} */
        i
      )));
    }
}
function Cu(e) {
  var h;
  var t = Et, n = Rt, r = jt, o = tt, i = Fn, s = Nt, a = Xe, l = mn, u = e.f;
  Et = /** @type {null | Value[]} */
  null, Rt = 0, jt = null, Fn = (u & Ft) !== 0 && (mn || !sr || tt === null), tt = (u & (In | pr)) === 0 ? e : null, Nt = null, ja(e.ctx), mn = !1, fi++, e.f |= $s;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (Et !== null) {
      var f;
      if (gi(e, Rt), d !== null && Rt > 0)
        for (d.length = Rt + Et.length, f = 0; f < Et.length; f++)
          d[Rt + f] = Et[f];
      else
        e.deps = d = Et;
      if (!Fn)
        for (f = Rt; f < d.length; f++)
          ((h = d[f]).reactions ?? (h.reactions = [])).push(e);
    } else d !== null && Rt < d.length && (gi(e, Rt), d.length = Rt);
    if (qi() && jt !== null && !mn && d !== null && (e.f & (un | tr | _n)) === 0)
      for (f = 0; f < /** @type {Source[]} */
      jt.length; f++)
        bu(
          jt[f],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (fi++, jt !== null && (r === null ? r = jt : r.push(.../** @type {Source[]} */
    jt))), c;
  } finally {
    Et = t, Rt = n, jt = r, tt = o, Fn = i, Nt = s, ja(a), mn = l, e.f ^= $s;
  }
}
function t1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Pf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & un) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Et === null || !Et.includes(t)) && (Jt(t, tr), (t.f & (Ft | ui)) === 0 && (t.f ^= ui), au(
    /** @type {Derived} **/
    t
  ), gi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      t1(e, n[r]);
}
function Ri(e) {
  var t = e.f;
  if ((t & Li) === 0) {
    Jt(e, Tt);
    var n = Ze, r = Xe, o = sr;
    Ze = e, sr = !0;
    try {
      (t & ra) !== 0 ? Gf(e) : fu(e), du(e);
      var i = Cu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _u;
      var s = e.deps, a;
      Ya && mf && e.f & _n;
    } catch (l) {
      zi(l, e, n, r || e.ctx);
    } finally {
      sr = o, Ze = n;
    }
  }
}
function n1() {
  try {
    zf();
  } catch (e) {
    if (di !== null)
      zi(e, di, null);
    else
      throw e;
  }
}
function $u() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; go.length > 0; ) {
      t++ > 1e3 && n1();
      var n = go, r = n.length;
      go = [];
      for (var o = 0; o < r; o++) {
        var i = o1(n[o]);
        r1(i);
      }
      wo.clear();
    }
  } finally {
    ci = !1, sr = e, di = null;
  }
}
function r1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Li | Dn)) === 0)
        try {
          Gr(r) && (Ri(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? hu(r) : r.fn = null));
        } catch (o) {
          zi(o, r, null, r.ctx);
        }
    }
}
function Bi(e) {
  ci || (ci = !0, queueMicrotask($u));
  for (var t = di = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (pr | In)) !== 0) {
      if ((n & Tt) === 0) return;
      t.f ^= Tt;
    }
  }
  go.push(t);
}
function o1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (In | pr)) !== 0, i = o && (r & Tt) !== 0;
    if (!i && (r & Dn) === 0) {
      if ((r & tu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= Tt;
      else
        try {
          Gr(n) && Ri(n);
        } catch (l) {
          zi(l, n, null, n.ctx);
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
    ci = !0, $u(), Wa();
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
      e.rv < fi && (e.rv = fi, Et === null && r !== null && r[Rt] === e ? Rt++ : Et === null ? Et = [e] : (!Fn || !Et.includes(e)) && Et.push(e));
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
  e, Gr(o) && uu(o)), Vo && wo.has(e) ? wo.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const i1 = -7169;
function Jt(e, t) {
  e.f = e.f & i1 | t;
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
function ie(e, t = !1) {
  var r;
  const n = Ar(e);
  return t || (n.equals = aa), Xr && Xe !== null && Xe.l !== null && ((r = Xe.l).s ?? (r.s = [])).push(n), n;
}
function U(e, t, n = !1) {
  tt !== null && !mn && qi() && (tt.f & (un | ra)) !== 0 && !(Nt != null && Nt.includes(e)) && Ff();
  let r = n ? sn(t) : t;
  return Ps(e, r);
}
function Ps(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vo ? wo.set(e, t) : wo.set(e, n), e.v = t, (e.f & un) !== 0 && ((e.f & _n) !== 0 && lu(
      /** @type {Derived} */
      e
    ), Jt(e, (e.f & Ft) === 0 ? Tt : tr)), e.wv = xu(), ku(e, _n), qi() && Ze !== null && (Ze.f & Tt) !== 0 && (Ze.f & (In | pr)) === 0 && (jt === null ? Qf([e]) : jt.push(e));
  }
  return t;
}
function Ka(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function ku(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = qi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & _n) === 0 && (!r && s === Ze || (Jt(s, t), (a & (Tt | Ft)) !== 0 && ((a & un) !== 0 ? ku(
        /** @type {Derived} */
        s,
        tr
      ) : Bi(
        /** @type {Effect} */
        s
      ))));
    }
}
let Xe = null;
function ja(e) {
  Xe = e;
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
function s1(e) {
  return ca().has(e);
}
function ge(e, t = !1, n) {
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
  Xr && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ar(!1)
  }), la(() => {
    r.d = !0;
  });
}
function he(e) {
  const t = Xe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ze, r = tt;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), bn(i.reaction), Bt(i.fn);
        }
      } finally {
        Un(n), bn(r);
      }
    }
    Xe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function qi() {
  return !Xr || Xe !== null && Xe.l === null;
}
function ca(e) {
  return Xe === null && Ai(), Xe.c ?? (Xe.c = new Map(a1(Xe) || void 0));
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
    e.autofocus = !0, Ho(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function y1(e) {
  He && /* @__PURE__ */ ht(e) !== null && ia(e);
}
let Ga = !1;
function w1() {
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
function _1(e) {
  var t = tt, n = Ze;
  bn(null), Un(null);
  try {
    return e();
  } finally {
    bn(t), Un(n);
  }
}
const Eu = /* @__PURE__ */ new Set(), Ns = /* @__PURE__ */ new Set();
function Su(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || lo.call(t, i), !i.cancelBubble)
      return _1(() => n == null ? void 0 : n.call(this, i));
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
    var c = tt, d = Ze;
    bn(null), Un(null);
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
              var [b, ...k] = _;
              b.apply(i, [e, ...k]);
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
      e.__root = t, delete e.currentTarget, bn(c), Un(d);
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
    Ze
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Ql) !== 0, r = (t & kf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return Lt(Re, null), Re;
    o === void 0 && (o = da(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ht(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ru ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(s)
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
function Ee(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ql) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (He)
      return Lt(Re, null), Re;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        da(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ht(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ht(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ ht(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ht(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(u)
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
function Ye(e = "") {
  if (!He) {
    var t = On(e + "");
    return Lt(t, t), t;
  }
  var n = Re;
  return n.nodeType !== 3 && (n.before(n = On()), Pt(n)), Lt(n, n), n;
}
function Qe() {
  if (He)
    return Lt(Re, null), Re;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Lt(t, n), e;
}
function D(e, t) {
  if (He) {
    Ze.nodes_end = Re, xn();
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
function x1(e, t) {
  Es(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = Re;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ht(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Js); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw $r;
    qt(!0), Pt(
      /** @type {Comment} */
      i
    ), xn();
    const s = Nu(e, { ...t, anchor: i });
    if (Re === null || Re.nodeType !== 8 || /** @type {Comment} */
    Re.data !== ea)
      throw Ii(), $r;
    return qt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === $r)
      return t.recover === !1 && Rf(), Es(), ia(n), qt(!1), Pu(e, t);
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
        var p = h1(h);
        t.addEventListener(h, lo, { passive: p });
        var _ = _r.get(h);
        _ === void 0 ? (document.addEventListener(h, lo, { passive: p }), _r.set(h, 1)) : _r.set(h, _ + 1);
      }
    }
  };
  l(ta(Eu)), Ns.add(l);
  var u = void 0, c = jf(() => {
    var d = n ?? t.appendChild(On());
    return Gn(() => {
      if (i) {
        ge({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), He && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (Ze.nodes_end = Re), i && he();
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
function b1(e, t) {
  const n = Ts.get(e);
  return n ? (Ts.delete(e), n(t)) : Promise.resolve();
}
function we(e, t, [n, r] = [0, 0]) {
  He && n === 0 && xn();
  var o = e, i = null, s = null, a = Dt, l = n > 0 ? Zr : 0, u = !1;
  const c = (f, h = !0) => {
    u = !0, d(h, f);
  }, d = (f, h) => {
    if (a === (a = f)) return;
    let p = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Js ? r = 0 : b === Qs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = ks(), Pt(o), qt(!1), p = !0, r = -1);
    }
    a ? (i ? po(i) : h && (i = Gn(() => h(o))), s && Dr(s, () => {
      s = null;
    })) : (s ? po(s) : h && (s = Gn(() => h(o, [n + 1, r]))), i && Dr(i, () => {
      i = null;
    })), p && qt(!0);
  };
  jr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = Re);
}
function Lr(e, t) {
  return t;
}
function C1(e, t, n, r) {
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
    s = He ? Pt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ht(u)
    ) : u.appendChild(On());
  }
  He && xn();
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
    if (He) {
      var b = (
        /** @type {Comment} */
        s.data === Qs
      );
      b !== (p === 0) && (s = ks(), Pt(s), qt(!1), _ = !0);
    }
    if (He) {
      for (var k = null, v, C = 0; C < p; C++) {
        if (Re.nodeType === 8 && /** @type {Comment} */
        Re.data === ea) {
          s = /** @type {Comment} */
          Re, _ = !0, qt(!1);
          break;
        }
        var m = h[C], $ = r(m, C);
        v = Tu(
          Re,
          a,
          k,
          null,
          m,
          $,
          C,
          o,
          t,
          n
        ), a.items.set($, v), k = v;
      }
      p > 0 && Pt(ks());
    }
    He || $1(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? po(c) : c = Gn(() => i(s)) : c !== null && Dr(c, () => {
      c = null;
    })), _ && qt(!0), g(f);
  }), He && (s = Re);
}
function $1(e, t, n, r, o, i, s) {
  var S, x, P, H;
  var a = (o & wf) !== 0, l = (o & (Gs | Us)) !== 0, u = e.length, c = t.items, d = t.first, f = d, h, p = null, _, b = [], k = [], v, C, m, $;
  if (a)
    for ($ = 0; $ < u; $ += 1)
      v = e[$], C = i(v, $), m = c.get(C), m !== void 0 && ((S = m.a) == null || S.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(m));
  for ($ = 0; $ < u; $ += 1) {
    if (v = e[$], C = i(v, $), m = c.get(C), m === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      p = Tu(
        M,
        t,
        p,
        p === null ? t.first : p.next,
        v,
        C,
        $,
        r,
        o,
        s
      ), c.set(C, p), b = [], k = [], f = p.next;
      continue;
    }
    if (l && k1(m, v, $, o), (m.e.f & Dn) !== 0 && (po(m.e), a && ((x = m.a) == null || x.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(m))), m !== f) {
      if (h !== void 0 && h.has(m)) {
        if (b.length < k.length) {
          var E = k[0], V;
          p = E.prev;
          var A = b[0], O = b[b.length - 1];
          for (V = 0; V < b.length; V += 1)
            Ua(b[V], E, n);
          for (V = 0; V < k.length; V += 1)
            h.delete(k[V]);
          Bn(t, A.prev, O.next), Bn(t, p, A), Bn(t, O, E), f = E, p = O, $ -= 1, b = [], k = [];
        } else
          h.delete(m), Ua(m, f, n), Bn(t, m.prev, m.next), Bn(t, m, p === null ? t.first : p.next), Bn(t, p, m), p = m;
        continue;
      }
      for (b = [], k = []; f !== null && f.k !== C; )
        (f.e.f & Dn) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(f), k.push(f), f = f.next;
      if (f === null)
        continue;
      m = f;
    }
    b.push(m), p = m, f = m.next;
  }
  if (f !== null || h !== void 0) {
    for (var z = h === void 0 ? [] : ta(h); f !== null; )
      (f.e.f & Dn) === 0 && z.push(f), f = f.next;
    var I = z.length;
    if (I > 0) {
      var R = (o & Ul) !== 0 && u === 0 ? n : null;
      if (a) {
        for ($ = 0; $ < I; $ += 1)
          (P = z[$].a) == null || P.measure();
        for ($ = 0; $ < I; $ += 1)
          (H = z[$].a) == null || H.fix();
      }
      C1(t, z, R, c);
    }
  }
  a && Ho(() => {
    var N;
    if (_ !== void 0)
      for (m of _)
        (N = m.a) == null || N.apply();
  }), Ze.first = t.first && t.first.e, Ze.last = p && p.e;
}
function k1(e, t, n, r) {
  (r & Gs) !== 0 && Ps(e.v, t), (r & Us) !== 0 ? Ps(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Gs) !== 0, d = (l & _f) === 0, f = c ? d ? /* @__PURE__ */ ie(o) : Ar(o) : o, h = (l & Us) === 0 ? s : Ar(s), p = {
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
    return p.e = Gn(() => a(e, f, h, u), He), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
  Pe(() => {
    var a = (
      /** @type {Effect} */
      Ze
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
        Re.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw Ii(), $r;
        Lt(Re, u), i = Pt(l);
        return;
      }
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = da(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ ht(d)), Lt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ht(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ht(d)
          );
      else
        i.before(d);
    }
  });
}
function xt(e, t, n, r, o) {
  var a;
  He && xn();
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
function dr(e, t, ...n) {
  var r = e, o = vt, i;
  jr(() => {
    o !== (o = t()) && (i && (cn(i), i = null), i = Gn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), He && (r = Re);
}
function Mu(e, t, n) {
  He && xn();
  var r = e, o, i;
  jr(() => {
    o !== (o = t()) && (i && (Dr(i), i = null), o && (i = Gn(() => n(r, o))));
  }, Zr), He && (r = Re);
}
function S1(e, t, n, r, o, i) {
  let s = He;
  He && xn();
  var a, l, u = null;
  He && Re.nodeType === 1 && (u = /** @type {Element} */
  Re, xn());
  var c = (
    /** @type {TemplateNode} */
    He ? Re : e
  ), d;
  jr(() => {
    const f = t() || null;
    var h = f === "svg" ? Sf : null;
    f !== a && (d && (f === null ? Dr(d, () => {
      d = null, l = null;
    }) : f === l ? po(d) : cn(d)), f && f !== l && (d = Gn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Lt(u, u), r) {
        He && p1(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ ht(u) : u.appendChild(On())
        );
        He && (p === null ? qt(!1) : Pt(p)), r(u, p);
      }
      Ze.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, Zr), s && (qt(!0), Pt(c));
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
function _t(e, t, n) {
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
function P1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hu(e)) && (r && (r += " "), r += t);
  return r;
}
function gn(e) {
  return typeof e == "object" ? P1(e) : e ?? "";
}
const Ja = [...` 	
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
function ls(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function T1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ls)), o && l.push(...Object.keys(o).map(ls));
      var u = 0, c = -1;
      const _ = e.length;
      for (var d = 0; d < _; d++) {
        var f = e[d];
        if (a ? f === "/" && e[d - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === _ - 1) {
            if (c !== -1) {
              var h = ls(e.substring(u, c).trim());
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
function bt(e, t, n, r, o, i) {
  var s = e.__className;
  if (He || s !== n || s === void 0) {
    var a = N1(n, r, i);
    (!He || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function us(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function gt(e, t, n, r) {
  var o = e.__style;
  if (He || o !== t) {
    var i = T1(t, r);
    (!He || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (us(e, n == null ? void 0 : n[0], r[0]), us(e, n == null ? void 0 : n[1], r[1], "important")) : us(e, n, r));
  return r;
}
const io = Symbol("class"), or = Symbol("style"), Vu = Symbol("is custom element"), Du = Symbol("is html");
function ar(e) {
  if (He) {
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
    e.__on_r = n, Jf(n), w1();
  }
}
function cs(e, t) {
  var n = Yi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function M1(e, t) {
  var n = Yi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function H1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Yi(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Af] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qt(e, t, n, r, o = !1) {
  var i = Yi(e), s = i[Vu], a = !i[Du];
  let l = He && s;
  l && qt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = gn(n.class) : (r || n[io]) && (n.class = null), n[or] && (n.style ?? (n.style = null));
  var f = Au(e);
  for (const C in n) {
    let m = n[C];
    if (c && C === "value" && m == null) {
      e.value = e.__value = "", u[C] = m;
      continue;
    }
    if (C === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      bt(e, h, m, r, t == null ? void 0 : t[io], n[io]), u[C] = m, u[io] = n[io];
      continue;
    }
    if (C === "style") {
      gt(e, m, t == null ? void 0 : t[or], n[or]), u[C] = m, u[or] = n[or];
      continue;
    }
    var p = u[C];
    if (m !== p) {
      u[C] = m;
      var _ = C[0] + C[1];
      if (_ !== "$$")
        if (_ === "on") {
          const $ = {}, M = "$$" + C;
          let E = C.slice(2);
          var b = c1(E);
          if (l1(E) && (E = E.slice(0, -7), $.capture = !0), !b && p) {
            if (m != null) continue;
            e.removeEventListener(E, u[M], $), u[M] = null;
          }
          if (m != null)
            if (b)
              e[`__${E}`] = m, Ur([E]);
            else {
              let V = function(A) {
                u[C].call(this, A);
              };
              u[M] = Su(E, e, V, $);
            }
          else b && (e[`__${E}`] = void 0);
        } else if (C === "style")
          $e(e, C, m);
        else if (C === "autofocus")
          m1(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!s && (C === "__value" || C === "value" && m != null))
          e.value = e.__value = m;
        else if (C === "selected" && c)
          H1(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var k = C;
          a || (k = f1(k));
          var v = k === "defaultValue" || k === "defaultChecked";
          if (m == null && !s && !v)
            if (i[C] = null, k === "value" || k === "checked") {
              let $ = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (k === "value") {
                let E = $.defaultValue;
                $.removeAttribute(k), $.defaultValue = E, $.value = $.__value = M ? E : null;
              } else {
                let E = $.defaultChecked;
                $.removeAttribute(k), $.defaultChecked = E, $.checked = M ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else v || f.includes(k) && (s || typeof m != "string") ? e[k] = m : typeof m != "function" && $e(e, k, m);
        }
    }
  }
  return l && qt(!0), u;
}
function Yi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vu]: e.nodeName.includes("-"),
      [Du]: e.namespaceURI === Ef
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
const Di = class Di {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, Vi);
    /** */
    rr(this, Yn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    rr(this, Hr);
    /** @type {ResizeObserverOptions} */
    rr(this, To);
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
        Di.entries.set(n.target, n);
        for (var r of ct(this, Yn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
kt(Di, "entries", /* @__PURE__ */ new WeakMap());
let Ms = Di;
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
function $n(e = {}, t, n, r) {
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
function Ie(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
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
  n.b.length && Zf(() => {
    rl(t, r), vo(n.b);
  }), ln(() => {
    const o = Cn(() => n.m.map(Mf));
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
function We(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Mo(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function tn(e) {
  Xe === null && Ai(), Xr && Xe.l !== null ? A1(Xe).m.push(e) : ln(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ga(e) {
  Xe === null && Ai(), tn(() => () => Cn(e));
}
function D1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Fi() {
  const e = Xe;
  return e === null && Ai(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Mo(o) ? o.slice() : [o], a = D1(
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
function ha(e, t, n) {
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
const xr = [];
function Kt(e, t) {
  return {
    subscribe: ke(e, t).subscribe
  };
}
function ke(e, t = vt) {
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
  function s(a, l = vt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || vt), a(
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
  return Kt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, d = vt;
    const f = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : d = typeof p == "function" ? p : vt;
    }, h = o.map(
      (p, _) => ha(
        p,
        (b) => {
          u[_] = b, c &= ~(1 << _), l && f();
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
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: vt
  });
  if (r.store !== e && !(Hs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = vt;
    else {
      var o = !0;
      r.unsubscribe = ha(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Hs in n ? K(e) : g(r.source);
}
function O1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = vt), e;
}
function hi(e, t) {
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
function L1(e) {
  var t = Zo;
  try {
    return Zo = !1, [e(), Zo];
  } finally {
    Zo = t;
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
function Ct(e, t, n) {
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
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Ar(0) }, z1);
}
const R1 = {
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
      const i = Vn(o, t);
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
        const o = Vn(r, t);
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
function lt(...e) {
  return new Proxy({ props: e }, R1);
}
function ol(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var M;
  var o = (n & xf) !== 0, i = !Xr || (n & bf) !== 0, s = (n & Cf) !== 0, a = (n & $f) !== 0, l = !1, u;
  s ? [u, l] = L1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Xn in e || oa in e, d = s && (((M = Vn(e, t)) == null ? void 0 : M.set) ?? (c && t in e && ((E) => e[t] = E))) || void 0, f = (
    /** @type {V} */
    r
  ), h = !0, p = !1, _ = () => (p = !0, h && (h = !1, a ? f = Cn(
    /** @type {() => V} */
    r
  ) : f = /** @type {V} */
  r), f);
  u === void 0 && r !== void 0 && (d && i && Bf(), u = _(), d && d(u));
  var b;
  if (i)
    b = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? _() : (h = !0, p = !1, E);
    };
  else {
    var k = (o ? Vr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Vf, b = () => {
      var E = g(k);
      return E !== void 0 && (f = /** @type {V} */
      void 0), E === void 0 ? f : E;
    };
  }
  if ((n & Jl) === 0)
    return b;
  if (d) {
    var v = e.$$legacy;
    return function(E, V) {
      return arguments.length > 0 ? ((!i || !V || v || l) && d(V ? b() : E), E) : b();
    };
  }
  var C = !1, m = /* @__PURE__ */ ie(u), $ = /* @__PURE__ */ Vr(() => {
    var E = b(), V = g(m);
    return C ? (C = !1, V) : m.v = E;
  });
  return s && g($), o || ($.equals = aa), function(E, V) {
    if (arguments.length > 0) {
      const A = V ? g($) : i && s ? sn(E) : E;
      if (!$.equals(A)) {
        if (C = !0, U(m, A), p && f !== void 0 && (f = A), ol($))
          return E;
        Cn(() => g($));
      }
      return E;
    }
    return ol($) ? $.v : g($);
  };
}
function B1(e) {
  return new q1(e);
}
var Tn, Gt;
class q1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    rr(this, Tn);
    /** @type {Record<string, any>} */
    rr(this, Gt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ ie(a);
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
    ro(this, Gt, (t.hydrate ? x1 : Pu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), ro(this, Tn, o.$$events);
    for (const s of Object.keys(ct(this, Gt)))
      s === "$set" || s === "$destroy" || s === "$on" || ho(this, s, {
        get() {
          return ct(this, Gt)[s];
        },
        /** @param {any} value */
        set(a) {
          ct(this, Gt)[s] = a;
        },
        enumerable: !0
      });
    ct(this, Gt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, ct(this, Gt).$destroy = () => {
      b1(ct(this, Gt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ct(this, Gt).$set(t);
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
    ct(this, Gt).$destroy();
  }
}
Tn = new WeakMap(), Gt = new WeakMap();
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
    kt(this, "$$ctor");
    /** Slots */
    kt(this, "$$s");
    /** @type {any} The Svelte component instance */
    kt(this, "$$c");
    /** Whether or not the custom element is connected */
    kt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    kt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    kt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    kt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    kt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    kt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    kt(this, "$$me");
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
      const n = {}, r = Y1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = ti(i, o.value, this.$$p_d, "toProp"));
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
        Kr(() => {
          var o;
          this.$$r = !0;
          for (const i of ai(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = ti(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ti(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return ai(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function ti(e, t, n, r) {
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
function ue(e, t, n, r, o, i) {
  let s = class extends Lu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ai(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ai(t).forEach((a) => {
    ho(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var d;
        l = ti(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (d = Vn(u, a)) == null ? void 0 : d.get;
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
var F1 = { value: () => {
} };
function Wi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ni(n);
}
function ni(e) {
  this._ = e;
}
function W1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ni.prototype = Wi.prototype = {
  constructor: ni,
  on: function(e, t) {
    var n = this._, r = W1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = X1(n[o], e.name))) return o;
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
    return new ni(e);
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
function il(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = F1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Vs = "http://www.w3.org/1999/xhtml";
const sl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), sl.hasOwnProperty(t) ? { space: sl[t], local: e } : e;
}
function Z1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Vs && t.documentElement.namespaceURI === Vs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function K1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Iu(e) {
  var t = Xi(e);
  return (t.local ? K1 : Z1)(t);
}
function j1() {
}
function va(e) {
  return e == null ? j1 : function() {
    return this.querySelector(e);
  };
}
function G1(e) {
  typeof e != "function" && (e = va(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Xt(r, this._parents);
}
function U1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function J1() {
  return [];
}
function zu(e) {
  return e == null ? J1 : function() {
    return this.querySelectorAll(e);
  };
}
function Q1(e) {
  return function() {
    return U1(e.apply(this, arguments));
  };
}
function eg(e) {
  typeof e == "function" ? e = Q1(e) : e = zu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
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
  return this.select(e == null ? rg : ng(typeof e == "function" ? e : Bu(e)));
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
  return this.selectAll(e == null ? sg : ag(typeof e == "function" ? e : Bu(e)));
}
function ug(e) {
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function qu(e) {
  return new Array(e.length);
}
function cg() {
  return new Xt(this._enter || this._groups.map(qu), this._parents);
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
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new vi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new vi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function hg(e) {
  return e.__data__;
}
function vg(e, t) {
  if (!arguments.length) return Array.from(this, hg);
  var n = t ? gg : fg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = dg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, h = pg(e.call(c, c && c.__data__, u, r)), p = h.length, _ = a[u] = new Array(p), b = s[u] = new Array(p), k = l[u] = new Array(f);
    n(c, d, _, b, k, h, t);
    for (var v = 0, C = 0, m, $; v < p; ++v)
      if (m = _[v]) {
        for (v >= C && (C = v + 1); !($ = b[C]) && ++C < p; ) ;
        m._next = $ || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function pg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mg() {
  return new Xt(this._exit || this._groups.map(qu), this._parents);
}
function yg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function wg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), h, p = 0; p < d; ++p)
      (h = u[p] || c[p]) && (f[p] = h);
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
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
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
function $g() {
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
function Eg() {
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
  var n = Xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tg : Ng : typeof t == "function" ? n.local ? Dg : Vg : n.local ? Hg : Mg)(n, t));
}
function Yu(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Ig : Lg)(e, t, n ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || Yu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function qg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Yg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rg : typeof t == "function" ? qg : Bg)(e, t)) : this.node()[e];
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
function Fg(e) {
  return function() {
    Xu(this, e);
  };
}
function Wg(e) {
  return function() {
    Zu(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xu : Zu)(this, e);
  };
}
function Zg(e, t) {
  var n = Fu(e + "");
  if (arguments.length < 2) {
    for (var r = pa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xg : t ? Fg : Wg)(n, t));
}
function Kg() {
  this.textContent = "";
}
function jg(e) {
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
  return arguments.length ? this.each(e == null ? Kg : (typeof e == "function" ? Gg : jg)(e)) : this.node().textContent;
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
  var t = typeof e == "function" ? e : Iu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ah() {
  return null;
}
function lh(e, t) {
  var n = typeof e == "function" ? e : Iu(e), r = t == null ? ah : typeof t == "function" ? t : va(t);
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
function Ku(e, t, n) {
  var r = Yu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _h(e, t) {
  return function() {
    return Ku(this, e, t);
  };
}
function xh(e, t) {
  return function() {
    return Ku(this, e, t.apply(this, arguments));
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
var ju = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Do() {
  return new Xt([[document.documentElement]], ju);
}
function $h() {
  return this;
}
Xt.prototype = Do.prototype = {
  constructor: Xt,
  select: G1,
  selectAll: eg,
  selectChild: og,
  selectChildren: lg,
  filter: ug,
  data: vg,
  enter: cg,
  exit: mg,
  join: yg,
  merge: wg,
  selection: $h,
  order: _g,
  sort: xg,
  call: Cg,
  nodes: $g,
  node: kg,
  size: Eg,
  empty: Sg,
  each: Pg,
  attr: Ag,
  style: zg,
  property: Yg,
  classed: Zg,
  text: Ug,
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
function Ut(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], ju);
}
function kh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
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
const Eh = { passive: !1 }, _o = { capture: !0, passive: !1 };
function ds(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gu(e) {
  var t = e.document.documentElement, n = Ut(e).on("dragstart.drag", kr, _o);
  "onselectstart" in t ? n.on("selectstart.drag", kr, _o) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Uu(e, t) {
  var n = e.document.documentElement, r = Ut(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, _o), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ko = (e) => () => e;
function Ds(e, {
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
Ds.prototype.on = function() {
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
  var e = Sh, t = Ph, n = Nh, r = Th, o = {}, i = Wi("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(m) {
    m.on("mousedown.drag", h).filter(r).on("touchstart.drag", b).on("touchmove.drag", k, Eh).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(m, $) {
    if (!(c || !e.call(this, m, $))) {
      var M = C(this, t.call(this, m, $), m, $, "mouse");
      M && (Ut(m.view).on("mousemove.drag", p, _o).on("mouseup.drag", _, _o), Gu(m.view), ds(m), u = !1, a = m.clientX, l = m.clientY, M("start", m));
    }
  }
  function p(m) {
    if (kr(m), !u) {
      var $ = m.clientX - a, M = m.clientY - l;
      u = $ * $ + M * M > d;
    }
    o.mouse("drag", m);
  }
  function _(m) {
    Ut(m.view).on("mousemove.drag mouseup.drag", null), Uu(m.view, u), kr(m), o.mouse("end", m);
  }
  function b(m, $) {
    if (e.call(this, m, $)) {
      var M = m.changedTouches, E = t.call(this, m, $), V = M.length, A, O;
      for (A = 0; A < V; ++A)
        (O = C(this, E, m, $, M[A].identifier, M[A])) && (ds(m), O("start", m, M[A]));
    }
  }
  function k(m) {
    var $ = m.changedTouches, M = $.length, E, V;
    for (E = 0; E < M; ++E)
      (V = o[$[E].identifier]) && (kr(m), V("drag", m, $[E]));
  }
  function v(m) {
    var $ = m.changedTouches, M = $.length, E, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < M; ++E)
      (V = o[$[E].identifier]) && (ds(m), V("end", m, $[E]));
  }
  function C(m, $, M, E, V, A) {
    var O = i.copy(), z = on(A || M, $), I, R, S;
    if ((S = n.call(m, new Ds("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: V,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), E)) != null)
      return I = S.x - z[0] || 0, R = S.y - z[1] || 0, function x(P, H, N) {
        var T = z, L;
        switch (P) {
          case "start":
            o[V] = x, L = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            z = on(N || H, $), L = s;
            break;
        }
        O.call(
          P,
          m,
          new Ds(P, {
            sourceEvent: H,
            subject: S,
            target: f,
            identifier: V,
            active: L,
            x: z[0] + I,
            y: z[1] + R,
            dx: z[0] - T[0],
            dy: z[1] - T[1],
            dispatch: O
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
var xo = 0.7, pi = 1 / xo, Er = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hh = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`), Dh = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Ah = new RegExp(`^rgba\\(${Er},${Er},${Er},${bo}\\)$`), Oh = new RegExp(`^rgba\\(${yn},${yn},${yn},${bo}\\)$`), Lh = new RegExp(`^hsl\\(${bo},${yn},${yn}\\)$`), Ih = new RegExp(`^hsla\\(${bo},${yn},${yn},${bo}\\)$`), al = {
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
  formatHex8: zh,
  formatHsl: Rh,
  formatRgb: ul,
  toString: ul
});
function ll() {
  return this.rgb().formatHex();
}
function zh() {
  return this.rgb().formatHex8();
}
function Rh() {
  return Qu(this).formatHsl();
}
function ul() {
  return this.rgb().formatRgb();
}
function Co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? cl(t) : n === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? jo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? jo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = Dh.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ah.exec(e)) ? jo(t[1], t[2], t[3], t[4]) : (t = Oh.exec(e)) ? jo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lh.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ih.exec(e)) ? gl(t[1], t[2] / 100, t[3] / 100, t[4]) : al.hasOwnProperty(e) ? cl(al[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function cl(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function jo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ot(e, t, n, r);
}
function Bh(e) {
  return e instanceof Ao || (e = Co(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function As(e, t, n, r) {
  return arguments.length === 1 ? Bh(e) : new Ot(e, t, n, r ?? 1);
}
function Ot(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ma(Ot, As, Ju(Ao, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(lr(this.r), lr(this.g), lr(this.b), mi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: dl,
  // Deprecated! Use color.formatHex.
  formatHex: dl,
  formatHex8: qh,
  formatRgb: fl,
  toString: fl
}));
function dl() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function qh() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fl() {
  const e = mi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function mi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
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
function Yh(e, t, n, r) {
  return arguments.length === 1 ? Qu(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ma(an, Yh, Ju(Ao, {
  brighter(e) {
    return e = e == null ? pi : Math.pow(pi, e), new an(this.h, this.s, this.l * e, this.opacity);
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
    return new an(hl(this.h), Go(this.s), Go(this.l), mi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = mi(this.opacity);
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
function Fh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xh(e) {
  return (e = +e) == 1 ? tc : function(t, n) {
    return n - t ? Wh(t, n, e) : ec(isNaN(t) ? n : t);
  };
}
function tc(e, t) {
  var n = t - e;
  return n ? Fh(e, n) : ec(isNaN(e) ? t : e);
}
const vl = function e(t) {
  var n = Xh(t);
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
function Zh(e) {
  return function() {
    return e;
  };
}
function Kh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function jh(e, t) {
  var n = Os.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Os.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qn(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Kh(l[0].x) : Zh(t) : (t = l.length, function(u) {
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
function Gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ls : nc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Uh(e) {
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
      for (var p = -1, _ = f.length, b; ++p < _; ) d[(b = f[p]).i] = b.x(h);
      return d.join("");
    };
  };
}
var Jh = rc(Gh, "px, ", "px)", "deg)"), Qh = rc(Uh, ", ", ")", ")"), ev = 1e-12;
function ml(e) {
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
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], h = c - a, p = d - l, _ = h * h + p * p, b, k;
    if (_ < ev)
      k = Math.log(f / u) / t, b = function(E) {
        return [
          a + E * h,
          l + E * p,
          u * Math.exp(t * E * k)
        ];
      };
    else {
      var v = Math.sqrt(_), C = (f * f - u * u + r * _) / (2 * u * n * v), m = (f * f - u * u - r * _) / (2 * f * n * v), $ = Math.log(Math.sqrt(C * C + 1) - C), M = Math.log(Math.sqrt(m * m + 1) - m);
      k = (M - $) / t, b = function(E) {
        var V = E * k, A = ml($), O = u / (n * v) * (A * nv(t * V + $) - tv($));
        return [
          a + O * h,
          l + O * p,
          u * A / ml(t * V + $)
        ];
      };
    }
    return b.duration = k * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, uo = 0, so = 0, oc = 1e3, yi, co, wi = 0, fr = 0, Zi = 0, $o = typeof performance == "object" && performance.now ? performance : Date, ic = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ya() {
  return fr || (ic(ov), fr = $o.now() + Zi);
}
function ov() {
  fr = 0;
}
function _i() {
  this._call = this._time = this._next = null;
}
_i.prototype = sc.prototype = {
  constructor: _i,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ya() : +n) + (t == null ? 0 : +t), !this._next && co !== this && (co ? co._next = this : yi = this, co = this), this._call = e, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function sc(e, t, n) {
  var r = new _i();
  return r.restart(e, t, n), r;
}
function iv() {
  ya(), ++zr;
  for (var e = yi, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function yl() {
  fr = (wi = $o.now()) + Zi, zr = uo = 0;
  try {
    iv();
  } finally {
    zr = 0, av(), fr = 0;
  }
}
function sv() {
  var e = $o.now(), t = e - wi;
  t > oc && (Zi -= t, wi = e);
}
function av() {
  for (var e, t = yi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : yi = n);
  co = e, Is(r);
}
function Is(e) {
  if (!zr) {
    uo && (uo = clearTimeout(uo));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (uo = setTimeout(yl, e - $o.now() - Zi)), so && (so = clearInterval(so))) : (so || (wi = $o.now(), so = setInterval(sv, oc)), zr = 1, ic(yl));
  }
}
function wl(e, t, n) {
  var r = new _i();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var lv = Wi("start", "end", "cancel", "interrupt"), uv = [], ac = 0, _l = 1, zs = 2, ri = 3, xl = 4, Rs = 5, oi = 6;
function Ki(e, t, n, r, o, i) {
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
  if (n.state > ri) throw new Error("too late; already running");
  return n;
}
function hn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function cv(e, t, n) {
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
        if (h.state === ri) return wl(s);
        h.state === xl ? (h.state = oi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = oi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (wl(function() {
      n.state === ri && (n.state = xl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = zs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === zs) {
      for (n.state = ri, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
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
    n.state = oi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ii(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > zs && r.state < Rs, r.state = oi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function dv(e) {
  return this.each(function() {
    ii(this, e);
  });
}
function fv(e, t) {
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
function gv(e, t, n) {
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
function hv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = hn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? fv : gv)(n, e, t));
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
  return (typeof t == "number" ? qn : t instanceof Co ? vl : (n = Co(t)) ? (t = n, vl) : jh)(e, t);
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
  var n = Xi(e), r = n === "transform" ? Qh : lc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _v : wv)(n, r, _a(this, "attr." + e, t)) : t == null ? (n.local ? pv : vv)(n) : (n.local ? yv : mv)(n, r, t));
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
function $v(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Cv(e, i)), n;
  }
  return o._value = t, o;
}
function kv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bv(e, i)), n;
  }
  return o._value = t, o;
}
function Ev(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? $v : kv)(r, t));
}
function Sv(e, t) {
  return function() {
    wa(this, e).delay = +t.apply(this, arguments);
  };
}
function Pv(e, t) {
  return t = +t, function() {
    wa(this, e).delay = t;
  };
}
function Nv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Sv : Pv)(t, e)) : hn(this.node(), t).delay;
}
function Tv(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Mv(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Hv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tv : Mv)(t, e)) : hn(this.node(), t).duration;
}
function Vv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Dv(e) {
  var t = this._id;
  return arguments.length ? this.each(Vv(t, e)) : hn(this.node(), t).ease;
}
function Av(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Ov(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Av(this._id, e));
}
function Lv(e) {
  typeof e != "function" && (e = Ru(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function Iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, h = 0; h < c; ++h)
      (f = l[h] || u[h]) && (d[h] = f);
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
  var r, o, i = zv(t) ? wa : Sn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Bv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? hn(this.node(), n).on.on(e) : this.each(Rv(n, e, t));
}
function qv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Yv() {
  return this.on("end.remove", qv(this._id));
}
function Fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = va(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ki(u[f], t, n, f, u, hn(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Wv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), h, p = hn(c, n), _ = 0, b = f.length; _ < b; ++_)
          (h = f[_]) && Ki(h, t, n, _, f, p);
        i.push(f), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Xv = Do.prototype.constructor;
function Zv() {
  return new Xv(this._groups, this._parents);
}
function Kv(e, t) {
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
function Gv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ir(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? a || (a = uc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Jv(e, t, n) {
  var r = (e += "") == "transform" ? Jh : lc;
  return t == null ? this.styleTween(e, Kv(e, r)).on("end.style." + e, uc(e)) : typeof t == "function" ? this.styleTween(e, Gv(e, r, _a(this, "style." + e, t))).each(Uv(this._id, e)) : this.styleTween(e, jv(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? r0(_a(this, "text", e)) : n0(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = cc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = hn(l, t);
        Ki(l, e, n, u, s, {
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
      var u = Sn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var c0 = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function cc() {
  return ++c0;
}
var Nn = Do.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Fv,
  selectAll: Wv,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: Lv,
  merge: Iv,
  selection: Zv,
  transition: l0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: Bv,
  attr: xv,
  attrTween: Ev,
  style: Jv,
  styleTween: t0,
  text: o0,
  textTween: a0,
  remove: Yv,
  tween: hv,
  delay: Nv,
  duration: Hv,
  ease: Dv,
  easeVarying: Ov,
  end: u0,
  [Symbol.iterator]: Nn[Symbol.iterator]
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
  e instanceof Ln ? (t = e._id, e = e._name) : (t = cc(), (n = f0).time = ya(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ki(l, e, t, u, s, n || g0(l, t));
  return new Ln(r, this._parents, e, t);
}
Do.prototype.interrupt = dv;
Do.prototype.transition = h0;
const Jo = (e) => () => e;
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
var ji = new Mn(1, 0, 0);
dc.prototype = Mn.prototype;
function dc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ji;
  return e.__zoom;
}
function hs(e) {
  e.stopImmediatePropagation();
}
function ao(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function p0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function m0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function bl() {
  return this.__zoom || ji;
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
function fc() {
  var e = p0, t = m0, n = _0, r = y0, o = w0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rv, u = Wi("start", "zoom", "end"), c, d, f, h = 500, p = 150, _ = 0, b = 10;
  function k(S) {
    S.property("__zoom", bl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, x, P, H) {
    var N = S.selection ? S.selection() : S;
    N.property("__zoom", bl), S !== N ? $(S, x, P, H) : N.interrupt().each(function() {
      M(this, arguments).event(H).start().zoom(null, typeof x == "function" ? x.apply(this, arguments) : x).end();
    });
  }, k.scaleBy = function(S, x, P, H) {
    k.scaleTo(S, function() {
      var N = this.__zoom.k, T = typeof x == "function" ? x.apply(this, arguments) : x;
      return N * T;
    }, P, H);
  }, k.scaleTo = function(S, x, P, H) {
    k.transform(S, function() {
      var N = t.apply(this, arguments), T = this.__zoom, L = P == null ? m(N) : typeof P == "function" ? P.apply(this, arguments) : P, q = T.invert(L), X = typeof x == "function" ? x.apply(this, arguments) : x;
      return n(C(v(T, X), L, q), N, s);
    }, P, H);
  }, k.translateBy = function(S, x, P, H) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof x == "function" ? x.apply(this, arguments) : x,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, H);
  }, k.translateTo = function(S, x, P, H, N) {
    k.transform(S, function() {
      var T = t.apply(this, arguments), L = this.__zoom, q = H == null ? m(T) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(ji.translate(q[0], q[1]).scale(L.k).translate(
        typeof x == "function" ? -x.apply(this, arguments) : -x,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), T, s);
    }, H, N);
  };
  function v(S, x) {
    return x = Math.max(i[0], Math.min(i[1], x)), x === S.k ? S : new Mn(x, S.x, S.y);
  }
  function C(S, x, P) {
    var H = x[0] - P[0] * S.k, N = x[1] - P[1] * S.k;
    return H === S.x && N === S.y ? S : new Mn(S.k, H, N);
  }
  function m(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function $(S, x, P, H) {
    S.on("start.zoom", function() {
      M(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var N = this, T = arguments, L = M(N, T).event(H), q = t.apply(N, T), X = P == null ? m(q) : typeof P == "function" ? P.apply(N, T) : P, Z = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), Q = N.__zoom, j = typeof x == "function" ? x.apply(N, T) : x, ce = l(Q.invert(X).concat(Z / Q.k), j.invert(X).concat(Z / j.k));
      return function(de) {
        if (de === 1) de = j;
        else {
          var ye = ce(de), re = Z / ye[2];
          de = new Mn(re, X[0] - ye[0] * re, X[1] - ye[1] * re);
        }
        L.zoom(null, de);
      };
    });
  }
  function M(S, x, P) {
    return !P && S.__zooming || new E(S, x);
  }
  function E(S, x) {
    this.that = S, this.args = x, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, x), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, x) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = x.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = x.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = x.invert(this.touch1[0])), this.that.__zoom = x, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var x = Ut(this.that).datum();
      u.call(
        S,
        this.that,
        new v0(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        x
      );
    }
  };
  function V(S, ...x) {
    if (!e.apply(this, arguments)) return;
    var P = M(this, x).event(S), H = this.__zoom, N = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), T = on(S);
    if (P.wheel)
      (P.mouse[0][0] !== T[0] || P.mouse[0][1] !== T[1]) && (P.mouse[1] = H.invert(P.mouse[0] = T)), clearTimeout(P.wheel);
    else {
      if (H.k === N) return;
      P.mouse = [T, H.invert(T)], ii(this), P.start();
    }
    ao(S), P.wheel = setTimeout(L, p), P.zoom("mouse", n(C(v(H, N), P.mouse[0], P.mouse[1]), P.extent, s));
    function L() {
      P.wheel = null, P.end();
    }
  }
  function A(S, ...x) {
    if (f || !e.apply(this, arguments)) return;
    var P = S.currentTarget, H = M(this, x, !0).event(S), N = Ut(S.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), T = on(S, P), L = S.clientX, q = S.clientY;
    Gu(S.view), hs(S), H.mouse = [T, this.__zoom.invert(T)], ii(this), H.start();
    function X(Q) {
      if (ao(Q), !H.moved) {
        var j = Q.clientX - L, ce = Q.clientY - q;
        H.moved = j * j + ce * ce > _;
      }
      H.event(Q).zoom("mouse", n(C(H.that.__zoom, H.mouse[0] = on(Q, P), H.mouse[1]), H.extent, s));
    }
    function Z(Q) {
      N.on("mousemove.zoom mouseup.zoom", null), Uu(Q.view, H.moved), ao(Q), H.event(Q).end();
    }
  }
  function O(S, ...x) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, H = on(S.changedTouches ? S.changedTouches[0] : S, this), N = P.invert(H), T = P.k * (S.shiftKey ? 0.5 : 2), L = n(C(v(P, T), H, N), t.apply(this, x), s);
      ao(S), a > 0 ? Ut(this).transition().duration(a).call($, L, H, S) : Ut(this).call(k.transform, L, H, S);
    }
  }
  function z(S, ...x) {
    if (e.apply(this, arguments)) {
      var P = S.touches, H = P.length, N = M(this, x, S.changedTouches.length === H).event(S), T, L, q, X;
      for (hs(S), L = 0; L < H; ++L)
        q = P[L], X = on(q, this), X = [X, this.__zoom.invert(X), q.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== X[2] && (N.touch1 = X, N.taps = 0) : (N.touch0 = X, T = !0, N.taps = 1 + !!c);
      c && (c = clearTimeout(c)), T && (N.taps < 2 && (d = X[0], c = setTimeout(function() {
        c = null;
      }, h)), ii(this), N.start());
    }
  }
  function I(S, ...x) {
    if (this.__zooming) {
      var P = M(this, x).event(S), H = S.changedTouches, N = H.length, T, L, q, X;
      for (ao(S), T = 0; T < N; ++T)
        L = H[T], q = on(L, this), P.touch0 && P.touch0[2] === L.identifier ? P.touch0[0] = q : P.touch1 && P.touch1[2] === L.identifier && (P.touch1[0] = q);
      if (L = P.that.__zoom, P.touch1) {
        var Z = P.touch0[0], Q = P.touch0[1], j = P.touch1[0], ce = P.touch1[1], de = (de = j[0] - Z[0]) * de + (de = j[1] - Z[1]) * de, ye = (ye = ce[0] - Q[0]) * ye + (ye = ce[1] - Q[1]) * ye;
        L = v(L, Math.sqrt(de / ye)), q = [(Z[0] + j[0]) / 2, (Z[1] + j[1]) / 2], X = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (P.touch0) q = P.touch0[0], X = P.touch0[1];
      else return;
      P.zoom("touch", n(C(L, q, X), P.extent, s));
    }
  }
  function R(S, ...x) {
    if (this.__zooming) {
      var P = M(this, x).event(S), H = S.changedTouches, N = H.length, T, L;
      for (hs(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), T = 0; T < N; ++T)
        L = H[T], P.touch0 && P.touch0[2] === L.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === L.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (L = on(L, this), Math.hypot(d[0] - L[0], d[1] - L[1]) < b)) {
        var q = Ut(this).on("dblclick.zoom");
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
    return arguments.length ? (b = +S, k) : b;
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
}, xi = [
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
var bi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(bi || (bi = {}));
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
var ko;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ko || (ko = {}));
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
function $l(e, t, n) {
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
const C0 = (e) => "id" in e && "source" in e && "target" in e, $0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), xa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Oo = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, k0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : xa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ci(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Gi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ui(n);
}, Lo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Ci(r);
      n = Gi(n, o);
    }
  }), Ui(n);
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
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, _ = Eo(a, qr(u)), b = (h ?? 0) * (p ?? 0), k = i && _ > 0;
    (!u.internals.handleBounds || k || _ >= b || u.dragging) && l.push(u);
  }
  return l;
}, qs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function E0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function S0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = E0(e, s), l = Lo(a), u = Ca(l, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function P0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const kl = (e, t, n) => e < t ? Br(Math.abs(e - t), 1, t) / t : e > n ? -Br(Math.abs(e - n), 1, t) / t : 0, pc = (e, t, n = 15, r = 40) => {
  const o = kl(e.x, r, t.width - r) * n, i = kl(e.y, r, t.height - r) * n;
  return [o, i];
}, Gi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ys = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ui = ({ x: e, y: t, x2: n, y2: r }) => ({
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
}, Ci = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = xa(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, mc = (e, t) => Ui(Gi(Ys(e), Ys(t))), Eo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), N0 = (e, t) => {
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
function T0(e, t, n) {
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
function M0(e, t, n, r, o, i) {
  const { x: s, y: a } = $i(e, [t, n, r]), { x: l, y: u } = $i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const Ca = (e, t, n, r, o, i) => {
  const s = T0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), c = Br(u, r, o), d = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - d * c, p = n / 2 - f * c, _ = M0(e, h, p, c, t, n), b = {
    left: Math.min(_.left - s.left, 0),
    top: Math.min(_.top - s.top, 0),
    right: Math.min(_.right - s.right, 0),
    bottom: Math.min(_.bottom - s.bottom, 0)
  };
  return {
    x: h - b.left + b.right,
    y: p - b.top + b.bottom,
    zoom: c
  };
}, ki = () => {
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
function H0(e, t = { width: 0, height: 0 }, n, r, o) {
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
}), D0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, A0 = ["INPUT", "SELECT", "TEXTAREA"];
function O0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : A0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
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
function L0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
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
  }), [d, f, h, p] = L0({
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
function I0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function z0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Gi(Ci(e), Ci(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Eo(s, Ui(i)) > 0;
}
const R0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, B0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), q0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return C0(e) ? n = { ...e } : n = {
    ...e,
    id: R0(e)
  }, B0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
}, Y0 = ({ source: e, sourcePosition: t = Me.Bottom, target: n }) => t === Me.Left || t === Me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Tl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function F0({ source: e, sourcePosition: t = Me.Bottom, target: n, targetPosition: r = Me.Top, center: o, offset: i }) {
  const s = Nl[t], a = Nl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = Y0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], p, _;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, C, m, $] = bc({
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
      const R = Math.abs(e[d] - n[d]);
      if (R <= i) {
        const S = Math.min(i - 1, i - R);
        s[d] === f ? b[d] = (l[d] > e[d] ? -1 : 1) * S : k[d] = (u[d] > n[d] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const R = d === "x" ? "y" : "x", S = s[d] === a[R], x = l[R] > u[R], P = l[R] < u[R];
      (s[d] === 1 && (!S && x || S && P) || s[d] !== 1 && (!S && P || S && x)) && (h = d === "x" ? E : V);
    }
    const A = { x: l.x + b.x, y: l.y + b.y }, O = { x: u.x + k.x, y: u.y + k.y }, z = Math.max(Math.abs(A.x - h[0].x), Math.abs(O.x - h[0].x)), I = Math.max(Math.abs(A.y - h[0].y), Math.abs(O.y - h[0].y));
    z >= I ? (p = (A.x + O.x) / 2, _ = h[0].y) : (p = h[0].x, _ = (A.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], p, _, m, $];
}
function W0(e, t, n, r) {
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
function Ei({ sourceX: e, sourceY: t, sourcePosition: n = Me.Bottom, targetX: r, targetY: o, targetPosition: i = Me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, d, f, h, p] = F0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, k, v) => {
    let C = "";
    return v > 0 && v < c.length - 1 ? C = W0(c[v - 1], k, c[v + 1], s) : C = `${v === 0 ? "M" : "L"}${k.x} ${k.y}`, b += C, b;
  }, ""), d, f, h, p];
}
function Ml(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function X0(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!Ml(t) || !Ml(n))
    return null;
  const r = t.internals.handleBounds || Hl(t.handles), o = n.internals.handleBounds || Hl(n.handles), i = Vl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Vl(
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
function Vl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ws(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Z0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ws(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function K0(e, t, n, r, o) {
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
const $a = {
  nodeOrigin: [0, 0],
  nodeExtent: xi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, j0 = {
  ...$a,
  checkEquality: !0
};
function ka(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function G0(e, t, n) {
  const r = ka($a, n);
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
  const o = ka(j0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const f = Oo(c, o.nodeOrigin), h = Yr(c.extent) ? c.extent : o.nodeExtent, p = hr(f, h, nr(c));
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
          z: $c(c, a),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (i = !1), c.parentId && Ea(d, t, n, r);
  }
  return i;
}
function U0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ea(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ka($a, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  U0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = J0(e, l, i, s, u), { positionAbsolute: h } = e.internals, p = c !== h.x || d !== h.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : h,
      z: f
    }
  });
}
function $c(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function J0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Oo(e, n), u = Yr(e.extent) ? hr(l, e.extent, a) : l;
  let c = hr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = vc(c, a, t));
  const d = $c(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function Q0(e, t, n, r = [0, 0]) {
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
    const c = l.internals.positionAbsolute, d = nr(l), f = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(d.width, Math.round(a.width)), b = Math.max(d.height, Math.round(a.height)), k = (_ - d.width) * f[0], v = (b - d.height) * f[1];
    (h > 0 || p > 0 || k || v) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + k,
        y: l.position.y - p + v
      }
    }), (C = n.get(u)) == null || C.forEach((m) => {
      e.some(($) => $.id === m.id) || o.push({
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
        height: b + (p ? f[1] * p - v : 0)
      }
    });
  }), o;
}
function ep(e, t, n, r, o, i) {
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
    const f = Q0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function tp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Dl(e, t, n, r, o, i) {
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
function kc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Dl("source", l, c, e, o, s), Dl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function np(e, t) {
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
function rp(e, t, n, r) {
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
function op({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function p({ noDragClassName: b, handleSelector: k, domNode: v, isSelectable: C, nodeId: m, nodeClickDistance: $ = 0 }) {
    f = Ut(v);
    function M({ x: O, y: z }, I) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: x, snapToGrid: P, nodeOrigin: H, onNodeDrag: N, onSelectionDrag: T, onError: L, updateNodePositions: q } = t();
      i = { x: O, y: z };
      let X = !1, Z = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const Q = Lo(a);
        Z = Ys(Q);
      }
      for (const [Q, j] of a) {
        if (!R.has(Q))
          continue;
        let ce = { x: O - j.distance.x, y: z - j.distance.y };
        P && (ce = ba(ce, x));
        let de = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !j.extent) {
          const { positionAbsolute: Te } = j.internals, _e = Te.x - Z.x + S[0][0], Ce = Te.x + j.measured.width - Z.x2 + S[1][0], se = Te.y - Z.y + S[0][1], oe = Te.y + j.measured.height - Z.y2 + S[1][1];
          de = [
            [_e, se],
            [Ce, oe]
          ];
        }
        const { position: ye, positionAbsolute: re } = P0({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: R,
          nodeExtent: de,
          nodeOrigin: H,
          onError: L
        });
        X = X || j.position.x !== ye.x || j.position.y !== ye.y, j.position = ye, j.internals.positionAbsolute = re;
      }
      if (X && (q(a, !0), I && (r || N || !m && T))) {
        const [Q, j] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(I, a, Q, j), N == null || N(I, Q, j), m || T == null || T(I, j);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: O, panBy: z, autoPanSpeed: I, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, x] = pc(u, c, I);
      (S !== 0 || x !== 0) && (i.x = (i.x ?? 0) - S / O[2], i.y = (i.y ?? 0) - x / O[2], await z({ x: S, y: x }) && M(i, null)), s = requestAnimationFrame(E);
    }
    function V(O) {
      var X;
      const { nodeLookup: z, multiSelectionActive: I, nodesDraggable: R, transform: S, snapGrid: x, snapToGrid: P, selectNodesOnDrag: H, onNodeDragStart: N, onSelectionDragStart: T, unselectNodesAndEdges: L } = t();
      d = !0, (!H || !C) && !I && m && ((X = z.get(m)) != null && X.selected || L()), C && H && m && (e == null || e(m));
      const q = vs(O.sourceEvent, { transform: S, snapGrid: x, snapToGrid: P, containerBounds: c });
      if (i = q, a = rp(z, R, q, m), a.size > 0 && (n || N || !m && T)) {
        const [Z, Q] = ps({
          nodeId: m,
          dragItems: a,
          nodeLookup: z
        });
        n == null || n(O.sourceEvent, a, Z, Q), N == null || N(O.sourceEvent, Z, Q), m || T == null || T(O.sourceEvent, Q);
      }
    }
    const A = Mh().clickDistance($).on("start", (O) => {
      const { domNode: z, nodeDragThreshold: I, transform: R, snapGrid: S, snapToGrid: x } = t();
      c = (z == null ? void 0 : z.getBoundingClientRect()) || null, h = !1, I === 0 && V(O), i = vs(O.sourceEvent, { transform: R, snapGrid: S, snapToGrid: x, containerBounds: c }), u = An(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: z, transform: I, snapGrid: R, snapToGrid: S, nodeDragThreshold: x, nodeLookup: P } = t(), H = vs(O.sourceEvent, { transform: I, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !P.has(m)) && (h = !0), !h) {
        if (!l && z && d && (l = !0, E()), !d) {
          const N = H.xSnapped - (i.x ?? 0), T = H.ySnapped - (i.y ?? 0);
          Math.sqrt(N * N + T * T) > x && V(O);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && a && d && (u = An(O.sourceEvent, c), M(H, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: I, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (I(a, !1), o || R || !m && S) {
          const [x, P] = ps({
            nodeId: m,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o == null || o(O.sourceEvent, a, x, P), R == null || R(O.sourceEvent, x, P), m || S == null || S(O.sourceEvent, P);
        }
      }
    }).filter((O) => {
      const z = O.target;
      return !O.button && (!b || !Al(z, `.${b}`, v)) && (!k || Al(z, k, v));
    });
    f.call(A);
  }
  function _() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: _
  };
}
function ip(e, t, n) {
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
const sp = 250;
function ap(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = ip(e, n, t + sp);
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
function lp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Nc = () => !0;
function up(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: p, onConnect: _, onConnectEnd: b, isValidConnection: k = Nc, onReconnectEnd: v, updateConnection: C, getTransform: m, getFromHandle: $, autoPanSpeed: M }) {
  const E = D0(e.target);
  let V = 0, A;
  const { x: O, y: z } = An(e), I = E == null ? void 0 : E.elementFromPoint(O, z), R = Pc(i, I), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !R)
    return;
  const x = Sc(o, R, r, l, t);
  if (!x)
    return;
  let P = An(e, S), H = !1, N = null, T = !1, L = null;
  function q() {
    if (!c || !S)
      return;
    const [re, Te] = pc(P, S, M);
    f({ x: re, y: Te }), V = requestAnimationFrame(q);
  }
  const X = {
    ...x,
    nodeId: o,
    type: R,
    position: x.position
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
  let ce = j;
  p == null || p(e, { nodeId: o, handleId: r, handleType: R });
  function de(re) {
    if (!$() || !X) {
      ye(re);
      return;
    }
    const Te = m();
    P = An(re, S), A = ap(Io(P, Te, !1, [1, 1]), n, l, X), H || (q(), H = !0);
    const _e = Tc(re, {
      handle: A,
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
    L = _e.handleDomNode, N = _e.connection, T = lp(!!A, _e.isValid);
    const Ce = {
      // from stays the same
      ...ce,
      isValid: T,
      to: A && T ? $i({ x: A.x, y: A.y }, Te) : P,
      toHandle: _e.toHandle,
      toPosition: T && _e.toHandle ? _e.toHandle.position : Cl[X.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    T && A && ce.toHandle && Ce.toHandle && ce.toHandle.type === Ce.toHandle.type && ce.toHandle.nodeId === Ce.toHandle.nodeId && ce.toHandle.id === Ce.toHandle.id && ce.to.x === Ce.to.x && ce.to.y === Ce.to.y || (C(Ce), ce = Ce);
  }
  function ye(re) {
    (A || L) && N && T && (_ == null || _(N));
    const { inProgress: Te, ..._e } = ce, Ce = {
      ..._e,
      toPosition: ce.toHandle ? ce.toPosition : null
    };
    b == null || b(re, Ce), i && (v == null || v(re, Ce)), h(), cancelAnimationFrame(V), H = !1, T = !1, N = null, L = null, E.removeEventListener("mousemove", de), E.removeEventListener("mouseup", ye), E.removeEventListener("touchmove", de), E.removeEventListener("touchend", ye);
  }
  E.addEventListener("mousemove", de), E.addEventListener("mouseup", ye), E.addEventListener("touchmove", de), E.addEventListener("touchend", ye);
}
function Tc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Nc, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = An(e), _ = s.elementFromPoint(h, p), b = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : f, k = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const v = Pc(void 0, b), C = b.getAttribute("data-nodeid"), m = b.getAttribute("data-handleid"), $ = b.classList.contains("connectable"), M = b.classList.contains("connectableend");
    if (!C || !v)
      return k;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? m : o,
      target: d ? r : C,
      targetHandle: d ? o : m
    };
    k.connection = E;
    const A = $ && M && (n === gr.Strict ? d && v === "source" || !d && v === "target" : C !== r || m !== o);
    k.isValid = A && u(E), k.toHandle = Sc(C, v, m, c, n, !1);
  }
  return k;
}
const cp = {
  onPointerDown: up,
  isValid: Tc
};
function dp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ut(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const p = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const $ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, M = m[2] * Math.pow(2, $);
      t.scaleTo(M);
    };
    let _ = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (_ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, k = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], M = [$[0] - _[0], $[1] - _[1]];
      _ = $;
      const E = r() * Math.max(m[2], Math.log(m[2])) * (h ? -1 : 1), V = {
        x: m[0] - M[0] * E,
        y: m[1] - M[1] * E
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: m[2]
      }, A, a);
    }, v = fc().on("start", b).on("zoom", d ? k : null).on("zoom.wheel", f ? p : null);
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
const fp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ji = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ms = ({ x: e, y: t, zoom: n }) => ji.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ys = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Hc = (e) => {
  const t = e.ctrlKey && ki() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function gp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Cr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const b = on(c), k = Hc(c), v = d * Math.pow(2, k);
      r.scaleTo(n, v, b, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === Kn.Vertical ? 0 : c.deltaX * f, p = o === Kn.Horizontal ? 0 : c.deltaY * f;
    !ki() && c.shiftKey && o !== Kn.Vertical && (h = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Ji(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function hp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function vp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Ji(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function pp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Ji(i.transform)));
  };
}
function mp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && fp(e.prevViewport, s.transform))) {
      const l = Ji(s.transform);
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
function yp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
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
function wp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = fc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ut(e).call(f);
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
  function b(I, R) {
    return h ? new Promise((S) => {
      f == null || f.transform(ys(h, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: I, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: x, panOnScroll: P, panOnDrag: H, panOnScrollMode: N, panOnScrollSpeed: T, preventScrolling: L, zoomOnPinch: q, zoomOnScroll: X, zoomOnDoubleClick: Z, zoomActivationKeyPressed: Q, lib: j, onTransformChange: ce }) {
    x && !c.isZoomingOrPanning && v();
    const ye = P && !Q && !x ? gp({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: N,
      panOnScrollSpeed: T,
      zoomOnPinch: q,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : hp({
      noWheelClassName: I,
      preventScrolling: L,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", ye, { passive: !1 }), !x) {
      const Te = vp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", Te);
      const _e = pp({
        zoomPanValues: c,
        panOnDrag: H,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: ce
      });
      f.on("zoom", _e);
      const Ce = mp({
        zoomPanValues: c,
        panOnDrag: H,
        panOnScroll: P,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", Ce);
    }
    const re = yp({
      zoomActivationKeyPressed: Q,
      panOnDrag: H,
      zoomOnScroll: X,
      panOnScroll: P,
      zoomOnDoubleClick: Z,
      zoomOnPinch: q,
      userSelectionActive: x,
      noPanClassName: R,
      noWheelClassName: I,
      lib: j
    });
    f.filter(re), Z ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function C(I, R, S) {
    const x = ms(I), P = f == null ? void 0 : f.constrain()(x, R, S);
    return P && await b(P), new Promise((H) => H(P));
  }
  async function m(I, R) {
    const S = ms(I);
    return await b(S, R), new Promise((x) => x(S));
  }
  function $(I) {
    if (h) {
      const R = ms(I), S = h.property("__zoom");
      (S.k !== I.zoom || S.x !== I.x || S.y !== I.y) && (f == null || f.transform(h, R, null, { sync: !0 }));
    }
  }
  function M() {
    const I = h ? dc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function E(I, R) {
    return h ? new Promise((S) => {
      f == null || f.scaleTo(ys(h, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function V(I, R) {
    return h ? new Promise((S) => {
      f == null || f.scaleBy(ys(h, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function A(I) {
    f == null || f.scaleExtent(I);
  }
  function O(I) {
    f == null || f.translateExtent(I);
  }
  function z(I) {
    const R = !Hn(I) || I < 0 ? 0 : I;
    f == null || f.clickDistance(R);
  }
  return {
    update: k,
    destroy: v,
    setViewport: m,
    setViewportConstrained: C,
    getViewport: M,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: A,
    setTranslateExtent: O,
    syncViewport: $,
    setClickDistance: z
  };
}
var Ol;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ol || (Ol = {}));
var _p = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(Z, "$connectable", n), i = () => ee(ye, "$connectionRadius", n), s = () => ee(ce, "$domNode", n), a = () => ee(de, "$nodeLookup", n), l = () => ee(j, "$connectionMode", n), u = () => ee(_e, "$lib", n), c = () => ee(Se, "$autoPanOnConnect", n), d = () => ee(pe, "$flowId", n), f = () => ee(Te, "$isValidConnectionStore", n), h = () => ee(se, "$onedgecreate", n), p = () => ee(Je, "$onConnectAction", n), _ = () => ee(ae, "$onConnectStartAction", n), b = () => ee(le, "$onConnectEndAction", n), k = () => ee(re, "$viewport", n), v = () => ee(Be, "$connection", n), C = () => ee(Ae, "$edges", n), m = () => ee(Oe, "$connectionLookup", n), $ = /* @__PURE__ */ ie(), M = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie(), A = /* @__PURE__ */ ie(), O = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie(), I = /* @__PURE__ */ ie();
  let R = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), x = w(t, "position", 28, () => Me.Top), P = w(t, "style", 12, void 0), H = w(t, "isValidConnection", 12, void 0), N = w(t, "onconnect", 12, void 0), T = w(t, "ondisconnect", 12, void 0), L = w(t, "isConnectable", 12, void 0), q = w(t, "class", 12, void 0);
  const X = cr("svelteflow__node_id"), Z = cr("svelteflow__node_connectable"), Q = Ke(), {
    connectionMode: j,
    domNode: ce,
    nodeLookup: de,
    connectionRadius: ye,
    viewport: re,
    isValidConnection: Te,
    lib: _e,
    addEdge: Ce,
    onedgecreate: se,
    panBy: oe,
    cancelConnection: ve,
    updateConnection: G,
    autoPanOnConnect: Se,
    edges: Ae,
    connectionLookup: Oe,
    onconnect: Je,
    onconnectstart: ae,
    onconnectend: le,
    flowId: pe,
    connection: Be
  } = Q;
  function ut(De) {
    const ot = _c(De);
    (ot && De.button === 0 || !ot) && cp.onPointerDown(De, {
      handleId: g(E),
      nodeId: X,
      isTarget: g($),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: H() ?? f(),
      updateConnection: G,
      cancelConnection: ve,
      panBy: oe,
      onConnect: (qe) => {
        var it;
        const ze = h() ? h()(qe) : qe;
        ze && (Ce(ze), (it = p()) == null || it(qe));
      },
      onConnectStart: (qe, ze) => {
        var it;
        (it = _()) == null || it(qe, {
          nodeId: ze.nodeId,
          handleId: ze.handleId,
          handleType: ze.handleType
        });
      },
      onConnectEnd: (qe, ze) => {
        var it;
        (it = b()) == null || it(qe, ze);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let te = /* @__PURE__ */ ie(null), Le = /* @__PURE__ */ ie();
  me(() => J(S()), () => {
    U($, S() === "target");
  }), me(
    () => (J(L()), o()),
    () => {
      U(M, L() !== void 0 ? L() : o());
    }
  ), me(() => J(R()), () => {
    U(E, R() || null);
  }), me(
    () => (J(N()), J(T()), C(), m(), J(S()), J(R())),
    () => {
      (N() || T()) && (C(), U(Le, m().get(`${X}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), me(
    () => (g(te), g(Le), J(T()), J(N())),
    () => {
      if (g(te) && !x0(g(Le), g(te))) {
        const De = g(Le) ?? /* @__PURE__ */ new Map();
        $l(g(te), De, T()), $l(De, g(te), N());
      }
      U(te, g(Le) ?? /* @__PURE__ */ new Map());
    }
  ), me(() => v(), () => {
    U(V, !!v().fromHandle);
  }), me(
    () => (v(), J(S()), g(E)),
    () => {
      var De, ot, qe;
      U(A, ((De = v().fromHandle) == null ? void 0 : De.nodeId) === X && ((ot = v().fromHandle) == null ? void 0 : ot.type) === S() && ((qe = v().fromHandle) == null ? void 0 : qe.id) === g(E));
    }
  ), me(
    () => (v(), J(S()), g(E)),
    () => {
      var De, ot, qe;
      U(O, ((De = v().toHandle) == null ? void 0 : De.nodeId) === X && ((ot = v().toHandle) == null ? void 0 : ot.type) === S() && ((qe = v().toHandle) == null ? void 0 : qe.id) === g(E));
    }
  ), me(
    () => (l(), v(), J(S()), g(E)),
    () => {
      var De, ot, qe;
      U(z, l() === gr.Strict ? ((De = v().fromHandle) == null ? void 0 : De.type) !== S() : X !== ((ot = v().fromHandle) == null ? void 0 : ot.nodeId) || g(E) !== ((qe = v().fromHandle) == null ? void 0 : qe.id));
    }
  ), me(() => (g(O), v()), () => {
    U(I, g(O) && v().isValid);
  }), wt(), Ie();
  var fe = _p();
  $e(fe, "data-nodeid", X);
  let dt;
  var nn = W(fe);
  xt(nn, t, "default", {}), Y(fe), Pe(
    (De, ot) => {
      $e(fe, "data-handleid", g(E)), $e(fe, "data-handlepos", x()), $e(fe, "data-id", `${d() ?? ""}-${X ?? ""}-${(R() || "") ?? ""}-${S() ?? ""}`), dt = bt(fe, 1, De, null, dt, ot), gt(fe, P());
    },
    [
      () => gn(Ht([
        "svelte-flow__handle",
        `svelte-flow__handle-${x()}`,
        "nodrag",
        "nopan",
        x(),
        q()
      ])),
      () => ({
        valid: g(I),
        connectingto: g(O),
        connectingfrom: g(A),
        source: !g($),
        target: g($),
        connectablestart: g(M),
        connectableend: g(M),
        connectable: g(M),
        connectionindicator: g(M) && (!g(V) || g(z))
      })
    ],
    be
  ), nt("mousedown", fe, ut), nt("touchstart", fe, ut), D(e, fe);
  var pn = he({
    get id() {
      return R();
    },
    set id(De) {
      R(De), y();
    },
    get type() {
      return S();
    },
    set type(De) {
      S(De), y();
    },
    get position() {
      return x();
    },
    set position(De) {
      x(De), y();
    },
    get style() {
      return P();
    },
    set style(De) {
      P(De), y();
    },
    get isValidConnection() {
      return H();
    },
    set isValidConnection(De) {
      H(De), y();
    },
    get onconnect() {
      return N();
    },
    set onconnect(De) {
      N(De), y();
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
      return q();
    },
    set class(De) {
      q(De), y();
    }
  });
  return r(), pn;
}
ue(
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
var xp = /* @__PURE__ */ ne("<!> <!>", 1);
function Si(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Ie();
  var s = xp(), a = xe(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Me.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Pe(() => {
    var f;
    return ft(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, s), he({
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
ue(
  Si,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var bp = /* @__PURE__ */ ne(" <!>", 1);
function Vc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ie(), Ve();
  var i = bp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Pe(() => {
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
ue(Vc, { data: {}, sourcePosition: {} }, [], [], !0);
var Cp = /* @__PURE__ */ ne(" <!>", 1);
function Dc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ie(), Ve();
  var i = Cp(), s = xe(i), a = B(s);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Pe(() => {
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
ue(Dc, { data: {}, targetPosition: {} }, [], [], !0);
function Ac(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ue(Ac, {}, [], [], !0);
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
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(i, "$domNode", n), { domNode: i } = Ke();
  Ie();
  var s = $p(), a = W(s);
  xt(a, t, "default", {}), Y(s), _t(s, (l, u) => Pr == null ? void 0 : Pr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, s), he(), r();
}
ue(Oc, {}, ["default"], [], !0);
function Lc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ke();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Rr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var kp = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ic(e, t) {
  ge(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Lc(), s = cr("svelteflow__edge_id");
  return Ie(), Oc(e, {
    children: (a, l) => {
      var u = kp();
      let c;
      var d = W(u);
      xt(d, t, "default", {}), Y(u), Pe(() => c = gt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), nt("keyup", u, () => {
      }), nt("click", u, () => {
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
ue(Ic, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Ep = /* @__PURE__ */ Ee('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Sp = /* @__PURE__ */ Ee('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  Ie();
  var p = Sp(), _ = xe(p), b = B(_);
  {
    var k = (m) => {
      var $ = Ep();
      $e($, "stroke-opacity", 0), $e($, "stroke-width", h), Pe(() => $e($, "d", r())), D(m, $);
    };
    we(b, (m) => {
      h && m(k);
    });
  }
  var v = B(b);
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
        children: ($, M) => {
          Ve();
          var E = Ye();
          Pe(() => ft(E, o())), D($, E);
        },
        $$slots: { default: !0 }
      });
    };
    we(v, (m) => {
      o() && m(C);
    });
  }
  return Pe(
    (m) => {
      $e(_, "id", n()), $e(_, "d", r()), bt(_, 0, m), $e(_, "marker-start", l()), $e(_, "marker-end", u()), gt(_, c());
    },
    [
      () => gn(Ht(["svelte-flow__edge-path", f()]))
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
function Pi(e, t) {
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
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(b()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(xc({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), wt(), Ie(), zo(e, {
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
      return b();
    },
    set targetY(v) {
      b(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ue(
  Pi,
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
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(b()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Ei({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), wt(), Ie(), zo(e, {
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
      return b();
    },
    set targetY(v) {
      b(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ue(
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
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(p()), J(_())),
    () => {
      ((b) => (U(r, b[0]), U(o, b[1]), U(i, b[2])))(Fs({
        sourceX: f(),
        sourceY: h(),
        targetX: p(),
        targetY: _()
      }));
    }
  ), wt(), Ie(), zo(e, {
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
  }), he({
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
      return d();
    },
    set interactionWidth(b) {
      d(b), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(b) {
      f(b), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(b) {
      h(b), y();
    },
    get targetX() {
      return p();
    },
    set targetX(b) {
      p(b), y();
    },
    get targetY() {
      return _();
    },
    set targetY(b) {
      _(b), y();
    }
  });
}
ue(
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
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), b = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(h()), J(_()), J(b()), J(p()), J(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Ei({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), wt(), Ie(), zo(e, {
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
      return b();
    },
    set targetY(v) {
      b(v), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), y();
    }
  });
}
ue(
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
function Pp(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function Np(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Tp = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Mp = (e, t, n, r = [0, 0], o = xi, i, s, a, l, u, c, d, f) => {
  const { subscribe: h, set: p, update: _ } = ke([]);
  let b = e, k = {}, v = !0;
  const C = (E) => {
    const V = Cc(E, t, n, {
      elevateNodesOnSelect: v,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: k,
      checkEquality: !1
    });
    return K(i) && V && K(l) && (S0({
      nodes: t,
      width: K(u),
      height: K(c),
      panZoom: K(l),
      minZoom: K(d),
      maxZoom: K(f)
    }, K(s)).then((O) => {
      var z;
      (z = K(a)) == null || z.resolve(O), a.set(null);
    }), i.set(!1), s.set(void 0)), b = E, p(b), b;
  }, m = (E) => C(E(b)), $ = (E) => {
    k = E;
  }, M = (E) => {
    v = E.elevateNodesOnSelect ?? v;
  };
  return C(b), {
    subscribe: h,
    set: C,
    update: m,
    setDefaultOptions: $,
    setOptions: M
  };
}, Hp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ke([]);
  let a = e, l = {};
  const u = (f) => {
    const h = l ? f.map((p) => ({ ...l, ...p })) : f;
    kc(t, n, h), a = h, i(a);
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
  input: Vc,
  output: Dc,
  default: Si,
  group: Ac
}, Yc = {
  straight: Rc,
  smoothstep: zc,
  default: Pi,
  step: Bc
}, Vp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? xi;
  Cc(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), kc(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const M = Lo(a, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    h = Ca(M, n, r, 0.5, 2, 0.1);
  }
  const p = ke(!1), _ = ke(void 0), b = ke(null), k = ke(null), v = ke(500), C = ke(500), m = ke(0.5), $ = ke(2);
  return {
    flowId: ke(null),
    nodes: Mp(e, a, l, d, f, p, _, b, k, v, C, m, $),
    nodeLookup: Kt(a),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: Hp(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
    width: v,
    height: C,
    minZoom: m,
    maxZoom: $,
    nodeOrigin: ke(d),
    nodeDragThreshold: ke(1),
    nodeExtent: ke(f),
    translateExtent: ke(xi),
    autoPanOnNodeDrag: ke(!0),
    autoPanOnConnect: ke(!0),
    fitViewQueued: p,
    fitViewOptions: _,
    fitViewResolver: b,
    panZoom: k,
    snapGrid: ke(null),
    dragging: ke(!1),
    selectionRect: ke(null),
    selectionKeyPressed: ke(!1),
    multiselectionKeyPressed: ke(!1),
    deleteKeyPressed: ke(!1),
    panActivationKeyPressed: ke(!1),
    zoomActivationKeyPressed: ke(!1),
    selectionRectMode: ke(null),
    selectionMode: ke(bi.Partial),
    nodeTypes: ke(qc),
    edgeTypes: ke(Yc),
    viewport: ke(h),
    connectionMode: ke(gr.Strict),
    domNode: ke(null),
    connection: Kt(Bs),
    connectionLineType: ke(Sr.Bezier),
    connectionRadius: ke(20),
    isValidConnection: ke(() => !0),
    nodesDraggable: ke(!0),
    nodesConnectable: ke(!0),
    elementsSelectable: ke(!0),
    selectNodesOnDrag: ke(!0),
    markers: Kt([]),
    defaultMarkerColor: ke("#b1b1b7"),
    lib: Kt("svelte"),
    onlyRenderVisibleElements: ke(!1),
    onerror: ke(N0),
    ondelete: ke(void 0),
    onedgecreate: ke(void 0),
    onconnect: ke(void 0),
    onconnectstart: ke(void 0),
    onconnectend: ke(void 0),
    onbeforedelete: ke(void 0),
    nodesInitialized: ke(!1),
    edgesInitialized: ke(!1),
    viewportInitialized: ke(!1),
    initialized: Kt(!1)
  };
};
function Dp(e) {
  const t = Zn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), d = r.get(u.target);
    return c && d && z0({
      sourceNode: c,
      targetNode: d,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Zn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const d = X0({
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
      zIndex: I0({
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
function Ap(e) {
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
const Qi = Symbol();
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
  function l(x) {
    a.nodeTypes.set({
      ...qc,
      ...x
    });
  }
  function u(x) {
    a.edgeTypes.set({
      ...Yc,
      ...x
    });
  }
  function c(x) {
    const P = K(a.edges);
    a.edges.set(q0(x, P));
  }
  const d = (x, P = !1) => {
    var N;
    const H = K(a.nodeLookup);
    for (const [T, L] of x) {
      const q = (N = H.get(T)) == null ? void 0 : N.internals.userNode;
      q && (q.position = L.position, q.dragging = P);
    }
    a.nodes.update((T) => T);
  };
  function f(x) {
    var L, q, X;
    const P = K(a.nodeLookup), H = K(a.parentLookup), { changes: N, updatedInternals: T } = ep(x, P, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (T) {
      G0(P, H, { nodeOrigin: i, nodeExtent: s });
      for (const Z of N) {
        const Q = (L = P.get(Z.id)) == null ? void 0 : L.internals.userNode;
        if (Q)
          switch (Z.type) {
            case "dimensions": {
              const j = { ...Q.measured, ...Z.dimensions };
              Z.setAttributes && (Q.width = ((q = Z.dimensions) == null ? void 0 : q.width) ?? Q.width, Q.height = ((X = Z.dimensions) == null ? void 0 : X.height) ?? Q.height), Q.measured = j;
              break;
            }
            case "position":
              Q.position = Z.position ?? Q.position;
              break;
          }
      }
      a.nodes.update((Z) => Z), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(x) {
    const P = K(a.fitViewResolver) ?? V0();
    return a.fitViewQueued.set(!0), a.fitViewOptions.set(x), a.fitViewResolver.set(P), a.nodes.set(K(a.nodes)), P.promise;
  }
  function p(x, P) {
    const H = K(a.panZoom);
    return H ? H.scaleBy(x, P) : Promise.resolve(!1);
  }
  function _(x) {
    return p(1.2, x);
  }
  function b(x) {
    return p(1 / 1.2, x);
  }
  function k(x) {
    const P = K(a.panZoom);
    P && (P.setScaleExtent([x, K(a.maxZoom)]), a.minZoom.set(x));
  }
  function v(x) {
    const P = K(a.panZoom);
    P && (P.setScaleExtent([K(a.minZoom), x]), a.maxZoom.set(x));
  }
  function C(x) {
    const P = K(a.panZoom);
    P && (P.setTranslateExtent(x), a.translateExtent.set(x));
  }
  function m(x) {
    let P = !1;
    return x.forEach((H) => {
      H.selected && (H.selected = !1, P = !0);
    }), P;
  }
  function $(x) {
    var P;
    (P = K(a.panZoom)) == null || P.setClickDistance(x);
  }
  function M(x) {
    m((x == null ? void 0 : x.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), m((x == null ? void 0 : x.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (x) => {
    var P;
    if (x) {
      const H = K(a.nodes), N = K(a.edges), T = H.filter((Z) => Z.selected), L = N.filter((Z) => Z.selected), { nodes: q, edges: X } = await hc({
        nodesToRemove: T,
        edgesToRemove: L,
        nodes: H,
        edges: N,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || X.length) && (a.nodes.update((Z) => Z.filter((Q) => !q.some((j) => j.id === Q.id))), a.edges.update((Z) => Z.filter((Q) => !X.some((j) => j.id === Q.id))), (P = K(a.ondelete)) == null || P({
        nodes: q,
        edges: X
      }));
    }
  });
  function E(x) {
    const P = K(a.multiselectionKeyPressed);
    a.nodes.update((H) => H.map((N) => {
      const T = x.includes(N.id), L = P && N.selected || T;
      return N.selected = L, N;
    })), P || a.edges.update((H) => H.map((N) => (N.selected = !1, N)));
  }
  function V(x) {
    const P = K(a.multiselectionKeyPressed);
    a.edges.update((H) => H.map((N) => {
      const T = x.includes(N.id), L = P && N.selected || T;
      return N.selected = L, N;
    })), P || a.nodes.update((H) => H.map((N) => (N.selected = !1, N)));
  }
  function A(x) {
    var H;
    const P = (H = K(a.nodes)) == null ? void 0 : H.find((N) => N.id === x);
    if (!P) {
      console.warn("012", Rr.error012(x));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), P.selected ? P.selected && K(a.multiselectionKeyPressed) && M({ nodes: [P], edges: [] }) : E([x]);
  }
  function O(x) {
    const P = K(a.viewport);
    return tp({
      delta: x,
      panZoom: K(a.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const z = ke(Bs), I = (x) => {
    z.set({ ...x });
  };
  function R() {
    z.set(Bs);
  }
  function S() {
    a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), M(), R();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Dp(a),
    visibleNodes: Ap(a),
    connection: Zn([z, a.viewport], ([x, P]) => x.inProgress ? {
      ...x,
      to: Io(x.to, [P.x, P.y, P.zoom])
    } : { ...x }),
    markers: Zn([a.edges, a.defaultMarkerColor, a.flowId], ([x, P, H]) => Z0(x, { defaultColor: P, id: H })),
    initialized: (() => {
      let x = !1;
      const P = K(a.nodes).length, H = K(a.edges).length;
      return Zn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([N, T, L]) => x || (P === 0 ? x = L : H === 0 ? x = L && N : x = L && N && T, x));
    })(),
    // actions
    syncNodeStores: (x) => Pp(a.nodes, x),
    syncEdgeStores: (x) => Np(a.edges, x),
    syncViewport: (x) => Tp(a.panZoom, a.viewport, x),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: _,
    zoomOut: b,
    fitView: (x) => h(x),
    setMinZoom: k,
    setMaxZoom: v,
    setTranslateExtent: C,
    setPaneClickDistance: $,
    unselectNodesAndEdges: M,
    addSelectedNodes: E,
    addSelectedEdges: V,
    handleNodeSelection: A,
    panBy: O,
    updateConnection: I,
    cancelConnection: R,
    reset: S
  };
}
function Ke() {
  const e = cr(Qi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Op({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Or(Qi, {
    getStore: () => a
  }), a;
}
function ws(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = wp({
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
var Lp = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Ip = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Wc(e, t) {
  ge(t, !1), et(e, Ip);
  const [n, r] = rt(), o = () => ee(N, "$panActivationKeyPressed", n), i = () => ee(R, "$minZoom", n), s = () => ee(S, "$maxZoom", n), a = () => ee(T, "$zoomActivationKeyPressed", n), l = () => ee(I, "$selectionRect", n), u = () => ee(P, "$translateExtent", n), c = () => ee(H, "$lib", n), d = /* @__PURE__ */ ie(), f = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie();
  let p = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), v = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), $ = w(t, "zoomOnDoubleClick", 12), M = w(t, "zoomOnPinch", 12), E = w(t, "panOnDrag", 12), V = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: z,
    selectionRect: I,
    minZoom: R,
    maxZoom: S,
    dragging: x,
    translateExtent: P,
    lib: H,
    panActivationKeyPressed: N,
    zoomActivationKeyPressed: T,
    viewportInitialized: L
  } = Ke(), q = (j) => O.set({
    x: j[0],
    y: j[1],
    zoom: j[2]
  });
  tn(() => {
    hi(L, !0);
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
  ), wt(), Ie();
  var X = Lp(), Z = W(X);
  xt(Z, t, "default", {}), Y(X), _t(X, (j, ce) => ws == null ? void 0 : ws(j, ce), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(d),
    dragging: x,
    panZoom: z,
    onPanZoomStart: _(),
    onPanZoom: b(),
    onPanZoomEnd: k(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: $(),
    zoomOnPinch: M(),
    panOnScroll: g(h),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: q
  })), D(e, X);
  var Q = he({
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
      return b();
    },
    set onMove(j) {
      b(j), y();
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
      return $();
    },
    set zoomOnDoubleClick(j) {
      $(j), y();
    },
    get zoomOnPinch() {
      return M();
    },
    set zoomOnPinch(j) {
      M(j), y();
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
      return A();
    },
    set paneClickDistance(j) {
      A(j), y();
    }
  });
  return r(), Q;
}
ue(
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
var zp = /* @__PURE__ */ ne("<div><!></div>");
const Rp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Xc(e, t) {
  ge(t, !1), et(e, Rp);
  const [n, r] = rt(), o = () => ee(x, "$panActivationKeyPressed", n), i = () => ee(R, "$selectionKeyPressed", n), s = () => ee(z, "$selectionRect", n), a = () => ee(O, "$elementsSelectable", n), l = () => ee(I, "$selectionRectMode", n), u = () => ee(H, "$connection", n), c = () => ee(E, "$edges", n), d = () => ee(M, "$nodeLookup", n), f = () => ee(V, "$viewport", n), h = () => ee(S, "$selectionMode", n), p = () => ee(A, "$dragging", n), _ = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie();
  let v = w(t, "panOnDrag", 12, void 0), C = w(t, "selectionOnDrag", 12, void 0);
  const m = Fi(), {
    nodes: $,
    nodeLookup: M,
    edges: E,
    viewport: V,
    dragging: A,
    elementsSelectable: O,
    selectionRect: z,
    selectionRectMode: I,
    selectionKeyPressed: R,
    selectionMode: S,
    panActivationKeyPressed: x,
    unselectNodesAndEdges: P,
    connection: H
  } = Ke();
  let N = /* @__PURE__ */ ie(), T = null, L = [], q = !1;
  function X(se) {
    if (q || u().inProgress) {
      q = !1;
      return;
    }
    m("paneclick", { event: se }), P(), I.set(null);
  }
  function Z(se) {
    var G, Se;
    if (T = g(N).getBoundingClientRect(), !O || !g(b) || se.button !== 0 || se.target !== g(N) || !T)
      return;
    (Se = (G = se.target) == null ? void 0 : G.setPointerCapture) == null || Se.call(G, se.pointerId);
    const { x: oe, y: ve } = An(se, T);
    P(), z.set({
      width: 0,
      height: 0,
      startX: oe,
      startY: ve,
      x: oe,
      y: ve
    });
  }
  function Q(se) {
    if (!g(b) || !T || !s())
      return;
    q = !0;
    const oe = An(se, T), ve = s().startX ?? 0, G = s().startY ?? 0, Se = {
      ...s(),
      x: oe.x < ve ? oe.x : ve,
      y: oe.y < G ? oe.y : G,
      width: Math.abs(oe.x - ve),
      height: Math.abs(oe.y - G)
    }, Ae = L.map((le) => le.id), Oe = qs(L, c()).map((le) => le.id);
    L = gc(
      d(),
      Se,
      [
        f().x,
        f().y,
        f().zoom
      ],
      h() === bi.Partial,
      !0
    );
    const Je = qs(L, c()).map((le) => le.id), ae = L.map((le) => le.id);
    (Ae.length !== ae.length || ae.some((le) => !Ae.includes(le))) && $.update((le) => le.map(zl(ae))), (Oe.length !== Je.length || Je.some((le) => !Oe.includes(le))) && E.update((le) => le.map(zl(Je))), I.set("user"), z.set(Se);
  }
  function j(se) {
    var oe, ve;
    se.button === 0 && ((ve = (oe = se.target) == null ? void 0 : oe.releasePointerCapture) == null || ve.call(oe, se.pointerId), !g(b) && l() === "user" && se.target === g(N) && (X == null || X(se)), z.set(null), L.length > 0 && hi(I, "nodes"), i() && (q = !1));
  }
  const ce = (se) => {
    var oe;
    if (Array.isArray(g(_)) && ((oe = g(_)) != null && oe.includes(2))) {
      se.preventDefault();
      return;
    }
    m("panecontextmenu", { event: se });
  };
  me(
    () => (o(), J(v())),
    () => {
      U(_, o() || v());
    }
  ), me(
    () => (i(), s(), J(C()), g(_)),
    () => {
      U(b, i() || s() || C() && g(_) !== !0);
    }
  ), me(
    () => (a(), g(b), l()),
    () => {
      U(k, a() && (g(b) || l() === "user"));
    }
  ), wt(), Ie();
  var de = zp(), ye = /* @__PURE__ */ Ne(() => g(k) ? void 0 : Il(X, g(N))), re = /* @__PURE__ */ Ne(() => Il(ce, g(N)));
  let Te;
  var _e = W(de);
  xt(_e, t, "default", {}), Y(de), $n(de, (se) => U(N, se), () => g(N)), Pe(
    (se) => Te = bt(de, 1, "svelte-flow__pane svelte-1esy7hx", null, Te, se),
    [
      () => ({
        draggable: v() === !0 || Array.isArray(v()) && v().includes(0),
        dragging: p(),
        selection: g(b)
      })
    ],
    be
  ), nt("click", de, function(...se) {
    var oe;
    (oe = g(ye)) == null || oe.apply(this, se);
  }), nt("pointerdown", de, function(...se) {
    var oe;
    (oe = g(k) ? Z : void 0) == null || oe.apply(this, se);
  }), nt("pointermove", de, function(...se) {
    var oe;
    (oe = g(k) ? Q : void 0) == null || oe.apply(this, se);
  }), nt("pointerup", de, function(...se) {
    var oe;
    (oe = g(k) ? j : void 0) == null || oe.apply(this, se);
  }), nt("contextmenu", de, function(...se) {
    var oe;
    (oe = g(re)) == null || oe.apply(this, se);
  }), D(e, de);
  var Ce = he({
    get panOnDrag() {
      return v();
    },
    set panOnDrag(se) {
      v(se), y();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(se) {
      C(se), y();
    }
  });
  return r(), Ce;
}
ue(Xc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Bp = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const qp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Zc(e, t) {
  ge(t, !1), et(e, qp);
  const [n, r] = rt(), o = () => ee(i, "$viewport", n), { viewport: i } = Ke();
  Ie();
  var s = Bp(), a = W(s);
  xt(a, t, "default", {}), Y(s), Pe(() => gt(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, s), he(), r();
}
ue(Zc, {}, ["default"], [], !0);
function Nr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = op({
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
function Yp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Fp = /* @__PURE__ */ ne("<div><!></div>");
function Kc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(de, "$nodeTypes", n), i = () => ee(Ce, "$elementsSelectable", n), s = () => ee(se, "$nodesDraggable", n), a = () => ee(Se, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0);
  let f = w(t, "node", 13), h = w(t, "id", 13), p = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), v = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), $ = w(t, "dragging", 13, !1), M = w(t, "resizeObserver", 13, null), E = w(t, "style", 13, void 0), V = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), O = w(t, "positionX", 13), z = w(t, "positionY", 13), I = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), x = w(t, "measuredWidth", 13, void 0), P = w(t, "measuredHeight", 13, void 0), H = w(t, "initialWidth", 13, void 0), N = w(t, "initialHeight", 13, void 0), T = w(t, "width", 13, void 0), L = w(t, "height", 13, void 0), q = w(t, "dragHandle", 13, void 0), X = w(t, "initialized", 13, !1), Z = w(t, "parentId", 13, void 0), Q = w(t, "nodeClickDistance", 13, void 0), j = w(t, "class", 13, "");
  const ce = Ke(), {
    nodeTypes: de,
    nodeDragThreshold: ye,
    selectNodesOnDrag: re,
    handleNodeSelection: Te,
    updateNodeInternals: _e,
    elementsSelectable: Ce,
    nodesDraggable: se
  } = ce;
  let oe = /* @__PURE__ */ ie(void 0, !0), ve = /* @__PURE__ */ ie(null, !0);
  const G = Fi(), Se = ke(v());
  let Ae = /* @__PURE__ */ ie(void 0, !0), Oe = /* @__PURE__ */ ie(void 0, !0), Je = /* @__PURE__ */ ie(void 0, !0);
  Or("svelteflow__node_id", h()), Or("svelteflow__node_connectable", Se), ga(() => {
    var te;
    g(ve) && ((te = M()) == null || te.unobserve(g(ve)));
  });
  function ae(te) {
    k() && (!K(re) || !b() || K(ye) > 0) && Te(h()), G("nodeclick", { node: f().internals.userNode, event: te });
  }
  me(() => J(V()), () => {
    U(l, V() || "default");
  }), me(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), me(
    () => (o(), g(l), Si),
    () => {
      U(c, o()[g(l)] || Si);
    }
  ), me(
    () => (g(u), J(V())),
    () => {
      g(u) || console.warn("003", Rr.error003(V()));
    }
  ), me(
    () => (J(T()), J(L()), J(H()), J(N()), J(x()), J(P())),
    () => {
      U(d, Yp({
        width: T(),
        height: L(),
        initialWidth: H(),
        initialHeight: N(),
        measuredWidth: x(),
        measuredHeight: P()
      }));
    }
  ), me(() => J(v()), () => {
    Se.set(!!v());
  }), me(
    () => (g(Ae), g(l), g(Oe), J(I()), g(Je), J(R()), J(h()), g(oe)),
    () => {
      (g(Ae) && g(l) !== g(Ae) || g(Oe) && I() !== g(Oe) || g(Je) && R() !== g(Je)) && requestAnimationFrame(() => _e(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(oe),
            force: !0
          }
        ]
      ]))), U(Ae, g(l)), U(Oe, I()), U(Je, R());
    }
  ), me(
    () => (J(M()), g(oe), g(ve), J(X())),
    () => {
      M() && (g(oe) !== g(ve) || !X()) && (g(ve) && M().unobserve(g(ve)), g(oe) && M().observe(g(oe)), U(ve, g(oe)));
    }
  ), wt(), Ie(!0);
  var le = Qe(), pe = xe(le);
  {
    var Be = (te) => {
      var Le = Fp();
      let fe, dt;
      var nn = W(Le);
      const pn = /* @__PURE__ */ be(() => _() ?? !1), De = /* @__PURE__ */ be(() => k() ?? i() ?? !0), ot = /* @__PURE__ */ be(() => C() ?? !0), qe = /* @__PURE__ */ be(() => b() ?? s() ?? !0);
      Mu(nn, () => g(c), (ze, it) => {
        it(ze, {
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
            return g(De);
          },
          get deletable() {
            return g(ot);
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return $();
          },
          get draggable() {
            return g(qe);
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
            return z();
          },
          get width() {
            return T();
          },
          get height() {
            return L();
          }
        });
      }), Y(Le), _t(Le, (ze, it) => Nr == null ? void 0 : Nr(ze, it), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: q(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Te,
        onDrag: (ze, it, rn, Zt) => {
          G("nodedrag", { event: ze, targetNode: rn, nodes: Zt });
        },
        onDragStart: (ze, it, rn, Zt) => {
          G("nodedragstart", { event: ze, targetNode: rn, nodes: Zt });
        },
        onDragStop: (ze, it, rn, Zt) => {
          G("nodedragstop", { event: ze, targetNode: rn, nodes: Zt });
        },
        store: ce
      })), $n(Le, (ze) => U(oe, ze), () => g(oe)), Bt(() => nt("click", Le, ae)), Bt(() => nt("mouseenter", Le, (ze) => G("nodemouseenter", { node: f(), event: ze }))), Bt(() => nt("mouseleave", Le, (ze) => G("nodemouseleave", { node: f(), event: ze }))), Bt(() => nt("mousemove", Le, (ze) => G("nodemousemove", { node: f(), event: ze }))), Bt(() => nt("contextmenu", Le, (ze) => G("nodecontextmenu", { node: f(), event: ze }))), Pe(
        (ze, it) => {
          $e(Le, "data-id", h()), fe = bt(Le, 1, ze, null, fe, it), dt = gt(Le, `${E() ?? "" ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, dt, {
            "z-index": S(),
            transform: `translate(${O() ?? ""}px, ${z() ?? ""}px)`,
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
            dragging: $(),
            selected: _(),
            draggable: b(),
            connectable: v(),
            selectable: k(),
            nopan: b(),
            parent: A()
          })
        ],
        be
      ), D(te, Le);
    };
    we(pe, (te) => {
      m() || te(Be);
    });
  }
  D(e, le);
  var ut = he({
    get node() {
      return f();
    },
    set node(te) {
      f(te), y();
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
      return _();
    },
    set selected(te) {
      _(te), y();
    },
    get draggable() {
      return b();
    },
    set draggable(te) {
      b(te), y();
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
      return C();
    },
    set deletable(te) {
      C(te), y();
    },
    get hidden() {
      return m();
    },
    set hidden(te) {
      m(te), y();
    },
    get dragging() {
      return $();
    },
    set dragging(te) {
      $(te), y();
    },
    get resizeObserver() {
      return M();
    },
    set resizeObserver(te) {
      M(te), y();
    },
    get style() {
      return E();
    },
    set style(te) {
      E(te), y();
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
      return z();
    },
    set positionY(te) {
      z(te), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(te) {
      I(te), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), y();
    },
    get zIndex() {
      return S();
    },
    set zIndex(te) {
      S(te), y();
    },
    get measuredWidth() {
      return x();
    },
    set measuredWidth(te) {
      x(te), y();
    },
    get measuredHeight() {
      return P();
    },
    set measuredHeight(te) {
      P(te), y();
    },
    get initialWidth() {
      return H();
    },
    set initialWidth(te) {
      H(te), y();
    },
    get initialHeight() {
      return N();
    },
    set initialHeight(te) {
      N(te), y();
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
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), y();
    },
    get class() {
      return j();
    },
    set class(te) {
      j(te), y();
    }
  });
  return r(), ut;
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
var Wp = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Xp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function jc(e, t) {
  ge(t, !1), et(e, Xp);
  const [n, r] = rt(), o = () => ee(c, "$visibleNodes", n), i = () => ee(d, "$nodesDraggable", n), s = () => ee(h, "$elementsSelectable", n), a = () => ee(f, "$nodesConnectable", n), l = () => ee(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: _
  } = Ke(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const m = /* @__PURE__ */ new Map();
    C.forEach(($) => {
      const M = $.target.getAttribute("data-id");
      m.set(M, { id: M, nodeElement: $.target, force: !0 });
    }), p(m);
  });
  ga(() => {
    b == null || b.disconnect();
  }), Ie();
  var k = Wp();
  Mt(k, 5, o, (C) => C.id, (C, m) => {
    const $ = /* @__PURE__ */ be(() => !!g(m).selected), M = /* @__PURE__ */ be(() => !!g(m).hidden), E = /* @__PURE__ */ be(() => !!(g(m).draggable || i() && typeof g(m).draggable > "u")), V = /* @__PURE__ */ be(() => !!(g(m).selectable || s() && typeof g(m).selectable > "u")), A = /* @__PURE__ */ be(() => !!(g(m).connectable || a() && typeof g(m).connectable > "u")), O = /* @__PURE__ */ be(() => g(m).deletable ?? !0), z = /* @__PURE__ */ be(() => l().has(g(m).id)), I = /* @__PURE__ */ be(() => g(m).type ?? "default"), R = /* @__PURE__ */ be(() => g(m).internals.z ?? 0), S = /* @__PURE__ */ be(() => yc(g(m)));
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
        return g($);
      },
      get hidden() {
        return g(M);
      },
      get draggable() {
        return g(E);
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
        return g(z);
      },
      get style() {
        return g(m).style;
      },
      get class() {
        return g(m).class;
      },
      get type() {
        return g(I);
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
        return g(R);
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
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(x) {
          We.call(this, t, x);
        },
        nodemouseenter(x) {
          We.call(this, t, x);
        },
        nodemousemove(x) {
          We.call(this, t, x);
        },
        nodemouseleave(x) {
          We.call(this, t, x);
        },
        nodedrag(x) {
          We.call(this, t, x);
        },
        nodedragstart(x) {
          We.call(this, t, x);
        },
        nodedragstop(x) {
          We.call(this, t, x);
        },
        nodecontextmenu(x) {
          We.call(this, t, x);
        }
      }
    });
  }), Y(k), D(e, k);
  var v = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), y();
    }
  });
  return r(), v;
}
ue(jc, { nodeClickDistance: {} }, [], [], !0);
var Zp = /* @__PURE__ */ Ee('<svg><g role="img"><!></g></svg>');
function Gc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(j, "$edgeTypes", n), i = () => ee(ce, "$flowId", n), s = () => ee(de, "$elementsSelectable", n), a = () => ee(Q, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0), f = /* @__PURE__ */ ie(void 0, !0);
  let h = w(t, "id", 13), p = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), b = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), v = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), $ = w(t, "selected", 13, !1), M = w(t, "selectable", 13, void 0), E = w(t, "deletable", 13, void 0), V = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), O = w(t, "labelStyle", 13, void 0), z = w(t, "markerStart", 13, void 0), I = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), x = w(t, "sourceX", 13), P = w(t, "sourceY", 13), H = w(t, "targetX", 13), N = w(t, "targetY", 13), T = w(t, "sourcePosition", 13), L = w(t, "targetPosition", 13), q = w(t, "ariaLabel", 13, void 0), X = w(t, "interactionWidth", 13, void 0), Z = w(t, "class", 13, "");
  Or("svelteflow__edge_id", h());
  const {
    edgeLookup: Q,
    edgeTypes: j,
    flowId: ce,
    elementsSelectable: de
  } = Ke(), ye = Fi(), re = Lc();
  function Te(G) {
    const Se = a().get(h());
    Se && (re(h()), ye("edgeclick", { event: G, edge: Se }));
  }
  function _e(G, Se) {
    const Ae = a().get(h());
    Ae && ye(Se, { event: G, edge: Ae });
  }
  me(() => J(p()), () => {
    U(l, p() || "default");
  }), me(
    () => (o(), g(l), Pi),
    () => {
      U(u, o()[g(l)] || Pi);
    }
  ), me(
    () => (J(z()), i()),
    () => {
      U(c, z() ? `url('#${Ws(z(), i())}')` : void 0);
    }
  ), me(
    () => (J(I()), i()),
    () => {
      U(d, I() ? `url('#${Ws(I(), i())}')` : void 0);
    }
  ), me(
    () => (J(M()), s()),
    () => {
      U(f, M() ?? s());
    }
  ), wt(), Ie(!0);
  var Ce = Qe(), se = xe(Ce);
  {
    var oe = (G) => {
      var Se = Zp();
      let Ae;
      var Oe = W(Se);
      let Je;
      var ae = W(Oe);
      const le = /* @__PURE__ */ be(() => E() ?? !0);
      Mu(ae, () => g(u), (pe, Be) => {
        Be(pe, {
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
            return x();
          },
          get sourceY() {
            return P();
          },
          get targetX() {
            return H();
          },
          get targetY() {
            return N();
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
            return $();
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
            return g(f);
          },
          get deletable() {
            return g(le);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
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
      }), Y(Oe), Y(Se), Pe(
        (pe, Be) => {
          Ae = gt(Se, "", Ae, { "z-index": C() }), Je = bt(Oe, 0, pe, null, Je, Be), $e(Oe, "data-id", h()), $e(Oe, "aria-label", q() === null ? void 0 : q() ? q() : `Edge from ${_()} to ${b()}`);
        },
        [
          () => gn(Ht(["svelte-flow__edge", Z()])),
          () => ({
            animated: m(),
            selected: $(),
            selectable: g(f)
          })
        ],
        be
      ), nt("click", Oe, Te), nt("contextmenu", Oe, (pe) => {
        _e(pe, "edgecontextmenu");
      }), nt("mouseenter", Oe, (pe) => {
        _e(pe, "edgemouseenter");
      }), nt("mouseleave", Oe, (pe) => {
        _e(pe, "edgemouseleave");
      }), D(G, Se);
    };
    we(se, (G) => {
      V() || G(oe);
    });
  }
  D(e, Ce);
  var ve = he({
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
      return b();
    },
    set target(G) {
      b(G), y();
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
      return $();
    },
    set selected(G) {
      $(G), y();
    },
    get selectable() {
      return M();
    },
    set selectable(G) {
      M(G), y();
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
      return z();
    },
    set markerStart(G) {
      z(G), y();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(G) {
      I(G), y();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(G) {
      R(G), y();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(G) {
      S(G), y();
    },
    get sourceX() {
      return x();
    },
    set sourceX(G) {
      x(G), y();
    },
    get sourceY() {
      return P();
    },
    set sourceY(G) {
      P(G), y();
    },
    get targetX() {
      return H();
    },
    set targetX(G) {
      H(G), y();
    },
    get targetY() {
      return N();
    },
    set targetY(G) {
      N(G), y();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(G) {
      T(G), y();
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
  return r(), ve;
}
ue(
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
  ge(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return tn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ie(), he({
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
ue(Uc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Kp = /* @__PURE__ */ Ee("<defs></defs>");
function Jc(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(i, "$markers", n), { markers: i } = Ke();
  Ie();
  var s = Kp();
  Mt(s, 5, o, (a) => a.id, (a, l) => {
    Qc(a, lt(() => g(l)));
  }), Y(s), D(e, s), he(), r();
}
ue(Jc, {}, [], [], !0);
var jp = /* @__PURE__ */ Ee('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Gp = /* @__PURE__ */ Ee('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Up = /* @__PURE__ */ Ee('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Qc(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ie();
  var c = Up(), d = W(c);
  {
    var f = (p) => {
      var _ = jp();
      Pe(() => {
        $e(_, "stroke", l()), $e(_, "stroke-width", u());
      }), D(p, _);
    }, h = (p, _) => {
      {
        var b = (k) => {
          var v = Gp();
          Pe(() => {
            $e(v, "stroke", l()), $e(v, "stroke-width", u()), $e(v, "fill", l());
          }), D(k, v);
        };
        we(
          p,
          (k) => {
            r() === ko.ArrowClosed && k(b);
          },
          _
        );
      }
    };
    we(d, (p) => {
      r() === ko.Arrow ? p(f) : p(h, !1);
    });
  }
  return Y(c), Pe(() => {
    $e(c, "id", n()), $e(c, "markerWidth", `${o()}`), $e(c, "markerHeight", `${i()}`), $e(c, "markerUnits", s()), $e(c, "orient", a());
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
ue(
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
var Jp = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function ed(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(a, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ke();
  tn(() => {
    s() && u(s());
  }), Ie();
  var d = Jp(), f = W(d), h = W(f);
  Jc(h, {}), Y(f);
  var p = B(f, 2);
  Mt(p, 1, o, (v) => v.id, (v, C) => {
    const m = /* @__PURE__ */ be(() => g(C).selectable ?? i()), $ = /* @__PURE__ */ be(() => g(C).type || "default");
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
        return g($);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(M) {
          We.call(this, t, M);
        },
        edgecontextmenu(M) {
          We.call(this, t, M);
        },
        edgemouseenter(M) {
          We.call(this, t, M);
        },
        edgemouseleave(M) {
          We.call(this, t, M);
        }
      }
    });
  });
  var _ = B(p, 2);
  {
    var b = (v) => {
      Uc(v, {
        onMount: () => {
          hi(l, !0);
        },
        onDestroy: () => {
          hi(l, !1);
        }
      });
    };
    we(_, (v) => {
      o().length > 0 && v(b);
    });
  }
  Y(d), D(e, d);
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
ue(ed, { defaultEdgeOptions: {} }, [], [], !0);
var Qp = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const e2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Sa(e, t) {
  ge(t, !1), et(e, e2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = Qe(), l = xe(a);
  {
    var u = (c) => {
      var d = Qp();
      let f;
      Pe(() => f = gt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, d);
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
ue(
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
  const [n, r] = rt(), o = () => ee(s, "$selectionRect", n), i = () => ee(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ke();
  Ie();
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
  }), he(), r();
}
ue(td, {}, [], [], !0);
var t2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const n2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function nd(e, t) {
  ge(t, !1), et(e, n2);
  const [n, r] = rt(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), s = () => ee(u, "$nodes", n), a = Ke(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = Fi();
  let f = /* @__PURE__ */ ie(null);
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
  ), wt(), Ie();
  var _ = Qe(), b = xe(_);
  {
    var k = (v) => {
      var C = t2(), m = W(C);
      Sa(m, { width: "100%", height: "100%", x: 0, y: 0 }), Y(C), _t(C, ($, M) => Nr == null ? void 0 : Nr($, M), () => ({
        disabled: !1,
        store: a,
        onDrag: ($, M, E, V) => {
          d("nodedrag", { event: $, targetNode: null, nodes: V });
        },
        onDragStart: ($, M, E, V) => {
          d("nodedragstart", { event: $, targetNode: null, nodes: V });
        },
        onDragStop: ($, M, E, V) => {
          d("nodedragstop", { event: $, targetNode: null, nodes: V });
        }
      })), Bt(() => nt("contextmenu", C, h)), Bt(() => nt("click", C, p)), Bt(() => nt("keyup", C, () => {
      })), Pe(() => gt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), D(v, C);
    };
    we(b, (v) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && v(k);
    });
  }
  D(e, _), he(), r();
}
ue(nd, {}, [], [], !0);
function je(e, t) {
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
function rd(e, t) {
  ge(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => ki() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => ki() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ke();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function p(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function _(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function b(v, C) {
    return (Array.isArray(v) ? v : [v]).map(($) => {
      const M = _($);
      return {
        key: M,
        modifier: p($),
        enabled: M !== null,
        callback: C
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ie(), nt("blur", At, k), nt("contextmenu", At, k), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(n(), () => a.set(!0)),
    type: "keydown"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(n(), () => a.set(!1)),
    type: "keyup"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !O0(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(s(), () => d.set(!0)),
    type: "keydown"
  })), _t(At, (v, C) => je == null ? void 0 : je(v, C), () => ({
    trigger: b(s(), () => d.set(!1)),
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
ue(
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
var r2 = /* @__PURE__ */ Ee('<path fill="none" class="svelte-flow__connection-path"></path>'), o2 = /* @__PURE__ */ Ee('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function od(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(h, "$connection", n), i = () => ee(p, "$connectionLineType", n), s = () => ee(d, "$width", n), a = () => ee(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: h,
    connectionLineType: p
  } = Ke();
  let _ = /* @__PURE__ */ ie(null);
  me(
    () => (o(), J(c()), i(), g(_), Fs),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: $, fromPosition: M, toPosition: E } = o(), V = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: M,
          targetX: $.x,
          targetY: $.y,
          targetPosition: E
        };
        switch (i()) {
          case Sr.Bezier:
            ((A) => U(_, A[0]))(xc(V));
            break;
          case Sr.Step:
            ((A) => U(_, A[0]))(Ei({ ...V, borderRadius: 0 }));
            break;
          case Sr.SmoothStep:
            ((A) => U(_, A[0]))(Ei(V));
            break;
          default:
            ((A) => U(_, A[0]))(Fs(V));
        }
      }
    }
  ), wt(), Ie();
  var b = Qe(), k = xe(b);
  {
    var v = (m) => {
      var $ = o2(), M = W($), E = W(M);
      xt(E, t, "connectionLine", {});
      var V = B(E);
      {
        var A = (O) => {
          var z = r2();
          Pe(() => {
            $e(z, "d", g(_)), gt(z, u());
          }), D(O, z);
        };
        we(V, (O) => {
          c() || O(A);
        });
      }
      Y(M), Y($), Pe(
        (O) => {
          $e($, "width", s()), $e($, "height", a()), gt($, l()), bt(M, 0, O);
        },
        [
          () => gn(Ht([
            "svelte-flow__connection",
            b0(o().isValid)
          ]))
        ],
        be
      ), D(m, $);
    };
    we(k, (m) => {
      o().inProgress && m(v);
    });
  }
  D(e, b);
  var C = he({
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
ue(
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
var i2 = /* @__PURE__ */ ne("<div><!></div>");
function Ro(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = rt(), s = () => ee(d, "$selectionRectMode", o), a = /* @__PURE__ */ ie();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ke();
  me(() => J(l()), () => {
    U(a, `${l()}`.split("-"));
  }), wt(), Ie();
  var f = i2();
  let h;
  var p = W(f);
  xt(p, t, "default", {}), Y(f), Pe(
    (b) => h = Qt(f, h, {
      class: b,
      style: u(),
      ...r,
      [or]: {
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
  var _ = he({
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
ue(Ro, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var s2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function id(e, t) {
  ge(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ie();
  var o = Qe(), i = xe(o);
  {
    var s = (a) => {
      Ro(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = s2();
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
ue(id, { proOptions: {}, position: {} }, [], [], !0);
function Rl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const a2 = (e) => Object.keys(e);
function Bl(e, t) {
  a2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function l2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function u2(e = "light") {
  return Kt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = l2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var c2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), d2 = /* @__PURE__ */ ne("<!> <!>", 1), f2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const g2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function sd(e, t) {
  const n = E1(t), r = at(t, [
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
  ge(t, !1), et(e, g2);
  const [i, s] = rt(), a = () => ee(C(), "$viewport", i), l = () => ee(os, "$initialized", i), u = () => ee(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), h = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), v = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), $ = w(t, "edgeTypes", 12, void 0), M = w(t, "selectionKey", 12, void 0), E = w(t, "selectionMode", 12, void 0), V = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), O = w(t, "zoomActivationKey", 12, void 0), z = w(t, "nodesDraggable", 12, void 0), I = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), x = w(t, "snapGrid", 12, void 0), P = w(t, "deleteKey", 12, void 0), H = w(t, "connectionRadius", 12, void 0), N = w(t, "connectionLineType", 12, void 0), T = w(t, "connectionMode", 28, () => gr.Strict), L = w(t, "connectionLineStyle", 12, ""), q = w(t, "connectionLineContainerStyle", 12, ""), X = w(t, "onMoveStart", 12, void 0), Z = w(t, "onMove", 12, void 0), Q = w(t, "onMoveEnd", 12, void 0), j = w(t, "isValidConnection", 12, void 0), ce = w(t, "translateExtent", 12, void 0), de = w(t, "nodeExtent", 12, void 0), ye = w(t, "onlyRenderVisibleElements", 12, void 0), re = w(t, "panOnScrollMode", 28, () => Kn.Free), Te = w(t, "preventScrolling", 12, !0), _e = w(t, "zoomOnScroll", 12, !0), Ce = w(t, "zoomOnDoubleClick", 12, !0), se = w(t, "zoomOnPinch", 12, !0), oe = w(t, "panOnScroll", 12, !1), ve = w(t, "panOnDrag", 12, !0), G = w(t, "selectionOnDrag", 12, void 0), Se = w(t, "autoPanOnConnect", 12, !0), Ae = w(t, "autoPanOnNodeDrag", 12, !0), Oe = w(t, "onerror", 12, void 0), Je = w(t, "ondelete", 12, void 0), ae = w(t, "onedgecreate", 12, void 0), le = w(t, "attributionPosition", 12, void 0), pe = w(t, "proOptions", 12, void 0), Be = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Le = w(t, "colorMode", 12, "light"), fe = w(t, "onconnect", 12, void 0), dt = w(t, "onconnectstart", 12, void 0), nn = w(t, "onconnectend", 12, void 0), pn = w(t, "onbeforedelete", 12, void 0), De = w(t, "oninit", 12, void 0), ot = w(t, "nodeOrigin", 12, void 0), qe = w(t, "paneClickDistance", 12, 0), ze = w(t, "nodeClickDistance", 12, 0), it = w(t, "defaultMarkerColor", 12, "#b1b1b7"), rn = w(t, "style", 12, void 0), Zt = w(t, "class", 12, void 0), eo = /* @__PURE__ */ ie(), $t = /* @__PURE__ */ ie(), Vt = /* @__PURE__ */ ie();
  const wr = a() || v(), st = s1(Qi) ? Ke() : Op({
    nodes: K(f()),
    edges: K(h()),
    width: ut(),
    height: te(),
    fitView: p(),
    nodeOrigin: ot(),
    nodeExtent: de()
  });
  tn(() => (st.width.set(g($t)), st.height.set(g(Vt)), st.domNode.set(g(eo)), st.syncNodeStores(f()), st.syncEdgeStores(h()), st.syncViewport(C()), p() !== void 0 && st.fitViewQueued.set(p()), _() && st.fitViewOptions.set(_()), Rl(st, {
    nodeTypes: m(),
    edgeTypes: $(),
    minZoom: b(),
    maxZoom: k(),
    translateExtent: ce(),
    paneClickDistance: qe()
  }), () => {
    st.reset();
  }));
  const { initialized: os } = st;
  let to = /* @__PURE__ */ ie(!1);
  me(
    () => (g($t), g(Vt)),
    () => {
      g($t) !== void 0 && g(Vt) !== void 0 && (st.width.set(g($t)), st.height.set(g(Vt)));
    }
  ), me(
    () => (g(to), l(), J(De())),
    () => {
      var F;
      !g(to) && l() && ((F = De()) == null || F(), U(to, !0));
    }
  ), me(
    () => (J(d()), J(N()), J(H()), J(E()), J(x()), J(it()), J(z()), J(I()), J(S()), J(ye()), J(j()), J(Se()), J(Ae()), J(Oe()), J(Je()), J(ae()), J(T()), J(R()), J(fe()), J(dt()), J(nn()), J(pn()), J(ot()), Bl),
    () => {
      const F = {
        flowId: d(),
        connectionLineType: N(),
        connectionRadius: H(),
        selectionMode: E(),
        snapGrid: x(),
        defaultMarkerColor: it(),
        nodesDraggable: z(),
        nodesConnectable: I(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ye(),
        isValidConnection: j(),
        autoPanOnConnect: Se(),
        autoPanOnNodeDrag: Ae(),
        onerror: Oe(),
        ondelete: Je(),
        onedgecreate: ae(),
        connectionMode: T(),
        nodeDragThreshold: R(),
        onconnect: fe(),
        onconnectstart: dt(),
        onconnectend: nn(),
        onbeforedelete: pn(),
        nodeOrigin: ot()
      };
      Bl(st, F);
    }
  ), me(
    () => (J(m()), J($()), J(b()), J(k()), J(ce()), J(qe())),
    () => {
      Rl(st, {
        nodeTypes: m(),
        edgeTypes: $(),
        minZoom: b(),
        maxZoom: k(),
        translateExtent: ce(),
        paneClickDistance: qe()
      });
    }
  ), me(
    () => J(Le()),
    () => {
      O1(U(c, u2(Le())), "$colorModeClass", i);
    }
  ), wt(), Ie();
  var zt = f2();
  let Fo;
  var Wo = W(zt);
  rd(Wo, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return P();
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
  const is = /* @__PURE__ */ be(() => re() === void 0 ? Kn.Free : re()), Qd = /* @__PURE__ */ be(() => Te() === void 0 ? !0 : Te()), ef = /* @__PURE__ */ be(() => _e() === void 0 ? !0 : _e()), tf = /* @__PURE__ */ be(() => Ce() === void 0 ? !0 : Ce()), nf = /* @__PURE__ */ be(() => se() === void 0 ? !0 : se()), rf = /* @__PURE__ */ be(() => oe() === void 0 ? !1 : oe()), of = /* @__PURE__ */ be(() => ve() === void 0 ? !0 : ve()), sf = /* @__PURE__ */ be(() => qe() === void 0 ? 0 : qe());
  Wc(Xo, {
    initialViewport: wr,
    get onMoveStart() {
      return X();
    },
    get onMove() {
      return Z();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return g(is);
    },
    get preventScrolling() {
      return g(Qd);
    },
    get zoomOnScroll() {
      return g(ef);
    },
    get zoomOnDoubleClick() {
      return g(tf);
    },
    get zoomOnPinch() {
      return g(nf);
    },
    get panOnScroll() {
      return g(rf);
    },
    get panOnDrag() {
      return g(of);
    },
    get paneClickDistance() {
      return g(sf);
    },
    children: (F, Yw) => {
      const uf = /* @__PURE__ */ be(() => ve() === void 0 ? !0 : ve());
      Xc(F, {
        get panOnDrag() {
          return g(uf);
        },
        get selectionOnDrag() {
          return G();
        },
        $$events: {
          paneclick(no) {
            We.call(this, t, no);
          },
          panecontextmenu(no) {
            We.call(this, t, no);
          }
        },
        children: (no, Fw) => {
          var Da = d2(), Aa = xe(Da);
          Zc(Aa, {
            children: (df, Ww) => {
              var Oa = c2(), La = xe(Oa);
              ed(La, {
                get defaultEdgeOptions() {
                  return Be();
                },
                $$events: {
                  edgeclick(Fe) {
                    We.call(this, t, Fe);
                  },
                  edgecontextmenu(Fe) {
                    We.call(this, t, Fe);
                  },
                  edgemouseenter(Fe) {
                    We.call(this, t, Fe);
                  },
                  edgemouseleave(Fe) {
                    We.call(this, t, Fe);
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
                  connectionLine: (Fe, Xw) => {
                    var Ra = Qe(), gf = xe(Ra);
                    xt(gf, t, "connectionLine", {}), D(Fe, Ra);
                  }
                }
              });
              var za = B(Ia, 6);
              jc(za, {
                get nodeClickDistance() {
                  return ze();
                },
                $$events: {
                  nodeclick(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodemouseenter(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodemousemove(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodemouseleave(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedragstart(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedrag(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedragstop(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodecontextmenu(Fe) {
                    We.call(this, t, Fe);
                  }
                }
              });
              var ff = B(za, 2);
              nd(ff, {
                $$events: {
                  selectionclick(Fe) {
                    We.call(this, t, Fe);
                  },
                  selectioncontextmenu(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedragstart(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedrag(Fe) {
                    We.call(this, t, Fe);
                  },
                  nodedragstop(Fe) {
                    We.call(this, t, Fe);
                  }
                }
              }), D(df, Oa);
            },
            $$slots: { default: !0 }
          });
          var cf = B(Aa, 2);
          td(cf, {}), D(no, Da);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Va = B(Xo, 2);
  id(Va, {
    get proOptions() {
      return pe();
    },
    get position() {
      return le();
    }
  });
  var af = B(Va, 2);
  xt(af, t, "default", {}), Y(zt), $n(zt, (F) => U(eo, F), () => g(eo)), Pe(
    (F) => Fo = Qt(
      zt,
      Fo,
      {
        style: rn(),
        class: F,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Ht([
        "svelte-flow",
        Zt(),
        u()
      ])
    ],
    be
  ), tl(zt, "clientWidth", (F) => U($t, F)), tl(zt, "clientHeight", (F) => U(Vt, F)), nt("dragover", zt, function(F) {
    We.call(this, t, F);
  }), nt("drop", zt, function(F) {
    We.call(this, t, F);
  }), D(e, zt);
  var lf = he({
    get id() {
      return d();
    },
    set id(F) {
      d(F), y();
    },
    get nodes() {
      return f();
    },
    set nodes(F) {
      f(F), y();
    },
    get edges() {
      return h();
    },
    set edges(F) {
      h(F), y();
    },
    get fitView() {
      return p();
    },
    set fitView(F) {
      p(F), y();
    },
    get fitViewOptions() {
      return _();
    },
    set fitViewOptions(F) {
      _(F), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(F) {
      b(F), y();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(F) {
      k(F), y();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(F) {
      v(F), y();
    },
    get viewport() {
      return C();
    },
    set viewport(F) {
      C(F), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(F) {
      m(F), y();
    },
    get edgeTypes() {
      return $();
    },
    set edgeTypes(F) {
      $(F), y();
    },
    get selectionKey() {
      return M();
    },
    set selectionKey(F) {
      M(F), y();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(F) {
      E(F), y();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(F) {
      V(F), y();
    },
    get multiSelectionKey() {
      return A();
    },
    set multiSelectionKey(F) {
      A(F), y();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(F) {
      O(F), y();
    },
    get nodesDraggable() {
      return z();
    },
    set nodesDraggable(F) {
      z(F), y();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(F) {
      I(F), y();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(F) {
      R(F), y();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(F) {
      S(F), y();
    },
    get snapGrid() {
      return x();
    },
    set snapGrid(F) {
      x(F), y();
    },
    get deleteKey() {
      return P();
    },
    set deleteKey(F) {
      P(F), y();
    },
    get connectionRadius() {
      return H();
    },
    set connectionRadius(F) {
      H(F), y();
    },
    get connectionLineType() {
      return N();
    },
    set connectionLineType(F) {
      N(F), y();
    },
    get connectionMode() {
      return T();
    },
    set connectionMode(F) {
      T(F), y();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(F) {
      L(F), y();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(F) {
      q(F), y();
    },
    get onMoveStart() {
      return X();
    },
    set onMoveStart(F) {
      X(F), y();
    },
    get onMove() {
      return Z();
    },
    set onMove(F) {
      Z(F), y();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(F) {
      Q(F), y();
    },
    get isValidConnection() {
      return j();
    },
    set isValidConnection(F) {
      j(F), y();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(F) {
      ce(F), y();
    },
    get nodeExtent() {
      return de();
    },
    set nodeExtent(F) {
      de(F), y();
    },
    get onlyRenderVisibleElements() {
      return ye();
    },
    set onlyRenderVisibleElements(F) {
      ye(F), y();
    },
    get panOnScrollMode() {
      return re();
    },
    set panOnScrollMode(F) {
      re(F), y();
    },
    get preventScrolling() {
      return Te();
    },
    set preventScrolling(F) {
      Te(F), y();
    },
    get zoomOnScroll() {
      return _e();
    },
    set zoomOnScroll(F) {
      _e(F), y();
    },
    get zoomOnDoubleClick() {
      return Ce();
    },
    set zoomOnDoubleClick(F) {
      Ce(F), y();
    },
    get zoomOnPinch() {
      return se();
    },
    set zoomOnPinch(F) {
      se(F), y();
    },
    get panOnScroll() {
      return oe();
    },
    set panOnScroll(F) {
      oe(F), y();
    },
    get panOnDrag() {
      return ve();
    },
    set panOnDrag(F) {
      ve(F), y();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(F) {
      G(F), y();
    },
    get autoPanOnConnect() {
      return Se();
    },
    set autoPanOnConnect(F) {
      Se(F), y();
    },
    get autoPanOnNodeDrag() {
      return Ae();
    },
    set autoPanOnNodeDrag(F) {
      Ae(F), y();
    },
    get onerror() {
      return Oe();
    },
    set onerror(F) {
      Oe(F), y();
    },
    get ondelete() {
      return Je();
    },
    set ondelete(F) {
      Je(F), y();
    },
    get onedgecreate() {
      return ae();
    },
    set onedgecreate(F) {
      ae(F), y();
    },
    get attributionPosition() {
      return le();
    },
    set attributionPosition(F) {
      le(F), y();
    },
    get proOptions() {
      return pe();
    },
    set proOptions(F) {
      pe(F), y();
    },
    get defaultEdgeOptions() {
      return Be();
    },
    set defaultEdgeOptions(F) {
      Be(F), y();
    },
    get width() {
      return ut();
    },
    set width(F) {
      ut(F), y();
    },
    get height() {
      return te();
    },
    set height(F) {
      te(F), y();
    },
    get colorMode() {
      return Le();
    },
    set colorMode(F) {
      Le(F), y();
    },
    get onconnect() {
      return fe();
    },
    set onconnect(F) {
      fe(F), y();
    },
    get onconnectstart() {
      return dt();
    },
    set onconnectstart(F) {
      dt(F), y();
    },
    get onconnectend() {
      return nn();
    },
    set onconnectend(F) {
      nn(F), y();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(F) {
      pn(F), y();
    },
    get oninit() {
      return De();
    },
    set oninit(F) {
      De(F), y();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(F) {
      ot(F), y();
    },
    get paneClickDistance() {
      return qe();
    },
    set paneClickDistance(F) {
      qe(F), y();
    },
    get nodeClickDistance() {
      return ze();
    },
    set nodeClickDistance(F) {
      ze(F), y();
    },
    get defaultMarkerColor() {
      return it();
    },
    set defaultMarkerColor(F) {
      it(F), y();
    },
    get style() {
      return rn();
    },
    set style(F) {
      rn(F), y();
    },
    get class() {
      return Zt();
    },
    set class(F) {
      Zt(F), y();
    }
  });
  return s(), lf;
}
ue(
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
  Or(Qi, { getStore: () => l }), ga(() => {
    l.reset();
  }), Ie();
  var u = Qe(), c = xe(u);
  return xt(c, t, "default", {}), D(e, u), he({
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
ue(
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
var h2 = /* @__PURE__ */ ne("<button><!></button>");
function fo(e, t) {
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
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Ie();
  var c = h2();
  let d;
  var f = W(c);
  return xt(f, t, "default", { class: "button-svg" }), Y(c), Pe(
    (h) => d = Qt(c, d, {
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
      () => Ht([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), nt("click", c, function(h) {
    We.call(this, t, h);
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
ue(
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
var v2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function ld(e) {
  var t = v2();
  D(e, t);
}
ue(ld, {}, [], [], !0);
var p2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ud(e) {
  var t = p2();
  D(e, t);
}
ue(ud, {}, [], [], !0);
var m2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function cd(e) {
  var t = m2();
  D(e, t);
}
ue(cd, {}, [], [], !0);
var y2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function dd(e) {
  var t = y2();
  D(e, t);
}
ue(dd, {}, [], [], !0);
var w2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function fd(e) {
  var t = w2();
  D(e, t);
}
ue(fd, {}, [], [], !0);
var _2 = /* @__PURE__ */ ne("<!> <!>", 1), x2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function gd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(N, "$nodesDraggable", n), i = () => ee(T, "$nodesConnectable", n), s = () => ee(L, "$elementsSelectable", n), a = () => ee(x, "$viewport", n), l = () => ee(P, "$minZoom", n), u = () => ee(H, "$maxZoom", n), c = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie(), f = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie();
  let p = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), v = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), $ = w(t, "buttonColorHover", 12, void 0), M = w(t, "buttonBorderColor", 12, void 0), E = w(t, "ariaLabel", 12, void 0), V = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), O = w(t, "fitViewOptions", 12, void 0), z = w(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: R,
    fitView: S,
    viewport: x,
    minZoom: P,
    maxZoom: H,
    nodesDraggable: N,
    nodesConnectable: T,
    elementsSelectable: L
  } = Ke(), q = {
    bgColor: v(),
    bgColorHover: C(),
    color: m(),
    colorHover: $(),
    borderColor: M()
  }, X = () => {
    I();
  }, Z = () => {
    R();
  }, Q = () => {
    S(O());
  }, j = () => {
    U(c, !g(c)), N.set(g(c)), T.set(g(c)), L.set(g(c));
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
  }), me(() => J(A()), () => {
    U(h, A() === "horizontal" ? "horizontal" : "vertical");
  }), wt(), Ie();
  const ce = /* @__PURE__ */ be(() => Ht([
    "svelte-flow__controls",
    g(h),
    z()
  ])), de = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  Ro(e, {
    get class() {
      return g(ce);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(de);
    },
    get style() {
      return V();
    },
    children: (re, Te) => {
      var _e = x2(), Ce = xe(_e);
      xt(Ce, t, "before", {});
      var se = B(Ce, 2);
      {
        var oe = (ae) => {
          var le = _2(), pe = xe(le);
          fo(pe, lt(
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
              children: (ut, te) => {
                ld(ut);
              },
              $$slots: { default: !0 }
            }
          ));
          var Be = B(pe, 2);
          fo(Be, lt(
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
              children: (ut, te) => {
                ud(ut);
              },
              $$slots: { default: !0 }
            }
          )), D(ae, le);
        };
        we(se, (ae) => {
          _() && ae(oe);
        });
      }
      var ve = B(se, 2);
      {
        var G = (ae) => {
          fo(ae, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            q,
            {
              $$events: { click: Q },
              children: (le, pe) => {
                cd(le);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        we(ve, (ae) => {
          b() && ae(G);
        });
      }
      var Se = B(ve, 2);
      {
        var Ae = (ae) => {
          fo(ae, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            q,
            {
              $$events: { click: j },
              children: (le, pe) => {
                var Be = Qe(), ut = xe(Be);
                {
                  var te = (fe) => {
                    fd(fe);
                  }, Le = (fe) => {
                    dd(fe);
                  };
                  we(ut, (fe) => {
                    g(c) ? fe(te) : fe(Le, !1);
                  });
                }
                D(le, Be);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        we(Se, (ae) => {
          k() && ae(Ae);
        });
      }
      var Oe = B(Se, 2);
      xt(Oe, t, "default", {});
      var Je = B(Oe, 2);
      xt(Je, t, "after", {}), D(re, _e);
    },
    $$slots: { default: !0 }
  });
  var ye = he({
    get position() {
      return p();
    },
    set position(re) {
      p(re), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(re) {
      _(re), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(re) {
      b(re), y();
    },
    get showLock() {
      return k();
    },
    set showLock(re) {
      k(re), y();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(re) {
      v(re), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(re) {
      C(re), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(re) {
      m(re), y();
    },
    get buttonColorHover() {
      return $();
    },
    set buttonColorHover(re) {
      $(re), y();
    },
    get buttonBorderColor() {
      return M();
    },
    set buttonBorderColor(re) {
      M(re), y();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(re) {
      E(re), y();
    },
    get style() {
      return V();
    },
    set style(re) {
      V(re), y();
    },
    get orientation() {
      return A();
    },
    set orientation(re) {
      A(re), y();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(re) {
      O(re), y();
    },
    get class() {
      return z();
    },
    set class(re) {
      z(re), y();
    }
  });
  return r(), ye;
}
ue(
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
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var b2 = /* @__PURE__ */ Ee("<circle></circle>");
function hd(e, t) {
  ge(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ie();
  var o = b2();
  return Pe(
    (i) => {
      $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), bt(o, 0, i);
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
ue(hd, { radius: {}, class: {} }, [], [], !0);
var C2 = /* @__PURE__ */ Ee("<path></path>");
function vd(e, t) {
  ge(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Ie();
  var s = C2();
  return Pe(
    (a) => {
      $e(s, "stroke-width", n()), $e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), bt(s, 0, a);
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
ue(
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
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var k2 = /* @__PURE__ */ Ee('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const E2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function pd(e, t) {
  ge(t, !1), et(e, E2);
  const [n, r] = rt(), o = () => ee($, "$flowId", n), i = () => ee(m, "$viewport", n), s = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => jn.Dots), h = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), v = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: m, flowId: $ } = Ke(), M = p() || $2[f()], E = f() === jn.Dots, V = f() === jn.Cross, A = Array.isArray(h()) ? h() : [h(), h()];
  me(
    () => (o(), J(d())),
    () => {
      U(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), me(() => i(), () => {
    U(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), me(() => i(), () => {
    U(l, M * i().zoom);
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
  ), wt(), Ie();
  var O = k2();
  let z;
  var I = W(O), R = W(I);
  {
    var S = (N) => {
      const T = /* @__PURE__ */ be(() => g(l) / 2);
      hd(N, {
        get radius() {
          return g(T);
        },
        get class() {
          return v();
        }
      });
    }, x = (N) => {
      vd(N, {
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
    we(R, (N) => {
      E ? N(S) : N(x, !1);
    });
  }
  Y(I);
  var P = B(I);
  Y(O), Pe(
    (N) => {
      bt(O, 0, N, "svelte-1r7pe8d"), z = gt(O, "", z, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": k()
      }), $e(I, "id", g(s)), $e(I, "x", i().x % g(a)[0]), $e(I, "y", i().y % g(a)[1]), $e(I, "width", g(a)[0]), $e(I, "height", g(a)[1]), $e(I, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), $e(P, "fill", `url(#${g(s)})`);
    },
    [
      () => gn(Ht(["svelte-flow__background", C()]))
    ],
    be
  ), D(e, O);
  var H = he({
    get id() {
      return d();
    },
    set id(N) {
      d(N), y();
    },
    get variant() {
      return f();
    },
    set variant(N) {
      f(N), y();
    },
    get gap() {
      return h();
    },
    set gap(N) {
      h(N), y();
    },
    get size() {
      return p();
    },
    set size(N) {
      p(N), y();
    },
    get lineWidth() {
      return _();
    },
    set lineWidth(N) {
      _(N), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(N) {
      b(N), y();
    },
    get patternColor() {
      return k();
    },
    set patternColor(N) {
      k(N), y();
    },
    get patternClass() {
      return v();
    },
    set patternClass(N) {
      v(N), y();
    },
    get class() {
      return C();
    },
    set class(N) {
      C(N), y();
    }
  });
  return r(), H;
}
ue(
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
var S2 = /* @__PURE__ */ Ee("<rect></rect>");
function md(e, t) {
  ge(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  Ie();
  var h = S2();
  let p;
  return Pe(
    (_, b) => {
      p = bt(h, 0, _, null, p, b), $e(h, "x", n()), $e(h, "y", r()), $e(h, "rx", s()), $e(h, "ry", s()), $e(h, "width", o()), $e(h, "height", i()), gt(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(h, "shape-rendering", l());
    },
    [
      () => gn(Ht(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), D(e, h), he({
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
ue(
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
  const n = dp({
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
var P2 = /* @__PURE__ */ Ee("<title> </title>"), N2 = /* @__PURE__ */ Ee('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function yd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(ve, "$flowId", n), i = () => ee(Ce, "$viewport", n), s = () => ee(se, "$containerWidth", n), a = () => ee(oe, "$containerHeight", n), l = () => ee(_e, "$nodeLookup", n), u = () => ee(Te, "$nodes", n), c = () => ee(G, "$panZoom", n), d = () => ee(Se, "$translateExtent", n), f = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), _ = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), m = /* @__PURE__ */ ie(), $ = /* @__PURE__ */ ie(), M = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), V = /* @__PURE__ */ ie();
  let A = w(t, "position", 12, "bottom-right"), O = w(t, "ariaLabel", 12, "Mini map"), z = w(t, "nodeStrokeColor", 12, "transparent"), I = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), x = w(t, "nodeStrokeWidth", 12, 2), P = w(t, "bgColor", 12, void 0), H = w(t, "maskColor", 12, void 0), N = w(t, "maskStrokeColor", 12, void 0), T = w(t, "maskStrokeWidth", 12, void 0), L = w(t, "width", 12, void 0), q = w(t, "height", 12, void 0), X = w(t, "pannable", 12, !0), Z = w(t, "zoomable", 12, !0), Q = w(t, "inversePan", 12, void 0), j = w(t, "zoomStep", 12, void 0), ce = w(t, "style", 12, ""), de = w(t, "class", 12, "");
  const ye = 200, re = 150, {
    nodes: Te,
    nodeLookup: _e,
    viewport: Ce,
    width: se,
    height: oe,
    flowId: ve,
    panZoom: G,
    translateExtent: Se
  } = Ke(), Ae = I() === void 0 ? void 0 : xs(I()), Oe = xs(z()), Je = xs(R()), ae = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), le = `svelte-flow__minimap-desc-${o()}`;
  let pe = /* @__PURE__ */ ie(g(f));
  const Be = () => g(k);
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
      U(pe, l().size > 0 ? mc(Lo(l(), { filter: (fe) => !fe.hidden }), g(f)) : g(f)), u();
    }
  ), me(() => J(L()), () => {
    U(h, L() ?? ye);
  }), me(() => J(q()), () => {
    U(p, q() ?? re);
  }), me(
    () => (g(pe), g(h)),
    () => {
      U(_, g(pe).width / g(h));
    }
  ), me(
    () => (g(pe), g(p)),
    () => {
      U(b, g(pe).height / g(p));
    }
  ), me(
    () => (g(_), g(b)),
    () => {
      U(k, Math.max(g(_), g(b)));
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
    () => (g(pe), g(v), g(m)),
    () => {
      U($, g(pe).x - (g(v) - g(pe).width) / 2 - g(m));
    }
  ), me(
    () => (g(pe), g(C), g(m)),
    () => {
      U(M, g(pe).y - (g(C) - g(pe).height) / 2 - g(m));
    }
  ), me(() => (g(v), g(m)), () => {
    U(E, g(v) + g(m) * 2);
  }), me(() => (g(C), g(m)), () => {
    U(V, g(C) + g(m) * 2);
  }), wt(), Ie();
  const ut = /* @__PURE__ */ be(() => ce() + (P() ? `;--xy-minimap-background-color-props:${P()}` : "")), te = /* @__PURE__ */ be(() => Ht(["svelte-flow__minimap", de()]));
  Ro(e, {
    get position() {
      return A();
    },
    get style() {
      return g(ut);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (fe, dt) => {
      var nn = Qe(), pn = xe(nn);
      {
        var De = (ot) => {
          var qe = N2();
          $e(qe, "aria-labelledby", le);
          let ze;
          var it = W(qe);
          {
            var rn = ($t) => {
              var Vt = P2();
              $e(Vt, "id", le);
              var wr = W(Vt, !0);
              Y(Vt), Pe(() => ft(wr, O())), D($t, Vt);
            };
            we(it, ($t) => {
              O() && $t(rn);
            });
          }
          var Zt = B(it);
          Mt(Zt, 1, u, ($t) => $t.id, ($t, Vt) => {
            var wr = Qe();
            const st = /* @__PURE__ */ be(() => l().get(g(Vt).id));
            var os = xe(wr);
            {
              var to = (zt) => {
                const Fo = /* @__PURE__ */ be(() => nr(g(st))), Wo = /* @__PURE__ */ be(() => Ae == null ? void 0 : Ae(g(st))), Xo = /* @__PURE__ */ be(() => Oe(g(st))), is = /* @__PURE__ */ be(() => Je(g(st)));
                md(zt, lt(
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
                      return x();
                    },
                    shapeRendering: ae,
                    get class() {
                      return g(is);
                    }
                  }
                ));
              };
              we(os, (zt) => {
                g(st) && yc(g(st)) && zt(to);
              });
            }
            D($t, wr);
          });
          var eo = B(Zt);
          Y(qe), _t(qe, ($t, Vt) => _s == null ? void 0 : _s($t, Vt), () => ({
            panZoom: c(),
            viewport: Ce,
            getViewScale: Be,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: Q(),
            zoomStep: j(),
            pannable: X(),
            zoomable: Z()
          })), Pe(() => {
            $e(qe, "width", g(h)), $e(qe, "height", g(p)), $e(qe, "viewBox", `${g($) ?? ""} ${g(M) ?? ""} ${g(E) ?? ""} ${g(V) ?? ""}`), ze = gt(qe, "", ze, {
              "--xy-minimap-mask-background-color-props": H(),
              "--xy-minimap-mask-stroke-color-props": N(),
              "--xy-minimap-mask-stroke-width-props": T() ? T() * g(k) : void 0
            }), $e(eo, "d", `M${g($) - g(m)},${g(M) - g(m)}h${g(E) + g(m) * 2}v${g(V) + g(m) * 2}h${-g(E) - g(m) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), D(ot, qe);
        };
        we(pn, (ot) => {
          c() && ot(De);
        });
      }
      D(fe, nn);
    },
    $$slots: { default: !0 }
  });
  var Le = he({
    get position() {
      return A();
    },
    set position(fe) {
      A(fe), y();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(fe) {
      O(fe), y();
    },
    get nodeStrokeColor() {
      return z();
    },
    set nodeStrokeColor(fe) {
      z(fe), y();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(fe) {
      I(fe), y();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(fe) {
      R(fe), y();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(fe) {
      S(fe), y();
    },
    get nodeStrokeWidth() {
      return x();
    },
    set nodeStrokeWidth(fe) {
      x(fe), y();
    },
    get bgColor() {
      return P();
    },
    set bgColor(fe) {
      P(fe), y();
    },
    get maskColor() {
      return H();
    },
    set maskColor(fe) {
      H(fe), y();
    },
    get maskStrokeColor() {
      return N();
    },
    set maskStrokeColor(fe) {
      N(fe), y();
    },
    get maskStrokeWidth() {
      return T();
    },
    set maskStrokeWidth(fe) {
      T(fe), y();
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
      return Q();
    },
    set inversePan(fe) {
      Q(fe), y();
    },
    get zoomStep() {
      return j();
    },
    set zoomStep(fe) {
      j(fe), y();
    },
    get style() {
      return ce();
    },
    set style(fe) {
      ce(fe), y();
    },
    get class() {
      return de();
    },
    set class(fe) {
      de(fe), y();
    }
  });
  return r(), Le;
}
ue(
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
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: p, nodeOrigin: _, edgeLookup: b, connectionLookup: k } = Ke(), v = ($) => {
    var O, z;
    const M = K(p), E = ql($) ? $ : M.get($.id), V = E.parentId ? H0(E.position, E.measured, E.parentId, M, K(_)) : E.position, A = {
      ...E,
      position: V,
      width: ((O = E.measured) == null ? void 0 : O.width) ?? E.width,
      height: ((z = E.measured) == null ? void 0 : z.height) ?? E.height
    };
    return qr(A);
  }, C = ($, M, E = { replace: !1 }) => {
    var O;
    const V = (O = K(p).get($)) == null ? void 0 : O.internals.userNode;
    if (!V)
      return;
    const A = typeof M == "function" ? M(V) : M;
    E.replace ? d.update((z) => z.map((I) => I.id === $ ? ql(A) ? A : { ...I, ...A } : I)) : (Object.assign(V, A), d.update((z) => z));
  }, m = ($) => K(p).get($);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: ($) => {
      var M;
      return (M = m($)) == null ? void 0 : M.internals.userNode;
    },
    getNodes: ($) => $ === void 0 ? K(d) : Yl(K(p), $),
    getEdge: ($) => K(b).get($),
    getEdges: ($) => $ === void 0 ? K(f) : Yl(K(b), $),
    setZoom: ($, M) => {
      const E = K(c);
      return E ? E.scaleTo($, { duration: M == null ? void 0 : M.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async ($, M) => {
      const E = K(i), V = K(c);
      return V ? (await V.setViewport({
        x: $.x ?? E.x,
        y: $.y ?? E.y,
        zoom: $.zoom ?? E.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async ($, M, E) => {
      const V = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : K(u), A = K(c);
      return A ? (await A.setViewport({
        x: K(s) / 2 - $ * V,
        y: K(a) / 2 - M * V,
        zoom: V
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async ($, M) => {
      const E = K(c);
      if (!E)
        return Promise.resolve(!1);
      const V = Ca($, K(s), K(a), K(l), K(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await E.setViewport(V, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: ($, M = !0, E) => {
      const V = El($), A = V ? $ : v($);
      return A ? (E || K(d)).filter((O) => {
        const z = K(p).get(O.id);
        if (!z || !V && O.id === $.id)
          return !1;
        const I = qr(z), R = Eo(I, A);
        return M && R > 0 || R >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: ($, M, E = !0) => {
      const A = El($) ? $ : v($);
      if (!A)
        return !1;
      const O = Eo(A, M);
      return E && O > 0 || O >= A.width * A.height;
    },
    deleteElements: async ({ nodes: $ = [], edges: M = [] }) => {
      const { nodes: E, edges: V } = await hc({
        nodesToRemove: $,
        edgesToRemove: M,
        nodes: K(d),
        edges: K(f),
        onBeforeDelete: K(r)
      });
      return E && d.update((A) => A.filter((O) => !E.some(({ id: z }) => z === O.id))), V && f.update((A) => A.filter((O) => !V.some(({ id: z }) => z === O.id))), {
        deletedNodes: E,
        deletedEdges: V
      };
    },
    screenToFlowPosition: ($, M = { snapToGrid: !0 }) => {
      const E = K(h);
      if (!E)
        return $;
      const V = M.snapToGrid ? K(o) : !1, { x: A, y: O, zoom: z } = K(i), { x: I, y: R } = E.getBoundingClientRect(), S = {
        x: $.x - I,
        y: $.y - R
      };
      return Io(S, [A, O, z], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: ($) => {
      const M = K(h);
      if (!M)
        return $;
      const { x: E, y: V, zoom: A } = K(i), { x: O, y: z } = M.getBoundingClientRect(), I = $i($, [E, V, A]);
      return {
        x: I.x + O,
        y: I.y + z
      };
    },
    toObject: () => ({
      nodes: K(d).map(($) => ({
        ...$,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...$.position },
        data: { ...$.data }
      })),
      edges: K(f).map(($) => ({ ...$ })),
      viewport: { ...K(i) }
    }),
    updateNode: C,
    updateNodeData: ($, M, E) => {
      var O;
      const V = (O = K(p).get($)) == null ? void 0 : O.internals.userNode;
      if (!V)
        return;
      const A = typeof M == "function" ? M(V) : M;
      V.data = E != null && E.replace ? A : { ...V.data, ...A }, d.update((z) => z);
    },
    getNodesBounds: ($) => {
      const M = K(p), E = K(_);
      return k0($, { nodeLookup: M, nodeOrigin: E });
    },
    getHandleConnections: ({ type: $, id: M, nodeId: E }) => {
      var V;
      return Array.from(((V = K(k).get(`${E}-${$}-${M ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var T2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function wd(e, t) {
  ge(t, !1);
  const [n, r] = rt(), o = () => ee(C, "$nodes", n), i = () => ee(v, "$nodeLookup", n), s = () => ee(k, "$viewport", n), a = () => ee(b, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: k, nodeLookup: v, nodes: C } = Ke(), { getNodesBounds: m } = It(), $ = cr("svelteflow__node_id");
  let M = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie([]), V = p() !== void 0 ? p() : 10, A = f() !== void 0 ? f() : Me.Top, O = h() !== void 0 ? h() : "center";
  me(
    () => (o(), J(d()), i()),
    () => {
      o();
      const x = Array.isArray(d()) ? d() : [d() || $];
      U(E, x.reduce(
        (P, H) => {
          const N = i().get(H);
          return N && P.push(N), P;
        },
        []
      ));
    }
  ), me(
    () => (g(E), s()),
    () => {
      const x = m(g(E));
      x && U(M, K0(x, s(), A, V, O));
    }
  ), me(() => g(E), () => {
    U(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((x) => (x.internals.z || 5) + 1)));
  }), me(() => o(), () => {
    U(u, o().filter((x) => x.selected).length);
  }), me(
    () => (J(_()), g(E), g(u)),
    () => {
      U(c, typeof _() == "boolean" ? _() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), wt(), Ie();
  var z = Qe(), I = xe(z);
  {
    var R = (x) => {
      var P = T2();
      let H;
      var N = W(P);
      xt(N, t, "default", {}), Y(P), _t(P, (T, L) => Pr == null ? void 0 : Pr(T, L), () => ({ domNode: a() })), Pe(
        (T) => {
          $e(P, "data-id", T), H = gt(P, "", H, {
            position: "absolute",
            transform: g(M),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((T, L) => `${T}${L.id} `, "").trim()
        ],
        be
      ), D(x, P);
    };
    we(I, (x) => {
      a() && g(c) && g(E) && x(R);
    });
  }
  D(e, z);
  var S = he({
    get nodeId() {
      return d();
    },
    set nodeId(x) {
      d(x), y();
    },
    get position() {
      return f();
    },
    set position(x) {
      f(x), y();
    },
    get align() {
      return h();
    },
    set align(x) {
      h(x), y();
    },
    get offset() {
      return p();
    },
    set offset(x) {
      p(x), y();
    },
    get isVisible() {
      return _();
    },
    set isVisible(x) {
      _(x), y();
    }
  });
  return r(), S;
}
ue(
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
  const { nodes: t, nodeLookup: n } = Ke();
  let r = [], o = !0;
  return Zn([t, n], ([, i], s) => {
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
    (!np(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Fl = "tinyflow-component";
class Kw {
  constructor(t) {
    kt(this, "options");
    kt(this, "rootEl");
    kt(this, "svelteFlowInstance");
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
const M2 = () => {
  const e = ke([]), t = ke([]), n = ke({ x: 250, y: 100, zoom: 1 });
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
}, si = M2();
var H2 = /* @__PURE__ */ ne("<button><!></button>");
function Ue(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = H2();
  let i;
  var s = W(o);
  return dr(s, () => n() ?? vt), Y(o), Pe(() => i = Qt(o, i, {
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
ue(Ue, { children: {} }, [], [], !0);
var V2 = /* @__PURE__ */ ne("<input>");
function _d(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = V2();
  ar(r);
  let o;
  Pe(() => o = Qt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
ue(_d, {}, [], [], !0);
var D2 = /* @__PURE__ */ ne("<input>");
function mt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = D2();
  ar(r);
  let o;
  Pe(() => o = Qt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), he();
}
ue(mt, {}, [], [], !0);
var A2 = /* @__PURE__ */ ne("<textarea></textarea>");
function yt(e, t) {
  ge(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = A2();
  y1(o);
  let i;
  return Pe(() => i = Qt(o, i, {
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
ue(yt, { value: {} }, [], [], !0);
var O2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), L2 = /* @__PURE__ */ ne("<div></div>");
function xd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  Ie();
  var l = L2();
  let u;
  return Mt(l, 5, o, Lr, (c, d, f) => {
    var h = O2();
    $e(h, "tabindex", f), h.__click = () => a(g(d), f), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(d), f));
    };
    var p = W(h);
    {
      var _ = (k) => {
        var v = Ye();
        Pe(() => ft(v, g(d).label)), D(k, v);
      }, b = (k) => {
        var v = Qe(), C = xe(v);
        dr(C, () => g(d).label ?? vt), D(k, v);
      };
      we(p, (k) => {
        typeof g(d).label == "string" ? k(_) : k(b, !1);
      });
    }
    Y(h), Pe(() => bt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(c, h);
  }), Y(l), Pe(() => u = Qt(l, u, {
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
Ur(["click", "keydown"]);
ue(xd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var I2 = (e, t, n) => t(g(n)), z2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, R2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), B2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), q2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Y2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), F2 = /* @__PURE__ */ ne("<div></div>");
const W2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function bd(e, t) {
  ge(t, !0), et(e, W2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => sn([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = F2();
  return Mt(s, 21, n, Lr, (a, l, u) => {
    var c = Y2(), d = W(c);
    $e(d, "tabindex", u), d.__click = [I2, i, l], d.__keydown = [z2, i, l];
    var f = W(d);
    {
      var h = (m) => {
        var $ = R2(), M = W($);
        Wn(M, {
          get target() {
            return g(l).icon;
          }
        }), Y($), D(m, $);
      };
      we(f, (m) => {
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
    var b = B(d, 2);
    {
      var k = (m) => {
        var $ = B2(), M = W($);
        Wn(M, {
          get target() {
            return g(l).description;
          }
        }), Y($), D(m, $);
      };
      we(b, (m) => {
        g(l).description && m(k);
      });
    }
    var v = B(b, 2);
    {
      var C = (m) => {
        var $ = q2(), M = W($);
        Wn(M, {
          get target() {
            return g(l).content;
          }
        }), Y($), D(m, $);
      };
      we(v, (m) => {
        o().includes(g(l).key) && m(C);
      });
    }
    Y(c), Pe((m) => bt(_, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(a, c);
  }), Y(s), Pe(() => {
    gt(s, t.style), bt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
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
Ur(["click", "keydown"]);
ue(bd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  ge(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Qe(), o = xe(r);
  {
    var i = (a) => {
      var l = Qe(), u = xe(l);
      dr(u, () => n() ?? vt), D(a, l);
    }, s = (a) => {
      var l = Qe(), u = xe(l);
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
ue(Wn, { target: {} }, [], [], !0);
var X2 = (e, t, n) => t(g(n)), Z2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), K2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), j2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), G2 = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), U2 = /* @__PURE__ */ ne("<!> <!>", 1), J2 = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), Q2 = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), em = /* @__PURE__ */ ne("<div><!></div>");
function en(e, t) {
  ge(t, !0);
  const n = (v, C = vt) => {
    var m = Qe(), $ = xe(m);
    Mt($, 19, C, (M, E) => `${E}_${M.value}`, (M, E) => {
      var V = j2(), A = xe(V);
      A.__click = [X2, p, E];
      var O = W(A), z = W(O);
      {
        var I = (P) => {
          var H = Z2();
          D(P, H);
        };
        we(z, (P) => {
          g(E).children && g(E).children.length > 0 && P(I);
        });
      }
      Y(O);
      var R = B(O, 2);
      Wn(R, {
        get target() {
          return g(E).label;
        }
      }), Y(A);
      var S = B(A, 2);
      {
        var x = (P) => {
          var H = K2(), N = W(H);
          n(N, () => g(E).children), Y(H), D(P, H);
        };
        we(S, (P) => {
          g(E).children && g(E).children.length > 0 && (a() || u().includes(g(E).value)) && P(x);
        });
      }
      D(M, V);
    }), D(v, m);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), c = w(t, "placeholder", 7), d = /* @__PURE__ */ Ct(t, [
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
  ]), f = /* @__PURE__ */ Ne(() => {
    const v = [], C = (m) => {
      for (let $ of m)
        i().length > 0 ? i().includes($.value) && v.push($) : s().includes($.value) && v.push($), $.children && $.children.length > 0 && C($.children);
    };
    return C(r()), v;
  }), h;
  function p(v) {
    var C;
    h == null || h.hide(), (C = o()) == null || C(v);
  }
  var _ = em();
  let b;
  var k = W(_);
  return $n(
    Qr(k, {
      floating: (C) => {
        var m = G2(), $ = W(m);
        n($, r), Y(m), D(C, m);
      },
      children: (C, m) => {
        var $ = Q2();
        let M;
        var E = W($);
        Mt(
          E,
          23,
          () => g(f),
          (V, A) => `${A}_${V.value}`,
          (V, A, O) => {
            var z = Qe(), I = xe(z);
            {
              var R = (x) => {
                var P = Qe(), H = xe(P);
                {
                  var N = (T) => {
                    Wn(T, {
                      get target() {
                        return g(A).label;
                      }
                    });
                  };
                  we(H, (T) => {
                    g(O) === 0 && T(N);
                  });
                }
                D(x, P);
              }, S = (x) => {
                var P = U2(), H = xe(P);
                Wn(H, {
                  get target() {
                    return g(A).label;
                  }
                });
                var N = B(H, 2);
                {
                  var T = (L) => {
                    var q = Ye(",");
                    D(L, q);
                  };
                  we(N, (L) => {
                    g(O) < g(f).length - 1 && L(T);
                  });
                }
                D(x, P);
              };
              we(I, (x) => {
                l() ? x(S, !1) : x(R);
              });
            }
            D(V, z);
          },
          (V) => {
            var A = J2(), O = W(A, !0);
            Y(A), Pe(() => ft(O, c())), D(V, A);
          }
        ), Y(E), Ve(2), Y($), Pe(() => M = Qt($, M, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), D(C, $);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), Y(_), Pe(() => b = Qt(_, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), D(e, _), he({
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
ue(
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
const Po = Math.min, Tr = Math.max, Ni = Math.round, wn = (e) => ({
  x: e,
  y: e
}), tm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nm = {
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
function Cd(e) {
  return e === "x" ? "y" : "x";
}
function Pa(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(vr(e)) ? "y" : "x";
}
function Na(e) {
  return Cd(ur(e));
}
function rm(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Na(e), i = Pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ti(s)), [s, Ti(s)];
}
function om(e) {
  const t = Ti(e);
  return [Zs(e), t, Zs(t)];
}
function Zs(e) {
  return e.replace(/start|end/g, (t) => nm[t]);
}
function im(e, t, n) {
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
function sm(e, t, n, r) {
  const o = qo(e);
  let i = im(vr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Zs)))), i;
}
function Ti(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tm[t]);
}
function am(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $d(e) {
  return typeof e != "number" ? am(e) : {
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
const lm = async (e, t, n) => {
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
      name: b,
      fn: k
    } = a[_], {
      x: v,
      y: C,
      data: m,
      reset: $
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
      [b]: {
        ...h[b],
        ...m
      }
    }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (f = $.placement), $.rects && (u = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
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
async function kd(e, t) {
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
  } = Bo(t, e), p = $d(h), b = a[f ? d === "floating" ? "reference" : "floating" : d], k = Mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, $ = Mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: v,
    offsetParent: C,
    strategy: l
  }) : v);
  return {
    top: (k.top - $.top + p.top) / m.y,
    bottom: ($.bottom - k.bottom + p.bottom) / m.y,
    left: (k.left - $.left + p.left) / m.x,
    right: ($.right - k.right + p.right) / m.x
  };
}
const um = (e) => ({
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
    }, h = Na(o), p = Pa(h), _ = await s.getDimensions(u), b = h === "y", k = b ? "top" : "left", v = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[h] - f[h] - i.floating[p], $ = f[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let E = M ? M[C] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(M))) && (E = a.floating[C] || i.floating[p]);
    const V = m / 2 - $ / 2, A = E / 2 - _[p] / 2 - 1, O = Po(d[k], A), z = Po(d[v], A), I = O, R = E - _[p] - z, S = E / 2 - _[p] / 2 + V, x = Xs(I, S, R), P = !l.arrow && qo(o) != null && S !== x && i.reference[p] / 2 - (S < I ? O : z) - _[p] / 2 < 0, H = P ? S < I ? S - I : S - R : 0;
    return {
      [h]: f[h] + H,
      data: {
        [h]: x,
        centerOffset: S - x - H,
        ...P && {
          alignmentOffset: H
        }
      },
      reset: P
    };
  }
}), cm = function(e) {
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
        ...b
      } = Bo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = vr(o), v = ur(a), C = vr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), $ = f || (C || !_ ? [Ti(a)] : om(a)), M = p !== "none";
      !f && M && $.push(...sm(a, _, p, m));
      const E = [a, ...$], V = await kd(t, b), A = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(V[k]), d) {
        const x = rm(o, s, m);
        A.push(V[x[0]], V[x[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: A
      }], !A.every((x) => x <= 0)) {
        var z, I;
        const x = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, P = E[x];
        if (P) {
          var R;
          const N = d === "alignment" ? v !== ur(P) : !1, T = ((R = O[0]) == null ? void 0 : R.overflows[0]) > 0;
          if (!N || T)
            return {
              data: {
                index: x,
                overflows: O
              },
              reset: {
                placement: P
              }
            };
        }
        let H = (I = O.filter((N) => N.overflows[0] <= 0).sort((N, T) => N.overflows[1] - T.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!H)
          switch (h) {
            case "bestFit": {
              var S;
              const N = (S = O.filter((T) => {
                if (M) {
                  const L = ur(T.placement);
                  return L === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((L) => L > 0).reduce((L, q) => L + q, 0)]).sort((T, L) => T[1] - L[1])[0]) == null ? void 0 : S[0];
              N && (H = N);
              break;
            }
            case "initialPlacement":
              H = a;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
async function dm(e, t) {
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
const fm = function(e) {
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
      } = t, l = await dm(t, e);
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
}, gm = function(e) {
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
              x: k,
              y: v
            } = b;
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
      }, c = await kd(t, l), d = ur(vr(o)), f = Cd(d);
      let h = u[f], p = u[d];
      if (i) {
        const b = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = h + c[b], C = h - c[k];
        h = Xs(v, h, C);
      }
      if (s) {
        const b = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = p + c[b], C = p - c[k];
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
function es() {
  return typeof window < "u";
}
function Jr(e) {
  return Ed(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Ed(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ed(e) {
  return es() ? e instanceof Node || e instanceof Wt(e).Node : !1;
}
function dn(e) {
  return es() ? e instanceof Element || e instanceof Wt(e).Element : !1;
}
function kn(e) {
  return es() ? e instanceof HTMLElement || e instanceof Wt(e).HTMLElement : !1;
}
function Xl(e) {
  return !es() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Wt(e).ShadowRoot;
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
function hm(e) {
  return ["table", "td", "th"].includes(Jr(e));
}
function ts(e) {
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
function vm(e) {
  let t = Qn(e);
  for (; kn(t) && !Fr(t); ) {
    if (Ta(t))
      return t;
    if (ts(t))
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
function ns(e) {
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
function Sd(e) {
  const t = Qn(e);
  return Fr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Yo(t) ? t : Sd(t);
}
function Pd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Wt(o);
  return i ? (Ks(s), t.concat(s, s.visualViewport || [], Yo(o) ? o : [], [])) : t.concat(o, Pd(o, []));
}
function Ks(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Nd(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ni(n) !== i || Ni(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Td(e) {
  return dn(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = Td(e);
  if (!kn(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Nd(t);
  let s = (i ? Ni(n.width) : n.width) / r, a = (i ? Ni(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const pm = /* @__PURE__ */ wn(0);
function Md(e) {
  const t = Wt(e);
  return !Ma() || !t.visualViewport ? pm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function No(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Td(e);
  let s = wn(1);
  t && (r ? dn(r) && (s = Mr(r)) : s = Mr(e));
  const a = mm(i, n, r) ? Md(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Wt(i), h = r && dn(r) ? Wt(r) : r;
    let p = f, _ = Ks(p);
    for (; _ && r && h !== p; ) {
      const b = Mr(_), k = _.getBoundingClientRect(), v = fn(_), C = k.left + (_.clientLeft + parseFloat(v.paddingLeft)) * b.x, m = k.top + (_.clientTop + parseFloat(v.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += C, u += m, p = Wt(_), _ = Ks(p);
    }
  }
  return Mi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ha(e, t) {
  const n = ns(e).scrollLeft;
  return t ? t.left + n : No(zn(e)).left + n;
}
function Hd(e, t, n) {
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
function ym(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = zn(r), a = t ? ts(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = kn(r);
  if ((d || !d && !i) && ((Jr(r) !== "body" || Yo(s)) && (l = ns(r)), kn(r))) {
    const h = No(r);
    u = Mr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? Hd(s, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function wm(e) {
  return Array.from(e.getClientRects());
}
function _m(e) {
  const t = zn(e), n = ns(e), r = e.ownerDocument.body, o = Tr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Tr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ha(e);
  const a = -n.scrollTop;
  return fn(r).direction === "rtl" && (s += Tr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function xm(e, t) {
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
function bm(e, t) {
  const n = No(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Mr(e) : wn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = xm(e, n);
  else if (t === "document")
    r = _m(zn(e));
  else if (dn(t))
    r = bm(t, n);
  else {
    const o = Md(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Mi(r);
}
function Vd(e, t) {
  const n = Qn(e);
  return n === t || !dn(n) || Fr(n) ? !1 : fn(n).position === "fixed" || Vd(n, t);
}
function Cm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Pd(e, []).filter((a) => dn(a) && Jr(a) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; dn(s) && !Fr(s); ) {
    const a = fn(s), l = Ta(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yo(s) && !l && Vd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function $m(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ts(t) ? [] : Cm(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
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
function km(e) {
  const {
    width: t,
    height: n
  } = Nd(e);
  return {
    width: t,
    height: n
  };
}
function Em(e, t, n) {
  const r = kn(t), o = zn(t), i = n === "fixed", s = No(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  function u() {
    l.x = Ha(o);
  }
  if (r || !r && !i)
    if ((Jr(t) !== "body" || Yo(o)) && (a = ns(t)), r) {
      const h = No(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Hd(o, a) : wn(0), d = s.left + a.scrollLeft - l.x - c.x, f = s.top + a.scrollTop - l.y - c.y;
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
  if (!kn(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Dd(e, t) {
  const n = Wt(e);
  if (ts(e))
    return n;
  if (!kn(e)) {
    let o = Qn(e);
    for (; o && !Fr(o); ) {
      if (dn(o) && !bs(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Kl(e, t);
  for (; r && hm(r) && bs(r); )
    r = Kl(r, t);
  return r && Fr(r) && bs(r) && !Ta(r) ? n : r || vm(e) || n;
}
const Sm = async function(e) {
  const t = this.getOffsetParent || Dd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Em(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Pm(e) {
  return fn(e).direction === "rtl";
}
const Nm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ym,
  getDocumentElement: zn,
  getClippingRect: $m,
  getOffsetParent: Dd,
  getElementRects: Sm,
  getClientRects: wm,
  getDimensions: km,
  getScale: Mr,
  isElement: dn,
  isRTL: Pm
}, Tm = fm, Mm = gm, Hm = cm, Vm = um, Dm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return lm(e, t, {
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
    Dm(e, u, {
      placement: r,
      middleware: [
        Tm(o),
        // 手动偏移配置
        Hm(i),
        //自动翻转
        Mm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Vm({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: C, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: $, y: M } = m.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: M != null ? `${M}px` : "",
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
  function b(k) {
    u.contains(k.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, _);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, _);
      }), document.removeEventListener("click", b);
    },
    hide() {
      p();
    },
    isVisible() {
      return f;
    }
  };
};
var Om = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Qr(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  tn(() => (a = Am({
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
  var u = Om(), c = W(u), d = W(c);
  dr(d, n), Y(c), $n(c, (p) => i = p, () => i);
  var f = B(c, 2), h = W(f);
  return dr(h, r), Y(f), $n(f, (p) => s = p, () => s), Y(u), D(e, u), he({
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
ue(Qr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = Qe(), a = xe(s);
  return S1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Pe(() => c = Qt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Qe(), f = xe(d);
    dr(f, () => n() ?? vt), D(u, d);
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
ue(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Lm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Im = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function rs(e, t) {
  ge(t, !0), et(e, Im);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ue(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Lm();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
ue(rs, {}, [], [], !0);
const zm = () => {
  const e = Ke();
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
}, Rm = () => {
  const { nodes: e, nodeLookup: t } = Ke();
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
function pt() {
  return cr("svelteflow__node_id");
}
var Bm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), qm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Ym = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Fm = /* @__PURE__ */ ne('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Wm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Xm = /* @__PURE__ */ ne('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), Zm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Km = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), jm = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Gm = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function vn(e, t) {
  ge(t, !0), et(e, Gm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "allowSetting", 7, !0), d = w(t, "allowSettingOfCondition", 7, !0), f = w(t, "showSourceHandle", 7, !0), h = w(t, "showTargetHandle", 7, !0), p = w(t, "onCollapse", 7);
  let _ = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: k } = It(), v = /* @__PURE__ */ Ne(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: C } = zm(), { copyNode: m } = Rm(), $ = er(), M = () => {
    var T;
    (T = $.onNodeExecute) == null || T.call($, k(r()));
  };
  let E = pt();
  var V = jm(), A = xe(V);
  {
    var O = (T) => {
      wd(T, {
        get position() {
          return Me.Top;
        },
        align: "end",
        children: (L, q) => {
          var X = Km(), Z = W(X);
          {
            var Q = (_e) => {
              Ue(_e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Ce, se) => {
                  var oe = Bm();
                  D(Ce, oe);
                },
                $$slots: { default: !0 }
              });
            };
            we(Z, (_e) => {
              u() && _e(Q);
            });
          }
          var j = B(Z, 2);
          {
            var ce = (_e) => {
              Ue(_e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (Ce, se) => {
                  var oe = qm();
                  D(Ce, oe);
                },
                $$slots: { default: !0 }
              });
            };
            we(j, (_e) => {
              l() && _e(ce);
            });
          }
          var de = B(j, 2);
          {
            var ye = (_e) => {
              Ue(_e, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (Ce, se) => {
                  var oe = Ym();
                  D(Ce, oe);
                },
                $$slots: { default: !0 }
              });
            };
            we(de, (_e) => {
              a() && _e(ye);
            });
          }
          var re = B(de, 2);
          {
            var Te = (_e) => {
              Qr(_e, {
                placement: "bottom",
                floating: (se) => {
                  var oe = Xm(), ve = W(oe), G = B(W(ve));
                  mt(G, {
                    style: "width: 100%;",
                    onchange: (pe) => {
                      const Be = pe.target.value;
                      b(E, { title: Be });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(ve);
                  var Se = B(ve, 2), Ae = B(W(Se));
                  yt(Ae, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (pe) => {
                      const Be = pe.target.value;
                      b(E, { description: Be });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(Se);
                  var Oe = B(Se, 2);
                  {
                    var Je = (pe) => {
                      var Be = Fm(), ut = B(W(Be));
                      yt(ut, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (te) => {
                          const Le = te.target.value;
                          b(E, { condition: Le });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(Be), D(pe, Be);
                    };
                    we(Oe, (pe) => {
                      d() && pe(Je);
                    });
                  }
                  var ae = B(Oe, 2), le = B(W(ae), 2);
                  ar(le), le.__change = [Wm, b, E], Y(ae), Y(oe), Pe(() => M1(le, !!n().async)), D(se, oe);
                },
                children: (se, oe) => {
                  Ue(se, {
                    class: "tf-node-toolbar-item",
                    children: (ve, G) => {
                      var Se = Zm();
                      D(ve, Se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            we(re, (_e) => {
              c() && _e(Te);
            });
          }
          Y(X), D(L, X);
        },
        $$slots: { default: !0 }
      });
    };
    we(A, (T) => {
      (a() || l() || u()) && T(O);
    });
  }
  var z = B(A, 2), I = B(W(z), 2), R = W(I);
  bd(R, {
    get items() {
      return g(v);
    },
    activeKeys: _,
    onChange: (T, L) => {
      var q;
      b(r(), { expand: L == null ? void 0 : L.includes("key") }), (q = p()) == null || q(L != null && L.includes("key") ? "key" : "");
    }
  }), Y(I), Y(z);
  var S = B(z, 2);
  {
    var x = (T) => {
      Jn(T, {
        type: "target",
        get position() {
          return Me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    we(S, (T) => {
      h() && T(x);
    });
  }
  var P = B(S, 2);
  {
    var H = (T) => {
      Jn(T, {
        type: "source",
        get position() {
          return Me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    we(P, (T) => {
      f() && T(H);
    });
  }
  var N = B(P, 2);
  return dr(N, () => i() ?? vt), D(e, V), he({
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
      return d();
    },
    set allowSettingOfCondition(T = !0) {
      d(T), y();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(T = !0) {
      f(T), y();
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
ue(
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
const Ad = [
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
], Um = [
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
var Jm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Qm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ey = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  ge(t, !0), et(e, ty);
  const [n, r] = rt(), o = () => ee(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = pt(), l = /* @__PURE__ */ Ne(() => yr(a)), u = /* @__PURE__ */ Ne(() => {
    var A, O;
    return {
      ...i(),
      ...(O = (A = o()) == null ? void 0 : A.data) == null ? void 0 : O.parameters[s()]
    };
  });
  const { updateNodeData: c } = It(), d = (A, O) => {
    c(a, (z) => {
      let I = z.data.parameters;
      return I[s()][A] = O, { parameters: I };
    });
  }, f = (A) => {
    const O = A.target.value;
    d("name", O);
  }, h = (A) => {
    const O = A.target.checked;
    d("required", O);
  }, p = (A) => {
    const O = A.value;
    O && d("dataType", O);
  };
  let _;
  const b = () => {
    c(a, (A) => {
      let O = A.data.parameters;
      return O.splice(s(), 1), { parameters: [...O] };
    }), _ == null || _.hide();
  };
  var k = ey(), v = xe(k), C = W(v);
  mt(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Y(v);
  var m = B(v, 2), $ = W(m);
  _d($, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), Y(m);
  var M = B(m, 2), E = W(M);
  $n(
    Qr(E, {
      placement: "bottom",
      floating: (O) => {
        var z = Jm(), I = W(z), R = B(W(I));
        const S = /* @__PURE__ */ Ne(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        en(R, {
          items: Ad,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return g(S);
          }
        }), Y(I);
        var x = B(I, 2), P = B(W(x));
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
        }), Y(x);
        var H = B(x, 2), N = B(W(H));
        yt(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (q) => {
            const X = q.target.value;
            d("description", X);
          }
        }), Y(H);
        var T = B(H, 2), L = W(T);
        Ue(L, {
          onclick: b,
          children: (q, X) => {
            Ve();
            var Z = Ye("删除");
            D(q, Z);
          },
          $$slots: { default: !0 }
        }), Y(T), Y(z), D(O, z);
      },
      children: (O, z) => {
        Ue(O, {
          class: "input-btn-more",
          children: (I, R) => {
            var S = Qm();
            D(I, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => _ = O,
    () => _
  ), Y(M), D(e, k);
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
ue(Od, { parameter: {}, index: {} }, [], [], !0);
var ny = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ld(e, t) {
  ge(t, !0), et(e, iy);
  const [n, r] = rt(), o = () => ee(g(s), "$node", n);
  let i = pt(), s = /* @__PURE__ */ Ne(() => yr(i)), a = /* @__PURE__ */ Ne(() => {
    var f, h;
    return [...((h = (f = o()) == null ? void 0 : f.data) == null ? void 0 : h.parameters) || []];
  });
  var l = oy(), u = W(l);
  {
    var c = (f) => {
      var h = ny();
      Ve(4), D(f, h);
    };
    we(u, (f) => {
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
      Od(f, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var h = ry();
      D(f, h);
    }
  ), Y(l), D(e, l), he(), r();
}
ue(Ld, {}, [], [], !0);
const Hi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Wr()), Hi(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = It();
  return {
    addParameter: (t, n = "parameters", r) => {
      Hi(r == null ? void 0 : r.children);
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
var sy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ay = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Id(e, t) {
  ge(t, !0), et(e, uy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn();
  return vn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = sy();
      D(a, l);
    },
    children: (a, l) => {
      var u = ly(), c = xe(u), d = W(c);
      Ge(d, {
        level: 3,
        children: (p, _) => {
          Ve();
          var b = Ye("输入参数");
          D(p, b);
        },
        $$slots: { default: !0 }
      });
      var f = B(d, 2);
      Ue(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, _) => {
          var b = ay();
          D(p, b);
        },
        $$slots: { default: !0 }
      }), Y(c);
      var h = B(c, 2);
      Ld(h, {}), D(a, u);
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
ue(Id, { data: {} }, [], [], !0);
const zd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), zd(e, r.source, n));
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
}, cy = (e = !1) => {
  const t = pt(), n = yr(t), { nodes: r, edges: o } = Ke();
  return Zn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = jl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      zd(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = jl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var dy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const gy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ge(t, !0), et(e, gy);
  const [n, r] = rt(), o = () => ee(g(c), "$node", n), i = () => ee(C, "$selectItems", n);
  tn(() => {
    g(d).refType || b({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = pt(), c = /* @__PURE__ */ Ne(() => yr(u)), d = /* @__PURE__ */ Ne(() => {
    var x;
    return {
      ...s(),
      ...(x = o()) == null ? void 0 : x.data[l()][a()]
    };
  });
  const { updateNodeData: f } = It(), h = (x, P) => {
    f(u, (H) => {
      let N = H.data[l()];
      return N[a()] = { ...N[a()], [x]: P }, { [l()]: N };
    });
  }, p = (x, P) => {
    const H = P.target.value;
    h(x, H);
  }, _ = (x) => {
    const P = x.value;
    h("ref", P);
  }, b = (x) => {
    const P = x.value;
    h("refType", P);
  };
  let k;
  const v = () => {
    f(u, (x) => {
      let P = x.data[l()];
      return P.splice(a(), 1), { [l()]: [...P] };
    }), k == null || k.hide();
  }, C = cy();
  var m = fy(), $ = xe(m), M = W($);
  const E = /* @__PURE__ */ Ne(() => g(d).nameDisabled === !0);
  mt(M, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return g(E);
    },
    oninput: (x) => p("name", x)
  }), Y($);
  var V = B($, 2), A = W(V);
  {
    var O = (x) => {
      mt(x, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => p("value", P)
      });
    }, z = (x, P) => {
      {
        var H = (N) => {
          const T = /* @__PURE__ */ Ne(() => [g(d).ref]);
          en(N, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(T);
            },
            expandAll: !0,
            onSelect: _
          });
        };
        we(
          x,
          (N) => {
            g(d).refType !== "input" && N(H);
          },
          P
        );
      }
    };
    we(A, (x) => {
      g(d).refType === "fixed" ? x(O) : x(z, !1);
    });
  }
  Y(V);
  var I = B(V, 2), R = W(I);
  $n(
    Qr(R, {
      placement: "bottom",
      floating: (P) => {
        var H = dy(), N = W(H), T = B(W(N));
        const L = /* @__PURE__ */ Ne(() => g(d).refType ? [g(d).refType] : []);
        en(T, {
          items: Um,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: b
        }), Y(N);
        var q = B(N, 2), X = B(W(q));
        yt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            p("defaultValue", de);
          },
          get value() {
            return g(d).defaultValue;
          }
        }), Y(q);
        var Z = B(q, 2), Q = B(W(Z));
        yt(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            p("description", de);
          },
          get value() {
            return g(d).description;
          }
        }), Y(Z);
        var j = B(Z, 2), ce = W(j);
        Ue(ce, {
          onclick: v,
          children: (de, ye) => {
            Ve();
            var re = Ye("删除");
            D(de, re);
          },
          $$slots: { default: !0 }
        }), Y(j), Y(H), D(P, H);
      },
      children: (P, H) => {
        rs(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => k = P,
    () => k
  ), Y(I), D(e, m);
  var S = he({
    get parameter() {
      return s();
    },
    set parameter(x) {
      s(x), y();
    },
    get index() {
      return a();
    },
    set index(x) {
      a(x), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(x) {
      l(x), y();
    }
  });
  return r(), S;
}
ue(Rd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Yt(e, t) {
  ge(t, !0), et(e, my);
  const [n, r] = rt(), o = () => ee(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = pt(), l = /* @__PURE__ */ Ne(() => yr(a)), u = /* @__PURE__ */ Ne(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = py(), d = W(c);
  {
    var f = (_) => {
      var b = hy();
      Ve(4), D(_, b);
    };
    we(d, (_) => {
      g(u).length !== 0 && _(f);
    });
  }
  var h = B(d, 2);
  Mt(
    h,
    19,
    () => g(u),
    (_) => _.id,
    (_, b, k) => {
      Rd(_, {
        get parameter() {
          return g(b);
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
      var b = vy(), k = W(b, !0);
      Y(b), Pe(() => ft(k, i())), D(_, b);
    }
  ), Y(c), D(e, c);
  var p = he({
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
ue(Yt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), wy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _y = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const xy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Bd(e, t) {
  ge(t, !0), et(e, xy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn();
  return vn(e, lt(
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
        var l = yy();
        D(a, l);
      },
      children: (a, l) => {
        var u = _y(), c = xe(u), d = W(c);
        Ge(d, {
          level: 3,
          children: (p, _) => {
            Ve();
            var b = Ye("输出参数");
            D(p, b);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        Ue(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, _) => {
            var b = wy();
            D(p, b);
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
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ue(Bd, { data: {} }, [], [], !0);
const Cs = (e) => JSON.parse(JSON.stringify(e));
var by = /* @__PURE__ */ Ee('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), $y = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ky = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ey = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ge(t, !0), et(e, Ey);
  const [n, r] = rt(), o = () => ee(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = pt(), u = /* @__PURE__ */ Ne(() => yr(l)), c = /* @__PURE__ */ Ne(() => {
    var T;
    let H = (T = o()) == null ? void 0 : T.data[a()], N;
    if (H && s().length > 0) {
      let L = H;
      for (let q = 0; q < s().length; q++) {
        const X = s()[q];
        q == s().length - 1 ? N = L[X] : L = L[X].children;
      }
    }
    return { ...i(), ...N };
  });
  const { updateNodeData: d } = It(), f = (H, N) => {
    d(l, (T) => {
      const L = T.data[a()];
      if (L && s().length > 0) {
        let q = L;
        for (let X = 0; X < s().length; X++) {
          const Z = s()[X];
          X == s().length - 1 ? q[Z] = { ...q[Z], [H]: N } : q = q[Z].children;
        }
      }
      return {
        [a()]: [...Cs(L)]
      };
    });
  }, h = (H, N) => {
    const T = N.target.value;
    f(H, T);
  }, p = (H) => {
    const N = H.value;
    f("dataType", N);
  };
  let _;
  const b = () => {
    d(l, (H) => {
      let N = H.data[a()];
      if (N && s().length > 0) {
        let T = N;
        for (let L = 0; L < s().length; L++) {
          const q = s()[L];
          L == s().length - 1 ? T.splice(q, 1) : T = T[q].children;
        }
      }
      return {
        [a()]: [...Cs(N)]
      };
    }), _ == null || _.hide();
  }, k = () => {
    d(l, (H) => {
      let N = H.data[a()];
      if (N && s().length > 0) {
        let T = N;
        for (let L = 0; L < s().length; L++) {
          const q = s()[L];
          L == s().length - 1 ? T[q].children ? T[q].children.push({
            id: Wr(),
            name: "newParam",
            dataType: "String"
          }) : T[q].children = [
            {
              id: Wr(),
              name: "newParam",
              dataType: "String"
            }
          ] : T = T[q].children;
        }
      }
      return {
        [a()]: [...Cs(N)]
      };
    });
  };
  var v = ky(), C = xe(v), m = W(C);
  {
    var $ = (H) => {
      var N = Qe(), T = xe(N);
      Mt(T, 17, s, Lr, (L, q) => {
        Ve();
        var X = Ye(" ");
        D(L, X);
      }), D(H, N);
    };
    we(m, (H) => {
      s().length > 1 && H($);
    });
  }
  var M = B(m, 2);
  const E = /* @__PURE__ */ Ne(() => g(c).nameDisabled === !0);
  mt(M, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (H) => {
      h("name", H);
    },
    get disabled() {
      return g(E);
    }
  }), Y(C);
  var V = B(C, 2), A = W(V);
  const O = /* @__PURE__ */ Ne(() => g(c).dataType ? [g(c).dataType] : []), z = /* @__PURE__ */ Ne(() => g(c).dataTypeDisabled === !0);
  en(A, {
    items: Ad,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(O);
    },
    get disabled() {
      return g(z);
    },
    onSelect: p
  });
  var I = B(A, 2);
  {
    var R = (H) => {
      Ue(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (N, T) => {
          var L = by();
          D(N, L);
        },
        $$slots: { default: !0 }
      });
    };
    we(I, (H) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && H(R);
    });
  }
  Y(V);
  var S = B(V, 2), x = W(S);
  $n(
    Qr(x, {
      placement: "bottom",
      floating: (N) => {
        var T = $y(), L = W(T), q = B(W(L));
        const X = /* @__PURE__ */ Ne(() => g(c).defaultValue || "");
        yt(q, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(X);
          },
          onchange: (ye) => {
            h("defaultValue", ye);
          }
        }), Y(L);
        var Z = B(L, 2), Q = B(W(Z));
        const j = /* @__PURE__ */ Ne(() => g(c).description || "");
        yt(Q, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(j);
          },
          onchange: (ye) => {
            h("description", ye);
          }
        }), Y(Z);
        var ce = B(Z, 2);
        {
          var de = (ye) => {
            var re = Cy(), Te = W(re);
            Ue(Te, {
              onclick: b,
              children: (_e, Ce) => {
                Ve();
                var se = Ye("删除");
                D(_e, se);
              },
              $$slots: { default: !0 }
            }), Y(re), D(ye, re);
          };
          we(ce, (ye) => {
            g(c).deleteDisabled !== !0 && ye(de);
          });
        }
        Y(T), D(N, T);
      },
      children: (N, T) => {
        rs(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => _ = N,
    () => _
  ), Y(S), D(e, v);
  var P = he({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), y();
    },
    get position() {
      return s();
    },
    set position(H) {
      s(H), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(H) {
      a(H), y();
    }
  });
  return r(), P;
}
ue(qd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ ne("<!> <!>", 1), Py = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Ny = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ty = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const My = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  ge(t, !0), et(e, My);
  const [n, r] = rt(), o = () => ee(g(u), "$node", n), i = (b, k = vt, v = vt) => {
    var C = Qe(), m = xe(C);
    Mt(
      m,
      19,
      k,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, M, E) => {
        var V = Sy(), A = xe(V);
        const O = /* @__PURE__ */ Ne(() => [...v(), g(E)]);
        qd(A, {
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
        var z = B(A, 2);
        {
          var I = (R) => {
            var S = /* @__PURE__ */ be(() => [...v(), g(E)]);
            i(R, () => g(M).children, () => g(S));
          };
          we(z, (R) => {
            g(M).children && R(I);
          });
        }
        D($, V);
      },
      ($) => {
        var M = Qe(), E = xe(M);
        {
          var V = (A) => {
            var O = Py(), z = W(O, !0);
            Y(O), Pe(() => ft(z, s())), D(A, O);
          };
          we(E, (A) => {
            v().length === 0 && A(V);
          });
        }
        D($, M);
      }
    ), D(b, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = pt(), u = /* @__PURE__ */ Ne(() => yr(l)), c = /* @__PURE__ */ Ne(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var d = Ty(), f = W(d);
  {
    var h = (b) => {
      var k = Ny();
      Ve(4), D(b, k);
    };
    we(f, (b) => {
      g(c).length !== 0 && b(h);
    });
  }
  var p = B(f, 2);
  i(p, () => g(c) || [], () => []), Y(d), D(e, d);
  var _ = he({
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
ue(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Hy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Vy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ay = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Oy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ly = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const zy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Yd(e, t) {
  ge(t, !0), et(e, zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn(), s = er();
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
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Hy();
        D(d, f);
      },
      children: (d, f) => {
        var h = Iy(), p = xe(h), _ = W(p);
        Ge(_, {
          level: 3,
          children: (ve, G) => {
            Ve();
            var Se = Ye("输入参数");
            D(ve, Se);
          },
          $$slots: { default: !0 }
        });
        var b = B(_, 2);
        Ue(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ve, G) => {
            var Se = Vy();
            D(ve, Se);
          },
          $$slots: { default: !0 }
        }), Y(p);
        var k = B(p, 2);
        Yt(k, {});
        var v = B(k, 2);
        Ge(v, {
          level: 3,
          mt: "10px",
          children: (ve, G) => {
            Ve();
            var Se = Ye("模型设置");
            D(ve, Se);
          },
          $$slots: { default: !0 }
        });
        var C = B(v, 4), m = W(C);
        const $ = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        en(m, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ve) => {
            const G = ve.value;
            l(o, () => ({ llmId: G }));
          },
          get value() {
            return g($);
          }
        });
        var M = B(m, 2);
        rs(M, {}), Y(C);
        var E = B(C, 4), V = W(E), A = W(V), O = W(A);
        Y(A);
        var z = B(A, 2);
        ar(z), z.__input = [Dy, l, o], Y(V), Y(E);
        var I = B(E, 2), R = W(I), S = W(R), x = W(S);
        Y(S);
        var P = B(S, 2);
        ar(P), P.__input = [Ay, l, o], Y(R), Y(I);
        var H = B(I, 2), N = W(H), T = W(N), L = W(T);
        Y(T);
        var q = B(T, 2);
        ar(q), q.__input = [Oy, l, o], Y(N), Y(H);
        var X = B(H, 4), Z = W(X);
        const Q = /* @__PURE__ */ Ne(() => n().systemPrompt || "");
        yt(Z, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(Q);
          },
          oninput: (ve) => {
            l(o, { systemPrompt: ve.target.value });
          }
        }), Y(X);
        var j = B(X, 4), ce = W(j);
        const de = /* @__PURE__ */ Ne(() => n().userPrompt || "");
        yt(ce, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(de);
          },
          oninput: (ve) => {
            l(o, { userPrompt: ve.target.value });
          }
        }), Y(j);
        var ye = B(j, 2), re = W(ye);
        Ge(re, {
          level: 3,
          mt: "10px",
          children: (ve, G) => {
            Ve();
            var Se = Ye("输出参数");
            D(ve, Se);
          },
          $$slots: { default: !0 }
        });
        var Te = B(re, 2);
        const _e = /* @__PURE__ */ Ne(() => n().outType ? [n().outType] : []);
        en(Te, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ve) => {
            u(ve.value);
          },
          get value() {
            return g(_e);
          }
        });
        var Ce = B(Te, 2);
        {
          var se = (ve) => {
            Ue(ve, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (G, Se) => {
                var Ae = Ly();
                D(G, Ae);
              },
              $$slots: { default: !0 }
            });
          };
          we(Ce, (ve) => {
            n().outType === "json" && ve(se);
          });
        }
        Y(ye);
        var oe = B(ye, 2);
        Rn(oe, {}), Pe(() => {
          ft(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), cs(z, n().temperature ?? 0.5), ft(x, `Top P: ${n().topP ?? 0.9 ?? ""}`), cs(P, n().topP ?? 0.9), ft(L, `Top K: ${n().topK ?? 50 ?? ""}`), cs(q, n().topK ?? 50);
        }), D(d, h);
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
Ur(["input"]);
ue(Yd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), By = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fd(e, t) {
  ge(t, !0), et(e, Fy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  tn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = pt(), { addParameter: i } = Pn(), { updateNodeData: s } = It(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ry();
        D(u, c);
      },
      children: (u, c) => {
        var d = Yy(), f = xe(d), h = W(f);
        Ge(h, {
          level: 3,
          children: (z, I) => {
            Ve();
            var R = Ye("输入参数");
            D(z, R);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ue(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, I) => {
            var R = By();
            D(z, R);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var _ = B(f, 2);
        Yt(_, {});
        var b = B(_, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ve();
            var R = Ye("代码");
            D(z, R);
          },
          $$slots: { default: !0 }
        });
        var k = B(b, 4), v = W(k);
        const C = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        en(v, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const I = z.value;
            s(o, () => ({ engine: I }));
          },
          get value() {
            return g(C);
          }
        }), Y(k);
        var m = B(k, 4), $ = W(m);
        const M = /* @__PURE__ */ Ne(() => n().code || "");
        yt($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            s(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(M);
          }
        }), Y(m);
        var E = B(m, 2), V = W(E);
        Ge(V, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Ve();
            var R = Ye("输出参数");
            D(z, R);
          },
          $$slots: { default: !0 }
        });
        var A = B(V, 2);
        Ue(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, I) => {
            var R = qy();
            D(z, R);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var O = B(E, 2);
        Rn(O, {}), D(u, d);
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
ue(Fd, { data: {} }, [], [], !0);
var Wy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Xy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  ge(t, !0), et(e, Ky);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn(), { updateNodeData: s } = It();
  return ln(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Wy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = xe(c), f = W(d);
        Ge(f, {
          level: 3,
          children: (M, E) => {
            Ve();
            var V = Ye("输入参数");
            D(M, V);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        Ue(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, E) => {
            var V = Xy();
            D(M, V);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = B(d, 2);
        Yt(p, {});
        var _ = B(p, 2);
        Ge(_, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (M, E) => {
            Ve();
            var V = Ye("模板内容");
            D(M, V);
          },
          $$slots: { default: !0 }
        });
        var b = B(_, 2), k = W(b);
        const v = /* @__PURE__ */ Ne(() => n().template || "");
        yt(k, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (M) => {
            s(o, () => ({ template: M.target.value }));
          },
          get value() {
            return g(v);
          }
        }), Y(b);
        var C = B(b, 2), m = W(C);
        Ge(m, {
          level: 3,
          mt: "10px",
          children: (M, E) => {
            Ve();
            var V = Ye("输出参数");
            D(M, V);
          },
          $$slots: { default: !0 }
        }), Y(C);
        var $ = B(C, 2);
        Rn($, {}), D(l, c);
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
ue(Wd, { data: {} }, [], [], !0);
var jy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Gy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ew = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), nw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), rw = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), ow = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ne('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const sw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Xd(e, t) {
  ge(t, !0), et(e, sw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
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
  ], i = pt(), { addParameter: s } = Pn(), { updateNodeData: a } = It();
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = jy();
        D(u, c);
      },
      children: (u, c) => {
        var d = iw(), f = xe(d), h = W(f);
        Ge(h, {
          level: 3,
          children: (ae, le) => {
            Ve();
            var pe = Ye("输入参数");
            D(ae, pe);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        Ue(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (ae, le) => {
            var pe = Gy();
            D(ae, pe);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var _ = B(f, 2);
        Yt(_, {});
        var b = B(_, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (ae, le) => {
            Ve();
            var pe = Ye("URL 地址");
            D(ae, pe);
          },
          $$slots: { default: !0 }
        });
        var k = B(b, 2), v = W(k), C = W(v);
        const m = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        en(C, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const le = ae.value;
            a(i, () => ({ method: le }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var $ = B(v, 2), M = W($);
        const E = /* @__PURE__ */ Ne(() => n().url || "");
        mt(M, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            a(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return g(E);
          }
        }), Y($), Y(k);
        var V = B(k, 2), A = W(V);
        Ge(A, {
          level: 3,
          children: (ae, le) => {
            Ve();
            var pe = Ye("Http 头信息");
            D(ae, pe);
          },
          $$slots: { default: !0 }
        });
        var O = B(A, 2);
        Ue(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ae, le) => {
            var pe = Uy();
            D(ae, pe);
          },
          $$slots: { default: !0 }
        }), Y(V);
        var z = B(V, 2);
        Yt(z, { dataKeyName: "headers" });
        var I = B(z, 2);
        Ge(I, {
          level: 3,
          mt: "10px",
          children: (ae, le) => {
            Ve();
            var pe = Ye("Body");
            D(ae, pe);
          },
          $$slots: { default: !0 }
        });
        var R = B(I, 2), S = W(R), x = W(S);
        const P = /* @__PURE__ */ Ne(() => !n().bodyType);
        mt(x, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(P);
          },
          onchange: (ae) => {
            var le;
            (le = ae.target) != null && le.checked && a(i, { bodyType: "" });
          }
        }), Ve(), Y(S);
        var H = B(S, 2), N = W(H);
        const T = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        mt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(T);
          },
          onchange: (ae) => {
            var le;
            (le = ae.target) != null && le.checked && a(i, { bodyType: "form-data" });
          }
        }), Ve(), Y(H);
        var L = B(H, 2), q = W(L);
        const X = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        mt(q, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(X);
          },
          onchange: (ae) => {
            var le;
            (le = ae.target) != null && le.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ve(), Y(L);
        var Z = B(L, 2), Q = W(Z);
        const j = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        mt(Q, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(j);
          },
          onchange: (ae) => {
            var le;
            (le = ae.target) != null && le.checked && a(i, { bodyType: "json" });
          }
        }), Ve(), Y(Z);
        var ce = B(Z, 2), de = W(ce);
        const ye = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        mt(de, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ye);
          },
          onchange: (ae) => {
            var le;
            (le = ae.target) != null && le.checked && a(i, { bodyType: "raw" });
          }
        }), Ve(), Y(ce), Y(R);
        var re = B(R, 2);
        {
          var Te = (ae) => {
            var le = Qy(), pe = xe(le), Be = W(pe);
            Ge(Be, {
              level: 3,
              children: (Le, fe) => {
                Ve();
                var dt = Ye("参数");
                D(Le, dt);
              },
              $$slots: { default: !0 }
            });
            var ut = B(Be, 2);
            Ue(ut, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Le, fe) => {
                var dt = Jy();
                D(Le, dt);
              },
              $$slots: { default: !0 }
            }), Y(pe);
            var te = B(pe, 2);
            Yt(te, { dataKeyName: "formData" }), D(ae, le);
          };
          we(re, (ae) => {
            n().bodyType === "form-data" && ae(Te);
          });
        }
        var _e = B(re, 2);
        {
          var Ce = (ae) => {
            var le = tw(), pe = xe(le), Be = W(pe);
            Ge(Be, {
              level: 3,
              children: (Le, fe) => {
                Ve();
                var dt = Ye("Body 参数");
                D(Le, dt);
              },
              $$slots: { default: !0 }
            });
            var ut = B(Be, 2);
            Ue(ut, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Le, fe) => {
                var dt = ew();
                D(Le, dt);
              },
              $$slots: { default: !0 }
            }), Y(pe);
            var te = B(pe, 2);
            Yt(te, { dataKeyName: "formUrlencoded" }), D(ae, le);
          };
          we(_e, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(Ce);
          });
        }
        var se = B(_e, 2);
        {
          var oe = (ae) => {
            var le = nw(), pe = W(le);
            yt(pe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Be) => {
                a(i, { bodyJson: Be.target.value });
              }
            }), Y(le), D(ae, le);
          };
          we(se, (ae) => {
            n().bodyType === "json" && ae(oe);
          });
        }
        var ve = B(se, 2);
        {
          var G = (ae) => {
            var le = rw(), pe = W(le);
            yt(pe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Be) => {
                a(i, { bodyRaw: Be.target.value });
              }
            }), Y(le), D(ae, le);
          };
          we(ve, (ae) => {
            n().bodyType === "raw" && ae(G);
          });
        }
        var Se = B(ve, 2), Ae = W(Se);
        Ge(Ae, {
          level: 3,
          mt: "10px",
          children: (ae, le) => {
            Ve();
            var pe = Ye("输出参数");
            D(ae, pe);
          },
          $$slots: { default: !0 }
        });
        var Oe = B(Ae, 2);
        Ue(Oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ae, le) => {
            var pe = ow();
            D(ae, pe);
          },
          $$slots: { default: !0 }
        }), Y(Se);
        var Je = B(Se, 2);
        Rn(Je, {}), D(u, d);
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
ue(Xd, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), lw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ge(t, !0), et(e, cw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn(), s = er();
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
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = aw();
        D(c, d);
      },
      children: (c, d) => {
        var f = uw(), h = xe(f), p = W(h);
        Ge(p, {
          level: 3,
          children: (R, S) => {
            Ve();
            var x = Ye("输入参数");
            D(R, x);
          },
          $$slots: { default: !0 }
        });
        var _ = B(p, 2);
        Ue(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, S) => {
            var x = lw();
            D(R, x);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var b = B(h, 2);
        Yt(b, {});
        var k = B(b, 2);
        Ge(k, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ve();
            var x = Ye("知识库设置");
            D(R, x);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), C = W(v);
        const m = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        en(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (R) => {
            const S = R.value;
            l(o, () => ({ knowledgeId: S }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var $ = B(v, 4), M = W($);
        mt(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const S = R.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Y($);
        var E = B($, 4), V = W(E);
        const A = /* @__PURE__ */ Ne(() => n().limit || "");
        mt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (R) => {
            const S = R.target.value;
            l(o, () => ({ limit: S }));
          },
          get value() {
            return g(A);
          }
        }), Y(E);
        var O = B(E, 2), z = W(O);
        Ge(z, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ve();
            var x = Ye("输出参数");
            D(R, x);
          },
          $$slots: { default: !0 }
        }), Y(O);
        var I = B(O, 2);
        Rn(I, {}), D(c, f);
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
ue(Zd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), fw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ge(t, !0), et(e, hw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn(), s = er();
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
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = dw();
        D(c, d);
      },
      children: (c, d) => {
        var f = gw(), h = xe(f), p = W(h);
        Ge(p, {
          level: 3,
          children: (I, R) => {
            Ve();
            var S = Ye("输入参数");
            D(I, S);
          },
          $$slots: { default: !0 }
        });
        var _ = B(p, 2);
        Ue(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, R) => {
            var S = fw();
            D(I, S);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var b = B(h, 2);
        Yt(b, {});
        var k = B(b, 2);
        Ge(k, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Ve();
            var S = Ye("搜索引擎设置");
            D(I, S);
          },
          $$slots: { default: !0 }
        });
        var v = B(k, 4), C = W(v);
        const m = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : []);
        en(C, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const R = I.value;
            l(o, () => ({ engine: R }));
          },
          get value() {
            return g(m);
          }
        }), Y(v);
        var $ = B(v, 4), M = W($);
        mt(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const R = I.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), Y($);
        var E = B($, 4), V = W(E);
        mt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const R = I.target.value;
            l(o, () => ({ limit: R }));
          }
        }), Y(E);
        var A = B(E, 2), O = W(A);
        Ge(O, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Ve();
            var S = Ye("输出参数");
            D(I, S);
          },
          $$slots: { default: !0 }
        }), Y(A);
        var z = B(A, 2);
        Rn(z, {}), D(c, f);
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
ue(Kd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), pw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const yw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function jd(e, t) {
  ge(t, !0), et(e, yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn();
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = vw();
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
        var c = mw(), d = xe(c), f = W(d);
        Ge(f, {
          level: 3,
          children: (v, C) => {
            Ve();
            var m = Ye("循环变量");
            D(v, m);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        Ue(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (v, C) => {
            var m = pw();
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = B(d, 2);
        Yt(p, {});
        var _ = B(p, 2), b = W(_);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (v, C) => {
            Ve();
            var m = Ye("输出参数");
            D(v, m);
          },
          $$slots: { default: !0 }
        }), Y(_);
        var k = B(_, 2);
        Rn(k, {}), D(l, c);
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
ue(jd, { data: {} }, [], [], !0);
const ww = {
  startNode: Id,
  codeNode: Fd,
  llmNode: Yd,
  templateNode: Wd,
  httpNode: Xd,
  knowledgeNode: Zd,
  searchEngineNode: Kd,
  loopNode: jd,
  endNode: Bd
};
var _w = /* @__PURE__ */ ne("<!> ", 1);
function js(e, t) {
  ge(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Ue(e, {
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
      var c = _w(), d = xe(c);
      fa(d, n);
      var f = B(d);
      Pe(() => ft(f, ` ${r() ?? ""}`)), D(l, c);
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
ue(
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
var xw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), bw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Cw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Gd(e, t) {
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
  var u = Cw(), c = W(u), d = W(c), f = W(d);
  xd(f, {
    style: "width: 100%",
    items: i,
    onChange: (k) => {
      U(n, k.value.toString(), !0);
    }
  }), Y(d);
  var h = B(d, 2), p = W(h);
  Mt(p, 21, () => o, Lr, (k, v) => {
    js(k, lt(() => g(v)));
  }), Y(p);
  var _ = B(p, 2);
  Mt(_, 21, () => s, Lr, (k, v) => {
    js(k, lt(() => g(v)));
  }), Y(_), Y(h), Y(c);
  var b = B(c, 2);
  Ue(b, {
    onclick: () => {
      U(r, g(r) ? "" : "show", !0);
    },
    children: (k, v) => {
      var C = Qe(), m = xe(C);
      {
        var $ = (E) => {
          var V = xw();
          D(E, V);
        }, M = (E) => {
          var V = bw();
          D(E, V);
        };
        we(m, (E) => {
          g(r) === "show" ? E($) : E(M, !1);
        });
      }
      D(k, C);
    },
    $$slots: { default: !0 }
  }), Y(u), Pe(() => {
    bt(u, 1, `tf-toolbar ${g(r) ?? ""}`), gt(p, `display: ${g(n) === "base" ? "flex" : "none"}`), gt(_, `display: ${g(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), he();
}
ue(Gd, {}, [], [], !0);
const $w = () => {
  const { nodeLookup: e } = Ke();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, kw = () => {
  const { nodes: e } = Ke();
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
}, Ew = () => {
  const { edges: e } = Ke();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var Sw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Nw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Tw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Mw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Hw = /* @__PURE__ */ ne('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ ne('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const Ow = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  var _;
  ge(t, !0), et(e, Ow);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = pt(), { addParameter: i } = Pn(), s = It(), { updateNodeData: a } = s, l = { ...r, id: o, data: n() }, u = document.createElement("div"), d = er().customNodes[t.type];
  (_ = d.render) == null || _.call(d, u, l, s);
  const f = d.forms;
  let h;
  ln(() => {
    n().expand && h && h.append(u);
  }), ln(() => {
    var b;
    n() && ((b = d.onUpdate) == null || b.call(d, u, { ...l, data: n() }));
  }), ln(() => {
    !n().parameters && d.parameters && a(o, {
      parameters: Hi(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), ln(() => {
    !n().outputDefs && d.outputDefs && a(o, {
      outputDefs: Hi(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const p = /* @__PURE__ */ Ne(() => ({
    ...n(),
    description: d.description
  }));
  return vn(e, lt(
    {
      get data() {
        return g(p);
      }
    },
    () => r,
    {
      icon: (k) => {
        var v = Qe(), C = xe(v);
        fa(C, () => d.icon), D(k, v);
      },
      children: (k, v) => {
        var C = Aw(), m = xe(C);
        {
          var $ = (z) => {
            var I = Pw(), R = xe(I), S = W(R);
            Ge(S, {
              level: 3,
              children: (N, T) => {
                Ve();
                var L = Ye("输入参数");
                D(N, L);
              },
              $$slots: { default: !0 }
            });
            var x = B(S, 2);
            {
              var P = (N) => {
                Ue(N, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (T, L) => {
                    var q = Sw();
                    D(T, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              we(x, (N) => {
                d.parametersAddEnable !== !1 && N(P);
              });
            }
            Y(R);
            var H = B(R, 2);
            Yt(H, {}), D(z, I);
          };
          we(m, (z) => {
            d.parametersEnable !== !1 && z($);
          });
        }
        var M = B(m, 2);
        {
          var E = (z) => {
            var I = Qe(), R = xe(I);
            Mt(R, 17, () => f, Lr, (S, x) => {
              var P = Qe(), H = xe(P);
              {
                var N = (L) => {
                  var q = Nw(), X = xe(q), Z = W(X, !0);
                  Y(X);
                  var Q = B(X, 2), j = W(Q);
                  const ce = /* @__PURE__ */ Ne(() => n()[g(x).name] || g(x).defaultValue);
                  mt(j, lt(
                    {
                      get placeholder() {
                        return g(x).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return g(ce);
                      }
                    },
                    () => g(x).attrs,
                    {
                      onchange: (de) => {
                        a(o, { [g(x).name]: de.target.value });
                      }
                    }
                  )), Y(Q), Pe(() => ft(Z, g(x).label)), D(L, q);
                }, T = (L, q) => {
                  {
                    var X = (Q) => {
                      var j = Tw(), ce = xe(j), de = W(ce, !0);
                      Y(ce);
                      var ye = B(ce, 2), re = W(ye);
                      const Te = /* @__PURE__ */ Ne(() => n()[g(x).name] || g(x).defaultValue);
                      yt(re, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return g(x).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return g(Te);
                          }
                        },
                        () => g(x).attrs,
                        {
                          onchange: (_e) => {
                            a(o, { [g(x).name]: _e.target.value });
                          }
                        }
                      )), Y(ye), Pe(() => ft(de, g(x).label)), D(Q, j);
                    }, Z = (Q, j) => {
                      {
                        var ce = (ye) => {
                          var re = Mw(), Te = xe(re), _e = W(Te, !0);
                          Y(Te);
                          var Ce = B(Te, 2), se = W(Ce), oe = W(se), ve = W(oe);
                          Y(oe);
                          var G = B(oe, 2);
                          ar(G);
                          var Se = (Oe) => a(o, {
                            [g(x).name]: parseFloat(Oe.target.value)
                          });
                          let Ae;
                          Y(se), Y(Ce), Pe(() => {
                            ft(_e, g(x).label), ft(ve, `${g(x).description ?? ""}: ${n()[g(x).name] ?? g(x).defaultValue ?? ""}`), Ae = Qt(
                              G,
                              Ae,
                              {
                                class: "nodrag",
                                type: "range",
                                ...g(x).attrs,
                                value: n()[g(x).name] ?? g(x).defaultValue,
                                oninput: Se
                              },
                              "svelte-q0cqsa"
                            );
                          }), D(ye, re);
                        }, de = (ye, re) => {
                          {
                            var Te = (Ce) => {
                              var se = Hw(), oe = xe(se), ve = W(oe, !0);
                              Y(oe);
                              var G = B(oe, 2), Se = W(G);
                              const Ae = /* @__PURE__ */ Ne(() => g(x).options || []), Oe = /* @__PURE__ */ Ne(() => n()[g(x).name] ? [n()[g(x).name]] : [g(x).defaultValue]);
                              en(Se, {
                                get items() {
                                  return g(Ae);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return g(x).placeholder;
                                },
                                onSelect: (Je) => {
                                  const ae = Je.value;
                                  a(o, () => ({ [g(x).name]: ae }));
                                },
                                get value() {
                                  return g(Oe);
                                }
                              }), Y(G), Pe(() => ft(ve, g(x).label)), D(Ce, se);
                            }, _e = (Ce, se) => {
                              {
                                var oe = (ve) => {
                                  Ge(ve, lt({ level: 3, mt: "10px" }, () => g(x).attrs, {
                                    children: (G, Se) => {
                                      Ve();
                                      var Ae = Ye();
                                      Pe(() => ft(Ae, g(x).label)), D(G, Ae);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                we(
                                  Ce,
                                  (ve) => {
                                    g(x).type === "heading" && ve(oe);
                                  },
                                  se
                                );
                              }
                            };
                            we(
                              ye,
                              (Ce) => {
                                g(x).type === "select" ? Ce(Te) : Ce(_e, !1);
                              },
                              re
                            );
                          }
                        };
                        we(
                          Q,
                          (ye) => {
                            g(x).type === "slider" ? ye(ce) : ye(de, !1);
                          },
                          j
                        );
                      }
                    };
                    we(
                      L,
                      (Q) => {
                        g(x).type === "textarea" ? Q(X) : Q(Z, !1);
                      },
                      q
                    );
                  }
                };
                we(H, (L) => {
                  g(x).type === "input" ? L(N) : L(T, !1);
                });
              }
              D(S, P);
            }), D(z, I);
          };
          we(M, (z) => {
            f && z(E);
          });
        }
        var V = B(M, 2);
        $n(V, (z) => h = z, () => h);
        var A = B(V, 2);
        {
          var O = (z) => {
            var I = Dw(), R = xe(I), S = W(R);
            Ge(S, {
              level: 3,
              mt: "10px",
              children: (N, T) => {
                Ve();
                var L = Ye("输出参数");
                D(N, L);
              },
              $$slots: { default: !0 }
            });
            var x = B(S, 2);
            {
              var P = (N) => {
                Ue(N, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (T, L) => {
                    var q = Vw();
                    D(T, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              we(x, (N) => {
                d.outputDefsAddEnable !== !1 && N(P);
              });
            }
            Y(R);
            var H = B(R, 2);
            Rn(H, {}), D(z, I);
          };
          we(A, (z) => {
            d.outputDefsEnable !== !1 && z(O);
          });
        }
        Pe(() => {
          gt(V, d.rootStyle || ""), bt(V, 1, gn(d.rootClass), "svelte-q0cqsa");
        }), D(k, C);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(b) {
      n(b), y();
    }
  });
}
ue(Ud, { data: {} }, [], [], !0);
const Lw = () => {
  const e = Ke();
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
var Iw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), zw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), Rw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Jd(e, t) {
  ge(t, !0), et(e, Bw);
  const [n, r] = rt(), o = () => ee(V, "$nodes", n), i = () => ee(A, "$edges", n), s = () => ee(O, "$viewport", n), a = w(t, "onInit", 7), l = It();
  a()(l);
  let u = /* @__PURE__ */ St(!1), c = /* @__PURE__ */ St(void 0);
  const { updateEdgeData: d } = Lw(), f = (N) => {
    N.preventDefault(), N.dataTransfer && (N.dataTransfer.dropEffect = "move");
  }, h = (N) => {
    var Z;
    N.preventDefault();
    const T = l.screenToFlowPosition({
      x: N.clientX - 250,
      y: N.clientY - 100
    }), L = (Z = N.dataTransfer) == null ? void 0 : Z.getData("application/tinyflow"), q = L ? JSON.parse(L) : {}, X = {
      id: `node_${Wr()}`,
      position: T,
      data: {},
      ...q
    };
    si.addNode(X), si.selectNodeOnly(X.id);
  }, { getNode: p } = $w(), _ = (N) => {
    const T = p(N.source), L = p(N.target);
    if (N.sourceHandle === "loop_handle" || T.parentId) {
      const q = l.getEdges();
      for (let X of q)
        if (X.target === N.target) {
          const Z = p(X.source);
          if (N.sourceHandle === "loop_handle" && Z.parentId !== T.id || T.parentId && Z.parentId !== T.parentId)
            return !1;
        }
    }
    return !(!T.parentId && L.parentId && L.parentId !== T.id);
  }, { ensureParentInNodesBefore: b } = kw(), k = (N, T) => {
    if (!T.isValid)
      return;
    const L = T.toNode;
    if (L.parentId)
      return;
    const q = T.fromNode, X = T.fromHandle, Z = { position: { ...L.position } };
    if (X.id === "loop_handle" ? Z.parentId = q.id : q.parentId && (Z.parentId = q.parentId), Z.parentId) {
      const Q = p(Z.parentId);
      Z.position = {
        x: L.position.x - Q.position.x,
        y: L.position.y - Q.position.y
      }, b(Z.parentId, L.id), l.updateNode(L.id, Z);
    }
  }, { getEdgesByTarget: v } = Ew(), C = (N) => {
    N.edges.forEach((L) => {
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
          let Q = !1;
          for (let j = 0; j < X.length; j++) {
            const ce = X[j], de = p(ce.source);
            if (de.parentId || de.type === "loopNode") {
              Q = !0;
              break;
            }
          }
          Q || l.updateNode(q.id, {
            parentId: void 0,
            position: {
              x: q.position.x + Z.position.x,
              y: q.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, m = (N, T) => {
  }, $ = (N) => {
  }, M = {}, E = er().customNodes;
  if (E)
    for (let N of Object.keys(E))
      M[N] = Ud;
  const { nodes: V, edges: A, viewport: O } = Ke(), z = er().onDataChange;
  z && (V.subscribe(() => {
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
  }), O.subscribe(() => {
    z(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var I = Rw(), R = W(I);
  const S = /* @__PURE__ */ Ne(() => ({ ...ww, ...M })), x = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ko.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  sd(R, lt(
    {
      get nodeTypes() {
        return g(S);
      }
    },
    si,
    {
      class: "tinyflow-logo",
      isValidConnection: _,
      onconnectend: k,
      onconnectstart: m,
      onconnect: $,
      connectionRadius: 50,
      ondelete: C,
      onclick: (N) => {
        const T = N.target;
        T.classList.contains("svelte-flow__edge-interaction") || T.classList.contains("panel-content") || T.closest(".panel-content") || (U(u, !1), U(c, null));
      },
      get defaultEdgeOptions() {
        return g(x);
      },
      $$events: {
        drop: h,
        dragover: f,
        edgeclick: (N) => {
          U(u, !0), U(c, N.detail.edge, !0);
        }
      },
      children: (N, T) => {
        var L = zw(), q = xe(L);
        pd(q, {});
        var X = B(q, 2);
        gd(X, {});
        var Z = B(X, 2);
        yd(Z, {});
        var Q = B(Z, 2);
        {
          var j = (ce) => {
            Ro(ce, {
              children: (de, ye) => {
                var re = Iw(), Te = B(W(re), 4), _e = W(Te);
                const Ce = /* @__PURE__ */ Ne(() => {
                  var se, oe;
                  return (oe = (se = g(c)) == null ? void 0 : se.data) == null ? void 0 : oe.condition;
                });
                yt(_e, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(Ce);
                  },
                  onchange: (se) => {
                    g(c) && d(g(c).id, { condition: se.target.value });
                  }
                }), Y(Te), Y(re), D(de, re);
              },
              $$slots: { default: !0 }
            });
          };
          we(Q, (ce) => {
            g(u) && ce(j);
          });
        }
        D(N, L);
      },
      $$slots: { default: !0 }
    }
  ));
  var P = B(R, 2);
  Gd(P, {}), Y(I), D(e, I);
  var H = he({
    get onInit() {
      return a();
    },
    set onInit(N) {
      a(N), y();
    }
  });
  return r(), H;
}
ue(Jd, { onInit: {} }, [], [], !0);
function qw(e, t) {
  ge(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return si.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Or("tinyflow_options", n()), ad(e, {
    fitView: !0,
    children: (i, s) => {
      Jd(i, {
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
customElements.define("tinyflow-component", ue(qw, { options: {}, onInit: {} }, [], [], !1));
export {
  Kw as Tinyflow
};
//# sourceMappingURL=index.js.map
