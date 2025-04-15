import { defineComponent as uf, ref as cf, onMounted as df, onUnmounted as ff, createElementBlock as vf, openBlock as gf, normalizeStyle as hf, normalizeClass as pf } from "vue";
var mf = Object.defineProperty, ql = (e) => {
  throw TypeError(e);
}, yf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ht = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n), Ia = (e, t, n) => t.has(e) || ql("Cannot " + n), lt = (e, t, n) => (Ia(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? ql("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ri = (e, t, n, r) => (Ia(e, t, "write to private field"), t.set(e, n), n), wf = (e, t, n) => (Ia(e, t, "access private method"), n);
const bf = "5";
var zs;
typeof window < "u" && ((zs = window.__svelte ?? (window.__svelte = {})).v ?? (zs.v = /* @__PURE__ */ new Set())).add(bf);
let Rr = !1, xf = !1;
function $f() {
  Rr = !0;
}
$f();
const Za = 1, Ra = 2, Xl = 4, Cf = 8, _f = 16, kf = 1, Sf = 2, Wl = 4, Pf = 8, Ef = 16, Kl = 1, Mf = 2, Ba = "[", Ya = "[!", qa = "]", $r = {}, Et = Symbol(), Hf = "http://www.w3.org/1999/xhtml", Vf = "http://www.w3.org/2000/svg", Nf = !1;
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var _o = Array.isArray, zf = Array.prototype.indexOf, Xa = Array.from, oi = Object.keys, ao = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, jl = Object.getOwnPropertyDescriptors, Df = Object.prototype, Lf = Array.prototype, Wa = Object.getPrototypeOf, Ds = Object.isExtensible;
function Fr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Tf(e) {
  return e();
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const sn = 2, Fl = 4, Vi = 8, Ka = 16, On = 32, vr = 64, ii = 128, Rt = 256, ai = 512, kt = 1024, wn = 2048, er = 4096, Nn = 8192, Ni = 16384, Of = 32768, Br = 65536, Af = 1 << 17, If = 1 << 19, Ul = 1 << 20, va = 1 << 21, Xn = Symbol("$state"), ja = Symbol("legacy props"), Zf = Symbol("");
function Rf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Kf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function It(e) {
  Se = e;
}
let Te;
function _t(e) {
  if (e === null)
    throw zi(), $r;
  return Te = e;
}
function bn() {
  return _t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ kn(Te)
  );
}
function q(e) {
  if (Se) {
    if (/* @__PURE__ */ kn(Te) !== null)
      throw zi(), $r;
    Te = e;
  }
}
function Ne(e = 1) {
  if (Se) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ kn(n);
    Te = n;
  }
}
function ga() {
  for (var e = 0, t = Te; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === qa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ba || n === Ya) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kn(t)
    );
    t.remove(), t = r;
  }
}
function on(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = Wa(e);
  if (t !== Df && t !== Lf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _o(e), o = /* @__PURE__ */ xt(0), i = Ke, a = (s) => {
    var l = Ke;
    xn(i);
    var u = s();
    return xn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ xt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Kf();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ xt(u.value)), n.set(l, c)) : F(
          c,
          a(() => on(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ xt(Et))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && F(c, d);
          }
          F(u, Et), Ls(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Xn)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Vn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ xt(on(f ? s[l] : Et))), n.set(l, d)), d !== void 0) {
          var v = g(d);
          return v === Et ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === Xn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Et || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Vn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ xt(d ? on(s[l]) : Et)), n.set(l, c));
          var f = g(c);
          if (f === Et)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var y = u; y < /** @type {Source<number>} */
          f.v; y += 1) {
            var b = n.get(y + "");
            b !== void 0 ? F(b, Et) : y in s && (b = a(() => /* @__PURE__ */ xt(Et)), n.set(y + "", b));
          }
        f === void 0 ? (!v || (d = Vn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ xt(void 0)), F(
          f,
          a(() => on(u))
        ), n.set(l, f)) : (v = f.v !== Et, F(
          f,
          a(() => on(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= C.v && F(C, h + 1);
          }
          Ls(o);
        }
        return !0;
      },
      ownKeys(s) {
        g(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Et;
        });
        for (var [u, c] of n)
          c.v !== Et && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        jf();
      }
    }
  );
}
function Ls(e, t = 1) {
  F(e, e.v + t);
}
var Mt, Gl, Jl, Ql;
function ha() {
  if (Mt === void 0) {
    Mt = window, Gl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Jl = Vn(t, "firstChild").get, Ql = Vn(t, "nextSibling").get, Ds(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ds(n) && (n.__t = void 0);
  }
}
function Dn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return Jl.call(e);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return Ql.call(e);
}
function X(e, t) {
  if (!Se)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(Te)
  );
  if (n === null)
    n = Te.appendChild(Dn());
  else if (t && n.nodeType !== 3) {
    var r = Dn();
    return n == null || n.before(r), _t(r), r;
  }
  return _t(n), n;
}
function be(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ kn(n) : n;
  }
  return Te;
}
function Z(e, t = 1, n = !1) {
  let r = Se ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ kn(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Dn();
    return r === null ? o == null || o.after(a) : r.before(a), _t(a), a;
  }
  return _t(r), /** @type {TemplateNode} */
  r;
}
function Fa(e) {
  e.textContent = "";
}
function eu(e) {
  return e === this.v;
}
function Ua(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ga(e) {
  return !Ua(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  var t = sn | wn, n = Ke !== null && Ke.f & sn ? (
    /** @type {Derived} */
    Ke
  ) : null;
  return je === null || n !== null && n.f & Rt ? t |= Rt : je.f |= Ul, {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: eu,
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
function Ee(e) {
  const t = /* @__PURE__ */ Er(e);
  return fu(t), t;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Er(e);
  return t.equals = Ga, t;
}
function tu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ut(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Uf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & sn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function nu(e) {
  var t, n = je;
  Un(Uf(e));
  try {
    tu(e), t = pu(e);
  } finally {
    Un(n);
  }
  return t;
}
function ru(e) {
  var t = nu(e), n = (Yn || e.f & Rt) && e.deps !== null ? er : kt;
  Gt(e, n), e.equals(t) || (e.v = t, e.wv = gu());
}
function ou(e) {
  je === null && Ke === null && Yf(), Ke !== null && Ke.f & Rt && je === null && Bf(), So && Rf();
}
function Gf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: Ye,
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
      Li(i), i.f |= Of;
    } catch (l) {
      throw Ut(i), l;
    }
  else t !== null && Ti(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ul | ii)) === 0;
  if (!a && r && (o !== null && Gf(i, o), Ke !== null && Ke.f & sn)) {
    var s = (
      /** @type {Derived} */
      Ke
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ja(e) {
  const t = gr(Vi, null, !1);
  return Gt(t, kt), t.teardown = e, t;
}
function Fn(e) {
  ou();
  var t = je !== null && (je.f & On) !== 0 && Ye !== null && !Ye.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: je,
      reaction: Ke
    });
  } else {
    var r = At(e);
    return r;
  }
}
function Jf(e) {
  return ou(), Yr(e);
}
function Qf(e) {
  const t = gr(vr, e, !0);
  return () => {
    Ut(t);
  };
}
function ev(e) {
  const t = gr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      Ut(t), r(void 0);
    }) : (Ut(t), r(void 0));
  });
}
function At(e) {
  return gr(Fl, e, !1);
}
function ve(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), $n(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ye
  );
  Yr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & kt && Gt(n, er), qr(n) && Li(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return gr(Vi, e, !0);
}
function ke(e, t = [], n = Er) {
  const r = t.map(n);
  return hr(() => e(...r.map(g)));
}
function hr(e, t = 0) {
  return gr(Vi | Ka | t, e, !0);
}
function Ln(e, t = !0) {
  return gr(Vi | On, e, !0, t);
}
function iu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = So, r = Ke;
    Os(!0), xn(null);
    try {
      t.call(null);
    } finally {
      Os(n), xn(r);
    }
  }
}
function au(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & vr ? n.parent = null : Ut(n, t), n = r;
  }
}
function tv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || Ut(t), t = n;
  }
}
function Ut(e, t = !0) {
  var n = !1;
  if ((t || e.f & If) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  au(e, t && !n), ci(e, 0), Gt(e, Ni);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  iu(e);
  var s = e.parent;
  s !== null && s.first !== null && su(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function su(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mr(e, t) {
  var n = [];
  Qa(e, n, !0), lu(n, () => {
    Ut(e), t && t();
  });
}
function lu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Qa(e, t, n) {
  if (!(e.f & Nn)) {
    if (e.f ^= Nn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Br) !== 0 || (r.f & On) !== 0;
      Qa(r, t, i ? n : !1), r = o;
    }
  }
}
function lo(e) {
  uu(e, !0);
}
function uu(e, t) {
  if (e.f & Nn) {
    e.f ^= Nn, e.f & kt || (e.f ^= kt), qr(e) && (Gt(e, wn), Ti(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Br) !== 0 || (n.f & On) !== 0;
      uu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const nv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let uo = [], co = [];
function cu() {
  var e = uo;
  uo = [], so(e);
}
function du() {
  var e = co;
  co = [], so(e);
}
function ko(e) {
  uo.length === 0 && queueMicrotask(cu), uo.push(e);
}
function rv(e) {
  co.length === 0 && nv(du), co.push(e);
}
function Ts() {
  uo.length > 0 && cu(), co.length > 0 && du();
}
let Fo = !1, si = !1, li = null, ir = !1, So = !1;
function Os(e) {
  So = e;
}
let ro = [], Ke = null, pn = !1;
function xn(e) {
  Ke = e;
}
let je = null;
function Un(e) {
  je = e;
}
let Ft = null;
function ov(e) {
  Ft = e;
}
function fu(e) {
  Ke !== null && Ke.f & va && (Ft === null ? ov([e]) : Ft.push(e));
}
let bt = null, Ot = 0, Kt = null;
function iv(e) {
  Kt = e;
}
let vu = 1, ui = 0, Yn = !1;
function gu() {
  return ++vu;
}
function qr(e) {
  var t, n = e.f;
  if (n & wn)
    return !0;
  if (n & er) {
    var r = e.deps, o = (n & Rt) !== 0;
    if (r !== null) {
      var i, a, s = (n & ai) !== 0, l = o && je !== null && !Yn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ai), l && d !== null && !(d.f & Rt) && (c.f ^= Rt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], qr(
          /** @type {Derived} */
          a
        ) && ru(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || je !== null && !Yn) && Gt(e, kt);
  }
  return !1;
}
function av(e, t) {
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
function sv(e) {
  return (e.f & Ni) === 0 && (e.parent === null || (e.parent.f & ii) === 0);
}
function Di(e, t, n, r) {
  if (Fo) {
    if (n === null && (Fo = !1), sv(t))
      throw e;
    return;
  }
  n !== null && (Fo = !0);
  {
    av(e, t);
    return;
  }
}
function hu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ft != null && Ft.includes(e) || (i.f & sn ? hu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Gt(i, wn) : i.f & kt && Gt(i, er), Ti(
        /** @type {Effect} */
        i
      )));
    }
}
function pu(e) {
  var t, n = bt, r = Ot, o = Kt, i = Ke, a = Yn, s = Ft, l = Ye, u = pn, c = e.f;
  bt = /** @type {null | Value[]} */
  null, Ot = 0, Kt = null, Yn = (c & Rt) !== 0 && (pn || !ir || Ke === null), Ke = c & (On | vr) ? null : e, Ft = null, Is(e.ctx), pn = !1, ui++, e.f |= va;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (bt !== null) {
      var v;
      if (ci(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + bt.length, v = 0; v < bt.length; v++)
          f[Ot + v] = bt[v];
      else
        e.deps = f = bt;
      if (!Yn)
        for (v = Ot; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (ci(e, Ot), f.length = Ot);
    if (Oi() && Kt !== null && !pn && f !== null && !(e.f & (sn | er | wn)))
      for (v = 0; v < /** @type {Source[]} */
      Kt.length; v++)
        hu(
          Kt[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (ui++, Kt !== null && (o === null ? o = Kt : o.push(.../** @type {Source[]} */
    Kt))), d;
  } finally {
    bt = n, Ot = r, Kt = o, Ke = i, Yn = a, Ft = s, Is(l), pn = u, e.f ^= va;
  }
}
function lv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = zf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & sn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (bt === null || !bt.includes(t)) && (Gt(t, er), t.f & (Rt | ai) || (t.f ^= ai), tu(
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
      lv(e, n[r]);
}
function Li(e) {
  var t = e.f;
  if (!(t & Ni)) {
    Gt(e, kt);
    var n = je, r = Ye, o = ir;
    je = e, ir = !0;
    try {
      t & Ka ? tv(e) : au(e), iu(e);
      var i = pu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = vu;
      var a = e.deps, s;
      Nf && xf && e.f & wn;
    } catch (l) {
      Di(l, e, n, r || e.ctx);
    } finally {
      ir = o, je = n;
    }
  }
}
function uv() {
  try {
    qf();
  } catch (e) {
    if (li !== null)
      Di(e, li, null);
    else
      throw e;
  }
}
function mu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; ro.length > 0; ) {
      t++ > 1e3 && uv();
      var n = ro, r = n.length;
      ro = [];
      for (var o = 0; o < r; o++) {
        var i = dv(n[o]);
        cv(i);
      }
      fo.clear();
    }
  } finally {
    si = !1, ir = e, li = null;
  }
}
function cv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ni | Nn)))
        try {
          qr(r) && (Li(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? su(r) : r.fn = null));
        } catch (o) {
          Di(o, r, null, r.ctx);
        }
    }
}
function Ti(e) {
  si || (si = !0, queueMicrotask(mu));
  for (var t = li = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | On)) {
      if (!(n & kt)) return;
      t.f ^= kt;
    }
  }
  ro.push(t);
}
function dv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (On | vr)) !== 0, i = o && (r & kt) !== 0;
    if (!i && !(r & Nn)) {
      if (r & Fl)
        t.push(n);
      else if (o)
        n.f ^= kt;
      else {
        var a = Ke;
        try {
          Ke = n, qr(n) && Li(n);
        } catch (u) {
          Di(u, n, null, n.ctx);
        } finally {
          Ke = a;
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
function p(e) {
  var t;
  for (Ts(); ro.length > 0; )
    si = !0, mu(), Ts();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & sn) !== 0;
  if (Ke !== null && !pn) {
    if (!(Ft != null && Ft.includes(e))) {
      var r = Ke.deps;
      e.rv < ui && (e.rv = ui, bt === null && r !== null && r[Ot] === e ? Ot++ : bt === null ? bt = [e] : (!Yn || !bt.includes(e)) && bt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Rt) && (o.f ^= Rt);
  }
  return n && (o = /** @type {Derived} */
  e, qr(o) && ru(o)), So && fo.has(e) ? fo.get(e) : e.v;
}
function $n(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const fv = -7169;
function Gt(e, t) {
  e.f = e.f & fv | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      pa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && pa(n);
      }
  }
}
function pa(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        pa(e[r], t);
      } catch {
      }
    const n = Wa(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = jl(n);
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
const fo = /* @__PURE__ */ new Map();
function Hr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: eu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  const n = Hr(e);
  return fu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t = !1) {
  var n;
  const r = Hr(e);
  return t || (r.equals = Ga), Rr && Ye !== null && Ye.l !== null && ((n = Ye.l).s ?? (n.s = [])).push(r), r;
}
function F(e, t, n = !1) {
  Ke !== null && !pn && Oi() && Ke.f & (sn | Ka) && !(Ft != null && Ft.includes(e)) && Ff();
  let r = n ? on(t) : t;
  return ma(e, r);
}
function ma(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    So ? fo.set(e, t) : fo.set(e, n), e.v = t, e.f & sn && (e.f & wn && nu(
      /** @type {Derived} */
      e
    ), Gt(e, e.f & Rt ? er : kt)), e.wv = gu(), yu(e, wn), Oi() && je !== null && je.f & kt && !(je.f & (On | vr)) && (Kt === null ? iv([e]) : Kt.push(e));
  }
  return t;
}
function As(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function yu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Oi(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & wn || !r && a === je || (Gt(a, t), s & (kt | Rt) && (s & sn ? yu(
        /** @type {Derived} */
        a,
        er
      ) : Ti(
        /** @type {Effect} */
        a
      )));
    }
}
let Ye = null;
function Is(e) {
  Ye = e;
}
function sr(e) {
  return (
    /** @type {T} */
    es().get(e)
  );
}
function Vr(e, t) {
  return es().set(e, t), t;
}
function vv(e) {
  return es().has(e);
}
function de(e, t = !1, n) {
  var r = Ye = {
    p: Ye,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Rr && !t && (Ye.l = {
    s: null,
    u: null,
    r1: [],
    r2: Hr(!1)
  }), Ja(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Ye;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = je, r = Ke;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Un(i.effect), xn(i.reaction), At(i.fn);
        }
      } finally {
        Un(n), xn(r);
      }
    }
    Ye = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Oi() {
  return !Rr || Ye !== null && Ye.l === null;
}
function es(e) {
  return Ye === null && Hi(), Ye.c ?? (Ye.c = new Map(gv(Ye) || void 0));
}
function gv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function hv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const pv = [
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
function mv(e) {
  return pv.includes(e);
}
const yv = {
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
function wv(e) {
  return e = e.toLowerCase(), yv[e] ?? e;
}
const bv = ["touchstart", "touchmove"];
function xv(e) {
  return bv.includes(e);
}
const $v = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Cv(e) {
  return $v.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _v(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kv(e) {
  Se && /* @__PURE__ */ Ct(e) !== null && Fa(e);
}
let Zs = !1;
function Sv() {
  Zs || (Zs = !0, document.addEventListener(
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
function Pv(e) {
  var t = Ke, n = je;
  xn(null), Un(null);
  try {
    return e();
  } finally {
    xn(t), Un(n);
  }
}
const wu = /* @__PURE__ */ new Set(), ya = /* @__PURE__ */ new Set();
function bu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Qr.call(t, i), !i.cancelBubble)
      return Pv(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Qe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = bu(e, t, n, i);
  (t === document.body || t === window || t === document) && Ja(() => {
    t.removeEventListener(e, a, i);
  });
}
function Po(e) {
  for (var t = 0; t < e.length; t++)
    wu.add(e[t]);
  for (var n of ya)
    n(e);
}
function Qr(e) {
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
    ao(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = Ke, f = je;
    xn(null), Un(null);
    try {
      for (var v, y = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (_o(x)) {
              var [C, ...h] = x;
              C.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch (_) {
          v ? y.push(_) : v = _;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let _ of y)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, xn(d), Un(f);
    }
  }
}
function ts(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Nt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & Kl) !== 0, r = (t & Mf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Nt(Te, null), Te;
    o === void 0 && (o = ts(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ct(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Gl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Nt(s, l);
    } else
      Nt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Kl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Se)
      return Nt(Te, null), Te;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ts(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ct(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Ct(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ct(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Ct(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Nt(c, d);
    } else
      Nt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!Se) {
    var t = Dn(e + "");
    return Nt(t, t), t;
  }
  var n = Te;
  return n.nodeType !== 3 && (n.before(n = Dn()), _t(n)), Nt(n, n), n;
}
function et() {
  if (Se)
    return Nt(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), Nt(t, n), e;
}
function O(e, t) {
  if (Se) {
    je.nodes_end = Te, bn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Bt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function xu(e, t) {
  return $u(e, t);
}
function Ev(e, t) {
  ha(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ba); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ kn(i);
    if (!i)
      throw $r;
    It(!0), _t(
      /** @type {Comment} */
      i
    ), bn();
    const a = $u(e, { ...t, anchor: i });
    if (Te === null || Te.nodeType !== 8 || /** @type {Comment} */
    Te.data !== qa)
      throw zi(), $r;
    return It(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && Xf(), ha(), Fa(n), It(!1), xu(e, t);
    throw a;
  } finally {
    It(r), _t(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function $u(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ha();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = xv(v);
        t.addEventListener(v, Qr, { passive: y });
        var b = yr.get(v);
        b === void 0 ? (document.addEventListener(v, Qr, { passive: y }), yr.set(v, 1)) : yr.set(v, b + 1);
      }
    }
  };
  l(Xa(wu)), ya.add(l);
  var u = void 0, c = ev(() => {
    var d = n ?? t.appendChild(Dn());
    return Ln(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Ye
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && Nt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Se && (je.nodes_end = Te), i && fe();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Qr);
        var y = (
          /** @type {number} */
          yr.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, Qr), yr.delete(v)) : yr.set(v, y);
      }
      ya.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return wa.set(u, c), u;
}
let wa = /* @__PURE__ */ new WeakMap();
function Mv(e, t) {
  const n = wa.get(e);
  return n ? (wa.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && bn();
  var o = e, i = null, a = null, s = Et, l = n > 0 ? Br : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Ba ? r = 0 : x === Ya ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ga(), _t(o), It(!1), y = !0, r = -1);
    }
    s ? (i ? lo(i) : v && (i = Ln(() => v(o))), a && Mr(a, () => {
      a = null;
    })) : (a ? lo(a) : v && (a = Ln(() => v(o, [n + 1, r]))), i && Mr(i, () => {
      i = null;
    })), y && It(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Se && (o = Te);
}
function vo(e, t) {
  return t;
}
function Hv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Qa(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Fa(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  lu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Rn(e, c.prev, c.next)), Ut(c.e, !s);
    }
  });
}
function zt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Xl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Se ? _t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(Dn());
  }
  Se && bn();
  var c = null, d = !1, f = /* @__PURE__ */ me(() => {
    var v = n();
    return _o(v) ? v : v == null ? [] : Xa(v);
  });
  hr(() => {
    var v = g(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let b = !1;
    if (Se) {
      var x = (
        /** @type {Comment} */
        a.data === Ya
      );
      x !== (y === 0) && (a = ga(), _t(a), It(!1), b = !0);
    }
    if (Se) {
      for (var C = null, h, _ = 0; _ < y; _++) {
        if (Te.nodeType === 8 && /** @type {Comment} */
        Te.data === qa) {
          a = /** @type {Comment} */
          Te, b = !0, It(!1);
          break;
        }
        var w = v[_], k = r(w, _);
        h = Cu(
          Te,
          s,
          C,
          null,
          w,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, h), C = h;
      }
      y > 0 && _t(ga());
    }
    Se || Vv(v, s, a, o, t, r, n), i !== null && (y === 0 ? c ? lo(c) : c = Ln(() => i(a)) : c !== null && Mr(c, () => {
      c = null;
    })), b && It(!0), g(f);
  }), Se && (a = Te);
}
function Vv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Cf) !== 0, f = (o & (Za | Ra)) !== 0, v = e.length, y = t.items, b = t.first, x = b, C, h = null, _, w = [], k = [], E, P, z, N;
  if (d)
    for (N = 0; N < v; N += 1)
      E = e[N], P = i(E, N), z = y.get(P), z !== void 0 && ((s = z.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(z));
  for (N = 0; N < v; N += 1) {
    if (E = e[N], P = i(E, N), z = y.get(P), z === void 0) {
      var T = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Cu(
        T,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        P,
        N,
        r,
        o,
        a
      ), y.set(P, h), w = [], k = [], x = h.next;
      continue;
    }
    if (f && Nv(z, E, N, o), z.e.f & Nn && (lo(z.e), d && ((l = z.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(z))), z !== x) {
      if (C !== void 0 && C.has(z)) {
        if (w.length < k.length) {
          var A = k[0], L;
          h = A.prev;
          var R = w[0], S = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Rs(w[L], A, n);
          for (L = 0; L < k.length; L += 1)
            C.delete(k[L]);
          Rn(t, R.prev, S.next), Rn(t, h, R), Rn(t, S, A), x = A, h = S, N -= 1, w = [], k = [];
        } else
          C.delete(z), Rs(z, x, n), Rn(t, z.prev, z.next), Rn(t, z, h === null ? t.first : h.next), Rn(t, h, z), h = z;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== P; )
        x.e.f & Nn || (C ?? (C = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      z = x;
    }
    w.push(z), h = z, x = z.next;
  }
  if (x !== null || C !== void 0) {
    for (var V = C === void 0 ? [] : Xa(C); x !== null; )
      x.e.f & Nn || V.push(x), x = x.next;
    var $ = V.length;
    if ($ > 0) {
      var H = o & Xl && v === 0 ? n : null;
      if (d) {
        for (N = 0; N < $; N += 1)
          (u = V[N].a) == null || u.measure();
        for (N = 0; N < $; N += 1)
          (c = V[N].a) == null || c.fix();
      }
      Hv(t, V, H, y);
    }
  }
  d && ko(() => {
    var M;
    if (_ !== void 0)
      for (z of _)
        (M = z.a) == null || M.apply();
  }), je.first = t.first && t.first.e, je.last = h && h.e;
}
function Nv(e, t, n, r) {
  r & Za && ma(e.v, t), r & Ra ? ma(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Cu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Za) !== 0, d = (l & _f) === 0, f = c ? d ? /* @__PURE__ */ ne(o) : Hr(o) : o, v = l & Ra ? Hr(a) : a, y = {
    i: v,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return y.e = Ln(() => s(e, f, v, u), Se), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function Rs(e, t, n) {
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
      /* @__PURE__ */ kn(i)
    );
    o.before(i), i = a;
  }
}
function Rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ns(e, t, n, r, o) {
  var i = e, a = "", s;
  hr(() => {
    if (a === (a = t() ?? "")) {
      Se && bn();
      return;
    }
    s !== void 0 && (Ut(s), s = void 0), a !== "" && (s = Ln(() => {
      if (Se) {
        Te.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ kn(l);
        if (l === null)
          throw zi(), $r;
        Nt(Te, u), i = _t(l);
        return;
      }
      var c = a + "", d = ts(c);
      Nt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function pt(e, t, n, r, o) {
  var i;
  Se && bn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function zv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = ft, i;
  hr(() => {
    o !== (o = t()) && (i && (Ut(i), i = null), i = Ln(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Br), Se && (r = Te);
}
function _u(e, t, n) {
  Se && bn();
  var r = e, o, i;
  hr(() => {
    o !== (o = t()) && (i && (Mr(i), i = null), o && (i = Ln(() => n(r, o))));
  }, Br), Se && (r = Te);
}
function Dv(e, t, n, r, o, i) {
  let a = Se;
  Se && bn();
  var s, l, u = null;
  Se && Te.nodeType === 1 && (u = /** @type {Element} */
  Te, bn());
  var c = (
    /** @type {TemplateNode} */
    Se ? Te : e
  ), d;
  hr(() => {
    const f = t() || null;
    var v = f === "svg" ? Vf : null;
    f !== s && (d && (f === null ? Mr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Ut(d)), f && f !== l && (d = Ln(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Nt(u, u), r) {
        Se && Cv(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ Ct(u) : u.appendChild(Dn())
        );
        Se && (y === null ? It(!1) : _t(y)), r(u, y);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Br), a && (It(!0), _t(c));
}
function Je(e, t) {
  ko(() => {
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
function ht(e, t, n) {
  At(() => {
    var r = $n(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Yr(() => {
        var a = n();
        G(a), o && Ua(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ku(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ku(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Lv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ku(e)) && (r && (r += " "), r += t);
  return r;
}
function fn(e) {
  return typeof e == "object" ? Lv(e) : e ?? "";
}
const Bs = [...` 	
\r\f \v\uFEFF`];
function Tv(e, t, n) {
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
function Ys(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ea(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ov(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ea)), o && l.push(...Object.keys(o).map(ea));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === b - 1) {
            if (c !== -1) {
              var v = ea(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var y = e.substring(u, d).trim();
                n += " " + y + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Ys(r)), o && (n += Ys(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function mt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Se || a !== n || a === void 0) {
    var s = Tv(n, r, i);
    (!Se || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ta(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (Se || o !== t) {
    var i = Ov(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n == null ? void 0 : n[0], r[0]), ta(e, n == null ? void 0 : n[1], r[1], "important")) : ta(e, n, r));
  return r;
}
const Ur = Symbol("class"), nr = Symbol("style"), Su = Symbol("is custom element"), Pu = Symbol("is html");
function oo(e) {
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
    e.__on_r = n, rv(n), Sv();
  }
}
function na(e, t) {
  var n = rs(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Av(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = rs(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Zf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Eu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = rs(e), a = i[Su], s = !i[Pu];
  let l = Se && a;
  l && It(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = fn(n.class) : (r || n[Ur]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var f = Eu(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", u[_] = w;
      continue;
    }
    if (_ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, v, w, r, t == null ? void 0 : t[Ur], n[Ur]), u[_] = w, u[Ur] = n[Ur];
      continue;
    }
    if (_ === "style") {
      dt(e, w, t == null ? void 0 : t[nr], n[nr]), u[_] = w, u[nr] = n[nr];
      continue;
    }
    var y = u[_];
    if (w !== y) {
      u[_] = w;
      var b = _[0] + _[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, E = "$$" + _;
          let P = _.slice(2);
          var x = mv(P);
          if (hv(P) && (P = P.slice(0, -7), k.capture = !0), !x && y) {
            if (w != null) continue;
            e.removeEventListener(P, u[E], k), u[E] = null;
          }
          if (w != null)
            if (x)
              e[`__${P}`] = w, Po([P]);
            else {
              let z = function(N) {
                u[_].call(this, N);
              };
              u[E] = bu(P, e, z, k);
            }
          else x && (e[`__${P}`] = void 0);
        } else if (_ === "style")
          ye(e, _, w);
        else if (_ === "autofocus")
          _v(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          Av(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = _;
          s || (C = wv(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !h)
            if (i[_] = null, C === "value" || C === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (C === "value") {
                let P = k.defaultValue;
                k.removeAttribute(C), k.defaultValue = P, k.value = k.__value = E ? P : null;
              } else {
                let P = k.defaultChecked;
                k.removeAttribute(C), k.defaultChecked = P, k.checked = E ? P : !1;
              }
            } else
              e.removeAttribute(_);
          else h || f.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && ye(e, C, w);
        }
    }
  }
  return l && It(!0), u;
}
function rs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Su]: e.nodeName.includes("-"),
      [Pu]: e.namespaceURI === Hf
    })
  );
}
var qs = /* @__PURE__ */ new Map();
function Eu(e) {
  var t = qs.get(e.nodeName);
  if (t) return t;
  qs.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = jl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Wa(r);
  }
  return t;
}
var rr, io, Uo, ba, Mu;
const xa = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    br(this, ba), br(this, rr, /* @__PURE__ */ new WeakMap()), br(this, io), br(this, Uo), ri(this, Uo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, rr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, rr).set(t, r), wf(this, ba, Mu).call(this).observe(t, lt(this, Uo)), () => {
      var o = lt(this, rr).get(t);
      o.delete(n), o.size === 0 && (lt(this, rr).delete(t), lt(this, io).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakSet(), Mu = function() {
  return lt(this, io) ?? ri(this, io, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        xa.entries.set(t.target, t);
        for (var n of lt(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ht(xa, "entries", /* @__PURE__ */ new WeakMap());
let Iv = xa;
var Zv = /* @__PURE__ */ new Iv({
  box: "border-box"
});
function Xs(e, t, n) {
  var r = Zv.observe(e, () => n(e[t]));
  At(() => ($n(() => n(e[t])), r));
}
function Ws(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function Cn(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], $n(() => {
        e !== n(...i) && (t(e, ...i), o && Ws(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ko(() => {
        i && Ws(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function De(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Er(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && Jf(() => {
    Ks(t, r), so(n.b);
  }), Fn(() => {
    const o = $n(() => n.m.map(Tf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Fn(() => {
    Ks(t, r), so(n.a);
  });
}
function Ks(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ze(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = _o(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Jt(e) {
  Ye === null && Hi(), Rr && Ye.l !== null ? Bv(Ye).m.push(e) : Fn(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function os(e) {
  Ye === null && Hi(), Jt(() => () => $n(e));
}
function Rv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ai() {
  const e = Ye;
  return e === null && Hi(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = _o(i) ? i.slice() : [i], s = Rv(
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
function Bv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function is(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = $n(
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
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = ft) {
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
  function a(s, l = ft) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || ft), s(
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
  return Wt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = ft;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? u[0] : u, a, s);
      i ? a(y) : d = typeof y == "function" ? y : ft;
    }, v = o.map(
      (y, b) => is(
        y,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      so(v), d(), l = !1;
    };
  });
}
function j(e) {
  let t;
  return is(e, (n) => t = n)(), t;
}
let Bo = !1, $a = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ne(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !($a in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = is(e, (i) => {
        o ? r.source.v = i : F(r.source, i);
      }), o = !1;
    }
  return e && $a in n ? j(e) : g(r.source);
}
function Yv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function di(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    Ja(() => {
      for (var n in e)
        e[n].unsubscribe();
      ao(e, $a, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function qv(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
  }
}
const Xv = {
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
    Xv
  );
}
const Wv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = m(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Wl
    )), e.special[t](n), As(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), As(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Hr(0) }, Wv);
}
const Kv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Fr(o) && (o = o());
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
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Vn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Xn || t === ja) return !1;
    for (let n of e.props)
      if (Fr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Fr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ct(...e) {
  return new Proxy({ props: e }, Kv);
}
function js(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function m(e, t, n, r) {
  var o, i = (n & kf) !== 0, a = !Rr || (n & Sf) !== 0, s = (n & Pf) !== 0, l = (n & Ef) !== 0, u = !1, c;
  s ? [c, u] = qv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Xn in e || ja in e, f = s && (((o = Vn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, b = !1, x = () => (b = !0, y && (y = !1, l ? v = $n(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && Wf(), c = x(), f && f(c));
  var C;
  if (a)
    C = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (y = !0, b = !1, P);
    };
  else {
    var h = (i ? Er : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Af, C = () => {
      var P = g(h);
      return P !== void 0 && (v = /** @type {V} */
      void 0), P === void 0 ? v : P;
    };
  }
  if (!(n & Wl))
    return C;
  if (f) {
    var _ = e.$$legacy;
    return function(P, z) {
      return arguments.length > 0 ? ((!a || !z || _ || u) && f(z ? C() : P), P) : C();
    };
  }
  var w = !1, k = /* @__PURE__ */ ne(c), E = /* @__PURE__ */ Er(() => {
    var P = C(), z = g(k);
    return w ? (w = !1, z) : k.v = P;
  });
  return s && g(E), i || (E.equals = Ga), function(P, z) {
    if (arguments.length > 0) {
      const N = z ? g(E) : a && s ? on(P) : P;
      if (!E.equals(N)) {
        if (w = !0, F(k, N), b && v !== void 0 && (v = N), js(E))
          return P;
        $n(() => g(E));
      }
      return P;
    }
    return js(E) ? E.v : g(E);
  };
}
function jv(e) {
  return new Fv(e);
}
var Zn, nn;
class Fv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    br(this, Zn), br(this, nn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ne(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ja ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return F(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ri(this, nn, (t.hydrate ? Ev : xu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ri(this, Zn, i.$$events);
    for (const a of Object.keys(lt(this, nn)))
      a === "$set" || a === "$destroy" || a === "$on" || ao(this, a, {
        get() {
          return lt(this, nn)[a];
        },
        /** @param {any} value */
        set(s) {
          lt(this, nn)[a] = s;
        },
        enumerable: !0
      });
    lt(this, nn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, lt(this, nn).$destroy = () => {
      Mv(lt(this, nn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, nn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    lt(this, Zn)[t] = lt(this, Zn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Zn)[t].push(r), () => {
      lt(this, Zn)[t] = lt(this, Zn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, nn).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap();
let Hu;
typeof HTMLElement == "function" && (Hu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ht(this, "$$ctor"), Ht(this, "$$s"), Ht(this, "$$c"), Ht(this, "$$cn", !1), Ht(this, "$$d", {}), Ht(this, "$$r", !1), Ht(this, "$$p_d", {}), Ht(this, "$$l", {}), Ht(this, "$$l_u", /* @__PURE__ */ new Map()), Ht(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), O(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Uv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Go(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = jv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Qf(() => {
        Yr(() => {
          var r;
          this.$$r = !0;
          for (const o of oi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Go(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Go(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function Go(e, t, n, r) {
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
function Uv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let a = class extends Hu {
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
    ao(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Go(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Vn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    ao(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function St(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = St(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Gv = { value: () => {
} };
function Ii() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Jo(n);
}
function Jo(e) {
  this._ = e;
}
function Jv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Jo.prototype = Ii.prototype = {
  constructor: Jo,
  on: function(e, t) {
    var n = this._, r = Jv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = Qv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = Fs(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Fs(n[o], e.name, null);
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
function Qv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Fs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ca = "http://www.w3.org/1999/xhtml";
const Us = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ca,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Us.hasOwnProperty(t) ? { space: Us[t], local: e } : e;
}
function e1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ca && t.documentElement.namespaceURI === Ca ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function t1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Vu(e) {
  var t = Zi(e);
  return (t.local ? t1 : e1)(t);
}
function n1() {
}
function as(e) {
  return e == null ? n1 : function() {
    return this.querySelector(e);
  };
}
function r1(e) {
  typeof e != "function" && (e = as(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new qt(r, this._parents);
}
function o1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function i1() {
  return [];
}
function Nu(e) {
  return e == null ? i1 : function() {
    return this.querySelectorAll(e);
  };
}
function a1(e) {
  return function() {
    return o1(e.apply(this, arguments));
  };
}
function s1(e) {
  typeof e == "function" ? e = a1(e) : e = Nu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new qt(r, o);
}
function zu(e) {
  return function() {
    return this.matches(e);
  };
}
function Du(e) {
  return function(t) {
    return t.matches(e);
  };
}
var l1 = Array.prototype.find;
function u1(e) {
  return function() {
    return l1.call(this.children, e);
  };
}
function c1() {
  return this.firstElementChild;
}
function d1(e) {
  return this.select(e == null ? c1 : u1(typeof e == "function" ? e : Du(e)));
}
var f1 = Array.prototype.filter;
function v1() {
  return Array.from(this.children);
}
function g1(e) {
  return function() {
    return f1.call(this.children, e);
  };
}
function h1(e) {
  return this.selectAll(e == null ? v1 : g1(typeof e == "function" ? e : Du(e)));
}
function p1(e) {
  typeof e != "function" && (e = zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new qt(r, this._parents);
}
function Lu(e) {
  return new Array(e.length);
}
function m1() {
  return new qt(this._enter || this._groups.map(Lu), this._parents);
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
function y1(e) {
  return function() {
    return e;
  };
}
function w1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new fi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function b1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new fi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function x1(e) {
  return e.__data__;
}
function $1(e, t) {
  if (!arguments.length) return Array.from(this, x1);
  var n = t ? b1 : w1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = y1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = C1(e.call(c, c && c.__data__, u, r)), y = v.length, b = s[u] = new Array(y), x = a[u] = new Array(y), C = l[u] = new Array(f);
    n(c, d, b, x, C, v, t);
    for (var h = 0, _ = 0, w, k; h < y; ++h)
      if (w = b[h]) {
        for (h >= _ && (_ = h + 1); !(k = x[_]) && ++_ < y; ) ;
        w._next = k || null;
      }
  }
  return a = new qt(a, r), a._enter = s, a._exit = l, a;
}
function C1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _1() {
  return new qt(this._exit || this._groups.map(Lu), this._parents);
}
function k1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function S1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new qt(s, this._parents);
}
function P1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function E1(e) {
  e || (e = M1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new qt(o, this._parents).order();
}
function M1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function H1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function V1() {
  return Array.from(this);
}
function N1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function z1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function D1() {
  return !this.node();
}
function L1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function T1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function O1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function A1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function I1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function R1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function B1(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? O1 : T1 : typeof t == "function" ? n.local ? R1 : Z1 : n.local ? I1 : A1)(n, t));
}
function Tu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Y1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function q1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function X1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function W1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Y1 : typeof t == "function" ? X1 : q1)(e, t, n ?? "")) : Nr(this.node(), e);
}
function Nr(e, t) {
  return e.style.getPropertyValue(t) || Tu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function K1(e) {
  return function() {
    delete this[e];
  };
}
function j1(e, t) {
  return function() {
    this[e] = t;
  };
}
function F1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function U1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? K1 : typeof t == "function" ? F1 : j1)(e, t)) : this.node()[e];
}
function Ou(e) {
  return e.trim().split(/^|\s+/);
}
function ss(e) {
  return e.classList || new Au(e);
}
function Au(e) {
  this._node = e, this._names = Ou(e.getAttribute("class") || "");
}
Au.prototype = {
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
function Iu(e, t) {
  for (var n = ss(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zu(e, t) {
  for (var n = ss(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function G1(e) {
  return function() {
    Iu(this, e);
  };
}
function J1(e) {
  return function() {
    Zu(this, e);
  };
}
function Q1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Iu : Zu)(this, e);
  };
}
function eg(e, t) {
  var n = Ou(e + "");
  if (arguments.length < 2) {
    for (var r = ss(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Q1 : t ? G1 : J1)(n, t));
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
  var t = typeof e == "function" ? e : Vu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gg() {
  return null;
}
function hg(e, t) {
  var n = typeof e == "function" ? e : Vu(e), r = t == null ? gg : typeof t == "function" ? t : as(t);
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
function bg(e) {
  return this.select(e ? wg : yg);
}
function xg(e) {
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
function Ru(e, t, n) {
  var r = Tu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Pg(e, t) {
  return function() {
    return Ru(this, e, t);
  };
}
function Eg(e, t) {
  return function() {
    return Ru(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Eg : Pg)(e, t));
}
function* Hg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Bu = [null];
function qt(e, t) {
  this._groups = e, this._parents = t;
}
function Eo() {
  return new qt([[document.documentElement]], Bu);
}
function Vg() {
  return this;
}
qt.prototype = Eo.prototype = {
  constructor: qt,
  select: r1,
  selectAll: s1,
  selectChild: d1,
  selectChildren: h1,
  filter: p1,
  data: $1,
  enter: m1,
  exit: _1,
  join: k1,
  merge: S1,
  selection: Vg,
  order: P1,
  sort: E1,
  call: H1,
  nodes: V1,
  node: N1,
  size: z1,
  empty: D1,
  each: L1,
  attr: B1,
  style: W1,
  property: U1,
  classed: eg,
  text: og,
  html: lg,
  raise: cg,
  lower: fg,
  append: vg,
  insert: hg,
  remove: mg,
  clone: bg,
  datum: xg,
  on: Sg,
  dispatch: Mg,
  [Symbol.iterator]: Hg
};
function jt(e) {
  return typeof e == "string" ? new qt([[document.querySelector(e)]], [document.documentElement]) : new qt([[e]], Bu);
}
function Ng(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
  if (e = Ng(e), t === void 0 && (t = e.currentTarget), t) {
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
const zg = { passive: !1 }, go = { capture: !0, passive: !1 };
function ra(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Yu(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", Cr, go);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, go) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function qu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, go), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Yo = (e) => () => e;
function _a(e, {
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
_a.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Dg(e) {
  return !e.ctrlKey && !e.button;
}
function Lg() {
  return this.parentNode;
}
function Tg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Og() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ag() {
  var e = Dg, t = Lg, n = Tg, r = Og, o = {}, i = Ii("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", C, zg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var E = _(this, t.call(this, w, k), w, k, "mouse");
      E && (jt(w.view).on("mousemove.drag", y, go).on("mouseup.drag", b, go), Yu(w.view), ra(w), u = !1, s = w.clientX, l = w.clientY, E("start", w));
    }
  }
  function y(w) {
    if (Cr(w), !u) {
      var k = w.clientX - s, E = w.clientY - l;
      u = k * k + E * E > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    jt(w.view).on("mousemove.drag mouseup.drag", null), qu(w.view, u), Cr(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var E = w.changedTouches, P = t.call(this, w, k), z = E.length, N, T;
      for (N = 0; N < z; ++N)
        (T = _(this, P, w, k, E[N].identifier, E[N])) && (ra(w), T("start", w, E[N]));
    }
  }
  function C(w) {
    var k = w.changedTouches, E = k.length, P, z;
    for (P = 0; P < E; ++P)
      (z = o[k[P].identifier]) && (Cr(w), z("drag", w, k[P]));
  }
  function h(w) {
    var k = w.changedTouches, E = k.length, P, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < E; ++P)
      (z = o[k[P].identifier]) && (ra(w), z("end", w, k[P]));
  }
  function _(w, k, E, P, z, N) {
    var T = i.copy(), A = rn(N || E, k), L, R, S;
    if ((S = n.call(w, new _a("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: z,
      active: a,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), P)) != null)
      return L = S.x - A[0] || 0, R = S.y - A[1] || 0, function V($, H, M) {
        var D = A, I;
        switch ($) {
          case "start":
            o[z] = V, I = a++;
            break;
          case "end":
            delete o[z], --a;
          // falls through
          case "drag":
            A = rn(M || H, k), I = a;
            break;
        }
        T.call(
          $,
          w,
          new _a($, {
            sourceEvent: H,
            subject: S,
            target: f,
            identifier: z,
            active: I,
            x: A[0] + L,
            y: A[1] + R,
            dx: A[0] - D[0],
            dy: A[1] - D[1],
            dispatch: T
          }),
          P
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Yo(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Yo(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Yo(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Yo(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function ls(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Xu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Mo() {
}
var ho = 0.7, vi = 1 / ho, _r = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ig = /^#([0-9a-f]{3,8})$/, Zg = new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`), Rg = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Bg = new RegExp(`^rgba\\(${_r},${_r},${_r},${po}\\)$`), Yg = new RegExp(`^rgba\\(${mn},${mn},${mn},${po}\\)$`), qg = new RegExp(`^hsl\\(${po},${mn},${mn}\\)$`), Xg = new RegExp(`^hsla\\(${po},${mn},${mn},${po}\\)$`), Gs = {
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
ls(Mo, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Js,
  // Deprecated! Use color.formatHex.
  formatHex: Js,
  formatHex8: Wg,
  formatHsl: Kg,
  formatRgb: Qs,
  toString: Qs
});
function Js() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function Kg() {
  return Wu(this).formatHsl();
}
function Qs() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ig.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? el(t) : n === 3 ? new Vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zg.exec(e)) ? new Vt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new Vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? qo(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? qo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = qg.exec(e)) ? rl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xg.exec(e)) ? rl(t[1], t[2] / 100, t[3] / 100, t[4]) : Gs.hasOwnProperty(e) ? el(Gs[e]) : e === "transparent" ? new Vt(NaN, NaN, NaN, 0) : null;
}
function el(e) {
  return new Vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Vt(e, t, n, r);
}
function jg(e) {
  return e instanceof Mo || (e = mo(e)), e ? (e = e.rgb(), new Vt(e.r, e.g, e.b, e.opacity)) : new Vt();
}
function ka(e, t, n, r) {
  return arguments.length === 1 ? jg(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ls(Vt, ka, Xu(Mo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new Vt(this.r * e, this.g * e, this.b * e, this.opacity);
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
  hex: tl,
  // Deprecated! Use color.formatHex.
  formatHex: tl,
  formatHex8: Fg,
  formatRgb: nl,
  toString: nl
}));
function tl() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Fg() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nl() {
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
function rl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new an(e, t, n, r);
}
function Wu(e) {
  if (e instanceof an) return new an(e.h, e.s, e.l, e.opacity);
  if (e instanceof Mo || (e = mo(e)), !e) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new an(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? Wu(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ls(an, Ug, Xu(Mo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Vt(
      oa(e >= 240 ? e - 240 : e + 120, o, r),
      oa(e, o, r),
      oa(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new an(ol(this.h), Xo(this.s), Xo(this.l), gi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ol(this.h)}, ${Xo(this.s) * 100}%, ${Xo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ol(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Xo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function oa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ku = (e) => () => e;
function Gg(e, t) {
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
  return (e = +e) == 1 ? ju : function(t, n) {
    return n - t ? Jg(t, n, e) : Ku(isNaN(t) ? n : t);
  };
}
function ju(e, t) {
  var n = t - e;
  return n ? Gg(e, n) : Ku(isNaN(e) ? t : e);
}
const il = function e(t) {
  var n = Qg(t);
  function r(o, i) {
    var a = n((o = ka(o)).r, (i = ka(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = ju(o.opacity, i.opacity);
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
var Sa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ia = new RegExp(Sa.source, "g");
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
  var n = Sa.lastIndex = ia.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Sa.exec(e)) && (o = ia.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Bn(r, o) })), n = ia.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? th(l[0].x) : eh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var al = 180 / Math.PI, Fu = {
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
    rotate: Math.atan2(t, e) * al,
    skewX: Math.atan(l) * al,
    scaleX: a,
    scaleY: s
  };
}
var Wo;
function rh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Fu : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function oh(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Fu : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Gu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      y.push({ i: b - 4, x: Bn(u, d) }, { i: b - 2, x: Bn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: Bn(u, d) }, { i: b - 2, x: Bn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, b = f.length, x; ++y < b; ) d[(x = f[y]).i] = x.x(v);
      return d.join("");
    };
  };
}
var ih = Gu(rh, "px, ", "px)", "deg)"), ah = Gu(oh, ", ", ")", ")"), sh = 1e-12;
function sl(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, y = d - l, b = v * v + y * y, x, C;
    if (b < sh)
      C = Math.log(f / u) / t, x = function(P) {
        return [
          s + P * v,
          l + P * y,
          u * Math.exp(t * P * C)
        ];
      };
    else {
      var h = Math.sqrt(b), _ = (f * f - u * u + r * b) / (2 * u * n * h), w = (f * f - u * u - r * b) / (2 * f * n * h), k = Math.log(Math.sqrt(_ * _ + 1) - _), E = Math.log(Math.sqrt(w * w + 1) - w);
      C = (E - k) / t, x = function(P) {
        var z = P * C, N = sl(k), T = u / (n * h) * (N * uh(t * z + k) - lh(k));
        return [
          s + T * v,
          l + T * y,
          u * N / sl(t * z + k)
        ];
      };
    }
    return x.duration = C * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, eo = 0, Gr = 0, Ju = 1e3, hi, to, pi = 0, ur = 0, Ri = 0, yo = typeof performance == "object" && performance.now ? performance : Date, Qu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function us() {
  return ur || (Qu(dh), ur = yo.now() + Ri);
}
function dh() {
  ur = 0;
}
function mi() {
  this._call = this._time = this._next = null;
}
mi.prototype = ec.prototype = {
  constructor: mi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? us() : +n) + (t == null ? 0 : +t), !this._next && to !== this && (to ? to._next = this : hi = this, to = this), this._call = e, this._time = n, Pa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Pa());
  }
};
function ec(e, t, n) {
  var r = new mi();
  return r.restart(e, t, n), r;
}
function fh() {
  us(), ++zr;
  for (var e = hi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function ll() {
  ur = (pi = yo.now()) + Ri, zr = eo = 0;
  try {
    fh();
  } finally {
    zr = 0, gh(), ur = 0;
  }
}
function vh() {
  var e = yo.now(), t = e - pi;
  t > Ju && (Ri -= t, pi = e);
}
function gh() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  to = e, Pa(r);
}
function Pa(e) {
  if (!zr) {
    eo && (eo = clearTimeout(eo));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ll, e - yo.now() - Ri)), Gr && (Gr = clearInterval(Gr))) : (Gr || (pi = yo.now(), Gr = setInterval(vh, Ju)), zr = 1, Qu(ll));
  }
}
function ul(e, t, n) {
  var r = new mi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var hh = Ii("start", "end", "cancel", "interrupt"), ph = [], tc = 0, cl = 1, Ea = 2, Qo = 3, dl = 4, Ma = 5, ei = 6;
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
    state: tc
  });
}
function cs(e, t) {
  var n = vn(e, t);
  if (n.state > tc) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = vn(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function vn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function mh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ec(i, 0, n.time);
  function i(u) {
    n.state = cl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== cl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === Qo) return ul(a);
        v.state === dl ? (v.state = ei, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = ei, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (ul(function() {
      n.state === Qo && (n.state = dl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ea, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ea) {
      for (n.state = Qo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ma, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ma && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ea && r.state < Ma, r.state = ei, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
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
function bh(e, t, n) {
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
function xh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = vn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? wh : bh)(n, e, t));
}
function ds(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vn(o, r).value[t];
  };
}
function nc(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof mo ? il : (n = mo(t)) ? (t = n, il) : nh)(e, t);
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
function Ph(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Eh(e, t) {
  var n = Zi(e), r = n === "transform" ? ah : nc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ph : Sh)(n, r, ds(this, "attr." + e, t)) : t == null ? (n.local ? Ch : $h)(n) : (n.local ? kh : _h)(n, r, t));
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
function Vh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hh(e, i)), n;
  }
  return o._value = t, o;
}
function Nh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Mh(e, i)), n;
  }
  return o._value = t, o;
}
function zh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? Vh : Nh)(r, t));
}
function Dh(e, t) {
  return function() {
    cs(this, e).delay = +t.apply(this, arguments);
  };
}
function Lh(e, t) {
  return t = +t, function() {
    cs(this, e).delay = t;
  };
}
function Th(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dh : Lh)(t, e)) : vn(this.node(), t).delay;
}
function Oh(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Ah(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Ih(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Oh : Ah)(t, e)) : vn(this.node(), t).duration;
}
function Zh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(Zh(t, e)) : vn(this.node(), t).ease;
}
function Bh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Yh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Bh(this._id, e));
}
function qh(e) {
  typeof e != "function" && (e = zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function Xh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Tn(a, this._parents, this._name, this._id);
}
function Wh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Kh(e, t, n) {
  var r, o, i = Wh(t) ? cs : Sn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function jh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(Kh(n, e, t));
}
function Fh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Uh() {
  return this.on("end.remove", Fh(this._id));
}
function Gh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = as(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Bi(u[f], t, n, f, u, vn(c, n)));
  return new Tn(i, this._parents, t, n);
}
function Jh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Nu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, y = vn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && Bi(v, t, n, b, f, y);
        i.push(f), a.push(c);
      }
  return new Tn(i, a, t, n);
}
var Qh = Eo.prototype.constructor;
function ep() {
  return new Qh(this._groups, this._parents);
}
function tp(e, t) {
  var n, r, o;
  return function() {
    var i = Nr(this, e), a = (this.style.removeProperty(e), Nr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function rc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function np(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Nr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function rp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Nr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Nr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function op(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? s || (s = rc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ip(e, t, n) {
  var r = (e += "") == "transform" ? ih : nc;
  return t == null ? this.styleTween(e, tp(e, r)).on("end.style." + e, rc(e)) : typeof t == "function" ? this.styleTween(e, rp(e, r, ds(this, "style." + e, t))).each(op(this._id, e)) : this.styleTween(e, np(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? cp(ds(this, "text", e)) : up(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = oc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = vn(l, t);
        Bi(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function pp() {
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
var mp = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function oc() {
  return ++mp;
}
var En = Eo.prototype;
Tn.prototype = {
  constructor: Tn,
  select: Gh,
  selectAll: Jh,
  selectChild: En.selectChild,
  selectChildren: En.selectChildren,
  filter: qh,
  merge: Xh,
  selection: ep,
  transition: hp,
  call: En.call,
  nodes: En.nodes,
  node: En.node,
  size: En.size,
  empty: En.empty,
  each: En.each,
  on: jh,
  attr: Eh,
  attrTween: zh,
  style: ip,
  styleTween: lp,
  text: dp,
  textTween: gp,
  remove: Uh,
  tween: xh,
  delay: Th,
  duration: Ih,
  ease: Rh,
  easeVarying: Yh,
  end: pp,
  [Symbol.iterator]: En[Symbol.iterator]
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
function bp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function xp(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = oc(), (n = wp).time = us(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Bi(l, e, t, u, a, n || bp(l, t));
  return new Tn(r, this._parents, e, t);
}
Eo.prototype.interrupt = yh;
Eo.prototype.transition = xp;
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
var Yi = new Mn(1, 0, 0);
ic.prototype = Mn.prototype;
function ic(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Yi;
  return e.__zoom;
}
function aa(e) {
  e.stopImmediatePropagation();
}
function Jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Cp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function _p() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function fl() {
  return this.__zoom || Yi;
}
function kp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Sp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Pp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function ac() {
  var e = Cp, t = _p, n = Pp, r = kp, o = Sp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = ch, u = Ii("start", "zoom", "end"), c, d, f, v = 500, y = 150, b = 0, x = 10;
  function C(S) {
    S.property("__zoom", fl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(S, V, $, H) {
    var M = S.selection ? S.selection() : S;
    M.property("__zoom", fl), S !== M ? k(S, V, $, H) : M.interrupt().each(function() {
      E(this, arguments).event(H).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, C.scaleBy = function(S, V, $, H) {
    C.scaleTo(S, function() {
      var M = this.__zoom.k, D = typeof V == "function" ? V.apply(this, arguments) : V;
      return M * D;
    }, $, H);
  }, C.scaleTo = function(S, V, $, H) {
    C.transform(S, function() {
      var M = t.apply(this, arguments), D = this.__zoom, I = $ == null ? w(M) : typeof $ == "function" ? $.apply(this, arguments) : $, Y = D.invert(I), K = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(_(h(D, K), I, Y), M, a);
    }, $, H);
  }, C.translateBy = function(S, V, $, H) {
    C.transform(S, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, H);
  }, C.translateTo = function(S, V, $, H, M) {
    C.transform(S, function() {
      var D = t.apply(this, arguments), I = this.__zoom, Y = H == null ? w(D) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Yi.translate(Y[0], Y[1]).scale(I.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), D, a);
    }, H, M);
  };
  function h(S, V) {
    return V = Math.max(i[0], Math.min(i[1], V)), V === S.k ? S : new Mn(V, S.x, S.y);
  }
  function _(S, V, $) {
    var H = V[0] - $[0] * S.k, M = V[1] - $[1] * S.k;
    return H === S.x && M === S.y ? S : new Mn(S.k, H, M);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, V, $, H) {
    S.on("start.zoom", function() {
      E(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var M = this, D = arguments, I = E(M, D).event(H), Y = t.apply(M, D), K = $ == null ? w(Y) : typeof $ == "function" ? $.apply(M, D) : $, Q = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), U = M.__zoom, W = typeof V == "function" ? V.apply(M, D) : V, re = l(U.invert(K).concat(Q / U.k), W.invert(K).concat(Q / W.k));
      return function(ge) {
        if (ge === 1) ge = W;
        else {
          var pe = re(ge), le = Q / pe[2];
          ge = new Mn(le, K[0] - pe[0] * le, K[1] - pe[1] * le);
        }
        I.zoom(null, ge);
      };
    });
  }
  function E(S, V, $) {
    return !$ && S.__zooming || new P(S, V);
  }
  function P(S, V) {
    this.that = S, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, V), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, V) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var V = jt(this.that).datum();
      u.call(
        S,
        this.that,
        new $p(S, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        V
      );
    }
  };
  function z(S, ...V) {
    if (!e.apply(this, arguments)) return;
    var $ = E(this, V).event(S), H = this.__zoom, M = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), D = rn(S);
    if ($.wheel)
      ($.mouse[0][0] !== D[0] || $.mouse[0][1] !== D[1]) && ($.mouse[1] = H.invert($.mouse[0] = D)), clearTimeout($.wheel);
    else {
      if (H.k === M) return;
      $.mouse = [D, H.invert(D)], ti(this), $.start();
    }
    Jr(S), $.wheel = setTimeout(I, y), $.zoom("mouse", n(_(h(H, M), $.mouse[0], $.mouse[1]), $.extent, a));
    function I() {
      $.wheel = null, $.end();
    }
  }
  function N(S, ...V) {
    if (f || !e.apply(this, arguments)) return;
    var $ = S.currentTarget, H = E(this, V, !0).event(S), M = jt(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", Q, !0), D = rn(S, $), I = S.clientX, Y = S.clientY;
    Yu(S.view), aa(S), H.mouse = [D, this.__zoom.invert(D)], ti(this), H.start();
    function K(U) {
      if (Jr(U), !H.moved) {
        var W = U.clientX - I, re = U.clientY - Y;
        H.moved = W * W + re * re > b;
      }
      H.event(U).zoom("mouse", n(_(H.that.__zoom, H.mouse[0] = rn(U, $), H.mouse[1]), H.extent, a));
    }
    function Q(U) {
      M.on("mousemove.zoom mouseup.zoom", null), qu(U.view, H.moved), Jr(U), H.event(U).end();
    }
  }
  function T(S, ...V) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, H = rn(S.changedTouches ? S.changedTouches[0] : S, this), M = $.invert(H), D = $.k * (S.shiftKey ? 0.5 : 2), I = n(_(h($, D), H, M), t.apply(this, V), a);
      Jr(S), s > 0 ? jt(this).transition().duration(s).call(k, I, H, S) : jt(this).call(C.transform, I, H, S);
    }
  }
  function A(S, ...V) {
    if (e.apply(this, arguments)) {
      var $ = S.touches, H = $.length, M = E(this, V, S.changedTouches.length === H).event(S), D, I, Y, K;
      for (aa(S), I = 0; I < H; ++I)
        Y = $[I], K = rn(Y, this), K = [K, this.__zoom.invert(K), Y.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== K[2] && (M.touch1 = K, M.taps = 0) : (M.touch0 = K, D = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), D && (M.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, v)), ti(this), M.start());
    }
  }
  function L(S, ...V) {
    if (this.__zooming) {
      var $ = E(this, V).event(S), H = S.changedTouches, M = H.length, D, I, Y, K;
      for (Jr(S), D = 0; D < M; ++D)
        I = H[D], Y = rn(I, this), $.touch0 && $.touch0[2] === I.identifier ? $.touch0[0] = Y : $.touch1 && $.touch1[2] === I.identifier && ($.touch1[0] = Y);
      if (I = $.that.__zoom, $.touch1) {
        var Q = $.touch0[0], U = $.touch0[1], W = $.touch1[0], re = $.touch1[1], ge = (ge = W[0] - Q[0]) * ge + (ge = W[1] - Q[1]) * ge, pe = (pe = re[0] - U[0]) * pe + (pe = re[1] - U[1]) * pe;
        I = h(I, Math.sqrt(ge / pe)), Y = [(Q[0] + W[0]) / 2, (Q[1] + W[1]) / 2], K = [(U[0] + re[0]) / 2, (U[1] + re[1]) / 2];
      } else if ($.touch0) Y = $.touch0[0], K = $.touch0[1];
      else return;
      $.zoom("touch", n(_(I, Y, K), $.extent, a));
    }
  }
  function R(S, ...V) {
    if (this.__zooming) {
      var $ = E(this, V).event(S), H = S.changedTouches, M = H.length, D, I;
      for (aa(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), D = 0; D < M; ++D)
        I = H[D], $.touch0 && $.touch0[2] === I.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === I.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (I = rn(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < x)) {
        var Y = jt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Ko(+S), C) : r;
  }, C.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Ko(!!S), C) : e;
  }, C.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Ko(!!S), C) : o;
  }, C.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Ko([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), C) : t;
  }, C.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], C) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, C.constrain = function(S) {
    return arguments.length ? (n = S, C) : n;
  }, C.duration = function(S) {
    return arguments.length ? (s = +S, C) : s;
  }, C.interpolate = function(S) {
    return arguments.length ? (l = S, C) : l;
  }, C.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? C : S;
  }, C.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, C) : Math.sqrt(b);
  }, C.tapDistance = function(S) {
    return arguments.length ? (x = +S, C) : x;
  }, C;
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
}, yi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(cr || (cr = {}));
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
var wi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(wi || (wi = {}));
const Ha = {
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
var kr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(kr || (kr = {}));
var wo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(wo || (wo = {}));
var _e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(_e || (_e = {}));
const vl = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function Ep(e, t) {
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
function gl(e, t, n) {
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
const Hp = (e) => "id" in e && "source" in e && "target" in e, Vp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), fs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ho = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Np = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : fs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? bi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return qi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xi(n);
}, Vo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = bi(r);
      n = qi(n, o);
    }
  }), Xi(n);
}, sc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...No(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, b = bo(s, Tr(u)), x = (v ?? 0) * (y ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Va = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function hl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function pl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Vo(e), l = gs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function zp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Dr.error005());
    else {
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
      ]);
    }
  else s && Or(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = Or(d) ? dr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Dr.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function lc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((y) => y.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Va(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
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
const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Lr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Lr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function uc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return dr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const ml = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, cc = (e, t, n = 15, r = 40) => {
  const o = ml(e.x, r, t.width - r) * n, i = ml(e.y, r, t.height - r) * n;
  return [o, i];
}, qi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Na = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Tr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = fs(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, bi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = fs(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, dc = (e, t) => Xi(qi(Na(e), Na(t))), bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, yl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
}, vs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? vs(s, a) : s;
}, fc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), gs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Lr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, xi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Or(e) {
  return e !== void 0 && e !== "parent";
}
function tr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function vc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Lp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function sa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = zn(e), s = No({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? vs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const hs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Tp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Op = ["INPUT", "SELECT", "TEXTAREA"];
function Ap(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Op.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const gc = (e) => "clientX" in e, zn = (e, t) => {
  var n, r;
  const o = gc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, wl = (e, t, n, r, o) => {
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
      ...hs(a)
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
    case _e.Left:
      return [t - jo(t - r, i), n];
    case _e.Right:
      return [t + jo(r - t, i), n];
    case _e.Top:
      return [t, n - jo(n - o, i)];
    case _e.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function hc({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: a = 0.25 }) {
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
  }), [d, f, v, y] = Ip({
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
    f,
    v,
    y
  ];
}
function pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Zp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Rp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = qi(bi(e), bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return bo(a, Xi(i)) > 0;
}
const Bp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Yp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), qp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Hp(e) ? n = { ...e } : n = {
    ...e,
    id: Bp(e)
  }, Yp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function za({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = pc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const xl = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Xp = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) => t === _e.Left || t === _e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, $l = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wp({ source: e, sourcePosition: t = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i }) {
  const a = xl[t], s = xl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Xp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, b;
  const x = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, _, w, k] = pc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    y = o.x ?? h, b = o.y ?? _;
    const E = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], P = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? E : P : v = d === "x" ? P : E;
  } else {
    const E = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? P : E : v = a.y === f ? E : P, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const R = Math.min(i - 1, i - L);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : C[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", R = a[d] === s[L], S = l[L] > u[L], V = l[L] < u[L];
      (a[d] === 1 && (!R && S || R && V) || a[d] !== 1 && (!R && V || R && S)) && (v = d === "x" ? E : P);
    }
    const z = { x: l.x + x.x, y: l.y + x.y }, N = { x: u.x + C.x, y: u.y + C.y }, T = Math.max(Math.abs(z.x - v[0].x), Math.abs(N.x - v[0].x)), A = Math.max(Math.abs(z.y - v[0].y), Math.abs(N.y - v[0].y));
    T >= A ? (y = (z.x + N.x) / 2, b = v[0].y) : (y = v[0].x, b = (z.y + N.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], y, b, w, k];
}
function Kp(e, t, n, r) {
  const o = Math.min($l(e, t) / 2, $l(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function $i({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, y] = Wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = Kp(c[C - 1], x, c[C + 1], a) : h = `${C === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, y];
}
function Cl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Cl(n) || !Cl(r))
    return null;
  const o = n.internals.handleBounds || _l(n.handles), i = r.internals.handleBounds || _l(r.handles), a = kl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = kl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Dr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || _e.Bottom, u = (s == null ? void 0 : s.position) || _e.Top, c = xo(n, a, l), d = xo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function _l(e) {
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
function xo(e, t, n = _e.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? tr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case _e.Top:
      return { x: o + a / 2, y: i };
    case _e.Right:
      return { x: o + a, y: i + s / 2 };
    case _e.Bottom:
      return { x: o + a / 2, y: i + s };
    case _e.Left:
      return { x: o, y: i + s / 2 };
  }
}
function kl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Da(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Fp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Da(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function Up(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case _e.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case _e.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case _e.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const ps = {
  nodeOrigin: [0, 0],
  nodeExtent: yi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Gp = {
  ...ps,
  checkEquality: !0
};
function ms(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Jp(e, t, n) {
  const r = ms(ps, n);
  for (const o of e.values())
    if (o.parentId)
      ys(o, e, t, r);
    else {
      const i = Ho(o, r.nodeOrigin), a = Or(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, tr(o));
      o.internals.positionAbsolute = s;
    }
}
function mc(e, t, n, r) {
  var o, i;
  const a = ms(Gp, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Ho(u, a.nodeOrigin), f = Or(u.extent) ? u.extent : a.nodeExtent, v = dr(d, f, tr(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: yc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ys(c, t, n, r);
  }
}
function Qp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ys(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = ms(ps, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Qp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = e0(e, l, i, a, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function yc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function e0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = tr(e), l = Ho(e, n), u = Or(e.extent) ? dr(l, e.extent, s) : l;
  let c = dr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = uc(c, s, t));
  const d = yc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function t0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Tr(l), c = dc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = tr(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], _ = (C - f.height) * v[1];
    (y > 0 || b > 0 || h || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + h,
        y: l.position.y - b + _
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + y,
          y: w.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || y || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (y ? v[0] * y - h : 0),
        height: C + (b ? v[1] * b - _ : 0)
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
  for (const f of e.values()) {
    const v = t.get(f.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const y = hs(f.nodeElement), b = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), C = Or(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = uc(h, y, t.get(v.parentId)) : C && (h = dr(h, C, y));
      const _ = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: wl("source", f.nodeElement, x, c, v.id),
            target: wl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, _), v.parentId && ys(_, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Tr(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = t0(d, t, n, o);
    l.push(...f);
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
function Sl(e, t, n, r, o, i) {
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
function wc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Sl("source", l, c, e, o, a), Sl("target", l, u, e, i, s), t.set(r.id, r);
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
function la({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function y({ noDragClassName: x, handleSelector: C, domNode: h, isSelectable: _, nodeId: w, nodeClickDistance: k = 0 }) {
    f = jt(h);
    function E({ x: T, y: A }, L) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: V, snapToGrid: $, nodeOrigin: H, onNodeDrag: M, onSelectionDrag: D, onError: I, updateNodePositions: Y } = t();
      i = { x: T, y: A };
      let K = !1, Q = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const U = Vo(s);
        Q = Na(U);
      }
      for (const [U, W] of s) {
        if (!R.has(U))
          continue;
        let re = { x: T - W.distance.x, y: A - W.distance.y };
        $ && (re = vs(re, V));
        let ge = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !W.extent) {
          const { positionAbsolute: Ve } = W.internals, ie = Ve.x - Q.x + S[0][0], ae = Ve.x + W.measured.width - Q.x2 + S[1][0], Me = Ve.y - Q.y + S[0][1], Pe = Ve.y + W.measured.height - Q.y2 + S[1][1];
          ge = [
            [ie, Me],
            [ae, Pe]
          ];
        }
        const { position: pe, positionAbsolute: le } = zp({
          nodeId: U,
          nextPosition: re,
          nodeLookup: R,
          nodeExtent: ge,
          nodeOrigin: H,
          onError: I
        });
        K = K || W.position.x !== pe.x || W.position.y !== pe.y, W.position = pe, W.internals.positionAbsolute = le;
      }
      if (K && (Y(s, !0), L && (r || M || !w && D))) {
        const [U, W] = la({
          nodeId: w,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(L, s, U, W), M == null || M(L, U, W), w || D == null || D(L, W);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: T, panBy: A, autoPanSpeed: L, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, V] = cc(u, c, L);
      (S !== 0 || V !== 0) && (i.x = (i.x ?? 0) - S / T[2], i.y = (i.y ?? 0) - V / T[2], await A({ x: S, y: V }) && E(i, null)), a = requestAnimationFrame(P);
    }
    function z(T) {
      var A;
      const { nodeLookup: L, multiSelectionActive: R, nodesDraggable: S, transform: V, snapGrid: $, snapToGrid: H, selectNodesOnDrag: M, onNodeDragStart: D, onSelectionDragStart: I, unselectNodesAndEdges: Y } = t();
      d = !0, (!M || !_) && !R && w && ((A = L.get(w)) != null && A.selected || Y()), _ && M && w && (e == null || e(w));
      const K = sa(T.sourceEvent, { transform: V, snapGrid: $, snapToGrid: H, containerBounds: c });
      if (i = K, s = i0(L, S, K, w), s.size > 0 && (n || D || !w && I)) {
        const [Q, U] = la({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(T.sourceEvent, s, Q, U), D == null || D(T.sourceEvent, Q, U), w || I == null || I(T.sourceEvent, U);
      }
    }
    const N = Ag().clickDistance(k).on("start", (T) => {
      const { domNode: A, nodeDragThreshold: L, transform: R, snapGrid: S, snapToGrid: V } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, v = !1, L === 0 && z(T), i = sa(T.sourceEvent, { transform: R, snapGrid: S, snapToGrid: V, containerBounds: c }), u = zn(T.sourceEvent, c);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: A, transform: L, snapGrid: R, snapToGrid: S, nodeDragThreshold: V, nodeLookup: $ } = t(), H = sa(T.sourceEvent, { transform: L, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !$.has(w)) && (v = !0), !v) {
        if (!l && A && d && (l = !0, P()), !d) {
          const M = H.xSnapped - (i.x ?? 0), D = H.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + D * D) > V && z(T);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && s && d && (u = zn(T.sourceEvent, c), E(H, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: A, updateNodePositions: L, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (L(s, !1), o || R || !w && S) {
          const [V, $] = la({
            nodeId: w,
            dragItems: s,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(T.sourceEvent, s, V, $), R == null || R(T.sourceEvent, V, $), w || S == null || S(T.sourceEvent, $);
        }
      }
    }).filter((T) => {
      const A = T.target;
      return !T.button && (!x || !Pl(A, `.${x}`, h)) && (!C || Pl(A, C, h));
    });
    f.call(N);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
    destroy: b
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
    bo(o, Tr(i)) > 0 && r.push(i);
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
      const { x: f, y: v } = xo(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (a = [{ ...d, x: f, y: v }], s = y) : y === s && a.push({ ...d, x: f, y: v }));
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
function xc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...xo(u, d, d.position, !0) } : d;
}
function $c(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function c0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Cc = () => !0;
function d0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: b, onConnectEnd: x, isValidConnection: C = Cc, onReconnectEnd: h, updateConnection: _, getTransform: w, getFromHandle: k, autoPanSpeed: E }) {
  const P = Tp(e.target);
  let z = 0, N;
  const { x: T, y: A } = zn(e), L = P == null ? void 0 : P.elementFromPoint(T, A), R = $c(i, L), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !R)
    return;
  const V = xc(o, R, r, l, t);
  if (!V)
    return;
  let $ = zn(e, S), H = !1, M = null, D = !1, I = null;
  function Y() {
    if (!c || !S)
      return;
    const [pe, le] = cc($, S, E);
    f({ x: pe, y: le }), z = requestAnimationFrame(Y);
  }
  const K = {
    ...V,
    nodeId: o,
    type: R,
    position: V.position
  }, Q = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: xo(Q, K, _e.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: Q,
    to: $,
    toHandle: null,
    toPosition: vl[K.position],
    toNode: null
  };
  _(U);
  let W = U;
  y == null || y(e, { nodeId: o, handleId: r, handleType: R });
  function re(pe) {
    if (!k() || !K) {
      ge(pe);
      return;
    }
    const le = w();
    $ = zn(pe, S), N = u0(No($, le, !1, [1, 1]), n, l, K), H || (Y(), H = !0);
    const Ve = _c(pe, {
      handle: N,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    I = Ve.handleDomNode, M = Ve.connection, D = c0(!!N, Ve.isValid);
    const ie = {
      // from stays the same
      ...W,
      isValid: D,
      to: N && D ? fc({ x: N.x, y: N.y }, le) : $,
      toHandle: Ve.toHandle,
      toPosition: D && Ve.toHandle ? Ve.toHandle.position : vl[K.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    D && N && W.toHandle && ie.toHandle && W.toHandle.type === ie.toHandle.type && W.toHandle.nodeId === ie.toHandle.nodeId && W.toHandle.id === ie.toHandle.id && W.to.x === ie.to.x && W.to.y === ie.to.y || (_(ie), W = ie);
  }
  function ge(pe) {
    (N || I) && M && D && (b == null || b(M));
    const { inProgress: le, ...Ve } = W, ie = {
      ...Ve,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(pe, ie), i && (h == null || h(pe, ie)), v(), cancelAnimationFrame(z), H = !1, D = !1, M = null, I = null, P.removeEventListener("mousemove", re), P.removeEventListener("mouseup", ge), P.removeEventListener("touchmove", re), P.removeEventListener("touchend", ge);
  }
  P.addEventListener("mousemove", re), P.addEventListener("mouseup", ge), P.addEventListener("touchmove", re), P.addEventListener("touchend", ge);
}
function _c(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Cc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = zn(e), b = a.elementFromPoint(v, y), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, C = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = $c(void 0, x), _ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!_ || !h)
      return C;
    const P = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    C.connection = P;
    const z = k && E && (n === cr.Strict ? d && h === "source" || !d && h === "target" : _ !== r || w !== o);
    C.isValid = z && u(P), C.toHandle = xc(_, h, w, c, n, !1);
  }
  return C;
}
const f0 = {
  onPointerDown: d0,
  isValid: _c
};
function v0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = w[2] * Math.pow(2, k);
      t.scaleTo(E);
    };
    let b = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, C = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], E = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), z = {
        x: w[0] - E[0] * P,
        y: w[1] - E[1] * P
      }, N = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: w[2]
      }, N, s);
    }, h = ac().on("start", x).on("zoom", d ? C : null).on("zoom.wheel", f ? y : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: rn
  };
}
const g0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ua = ({ x: e, y: t, zoom: n }) => Yi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), kc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ca = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Sc = (e) => {
  const t = e.ctrlKey && xi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function h0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (xr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = rn(c), C = Sc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === Kn.Vertical ? 0 : c.deltaX * f, y = o === Kn.Horizontal ? 0 : c.deltaY * f;
    !xi() && c.shiftKey && o !== Kn.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(y / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Wi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function p0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || xr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function m0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Wi(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function y0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && kc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Wi(i.transform)));
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && kc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && g0(e.prevViewport, a.transform))) {
      const l = Wi(a.transform);
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
function b0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (xr(c, `${u}-flow__node`) || xr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || a || xr(c, s) && c.type === "wheel" || xr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
  };
}
function x0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = ac().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = jt(e).call(f);
  _({
    x: i.x,
    y: i.y,
    zoom: Lr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Sc);
  function x(L, R) {
    return v ? new Promise((S) => {
      f == null || f.transform(ca(v, R == null ? void 0 : R.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: L, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: V, panOnScroll: $, panOnDrag: H, panOnScrollMode: M, panOnScrollSpeed: D, preventScrolling: I, zoomOnPinch: Y, zoomOnScroll: K, zoomOnDoubleClick: Q, zoomActivationKeyPressed: U, lib: W, onTransformChange: re }) {
    V && !c.isZoomingOrPanning && h();
    const ge = $ && !U && !V ? h0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: M,
      panOnScrollSpeed: D,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : p0({
      noWheelClassName: L,
      preventScrolling: I,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", ge, { passive: !1 }), !V) {
      const le = m0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", le);
      const Ve = y0({
        zoomPanValues: c,
        panOnDrag: H,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: re
      });
      f.on("zoom", Ve);
      const ie = w0({
        zoomPanValues: c,
        panOnDrag: H,
        panOnScroll: $,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const pe = b0({
      zoomActivationKeyPressed: U,
      panOnDrag: H,
      zoomOnScroll: K,
      panOnScroll: $,
      zoomOnDoubleClick: Q,
      zoomOnPinch: Y,
      userSelectionActive: V,
      noPanClassName: R,
      noWheelClassName: L,
      lib: W
    });
    f.filter(pe), Q ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function _(L, R, S) {
    const V = ua(L), $ = f == null ? void 0 : f.constrain()(V, R, S);
    return $ && await x($), new Promise((H) => H($));
  }
  async function w(L, R) {
    const S = ua(L);
    return await x(S, R), new Promise((V) => V(S));
  }
  function k(L) {
    if (v) {
      const R = ua(L), S = v.property("__zoom");
      (S.k !== L.zoom || S.x !== L.x || S.y !== L.y) && (f == null || f.transform(v, R, null, { sync: !0 }));
    }
  }
  function E() {
    const L = v ? ic(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function P(L, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(ca(v, R == null ? void 0 : R.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function z(L, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(ca(v, R == null ? void 0 : R.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L) {
    f == null || f.scaleExtent(L);
  }
  function T(L) {
    f == null || f.translateExtent(L);
  }
  function A(L) {
    const R = !Hn(L) || L < 0 ? 0 : L;
    f == null || f.clickDistance(R);
  }
  return {
    update: C,
    destroy: h,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: E,
    scaleTo: P,
    scaleBy: z,
    setScaleExtent: N,
    setTranslateExtent: T,
    syncViewport: k,
    setClickDistance: A
  };
}
var El;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(El || (El = {}));
var $0 = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function Gn(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(Q, "$connectable", n), i = () => J(pe, "$connectionRadius", n), a = () => J(re, "$domNode", n), s = () => J(ge, "$nodeLookup", n), l = () => J(W, "$connectionMode", n), u = () => J(ie, "$lib", n), c = () => J(Xe, "$autoPanOnConnect", n), d = () => J(ze, "$flowId", n), f = () => J(Ve, "$isValidConnectionStore", n), v = () => J(Me, "$onedgecreate", n), y = () => J(ce, "$onConnectAction", n), b = () => J(Ce, "$onConnectStartAction", n), x = () => J(We, "$onConnectEndAction", n), C = () => J(le, "$viewport", n), h = () => J(st, "$connection", n), _ = () => J(Ue, "$edges", n), w = () => J(ue, "$connectionLookup", n), k = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), P = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne(), N = /* @__PURE__ */ ne(), T = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), L = /* @__PURE__ */ ne();
  let R = m(t, "id", 12, void 0), S = m(t, "type", 12, "source"), V = m(t, "position", 28, () => _e.Top), $ = m(t, "style", 12, void 0), H = m(t, "isValidConnection", 12, void 0), M = m(t, "onconnect", 12, void 0), D = m(t, "ondisconnect", 12, void 0), I = m(t, "isConnectable", 12, void 0), Y = m(t, "class", 12, void 0);
  const K = sr("svelteflow__node_id"), Q = sr("svelteflow__node_connectable"), U = qe(), {
    connectionMode: W,
    domNode: re,
    nodeLookup: ge,
    connectionRadius: pe,
    viewport: le,
    isValidConnection: Ve,
    lib: ie,
    addEdge: ae,
    onedgecreate: Me,
    panBy: Pe,
    cancelConnection: Be,
    updateConnection: te,
    autoPanOnConnect: Xe,
    edges: Ue,
    connectionLookup: ue,
    onconnect: ce,
    onconnectstart: Ce,
    onconnectend: We,
    flowId: ze,
    connection: st
  } = U;
  function it(He) {
    const nt = gc(He);
    (nt && He.button === 0 || !nt) && f0.onPointerDown(He, {
      handleId: g(P),
      nodeId: K,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: H() ?? f(),
      updateConnection: te,
      cancelConnection: Be,
      panBy: Pe,
      onConnect: (Ae) => {
        var Le;
        const rt = v() ? v()(Ae) : Ae;
        rt && (ae(rt), (Le = y()) == null || Le(Ae));
      },
      onConnectStart: (Ae, Le) => {
        var rt;
        (rt = b()) == null || rt(Ae, {
          nodeId: Le.nodeId,
          handleId: Le.handleId,
          handleType: Le.handleType
        });
      },
      onConnectEnd: (Ae, Le) => {
        var rt;
        (rt = x()) == null || rt(Ae, Le);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ee = /* @__PURE__ */ ne(null), Oe = /* @__PURE__ */ ne();
  ve(() => G(S()), () => {
    F(k, S() === "target");
  }), ve(
    () => (G(I()), o()),
    () => {
      F(E, I() !== void 0 ? I() : o());
    }
  ), ve(() => G(R()), () => {
    F(P, R() || null);
  }), ve(
    () => (G(M()), G(D()), _(), w(), G(S()), G(R())),
    () => {
      (M() || D()) && (_(), F(Oe, w().get(`${K}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), ve(
    () => (g(ee), g(Oe), G(D()), G(M())),
    () => {
      if (g(ee) && !Ep(g(Oe), g(ee))) {
        const He = g(Oe) ?? /* @__PURE__ */ new Map();
        gl(g(ee), He, D()), gl(He, g(ee), M());
      }
      F(ee, g(Oe) ?? /* @__PURE__ */ new Map());
    }
  ), ve(() => h(), () => {
    F(z, !!h().fromHandle);
  }), ve(
    () => (h(), G(S()), g(P)),
    () => {
      var He, nt, Ae;
      F(N, ((He = h().fromHandle) == null ? void 0 : He.nodeId) === K && ((nt = h().fromHandle) == null ? void 0 : nt.type) === S() && ((Ae = h().fromHandle) == null ? void 0 : Ae.id) === g(P));
    }
  ), ve(
    () => (h(), G(S()), g(P)),
    () => {
      var He, nt, Ae;
      F(T, ((He = h().toHandle) == null ? void 0 : He.nodeId) === K && ((nt = h().toHandle) == null ? void 0 : nt.type) === S() && ((Ae = h().toHandle) == null ? void 0 : Ae.id) === g(P));
    }
  ), ve(
    () => (l(), h(), G(S()), g(P)),
    () => {
      var He, nt, Ae;
      F(A, l() === cr.Strict ? ((He = h().fromHandle) == null ? void 0 : He.type) !== S() : K !== ((nt = h().fromHandle) == null ? void 0 : nt.nodeId) || g(P) !== ((Ae = h().fromHandle) == null ? void 0 : Ae.id));
    }
  ), ve(() => (g(T), h()), () => {
    F(L, g(T) && h().isValid);
  }), vt(), De();
  var he = $0();
  ye(he, "data-nodeid", K);
  let Qt;
  var en = X(he);
  pt(en, t, "default", {}), q(he), ke(
    (He, nt) => {
      ye(he, "data-handleid", g(P)), ye(he, "data-handlepos", V()), ye(he, "data-id", `${d() ?? ""}-${K ?? ""}-${R() || ""}-${S() ?? ""}`), Qt = mt(he, 1, He, null, Qt, nt), dt(he, $());
    },
    [
      () => fn(St([
        "svelte-flow__handle",
        `svelte-flow__handle-${V()}`,
        "nodrag",
        "nopan",
        V(),
        Y()
      ])),
      () => ({
        valid: g(L),
        connectingto: g(T),
        connectingfrom: g(N),
        source: !g(k),
        target: g(k),
        connectablestart: g(E),
        connectableend: g(E),
        connectable: g(E),
        connectionindicator: g(E) && (!g(z) || g(A))
      })
    ],
    me
  ), Qe("mousedown", he, it), Qe("touchstart", he, it), O(e, he);
  var hn = fe({
    get id() {
      return R();
    },
    set id(He) {
      R(He), p();
    },
    get type() {
      return S();
    },
    set type(He) {
      S(He), p();
    },
    get position() {
      return V();
    },
    set position(He) {
      V(He), p();
    },
    get style() {
      return $();
    },
    set style(He) {
      $(He), p();
    },
    get isValidConnection() {
      return H();
    },
    set isValidConnection(He) {
      H(He), p();
    },
    get onconnect() {
      return M();
    },
    set onconnect(He) {
      M(He), p();
    },
    get ondisconnect() {
      return D();
    },
    set ondisconnect(He) {
      D(He), p();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(He) {
      I(He), p();
    },
    get class() {
      return Y();
    },
    set class(He) {
      Y(He), p();
    }
  });
  return r(), hn;
}
se(
  Gn,
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
var C0 = /* @__PURE__ */ oe("<!> <!>", 1);
function Ci(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  De();
  var a = C0(), s = be(a);
  const l = /* @__PURE__ */ me(() => o() ?? _e.Top);
  Gn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ me(() => i() ?? _e.Bottom);
  return Gn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), ke(() => {
    var f;
    return Bt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), O(e, a), fe({
    get data() {
      return r();
    },
    set data(f) {
      r(f), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), p();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), p();
    }
  });
}
se(
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
var _0 = /* @__PURE__ */ oe(" <!>", 1);
function Pc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  De(), Ne();
  var i = _0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ me(() => o() ?? _e.Bottom);
  return Gn(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), p();
    }
  });
}
se(Pc, { data: {}, sourcePosition: {} }, [], [], !0);
var k0 = /* @__PURE__ */ oe(" <!>", 1);
function Ec(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), de(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  De(), Ne();
  var i = k0(), a = be(i), s = Z(a);
  const l = /* @__PURE__ */ me(() => o() ?? _e.Top);
  return Gn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), ke(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), p();
    }
  });
}
se(Ec, { data: {}, targetPosition: {} }, [], [], !0);
function Mc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
se(Mc, {}, [], [], !0);
function Ml(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function _i(e, { target: t, domNode: n }) {
  return Ml(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ml(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var S0 = /* @__PURE__ */ oe("<div><!></div>");
function Hc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(i, "$domNode", n), { domNode: i } = qe();
  De();
  var a = S0(), s = X(a);
  pt(s, t, "default", {}), q(a), ht(a, (l, u) => _i == null ? void 0 : _i(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, a), fe(), r();
}
se(Hc, {}, ["default"], [], !0);
function Vc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = qe();
  return (s) => {
    const l = j(e).get(s);
    if (!l) {
      console.warn("012", Dr.error012(s));
      return;
    }
    (l.selectable || j(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && j(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var P0 = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Nc(e, t) {
  de(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = Vc(), a = sr("svelteflow__edge_id");
  return De(), Hc(e, {
    children: (s, l) => {
      var u = P0();
      let c;
      var d = X(u);
      pt(d, t, "default", {}), q(u), ke(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Qe("keyup", u, () => {
      }), Qe("click", u, () => {
        a && i(a);
      }), O(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get style() {
      return n();
    },
    set style(s) {
      n(s), p();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), p();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), p();
    }
  });
}
se(Nc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var E0 = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), M0 = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  de(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  De();
  var y = M0(), b = be(y), x = Z(b);
  {
    var C = (w) => {
      var k = E0();
      ye(k, "stroke-opacity", 0), ye(k, "stroke-width", v), ke(() => ye(k, "d", r())), O(w, k);
    };
    xe(x, (w) => {
      v && w(C);
    });
  }
  var h = Z(x);
  {
    var _ = (w) => {
      Nc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, E) => {
          Ne();
          var P = Re();
          ke(() => Bt(P, o())), O(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    xe(h, (w) => {
      o() && w(_);
    });
  }
  return ke(
    (w) => {
      ye(b, "id", n()), ye(b, "d", r()), mt(b, 0, w), ye(b, "marker-start", l()), ye(b, "marker-end", u()), dt(b, c());
    },
    [
      () => fn(St(["svelte-flow__edge-path", f()]))
    ],
    me
  ), O(e, y), fe({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), p();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), p();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), p();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), p();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), p();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), p();
    }
  });
}
se(
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
function ki(e, t) {
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ve(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(hc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), De(), zo(e, {
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
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
se(
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ve(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))($i({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), De(), zo(e, {
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
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
se(
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
function Dc(e, t) {
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return ve(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(y()), G(b())),
    () => {
      ((x) => (F(r, x[0]), F(o, x[1]), F(i, x[2])))(za({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: b()
      }));
    }
  ), vt(), De(), zo(e, {
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
    set label(x) {
      a(x), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), p();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), p();
    },
    get targetX() {
      return y();
    },
    set targetX(x) {
      y(x), p();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), p();
    }
  });
}
se(
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
function Lc(e, t) {
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
  ]), de(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ve(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(b()), G(x()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))($i({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), vt(), De(), zo(e, {
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
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
se(
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
function V0(e, t) {
  const n = e.set, r = t.set;
  let o = j(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const N0 = (e, t, n) => {
  if (!n)
    return;
  const r = j(e), o = t.set, i = n.set;
  let a = n ? j(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, z0 = (e, t, n, r = [0, 0], o = yi) => {
  const { subscribe: i, set: a, update: s } = we([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (mc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, y = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, D0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = we([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
    wc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Tc = {
  input: Pc,
  output: Ec,
  default: Ci,
  group: Mc
}, Oc = {
  straight: Dc,
  smoothstep: zc,
  default: ki,
  step: Lc
}, L0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? yi;
  mc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), wc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = Vo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = gs(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: z0(e, s, l, d, f),
    nodeLookup: Wt(s),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: D0(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(d),
    nodeDragThreshold: we(1),
    nodeExtent: we(f),
    translateExtent: we(yi),
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
    selectionMode: we(wi.Partial),
    nodeTypes: we(Tc),
    edgeTypes: we(Oc),
    viewport: we(v),
    connectionMode: we(cr.Strict),
    domNode: we(null),
    connection: Wt(Ha),
    connectionLineType: we(kr.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: Wt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: we(!1),
    onerror: we(Dp),
    ondelete: we(void 0),
    onedgecreate: we(void 0),
    onconnect: we(void 0),
    onconnectstart: we(void 0),
    onconnectend: we(void 0),
    onbeforedelete: we(void 0),
    nodesInitialized: we(!1),
    edgesInitialized: we(!1),
    viewportInitialized: we(!1),
    initialized: Wt(!1)
  };
};
function T0(e) {
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
    return u && c && Rp({
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
      zIndex: Zp({
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
function O0(e) {
  return Wn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? sc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const Ki = Symbol();
function Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = L0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l($) {
    s.nodeTypes.set({
      ...Tc,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...Oc,
      ...$
    });
  }
  function c($) {
    const H = j(s.edges);
    s.edges.set(qp($, H));
  }
  const d = ($, H = !1) => {
    var M;
    const D = j(s.nodeLookup);
    for (const [I, Y] of $) {
      const K = (M = D.get(I)) == null ? void 0 : M.internals.userNode;
      K && (K.position = Y.position, K.dragging = H);
    }
    s.nodes.update((I) => I);
  };
  function f($) {
    var H, M, D;
    const I = j(s.nodeLookup), Y = j(s.parentLookup), { changes: K, updatedInternals: Q } = n0($, I, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (Q) {
      if (Jp(I, Y, { nodeOrigin: i, nodeExtent: a }), !j(s.fitViewOnInitDone) && j(s.fitViewOnInit)) {
        const U = j(s.fitViewOptions), W = y({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const U of K) {
        const W = (H = I.get(U.id)) == null ? void 0 : H.internals.userNode;
        if (W)
          switch (U.type) {
            case "dimensions": {
              const re = { ...W.measured, ...U.dimensions };
              U.setAttributes && (W.width = ((M = U.dimensions) == null ? void 0 : M.width) ?? W.width, W.height = ((D = U.dimensions) == null ? void 0 : D.height) ?? W.height), W.measured = re;
              break;
            }
            case "position":
              W.position = U.position ?? W.position;
              break;
          }
      }
      s.nodes.update((U) => U), j(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const H = j(s.panZoom), M = j(s.domNode);
    if (!H || !M)
      return Promise.resolve(!1);
    const { width: D, height: I } = hs(M), Y = hl(j(s.nodeLookup), $);
    return pl({
      nodes: Y,
      width: D,
      height: I,
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: H
    }, $);
  }
  function y($) {
    const H = j(s.panZoom);
    if (!H)
      return !1;
    const M = hl(j(s.nodeLookup), $);
    return pl({
      nodes: M,
      width: j(s.width),
      height: j(s.height),
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: H
    }, $), M.size > 0;
  }
  function b($, H) {
    const M = j(s.panZoom);
    return M ? M.scaleBy($, H) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function C($) {
    return b(1 / 1.2, $);
  }
  function h($) {
    const H = j(s.panZoom);
    H && (H.setScaleExtent([$, j(s.maxZoom)]), s.minZoom.set($));
  }
  function _($) {
    const H = j(s.panZoom);
    H && (H.setScaleExtent([j(s.minZoom), $]), s.maxZoom.set($));
  }
  function w($) {
    const H = j(s.panZoom);
    H && (H.setTranslateExtent($), s.translateExtent.set($));
  }
  function k($) {
    let H = !1;
    return $.forEach((M) => {
      M.selected && (M.selected = !1, H = !0);
    }), H;
  }
  function E($) {
    var H;
    (H = j(s.panZoom)) == null || H.setClickDistance($);
  }
  function P($) {
    k(($ == null ? void 0 : $.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), k(($ == null ? void 0 : $.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var H;
    if ($) {
      const M = j(s.nodes), D = j(s.edges), I = M.filter((U) => U.selected), Y = D.filter((U) => U.selected), { nodes: K, edges: Q } = await lc({
        nodesToRemove: I,
        edgesToRemove: Y,
        nodes: M,
        edges: D,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (K.length || Q.length) && (s.nodes.update((U) => U.filter((W) => !K.some((re) => re.id === W.id))), s.edges.update((U) => U.filter((W) => !Q.some((re) => re.id === W.id))), (H = j(s.ondelete)) == null || H({
        nodes: K,
        edges: Q
      }));
    }
  });
  function z($) {
    const H = j(s.multiselectionKeyPressed);
    s.nodes.update((M) => M.map((D) => {
      const I = $.includes(D.id), Y = H && D.selected || I;
      return D.selected = Y, D;
    })), H || s.edges.update((M) => M.map((D) => (D.selected = !1, D)));
  }
  function N($) {
    const H = j(s.multiselectionKeyPressed);
    s.edges.update((M) => M.map((D) => {
      const I = $.includes(D.id), Y = H && D.selected || I;
      return D.selected = Y, D;
    })), H || s.nodes.update((M) => M.map((D) => (D.selected = !1, D)));
  }
  function T($) {
    var H;
    const M = (H = j(s.nodes)) == null ? void 0 : H.find((D) => D.id === $);
    if (!M) {
      console.warn("012", Dr.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), M.selected ? M.selected && j(s.multiselectionKeyPressed) && P({ nodes: [M], edges: [] }) : z([$]);
  }
  function A($) {
    const H = j(s.viewport);
    return r0({
      delta: $,
      panZoom: j(s.panZoom),
      transform: [H.x, H.y, H.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const L = we(Ha), R = ($) => {
    L.set({ ...$ });
  };
  function S() {
    L.set(Ha);
  }
  function V() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: T0(s),
    visibleNodes: O0(s),
    connection: Wn([L, s.viewport], ([$, H]) => $.inProgress ? {
      ...$,
      to: No($.to, [H.x, H.y, H.zoom])
    } : { ...$ }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([$, H, M]) => Fp($, { defaultColor: H, id: M })),
    initialized: (() => {
      let $ = !1;
      const H = j(s.nodes).length, M = j(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([D, I, Y]) => $ || (H === 0 ? $ = Y : M === 0 ? $ = Y && D : $ = Y && D && I, $));
    })(),
    // actions
    syncNodeStores: ($) => H0(s.nodes, $),
    syncEdgeStores: ($) => V0(s.edges, $),
    syncViewport: ($) => N0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: C,
    fitView: ($) => v($),
    setMinZoom: h,
    setMaxZoom: _,
    setTranslateExtent: w,
    setPaneClickDistance: E,
    unselectNodesAndEdges: P,
    addSelectedNodes: z,
    addSelectedEdges: N,
    handleNodeSelection: T,
    panBy: A,
    updateConnection: R,
    cancelConnection: S,
    reset: V
  };
}
function qe() {
  const e = sr(Ki);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function A0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Vr(Ki, {
    getStore: () => s
  }), s;
}
function Hl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = x0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var I0 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Z0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Ic(e, t) {
  de(t, !1), Je(e, Z0);
  const [n, r] = tt(), o = () => J(M, "$panActivationKeyPressed", n), i = () => J(R, "$minZoom", n), a = () => J(S, "$maxZoom", n), s = () => J(D, "$zoomActivationKeyPressed", n), l = () => J(L, "$selectionRect", n), u = () => J($, "$translateExtent", n), c = () => J(H, "$lib", n), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let y = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), C = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), _ = m(t, "preventScrolling", 12), w = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), P = m(t, "panOnDrag", 12), z = m(t, "panOnScroll", 12), N = m(t, "paneClickDistance", 12);
  const {
    viewport: T,
    panZoom: A,
    selectionRect: L,
    minZoom: R,
    maxZoom: S,
    dragging: V,
    translateExtent: $,
    lib: H,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: D,
    viewportInitialized: I
  } = qe(), Y = (W) => T.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Jt(() => {
    di(I, !0);
  }), ve(() => G(y()), () => {
    F(d, y() || { x: 0, y: 0, zoom: 1 });
  }), ve(
    () => (o(), G(P())),
    () => {
      F(f, o() || P());
    }
  ), ve(
    () => (o(), G(z())),
    () => {
      F(v, o() || z());
    }
  ), vt(), De();
  var K = I0(), Q = X(K);
  pt(Q, t, "default", {}), q(K), ht(K, (W, re) => Hl == null ? void 0 : Hl(W, re), () => ({
    viewport: T,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: V,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: E(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || Kn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: N(),
    onTransformChange: Y
  })), O(e, K);
  var U = fe({
    get initialViewport() {
      return y();
    },
    set initialViewport(W) {
      y(W), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), p();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), p();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(W) {
      C(W), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(W) {
      h(W), p();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(W) {
      _(W), p();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(W) {
      w(W), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), p();
    },
    get zoomOnPinch() {
      return E();
    },
    set zoomOnPinch(W) {
      E(W), p();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(W) {
      P(W), p();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(W) {
      z(W), p();
    },
    get paneClickDistance() {
      return N();
    },
    set paneClickDistance(W) {
      N(W), p();
    }
  });
  return r(), U;
}
se(
  Ic,
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
function Vl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Nl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ oe("<div><!></div>");
const B0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  de(t, !1), Je(e, B0);
  const [n, r] = tt(), o = () => J(S, "$panActivationKeyPressed", n), i = () => J(L, "$selectionKeyPressed", n), a = () => J(T, "$selectionRect", n), s = () => J(N, "$elementsSelectable", n), l = () => J(A, "$selectionRectMode", n), u = () => J(E, "$edges", n), c = () => J(k, "$nodeLookup", n), d = () => J(P, "$viewport", n), f = () => J(R, "$selectionMode", n), v = () => J(z, "$dragging", n), y = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne();
  let C = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const _ = Ai(), {
    nodes: w,
    nodeLookup: k,
    edges: E,
    viewport: P,
    dragging: z,
    elementsSelectable: N,
    selectionRect: T,
    selectionRectMode: A,
    selectionKeyPressed: L,
    selectionMode: R,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: V
  } = qe();
  let $ = /* @__PURE__ */ ne(), H = null, M = [], D = !1;
  function I(ie) {
    if (D) {
      D = !1;
      return;
    }
    _("paneclick", { event: ie }), V(), A.set(null);
  }
  function Y(ie) {
    var ae, Me;
    if (H = g($).getBoundingClientRect(), !N || !g(b) || ie.button !== 0 || ie.target !== g($) || !H)
      return;
    (Me = (ae = ie.target) == null ? void 0 : ae.setPointerCapture) == null || Me.call(ae, ie.pointerId);
    const { x: Pe, y: Be } = zn(ie, H);
    V(), T.set({
      width: 0,
      height: 0,
      startX: Pe,
      startY: Be,
      x: Pe,
      y: Be
    });
  }
  function K(ie) {
    if (!g(b) || !H || !a())
      return;
    D = !0;
    const ae = zn(ie, H), Me = a().startX ?? 0, Pe = a().startY ?? 0, Be = {
      ...a(),
      x: ae.x < Me ? ae.x : Me,
      y: ae.y < Pe ? ae.y : Pe,
      width: Math.abs(ae.x - Me),
      height: Math.abs(ae.y - Pe)
    }, te = M.map((ce) => ce.id), Xe = Va(M, u()).map((ce) => ce.id);
    M = sc(
      c(),
      Be,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === wi.Partial,
      !0
    );
    const Ue = Va(M, u()).map((ce) => ce.id), ue = M.map((ce) => ce.id);
    (te.length !== ue.length || ue.some((ce) => !te.includes(ce))) && w.update((ce) => ce.map(Nl(ue))), (Xe.length !== Ue.length || Ue.some((ce) => !Xe.includes(ce))) && E.update((ce) => ce.map(Nl(Ue))), A.set("user"), T.set(Be);
  }
  function Q(ie) {
    var ae, Me;
    ie.button === 0 && ((Me = (ae = ie.target) == null ? void 0 : ae.releasePointerCapture) == null || Me.call(ae, ie.pointerId), !g(b) && l() === "user" && ie.target === g($) && (I == null || I(ie)), T.set(null), M.length > 0 && di(A, "nodes"), i() && (D = !1));
  }
  const U = (ie) => {
    var ae;
    if (Array.isArray(g(y)) && (ae = g(y)) != null && ae.includes(2)) {
      ie.preventDefault();
      return;
    }
    _("panecontextmenu", { event: ie });
  };
  ve(
    () => (o(), G(C())),
    () => {
      F(y, o() || C());
    }
  ), ve(
    () => (i(), a(), G(h()), g(y)),
    () => {
      F(b, i() || a() || h() && g(y) !== !0);
    }
  ), ve(
    () => (s(), g(b), l()),
    () => {
      F(x, s() && (g(b) || l() === "user"));
    }
  ), vt(), De();
  var W = R0(), re = /* @__PURE__ */ Ee(() => g(x) ? void 0 : Vl(I, g($))), ge = /* @__PURE__ */ Ee(() => Vl(U, g($)));
  let pe;
  var le = X(W);
  pt(le, t, "default", {}), q(W), Cn(W, (ie) => F($, ie), () => g($)), ke(
    (ie) => pe = mt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, pe, ie),
    [
      () => ({
        draggable: C() === !0 || Array.isArray(C()) && C().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    me
  ), Qe("click", W, function(...ie) {
    var ae;
    (ae = g(re)) == null || ae.apply(this, ie);
  }), Qe("pointerdown", W, function(...ie) {
    var ae;
    (ae = g(x) ? Y : void 0) == null || ae.apply(this, ie);
  }), Qe("pointermove", W, function(...ie) {
    var ae;
    (ae = g(x) ? K : void 0) == null || ae.apply(this, ie);
  }), Qe("pointerup", W, function(...ie) {
    var ae;
    (ae = g(x) ? Q : void 0) == null || ae.apply(this, ie);
  }), Qe("contextmenu", W, function(...ie) {
    var ae;
    (ae = g(ge)) == null || ae.apply(this, ie);
  }), O(e, W);
  var Ve = fe({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(ie) {
      C(ie), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ie) {
      h(ie), p();
    }
  });
  return r(), Ve;
}
se(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Y0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const q0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Rc(e, t) {
  de(t, !1), Je(e, q0);
  const [n, r] = tt(), o = () => J(i, "$viewport", n), { viewport: i } = qe();
  De();
  var a = Y0(), s = X(a);
  pt(s, t, "default", {}), q(a), ke(() => dt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, a), fe(), r();
}
se(Rc, {}, ["default"], [], !0);
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
function X0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var W0 = /* @__PURE__ */ oe("<div><!></div>");
function Bc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(ge, "$nodeTypes", n), i = () => J(ae, "$elementsSelectable", n), a = () => J(Me, "$nodesDraggable", n), s = () => J(Xe, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), y = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), C = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), _ = m(t, "deletable", 13, !0), w = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), P = m(t, "style", 13, void 0), z = m(t, "type", 13, "default"), N = m(t, "isParent", 13, !1), T = m(t, "positionX", 13), A = m(t, "positionY", 13), L = m(t, "sourcePosition", 13, void 0), R = m(t, "targetPosition", 13, void 0), S = m(t, "zIndex", 13), V = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), H = m(t, "initialWidth", 13, void 0), M = m(t, "initialHeight", 13, void 0), D = m(t, "width", 13, void 0), I = m(t, "height", 13, void 0), Y = m(t, "dragHandle", 13, void 0), K = m(t, "initialized", 13, !1), Q = m(t, "parentId", 13, void 0), U = m(t, "nodeClickDistance", 13, void 0), W = m(t, "class", 13, "");
  const re = qe(), {
    nodeTypes: ge,
    nodeDragThreshold: pe,
    selectNodesOnDrag: le,
    handleNodeSelection: Ve,
    updateNodeInternals: ie,
    elementsSelectable: ae,
    nodesDraggable: Me
  } = re;
  let Pe = /* @__PURE__ */ ne(void 0, !0), Be = /* @__PURE__ */ ne(null, !0);
  const te = Ai(), Xe = we(h());
  let Ue = /* @__PURE__ */ ne(void 0, !0), ue = /* @__PURE__ */ ne(void 0, !0), ce = /* @__PURE__ */ ne(void 0, !0);
  Vr("svelteflow__node_id", v()), Vr("svelteflow__node_connectable", Xe), os(() => {
    var ee;
    g(Be) && ((ee = E()) == null || ee.unobserve(g(Be)));
  });
  function Ce(ee) {
    C() && (!j(le) || !x() || j(pe) > 0) && Ve(v()), te("nodeclick", { node: f().internals.userNode, event: ee });
  }
  ve(() => G(z()), () => {
    F(l, z() || "default");
  }), ve(() => (o(), g(l)), () => {
    F(u, !!o()[g(l)]);
  }), ve(
    () => (o(), g(l), Ci),
    () => {
      F(c, o()[g(l)] || Ci);
    }
  ), ve(
    () => (g(u), G(z())),
    () => {
      g(u) || console.warn("003", Dr.error003(z()));
    }
  ), ve(
    () => (G(D()), G(I()), G(H()), G(M()), G(V()), G($())),
    () => {
      F(d, X0({
        width: D(),
        height: I(),
        initialWidth: H(),
        initialHeight: M(),
        measuredWidth: V(),
        measuredHeight: $()
      }));
    }
  ), ve(() => G(h()), () => {
    Xe.set(!!h());
  }), ve(
    () => (g(Ue), g(l), g(ue), G(L()), g(ce), G(R()), G(v()), g(Pe)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(ue) && L() !== g(ue) || g(ce) && R() !== g(ce)) && requestAnimationFrame(() => ie(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Pe),
            force: !0
          }
        ]
      ]))), F(Ue, g(l)), F(ue, L()), F(ce, R());
    }
  ), ve(
    () => (G(E()), g(Pe), g(Be), G(K())),
    () => {
      E() && (g(Pe) !== g(Be) || !K()) && (g(Be) && E().unobserve(g(Be)), g(Pe) && E().observe(g(Pe)), F(Be, g(Pe)));
    }
  ), vt(), De(!0);
  var We = et(), ze = be(We);
  {
    var st = (ee) => {
      var Oe = W0();
      let he, Qt;
      var en = X(Oe);
      const hn = /* @__PURE__ */ me(() => b() ?? !1), He = /* @__PURE__ */ me(() => C() ?? i() ?? !0), nt = /* @__PURE__ */ me(() => _() ?? !0), Ae = /* @__PURE__ */ me(() => x() ?? a() ?? !0);
      _u(en, () => g(c), (Le, rt) => {
        rt(Le, {
          get data() {
            return y();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(hn);
          },
          get selectable() {
            return g(He);
          },
          get deletable() {
            return g(nt);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Ae);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return Q();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return T();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return D();
          },
          get height() {
            return I();
          }
        });
      }), q(Oe), ht(Oe, (Le, rt) => Si == null ? void 0 : Si(Le, rt), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: Ve,
        onDrag: (Le, rt, tn, Xt) => {
          te("nodedrag", { event: Le, targetNode: tn, nodes: Xt });
        },
        onDragStart: (Le, rt, tn, Xt) => {
          te("nodedragstart", { event: Le, targetNode: tn, nodes: Xt });
        },
        onDragStop: (Le, rt, tn, Xt) => {
          te("nodedragstop", { event: Le, targetNode: tn, nodes: Xt });
        },
        store: re
      })), Cn(Oe, (Le) => F(Pe, Le), () => g(Pe)), At(() => Qe("click", Oe, Ce)), At(() => Qe("mouseenter", Oe, (Le) => te("nodemouseenter", { node: f(), event: Le }))), At(() => Qe("mouseleave", Oe, (Le) => te("nodemouseleave", { node: f(), event: Le }))), At(() => Qe("mousemove", Oe, (Le) => te("nodemousemove", { node: f(), event: Le }))), At(() => Qe("contextmenu", Oe, (Le) => te("nodecontextmenu", { node: f(), event: Le }))), ke(
        (Le, rt) => {
          ye(Oe, "data-id", v()), he = mt(Oe, 1, Le, null, he, rt), Qt = dt(Oe, `${P() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Qt, {
            "z-index": S(),
            transform: `translate(${T() ?? ""}px, ${A() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => fn(St([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: C(),
            nopan: x(),
            parent: N()
          })
        ],
        me
      ), O(ee, Oe);
    };
    xe(ze, (ee) => {
      w() || ee(st);
    });
  }
  O(e, We);
  var it = fe({
    get node() {
      return f();
    },
    set node(ee) {
      f(ee), p();
    },
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get data() {
      return y();
    },
    set data(ee) {
      y(ee), p();
    },
    get selected() {
      return b();
    },
    set selected(ee) {
      b(ee), p();
    },
    get draggable() {
      return x();
    },
    set draggable(ee) {
      x(ee), p();
    },
    get selectable() {
      return C();
    },
    set selectable(ee) {
      C(ee), p();
    },
    get connectable() {
      return h();
    },
    set connectable(ee) {
      h(ee), p();
    },
    get deletable() {
      return _();
    },
    set deletable(ee) {
      _(ee), p();
    },
    get hidden() {
      return w();
    },
    set hidden(ee) {
      w(ee), p();
    },
    get dragging() {
      return k();
    },
    set dragging(ee) {
      k(ee), p();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(ee) {
      E(ee), p();
    },
    get style() {
      return P();
    },
    set style(ee) {
      P(ee), p();
    },
    get type() {
      return z();
    },
    set type(ee) {
      z(ee), p();
    },
    get isParent() {
      return N();
    },
    set isParent(ee) {
      N(ee), p();
    },
    get positionX() {
      return T();
    },
    set positionX(ee) {
      T(ee), p();
    },
    get positionY() {
      return A();
    },
    set positionY(ee) {
      A(ee), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ee) {
      L(ee), p();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ee) {
      R(ee), p();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ee) {
      S(ee), p();
    },
    get measuredWidth() {
      return V();
    },
    set measuredWidth(ee) {
      V(ee), p();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(ee) {
      $(ee), p();
    },
    get initialWidth() {
      return H();
    },
    set initialWidth(ee) {
      H(ee), p();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(ee) {
      M(ee), p();
    },
    get width() {
      return D();
    },
    set width(ee) {
      D(ee), p();
    },
    get height() {
      return I();
    },
    set height(ee) {
      I(ee), p();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(ee) {
      Y(ee), p();
    },
    get initialized() {
      return K();
    },
    set initialized(ee) {
      K(ee), p();
    },
    get parentId() {
      return Q();
    },
    set parentId(ee) {
      Q(ee), p();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(ee) {
      U(ee), p();
    },
    get class() {
      return W();
    },
    set class(ee) {
      W(ee), p();
    }
  });
  return r(), it;
}
se(
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
var K0 = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const j0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Yc(e, t) {
  de(t, !1), Je(e, j0);
  const [n, r] = tt(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), a = () => J(v, "$elementsSelectable", n), s = () => J(f, "$nodesConnectable", n), l = () => J(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: b
  } = qe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const E = k.target.getAttribute("data-id");
      w.set(E, { id: E, nodeElement: k.target, force: !0 });
    }), y(w);
  });
  os(() => {
    x == null || x.disconnect();
  }), De();
  var C = K0();
  zt(C, 5, o, (_) => _.id, (_, w) => {
    const k = /* @__PURE__ */ me(() => !!g(w).selected), E = /* @__PURE__ */ me(() => !!g(w).hidden), P = /* @__PURE__ */ me(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), z = /* @__PURE__ */ me(() => !!(g(w).selectable || a() && typeof g(w).selectable > "u")), N = /* @__PURE__ */ me(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), T = /* @__PURE__ */ me(() => g(w).deletable ?? !0), A = /* @__PURE__ */ me(() => l().has(g(w).id)), L = /* @__PURE__ */ me(() => g(w).type ?? "default"), R = /* @__PURE__ */ me(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ me(() => vc(g(w)));
    Bc(_, {
      get node() {
        return g(w);
      },
      get id() {
        return g(w).id;
      },
      get data() {
        return g(w).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(E);
      },
      get draggable() {
        return g(P);
      },
      get selectable() {
        return g(z);
      },
      get connectable() {
        return g(N);
      },
      get deletable() {
        return g(T);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(A);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(L);
      },
      get sourcePosition() {
        return g(w).sourcePosition;
      },
      get targetPosition() {
        return g(w).targetPosition;
      },
      get dragging() {
        return g(w).dragging;
      },
      get zIndex() {
        return g(R);
      },
      get dragHandle() {
        return g(w).dragHandle;
      },
      get initialized() {
        return g(S);
      },
      get width() {
        return g(w).width;
      },
      get height() {
        return g(w).height;
      },
      get initialWidth() {
        return g(w).initialWidth;
      },
      get initialHeight() {
        return g(w).initialHeight;
      },
      get measuredWidth() {
        return g(w).measured.width;
      },
      get measuredHeight() {
        return g(w).measured.height;
      },
      get parentId() {
        return g(w).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(V) {
          Ze.call(this, t, V);
        },
        nodemouseenter(V) {
          Ze.call(this, t, V);
        },
        nodemousemove(V) {
          Ze.call(this, t, V);
        },
        nodemouseleave(V) {
          Ze.call(this, t, V);
        },
        nodedrag(V) {
          Ze.call(this, t, V);
        },
        nodedragstart(V) {
          Ze.call(this, t, V);
        },
        nodedragstop(V) {
          Ze.call(this, t, V);
        },
        nodecontextmenu(V) {
          Ze.call(this, t, V);
        }
      }
    });
  }), q(C), O(e, C);
  var h = fe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), p();
    }
  });
  return r(), h;
}
se(Yc, { nodeClickDistance: {} }, [], [], !0);
var F0 = /* @__PURE__ */ $e('<svg><g role="img"><!></g></svg>');
function qc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(W, "$edgeTypes", n), i = () => J(re, "$flowId", n), a = () => J(ge, "$elementsSelectable", n), s = () => J(U, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let v = m(t, "id", 13), y = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), C = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), _ = m(t, "zIndex", 13, void 0), w = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), P = m(t, "deletable", 13, void 0), z = m(t, "hidden", 13, !1), N = m(t, "label", 13, void 0), T = m(t, "labelStyle", 13, void 0), A = m(t, "markerStart", 13, void 0), L = m(t, "markerEnd", 13, void 0), R = m(t, "sourceHandle", 13, void 0), S = m(t, "targetHandle", 13, void 0), V = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), H = m(t, "targetX", 13), M = m(t, "targetY", 13), D = m(t, "sourcePosition", 13), I = m(t, "targetPosition", 13), Y = m(t, "ariaLabel", 13, void 0), K = m(t, "interactionWidth", 13, void 0), Q = m(t, "class", 13, "");
  Vr("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: W,
    flowId: re,
    elementsSelectable: ge
  } = qe(), pe = Ai(), le = Vc();
  function Ve(te) {
    const Xe = s().get(v());
    Xe && (le(v()), pe("edgeclick", { event: te, edge: Xe }));
  }
  function ie(te, Xe) {
    const Ue = s().get(v());
    Ue && pe(Xe, { event: te, edge: Ue });
  }
  ve(() => G(y()), () => {
    F(l, y() || "default");
  }), ve(
    () => (o(), g(l), ki),
    () => {
      F(u, o()[g(l)] || ki);
    }
  ), ve(
    () => (G(A()), i()),
    () => {
      F(c, A() ? `url('#${Da(A(), i())}')` : void 0);
    }
  ), ve(
    () => (G(L()), i()),
    () => {
      F(d, L() ? `url('#${Da(L(), i())}')` : void 0);
    }
  ), ve(
    () => (G(E()), a()),
    () => {
      F(f, E() ?? a());
    }
  ), vt(), De(!0);
  var ae = et(), Me = be(ae);
  {
    var Pe = (te) => {
      var Xe = F0();
      let Ue;
      var ue = X(Xe);
      let ce;
      var Ce = X(ue);
      const We = /* @__PURE__ */ me(() => P() ?? !0);
      _u(Ce, () => g(u), (ze, st) => {
        st(ze, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return V();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return H();
          },
          get targetY() {
            return M();
          },
          get sourcePosition() {
            return D();
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
            return N();
          },
          get labelStyle() {
            return T();
          },
          get data() {
            return C();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(We);
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
      }), q(ue), q(Xe), ke(
        (ze, st) => {
          Ue = dt(Xe, "", Ue, { "z-index": _() }), ce = mt(ue, 0, ze, null, ce, st), ye(ue, "data-id", v()), ye(ue, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => fn(St(["svelte-flow__edge", Q()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: g(f)
          })
        ],
        me
      ), Qe("click", ue, Ve), Qe("contextmenu", ue, (ze) => {
        ie(ze, "edgecontextmenu");
      }), Qe("mouseenter", ue, (ze) => {
        ie(ze, "edgemouseenter");
      }), Qe("mouseleave", ue, (ze) => {
        ie(ze, "edgemouseleave");
      }), O(te, Xe);
    };
    xe(Me, (te) => {
      z() || te(Pe);
    });
  }
  O(e, ae);
  var Be = fe({
    get id() {
      return v();
    },
    set id(te) {
      v(te), p();
    },
    get type() {
      return y();
    },
    set type(te) {
      y(te), p();
    },
    get source() {
      return b();
    },
    set source(te) {
      b(te), p();
    },
    get target() {
      return x();
    },
    set target(te) {
      x(te), p();
    },
    get data() {
      return C();
    },
    set data(te) {
      C(te), p();
    },
    get style() {
      return h();
    },
    set style(te) {
      h(te), p();
    },
    get zIndex() {
      return _();
    },
    set zIndex(te) {
      _(te), p();
    },
    get animated() {
      return w();
    },
    set animated(te) {
      w(te), p();
    },
    get selected() {
      return k();
    },
    set selected(te) {
      k(te), p();
    },
    get selectable() {
      return E();
    },
    set selectable(te) {
      E(te), p();
    },
    get deletable() {
      return P();
    },
    set deletable(te) {
      P(te), p();
    },
    get hidden() {
      return z();
    },
    set hidden(te) {
      z(te), p();
    },
    get label() {
      return N();
    },
    set label(te) {
      N(te), p();
    },
    get labelStyle() {
      return T();
    },
    set labelStyle(te) {
      T(te), p();
    },
    get markerStart() {
      return A();
    },
    set markerStart(te) {
      A(te), p();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(te) {
      L(te), p();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(te) {
      R(te), p();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(te) {
      S(te), p();
    },
    get sourceX() {
      return V();
    },
    set sourceX(te) {
      V(te), p();
    },
    get sourceY() {
      return $();
    },
    set sourceY(te) {
      $(te), p();
    },
    get targetX() {
      return H();
    },
    set targetX(te) {
      H(te), p();
    },
    get targetY() {
      return M();
    },
    set targetY(te) {
      M(te), p();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(te) {
      D(te), p();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(te) {
      I(te), p();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(te) {
      Y(te), p();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(te) {
      K(te), p();
    },
    get class() {
      return Q();
    },
    set class(te) {
      Q(te), p();
    }
  });
  return r(), Be;
}
se(
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
function Xc(e, t) {
  de(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Jt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), De(), fe({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), p();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), p();
    }
  });
}
se(Xc, { onMount: {}, onDestroy: {} }, [], [], !0);
var U0 = /* @__PURE__ */ $e("<defs></defs>");
function Wc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(i, "$markers", n), { markers: i } = qe();
  De();
  var a = U0();
  zt(a, 5, o, (s) => s.id, (s, l) => {
    Kc(s, ct(() => g(l)));
  }), q(a), O(e, a), fe(), r();
}
se(Wc, {}, [], [], !0);
var G0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), J0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Q0 = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Kc(e, t) {
  de(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  De();
  var c = Q0(), d = X(c);
  {
    var f = (y) => {
      var b = G0();
      ke(() => {
        ye(b, "stroke", l()), ye(b, "stroke-width", u());
      }), O(y, b);
    }, v = (y, b) => {
      {
        var x = (C) => {
          var h = J0();
          ke(() => {
            ye(h, "stroke", l()), ye(h, "stroke-width", u()), ye(h, "fill", l());
          }), O(C, h);
        };
        xe(
          y,
          (C) => {
            r() === wo.ArrowClosed && C(x);
          },
          b
        );
      }
    };
    xe(d, (y) => {
      r() === wo.Arrow ? y(f) : y(v, !1);
    });
  }
  return q(c), ke(() => {
    ye(c, "id", n()), ye(c, "markerWidth", `${o()}`), ye(c, "markerHeight", `${i()}`), ye(c, "markerUnits", a()), ye(c, "orient", s());
  }), O(e, c), fe({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), p();
    },
    get width() {
      return o();
    },
    set width(y) {
      o(y), p();
    },
    get height() {
      return i();
    },
    set height(y) {
      i(y), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(y) {
      a(y), p();
    },
    get orient() {
      return s();
    },
    set orient(y) {
      s(y), p();
    },
    get color() {
      return l();
    },
    set color(y) {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
    }
  });
}
se(
  Kc,
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
var em = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function jc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(s, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = qe();
  Jt(() => {
    a() && u(a());
  }), De();
  var d = em(), f = X(d), v = X(f);
  Wc(v, {}), q(f);
  var y = Z(f, 2);
  zt(y, 1, o, (h) => h.id, (h, _) => {
    const w = /* @__PURE__ */ me(() => g(_).selectable ?? i()), k = /* @__PURE__ */ me(() => g(_).type || "default");
    qc(h, {
      get id() {
        return g(_).id;
      },
      get source() {
        return g(_).source;
      },
      get target() {
        return g(_).target;
      },
      get data() {
        return g(_).data;
      },
      get style() {
        return g(_).style;
      },
      get animated() {
        return g(_).animated;
      },
      get selected() {
        return g(_).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g(_).deletable;
      },
      get hidden() {
        return g(_).hidden;
      },
      get label() {
        return g(_).label;
      },
      get labelStyle() {
        return g(_).labelStyle;
      },
      get markerStart() {
        return g(_).markerStart;
      },
      get markerEnd() {
        return g(_).markerEnd;
      },
      get sourceHandle() {
        return g(_).sourceHandle;
      },
      get targetHandle() {
        return g(_).targetHandle;
      },
      get sourceX() {
        return g(_).sourceX;
      },
      get sourceY() {
        return g(_).sourceY;
      },
      get targetX() {
        return g(_).targetX;
      },
      get targetY() {
        return g(_).targetY;
      },
      get sourcePosition() {
        return g(_).sourcePosition;
      },
      get targetPosition() {
        return g(_).targetPosition;
      },
      get ariaLabel() {
        return g(_).ariaLabel;
      },
      get interactionWidth() {
        return g(_).interactionWidth;
      },
      get class() {
        return g(_).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g(_).zIndex;
      },
      $$events: {
        edgeclick(E) {
          Ze.call(this, t, E);
        },
        edgecontextmenu(E) {
          Ze.call(this, t, E);
        },
        edgemouseenter(E) {
          Ze.call(this, t, E);
        },
        edgemouseleave(E) {
          Ze.call(this, t, E);
        }
      }
    });
  });
  var b = Z(y, 2);
  {
    var x = (h) => {
      Xc(h, {
        onMount: () => {
          di(l, !0);
        },
        onDestroy: () => {
          di(l, !1);
        }
      });
    };
    xe(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  q(d), O(e, d);
  var C = fe({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
    }
  });
  return r(), C;
}
se(jc, { defaultEdgeOptions: {} }, [], [], !0);
var tm = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const nm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ws(e, t) {
  de(t, !1), Je(e, nm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = et(), l = be(s);
  {
    var u = (c) => {
      var d = tm();
      let f;
      ke(() => f = dt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), O(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return O(e, s), fe({
    get x() {
      return n();
    },
    set x(c) {
      n(c), p();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), p();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), p();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), p();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), p();
    }
  });
}
se(
  ws,
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
function Fc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(a, "$selectionRect", n), i = () => J(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = qe();
  De();
  const l = /* @__PURE__ */ me(() => !!(o() && i() === "user")), u = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ me(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  ws(e, {
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
  }), fe(), r();
}
se(Fc, {}, [], [], !0);
var rm = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const om = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  de(t, !1), Je(e, om);
  const [n, r] = tt(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), a = () => J(u, "$nodes", n), s = qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ai();
  let f = /* @__PURE__ */ ne(null);
  function v(h) {
    const _ = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: _, event: h });
  }
  function y(h) {
    const _ = a().filter((w) => w.selected);
    d("selectionclick", { nodes: _, event: h });
  }
  ve(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, Vo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), vt(), De();
  var b = et(), x = be(b);
  {
    var C = (h) => {
      var _ = rm(), w = X(_);
      ws(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(_), ht(_, (k, E) => Si == null ? void 0 : Si(k, E), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, E, P, z) => {
          d("nodedrag", { event: k, targetNode: null, nodes: z });
        },
        onDragStart: (k, E, P, z) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: z });
        },
        onDragStop: (k, E, P, z) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: z });
        }
      })), At(() => Qe("contextmenu", _, v)), At(() => Qe("click", _, y)), At(() => Qe("keyup", _, () => {
      })), ke(() => dt(_, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), O(h, _);
    };
    xe(x, (h) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && h(C);
    });
  }
  O(e, b), fe(), r();
}
se(Uc, {}, [], [], !0);
function ut(e, t) {
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
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((C) => l[C])
        ))
          continue;
        if (a.key === f) {
          y && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function Gc(e, t) {
  de(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => xi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => xi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = qe();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function y(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, _) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = b(w);
      return {
        key: k,
        modifier: y(w),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return De(), Qe("blur", Mt, C), Qe("contextmenu", Mt, C), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ap(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, _) => ut == null ? void 0 : ut(h, _), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), fe({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), p();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), p();
    }
  });
}
se(
  Gc,
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
var im = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__connection-path"></path>'), am = /* @__PURE__ */ $e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Jc(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(v, "$connection", n), i = () => J(y, "$connectionLineType", n), a = () => J(d, "$width", n), s = () => J(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = qe();
  let b = /* @__PURE__ */ ne(null);
  ve(
    () => (o(), G(c()), i(), g(b), za),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: E, toPosition: P } = o(), z = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: E,
          targetX: k.x,
          targetY: k.y,
          targetPosition: P
        };
        switch (i()) {
          case kr.Bezier:
            ((N) => F(b, N[0]))(hc(z));
            break;
          case kr.Step:
            ((N) => F(b, N[0]))($i({ ...z, borderRadius: 0 }));
            break;
          case kr.SmoothStep:
            ((N) => F(b, N[0]))($i(z));
            break;
          default:
            ((N) => F(b, N[0]))(za(z));
        }
      }
    }
  ), vt(), De();
  var x = et(), C = be(x);
  {
    var h = (w) => {
      var k = am(), E = X(k), P = X(E);
      pt(P, t, "connectionLine", {});
      var z = Z(P);
      {
        var N = (T) => {
          var A = im();
          ke(() => {
            ye(A, "d", g(b)), dt(A, u());
          }), O(T, A);
        };
        xe(z, (T) => {
          c() || T(N);
        });
      }
      q(E), q(k), ke(
        (T) => {
          ye(k, "width", a()), ye(k, "height", s()), dt(k, l()), mt(E, 0, T);
        },
        [
          () => fn(St([
            "svelte-flow__connection",
            Mp(o().isValid)
          ]))
        ],
        me
      ), O(w, k);
    };
    xe(C, (w) => {
      o().inProgress && w(h);
    });
  }
  O(e, x);
  var _ = fe({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), p();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), p();
    }
  });
  return r(), _;
}
se(
  Jc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var sm = /* @__PURE__ */ oe("<div><!></div>");
function Do(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = tt(), a = () => J(d, "$selectionRectMode", o), s = /* @__PURE__ */ ne();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = qe();
  ve(() => G(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), De();
  var f = sm();
  let v;
  var y = X(f);
  pt(y, t, "default", {}), q(f), ke(
    (x) => v = ln(f, v, {
      class: x,
      style: u(),
      ...r,
      [nr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => St([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    me
  ), O(e, f);
  var b = fe({
    get position() {
      return l();
    },
    set position(x) {
      l(x), p();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), p();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), p();
    }
  });
  return i(), b;
}
se(Do, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var lm = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Qc(e, t) {
  de(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  De();
  var o = et(), i = be(o);
  {
    var a = (s) => {
      Do(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = lm();
          O(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return O(e, o), fe({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), p();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), p();
    }
  });
}
se(Qc, { proOptions: {}, position: {} }, [], [], !0);
function zl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const um = (e) => Object.keys(e);
function Dl(e, t) {
  um(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function cm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function dm(e = "light") {
  return Wt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = cm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var fm = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), vm = /* @__PURE__ */ oe("<!> <!>", 1), gm = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const hm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function ed(e, t) {
  const n = zv(t), r = at(t, [
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
  de(t, !1), Je(e, hm);
  const [i, a] = tt(), s = () => J(_(), "$viewport", i), l = () => J(Ji, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), y = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), C = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), _ = m(t, "viewport", 12, void 0), w = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), P = m(t, "selectionMode", 12, void 0), z = m(t, "panActivationKey", 12, void 0), N = m(t, "multiSelectionKey", 12, void 0), T = m(t, "zoomActivationKey", 12, void 0), A = m(t, "nodesDraggable", 12, void 0), L = m(t, "nodesConnectable", 12, void 0), R = m(t, "nodeDragThreshold", 12, void 0), S = m(t, "elementsSelectable", 12, void 0), V = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), H = m(t, "connectionRadius", 12, void 0), M = m(t, "connectionLineType", 12, void 0), D = m(t, "connectionMode", 28, () => cr.Strict), I = m(t, "connectionLineStyle", 12, ""), Y = m(t, "connectionLineContainerStyle", 12, ""), K = m(t, "onMoveStart", 12, void 0), Q = m(t, "onMove", 12, void 0), U = m(t, "onMoveEnd", 12, void 0), W = m(t, "isValidConnection", 12, void 0), re = m(t, "translateExtent", 12, void 0), ge = m(t, "nodeExtent", 12, void 0), pe = m(t, "onlyRenderVisibleElements", 12, void 0), le = m(t, "panOnScrollMode", 28, () => Kn.Free), Ve = m(t, "preventScrolling", 12, !0), ie = m(t, "zoomOnScroll", 12, !0), ae = m(t, "zoomOnDoubleClick", 12, !0), Me = m(t, "zoomOnPinch", 12, !0), Pe = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), te = m(t, "selectionOnDrag", 12, void 0), Xe = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), ue = m(t, "onerror", 12, void 0), ce = m(t, "ondelete", 12, void 0), Ce = m(t, "onedgecreate", 12, void 0), We = m(t, "attributionPosition", 12, void 0), ze = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), ee = m(t, "height", 12, void 0), Oe = m(t, "colorMode", 12, "light"), he = m(t, "onconnect", 12, void 0), Qt = m(t, "onconnectstart", 12, void 0), en = m(t, "onconnectend", 12, void 0), hn = m(t, "onbeforedelete", 12, void 0), He = m(t, "oninit", 12, void 0), nt = m(t, "nodeOrigin", 12, void 0), Ae = m(t, "paneClickDistance", 12, 0), Le = m(t, "nodeClickDistance", 12, 0), rt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), tn = m(t, "style", 12, void 0), Xt = m(t, "class", 12, void 0), Wr = /* @__PURE__ */ ne(), wt = /* @__PURE__ */ ne(), Pt = /* @__PURE__ */ ne();
  const mr = s() || h(), ot = vv(Ki) ? qe() : A0({
    nodes: j(f()),
    edges: j(v()),
    width: it(),
    height: ee(),
    fitView: y(),
    nodeOrigin: nt(),
    nodeExtent: ge()
  });
  Jt(() => (ot.width.set(g(wt)), ot.height.set(g(Pt)), ot.domNode.set(g(Wr)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport(_()), y() !== void 0 && ot.fitViewOnInit.set(y()), b() && ot.fitViewOptions.set(b()), zl(ot, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: C(),
    translateExtent: re(),
    paneClickDistance: Ae()
  }), () => {
    ot.reset();
  }));
  const { initialized: Ji } = ot;
  let Kr = /* @__PURE__ */ ne(!1);
  ve(
    () => (g(wt), g(Pt)),
    () => {
      g(wt) !== void 0 && g(Pt) !== void 0 && (ot.width.set(g(wt)), ot.height.set(g(Pt)));
    }
  ), ve(
    () => (g(Kr), l(), G(He())),
    () => {
      var B;
      !g(Kr) && l() && ((B = He()) == null || B(), F(Kr, !0));
    }
  ), ve(
    () => (G(d()), G(M()), G(H()), G(P()), G(V()), G(rt()), G(A()), G(L()), G(S()), G(pe()), G(W()), G(Xe()), G(Ue()), G(ue()), G(ce()), G(Ce()), G(D()), G(R()), G(he()), G(Qt()), G(en()), G(hn()), G(nt()), Dl),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: M(),
        connectionRadius: H(),
        selectionMode: P(),
        snapGrid: V(),
        defaultMarkerColor: rt(),
        nodesDraggable: A(),
        nodesConnectable: L(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: pe(),
        isValidConnection: W(),
        autoPanOnConnect: Xe(),
        autoPanOnNodeDrag: Ue(),
        onerror: ue(),
        ondelete: ce(),
        onedgecreate: Ce(),
        connectionMode: D(),
        nodeDragThreshold: R(),
        onconnect: he(),
        onconnectstart: Qt(),
        onconnectend: en(),
        onbeforedelete: hn(),
        nodeOrigin: nt()
      };
      Dl(ot, B);
    }
  ), ve(
    () => (G(w()), G(k()), G(x()), G(C()), G(re()), G(Ae())),
    () => {
      zl(ot, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: C(),
        translateExtent: re(),
        paneClickDistance: Ae()
      });
    }
  ), ve(
    () => G(Oe()),
    () => {
      Yv(F(c, dm(Oe())), "$colorModeClass", i);
    }
  ), vt(), De();
  var Tt = gm();
  let Io;
  var Zo = X(Tt);
  Gc(Zo, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return N();
    },
    get zoomActivationKey() {
      return T();
    }
  });
  var Ro = Z(Zo, 2);
  const Qi = /* @__PURE__ */ me(() => le() === void 0 ? Kn.Free : le()), jd = /* @__PURE__ */ me(() => Ve() === void 0 ? !0 : Ve()), Fd = /* @__PURE__ */ me(() => ie() === void 0 ? !0 : ie()), Ud = /* @__PURE__ */ me(() => ae() === void 0 ? !0 : ae()), Gd = /* @__PURE__ */ me(() => Me() === void 0 ? !0 : Me()), Jd = /* @__PURE__ */ me(() => Pe() === void 0 ? !1 : Pe()), Qd = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be()), ef = /* @__PURE__ */ me(() => Ae() === void 0 ? 0 : Ae());
  Ic(Ro, {
    initialViewport: mr,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return Q();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(Qi);
    },
    get preventScrolling() {
      return g(jd);
    },
    get zoomOnScroll() {
      return g(Fd);
    },
    get zoomOnDoubleClick() {
      return g(Ud);
    },
    get zoomOnPinch() {
      return g(Gd);
    },
    get panOnScroll() {
      return g(Jd);
    },
    get panOnDrag() {
      return g(Qd);
    },
    get paneClickDistance() {
      return g(ef);
    },
    children: (B, Aw) => {
      const rf = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be());
      Zc(B, {
        get panOnDrag() {
          return g(rf);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(jr) {
            Ze.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Ze.call(this, t, jr);
          }
        },
        children: (jr, Iw) => {
          var Ss = vm(), Ps = be(Ss);
          Rc(Ps, {
            children: (af, Zw) => {
              var Es = fm(), Ms = be(Es);
              jc(Ms, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  edgecontextmenu(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  edgemouseenter(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  edgemouseleave(Ie) {
                    Ze.call(this, t, Ie);
                  }
                }
              });
              var Hs = Z(Ms, 2);
              Jc(Hs, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ie, Rw) => {
                    var Ns = et(), lf = be(Ns);
                    pt(lf, t, "connectionLine", {}), O(Ie, Ns);
                  }
                }
              });
              var Vs = Z(Hs, 6);
              Yc(Vs, {
                get nodeClickDistance() {
                  return Le();
                },
                $$events: {
                  nodeclick(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodemouseenter(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodemousemove(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodemouseleave(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedragstart(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedrag(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedragstop(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodecontextmenu(Ie) {
                    Ze.call(this, t, Ie);
                  }
                }
              });
              var sf = Z(Vs, 2);
              Uc(sf, {
                $$events: {
                  selectionclick(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  selectioncontextmenu(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedragstart(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedrag(Ie) {
                    Ze.call(this, t, Ie);
                  },
                  nodedragstop(Ie) {
                    Ze.call(this, t, Ie);
                  }
                }
              }), O(af, Es);
            },
            $$slots: { default: !0 }
          });
          var of = Z(Ps, 2);
          Fc(of, {}), O(jr, Ss);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ks = Z(Ro, 2);
  Qc(ks, {
    get proOptions() {
      return ze();
    },
    get position() {
      return We();
    }
  });
  var tf = Z(ks, 2);
  pt(tf, t, "default", {}), q(Tt), Cn(Tt, (B) => F(Wr, B), () => g(Wr)), ke(
    (B) => Io = ln(
      Tt,
      Io,
      {
        style: tn(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => St([
        "svelte-flow",
        Xt(),
        u()
      ])
    ],
    me
  ), Xs(Tt, "clientWidth", (B) => F(wt, B)), Xs(Tt, "clientHeight", (B) => F(Pt, B)), Qe("dragover", Tt, function(B) {
    Ze.call(this, t, B);
  }), Qe("drop", Tt, function(B) {
    Ze.call(this, t, B);
  }), O(e, Tt);
  var nf = fe({
    get id() {
      return d();
    },
    set id(B) {
      d(B), p();
    },
    get nodes() {
      return f();
    },
    set nodes(B) {
      f(B), p();
    },
    get edges() {
      return v();
    },
    set edges(B) {
      v(B), p();
    },
    get fitView() {
      return y();
    },
    set fitView(B) {
      y(B), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(B) {
      b(B), p();
    },
    get minZoom() {
      return x();
    },
    set minZoom(B) {
      x(B), p();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(B) {
      C(B), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), p();
    },
    get viewport() {
      return _();
    },
    set viewport(B) {
      _(B), p();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(B) {
      w(B), p();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(B) {
      k(B), p();
    },
    get selectionKey() {
      return E();
    },
    set selectionKey(B) {
      E(B), p();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(B) {
      P(B), p();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(B) {
      z(B), p();
    },
    get multiSelectionKey() {
      return N();
    },
    set multiSelectionKey(B) {
      N(B), p();
    },
    get zoomActivationKey() {
      return T();
    },
    set zoomActivationKey(B) {
      T(B), p();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(B) {
      A(B), p();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(B) {
      L(B), p();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(B) {
      R(B), p();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(B) {
      S(B), p();
    },
    get snapGrid() {
      return V();
    },
    set snapGrid(B) {
      V(B), p();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(B) {
      $(B), p();
    },
    get connectionRadius() {
      return H();
    },
    set connectionRadius(B) {
      H(B), p();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(B) {
      M(B), p();
    },
    get connectionMode() {
      return D();
    },
    set connectionMode(B) {
      D(B), p();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(B) {
      I(B), p();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(B) {
      Y(B), p();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(B) {
      K(B), p();
    },
    get onMove() {
      return Q();
    },
    set onMove(B) {
      Q(B), p();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(B) {
      U(B), p();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(B) {
      W(B), p();
    },
    get translateExtent() {
      return re();
    },
    set translateExtent(B) {
      re(B), p();
    },
    get nodeExtent() {
      return ge();
    },
    set nodeExtent(B) {
      ge(B), p();
    },
    get onlyRenderVisibleElements() {
      return pe();
    },
    set onlyRenderVisibleElements(B) {
      pe(B), p();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(B) {
      le(B), p();
    },
    get preventScrolling() {
      return Ve();
    },
    set preventScrolling(B) {
      Ve(B), p();
    },
    get zoomOnScroll() {
      return ie();
    },
    set zoomOnScroll(B) {
      ie(B), p();
    },
    get zoomOnDoubleClick() {
      return ae();
    },
    set zoomOnDoubleClick(B) {
      ae(B), p();
    },
    get zoomOnPinch() {
      return Me();
    },
    set zoomOnPinch(B) {
      Me(B), p();
    },
    get panOnScroll() {
      return Pe();
    },
    set panOnScroll(B) {
      Pe(B), p();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(B) {
      Be(B), p();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(B) {
      te(B), p();
    },
    get autoPanOnConnect() {
      return Xe();
    },
    set autoPanOnConnect(B) {
      Xe(B), p();
    },
    get autoPanOnNodeDrag() {
      return Ue();
    },
    set autoPanOnNodeDrag(B) {
      Ue(B), p();
    },
    get onerror() {
      return ue();
    },
    set onerror(B) {
      ue(B), p();
    },
    get ondelete() {
      return ce();
    },
    set ondelete(B) {
      ce(B), p();
    },
    get onedgecreate() {
      return Ce();
    },
    set onedgecreate(B) {
      Ce(B), p();
    },
    get attributionPosition() {
      return We();
    },
    set attributionPosition(B) {
      We(B), p();
    },
    get proOptions() {
      return ze();
    },
    set proOptions(B) {
      ze(B), p();
    },
    get defaultEdgeOptions() {
      return st();
    },
    set defaultEdgeOptions(B) {
      st(B), p();
    },
    get width() {
      return it();
    },
    set width(B) {
      it(B), p();
    },
    get height() {
      return ee();
    },
    set height(B) {
      ee(B), p();
    },
    get colorMode() {
      return Oe();
    },
    set colorMode(B) {
      Oe(B), p();
    },
    get onconnect() {
      return he();
    },
    set onconnect(B) {
      he(B), p();
    },
    get onconnectstart() {
      return Qt();
    },
    set onconnectstart(B) {
      Qt(B), p();
    },
    get onconnectend() {
      return en();
    },
    set onconnectend(B) {
      en(B), p();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(B) {
      hn(B), p();
    },
    get oninit() {
      return He();
    },
    set oninit(B) {
      He(B), p();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(B) {
      nt(B), p();
    },
    get paneClickDistance() {
      return Ae();
    },
    set paneClickDistance(B) {
      Ae(B), p();
    },
    get nodeClickDistance() {
      return Le();
    },
    set nodeClickDistance(B) {
      Le(B), p();
    },
    get defaultMarkerColor() {
      return rt();
    },
    set defaultMarkerColor(B) {
      rt(B), p();
    },
    get style() {
      return tn();
    },
    set style(B) {
      tn(B), p();
    },
    get class() {
      return Xt();
    },
    set class(B) {
      Xt(B), p();
    }
  });
  return a(), nf;
}
se(
  ed,
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
function td(e, t) {
  de(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Ac({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Vr(Ki, { getStore: () => l }), os(() => {
    l.reset();
  }), De();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), O(e, u), fe({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), p();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), p();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), p();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), p();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), p();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), p();
    }
  });
}
se(
  td,
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
var pm = /* @__PURE__ */ oe("<button><!></button>");
function no(e, t) {
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
  de(t, !1);
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  De();
  var c = pm();
  let d;
  var f = X(c);
  return pt(f, t, "default", { class: "button-svg" }), q(c), ke(
    (v) => d = ln(c, d, {
      type: "button",
      class: v,
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
      () => St([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    me
  ), Qe("click", c, function(v) {
    Ze.call(this, t, v);
  }), O(e, c), fe({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), p();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), p();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), p();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), p();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), p();
    }
  });
}
se(
  no,
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
var mm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function nd(e) {
  var t = mm();
  O(e, t);
}
se(nd, {}, [], [], !0);
var ym = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function rd(e) {
  var t = ym();
  O(e, t);
}
se(rd, {}, [], [], !0);
var wm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function od(e) {
  var t = wm();
  O(e, t);
}
se(od, {}, [], [], !0);
var bm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function id(e) {
  var t = bm();
  O(e, t);
}
se(id, {}, [], [], !0);
var xm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ad(e) {
  var t = xm();
  O(e, t);
}
se(ad, {}, [], [], !0);
var $m = /* @__PURE__ */ oe("<!> <!>", 1), Cm = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function sd(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(M, "$nodesDraggable", n), i = () => J(D, "$nodesConnectable", n), a = () => J(I, "$elementsSelectable", n), s = () => J(V, "$viewport", n), l = () => J($, "$minZoom", n), u = () => J(H, "$maxZoom", n), c = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne();
  let y = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), C = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), _ = m(t, "buttonBgColorHover", 12, void 0), w = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), P = m(t, "ariaLabel", 12, void 0), z = m(t, "style", 12, void 0), N = m(t, "orientation", 12, "vertical"), T = m(t, "fitViewOptions", 12, void 0), A = m(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: R,
    fitView: S,
    viewport: V,
    minZoom: $,
    maxZoom: H,
    nodesDraggable: M,
    nodesConnectable: D,
    elementsSelectable: I
  } = qe(), Y = {
    bgColor: h(),
    bgColorHover: _(),
    color: w(),
    colorHover: k(),
    borderColor: E()
  }, K = () => {
    L();
  }, Q = () => {
    R();
  }, U = () => {
    S(T());
  }, W = () => {
    F(c, !g(c)), M.set(g(c)), D.set(g(c)), I.set(g(c));
  };
  ve(
    () => (o(), i(), a()),
    () => {
      F(c, o() || i() || a());
    }
  ), ve(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), ve(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), ve(() => G(N()), () => {
    F(v, N() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), De();
  const re = /* @__PURE__ */ me(() => St([
    "svelte-flow__controls",
    g(v),
    A()
  ])), ge = /* @__PURE__ */ me(() => P() ?? "Svelte Flow controls");
  Do(e, {
    get class() {
      return g(re);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ge);
    },
    get style() {
      return z();
    },
    children: (le, Ve) => {
      var ie = Cm(), ae = be(ie);
      pt(ae, t, "before", {});
      var Me = Z(ae, 2);
      {
        var Pe = (Ce) => {
          var We = $m(), ze = be(We);
          no(ze, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            Y,
            {
              $$events: { click: K },
              children: (it, ee) => {
                nd(it);
              },
              $$slots: { default: !0 }
            }
          ));
          var st = Z(ze, 2);
          no(st, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            Y,
            {
              $$events: { click: Q },
              children: (it, ee) => {
                rd(it);
              },
              $$slots: { default: !0 }
            }
          )), O(Ce, We);
        };
        xe(Me, (Ce) => {
          b() && Ce(Pe);
        });
      }
      var Be = Z(Me, 2);
      {
        var te = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: U },
              children: (We, ze) => {
                od(We);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Be, (Ce) => {
          x() && Ce(te);
        });
      }
      var Xe = Z(Be, 2);
      {
        var Ue = (Ce) => {
          no(Ce, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: W },
              children: (We, ze) => {
                var st = et(), it = be(st);
                {
                  var ee = (he) => {
                    ad(he);
                  }, Oe = (he) => {
                    id(he);
                  };
                  xe(it, (he) => {
                    g(c) ? he(ee) : he(Oe, !1);
                  });
                }
                O(We, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Xe, (Ce) => {
          C() && Ce(Ue);
        });
      }
      var ue = Z(Xe, 2);
      pt(ue, t, "default", {});
      var ce = Z(ue, 2);
      pt(ce, t, "after", {}), O(le, ie);
    },
    $$slots: { default: !0 }
  });
  var pe = fe({
    get position() {
      return y();
    },
    set position(le) {
      y(le), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(le) {
      b(le), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(le) {
      x(le), p();
    },
    get showLock() {
      return C();
    },
    set showLock(le) {
      C(le), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(le) {
      h(le), p();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(le) {
      _(le), p();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(le) {
      w(le), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(le) {
      k(le), p();
    },
    get buttonBorderColor() {
      return E();
    },
    set buttonBorderColor(le) {
      E(le), p();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(le) {
      P(le), p();
    },
    get style() {
      return z();
    },
    set style(le) {
      z(le), p();
    },
    get orientation() {
      return N();
    },
    set orientation(le) {
      N(le), p();
    },
    get fitViewOptions() {
      return T();
    },
    set fitViewOptions(le) {
      T(le), p();
    },
    get class() {
      return A();
    },
    set class(le) {
      A(le), p();
    }
  });
  return r(), pe;
}
se(
  sd,
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
var _m = /* @__PURE__ */ $e("<circle></circle>");
function ld(e, t) {
  de(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  De();
  var o = _m();
  return ke(
    (i) => {
      ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, i);
    },
    [
      () => fn(St([
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
      n(i), p();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), p();
    }
  });
}
se(ld, { radius: {}, class: {} }, [], [], !0);
var km = /* @__PURE__ */ $e("<path></path>");
function ud(e, t) {
  de(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  De();
  var a = km();
  return ke(
    (s) => {
      ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(a, 0, s);
    },
    [
      () => fn(St([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    me
  ), O(e, a), fe({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), p();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), p();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), p();
    }
  });
}
se(
  ud,
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
const Sm = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var Pm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Em = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function cd(e, t) {
  de(t, !1), Je(e, Em);
  const [n, r] = tt(), o = () => J(k, "$flowId", n), i = () => J(w, "$viewport", n), a = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), y = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), C = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), _ = m(t, "class", 12, "");
  const { viewport: w, flowId: k } = qe(), E = y() || Sm[f()], P = f() === jn.Dots, z = f() === jn.Cross, N = Array.isArray(v()) ? v() : [v(), v()];
  ve(
    () => (o(), G(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ve(() => i(), () => {
    F(s, [
      N[0] * i().zoom || 1,
      N[1] * i().zoom || 1
    ]);
  }), ve(() => i(), () => {
    F(l, E * i().zoom);
  }), ve(() => (g(l), g(s)), () => {
    F(u, z ? [g(l), g(l)] : g(s));
  }), ve(
    () => (g(l), g(u)),
    () => {
      F(c, P ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), De();
  var T = Pm();
  let A;
  var L = X(T), R = X(L);
  {
    var S = (M) => {
      const D = /* @__PURE__ */ me(() => g(l) / 2);
      ld(M, {
        get radius() {
          return g(D);
        },
        get class() {
          return h();
        }
      });
    }, V = (M) => {
      ud(M, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    xe(R, (M) => {
      P ? M(S) : M(V, !1);
    });
  }
  q(L);
  var $ = Z(L);
  q(T), ke(
    (M) => {
      mt(T, 0, M, "svelte-1r7pe8d"), A = dt(T, "", A, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": C()
      }), ye(L, "id", g(a)), ye(L, "x", i().x % g(s)[0]), ye(L, "y", i().y % g(s)[1]), ye(L, "width", g(s)[0]), ye(L, "height", g(s)[1]), ye(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ye($, "fill", `url(#${g(a)})`);
    },
    [
      () => fn(St(["svelte-flow__background", _()]))
    ],
    me
  ), O(e, T);
  var H = fe({
    get id() {
      return d();
    },
    set id(M) {
      d(M), p();
    },
    get variant() {
      return f();
    },
    set variant(M) {
      f(M), p();
    },
    get gap() {
      return v();
    },
    set gap(M) {
      v(M), p();
    },
    get size() {
      return y();
    },
    set size(M) {
      y(M), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(M) {
      b(M), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(M) {
      x(M), p();
    },
    get patternColor() {
      return C();
    },
    set patternColor(M) {
      C(M), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), p();
    },
    get class() {
      return _();
    },
    set class(M) {
      _(M), p();
    }
  });
  return r(), H;
}
se(
  cd,
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
var Mm = /* @__PURE__ */ $e("<rect></rect>");
function dd(e, t) {
  de(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  De();
  var v = Mm();
  let y;
  return ke(
    (b, x) => {
      y = mt(v, 0, b, null, y, x), ye(v, "x", n()), ye(v, "y", r()), ye(v, "rx", a()), ye(v, "ry", a()), ye(v, "width", o()), ye(v, "height", i()), dt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ye(v, "shape-rendering", l());
    },
    [
      () => fn(St(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    me
  ), O(e, v), fe({
    get x() {
      return n();
    },
    set x(b) {
      n(b), p();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), p();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), p();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), p();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), p();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), p();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), p();
    }
  });
}
se(
  dd,
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
function Ll(e, t) {
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
const da = (e) => e instanceof Function ? e : () => e;
var Hm = /* @__PURE__ */ $e("<title> </title>"), Vm = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function fd(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(Be, "$flowId", n), i = () => J(ae, "$viewport", n), a = () => J(Me, "$containerWidth", n), s = () => J(Pe, "$containerHeight", n), l = () => J(ie, "$nodeLookup", n), u = () => J(Ve, "$nodes", n), c = () => J(te, "$panZoom", n), d = () => J(Xe, "$translateExtent", n), f = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), y = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), w = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), E = /* @__PURE__ */ ne(), P = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne();
  let N = m(t, "position", 12, "bottom-right"), T = m(t, "ariaLabel", 12, "Mini map"), A = m(t, "nodeStrokeColor", 12, "transparent"), L = m(t, "nodeColor", 12, void 0), R = m(t, "nodeClass", 12, ""), S = m(t, "nodeBorderRadius", 12, 5), V = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), H = m(t, "maskColor", 12, void 0), M = m(t, "maskStrokeColor", 12, void 0), D = m(t, "maskStrokeWidth", 12, void 0), I = m(t, "width", 12, void 0), Y = m(t, "height", 12, void 0), K = m(t, "pannable", 12, !0), Q = m(t, "zoomable", 12, !0), U = m(t, "inversePan", 12, void 0), W = m(t, "zoomStep", 12, void 0), re = m(t, "style", 12, ""), ge = m(t, "class", 12, "");
  const pe = 200, le = 150, {
    nodes: Ve,
    nodeLookup: ie,
    viewport: ae,
    width: Me,
    height: Pe,
    flowId: Be,
    panZoom: te,
    translateExtent: Xe
  } = qe(), Ue = L() === void 0 ? void 0 : da(L()), ue = da(A()), ce = da(R()), Ce = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), We = `svelte-flow__minimap-desc-${o()}`;
  let ze = /* @__PURE__ */ ne(g(f));
  const st = () => g(C);
  ve(
    () => (i(), a(), s()),
    () => {
      F(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ve(
    () => (l(), g(f), u()),
    () => {
      F(ze, l().size > 0 ? dc(Vo(l()), g(f)) : g(f)), u();
    }
  ), ve(() => G(I()), () => {
    F(v, I() ?? pe);
  }), ve(() => G(Y()), () => {
    F(y, Y() ?? le);
  }), ve(
    () => (g(ze), g(v)),
    () => {
      F(b, g(ze).width / g(v));
    }
  ), ve(
    () => (g(ze), g(y)),
    () => {
      F(x, g(ze).height / g(y));
    }
  ), ve(
    () => (g(b), g(x)),
    () => {
      F(C, Math.max(g(b), g(x)));
    }
  ), ve(() => (g(C), g(v)), () => {
    F(h, g(C) * g(v));
  }), ve(
    () => (g(C), g(y)),
    () => {
      F(_, g(C) * g(y));
    }
  ), ve(() => g(C), () => {
    F(w, 5 * g(C));
  }), ve(
    () => (g(ze), g(h), g(w)),
    () => {
      F(k, g(ze).x - (g(h) - g(ze).width) / 2 - g(w));
    }
  ), ve(
    () => (g(ze), g(_), g(w)),
    () => {
      F(E, g(ze).y - (g(_) - g(ze).height) / 2 - g(w));
    }
  ), ve(() => (g(h), g(w)), () => {
    F(P, g(h) + g(w) * 2);
  }), ve(() => (g(_), g(w)), () => {
    F(z, g(_) + g(w) * 2);
  }), vt(), De();
  const it = /* @__PURE__ */ me(() => re() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), ee = /* @__PURE__ */ me(() => St(["svelte-flow__minimap", ge()]));
  Do(e, {
    get position() {
      return N();
    },
    get style() {
      return g(it);
    },
    get class() {
      return g(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (he, Qt) => {
      var en = et(), hn = be(en);
      {
        var He = (nt) => {
          var Ae = Vm();
          ye(Ae, "aria-labelledby", We);
          let Le;
          var rt = X(Ae);
          {
            var tn = (wt) => {
              var Pt = Hm();
              ye(Pt, "id", We);
              var mr = X(Pt, !0);
              q(Pt), ke(() => Bt(mr, T())), O(wt, Pt);
            };
            xe(rt, (wt) => {
              T() && wt(tn);
            });
          }
          var Xt = Z(rt);
          zt(Xt, 1, u, (wt) => wt.id, (wt, Pt) => {
            var mr = et();
            const ot = /* @__PURE__ */ me(() => l().get(g(Pt).id));
            var Ji = be(mr);
            {
              var Kr = (Tt) => {
                const Io = /* @__PURE__ */ me(() => tr(g(ot))), Zo = /* @__PURE__ */ me(() => Ue == null ? void 0 : Ue(g(ot))), Ro = /* @__PURE__ */ me(() => ue(g(ot))), Qi = /* @__PURE__ */ me(() => ce(g(ot)));
                dd(Tt, ct(
                  {
                    get x() {
                      return g(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Io),
                  {
                    get selected() {
                      return g(ot).selected;
                    },
                    get color() {
                      return g(Zo);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(Ro);
                    },
                    get strokeWidth() {
                      return V();
                    },
                    shapeRendering: Ce,
                    get class() {
                      return g(Qi);
                    }
                  }
                ));
              };
              xe(Ji, (Tt) => {
                g(ot) && vc(g(ot)) && Tt(Kr);
              });
            }
            O(wt, mr);
          });
          var Wr = Z(Xt);
          q(Ae), ht(Ae, (wt, Pt) => Ll == null ? void 0 : Ll(wt, Pt), () => ({
            panZoom: c(),
            viewport: ae,
            getViewScale: st,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: U(),
            zoomStep: W(),
            pannable: K(),
            zoomable: Q()
          })), ke(() => {
            ye(Ae, "width", g(v)), ye(Ae, "height", g(y)), ye(Ae, "viewBox", `${g(k) ?? ""} ${g(E) ?? ""} ${g(P) ?? ""} ${g(z) ?? ""}`), Le = dt(Ae, "", Le, {
              "--xy-minimap-mask-background-color-props": H(),
              "--xy-minimap-mask-stroke-color-props": M(),
              "--xy-minimap-mask-stroke-width-props": D() ? D() * g(C) : void 0
            }), ye(Wr, "d", `M${g(k) - g(w)},${g(E) - g(w)}h${g(P) + g(w) * 2}v${g(z) + g(w) * 2}h${-g(P) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), O(nt, Ae);
        };
        xe(hn, (nt) => {
          c() && nt(He);
        });
      }
      O(he, en);
    },
    $$slots: { default: !0 }
  });
  var Oe = fe({
    get position() {
      return N();
    },
    set position(he) {
      N(he), p();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(he) {
      T(he), p();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(he) {
      A(he), p();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(he) {
      L(he), p();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(he) {
      R(he), p();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(he) {
      S(he), p();
    },
    get nodeStrokeWidth() {
      return V();
    },
    set nodeStrokeWidth(he) {
      V(he), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(he) {
      $(he), p();
    },
    get maskColor() {
      return H();
    },
    set maskColor(he) {
      H(he), p();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(he) {
      M(he), p();
    },
    get maskStrokeWidth() {
      return D();
    },
    set maskStrokeWidth(he) {
      D(he), p();
    },
    get width() {
      return I();
    },
    set width(he) {
      I(he), p();
    },
    get height() {
      return Y();
    },
    set height(he) {
      Y(he), p();
    },
    get pannable() {
      return K();
    },
    set pannable(he) {
      K(he), p();
    },
    get zoomable() {
      return Q();
    },
    set zoomable(he) {
      Q(he), p();
    },
    get inversePan() {
      return U();
    },
    set inversePan(he) {
      U(he), p();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(he) {
      W(he), p();
    },
    get style() {
      return re();
    },
    set style(he) {
      re(he), p();
    },
    get class() {
      return ge();
    },
    set class(he) {
      ge(he), p();
    }
  });
  return r(), Oe;
}
se(
  fd,
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
const Tl = (e) => Vp(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: b, edgeLookup: x, connectionLookup: C } = qe(), h = (k) => {
    var E, P;
    const z = j(y), N = Tl(k) ? k : z.get(k.id), T = N.parentId ? Lp(N.position, N.measured, N.parentId, z, j(b)) : N.position, A = {
      ...N,
      position: T,
      width: ((E = N.measured) == null ? void 0 : E.width) ?? N.width,
      height: ((P = N.measured) == null ? void 0 : P.height) ?? N.height
    };
    return Tr(A);
  }, _ = (k, E, P = { replace: !1 }) => {
    var z;
    const N = (z = j(y).get(k)) == null ? void 0 : z.internals.userNode;
    if (!N)
      return;
    const T = typeof E == "function" ? E(N) : E;
    P.replace ? d.update((A) => A.map((L) => L.id === k ? Tl(T) ? T : { ...L, ...T } : L)) : (Object.assign(N, T), d.update((A) => A));
  }, w = (k) => j(y).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var E;
      return (E = w(k)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? j(d) : Ol(j(y), k),
    getEdge: (k) => j(x).get(k),
    getEdges: (k) => k === void 0 ? j(f) : Ol(j(x), k),
    setZoom: (k, E) => {
      const P = j(c);
      return P ? P.scaleTo(k, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => j(i).zoom,
    setViewport: async (k, E) => {
      const P = j(i), z = j(c);
      return z ? (await z.setViewport({
        x: k.x ?? P.x,
        y: k.y ?? P.y,
        zoom: k.zoom ?? P.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(i),
    setCenter: async (k, E, P) => {
      const z = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : j(u), N = j(c);
      return N ? (await N.setViewport({
        x: j(a) / 2 - k * z,
        y: j(s) / 2 - E * z,
        zoom: z
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, E) => {
      const P = j(c);
      if (!P)
        return Promise.resolve(!1);
      const z = gs(k, j(a), j(s), j(l), j(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await P.setViewport(z, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, E = !0, P) => {
      const z = yl(k), N = z ? k : h(k);
      return N ? (P || j(d)).filter((T) => {
        const A = j(y).get(T.id);
        if (!A || !z && T.id === k.id)
          return !1;
        const L = Tr(A), R = bo(L, N);
        return E && R > 0 || R >= N.width * N.height;
      }) : [];
    },
    isNodeIntersecting: (k, E, P = !0) => {
      const z = yl(k) ? k : h(k);
      if (!z)
        return !1;
      const N = bo(z, E);
      return P && N > 0 || N >= z.width * z.height;
    },
    deleteElements: async ({ nodes: k = [], edges: E = [] }) => {
      const { nodes: P, edges: z } = await lc({
        nodesToRemove: k,
        edgesToRemove: E,
        nodes: j(d),
        edges: j(f),
        onBeforeDelete: j(r)
      });
      return P && d.update((N) => N.filter((T) => !P.some(({ id: A }) => A === T.id))), z && f.update((N) => N.filter((T) => !z.some(({ id: A }) => A === T.id))), {
        deletedNodes: P,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (k, E = { snapToGrid: !0 }) => {
      const P = j(v);
      if (!P)
        return k;
      const z = E.snapToGrid ? j(o) : !1, { x: N, y: T, zoom: A } = j(i), { x: L, y: R } = P.getBoundingClientRect(), S = {
        x: k.x - L,
        y: k.y - R
      };
      return No(S, [N, T, A], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const E = j(v);
      if (!E)
        return k;
      const { x: P, y: z, zoom: N } = j(i), { x: T, y: A } = E.getBoundingClientRect(), L = fc(k, [P, z, N]);
      return {
        x: L.x + T,
        y: L.y + A
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
      edges: j(f).map((k) => ({ ...k })),
      viewport: { ...j(i) }
    }),
    updateNode: _,
    updateNodeData: (k, E, P) => {
      var z;
      const N = (z = j(y).get(k)) == null ? void 0 : z.internals.userNode;
      if (!N)
        return;
      const T = typeof E == "function" ? E(N) : E;
      N.data = P != null && P.replace ? T : { ...N.data, ...T }, d.update((A) => A);
    },
    getNodesBounds: (k) => {
      const E = j(y), P = j(b);
      return Np(k, { nodeLookup: E, nodeOrigin: P });
    },
    getHandleConnections: ({ type: k, id: E, nodeId: P }) => {
      var z;
      return Array.from(((z = j(C).get(`${P}-${k}-${E ?? null}`)) == null ? void 0 : z.values()) ?? []);
    },
    viewport: i
  };
}
function Ol(e, t) {
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
var Nm = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function vd(e, t) {
  de(t, !1);
  const [n, r] = tt(), o = () => J(_, "$nodes", n), i = () => J(h, "$nodeLookup", n), a = () => J(C, "$viewport", n), s = () => J(x, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), y = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: C, nodeLookup: h, nodes: _ } = qe(), { getNodesBounds: w } = Lt(), k = sr("svelteflow__node_id");
  let E = /* @__PURE__ */ ne(), P = /* @__PURE__ */ ne([]), z = y() !== void 0 ? y() : 10, N = f() !== void 0 ? f() : _e.Top, T = v() !== void 0 ? v() : "center";
  ve(
    () => (o(), G(d()), i()),
    () => {
      o();
      const V = Array.isArray(d()) ? d() : [d() || k];
      F(P, V.reduce(
        ($, H) => {
          const M = i().get(H);
          return M && $.push(M), $;
        },
        []
      ));
    }
  ), ve(
    () => (g(P), a()),
    () => {
      const V = w(g(P));
      V && F(E, Up(V, a(), N, z, T));
    }
  ), ve(() => g(P), () => {
    F(l, g(P).length === 0 ? 1 : Math.max(...g(P).map((V) => (V.internals.z || 5) + 1)));
  }), ve(() => o(), () => {
    F(u, o().filter((V) => V.selected).length);
  }), ve(
    () => (G(b()), g(P), g(u)),
    () => {
      F(c, typeof b() == "boolean" ? b() : g(P).length === 1 && g(P)[0].selected && g(u) === 1);
    }
  ), vt(), De();
  var A = et(), L = be(A);
  {
    var R = (V) => {
      var $ = Nm();
      let H;
      var M = X($);
      pt(M, t, "default", {}), q($), ht($, (D, I) => _i == null ? void 0 : _i(D, I), () => ({ domNode: s() })), ke(
        (D) => {
          ye($, "data-id", D), H = dt($, "", H, {
            position: "absolute",
            transform: g(E),
            "z-index": g(l)
          });
        },
        [
          () => g(P).reduce((D, I) => `${D}${I.id} `, "").trim()
        ],
        me
      ), O(V, $);
    };
    xe(L, (V) => {
      s() && g(c) && g(P) && V(R);
    });
  }
  O(e, A);
  var S = fe({
    get nodeId() {
      return d();
    },
    set nodeId(V) {
      d(V), p();
    },
    get position() {
      return f();
    },
    set position(V) {
      f(V), p();
    },
    get align() {
      return v();
    },
    set align(V) {
      v(V), p();
    },
    get offset() {
      return y();
    },
    set offset(V) {
      y(V), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(V) {
      b(V), p();
    }
  });
  return r(), S;
}
se(
  vd,
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
  const { nodes: t, nodeLookup: n } = qe();
  let r = [], o = !0;
  return Wn([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!o0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Al = "tinyflow-component";
class zm {
  constructor(t) {
    if (Ht(this, "options"), Ht(this, "rootEl"), Ht(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Al);
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
    const n = document.createElement(Al);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Dm = () => {
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
}, ni = Dm();
var Lm = /* @__PURE__ */ oe("<button><!></button>");
function Fe(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Lm();
  let i;
  var a = X(o);
  return lr(a, () => n() ?? ft), q(o), ke(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), O(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
se(Fe, { children: {} }, [], [], !0);
var Tm = /* @__PURE__ */ oe("<input>");
function gd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Tm();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
se(gd, {}, [], [], !0);
var Om = /* @__PURE__ */ oe("<input>");
function $t(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Om();
  oo(r);
  let o;
  ke(() => o = ln(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), fe();
}
se($t, {}, [], [], !0);
var Am = /* @__PURE__ */ oe("<textarea></textarea>");
function Dt(e, t) {
  de(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Am();
  kv(o);
  let i;
  return ke(() => i = ln(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), fe({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
se(Dt, { value: {} }, [], [], !0);
var Im = /* @__PURE__ */ oe('<div role="button"><!></div>'), Zm = /* @__PURE__ */ oe("<div></div>");
function hd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  De();
  var l = Zm();
  let u;
  return zt(l, 5, o, vo, (c, d, f) => {
    var v = Im();
    ye(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var y = X(v);
    {
      var b = (C) => {
        var h = Re();
        ke(() => Bt(h, g(d).label)), O(C, h);
      }, x = (C) => {
        var h = et(), _ = be(h);
        lr(_, () => g(d).label ?? ft), O(C, h);
      };
      xe(y, (C) => {
        typeof g(d).label == "string" ? C(b) : C(x, !1);
      });
    }
    q(v), ke(() => mt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), O(c, v);
  }), q(l), ke(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), O(e, l), fe({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), p();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), p();
    }
  });
}
Po(["click", "keydown"]);
se(hd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(g(n)), Bm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Ym = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), qm = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), Xm = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), Wm = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Km = /* @__PURE__ */ oe("<div></div>");
const jm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function pd(e, t) {
  de(t, !0), Je(e, jm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => on([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = Km();
  return zt(a, 21, n, vo, (s, l, u) => {
    var c = Wm(), d = X(c);
    ye(d, "tabindex", u), d.__click = [Rm, i, l], d.__keydown = [Bm, i, l];
    var f = X(d);
    {
      var v = (w) => {
        var k = Ym(), E = X(k);
        qn(E, {
          get target() {
            return g(l).icon;
          }
        }), q(k), O(w, k);
      };
      xe(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var y = Z(f, 2);
    qn(y, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(y, 2);
    q(d);
    var x = Z(d, 2);
    {
      var C = (w) => {
        var k = qm(), E = X(k);
        qn(E, {
          get target() {
            return g(l).description;
          }
        }), q(k), O(w, k);
      };
      xe(x, (w) => {
        g(l).description && w(C);
      });
    }
    var h = Z(x, 2);
    {
      var _ = (w) => {
        var k = Xm(), E = X(k);
        qn(E, {
          get target() {
            return g(l).content;
          }
        }), q(k), O(w, k);
      };
      xe(h, (w) => {
        o().includes(g(l).key) && w(_);
      });
    }
    q(c), ke((w) => mt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), O(s, c);
  }), q(a), ke(() => {
    dt(a, t.style), mt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, a), fe({
    get items() {
      return n();
    },
    set items(s) {
      n(s), p();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), p();
    }
  });
}
Po(["click", "keydown"]);
se(pd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function qn(e, t) {
  de(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (s) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? ft), O(s, l);
    }, a = (s) => {
      var l = et(), u = be(l);
      ns(u, n), O(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return O(e, r), fe({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
se(qn, { target: {} }, [], [], !0);
var Fm = (e, t, n) => t(g(n)), Um = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gm = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), Jm = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Qm = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), e2 = /* @__PURE__ */ oe("<!> <!>", 1), t2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), n2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), r2 = /* @__PURE__ */ oe("<div><!></div>");
function un(e, t) {
  de(t, !0);
  const n = (_, w = ft) => {
    var k = et(), E = be(k);
    zt(E, 19, w, (P, z) => `${z}_${P.value}`, (P, z) => {
      var N = Jm(), T = be(N);
      T.__click = [Fm, b, z];
      var A = X(T), L = X(A);
      {
        var R = (H) => {
          var M = Um();
          O(H, M);
        };
        xe(L, (H) => {
          g(z).children && g(z).children.length > 0 && H(R);
        });
      }
      q(A);
      var S = Z(A, 2);
      qn(S, {
        get target() {
          return g(z).label;
        }
      }), q(T);
      var V = Z(T, 2);
      {
        var $ = (H) => {
          var M = Gm(), D = X(M);
          n(D, () => g(z).children), q(M), O(H, M);
        };
        xe(V, (H) => {
          g(z).children && g(z).children.length > 0 && (l() || c().includes(g(z).value)) && H($);
        });
      }
      O(P, N);
    }), O(_, k);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ yt(t, [
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
  ]), v = /* @__PURE__ */ Ee(() => {
    const _ = [], w = (k) => {
      for (let E of k)
        a().length > 0 ? a().includes(E.value) && _.push(E) : s().includes(E.value) && _.push(E), E.children && E.children.length > 0 && w(E.children);
    };
    return w(r()), _;
  }), y;
  function b(_) {
    var w, k;
    if (_.children && _.children.length > 0) {
      (w = o()) == null || w(_);
      return;
    } else
      y == null || y.hide(), (k = i()) == null || k(_);
  }
  var x = r2();
  let C;
  var h = X(x);
  return Cn(
    Ao(h, {
      floating: (_) => {
        var w = Qm(), k = X(w);
        n(k, r), q(w), O(_, w);
      },
      children: (_, w) => {
        var k = n2();
        let E;
        var P = X(k);
        zt(
          P,
          23,
          () => g(v),
          (z, N) => `${N}_${z.value}`,
          (z, N, T) => {
            var A = et(), L = be(A);
            {
              var R = (V) => {
                var $ = et(), H = be($);
                {
                  var M = (D) => {
                    qn(D, {
                      get target() {
                        return g(N).label;
                      }
                    });
                  };
                  xe(H, (D) => {
                    g(T) === 0 && D(M);
                  });
                }
                O(V, $);
              }, S = (V) => {
                var $ = e2(), H = be($);
                qn(H, {
                  get target() {
                    return g(N).label;
                  }
                });
                var M = Z(H, 2);
                {
                  var D = (I) => {
                    var Y = Re(",");
                    O(I, Y);
                  };
                  xe(M, (I) => {
                    g(T) < g(v).length - 1 && I(D);
                  });
                }
                O(V, $);
              };
              xe(L, (V) => {
                u() ? V(S, !1) : V(R);
              });
            }
            O(z, A);
          },
          (z) => {
            var N = t2(), T = X(N, !0);
            q(N), ke(() => Bt(T, d())), O(z, N);
          }
        ), q(P), Ne(2), q(k), ke(() => E = ln(k, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), O(_, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), q(x), ke(() => C = ln(x, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), O(e, x), fe({
    get items() {
      return r();
    },
    set items(_) {
      r(_), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect(_) {
      i(_), p();
    },
    get value() {
      return a();
    },
    set value(_ = []) {
      a(_), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(_ = []) {
      s(_), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), p();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(_) {
      d(_), p();
    }
  });
}
Po(["click"]);
se(
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
const $o = Math.min, Sr = Math.max, Pi = Math.round, yn = (e) => ({
  x: e,
  y: e
}), o2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, i2 = {
  start: "end",
  end: "start"
};
function La(e, t, n) {
  return Sr(e, $o(t, n));
}
function Lo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function md(e) {
  return e === "x" ? "y" : "x";
}
function bs(e) {
  return e === "y" ? "height" : "width";
}
function Ar(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function xs(e) {
  return md(Ar(e));
}
function a2(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e), o = xs(e), i = bs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ei(a)), [a, Ei(a)];
}
function s2(e) {
  const t = Ei(e);
  return [Ta(e), t, Ta(t)];
}
function Ta(e) {
  return e.replace(/start|end/g, (t) => i2[t]);
}
function l2(e, t, n) {
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
function u2(e, t, n, r) {
  const o = To(e);
  let i = l2(fr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Ta)))), i;
}
function Ei(e) {
  return e.replace(/left|right|bottom|top/g, (t) => o2[t]);
}
function c2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yd(e) {
  return typeof e != "number" ? c2(e) : {
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
function Il(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ar(t), a = xs(t), s = bs(a), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (To(t)) {
    case "start":
      v[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const d2 = async (e, t, n) => {
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
  } = Il(u, r, l), f = r, v = {}, y = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: C
    } = s[b], {
      x: h,
      y: _,
      data: w,
      reset: k
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = _ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, k && y <= 50 && (y++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Il(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function wd(e, t) {
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
    altBoundary: f = !1,
    padding: v = 0
  } = Lo(t, e), y = yd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: (x.top - w.top + y.top) / _.y,
    bottom: (w.bottom - x.bottom + y.bottom) / _.y,
    left: (x.left - w.left + y.left) / _.x,
    right: (w.right - x.right + y.right) / _.x
  };
}
const f2 = (e) => ({
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
    } = Lo(e, t) || {};
    if (u == null)
      return {};
    const d = yd(c), f = {
      x: n,
      y: r
    }, v = xs(o), y = bs(v), b = await a.getDimensions(u), x = v === "y", C = x ? "top" : "left", h = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", w = i.reference[y] + i.reference[v] - f[v] - i.floating[y], k = f[v] - i.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = E ? E[_] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(E))) && (P = s.floating[_] || i.floating[y]);
    const z = w / 2 - k / 2, N = P / 2 - b[y] / 2 - 1, T = $o(d[C], N), A = $o(d[h], N), L = T, R = P - b[y] - A, S = P / 2 - b[y] / 2 + z, V = La(L, S, R), $ = !l.arrow && To(o) != null && S !== V && i.reference[y] / 2 - (S < L ? T : A) - b[y] / 2 < 0, H = $ ? S < L ? S - L : S - R : 0;
    return {
      [v]: f[v] + H,
      data: {
        [v]: V,
        centerOffset: S - V - H,
        ...$ && {
          alignmentOffset: H
        }
      },
      reset: $
    };
  }
}), v2 = function(e) {
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
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: b = !0,
        ...x
      } = Lo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = fr(o), h = Ar(s), _ = fr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (_ || !b ? [Ei(s)] : s2(s)), E = y !== "none";
      !f && E && k.push(...u2(s, b, y, w));
      const P = [s, ...k], z = await wd(t, x), N = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(z[C]), d) {
        const S = a2(o, a, w);
        N.push(z[S[0]], z[S[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: N
      }], !N.every((S) => S <= 0)) {
        var A, L;
        const S = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, V = P[S];
        if (V)
          return {
            data: {
              index: S,
              overflows: T
            },
            reset: {
              placement: V
            }
          };
        let $ = (L = T.filter((H) => H.overflows[0] <= 0).sort((H, M) => H.overflows[1] - M.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var R;
              const H = (R = T.filter((M) => {
                if (E) {
                  const D = Ar(M.placement);
                  return D === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((D) => D > 0).reduce((D, I) => D + I, 0)]).sort((M, D) => M[1] - D[1])[0]) == null ? void 0 : R[0];
              H && ($ = H);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function g2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = To(n), l = Ar(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Lo(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const h2 = function(e) {
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
      } = t, l = await g2(t, e);
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
}, p2 = function(e) {
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
              x: C,
              y: h
            } = x;
            return {
              x: C,
              y: h
            };
          }
        },
        ...l
      } = Lo(e, t), u = {
        x: n,
        y: r
      }, c = await wd(t, l), d = Ar(fr(o)), f = md(d);
      let v = u[f], y = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[x], _ = v - c[C];
        v = La(h, v, _);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = y + c[x], _ = y - c[C];
        y = La(h, y, _);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: y
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function ji() {
  return typeof window < "u";
}
function Xr(e) {
  return bd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (bd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bd(e) {
  return ji() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function cn(e) {
  return ji() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function _n(e) {
  return ji() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function Zl(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function Oo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function m2(e) {
  return ["table", "td", "th"].includes(Xr(e));
}
function Fi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function $s(e) {
  const t = Cs(), n = cn(e) ? dn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function y2(e) {
  let t = Jn(e);
  for (; _n(t) && !Ir(t); ) {
    if ($s(t))
      return t;
    if (Fi(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function Cs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ir(e) {
  return ["html", "body", "#document"].includes(Xr(e));
}
function dn(e) {
  return Yt(e).getComputedStyle(e);
}
function Ui(e) {
  return cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Xr(e) === "html")
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
function xd(e) {
  const t = Jn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Oo(t) ? t : xd(t);
}
function $d(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = xd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Yt(o);
  return i ? (Oa(a), t.concat(a, a.visualViewport || [], Oo(o) ? o : [], [])) : t.concat(o, $d(o, []));
}
function Oa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cd(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Pi(n) !== i || Pi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function _d(e) {
  return cn(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = _d(e);
  if (!_n(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Cd(t);
  let a = (i ? Pi(n.width) : n.width) / r, s = (i ? Pi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const w2 = /* @__PURE__ */ yn(0);
function kd(e) {
  const t = Yt(e);
  return !Cs() || !t.visualViewport ? w2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function b2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _d(e);
  let a = yn(1);
  t && (r ? cn(r) && (a = Pr(r)) : a = Pr(e));
  const s = b2(i, n, r) ? kd(i) : yn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Yt(i), v = r && cn(r) ? Yt(r) : r;
    let y = f, b = Oa(y);
    for (; b && r && v !== y; ) {
      const x = Pr(b), C = b.getBoundingClientRect(), h = dn(b), _ = C.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = C.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += w, y = Yt(b), b = Oa(y);
    }
  }
  return Mi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function _s(e, t) {
  const n = Ui(e).scrollLeft;
  return t ? t.left + n : Co(An(e)).left + n;
}
function Sd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    _s(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function x2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = An(r), s = t ? Fi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = yn(1);
  const c = yn(0), d = _n(r);
  if ((d || !d && !i) && ((Xr(r) !== "body" || Oo(a)) && (l = Ui(r)), _n(r))) {
    const v = Co(r);
    u = Pr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Sd(a, l, !0) : yn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function $2(e) {
  return Array.from(e.getClientRects());
}
function C2(e) {
  const t = An(e), n = Ui(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + _s(e);
  const s = -n.scrollTop;
  return dn(r).direction === "rtl" && (a += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function _2(e, t) {
  const n = Yt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Cs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function k2(e, t) {
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e) ? Pr(e) : yn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = _2(e, n);
  else if (t === "document")
    r = C2(An(e));
  else if (cn(t))
    r = k2(t, n);
  else {
    const o = kd(e);
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
  return n === t || !cn(n) || Ir(n) ? !1 : dn(n).position === "fixed" || Pd(n, t);
}
function S2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $d(e, []).filter((s) => cn(s) && Xr(s) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; cn(a) && !Ir(a); ) {
    const s = dn(a), l = $s(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Oo(a) && !l && Pd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function P2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fi(t) ? [] : S2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Rl(t, u, o);
    return l.top = Sr(c.top, l.top), l.right = $o(c.right, l.right), l.bottom = $o(c.bottom, l.bottom), l.left = Sr(c.left, l.left), l;
  }, Rl(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function E2(e) {
  const {
    width: t,
    height: n
  } = Cd(e);
  return {
    width: t,
    height: n
  };
}
function M2(e, t, n) {
  const r = _n(t), o = An(t), i = n === "fixed", a = Co(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((Xr(t) !== "body" || Oo(o)) && (s = Ui(t)), r) {
      const f = Co(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = _s(o));
  const u = o && !r && !i ? Sd(o, s) : yn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function fa(e) {
  return dn(e).position === "static";
}
function Bl(e, t) {
  if (!_n(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Ed(e, t) {
  const n = Yt(e);
  if (Fi(e))
    return n;
  if (!_n(e)) {
    let o = Jn(e);
    for (; o && !Ir(o); ) {
      if (cn(o) && !fa(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Bl(e, t);
  for (; r && m2(r) && fa(r); )
    r = Bl(r, t);
  return r && Ir(r) && fa(r) && !$s(r) ? n : r || y2(e) || n;
}
const H2 = async function(e) {
  const t = this.getOffsetParent || Ed, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: M2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function V2(e) {
  return dn(e).direction === "rtl";
}
const N2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: x2,
  getDocumentElement: An,
  getClippingRect: P2,
  getOffsetParent: Ed,
  getElementRects: H2,
  getClientRects: $2,
  getDimensions: E2,
  getScale: Pr,
  isElement: cn,
  isRTL: V2
}, z2 = h2, D2 = p2, L2 = v2, T2 = f2, O2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: N2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return d2(e, t, {
    ...o,
    platform: i
  });
}, A2 = ({
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
    const C = document.querySelector(e);
    if (C)
      e = C;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const C = document.querySelector(n);
    if (C)
      u = C;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    O2(e, u, {
      placement: r,
      middleware: [
        z2(o),
        // 手动偏移配置
        L2(i),
        //自动翻转
        D2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [T2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: E } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function y() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(C) {
    C.stopPropagation(), f ? y() : v();
  }
  function x(C) {
    u.contains(C.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var I2 = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Ao(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  Jt(() => (s = A2({
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
  var u = I2(), c = X(u), d = X(c);
  lr(d, n), q(c), Cn(c, (y) => i = y, () => i);
  var f = Z(c, 2), v = X(f);
  return lr(v, r), q(f), Cn(f, (y) => a = y, () => a), q(u), O(e, u), fe({
    hide: l,
    get children() {
      return n();
    },
    set children(y) {
      n(y), p();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), p();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), p();
    }
  });
}
se(Ao, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  de(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = et(), s = be(a);
  return Dv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    ke(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = be(d);
    lr(f, () => n() ?? ft), O(u, d);
  }), O(e, a), fe({
    get children() {
      return n();
    },
    set children(l) {
      n(l), p();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), p();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), p();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), p();
    }
  });
}
se(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Z2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Gi(e, t) {
  de(t, !0), Je(e, R2);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Z2();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
se(Gi, {}, [], [], !0);
const B2 = () => {
  const e = qe();
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
}, Y2 = () => {
  const { nodes: e, nodeLookup: t } = qe();
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
var q2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), X2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), W2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), K2 = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), j2 = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const F2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function gn(e, t) {
  de(t, !0), Je(e, F2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: y, getNode: b } = Lt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: C } = B2(), { copyNode: h } = Y2(), _ = Qn(), w = () => {
    var $;
    ($ = _.onNodeExecute) == null || $.call(_, b(r()));
  };
  var k = j2(), E = be(k);
  {
    var P = ($) => {
      vd($, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (H, M) => {
          var D = K2(), I = X(D);
          {
            var Y = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: w,
                children: (ge, pe) => {
                  var le = q2();
                  O(ge, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(I, (re) => {
              s() && re(Y);
            });
          }
          var K = Z(I, 2);
          {
            var Q = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (ge, pe) => {
                  var le = X2();
                  O(ge, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(K, (re) => {
              l() && re(Q);
            });
          }
          var U = Z(K, 2);
          {
            var W = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ge, pe) => {
                  var le = W2();
                  O(ge, le);
                },
                $$slots: { default: !0 }
              });
            };
            xe(U, (re) => {
              u() && re(W);
            });
          }
          q(D), O(H, D);
        },
        $$slots: { default: !0 }
      });
    };
    xe(E, ($) => {
      (s() || l() || u()) && $(P);
    });
  }
  var z = Z(E, 2), N = Z(X(z), 2), T = X(N);
  pd(T, {
    items: x,
    activeKeys: v,
    onChange: ($, H) => {
      var M;
      y(r(), { expand: H == null ? void 0 : H.includes("key") }), (M = f()) == null || M(H != null && H.includes("key") ? "key" : "");
    }
  }), q(N), q(z);
  var A = Z(z, 2);
  {
    var L = ($) => {
      Gn($, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(A, ($) => {
      d() && $(L);
    });
  }
  var R = Z(A, 2);
  {
    var S = ($) => {
      Gn($, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(R, ($) => {
      c() && $(S);
    });
  }
  var V = Z(R, 2);
  return lr(V, () => i() ?? ft), O(e, k), fe({
    get data() {
      return n();
    },
    set data($) {
      n($), p();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), p();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), p();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), p();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute($ = !0) {
      s($), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete($ = !0) {
      u($), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle($ = !0) {
      c($), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle($ = !0) {
      d($), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse($) {
      f($), p();
    }
  });
}
se(
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
function gt() {
  return sr("svelteflow__node_id");
}
const Md = [
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
], U2 = [
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
var G2 = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), J2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Q2 = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ey = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Hd(e, t) {
  de(t, !0), Je(e, ey);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Ee(() => pr(s)), u = /* @__PURE__ */ Ee(() => {
    var N, T;
    return {
      ...i(),
      ...(T = (N = o()) == null ? void 0 : N.data) == null ? void 0 : T.parameters[a()]
    };
  });
  const { updateNodeData: c } = Lt(), d = (N, T) => {
    c(s, (A) => {
      let L = A.data.parameters;
      return L[a()][N] = T, { parameters: L };
    });
  }, f = (N) => {
    const T = N.target.value;
    d("name", T);
  }, v = (N) => {
    const T = N.target.checked;
    d("required", T);
  }, y = (N) => {
    const T = N.value;
    T && d("dataType", T);
  };
  let b;
  const x = () => {
    c(s, (N) => {
      let T = N.data.parameters;
      return T.splice(a(), 1), { parameters: [...T] };
    }), b == null || b.hide();
  };
  var C = Q2(), h = be(C), _ = X(h);
  $t(_, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), q(h);
  var w = Z(h, 2), k = X(w);
  gd(k, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), q(w);
  var E = Z(w, 2), P = X(E);
  Cn(
    Ao(P, {
      placement: "bottom",
      floating: (N) => {
        var T = G2(), A = X(T), L = Z(X(A));
        const R = /* @__PURE__ */ Ee(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        un(L, {
          items: Md,
          style: "width: 100%",
          onSelect: y,
          get value() {
            return g(R);
          }
        }), q(A);
        var S = Z(A, 2), V = Z(X(S));
        Dt(V, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("defaultValue", Y);
          }
        }), q(S);
        var $ = Z(S, 2), H = Z(X($));
        Dt(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("description", Y);
          }
        }), q($);
        var M = Z($, 2), D = X(M);
        Fe(D, {
          onclick: x,
          children: (I, Y) => {
            Ne();
            var K = Re("删除");
            O(I, K);
          },
          $$slots: { default: !0 }
        }), q(M), q(T), O(N, T);
      },
      children: (N, T) => {
        Fe(N, {
          class: "input-btn-more",
          children: (A, L) => {
            var R = J2();
            O(A, R);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => b = N,
    () => b
  ), q(E), O(e, C);
  var z = fe({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), p();
    },
    get index() {
      return a();
    },
    set index(N) {
      a(N), p();
    }
  });
  return r(), z;
}
se(Hd, { parameter: {}, index: {} }, [], [], !0);
var ty = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ny = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), ry = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const oy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Vd(e, t) {
  de(t, !0), Je(e, oy);
  const [n, r] = tt(), o = () => J(g(a), "$node", n);
  let i = gt(), a = /* @__PURE__ */ Ee(() => pr(i)), s = /* @__PURE__ */ Ee(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = ry(), u = X(l);
  {
    var c = (f) => {
      var v = ty();
      Ne(4), O(f, v);
    };
    xe(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  zt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, y) => {
      Hd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(y);
        }
      });
    },
    (f) => {
      var v = ny();
      O(f, v);
    }
  ), q(l), O(e, l), fe(), r();
}
se(Vd, {}, [], [], !0);
const Nd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Nd(t.children);
  });
}, Pn = () => {
  const { updateNodeData: e } = Lt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Nd(r == null ? void 0 : r.children);
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
var iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sy = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ly = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function zd(e, t) {
  de(t, !0), Je(e, ly);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
  return gn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = iy();
      O(a, s);
    },
    children: (a, s) => {
      var l = sy(), u = be(l), c = X(u);
      Ge(c, {
        level: 3,
        children: (v, y) => {
          Ne();
          var b = Re("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      Fe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, y) => {
          var b = ay();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), q(u);
      var f = Z(u, 2);
      Vd(f, {}), O(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
se(zd, { data: {} }, [], [], !0);
const Dd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Dd(e, r.source, n));
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
}, uy = (e = !1) => {
  const t = gt(), n = pr(t), { nodes: r, edges: o } = qe();
  return Wn([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = Yl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Dd(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Yl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var cy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), dy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const fy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  de(t, !0), Je(e, fy);
  const [n, r] = tt(), o = () => J(g(c), "$node", n), i = () => J(w, "$selectItems", n);
  Jt(() => {
    g(d).refType || C({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Ee(() => pr(u)), d = /* @__PURE__ */ Ee(() => {
    var V;
    return {
      ...a(),
      ...(V = o()) == null ? void 0 : V.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Lt(), v = (V, $) => {
    f(u, (H) => {
      let M = H.data[l()];
      return M[s()] = { ...M[s()], [V]: $ }, { [l()]: M };
    });
  }, y = (V) => {
    const $ = V.target.value;
    v("name", $);
  }, b = (V) => {
    const $ = V.target.value;
    v("value", $);
  }, x = (V) => {
    const $ = V.value;
    v("ref", $);
  }, C = (V) => {
    const $ = V.value;
    v("refType", $);
  };
  let h;
  const _ = () => {
    f(u, (V) => {
      let $ = V.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), h == null || h.hide();
  }, w = uy();
  var k = dy(), E = be(k), P = X(E);
  $t(P, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), q(E);
  var z = Z(E, 2), N = X(z);
  {
    var T = (V) => {
      $t(V, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (V, $) => {
      {
        var H = (M) => {
          const D = /* @__PURE__ */ Ee(() => [g(d).ref]);
          un(M, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(D);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        xe(
          V,
          (M) => {
            g(d).refType !== "input" && M(H);
          },
          $
        );
      }
    };
    xe(N, (V) => {
      g(d).refType === "fixed" ? V(T) : V(A, !1);
    });
  }
  q(z);
  var L = Z(z, 2), R = X(L);
  Cn(
    Ao(R, {
      placement: "bottom",
      floating: (V) => {
        var $ = cy(), H = X($), M = Z(X(H));
        const D = /* @__PURE__ */ Ee(() => g(d).refType ? [g(d).refType] : []);
        un(M, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(D);
          },
          onSelect: C
        }), q(H);
        var I = Z(H, 2), Y = Z(X(I));
        Dt(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            const ge = re.target.value;
            v("defaultValue", ge);
          }
        }), q(I);
        var K = Z(I, 2), Q = Z(X(K));
        Dt(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (re) => {
            const ge = re.target.value;
            v("description", ge);
          }
        }), q(K);
        var U = Z(K, 2), W = X(U);
        Fe(W, {
          onclick: _,
          children: (re, ge) => {
            Ne();
            var pe = Re("删除");
            O(re, pe);
          },
          $$slots: { default: !0 }
        }), q(U), q($), O(V, $);
      },
      children: (V, $) => {
        Gi(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => h = V,
    () => h
  ), q(L), O(e, k);
  var S = fe({
    get parameter() {
      return a();
    },
    set parameter(V) {
      a(V), p();
    },
    get index() {
      return s();
    },
    set index(V) {
      s(V), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(V) {
      l(V), p();
    }
  });
  return r(), S;
}
se(Ld, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var vy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), gy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), hy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const py = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  de(t, !0), Je(e, py);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Ee(() => pr(s)), u = /* @__PURE__ */ Ee(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = hy(), d = X(c);
  {
    var f = (b) => {
      var x = vy();
      Ne(4), O(b, x);
    };
    xe(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  zt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, C) => {
      Ld(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = gy(), C = X(x, !0);
      q(x), ke(() => Bt(C, i())), O(b, x);
    }
  ), q(c), O(e, c);
  var y = fe({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), p();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), p();
    }
  });
  return r(), y;
}
se(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var my = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), yy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const by = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Td(e, t) {
  de(t, !0), Je(e, by);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
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
        var s = my();
        O(a, s);
      },
      children: (a, s) => {
        var l = wy(), u = be(l), c = X(u);
        Ge(c, {
          level: 3,
          children: (v, y) => {
            Ne();
            var b = Re("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var b = yy();
            O(v, b);
          },
          $$slots: { default: !0 }
        }), q(u);
        var f = Z(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), O(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
se(Td, { data: {} }, [], [], !0);
var xy = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), $y = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), Cy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const ky = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  de(t, !0), Je(e, ky);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Ee(() => pr(l)), c = /* @__PURE__ */ Ee(() => {
    var H;
    let M = (H = o()) == null ? void 0 : H.data[s()], D;
    if (M && a().length > 0) {
      let I = M;
      for (let Y = 0; Y < a().length; Y++) {
        const K = a()[Y];
        Y == a().length - 1 ? D = I[K] : I = I[K].children;
      }
    }
    return { ...i(), ...D };
  });
  const { updateNodeData: d } = Lt(), f = (H, M) => {
    d(l, (D) => {
      const I = D.data[s()];
      if (I && a().length > 0) {
        let Y = I;
        for (let K = 0; K < a().length; K++) {
          const Q = a()[K];
          K == a().length - 1 ? Y[Q] = { ...Y[Q], [H]: M } : Y = I[Q].children;
        }
      }
      return { [s()]: I };
    });
  }, v = (H) => {
    const M = H.target.value;
    f("name", M);
  }, y = (H) => {
    const M = H.value;
    f("dataType", M);
  };
  let b;
  const x = () => {
    d(l, (H) => {
      let M = H.data[s()];
      if (M && a().length > 0) {
        let D = M;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? D.splice(Y, 1) : D = D[Y].children;
        }
      }
      return { [s()]: [...M] };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (H) => {
      let M = H.data[s()];
      if (M && a().length > 0) {
        let D = M;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? D[Y].children ? D[Y].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : D[Y].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : D = D[Y].children;
        }
      }
      return { [s()]: [...M] };
    });
  };
  var h = _y(), _ = be(h), w = X(_);
  {
    var k = (H) => {
      var M = et(), D = be(M);
      zt(D, 17, a, vo, (I, Y) => {
        Ne();
        var K = Re(" ");
        O(I, K);
      }), O(H, M);
    };
    xe(w, (H) => {
      a().length > 1 && H(k);
    });
  }
  var E = Z(w, 2);
  const P = /* @__PURE__ */ Ee(() => g(c).nameDisabled === !0);
  $t(E, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(P);
    }
  }), q(_);
  var z = Z(_, 2), N = X(z);
  const T = /* @__PURE__ */ Ee(() => g(c).dataType ? [g(c).dataType] : []), A = /* @__PURE__ */ Ee(() => g(c).dataTypeDisabled === !0);
  un(N, {
    items: Md,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(T);
    },
    get disabled() {
      return g(A);
    },
    onSelect: y
  });
  var L = Z(N, 2);
  {
    var R = (H) => {
      Fe(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (M, D) => {
          var I = xy();
          O(M, I);
        },
        $$slots: { default: !0 }
      });
    };
    xe(L, (H) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && H(R);
    });
  }
  q(z);
  var S = Z(z, 2), V = X(S);
  Cn(
    Ao(V, {
      placement: "bottom",
      floating: (H) => {
        var M = Cy(), D = X(M), I = Z(X(D));
        const Y = /* @__PURE__ */ Ee(() => g(c).defaultValue || "");
        Dt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(Y);
          },
          onchange: (ge) => {
            const pe = ge.target.value;
            f("defaultValue", pe);
          }
        }), q(D);
        var K = Z(D, 2), Q = Z(X(K));
        const U = /* @__PURE__ */ Ee(() => g(c).description || "");
        Dt(Q, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(U);
          },
          onchange: (ge) => {
            const pe = ge.target.value;
            f("description", pe);
          }
        }), q(K);
        var W = Z(K, 2);
        {
          var re = (ge) => {
            var pe = $y(), le = X(pe);
            Fe(le, {
              onclick: x,
              children: (Ve, ie) => {
                Ne();
                var ae = Re("删除");
                O(Ve, ae);
              },
              $$slots: { default: !0 }
            }), q(pe), O(ge, pe);
          };
          xe(W, (ge) => {
            g(c).deleteDisabled !== !0 && ge(re);
          });
        }
        q(M), O(H, M);
      },
      children: (H, M) => {
        Gi(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => b = H,
    () => b
  ), q(S), O(e, h);
  var $ = fe({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), p();
    },
    get position() {
      return a();
    },
    set position(H) {
      a(H), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(H) {
      s(H), p();
    }
  });
  return r(), $;
}
se(Od, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ oe("<!> <!>", 1), Py = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), Ey = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Hy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  de(t, !0), Je(e, Hy);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = (x, C = ft, h = ft) => {
    var _ = et(), w = be(_);
    zt(
      w,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, E, P) => {
        var z = Sy(), N = be(z);
        const T = /* @__PURE__ */ Ee(() => [...h(), g(P)]);
        Od(N, {
          get parameter() {
            return g(E);
          },
          get position() {
            return g(T);
          },
          get dataKeyName() {
            return s();
          }
        });
        var A = Z(N, 2);
        {
          var L = (R) => {
            var S = /* @__PURE__ */ me(() => [...h(), g(P)]);
            i(R, () => g(E).children, () => g(S));
          };
          xe(A, (R) => {
            g(E).children && R(L);
          });
        }
        O(k, z);
      },
      (k) => {
        var E = et(), P = be(E);
        {
          var z = (N) => {
            var T = Py(), A = X(T, !0);
            q(T), ke(() => Bt(A, a())), O(N, T);
          };
          xe(P, (N) => {
            h().length === 0 && N(z);
          });
        }
        O(k, E);
      }
    ), O(x, _);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Ee(() => pr(l)), c = /* @__PURE__ */ Ee(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = My(), f = X(d);
  {
    var v = (x) => {
      var C = Ey();
      Ne(4), O(x, C);
    };
    xe(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var y = Z(f, 2);
  i(y, () => g(c) || [], () => []), q(d), O(e, d);
  var b = fe({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), p();
    }
  });
  return r(), b;
}
se(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Vy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Dy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ly = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ty = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ oe('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ay = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  de(t, !0), Je(e, Ay);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ xt(on([]));
  Jt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Vy();
        O(u, c);
      },
      children: (u, c) => {
        var d = Oy(), f = be(d), v = X(f);
        Ge(v, {
          level: 3,
          children: (ae, Me) => {
            Ne();
            var Pe = Re("输入参数");
            O(ae, Pe);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ae, Me) => {
            var Pe = Ny();
            O(ae, Pe);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (ae, Me) => {
            Ne();
            var Pe = Re("模型设置");
            O(ae, Pe);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = X(C);
        const _ = /* @__PURE__ */ Ee(() => n().llmId ? [n().llmId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ae) => {
            const Me = ae.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return g(_);
          }
        });
        var w = Z(h, 2);
        Gi(w, {}), q(C);
        var k = Z(C, 4), E = X(k), P = X(E), z = X(P);
        q(P);
        var N = Z(P, 2);
        oo(N), N.__input = [zy, l, o], q(E), q(k);
        var T = Z(k, 2), A = X(T), L = X(A), R = X(L);
        q(L);
        var S = Z(L, 2);
        oo(S), S.__input = [Dy, l, o], q(A), q(T);
        var V = Z(T, 2), $ = X(V), H = X($), M = X(H);
        q(H);
        var D = Z(H, 2);
        oo(D), D.__input = [Ly, l, o], q($), q(V);
        var I = Z(V, 4), Y = X(I);
        const K = /* @__PURE__ */ Ee(() => n().systemPrompt || "");
        Dt(Y, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(K);
          },
          oninput: (ae) => {
            l(o, { systemPrompt: ae.target.value });
          }
        }), q(I);
        var Q = Z(I, 4), U = X(Q);
        const W = /* @__PURE__ */ Ee(() => n().userPrompt || "");
        Dt(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(W);
          },
          oninput: (ae) => {
            l(o, { userPrompt: ae.target.value });
          }
        }), q(Q);
        var re = Z(Q, 2), ge = X(re);
        Ge(ge, {
          level: 3,
          mt: "10px",
          children: (ae, Me) => {
            Ne();
            var Pe = Re("输出参数");
            O(ae, Pe);
          },
          $$slots: { default: !0 }
        });
        var pe = Z(ge, 2);
        const le = /* @__PURE__ */ Ee(() => n().outType ? [n().outType] : []);
        un(pe, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ae) => {
            const Me = ae.value;
            l(o, () => ({ outType: Me }));
          },
          get value() {
            return g(le);
          }
        });
        var Ve = Z(pe, 2);
        Fe(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ae, Me) => {
            var Pe = Ty();
            O(ae, Pe);
          },
          $$slots: { default: !0 }
        }), q(re);
        var ie = Z(re, 2);
        In(ie, {}), ke(() => {
          Bt(z, `Temperature: ${n().temperature ?? 0.5}`), na(N, n().temperature ?? 0.5), Bt(R, `Top P: ${n().topP ?? 0.9}`), na(S, n().topP ?? 0.9), Bt(M, `Top K: ${n().topK ?? 50}`), na(D, n().topK ?? 50);
        }), O(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
Po(["input"]);
se(Ad, { data: {} }, [], [], !0);
var Iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Zy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Yy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Id(e, t) {
  de(t, !0), Je(e, Yy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Jt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: i } = Pn(), { updateNodeData: a } = Lt(), s = [
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
      icon: (l) => {
        var u = Iy();
        O(l, u);
      },
      children: (l, u) => {
        var c = By(), d = be(c), f = X(d);
        Ge(f, {
          level: 3,
          children: (T, A) => {
            Ne();
            var L = Re("输入参数");
            O(T, L);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, A) => {
            var L = Zy();
            O(T, L);
          },
          $$slots: { default: !0 }
        }), q(d);
        var y = Z(d, 2);
        Zt(y, {});
        var b = Z(y, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Ne();
            var L = Re("代码");
            O(T, L);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 4), C = X(x);
        const h = /* @__PURE__ */ Ee(() => n().engine ? [n().engine] : ["qlexpress"]);
        un(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (T) => {
            const A = T.value;
            a(o, () => ({ engine: A }));
          },
          get value() {
            return g(h);
          }
        }), q(x);
        var _ = Z(x, 4), w = X(_);
        const k = /* @__PURE__ */ Ee(() => n().code || "");
        Dt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (T) => {
            a(o, () => ({ code: T.target.value }));
          },
          get value() {
            return g(k);
          }
        }), q(_);
        var E = Z(_, 2), P = X(E);
        Ge(P, {
          level: 3,
          mt: "10px",
          children: (T, A) => {
            Ne();
            var L = Re("输出参数");
            O(T, L);
          },
          $$slots: { default: !0 }
        });
        var z = Z(P, 2);
        Fe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (T, A) => {
            var L = Ry();
            O(T, L);
          },
          $$slots: { default: !0 }
        }), q(E);
        var N = Z(E, 2);
        In(N, {}), O(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
se(Id, { data: {} }, [], [], !0);
var qy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Xy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  de(t, !0), Je(e, Ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), { updateNodeData: a } = Lt();
  return Fn(() => {
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
      icon: (s) => {
        var l = qy();
        O(s, l);
      },
      children: (s, l) => {
        var u = Wy(), c = be(u), d = X(c);
        Ge(d, {
          level: 3,
          children: (k, E) => {
            Ne();
            var P = Re("输入参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        Fe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, E) => {
            var P = Xy();
            O(k, P);
          },
          $$slots: { default: !0 }
        }), q(c);
        var v = Z(c, 2);
        Zt(v, {});
        var y = Z(v, 2);
        Ge(y, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Ne();
            var P = Re("代码");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var b = Z(y, 4), x = X(b);
        const C = /* @__PURE__ */ Ee(() => n().template || "");
        Dt(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(C);
          }
        }), q(b);
        var h = Z(b, 2), _ = X(h);
        Ge(_, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Ne();
            var P = Re("输出参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        }), q(h);
        var w = Z(h, 2);
        In(w, {}), O(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
se(Zd, { data: {} }, [], [], !0);
var jy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Fy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ oe('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Qy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ oe('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), tw = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), nw = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), rw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const iw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Rd(e, t) {
  de(t, !0), Je(e, iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
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
  ], i = gt(), { addParameter: a } = Pn(), { updateNodeData: s } = Lt();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = jy();
        O(l, u);
      },
      children: (l, u) => {
        var c = ow(), d = be(c), f = X(d), v = X(f);
        const y = /* @__PURE__ */ Ee(() => n().method ? [n().method] : ["get"]);
        un(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ue) => {
            const ce = ue.value;
            s(i, () => ({ method: ce }));
          },
          get value() {
            return g(y);
          }
        }), q(f);
        var b = Z(f, 2), x = X(b);
        const C = /* @__PURE__ */ Ee(() => n().url || "");
        $t(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ue) => {
            s(i, () => ({ url: ue.target.value }));
          },
          get value() {
            return g(C);
          }
        }), q(b), q(d);
        var h = Z(d, 2), _ = X(h);
        Ge(_, {
          level: 3,
          children: (ue, ce) => {
            Ne();
            var Ce = Re("Http 头信息");
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        });
        var w = Z(_, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ue, ce) => {
            var Ce = Fy();
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        }), q(h);
        var k = Z(h, 2);
        Zt(k, { dataKeyName: "headers" });
        var E = Z(k, 2), P = X(E);
        Ge(P, {
          level: 3,
          children: (ue, ce) => {
            Ne();
            var Ce = Re("参数");
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        });
        var z = Z(P, 2);
        Fe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (ue, ce) => {
            var Ce = Uy();
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        }), q(E);
        var N = Z(E, 2);
        Zt(N, { dataKeyName: "urlParameters" });
        var T = Z(N, 2);
        Ge(T, {
          level: 3,
          mt: "10px",
          children: (ue, ce) => {
            Ne();
            var Ce = Re("Body");
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        });
        var A = Z(T, 2), L = X(A), R = X(L);
        const S = /* @__PURE__ */ Ee(() => !n().bodyType);
        $t(R, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (ue) => {
            var ce;
            (ce = ue.target) != null && ce.checked && s(i, { bodyType: "" });
          }
        }), Ne(), q(L);
        var V = Z(L, 2), $ = X(V);
        const H = /* @__PURE__ */ Ee(() => n().bodyType === "form-data");
        $t($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(H);
          },
          onchange: (ue) => {
            var ce;
            (ce = ue.target) != null && ce.checked && s(i, { bodyType: "form-data" });
          }
        }), Ne(), q(V);
        var M = Z(V, 2), D = X(M);
        const I = /* @__PURE__ */ Ee(() => n().bodyType === "x-www-form-urlencoded");
        $t(D, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(I);
          },
          onchange: (ue) => {
            var ce;
            (ce = ue.target) != null && ce.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), q(M);
        var Y = Z(M, 2), K = X(Y);
        const Q = /* @__PURE__ */ Ee(() => n().bodyType === "json");
        $t(K, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(Q);
          },
          onchange: (ue) => {
            var ce;
            (ce = ue.target) != null && ce.checked && s(i, { bodyType: "json" });
          }
        }), Ne(), q(Y);
        var U = Z(Y, 2), W = X(U);
        const re = /* @__PURE__ */ Ee(() => n().bodyType === "raw");
        $t(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(re);
          },
          onchange: (ue) => {
            var ce;
            (ce = ue.target) != null && ce.checked && s(i, { bodyType: "raw" });
          }
        }), Ne(), q(U), q(A);
        var ge = Z(A, 2);
        {
          var pe = (ue) => {
            var ce = Jy(), Ce = be(ce), We = X(Ce);
            Ge(We, {
              level: 3,
              children: (it, ee) => {
                Ne();
                var Oe = Re("参数");
                O(it, Oe);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(We, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, ee) => {
                var Oe = Gy();
                O(it, Oe);
              },
              $$slots: { default: !0 }
            }), q(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromData" }), O(ue, ce);
          };
          xe(ge, (ue) => {
            n().bodyType === "form-data" && ue(pe);
          });
        }
        var le = Z(ge, 2);
        {
          var Ve = (ue) => {
            var ce = ew(), Ce = be(ce), We = X(Ce);
            Ge(We, {
              level: 3,
              children: (it, ee) => {
                Ne();
                var Oe = Re("参数");
                O(it, Oe);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(We, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, ee) => {
                var Oe = Qy();
                O(it, Oe);
              },
              $$slots: { default: !0 }
            }), q(Ce);
            var st = Z(Ce, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), O(ue, ce);
          };
          xe(le, (ue) => {
            n().bodyType === "x-www-form-urlencoded" && ue(Ve);
          });
        }
        var ie = Z(le, 2);
        {
          var ae = (ue) => {
            var ce = tw(), Ce = X(ce);
            Dt(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (We) => {
                s(i, { bodyJson: We.target.value });
              }
            }), q(ce), O(ue, ce);
          };
          xe(ie, (ue) => {
            n().bodyType === "json" && ue(ae);
          });
        }
        var Me = Z(ie, 2);
        {
          var Pe = (ue) => {
            var ce = nw(), Ce = X(ce);
            Dt(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (We) => {
                s(i, { bodyRaw: We.target.value });
              }
            }), q(ce), O(ue, ce);
          };
          xe(Me, (ue) => {
            n().bodyType === "raw" && ue(Pe);
          });
        }
        var Be = Z(Me, 2), te = X(Be);
        Ge(te, {
          level: 3,
          mt: "10px",
          children: (ue, ce) => {
            Ne();
            var Ce = Re("输出参数");
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        });
        var Xe = Z(te, 2);
        Fe(Xe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ue, ce) => {
            var Ce = rw();
            O(ue, Ce);
          },
          $$slots: { default: !0 }
        }), q(Be);
        var Ue = Z(Be, 2);
        In(Ue, {}), O(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
se(Rd, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), sw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  de(t, !0), Je(e, uw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ xt(on([]));
  Jt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return Fn(() => {
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
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = aw();
        O(u, c);
      },
      children: (u, c) => {
        var d = lw(), f = be(d), v = X(f);
        Ge(v, {
          level: 3,
          children: (L, R) => {
            Ne();
            var S = Re("输入参数");
            O(L, S);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, R) => {
            var S = sw();
            O(L, S);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Ne();
            var S = Re("知识库设置");
            O(L, S);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = X(C);
        const _ = /* @__PURE__ */ Ee(() => n().knowledgeId ? [n().knowledgeId] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const R = L.value;
            l(o, () => ({ knowledgeId: R }));
          },
          get value() {
            return g(_);
          }
        }), q(C);
        var w = Z(C, 4), k = X(w);
        $t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const R = L.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), q(w);
        var E = Z(w, 4), P = X(E);
        const z = /* @__PURE__ */ Ee(() => n().limit || "");
        $t(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const R = L.target.value;
            l(o, () => ({ limit: R }));
          },
          get value() {
            return g(z);
          }
        }), q(E);
        var N = Z(E, 2), T = X(N);
        Ge(T, {
          level: 3,
          mt: "10px",
          children: (L, R) => {
            Ne();
            var S = Re("输出参数");
            O(L, S);
          },
          $$slots: { default: !0 }
        }), q(N);
        var A = Z(N, 2);
        In(A, {}), O(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
se(Bd, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), dw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const vw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  de(t, !0), Je(e, vw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn(), a = Qn();
  let s = /* @__PURE__ */ xt(on([]));
  Jt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return Fn(() => {
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
  }), gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = cw();
        O(u, c);
      },
      children: (u, c) => {
        var d = fw(), f = be(d), v = X(f);
        Ge(v, {
          level: 3,
          children: (A, L) => {
            Ne();
            var R = Re("输入参数");
            O(A, R);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, L) => {
            var R = dw();
            O(A, R);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = Z(f, 2);
        Zt(b, {});
        var x = Z(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (A, L) => {
            Ne();
            var R = Re("搜索引擎设置");
            O(A, R);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = X(C);
        const _ = /* @__PURE__ */ Ee(() => n().engine ? [n().engine] : []);
        un(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (A) => {
            const L = A.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return g(_);
          }
        }), q(C);
        var w = Z(C, 4), k = X(w);
        $t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const L = A.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), q(w);
        var E = Z(w, 4), P = X(E);
        $t(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const L = A.target.value;
            l(o, () => ({ limit: L }));
          }
        }), q(E);
        var z = Z(E, 2), N = X(z);
        Ge(N, {
          level: 3,
          mt: "10px",
          children: (A, L) => {
            Ne();
            var R = Re("输出参数");
            O(A, R);
          },
          $$slots: { default: !0 }
        }), q(z);
        var T = Z(z, 2);
        In(T, {}), O(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
se(Yd, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), hw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const mw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function qd(e, t) {
  de(t, !0), Je(e, mw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Pn();
  return gn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = gw();
        O(a, s);
      },
      handle: (a) => {
        Gn(a, {
          type: "source",
          get position() {
            return _e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = pw(), u = be(l), c = X(u);
        Ge(c, {
          level: 3,
          children: (x, C) => {
            Ne();
            var h = Re("循环变量");
            O(x, h);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, C) => {
            var h = hw();
            O(x, h);
          },
          $$slots: { default: !0 }
        }), q(u);
        var f = Z(u, 2);
        Zt(f, {});
        var v = Z(f, 2), y = X(v);
        Ge(y, {
          level: 3,
          mt: "10px",
          children: (x, C) => {
            Ne();
            var h = Re("输出参数");
            O(x, h);
          },
          $$slots: { default: !0 }
        }), q(v);
        var b = Z(v, 2);
        In(b, {}), O(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
se(qd, { data: {} }, [], [], !0);
const yw = {
  startNode: zd,
  codeNode: Id,
  llmNode: Ad,
  templateNode: Zd,
  httpNode: Rd,
  knowledgeNode: Bd,
  searchEngineNode: Yd,
  loopNode: qd,
  endNode: Td
};
var ww = /* @__PURE__ */ oe("<!> ", 1);
function Aa(e, t) {
  de(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), a = m(t, "extra", 7);
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
          systemPrompt: "",
          userPrompt: "",
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = ww(), c = be(u);
      ns(c, n);
      var d = Z(c);
      ke(() => Bt(d, ` ${r() ?? ""}`)), O(s, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), p();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), p();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), p();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), p();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), p();
    }
  });
}
se(
  Aa,
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
var bw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), xw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), $w = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Xd(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ xt("base"), r = /* @__PURE__ */ xt("show");
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
  ], a = [], s = Qn().customNodes;
  if (s) {
    const x = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of x)
      a.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = $w(), u = X(l), c = X(u), d = X(c);
  hd(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      F(n, x.value.toString(), !0);
    }
  }), q(c);
  var f = Z(c, 2), v = X(f);
  zt(v, 21, () => o, vo, (x, C) => {
    Aa(x, ct(() => g(C)));
  }), q(v);
  var y = Z(v, 2);
  zt(y, 21, () => a, vo, (x, C) => {
    Aa(x, ct(() => g(C)));
  }), q(y), q(f), q(u);
  var b = Z(u, 2);
  Fe(b, {
    onclick: () => {
      F(r, g(r) ? "" : "show", !0);
    },
    children: (x, C) => {
      var h = et(), _ = be(h);
      {
        var w = (E) => {
          var P = bw();
          O(E, P);
        }, k = (E) => {
          var P = xw();
          O(E, P);
        };
        xe(_, (E) => {
          g(r) === "show" ? E(w) : E(k, !1);
        });
      }
      O(x, h);
    },
    $$slots: { default: !0 }
  }), q(l), ke(() => {
    mt(l, 1, `tf-toolbar ${g(r) ?? ""}`), dt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), dt(y, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, l), fe();
}
se(Xd, {}, [], [], !0);
const Cw = () => {
  const { nodeLookup: e } = qe();
  return {
    getNode: (t) => {
      var n;
      return (n = j(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, _w = () => {
  const { nodes: e } = qe();
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
}, kw = () => {
  const { edges: e } = qe();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var Sw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Ew = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ oe("<!> <div></div> <!>", 1);
const Vw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Wd(e, t) {
  var n;
  de(t, !0), Je(e, Vw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = Pn(), s = Lt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = Qn().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  Fn(() => {
    r().expand && d && d.append(u);
  }), Fn(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ Ee(() => ({
    ...r(),
    description: c.description
  }));
  return gn(e, ct(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var y = et(), b = be(y);
        ns(b, () => c.icon), O(v, y);
      },
      children: (v, y) => {
        var b = Hw(), x = be(b);
        {
          var C = (k) => {
            var E = Pw(), P = be(E), z = X(P);
            Ge(z, {
              level: 3,
              children: (A, L) => {
                Ne();
                var R = Re("输入参数");
                O(A, R);
              },
              $$slots: { default: !0 }
            });
            var N = Z(z, 2);
            Fe(N, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (A, L) => {
                var R = Sw();
                O(A, R);
              },
              $$slots: { default: !0 }
            }), q(P);
            var T = Z(P, 2);
            Zt(T, {}), O(k, E);
          };
          xe(x, (k) => {
            c.parametersEnable !== !1 && k(C);
          });
        }
        var h = Z(x, 2);
        Cn(h, (k) => d = k, () => d);
        var _ = Z(h, 2);
        {
          var w = (k) => {
            var E = Mw(), P = be(E), z = X(P);
            Ge(z, {
              level: 3,
              mt: "10px",
              children: (A, L) => {
                Ne();
                var R = Re("输出参数");
                O(A, R);
              },
              $$slots: { default: !0 }
            });
            var N = Z(z, 2);
            Fe(N, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (A, L) => {
                var R = Ew();
                O(A, R);
              },
              $$slots: { default: !0 }
            }), q(P);
            var T = Z(P, 2);
            In(T, {}), O(k, E);
          };
          xe(_, (k) => {
            c.outputDefsEnable !== !1 && k(w);
          });
        }
        ke(() => {
          dt(h, c.rootStyle || ""), mt(h, 1, fn(c.rootClass), "svelte-c71dg3");
        }), O(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
se(Wd, { data: {} }, [], [], !0);
const Nw = () => {
  const e = qe();
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
var zw = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Dw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), Lw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Tw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Kd(e, t) {
  de(t, !0), Je(e, Tw);
  const [n, r] = tt(), o = () => J(z, "$nodes", n), i = () => J(N, "$edges", n), a = () => J(T, "$viewport", n), s = m(t, "onInit", 7), l = Lt();
  s()(l);
  let u = /* @__PURE__ */ xt(!1), c = /* @__PURE__ */ xt(void 0);
  const { updateEdgeData: d } = Nw(), f = (M) => {
    M.preventDefault(), M.dataTransfer && (M.dataTransfer.dropEffect = "move");
  }, v = (M) => {
    var D;
    M.preventDefault();
    const I = l.screenToFlowPosition({
      x: M.clientX - 250,
      y: M.clientY - 100
    }), Y = (D = M.dataTransfer) == null ? void 0 : D.getData("application/tinyflow"), K = Y ? JSON.parse(Y) : {}, Q = {
      id: `node_${Zr()}`,
      position: I,
      data: {},
      ...K
    };
    ni.addNode(Q), ni.selectNodeOnly(Q.id);
  }, { getNode: y } = Cw(), b = (M) => {
    const D = y(M.source), I = y(M.target);
    if (M.sourceHandle === "loop_handle" || D.parentId) {
      const Y = l.getEdges();
      for (let K of Y)
        if (K.target === M.target) {
          const Q = y(K.source);
          if (M.sourceHandle === "loop_handle" && Q.parentId !== D.id || D.parentId && Q.parentId !== D.parentId)
            return !1;
        }
    }
    return !(!D.parentId && I.parentId && I.parentId !== D.id);
  }, { ensureParentInNodesBefore: x } = _w(), C = (M, D) => {
    if (!D.isValid)
      return;
    const I = D.toNode;
    if (I.parentId)
      return;
    const Y = D.fromNode, K = D.fromHandle, Q = { position: { ...I.position } };
    if (K.id === "loop_handle" ? Q.parentId = Y.id : Y.parentId && (Q.parentId = Y.parentId), Q.parentId) {
      const U = y(Q.parentId);
      Q.position = {
        x: I.position.x - U.position.x,
        y: I.position.y - U.position.y
      }, x(Q.parentId, I.id), l.updateNode(I.id, Q);
    }
  }, { getEdgesByTarget: h } = kw(), _ = (M) => {
    M.edges.forEach((D) => {
      const I = y(D.target);
      if (I && I.parentId) {
        const Y = h(D.target), K = y(I.parentId);
        if (Y.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
            }
          });
        else {
          let Q = !1;
          for (let U = 0; U < Y.length; U++) {
            const W = Y[U], re = y(W.source);
            if (re.parentId || re.type === "loopNode") {
              Q = !0;
              break;
            }
          }
          Q || l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + K.position.x,
              y: I.position.y + K.position.y
            }
          });
        }
      }
    });
  }, w = (M, D) => {
  }, k = (M) => {
  }, E = {}, P = Qn().customNodes;
  if (P)
    for (let M of Object.keys(P))
      E[M] = Wd;
  const { nodes: z, edges: N, viewport: T } = qe(), A = Qn().onDataChange;
  A && (z.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), N.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), T.subscribe(() => {
    A(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = Lw(), R = X(L);
  const S = /* @__PURE__ */ Ee(() => ({ ...yw, ...E })), V = /* @__PURE__ */ Ee(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  ed(R, ct(
    {
      get nodeTypes() {
        return g(S);
      }
    },
    ni,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: C,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: _,
      onclick: (M) => {
        const D = M.target;
        D.classList.contains("svelte-flow__edge-interaction") || D.classList.contains("panel-content") || D.closest(".panel-content") || (F(u, !1), F(c, null));
      },
      get defaultEdgeOptions() {
        return g(V);
      },
      $$events: {
        drop: v,
        dragover: f,
        edgeclick: (M) => {
          F(u, !0), F(c, M.detail.edge, !0);
        }
      },
      children: (M, D) => {
        var I = Dw(), Y = be(I);
        cd(Y, {});
        var K = Z(Y, 2);
        sd(K, {});
        var Q = Z(K, 2);
        fd(Q, {});
        var U = Z(Q, 2);
        {
          var W = (re) => {
            Do(re, {
              children: (ge, pe) => {
                var le = zw(), Ve = Z(X(le), 4), ie = X(Ve);
                const ae = /* @__PURE__ */ Ee(() => {
                  var Me, Pe;
                  return (Pe = (Me = g(c)) == null ? void 0 : Me.data) == null ? void 0 : Pe.condition;
                });
                Dt(ie, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(ae);
                  },
                  onchange: (Me) => {
                    g(c) && d(g(c).id, { condition: Me.target.value });
                  }
                }), q(Ve), q(le), O(ge, le);
              },
              $$slots: { default: !0 }
            });
          };
          xe(U, (re) => {
            g(u) && re(W);
          });
        }
        O(M, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var $ = Z(R, 2);
  Xd($, {}), q(L), O(e, L);
  var H = fe({
    get onInit() {
      return s();
    },
    set onInit(M) {
      s(M), p();
    }
  });
  return r(), H;
}
se(Kd, { onInit: {} }, [], [], !0);
function Ow(e, t) {
  de(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ni.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Vr("tinyflow_options", n()), td(e, {
    fitView: !0,
    children: (i, a) => {
      Kd(i, {
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
      n(i), p();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), p();
    }
  });
}
customElements.define("tinyflow-component", se(Ow, { options: {}, onInit: {} }, [], [], !1));
const qw = /* @__PURE__ */ uf({
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
    const n = e, r = cf(null);
    let o = null;
    return df(() => {
      r.value && (o = new zm({
        ...n,
        element: r.value
      }));
    }), ff(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (gf(), vf("div", {
      ref_key: "divRef",
      ref: r,
      class: pf(["tinyflow", a.className]),
      style: hf(a.style)
    }, null, 6));
  }
});
export {
  qw as Tinyflow
};
//# sourceMappingURL=index.js.map
